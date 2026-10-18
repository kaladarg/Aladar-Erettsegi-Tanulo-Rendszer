import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cleanQuery } from '@/help/lookup';
import { t } from '@/i18n';
import { useHelp } from './helpStore';

interface Found {
  text: string;
  top: number;
  left: number;
}

const MAX_LENGTH = 60;

/** Offers a lookup when the student selects a word or short phrase in the task texts. */
export function SelectionLookup() {
  const [found, setFound] = useState<Found | null>(null);
  const show = useHelp((state) => state.show);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onChange = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const selection = document.getSelection();
        const text = cleanQuery(selection?.toString() ?? '');
        const main = document.getElementById('main');
        if (
          !selection ||
          selection.rangeCount === 0 ||
          !text ||
          text.length > MAX_LENGTH ||
          !main?.contains(selection.anchorNode)
        ) {
          setFound(null);
          return;
        }
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        setFound({
          text,
          top: Math.max(8, rect.top - 48),
          left: Math.min(window.innerWidth - 220, Math.max(8, rect.left)),
        });
      }, 250);
    };
    const hide = () => setFound(null);
    document.addEventListener('selectionchange', onChange);
    window.addEventListener('scroll', hide, true);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('selectionchange', onChange);
      window.removeEventListener('scroll', hide, true);
    };
  }, []);

  if (!found) return null;
  return (
    <div
      role="toolbar"
      aria-label={t('help.selectionMenu')}
      className="fixed z-40 rounded-md border border-border bg-surface p-1 shadow-3"
      style={{ top: found.top, left: found.left }}
    >
      <button
        type="button"
        // Keep the selection: the click must not move focus before we read it.
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => {
          show({ query: found.text, tab: 'lookup' });
          setFound(null);
        }}
        className="inline-flex min-h-10 max-w-52 items-center gap-2 rounded-sm px-3 text-sm font-medium hover:bg-surface-muted"
      >
        <Search aria-hidden="true" className="size-4 shrink-0" />
        <span className="truncate">{t('help.selectionLookup', { text: found.text })}</span>
      </button>
    </div>
  );
}
