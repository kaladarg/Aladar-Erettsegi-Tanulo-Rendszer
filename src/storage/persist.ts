export type PersistState = 'persisted' | 'best-effort' | 'unsupported';

/** Whether the browser promised to keep this site's data (it may still clear "best effort" data). */
export async function persistState(): Promise<PersistState> {
  if (typeof navigator === 'undefined' || !navigator.storage?.persisted) return 'unsupported';
  try {
    return (await navigator.storage.persisted()) ? 'persisted' : 'best-effort';
  } catch {
    return 'unsupported';
  }
}

/**
 * Asks the browser to keep the data even when space runs low. Chrome and
 * Edge decide silently (installed apps and frequent use count), Firefox asks
 * the user, Safari grants it to home-screen apps.
 */
export async function requestPersist(): Promise<PersistState> {
  if (typeof navigator === 'undefined' || !navigator.storage?.persist) return 'unsupported';
  try {
    return (await navigator.storage.persist()) ? 'persisted' : 'best-effort';
  } catch {
    return 'unsupported';
  }
}
