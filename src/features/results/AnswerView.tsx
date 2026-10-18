import { Check, X } from 'lucide-react';
import type { Field } from '@/content/schema.types';
import { countWords } from '@/domain/text';
import { asList, isBlank } from '@/domain/scoring/rules';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import type { AnswerValue } from '@/storage/attempts';

function display(field: Field, value: AnswerValue | undefined): string {
  const values = asList(value);
  if (!field.options) return values.join(', ');
  return values
    .map((v) => {
      const option = field.options!.find((o) => o.value === v);
      return option && option.label !== option.value ? `${option.value}) ${option.label}` : v;
    })
    .join('; ');
}

/** One field of the student's answer, marked right or wrong when it was judged on its own. */
export function AnswerView({
  field,
  value,
  correct,
}: {
  field: Field;
  value: AnswerValue | undefined;
  correct?: boolean;
}) {
  const long = field.kind === 'essay' || field.kind === 'work' || field.kind === 'textarea';
  const blank = isBlank(value);
  const text = display(field, value);
  return (
    <div className="grid gap-1">
      {field.label && <p className="text-sm text-muted">{field.label}</p>}
      <div className="flex items-start gap-2">
        {correct !== undefined && !blank && (
          <span
            className={cn(
              'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full [&_svg]:size-3.5',
              correct ? 'bg-success-soft text-success' : 'bg-danger-soft text-danger',
            )}
          >
            {correct ? <Check aria-hidden="true" /> : <X aria-hidden="true" />}
            <span className="sr-only">
              {correct ? t('results.statusCorrect') : t('results.statusWrong')}
            </span>
          </span>
        )}
        {blank ? (
          <p className="text-muted italic">{t('results.noAnswer')}</p>
        ) : long ? (
          <details className="min-w-0 flex-1" open={field.kind !== 'essay'}>
            <summary className="cursor-pointer text-sm font-medium text-primary">
              {field.kind === 'essay'
                ? t('workspace.words', { count: countWords(text) })
                : t('results.yourAnswer')}
            </summary>
            <p className="mt-2 rounded-md bg-surface-muted p-3 whitespace-pre-wrap">{text}</p>
          </details>
        ) : (
          <p className="font-medium break-words">
            {text}
            {field.unit && !field.options && !text.trim().endsWith(field.unit)
              ? ` ${field.unit}`
              : ''}
          </p>
        )}
      </div>
    </div>
  );
}
