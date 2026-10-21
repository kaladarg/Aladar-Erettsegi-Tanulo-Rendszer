import { readFile } from 'node:fs/promises';
import type { Page } from '@playwright/test';
import { expect, test, toastWith, skipOnboarding } from './fixtures';

const MATH = 'matematika-kozep-2026-majus-minta';
const HISTORY = 'tortenelem-kozep-2026-majus-minta';
const HUNGARIAN = 'magyar-kozep-2026-majus-minta';

async function openApp(page: Page) {
  await page.goto('/');
  await skipOnboarding(page);
}

async function openWorkspace(page: Page, examId: string) {
  await page.goto(`/feladatsorok/${examId}`);
  await page.getByRole('link', { name: /Gyakorlás indítása|Folytatás/ }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('–');
}

const toForm = (page: Page) => page.getByRole('radio', { name: 'Űrlap' }).click();
const toPdf = (page: Page) => page.getByRole('radio', { name: 'Feladatlap' }).click();

test.beforeEach(async ({ page }) => openApp(page));

test('PDF mode and form mode share answers, which survive a reload', async ({ page }) => {
  await openWorkspace(page, MATH);
  // PDF mode is the default: the paper is drawn and fields sit on it.
  await expect(page.locator('[data-page="1"] canvas')).toBeVisible();
  const pdfField = page.getByRole('textbox', { name: '1. feladat, x =' });
  await pdfField.fill('6');
  await page
    .getByRole('combobox', { name: '3. feladat, A) Minden négyzet rombusz.' })
    .selectOption('igaz');

  await toForm(page);
  await expect(page).toHaveURL(/nezet=urlap/);
  await expect(page.getByRole('textbox', { name: 'x =' })).toHaveValue('6');
  await expect(
    page
      .getByRole('group', { name: 'A) Minden négyzet rombusz.' })
      .getByRole('radio', { name: 'igaz' }),
  ).toBeChecked();
  await page.getByRole('textbox', { name: 'Az új ár:' }).fill('1700');

  await toPdf(page);
  await expect(page.getByRole('textbox', { name: '4. feladat, Az új ár:' })).toHaveValue('1700');
  await expect(page.getByRole('status').filter({ hasText: 'Mentve' })).toBeAttached();

  await page.reload();
  await expect(page.getByRole('textbox', { name: '1. feladat, x =' })).toHaveValue('6');
  await expect(page.getByRole('textbox', { name: '4. feladat, Az új ár:' })).toHaveValue('1700');
});

test('multi-select works in both modes', async ({ page }) => {
  await openWorkspace(page, MATH);
  await page.getByRole('button', { name: /2\. feladat, Helyes válaszok:/ }).click();
  await page.getByRole('checkbox', { name: 'B) 7' }).check();
  await page.getByRole('checkbox', { name: 'C) 12' }).check();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: /Kijelölve: B, C/ })).toBeVisible();
  await toForm(page);
  await expect(page.getByRole('checkbox', { name: 'B) 7' })).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'A) 5' })).not.toBeChecked();
});

test('zoom and page navigation', async ({ page }) => {
  await openWorkspace(page, MATH);
  await expect(page.locator('[data-page="1"] canvas')).toBeVisible();
  await page.getByRole('button', { name: 'Nagyítás', exact: true }).click();
  await expect(page.getByRole('toolbar').locator('output')).toHaveText('125%');
  await page.getByRole('button', { name: 'Igazítás a szélességhez' }).click();
  await expect(page.getByRole('toolbar').locator('output')).toHaveText('100%');
  await page.getByRole('button', { name: 'Következő oldal' }).click();
  await expect(page.getByRole('spinbutton', { name: 'Ugrás oldalra' })).toHaveValue('2');
  await expect(page.getByRole('textbox', { name: /5\. feladat, x₁/ })).toBeInViewport();
});

test('choice groups dim the task that was not chosen', async ({ page }) => {
  await openWorkspace(page, MATH);
  await toForm(page);
  const picker = page.getByRole('group', { name: 'Választható feladatok' });
  await picker.getByRole('radio', { name: '7. feladat' }).check();
  const task8 = page.getByRole('article', { name: '8. feladat' });
  await expect(task8.getByText('Ezt a feladatot nem választottad.')).toBeVisible();
  // The same choice is visible from the info panel in PDF mode.
  await toPdf(page);
  await page.getByRole('button', { name: 'Tudnivalók' }).click();
  await expect(page.getByRole('dialog').getByRole('radio', { name: '7. feladat' })).toBeChecked();
});

