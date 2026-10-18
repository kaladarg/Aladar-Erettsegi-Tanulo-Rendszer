import { describe, expect, it } from 'vitest';
import type { Exam, Rect, Task } from '@/content/schema.types';
import { choiceKey } from '@/storage/attempts';
import { buildOverlayItems, visibleItems } from './overlayItems';

const rect = (page: number, y: number, h = 0.1): Rect => ({ page, x: 0.1, y, w: 0.8, h });

const essay = (id: string, group: string, r: Rect): Task => ({
  id,
  number: `${id}.`,
  group,
  type: 'essay',
  text: 'Mutassa be!',
  maxPoints: 10,
  fields: [{ id: `${id}-f1`, kind: 'essay', pdfRect: r }],
  scoring: { criteria: [{ id: 'c1', label: 'Tartalom', maxPoints: 10 }] },
});

// Two alternative essays write on the same lines of page 2; the X cells are on page 1.
const exam = {
  schemaVersion: 1,
  id: 'test',
  subject: 'tortenelem',
  level: 'kozep',
  year: 2024,
  session: 'majus',
  title: 'Teszt',
  maxPoints: 20,
  timeLimitMinutes: 60,
  parts: [
    {
      id: 'II',
      title: 'II.',
      maxPoints: 10,
      choices: [
        { pick: 1, taskIds: ['a', 'b'], unitRects: [rect(1, 0.5, 0.03), rect(1, 0.6, 0.03)] },
      ],
      tasks: [
        {
          ...essay('1', 'a', rect(2, 0.2, 0.5)),
          fields: [
            {
              id: '1-f1',
              kind: 'choice',
              options: [
                { value: '1', label: 'egy', pdfRect: rect(1, 0.1, 0.02) },
                { value: '2', label: 'kettő', pdfRect: rect(1, 0.2, 0.02) },
              ],
            },
            { id: '1-f2', kind: 'essay', pdfRect: rect(2, 0.2, 0.5) },
          ],
        },
        essay('2', 'b', rect(2, 0.2, 0.5)),
      ],
    },
  ],
} as unknown as Exam;

describe('buildOverlayItems', () => {
  const pages = buildOverlayItems(exam);

  it('sorts items by reading order and adds choice marks', () => {
    expect(pages.get(1)!.map((i) => i.kind)).toEqual(['options', 'choiceMark', 'choiceMark']);
  });

  it('puts a choice gate over an answer area shared by alternative units', () => {
    const kinds = pages
      .get(2)!
      .map((i) => i.kind)
      .sort();
    expect(kinds).toEqual(['field', 'field', 'gate']);
  });

  it('shows the gate until a choice is made, then only the chosen unit', () => {
    const items = pages.get(2)!;
    const none = visibleItems(items, () => undefined);
    expect(none.map((i) => i.kind)).toEqual(['gate']);

    const picked = (key: string) => (key === choiceKey('II', 0) ? ['b'] : undefined);
    const chosen = visibleItems(items, picked);
    expect(chosen.map((i) => i.key)).toEqual(['2-f1']);
  });
});
