/**
 * Study cards ("kártyák"): short questions a student answers in their head,
 * turns over and marks as known or not. Review status of the built-in decks:
 * draft, until a teacher checks them.
 */
export type DeckId = 'evszamok' | 'fogalmak' | 'szemelyek' | 'topografia';

/** Period, used to filter the decks; matches the order of the history syllabus. */
export type Era = 'okor' | 'kozepkor' | 'koraujkor' | 'ujkor' | 'jelenkor20' | 'jelenkor21';

export interface StudyCard {
  /** Stable id: `<deck>-<slug>`; never reuse an id for a different card. */
  id: string;
  deck: DeckId;
  era: Era;
  /** Hungarian history (true) or world history (false). */
  hungarian: boolean;
  /** The question side. For place cards the map is the question; this is the hint. */
  front: string;
  /** The answer side. */
  back: string;
  /** Optional extra line on the answer side (context, why it matters). */
  note?: string;
  /** Place cards: position and which map view to show. */
  place?: { lat: number; lon: number; view: 'europe' | 'hungary' };
}
