import { describe, expect, it } from 'vitest';
import type { Exam } from '@/content/schema.types';
import { pacing } from './pacing';

const exam = {
  id: 'm',
  parts: [
    {
      id: 'I',
      timeLimitMinutes: 45,
      maxPoints: 30,
      tasks: [
        { id: '1', number: '1.', maxPoints: 10 },
        { id: '2', number: '2.', maxPoints: 20 },
      ],
    },
    {
      id: 'II',
      timeLimitMinutes: 135,
      maxPoints: 70,
      tasks: [
        { id: '13', number: '13.', maxPoints: 14 },
        { id: '14', number: '14.', maxPoints: 14 },
      ],
    },
  ],
} as unknown as Exam;

describe('pacing', () => {
  it('shares each part’s time out by points', () => {
    const { rows } = pacing(exam, { '1': 600, '13': 1200 });
    // Part I: 45 min for 30 points → task 1 (10 points) is worth 15 min.
    expect(rows.find((r) => r.taskId === '1')!.budget).toBe(900);
    // Part II: 135 min for 70 points → 14 points are worth 27 min.
    expect(rows.find((r) => r.taskId === '13')!.budget).toBe(1620);
  });

  it('points out tasks that took far more than their share, worst first', () => {
    const result = pacing(exam, { '1': 1500, '2': 1000, '13': 3600, '14': 1700 });
    // 1: 25 min for 15 → slow; 13: 60 min for 27 → slowest; 14: 28 min for 27 → fine.
    expect(result.slow.map((r) => r.taskId)).toEqual(['13', '1']);
    expect(result.tracked).toBe(7800);
  });

  it('does not count small overruns', () => {
    // 16 minutes on a 15-minute share is not worth a remark.
    expect(pacing(exam, { '1': 960 }).slow).toEqual([]);
  });
});
