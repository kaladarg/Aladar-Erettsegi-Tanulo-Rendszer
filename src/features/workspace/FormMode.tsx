import { RichText } from '@/content/RichText';
import type { Part, SourceMaterial, Task } from '@/content/schema.types';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { ChoicePicker } from './ChoicePicker';
import { useUnchosenTasks } from './useUnchosenTasks';
import { FormField } from './fields/FormField';
import { useWorkspace } from './WorkspaceContext';

/** All tasks as a simple, accessible list. Shares answers with PDF mode. */
export function FormMode() {
  const { exam } = useWorkspace();
  return (
    <div className="mx-auto grid w-full max-w-3xl gap-10 px-4 py-6 sm:px-6">
      {exam.parts.map((part) => (
        <FormPart key={part.id} part={part} />
      ))}
    </div>
  );
}

function FormPart({ part }: { part: Part }) {
  const { sources } = useWorkspace();
  const unchosen = useUnchosenTasks(part);
  const shown = new Set<string>();

  return (
    <section aria-labelledby={`form-part-${part.id}`} className="grid gap-6">
      <header>
        <h2 id={`form-part-${part.id}`} className="text-2xl font-bold">
          {part.title}
        </h2>
        <p className="text-muted">
          {t('exam.partMeta', {
            minutes: part.timeLimitMinutes,
            points: part.maxPoints,
            count: part.tasks.length,
          })}
        </p>
        {part.instructions && <p className="mt-2">{part.instructions}</p>}
      </header>
      {part.choices?.map((choice, index) => (
        <ChoicePicker key={index} part={part} choice={choice} index={index} />
      ))}
      {part.tasks.map((task) => {
        // Show each source once, before the first task that refers to it.
        const newSources = (task.sourceRefs ?? [])
          .filter((id) => !shown.has(id))
          .map((id) => sources.get(id));
        newSources.forEach((source) => source && shown.add(source.id));
        return (
          <div key={task.id} className="grid gap-4">
            {newSources.map((source) => source && <SourceCard key={source.id} source={source} />)}
            <TaskCard task={task} dimmed={unchosen.has(task.id)} />
          </div>
        );
      })}
    </section>
  );
}

function SourceCard({ source }: { source: SourceMaterial }) {
  return (
    <aside
      aria-label={`${t('workspace.source')}: ${source.title ?? source.id}`}
      className="rounded-lg border border-border bg-surface-muted p-5"
    >
      <p className="mb-2 text-sm font-semibold tracking-wide text-muted uppercase">
        {t('workspace.source')}
      </p>
      {source.title && <h3 className="mb-2 font-semibold">{source.title}</h3>}
      {source.text && <RichText text={source.text} className="leading-relaxed" />}
      {source.credit && <p className="mt-3 text-xs text-muted">{source.credit}</p>}
    </aside>
  );
}

function TaskCard({ task, dimmed }: { task: Task; dimmed: boolean }) {
  return (
    <article
      aria-labelledby={`task-${task.id}`}
      className={cn(
        'rounded-lg border border-border bg-surface p-5 shadow-1 sm:p-6',
        dimmed && 'opacity-60',
      )}
    >
      <header className="mb-3 flex items-baseline justify-between gap-3">
        <h3 id={`task-${task.id}`} className="text-lg font-bold">
          {t('workspace.taskHeading', { number: task.number })}
        </h3>
        <span className="shrink-0 text-sm font-medium text-muted">
          {t('workspace.taskPoints', { points: task.maxPoints })}
        </span>
      </header>
      {dimmed && <p className="mb-3 text-sm font-medium">{t('workspace.notChosen')}</p>}
      <RichText text={task.text} />
      {task.fields.length > 0 && (
        <div className="mt-5 grid gap-4 border-t border-border pt-5">
          {task.fields.map((field) => (
            <FormField key={field.id} task={task} field={field} />
          ))}
        </div>
      )}
    </article>
  );
}
