import type { AutoCheck } from '@/content/schema.types';
import type { Answers } from '@/storage/attempts';
import { keywordText } from './normalize';
import { decimalsOf, isNumberText, numbersIn, parseNumber } from './numbers';
import { asText, isBlank } from './rules';

const QUOTED = /^\s*[„"“'»«‚‘][\s\S]*[”"“'«»’]\s*$/;

/** A keyword appears in the answer: words by their beginning, numbers by value. */
export function hasKeyword(answer: string, keyword: string): boolean {
  if (isNumberText(keyword)) {
    const target = parseNumber(keyword)[0]!;
    // "15,4" also accepts 15,39 or 15,41: compare at the keyword's precision.
    const slack = 0.5 * 10 ** -decimalsOf(keyword) + 1e-9;
    return numbersIn(answer).some((value) => Math.abs(value - target) <= slack);
  }
  const words = ` ${keywordText(answer)} `;
  return words.includes(` ${keywordText(keyword)}`);
}

/** Index of the first alternative the answer satisfies, skipping `exclude`; -1 if none. */
export function matchAlternative(
  answer: string,
  alternatives: string[][][],
  exclude: Set<number> = new Set(),
): number {
  return alternatives.findIndex(
    (groups, index) =>
      !exclude.has(index) && groups.every((group) => group.some((kw) => hasKeyword(answer, kw))),
  );
}

export interface AutoCheckResult {
  met: boolean;
  /** No answer was given in the checked fields. */
  empty: boolean;
  /** Alternatives used, so later "distinct" steps cannot reuse them. */
  used: number[];
}

/**
 * Evaluates one step's automatic check. `taken` holds alternatives already
 * used by earlier steps with the same `distinct` key.
 */
export function runAutoCheck(
  check: AutoCheck,
  answers: Answers,
  taken: Set<number>,
): AutoCheckResult {
  const texts = check.fieldIds.map((id) => answers[id]);
  if (texts.every(isBlank)) return { met: false, empty: true, used: [] };
  const exclude = new Set(taken);
  const used: number[] = [];
  const fits = (raw: string) => {
    if (!raw.trim() || (check.requireQuotes && !QUOTED.test(raw))) return -1;
    return matchAlternative(raw, check.alternatives, exclude);
  };
  if (check.allFields) {
    for (const value of texts) {
      const index = fits(asText(value));
      if (index < 0) return { met: false, empty: false, used: [] };
      exclude.add(index);
      used.push(index);
    }
    return { met: true, empty: false, used };
  }
  for (const value of texts) {
    const index = fits(asText(value));
    if (index >= 0) return { met: true, empty: false, used: [index] };
  }
  return { met: false, empty: false, used: [] };
}
