import { LANGUAGE_SUBJECTS } from '@/content/oralTopics';
import type { MessageKey } from '@/i18n';

/**
 * What a student checks while listening back to a practice answer. The
 * general points follow what középszint oral exams look for (content,
 * structure, terms, fluent speech, time); the student's own outline adds
 * "did I mention it?" points. Listening to oneself is a practical aid; the
 * evidence for self-recording is weaker than for self-testing.
 */
export interface ChecklistItem {
  key: string;
  /** A message key for general points, or the student's own outline line. */
  label: { key: MessageKey } | { text: string };
}

const GENERAL: Record<'history' | 'literature' | 'language', MessageKey[]> = {
  history: [
    'practice.oral.check.intro',
    'practice.oral.check.timePlace',
    'practice.oral.check.sources',
    'practice.oral.check.terms',
    'practice.oral.check.causes',
    'practice.oral.check.structure',
    'practice.oral.check.fluent',
    'practice.oral.check.time',
  ],
  literature: [
    'practice.oral.check.intro',
    'practice.oral.check.works',
    'practice.oral.check.analysis',
    'practice.oral.check.terms',
    'practice.oral.check.structure',
    'practice.oral.check.style',
    'practice.oral.check.fluent',
    'practice.oral.check.time',
  ],
  language: [
    'practice.oral.check.fullSentences',
    'practice.oral.check.allPoints',
    'practice.oral.check.vocabulary',
    'practice.oral.check.linkers',
    'practice.oral.check.paraphrase',
    'practice.oral.check.pronunciation',
    'practice.oral.check.opinion',
    'practice.oral.check.time',
  ],
};

const MAX_OUTLINE = 8;

/** Outline lines worth checking: not empty, not a heading ending in a colon. */
export function outlinePoints(outline: string): string[] {
  return outline
    .split('\n')
    .map((line) => line.replace(/^\s*(?:[-•*–]|\d+[.)])\s*/, '').trim())
    .filter((line) => line.length > 0 && !line.endsWith(':'))
    .filter((line, index, all) => all.indexOf(line) === index)
    .slice(0, MAX_OUTLINE);
}

export function oralChecklist(subject: string, outline: string): ChecklistItem[] {
  const kind = LANGUAGE_SUBJECTS.includes(subject)
    ? 'language'
    : subject === 'magyar'
      ? 'literature'
      : 'history';
  return [
    ...GENERAL[kind].map((key) => ({ key: key.split('.').pop()!, label: { key } })),
    ...outlinePoints(outline).map((text) => ({ key: `vazlat:${text}`, label: { text } })),
  ];
}

export function checklistScore(
  items: ChecklistItem[],
  checks: Record<string, boolean> | undefined,
): { done: number; total: number } {
  return { done: items.filter((item) => checks?.[item.key]).length, total: items.length };
}
