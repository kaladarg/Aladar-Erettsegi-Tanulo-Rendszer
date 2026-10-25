import { useLiveQuery } from 'dexie-react-hooks';
import { Check, Layers, RotateCcw, Settings2, Undo2, X } from 'lucide-react';
import { Dialog, RadioGroup } from 'radix-ui';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import {
  CARDS_BY_ID,
  filterCards,
  filterFromParams,
  type StudyCard,
  CARD_LANGUAGES,
} from '@/content/cards';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { Skeleton } from '@/design/ui/Skeleton';
import { cardStates, sessionQueue } from '@/domain/cards/schedule';
import { shuffle } from '@/domain/practice/topics';
import { formatNumber, t } from '@/i18n';
import { recordCardAnswer, undoCardAnswer } from '@/storage/cards';
import { db } from '@/storage/db';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { Celebration } from '@/design/ui/Celebration';
import { CardMap } from './CardMap';
import { deckPage } from './links';

const NEW_PER_SESSION = 15;
const EXTRA_SIZE = 20;
/** How far (px) a card must be dragged to count as a swipe. */
const SWIPE_DISTANCE = 110;
/** A quick flick (px per ms) counts as a swipe even when short. */
const FLICK_SPEED = 0.6;

/** Where and how fast the card was let go. */
interface Release {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** Degrees per px of horizontal drag: grabbed low, the card tilts the other way. */
  tilt: number;
}
const STILL: Release = { x: 0, y: 0, vx: 0, vy: 0, tilt: 1 / 16 };

export interface Session {
  queue: string[];
  /** Free practice: answers do not change the schedule. */
  extra: boolean;
}

/**
 * Full-screen study session. `?mind=1` goes through every card of the filter
 * in order as free practice; otherwise due cards and new ones are studied.
 */
export function CardStudyPage() {
  const [params] = useSearchParams();
  const filter = filterFromParams(params);
  const browseAll = params.get('mind') === '1';
  const title = t('practice.cards.studyTitle', {
    subject: t(`practice.cards.subjects.${filter.subject ?? 'tortenelem'}`),
  });
  usePageTitle(title);
  const events = useLiveQuery(() => db.cardEvents.toArray(), []);
  const [session, setSession] = useState<Session | null>(null);
  const [round, setRound] = useState(0);
  // Each new session (another round, or the missed cards again) gets a fresh Study.
  const [sessionId, setSessionId] = useState(0);
  const [startedRound, setStartedRound] = useState(-1);
  const back = deckPage(filter);

  // Build the queue once the progress has loaded, and again for each new round.
  if (events && startedRound !== round) {
    setStartedRound(round);
    const ids = filterCards(filter).map((c) => c.id);
    setSession(
      browseAll
        ? { queue: ids, extra: true }
        : { queue: sessionQueue(ids, cardStates(events), NEW_PER_SESSION), extra: false },
    );
  }

  const startExtra = (seed: number) => {
    const ids = filterCards(filter).map((c) => c.id);
    setSession({ queue: shuffle(ids, seed).slice(0, EXTRA_SIZE), extra: true });
    setSessionId((n) => n + 1);
  };

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-surface/95 px-3 py-2 backdrop-blur">
        <Button asChild variant="ghost" size="icon" aria-label={t('practice.cards.back')}>
          <Link to={back}>
            <X aria-hidden="true" />
          </Link>
        </Button>
        <h1 className="min-w-0 flex-1 truncate font-semibold">{title}</h1>
        <RoundSettings />
      </header>
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto w-full max-w-xl flex-1 overflow-x-clip px-4 py-4 outline-none"
      >
        {!session ? (
          <Skeleton className="mx-auto aspect-square w-full max-w-md" />
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
            key={`${round}-${sessionId}`}
            session={session}
            back={back}
            onRestart={() => setRound((r) => r + 1)}
            onPractice={(ids) => {
              setSession({ queue: ids, extra: true });
              setSessionId((n) => n + 1);
            }}
          />
        )}
      </main>
    </div>
  );
}

