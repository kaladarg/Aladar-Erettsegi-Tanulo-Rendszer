import type { Exam } from '@/content/schema.types';
import { examSegments } from './examTiming';

/**
 * Time per task after a timed exam, compared with what the task is "worth":
 * the segment's time shared out by points (a 10-point task in a 100-point,
 * 180-minute paper is worth 18 minutes). Running out of time costs points
 * even when the student knows the material, so the tasks that took far more
 * than their share are pointed out.
 */
export interface PaceRow {
  taskId: string;
  number: string;
  seconds: number;
  /** The task's share of its segment's time, in seconds. */
  budget: number;
}

export interface Pacing {
  rows: PaceRow[];
  /** Seconds measured on tasks in total. */
  tracked: number;
  /** Up to three tasks that took far longer than their share, the worst first. */
  slow: PaceRow[];
}

/** Less measured time than this tells too little to give feedback. */
export const MIN_TRACKED = 5 * 60;

/** A task is pointed out when it took 1.5× its share and at least 2 minutes more. */
const isSlow = (row: PaceRow) => row.seconds >= row.budget * 1.5 && row.seconds - row.budget >= 120;

export function pacing(exam: Exam, taskSeconds: Record<string, number>): Pacing {
  const rows: PaceRow[] = [];
  for (const segment of examSegments(exam)) {
    const parts = exam.parts.filter((p) => segment.partIds.includes(p.id));
    const points = parts.reduce((sum, p) => sum + p.maxPoints, 0);
    if (!points || !segment.minutes) continue;
    for (const part of parts)
      for (const task of part.tasks) {
        const seconds = taskSeconds[task.id] ?? 0;
        if (seconds <= 0) continue;
        rows.push({
          taskId: task.id,
          number: task.number,
          seconds,
          budget: (segment.minutes * 60 * task.maxPoints) / points,
        });
      }
  }
  const slow = rows
    .filter(isSlow)
    .sort((a, b) => b.seconds - b.budget - (a.seconds - a.budget))
    .slice(0, 3);
  return { rows, tracked: rows.reduce((sum, r) => sum + r.seconds, 0), slow };
}
