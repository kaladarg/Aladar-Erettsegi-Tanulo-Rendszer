import { describe, expect, it } from 'vitest';
import type { AttemptRow } from '@/storage/db';
import {
  buildCards,
  doneCards,
  dueCards,
  examEvents,
  outcomeOf,
  upcomingCards,
  type ReviewEvent,
  type ReviewMark,
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

const mark = (day: string, choice: ReviewMark['choice'], extra: Partial<ReviewMark> = {}) => ({
  examId: 'matematika-a',
  taskId: '1',
  time: at(day) + 1000,
  choice,
  subject: 'matematika',
  type: 'short_answer' as const,
  number: '1.',
  ...extra,
});

describe('buildCards', () => {
  it('puts a miss on the list from the next day', () => {
    const [card] = buildCards([event('2026-10-01', 0.5)]);
    expect(card).toMatchObject({ status: 'open', source: 'missed', due: '2026-10-02' });
  });

  it('keeps a task until the student says it is done; a right answer is only noted', () => {
    const history = [event('2026-10-01', 0), event('2026-10-02', 1)];
    expect(buildCards(history)[0]).toMatchObject({ status: 'open', lastRatio: 1 });
    expect(buildCards(history, [mark('2026-10-02', 'done')])[0]).toMatchObject({
      status: 'done',
      doneReason: 'done',
    });
  });

  it('"Még gyakorolnám" brings it back after a few days', () => {
    const [card] = buildCards([event('2026-10-01', 0)], [mark('2026-10-02', 'again')]);
    expect(card).toMatchObject({ status: 'open', due: '2026-10-05' });
  });

  it('the student can overrule the automatic check', () => {
    const [card] = buildCards([event('2026-10-01', 0)], [mark('2026-10-01', 'accepted')]);
    expect(card).toMatchObject({ status: 'done', doneReason: 'accepted' });
  });

  it('a new miss after "done" puts it back', () => {
    const cards = buildCards(
      [event('2026-10-01', 0), event('2026-10-08', 0.5)],
      [mark('2026-10-02', 'done')],
    );
    expect(cards[0]).toMatchObject({ status: 'open', due: '2026-10-09' });
  });

  it('saved tasks are on the list at once, even when they went right', () => {
    const [card] = buildCards([event('2026-10-01', 1)], [mark('2026-10-01', 'saved')]);
    expect(card).toMatchObject({ status: 'open', source: 'saved', due: '2026-10-01' });
  });

  it('ignores tasks answered right the first time and essays', () => {
    expect(buildCards([event('2026-10-01', 1)])).toEqual([]);
    expect(buildCards([event('2026-10-01', 0, { type: 'essay' })])).toEqual([]);
  });

  it('replays events in time order', () => {
    const cards = buildCards([event('2026-10-02', 1), event('2026-10-01', 0)]);
    expect(cards[0]).toMatchObject({ status: 'open', lastRatio: 1 });
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
  it('lists done tasks apart', () => {
    const all = buildCards(
      [event('2026-10-01', 0, { taskId: 'a' })],
      [mark('2026-10-01', 'done', { taskId: 'a' })],
    );
    expect(dueCards(all, '2026-10-05')).toEqual([]);
    expect(doneCards(all).map((c) => c.taskId)).toEqual(['a']);
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
