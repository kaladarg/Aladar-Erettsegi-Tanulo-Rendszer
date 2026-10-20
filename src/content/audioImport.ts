import { useLiveQuery } from 'dexie-react-hooks';
import { db, type ImportedAudioRow } from '@/storage/db';

export const audioKey = (examId: string, partId: string) => `${examId}/${partId}`;

/** Keeps a recording the student picked on this device. Nothing is uploaded. */
export async function storeAudio(examId: string, partId: string, file: File): Promise<void> {
  await db.importedAudio.put({
    key: audioKey(examId, partId),
    name: file.name,
    size: file.size,
    importedAt: Date.now(),
    blob: file,
  });
}

export async function removeAudio(examId: string, partId: string): Promise<void> {
  await db.importedAudio.delete(audioKey(examId, partId));
}

/** The stored recording, null when there is none, undefined while loading. */
export function useImportedAudio(
  examId: string,
  partId: string,
): ImportedAudioRow | null | undefined {
  return useLiveQuery(
    async () => (await db.importedAudio.get(audioKey(examId, partId))) ?? null,
    [examId, partId],
  );
}
