import { partExamMax, scalePoints, unitTasks } from '@/content/checks';
import type { Criterion, Exam, Field, GradeBand, Part, Task } from '@/content/schema.types';
import { choiceKey, type Answers } from '@/storage/attempts';
import { runAutoCheck } from './autoCheck';
import { evaluateRule, isBlank, type ResultStatus, type RuleResult } from './rules';

/** Points the student (or a teacher) gave per step/criterion id, keyed by task id. */
export type Reviews = Record<string, Record<string, number>>;

/** Review key of the paper-wide deductions (spelling, handwriting). */
export const DEDUCTIONS_KEY = '__deductions';

/**
 * A marking-scheme item outside the automatic rules:
 * - `auto`: checked automatically (keywords, numbers); can be overridden;
 * - `review`: needs a reader (working, essays);
 * - `override`: an automatic result changed by the reviewer.
 */
export interface ItemResult {
  kind: 'step' | 'criterion';
  id: string;
  label: string;
  maxPoints: number;
  /** null while waiting for review. */
  points: number | null;
  source: 'auto' | 'review' | 'override';
  /** The automatic check found nothing to accept (wording may still be fine). */
  autoMissed?: boolean;
}

export type TaskStatus = ResultStatus | 'pending';

export interface TaskResult {
  task: Task;
  /** False for tasks of an alternative the student did not choose. */
  counted: boolean;
  maxPoints: number;
  points: number;
  autoPoints: number;
  reviewedPoints: number;
  /** Points still waiting for review. */
  pendingPoints: number;
  rules: RuleResult[];
  items: ItemResult[];
  status: TaskStatus;
}

export interface PartResult {
  part: Part;
  /** Task points (feladatpont). */
  maxPoints: number;
  points: number;
  /** What the part adds to the exam total: exam points (vizsgapont) when it has a scale. */
  examMaxPoints: number;
  examPoints: number;
  pendingPoints: number;
  tasks: TaskResult[];
  /** Choice groups where the student marked fewer units than required. */
  missingChoices: number[];
}

export interface DeductionResult {
  criterion: Criterion;
  points: number | null;
}

export interface ExamResult {
  maxPoints: number;
  /** Total after deductions, never below zero. */
  points: number;
  autoPoints: number;
  reviewedPoints: number;
  pendingPoints: number;
  deductions: DeductionResult[];
  percent: number;
  grade: GradeBand;
  /** Nothing is waiting for review. */
  complete: boolean;
  parts: PartResult[];
}

/** Középszint thresholds (100/1997. Korm. rendelet), used when a paper gives none. */
export const DEFAULT_GRADE_BANDS: GradeBand[] = [
  { minPercent: 80, grade: 5, label: 'jeles' },
  { minPercent: 60, grade: 4, label: 'jó' },
  { minPercent: 40, grade: 3, label: 'közepes' },
  { minPercent: 25, grade: 2, label: 'elégséges' },
  { minPercent: 0, grade: 1, label: 'elégtelen' },
];

export function gradeFor(percent: number, bands: GradeBand[] = DEFAULT_GRADE_BANDS): GradeBand {
  const sorted = [...bands].sort((a, b) => b.minPercent - a.minPercent);
  return sorted.find((band) => percent >= band.minPercent - 1e-9) ?? sorted[sorted.length - 1]!;
}

const answered = (task: Task, answers: Answers) =>
  task.fields.some((field) => !isBlank(answers[field.id]));

/**
 * Task ids that count in a part. For each choice group the student's marked
 * units count; if fewer are marked, the first answered units fill up the
 * gap in paper order, then the first units overall.
 */
export function countedTasks(
  part: Part,
  answers: Answers,
): { ids: Set<string>; missing: number[] } {
  const optional = new Set<string>();
  const ids = new Set<string>();
  const missing: number[] = [];
  (part.choices ?? []).forEach((choice, index) => {
    choice.taskIds.forEach((unit) => unitTasks(part, unit).forEach((t) => optional.add(t.id)));
    const value = answers[choiceKey(part.id, index)];
    const picked = (Array.isArray(value) ? value : value ? [value] : []).filter((u) =>
      choice.taskIds.includes(u),
    );
    const units = picked.slice(0, choice.pick);
    if (units.length < choice.pick) {
      missing.push(index);
      const rest = choice.taskIds.filter((u) => !units.includes(u));
      const byAnswer = rest.filter((u) => unitTasks(part, u).some((t) => answered(t, answers)));
      for (const unit of [...byAnswer, ...rest.filter((u) => !byAnswer.includes(u))]) {
        if (units.length >= choice.pick) break;
        units.push(unit);
      }
    }
    units.forEach((unit) => unitTasks(part, unit).forEach((t) => ids.add(t.id)));
  });
  part.tasks.forEach((task) => !optional.has(task.id) && ids.add(task.id));
  return { ids, missing };
}

function itemFor(
  points: number | undefined,
  base: Omit<ItemResult, 'points' | 'source'>,
): ItemResult {
  return points === undefined
    ? { ...base, points: null, source: 'review' }
    : { ...base, points: Math.max(0, Math.min(base.maxPoints, points)), source: 'review' };
}

