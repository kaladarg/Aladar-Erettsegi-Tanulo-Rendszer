import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
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

const scan = async (page: Page, label: string) => {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(results.violations, label).toEqual([]);
};

for (const scheme of ['light', 'dark'] as const) {
  test(`no WCAG 2.2 AA violations (${scheme})`, async ({ page }) => {
    // Scans many pages, including the PDF workspace.
    test.setTimeout(180_000);
    await page.emulateMedia({ colorScheme: scheme });
    await page.goto('/');
    await scan(page, 'onboarding');
    await finishOnboarding(page);

    for (const [path, heading] of PAGES) {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
      await scan(page, path);
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
    await scan(page, 'results');

    // Share dialog with the result card.
    await page.getByRole('button', { name: 'Eredmény megosztása' }).click();
    await expect(page.getByRole('img', { name: 'Az eredménykártya előnézete' })).toBeVisible();
    await scan(page, 'share');
    await page.keyboard.press('Escape');

    // Home dashboard and statistics with data.
    await page.goto('/');
    await expect(page.getByRole('region', { name: 'Gyakorlási sorozat' })).toBeVisible();
    await scan(page, 'dashboard');
    await page.goto('/statisztika');
    await expect(page.getByRole('img', { name: /Eredmények időrendben/ })).toBeVisible();
    await page.getByText('Táblázatként').click();
    await scan(page, 'statistics');

    // Help panel, every tab.
    await page.goto('/feladatsorok/tortenelem-kozep-2026-majus-minta/gyakorlas?nezet=urlap');
    await page.getByRole('button', { name: 'Segítség ehhez: 1. feladat' }).click();
    const help = page.getByRole('dialog', { name: 'Segítség' });
    await expect(help).toBeVisible();
    await scan(page, 'help');
    for (const tab of ['Szótár', 'Oldalak', 'Kérdezz']) {
      await help.getByRole('tab', { name: tab }).click();
      await scan(page, `help: ${tab}`);
    }
    await page.keyboard.press('Escape');

    // Timed exam with the info panel (abandon button) open.
    await page.goto('/feladatsorok/tortenelem-kozep-2026-majus-minta/vizsga?nezet=urlap');
    await expect(page.getByTitle('Hátralévő idő')).toBeVisible();
    await scan(page, 'exam mode');
    await page.getByRole('button', { name: 'Tudnivalók' }).click();
    await expect(page.getByRole('button', { name: 'Vizsga feladása' })).toBeVisible();
    await scan(page, 'exam info');
  });
}
