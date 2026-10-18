import { describe, expect, it } from 'vitest';
import { countWords } from './text';

describe('countWords', () => {
  it('counts Hungarian words with accents', () => {
    expect(countWords('Árvíztűrő tükörfúrógép, ősz és űr.')).toBe(5);
  });
  it('ignores punctuation, dashes and extra whitespace', () => {
    expect(countWords('  Igen – nem?\n\n„Talán” ... ')).toBe(3);
  });
  it('keeps hyphenated words and numbers together', () => {
    expect(countWords('a Tihanyi-félsziget 2024-ben 3 km')).toBe(5);
  });
  it('returns 0 for empty text', () => {
    expect(countWords('')).toBe(0);
    expect(countWords(' \n ')).toBe(0);
  });
});
