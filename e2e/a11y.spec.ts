import AxeBuilder from '@axe-core/playwright';
import { expect, finishOnboarding, test } from './fixtures';

const PAGES = [
  ['/', 'Jó gyakorlást!'],
  ['/beallitasok', 'Beállítások'],
  ['/statisztika', 'Statisztika'],
  ['/nevjegy', 'Névjegy'],
  ['/feladatsorok', 'Feladatsorok'],
  ['/feladatsorok/tortenelem-kozep-2026-majus-minta', 'Mintafeladatsor – Történelem, középszint'],
  [
    '/feladatsorok/tortenelem-kozep-2026-majus-minta/gyakorlas?nezet=urlap',
    'Történelem – Mintafeladatsor – Történelem, középszint',
  ],
  [
    '/feladatsorok/matematika-kozep-2026-majus-minta/gyakorlas?nezet=feladatlap',
    'Matematika – Mintafeladatsor – Matematika, középszint',
  ],
] as const;

for (const scheme of ['light', 'dark'] as const) {
  test(`no WCAG 2.2 AA violations (${scheme})`, async ({ page }) => {
    // Scans many pages, including the PDF workspace.
    test.setTimeout(120_000);
    await page.emulateMedia({ colorScheme: scheme });
    await page.goto('/');
    const onboarding = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(onboarding.violations, 'onboarding').toEqual([]);
    await finishOnboarding(page);

    for (const [path, heading] of PAGES) {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(results.violations, path).toEqual([]);
    }

    // Results page with a pending essay review and an open task.
    await page.goto('/feladatsorok/magyar-kozep-2026-majus-minta/gyakorlas?nezet=urlap');
    await page
      .getByRole('textbox', { name: 'Érvelő esszé:' })
      .fill('Szerintem érdemes. '.repeat(20));
    await page.getByRole('button', { name: 'Beadás' }).click();
    await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Eredmény' })).toBeVisible();
    await page.locator('details summary').first().click();
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations, 'results').toEqual([]);

    // Help panel with the task explanation open.
    await page.goto('/feladatsorok/tortenelem-kozep-2026-majus-minta/gyakorlas?nezet=urlap');
    await page.getByRole('button', { name: 'Segítség ehhez: 1. feladat' }).click();
    await expect(page.getByRole('dialog', { name: 'Segítség' })).toBeVisible();
    const help = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(help.violations, 'help').toEqual([]);
  });
}
