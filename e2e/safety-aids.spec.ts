import { expect, test, skipOnboarding } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

test('after a few active days the home page asks for a backup', async ({ page }) => {
  // Three days of activity, as if the student had practised on them.
  await page.evaluate(async () => {
    const db = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('erettsegi-gyakorlo');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    const tx = db.transaction('activity', 'readwrite');
    const now = Date.now();
    for (const days of [1, 2, 3]) {
      const date = new Date(now - days * 86_400_000);
      const day = date.toISOString().slice(0, 10);
      tx.objectStore('activity').put({ day, updatedAt: date.getTime() });
    }
    await new Promise((resolve) => (tx.oncomplete = resolve));
    db.close();
  });
  await page.reload();
  const reminder = page.getByRole('region', { name: 'Mentsd el a haladásodat' });
  await expect(reminder).toContainText('Még nem mentettél.');
  const [file] = await Promise.all([
    page.waitForEvent('download'),
    reminder.getByRole('button', { name: 'Mentés fájlba' }).click(),
  ]);
  expect(file.suggestedFilename()).toMatch(/\.json$/);
  await expect(reminder).toHaveCount(0);

  await page.goto('/beallitasok');
  await expect(page.getByText('Az adataid biztonsága')).toBeVisible();
  await expect(page.getByText(/Utolsó mentés:/)).toBeVisible();
});

test('the exam aids page lists the permitted aids per subject', async ({ page }) => {
  await page.goto('/gyakorlas/segedeszkozok?targy=matematika');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Segédeszközök és vizsganap' }),
  ).toBeVisible();
  await expect(page.getByText('Bármilyen négyjegyű függvénytáblázat (nyomtatott)')).toBeVisible();
  await page.getByRole('radio', { name: 'Történelem' }).click();
  await expect(page.getByText('Középiskolai történelmi atlasz', { exact: true })).toBeVisible();
  await expect(
    page.getByRole('link', { name: /Érettségi az Oktatási Hivatal oldalán/ }),
  ).toHaveAttribute('href', 'https://www.oktatas.hu/kozneveles/erettsegi/');
});

test('literature cards: switch subject, filter and study', async ({ page }) => {
  await page.goto('/gyakorlas/kartyak');
  await page.getByRole('radio', { name: 'Irodalom' }).click();
  await expect(page).toHaveURL(/targy=magyar/);
  await expect(page.getByRole('region', { name: 'Szerzők' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Világirodalom' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Korszak' }).selectOption({ label: 'Romantika' });
  await page.getByRole('link', { name: 'Művek: tanulás' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Kártyák: Irodalom' })).toBeVisible();
  await expect(page.getByRole('article')).toContainText('Művek · Romantika');
  await page.getByRole('button', { name: 'Megfordítom' }).click();
  await page.getByRole('button', { name: 'Tudom', exact: true }).click();
  // Back on the deck page, the card is now being learnt.
  await page.getByRole('link', { name: 'Vissza a kártyákhoz' }).click();
  await expect(page).toHaveURL(/pakli\?targy=magyar&pakli=muvek/);
  await expect(page.getByRole('button', { name: /^1\s*Tanulás alatt/ })).toBeVisible();
});
