import { describe, expect, it } from 'vitest';
import type { Exam, Field, Rule, Task } from '@/content/schema.types';
import { choiceKey } from '@/storage/attempts';
import { hasKeyword, runAutoCheck } from './autoCheck';
import { countedTasks, DEDUCTIONS_KEY, gradeFor, scoreExam, scoreTask } from './exam';
import { normalizeText } from './normalize';
import { numbersIn, parseNumber } from './numbers';
import { evaluateRule, expectedAnswer, parseElements, partialPoints } from './rules';

const fieldMap = (...fields: Field[]) => new Map(fields.map((f) => [f.id, f]));
const text: Field = { id: 'f1', kind: 'text' };
const run = (rule: Rule, answers: Record<string, string | string[]>, fields = fieldMap(text)) =>
  evaluateRule(rule, answers, fields);

describe('parseNumber', () => {
  it.each([
    ['7', [7]],
    ['1,5', [1.5]],
    ['1.5', [1.5]],
    ['−1,5', [-1.5]],
    ['-0,25', [-0.25]],
    ['19 260', [19260]],
    ['19\u00a0260', [19260]],
    ['19.260,5', [19260.5]],
    ['5/9', [5 / 9]],
    ['55%', [0.55, 55]],
    ['x = 6', [6]],
    ['S₆ = 13,5', [13.5]],
    ['7 cm', [7]],
    ['770 cm²', [770]],
    ['≈ 0,401', [0.401]],
    ['120 Ft', [120]],
  ])('reads %s', (raw, expected) => {
    const values = parseNumber(raw);
    expect(values).toHaveLength(expected.length);
    values.forEach((v, i) => expect(v).toBeCloseTo(expected[i]!, 9));
  });

  it.each(['', 'hét', '1/0', '1,2,3', 'x'])('rejects %j', (raw) => {
    expect(parseNumber(raw)).toEqual([]);
  });

  it('drops the field unit', () => {
    expect(parseNumber('28,27 cm³', 'cm³')).toEqual([28.27]);
  });

  it('finds numbers in working', () => {
    expect(numbersIn('221x = 1326, ezért x = 6; m ≈ 15,4 és −2')).toEqual([221, 1326, 6, 15.4, -2]);
    expect(numbersIn('10 593 fő')).toEqual([10593]);
    expect(parseNumber('12. év')).toEqual([12]);
    expect(parseNumber('2034.')).toEqual([2034]);
    expect(parseNumber('√80')[0]).toBeCloseTo(8.944, 3);
    expect(parseNumber('2√5')[0]).toBeCloseTo(4.472, 3);
    expect(parseNumber('48π')[0]).toBeCloseTo(150.796, 3);
    expect(parseNumber('V = 48 · π')[0]).toBeCloseTo(150.796, 3);
    expect(parseNumber('d = √(80) cm', 'cm')[0]).toBeCloseTo(8.944, 3);
    // Numbers on separate lines of the working are never one grouped number.
    expect(numbersIn('216\n120')).toEqual([216, 120]);
  });
});

describe('normalizeText', () => {
  it('ignores case, spaces and edge punctuation by default', () => {
    expect(normalizeText('  Poitiers. ')).toBe('poitiers');
    expect(normalizeText('Varsói   Szerződés')).toBe('varsói szerződés');
  });
  it('keeps accents unless told otherwise', () => {
    expect(normalizeText('Jeruzsalem')).not.toBe(normalizeText('Jeruzsálem'));
    expect(normalizeText('Jeruzsalem', { ignoreDiacritics: true })).toBe(
      normalizeText('Jeruzsálem', { ignoreDiacritics: true }),
    );
  });
  it('unifies dashes and quotes and can drop punctuation or spaces', () => {
    expect(normalizeText('Molotov–Ribbentrop')).toBe('molotov-ribbentrop');
    expect(normalizeText('Vaskapu-szoros', { ignorePunctuation: true })).toBe('vaskapu szoros');
    expect(normalizeText('x ↦ 2x − 17', { ignoreSpaces: true })).toBe('x↦2x-17');
  });
});

