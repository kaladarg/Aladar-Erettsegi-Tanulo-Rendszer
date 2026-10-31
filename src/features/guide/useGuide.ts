import { useEffect, useState } from 'react';
import {
  loadGuidePage,
  loadGuideUnits,
  type GuidePage,
  type GuideSubject,
  type GuideUnit,
} from '@/content/guide';

/** A subject's units (or all units), loaded on demand; undefined while loading. */
export function useGuideUnits(subject?: GuideSubject, enabled = true): GuideUnit[] | undefined {
  const key = subject ?? 'all';
  const [loaded, setLoaded] = useState<{ key: string; units: GuideUnit[] }>();
  useEffect(() => {
    if (!enabled) return;
    let active = true;
    void loadGuideUnits(subject).then((units) => {
      if (active) setLoaded({ key, units });
    });
    return () => {
      active = false;
    };
  }, [subject, key, enabled]);
  return loaded?.key === key ? loaded.units : undefined;
}

export type LoadedPage = { unit: GuideUnit; page: GuidePage } | 'loading' | 'missing';

/** One page and its unit, loaded on demand. */
export function useGuidePage(id: string): LoadedPage {
  const [loaded, setLoaded] = useState<{ id: string; found: LoadedPage }>();
  useEffect(() => {
    let active = true;
    void loadGuidePage(id).then((found) => {
      if (active) setLoaded({ id, found: found ?? 'missing' });
    });
    return () => {
      active = false;
    };
  }, [id]);
  return loaded?.id === id ? loaded.found : 'loading';
}
