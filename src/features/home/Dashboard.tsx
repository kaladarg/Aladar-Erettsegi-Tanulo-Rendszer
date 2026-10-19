import {
  BarChart3,
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  Flame,
  Play,
  RotateCcw,
  Sparkles,
  Target,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { findSubject } from '@/content/catalog';
import { examDisplayTitle, examFullTitle } from '@/content/labels';
import type { ExamEntry } from '@/content/schema.types';
import { useManifest } from '@/content/useContent';
import { Button } from '@/design/ui/Button';
import { Card, CardTitle } from '@/design/ui/Card';
import { Skeleton } from '@/design/ui/Skeleton';
import { dueCards } from '@/domain/practice/review';
import { recentDays, recommendations, streak, type Recommendation } from '@/domain/stats/stats';
import { formatDate, formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { usePlan } from '../practice/usePlan';
import { useReviewCards } from '../practice/useReviewCards';
import { useBackfillSummaries, type StatsData } from '../stats/useStatsData';

function examName(entry: ExamEntry | undefined, examId: string): string {
  return entry ? examFullTitle(entry) : examId;
}

function ActionRow({
  to,
  icon,
  title,
  body,
}: {
  to: string;
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li>
      <Link
        to={to}
        className="group -mx-2 flex items-center gap-3 rounded-md p-2 hover:bg-surface-muted"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary-soft-fg [&_svg]:size-4">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block font-medium">{title}</span>
          <span className="block text-sm text-muted">{body}</span>
        </span>
        <ChevronRight
          aria-hidden="true"
          className="ml-auto size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </li>
  );
}

function recommendationRow(rec: Recommendation, exams: ExamEntry[]) {
  const find = (id: string) => exams.find((e) => e.id === id);
  switch (rec.kind) {
    case 'review':
      return (
        <ActionRow
          key={`review-${rec.attemptId}`}
          to={`/feladatsorok/${rec.examId}/eredmeny/${rec.attemptId}`}
          icon={<ClipboardCheck aria-hidden="true" />}
          title={t('dashboard.recommendReview', { exam: examName(find(rec.examId), rec.examId) })}
          body={t('dashboard.recommendReviewBody', { points: rec.pendingPoints })}
        />
      );
    case 'topic':
      return (
        <ActionRow
          key={`topic-${rec.stat.subject}-${rec.stat.topic}`}
          to={`/gyakorlas/temakorok?targy=${rec.stat.subject}&tema=${encodeURIComponent(rec.stat.topic)}`}
          icon={<Target aria-hidden="true" />}
          title={t('dashboard.recommendTopic', { topic: rec.stat.topic })}
          body={t('dashboard.recommendTopicBody', {
            subject: findSubject(rec.stat.subject)?.name ?? rec.stat.subject,
            percent: formatNumber(Math.round(rec.stat.ratio * 100)),
          })}
        />
      );
    case 'newExam':
      return (
        <ActionRow
          key={`new-${rec.entry.id}`}
          to={`/feladatsorok/${rec.entry.id}`}
          icon={<Sparkles aria-hidden="true" />}
          title={t('dashboard.recommendNewExam', { exam: examDisplayTitle(rec.entry) })}
          body={t('dashboard.recommendNewExamBody', {
            subject: findSubject(rec.entry.subject)?.name ?? rec.entry.subject,
          })}
        />
      );
  }
}

/** Home page: what to do next and the practice streak. */
export function Dashboard({ data }: { data: StatsData }) {
  const { state } = useManifest();
  const manifest = state.status === 'ready' ? state.data : null;
  useBackfillSummaries(data?.attempts, manifest);
  const subjects = useSettings((s) => s.settings.subjects);

  const exams = manifest?.manifest.exams ?? [];
  const next = recommendations(data.attempts, exams, subjects);
  const days = streak(data.days);
  const week = recentDays(data.days);

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <CountdownCard />
      <Card aria-labelledby="dash-next">
        <CardTitle id="dash-next" className="flex items-center gap-2">
          <Target aria-hidden="true" className="size-5 text-primary" />
          {t('dashboard.recommendedTitle')}
        </CardTitle>
        {state.status === 'loading' ? (
          // Same height as the list, so the page does not jump when it arrives.
          <div className="mt-3 grid gap-1" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-20" />
            ))}
          </div>
        ) : next.length > 0 ? (
          <ul className="mt-3 grid gap-1">{next.map((rec) => recommendationRow(rec, exams))}</ul>
        ) : (
          <p className="mt-3 text-muted">{t('dashboard.recommendNone')}</p>
        )}
      </Card>

      <Card aria-labelledby="dash-streak">
        <CardTitle id="dash-streak" className="flex items-center gap-2">
          <Flame aria-hidden="true" className="size-5 text-warning" />
          {t('dashboard.streakTitle')}
        </CardTitle>
        <p className="mt-3 text-lg font-semibold">
          {days.current > 0
            ? t('dashboard.streakCurrent', { count: days.current })
            : t('dashboard.streakNone')}
        </p>
        {days.current > 0 && (
          <p className="text-sm text-muted">
            {days.today ? t('dashboard.streakToday') : t('dashboard.streakKeep')}
          </p>
        )}
        <h3 className="mt-4 text-sm font-semibold text-muted">{t('dashboard.streakWeek')}</h3>
        <ol className="mt-2 flex gap-2">
          {week.map(({ day, active }) => {
            const [y, m, d] = day.split('-').map(Number);
            const date = new Date(y!, m! - 1, d!);
            const label = formatDate(date, { weekday: 'long', month: 'long', day: 'numeric' });
            return (
              <li key={day} className="grid justify-items-center gap-1 text-xs text-muted">
                <span
                  className={cn(
                    'size-7 rounded-full border-2',
                    active ? 'border-primary bg-primary' : 'border-border-strong',
                  )}
                  role="img"
                  aria-label={t(active ? 'dashboard.dayActive' : 'dashboard.dayInactive', {
                    day: label,
                  })}
                />
                <span aria-hidden="true">{formatDate(date, { weekday: 'narrow' })}</span>
              </li>
            );
          })}
        </ol>
        {days.best > 1 && (
          <p className="mt-3 text-sm text-muted">
            {t('dashboard.streakBest', { count: days.best })}
          </p>
        )}
        <Link
          to="/statisztika"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline underline-offset-4"
        >
          <BarChart3 aria-hidden="true" className="size-4" />
          {t('dashboard.statsLink')}
        </Link>
      </Card>
    </div>
  );
}

