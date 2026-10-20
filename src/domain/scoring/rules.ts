import type { Field, Normalize, PartialCredit, Rule } from '@/content/schema.types';
import type { AnswerValue, Answers } from '@/storage/attempts';
import { normalizeText } from './normalize';
import { isNumberText, parseNumber } from './numbers';

export type ResultStatus = 'correct' | 'partial' | 'wrong' | 'empty';

export interface RuleResult {
  ruleId: string;
  points: number;
  maxPoints: number;
  status: ResultStatus;
  /** Whether each field's answer was right (absent: not judged on its own). */
  fields: Record<string, boolean>;
}

interface Counts {
  correct: number;
  wrong: number;
  errors: number;
  total: number;
}

const DEFAULT_TOLERANCE = 1e-9;

export const asText = (value: AnswerValue | undefined): string =>
  value === undefined ? '' : Array.isArray(value) ? value.join(', ') : value;

export const asList = (value: AnswerValue | undefined): string[] =>
  value === undefined ? [] : Array.isArray(value) ? value : value === '' ? [] : [value];

export const isBlank = (value: AnswerValue | undefined) => asList(value).every((v) => !v.trim());

/** Two written answers are the same: numerically for numbers, as normalized text otherwise. */
export function sameAnswer(answer: string, expected: string, normalize?: Normalize): boolean {
  if (isNumberText(expected)) {
    const target = parseNumber(expected)[0]!;
    return parseNumber(answer).some((value) => Math.abs(value - target) <= DEFAULT_TOLERANCE);
  }
  return normalizeText(answer, normalize) === normalizeText(expected, normalize);
}

/** Points from partial-credit settings; all-or-nothing without them. */
export function partialPoints(points: number, partial: PartialCredit | undefined, c: Counts) {
  const clamp = (value: number) => Math.max(0, Math.min(points, value));
  if (!partial) return c.errors === 0 && c.correct === c.total ? points : 0;
  if (partial.errorsTable) {
    // Each row gives the points for up to that many errors.
    const row = [...partial.errorsTable]
      .sort((a, b) => a.errors - b.errors)
      .find((r) => c.errors <= r.errors);
    return clamp(row?.points ?? 0);
  }
  if (partial.table) {
    const best = partial.table
      .filter((r) => c.correct >= r.correct)
      .reduce((max, r) => Math.max(max, r.points), 0);
    return clamp(c.errors === 0 && c.correct === c.total ? points : best);
  }
  if (partial.perItem) {
    const extra =
      partial.maxMarks !== undefined
        ? Math.max(0, c.correct + c.wrong - partial.maxMarks)
        : partial.penalizeWrong
          ? c.wrong
          : 0;
    return clamp((c.correct - extra) * partial.perItem);
  }
  return clamp(c.errors === 0 && c.correct === c.total ? points : 0);
}

/** Splits "A = {1; 2; 3}" or "1, 2, 3" into its elements. */
export function parseElements(raw: string): string[] {
  let text = raw.includes('=') ? raw.slice(raw.lastIndexOf('=') + 1) : raw;
  text = text.replace(/[{}[\]()]/g, ' ').trim();
  const parts = text.includes(';')
    ? text.split(';')
    : text.includes(',')
      ? text.split(',')
      : text.split(/\s+/);
  return [...new Set(parts.map((p) => p.trim()).filter(Boolean))];
}

/** Largest number of fields that can each be matched to a different item. */
function matchAny(answers: string[], items: string[][], normalize?: Normalize) {
  const owner = new Array<number>(items.length).fill(-1);
  const fits = (a: number, i: number) =>
    items[i]!.some((v) => sameAnswer(answers[a]!, v, normalize));
  const tryAssign = (a: number, seen: boolean[]): boolean => {
    for (let i = 0; i < items.length; i++) {
      if (seen[i] || !fits(a, i)) continue;
      seen[i] = true;
      if (owner[i] === -1 || tryAssign(owner[i]!, seen)) {
        owner[i] = a;
        return true;
      }
    }
    return false;
  };
  answers.forEach((answer, a) => {
    if (answer.trim()) tryAssign(a, new Array<boolean>(items.length).fill(false));
  });
  // A field, once matched, stays matched when augmenting paths reassign items.
  return new Set(owner.filter((a) => a >= 0));
}

