import { Footprints, Play, Search, Shuffle } from 'lucide-react';
import { useId, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_SUBJECTS, subjectShortName } from '@/content/catalog';
import { useExams } from '@/content/useExams';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import { findTask, topicIndex, topicKey, type TopicEntry } from '@/domain/practice/topics';
import { hasWorkedSolution } from '@/domain/practice/worked';
import { scoredAttempts, topicStats } from '@/domain/stats/stats';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { createDrill, randomMixedRound, randomRound, randomWorkedSeries } from '@/storage/practice';
import { useStatsData } from '../stats/useStatsData';
import { BackLink } from './BackLink';

const ROUND_SIZE = 10;
type Sort = 'common' | 'weak' | 'abc';

export function TopicsPage() {
  usePageTitle(t('practice.topics.title'));
  const chosen = useSettings((s) => s.settings.subjects);
  const [params, setParams] = useSearchParams();
  const subject =
    params.get('targy') ??
    chosen.find((s) => DEFAULT_SUBJECTS.some((d) => d.id === s)) ??
    'matematika';
  const subjects = useMemo(() => [subject], [subject]);
  const { exams, loading } = useExams(subjects);
  const stats = useStatsData();
  const [query, setQuery] = useState(params.get('tema') ?? '');
  const [sort, setSort] = useState<Sort>('common');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const searchId = useId();
  const navigate = useNavigate();

  const topics = useMemo(() => topicIndex([...exams.values()]), [exams]);
  const ratios = useMemo(() => {
    const map = new Map<string, number>();
    if (!stats) return map;
    for (const s of topicStats(scoredAttempts(stats.attempts, subject)))
      map.set(topicKey(s.topic), s.ratio);
    return map;
  }, [stats, subject]);

  const shown = topics
    .filter((topic) =>
      topic.name.toLocaleLowerCase('hu').includes(query.trim().toLocaleLowerCase('hu')),
    )
    .sort((a, b) =>
      sort === 'abc'
        ? a.name.localeCompare(b.name, 'hu')
        : sort === 'weak'
          ? (ratios.get(a.key) ?? 2) - (ratios.get(b.key) ?? 2)
          : 0,
    );

  const toggle = (key: string) =>
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  const picked = topics.filter((topic) => selected.has(topic.key));

  const startMixed = async () => {
    const pool = picked.length >= 2 ? picked : topics;
    const items = randomMixedRound(pool, ROUND_SIZE, ratios);
    const id = await createDrill({ kind: 'mixed', subject, items });
    navigate(`/gyakorlas/kor/${id}`);
  };

  const workedCandidates = (topic: TopicEntry) =>
    topic.tasks.flatMap((ref) => {
      const found = findTask(exams, ref);
      return found && hasWorkedSolution(found.task) ? [{ ref, ...found }] : [];
    });

  const startWorked = async (topic: TopicEntry) => {
    const series = randomWorkedSeries(workedCandidates(topic));
    const id = await createDrill({
      kind: 'worked',
      subject,
      topic: topic.name,
      items: series.map(({ examId, taskId }) => ({ examId, taskId })),
      hidden: series.map((item) => item.hidden),
    });
    navigate(`/gyakorlas/kor/${id}`);
  };

  const start = async (topic: TopicEntry) => {
    const items = randomRound(topic.tasks, ROUND_SIZE);
    const id = await createDrill({ kind: 'topic', subject, topic: topic.name, items });
    navigate(`/gyakorlas/kor/${id}`);
  };

  return (
    <>
      <BackLink />
      <PageHeader title={t('practice.topics.title')} description={t('practice.topics.intro')} />
      <div className="mb-6 grid gap-4">
        <SegmentedControl
          label={t('practice.topics.subject')}
          value={subject}
          onValueChange={(value) => {
            setSelected(new Set());
            setParams({ targy: value }, { replace: true });
          }}
          options={DEFAULT_SUBJECTS.map((s) => ({ value: s.id, label: subjectShortName(s) }))}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="grid flex-1 gap-1">
            <label htmlFor={searchId} className="text-sm font-medium">
              {t('practice.topics.search')}
            </label>
            <div className="relative">
              <Search aria-hidden="true" className="absolute top-3 left-3 size-5 text-muted" />
              <input
                id={searchId}
                type="search"
                value={query}
                placeholder={t('practice.topics.searchPlaceholder')}
                onChange={(event) => setQuery(event.target.value)}
                className="min-h-11 w-full rounded-md border border-border-strong bg-surface pr-3 pl-10"
              />
            </div>
          </div>
          <SegmentedControl<Sort>
            label={t('practice.topics.sortLabel')}
            value={sort}
            onValueChange={setSort}
            options={[
              { value: 'common', label: t('practice.topics.sortCommon') },
              { value: 'weak', label: t('practice.topics.sortWeak') },
              { value: 'abc', label: t('practice.topics.sortAbc') },
            ]}
          />
        </div>
      </div>

      {!loading && topics.length > 1 && (
        <Card aria-labelledby="topics-mixed" className="mb-6">
          <CardTitle id="topics-mixed" className="flex items-center gap-2">
            <Shuffle aria-hidden="true" className="size-5 text-primary" />
            {t('practice.topics.mixedTitle')}
          </CardTitle>
          <CardDescription>{t('practice.topics.mixedBody')}</CardDescription>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button onClick={() => void startMixed()}>
              <Shuffle aria-hidden="true" />
              {picked.length >= 2
                ? t('practice.topics.mixedSelected', { count: picked.length })
                : t('practice.topics.mixedAll')}
            </Button>
            {selected.size > 0 && (
              <Button variant="ghost" onClick={() => setSelected(new Set())}>
                {t('practice.topics.clearSelection')}
              </Button>
            )}
          </div>
          {picked.length < 2 && (
            <p className="mt-2 text-sm text-muted">{t('practice.topics.mixedPick')}</p>
          )}
        </Card>
      )}

      {loading ? (
        <div aria-busy="true" className="grid gap-3 sm:grid-cols-2">
          <p className="sr-only">{t('practice.topics.loading')}</p>
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      ) : shown.length === 0 ? (
        <p className="text-muted">{t('practice.topics.none')}</p>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {shown.map((topic) => {
            const ratio = ratios.get(topic.key);
            const worked = workedCandidates(topic).length;
            return (
              <li
                key={topic.key}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface p-4 shadow-1"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{topic.name}</p>
                  <p className="text-sm text-muted">
                    {t('practice.topics.count', {
                      count: topic.tasks.length,
                      points: topic.points,
                    })}
                  </p>
                  {ratio !== undefined && (
                    <p
                      className={cn(
                        'text-sm font-medium',
                        ratio < 0.6 ? 'text-warning' : ratio >= 0.8 ? 'text-success' : 'text-muted',
                      )}
                    >
                      {t(ratio < 0.6 ? 'practice.topics.weak' : 'practice.topics.strong', {
                        percent: formatNumber(Math.round(ratio * 100)),
                      })}
                    </p>
                  )}
                </div>
                <label className="flex shrink-0 cursor-pointer flex-col items-center gap-1 text-xs text-muted">
                  <input
                    type="checkbox"
                    className="size-5 accent-[var(--c-primary)]"
                    checked={selected.has(topic.key)}
                    aria-label={t('practice.topics.selectLabel', { topic: topic.name })}
                    onChange={() => toggle(topic.key)}
                  />
                  <span aria-hidden="true">{t('practice.topics.select')}</span>
                </label>
                <Button
                  size="sm"
                  className="shrink-0"
                  aria-label={t('practice.topics.startLabel', { topic: topic.name })}
                  onClick={() => void start(topic)}
                >
                  <Play aria-hidden="true" />
                  {t('practice.topics.start')}
                </Button>
                {worked > 0 && (
                  <div className="basis-full">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="-my-1 -ml-3"
                      aria-label={t('practice.worked.startLabel', { topic: topic.name })}
                      onClick={() => void startWorked(topic)}
                    >
                      <Footprints aria-hidden="true" />
                      {t('practice.worked.start')}
                    </Button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <p className="mt-6 text-sm text-muted">{t('practice.topics.essaysNote')}</p>
    </>
  );
}