describe('evaluateRule', () => {
  it('text: any accepted variant', () => {
    const rule: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['f1'],
      answer: {
        kind: 'text',
        accepted: ['Pál', 'Szent Pál'],
        normalize: { ignoreDiacritics: true },
      },
    };
    expect(run(rule, { f1: 'szent pal' }).points).toBe(1);
    expect(run(rule, { f1: 'Péter' })).toMatchObject({
      points: 0,
      status: 'wrong',
      fields: { f1: false },
    });
    expect(run(rule, {}).status).toBe('empty');
  });

  it('number: tolerance, decimal comma, fractions and percent', () => {
    const rule: Rule = {
      id: 'r',
      points: 2,
      fieldIds: ['f1'],
      answer: { kind: 'number', accepted: [0.5556], tolerance: 0.006 },
    };
    expect(run(rule, { f1: '0,556' }).points).toBe(2);
    expect(run(rule, { f1: '5/9' }).points).toBe(2);
    expect(run(rule, { f1: '55,6%' }).points).toBe(2);
    expect(run(rule, { f1: '0,6' }).points).toBe(0);
    const exact: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['f1'],
      answer: { kind: 'number', accepted: [19260] },
    };
    expect(run(exact, { f1: '19 260 fő' }).points).toBe(1);
  });

  it('choice: single and multi with penalties', () => {
    const single: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['f1'],
      answer: { kind: 'choice', correct: ['2'] },
    };
    expect(run(single, { f1: '2' }).points).toBe(1);
    expect(run(single, { f1: '3' }).points).toBe(0);
    const multi: Rule = {
      id: 'r',
      points: 3,
      fieldIds: ['f1'],
      answer: { kind: 'choice', correct: ['f', 'h', 'i'] },
      partial: { perItem: 1, penalizeWrong: true },
    };
    expect(run(multi, { f1: ['f', 'h', 'i'] })).toMatchObject({ points: 3, status: 'correct' });
    expect(run(multi, { f1: ['f', 'h'] })).toMatchObject({ points: 2, status: 'partial' });
    expect(run(multi, { f1: ['f', 'h', 'g'] }).points).toBe(1);
    expect(run(multi, { f1: ['g', 'j'] }).points).toBe(0);
  });

  it('matching: all-or-nothing without partial, per item with it', () => {
    const order: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['a', 'b', 'c'],
      answer: { kind: 'matching', pairs: { a: 'c', b: 'b', c: 'a' } },
    };
    expect(run(order, { a: 'c', b: 'b', c: 'a' }).points).toBe(1);
    expect(run(order, { a: 'c', b: 'a', c: 'b' })).toMatchObject({
      points: 0,
      fields: { a: true, b: false },
    });
    const tf: Rule = { ...order, points: 3, partial: { perItem: 1 } };
    expect(run(tf, { a: 'c', b: 'a', c: 'a' }).points).toBe(2);
  });

  it('set: any order, distinct items, more items than fields', () => {
    const rule: Rule = {
      id: 'r',
      points: 2,
      fieldIds: ['a', 'b'],
      answer: {
        kind: 'set',
        order: 'any',
        items: [['vasút', 'gőzmozdony'], ['gőzhajó'], ['csatorna']],
      },
      partial: { perItem: 1 },
    };
    expect(run(rule, { a: 'gőzhajó', b: 'Vasút' }).points).toBe(2);
    expect(run(rule, { a: 'vasút', b: 'gőzmozdony' }).points).toBe(1);
    expect(run(rule, { a: 'gőzhajó', b: 'repülő' })).toMatchObject({
      points: 1,
      fields: { a: true, b: false },
    });
  });

  it('set: needs a full match when no partial credit is given', () => {
    const row: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['t', 'a', 'g'],
      answer: { kind: 'set', order: 'fixed', items: [['Az ajtó'], ['Szabó Magda'], ['regény']] },
    };
    expect(run(row, { t: 'az ajtó', a: 'Szabó Magda', g: 'regény' }).points).toBe(1);
    expect(run(row, { t: 'az ajtó', a: 'Szabó Magda', g: 'novella' }).points).toBe(0);
  });

  it('set: augmenting matches keep every field matched', () => {
    const rule: Rule = {
      id: 'r',
      points: 2,
      fieldIds: ['a', 'b'],
      answer: { kind: 'set', order: 'any', items: [['x', 'y'], ['x']] },
      partial: { perItem: 1 },
    };
    expect(run(rule, { a: 'y', b: 'y' }).points).toBe(1);
    expect(run(rule, { a: 'y', b: 'x' }).points).toBe(2);
    expect(run(rule, { a: 'x', b: 'y' }).points).toBe(2);
  });

  it('elements: lists in any notation, scored by errors', () => {
    const rule: Rule = {
      id: 'r',
      points: 3,
      fieldIds: ['f1'],
      answer: { kind: 'elements', elements: ['1', '2', '3', '4', '6', '12'] },
      partial: {
        errorsTable: [
          { errors: 0, points: 3 },
          { errors: 1, points: 2 },
          { errors: 3, points: 1 },
        ],
      },
    };
    expect(run(rule, { f1: '{1; 2; 3; 4; 6; 12}' }).points).toBe(3);
    expect(run(rule, { f1: '12, 6, 4, 3, 2, 1' }).points).toBe(3);
    expect(run(rule, { f1: '1 2 3 4 6' }).points).toBe(2);
    expect(run(rule, { f1: '1; 2; 3; 4; 5' }).points).toBe(1);
    expect(run(rule, { f1: '1; 2' }).points).toBe(0);
    const set: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['f1'],
      answer: { kind: 'elements', elements: ['1', '2', '5', '6'] },
    };
    expect(run(set, { f1: 'B = {1; 2; 5; 6}' }).points).toBe(1);
  });

  it('shows the accepted answer', () => {
    const choice: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['f1'],
      answer: { kind: 'choice', correct: ['2'] },
    };
    const field: Field = {
      id: 'f1',
      kind: 'choice',
      options: [
        { value: '1', label: 'egy' },
        { value: '2', label: 'kettő' },
      ],
    };
    expect(expectedAnswer(choice, fieldMap(field))).toBe('2) kettő');
    const num: Rule = {
      id: 'r',
      points: 1,
      fieldIds: ['f1'],
      answer: { kind: 'number', accepted: [1.5] },
    };
    expect(expectedAnswer(num, fieldMap({ id: 'f1', kind: 'number', unit: 'cm' }))).toBe('1,5 cm');
  });
});

