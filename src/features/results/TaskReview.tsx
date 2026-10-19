import { Check, CircleDashed, LifeBuoy, Mail, Minus, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { RichText } from '@/content/RichText';
import type { Criterion, Exam, Field } from '@/content/schema.types';
import { reportMistakeUrl } from '@/content/report';
import { Badge } from '@/design/ui/Badge';
import type { TaskResult, TaskStatus } from '@/domain/scoring/exam';
import { expectedAnswer } from '@/domain/scoring/rules';
import { t } from '@/i18n';
import { parseInk, taskInkKey } from '@/domain/ink/ink';
import { HELP_REVEALED, helpKey, type Answers } from '@/storage/attempts';
import { InkView } from '../workspace/ink/InkView';
import { AiEssayFeedback } from './AiEssayFeedback';
import { EssayHandoff } from './EssayHandoff';
import { AnswerView } from './AnswerView';
import { CriterionReview, StepReview } from './ReviewControls';

const STATUS: Record<
  TaskStatus,
  { label: string; tone: 'success' | 'warning' | 'danger' | 'neutral' | 'info'; icon: ReactNode }
> = {
  correct: { label: 'results.statusCorrect', tone: 'success', icon: <Check aria-hidden="true" /> },
  partial: { label: 'results.statusPartial', tone: 'warning', icon: <Minus aria-hidden="true" /> },
  wrong: { label: 'results.statusWrong', tone: 'danger', icon: <X aria-hidden="true" /> },
  empty: { label: 'results.statusEmpty', tone: 'neutral', icon: <Minus aria-hidden="true" /> },
  pending: {
    label: 'results.statusPending',
    tone: 'info',
    icon: <CircleDashed aria-hidden="true" />,
  },
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  const { label, tone, icon } = STATUS[status];
  return (
    <Badge tone={tone}>
      {icon}
      {t(label as 'results.statusCorrect')}
    </Badge>
  );
}

/** A task's answers next to the accepted ones, with its review controls. */
export function TaskReview({
  result,
  answers,
  attemptId,
  examId,
  reportEmail,
  exam,
  headingLevel = 3,
}: {
  result: TaskResult;
  answers: Answers;
  attemptId: string;
  examId: string;
  reportEmail?: string;
  /** Enables the AI essay suggestion (with the student's key). */
  exam?: Exam;
  headingLevel?: 2 | 3 | 4;
}) {
  const { task } = result;
  const helpUsed = Number(answers[helpKey(task.id)] ?? 0) >= HELP_REVEALED;
  const fields = new Map<string, Field>(task.fields.map((f) => [f.id, f]));
  const judged: Record<string, boolean> = Object.assign({}, ...result.rules.map((r) => r.fields));
  const criteria = new Map<string, Criterion>((task.scoring.criteria ?? []).map((c) => [c.id, c]));
  const target = { attemptId, taskId: task.id };
  const Heading = `h${headingLevel}` as 'h2' | 'h3' | 'h4';
  const Sub = `h${headingLevel + 1}` as 'h3' | 'h4' | 'h5';
  const lost = result.points < result.maxPoints && result.status !== 'pending';
  const drawing = parseInk(answers[taskInkKey(task.id)]);

  return (
    <article
      aria-labelledby={`result-${task.id}`}
      className="grid gap-4 rounded-lg border border-border bg-surface p-5 shadow-1"
    >
      <header className="flex flex-wrap items-center justify-between gap-2">
        <Heading id={`result-${task.id}`} className="text-lg font-bold">
          {t('workspace.taskHeading', { number: task.number })}
        </Heading>
        <div className="flex items-center gap-2">
          {helpUsed && (
            <Badge tone="info" title={t('help.usedNote')}>
              <LifeBuoy aria-hidden="true" />
              {t('help.usedBadge')}
            </Badge>
          )}
          <StatusBadge status={result.status} />
          <span className="text-sm font-medium tabular-nums">
            {t('results.taskScore', { points: result.points, max: result.maxPoints })}
          </span>
        </div>
      </header>
      {!result.counted && <p className="text-sm text-muted">{t('results.notCounted')}</p>}

      <details className="text-sm">
        <summary className="cursor-pointer font-medium text-primary">
          {t('workspace.writeTask')}
        </summary>
        <RichText text={task.text} className="mt-2" />
      </details>

      {task.fields.length > 0 && (
        <section className="grid gap-3">
          <Sub className="text-sm font-semibold tracking-wide text-muted uppercase">
            {t('results.yourAnswer')}
          </Sub>
          {task.fields.map((field) => (
            <AnswerView
              key={field.id}
              field={field}
              value={answers[field.id]}
              correct={judged[field.id]}
            />
          ))}
        </section>
      )}

      {drawing.length > 0 && (
        <section className="grid gap-2">
          <Sub className="text-sm font-semibold tracking-wide text-muted uppercase">
            {t('workspace.ink.yourDrawing')}
          </Sub>
          <InkView
            strokes={drawing}
            className="aspect-[5/3] w-full max-w-xl rounded-md border border-border bg-white"
          />
        </section>
      )}

      {(lost || result.status === 'pending') &&
        result.rules.some((r) => r.points < r.maxPoints) && (
          <section className="grid gap-1 rounded-md bg-success-soft/50 p-3">
            <Sub className="text-sm font-semibold">{t('results.expected')}</Sub>
            <ul className="grid gap-1">
              {task.scoring.rules
                ?.filter(
                  (rule) => result.rules.find((r) => r.ruleId === rule.id)!.points < rule.points,
                )
                .map((rule) => (
                  <li key={rule.id}>{expectedAnswer(rule, fields)}</li>
                ))}
            </ul>
          </section>
        )}

      {result.items.some((i) => i.kind === 'step') && (
        <ul className="grid gap-2">
          {result.items
            .filter((i) => i.kind === 'step')
            .map((item) => (
              <StepReview key={item.id} target={target} item={item} />
            ))}
        </ul>
      )}
      {exam && criteria.size > 0 && (
        <>
          <AiEssayFeedback exam={exam} task={task} answers={answers} attemptId={attemptId} />
          <EssayHandoff exam={exam} task={task} answers={answers} />
        </>
      )}
      {result.items.some((i) => i.kind === 'criterion') && (
        <ul className="grid gap-3">
          {result.items
            .filter((i) => i.kind === 'criterion')
            .map((item) => (
              <CriterionReview
                key={item.id}
                target={target}
                criterion={criteria.get(item.id)!}
                points={item.points}
              />
            ))}
        </ul>
      )}

      {task.explanation && (lost || result.status === 'pending' || result.items.length > 0) && (
        <section className="grid gap-1">
          <Sub className="text-sm font-semibold">{t('results.explanation')}</Sub>
          <RichText text={task.explanation} className="text-sm" />
          {task.keyPage && (
            <p className="text-xs text-muted">{t('results.keyPage', { page: task.keyPage })}</p>
          )}
        </section>
      )}

      <a
        href={reportMistakeUrl(reportEmail, examId, task)}
        className="inline-flex items-center gap-1.5 justify-self-start text-sm text-muted underline underline-offset-4 hover:text-text"
      >
        <Mail aria-hidden="true" className="size-4" />
        {t('results.reportTask')}
      </a>
    </article>
  );
}
