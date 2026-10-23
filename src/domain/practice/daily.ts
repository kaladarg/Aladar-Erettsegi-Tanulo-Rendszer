import type { Exam, Task } from '@/content/schema.types';
import type { CardState } from '../cards/schedule';
import { dueCards, isDrillable, type ReviewCard } from './review';
import { topicArea } from './topicAreas';
import { mixedRound, topicKey, type TaskRef, type TopicEntry } from './topics';

/**
 * "Mai adag": a short session the student shapes in three taps: the subject,
 * what to practise (one or more areas of it, or "Lepj meg" for a surprise
 * mix) and how long (5, 10 or 15 minutes). It needs no finished paper.
 * The session is a card warm-up (where the subject has cards), a task or two
 * from the Ismétlés list that belong to the choice, then tasks from the
 * chosen areas, weak topics first when the student has results. Self-testing
 * and interleaving are among the best-supported study methods (Dunlosky et
 * al., 2013; Rohrer & Taylor, 2007).
 */
export const DAILY_LENGTHS = [5, 10, 15] as const;
export type DailyLength = (typeof DAILY_LENGTHS)[number];
/** Cards take about 20 seconds each. */
const CARD_SECONDS = 20;
const CARDS_FOR: Record<DailyLength, number> = { 5: 3, 10: 5, 15: 6 };
const REVIEWS_FOR: Record<DailyLength, number> = { 5: 1, 10: 2, 15: 2 };
/** Never fewer than this many tasks, even when they are long. */
const MIN_TASKS = 1;
/** Only tasks up to this long may stretch a short round past its time. */
const SHORT_TASK = 6;
const MAX_TASKS = 8;
/** The most areas a student can pick at once; more would be no choice. */
export const MAX_AREAS = 3;

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
  subject: string;
  /** Area ids of the subject (see topicAreas); empty means "Lepj meg". */
  areas: string[];
  length: DailyLength;
  /** The Ismétlés list of every subject. */
  reviewCards: ReviewCard[];
  /** Topics of the subject's papers. */
  topics: TopicEntry[];
  /** Share of points earned per topic key of this subject (0–1). */
  ratios: Map<string, number>;
  /** Minutes per task, by `refKey`; tasks missing here are not offered. */
  minutes: Map<string, number>;
  /** Card ids of the subject, in deck order, and their schedule. */
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

/** Due cards first (longest waiting first), topped up with new cards. */
export function dailyCards(
  cardIds: string[],
  states: Map<string, CardState>,
  today: string,
  limit: number,
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

/** The subject's topics that belong to the chosen areas (all of them for "Lepj meg"). */
export function topicsInAreas(subject: string, topics: TopicEntry[], areas: string[]) {
  if (areas.length === 0) return topics;
  return topics.filter((topic) => areas.includes(topicArea(subject, topic.name).id));
}

export function dailyPlan(input: DailyInput): DailyPlan {
  const cards = dailyCards(input.cardIds, input.cardStates, input.today, CARDS_FOR[input.length]);
  const cardMinutes = Math.ceil((cards.length * CARD_SECONDS) / 60);
  const budget = Math.max(2, input.length - cardMinutes);
  const topics = topicsInAreas(input.subject, input.topics, input.areas);
  const inChoice = new Set(topics.flatMap((t) => t.tasks.map(refKey)));

  const tasks: DailyTask[] = [];
  const taken = new Set<string>();
  let used = 0;
  const offer = (ref: TaskRef, reason: DailyTask['reason']) => {
    const minutes = input.minutes.get(refKey(ref));
    if (minutes === undefined || taken.has(refKey(ref)) || tasks.length >= MAX_TASKS) return;
    // A task that does not fit may still come in when the round would otherwise
    // be empty, but only a short one: a 30-minute reading task never does.
    if (used + minutes > budget && (tasks.length >= MIN_TASKS || minutes > SHORT_TASK)) return;
    tasks.push({ ...ref, subject: input.subject, minutes, reason });
    taken.add(refKey(ref));
    used += minutes;
  };

  // 1. A task or two from the Ismétlés list that fits the choice.
  const reviews = dueCards(
    input.reviewCards.filter(
      (c) =>
        c.subject === input.subject &&
        isDrillable(c.type) &&
        (input.areas.length === 0 || inChoice.has(refKey(c))),
    ),
    input.today,
  ).slice(0, REVIEWS_FOR[input.length]);
  for (const card of reviews) offer(card, 'review');

  // 2. Tasks from the chosen topics, mixed, weak topics first.
  const weak = new Set(
    topics.filter((t) => (input.ratios.get(t.key) ?? 1) < 0.6).map((t) => t.key),
  );
  const round = mixedRound(topics, MAX_TASKS * 2, input.seed, input.ratios);
  for (const ref of round) {
    const topic = topics.find((t) => t.tasks.some((r) => refKey(r) === refKey(ref)));
    offer(ref, topic && weak.has(topic.key) ? 'weak' : 'mixed');
  }

  // Every task of the choice is longer than the time: offer the shortest one
  // rather than nothing, since the student asked for this area.
  if (tasks.length === 0) {
    const shortest = topics
      .flatMap((t) => t.tasks)
      .filter((ref) => input.minutes.has(refKey(ref)))
      .sort((a, b) => input.minutes.get(refKey(a))! - input.minutes.get(refKey(b))!)[0];
    if (shortest) {
      const minutes = input.minutes.get(refKey(shortest))!;
      tasks.push({ ...shortest, subject: input.subject, minutes, reason: 'mixed' });
      used += minutes;
    }
  }

  // Reviews spread among the new tasks instead of coming all at the start.
  const fresh = tasks.filter((t) => t.reason !== 'review');
  const again = tasks.filter((t) => t.reason === 'review');
  const ordered = [...fresh];
  again.forEach((task, i) => ordered.splice(Math.min(ordered.length, 1 + i * 2), 0, task));
  return { cards, tasks: ordered, minutes: cardMinutes + used };
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
