import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/storage/db';

export async function sha256Hex(data: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export type PdfReadResult =
  { ok: true; sha256: string; file: File } | { ok: false; reason: 'notPdf' };

/** Hashes a PDF the student picked. Nothing leaves the device. */
export async function readPdf(file: File): Promise<PdfReadResult> {
  const buffer = await file.arrayBuffer();
  const header = new TextDecoder().decode(buffer.slice(0, 5));
  if (header !== '%PDF-') return { ok: false, reason: 'notPdf' };
  return { ok: true, sha256: await sha256Hex(buffer), file };
}

export async function storePdf(sha256: string, file: File): Promise<void> {
  await db.importedPdfs.put({
    sha256,
    name: file.name,
    size: file.size,
    importedAt: Date.now(),
    blob: file,
  });
}

export async function removePdf(sha256: string): Promise<void> {
  await db.importedPdfs.delete(sha256);
}

/** True/false once known, undefined while loading. */
export function useHasImportedPdf(sha256: string | undefined): boolean | undefined {
  return useLiveQuery(
    async () => (sha256 ? (await db.importedPdfs.get(sha256)) !== undefined : false),
    [sha256],
  );
}
