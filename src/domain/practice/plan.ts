import type { ExamEntry } from '@/content/schema.types';
import { dayKey, type AttemptRow, type DrillSessionRow, type OralTopicRow } from '@/storage/db';
import { scoredAttempts, topicStats, weakTopics } from '../stats/stats';
import type { ReviewCard } from './review';
import { dueCards } from './review';

/** Subjects with a compulsory oral exam at középszint. */
export const ORAL_SUBJECTS = ['magyar', 'tortenelem', 'angol', 'nemet'];

/**
 * Phases before a written exam:
 * - build (more than 8 weeks): learn weak topics, one full paper a week;
 * - practise (2–8 weeks): papers, weak topics, reviews, oral rehearsal;
 * - final (last 2 weeks): timed exam simulations and reviews only;
 * - day: the exam is today; done: it is over.
 */
export type Phase = 'build' | 'practise' | 'final' | 'day' | 'done';

export type PlanItem =
  | { kind: 'review'; count: number; done: boolean }
  | { kind: 'topic'; topic: string; percent: number; done: boolean }
  | { kind: 'topicExplore'; done: boolean }
  | { kind: 'paper'; entry: ExamEntry | null; done: boolean }
  | { kind: 'exam'; entry: ExamEntry | null; done: boolean }
  | { kind: 'oral'; done: boolean };

export interface SubjectPlan {
  subject: string;
  date: string;
  daysLeft: number;
  weeksLeft: number;
  phase: Phase;
  items: PlanItem[];
}

export interface PlanInput {
  today: string;
  examDates: Record<string, string>;
  attempts: AttemptRow[];
  drills: DrillSessionRow[];
  oralTopics: OralTopicRow[];
  cards: ReviewCard[];
  exams: ExamEntry[];
}

const toDate = (day: string) => {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y!, m! - 1, d!);
};

export const daysBetween = (from: string, to: string) =>
  Math.round((toDate(to).getTime() - toDate(from).getTime()) / 86_400_000);

/** Monday of the week of `day`, as YYYY-MM-DD. */
export function weekStart(day: string): string {
  const date = toDate(day);
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return dayKey(date);
}

export function phaseFor(daysLeft: number): Phase {
  if (daysLeft < 0) return 'done';
  if (daysLeft === 0) return 'day';
  if (daysLeft <= 14) return 'final';
  if (daysLeft <= 56) return 'practise';
  return 'build';
}

/** Newest official paper first, samples last. */
const byRecency = (a: ExamEntry, b: ExamEntry) =>
  Number(!!a.sample) - Number(!!b.sample) || b.year - a.year || b.session.localeCompare(a.session);

export function subjectPlan(subject: string, input: PlanInput): SubjectPlan | null {
  const date = input.examDates[subject];
  if (!date) return null;
  const daysLeft = daysBetween(input.today, date);
  const phase = phaseFor(daysLeft);
  const since = toDate(weekStart(input.today)).getTime();
  const plan: SubjectPlan = {
    subject,
    date,
    daysLeft,
    weeksLeft: Math.max(0, Math.ceil(daysLeft / 7)),
    phase,
    items: [],
  };
  if (phase === 'done' || phase === 'day') return plan;

  const subjectOf = (a: AttemptRow) => a.result?.subject ?? a.examId.split('-')[0];
  const attempts = input.attempts.filter((a) => subjectOf(a) === subject);
  const tried = new Set(attempts.map((a) => a.examId));
  const submittedThisWeek = (mode: AttemptRow['mode']) =>
    attempts.some((a) => a.mode === mode && (a.submittedAt ?? 0) >= since);
  const exams = input.exams.filter((e) => e.subject === subject).sort(byRecency);
  const untried = exams.find((e) => !tried.has(e.id)) ?? exams[0] ?? null;

  const due = dueCards(
    input.cards.filter((c) => c.subject === subject),
    input.today,
  ).length;
  plan.items.push({ kind: 'review', count: due, done: due === 0 });

  if (phase === 'final') {
    plan.items.push({ kind: 'exam', entry: untried, done: submittedThisWeek('exam') });
  } else {
    plan.items.push({ kind: 'paper', entry: untried, done: submittedThisWeek('practice') });
    const weak = weakTopics(topicStats(scoredAttempts(attempts)), 2);
    if (weak.length === 0) {
      const practised = input.drills.some(
        (d) => d.subject === subject && d.kind === 'topic' && d.startedAt >= since,
      );
      plan.items.push({ kind: 'topicExplore', done: practised });
    }
    for (const stat of weak) {
      const done = input.drills.some(
        (d) =>
          d.kind === 'topic' &&
          d.subject === subject &&
          d.topic?.toLocaleLowerCase('hu') === stat.topic.toLocaleLowerCase('hu') &&
          d.startedAt >= since,
      );
      plan.items.push({
        kind: 'topic',
        topic: stat.topic,
        percent: Math.round(stat.ratio * 100),
        done,
      });
    }
  }
  if (ORAL_SUBJECTS.includes(subject) && phase !== 'build') {
    const rehearsed = input.oralTopics.some(
      (o) => o.subject === subject && o.practised > 0 && o.updatedAt >= since,
    );
    plan.items.push({ kind: 'oral', done: rehearsed });
  }
  return plan;
}

/** Plans for every subject with a date, the nearest exam first. */
export function studyPlan(input: PlanInput): SubjectPlan[] {
  return Object.keys(input.examDates)
    .map((subject) => subjectPlan(subject, input))
    .filter((p): p is SubjectPlan => !!p && p.phase !== 'done')
    .sort((a, b) => a.daysLeft - b.daysLeft);
}
