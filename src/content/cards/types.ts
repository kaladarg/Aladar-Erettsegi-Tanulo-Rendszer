/**
 * Study cards ("kártyák"): short questions a student answers in their head,
 * turns over and marks as known or not. Review status of the built-in decks:
 * draft, until a teacher checks them.
 */
export type CardSubject = 'tortenelem' | 'magyar' | 'matematika' | 'angol' | 'nemet';

export type HistoryDeckId = 'evszamok' | 'fogalmak' | 'szemelyek' | 'topografia';
export type LiteratureDeckId = 'szerzok' | 'muvek' | 'korszakok' | 'irodalmi-fogalmak';
/** Foreign languages: phrases for the writing tasks and the oral exam. */
export type LanguageDeckId = 'levelfordulatok' | 'kotoszavak' | 'velemeny' | 'szobeli';
/** Maths: what the oral exam asks to state, define and prove. */
export type MathDeckId = 'definiciok' | 'tetelek' | 'bizonyitasok';
export type DeckId = HistoryDeckId | LiteratureDeckId | LanguageDeckId | MathDeckId;

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
/** Foreign languages use the register instead of a period. */
export type LanguageEra = 'informalis' | 'formalis' | 'semleges';
/** Maths uses the five topic areas of the exam requirements instead of a period. */
export type MathEra = 'gondolkodas' | 'algebra' | 'fuggvenyek' | 'geometria' | 'valoszinuseg';
export type Era = HistoryEra | LiteratureEra | LanguageEra | MathEra;

export interface StudyCard {
  /** Stable id: `<deck>-<slug>`; never reuse an id for a different card. */
  id: string;
  subject: CardSubject;
  deck: DeckId;
  era: Era;
  /** Hungarian history or literature (true), world history or literature (false); false for languages. */
  hungarian: boolean;
  /** The question side. For place cards the map is the question; this is the hint. */
  front: string;
  /** The answer side. */
  back: string;
  /** Optional extra line on the answer side (context, why it matters). */
  note?: string;
  /** Only required at emelt szint. */
  emelt?: boolean;
  /** Place cards: position and which map view to show. */
  place?: { lat: number; lon: number; view: 'europe' | 'hungary' };
}

/** A card as written in a deck file; the subject comes from the file. */
export type CardInput = Omit<StudyCard, 'subject'>;
