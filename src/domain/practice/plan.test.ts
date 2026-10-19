import { describe, expect, it } from 'vitest';
import type { ExamEntry } from '@/content/schema.types';
import type { AttemptRow } from '@/storage/db';
import { daysBetween, phaseFor, studyPlan, weekStart, type PlanInput } from './plan';

const at = (day: string) => new Date(`${day}T12:00:00`).getTime();
const entry = (id: string, year: number) =>
  ({ id, subject: id.split('-')[0], year, session: 'majus' }) as unknown as ExamEntry;

const base: PlanInput = {
  // A Wednesday.
  today: '2026-10-21',
  examDates: {},
  attempts: [],
  drills: [],
  oralTopics: [],
  cards: [],
  exams: [
    entry('matematika-2025', 2025),
    entry('matematika-2026', 2026),
    entry('magyar-2026', 2026),
  ],
};

describe('dates', () => {
  it('counts days and finds Monday', () => {
    expect(daysBetween('2026-10-21', '2026-10-31')).toBe(10);
    expect(daysBetween('2026-03-28', '2026-03-30')).toBe(2); // across the clock change
    expect(weekStart('2026-10-21')).toBe('2026-10-19');
    expect(weekStart('2026-10-25')).toBe('2026-10-19');
  });

  it('maps days left to phases', () => {
    expect([100, 56, 14, 0, -1].map(phaseFor)).toEqual([
      'build',
      'practise',
      'final',
      'day',
      'done',
    ]);
  });
});

describe('studyPlan', () => {
  it('sorts by the nearest exam and drops past ones', () => {
    const plans = studyPlan({
      ...base,
      examDates: { matematika: '2027-05-05', magyar: '2026-11-01', tortenelem: '2026-10-01' },
    });
    expect(plans.map((p) => p.subject)).toEqual(['magyar', 'matematika']);
  });

  it('suggests the newest untried paper, then a topic to explore', () => {
    const [plan] = studyPlan({ ...base, examDates: { matematika: '2027-05-05' } });
    expect(plan!.phase).toBe('build');
    expect(plan!.items.map((i) => i.kind)).toEqual(['review', 'paper', 'topicExplore']);
    const paper = plan!.items[1];
    expect(paper?.kind === 'paper' && paper.entry?.id).toBe('matematika-2026');
    expect(plan!.items[0]!.done).toBe(true);
  });

  it('turns to timed exams and oral practice near the date', () => {
    const [plan] = studyPlan({ ...base, examDates: { magyar: '2026-10-30' } });
    expect(plan!.phase).toBe('final');
    expect(plan!.items.map((i) => i.kind)).toEqual(['review', 'exam', 'oral']);
  });

  it('marks this week’s work as done', () => {
    const attempt = {
      id: 'a',
      examId: 'matematika-2026',
      mode: 'practice',
      startedAt: at('2026-10-20'),
      updatedAt: at('2026-10-20'),
      submittedAt: at('2026-10-20'),
      partSeconds: {},
      result: {
        points: 2,
        maxPoints: 10,
        subject: 'matematika',
        tasks: [
          {
            id: '1',
            number: '1.',
            type: 'short_answer',
            topics: ['Függvények'],
            points: 0,
            maxPoints: 4,
            pendingPoints: 0,
            status: 'wrong',
          },
        ],
      },
    } satisfies AttemptRow;
    const [plan] = studyPlan({
      ...base,
      examDates: { matematika: '2027-05-05' },
      attempts: [attempt],
      drills: [
        {
          id: 'd',
          kind: 'topic',
          subject: 'matematika',
          topic: 'függvények',
          items: [],
          index: 0,
          checked: {},
          startedAt: at('2026-10-21'),
          updatedAt: at('2026-10-21'),
        },
      ],
    });
    const paper = plan!.items.find((i) => i.kind === 'paper');
    expect(paper).toMatchObject({ done: true });
    // The tried paper is skipped for the next suggestion.
    expect(paper?.kind === 'paper' && paper.entry?.id).toBe('matematika-2025');
    expect(plan!.items.find((i) => i.kind === 'topic')).toMatchObject({
      topic: 'Függvények',
      percent: 0,
      done: true,
    });
  });
});
