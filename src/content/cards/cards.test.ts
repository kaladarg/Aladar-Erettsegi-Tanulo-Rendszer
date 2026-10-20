import { describe, expect, it } from 'vitest';
import {
  ALL_CARDS,
  CARD_SUBJECTS,
  filterCards,
  filterFromParams,
  filterToParams,
  SUBJECT_DECKS,
  SUBJECT_ERAS,
} from '.';
import { MAP_VIEWS, project } from './projection';

describe('study cards', () => {
  it('have unique, stable-looking ids that start with their deck', () => {
    const ids = ALL_CARDS.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const card of ALL_CARDS) expect(card.id).toMatch(new RegExp(`^${card.deck}-[a-z0-9-]+$`));
  });

  it('fill every deck with text on both sides', () => {
    for (const subject of CARD_SUBJECTS)
      for (const deck of SUBJECT_DECKS[subject])
        expect(filterCards({ subject, deck }).length, deck).toBeGreaterThan(20);
    for (const card of ALL_CARDS) {
      expect(card.front.trim()).not.toBe('');
      expect(card.back.trim()).not.toBe('');
      expect(SUBJECT_DECKS[card.subject]).toContain(card.deck);
      expect(SUBJECT_ERAS[card.subject]).toContain(card.era);
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
    const filter = {
      subject: 'tortenelem',
      deck: 'fogalmak',
      era: 'ujkor',
      scope: 'hungarian',
    } as const;
    expect(filterFromParams(new URLSearchParams(filterToParams(filter)))).toEqual(filter);
    const literature = {
      subject: 'magyar',
      deck: 'muvek',
      era: 'romantika',
      scope: 'all',
    } as const;
    expect(filterFromParams(new URLSearchParams(filterToParams(literature)))).toEqual(literature);
    // A history deck is not valid for literature.
    expect(
      filterFromParams(new URLSearchParams('targy=magyar&pakli=evszamok')).deck,
    ).toBeUndefined();
    expect(filterFromParams(new URLSearchParams('pakli=x&kor=y'))).toEqual({
      subject: 'tortenelem',
      deck: undefined,
      era: undefined,
      scope: 'all',
    });
  });

  it('select by scope', () => {
    expect(filterCards({ scope: 'hungarian' }).every((c) => c.hungarian)).toBe(true);
    expect(filterCards({ subject: 'magyar' }).every((c) => c.subject === 'magyar')).toBe(true);
    expect(filterCards({ scope: 'world' }).every((c) => !c.hungarian)).toBe(true);
  });
});
