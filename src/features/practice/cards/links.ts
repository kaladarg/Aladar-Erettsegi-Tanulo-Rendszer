import { filterToParams, type CardFilter } from '@/content/cards';

/** The deck page for a filter, or the card overview when no deck is chosen. */
export const deckPage = (filter: CardFilter) =>
  filter.deck
    ? `/gyakorlas/kartyak/pakli?${filterToParams(filter)}`
    : `/gyakorlas/kartyak?${filterToParams(filter)}`;
