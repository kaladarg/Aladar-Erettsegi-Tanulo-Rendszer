import { AlertTriangle, Lightbulb } from 'lucide-react';
import { useEffect, useId, useState, type ReactNode } from 'react';
import { MAP_VIEWS, project } from '@/content/cards/projection';
import type { GuideBlock } from '@/content/guide';
import { RichText } from '@/content/RichText';
import { Skeleton } from '@/design/ui/Skeleton';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';

/** Line colours of the plots, readable in both themes. */
const COLORS = ['var(--c-primary)', 'var(--c-accent)', 'var(--c-success)', 'var(--c-danger)'];

/** Emelt-only material: a coloured edge and a label, so középszint readers can tell it apart. */
function EmeltFrame({ emelt, children }: { emelt?: boolean; children: ReactNode }) {
  if (!emelt) return <>{children}</>;
  return (
    <div className="relative rounded-md border-l-4 border-primary bg-primary-soft/30 py-2 pr-2 pl-3">
      <span className="mb-1 inline-block rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary-soft-fg">
        {t('guide.emeltOnly')}
      </span>
      {children}
    </div>
  );
}

const ItemTag = ({ emelt }: { emelt?: boolean }) =>
  emelt ? (
    <span className="ml-1 rounded-full bg-primary-soft px-1.5 py-0.5 align-middle text-[0.7rem] font-semibold text-primary-soft-fg">
      {t('guide.emelt')}
    </span>
  ) : null;

