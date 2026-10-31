import { useEffect, useState } from 'react';
import { MAP_VIEWS, project, type MapView, type MapViewId } from '@/content/cards/projection';
import { projectWorld, worldViewAround } from '@/content/cards/worldProjection';
import { Skeleton } from '@/design/ui/Skeleton';

type Paths = { LAND_PATH: string; BORDER_PATH: string; RIVER_PATH: string; LAKE_PATH: string };
const loaded: { europe?: Paths; world?: Paths } = {};
const loaders = {
  europe: () => import('@/content/cards/mapPaths'),
  world: () => import('@/content/cards/worldPaths'),
};

/** A base map, loaded on first use (maps are the largest part of the cards feature). */
function useMapPaths(map: 'europe' | 'world'): Paths | null {
  const [paths, setPaths] = useState<{ map: string; paths: Paths } | null>(() =>
    loaded[map] ? { map, paths: loaded[map] } : null,
  );
  useEffect(() => {
    if (paths?.map === map) return;
    let active = true;
    void loaders[map]().then((module) => {
      loaded[map] = module;
      if (active) setPaths({ map, paths: module });
    });
    return () => {
      active = false;
    };
  }, [map, paths]);
  return paths?.map === map ? paths.paths : null;
}

/** A map of the Carpathian Basin, Europe or part of the world with one place marked. */
export function CardMap({
  lat,
  lon,
  view,
  label,
  className,
}: {
  lat: number;
  lon: number;
  view: MapViewId | 'world';
  label: string;
  className?: string;
}) {
  const world = view === 'world';
  const paths = useMapPaths(world ? 'world' : 'europe');
  const v: MapView = world ? worldViewAround(lat, lon) : MAP_VIEWS[view];
  const [x, y] = world ? projectWorld(lon, lat) : project(lon, lat);
  const unit = v.w / 600;
  if (!paths) return <Skeleton className="aspect-[4/3] w-full" />;
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`${v.x} ${v.y} ${v.w} ${v.h}`}
      className={className ?? 'block h-auto w-full rounded-md border border-border'}
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
