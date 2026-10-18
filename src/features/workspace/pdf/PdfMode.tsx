import { ChevronDown, ChevronUp, Download, FileWarning, Maximize, Minus, Plus } from 'lucide-react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { Skeleton } from '@/design/ui/Skeleton';
import { formatNumber, t } from '@/i18n';
import { useWorkspace } from '../WorkspaceContext';
import { applyRectEdits, useRectEdits } from './editorStore';
import { buildOverlayItems, type OverlayItem } from './overlayItems';
import { PdfPage } from './PdfPage';
import { openPdf, type OpenedPdf, type PdfSource } from './pdfjs';

const ZOOM_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3];

interface PdfModeProps {
  source: PdfSource;
  editing: boolean;
  onSwitchToForm: () => void;
}

/** The real exam paper with answer fields over the answer boxes. */
export function PdfMode({ source, editing, onSwitchToForm }: PdfModeProps) {
  const { exam, activePartIds } = useWorkspace();
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [sizes, setSizes] = useState<{ w: number; h: number }[]>([]);
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const container = useRef<HTMLDivElement>(null);
  const pages = useRef(new Map<number, HTMLElement>());
  const sourceKey = 'url' in source ? source.url : source.data;

  useEffect(() => {
    let active = true;
    let opened: OpenedPdf | null = null;
    openPdf(source)
      .then(async (result) => {
        opened = result;
        const pdf = result.doc;
        const all = await Promise.all(
          Array.from({ length: pdf.numPages }, async (_, i) => {
            const viewport = (await pdf.getPage(i + 1)).getViewport({ scale: 1 });
            return { w: viewport.width, h: viewport.height };
          }),
        );
        if (!active) return;
        setSizes(all);
        setDoc(pdf);
      })
      .catch((error: unknown) => {
        console.error('Could not open PDF', error);
        if (active) setFailed(true);
      });
    return () => {
      active = false;
      void opened?.destroy();
    };
    // The source object is recreated per render; its URL or buffer identifies it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceKey]);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) =>
      setContainerWidth(entry?.contentRect.width ?? 0),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const itemsByPage = useMemo(() => {
    const all = buildOverlayItems(exam);
    if (!activePartIds) return all;
    // Exam mode: only the fields of the parts being written now.
    const partOf = new Map(exam.parts.flatMap((p) => p.tasks.map((t) => [t.id, p.id])));
    const active = (item: OverlayItem) =>
      activePartIds.has('part' in item ? item.part.id : partOf.get(item.task.id)!);
    return new Map([...all].map(([page, items]) => [page, items.filter(active)]));
  }, [exam, activePartIds]);

  const maxWidth = Math.max(1, ...sizes.map((size) => size.w));
  // "100%" fits the page to the screen width, but never wider than a comfortable reading size.
  const fitScale = containerWidth > 0 ? Math.min((containerWidth - 24) / maxWidth, 1.5) : 1;
  const scale = fitScale * zoom;

  const registerPage = useCallback((pageNumber: number, element: HTMLElement | null) => {
    if (element) pages.current.set(pageNumber, element);
    else pages.current.delete(pageNumber);
  }, []);

  // Track the page that fills most of the screen.
  useEffect(() => {
    if (!doc) return;
    const ratios = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          ratios.set(Number((entry.target as HTMLElement).dataset.page), entry.intersectionRatio);
        let best = 1;
        let bestRatio = -1;
        for (const [page, ratio] of ratios)
          if (ratio > bestRatio) [best, bestRatio] = [page, ratio];
        setCurrentPage(best);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    for (const element of pages.current.values()) observer.observe(element);
    return () => observer.disconnect();
  }, [doc, sizes.length]);

  const goToPage = (page: number) => {
    const target = Math.min(Math.max(1, page), sizes.length);
    pages.current.get(target)?.scrollIntoView({ block: 'start' });
    setCurrentPage(target);
  };
  const stepZoom = (direction: 1 | -1) => {
    const index = ZOOM_STEPS.findIndex((step) => step >= zoom - 1e-6);
    setZoom(
      ZOOM_STEPS[
        Math.min(ZOOM_STEPS.length - 1, Math.max(0, (index === -1 ? 2 : index) + direction))
      ] ?? 1,
    );
  };

  if (failed) {
    return (
      <div className="mx-auto max-w-xl px-4 py-10">
        <EmptyState
          tone="danger"
          icon={<FileWarning />}
          title={t('workspace.pdfError')}
          description={t('workspace.pdfMissingBody')}
          action={<Button onClick={onSwitchToForm}>{t('workspace.switchToForm')}</Button>}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <p className="sr-only">{t('workspace.pdfScreenReaderHint')}</p>
      <div
        role="toolbar"
        aria-label={t('workspace.toolbarLabel')}
        className="sticky top-[3.75rem] z-20 flex flex-wrap items-center justify-center gap-1 border-b border-border bg-surface/95 px-2 py-1 backdrop-blur"
      >
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('workspace.zoomOut')}
          disabled={zoom <= ZOOM_STEPS[0]!}
          onClick={() => stepZoom(-1)}
        >
          <Minus aria-hidden="true" />
        </Button>
        <output
          aria-label={t('workspace.zoomLevel', {
            percent: formatNumber(zoom, { style: 'percent' }),
          })}
          className="w-14 text-center text-sm tabular-nums"
        >
          {formatNumber(zoom, { style: 'percent' })}
        </output>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('workspace.zoomIn')}
          disabled={zoom >= ZOOM_STEPS.at(-1)!}
          onClick={() => stepZoom(1)}
        >
          <Plus aria-hidden="true" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('workspace.zoomFit')}
          disabled={zoom === 1}
          onClick={() => setZoom(1)}
        >
          <Maximize aria-hidden="true" />
        </Button>
        <span aria-hidden="true" className="mx-2 h-6 w-px bg-border" />
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('workspace.pagePrev')}
          disabled={currentPage <= 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          <ChevronUp aria-hidden="true" />
        </Button>
        <label className="flex items-center gap-1 text-sm tabular-nums">
          <span className="sr-only">{t('workspace.pageJump')}</span>
          <input
            type="number"
            min={1}
            max={sizes.length || 1}
            value={currentPage}
            onChange={(event) => goToPage(Number(event.target.value))}
            className="h-9 w-12 rounded-sm border border-border-strong bg-surface text-center"
          />
          <span aria-hidden="true">/ {sizes.length || '–'}</span>
        </label>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('workspace.pageNext')}
          disabled={currentPage >= sizes.length}
          onClick={() => goToPage(currentPage + 1)}
        >
          <ChevronDown aria-hidden="true" />
        </Button>
      </div>

      {editing && <EditorBar />}

      <div ref={container} className="overflow-x-auto bg-surface-muted px-3 py-4">
        {!doc ? (
          <div aria-busy="true" className="mx-auto grid max-w-3xl gap-4">
            <p className="sr-only">{t('workspace.pdfLoading')}</p>
            <Skeleton className="aspect-[1/1.414] w-full" />
          </div>
        ) : (
          <div className="flex flex-col gap-4" style={{ minWidth: maxWidth * scale }}>
            {sizes.map((size, index) => (
              <PdfPage
                key={index}
                doc={doc}
                pageNumber={index + 1}
                size={size}
                scale={scale}
                items={itemsByPage.get(index + 1) ?? []}
                editing={editing}
                registerPage={registerPage}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Maintainer tool: shows how many boxes moved and exports the corrected exam.json. */
function EditorBar() {
  const { exam } = useWorkspace();
  const edits = useRectEdits((state) => state.edits);
  const count = Object.keys(edits).length;
  const download = () => {
    const blob = new Blob([`${JSON.stringify(applyRectEdits(exam, edits), null, 2)}\n`], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'exam.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1_000);
  };
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-danger bg-danger-soft px-4 py-2 text-sm">
      <strong>{t('workspace.editorTitle')}</strong>
      <span className="flex-1">{t('workspace.editorHint')}</span>
      <span aria-live="polite">{t('workspace.editorChanged', { count })}</span>
      <Button size="sm" variant="secondary" onClick={download}>
        <Download aria-hidden="true" />
        {t('workspace.editorExport')}
      </Button>
    </div>
  );
}
