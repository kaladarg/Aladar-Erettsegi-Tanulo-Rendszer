import { useLiveQuery } from 'dexie-react-hooks';
import { db, type AnswerRow, type AttemptRow } from './db';

export interface ExamProgress {
  inProgress: boolean;
  /** Best submitted result as a fraction (0-1). */
  best?: number;
  lastActivity: number;
  /** Fields with an answer in the latest unfinished attempt. */
  answeredFields?: Set<string>;
}

const hasValue = (value: AnswerRow['value']) =>
  Array.isArray(value) ? value.length > 0 : typeof value === 'string' ? value.trim() !== '' : value;

export function summarizeProgress(
  attempts: AttemptRow[],
  answers: AnswerRow[] = [],
): Map<string, ExamProgress> {
  const byExam = new Map<string, ExamProgress>();
  const latestOpen = new Map<string, AttemptRow>();
  for (const attempt of attempts) {
    if (
      !attempt.submittedAt &&
      attempt.updatedAt >= (latestOpen.get(attempt.examId)?.updatedAt ?? 0)
    )
      latestOpen.set(attempt.examId, attempt);
    const current = byExam.get(attempt.examId) ?? { inProgress: false, lastActivity: 0 };
    if (!attempt.submittedAt) current.inProgress = true;
    if (attempt.result && attempt.result.maxPoints > 0) {
      const ratio = attempt.result.points / attempt.result.maxPoints;
      current.best = Math.max(current.best ?? 0, ratio);
    }
    current.lastActivity = Math.max(current.lastActivity, attempt.updatedAt);
    byExam.set(attempt.examId, current);
  }
  const openIds = new Map([...latestOpen.values()].map((a) => [a.id, a.examId]));
  for (const answer of answers) {
    const examId = openIds.get(answer.attemptId);
    if (!examId || !hasValue(answer.value)) continue;
    const progress = byExam.get(examId)!;
    (progress.answeredFields ??= new Set()).add(answer.fieldId);
  }
  return byExam;
}

/** Progress per exam id, live-updated from IndexedDB. */
export function useExamProgress(): Map<string, ExamProgress> | undefined {
  return useLiveQuery(async () => {
    const attempts = await db.attempts.toArray();
    const open = attempts.filter((a) => !a.submittedAt).map((a) => a.id);
    const answers = open.length ? await db.answers.where('attemptId').anyOf(open).toArray() : [];
    return summarizeProgress(attempts, answers);
  }, []);
}
