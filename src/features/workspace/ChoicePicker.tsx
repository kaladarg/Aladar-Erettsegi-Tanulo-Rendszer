import type { Choice, Part } from '@/content/schema.types';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useAnswer, useAnswers } from '@/state/answerStore';
import { choiceKey } from '@/storage/attempts';

/** Lets the student mark which tasks of a choice group they solve (only those are scored). */
export function ChoicePicker({
  part,
  choice,
  index,
}: {
  part: Part;
  choice: Choice;
  index: number;
}) {
  const key = choiceKey(part.id, index);
  const value = useAnswer(key);
  const selected = Array.isArray(value) ? value : [];
  const setAnswer = useAnswers((state) => state.setAnswer);
  const single = choice.pick === 1;

  const toggle = (taskId: string) => {
    if (single) return setAnswer(key, [taskId]);
    if (selected.includes(taskId))
      return setAnswer(
        key,
        selected.filter((id) => id !== taskId),
      );
    if (selected.length < choice.pick) setAnswer(key, [...selected, taskId]);
  };

  return (
    <fieldset className="rounded-lg border border-primary/40 bg-primary-soft/30 p-4">
      <legend className="px-1 font-semibold">{t('workspace.choiceTitle')}</legend>
      <p className="mb-3">{choice.label ?? t('workspace.choiceQuestion', { pick: choice.pick })}</p>
      <div className="flex flex-wrap gap-2">
        {choice.taskIds.map((taskId) => {
          const task = part.tasks.find((candidate) => candidate.id === taskId);
          const checked = selected.includes(taskId);
          return (
            <label
              key={taskId}
              className={cn(
                'flex min-h-11 cursor-pointer items-center gap-2 rounded-md border bg-surface px-4 font-medium has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-focus',
                checked ? 'border-primary' : 'border-border',
              )}
            >
              <input
                type={single ? 'radio' : 'checkbox'}
                name={key}
                checked={checked}
                disabled={!single && !checked && selected.length >= choice.pick}
                onChange={() => toggle(taskId)}
                className="size-4 accent-[var(--c-primary)]"
              />
              {t('workspace.choiceTask', { number: task?.number ?? taskId })}
            </label>
          );
        })}
      </div>
      <p className="mt-2 text-sm text-muted">{t('workspace.choiceHint')}</p>
    </fieldset>
  );
}
