/**
 * Word lookup in the Hungarian Wikipedia and Wiktionary. Only the searched
 * text leaves the device, and only when the student asks for a lookup.
 * Both sites serve CORS-enabled APIs; see https://www.mediawiki.org/wiki/API:Opensearch
 * and https://hu.wikipedia.org/api/rest_v1/.
 */
export type LookupSite = 'wiktionary' | 'wikipedia';

export interface LookupResult {
  site: LookupSite;
  title: string;
  extract: string;
  url: string;
}

const HOSTS: Record<LookupSite, string> = {
  wiktionary: 'https://hu.wiktionary.org',
  wikipedia: 'https://hu.wikipedia.org',
};

/** Trims a selection to something worth looking up (a word or short phrase). */
export function cleanQuery(raw: string): string {
  return raw
    .replace(/[\s\u00a0]+/g, ' ')
    .replace(/^[\s"„“”'«»(),.;:!?–-]+|[\s"„“”'«»(),.;:!?–-]+$/g, '')
    .slice(0, 80);
}

async function getJson(url: string, signal?: AbortSignal): Promise<unknown> {
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Lookup failed: ${response.status}`);
  return response.json();
}

/** Best-matching page title on a site (handles inflected forms and capitalization). */
async function findTitle(site: LookupSite, query: string, signal?: AbortSignal) {
  const url = new URL(`${HOSTS[site]}/w/api.php`);
  url.search = new URLSearchParams({
    action: 'opensearch',
    search: query,
    limit: '1',
    namespace: '0',
    format: 'json',
    origin: '*',
  }).toString();
  const data = (await getJson(url.href, signal)) as [string, string[]] | null;
  return data?.[1]?.[0] ?? null;
}

interface Summary {
  title?: string;
  extract?: string;
  type?: string;
  content_urls?: { desktop?: { page?: string } };
}

/** A short summary of the best match, or null when the site has no page for it. */
export async function lookup(
  site: LookupSite,
  rawQuery: string,
  signal?: AbortSignal,
): Promise<LookupResult | null> {
  const query = cleanQuery(rawQuery);
  if (!query) return null;
  const title = (await findTitle(site, query, signal)) ?? query;
  const summary = (await getJson(
    `${HOSTS[site]}/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`,
    signal,
  )) as Summary | null;
  if (!summary?.extract || summary.type === 'disambiguation') return null;
  return {
    site,
    title: summary.title ?? title,
    extract: summary.extract,
    url:
      summary.content_urls?.desktop?.page ??
      `${HOSTS[site]}/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`,
  };
}

/** A web search link; nothing is sent until the student opens it. */
export const webSearchUrl = (query: string) =>
  `https://duckduckgo.com/?q=${encodeURIComponent(cleanQuery(query))}&kl=hu-hu`;
