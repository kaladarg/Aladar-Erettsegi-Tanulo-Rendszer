import { describe, expect, it } from 'vitest';
import type { Task } from '@/content/schema.types';
import { hasWorkedSolution, nextFromPool, solutionLines, workedPools } from './worked';

const task = (id: string, steps: number, extra: Partial<Task> = {}): Task =>
  ({
    id,
    number: id,
    type: 'calculation',
    text: 'Oldja meg!',
    maxPoints: steps + 1,
    fields: [{ id: `${id}-f`, kind: 'number', label: 'x =' }],
    scoring: {
      steps: Array.from({ length: steps }, (_, i) => ({
        id: `s${i}`,
        points: 1,
        description: `${i + 1}. lépés`,
        ...(i === 0 ? { auto: { fieldIds: ['w'], alternatives: [[['100']]] } } : {}),
      })),
      rules: [
        { id: 'r', points: 1, fieldIds: [`${id}-f`], answer: { kind: 'number', accepted: [2.5] } },
      ],
    },
    ...extra,
  }) as unknown as Task;

describe('solutionLines', () => {
  it('lists the marking steps and then the final answer', () => {
    const lines = solutionLines(task('1', 2));
    expect(lines.map((l) => l.text)).toEqual(['1. lépés', '2. lépés', 'x = 2,5']);
    expect(lines[2]).toMatchObject({ final: true, points: 1 });
  });

  it('only counts calculations with at least two lines', () => {
    expect(hasWorkedSolution(task('1', 1))).toBe(true);
    expect(hasWorkedSolution(task('1', 0))).toBe(false);
    expect(hasWorkedSolution(task('1', 3, { type: 'short_answer' }))).toBe(false);
  });
});

const candidate = (id: string, steps: number, topics: string[] = ['egyenlet']) => ({
  ref: { examId: 'm', taskId: id },
  task: task(id, steps, { topics } as Partial<Task>),
});

describe('workedPools', () => {
  it('starts with the shortest worked solution and puts the most alike tasks next', () => {
    const pools = workedPools(
      [
        candidate('a', 4, ['egyenlet', 'törtes egyenlet']),
        candidate('b', 1, ['egyenlet', 'törtes egyenlet']),
        candidate('c', 3, ['egyenlet']),
        candidate('d', 2, ['egyenlet', 'törtes egyenlet']),
        candidate('e', 0, ['egyenlet', 'törtes egyenlet']),
      ],
      3,
    );
    expect(pools.examples.map((r) => r.taskId)).toEqual(['b', 'd', 'a', 'c']);
    // Any task of the topic can be solved alone, the first example excepted.
    expect(pools.alone.map((r) => r.taskId)).toEqual(['e', 'd', 'a', 'c']);
  });

  it('has no examples when no task has a worked solution', () => {
    expect(workedPools([candidate('a', 0)], 1)).toEqual({
      examples: [],
      alone: [{ examId: 'm', taskId: 'a' }],
    });
  });
});

describe('nextFromPool', () => {
  const pools = workedPools([candidate('a', 1), candidate('b', 2), candidate('c', 3)], 5);

  it('never offers a task twice in a session', () => {
    const used = [pools.examples[0]!];
    const next = nextFromPool(pools, 'example', used)!;
    expect(next).not.toEqual(used[0]);
    used.push(next);
    const alone = nextFromPool(pools, 'alone', used)!;
    expect(used).not.toContainEqual(alone);
    used.push(alone);
    expect(nextFromPool(pools, 'alone', used)).toBeUndefined();
    expect(nextFromPool(pools, 'example', used)).toBeUndefined();
  });
});
