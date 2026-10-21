import { chromium } from '@playwright/test';
const out = '/tmp/claude-0/-home-user/cfa31f39-3430-5056-ac1b-3f75ca5a324c/scratchpad/ui';
const [,, name='home', path='/', w='390', scheme='light', full='0'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 844 }, colorScheme: scheme });
const errors=[]; p.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
await p.goto('http://localhost:5198/');
const skip = p.getByRole('dialog').getByRole('button', { name: 'Kihagyom' });
await skip.click().catch(() => {});
await p.evaluate(async () => {
  const db = await new Promise((res) => { const r = indexedDB.open('erettsegi-gyakorlo'); r.onsuccess = () => res(r.result); });
  const tx = db.transaction('settings','readwrite'); const st = tx.objectStore('settings');
  const row = await new Promise((res)=>{ const g = st.get('app'); g.onsuccess=()=>res(g.result);});
  if (row) { row.subjects = ['matematika','tortenelem','angol']; st.put(row); }
});
await p.goto('http://localhost:5198' + path);
await p.waitForTimeout(1800);
await p.screenshot({ path: `${out}/${name}.png`, fullPage: full === '1' });
console.log(errors.join('\n'));
await b.close();
