import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  tone?: 'neutral' | 'danger';
  className?: string;
}

/** Friendly placeholder for empty lists and recoverable errors. */
export function EmptyState({
  icon,
  title,
  description,
  action,
  tone = 'neutral',
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex animate-rise-in flex-col items-center rounded-lg border-2 border-dashed border-border bg-surface/60 px-6 py-10 text-center',
        className,
      )}
    >
      <div
        className={cn(
          'mb-4 flex size-16 items-center justify-center rounded-2xl motion-safe:animate-[float_5s_ease-in-out_infinite] [&_svg]:size-8',
          tone === 'danger' ? 'bg-danger-soft text-danger' : 'bg-primary-soft text-primary-soft-fg',
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-prose text-muted">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
