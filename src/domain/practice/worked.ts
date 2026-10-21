import type { Field, Task } from '@/content/schema.types';
import { expectedAnswer } from '../scoring/rules';
import { shuffle, type TaskRef } from './topics';

/**
 * Worked examples, then solving alone ("Lépésről lépésre"). The student looks
 * at as many fully worked tasks of the same type as they need, uncovering
 * the solution one step at a time and thinking ahead before each step, and
 * decides themselves when to try a task alone. Studying worked examples
 * helps beginners most (Renkl & Atkinson, 2003; Sweller & Cooper, 1985);
 * predicting the next step keeps the student thinking instead of reading.
 * The solution lines are the marking scheme's steps (javítási útmutató)
 * followed by the final answer.
 */
export interface SolutionLine {
  /** Rich text: the step as the marking scheme describes it. */
  text: string;
  /** Points the marking scheme gives for it. */
  points: number;
  final?: boolean;
}

/** Per item of a worked session: 0 is a worked example, -1 a task solved alone. */
export const EXAMPLE = 0;
export const ALONE = -1;

export function solutionLines(task: Task): SolutionLine[] {
  const lines: SolutionLine[] = (task.scoring?.steps ?? []).map((step) => ({
    text: step.description,
    points: step.points,
  }));
  const rules = (task.scoring?.rules ?? []).filter((rule) =>
    ['number', 'text'].includes(rule.answer.kind),
  );
  if (rules.length > 0) {
    const fields = new Map<string, Field>(task.fields.map((f) => [f.id, f]));
    const text = rules
      .map((rule) => {
        const label = fields.get(rule.fieldIds[0]!)?.label;
        const value = expectedAnswer(rule, fields);
        return label && /[=:]\s*$/.test(label) ? `${label} ${value}` : value;
      })
      .join('; ');
    lines.push({
      text,
      points: rules.reduce((sum, rule) => sum + rule.points, 0),
      final: true,
    });
  }
  return lines;
}

/** Only tasks with a worked-out solution of at least two lines take part. */
export const hasWorkedSolution = (task: Task) =>
  task.type === 'calculation' && solutionLines(task).length >= 2;

export interface WorkedPools {
  /** Tasks with a worked-out solution, to show as examples. */
  examples: TaskRef[];
  /** Tasks of the topic to solve alone (with or without a worked solution). */
  alone: TaskRef[];
}

const refKey = (ref: TaskRef) => `${ref.examId}|${ref.taskId}`;

/**
 * The tasks of one topic, closest to the first example first: the more
 * topics a task shares with it, the more alike they are; shorter solutions
 * come before longer ones.
 */
export function workedPools(candidates: { ref: TaskRef; task: Task }[], seed: number): WorkedPools {
  const shuffled = shuffle(candidates, seed);
  const first = shuffled
    .filter((c) => hasWorkedSolution(c.task))
    .sort((a, b) => solutionLines(a.task).length - solutionLines(b.task).length)[0];
  if (!first) return { examples: [], alone: shuffled.map((c) => c.ref) };
  const topics = new Set(first.task.topics ?? []);
  const shared = (task: Task) => (task.topics ?? []).filter((t) => topics.has(t)).length;
  const byLikeness = (a: (typeof candidates)[number], b: (typeof candidates)[number]) =>
    shared(b.task) - shared(a.task) || solutionLines(a.task).length - solutionLines(b.task).length;
  const rest = shuffled.filter((c) => c !== first).sort(byLikeness);
  return {
    examples: [first, ...rest.filter((c) => hasWorkedSolution(c.task))].map((c) => c.ref),
    alone: rest.map((c) => c.ref),
  };
}

/**
 * The next task of a kind that has not been used in this session yet, so an
 * example is never asked again alone and the other way round.
 */
export function nextFromPool(
  pools: WorkedPools,
  kind: 'example' | 'alone',
  used: TaskRef[],
): TaskRef | undefined {
  const taken = new Set(used.map(refKey));
  return pools[kind === 'example' ? 'examples' : 'alone'].find((ref) => !taken.has(refKey(ref)));
}
