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
  box: 0,
  due,
  lastTime: 0,
  lastRatio: 0,
  mistakes: 1,
});

const base = (): DailyInput => {
  const topics = new Map([
    ['matematika', [topic('fuggvenyek', ['m|1', 'm|2', 'm|3']), topic('halmazok', ['m|4', 'm|5'])]],
    ['tortenelem', [topic('okor', ['t|1', 't|2']), topic('kozepkor', ['t|3', 't|4'])]],
  ]);
  const minutes = new Map<string, number>();
  for (const list of topics.values())
    for (const t of list) for (const ref of t.tasks) minutes.set(refKey(ref), 2);
  return {
    subjects: ['matematika', 'tortenelem'],
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
  it('fills about 15 minutes and alternates subjects', () => {
    const plan = dailyPlan(base());
    expect(plan.minutes).toBeLessThanOrEqual(15);
    expect(plan.tasks.length).toBe(7);
    const subjects = plan.tasks.map((t) => t.subject);
    for (let i = 1; i < 4; i++) expect(subjects[i]).not.toBe(subjects[i - 1]);
    expect(new Set(plan.tasks.map(refKey)).size).toBe(plan.tasks.length);
  });

  it('puts due mistakes in, but leaves room for new practice', () => {
    const input = base();
    input.reviewCards = [
      review('matematika', 'm', '1', '2026-10-20'),
      review('matematika', 'm', '2', '2026-10-19'),
      review('matematika', 'm', '3', '2026-10-21'),
      review('matematika', 'm', '4', '2026-10-21'),
      review('matematika', 'm', '5', '2026-10-21'),
      // Not due yet, and a subject that was not chosen.
      review('matematika', 'x', '9', '2026-10-25'),
      review('angol', 'a', '1', '2026-10-01'),
    ];
    input.minutes.set('x|9', 2).set('a|1', 2);
    const plan = dailyPlan(input);
    const reviews = plan.tasks.filter((t) => t.reason === 'review');
    expect(reviews.map((t) => t.taskId)).toEqual(['2', '1', '3']);
    expect(plan.tasks.some((t) => t.subject === 'tortenelem')).toBe(true);
    expect(plan.tasks.some((t) => t.examId === 'x' || t.examId === 'a')).toBe(false);
  });

  it('marks tasks from weak topics', () => {
    const input = base();
    input.ratios.set('tortenelem|okor', 0.2);
    const plan = dailyPlan(input);
    const weak = plan.tasks.filter((t) => t.reason === 'weak');
    expect(weak.length).toBeGreaterThan(0);
    expect(weak.every((t) => t.examId === 't' && ['1', '2'].includes(t.taskId))).toBe(true);
  });

  it('keeps time for the cards and still offers at least two short tasks', () => {
    const input = base();
    input.cardIds = Array.from({ length: 20 }, (_, i) => `c${i}`);
    for (const key of input.minutes.keys()) input.minutes.set(key, 6);
    const plan = dailyPlan(input);
    expect(plan.cards).toHaveLength(9);
    expect(plan.tasks).toHaveLength(2);
  });

  it('leaves out tasks too long for the round', () => {
    const input = base();
    for (const key of input.minutes.keys()) input.minutes.set(key, key.startsWith('t|') ? 30 : 2);
    const plan = dailyPlan(input);
    expect(plan.tasks.every((t) => t.subject === 'matematika')).toBe(true);
    expect(plan.minutes).toBeLessThanOrEqual(15);
  });

  it('is empty when nothing can be practised', () => {
    const plan = dailyPlan({ ...base(), subjects: [] });
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
