import type { Page } from '@playwright/test';
import { expect, test } from './fixtures';

const MATH = 'matematika-kozep-2026-majus-minta';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('dialog').getByRole('button', { name: 'Kihagyom' }).click();
});

async function drawLine(page: Page, target: ReturnType<Page['locator']>) {
  const box = (await target.boundingBox())!;
  await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5);
  await page.mouse.down();
  for (let i = 1; i <= 10; i++)
    await page.mouse.move(box.x + box.width * (0.3 + i * 0.03), box.y + box.height * 0.5);
  await page.mouse.up();
}

test('drawing on the paper is saved and can be undone', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Mouse drawing');
  await page.goto(`/feladatsorok/${MATH}/gyakorlas?nezet=pdf`);
  const tools = page.getByRole('toolbar', { name: 'Rajzeszközök' });
  await tools.getByRole('button', { name: 'Toll' }).click();
  await expect(page.getByText(/Rajz mód: a mezők most nem kattinthatók/)).toBeVisible();
  const surface = page.getByRole('img', { name: 'Rajzfelület, 1. oldal' });
  await surface.scrollIntoViewIfNeeded();
  await drawLine(page, surface);
  await expect(surface.locator('path')).toHaveCount(1);

  await tools.getByRole('button', { name: 'Visszavonás' }).click();
  await expect(surface.locator('path')).toHaveCount(0);
  await drawLine(page, surface);
  await expect(page.getByText('Mentve')).toBeVisible();

  await page.reload();
  await expect(page.locator('[data-page="1"] svg path')).toHaveCount(1);
  // Typing works again once drawing is turned off.
  await page.getByRole('button', { name: 'Kitöltés: rajzolás kikapcsolva' }).click();
  await page.getByRole('textbox', { name: '1. feladat, x =' }).fill('6');
});

test('the form-mode drawing pad shows up in the results', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Mouse drawing');
  await page.goto(`/feladatsorok/${MATH}/gyakorlas?nezet=urlap`);
  const task = page.getByRole('article', { name: '6. a) feladat' });
  await task.getByRole('button', { name: 'Rajzlap megnyitása' }).click();
  const pad = task.getByRole('img', { name: 'Rajzlap: 6. a) feladat' });
  await drawLine(page, pad);
  await expect(pad.locator('path')).toHaveCount(1);

  await page.getByRole('button', { name: 'Beadás' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Eredmény' })).toBeVisible();
  const breakdown = page.getByRole('region', { name: 'Feladatonként' });
  await breakdown.locator('summary', { hasText: '6. a) feladat' }).click();
  await expect(breakdown.getByText('Rajzod')).toBeVisible();
});
