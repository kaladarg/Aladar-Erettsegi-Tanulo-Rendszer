import {
  ArrowLeft,
  Bug,
  CircleCheck,
  Clock,
  CloudDownload,
  ExternalLink,
  FileText,
  FileUp,
  Flag,
  ListChecks,
  SearchX,
  Trash2,
  TriangleAlert,
  Trophy,
} from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { subjectAccent } from '@/content/catalog';
import { examMinutes } from '@/content/checks';
import { examDisplayTitle, partMeta } from '@/content/labels';
import { examFileUrl, examUrl, type LoadedManifest } from '@/content/loader';
import { isSavedOffline, saveForOffline } from '@/content/offline';
import { removePdf, storePdf, useHasImportedPdf } from '@/content/pdfImport';
import { reportMistakeUrl } from '@/content/report';
import type { Exam, ExamEntry, PdfRef } from '@/content/schema.types';
import { SubjectIcon } from '@/content/SubjectIcon';
import { useExam } from '@/content/useContent';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { Skeleton } from '@/design/ui/Skeleton';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { toast } from '@/state/toastStore';
import { useExamProgress } from '@/storage/progress';
import { ContentErrorState } from './ContentErrorState';
import { PracticeCard } from './PracticeCard';
import { ProgressBadge } from './ProgressBadge';
import { usePdfPicker } from './usePdfPicker';

export function ExamOverviewPage() {
  const { examId = '' } = useParams();
  const { state, retry, entry, manifest } = useExam(examId);

  if (state.status === 'loading') return <OverviewSkeleton />;
  if (state.status === 'error') {
    if (state.error.code === 'notFound') return <NotFound />;
    return (
      <>
        <BackLink />
        <ContentErrorState error={state.error} title={t('exam.loadErrorTitle')} onRetry={retry} />
      </>
    );
  }
  return <Overview exam={state.data as Exam} entry={entry!} manifest={manifest!} />;
}

function BackLink() {
  return (
    <Link
      to="/feladatsorok"
      className="mb-4 inline-flex min-h-11 items-center gap-2 font-medium text-muted hover:text-text"
    >
      <ArrowLeft aria-hidden="true" className="size-5" />
      {t('exam.backToList')}
    </Link>
  );
}

function OverviewSkeleton() {
  return (
    <div aria-busy="true" className="grid gap-4">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-12 w-3/4" />
      <div className="grid grid-cols-3 gap-3">
        <Skeleton className="h-20" />
        <Skeleton className="h-20" />
        <Skeleton className="h-20" />
      </div>
      <Skeleton className="h-64" />
    </div>
  );
}

function NotFound() {
  usePageTitle(t('exam.notFoundTitle'));
  return (
    <>
      <BackLink />
      <PageHeader title={t('exam.notFoundTitle')} />
      <EmptyState
        icon={<SearchX />}
        title={t('exam.notFoundTitle')}
        description={t('exam.notFoundBody')}
        action={
          <Button asChild>
            <Link to="/feladatsorok">{t('exam.backToList')}</Link>
          </Button>
        }
      />
    </>
  );
}

