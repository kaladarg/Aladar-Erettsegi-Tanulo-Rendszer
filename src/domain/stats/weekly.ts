import { dayKey, type AttemptRow } from '@/storage/db';
import type { ReviewEvent } from '../practice/review';

/**
 * The weekly summary shown on Sundays (and Mondays): what the student did in
 * the last seven days, which topics went better than before, and one topic
 * to focus on next week. Built from data the app already stores.
 */
export interface WeeklySummary {
  /** First day of the seven (YYYY-MM-DD), also the key for "seen". */
  from: string;
  activeDays: number;
  tasks: number;
  cards: number;
  papers: number;
  improved: { subject: string; topic: string; before: number; after: number }[];
  focus?: { subject: string; topic: string; ratio: number };
}

/** A topic counts as improved when its share of points rose by this much. */
const IMPROVED_BY = 0.15;
const WEAK = 0.6;

const mean = (values: number[]) => values.reduce((a, b) => a + b, 0) / values.length;

export function weeklySummary(input: {
  events: ReviewEvent[];
  days: string[];
  cardTimes: number[];
  attempts: AttemptRow[];
  now: Date;
}): WeeklySummary | null {
  const start = new Date(input.now);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - 6);
  const since = start.getTime();
  const from = dayKey(start);

  const inWeek = input.events.filter((e) => e.time >= since);
  const summary: WeeklySummary = {
    from,
    activeDays: new Set(input.days.filter((d) => d >= from)).size,
    tasks: inWeek.length,
    cards: input.cardTimes.filter((time) => time >= since).length,
    papers: input.attempts.filter((a) => a.submittedAt && a.submittedAt >= since).length,
    improved: [],
  };
  if (summary.activeDays === 0 && summary.tasks === 0 && summary.cards === 0) return null;

  const byTopic = new Map<
    string,
    { subject: string; topic: string; before: number[]; after: number[] }
  >();
  for (const event of input.events)
    for (const topic of event.topics ?? []) {
      const key = `${event.subject}|${topic.toLocaleLowerCase('hu')}`;
      const entry = byTopic.get(key) ?? { subject: event.subject, topic, before: [], after: [] };
      (event.time >= since ? entry.after : entry.before).push(event.ratio);
      byTopic.set(key, entry);
    }

  summary.improved = [...byTopic.values()]
    .filter((t) => t.before.length > 0 && t.after.length > 0)
    .map((t) => ({
      subject: t.subject,
      topic: t.topic,
      before: mean(t.before),
      after: mean(t.after),
    }))
    .filter((t) => t.after - t.before >= IMPROVED_BY)
    .sort((a, b) => b.after - b.before - (a.after - a.before))
    .slice(0, 3);

  const weakest = [...byTopic.values()]
    .map((t) => ({ subject: t.subject, topic: t.topic, all: [...t.before, ...t.after] }))
    .filter((t) => t.all.length >= 2)
    .map((t) => ({ subject: t.subject, topic: t.topic, ratio: mean(t.all) }))
    .filter((t) => t.ratio < WEAK)
    .sort((a, b) => a.ratio - b.ratio)[0];
  if (weakest) summary.focus = weakest;
  return summary;
}
