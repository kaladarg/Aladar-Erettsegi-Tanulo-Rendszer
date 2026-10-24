import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/design/ui/Button';
import { formatDate, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useResumeItems } from './useResumeItems';

/** "Folytatás": the newest unfinished work in one tap, with the rest listed below. */
export function ResumeCard({ className, compact }: { className?: string; compact?: boolean }) {
  const items = useResumeItems();
  if (!items || items.length === 0) return null;
  const [first, ...rest] = items;
  return (
    <section
      aria-labelledby="resume-title"
      className={cn(
        'animate-rise-in rounded-xl border border-primary/30 bg-surface p-4 shadow-1 sm:p-5',
        className,
      )}
    >
      <h2 id="resume-title" className="text-sm font-semibold text-muted">
        {t('home.resume.title')}
      </h2>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-lg font-semibold">{first!.title}</p>
          <p className="text-sm text-muted">
            {first!.detail} ·{' '}
            {t('dashboard.continueUpdated', {
              date: formatDate(first!.updatedAt, { dateStyle: 'medium', timeStyle: 'short' }),
            })}
          </p>
        </div>
        <Button asChild>
          <Link to={first!.to}>
            <Play aria-hidden="true" />
            {t('home.resume.action')}
          </Link>
        </Button>
      </div>
      {!compact && rest.length > 0 && (
        <details className="mt-3">
          <summary className="cursor-pointer text-sm font-medium text-primary">
            {t('home.resume.more', { count: rest.length })}
          </summary>
          <ul className="mt-2 grid gap-1">
            {rest.slice(0, 5).map((item) => (
              <li key={item.key}>
                <Link
                  to={item.to}
                  className="group -mx-2 flex items-center gap-2 rounded-md p-2 hover:bg-surface-muted"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{item.title}</span>
                    <span className="block text-sm text-muted">{item.detail}</span>
                  </span>
                  <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
