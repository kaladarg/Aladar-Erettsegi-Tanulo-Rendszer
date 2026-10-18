import { describe, expect, it } from 'vitest';
import type { ExamEntry } from '@/content/schema.types';
import type { AttemptRow, TaskSummary } from '@/storage/db';
import {
  latestPerExam,
  mistakeStats,
  progressSeries,
  recentDays,
  recommendations,
  scoredAttempts,
  streak,
  strongTopics,
  topicStats,
  typeStats,
  weakTopics,
} from './stats';

const task = (
  id: string,
  points: number,
  maxPoints: number,
  topics: string[],
  extra: Partial<TaskSummary> = {},
): TaskSummary => ({
  id,
  number: `${id}.`,
  type: 'short_answer',
  topics,
  points,
  maxPoints,
  pendingPoints: 0,
  status: points === maxPoints ? 'correct' : points > 0 ? 'partial' : 'wrong',
  ...extra,
});

function attempt(
  id: string,
  examId: string,
  submittedAt: number | undefined,
  tasks: TaskSummary[],
  pendingPoints = 0,
): AttemptRow {
  const points = tasks.reduce((s, t) => s + t.points, 0);
  return {
    id,
    examId,
    mode: 'practice',
    startedAt: 0,
    updatedAt: submittedAt ?? 0,
    submittedAt,
    partSeconds: {},
    result: submittedAt
      ? { points, maxPoints: 10, pendingPoints, subject: examId.split('-')[0], tasks }
      : undefined,
  };
}

const old = attempt('a1', 'matematika-kozep-2024-majus', 1, [task('1', 0, 2, ['halmazok'])]);
const newer = attempt('a2', 'matematika-kozep-2024-majus', 2, [
  task('1', 2, 2, ['halmazok']),
  task('2', 1, 4, ['függvények', 'egyenletek'], { type: 'calculation' }),
  task('3', 0, 2, ['függvények'], { status: 'empty' }),
  task('4', 0, 3, ['valószínűség'], { status: 'pending', pendingPoints: 3 }),
]);
const history = attempt('a3', 'tortenelem-kozep-2024-majus', 3, [
  task('1', 3, 3, ['reformkor'], { helped: true }),
]);
const open = attempt('a4', 'magyar-kozep-2024-majus', undefined, []);
const all = [history, newer, old, open];

describe('statistics', () => {
  it('keeps submitted attempts in time order, per subject on request', () => {
    expect(scoredAttempts(all).map((a) => a.id)).toEqual(['a1', 'a2', 'a3']);
    expect(scoredAttempts(all, 'tortenelem').map((a) => a.id)).toEqual(['a3']);
    expect(latestPerExam(scoredAttempts(all)).map((a) => a.id)).toEqual(['a2', 'a3']);
  });

  it('charts every submission as a percentage', () => {
    const series = progressSeries(scoredAttempts(all, 'matematika'));
    expect(series.map((p) => p.percent)).toEqual([0, 30]);
    expect(series[1]).toMatchObject({ subject: 'matematika', complete: true });
  });

  it('counts topics on the latest attempt only, without tasks waiting for review', () => {
    const stats = topicStats(scoredAttempts(all));
    const byName = Object.fromEntries(stats.map((s) => [s.topic, s]));
    expect(byName['halmazok']).toMatchObject({ points: 2, maxPoints: 2, ratio: 1 });
    expect(byName['függvények']).toMatchObject({ points: 1, maxPoints: 6, tasks: 2 });
    expect(byName['valószínűség']).toBeUndefined();
    expect(weakTopics(stats).map((s) => s.topic)).toEqual(['függvények', 'egyenletek']);
    expect(strongTopics(stats).map((s) => s.topic)).toEqual(['reformkor', 'halmazok']);
  });

  it('sorts mistakes into types', () => {
    expect(mistakeStats(scoredAttempts(all))).toEqual({
      tasks: 4,
      correct: 2,
      partial: 1,
      wrong: 0,
      empty: 1,
      helped: 1,
    });
    expect(typeStats(scoredAttempts(all)).map((s) => s.type)).toEqual([
      'calculation',
      'short_answer',
    ]);
  });

  it('counts the current and best streak', () => {
    const days = ['2026-10-10', '2026-10-11', '2026-10-12', '2026-10-16', '2026-10-17'];
    expect(streak(days, '2026-10-17')).toEqual({ current: 2, best: 3, today: true });
    // Today is still open: yesterday's streak holds.
    expect(streak(days, '2026-10-18')).toEqual({ current: 2, best: 3, today: false });
    expect(streak(days, '2026-10-19').current).toBe(0);
    // Across a month boundary.
    expect(streak(['2026-09-30', '2026-10-01'], '2026-10-01').current).toBe(2);
    expect(recentDays(days, 3, '2026-10-18')).toEqual([
      { day: '2026-10-16', active: true },
      { day: '2026-10-17', active: true },
      { day: '2026-10-18', active: false },
    ]);
  });

  it('recommends marking, weak topics and an untried paper', () => {
    const entry = (id: string, year: number, sample = false) =>
      ({ id, subject: id.split('-')[0], year, session: 'majus', sample }) as ExamEntry;
    const exams = [
      entry('matematika-kozep-2024-majus', 2024),
      entry('matematika-kozep-2026-majus-minta', 2026, true),
      entry('matematika-kozep-2025-majus', 2025),
    ];
    const pending = attempt('a5', 'matematika-kozep-2023-majus', 4, [task('1', 1, 2, [])], 5);
    const list = recommendations([...all, pending], exams, ['matematika'], 10);
    expect(list.map((r) => r.kind)).toEqual(['review', 'topic', 'topic', 'newExam']);
    expect(list[3]).toMatchObject({ entry: { id: 'matematika-kozep-2025-majus' } });
  });
});
