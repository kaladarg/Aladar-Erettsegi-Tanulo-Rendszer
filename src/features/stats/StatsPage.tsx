import { BarChart3, ClipboardCheck, ExternalLink, RotateCcw } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_SUBJECTS, findSubject } from '@/content/catalog';
import { examFullTitle } from '@/content/labels';
import { useManifest } from '@/content/useContent';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import {
  latestPerExam,
  mistakeStats,
  progressSeries,
  scoredAttempts,
  streak,
  strongTopics,
  topicStats,
  typeStats,
  weakTopics,
  type MistakeStats,
  type TopicStat,
} from '@/domain/stats/stats';
import { resourcesFor, siteSearchUrl } from '@/help/resources';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { ProgressChart } from './ProgressChart';
import { useBackfillSummaries, useStatsData } from './useStatsData';

const percent = (ratio: number) => formatNumber(Math.round(ratio * 100));

function Bar({ ratio, tone }: { ratio: number; tone: 'weak' | 'strong' | 'neutral' }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-surface-muted" aria-hidden="true">
      <div
        className={cn(
          'h-full rounded-full',
          tone === 'weak' ? 'bg-warning' : tone === 'strong' ? 'bg-success' : 'bg-primary',
        )}
        style={{ width: `${Math.max(2, Math.min(100, ratio * 100))}%` }}
      />
    </div>
  );
}

