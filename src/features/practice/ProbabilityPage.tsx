import { ArrowRight, Check, Eye, Lightbulb, ListChecks, RefreshCw, X } from 'lucide-react';
import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { RichText } from '@/content/RichText';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import {
  checkProbability,
  decimal,
  KINDS,
  makeProblem,
  tex,
  value,
  type Fraction,
  type ProbabilityCheck,
  type ProbabilityKind,
} from '@/domain/practice/probability';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { freshSeed } from '@/lib/seed';
import { BackLink } from './BackLink';

const IDEAS = ['classic', 'complement', 'product', 'combination'] as const;
/** The worked example of each kind always uses the same numbers. */
const EXAMPLE_SEED = 11;
const REAL_TASKS = `/gyakorlas/temakorok?targy=matematika&tema=${encodeURIComponent('valószínűség')}`;

const exact = (answer: Fraction) => `$${tex(answer)} \\approx ${decimal(value(answer))}$`;

/** Probability for the maths exam: the core ideas, worked examples, then practice. */
export function ProbabilityPage() {
  usePageTitle(t('probability.title'));
  const [params, setParams] = useSearchParams();
  const requested = params.get('tipus');
  const kind: ProbabilityKind = KINDS.find((k) => k === requested) ?? KINDS[0];

  return (
    <>
      <BackLink />
      <PageHeader title={t('probability.title')} description={t('probability.intro')} />

      <section aria-labelledby="prob-ideas">
        <h2 id="prob-ideas" className="mb-3 text-xl font-bold">
          {t('probability.ideasTitle')}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {IDEAS.map((idea, index) => (
            <li
              key={idea}
              className="grid content-start gap-2 rounded-lg border border-border bg-surface p-4 shadow-1"
            >
              <p className="flex items-center gap-2 font-semibold">
                <span
                  aria-hidden="true"
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-primary-soft text-sm text-primary-soft-fg"
                >
                  {index + 1}
                </span>
                {t(`probability.ideas.${idea}Title`)}
              </p>
              <RichText text={t(`probability.ideas.${idea}Body`)} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="prob-kinds" className="mt-8">
        <h2 id="prob-kinds" className="mb-3 text-xl font-bold">
          {t('probability.kindsTitle')}
        </h2>
        <div role="group" aria-label={t('probability.kindsLabel')} className="flex flex-wrap gap-2">
          {KINDS.map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={k === kind}
              onClick={() => setParams({ tipus: k }, { replace: true, preventScrollReset: true })}
              className={cn(
                'min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors',
                k === kind
                  ? 'border-primary bg-primary text-primary-fg'
                  : 'border-border bg-surface hover:border-border-strong',
              )}
            >
              {t(`probability.kinds.${k}`)}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-lg bg-primary-soft p-4 text-primary-soft-fg">
          <Lightbulb aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <div>
            <p className="font-semibold">{t('probability.whenTitle')}</p>
            <RichText text={t(`probability.when.${kind}`)} />
          </div>
        </div>

        {/* Keyed by kind so switching starts both parts fresh. */}
        <Example key={`example-${kind}`} kind={kind} />
        <Practice key={`practice-${kind}`} kind={kind} />
      </section>

      <Card className="mt-8">
        <CardTitle>{t('probability.realTitle')}</CardTitle>
        <CardDescription>{t('probability.realBody')}</CardDescription>
        <Link
          to={REAL_TASKS}
          className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary underline underline-offset-4"
        >
          {t('probability.realLink')}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Card>
    </>
  );
}

/** A worked example, uncovered one step at a time. */
function Example({ kind }: { kind: ProbabilityKind }) {
  const problem = makeProblem(kind, EXAMPLE_SEED);
  const [shown, setShown] = useState(0);
  const done = shown >= problem.steps.length;
  return (
    <section aria-labelledby="prob-example" className="mt-6 grid gap-3">
      <h3 id="prob-example" className="text-lg font-bold">
        {t('probability.exampleTitle')}
      </h3>
      <div className="rounded-lg border border-border bg-surface p-5 shadow-1">
        <RichText text={problem.text} />
      </div>
      <Steps steps={problem.steps} shown={shown} />
      {done ? (
        <p role="status" className="flex items-center gap-2 font-medium text-success">
          <Check aria-hidden="true" className="size-5" />
          {t('probability.exampleDone')}
        </p>
      ) : (
        <div className="grid gap-3 rounded-lg border-2 border-dashed border-primary bg-surface p-4">
          <p className="flex items-start gap-2 font-medium">
            <Lightbulb aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
            {shown === 0 ? t('probability.thinkFirst') : t('probability.thinkNext')}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setShown(shown + 1)}>
              <Eye aria-hidden="true" />
              {shown === 0 ? t('probability.showFirst') : t('probability.showNext')}
            </Button>
            <Button variant="ghost" onClick={() => setShown(problem.steps.length)}>
              <ListChecks aria-hidden="true" />
              {t('probability.showAll')}
            </Button>
          </div>
          <p className="text-sm text-muted">
            {t('probability.stepsLeft', { count: problem.steps.length - shown })}
          </p>
        </div>
      )}
    </section>
  );
}

function Steps({ steps, shown }: { steps: string[]; shown: number }) {
  const last = useRef<HTMLLIElement>(null);
  // The newest step gets focus, so screen readers read it out.
  useEffect(() => {
    if (shown > 0) last.current?.focus();
  }, [shown]);
  if (shown === 0) return null;
  return (
    <ol className="grid gap-3">
      {steps.slice(0, shown).map((step, index) => (
        <li
          key={index}
          ref={index === shown - 1 ? last : undefined}
          tabIndex={-1}
          className="grid animate-rise-in gap-1 rounded-lg border border-border bg-surface p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <p className="text-sm font-semibold text-muted">
            {t('probability.step', { number: formatNumber(index + 1) })}
          </p>
          <RichText text={step} />
        </li>
      ))}
    </ol>
  );
}

/** A fresh problem of the same kind, checked at once, with hints on request. */
function Practice({ kind }: { kind: ProbabilityKind }) {
  const inputId = useId();
  const hintId = useId();
  const [seed, setSeed] = useState(freshSeed);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ProbabilityCheck | null>(null);
  const [hints, setHints] = useState(0);
  const [tally, setTally] = useState({ right: 0, total: 0 });
  // Only the first check of a problem counts in the tally.
  const [counted, setCounted] = useState(false);
  const field = useRef<HTMLInputElement>(null);
  const problem = makeProblem(kind, seed);
  const solved = result === 'right' || hints >= problem.steps.length;

  function check(event: FormEvent) {
    event.preventDefault();
    const outcome = checkProbability(input, problem.answer);
    setResult(outcome);
    if (outcome !== 'unreadable' && !counted) {
      setCounted(true);
      setTally((s) => ({ right: s.right + (outcome === 'right' ? 1 : 0), total: s.total + 1 }));
    }
  }

  function next() {
    // A different seed, never the same problem twice in a row.
    setSeed((s) => (s % 2_147_483_646) + 1 + Math.floor(Math.random() * 1000));
    setInput('');
    setResult(null);
    setHints(0);
    setCounted(false);
    field.current?.focus();
  }

  return (
    <section
      aria-labelledby="prob-try"
      className="mt-8 grid gap-3 rounded-lg border border-border bg-surface-muted p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id="prob-try" className="text-lg font-bold">
          {t('probability.tryTitle')}
        </h3>
        {tally.total > 0 && (
          <p className="text-sm font-medium text-muted">
            {t('probability.tally', { right: tally.right, total: tally.total })}
          </p>
        )}
      </div>
      <div className="rounded-lg border border-border bg-surface p-5 shadow-1">
        <RichText text={problem.text} />
      </div>

      <form onSubmit={check} className="grid gap-2">
        <label htmlFor={inputId} className="font-semibold">
          {t('probability.answerLabel')}
        </label>
        <div className="flex flex-wrap gap-2">
          <input
            ref={field}
            id={inputId}
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              if (result !== 'right') setResult(null);
            }}
            aria-describedby={hintId}
            inputMode="decimal"
            autoComplete="off"
            readOnly={result === 'right'}
            className={cn(
              'min-h-11 w-48 rounded-md border bg-surface px-3 tabular-nums',
              result === 'right'
                ? 'border-success'
                : result === 'wrong'
                  ? 'border-danger'
                  : 'border-border-strong',
            )}
          />
          {result !== 'right' && (
            <Button type="submit" disabled={!input.trim()}>
              <Check aria-hidden="true" />
              {t('probability.check')}
            </Button>
          )}
        </div>
        <p id={hintId} className="text-sm text-muted">
          {t('probability.answerHint')}
        </p>
      </form>

      <div role="status" className="empty:hidden">
        {result === 'right' && (
          <div className="flex items-start gap-2 font-semibold text-success">
            <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <RichText text={t('probability.right', { answer: exact(problem.answer) })} />
          </div>
        )}
        {result === 'wrong' && (
          <p className="flex items-start gap-2 font-medium text-danger">
            <X aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            {t('probability.wrong')}
          </p>
        )}
        {result === 'unreadable' && <p className="font-medium">{t('probability.unreadable')}</p>}
        {result !== 'right' && hints >= problem.steps.length && (
          <RichText
            className="font-semibold"
            text={t('probability.revealed', { answer: exact(problem.answer) })}
          />
        )}
      </div>

      <Steps steps={problem.steps} shown={result === 'right' ? problem.steps.length : hints} />

      <div className="flex flex-wrap gap-2">
        {!solved && (
          <>
            <Button variant="secondary" onClick={() => setHints(hints + 1)}>
              <Lightbulb aria-hidden="true" />
              {t('probability.hint')}
            </Button>
            <Button variant="ghost" onClick={() => setHints(problem.steps.length)}>
              <Eye aria-hidden="true" />
              {t('probability.solution')}
            </Button>
          </>
        )}
        <Button variant={solved ? 'primary' : 'ghost'} onClick={next}>
          <RefreshCw aria-hidden="true" />
          {t('probability.next')}
        </Button>
      </div>
      <p className="text-sm text-muted">{t('probability.roundingNote')}</p>
    </section>
  );
}
