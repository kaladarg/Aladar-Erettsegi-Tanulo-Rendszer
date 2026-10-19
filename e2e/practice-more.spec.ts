import { readFile } from 'node:fs/promises';
import { expect, test } from './fixtures';

const HUNGARIAN = 'magyar-kozep-2026-majus-minta';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('dialog').getByRole('button', { name: 'Kihagyom' }).click();
});

test('a mixed round takes tasks from several topics', async ({ page }) => {
  await page.goto('/gyakorlas/temakorok?targy=matematika');
  await page.getByRole('checkbox', { name: /elsőfokú egyenlet hozzáadása/ }).check();
  await page.getByRole('checkbox', { name: /százalékszámítás hozzáadása/ }).check();
  await page.getByRole('button', { name: 'A kijelölt 2 témakör keverése' }).click();
  await expect(page).toHaveURL(/gyakorlas\/kor\//);
  await expect(
    page.getByRole('heading', { level: 1, name: 'Vegyes kör: Matematika' }),
  ).toBeVisible();
  await expect(page.getByText('1 / 2')).toBeVisible();
});

test('history cards: map card, flip, mark and progress', async ({ page }) => {
  await page.goto('/gyakorlas/kartyak');
  await expect(page.getByRole('heading', { level: 1, name: 'Történelem kártyák' })).toBeVisible();
  await page.getByRole('link', { name: 'Helyszínek (térkép): tanulás' }).click();
  await expect(page.getByRole('img', { name: /Térkép, a keresett hely/ })).toBeVisible();
  await page.getByRole('button', { name: 'Megfordítom' }).click();
  await expect(page.getByRole('heading', { name: 'Válasz' })).toBeFocused();
  await page.getByRole('button', { name: 'Tudtam', exact: true }).click();
  // Keyboard: space flips, 1 marks "Nem tudtam".
  await page.keyboard.press('Space');
  await expect(page.getByRole('heading', { name: 'Válasz' })).toBeVisible();
  await page.keyboard.press('1');
  await expect(page.getByText('3 / 16')).toBeVisible();

  await page.goto('/gyakorlas/kartyak');
  const deck = page.getByRole('region', { name: 'Helyszínek (térkép)' });
  await expect(deck).toContainText('2 tanulás alatt');
});

test('the study plan downloads a calendar file', async ({ page }) => {
  await page.goto('/gyakorlas/terv');
  const download = page.getByRole('button', { name: 'Naptárfájl letöltése' });
  await expect(download).toBeDisabled();
  await page.getByLabel('Matematika írásbeli').fill('2027-05-04');
  await page.getByLabel('Napi 15 perces ismétlés is').check();
  const [file] = await Promise.all([page.waitForEvent('download'), download.click()]);
  expect(file.suggestedFilename()).toBe('erettsegi.ics');
  const text = await readFile((await file.path())!, 'utf8');
  expect(text).toContain('BEGIN:VCALENDAR');
  expect(text).toContain('DTSTART;VALUE=DATE:20270504');
  expect(text).toContain('RRULE:FREQ=DAILY');
});

test('a teacher link leads to a round and a result code the teacher can read', async ({ page }) => {
  await page.goto('/tanaroknak');
  await page.getByRole('radio', { name: 'Matematika' }).click();
  await page.getByLabel('A feladatsor címe').fill('Egyenletek, 11.B');
  await page.getByText('Mintafeladatsor – Matematika, középszint').click();
  await page.getByRole('checkbox', { name: /^1\. feladat \(2 pont\)/ }).check();
  await page.getByRole('checkbox', { name: /^5\. feladat/ }).check();
  await expect(page.getByText('2 feladat kijelölve, összesen 4 pont')).toBeVisible();
  await page.getByRole('button', { name: 'Link készítése' }).click();
  const link = await page.getByLabel('Feladatsor linkje').inputValue();
  await expect(page.getByRole('img', { name: 'QR-kód a feladatsor linkjével' })).toBeVisible();

  await page.goto(new URL(link).pathname + new URL(link).search);
  await expect(page.getByRole('heading', { level: 1, name: 'Egyenletek, 11.B' })).toBeVisible();
  await page.getByRole('button', { name: 'Kezdés' }).click();
  await page.getByRole('textbox', { name: 'x =' }).fill('6');
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await page.getByRole('button', { name: 'Következő' }).click();
  await page.getByRole('button', { name: 'Kihagyom' }).click();

  const result = page.getByRole('region', { name: 'Eredménykód a tanárodnak' });
  await result.getByLabel('A neved').fill('Kiss Anna');
  const code = await result.getByLabel('Eredménykód').inputValue();
  expect(code).toMatch(/^EGY1\./);

  await page.goto('/tanaroknak');
  await page.getByLabel('Eredménykódok').fill(`Anna: ${code}`);
  const row = page.getByRole('row', { name: /Kiss Anna/ });
  await expect(row).toContainText('2/2');
  await expect(row).toContainText('2/4');
});

test('example essays: score a sample and compare', async ({ page }) => {
  await page.goto(`/feladatsorok/${HUNGARIAN}/gyakorlas?nezet=urlap`);
  await page.getByRole('textbox', { name: 'Érvelő esszé:' }).fill('Szerintem érdemes. '.repeat(40));
  await page.getByRole('button', { name: 'Beadás' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  const review = page.getByRole('region', { name: 'Pontozásra vár' });
  await review.getByText('Gyakorold a pontozást mintamegoldásokon').click();
  await expect(review.getByText(/Sokan úgy gondolják/)).toBeVisible();
  for (const [criterion, points] of [
    ['Tartalom, érvelés', '6'],
    ['Szerkezet, kompozíció', '4'],
    ['Nyelvi minőség, stílus', '3'],
    ['Helyesírás, nyelvhelyesség', '4'],
  ])
    await review
      .getByRole('radiogroup', { name: `A te pontod: ${criterion}` })
      .getByRole('radio', { name: points, exact: true })
      .click();
  await review.getByRole('button', { name: 'Összevetés' }).click();
  await expect(review.getByText(/A te pontszámod 17, a megadott 19/)).toBeVisible();
  await expect(review.getByText('Bátrabban adhatsz pontot', { exact: false })).toBeVisible();
});
