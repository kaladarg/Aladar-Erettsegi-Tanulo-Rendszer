import { expect, finishOnboarding, test } from './fixtures';

test('probability: worked example step by step, then a checked practice problem', async ({
  page,
}) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/gyakorlas');
  await page.getByRole('link', { name: /Valószínűség lépésről lépésre/ }).click();
  await expect(
    page.getByRole('heading', { level: 1, name: 'Valószínűség lépésről lépésre' }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'Két kocka' }).click();
  await expect(page).toHaveURL(/tipus=ket-kocka/);
  const example = page.getByRole('region', { name: 'Kidolgozott példa' });
  await example.getByRole('button', { name: 'Első lépés' }).click();
  await expect(example.getByText('1. lépés')).toBeVisible();
  await example.getByRole('button', { name: 'Mindet mutasd' }).click();
  await expect(example.getByText('3. lépés')).toBeVisible();
  await expect(example.getByRole('status')).toContainText('Megvan a megoldás');

  const practice = page.getByRole('region', { name: 'Most te jössz' });
  const answer = practice.getByRole('textbox', { name: 'Válaszod' });
  await answer.fill('0');
  await practice.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(practice.getByRole('status')).toContainText('Még nem jó');
  await expect(practice.getByText('Ebben a körben: 0 / 1 helyes')).toBeVisible();

  await practice.getByRole('button', { name: 'Kérek egy tippet' }).click();
  await expect(practice.getByText('1. lépés')).toBeVisible();
  await practice.getByRole('button', { name: 'Megmutatom a megoldást' }).click();
  // The exact value, read from the KaTeX source: "\dfrac{a}{b} \approx 0,139".
  const source = await practice.getByRole('status').locator('annotation').first().textContent();
  const fraction = /\\d?frac\{(\d+)\}\{(\d+)\}/.exec(source ?? '');
  expect(fraction).not.toBeNull();
  await answer.fill(`${fraction![1]}/${fraction![2]}`);
  await practice.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(practice.getByRole('status')).toContainText('Helyes!');

  await practice.getByRole('button', { name: 'Új feladat' }).click();
  await expect(answer).toHaveValue('');
  await expect(answer).toBeFocused();
});