describe('partial credit', () => {
  const counts = { correct: 2, wrong: 0, errors: 1, total: 3 };
  it('threshold table', () => {
    expect(partialPoints(2, { table: [{ correct: 2, points: 1 }] }, counts)).toBe(1);
    expect(
      partialPoints(
        2,
        { table: [{ correct: 2, points: 1 }] },
        { ...counts, correct: 3, errors: 0 },
      ),
    ).toBe(2);
  });
  it('never below zero or above the rule', () => {
    expect(
      partialPoints(
        2,
        { perItem: 1, penalizeWrong: true },
        { correct: 0, wrong: 3, errors: 6, total: 3 },
      ),
    ).toBe(0);
    expect(partialPoints(2, { perItem: 1 }, { correct: 3, wrong: 0, errors: 0, total: 3 })).toBe(2);
  });
  it('parses element lists', () => {
    expect(parseElements('A = {1; 2; 3; 4}')).toEqual(['1', '2', '3', '4']);
  });
});

describe('automatic step checks', () => {
  it('matches word beginnings without accents', () => {
    expect(hasKeyword('A törökök elleni harc elhanyagolása', 'török')).toBe(true);
    expect(hasKeyword('A TOROK veszély', 'török')).toBe(true);
    expect(hasKeyword('Nagytörök', 'török')).toBe(false);
    expect(hasKeyword('a török elleni harcok', 'török elleni')).toBe(true);
  });

  it('keeps maths symbols as word breaks', () => {
    expect(hasKeyword('425 = 95·q¹², q', 'q¹²')).toBe(true);
  });

  it('matches numbers at the keyword precision', () => {
    expect(hasKeyword('m = 15,39 cm', '15,4')).toBe(true);
    expect(hasKeyword('221x = 1326', '1326')).toBe(true);
    expect(hasKeyword('13 260', '1326')).toBe(false);
  });

  it('needs every keyword group of an alternative', () => {
    const check = { fieldIds: ['a'], alternatives: [[['tudás'], ['nemzedék', 'utókor', 'halál']]] };
    expect(
      runAutoCheck(check, { a: 'A tudás nem száll a sírba a halál után' }, new Set()).met,
    ).toBe(true);
    expect(runAutoCheck(check, { a: 'A tudás fontos' }, new Set()).met).toBe(false);
    expect(runAutoCheck(check, {}, new Set())).toMatchObject({ met: false, empty: true });
  });

  it('distinct steps need different alternatives', () => {
    const task: Task = {
      id: 't',
      number: '5.',
      type: 'short_answer',
      text: '…',
      maxPoints: 2,
      fields: [
        { id: 'a', kind: 'text' },
        { id: 'b', kind: 'text' },
      ],
      scoring: {
        steps: ['a', 'b'].map((id, i) => ({
          id: `s${i}`,
          points: 1,
          description: '…',
          auto: {
            fieldIds: [id],
            distinct: 'reasons',
            alternatives: [[['hosszas', 'sokáig']], [['munka']]],
          },
        })),
      },
    };
    expect(scoreTask(task, { a: 'sokáig tartott', b: 'sok munka volt' }).points).toBe(2);
    expect(scoreTask(task, { a: 'sokáig tartott', b: 'hosszas volt' }).points).toBe(1);
  });

  it('reads several fields together', () => {
    const check = { fieldIds: ['name', 'role'], alternatives: [[['arész'], ['háború']]] };
    expect(runAutoCheck(check, { name: 'Arész', role: 'a háború istene' }, new Set()).met).toBe(
      true,
    );
    expect(runAutoCheck(check, { name: 'Arész', role: 'a tenger istene' }, new Set()).met).toBe(
      false,
    );
  });

  it('can require every field and quotation marks', () => {
    const check = {
      fieldIds: ['a', 'b'],
      allFields: true,
      requireQuotes: true,
      alternatives: [[['hosszas']], [['rengeteg munkát']]],
    };
    const quoted = { a: '„a másolási procedúra hosszas volt”', b: '"rengeteg munkát igényelt"' };
    expect(runAutoCheck(check, quoted, new Set()).met).toBe(true);
    expect(runAutoCheck(check, { ...quoted, b: 'rengeteg munkát igényelt' }, new Set()).met).toBe(
      false,
    );
    expect(
      runAutoCheck({ ...check, requireQuotes: false }, { a: 'hosszas', b: 'hosszas' }, new Set())
        .met,
    ).toBe(false);
  });
});

