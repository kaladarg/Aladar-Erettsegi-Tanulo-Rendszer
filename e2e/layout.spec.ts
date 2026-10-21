import { expect, test, skipOnboarding } from './fixtures';

// A narrow phone with larger text: labels must wrap, never run into each other.
test.use({ viewport: { width: 320, height: 640 } });

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

/** Pairs of boxes that overlap, and elements whose content spills out of them. */
async function collisions(page: import('@playwright/test').Page, selector: string) {
  return page.locator(selector).evaluateAll((elements) => {
    const boxes = elements.map((el) => el.getBoundingClientRect());
    const problems: string[] = [];
    elements.forEach((el, i) => {
      if (el.scrollWidth > el.clientWidth + 1) problems.push(`spills: ${el.textContent}`);
      for (let j = i + 1; j < boxes.length; j++) {
        const [a, b] = [boxes[i]!, boxes[j]!];
        const overlap =
          Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 &&
          Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1;
        if (overlap) problems.push(`${el.textContent} / ${elements[j]!.textContent}`);
      }
    });
    return problems;
  });
}

for (const scale of [1, 1.5]) {
  test(`switchers, stat tiles and tabs fit at ${scale * 100}% text`, async ({ page }) => {
    const enlarge = () =>
      page.addStyleTag({ content: `html { font-size: ${scale * 100}% !important }` });

    await page.goto('/gyakorlas/temakorok');
    await enlarge();
    await expect(page.getByRole('radio', { name: 'Német' })).toBeVisible();
    expect(await collisions(page, '[role=radiogroup] >> nth=0 >> [role=radio]')).toEqual([]);
    expect(await collisions(page, 'nav[aria-label] li a >> visible=true')).toEqual([]);

    await page.goto('/feladatsorok/angol-kozep-2026-majus-minta');
    await enlarge();
    await expect(page.getByText('Teljes idő')).toBeVisible();
    expect(await collisions(page, 'dl > div')).toEqual([]);
    expect(await collisions(page, 'dl dt')).toEqual([]);
  });
}
