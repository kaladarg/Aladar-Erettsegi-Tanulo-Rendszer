import { X } from 'lucide-react';
import { Dialog } from 'radix-ui';
import { useRef } from 'react';
import { RichText } from '@/content/RichText';
import type { Field, Task } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { t } from '@/i18n';
import { useAnswer, useAnswers } from '@/state/answerStore';
import { useWorkspace } from '../WorkspaceContext';
import { WordCount } from './WordCount';

/** Distraction-free writing: the source texts on one side, the editor and word count on the other. */
export function EssayEditor({
  task,
  field,
  open,
  onOpenChange,
}: {
  task: Task;
  field: Field;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { sources } = useWorkspace();
  const editor = useRef<HTMLTextAreaElement>(null);
  const value = useAnswer(field.id);
  const text = typeof value === 'string' ? value : '';
  const setAnswer = useAnswers((state) => state.setAnswer);
  const taskSources = (task.sourceRefs ?? [])
    .map((id) => sources.get(id))
    .filter((s) => s !== undefined);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Content
          aria-describedby={undefined}
          onOpenAutoFocus={(event) => {
            // Start in the editor rather than on the close button.
            event.preventDefault();
            editor.current?.focus();
          }}
          className="fixed inset-0 z-50 flex flex-col bg-bg outline-none"
        >
          <header className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-2">
            <Dialog.Title className="text-lg font-semibold">
              {t('workspace.writeTitle', { number: task.number })}
            </Dialog.Title>
            <div className="flex items-center gap-3">
              <WordCount text={text} limit={task.wordLimit} />
              <Dialog.Close asChild>
                <Button size="sm">
                  <X aria-hidden="true" />
                  {t('workspace.writeClose')}
                </Button>
              </Dialog.Close>
            </div>
          </header>
          <div className="grid min-h-0 flex-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <aside className="max-h-[40vh] overflow-y-auto border-b border-border p-4 md:max-h-none md:border-r md:border-b-0 md:p-6">
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-muted uppercase">
                {t('workspace.writeTask')}
              </h2>
              <RichText text={task.text} />
              {taskSources.map((source) => (
                <section key={source.id} className="mt-6">
                  <h2 className="mb-2 text-sm font-semibold tracking-wide text-muted uppercase">
                    {source.title ?? t('workspace.source')}
                  </h2>
                  {source.text && <RichText text={source.text} className="leading-relaxed" />}
                </section>
              ))}
            </aside>
            <div className="flex min-h-0 flex-col p-4 md:p-6">
              <label htmlFor={`editor-${field.id}`} className="sr-only">
                {field.label ?? t('workspace.answer')}
              </label>
              <textarea
                id={`editor-${field.id}`}
                ref={editor}
                spellCheck
                lang="hu"
                value={text}
                placeholder={t('workspace.writePlaceholder')}
                onChange={(event) => setAnswer(field.id, event.target.value)}
                className="min-h-0 flex-1 resize-none rounded-md border border-border bg-surface p-4 text-lg leading-relaxed outline-none focus:border-primary"
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
