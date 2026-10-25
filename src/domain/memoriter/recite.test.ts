import { describe, expect, it } from 'vitest';
import { checkRecitation, hiddenWords, normalizeWord } from './recite';

const POEM = [
  'Gyűlölök és szeretek. Miért? Nem tudom én se, de érzem:',
  'így van ez, és a szívem élve keresztre feszít.',
];
const loose = { punctuation: false };
const strict = { punctuation: true };

describe('checkRecitation', () => {
  it('accepts a perfect recitation, ignoring case and line breaks', () => {
    const r = checkRecitation(POEM, POEM.join(' ').toUpperCase(), strict);
    expect(r.score).toBe(100);
    expect(r.correct).toBe(r.total);
  });

  it('ignores punctuation unless asked', () => {
    const typed =
      'Gyűlölök és szeretek Miért Nem tudom én se de érzem így van ez és a szívem élve keresztre feszít';
    expect(checkRecitation(POEM, typed, loose).score).toBe(100);
    expect(checkRecitation(POEM, typed, strict).score).toBeLessThan(100);
  });

  it('marks a missing word without breaking the rest of the line', () => {
    const r = checkRecitation(
      POEM,
      'Gyűlölök és szeretek. Miért? Nem tudom se, de érzem: így van ez, és a szívem élve keresztre feszít.',
      strict,
    );
    const first = r.lines[0]!;
    expect(first.find((w) => w.text === 'én')?.status).toBe('missing');
    expect(first.filter((w) => w.status === 'ok')).toHaveLength(first.length - 1);
  });

  it('pairs a misspelt word with the original and keeps accents significant', () => {
    const r = checkRecitation(['Isten, áldd meg a magyart'], 'Isten, áld meg a magyart', strict);
    expect(r.lines[0]![1]).toEqual({ text: 'áldd', status: 'wrong', typed: 'áld' });
    expect(
      checkRecitation(['Hazádnak rendületlenűl'], 'Hazadnak rendületlenűl', loose).correct,
    ).toBe(1);
  });

  it('counts extra words against the score', () => {
    const r = checkRecitation(['egy kettő'], 'egy kettő három négy', loose);
    expect(r.extra).toEqual(['három', 'négy']);
    expect(r.score).toBe(50);
  });

  it('treats typographic and straight quotes alike', () => {
    expect(normalizeWord('„Szeresd', strict)).toBe(normalizeWord('"Szeresd', strict));
  });
});

describe('hiddenWords', () => {
  it('hides nothing at 0 and everything at 1', () => {
    expect(hiddenWords(50, 0, 'x').some(Boolean)).toBe(false);
    expect(hiddenWords(50, 1, 'x').every(Boolean)).toBe(true);
  });

  it('only adds hidden words as the level rises', () => {
    const half = hiddenWords(200, 0.5, 'szozat');
    const more = hiddenWords(200, 0.75, 'szozat');
    half.forEach((hidden, k) => {
      if (hidden) expect(more[k]).toBe(true);
    });
    const share = half.filter(Boolean).length / 200;
    expect(share).toBeGreaterThan(0.35);
    expect(share).toBeLessThan(0.65);
  });
});
