import { CircleCheck, CircleDot } from 'lucide-react';
import { Badge } from '@/design/ui/Badge';
import { formatNumber, t } from '@/i18n';
import type { ExamProgress } from '@/storage/progress';

export function ProgressBadge({ progress }: { progress: ExamProgress | undefined }) {
  if (!progress) return null;
  if (progress.best !== undefined) {
    return (
      <Badge tone="success">
        <CircleCheck aria-hidden="true" />
        {t('exams.doneBadge', { percent: formatNumber(progress.best, { style: 'percent' }) })}
      </Badge>
    );
  }
  if (progress.inProgress) {
    return (
      <Badge tone="info">
        <CircleDot aria-hidden="true" />
        {t('exams.inProgressBadge')}
      </Badge>
    );
  }
  return null;
}