test('long writing opens a distraction-free editor with live word count', async ({ page }) => {
  await openWorkspace(page, HUNGARIAN);
  await toForm(page);
  await page.getByRole('button', { name: 'Írás teljes képernyőn' }).click();
  const editor = page.getByRole('dialog', { name: '6. feladat – írás' });
  await expect(editor.getByRole('textbox')).toBeFocused();
  await expect(
    editor.getByText('Érdemes-e a nyári szünidőben belföldön utazni?', { exact: false }),
  ).toBeVisible();
  await page.keyboard.type('Szerintem érdemes belföldön utazni, mert olcsóbb.');
  await expect(editor.getByText('6 / legalább 250 szó')).toBeVisible();
  await editor.getByRole('button', { name: 'Kész' }).click();
  await expect(page.getByRole('textbox', { name: 'Érvelő esszé:' })).toHaveValue(
    'Szerintem érdemes belföldön utazni, mert olcsóbb.',
  );

  // In PDF mode the essay box previews the text and opens the same editor.
  await toPdf(page);
  await page
    .getByRole('button', { name: /6\. feladat, Érvelő esszé:: Írás teljes képernyőn/ })
    .click();
  await expect(page.getByRole('dialog').getByRole('textbox')).toHaveValue(/olcsóbb/);
});

test('sources appear once per part, before the first task using them', async ({ page }) => {
  await openWorkspace(page, HISTORY);
  await toForm(page);
  const source = /Forrás: Részlet a 12 pontból/;
  const partOne = page.getByRole('region', { name: 'I. Rövid választ igénylő feladatok' });
  const partTwo = page.getByRole('region', { name: 'II. Esszé' });
  await expect(partOne.getByRole('complementary', { name: source })).toHaveCount(1);
  await expect(partTwo.getByRole('complementary', { name: source })).toHaveCount(1);
});

test('restarting deletes answers and can be undone', async ({ page }) => {
  await openWorkspace(page, MATH);
  await page.getByRole('textbox', { name: '1. feladat, x =' }).fill('6');
  await expect(page.getByRole('status').filter({ hasText: 'Mentve' })).toBeAttached();
  await page.getByRole('link', { name: 'Kilépés a feladatsorból' }).click();

  await page.getByRole('button', { name: 'Újrakezdés' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Újrakezdés' }).click();
  await expect(page.getByRole('link', { name: 'Gyakorlás indítása' })).toBeVisible();
  await toastWith(page, 'Új gyakorlást kezdtél.')
    .getByRole('button', { name: 'Visszavonás' })
    .click();
  await page.getByRole('link', { name: 'Folytatás' }).click();
  await expect(page.getByRole('textbox', { name: '1. feladat, x =' })).toHaveValue('6');
});

test.describe('without a PDF in the pack', () => {
  // page.route cannot see requests the service worker makes, so keep it out of the way.
  test.use({ serviceWorkers: 'block' });

  test('works with a PDF the student imported when the pack has none', async ({ page }) => {
    // Serve the demo manifest as if the pack shipped no PDFs.
    await page.route('**/demo-pack/manifest.json', async (route) => {
      const response = await route.fetch();
      const manifest = await response.json();
      for (const exam of manifest.exams) exam.hasPdf = false;
      await route.fulfill({ response, json: manifest });
    });
    await page.goto(`/feladatsorok/${MATH}/gyakorlas`);
    await expect(
      page.getByText('Az űrlapnézetben minden feladatot megoldhatsz', { exact: false }),
    ).toHaveCount(0);
    await expect(page).not.toHaveURL(/nezet/);
    await expect(page.getByRole('article', { name: '1. feladat' })).toBeVisible();

    await page.goto(`/feladatsorok/${MATH}`);
    await page.locator('input[type="file"]').setInputFiles({
      name: 'feladatlap.pdf',
      mimeType: 'application/pdf',
      buffer: await readFile(`public/demo-pack/exams/${MATH}/feladatlap.pdf`),
    });
    await expect(toastWith(page, 'Elmentettük a PDF-et ezen az eszközön.')).toBeVisible();
    await page.getByRole('link', { name: 'Folytatás' }).click();
    await toPdf(page);
    await expect(page.locator('[data-page="1"] canvas')).toBeVisible();
    await expect(page.getByRole('textbox', { name: '1. feladat, x =' })).toBeVisible();
  });
});

test('the position editor moves boxes and exports exam.json', async ({ page }, testInfo) => {
  await page.goto(`/feladatsorok/${MATH}/gyakorlas?szerkeszto=1`);
  const box = page.getByRole('button', { name: /^1-f1:/ });
  await expect(box).toBeVisible();
  const before = await box.getAttribute('aria-label');
  await box.focus();
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('Shift+ArrowDown');
  await expect(page.getByText('1 mező módosítva')).toBeVisible();
  expect(await box.getAttribute('aria-label')).not.toBe(before);

  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'exam.json letöltése' }).click();
  const path = testInfo.outputPath('exam.json');
  await (await download).saveAs(path);
  const exam = JSON.parse(await readFile(path, 'utf8'));
  const original = JSON.parse(await readFile(`public/demo-pack/exams/${MATH}/exam.json`, 'utf8'));
  const rect = exam.parts[0].tasks[0].fields[0].pdfRect;
  const old = original.parts[0].tasks[0].fields[0].pdfRect;
  expect(rect.x).toBeCloseTo(old.x + 0.002, 4);
  expect(rect.h).toBeCloseTo(old.h + 0.002, 4);
});