function Overview({
  exam,
  entry,
  manifest,
}: {
  exam: Exam;
  entry: ExamEntry;
  manifest: LoadedManifest;
}) {
  const title = examDisplayTitle(exam);
  const subject = manifest.manifest.subjects.find((s) => s.id === exam.subject);
  const level = manifest.manifest.levels.find((l) => l.id === exam.level);
  usePageTitle(`${subject?.name ?? ''} ${title}`.trim());
  const progress = useExamProgress()?.get(exam.id);
  const totalMinutes = examMinutes(exam);
  const taskCount = exam.parts.reduce((sum, part) => sum + part.tasks.length, 0);
  const repo = manifest.manifest.repositoryUrl;

  return (
    <>
      <BackLink />
      <div className="mb-2 flex items-center gap-2 text-muted">
        {subject && (
          <SubjectIcon subject={subject} className={cn('size-5', subjectAccent(subject.id))} />
        )}
        <span>
          {subject?.name}
          {level ? ` · ${level.name}` : ''}
        </span>
      </div>
      <PageHeader title={title} />
      <div className="-mt-4 mb-6 flex flex-wrap gap-2">
        {exam.sample && <Badge tone="primary">{t('exams.sampleBadge')}</Badge>}
        {exam.review.status === 'draft' && <Badge tone="warning">{t('exams.draftBadge')}</Badge>}
        <ProgressBadge progress={progress} />
      </div>

      {exam.review.status === 'draft' && (
        <Callout tone="warning" icon={<TriangleAlert />}>
          {t('exam.reviewDraft')}
        </Callout>
      )}
      <PracticeCard examId={exam.id} />

      <section aria-labelledby="summary-title" className="mt-6">
        <h2 id="summary-title" className="sr-only">
          {t('exam.summaryTitle')}
        </h2>
        <dl className="grid grid-cols-3 gap-3">
          <Stat icon={<Trophy />} label={t('exam.totalPoints')} value={String(exam.maxPoints)} />
          <Stat
            icon={<Clock />}
            label={t('exam.totalTime')}
            value={t('exam.minutes', { minutes: totalMinutes })}
          />
          <Stat icon={<ListChecks />} label={t('exam.taskCount')} value={String(taskCount)} />
        </dl>
      </section>

      <section aria-labelledby="tasks-title" className="mt-8">
        <h2 id="tasks-title" className="mb-4 text-2xl font-semibold">
          {t('exam.tasksTitle')}
        </h2>
        <div className="grid gap-4">
          {exam.parts.map((part) => (
            <Card key={part.id} aria-labelledby={`part-${part.id}`}>
              <CardTitle id={`part-${part.id}`}>{part.title}</CardTitle>
              <CardDescription>{partMeta(part)}</CardDescription>
              {part.instructions && <p className="mt-3">{part.instructions}</p>}
              {part.choices?.map((choice) => (
                <p key={choice.taskIds.join()} className="mt-2 text-sm font-medium text-primary">
                  {t('exam.choiceNote', { label: choice.label ?? choice.taskIds.join(', ') })}
                </p>
              ))}
              <ul className="mt-4 divide-y divide-border border-t border-border">
                {part.tasks.map((task) => (
                  <li key={task.id} className="flex items-start gap-3 py-3">
                    <span className="w-14 shrink-0 font-semibold tabular-nums">{task.number}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block">{t(`taskType.${task.type}`)}</span>
                      {task.topics && task.topics.length > 0 && (
                        <span className="mt-1 flex flex-wrap gap-1">
                          {task.topics.map((topic) => (
                            <Badge key={topic}>{topic}</Badge>
                          ))}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 text-sm font-medium text-muted tabular-nums">
                      {t('exam.taskPoints', { points: task.maxPoints })}
                    </span>
                    <a
                      href={reportMistakeUrl(repo, exam.id, task)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('exam.reportTask')}: ${task.number} ${t('common.newTab')}`}
                      className="-my-2 flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-surface-muted hover:text-text"
                    >
                      <Flag aria-hidden="true" className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <PdfCard exam={exam} entry={entry} baseUrl={manifest.baseUrl} />
        <OfflineCard
          entry={entry}
          baseUrl={manifest.baseUrl}
          pdfFile={entry.hasPdf ? exam.source.examPdf.file : undefined}
        />
      </div>

      <OfficialDocuments exam={exam} />

      <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted">
        <a
          href={reportMistakeUrl(repo, exam.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4 hover:text-primary-hover"
        >
          <Bug aria-hidden="true" className="size-4" />
          {t('exam.reportMistake')}
          <span className="sr-only"> {t('common.newTab')}</span>
        </a>
        {manifest.manifest.notice && <p>{manifest.manifest.notice}</p>}
      </div>
    </>
  );
}

function Callout({
  tone,
  icon,
  children,
}: {
  tone: 'info' | 'warning';
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'mb-3 flex gap-3 rounded-md border p-4 [&>svg]:mt-0.5 [&>svg]:size-5 [&>svg]:shrink-0',
        tone === 'warning' ? 'border-warning bg-warning-soft' : 'border-info/40 bg-info-soft',
      )}
    >
      <span
        aria-hidden="true"
        className={cn('[&_svg]:size-5', tone === 'warning' ? 'text-warning' : 'text-info')}
      >
        {icon}
      </span>
      <p>{children}</p>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-3 shadow-1 sm:p-4">
      <dt className="flex items-center gap-1.5 text-xs text-muted sm:text-sm [&_svg]:size-4">
        <span aria-hidden="true">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1 text-xl font-bold sm:text-2xl">{value}</dd>
    </div>
  );
}

function PdfCard({ exam, entry, baseUrl }: { exam: Exam; entry: ExamEntry; baseUrl: string }) {
  const sha = exam.source.examPdf.sha256;
  const imported = useHasImportedPdf(sha);
  const picker = usePdfPicker(async (result) => {
    if (!result.ok) {
      toast({ message: t('exams.pdfNotPdf'), tone: 'danger' });
      return;
    }
    if (result.sha256 !== sha) {
      toast({ message: t('exam.pdfWrongFile'), tone: 'danger' });
      return;
    }
    await storePdf(sha, result.file);
    toast({ message: t('exam.pdfAdded'), tone: 'success' });
  });

  const packPdf =
    entry.hasPdf && exam.source.examPdf.file
      ? examFileUrl(baseUrl, entry, exam.source.examPdf.file)
      : null;

  return (
    <Card aria-labelledby="pdf-title">
      <CardTitle id="pdf-title" className="flex items-center gap-2">
        <FileText aria-hidden="true" className="size-5" />
        {t('exam.pdfTitle')}
      </CardTitle>
      {packPdf ? (
        <>
          <CardDescription>{t('exam.pdfInPack')}</CardDescription>
          <a
            href={packPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 hover:text-primary-hover"
          >
            {t('exam.officialExam')} (PDF)
            <ExternalLink aria-hidden="true" className="size-4" />
            <span className="sr-only"> {t('common.newTab')}</span>
          </a>
        </>
      ) : imported ? (
        <>
          <CardDescription className="flex items-center gap-2 text-text">
            <CircleCheck aria-hidden="true" className="size-4 text-success" />
            {t('exam.pdfImported')}
          </CardDescription>
          <Button
            variant="secondary"
            className="mt-4"
            onClick={async () => {
              await removePdf(sha);
              toast({ message: t('exam.pdfRemoved') });
            }}
          >
            <Trash2 aria-hidden="true" />
            {t('exam.pdfRemove')}
          </Button>
        </>
      ) : (
        <>
          <CardDescription>{t('exam.pdfMissing')}</CardDescription>
          <Button variant="secondary" className="mt-4" onClick={picker.open}>
            <FileUp aria-hidden="true" />
            {t('exam.pdfAdd')}
          </Button>
          <input {...picker.inputProps} />
        </>
      )}
    </Card>
  );
}

function OfflineCard({
  entry,
  baseUrl,
  pdfFile,
}: {
  entry: ExamEntry;
  baseUrl: string;
  pdfFile?: string;
}) {
  const urls = [
    examUrl(baseUrl, entry),
    ...(pdfFile ? [examFileUrl(baseUrl, entry, pdfFile)] : []),
  ];
  const key = urls.join('|');
  const [saved, setSaved] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    void isSavedOffline(key.split('|')).then((value) => active && setSaved(value));
    return () => {
      active = false;
    };
  }, [key]);

  if (typeof caches === 'undefined') return null;
  return (
    <Card aria-labelledby="offline-title">
      <CardTitle id="offline-title" className="flex items-center gap-2">
        <CloudDownload aria-hidden="true" className="size-5" />
        {t('exam.offlineTitle')}
      </CardTitle>
      <CardDescription>{t('exam.offlineBody')}</CardDescription>
      {saved ? (
        <p className="mt-4 flex items-center gap-2 font-medium">
          <CircleCheck aria-hidden="true" className="size-5 text-success" />
          {t('exam.offlineSaved')}
        </p>
      ) : (
        <Button
          variant="secondary"
          className="mt-4"
          disabled={busy || saved === null}
          onClick={async () => {
            setBusy(true);
            const ok = await saveForOffline(urls);
            setBusy(false);
            setSaved(ok);
            toast(
              ok
                ? { message: t('exam.offlineDone'), tone: 'success' }
                : { message: t('exam.offlineFailed'), tone: 'danger' },
            );
          }}
        >
          <CloudDownload aria-hidden="true" />
          {t('exam.offlineSave')}
        </Button>
      )}
    </Card>
  );
}

function OfficialDocuments({ exam }: { exam: Exam }) {
  const docs: { ref: PdfRef; label: string }[] = [
    { ref: exam.source.examPdf, label: t('exam.officialExam') },
    ...(exam.source.keyPdf ? [{ ref: exam.source.keyPdf, label: t('exam.officialKey') }] : []),
    ...(exam.source.attachments ?? []).map((ref) => ({
      ref,
      label: `${t('exam.attachment')}${ref.label ? `: ${ref.label}` : ''}`,
    })),
  ].filter((doc) => doc.ref.officialUrl);
  if (docs.length === 0) return null;
  return (
    <section aria-labelledby="official-title" className="mt-8">
      <h2 id="official-title" className="mb-3 text-xl font-semibold">
        {t('exam.sourcesTitle')}
      </h2>
      <ul className="grid gap-2">
        {docs.map((doc) => (
          <li key={doc.ref.officialUrl}>
            <a
              href={doc.ref.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 hover:text-primary-hover"
            >
              {doc.label}: {t('exam.openOfficial')}
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only"> {t('common.newTab')}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
