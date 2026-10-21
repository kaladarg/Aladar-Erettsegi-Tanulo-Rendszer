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

/** Waits until entrance animations (fades, slides) have finished; endless ones are ignored. */
export async function settle(page: Page) {
  await page.evaluate(() =>
    Promise.all(
      document
        .getAnimations()
        .filter((a) => a.effect?.getComputedTiming().iterations !== Infinity)
        .map((a) => a.finished.catch(() => undefined)),
    ),
  );
}

/** The home page greets by time of day. */
export const GREETING = /^(Jó reggelt|Szép napot|Jó estét)!$/;

/** Skips the welcome dialog and waits until that is saved, so a reload does not show it again. */
export async function skipOnboarding(page: Page) {
  await page.getByRole('dialog').getByRole('button', { name: 'Kihagyom' }).click();
  await expect(page.getByRole('dialog')).toBeHidden();
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          new Promise<boolean>((resolve) => {
            const open = indexedDB.open('erettsegi-gyakorlo');
            open.onsuccess = () => {
              const get = open.result.transaction('settings').objectStore('settings').get('app');
              get.onsuccess = () => {
                resolve(!!(get.result as { onboardingDone?: boolean } | undefined)?.onboardingDone);
                open.result.close();
              };
              get.onerror = () => resolve(false);
            };
            open.onerror = () => resolve(false);
          }),
      ),
    )
    .toBe(true);
}

/** Completes onboarding with the given subjects; ends on the exam browser. */
export async function finishOnboarding(page: Page, subjects: string[] = ['Matematika']) {
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  for (const subject of subjects) await dialog.getByText(subject, { exact: true }).click();
  await dialog.getByRole('button', { name: 'Tovább' }).click();
  await dialog.getByRole('button', { name: 'Tovább' }).click();
  await dialog.getByRole('button', { name: 'Tovább' }).click();
  await dialog.getByRole('button', { name: 'Feladatsorok megnyitása' }).click();
  await expect(dialog).toBeHidden();
  await expect(page.getByRole('heading', { level: 1, name: 'Feladatsorok' })).toBeVisible();
}

/** The visible toast with the given text (Radix also mirrors it into a live region). */
export function toastWith(page: Page, text: string | RegExp) {
  return page.getByRole('listitem').filter({ hasText: text });
}
