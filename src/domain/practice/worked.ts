import type { Exam, Field, Task } from '@/content/schema.types';
import { matchAlternative } from '../scoring/autoCheck';
import { expectedAnswer } from '../scoring/rules';
import { shuffle, type TaskRef } from './topics';

/**
 * Worked examples that fade out ("Lépésről lépésre"). The first task of a
 * series is shown fully solved, the next ones hide more and more of the last
 * lines, and the series ends with a task to solve alone. Studying worked
 * examples helps beginners most, and fading them step by step, starting
 * from the end, eases the move to solving alone (Renkl & Atkinson, 2003).
 * The solution lines are the marking scheme's steps (javítási útmutató)
 * followed by the final answer.
 */
export interface SolutionLine {
  /** Rich text: the step as the marking scheme describes it. */
  text: string;
  /** Points the marking scheme gives for it. */
  points: number;
  /** Keyword alternatives to check a written line by, when known. */
  check?: string[][][];
  final?: boolean;
}

/** Hidden lines per series item; -1 means the task is solved alone. */
export const ALONE = -1;
const MAX_SERIES = 4;

export function solutionLines(task: Task): SolutionLine[] {
  const lines: SolutionLine[] = (task.scoring?.steps ?? []).map((step) => ({
    text: step.description,
    points: step.points,
    check: step.auto?.alternatives,
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
    // Every rule's answer must appear: one keyword group per rule, any accepted variant.
    const groups = rules.map((rule) =>
      rule.answer.kind === 'number'
        ? rule.answer.accepted.map((n) => String(n).replace('.', ','))
        : rule.answer.kind === 'text'
          ? rule.answer.accepted
          : [],
    );
    lines.push({
      text,
      points: rules.reduce((sum, rule) => sum + rule.points, 0),
      check: [groups],
      final: true,
    });
  }
  return lines;
}

/** Only tasks with a worked-out solution of at least two lines take part. */
export const hasWorkedSolution = (task: Task) =>
  task.type === 'calculation' && solutionLines(task).length >= 2;

/** Does a written line match the marking scheme's keywords? undefined when it cannot tell. */
export function lineMatches(line: SolutionLine, written: string): boolean | undefined {
  if (!line.check || line.check.length === 0 || !written.trim()) return undefined;
  return matchAlternative(written, line.check) >= 0;
}

export interface WorkedItem extends TaskRef {
  hidden: number;
}

/**
 * A series from a topic's tasks: shorter solutions first, then hiding 0, 1,
 * 2 … lines, and the last task alone. One task gives a single worked example.
 */
export function workedSeries(
  candidates: { ref: TaskRef; exam: Exam; task: Task }[],
  seed: number,
): WorkedItem[] {
  const eligible = candidates.filter((c) => hasWorkedSolution(c.task));
  const picked = shuffle(eligible, seed)
    .slice(0, MAX_SERIES)
    .sort((a, b) => solutionLines(a.task).length - solutionLines(b.task).length);
  return picked.map((c, index) => {
    const lines = solutionLines(c.task).length;
    const last = index === picked.length - 1 && picked.length > 1;
    // At least the first line stays visible until the task is solved alone.
    return { ...c.ref, hidden: last ? ALONE : Math.min(index, lines - 1) };
  });
}
