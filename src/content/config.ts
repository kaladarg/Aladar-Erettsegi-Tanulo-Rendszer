/**
 * Where the content pack (manifest.json and exams) is loaded from, in order:
 * 1. the student's own setting (Settings → Content source),
 * 2. VITE_CONTENT_BASE_URL at build time (e.g. the private pack in dev:content),
 * 3. the bundled demo pack.
 */
export const DEFAULT_CONTENT_BASE = `${import.meta.env.BASE_URL}demo-pack/`;

const withSlash = (url: string) => (url.endsWith('/') ? url : `${url}/`);

export function contentBaseUrl(userSetting: string): string {
  const configured = userSetting || import.meta.env.VITE_CONTENT_BASE_URL || DEFAULT_CONTENT_BASE;
  return withSlash(new URL(configured, window.location.origin).href);
}

/** Cache Storage bucket shared with the service worker's runtime caching. */
export const CONTENT_CACHE = 'eg-content';
