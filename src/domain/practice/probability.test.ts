import { describe, expect, it } from 'vitest';
import {
  binomial,
  checkProbability,
  frac,
  KINDS,
  makeProblem,
  parseProbability,
  value,
} from './probability';

const numbers = (text: string) => [...text.matchAll(/\d+/g)].map((m) => Number(m[0]));

describe('makeProblem', () => {
  it('gives an answer between 0 and 1 and at least two steps for every kind', () => {
    for (const kind of KINDS)
      for (let seed = 1; seed < 40; seed++) {
        const p = makeProblem(kind, seed);
        expect(value(p.answer)).toBeGreaterThan(0);
        expect(value(p.answer)).toBeLessThan(1);
        expect(p.steps.length).toBeGreaterThanOrEqual(2);
      }
  });

  it('matches counting every outcome for two dice', () => {
    for (let seed = 1; seed < 30; seed++) {
      const p = makeProblem('ket-kocka', seed);
      const sum = numbers(p.text).at(-1)!;
      let hits = 0;
      for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === sum) hits++;
      expect(value(p.answer)).toBeCloseTo(hits / 36, 12);
    }
  });

  it('matches counting every outcome for coins and for "at least one six"', () => {
    for (let seed = 1; seed < 30; seed++) {
      const coins = makeProblem('erme', seed);
      const [flips, heads] = numbers(coins.text);
      let hits = 0;
      for (let mask = 0; mask < 2 ** flips!; mask++)
        if (mask.toString(2).split('1').length - 1 === heads) hits++;
      expect(value(coins.answer)).toBeCloseTo(hits / 2 ** flips!, 12);

      const six = makeProblem('legalabb-egy', seed);
      const [k] = numbers(six.text);
      let none = 0;
      for (let roll = 0; roll < 6 ** k!; roll++) {
        let x = roll;
        let any = false;
        for (let i = 0; i < k!; i++, x = Math.floor(x / 6)) any ||= x % 6 === 5;
        if (!any) none++;
      }
      expect(value(six.answer)).toBeCloseTo(1 - none / 6 ** k!, 12);
    }
  });

  it('draws without replacement like ordered pairs', () => {
    for (let seed = 1; seed < 20; seed++) {
      const p = makeProblem('ket-huzas', seed);
      const [red, other] = numbers(p.text);
      const n = red! + other!;
      let hits = 0;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) if (i !== j && i < red! && j < red!) hits++;
      expect(value(p.answer)).toBeCloseTo(hits / (n * (n - 1)), 12);
    }
  });

  it('is the same for the same seed', () => {
    expect(makeProblem('kivalasztas', 7)).toEqual(makeProblem('kivalasztas', 7));
  });
});

describe('fractions and binomials', () => {
  it('reduces and counts', () => {
    expect(frac(6, 36)).toEqual({ n: 1, d: 6 });
    expect(binomial(5, 2)).toBe(10);
    expect(binomial(30, 3)).toBe(4060);
  });
});

describe('checkProbability', () => {
  const answer = frac(5, 36); // 0.1388…
  it('accepts a fraction, a rounded decimal or a percent', () => {
    expect(checkProbability('5/36', answer)).toBe('right');
    expect(checkProbability('10 / 72', answer)).toBe('right');
    expect(checkProbability('0,139', answer)).toBe('right');
    expect(checkProbability('0.14', answer)).toBe('right');
    expect(checkProbability('13,9%', answer)).toBe('right');
  });

  it('rejects wrong or too rough answers', () => {
    expect(checkProbability('1/6', answer)).toBe('wrong');
    expect(checkProbability('0.1', answer)).toBe('wrong');
    expect(checkProbability('0.15', answer)).toBe('wrong');
    expect(checkProbability('öt', answer)).toBe('unreadable');
    expect(parseProbability('3/0')).toBeNull();
  });
});
