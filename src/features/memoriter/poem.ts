import type { Memoriter } from '@/content/memoriter/types';

export const lineCount = (poem: Memoriter) =>
  poem.stanzas.reduce((sum, stanza) => sum + stanza.lines.length, 0);

/** All lines of the poem, in order. */
export const allLines = (poem: Memoriter) => poem.stanzas.flatMap((stanza) => stanza.lines);

export const findMemoriter = (poems: Memoriter[], id: string) => poems.find((p) => p.id === id);
