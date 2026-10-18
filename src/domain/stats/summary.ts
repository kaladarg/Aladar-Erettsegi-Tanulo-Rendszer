import type { Exam, Task } from '@/content/schema.types';
import { helpKey, HELP_REVEALED, type Answers } from '@/storage/attempts';
import type { AttemptResult, TaskSummary } from '@/storage/db';
import type { ExamResult } from '../scoring/exam';

/** Help level reached on a task (0: none), as saved by the help panel. */
export function helpLevel(answers: Answers, taskId: string): number {
  const raw = answers[helpKey(taskId)];
  return Number(typeof raw === 'string' ? raw : 0) || 0;
}

function summarizeTask(
  task: Task,
  result: ExamResult['parts'][number]['tasks'][number],
  answers: Answers,
): TaskSummary {
  const summary: TaskSummary = {
    id: task.id,
    number: task.number,
    type: task.type,
    points: result.points,
    maxPoints: result.maxPoints,
    pendingPoints: result.pendingPoints,
    status: result.status,
  };
  if (task.topics?.length) summary.topics = task.topics;
  if (helpLevel(answers, task.id) >= HELP_REVEALED) summary.helped = true;
  return summary;
}

/**
 * The stored summary of a scored attempt: totals for the progress badges and,
 * per counted task, what statistics need (type, topics, points, status), so
 * statistics work without loading every paper again.
 */
export function summarizeResult(exam: Exam, result: ExamResult, answers: Answers): AttemptResult {
  return {
    points: result.points,
    maxPoints: result.maxPoints,
    pendingPoints: result.pendingPoints,
    subject: exam.subject,
    grade: result.complete ? result.grade.grade : undefined,
    tasks: result.parts.flatMap((part) =>
      part.tasks.filter((t) => t.counted).map((t) => summarizeTask(t.task, t, answers)),
    ),
  };
}
