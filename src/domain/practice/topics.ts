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

/**
 * An interleaved round: tasks from several topics, with weak topics (ratio
 * below 0.6) filling up to half of it, and no two neighbours from the same
 * topic where that can be avoided. Mixing problem types helps students learn
 * to choose the method, not only to apply it (Rohrer & Taylor, 2007).
 */
export function mixedRound(
  topics: TopicEntry[],
  size: number,
  seed: number,
  ratios: Map<string, number> = new Map(),
): TaskRef[] {
  const refKey = (ref: TaskRef) => `${ref.examId}|${ref.taskId}`;
  const topicOf = new Map<string, string>();
  for (const topic of topics)
    for (const ref of topic.tasks)
      if (!topicOf.has(refKey(ref))) topicOf.set(refKey(ref), topic.key);
  const all = shuffle(
    topics.flatMap((topic) => topic.tasks),
    seed,
  ).filter((ref, index, list) => list.findIndex((r) => refKey(r) === refKey(ref)) === index);

  const weak = new Set(topics.filter((t) => (ratios.get(t.key) ?? 1) < 0.6).map((t) => t.key));
  const picked: TaskRef[] = [];
  const perTopic = new Map<string, number>();
  const take = (ref: TaskRef) => {
    const key = topicOf.get(refKey(ref))!;
    picked.push(ref);
    perTopic.set(key, (perTopic.get(key) ?? 0) + 1);
  };
  // Spread the round over many topics: at most two tasks per topic in each pass.
  for (const [limit, onlyWeak] of [
    [1, true],
    [1, false],
    [2, false],
    [Infinity, false],
  ] as const) {
    for (const ref of all) {
      if (picked.length >= size) break;
      if (picked.includes(ref)) continue;
      const key = topicOf.get(refKey(ref))!;
      if (onlyWeak && (!weak.has(key) || picked.length >= Math.ceil(size / 2))) continue;
      if ((perTopic.get(key) ?? 0) >= limit) continue;
      take(ref);
    }
  }

  // Reorder so that neighbours come from different topics where possible:
  // always continue with the topic that has the most tasks left.
  const groups = new Map<string, TaskRef[]>();
  for (const ref of picked) {
    const key = topicOf.get(refKey(ref))!;
    groups.set(key, [...(groups.get(key) ?? []), ref]);
  }
  const ordered: TaskRef[] = [];
  let last: string | undefined;
  while (ordered.length < picked.length) {
    let best: string | undefined;
    for (const [key, refs] of groups)
      if (refs.length > 0 && key !== last && (!best || refs.length > groups.get(best)!.length))
        best = key;
    best ??= last!;
    ordered.push(groups.get(best)!.shift()!);
    last = best;
  }
  return ordered;
}
