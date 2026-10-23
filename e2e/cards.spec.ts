import { expect, skipOnboarding, test } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

test('a deck page lists every card with its answer and filters them', async ({ page }) => {
  await page.goto('/gyakorlas/kartyak');
  await page.getByRole('link', { name: 'Évszámok: megnyitás' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Évszámok' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Kvíz/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Párosító/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Beírós/ })).toBeVisible();

  const list = page.getByRole('region', { name: /^Kártyák \(/ });
  await expect(list.getByText('Az első feljegyzett olümpiai játékok')).toBeVisible();
  await expect(list.getByText('i. e. 776')).toBeVisible();
  await page.getByLabel('Keresés a kártyák között').fill('olumpiai');
  await expect(list.getByRole('listitem')).toHaveCount(1);
  await expect(page.getByRole('status')).toContainText('1 /');
});

test('flashcards turn over, swipe right to mark known, and undo', async ({ page }) => {
  await page.goto('/gyakorlas/kartyak/tanulas?pakli=evszamok');
  await expect(page.getByText('1 / 15')).toBeVisible();
  const card = page.getByRole('article');
  const box = (await card.boundingBox())!;
  // A tap turns the card over.
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await expect(page.getByRole('heading', { name: 'Válasz' })).toBeFocused();

  // A swipe to the right marks it as known.
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 200, box.y + box.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect(page.getByText('2 / 15')).toBeVisible();
  await expect(page.getByText('Tudom: 1')).toBeAttached();

  // The arrow key marks "Még tanulom"; undo takes it back.
  await page.keyboard.press('ArrowLeft');
  await expect(page.getByText('3 / 15')).toBeVisible();
  await page.getByRole('button', { name: 'Visszavonás' }).click();
  await expect(page.getByText('2 / 15')).toBeVisible();
});

test('the quiz scores answers and lists the ones to review', async ({ page }) => {
  await page.goto('/gyakorlas/kartyak/jatek/kviz?targy=magyar&pakli=szerzok');
  for (let i = 0; i < 10; i++) {
    await page.getByRole('list', { name: 'Válaszlehetőségek' }).getByRole('button').first().click();
    await expect(page.getByRole('status')).toBeVisible();
    await page.getByRole('button', { name: 'Tovább' }).click();
  }
  await expect(page.getByRole('heading', { name: /\/ 10 helyes/ })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Új kör' })).toBeFocused();
});

test('matching all pairs stops the clock', async ({ page }) => {
  // Tries the pairs one by one, which takes a while on a slow device.
  test.setTimeout(90_000);
  await page.goto('/gyakorlas/kartyak/jatek/parosito?pakli=evszamok');
  const prompts = page.getByRole('list', { name: 'Kérdések' }).getByRole('button');
  const answers = page.getByRole('list', { name: 'Válaszok' }).getByRole('button');
  await expect(prompts).toHaveCount(6);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (await prompts.nth(i).isDisabled()) break;
      if (await answers.nth(j).isDisabled()) continue;
      await prompts.nth(i).click();
      await answers.nth(j).click();
    }
  }
  await expect(page.getByRole('heading', { name: /^Kész:/ })).toBeVisible();
  await expect(page.getByText('Új rekord!')).toBeVisible();
});

test('typing accepts answers without accents and can be overridden', async ({ page }) => {
  await page.goto('/gyakorlas/kartyak/jatek/beiros?targy=angol&pakli=kotoszavak');
  await page.getByLabel('A válaszod').fill('valami egeszen mas');
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByRole('status')).toContainText('Nem ez. A helyes válasz:');
  await page.getByRole('button', { name: 'Jónak számít' }).click();
  await expect(page.getByRole('status')).toHaveText('Helyes!');
});

/** Marks every card of the round as "Még tanulom", one card at a time. */
async function missAll(page: import('@playwright/test').Page) {
  const progress = page.getByText(/^\d+ \/ \d+$/);
  const total = Number((await progress.textContent())!.split('/ ')[1]);
  for (let i = 1; i <= total; i++) {
    await expect(progress).toHaveText(`${i} / ${total}`);
    await page.keyboard.press('ArrowLeft');
  }
}

test('cards not known can come back in the round, and practising them again always works', async ({
  page,
}) => {
  const deck = '/gyakorlas/kartyak/tanulas?targy=angol&pakli=kotoszavak&mind=1';
  await page.goto(deck);
  await expect(page.getByText(/^1 \/ \d+$/)).toBeVisible();

  // The menu explains both ways; bringing missed cards back makes the round longer.
  await page.getByRole('button', { name: 'Beállítások' }).click();
  const dialog = page.getByRole('dialog', { name: 'Hogyan menjen a kör?' });
  await expect(dialog.getByRole('radio', { name: /Egyszer végig/ })).toBeChecked();
  await dialog.getByRole('radio', { name: /Visszajönnek a kör végén/ }).click();
  await dialog.getByRole('button', { name: 'Kész' }).click();
  const total = Number((await page.getByText(/^1 \/ \d+$/).textContent())!.split('/ ')[1]);
  await page.getByRole('button', { name: 'Még tanulom', exact: true }).click();
  await expect(page.getByText(`2 / ${total + 1}`)).toBeVisible();

  // Back to one pass: practise the missed cards again and again.
  await page.getByRole('button', { name: 'Beállítások' }).click();
  await dialog.getByRole('radio', { name: /Egyszer végig/ }).click();
  await dialog.getByRole('button', { name: 'Kész' }).click();
  await page.goto(deck);
  await missAll(page);
  const again = page.getByRole('button', { name: /Gyakorlom, amit még tanulok/ });
  for (let round = 0; round < 4; round++) {
    await again.click();
    await missAll(page);
    await expect(again).toBeVisible();
  }
});
