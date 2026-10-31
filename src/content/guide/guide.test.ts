import { describe, expect, it } from 'vitest';
import {
  GUIDE_SUBJECTS_WITH_UNITS,
  loadGuidePage,
  loadGuideUnits,
  matchesTopic,
  neighbours,
  pageFits,
  visibleBlocks,
  type GuideBlock,
} from '.';

const GUIDE_UNITS = await loadGuideUnits();
const pages = GUIDE_UNITS.flatMap((unit) => unit.pages.map((page) => ({ unit, page })));
const allBlocks = (blocks: GuideBlock[][]) => blocks.flat();

describe('study guide content', () => {
  it('has unique page ids that resolve back to their unit', async () => {
    const ids = pages.map(({ page }) => page.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const { unit, page } of pages) {
      expect(page.unitId).toBe(unit.id);
      expect(page.subject).toBe(unit.subject);
      expect((await loadGuidePage(page.id))?.page).toBe(page);
    }
  });

  it("loads a subject's units by file name", async () => {
    for (const subject of GUIDE_SUBJECTS_WITH_UNITS) {
      const units = await loadGuideUnits(subject);
      expect(units.length).toBeGreaterThan(0);
      for (const unit of units) expect(unit.subject).toBe(subject);
    }
    const counted = (
      await Promise.all(GUIDE_SUBJECTS_WITH_UNITS.map((s) => loadGuideUnits(s)))
    ).flat();
    expect(counted.length).toBe(GUIDE_UNITS.length);
  });

  it.each(pages.map(({ page }) => [page.id, page] as const))('%s is complete', (_id, page) => {
    expect(page.summary.length).toBeGreaterThan(0);
    expect(page.details.length).toBeGreaterThan(0);
    expect(page.exam.length).toBeGreaterThan(0);
    expect(page.topicMatch.length).toBeGreaterThan(0);
    expect(page.minutes).toBeGreaterThan(0);
    expect(page.quiz.length).toBeGreaterThanOrEqual(3);
    for (const q of page.quiz) {
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(Number.isInteger(q.answer)).toBe(true);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThan(q.options.length);
      expect(new Set(q.options).size).toBe(q.options.length);
      expect(q.explanation.length).toBeGreaterThan(0);
    }
    for (const source of page.sources) expect(source.url).toMatch(/^https:\/\//);
    // Középszint readers of a page for both levels still get a quiz.
    if (page.level !== 'emelt') expect(page.quiz.filter((q) => !q.emelt).length).toBeGreaterThan(0);
  });

  it('plots give finite values somewhere in their range and maps stay in Hungary', () => {
    for (const { page } of pages)
      for (const block of allBlocks([page.summary, page.details, page.exam])) {
        if (block.kind === 'plot')
          for (const f of block.functions) {
            const samples = Array.from({ length: 50 }, (_, i) =>
              f.fn(block.x[0] + ((block.x[1] - block.x[0]) * i) / 49),
            );
            expect(samples.some(Number.isFinite), `${page.id}: ${f.label}`).toBe(true);
          }
        if (block.kind === 'map')
          for (const place of block.places) {
            expect(place.lat).toBeGreaterThan(44);
            expect(place.lat).toBeLessThan(50);
            expect(place.lon).toBeGreaterThan(15);
            expect(place.lon).toBeLessThan(28);
          }
      }
  });

  it('hides emelt material from középszint readers', () => {
    for (const { page } of pages) {
      const kozep = visibleBlocks([...page.summary, ...page.details, ...page.exam], 'kozep');
      expect(kozep.some((b) => b.emelt)).toBe(false);
      if (page.level === 'emelt') expect(pageFits(page, 'kozep')).toBe(false);
      expect(pageFits(page, 'emelt')).toBe(true);
    }
  });

  it('links pages in order within the level', () => {
    const unit = GUIDE_UNITS[0]!;
    const kozep = unit.pages.filter((p) => pageFits(p, 'kozep'));
    expect(neighbours(unit, kozep[0]!.id, 'kozep').previous).toBeUndefined();
    expect(neighbours(unit, kozep[0]!.id, 'kozep').next).toBe(kozep[1]);
  });

  it('matches task topics case-insensitively', () => {
    const page = pages.find(({ page }) => page.subject === 'matematika')!.page;
    expect(matchesTopic(page, page.topicMatch[0]!.toUpperCase())).toBe(true);
    expect(matchesTopic(page, 'nincs ilyen témakör xyz')).toBe(false);
  });

  it('matches "=" patterns only as whole topic names', async () => {
    const page = (await loadGuidePage('szabadsagharc-esemenyei'))!.page;
    expect(matchesTopic(page, 'Szabadságharc')).toBe(true);
    expect(matchesTopic(page, 'Rákóczi-szabadságharc')).toBe(false);
  });
});

describe('plainOption', () => {
  it('reads TeX options as text and leaves plain options alone', async () => {
    const { plainOption } = await import('@/features/guide/plainOption');
    expect(plainOption('1830')).toBeUndefined();
    expect(plainOption('$\\frac{1}{2} \\cdot x^2$')).toBe('(1)/(2) · x^2');
    expect(plainOption('$\\log_2 8 = 3$')).toBe('log_2 8 = 3');
  });
});
