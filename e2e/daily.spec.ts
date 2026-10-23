import { expect, test, skipOnboarding } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

test('Mai adag: cards first, then a mixed round, then done for today', async ({ page }) => {
  await page.getByRole('link', { name: 'Mai adag (15 perc)' }).click();
  await expect(page).toHaveURL(/gyakorlas\/mai-adag/);
  await expect(page.getByRole('heading', { name: /Mai adag: körülbelül \d+ perc/ })).toBeVisible();
  await expect(page.getByText(/tanulókártya bemelegítésnek/)).toBeVisible();
  await expect(page.getByText(/vegyes feladat/)).toBeVisible();
  await page.getByRole('button', { name: 'Kezdjük' }).click();

  // The card warm-up: flip and mark every card.
  const next = page.getByRole('button', { name: 'Tovább a feladatokra' });
  while (!(await next.isVisible())) {
    await page.getByRole('button', { name: 'Megfordítom' }).click();
    await page.getByRole('button', { name: 'Tudom', exact: true }).click();
  }
  await expect(page.getByRole('heading', { name: 'Kártyák kész!' })).toBeVisible();
  await next.click();

  // The task round (mixing subjects with the full archive; the demo papers
  // have few, long tasks); skip through it.
  await expect(page).toHaveURL(/gyakorlas\/kor\//);
  await expect(page.getByRole('heading', { level: 1, name: 'Mai adag' })).toBeVisible();
  const papers = new Set<string>();
  const counter = page.getByText(/^\d+ \/ \d+$/);
  const total = Number((await counter.textContent())!.split(' / ')[1]);
  expect(total).toBeGreaterThan(0);
  for (let i = 1; i <= total; i++) {
    await expect(counter).toHaveText(`${i} / ${total}`);
    const line = await page.locator('main p', { hasText: ' · ' }).first().textContent();
    papers.add(line!.split(' · ')[0]!);
    await page.getByRole('button', { name: 'Kihagyom' }).click();
  }
  expect(papers.size).toBeGreaterThan(0);
  await expect(page.getByRole('heading', { name: 'Kész a mai adag!' })).toBeVisible();
  await page.getByRole('button', { name: 'Vissza a kezdőlapra' }).click();

  await expect(page.getByRole('link', { name: 'Mai adag kész' })).toBeVisible();
  await page.getByRole('link', { name: 'Mai adag kész' }).click();
  await expect(page.getByRole('heading', { name: 'A mai adag kész' })).toBeVisible();
  await page.getByRole('button', { name: 'Még egy adag' }).click();
  await expect(page.getByRole('heading', { name: /Mai adag: körülbelül/ })).toBeVisible();
});

test('an unfinished Mai adag is continued from the home page', async ({ page }) => {
  await page.goto('/gyakorlas/mai-adag');
  await page.getByRole('button', { name: 'Kezdjük' }).click();
  const next = page.getByRole('button', { name: 'Tovább a feladatokra' });
  while (!(await next.isVisible())) {
    await page.getByRole('button', { name: 'Megfordítom' }).click();
    await page.getByRole('button', { name: 'Még tanulom' }).click();
  }
  await next.click();
  await expect(page.getByRole('heading', { level: 1, name: 'Mai adag' })).toBeVisible();
  await expect(page).toHaveURL(/gyakorlas\/kor\//);
  const url = page.url();

  // Leaving the round keeps it: the home page offers to continue it.
  await page.goto('/');
  await page.getByRole('link', { name: 'Mai adag folytatása' }).click();
  await expect(page).toHaveURL(url);
  await page.goto('/gyakorlas/mai-adag');
  await expect(
    page.getByRole('heading', { name: 'Van egy félbehagyott mai adagod' }),
  ).toBeVisible();
});
