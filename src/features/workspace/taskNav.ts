import { taskUnitNumber } from '@/content/labels';
import type { Exam, Task } from '@/content/schema.types';
import { choiceKey } from '@/storage/attempts';

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
  /** Not picked in a decided choice group, so it does not count. */
  unchosen: boolean;
}

export interface PartEntries {
  part: Exam['parts'][number];
  entries: Entry[];
  /** Tasks that count towards the total once choices are taken into account. */
  total: number;
  done: number;
}

/** Tasks as numbered on the paper, with whether any of their fields has an answer. */
export function taskEntries(
  exam: Exam,
  answers: Record<string, unknown>,
  activePartIds: Set<string> | null,
): PartEntries[] {
  return exam.parts
    .filter((part) => !activePartIds || activePartIds.has(part.id))
    .map((part) => {
      const entries: Entry[] = [];
      const units = new Map<string, Entry>();
      for (const task of part.tasks) {
        const number = taskUnitNumber(task);
        const done = task.fields.some((field) => hasValue(answers[field.id]));
        let entry = entries.find((e) => e.number === number);
        if (entry) entry.done ||= done;
        else {
          entry = { number, firstTaskId: task.id, type: task.type, done, unchosen: false };
          entries.push(entry);
        }
        units.set(task.id, entry);
      }

      let total = entries.length;
      let doneCount = entries.filter((e) => e.done).length;
      part.choices?.forEach((choice, index) => {
        const members = [...new Set(choice.taskIds.flatMap((u) => entriesFor(u)))];
        const picked = answers[choiceKey(part.id, index)];
        const decided = Array.isArray(picked) && picked.length >= choice.pick;
        if (decided) {
          const chosen = new Set(
            choice.taskIds.filter((u) => picked.includes(u)).flatMap((u) => entriesFor(u)),
          );
          for (const entry of members)
            if (!chosen.has(entry)) {
              entry.unchosen = true;
              total--;
              if (entry.done) doneCount--;
            }
        } else {
          // Undecided: only as many units count as the student will solve.
          const unitSize = members.length / Math.max(1, choice.taskIds.length);
          const counted = Math.round(choice.pick * unitSize);
          const doneMembers = members.filter((e) => e.done).length;
          total -= members.length - counted;
          doneCount -= doneMembers - Math.min(doneMembers, counted);
        }
      });

      function entriesFor(unit: string): Entry[] {
        return part.tasks
          .filter((task) => task.id === unit || task.group === unit)
          .flatMap((task) => units.get(task.id) ?? []);
      }
      return { part, entries, total: Math.max(0, total), done: Math.max(0, doneCount) };
    });
}
