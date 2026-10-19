const MINUS = /[‐‑‒–—−]/g;
// Thousands are grouped with spaces on one line ("10 593"); a line break always separates numbers.
const GROUP_SPACE = /(\d)[ \t\u00a0\u2009\u202f]+(?=\d{3}(\D|$))/g;
const DECIMAL = String.raw`[+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)`;
const ROOT = new RegExp(String.raw`^(${DECIMAL})?\s*[·*]?\s*√\s*\(?\s*(\d+(?:[.,]\d+)?)\s*\)?$`);
const NUMBER = new RegExp(String.raw`^(${DECIMAL})(?:\s*/\s*(${DECIMAL}))?\s*(%)?$`);

function parseDecimal(text: string): number {
  // Hungarian decimal comma; a lone dot is read as a decimal point too.
  return Number(text.replace(',', '.'));
}

/**
 * Reads a student's number the way a teacher would: "1,5", "1.5", "−1,5",
 * "19 260", "5/9", "55%", "x = 6", "7 cm". Returns the candidate values (a
 * percentage can mean 55 or 0.55), or an empty list when it is not a number.
 */
export function parseNumber(raw: string, unit?: string): number[] {
  let text = raw.trim().replace(MINUS, '-').replace(/≈|~/g, '');
  // "x = 6" or "S₆ = 13,5": keep what follows the last equals sign.
  if (text.includes('=')) text = text.slice(text.lastIndexOf('=') + 1);
  text = text.trim();
  if (unit && text.toLocaleLowerCase('hu').endsWith(unit.toLocaleLowerCase('hu')))
    text = text.slice(0, -unit.length);
  // Other trailing units or words ("cm", "Ft", "fő", "év").
  text = text.replace(/\s*[\p{L}²³°]+\.?$/u, '').trim();
  // An ordinal or sentence-final dot: "12." (as in "12. év").
  text = text.replace(/^([+-]?\d+)\.$/, '$1');
  text = text.replace(GROUP_SPACE, '$1');
  // Exact roots: "√80", "√(80)", "2√5", "2·√5".
  const root = ROOT.exec(text);
  if (root) {
    const factor = root[1] ? parseDecimal(root[1]) : 1;
    const value = factor * Math.sqrt(parseDecimal(root[2]!));
    return Number.isFinite(value) ? [value] : [];
  }
  // Thousands separated by dots when a decimal comma is present ("19.260,5").
  if (text.includes(',') && text.includes('.')) text = text.replace(/\./g, '');
  const match = NUMBER.exec(text);
  if (!match) return [];
  let value = parseDecimal(match[1]!);
  if (match[2] !== undefined) {
    const divisor = parseDecimal(match[2]);
    if (divisor === 0) return [];
    value /= divisor;
  }
  if (!Number.isFinite(value)) return [];
  return match[3] ? [value / 100, value] : [value];
}

/** Every number written in a text, e.g. in a maths working area. */
export function numbersIn(raw: string): number[] {
  const text = raw.replace(MINUS, '-').replace(GROUP_SPACE, '$1');
  return [...text.matchAll(/-?\d+(?:[.,]\d+)?/g)].map((m) => parseDecimal(m[0]));
}

/** Decimal places of a number as written ("15,4" → 1). */
export const decimalsOf = (text: string) => /[.,](\d+)$/.exec(text.trim())?.[1]?.length ?? 0;

export const isNumberText = (text: string) =>
  /^-?\d+(?:[.,]\d+)?$/.test(text.trim().replace(MINUS, '-'));
