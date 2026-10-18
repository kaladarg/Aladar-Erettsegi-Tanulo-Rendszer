import type { ExamEntry, Task } from '@/content/schema.types';
import { dayKey, type AttemptRow, type TaskSummary } from '@/storage/db';

/** A submitted attempt that has a stored result. */
export type Scored = AttemptRow & {
  submittedAt: number;
  result: NonNullable<AttemptRow['result']>;
};

const subjectOf = (attempt: AttemptRow) => attempt.result?.subject ?? attempt.examId.split('-')[0]!;

/** Submitted attempts with a result, optionally of one subject, oldest first. */
export function scoredAttempts(attempts: AttemptRow[], subject?: string): Scored[] {
  return attempts
    .filter((a): a is Scored => !!a.submittedAt && !!a.result && a.result.maxPoints > 0)
    .filter((a) => !subject || subjectOf(a) === subject)
    .sort((a, b) => a.submittedAt - b.submittedAt);
}

/** The newest submitted attempt of each paper: statistics reflect the current level. */
export function latestPerExam(attempts: Scored[]): Scored[] {
  const latest = new Map<string, Scored>();
  for (const attempt of attempts) {
    const current = latest.get(attempt.examId);
    if (!current || attempt.submittedAt > current.submittedAt) latest.set(attempt.examId, attempt);
  }
  return [...latest.values()];
}

/** Marked tasks of the latest attempts (tasks still waiting for review are left out). */
function markedTasks(attempts: Scored[]): { attempt: Scored; task: TaskSummary }[] {
  return latestPerExam(attempts).flatMap((attempt) =>
    (attempt.result.tasks ?? [])
      .filter((task) => task.status !== 'pending' && task.maxPoints > 0)
      .map((task) => ({ attempt, task })),
  );
}

export interface ProgressPoint {
  attemptId: string;
  examId: string;
  subject: string;
  mode: AttemptRow['mode'];
  time: number;
  percent: number;
  /** Nothing was waiting for review. */
  complete: boolean;
}

export function progressSeries(attempts: Scored[]): ProgressPoint[] {
  return attempts.map((a) => ({
    attemptId: a.id,
    examId: a.examId,
    subject: subjectOf(a),
    mode: a.mode,
    time: a.submittedAt,
    percent: (a.result.points / a.result.maxPoints) * 100,
    complete: !a.result.pendingPoints,
  }));
}

export interface TopicStat {
  subject: string;
  topic: string;
  points: number;
  maxPoints: number;
  ratio: number;
  tasks: number;
  /** The paper where this topic went worst, to practise it again. */
  examId: string;
  attemptId: string;
}

export function topicStats(attempts: Scored[]): TopicStat[] {
  const byTopic = new Map<string, TopicStat & { worst: number }>();
  for (const { attempt, task } of markedTasks(attempts)) {
    const ratio = task.points / task.maxPoints;
    for (const topic of task.topics ?? []) {
      const subject = subjectOf(attempt);
      const key = `${subject}|${topic}`;
      const stat = byTopic.get(key) ?? {
        subject,
        topic,
        points: 0,
        maxPoints: 0,
        ratio: 0,
        tasks: 0,
        examId: attempt.examId,
        attemptId: attempt.id,
        worst: Infinity,
      };
      stat.points += task.points;
      stat.maxPoints += task.maxPoints;
      stat.tasks += 1;
      if (ratio < stat.worst) {
        stat.worst = ratio;
        stat.examId = attempt.examId;
        stat.attemptId = attempt.id;
      }
      byTopic.set(key, stat);
    }
  }
  return [...byTopic.values()].map(({ worst: _worst, ...stat }) => ({
    ...stat,
    ratio: stat.points / stat.maxPoints,
  }));
}

/** Topics below 60%, weakest (and then heaviest) first. */
export function weakTopics(stats: TopicStat[], limit = 5): TopicStat[] {
  return stats
    .filter((s) => s.ratio < 0.6)
    .sort((a, b) => a.ratio - b.ratio || b.maxPoints - a.maxPoints)
    .slice(0, limit);
}

/** Topics at 80% or above, best (and then heaviest) first. */
export function strongTopics(stats: TopicStat[], limit = 5): TopicStat[] {
  return stats
    .filter((s) => s.ratio >= 0.8)
    .sort((a, b) => b.ratio - a.ratio || b.maxPoints - a.maxPoints)
    .slice(0, limit);
}

