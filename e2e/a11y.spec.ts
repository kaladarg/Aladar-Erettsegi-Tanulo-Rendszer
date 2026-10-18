import AxeBuilder from '@axe-core/playwright';
import { expect, finishOnboarding, test } from './fixtures';

const PAGES = [
  ['/', 'Jó gyakorlást!'],
  ['/beallitasok', 'Beállítások'],
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
  });
}
