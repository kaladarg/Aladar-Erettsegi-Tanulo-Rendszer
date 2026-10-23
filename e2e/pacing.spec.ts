import { expect, skipOnboarding, test } from './fixtures';

const MATH = 'matematika-kozep-2026-majus-minta';

test('after a timed exam the results point out a task that took too long', async ({ page }) => {
  await page.clock.install();
  await page.goto('/');
  await skipOnboarding(page);
  await page.goto(`/feladatsorok/${MATH}/vizsga?nezet=urlap`);
  // Task 1 is worth 2 of part I's 10 points: 9 of its 45 minutes. Work on it for 16.
  const field = page.getByRole('textbox', { name: 'x =' });
  await field.click();
  for (let minute = 0; minute < 16; minute++) {
    await page.clock.runFor(60_000);
    await field.press('Space');
  }
  await page.clock.runFor(20_000);

  await page.getByRole('button', { name: 'Rész beadása' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  await page.getByRole('button', { name: 'Beadás' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  await expect(page).toHaveURL(/eredmeny/);

  const card = page.getByRole('region', { name: 'Időbeosztás' });
  await expect(card).toContainText(/1\. feladat: kb\. 1[67] perc/);
  await expect(card).toContainText('kb. 9 perc jutna rá');
  await expect(card).toContainText('ha egy feladat elakaszt');
});
