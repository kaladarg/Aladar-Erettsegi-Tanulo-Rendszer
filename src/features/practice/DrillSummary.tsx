import { Check, Minus, RotateCcw, SkipForward, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Exam } from '@/content/schema.types';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { Card, CardTitle } from '@/design/ui/Card';
import { outcomeOf, type Outcome } from '@/domain/practice/review';
import { findTask } from '@/domain/practice/topics';
import { formatNumber, t } from '@/i18n';
import type { DrillSessionRow } from '@/storage/db';
import { createDrill } from '@/storage/practice';
import { ResultCode } from '../teacher/ResultCode';

const ICON = {
  correct: <Check aria-hidden="true" />,
  partial: <Minus aria-hidden="true" />,
  wrong: <X aria-hidden="true" />,
  skipped: <SkipForward aria-hidden="true" />,
};
const TONE = {
  correct: 'success',
  partial: 'warning',
  wrong: 'danger',
  skipped: 'neutral',
} as const;

/** End of a practice round: what went well, and what comes back for review. */
export function DrillSummary({
  session,
  exams,
  onExit,
}: {
  session: DrillSessionRow;
  exams: Map<string, Exam>;
  onExit: () => void;
}) {
  const navigate = useNavigate();
  const outcomes = session.items.map((_, i) => outcomeOf(session.checked[i]));
  const count = (o: Outcome) => outcomes.filter((x) => x === o).length;
  const missed = count('partial') + count('wrong');

  const again = async () => {
    const id = await createDrill({
      kind: session.kind,
      subject: session.subject,
      topic: session.topic,
      title: session.title,
      assignment: session.assignment,
      items: session.items,
    });
    navigate(`/gyakorlas/kor/${id}`, { replace: true });
  };

  return (
    <>
      <Card aria-labelledby="drill-summary" className="grid gap-4">
        <CardTitle id="drill-summary">{t('practice.summaryTitle')}</CardTitle>
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {(['correct', 'partial', 'wrong', 'skipped'] as const).map((o) => (
            <div key={o} className="rounded-md bg-surface-muted p-3">
              <dt className="text-sm text-muted">{t(`practice.outcome.${o}`)}</dt>
              <dd className="text-2xl font-semibold tabular-nums">{formatNumber(count(o))}</dd>
            </div>
          ))}
        </dl>
        <p>
          {missed > 0
            ? t('practice.summaryReview', { count: missed })
            : t('practice.summaryAllGood')}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={onExit}>{t('practice.backToHub')}</Button>
          <Button variant="secondary" onClick={() => void again()}>
            <RotateCcw aria-hidden="true" />
            {t('practice.again')}
          </Button>
        </div>
      </Card>
      {session.kind === 'assignment' && <ResultCode session={session} exams={exams} />}
      <section aria-labelledby="drill-items" className="grid gap-2">
        <h2 id="drill-items" className="text-lg font-semibold">
          {t('practice.summaryTasks')}
        </h2>
        <ul className="grid gap-2">
          {session.items.map((ref, i) => {
            const found = findTask(exams, ref);
            const result = session.checked[i];
            const outcome = outcomes[i]!;
            return (
              <li
                key={`${ref.examId}|${ref.taskId}|${i}`}
                className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-surface p-3"
              >
                <span className="min-w-0">
                  <span className="font-medium">
                    {found ? t('workspace.taskHeading', { number: found.task.number }) : ref.taskId}
                  </span>
                  <span className="block text-sm text-muted">
                    {found?.exam.title ?? ref.examId}
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <Badge tone={TONE[outcome]}>
                    {ICON[outcome]}
                    {t(`practice.outcome.${outcome}`)}
                  </Badge>
                  {result && (
                    <span className="text-sm tabular-nums">
                      {t('results.taskScore', { points: result.points, max: result.maxPoints })}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
