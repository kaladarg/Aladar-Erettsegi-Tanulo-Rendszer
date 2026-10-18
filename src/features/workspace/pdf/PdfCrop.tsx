import type { RenderTask } from 'pdfjs-dist';
import { useEffect, useRef, useState } from 'react';
import type { Rect } from '@/content/schema.types';
import { Skeleton } from '@/design/ui/Skeleton';
import { documentFor } from './cropDocuments';
import type { PdfSource } from './pdfjs';

/** Renders one area of a PDF page (a figure, chart or photo) as an image. */
export function PdfCrop({ source, rect, label }: { source: PdfSource; rect: Rect; label: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let task: RenderTask | null = null;
    let cancelled = false;
    void documentFor(source)
      .then(async ({ doc }) => {
        const page = await doc.getPage(rect.page);
        const base = page.getViewport({ scale: 1 });
        const target = canvas.current;
        if (cancelled || !target) return;
        // Sharp at up to ~700 CSS px wide on high-density screens.
        const scale = Math.min(
          3,
          (700 / (rect.w * base.width)) * Math.min(window.devicePixelRatio || 1, 2),
        );
        const viewport = page.getViewport({
          scale,
          offsetX: -rect.x * base.width * scale,
          offsetY: -rect.y * base.height * scale,
        });
        target.width = Math.round(rect.w * base.width * scale);
        target.height = Math.round(rect.h * base.height * scale);
        task = page.render({ canvas: target, viewport });
        await task.promise;
        if (!cancelled) setState('ready');
      })
      .catch((error: unknown) => {
        if (!cancelled && (error as Error)?.name !== 'RenderingCancelledException')
          setState('error');
      });
    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [source, rect]);

  return (
    <div
      className="overflow-hidden rounded-md bg-white"
      style={{ maxWidth: Math.round(rect.w * 1.4 * 595) }}
    >
      {state === 'loading' && <Skeleton className="aspect-[4/3] w-full" />}
      {state === 'error' && <p className="p-3 text-sm text-[#333]">{label}</p>}
      <canvas
        ref={canvas}
        role="img"
        aria-label={label}
        className={state === 'ready' ? 'block h-auto w-full' : 'hidden'}
      />
    </div>
  );
}
