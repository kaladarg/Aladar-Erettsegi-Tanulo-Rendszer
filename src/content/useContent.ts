import { useCallback, useEffect, useState } from 'react';
import { useSettings } from '@/state/settingsStore';
import { contentBaseUrl } from './config';
import { ContentError, loadExam, loadManifest, type LoadedManifest } from './loader';
import type { Exam } from './schema.types';

type State<T> =
  { status: 'loading' } | { status: 'error'; error: ContentError } | { status: 'ready'; data: T };

const manifestCache = new Map<string, Promise<LoadedManifest>>();
const examCache = new Map<string, Promise<Exam>>();

const asContentError = (error: unknown) =>
  error instanceof ContentError ? error : new ContentError('offline', String(error));

/** Loads a cached promise into React state, with a retry that clears the cache entry. */
function useCachedPromise<T>(
  key: string | null,
  create: () => Promise<T>,
  cache: Map<string, Promise<T>>,
) {
  const [attempt, setAttempt] = useState(0);
  const requestKey = key ? `${key}#${attempt}` : null;
  // Results are tagged with the request they belong to; anything else reads as loading.
  const [result, setResult] = useState<{ requestKey: string; state: State<T> } | null>(null);

  useEffect(() => {
    if (!key || !requestKey) return;
    let active = true;
    let promise = cache.get(key);
    if (!promise) {
      promise = create();
      cache.set(key, promise);
      promise.catch(() => cache.delete(key));
    }
    promise.then(
      (data) => active && setResult({ requestKey, state: { status: 'ready', data } }),
      (error: unknown) =>
        active &&
        setResult({ requestKey, state: { status: 'error', error: asContentError(error) } }),
    );
    return () => {
      active = false;
    };
    // `create` is derived from `key`; re-running on its identity would refetch every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestKey]);

  const retry = useCallback(() => {
    if (key) cache.delete(key);
    setAttempt((n) => n + 1);
  }, [key, cache]);

  const state: State<T> =
    result && result.requestKey === requestKey ? result.state : { status: 'loading' };
  return { state, retry };
}

export function useContentBase(): string {
  const source = useSettings((s) => s.settings.contentSource);
  return contentBaseUrl(source);
}

export function useManifest() {
  const baseUrl = useContentBase();
  const loaded = useSettings((s) => s.loaded);
  return useCachedPromise(loaded ? baseUrl : null, () => loadManifest(baseUrl), manifestCache);
}

export function useExam(examId: string) {
  const { state: manifestState, retry: retryManifest } = useManifest();
  const ready = manifestState.status === 'ready' ? manifestState.data : null;
  const entry = ready?.manifest.exams.find((exam) => exam.id === examId) ?? null;
  const key = ready && entry ? `${ready.baseUrl}|${entry.id}|${entry.sha256}` : null;
  const { state, retry } = useCachedPromise(key, () => loadExam(ready!.baseUrl, entry!), examCache);

  if (manifestState.status !== 'ready')
    return { state: manifestState, retry: retryManifest, entry: null, manifest: null };
  if (!entry) {
    return {
      state: {
        status: 'error',
        error: new ContentError('notFound', `Unknown exam ${examId}`),
      } as State<Exam>,
      retry: retryManifest,
      entry: null,
      manifest: ready,
    };
  }
  return { state, retry, entry, manifest: ready };
}

/** Clears loaded content, e.g. after the content source changes. */
export function resetContentCache(): void {
  manifestCache.clear();
  examCache.clear();
}
