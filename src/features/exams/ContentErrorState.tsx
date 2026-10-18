import { CloudOff, FileWarning, RefreshCw } from 'lucide-react';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import type { ContentError } from '@/content/loader';
import { t } from '@/i18n';

export function ContentErrorState({
  error,
  title,
  onRetry,
}: {
  error: ContentError;
  title: string;
  onRetry: () => void;
}) {
  const invalid = error.code === 'invalid';
  return (
    <EmptyState
      tone="danger"
      icon={invalid ? <FileWarning /> : <CloudOff />}
      title={title}
      description={invalid ? t('exams.invalidBody') : t('exams.offlineBody')}
      action={
        <Button onClick={onRetry}>
          <RefreshCw aria-hidden="true" />
          {t('common.retry')}
        </Button>
      }
    />
  );
}
