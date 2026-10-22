import { useEffect, useState } from 'react';
import type { Exam } from '@/content/schema.types';
import { db } from '@/storage/db';
import type { PdfSource } from './pdfjs';

/** The paper's PDF: shipped in the content pack, imported by the student, or missing. */
export type PdfState =
  { status: 'loading' } | { status: 'missing' } | { status: 'ready'; source: PdfSource };

/** The pack's PDF when it ships one, otherwise a PDF the student imported. */
export function usePdfSource(exam: Exam | null, packUrl: string | null, hasPdf: boolean): PdfState {
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
