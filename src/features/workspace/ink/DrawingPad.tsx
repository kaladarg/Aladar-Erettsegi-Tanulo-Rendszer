import { ChevronDown, PencilLine } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import type { Task } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { parseInk, taskInkKey } from '@/domain/ink/ink';
import { t } from '@/i18n';
import { useAnswer } from '@/state/answerStore';
import { InkSurface } from './InkSurface';
import { InkToolbar } from './InkToolbar';

/** Width / height of the pad. */
const ASPECT = 5 / 3;

/** A squared scratch area under a task in form mode, saved with the answers. */
export function DrawingPad({ task }: { task: Task }) {
  const key = taskInkKey(task.id);
  const hasInk = parseInk(useAnswer(key)).length > 0;
  const [open, setOpen] = useState(hasInk);
  const [width, setWidth] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const id = useId();
  const label = t('workspace.ink.padLabel', {
    task: t('workspace.taskHeading', { number: task.number }),
  });

  useEffect(() => {
    const element = box.current;
    if (!open || !element) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry?.contentRect.width ?? 0));
    observer.observe(element);
    return () => observer.disconnect();
  }, [open]);

  return (
    <div className="mt-5 border-t border-border pt-4">
      <Button
        variant="ghost"
        size="sm"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <PencilLine aria-hidden="true" />
        {open ? t('workspace.ink.padClose') : t('workspace.ink.padOpen')}
        <ChevronDown
          aria-hidden="true"
          className={open ? 'rotate-180 motion-safe:transition-transform' : undefined}
        />
      </Button>
      {open && (
        <div id={id} className="mt-2 grid gap-2">
          <p className="text-sm text-muted">{t('workspace.ink.padHint')}</p>
          <InkToolbar clearKeys={() => [key]} withOff={false} />
          <div
            ref={box}
            className="relative w-full overflow-hidden rounded-md border border-border-strong bg-white"
            style={{
              aspectRatio: `${ASPECT}`,
              backgroundImage:
                'linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {width > 0 && (
              <InkSurface
                inkKey={key}
                width={width}
                height={width / ASPECT}
                forceMode="pen"
                label={label}
                className="absolute inset-0"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
