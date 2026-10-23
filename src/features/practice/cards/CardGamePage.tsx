import { ArrowRight, Check, RotateCcw, Timer, Trophy, X } from 'lucide-react';
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { CARD_LANGUAGES, filterCards, filterFromParams, filterToParams } from '@/content/cards';
import { Button } from '@/design/ui/Button';
import { Celebration } from '@/design/ui/Celebration';
import { EmptyState } from '@/design/ui/EmptyState';
import {
  checkTyped,
  gameItems,
  matchRound,
  quizQuestions,
  typeable,
  type GameItem,
  type TypedResult,
} from '@/domain/cards/games';
import { shuffle } from '@/domain/practice/topics';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { freshSeed } from '@/lib/seed';
import { CardMap } from './CardMap';
import { deckPage } from './links';

const ROUND = 10;
type Game = 'kviz' | 'parosito' | 'beiros';
const TITLES: Record<Game, string> = {
  kviz: 'cardGames.quiz.title',
  parosito: 'cardGames.match.title',
  beiros: 'cardGames.type.title',
};

/** Full-screen card games for one deck: quiz, matching pairs, typing. */
export function CardGamePage() {
  const { game: requested = 'kviz' } = useParams();
  const game: Game = requested in TITLES ? (requested as Game) : 'kviz';
  const [params] = useSearchParams();
  const filter = filterFromParams(params);
  const subject = filter.subject ?? 'tortenelem';
  const deck = filter.deck ? t(`practice.cards.deck.${filter.deck}`) : '';
  const title = t(TITLES[game] as 'cardGames.quiz.title');
  usePageTitle(deck ? `${title} · ${deck}` : title);
  const items = gameItems(filterCards(filter), CARD_LANGUAGES[subject]);
  const back = deckPage(filter);
  const [round, setRound] = useState(0);
  const again = () => setRound((r) => r + 1);

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-surface/95 px-3 py-2 backdrop-blur">
        <Button asChild variant="ghost" size="icon" aria-label={t('cardGames.back')}>
          <Link to={back}>
            <X aria-hidden="true" />
          </Link>
        </Button>
        <h1 className="min-w-0 flex-1 truncate font-semibold">
          {title}
          {deck && <span className="font-normal text-muted"> · {deck}</span>}
        </h1>
      </header>
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-2xl flex-1 p-4 outline-none">
        {game === 'kviz' && <Quiz key={round} items={items} back={back} onAgain={again} />}
        {game === 'parosito' && (
          <Match
            key={round}
            items={items}
            back={back}
            onAgain={again}
            bestKey={`erettsegi.cards.match.${filterToParams(filter)}`}
          />
        )}
        {game === 'beiros' && <Typing key={round} items={items} back={back} onAgain={again} />}
      </main>
    </div>
  );
}

function NotEnough({ back }: { back: string }) {
  return (
    <EmptyState
      icon={<Trophy />}
      title={t('practice.cards.notEnough')}
      description={t('practice.cards.gamesNote')}
      action={
        <Button asChild variant="secondary">
          <Link to={back}>{t('cardGames.back')}</Link>
        </Button>
      }
    />
  );
}

/** The question side: a map for place cards, otherwise the text. */
function Prompt({ item }: { item: GameItem }) {
  return (
    <div className="grid min-h-40 place-items-center gap-3 rounded-2xl border border-border bg-surface p-5 text-center shadow-2 sm:p-7">
      {item.place && (
        <div className="w-full max-w-xs">
          <CardMap
            lat={item.place.lat}
            lon={item.place.lon}
            view={item.place.view}
            label={t('practice.cards.mapLabel')}
          />
        </div>
      )}
      <p
        className={cn(
          item.place ? 'text-base' : item.prompt.length > 80 ? 'text-lg' : 'text-2xl font-semibold',
        )}
      >
        {item.prompt}
      </p>
    </div>
  );
}

