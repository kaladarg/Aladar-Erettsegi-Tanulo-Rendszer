import { describe, expect, it } from 'vitest';
import type { AttemptRow } from '@/storage/db';
import {
  buildCards,
  dueCards,
  examEvents,
  outcomeOf,
  upcomingCards,
  type ReviewEvent,
} from './review';

const at = (day: string) => new Date(`${day}T12:00:00`).getTime();
const event = (day: string, ratio: number, extra: Partial<ReviewEvent> = {}): ReviewEvent => ({
  examId: 'matematika-a',
  taskId: '1',
  time: at(day),
  ratio,
  type: 'short_answer',
  subject: 'matematika',
  number: '1.',
  ...extra,
});

describe('buildCards', () => {
  it('schedules a mistake for the next day', () => {
    const [card] = buildCards([event('2026-10-01', 0.5)]);
    expect(card).toMatchObject({ box: 0, due: '2026-10-02', mistakes: 1 });
  });

  it('moves through 1, 3 and 7 days and leaves after three correct reviews', () => {
    const history = [event('2026-10-01', 0), event('2026-10-02', 1)];
    expect(buildCards(history)[0]).toMatchObject({ box: 1, due: '2026-10-05' });
    history.push(event('2026-10-05', 1));
    expect(buildCards(history)[0]).toMatchObject({ box: 2, due: '2026-10-12' });
    history.push(event('2026-10-12', 1));
    expect(buildCards(history)).toEqual([]);
  });

  it('a new mistake starts over', () => {
    const cards = buildCards([
      event('2026-10-01', 0),
      event('2026-10-02', 1),
      event('2026-10-05', 0.5),
    ]);
    expect(cards[0]).toMatchObject({ box: 0, due: '2026-10-06', mistakes: 2 });
  });

  it('ignores tasks answered right the first time and essays', () => {
    expect(buildCards([event('2026-10-01', 1)])).toEqual([]);
    expect(buildCards([event('2026-10-01', 0, { type: 'essay' })])).toEqual([]);
  });

  it('replays events in time order', () => {
    const cards = buildCards([event('2026-10-02', 1), event('2026-10-01', 0)]);
    expect(cards[0]).toMatchObject({ box: 1 });
  });
});

describe('due and upcoming', () => {
  const cards = buildCards([
    event('2026-10-01', 0, { taskId: 'a' }),
    event('2026-10-03', 0, { taskId: 'b' }),
  ]);
  it('splits cards by day', () => {
    expect(dueCards(cards, '2026-10-02').map((c) => c.taskId)).toEqual(['a']);
    expect(upcomingCards(cards, '2026-10-02').map((c) => c.taskId)).toEqual(['b']);
  });
});

describe('examEvents', () => {
  it('uses submitted attempts and skips empty and pending tasks', () => {
    const attempt = {
      id: 'x',
      examId: 'matematika-a',
      mode: 'practice',
      startedAt: 0,
      updatedAt: 0,
      submittedAt: at('2026-10-01'),
      partSeconds: {},
      result: {
        points: 1,
        maxPoints: 6,
        tasks: [
          {
            id: '1',
            number: '1.',
            type: 'short_answer',
            points: 1,
            maxPoints: 2,
            pendingPoints: 0,
            status: 'partial',
          },
          {
            id: '2',
            number: '2.',
            type: 'short_answer',
            points: 0,
            maxPoints: 2,
            pendingPoints: 0,
            status: 'empty',
          },
          {
            id: '3',
            number: '3.',
            type: 'calculation',
            points: 0,
            maxPoints: 2,
            pendingPoints: 2,
            status: 'pending',
          },
        ],
      },
    } satisfies AttemptRow;
    const events = examEvents([attempt, { ...attempt, id: 'y', submittedAt: undefined }]);
    expect(events).toHaveLength(1);
    expect(events[0]).toMatchObject({ taskId: '1', ratio: 0.5, subject: 'matematika' });
  });
});

describe('outcomeOf', () => {
  it('counts only marked points', () => {
    expect(outcomeOf(undefined)).toBe('skipped');
    expect(outcomeOf({ points: 2, maxPoints: 4, pendingPoints: 2 })).toBe('correct');
    expect(outcomeOf({ points: 1, maxPoints: 4, pendingPoints: 0 })).toBe('partial');
    expect(outcomeOf({ points: 0, maxPoints: 4, pendingPoints: 0 })).toBe('wrong');
  });
});
