import type { Task } from '@/content/schema.types';
import { asText, isBlank } from '@/domain/scoring/rules';
import { useAnswers } from '@/state/answerStore';

/** The student's current answer to a task, for the tutor to look at. */
export function currentAnswer(task: Task): string {
  const answers = useAnswers.getState().answers;
  return task.fields
    .filter((field) => !isBlank(answers[field.id]))
    .map((field) => `${field.label ?? field.id} ${asText(answers[field.id])}`)
    .join('\n');
}
