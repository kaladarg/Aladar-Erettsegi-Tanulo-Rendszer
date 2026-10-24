import { describe, expect, it } from 'vitest';
import type { Exam } from '@/content/schema.types';
import type { ExamResult } from '@/domain/scoring/exam';
import { cardContent, examLink } from './resultCard';

const exam = {
  id: 'matematika-kozep-2024-majus',
  subject: 'matematika',
  level: 'kozep',
  year: 2024,
  session: 'majus',
  title: 'Matematika középszint',
} as unknown as Exam;

const result = (complete: boolean) =>
  ({
    points: 72,
    maxPoints: 100,
    percent: 72,
    complete,
    grade: { minPercent: 60, grade: 4, label: 'jó' },
  }) as ExamResult;

describe('result card', () => {
  it("names the paper's own level once", () => {
    const emelt = { ...exam, level: 'emelt' } as typeof exam;
    const content = cardContent(emelt, result(true), 'exam', new Date(2026, 9, 18).getTime());
    expect(content.subject).toBe('Matematika · Emelt szint');
    expect(content.exam).toBe('2024. május');
  });

  it('shows the paper and the result only', () => {
    const content = cardContent(exam, result(true), 'exam', new Date(2026, 9, 18).getTime());
    expect(content).toEqual({
      subject: 'Matematika · Középszint',
      exam: '2024. május',
      percent: '72%',
      grade: 'Becsült jegy: jó (4)',
      points: '72 / 100 pont',
      meta: expect.stringContaining('2026. október 18.'),
    });
  });

  it('gives no grade while marking is unfinished', () => {
    expect(cardContent(exam, result(false), 'practice', 0).grade).toBeNull();
  });

  it('links to the paper page without attempt data', () => {
    expect(examLink(exam.id)).toMatch(/\/feladatsorok\/matematika-kozep-2024-majus$/);
  });
});
