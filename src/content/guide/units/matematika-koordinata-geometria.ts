import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** A segment of the line through two points, as a function that is NaN outside the segment. */
const segment =
  (x1: number, y1: number, x2: number, y2: number) =>
  (x: number): number =>
    x >= Math.min(x1, x2) && x <= Math.max(x1, x2) ? y1 + ((y2 - y1) / (x2 - x1)) * (x - x1) : NaN;

/** Upper and lower half of the circle with centre (u; v) and radius r. */
const upper = (u: number, v: number, r: number) => (x: number) => {
  const d = r * r - (x - u) ** 2;
  return d >= 0 ? v + Math.sqrt(d) : NaN;
};
const lower = (u: number, v: number, r: number) => (x: number) => {
  const d = r * r - (x - u) ** 2;
  return d >= 0 ? v - Math.sqrt(d) : NaN;
};

/** Exam requirement topic: Koordináta-geometria. */
const unit: GuideUnit = {
  id: 'koordinata-geometria',
  subject: 'matematika',
  order: 44,
  title: 'Koordináta-geometria',
  requirementRef:
    '4.1.2 Ponthalmazok (kör, parabola); 4.4 Vektorok síkban és térben; 4.6 Koordinátageometria',
  intro:
    'Vektorok, távolság, felezőpont és súlypont, az egyenes különböző egyenletei, párhuzamos és merőleges egyenesek, a kör egyenlete; emelten a kör és az egyenes kölcsönös helyzete, az érintő egyenlete és a parabola.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (4.1.2, 4.4, 4.6). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'vektorok-pontok-koordinatai',
      subject: 'matematika',
      unitId: 'koordinata-geometria',
      title: 'Vektorok, távolság, felező- és súlypont',
      level: 'both',
      requirement: {
        kozep:
          'Pontok és vektorok koordinátái; vektorműveletek koordinátákkal; két pont távolsága, szakasz felezőpontja',
        emelt:
          'Skalárszorzat definíciója és koordinátákból számítása; vektorok hajlásszöge koordinátákkal; a szakasz harmadoló pontjainak és a háromszög súlypontjának koordinátái (igazolással)',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az $A(x_1; y_1)$ pontból a $B(x_2; y_2)$ pontba mutató vektor: $\\overrightarrow{AB} = (x_2 - x_1;\\ y_2 - y_1)$. **Végpont mínusz kezdőpont!**',
            'Vektorok összeadása, kivonása és számmal szorzása koordinátánként történik.',
            'A vektor hossza: $|\\mathbf{a}| = \\sqrt{a_1^2 + a_2^2}$. Két pont távolsága az $\\overrightarrow{AB}$ vektor hossza.',
            '**Felezőpont**: $F\\left(\\frac{x_1 + x_2}{2};\\ \\frac{y_1 + y_2}{2}\\right)$.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szint',
          items: [
            '**Súlypont**: $S\\left(\\frac{x_1 + x_2 + x_3}{3};\\ \\frac{y_1 + y_2 + y_3}{3}\\right)$.',
          ],
        },
        {
          kind: 'plot',
          equalAxes: true,
          title: 'Az A(−2; 1), B(4; 5), C(1; −3) háromszög',
          x: [-4, 6],
          y: [-5, 7],
          functions: [
            { label: 'AB oldal', fn: segment(-2, 1, 4, 5) },
            { label: 'AC oldal', fn: segment(-2, 1, 1, -3) },
            { label: 'BC oldal', fn: segment(4, 5, 1, -3) },
          ],
          points: [
            { x: -2, y: 1, label: 'A(−2; 1)' },
            { x: 4, y: 5, label: 'B(4; 5)' },
            { x: 1, y: -3, label: 'C(1; −3)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Pontok és vektorok' },
        {
          kind: 'text',
          text: 'A síkon minden pontot két koordináta ad meg: $P(x; y)$. A vektor irányított szakasz: iránya és hossza van, a koordinátái megmutatják, mennyit lépünk vízszintesen és függőlegesen. Az $O(0; 0)$ origóból egy $P$ pontba mutató vektor (a $P$ **helyvektora**) koordinátái megegyeznek a $P$ koordinátáival.',
        },
        {
          kind: 'formula',
          tex: '\\overrightarrow{AB} = (x_2 - x_1;\\ y_2 - y_1)',
          caption: 'a vektor koordinátái: végpont mínusz kezdőpont',
        },
        {
          kind: 'text',
          text: 'Ha $\\mathbf{a} = (a_1; a_2)$ és $\\mathbf{b} = (b_1; b_2)$, akkor $\\mathbf{a} + \\mathbf{b} = (a_1 + b_1;\\ a_2 + b_2)$, $\\mathbf{a} - \\mathbf{b} = (a_1 - b_1;\\ a_2 - b_2)$ és $\\lambda\\mathbf{a} = (\\lambda a_1;\\ \\lambda a_2)$. Két vektor akkor egyenlő, ha a koordinátáik páronként egyenlők. Az $\\mathbf{a}$-val ellentétes vektor $-\\mathbf{a} = (-a_1; -a_2)$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: vektorműveletek',
          problem:
            'Legyen $\\mathbf{a} = (3; -2)$ és $\\mathbf{b} = (1; 4)$. Adja meg az $\\mathbf{a} + \\mathbf{b}$ és a $2\\mathbf{a} - \\mathbf{b}$ vektor koordinátáit, valamint az $\\mathbf{a}$ hosszát!',
          solution:
            '$\\mathbf{a} + \\mathbf{b} = (3 + 1;\\ -2 + 4) = (4; 2)$.\n\n$2\\mathbf{a} = (6; -4)$, ezért $2\\mathbf{a} - \\mathbf{b} = (6 - 1;\\ -4 - 4) = (5; -8)$.\n\n$|\\mathbf{a}| = \\sqrt{3^2 + (-2)^2} = \\sqrt{13} \\approx 3{,}61$.',
        },
        { kind: 'heading', text: 'Távolság, felezőpont, súlypont' },
        {
          kind: 'formula',
          tex: 'AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
          caption: 'két pont távolsága (a Pitagorasz-tételből)',
        },
        {
          kind: 'text',
          text: 'A felezőpont a két végpont koordinátáinak számtani közepe.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A háromszög súlypontja a három csúcs koordinátáinak számtani közepe; a súlypont a súlyvonalakat a csúcstól számítva $2 : 1$ arányban osztja.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: háromszög adatai',
          problem:
            'Az $ABC$ háromszög csúcsai $A(-2; 1)$, $B(4; 5)$, $C(1; -3)$. Számítsa ki az $AB$ oldal hosszát és felezőpontját, valamint a háromszög kerületét! (Emelt szinten a súlypontot is.)',
          solution:
            '$\\overrightarrow{AB} = (6; 4)$, így $AB = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13} \\approx 7{,}21$.\n\nAz $AB$ felezőpontja: $F\\left(\\frac{-2 + 4}{2};\\ \\frac{1 + 5}{2}\\right) = (1; 3)$.\n\nA többi oldal: $\\overrightarrow{BC} = (-3; -8)$, $BC = \\sqrt{9 + 64} = \\sqrt{73} \\approx 8{,}54$; $\\overrightarrow{AC} = (3; -4)$, $AC = \\sqrt{9 + 16} = 5$.\n\nKerület: $\\sqrt{52} + \\sqrt{73} + 5 \\approx 20{,}8$.\n\nEmelt szinten a súlypont is kell: $S\\left(\\frac{-2 + 4 + 1}{3};\\ \\frac{1 + 5 - 3}{3}\\right) = (1; 1)$.',
        },
        {
          kind: 'warning',
          text: 'A vektor koordinátáinál gyakori hiba a fordított kivonás: $\\overrightarrow{AB} = B - A$, nem $A - B$. A felezőpontnál ne felejts el kettővel osztani, a súlypontnál hárommal.',
        },
        { kind: 'heading', text: 'Skalárszorzat', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Az $\\mathbf{a} = (a_1; a_2)$ és $\\mathbf{b} = (b_1; b_2)$ vektorok **skalárszorzata** $\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 = |\\mathbf{a}| |\\mathbf{b}| \\cos\\varphi$, ahol $\\varphi$ a két vektor szöge. Két (nem nulla) vektor pontosan akkor **merőleges**, ha a skalárszorzatuk 0. A szög: $\\cos\\varphi = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}| |\\mathbf{b}|}$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: szög számítása',
          problem:
            'Az $A(1; 1)$, $B(5; 2)$, $C(2; 5)$ pontok közül a $B$ csúcsnál mekkora szöget zár be a $BA$ és a $BC$ oldal?',
          solution:
            '$\\overrightarrow{BA} = (-4; -1)$, $\\overrightarrow{BC} = (-3; 3)$.\n\nSkalárszorzat: $(-4)(-3) + (-1)(3) = 12 - 3 = 9$.\n\nHosszak: $|\\overrightarrow{BA}| = \\sqrt{17}$, $|\\overrightarrow{BC}| = \\sqrt{18}$.\n\n$\\cos\\varphi = \\frac{9}{\\sqrt{17}\\sqrt{18}} = \\frac{9}{\\sqrt{306}} \\approx 0{,}5145$, ebből $\\varphi \\approx 59{,}0^\\circ$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: két pont távolsága, felezőpont koordinátái, egy vektor koordinátái (emelt szinten a súlypont is).',
            'Hiányzó csúcs kiszámítása: például adott a szakasz egyik végpontja és a felezőpontja, add meg a másik végpontot.',
            'II. rész: háromszög vagy négyszög adatai (oldalak, kerület, terület; emelt szinten súlypont) koordinátákkal megadott csúcsokból.',
          ],
        },
        {
          kind: 'tip',
          text: 'Hiányzó végpont: ha $F$ az $AB$ felezőpontja, akkor $B = 2F - A$ (koordinátánként). Például $A(1; 2)$, $F(4; 3)$ esetén $B(7; 4)$.',
        },
        {
          kind: 'warning',
          text: 'Mindig érdemes ábrát készíteni a koordináta-rendszerben. Az ábra gyorsan megmutatja, ha a kapott felezőpont vagy súlypont nem a háromszög belsejébe kerül, vagyis elszámoltál valamit.',
        },
      ],
      topicMatch: ['koordináta-geometria', 'vektorok'],
      quiz: [
        {
          question: 'Mik az $\\overrightarrow{AB}$ vektor koordinátái, ha $A(1; -2)$ és $B(5; 4)$?',
          options: ['$(4; 6)$', '$(6; 2)$', '$(-4; -6)$', '$(3; 1)$'],
          answer: 0,
          explanation: 'Végpont mínusz kezdőpont: $(5 - 1;\\ 4 - (-2)) = (4; 6)$.',
        },
        {
          question: 'Milyen messze van egymástól az $A(-1; 2)$ és a $B(5; 10)$ pont?',
          options: ['8', '14', '10', '$\\sqrt{40}$'],
          answer: 2,
          explanation: '$\\overrightarrow{AB} = (6; 8)$, a hossza $\\sqrt{36 + 64} = 10$.',
        },
        {
          question:
            'Mi a $(-3; 4)$ és a $(7; -2)$ pontok által meghatározott szakasz felezőpontja?',
          options: ['$(4; 2)$', '$(2; 1)$', '$(5; 1)$', '$(2; 2)$'],
          answer: 1,
          explanation: '$\\left(\\frac{-3 + 7}{2};\\ \\frac{4 + (-2)}{2}\\right) = (2; 1)$.',
        },
        {
          question: 'Mi az $O(0; 0)$, $B(6; 3)$, $C(3; 9)$ csúcsú háromszög súlypontja?',
          options: ['$(3; 6)$', '$(4{,}5; 6)$', '$(3; 4)$', '$(9; 12)$'],
          answer: 2,
          explanation:
            'A koordináták számtani közepe: $\\frac{0 + 6 + 3}{3} = 3$ és $\\frac{0 + 3 + 9}{3} = 4$.',
          emelt: true,
        },
        {
          question: 'Az $\\mathbf{a} = (2; -3)$ és $\\mathbf{b} = (6; 4)$ vektorokra melyik igaz?',
          options: [
            'párhuzamosak',
            'merőlegesek',
            'hegyesszöget zárnak be',
            'tompaszöget zárnak be',
          ],
          answer: 1,
          explanation: '$\\mathbf{a} \\cdot \\mathbf{b} = 12 - 12 = 0$, tehát merőlegesek.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Vektor', url: wiki('Vektor (geometria)') },
        { label: 'Wikipédia: Súlypont', url: wiki('Háromszög súlypontja') },
        { label: 'Wikipédia: Skalárszorzat', url: wiki('Skaláris szorzat') },
      ],
    },
    {
      id: 'egyenes-egyenletei',
      subject: 'matematika',
      unitId: 'koordinata-geometria',
      title: 'Az egyenes egyenletei',
      level: 'both',
      requirement: {
        kozep:
          'Egyenes egyenlete y = mx + b és x = c alakban; egyenesek metszéspontjának koordinátái; meredekséggel megadott egyenesek párhuzamossága és merőlegessége',
        emelt:
          'Az egyenes egyenletének többféle alakban való felírása és levezetése, különböző kiindulási adatokból (normálvektor, irányvektor, két pont)',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szint',
          items: [
            '**Normálvektoros egyenlet**: $Ax + By = C$. Az $\\mathbf{n} = (A; B)$ az egyenesre merőleges **normálvektor**. $C = A x_0 + B y_0$, ahol $P_0(x_0; y_0)$ az egyenes egy pontja.',
            '**Irányvektor**: az egyenessel párhuzamos vektor, $\\mathbf{v} = (v_1; v_2)$. Ha $\\mathbf{v} = (v_1; v_2)$, akkor egy normálvektor $\\mathbf{n} = (v_2; -v_1)$.',
            '**Hajlásszög**: $m = \\tan\\alpha$, ahol $\\alpha$ az egyenes és az $x$ tengely pozitív iránya által bezárt szög.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Meredekség**: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
            '**Iránytényezős alak**: $y = mx + b$; a $b$ az $y$ tengellyel vett metszéspont.',
            'Az $x$ tengellyel párhuzamos egyenes: $y = c$. Az $y$ tengellyel párhuzamos egyenes: $x = c$ (ennek nincs meredeksége).',
          ],
        },
        {
          kind: 'plot',
          emelt: true,
          equalAxes: true,
          title: 'A P(2; −1) és Q(5; 3) pontokon átmenő egyenes: 4x − 3y = 11',
          x: [-3, 7],
          y: [-5, 5],
          functions: [
            { label: '4x − 3y = 11', fn: (x) => (4 * x - 11) / 3 },
            { label: 'x + 2y = 4', fn: (x) => (4 - x) / 2 },
          ],
          points: [
            { x: 2, y: -1, label: 'P(2; −1)' },
            { x: 5, y: 3, label: 'Q(5; 3)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi határoz meg egy egyenest?', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Egy egyenest meghatároz **két pontja**, vagy **egy pontja és az iránya**. Az irányt megadhatjuk irányvektorral, normálvektorral vagy meredekséggel. Ezek egymásból könnyen kiszámíthatók, ezért a feladat az, hogy a megadott adatból felírjuk a számunkra legkényelmesebbet.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Az egyenes megadási módjai',
          columns: ['Adat', 'Egyenlet'],
          rows: [
            {
              label: 'pont és normálvektor',
              cells: ['$P_0(x_0; y_0)$, $\\mathbf{n} = (A; B)$', '$Ax + By = A x_0 + B y_0$'],
            },
            {
              label: 'pont és irányvektor',
              cells: [
                '$P_0(x_0; y_0)$, $\\mathbf{v} = (v_1; v_2)$',
                '$v_2 x - v_1 y = v_2 x_0 - v_1 y_0$',
              ],
            },
            {
              label: 'pont és meredekség',
              cells: ['$P_0(x_0; y_0)$, $m$', '$y - y_0 = m(x - x_0)$'],
            },
            {
              label: 'két pont',
              cells: ['$P_1$, $P_2$', 'irányvektor: $\\overrightarrow{P_1 P_2}$, utána mint fent'],
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: egyenes két pontból',
          problem:
            'Írja fel annak az egyenesnek az egyenletét, amely átmegy a $P(2; -1)$ és a $Q(5; 3)$ pontokon! Adja meg a meredekségét és a tengelymetszeteit is!',
          solution:
            'Irányvektor: $\\overrightarrow{PQ} = (3; 4)$. Normálvektor: $\\mathbf{n} = (4; -3)$.\n\nAz egyenlet: $4x - 3y = 4 \\cdot 2 - 3 \\cdot (-1) = 11$.\n\nEllenőrzés a $Q$ ponttal: $4 \\cdot 5 - 3 \\cdot 3 = 20 - 9 = 11$. ✓\n\nMeredekség: $m = \\frac{4}{3}$. Iránytényezős alak: $y = \\frac{4}{3}x - \\frac{11}{3}$.\n\nAz $y$ tengellyel: $x = 0$ esetén $y = -\\frac{11}{3}$. Az $x$ tengellyel: $y = 0$ esetén $x = \\frac{11}{4}$.',
        },
        {
          kind: 'text',
          text: 'Ha az egyenlet $Ax + By = C$ alakú és $B \\ne 0$, akkor átrendezéssel $y = -\\frac{A}{B}x + \\frac{C}{B}$, tehát a meredekség $m = -\\frac{A}{B}$. Például a $4x + 2y = 8$ egyenesé $y = -2x + 4$, tehát $m = -2$.',
        },
        {
          kind: 'tip',
          text: 'Az egyenlet jobb oldalát mindig úgy kapod meg, hogy az egyenes egy pontjának koordinátáit behelyettesíted a bal oldalba. Ugyanígy ellenőrizd a végén a másik adott pontot is.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: egyenes és tengelyek által határolt háromszög',
          problem:
            'Az $e$ egyenes egyenlete $3x + 2y = 12$. Mekkora területű háromszöget zár be az egyenes a koordináta-tengelyekkel?',
          solution:
            'Az $x$ tengelyt ott metszi, ahol $y = 0$: $3x = 12$, $x = 4$, a pont $(4; 0)$.\n\nAz $y$ tengelyt ott metszi, ahol $x = 0$: $2y = 12$, $y = 6$, a pont $(0; 6)$.\n\nA háromszög derékszögű, a befogói 4 és 6 hosszúak: $T = \\frac{4 \\cdot 6}{2} = 12$ területegység.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Írja fel az adott két ponton átmenő egyenes egyenletét.',
            'Adja meg az egyenes meredekségét az egyenlete alapján (emelt szinten egy irányvektorát vagy normálvektorát is).',
            'Döntse el, hogy egy adott pont rajta van-e az egyenesen (helyettesítsd be).',
            'II. rész: háromszög oldalegyeneseinek felírása, majd magasságvonal, súlyvonal, oldalfelező merőleges.',
          ],
        },
        {
          kind: 'warning',
          text: 'Függőleges egyenesnek ($x = c$) nincs meredeksége, ezért az $y = mx + b$ alak nem alkalmas rá. Ha két pont $x$ koordinátája egyenlő, az egyenes függőleges. A normálvektoros alak mindig működik.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Az irányvektorból normálvektort úgy kapsz, hogy a két koordinátát felcseréled, és az egyiknek előjelet váltasz: $(3; 4) \\to (4; -3)$. Ellenőrzés: a skalárszorzatuk 0, mert $3 \\cdot 4 + 4 \\cdot (-3) = 0$.',
        },
      ],
      topicMatch: ['egyenes egyenlete'],
      quiz: [
        {
          question: 'Melyik egyenes megy át a $(2; 5)$ ponton, és normálvektora $(3; -1)$?',
          options: ['$3x - y = 11$', '$3x + y = 11$', '$x - 3y = -13$', '$3x - y = 1$'],
          answer: 3,
          explanation: '$C = 3 \\cdot 2 - 1 \\cdot 5 = 1$, tehát $3x - y = 1$.',
          emelt: true,
        },
        {
          question: 'Mennyi a $4x + 2y = 8$ egyenletű egyenes meredeksége?',
          options: ['$2$', '$-2$', '$4$', '$-\\frac{1}{2}$'],
          answer: 1,
          explanation: 'Átrendezve $y = -2x + 4$, tehát $m = -2$.',
        },
        {
          question: 'Melyik vektor irányvektora az $5x - 2y = 10$ egyenesnek?',
          options: ['$(5; -2)$', '$(2; 5)$', '$(-5; 2)$', '$(5; 2)$'],
          answer: 1,
          explanation:
            'A normálvektor $(5; -2)$, erre merőleges az irányvektor: $(2; 5)$, mert $5 \\cdot 2 + (-2) \\cdot 5 = 0$.',
          emelt: true,
        },
        {
          question: 'Mi az $(1; 1)$ és $(3; 7)$ pontokon átmenő egyenes iránytényezős egyenlete?',
          options: [
            '$y = 3x - 2$',
            '$y = 3x + 2$',
            '$y = 2x - 1$',
            '$y = \\frac{1}{3}x + \\frac{2}{3}$',
          ],
          answer: 0,
          explanation:
            '$m = \\frac{7 - 1}{3 - 1} = 3$, és $y - 1 = 3(x - 1)$, vagyis $y = 3x - 2$.',
          emelt: true,
        },
        {
          question: 'Mekkora területű háromszöget zár be a $2x + y = 6$ egyenes a tengelyekkel?',
          options: ['6', '9', '12', '18'],
          answer: 1,
          explanation:
            'A tengelymetszetek $(3; 0)$ és $(0; 6)$, a terület $\\frac{3 \\cdot 6}{2} = 9$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Egyenes', url: wiki('Egyenes egyenlete') },
        { label: 'Wikipédia: Meredekség', url: wiki('Meredekség') },
      ],
    },
    {
      id: 'egyenesek-kolcsonos-helyzete',
      subject: 'matematika',
      unitId: 'koordinata-geometria',
      title: 'Párhuzamos és merőleges egyenesek, metszéspont',
      level: 'both',
      requirement: {
        kozep:
          'Két egyenes kölcsönös helyzete: meredekséggel megadott egyenesek párhuzamossága és merőlegessége; metszéspont kiszámítása egyenletrendszerrel',
        emelt:
          'Egyenesek párhuzamosságának és merőlegességének feltételei általános alakban (normálvektorral); két egyenes hajlásszöge; pont és egyenes távolsága',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Párhuzamos**: a meredekségük egyenlő ($m_1 = m_2$), vagyis a normálvektoraik párhuzamosak. Az $Ax + By = C_1$ és $Ax + By = C_2$ egyenesek párhuzamosak.',
            '**Merőleges**: $m_1 \\cdot m_2 = -1$, vagyis a normálvektoraik skalárszorzata 0. Az $Ax + By = C$ egyenesre merőleges: $Bx - Ay = D$.',
            '**Metszéspont**: a két egyenlet közös megoldása (kétismeretlenes egyenletrendszer).',
            'Ha az egyenletrendszernek nincs megoldása, a két egyenes párhuzamos; ha végtelen sok, egybeesnek.',
          ],
        },
        {
          kind: 'plot',
          equalAxes: true,
          title: 'Az e: 3x + 4y = 10 egyenes, párhuzamosa és merőlegese a P(5; 5) ponton át',
          x: [-1, 8],
          y: [-2, 8],
          functions: [
            { label: 'e: 3x + 4y = 10', fn: (x) => (10 - 3 * x) / 4 },
            { label: 'párhuzamos: 3x + 4y = 35', fn: (x) => (35 - 3 * x) / 4 },
            { label: 'merőleges: 4x − 3y = 5', fn: (x) => (4 * x - 5) / 3 },
          ],
          points: [
            { x: 5, y: 5, label: 'P(5; 5)' },
            { x: 2, y: 1, label: 'M(2; 1): talppont' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Párhuzamos és merőleges egyenesek felismerése' },
        {
          kind: 'compare',
          columns: ['Párhuzamos', 'Merőleges'],
          rows: [
            {
              label: 'meredekséggel',
              cells: ['$m_1 = m_2$', '$m_1 \\cdot m_2 = -1$'],
            },
            {
              label: 'példa az $e$: $2x + 3y = 6$ egyenesre',
              cells: ['$2x + 3y = 11$', '$3x - 2y = 4$'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A merőleges egyenes normálvektora az eredeti egyenes irányvektora, és fordítva. Ezért az $Ax + By = C$ egyenessel párhuzamos egyenes normálvektora is $(A; B)$, a merőlegesé pedig $(B; -A)$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: párhuzamos, merőleges, metszéspont',
          problem:
            'Az $e$ egyenes egyenlete $3x + 4y = 10$, a $P$ pont koordinátái $(5; 5)$. Írja fel a $P$ ponton átmenő, $e$-vel párhuzamos és $e$-re merőleges egyenes egyenletét, majd számítsa ki a merőleges egyenes és $e$ metszéspontját!',
          solution:
            'Párhuzamos egyenes: normálvektora $(3; 4)$, egyenlete $3x + 4y = 3 \\cdot 5 + 4 \\cdot 5 = 35$.\n\nMerőleges egyenes: normálvektora $(4; -3)$, egyenlete $4x - 3y = 4 \\cdot 5 - 3 \\cdot 5 = 5$.\n\nMetszéspont: a $3x + 4y = 10$ és a $4x - 3y = 5$ egyenletrendszert oldjuk meg. Az elsőt 3-mal, a másodikat 4-gyel szorozva: $9x + 12y = 30$ és $16x - 12y = 20$. Összeadva $25x = 50$, $x = 2$. Az elsőből $4y = 10 - 6 = 4$, $y = 1$.\n\nA metszéspont $M(2; 1)$. Ellenőrzés: $3 \\cdot 2 + 4 \\cdot 1 = 10$ ✓ és $4 \\cdot 2 - 3 \\cdot 1 = 5$ ✓.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: magasságvonal',
          problem:
            'Az $A(-2; 1)$, $B(4; 5)$, $C(1; -3)$ háromszögben írja fel a $C$ csúcsból induló magasságvonal egyenletét!',
          solution:
            'A magasságvonal merőleges az $AB$ oldalra, ezért a normálvektora az $AB$ oldal irányvektora: $\\overrightarrow{AB} = (6; 4)$, egyszerűbben $(3; 2)$.\n\nA $C(1; -3)$ ponton átmenő egyenes: $3x + 2y = 3 \\cdot 1 + 2 \\cdot (-3) = -3$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: két egyenes metszéspontja',
          problem: 'Hol metszi egymást a $3x + 4y = 10$ és a $2x - y = 3$ egyenes?',
          solution:
            'A másodikból $y = 2x - 3$. Behelyettesítve: $3x + 4(2x - 3) = 10$, $11x - 12 = 10$, $x = 2$, így $y = 1$.\n\nA metszéspont $(2; 1)$.',
        },
        { kind: 'heading', text: 'Pont és egyenes távolsága', emelt: true },
        {
          kind: 'formula',
          emelt: true,
          tex: 'd = \\frac{|A x_0 + B y_0 - C|}{\\sqrt{A^2 + B^2}}',
          caption: 'a $P(x_0; y_0)$ pont távolsága az $Ax + By = C$ egyenestől',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A fenti példában a $P(5; 5)$ pont távolsága az $e$: $3x + 4y = 10$ egyenestől $d = \\frac{|15 + 20 - 10|}{\\sqrt{9 + 16}} = \\frac{25}{5} = 5$. Ez egyezik a $PM$ szakasz hosszával: $\\overrightarrow{MP} = (3; 4)$, $|MP| = 5$. Két egyenes **szögét** a normálvektoraik vagy az irányvektoraik szögéből kapod (a hegyesszöget kell megadni).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Melyik két egyenes párhuzamos / merőleges? (egyenletek közül kell kiválasztani)',
            'Írja fel az adott ponton átmenő, adott egyenessel párhuzamos vagy arra merőleges egyenes egyenletét.',
            'Számítsa ki két egyenes metszéspontját.',
            'II. rész: háromszög csúcsai adottak; oldalfelező merőleges, magasságvonal, súlyvonal egyenlete, ezek metszéspontja.',
          ],
        },
        {
          kind: 'warning',
          text: 'A merőleges egyenes meredeksége **a reciprok ellentettje**: ha $m = \\frac{2}{3}$, akkor a merőlegesé $-\\frac{3}{2}$. Gyakori hiba, hogy csak az előjelet vagy csak a reciprokot veszik.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Az **oldalfelező merőleges** felírásához két adat kell: a szakasz felezőpontja (ezen megy át) és a szakasz irányvektora (ez lesz a normálvektora). Ez a kör és a háromszög feladatoknál is előjön.',
        },
      ],
      topicMatch: ['egyenes egyenlete', 'koordináta-geometria'],
      quiz: [
        {
          question:
            'Melyik egyenes párhuzamos a $2x - y = 3$ egyenessel és átmegy az $(1; 4)$ ponton?',
          options: ['$2x - y = -2$', '$x + 2y = 9$', '$2x - y = 6$', '$2x + y = 6$'],
          answer: 0,
          explanation: 'A normálvektor $(2; -1)$ marad, $C = 2 \\cdot 1 - 4 = -2$.',
        },
        {
          question:
            'Mekkora a meredeksége az $y = \\frac{1}{2}x + 1$ egyenesre merőleges egyenesnek?',
          options: ['$\\frac{1}{2}$', '$2$', '$-\\frac{1}{2}$', '$-2$'],
          answer: 3,
          explanation: '$m_1 m_2 = -1$, ezért $m_2 = -2$.',
        },
        {
          question: 'Mi az $x + y = 5$ és az $x - y = 1$ egyenesek metszéspontja?',
          options: ['$(2; 3)$', '$(3; 2)$', '$(4; 1)$', '$(1; 4)$'],
          answer: 1,
          explanation: 'Összeadva $2x = 6$, $x = 3$, és $y = 2$.',
        },
        {
          question: 'Melyik egyenes merőleges a $3x + 2y = 6$ egyenesre?',
          options: ['$3x - 2y = 7$', '$2x + 3y = 7$', '$2x - 3y = 7$', '$6x + 4y = 7$'],
          answer: 2,
          explanation:
            'A normálvektorok skalárszorzata 0: $(3; 2) \\cdot (2; -3) = 6 - 6 = 0$. A $6x + 4y = 7$ párhuzamos az eredetivel.',
          emelt: true,
        },
        {
          question: 'Milyen messze van az origó a $3x + 4y = 20$ egyenestől?',
          options: ['4', '5', '20', '$\\frac{20}{7}$'],
          answer: 0,
          explanation: '$d = \\frac{|0 + 0 - 20|}{\\sqrt{9 + 16}} = \\frac{20}{5} = 4$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Párhuzamos egyenesek', url: wiki('Párhuzamos egyenesek') },
        { label: 'Wikipédia: Merőlegesség', url: wiki('Merőlegesség') },
        { label: 'Wikipédia: Egyenes egyenlete', url: wiki('Egyenes egyenlete') },
      ],
    },
    {
      id: 'kor-egyenlete',
      subject: 'matematika',
      unitId: 'koordinata-geometria',
      title: 'A kör egyenlete',
      level: 'both',
      requirement: {
        kozep: 'Adott középpontú és sugarú kör egyenletének felírása',
        emelt:
          'A kör egyenletének levezetése; a kör és a kétismeretlenes másodfokú egyenlet kapcsolata; a kör középpontjának és sugarának meghatározása általános alakú egyenletből',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A $K(u; v)$ középpontú, $r$ sugarú kör egyenlete: $(x - u)^2 + (y - v)^2 = r^2$.',
            'Az origó középpontú kör: $x^2 + y^2 = r^2$.',
            'Egy $P(x_0; y_0)$ pont **a körön** van, ha $(x_0 - u)^2 + (y_0 - v)^2 = r^2$; **belül**, ha az érték kisebb; **kívül**, ha nagyobb.',
            'A kör nem függvény grafikonja: az ábrázoláshoz két félkör kell (felső és alsó).',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szint',
          items: [
            'A kör egyenletét **teljes négyzetté alakítással** olvashatod le, ha $x^2 + y^2 + px + qy + s = 0$ alakban kapod.',
          ],
        },
        {
          kind: 'plot',
          equalAxes: true,
          title: 'A (x − 3)² + (y − 4)² = 20 kör (két félkörből)',
          x: [-2, 8],
          y: [-1, 9],
          functions: [
            { label: 'felső félkör', fn: upper(3, 4, Math.sqrt(20)) },
            { label: 'alsó félkör', fn: lower(3, 4, Math.sqrt(20)) },
          ],
          points: [
            { x: 3, y: 4, label: 'K(3; 4)' },
            { x: -1, y: 2, label: 'A(−1; 2)' },
            { x: 7, y: 6, label: 'B(7; 6)' },
            { x: 5, y: 8, label: 'P(5; 8)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Honnan jön az egyenlet?' },
        {
          kind: 'text',
          text: 'A kör azon pontok halmaza, amelyek a $K$ középponttól pontosan $r$ távolságra vannak. A távolság képletébe ($\\sqrt{(x - u)^2 + (y - v)^2} = r$) mindkét oldalt négyzetre emelve kapjuk a kör egyenletét.',
        },
        {
          kind: 'formula',
          tex: '(x - u)^2 + (y - v)^2 = r^2',
          caption: 'a $K(u; v)$ középpontú, $r$ sugarú kör egyenlete',
        },
        {
          kind: 'warning',
          text: 'Az egyenletben **$r^2$** áll, nem $r$. Az $(x + 2)^2 + (y - 5)^2 = 49$ kör középpontja $(-2; 5)$, sugara 7. A $+2$ az $x$ előtt tehát $u = -2$-t jelent.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: kör az egyenletből',
          problem:
            'Adja meg annak a körnek a középpontját és sugarát, amelynek egyenlete $x^2 + y^2 - 4x + 6y - 12 = 0$!',
          solution:
            'Teljes négyzetté alakítunk: $(x^2 - 4x + 4) + (y^2 + 6y + 9) = 12 + 4 + 9$.\n\nEbből $(x - 2)^2 + (y + 3)^2 = 25$.\n\nA középpont $K(2; -3)$, a sugár $r = 5$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: kör a szakasz mint átmérő felett',
          problem:
            'Írja fel annak a körnek az egyenletét, amelynek egyik átmérője az $A(-1; 2)$ és $B(7; 6)$ pontokat összekötő szakasz! Mondja meg, hogy az $O(0; 0)$ és a $P(5; 8)$ pont hol van a körhöz képest!',
          solution:
            'A középpont az átmérő felezőpontja: $K\\left(\\frac{-1 + 7}{2};\\ \\frac{2 + 6}{2}\\right) = (3; 4)$.\n\nA sugár az átmérő fele: $\\overrightarrow{AB} = (8; 4)$, $AB = \\sqrt{64 + 16} = \\sqrt{80}$, tehát $r = \\frac{\\sqrt{80}}{2}$ és $r^2 = 20$.\n\nA kör egyenlete: $(x - 3)^2 + (y - 4)^2 = 20$.\n\nEllenőrzés az $A$ ponttal: $(-4)^2 + (-2)^2 = 20$ ✓.\n\nAz $O$ pont: $(0 - 3)^2 + (0 - 4)^2 = 25 > 20$, tehát a körön **kívül** van.\n\nA $P$ pont: $(5 - 3)^2 + (8 - 4)^2 = 4 + 16 = 20$, tehát **rajta van** a körön.',
        },
        {
          kind: 'tip',
          text: 'Ha a kör érinti az $x$ tengelyt, akkor $r = |v|$ (a középpont függőleges távolsága a tengelytől). Például a $(3; 4)$ középpontú, az $x$ tengelyt érintő kör egyenlete $(x - 3)^2 + (y - 4)^2 = 16$.',
        },
        { kind: 'heading', text: 'Kör három pontján át', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Három nem egy egyenesbe eső ponton egyetlen kör megy át. A középpontja az oldalfelező merőlegesek metszéspontja, vagy az $(x - u)^2 + (y - v)^2 = r^2$ egyenletbe a három pontot behelyettesítve kapott egyenletrendszerből számolható: a kapott három egyenlet különbségei lineárisak $u$-ban és $v$-ben.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: kör három pontja alapján',
          problem: 'Írja fel az $A(0; 0)$, $B(8; 0)$, $C(0; 6)$ pontokon átmenő kör egyenletét!',
          solution:
            'Az $AB$ oldalfelező merőlegese $x = 4$, az $AC$ oldalfelező merőlegese $y = 3$. A középpont ezek metszéspontja: $K(4; 3)$.\n\nA sugár: $r = KA = \\sqrt{16 + 9} = 5$.\n\nA kör: $(x - 4)^2 + (y - 3)^2 = 25$. Ellenőrzés: a $B$ pontra $16 + 9 = 25$ ✓, a $C$ pontra $16 + 9 = 25$ ✓. (A $BC$ szakasz hossza 10, ez átmérő, mert az $A$-nál derékszög van.)',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: adja meg a kör középpontját és sugarát az egyenletből; írja fel a kör egyenletét adott középpontból és sugárból.',
            'Egy pont rajta van-e a körön, vagy mennyi egy pont távolsága a kör középpontjától.',
            'II. rész: a kör egyenlete átmérő végpontjaiból; kör és háromszög; az ábra alapján adott kör és egyenes feladat.',
          ],
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'Ha az egyenlet $x^2 + y^2 + px + qy + s = 0$ alakú, a teljes négyzetté alakítás után a jobb oldal $r^2$. Ha ez nem pozitív, nincs ilyen kör (egy pont vagy üres halmaz). Mindig nézd meg az előjelet, és ne írj sugárként $r^2$-t.',
        },
        {
          kind: 'tip',
          text: 'Két félkörös függvényábrázolásnál: $y = v \\pm \\sqrt{r^2 - (x - u)^2}$. A gyökjel alatt $|x - u| \\le r$ esetén van érték, azaz $x \\in [u - r;\\ u + r]$.',
        },
      ],
      topicMatch: ['kör egyenlete'],
      quiz: [
        {
          question: 'Melyik a $(-1; 3)$ középpontú, 4 sugarú kör egyenlete?',
          options: [
            '$(x - 1)^2 + (y + 3)^2 = 16$',
            '$(x + 1)^2 + (y - 3)^2 = 4$',
            '$(x + 1)^2 + (y - 3)^2 = 16$',
            '$(x - 1)^2 + (y + 3)^2 = 4$',
          ],
          answer: 2,
          explanation: 'Az egyenlet $(x - u)^2 + (y - v)^2 = r^2$, $u = -1$, $v = 3$, $r^2 = 16$.',
        },
        {
          question: 'Mi az $x^2 + y^2 - 6x + 8y = 0$ kör középpontja és sugara?',
          options: [
            '$K(3; -4)$, $r = 5$',
            '$K(-3; 4)$, $r = 5$',
            '$K(3; -4)$, $r = 25$',
            '$K(6; -8)$, $r = 10$',
          ],
          answer: 0,
          explanation: '$(x - 3)^2 + (y + 4)^2 = 9 + 16 = 25$, tehát $K(3; -4)$ és $r = 5$.',
          emelt: true,
        },
        {
          question: 'Hol van a $P(2; 3)$ pont az $(x - 1)^2 + (y + 1)^2 = 17$ körhöz képest?',
          options: ['belül', 'kívül', 'a körön', 'nem eldönthető'],
          answer: 2,
          explanation: '$(2 - 1)^2 + (3 + 1)^2 = 1 + 16 = 17$, tehát a pont a körön van.',
        },
        {
          question:
            'Mekkora a sugara annak a körnek, amelynek átmérője a $(0; 0)$ és a $(6; 8)$ pontot összekötő szakasz?',
          options: ['10', '7', '$\\sqrt{50}$', '5'],
          answer: 3,
          explanation:
            'Az átmérő $\\sqrt{36 + 64} = 10$, a sugár ennek fele: 5 (a középpont $(3; 4)$).',
        },
        {
          question: 'Melyik kör megy át az $A(0; 0)$, $B(8; 0)$, $C(0; 6)$ pontokon?',
          options: [
            '$(x - 4)^2 + (y - 3)^2 = 25$',
            '$(x - 4)^2 + (y - 3)^2 = 5$',
            '$(x + 4)^2 + (y + 3)^2 = 25$',
            '$x^2 + y^2 = 25$',
          ],
          answer: 0,
          explanation:
            'A középpont $(4; 3)$, a sugár $\\sqrt{16 + 9} = 5$; mindhárom pont rajta van.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kör', url: wiki('Kör (geometria)') },
        { label: 'Wikipédia: Kör egyenlete', url: wiki('Kör egyenlete') },
      ],
    },
    {
      id: 'kor-egyenes-erinto-parabola',
      subject: 'matematika',
      unitId: 'koordinata-geometria',
      title: 'Kör és egyenes, érintő, parabola',
      level: 'emelt',
      requirement: {
        emelt:
          'Kör és egyenes kölcsönös helyzete; a kör érintőjének egyenlete; a parabola geometriai definíciója és egyenlete',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Kör és egyenes** helyzete: az egyenes a körtől $d$ távolságra lévő középpont szerint **szel** ($d < r$, 2 közös pont), **érint** ($d = r$, 1 közös pont) vagy **elkerüli** ($d > r$, nincs közös pont).',
            'Algebrailag: az egyenlet átrendezett alakját a kör egyenletébe helyettesítjük; a másodfokú egyenlet diszkriminánsa szerint 2, 1 vagy 0 megoldás van.',
            '**Érintő** a kör $P$ pontjában: merőleges a $KP$ sugárra, tehát a normálvektora $\\overrightarrow{KP}$. Az $x^2 + y^2 = r^2$ körhöz a $P(x_0; y_0)$ pontban húzott érintő: $x_0 x + y_0 y = r^2$.',
            '**Parabola**: azon pontok halmaza, amelyek egy $F$ ponttól (fókusz) és egy $d$ egyenestől (vezéregyenes) egyenlő távolságra vannak.',
            'Csúcsponti egyenlet: $x^2 = 2py$; fókusz $F\\left(0; \\frac{p}{2}\\right)$, vezéregyenes $y = -\\frac{p}{2}$.',
          ],
        },
        {
          kind: 'plot',
          equalAxes: true,
          title: 'Az x² + y² = 25 kör, érintője (3; 4)-ben és a szelő y = x + 1',
          x: [-7, 7],
          y: [-7, 7],
          functions: [
            { label: 'felső félkör', fn: upper(0, 0, 5) },
            { label: 'alsó félkör', fn: lower(0, 0, 5) },
            { label: 'érintő: 3x + 4y = 25', fn: (x) => (25 - 3 * x) / 4 },
            { label: 'szelő: y = x + 1', fn: (x) => x + 1 },
          ],
          points: [
            { x: 3, y: 4, label: 'érintési pont (3; 4)' },
            { x: -4, y: -3, label: '(−4; −3)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kör és egyenes közös pontjai' },
        {
          kind: 'text',
          text: 'Két módon dönthetsz. **Távolsággal**: kiszámolod a $K$ középpont és az egyenes $d$ távolságát, és összehasonlítod az $r$ sugárral. **Egyenletrendszerrel**: az egyenesből kifejezed az egyik ismeretlent, és behelyettesíted a kör egyenletébe. A kapott másodfokú egyenlet gyökei adják a közös pontok koordinátáit.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: metszéspontok',
          problem:
            'Határozza meg az $x^2 + y^2 = 25$ kör és az $y = x + 1$ egyenes közös pontjait!',
          solution:
            'Behelyettesítünk: $x^2 + (x + 1)^2 = 25$, vagyis $2x^2 + 2x + 1 = 25$, $x^2 + x - 12 = 0$.\n\nA gyökök: $x = 3$ vagy $x = -4$. Ezekből $y = 4$, illetve $y = -3$.\n\nA közös pontok: $(3; 4)$ és $(-4; -3)$. Ellenőrzés: $9 + 16 = 25$ ✓ és $16 + 9 = 25$ ✓.\n\nA távolságos módszer ugyanezt mutatja: a középpont távolsága az $x - y + 1 = 0$ egyenestől $\\frac{1}{\\sqrt{2}} \\approx 0{,}71 < 5$, tehát az egyenes szelő.',
        },
        { kind: 'heading', text: 'A kör érintője' },
        {
          kind: 'text',
          text: 'Az érintő a körnek **egyetlen közös pontja** van az egyenessel, és merőleges az érintési pontba húzott sugárra. Ezért az érintő normálvektora a sugárvektor. Ha a kör egyenlete $(x - u)^2 + (y - v)^2 = r^2$ és az érintési pont $P(x_0; y_0)$, akkor a normálvektor $\\overrightarrow{KP} = (x_0 - u;\\ y_0 - v)$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: érintő a kör adott pontjában',
          problem:
            'Írja fel az $(x - 1)^2 + (y + 2)^2 = 25$ kör $P(4; 2)$ pontjába húzott érintőjének egyenletét!',
          solution:
            'Először ellenőrizzük, hogy $P$ a körön van-e: $(4 - 1)^2 + (2 + 2)^2 = 9 + 16 = 25$ ✓.\n\nA középpont $K(1; -2)$, a sugárvektor $\\overrightarrow{KP} = (3; 4)$, ez az érintő normálvektora.\n\nAz érintő egyenlete: $3x + 4y = 3 \\cdot 4 + 4 \\cdot 2 = 20$.\n\nEllenőrzés: a középpont távolsága az egyenestől $\\frac{|3 - 8 - 20|}{\\sqrt{9 + 16}} = \\frac{25}{5} = 5 = r$ ✓.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: érintési feltétel',
          problem: 'Mely $c$ értékekre érinti az $y = x + c$ egyenes az $x^2 + y^2 = 25$ kört?',
          solution:
            'Az egyenes: $x - y + c = 0$. A középpont (az origó) távolsága az egyenestől $\\frac{|c|}{\\sqrt{2}}$. Érintés esetén ez egyenlő a sugárral: $\\frac{|c|}{\\sqrt{2}} = 5$, tehát $|c| = 5\\sqrt{2}$, vagyis $c = \\pm 5\\sqrt{2} \\approx \\pm 7{,}07$.\n\nMásik út: $x^2 + (x + c)^2 = 25$, $2x^2 + 2cx + c^2 - 25 = 0$; diszkrimináns: $4c^2 - 8(c^2 - 25) = 200 - 4c^2$. Ez akkor 0, ha $c^2 = 50$. ✓',
        },
        {
          kind: 'tip',
          text: 'A három lehetőség a diszkrimináns előjele szerint: $D > 0$ két közös pont (szelő), $D = 0$ egy közös pont (érintő), $D < 0$ nincs közös pont. Az érintés feltétele tehát $D = 0$.',
        },
        { kind: 'heading', text: 'A parabola' },
        {
          kind: 'text',
          text: 'A függvénytani $y = ax^2 + bx + c$ görbék mellett a parabolát geometriai definícióval is megadhatjuk: pontjai egyenlő távolságra vannak a fókusztól és a vezéregyenestől. Az $x^2 = 2py$ egyenletű parabola csúcsa az origó, tengelye az $y$ tengely. Ha $p > 0$, felfelé nyílik.',
        },
        {
          kind: 'plot',
          equalAxes: true,
          title: 'Az x² = 8y parabola (p = 4), fókusza és vezéregyenese',
          x: [-8, 8],
          y: [-4, 9],
          functions: [
            { label: 'x² = 8y', fn: (x) => (x * x) / 8 },
            { label: 'vezéregyenes: y = −2', fn: () => -2 },
            { label: 'érintő (4; 2)-ben: y = x − 2', fn: (x) => x - 2 },
          ],
          points: [
            { x: 0, y: 2, label: 'F(0; 2) fókusz' },
            { x: 4, y: 2, label: 'P(4; 2)' },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: parabola fókusza és vezéregyenese',
          problem:
            'Adja meg az $x^2 = 8y$ parabola fókuszát és vezéregyenesét! Mutassa meg, hogy a $P(4; 2)$ pont egyenlő távolságra van a fókusztól és a vezéregyenestől!',
          solution:
            '$2p = 8$, tehát $p = 4$. A fókusz $F\\left(0; \\frac{p}{2}\\right) = (0; 2)$, a vezéregyenes $y = -2$.\n\nA $P$ pont rajta van a parabolán: $4^2 = 16 = 8 \\cdot 2$ ✓.\n\nTávolság a fókusztól: $PF = \\sqrt{(4 - 0)^2 + (2 - 2)^2} = 4$.\n\nTávolság a vezéregyenestől: $2 - (-2) = 4$. A két távolság egyenlő. ✓',
        },
        {
          kind: 'text',
          text: "A parabola érintőjét deriválással kapod meg: az $y = \\frac{x^2}{8}$ függvény deriváltja $y' = \\frac{x}{4}$, a $P(4; 2)$ pontban az érintő meredeksége $1$, tehát az érintő $y - 2 = 1 \\cdot (x - 4)$, vagyis $y = x - 2$. Ellenőrzés: $\\frac{x^2}{8} = x - 2$ egyenlet $x^2 - 8x + 16 = 0$, azaz $(x - 4)^2 = 0$, egyetlen megoldás, ahogy az érintőtől elvárható.",
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Hány közös pontja van egy körnek és egy egyenesnek? Számítsa ki a metszéspontokat.',
            'Írja fel a kör adott pontjába húzott érintő egyenletét, vagy a külső pontból húzott érintőket.',
            'Mely paraméterértékekre érinti az egyenes a kört (diszkrimináns vagy távolság)?',
            'Parabola egyenlete, fókusza, vezéregyenese; parabola és egyenes közös pontjai; a parabola érintője.',
          ],
        },
        {
          kind: 'warning',
          text: 'Az érintő felírásánál először mindig ellenőrizd, hogy a megadott pont tényleg a körön van-e. Ha külső pont, két érintő létezik, és más módszer kell: az érintési feltételt (távolság $= r$, vagy $D = 0$) kell felírni.',
        },
        {
          kind: 'tip',
          text: 'Mindig készíts vázlatot. A kör, az egyenes és az érintési pont ábráján azonnal látszik, ha egy kapott metszéspont nem lehet jó, vagy ha egy érintő rossz irányba dől.',
        },
      ],
      topicMatch: ['kör és egyenes', 'parabola'],
      quiz: [
        {
          question: 'Hány közös pontja van az $x^2 + y^2 = 9$ körnek és az $x = 3$ egyenesnek?',
          options: ['0', '2', '1', 'végtelen sok'],
          answer: 2,
          explanation:
            'Behelyettesítve $y^2 = 0$, tehát egyetlen megoldás van: az egyenes érinti a kört a $(3; 0)$ pontban.',
          emelt: true,
        },
        {
          question: 'Mi az $x^2 + y^2 = 25$ kör $(-3; 4)$ pontjába húzott érintőjének egyenlete?',
          options: ['$3x + 4y = 25$', '$-3x + 4y = 25$', '$3x - 4y = 25$', '$-3x - 4y = 25$'],
          answer: 1,
          explanation: 'Az érintő egyenlete $x_0 x + y_0 y = r^2$, vagyis $-3x + 4y = 25$.',
          emelt: true,
        },
        {
          question: 'Hol van az $x^2 = 12y$ parabola fókusza?',
          options: ['$(0; 6)$', '$(0; -3)$', '$(3; 0)$', '$(0; 3)$'],
          answer: 3,
          explanation: '$2p = 12$, $p = 6$; a fókusz $\\left(0; \\frac{p}{2}\\right) = (0; 3)$.',
          emelt: true,
        },
        {
          question: 'Mely $c$ értékekre érinti az $y = x + c$ egyenes az $x^2 + y^2 = 8$ kört?',
          options: ['$c = \\pm 2\\sqrt{2}$', '$c = \\pm 4$', '$c = \\pm 8$', '$c = 4$'],
          answer: 1,
          explanation:
            'A távolság $\\frac{|c|}{\\sqrt{2}} = \\sqrt{8} = 2\\sqrt{2}$, ebből $|c| = 4$.',
          emelt: true,
        },
        {
          question: 'Mi a közös pontja az $x^2 + y^2 = 25$ körnek az $y = x + 1$ egyenessel?',
          options: [
            '$(3; 4)$ és $(-4; -3)$',
            '$(4; 3)$ és $(-3; -4)$',
            'csak a $(3; 4)$',
            'nincs közös pontjuk',
          ],
          answer: 0,
          explanation:
            '$x^2 + (x + 1)^2 = 25$-ből $x^2 + x - 12 = 0$, $x = 3$ vagy $x = -4$, és $y = x + 1$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Parabola', url: wiki('Parabola (görbe)') },
        { label: 'Wikipédia: Érintő', url: wiki('Érintő (geometria)') },
        { label: 'Wikipédia: Kör', url: wiki('Kör (geometria)') },
      ],
    },
  ],
};

export default unit;
