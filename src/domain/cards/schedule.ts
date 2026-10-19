import { dayKey } from '@/storage/db';

/**
 * Leitner schedule for study cards. A card the student knew moves up a box
 * and comes back after 1, 3, 7 and then 21 days; a card they did not know
 * goes back to the first box and returns the next day. Box 4 counts as
 * learnt, but still comes back every 21 days to keep it fresh.
 * Retrieval practice with growing gaps (Roediger & Karpicke, 2006;
 * Cepeda et al., 2006).
 */
export const CARD_INTERVALS = [1, 3, 7, 21] as const;
export const MASTERED_BOX = CARD_INTERVALS.length;

export interface CardEvent {
  cardId: string;
  time: number;
  known: boolean;
}

export interface CardState {
  box: number;
  due: string;
  lastTime: number;
  lapses: number;
}

export type CardStatus = 'new' | 'learning' | 'mastered';

const addDays = (day: string, days: number) => {
  const [y, m, d] = day.split('-').map(Number);
  return dayKey(new Date(y!, m! - 1, d! + days));
};

export function cardStates(events: CardEvent[]): Map<string, CardState> {
  const states = new Map<string, CardState>();
  for (const event of [...events].sort((a, b) => a.time - b.time)) {
    const day = dayKey(event.time);
    const state = states.get(event.cardId);
    const box = event.known ? Math.min(MASTERED_BOX, (state?.box ?? 0) + 1) : 0;
    states.set(event.cardId, {
      box,
      due: addDays(day, box === 0 ? CARD_INTERVALS[0] : CARD_INTERVALS[box - 1]!),
      lastTime: event.time,
      lapses: (state?.lapses ?? 0) + (event.known ? 0 : 1),
    });
  }
  return states;
}

export const statusOf = (state: CardState | undefined): CardStatus =>
  !state ? 'new' : state.box >= MASTERED_BOX ? 'mastered' : 'learning';

export interface DeckCounts {
  total: number;
  new: number;
  learning: number;
  mastered: number;
  due: number;
}

export function deckCounts(
  cardIds: string[],
  states: Map<string, CardState>,
  today = dayKey(Date.now()),
): DeckCounts {
  const counts: DeckCounts = { total: cardIds.length, new: 0, learning: 0, mastered: 0, due: 0 };
  for (const id of cardIds) {
    const state = states.get(id);
    counts[statusOf(state)]++;
    if (state && state.due <= today) counts.due++;
  }
  return counts;
}

/**
 * The cards of a study session: due cards first (longest waiting first),
 * then up to `newLimit` cards never seen, in deck order.
 */
export function sessionQueue(
  cardIds: string[],
  states: Map<string, CardState>,
  newLimit: number,
  today = dayKey(Date.now()),
): string[] {
  const due = cardIds
    .filter((id) => {
      const state = states.get(id);
      return state && state.due <= today;
    })
    .sort((a, b) => {
      const sa = states.get(a)!;
      const sb = states.get(b)!;
      return sa.due.localeCompare(sb.due) || sa.lastTime - sb.lastTime;
    });
  const fresh = cardIds.filter((id) => !states.has(id)).slice(0, newLimit);
  return [...due, ...fresh];
}
