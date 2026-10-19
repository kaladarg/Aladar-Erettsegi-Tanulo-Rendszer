import { CalendarDays, ChevronRight, Layers, Mic, RotateCcw } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { PageHeader } from '@/design/ui/PageHeader';
import { dueCards } from '@/domain/practice/review';
import { t } from '@/i18n';
import { useReviewCards } from './useReviewCards';

export function PracticeHubPage() {
  usePageTitle(t('practice.title'));
  const cards = useReviewCards();
  const due = cards ? dueCards(cards).length : undefined;
  return (
    <>
      <PageHeader title={t('practice.title')} description={t('practice.intro')} />
      <ul className="grid gap-4 sm:grid-cols-2">
        <HubCard
          to="/gyakorlas/temakorok"
          icon={<Layers />}
          title={t('practice.hub.topicsTitle')}
          body={t('practice.hub.topicsBody')}
        />
        <HubCard
          to="/gyakorlas/hibaim"
          icon={<RotateCcw />}
          title={t('practice.hub.reviewTitle')}
          body={t('practice.hub.reviewBody')}
          status={
            due === undefined
              ? undefined
              : due > 0
                ? t('practice.hub.dueToday', { count: due })
                : t('practice.hub.dueNone')
          }
          highlight={!!due}
        />
        <HubCard
          to="/gyakorlas/szobeli"
          icon={<Mic />}
          title={t('practice.hub.oralTitle')}
          body={t('practice.hub.oralBody')}
        />
        <HubCard
          to="/gyakorlas/terv"
          icon={<CalendarDays />}
          title={t('practice.hub.planTitle')}
          body={t('practice.hub.planBody')}
        />
      </ul>
    </>
  );
}

function HubCard({
  to,
  icon,
  title,
  body,
  status,
  highlight,
}: {
  to: string;
  icon: ReactNode;
  title: string;
  body: string;
  status?: string;
  highlight?: boolean;
}) {
  return (
    <li>
      <Link
        to={to}
        className="group flex h-full gap-4 rounded-lg border border-border bg-surface p-5 shadow-1 hover:border-border-strong"
      >
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-soft-fg [&_svg]:size-5"
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1 text-lg font-semibold">
            {title}
            <ChevronRight
              aria-hidden="true"
              className="size-4 text-muted group-hover:translate-x-0.5 motion-safe:transition-transform"
            />
          </span>
          <span className="mt-1 block text-muted">{body}</span>
          {status && (
            <span
              className={
                highlight
                  ? 'mt-2 block text-sm font-semibold text-primary'
                  : 'mt-2 block text-sm text-muted'
              }
            >
              {status}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
}
