import { CircleCheck, CircleDot } from 'lucide-react';
import { Badge } from '@/design/ui/Badge';
import { formatNumber, t } from '@/i18n';
import type { ExamProgress } from '@/storage/progress';

/** Best result, how far an unfinished attempt got, or that the paper is still untouched. */
export function ProgressBadge({
  progress,
  tasks,
  showUntouched = false,
}: {
  progress: ExamProgress | undefined;
  /** Tasks answered and in total in the unfinished attempt, once the paper is loaded. */
  tasks?: { done: number; total: number };
  showUntouched?: boolean;
}) {
  const open = progress?.inProgress ? (
    <Badge tone="info">
      <CircleDot aria-hidden="true" />
      {tasks ? t('exams.inProgressCount', tasks) : t('exams.inProgressBadge')}
    </Badge>
  ) : null;
  if (progress?.best !== undefined) {
    return (
      <>
        <Badge tone="success">
          <CircleCheck aria-hidden="true" />
          {t('exams.doneBadge', { percent: formatNumber(progress.best, { style: 'percent' }) })}
        </Badge>
        {open}
      </>
    );
  }
  if (open) return open;
  return showUntouched ? <span className="text-sm text-muted">{t('exams.notStarted')}</span> : null;
}
