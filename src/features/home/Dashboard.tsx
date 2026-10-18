import {
  BarChart3,
  ChevronRight,
  ClipboardCheck,
  Flame,
  Play,
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
import { recentDays, recommendations, streak, type Recommendation } from '@/domain/stats/stats';
import { formatDate, formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { useBackfillSummaries, useStatsData } from '../stats/useStatsData';

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
          to={`/feladatsorok/${rec.stat.examId}`}
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

/** Home page overview: unfinished papers, what to do next, and the practice streak. */
export function Dashboard() {
  const data = useStatsData();
  const { state } = useManifest();
  const manifest = state.status === 'ready' ? state.data : null;
  useBackfillSummaries(data?.attempts, manifest);
  const subjects = useSettings((s) => s.settings.subjects);
  if (!data) return null;

  const exams = manifest?.manifest.exams ?? [];
  const open = data.attempts
    .filter((a) => !a.submittedAt)
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 3);
  const next = recommendations(data.attempts, exams, subjects);
  const days = streak(data.days);
  const week = recentDays(data.days);

  return (
    <div className="mb-10 grid gap-6 lg:grid-cols-2">
      {open.length > 0 && (
        <Card aria-labelledby="dash-continue" className="lg:col-span-2">
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
                      mode:
                        attempt.mode === 'exam' ? t('results.modeExam') : t('results.modePractice'),
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
      )}

      <Card aria-labelledby="dash-next">
        <CardTitle id="dash-next" className="flex items-center gap-2">
          <Target aria-hidden="true" className="size-5 text-primary" />
          {t('dashboard.recommendedTitle')}
        </CardTitle>
        {next.length > 0 ? (
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
