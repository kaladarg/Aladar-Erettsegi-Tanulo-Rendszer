import { expect, test } from './fixtures';

const ENGLISH = 'angol-kozep-2026-majus-minta';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('dialog').getByRole('button', { name: 'Kihagyom' }).click();
});

test('an English paper: listening player, exam points and the transcript', async ({ page }) => {
  await page.goto(`/feladatsorok/${ENGLISH}/gyakorlas?nezet=urlap`);
  // Task texts are marked as English for screen readers and spell checking.
  await expect(page.locator('[lang="en"]').first()).toBeVisible();

  const player = page.getByRole('region', { name: /Hangfelvétel/ });
  await player.scrollIntoViewIfNeeded();
  await expect(player.getByRole('button', { name: 'Lejátszás' })).toBeVisible();
  await expect(player.getByRole('button', { name: '10 másodperccel vissza' })).toBeVisible();
  await expect(player.getByLabel('Sebesség')).toBeVisible();
  await expect(player.getByRole('slider', { name: 'Lejátszási pozíció' })).toBeVisible();

  await page.getByRole('textbox', { name: /\(1\) SUCCEED/ }).fill('success');
  await page.getByRole('button', { name: 'Beadás' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();

  await expect(page.getByText(/feladatpont = \d+ \/ 6 vizsgapont/)).toBeVisible();
  await expect(page.getByText(/vizsgapontra számítja át/)).toBeVisible();
  await page.locator('summary', { hasText: 'III/1. feladat' }).first().click();
  const transcript = page.locator('summary', { hasText: 'Szövegátirat' }).first();
  await transcript.click();
  await expect(transcript.locator('xpath=..').locator('[lang="en"]')).toContainText('Jenny');
});

test('exam mode plays the recording through, without pause or rewind', async ({ page }) => {
  await page.goto(`/feladatsorok/${ENGLISH}/vizsga?nezet=urlap`);
  for (let part = 0; part < 2; part++) {
    await page.getByRole('button', { name: 'Rész beadása' }).click();
    await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  }
  const player = page.getByRole('region', { name: /Hangfelvétel/ });
  await expect(player.getByRole('button', { name: 'Felvétel indítása' })).toBeVisible();
  await expect(player.getByText(/megállás nélkül/)).toBeVisible();
  await expect(player.getByRole('button', { name: 'Szünet' })).toHaveCount(0);
  await expect(player.getByRole('slider')).toHaveCount(0);
});

test('a listening task in a topic round brings its recording', async ({ page }) => {
  await page.goto('/gyakorlas/temakorok?targy=angol');
  await page
    .getByRole('button', { name: /hallott szöveg értése/ })
    .first()
    .click();
  await expect(page).toHaveURL(/gyakorlas\/kor\//);
  await expect(page.getByRole('region', { name: /Hangfelvétel/ })).toBeVisible();
});

test('a missing recording can be opened from the device', async ({ page }) => {
  await page.goto(`/feladatsorok/${ENGLISH}/gyakorlas?nezet=urlap`);
  // Simulate a pack without the file. (A failed fetch logs a network error, which
  // is expected here; an empty, unreadable answer is treated the same way.)
  await page.route('**/hanganyag.mp3', (route) => route.fulfill({ status: 200, body: '' }));
  await page.reload();
  const player = page.getByRole('region', { name: /Hangfelvétel/ });
  await player.scrollIntoViewIfNeeded();
  await expect(player.getByText(/nincs benne a programban/)).toBeVisible();
  await player.locator('input[type=file]').setInputFiles({
    name: 'sajat.mp3',
    mimeType: 'audio/mpeg',
    buffer: Buffer.from('ID3'),
  });
  await expect(player.getByText('Saját fájl: sajat.mp3')).toBeVisible();
  await player.getByRole('button', { name: 'Eltávolítás' }).click();
  await expect(player.getByText(/nincs benne a programban/)).toBeVisible();
});

test('language cards, aids and oral topics', async ({ page }) => {
  await page.goto('/gyakorlas/kartyak?targy=angol');
  await expect(page.getByLabel('Hangnem')).toBeVisible();
  await page.getByLabel('Hangnem').selectOption('formalis');
  await page.getByRole('link', { name: /Levél és e-mail: tanulás/ }).click();
  await page.getByRole('button', { name: 'Megfordítom' }).click();
  await expect(page.locator('p[lang="en"]')).toBeVisible();

  await page.goto('/gyakorlas/segedeszkozok?targy=nemet');
  await expect(page.getByText(/egynyelvű vagy kétnyelvű nyomtatott szótár/).first()).toBeVisible();

  await page.goto('/gyakorlas/szobeli?targy=angol');
  await expect(page.getByText('Utazás, turizmus')).toBeVisible();
});
