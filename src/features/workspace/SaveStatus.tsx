import { CloudAlert, CloudCheck, LoaderCircle } from 'lucide-react';
import { t } from '@/i18n';
import { useAnswers } from '@/state/answerStore';

export function SaveStatus() {
  const status = useAnswers((state) => state.status);
  const label =
    status === 'saving'
      ? t('workspace.saving')
      : status === 'error'
        ? t('workspace.saveError')
        : t('workspace.saved');
  const Icon = status === 'saving' ? LoaderCircle : status === 'error' ? CloudAlert : CloudCheck;
  return (
    <p
      role="status"
      className={
        status === 'error'
          ? 'flex items-center gap-1.5 text-sm font-medium text-danger'
          : 'flex items-center gap-1.5 text-sm text-muted'
      }
    >
      <Icon
        aria-hidden="true"
        className={status === 'saving' ? 'size-4 motion-safe:animate-spin' : 'size-4'}
      />
      <span className="max-sm:sr-only">{label}</span>
    </p>
  );
}
