import { expect, finishOnboarding, test, GREETING } from './fixtures';

test('navigation moves focus to the page heading and sets the title', async ({
  page,
  isMobile,
}) => {
  await page.goto('/');
  await finishOnboarding(page);
  const nav = page.getByRole('navigation', { name: 'Fő navigáció' }).filter({ visible: true });
  // Phones reach Névjegy through Settings; the bottom bar has five slots.
  if (isMobile) {
    await nav.getByRole('link', { name: 'Beállítások' }).click();
    await page.getByRole('link', { name: /^Névjegy:/ }).click();
  } else await nav.getByRole('link', { name: 'Névjegy' }).click();
  const heading = page.getByRole('heading', { level: 1, name: 'Névjegy' });
  await expect(heading).toBeFocused();
  await expect(page).toHaveTitle('Névjegy · Érettségi Gyakorló');
  await expect(page.getByRole('link', { name: /Forráskód a GitHubon/ })).toHaveAttribute(
    'href',
    'https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer',
  );
  if (!isMobile) {
    await nav.getByRole('link', { name: 'Beállítások' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Beállítások' })).toBeFocused();
  }
});

test('skip link jumps to the main content', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Keyboard-only flow');
  await page.goto('/');
  await finishOnboarding(page);
  await page.reload();
  await expect(page.getByRole('heading', { level: 1, name: 'Feladatsorok' })).toBeVisible();
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Ugrás a tartalomra' });
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main')).toBeFocused();
});

test('unknown pages show a friendly 404', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.goto('/nincs-ilyen-oldal');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Ez az oldal nem létezik' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Vissza a kezdőlapra' }).click();
  await expect(page.getByRole('heading', { level: 1, name: GREETING })).toBeVisible();
});

test('works offline after the first visit', async ({ page, context }) => {
  await page.goto('/');
  await finishOnboarding(page);
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  // Reload once so the page is controlled by the service worker.
  await page.reload();
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
  await context.setOffline(true);
  await page.goto('/nevjegy');
  await expect(page.getByRole('heading', { level: 1, name: 'Névjegy' })).toBeVisible();
  await context.setOffline(false);
});

test('the footer names the author and links to their profiles', async ({ page }) => {
  await page.goto('/');
  await finishOnboarding(page);
  const footer = page.locator('footer');
  await footer.scrollIntoViewIfNeeded();
  await expect(footer.getByText('Készítette: Králik Aladár')).toBeVisible();
  await expect(footer.getByRole('link', { name: /Instagram: @aladar\.kralik/ })).toHaveAttribute(
    'href',
    'https://www.instagram.com/aladar.kralik/',
  );
  // Not hidden behind the bottom navigation on phones.
  await page.mouse.wheel(0, 10000);
  await expect(footer.getByRole('link', { name: /Facebook: Králik Aladár/ })).toBeInViewport();
});
