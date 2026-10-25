import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  ChevronRight,
  GalleryVerticalEnd,
  Keyboard,
  ListChecks,
  MapPin,
  Puzzle,
  Search,
} from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import {
  CARD_LANGUAGES,
  filterCards,
  filterFromParams,
  filterToParams,
  type StudyCard,
} from '@/content/cards';
import { PageHeader } from '@/design/ui/PageHeader';
import { cardStates, deckCounts, statusOf, type CardStatus } from '@/domain/cards/schedule';
import { gameItems, matchRound, quizQuestions, typeable } from '@/domain/cards/games';
import { keywordText } from '@/domain/scoring/normalize';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { db } from '@/storage/db';

const STATUS_TONE: Record<CardStatus, string> = {
  new: 'text-primary',
  learning: 'text-warning',
  mastered: 'text-success',
};

/** One deck: ways to study it, progress, and every card with its answer. */
export function DeckPage() {
  const [params] = useSearchParams();
  const filter = filterFromParams(params);
  const subject = filter.subject ?? 'tortenelem';
  const name = filter.deck ? t(`practice.cards.deck.${filter.deck}`) : t('practice.cards.title');
  usePageTitle(name);
  const query = filterToParams(filter);
  const cards = filterCards(filter);
  const events = useLiveQuery(() => db.cardEvents.toArray(), []);
  const states = cardStates(events ?? []);
  const counts = deckCounts(
    cards.map((c) => c.id),
    states,
  );
  const items = gameItems(cards, CARD_LANGUAGES[subject]);
  const [status, setStatus] = useState<CardStatus | null>(null);

  const description = [
    t(`practice.cards.subjects.${subject}`),
    filter.era ? t(`practice.cards.eras.${filter.era}`) : null,
    t('practice.cards.cardCount', { count: formatNumber(cards.length) }),
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <Link
        to={`/gyakorlas/kartyak?${filterToParams({ ...filter, deck: undefined })}`}
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {t('practice.cards.deckBack')}
      </Link>
      <PageHeader title={name} description={description} />

      <section aria-labelledby="deck-modes" className="grid gap-3">
        <h2 id="deck-modes" className="sr-only">
          {t('practice.cards.modesTitle')}
        </h2>
        <Mode
          to={`/gyakorlas/kartyak/tanulas?${query}`}
          icon={<GalleryVerticalEnd />}
          title={t('practice.cards.modes.cards')}
          body={t('practice.cards.modes.cardsBody')}
          badge={
            counts.due + Math.min(counts.new, 15) > 0
              ? t('practice.cards.dueNew', {
                  due: formatNumber(counts.due),
                  new: formatNumber(counts.new),
                })
              : undefined
          }
          primary
        />
        <Link
          to={`/gyakorlas/kartyak/tanulas?${query}${query ? '&' : ''}mind=1`}
          className="-mt-1 ml-auto text-sm font-medium text-primary underline underline-offset-4"
        >
          {t('practice.cards.modes.browse')}
        </Link>
        <Mode
          to={`/gyakorlas/kartyak/jatek/kviz?${query}`}
          icon={<ListChecks />}
          title={t('practice.cards.modes.quiz')}
          body={t('practice.cards.modes.quizBody')}
          disabled={quizQuestions(items, 1, 1).length === 0}
        />
        <Mode
          to={`/gyakorlas/kartyak/jatek/parosito?${query}`}
          icon={<Puzzle />}
          title={t('practice.cards.modes.match')}
          body={t('practice.cards.modes.matchBody')}
          disabled={matchRound(items, 1).length === 0}
        />
        <Mode
          to={`/gyakorlas/kartyak/jatek/beiros?${query}`}
          icon={<Keyboard />}
          title={t('practice.cards.modes.type')}
          body={t('practice.cards.modes.typeBody')}
          disabled={typeable(items).length < 3}
        />
        <p className="text-sm text-muted">{t('practice.cards.gamesNote')}</p>
      </section>

      <section aria-labelledby="deck-progress" className="mt-8">
        <h2 id="deck-progress" className="mb-3 text-xl font-bold">
          {t('practice.cards.progressTitle')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {(['new', 'learning', 'mastered'] as const).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={status === key}
              onClick={() => setStatus(status === key ? null : key)}
              className={cn(
                'flex items-center gap-4 rounded-xl border bg-surface p-4 text-left shadow-1 transition-colors',
                status === key ? 'border-primary ring-2 ring-primary/30' : 'border-border',
              )}
            >
              <Ring value={counts[key]} total={counts.total} tone={STATUS_TONE[key]} />
              <span className="flex-1 font-semibold">{t(`practice.cards.status.${key}`)}</span>
              <ChevronRight aria-hidden="true" className="size-4 text-muted" />
            </button>
          ))}
        </div>
      </section>

      <TermList cards={cards} states={states} status={status} onShowAll={() => setStatus(null)} />
    </>
  );
}

