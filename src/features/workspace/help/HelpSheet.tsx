import { LifeBuoy, X } from 'lucide-react';
import { Dialog, Tabs } from 'radix-ui';
import { useId, type ReactNode } from 'react';
import { useAiKey } from '@/ai/keyStore';
import { Button } from '@/design/ui/Button';
import { t } from '@/i18n';
import { useWorkspace } from '../WorkspaceContext';
import { AiPanel } from './AiPanel';
import { HandoffPanel } from './HandoffPanel';
import { useHelp, type HelpTab } from './helpStore';
import { LookupPanel } from './LookupPanel';
import { SitesPanel } from './SitesPanel';
import { TaskHelp } from './TaskHelp';

/** Header button that opens the help panel (practice mode only). */
export function HelpButton() {
  const show = useHelp((state) => state.show);
  return (
    <Button variant="ghost" size="icon" aria-label={t('help.open')} onClick={() => show()}>
      <LifeBuoy aria-hidden="true" />
    </Button>
  );
}

function Tab({ value, children }: { value: HelpTab; children: ReactNode }) {
  return (
    <Tabs.Trigger
      value={value}
      className="min-h-10 flex-1 rounded-sm px-2 text-sm font-medium text-muted hover:text-text data-[state=active]:bg-surface data-[state=active]:text-text data-[state=active]:shadow-1"
    >
      {children}
    </Tabs.Trigger>
  );
}

/** Side panel with task help, word lookup, free learning sites and questions to an AI. */
export function HelpSheet() {
  const { exam } = useWorkspace();
  const { open, taskId, tab, query, setTab, setTask, close } = useHelp();
  const aiKey = useAiKey();
  const selectId = useId();
  const tasks = exam.parts.flatMap((part) => part.tasks);
  const task = tasks.find((x) => x.id === taskId) ?? tasks[0]!;

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && close()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 anim-overlay bg-black/40 backdrop-blur-[2px]" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg anim-sheet flex-col overflow-y-auto border-l border-border bg-surface shadow-3"
        >
          <div className="sticky top-0 z-10 grid gap-3 border-b border-border bg-surface p-4">
            <div className="flex items-center justify-between gap-3">
              <Dialog.Title className="flex items-center gap-2 text-xl font-semibold">
                <LifeBuoy aria-hidden="true" className="size-5 text-primary" />
                {t('help.title')}
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button variant="ghost" size="icon" aria-label={t('help.close')}>
                  <X aria-hidden="true" />
                </Button>
              </Dialog.Close>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor={selectId} className="text-sm font-medium">
                {t('help.taskSelect')}
              </label>
              <select
                id={selectId}
                value={task.id}
                onChange={(event) => setTask(event.target.value)}
                className="min-h-11 min-w-0 flex-1 rounded-md border border-border bg-surface px-3"
              >
                {tasks.map((x) => (
                  <option key={x.id} value={x.id}>
                    {t('workspace.taskHeading', { number: x.number })}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Tabs.Root
            value={tab}
            onValueChange={(value) => setTab(value as HelpTab)}
            className="grid gap-4 p-4"
          >
            <Tabs.List
              aria-label={t('help.tabsLabel')}
              className="flex rounded-md border border-border bg-surface-muted p-1"
            >
              <Tab value="task">{t('help.tabTask')}</Tab>
              <Tab value="lookup">{t('help.tabLookup')}</Tab>
              <Tab value="sites">{t('help.tabSites')}</Tab>
              <Tab value="ai">{t('help.tabAi')}</Tab>
            </Tabs.List>
            <Tabs.Content value="task">
              <TaskHelp key={task.id} task={task} />
            </Tabs.Content>
            <Tabs.Content value="lookup" forceMount className="data-[state=inactive]:hidden">
              <LookupPanel initialQuery={query} />
            </Tabs.Content>
            <Tabs.Content value="sites">
              <SitesPanel subject={exam.subject} />
            </Tabs.Content>
            <Tabs.Content value="ai" forceMount className="data-[state=inactive]:hidden">
              {aiKey ? (
                <div className="grid gap-6">
                  <AiPanel apiKey={aiKey} task={task} />
                  <details className="rounded-md border border-border p-4">
                    <summary className="cursor-pointer font-medium">
                      {t('help.handoffWithKey')}
                    </summary>
                    <div className="mt-3">
                      <HandoffPanel task={task} />
                    </div>
                  </details>
                </div>
              ) : (
                <section className="grid gap-3">
                  <h3 className="font-semibold">{t('help.handoffTitle')}</h3>
                  <HandoffPanel task={task} />
                </section>
              )}
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
