import type { ReviewChoice, ReviewMark } from '@/domain/practice/review';
import { dayKey, db } from './db';

type MarkInfo = Omit<ReviewMark, 'time' | 'choice'>;

/** Records the student's decision on a task of the Ismétlés list; returns its id for undo. */
export async function markReview(info: MarkInfo, choice: ReviewChoice): Promise<number> {
  const now = Date.now();
  return db.transaction('rw', db.reviewMarks, db.activity, async () => {
    const id = await db.reviewMarks.add({
      examId: info.examId,
      taskId: info.taskId,
      subject: info.subject,
      type: info.type,
      number: info.number,
      topics: info.topics,
      time: now,
      choice,
    });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
    return id as number;
  });
}

export async function undoReviewMark(id: number): Promise<void> {
  await db.reviewMarks.delete(id);
}
