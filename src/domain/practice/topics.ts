import type { Exam, Task } from '@/content/schema.types';
import { isDrillable } from './review';

export interface TaskRef {
  examId: string;
  taskId: string;
}

export interface TopicEntry {
  /** Normalised key: lower case, single spaces. */
  key: string;
  /** Name as written most often in the papers. */
  name: string;
  tasks: TaskRef[];
  points: number;
}

export const topicKey = (name: string) => name.trim().replace(/\s+/g, ' ').toLocaleLowerCase('hu');

/** Every topic of a subject's papers with the drillable tasks that practise it. */
export function topicIndex(exams: Exam[]): TopicEntry[] {
  const topics = new Map<string, TopicEntry & { names: Map<string, number> }>();
  for (const exam of exams) {
    for (const task of exam.parts.flatMap((part) => part.tasks)) {
      if (!isDrillable(task.type)) continue;
      for (const name of new Set(task.topics ?? [])) {
        const key = topicKey(name);
        const entry = topics.get(key) ?? {
          key,
          name,
          tasks: [] as TaskRef[],
          points: 0,
          names: new Map<string, number>(),
        };
        entry.tasks.push({ examId: exam.id, taskId: task.id });
        entry.points += task.maxPoints;
        entry.names.set(name, (entry.names.get(name) ?? 0) + 1);
        topics.set(key, entry);
      }
    }
  }
  return [...topics.values()]
    .map(({ names, ...entry }) => ({
      ...entry,
      name: [...names].sort((a, b) => b[1] - a[1])[0]![0],
    }))
    .sort((a, b) => b.tasks.length - a.tasks.length || a.name.localeCompare(b.name, 'hu'));
}

/** A task of a loaded paper, or undefined when the paper or task is gone. */
export function findTask(
  exams: Map<string, Exam>,
  ref: TaskRef,
): { exam: Exam; task: Task } | undefined {
  const exam = exams.get(ref.examId);
  const task = exam?.parts.flatMap((part) => part.tasks).find((t) => t.id === ref.taskId);
  return exam && task ? { exam, task } : undefined;
}

/** Shuffles a copy with a seeded generator, so a session keeps its order on reload. */
export function shuffle<T>(items: T[], seed: number): T[] {
  const result = [...items];
  let state = seed >>> 0 || 1;
  const next = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 2 ** 32;
  };
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}
