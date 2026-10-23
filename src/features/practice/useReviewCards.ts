import { useLiveQuery } from 'dexie-react-hooks';
import { buildCards, examEvents, type ReviewCard } from '@/domain/practice/review';
import { db } from '@/storage/db';

/** The Ismétlés list, from handed-in papers, practised tasks and the student's decisions. */
export function useReviewCards(): ReviewCard[] | undefined {
  return useLiveQuery(async () => {
    const [attempts, drills, marks] = await Promise.all([
      db.attempts.toArray(),
      db.drillEvents.toArray(),
      db.reviewMarks.toArray(),
    ]);
    return buildCards([...examEvents(attempts), ...drills], marks);
  }, []);
}
