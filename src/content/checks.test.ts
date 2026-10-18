import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { checkExam, hasErrors, partPoints } from './checks';
import type { Exam } from './schema.types';
import { validateExam } from './schema.validators.js';

const load = (id: string): Exam =>
  JSON.parse(
    readFileSync(resolve(process.cwd(), `public/demo-pack/exams/${id}/exam.json`), 'utf8'),
  ) as Exam;
const IDS = [
  'matematika-kozep-2026-majus-minta',
  'tortenelem-kozep-2026-majus-minta',
  'magyar-kozep-2026-majus-minta',
];

const messages = (exam: Exam) =>
  checkExam(exam)
    .filter((i) => i.level === 'error')
    .map((i) => i.message);

describe('demo pack', () => {
  it.each(IDS)('%s is schema-valid and has no issues', (id) => {
    const exam = load(id);
    expect(validateExam(exam), JSON.stringify(validateExam.errors)).toBe(true);
    expect(checkExam(exam)).toEqual([]);
  });
});

describe('checkExam', () => {
  it('counts only the picked tasks of a choice group', () => {
    const part = load(IDS[0]!).parts[1]!;
    expect(partPoints(part)).toBe(24);
  });

  it('detects points that do not add up', () => {
    const exam = load(IDS[0]!);
    exam.parts[0]!.tasks[0]!.maxPoints = 3;
    expect(messages(exam)).toEqual(
      expect.arrayContaining([
        'Scoring adds up to 2, but maxPoints is 3.',
        "Tasks add up to 11, but the part's maxPoints is 10.",
      ]),
    );
  });

  it('detects broken references and duplicates', () => {
    const exam = load(IDS[1]!);
    const tasks = exam.parts[0]!.tasks;
    tasks[0]!.sourceRefs = ['src-404'];
    tasks[1]!.scoring.rules![0]!.fieldIds = ['nope'];
    tasks[2]!.fields[0]!.id = tasks[2]!.fields[1]!.id;
    expect(messages(exam)).toEqual(
      expect.arrayContaining([
        'Unknown source "src-404".',
        'Rule "r1" refers to unknown field "nope".',
        `Duplicate field id "${tasks[2]!.fields[1]!.id}".`,
      ]),
    );
  });

  it('requires an answer key and essay criteria', () => {
    const exam = load(IDS[2]!);
    const essay = exam.parts[1]!.tasks[0]!;
    essay.scoring = {};
    const errors = messages(exam);
    expect(errors).toContain('No answer key: add scoring rules, steps or criteria.');
    expect(errors).toContain('Essay tasks need assessment criteria.');
  });

  it('rejects choice answers that are not options', () => {
    const exam = load(IDS[0]!);
    const rule = exam.parts[0]!.tasks[1]!.scoring.rules![0]!;
    rule.answer = { kind: 'choice', correct: ['Z'] };
    expect(messages(exam)).toContain('Rule "r1": "Z" is not an option.');
  });

  it('warns about missing coordinates and refuses "reviewed" with errors', () => {
    const exam = load(IDS[0]!);
    delete exam.parts[0]!.tasks[0]!.fields[0]!.pdfRect;
    expect(checkExam(exam)).toContainEqual(
      expect.objectContaining({
        level: 'warning',
        message: 'Field "1-f1" has no PDF coordinates.',
      }),
    );
    exam.maxPoints = 99;
    expect(hasErrors(checkExam(exam))).toBe(true);
    expect(messages(exam)).toContain('Marked as reviewed but has errors.');
  });
});

describe('task groups in choices', () => {
  it('counts a chosen group as the sum of its tasks', () => {
    const exam = load(IDS[0]!);
    const part = exam.parts[1]!;
    // Turn tasks 7 and 8 into groups of sub-tasks with the same totals.
    part.tasks = part.tasks.flatMap((task) =>
      task.id === '7' || task.id === '8'
        ? [
            {
              ...task,
              id: `${task.id}a`,
              group: task.id,
              maxPoints: 6,
              scoring: { steps: [{ id: 's1', points: 6, description: 'x' }] },
            },
            {
              ...task,
              id: `${task.id}b`,
              group: task.id,
              maxPoints: 6,
              fields: [],
              scoring: { steps: [{ id: 's1', points: 6, description: 'x' }] },
            },
          ]
        : [task],
    );
    expect(partPoints(part)).toBe(24);
    expect(messages(exam)).toEqual([]);
    part.choices![0]!.taskIds = ['7', '9'];
    expect(messages(exam)).toContain('Unknown task or group "9".');
  });
});
