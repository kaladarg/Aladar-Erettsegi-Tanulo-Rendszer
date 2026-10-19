import { describe, expect, it } from 'vitest';
import { cardStates, deckCounts, sessionQueue, statusOf, type CardEvent } from './schedule';

const at = (day: string) => new Date(`${day}T12:00:00`).getTime();
const answer = (cardId: string, day: string, known: boolean): CardEvent => ({
  cardId,
  time: at(day),
  known,
});

describe('cardStates', () => {
  it('moves known cards up through 1, 3, 7 and 21 days', () => {
    const events = [answer('a', '2026-10-01', true)];
    expect(cardStates(events).get('a')).toMatchObject({ box: 1, due: '2026-10-02' });
    events.push(answer('a', '2026-10-02', true));
    expect(cardStates(events).get('a')).toMatchObject({ box: 2, due: '2026-10-05' });
    events.push(answer('a', '2026-10-05', true), answer('a', '2026-10-12', true));
    const state = cardStates(events).get('a');
    expect(state).toMatchObject({ box: 4, due: '2026-11-02' });
    expect(statusOf(state)).toBe('mastered');
  });

  it('sends a forgotten card back to the start', () => {
    const states = cardStates([
      answer('a', '2026-10-01', true),
      answer('a', '2026-10-02', true),
      answer('a', '2026-10-05', false),
    ]);
    expect(states.get('a')).toMatchObject({ box: 0, due: '2026-10-06', lapses: 1 });
    expect(statusOf(states.get('a'))).toBe('learning');
    expect(statusOf(undefined)).toBe('new');
  });
});

describe('sessions', () => {
  const states = cardStates([
    answer('a', '2026-10-01', false),
    answer('b', '2026-10-03', false),
    answer('c', '2026-10-01', true),
  ]);
  const ids = ['a', 'b', 'c', 'd', 'e', 'f'];

  it('counts deck progress', () => {
    expect(deckCounts(ids, states, '2026-10-02')).toEqual({
      total: 6,
      new: 3,
      learning: 3,
      mastered: 0,
      due: 2,
    });
  });

  it('puts due cards first, then a limited number of new ones', () => {
    expect(sessionQueue(ids, states, 2, '2026-10-04')).toEqual(['a', 'c', 'b', 'd', 'e']);
    expect(sessionQueue(ids, states, 0, '2026-10-01')).toEqual([]);
  });
});
