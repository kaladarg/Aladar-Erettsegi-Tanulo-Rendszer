import { DEFAULT_SUBJECTS, findSubject } from '@/content/catalog';
import { DEFAULT_GRADE_BANDS } from '@/domain/scoring/exam';
import type { ProgressPoint } from '@/domain/stats/stats';
import { formatDate, formatNumber, t } from '@/i18n';

// A narrow drawing, so the labels stay readable when scaled down to a phone.
const WIDTH = 400;
const HEIGHT = 220;
const PAD = { top: 12, right: 24, bottom: 28, left: 44 };

const color = (subject: string) =>
  DEFAULT_SUBJECTS.some((s) => s.id === subject)
    ? `var(--c-subject-${subject})`
    : 'var(--c-primary)';

const percentText = (value: number) => formatNumber(Math.round(value));

/**
 * Results over time as a line per subject; submissions are spaced evenly so
 * a busy week stays readable. The same data is available as a table.
 */
export function ProgressChart({
  points,
  examTitle,
}: {
  points: ProgressPoint[];
  examTitle: (examId: string) => string;
}) {
  const innerW = WIDTH - PAD.left - PAD.right;
  const innerH = HEIGHT - PAD.top - PAD.bottom;
  const x = (index: number) =>
    PAD.left + (points.length === 1 ? innerW / 2 : (index / (points.length - 1)) * innerW);
  const y = (percent: number) => PAD.top + innerH - (Math.min(100, percent) / 100) * innerH;
  const subjects = [...new Set(points.map((p) => p.subject))];
  const summary = points
    .map((p) => `${formatDate(p.time, { dateStyle: 'short' })} ${percentText(p.percent)}%`)
    .join(', ');

  return (
    <div className="grid gap-3">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={t('stats.progressChart', { summary })}
        className="h-auto w-full"
      >
        {[0, 100].map((value) => (
          <g key={value}>
            <line
              x1={PAD.left}
              x2={PAD.left + innerW}
              y1={y(value)}
              y2={y(value)}
              stroke="var(--c-border)"
            />
            <text
              x={PAD.left - 6}
              y={y(value) + 4}
              textAnchor="end"
              fontSize="14"
              fill="var(--c-text-muted)"
            >
              {value}%
            </text>
          </g>
        ))}
        {DEFAULT_GRADE_BANDS.filter((band) => band.minPercent > 0).map((band) => (
          <g key={band.grade}>
            <line
              x1={PAD.left}
              x2={PAD.left + innerW}
              y1={y(band.minPercent)}
              y2={y(band.minPercent)}
              stroke="var(--c-border-strong)"
              strokeDasharray="4 4"
            />
            <text
              x={PAD.left + innerW + 6}
              y={y(band.minPercent) + 4}
              fontSize="14"
              fill="var(--c-text-muted)"
            >
              {band.grade}
            </text>
          </g>
        ))}
        {subjects.map((subject) => {
          const own = points
            .map((point, index) => ({ point, index }))
            .filter(({ point }) => point.subject === subject);
          return (
            <g key={subject} stroke={color(subject)} fill={color(subject)}>
              {own.length > 1 && (
                <polyline
                  fill="none"
                  strokeWidth="2.5"
                  points={own
                    .map(({ point, index }) => `${x(index)},${y(point.percent)}`)
                    .join(' ')}
                />
              )}
              {own.map(({ point, index }) => (
                <circle
                  key={point.attemptId}
                  cx={x(index)}
                  cy={y(point.percent)}
                  r="5"
                  fill={point.complete ? color(subject) : 'var(--c-surface)'}
                  strokeWidth="2"
                />
              ))}
            </g>
          );
        })}
        {points.length > 0 && (
          <>
            <text
              x={x(0)}
              y={HEIGHT - 6}
              fontSize="14"
              fill="var(--c-text-muted)"
              textAnchor="start"
            >
              {formatDate(points[0]!.time, { month: 'short', day: 'numeric' })}
            </text>
            {points.length > 1 && (
              <text
                x={x(points.length - 1)}
                y={HEIGHT - 6}
                fontSize="14"
                fill="var(--c-text-muted)"
                textAnchor="end"
              >
                {formatDate(points[points.length - 1]!.time, { month: 'short', day: 'numeric' })}
              </text>
            )}
          </>
        )}
      </svg>
      {subjects.length > 1 && (
        <ul className="flex flex-wrap gap-4 text-sm" aria-hidden="true">
          {subjects.map((subject) => (
            <li key={subject} className="flex items-center gap-2">
              <span className="size-3 rounded-full" style={{ background: color(subject) }} />
              {findSubject(subject)?.name ?? subject}
            </li>
          ))}
        </ul>
      )}
      <details>
        <summary className="cursor-pointer text-sm font-medium">{t('stats.progressTable')}</summary>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-3 font-semibold">{t('stats.tableDate')}</th>
                <th className="py-2 pr-3 font-semibold">{t('stats.tableExam')}</th>
                <th className="py-2 pr-3 font-semibold">{t('stats.tableMode')}</th>
                <th className="py-2 font-semibold">{t('stats.tableResult')}</th>
              </tr>
            </thead>
            <tbody>
              {[...points].reverse().map((point) => (
                <tr key={point.attemptId} className="border-b border-border">
                  <td className="py-2 pr-3 whitespace-nowrap">
                    {formatDate(point.time, { dateStyle: 'medium' })}
                  </td>
                  <td className="py-2 pr-3">{examTitle(point.examId)}</td>
                  <td className="py-2 pr-3">
                    {point.mode === 'exam' ? t('results.modeExam') : t('results.modePractice')}
                  </td>
                  <td className="py-2 tabular-nums">
                    {percentText(point.percent)}% {!point.complete && t('stats.partial')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
