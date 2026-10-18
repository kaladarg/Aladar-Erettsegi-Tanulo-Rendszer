import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { sha256 } from './hash';
import { isAllowed, parseRobots, type RobotsRules } from './robots';

export interface PoliteFetchOptions {
  userAgent: string;
  /** Minimum delay between two requests to the same host. */
  minDelayMs: number;
  /** Responses are cached here so repeated runs do not hit the server again. */
  cacheDir: string;
  /** Hosts the crawler may contact at all. */
  allowedHosts: string[];
  log?: (message: string) => void;
}

export class BlockedError extends Error {}

/**
 * fetch() wrapper that respects robots.txt, waits between requests per host,
 * retries transient failures, and caches successful responses on disk.
 */
export class PoliteFetcher {
  private robots = new Map<string, Promise<RobotsRules>>();
  private lastRequest = new Map<string, number>();
  private queue = new Map<string, Promise<unknown>>();

  constructor(private readonly options: PoliteFetchOptions) {}

  private log(message: string) {
    this.options.log?.(message);
  }

  private async throttle(host: string, extraDelayMs = 0): Promise<void> {
    const previous = this.queue.get(host) ?? Promise.resolve();
    const turn = previous.then(async () => {
      const wait =
        (this.lastRequest.get(host) ?? 0) +
        Math.max(this.options.minDelayMs, extraDelayMs) -
        Date.now();
      if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
      this.lastRequest.set(host, Date.now());
    });
    this.queue.set(host, turn);
    await turn;
  }

  private rulesFor(url: URL): Promise<RobotsRules> {
    const key = url.origin;
    let rules = this.robots.get(key);
    if (!rules) {
      rules = (async () => {
        await this.throttle(url.host);
        try {
          const response = await fetch(new URL('/robots.txt', url.origin), {
            headers: { 'user-agent': this.options.userAgent },
          });
          if (!response.ok) return { allow: [], disallow: [] };
          return parseRobots(await response.text(), this.options.userAgent);
        } catch {
          // Unreachable robots.txt: be conservative and continue only with the delay.
          return { allow: [], disallow: [] };
        }
      })();
      this.robots.set(key, rules);
    }
    return rules;
  }

  private cachePath(url: string): string {
    return join(this.options.cacheDir, sha256(url));
  }

  async get(
    rawUrl: string,
    { method = 'GET' }: { method?: 'GET' | 'HEAD' } = {},
  ): Promise<{
    status: number;
    contentType: string;
    body: Uint8Array;
    fromCache: boolean;
  }> {
    const url = new URL(rawUrl);
    if (!this.options.allowedHosts.includes(url.host)) {
      throw new BlockedError(`Host not allowed: ${url.host}`);
    }
    const cacheFile = this.cachePath(url.href);
    if (method === 'GET') {
      try {
        const meta = JSON.parse(await readFile(`${cacheFile}.json`, 'utf8')) as {
          contentType: string;
        };
        return {
          status: 200,
          contentType: meta.contentType,
          body: await readFile(cacheFile),
          fromCache: true,
        };
      } catch {
        // Not cached yet.
      }
    }

    const rules = await this.rulesFor(url);
    if (!isAllowed(rules, url.pathname + url.search)) {
      throw new BlockedError(`robots.txt disallows ${url.href}`);
    }

    for (let attempt = 1; ; attempt++) {
      await this.throttle(url.host, (rules.crawlDelaySeconds ?? 0) * 1000);
      this.log(`${method} ${url.href}`);
      try {
        const response = await fetch(url, {
          method,
          headers: { 'user-agent': this.options.userAgent },
          redirect: 'follow',
        });
        if ((response.status === 429 || response.status >= 500) && attempt < 4) {
          await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 1000));
          continue;
        }
        const contentType = response.headers.get('content-type') ?? '';
        const body =
          method === 'HEAD' ? new Uint8Array() : new Uint8Array(await response.arrayBuffer());
        if (response.ok && method === 'GET') {
          await mkdir(this.options.cacheDir, { recursive: true });
          await writeFile(cacheFile, body);
          await writeFile(`${cacheFile}.json`, JSON.stringify({ url: url.href, contentType }));
        }
        return { status: response.status, contentType, body, fromCache: false };
      } catch (error) {
        if (attempt >= 4) throw error;
        await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 1000));
      }
    }
  }
}
