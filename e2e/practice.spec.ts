import { expect, test, toastWith, skipOnboarding } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await skipOnboarding(page);
});

test('a missed task goes to Ismétlés, and the student decides when it is done', async ({
  page,
}) => {
  await page.goto('/gyakorlas');
  await expect(page.getByRole('heading', { level: 1, name: 'Gyakorlás' })).toBeVisible();
  await page.getByRole('link', { name: /Témakörök/ }).click();
  await page.getByRole('searchbox', { name: 'Keresés' }).fill('elsőfokú');
  await page.getByRole('button', { name: /elsőfokú egyenlet/ }).click();

  await expect(page).toHaveURL(/gyakorlas\/kor\//);
  await page.getByRole('textbox', { name: 'x =' }).fill('5');
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByText('0 / 2 pont').first()).toBeVisible();
  await page.getByRole('button', { name: 'Befejezés' }).click();
  await expect(page.getByRole('heading', { name: 'Kész a kör!' })).toBeVisible();
  await expect(page.getByText(/1 feladatban vesztettél pontot/)).toBeVisible();

  // The old address still leads here. A miss rests until tomorrow.
  await page.goto('/gyakorlas/hibaim');
  await expect(page).toHaveURL(/gyakorlas\/ismetles/);
  await expect(page.getByRole('heading', { level: 1, name: 'Ismétlés' })).toBeVisible();
  await expect(page.getByText(/Most nincs átnéznivaló/)).toBeVisible();
  const resting = page.getByRole('region', { name: 'Pihen' });
  await expect(resting).toContainText('Nem ment elsőre');

  // A review round asks the student how it went, whatever the score.
  await resting.getByRole('button', { name: 'Átnézem most' }).click();
  await expect(page).toHaveURL(/gyakorlas\/kor\//);
  await page.getByRole('textbox', { name: 'x =' }).fill('5');
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByRole('heading', { name: 'Hogy ment?' })).toBeVisible();
  await page.getByRole('button', { name: 'Jó volt, a gép tévedett' }).click();
  await expect(page.getByRole('heading', { name: 'Kész a kör!' })).toBeVisible();

  await page.goto('/gyakorlas/ismetles');
  await page.getByText('Kész (1)').click();
  await expect(page.getByText('Jó volt a válaszod', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: /Visszateszem a listára/ }).click();
  await expect(toastWith(page, 'Visszakerült a listára.')).toBeVisible();
  await expect(page.getByRole('region', { name: 'Átnézésre vár' })).toContainText('Elmentetted');
  await page.getByRole('button', { name: /^Már megy:/ }).click();
  await expect(toastWith(page, 'Levetted a listáról.')).toBeVisible();
});

test('any task can be saved for Ismétlés during a round', async ({ page }) => {
  await page.goto('/gyakorlas/temakorok');
  await page.getByRole('searchbox', { name: 'Keresés' }).fill('elsőfokú');
  await page.getByRole('button', { name: /elsőfokú egyenlet/ }).click();
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  const save = page.getByRole('button', { name: 'Elmentem ismétlésre' });
  await save.click();
  await expect(page.getByRole('button', { name: 'Elmentve ismétlésre' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.goto('/gyakorlas/ismetles');
  await expect(page.getByRole('region', { name: 'Átnézésre vár' })).toContainText('Elmentetted');
});

test('the study plan counts down to the exam date', async ({ page }) => {
  await page.goto('/gyakorlas/terv');
  const date = new Date();
  date.setDate(date.getDate() + 30);
  const day = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  await page.getByLabel('Matematika írásbeli').fill(day);
  const card = page.getByRole('region', { name: 'Matematika' });
  await expect(card).toContainText('30 nap van hátra');
  await expect(card).toContainText('Ezen a héten');
  await expect(card.getByRole('listitem').first()).toBeVisible();
});

test('oral prep: own topics, outline autosave and a practice mark', async ({ page }) => {
  await page.goto('/gyakorlas/szobeli?targy=tortenelem');
  await page
    .getByRole('textbox', { name: 'Tételcímek, soronként egy' })
    .fill('A reformkor gazdasága\n\nA kiegyezés');
  await page.getByRole('button', { name: 'Hozzáadás' }).click();
  await expect(toastWith(page, '2 tétel hozzáadva.')).toBeVisible();

  await page.getByRole('link', { name: 'Megnyitás: A kiegyezés' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'A kiegyezés' })).toBeVisible();
  const outline = page.getByRole('textbox', { name: 'Vázlatpontok, soronként egy' });
  await expect(outline).toHaveValue(/^Bevezetés/);
  await outline.fill('1867\nDeák Ferenc');
  await expect(page.getByText('Mentve')).toBeVisible();
  await page.getByRole('button', { name: 'Felmondtam' }).click();
  await expect(page.getByText('1× gyakorolva')).toBeVisible();

  await page.reload();
  await expect(outline).toHaveValue('1867\nDeák Ferenc');

  // Built-in topics open the same page.
  await page.getByRole('link', { name: 'Vissza a szóbelihez' }).click();
  await page.getByRole('button', { name: 'Megnyitás: A dualizmus kora' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'A dualizmus kora' })).toBeVisible();
  await expect(page.getByText('Felkészülés')).toBeVisible();
  await expect(page.getByText('30:00')).toBeVisible();
  await expect(page.getByText('15:00')).toBeVisible();
});

test('a worked example opens step by step, and the same task can be solved alone', async ({
  page,
}) => {
  await page.goto('/gyakorlas/temakorok?targy=matematika');
  await page.getByRole('searchbox', { name: 'Keresés' }).fill('számtani');
  await page.getByRole('button', { name: 'Lépésről lépésre: számtani sorozat' }).click();
  await expect(page.getByRole('heading', { level: 1, name: /Lépésről lépésre/ })).toBeVisible();
  await expect(page.getByText('1. kidolgozott példa')).toBeVisible();
  const heading = await page.getByRole('heading', { level: 2 }).first().textContent();
  await page.getByRole('button', { name: 'Első lépés' }).click();
  const solution = page.getByRole('list', { name: 'Megoldás lépésenként' });
  await expect(solution.getByRole('listitem')).toHaveCount(1);
  await expect(page.getByText(/Mi lehet a következő lépés/)).toBeVisible();

  // "Megoldom egyedül" hides the solution and asks for this very task.
  await page.getByRole('button', { name: 'Megoldom egyedül' }).click();
  await expect(solution).toHaveCount(0);
  await expect(page.getByRole('heading', { level: 3, name: heading! })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Ellenőrzés' })).toBeVisible();

  // The breakdown can come back, fully open, and go away again.
  await page.getByRole('button', { name: 'Mutasd a lépéseket' }).click();
  await expect(solution.getByText(/Végeredmény/)).toBeVisible();
  await page.getByRole('button', { name: 'Megoldom egyedül' }).click();
  await page.getByRole('button', { name: 'Ellenőrzés' }).click();
  await expect(page.getByRole('heading', { name: 'Eredmény' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Mutasd a lépéseket' })).toBeVisible();
  await page.getByRole('button', { name: 'Befejezés' }).click();
  await expect(page.getByRole('heading', { name: 'Kész a kör!' })).toBeVisible();
});
