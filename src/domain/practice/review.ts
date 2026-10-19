import { dayKey, type AttemptRow, type DrillItemResult, type TaskSummary } from '@/storage/db';
import type { Task } from '@/content/schema.types';

/**
 * Spaced review of mistakes ("Hibáim"). A task enters the queue when it was
 * answered wrongly or partly right; it comes back after 1 day, then — while it
 * keeps being answered correctly — after 3 and 7 more days, and leaves the
 * queue after the third correct review. A mistake sends it back to 1 day.
 * Spacing and repeated self-testing are among the best-supported study
 * methods (Dunlosky et al., 2013; Cepeda et al., 2006).
 */
export const REVIEW_INTERVALS = [1, 3, 7] as const;

/** Tasks that need a reader (essays) are not drilled: they cannot be checked at once. */
export const isDrillable = (type: Task['type']) => type !== 'essay' && type !== 'long_writing';

export interface ReviewEvent {
  examId: string;
  taskId: string;
  time: number;
  /** Share of the marked points earned, 0–1. */
  ratio: number;
  type: Task['type'];
  subject: string;
  topics?: string[];
  number: string;
}

export interface ReviewCard {
  key: string;
  examId: string;
  taskId: string;
  subject: string;
  topics: string[];
  number: string;
  type: Task['type'];
  /** Correct reviews in a row since the last mistake. */
  box: number;
  /** Day (YYYY-MM-DD) the task is due again. */
  due: string;
  lastTime: number;
  lastRatio: number;
  mistakes: number;
}

export const cardKey = (examId: string, taskId: string) => `${examId}|${taskId}`;

const addDays = (day: string, days: number) => {
  const [y, m, d] = day.split('-').map(Number);
  return dayKey(new Date(y!, m! - 1, d! + days));
};

/** Events from handed-in papers: each marked task of the newest attempt per paper. */
export function examEvents(attempts: AttemptRow[]): ReviewEvent[] {
  const events: ReviewEvent[] = [];
  for (const attempt of attempts) {
    if (!attempt.submittedAt || !attempt.result?.tasks) continue;
    const subject = attempt.result.subject ?? attempt.examId.split('-')[0]!;
    for (const task of attempt.result.tasks) {
      // Unanswered tasks are left out: a half-finished paper should not flood the queue.
      if (task.status === 'pending' || task.status === 'empty' || task.maxPoints <= 0) continue;
      events.push(taskEvent(attempt.examId, task, attempt.submittedAt, subject));
    }
  }
  return events;
}

function taskEvent(examId: string, task: TaskSummary, time: number, subject: string): ReviewEvent {
  return {
    examId,
    taskId: task.id,
    time,
    ratio: task.points / task.maxPoints,
    type: task.type,
    subject,
    topics: task.topics,
    number: task.number,
  };
}

/** Replays all events in time order into the current review cards. */
export function buildCards(events: ReviewEvent[]): ReviewCard[] {
  const cards = new Map<string, ReviewCard>();
  for (const event of [...events].sort((a, b) => a.time - b.time)) {
    if (!isDrillable(event.type)) continue;
    const key = cardKey(event.examId, event.taskId);
    const day = dayKey(event.time);
    const card = cards.get(key);
    if (event.ratio < 1) {
      cards.set(key, {
        key,
        examId: event.examId,
        taskId: event.taskId,
        subject: event.subject,
        topics: event.topics ?? card?.topics ?? [],
        number: event.number,
        type: event.type,
        box: 0,
        due: addDays(day, REVIEW_INTERVALS[0]),
        lastTime: event.time,
        lastRatio: event.ratio,
        mistakes: (card?.mistakes ?? 0) + 1,
      });
    } else if (card) {
      const box = card.box + 1;
      if (box >= REVIEW_INTERVALS.length) cards.delete(key);
      else
        cards.set(key, {
          ...card,
          box,
          due: addDays(day, REVIEW_INTERVALS[box]!),
          lastTime: event.time,
          lastRatio: 1,
        });
    }
  }
  return [...cards.values()];
}

/** Cards due today or earlier, the longest-waiting first. */
export const dueCards = (cards: ReviewCard[], today = dayKey(Date.now())) =>
  cards
    .filter((c) => c.due <= today)
    .sort((a, b) => a.due.localeCompare(b.due) || a.lastTime - b.lastTime);

/** Cards waiting for a later day, soonest first. */
export const upcomingCards = (cards: ReviewCard[], today = dayKey(Date.now())) =>
  cards.filter((c) => c.due > today).sort((a, b) => a.due.localeCompare(b.due));

export type Outcome = 'correct' | 'partial' | 'wrong' | 'skipped';

/** How a practised task went; points still waiting for the student's marking do not count. */
export function outcomeOf(result: DrillItemResult | undefined): Outcome {
  if (!result) return 'skipped';
  const marked = result.maxPoints - result.pendingPoints;
  const ratio = marked > 0 ? result.points / marked : 1;
  return ratio >= 1 ? 'correct' : ratio > 0 ? 'partial' : 'wrong';
}
