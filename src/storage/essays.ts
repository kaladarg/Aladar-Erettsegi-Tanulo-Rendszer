import { dayKey, db, type EssayOutlineRow } from './db';

export const outlineKey = (examId: string, taskId: string) => `${examId}/${taskId}`;

export function emptyOutline(examId: string, taskId: string): EssayOutlineRow {
  return {
    key: outlineKey(examId, taskId),
    examId,
    taskId,
    values: {},
    directives: [],
    ratings: {},
    seconds: 0,
    compared: false,
    updatedAt: 0,
  };
}

/** Saves the outline and marks the day as active. */
export async function saveOutline(row: EssayOutlineRow): Promise<void> {
  const now = Date.now();
  await db.transaction('rw', db.essayOutlines, db.activity, async () => {
    await db.essayOutlines.put({ ...row, updatedAt: now });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

export async function deleteOutline(key: string): Promise<void> {
  await db.essayOutlines.delete(key);
}
