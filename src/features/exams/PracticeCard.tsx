import { useLiveQuery } from 'dexie-react-hooks';
import { Play, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/design/ui/Button';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { formatDate, t } from '@/i18n';
import { toast } from '@/state/toastStore';
import { deleteAttempt, findOpenAttempt, restoreAttempt } from '@/storage/attempts';

/** Start, continue or restart practising an exam. */
export function PracticeCard({ examId }: { examId: string }) {
  const open = useLiveQuery(
    async () => (await findOpenAttempt(examId, 'practice')) ?? null,
    [examId],
  );
  const [confirm, setConfirm] = useState(false);
  const workspace = `/feladatsorok/${examId}/gyakorlas`;

  const restart = async () => {
    if (!open) return;
    const deleted = await deleteAttempt(open.id);
    if (!deleted) return;
    toast({
      message: t('exam.restartDone'),
      tone: 'success',
      action: {
        label: t('common.undo'),
        onAction: () =>
          void restoreAttempt(deleted).then(() => toast({ message: t('exam.restartUndone') })),
      },
    });
  };

  return (
    <section
      aria-labelledby="practice-title"
      className="mb-6 rounded-lg border border-primary/40 bg-primary-soft/40 p-5 sm:p-6"
    >
      <h2 id="practice-title" className="text-xl font-semibold">
        {t('exam.practiceTitle')}
      </h2>
      <p className="mt-1 text-muted">{t('exam.practiceBody')}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {open === undefined ? null : open ? (
          <>
            <Button asChild size="lg">
              <Link to={workspace}>
                <Play aria-hidden="true" />
                {t('exam.practiceContinue')}
              </Link>
            </Button>
            <Button variant="secondary" onClick={() => setConfirm(true)}>
              <RotateCcw aria-hidden="true" />
              {t('exam.practiceRestart')}
            </Button>
            <p className="text-sm text-muted">
              {t('exam.practiceLastActivity', {
                date: formatDate(open.updatedAt, { dateStyle: 'medium', timeStyle: 'short' }),
              })}
            </p>
          </>
        ) : (
          <Button asChild size="lg">
            <Link to={workspace}>
              <Play aria-hidden="true" />
              {t('exam.practiceStart')}
            </Link>
          </Button>
        )}
      </div>
      <ConfirmDialog
        open={confirm}
        onOpenChange={setConfirm}
        tone="danger"
        title={t('exam.restartConfirmTitle')}
        description={t('exam.restartConfirmBody')}
        confirmLabel={t('exam.practiceRestart')}
        onConfirm={() => void restart()}
      />
    </section>
  );
}
