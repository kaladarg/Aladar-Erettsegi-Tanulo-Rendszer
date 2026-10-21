import { expect, finishOnboarding, test, GREETING, skipOnboarding } from './fixtures';

test('first visit walks through onboarding and shows the chosen subjects', async ({ page }) => {
  await page.goto('/');
  const dialog = page.getByRole('dialog');
  await expect(
    dialog.getByRole('heading', { name: 'Szia! Melyik tárgyból készülsz?' }),
  ).toBeVisible();

  // Cannot continue without a subject.
  await dialog.getByRole('button', { name: 'Tovább' }).click();
  await expect(dialog.getByRole('alert')).toHaveText(
    'Válassz legalább egy tárgyat a folytatáshoz.',
  );

  await page.goto('/');
  await finishOnboarding(page, ['Történelem', 'Magyar nyelv és irodalom']);
  await page
    .getByRole('navigation', { name: 'Fő navigáció' })
    .filter({ visible: true })
    .getByRole('link', { name: 'Kezdőlap' })
    .click();

  const subjects = page.getByRole('region', { name: 'A tárgyaid' });
  await expect(subjects.getByText('Történelem')).toBeVisible();
  await expect(subjects.getByText('Magyar nyelv és irodalom')).toBeVisible();
  await expect(subjects.getByText('Matematika')).toHaveCount(0);

  // Onboarding does not come back after a reload.
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: GREETING })).toBeVisible();
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('onboarding can be skipped and reopened from the home screen', async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
  await expect(page.getByText('Még nem választottál tárgyat')).toBeVisible();

  await page.getByRole('button', { name: 'Tárgyak kiválasztása' }).click();
  await finishOnboarding(page, ['Matematika']);
  // A single chosen subject opens the browser filtered to it.
  await expect(page).toHaveURL(/\/feladatsorok\?targy=matematika$/);
  await page.goto('/');
  await expect(
    page.getByRole('region', { name: 'A tárgyaid' }).getByText('Matematika'),
  ).toBeVisible();
});
