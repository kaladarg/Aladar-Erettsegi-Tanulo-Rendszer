import { expect, finishOnboarding, test } from './fixtures';

test('essay outline: plan with the checklist, then compare with the key', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/gyakorlas');
  await page.getByRole('link', { name: /Esszévázlat-edző/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Esszévázlat-edző' })).toBeVisible();
  await page.getByRole('link', { name: /áprilisi törvények/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Vázlat: 6. feladat' })).toBeVisible();

  const checklist = page.getByRole('region', { name: 'Szerkezet-ellenőrző' });
  await expect(checklist.getByText('0 / 8 kész')).toBeVisible();

  const questions = page.getByRole('region', { name: 'Mire kell kitérned?' });
  for (const box of await questions.getByRole('checkbox').all()) await box.check();

  await page.getByRole('button', { name: 'Indítom az órát' }).click();
  await expect(page.getByRole('button', { name: 'Szünet' })).toBeVisible();

  await page.getByLabel('Bevezetés').fill('Az 1848-as forradalom vívmányai.');
  await page.getByLabel('Mikor?').fill('1848. április');
  await page.getByLabel('Hol?').fill('Pozsony, Magyarország');
  const concept = page.getByRole('textbox', { name: 'Fogalmak' });
  for (const term of ['jobbágyfelszabadítás', 'közteherviselés']) {
    await concept.fill(term);
    await concept.press('Enter');
  }
  await expect(page.getByText('2 / 3')).toBeVisible();
  await concept.fill('népképviselet');
  await page.getByRole('button', { name: 'Hozzáadás' }).click();
  await expect(page.getByText('3 / 3')).toBeVisible();

  const sources = page.getByRole('group', { name: 'Források használata' });
  await sources.getByLabel('Tény').fill('A forrás a felelős minisztériumot említi.');
  await sources.getByLabel('Megállapítás').fill('A kormány az országgyűlésnek felelt.');
  const knowledge = page.getByRole('group', { name: 'Saját ismeretek' });
  await knowledge.getByLabel('Tény').fill('Eltörölték az ősiséget.');
  await knowledge.getByLabel('Megállapítás').fill('Ez a polgári átalakulást segítette.');
  await page.getByLabel('Összegzés').fill('A törvények polgári alapokra helyezték az országot.');
  await expect(checklist.getByText('8 / 8 kész')).toBeVisible();

  await checklist.getByRole('button', { name: 'Összevetem a javítókulccsal' }).click();
  await expect(page.getByRole('heading', { name: 'Összevetés a javítókulccsal' })).toBeVisible();
  await expect(
    page.getByText('Fogalmak: jobbágyfelszabadítás, közteherviselés, népképviselet'),
  ).toBeVisible();
  const estimate = page.getByRole('region', { name: 'Becsült pontszám a vázlat alapján' });
  await expect(estimate).toContainText('0 / 16 pont');
  for (const group of await page.getByRole('radiogroup', { name: /értékelésed/ }).all())
    await group.getByRole('radio', { name: 'Megvan' }).click();
  await expect(estimate).toContainText('16 / 16 pont');

  // Saved on this device: the comparison opens again after a reload.
  await expect(async () => {
    await page.reload();
    await expect(estimate).toContainText('16 / 16 pont', { timeout: 1000 });
  }).toPass();

  await page.getByRole('button', { name: 'Vissza a vázlathoz' }).click();
  await expect(page.getByLabel('Mikor?')).toHaveValue('1848. április');
  await page.getByRole('link', { name: 'Vissza a feladatokhoz' }).click();
  await expect(page.getByText('Kész vázlat')).toBeVisible();
});

test('essay outline: a literature essay has a thesis and three points', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/gyakorlas/esszevazlat');
  await page.getByRole('radio', { name: 'Magyar nyelv és irodalom' }).click();
  await page.getByRole('link', { name: /belföldön utazni/ }).click();
  await expect(page.getByText('Terjedelem:')).toBeVisible();
  await expect(page.getByLabel('Álláspont, értelmezési javaslat')).toBeVisible();
  const points = page.getByRole('group', { name: 'Gondolatmenet' });
  await expect(points.getByLabel('Állítás')).toHaveCount(3);
  await expect(page.getByRole('region', { name: 'Szerkezet-ellenőrző' })).toContainText(
    '3. gondolat példával',
  );
});
