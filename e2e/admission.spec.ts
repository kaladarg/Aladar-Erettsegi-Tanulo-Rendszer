import { expect, finishOnboarding, test } from './fixtures';

test('the admission calculator estimates points and remembers the inputs', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/gyakorlas');
  await page.getByRole('link', { name: /Felvételi pontszámító/ }).click();
  await expect(
    page.getByRole('heading', { level: 1, name: 'Felvételi pontszámító' }),
  ).toBeVisible();
  await expect(page.getByText('Írd be a két pontot adó tárgy eredményét')).toBeVisible();

  // Matematika emelt 80% + történelem közép 60% (→ 40) = 120 érettségi pont; doubled 240.
  await page.getByRole('spinbutton', { name: 'Matematika: eredmény százalékban' }).fill('80');
  await page
    .getByRole('radiogroup', { name: 'Matematika: vizsgaszint' })
    .getByRole('radio', { name: 'Emelt' })
    .click();
  await page.getByRole('spinbutton', { name: 'Történelem: eredmény százalékban' }).fill('60');
  await page.getByRole('spinbutton', { name: /Intézményi pontok/ }).fill('28');
  const result = page.getByRole('region', { name: 'Becsült pontszám' });
  await expect(result.getByText('268', { exact: true })).toBeVisible();

  // Saved on this device.
  await expect(async () => {
    await page.reload();
    await expect(result.getByText('268', { exact: true })).toBeVisible({ timeout: 1000 });
  }).toPass();
});

test('a paper can be opened as a printable sheet with the answer key', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/feladatsorok/matematika-kozep-2026-majus-minta');
  await page.getByRole('link', { name: 'Nyomtatható változat' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Matematika');
  await expect(page.getByRole('heading', { name: 'Megoldókulcs' })).toHaveCount(0);
  await page.getByLabel('Megoldókulcs a végén').check();
  await expect(page.getByRole('heading', { name: 'Megoldókulcs' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Nyomtatás' })).toBeEnabled();
});
