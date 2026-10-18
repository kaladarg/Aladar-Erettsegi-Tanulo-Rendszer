import { Send } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import type { Exam } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { t } from '@/i18n';
import { useAnswers } from '@/state/answerStore';
import { toast } from '@/state/toastStore';
import { advanceSegment } from '@/storage/attempts';
import { handIn, unansweredTasks } from './handIn';

/**
 * Hands in the paper, or in exam mode the current part when `nextSegment`
 * is given (the next part's clock then starts).
 */
export function SubmitButton({
  exam,
  attemptId,
  nextSegment,
}: {
  exam: Exam;
  attemptId: string;
  nextSegment?: number;
}) {
  const [open, setOpen] = useState(false);
  const [unanswered, setUnanswered] = useState(0);
  const navigate = useNavigate();
  const partOnly = nextSegment !== undefined;

  const submit = async () => {
    try {
      if (partOnly) {
        await useAnswers.getState().flush();
        await advanceSegment(attemptId, nextSegment);
        window.scrollTo({ top: 0 });
        return;
      }
      await handIn(exam, attemptId);
      navigate(`/feladatsorok/${exam.id}/eredmeny/${attemptId}`);
    } catch (error) {
      console.error('Could not submit', error);
      toast({ message: t('workspace.submitFailed'), tone: 'danger' });
    }
  };

  return (
    <>
      <Button
        size="sm"
        onClick={() => {
          setUnanswered(unansweredTasks(exam, useAnswers.getState().answers));
          setOpen(true);
        }}
      >
        <Send aria-hidden="true" />
        <span className="max-sm:sr-only">
          {partOnly ? t('workspace.submitPart') : t('workspace.submit')}
        </span>
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title={partOnly ? t('workspace.submitPartTitle') : t('workspace.submitTitle')}
        description={partOnly ? t('workspace.submitPartBody') : submitBody(unanswered)}
        confirmLabel={t('workspace.submitConfirm')}
        onConfirm={() => void submit()}
      />
    </>
  );
}

const submitBody = (unanswered: number) =>
  unanswered > 0
    ? `${t('workspace.submitBody')} ${t('workspace.submitUnanswered', { count: unanswered })}`
    : t('workspace.submitBody');
