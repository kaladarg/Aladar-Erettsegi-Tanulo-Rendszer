import {
  CONTENT_SOURCE,
  LEVEL_CODES,
  SESSIONS,
  SUBJECT_CODES,
  type Session,
} from '../content.config';

export type FileKind = 'exam' | 'key' | 'attachment';

export interface OfficialFile {
  url: string;
  examId: string;
  subject: string;
  level: string;
  year: number;
  session: Session;
  kind: FileKind;
  /** Suffix from the file name, e.g. fl, ut, fgy. */
  suffix: string;
  fileName: string;
}

const FILE_RE =
  /\/feladatok_(\d{4})(tavasz|osz)_([a-z]+)\/([a-z])_([a-z]+)_(\d{2})(maj|okt)_([a-z0-9]+)\.(pdf|zip|mp3)$/i;

const bySubjectCode = Object.fromEntries(
  Object.entries(SUBJECT_CODES).map(([id, code]) => [code, id]),
);
const byLevelDir = Object.fromEntries(Object.entries(LEVEL_CODES).map(([id, l]) => [l.dir, id]));

function kindOf(suffix: string): FileKind {
  if (/^fl\d*$/.test(suffix)) return 'exam';
  if (/^ut\d*$/.test(suffix)) return 'key';
  return 'attachment';
}

/** Classifies an official download URL, or returns null if it is not an exam file we support. */
export function classifyUrl(url: string): OfficialFile | null {
  const match = FILE_RE.exec(new URL(url).pathname.toLowerCase());
  if (!match) return null;
  const [, year, season, levelDir, , code, yy, month, suffix, ext] = match as unknown as string[];
  const subject = bySubjectCode[code!];
  const level = byLevelDir[levelDir!];
  if (!subject || !level || year!.slice(2) !== yy) return null;
  const session: Session = season === 'tavasz' ? 'majus' : 'oktober';
  if ((session === 'majus') !== (month === 'maj')) return null;
  return {
    url,
    examId: `${subject}-${level}-${year}-${session}`,
    subject,
    level,
    year: Number(year),
    session,
    kind: kindOf(suffix!),
    suffix: suffix!,
    fileName: `${code}_${yy}${month}_${suffix}.${ext}`,
  };
}

/** The conventional URLs of a paper and its marking scheme, used as a fallback. */
export function conventionalUrls(
  subject: string,
  level: string,
  year: number,
  session: Session,
): string[] {
  const code = SUBJECT_CODES[subject];
  const lvl = LEVEL_CODES[level];
  if (!code || !lvl) return [];
  const s = SESSIONS[session];
  const dir = `${CONTENT_SOURCE.downloadBase}/feladatok_${year}${s.dir}_${lvl.dir}`;
  const base = `${lvl.prefix}_${code}_${String(year).slice(2)}${s.file}`;
  return [`${dir}/${base}_fl.pdf`, `${dir}/${base}_ut.pdf`];
}

/** Extracts absolute link targets from an HTML page. */
export function extractLinks(html: string, baseUrl: string): string[] {
  const links = new Set<string>();
  for (const match of html.matchAll(/href\s*=\s*["']([^"'#]+)["']/gi)) {
    try {
      links.add(new URL(match[1]!.replace(/&amp;/g, '&'), baseUrl).href);
    } catch {
      // Ignore malformed URLs.
    }
  }
  return [...links];
}

export interface PageFilter {
  level: string;
  from: number;
  to: number;
  sessions: Session[];
}

const ARCHIVE_ROOT = '/kozneveles/erettsegi/feladatsorok';
const PERIOD_RE = /^(kozepszint|emelt_?szint)_?(\d{4})_?(tavasz|osz|majus|oktober|februar)$/;

/**
 * Whether an archive page can lead to papers we want. The OH archive has one
 * page per level and exam period (e.g. .../feladatsorok/kozepszint_2024tavasz)
 * with sub-pages per exam day; everything else is skipped to keep the crawl short.
 */
export function isRelevantArchivePage(url: URL, filter: PageFilter): boolean {
  if (url.search || url.hash) return false;
  const path = url.pathname.replace(/\/$/, '');
  if (path !== ARCHIVE_ROOT && !path.startsWith(`${ARCHIVE_ROOT}/`)) return false;
  const segments = path.slice(ARCHIVE_ROOT.length).split('/').filter(Boolean);
  if (segments.length === 0) return true;
  const match = PERIOD_RE.exec(segments[0]!);
  if (!match) return false;
  const [, levelName, year, season] = match as unknown as [string, string, string, string];
  const level = levelName.startsWith('kozep') ? 'kozep' : 'emelt';
  const session: Session | null =
    season === 'tavasz' || season === 'majus'
      ? 'majus'
      : season === 'osz' || season === 'oktober'
        ? 'oktober'
        : null;
  return (
    level === filter.level &&
    Number(year) >= filter.from &&
    Number(year) <= filter.to &&
    session !== null &&
    filter.sessions.includes(session)
  );
}
