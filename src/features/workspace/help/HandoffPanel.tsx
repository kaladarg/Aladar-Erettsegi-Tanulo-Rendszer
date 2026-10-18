import { useId, useState } from 'react';
import type { Task } from '@/content/schema.types';
import { tutorHandoffPrompt } from '@/help/aiHandoff';
import { t } from '@/i18n';
import { useWorkspace } from '../WorkspaceContext';
import { currentAnswer } from './currentAnswer';
import { HandoffLinks } from './HandoffLinks';

/** Ask about a task in a free AI chat: no key, the student pastes the prepared prompt. */
export function HandoffPanel({ task }: { task: Task }) {
  const { exam } = useWorkspace();
  const inputId = useId();
  const includeId = useId();
  const [question, setQuestion] = useState('');
  const [includeAnswer, setIncludeAnswer] = useState(false);

  const prompt = () =>
    tutorHandoffPrompt(exam, task, {
      question,
      answer: includeAnswer ? currentAnswer(task) : undefined,
    });

  return (
    <div className="grid gap-3">
      <p className="text-sm">{t('help.handoffIntro')}</p>
      <label htmlFor={inputId} className="font-medium">
        {t('help.aiLabel')}
      </label>
      <textarea
        id={inputId}
        rows={3}
        value={question}
        placeholder={t('help.aiPlaceholder')}
        onChange={(event) => setQuestion(event.target.value)}
        className="rounded-md border border-border-strong bg-surface p-3"
      />
      <label htmlFor={includeId} className="flex items-center gap-2 text-sm">
        <input
          id={includeId}
          type="checkbox"
          checked={includeAnswer}
          onChange={(event) => setIncludeAnswer(event.target.checked)}
          className="size-4"
        />
        {t('help.aiInclude')}
      </label>
      <HandoffLinks prompt={prompt} />
    </div>
  );
}
