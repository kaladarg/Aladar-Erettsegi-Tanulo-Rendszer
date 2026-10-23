/**
 * Probability practice for the maths exam: the problem types that come up
 * at középszint, each solvable with one idea, generated with fresh numbers
 * so there is always another one to try. Every problem carries its worked
 * solution step by step (studying worked examples, then solving alone:
 * Renkl & Atkinson, 2003) and an exact answer as a fraction.
 */

export interface Fraction {
  n: number;
  d: number;
}

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

export function frac(n: number, d: number): Fraction {
  const g = gcd(n, d) || 1;
  return { n: n / g, d: d / g };
}

export const value = (f: Fraction) => f.n / f.d;

export function binomial(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let result = 1;
  for (let i = 1; i <= k; i++) result = (result * (n - k + i)) / i;
  return Math.round(result);
}

/** "\frac{5}{36}" for KaTeX, or a whole number. */
export const tex = (f: Fraction) => (f.d === 1 ? String(f.n) : `\\dfrac{${f.n}}{${f.d}}`);

/** Decimal with a comma, rounded to three places: 0,139. */
export const decimal = (x: number) => (Math.round(x * 1000) / 1000).toString().replace('.', ',');

export const KINDS = [
  'egy-huzas',
  'ket-kocka',
  'legalabb-egy',
  'ket-huzas',
  'kivalasztas',
  'erme',
] as const;
export type ProbabilityKind = (typeof KINDS)[number];

export interface ProbabilityProblem {
  kind: ProbabilityKind;
  /** Rich text (KaTeX between $…$). */
  text: string;
  steps: string[];
  answer: Fraction;
}

/** Small seeded random numbers, so a problem can be shown again. */
function random(seed: number) {
  let state = seed >>> 0 || 1;
  return (min: number, max: number) => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return min + ((state >>> 0) % (max - min + 1));
  };
}

const COLOURS = ['piros', 'kék', 'zöld', 'sárga', 'fehér'];

