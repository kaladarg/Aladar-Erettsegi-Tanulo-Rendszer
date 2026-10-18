import { BookOpen, ExternalLink, Globe, Library, Search } from 'lucide-react';
import { useEffect, useId, useState, type FormEvent } from 'react';
import { Button } from '@/design/ui/Button';
import {
  cleanQuery,
  lookup,
  webSearchUrl,
  type LookupResult,
  type LookupSite,
} from '@/help/lookup';
import { t } from '@/i18n';

type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'done'; results: Partial<Record<LookupSite, LookupResult | null>> }
  | { status: 'error' };

const SITES: { site: LookupSite; label: () => string; icon: typeof BookOpen }[] = [
  { site: 'wiktionary', label: () => t('help.lookupDictionary'), icon: BookOpen },
  { site: 'wikipedia', label: () => t('help.lookupEncyclopedia'), icon: Library },
];

/** Looks a word up in the Hungarian Wiktionary and Wikipedia, on request only. */
export function LookupPanel({ initialQuery }: { initialQuery: string }) {
  const id = useId();
  const [query, setQuery] = useState(initialQuery);
  // A new object per search, so searching the same text again re-runs it.
  const [request, setRequest] = useState<{ text: string } | null>(null);
  const searched = request?.text ?? '';
  const [state, setState] = useState<State>({ status: 'idle' });

  const run = (raw: string) => {
    const text = cleanQuery(raw);
    if (!text) return;
    setRequest({ text });
    setState({ status: 'loading' });
  };

  useEffect(() => {
    if (!request) return;
    const controller = new AbortController();
    Promise.all(
      SITES.map(({ site }) =>
        lookup(site, request.text, controller.signal).then((result) => [site, result] as const),
      ),
    )
      .then((pairs) => setState({ status: 'done', results: Object.fromEntries(pairs) }))
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.error('Lookup failed', error);
          setState({ status: 'error' });
        }
      });
    return () => controller.abort();
  }, [request]);

  // A new selection from the page starts a new lookup.
  const [lastInitial, setLastInitial] = useState('');
  if (initialQuery && initialQuery !== lastInitial) {
    setLastInitial(initialQuery);
    setQuery(initialQuery);
    run(initialQuery);
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    run(query);
  };

  return (
    <div className="grid gap-4">
      <form onSubmit={onSubmit} className="grid gap-2">
        <label htmlFor={id} className="font-medium">
          {t('help.lookupLabel')}
        </label>
        <div className="flex gap-2">
          <input
            id={id}
            type="search"
            value={query}
            placeholder={t('help.lookupPlaceholder')}
            onChange={(event) => setQuery(event.target.value)}
            className="min-h-11 min-w-0 flex-1 rounded-md border border-border-strong bg-surface px-3"
          />
          <Button type="submit" disabled={!cleanQuery(query)}>
            <Search aria-hidden="true" />
            {t('help.lookupSubmit')}
          </Button>
        </div>
        <p className="text-xs text-muted">{t('help.lookupPrivacy')}</p>
      </form>

      <div aria-live="polite" className="grid gap-3">
        {state.status === 'loading' && <p className="text-muted">{t('help.lookupLoading')}</p>}
        {state.status === 'error' && <p className="text-danger">{t('help.lookupError')}</p>}
        {state.status === 'done' &&
          SITES.map(({ site, label, icon: Icon }) => {
            const result = state.results[site];
            return (
              <section key={site} className="rounded-md border border-border p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-muted">
                  <Icon aria-hidden="true" className="size-4" />
                  {label()}
                </h3>
                {result ? (
                  <>
                    <p className="mt-2 font-semibold">{result.title}</p>
                    <p className="mt-1 text-sm leading-relaxed">{result.extract}</p>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-4"
                    >
                      {t('help.lookupOpen')}
                      <ExternalLink aria-hidden="true" className="size-3.5" />
                      <span className="sr-only"> {t('common.newTab')}</span>
                    </a>
                  </>
                ) : (
                  <p className="mt-2 text-sm text-muted">
                    {t('help.lookupNotFound', { query: searched })}
                  </p>
                )}
              </section>
            );
          })}
      </div>

      {searched && (
        <a
          href={webSearchUrl(searched)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 justify-self-start text-sm font-medium text-primary underline underline-offset-4"
        >
          <Globe aria-hidden="true" className="size-4" />
          {t('help.lookupWeb')}: „{searched}”<span className="sr-only"> {t('common.newTab')}</span>
        </a>
      )}
    </div>
  );
}
