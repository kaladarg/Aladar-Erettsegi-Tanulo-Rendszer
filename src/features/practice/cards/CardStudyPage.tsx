import { useLiveQuery } from 'dexie-react-hooks';
import { Check, Layers, RotateCcw, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import {
  CARDS_BY_ID,
  filterCards,
  filterFromParams,
  filterToParams,
  type StudyCard,
} from '@/content/cards';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { Skeleton } from '@/design/ui/Skeleton';
import { cardStates, sessionQueue } from '@/domain/cards/schedule';
import { shuffle } from '@/domain/practice/topics';
import { formatNumber, t } from '@/i18n';
import { recordCardAnswer } from '@/storage/cards';
import { db } from '@/storage/db';
import { CardMap } from './CardMap';

const NEW_PER_SESSION = 15;
const EXTRA_SIZE = 20;

interface Session {
  queue: string[];
  /** Free practice: answers do not change the schedule. */
  extra: boolean;
}

/** Full-screen study session: one card at a time, flip, then mark. */
export function CardStudyPage() {
  usePageTitle(t('practice.cards.title'));
  const [params] = useSearchParams();
  const filter = filterFromParams(params);
  const events = useLiveQuery(() => db.cardEvents.toArray(), []);
  const [session, setSession] = useState<Session | null>(null);
  const [round, setRound] = useState(0);
  const [startedRound, setStartedRound] = useState(-1);
  const back = `/gyakorlas/kartyak?${filterToParams({ ...filter, deck: undefined })}`;

  // Build the queue once the progress has loaded, and again for each new round.
  if (events && startedRound !== round) {
    setStartedRound(round);
    const ids = filterCards(filter).map((c) => c.id);
    setSession({ queue: sessionQueue(ids, cardStates(events), NEW_PER_SESSION), extra: false });
  }

  const startExtra = (seed: number) => {
    const ids = filterCards(filter).map((c) => c.id);
    setSession({ queue: shuffle(ids, seed).slice(0, EXTRA_SIZE), extra: true });
  };

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-surface/95 px-3 py-2 backdrop-blur">
        <Button asChild variant="ghost" size="icon" aria-label={t('practice.cards.back')}>
          <Link to={back}>
            <X aria-hidden="true" />
          </Link>
        </Button>
        <h1 className="min-w-0 flex-1 truncate font-semibold">{t('practice.cards.title')}</h1>
      </header>
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-2xl flex-1 p-4 outline-none">
        {!session ? (
          <Skeleton className="h-80" />
        ) : session.queue.length === 0 ? (
          <EmptyState
            icon={<Layers />}
            title={t('practice.cards.emptyTitle')}
            description={t('practice.cards.nothingDue')}
            action={
              <div className="flex flex-wrap justify-center gap-2">
                <Button onClick={(event) => startExtra(event.timeStamp)}>
                  {t('practice.cards.extra')}
                </Button>
                <Button asChild variant="secondary">
                  <Link to={back}>{t('practice.cards.back')}</Link>
                </Button>
              </div>
            }
          />
        ) : (
          <Study
            key={`${round}-${session.extra}`}
            session={session}
            back={back}
            onRestart={() => setRound((r) => r + 1)}
          />
        )}
      </main>
    </div>
  );
}

