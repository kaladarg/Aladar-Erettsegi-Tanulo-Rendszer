import { dayKey, db } from './db';

/** Records one answer to a study card and marks the day as active; returns the event id. */
export async function recordCardAnswer(cardId: string, known: boolean): Promise<number> {
  const now = Date.now();
  return db.transaction('rw', db.cardEvents, db.activity, async () => {
    const id = await db.cardEvents.add({ cardId, time: now, known });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
    return id as number;
  });
}

/** Takes back an answer recorded by mistake (undo in a study session). */
export async function undoCardAnswer(eventId: number): Promise<void> {
  await db.cardEvents.delete(eventId);
}

/** Forgets the progress of the given cards (to start a deck over). */
export async function resetCards(cardIds: string[]): Promise<void> {
  await db.cardEvents.where('cardId').anyOf(cardIds).delete();
}
