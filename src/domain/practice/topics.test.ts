import { describe, expect, it } from 'vitest';
import type { Exam } from '@/content/schema.types';
import { findTask, shuffle, topicIndex } from './topics';

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
