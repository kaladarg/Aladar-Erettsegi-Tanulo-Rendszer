import { Check, ListOrdered, X } from 'lucide-react';
import { Dialog } from 'radix-ui';
import { useMemo, useState } from 'react';
import { partInfo } from '@/content/labels';
import type { Exam } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useAnswers } from '@/state/answerStore';
import { goToTask, taskEntries } from './taskNav';

/**
 * A thin strip under the workspace header: how many tasks have an answer,
 * and a list to jump to any task.
 */
export function TaskNavigator({
  exam,
  activePartIds,
}: {
  exam: Exam;
  activePartIds: Set<string> | null;
}) {
  const answers = useAnswers((s) => s.answers);
  const [open, setOpen] = useState(false);
  const groups = useMemo(
    () => taskEntries(exam, answers, activePartIds),
    [exam, answers, activePartIds],
  );
  const all = groups.flatMap((g) => g.entries);
  const done = all.filter((e) => e.done).length;
  const share = all.length ? done / all.length : 0;

  return (
    <div className="relative flex h-9 items-center gap-3 border-t border-border px-3 sm:px-4">
      <p className="flex-1 truncate text-sm text-muted" aria-live="polite">
        {t('workspace.progress', { done: formatNumber(done), total: formatNumber(all.length) })}
      </p>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button variant="ghost" size="sm" className="-mr-2 min-h-8">
            <ListOrdered aria-hidden="true" />
            {t('workspace.taskList')}
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 anim-overlay bg-black/50 backdrop-blur-[2px]" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-y-0 left-0 z-50 flex w-full max-w-sm anim-sheet flex-col overflow-y-auto border-r border-border bg-surface p-5 shadow-3"
          >
            <div className="mb-3 flex items-center justify-between">
              <Dialog.Title className="text-xl font-semibold">
                {t('workspace.taskList')}
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button variant="ghost" size="icon" aria-label={t('common.close')}>
                  <X aria-hidden="true" />
                </Button>
              </Dialog.Close>
            </div>
            <p className="mb-4 text-sm text-muted">
              {t('workspace.progress', {
                done: formatNumber(done),
                total: formatNumber(all.length),
              })}
            </p>
            {groups.map(({ part, entries }) => (
              <section key={part.id} className="mb-5">
                <h2 className="mb-2 text-sm font-semibold text-muted">{partInfo(part)}</h2>
                <ul className="grid grid-cols-4 gap-2 sm:grid-cols-5">
                  {entries.map((entry) => (
                    <li key={entry.firstTaskId}>
                      <button
                        type="button"
                        aria-label={t(
                          entry.done ? 'workspace.goToTaskDone' : 'workspace.goToTask',
                          { number: entry.number },
                        )}
                        onClick={() => {
                          setOpen(false);
                          // After the sheet has closed, so focus and scroll land on the task.
                          window.setTimeout(() => goToTask(entry.firstTaskId), 50);
                        }}
                        className={cn(
                          'relative flex min-h-11 w-full items-center justify-center rounded-md border text-sm font-semibold tabular-nums transition-colors',
                          entry.done
                            ? 'border-primary bg-primary-soft text-primary-soft-fg'
                            : 'border-border bg-surface hover:border-border-strong',
                        )}
                      >
                        {entry.number.replace(/\.$/, '')}
                        {entry.done && (
                          <Check
                            aria-hidden="true"
                            className="absolute top-0.5 right-0.5 size-3.5 text-primary"
                          />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-surface-muted">
        <div
          className="h-full bg-primary transition-[width] duration-(--motion-base)"
          style={{ width: `${share * 100}%` }}
        />
      </div>
    </div>
  );
}
