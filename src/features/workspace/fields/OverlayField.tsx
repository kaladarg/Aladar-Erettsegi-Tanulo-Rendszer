import { Check, PenLine } from 'lucide-react';
import { Popover } from 'radix-ui';
import { useState, type CSSProperties } from 'react';
import type { Field, Task } from '@/content/schema.types';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useAnswer, useAnswers } from '@/state/answerStore';
import { fieldName, optionText } from '../WorkspaceContext';
import { EssayEditor } from './EssayEditor';

/** Shared look of inputs drawn over the paper: faint highlight, clear focus. */
const overlayClass =
  'absolute rounded-[3px] border border-primary/50 bg-primary/8 text-[#111] outline-none transition-colors placeholder:text-black/40 hover:border-primary focus:border-primary focus:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

interface OverlayFieldProps {
  task: Task;
  field: Field;
  style: CSSProperties;
  /** Height of the box in CSS pixels, used to size the text. */
  heightPx: number;
  scale: number;
  /** A further area of the same answer on a later page. */
  continuation?: boolean;
}

/** One answer field positioned over its box on the PDF page. */
/** WCAG 2.2 target size (2.5.8): small boxes grow to 24 px, centred on the printed box. */
const MIN_TARGET = 24;

export function OverlayField({
  task,
  field,
  style: boxStyle,
  heightPx,
  scale,
  continuation,
}: OverlayFieldProps) {
  const style: CSSProperties =
    heightPx < MIN_TARGET
      ? {
          ...boxStyle,
          minHeight: MIN_TARGET,
          minWidth: MIN_TARGET,
          marginTop: (heightPx - MIN_TARGET) / 2,
        }
      : boxStyle;
  const value = useAnswer(field.id);
  const setAnswer = useAnswers((state) => state.setAnswer);
  const text = typeof value === 'string' ? value : '';
  const name = fieldName(task, field);
  const lineFont = Math.min(20, Math.max(11, heightPx * 0.55));
  const blockFont = Math.min(18, Math.max(11, 12.5 * scale));

  switch (field.kind) {
    case 'choice':
      return (
        <select
          aria-label={name}
          value={text}
          onChange={(e) => setAnswer(field.id, e.target.value)}
          // Native arrows eat the space of small boxes; the value is centred instead.
          style={{ ...style, fontSize: lineFont, minWidth: '3.4em' }}
          className={cn(overlayClass, 'cursor-pointer appearance-none px-1 text-center')}
        >
          <option value="">{'–'}</option>
          {(field.options ?? []).map((option) => (
            <option key={option.value} value={option.value}>
              {option.value === option.label ? option.label : option.value}
            </option>
          ))}
        </select>
      );
    case 'multi':
      return <MultiOverlay task={task} field={field} style={{ ...style, fontSize: lineFont }} />;
    case 'work':
    case 'textarea':
      return (
        <textarea
          aria-label={name}
          value={text}
          placeholder={field.placeholder}
          onChange={(e) => setAnswer(field.id, e.target.value)}
          style={{ ...style, fontSize: blockFont }}
          className={cn(overlayClass, 'resize-none p-1.5 font-mono leading-snug')}
        />
      );
    case 'essay':
      return (
        <EssayOverlay
          task={task}
          field={field}
          style={{ ...style, fontSize: blockFont }}
          text={text}
          continuation={continuation}
        />
      );
    default:
      return (
        <input
          aria-label={name}
          type="text"
          inputMode={field.kind === 'number' ? 'decimal' : 'text'}
          autoComplete="off"
          spellCheck={field.kind !== 'number'}
          value={text}
          placeholder={field.placeholder}
          onChange={(e) => setAnswer(field.id, e.target.value)}
          style={{ ...style, fontSize: lineFont }}
          className={cn(overlayClass, 'px-1.5')}
        />
      );
  }
}

function MultiOverlay({ task, field, style }: { task: Task; field: Field; style: CSSProperties }) {
  const value = useAnswer(field.id);
  const selected = Array.isArray(value) ? value : [];
  const setAnswer = useAnswers((state) => state.setAnswer);
  const name = fieldName(task, field);
  return (
    <Popover.Root>
      <Popover.Trigger
        aria-label={`${name}. ${selected.length ? t('workspace.multiSelected', { values: selected.join(', ') }) : t('workspace.multiNone')}`}
        style={style}
        className={cn(overlayClass, 'cursor-pointer px-1.5 text-left font-medium')}
      >
        {selected.join(', ')}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={6}
          className="z-40 grid min-w-48 gap-1 rounded-md border border-border bg-surface p-2 text-text shadow-3"
        >
          {(field.options ?? []).map((option) => {
            const checked = selected.includes(option.value);
            return (
              <label
                key={option.value}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-sm px-2 hover:bg-surface-muted"
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
                {checked && <Check aria-hidden="true" className="ml-auto size-4 text-primary" />}
              </label>
            );
          })}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function EssayOverlay({
  task,
  field,
  style,
  text,
  continuation,
}: {
  task: Task;
  field: Field;
  style: CSSProperties;
  text: string;
  continuation?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${fieldName(task, field)}: ${t('workspace.writeOpen')}`}
        style={style}
        className={cn(
          overlayClass,
          'flex flex-col items-start overflow-hidden p-3 text-left leading-relaxed',
        )}
      >
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-fg">
          <PenLine aria-hidden="true" className="size-4" />
          {t('workspace.writeOpen')}
        </span>
        <span className="line-clamp-[20] whitespace-pre-wrap">
          {continuation ? t('workspace.essayContinued') : text || t('workspace.essayEmpty')}
        </span>
      </button>
      <EssayEditor task={task} field={field} open={open} onOpenChange={setOpen} />
    </>
  );
}
