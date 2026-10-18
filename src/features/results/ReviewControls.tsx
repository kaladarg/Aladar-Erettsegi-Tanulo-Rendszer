import { Check, RotateCcw, Sparkles } from 'lucide-react';
import { RadioGroup } from 'radix-ui';
import { useId } from 'react';
import type { Criterion } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import type { ItemResult } from '@/domain/scoring/exam';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { saveReview } from '@/storage/attempts';

interface Target {
  attemptId: string;
  taskId: string;
}

const save = (target: Target, itemId: string, points: number | null) =>
  void saveReview(target.attemptId, target.taskId, itemId, points);

/** One marking-scheme step: automatic result (with override) or met / not met. */
export function StepReview({ target, item }: { target: Target; item: ItemResult }) {
  const points = t('results.pointsValue', { points: item.maxPoints });
  return (
    <li className="grid gap-2 rounded-md border border-border p-3">
      <div className="flex items-start justify-between gap-3">
        <p>{item.label}</p>
        <span className="shrink-0 text-sm font-medium text-muted tabular-nums">{points}</span>
      </div>
      {item.source === 'review' ? (
        <SegmentedControl<'' | 'met' | 'missed'>
          label={item.label}
          value={item.points === null ? '' : item.points > 0 ? 'met' : 'missed'}
          onValueChange={(value) => save(target, item.id, value === 'met' ? item.maxPoints : 0)}
          options={[
            { value: 'met', label: t('results.stepMet') },
            { value: 'missed', label: t('results.stepNotMet') },
          ]}
        />
      ) : item.source === 'auto' ? (
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 font-medium',
              item.points ? 'text-success' : 'text-muted',
            )}
          >
            {item.points ? <Check aria-hidden="true" className="size-4" /> : null}
            {t('results.stepAuto')}: {item.points ? t('results.stepMet') : t('results.stepNotMet')}
          </span>
          {item.autoMissed && (
            <>
              <span className="basis-full text-muted">{t('results.stepAutoMissed')}</span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => save(target, item.id, item.maxPoints)}
              >
                <Sparkles aria-hidden="true" />
                {t('results.acceptAnyway')}
              </Button>
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-medium">
            {t('results.overridden')}:{' '}
            {item.points ? t('results.stepMet') : t('results.stepNotMet')}
          </span>
          <Button size="sm" variant="ghost" onClick={() => save(target, item.id, null)}>
            <RotateCcw aria-hidden="true" />
            {t('results.revertAuto')}
          </Button>
        </div>
      )}
    </li>
  );
}

/** A rubric criterion (essays) or a deduction: pick a level or an exact score. */
export function CriterionReview({
  target,
  criterion,
  points,
  negative = false,
}: {
  target: Target;
  criterion: Criterion;
  points: number | null;
  negative?: boolean;
}) {
  const id = useId();
  const levels = criterion.levels ?? [];
  const sign = negative ? '−' : '';
  return (
    <li className="grid gap-3 rounded-md border border-border p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold">{criterion.label}</p>
          {criterion.description && (
            <p className="mt-1 text-sm text-muted">{criterion.description}</p>
          )}
        </div>
        <span className="shrink-0 text-sm font-medium text-muted tabular-nums">
          {points === null
            ? t('results.notRated')
            : `${sign}${points} / ${sign}${criterion.maxPoints}`}
        </span>
      </div>
      {levels.length > 0 && (
        <RadioGroup.Root
          aria-label={t('results.criterionLevels')}
          value={levels.find((l) => l.points === points)?.points.toString() ?? ''}
          onValueChange={(value) => save(target, criterion.id, Number(value))}
          className="grid gap-2"
        >
          {levels.map((level) => (
            <RadioGroup.Item
              key={level.points}
              value={level.points.toString()}
              className="flex items-start gap-3 rounded-md border border-border p-3 text-left text-sm hover:bg-surface-muted data-[state=checked]:border-primary data-[state=checked]:bg-primary-soft/40"
            >
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-border-strong">
                <RadioGroup.Indicator className="size-2 rounded-full bg-primary" />
              </span>
              <span>{level.description}</span>
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor={id} className="text-sm font-medium">
          {t('results.criterionPoints', { label: criterion.label })}
        </label>
        <select
          id={id}
          value={points ?? ''}
          onChange={(event) =>
            save(
              target,
              criterion.id,
              event.target.value === '' ? null : Number(event.target.value),
            )
          }
          className="min-h-11 rounded-md border border-border bg-surface px-3"
        >
          <option value="">{t('results.notRated')}</option>
          {Array.from({ length: criterion.maxPoints + 1 }, (_, n) => (
            <option key={n} value={n}>
              {sign}
              {n}
            </option>
          ))}
        </select>
      </div>
    </li>
  );
}
