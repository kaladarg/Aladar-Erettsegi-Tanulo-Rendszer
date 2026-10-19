import { useEffect, useState } from 'react';
import { MAP_VIEWS, project, type MapViewId } from '@/content/cards/projection';
import { Skeleton } from '@/design/ui/Skeleton';

type Paths = typeof import('@/content/cards/mapPaths');
let loaded: Paths | null = null;

/** The base map, loaded on first use (it is the largest part of the cards feature). */
function useMapPaths(): Paths | null {
  const [paths, setPaths] = useState(loaded);
  useEffect(() => {
    if (paths) return;
    let active = true;
    void import('@/content/cards/mapPaths').then((module) => {
      loaded = module;
      if (active) setPaths(module);
    });
    return () => {
      active = false;
    };
  }, [paths]);
  return paths;
}

/** A map of Europe or the Carpathian Basin with one place marked. */
export function CardMap({
  lat,
  lon,
  view,
  label,
}: {
  lat: number;
  lon: number;
  view: MapViewId;
  label: string;
}) {
  const paths = useMapPaths();
  const v = MAP_VIEWS[view];
  const [x, y] = project(lon, lat);
  const unit = v.w / 600;
  if (!paths) return <Skeleton className="aspect-[4/3] w-full" />;
  return (
    <svg
      role="img"
      aria-label={label}
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
      <circle cx={x} cy={y} r={unit * 9} fill="#b91c1c" fillOpacity={0.2} />
      <circle cx={x} cy={y} r={unit * 4.5} fill="#b91c1c" stroke="#fff" strokeWidth={unit * 1.5} />
    </svg>
  );
}
