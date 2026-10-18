import type { Page } from '@playwright/test';
import { expect, test } from './fixtures';

const MATH = 'matematika-kozep-2026-majus-minta';
const HUNGARIAN = 'magyar-kozep-2026-majus-minta';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('dialog').getByRole('button', { name: 'Kihagyom' }).click();
});

async function submit(page: Page) {
  await page.getByRole('button', { name: 'Beadás' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  await expect(page).toHaveURL(/eredmeny/);
  await expect(page.getByRole('heading', { level: 1, name: 'Eredmény' })).toBeVisible();
}

test('handing in scores answers automatically, including the working', async ({ page }) => {
  await page.goto(`/feladatsorok/${MATH}/gyakorlas?nezet=urlap`);
  await page.getByRole('textbox', { name: 'x =' }).fill('6');
  const task6a = page.getByRole('article', { name: '6. a) feladat' });
  await task6a.getByRole('textbox', { name: 'Számítás:' }).fill('c² = 36 + 64 = 100');
  await task6a.getByRole('textbox', { name: 'Az átfogó:' }).fill('10');
  await submit(page);

  // 1. feladat (2) + 6. a) (1 point for the working, 2 for the result).
  await expect(page.getByRole('heading', { level: 2, name: /^5 \/ 34 pont$/ })).toBeVisible();

  const breakdown = page.getByRole('region', { name: 'Feladatonként' });
  await expect(breakdown.locator('summary', { hasText: '1. feladat' })).toContainText('Hibátlan');
  await expect(breakdown.locator('summary', { hasText: '6. a) feladat' })).toContainText(
    '3 / 3 pont',
  );
  await breakdown.getByRole('switch', { name: 'Csak ahol pontot vesztettem' }).click();
  await expect(breakdown.locator('summary', { hasText: '1. feladat' })).toHaveCount(0);
  const task2 = breakdown.getByRole('listitem').filter({
    has: page.locator('summary', { hasText: '2. feladat' }),
  });
  await task2.locator('summary').first().click();
  await expect(task2.getByText('Elfogadható válasz')).toBeVisible();
  await expect(
    task2.getByRole('link', { name: /Hibát találtál ebben a feladatban/ }),
  ).toHaveAttribute('href', /^mailto:kralik\.aladar\.gergely@gmail\.com\?subject=/);

  // The overview lists the result and offers a fresh practice run.
  await page.getByRole('link', { name: 'Vissza a feladatsorhoz' }).click();
  const history = page.getByRole('region', { name: 'Korábbi eredmények' });
  await expect(history.getByText('5 / 34 pont', { exact: false })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gyakorlás indítása' })).toBeVisible();
});

test('essays wait for review and update the score when rated', async ({ page }) => {
  await page.goto(`/feladatsorok/${HUNGARIAN}/gyakorlas?nezet=urlap`);
  await page
    .getByRole('textbox', { name: 'Érvelő esszé:' })
    .fill('Szerintem érdemes belföldön utazni. '.repeat(30));
  await submit(page);

  const review = page.getByRole('region', { name: 'Pontozásra vár' });
  await expect(
    review.getByText('Ezeket a részeket csak ember tudja megítélni.', { exact: false }),
  ).toBeVisible();
  const before = await page.getByRole('heading', { level: 2, name: /pont$/ }).first().textContent();
  const select = review.getByRole('combobox').first();
  const max = await select.locator('option').last().getAttribute('value');
  await select.selectOption(max!);
  await expect(page.getByRole('heading', { level: 2, name: /pont$/ }).first()).not.toHaveText(
    before!,
  );
});

test('exam mode times each part and hands in part by part', async ({ page }) => {
  await page.goto(`/feladatsorok/${MATH}`);
  await expect(page.getByRole('region', { name: 'Vizsgaszimuláció' })).toContainText('180 perc');
  await page.getByRole('link', { name: 'Vizsga indítása' }).click();
  await expect(page).toHaveURL(/vizsga/);
  await expect(page.getByTitle('Hátralévő idő')).toContainText(/4[45]:\d\d/);

  await page.getByRole('radio', { name: 'Űrlap' }).click();
  await expect(page.getByRole('heading', { level: 2, name: 'I. rész', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'II. rész', exact: true })).toHaveCount(
    0,
  );

  await page.getByRole('button', { name: 'Rész beadása' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  await expect(
    page.getByRole('heading', { level: 2, name: 'II. rész', exact: true }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'I. rész', exact: true })).toHaveCount(
    0,
  );
  await expect(page.getByTitle('Hátralévő idő')).toContainText(/2:1[45]:\d\d/);

  await submit(page);
  await expect(page.getByText('Vizsga', { exact: false }).first()).toBeVisible();
});

test('a timed exam can be abandoned without a result, with undo', async ({ page }) => {
  await page.goto(`/feladatsorok/${MATH}/vizsga?nezet=urlap`);
  await page.getByRole('textbox', { name: 'x =' }).fill('6');
  await expect(page.getByRole('status').filter({ hasText: 'Mentve' })).toBeAttached();
  await page.getByRole('button', { name: 'Tudnivalók' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Vizsga feladása' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Feladom' }).click();

  await expect(page).toHaveURL(new RegExp(`/feladatsorok/${MATH}$`));
  const card = page.getByRole('region', { name: 'Vizsgaszimuláció' });
  await expect(card.getByRole('link', { name: 'Vizsga indítása' })).toBeVisible();
  await expect(page.getByRole('region', { name: 'Korábbi eredmények' })).toHaveCount(0);

  await page.getByRole('button', { name: 'Visszavonás' }).click();
  await expect(card.getByRole('link', { name: 'Vizsga folytatása' })).toBeVisible();
  // From the paper page as well.
  await card.getByRole('button', { name: 'Vizsga feladása' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Feladom' }).click();
  await expect(card.getByRole('link', { name: 'Vizsga indítása' })).toBeVisible();
});
