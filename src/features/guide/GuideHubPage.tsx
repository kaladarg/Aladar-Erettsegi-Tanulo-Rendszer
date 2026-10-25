import { BookOpen, CheckCircle2, ChevronRight, Clock, Info } from 'lucide-react';
import { useSearchParams, Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject } from '@/content/catalog';
import {
  GUIDE_SUBJECTS,
  GUIDE_UNITS,
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
import { RequirementsPanel } from './RequirementsPanel';
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
    GUIDE_SUBJECTS.find((s) => s === params.get('targy')) ??
    GUIDE_SUBJECTS.find((s) => chosen.includes(s)) ??
    'tortenelem';
  const [view, setView] = useLevelView(subject);
  const progress = useGuideProgress();
  const units = GUIDE_UNITS.filter((unit) => unit.subject === subject);

  return (
    <>
      <PageHeader title={t('guide.title')} description={t('guide.intro')} />
      <div className="mb-6 grid gap-3">
        <SegmentedControl<GuideSubject>
          label={t('guide.subject')}
          value={subject}
          onValueChange={(value) => setParams({ targy: value }, { replace: true })}
          options={GUIDE_SUBJECTS.map((id) => ({ value: id, label: findSubject(id)?.name ?? id }))}
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

      <p className="mb-6 flex gap-2 rounded-md border border-info/40 bg-info-soft p-3 text-sm">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-info" />
        {t('guide.draftNotice')}
      </p>

      <div className="grid gap-6">
        {units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} view={view} progress={progress} />
        ))}
      </div>
    </>
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
