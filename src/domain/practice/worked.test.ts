import { describe, expect, it } from 'vitest';
import type { Exam, Task } from '@/content/schema.types';
import { ALONE, hasWorkedSolution, lineMatches, solutionLines, workedSeries } from './worked';

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

describe('lineMatches', () => {
  const [first, , final] = solutionLines(task('1', 2));
  it('checks keywords and numbers when the scheme has them', () => {
    expect(lineMatches(first!, 'szorzok 100-zal')).toBe(true);
    expect(lineMatches(first!, 'szorzok 10-zel')).toBe(false);
    expect(lineMatches(final!, 'x = 2,50')).toBe(true);
    expect(lineMatches(final!, 'x = 3')).toBe(false);
  });

  it('cannot tell without keywords or without an answer', () => {
    expect(lineMatches(solutionLines(task('1', 2))[1]!, 'bármi')).toBeUndefined();
    expect(lineMatches(final!, '  ')).toBeUndefined();
  });
});

describe('workedSeries', () => {
  const exam = { id: 'm' } as Exam;
  const candidate = (id: string, steps: number) => ({
    ref: { examId: 'm', taskId: id },
    exam,
    task: task(id, steps),
  });

  it('fades from a full example to solving alone, shorter solutions first', () => {
    const series = workedSeries(
      [
        candidate('a', 4),
        candidate('b', 1),
        candidate('c', 3),
        candidate('d', 2),
        candidate('e', 0),
      ],
      3,
    );
    expect(series).toHaveLength(4);
    expect(series.map((s) => s.hidden)).toEqual([0, 1, 2, ALONE]);
    expect(series[0]!.taskId).toBe('b');
  });

  it('gives a single worked example when only one task fits', () => {
    expect(workedSeries([candidate('a', 2)], 1)).toEqual([{ examId: 'm', taskId: 'a', hidden: 0 }]);
  });

  it('keeps the first line visible on short solutions', () => {
    const series = workedSeries([candidate('a', 1), candidate('b', 1), candidate('c', 1)], 2);
    expect(series.map((s) => s.hidden)).toEqual([0, 1, ALONE]);
  });
});
