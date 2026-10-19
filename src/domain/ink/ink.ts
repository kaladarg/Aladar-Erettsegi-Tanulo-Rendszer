import type { AnswerValue } from '@/storage/attempts';

/**
 * Drawings on the paper are stored with the answers, one entry per PDF page
 * (`__ink:p3`) or per form-mode drawing pad (`__ink:t6a`). Keys starting with
 * `__` are ignored by scoring. Points are fractions of the surface (0–1), so a
 * drawing fits any zoom level and screen size.
 */
export type InkTool = 'pen' | 'marker';

export interface Stroke {
  tool: InkTool;
  color: string;
  /** Line width as a fraction of the surface width. */
  width: number;
  /** Flat list of x, y pairs. */
  points: number[];
}

export const INK_COLORS = ['#1e3a8a', '#111827', '#b91c1c', '#047857'] as const;
export const MARKER_COLOR = '#facc15';

export const pageInkKey = (page: number) => `__ink:p${page}`;
export const taskInkKey = (taskId: string) => `__ink:t${taskId}`;

const round = (n: number) => Math.round(n * 10_000) / 10_000;

export function parseInk(value: AnswerValue | undefined): Stroke[] {
  if (typeof value !== 'string' || !value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (s): s is Stroke =>
        !!s &&
        typeof s === 'object' &&
        (s.tool === 'pen' || s.tool === 'marker') &&
        typeof s.color === 'string' &&
        typeof s.width === 'number' &&
        Array.isArray(s.points) &&
        s.points.every((n: unknown) => typeof n === 'number'),
    );
  } catch {
    return [];
  }
}

/** Serialized strokes; an empty drawing becomes an empty string (a blank answer). */
export function serializeInk(strokes: Stroke[]): string {
  if (strokes.length === 0) return '';
  return JSON.stringify(strokes.map((s) => ({ ...s, points: s.points.map(round) })));
}

/** Drops points closer than `minDistance` to the previous kept one. */
export function simplify(points: number[], minDistance = 0.002): number[] {
  if (points.length <= 4) return points;
  const kept = [points[0]!, points[1]!];
  for (let i = 2; i < points.length; i += 2) {
    const dx = points[i]! - kept[kept.length - 2]!;
    const dy = points[i + 1]! - kept[kept.length - 1]!;
    if (Math.hypot(dx, dy) >= minDistance || i === points.length - 2)
      kept.push(points[i]!, points[i + 1]!);
  }
  return kept;
}

/** Distance from point p to the segment a–b. */
function segmentDistance(px: number, py: number, ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax;
  const dy = by - ay;
  const length = dx * dx + dy * dy;
  const t = length === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / length));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

/**
 * Whether a stroke passes within `radius` of (x, y). `aspect` is height / width
 * of the surface, so distances are measured in the same unit on both axes.
 */
export function strokeHit(stroke: Stroke, x: number, y: number, radius: number, aspect = 1) {
  const p = stroke.points;
  const reach = radius + stroke.width / 2;
  if (p.length === 2) return Math.hypot(p[0]! - x, (p[1]! - y) * aspect) <= reach;
  for (let i = 0; i + 3 < p.length; i += 2) {
    if (
      segmentDistance(x, y * aspect, p[i]!, p[i + 1]! * aspect, p[i + 2]!, p[i + 3]! * aspect) <=
      reach
    )
      return true;
  }
  return false;
}

/** SVG path data for a stroke on a surface of the given pixel size. */
export function strokePath(stroke: Stroke, width: number, height: number): string {
  const p = stroke.points;
  if (p.length < 2) return '';
  let d = `M${(p[0]! * width).toFixed(1)} ${(p[1]! * height).toFixed(1)}`;
  if (p.length === 2) return `${d}l0.1 0`;
  for (let i = 2; i < p.length; i += 2)
    d += `L${(p[i]! * width).toFixed(1)} ${(p[i + 1]! * height).toFixed(1)}`;
  return d;
}
