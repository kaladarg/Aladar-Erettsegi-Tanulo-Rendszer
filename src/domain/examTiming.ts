import type { Exam } from '@/content/schema.types';

/** A stretch of the exam written against one clock: a part, or the whole paper. */
export interface Segment {
  id: string;
  partIds: string[];
  minutes: number;
}

/**
 * Timed segments in writing order. A paper with one shared time limit
 * (history) is one segment; otherwise each part has its own clock and is
 * handed in before the next starts (maths I then II, Hungarian I then II).
 */
export function examSegments(exam: Exam): Segment[] {
  if (exam.timeLimitMinutes) {
    return [{ id: 'all', partIds: exam.parts.map((p) => p.id), minutes: exam.timeLimitMinutes }];
  }
  return exam.parts.map((part) => ({
    id: part.id,
    partIds: [part.id],
    minutes: part.timeLimitMinutes ?? 0,
  }));
}

/** "1:05:09" or "4:09" for a countdown. */
export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.ceil(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`;
}
