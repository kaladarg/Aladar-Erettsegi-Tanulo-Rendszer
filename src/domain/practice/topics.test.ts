import { describe, expect, it } from 'vitest';
import type { Exam } from '@/content/schema.types';
import { findTask, mixedRound, shuffle, topicIndex } from './topics';

const exam = (id: string, tasks: { id: string; type?: string; topics: string[] }[]) =>
  ({
    id,
    parts: [
      {
        id: 'I',
        tasks: tasks.map((t) => ({ type: 'short_answer', maxPoints: 2, ...t })),
      },
    ],
  }) as unknown as Exam;

describe('topicIndex', () => {
  const exams = [
    exam('a', [
      { id: '1', topics: ['Függvények'] },
      { id: '2', topics: ['függvények', 'Halmazok'] },
      { id: '3', type: 'essay', topics: ['Halmazok'] },
    ]),
    exam('b', [{ id: '1', topics: ['Függvények '] }]),
  ];

  it('merges spellings and keeps the most common name', () => {
    const [first, second] = topicIndex(exams);
    expect(first).toMatchObject({ key: 'függvények', name: 'Függvények', points: 6 });
    expect(first!.tasks).toEqual([
      { examId: 'a', taskId: '1' },
      { examId: 'a', taskId: '2' },
      { examId: 'b', taskId: '1' },
    ]);
    // Essays are left out.
    expect(second).toMatchObject({ name: 'Halmazok', tasks: [{ examId: 'a', taskId: '2' }] });
  });

  it('finds tasks and tolerates missing ones', () => {
    const map = new Map(exams.map((e) => [e.id, e]));
    expect(findTask(map, { examId: 'b', taskId: '1' })?.task.id).toBe('1');
    expect(findTask(map, { examId: 'c', taskId: '1' })).toBeUndefined();
  });
});

describe('shuffle', () => {
  it('is stable for a seed and keeps every item', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffle(items, 42)).toEqual(shuffle(items, 42));
    expect([...shuffle(items, 42)].sort()).toEqual(items);
    expect(items).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('mixedRound', () => {
  const topic = (key: string, count: number) => ({
    key,
    name: key,
    points: count,
    tasks: Array.from({ length: count }, (_, i) => ({ examId: key, taskId: String(i) })),
  });
  const topics = [topic('a', 6), topic('b', 6), topic('c', 6), topic('d', 1)];

  it('spreads the round over the topics without repeats', () => {
    const round = mixedRound(topics, 7, 7);
    expect(round).toHaveLength(7);
    expect(new Set(round.map((r) => `${r.examId}|${r.taskId}`)).size).toBe(7);
    const per = (key: string) => round.filter((r) => r.examId === key).length;
    expect(per('d')).toBe(1);
    expect(Math.max(per('a'), per('b'), per('c'))).toBeLessThanOrEqual(2);
  });

  it('avoids neighbours from the same topic', () => {
    const round = mixedRound(topics, 9, 3);
    for (let i = 1; i < round.length; i++) expect(round[i]!.examId).not.toBe(round[i - 1]!.examId);
  });

  it('gives weak topics a larger share', () => {
    const round = mixedRound(topics, 4, 11, new Map([['a', 0.2]]));
    expect(round.filter((r) => r.examId === 'a').length).toBeGreaterThanOrEqual(1);
    expect(mixedRound(topics.slice(0, 1), 10, 1)).toHaveLength(6);
  });
});
