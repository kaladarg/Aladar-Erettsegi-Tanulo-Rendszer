import type { BuiltinOralTopic } from '@/content/oralTopics';
import { newAttemptId } from './attempts';
import { dayKey, db, type OralTopicRow } from './db';

/** Adds the student's own tételek, one per non-empty line. */
export async function addOwnTopics(subject: string, titles: string[]): Promise<number> {
  const now = Date.now();
  const rows: OralTopicRow[] = titles
    .map((title) => title.trim())
    .filter(Boolean)
    .map((title, index) => ({
      id: newAttemptId(),
      subject,
      title,
      outline: '',
      createdAt: now + index,
      updatedAt: now + index,
      practised: 0,
    }));
  await db.oralTopics.bulkAdd(rows);
  return rows.length;
}

/** The stored copy of a built-in topic, created on first use. */
export async function ensureBuiltinTopic(builtin: BuiltinOralTopic): Promise<string> {
  const existing = await db.oralTopics.where('subject').equals(builtin.subject).toArray();
  const found = existing.find((row) => row.builtinId === builtin.id);
  if (found) return found.id;
  const now = Date.now();
  const id = `builtin-${builtin.id}`;
  await db.oralTopics.put({
    id,
    subject: builtin.subject,
    title: builtin.title,
    builtinId: builtin.id,
    outline: '',
    createdAt: now,
    updatedAt: now,
    practised: 0,
  });
  return id;
}

export async function saveOutline(id: string, outline: string): Promise<void> {
  await db.oralTopics.update(id, { outline, updatedAt: Date.now() });
}

/** Counts one rehearsal (a finished answer or a recording) and marks the day as active. */
export async function markPractised(id: string): Promise<void> {
  const now = Date.now();
  await db.transaction('rw', db.oralTopics, db.activity, async () => {
    const row = await db.oralTopics.get(id);
    if (!row) return;
    await db.oralTopics.update(id, { practised: row.practised + 1, updatedAt: now });
    await db.activity.put({ day: dayKey(now), updatedAt: now });
  });
}

export async function deleteTopic(id: string): Promise<void> {
  await db.transaction('rw', db.oralTopics, db.recordings, async () => {
    await db.recordings.where('topicId').equals(id).delete();
    await db.oralTopics.delete(id);
  });
}

export async function saveRecording(
  topicId: string,
  blob: Blob,
  seconds: number,
): Promise<void> {
  await db.recordings.add({
    id: newAttemptId(),
    topicId,
    createdAt: Date.now(),
    seconds,
    mimeType: blob.type,
    blob,
  });
}

export async function deleteRecording(id: string): Promise<void> {
  await db.recordings.delete(id);
}
