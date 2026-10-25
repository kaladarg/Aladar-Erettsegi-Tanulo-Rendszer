import { expect, finishOnboarding, test } from './fixtures';

test('memoriter: read, learn with hidden words, recite and get checked', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page, ['Magyar nyelv és irodalom']);
  await page.goto('/gyakorlas');
  await page.getByRole('link', { name: /Memoriterek/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Memoriterek' })).toBeVisible();
  await expect(page.getByText('0 / 18 megtanulva')).toBeVisible();

  await page.getByRole('radio', { name: '11–12. évfolyam' }).click();
  await expect(page.getByRole('link', { name: /Szózat/ })).toHaveCount(0);
  await page.getByRole('radio', { name: 'Mind' }).click();
  await page.getByRole('link', { name: /Gyűlölök és szeretek/ }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Gyűlölök és szeretek' })).toBeVisible();
  await expect(page.getByText('így van ez, és a szívem élve keresztre feszít.')).toBeVisible();

  await page.getByRole('radio', { name: 'Tanulás' }).click();
  await page.getByRole('radio', { name: '100%' }).click();
  const hidden = page.getByRole('button', { name: 'Rejtett szó megmutatása' });
  const before = await hidden.count();
  expect(before).toBeGreaterThan(10);
  await hidden.first().click();
  await expect(hidden).toHaveCount(before - 1);

  await page.getByRole('radio', { name: 'Felmondás' }).click();
  const box = page.getByRole('textbox', { name: 'A vers fejből' });
  await box.fill(
    'Gyűlölök és szeretek. Miért? Nem tudom se, de érzem:\nígy van ez, és a szívem élve keresztre feszít.',
  );
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByRole('status')).toContainText('18 / 19 szó helyes');
  await expect(page.locator('del')).toContainText('én');

  await box.fill(
    'Gyűlölök és szeretek. Miért? Nem tudom én se, de érzem:\nígy van ez, és a szívem élve keresztre feszít.',
  );
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByRole('status')).toContainText('100% pontos');
  await page.getByRole('link', { name: 'Vissza a memoriterekhez' }).click();
  await expect(page.getByText('1 / 18 megtanulva')).toBeVisible();
});
