import { BookOpenCheck, Check, Minus, RotateCcw, SkipForward, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Exam } from '@/content/schema.types';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { Card, CardTitle } from '@/design/ui/Card';
import { Celebration } from '@/design/ui/Celebration';
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
  // A fully worked example is read, not answered: it is not counted.
  // Tasks of a worked session that were only studied, never checked.
  const example = (i: number) => session.kind === 'worked' && session.checked[i] === undefined;
  // Only tasks solved without help go to the mistakes review.
  const reviewed = (i: number) => !example(i);
  const outcomes = session.items.map((_, i) =>
    example(i) ? 'example' : outcomeOf(session.checked[i]),
  );
  const count = (o: Outcome | 'example') => outcomes.filter((x) => x === o).length;
  const missed = outcomes.filter(
    (o, i) => reviewed(i) && (o === 'partial' || o === 'wrong'),
  ).length;
  // A round with at least 80% right answers (and something answered) earns confetti.
  const answered = outcomes.length - count('example');
  const great = count('correct') > 0 && count('correct') >= answered * 0.8;

  const again = async () => {
    // A worked session starts over from its first example.
    const restart =
      session.kind === 'worked'
        ? { items: session.items.slice(0, 1), hidden: session.hidden?.slice(0, 1) }
        : { items: session.items, hidden: session.hidden };
    const id = await createDrill({
      kind: session.kind,
      subject: session.subject,
      subjects: session.subjects,
      hidden: restart.hidden,
      pools: session.pools,
      topic: session.topic,
      title: session.title,
      assignment: session.assignment,
      items: restart.items,
    });
    navigate(`/gyakorlas/kor/${id}`, { replace: true });
  };

  return (
    <>
      {great && <Celebration />}
      <Card aria-labelledby="drill-summary" className="grid gap-4">
        <CardTitle id="drill-summary">
          {session.kind === 'daily' ? t('practice.daily.doneTitle') : t('practice.summaryTitle')}
        </CardTitle>
        <dl className="grid stagger grid-cols-2 gap-3 sm:grid-cols-4">
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
          <Button onClick={onExit}>
            {session.kind === 'daily' ? t('practice.daily.home') : t('practice.backToHub')}
          </Button>
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
                  {outcome === 'example' ? (
                    <Badge tone="info">
                      <BookOpenCheck aria-hidden="true" />
                      {t('practice.worked.fullBadge')}
                    </Badge>
                  ) : (
                    <Badge tone={TONE[outcome]}>
                      {ICON[outcome]}
                      {t(`practice.outcome.${outcome}`)}
                    </Badge>
                  )}
                  {result && outcome !== 'example' && (
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
