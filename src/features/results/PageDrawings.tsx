import { parseInk } from '@/domain/ink/ink';
import { t } from '@/i18n';
import type { Answers } from '@/storage/attempts';
import { InkView } from '../workspace/ink/InkView';
import { PdfCrop } from '../workspace/pdf/PdfCrop';
import type { PdfSource } from '../workspace/pdf/pdfjs';

/** The paper pages the student drew on, with the drawings over them. */
export function PageDrawings({ answers, source }: { answers: Answers; source: PdfSource | null }) {
  const pages = Object.entries(answers)
    .map(([key, value]) => ({ page: Number(/^__ink:p(\d+)$/.exec(key)?.[1]), value }))
    .filter(({ page }) => page > 0)
    .map(({ page, value }) => ({ page, strokes: parseInk(value) }))
    .filter(({ strokes }) => strokes.length > 0)
    .sort((a, b) => a.page - b.page);
  if (!source || pages.length === 0) return null;
  return (
    <section aria-labelledby="drawings-title" className="mt-10 grid gap-4">
      <h2 id="drawings-title" className="text-2xl font-bold">
        {t('workspace.ink.pageDrawingsTitle')}
      </h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {pages.map(({ page, strokes }) => {
          const label = t('workspace.ink.pageDrawing', { page });
          return (
            <li key={page} className="grid gap-1">
              <p className="text-sm font-medium">{label}</p>
              <div className="relative max-w-[52rem] shadow-1">
                <PdfCrop source={source} rect={{ page, x: 0, y: 0, w: 1, h: 1 }} label={label} />
                <InkView strokes={strokes} className="absolute inset-0 h-full w-full" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
