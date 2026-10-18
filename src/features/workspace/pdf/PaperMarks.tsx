import type { Choice, Field, Part, Rect, Task } from '@/content/schema.types';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useAnswer, useAnswers } from '@/state/answerStore';
import { choiceKey } from '@/storage/attempts';
import { ChoicePicker } from '../ChoicePicker';
import { fieldName, optionText } from '../WorkspaceContext';
import { rectStyle } from './overlayItems';

const markClass =
  'absolute cursor-pointer rounded-full border-2 border-transparent outline-none hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

/** "Circle the number" answers: each printed option can be circled on the paper. */
export function OptionMarks({ task, field }: { task: Task; field: Field }) {
  const value = useAnswer(field.id);
  const setAnswer = useAnswers((state) => state.setAnswer);
  const multi = field.kind === 'multi';
  const selected = multi
    ? Array.isArray(value)
      ? value
      : []
    : typeof value === 'string'
      ? [value]
      : [];
  const name = fieldName(task, field);

  const toggle = (option: string) => {
    if (!multi) return setAnswer(field.id, selected.includes(option) ? '' : option);
    setAnswer(
      field.id,
      selected.includes(option)
        ? selected.filter((v) => v !== option)
        : [...selected, option].sort(),
    );
  };

  return (
    <>
      {(field.options ?? []).map((option) => {
        const circled = selected.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={circled}
            aria-label={`${name}: ${optionText(option)}`}
            onClick={() => toggle(option.value)}
            style={rectStyle(option.pdfRect!)}
            className={cn(
              markClass,
              circled && 'border-[#0b3d91] bg-[#0b3d91]/5 hover:border-[#0b3d91]',
            )}
          />
        );
      })}
    </>
  );
}

/** The X cells where the paper asks students to mark their choice (e.g. 13. és 16.). */
export function ChoiceMark({
  part,
  choice,
  choiceIndex,
  unitIndex,
  rect,
}: {
  part: Part;
  choice: Choice;
  choiceIndex: number;
  unitIndex: number;
  rect: Rect;
}) {
  const key = choiceKey(part.id, choiceIndex);
  const value = useAnswer(key);
  const picked = Array.isArray(value) ? value : [];
  const setAnswer = useAnswers((state) => state.setAnswer);
  const unit = choice.taskIds[unitIndex]!;
  const label = choice.unitLabels?.[unitIndex] ?? unit;
  const marked = picked.includes(unit);
  return (
    <button
      type="button"
      aria-pressed={marked}
      aria-label={`${t('workspace.choiceTitle')}: ${label}`}
      onClick={() => {
        if (choice.pick === 1) return setAnswer(key, marked ? [] : [unit]);
        if (marked)
          return setAnswer(
            key,
            picked.filter((u) => u !== unit),
          );
        if (picked.length < choice.pick) setAnswer(key, [...picked, unit]);
      }}
      style={rectStyle(rect)}
      className="absolute flex cursor-pointer items-center justify-center rounded-sm border border-primary/40 bg-primary/5 text-2xl font-semibold text-[#0b3d91] outline-none hover:border-primary focus-visible:outline-2 focus-visible:outline-focus"
    >
      {marked ? 'X' : ''}
    </button>
  );
}

/** Shown over an answer area that alternative tasks share, until the student chooses. */
export function ChoiceGate({
  part,
  choice,
  choiceIndex,
  rect,
}: {
  part: Part;
  choice: Choice;
  choiceIndex: number;
  rect: Rect;
}) {
  return (
    <div
      style={rectStyle(rect)}
      className="absolute flex items-start justify-center overflow-auto p-2"
    >
      <div className="w-full max-w-md bg-surface text-text shadow-2">
        <ChoicePicker part={part} choice={choice} index={choiceIndex} />
      </div>
    </div>
  );
}
