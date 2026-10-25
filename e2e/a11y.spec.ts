import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, finishOnboarding, settle, test, GREETING } from './fixtures';

const PAGES = [
  ['/', GREETING],
  ['/beallitasok', 'Beállítások'],
  ['/statisztika', 'Statisztika'],
  ['/nevjegy', 'Névjegy'],
  ['/feladatsorok', 'Feladatsorok'],
  ['/gyakorlas', 'Gyakorlás'],
  ['/gyakorlas/temakorok', 'Témakörök'],
  ['/gyakorlas/ismetles', 'Ismétlés'],
  ['/gyakorlas/terv', 'Tervem'],
  ['/gyakorlas/szobeli', 'Szóbeli'],
  ['/gyakorlas/kartyak', 'Tanulókártyák'],
  ['/gyakorlas/kartyak?targy=magyar', 'Tanulókártyák'],
  ['/gyakorlas/kartyak/pakli?pakli=evszamok', 'Évszámok'],
  ['/gyakorlas/kartyak/jatek/kviz?pakli=evszamok', 'Kvíz · Évszámok'],
  ['/gyakorlas/kartyak/jatek/parosito?pakli=evszamok', 'Párosító · Évszámok'],
  ['/gyakorlas/kartyak/jatek/beiros?pakli=evszamok', 'Beírós · Évszámok'],
  ['/gyakorlas/segedeszkozok', 'Segédeszközök és vizsganap'],
  ['/tanaroknak', 'Tanároknak'],
  ['/gyakorlas/pontszamito', 'Felvételi pontszámító'],
  ['/gyakorlas/valoszinuseg', 'Valószínűség lépésről lépésre'],
  ['/gyakorlas/esszevazlat', 'Esszévázlat-edző'],
  ['/gyakorlas/esszevazlat/tortenelem-kozep-2026-majus-minta/6', 'Vázlat: 6. feladat'],
  [
    '/feladatsorok/matematika-kozep-2026-majus-minta/nyomtatas',
    'Matematika – Mintafeladatsor – Matematika, középszint',
  ],
  ['/feladatsorok/tortenelem-kozep-2026-majus-minta', 'Mintafeladatsor – Történelem, középszint'],
  [
    '/feladatsorok/tortenelem-kozep-2026-majus-minta/gyakorlas?nezet=urlap',
    'Történelem – Mintafeladatsor – Történelem, középszint',
  ],
  [
    '/feladatsorok/matematika-kozep-2026-majus-minta/gyakorlas?nezet=feladatlap',
    'Matematika – Mintafeladatsor – Matematika, középszint',
  ],
  [
    '/feladatsorok/angol-kozep-2026-majus-minta/gyakorlas?nezet=urlap',
    'Angol nyelv – Mintafeladatsor – Angol nyelv, középszint',
  ],
  [
    '/feladatsorok/nemet-kozep-2026-majus-minta/gyakorlas?nezet=urlap',
    'Német nyelv – Mintafeladatsor – Német nyelv, középszint',
  ],
  ['/gyakorlas/kartyak?targy=angol', 'Tanulókártyák'],
  ['/tananyag?szint=emelt', 'Tananyag'],
  ['/gyakorlas/memoriterek', 'Memoriterek'],
  ['/gyakorlas/memoriterek/kolcsey-himnusz', 'Himnusz'],
  ['/gyakorlas/memoriterek/vorosmarty-szozat?mod=tanulas', 'Szózat'],
  ['/gyakorlas/memoriterek/arany-toldi-esteje?mod=felmondas', 'Toldi estéje'],
  [
    '/tananyag/szabadsagharc-esemenyei?resz=reszletesen&szint=emelt',
    'A szabadságharc főbb eseményei',
  ],
  ['/tananyag/alapfuggvenyek-transzformaciok?szint=emelt', 'Alapfüggvények és transzformációk'],
  ['/tananyag/fuggveny-fogalma?resz=vizsgan', 'A függvény fogalma és tulajdonságai'],
  ['/tananyag?targy=magyar&szint=emelt', 'Tananyag'],
  [
    '/tananyag/petofi-nepiesseg-tajleiras-szerelem?resz=vizsgan',
    'Népiesség, tájleíró költészet és szerelmi líra',
  ],
  ['/tananyag/kor-egyenlete?szint=emelt', 'A kör egyenlete'],
] as const;

