import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** A circular progress indicator; the arc grows in with a short animation. */
export function ProgressRing({
  value,
  max,
  size = 72,
  stroke = 8,
  label,
  children,
  className,
  trackClassName = 'stroke-current opacity-20',
  barClassName = 'stroke-current',
}: {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  /** Accessible description, e.g. "4 of 10 tasks". */
  label: string;
  children?: ReactNode;
  className?: string;
  trackClassName?: string;
  barClassName?: string;
}) {
  const radius = (size - stroke) / 2;
  const length = 2 * Math.PI * radius;
  const ratio = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  return (
    <div
      role="img"
      aria-label={label}
      className={cn('relative inline-grid place-items-center', className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className={trackClassName}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={length}
          strokeDashoffset={length * (1 - ratio)}
          className={cn(
            '[animation:ring-in_var(--motion-slow)_var(--ease-out)_both] transition-[stroke-dashoffset] duration-(--motion-slow) ease-(--ease-out)',
            barClassName,
          )}
          style={{ ['--ring-length' as string]: `${length}px` }}
        />
      </svg>
      <span aria-hidden="true" className="absolute inset-0 grid place-items-center">
        {children}
      </span>
    </div>
  );
}
