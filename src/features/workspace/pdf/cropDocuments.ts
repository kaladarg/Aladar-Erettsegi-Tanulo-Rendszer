import { openPdf, type OpenedPdf, type PdfSource } from './pdfjs';

// One open document per PDF, shared by every figure of the workspace.
const documents = new Map<string | ArrayBuffer, Promise<OpenedPdf>>();

export function documentFor(source: PdfSource): Promise<OpenedPdf> {
  const key = 'url' in source ? source.url : source.data;
  let doc = documents.get(key);
  if (!doc) {
    doc = openPdf(source);
    documents.set(key, doc);
  }
  return doc;
}

/** Frees the documents opened for figures (called when leaving the workspace). */
export async function closeCropDocuments(): Promise<void> {
  const all = [...documents.values()];
  documents.clear();
  await Promise.all(all.map((doc) => doc.then((d) => d.destroy()).catch(() => undefined)));
}

/** Starts opening the paper for figures before the first one is on screen. */
export function preloadCrops(source: PdfSource) {
  void documentFor(source).catch(() => undefined);
}
