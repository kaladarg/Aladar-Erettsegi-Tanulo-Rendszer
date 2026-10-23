import { describe, expect, it } from 'vitest';
import type { Criterion } from '@/content/schema.types';
import {
  directives,
  estimate,
  listItems,
  outlineSlots,
  slotDone,
  type Rating,
} from './essayOutline';

const c = (id: string, label: string, maxPoints: number): Criterion => ({ id, label, maxPoints });

const SHORT = [
  c('feladatmegertes', 'Feladatmegértés', 2),
  c('t', 'T: Tájékozódás térben és időben', 2),
  c('k1', 'K1: Kommunikáció (fogalmak)', 2),
  c('k2', 'K2: Kommunikáció (szövegalkotás)', 2),
  c('f', 'F: Ismeretszerzés, források használata', 3),
  c('e1', 'E1: Történelmi gondolkodás és ismeretek', 3),
  c('e2', 'E2: Történelmi gondolkodás és ismeretek', 3),
];
const LONG = [
  c('feladatmegertes', 'Feladatmegértés', 2),
  c('t1', 'T1: Tájékozódás időben', 2),
  c('t2', 'T2: Tájékozódás térben', 2),
  c('k1', 'K1: Kommunikáció (általános fogalmak)', 2),
  c('k2', 'K2: Kommunikáció (konkrét fogalmak)', 2),
  c('k3', 'K3: Kommunikáció (szövegalkotás)', 2),
  ...['f1', 'f2', 'f3'].map((id) => c(id, `${id.toUpperCase()}: Források használata`, 3)),
  ...['e1', 'e2', 'e3', 'e4'].map((id) => c(id, `${id.toUpperCase()}: Ismeretek`, 3)),
];
const LITERATURE = [
  c('tartalom', 'Tartalmi minőség', 30),
  c('szerkezet', 'Szövegszerkezet', 5),
  c('nyelv', 'Nyelvi igényesség', 5),
];

describe('outlineSlots', () => {
  it('plans a short history essay from its criteria', () => {
    const slots = outlineSlots('history-short', SHORT);
    expect(slots.map((s) => s.id)).toEqual([
      'intro',
      'time',
      'place',
      'concepts',
      'f',
      'e1',
      'e2',
      'conclusion',
    ]);
    expect(slots.find((s) => s.id === 'time')?.criterionIds).toEqual(['t']);
  });

  it('splits general and concrete concepts in a long essay', () => {
    const slots = outlineSlots('history-long', LONG);
    expect(slots.filter((s) => s.group === 'concepts').map((s) => s.id)).toEqual([
      'concepts-general',
      'concepts-concrete',
    ]);
    expect(slots.filter((s) => s.group === 'source')).toHaveLength(3);
    expect(slots.filter((s) => s.group === 'knowledge').map((s) => s.index)).toEqual([1, 2, 3, 4]);
  });

  it('reads criteria without letter codes (the demo paper)', () => {
    const slots = outlineSlots('history-short', [
      c('c2', 'Tájékozódás térben és időben', 2),
      c('c3', 'Szaknyelv alkalmazása', 2),
      c('c4', 'Források használata', 4),
      c('c5', 'Események és összefüggések', 4),
      c('c6', 'Megszerkesztettség, nyelvhelyesség', 2),
    ]);
    expect(slots.map((s) => s.group)).toEqual([
      'intro',
      'time',
      'place',
      'concepts',
      'source',
      'knowledge',
      'conclusion',
    ]);
  });

  it('gives a literature essay a thesis, three points and a frame', () => {
    expect(outlineSlots('literature', LITERATURE).map((s) => s.id)).toEqual([
      'thesis',
      'intro',
      'point-1',
      'point-2',
      'point-3',
      'conclusion',
    ]);
  });
});

describe('slotDone', () => {
  const [concepts] = outlineSlots('history-short', SHORT).filter((s) => s.group === 'concepts');
  const [pair] = outlineSlots('history-short', SHORT).filter((s) => s.group === 'source');
  it('needs three concepts and both halves of a pair', () => {
    expect(slotDone(concepts!, { concepts: 'liberalizmus, alkotmány' })).toBe(false);
    expect(slotDone(concepts!, { concepts: 'liberalizmus\nalkotmány\nnemzetállam' })).toBe(true);
    expect(slotDone(pair!, { 'f.fact': 'közös nyelv' })).toBe(false);
    expect(slotDone(pair!, { 'f.fact': 'közös nyelv', 'f.point': 'cél a nemzetállam' })).toBe(true);
  });
  it('splits lists on lines, commas and semicolons', () => {
    expect(listItems(' a, b ;c\n\n d ')).toEqual(['a', 'b', 'c', 'd']);
  });
});

describe('directives', () => {
  it('lists each question of the task', () => {
    expect(
      directives(
        '**A feladat a 19. századi eszmékhez kapcsolódik.** (rövid)\n\n**Mutassa be a liberalizmus céljait! Térjen ki a közös célra is!**',
      ),
    ).toEqual(['Mutassa be a liberalizmus céljait!', 'Térjen ki a közös célra is!']);
  });
});

describe('estimate', () => {
  const all = (rating: Rating, criteria: Criterion[]) =>
    Object.fromEntries(criteria.map((x) => [x.id, rating]));

  it('gives full points for a fully rated outline', () => {
    const result = estimate('history-short', SHORT, all('full', SHORT));
    expect(result).toMatchObject({ points: 17, maxPoints: 17, complete: true });
    expect(result.derived).toEqual({ feladatmegertes: 2 });
  });

  it('derives Feladatmegértés from the F and E points', () => {
    // F + E: 3 of 9 points (less than half) → 1 point.
    const ratings = { ...all('none', SHORT), t: 'full', f: 'full' } as Record<string, Rating>;
    const result = estimate('history-short', SHORT, ratings);
    expect(result.derived.feladatmegertes).toBe(1);
    expect(result.points).toBe(2 + 3 + 1);
  });

  it('is zero when no F or E point is earned', () => {
    const ratings = { ...all('none', SHORT), t: 'full', k1: 'full' } as Record<string, Rating>;
    expect(estimate('history-short', SHORT, ratings).points).toBe(0);
  });

  it('rounds partial ratings up and reports missing ratings', () => {
    const result = estimate('literature', LITERATURE, { tartalom: 'partial', szerkezet: 'full' });
    expect(result).toMatchObject({ points: 20, maxPoints: 40, complete: false });
  });
});
