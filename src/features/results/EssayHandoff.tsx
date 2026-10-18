import type { Exam, Task } from '@/content/schema.types';
import { asText } from '@/domain/scoring/rules';
import { essayHandoffPrompt } from '@/help/aiHandoff';
import { t } from '@/i18n';
import type { Answers } from '@/storage/attempts';
import { HandoffLinks } from '../workspace/help/HandoffLinks';

/** Rubric feedback on an essay from a free AI chat, without an API key. */
export function EssayHandoff({
  exam,
  task,
  answers,
}: {
  exam: Exam;
  task: Task;
  answers: Answers;
}) {
  const essay = task.fields
    .filter((f) => f.kind === 'essay' || f.kind === 'textarea')
    .map((f) => asText(answers[f.id]))
    .join('\n\n')
    .trim();
  if (!essay || (task.scoring.criteria ?? []).length === 0) return null;

  return (
    <details className="rounded-md border border-border p-4">
      <summary className="cursor-pointer font-medium">{t('results.essayHandoff')}</summary>
      <div className="mt-3 grid gap-3">
        <p className="text-sm">{t('results.essayHandoffBody')}</p>
        <HandoffLinks prompt={() => essayHandoffPrompt(exam, task, essay)} />
      </div>
    </details>
  );
}
