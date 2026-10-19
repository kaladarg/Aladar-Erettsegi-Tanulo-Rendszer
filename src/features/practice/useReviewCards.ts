import { useLiveQuery } from 'dexie-react-hooks';
import { buildCards, examEvents, type ReviewCard } from '@/domain/practice/review';
import { db } from '@/storage/db';

/** Current mistakes-review cards, from handed-in papers and practised tasks. */
export function useReviewCards(): ReviewCard[] | undefined {
  return useLiveQuery(async () => {
    const [attempts, drills] = await Promise.all([db.attempts.toArray(), db.drillEvents.toArray()]);
    return buildCards([...examEvents(attempts), ...drills]);
  }, []);
}
