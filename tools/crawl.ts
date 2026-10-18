/**
 * Downloads official érettségi papers and marking schemes from the Oktatási
 * Hivatal into a content repository checkout. Polite by design: respects
 * robots.txt, waits between requests, caches everything it downloads.
 *
 *   npm run content:crawl -- --out ../erettsegi-gyakorlo-content \
 *     --subjects matematika,tortenelem,magyar --level kozep --from 2024
 *
 * Options: --to <year>, --session majus|oktober, --dry-run, --no-discover.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { CONTENT_SOURCE, SUBJECT_CODES, type Session } from './content.config';
import { listArg, parseArgs, stringArg } from './lib/args';
import { sha256 } from './lib/hash';
import { isMain } from './lib/isMain';
import {
  classifyUrl,
  conventionalUrls,
  extractLinks,
  type OfficialFile,
} from './lib/officialFiles';
import { BlockedError, PoliteFetcher } from './lib/politeFetch';

export interface CrawlOptions {
  out: string;
  subjects: string[];
  level: string;
  from: number;
  to: number;
  sessions: Session[];
  discover: boolean;
  dryRun: boolean;
  fetcher: PoliteFetcher;
  startUrls: string[];
  maxPages: number;
  log: (message: string) => void;
}

export interface SourcesFile {
  examId: string;
  files: {
    kind: OfficialFile['kind'];
    suffix: string;
    file: string;
    officialUrl: string;
    sha256: string;
    bytes: number;
    downloadedAt: string;
  }[];
}

function wanted(file: OfficialFile, options: CrawlOptions): boolean {
  return (
    options.subjects.includes(file.subject) &&
    file.level === options.level &&
    file.year >= options.from &&
    file.year <= options.to &&
    options.sessions.includes(file.session)
  );
}

/** Breadth-first walk of the archive pages, collecting links to exam files. */
async function discover(options: CrawlOptions): Promise<OfficialFile[]> {
  const found = new Map<string, OfficialFile>();
  const seen = new Set<string>();
  const queue = [...options.startUrls];
  while (queue.length > 0 && seen.size < options.maxPages) {
    const url = queue.shift()!;
    if (seen.has(url)) continue;
    seen.add(url);
    let page;
    try {
      page = await options.fetcher.get(url);
    } catch (error) {
      options.log(`  skipped ${url}: ${(error as Error).message}`);
      continue;
    }
    if (page.status !== 200 || !page.contentType.includes('html')) continue;
    for (const link of extractLinks(new TextDecoder().decode(page.body), url)) {
      const file = classifyUrl(link);
      if (file) {
        if (wanted(file, options)) found.set(file.url, file);
        continue;
      }
      const target = new URL(link);
      const isArchivePage =
        CONTENT_SOURCE.allowedHosts.includes(target.host) &&
        /erettsegi/i.test(target.pathname) &&
        !/\.(pdf|zip|mp3|jpg|png|docx?)$/i.test(target.pathname);
      if (isArchivePage && !seen.has(target.href)) queue.push(target.href);
    }
  }
  return [...found.values()];
}

export async function crawl(options: CrawlOptions): Promise<SourcesFile[]> {
  const files = options.discover ? await discover(options) : [];
  options.log(`Discovered ${files.length} matching file(s) on archive pages.`);

  // Fall back to the conventional file names for exams the pages did not list.
  for (const subject of options.subjects) {
    for (let year = options.from; year <= options.to; year++) {
      for (const session of options.sessions) {
        const examId = `${subject}-${options.level}-${year}-${session}`;
        if (files.some((file) => file.examId === examId)) continue;
        for (const url of conventionalUrls(subject, options.level, year, session)) {
          const file = classifyUrl(url);
          if (file) files.push(file);
        }
      }
    }
  }

  const byExam = new Map<string, OfficialFile[]>();
  for (const file of files) byExam.set(file.examId, [...(byExam.get(file.examId) ?? []), file]);

  const results: SourcesFile[] = [];
  for (const [examId, examFiles] of [...byExam.entries()].sort()) {
    const dir = join(options.out, 'exams', examId, 'source');
    const entries: SourcesFile['files'] = [];
    for (const file of examFiles.sort((a, b) => a.url.localeCompare(b.url))) {
      if (options.dryRun) {
        options.log(`  would download ${file.url}`);
        continue;
      }
      try {
        const response = await options.fetcher.get(file.url);
        if (response.status !== 200) {
          options.log(`  ${response.status} ${file.url}`);
          continue;
        }
        await mkdir(dir, { recursive: true });
        await writeFile(join(dir, file.fileName), response.body);
        entries.push({
          kind: file.kind,
          suffix: file.suffix,
          file: file.fileName,
          officialUrl: file.url,
          sha256: sha256(response.body),
          bytes: response.body.byteLength,
          downloadedAt: new Date().toISOString(),
        });
      } catch (error) {
        const reason = error instanceof BlockedError ? 'blocked' : 'failed';
        options.log(`  ${reason}: ${file.url} (${(error as Error).message})`);
      }
    }
    if (entries.length === 0) continue;
    const sources: SourcesFile = { examId, files: entries };
    await writeFile(join(dir, 'sources.json'), `${JSON.stringify(sources, null, 2)}\n`);
    const kinds = entries.map((entry) => entry.kind);
    const missing = ['exam', 'key'].filter((kind) => !kinds.includes(kind as never));
    options.log(
      `${examId}: ${entries.length} file(s)${missing.length ? `, MISSING ${missing.join(', ')}` : ''}`,
    );
    results.push(sources);
  }
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const year = new Date().getFullYear();
  const out = resolve(stringArg(args, 'out'));
  await readFile(join(out, 'pack.json')).catch(() => {
    throw new Error(
      `${out} is not a content repository (no pack.json). Run "npm run content:init" first.`,
    );
  });
  const subjects = listArg(args, 'subjects', Object.keys(SUBJECT_CODES));
  const unknown = subjects.filter((s) => !SUBJECT_CODES[s]);
  if (unknown.length) throw new Error(`Unknown subject(s): ${unknown.join(', ')}`);
  const results = await crawl({
    out,
    subjects,
    level: stringArg(args, 'level', 'kozep'),
    from: Number(stringArg(args, 'from', '2024')),
    to: Number(stringArg(args, 'to', String(year))),
    sessions: listArg(args, 'session', ['majus', 'oktober']) as Session[],
    discover: !args['no-discover'],
    dryRun: !!args['dry-run'],
    startUrls: CONTENT_SOURCE.startUrls,
    maxPages: CONTENT_SOURCE.maxPages,
    fetcher: new PoliteFetcher({
      userAgent: CONTENT_SOURCE.userAgent,
      minDelayMs: CONTENT_SOURCE.minDelayMs,
      cacheDir: resolve(import.meta.dirname, '.cache/http'),
      allowedHosts: CONTENT_SOURCE.allowedHosts,
      log: (message) => console.log(`  ${message}`),
    }),
    log: console.log,
  });
  console.log(`\nDone: ${results.length} exam(s) with files in ${out}/exams.`);
}

if (isMain(import.meta.url)) await main();
