import {
  BookHeart,
  BookOpen,
  CalendarDays,
  Dices,
  ChevronRight,
  GalleryVerticalEnd,
  GraduationCap,
  Backpack,
  Calculator,
  MapPinned,
  SpellCheck,
  Layers,
  Mic,
  NotebookPen,
  RotateCcw,
  School,
  Zap,
} from 'lucide-react';
import type { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { PageHeader } from '@/design/ui/PageHeader';
import { TINTS, type Tint } from '@/design/ui/tints';
import { dueCards } from '@/domain/practice/review';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { fitsSubjects, type SubjectTool } from './subjectTools';
import { useReviewCards } from './useReviewCards';

export function PracticeHubPage() {
  usePageTitle(t('practice.title'));
  const cards = useReviewCards();
  const chosen = useSettings((s) => s.settings.subjects);
  const due = cards ? dueCards(cards).length : undefined;

  const subjectTools: { tool: SubjectTool; card: ReactElement }[] = [
    {
      tool: 'essay',
      card: (
        <HubCard
          key="essay"
          to="/gyakorlas/esszevazlat"
          tint="rose"
          icon={<NotebookPen />}
          title={t('practice.hub.essayTitle')}
          body={t('practice.hub.essayBody')}
          badge={chosen.length > 0 && fitsSubjects('essay', chosen)}
        />
      ),
    },
    {
      tool: 'memoriter',
      card: (
        <HubCard
          key="memoriter"
          to="/gyakorlas/memoriterek"
          tint="rose"
          icon={<BookHeart />}
          title={t('practice.hub.memoriterTitle')}
          body={t('practice.hub.memoriterBody')}
          badge={chosen.length > 0 && fitsSubjects('memoriter', chosen)}
        />
      ),
    },
    {
      tool: 'languageDrills',
      card: (
        <HubCard
          key="languageDrills"
          to="/gyakorlas/nyelvtan"
          tint="rose"
          icon={<SpellCheck />}
          title={t('practice.hub.languageDrillsTitle')}
          body={t('practice.hub.languageDrillsBody')}
          badge={chosen.length > 0 && fitsSubjects('languageDrills', chosen)}
        />
      ),
    },
    {
      tool: 'geoCalc',
      card: (
        <HubCard
          key="geoCalc"
          to="/gyakorlas/foldrajz-szamolas"
          tint="cyan"
          icon={<Calculator />}
          title={t('practice.hub.geoCalcTitle')}
          body={t('practice.hub.geoCalcBody')}
          badge={chosen.length > 0 && fitsSubjects('geoCalc', chosen)}
        />
      ),
    },
    {
      tool: 'mapQuiz',
      card: (
        <HubCard
          key="mapQuiz"
          to="/gyakorlas/terkepkviz"
          tint="cyan"
          icon={<MapPinned />}
          title={t('practice.hub.mapQuizTitle')}
          body={t('practice.hub.mapQuizBody')}
          badge={chosen.length > 0 && fitsSubjects('mapQuiz', chosen)}
        />
      ),
    },
    {
      tool: 'probability',
      card: (
        <HubCard
          key="probability"
          to="/gyakorlas/valoszinuseg"
          tint="cyan"
          icon={<Dices />}
          title={t('practice.hub.probabilityTitle')}
          body={t('practice.hub.probabilityBody')}
          badge={chosen.length > 0 && fitsSubjects('probability', chosen)}
        />
      ),
    },
    {
      tool: 'oral',
      card: (
        <HubCard
          key="oral"
          to="/gyakorlas/szobeli"
          tint="orange"
          icon={<Mic />}
          title={t('practice.hub.oralTitle')}
          body={t('practice.hub.oralBody')}
          badge={chosen.length > 0 && fitsSubjects('oral', chosen)}
        />
      ),
    },
  ];
  // The student's own tools first; the order is otherwise kept.
  const ordered = [
    ...subjectTools.filter((x) => fitsSubjects(x.tool, chosen)),
    ...subjectTools.filter((x) => !fitsSubjects(x.tool, chosen)),
  ];

  return (
    <>
      <PageHeader title={t('practice.title')} description={t('practice.intro')} />
      <HubGroup id="hub-daily" title={t('practice.hub.groupDaily')}>
        <HubCard
          to="/tananyag"
          tint="teal"
          icon={<BookOpen />}
          title={t('practice.hub.guideTitle')}
          body={t('practice.hub.guideBody')}
        />
        <HubCard
          to="/gyakorlas/mai-adag"
          tint="indigo"
          icon={<Zap />}
          title={t('practice.hub.dailyTitle')}
          body={t('practice.hub.dailyBody')}
        />
        <HubCard
          to="/gyakorlas/ismetles"
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
          to="/gyakorlas/temakorok"
          tint="blue"
          icon={<Layers />}
          title={t('practice.hub.topicsTitle')}
          body={t('practice.hub.topicsBody')}
        />
        <HubCard
          to="/gyakorlas/kartyak"
          tint="violet"
          icon={<GalleryVerticalEnd />}
          title={t('practice.hub.cardsTitle')}
          body={t('practice.hub.cardsBody')}
        />
      </HubGroup>
      <HubGroup
        id="hub-subject"
        title={t('practice.hub.groupSubject')}
        hint={chosen.length > 0 ? t('practice.hub.groupSubjectHint') : undefined}
      >
        {ordered.map((x) => x.card)}
      </HubGroup>
      <HubGroup id="hub-planning" title={t('practice.hub.groupPlanning')}>
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
      </HubGroup>
      <Link
        to="/tanaroknak"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-text"
      >
        <School aria-hidden="true" className="size-4" />
        {t('teacher.hubTitle')}: {t('teacher.hubBody')}
      </Link>
    </>
  );
}

function HubGroup({
  id,
  title,
  hint,
  children,
}: {
  id: string;
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mb-8">
      <h2 id={id} className="text-xl font-bold">
        {title}
      </h2>
      {hint && <p className="text-sm text-muted">{hint}</p>}
      <ul className="mt-3 grid stagger gap-4 sm:grid-cols-2">{children}</ul>
    </section>
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
  badge,
}: {
  to: string;
  tint: Tint;
  icon: ReactNode;
  title: string;
  body: string;
  status?: string;
  highlight?: boolean;
  /** Mark the tool as one for the student's own subjects. */
  badge?: boolean;
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
          {badge && (
            <span className="mt-1 inline-block rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary-soft-fg">
              {t('practice.hub.forYou')}
            </span>
          )}
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
