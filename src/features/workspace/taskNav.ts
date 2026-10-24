import type { Exam, Task } from '@/content/schema.types';

/** Fired to bring a task into view; form and PDF mode each know how. */
export const GOTO_TASK = 'workspace:goto-task';

export function goToTask(taskId: string) {
  window.dispatchEvent(new CustomEvent<string>(GOTO_TASK, { detail: taskId }));
}

const hasValue = (value: unknown) =>
  Array.isArray(value)
    ? value.length > 0
    : typeof value === 'string'
      ? value.trim() !== ''
      : value === true;

interface Entry {
  /** Number as printed: sub-tasks (13. a, b) count as one task. */
  number: string;
  firstTaskId: string;
  type: Task['type'];
  done: boolean;
}

/** Tasks as numbered on the paper, with whether any of their fields has an answer. */
export function taskEntries(
  exam: Exam,
  answers: Record<string, unknown>,
  activePartIds: Set<string> | null,
): { part: Exam['parts'][number]; entries: Entry[] }[] {
  return exam.parts
    .filter((part) => !activePartIds || activePartIds.has(part.id))
    .map((part) => {
      const entries: Entry[] = [];
      for (const task of part.tasks) {
        const number = task.group ?? task.number;
        const done = task.fields.some((field) => hasValue(answers[field.id]));
        const existing = entries.find((e) => e.number === number);
        if (existing) existing.done ||= done;
        else entries.push({ number, firstTaskId: task.id, type: task.type, done });
      }
      return { part, entries };
    });
}
