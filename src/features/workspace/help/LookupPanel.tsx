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
import { resourcesFor, siteSearchUrl } from '@/help/resources';
import { t } from '@/i18n';
import { useWorkspace } from '../WorkspaceContext';

type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'done'; results: Partial<Record<string, LookupResult | null>> }
  | { status: 'error' };

interface Source {
  key: string;
  site: LookupSite;
  lang: string;
  label: string;
  icon: typeof BookOpen;
}

/**
 * Where to look: the Hungarian Wiktionary and Wikipedia; for a foreign-language
 * paper the Hungarian Wiktionary (meanings in Hungarian) and that language's
 * own Wiktionary and Wikipedia.
 */
function lookupSources(lang: string | undefined): Source[] {
  if (!lang || lang === 'hu')
    return [
      {
        key: 'wiktionary',
        site: 'wiktionary',
        lang: 'hu',
        label: t('help.lookupDictionary'),
        icon: BookOpen,
      },
      {
        key: 'wikipedia',
        site: 'wikipedia',
        lang: 'hu',
        label: t('help.lookupEncyclopedia'),
        icon: Library,
      },
    ];
  const language = t(`help.languages.${lang === 'de' ? 'de' : 'en'}`);
  return [
    {
      key: 'wiktionary-hu',
      site: 'wiktionary',
      lang: 'hu',
      label: t('help.lookupDictionaryHu'),
      icon: BookOpen,
    },
    {
      key: `wiktionary-${lang}`,
      site: 'wiktionary',
      lang,
      label: t('help.lookupDictionaryIn', { language }),
      icon: BookOpen,
    },
    {
      key: `wikipedia-${lang}`,
      site: 'wikipedia',
      lang,
      label: t('help.lookupEncyclopediaIn', { language }),
      icon: Library,
    },
  ];
}

/** Looks a word up in Wiktionary and Wikipedia, on request only. */
export function LookupPanel({ initialQuery }: { initialQuery: string }) {
  const { exam } = useWorkspace();
  const sources = lookupSources(exam.language);
  const searchSites = resourcesFor(exam.subject).filter((site) => site.searchDomain);
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
      sources.map(({ key, site, lang }) =>
        lookup(site, request.text, controller.signal, lang).then(
          (result) => [key, result] as const,
        ),
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
    // The sources depend only on the exam's language, which does not change here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          sources.map(({ key, lang, label, icon: Icon }) => {
            const result = state.results[key];
            return (
              <section key={key} className="rounded-md border border-border p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-muted">
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </h3>
                {result ? (
                  <>
                    <p lang={lang} className="mt-2 font-semibold">
                      {result.title}
                    </p>
                    <p lang={lang} className="mt-1 text-sm leading-relaxed">
                      {result.extract}
                    </p>
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
      {searched && (
        <section className="grid gap-2">
          <h3 className="text-sm font-semibold text-muted">{t('help.lookupSites')}</h3>
          <ul className="grid gap-1">
            {searchSites.map((site) => (
              <li key={site.id}>
                <a
                  href={siteSearchUrl(site.searchDomain!, searched)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-4"
                >
                  {t('help.lookupSiteLink', {
                    site: t(`help.resources.${site.id}.name`),
                    query: searched,
                  })}
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                  <span className="sr-only"> {t('common.newTab')}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
