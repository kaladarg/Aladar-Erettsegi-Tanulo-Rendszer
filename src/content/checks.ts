import type { Exam, Part, Task } from './schema.types';

/**
 * Consistency checks that JSON Schema cannot express. Shared by the review
 * tool (maintainer-facing report) and the app's content loader (which refuses
 * exams with errors). Messages are for maintainers, so they are in English.
 */
export interface ContentIssue {
  level: 'error' | 'warning';
  path: string;
  message: string;
}

const EPSILON = 1e-6;
const same = (a: number, b: number) => Math.abs(a - b) < EPSILON;

export function scoringPoints(task: Task): number {
  const { rules = [], steps = [], criteria = [] } = task.scoring;
  return (
    rules.reduce((sum, rule) => sum + rule.points, 0) +
    steps.reduce((sum, step) => sum + step.points, 0) +
    criteria.reduce((sum, criterion) => sum + criterion.maxPoints, 0)
  );
}

/** Tasks that make up a choice unit: the task with that id, or every task of that group. */
export function unitTasks(part: Part, unit: string): Task[] {
  const byId = part.tasks.filter((task) => task.id === unit);
  return byId.length > 0 ? byId : part.tasks.filter((task) => task.group === unit);
}

/** Points a part is worth, counting only `pick` units of each choice group. */
export function partPoints(part: Part): number {
  const chosen = new Set(
    part.choices?.flatMap((choice) =>
      choice.taskIds.flatMap((unit) => unitTasks(part, unit).map((t) => t.id)),
    ) ?? [],
  );
  const fixed = part.tasks
    .filter((task) => !chosen.has(task.id))
    .reduce((sum, task) => sum + task.maxPoints, 0);
  const optional = (part.choices ?? []).reduce((sum, choice) => {
    const points = choice.taskIds
      .map((unit) => unitTasks(part, unit).reduce((total, task) => total + task.maxPoints, 0))
      .sort((a, b) => b - a)
      .slice(0, choice.pick);
    return sum + points.reduce((a, b) => a + b, 0);
  }, 0);
  return fixed + optional;
}

