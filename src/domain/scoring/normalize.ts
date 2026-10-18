import type { Normalize } from '@/content/schema.types';

const QUOTES = /[„“”"‚‘’'»«]/g;
const DASHES = /[‐‑‒–—−]/g;
const SPACES = /[\s\u00a0\u2009\u202f]+/g;
const PUNCTUATION = /[.,;:!?"'()[\]{}…/\\*_-]/g;
const EDGE_PUNCTUATION = /^[\s.,;:!?]+|[\s.,;:!?]+$/g;

export const stripDiacritics = (text: string) =>
  text
    .normalize('NFD')
    .replace(/\p{Mn}/gu, '')
    .normalize('NFC');

/**
 * Text as compared by `text`, `set` and `elements` answers. Always: Unicode
 * NFC, typographic quotes and dashes unified, whitespace collapsed, and
 * sentence punctuation at the edges dropped ("Poitiers." equals "Poitiers").
 */
export function normalizeText(raw: string, options: Normalize = {}): string {
  let text = raw.normalize('NFC').replace(QUOTES, '"').replace(DASHES, '-');
  if (!options.caseSensitive) text = text.toLocaleLowerCase('hu');
  if (options.ignoreDiacritics) text = stripDiacritics(text);
  if (options.ignorePunctuation) text = text.replace(PUNCTUATION, ' ');
  text = text.replace(SPACES, ' ').replace(EDGE_PUNCTUATION, '').trim();
  if (options.ignoreSpaces) text = text.replace(/ /g, '');
  return text;
}

/** Lower-case words without accents or punctuation, for keyword checks. */
export function keywordText(raw: string): string {
  return stripDiacritics(raw.normalize('NFC').toLocaleLowerCase('hu'))
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}
