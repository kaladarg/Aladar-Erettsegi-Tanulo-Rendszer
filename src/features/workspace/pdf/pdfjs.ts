import type { PDFDocumentProxy } from 'pdfjs-dist';

// The legacy build supports the older browsers many students' phones run;
// the modern build needs JavaScript features shipped only in 2026 browsers.

export type PdfSource = { url: string } | { data: ArrayBuffer };

export interface OpenedPdf {
  doc: PDFDocumentProxy;
  /** Frees the document and its worker resources. */
  destroy: () => Promise<void>;
}

/** Loads pdf.js on demand (it is large) and opens a document. */
export async function openPdf(source: PdfSource): Promise<OpenedPdf> {
  const [pdfjs, worker] = await Promise.all([
    import('pdfjs-dist/legacy/build/pdf.mjs'),
    import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'),
  ]);
  pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
  const assets = new URL(`${import.meta.env.BASE_URL}pdfjs/`, document.baseURI).href;
  const task = pdfjs.getDocument({
    ...('url' in source ? { url: source.url } : { data: new Uint8Array(source.data.slice(0)) }),
    standardFontDataUrl: `${assets}standard_fonts/`,
    wasmUrl: `${assets}wasm/`,
    iccUrl: `${assets}iccs/`,
  });
  return { doc: await task.promise, destroy: () => task.destroy() };
}
