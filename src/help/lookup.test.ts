import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanQuery, lookup, webSearchUrl } from './lookup';

afterEach(() => vi.unstubAllGlobals());

const json = (body: unknown, status = 200) =>
  Promise.resolve(new Response(JSON.stringify(body), { status }));

describe('lookup', () => {
  it('cleans selections', () => {
    expect(cleanQuery('  „interregnumot”, ')).toBe('interregnumot');
    expect(cleanQuery('a szabadság\n')).toBe('a szabadság');
  });

  it('finds the best title, then its summary', async () => {
    const fetch = vi.fn((url: string) =>
      url.includes('opensearch')
        ? json(['interregnumot', ['Interregnum'], [''], ['']])
        : json({
            title: 'Interregnum',
            extract: 'Király nélküli időszak.',
            type: 'standard',
            content_urls: { desktop: { page: 'https://hu.wikipedia.org/wiki/Interregnum' } },
          }),
    );
    vi.stubGlobal('fetch', fetch);
    const result = await lookup('wikipedia', 'interregnumot');
    expect(result).toEqual({
      site: 'wikipedia',
      title: 'Interregnum',
      extract: 'Király nélküli időszak.',
      url: 'https://hu.wikipedia.org/wiki/Interregnum',
    });
    expect(fetch.mock.calls[0]![0]).toContain('origin=*');
    expect(fetch.mock.calls[1]![0]).toBe(
      'https://hu.wikipedia.org/api/rest_v1/page/summary/Interregnum',
    );
  });

  it('returns null for missing pages and disambiguations', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn((url: string) =>
        url.includes('opensearch') ? json(['x', [], [], []]) : json({}, 404),
      ),
    );
    expect(await lookup('wiktionary', 'xyzzy')).toBeNull();
    vi.stubGlobal(
      'fetch',
      vi.fn((url: string) =>
        url.includes('opensearch')
          ? json(['x', ['Pál'], [], []])
          : json({ title: 'Pál', extract: 'Több jelentés', type: 'disambiguation' }),
      ),
    );
    expect(await lookup('wikipedia', 'Pál')).toBeNull();
  });

  it('throws on server errors so the panel can say so', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => json({}, 503)),
    );
    await expect(lookup('wikipedia', 'szó')).rejects.toThrow();
  });

  it('builds a web search link without sending anything', () => {
    expect(webSearchUrl('Trianoni béke')).toBe(
      'https://duckduckgo.com/?q=Trianoni%20b%C3%A9ke&kl=hu-hu',
    );
  });
});
