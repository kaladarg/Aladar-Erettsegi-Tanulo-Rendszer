import { describe, expect, it } from 'vitest';
import { loadGuideUnits } from '.';
import { searchGuide } from './search';

const units = await loadGuideUnits();

describe('searchGuide', () => {
  it('finds pages regardless of case and accents', () => {
    const hits = searchGuide(units, 'aranybulla', 'kozep');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0]!.snippet.toLowerCase()).toContain('aranybulla');
  });

  it('needs every word and ignores one-letter words', () => {
    expect(searchGuide(units, 'monszun', 'kozep').length).toBeGreaterThan(0);
    expect(searchGuide(units, 'monszun xyzqw', 'kozep')).toEqual([]);
    expect(searchGuide(units, 'a', 'kozep')).toEqual([]);
  });

  it('leaves emelt-only pages out at középszint', () => {
    const emelt = searchGuide(units, 'ősi kultúrák', 'emelt', 500);
    const kozep = searchGuide(units, 'ősi kultúrák', 'kozep', 500);
    expect(kozep.every(({ page }) => page.level !== 'emelt')).toBe(true);
    expect(emelt.length).toBeGreaterThanOrEqual(kozep.length);
  });
});