export function evaluateRule(rule: Rule, answers: Answers, fields: Map<string, Field>): RuleResult {
  const values = rule.fieldIds.map((id) => answers[id]);
  const base = { ruleId: rule.id, maxPoints: rule.points };
  if (values.every(isBlank)) {
    return { ...base, points: 0, status: 'empty', fields: {} };
  }
  const answer = rule.answer;
  const fieldResults: Record<string, boolean> = {};
  let counts: Counts;

  switch (answer.kind) {
    case 'text': {
      const text = asText(values[0]);
      const ok = answer.accepted.some(
        (accepted) =>
          normalizeText(text, answer.normalize) === normalizeText(accepted, answer.normalize),
      );
      fieldResults[rule.fieldIds[0]!] = ok;
      counts = { correct: ok ? 1 : 0, wrong: ok ? 0 : 1, errors: ok ? 0 : 1, total: 1 };
      break;
    }
    case 'number': {
      const unit = fields.get(rule.fieldIds[0]!)?.unit;
      const candidates = parseNumber(asText(values[0]), unit);
      const tolerance = answer.tolerance ?? DEFAULT_TOLERANCE;
      const ok = candidates.some((value) =>
        answer.accepted.some((target) => Math.abs(value - target) <= tolerance + DEFAULT_TOLERANCE),
      );
      fieldResults[rule.fieldIds[0]!] = ok;
      counts = { correct: ok ? 1 : 0, wrong: ok ? 0 : 1, errors: ok ? 0 : 1, total: 1 };
      break;
    }
    case 'choice': {
      const selected = new Set(values.flatMap(asList));
      const correct = answer.correct.filter((v) => selected.has(v)).length;
      const wrong = [...selected].filter((v) => !answer.correct.includes(v)).length;
      const missing = answer.correct.length - correct;
      rule.fieldIds.forEach((id) => (fieldResults[id] = wrong === 0 && missing === 0));
      counts = { correct, wrong, errors: wrong + missing, total: answer.correct.length };
      break;
    }
    case 'matching': {
      let correct = 0;
      for (const [id, expected] of Object.entries(answer.pairs)) {
        const ok = asList(answers[id]).length === 1 && sameAnswer(asText(answers[id]), expected);
        fieldResults[id] = ok;
        if (ok) correct++;
      }
      const total = Object.keys(answer.pairs).length;
      counts = { correct, wrong: total - correct, errors: total - correct, total };
      break;
    }
    case 'set': {
      const texts = values.map(asText);
      let matched: Set<number>;
      if (answer.order === 'fixed') {
        matched = new Set(
          texts
            .map((text, i) =>
              answer.items[i]?.some((v) => sameAnswer(text, v, answer.normalize)) ? i : -1,
            )
            .filter((i) => i >= 0),
        );
      } else {
        matched = matchAny(texts, answer.items, answer.normalize);
      }
      rule.fieldIds.forEach((id, i) => (fieldResults[id] = matched.has(i)));
      const total = rule.fieldIds.length;
      counts = {
        correct: matched.size,
        wrong: total - matched.size,
        errors: total - matched.size,
        total,
      };
      break;
    }
    case 'elements': {
      const given = parseElements(asText(values[0]));
      const expected = answer.elements;
      const hit = (g: string) => expected.some((e) => sameAnswer(g, e, answer.normalize));
      const correct = expected.filter((e) =>
        given.some((g) => sameAnswer(g, e, answer.normalize)),
      ).length;
      const wrong = given.filter((g) => !hit(g)).length;
      const missing = expected.length - correct;
      fieldResults[rule.fieldIds[0]!] = wrong === 0 && missing === 0;
      counts = { correct, wrong, errors: wrong + missing, total: expected.length };
      break;
    }
  }

  let points = partialPoints(rule.points, rule.partial, counts);
  // "Tick n" tasks: marking every box earns nothing, as the marking schemes say.
  if (answer.kind === 'choice' && rule.partial?.maxMarks !== undefined) {
    const options = rule.fieldIds.reduce((n, id) => n + (fields.get(id)?.options?.length ?? 0), 0);
    if (options > 0 && new Set(values.flatMap(asList)).size >= options) points = 0;
  }
  const status: ResultStatus = points >= rule.points ? 'correct' : points > 0 ? 'partial' : 'wrong';
  return { ...base, points, status, fields: fieldResults };
}

/** The accepted answer of a rule, for showing next to the student's. */
export function expectedAnswer(rule: Rule, fields: Map<string, Field>): string {
  const answer = rule.answer;
  const optionLabel = (fieldId: string, value: string) => {
    const option = fields.get(fieldId)?.options?.find((o) => o.value === value);
    return option && option.label !== option.value ? `${option.value}) ${option.label}` : value;
  };
  switch (answer.kind) {
    case 'text':
      return answer.accepted.join(' / ');
    case 'number': {
      const unit = fields.get(rule.fieldIds[0]!)?.unit;
      return answer.accepted
        .map((n) => `${String(n).replace('.', ',')}${unit ? ` ${unit}` : ''}`)
        .join(' / ');
    }
    case 'choice':
      return answer.correct.map((v) => optionLabel(rule.fieldIds[0]!, v)).join('; ');
    case 'matching':
      return Object.entries(answer.pairs)
        .map(([id, v]) => {
          const label = fields.get(id)?.label;
          return label ? `${label}: ${v}` : v;
        })
        .join('; ');
    case 'set':
      return answer.items.map((variants) => variants.join(' / ')).join('; ');
    case 'elements':
      return answer.elements.join('; ');
  }
}
