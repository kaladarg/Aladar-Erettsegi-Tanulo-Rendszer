import { Copy, ExternalLink } from 'lucide-react';
import { useId, useState } from 'react';
import { Button } from '@/design/ui/Button';
import { AI_CHATS } from '@/help/aiHandoff';
import { t } from '@/i18n';

/**
 * Links to free AI chats: a click copies the prepared prompt and the link opens
 * the chat in a new tab. When the browser blocks the clipboard, the prompt is
 * shown so the student can copy it by hand. The status is shown inline, not as a
 * toast, because the help panel is modal and hides toasts from screen readers.
 */
export function HandoffLinks({ prompt }: { prompt: () => string }) {
  const previewId = useId();
  const [fallback, setFallback] = useState<string | null>(null);
  const [status, setStatus] = useState<'copied' | 'failed' | null>(null);

  const copy = async () => {
    const text = prompt();
    try {
      await navigator.clipboard.writeText(text);
      setFallback(null);
      setStatus('copied');
    } catch {
      setFallback(text);
      setStatus('failed');
    }
  };

  return (
    <div className="grid gap-3">
      <ul className="flex flex-wrap gap-2">
        {AI_CHATS.map((chat) => (
          <li key={chat.id}>
            <a
              href={chat.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => void copy()}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-border-strong bg-surface px-3 text-sm font-medium hover:bg-surface-muted"
            >
              {t('help.handoffOpen', { name: chat.name })}
              <ExternalLink aria-hidden="true" className="size-3.5" />
              <span className="sr-only"> {t('common.newTab')}</span>
            </a>
          </li>
        ))}
      </ul>
      <Button variant="ghost" size="sm" className="justify-self-start" onClick={() => void copy()}>
        <Copy aria-hidden="true" />
        {t('help.handoffCopy')}
      </Button>
      <p
        role="status"
        className={
          status === 'failed'
            ? 'text-sm font-medium text-danger'
            : 'text-sm font-medium text-success'
        }
      >
        {status === 'copied' && t('help.handoffCopied')}
        {status === 'failed' && t('help.handoffCopyFailed')}
      </p>
      {fallback && (
        <div className="grid gap-1">
          <label htmlFor={previewId} className="text-sm font-medium">
            {t('help.handoffPreview')}
          </label>
          <textarea
            id={previewId}
            readOnly
            rows={6}
            value={fallback}
            onFocus={(event) => event.target.select()}
            className="rounded-md border border-border bg-surface-muted p-3 text-sm"
          />
        </div>
      )}
      <p className="text-xs text-muted">{t('help.handoffNotice')}</p>
    </div>
  );
}
