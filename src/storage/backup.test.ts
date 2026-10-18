import { beforeEach, describe, expect, it } from 'vitest';
import { DEFAULT_SETTINGS } from '@/domain/settings';
import {
  BACKUP_APP_ID,
  BackupError,
  clearAllData,
  createBackup,
  parseBackup,
  restoreBackup,
  restoreSnapshot,
  takeSnapshot,
} from './backup';
import { AppDatabase } from './db';

let database: AppDatabase;
let counter = 0;

beforeEach(async () => {
  database = new AppDatabase(`test-${counter++}`);
  await database.open();
});

async function seed() {
  await database.settings.put({
    ...DEFAULT_SETTINGS,
    key: 'app',
    theme: 'dark',
    subjects: ['magyar'],
  });
  await database.attempts.put({
    id: 'a1',
    examId: 'matematika-kozep-2024-majus',
    mode: 'practice',
    startedAt: 1,
    updatedAt: 2,
    partSeconds: { I: 60 },
  });
  await database.answers.put({ attemptId: 'a1', fieldId: 'f1', value: '42', updatedAt: 3 });
  await database.secrets.put({ key: 'anthropicApiKey', value: 'sk-ant-secret' });
}

function expectCode(fn: () => unknown, code: string) {
  try {
    fn();
    expect.unreachable('should have thrown');
  } catch (error) {
    expect(error).toBeInstanceOf(BackupError);
    expect((error as BackupError).code).toBe(code);
  }
}

describe('createBackup', () => {
  it('exports user data but never secrets or imported PDFs', async () => {
    await seed();
    const backup = await createBackup(database);
    expect(backup.app).toBe(BACKUP_APP_ID);
    expect(backup.data.attempts).toHaveLength(1);
    expect(backup.data.answers).toHaveLength(1);
    expect(JSON.stringify(backup)).not.toContain('sk-ant-secret');
    expect(Object.keys(backup.data)).not.toContain('secrets');
    expect(Object.keys(backup.data)).not.toContain('importedPdfs');
  });

  it('round-trips through parse and restore', async () => {
    await seed();
    const text = JSON.stringify(await createBackup(database));
    const other = new AppDatabase(`test-${counter++}`);
    await restoreBackup(parseBackup(text), other);
    expect(await other.answers.toArray()).toEqual(await database.answers.toArray());
    expect((await other.settings.get('app'))?.theme).toBe('dark');
  });
});

describe('parseBackup', () => {
  const valid = () => ({
    app: BACKUP_APP_ID,
    exportVersion: 1,
    exportedAt: '2026-10-18T10:00:00.000Z',
    data: { settings: [], attempts: [], answers: [], selfAssessments: [] },
  });

  it('rejects invalid JSON', () => expectCode(() => parseBackup('{oops'), 'invalidJson'));
  it('rejects files from other apps', () =>
    expectCode(() => parseBackup(JSON.stringify({ ...valid(), app: 'other' })), 'wrongApp'));
  it('rejects files from a newer app version', () =>
    expectCode(
      () => parseBackup(JSON.stringify({ ...valid(), exportVersion: 99 })),
      'newerVersion',
    ));
  it('rejects rows missing their keys', () => {
    const file = valid();
    (file.data.answers as unknown[]).push({ value: 'x' });
    expectCode(() => parseBackup(JSON.stringify(file)), 'corrupt');
  });
  it('treats missing tables as empty', () => {
    const file = { ...valid(), data: {} };
    expect(parseBackup(JSON.stringify(file)).data.attempts).toEqual([]);
  });
  it('sanitizes imported settings', () => {
    const file = valid();
    (file.data.settings as unknown[]).push({ key: 'app', theme: 'neon', textScale: 100 });
    const [settings] = parseBackup(JSON.stringify(file)).data.settings;
    expect(settings).toEqual({ ...DEFAULT_SETTINGS, key: 'app' });
  });
});

describe('snapshots', () => {
  it('undoes a full reset, including secrets', async () => {
    await seed();
    const snapshot = await takeSnapshot(database);
    await clearAllData(database);
    expect(await database.attempts.count()).toBe(0);
    expect(await database.secrets.count()).toBe(0);
    await restoreSnapshot(snapshot, database);
    expect(await database.attempts.count()).toBe(1);
    expect((await database.secrets.get('anthropicApiKey'))?.value).toBe('sk-ant-secret');
  });
});
