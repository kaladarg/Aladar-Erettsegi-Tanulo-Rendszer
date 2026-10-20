/** Answer key of the exam-mode playback position (ignored by scoring). */
export const audioPositionKey = (partId: string) => `__audio:${partId}`;

/** 75.4 -> "1:15" */
export function formatClock(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}
