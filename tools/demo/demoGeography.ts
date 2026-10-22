/**
 * A self-written geography sample paper (középszint style) for the demo pack.
 * Like the real paper it has two parts: topography without any aids (20
 * minutes) and a longer part where the atlas and a calculator may be used.
 * All tasks are original.
 */
import type { DemoExam } from './demoExams';

const NAMES = { ignoreDiacritics: true, ignorePunctuation: true };

const TRUE_FALSE = [
  { value: 'igaz', label: 'igaz' },
  { value: 'hamis', label: 'hamis' },
];

export const GEOGRAPHY_DEMO_EXAM: DemoExam = {
  id: 'foldrajz-kozep-2026-majus-minta',
  subject: 'foldrajz',
  subjectName: 'Földrajz',
  level: 'kozep',
  year: 2026,
  session: 'majus',
  format: '2024',
  title: 'Mintafeladatsor – Földrajz, középszint',
  sample: true,
  maxPoints: 14,
  reviewNotes: [
    'A rövidített feladatsor az igazi vizsga szerkezetét követi: I. topográfia segédeszköz nélkül, II. feladatlap atlasszal és számológéppel.',
  ],
  parts: [
    {
      id: 'I',
      title: 'I. feladatlap (topográfia)',
      timeLimitMinutes: 20,
      maxPoints: 3,
      instructions:
        'Az I. feladatlap megoldásához atlasz és egyéb segédeszköz nem használható. Több válasz beírása esetén az adott kérdésre nem jár pont.',
      tasks: [
        {
          id: 'I-1',
          number: '1.',
          type: 'short_answer',
          text: 'Nevezze meg a földrajzi neveket!',
          maxPoints: 3,
          topics: ['topográfia', 'Magyarország'],
          fields: [
            {
              id: 'I-1-f1',
              kind: 'text',
              label: 'a) Magyarország legmagasabb pontja (hegycsúcs):',
            },
            { id: 'I-1-f2', kind: 'text', label: 'b) A folyó, amely Szegednél a Tiszába ömlik:' },
            { id: 'I-1-f3', kind: 'text', label: 'c) Az ország, amelynek fővárosa Pozsony:' },
          ],
          scoring: {
            rules: [
              {
                id: 'r1',
                points: 1,
                fieldIds: ['I-1-f1'],
                answer: { kind: 'text', accepted: ['Kékes', 'Kékes-tető'], normalize: NAMES },
              },
              {
                id: 'r2',
                points: 1,
                fieldIds: ['I-1-f2'],
                answer: { kind: 'text', accepted: ['Maros'], normalize: NAMES },
              },
              {
                id: 'r3',
                points: 1,
                fieldIds: ['I-1-f3'],
                answer: { kind: 'text', accepted: ['Szlovákia'], normalize: NAMES },
              },
            ],
          },
          explanation:
            'Kékes (1014 m, Mátra); a Maros Szegednél ömlik a Tiszába; Pozsony Szlovákia fővárosa.',
          hints: ['Képzeld el Magyarország domborzati térképét: hol a legsötétebb barna folt?'],
        },
      ],
    },
    {
      id: 'II',
      title: 'II. feladatlap',
      timeLimitMinutes: 100,
      maxPoints: 11,
      instructions:
        'A II. feladatlap megoldásához használhatja a középiskolai atlaszt és a zsebszámológépet; a számítások menetét is írja le!',
      tasks: [
        {
          id: 'II-1',
          number: '1.',
          type: 'multiple_choice',
          text: 'Melyik kőzet keletkezik vulkáni működés során, a felszínre ömlő lávából? Írja a helyes válasz betűjelét a kijelölt helyre!',
          maxPoints: 1,
          topics: ['kőzetburok', 'világ', 'kőzetek'],
          fields: [
            {
              id: 'II-1-f1',
              kind: 'choice',
              label: 'Betűjel:',
              options: [
                { value: 'A', label: 'gránit' },
                { value: 'B', label: 'bazalt' },
                { value: 'C', label: 'mészkő' },
                { value: 'D', label: 'homokkő' },
              ],
            },
          ],
          scoring: {
            rules: [
              {
                id: 'r1',
                points: 1,
                fieldIds: ['II-1-f1'],
                answer: { kind: 'choice', correct: ['B'] },
              },
            ],
          },
          explanation:
            'A bazalt kiömlési (vulkáni) magmás kőzet; a gránit mélységi magmás kőzet, a mészkő és a homokkő üledékes kőzet.',
        },
        {
          id: 'II-2',
          number: '2.',
          type: 'calculation',
          text: 'Egy alföldi településen a felszín közelében a kőzetek hőmérséklete 11 °C, a geotermikus gradiens 5 °C / 100 m. Hány °C-os a kőzet 1500 m mélységben?',
          maxPoints: 3,
          topics: ['kőzetburok', 'Magyarország', 'geotermikus gradiens'],
          fields: [
            { id: 'II-2-w', kind: 'work', label: 'Számítás:' },
            { id: 'II-2-f1', kind: 'number', label: 'A kőzet hőmérséklete:', unit: '°C' },
          ],
          scoring: {
            steps: [
              {
                id: 's1',
                points: 1,
                description: 'A mélység 100 méterekben: 1500 m = 15 × 100 m.',
                auto: { fieldIds: ['II-2-w'], alternatives: [[['15']]] },
              },
              {
                id: 's2',
                points: 1,
                description: 'A hőmérséklet-emelkedés: 15 · 5 °C = 75 °C.',
                auto: { fieldIds: ['II-2-w'], alternatives: [[['75']]] },
              },
            ],
            rules: [
              {
                id: 'r1',
                points: 1,
                fieldIds: ['II-2-f1'],
                answer: { kind: 'number', accepted: [86] },
              },
            ],
          },
          explanation:
            'A hőmérséklet 100 méterenként 5 °C-kal nő: 1500 m-en 15 · 5 = 75 °C-kal melegebb, azaz 11 + 75 = 86 °C.',
          hints: ['Először számold ki, hányszor 100 méter az 1500 méter.'],
        },
        {
          id: 'II-3',
          number: '3.',
          type: 'calculation',
          text: 'Budapesten (UTC+1) délelőtt 10 óra van. Hány óra van ekkor New Yorkban (UTC−5)?',
          maxPoints: 2,
          topics: ['kozmikus környezet', 'világ', 'időszámítás'],
          fields: [
            { id: 'II-3-w', kind: 'work', label: 'Számítás:' },
            { id: 'II-3-f1', kind: 'number', label: 'Az idő New Yorkban:', unit: 'óra' },
          ],
          scoring: {
            steps: [
              {
                id: 's1',
                points: 1,
                description:
                  'Az időkülönbség: 1 − (−5) = 6 óra; New York nyugatabbra van, ott korábban van.',
                auto: { fieldIds: ['II-3-w'], alternatives: [[['6']]] },
              },
            ],
            rules: [
              {
                id: 'r1',
                points: 1,
                fieldIds: ['II-3-f1'],
                answer: { kind: 'number', accepted: [4] },
              },
            ],
          },
          explanation:
            'A két zónaidő különbsége 6 óra, nyugat felé visszafelé számolunk: 10 − 6 = 4 óra (hajnali 4 óra).',
          hints: ['Nyugat felé haladva korábban van: vonni kell vagy hozzáadni?'],
        },
        {
          id: 'II-4',
          number: '4.',
          type: 'true_false',
          text: 'Döntse el, hogy igazak vagy hamisak a népesedéssel kapcsolatos állítások!',
          maxPoints: 3,
          topics: ['népesség és település', 'világ'],
          fields: [
            'A) Az öregedő társadalmakban nő a 65 év felettiek aránya.',
            'B) A fiatalodó társadalmak korfája a csúcsán a legszélesebb.',
            'C) A születéskor várható élettartam a fejlett országokban magasabb, mint a fejlődőkben.',
          ].map((label, i) => ({
            id: `II-4-f${i + 1}`,
            kind: 'choice' as const,
            label,
            options: TRUE_FALSE,
          })),
          scoring: {
            rules: ['igaz', 'hamis', 'igaz'].map((value, i) => ({
              id: `r${i + 1}`,
              points: 1,
              fieldIds: [`II-4-f${i + 1}`],
              answer: { kind: 'choice' as const, correct: [value] },
            })),
          },
          explanation:
            'A) igaz; B) hamis: a fiatalodó társadalmak korfája az alapján széles (sok gyerek); C) igaz.',
        },
        {
          id: 'II-5',
          number: '5.',
          type: 'short_answer',
          text: 'Magyarázza meg, miért fúj a passzátszél a térítők felől az Egyenlítő felé!',
          maxPoints: 2,
          topics: ['légkör', 'világ', 'légkörzés'],
          fields: [{ id: 'II-5-f1', kind: 'textarea', label: 'Magyarázat:' }],
          scoring: {
            steps: [
              {
                id: 's1',
                points: 1,
                description:
                  'A térítők környékén leszálló légmozgás miatt magas a légnyomás (térítői magasnyomású öv).',
                auto: {
                  fieldIds: ['II-5-f1'],
                  alternatives: [[['magas'], ['nyom', 'légnyom']], [['leszáll']]],
                },
              },
              {
                id: 's2',
                points: 1,
                description:
                  'Az Egyenlítőnél a felszálló meleg levegő miatt alacsony a légnyomás, és a levegő a magasabb nyomású hely felől az alacsonyabb felé áramlik.',
                auto: {
                  fieldIds: ['II-5-f1'],
                  alternatives: [[['alacsony'], ['nyom', 'légnyom']], [['felszáll']]],
                },
              },
            ],
          },
          explanation:
            'A térítőknél leszálló levegő magas, az Egyenlítőnél felszálló levegő alacsony légnyomást okoz; a szél a magasabb nyomású terület felől fúj az alacsonyabb felé.',
          hints: ['Hol száll fel és hol száll le a levegő? Melyikhez tartozik magas légnyomás?'],
        },
      ],
    },
  ],
};
