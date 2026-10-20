import { HISTORY_CARDS } from './historyCards';
import { LITERATURE_CARDS } from './literatureCards';
import type { CardSubject, DeckId, Era, StudyCard } from './types';

export type { CardSubject, DeckId, Era, StudyCard } from './types';

export const CARD_SUBJECTS: CardSubject[] = ['tortenelem', 'magyar'];

export const SUBJECT_DECKS: Record<CardSubject, DeckId[]> = {
  tortenelem: ['evszamok', 'fogalmak', 'szemelyek', 'topografia'],
  magyar: ['szerzok', 'muvek', 'korszakok', 'irodalmi-fogalmak'],
};

export const SUBJECT_ERAS: Record<CardSubject, Era[]> = {
  tortenelem: ['okor', 'kozepkor', 'koraujkor', 'ujkor', 'jelenkor20', 'jelenkor21'],
  magyar: [
    'antik',
    'irodalmi-kozepkor',
    'reneszansz',
    'barokk',
    'felvilagosodas',
    'romantika',
    'realizmus',
    'modern',
    'kesomodern',
    'kortars',
  ],
};

export const DECKS: DeckId[] = Object.values(SUBJECT_DECKS).flat();
export const ERAS: Era[] = Object.values(SUBJECT_ERAS).flat();
export type Scope = 'all' | 'hungarian' | 'world';

export interface CardFilter {
  subject?: CardSubject;
  deck?: DeckId;
  era?: Era;
  scope?: Scope;
}

export const ALL_CARDS: StudyCard[] = [
  ...HISTORY_CARDS.map((card) => ({ ...card, subject: 'tortenelem' as const })),
  ...LITERATURE_CARDS.map((card) => ({ ...card, subject: 'magyar' as const })),
];
export const CARDS_BY_ID = new Map(ALL_CARDS.map((card) => [card.id, card]));

export function filterCards({
  subject = 'tortenelem',
  deck,
  era,
  scope = 'all',
}: CardFilter): StudyCard[] {
  return ALL_CARDS.filter(
    (card) =>
      card.subject === subject &&
      (!deck || card.deck === deck) &&
      (!era || card.era === era) &&
      (scope === 'all' || card.hungarian === (scope === 'hungarian')),
  );
}

/** Reads a filter from the page address (?targy=&pakli=&kor=&tortenelem=). */
export function filterFromParams(params: URLSearchParams): CardFilter {
  const subject: CardSubject = params.get('targy') === 'magyar' ? 'magyar' : 'tortenelem';
  const deck = params.get('pakli') as DeckId | null;
  const era = params.get('kor') as Era | null;
  const scope = params.get('tortenelem');
  return {
    subject,
    deck: deck && SUBJECT_DECKS[subject].includes(deck) ? deck : undefined,
    era: era && SUBJECT_ERAS[subject].includes(era) ? era : undefined,
    scope: scope === 'magyar' ? 'hungarian' : scope === 'egyetemes' ? 'world' : 'all',
  };
}

export function filterToParams({ subject, deck, era, scope }: CardFilter): string {
  const params = new URLSearchParams();
  if (subject && subject !== 'tortenelem') params.set('targy', subject);
  if (deck) params.set('pakli', deck);
  if (era) params.set('kor', era);
  if (scope && scope !== 'all')
    params.set('tortenelem', scope === 'hungarian' ? 'magyar' : 'egyetemes');
  return params.toString();
}
