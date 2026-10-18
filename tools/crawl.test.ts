// @vitest-environment node
import { createServer, type Server } from 'node:http';
import { mkdtemp, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { crawl, type SourcesFile } from './crawl';
import { PoliteFetcher } from './lib/politeFetch';

let server: Server;
let origin = '';
const hits: string[] = [];

beforeAll(async () => {
  server = createServer((req, res) => {
    hits.push(req.url ?? '');
    const url = req.url ?? '/';
    if (url === '/robots.txt') return res.end('User-agent: *\nDisallow: /private\n');
    if (url === '/erettsegi/archivum') {
      res.setHeader('content-type', 'text/html');
      return res.end(`
        <a href="/erettsegi/feladatok_2024tavasz_kozep/k_mat_24maj_fl.pdf">fl</a>
        <a href="/erettsegi/feladatok_2024tavasz_kozep/k_mat_24maj_ut.pdf">ut</a>
        <a href="/erettsegi/feladatok_2024tavasz_kozep/k_angol_24maj_fl.pdf">english</a>
        <a href="/private/erettsegi/secret">secret</a>`);
    }
    if (url.endsWith('.pdf') && !url.includes('tort')) {
      res.setHeader('content-type', 'application/pdf');
      return res.end(`%PDF-1.4 fake ${url}`);
    }
    res.statusCode = 404;
    res.end();
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  origin = `http://127.0.0.1:${typeof address === 'object' && address ? address.port : 0}`;
});

afterAll(() => new Promise<void>((resolve) => server.close(() => resolve())));

describe('crawl', () => {
  it('downloads discovered files, respects robots.txt and writes sources.json', async () => {
    const out = await mkdtemp(join(tmpdir(), 'crawl-'));
    const host = new URL(origin).host;
    const fetcher = new PoliteFetcher({
      userAgent: 'test',
      minDelayMs: 0,
      cacheDir: join(out, '.cache'),
      allowedHosts: [host],
    });
    const log: string[] = [];
    const options = {
      out,
      subjects: ['matematika', 'tortenelem'],
      level: 'kozep',
      from: 2024,
      to: 2024,
      sessions: ['majus'],
      discover: true,
      dryRun: false,
      fetcher,
      startUrls: [`${origin}/erettsegi/archivum`],
      maxPages: 10,
      log: (message: string) => log.push(message),
    } satisfies Parameters<typeof crawl>[0];
    const results = await crawl(options);

    expect(results.map((r) => r.examId)).toEqual(['matematika-kozep-2024-majus']);
    const sources = JSON.parse(
      await readFile(join(out, 'exams/matematika-kozep-2024-majus/source/sources.json'), 'utf8'),
    ) as SourcesFile;
    expect(sources.files.map((f) => [f.kind, f.file])).toEqual([
      ['exam', 'mat_24maj_fl.pdf'],
      ['key', 'mat_24maj_ut.pdf'],
    ]);
    expect(sources.files[0]!.sha256).toMatch(/^[0-9a-f]{64}$/);
    expect(hits).not.toContain('/private/erettsegi/secret');
    expect(hits.filter((h) => h.includes('angol'))).toEqual([]);
    // History was not listed, so the conventional URLs (on the real OH host) are not allowed here.
    expect(log.some((line) => line.includes('blocked'))).toBe(true);

    // A second run is served from the cache.
    const before = hits.length;
    await crawl({ ...options, subjects: ['matematika'], log: () => {} });
    expect(hits.length).toBe(before);
  });
});
