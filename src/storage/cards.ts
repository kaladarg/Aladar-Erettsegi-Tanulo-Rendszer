import { dayKey, db } from './db';

/** Records one answer to a study card and marks the day as active. */
export async function recordCardAnswer(cardId: string, known: boolean): Promise<void> {
  const now = Date.now();
  await db.transaction('rw', db.cardEvents, db.activity, async () => {
    await db.cardEvents.add({ cardId, time: now, known });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

/** Forgets the progress of the given cards (to start a deck over). */
export async function resetCards(cardIds: string[]): Promise<void> {
  await db.cardEvents.where('cardId').anyOf(cardIds).delete();
}
