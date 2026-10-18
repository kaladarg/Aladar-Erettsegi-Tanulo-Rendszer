import { Eye, Lightbulb, ListChecks, Target } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { RichText } from '@/content/RichText';
import type { Field, Task } from '@/content/schema.types';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { instructionsIn } from '@/domain/help/instructions';
import { expectedAnswer } from '@/domain/scoring/rules';
import { t } from '@/i18n';
import { useAnswer, useAnswers } from '@/state/answerStore';
import { helpKey } from '@/storage/attempts';

/** Help levels: 2 hints, 3 marking-scheme steps, 4 solution. Level 1 (the task explanation) is free. */
type Level = 2 | 3 | 4;

function useHelpLevel(taskId: string): [number, (level: Level) => void] {
  const raw = useAnswer(helpKey(taskId));
  const level = Number(typeof raw === 'string' ? raw : 0) || 0;
  const raise = (next: Level) => {
    if (next > level) useAnswers.getState().setAnswer(helpKey(taskId), String(next));
  };
  return [level, raise];
}

function answerLine(field: Field): string {
  const label = field.label ?? t('workspace.answer');
  if (field.kind === 'essay') return t('help.answerEssay', { label });
  if (field.kind === 'work') return t('help.answerWork', { label });
  if (field.kind === 'multi') return t('help.answerMulti', { label });
  if (field.kind === 'choice') return t('help.answerChoice', { label });
  if (field.unit) return t('help.answerUnit', { label, unit: field.unit });
  return t('help.answerItem', { label });
}

function Section({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-2">
      <h3 className="flex items-center gap-2 font-semibold [&_svg]:size-4 [&_svg]:text-primary">
        {icon}
        {title}
      </h3>
      {children}
    </section>
  );
}

