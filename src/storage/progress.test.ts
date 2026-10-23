import { describe, expect, it } from 'vitest';
import type { AnswerRow, AttemptRow } from './db';
import { summarizeProgress } from './progress';

const attempt = (id: string, updatedAt: number, submitted?: number): AttemptRow => ({
  id,
  examId: 'e',
  mode: 'practice',
  startedAt: 0,
  updatedAt,
  submittedAt: submitted,
  partSeconds: {},
  result: submitted ? { points: 30, maxPoints: 100 } : undefined,
});
const answer = (attemptId: string, fieldId: string, value: AnswerRow['value']): AnswerRow => ({
  attemptId,
  fieldId,
  value,
  updatedAt: 0,
});

describe('summarizeProgress', () => {
  it('counts answered fields of the latest unfinished attempt only', () => {
    const progress = summarizeProgress(
      [attempt('done', 1, 1), attempt('old', 2), attempt('new', 3)],
      [
        answer('new', '1-f1', '12'),
        answer('new', '2-f1', '  '),
        answer('new', '3-f1', ['a']),
        answer('new', '4-f1', false),
        answer('old', '5-f1', 'x'),
      ],
    ).get('e');
    expect(progress?.best).toBeCloseTo(0.3);
    expect(progress?.inProgress).toBe(true);
    expect([...(progress?.answeredFields ?? [])]).toEqual(['1-f1', '3-f1']);
  });
});
