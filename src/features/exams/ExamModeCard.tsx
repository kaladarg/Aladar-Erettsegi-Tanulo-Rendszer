import { useLiveQuery } from 'dexie-react-hooks';
import { Timer } from 'lucide-react';
import { Link } from 'react-router';
import { examMinutes } from '@/content/checks';
import type { Exam } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { examSegments, formatClock } from '@/domain/examTiming';
import { t } from '@/i18n';
import { findOpenAttempt } from '@/storage/attempts';
import { AbandonExamButton } from './AbandonExam';

/** Start or continue a timed exam simulation. */
export function ExamModeCard({ exam }: { exam: Exam }) {
  const open = useLiveQuery(
    async () => (await findOpenAttempt(exam.id, 'exam')) ?? null,
    [exam.id],
  );
  const segments = examSegments(exam);
  const current = open ? segments[Math.min(open.segment ?? 0, segments.length - 1)] : undefined;
  const remaining =
    open && current ? current.minutes * 60 - (open.partSeconds[current.id] ?? 0) : null;
  const parts =
    segments.length > 1
      ? t('exam.examBodyParts', {
          parts: segments
            .map(
              (s) =>
                `${exam.parts.find((p) => p.id === s.partIds[0])?.title} (${t('exam.minutes', { minutes: s.minutes })})`,
            )
            .join(', '),
        })
      : '';

  return (
    <section
      aria-labelledby="exam-mode-title"
      className="mb-6 rounded-lg border border-border bg-surface p-5 shadow-1 sm:p-6"
    >
      <h2 id="exam-mode-title" className="flex items-center gap-2 text-xl font-semibold">
        <Timer aria-hidden="true" className="size-5 shrink-0" />
        <span className="min-w-0 wrap-break-word hyphens-auto">{t('exam.examTitle')}</span>
      </h2>
      <p className="mt-1 text-muted">
        {t('exam.examBody', { minutes: examMinutes(exam) })} {parts}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {open !== undefined && (
          <Button asChild variant={open ? 'primary' : 'secondary'}>
            <Link to={`/feladatsorok/${exam.id}/vizsga`}>
              <Timer aria-hidden="true" />
              {open ? t('exam.examContinue') : t('exam.examStart')}
            </Link>
          </Button>
        )}
        {open && <AbandonExamButton attemptId={open.id} />}
        {remaining !== null && (
          <p className="text-sm text-muted tabular-nums">
            {t('exam.examRemaining', { time: formatClock(remaining) })}
          </p>
        )}
      </div>
    </section>
  );
}
