import type { Page, Route } from '@playwright/test';
import { expect, test } from './fixtures';

const HISTORY = 'tortenelem-kozep-2026-majus-minta';
const HUNGARIAN = 'magyar-kozep-2026-majus-minta';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('dialog').getByRole('button', { name: 'Kihagyom' }).click();
});

async function handIn(page: Page) {
  await page.getByRole('button', { name: 'Beadás' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Beadom' }).click();
  await expect(page).toHaveURL(/eredmeny/);
}

test('the help panel explains the task and flags a revealed solution', async ({ page }) => {
  await page.goto(`/feladatsorok/${HISTORY}/gyakorlas?nezet=urlap`);
  await page.getByRole('button', { name: 'Segítség ehhez: 2. feladat' }).click();
  const help = page.getByRole('dialog', { name: 'Segítség' });
  await expect(help.getByRole('heading', { name: 'Mit kér a feladat?' })).toBeVisible();
  await expect(help.getByRole('combobox', { name: 'Feladat' })).toHaveValue('2');

  await help.getByRole('button', { name: 'Megoldás megmutatása' }).click();
  await page.getByRole('alertdialog').getByRole('button', { name: 'Megnézem' }).click();
  await expect(help.getByRole('heading', { name: 'Megoldás és magyarázat' })).toBeVisible();
  await expect(help.getByRole('button', { name: 'Megoldás megmutatása' })).toHaveCount(0);
  await page.keyboard.press('Escape');

  await handIn(page);
  const breakdown = page.getByRole('region', { name: 'Feladatonként' });
  await expect(breakdown.locator('summary', { hasText: '2. feladat' })).toHaveCount(1);
  const task2 = breakdown.getByRole('listitem').filter({
    has: page.locator('summary', { hasText: '2. feladat' }),
  });
  await task2.locator('summary').first().click();
  await expect(task2.getByText('Segítséggel')).toBeVisible();
});

test('exam mode offers no help', async ({ page }) => {
  await page.goto(`/feladatsorok/${HISTORY}/vizsga?nezet=urlap`);
  await expect(page.getByTitle('Hátralévő idő')).toBeVisible();
  await expect(page.getByRole('button', { name: /^Segítség/ })).toHaveCount(0);
});

test('the sites tab lists free learning sites for the subject', async ({ page }) => {
  await page.goto(`/feladatsorok/${HUNGARIAN}/gyakorlas?nezet=urlap`);
  await page.getByRole('button', { name: 'Segítség ehhez: 1. feladat' }).click();
  const help = page.getByRole('dialog', { name: 'Segítség' });
  await help.getByRole('tab', { name: 'Oldalak' }).click();
  await expect(help.getByRole('link', { name: /Helyesírási tanácsadó/ })).toHaveAttribute(
    'href',
    'https://helyesiras.mta.hu',
  );
  await expect(help.getByRole('link', { name: /Nemzeti Köznevelési Portál/ })).toBeVisible();
  await expect(help.getByRole('link', { name: /Khan Academy/ })).toHaveCount(0);
});

test('without a key, questions go to a free AI chat by copy and paste', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await context.route('https://gemini.google.com/**', (route) =>
    route.fulfill({ contentType: 'text/html', body: '<title>Gemini</title>' }),
  );
  await page.goto(`/feladatsorok/${HISTORY}/gyakorlas?nezet=urlap`);
  await page.getByRole('button', { name: 'Segítség ehhez: 2. feladat' }).click();
  const help = page.getByRole('dialog', { name: 'Segítség' });
  await help.getByRole('tab', { name: 'Kérdezz' }).click();
  await help.getByRole('textbox', { name: 'Kérdésed' }).fill('Mit jelent a cenzúra?');
  const popup = page.waitForEvent('popup');
  await help.getByRole('link', { name: /Google Gemini megnyitása/ }).click();
  await (await popup).close();
  await expect(help.getByRole('status')).toHaveText(/Kimásoltuk a kérdést\./);
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toContain('Középszintű érettségire készülök történelem tárgyból');
  expect(copied).toContain('Kérdésem: Mit jelent a cenzúra?');
});

const summary = (title: string, extract: string, host: string) => ({
  title,
  extract,
  type: 'standard',
  content_urls: { desktop: { page: `https://${host}/wiki/${title}` } },
});

test('selected words can be looked up in Wiktionary and Wikipedia', async ({ page }) => {
  await page.route('https://hu.wiktionary.org/**', (route) =>
    route.request().url().includes('opensearch')
      ? route.fulfill({ json: ['sajtó', ['sajtó'], [], []] })
      : route.fulfill({
          json: summary('sajtó', 'Nyomtatott újságok összessége.', 'hu.wiktionary.org'),
        }),
  );
  await page.route('https://hu.wikipedia.org/**', (route) =>
    route.request().url().includes('opensearch')
      ? route.fulfill({ json: ['sajtó', [], [], []] })
      : route.fulfill({ status: 404, json: {} }),
  );
  await page.goto(`/feladatsorok/${HISTORY}/gyakorlas?nezet=urlap`);
  await page.getByText('Kívánjuk a sajtó szabadságát', { exact: false }).first().waitFor();
  await page.evaluate(() => {
    const walker = document.createTreeWalker(
      document.getElementById('main')!,
      NodeFilter.SHOW_TEXT,
    );
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const at = node.textContent!.indexOf('sajtó');
      if (at < 0) continue;
      const range = document.createRange();
      range.setStart(node, at);
      range.setEnd(node, at + 'sajtó'.length);
      getSelection()!.removeAllRanges();
      getSelection()!.addRange(range);
      return;
    }
  });
  await page.getByRole('toolbar', { name: 'Kijelölt szöveg' }).getByRole('button').click();
  const help = page.getByRole('dialog', { name: 'Segítség' });
  await expect(help.getByRole('searchbox', { name: 'Szó vagy kifejezés' })).toHaveValue('sajtó');
  await expect(help.getByText('Nyomtatott újságok összessége.')).toBeVisible();
  await expect(help.getByText('Nem találtunk szócikket erre: „sajtó”.')).toBeVisible();
  await expect(help.getByRole('link', { name: /Keresés a weben/ })).toHaveAttribute(
    'href',
    /duckduckgo\.com\/\?q=sajt%C3%B3/,
  );
  await expect(help.getByRole('link', { name: /Zanza\.tv: „sajtó”/ })).toHaveAttribute(
    'href',
    /site%3Azanza\.tv%20sajt%C3%B3/,
  );
});

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-headers': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
};

