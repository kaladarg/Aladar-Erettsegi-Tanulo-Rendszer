import { ChevronRight, FileUp, Info, SearchX } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { subjectAccent, type SubjectInfo } from '@/content/catalog';
import { examDisplayTitle } from '@/content/labels';
import { storePdf } from '@/content/pdfImport';
import type { Exam, ExamEntry, Manifest } from '@/content/schema.types';
import { SubjectBadge, SubjectIcon } from '@/content/SubjectIcon';
import { useManifest } from '@/content/useContent';
import { useExams } from '@/content/useExams';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { Skeleton } from '@/design/ui/Skeleton';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { toast } from '@/state/toastStore';
import { useExamProgress, type ExamProgress } from '@/storage/progress';
import { ContentErrorState } from './ContentErrorState';
import { ProgressBadge } from './ProgressBadge';
import { usePdfPicker } from './usePdfPicker';

/** Query parameter names (Hungarian, they show up in shared links). */
const PARAM = { subject: 'targy', year: 'ev', session: 'idoszak' } as const;
/** `targy=mind`: every subject, even when the student chose their own. */
const ALL = 'mind';

/** Tasks (as numbered on the paper) with an answer, and in total. */
function taskCounts(exam: Exam, answered: Set<string>): { done: number; total: number } {
  const numbers = new Map<string, boolean>();
  for (const part of exam.parts)
    for (const task of part.tasks) {
      const number = task.group ?? task.number;
      const done = task.fields.some((field) => answered.has(field.id));
      numbers.set(number, (numbers.get(number) ?? false) || done);
    }
  return { done: [...numbers.values()].filter(Boolean).length, total: numbers.size };
}

export function ExamBrowserPage() {
  usePageTitle(t('exams.title'));
  const { state, retry } = useManifest();

  return (
    <>
      <PageHeader
        title={t('exams.title')}
        description={t('exams.intro')}
        actions={state.status === 'ready' ? <OpenPdfButton manifest={state.data.manifest} /> : null}
      />
      {state.status === 'loading' && <BrowserSkeleton />}
      {state.status === 'error' && (
        <ContentErrorState error={state.error} title={t('exams.loadErrorTitle')} onRetry={retry} />
      )}
      {state.status === 'ready' && <Browser manifest={state.data.manifest} />}
    </>
  );
}

function BrowserSkeleton() {
  return (
    <div aria-busy="true" className="grid gap-3">
      <Skeleton className="h-11 w-full max-w-lg" />
      <Skeleton className="h-24" />
      <Skeleton className="h-24" />
      <Skeleton className="h-24" />
    </div>
  );
}

