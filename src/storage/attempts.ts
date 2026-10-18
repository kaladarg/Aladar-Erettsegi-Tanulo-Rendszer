import { db, type AnswerRow, type AttemptRow } from './db';

export type AnswerValue = string | string[];

/** Answers keyed by field id. Choice-group selections use `choiceKey()`. */
export type Answers = Record<string, AnswerValue>;

/** Pseudo field id that stores which tasks the student picked in a choice group. */
export const choiceKey = (partId: string, index: number) => `__choice:${partId}:${index}`;

export function newAttemptId(): string {
  return typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

/** The newest unsubmitted attempt of an exam in the given mode, if any. */
export async function findOpenAttempt(
  examId: string,
  mode: AttemptRow['mode'],
): Promise<AttemptRow | undefined> {
  const attempts = await db.attempts.where('examId').equals(examId).toArray();
  return attempts
    .filter((attempt) => attempt.mode === mode && !attempt.submittedAt)
    .sort((a, b) => b.updatedAt - a.updatedAt)[0];
}

export async function createAttempt(examId: string, mode: AttemptRow['mode']): Promise<AttemptRow> {
  const now = Date.now();
  const attempt: AttemptRow = {
    id: newAttemptId(),
    examId,
    mode,
    startedAt: now,
    updatedAt: now,
    partSeconds: {},
  };
  await db.attempts.add(attempt);
  return attempt;
}

export async function loadAnswers(attemptId: string): Promise<Answers> {
  const rows = await db.answers.where('attemptId').equals(attemptId).toArray();
  return Object.fromEntries(rows.map((row) => [row.fieldId, row.value as AnswerValue]));
}

const isEmpty = (value: AnswerValue) => (Array.isArray(value) ? value.length === 0 : value === '');

/** Writes changed answers (empty values are deleted) and bumps the attempt's updatedAt. */
export async function saveAnswers(attemptId: string, changes: Answers): Promise<void> {
  const now = Date.now();
  const puts: AnswerRow[] = [];
  const deletes: [string, string][] = [];
  for (const [fieldId, value] of Object.entries(changes)) {
    if (isEmpty(value)) deletes.push([attemptId, fieldId]);
    else puts.push({ attemptId, fieldId, value, updatedAt: now });
  }
  await db.transaction('rw', db.answers, db.attempts, async () => {
    if (puts.length) await db.answers.bulkPut(puts);
    if (deletes.length) await db.answers.bulkDelete(deletes);
    await db.attempts.update(attemptId, { updatedAt: now });
  });
}

export interface DeletedAttempt {
  attempt: AttemptRow;
  answers: AnswerRow[];
}

/** Deletes an attempt and its answers; returns them so the deletion can be undone. */
export async function deleteAttempt(attemptId: string): Promise<DeletedAttempt | null> {
  return db.transaction('rw', db.attempts, db.answers, db.selfAssessments, async () => {
    const attempt = await db.attempts.get(attemptId);
    if (!attempt) return null;
    const answers = await db.answers.where('attemptId').equals(attemptId).toArray();
    await db.answers.where('attemptId').equals(attemptId).delete();
    await db.selfAssessments.where('attemptId').equals(attemptId).delete();
    await db.attempts.delete(attemptId);
    return { attempt, answers };
  });
}

export async function restoreAttempt(deleted: DeletedAttempt): Promise<void> {
  await db.transaction('rw', db.attempts, db.answers, async () => {
    await db.attempts.put(deleted.attempt);
    await db.answers.bulkPut(deleted.answers);
  });
}
