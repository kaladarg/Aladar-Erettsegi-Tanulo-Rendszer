import type { AttemptRow } from '@/storage/db';
import { latestPerExam, scoredAttempts } from './stats/stats';

/**
 * Estimated university admission points (felvételi pontszám, alap- és
 * osztatlan képzés). The rules change: check them every autumn against
 * felvi.hu (https://www.felvi.hu/felveteli/pontszamitas) and update
 * RULES_YEAR and RULES_CHECKED.
 *
 * - Tanulmányi pontok (max 200): the year-end grades of five subjects in the
 *   last two school years, summed and doubled (max 100), plus the average of
 *   the five érettségi percentages (max 100). The exam level does not matter
 *   for the average.
 * - Érettségi pontok (max 200): two subjects set by the programme. Emelt
 *   szint counts 1:1, középszint is converted at 2/3 (100% = 67 points).
 * - The better of tanulmányi + érettségi pontok and twice the érettségi
 *   pontok, plus at most 100 intézményi pontok set by the programme.
 *
 * Sources: ELTE GTK, Pontszámítás 2026 (https://gtk.elte.hu/pontszamitas2026);
 * Pénzcentrum, Felvételi pontszámítás 2026 (2026. 02. 01.).
 */
export const RULES_YEAR = 2026;
export const RULES_CHECKED = '2026-10-22';

export const ADMISSION_SLOTS = [
  'magyar',
  'matematika',
  'tortenelem',
  'nyelv',
  'valasztott',
] as const;
export type AdmissionSlot = (typeof ADMISSION_SLOTS)[number];

export type ExamLevel = 'kozep' | 'emelt';

export interface AdmissionExam {
  /** Érettségi result in percent (0–100), or null when not known yet. */
  percent: number | null;
  level: ExamLevel;
}

export interface AdmissionInputs {
  /** Year-end grades: [last but one year, last year]. Magyar may be a half (average of two grades). */
  grades: Record<AdmissionSlot, [number | null, number | null]>;
  exams: Record<AdmissionSlot, AdmissionExam>;
  /** The two subjects whose results give the érettségi pontok. */
  pointSlots: [AdmissionSlot, AdmissionSlot];
  /** Intézményi pontok from the programme's page (0–100). */
  institutional: number;
  /** Which foreign language and elective subject (subject ids), to fill in from practice. */
  languageSubject: string;
  electiveSubject: string;
}

export const DEFAULT_ADMISSION: AdmissionInputs = {
  grades: Object.fromEntries(
    ADMISSION_SLOTS.map((s) => [s, [null, null]]),
  ) as AdmissionInputs['grades'],
  exams: Object.fromEntries(
    ADMISSION_SLOTS.map((s) => [s, { percent: null, level: 'kozep' }]),
  ) as AdmissionInputs['exams'],
  pointSlots: ['matematika', 'tortenelem'],
  institutional: 0,
  languageSubject: 'angol',
  electiveSubject: '',
};

/** Érettségi pontok of one exam: emelt szint 1:1, középszint 2/3 rounded (felvi table). */
export function examPoints(percent: number, level: ExamLevel): number {
  const p = clamp(Math.round(percent), 0, 100);
  return level === 'emelt' ? p : Math.round((p * 2) / 3);
}

export interface AdmissionResult {
  /** Grades part of the tanulmányi pontok (max 100), null if a grade is missing. */
  gradePoints: number | null;
  /** Érettségi average part of the tanulmányi pontok (max 100), null if a result is missing. */
  averagePoints: number | null;
  studyPoints: number | null;
  /** Érettségi pontok (max 200), null if one of the two results is missing. */
  examPoints: number | null;
  /** Tanulmányi + érettségi pontok. */
  regular: number | null;
  /** Twice the érettségi pontok. */
  doubled: number | null;
  /** The better of the two, or null when neither can be counted. */
  base: number | null;
  method: 'regular' | 'doubled' | null;
  institutional: number;
  total: number | null;
}

