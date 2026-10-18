import { useLiveQuery } from 'dexie-react-hooks';
import { db, type AttemptRow } from './db';

export interface ExamProgress {
  inProgress: boolean;
  /** Best submitted result as a fraction (0-1). */
  best?: number;
  lastActivity: number;
}

export function summarizeProgress(attempts: AttemptRow[]): Map<string, ExamProgress> {
  const byExam = new Map<string, ExamProgress>();
  for (const attempt of attempts) {
    const current = byExam.get(attempt.examId) ?? { inProgress: false, lastActivity: 0 };
    if (!attempt.submittedAt) current.inProgress = true;
    if (attempt.result && attempt.result.maxPoints > 0) {
      const ratio = attempt.result.points / attempt.result.maxPoints;
      current.best = Math.max(current.best ?? 0, ratio);
    }
    current.lastActivity = Math.max(current.lastActivity, attempt.updatedAt);
    byExam.set(attempt.examId, current);
  }
  return byExam;
}

/** Progress per exam id, live-updated from IndexedDB. */
export function useExamProgress(): Map<string, ExamProgress> | undefined {
  return useLiveQuery(async () => summarizeProgress(await db.attempts.toArray()), []);
}