function Study({
  session,
  back,
  onRestart,
}: {
  session: Session;
  back: string;
  onRestart: () => void;
}) {
  const [queue, setQueue] = useState(session.queue);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [missed, setMissed] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  const flipButton = useRef<HTMLButtonElement>(null);
  const answerHeading = useRef<HTMLHeadingElement>(null);
  const card = CARDS_BY_ID.get(queue[index] ?? '');
  const done = index >= queue.length;

  const mark = (wasKnown: boolean) => {
    if (!card) return;
    if (!session.extra) void recordCardAnswer(card.id, wasKnown);
    if (wasKnown) {
      if (!missed.has(card.id)) setKnown((k) => k + 1);
    } else if (!missed.has(card.id)) {
      // Comes back once at the end of the round.
      setMissed(new Set(missed).add(card.id));
      setQueue([...queue, card.id]);
    }
    setFlipped(false);
    setIndex(index + 1);
  };

  // Keyboard: space flips, 1 and 2 mark.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (done || event.target instanceof HTMLInputElement) return;
      if (!flipped && (event.key === ' ' || event.key === 'Enter')) {
        if (event.target instanceof HTMLButtonElement) return;
        event.preventDefault();
        setFlipped(true);
      } else if (flipped && event.key === '1') mark(false);
      else if (flipped && event.key === '2') mark(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Move focus to the answer when the card is turned, and back to the button for the next card.
  useEffect(() => {
    if (flipped) answerHeading.current?.focus();
    else flipButton.current?.focus();
  }, [flipped, index]);

  if (done) {
    return (
      <section
        aria-labelledby="cards-done"
        className="grid gap-4 rounded-lg border border-border bg-surface p-6 shadow-1"
      >
        <h2 id="cards-done" className="text-2xl font-bold">
          {t('practice.cards.doneTitle')}
        </h2>
        <p>
          {session.extra
            ? t('practice.cards.doneExtra')
            : t('practice.cards.doneBody', {
                known: formatNumber(known),
                unknown: formatNumber(missed.size),
              })}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={onRestart}>
            <RotateCcw aria-hidden="true" />
            {t('practice.cards.restart')}
          </Button>
          <Button variant="secondary" onClick={() => navigate(back)}>
            {t('practice.cards.back')}
          </Button>
        </div>
      </section>
    );
  }
  if (!card) return null;
  const total = queue.length;
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-muted tabular-nums">
          {t('practice.cards.progress', { current: index + 1, total })}
        </p>
        <div
          aria-hidden="true"
          className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted"
        >
          <div className="h-full bg-primary" style={{ width: `${(index / total) * 100}%` }} />
        </div>
      </div>
      <CardFace
        card={card}
        flipped={flipped}
        answerHeading={answerHeading}
        again={missed.has(card.id)}
      />
      {flipped ? (
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" size="lg" onClick={() => mark(false)}>
            <X aria-hidden="true" />
            {t('practice.cards.unknown')}
          </Button>
          <Button size="lg" onClick={() => mark(true)}>
            <Check aria-hidden="true" />
            {t('practice.cards.known')}
          </Button>
        </div>
      ) : (
        <Button ref={flipButton} size="lg" onClick={() => setFlipped(true)}>
          {t('practice.cards.flip')}
        </Button>
      )}
      <p className="text-center text-xs text-muted max-sm:hidden">{t('practice.cards.flipHint')}</p>
    </div>
  );
}

function CardFace({
  card,
  flipped,
  answerHeading,
  again,
}: {
  card: StudyCard;
  flipped: boolean;
  answerHeading: React.RefObject<HTMLHeadingElement | null>;
  again: boolean;
}) {
  return (
    <article
      aria-label={t(`practice.cards.deck.${card.deck}`)}
      className="grid gap-4 rounded-lg border border-border bg-surface p-5 shadow-1 sm:p-6"
    >
      <p className="text-sm font-medium text-muted">
        {t(`practice.cards.deck.${card.deck}`)} · {t(`practice.cards.eras.${card.era}`)}
      </p>
      {card.place && (
        <CardMap
          lat={card.place.lat}
          lon={card.place.lon}
          view={card.place.view}
          label={t('practice.cards.mapLabel')}
        />
      )}
      <p className={card.place ? 'text-lg' : 'text-2xl font-semibold'}>{card.front}</p>
      {flipped && (
        <div className="border-t border-border pt-4">
          <h2
            ref={answerHeading}
            tabIndex={-1}
            className="text-sm font-semibold tracking-wide text-muted uppercase outline-none"
          >
            {t('practice.cards.answer')}
          </h2>
          <p className="mt-1 text-xl font-semibold">{card.back}</p>
          {card.note && <p className="mt-2 text-muted">{card.note}</p>}
          {again && <p className="mt-2 text-sm text-muted">{t('practice.cards.again')}</p>}
        </div>
      )}
    </article>
  );
}