export function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="grid gap-5">
      {blocks.map((block, index) => (
        <EmeltFrame key={index} emelt={block.emelt}>
          <Block block={block} />
        </EmeltFrame>
      ))}
    </div>
  );
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.kind) {
    case 'heading':
      return <h3 className="text-xl font-bold">{block.text}</h3>;
    case 'text':
      return <RichText text={block.text} className="leading-relaxed" />;
    case 'keypoints':
      return (
        <div className="rounded-lg border border-border bg-surface p-4 shadow-1">
          {block.title && <p className="mb-2 font-semibold">{block.title}</p>}
          <ul className="grid gap-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </div>
      );
    case 'timeline':
      return (
        <ol className="relative grid gap-3 border-l-2 border-border pl-5">
          {block.items.map((item, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[1.6rem] size-3 rounded-full border-2 border-surface bg-primary"
              />
              <p className="text-sm font-bold text-primary tabular-nums">
                {item.date}
                <ItemTag emelt={item.emelt} />
              </p>
              <RichText text={item.text} />
            </li>
          ))}
        </ol>
      );
    case 'terms':
      return (
        <dl className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.term} className="rounded-md bg-surface-muted p-3">
              <dt className="font-semibold">
                {item.term}
                <ItemTag emelt={item.emelt} />
              </dt>
              <dd className="mt-1 text-sm">
                <RichText text={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      );
    case 'people':
      return (
        <ul className="grid gap-3">
          {block.items.map((item) => (
            <li key={item.name} className="rounded-md border border-border p-3">
              <p className="font-semibold">
                {item.name}
                <ItemTag emelt={item.emelt} />
              </p>
              <RichText text={item.text} className="text-sm" />
            </li>
          ))}
        </ul>
      );
    case 'compare':
      return (
        <figure className="overflow-x-auto">
          {block.title && <figcaption className="mb-2 font-semibold">{block.title}</figcaption>}
          <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="p-2" />
                {block.columns.map((column) => (
                  <th key={column} scope="col" className="p-2 font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.label} className="border-b border-border align-top">
                  <th scope="row" className="p-2 font-medium text-muted">
                    <RichText text={row.label} />
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="p-2">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      );
    case 'formula':
      return (
        <figure className="overflow-x-auto rounded-md bg-surface-muted px-4 py-3 text-center text-lg">
          <RichText text={`$${block.tex}$`} />
          {block.caption && (
            <figcaption className="mt-1 text-sm text-muted">{block.caption}</figcaption>
          )}
        </figure>
      );
    case 'plot':
      return <FunctionPlot block={block} />;
    case 'map':
      return <GuideMap block={block} />;
    case 'example':
      return (
        <details className="group rounded-lg border border-border bg-surface shadow-1">
          <summary className="cursor-pointer list-none p-4 font-semibold [&::-webkit-details-marker]:hidden">
            {block.title}
            <RichText text={block.problem} className="mt-2 font-normal" />
            <span className="mt-2 inline-block text-sm font-medium text-primary group-open:hidden">
              {t('guide.showSolution')}
            </span>
          </summary>
          <div className="border-t border-border p-4">
            <p className="mb-2 text-sm font-semibold text-muted">{t('guide.solution')}</p>
            <RichText text={block.solution} />
          </div>
        </details>
      );
    case 'tip':
      return (
        <div className="flex gap-3 rounded-md border border-success/40 bg-success-soft p-4">
          <Lightbulb aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-success" />
          <div>
            <p className="sr-only">{t('guide.tip')}</p>
            <RichText text={block.text} />
          </div>
        </div>
      );
    case 'warning':
      return (
        <div className="flex gap-3 rounded-md border border-warning bg-warning-soft p-4">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-warning" />
          <div>
            <p className="sr-only">{t('guide.warning')}</p>
            <RichText text={block.text} />
          </div>
        </div>
      );
  }
}

/** A function graph drawn from the formulas, with a light grid and labelled axes. */
function FunctionPlot({ block }: { block: Extract<GuideBlock, { kind: 'plot' }> }) {
  const titleId = useId();
  const W = 320;
  const [x0, x1] = block.x;
  const [y0, y1] = block.y;
  // Equal axes keep circles round: the height follows the y range.
  const H = block.equalAxes ? Math.round((W * (y1 - y0)) / (x1 - x0)) : 240;
  const sx = (x: number) => ((x - x0) / (x1 - x0)) * W;
  const sy = (y: number) => H - ((y - y0) / (y1 - y0)) * H;
  const visible = (y: number) => Number.isFinite(y) && y >= y0 - (y1 - y0) && y <= y1 + (y1 - y0);
  /** The x between a and b where the curve starts or stops (e.g. the side of a half circle). */
  const edge = (fn: (x: number) => number, inside: number, outside: number) => {
    for (let i = 0; i < 30; i++) {
      const mid = (inside + outside) / 2;
      if (visible(fn(mid))) inside = mid;
      else outside = mid;
    }
    return inside;
  };
  const path = (fn: (x: number) => number) => {
    let d = '';
    let pen = false;
    const steps = 480;
    const point = (x: number) => `${sx(x).toFixed(1)},${sy(fn(x)).toFixed(1)}`;
    for (let i = 0; i <= steps; i++) {
      const x = x0 + ((x1 - x0) * i) / steps;
      const prev = x0 + ((x1 - x0) * (i - 1)) / steps;
      // Leave gaps where the function is undefined or runs far off the plot.
      if (!visible(fn(x))) {
        if (pen) d += `L${point(edge(fn, prev, x))}`;
        pen = false;
        continue;
      }
      if (!pen && i > 0) d += `M${point(edge(fn, x, prev))}L${point(x)}`;
      else d += `${pen ? 'L' : 'M'}${point(x)}`;
      pen = true;
    }
    return d;
  };
  const xs = range(Math.ceil(x0), Math.floor(x1));
  const ys = range(Math.ceil(y0), Math.floor(y1));
  return (
    <figure className="rounded-lg border border-border bg-surface p-3 shadow-1">
      <figcaption id={titleId} className="mb-2 font-semibold">
        {block.title}
      </figcaption>
      <svg
        viewBox={`-6 -6 ${W + 12} ${H + 12}`}
        role="img"
        aria-labelledby={titleId}
        className="block h-auto w-full max-w-lg"
      >
        <defs>
          <clipPath id={`${titleId}-clip`}>
            <rect x={0} y={0} width={W} height={H} />
          </clipPath>
        </defs>
        {xs.map((x) => (
          <line key={`x${x}`} x1={sx(x)} x2={sx(x)} y1={0} y2={H} stroke="var(--c-border)" />
        ))}
        {ys.map((y) => (
          <line key={`y${y}`} x1={0} x2={W} y1={sy(y)} y2={sy(y)} stroke="var(--c-border)" />
        ))}
        {/* Axes */}
        {y0 <= 0 && y1 >= 0 && (
          <line
            x1={0}
            x2={W}
            y1={sy(0)}
            y2={sy(0)}
            stroke="var(--c-text-muted)"
            strokeWidth={1.5}
          />
        )}
        {x0 <= 0 && x1 >= 0 && (
          <line
            x1={sx(0)}
            x2={sx(0)}
            y1={0}
            y2={H}
            stroke="var(--c-text-muted)"
            strokeWidth={1.5}
          />
        )}
        {xs
          // The end values would be cut off at the edges.
          .filter((x) => x !== 0 && x !== x0 && x !== x1)
          .map((x) => (
            <text
              key={`tx${x}`}
              x={sx(x)}
              y={Math.min(H - 2, Math.max(10, sy(0) + 12))}
              fontSize={9}
              textAnchor="middle"
              fill="var(--c-text-muted)"
            >
              {x}
            </text>
          ))}
        {ys
          .filter((y) => y !== 0 && y !== y0 && y !== y1)
          .map((y) => (
            <text
              key={`ty${y}`}
              x={Math.min(W - 4, Math.max(8, sx(0) - 4))}
              y={sy(y) + 3}
              fontSize={9}
              textAnchor="end"
              fill="var(--c-text-muted)"
            >
              {y}
            </text>
          ))}
        <g clipPath={`url(#${titleId}-clip)`}>
          {block.functions.map((f, i) => (
            <path
              key={f.label}
              d={path(f.fn)}
              fill="none"
              stroke={COLORS[i % COLORS.length]}
              strokeWidth={2.5}
              strokeLinejoin="round"
            />
          ))}
          {block.points?.map((p) => (
            <circle
              key={p.label}
              cx={sx(p.x)}
              cy={sy(p.y)}
              r={4}
              fill="var(--c-surface)"
              stroke="var(--c-text)"
              strokeWidth={2}
            />
          ))}
        </g>
      </svg>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {block.functions.map((f, i) => (
          <li key={f.label} className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="inline-block h-1 w-5 rounded-full"
              style={{ background: COLORS[i % COLORS.length] }}
            />
            {f.label}
          </li>
        ))}
      </ul>
      {block.points && (
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          {block.points.map((p) => (
            <li key={p.label} className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="inline-block size-2.5 rounded-full border-2 border-text"
              />
              {p.label}
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}

function range(from: number, to: number): number[] {
  const out: number[] = [];
  for (let i = from; i <= to; i++) out.push(i);
  return out;
}

type Paths = typeof import('@/content/cards/mapPaths');
let mapPaths: Paths | null = null;

/**
 * The part of the Hungary view around the places, with a margin, at the view's
 * aspect ratio and never closer than 45% of its width.
 */
function fitView(points: [number, number][]) {
  const full = MAP_VIEWS.hungary;
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const pad = full.w * 0.08;
  const aspect = full.h / full.w;
  let w = Math.max(full.w * 0.45, Math.max(...xs) - Math.min(...xs) + 2 * pad);
  let h = Math.max(...ys) - Math.min(...ys) + 2 * pad;
  if (h > w * aspect) w = h / aspect;
  w = Math.min(w, full.w);
  h = w * aspect;
  const cx = (Math.max(...xs) + Math.min(...xs)) / 2;
  const cy = (Math.max(...ys) + Math.min(...ys)) / 2;
  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
  return {
    x: clamp(cx - w / 2, full.x, full.x + full.w - w),
    y: clamp(cy - h / 2, full.y, full.y + full.h - h),
    w,
    h,
  };
}

/** A map of the Carpathian Basin with numbered places and a key beside it. */
function GuideMap({ block }: { block: Extract<GuideBlock, { kind: 'map' }> }) {
  const [paths, setPaths] = useState(mapPaths);
  useEffect(() => {
    if (paths) return;
    let active = true;
    void import('@/content/cards/mapPaths').then((module) => {
      mapPaths = module;
      if (active) setPaths(module);
    });
    return () => {
      active = false;
    };
  }, [paths]);
  const v = fitView(block.places.map((place) => project(place.lon, place.lat)));
  // Markers keep about the same size on screen whatever the zoom.
  const unit = v.w / 320;
  return (
    <figure className="grid gap-3 rounded-lg border border-border bg-surface p-3 shadow-1 md:grid-cols-[3fr_2fr]">
      <figcaption className="font-semibold md:col-span-2">{block.title}</figcaption>
      {paths ? (
        <svg
          role="img"
          aria-label={`${block.title}: ${block.places.map((p) => p.name).join(', ')}`}
          viewBox={`${v.x} ${v.y} ${v.w} ${v.h}`}
          className="block h-auto w-full rounded-md border border-border"
          style={{ background: 'var(--c-map-water, #cfe8f3)' }}
        >
          <path d={paths.LAND_PATH} fill="#f4f1e8" stroke="#8a8a8a" strokeWidth={unit * 0.8} />
          <path d={paths.LAKE_PATH} fill="#cfe8f3" stroke="#7aa7c7" strokeWidth={unit * 0.5} />
          <path d={paths.RIVER_PATH} fill="none" stroke="#6b9cc0" strokeWidth={unit * 1.2} />
          <path
            d={paths.BORDER_PATH}
            fill="none"
            stroke="#a39c8d"
            strokeWidth={unit * 0.6}
            strokeDasharray={`${unit * 3} ${unit * 1.5}`}
          />
          {block.places.map((place, i) => {
            const [x, y] = project(place.lon, place.lat);
            return (
              <g key={place.name}>
                <circle
                  cx={x}
                  cy={y}
                  r={unit * 9}
                  fill="#b91c1c"
                  stroke="#fff"
                  strokeWidth={unit * 1.5}
                />
                <text
                  x={x}
                  y={y + unit * 3.5}
                  fontSize={unit * 10}
                  fontWeight={700}
                  textAnchor="middle"
                  fill="#fff"
                >
                  {i + 1}
                </text>
              </g>
            );
          })}
        </svg>
      ) : (
        <Skeleton className="aspect-[4/3] w-full" />
      )}
      <ol className="grid content-start gap-2 text-sm">
        {block.places.map((place, i) => (
          <li key={place.name} className="flex gap-2">
            <span
              aria-hidden="true"
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-danger text-xs font-bold text-white"
            >
              {i + 1}
            </span>
            <span>
              <span className="font-semibold">{place.name}</span>
              {place.note && <span className="text-muted">: {place.note}</span>}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** Small utility for pages: a section heading with an optional level tag. */
export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn('mb-3 text-2xl font-bold', className)}>{children}</h2>;
}
