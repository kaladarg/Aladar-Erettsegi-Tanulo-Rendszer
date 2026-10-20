/**
 * Study cards ("kártyák"): short questions a student answers in their head,
 * turns over and marks as known or not. Review status of the built-in decks:
 * draft, until a teacher checks them.
 */
export type CardSubject = 'tortenelem' | 'magyar';

export type HistoryDeckId = 'evszamok' | 'fogalmak' | 'szemelyek' | 'topografia';
export type LiteratureDeckId = 'szerzok' | 'muvek' | 'korszakok' | 'irodalmi-fogalmak';
export type DeckId = HistoryDeckId | LiteratureDeckId;

/** History periods, in the order of the history syllabus. */
export type HistoryEra = 'okor' | 'kozepkor' | 'koraujkor' | 'ujkor' | 'jelenkor20' | 'jelenkor21';
/** Literary periods, in the order of the literature syllabus. */
export type LiteratureEra =
  | 'antik'
  | 'irodalmi-kozepkor'
  | 'reneszansz'
  | 'barokk'
  | 'felvilagosodas'
  | 'romantika'
  | 'realizmus'
  | 'modern'
  | 'kesomodern'
  | 'kortars';
export type Era = HistoryEra | LiteratureEra;

export interface StudyCard {
  /** Stable id: `<deck>-<slug>`; never reuse an id for a different card. */
  id: string;
  subject: CardSubject;
  deck: DeckId;
  era: Era;
  /** Hungarian history or literature (true), world history or literature (false). */
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

/** A card as written in a deck file; the subject comes from the file. */
export type CardInput = Omit<StudyCard, 'subject'>;