export function scoreTask(
  task: Task,
  answers: Answers,
  reviews: Record<string, number> = {},
  counted = true,
): TaskResult {
  const fields = new Map<string, Field>(task.fields.map((f) => [f.id, f]));
  const { rules = [], steps = [], criteria = [] } = task.scoring;
  const ruleResults = rules.map((rule) => evaluateRule(rule, answers, fields));
  const taken = new Map<string, Set<number>>();
  const items: ItemResult[] = [];

  for (const step of steps) {
    const base = {
      kind: 'step' as const,
      id: step.id,
      label: step.description,
      maxPoints: step.points,
    };
    const override = reviews[step.id];
    if (!step.auto) {
      items.push(itemFor(override, base));
      continue;
    }
    const key = step.auto.distinct ?? `#${step.id}`;
    const used = taken.get(key) ?? new Set<number>();
    taken.set(key, used);
    const check = runAutoCheck(step.auto, answers, used);
    check.used.forEach((index) => used.add(index));
    const autoPoints = check.met ? step.points : 0;
    if (override !== undefined && override !== autoPoints) {
      items.push({
        ...base,
        points: Math.max(0, Math.min(step.points, override)),
        source: 'override',
      });
    } else {
      items.push({
        ...base,
        points: autoPoints,
        source: 'auto',
        autoMissed: !check.met && !check.empty,
      });
    }
  }
  for (const criterion of criteria) {
    items.push(
      itemFor(reviews[criterion.id], {
        kind: 'criterion',
        id: criterion.id,
        label: criterion.label,
        maxPoints: criterion.maxPoints,
      }),
    );
  }

  // An empty essay is worth nothing; it needs no review.
  const empty = task.fields.every((f) => isBlank(answers[f.id]));
  if (empty) {
    for (const item of items) {
      if (item.points === null) item.points = 0;
    }
  }

  const autoPoints =
    ruleResults.reduce((sum, r) => sum + r.points, 0) +
    items.filter((i) => i.source === 'auto').reduce((sum, i) => sum + (i.points ?? 0), 0);
  const reviewedPoints = items
    .filter((i) => i.source !== 'auto')
    .reduce((sum, i) => sum + (i.points ?? 0), 0);
  const pendingPoints = items
    .filter((i) => i.points === null)
    .reduce((sum, i) => sum + i.maxPoints, 0);
  const points = autoPoints + reviewedPoints;
  const status: TaskStatus = empty
    ? 'empty'
    : pendingPoints > 0
      ? 'pending'
      : points >= task.maxPoints
        ? 'correct'
        : points > 0
          ? 'partial'
          : 'wrong';

  return {
    task,
    counted,
    maxPoints: task.maxPoints,
    points,
    autoPoints,
    reviewedPoints,
    pendingPoints,
    rules: ruleResults,
    items,
    status,
  };
}

export function scoreExam(exam: Exam, answers: Answers, reviews: Reviews = {}): ExamResult {
  const parts: PartResult[] = exam.parts.map((part) => {
    const { ids, missing } = countedTasks(part, answers);
    const tasks = part.tasks.map((task) =>
      scoreTask(task, answers, reviews[task.id], ids.has(task.id)),
    );
    const counted = tasks.filter((t) => t.counted);
    const points = counted.reduce((sum, t) => sum + t.points, 0);
    return {
      part,
      maxPoints: counted.reduce((sum, t) => sum + t.maxPoints, 0),
      points,
      examMaxPoints: partExamMax(part),
      examPoints: part.scale ? scalePoints(part.scale, points) : points,
      pendingPoints: counted.reduce((sum, t) => sum + t.pendingPoints, 0),
      tasks,
      missingChoices: missing,
    };
  });

  const deductionReviews = reviews[DEDUCTIONS_KEY] ?? {};
  const anyAnswer = Object.entries(answers).some(
    ([key, value]) => !key.startsWith('__') && !isBlank(value),
  );
  const deductions = (exam.deductions ?? []).map((criterion) => {
    const value = deductionReviews[criterion.id];
    return {
      criterion,
      points:
        value !== undefined
          ? Math.max(0, Math.min(criterion.maxPoints, value))
          : anyAnswer
            ? null
            : 0,
    };
  });

  const sum = (pick: (t: TaskResult) => number) =>
    parts.flatMap((p) => p.tasks.filter((t) => t.counted)).reduce((s, t) => s + pick(t), 0);
  const deducted = deductions.reduce((s, d) => s + (d.points ?? 0), 0);
  const raw = parts.reduce((s, p) => s + p.examPoints, 0);
  const points = Math.max(0, raw - deducted);
  const pendingPoints = sum((t) => t.pendingPoints);
  const maxPoints = exam.maxPoints;
  const percent = maxPoints > 0 ? (points / maxPoints) * 100 : 0;

  return {
    maxPoints,
    points,
    autoPoints: sum((t) => t.autoPoints),
    reviewedPoints: sum((t) => t.reviewedPoints),
    pendingPoints,
    deductions,
    percent,
    grade: gradeFor(percent, exam.gradeBands),
    complete: pendingPoints === 0 && deductions.every((d) => d.points !== null),
    parts,
  };
}
