import {
  CalendarDays,
  ChevronRight,
  GalleryVerticalEnd,
  GraduationCap,
  Backpack,
  Layers,
  Mic,
  RotateCcw,
  School,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { PageHeader } from '@/design/ui/PageHeader';
import { TINTS, type Tint } from '@/design/ui/tints';
import { dueCards } from '@/domain/practice/review';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useReviewCards } from './useReviewCards';

export function PracticeHubPage() {
  usePageTitle(t('practice.title'));
  const cards = useReviewCards();
  const due = cards ? dueCards(cards).length : undefined;
  return (
    <>
      <PageHeader title={t('practice.title')} description={t('practice.intro')} />
      <ul className="grid stagger gap-4 sm:grid-cols-2">
        <HubCard
          to="/gyakorlas/temakorok"
          tint="blue"
          icon={<Layers />}
          title={t('practice.hub.topicsTitle')}
          body={t('practice.hub.topicsBody')}
        />
        <HubCard
          to="/gyakorlas/hibaim"
          tint="rose"
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
          to="/gyakorlas/kartyak"
          tint="violet"
          icon={<GalleryVerticalEnd />}
          title={t('practice.hub.cardsTitle')}
          body={t('practice.hub.cardsBody')}
        />
        <HubCard
          to="/gyakorlas/szobeli"
          tint="orange"
          icon={<Mic />}
          title={t('practice.hub.oralTitle')}
          body={t('practice.hub.oralBody')}
        />
        <HubCard
          to="/gyakorlas/terv"
          tint="green"
          icon={<CalendarDays />}
          title={t('practice.hub.planTitle')}
          body={t('practice.hub.planBody')}
        />
        <HubCard
          to="/gyakorlas/pontszamito"
          tint="indigo"
          icon={<GraduationCap />}
          title={t('practice.hub.admissionTitle')}
          body={t('practice.hub.admissionBody')}
        />
        <HubCard
          to="/gyakorlas/segedeszkozok"
          tint="amber"
          icon={<Backpack />}
          title={t('aids.hubTitle')}
          body={t('aids.hubBody')}
        />
        <HubCard
          to="/tanaroknak"
          tint="teal"
          icon={<School />}
          title={t('teacher.hubTitle')}
          body={t('teacher.hubBody')}
        />
      </ul>
    </>
  );
}

function HubCard({
  to,
  icon,
  tint,
  title,
  body,
  status,
  highlight,
}: {
  to: string;
  tint: Tint;
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
        data-ripple=""
        className="group flex h-full lift gap-4 rounded-lg border border-border bg-surface p-5 shadow-1 hover:border-border-strong"
      >
        <span
          aria-hidden="true"
          className={cn(
            'flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-(--motion-base) ease-(--ease-spring) group-hover:scale-110 group-hover:-rotate-6 [&_svg]:size-6',
            TINTS[tint],
          )}
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
