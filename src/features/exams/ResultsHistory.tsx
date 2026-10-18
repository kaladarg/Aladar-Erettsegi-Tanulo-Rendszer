import { useLiveQuery } from 'dexie-react-hooks';
import { ChevronRight, History } from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardTitle } from '@/design/ui/Card';
import { formatDate, formatNumber, t } from '@/i18n';
import { submittedAttempts } from '@/storage/attempts';

/** Submitted attempts of an exam, newest first, linking to their results. */
export function ResultsHistory({ examId }: { examId: string }) {
  const attempts = useLiveQuery(() => submittedAttempts(examId), [examId]);
  if (!attempts?.length) return null;
  return (
    <Card aria-labelledby="history-title" className="mb-6">
      <CardTitle id="history-title" className="flex items-center gap-2">
        <History aria-hidden="true" className="size-5" />
        {t('results.historyTitle')}
      </CardTitle>
      <ul className="mt-4 grid gap-2">
        {attempts.map((attempt) => {
          const result = attempt.result;
          const percent =
            result && result.maxPoints > 0 ? (result.points / result.maxPoints) * 100 : 0;
          return (
            <li key={attempt.id}>
              <Link
                to={`/feladatsorok/${examId}/eredmeny/${attempt.id}`}
                className="flex min-h-12 items-center justify-between gap-3 rounded-md border border-border px-4 py-2 hover:bg-surface-muted"
              >
                <span>
                  <span className="block font-medium">
                    {t('results.historyItem', {
                      date: formatDate(attempt.submittedAt!, {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      }),
                      mode:
                        attempt.mode === 'exam' ? t('results.modeExam') : t('results.modePractice'),
                    })}
                  </span>
                  {result && (
                    <span className="text-sm text-muted tabular-nums">
                      {t('results.score', { points: result.points, max: result.maxPoints })} ·{' '}
                      {t('results.percent', {
                        percent: formatNumber(percent, { maximumFractionDigits: 0 }),
                      })}
                      {result.pendingPoints ? ` ${t('results.historyPending')}` : ''}
                    </span>
                  )}
                </span>
                <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-muted" />
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
