import { describe, expect, it } from 'vitest';
import { checklistScore, oralChecklist, outlinePoints } from './oralChecklist';

describe('oral checklist', () => {
  it('keeps real outline points and drops headings, bullets and repeats', () => {
    expect(
      outlinePoints('Fő pontok:\n- Mohács, 1526\n2) A három részre szakadás\n\n• Mohács, 1526'),
    ).toEqual(['Mohács, 1526', 'A három részre szakadás']);
  });

  it('uses the points of the subject and adds the outline', () => {
    const history = oralChecklist('tortenelem', 'Mohács, 1526');
    expect(history.map((i) => i.key)).toContain('sources');
    expect(history.at(-1)).toEqual({ key: 'vazlat:Mohács, 1526', label: { text: 'Mohács, 1526' } });
    expect(oralChecklist('angol', '').map((i) => i.key)).toContain('linkers');
    expect(oralChecklist('magyar', '').map((i) => i.key)).toContain('works');
  });

  it('counts the ticked items', () => {
    const items = oralChecklist('nemet', '');
    expect(checklistScore(items, { linkers: true, time: true, gone: true })).toEqual({
      done: 2,
      total: items.length,
    });
    expect(checklistScore(items, undefined).done).toBe(0);
  });
});
