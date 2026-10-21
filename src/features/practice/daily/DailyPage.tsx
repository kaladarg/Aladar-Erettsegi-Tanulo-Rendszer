import {
  CalendarCheck,
  Layers,
  ListChecks,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject } from '@/content/catalog';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { Skeleton } from '@/design/ui/Skeleton';
import type { DailyPlan } from '@/domain/practice/daily';
import { formatNumber, t } from '@/i18n';
import { createDrill } from '@/storage/practice';
import { Study } from '../cards/CardStudyPage';
import { useDailyPlan, useDailySubjects, useTodaysDaily } from './useDaily';

/**
 * "Mai adag": one button for a 15-minute mixed session. A short card warm-up
 * comes first, then a round of due mistakes and weak-topic tasks from every
 * chosen subject, which runs in the usual practice round.
 */
export function DailyPage() {
  usePageTitle(t('practice.daily.title'));
  const today = useTodaysDaily();
  const [round, setRound] = useState(0);
  // Once started, the plan is kept as it was: answering cards changes the
  // schedule the plan is built from.
  const [running, setRunning] = useState<DailyPlan | null>(null);

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-surface/95 px-3 py-2 backdrop-blur">
        <Button asChild variant="ghost" size="icon" aria-label={t('practice.daily.exit')}>
          <Link to="/">
            <X aria-hidden="true" />
          </Link>
        </Button>
        <h1 className="min-w-0 flex-1 truncate font-semibold">{t('practice.daily.title')}</h1>
        {running && (
          <span className="text-sm font-medium text-muted">{t('practice.daily.stepCards')}</span>
        )}
      </header>
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-2xl flex-1 p-4 outline-none">
        {today === undefined ? (
          <Skeleton className="h-80" />
        ) : running ? (
          <CardsStep plan={running} />
        ) : today && !today.finishedAt && round === 0 ? (
          <Unfinished id={today.id} />
        ) : (
          <Overview
            key={round}
            finishedToday={!!today?.finishedAt}
            round={round}
            onStart={setRunning}
            onAnother={() => setRound((r) => r + 1)}
          />
        )}
      </main>
    </div>
  );
}

function useStartTasks() {
  const navigate = useNavigate();
  return async (plan: DailyPlan) => {
    if (plan.tasks.length === 0) {
      navigate('/', { replace: true });
      return;
    }
    const subjects = [...new Set(plan.tasks.map((task) => task.subject))];
    const id = await createDrill({
      kind: 'daily',
      subject: subjects[0]!,
      subjects,
      items: plan.tasks.map(({ examId, taskId }) => ({ examId, taskId })),
    });
    navigate(`/gyakorlas/kor/${id}`, { replace: true });
  };
}

function CardsStep({ plan }: { plan: DailyPlan }) {
  const startTasks = useStartTasks();
  return (
    <Study
      session={{ queue: plan.cards, extra: false }}
      back="/"
      onRestart={() => undefined}
      onFinish={() => void startTasks(plan)}
    />
  );
}

function Unfinished({ id }: { id: string }) {
  return (
    <EmptyState
      icon={<Play />}
      title={t('practice.daily.unfinishedTitle')}
      description={t('practice.daily.unfinishedBody')}
      action={
        <Button asChild size="lg">
          <Link to={`/gyakorlas/kor/${id}`}>
            <Play aria-hidden="true" />
            {t('practice.daily.continue')}
          </Link>
        </Button>
      }
    />
  );
}

function Overview({
  finishedToday,
  round,
  onStart,
  onAnother,
}: {
  finishedToday: boolean;
  round: number;
  onStart: (plan: DailyPlan) => void;
  onAnother: () => void;
}) {
  const subjects = useDailySubjects();
  const plan = useDailyPlan(subjects, round);
  const startTasks = useStartTasks();

  if (finishedToday && round === 0) {
    return (
      <EmptyState
        icon={<CalendarCheck />}
        title={t('practice.daily.doneTodayTitle')}
        description={t('practice.daily.doneTodayBody')}
        action={
          <div className="flex flex-wrap justify-center gap-2">
            <Button onClick={onAnother}>
              <RotateCcw aria-hidden="true" />
              {t('practice.daily.another')}
            </Button>
            <Button asChild variant="secondary">
              <Link to="/">{t('practice.daily.home')}</Link>
            </Button>
          </div>
        }
      />
    );
  }
  if (!plan) {
    return (
      <div aria-busy="true" className="grid gap-4">
        <p className="sr-only">{t('common.loading')}</p>
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-48" />
      </div>
    );
  }
  if (plan.cards.length === 0 && plan.tasks.length === 0) {
    return (
      <EmptyState
        icon={<Sparkles />}
        title={t('practice.daily.emptyTitle')}
        description={t('practice.daily.emptyBody')}
        action={
          <Button asChild>
            <Link to="/feladatsorok">{t('practice.daily.browse')}</Link>
          </Button>
        }
      />
    );
  }

  const reviews = plan.tasks.filter((task) => task.reason === 'review').length;
  const weak = plan.tasks.filter((task) => task.reason === 'weak').length;
  const others = plan.tasks.length - reviews - weak;
  const names = [...new Set(plan.tasks.map((task) => task.subject))].map(
    (id) => findSubject(id)?.name ?? id,
  );
  const start = () => {
    if (plan.cards.length > 0) onStart(plan);
    else void startTasks(plan);
  };

  return (
    <section
      aria-labelledby="daily-title"
      className="grid animate-rise-in gap-5 rounded-xl border border-border bg-surface p-5 shadow-2 sm:p-6"
    >
      <div>
        <h2 id="daily-title" className="text-2xl font-bold">
          {t('practice.daily.heading', { minutes: formatNumber(Math.max(5, plan.minutes)) })}
        </h2>
        <p className="mt-1 text-muted">{t('practice.daily.intro')}</p>
      </div>
      <ol className="grid stagger gap-3">
        {plan.cards.length > 0 && (
          <Step
            icon={<Layers />}
            title={t('practice.daily.cardsStep', { count: plan.cards.length })}
            body={t('practice.daily.cardsBody')}
          />
        )}
        {reviews > 0 && (
          <Step
            icon={<RotateCcw />}
            title={t('practice.daily.reviewStep', { count: reviews })}
            body={t('practice.daily.reviewBody')}
          />
        )}
        {weak > 0 && (
          <Step
            icon={<Target />}
            title={t('practice.daily.weakStep', { count: weak })}
            body={t('practice.daily.weakBody')}
          />
        )}
        {others > 0 && (
          <Step
            icon={<ListChecks />}
            title={t('practice.daily.mixedStep', { count: others })}
            body={t('practice.daily.mixedBody')}
          />
        )}
      </ol>
      {names.length > 0 && (
        <p className="text-sm text-muted">
          {t('practice.daily.subjects', { subjects: names.join(', ') })}
        </p>
      )}
      <Button size="lg" onClick={start}>
        <Play aria-hidden="true" />
        {t('practice.daily.start')}
      </Button>
      <p className="text-xs text-muted">{t('practice.daily.why')}</p>
    </section>
  );
}

function Step({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <li className="flex gap-3 rounded-lg bg-surface-muted p-3">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary-soft-fg [&_svg]:size-5"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-semibold">{title}</span>
        <span className="text-sm text-muted">{body}</span>
      </span>
    </li>
  );
}
