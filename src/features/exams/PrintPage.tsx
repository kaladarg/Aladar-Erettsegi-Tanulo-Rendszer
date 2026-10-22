import { ArrowLeft, ExternalLink, FileText, Printer } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { examDisplayTitle } from '@/content/labels';
import { examFileUrl } from '@/content/loader';
import type { Exam } from '@/content/schema.types';
import { useExam } from '@/content/useContent';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { Skeleton } from '@/design/ui/Skeleton';
import { openPdf, type PdfSource } from '@/features/workspace/pdf/pdfjs';
import { usePdfSource } from '@/features/workspace/pdf/usePdfSource';
import { t } from '@/i18n';
import { ContentErrorState } from './ContentErrorState';

/** About 200 dpi on A4: sharp on paper, light enough for a phone. */
const RENDER_SCALE = 2.8;

/**
 * The original exam paper (and, if asked, the official marking scheme)
 * page by page, ready to print or save as PDF from the browser.
 */
export function PrintPage() {
  const { examId = '' } = useParams();
  const { state, retry, entry, manifest } = useExam(examId);
  const exam = state.status === 'ready' ? (state.data as Exam) : null;
  const subject = manifest?.manifest.subjects.find((s) => s.id === exam?.subject);
  const title = exam ? `${subject?.name ?? ''} – ${examDisplayTitle(exam)}` : t('print.title');
  usePageTitle(`${t('print.title')}: ${title}`);
  const [withKey, setWithKey] = useState(false);

  const fileUrl = (file?: string) =>
    exam && entry && manifest && file ? examFileUrl(manifest.baseUrl, entry, file) : null;
  const packPdf = entry?.hasPdf ? fileUrl(exam?.source.examPdf.file) : null;
  // Packs that ship the paper also ship its marking scheme.
  const keyUrl = entry?.hasPdf ? fileUrl(exam?.source.keyPdf?.file) : null;
  const pdf = usePdfSource(exam, packPdf, !!entry?.hasPdf);
  const examPages = useRenderedPages(pdf.status === 'ready' ? pdf.source : null);
  const keyPages = useRenderedPages(withKey && keyUrl ? { url: keyUrl } : null);
  const pagesReady =
    examPages.status === 'ready' && (!withKey || !keyUrl || keyPages.status === 'ready');

  return (
    <div className="min-h-dvh bg-surface-muted print:bg-white">
      <header className="sticky top-0 z-10 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-[52rem] flex-wrap items-center gap-x-4 gap-y-3">
          <Link
            to={`/feladatsorok/${examId}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            {t('print.back')}
          </Link>
          <div className="ml-auto flex flex-wrap items-center gap-3">
            {keyUrl && (
              <label className="flex min-h-11 items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={withKey}
                  onChange={(event) => setWithKey(event.target.checked)}
                  className="size-5 accent-[var(--c-primary)]"
                />
                {t('print.withKey')}
              </label>
            )}
            {packPdf && (
              <a
                href={packPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm font-medium hover:bg-surface-muted"
              >
                <FileText aria-hidden="true" className="size-4" />
                {t('print.original')}
                <span className="sr-only"> {t('common.newTab')}</span>
              </a>
            )}
            <Button onClick={() => window.print()} disabled={!pagesReady}>
              <Printer aria-hidden="true" />
              {t('print.print')}
            </Button>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 print:p-0">
        <div className="mx-auto max-w-[52rem] print:max-w-none">
          <h1 className="text-2xl font-bold print:sr-only">{title}</h1>
          <p className="mt-1 mb-4 text-muted print:hidden">{t('print.intro')}</p>
          {state.status === 'error' ? (
            <ContentErrorState
              error={state.error}
              title={t('exam.loadErrorTitle')}
              onRetry={retry}
            />
          ) : !exam || pdf.status === 'loading' ? (
            <Skeleton className="aspect-[1/1.414] w-full" />
          ) : pdf.status === 'missing' ? (
            <MissingPdf exam={exam} />
          ) : (
            <>
              <Pages pages={examPages} label={(n) => t('print.examPage', { number: n })} />
              {withKey && keyUrl && (
                <section aria-label={t('print.keyTitle')} className="mt-8 print:mt-0">
                  <Pages pages={keyPages} label={(n) => t('print.keyPage', { number: n })} />
                </section>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function MissingPdf({ exam }: { exam: Exam }) {
  const official = exam.source.examPdf.officialUrl;
  return (
    <EmptyState
      icon={<FileText />}
      title={t('print.missingTitle')}
      description={t('print.missingBody')}
      action={
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to={`/feladatsorok/${exam.id}`}
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 font-medium text-primary-fg"
          >
            {t('print.back')}
          </Link>
          {official && (
            <a
              href={official}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 font-medium text-primary underline underline-offset-4"
            >
              {t('print.officialLink')}
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only"> {t('common.newTab')}</span>
            </a>
          )}
        </div>
      }
    />
  );
}

type Rendered =
  | { status: 'idle' }
  | { status: 'loading'; done: number; total: number; urls: string[] }
  | { status: 'ready'; urls: string[] }
  | { status: 'error' };

/** Renders every page of a PDF to an image, one after the other. */
function useRenderedPages(source: PdfSource | null): Rendered {
  const key = source ? ('url' in source ? source.url : source.data) : null;
  const [state, setState] = useState<{ key: typeof key; value: Rendered }>({
    key: null,
    value: { status: 'idle' },
  });

  useEffect(() => {
    if (!source) return;
    let cancelled = false;
    const urls: string[] = [];
    void (async () => {
      try {
        const opened = await openPdf(source);
        const total = opened.doc.numPages;
        for (let n = 1; n <= total && !cancelled; n++) {
          setState({ key, value: { status: 'loading', done: n - 1, total, urls: [...urls] } });
          const page = await opened.doc.getPage(n);
          const viewport = page.getViewport({ scale: RENDER_SCALE });
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(viewport.width);
          canvas.height = Math.round(viewport.height);
          await page.render({ canvas, viewport }).promise;
          const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/png'),
          );
          // Free the large canvas right away; only the compressed image is kept.
          canvas.width = 0;
          canvas.height = 0;
          page.cleanup();
          if (blob) urls.push(URL.createObjectURL(blob));
        }
        await opened.destroy();
        if (!cancelled) setState({ key, value: { status: 'ready', urls } });
      } catch {
        if (!cancelled) setState({ key, value: { status: 'error' } });
      }
    })();
    return () => {
      cancelled = true;
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
    // The source object is recreated on every render; its URL or data identifies it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  if (!source) return { status: 'idle' };
  return state.key === key ? state.value : { status: 'loading', done: 0, total: 0, urls: [] };
}

function Pages({ pages, label }: { pages: Rendered; label: (number: number) => string }) {
  if (pages.status === 'idle') return null;
  if (pages.status === 'error')
    return (
      <p role="alert" className="font-medium text-danger">
        {t('print.failed')}
      </p>
    );
  const urls = pages.urls;
  return (
    <div className="grid gap-6 print:block">
      <p role="status" className="text-sm font-medium text-muted print:hidden">
        {pages.status === 'loading'
          ? t('print.preparing', { done: pages.done, total: pages.total || '…' })
          : t('print.ready', { count: urls.length })}
      </p>
      {urls.map((url, index) => (
        <img
          key={url}
          src={url}
          alt={label(index + 1)}
          className="print-page w-full rounded-sm bg-white shadow-2 print:rounded-none print:shadow-none"
        />
      ))}
      {pages.status === 'loading' && <Skeleton className="aspect-[1/1.414] w-full" />}
    </div>
  );
}
