import { readFile } from 'node:fs/promises';
import { expect, finishOnboarding, test, toastWith } from './fixtures';

const MATH = 'Mintafeladatsor – Matematika, középszint';
const DEMO_PDF = 'public/demo-pack/exams/matematika-kozep-2026-majus-minta/feladatlap.pdf';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page, ['Matematika', 'Történelem']);
});

test('browses, filters and opens an exam', async ({ page }) => {
  const filters = page.getByRole('region', { name: 'Szűrők' });
  await expect(page.getByText('5 feladatsor')).toBeVisible();

  await filters.getByRole('button', { name: 'Történelem' }).click();
  await expect(page).toHaveURL(/targy=tortenelem/);
  await expect(page.getByText('1 feladatsor')).toBeVisible();
  await expect(page.getByRole('link', { name: /Történelem, középszint/ })).toBeVisible();

  await filters.getByLabel('Vizsgaidőszak').selectOption('oktober');
  await expect(page.getByText('Nincs ilyen feladatsor')).toBeVisible();
  await page.getByRole('main').getByRole('button', { name: 'Szűrők törlése' }).last().click();
  await expect(page.getByText('5 feladatsor')).toBeVisible();

  await page.getByRole('link', { name: new RegExp(MATH) }).click();
  await expect(page.getByRole('heading', { level: 1, name: MATH })).toBeFocused();
  await expect(page).toHaveTitle(`Matematika ${MATH} · Érettségi Gyakorló`);
  const summary = page.getByRole('region', { name: 'Áttekintés' });
  await expect(summary.getByText('34', { exact: true })).toBeVisible();
  await expect(summary.getByText('180 perc')).toBeVisible();
  await expect(
    page.getByText('Választható: A 7. és a 8. feladat közül válasszon egyet!'),
  ).toBeVisible();

  const report = page.getByRole('link', { name: /Hiba jelzése e-mailben: 6\. c\)/ });
  const href = new URL((await report.getAttribute('href'))!);
  expect(href.protocol + href.pathname).toBe('mailto:kralik.aladar.gergely@gmail.com');
  expect(href.searchParams.get('subject')).toBe(
    'Hiba a feladatsorban: matematika-kozep-2026-majus-minta, 6. c) feladat',
  );
  expect(href.searchParams.get('body')).toContain('Feladat: 6. c) (6c)');

  const pdf = page.getByRole('link', { name: /Feladatlap \(PDF\)/ });
  const response = await page.request.get((await pdf.getAttribute('href'))!);
  expect(response.headers()['content-type']).toContain('application/pdf');

  await page.getByRole('link', { name: 'Vissza a feladatsorokhoz' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Feladatsorok' })).toBeVisible();
});

test('home subject cards open the filtered list', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Történelem feladatsorai' }).click();
  await expect(page).toHaveURL(/\/feladatsorok\?targy=tortenelem$/);
  await expect(page.getByText('1 feladatsor')).toBeVisible();
});

test('matches a PDF the student opens and rejects unknown files', async ({ page }) => {
  const input = page.locator('input[type="file"]');
  await input.setInputFiles({
    name: 'random.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4 nothing'),
  });
  await expect(toastWith(page, /nem ismerjük fel/)).toBeVisible();

  await input.setInputFiles({
    name: 'notes.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('hello'),
  });
  await expect(toastWith(page, 'Ez a fájl nem PDF.')).toBeVisible();

  await input.setInputFiles({
    name: 'k_mat.pdf',
    mimeType: 'application/pdf',
    buffer: await readFile(DEMO_PDF),
  });
  await expect(toastWith(page, new RegExp(`Felismertük: ${MATH}`))).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: MATH })).toBeVisible();
});

test('unknown exams and broken content sources show friendly errors', async ({ page }) => {
  await page.goto('/feladatsorok/nincs-ilyen');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Ez a feladatsor nem található' }),
  ).toBeVisible();

  await page.goto('/beallitasok');
  await page.getByLabel('A tartalomcsomag címe').fill('javascript:alert(1)');
  await page.getByRole('button', { name: 'Forrás mentése' }).click();
  await expect(page.getByText('Adj meg egy http:// vagy https:// kezdetű címet.')).toBeVisible();

  await page.getByLabel('A tartalomcsomag címe').fill('/nincs-ilyen-csomag/');
  await page.getByRole('button', { name: 'Forrás mentése' }).click();
  await expect(toastWith(page, 'Elmentettük a tartalomforrást.')).toBeVisible();
  await page.goto('/feladatsorok');
  await expect(page.getByText('Nem sikerült betölteni a feladatsorokat')).toBeVisible();

  await page.goto('/beallitasok');
  await page.getByRole('button', { name: 'Alapértelmezett forrás' }).click();
  await page.goto('/feladatsorok');
  await expect(page.getByText('5 feladatsor')).toBeVisible();
});

test('an exam saved for offline use opens without a connection', async ({ page, context }) => {
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  await page.reload();
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);

  await page.goto('/feladatsorok');
  await expect(page.getByText('5 feladatsor')).toBeVisible();
  await page.getByRole('link', { name: new RegExp(MATH) }).click();
  await page.getByRole('button', { name: 'Letöltés offline használatra' }).click();
  await expect(page.getByText('Offline is elérhető', { exact: true })).toBeVisible();

  await context.setOffline(true);
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: MATH })).toBeVisible();
  await context.setOffline(false);
});
