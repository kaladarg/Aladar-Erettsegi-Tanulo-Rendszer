// @vitest-environment node
import { describe, expect, it } from 'vitest';
import {
  classifyUrl,
  conventionalUrls,
  extractLinks,
  isRelevantArchivePage,
} from './officialFiles';

const BASE = 'https://www.oktatas.hu/bin/content/dload/erettsegi';

describe('classifyUrl', () => {
  it('recognises papers, marking schemes and attachments', () => {
    expect(classifyUrl(`${BASE}/feladatok_2024tavasz_kozep/k_mat_24maj_fl.pdf`)).toMatchObject({
      examId: 'matematika-kozep-2024-majus',
      kind: 'exam',
      fileName: 'mat_24maj_fl.pdf',
    });
    expect(classifyUrl(`${BASE}/feladatok_2024osz_kozep/k_tort_24okt_ut.pdf`)).toMatchObject({
      examId: 'tortenelem-kozep-2024-oktober',
      kind: 'key',
    });
    expect(classifyUrl(`${BASE}/feladatok_2025tavasz_kozep/k_magyir_25maj_fgy.pdf`)?.kind).toBe(
      'attachment',
    );
  });

  it('ignores unsupported subjects and inconsistent names', () => {
    expect(classifyUrl(`${BASE}/feladatok_2024tavasz_kozep/k_angol_24maj_fl.pdf`)).toBeNull();
    expect(classifyUrl(`${BASE}/feladatok_2024tavasz_kozep/k_mat_23maj_fl.pdf`)).toBeNull();
    expect(classifyUrl(`${BASE}/feladatok_2024tavasz_kozep/k_mat_24okt_fl.pdf`)).toBeNull();
    expect(classifyUrl('https://www.oktatas.hu/kozneveles/erettsegi')).toBeNull();
  });
});

describe('conventionalUrls', () => {
  it('builds the paper and key URLs', () => {
    expect(conventionalUrls('magyar', 'kozep', 2025, 'oktober')).toEqual([
      `${BASE}/feladatok_2025osz_kozep/k_magyir_25okt_fl.pdf`,
      `${BASE}/feladatok_2025osz_kozep/k_magyir_25okt_ut.pdf`,
    ]);
  });
});

describe('extractLinks', () => {
  it('resolves relative links and entities', () => {
    const html = `<a href="/a?x=1&amp;y=2">A</a> <a href='b.pdf'>B</a> <a href="#top">top</a>`;
    expect(extractLinks(html, 'https://www.oktatas.hu/dir/page')).toEqual([
      'https://www.oktatas.hu/a?x=1&y=2',
      'https://www.oktatas.hu/dir/b.pdf',
    ]);
  });
});

describe('isRelevantArchivePage', () => {
  const filter = { level: 'kozep', from: 2024, to: 2024, sessions: ['majus' as const] };
  const page = (path: string) =>
    isRelevantArchivePage(new URL(`https://www.oktatas.hu${path}`), filter);

  it('follows the archive index and the wanted period with its day pages', () => {
    expect(page('/kozneveles/erettsegi/feladatsorok')).toBe(true);
    expect(page('/kozneveles/erettsegi/feladatsorok/kozepszint_2024tavasz')).toBe(true);
    expect(page('/kozneveles/erettsegi/feladatsorok/kozepszint_2024tavasz/kozep_2nap')).toBe(true);
  });

  it('skips other levels, years, sessions, query variants and unrelated pages', () => {
    expect(page('/kozneveles/erettsegi/feladatsorok/emelt_szint_2024tavasz')).toBe(false);
    expect(page('/kozneveles/erettsegi/feladatsorok/kozepszint_2024osz')).toBe(false);
    expect(page('/kozneveles/erettsegi/feladatsorok/kozepszint_2023tavasz/kozep_1nap')).toBe(false);
    expect(page('/kozneveles/erettsegi/feladatsorok/kozepszint_2010majus')).toBe(false);
    expect(page('/kozneveles/erettsegi/feladatsorok?accessible=true')).toBe(false);
    expect(page('/kozneveles/erettsegi/feladatsorok/probaerettsegi2004')).toBe(false);
    expect(page('/kozneveles/erettsegi/feladatsorok_vizsgatargyankent')).toBe(false);
    expect(page('/kozneveles/erettsegi/&quot;')).toBe(false);
  });

  it('understands the older month-named periods', () => {
    const old = { level: 'kozep', from: 2010, to: 2010, sessions: ['oktober' as const] };
    expect(
      isRelevantArchivePage(
        new URL('https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok/kozepszint_2010oktober'),
        old,
      ),
    ).toBe(true);
  });
});
