import { describe, expect, it } from 'vitest';
import { CALC_KINDS, checkCalcAnswer, clock, hu, makeCalcTask } from './calc';

describe('földrajz calculation tasks', () => {
  it.each(CALC_KINDS)('%s: the shown answer is accepted and a wrong one is not', (kind) => {
    for (let i = 0; i < 200; i++) {
      const task = makeCalcTask(kind);
      const right = task.answerType === 'time' ? clock(task.answer) : hu(task.answer, 3);
      expect(checkCalcAnswer(task, right), `${task.problem} → ${right}`).toBe(true);
      const wrong = task.answerType === 'time' ? clock(task.answer + 30) : hu(task.answer + 7, 3);
      expect(checkCalcAnswer(task, wrong)).toBe(false);
      expect(task.steps.join(' ')).not.toContain('NaN');
    }
  });

  it('computes known cases', () => {
    const fixed = (values: number[]) => {
      let i = 0;
      return () => values[i++ % values.length]!;
    };
    // Noon sun height: 47° N on 21 June → 90 − (47 − 23,5) = 66,5°.
    const sun = makeCalcTask('delelesi', fixed([0.99, 47 / 67 + 0.001, 0.3]));
    expect(sun.problem).toContain('47° északi');
    expect(sun.answer).toBeCloseTo(66.5);
    expect(checkCalcAnswer(sun, '66,5')).toBe(true);
    expect(checkCalcAnswer(sun, '')).toBeNull();
  });
});
