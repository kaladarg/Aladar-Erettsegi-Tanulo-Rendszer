import { sanitizeSettings } from '@/domain/settings';
import {
  ALL_TABLES,
  BACKUP_TABLES,
  db,
  type AppDatabase,
  type BackupTable,
  type RecordingRow,
} from './db';

export const BACKUP_APP_ID = 'erettsegi-gyakorlo';
export const BACKUP_VERSION = 1;

export interface BackupFile {
  app: typeof BACKUP_APP_ID;
  exportVersion: number;
  exportedAt: string;
  data: Record<BackupTable, unknown[]>;
}

export type BackupErrorCode = 'invalidJson' | 'wrongApp' | 'newerVersion' | 'corrupt';

export class BackupError extends Error {
  constructor(public readonly code: BackupErrorCode) {
    super(code);
    this.name = 'BackupError';
  }
}

export async function createBackup(database: AppDatabase = db): Promise<BackupFile> {
  const data = {} as Record<BackupTable, unknown[]>;
  await database.transaction('r', BACKUP_TABLES as unknown as string[], async () => {
    for (const table of BACKUP_TABLES) {
      data[table] = await database.table(table).toArray();
    }
  });
  // Blobs cannot go into JSON: recordings travel as data URLs.
  data.recordings = await Promise.all(
    (data.recordings as RecordingRow[]).map(async ({ blob, ...row }) => ({
      ...row,
      data: await blobToDataUrl(blob),
    })),
  );
  return {
    app: BACKUP_APP_ID,
    exportVersion: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    data,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasKeys(row: unknown, keys: string[]): boolean {
  return isRecord(row) && keys.every((key) => typeof row[key] === 'string');
}

const REQUIRED_KEYS: Record<BackupTable, string[]> = {
  settings: ['key'],
  attempts: ['id', 'examId'],
  answers: ['attemptId', 'fieldId'],
  selfAssessments: ['attemptId', 'taskId'],
  activity: ['day'],
  drillSessions: ['id', 'subject'],
  drillEvents: ['examId', 'taskId'],
  oralTopics: ['id', 'subject'],
  recordings: ['id', 'topicId', 'data'],
  cardEvents: ['cardId', 'time'],
  essayOutlines: ['key', 'examId', 'taskId'],
  reviewMarks: ['examId', 'taskId', 'time', 'choice'],
  guideProgress: ['pageId'],
  memoriterProgress: ['id'],
};

/** Recordings are stored as Blobs; in the backup file they are base64 data URLs. */
async function blobToDataUrl(blob: Blob): Promise<string> {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return `data:${blob.type || 'application/octet-stream'};base64,${btoa(binary)}`;
}

function dataUrlToBlob(dataUrl: string): Blob {
  const match = /^data:([^;,]*)(;base64)?,(.*)$/s.exec(dataUrl);
  if (!match) throw new BackupError('corrupt');
  const binary = match[2] ? atob(match[3]!) : decodeURIComponent(match[3]!);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: match[1] || 'application/octet-stream' });
}

/** Parses and validates a backup file. Throws BackupError with a user-facing reason code. */
export function parseBackup(text: string): BackupFile {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new BackupError('invalidJson');
  }
  if (!isRecord(parsed) || parsed.app !== BACKUP_APP_ID) throw new BackupError('wrongApp');
  if (typeof parsed.exportVersion !== 'number' || parsed.exportVersion < 1) {
    throw new BackupError('corrupt');
  }
  if (parsed.exportVersion > BACKUP_VERSION) throw new BackupError('newerVersion');
  if (!isRecord(parsed.data) || typeof parsed.exportedAt !== 'string') {
    throw new BackupError('corrupt');
  }
  const data = {} as Record<BackupTable, unknown[]>;
  for (const table of BACKUP_TABLES) {
    const rows = parsed.data[table] ?? [];
    if (!Array.isArray(rows) || !rows.every((row) => hasKeys(row, REQUIRED_KEYS[table]))) {
      throw new BackupError('corrupt');
    }
    data[table] =
      table === 'settings'
        ? rows
            .filter((row) => row.key === 'app')
            .map((row) => ({ ...sanitizeSettings(row), key: 'app' }))
        : rows;
  }
  return {
    app: BACKUP_APP_ID,
    exportVersion: parsed.exportVersion,
    exportedAt: parsed.exportedAt,
    data,
  };
}

/** Replaces the backup tables with the file's contents. Other tables are untouched. */
export async function restoreBackup(backup: BackupFile, database: AppDatabase = db): Promise<void> {
  const recordings = (
    backup.data.recordings as (Omit<RecordingRow, 'blob'> & { data: string })[]
  ).map(({ data, ...row }) => ({ ...row, blob: dataUrlToBlob(data) }));
  backup = { ...backup, data: { ...backup.data, recordings } };
  await database.transaction('rw', BACKUP_TABLES as unknown as string[], async () => {
    for (const table of BACKUP_TABLES) {
      await database.table(table).clear();
      await database.table(table).bulkPut(backup.data[table]);
    }
  });
}

/** Full in-memory copy of every table, used to undo a reset or an import. */
export type Snapshot = Record<(typeof ALL_TABLES)[number], unknown[]>;

export async function takeSnapshot(database: AppDatabase = db): Promise<Snapshot> {
  const snapshot = {} as Snapshot;
  await database.transaction('r', ALL_TABLES as unknown as string[], async () => {
    for (const table of ALL_TABLES) snapshot[table] = await database.table(table).toArray();
  });
  return snapshot;
}

export async function restoreSnapshot(
  snapshot: Snapshot,
  database: AppDatabase = db,
): Promise<void> {
  await database.transaction('rw', ALL_TABLES as unknown as string[], async () => {
    for (const table of ALL_TABLES) {
      await database.table(table).clear();
      await database.table(table).bulkPut(snapshot[table]);
    }
  });
}

export async function clearAllData(database: AppDatabase = db): Promise<void> {
  await database.transaction('rw', ALL_TABLES as unknown as string[], async () => {
    for (const table of ALL_TABLES) await database.table(table).clear();
  });
}

export function backupFileName(date = new Date()): string {
  const stamp = date.toISOString().slice(0, 10);
  return `erettsegi-gyakorlo-mentes-${stamp}.json`;
}
