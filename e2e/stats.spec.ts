import type { Page } from '@playwright/test';
import { expect, test, skipOnboarding } from './fixtures';

const MATH = 'matematika-kozep-2026-majus-minta';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

async function practiseMath(page: Page) {
  await page.goto(`/feladatsorok/${MATH}/gyakorlas?nezet=urlap`);
  await page.getByRole('textbox', { name: 'x =' }).fill('6');
  const task6a = page.getByRole('article', { name: '6. a) feladat' });
  await task6a.getByRole('textbox', { name: 'Számítás:' }).fill('c² = 36 + 64 = 100');
  await task6a.getByRole('textbox', { name: 'Az átfogó:' }).fill('10');
}

async function submit(page: Page) {
  await page.getByRole('button', { name: 'Beadás' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Eredmény' })).toBeVisible();
}

test('a new student gets a first recommendation and an empty statistics page', async ({ page }) => {
  const next = page.getByRole('region', { name: 'Ajánlott következő lépés' });
  await expect(next.getByRole('link', { name: /Új feladatsor:/ }).first()).toBeVisible();
  await expect(page.getByRole('region', { name: 'Gyakorlási sorozat' })).toContainText(
    'Ma kezdhetsz egy új sorozatot.',
  );
  await page.getByRole('navigation').first().getByRole('link', { name: 'Statisztika' }).click();
  await expect(page.getByRole('heading', { name: 'Még nincs mit kimutatni' })).toBeVisible();
});

test('an unfinished paper can be continued from the home page', async ({ page }) => {
  await practiseMath(page);
  await expect(page.getByRole('status').filter({ hasText: 'Mentve' })).toBeAttached();
  await page.goto('/');
  const resume = page.getByRole('region', { name: 'Folytasd, ahol abbahagytad' });
  await expect(resume).toContainText('Mintafeladatsor – Matematika, középszint');
  await resume.getByRole('link', { name: 'Folytatás' }).click();
  await expect(page).toHaveURL(new RegExp(`${MATH}/gyakorlas`));
  await expect(page.getByRole('textbox', { name: 'x =' })).toHaveValue('6');
});

test('after handing in, statistics show progress, topics and mistake types', async ({ page }) => {
  await practiseMath(page);
  await submit(page);

  await page.goto('/');
  const streak = page.getByRole('region', { name: 'Gyakorlási sorozat' });
  await expect(streak).toContainText('1 napja gyakorolsz egymás után');
  await expect(streak).toContainText('Ma már gyakoroltál.');
  const next = page.getByRole('region', { name: 'Ajánlott következő lépés' });
  await expect(next.getByRole('link', { name: /Gyakorold:/ }).first()).toBeVisible();

  await page.goto('/statisztika');
  await expect(page.getByRole('heading', { level: 1, name: 'Statisztika' })).toBeVisible();
  await expect(page.getByRole('img', { name: /Eredmények időrendben/ })).toBeVisible();
  await page.getByText('Táblázatként').click();
  await expect(page.getByRole('cell', { name: '15%' })).toBeVisible();

  const weak = page.getByRole('region', { name: 'Ezt érdemes gyakorolni' });
  await expect(weak.getByText('statisztika')).toBeVisible();
  // Task 8 still waits for review, so its topic is left out.
  await expect(weak.getByText('számtani sorozat')).toHaveCount(0);
  await expect(
    weak.getByRole('link', { name: 'Keresés: Khan Academy magyarul' }).first(),
  ).toHaveAttribute('href', /site%3Ahu\.khanacademy\.org/);
  const strong = page.getByRole('region', { name: 'Erősségeid' });
  await expect(strong.getByText('elsőfokú egyenlet')).toBeVisible();
  await expect(strong.getByText('Pitagorasz-tétel')).toBeVisible();

  const mistakes = page.getByRole('region', { name: 'Hibatípusok' });
  await expect(mistakes.getByRole('definition').nth(0)).toHaveText('2');
  await expect(mistakes.getByText(/Sok a kihagyott feladat/)).toBeVisible();
});

test('a result can be shared as an image or a link', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await practiseMath(page);
  await submit(page);
  await page.getByRole('button', { name: 'Eredmény megosztása' }).click();
  const dialog = page.getByRole('dialog', { name: 'Eredmény megosztása' });
  await expect(dialog.getByRole('img', { name: 'Az eredménykártya előnézete' })).toBeVisible();
  const download = page.waitForEvent('download');
  await dialog.getByRole('link', { name: 'Kép letöltése' }).click();
  expect((await download).suggestedFilename()).toBe(`erettsegi-eredmeny-${MATH}.png`);
  await dialog.getByRole('button', { name: 'Link másolása' }).click();
  await expect(dialog.getByRole('status')).toHaveText('Kimásoltuk a linket.');
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toContain(
    'Mintafeladatsor – Matematika, középszint: 15% az Érettségi Gyakorlóban.',
  );
  expect(copied).toMatch(new RegExp(`/feladatsorok/${MATH}$`));
});