const scan = async (page: Page, label: string) => {
  // Colours are measured once fades and slides have ended.
  await settle(page);
  let builder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']);
  // On the paper view the answer boxes sit where the official paper prints them, so their size
  // and spacing are part of the replica (WCAG 2.5.8 "essential" exception). The form view offers
  // the same fields at full size, and it is scanned with every rule.
  if (label.includes('nezet=feladatlap')) builder = builder.disableRules(['target-size']);
  const results = await builder.analyze();
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

    // Oral topic page with timers and recorder.
    await page.goto('/gyakorlas/szobeli?targy=tortenelem');
    await page.getByRole('button', { name: 'Megnyitás: A dualizmus kora' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'A dualizmus kora' })).toBeVisible();
    await scan(page, 'oral topic');

    // A map card, turned over.
    await page.goto('/gyakorlas/kartyak/tanulas?pakli=topografia');
    await page.getByRole('button', { name: 'Megfordítom' }).click();
    await expect(page.getByRole('heading', { name: 'Válasz' })).toBeVisible();
    await scan(page, 'card study');

    // Teacher link with QR code, then the student's landing page.
    await page.goto('/tanaroknak');
    await page.getByRole('radio', { name: 'Matematika' }).click();
    await page.getByLabel('A feladatsor címe').fill('Teszt');
    await page.getByText('Mintafeladatsor – Matematika, középszint').click();
    await page.getByRole('checkbox', { name: /^1\. feladat \(2 pont\)/ }).check();
    await page.getByRole('button', { name: 'Link készítése' }).click();
    await scan(page, 'teacher link');
    const link = new URL(await page.getByLabel('Feladatsor linkje').inputValue());
    await page.goto(link.pathname + link.search);
    await expect(page.getByRole('heading', { level: 1, name: 'Teszt' })).toBeVisible();
    await scan(page, 'assignment');

    // A practice round with the drawing pad open.
    await page.goto('/gyakorlas/temakorok?targy=matematika');
    await page.getByText('Geometria, trigonometria', { exact: true }).click();
    await scan(page, 'topic area open');
    await page.getByRole('button', { name: 'Gyakorlás: Pitagorasz-tétel' }).click();
    await page.getByRole('button', { name: 'Rajzlap megnyitása' }).click();
    await scan(page, 'drill');

    // A worked example.
    await page.goto('/gyakorlas/temakorok?targy=matematika');
    await page.getByText('Függvények, sorozatok', { exact: true }).click();
    await page.getByRole('button', { name: 'Lépésről lépésre: számtani sorozat' }).click();
    await page.getByRole('button', { name: 'Első lépés' }).click();
    await expect(page.getByRole('list', { name: 'Megoldás lépésenként' })).toBeVisible();
    await scan(page, 'worked example');

    // Mai adag overview.
    await page.goto('/gyakorlas/mai-adag');
    await expect(page.getByRole('button', { name: 'Kezdjük' })).toBeVisible();
    await scan(page, 'daily');

    // Drawing tools on the paper.
    await page.goto('/feladatsorok/matematika-kozep-2026-majus-minta/gyakorlas?nezet=feladatlap');
    // Phones fold the drawing tools behind one button.
    const inkToggle = page.getByRole('button', { name: 'Rajzeszközök megjelenítése' });
    await expect(page.getByRole('toolbar', { name: 'Feladatsor eszköztár' })).toBeVisible();
    if (await inkToggle.isVisible()) await inkToggle.click();
    await page
      .getByRole('toolbar', { name: 'Rajzeszközök' })
      .getByRole('button', { name: 'Toll' })
      .click();
    await scan(page, 'drawing');
    await page.getByRole('button', { name: 'Kitöltés: rajzolás kikapcsolva' }).click();

    // Results page with a pending essay review and an open task.
    await page.goto('/feladatsorok/magyar-kozep-2026-majus-minta/gyakorlas?nezet=urlap');
    await page
      .getByRole('textbox', { name: 'Érvelő esszé:' })
      .fill('Szerintem érdemes. '.repeat(20));
    await page.getByRole('button', { name: 'Beadás' }).click();
    await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Eredmény' })).toBeVisible();
    await page.locator('details summary').first().click();
    await page.getByText('Gyakorold a pontozást mintamegoldásokon').first().click();
    await scan(page, 'results');

    // Share dialog with the result card.
    await page.getByRole('button', { name: 'Eredmény megosztása' }).click();
    await expect(page.getByRole('img', { name: 'Az eredménykártya előnézete' })).toBeVisible();
    await scan(page, 'share');
    await page.keyboard.press('Escape');

    // Home dashboard and statistics with data.
    await page.goto('/');
    await expect(page.getByRole('region', { name: 'Következő lépés' })).toBeVisible();
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
