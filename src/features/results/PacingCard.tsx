import { Hourglass, Lightbulb } from 'lucide-react';
import type { Exam } from '@/content/schema.types';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { MIN_TRACKED, pacing } from '@/domain/pacing';
import { formatNumber, t } from '@/i18n';

const minutes = (seconds: number) =>
  t('results.pacing.minutes', { minutes: formatNumber(Math.max(1, Math.round(seconds / 60))) });

/** After a timed exam: which tasks took far more time than their points are worth. */
export function PacingCard({
  exam,
  taskSeconds,
}: {
  exam: Exam;
  taskSeconds: Record<string, number>;
}) {
  const { rows, tracked, slow } = pacing(exam, taskSeconds);
  if (tracked < MIN_TRACKED) return null;
  return (
    <Card aria-labelledby="pacing-title" className="mt-6">
      <CardTitle id="pacing-title" className="flex items-center gap-2">
        <Hourglass aria-hidden="true" className="size-5 text-primary" />
        {t('results.pacing.title')}
      </CardTitle>
      <CardDescription>{t('results.pacing.body')}</CardDescription>
      {slow.length > 0 ? (
        <>
          <p className="mt-4 font-medium">{t('results.pacing.slowIntro')}</p>
          <ul className="mt-2 grid gap-1.5">
            {slow.map((row) => (
              <li key={row.taskId} className="flex gap-2">
                <span aria-hidden="true" className="text-muted">
                  •
                </span>
                {t('results.pacing.slowItem', {
                  number: row.number,
                  spent: formatNumber(Math.round(row.seconds / 60)),
                  budget: formatNumber(Math.max(1, Math.round(row.budget / 60))),
                })}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-start gap-2 rounded-md bg-surface-muted p-3 text-sm">
            <Lightbulb aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
            {t('results.pacing.tip')}
          </p>
        </>
      ) : (
        <p className="mt-4">{t('results.pacing.good')}</p>
      )}
      <details className="mt-4">
        <summary className="cursor-pointer font-medium">{t('results.pacing.allTasks')}</summary>
        <table className="mt-3 w-full text-left text-sm">
          <thead className="text-muted">
            <tr>
              <th scope="col" className="py-1 pr-3 font-medium">
                {t('results.pacing.task')}
              </th>
              <th scope="col" className="py-1 pr-3 font-medium">
                {t('results.pacing.spent')}
              </th>
              <th scope="col" className="py-1 font-medium">
                {t('results.pacing.budget')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.taskId} className="border-t border-border">
                <th scope="row" className="py-1.5 pr-3 font-medium">
                  {row.number}
                </th>
                <td className="py-1.5 pr-3 tabular-nums">{minutes(row.seconds)}</td>
                <td className="py-1.5 text-muted tabular-nums">{minutes(row.budget)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </Card>
  );
}
