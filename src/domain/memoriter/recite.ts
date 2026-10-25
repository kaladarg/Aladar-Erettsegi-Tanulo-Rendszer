/**
 * Checking a memoriter written from memory: the typed words are aligned with the
 * original (longest common subsequence), so one missing word does not make the
 * rest of the line wrong.
 */

export interface ReciteOptions {
  /** Count punctuation marks as part of the words (the exam does). */
  punctuation: boolean;
}

export type WordStatus = 'ok' | 'missing' | 'wrong';

export interface CheckedWord {
  /** The word as in the original. */
  text: string;
  status: WordStatus;
  /** What the student wrote instead, for a wrong word. */
  typed?: string;
}

export interface ReciteResult {
  lines: CheckedWord[][];
  /** Typed words that belong nowhere in the original. */
  extra: string[];
  correct: number;
  total: number;
  /** 0–100: correct words over all words, extra words counted against it. */
  score: number;
}

const QUOTES = /[„”“"'’‘»«]/g;

/** The form two words are compared in. */
export function normalizeWord(word: string, { punctuation }: ReciteOptions): string {
  const lower = word.toLocaleLowerCase('hu').replace(QUOTES, '"').replace(/…/g, '...');
  return punctuation ? lower : lower.replace(/[^\p{L}\p{N}-]/gu, '').replace(/^-+|-+$/g, '');
}

const words = (text: string) => text.split(/\s+/).filter(Boolean);

export function checkRecitation(
  original: string[],
  typed: string,
  options: ReciteOptions,
): ReciteResult {
  const expected = original.flatMap((line, li) => words(line).map((text) => ({ text, li })));
  const given = words(typed)
    .map((text) => ({ text, key: normalizeWord(text, options) }))
    .filter((w) => w.key !== '');
  const keys = expected.map((w) => normalizeWord(w.text, options));
  const n = keys.length;
  const m = given.length;
  // lcs[i][j]: common words of expected[i..] and given[j..].
  const lcs = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      lcs[i]![j] =
        keys[i] === given[j]!.key
          ? lcs[i + 1]![j + 1]! + 1
          : Math.max(lcs[i + 1]![j]!, lcs[i]![j + 1]!);

  const statuses: CheckedWord[] = expected.map((w) => ({ text: w.text, status: 'missing' }));
  const extra: string[] = [];
  let i = 0;
  let j = 0;
  // Words skipped since the last match, to pair a missing word with a wrong one.
  let gapExpected: number[] = [];
  let gapGiven: string[] = [];
  const closeGap = () => {
    gapExpected.forEach((index, k) => {
      const typedWord = gapGiven[k];
      if (typedWord !== undefined)
        statuses[index] = { ...statuses[index]!, status: 'wrong', typed: typedWord };
    });
    extra.push(...gapGiven.slice(gapExpected.length));
    gapExpected = [];
    gapGiven = [];
  };
  while (i < n && j < m) {
    if (keys[i] === given[j]!.key) {
      closeGap();
      statuses[i]!.status = 'ok';
      i++;
      j++;
    } else if (lcs[i + 1]![j]! >= lcs[i]![j + 1]!) gapExpected.push(i++);
    else gapGiven.push(given[j++]!.text);
  }
  while (i < n) gapExpected.push(i++);
  while (j < m) gapGiven.push(given[j++]!.text);
  closeGap();

  const lines: CheckedWord[][] = original.map(() => []);
  expected.forEach((w, index) => lines[w.li]!.push(statuses[index]!));
  const correct = statuses.filter((w) => w.status === 'ok').length;
  const total = n;
  const score = total === 0 ? 0 : Math.round((100 * correct) / (total + extra.length));
  return { lines, extra, correct, total, score };
}

/**
 * Which words to hide at a learning level (0 = none, 1 = all). The choice is
 * fixed per word, so raising the level only hides more of the same text.
 */
export function hiddenWords(count: number, level: number, seed: string): boolean[] {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return Array.from({ length: count }, (_, k) => {
    let x = Math.imul(h ^ (k + 1), 2654435761) >>> 0;
    x = (x ^ (x >>> 15)) >>> 0;
    return (x % 1000) / 1000 < level;
  });
}
