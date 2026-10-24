import { useEffect, useState } from 'react';
import type { Exam } from './schema.types';
import { getExam, useManifest } from './useContent';

export interface ExamsState {
  /** Loaded papers by id; papers that failed to load are left out. */
  exams: Map<string, Exam>;
  loading: boolean;
  failed: number;
}

/** Loads every paper of the given subjects (all subjects when omitted). */
export function useExams(subjects?: string[]): ExamsState {
  const { state } = useManifest();
  const manifest = state.status === 'ready' ? state.data : null;
  const key = subjects ? [...subjects].sort().join(',') : '*';
  const [result, setResult] = useState<{ key: string; value: ExamsState } | null>(null);

  useEffect(() => {
    if (!manifest) return;
    let active = true;
    const entries = manifest.manifest.exams.filter(
      (e) => key === '*' || key.split(',').includes(e.subject),
    );
    void Promise.allSettled(entries.map((e) => getExam(manifest.baseUrl, e))).then((loaded) => {
      if (!active) return;
      const exams = new Map<string, Exam>();
      let failed = 0;
      loaded.forEach((r) => (r.status === 'fulfilled' ? exams.set(r.value.id, r.value) : failed++));
      setResult({ key: `${manifest.baseUrl}|${key}`, value: { exams, loading: false, failed } });
    });
    return () => {
      active = false;
    };
  }, [manifest, key]);

  if (!manifest || !result || result.key !== `${manifest.baseUrl}|${key}`)
    return { exams: new Map(), loading: state.status !== 'error', failed: 0 };
  return result.value;
}

/**
 * Whether a paper suits the student's level in its subject: emelt students
 * practise both levels, középszint students only középszint.
 */
export function fitsLevel(examLevel: string, ownLevel: string | undefined): boolean {
  return (ownLevel ?? 'kozep') === 'emelt' || examLevel !== 'emelt';
}
