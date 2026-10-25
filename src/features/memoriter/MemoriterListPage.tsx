import { BookHeart, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { MEMORITEREK } from '@/content/memoriter/poems';
import type { Memoriter } from '@/content/memoriter/types';
import { Badge } from '@/design/ui/Badge';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { formatNumber, t } from '@/i18n';
import { BackLink } from '@/features/practice/BackLink';
import type { MemoriterProgressRow } from '@/storage/db';
import { useMemoriterProgress } from '@/storage/memoriter';
import { lineCount } from './poem';

type Filter = 'mind' | '9-10' | '11-12';
const GRADES: Memoriter['grade'][] = ['9-10', '11-12'];

export function MemoriterListPage() {
  usePageTitle(t('memoriter.title'));
  const [params, setParams] = useSearchParams();
  const filter: Filter =
    (['9-10', '11-12'] as const).find((g) => g === params.get('evf')) ?? 'mind';
  const progress = useMemoriterProgress();
  const known = MEMORITEREK.filter((p) => progress?.get(p.id)?.known).length;

  return (
    <>
      <BackLink />
      <PageHeader title={t('memoriter.title')} description={t('memoriter.intro')} />
      <div className="mb-6 grid gap-3">
        <SegmentedControl<Filter>
          label={t('memoriter.filter')}
          value={filter}
          onValueChange={(value) =>
            setParams(value === 'mind' ? {} : { evf: value }, { replace: true })
          }
          options={[
            { value: 'mind', label: t('memoriter.all') },
            { value: '9-10', label: t('memoriter.grade', { grade: '9–10.' }) },
            { value: '11-12', label: t('memoriter.grade', { grade: '11–12.' }) },
          ]}
        />
        <p className="text-sm font-medium" aria-live="polite">
          {t('memoriter.knownCount', {
            known: formatNumber(known),
            total: formatNumber(MEMORITEREK.length),
          })}
        </p>
      </div>
      <div className="grid gap-8">
        {GRADES.filter((g) => filter === 'mind' || filter === g).map((grade) => (
          <section key={grade} aria-labelledby={`grade-${grade}`}>
            <h2 id={`grade-${grade}`} className="mb-3 text-lg font-bold">
              {t('memoriter.grade', { grade: grade.replace('-', '–') + '.' })}
            </h2>
            <ol className="grid gap-2">
              {MEMORITEREK.filter((p) => p.grade === grade).map((poem) => (
                <PoemRow key={poem.id} poem={poem} row={progress?.get(poem.id)} />
              ))}
            </ol>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">{t('memoriter.sourceNote')}</p>
    </>
  );
}

function PoemRow({ poem, row }: { poem: Memoriter; row?: MemoriterProgressRow }) {
  return (
    <li>
      <Link
        to={`/gyakorlas/memoriterek/${poem.id}`}
        className="group flex items-center gap-3 rounded-lg border border-border bg-surface p-3 shadow-1 hover:border-border-strong hover:bg-surface-muted"
      >
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
        >
          {row?.known ? <CheckCircle2 className="size-5" /> : <BookHeart className="size-5" />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm text-muted">{poem.author}</span>
          <span className="block font-semibold [overflow-wrap:anywhere]">{poem.title}</span>
          <span className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
            {poem.part && <Badge tone="info">{poem.part}</Badge>}
            <span>{t('memoriter.lines', { count: formatNumber(lineCount(poem)) })}</span>
            {row?.known && <Badge tone="success">{t('memoriter.known')}</Badge>}
            {row?.bestScore !== undefined && !row.known && (
              <span>{t('memoriter.best', { score: formatNumber(row.bestScore) })}</span>
            )}
          </span>
        </span>
        <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-muted" />
      </Link>
    </li>
  );
}