function Mode({
  to,
  icon,
  title,
  body,
  badge,
  primary,
  disabled,
}: {
  to: string;
  icon: ReactNode;
  title: string;
  body: string;
  badge?: string;
  primary?: boolean;
  disabled?: boolean;
}) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'flex size-12 shrink-0 items-center justify-center rounded-xl [&_svg]:size-6',
          primary ? 'bg-primary text-primary-fg' : 'bg-primary-soft text-primary-soft-fg',
        )}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold">{title}</span>
        <span className="block text-sm text-muted">
          {disabled ? t('practice.cards.notEnough') : body}
        </span>
      </span>
      {badge && (
        <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary-soft-fg max-sm:hidden">
          {badge}
        </span>
      )}
      {!disabled && <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-muted" />}
    </>
  );
  const className =
    'flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-1 transition-[border-color,transform] duration-(--motion-fast)';
  if (disabled) return <div className={cn(className, 'opacity-60')}>{content}</div>;
  return (
    <Link
      to={to}
      data-ripple=""
      className={cn(className, 'hover:border-border-strong active:scale-[0.99]')}
    >
      {content}
    </Link>
  );
}

/** A progress ring with the count in the middle. */
function Ring({ value, total, tone }: { value: number; total: number; tone: string }) {
  const r = 22;
  const length = 2 * Math.PI * r;
  const share = total ? value / total : 0;
  return (
    <span className={cn('relative grid size-14 shrink-0 place-items-center', tone)}>
      <svg aria-hidden="true" viewBox="0 0 56 56" className="absolute inset-0 -rotate-90">
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.15}
          strokeWidth="6"
        />
        {value > 0 && (
          <circle
            cx="28"
            cy="28"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${share * length} ${length}`}
          />
        )}
      </svg>
      <span className="text-lg font-bold text-text tabular-nums">{formatNumber(value)}</span>
    </span>
  );
}

function TermList({
  cards,
  states,
  status,
  onShowAll,
}: {
  cards: StudyCard[];
  states: ReturnType<typeof cardStates>;
  status: CardStatus | null;
  onShowAll: () => void;
}) {
  const searchId = useId();
  const [search, setSearch] = useState('');
  const needle = keywordText(search);
  const shown = cards.filter(
    (card) =>
      (!status || statusOf(states.get(card.id)) === status) &&
      (!needle || keywordText(`${card.front} ${card.back} ${card.note ?? ''}`).includes(needle)),
  );
  return (
    <section aria-labelledby="deck-list" className="mt-8">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <h2 id="deck-list" className="text-xl font-bold">
          {t('practice.cards.listTitle', { count: formatNumber(cards.length) })}
        </h2>
        {status && (
          <button
            type="button"
            onClick={onShowAll}
            className="text-sm font-medium text-primary underline underline-offset-4"
          >
            {t(`practice.cards.status.${status}`)} · {t('practice.cards.showAll')}
          </button>
        )}
      </div>
      <div className="relative mb-4">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted"
        />
        <label htmlFor={searchId} className="sr-only">
          {t('practice.cards.search')}
        </label>
        <input
          id={searchId}
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t('practice.cards.search')}
          className="min-h-11 w-full rounded-md border border-border-strong bg-surface pr-3 pl-9"
        />
      </div>
      {shown.length < cards.length && (
        <p role="status" className="mb-3 text-sm text-muted">
          {t('practice.cards.showing', {
            shown: formatNumber(shown.length),
            total: formatNumber(cards.length),
          })}
        </p>
      )}
      {shown.length === 0 ? (
        <p className="text-muted">{t('practice.cards.noMatch')}</p>
      ) : (
        <ul className="grid gap-3">
          {shown.map((card) => {
            const state = statusOf(states.get(card.id));
            return (
              <li
                key={card.id}
                className="grid gap-2 rounded-xl border border-border bg-surface p-4 shadow-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6"
              >
                <div className="min-w-0">
                  {card.place && (
                    <span className="mb-1 inline-flex items-center gap-1 text-xs font-semibold text-muted">
                      <MapPin aria-hidden="true" className="size-3.5" />
                      {t('practice.cards.mapCard')}
                    </span>
                  )}
                  <p className="font-semibold">{card.front}</p>
                </div>
                <div className="min-w-0 border-border max-sm:border-t max-sm:pt-2 sm:border-l sm:pl-6">
                  <p lang={CARD_LANGUAGES[card.subject]}>{card.back}</p>
                  {card.note && <p className="mt-1 text-sm text-muted">{card.note}</p>}
                  {card.emelt && (
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {t('practice.cards.emeltOnly')}
                    </p>
                  )}
                  <p className={cn('mt-2 text-xs font-semibold', STATUS_TONE[state])}>
                    {t(`practice.cards.status.${state}`)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
