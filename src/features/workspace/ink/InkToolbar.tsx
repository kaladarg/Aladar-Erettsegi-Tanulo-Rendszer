import { Eraser, Highlighter, MousePointer2, Pen, Trash2, Undo2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/design/ui/Button';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { INK_COLORS } from '@/domain/ink/ink';
import { t, type MessageKey } from '@/i18n';
import { cn } from '@/lib/cn';
import { useInk, useCanUndo, type InkMode } from './inkStore';

const MODES: { mode: InkMode; label: MessageKey; icon: typeof Pen }[] = [
  { mode: 'off', label: 'workspace.ink.off', icon: MousePointer2 },
  { mode: 'pen', label: 'workspace.ink.pen', icon: Pen },
  { mode: 'marker', label: 'workspace.ink.marker', icon: Highlighter },
  { mode: 'eraser', label: 'workspace.ink.eraser', icon: Eraser },
];

/**
 * Pen, marker, eraser, colours, undo and clear. `withOff` adds the "Kitöltés"
 * button that turns drawing off (PDF mode); the form-mode pad always draws.
 */
export function InkToolbar({
  clearKeys,
  withOff = true,
  className,
}: {
  clearKeys: () => string[];
  withOff?: boolean;
  className?: string;
}) {
  const mode = useInk((state) => state.mode);
  const color = useInk((state) => state.color);
  const canUndo = useCanUndo();
  const [confirm, setConfirm] = useState(false);
  // On the pad, "off" means the pen.
  const shownMode = !withOff && mode === 'off' ? 'pen' : mode;
  const modes = withOff ? MODES : MODES.filter((m) => m.mode !== 'off');

  return (
    <div
      role="toolbar"
      aria-label={t('workspace.ink.toolsLabel')}
      className={cn('flex flex-wrap items-center gap-1', className)}
    >
      {modes.map(({ mode: value, label, icon: Icon }) => (
        <Button
          key={value}
          size="sm"
          variant={shownMode === value ? 'primary' : 'ghost'}
          aria-pressed={shownMode === value}
          aria-label={value === 'off' ? t('workspace.ink.offLabel') : undefined}
          onClick={() => useInk.getState().setMode(value)}
        >
          <Icon aria-hidden="true" />
          <span className={value === 'off' ? undefined : 'max-sm:sr-only'}>{t(label)}</span>
        </Button>
      ))}
      {shownMode === 'pen' && (
        <div
          role="radiogroup"
          aria-label={t('workspace.ink.colorsLabel')}
          className="flex gap-1 px-1"
        >
          {INK_COLORS.map((value) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={color === value}
              aria-label={t(`workspace.ink.color.${value}`)}
              onClick={() => useInk.getState().setColor(value)}
              className={cn(
                'size-7 rounded-full border-2 sm:size-8',
                color === value ? 'border-text ring-2 ring-focus ring-offset-2' : 'border-border',
              )}
              style={{ background: value }}
            />
          ))}
        </div>
      )}
      <span aria-hidden="true" className="mx-1 h-6 w-px bg-border" />
      <Button
        size="icon"
        variant="ghost"
        aria-label={t('workspace.ink.undo')}
        title={t('workspace.ink.undo')}
        disabled={!canUndo}
        onClick={() => useInk.getState().undo()}
      >
        <Undo2 aria-hidden="true" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        aria-label={t('workspace.ink.clear')}
        title={t('workspace.ink.clear')}
        onClick={() => setConfirm(true)}
      >
        <Trash2 aria-hidden="true" />
      </Button>
      <ConfirmDialog
        open={confirm}
        onOpenChange={setConfirm}
        title={t('workspace.ink.clearConfirmTitle')}
        description={t('workspace.ink.clearConfirmBody')}
        confirmLabel={t('workspace.ink.clear')}
        tone="danger"
        onConfirm={() => useInk.getState().clear(clearKeys())}
      />
    </div>
  );
}
