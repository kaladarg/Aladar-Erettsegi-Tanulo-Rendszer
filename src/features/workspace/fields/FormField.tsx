import { Maximize2 } from 'lucide-react';
import { useId, useState } from 'react';
import type { Field, Task } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useAnswer, useAnswers } from '@/state/answerStore';
import { isTrueFalse, optionText } from '../WorkspaceContext';
import { EssayEditor } from './EssayEditor';
import { WordCount } from './WordCount';

const inputClass =
  'min-h-11 w-full rounded-md border border-border-strong bg-surface px-3 text-base outline-none focus:border-primary focus-visible:outline-3 focus-visible:outline-focus';

/** One field in form mode: large, labelled, easy inputs. */
export function FormField({ task, field }: { task: Task; field: Field }) {
  const id = useId();
  const value = useAnswer(field.id);
  const setAnswer = useAnswers((state) => state.setAnswer);
  const text = typeof value === 'string' ? value : '';
  const selected = Array.isArray(value) ? value : [];
  const label = field.label ?? t('workspace.answer');

  switch (field.kind) {
    case 'choice': {
      const options = field.options ?? [];
      if (task.type === 'matching') {
        return (
          <div className="grid gap-1 sm:grid-cols-[1fr_12rem] sm:items-center sm:gap-4">
            <label htmlFor={id}>{label}</label>
            <select
              id={id}
              value={text}
              onChange={(e) => setAnswer(field.id, e.target.value)}
              className={inputClass}
            >
              <option value="">{t('workspace.selectPlaceholder')}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {optionText(option)}
                </option>
              ))}
            </select>
          </div>
        );
      }
      const inline = isTrueFalse(field);
      return (
        <fieldset className={cn(inline && 'sm:flex sm:items-center sm:justify-between sm:gap-4')}>
          <legend className={cn('mb-2', inline && 'sm:float-left sm:mb-0')}>{label}</legend>
          <div className={cn('flex gap-2', inline ? 'flex-row' : 'flex-col')}>
            {options.map((option) => (
              <label
                key={option.value}
                className={cn(
                  'flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-focus',
                  text === option.value
                    ? 'border-primary bg-primary-soft/40'
                    : 'border-border hover:border-border-strong',
                )}
              >
                <input
                  type="radio"
                  name={id}
                  value={option.value}
                  checked={text === option.value}
                  onChange={() => setAnswer(field.id, option.value)}
                  className="size-4 accent-[var(--c-primary)]"
                />
                {optionText(option)}
              </label>
            ))}
          </div>
        </fieldset>
      );
    }
    case 'multi':
      return (
        <fieldset>
          <legend className="mb-2">{label}</legend>
          <div className="flex flex-col gap-2">
            {(field.options ?? []).map((option) => {
              const checked = selected.includes(option.value);
              return (
                <label
                  key={option.value}
                  className={cn(
                    'flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-focus',
                    checked
                      ? 'border-primary bg-primary-soft/40'
                      : 'border-border hover:border-border-strong',
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      setAnswer(
                        field.id,
                        checked
                          ? selected.filter((v) => v !== option.value)
                          : [...selected, option.value].sort(),
                      )
                    }
                    className="size-4 accent-[var(--c-primary)]"
                  />
                  {optionText(option)}
                </label>
              );
            })}
          </div>
        </fieldset>
      );
    case 'work':
    case 'textarea':
      return (
        <div className="grid gap-1">
          <label htmlFor={id}>{label}</label>
          <textarea
            id={id}
            rows={field.kind === 'work' ? 6 : 4}
            value={text}
            onChange={(e) => setAnswer(field.id, e.target.value)}
            className={cn(inputClass, 'py-2 font-mono text-sm leading-relaxed')}
          />
        </div>
      );
    case 'essay':
      return <EssayFormField task={task} field={field} id={id} label={label} text={text} />;
    default:
      return (
        <div className="grid gap-1 sm:grid-cols-[1fr_14rem] sm:items-center sm:gap-4">
          <label htmlFor={id}>{label}</label>
          <div className="flex items-center gap-2">
            <input
              id={id}
              type="text"
              inputMode={field.kind === 'number' ? 'decimal' : 'text'}
              autoComplete="off"
              spellCheck={field.kind !== 'number'}
              value={text}
              placeholder={
                field.placeholder !== label.replace(/:$/, '') ? field.placeholder : undefined
              }
              aria-describedby={field.unit ? `${id}-unit` : undefined}
              onChange={(e) => setAnswer(field.id, e.target.value)}
              className={inputClass}
            />
            {field.unit && (
              <span id={`${id}-unit`} className="shrink-0 text-muted">
                <span aria-hidden="true">{field.unit}</span>
                <span className="sr-only">{t('workspace.unit', { unit: field.unit })}</span>
              </span>
            )}
          </div>
        </div>
      );
  }
}

function EssayFormField({
  task,
  field,
  id,
  label,
  text,
}: {
  task: Task;
  field: Field;
  id: string;
  label: string;
  text: string;
}) {
  const [open, setOpen] = useState(false);
  const setAnswer = useAnswers((state) => state.setAnswer);
  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label htmlFor={id}>{label}</label>
        <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
          <Maximize2 aria-hidden="true" />
          {t('workspace.writeOpen')}
        </Button>
      </div>
      <textarea
        id={id}
        rows={12}
        lang="hu"
        value={text}
        aria-describedby={`${id}-count`}
        onChange={(e) => setAnswer(field.id, e.target.value)}
        className={cn(inputClass, 'py-3 leading-relaxed')}
      />
      <WordCount id={`${id}-count`} text={text} limit={task.wordLimit} />
      <EssayEditor task={task} field={field} open={open} onOpenChange={setOpen} />
    </div>
  );
}