const task = (id: string, extra: Partial<Task> = {}): Task => ({
  id,
  number: `${id}.`,
  type: 'short_answer',
  text: '…',
  maxPoints: 2,
  fields: [{ id: `${id}-f1`, kind: 'number' }],
  scoring: {
    rules: [
      { id: 'r1', points: 2, fieldIds: [`${id}-f1`], answer: { kind: 'number', accepted: [1] } },
    ],
  },
  ...extra,
});

const essay = (id: string): Task => ({
  id,
  number: `${id}.`,
  type: 'essay',
  text: '…',
  maxPoints: 10,
  fields: [{ id: `${id}-f1`, kind: 'essay' }],
  scoring: {
    criteria: [
      { id: 'c1', label: 'Tartalom', maxPoints: 6 },
      { id: 'c2', label: 'Nyelv', maxPoints: 4 },
    ],
  },
});

const exam = {
  schemaVersion: 1,
  id: 'x',
  subject: 'tortenelem',
  level: 'kozep',
  year: 2024,
  session: 'majus',
  title: 'X',
  maxPoints: 22,
  timeLimitMinutes: 60,
  parts: [
    { id: 'I', title: 'I.', maxPoints: 2, tasks: [task('1')] },
    {
      id: 'II',
      title: 'II.',
      maxPoints: 20,
      choices: [{ pick: 1, taskIds: ['a', 'b'] }],
      tasks: [
        { ...essay('13'), group: 'a' },
        { ...essay('16'), group: 'a' },
        { ...essay('14'), group: 'b' },
        { ...essay('15'), group: 'b' },
      ],
    },
  ],
  deductions: [{ id: 'spelling', label: 'Helyesírás', maxPoints: 8 }],
} as unknown as Exam;

