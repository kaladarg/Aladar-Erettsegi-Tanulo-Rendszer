import { expect, finishOnboarding, test } from './fixtures';

test('study guide: level view, depths, self-check and progress', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page, ['Történelem']);
  await page.goto('/gyakorlas');
  await page.getByRole('link', { name: /Tananyag/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Tananyag' })).toBeVisible();

  // Középszint hides the emelt-only lessons; emelt shows them.
  const unit = page.getByRole('region', { name: /reformkor és az 1848–49/ });
  await expect(unit.getByRole('link', { name: /rendi országgyűlés/ })).toHaveCount(0);
  await page.getByRole('radio', { name: 'Emelt szint' }).click();
  await expect(page).toHaveURL(/szint=emelt/);
  await expect(unit.getByRole('link', { name: /rendi országgyűlés/ })).toBeVisible();
  await page.getByRole('radio', { name: 'Középszint' }).click();

  await unit.getByRole('link', { name: /A reformkor fő kérdései/ }).click();
  await expect(
    page.getByRole('heading', { level: 1, name: 'A reformkor fő kérdései' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Tovább a részletekhez' }).click();
  await expect(page).toHaveURL(/resz=reszletesen/);
  await expect(page.getByText('Elolvasva', { exact: true })).toBeVisible();

  const quiz = page.getByRole('group', { name: /Melyik évhez kötjük a reformkor kezdetét/ });
  await quiz.getByRole('button', { name: '1825' }).click();
  await expect(quiz.getByRole('status')).toContainText('Nem ez a jó válasz.');
  await expect(quiz.getByRole('button', { name: '1830' })).toBeDisabled();

  await page.getByRole('link', { name: /Következő lecke/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: /Széchenyi és Kossuth/ })).toBeVisible();

  await page.getByRole('link', { name: 'Vissza a tananyaghoz' }).click();
  await expect(page.getByText('1 / 4 lecke elolvasva')).toBeVisible();
});

test('study guide: math plots and an emelt-only lesson opened at középszint', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/tananyag?targy=matematika&szint=kozep');
  await expect(page.getByRole('region', { name: /Függvények/ })).toBeVisible();
  await page.goto('/tananyag/fuggvenyvizsgalat-derivalt?szint=kozep');
  await expect(page.getByText(/csak az emelt szintű vizsgán kell/)).toBeVisible();
  await expect(page.locator('svg[role="img"]').first()).toBeVisible();
});