function TopicList({ stats, tone }: { stats: TopicStat[]; tone: 'weak' | 'strong' }) {
  return (
    <ul className="grid gap-4">
      {stats.map((stat) => {
        const sites = resourcesFor(stat.subject)
          .filter((site) => site.searchDomain)
          .slice(0, 2);
        return (
          <li key={`${stat.subject}|${stat.topic}`} className="grid gap-1.5">
            <p className="flex justify-between gap-3">
              <span className="font-medium">{stat.topic}</span>
              <span className="shrink-0 font-semibold tabular-nums">
                {t('stats.topicPercent', { percent: percent(stat.ratio) })}
              </span>
            </p>
            <Bar ratio={stat.ratio} tone={tone} />
            <p className="text-sm text-muted">
              {findSubject(stat.subject)?.name} ·{' '}
              {t('stats.topicLine', {
                points: stat.points,
                max: stat.maxPoints,
                count: stat.tasks,
              })}
            </p>
            {tone === 'weak' && (
              <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <Link
                  to={`/feladatsorok/${stat.examId}`}
                  className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4"
                >
                  <RotateCcw aria-hidden="true" className="size-3.5" />
                  {t('stats.practiseAgain')}
                </Link>
                {sites.map((site) => (
                  <a
                    key={site.id}
                    href={siteSearchUrl(site.searchDomain!, stat.topic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4"
                  >
                    {t('stats.searchOn', { site: t(`help.resources.${site.id}.name`) })}
                    <ExternalLink aria-hidden="true" className="size-3.5" />
                    <span className="sr-only"> {t('common.newTab')}</span>
                  </a>
                ))}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Mistakes({ stats }: { stats: MistakeStats }) {
  const rows: { key: keyof MistakeStats; label: string }[] = [
    { key: 'correct', label: t('stats.mistakeCorrect') },
    { key: 'partial', label: t('stats.mistakePartial') },
    { key: 'wrong', label: t('stats.mistakeWrong') },
    { key: 'empty', label: t('stats.mistakeEmpty') },
    { key: 'helped', label: t('stats.mistakeHelped') },
  ];
  // The most frequent kind of lost points gets a tip, if it is a real pattern.
  const worst = (['empty', 'partial', 'wrong'] as const)
    .filter((key) => stats[key] >= 2 && stats[key] / stats.tasks >= 0.2)
    .sort((a, b) => stats[b] - stats[a])[0];
  return (
    <div className="grid gap-3">
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {rows.map((row) => (
          <div key={row.key} className="rounded-md bg-surface-muted p-3">
            <dt className="text-sm text-muted">{row.label}</dt>
            <dd className="text-2xl font-semibold tabular-nums">{formatNumber(stats[row.key])}</dd>
          </div>
        ))}
      </dl>
      {worst && (
        <p className="rounded-md bg-primary-soft/50 p-3 text-sm">
          {t(`stats.mistakeTip.${worst}`)}
        </p>
      )}
    </div>
  );
}

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Card aria-labelledby={id}>
      <CardTitle id={id}>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      <div className="mt-4">{children}</div>
    </Card>
  );
}

export function StatsPage() {
  usePageTitle(t('stats.title'));
  const data = useStatsData();
  const { state } = useManifest();
  const manifest = state.status === 'ready' ? state.data : null;
  useBackfillSummaries(data?.attempts, manifest);
  const [subject, setSubject] = useState('all');

  const header = <PageHeader title={t('stats.title')} description={t('stats.intro')} />;
  if (!data) {
    return (
      <>
        {header}
        <div aria-busy="true" className="grid gap-4">
          <Skeleton className="h-24" />
          <Skeleton className="h-64" />
        </div>
      </>
    );
  }

  const allScored = scoredAttempts(data.attempts);
  if (allScored.length === 0) {
    return (
      <>
        {header}
        <EmptyState
          icon={<BarChart3 />}
          title={t('stats.emptyTitle')}
          description={t('stats.emptyBody')}
          action={
            <Button asChild>
              <Link to="/feladatsorok">{t('stats.emptyAction')}</Link>
            </Button>
          }
        />
      </>
    );
  }

  const subjects = DEFAULT_SUBJECTS.filter((s) =>
    allScored.some((a) => (a.result.subject ?? a.examId.split('-')[0]) === s.id),
  );
  const scored = scoredAttempts(data.attempts, subject === 'all' ? undefined : subject);
  const latest = latestPerExam(scored);
  const topics = topicStats(scored);
  const weak = weakTopics(topics);
  const strong = strongTopics(topics);
  const mistakes = mistakeStats(scored);
  const types = typeStats(scored);
  const pending = latest.filter((a) => a.result.pendingPoints);
  const older = scored.some((a) => !a.result.tasks);
  const average =
    latest.reduce((sum, a) => sum + a.result.points / a.result.maxPoints, 0) / (latest.length || 1);
  const days = streak(data.days);
  const examTitle = (examId: string) => {
    const entry = manifest?.manifest.exams.find((e) => e.id === examId);
    return entry ? examFullTitle(entry) : examId;
  };

  return (
    <>
      {header}
      {subjects.length > 1 && (
        <SegmentedControl
          label={t('stats.subjectFilter')}
          value={subject}
          onValueChange={setSubject}
          options={[
            { value: 'all', label: t('stats.allSubjects') },
            ...subjects.map((s) => ({ value: s.id, label: s.name })),
          ]}
          className="mb-6"
        />
      )}

      <div className="grid gap-6">
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { label: t('stats.submitted'), value: formatNumber(scored.length) },
            { label: t('stats.latestAverage'), value: `${percent(average)}%` },
            { label: t('stats.tasksMarked'), value: formatNumber(mistakes.tasks) },
            { label: t('stats.streak'), value: t('stats.streakDays', { count: days.current }) },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-surface p-4 shadow-1"
            >
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">{item.value}</dd>
            </div>
          ))}
        </dl>

        {pending.length > 0 && (
          <Section
            id="stats-pending"
            title={t('stats.pendingTitle')}
            description={t('stats.pendingBody')}
          >
            <ul className="grid gap-2">
              {pending.map((attempt) => (
                <li key={attempt.id} className="flex flex-wrap items-center justify-between gap-3">
                  <span>
                    {t('stats.pendingItem', {
                      exam: examTitle(attempt.examId),
                      points: attempt.result.pendingPoints ?? 0,
                    })}
                  </span>
                  <Button asChild size="sm" variant="secondary">
                    <Link to={`/feladatsorok/${attempt.examId}/eredmeny/${attempt.id}`}>
                      <ClipboardCheck aria-hidden="true" />
                      {t('stats.pendingOpen')}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section
          id="stats-progress"
          title={t('stats.progressTitle')}
          description={t('stats.progressBody')}
        >
          <ProgressChart points={progressSeries(scored)} examTitle={examTitle} />
        </Section>

        <div className="grid gap-6 lg:grid-cols-2">
          <Section id="stats-weak" title={t('stats.weakTitle')} description={t('stats.weakBody')}>
            {weak.length > 0 ? (
              <TopicList stats={weak} tone="weak" />
            ) : (
              <p className="text-muted">{t('stats.weakNone')}</p>
            )}
          </Section>
          <Section id="stats-strong" title={t('stats.strongTitle')}>
            {strong.length > 0 ? (
              <TopicList stats={strong} tone="strong" />
            ) : (
              <p className="text-muted">{t('stats.strongNone')}</p>
            )}
          </Section>
        </div>

        {mistakes.tasks > 0 && (
          <Section
            id="stats-mistakes"
            title={t('stats.mistakesTitle')}
            description={t('stats.mistakesBody')}
          >
            <Mistakes stats={mistakes} />
            <h3 className="mt-6 mb-3 font-semibold">{t('stats.byTypeTitle')}</h3>
            <ul className="grid gap-3">
              {types.map((type) => (
                <li key={type.type} className="grid gap-1.5">
                  <p className="flex justify-between gap-3 text-sm">
                    <span className="font-medium">{t(`taskType.${type.type}`)}</span>
                    <span className="tabular-nums">
                      {percent(type.ratio)}% ·{' '}
                      {t('stats.topicLine', {
                        points: type.points,
                        max: type.maxPoints,
                        count: type.tasks,
                      })}
                    </span>
                  </p>
                  <Bar ratio={type.ratio} tone="neutral" />
                </li>
              ))}
            </ul>
          </Section>
        )}

        {older && <p className="text-sm text-muted">{t('stats.olderNote')}</p>}
      </div>
    </>
  );
}
