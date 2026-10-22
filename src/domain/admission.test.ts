import { describe, expect, it } from 'vitest';
import {
  admissionPoints,
  DEFAULT_ADMISSION,
  examPoints,
  practiceEstimate,
  sanitizeAdmission,
  type AdmissionInputs,
} from './admission';

describe('examPoints', () => {
  it('counts emelt szint 1:1 and converts középszint at 2/3 like the felvi table', () => {
    expect(examPoints(82, 'emelt')).toBe(82);
    // Rows of the official conversion table (ELTE GTK, Pontszámítás 2026).
    const table: [number, number][] = [
      [25, 17],
      [26, 17],
      [27, 18],
      [28, 19],
      [29, 19],
      [43, 29],
      [44, 29],
      [49, 33],
      [50, 33],
      [64, 43],
      [65, 43],
      [67, 45],
      [68, 45],
      [72, 48],
      [87, 58],
      [90, 60],
      [99, 66],
      [100, 67],
    ];
    for (const [percent, points] of table) expect(examPoints(percent, 'kozep')).toBe(points);
  });
});

const filled = (): AdmissionInputs => ({
  ...DEFAULT_ADMISSION,
  grades: {
    magyar: [4.5, 4],
    matematika: [5, 5],
    tortenelem: [4, 4],
    nyelv: [5, 5],
    valasztott: [4, 5],
  },
  exams: {
    magyar: { percent: 70, level: 'kozep' },
    matematika: { percent: 80, level: 'emelt' },
    tortenelem: { percent: 60, level: 'kozep' },
    nyelv: { percent: 90, level: 'kozep' },
    valasztott: { percent: 75, level: 'kozep' },
  },
  pointSlots: ['matematika', 'tortenelem'],
  institutional: 28,
});

describe('admissionPoints', () => {
  it('adds grades, the érettségi average and the érettségi pontok', () => {
    const result = admissionPoints(filled());
    // Grades: 45.5 · 2 = 91; average of 70, 80, 60, 90, 75 = 75.
    expect(result.gradePoints).toBe(91);
    expect(result.averagePoints).toBe(75);
    expect(result.studyPoints).toBe(166);
    // Matematika emelt 80 + történelem közép 60 → 40.
    expect(result.examPoints).toBe(120);
    expect(result.regular).toBe(286);
    expect(result.doubled).toBe(240);
    expect(result.method).toBe('regular');
    expect(result.total).toBe(314);
  });

  it('uses doubling when it is better, and caps intézményi pontok at 100', () => {
    const input = filled();
    input.grades.matematika = [2, 2];
    input.exams.tortenelem = { percent: 95, level: 'emelt' };
    input.exams.matematika = { percent: 95, level: 'emelt' };
    input.institutional = 250;
    const result = admissionPoints(input);
    expect(result.doubled).toBe(380);
    expect(result.method).toBe('doubled');
    expect(result.total).toBe(480);
  });

  it('can still double when grades are missing, and gives nothing without the two results', () => {
    const input = { ...filled(), grades: DEFAULT_ADMISSION.grades };
    expect(admissionPoints(input)).toMatchObject({ regular: null, doubled: 240, total: 268 });
    expect(admissionPoints(DEFAULT_ADMISSION).total).toBeNull();
  });
});

describe('sanitizeAdmission', () => {
  it('keeps valid input and repairs the rest', () => {
    expect(sanitizeAdmission(filled())).toEqual(filled());
    expect(sanitizeAdmission(null)).toBeNull();
    const repaired = sanitizeAdmission({
      grades: { magyar: [4.4, 7], matematika: 'x' },
      exams: { nyelv: { percent: 140, level: 'emelt' } },
      pointSlots: ['nyelv', 'nyelv'],
      institutional: -5,
    })!;
    expect(repaired.grades.magyar).toEqual([4.5, null]);
    expect(repaired.grades.matematika).toEqual([null, null]);
    expect(repaired.exams.nyelv).toEqual({ percent: 100, level: 'emelt' });
    expect(repaired.pointSlots).toEqual(['nyelv', 'magyar']);
    expect(repaired.institutional).toBe(0);
  });
});

describe('practiceEstimate', () => {
  const attempt = (id: string, examId: string, at: number, points: number, pending = 0) =>
    ({
      id,
      examId,
      mode: 'practice',
      startedAt: at,
      updatedAt: at,
      submittedAt: at,
      partSeconds: {},
      result: { points, maxPoints: 100, pendingPoints: pending, subject: 'matematika' },
    }) as const;

  it('averages the newest marked result of up to three papers', () => {
    const attempts = [
      attempt('a', 'matematika-1', 1, 40),
      attempt('b', 'matematika-1', 5, 70),
      attempt('c', 'matematika-2', 2, 60),
      attempt('d', 'matematika-3', 3, 81),
      attempt('e', 'matematika-4', 4, 90, 10),
      attempt('f', 'matematika-5', 0, 10),
    ];
    // matematika-1 (70), -3 (81), -2 (60); -4 waits for review.
    expect(practiceEstimate(attempts, 'matematika')).toEqual({ percent: 70, papers: 3 });
    expect(practiceEstimate(attempts, 'tortenelem')).toBeNull();
  });
});
