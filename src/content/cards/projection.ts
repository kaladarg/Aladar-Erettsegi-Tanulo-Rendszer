/** Area of the base map: west, south, east, north in degrees. */
export const MAP_BOUNDS = [-12, 24, 52, 63] as const;

/** Map units per radian of longitude. */
const SCALE = 1000 / ((MAP_BOUNDS[2] - MAP_BOUNDS[0]) * (Math.PI / 180));
const mercatorY = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
const TOP = mercatorY(MAP_BOUNDS[3]);

/** Mercator projection into map units: x 0–1000 across the area, y down from its top. */
export function project(lon: number, lat: number): [number, number] {
  return [((lon - MAP_BOUNDS[0]) * Math.PI * SCALE) / 180, (TOP - mercatorY(lat)) * SCALE];
}

const [, bottom] = project(MAP_BOUNDS[2], MAP_BOUNDS[1]);
export const MAP_HEIGHT = bottom;

/** A view of the map, as an SVG viewBox in map units. */
export interface MapView {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** The view that shows the given degrees area. */
export function viewOf(west: number, south: number, east: number, north: number): MapView {
  const [x1, y1] = project(west, north);
  const [x2, y2] = project(east, south);
  return { x: x1, y: y1, w: x2 - x1, h: y2 - y1 };
}

export const MAP_VIEWS = {
  europe: viewOf(-12, 24, 52, 63),
  hungary: viewOf(13, 43.3, 27.5, 50.3),
} satisfies Record<string, MapView>;
export type MapViewId = keyof typeof MAP_VIEWS;
