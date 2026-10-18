import { useRef, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import type { Field, Rect } from '@/content/schema.types';
import { clampRect, useRectEdits } from './editorStore';

/** A draggable, resizable field box used by the position editor. */
export function EditableBox({
  field,
  rect,
  pageSize,
}: {
  field: Field;
  rect: Rect;
  pageSize: { w: number; h: number };
}) {
  const setRect = useRectEdits((state) => state.set);
  const drag = useRef<{ mode: 'move' | 'resize'; x: number; y: number; start: Rect } | null>(null);

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    const mode = event.currentTarget.dataset.mode === 'resize' ? 'resize' : 'move';
    drag.current = { mode, x: event.clientX, y: event.clientY, start: rect };
  };
  const onPointerMove = (event: PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = (event.clientX - d.x) / pageSize.w;
    const dy = (event.clientY - d.y) / pageSize.h;
    setRect(
      field.id,
      clampRect(
        d.mode === 'move'
          ? { ...d.start, x: d.start.x + dx, y: d.start.y + dy }
          : { ...d.start, w: d.start.w + dx, h: d.start.h + dy },
      ),
    );
  };
  const onKeyDown = (event: KeyboardEvent) => {
    const step = event.altKey ? 0.0005 : 0.002;
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    const [dx, dy] = move;
    setRect(
      field.id,
      clampRect(
        event.shiftKey
          ? { ...rect, w: rect.w + dx, h: rect.h + dy }
          : { ...rect, x: rect.x + dx, y: rect.y + dy },
      ),
    );
  };

  const style: CSSProperties = {
    left: `${rect.x * 100}%`,
    top: `${rect.y * 100}%`,
    width: `${rect.w * 100}%`,
    height: `${rect.h * 100}%`,
  };
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${field.id}: x ${rect.x}, y ${rect.y}, w ${rect.w}, h ${rect.h}`}
      style={style}
      data-mode="move"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => (drag.current = null)}
      onKeyDown={onKeyDown}
      className="absolute cursor-move touch-none border-2 border-dashed border-danger bg-danger/10 focus-visible:outline-2 focus-visible:outline-focus"
    >
      <span className="pointer-events-none absolute -top-5 left-0 rounded-sm bg-danger px-1 text-[10px] font-semibold whitespace-nowrap text-danger-fg">
        {field.id}
      </span>
      <span
        aria-hidden="true"
        data-mode="resize"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => (drag.current = null)}
        className="absolute -right-1.5 -bottom-1.5 size-3 cursor-se-resize rounded-full bg-danger"
      />
    </div>
  );
}
