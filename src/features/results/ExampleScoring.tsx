import { ClipboardCheck, RotateCcw } from 'lucide-react';
import { useId, useState } from 'react';
import type { Criterion, ExampleAnswer, Task } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

/**
 * Calibration practice: the student scores a sample answer with the task's
 * criteria, then compares with the given scores. Practising with worked
 * examples and rubrics makes self-assessment more accurate.
 */
export function ExampleScoring({ task }: { task: Task }) {
  const examples = task.examples ?? [];
  const criteria = task.scoring.criteria ?? [];
  const [index, setIndex] = useState(0);
  if (examples.length === 0 || criteria.length === 0) return null;
  const example = examples[index] ?? examples[0]!;
  return (
    <details className="group rounded-md border border-border">
      <summary className="flex min-h-11 cursor-pointer items-center gap-2 px-3 py-2 font-medium text-primary">
        <ClipboardCheck aria-hidden="true" className="size-4" />
        {t('results.examples.title')}
      </summary>
      <div className="grid gap-4 border-t border-border p-3">
        <p className="text-sm">{t('results.examples.intro')}</p>
        <p className="text-xs text-muted">{t('results.examples.draft')}</p>
        {examples.length > 1 && (
          <SegmentedControl
            label={t('results.examples.pick')}
            value={String(index)}
            onValueChange={(value) => setIndex(Number(value))}
            options={examples.map((e, i) => ({
              value: String(i),
              label: e.label ?? `${t('results.examples.pick')} ${i + 1}`,
            }))}
          />
        )}
        <Scorer key={example.id} example={example} criteria={criteria} />
      </div>
    </details>
  );
}

function Scorer({ example, criteria }: { example: ExampleAnswer; criteria: Criterion[] }) {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState(false);
  const textId = useId();
  const complete = criteria.every((c) => scores[c.id] !== undefined);
  const words = example.text.trim().split(/\s+/).length;

  const yours = sum(criteria.map((c) => scores[c.id] ?? 0));
  const given = sum(criteria.map((c) => example.scores[c.id] ?? 0));
  const close = criteria.filter(
    (c) => Math.abs((scores[c.id] ?? 0) - (example.scores[c.id] ?? 0)) <= 1,
  ).length;
  const max = sum(criteria.map((c) => c.maxPoints));
  const tendency =
    yours - given >= 2 ? 'tooHigh' : given - yours >= 2 ? 'tooLow' : ('good' as const);

  return (
    <div className="grid gap-4">
      <section aria-labelledby={textId} className="grid gap-2">
        <h5
          id={textId}
          className="flex flex-wrap items-baseline justify-between gap-2 text-sm font-semibold"
        >
          {t('results.examples.read')}
          <span className="font-normal text-muted">
            {t('results.examples.words', { count: words })}
          </span>
        </h5>
        <div
          // A scrolling region must be focusable to scroll it with the keyboard (WCAG 2.1.1).
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          role="region"
          aria-labelledby={textId}
          className="max-h-96 overflow-y-auto rounded-md bg-surface-muted p-3 leading-relaxed focus-visible:ring-2 focus-visible:ring-focus"
        >
          {example.text.split(/\n\s*\n/).map((paragraph, i) => (
            <p key={i} className={i > 0 ? 'mt-3' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {!revealed ? (
        <>
          <ul className="grid gap-3">
            {criteria.map((criterion) => (
              <ScoreField
                key={criterion.id}
                criterion={criterion}
                value={scores[criterion.id]}
                onChange={(value) => setScores({ ...scores, [criterion.id]: value })}
              />
            ))}
          </ul>
          <div>
            <Button disabled={!complete} onClick={() => setRevealed(true)}>
              {t('results.examples.compare')}
            </Button>
          </div>
        </>
      ) : (
        <div className="grid gap-3" role="status">
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface-muted">
                <tr>
                  <th scope="col" className="p-2 text-left">
                    &nbsp;
                  </th>
                  <th scope="col" className="p-2 text-right">
                    {t('results.examples.yours')}
                  </th>
                  <th scope="col" className="p-2 text-right">
                    {t('results.examples.given')}
                  </th>
                  <th scope="col" className="p-2 text-right">
                    {t('results.examples.diff')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c) => {
                  const mine = scores[c.id] ?? 0;
                  const theirs = example.scores[c.id] ?? 0;
                  const diff = mine - theirs;
                  return (
                    <tr key={c.id} className="border-t border-border align-top">
                      <th scope="row" className="p-2 text-left font-medium">
                        {c.label}
                        {example.notes?.[c.id] && (
                          <span className="mt-1 block font-normal text-muted">
                            {example.notes[c.id]}
                          </span>
                        )}
                      </th>
                      <td className="p-2 text-right tabular-nums">{formatNumber(mine)}</td>
                      <td className="p-2 text-right tabular-nums">
                        {formatNumber(theirs)} / {formatNumber(c.maxPoints)}
                      </td>
                      <td
                        className={cn(
                          'p-2 text-right font-semibold tabular-nums',
                          Math.abs(diff) <= 1 ? 'text-success' : 'text-warning',
                        )}
                      >
                        {diff > 0 ? `+${formatNumber(diff)}` : formatNumber(diff)}
                      </td>
                    </tr>
                  );
                })}
                <tr className="border-t border-border-strong font-semibold">
                  <th scope="row" className="p-2 text-left">
                    {t('results.examples.total')}
                  </th>
                  <td className="p-2 text-right tabular-nums">{formatNumber(yours)}</td>
                  <td className="p-2 text-right tabular-nums">
                    {formatNumber(given)} / {formatNumber(max)}
                  </td>
                  <td className="p-2 text-right tabular-nums">
                    {yours - given > 0
                      ? `+${formatNumber(yours - given)}`
                      : formatNumber(yours - given)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            {t('results.examples.result', {
              yours: formatNumber(yours),
              given: formatNumber(given),
              close: `${formatNumber(close)} / ${formatNumber(criteria.length)}`,
            })}{' '}
            <strong>{t(`results.examples.${tendency}`)}</strong>
          </p>
          {example.comment && (
            <p className="text-sm">
              <span className="font-semibold">{t('results.examples.comment')}:</span>{' '}
              {example.comment}
            </p>
          )}
          <div>
            <Button
              variant="secondary"
              onClick={() => {
                setScores({});
                setRevealed(false);
              }}
            >
              <RotateCcw aria-hidden="true" />
              {t('results.examples.again')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ScoreField({
  criterion,
  value,
  onChange,
}: {
  criterion: Criterion;
  value: number | undefined;
  onChange: (value: number) => void;
}) {
  const id = useId();
  return (
    <li className="grid gap-1">
      <label htmlFor={id} className="text-sm font-medium">
        {t('results.examples.yourScore', { criterion: criterion.label })}
      </label>
      <select
        id={id}
        value={value ?? ''}
        onChange={(event) => onChange(Number(event.target.value))}
        className="min-h-11 max-w-xs rounded-md border border-border bg-surface px-3"
      >
        <option value="" disabled>
          {t('results.notRated')}
        </option>
        {Array.from({ length: criterion.maxPoints + 1 }, (_, n) => (
          <option key={n} value={n}>
            {n} / {criterion.maxPoints}
          </option>
        ))}
      </select>
      {criterion.description && <p className="text-xs text-muted">{criterion.description}</p>}
    </li>
  );
}
