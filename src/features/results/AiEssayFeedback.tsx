import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { AiError, askJson } from '@/ai/claude';
import { useAiKey } from '@/ai/keyStore';
import {
  ESSAY_SYSTEM,
  essayFeedbackPrompt,
  essayFeedbackSchema,
  type EssayFeedback,
} from '@/ai/prompts';
import type { Exam, Task } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { asText } from '@/domain/scoring/rules';
import { t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { toast } from '@/state/toastStore';
import { saveReview, type Answers } from '@/storage/attempts';

type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'done'; feedback: EssayFeedback }
  | { status: 'error'; message: string };

/** Asks the AI to rate an essay by the rubric; the student decides whether to take the points. */
export function AiEssayFeedback({
  exam,
  task,
  answers,
  attemptId,
}: {
  exam: Exam;
  task: Task;
  answers: Answers;
  attemptId: string;
}) {
  const apiKey = useAiKey();
  const model = useSettings((state) => state.settings.aiModel);
  const [state, setState] = useState<State>({ status: 'idle' });
  const essay = task.fields
    .filter((f) => f.kind === 'essay' || f.kind === 'textarea')
    .map((f) => asText(answers[f.id]))
    .join('\n\n')
    .trim();
  const criteria = task.scoring.criteria ?? [];
  if (!apiKey || !essay || criteria.length === 0) return null;

  const request = async () => {
    setState({ status: 'loading' });
    try {
      const feedback = await askJson<EssayFeedback>({
        apiKey,
        model,
        system: ESSAY_SYSTEM,
        prompt: essayFeedbackPrompt(exam, task, essay),
        schema: essayFeedbackSchema(task),
      });
      setState({ status: 'done', feedback });
    } catch (error) {
      setState({
        status: 'error',
        message: t(`help.aiErrors.${error instanceof AiError ? error.code : 'other'}`),
      });
    }
  };

  const apply = async (feedback: EssayFeedback) => {
    for (const item of feedback.criteria) {
      const criterion = criteria.find((c) => c.id === item.id);
      if (!criterion) continue;
      const points = Math.max(0, Math.min(criterion.maxPoints, Math.round(item.points)));
      await saveReview(attemptId, task.id, item.id, points);
    }
    toast({ message: t('results.aiFeedbackApplied'), tone: 'success' });
  };

  return (
    <section className="grid gap-3 rounded-md border border-primary/40 bg-primary-soft/30 p-4">
      {state.status !== 'done' && (
        <>
          <p className="text-sm">{t('results.aiFeedbackBody')}</p>
          <Button
            variant="secondary"
            size="sm"
            className="justify-self-start"
            disabled={state.status === 'loading'}
            onClick={() => void request()}
          >
            <Sparkles aria-hidden="true" />
            {state.status === 'loading' ? t('results.aiFeedbackLoading') : t('results.aiFeedback')}
          </Button>
          <p className="text-xs text-muted">{t('results.aiFeedbackPrivacy')}</p>
        </>
      )}
      {state.status === 'error' && (
        <p role="alert" className="text-sm font-medium text-danger">
          {state.message}
        </p>
      )}
      {state.status === 'done' && (
        <div className="grid gap-3" aria-live="polite">
          <h4 className="flex items-center gap-2 font-semibold">
            <Sparkles aria-hidden="true" className="size-4 text-primary" />
            {t('results.aiFeedbackTitle')}
          </h4>
          <ul className="grid gap-2 text-sm">
            {state.feedback.criteria.map((item) => {
              const criterion = criteria.find((c) => c.id === item.id);
              if (!criterion) return null;
              return (
                <li key={item.id}>
                  <p className="font-medium">
                    {t('results.aiFeedbackPoints', {
                      label: criterion.label,
                      points: item.points,
                      max: criterion.maxPoints,
                    })}
                  </p>
                  <p className="text-muted">{item.reason}</p>
                </li>
              );
            })}
          </ul>
          <p className="text-sm whitespace-pre-wrap">{state.feedback.summary}</p>
          <p className="text-xs text-muted">{t('results.aiFeedbackNote')}</p>
          <Button
            size="sm"
            className="justify-self-start"
            onClick={() => void apply(state.feedback)}
          >
            {t('results.aiFeedbackApply')}
          </Button>
        </div>
      )}
    </section>
  );
}
