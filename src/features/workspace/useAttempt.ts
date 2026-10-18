import { useEffect, useState } from 'react';
import { useAnswers } from '@/state/answerStore';
import { createAttempt, findOpenAttempt } from '@/storage/attempts';
import type { AttemptRow } from '@/storage/db';

type Mode = AttemptRow['mode'];

// One in-flight lookup per exam and mode, so React's double effects never create two attempts.
const pending = new Map<string, Promise<string>>();

function openOrCreate(examId: string, mode: Mode): Promise<string> {
  const key = `${mode}:${examId}`;
  let promise = pending.get(key);
  if (!promise) {
    promise = (async () =>
      ((await findOpenAttempt(examId, mode)) ?? (await createAttempt(examId, mode))).id)();
    pending.set(key, promise);
    void promise.finally(() => pending.delete(key));
  }
  return promise;
}

/** Opens (or starts) the open attempt of an exam in the given mode and loads its answers. */
export function useAttempt(
  examId: string | null,
  mode: Mode,
): {
  attemptId: string | null;
  failed: boolean;
} {
  const [result, setResult] = useState<{
    key: string;
    attemptId: string | null;
    failed: boolean;
  } | null>(null);
  const key = `${mode}:${examId}`;

  useEffect(() => {
    if (!examId) return;
    let active = true;
    openOrCreate(examId, mode)
      .then(async (attemptId) => {
        await useAnswers.getState().open(attemptId);
        if (active) setResult({ key, attemptId, failed: false });
      })
      .catch((error: unknown) => {
        console.error('Could not open attempt', error);
        if (active) setResult({ key, attemptId: null, failed: true });
      });
    return () => {
      active = false;
      void useAnswers.getState().flush();
    };
  }, [examId, mode, key]);

  return result && result.key === key ? result : { attemptId: null, failed: false };
}
