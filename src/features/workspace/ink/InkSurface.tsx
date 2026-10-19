import { useRef, useState, type PointerEvent } from 'react';
import {
  MARKER_COLOR,
  parseInk,
  simplify,
  strokeHit,
  strokePath,
  type Stroke,
} from '@/domain/ink/ink';
import { cn } from '@/lib/cn';
import { useAnswer } from '@/state/answerStore';
import { useInk, type InkMode } from './inkStore';

const PEN_WIDTH = 0.0035;
const MARKER_WIDTH = 0.02;
const ERASER_RADIUS = 0.012;

/** Renders strokes as SVG paths; shared by the live surface and the results view. */
export function InkStrokes({
  strokes,
  width,
  height,
}: {
  strokes: Stroke[];
  width: number;
  height: number;
}) {
  return (
    <>
      {strokes.map((stroke, index) => (
        <path
          key={index}
          d={strokePath(stroke, width, height)}
          fill="none"
          stroke={stroke.color}
          strokeWidth={Math.max(1, stroke.width * width)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={stroke.tool === 'marker' ? 0.4 : 1}
          style={stroke.tool === 'marker' ? { mixBlendMode: 'multiply' } : undefined}
        />
      ))}
    </>
  );
}

/**
 * A drawing layer of known pixel size. While a drawing tool is chosen it takes
 * pointer input; otherwise it only shows the strokes and lets clicks through.
 * `forceMode` lets the form-mode drawing pad draw even when the tool is off.
 */
export function InkSurface({
  inkKey,
  width,
  height,
  forceMode,
  className,
  label,
}: {
  inkKey: string;
  width: number;
  height: number;
  forceMode?: Exclude<InkMode, 'off'>;
  className?: string;
  label: string;
}) {
  const value = useAnswer(inkKey);
  const strokes = parseInk(value);
  const globalMode = useInk((state) => state.mode);
  const mode = globalMode === 'off' ? (forceMode ?? 'off') : globalMode;
  const color = useInk((state) => state.color);
  const penSeen = useInk((state) => state.penSeen);
  const [live, setLive] = useState<Stroke | null>(null);
  const [erased, setErased] = useState<Set<number> | null>(null);
  const active = useRef<number | null>(null);
  const svg = useRef<SVGSVGElement>(null);

  const point = (event: PointerEvent) => {
    const box = svg.current!.getBoundingClientRect();
    return [
      (event.clientX - box.left) / box.width,
      (event.clientY - box.top) / box.height,
    ] as const;
  };
  const eraseAt = (x: number, y: number, hits: Set<number>) => {
    strokes.forEach((stroke, index) => {
      if (!hits.has(index) && strokeHit(stroke, x, y, ERASER_RADIUS, height / width))
        hits.add(index);
    });
    return hits;
  };

  const onPointerDown = (event: PointerEvent<SVGSVGElement>) => {
    if (mode === 'off' || active.current !== null) return;
    if (event.pointerType === 'pen') useInk.getState().notePen();
    // With a stylus around, a finger scrolls the page instead of drawing.
    if (event.pointerType === 'touch' && penSeen) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    active.current = event.pointerId;
    const [x, y] = point(event);
    if (mode === 'eraser') setErased(eraseAt(x, y, new Set()));
    else
      setLive({
        tool: mode,
        color: mode === 'marker' ? MARKER_COLOR : color,
        width: mode === 'marker' ? MARKER_WIDTH : PEN_WIDTH,
        points: [x, y],
      });
  };

  const onPointerMove = (event: PointerEvent<SVGSVGElement>) => {
    if (active.current !== event.pointerId) return;
    const events = event.nativeEvent.getCoalescedEvents?.() ?? [event.nativeEvent];
    const box = svg.current!.getBoundingClientRect();
    const added: number[] = [];
    for (const e of events.length > 0 ? events : [event.nativeEvent])
      added.push((e.clientX - box.left) / box.width, (e.clientY - box.top) / box.height);
    if (mode === 'eraser') {
      const hits = new Set(erased);
      for (let i = 0; i < added.length; i += 2) eraseAt(added[i]!, added[i + 1]!, hits);
      setErased(hits);
    } else setLive((stroke) => stroke && { ...stroke, points: [...stroke.points, ...added] });
  };

  const finish = (event: PointerEvent<SVGSVGElement>) => {
    if (active.current !== event.pointerId) return;
    active.current = null;
    if (mode === 'eraser') {
      if (erased && erased.size > 0)
        useInk.getState().commit(
          inkKey,
          strokes.filter((_, index) => !erased.has(index)),
        );
      setErased(null);
    } else if (live) {
      useInk.getState().commit(inkKey, [...strokes, { ...live, points: simplify(live.points) }]);
      setLive(null);
    }
  };

  const drawing = mode !== 'off';
  const shown = erased ? strokes.filter((_, index) => !erased.has(index)) : strokes;
  return (
    <svg
      ref={svg}
      role={drawing ? 'img' : undefined}
      aria-label={drawing ? label : undefined}
      aria-hidden={drawing ? undefined : true}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finish}
      onPointerCancel={finish}
      className={cn(
        drawing ? 'pointer-events-auto' : 'pointer-events-none',
        drawing && (mode === 'eraser' ? 'cursor-cell' : 'cursor-crosshair'),
        className,
      )}
      // Fingers scroll when a stylus draws; otherwise every touch draws.
      style={{ touchAction: drawing && !penSeen ? 'none' : 'pan-x pan-y pinch-zoom' }}
    >
      <InkStrokes strokes={shown} width={width} height={height} />
      {live && <InkStrokes strokes={[live]} width={width} height={height} />}
    </svg>
  );
}