/** A minimal Messages API stream with one text block. */
function sse(text: string): string {
  const events: [string, unknown][] = [
    [
      'message_start',
      {
        type: 'message_start',
        message: {
          id: 'msg_1',
          type: 'message',
          role: 'assistant',
          model: 'claude-opus-5-5',
          content: [],
          stop_reason: null,
          stop_sequence: null,
          usage: { input_tokens: 10, output_tokens: 1 },
        },
      },
    ],
    [
      'content_block_start',
      { type: 'content_block_start', index: 0, content_block: { type: 'text', text: '' } },
    ],
    [
      'content_block_delta',
      { type: 'content_block_delta', index: 0, delta: { type: 'text_delta', text } },
    ],
    ['content_block_stop', { type: 'content_block_stop', index: 0 }],
    [
      'message_delta',
      {
        type: 'message_delta',
        delta: { stop_reason: 'end_turn', stop_sequence: null },
        usage: { output_tokens: 5 },
      },
    ],
    ['message_stop', { type: 'message_stop' }],
  ];
  return events
    .map(([event, data]) => `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
    .join('');
}

test('with an API key, the AI tutor answers and suggests essay points', async ({ page }) => {
  const requests: Record<string, unknown>[] = [];
  await page.route('https://api.anthropic.com/**', async (route: Route) => {
    const request = route.request();
    if (request.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: CORS });
    const body = request.postDataJSON() as Record<string, unknown> & {
      output_config?: { format?: unknown };
    };
    requests.push(body);
    const text = body.output_config?.format
      ? JSON.stringify({
          criteria: [
            { id: 'c1', points: 6, reason: 'Jó érvek.' },
            { id: 'c2', points: 3, reason: 'Kevés példa.' },
          ],
          summary: 'Írj több példát.',
        })
      : 'Ez a feladat egy rövid választ kér a szövegből.';
    return route.fulfill({
      status: 200,
      headers: { ...CORS, 'content-type': 'text/event-stream' },
      body: sse(text),
    });
  });

  await page.goto('/beallitasok');
  await page.getByLabel('API-kulcs').fill(`sk-ant-api03-${'x'.repeat(40)}`);
  await page.getByRole('checkbox', { name: /Elmúltam 18 éves/ }).check();
  await page.getByRole('button', { name: 'Kulcs mentése' }).click();
  await page.getByRole('combobox', { name: 'Modell' }).selectOption('claude-sonnet-5-5');

  await page.goto(`/feladatsorok/${HUNGARIAN}/gyakorlas?nezet=urlap`);
  await page.getByRole('button', { name: 'Segítség ehhez: 1. feladat' }).click();
  const help = page.getByRole('dialog', { name: 'Segítség' });
  await help.getByRole('tab', { name: 'Kérdezz' }).click();
  await help.getByRole('button', { name: 'Mit kér ez a feladat?' }).click();
  await expect(help.getByText('Ez a feladat egy rövid választ kér a szövegből.')).toBeVisible();
  expect(requests[0]).toMatchObject({ model: 'claude-sonnet-5-5', fallbacks: 'default' });
  expect(String(requests[0]!.system)).toContain('marking_scheme');
  await page.keyboard.press('Escape');

  await page
    .getByRole('textbox', { name: 'Érvelő esszé:' })
    .fill('Szerintem érdemes belföldön utazni. '.repeat(30));
  await handIn(page);
  await page.getByRole('button', { name: 'MI-visszajelzés kérése' }).click();
  await expect(page.getByText('Írj több példát.')).toBeVisible();
  await page.getByRole('button', { name: 'Javasolt pontok elfogadása' }).click();
  await expect(page.getByRole('combobox', { name: /hány pontot ér/ }).first()).toHaveValue('6');
});
