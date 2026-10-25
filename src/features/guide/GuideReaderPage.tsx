import { ArrowLeft, ArrowRight, Bug, CheckCircle2, Clock, ExternalLink, Info } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { NotFoundPage } from '@/app/ErrorScreens';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject } from '@/content/catalog';
import {
  blockFits,
  findGuidePage,
  neighbours,
  visibleBlocks,
  type GuidePage,
  type GuideUnit,
  type LevelView,
} from '@/content/guide';
import { reportBugUrl } from '@/content/report';
import { Button } from '@/design/ui/Button';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { t } from '@/i18n';
import { useGuideProgress, markGuideRead } from '@/storage/guide';
import { ExamTasks } from './ExamTasks';
import { GuideBlocks, SectionTitle } from './GuideBlocks';
import { LevelBadge } from './GuideHubPage';
import { GuideQuiz } from './GuideQuiz';
import { useLevelView } from './useLevelView';

type Depth = 'gyorsan' | 'reszletesen' | 'vizsgan';
const DEPTHS: Depth[] = ['gyorsan', 'reszletesen', 'vizsgan'];

export function GuideReaderPage() {
  const { pageId = '' } = useParams();
  const found = findGuidePage(pageId);
  if (!found) return <NotFoundPage />;
  return <Reader key={pageId} unit={found.unit} page={found.page} />;
}

function hasEmeltContent(page: GuidePage): boolean {
  const blocks = [...page.summary, ...page.details, ...page.exam];
  return (
    page.level !== 'kozep' ||
    blocks.some(
      (b) =>
        b.emelt ||
        ('items' in b &&
          Array.isArray(b.items) &&
          b.items.some((i) => typeof i === 'object' && i.emelt)),
    ) ||
    page.quiz.some((q) => q.emelt)
  );
}

