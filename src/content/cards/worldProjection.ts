import type { MapView } from './projection';

/** World base map: plate carrée from 180° W to 180° E and from 58° S to 84° N, 1000 units wide. */
const K = 1000 / 360;
const NORTH = 84;
const SOUTH = -58;

export function projectWorld(lon: number, lat: number): [number, number] {
  return [(lon + 180) * K, (NORTH - lat) * K];
}

export const WORLD_HEIGHT = (NORTH - SOUTH) * K;

/** A window of the world map around a point, `span` degrees wide, kept inside the map. */
export function worldViewAround(lat: number, lon: number, span = 70): MapView {
  const w = span * K;
  const h = w * 0.75;
  const [cx, cy] = projectWorld(lon, lat);
  const x = Math.min(Math.max(cx - w / 2, 0), 1000 - w);
  const y = Math.min(Math.max(cy - h / 2, 0), WORLD_HEIGHT - h);
  return { x, y, w, h };
}
