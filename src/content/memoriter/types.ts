/** A memoriter: a poem or excerpt the student learns by heart for the written exam. */
export interface Memoriter {
  /** Stable id: never reuse one for a different text. */
  id: string;
  author: string;
  title: string;
  /** The grades the kerettanterv lists the text for. */
  grade: '9-10' | '11-12';
  /** Set when only part of the poem is required, e.g. "1. versszak". */
  part?: string;
  note?: string;
  stanzas: { label?: string; lines: string[] }[];
}
