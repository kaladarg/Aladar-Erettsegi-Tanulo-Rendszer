import { FileText, Info, ListChecks, X } from 'lucide-react';
import { Dialog } from 'radix-ui';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { examDisplayTitle } from '@/content/labels';
import { examFileUrl } from '@/content/loader';
import type { Exam } from '@/content/schema.types';
import { useExam } from '@/content/useContent';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import { ContentErrorState } from '@/features/exams/ContentErrorState';
import { t } from '@/i18n';
import { db } from '@/storage/db';
import { ChoicePicker } from './ChoicePicker';
import { FormMode } from './FormMode';
import { PdfMode } from './pdf/PdfMode';
import type { PdfSource } from './pdf/pdfjs';
import { SaveStatus } from './SaveStatus';
import { usePracticeAttempt } from './useAttempt';
import { createWorkspace, WorkspaceContext } from './WorkspaceContext';

type Mode = 'pdf' | 'form';
const MODE_PARAM = 'nezet';
const MODE_VALUES: Record<Mode, string> = { pdf: 'feladatlap', form: 'urlap' };

/** Full-screen workspace where the student solves an exam in PDF or form mode. */
export function WorkspacePage() {
  const { examId = '' } = useParams();
  const { state, retry, entry, manifest } = useExam(examId);
  const exam = state.status === 'ready' ? (state.data as Exam) : null;
  const { attemptId, failed } = usePracticeAttempt(exam ? exam.id : null);
  const pdf = usePdfSource(
    exam,
    entry && manifest
      ? examFileUrl(manifest.baseUrl, entry, exam?.source.examPdf.file ?? '')
      : null,
    !!entry?.hasPdf,
  );
  const [params, setParams] = useSearchParams();
  const subject = manifest?.manifest.subjects.find((s) => s.id === exam?.subject);
  const title = exam
    ? `${subject?.name ?? ''} – ${examDisplayTitle(exam)}`
    : t('workspace.loading');
  usePageTitle(title);

  const requested = params.get(MODE_PARAM);
  const mode: Mode =
    requested === MODE_VALUES.form
      ? 'form'
      : requested === MODE_VALUES.pdf
        ? 'pdf'
        : pdf.status === 'missing'
          ? 'form'
          : 'pdf';
  const setMode = (next: Mode) => {
    const nextParams = new URLSearchParams(params);
    nextParams.set(MODE_PARAM, MODE_VALUES[next]);
    setParams(nextParams, { replace: true });
    window.scrollTo({ top: 0 });
  };
  const workspace = useMemo(() => (exam ? createWorkspace(exam) : null), [exam]);

  return (
    <div className="min-h-dvh bg-bg">
      <header className="sticky top-0 z-30 flex h-[3.75rem] items-center gap-2 border-b border-border bg-surface px-2 sm:gap-3 sm:px-4">
        <Button asChild variant="ghost" size="icon">
          <Link to={`/feladatsorok/${examId}`} aria-label={t('workspace.exit')}>
            <X aria-hidden="true" />
          </Link>
        </Button>
        <h1 className="min-w-0 flex-1 truncate font-semibold">{title}</h1>
        {exam && attemptId && <SaveStatus />}
        {exam && (
          <>
            <SegmentedControl<Mode>
              label={t('workspace.modeLabel')}
              value={mode}
              onValueChange={setMode}
              className="w-auto shrink-0 sm:w-auto"
              options={[
                {
                  value: 'pdf',
                  label: t('workspace.modePdf'),
                  icon: <FileText aria-hidden="true" />,
                },
                {
                  value: 'form',
                  label: t('workspace.modeForm'),
                  icon: <ListChecks aria-hidden="true" />,
                },
              ]}
            />
            <InfoSheet exam={exam} />
          </>
        )}
      </header>

      <main id="main">
        {state.status === 'loading' || (exam && !attemptId && !failed) ? (
          <div aria-busy="true" className="mx-auto grid max-w-3xl gap-4 p-6">
            <p className="sr-only">{t('workspace.loading')}</p>
            <Skeleton className="h-10 w-1/2" />
            <Skeleton className="h-64" />
          </div>
        ) : state.status === 'error' ? (
          <div className="mx-auto max-w-xl p-6">
            <ContentErrorState
              error={state.error}
              title={t('exam.loadErrorTitle')}
              onRetry={retry}
            />
          </div>
        ) : failed ? (
          <div className="mx-auto max-w-xl p-6">
            <EmptyState
              tone="danger"
              icon={<Info />}
              title={t('errors.storageTitle')}
              description={t('errors.storageBody')}
            />
          </div>
        ) : (
          workspace && (
            <WorkspaceContext.Provider value={workspace}>
              {mode === 'form' ? (
                <FormMode />
              ) : pdf.status === 'ready' ? (
                <PdfMode
                  source={pdf.source}
                  editing={params.get('szerkeszto') === '1'}
                  onSwitchToForm={() => setMode('form')}
                />
              ) : pdf.status === 'missing' ? (
                <div className="mx-auto max-w-xl p-6">
                  <EmptyState
                    icon={<FileText />}
                    title={t('workspace.pdfMissingTitle')}
                    description={t('workspace.pdfMissingBody')}
                    action={
                      <Button onClick={() => setMode('form')}>{t('workspace.switchToForm')}</Button>
                    }
                  />
                </div>
              ) : (
                <div aria-busy="true" className="mx-auto max-w-3xl p-6">
                  <Skeleton className="aspect-[1/1.414] w-full" />
                </div>
              )}
            </WorkspaceContext.Provider>
          )
        )}
      </main>
    </div>
  );
}

type PdfState =
  { status: 'loading' } | { status: 'missing' } | { status: 'ready'; source: PdfSource };

/** The pack's PDF when it ships one, otherwise a PDF the student imported. */
function usePdfSource(exam: Exam | null, packUrl: string | null, hasPdf: boolean): PdfState {
  const sha = exam?.source.examPdf.sha256;
  const [imported, setImported] = useState<{ sha: string; data: ArrayBuffer | null } | null>(null);

  useEffect(() => {
    if (!sha || hasPdf) return;
    let active = true;
    void db.importedPdfs.get(sha).then(async (row) => {
      const data = row ? await row.blob.arrayBuffer() : null;
      if (active) setImported({ sha, data });
    });
    return () => {
      active = false;
    };
  }, [sha, hasPdf]);

  if (!exam) return { status: 'loading' };
  if (hasPdf && packUrl) return { status: 'ready', source: { url: packUrl } };
  if (!imported || imported.sha !== sha) return { status: 'loading' };
  return imported.data
    ? { status: 'ready', source: { data: imported.data } }
    : { status: 'missing' };
}

function InfoSheet({ exam }: { exam: Exam }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('workspace.info')}>
          <Info aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col gap-4 overflow-y-auto border-l border-border bg-surface p-6 shadow-3"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-semibold">
              {t('workspace.infoTitle')}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label={t('common.close')}>
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>
          {exam.parts.map((part) => (
            <section key={part.id} className="grid gap-3">
              <h2 className="font-semibold">
                {t('workspace.partInfo', {
                  title: part.title,
                  minutes: part.timeLimitMinutes,
                  points: part.maxPoints,
                })}
              </h2>
              {part.instructions && <p className="text-muted">{part.instructions}</p>}
              {part.choices?.map((choice, index) => (
                <ChoicePicker key={index} part={part} choice={choice} index={index} />
              ))}
            </section>
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
