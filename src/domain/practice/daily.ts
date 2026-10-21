import type { Exam, Task } from '@/content/schema.types';
import type { CardState } from '../cards/schedule';
import { dueCards, isDrillable, type ReviewCard } from './review';
import { mixedRound, shuffle, topicKey, type TaskRef, type TopicEntry } from './topics';

/**
 * "Mai adag": one short daily session that mixes the three kinds of practice
 * the app already has, so the student does not have to choose:
 * 1. a few study cards (due ones first, then new ones),
 * 2. the mistakes that are due again (Hibáim),
 * 3. tasks from the weakest topics, interleaved across subjects.
 * Self-testing, spacing and interleaving are the best-supported study methods
 * (Dunlosky et al., 2013; Roediger & Karpicke, 2006; Rohrer & Taylor, 2007).
 */
export const DAILY_MINUTES = 15;
/** Cards take about 20 seconds each, so 9 cards fill 3 minutes. */
export const DAILY_CARDS = 9;
const CARD_SECONDS = 20;
/** Never fewer than this many tasks, even when they are long. */
const MIN_TASKS = 2;
/** Only tasks up to this long may stretch a short round past its time. */
const SHORT_TASK = 6;
const MAX_TASKS = 8;
/** At most half of the task time goes to reviews, so new practice always gets a turn. */
const REVIEW_SHARE = 0.5;

/**
 * Expected minutes for a task, from the time the exam gives per point
 * (e.g. 45 minutes for 30 points makes a 2-point task 3 minutes).
 */
export function estimateMinutes(exam: Exam, task: Task): number {
  const part = exam.parts.find((p) => p.tasks.includes(task));
  const minutes = part?.timeLimitMinutes ?? exam.timeLimitMinutes;
  const points = part?.timeLimitMinutes ? part.maxPoints : exam.maxPoints;
  if (!minutes || !points) return Math.max(1, task.maxPoints);
  return Math.max(1, Math.round((task.maxPoints * minutes) / points));
}

export const refKey = (ref: TaskRef) => `${ref.examId}|${ref.taskId}`;

export interface DailyTask extends TaskRef {
  subject: string;
  minutes: number;
  reason: 'review' | 'weak' | 'mixed';
}

export interface DailyInput {
  /** Subjects to practise, in the student's order. */
  subjects: string[];
  /** Mistakes-review cards of every subject. */
  reviewCards: ReviewCard[];
  /** Topics of each subject's papers. */
  topics: Map<string, TopicEntry[]>;
  /** Share of points earned per `${subject}|${topicKey}` (0–1). */
  ratios: Map<string, number>;
  /** Minutes per task, by `refKey`; tasks missing here are not offered. */
  minutes: Map<string, number>;
  /** Card ids of the chosen subjects, in deck order, and their schedule. */
  cardIds: string[];
  cardStates: Map<string, CardState>;
  today: string;
  seed: number;
}

export interface DailyPlan {
  cards: string[];
  tasks: DailyTask[];
  /** Expected length in minutes. */
  minutes: number;
}

/** Due cards first (longest waiting first), topped up with new cards, mixed by subject. */
export function dailyCards(
  cardIds: string[],
  states: Map<string, CardState>,
  today: string,
  limit = DAILY_CARDS,
): string[] {
  const due = cardIds
    .filter((id) => {
      const state = states.get(id);
      return state && state.due <= today;
    })
    .sort((a, b) => {
      const sa = states.get(a)!;
      const sb = states.get(b)!;
      return sa.due.localeCompare(sb.due) || sa.lastTime - sb.lastTime;
    });
  const fresh = cardIds.filter((id) => !states.has(id));
  return [...due, ...fresh].slice(0, limit);
}

/** Round robin over groups, so neighbours come from different groups where possible. */
function interleave<T>(groups: T[][]): T[] {
  const queues = groups.map((g) => [...g]);
  const result: T[] = [];
  while (queues.some((q) => q.length > 0))
    for (const queue of queues) if (queue.length > 0) result.push(queue.shift()!);
  return result;
}

