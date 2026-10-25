import { describe, expect, it } from 'vitest';
import { MEMORITEREK } from './poems';

describe('memoriter texts', () => {
  it('lists the 18 texts of the official list once each', () => {
    expect(MEMORITEREK).toHaveLength(18);
    expect(new Set(MEMORITEREK.map((p) => p.id)).size).toBe(18);
    expect(MEMORITEREK.filter((p) => p.grade === '9-10')).toHaveLength(12);
    expect(MEMORITEREK.filter((p) => p.grade === '11-12')).toHaveLength(6);
  });

  it('has no empty stanzas or lines and keeps the known stanza counts', () => {
    for (const poem of MEMORITEREK)
      for (const stanza of poem.stanzas) {
        expect(stanza.lines.length, poem.id).toBeGreaterThan(0);
        for (const line of stanza.lines) expect(line.trim(), poem.id).toBe(line);
      }
    const stanzas = (id: string) => MEMORITEREK.find((p) => p.id === id)!.stanzas.length;
    expect(stanzas('kolcsey-himnusz')).toBe(8);
    expect(stanzas('vorosmarty-szozat')).toBe(14);
    expect(stanzas('csokonai-a-remenyhez')).toBe(4);
  });

  it('keeps the stanza order of the two-column poems', () => {
    const first = (id: string, i: number) =>
      MEMORITEREK.find((p) => p.id === id)!.stanzas[i]!.lines[0];
    expect(first('kolcsey-himnusz', 4)).toBe('Hányszor zengett ajkain');
    expect(first('vorosmarty-szozat', 7)).toBe('Az nem lehet hogy annyi szív');
    expect(first('ady-gog-es-magog', 2)).toBe('Fülembe forró ólmot öntsetek,');
    expect(first('csokonai-a-remenyhez', 2)).toBe('Jaj, de friss rózsáim');
  });
});
