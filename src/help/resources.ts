/**
 * Free Hungarian learning sites suggested in the help panel. Only sites that
 * are free for everyone and run by public or non-profit bodies (or free tools
 * for non-commercial use); no paid, freemium or ad-funded services. Names and
 * descriptions are in i18n under `help.resources.<id>`.
 */
export type ResourceSubject = 'all' | 'matematika' | 'tortenelem' | 'magyar';

export interface Resource {
  id: ResourceId;
  url: string;
  subjects: ResourceSubject[];
  /** Domain for a site-restricted web search from the word lookup. */
  searchDomain?: string;
}

export const RESOURCES = [
  {
    id: 'oktatas',
    url: 'https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok',
    subjects: ['all'],
  },
  { id: 'nkp', url: 'https://www.nkp.hu', subjects: ['all'], searchDomain: 'nkp.hu' },
  { id: 'zanza', url: 'https://zanza.tv', subjects: ['all'], searchDomain: 'zanza.tv' },
  { id: 'felvi', url: 'https://www.felvi.hu', subjects: ['all'] },
  {
    id: 'wikipedia',
    url: 'https://hu.wikipedia.org',
    subjects: ['all'],
    searchDomain: 'hu.wikipedia.org',
  },
  {
    id: 'khan',
    url: 'https://hu.khanacademy.org',
    subjects: ['matematika'],
    searchDomain: 'hu.khanacademy.org',
  },
  { id: 'geogebra', url: 'https://www.geogebra.org/calculator', subjects: ['matematika'] },
  {
    id: 'mek',
    url: 'https://mek.oszk.hu',
    subjects: ['magyar', 'tortenelem'],
    searchDomain: 'mek.oszk.hu',
  },
  { id: 'dia', url: 'https://dia.hu', subjects: ['magyar'], searchDomain: 'dia.hu' },
  {
    id: 'helyesiras',
    url: 'https://helyesiras.mta.hu',
    subjects: ['magyar'],
  },
  {
    id: 'nagyszotar',
    url: 'https://nagyszotar.nytud.hu',
    subjects: ['magyar'],
  },
  {
    id: 'wiktionary',
    url: 'https://hu.wiktionary.org',
    subjects: ['magyar'],
    searchDomain: 'hu.wiktionary.org',
  },
] as const satisfies readonly {
  id: string;
  url: string;
  subjects: ResourceSubject[];
  searchDomain?: string;
}[];

export type ResourceId = (typeof RESOURCES)[number]['id'];

/** Sites for one subject: the subject's own first, then the general ones. */
export function resourcesFor(subject: string): Resource[] {
  const own = RESOURCES.filter((r) => (r.subjects as readonly string[]).includes(subject));
  const general = RESOURCES.filter((r) => (r.subjects as readonly string[]).includes('all'));
  return [...own, ...general] as Resource[];
}

/** A privacy-friendly web search limited to one site; nothing is sent until opened. */
export const siteSearchUrl = (domain: string, query: string) =>
  `https://duckduckgo.com/?q=${encodeURIComponent(`site:${domain} ${query}`)}&kl=hu-hu`;