export function checkExam(exam: Exam): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const error = (path: string, message: string) => issues.push({ level: 'error', path, message });
  const warn = (path: string, message: string) => issues.push({ level: 'warning', path, message });

  const expectedId = `${exam.subject}-${exam.level}-${exam.year}-${exam.session}`;
  const idOk = exam.sample ? exam.id.startsWith(`${expectedId}-`) : exam.id === expectedId;
  if (!idOk) warn('id', `Expected id "${expectedId}"${exam.sample ? ' plus a suffix' : ''}.`);

  const sourceIds = new Set<string>();
  for (const [i, source] of (exam.sources ?? []).entries()) {
    if (sourceIds.has(source.id)) error(`sources[${i}]`, `Duplicate source id "${source.id}".`);
    sourceIds.add(source.id);
  }

  const partIds = new Set<string>();
  const taskIds = new Set<string>();
  const fieldIds = new Set<string>();
  let examTotal = 0;

  for (const [p, part] of exam.parts.entries()) {
    const partPath = `parts[${p}]`;
    if (partIds.has(part.id)) error(partPath, `Duplicate part id "${part.id}".`);
    partIds.add(part.id);

    for (const [t, task] of part.tasks.entries()) {
      const path = `${partPath}.tasks[${t}] (${task.id})`;
      if (taskIds.has(task.id)) error(path, `Duplicate task id "${task.id}".`);
      taskIds.add(task.id);

      const localFields = new Set<string>();
      for (const field of task.fields) {
        if (fieldIds.has(field.id)) error(path, `Duplicate field id "${field.id}".`);
        fieldIds.add(field.id);
        localFields.add(field.id);
        if ((field.kind === 'choice' || field.kind === 'multi') && !field.options) {
          error(path, `Field "${field.id}" (${field.kind}) needs options.`);
        }
        const optionRects =
          field.options?.length && field.options.every((option) => option.pdfRect);
        if (!field.pdfRect && !optionRects)
          warn(path, `Field "${field.id}" has no PDF coordinates.`);
      }

      for (const ref of task.sourceRefs ?? []) {
        if (!sourceIds.has(ref)) error(path, `Unknown source "${ref}".`);
      }

      const { rules = [], steps = [], criteria = [] } = task.scoring;
      if (rules.length + steps.length + criteria.length === 0) {
        error(path, 'No answer key: add scoring rules, steps or criteria.');
      }
      const ruleIds = new Set<string>();
      for (const rule of rules) {
        if (ruleIds.has(rule.id)) error(path, `Duplicate rule id "${rule.id}".`);
        ruleIds.add(rule.id);
        for (const id of rule.fieldIds) {
          if (!localFields.has(id))
            error(path, `Rule "${rule.id}" refers to unknown field "${id}".`);
        }
        const answer = rule.answer;
        if (
          answer.kind === 'set' &&
          answer.items.length !== rule.fieldIds.length &&
          answer.order === 'fixed'
        ) {
          error(path, `Rule "${rule.id}": fixed-order set needs one item per field.`);
        }
        if (answer.kind === 'matching') {
          for (const id of Object.keys(answer.pairs)) {
            if (!rule.fieldIds.includes(id))
              error(path, `Rule "${rule.id}" pairs unknown field "${id}".`);
          }
        }
        if (answer.kind === 'choice') {
          const options = new Set(
            rule.fieldIds.flatMap(
              (id) =>
                task.fields.find((field) => field.id === id)?.options?.map((o) => o.value) ?? [],
            ),
          );
          for (const value of answer.correct) {
            if (!options.has(value)) error(path, `Rule "${rule.id}": "${value}" is not an option.`);
          }
        }
        const tables = [...(rule.partial?.table ?? []), ...(rule.partial?.errorsTable ?? [])];
        if (tables.some((row) => row.points > rule.points)) {
          error(path, `Rule "${rule.id}": partial credit exceeds the rule's points.`);
        }
      }
      for (const step of steps) {
        for (const id of step.auto?.fieldIds ?? []) {
          if (!localFields.has(id)) error(path, `Step "${step.id}" checks unknown field "${id}".`);
        }
      }
      if ((task.type === 'essay' || task.type === 'long_writing') && criteria.length === 0) {
        error(path, 'Essay tasks need assessment criteria.');
      }
      const points = scoringPoints(task);
      if (!same(points, task.maxPoints)) {
        error(path, `Scoring adds up to ${points}, but maxPoints is ${task.maxPoints}.`);
      }
      if (!task.explanation) warn(path, 'No explanation from the marking scheme.');
      if (task.fields.length === 0 && criteria.length === 0) {
        warn(path, 'Task has no input fields.');
      }
    }

    for (const [c, choice] of (part.choices ?? []).entries()) {
      for (const unit of choice.taskIds) {
        if (unitTasks(part, unit).length === 0) {
          error(`${partPath}.choices[${c}]`, `Unknown task or group "${unit}".`);
        }
      }
      if (choice.pick >= choice.taskIds.length) {
        error(`${partPath}.choices[${c}]`, 'pick must be smaller than the number of tasks.');
      }
      const points = new Set(
        choice.taskIds.map((id) => part.tasks.find((t) => t.id === id)?.maxPoints),
      );
      if (points.size > 1)
        warn(`${partPath}.choices[${c}]`, 'Tasks in a choice group have different points.');
    }

    if (part.timeLimitMinutes === undefined && exam.timeLimitMinutes === undefined) {
      error(partPath, 'No time limit: set timeLimitMinutes on the part or on the exam.');
    }
    for (const [c, choice] of (part.choices ?? []).entries()) {
      for (const key of ['unitLabels', 'unitRects'] as const) {
        const list = choice[key];
        if (list && list.length !== choice.taskIds.length) {
          error(`${partPath}.choices[${c}]`, `${key} must have one entry per unit.`);
        }
      }
    }

    const points = partPoints(part);
    if (!same(points, part.maxPoints)) {
      error(partPath, `Tasks add up to ${points}, but the part's maxPoints is ${part.maxPoints}.`);
    }
    examTotal += part.maxPoints;
  }

  if (!same(examTotal, exam.maxPoints)) {
    error(
      'maxPoints',
      `Parts add up to ${examTotal}, but the exam's maxPoints is ${exam.maxPoints}.`,
    );
  }
  if (exam.review.status === 'reviewed' && issues.some((issue) => issue.level === 'error')) {
    error('review.status', 'Marked as reviewed but has errors.');
  }
  return issues;
}

export const hasErrors = (issues: ContentIssue[]) =>
  issues.some((issue) => issue.level === 'error');

/** Total time of an exam: the shared limit, or the sum of the parts' limits. */
export function examMinutes(exam: Exam): number {
  return (
    exam.timeLimitMinutes ?? exam.parts.reduce((sum, part) => sum + (part.timeLimitMinutes ?? 0), 0)
  );
}