function Reader({ unit, page }: { unit: GuideUnit; page: GuidePage }) {
  usePageTitle(page.title);
  const [params, setParams] = useSearchParams();
  const [view, setView] = useLevelView(page.subject);
  const depth: Depth = DEPTHS.find((d) => d === params.get('resz')) ?? 'gyorsan';
  const progress = useGuideProgress();
  const read = !!progress?.get(page.id)?.readAt;
  const { previous, next } = neighbours(page.id, view);
  const blocks =
    depth === 'gyorsan' ? page.summary : depth === 'reszletesen' ? page.details : page.exam;
  const quiz = page.quiz.filter((q) => blockFits(q, view));

  // Reading the details (or the exam notes) counts as having read the page.
  useEffect(() => {
    if (depth !== 'gyorsan' && !read && progress) void markGuideRead(page.id);
  }, [depth, read, progress, page.id]);

  const setDepth = (next: Depth) =>
    setParams(
      (current) => {
        const copy = new URLSearchParams(current);
        copy.set('resz', next);
        return copy;
      },
      { replace: true },
    );
  const pageLink = (target: GuidePage) => `/tananyag/${target.id}?szint=${view}`;
  // Emelt-only page opened at középszint: show it, but say so.
  const emeltPageForKozep = page.level === 'emelt' && view === 'kozep';

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to={`/tananyag?targy=${page.subject}&szint=${view}`}
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {t('guide.back')}
      </Link>
      <p className="text-sm font-medium text-muted">
        {findSubject(page.subject)?.name} · {unit.title}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight [overflow-wrap:anywhere] sm:text-4xl">
        {page.title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
        <LevelBadge page={page} />
        <span className="inline-flex items-center gap-1">
          <Clock aria-hidden="true" className="size-3.5" />
          {t('guide.minutes', { minutes: page.minutes })}
        </span>
        {read && (
          <span className="inline-flex items-center gap-1 text-success">
            <CheckCircle2 aria-hidden="true" className="size-4" />
            {t('guide.read')}
          </span>
        )}
      </div>

      <div className="mt-4 rounded-lg border border-border bg-surface-muted p-3 text-sm">
        <p className="font-semibold">{t('guide.requirement')}</p>
        {page.requirement.kozep && (
          <p className="mt-1">
            <span className="font-medium">{t('guide.levelKozep')}:</span> {page.requirement.kozep}
          </p>
        )}
        {page.requirement.emelt && (
          <p className="mt-1 italic">
            <span className="font-medium not-italic">{t('guide.levelEmeltView')}:</span>{' '}
            {page.requirement.emelt}
          </p>
        )}
      </div>

      {emeltPageForKozep && (
        <p className="mt-3 flex gap-2 rounded-md border border-info/40 bg-info-soft p-3 text-sm">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-info" />
          {t('guide.emeltPageNotice')}
        </p>
      )}

      {hasEmeltContent(page) && !emeltPageForKozep && (
        <SegmentedControl<LevelView>
          className="mt-5"
          label={t('guide.level')}
          value={view}
          onValueChange={setView}
          options={[
            { value: 'kozep', label: t('guide.levelKozep') },
            { value: 'emelt', label: t('guide.levelEmeltView') },
          ]}
        />
      )}

      {/* Below the phone header (which is sticky too); the depth stays at hand while reading. */}
      <div className="sticky top-[4.25rem] z-10 -mx-4 mt-3 border-b border-border bg-bg/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 md:top-0">
        <SegmentedControl<Depth>
          label={t('guide.depth')}
          value={depth}
          onValueChange={setDepth}
          options={DEPTHS.map((d) => ({ value: d, label: t(`guide.depths.${d}`) }))}
        />
      </div>

      <section aria-label={t(`guide.depths.${depth}`)} className="mt-5">
        <GuideBlocks blocks={visibleBlocks(blocks, emeltPageForKozep ? 'emelt' : view)} />
        {depth === 'gyorsan' && (
          <Button variant="secondary" className="mt-5" onClick={() => setDepth('reszletesen')}>
            {t('guide.toDetails')}
            <ArrowRight aria-hidden="true" />
          </Button>
        )}
      </section>

      <section aria-labelledby="guide-quiz" className="mt-10">
        <SectionTitle>
          <span id="guide-quiz">{t('guide.quiz.title')}</span>
        </SectionTitle>
        <p className="mb-4 text-muted">{t('guide.quiz.intro')}</p>
        <GuideQuiz key={view} pageId={page.id} questions={emeltPageForKozep ? page.quiz : quiz} />
      </section>

      <section aria-labelledby="guide-practice" className="mt-10">
        <SectionTitle>
          <span id="guide-practice">{t('guide.tasks.title')}</span>
        </SectionTitle>
        <ExamTasks page={page} view={emeltPageForKozep ? 'emelt' : view} />
      </section>

      {!read && (
        <Button variant="ghost" className="mt-6" onClick={() => void markGuideRead(page.id)}>
          <CheckCircle2 aria-hidden="true" />
          {t('guide.markRead')}
        </Button>
      )}

      <nav aria-label={t('guide.pageNav')} className="mt-8 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link
            to={pageLink(previous)}
            className="rounded-lg border border-border p-3 hover:bg-surface-muted"
          >
            <span className="block text-sm text-muted">{t('guide.previous')}</span>
            <span className="font-semibold">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={pageLink(next)}
            className="rounded-lg border border-border p-3 text-right hover:bg-surface-muted"
          >
            <span className="block text-sm text-muted">{t('guide.next')}</span>
            <span className="font-semibold">{next.title}</span>
          </Link>
        )}
      </nav>

      <footer className="mt-10 grid gap-3 border-t border-border pt-6 text-sm text-muted">
        <p className="flex gap-2">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {t('guide.draftNotice')}
        </p>
        {page.sources.length > 0 && (
          <div>
            <p className="font-semibold text-text">{t('guide.sources')}</p>
            <ul className="mt-1 grid gap-1">
              {page.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary underline underline-offset-4"
                  >
                    {source.label}
                    <ExternalLink aria-hidden="true" className="size-3.5" />
                    <span className="sr-only"> {t('common.newTab')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <a
          href={reportBugUrl(`Tananyag: ${page.id}`)}
          className="inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4"
        >
          <Bug aria-hidden="true" className="size-4" />
          {t('guide.report')}
        </a>
      </footer>
    </article>
  );
}
