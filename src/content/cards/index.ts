import { HISTORY_CARDS } from './historyCards';
import type { DeckId, Era, StudyCard } from './types';

export type { DeckId, Era, StudyCard } from './types';

export const DECKS: DeckId[] = ['evszamok', 'fogalmak', 'szemelyek', 'topografia'];
export const ERAS: Era[] = ['okor', 'kozepkor', 'koraujkor', 'ujkor', 'jelenkor20', 'jelenkor21'];
export type Scope = 'all' | 'hungarian' | 'world';

export interface CardFilter {
  deck?: DeckId;
  era?: Era;
  scope?: Scope;
}

export const ALL_CARDS: StudyCard[] = HISTORY_CARDS;
export const CARDS_BY_ID = new Map(ALL_CARDS.map((card) => [card.id, card]));

export function filterCards({ deck, era, scope = 'all' }: CardFilter): StudyCard[] {
  return ALL_CARDS.filter(
    (card) =>
      (!deck || card.deck === deck) &&
      (!era || card.era === era) &&
      (scope === 'all' || card.hungarian === (scope === 'hungarian')),
  );
}

const isDeck = (value: string | null): value is DeckId => DECKS.includes(value as DeckId);
const isEra = (value: string | null): value is Era => ERAS.includes(value as Era);

/** Reads a filter from the page address (?pakli=&kor=&tortenelem=). */
export function filterFromParams(params: URLSearchParams): CardFilter {
  const deck = params.get('pakli');
  const era = params.get('kor');
  const scope = params.get('tortenelem');
  return {
    deck: isDeck(deck) ? deck : undefined,
    era: isEra(era) ? era : undefined,
    scope: scope === 'magyar' ? 'hungarian' : scope === 'egyetemes' ? 'world' : 'all',
  };
}

export function filterToParams({ deck, era, scope }: CardFilter): string {
  const params = new URLSearchParams();
  if (deck) params.set('pakli', deck);
  if (era) params.set('kor', era);
  if (scope && scope !== 'all')
    params.set('tortenelem', scope === 'hungarian' ? 'magyar' : 'egyetemes');
  return params.toString();
}