function Progress({ current, total }: { current: number; total: number }) {
  return (
    <div className="grid gap-2">
      <p className="text-center text-sm font-semibold text-muted tabular-nums">
        {t('cardGames.progress', { current, total })}
      </p>
      <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-(--motion-base)"
          style={{ width: `${((current - 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

/** End of a quiz or typing round: score and what to look at again. */
function Result({
  right,
  total,
  missed,
  back,
  onAgain,
}: {
  right: number;
  total: number;
  missed: GameItem[];
  back: string;
  onAgain: () => void;
}) {
  const again = useRef<HTMLButtonElement>(null);
  useEffect(() => again.current?.focus(), []);
  return (
    <section
      aria-labelledby="game-result"
      className="grid animate-pop-in gap-4 rounded-xl border border-border bg-surface p-6 shadow-2"
    >
      {missed.length === 0 && <Celebration />}
      <h2 id="game-result" className="text-3xl font-bold tabular-nums">
        {t('cardGames.result', { right: formatNumber(right), total: formatNumber(total) })}
      </h2>
      {missed.length === 0 ? (
        <p className="text-lg font-medium text-success">{t('cardGames.perfect')}</p>
      ) : (
        <>
          <p className="font-medium">{t('cardGames.wrongList')}</p>
          <ul className="grid gap-2">
            {missed.map((item) => (
              <li key={item.id} className="rounded-md bg-surface-muted p-3 text-sm">
                <span className="block text-muted">{item.prompt}</span>
                <span lang={item.lang} className="font-semibold">
                  {item.answer}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="flex flex-wrap gap-2">
        <Button ref={again} onClick={onAgain}>
          <RotateCcw aria-hidden="true" />
          {t('cardGames.again')}
        </Button>
        <Button asChild variant="secondary">
          <Link to={back}>{t('cardGames.back')}</Link>
        </Button>
      </div>
    </section>
  );
}

function Quiz({ items, back, onAgain }: { items: GameItem[]; back: string; onAgain: () => void }) {
  const [questions] = useState(() => quizQuestions(items, ROUND, freshSeed()));
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [missed, setMissed] = useState<GameItem[]>([]);
  const next = useRef<HTMLButtonElement>(null);
  const question = questions[index];

  const choose = (option: string) => {
    if (!question || chosen !== null) return;
    setChosen(option);
    if (option !== question.item.answer) setMissed([...missed, question.item]);
  };
  useEffect(() => {
    if (chosen !== null) next.current?.focus();
  }, [chosen]);
  // Keys 1–4 choose an option.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const n = Number(event.key);
      if (question && n >= 1 && n <= question.options.length) choose(question.options[n - 1]!);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (questions.length === 0) return <NotEnough back={back} />;
  if (!question)
    return (
      <Result
        right={questions.length - missed.length}
        total={questions.length}
        missed={missed}
        back={back}
        onAgain={onAgain}
      />
    );
  const right = chosen === question.item.answer;
  return (
    <div className="grid gap-5">
      <Progress current={index + 1} total={questions.length} />
      <Prompt item={question.item} />
      <ul aria-label={t('cardGames.quiz.options')} className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option, i) => {
          const correct = chosen !== null && option === question.item.answer;
          const wrong = chosen === option && !right;
          return (
            <li key={option}>
              <button
                type="button"
                disabled={chosen !== null}
                onClick={() => choose(option)}
                lang={question.item.lang}
                className={cn(
                  'flex min-h-14 w-full items-center gap-3 rounded-xl border-2 bg-surface p-3 text-left font-medium shadow-1 transition-colors duration-(--motion-fast)',
                  chosen === null && 'border-border hover:border-primary',
                  correct && 'border-success bg-success-soft',
                  wrong && 'animate-shake border-danger bg-danger-soft',
                  chosen !== null && !correct && !wrong && 'border-border opacity-60',
                )}
              >
                <span
                  aria-hidden="true"
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-muted text-sm font-bold text-muted"
                >
                  {correct ? (
                    <Check className="size-4 text-success" />
                  ) : wrong ? (
                    <X className="size-4 text-danger" />
                  ) : (
                    i + 1
                  )}
                </span>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
      {chosen !== null && (
        <div className="grid gap-3">
          <p role="status" className={cn('font-semibold', right ? 'text-success' : 'text-danger')}>
            {right
              ? t('cardGames.quiz.right')
              : t('cardGames.quiz.wrong', { answer: question.item.answer })}
          </p>
          <Button
            ref={next}
            size="lg"
            onClick={() => {
              setChosen(null);
              setIndex(index + 1);
            }}
          >
            {t('cardGames.next')}
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  );
}

const formatTime = (ms: number) => {
  const seconds = ms / 1000;
  const m = Math.floor(seconds / 60);
  const s = (seconds % 60).toFixed(1).replace('.', ',');
  return m > 0 ? `${m}:${s.padStart(4, '0')}` : `${s} mp`;
};

function readBest(key: string): number | null {
  try {
    const value = Number(localStorage.getItem(key));
    return value > 0 ? value : null;
  } catch {
    return null;
  }
}

interface Tile {
  side: 'prompt' | 'answer';
  item: GameItem;
}

function Match({
  items,
  back,
  onAgain,
  bestKey,
}: {
  items: GameItem[];
  back: string;
  onAgain: () => void;
  bestKey: string;
}) {
  const [setup] = useState(() => {
    const seed = freshSeed();
    const pairs = matchRound(items, seed);
    return {
      pairs,
      prompts: shuffle(pairs, seed + 1),
      answers: shuffle(pairs, seed + 2),
    };
  });
  const [selected, setSelected] = useState<Tile | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<Tile[]>([]);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [penalty, setPenalty] = useState(0);
  const [now, setNow] = useState(0);
  const [finished, setFinished] = useState<{ time: number; best: number | null } | null>(null);
  const [status, setStatus] = useState('');
  const againButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (finished) againButton.current?.focus();
  }, [finished]);

  // The clock ticks while the round runs.
  useEffect(() => {
    if (startedAt === null || finished) return;
    const timer = window.setInterval(() => setNow(performance.now()), 100);
    return () => window.clearInterval(timer);
  }, [startedAt, finished]);

  if (setup.pairs.length === 0) return <NotEnough back={back} />;
  const elapsed = startedAt === null ? 0 : Math.max(0, now - startedAt) + penalty;

  const pick = (tile: Tile, at: number) => {
    if (matched.has(tile.item.id) || finished) return;
    if (startedAt === null) {
      setStartedAt(at);
      setNow(at);
    }
    setWrong([]);
    if (!selected || selected.side === tile.side) {
      setSelected(selected?.item.id === tile.item.id && selected.side === tile.side ? null : tile);
      return;
    }
    if (selected.item.id === tile.item.id) {
      const next = new Set(matched).add(tile.item.id);
      setMatched(next);
      setSelected(null);
      setStatus(t('cardGames.match.matched'));
      if (next.size === setup.pairs.length) {
        const time = Math.max(0, at - (startedAt ?? at)) + penalty;
        const best = readBest(bestKey);
        try {
          if (!best || time < best) localStorage.setItem(bestKey, String(Math.round(time)));
        } catch {
          // Private browsing: the best time is just not kept.
        }
        setFinished({ time, best });
      }
    } else {
      setWrong([selected, tile]);
      setSelected(null);
      setPenalty(penalty + 1000);
      setStatus(t('cardGames.match.penalty'));
    }
  };

  if (finished) {
    const record = finished.best === null || finished.time < finished.best;
    return (
      <section
        aria-labelledby="match-done"
        className="grid animate-pop-in gap-4 rounded-xl border border-border bg-surface p-6 shadow-2"
      >
        <Celebration />
        <h2 id="match-done" className="text-3xl font-bold tabular-nums">
          {t('cardGames.match.done', { time: formatTime(finished.time) })}
        </h2>
        {record ? (
          <p className="flex items-center gap-2 text-lg font-semibold text-success">
            <Trophy aria-hidden="true" className="size-5" />
            {t('cardGames.match.newBest')}
          </p>
        ) : (
          <p className="text-muted">
            {t('cardGames.match.best', { time: formatTime(finished.best!) })}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          <Button ref={againButton} onClick={onAgain}>
            <RotateCcw aria-hidden="true" />
            {t('cardGames.again')}
          </Button>
          <Button asChild variant="secondary">
            <Link to={back}>{t('cardGames.back')}</Link>
          </Button>
        </div>
      </section>
    );
  }

  const best = readBest(bestKey);
  const column = (side: Tile['side'], list: GameItem[], label: string) => (
    <ul aria-label={label} className="grid content-start gap-2 sm:gap-3">
      {list.map((item) => {
        const done = matched.has(item.id);
        const isSelected = selected?.side === side && selected.item.id === item.id;
        const isWrong = wrong.some((w) => w.side === side && w.item.id === item.id);
        const text = side === 'prompt' ? item.prompt : item.answer;
        return (
          <li key={item.id}>
            <button
              type="button"
              aria-pressed={isSelected}
              disabled={done}
              onClick={(event) => pick({ side, item }, event.timeStamp)}
              lang={side === 'answer' ? item.lang : undefined}
              className={cn(
                'min-h-14 w-full rounded-xl border-2 bg-surface p-2.5 text-left text-sm font-medium shadow-1 transition-[opacity,transform,border-color,background-color] duration-(--motion-base) sm:p-3',
                text.length > 70 && 'text-xs sm:text-sm',
                done && 'scale-95 border-success bg-success-soft opacity-0',
                isSelected && 'border-primary bg-primary-soft',
                isWrong && 'animate-shake border-danger bg-danger-soft',
                !done && !isSelected && !isWrong && 'border-border hover:border-border-strong',
              )}
            >
              {text}
            </button>
          </li>
        );
      })}
    </ul>
  );
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-2 text-lg font-bold tabular-nums">
          <Timer aria-hidden="true" className="size-5 text-primary" />
          {t('cardGames.match.time', { time: formatTime(elapsed) })}
        </p>
        {best && (
          <p className="text-sm text-muted">
            {t('cardGames.match.best', { time: formatTime(best) })}
          </p>
        )}
      </div>
      {startedAt === null && <p className="text-muted">{t('cardGames.match.intro')}</p>}
      <p role="status" className="sr-only">
        {status}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {column('prompt', setup.prompts, t('cardGames.match.prompts'))}
        {column('answer', setup.answers, t('cardGames.match.answers'))}
      </div>
    </div>
  );
}

function Typing({
  items,
  back,
  onAgain,
}: {
  items: GameItem[];
  back: string;
  onAgain: () => void;
}) {
  const [round] = useState(() => shuffle(typeable(items), freshSeed()).slice(0, ROUND));
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [result, setResult] = useState<TypedResult | null>(null);
  const [missed, setMissed] = useState<GameItem[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const next = useRef<HTMLButtonElement>(null);
  const inputId = useId();
  const item = round[index];

  useEffect(() => {
    if (result === null) input.current?.focus();
    else next.current?.focus();
  }, [result, index]);

  if (round.length < 3) return <NotEnough back={back} />;
  if (!item)
    return (
      <Result
        right={round.length - missed.length}
        total={round.length}
        missed={missed}
        back={back}
        onAgain={onAgain}
      />
    );

  const check = (event?: FormEvent) => {
    event?.preventDefault();
    if (result !== null) return;
    const outcome = checkTyped(value, item.answer);
    setResult(outcome);
    if (outcome === 'wrong') setMissed([...missed, item]);
  };
  const giveUp = () => {
    setResult('wrong');
    setMissed([...missed, item]);
  };
  const advance = () => {
    setResult(null);
    setValue('');
    setIndex(index + 1);
  };

  const feedback: Record<TypedResult, ReactNode> = {
    right: t('cardGames.type.right'),
    typo: t('cardGames.type.typo', { answer: item.answer }),
    wrong: t('cardGames.type.wrong', { answer: item.answer }),
  };
  return (
    <div className="grid gap-5">
      <Progress current={index + 1} total={round.length} />
      <Prompt item={item} />
      <form onSubmit={check} className="grid gap-3">
        <label htmlFor={inputId} className="font-medium">
          {t('cardGames.type.label')}
        </label>
        <input
          ref={input}
          id={inputId}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          readOnly={result !== null}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          lang={item.lang}
          className={cn(
            'min-h-12 rounded-md border-2 bg-surface px-3 text-lg',
            result === null && 'border-border-strong',
            result === 'right' && 'border-success',
            result === 'typo' && 'border-warning',
            result === 'wrong' && 'border-danger',
          )}
        />
        {result === null ? (
          <div className="flex flex-wrap justify-end gap-2">
            <Button type="button" variant="ghost" onClick={giveUp}>
              {t('cardGames.type.dontKnow')}
            </Button>
            <Button type="submit" disabled={!value.trim()}>
              <Check aria-hidden="true" />
              {t('cardGames.type.check')}
            </Button>
          </div>
        ) : (
          <div className="grid gap-3">
            <p
              role="status"
              className={cn(
                'font-semibold',
                result === 'right'
                  ? 'text-success'
                  : result === 'typo'
                    ? 'text-warning'
                    : 'text-danger',
              )}
            >
              {feedback[result]}
            </p>
            <div className="flex flex-wrap justify-end gap-2">
              {result === 'wrong' && value.trim() && (
                // The student knows best when a spelling variant is still right.
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setMissed(missed.filter((m) => m.id !== item.id));
                    setResult('right');
                  }}
                >
                  {t('cardGames.type.override')}
                </Button>
              )}
              <Button ref={next} type="button" size="lg" onClick={advance}>
                {t('cardGames.next')}
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
