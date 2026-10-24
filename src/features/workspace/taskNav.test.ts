import { describe, expect, it } from 'vitest';
import { taskUnitNumber } from '@/content/labels';
import type { Exam } from '@/content/schema.types';
import { choiceKey } from '@/storage/attempts';
import { taskEntries } from './taskNav';

const task = (id: string, number: string, group?: string) =>
  ({ id, number, group, type: 'short_answer', fields: [{ id: `${id}-f`, kind: 'text' }] }) as never;

const exam = (tasks: never[], choices?: unknown[]) =>
  ({ parts: [{ id: 'II', tasks, choices }] }) as unknown as Exam;

describe('taskUnitNumber', () => {
  it('groups sub-tasks but keeps tasks linked only for a choice apart', () => {
    expect(taskUnitNumber({ number: '16. a)', group: '16' })).toBe('16');
    expect(taskUnitNumber({ number: '13.', group: '13-16' })).toBe('13.');
    expect(taskUnitNumber({ number: '3.' })).toBe('3.');
  });
});

describe('taskEntries', () => {
  const math = exam(
    [
      task('16a', '16. a)', '16'),
      task('16b', '16. b)', '16'),
      task('17', '17.'),
      task('18', '18.'),
    ],
    [{ pick: 2, taskIds: ['16', '17', '18'] }],
  );

  it('counts only as many choice tasks as will be solved', () => {
    const [part] = taskEntries(math, { '16a-f': 'x', '17-f': 'y', '18-f': 'z' }, null);
    expect(part!.entries.map((e) => e.number)).toEqual(['16', '17.', '18.']);
    expect(part!.total).toBe(2);
    expect(part!.done).toBe(2);
  });

  it('leaves out the task that was not chosen', () => {
    const answers = { [choiceKey('II', 0)]: ['16', '18'], '17-f': 'y' };
    const [part] = taskEntries(math, answers, null);
    expect(part!.entries.find((e) => e.number === '17.')!.unchosen).toBe(true);
    expect(part!.total).toBe(2);
    expect(part!.done).toBe(0);
  });

  it('keeps history essays linked for a choice as separate tasks', () => {
    const history = exam(
      [
        task('13', '13.', '13-16'),
        task('14', '14.', '14-15'),
        task('15', '15.', '14-15'),
        task('16', '16.', '13-16'),
      ],
      [{ pick: 1, taskIds: ['13-16', '14-15'] }],
    );
    const [part] = taskEntries(history, { [choiceKey('II', 0)]: ['14-15'] }, null);
    expect(part!.entries).toHaveLength(4);
    expect(part!.total).toBe(2);
  });
});
