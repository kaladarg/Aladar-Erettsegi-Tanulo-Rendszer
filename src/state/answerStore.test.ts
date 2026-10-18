import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  createAttempt,
  deleteAttempt,
  findOpenAttempt,
  loadAnswers,
  restoreAttempt,
} from '@/storage/attempts';
import { db } from '@/storage/db';
import { useAnswers } from './answerStore';

beforeEach(async () => {
  await useAnswers.getState().close();
  await db.attempts.clear();
  await db.answers.clear();
});

describe('answer store', () => {
  it('debounces writes and persists them', async () => {
    const attempt = await createAttempt('exam-1', 'practice');
    await useAnswers.getState().open(attempt.id);
    useAnswers.getState().setAnswer('1-f1', '6');
    useAnswers.getState().setAnswer('1-f1', '67');
    expect(useAnswers.getState().status).toBe('saving');
    expect(await loadAnswers(attempt.id)).toEqual({});
    await vi.waitFor(async () => expect(await loadAnswers(attempt.id)).toEqual({ '1-f1': '67' }), {
      timeout: 2_000,
    });
    expect(useAnswers.getState().status).toBe('saved');
  });

  it('deletes cleared answers and keeps arrays', async () => {
    const attempt = await createAttempt('exam-1', 'practice');
    await useAnswers.getState().open(attempt.id);
    useAnswers.getState().setAnswer('2-f1', ['B', 'C']);
    useAnswers.getState().setAnswer('1-f1', 'x');
    await useAnswers.getState().flush();
    useAnswers.getState().setAnswer('1-f1', '');
    await useAnswers.getState().flush();
    expect(await loadAnswers(attempt.id)).toEqual({ '2-f1': ['B', 'C'] });
  });

  it('flushes the previous attempt when another opens', async () => {
    const a = await createAttempt('exam-1', 'practice');
    const b = await createAttempt('exam-2', 'practice');
    await useAnswers.getState().open(a.id);
    useAnswers.getState().setAnswer('f', 'kept');
    await useAnswers.getState().open(b.id);
    expect(await loadAnswers(a.id)).toEqual({ f: 'kept' });
    expect(useAnswers.getState().answers).toEqual({});
  });
});

describe('attempts', () => {
  it('finds the newest open attempt and ignores submitted ones', async () => {
    const old = await createAttempt('exam-1', 'practice');
    const newer = await createAttempt('exam-1', 'practice');
    await db.attempts.update(newer.id, { updatedAt: old.updatedAt + 10 });
    const submitted = await createAttempt('exam-1', 'practice');
    await db.attempts.update(submitted.id, { submittedAt: Date.now(), updatedAt: Date.now() + 99 });
    expect((await findOpenAttempt('exam-1', 'practice'))?.id).toBe(newer.id);
    expect(await findOpenAttempt('exam-1', 'exam')).toBeUndefined();
  });

  it('deletes and restores an attempt with its answers', async () => {
    const attempt = await createAttempt('exam-1', 'practice');
    await useAnswers.getState().open(attempt.id);
    useAnswers.getState().setAnswer('f1', 'a');
    await useAnswers.getState().flush();
    const deleted = await deleteAttempt(attempt.id);
    expect(await db.attempts.count()).toBe(0);
    expect(await db.answers.count()).toBe(0);
    await restoreAttempt(deleted!);
    expect(await loadAnswers(attempt.id)).toEqual({ f1: 'a' });
  });
});
