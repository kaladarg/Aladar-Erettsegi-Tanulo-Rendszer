import { useLiveQuery } from 'dexie-react-hooks';
import { CheckCircle2, ChevronRight, PencilLine, Shuffle } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { examFullTitle } from '@/content/labels';
import { findSubject } from '@/content/catalog';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import { directives } from '@/domain/practice/essayOutline';
import { t } from '@/i18n';
import { db } from '@/storage/db';
import { outlineKey } from '@/storage/essays';
import { BackLink } from '../BackLink';
import { ESSAY_SUBJECTS, essayPath, useEssayTasks, type EssaySubject } from './useEssayTasks';

/** Essay tasks of the history and Hungarian papers, to plan one. */
export function EssayPickerPage() {
  usePageTitle(t('essay.title'));
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const subject: EssaySubject =
    ESSAY_SUBJECTS.find((s) => s === params.get('targy')) ?? 'tortenelem';
  const { tasks, loading } = useEssayTasks();
  const shown = tasks.filter((item) => item.exam.subject === subject);
  const outlines = useLiveQuery(() => db.essayOutlines.toArray(), []);
  // Compared once (it has ratings) counts as done, even when opened for editing again.
  const status = new Map(
    outlines?.map((o) => [o.key, o.compared || Object.keys(o.ratings).length > 0]),
  );

  const pickRandom = () => {
    const item = shown[Math.floor(Math.random() * shown.length)];
    if (item) void navigate(essayPath(item.exam.id, item.task.id));
  };

  return (
    <>
      <BackLink />
      <PageHeader title={t('essay.title')} description={t('essay.intro')} />

      <section
        aria-labelledby="essay-how"
        className="mb-8 rounded-lg bg-primary-soft p-5 text-primary-soft-fg"
      >
        <h2 id="essay-how" className="mb-3 font-bold">
          {t('essay.howTitle')}
        </h2>
        <ol className="grid gap-2 sm:grid-cols-3">
          {(['how1', 'how2', 'how3'] as const).map((key, index) => (
            <li key={key} className="flex gap-3">
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-fg"
              >
                {index + 1}
              </span>
              <span>{t(`essay.${key}`)}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <SegmentedControl
          label={t('essay.subjectLabel')}
          value={subject}
          options={ESSAY_SUBJECTS.map((id) => ({
            value: id,
            label: findSubject(id)?.name ?? id,
          }))}
          onValueChange={(value) => setParams({ targy: value }, { replace: true })}
        />
        <Button variant="secondary" onClick={pickRandom} disabled={shown.length === 0}>
          <Shuffle aria-hidden="true" />
          {t('essay.random')}
        </Button>
      </div>

      <section aria-labelledby="essay-list">
        <h2 id="essay-list" className="mb-3 text-xl font-bold">
          {t('essay.listTitle')}
        </h2>
        {loading && shown.length === 0 ? (
          <div className="grid gap-3" aria-busy="true" aria-label={t('essay.loading')}>
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
        ) : shown.length === 0 ? (
          <p className="text-muted">{t('essay.none')}</p>
        ) : (
          <ul className="grid gap-3">
            {shown.map(({ exam, entry, task, kind }) => {
              const compared = status.get(outlineKey(exam.id, task.id));
              const question = directives(task.text)[0] ?? '';
              return (
                <li key={`${exam.id}/${task.id}`}>
                  <Link
                    to={essayPath(exam.id, task.id)}
                    data-ripple=""
                    className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-1 transition-colors hover:border-border-strong"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-soft-fg [&_svg]:size-5"
                    >
                      {compared ? <CheckCircle2 /> : <PencilLine />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2 text-sm text-muted">
                        <Badge tone="primary">{t(`essay.kinds.${kind}`)}</Badge>
                        {examFullTitle(entry)} · {t('essay.taskLabel', { number: task.number })}
                        {compared !== undefined && (
                          <Badge tone={compared ? 'success' : 'warning'}>
                            {compared ? t('essay.statusCompared') : t('essay.statusStarted')}
                          </Badge>
                        )}
                      </span>
                      <span className="mt-1 line-clamp-2 block font-medium">{question}</span>
                    </span>
                    <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-muted" />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
