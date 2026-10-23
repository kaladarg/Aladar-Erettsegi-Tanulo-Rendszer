import { dayKey, db, type AnswerRow, type AttemptResult, type AttemptRow } from './db';

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
  await db.transaction('rw', db.answers, db.attempts, db.activity, async () => {
    if (puts.length) await db.answers.bulkPut(puts);
    if (deletes.length) await db.answers.bulkDelete(deletes);
    await db.attempts.update(attemptId, { updatedAt: now });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
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

/** Review marks of an attempt, keyed by task id then step/criterion id. */
export async function loadReviews(
  attemptId: string,
): Promise<Record<string, Record<string, number>>> {
  const rows = await db.selfAssessments.where('attemptId').equals(attemptId).toArray();
  return Object.fromEntries(rows.map((row) => [row.taskId, row.points]));
}

/** Sets (or with `null` clears) the points of one reviewed item. */
export async function saveReview(
  attemptId: string,
  taskId: string,
  itemId: string,
  points: number | null,
): Promise<void> {
  await db.transaction('rw', db.selfAssessments, async () => {
    const row = await db.selfAssessments.get([attemptId, taskId]);
    const next = { ...(row?.points ?? {}) };
    if (points === null) delete next[itemId];
    else next[itemId] = points;
    await db.selfAssessments.put({ attemptId, taskId, points: next, updatedAt: Date.now() });
  });
}

/** Closes an attempt for editing and stores its first result. */
export async function submitAttempt(attemptId: string, result: AttemptResult): Promise<void> {
  const now = Date.now();
  await db.transaction('rw', db.attempts, db.activity, async () => {
    await db.attempts.update(attemptId, { submittedAt: now, updatedAt: now, result });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

export async function setAttemptResult(attemptId: string, result: AttemptResult): Promise<void> {
  await db.attempts.update(attemptId, { result });
}

/** Submitted attempts of an exam, newest first. */
export async function submittedAttempts(examId: string): Promise<AttemptRow[]> {
  const attempts = await db.attempts.where('examId').equals(examId).toArray();
  return attempts
    .filter((attempt) => attempt.submittedAt)
    .sort((a, b) => (b.submittedAt ?? 0) - (a.submittedAt ?? 0));
}

/** Stores the time written in one exam segment. */
export async function saveSegmentSeconds(
  attemptId: string,
  segmentId: string,
  seconds: number,
): Promise<void> {
  await db.attempts
    .where('id')
    .equals(attemptId)
    .modify((attempt) => {
      attempt.partSeconds = { ...attempt.partSeconds, [segmentId]: seconds };
    });
}

/** Adds seconds of work per task (exam mode pacing). */
export async function addTaskSeconds(
  attemptId: string,
  seconds: Record<string, number>,
): Promise<void> {
  await db.attempts
    .where('id')
    .equals(attemptId)
    .modify((attempt) => {
      const total = { ...attempt.taskSeconds };
      for (const [taskId, add] of Object.entries(seconds))
        total[taskId] = (total[taskId] ?? 0) + add;
      attempt.taskSeconds = total;
    });
}

/** Hands in the current exam segment and moves on to the next one. */
export async function advanceSegment(attemptId: string, next: number): Promise<void> {
  await db.attempts.update(attemptId, { segment: next, updatedAt: Date.now() });
}

/** Pseudo field id that records how much help a task's solution used (1-4, see the help panel). */
export const helpKey = (taskId: string) => `__help:${taskId}`;

/** Help level from which a task counts as solved with help (marking-scheme steps or solution seen). */
export const HELP_REVEALED = 3;
