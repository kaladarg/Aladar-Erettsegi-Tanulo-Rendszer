import { useLiveQuery } from 'dexie-react-hooks';
import { dayKey, db } from '@/storage/db';

/** Tasks a student aims to practise each day. */
export const DAILY_GOAL = 10;

export interface TodayProgress {
  /** Tasks checked today: topic rounds, reviews and submitted papers. */
  tasks: number;
  /** Study cards answered today. */
  cards: number;
}

/** What the student has done today, live from IndexedDB. */
export function useToday(): TodayProgress | undefined {
  return useLiveQuery(async () => {
    const today = dayKey(Date.now());
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const since = start.getTime();
    const [drills, attempts, cards] = await Promise.all([
      db.drillEvents.where('time').aboveOrEqual(since).count(),
      db.attempts.where('submittedAt').aboveOrEqual(since).toArray(),
      db.cardEvents.where('time').aboveOrEqual(since).count(),
    ]);
    const paperTasks = attempts
      .filter((a) => a.submittedAt && dayKey(a.submittedAt) === today)
      .reduce((sum, a) => sum + (a.result?.tasks?.length ?? 0), 0);
    return { tasks: drills + paperTasks, cards };
  }, []);
}