describe('scoreExam', () => {
  it('counts the chosen unit, falling back to the answered one', () => {
    const part = exam.parts[1]!;
    expect([...countedTasks(part, { [choiceKey('II', 0)]: ['b'] }).ids]).toEqual(['14', '15']);
    const fallback = countedTasks(part, { '15-f1': 'szöveg' });
    expect([...fallback.ids]).toEqual(['14', '15']);
    expect(fallback.missing).toEqual([0]);
  });

  it('keeps essays pending until reviewed, empty ones need no review', () => {
    const answers = {
      '1-f1': '1',
      [choiceKey('II', 0)]: ['a'],
      '13-f1': 'esszé',
      '16-f1': 'esszé',
    };
    const pending = scoreExam(exam, answers);
    expect(pending).toMatchObject({ points: 2, autoPoints: 2, pendingPoints: 20, complete: false });

    const reviewed = scoreExam(exam, answers, {
      '13': { c1: 5, c2: 3 },
      '16': { c1: 6, c2: 4 },
      [DEDUCTIONS_KEY]: { spelling: 2 },
    });
    expect(reviewed).toMatchObject({
      points: 18,
      reviewedPoints: 18,
      pendingPoints: 0,
      complete: true,
    });
    expect(reviewed.percent).toBeCloseTo((18 / 22) * 100);

    const empty = scoreExam(
      exam,
      { '1-f1': '1', [choiceKey('II', 0)]: ['a'] },
      { [DEDUCTIONS_KEY]: { spelling: 0 } },
    );
    expect(empty).toMatchObject({ pendingPoints: 0, complete: true, points: 2 });
  });

  it('lets a reviewer override an automatic step', () => {
    const t = task('9', {
      fields: [{ id: '9-f1', kind: 'text' }],
      scoring: {
        steps: [
          {
            id: 's1',
            points: 2,
            description: '…',
            auto: { fieldIds: ['9-f1'], alternatives: [[['török']]] },
          },
        ],
      },
    });
    const missed = scoreTask(t, { '9-f1': 'az oszmán veszély' });
    expect(missed.items[0]).toMatchObject({ points: 0, source: 'auto', autoMissed: true });
    expect(missed.status).toBe('wrong');
    const overridden = scoreTask(t, { '9-f1': 'az oszmán veszély' }, { s1: 2 });
    expect(overridden).toMatchObject({ points: 2, reviewedPoints: 2, autoPoints: 0 });
    expect(overridden.items[0]!.source).toBe('override');
  });

  it('grades by the középszint thresholds', () => {
    expect(gradeFor(80).grade).toBe(5);
    expect(gradeFor(79.9).grade).toBe(4);
    expect(gradeFor(40).grade).toBe(3);
    expect(gradeFor(25).grade).toBe(2);
    expect(gradeFor(24).grade).toBe(1);
  });
});
