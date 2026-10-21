import { useEffect, useState } from 'react';
import { motionReduced } from '@/app/motion';

/** Counts from 0 up to `target` with an ease-out curve (instantly with reduced motion). */
export function useCountUp(target: number, duration = 900): number {
  const [value, setValue] = useState(() => (motionReduced() ? target : 0));
  useEffect(() => {
    if (motionReduced()) {
      const frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      // Whole numbers while counting, the exact value (e.g. 12.5) at the end.
      setValue(progress < 1 ? Math.floor(target * eased) : target);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}
