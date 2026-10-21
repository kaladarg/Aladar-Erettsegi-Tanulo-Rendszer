import { mixedRound, shuffle, type TaskRef, type TopicEntry } from '@/domain/practice/topics';
import { newAttemptId } from './attempts';
import { dayKey, db, type DrillEventRow, type DrillItemResult, type DrillSessionRow } from './db';

/** Answers of one practised task live under their own pseudo attempt id. */
export const drillAttemptId = (sessionId: string, index: number) => `drill-${sessionId}-${index}`;

const KEEP_FINISHED = 20;

export async function createDrill(
  session: Pick<
    DrillSessionRow,
    'kind' | 'subject' | 'subjects' | 'topic' | 'items' | 'title' | 'assignment'
  >,
): Promise<string> {
  const now = Date.now();
  const id = newAttemptId();
  await db.drillSessions.add({
    ...session,
    id,
    index: 0,
    checked: {},
    startedAt: now,
    updatedAt: now,
  });
  void purgeOldDrills();
  return id;
}

/** Picks up to `size` random tasks for a new round. */
export const randomRound = (tasks: TaskRef[], size: number) =>
  shuffle(tasks, Date.now()).slice(0, size);

/** An interleaved round from several topics (see `mixedRound`). */
export const randomMixedRound = (
  topics: TopicEntry[],
  size: number,
  ratios?: Map<string, number>,
) => mixedRound(topics, size, Date.now(), ratios);

export async function setDrillIndex(id: string, index: number): Promise<void> {
  await db.drillSessions.update(id, { index, updatedAt: Date.now() });
}

/** Stores a checked task's result and logs it for the mistakes review. */
export async function recordDrillCheck(
  id: string,
  index: number,
  result: DrillItemResult,
  event: Omit<DrillEventRow, 'id' | 'time' | 'ratio'>,
): Promise<void> {
  const now = Date.now();
  const marked = result.maxPoints - result.pendingPoints;
  await db.transaction('rw', db.drillSessions, db.drillEvents, db.activity, async () => {
    const session = await db.drillSessions.get(id);
    if (!session) return;
    const first = session.checked[index] === undefined;
    await db.drillSessions.update(id, {
      checked: { ...session.checked, [index]: result },
      updatedAt: now,
    });
    // Only the first check of a task counts for the review schedule.
    if (first && marked > 0) {
      await db.drillEvents.add({ ...event, time: now, ratio: result.points / marked });
    }
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

export async function finishDrill(id: string): Promise<void> {
  const now = Date.now();
  await db.drillSessions.update(id, { finishedAt: now, updatedAt: now });
}

/** Deletes a practice round together with its answers and marks. */
export async function deleteDrill(id: string): Promise<void> {
  await db.transaction('rw', db.drillSessions, db.answers, db.selfAssessments, async () => {
    const session = await db.drillSessions.get(id);
    if (!session) return;
    const ids = session.items.map((_, index) => drillAttemptId(id, index));
    await db.answers.where('attemptId').anyOf(ids).delete();
    await db.selfAssessments.where('attemptId').anyOf(ids).delete();
    await db.drillSessions.delete(id);
  });
}

/** Keeps the newest finished rounds; their review history stays in drillEvents. */
async function purgeOldDrills(): Promise<void> {
  const finished = (await db.drillSessions.toArray())
    .filter((s) => s.finishedAt)
    .sort((a, b) => b.updatedAt - a.updatedAt);
  for (const session of finished.slice(KEEP_FINISHED)) await deleteDrill(session.id);
}