function Browser({ manifest }: { manifest: Manifest }) {
  const [params, setParams] = useSearchParams();
  const progress = useExamProgress();
  const chosen = useSettings((s) => s.settings.subjects);
  const mine = manifest.subjects.filter((s) => chosen.includes(s.id)).map((s) => s.id);
  const requested = params.get(PARAM.subject) ?? '';
  // With no subject in the link, the student's own subjects are shown.
  const subject = requested === ALL ? '' : requested;
  const onlyMine = !requested && mine.length > 0;
  const year = params.get(PARAM.year) ?? '';
  const session = params.get(PARAM.session) ?? '';

  const years = useMemo(
    () => [...new Set(manifest.exams.map((exam) => exam.year))].sort((a, b) => b - a),
    [manifest.exams],
  );
  const filtered = manifest.exams.filter(
    (exam) =>
      (onlyMine ? mine.includes(exam.subject) : !subject || exam.subject === subject) &&
      (!year || String(exam.year) === year) &&
      (!session || exam.session === session),
  );
  // Papers with an unfinished attempt are loaded to count their answered tasks.
  const openSubjects = [
    ...new Set(
      filtered.filter((exam) => progress?.get(exam.id)?.answeredFields).map((e) => e.subject),
    ),
  ];
  const { exams: loaded } = useExams(openSubjects);
  const counts = (exam: ExamEntry) => {
    const answered = progress?.get(exam.id)?.answeredFields;
    const full = loaded.get(exam.id);
    return answered && full ? taskCounts(full, answered) : undefined;
  };
  const subjectsInOrder = [
    ...manifest.subjects.filter((s) => mine.includes(s.id)),
    ...manifest.subjects.filter((s) => !mine.includes(s.id)),
  ];
  const groups = years
    .map((y) => ({ year: y, exams: filtered.filter((exam) => exam.year === y) }))
    .filter((group) => group.exams.length > 0);

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  if (manifest.exams.length === 0) {
    return (
      <EmptyState
        icon={<Info />}
        title={t('exams.noContentTitle')}
        description={t('exams.noContentBody')}
      />
    );
  }

  return (
    <>
      <section aria-label={t('exams.filtersLabel')} className="mb-6 grid gap-4">
        <div role="group" aria-label={t('exams.subjectFilter')} className="flex flex-wrap gap-2">
          {mine.length > 0 && (
            <FilterChip active={onlyMine} onClick={() => setParam(PARAM.subject, '')}>
              {t('exams.mySubjects')}
            </FilterChip>
          )}
          <FilterChip
            active={!subject && !onlyMine}
            onClick={() => setParam(PARAM.subject, mine.length > 0 ? ALL : '')}
          >
            {t('exams.allSubjects')}
          </FilterChip>
          {subjectsInOrder.map((s) => (
            <FilterChip
              key={s.id}
              active={subject === s.id}
              onClick={() => setParam(PARAM.subject, s.id)}
            >
              <SubjectIcon subject={s} className={cn('size-4', subjectAccent(s.id))} />
              {s.name}
            </FilterChip>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:flex sm:items-end">
          <SelectField
            label={t('exams.yearFilter')}
            value={year}
            onChange={(value) => setParam(PARAM.year, value)}
            options={[
              { value: '', label: t('exams.anyYear') },
              ...years.map((y) => ({ value: String(y), label: String(y) })),
            ]}
          />
          <SelectField
            label={t('exams.sessionFilter')}
            value={session}
            onChange={(value) => setParam(PARAM.session, value)}
            options={[
              { value: '', label: t('session.any') },
              { value: 'majus', label: t('session.majus') },
              { value: 'oktober', label: t('session.oktober') },
            ]}
          />
          {(requested || year || session) && (
            <Button
              variant="ghost"
              size="sm"
              className="col-span-2 justify-self-start"
              onClick={() => setParams({}, { replace: true })}
            >
              {t('exams.clearFilters')}
            </Button>
          )}
        </div>
        <p className="text-sm text-muted" aria-live="polite">
          {t('exams.resultCount', { count: filtered.length })}
        </p>
      </section>

      {groups.length === 0 ? (
        <EmptyState
          icon={<SearchX />}
          title={t('exams.emptyTitle')}
          description={t('exams.emptyBody')}
          action={
            <Button onClick={() => setParams({}, { replace: true })}>
              {t('exams.clearFilters')}
            </Button>
          }
        />
      ) : (
        <div className="grid gap-8">
          {groups.map((group) => (
            <section key={group.year} aria-labelledby={`year-${group.year}`}>
              <h2 id={`year-${group.year}`} className="mb-3 text-xl font-semibold">
                {group.year}
              </h2>
              <ul className="grid stagger gap-3">
                {group.exams.map((exam) => (
                  <li key={exam.id}>
                    <ExamCard
                      exam={exam}
                      subject={manifest.subjects.find((s) => s.id === exam.subject)}
                      progress={progress?.get(exam.id)}
                      tasks={counts(exam)}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      {manifest.exams.some((exam) => exam.sample) && (
        <p className="mt-8 flex gap-2 text-sm text-muted">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {t('exams.sampleNotice')}
        </p>
      )}
      {manifest.notice && <p className="mt-2 text-sm text-muted">{manifest.notice}</p>}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors',
        active
          ? 'border-primary bg-primary-soft text-primary-soft-fg'
          : 'border-border bg-surface text-text hover:border-border-strong',
      )}
    >
      {children}
    </button>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="grid gap-1 text-sm font-medium">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 rounded-md border border-border-strong bg-surface px-3 text-base font-normal"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ExamCard({
  exam,
  subject,
  progress,
  tasks,
}: {
  exam: ExamEntry;
  subject: SubjectInfo | undefined;
  progress: ExamProgress | undefined;
  tasks?: { done: number; total: number };
}) {
  return (
    <Link
      to={`/feladatsorok/${exam.id}`}
      data-ripple=""
      className="group flex lift items-center gap-4 rounded-lg border border-border bg-surface p-4 shadow-1 hover:border-border-strong sm:p-5"
    >
      {subject && <SubjectBadge subject={subject} />}
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-muted">{subject?.name}</span>
        <span className="block text-lg font-semibold">{examDisplayTitle(exam)}</span>
        <span className="mt-1 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted">
            {t('exams.pointsShort', { points: exam.maxPoints })}
          </span>
          {exam.sample && <Badge tone="primary">{t('exams.sampleBadge')}</Badge>}
          {exam.status === 'draft' && <Badge tone="warning">{t('exams.draftBadge')}</Badge>}
          <ProgressBadge progress={progress} tasks={tasks} showUntouched />
        </span>
      </span>
      <ChevronRight
        aria-hidden="true"
        className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function OpenPdfButton({ manifest }: { manifest: Manifest }) {
  const navigate = useNavigate();
  const picker = usePdfPicker(async (result) => {
    if (!result.ok) {
      toast({ message: t('exams.pdfNotPdf'), tone: 'danger' });
      return;
    }
    const exam = manifest.exams.find((entry) => entry.pdfSha256 === result.sha256);
    if (!exam) {
      toast({ message: t('exams.pdfUnknown'), tone: 'danger' });
      return;
    }
    await storePdf(result.sha256, result.file);
    toast({ message: t('exams.pdfMatched', { title: examDisplayTitle(exam) }), tone: 'success' });
    navigate(`/feladatsorok/${exam.id}`);
  });
  return (
    <div className="flex flex-col items-start gap-1 sm:items-end">
      <Button variant="secondary" onClick={picker.open} aria-describedby="open-pdf-hint">
        <FileUp aria-hidden="true" />
        {t('exams.openPdf')}
      </Button>
      <p id="open-pdf-hint" className="max-w-xs text-xs text-muted sm:text-right">
        {t('exams.openPdfHint')}
      </p>
      <input {...picker.inputProps} />
    </div>
  );
}
