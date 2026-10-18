import { test as base, expect, type Page } from '@playwright/test';

/** Every test fails if the app logs a console error or throws. */
export const test = base.extend<{ consoleErrors: string[] }>({
  consoleErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      page.on('pageerror', (error) => errors.push(error.message));
      await use(errors);
      expect(errors, 'console errors').toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };

/** Completes onboarding with the given subjects. */
export async function finishOnboarding(page: Page, subjects: string[] = ['Matematika']) {
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  for (const subject of subjects) await dialog.getByText(subject, { exact: true }).click();
  await dialog.getByRole('button', { name: 'Tovább' }).click();
  await dialog.getByRole('button', { name: 'Tovább' }).click();
  await dialog.getByRole('button', { name: 'Indulás' }).click();
  await expect(dialog).toBeHidden();
}

/** The visible toast with the given text (Radix also mirrors it into a live region). */
export function toastWith(page: Page, text: string | RegExp) {
  return page.getByRole('listitem').filter({ hasText: text });
}
