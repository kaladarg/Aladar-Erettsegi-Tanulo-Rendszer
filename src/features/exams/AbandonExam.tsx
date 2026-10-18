import { Flag } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/design/ui/Button';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { t } from '@/i18n';
import { useAnswers } from '@/state/answerStore';
import { toast } from '@/state/toastStore';
import { deleteAttempt, restoreAttempt } from '@/storage/attempts';

/**
 * Gives up a timed exam without handing it in: the attempt and its answers are
 * deleted (with undo), so it leaves no result and the next start is fresh.
 */
export function AbandonExamButton({
  attemptId,
  onAbandoned,
  className,
}: {
  attemptId: string;
  onAbandoned?: () => void;
  className?: string;
}) {
  const [confirm, setConfirm] = useState(false);

  const abandon = async () => {
    const store = useAnswers.getState();
    // Stop autosaving into the attempt that is about to be deleted.
    if (store.attemptId === attemptId) await store.close();
    const deleted = await deleteAttempt(attemptId);
    if (!deleted) return;
    onAbandoned?.();
    toast({
      message: t('exam.abandonDone'),
      action: {
        label: t('common.undo'),
        onAction: () =>
          void restoreAttempt(deleted).then(() => toast({ message: t('exam.abandonUndone') })),
      },
    });
  };

  return (
    <>
      <Button variant="secondary" className={className} onClick={() => setConfirm(true)}>
        <Flag aria-hidden="true" />
        {t('exam.abandon')}
      </Button>
      <ConfirmDialog
        open={confirm}
        onOpenChange={setConfirm}
        tone="danger"
        title={t('exam.abandonConfirmTitle')}
        description={t('exam.abandonConfirmBody')}
        confirmLabel={t('exam.abandonConfirm')}
        onConfirm={() => void abandon()}
      />
    </>
  );
}
