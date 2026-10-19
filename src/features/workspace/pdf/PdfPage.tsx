import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import { useEffect, useRef, useState } from 'react';
import { t } from '@/i18n';
import { OverlayField } from '../fields/OverlayField';
import { pageInkKey } from '@/domain/ink/ink';
import { InkSurface } from '../ink/InkSurface';
import { EditableBox } from './EditableBox';
import { useAnswers } from '@/state/answerStore';
import { useRectEdits } from './editorStore';
import { rectStyle, visibleItems, type OverlayItem } from './overlayItems';
import { ChoiceGate, ChoiceMark, OptionMarks } from './PaperMarks';

interface PdfPageProps {
  doc: PDFDocumentProxy;
  pageNumber: number;
  /** Page size at scale 1, in PDF points. */
  size: { w: number; h: number };
  scale: number;
  items: OverlayItem[];
  editing: boolean;
  registerPage: (pageNumber: number, element: HTMLElement | null) => void;
}

/**
 * One PDF page: a canvas rendered only while the page is near the viewport
 * (released again when far away, to spare memory on phones), with the answer
 * fields laid over it.
 */
export function PdfPage({
  doc,
  pageNumber,
  size,
  scale,
  items,
  editing,
  registerPage,
}: PdfPageProps) {
  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [near, setNear] = useState(false);
  const edits = useRectEdits((state) => state.edits);
  const answers = useAnswers((state) => state.answers);
  const shown = visibleItems(items, (key) => {
    const value = answers[key];
    return Array.isArray(value) ? value : undefined;
  });
  const width = size.w * scale;
  const height = size.h * scale;

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNear(entry?.isIntersecting ?? false),
      {
        rootMargin: '150% 0px',
      },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = canvas.current;
    if (!target) return;
    if (!near) {
      target.width = 0;
      target.height = 0;
      return;
    }
    let task: RenderTask | null = null;
    let cancelled = false;
    // Wait for zooming to settle before re-rendering.
    const timer = window.setTimeout(async () => {
      const page = await doc.getPage(pageNumber);
      if (cancelled) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const viewport = page.getViewport({ scale: scale * ratio });
      target.width = Math.floor(viewport.width);
      target.height = Math.floor(viewport.height);
      task = page.render({ canvas: target, viewport });
      task.promise.catch(() => {
        // Cancelled renders reject; nothing to do.
      });
    }, 60);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      task?.cancel();
    };
  }, [doc, pageNumber, scale, near]);

  return (
    <div
      ref={(element) => {
        container.current = element;
        registerPage(pageNumber, element);
      }}
      data-page={pageNumber}
      role="group"
      aria-label={t('workspace.pageLabel', { page: pageNumber })}
      className="relative mx-auto scroll-mt-28 bg-white shadow-2"
      style={{ width, height }}
    >
      <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 h-full w-full" />
      {shown.map((item) => {
        switch (item.kind) {
          case 'options':
            return <OptionMarks key={item.key} task={item.task} field={item.field} />;
          case 'choiceMark':
            return <ChoiceMark {...item} key={item.key} />;
          case 'gate':
            return <ChoiceGate {...item} key={item.key} />;
          default: {
            const rect = item.kind === 'field' ? (edits[item.field.id] ?? item.rect) : item.rect;
            if (editing && item.kind === 'field') {
              return (
                <EditableBox
                  key={item.key}
                  field={item.field}
                  rect={rect}
                  pageSize={{ w: width, h: height }}
                />
              );
            }
            return (
              <OverlayField
                key={item.key}
                task={item.task}
                field={item.field}
                continuation={item.kind === 'continuation'}
                scale={scale}
                heightPx={rect.h * height}
                style={rectStyle(rect)}
              />
            );
          }
        }
      })}
      {!editing && (
        <InkSurface
          inkKey={pageInkKey(pageNumber)}
          width={width}
          height={height}
          label={t('workspace.ink.pageLabel', { page: pageNumber })}
          className="absolute inset-0 z-10"
        />
      )}
    </div>
  );
}
