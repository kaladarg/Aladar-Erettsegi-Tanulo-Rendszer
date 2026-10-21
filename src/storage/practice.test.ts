import { describe, expect, it } from 'vitest';
import { ALONE, EXAMPLE } from '@/domain/practice/worked';
import { db } from './db';
import { addWorkedItem, createDrill } from './practice';

const ref = (taskId: string) => ({ examId: 'm', taskId });

describe('worked-example sessions', () => {
  it('grow one task at a time, as the student chooses, without repeats', async () => {
    const id = await createDrill({
      kind: 'worked',
      subject: 'matematika',
      topic: 'egyenlet',
      items: [ref('a')],
      hidden: [EXAMPLE],
      pools: { examples: [ref('a'), ref('b')], alone: [ref('b'), ref('c')] },
    });

    expect(await addWorkedItem(id, 'example')).toBe(true);
    expect(await addWorkedItem(id, 'alone')).toBe(true);
    let session = (await db.drillSessions.get(id))!;
    expect(session.items).toEqual([ref('a'), ref('b'), ref('c')]);
    expect(session.hidden).toEqual([EXAMPLE, EXAMPLE, ALONE]);
    expect(session.index).toBe(2);

    // Both pools are used up now.
    expect(await addWorkedItem(id, 'example')).toBe(false);
    expect(await addWorkedItem(id, 'alone')).toBe(false);
    session = (await db.drillSessions.get(id))!;
    expect(session.items).toHaveLength(3);
  });
});
