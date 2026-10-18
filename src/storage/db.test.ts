import Dexie from 'dexie';
import { describe, expect, it } from 'vitest';
import { AppDatabase, dayKey } from './db';

describe('database upgrade', () => {
  it('fills the practice days from existing attempts and answers', async () => {
    const name = 'upgrade-test';
    const v1 = new Dexie(name);
    v1.version(1).stores({
      settings: 'key',
      attempts: 'id, examId, startedAt, submittedAt',
      answers: '[attemptId+fieldId], attemptId',
      selfAssessments: '[attemptId+taskId], attemptId',
      importedPdfs: 'sha256',
      secrets: 'key',
    });
    const monday = new Date(2026, 9, 12, 10).getTime();
    const wednesday = new Date(2026, 9, 14, 18).getTime();
    await v1.table('attempts').put({
      id: 'a1',
      examId: 'x',
      mode: 'practice',
      startedAt: monday,
      updatedAt: monday,
      submittedAt: wednesday,
      partSeconds: {},
    });
    await v1
      .table('answers')
      .put({ attemptId: 'a1', fieldId: 'f1', value: '1', updatedAt: monday });
    v1.close();

    const database = new AppDatabase(name);
    const days = (await database.activity.toArray()).map((row) => row.day).sort();
    expect(days).toEqual([dayKey(monday), dayKey(wednesday)]);
    expect(days).toEqual(['2026-10-12', '2026-10-14']);
    database.close();
  });
});