export interface MistakeStats {
  tasks: number;
  correct: number;
  partial: number;
  wrong: number;
  /** Left blank. */
  empty: number;
  /** Solved after opening the marking-scheme steps or the solution. */
  helped: number;
}

export function mistakeStats(attempts: Scored[]): MistakeStats {
  const stats: MistakeStats = { tasks: 0, correct: 0, partial: 0, wrong: 0, empty: 0, helped: 0 };
  for (const { task } of markedTasks(attempts)) {
    stats.tasks += 1;
    if (task.status !== 'pending') stats[task.status] += 1;
    if (task.helped) stats.helped += 1;
  }
  return stats;
}

export interface TypeStat {
  type: Task['type'];
  points: number;
  maxPoints: number;
  ratio: number;
  tasks: number;
}

/** Results per task type, weakest first. */
export function typeStats(attempts: Scored[]): TypeStat[] {
  const byType = new Map<Task['type'], TypeStat>();
  for (const { task } of markedTasks(attempts)) {
    const stat = byType.get(task.type) ?? {
      type: task.type,
      points: 0,
      maxPoints: 0,
      ratio: 0,
      tasks: 0,
    };
    stat.points += task.points;
    stat.maxPoints += task.maxPoints;
    stat.tasks += 1;
    byType.set(task.type, stat);
  }
  return [...byType.values()]
    .map((s) => ({ ...s, ratio: s.points / s.maxPoints }))
    .sort((a, b) => a.ratio - b.ratio);
}

const parseDay = (day: string) => {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y!, m! - 1, d!);
};

const addDays = (day: string, delta: number) => {
  const date = parseDay(day);
  date.setDate(date.getDate() + delta);
  return dayKey(date);
};

export interface Streak {
  /** Consecutive practice days up to today (or yesterday, if today is still open). */
  current: number;
  best: number;
  today: boolean;
}

export function streak(days: string[], today = dayKey(Date.now())): Streak {
  const set = new Set(days);
  let best = 0;
  for (const day of set) {
    if (set.has(addDays(day, -1))) continue;
    let length = 1;
    while (set.has(addDays(day, length))) length += 1;
    best = Math.max(best, length);
  }
  const practisedToday = set.has(today);
  let current = 0;
  for (
    let day = practisedToday ? today : addDays(today, -1);
    set.has(day);
    day = addDays(day, -1)
  ) {
    current += 1;
  }
  return { current, best, today: practisedToday };
}

/** The last `count` days, oldest first, with whether the student practised. */
export function recentDays(
  days: string[],
  count = 7,
  today = dayKey(Date.now()),
): { day: string; active: boolean }[] {
  const set = new Set(days);
  return Array.from({ length: count }, (_, i) => {
    const day = addDays(today, i - count + 1);
    return { day, active: set.has(day) };
  });
}

export type Recommendation =
  | { kind: 'review'; examId: string; attemptId: string; pendingPoints: number }
  | { kind: 'topic'; stat: TopicStat }
  | { kind: 'newExam'; entry: ExamEntry };

/**
 * What to do next: finish marking, practise the weakest topics, then try a
 * paper not yet attempted in each chosen subject (newest official paper first).
 */
export function recommendations(
  attempts: AttemptRow[],
  exams: ExamEntry[],
  chosen: string[],
  limit = 4,
): Recommendation[] {
  // Without chosen subjects (onboarding skipped), every subject counts.
  const subjects = chosen.length ? chosen : [...new Set(exams.map((e) => e.subject))];
  const scored = scoredAttempts(attempts).filter((a) => subjects.includes(subjectOf(a)));
  const result: Recommendation[] = [];
  for (const attempt of latestPerExam(scored)) {
    if (attempt.result.pendingPoints) {
      result.push({
        kind: 'review',
        examId: attempt.examId,
        attemptId: attempt.id,
        pendingPoints: attempt.result.pendingPoints,
      });
    }
  }
  for (const stat of weakTopics(topicStats(scored), 2)) result.push({ kind: 'topic', stat });
  const tried = new Set(attempts.map((a) => a.examId));
  for (const subject of subjects) {
    const next = exams
      .filter((e) => e.subject === subject && !tried.has(e.id))
      .sort(
        (a, b) =>
          Number(!!a.sample) - Number(!!b.sample) ||
          b.year - a.year ||
          b.session.localeCompare(a.session),
      )[0];
    if (next) result.push({ kind: 'newExam', entry: next });
  }
  return result.slice(0, limit);
}
