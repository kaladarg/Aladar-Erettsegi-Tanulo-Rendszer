import { useLiveQuery } from 'dexie-react-hooks';
import { dayKey, db, type GuideProgressRow } from './db';

/** Marks a study guide page as read (also counts as a day of activity). */
export async function markGuideRead(pageId: string): Promise<void> {
  const now = Date.now();
  await db.transaction('rw', db.guideProgress, db.activity, async () => {
    const row = await db.guideProgress.get(pageId);
    await db.guideProgress.put({ ...row, pageId, readAt: row?.readAt ?? now, updatedAt: now });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

/** Keeps the best self-check result of a page. */
export async function saveGuideQuiz(pageId: string, correct: number, total: number): Promise<void> {
  const now = Date.now();
  await db.transaction('rw', db.guideProgress, db.activity, async () => {
    const row = await db.guideProgress.get(pageId);
    const better = !row?.quizTotal || correct / total >= (row.quizCorrect ?? 0) / row.quizTotal;
    await db.guideProgress.put({
      ...row,
      pageId,
      ...(better ? { quizCorrect: correct, quizTotal: total } : {}),
      updatedAt: now,
    });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

/** Progress of every page, keyed by page id. */
export function useGuideProgress(): Map<string, GuideProgressRow> | undefined {
  return useLiveQuery(
    async () => new Map((await db.guideProgress.toArray()).map((row) => [row.pageId, row])),
    [],
  );
}
