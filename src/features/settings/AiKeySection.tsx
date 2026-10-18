import { Eye, EyeOff, KeyRound, Trash2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { looksLikeAnthropicKey, removeAiKey, saveAiKey, useAiKey } from '@/ai/keyStore';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { t } from '@/i18n';
import { toast } from '@/state/toastStore';

export function AiKeySection() {
  const storedKey = useAiKey();
  const [draft, setDraft] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!looksLikeAnthropicKey(draft)) {
      setError(t('settings.ai.invalid'));
      return;
    }
    setError(null);
    await saveAiKey(draft);
    setDraft('');
    setVisible(false);
    toast({ message: t('settings.ai.saved'), tone: 'success' });
  };

  const masked = storedKey ? `${storedKey.slice(0, 10)}…${storedKey.slice(-4)}` : '';

  return (
    <Card aria-labelledby="settings-ai">
      <CardTitle id="settings-ai">{t('settings.ai.title')}</CardTitle>
      <CardDescription>{t('settings.ai.description')}</CardDescription>

      {storedKey ? (
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <p className="flex flex-1 items-center gap-2 rounded-md bg-surface-muted px-4 py-3 font-mono text-sm">
            <KeyRound aria-hidden="true" className="size-4 text-success" />
            <span className="sr-only">{t('settings.ai.keyLabel')}: </span>
            {masked}
          </p>
          <Button
            variant="secondary"
            onClick={async () => {
              await removeAiKey();
              toast({ message: t('settings.ai.removed') });
            }}
          >
            <Trash2 aria-hidden="true" />
            {t('settings.ai.remove')}
          </Button>
        </div>
      ) : (
        <form className="mt-5" onSubmit={(event) => void onSubmit(event)} noValidate>
          <label htmlFor="ai-key" className="font-medium">
            {t('settings.ai.keyLabel')}
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <input
                id="ai-key"
                type={visible ? 'text' : 'password'}
                autoComplete="off"
                spellCheck={false}
                value={draft}
                placeholder={t('settings.ai.keyPlaceholder')}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'ai-key-error' : 'ai-key-notice'}
                onChange={(event) => setDraft(event.target.value)}
                className="min-h-11 w-full rounded-md border border-border-strong bg-surface py-2 pr-12 pl-3 font-mono text-sm placeholder:text-muted aria-invalid:border-danger"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0"
                aria-label={visible ? t('settings.ai.hide') : t('settings.ai.show')}
                aria-pressed={visible}
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
              </Button>
            </div>
            <Button type="submit" disabled={draft.trim() === ''}>
              {t('settings.ai.save')}
            </Button>
          </div>
          {error && (
            <p id="ai-key-error" role="alert" className="mt-2 text-sm font-medium text-danger">
              {error}
            </p>
          )}
        </form>
      )}
      <p id="ai-key-notice" className="mt-4 text-sm text-muted">
        {t('settings.ai.notice')}
      </p>
    </Card>
  );
}