interface Mark {
  cardId: string;
  known: boolean;
  /** The card was put back at the end of the round. */
  requeued: boolean;
  event?: Promise<number>;
}

/**
 * Cards one at a time: tap to turn, swipe right if you knew it, left if you
 * are still learning it. On its own page the end offers another round;
 * inside the daily session (`onFinish`) it hands over to the next step.
 */
export function Study({
  session,
  back,
  onRestart,
  onPractice,
  onFinish,
}: {
  session: Session;
  back: string;
  onRestart: () => void;
  /** Practise the given cards again (free practice). */
  onPractice?: (cardIds: string[]) => void;
  onFinish?: () => void;
}) {
  const [queue, setQueue] = useState(session.queue);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [marks, setMarks] = useState<Mark[]>([]);
  const repeat = useSettings((s) => s.settings.cardRepeat);
  // The card just marked, flying out on top of the next one.
  const [outgoing, setOutgoing] = useState<{
    card: StudyCard;
    side: 'left' | 'right';
    from: Release;
    flipped: boolean;
    key: number;
  } | null>(null);
  const navigate = useNavigate();
  const answerHeading = useRef<HTMLHeadingElement>(null);
  const flipButton = useRef<HTMLButtonElement>(null);
  const nextStep = useRef<HTMLButtonElement>(null);
  const card = CARDS_BY_ID.get(queue[index] ?? '');
  const done = index >= queue.length;
  const known = marks.filter((m) => m.known).length;
  const learning = marks.length - known;
  const missed = [...new Set(marks.filter((m) => !m.known).map((m) => m.cardId))];
  // The summary counts cards, not marks: a card missed once is "still learning" even if known later.
  const knownCards = new Set(marks.map((m) => m.cardId)).size - missed.length;

  // One mark per card: a quick second tap or key press waits for the next card.
  const markedIndex = useRef(-1);
  const mark = (wasKnown: boolean, from: Release = STILL) => {
    if (!card || markedIndex.current === index) return;
    markedIndex.current = index;
    const requeued =
      repeat === 'end' && !wasKnown && !marks.some((m) => m.cardId === card.id && !m.known);
    const event = session.extra ? undefined : recordCardAnswer(card.id, wasKnown);
    setMarks([...marks, { cardId: card.id, known: wasKnown, requeued, event }]);
    // A card not known comes back once at the end of the round.
    if (requeued) setQueue([...queue, card.id]);
    const key = Date.now();
    setOutgoing({ card, side: wasKnown ? 'right' : 'left', from, flipped, key });
    window.setTimeout(() => setOutgoing((o) => (o?.key === key ? null : o)), 450);
    setFlipped(false);
    setIndex(index + 1);
  };

  const undo = () => {
    const last = marks.at(-1);
    if (!last) return;
    markedIndex.current = -1;
    setOutgoing(null);
    if (last.event) void last.event.then(undoCardAnswer);
    if (last.requeued) setQueue(queue.slice(0, -1));
    setMarks(marks.slice(0, -1));
    setFlipped(false);
    setIndex(index - 1);
  };

  // Keyboard: space flips, arrows (or 1 and 2) mark, Z takes the last mark back.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (done || event.target instanceof HTMLInputElement) return;
      if (event.key === ' ' || event.key === 'Enter') {
        if (event.target instanceof HTMLButtonElement || event.target instanceof HTMLAnchorElement)
          return;
        event.preventDefault();
        setFlipped((f) => !f);
      } else if (event.key === 'ArrowLeft' || event.key === '1') mark(false);
      else if (event.key === 'ArrowRight' || event.key === '2') mark(true);
      else if (event.key === 'z' || event.key === 'Backspace') undo();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Focus follows the card: the answer when turned, the next step at the end.
  useEffect(() => {
    if (flipped) answerHeading.current?.focus();
    else if (done) nextStep.current?.focus();
    // Space then turns the next card (a focused "Tudom" would mark it instead).
    else if (document.activeElement?.closest('[data-card-actions]')) flipButton.current?.focus();
  }, [flipped, index, done]);

  if (done) {
    const daily = !!onFinish;
    return (
      <section
        aria-labelledby="cards-done"
        className="mx-auto grid max-w-md animate-pop-in gap-4 rounded-xl border border-border bg-surface p-6 shadow-2"
      >
        {!daily && <Celebration />}
        <h2 id="cards-done" className="text-2xl font-bold">
          {daily ? t('practice.daily.cardsDone') : t('practice.cards.doneTitle')}
        </h2>
        <div className="grid grid-cols-2 gap-3 text-center">
          <p className="rounded-lg bg-success-soft p-3">
            <span className="block text-3xl font-bold tabular-nums">
              {formatNumber(knownCards)}
            </span>
            {t('practice.cards.known')}
          </p>
          <p className="rounded-lg bg-warning-soft p-3">
            <span className="block text-3xl font-bold tabular-nums">
              {formatNumber(missed.length)}
            </span>
            {t('practice.cards.unknown')}
          </p>
        </div>
        <p className="text-muted">
          {session.extra ? t('practice.cards.doneExtra') : t('practice.cards.doneSchedule')}
        </p>
        {daily ? (
          <Button ref={nextStep} size="lg" onClick={onFinish}>
            {t('practice.daily.toTasks')}
          </Button>
        ) : (
          <div className="flex flex-wrap gap-2">
            {missed.length > 0 && onPractice && (
              <Button ref={nextStep} onClick={() => onPractice(missed)}>
                <RotateCcw aria-hidden="true" />
                {t('practice.cards.practiceMissed', { count: missed.length })}
              </Button>
            )}
            <Button
              ref={missed.length > 0 && onPractice ? undefined : nextStep}
              variant={missed.length > 0 && onPractice ? 'secondary' : 'primary'}
              onClick={onRestart}
            >
              {t('practice.cards.restart')}
            </Button>
            <Button variant="ghost" onClick={() => navigate(back)}>
              {t('practice.cards.back')}
            </Button>
          </div>
        )}
      </section>
    );
  }
  if (!card) return null;
  const total = queue.length;
  return (
    <div className="mx-auto grid max-w-md gap-4">
      <div className="grid gap-2">
        <p className="text-center text-sm font-semibold text-muted tabular-nums">
          {t('practice.cards.progress', { current: index + 1, total })}
        </p>
        <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-(--motion-base)"
            style={{ width: `${(index / total) * 100}%` }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="min-w-12 rounded-full border border-warning bg-warning-soft px-3 py-1 text-center font-bold text-warning tabular-nums">
          <span className="sr-only">{t('practice.cards.unknown')}: </span>
          <span key={learning} className="inline-block motion-safe:animate-pop-in">
            {formatNumber(learning)}
          </span>
        </span>
        <span className="min-w-12 rounded-full border border-success bg-success-soft px-3 py-1 text-center font-bold text-success tabular-nums">
          <span className="sr-only">{t('practice.cards.known')}: </span>
          <span key={known} className="inline-block motion-safe:animate-pop-in">
            {formatNumber(known)}
          </span>
        </span>
      </div>

      <div className="relative z-10">
        <SwipeCard
          key={`${index}-${card.id}`}
          card={card}
          flipped={flipped}
          again={missed.includes(card.id) && marks.at(-1)?.cardId !== card.id}
          answerHeading={answerHeading}
          onFlip={() => setFlipped((f) => !f)}
          onSwipe={mark}
        />
        {outgoing && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
            <SwipeCard
              key={outgoing.key}
              card={outgoing.card}
              flipped={outgoing.flipped}
              again={false}
              exit={{ side: outgoing.side, from: outgoing.from }}
            />
          </div>
        )}
      </div>

      <div data-card-actions="" className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          size="lg"
          className="border-warning text-warning hover:bg-warning-soft"
          onClick={() => mark(false)}
        >
          <X aria-hidden="true" />
          {t('practice.cards.unknown')}
        </Button>
        <Button
          size="lg"
          className="bg-success text-bg hover:bg-success hover:opacity-90"
          onClick={() => mark(true)}
        >
          <Check aria-hidden="true" />
          {t('practice.cards.known')}
        </Button>
      </div>
      <div data-card-actions="" className="flex items-center justify-between gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('practice.cards.undo')}
          disabled={marks.length === 0}
          onClick={undo}
        >
          <Undo2 aria-hidden="true" />
        </Button>
        <Button ref={flipButton} variant="ghost" onClick={() => setFlipped((f) => !f)}>
          <RotateCcw aria-hidden="true" />
          {t('practice.cards.flip')}
        </Button>
        <span className="size-11" aria-hidden="true" />
      </div>
      <p className="text-center text-xs text-muted">
        <span className="sm:hidden">{t('practice.cards.swipeHint')}</span>
        <span className="max-sm:hidden">{t('practice.cards.flipHint')}</span>
      </p>
    </div>
  );
}

