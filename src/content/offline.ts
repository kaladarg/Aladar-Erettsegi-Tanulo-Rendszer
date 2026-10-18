import { CONTENT_CACHE } from './config';

const supported = () => typeof caches !== 'undefined';

/** Stores the given URLs in the cache the service worker serves content from. */
export async function saveForOffline(urls: string[]): Promise<boolean> {
  if (!supported()) return false;
  try {
    const cache = await caches.open(CONTENT_CACHE);
    await cache.addAll(urls);
    return true;
  } catch {
    return false;
  }
}

export async function isSavedOffline(urls: string[]): Promise<boolean> {
  if (!supported() || urls.length === 0) return false;
  const cache = await caches.open(CONTENT_CACHE);
  const hits = await Promise.all(urls.map((url) => cache.match(url)));
  return hits.every(Boolean);
}