export function admissionPoints(input: AdmissionInputs): AdmissionResult {
  const grades = ADMISSION_SLOTS.flatMap((slot) => input.grades[slot]);
  const gradePoints = grades.every((g): g is number => g !== null)
    ? Math.min(100, round1(grades.reduce((sum, g) => sum + g, 0) * 2))
    : null;
  const percents = ADMISSION_SLOTS.map((slot) => input.exams[slot].percent);
  const averagePoints = percents.every((p): p is number => p !== null)
    ? Math.round(percents.reduce((sum, p) => sum + clamp(p, 0, 100), 0) / percents.length)
    : null;
  const studyPoints =
    gradePoints !== null && averagePoints !== null ? gradePoints + averagePoints : null;

  const counted = input.pointSlots.map((slot) => input.exams[slot]);
  const examTotal = counted.every((e) => e.percent !== null)
    ? counted.reduce((sum, e) => sum + examPoints(e.percent!, e.level), 0)
    : null;

  const regular = studyPoints !== null && examTotal !== null ? studyPoints + examTotal : null;
  const doubled = examTotal !== null ? examTotal * 2 : null;
  const method =
    doubled === null ? null : regular !== null && regular >= doubled ? 'regular' : 'doubled';
  const base = method === 'regular' ? regular : method === 'doubled' ? doubled : null;
  const institutional = clamp(Math.round(input.institutional) || 0, 0, 100);
  return {
    gradePoints,
    averagePoints,
    studyPoints,
    examPoints: examTotal,
    regular,
    doubled,
    base,
    method,
    institutional,
    total: base === null ? null : base + institutional,
  };
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const round1 = (value: number) => Math.round(value * 10) / 10;

const grade = (value: unknown, halves: boolean): number | null => {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  const step = halves ? Math.round(value * 2) / 2 : Math.round(value);
  return step >= 1 && step <= 5 ? step : null;
};

const isSlot = (value: unknown): value is AdmissionSlot =>
  (ADMISSION_SLOTS as readonly unknown[]).includes(value);

/** Coerces stored or imported data into valid inputs. */
export function sanitizeAdmission(input: unknown): AdmissionInputs | null {
  if (typeof input !== 'object' || input === null) return null;
  const raw = input as Record<string, unknown>;
  const rawGrades = (typeof raw.grades === 'object' && raw.grades) || {};
  const rawExams = (typeof raw.exams === 'object' && raw.exams) || {};
  const grades = {} as AdmissionInputs['grades'];
  const exams = {} as AdmissionInputs['exams'];
  for (const slot of ADMISSION_SLOTS) {
    const pair = (rawGrades as Record<string, unknown>)[slot];
    const list = Array.isArray(pair) ? pair : [];
    grades[slot] = [grade(list[0], slot === 'magyar'), grade(list[1], slot === 'magyar')];
    const exam = (rawExams as Record<string, unknown>)[slot] as Record<string, unknown> | undefined;
    const percent = exam?.percent;
    exams[slot] = {
      percent:
        typeof percent === 'number' && Number.isFinite(percent)
          ? clamp(Math.round(percent), 0, 100)
          : null,
      level: exam?.level === 'emelt' ? 'emelt' : 'kozep',
    };
  }
  const slots = Array.isArray(raw.pointSlots) ? raw.pointSlots : [];
  const first = isSlot(slots[0]) ? slots[0] : DEFAULT_ADMISSION.pointSlots[0];
  const second =
    isSlot(slots[1]) && slots[1] !== first
      ? slots[1]
      : (ADMISSION_SLOTS.find((s) => s !== first) as AdmissionSlot);
  return {
    grades,
    exams,
    pointSlots: [first, second],
    institutional:
      typeof raw.institutional === 'number' && Number.isFinite(raw.institutional)
        ? clamp(Math.round(raw.institutional), 0, 100)
        : 0,
    languageSubject: typeof raw.languageSubject === 'string' ? raw.languageSubject : 'angol',
    electiveSubject: typeof raw.electiveSubject === 'string' ? raw.electiveSubject : '',
  };
}

export interface PracticeEstimate {
  /** Average percent of the newest fully marked papers. */
  percent: number;
  /** How many papers the average is based on. */
  papers: number;
}

/**
 * The student's level in a subject from practice: the average of the newest
 * fully marked paper of up to three different papers. It covers the written
 * exam only.
 */
export function practiceEstimate(attempts: AttemptRow[], subject: string): PracticeEstimate | null {
  const recent = latestPerExam(scoredAttempts(attempts, subject))
    .filter((a) => !a.result.pendingPoints)
    .sort((a, b) => b.submittedAt - a.submittedAt)
    .slice(0, 3);
  if (recent.length === 0) return null;
  const sum = recent.reduce((total, a) => total + (a.result.points / a.result.maxPoints) * 100, 0);
  return { percent: Math.round(sum / recent.length), papers: recent.length };
}
