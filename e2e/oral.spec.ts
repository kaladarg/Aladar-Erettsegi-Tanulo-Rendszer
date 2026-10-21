import { expect, test, skipOnboarding } from './fixtures';

// Chromium's fake microphone, so recording works without a real device.
test.use({
  launchOptions: {
    args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
  },
  permissions: ['microphone'],
});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

test('a practice answer is recorded and checked against a checklist', async ({ page }) => {
  await page.goto('/gyakorlas/szobeli?targy=tortenelem');
  await page.getByRole('button', { name: 'Megnyitás: A dualizmus kora' }).click();
  await page.getByRole('textbox', { name: 'Vázlatpontok, soronként egy' }).fill('Kiegyezés:\n1867');
  await expect(page.getByText('Mentve')).toBeVisible();

  await page.getByRole('button', { name: 'Felvétel indítása' }).click();
  await expect(page.getByText(/Még 1[45]:\d\d/)).toBeVisible();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Felvétel leállítása' }).click();

  // The newest recording opens its checklist; the outline adds its own point.
  const check = page.getByRole('group').or(page.locator('details')).filter({
    hasText: 'Értékeld a feleleted',
  });
  await expect(check.getByText('Értékeld a feleleted (0 / 9)')).toBeVisible();
  await expect(check.getByText('Elmondtam: 1867')).toBeVisible();
  // Ticked from the keyboard: on phones the bottom bar can cover a box near the edge.
  for (const name of ['Belefértem az időbe.', 'Elmondtam: 1867']) {
    const box = check.getByRole('checkbox', { name });
    await box.focus();
    await page.keyboard.press('Space');
    await expect(box).toBeChecked();
  }
  await expect(check.getByText('Értékeld a feleleted (2 / 9)')).toBeVisible();

  await page.reload();
  await expect(page.getByText('Értékeld a feleleted (2 / 9)')).toBeVisible();
});
