import pageIndex from 'virtual:guide-index';
import type { GuideBlock, GuidePage, GuideSubject, GuideUnit } from './types';

export type * from './types';

/**
 * Every file in ./units is one unit (default export), named `<subject>-….ts`, so units can be
 * added without touching this file. Units load lazily: a subject's units when its list is opened,
 * one unit when a page is opened.
 */
const loaders = import.meta.glob<GuideUnit>('./units/*.ts', { import: 'default' });

export const GUIDE_SUBJECTS: GuideSubject[] = ['tortenelem', 'matematika', 'magyar', 'foldrajz'];

const fileSubject = (path: string) => path.slice('./units/'.length).split('-')[0];

/** Subjects that have written units. */
export const GUIDE_SUBJECTS_WITH_UNITS = GUIDE_SUBJECTS.filter((subject) =>
  Object.keys(loaders).some((path) => fileSubject(path) === subject),
);

/** The units of a subject (or of every subject), in the order of the syllabus. */
export async function loadGuideUnits(subject?: GuideSubject): Promise<GuideUnit[]> {
  const paths = Object.keys(loaders).filter((path) => !subject || fileSubject(path) === subject);
  const units = await Promise.all(paths.map((path) => loaders[path]!()));
  return units.sort((a, b) => a.order - b.order);
}

export async function loadGuidePage(
  id: string,
): Promise<{ unit: GuideUnit; page: GuidePage } | undefined> {
  const path = pageIndex[id];
  const load = path ? loaders[path] : undefined;
  if (!load) return undefined;
  const unit = await load();
  const page = unit.pages.find((p) => p.id === id);
  return page ? { unit, page } : undefined;
}

/** What a student studying at `level` sees: emelt material only at emelt level. */
export type LevelView = 'kozep' | 'emelt';

export const pageFits = (page: GuidePage, view: LevelView) =>
  view === 'emelt' || page.level !== 'emelt';

export const blockFits = (block: { emelt?: boolean }, view: LevelView) =>
  view === 'emelt' || !block.emelt;

/** Blocks with their emelt-only items left out for a középszint reader. */
export function visibleBlocks(blocks: GuideBlock[], view: LevelView): GuideBlock[] {
  return blocks
    .filter((block) => blockFits(block, view))
    .map((block) => {
      switch (block.kind) {
        case 'timeline':
        case 'terms':
        case 'people':
          return {
            ...block,
            items: block.items.filter((item) => blockFits(item, view)),
          } as GuideBlock;
        case 'map':
          return { ...block, places: block.places.filter((p) => blockFits(p, view)) };
        default:
          return block;
      }
    });
}

/** The pages before and after a page within its unit, for the reader's navigation. */
export function neighbours(unit: GuideUnit, id: string, view: LevelView) {
  const page = unit.pages.find((p) => p.id === id);
  if (!page) return {};
  // An emelt page opened at középszint keeps its place among all pages.
  const pages = pageFits(page, view) ? unit.pages.filter((p) => pageFits(p, view)) : unit.pages;
  const index = pages.findIndex((p) => p.id === id);
  return { previous: pages[index - 1], next: pages[index + 1] };
}

/** Topic names of tasks in the papers that a page covers. */
export function matchesTopic(page: GuidePage, topic: string): boolean {
  const name = topic.toLocaleLowerCase('hu');
  return page.topicMatch.some((pattern) => {
    const lower = pattern.toLocaleLowerCase('hu');
    return lower.startsWith('=') ? name === lower.slice(1) : name.includes(lower);
  });
}
