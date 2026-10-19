import { describe, expect, it } from 'vitest';
import { ALL_CARDS, DECKS, ERAS, filterCards, filterFromParams, filterToParams } from '.';
import { MAP_VIEWS, project } from './projection';

describe('history cards', () => {
  it('have unique, stable-looking ids that start with their deck', () => {
    const ids = ALL_CARDS.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const card of ALL_CARDS) expect(card.id).toMatch(new RegExp(`^${card.deck}-[a-z0-9-]+$`));
  });

  it('fill every deck with text on both sides', () => {
    for (const deck of DECKS) expect(filterCards({ deck }).length).toBeGreaterThan(20);
    for (const card of ALL_CARDS) {
      expect(card.front.trim()).not.toBe('');
      expect(card.back.trim()).not.toBe('');
      expect(ERAS).toContain(card.era);
      expect(`${card.front} ${card.back} ${card.note ?? ''}`).not.toContain('—');
    }
  });

  it('put every place inside its map view, without naming it in the hint', () => {
    for (const card of filterCards({ deck: 'topografia' })) {
      expect(card.place, card.id).toBeDefined();
      const { lat, lon, view } = card.place!;
      const [x, y] = project(lon, lat);
      const v = MAP_VIEWS[view];
      expect(x, card.id).toBeGreaterThan(v.x);
      expect(x, card.id).toBeLessThan(v.x + v.w);
      expect(y, card.id).toBeGreaterThan(v.y);
      expect(y, card.id).toBeLessThan(v.y + v.h);
      expect(card.front.toLowerCase()).not.toContain(card.back.toLowerCase());
    }
  });
});

describe('filters', () => {
  it('round-trip through the address', () => {
    const filter = { deck: 'fogalmak', era: 'ujkor', scope: 'hungarian' } as const;
    expect(filterFromParams(new URLSearchParams(filterToParams(filter)))).toEqual(filter);
    expect(filterFromParams(new URLSearchParams('pakli=x&kor=y'))).toEqual({
      deck: undefined,
      era: undefined,
      scope: 'all',
    });
  });

  it('select by scope', () => {
    expect(filterCards({ scope: 'hungarian' }).every((c) => c.hungarian)).toBe(true);
    expect(filterCards({ scope: 'world' }).every((c) => !c.hungarian)).toBe(true);
  });
});