export function dailyPlan(input: DailyInput): DailyPlan {
  const cards = dailyCards(input.cardIds, input.cardStates, input.today);
  const cardMinutes = Math.ceil((cards.length * CARD_SECONDS) / 60);
  const budget = DAILY_MINUTES - cardMinutes;
  const chosen = new Set(input.subjects);

  const tasks: DailyTask[] = [];
  const taken = new Set<string>();
  let used = 0;
  const offer = (ref: TaskRef, subject: string, reason: DailyTask['reason'], limit: number) => {
    const minutes = input.minutes.get(refKey(ref));
    if (minutes === undefined || taken.has(refKey(ref)) || tasks.length >= MAX_TASKS) return;
    // A task that does not fit may still come in when the round would otherwise
    // be too short, but only a short one: a 30-minute reading task never does.
    if (used + minutes > limit && (tasks.length >= MIN_TASKS || minutes > SHORT_TASK)) return;
    tasks.push({ ...ref, subject, minutes, reason });
    taken.add(refKey(ref));
    used += minutes;
  };

  // 1. Mistakes that are due, alternating subjects, up to half of the time.
  const due = dueCards(
    input.reviewCards.filter((c) => chosen.has(c.subject) && isDrillable(c.type)),
    input.today,
  );
  const dueBySubject = input.subjects.map((s) => due.filter((c) => c.subject === s));
  for (const card of interleave(dueBySubject))
    offer(card, card.subject, 'review', budget * REVIEW_SHARE);

  // 2. Weak topics first, then a mix of the rest, alternating subjects.
  const fresh = input.subjects.map((subject, index) => {
    const topics = input.topics.get(subject) ?? [];
    const ratios = new Map<string, number>();
    for (const topic of topics) {
      const ratio = input.ratios.get(`${subject}|${topic.key}`);
      if (ratio !== undefined) ratios.set(topic.key, ratio);
    }
    const weak = new Set(topics.filter((t) => (ratios.get(t.key) ?? 1) < 0.6).map((t) => t.key));
    return mixedRound(topics, MAX_TASKS, input.seed + index, ratios).map((ref) => {
      const topic = topics.find((t) => t.tasks.some((r) => refKey(r) === refKey(ref)));
      return { ref, subject, weak: !!topic && weak.has(topic.key) };
    });
  });
  for (const { ref, subject, weak } of interleave(shuffle(fresh, input.seed)))
    offer(ref, subject, weak ? 'weak' : 'mixed', budget);

  // Reviews and new tasks alternate subjects too: order by subject turns.
  const bySubject = input.subjects.map((s) => tasks.filter((t) => t.subject === s));
  return { cards, tasks: interleave(bySubject), minutes: cardMinutes + used };
}

/**
 * How well each topic went, from handed-in papers and practised tasks:
 * `${subject}|${topicKey}` to the share of points earned.
 */
export function topicRatios(
  stats: { subject: string; topic: string; points: number; maxPoints: number }[],
  events: { subject: string; topics?: string[]; ratio: number }[],
): Map<string, number> {
  const sums = new Map<string, { earned: number; weight: number }>();
  const add = (key: string, earned: number, weight: number) => {
    const sum = sums.get(key) ?? { earned: 0, weight: 0 };
    sum.earned += earned;
    sum.weight += weight;
    sums.set(key, sum);
  };
  for (const stat of stats)
    if (stat.maxPoints > 0)
      add(`${stat.subject}|${topicKey(stat.topic)}`, stat.points, stat.maxPoints);
  // A practised task counts like a 1-point task of that topic.
  for (const event of events)
    for (const topic of event.topics ?? [])
      add(`${event.subject}|${topicKey(topic)}`, event.ratio, 1);
  return new Map([...sums].map(([key, s]) => [key, s.earned / s.weight]));
}
