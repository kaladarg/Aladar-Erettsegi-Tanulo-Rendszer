import { expect, skipOnboarding, test } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

test('buttons show a press ripple, and reduced motion turns it off', async ({ page }) => {
  const start = page.getByRole('link', { name: 'Gyakorlás indítása' });
  await start.dispatchEvent('pointerdown', { button: 0, clientX: 10, clientY: 10 });
  await expect(start.locator('.ripple')).toHaveCount(1);
  await expect(start.locator('.ripple')).toHaveCount(0, { timeout: 2000 });

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await start.dispatchEvent('pointerdown', { button: 0, clientX: 10, clientY: 10 });
  await expect(start.locator('.ripple')).toHaveCount(0);
});

test('the home page shows today’s goal and a good round ends with confetti', async ({ page }) => {
  await expect(page.getByRole('img', { name: 'Mai cél: 0 / 10 feladat' })).toBeVisible();
  await page.goto('/gyakorlas/temakorok?targy=matematika');
  await page.getByRole('searchbox', { name: 'Keresés' }).fill('elsőfokú');
  await page.getByRole('button', { name: /elsőfokú egyenlet/ }).click();
  await page.getByRole('textbox', { name: 'x =' }).fill('6');
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByText('2 / 2 pont').first()).toBeVisible();
  await page.getByRole('button', { name: 'Befejezés' }).click();
  await expect(page.getByRole('heading', { name: 'Kész a kör!' })).toBeVisible();
  await expect(page.locator('.pointer-events-none.fixed span')).not.toHaveCount(0);

  await page.goto('/');
  await expect(page.getByRole('img', { name: 'Mai cél: 1 / 10 feladat' })).toBeVisible();
});