export function makeProblem(kind: ProbabilityKind, seed: number): ProbabilityProblem {
  const r = random(seed);
  switch (kind) {
    case 'egy-huzas': {
      const a = r(2, 9);
      const b = r(2, 9);
      const c = r(1, 6);
      const [x, y, z] = [COLOURS[r(0, 1)]!, COLOURS[2]!, COLOURS[r(3, 4)]!];
      const n = a + b + c;
      const answer = frac(a, n);
      return {
        kind,
        text: `Egy dobozban ${a} ${x}, ${b} ${y} és ${c} ${z} golyó van. Véletlenszerűen kihúzunk egyet. Mekkora a valószínűsége, hogy ${x} golyót húzunk?`,
        steps: [
          `Összes eset: annyi, ahány golyó van: $${a} + ${b} + ${c} = ${n}$.`,
          `Kedvező eset: a ${x} golyók száma: $${a}$.`,
          `Klasszikus valószínűség: $P = \\dfrac{\\text{kedvező}}{\\text{összes}} = \\dfrac{${a}}{${n}}${answer.d !== n ? ` = ${tex(answer)}` : ''} \\approx ${decimal(value(answer))}$.`,
        ],
        answer,
      };
    }
    case 'ket-kocka': {
      const sum = r(4, 10);
      const pairs: string[] = [];
      for (let i = 1; i <= 6; i++)
        for (let j = 1; j <= 6; j++) if (i + j === sum) pairs.push(`(${i};${j})`);
      const answer = frac(pairs.length, 36);
      return {
        kind,
        text: `Két szabályos dobókockával dobunk. Mekkora a valószínűsége, hogy a dobott számok összege ${sum}?`,
        steps: [
          'Összes eset: mindkét kocka 6-féle lehet, és a két kocka megkülönböztethető (sorrend számít): $6 \\cdot 6 = 36$.',
          `Kedvező esetek (első kocka; második kocka): ${pairs.join(', ')}, összesen ${pairs.length} eset.`,
          `$P = \\dfrac{${pairs.length}}{36}${answer.d !== 36 ? ` = ${tex(answer)}` : ''} \\approx ${decimal(value(answer))}$.`,
        ],
        answer,
      };
    }
    case 'legalabb-egy': {
      const k = r(2, 4);
      const answer = frac(6 ** k - 5 ** k, 6 ** k);
      return {
        kind,
        text: `Egy szabályos dobókockával ${k}-szor dobunk egymás után. Mekkora a valószínűsége, hogy legalább egyszer hatost dobunk?`,
        steps: [
          '„Legalább egy” esetén egyszerűbb az ellentett eseményt számolni: egyszer sem dobunk hatost.',
          `Egy dobásnál a nem hatos valószínűsége $\\dfrac{5}{6}$; a dobások függetlenek, ezért a valószínűségek összeszorozhatók: $\\left(\\dfrac{5}{6}\\right)^{${k}} = \\dfrac{${5 ** k}}{${6 ** k}}$.`,
          `A keresett valószínűség az ellentett esemény valószínűségének kiegészítése 1-re: $P = 1 - \\dfrac{${5 ** k}}{${6 ** k}} = ${tex(answer)} \\approx ${decimal(value(answer))}$.`,
        ],
        answer,
      };
    }
    case 'ket-huzas': {
      const red = r(3, 7);
      const other = r(3, 8);
      const n = red + other;
      const answer = frac(red * (red - 1), n * (n - 1));
      return {
        kind,
        text: `Egy urnában ${red} piros és ${other} fehér golyó van. Visszatevés nélkül kihúzunk két golyót. Mekkora a valószínűsége, hogy mindkettő piros?`,
        steps: [
          `Az első húzásnál ${n} golyóból ${red} piros: $\\dfrac{${red}}{${n}}$.`,
          `Visszatevés nélkül a második húzásnál már csak ${n - 1} golyó van, ebből ${red - 1} piros: $\\dfrac{${red - 1}}{${n - 1}}$.`,
          `Mindkettő teljesüljön: a két valószínűség szorzata: $P = \\dfrac{${red}}{${n}} \\cdot \\dfrac{${red - 1}}{${n - 1}} = ${tex(answer)} \\approx ${decimal(value(answer))}$.`,
          `Ugyanez kombinációval: $\\dfrac{\\binom{${red}}{2}}{\\binom{${n}}{2}} = \\dfrac{${binomial(red, 2)}}{${binomial(n, 2)}}$, ami ugyanannyi.`,
        ],
        answer,
      };
    }
    case 'kivalasztas': {
      const girls = r(8, 16);
      const boys = r(8, 16);
      const k = r(2, 3);
      const n = girls + boys;
      const answer = frac(binomial(girls, k), binomial(n, k));
      return {
        kind,
        text: `Egy osztályba ${girls} lány és ${boys} fiú jár. Sorsolással kiválasztanak ${k} tanulót egy versenyre. Mekkora a valószínűsége, hogy mindegyik kiválasztott lány?`,
        steps: [
          `A kiválasztás sorrendje nem számít, ezért kombinációval számolunk. Összes eset: ${n} tanulóból ${k}: $\\binom{${n}}{${k}} = ${binomial(n, k)}$.`,
          `Kedvező eset: a ${girls} lányból választunk ${k}-t: $\\binom{${girls}}{${k}} = ${binomial(girls, k)}$.`,
          `$P = \\dfrac{${binomial(girls, k)}}{${binomial(n, k)}} = ${tex(answer)} \\approx ${decimal(value(answer))}$.`,
        ],
        answer,
      };
    }
    case 'erme': {
      const flips = r(3, 6);
      const heads = r(1, flips - 1);
      const answer = frac(binomial(flips, heads), 2 ** flips);
      return {
        kind,
        text: `Egy szabályos pénzérmét ${flips}-szor feldobunk. Mekkora a valószínűsége, hogy pontosan ${heads}-szor lesz fej?`,
        steps: [
          `Összes eset: minden dobás 2-féle lehet: $2^{${flips}} = ${2 ** flips}$.`,
          `Kedvező esetek: kiválasztjuk, melyik ${heads} dobás legyen fej a ${flips}-ből: $\\binom{${flips}}{${heads}} = ${binomial(flips, heads)}$.`,
          `$P = \\dfrac{${binomial(flips, heads)}}{${2 ** flips}}${answer.d !== 2 ** flips ? ` = ${tex(answer)}` : ''} \\approx ${decimal(value(answer))}$.`,
        ],
        answer,
      };
    }
  }
}

/**
 * Reads an answer as a fraction ("5/36"), a decimal ("0,139") or a percent
 * ("13,9%"). Returns the value and how precise the student was.
 */
export function parseProbability(input: string): { value: number; tolerance: number } | null {
  const text = input.replace(/\s+/g, '').replace(',', '.');
  const fraction = /^(\d+)\/(\d+)$/.exec(text);
  if (fraction) {
    const d = Number(fraction[2]);
    return d > 0 ? { value: Number(fraction[1]) / d, tolerance: 1e-9 } : null;
  }
  const percent = /^(\d+(?:\.(\d+))?)%$/.exec(text);
  if (percent) {
    const places = Math.max(1, percent[2]?.length ?? 0);
    return { value: Number(percent[1]) / 100, tolerance: (0.5 * 10 ** -places) / 100 + 1e-9 };
  }
  const plain = /^(\d+(?:\.(\d+))?)$/.exec(text);
  if (plain) {
    // At least two decimal places are needed: "0.1" is not close enough to 0.139.
    const places = Math.max(2, plain[2]?.length ?? 0);
    return { value: Number(plain[1]), tolerance: 0.5 * 10 ** -places + 1e-9 };
  }
  return null;
}

export type ProbabilityCheck = 'right' | 'wrong' | 'unreadable';

export function checkProbability(input: string, answer: Fraction): ProbabilityCheck {
  const parsed = parseProbability(input);
  if (!parsed) return 'unreadable';
  return Math.abs(parsed.value - value(answer)) <= parsed.tolerance ? 'right' : 'wrong';
}
