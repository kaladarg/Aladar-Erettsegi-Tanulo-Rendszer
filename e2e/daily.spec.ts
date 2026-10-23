import { expect, test, skipOnboarding } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

test('Mai adag: pick a subject and a length, cards first, then a round', async ({ page }) => {
  await page.getByRole('link', { name: 'Mai adag', exact: true }).click();
  await expect(page).toHaveURL(/gyakorlas\/mai-adag/);
  await expect(page.getByRole('heading', { name: 'Mit gyakorolsz ma?' })).toBeVisible();

  await page.getByRole('button', { name: 'Történelem' }).click();
  await expect(page.getByRole('button', { name: 'Történelem' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  // No paper handed in yet: the surprise mix is the default.
  await expect(page.getByRole('button', { name: /Lepj meg!/ })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.getByRole('radio', { name: '5 perc', exact: true }).click();
  const preview = page.getByRole('status').filter({ hasText: 'Ez vár rád' });
  await expect(preview).toContainText('3 kártya bemelegítésnek');
  await expect(preview).toContainText(/\d+ feladat/);
  await page.getByRole('button', { name: 'Kezdjük' }).click();

  // The card warm-up: flip and mark every card.
  const next = page.getByRole('button', { name: 'Tovább a feladatokra' });
  while (!(await next.isVisible())) {
    await page.getByRole('button', { name: 'Megfordítom' }).click();
    await page.getByRole('button', { name: 'Tudom', exact: true }).click();
  }
  await expect(page.getByRole('heading', { name: 'Kártyák kész!' })).toBeVisible();
  await next.click();

  await expect(page).toHaveURL(/gyakorlas\/kor\//);
  await expect(page.getByRole('heading', { level: 1, name: 'Mai adag' })).toBeVisible();
  const counter = page.getByText(/^\d+ \/ \d+$/);
  const total = Number((await counter.textContent())!.split(' / ')[1]);
  expect(total).toBeGreaterThan(0);
  for (let i = 1; i <= total; i++) {
    await expect(counter).toHaveText(`${i} / ${total}`);
    await page.getByRole('button', { name: 'Kihagyom' }).click();
  }
  await expect(page.getByRole('heading', { name: 'Kész a mai adag!' })).toBeVisible();
  await page.getByRole('button', { name: 'Vissza a kezdőlapra' }).click();

  // Done for today; another one can start, with the last choice kept.
  await page.getByRole('link', { name: 'Mai adag kész' }).click();
  await expect(page.getByText('Ma már megvolt egy adag. Szép munka!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Történelem' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await expect(page.getByRole('radio', { name: '5 perc', exact: true })).toBeChecked();
});

test('Mai adag from chosen areas; an unfinished one can be continued', async ({ page }) => {
  await page.goto('/gyakorlas/mai-adag');
  await page.getByRole('button', { name: 'Matematika' }).click();
  const area = page.getByRole('button', { name: /Geometria, trigonometria/ });
  await area.click();
  await expect(area).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: /Lepj meg!/ })).toHaveAttribute(
    'aria-pressed',
    'false',
  );
  await page.getByRole('button', { name: 'Kezdjük' }).click();
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
  await page.getByRole('button', { name: 'Újat kezdek' }).click();
  await expect(page.getByRole('heading', { name: 'Mit gyakorolsz ma?' })).toBeVisible();
});
