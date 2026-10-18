import type { Exam } from '@/content/schema.types';
import { countedTasks, scoreExam } from '@/domain/scoring/exam';
import { isBlank } from '@/domain/scoring/rules';
import { useAnswers } from '@/state/answerStore';
import { submitAttempt, type Answers } from '@/storage/attempts';

/** Counted tasks without any answer. */
export function unansweredTasks(exam: Exam, answers: Answers): number {
  return exam.parts.reduce((sum, part) => {
    const { ids } = countedTasks(part, answers);
    return (
      sum +
      part.tasks.filter(
        (task) => ids.has(task.id) && task.fields.every((f) => isBlank(answers[f.id])),
      ).length
    );
  }, 0);
}

/** Saves, scores and closes the attempt, then opens its results. */
export async function handIn(exam: Exam, attemptId: string): Promise<void> {
  const store = useAnswers.getState();
  await store.flush();
  const result = scoreExam(exam, store.answers);
  await submitAttempt(attemptId, {
    points: result.points,
    maxPoints: result.maxPoints,
    pendingPoints: result.pendingPoints,
  });
  await store.close();
}
