import { HISTORY_ESSAY_EXAMPLES, HUNGARIAN_ESSAY_EXAMPLES } from './demoExamples';
/**
 * Self-written sample papers for the public demo pack and the e2e tests.
 * They follow the structure of real középszint papers but are NOT official
 * érettségi tasks. `pdfText` is the plain-text version printed on the PDF when
 * the rich text contains LaTeX or markup.
 */
import type { Exam, Field, Part, SourceMaterial, Task } from '../../src/content/schema.types';

export type DemoTask = Omit<Task, 'pdfRect' | 'fields'> & {
  pdfText?: string;
  fields: Omit<Field, 'pdfRect'>[];
};
export type DemoPart = Omit<Part, 'tasks'> & { tasks: DemoTask[]; sourceIds?: string[] };
export type DemoSource = Omit<SourceMaterial, 'pdfRects'>;
export type DemoExam = Omit<Exam, 'parts' | 'sources' | 'source' | 'schemaVersion' | 'review'> & {
  subjectName: string;
  parts: DemoPart[];
  sources?: DemoSource[];
};

const TRUE_FALSE = [
  { value: 'igaz', label: 'igaz' },
  { value: 'hamis', label: 'hamis' },
];

const CONCEPTS = [
  { value: 'A', label: 'jobbágyfelszabadítás' },
  { value: 'B', label: 'a nemesi adómentesség megszüntetése' },
  { value: 'C', label: 'a cenzúra eltörlése' },
  { value: 'D', label: 'nemzeti bank' },
];

const tf = (taskId: string, statements: string[]): DemoTask['fields'] =>
  statements.map((label, i) => ({
    id: `${taskId}-f${i + 1}`,
    kind: 'choice',
    label,
    options: TRUE_FALSE,
  }));

