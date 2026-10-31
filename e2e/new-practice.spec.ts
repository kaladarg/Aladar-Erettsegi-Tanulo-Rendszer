import { expect, finishOnboarding, test } from './fixtures';

test('grammar drills, földrajz calculations, map quiz and study guide search', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page, ['Magyar nyelv és irodalom']);

  await page.goto('/gyakorlas/nyelvtan');
  await expect(page.getByRole('heading', { level: 1, name: 'Nyelvtan és helyesírás' })).toBeVisible();
  await expect(page.getByText('1. kérdés / 10')).toBeVisible();
  await page.getByRole('list', { name: 'Válaszlehetőségek' }).getByRole('button').first().click();
  await expect(page.getByText(/Helyes!|Nem ez a jó válasz\./)).toBeVisible();
  await page.getByRole('button', { name: 'Következő kérdés' }).click();
  await expect(page.getByText('2. kérdés / 10')).toBeVisible();

  await page.goto('/gyakorlas/foldrajz-szamolas');
  await page.getByRole('radio', { name: 'Delelési magasság' }).click();
  await page.getByRole('button', { name: 'Megoldás' }).click();
  await expect(page.getByText(/90° −/)).toBeVisible();
  await page.getByLabel(/Eredmény/).fill('999');
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByText('Nem ez az eredmény', { exact: false })).toBeVisible();

  await page.goto('/gyakorlas/terkepkviz');
  await expect(page.getByRole('img', { name: 'Térkép, rajta egy megjelölt hely' })).toBeVisible();
  await page.getByLabel('Terület').selectOption('afrika');
  await expect(page.getByText('1. kérdés / 10')).toBeVisible();

  await page.goto('/tananyag');
  await page.getByRole('searchbox', { name: 'Keresés a tananyagban' }).fill('aranybulla');
  await expect(page.getByText(/\d+ találat/)).toBeVisible();
  await page.getByRole('link', { name: /Aranybulla|II\. András/ }).first().click();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
