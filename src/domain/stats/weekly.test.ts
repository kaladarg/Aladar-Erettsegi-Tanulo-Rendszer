import { describe, expect, it } from 'vitest';
import type { ReviewEvent } from '../practice/review';
import { weeklySummary } from './weekly';

const now = new Date('2026-10-25T18:00:00'); // a Sunday
const at = (day: string) => new Date(`${day}T12:00:00`).getTime();
const event = (day: string, topic: string, ratio: number): ReviewEvent => ({
  examId: 'm',
  taskId: `${day}-${topic}-${ratio}`,
  time: at(day),
  ratio,
  type: 'short_answer',
  subject: 'matematika',
  topics: [topic],
  number: '1.',
});

describe('weeklySummary', () => {
  it('is empty without activity in the last seven days', () => {
    expect(
      weeklySummary({
        events: [event('2026-10-01', 'halmazok', 1)],
        days: ['2026-10-01'],
        cardTimes: [],
        attempts: [],
        now,
      }),
    ).toBeNull();
  });

  it('counts the week and finds improved and weak topics', () => {
    const summary = weeklySummary({
      events: [
        event('2026-10-10', 'halmazok', 0.2),
        event('2026-10-22', 'halmazok', 0.8),
        event('2026-10-12', 'gráfok', 0.3),
        event('2026-10-23', 'gráfok', 0.2),
      ],
      days: ['2026-10-10', '2026-10-22', '2026-10-23'],
      cardTimes: [at('2026-10-24'), at('2026-10-01')],
      attempts: [],
      now,
    })!;
    expect(summary).toMatchObject({
      from: '2026-10-19',
      activeDays: 2,
      tasks: 2,
      cards: 1,
      papers: 0,
    });
    expect(summary.improved.map((t) => t.topic)).toEqual(['halmazok']);
    expect(summary.focus).toMatchObject({ topic: 'gráfok' });
  });
});
