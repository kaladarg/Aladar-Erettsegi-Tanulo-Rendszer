import { BookOpen, CheckCircle2, ChevronRight, Clock, Info, Search } from 'lucide-react';
import { useDeferredValue, useId, useState } from 'react';
import { useSearchParams, Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject, subjectShortName } from '@/content/catalog';
import {
  GUIDE_SUBJECTS_WITH_UNITS as SUBJECTS_WITH_UNITS,
  pageFits,
  type GuidePage,
  type GuideSubject,
  type GuideUnit,
  type LevelView,
} from '@/content/guide';
import { Badge } from '@/design/ui/Badge';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { formatNumber, t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { useGuideProgress } from '@/storage/guide';
import type { GuideProgressRow } from '@/storage/db';
import { searchGuide } from '@/content/guide/search';
import { RequirementsPanel } from './RequirementsPanel';
import { useGuideUnits } from './useGuide';
import { useLevelView } from './useLevelView';

export function LevelBadge({ page }: { page: GuidePage }) {
  if (page.level === 'emelt') return <Badge tone="primary">{t('guide.levelEmelt')}</Badge>;
  if (page.level === 'both') return <Badge>{t('guide.levelBoth')}</Badge>;
  return <Badge tone="success">{t('guide.levelKozep')}</Badge>;
}

export function GuideHubPage() {
  usePageTitle(t('guide.title'));
  const chosen = useSettings((s) => s.settings.subjects);
  const [params, setParams] = useSearchParams();
  const subject: GuideSubject =
    SUBJECTS_WITH_UNITS.find((s) => s === params.get('targy')) ??
    SUBJECTS_WITH_UNITS.find((s) => chosen.includes(s)) ??
    'tortenelem';
  const [view, setView] = useLevelView(subject);
  const progress = useGuideProgress();
  const units = useGuideUnits(subject);
  const [query, setQuery] = useState('');
  const searching = query.trim().length >= 2;

  return (
    <>
      <PageHeader title={t('guide.title')} description={t('guide.intro')} />
      <div className="mb-6 grid gap-3">
        <SegmentedControl<GuideSubject>
          label={t('guide.subject')}
          value={subject}
          onValueChange={(value) => setParams({ targy: value }, { replace: true })}
          options={SUBJECTS_WITH_UNITS.map((id) => {
            const info = findSubject(id);
            return { value: id, label: info ? subjectShortName(info) : id };
          })}
        />
        <SegmentedControl<LevelView>
          label={t('guide.level')}
          value={view}
          onValueChange={setView}
          options={[
            { value: 'kozep', label: t('guide.levelKozep') },
            { value: 'emelt', label: t('guide.levelEmeltView') },
          ]}
        />
        <p className="text-sm text-muted">
          {view === 'emelt' ? t('guide.levelHintEmelt') : t('guide.levelHintKozep')}
        </p>
      </div>

      <GuideSearch query={query} onQuery={setQuery} view={view} />

      <p className="mb-6 flex gap-2 rounded-md border border-info/40 bg-info-soft p-3 text-sm">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-info" />
        {t('guide.draftNotice')}
      </p>

      {!searching && (
        <div className="grid gap-6">
          {units ? (
            units.map((unit) => (
              <UnitCard key={unit.id} unit={unit} view={view} progress={progress} />
            ))
          ) : (
            <p className="text-muted">{t('guide.loading')}</p>
          )}
        </div>
      )}
    </>
  );
}

/** Search across every subject's lessons; the units load the first time a student searches. */
function GuideSearch({
  query,
  onQuery,
  view,
}: {
  query: string;
  onQuery: (query: string) => void;
  view: LevelView;
}) {
  const id = useId();
  const deferred = useDeferredValue(query.trim());
  const active = deferred.length >= 2;
  const units = useGuideUnits(undefined, query.trim().length >= 2);
  const hits = active && units ? searchGuide(units, deferred, view) : [];
  return (
    <div className="mb-6">
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted"
        />
        <label htmlFor={id} className="sr-only">
          {t('guide.search.label')}
        </label>
        <input
          id={id}
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder={t('guide.search.placeholder')}
          className="min-h-11 w-full rounded-md border border-border-strong bg-surface pr-3 pl-9"
        />
      </div>
      {active && (
        <div className="mt-3">
          <p role="status" className="text-sm text-muted">
            {!units
              ? t('guide.loading')
              : hits.length
                ? t('guide.search.count', { count: formatNumber(hits.length) })
                : t('guide.search.none')}
          </p>
          <ol className="mt-2 grid gap-2">
            {hits.map(({ unit, page, snippet }) => (
              <li key={page.id}>
                <Link
                  to={`/tananyag/${page.id}?szint=${view}`}
                  className="block rounded-lg border border-border p-3 hover:border-border-strong hover:bg-surface-muted"
                >
                  <span className="block font-semibold [overflow-wrap:anywhere]">{page.title}</span>
                  <span className="block text-sm text-muted">
                    {subjectShortName(
                      findSubject(unit.subject) ?? { id: unit.subject, name: unit.subject },
                    )}
                    {' · '}
                    {unit.title}
                  </span>
                  <span className="mt-1 block text-sm [overflow-wrap:anywhere]">{snippet}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function UnitCard({
  unit,
  view,
  progress,
}: {
  unit: GuideUnit;
  view: LevelView;
  progress?: Map<string, GuideProgressRow>;
}) {
  const pages = unit.pages.filter((page) => pageFits(page, view));
  const read = pages.filter((page) => progress?.get(page.id)?.readAt).length;
  return (
    <section
      aria-labelledby={`unit-${unit.id}`}
      className="rounded-xl border border-border bg-surface p-4 shadow-1 sm:p-5"
    >
      <p className="text-sm font-medium text-muted">
        {t('guide.requirementRef', { ref: unit.requirementRef })}
      </p>
      <h2 id={`unit-${unit.id}`} className="mt-1 flex items-start gap-2 text-xl font-bold">
        <BookOpen aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
        {unit.title}
      </h2>
      <p className="mt-1 text-muted">{unit.intro}</p>
      <p className="mt-2 text-sm font-medium">
        {t('guide.unitProgress', { read: formatNumber(read), total: formatNumber(pages.length) })}
      </p>
      <ol className="mt-4 grid gap-2">
        {pages.map((page, index) => {
          const row = progress?.get(page.id);
          return (
            <li key={page.id}>
              <Link
                to={`/tananyag/${page.id}?szint=${view}`}
                className="group flex items-center gap-3 rounded-lg border border-border p-3 hover:border-border-strong hover:bg-surface-muted"
              >
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-sm font-bold tabular-nums"
                >
                  {row?.readAt ? <CheckCircle2 className="size-5 text-success" /> : index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold [overflow-wrap:anywhere]">{page.title}</span>
                  <span className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <LevelBadge page={page} />
                    <span className="inline-flex items-center gap-1">
                      <Clock aria-hidden="true" className="size-3.5" />
                      {t('guide.minutes', { minutes: page.minutes })}
                    </span>
                    {row?.quizTotal ? (
                      <span>
                        {t('guide.quizBest', {
                          correct: formatNumber(row.quizCorrect ?? 0),
                          total: formatNumber(row.quizTotal),
                        })}
                      </span>
                    ) : null}
                    {row?.readAt && <span className="sr-only">{t('guide.read')}</span>}
                  </span>
                </span>
                <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-muted" />
              </Link>
            </li>
          );
        })}
      </ol>
      {unit.requirements && (
        <RequirementsPanel
          requirements={unit.requirements}
          view={view}
          source={unit.requirementSource}
        />
      )}
      {!unit.requirements && <p className="mt-4 text-sm text-muted">{unit.requirementSource}</p>}
    </section>
  );
}