export const DEMO_EXAMS: DemoExam[] = [
  {
    id: 'matematika-kozep-2026-majus-minta',
    subject: 'matematika',
    subjectName: 'Matematika',
    level: 'kozep',
    year: 2026,
    session: 'majus',
    format: '2024',
    title: 'Mintafeladatsor – Matematika, középszint',
    sample: true,
    maxPoints: 34,
    parts: [
      {
        id: 'I',
        title: 'I. rész',
        timeLimitMinutes: 45,
        maxPoints: 10,
        instructions:
          'A feladatok megoldásához zsebszámológépet és függvénytáblázatot használhat. Válaszait a kijelölt helyre írja!',
        tasks: [
          {
            id: '1',
            number: '1.',
            type: 'short_answer',
            text: 'Oldja meg a valós számok halmazán a következő egyenletet: $3x - 7 = 11$',
            pdfText: 'Oldja meg a valós számok halmazán a következő egyenletet: 3x − 7 = 11',
            maxPoints: 2,
            topics: ['elsőfokú egyenlet'],
            fields: [{ id: '1-f1', kind: 'number', label: 'x =' }],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['1-f1'],
                  answer: { kind: 'number', accepted: [6] },
                },
              ],
            },
            explanation: 'Mindkét oldalhoz 7-et adva 3x = 18, majd 3-mal osztva x = 6.',
            hints: ['Először vigye át a −7-et a jobb oldalra!'],
          },
          {
            id: '2',
            number: '2.',
            type: 'multiple_choice',
            text: 'Melyik szám osztója a 84-nek? Adja meg az összes helyes válasz betűjelét!',
            maxPoints: 2,
            topics: ['oszthatóság'],
            fields: [
              {
                id: '2-f1',
                kind: 'multi',
                label: 'Helyes válaszok:',
                options: [
                  { value: 'A', label: '5' },
                  { value: 'B', label: '7' },
                  { value: 'C', label: '12' },
                  { value: 'D', label: '16' },
                ],
              },
            ],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['2-f1'],
                  answer: { kind: 'choice', correct: ['B', 'C'] },
                  partial: { perItem: 1, penalizeWrong: true },
                },
              ],
            },
            explanation: '84 = 2² · 3 · 7, ezért a 7 és a 12 osztója, az 5 és a 16 nem.',
          },
          {
            id: '3',
            number: '3.',
            type: 'true_false',
            text: 'Döntse el, hogy igazak vagy hamisak a következő állítások!',
            maxPoints: 2,
            topics: ['logika', 'számhalmazok'],
            fields: tf('3', [
              'A) Minden négyzet rombusz.',
              'B) A 0 páros szám.',
              'C) Két negatív szám szorzata negatív.',
            ]),
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['3-f1', '3-f2', '3-f3'],
                  answer: {
                    kind: 'matching',
                    pairs: { '3-f1': 'igaz', '3-f2': 'igaz', '3-f3': 'hamis' },
                  },
                  partial: {
                    table: [
                      { correct: 2, points: 1 },
                      { correct: 3, points: 2 },
                    ],
                  },
                },
              ],
            },
            explanation:
              'A négyzet minden oldala egyenlő, tehát rombusz. A 0 osztható 2-vel, így páros. Két negatív szám szorzata pozitív.',
          },
          {
            id: '4',
            number: '4.',
            type: 'short_answer',
            text: 'Egy termék ára 2000 Ft. Az árát 15%-kal csökkentik. Mennyi lesz az új ár?',
            maxPoints: 2,
            topics: ['százalékszámítás'],
            fields: [{ id: '4-f1', kind: 'number', label: 'Az új ár:', unit: 'Ft' }],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['4-f1'],
                  answer: { kind: 'number', accepted: [1700] },
                },
              ],
            },
            explanation: 'A csökkentés 2000 · 0,15 = 300 Ft, így az új ár 2000 − 300 = 1700 Ft.',
          },
          {
            id: '5',
            number: '5.',
            type: 'short_answer',
            text: 'Adja meg a $2x^2 - 8 = 0$ egyenlet valós megoldásait!',
            pdfText: 'Adja meg a 2x² − 8 = 0 egyenlet valós megoldásait!',
            maxPoints: 2,
            topics: ['másodfokú egyenlet'],
            fields: [
              { id: '5-f1', kind: 'text', label: 'x₁ =' },
              { id: '5-f2', kind: 'text', label: 'x₂ =' },
            ],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['5-f1', '5-f2'],
                  answer: {
                    kind: 'set',
                    items: [
                      ['2', '+2'],
                      ['-2', '−2'],
                    ],
                    order: 'any',
                    normalize: { ignoreSpaces: true },
                  },
                  partial: { perItem: 1 },
                },
              ],
            },
            explanation: '2x² = 8, x² = 4, ezért x = 2 vagy x = −2.',
          },
        ],
      },
      {
        id: 'II',
        title: 'II. rész',
        timeLimitMinutes: 135,
        maxPoints: 24,
        instructions:
          'A 6. feladatot mindenkinek meg kell oldania. A 7. és a 8. feladat közül csak az egyiket kell megoldania. Gondolatmenetét, számításait is írja le!',
        choices: [
          { label: 'A 7. és a 8. feladat közül válasszon egyet!', pick: 1, taskIds: ['7', '8'] },
        ],
        tasks: [
          {
            id: '6a',
            number: '6. a)',
            type: 'calculation',
            text: 'Egy derékszögű háromszög két befogója 6 cm és 8 cm hosszú. Számítsa ki az átfogó hosszát!',
            maxPoints: 3,
            topics: ['Pitagorasz-tétel'],
            fields: [
              { id: '6a-w', kind: 'work', label: 'Számítás:' },
              { id: '6a-f1', kind: 'number', label: 'Az átfogó:', unit: 'cm' },
            ],
            scoring: {
              steps: [
                {
                  id: 's1',
                  points: 1,
                  description: 'A Pitagorasz-tétel helyes felírása: c² = 6² + 8².',
                  auto: { fieldIds: ['6a-w'], alternatives: [[['36'], ['64']], [['100']]] },
                },
              ],
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['6a-f1'],
                  answer: { kind: 'number', accepted: [10] },
                },
              ],
            },
            explanation: 'c² = 36 + 64 = 100, így c = 10 cm.',
          },
          {
            id: '6b',
            number: '6. b)',
            type: 'calculation',
            text: 'Számítsa ki a háromszög területét!',
            maxPoints: 3,
            topics: ['háromszög területe'],
            fields: [
              { id: '6b-w', kind: 'work', label: 'Számítás:' },
              { id: '6b-f1', kind: 'number', label: 'A terület:', unit: 'cm²' },
            ],
            scoring: {
              steps: [
                {
                  id: 's1',
                  points: 1,
                  description: 'A terület képletének felírása: T = (a · b) / 2.',
                  auto: { fieldIds: ['6b-w'], alternatives: [[['6'], ['8'], ['2']], [['48']]] },
                },
              ],
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['6b-f1'],
                  answer: { kind: 'number', accepted: [24] },
                },
              ],
            },
            explanation:
              'Derékszögű háromszögben a befogók szorzatának fele a terület: 6 · 8 / 2 = 24 cm².',
          },
          {
            id: '6c',
            number: '6. c)',
            type: 'calculation',
            text: 'Számítsa ki a háromszög legkisebb szögét fokban, egy tizedesjegyre kerekítve!',
            maxPoints: 6,
            topics: ['szögfüggvények'],
            fields: [
              { id: '6c-w', kind: 'work', label: 'Számítás:' },
              { id: '6c-f1', kind: 'number', label: 'A legkisebb szög:', unit: '°' },
            ],
            scoring: {
              steps: [
                {
                  id: 's1',
                  points: 1,
                  description:
                    'Annak felismerése, hogy a legkisebb szög a 6 cm-es befogóval szemben van.',
                  auto: {
                    fieldIds: ['6c-w'],
                    alternatives: [[['6'], ['szemben', 'legkisebb', 'legrövidebb']]],
                  },
                },
                {
                  id: 's2',
                  points: 2,
                  description: 'Megfelelő szögfüggvény felírása, például tg α = 6/8.',
                  auto: {
                    fieldIds: ['6c-w'],
                    alternatives: [
                      [['tg', 'tan'], ['6'], ['8']],
                      [['sin'], ['6'], ['10']],
                      [['cos'], ['8'], ['10']],
                    ],
                  },
                },
                {
                  id: 's3',
                  points: 1,
                  description: 'tg α = 0,75 helyes kiszámítása.',
                  auto: { fieldIds: ['6c-w'], alternatives: [[['0,75']], [['0,6']], [['0,8']]] },
                },
              ],
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['6c-f1'],
                  answer: { kind: 'number', accepted: [36.9], tolerance: 0.05 },
                },
              ],
            },
            explanation:
              'A legrövidebb oldallal szemben van a legkisebb szög: tg α = 6/8 = 0,75, ebből α ≈ 36,9°.',
          },
          {
            id: '7',
            number: '7.',
            type: 'calculation',
            text:
              'Egy 30 fős osztály matematikajegyei: 6 tanuló 5-ös, 9 tanuló 4-es, 10 tanuló 3-as, 5 tanuló 2-es.\n\n' +
              'a) Számítsa ki a jegyek átlagát két tizedesjegyre kerekítve!\n\n' +
              'b) Adja meg a jegyek móduszát és mediánját!\n\n' +
              'c) Véletlenszerűen kiválasztunk egy tanulót. Mennyi a valószínűsége, hogy legalább 4-es a jegye?',
            maxPoints: 12,
            topics: ['statisztika', 'valószínűség'],
            fields: [
              { id: '7-w', kind: 'work', label: 'Számítás:' },
              { id: '7-f1', kind: 'number', label: 'a) Átlag:' },
              { id: '7-f2', kind: 'number', label: 'b) Módusz:' },
              { id: '7-f3', kind: 'number', label: 'b) Medián:' },
              { id: '7-f4', kind: 'number', label: 'c) Valószínűség:' },
            ],
            scoring: {
              steps: [
                {
                  id: 's1',
                  points: 2,
                  description: 'Az átlag helyes felírása: (6 · 5 + 9 · 4 + 10 · 3 + 5 · 2) / 30.',
                  auto: {
                    fieldIds: ['7-w'],
                    alternatives: [[['106']], [['30'], ['36'], ['10'], ['5']]],
                  },
                },
                {
                  id: 's2',
                  points: 2,
                  description: 'A kedvező esetek számának meghatározása: 9 + 6 = 15.',
                  auto: { fieldIds: ['7-w'], alternatives: [[['15']]] },
                },
              ],
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['7-f1'],
                  answer: { kind: 'number', accepted: [3.53], tolerance: 0.005 },
                },
                {
                  id: 'r2',
                  points: 2,
                  fieldIds: ['7-f2'],
                  answer: { kind: 'number', accepted: [3] },
                },
                {
                  id: 'r3',
                  points: 2,
                  fieldIds: ['7-f3'],
                  answer: { kind: 'number', accepted: [3.5] },
                },
                {
                  id: 'r4',
                  points: 2,
                  fieldIds: ['7-f4'],
                  answer: { kind: 'number', accepted: [0.5], tolerance: 0.001 },
                },
              ],
            },
            explanation:
              'Átlag: 106 / 30 ≈ 3,53. A leggyakoribb jegy a 3-as (10 tanuló), ez a módusz. Sorba rendezve a 15. jegy 3-as, a 16. jegy 4-es, így a medián 3,5. Legalább 4-es 15 tanuló, a valószínűség 15/30 = 0,5.',
          },
          {
            id: '8',
            number: '8.',
            type: 'calculation',
            text:
              'Egy számtani sorozat első tagja 3, differenciája 4.\n\n' +
              'a) Adja meg a sorozat 10. tagját!\n\n' +
              'b) Számítsa ki a sorozat első 10 tagjának összegét!\n\n' +
              'c) Hányadik tagja a sorozatnak a 99?',
            maxPoints: 12,
            topics: ['számtani sorozat'],
            fields: [
              { id: '8-w', kind: 'work', label: 'Számítás:' },
              { id: '8-f1', kind: 'number', label: 'a) A 10. tag:' },
              { id: '8-f2', kind: 'number', label: 'b) Az összeg:' },
              { id: '8-f3', kind: 'number', label: 'c) Sorszám:' },
            ],
            scoring: {
              steps: [
                {
                  id: 's1',
                  points: 2,
                  description: 'Az aₙ = a₁ + (n − 1) · d képlet helyes alkalmazása.',
                  auto: { fieldIds: ['8-w'], alternatives: [[['39']]] },
                },
                {
                  id: 's2',
                  points: 2,
                  description: 'Az összegképlet helyes alkalmazása: S₁₀ = 10 · (a₁ + a₁₀) / 2.',
                  auto: { fieldIds: ['8-w'], alternatives: [[['210']], [['42']]] },
                },
                {
                  id: 's3',
                  points: 2,
                  description: 'A 3 + (n − 1) · 4 = 99 egyenlet felírása.',
                  auto: {
                    fieldIds: ['8-w'],
                    alternatives: [
                      [['99'], ['96']],
                      [['99'], ['24']],
                    ],
                  },
                },
              ],
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['8-f1'],
                  answer: { kind: 'number', accepted: [39] },
                },
                {
                  id: 'r2',
                  points: 2,
                  fieldIds: ['8-f2'],
                  answer: { kind: 'number', accepted: [210] },
                },
                {
                  id: 'r3',
                  points: 2,
                  fieldIds: ['8-f3'],
                  answer: { kind: 'number', accepted: [25] },
                },
              ],
            },
            explanation:
              'a₁₀ = 3 + 9 · 4 = 39; S₁₀ = 10 · (3 + 39) / 2 = 210; 3 + (n − 1) · 4 = 99-ből n = 25.',
          },
        ],
      },
    ],
  },
  {
    id: 'tortenelem-kozep-2026-majus-minta',
    subject: 'tortenelem',
    subjectName: 'Történelem',
    level: 'kozep',
    year: 2026,
    session: 'majus',
    format: '2024',
    title: 'Mintafeladatsor – Történelem, középszint',
    sample: true,
    maxPoints: 24,
    sources: [
      {
        id: 'src-1',
        kind: 'text',
        title: 'Részlet a 12 pontból (Pest, 1848. március 15.)',
        text:
          'Mit kíván a magyar nemzet. Legyen béke, szabadság és egyetértés.\n\n' +
          '1. Kívánjuk a sajtó szabadságát, cenzúra eltörlését.\n\n' +
          '4. Törvény előtti egyenlőséget polgári és vallási tekintetben.\n\n' +
          '6. Közös teherviselést.\n\n' +
          '7. Úrbéri viszonyok megszüntetését.\n\n' +
          '12. Uniót Erdéllyel.',
        credit: 'Közkincs (1848).',
      },
    ],
    parts: [
      {
        id: 'I',
        title: 'I. Rövid választ igénylő feladatok',
        timeLimitMinutes: 60,
        maxPoints: 8,
        instructions:
          'Olvassa el figyelmesen a forrást és a kérdéseket! Válaszait a kijelölt helyre írja!',
        sourceIds: ['src-1'],
        tasks: [
          {
            id: '1',
            number: '1.',
            type: 'short_answer',
            text: 'Melyik évben fogalmazták meg a forrásban olvasható követeléseket?',
            sourceRefs: ['src-1'],
            maxPoints: 1,
            topics: ['1848–49-es forradalom'],
            fields: [{ id: '1-f1', kind: 'text', label: 'Évszám:' }],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 1,
                  fieldIds: ['1-f1'],
                  answer: { kind: 'text', accepted: ['1848'] },
                },
              ],
            },
            explanation: 'A 12 pontot 1848. március 15-én nyomtatták ki Pesten.',
          },
          {
            id: '2',
            number: '2.',
            type: 'multiple_choice',
            text: 'Ki fogalmazta meg a 12 pontot? Írja a helyes válasz betűjelét a kijelölt helyre!',
            sourceRefs: ['src-1'],
            maxPoints: 1,
            topics: ['1848–49-es forradalom'],
            fields: [
              {
                id: '2-f1',
                kind: 'choice',
                label: 'Betűjel:',
                options: [
                  { value: 'A', label: 'Széchenyi István' },
                  { value: 'B', label: 'Irinyi József' },
                  { value: 'C', label: 'Deák Ferenc' },
                  { value: 'D', label: 'Batthyány Lajos' },
                ],
              },
            ],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 1,
                  fieldIds: ['2-f1'],
                  answer: { kind: 'choice', correct: ['B'] },
                },
              ],
            },
            explanation:
              'A 12 pontot Irinyi József fogalmazta meg; március 15-én Petőfi Sándor és társai nyomtatták ki.',
          },
          {
            id: '3',
            number: '3.',
            type: 'matching',
            text: 'Párosítsa a forrás követeléseit a fogalmakkal! Írja a fogalom betűjelét a követelés mellé! Egy fogalom kimarad.',
            sourceRefs: ['src-1'],
            maxPoints: 2,
            topics: ['reformkor', 'polgári átalakulás'],
            fields: [
              { id: '3-f1', kind: 'choice', label: '„Közös teherviselést.”', options: CONCEPTS },
              {
                id: '3-f2',
                kind: 'choice',
                label: '„Úrbéri viszonyok megszüntetését.”',
                options: CONCEPTS,
              },
              {
                id: '3-f3',
                kind: 'choice',
                label: '„Kívánjuk a sajtó szabadságát, cenzúra eltörlését.”',
                options: CONCEPTS,
              },
            ],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['3-f1', '3-f2', '3-f3'],
                  answer: { kind: 'matching', pairs: { '3-f1': 'B', '3-f2': 'A', '3-f3': 'C' } },
                  partial: {
                    table: [
                      { correct: 2, points: 1 },
                      { correct: 3, points: 2 },
                    ],
                  },
                },
              ],
            },
            explanation:
              'A közös teherviselés a nemesi adómentesség megszüntetését jelenti, az úrbéri viszonyok megszüntetése a jobbágyfelszabadítást, a sajtószabadság pedig a cenzúra eltörlését.',
          },
          {
            id: '4',
            number: '4.',
            type: 'true_false',
            text: 'Döntse el, hogy igazak vagy hamisak a következő állítások!',
            maxPoints: 2,
            topics: ['1848–49-es forradalom'],
            fields: tf('4', [
              'A) A 12 pontot 1848. március 15-én nyomtatták ki.',
              'B) Az áprilisi törvényeket I. Ferenc József szentesítette.',
              'C) Az első felelős magyar kormány miniszterelnöke Batthyány Lajos volt.',
            ]),
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['4-f1', '4-f2', '4-f3'],
                  answer: {
                    kind: 'matching',
                    pairs: { '4-f1': 'igaz', '4-f2': 'hamis', '4-f3': 'igaz' },
                  },
                  partial: {
                    table: [
                      { correct: 2, points: 1 },
                      { correct: 3, points: 2 },
                    ],
                  },
                },
              ],
            },
            explanation:
              'Az áprilisi törvényeket V. Ferdinánd szentesítette 1848. április 11-én. Az első felelős kormányt Batthyány Lajos vezette.',
          },
          {
            id: '5',
            number: '5.',
            type: 'short_answer',
            text: 'Nevezzen meg két reformkori politikust!',
            maxPoints: 2,
            topics: ['reformkor'],
            fields: [
              { id: '5-f1', kind: 'text', label: 'Első politikus:' },
              { id: '5-f2', kind: 'text', label: 'Második politikus:' },
            ],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['5-f1', '5-f2'],
                  answer: {
                    kind: 'set',
                    order: 'any',
                    items: [
                      ['Széchenyi István', 'Széchenyi', 'gróf Széchenyi István'],
                      ['Kossuth Lajos', 'Kossuth'],
                      ['Deák Ferenc', 'Deák'],
                      ['Wesselényi Miklós', 'Wesselényi'],
                      ['Eötvös József', 'Eötvös'],
                      ['Batthyány Lajos', 'Batthyány'],
                    ],
                  },
                  partial: { perItem: 1 },
                },
              ],
            },
            explanation:
              'Például Széchenyi István, Kossuth Lajos, Deák Ferenc, Wesselényi Miklós vagy Eötvös József.',
          },
        ],
      },
      {
        id: 'II',
        title: 'II. Esszé',
        timeLimitMinutes: 60,
        maxPoints: 16,
        instructions:
          'Fejtse ki a válaszát összefüggő szövegben! Használja fel a forrást és a tanultakat!',
        tasks: [
          {
            id: '6',
            number: '6.',
            type: 'essay',
            text: 'Mutassa be az 1848-as áprilisi törvények főbb rendelkezéseit és jelentőségét! Válaszában használja fel a forrást és ismereteit!',
            sourceRefs: ['src-1'],
            maxPoints: 16,
            topics: ['áprilisi törvények', 'polgári átalakulás'],
            fields: [{ id: '6-f1', kind: 'essay', label: 'Esszé:' }],
            scoring: {
              criteria: [
                {
                  id: 'c1',
                  label: 'Feladatmegértés',
                  maxPoints: 2,
                  levels: [
                    {
                      points: 2,
                      description:
                        'A válasz a feladat lényegére, az áprilisi törvényekre és jelentőségükre összpontosít.',
                    },
                    { points: 1, description: 'A válasz csak részben kapcsolódik a feladathoz.' },
                    { points: 0, description: 'A válasz nem a feladatra felel.' },
                  ],
                },
                {
                  id: 'c2',
                  label: 'Tájékozódás térben és időben',
                  maxPoints: 2,
                  description: 'Például: 1848 márciusa–áprilisa, Pozsony, Pest-Buda.',
                },
                {
                  id: 'c3',
                  label: 'Szaknyelv alkalmazása',
                  maxPoints: 2,
                  description:
                    'Például: felelős kormány, népképviselet, jobbágyfelszabadítás, közteherviselés.',
                },
                {
                  id: 'c4',
                  label: 'Források használata',
                  maxPoints: 4,
                  description:
                    'A forrás követeléseinek értelmezése és összekapcsolása a törvényekkel.',
                },
                {
                  id: 'c5',
                  label: 'Események és összefüggések',
                  maxPoints: 4,
                  description:
                    'Például: a törvények tartalma, a polgári átalakulás, a jobbágyfelszabadítás következményei.',
                },
                { id: 'c6', label: 'Megszerkesztettség, nyelvhelyesség', maxPoints: 2 },
              ],
            },
            examples: HISTORY_ESSAY_EXAMPLES,
            explanation:
              'Jó válasz például: a felelős kormány, az évenkénti országgyűlés Pesten, a népképviselet, a közteherviselés és a jobbágyfelszabadítás bemutatása, valamint annak értékelése, hogy a törvények megteremtették a polgári Magyarország alapjait.',
          },
        ],
      },
    ],
  },
  {
    id: 'magyar-kozep-2026-majus-minta',
    subject: 'magyar',
    subjectName: 'Magyar nyelv és irodalom',
    level: 'kozep',
    year: 2026,
    session: 'majus',
    format: '2024',
    title: 'Mintafeladatsor – Magyar nyelv és irodalom, középszint',
    sample: true,
    maxPoints: 27,
    sources: [
      {
        id: 'src-1',
        kind: 'text',
        title: 'A magyar tenger',
        text:
          'A Balaton Közép-Európa legnagyobb tava: felszíne csaknem hatszáz négyzetkilométer. Mégis meglepően sekély, átlagos mélysége alig több mint három méter, ezért nyáron gyorsan felmelegszik, télen pedig gyakran befagy.\n\n' +
          'A tó legfontosabb tápláló vize a Zala folyó, amely a nyugati medencébe torkollik. A víz a Sió-csatornán keresztül távozik a Duna felé; a csatorna zsilipje segít szabályozni a vízszintet.\n\n' +
          'Az északi part dombjain évszázadok óta szőlőt termesztenek, a déli part homokos, lapos partszakaszai pedig a családok kedvelt fürdőhelyei. A Tihanyi-félsziget a tó egyik legkeskenyebb pontjánál nyúlik a vízbe.',
        credit: 'Az Érettségi Gyakorló saját szövege.',
      },
    ],
    parts: [
      {
        id: 'I',
        title: 'I. Szövegértés',
        timeLimitMinutes: 60,
        maxPoints: 7,
        instructions:
          'Olvassa el a szöveget, majd válaszoljon a kérdésekre! Válaszait a kijelölt helyre írja!',
        sourceIds: ['src-1'],
        tasks: [
          {
            id: '1',
            number: '1.',
            type: 'short_answer',
            text: 'Melyik folyó a Balaton legfontosabb tápláló vize a szöveg szerint?',
            sourceRefs: ['src-1'],
            maxPoints: 1,
            topics: ['szövegértés'],
            fields: [{ id: '1-f1', kind: 'text', label: 'A folyó neve:' }],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 1,
                  fieldIds: ['1-f1'],
                  answer: {
                    kind: 'text',
                    accepted: ['Zala', 'a Zala', 'Zala folyó', 'a Zala folyó'],
                  },
                },
              ],
            },
            explanation:
              'A szöveg második bekezdése szerint a Zala folyó a tó legfontosabb tápláló vize.',
          },
          {
            id: '2',
            number: '2.',
            type: 'multiple_choice',
            text: 'Mi a szöveg fő témája? Írja a helyes válasz betűjelét a kijelölt helyre!',
            sourceRefs: ['src-1'],
            maxPoints: 1,
            topics: ['szövegértés'],
            fields: [
              {
                id: '2-f1',
                kind: 'choice',
                label: 'Betűjel:',
                options: [
                  { value: 'A', label: 'a balatoni szőlőtermesztés története' },
                  { value: 'B', label: 'a Balaton földrajzi jellemzői' },
                  { value: 'C', label: 'a Sió-csatorna építése' },
                  { value: 'D', label: 'a balatoni nyaralás költségei' },
                ],
              },
            ],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 1,
                  fieldIds: ['2-f1'],
                  answer: { kind: 'choice', correct: ['B'] },
                },
              ],
            },
            explanation:
              'A szöveg a tó méretét, mélységét, vízrendszerét és partjait mutatja be, vagyis földrajzi jellemzőit.',
          },
          {
            id: '3',
            number: '3.',
            type: 'true_false',
            text: 'Döntse el a szöveg alapján, hogy igazak vagy hamisak az állítások!',
            sourceRefs: ['src-1'],
            maxPoints: 2,
            topics: ['szövegértés'],
            fields: tf('3', [
              'A) A Balaton átlagos mélysége több mint tíz méter.',
              'B) A tó vize a Sió-csatornán át távozik.',
              'C) A déli part homokos és lapos.',
            ]),
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 2,
                  fieldIds: ['3-f1', '3-f2', '3-f3'],
                  answer: {
                    kind: 'matching',
                    pairs: { '3-f1': 'hamis', '3-f2': 'igaz', '3-f3': 'igaz' },
                  },
                  partial: {
                    table: [
                      { correct: 2, points: 1 },
                      { correct: 3, points: 2 },
                    ],
                  },
                },
              ],
            },
            explanation:
              'A szöveg szerint az átlagos mélység alig több mint három méter; a víz a Sió-csatornán távozik; a déli part homokos és lapos.',
          },
          {
            id: '4',
            number: '4.',
            type: 'short_answer',
            text: 'Keressen a szövegben egy összetett szót, és bontsa elemeire!',
            sourceRefs: ['src-1'],
            maxPoints: 2,
            topics: ['szóalkotás', 'összetett szavak'],
            fields: [
              { id: '4-f1', kind: 'text', label: 'Összetett szó:' },
              { id: '4-f2', kind: 'text', label: 'Elemei:' },
            ],
            scoring: {
              steps: [
                {
                  id: 's1',
                  points: 1,
                  description:
                    'Helyes összetett szó a szövegből, például: négyzetkilométer, vízszint, fürdőhely, félsziget.',
                  auto: {
                    fieldIds: ['4-f1'],
                    alternatives: [
                      [['négyzetkilométer']],
                      [['vízszint']],
                      [['fürdőhely']],
                      [['félsziget']],
                    ],
                  },
                },
                {
                  id: 's2',
                  points: 1,
                  description:
                    'Helyes elemekre bontás, például: víz + szint, fürdő + hely, fél + sziget.',
                  auto: {
                    fieldIds: ['4-f1', '4-f2'],
                    alternatives: [
                      [['víz'], ['szint']],
                      [['fürdő'], ['hely']],
                      [['fél'], ['sziget']],
                      [['négyzet'], ['kilométer']],
                    ],
                  },
                },
              ],
            },
            explanation:
              'Összetett szó két vagy több önálló szóból áll, például vízszint = víz + szint.',
          },
          {
            id: '5',
            number: '5.',
            type: 'short_answer',
            text: 'Milyen szófajú a „sekély” szó a szöveg első bekezdésében?',
            sourceRefs: ['src-1'],
            maxPoints: 1,
            topics: ['szófajok'],
            fields: [{ id: '5-f1', kind: 'text', label: 'Szófaj:' }],
            scoring: {
              rules: [
                {
                  id: 'r1',
                  points: 1,
                  fieldIds: ['5-f1'],
                  answer: { kind: 'text', accepted: ['melléknév'] },
                },
              ],
            },
            explanation: 'A „sekély” tulajdonságot fejez ki (milyen a tó?), tehát melléknév.',
          },
        ],
      },
      {
        id: 'II',
        title: 'II. Szövegalkotás',
        timeLimitMinutes: 90,
        maxPoints: 20,
        instructions:
          'Írjon összefüggő, érvelő szöveget! Ügyeljen a helyesírásra és a szöveg tagolására!',
        tasks: [
          {
            id: '6',
            number: '6.',
            type: 'long_writing',
            text: 'Érdemes-e a nyári szünidőben belföldön utazni? Írjon érvelő esszét a kérdésről! Fogalmazza meg álláspontját, és támassza alá legalább két érvvel és példával! Szövegének terjedelme legalább 250 szó legyen.',
            maxPoints: 20,
            topics: ['érvelés'],
            wordLimit: { min: 250 },
            fields: [{ id: '6-f1', kind: 'essay', label: 'Érvelő esszé:' }],
            scoring: {
              criteria: [
                {
                  id: 'c1',
                  label: 'Tartalom, érvelés',
                  maxPoints: 8,
                  levels: [
                    {
                      points: 8,
                      description:
                        'Világos álláspont, legalább két kifejtett érv, meggyőző példákkal.',
                    },
                    {
                      points: 5,
                      description: 'Van álláspont és érv, de a kifejtés vagy a példák hiányosak.',
                    },
                    {
                      points: 2,
                      description: 'Az álláspont homályos, az érvek alig kidolgozottak.',
                    },
                    { points: 0, description: 'Nincs érvelés.' },
                  ],
                },
                {
                  id: 'c2',
                  label: 'Szerkezet, kompozíció',
                  maxPoints: 4,
                  description: 'Bevezetés, tárgyalás, befejezés; logikus bekezdések.',
                },
                {
                  id: 'c3',
                  label: 'Nyelvi minőség, stílus',
                  maxPoints: 4,
                  description: 'Változatos szókincs, a témához illő stílus.',
                },
                {
                  id: 'c4',
                  label: 'Helyesírás, nyelvhelyesség',
                  maxPoints: 4,
                  description: 'Kevés vagy semmilyen helyesírási és nyelvhelyességi hiba.',
                },
              ],
            },
            explanation:
              'Az érvelő esszében egyértelmű álláspontot kell megfogalmazni, és azt érvekkel, példákkal kell alátámasztani. A terjedelmi követelmény legalább 250 szó.',
            examples: HUNGARIAN_ESSAY_EXAMPLES,
          },
        ],
      },
    ],
  },
];
