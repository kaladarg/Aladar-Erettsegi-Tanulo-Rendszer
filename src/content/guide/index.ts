import type { GuideBlock, GuidePage, GuideSubject, GuideUnit } from './types';

export type * from './types';

/** Every file in ./units is one unit (default export), so units can be added without touching this file. */
const modules = import.meta.glob<GuideUnit>('./units/*.ts', { eager: true, import: 'default' });

/** All units, in the order of the syllabus within each subject. */
export const GUIDE_UNITS: GuideUnit[] = Object.values(modules).sort((a, b) => a.order - b.order);

export const GUIDE_SUBJECTS: GuideSubject[] = ['tortenelem', 'matematika', 'magyar'];

export function findGuidePage(id: string): { unit: GuideUnit; page: GuidePage } | undefined {
  for (const unit of GUIDE_UNITS) {
    const page = unit.pages.find((p) => p.id === id);
    if (page) return { unit, page };
  }
  return undefined;
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
export function neighbours(id: string, view: LevelView) {
  const found = findGuidePage(id);
  if (!found) return {};
  // An emelt page opened at középszint keeps its place among all pages.
  const pages = pageFits(found.page, view)
    ? found.unit.pages.filter((p) => pageFits(p, view))
    : found.unit.pages;
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
