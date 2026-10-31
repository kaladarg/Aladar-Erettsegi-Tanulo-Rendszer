import afrika from '@/content/topography/afrika.json';
import amerika from '@/content/topography/amerika.json';
import ausztralia from '@/content/topography/ausztralia.json';
import azsia from '@/content/topography/azsia.json';
import europa from '@/content/topography/europa.json';
import fold from '@/content/topography/fold.json';
import magyarorszag from '@/content/topography/magyarorszag.json';
import { MAP_BOUNDS } from './projection';
import type { CardInput, GeographyEra } from './types';

/** One name of the official topográfia list (2024 requirements), with a short description and its position. */
export interface TopographyPlace {
  name: string;
  category: string;
  emelt: boolean;
  desc: string;
  lat: number | null;
  lon: number | null;
}

export interface TopographyRegion {
  region: GeographyEra;
  regionName: string;
  places: TopographyPlace[];
}

export const TOPOGRAPHY: TopographyRegion[] = [
  magyarorszag,
  europa,
  azsia,
  afrika,
  amerika,
  ausztralia,
  fold,
] as TopographyRegion[];

const slug = (text: string) =>
  text
    .toLocaleLowerCase('hu')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** The description as a question: the name itself is left out. */
const hide = (desc: string, name: string) =>
  desc.replace(new RegExp(escape(name.replace(/\s*\(.*\)$/, '')), 'giu'), '…');

const [west, south, east, north] = MAP_BOUNDS;
const inEurope = (lat: number, lon: number) =>
  lon >= west && lon <= east && lat >= south && lat <= north;

/** Which base map shows a place: Hungary, Europe, or the world map. */
function viewOf(region: GeographyEra, lat: number, lon: number): 'hungary' | 'europe' | 'world' {
  if (region === 'magyarorszag') return 'hungary';
  return region === 'europa' && inEurope(lat, lon) ? 'europe' : 'world';
}

/**
 * Place-name cards: with a position the map is the question and the name the answer;
 * without one (lines, mountain systems, large areas) the description is the question.
 */
export const GEOGRAPHY_CARDS: CardInput[] = TOPOGRAPHY.flatMap(({ region, regionName, places }) => {
  const seen = new Set<string>();
  return places.map((place): CardInput => {
    let id = `topografia-${region}-${slug(place.name)}`;
    if (seen.has(id)) id = `${id}-${slug(place.category)}`;
    seen.add(id);
    const hasPlace = place.lat !== null && place.lon !== null;
    return {
      id,
      deck: 'topografia',
      era: region,
      hungarian: region === 'magyarorszag',
      front: hasPlace ? place.category : hide(place.desc, place.name),
      back: place.name,
      note: hasPlace ? place.desc : `${place.category} · ${regionName}`,
      emelt: place.emelt || undefined,
      place: hasPlace
        ? { lat: place.lat!, lon: place.lon!, view: viewOf(region, place.lat!, place.lon!) }
        : undefined,
    };
  });
});
