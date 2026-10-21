import { ArrowRight, BookOpenCheck, Check, Eye, Lightbulb, PencilLine, X } from 'lucide-react';
import { useId, useMemo, useState } from 'react';
import { RichText } from '@/content/RichText';
import type { Exam, Task } from '@/content/schema.types';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { lineMatches, solutionLines, type SolutionLine } from '@/domain/practice/worked';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';

interface LineState {
  written: string;
  revealed: boolean;
  /** The student's own verdict after comparing. */
  same?: boolean;
}

/**
 * A task with its solution written out line by line. With `hidden` > 0 the
 * last lines are covered: the student writes each one, uncovers it and
 * compares. A prompt asks them to explain each shown step to themselves,
 * which is what makes worked examples work (Renkl & Atkinson, 2003).
 */
export function WorkedExample({
  task,
  exam,
  hidden,
  last,
  onDone,
}: {
  task: Task;
  exam: Exam;
  hidden: number;
  last: boolean;
  onDone: (result: { same: number; hidden: number }) => void;
}) {
  const lines = useMemo(() => solutionLines(task), [task]);
  const firstHidden = lines.length - hidden;
  const [states, setStates] = useState<LineState[]>(() =>
    lines.map(() => ({ written: '', revealed: false })),
  );
  const update = (index: number, patch: Partial<LineState>) =>
    setStates((current) => current.map((s, i) => (i === index ? { ...s, ...patch } : s)));
  // Lines are uncovered in order: the next one opens once the previous is compared.
  const active = states.findIndex((s, i) => i >= firstHidden && s.same === undefined);
  const done = active === -1;
  const same = states.filter((s, i) => i >= firstHidden && s.same).length;

  return (
    <section aria-labelledby={`worked-${task.id}`} className="grid gap-4">
      <article className="rounded-lg border border-border bg-surface p-5 shadow-1 sm:p-6">
        <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h2 id={`worked-${task.id}`} className="text-lg font-bold">
            {t('workspace.taskHeading', { number: task.number })}
          </h2>
          <Badge tone={hidden === 0 ? 'info' : 'warning'}>
            {hidden === 0 ? (
              <BookOpenCheck aria-hidden="true" />
            ) : (
              <PencilLine aria-hidden="true" />
            )}
            {hidden === 0
              ? t('practice.worked.fullBadge')
              : t('practice.worked.fadedBadge', { count: hidden })}
          </Badge>
        </header>
        <RichText text={task.text} lang={exam.language} />
      </article>

      <p className="flex items-start gap-2 rounded-md bg-primary-soft p-3 text-sm text-primary-soft-fg">
        <Lightbulb aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {hidden === 0 ? t('practice.worked.explainTip') : t('practice.worked.fadedTip')}
      </p>

      <ol className="grid gap-3" aria-label={t('practice.worked.solution')}>
        {lines.map((line, index) =>
          index < firstHidden ? (
            <ShownLine key={index} line={line} index={index} />
          ) : (
            <HiddenLine
              key={index}
              line={line}
              index={index}
              state={states[index]!}
              enabled={index === active}
              onChange={(patch) => update(index, patch)}
            />
          ),
        )}
      </ol>

      {task.explanation && (done || hidden === 0) && (
        <details className="rounded-lg border border-border bg-surface p-4">
          <summary className="cursor-pointer font-semibold">{t('practice.worked.summary')}</summary>
          <RichText text={task.explanation} className="mt-3" />
        </details>
      )}

      <div className="sticky bottom-0 -mx-4 flex flex-wrap items-center justify-end gap-3 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        {hidden > 0 && done && (
          <p role="status" className="mr-auto text-sm font-medium">
            {t('practice.worked.score', {
              same: formatNumber(same),
              hidden: formatNumber(hidden),
            })}
          </p>
        )}
        <Button disabled={!done} onClick={() => onDone({ same, hidden })}>
          {last ? t('practice.finish') : t('practice.next')}
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}

function LineHead({ line, index }: { line: SolutionLine; index: number }) {
  return (
    <p className="text-sm font-semibold text-muted">
      {line.final
        ? t('practice.worked.finalLine')
        : t('practice.worked.step', { number: formatNumber(index + 1) })}
      {line.points > 0 && ` · ${t('workspace.taskPoints', { points: line.points })}`}
    </p>
  );
}

function ShownLine({ line, index }: { line: SolutionLine; index: number }) {
  return (
    <li className="grid animate-rise-in gap-1 rounded-lg border border-border bg-surface p-4">
      <LineHead line={line} index={index} />
      <RichText text={line.text} />
    </li>
  );
}

function HiddenLine({
  line,
  index,
  state,
  enabled,
  onChange,
}: {
  line: SolutionLine;
  index: number;
  state: LineState;
  enabled: boolean;
  onChange: (patch: Partial<LineState>) => void;
}) {
  const id = useId();
  const match = state.revealed ? lineMatches(line, state.written) : undefined;
  return (
    <li
      className={cn(
        'grid gap-3 rounded-lg border-2 border-dashed p-4 transition-colors',
        enabled ? 'border-primary bg-surface' : 'border-border bg-surface-muted',
        state.same === true && 'border-solid border-success',
        state.same === false && 'border-solid border-warning',
      )}
    >
      <LineHead line={line} index={index} />
      <label htmlFor={id} className="text-sm font-medium">
        {line.final ? t('practice.worked.writeFinal') : t('practice.worked.writeStep')}
      </label>
      <textarea
        id={id}
        rows={2}
        value={state.written}
        disabled={!enabled || state.revealed}
        onChange={(event) => onChange({ written: event.target.value })}
        className="w-full rounded-md border border-border-strong bg-surface p-2 disabled:opacity-70"
      />
      {!state.revealed ? (
        <Button
          variant="secondary"
          className="justify-self-start"
          disabled={!enabled}
          onClick={() => onChange({ revealed: true })}
        >
          <Eye aria-hidden="true" />
          {t('practice.worked.reveal')}
        </Button>
      ) : (
        <div className="grid animate-rise-in gap-3">
          <div className="rounded-md bg-surface-muted p-3">
            <p className="text-sm font-semibold">{t('practice.worked.scheme')}</p>
            <RichText text={line.text} />
          </div>
          {match !== undefined && (
            <p role="status" className={cn('text-sm', match ? 'text-success' : 'text-warning')}>
              {match ? t('practice.worked.keywordsYes') : t('practice.worked.keywordsNo')}
            </p>
          )}
          {state.same === undefined ? (
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={() => onChange({ same: true })}>
                <Check aria-hidden="true" />
                {t('practice.worked.same')}
              </Button>
              <Button size="sm" variant="secondary" onClick={() => onChange({ same: false })}>
                <X aria-hidden="true" />
                {t('practice.worked.different')}
              </Button>
            </div>
          ) : (
            <p className="text-sm font-medium">
              {state.same ? t('practice.worked.markedSame') : t('practice.worked.markedDifferent')}
            </p>
          )}
        </div>
      )}
    </li>
  );
}
