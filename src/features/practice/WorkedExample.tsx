import { BookOpenCheck, Eye, Lightbulb, ListChecks } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { RichText } from '@/content/RichText';
import type { Exam, Task } from '@/content/schema.types';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { solutionLines, type SolutionLine } from '@/domain/practice/worked';
import { formatNumber, t } from '@/i18n';

/**
 * A task with its solution, uncovered one step at a time. Before each step
 * the student is asked to think what comes next, so they work along instead
 * of only reading. The actions (another example, solve one alone, finish)
 * are always there: the student decides when they are ready.
 */
export function WorkedExample({
  task,
  exam,
  number,
  actions,
}: {
  task: Task;
  exam: Exam;
  /** Which example of the session this is (1, 2, …). */
  number: number;
  actions: ReactNode;
}) {
  const lines = useMemo(() => solutionLines(task), [task]);
  const [shown, setShown] = useState(0);
  const done = shown >= lines.length;
  const lastShown = useRef<HTMLLIElement>(null);

  // Keep the newest step in view and give it focus for screen readers.
  useEffect(() => {
    if (shown > 0) lastShown.current?.focus();
  }, [shown]);

  return (
    <section aria-labelledby={`worked-${task.id}`} className="grid gap-4">
      <article className="rounded-lg border border-border bg-surface p-5 shadow-1 sm:p-6">
        <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h2 id={`worked-${task.id}`} className="text-lg font-bold">
            {t('workspace.taskHeading', { number: task.number })}
          </h2>
          <Badge tone="info">
            <BookOpenCheck aria-hidden="true" />
            {t('practice.worked.exampleBadge', { number: formatNumber(number) })}
          </Badge>
        </header>
        <RichText text={task.text} lang={exam.language} />
      </article>

      {shown > 0 && (
        <ol className="grid gap-3" aria-label={t('practice.worked.solution')}>
          {lines.slice(0, shown).map((line, index) => (
            <SolutionStep
              key={index}
              line={line}
              index={index}
              ref={index === shown - 1 ? lastShown : undefined}
            />
          ))}
        </ol>
      )}

      {!done ? (
        <div className="grid gap-3 rounded-lg border-2 border-dashed border-primary bg-surface p-4">
          <p className="flex items-start gap-2 font-medium">
            <Lightbulb aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
            {shown === 0 ? t('practice.worked.thinkFirst') : t('practice.worked.thinkNext')}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setShown(shown + 1)}>
              <Eye aria-hidden="true" />
              {shown === 0
                ? t('practice.worked.showFirst')
                : lines[shown]?.final
                  ? t('practice.worked.showFinal')
                  : t('practice.worked.showNext')}
            </Button>
            <Button variant="ghost" onClick={() => setShown(lines.length)}>
              <ListChecks aria-hidden="true" />
              {t('practice.worked.showAll')}
            </Button>
          </div>
          <p className="text-sm text-muted">
            {t('practice.worked.stepsLeft', { count: lines.length - shown })}
          </p>
        </div>
      ) : (
        <>
          {task.explanation && (
            <details className="rounded-lg border border-border bg-surface p-4">
              <summary className="cursor-pointer font-semibold">
                {t('practice.worked.summary')}
              </summary>
              <RichText text={task.explanation} className="mt-3" />
            </details>
          )}
          <p role="status" className="font-medium">
            {t('practice.worked.doneQuestion')}
          </p>
        </>
      )}

      <div className="sticky bottom-0 -mx-4 flex flex-wrap items-center justify-end gap-2 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        {actions}
      </div>
    </section>
  );
}

function SolutionStep({
  line,
  index,
  ref,
}: {
  line: SolutionLine;
  index: number;
  ref?: React.Ref<HTMLLIElement>;
}) {
  return (
    <li
      ref={ref}
      tabIndex={-1}
      className="grid animate-rise-in gap-1 rounded-lg border border-border bg-surface p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <p className="text-sm font-semibold text-muted">
        {line.final
          ? t('practice.worked.finalLine')
          : t('practice.worked.step', { number: formatNumber(index + 1) })}
        {line.points > 0 && ` · ${t('workspace.taskPoints', { points: line.points })}`}
      </p>
      <RichText text={line.text} />
    </li>
  );
}
