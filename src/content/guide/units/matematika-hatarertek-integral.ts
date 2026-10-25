import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics: 3.4.1 Határérték, folytonosság; 3.4.3 Integrálszámítás. */
const unit: GuideUnit = {
  id: 'hatarertek-integral',
  subject: 'matematika',
  order: 38,
  title: 'Határérték, folytonosság és integrálszámítás',
  requirementRef: '3.4.1 Határérték, folytonosság; 3.4.3 Integrálszámítás',
  intro:
    'Emelt szintű analízis: a határérték és a folytonosság szemléletes fogalma, majd a határozott integrál, a primitív függvény és a Newton–Leibniz-tétel a grafikon alatti terület kiszámolásához.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (3.4.1, 3.4.3). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'hatarertek-szemleletes',
      subject: 'matematika',
      unitId: 'hatarertek-integral',
      title: 'A határérték szemléletes fogalma',
      level: 'emelt',
      requirement: {
        emelt:
          'A végesben vett véges, a végtelenben vett véges és a tágabb értelemben vett (végtelen) határérték szemléletes fogalma',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **határérték** azt mondja meg, hogy a függvényérték **mihez közeledik**, ha $x$ közelít valamihez. Nem az számít, mi a függvényérték *magában* a helyen.',
            '**Véges helyen vett véges határérték**: $\\lim_{x \\to a} f(x) = A$, ha $x$ az $a$-hoz elég közel kerülve $f(x)$ tetszőlegesen közel kerül $A$-hoz.',
            '**Végtelenben vett véges határérték**: $\\lim_{x \\to \\infty} f(x) = A$, ha $x$ nagyon nagy értékeinél $f(x)$ az $A$-hoz simul.',
            '**Tágabb értelemben vett határérték**: $\\lim f(x) = \\infty$ vagy $-\\infty$, ha az értékek minden határon túl nőnek, illetve csökkennek.',
          ],
        },
        {
          kind: 'plot',
          title: 'f(x) = (x² − 1)/(x − 1): az x = 1 helyen nincs értéke, de a határértéke 2',
          x: [-2, 4],
          y: [-2, 6],
          functions: [
            {
              label: 'f(x) = (x² − 1)/(x − 1)',
              fn: (x) => (Math.abs(x - 1) < 1e-9 ? NaN : (x * x - 1) / (x - 1)),
            },
          ],
          points: [
            { x: 1, y: 2, label: 'határérték x → 1-nél: 2' },
            { x: 0, y: 1, label: 'f(0) = 1' },
            { x: 3, y: 4, label: 'f(3) = 4' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Határérték véges helyen' },
        {
          kind: 'text',
          text: 'A $\\lim_{x \\to a} f(x) = A$ azt jelenti: ha az $x$ értékeket az $a$ szám mindkét oldaláról egyre közelebb választjuk hozzá ($x \\neq a$), akkor az $f(x)$ értékek egyre közelebb kerülnek az $A$ számhoz. Az $f$ függvénynek nem kell értelmezve lennie az $a$ helyen.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Mennyi $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1}$?',
          solution:
            'Az $x = 1$ helyen a tört nincs értelmezve ($\\frac{0}{0}$). Ha $x \\neq 1$, akkor $\\dfrac{x^2 - 1}{x - 1} = \\dfrac{(x - 1)(x + 1)}{x - 1} = x + 1$. Ez az $x = 1$ közelében a 2-höz közelít, ezért a határérték 2.\n\nÉrtékek: $f(0{,}9) = 1{,}9$; $f(1{,}1) = 2{,}1$; $f(0{,}99) = 1{,}99$.',
        },
        {
          kind: 'tip',
          text: 'Ha egy tört számlálója és nevezője is nullához tart, érdemes a számlálót vagy a nevezőt szorzattá alakítani, és egyszerűsíteni. Polinomnál ez a gyöktényező kiemelése.',
        },
        { kind: 'heading', text: 'Határérték a végtelenben' },
        {
          kind: 'text',
          text: 'Ha $x$ minden határon túl nő, a függvényérték megközelíthet egy számot. Például $\\lim_{x \\to \\infty} \\dfrac{1}{x} = 0$, mert minél nagyobb az $x$, annál kisebb a tört.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Mennyi $\\lim_{x \\to \\infty} \\dfrac{3x^2 - 1}{x^2 + 2}$?',
          solution:
            'Osszuk el a számlálót és a nevezőt $x^2$-tel: $\\dfrac{3 - \\frac{1}{x^2}}{1 + \\frac{2}{x^2}}$. Ha $x \\to \\infty$, akkor $\\frac{1}{x^2} \\to 0$ és $\\frac{2}{x^2} \\to 0$, tehát a határérték $\\dfrac{3}{1} = 3$.\n\nPéldául $x = 1000$ esetén a tört értéke $\\dfrac{2\\,999\\,999}{1\\,000\\,002} \\approx 2{,}999993$.',
        },
        {
          kind: 'plot',
          title: 'A függvény a végtelenben a 3-hoz simul',
          x: [0, 20],
          y: [-1, 4],
          functions: [
            { label: 'f(x) = (3x² − 1)/(x² + 2)', fn: (x) => (3 * x * x - 1) / (x * x + 2) },
            { label: 'y = 3', fn: () => 3 },
          ],
          points: [{ x: 0, y: -0.5, label: 'f(0) = −0,5' }],
        },
        { kind: 'heading', text: 'Tágabb értelemben vett határérték' },
        {
          kind: 'text',
          text: 'Ha az értékek minden határon túl nőnek, azt írjuk: $\\lim f(x) = \\infty$; ha minden határon túl csökkennek: $\\lim f(x) = -\\infty$. Ilyen például $\\lim_{x \\to \\infty} x^2 = \\infty$, $\\lim_{x \\to -\\infty} x^3 = -\\infty$ és $\\lim_{x \\to 0} \\dfrac{1}{x^2} = \\infty$.',
        },
        {
          kind: 'warning',
          text: 'Az $\\frac{1}{x}$ függvénynek a $0$ helyen nincs határértéke: jobbról közelítve $+\\infty$-hez, balról közelítve $-\\infty$-hez tart. Ha a két oldalról más a viselkedés, nincs (kétoldali) határérték.',
        },
        {
          kind: 'compare',
          title: 'A három fajta határérték',
          columns: ['Hol?', 'Mihez tart?'],
          rows: [
            { label: 'véges helyen, véges érték', cells: ['$x \\to a$', '$f(x) \\to A$'] },
            { label: 'végtelenben, véges érték', cells: ['$x \\to \\pm\\infty$', '$f(x) \\to A$'] },
            {
              label: 'tágabb értelemben',
              cells: ['$x \\to a$ vagy $x \\to \\pm\\infty$', '$f(x) \\to \\pm\\infty$'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész vagy II. A rész: egy törtfüggvény (vagy sorozat) határértékének kiszámolása, a szemléletes fogalom ismerete.',
            'Grafikonról leolvasni: mihez tart a függvény a végtelenben, mi történik egy szakadási helyen.',
            'II. B részben egy hosszabb függvényvizsgálat része: a határértékek a tartomány szélein.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a határértéket az $f(a)$ helyettesítési értékkel összekeverni. A határérték attól függ, mit csinál a függvény az $a$ közelében, nem attól, mennyi $f(a)$ (ha egyáltalán van).',
        },
        {
          kind: 'tip',
          text: 'Törtnél, ha $x \\to \\infty$: oszd el a számlálót és a nevezőt a nevező legnagyobb hatványával. A "$\\frac{\\infty}{\\infty}$" nem szám, csak jelzi, hogy ezt a lépést kell megtenned.',
        },
      ],
      topicMatch: ['határérték', 'törtfüggvény határértéke'],
      quiz: [
        {
          question: 'Mennyi $\\lim_{x \\to 3} (x^2 + 1)$?',
          options: ['3', '9', '10', 'nincs határérték'],
          answer: 2,
          explanation: 'Az $x^2 + 1$ az $x = 3$ közelében a $3^2 + 1 = 10$-hez közelít.',
          emelt: true,
        },
        {
          question: 'Mennyi $\\lim_{x \\to \\infty} \\dfrac{2x + 1}{x}$?',
          options: ['0', '1', '$\\infty$', '2'],
          answer: 3,
          explanation: 'A tört $2 + \\frac{1}{x}$, és $\\frac{1}{x} \\to 0$, ezért a határérték 2.',
          emelt: true,
        },
        {
          question: 'Mennyi $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$?',
          options: ['0', '4', '2', 'nincs határérték'],
          answer: 1,
          explanation: '$x \\neq 2$ esetén a tört $x + 2$, ami $x \\to 2$ esetén 4-hez tart.',
          emelt: true,
        },
        {
          question: 'Melyik állítás igaz az $\\frac{1}{x^2}$ függvényről az $x \\to 0$ esetben?',
          options: [
            'a határérték $\\infty$',
            'a határérték 0',
            'a határérték $-\\infty$',
            'a határérték 1',
          ],
          answer: 0,
          explanation:
            'Nulla közelében $x^2$ kicsi pozitív szám, ezért a reciproka minden határon túl nő, mindkét oldalról.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Határérték (analízis)', url: wiki('Határérték (analízis)') },
        { label: 'Wikipédia: Függvény határértéke', url: wiki('Függvény határértéke') },
      ],
    },
    {
      id: 'folytonossag-szemleletes',
      subject: 'matematika',
      unitId: 'hatarertek-integral',
      title: 'A folytonosság szemléletes fogalma',
      level: 'emelt',
      requirement: {
        emelt: 'A folytonosság szemléletes fogalma',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Szemléletesen egy függvény egy intervallumon **folytonos**, ha a grafikonja **egy vonalban, a ceruza felemelése nélkül** megrajzolható.',
            'Pontosabban: az $f$ az $a$ helyen folytonos, ha $f(a)$ létezik, van határértéke $a$-ban, és $\\lim_{x \\to a} f(x) = f(a)$.',
            'Folytonos például a polinomfüggvény, a szinusz- és a koszinuszfüggvény.',
            'Szakadás: lyuk a grafikonon, ugrás vagy végtelenbe nyúló ág.',
          ],
        },
        {
          kind: 'plot',
          title: 'Ugrás az x = 2 helyen',
          x: [-1, 5],
          y: [-1, 8],
          functions: [
            {
              label: 'f(x) = x² + 1 (x < 2), 2x + 2 (x ≥ 2)',
              fn: (x) => (x < 2 ? x * x + 1 : 2 * x + 2),
            },
          ],
          points: [
            { x: 2, y: 5, label: 'balról: 5' },
            { x: 2, y: 6, label: 'f(2) = 6' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mikor folytonos egy függvény egy helyen?' },
        {
          kind: 'text',
          text: 'A határérték és a helyettesítési érték kapcsolatát vizsgáljuk. Az $f$ függvény az $a$ helyen folytonos, ha a három dolog egyszerre teljesül:\n\n- $f(a)$ létezik (az $a$ az értelmezési tartomány eleme);\n- létezik a $\\lim_{x \\to a} f(x)$ véges határérték;\n- a kettő egyenlő: $\\lim_{x \\to a} f(x) = f(a)$.',
        },
        { kind: 'heading', text: 'A szakadások fajtái' },
        {
          kind: 'terms',
          items: [
            {
              term: 'lyuk (kiküszöbölhető szakadás)',
              text: 'a határérték létezik, de a függvény ott nincs értelmezve, vagy más az értéke. Például $\\frac{x^2 - 1}{x - 1}$ az $x = 1$ helyen.',
            },
            {
              term: 'ugrás',
              text: 'balról és jobbról más értékhez tart a függvény. Például a fenti ábrán az $x = 2$ helyen $5$, illetve $6$.',
            },
            {
              term: 'végtelen szakadás',
              text: 'a függvény $\\pm\\infty$-hez tart. Például $\\frac{1}{x}$ az $x = 0$ helyen.',
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Az $f(x) = x^2 + 1$, ha $x < 2$, és $f(x) = ax - 1$, ha $x \\ge 2$. Mekkora legyen az $a$, hogy $f$ folytonos legyen az $x = 2$ helyen?',
          solution:
            'Balról közelítve a határérték $2^2 + 1 = 5$. Jobbról és $x = 2$-ben $2a - 1$. Folytonossághoz a kettőnek egyenlőnek kell lennie: $2a - 1 = 5$, ebből $a = 3$.\n\nEllenőrzés: $a = 3$ esetén $f(2) = 3 \\cdot 2 - 1 = 5$, a grafikon az $x = 2$ helyen összeér.',
        },
        {
          kind: 'tip',
          text: 'Darabonként megadott függvénynél a folytonosságot csak a "töréspontokban" kell vizsgálni, mert az egyes szakaszokon a képlet (polinom) maga is folytonos.',
        },
        {
          kind: 'keypoints',
          title: 'Miért fontos?',
          items: [
            'A határozott integrált ebben a témakörben **folytonos** függvényekre vezetjük be.',
            'Folytonos függvény zárt intervallumon felveszi a legkisebb és a legnagyobb értékét is.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: grafikonról megmondani, hol folytonos a függvény, vagy igaz–hamis állítás a folytonosságról.',
            'Paraméteres feladat: melyik paraméter mellett folytonos a darabonként megadott függvény.',
            'II. rész: függvényvizsgálat része, ahol az értelmezési tartomány és a szakadási helyek is szerepelnek.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt gondolni, hogy ami folytonos, az mindenhol értelmezve van. A folytonosságot mindig az értelmezési tartományon belül kell nézni: az $\\frac{1}{x}$ minden pontjában folytonos, ahol értelmezve van, de a $0$ helyen egyáltalán nem értelmezett.',
        },
      ],
      topicMatch: ['folytonos'],
      quiz: [
        {
          question: 'Melyik függvény folytonos az egész számegyenesen?',
          options: [
            '$\\dfrac{1}{x}$',
            '$x^2 - 5x + 6$',
            '$\\dfrac{x^2 - 1}{x - 1}$',
            'az $x \\ge 0$-nál 1, egyébként 0 értékű lépcsős függvény',
          ],
          answer: 1,
          explanation:
            'A polinomfüggvény mindenhol folytonos. A többi vagy nincs értelmezve egy helyen, vagy ugrás van benne.',
          emelt: true,
        },
        {
          question:
            'Milyen szakadása van az $f(x) = \\dfrac{x^2 - 1}{x - 1}$ függvénynek az $x = 1$ helyen?',
          options: ['ugrás', 'végtelen szakadás', 'nincs szakadása', 'lyuk'],
          answer: 3,
          explanation:
            'A határérték létezik (2), de a függvény az $x = 1$ helyen nincs értelmezve, ezért lyuk van a grafikonon.',
          emelt: true,
        },
        {
          question:
            'Az $f(x) = 2x + 1$, ha $x < 1$, és $f(x) = x^2 + b$, ha $x \\ge 1$. Mekkora $b$ mellett folytonos $f$ az $x = 1$ helyen?',
          options: ['1', '2', '3', '0'],
          answer: 1,
          explanation:
            'Balról a határérték $2 \\cdot 1 + 1 = 3$; jobbról $1 + b$. Egyenlőség: $1 + b = 3$, vagyis $b = 2$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Folytonosság', url: wiki('Folytonos függvény') },
        { label: 'Wikipédia: Szakadási hely', url: wiki('Szakadási hely') },
      ],
    },
    {
      id: 'hatarozott-integral-kozelites',
      subject: 'matematika',
      unitId: 'hatarertek-integral',
      title: 'A határozott integrál és a kétoldali közelítés',
      level: 'emelt',
      requirement: {
        emelt:
          'Folytonos függvényekre a határozott integrál szemléletes fogalma és tulajdonságai; a kétoldali közelítés módszere',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az $f$ **folytonos** függvény $[a; b]$ intervallumra vett **határozott integrálja**, $\\int_a^b f(x)\\,dx$, szemléletesen a grafikon és az $x$ tengely közötti **előjeles terület**.',
            'Az $x$ tengely **fölötti** rész területe pozitív, az **alatti** rész negatív előjellel számít.',
            '**Kétoldali közelítés**: a területet téglalapokkal alulról (alsó közelítő összeg) és felülről (felső közelítő összeg) közelítjük. Ha a kettő ugyanahhoz a számhoz tart, az az integrál.',
          ],
        },
        {
          kind: 'plot',
          title: 'Az x² görbe alatti terület [0; 1]-en: alsó és felső közelítés 4 sávval',
          x: [0, 1],
          y: [0, 1.1],
          functions: [
            { label: 'f(x) = x²', fn: (x) => x * x },
            { label: 'alsó lépcsők', fn: (x) => (Math.floor(Math.min(x, 0.9999) * 4) / 4) ** 2 },
            { label: 'felső lépcsők', fn: (x) => (Math.ceil(x * 4) / 4) ** 2 },
          ],
          points: [
            { x: 0.5, y: 0.25, label: '(0,5; 0,25)' },
            { x: 1, y: 1, label: '(1; 1)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A kétoldali közelítés módszere' },
        {
          kind: 'text',
          text: 'Az $f(x) = x^2$ görbe alatti területet akarjuk meghatározni a $[0; 1]$ intervallumon. Osszuk az intervallumot $n$ egyenlő részre; minden sáv szélessége $\\frac{1}{n}$.\n\n- **Alsó közelítő összeg**: minden sávban a legkisebb függvényértékkel számolunk (a téglalapok a görbe alá esnek).\n- **Felső közelítő összeg**: minden sávban a legnagyobb függvényértékkel számolunk (a téglalapok kilógnak a görbe fölé).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Közelítsd az $x^2$ grafikonja alatti területet a $[0; 1]$ intervallumon 4, illetve 10 sávval!',
          solution:
            '**4 sáv** (szélesség $0{,}25$): az $x^2$ növekvő, ezért az alsó összeg a bal, a felső a jobb végpontot használja.\n\nAlsó: $0{,}25 \\cdot (0 + 0{,}0625 + 0{,}25 + 0{,}5625) = 0{,}21875$.\nFelső: $0{,}25 \\cdot (0{,}0625 + 0{,}25 + 0{,}5625 + 1) = 0{,}46875$.\n\nTehát $0{,}21875 < T < 0{,}46875$.\n\n**10 sáv**: alsó összeg $0{,}285$, felső összeg $0{,}385$, vagyis $0{,}285 < T < 0{,}385$.\n\nA finomabb felosztás szűkíti a két oldali becslést; a két összeg különbsége $\\frac{1}{n}$ (itt $0{,}25$, illetve $0{,}1$). Mindkettő a $\\frac{1}{3} \\approx 0{,}333$ számhoz tart.',
        },
        {
          kind: 'text',
          text: 'Ha a felosztást minden határon túl finomítjuk, és az alsó és a felső összeg ugyanahhoz a számhoz tart, ezt a számot nevezzük az $f$ **határozott integráljának** az $[a; b]$ intervallumon. Folytonos függvényekre ez mindig létezik.',
        },
        { kind: 'heading', text: 'A határozott integrál tulajdonságai' },
        {
          kind: 'keypoints',
          items: [
            '$\\int_a^a f(x)\\,dx = 0$',
            '$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$ (a határok felcserélése előjelet vált)',
            'Intervallum szerinti felbontás: $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$, ha $a < c < b$',
            'Konstansszoros: $\\int_a^b c \\cdot f(x)\\,dx = c \\cdot \\int_a^b f(x)\\,dx$',
            'Összeg, különbség: $\\int_a^b (f(x) \\pm g(x))\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$',
            'Ha $f(x) \\ge 0$ az $[a; b]$-n, akkor $\\int_a^b f(x)\\,dx \\ge 0$',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa a tulajdonságokra',
          problem:
            'Az $f(x) = x$ függvényre $\\int_0^4 x\\,dx = 8$ (a háromszög területe: $\\frac{4 \\cdot 4}{2}$) és $\\int_0^2 x\\,dx = 2$. Mennyi $\\int_2^4 x\\,dx$ és $\\int_0^4 3x\\,dx$?',
          solution:
            'A felbontás szerint $\\int_0^4 = \\int_0^2 + \\int_2^4$, ezért $\\int_2^4 x\\,dx = 8 - 2 = 6$.\n\nA konstansszoros szabály szerint $\\int_0^4 3x\\,dx = 3 \\cdot 8 = 24$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli: a határozott integrál szemléletes fogalma, a kétoldali közelítés módszere ábrával, a tulajdonságok.',
            'I. rész vagy II. A rész: integrál értékének megadása ismert területekből (háromszög, téglalap) a tulajdonságok alapján.',
            'II. rész: egy alsó–felső közelítő összeg kiszámolása, becslés az integrál értékére.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az integrált és a területet azonosnak venni. Ha a függvény az $x$ tengely alatt halad, az integrál negatív, a terület viszont pozitív szám. Ezt a következő leckében ki is számoljuk.',
        },
        {
          kind: 'tip',
          text: 'Szemléletes feladatnál ne bonyolítsd: rajzold le a grafikont, és ha a rész idom (téglalap, háromszög, trapéz), a területét ismered, a megfelelő előjellel ez az integrál.',
        },
      ],
      topicMatch: ['határozott integrál', 'integrál', 'kétoldali közelítés'],
      quiz: [
        {
          question: 'Mit fejez ki szemléletesen $\\int_a^b f(x)\\,dx$, ha $f$ folytonos?',
          options: [
            'a függvény meredekségét',
            'a grafikon és az $x$ tengely közötti előjeles területet',
            'a függvény legnagyobb értékét',
            'a grafikon ívhosszát',
          ],
          answer: 1,
          explanation:
            'A határozott integrál a grafikon alatti előjeles terület: fölötte pozitív, alatta negatív.',
          emelt: true,
        },
        {
          question: 'Mennyi $\\int_2^2 (x^3 + 5)\\,dx$?',
          options: ['0', '13', '5', '8'],
          answer: 0,
          explanation:
            'Ha az alsó és a felső határ megegyezik, az intervallum hossza nulla, az integrál 0.',
          emelt: true,
        },
        {
          question:
            'Ha $\\int_0^1 f(x)\\,dx = 3$ és $\\int_1^5 f(x)\\,dx = 4$, mennyi $\\int_0^5 f(x)\\,dx$?',
          options: ['1', '12', '7', '-1'],
          answer: 2,
          explanation: 'Az intervallum szerinti felbontás szabálya szerint $3 + 4 = 7$.',
          emelt: true,
        },
        {
          question:
            'Mennyi az $x^2$ függvény $[0; 1]$ intervallumra vett alsó közelítő összege 4 egyenlő sávval?',
          options: ['$0{,}46875$', '$0{,}25$', '$0{,}21875$', '$\\frac{1}{3}$'],
          answer: 2,
          explanation:
            'Alsó összeg: $0{,}25 \\cdot (0 + 0{,}0625 + 0{,}25 + 0{,}5625) = 0{,}25 \\cdot 0{,}875 = 0{,}21875$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Határozott integrál', url: wiki('Riemann-integrál') },
        { label: 'Wikipédia: Integrálszámítás', url: wiki('Integrálszámítás') },
      ],
    },
    {
      id: 'newton-leibniz-terulet',
      subject: 'matematika',
      unitId: 'hatarertek-integral',
      title: 'Primitív függvény, Newton–Leibniz-tétel, területszámítás',
      level: 'emelt',
      requirement: {
        emelt:
          'Az integrálfüggvény és a primitív függvény fogalma; a Newton–Leibniz-tétel; polinomfüggvények, illetve a szinusz- és koszinuszfüggvény grafikonja alatti terület kiszámolása',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            "Az $F$ az $f$ **primitív függvénye**, ha $F' = f$. Egy függvény primitív függvényei egy konstansban különböznek.",
            '**Newton–Leibniz-tétel**: ha $f$ folytonos az $[a; b]$-n és $F$ egy primitív függvénye, akkor $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
            "**Integrálfüggvény**: $\\Phi(x) = \\int_a^x f(t)\\,dt$. Folytonos $f$ esetén $\\Phi' = f$, vagyis az integrálfüggvény primitív függvény.",
            'Primitív függvények: $x^n \\to \\frac{x^{n+1}}{n+1}$, $\\sin x \\to -\\cos x$, $\\cos x \\to \\sin x$.',
          ],
        },
        {
          kind: 'plot',
          title: 'f(x) = x² − 2x: a [0; 2] rész az x tengely alatt, a [2; 3] rész fölötte van',
          x: [-1, 4],
          y: [-2, 5],
          functions: [{ label: 'f(x) = x² − 2x', fn: (x) => x * x - 2 * x }],
          points: [
            { x: 0, y: 0, label: 'zérushely: 0' },
            { x: 2, y: 0, label: 'zérushely: 2' },
            { x: 3, y: 3, label: '(3; 3)' },
            { x: 1, y: -1, label: 'minimum: (1; −1)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Primitív függvény' },
        {
          kind: 'terms',
          items: [
            {
              term: 'primitív függvény',
              text: "Az $F$ az $f$ primitív függvénye, ha $F'(x) = f(x)$ minden $x$-re az értelmezési tartományban. Ha $F$ primitív függvény, akkor $F + c$ is az ($c$ állandó).",
            },
            {
              term: 'integrálfüggvény',
              text: "Az $f$ folytonos függvény egy rögzített $a$ alsó határú integrálfüggvénye $\\Phi(x) = \\int_a^x f(t)\\,dt$. Ilyenkor $\\Phi'(x) = f(x)$.",
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Primitív függvények, amelyeket tudnod kell',
          columns: ['f(x)', 'egy primitív függvénye F(x)'],
          rows: [
            { label: 'állandó', cells: ['$c$', '$cx$'] },
            { label: 'hatvány', cells: ['$x^n$ ($n \\ge 1$)', '$\\dfrac{x^{n+1}}{n+1}$'] },
            { label: 'szinusz', cells: ['$\\sin x$', '$-\\cos x$'] },
            { label: 'koszinusz', cells: ['$\\cos x$', '$\\sin x$'] },
          ],
        },
        {
          kind: 'text',
          text: "Összeg és konstansszoros esetén tagonként dolgozunk. Például $f(x) = 3x^2 - 2x + 1$ egy primitív függvénye $F(x) = x^3 - x^2 + x$, hiszen $F'(x) = 3x^2 - 2x + 1$.",
        },
        { kind: 'heading', text: 'A Newton–Leibniz-tétel' },
        {
          kind: 'formula',
          tex: '\\int_a^b f(x)\\,dx = F(b) - F(a) = \\Big[F(x)\\Big]_a^b',
          caption:
            'Ha $f$ folytonos az $[a; b]$ intervallumon, $F$ pedig az $f$ egy primitív függvénye',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Számold ki a $3x^2 - 2x + 1$ függvény határozott integrálját a $[0; 2]$ intervallumon!',
          solution:
            '$F(x) = x^3 - x^2 + x$, így\n\n$\\int_0^2 (3x^2 - 2x + 1)\\,dx = F(2) - F(0) = (8 - 4 + 2) - 0 = 6$.',
        },
        {
          kind: 'example',
          title: 'Szinusz és koszinusz',
          problem:
            'Mennyi a $\\sin x$ grafikonja alatti terület a $[0; \\pi]$ intervallumon, és mennyi $\\int_0^{\\pi/2} \\cos x\\,dx$?',
          solution:
            '$\\int_0^{\\pi} \\sin x\\,dx = \\big[-\\cos x\\big]_0^{\\pi} = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$.\n\n$\\int_0^{\\pi/2} \\cos x\\,dx = \\big[\\sin x\\big]_0^{\\pi/2} = 1 - 0 = 1$.\n\nA számolásnál a szögeket radiánban kell kezelni.',
        },
        { kind: 'heading', text: 'Terület az x tengely alatt és fölött' },
        {
          kind: 'text',
          text: 'Az integrál előjeles. Ha a függvény előjelet vált, a **területet** szakaszonként kell kiszámolni: előbb meg kell találni a zérushelyeket.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Mekkora területet zár be az $f(x) = x^2 - 2x$ függvény grafikonja az $x$ tengellyel a $[0; 3]$ intervallumon? Mennyi az integrál ugyanezen az intervallumon?',
          solution:
            'Zérushelyek: $x(x - 2) = 0$, tehát $x = 0$ és $x = 2$. A $[0; 2]$ szakaszon $f \\le 0$, a $[2; 3]$ szakaszon $f \\ge 0$. Egy primitív függvény: $F(x) = \\frac{x^3}{3} - x^2$.\n\n$\\int_0^2 f = F(2) - F(0) = \\frac{8}{3} - 4 = -\\frac{4}{3}$, a terület $\\frac{4}{3}$.\n$\\int_2^3 f = F(3) - F(2) = 0 - \\left(-\\frac{4}{3}\\right) = \\frac{4}{3}$.\n\nA bezárt terület: $\\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$.\n\nAz integrál viszont: $\\int_0^3 f = F(3) - F(0) = 0$, mert a két rész kioltja egymást.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. A vagy II. B rész: egy polinomfüggvény (vagy szinusz/koszinusz) grafikonja és az $x$ tengely, esetleg egyenesek közötti terület kiszámolása.',
            'Függvényvizsgálattal összekötve: előbb zérushelyek, ábra, majd az integrál.',
            'Szóbeli: mondd ki a Newton–Leibniz-tételt, magyarázd el a primitív függvény és az integrálfüggvény kapcsolatát, és számolj ki egy területet.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: (1) a felső és az alsó határ behelyettesítésének sorrendje ($F(b) - F(a)$, nem fordítva); (2) a terület és az integrál összekeverése, ha a függvény előjelet vált; (3) a trigonometrikus függvényeknél a fokban számolás, radián helyett.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz-váz területfeladathoz: 1. zérushelyek meghatározása; 2. előjelvizsgálat intervallumonként (vagy rövid vázlat); 3. primitív függvény felírása; 4. szakaszonként $F(b) - F(a)$; 5. a területek abszolút értékének összeadása; 6. szöveges válasz.',
        },
      ],
      topicMatch: ['integrálszámítás', 'integrálfüggvény', 'primitív függvény', 'newton'],
      quiz: [
        {
          question: 'Melyik az $f(x) = 4x^3$ függvény egy primitív függvénye?',
          options: ['$12x^2$', '$x^4$', '$\\frac{4x^4}{3}$', '$4x^4$'],
          answer: 1,
          explanation: 'Az $x^4$ deriváltja $4x^3$, tehát $x^4$ primitív függvény.',
          emelt: true,
        },
        {
          question: 'Mennyi $\\int_1^3 (2x + 1)\\,dx$?',
          options: ['8', '12', '6', '10'],
          answer: 3,
          explanation: '$F(x) = x^2 + x$, így $F(3) - F(1) = 12 - 2 = 10$.',
          emelt: true,
        },
        {
          question: 'Mennyi $\\int_0^{\\pi} \\sin x\\,dx$?',
          options: ['2', '0', '1', '$-2$'],
          answer: 0,
          explanation: '$[-\\cos x]_0^{\\pi} = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$.',
          emelt: true,
        },
        {
          question:
            'Mekkora területet zár be az $x^2 - 2x$ grafikonja az $x$ tengellyel a $[0; 2]$ intervallumon?',
          options: ['$-\\frac{4}{3}$', '0', '$\\frac{8}{3}$', '$\\frac{4}{3}$'],
          answer: 3,
          explanation:
            'A függvény ezen a szakaszon nempozitív, az integrál $\\frac{8}{3} - 4 = -\\frac{4}{3}$. A terület ennek abszolút értéke, $\\frac{4}{3}$.',
          emelt: true,
        },
        {
          question: 'Mit állít a Newton–Leibniz-tétel folytonos $f$ esetén?',
          options: [
            '$\\int_a^b f(x)\\,dx = F(a) - F(b)$',
            '$\\int_a^b f(x)\\,dx = f(b) - f(a)$',
            "$\\int_a^b f(x)\\,dx = F(b) - F(a)$, ahol $F' = f$",
            "$\\int_a^b f(x)\\,dx = F'(b) - F'(a)$",
          ],
          answer: 2,
          explanation:
            'A határozott integrál a primitív függvény két határnál vett értékének különbsége: felső mínusz alsó.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Newton–Leibniz-tétel', url: wiki('Newton–Leibniz-tétel') },
        { label: 'Wikipédia: Primitív függvény', url: wiki('Primitív függvény') },
        { label: 'Wikipédia: Integrálfüggvény', url: wiki('Integrálfüggvény') },
      ],
    },
  ],
};

export default unit;
