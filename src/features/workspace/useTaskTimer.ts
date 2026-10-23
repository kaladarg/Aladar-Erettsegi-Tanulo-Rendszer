import { useEffect } from 'react';
import { addTaskSeconds } from '@/storage/attempts';

/** No input, tap or scroll for this long counts as a break, not as work on the task. */
const IDLE_MS = 2 * 60 * 1000;
const FLUSH_MS = 15 * 1000;

/**
 * Measures roughly how long the student works on each task during a timed
 * exam: the task they last typed in, tapped or focused gets the time while
 * they are active and the page is visible. Elements of a task carry
 * `data-task-id`; dialogs (such as the essay editor) keep the current task.
 */
export function useTaskTimer(attemptId: string | null) {
  useEffect(() => {
    if (!attemptId) return;
    let current: string | null = null;
    let lastActivity = Date.now();
    let lastTick = Date.now();
    let pending: Record<string, number> = {};

    const onActivity = (event: Event) => {
      lastActivity = Date.now();
      const target = event.target instanceof Element ? event.target : null;
      const task = target?.closest<HTMLElement>('[data-task-id]')?.dataset.taskId;
      if (task) current = task;
    };
    const tick = () => {
      const now = Date.now();
      const step = now - lastTick;
      lastTick = now;
      if (!current || document.hidden || now - lastActivity > IDLE_MS) return;
      // A sleeping device can make one step huge; count at most a few seconds per tick.
      pending[current] = (pending[current] ?? 0) + Math.min(step, 5000) / 1000;
    };
    const flush = () => {
      const seconds = Object.fromEntries(
        Object.entries(pending)
          .map(([task, value]) => [task, Math.round(value)] as const)
          .filter(([, value]) => value > 0),
      );
      pending = {};
      if (Object.keys(seconds).length > 0) void addTaskSeconds(attemptId, seconds);
    };

    const events = ['focusin', 'input', 'pointerdown', 'keydown', 'scroll'] as const;
    events.forEach((type) => document.addEventListener(type, onActivity, true));
    const ticker = window.setInterval(tick, 1000);
    const flusher = window.setInterval(flush, FLUSH_MS);
    const onHide = () => {
      tick();
      flush();
    };
    window.addEventListener('pagehide', onHide);
    document.addEventListener('visibilitychange', onHide);
    return () => {
      events.forEach((type) => document.removeEventListener(type, onActivity, true));
      window.clearInterval(ticker);
      window.clearInterval(flusher);
      window.removeEventListener('pagehide', onHide);
      document.removeEventListener('visibilitychange', onHide);
      onHide();
    };
  }, [attemptId]);
}
