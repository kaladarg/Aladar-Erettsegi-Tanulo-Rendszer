import type { Stroke } from '@/domain/ink/ink';
import { strokePath } from '@/domain/ink/ink';

const SIZE = 1000;

/** Read-only drawing that stretches over its parent (absolute) or fills a box. */
export function InkView({ strokes, className }: { strokes: Stroke[]; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      preserveAspectRatio="none"
      className={className}
    >
      {strokes.map((stroke, index) => (
        <path
          key={index}
          d={strokePath(stroke, SIZE, SIZE)}
          fill="none"
          stroke={stroke.color}
          // The box may be any width; a fixed pixel width keeps lines readable.
          strokeWidth={stroke.tool === 'marker' ? 10 : 2}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={stroke.tool === 'marker' ? 0.4 : 1}
        />
      ))}
    </svg>
  );
}
