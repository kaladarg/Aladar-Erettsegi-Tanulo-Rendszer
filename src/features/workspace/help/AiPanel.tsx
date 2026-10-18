import { Send, Square, Trash2 } from 'lucide-react';
import { useId, useRef, useState, type FormEvent } from 'react';
import { AiError, streamAnswer, type AiMessage } from '@/ai/claude';
import { tutorSystem } from '@/ai/prompts';
import type { Task } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { asText, isBlank } from '@/domain/scoring/rules';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useAnswers } from '@/state/answerStore';
import { useSettings } from '@/state/settingsStore';
import { useWorkspace } from '../WorkspaceContext';

interface Turn {
  role: 'user' | 'assistant';
  text: string;
}

/** The student's current answer to a task, for the tutor to look at. */
function currentAnswer(task: Task): string {
  const answers = useAnswers.getState().answers;
  return task.fields
    .filter((field) => !isBlank(answers[field.id]))
    .map((field) => `${field.label ?? field.id} ${asText(answers[field.id])}`)
    .join('\n');
}

/** Questions to the AI tutor about one task (needs the student's own API key). */
export function AiPanel({ apiKey, task }: { apiKey: string; task: Task }) {
  const { exam } = useWorkspace();
  const model = useSettings((state) => state.settings.aiModel);
  const inputId = useId();
  const includeId = useId();
  // One conversation per task; switching task starts a new one.
  const [conversation, setConversation] = useState<{ taskId: string; turns: Turn[] }>({
    taskId: task.id,
    turns: [],
  });
  const turns = conversation.taskId === task.id ? conversation.turns : [];
  const [question, setQuestion] = useState('');
  const [includeAnswer, setIncludeAnswer] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abort = useRef<AbortController | null>(null);

  const ask = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    const answer = includeAnswer ? currentAnswer(task) : '';
    const content = answer
      ? `${trimmed}\n\n<my_current_answer>\n${answer}\n</my_current_answer>`
      : trimmed;
    const history: AiMessage[] = [
      ...turns.map((turn) => ({ role: turn.role, content: turn.text })),
      { role: 'user', content },
    ];
    const next: Turn[] = [
      ...turns,
      { role: 'user', text: trimmed },
      { role: 'assistant', text: '' },
    ];
    setConversation({ taskId: task.id, turns: next });
    setQuestion('');
    setError(null);
    setBusy(true);
    abort.current = new AbortController();
    try {
      await streamAnswer({
        apiKey,
        model,
        system: tutorSystem(exam, task),
        messages: history,
        signal: abort.current.signal,
        onText: (delta) =>
          setConversation((current) => {
            const updated = [...current.turns];
            const last = updated[updated.length - 1]!;
            updated[updated.length - 1] = { ...last, text: last.text + delta };
            return { ...current, turns: updated };
          }),
      });
    } catch (caught) {
      if (!abort.current.signal.aborted) {
        setError(t(`help.aiErrors.${caught instanceof AiError ? caught.code : 'other'}`));
        // Drop the unanswered question so the conversation stays well-formed.
        setConversation({ taskId: task.id, turns });
        setQuestion(trimmed);
      }
    } finally {
      setBusy(false);
      abort.current = null;
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    void ask(question);
  };

  return (
    <div className="grid gap-4">
      <p className="text-sm">{t('help.aiIntro')}</p>
      {turns.length === 0 && (
        <div className="flex flex-wrap gap-2">
          {(['what', 'start', 'check'] as const).map((key) => (
            <Button
              key={key}
              size="sm"
              variant="secondary"
              onClick={() => {
                if (key === 'check') setIncludeAnswer(true);
                void ask(t(`help.aiSuggestions.${key}`));
              }}
            >
              {t(`help.aiSuggestions.${key}`)}
            </Button>
          ))}
        </div>
      )}
      <ol className="grid gap-3" aria-live="polite" aria-busy={busy}>
        {turns.map((turn, index) => (
          <li
            key={index}
            className={cn(
              'rounded-md p-3 text-sm whitespace-pre-wrap',
              turn.role === 'user' ? 'ml-8 bg-primary-soft/60' : 'mr-8 bg-surface-muted',
            )}
          >
            <span className="mb-1 block text-xs font-semibold text-muted">
              {turn.role === 'user' ? t('help.aiYou') : t('help.aiTutor')}
            </span>
            {turn.text || (busy && index === turns.length - 1 ? t('help.aiThinking') : '')}
          </li>
        ))}
      </ol>
      {error && (
        <p role="alert" className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
      <form onSubmit={onSubmit} className="grid gap-2">
        <label htmlFor={inputId} className="font-medium">
          {t('help.aiLabel')}
        </label>
        <textarea
          id={inputId}
          rows={3}
          value={question}
          placeholder={t('help.aiPlaceholder')}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              void ask(question);
            }
          }}
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
        <div className="flex flex-wrap items-center gap-2">
          {busy ? (
            <Button type="button" variant="secondary" onClick={() => abort.current?.abort()}>
              <Square aria-hidden="true" />
              {t('help.aiStop')}
            </Button>
          ) : (
            <Button type="submit" disabled={!question.trim()}>
              <Send aria-hidden="true" />
              {t('help.aiSend')}
            </Button>
          )}
          {turns.length > 0 && !busy && (
            <Button
              type="button"
              variant="ghost"
              onClick={() => setConversation({ taskId: task.id, turns: [] })}
            >
              <Trash2 aria-hidden="true" />
              {t('help.aiClear')}
            </Button>
          )}
        </div>
        <p className="text-xs text-muted">{t('help.aiPrivacy')}</p>
      </form>
    </div>
  );
}
