import type { RenderTask } from 'pdfjs-dist';
import { useEffect, useRef, useState } from 'react';
import type { Rect } from '@/content/schema.types';
import { Skeleton } from '@/design/ui/Skeleton';
import { documentFor } from './cropDocuments';
import type { PdfSource } from './pdfjs';

// Rendered figures, so returning to a task or switching views shows them at once.
const rendered = new Map<string, string>();
const cacheKey = (source: PdfSource, rect: Rect) =>
  `${'url' in source ? source.url : source.data.byteLength}|${rect.page}|${rect.x}|${rect.y}|${rect.w}|${rect.h}`;

/**
 * Renders one area of a PDF page (a figure, chart or photo) as an image.
 * Figures render when they come near the screen, so the first ones on the
 * page are not queued behind every other figure of the paper.
 */
export function PdfCrop({ source, rect, label }: { source: PdfSource; rect: Rect; label: string }) {
  const key = cacheKey(source, rect);
  const box = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [near, setNear] = useState(false);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>(() =>
    rendered.has(key) ? 'ready' : 'loading',
  );
  const cached = rendered.get(key);

  useEffect(() => {
    if (cached) return;
    const element = box.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [cached]);

  useEffect(() => {
    if (!near || cached) return;
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
        if (cancelled) return;
        try {
          rendered.set(key, target.toDataURL('image/webp', 0.85));
        } catch {
          // A tainted or huge canvas just is not cached.
        }
        setState('ready');
      })
      .catch((error: unknown) => {
        if (!cancelled && (error as Error)?.name !== 'RenderingCancelledException')
          setState('error');
      });
    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [near, cached, source, rect, key]);

  return (
    <div
      ref={box}
      className="overflow-hidden rounded-md bg-white"
      style={{ maxWidth: Math.round(rect.w * 1.4 * 595) }}
    >
      {cached ? (
        <img src={cached} alt={label} className="block h-auto w-full" />
      ) : (
        <>
          {state === 'loading' && (
            <Skeleton
              className="w-full"
              style={{ aspectRatio: `${rect.w * 595} / ${rect.h * 842}` }}
            />
          )}
          {state === 'error' && <p className="p-3 text-sm text-[#333]">{label}</p>}
          <canvas
            ref={canvas}
            role="img"
            aria-label={label}
            className={state === 'ready' ? 'block h-auto w-full' : 'hidden'}
          />
        </>
      )}
    </div>
  );
}