/**
 * The card. A tap turns it over; it can be grabbed and moved freely, and
 * dragged (or flicked) far enough to the right it counts as known, to the
 * left as still learning. Let go early, it springs back.
 */
function SwipeCard({
  card,
  flipped,
  again,
  answerHeading,
  onFlip,
  onSwipe,
  exit,
}: {
  card: StudyCard;
  flipped: boolean;
  again: boolean;
  answerHeading?: React.RefObject<HTMLHeadingElement | null>;
  onFlip?: () => void;
  onSwipe?: (known: boolean, release: Release) => void;
  /** A marked card flying out from where it was let go. */
  exit?: { side: 'left' | 'right'; from: Release };
}) {
  const [pos, setPos] = useState({ x: exit?.from.x ?? 0, y: exit?.from.y ?? 0 });
  const [tilt, setTilt] = useState(exit?.from.tilt ?? STILL.tilt);
  const [dragging, setDragging] = useState(false);
  const [launched, setLaunched] = useState(false);
  const drag = useRef<{
    x: number;
    y: number;
    id: number;
    moved: boolean;
    samples: { x: number; y: number; t: number }[];
    past: boolean;
  } | null>(null);

  useEffect(() => {
    if (!exit) return;
    const frame = requestAnimationFrame(() => setLaunched(true));
    return () => cancelAnimationFrame(frame);
  }, [exit]);

  const down = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || exit) return;
    const rect = event.currentTarget.getBoundingClientRect();
    // Grabbed in the lower half, the card swings the other way, like a real one.
    setTilt(event.clientY - rect.top > rect.height / 2 ? -1 / 16 : 1 / 16);
    drag.current = {
      x: event.clientX,
      y: event.clientY,
      id: event.pointerId,
      moved: false,
      samples: [{ x: event.clientX, y: event.clientY, t: event.timeStamp }],
      past: false,
    };
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== event.pointerId) return;
    const x = event.clientX - d.x;
    const y = event.clientY - d.y;
    if (!d.moved && Math.hypot(x, y) > 6) {
      d.moved = true;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (!d.moved) return;
    d.samples = [...d.samples, { x: event.clientX, y: event.clientY, t: event.timeStamp }].slice(
      -5,
    );
    // A short buzz when the card crosses the line (phones that support it).
    const past = Math.abs(x) >= SWIPE_DISTANCE;
    if (past !== d.past) {
      d.past = past;
      if (past) navigator.vibrate?.(8);
    }
    setPos({ x, y });
  };
  const up = (event: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    drag.current = null;
    setDragging(false);
    if (!d || d.id !== event.pointerId) return;
    if (!d.moved) {
      // A tap on the card (not on a link or button inside it) turns it over.
      if (!(event.target as Element).closest('a, button')) onFlip?.();
      return;
    }
    const x = event.clientX - d.x;
    const y = event.clientY - d.y;
    const first = d.samples[0]!;
    const time = Math.max(1, event.timeStamp - first.t);
    const vx = (event.clientX - first.x) / time;
    const vy = (event.clientY - first.y) / time;
    const flick = Math.abs(vx) >= FLICK_SPEED && Math.abs(x) > 30 && Math.sign(vx) === Math.sign(x);
    if (Math.abs(x) >= SWIPE_DISTANCE || flick) onSwipe?.(x > 0, { x, y, vx, vy, tilt });
    else setPos({ x: 0, y: 0 });
  };

  // Flying out: on along the throw, off the screen, spinning a little more.
  const offset =
    exit && launched
      ? {
          x: (exit.side === 'right' ? 1 : -1) * Math.max(window.innerWidth, 700),
          y: exit.from.y + exit.from.vy * 250,
        }
      : pos;
  const rotate = offset.x * tilt;
  const strength = Math.min(1, Math.abs(offset.x) / SWIPE_DISTANCE);
  const side = offset.x > 0 ? 'right' : offset.x < 0 ? 'left' : null;
  const meta = `${t(`practice.cards.deck.${card.deck}`)} · ${t(`practice.cards.eras.${card.era}`)}`;
  const face =
    'absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-2 bg-surface p-5 backface-hidden sm:p-7';
  const edge =
    side === 'right' ? 'border-success' : side === 'left' ? 'border-warning' : 'border-border';
  const tint = side && (
    <span
      aria-hidden="true"
      style={{ opacity: strength * 0.16 }}
      className={cn(
        'pointer-events-none absolute inset-0 rounded-2xl',
        side === 'right' ? 'bg-success' : 'bg-warning',
      )}
    />
  );

  return (
    <div
      className={cn(
        'relative mx-auto aspect-square w-full max-w-md touch-none select-none perspective-distant',
        // The entrance runs on this wrapper so the card itself stays free to move.
        !exit && 'motion-safe:animate-[card-in_var(--motion-slow)_var(--ease-out)_both]',
        exit ? 'pointer-events-none' : dragging ? 'z-30 cursor-grabbing' : 'cursor-grab',
      )}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={() => {
        drag.current = null;
        setDragging(false);
        setPos({ x: 0, y: 0 });
      }}
    >
      <article
        aria-label={t(`practice.cards.deck.${card.deck}`)}
        className={cn(
          'relative size-full rounded-2xl',
          dragging || (exit && !launched)
            ? 'shadow-3'
            : exit
              ? 'shadow-3 transition-[transform,opacity] duration-[400ms] ease-out'
              : // Let go too early: spring back with a little overshoot.
                'shadow-2 transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(.2,1.5,.4,1)]',
        )}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotate}deg) scale(${dragging || exit ? 1.03 : 1})`,
          opacity: exit && launched ? 0.4 : 1,
        }}
      >
        <div
          className={cn(
            'relative size-full transition-transform duration-(--motion-slow) ease-(--ease-out) transform-3d',
            flipped && 'rotate-y-180',
          )}
        >
          {/* Front: the question. */}
          <div aria-hidden={flipped} className={cn(face, edge)}>
            {tint}
            <p className="shrink-0 text-sm font-medium text-muted">{meta}</p>
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 pt-2 text-center">
              {card.place && (
                // The map takes the room the hint leaves.
                <div className="flex min-h-0 w-full flex-1 items-center justify-center">
                  <CardMap
                    lat={card.place.lat}
                    lon={card.place.lon}
                    view={card.place.view}
                    label={t('practice.cards.mapLabel')}
                    className="block h-full max-h-full w-auto max-w-full rounded-md border border-border"
                  />
                </div>
              )}
              <p
                className={cn(
                  'shrink-0',
                  card.place ? 'text-sm sm:text-base' : textSize(card.front),
                )}
              >
                {card.front}
              </p>
            </div>
            {again && (
              <p className="shrink-0 text-center text-xs text-muted">{t('practice.cards.again')}</p>
            )}
          </div>
          {/* Back: the answer. */}
          <div aria-hidden={!flipped} className={cn(face, edge, 'rotate-y-180')}>
            {tint}
            <h2
              ref={answerHeading}
              tabIndex={-1}
              className="shrink-0 text-sm font-semibold tracking-wide text-muted uppercase outline-none"
            >
              {t('practice.cards.answer')}
            </h2>
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 overflow-y-auto text-center">
              <p
                lang={CARD_LANGUAGES[card.subject]}
                className={cn(
                  textSize(card.back + (card.note ?? '')),
                  'whitespace-pre-line',
                  card.back.includes('\n') && 'text-left',
                )}
              >
                {card.back}
              </p>
              {card.note && <p className="text-sm text-muted sm:text-base">{card.note}</p>}
              {card.emelt && (
                <p className="text-sm font-semibold text-primary">
                  {t('practice.cards.emeltOnly')}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* A stamp shows what letting go would do. */}
        {side && (
          <span
            aria-hidden="true"
            style={{
              opacity: strength,
              transform: `rotate(${side === 'right' ? -12 : 12}deg) scale(${0.8 + strength * 0.2})`,
            }}
            className={cn(
              'pointer-events-none absolute top-8 rounded-lg border-4 bg-surface/90 px-3 py-1 text-xl font-extrabold tracking-wide uppercase',
              side === 'right'
                ? 'left-6 border-success text-success'
                : 'right-6 border-warning text-warning',
            )}
          >
            {side === 'right' ? t('practice.cards.known') : t('practice.cards.unknown')}
          </span>
        )}
      </article>
    </div>
  );
}

/** Short texts large, long definitions smaller, so they fit the square. */
function textSize(text: string): string {
  if (text.length <= 20) return 'text-3xl font-semibold';
  if (text.length <= 60) return 'text-2xl font-semibold';
  if (text.length <= 120) return 'text-lg font-medium';
  if (text.length <= 180) return 'text-base';
  return 'text-sm sm:text-base';
}

/** How a round treats cards not known: shown once, or back at the end of the round. */
function RoundSettings() {
  const repeat = useSettings((s) => s.settings.cardRepeat);
  const update = useSettings((s) => s.update);
  const options = [
    {
      value: 'none' as const,
      title: t('practice.cards.repeatNone'),
      body: t('practice.cards.repeatNoneBody'),
      when: t('practice.cards.repeatNoneWhen'),
    },
    {
      value: 'end' as const,
      title: t('practice.cards.repeatEnd'),
      body: t('practice.cards.repeatEndBody'),
      when: t('practice.cards.repeatEndWhen'),
    },
  ];
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('practice.cards.settings')}>
          <Settings2 aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 anim-overlay bg-black/50 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 max-h-[92dvh] anim-dialog overflow-y-auto rounded-t-xl border border-border bg-surface p-6 shadow-3 sm:top-1/2 sm:right-auto sm:bottom-auto sm:left-1/2 sm:w-[calc(100%-2rem)] sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl">
          <Dialog.Title className="text-xl font-semibold">
            {t('practice.cards.settingsTitle')}
          </Dialog.Title>
          <Dialog.Description className="mt-1 text-muted">
            {t('practice.cards.settingsIntro')}
          </Dialog.Description>
          <RadioGroup.Root
            value={repeat}
            onValueChange={(value) => void update({ cardRepeat: value === 'end' ? 'end' : 'none' })}
            aria-label={t('practice.cards.settingsTitle')}
            className="mt-4 grid gap-3"
          >
            {options.map((option) => (
              <RadioGroup.Item
                key={option.value}
                value={option.value}
                className="grid gap-1 rounded-xl border-2 border-border bg-surface p-4 text-left transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary-soft"
              >
                <span className="flex items-center gap-2 font-semibold">
                  <span
                    aria-hidden="true"
                    className="grid size-5 shrink-0 place-items-center rounded-full border-2 border-current text-primary"
                  >
                    {repeat === option.value && (
                      <span className="size-2.5 rounded-full bg-current" />
                    )}
                  </span>
                  {option.title}
                </span>
                <span className="text-sm">{option.body}</span>
                <span className="text-sm text-muted">{option.when}</span>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
          <p className="mt-4 text-sm text-muted">{t('practice.cards.settingsNote')}</p>
          <Dialog.Close asChild>
            <Button className="mt-4 w-full">{t('practice.cards.done')}</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