/** Days left until the nearest written exam, and today's mistakes review. */
function CountdownCard() {
  const plans = usePlan();
  const cards = useReviewCards();
  const due = cards ? dueCards(cards).length : 0;
  const upcoming = plans?.slice(0, 3) ?? [];
  return (
    <Card aria-labelledby="dash-countdown" className="lg:col-span-2">
      <CardTitle id="dash-countdown" className="flex items-center gap-2">
        <CalendarDays aria-hidden="true" className="size-5 text-primary" />
        {t('practice.plan.countdownTitle')}
      </CardTitle>
      {plans === undefined ? (
        <Skeleton className="mt-3 h-12" />
      ) : upcoming.length === 0 ? (
        <p className="mt-3 text-muted">{t('practice.plan.countdownEmpty')}</p>
      ) : (
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
          {upcoming.map((plan) => (
            <li key={plan.subject} className="text-lg">
              <span className="font-semibold">
                {findSubject(plan.subject)?.name ?? plan.subject}:
              </span>{' '}
              <span className="tabular-nums">
                {plan.phase === 'day'
                  ? t('practice.plan.today')
                  : t('practice.plan.daysLeft', { days: formatNumber(plan.daysLeft) })}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-3">
        <Button asChild size="sm" variant="secondary">
          <Link to="/gyakorlas/terv">
            {upcoming.length === 0 ? t('practice.plan.setDates') : t('practice.plan.openPlan')}
            <ChevronRight aria-hidden="true" />
          </Link>
        </Button>
        {due > 0 && (
          <Button asChild size="sm">
            <Link to="/gyakorlas/hibaim">
              <RotateCcw aria-hidden="true" />
              {t('practice.hub.dueToday', { count: due })}
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}

/** Unfinished papers, shown first on the home page. */
export function ContinueCard({ data }: { data: StatsData }) {
  const { state } = useManifest();
  const exams = state.status === 'ready' ? state.data.manifest.exams : [];
  const open = data.attempts
    .filter((a) => !a.submittedAt)
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 3);
  if (open.length === 0) return null;
  return (
    <Card aria-labelledby="dash-continue" className="mb-10">
      <CardTitle id="dash-continue" className="flex items-center gap-2">
        <Play aria-hidden="true" className="size-5 text-primary" />
        {t('dashboard.continueTitle')}
      </CardTitle>
      <ul className="mt-4 grid gap-3">
        {open.map((attempt) => (
          <li
            key={attempt.id}
            className="flex flex-col gap-3 rounded-md border border-border p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="font-medium">
                {t('dashboard.continueItem', {
                  exam: examName(
                    exams.find((e) => e.id === attempt.examId),
                    attempt.examId,
                  ),
                  mode: attempt.mode === 'exam' ? t('results.modeExam') : t('results.modePractice'),
                })}
              </p>
              <p className="text-sm text-muted">
                {t('dashboard.continueUpdated', {
                  date: formatDate(attempt.updatedAt, {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  }),
                })}
              </p>
            </div>
            <Button asChild size="sm" className="shrink-0 self-start sm:self-auto">
              <Link
                to={`/feladatsorok/${attempt.examId}/${attempt.mode === 'exam' ? 'vizsga' : 'gyakorlas'}`}
              >
                <Play aria-hidden="true" />
                {t('dashboard.continueAction')}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
