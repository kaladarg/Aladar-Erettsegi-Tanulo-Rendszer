import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useRef } from 'react';
import type { LoadedManifest } from '@/content/loader';
import { getExam } from '@/content/useContent';
import { scoreExam } from '@/domain/scoring/exam';
import { summarizeResult } from '@/domain/stats/summary';
import { loadAnswers, loadReviews, setAttemptResult } from '@/storage/attempts';
import { db, type AttemptRow } from '@/storage/db';

export interface StatsData {
  attempts: AttemptRow[];
  /** Practice days (YYYY-MM-DD). */
  days: string[];
}

/** All attempts and practice days, live from IndexedDB. */
export function useStatsData(): StatsData | undefined {
  return useLiveQuery(async () => {
    const [attempts, activity] = await Promise.all([db.attempts.toArray(), db.activity.toArray()]);
    return { attempts, days: activity.map((row) => row.day) };
  }, []);
}

/**
 * Attempts submitted before per-task summaries existed are scored again once,
 * so they count in the topic statistics. Papers that no longer load are skipped.
 */
export function useBackfillSummaries(
  attempts: AttemptRow[] | undefined,
  manifest: LoadedManifest | null,
) {
  const done = useRef(new Set<string>());
  useEffect(() => {
    if (!attempts || !manifest) return;
    for (const attempt of attempts) {
      if (!attempt.submittedAt || attempt.result?.tasks || done.current.has(attempt.id)) continue;
      done.current.add(attempt.id);
      const entry = manifest.manifest.exams.find((e) => e.id === attempt.examId);
      if (!entry) continue;
      void (async () => {
        try {
          const [exam, answers, reviews] = await Promise.all([
            getExam(manifest.baseUrl, entry),
            loadAnswers(attempt.id),
            loadReviews(attempt.id),
          ]);
          const result = scoreExam(exam, answers, reviews);
          await setAttemptResult(attempt.id, summarizeResult(exam, result, answers));
        } catch {
          // Offline or the paper changed: the attempt keeps its totals only.
        }
      })();
    }
  }, [attempts, manifest]);
}
