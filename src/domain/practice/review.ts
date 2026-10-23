import { dayKey, type AttemptRow, type DrillItemResult, type TaskSummary } from '@/storage/db';
import type { Task } from '@/content/schema.types';

/**
 * "Ismétlés": tasks to look at again. A task comes in when it did not go
 * fully right, or when the student saves it. The student decides when it is
 * done: after looking at it again they say "Most már megy" (done) or "Még
 * gyakorolnám" (back in a few days), and they can also say their answer was
 * right and only the automatic check did not accept it. There is no
 * pass-three-times-in-a-row rule: a right answer is noted, not required.
 * Looking at a missed task again after a gap helps it stick (spacing:
 * Cepeda et al., 2006); deciding for themselves keeps the list meaningful.
 */
/** A new miss can be looked at again from the next day. */
export const FIRST_GAP = 1;
/** "Még gyakorolnám" brings the task back after this many days. */
export const AGAIN_GAP = 3;

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

/** What the student decided about a task on the list. */
export type ReviewChoice =
  /** Looked at it, still want to practise: back in a few days. */
  | 'again'
  /** Understands it now: off the list. */
  | 'done'
  /** The answer was right, the automatic check did not accept it: off the list. */
  | 'accepted'
  /** Saved for later by the student. */
  | 'saved';

export interface ReviewMark {
  examId: string;
  taskId: string;
  time: number;
  choice: ReviewChoice;
  subject: string;
  type: Task['type'];
  number: string;
  topics?: string[];
}

export interface ReviewCard {
  key: string;
  examId: string;
  taskId: string;
  subject: string;
  topics: string[];
  number: string;
  type: Task['type'];
  status: 'open' | 'done';
  /** Why the task is on the list: it went wrong, or the student saved it. */
  source: 'missed' | 'saved';
  /** Day (YYYY-MM-DD) from which it is suggested again. */
  due: string;
  lastTime: number;
  /** Share of points the last time it was answered, if it was. */
  lastRatio?: number;
  /** How it left the list. */
  doneReason?: 'done' | 'accepted';
}

export const cardKey = (examId: string, taskId: string) => `${examId}|${taskId}`;

const addDays = (day: string, days: number) => {
  const [y, m, d] = day.split('-').map(Number);
  return dayKey(new Date(y!, m! - 1, d! + days));
};

/** Events from handed-in papers: every marked task of every submitted attempt. */
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

/**
 * Replays answers and the student's decisions in time order into the list.
 * A new miss after a task was marked done puts it back; a right answer is
 * only noted.
 */
export function buildCards(events: ReviewEvent[], marks: ReviewMark[] = []): ReviewCard[] {
  const cards = new Map<string, ReviewCard>();
  const timeline = [
    ...events.map((event) => ({ time: event.time, event, mark: undefined })),
    ...marks.map((mark) => ({ time: mark.time, event: undefined, mark })),
  ].sort((a, b) => a.time - b.time);
  for (const { event, mark } of timeline) {
    const info = (event ?? mark)!;
    if (!isDrillable(info.type)) continue;
    const key = cardKey(info.examId, info.taskId);
    const day = dayKey(info.time);
    const card = cards.get(key);
    if (event) {
      if (event.ratio < 1 && (!card || card.status === 'done')) {
        cards.set(key, {
          key,
          examId: event.examId,
          taskId: event.taskId,
          subject: event.subject,
          topics: event.topics ?? card?.topics ?? [],
          number: event.number,
          type: event.type,
          status: 'open',
          source: 'missed',
          due: addDays(day, FIRST_GAP),
          lastTime: event.time,
          lastRatio: event.ratio,
        });
      } else if (card) {
        cards.set(key, { ...card, lastTime: event.time, lastRatio: event.ratio });
      }
      continue;
    }
    const m = mark!;
    if (m.choice === 'saved') {
      cards.set(key, {
        key,
        examId: m.examId,
        taskId: m.taskId,
        subject: m.subject,
        topics: m.topics ?? card?.topics ?? [],
        number: m.number,
        type: m.type,
        status: 'open',
        source: card?.status === 'open' ? card.source : 'saved',
        due: day,
        lastTime: card?.lastTime ?? m.time,
        lastRatio: card?.lastRatio,
      });
    } else if (card) {
      cards.set(
        key,
        m.choice === 'again'
          ? { ...card, status: 'open', due: addDays(day, AGAIN_GAP), doneReason: undefined }
          : { ...card, status: 'done', doneReason: m.choice },
      );
    }
  }
  return [...cards.values()];
}

/** Open tasks suggested for today or earlier, the longest waiting first. */
export const dueCards = (cards: ReviewCard[], today = dayKey(Date.now())) =>
  cards
    .filter((c) => c.status === 'open' && c.due <= today)
    .sort((a, b) => a.due.localeCompare(b.due) || a.lastTime - b.lastTime);

/** Open tasks resting until a later day, soonest first. */
export const upcomingCards = (cards: ReviewCard[], today = dayKey(Date.now())) =>
  cards
    .filter((c) => c.status === 'open' && c.due > today)
    .sort((a, b) => a.due.localeCompare(b.due));

/** Tasks the student took off the list, the latest first. */
export const doneCards = (cards: ReviewCard[]) =>
  cards.filter((c) => c.status === 'done').sort((a, b) => b.lastTime - a.lastTime);

export type Outcome = 'correct' | 'partial' | 'wrong' | 'skipped';

/** How a practised task went; points still waiting for the student's marking do not count. */
export function outcomeOf(result: DrillItemResult | undefined): Outcome {
  if (!result) return 'skipped';
  const marked = result.maxPoints - result.pendingPoints;
  const ratio = marked > 0 ? result.points / marked : 1;
  return ratio >= 1 ? 'correct' : ratio > 0 ? 'partial' : 'wrong';
}
