import { describe, expect, it } from 'vitest';
import type { Exam } from '@/content/schema.types';
import type { CardState } from '../cards/schedule';
import {
  dailyCards,
  dailyPlan,
  estimateMinutes,
  refKey,
  topicRatios,
  type DailyInput,
} from './daily';
import type { ReviewCard } from './review';
import type { TopicEntry } from './topics';

const exam = {
  id: 'matematika-a',
  maxPoints: 100,
  parts: [
    {
      id: 'I',
      timeLimitMinutes: 45,
      maxPoints: 30,
      tasks: [
        { id: '1', maxPoints: 2 },
        { id: '2', maxPoints: 4 },
      ],
    },
    { id: 'II', maxPoints: 70, tasks: [{ id: '3', maxPoints: 12 }] },
  ],
  timeLimitMinutes: undefined,
} as unknown as Exam;

describe('estimateMinutes', () => {
  it('uses the time per point of the part, or of the paper', () => {
    expect(estimateMinutes(exam, exam.parts[0]!.tasks[0]!)).toBe(3);
    expect(estimateMinutes(exam, exam.parts[0]!.tasks[1]!)).toBe(6);
    // No time limit known: one minute per point.
    expect(estimateMinutes(exam, exam.parts[1]!.tasks[0]!)).toBe(12);
  });
});

const state = (due: string, lastTime = 0): CardState => ({ box: 1, due, lastTime, lapses: 0 });

describe('dailyCards', () => {
  it('takes due cards first, the longest waiting first, then new ones', () => {
    const states = new Map([
      ['a', state('2026-10-20')],
      ['b', state('2026-10-10')],
      ['c', state('2026-11-01')],
    ]);
    expect(dailyCards(['a', 'b', 'c', 'd', 'e'], states, '2026-10-21', 3)).toEqual(['b', 'a', 'd']);
  });
});

const topic = (key: string, refs: string[]): TopicEntry => ({
  key,
  name: key,
  points: refs.length,
  tasks: refs.map((r) => {
    const [examId, taskId] = r.split('|');
    return { examId: examId!, taskId: taskId! };
  }),
});

const review = (subject: string, examId: string, taskId: string, due: string): ReviewCard => ({
  key: `${examId}|${taskId}`,
  examId,
  taskId,
  subject,
  topics: [],
  number: taskId,
  type: 'short_answer',
  status: 'open',
  source: 'missed',
  due,
  lastTime: 0,
  lastRatio: 0,
});

// Topic names that fall into two maths areas: functions and sets.
const base = (): DailyInput => {
  const topics = [
    topic('függvények', ['m|1', 'm|2', 'm|3']),
    topic('számtani sorozat', ['m|4', 'm|5']),
    topic('halmazok', ['m|6', 'm|7', 'm|8']),
  ];
  const minutes = new Map<string, number>();
  for (const t of topics) for (const ref of t.tasks) minutes.set(refKey(ref), 2);
  return {
    subject: 'matematika',
    areas: [],
    length: 15,
    reviewCards: [],
    topics,
    ratios: new Map(),
    minutes,
    cardIds: [],
    cardStates: new Map(),
    today: '2026-10-21',
    seed: 7,
  };
};

describe('dailyPlan', () => {
  it('fills the chosen length with tasks of the subject, without repeats', () => {
    for (const length of [5, 10, 15] as const) {
      const plan = dailyPlan({ ...base(), length });
      expect(plan.minutes).toBeLessThanOrEqual(length);
      expect(plan.tasks.length).toBeGreaterThan(0);
      expect(new Set(plan.tasks.map(refKey)).size).toBe(plan.tasks.length);
    }
  });

  it('keeps to the chosen areas', () => {
    const plan = dailyPlan({ ...base(), areas: ['gondolkodas'] });
    expect(plan.tasks.map((t) => t.taskId).sort()).toEqual(['6', '7', '8']);
  });

  it('works without any results ("Lepj meg" mixes every topic)', () => {
    const plan = dailyPlan(base());
    const topicsUsed = new Set(plan.tasks.map((t) => (Number(t.taskId) <= 5 ? 'f' : 'h')));
    expect(topicsUsed.size).toBe(2);
  });

  it('brings in Ismétlés tasks that fit the choice, spread among the others', () => {
    const input = base();
    input.reviewCards = [
      review('matematika', 'm', '6', '2026-10-20'),
      review('matematika', 'm', '1', '2026-10-19'),
      // Not due yet, and another subject.
      review('matematika', 'm', '7', '2026-10-25'),
      review('angol', 'a', '1', '2026-10-01'),
    ];
    input.minutes.set('a|1', 2);
    const plan = dailyPlan({ ...input, areas: ['gondolkodas'] });
    const reviews = plan.tasks.filter((t) => t.reason === 'review');
    expect(reviews.map((t) => t.taskId)).toEqual(['6']);
    expect(plan.tasks[0]!.reason).not.toBe('review');
  });

  it('marks tasks from weak topics', () => {
    const input = base();
    input.ratios.set('halmazok', 0.2);
    const weak = dailyPlan(input).tasks.filter((t) => t.reason === 'weak');
    expect(weak.length).toBeGreaterThan(0);
    expect(weak.every((t) => ['6', '7', '8'].includes(t.taskId))).toBe(true);
  });

  it('starts with a few cards when the subject has them', () => {
    const input = { ...base(), cardIds: Array.from({ length: 20 }, (_, i) => `c${i}`) };
    expect(dailyPlan({ ...input, length: 5 }).cards).toHaveLength(3);
    expect(dailyPlan({ ...input, length: 15 }).cards).toHaveLength(6);
  });

  it('leaves out tasks too long for the round but never ends up empty', () => {
    const input = base();
    for (const key of input.minutes.keys()) input.minutes.set(key, key === 'm|2' ? 4 : 30);
    expect(dailyPlan({ ...input, length: 5 }).tasks.map((t) => t.taskId)).toEqual(['2']);
    // Only long tasks: the shortest one still comes.
    for (const key of input.minutes.keys()) input.minutes.set(key, key === 'm|7' ? 20 : 40);
    expect(dailyPlan({ ...input, length: 5 }).tasks.map((t) => t.taskId)).toEqual(['7']);
  });

  it('is empty when the chosen areas have no tasks', () => {
    const plan = dailyPlan({ ...base(), areas: ['geometria'] });
    expect(plan).toEqual({ cards: [], tasks: [], minutes: 0 });
  });
});

describe('topicRatios', () => {
  it('weighs papers by points and practised tasks as one point each', () => {
    const ratios = topicRatios(
      [{ subject: 'matematika', topic: 'Függvények', points: 2, maxPoints: 4 }],
      [
        { subject: 'matematika', topics: ['függvények'], ratio: 1 },
        { subject: 'tortenelem', topics: ['Ókor'], ratio: 0 },
      ],
    );
    expect(ratios.get('matematika|függvények')).toBe(0.6);
    expect(ratios.get('tortenelem|ókor')).toBe(0);
  });
});
