import { Timer } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { formatClock, type Segment } from '@/domain/examTiming';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { saveSegmentSeconds } from '@/storage/attempts';

const SAVE_EVERY = 5;
/** Minutes left at which screen readers hear a reminder. */
const ANNOUNCE_AT = [15, 5, 1];

/**
 * Counts the time written in a segment. The clock runs only while the
 * workspace is visible, so closing the app by accident costs no time.
 */
function useSegmentSeconds(attemptId: string, segment: Segment, initial: number) {
  const [seconds, setSeconds] = useState(initial);
  const latest = useRef(initial);

  useEffect(() => {
    const persist = () => void saveSegmentSeconds(attemptId, segment.id, latest.current);
    const id = setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      latest.current += 1;
      setSeconds(latest.current);
      if (latest.current % SAVE_EVERY === 0) persist();
    }, 1000);
    const onHide = () => document.visibilityState === 'hidden' && persist();
    document.addEventListener('visibilitychange', onHide);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', onHide);
      persist();
    };
  }, [attemptId, segment.id]);

  return seconds;
}

/**
 * Countdown of the current segment; calls `onExpire` once when time is up.
 * Render it with `key={segment.id}` so each segment starts from its stored time.
 */
export function ExamClock({
  attemptId,
  segment,
  initialSeconds,
  onExpire,
}: {
  attemptId: string;
  segment: Segment;
  initialSeconds: number;
  onExpire: () => void;
}) {
  const seconds = useSegmentSeconds(attemptId, segment, initialSeconds);
  const remaining = segment.minutes * 60 - seconds;
  const [announcement, setAnnouncement] = useState('');
  const expired = useRef(false);
  const announced = useRef(new Set<number>());

  useEffect(() => {
    if (remaining <= 0 && !expired.current) {
      expired.current = true;
      onExpire();
      return;
    }
    const minutes = Math.ceil(remaining / 60);
    for (const mark of ANNOUNCE_AT) {
      if (minutes === mark && !announced.current.has(mark) && remaining <= mark * 60) {
        announced.current.add(mark);
        // Reminders are announced while the student keeps typing.
        setTimeout(() => setAnnouncement(t('workspace.timeLeftAnnounce', { minutes: mark })), 0);
      }
    }
  }, [remaining, onExpire]);

  const warning = remaining <= 5 * 60;
  return (
    <>
      <span
        className={cn(
          'inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-sm font-semibold tabular-nums',
          warning ? 'bg-danger-soft text-text' : 'bg-surface-muted',
        )}
        title={t('workspace.timeLeft')}
      >
        <Timer aria-hidden="true" className="size-4" />
        <span className="sr-only">{t('workspace.timeLeft')}: </span>
        {formatClock(remaining)}
      </span>
      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </>
  );
}
