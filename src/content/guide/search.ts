import { pageFits, visibleBlocks, type LevelView } from '.';
import type { GuideBlock, GuidePage, GuideUnit } from './types';

export interface GuideSearchHit {
  unit: GuideUnit;
  page: GuidePage;
  /** A short piece of the text around the first match. */
  snippet: string;
}

/** Lower case without accents, one character for one character, so positions stay aligned. */
const fold = (text: string) =>
  Array.from(
    text,
    (c) => c.toLocaleLowerCase('hu').normalize('NFD').replace(/\p{M}/gu, '')[0] ?? c,
  ).join('');

/** Rich-text markup and LaTeX delimiters left out of searched and shown text. */
const plain = (text: string) => text.replace(/\*\*|[*$]/g, '').replace(/\s+/g, ' ');

function blockText(block: GuideBlock): string[] {
  switch (block.kind) {
    case 'text':
    case 'heading':
    case 'tip':
    case 'warning':
      return [block.text];
    case 'keypoints':
      return [block.title ?? '', ...block.items];
    case 'timeline':
      return block.items.map((i) => `${i.date}: ${i.text}`);
    case 'terms':
      return block.items.map((i) => `${i.term}: ${i.text}`);
    case 'people':
      return block.items.map((i) => `${i.name}: ${i.text}`);
    case 'map':
      return [block.title, ...block.places.map((p) => [p.name, p.note].filter(Boolean).join(': '))];
    case 'compare':
      return [block.title ?? '', ...block.rows.map((r) => `${r.label}: ${r.cells.join(' / ')}`)];
    case 'example':
      return [block.title, block.problem, block.solution];
    case 'plot':
      return [block.title];
    case 'formula':
      return [block.caption ?? ''];
  }
}

/** Every searchable sentence of a page as a student at `view` sees it, title first. */
export function pageTexts(page: GuidePage, view: LevelView): string[] {
  const blocks = visibleBlocks([...page.summary, ...page.details, ...page.exam], view);
  return [page.title, ...blocks.flatMap(blockText)].map(plain).filter(Boolean);
}

/**
 * Pages whose text contains every word of the query (case and accents ignored).
 * Title matches come first.
 */
export function searchGuide(
  units: GuideUnit[],
  query: string,
  view: LevelView,
  limit = 30,
): GuideSearchHit[] {
  const words = fold(query)
    .split(/\s+/)
    .filter((w) => w.length >= 2);
  if (!words.length) return [];
  const hits: (GuideSearchHit & { rank: number })[] = [];
  for (const unit of units) {
    for (const page of unit.pages) {
      if (!pageFits(page, view)) continue;
      const texts = pageTexts(page, view);
      const folded = texts.map(fold);
      const all = folded.join(' ');
      if (!words.every((w) => all.includes(w))) continue;
      const at = folded.findIndex((t) => t.includes(words[0]!));
      const text = texts[at] ?? '';
      const pos = folded[at]?.indexOf(words[0]!) ?? 0;
      const start = Math.max(0, pos - 60);
      const snippet = `${start > 0 ? '…' : ''}${text.slice(start, pos + 100).trim()}${pos + 100 < text.length ? '…' : ''}`;
      hits.push({ unit, page, snippet, rank: at === 0 ? 0 : 1 });
    }
  }
  return hits
    .sort((a, b) => a.rank - b.rank)
    .slice(0, limit)
    .map(({ unit, page, snippet }) => ({ unit, page, snippet }));
}
