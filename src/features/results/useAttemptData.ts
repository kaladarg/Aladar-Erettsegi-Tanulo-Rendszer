import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useMemo } from 'react';
import type { Exam } from '@/content/schema.types';
import { scoreExam, type ExamResult, type Reviews } from '@/domain/scoring/exam';
import { summarizeResult } from '@/domain/stats/summary';
import { loadAnswers, loadReviews, setAttemptResult, type Answers } from '@/storage/attempts';
import { db, type AttemptRow } from '@/storage/db';

export interface AttemptData {
  attempt: AttemptRow;
  answers: Answers;
  reviews: Reviews;
}

/** An attempt with its answers and review marks, live from IndexedDB (null: not found). */
export function useAttemptData(attemptId: string): AttemptData | null | undefined {
  return useLiveQuery(async () => {
    const attempt = await db.attempts.get(attemptId);
    if (!attempt) return null;
    const [answers, reviews] = await Promise.all([loadAnswers(attemptId), loadReviews(attemptId)]);
    return { attempt, answers, reviews };
  }, [attemptId]);
}

/** Scores the attempt and keeps its stored summary (used by progress badges) in step. */
export function useAttemptResult(exam: Exam | null, data: AttemptData | null | undefined) {
  const result: ExamResult | null = useMemo(
    () => (exam && data ? scoreExam(exam, data.answers, data.reviews) : null),
    [exam, data],
  );
  const attemptId = data?.attempt.id;
  const stored = data?.attempt.result;
  const submitted = !!data?.attempt.submittedAt;
  const answers = data?.answers;
  useEffect(() => {
    if (!exam || !result || !answers || !attemptId || !submitted) return;
    const next = summarizeResult(exam, result, answers);
    if (JSON.stringify(stored) !== JSON.stringify(next)) void setAttemptResult(attemptId, next);
  }, [exam, result, answers, attemptId, stored, submitted]);
  return result;
}
