import { useLiveQuery } from 'dexie-react-hooks';
import { dayKey, db, type MemoriterProgressRow } from './db';

/** A score this high counts as knowing the poem by heart. */
export const KNOWN_SCORE = 95;

/** Records a recitation and keeps the best score (also counts as a day of activity). */
export async function saveRecitation(id: string, score: number): Promise<void> {
  const now = Date.now();
  await db.transaction('rw', db.memoriterProgress, db.activity, async () => {
    const row = await db.memoriterProgress.get(id);
    await db.memoriterProgress.put({
      ...row,
      id,
      attempts: (row?.attempts ?? 0) + 1,
      bestScore: Math.max(score, row?.bestScore ?? 0),
      known: row?.known || score >= KNOWN_SCORE,
      updatedAt: now,
    });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

export async function setKnown(id: string, known: boolean): Promise<void> {
  const row = await db.memoriterProgress.get(id);
  await db.memoriterProgress.put({ attempts: 0, ...row, id, known, updatedAt: Date.now() });
}

/** Progress of every poem, keyed by id. */
export function useMemoriterProgress(): Map<string, MemoriterProgressRow> | undefined {
  return useLiveQuery(
    async () => new Map((await db.memoriterProgress.toArray()).map((row) => [row.id, row])),
    [],
  );
}