/** "Mit kér a feladat?" plus hints, marking-scheme steps and the solution, each one step further. */
export function TaskHelp({ task }: { task: Task }) {
  const [level, raise] = useHelpLevel(task.id);
  const [confirm, setConfirm] = useState<Level | null>(null);
  const instructions = instructionsIn(task.text);
  const { steps = [], criteria = [], rules = [] } = task.scoring;
  const fields = new Map(task.fields.map((f) => [f.id, f]));
  const hints = task.hints ?? [];

  return (
    <div className="grid gap-6">
      <Section icon={<Target aria-hidden="true" />} title={t('help.whatTitle')}>
        <p>
          <Badge tone="primary">{t('help.typeLabel', { type: t(`taskType.${task.type}`) })}</Badge>
        </p>
        <p>{t(`help.typeGuide.${task.type}`)}</p>
        <h4 className="mt-2 text-sm font-semibold">{t('help.instructionsTitle')}</h4>
        {instructions.length > 0 ? (
          <dl className="grid gap-2">
            {instructions.map((id) => (
              <div key={id} className="rounded-md bg-surface-muted p-3">
                <dt className="font-semibold">„{t(`help.instructions.${id}.label`)}”</dt>
                <dd className="text-sm">{t(`help.instructions.${id}.meaning`)}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-sm text-muted">{t('help.noInstructions')}</p>
        )}
        {task.fields.length > 0 && (
          <>
            <h4 className="mt-2 text-sm font-semibold">{t('help.answersTitle')}</h4>
            <ul className="list-disc pl-5 text-sm">
              {task.fields.map((field) => (
                <li key={field.id}>{answerLine(field)}</li>
              ))}
            </ul>
          </>
        )}
        <h4 className="mt-2 text-sm font-semibold">{t('help.pointsTitle')}</h4>
        <p className="text-sm">
          {t('help.pointsBody', { points: task.maxPoints })}{' '}
          {steps.length > 1 && t('help.pointsSteps', { count: steps.length })}{' '}
          {criteria.length > 0 &&
            t('help.pointsCriteria', { criteria: criteria.map((c) => c.label).join(', ') })}
        </p>
        {task.wordLimit && (
          <p className="text-sm">
            {t('help.wordLimit', {
              range: [task.wordLimit.min, task.wordLimit.max].filter(Boolean).join('–'),
            })}
          </p>
        )}
        {task.topics && task.topics.length > 0 && (
          <p className="flex flex-wrap items-center gap-1 text-sm">
            <span className="font-semibold">{t('help.topicsTitle')}:</span>
            {task.topics.map((topic) => (
              <Badge key={topic}>{topic}</Badge>
            ))}
          </p>
        )}
      </Section>

      <Section icon={<Lightbulb aria-hidden="true" />} title={t('help.hintsTitle')}>
        {hints.length === 0 ? (
          <p className="text-sm text-muted">{t('help.hintsNone')}</p>
        ) : level >= 2 ? (
          <ul className="grid gap-2">
            {hints.map((hint, index) => (
              <li key={index} className="rounded-md bg-surface-muted p-3 text-sm">
                <RichText text={hint} />
              </li>
            ))}
          </ul>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            className="justify-self-start"
            onClick={() => raise(2)}
          >
            {t('help.hintsShow')}
          </Button>
        )}
      </Section>

      {(steps.length > 0 || criteria.length > 0) && (
        <Section icon={<ListChecks aria-hidden="true" />} title={t('help.stepsTitle')}>
          {level >= 3 ? (
            <ul className="grid gap-2 text-sm">
              {steps.map((step) => (
                <li
                  key={step.id}
                  className="flex justify-between gap-3 rounded-md bg-surface-muted p-3"
                >
                  <span>{step.description}</span>
                  <span className="shrink-0 font-medium tabular-nums">
                    {t('results.pointsValue', { points: step.points })}
                  </span>
                </li>
              ))}
              {criteria.map((criterion) => (
                <li key={criterion.id} className="rounded-md bg-surface-muted p-3">
                  <p className="flex justify-between gap-3 font-medium">
                    <span>{criterion.label}</span>
                    <span className="tabular-nums">
                      {t('results.pointsValue', { points: criterion.maxPoints })}
                    </span>
                  </p>
                  {criterion.description && <p className="mt-1">{criterion.description}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p className="text-sm text-muted">{t('help.stepsBody')}</p>
              <Button
                variant="secondary"
                size="sm"
                className="justify-self-start"
                onClick={() => setConfirm(3)}
              >
                {t('help.stepsShow')}
              </Button>
            </>
          )}
        </Section>
      )}

      <Section icon={<Eye aria-hidden="true" />} title={t('help.solutionTitle')}>
        {level >= 4 ? (
          rules.length === 0 && !task.explanation ? (
            <p className="text-sm text-muted">{t('help.noSolution')}</p>
          ) : (
            <div className="grid gap-2 text-sm">
              {rules.length > 0 && (
                <ul className="grid gap-1 rounded-md bg-success-soft/50 p-3">
                  {rules.map((rule) => (
                    <li key={rule.id}>{expectedAnswer(rule, fields)}</li>
                  ))}
                </ul>
              )}
              {task.explanation && <RichText text={task.explanation} />}
              {task.keyPage && (
                <p className="text-xs text-muted">{t('results.keyPage', { page: task.keyPage })}</p>
              )}
            </div>
          )
        ) : (
          <>
            <p className="text-sm text-muted">{t('help.solutionBody')}</p>
            <Button
              variant="secondary"
              size="sm"
              className="justify-self-start"
              onClick={() => setConfirm(4)}
            >
              {t('help.solutionShow')}
            </Button>
          </>
        )}
      </Section>

      <ConfirmDialog
        open={confirm !== null}
        onOpenChange={(open) => !open && setConfirm(null)}
        title={t('help.revealConfirmTitle')}
        description={t('help.revealConfirmBody')}
        confirmLabel={t('help.revealConfirm')}
        onConfirm={() => confirm && raise(confirm)}
      />
    </div>
  );
}
