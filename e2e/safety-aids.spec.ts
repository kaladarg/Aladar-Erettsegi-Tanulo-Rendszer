import { expect, test } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('dialog').getByRole('button', { name: 'Kihagyom' }).click();
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
  await expect(page.getByText('Középiskolai történelmi atlasz')).toBeVisible();
  await expect(
    page.getByRole('link', { name: /Érettségi az Oktatási Hivatal oldalán/ }),
  ).toHaveAttribute('href', 'https://www.oktatas.hu/kozneveles/erettsegi/');
});
