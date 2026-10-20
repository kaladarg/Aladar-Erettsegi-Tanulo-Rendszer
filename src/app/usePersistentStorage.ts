import { useEffect } from 'react';
import { useSettings } from '@/state/settingsStore';

/** Active days before the app asks the browser to keep its data. */
const ENGAGED_DAYS = 2;
let asked = false;

/**
 * Once the student has used the app on a couple of days, ask the browser to
 * keep the data permanently. Chrome and Edge answer silently; Firefox shows a
 * prompt, which is why we wait until the app is clearly in use.
 */
export function usePersistentStorage() {
  const loaded = useSettings((s) => s.loaded && s.persistent);
  useEffect(() => {
    if (!loaded || asked) return;
    asked = true;
    void (async () => {
      const [{ db }, { persistState, requestPersist }] = await Promise.all([
        import('@/storage/db'),
        import('@/storage/persist'),
      ]);
      if ((await persistState()) !== 'best-effort') return;
      if ((await db.activity.count()) >= ENGAGED_DAYS) await requestPersist();
    })().catch(() => undefined);
  }, [loaded]);
}
