import { readFile } from 'node:fs/promises';
import { expect, finishOnboarding, test, toastWith } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/beallitasok');
  await expect(page.getByRole('heading', { level: 1, name: 'Beállítások' })).toBeVisible();
});

test('theme, text size and font apply immediately and persist', async ({ page }) => {
  const html = page.locator('html');
  await page.getByRole('radio', { name: 'Sötét' }).click();
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('radio', { name: 'Világos' }).click();
  await expect(html).toHaveAttribute('data-theme', 'light');

  await page.getByRole('button', { name: 'Nagyobb betű' }).click();
  await expect(html).toHaveAttribute('style', /--text-scale: 1.125/);

  await page.getByRole('switch', { name: 'Diszlexiabarát betűtípus' }).click();
  await expect(html).toHaveAttribute('data-font', 'dyslexic');

  await page.reload();
  await expect(html).toHaveAttribute('data-theme', 'light');
  await expect(html).toHaveAttribute('data-font', 'dyslexic');
  await expect(html).toHaveAttribute('style', /--text-scale: 1.125/);
  await expect(page.getByRole('switch', { name: 'Diszlexiabarát betűtípus' })).toBeChecked();
});

test('exports a backup and imports it back', async ({ page }, testInfo) => {
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Adatok mentése fájlba' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(
    /^erettsegi-gyakorlo-mentes-\d{4}-\d{2}-\d{2}\.json$/,
  );
  const path = testInfo.outputPath('backup.json');
  await download.saveAs(path);
  const backup = JSON.parse(await readFile(path, 'utf8'));
  expect(backup.app).toBe('erettsegi-gyakorlo');
  expect(backup.data.settings[0].subjects).toEqual(['matematika']);

  // Change something, then restore the file.
  await page.getByRole('checkbox', { name: 'Történelem' }).check({ force: true });
  await page.locator('input[type="file"]').setInputFiles(path);
  await page.getByRole('alertdialog').getByRole('button', { name: 'Betöltés' }).click();
  await expect(toastWith(page, 'Betöltöttük a mentett adatokat.')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Történelem' })).not.toBeChecked();
});

test('rejects a file that is not a backup', async ({ page }) => {
  await page.locator('input[type="file"]').setInputFiles({
    name: 'random.json',
    mimeType: 'application/json',
    buffer: Buffer.from('{"hello":"world"}'),
  });
  await expect(toastWith(page, /nem az Érettségi Gyakorlóból származik/)).toBeVisible();
});

test('deleting all data can be undone', async ({ page }) => {
  await page.getByRole('button', { name: 'Minden adat törlése' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Törlés' }).click();
  await expect(toastWith(page, 'Minden adatot töröltünk.')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Matematika' })).not.toBeChecked();

  await page.getByRole('button', { name: 'Visszavonás' }).click();
  await expect(toastWith(page, 'Visszaállítottuk az adataidat.')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Matematika' })).toBeChecked();
});

test('AI key is validated and stored only after confirmation', async ({ page }) => {
  const input = page.getByLabel('API-kulcs');
  await input.fill('not-a-key');
  await page.getByRole('button', { name: 'Kulcs mentése' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'sk-ant-' })).toBeVisible();

  await input.fill('sk-ant-api03-abcdefghijklmnopqrstuvwxyz0123');
  await page.getByRole('button', { name: 'Kulcs mentése' }).click();
  await expect(toastWith(page, 'Elmentettük a kulcsot ezen az eszközön.')).toBeVisible();
  await expect(page.getByText('sk-ant-api…0123')).toBeVisible();
  await page.getByRole('button', { name: 'Kulcs törlése' }).click();
  await expect(page.getByLabel('API-kulcs')).toBeVisible();
});
