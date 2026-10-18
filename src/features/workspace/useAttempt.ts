import { useEffect, useState } from 'react';
import { useAnswers } from '@/state/answerStore';
import { createAttempt, findOpenAttempt } from '@/storage/attempts';

// One in-flight lookup per exam, so React's double effects never create two attempts.
const pending = new Map<string, Promise<string>>();

function openOrCreate(examId: string): Promise<string> {
  let promise = pending.get(examId);
  if (!promise) {
    promise = (async () =>
      ((await findOpenAttempt(examId, 'practice')) ?? (await createAttempt(examId, 'practice')))
        .id)();
    pending.set(examId, promise);
    void promise.finally(() => pending.delete(examId));
  }
  return promise;
}

/** Opens (or starts) the practice attempt of an exam and loads its answers. */
export function usePracticeAttempt(examId: string | null): {
  attemptId: string | null;
  failed: boolean;
} {
  const [result, setResult] = useState<{
    examId: string;
    attemptId: string | null;
    failed: boolean;
  } | null>(null);

  useEffect(() => {
    if (!examId) return;
    let active = true;
    openOrCreate(examId)
      .then(async (attemptId) => {
        await useAnswers.getState().open(attemptId);
        if (active) setResult({ examId, attemptId, failed: false });
      })
      .catch((error: unknown) => {
        console.error('Could not open attempt', error);
        if (active) setResult({ examId, attemptId: null, failed: true });
      });
    return () => {
      active = false;
      void useAnswers.getState().flush();
    };
  }, [examId]);

  return result && result.examId === examId ? result : { attemptId: null, failed: false };
}
