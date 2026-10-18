import { useState, type FormEvent } from 'react';
import { contentBaseUrl } from '@/content/config';
import { resetContentCache } from '@/content/useContent';
import { sanitizeContentSource } from '@/domain/settings';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { toast } from '@/state/toastStore';

export function ContentSourceSection() {
  const source = useSettings((state) => state.settings.contentSource);
  const update = useSettings((state) => state.update);
  const [draft, setDraft] = useState(source);
  const [error, setError] = useState(false);

  const save = async (value: string, message: string) => {
    resetContentCache();
    await update({ contentSource: value });
    setDraft(value);
    toast({ message, tone: 'success' });
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const clean = sanitizeContentSource(draft);
    if (!clean) {
      setError(true);
      return;
    }
    setError(false);
    await save(clean, t('settings.content.saved'));
  };

  return (
    <Card aria-labelledby="settings-content">
      <CardTitle id="settings-content">{t('settings.content.title')}</CardTitle>
      <CardDescription>{t('settings.content.description')}</CardDescription>
      <form className="mt-5" noValidate onSubmit={(event) => void onSubmit(event)}>
        <label htmlFor="content-source" className="font-medium">
          {t('settings.content.label')}
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="content-source"
            type="url"
            inputMode="url"
            spellCheck={false}
            autoComplete="off"
            value={draft}
            placeholder={t('settings.content.placeholder')}
            aria-invalid={error || undefined}
            aria-describedby={error ? 'content-source-error' : 'content-source-current'}
            onChange={(event) => setDraft(event.target.value)}
            className="min-h-11 flex-1 rounded-md border border-border-strong bg-surface px-3 text-sm placeholder:text-muted aria-invalid:border-danger"
          />
          <Button
            type="submit"
            variant="secondary"
            disabled={draft.trim() === '' || draft === source}
          >
            {t('settings.content.save')}
          </Button>
        </div>
        {error && (
          <p
            id="content-source-error"
            role="alert"
            className="mt-2 text-sm font-medium text-danger"
          >
            {t('settings.content.invalid')}
          </p>
        )}
      </form>
      <p id="content-source-current" className="mt-3 text-sm break-all text-muted">
        {t('settings.content.current', { url: contentBaseUrl(source) })}
      </p>
      {source && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-2"
          onClick={() => void save('', t('settings.content.resetDone'))}
        >
          {t('settings.content.reset')}
        </Button>
      )}
    </Card>
  );
}
