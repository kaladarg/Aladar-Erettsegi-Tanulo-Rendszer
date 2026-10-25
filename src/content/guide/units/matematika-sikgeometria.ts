import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** The upper and lower half of the circle x² + y² = 25, for the Thalész plot. */
const upper = (x: number) => (Math.abs(x) <= 5 ? Math.sqrt(25 - x * x) : NaN);
const lower = (x: number) => (Math.abs(x) <= 5 ? -Math.sqrt(25 - x * x) : NaN);

/** Exam requirement topic: Síkgeometria (elemi geometria, transzformációk, síkbeli alakzatok, kerület, terület). */
const unit: GuideUnit = {
  id: 'sikgeometria',
  subject: 'matematika',
  order: 40,
  title: 'Síkgeometria',
  requirementRef:
    '4.1 Elemi geometria; 4.2 Geometriai transzformációk; 4.3.1 Síkbeli alakzatok (háromszögek, négyszögek, sokszögek, kör); 4.7 Kerület, terület',
  intro:
    'Az alapfogalmaktól és a szögektől a háromszögeken, négyszögeken és a körön át az egybevágóságig, hasonlóságig és a területszámításig. A trigonometria és a koordináta-geometria külön egységben szerepel.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (4.1, 4.2, 4.3.1, 4.7). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'alapfogalmak-szogek-sokszogek',
      subject: 'matematika',
      unitId: 'sikgeometria',
      title: 'Alapfogalmak, szögek, ponthalmazok, sokszögek',
      level: 'both',
      requirement: {
        kozep:
          'Alapfogalom, axióma, definiált fogalom, tétel; térelemek és a szög fogalma, szögek osztályozása, nevezetes szögpárok; távolság és hajlásszög; kör, gömb, szakaszfelező merőleges, szögfelező; konvex sokszögek átlóinak száma, belső és külső szögösszege, szabályos sokszög',
        emelt: 'Kitérő egyenesek távolsága és hajlásszöge; a parabola fogalma',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Alapfogalom** (pont, egyenes, sík): nem definiáljuk. **Axióma**: bizonyítás nélkül elfogadott alapállítás. **Definiált fogalom**: korábbi fogalmakkal meghatározott. **Tétel**: bizonyított állítás.',
            '**Szögek**: hegyesszög $< 90^\\circ$, derékszög $90^\\circ$, tompaszög $90^\\circ$ és $180^\\circ$ között, egyenesszög $180^\\circ$.',
            '**Szögpárok**: pótszögek összege $90^\\circ$, kiegészítő (mellék-) szögeké $180^\\circ$, csúcsszögek egyenlők. Két párhuzamos egyenest metsző harmadik egyenesnél a váltószögek és az egyállású szögek egyenlők, a társszögek összege $180^\\circ$.',
            '**Konvex $n$-szög**: átlóinak száma $\\frac{n(n-3)}{2}$, belső szögeinek összege $(n-2) \\cdot 180^\\circ$, külső szögeinek összege $360^\\circ$.',
            '**Szabályos sokszög**: minden oldala és minden szöge egyenlő.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            '**Parabola**: azon pontok halmaza a síkban, amelyek egy adott ponttól (fókusz) és egy rá nem illeszkedő egyenestől (vezéregyenes) egyenlő távolságra vannak.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az építkezés rendje' },
        {
          kind: 'text',
          text: 'A geometriát lépcsőzetesen építjük fel. Az **alapfogalmakat** (pont, egyenes, sík) nem definiáljuk, az **axiómák** ezek között állítanak alapkapcsolatokat (például két különböző ponton pontosan egy egyenes megy át). A **definiált fogalmak** (például háromszög, kör) ezekre épülnek, a **tételeket** pedig bizonyítjuk. A vizsgán „bizonyítsa” feladatnál csak olyan állítást használhatsz, amely axióma, definíció vagy már bizonyított tétel.',
        },
        { kind: 'heading', text: 'Térelemek, szögek' },
        {
          kind: 'text',
          text: 'Térelemek: pont, egyenes, sík, valamint ezek részei (félegyenes, szakasz, félsík, szögtartomány). A **szög** két közös kezdőpontú félegyenes által meghatározott síkrész (vagy a félegyenesek közötti elfordulás mértéke).',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'csúcsszögek',
              text: 'két egyenes metszésénél a szemközti szögek; egyenlők.',
            },
            {
              term: 'mellékszögek',
              text: 'közös szárú, másik szárukkal egyenesszöget alkotó szögek; összegük $180^\\circ$.',
            },
            {
              term: 'váltószögek, egyállású szögek',
              text: 'párhuzamos egyeneseket metsző egyenesnél egyenlők; megfordítva, ha egyenlők, az egyenesek párhuzamosak.',
            },
            {
              term: 'társszögek',
              text: 'a metsző egyenes ugyanazon oldalán lévő, nem szomszédos szögek; párhuzamos egyeneseknél összegük $180^\\circ$.',
            },
          ],
        },
        { kind: 'heading', text: 'Távolság és hajlásszög' },
        {
          kind: 'keypoints',
          items: [
            '**pont és egyenes (sík) távolsága**: a pontból az egyenesre (síkra) bocsátott merőleges szakasz hossza.',
            '**párhuzamos egyenesek (síkok) távolsága**: az egyik bármely pontjának távolsága a másiktól.',
            '**két egyenes hajlásszöge**: a két egyenes által bezárt szögek közül a nem nagyobbik, $0^\\circ$ és $90^\\circ$ között.',
            '**egyenes és sík hajlásszöge**: az egyenes és a síkra vett merőleges vetülete által bezárt szög.',
            '**két sík hajlásszöge**: a metszésvonalukra merőleges síkmetszet két egyenesének hajlásszöge.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kitérő egyenesek** (nem párhuzamosak és nem metszik egymást): **hajlásszögük** az egyik egyenessel párhuzamosan eltolt, a másikat metsző egyenes szöge; **távolságuk** a mindkettőre merőleges (közös normál-) szakasz hossza. Kockában például az egyik alaplap éle és a szomszédos oldallap másik éle gyakran kitérő.',
        },
        { kind: 'heading', text: 'Távolsággal definiált ponthalmazok' },
        {
          kind: 'compare',
          columns: ['Hol', 'Megadása'],
          rows: [
            {
              label: 'kör',
              cells: [
                'a síkban',
                'egy adott ponttól (középpont) adott távolságra ($r$) lévő pontok',
              ],
            },
            {
              label: 'gömb',
              cells: ['a térben', 'egy adott ponttól adott távolságra lévő pontok'],
            },
            {
              label: 'szakaszfelező merőleges',
              cells: ['a síkban', 'a szakasz két végpontjától egyenlő távolságra lévő pontok'],
            },
            {
              label: 'szögfelező',
              cells: [
                'a síkban',
                'a szög két szárától egyenlő távolságra lévő pontok (a szögtartományban)',
              ],
            },
          ],
        },
        {
          kind: 'plot',
          emelt: true,
          title: 'Parabola: fókusz (0; 1), vezéregyenes y = −1',
          x: [-4, 4],
          y: [-2, 4],
          equalAxes: true,
          functions: [
            { label: 'parabola: x² = 4y', fn: (x) => (x * x) / 4 },
            { label: 'vezéregyenes: y = −1', fn: () => -1 },
          ],
          points: [
            { x: 0, y: 1, label: 'fókusz (0; 1)' },
            { x: 2, y: 1, label: '(2; 1): távolsága a fókusztól és az egyenestől is 2' },
          ],
        },
        { kind: 'heading', text: 'Konvex sokszögek' },
        {
          kind: 'keypoints',
          items: [
            '**Átlók száma**: egy csúcsból $n - 3$ átló indul (magát és két szomszédját nem kötjük össze vele), $n$ csúcsból $n(n-3)$, de minden átlót kétszer számoltunk, ezért $\\frac{n(n-3)}{2}$.',
            '**Belső szögösszeg**: egy csúcsból húzott átlók a sokszöget $n - 2$ háromszögre bontják, ezért $(n-2) \\cdot 180^\\circ$.',
            '**Külső szögösszeg**: csúcsonként egy külső szöget véve $360^\\circ$ (minden csúcsnál a belső és a külső szög összege $180^\\circ$, ezért $n \\cdot 180^\\circ - (n-2) \\cdot 180^\\circ = 360^\\circ$).',
            '**Szabályos $n$-szög** egy belső szöge $\\frac{(n-2) \\cdot 180^\\circ}{n}$, egy külső szöge $\\frac{360^\\circ}{n}$.',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy konvex sokszögnek 54 átlója van. Hány oldalú, és mennyi a belső szögeinek összege? Egy másik szabályos sokszög belső szöge $156^\\circ$: hány oldalú?',
          solution:
            '$\\frac{n(n-3)}{2} = 54$, ebből $n^2 - 3n - 108 = 0$, a pozitív gyök $n = 12$ (mert $12 \\cdot 9 = 108$). A belső szögek összege $(12 - 2) \\cdot 180^\\circ = 1800^\\circ$.\n\nA $156^\\circ$-os belső szöghöz $24^\\circ$-os külső szög tartozik, ezért $n = \\frac{360}{24} = 15$ oldalú. (Ellenőrzés: $\\frac{13 \\cdot 180}{15} = 156$.)',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: szögszámítás ábra alapján (párhuzamos egyenesek, csúcsszögek, háromszög vagy sokszög szögei), átlók száma, szabályos sokszög szöge.',
            'Igaz–hamis állítások: például „minden konvex sokszög külső szögeinek összege $360^\\circ$”, vagy a ponthalmazok (szakaszfelező merőleges, kör) megadása.',
            'II. rész: összetett feladat része a szögek kiszámítása, amelyre a további számítás épül.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a külső szögek összegét $(n-2) \\cdot 180^\\circ$-nak vagy $n \\cdot 180^\\circ$-nak gondolni. Konvex sokszögnél mindig $360^\\circ$, akárhány oldala van. Szabályos sokszögnél ez a leggyorsabb út az oldalszám megtalálásához.',
        },
        {
          kind: 'tip',
          text: 'Szögszámításnál indokolj: írd mellé, hogy „váltószög”, „csúcsszög”, „háromszög belső szögeinek összege”. A javítókulcs a szögek kiszámításán kívül az indoklásért is ad pontot.',
        },
      ],
      topicMatch: [
        '=szög',
        '=szögek',
        'szögszámítás',
        '=sokszögek',
        '=geometria',
        'felezőmerőleges',
      ],
      quiz: [
        {
          question: 'Hány átlója van egy konvex kilencszögnek?',
          options: ['18', '27', '36', '9'],
          answer: 1,
          explanation: '$\\frac{9 \\cdot 6}{2} = 27$.',
        },
        {
          question: 'Mekkora a szabályos nyolcszög egy belső szöge?',
          options: ['$120^\\circ$', '$140^\\circ$', '$135^\\circ$', '$150^\\circ$'],
          answer: 2,
          explanation:
            '$\\frac{(8-2) \\cdot 180^\\circ}{8} = 135^\\circ$. (Külső szöge $45^\\circ$, és $180^\\circ - 45^\\circ = 135^\\circ$.)',
        },
        {
          question:
            'Melyik ponthalmaz az $A$ és $B$ ponttól egyenlő távolságra lévő pontok halmaza a síkban?',
          options: [
            'az $AB$ szakasz felezőpontja',
            'az $AB$ szakasz Thalész-köre',
            'az $AB$ szakasz felező merőlegese',
            'az $AB$-vel párhuzamos egyenes',
          ],
          answer: 2,
          explanation: 'Ez a szakaszfelező merőleges definíciója.',
        },
        {
          question: 'Egy szög mellékszöge $118^\\circ$. Mekkora a szög pótszöge?',
          options: ['$28^\\circ$', '$62^\\circ$', '$152^\\circ$', 'nincs pótszöge'],
          answer: 0,
          explanation:
            'A szög $180^\\circ - 118^\\circ = 62^\\circ$, a pótszöge $90^\\circ - 62^\\circ = 28^\\circ$.',
        },
        {
          question: 'Mi a parabola definíciója a síkban?',
          options: [
            'egy ponttól egyenlő távolságra lévő pontok halmaza',
            'két ponttól egyenlő távolságra lévő pontok halmaza',
            'egy ponttól és egy egyenestől egyenlő távolságra lévő pontok halmaza',
            'két egyenestől egyenlő távolságra lévő pontok halmaza',
          ],
          answer: 2,
          explanation:
            'Fókuszból és vezéregyenesből építjük fel: a pontok mindkettőtől ugyanolyan messze vannak.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szög', url: wiki('Szög (geometria)') },
        { label: 'Wikipédia: Sokszög', url: wiki('Sokszög') },
        { label: 'Wikipédia: Parabola', url: wiki('Parabola (görbe)') },
      ],
    },
    {
      id: 'haromszogek-nevezetes-vonalak-pitagorasz',
      subject: 'matematika',
      unitId: 'sikgeometria',
      title: 'Háromszögek, nevezetes vonalak és pontok, Pitagorasz-tétel',
      level: 'both',
      requirement: {
        kozep:
          'Háromszögek csoportosítása; háromszög-egyenlőtlenség, belső és külső szögek összege, nagyobb oldallal szemben nagyobb szög; speciális háromszögek; oldalfelező merőleges, szögfelező, magasságvonal, súlyvonal, középvonal, körülírt és beírt kör; az oldalfelező merőlegesek és a belső szögfelezők metszéspontjára vonatkozó tétel bizonyítása; Pitagorasz-tétel és megfordítása, a tétel bizonyítása',
        emelt:
          'A háromszög nevezetes vonalaira, pontjaira és köreire vonatkozó tételek bizonyítása; a Pitagorasz-tétel megfordításának bizonyítása; magasságtétel és befogótétel (bizonyítással)',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Csoportosítás**: oldalak szerint általános, egyenlő szárú, szabályos; szögek szerint hegyes-, derék-, tompaszögű.',
            '**Háromszög-egyenlőtlenség**: bármely két oldal összege nagyobb a harmadiknál. **Belső szögek összege** $180^\\circ$; **külső szög** egyenlő a nem mellette fekvő két belső szög összegével. Nagyobb oldallal szemben nagyobb szög van.',
            '**Oldalfelező merőlegesek** egy ponton mennek át: a **körülírt kör** középpontján. **Belső szögfelezők**: a **beírt kör** középpontján. **Magasságvonalak**: a **magasságponton**. **Súlyvonalak**: a **súlypontban** metszik egymást, amely a súlyvonalat a csúcstól számítva $2:1$ arányban osztja.',
            '**Középvonal**: két oldalfelezőpontot köt össze; párhuzamos a harmadik oldallal, és fele olyan hosszú.',
            '**Pitagorasz-tétel**: derékszögű háromszögben $a^2 + b^2 = c^2$ ($a$, $b$ a befogók, $c$ az átfogó). A megfordítása is igaz.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            '**Befogótétel**: $a^2 = c \\cdot p$, $b^2 = c \\cdot q$ ($p$, $q$ a befogók vetülete az átfogón).',
            '**Magasságtétel**: $m^2 = p \\cdot q$.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Alapösszefüggések' },
        {
          kind: 'text',
          text: 'Háromszög-egyenlőtlenség: $a + b > c$ (és a másik két hasonló). Három hosszúságból akkor szerkeszthető háromszög, ha a két kisebb összege nagyobb a legnagyobbnál: a $3$, $4$, $8$ nem lehet háromszög oldala, mert $3 + 4 < 8$. A külső szög összefüggése a szögösszegből jön: ha a belső szögek $\\alpha$, $\\beta$, $\\gamma$, akkor a $\\gamma$ melletti külső szög $180^\\circ - \\gamma = \\alpha + \\beta$.',
        },
        { kind: 'heading', text: 'Speciális háromszögek' },
        {
          kind: 'keypoints',
          items: [
            '**Egyenlő szárú háromszög**: két oldala (a szárak) egyenlő, az alapon fekvő szögei egyenlők. Az alaphoz tartozó magasság egyben az alap oldalfelező merőlegese, a szárak szögfelezője és súlyvonala is, ez a szimmetriatengely.',
            '**Szabályos háromszög**: mindhárom oldala egyenlő, minden szöge $60^\\circ$; magassága $m = \\frac{a\\sqrt{3}}{2}$. Mind a négy nevezetes pontja egybeesik.',
            '**Derékszögű háromszög**: az átfogó a legnagyobb oldal; a körülírt kör középpontja az átfogó felezőpontja (lásd a Thalész-tételt).',
          ],
        },
        { kind: 'heading', text: 'Nevezetes vonalak, pontok, körök' },
        {
          kind: 'compare',
          columns: ['Hogyan metszik egymást', 'Következmény'],
          rows: [
            {
              label: 'oldalfelező merőleges',
              cells: [
                'a három egy pontban metszi egymást',
                'a **körülírt kör** középpontja ($O$), a csúcsoktól egyenlő távolságra',
              ],
            },
            {
              label: 'belső szögfelező',
              cells: [
                'a három egy pontban metszi egymást',
                'a **beírt kör** középpontja, az oldalaktól egyenlő távolságra',
              ],
            },
            {
              label: 'magasságvonal',
              cells: [
                'a csúcsból a szemközti oldal egyenesére merőleges',
                '**magasságpont** ($M$); tompaszögű háromszögnél a háromszögön kívül van',
              ],
            },
            {
              label: 'súlyvonal',
              cells: [
                'a csúcsot a szemközti oldal felezőpontjával köti össze',
                '**súlypont** ($S$), a súlyvonalat $2:1$ arányban osztja',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Miért igaz az oldalfelező merőlegesekre vonatkozó tétel?** Az $AB$ oldalfelező merőlegesének minden pontja egyenlő távol van $A$-tól és $B$-től, a $BC$ oldalfelezőjének pontjai $B$-től és $C$-től. A két merőleges metszéspontja ezért $A$-tól, $B$-től és $C$-től is egyenlő távolságra van, tehát rajta van az $AC$ oldalfelező merőlegesén is: mindhárom egy ponton megy át, és ez a pont a három csúcs köré írt kör középpontja.',
        },
        {
          kind: 'text',
          text: '**A belső szögfelezők tétele** ugyanígy: a szög szögfelezőjének pontjai a szár egyeneseitől egyenlő távolságra vannak. Két szögfelező metszéspontja mindhárom oldaltól egyenlő távolságra van, ezért a harmadik szögfelezőn is rajta van, és a beírt kör középpontja, sugara ez a távolság.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A másik két tétel bizonyítása (emelt).** A magasságvonalakra: a csúcsokon át a szemközti oldallal húzott párhuzamosok egy nagy háromszöget alkotnak, amelynek oldalfelező merőlegesei az eredeti háromszög magasságvonalai, így azok is egy ponton mennek át. A súlyvonalaknál: a középvonal fele olyan hosszú, mint a vele párhuzamos oldal, ebből a két súlyvonal metszéspontja mindkettőt $2:1$ arányban osztja, tehát a harmadik súlyvonal is ugyanazon a ponton megy át.',
        },
        { kind: 'heading', text: 'Pitagorasz-tétel' },
        {
          kind: 'formula',
          tex: 'a^2 + b^2 = c^2',
          caption: 'derékszögű háromszög befogói $a$, $b$, átfogója $c$',
        },
        {
          kind: 'text',
          text: '**Bizonyítás.** Vegyünk egy $a + b$ oldalú négyzetet, és helyezzük el benne négy, $a$, $b$ befogójú derékszögű háromszöget úgy, hogy az átfogóik egy $c$ oldalú négyzetet zárjanak közre. A nagy négyzet területe kétféleképp: $(a+b)^2 = 4 \\cdot \\frac{ab}{2} + c^2$, azaz $a^2 + 2ab + b^2 = 2ab + c^2$, amiből $a^2 + b^2 = c^2$.',
        },
        {
          kind: 'text',
          text: '**Megfordítás.** Ha egy háromszög oldalaira $a^2 + b^2 = c^2$, akkor a háromszög derékszögű, az átfogó $c$. A megfordítással lehet igazolni, hogy egy háromszög derékszögű: a $9$, $12$, $15$ oldalú az, mert $81 + 144 = 225$; a $6$, $7$, $10$ nem, mert $36 + 49 = 85 \\ne 100$. Ha $a^2 + b^2 > c^2$ (a legnagyobb oldalra), a háromszög hegyesszögű, ha kisebb, tompaszögű.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A megfordítás bizonyítása (emelt).** Legyen az $ABC$ háromszög oldalaira $a^2 + b^2 = c^2$. Szerkesszünk egy $a$ és $b$ befogójú derékszögű háromszöget, átfogója a Pitagorasz-tétel szerint $c_1$ és $c_1^2 = a^2 + b^2 = c^2$, azaz $c_1 = c$. A két háromszög három oldala páronként egyenlő, így egybevágók, tehát az $ABC$ háromszögnek is derékszöge van a $c$-vel szemközt.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy egyenlő szárú háromszög szárai 13, az alapja 10 egység. Mekkora a magassága és a területe?',
          solution:
            'Az alaphoz tartozó magasság felezi az alapot, így derékszögű háromszöget kapunk, amelynek befogói $m$ és $5$, átfogója $13$. Pitagorasz-tétellel $m = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. A terület $\\frac{10 \\cdot 12}{2} = 60$ területegység.',
        },
        {
          kind: 'heading',
          text: 'Magasság- és befogótétel',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Legyen a derékszögű $ABC$ háromszögben a derékszög $C$-nél, az átfogó $c = AB$, a hozzá tartozó magasság talppontja $D$, a magasság $m = CD$, és $p = BD$, $q = AD$ az átfogó két szelete ($c = p + q$).',
        },
        {
          kind: 'formula',
          emelt: true,
          tex: 'm^2 = p \\cdot q \\qquad a^2 = c \\cdot p \\qquad b^2 = c \\cdot q',
          caption: 'magasságtétel és befogótétel',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Bizonyítás hasonlósággal.** A $BCD$ és $BAC$ háromszögnek közös a $B$ szöge és derékszögű, ezért hasonlók: $\\frac{BC}{BA} = \\frac{BD}{BC}$, azaz $a^2 = c \\cdot p$ (a $b$-re ugyanígy). Az $ACD$ és $CBD$ háromszög is hasonló (mindkettő derékszögű, és az $A$-nál, illetve a $C$-nél lévő szögük is egyenlő), ebből $\\frac{q}{m} = \\frac{m}{p}$, vagyis $m^2 = p \\cdot q$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa a befogó- és magasságtételre',
          problem:
            'Egy derékszögű háromszög befogói 6 és 8. Mekkora az átfogóhoz tartozó magasság és az átfogó két szelete?',
          solution:
            'Az átfogó $c = \\sqrt{36 + 64} = 10$. Befogótétellel $6^2 = 10 \\cdot p$, így $p = 3{,}6$, és $q = 10 - 3{,}6 = 6{,}4$ (ellenőrzés: $8^2 = 10 \\cdot 6{,}4$). A magasság: $m = \\sqrt{3{,}6 \\cdot 6{,}4} = \\sqrt{23{,}04} = 4{,}8$. (A területből is jön: $\\frac{6 \\cdot 8}{2} = \\frac{10 \\cdot m}{2}$, így $m = 4{,}8$.)',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: háromszög hiányzó oldala vagy szöge Pitagorasz-tétellel, szögösszeggel; igaz–hamis állítás a nevezetes pontokról (például hol van a magasságpont tompaszögű háromszögben).',
            'II. rész: összetett síkgeometriai feladat, amelyben a Pitagorasz-tétel, a területképletek és a hasonlóság együtt szerepel, gyakran szövegesen (létra, kert, tetőszerkezet).',
            'Szóbeli: a Pitagorasz-tétel kimondása, bizonyítása, megfordítása; az oldalfelező merőlegesek (vagy a szögfelezők) tételének bizonyítása.',
            'Emelt: a nevezetes pontokra vonatkozó tételek bizonyítása, magasság- és befogótétel alkalmazása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Pitagorasz-tételnél a legnagyobb hiba, hogy az átfogó helyett befogót írsz $c$ helyére. Mindig a derékszöggel **szemközti** oldal az átfogó. A tétel csak derékszögű háromszögben igaz: ne alkalmazd általános háromszögre.',
        },
        {
          kind: 'tip',
          text: 'Az „egyenlő szárú háromszög” feladatok többségében a magasság behúzása két derékszögű háromszögre bontja az ábrát. Rajzold be, mielőtt számolni kezdesz.',
        },
      ],
      topicMatch: [
        '=háromszög',
        '=háromszögek',
        'háromszög-egyenlőtlenség',
        'pitagorasz',
        'szabályos háromszög',
        'beírt és köréírt kör',
        '=síkgeometria',
      ],
      quiz: [
        {
          question: 'Egy derékszögű háromszög befogói 7 és 24. Mekkora az átfogó?',
          options: ['$31$', '$25$', '$24{,}5$', '$17$'],
          answer: 1,
          explanation: '$\\sqrt{49 + 576} = \\sqrt{625} = 25$.',
        },
        {
          question: 'Melyik oldalhármas alkot derékszögű háromszöget?',
          options: ['$5$, $6$, $8$', '$6$, $7$, $10$', '$9$, $12$, $15$', '$4$, $5$, $7$'],
          answer: 2,
          explanation:
            'A Pitagorasz-tétel megfordítása szerint: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$.',
        },
        {
          question: 'A háromszög melyik pontja van mindhárom csúcstól egyenlő távolságra?',
          options: [
            'a súlypont',
            'a magasságpont',
            'a beírt kör középpontja',
            'a körülírt kör középpontja',
          ],
          answer: 3,
          explanation:
            'Az oldalfelező merőlegesek metszéspontja egyenlő távol van a csúcsoktól, ez a körülírt kör középpontja.',
        },
        {
          question:
            'Egy háromszög két szöge $50^\\circ$ és $60^\\circ$. Mekkora a harmadik csúcsnál lévő külső szög?',
          options: ['$70^\\circ$', '$110^\\circ$', '$130^\\circ$', '$120^\\circ$'],
          answer: 1,
          explanation:
            'A külső szög a másik két belső szög összege: $50^\\circ + 60^\\circ = 110^\\circ$.',
        },
        {
          question:
            'Egy derékszögű háromszög átfogóját a hozzá tartozó magasság 4 és 9 hosszú szakaszokra osztja. Mekkora a magasság?',
          options: ['$6$', '$6{,}5$', '$36$', '$\\sqrt{13}$'],
          answer: 0,
          explanation: 'Magasságtétel: $m^2 = 4 \\cdot 9 = 36$, tehát $m = 6$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Háromszög', url: wiki('Háromszög') },
        { label: 'Wikipédia: Pitagorasz-tétel', url: wiki('Pitagorasz-tétel') },
        {
          label: 'Wikipédia: Háromszög nevezetes pontjai',
          url: wiki('Háromszög nevezetes pontjai'),
        },
      ],
    },
    {
      id: 'negyszogek-kor-thalesz',
      subject: 'matematika',
      unitId: 'sikgeometria',
      title: 'Négyszögek, a kör és a Thalész-tétel',
      level: 'both',
      requirement: {
        kozep:
          'Speciális négyszögek (trapéz, paralelogramma, deltoid, rombusz, téglalap, négyzet) és tulajdonságaik; a konvex négyszög belső és külső szögeinek összege; a kör részei, az érintő merőleges az érintési pontba húzott sugárra, a külső pontból húzott érintőszakaszok egyenlők; szögmérés fokban; a középponti szög arányos az ívvel és a körcikk területével; Thalész-tétel és megfordítása, a Thalész-tétel bizonyítása',
        emelt:
          'Az érintő és az érintőszakaszok tételének bizonyítása; szögmérés radiánban; a Thalész-tétel megfordításának bizonyítása',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Trapéz**: van párhuzamos oldalpárja. **Paralelogramma**: két párhuzamos oldalpár; a szemközti oldalak és szögek egyenlők, az átlók felezik egymást. **Deltoid**: két-két szomszédos oldala egyenlő; az átlói merőlegesek. **Rombusz**: minden oldala egyenlő. **Téglalap**: minden szöge derékszög. **Négyzet**: téglalap és rombusz egyszerre.',
            'Konvex négyszög belső szögeinek összege $360^\\circ$, külső szögeinek összege szintén $360^\\circ$.',
            'A kör **érintője** merőleges az érintési pontba húzott sugárra; egy külső pontból a körhöz húzott két **érintőszakasz** egyenlő hosszú.',
            'A **középponti szög** arányos az ívhosszal és a körcikk területével.',
            '**Thalész-tétel**: az átmérő fölé rajzolt kör bármely pontjából az átmérő derékszögben látszik. **Megfordítás**: derékszögű háromszög köré írt kör középpontja az átfogó felezőpontja.',
          ],
        },
        {
          kind: 'plot',
          title: 'Thalész-tétel: az AB átmérő fölötti C pontnál derékszög van',
          x: [-6, 6],
          y: [-6, 6],
          equalAxes: true,
          functions: [
            { label: 'felső félkör', fn: upper },
            { label: 'alsó félkör', fn: lower },
          ],
          points: [
            { x: -5, y: 0, label: 'A' },
            { x: 5, y: 0, label: 'B' },
            { x: 3, y: 4, label: 'C' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Speciális négyszögek' },
        {
          kind: 'compare',
          columns: ['Definíció', 'Tulajdonságok'],
          rows: [
            {
              label: 'trapéz',
              cells: [
                'legalább egy párhuzamos oldalpár',
                'a párhuzamos oldalak az alapok; a középvonal az alapok számtani közepe',
              ],
            },
            {
              label: 'paralelogramma',
              cells: [
                'két párhuzamos oldalpár',
                'szemközti oldalak és szögek egyenlők, átlók felezik egymást, középpontosan szimmetrikus',
              ],
            },
            {
              label: 'deltoid',
              cells: [
                'két szomszédos oldalpár egyenlő',
                'az egyik átló szimmetriatengely, az átlók merőlegesek',
              ],
            },
            {
              label: 'rombusz',
              cells: [
                'minden oldal egyenlő',
                'az átlók merőlegesen felezik egymást és felezik a szögeket',
              ],
            },
            {
              label: 'téglalap',
              cells: ['minden szög derékszög', 'az átlók egyenlők, és felezik egymást'],
            },
            {
              label: 'négyzet',
              cells: [
                'minden oldal és szög egyenlő',
                'mindegyik előző tulajdonsága megvan: átlói egyenlők, merőlegesek, felezik egymást és a szögeket',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A négyszögek **hierarchiát** alkotnak: minden négyzet rombusz, téglalap, paralelogramma és trapéz is, minden rombusz paralelogramma és deltoid is. Fordítva nem igaz: a paralelogramma nem mindig rombusz. A belső szögösszeg $360^\\circ$, mert egy átló két háromszögre bontja a konvex négyszöget.',
        },
        { kind: 'heading', text: 'A kör részei' },
        {
          kind: 'terms',
          items: [
            {
              term: 'sugár, átmérő',
              text: 'a sugár a középpontot köti össze a kör egy pontjával; az átmérő a középponton átmenő húr, hossza $2r$.',
            },
            {
              term: 'húr, szelő, érintő',
              text: 'a húr a kör két pontját köti össze; a szelő két pontban metszi a kört; az érintőnek egyetlen közös pontja van vele.',
            },
            {
              term: 'körív, körcikk, körszelet',
              text: 'a körív a kör egy darabja; a körcikket két sugár és az általuk határolt ív, a körszeletet egy húr és az ív határolja.',
            },
            { term: 'körgyűrű', text: 'két koncentrikus kör közötti rész.' },
          ],
        },
        {
          kind: 'text',
          text: '**Érintő.** Az érintő merőleges az érintési pontba húzott sugárra. Ezért az $r$ sugarú kör középpontjától $d$ távolságra lévő külső pontból húzott érintőszakasz hossza $\\sqrt{d^2 - r^2}$ (Pitagorasz-tétel), és a két érintőszakasz egyenlő hosszú. Példa: $d = 13$, $r = 5$ esetén az érintőszakasz $\\sqrt{169 - 25} = 12$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Bizonyítás (emelt).** Ha az $e$ érintő nem lenne merőleges az $OE$ sugárra, akkor a középpontból az $e$-re bocsátott merőleges talppontja $F \\ne E$ lenne, és az $OF < OE = r$ miatt $F$ a körön belül lenne, vagyis $e$ két pontban metszené a kört, ami ellentmond annak, hogy érintő. Az érintőszakaszoknál az $OEP$ és $OFP$ derékszögű háromszögben $OE = OF = r$ és az $OP$ közös átfogó, így $PE^2 = OP^2 - r^2 = PF^2$, tehát $PE = PF$.',
        },
        { kind: 'heading', text: 'Szögmérés, ív, körcikk' },
        {
          kind: 'formula',
          tex: 'i = \\frac{2\\pi r \\cdot \\alpha}{360^\\circ} \\qquad t_{\\text{körcikk}} = \\frac{r^2\\pi \\cdot \\alpha}{360^\\circ}',
          caption:
            'a középponti szög $\\alpha$ fokban; az ív és a körcikk területe arányos $\\alpha$-val',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Radián.** Az $\\alpha$ szög radiánban mért nagysága az $r$ sugarú körben hozzá tartozó ív hosszának és a sugárnak a hányadosa: $\\alpha = \\frac{i}{r}$. Így $180^\\circ = \\pi$ radián, $1\\ \\text{rad} \\approx 57{,}3^\\circ$, és az ív hossza $i = r\\alpha$, a körcikk területe $\\frac{r^2 \\alpha}{2}$.',
        },
        { kind: 'heading', text: 'Thalész-tétel' },
        {
          kind: 'text',
          text: '**Tétel.** Ha $C$ egy $AB$ átmérőjű kör $A$-tól és $B$-től különböző pontja, akkor az $ACB$ szög derékszög.',
        },
        {
          kind: 'text',
          text: '**Bizonyítás.** Legyen $O$ a kör középpontja. Az $OA = OB = OC$, ezért az $AOC$ és $BOC$ háromszög egyenlő szárú. Ha az $A$-nál lévő szög $\\alpha$, a $B$-nél lévő $\\beta$, akkor a $C$-nél lévő szögek rendre $\\alpha$ és $\\beta$, ezért az $ACB$ szög $\\alpha + \\beta$. Az $ABC$ háromszög szögösszege $\\alpha + \\beta + (\\alpha + \\beta) = 180^\\circ$, tehát $\\alpha + \\beta = 90^\\circ$.',
        },
        {
          kind: 'text',
          text: '**Megfordítás.** Ha az $ABC$ háromszögben a $C$ csúcsnál derékszög van, akkor $C$ rajta van az $AB$ átmérőjű körön, azaz a körülírt kör középpontja az átfogó felezőpontja. A szögmérő nélküli derékszög-ellenőrzés és a „keresd a pontot, ahonnan egy szakasz derékszögben látszik” típusú feladatok alapja.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A megfordítás bizonyítása (emelt).** Egészítsük ki az $ABC$ derékszögű háromszöget téglalappá ($D$ a negyedik csúcs). A téglalap átlói egyenlők és felezik egymást, így a metszéspontjuk, az $AB$ felezőpontja $O$, egyenlő távol van mind a négy csúcstól: $OA = OB = OC$. A $C$ tehát az $O$ középpontú, $AB$ átmérőjű körön van.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Az $AB$ szakasz egy kör 10 egység hosszú átmérője, a $C$ pont a körön van, és $AC = 6$. Mekkora a $BC$ szakasz és az $ABC$ háromszög területe? Mekkora a 120°-os középponti szöghöz tartozó körcikk területe és ívhossza, ha a kör sugara 6 egység?',
          solution:
            'Thalész-tétel szerint a $C$-nél derékszög van, az átfogó $AB = 10$. Pitagorasz-tétellel $BC = \\sqrt{100 - 36} = 8$, a terület $\\frac{6 \\cdot 8}{2} = 24$.\n\nA $120^\\circ$ a teljes szög harmada, ezért a körcikk területe $\\frac{36\\pi}{3} = 12\\pi \\approx 37{,}70$, az ívhossza $\\frac{2\\pi \\cdot 6}{3} = 4\\pi \\approx 12{,}57$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: a körcikk vagy ív számítása, érintőszakasz hossza, Thalész-tételre épülő szög- vagy oldalszámítás; igaz–hamis állítás a négyszögekről („minden téglalap négyzet”, „a rombusz átlói merőlegesek”).',
            'II. rész: kerület és terület számítása körökből, körcikkekből és négyszögekből összerakott alakzatnál.',
            'Szóbeli: a Thalész-tétel kimondása és bizonyítása, megfordítása; az érintő tulajdonságai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Állításnál a „minden” és a „van olyan” között nagy a különbség: **nem** minden paralelogramma téglalap, de **minden** négyzet téglalap. A megfordítást sem szabad automatikusan elfogadni: egyenlő átlójú négyszög nem biztos, hogy téglalap.',
        },
        {
          kind: 'tip',
          text: 'Ha a feladatban kör és derékszög szerepel, vagy átmérő van megadva, mindig gondolj a Thalész-tételre. Ha érintő van, húzd be az érintési pontba a sugarat: ott derékszög van.',
        },
      ],
      topicMatch: [
        '=négyszögek',
        'deltoid',
        'trapéz',
        'konkáv négyszög',
        '=kör',
        'körcikk',
        'körszelet',
        'körgyűrű',
        'ívhossz',
        'kör kerülete',
      ],
      quiz: [
        {
          question: 'Melyik négyszögre igaz biztosan, hogy az átlói merőlegesek egymásra?',
          options: ['paralelogramma', 'téglalap', 'rombusz', 'trapéz'],
          answer: 2,
          explanation:
            'A rombusz átlói merőlegesen felezik egymást. A paralelogrammánál és a téglalapnál ez általában nem teljesül.',
        },
        {
          question: 'Az $AB$ átmérőjű kör $C$ pontjára $AC = 12$ és $AB = 13$. Mekkora a $BC$?',
          options: ['$1$', '$5$', '$\\sqrt{313}$', '$25$'],
          answer: 1,
          explanation: 'Thalész szerint $C$-nél derékszög van, így $BC = \\sqrt{169 - 144} = 5$.',
        },
        {
          question:
            'Egy 8 cm sugarú körben a középponti szög $90^\\circ$. Mekkora a hozzá tartozó körcikk területe?',
          options: [
            '$16\\pi\\ \\text{cm}^2$',
            '$32\\pi\\ \\text{cm}^2$',
            '$64\\pi\\ \\text{cm}^2$',
            '$8\\pi\\ \\text{cm}^2$',
          ],
          answer: 0,
          explanation: 'A $90^\\circ$ a teljes kör negyede: $\\frac{8^2\\pi}{4} = 16\\pi$.',
        },
        {
          question:
            'A kör középpontjától 17 cm-re lévő külső pontból érintőt húzunk a 8 cm sugarú körhöz. Milyen hosszú az érintőszakasz?',
          options: ['$9$ cm', '$15$ cm', '$\\sqrt{353}$ cm', '$25$ cm'],
          answer: 1,
          explanation: 'Az érintő merőleges a sugárra: $\\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$.',
        },
        {
          question: 'Hány radián a $60^\\circ$-os szög?',
          options: [
            '$\\frac{\\pi}{6}$',
            '$\\frac{\\pi}{4}$',
            '$\\frac{\\pi}{3}$',
            '$\\frac{2\\pi}{3}$',
          ],
          answer: 2,
          explanation: '$180^\\circ = \\pi$ radián, ezért $60^\\circ = \\frac{\\pi}{3}$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Négyszög', url: wiki('Négyszög') },
        { label: 'Wikipédia: Kör (geometria)', url: wiki('Kör (geometria)') },
        { label: 'Wikipédia: Thalész-tétel', url: wiki('Thalész-tétel') },
      ],
    },
    {
      id: 'kerulet-kozepponti-latokor-hurnegyszog',
      subject: 'matematika',
      unitId: 'sikgeometria',
      title: 'Kerületi szögek, látókör, húr- és érintőnégyszög',
      level: 'emelt',
      requirement: {
        emelt:
          'A kerületi és középponti szögek tételének és a kerületi szögek tételének bizonyítása és alkalmazása; a látókör fogalma; a húrnégyszögek és az érintőnégyszögek tételének bizonyítása, a tételek megfordítása',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Kerületi és középponti szögek tétele**: egy körív feletti kerületi szög fele az ugyanahhoz az ívhez tartozó középponti szögnek.',
            '**Kerületi szögek tétele**: ugyanazon ívhez tartozó kerületi szögek egyenlők.',
            '**Látókör**: azon pontok halmaza a síkban, ahonnan egy szakasz adott szög alatt látszik; két körív (a szakasz két oldalán). A $90^\\circ$-hoz a Thalész-kör tartozik.',
            '**Húrnégyszög** (csúcsai egy körön vannak): szemközti szögeinek összege $180^\\circ$. A megfordítása is igaz.',
            '**Érintőnégyszög** (oldalai egy kör érintői): szemközti oldalainak összege egyenlő, $a + c = b + d$. A megfordítása is igaz.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kerületi és középponti szög' },
        {
          kind: 'text',
          text: 'A kör egy $AB$ húrja a kört két ívre bontja. Az egyik ív pontjából az $AB$ húr egy szög alatt látszik: ez a **kerületi szög**. Az ugyanahhoz az ívhez tartozó **középponti szög** csúcsa a kör $O$ középpontja. A tétel szerint $\\alpha_{\\text{közp.}} = 2 \\cdot \\alpha_{\\text{ker.}}$.',
        },
        {
          kind: 'text',
          text: '**Bizonyítás (a középpont a szög belsejében).** Legyen a kerületi szög csúcsa $C$, és $\\angle ACO = \\gamma_1$, $\\angle OCB = \\gamma_2$. Az $OAC$ és $OBC$ háromszög egyenlő szárú ($OA = OB = OC = r$), ezért az $O$ csúcsnál a külső szögek $2\\gamma_1$ és $2\\gamma_2$ (a külső szög a két nem mellette lévő belső szög összege). A középponti szög így $2\\gamma_1 + 2\\gamma_2 = 2(\\gamma_1 + \\gamma_2)$, ami a kerületi szög kétszerese. A másik két eset (a középpont a szögszáron vagy a szögön kívül) hasonlóan, szögek összegével, illetve különbségével adódik.',
        },
        {
          kind: 'text',
          text: '**A kerületi szögek tétele** egyszerűen következik: az azonos ívhez tartozó kerületi szögek mind a közös középponti szög felével egyenlők, tehát egymással is.',
        },
        { kind: 'heading', text: 'Látókör' },
        {
          kind: 'text',
          text: 'Egy $AB$ szakasz fölött az az $\\alpha$ szög alatt látszó pontok halmaza két körív, amelyek az $AB$ egyenesére szimmetrikusan helyezkednek el. Ha $\\alpha = 90^\\circ$, a két ív egy kör két félköre: a Thalész-tétel a látókör speciális esete. Szerkesztése: az $AB$ egyik végpontjából $\\alpha$ szöget mérünk fel, és a kör középpontja az $AB$ oldalfelező merőlegesének és az adott szárra állított merőlegesnek a metszéspontja. A kerületi szögek tétele miatt a körív minden pontja ugyanolyan szög alatt látja az $AB$ szakaszt.',
        },
        { kind: 'heading', text: 'Húrnégyszög' },
        {
          kind: 'text',
          text: '**Tétel.** Egy konvex négyszög akkor és csak akkor húrnégyszög (van körülírt köre), ha a szemközti szögeinek összege $180^\\circ$.',
        },
        {
          kind: 'text',
          text: '**Bizonyítás (→).** Az $ABCD$ húrnégyszögben a $B$-nél és $D$-nél lévő szög az $AC$ húr két ívéhez tartozó kerületi szög. Az ívek középponti szögeinek összege $360^\\circ$, ezért a kerületi szögek összege ennek fele: $\\beta + \\delta = 180^\\circ$, és a $360^\\circ$-os szögösszegből $\\alpha + \\gamma = 180^\\circ$. **(←)** Ha $\\beta + \\delta = 180^\\circ$, akkor a $D$ pont az $AC$ szakaszt a $B$-vel ellentétes oldalon $180^\\circ - \\beta$ szög alatt látja. Ez a szög pontosan az $ABC$ háromszög körülírt körének $AC$-nek a $B$-vel ellentétes oldalán lévő ívéhez tartozó kerületi szög, a látókör pontjai pedig csak az ív pontjai, ezért $D$ a körön van.',
        },
        {
          kind: 'warning',
          text: 'Nem minden négyszögnek van köré írható köre. Paralelogrammánál csak akkor, ha téglalap; trapéznél csak akkor, ha egyenlő szárú (húrtrapéz).',
        },
        { kind: 'heading', text: 'Érintőnégyszög' },
        {
          kind: 'text',
          text: '**Tétel.** Egy konvex négyszögnek akkor és csak akkor van beírt köre (érintőnégyszög), ha a szemközti oldalainak összege egyenlő: $a + c = b + d$.',
        },
        {
          kind: 'text',
          text: '**Bizonyítás (→).** Az oldalak érintési pontjai a csúcsokat négy érintőszakasz-párra osztják, mindegyik csúcsból két egyenlő érintőszakasz indul: $x$, $y$, $z$, $w$. Ekkor $a = x + y$, $b = y + z$, $c = z + w$, $d = w + x$, és $a + c = x + y + z + w = b + d$. A megfordítás hasonló, de hosszabb.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Az $ABCD$ húrnégyszögben $\\alpha = 75^\\circ$ és $\\beta = 100^\\circ$. Mekkora a másik két szög? Egy érintőnégyszög három oldala 7, 9 és 11 egység (ebben a sorrendben egymás után). Mekkora a negyedik oldala? Mekkora a kerületi szög, ha a hozzá tartozó középponti szög $140^\\circ$?',
          solution:
            'Húrnégyszögben a szemközti szögek összege $180^\\circ$: $\\gamma = 180^\\circ - 75^\\circ = 105^\\circ$ és $\\delta = 180^\\circ - 100^\\circ = 80^\\circ$.\n\nÉrintőnégyszögben $a + c = b + d$, azaz $7 + 11 = 9 + d$, ebből $d = 9$.\n\nA kerületi szög a középponti szög fele: $70^\\circ$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szint II. rész: összetett geometriai feladat, amelyben húr- vagy érintőnégyszögről kell belátni, hogy létezik körülírt vagy beírt köre, vagy szöget kell kiszámolni kerületi szög tétellel.',
            'Szóbeli: a kerületi és középponti szögek tételének, a húrnégyszög-tételnek kimondása és bizonyítása, megfordítással.',
            'Látókör: pont keresése, ahonnan két tereptárgy adott szög alatt látszik.',
          ],
        },
        {
          kind: 'warning',
          text: 'A húrnégyszög tételénél a szemközti szögekről van szó ($\\alpha + \\gamma$, $\\beta + \\delta$), nem a szomszédosakról. Az érintőnégyszögnél a szemközti **oldalak** összege egyenlő, nem a szomszédosaké.',
        },
        {
          kind: 'tip',
          text: 'Ha azt kéri a feladat, hogy igazold, hogy a négyszög húrnégyszög, számold ki a szemközti szögek összegét, és hivatkozz a tétel megfordítására. A tétel kimondása és a feltétel ellenőrzése külön pontot ér.',
        },
      ],
      topicMatch: ['húrnégyszög', 'érintőnégyszög', 'bicentrikus négyszög'],
      quiz: [
        {
          question:
            'Egy körben egy ív középponti szöge $140^\\circ$. Mekkora a hozzá tartozó kerületi szög?',
          options: ['$280^\\circ$', '$140^\\circ$', '$70^\\circ$', '$35^\\circ$'],
          answer: 2,
          explanation: 'A kerületi szög a középponti szög fele.',
          emelt: true,
        },
        {
          question: 'Egy húrnégyszög egyik szöge $65^\\circ$. Mekkora a szemközti szöge?',
          options: ['$65^\\circ$', '$115^\\circ$', '$25^\\circ$', '$295^\\circ$'],
          answer: 1,
          explanation:
            'A szemközti szögek összege $180^\\circ$: $180^\\circ - 65^\\circ = 115^\\circ$.',
          emelt: true,
        },
        {
          question:
            'Egy érintőnégyszög egymás utáni oldalai $a = 8$, $b = 5$, $c = 6$ és $d$. Mennyi $d$?',
          options: ['$3$', '$9$', '$7$', '$19$'],
          answer: 1,
          explanation: '$a + c = b + d$, azaz $14 = 5 + d$, tehát $d = 9$.',
          emelt: true,
        },
        {
          question: 'Melyik négyszögnek nem feltétlenül van köré írt köre?',
          options: ['téglalap', 'négyzet', 'egyenlő szárú trapéz', 'paralelogramma'],
          answer: 3,
          explanation:
            'Paralelogrammánál a szemközti szögek egyenlők, összegük csak akkor $180^\\circ$, ha derékszögűek, vagyis téglalap.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kerületi szög', url: wiki('Kerületi szög') },
        { label: 'Wikipédia: Húrnégyszög', url: wiki('Húrnégyszög') },
        { label: 'Wikipédia: Érintőnégyszög', url: wiki('Érintőnégyszög') },
      ],
    },
    {
      id: 'egybevagosag-hasonlosag',
      subject: 'matematika',
      unitId: 'sikgeometria',
      title: 'Egybevágóság és hasonlóság',
      level: 'both',
      requirement: {
        kozep:
          'Egybevágósági transzformációk (eltolás, tengelyes és középpontos tükrözés, pont körüli forgatás) leírása és tulajdonságai; háromszögek egybevágósági alapesetei; szimmetriák; középpontos hasonlóság, nagyítás, kicsinyítés; háromszögek hasonlósági alapesetei; hasonló síkidomok területének, testek felszínének és térfogatának aránya',
        emelt:
          'Az egybevágósági transzformációk pontos definíciója, síkidomok és sokszögek egybevágósága, térbeli példák; a hasonlósági transzformáció definíciója; párhuzamos szelők tétele és megfordítása, párhuzamos szelőszakaszok tétele; belső szögfelező tétel; merőleges vetítés; a transzformációk és a függvények kapcsolata',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Egybevágósági transzformációk**: eltolás, tengelyes tükrözés, középpontos tükrözés, pont körüli forgatás. Távolságtartók: az alakzat és a képe egybevágó.',
            '**Háromszögek egybevágósági alapesetei**: három oldal (SSS); két oldal és a közbezárt szög (SAS); két oldal és a nagyobbikkal szemközti szög; egy oldal és a rajta fekvő két szög.',
            '**Középpontos hasonlóság** ($O$ középpont, $\\lambda$ arány): a $P$ pont képe az $OP$ egyenesen lévő $P_1$, ahol $OP_1 = |\\lambda| \\cdot OP$ (pozitív $\\lambda$-nál ugyanabban az irányban). Szögtartó, a szakaszok hosszát $|\\lambda|$-szorosára változtatja.',
            '**Háromszögek hasonlósági alapesetei**: két szög egyenlő; három oldal aránya egyenlő; két oldal aránya és a közbezárt szög egyenlő; két oldal aránya és a nagyobbikkal szemközti szög egyenlő.',
            'Ha a hasonlóság aránya $k$, akkor a **területek aránya $k^2$**, a felszíneké $k^2$, a **térfogatoké $k^3$**.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            '**Párhuzamos szelők tétele**: szög szárait párhuzamos egyenesek metszik, a szárakon keletkező megfelelő szakaszok aránya egyenlő. A megfordítása is igaz.',
            '**Belső szögfelező tétel**: a szögfelező a szemközti oldalt a szomszédos oldalak arányában osztja.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Egybevágósági transzformációk' },
        {
          kind: 'compare',
          columns: ['Leírás', 'Tulajdonság'],
          rows: [
            {
              label: 'eltolás',
              cells: [
                'adott vektorral',
                'minden pontot ugyanazzal a vektorral mozgat; az egyenes képe vele párhuzamos',
              ],
            },
            {
              label: 'tengelyes tükrözés',
              cells: [
                'egy $t$ tengelyre',
                'a pont és a képe a tengelyre merőleges egyenesen, a tengelytől egyenlő távolságra van; megfordítja a körüljárást',
              ],
            },
            {
              label: 'középpontos tükrözés',
              cells: [
                'egy $O$ pontra',
                'a pont képe $O$-ra tükrös; $180^\\circ$-os forgatás; az egyenes képe vele párhuzamos',
              ],
            },
            {
              label: 'pont körüli forgatás',
              cells: [
                '$O$ körül $\\varphi$ szöggel',
                'a pont és $O$ távolsága nem változik, a szög $\\varphi$; egyetlen fixpontja $O$',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Mindegyik **távolságtartó** és **szögtartó**, az egyenes képe egyenes, a szakasz képe vele egyenlő hosszú szakasz, a háromszög képe vele egybevágó háromszög. Konkrét feladatban a transzformációt koordinátákkal vagy szerkesztéssel kell végrehajtani: a $(3; 2)$ pont tükörképe az $y$ tengelyre $(-3; 2)$, az origóra $(-3; -2)$.',
        },
        {
          kind: 'text',
          text: '**Szimmetriák.** Egy alakzat **tengelyesen szimmetrikus**, ha van olyan tengely, amelyre tükrözve önmagába megy át (egyenlő szárú háromszög, deltoid, négyzet: 4 tengely), **középpontosan szimmetrikus**, ha van olyan pont, amelyre tükrözve önmagába megy át (paralelogramma, kör), és **forgásszimmetrikus**, ha egy szögű forgatás önmagába viszi (szabályos háromszög: $120^\\circ$).',
        },
        { kind: 'heading', text: 'Háromszögek egybevágósága' },
        {
          kind: 'text',
          text: 'Két háromszög egybevágó, ha az alábbiak bármelyike teljesül:',
        },
        {
          kind: 'keypoints',
          items: [
            'a három oldaluk páronként egyenlő;',
            'két oldaluk és a közbezárt szögük páronként egyenlő;',
            'két oldaluk és a nagyobbikkal szemközti szögük páronként egyenlő;',
            'egy oldaluk és a rajta fekvő két szögük páronként egyenlő (két szög megadja a harmadikat, ezért elég bármely oldal és két szög).',
          ],
        },
        {
          kind: 'warning',
          text: 'Két oldal és a **kisebbikkel** szemközti szög nem elég: ilyenkor két különböző háromszög is lehet.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** a definíciókat pontosan kell tudni (például a tengelyes tükrözés: a $P$ képe $P_1$ úgy, hogy a $t$ a $PP_1$ szakasz felező merőlegese, a tengely pontjai fixek). A **sokszögek** akkor egybevágók, ha megfelelő oldalaik és megfelelő szögeik páronként egyenlők. Térbeli egybevágóság: síkra tükrözés, egyenes körüli forgatás, vektorral eltolás. A transzformációk a függvényeknél is megjelennek: $f(x) + c$ eltolás, $-f(x)$ tengelyes tükrözés az $x$ tengelyre (lásd a függvények egységet).',
        },
        { kind: 'heading', text: 'Hasonlóság' },
        {
          kind: 'text',
          text: 'A **középpontos hasonlóság** (nagyítás, kicsinyítés) az $O$ pontból a $P$ ponthoz az $OP$ egyenes $P_1$ pontját rendeli úgy, hogy $\\frac{OP_1}{OP} = |\\lambda|$ (negatív $\\lambda$-nál $O$ ellentétes oldalán). Ha $|\\lambda| > 1$, nagyítás, ha $0 < |\\lambda| < 1$, kicsinyítés. Az egyenes képe vele párhuzamos egyenes (vagy önmaga), a szög nem változik. Két alakzat **hasonló**, ha az egyik a másiknak egy középpontos hasonlósággal és egybevágósággal kapott képe; ilyenkor a megfelelő szakaszok aránya állandó, ez a hasonlóság aránya.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **hasonlósági transzformáció** definíciója: olyan síkbeli (térbeli) leképezés, amely minden távolságot ugyanannyiszorosára változtat. Minden hasonlósági transzformáció egy középpontos nagyítás és egy egybevágósági transzformáció egymás utánja.',
        },
        {
          kind: 'formula',
          tex: '\\frac{T_2}{T_1} = k^2 \\qquad \\frac{A_2}{A_1} = k^2 \\qquad \\frac{V_2}{V_1} = k^3',
          caption:
            'hasonló síkidomok területe, hasonló testek felszíne és térfogata, ha a hasonlóság aránya $k$',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy 3, 4, 5 oldalú háromszöggel hasonló háromszög kerülete 36. Mekkorák az oldalai és mi a két háromszög területének aránya? Egy 1,8 m magas ember árnyéka 2,4 m, a fa árnyéka ugyanekkor 14 m. Milyen magas a fa? Egy telek térképen 12 cm², a térkép léptéke 1:2000. Hány m² a valódi terület?',
          solution:
            'Az eredeti kerület $12$, a hasonlóság aránya $k = \\frac{36}{12} = 3$, az oldalak $9$, $12$, $15$. A területek aránya $k^2 = 9$ (a területek $6$ és $54$).\n\nA fa és az ember, valamint az árnyékaik hasonló derékszögű háromszögeket alkotnak: $\\frac{m}{14} = \\frac{1{,}8}{2{,}4}$, így $m = 10{,}5$ m.\n\nA lépték 1:2000, ezért a hosszak aránya 2000, a területek aránya $2000^2 = 4\\,000\\,000$. A valódi terület $12 \\cdot 4\\,000\\,000 = 48\\,000\\,000\\ \\text{cm}^2 = 4800\\ \\text{m}^2$.',
        },
        { kind: 'heading', text: 'Párhuzamos szelők és szögfelező tétel', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: '**Párhuzamos szelők tétele.** Ha egy szög szárait egy másik, párhuzamos egyenespár metszi ($A$, $A_1$ az egyik, $B$, $B_1$ a másik száron, $AB \\parallel A_1B_1$, a csúcs $O$), akkor $\\frac{OA}{OA_1} = \\frac{OB}{OB_1}$, és ugyanez a másik szakaszra is. A **megfordítás**: ha a szárakon a megfelelő szakaszok aránya egyenlő, akkor az egyenesek párhuzamosak. A **párhuzamos szelőszakaszok tétele**: ha két száron párhuzamos egyenesek metszenek, akkor a szelők közötti szakaszok aránya megegyezik a csúcstól mért szakaszok arányával: $\\frac{AB}{A_1B_1} = \\frac{OA}{OA_1}$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Belső szögfelező tétel.** Az $ABC$ háromszög $C$-ből induló belső szögfelezője az $AB$ oldalt a $D$ pontban metszi, akkor $\\frac{AD}{DB} = \\frac{AC}{BC}$. **Bizonyítás:** húzzunk a $B$-n át a $CD$-vel párhuzamost, ez az $AC$ egyenesét $E$-ben metszi. Az $\\angle BEC$ egyállású szög a $CD$ szögfelezővel képzett $\\frac{\\gamma}{2}$-vel, az $\\angle EBC$ pedig váltószög, szintén $\\frac{\\gamma}{2}$. A $CEB$ háromszög tehát egyenlő szárú, $CE = CB$. A párhuzamos szelők tétele szerint $\\frac{AD}{DB} = \\frac{AC}{CE} = \\frac{AC}{CB}$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Merőleges vetítés.** Egy pont merőleges vetülete egy egyenesen (síkon) a pontból az egyenesre (síkra) bocsátott merőleges talppontja. Nem egybevágóság és nem hasonlóság: a vetítés nem tartja a távolságokat (a vetített szakasz legfeljebb olyan hosszú, mint az eredeti, és csak a vetítés irányára merőleges szakasz hossza marad meg). Alkalmazás: egyenes és sík hajlásszöge, testek árnyéka, vetületi ábrák.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: szakasz, háromszög vagy pont képe adott transzformációnál; hasonló háromszögek ismeretlen oldala; terület vagy térfogat aránya adott nagyítási aránynál (például egy modell skálája).',
            'II. rész: hasonló háromszögekre épülő szöveges feladat (árnyék, magasság, létra, tér), vagy bizonyítás egybevágósági vagy hasonlósági alapesettel.',
            'Szóbeli: egybevágósági és hasonlósági alapesetek; hasonló síkidomok területének aránya.',
            'Emelt: a belső szögfelező tétel bizonyítása és alkalmazása, párhuzamos szelők tétele.',
          ],
        },
        {
          kind: 'warning',
          text: 'Nagyítás után az **arány négyzete** adja a területet és az **arány köbe** a térfogatot. Ha kétszeres a lineáris méret, a terület négyszeres, a térfogat nyolcszoros. Gyakran az arányt és a négyzetét/köbét keverik össze.',
        },
        {
          kind: 'tip',
          text: 'Hasonlóságnál mindig állítsd fel, melyik csúcs melyiknek felel meg ($ABC \\sim A_1B_1C_1$), és csak a megfelelő oldalakat osszad egymással. Írd le, melyik alapesettel igazolod a hasonlóságot (például két szög egyenlő).',
        },
      ],
      topicMatch: ['hasonló', 'hasonlóság', 'párhuzamos szelők', 'szimmetria', 'méretarány'],
      quiz: [
        {
          question: 'Melyik NEM elég két háromszög egybevágóságához?',
          options: [
            'három oldal páronként egyenlő',
            'két oldal és a közbezárt szög páronként egyenlő',
            'egy oldal és a rajta fekvő két szög páronként egyenlő',
            'két oldal és a kisebbikkel szemközti szög páronként egyenlő',
          ],
          answer: 3,
          explanation:
            'A kisebb oldallal szemközti szög esetén kétféle háromszög is létezhet, ezért ez nem elég.',
        },
        {
          question:
            'Két hasonló háromszög hasonlóságának aránya 2,5. Hányszoros a nagyobb háromszög területe?',
          options: ['2,5', '5', '6,25', '15,625'],
          answer: 2,
          explanation: 'A területek aránya az arány négyzete: $2{,}5^2 = 6{,}25$.',
        },
        {
          question: 'Mi a $P(4; -1)$ pont képe az origó körüli $180^\\circ$-os forgatásnál?',
          options: ['$(-4; 1)$', '$(4; 1)$', '$(-4; -1)$', '$(1; 4)$'],
          answer: 0,
          explanation:
            'A $180^\\circ$-os forgatás az origóra való középpontos tükrözés: mindkét koordináta előjele megváltozik.',
        },
        {
          question: 'Egy kocka élét megháromszorozzuk. Hányszorosára nő a térfogata?',
          options: ['3', '9', '27', '81'],
          answer: 2,
          explanation: 'A térfogatok aránya az arány köbe: $3^3 = 27$.',
        },
        {
          question:
            'Az $ABC$ háromszögben $AC = 6$, $BC = 9$, a $C$-ből induló szögfelező az $AB = 10$ oldalt $D$-ben metszi. Mekkora az $AD$?',
          options: ['$4$', '$6$', '$5$', '$3{,}6$'],
          answer: 0,
          explanation:
            'Belső szögfelező tétel: $\\frac{AD}{DB} = \\frac{6}{9} = \\frac{2}{3}$, ezért $AD = \\frac{2}{5} \\cdot 10 = 4$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Egybevágóság', url: wiki('Egybevágóság (geometria)') },
        { label: 'Wikipédia: Hasonlóság', url: wiki('Hasonlóság (geometria)') },
        { label: 'Wikipédia: Párhuzamos szelők tétele', url: wiki('Párhuzamos szelők tétele') },
      ],
    },
    {
      id: 'kerulet-terulet-sikidomok',
      subject: 'matematika',
      unitId: 'sikgeometria',
      title: 'Kerület és terület',
      level: 'both',
      requirement: {
        kozep:
          'A kerület és a terület szemléletes fogalma; a háromszög területe a magassággal és két oldal és a közbezárt szög szinuszával is; nevezetes négyszögek, szabályos sokszögek, kör, körcikk, körszelet és körgyűrű kerülete és területe',
        emelt:
          'A háromszög területképleteinek bizonyítása; a $t = sr$ összefüggés (bizonyítással) és a Héron-képlet; nevezetes négyszögek és szabályos sokszögek területképleteinek bizonyítása',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Háromszög**: $t = \\frac{a \\cdot m_a}{2} = \\frac{ab\\sin\\gamma}{2}$.',
            '**Téglalap**: $t = ab$; **négyzet**: $t = a^2$; **paralelogramma**: $t = a \\cdot m_a$; **rombusz, deltoid**: $t = \\frac{e \\cdot f}{2}$ (átlók); **trapéz**: $t = \\frac{a + c}{2} \\cdot m$.',
            '**Kör**: $K = 2\\pi r$, $T = r^2\\pi$. **Körcikk** ($\\alpha$ fokban): $i = \\frac{r\\pi\\alpha}{180^\\circ}$, $t = \\frac{r^2\\pi\\alpha}{360^\\circ}$. **Körgyűrű**: $T = \\pi(R^2 - r^2)$.',
            '**Körszelet**: a körcikk és az $\\alpha < 180^\\circ$ esetén a hozzá tartozó egyenlő szárú háromszög területének különbsége.',
            '**Szabályos sokszög**: $n$ egybevágó egyenlő szárú háromszögre bontható a középpontból.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            '$t = s \\cdot r$ ($s$ a félkerület, $r$ a beírt kör sugara).',
            '**Héron-képlet**: $t = \\sqrt{s(s-a)(s-b)(s-c)}$.',
            'A területképletek bizonyítása (átdarabolással, felbontással).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Alapfogalmak' },
        {
          kind: 'text',
          text: 'A **kerület** a síkidom határvonalának hossza, a **terület** a síkidom „nagysága”: hány egységnégyzet fedi le. Egybevágó síkidomok területe és kerülete egyenlő, a terület összeadódik (ha az alakzatot részekre bontjuk). Hasonló síkidomoknál a kerületek aránya $k$, a területeké $k^2$.',
        },
        { kind: 'heading', text: 'Háromszög' },
        {
          kind: 'formula',
          tex: 't = \\frac{a \\cdot m_a}{2} = \\frac{ab\\sin\\gamma}{2}',
          caption: 'a második az $a$, $b$ oldal és a közbezárt $\\gamma$ szög ismeretében',
        },
        {
          kind: 'text',
          text: 'Az $m_a$ az $a$ oldalhoz tartozó magasság; hegyesszögű, derékszögű és tompaszögű háromszögnél is érvényes. A szinuszos képlet ($m_a = b\\sin\\gamma$) a trigonometria egységben szerepel részletesebben; itt az alkalmazása fontos: ha két oldal és a közbezárt szög adott, a terület rögtön kiszámolható. Mivel $\\sin\\gamma = \\sin(180^\\circ - \\gamma)$, a $30^\\circ$ és a $150^\\circ$ ugyanazt a területet adja.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A beírt kör és a Héron-képlet (emelt).** Ha a háromszög beírt körének középpontját összekötjük a csúcsokkal, három háromszögre bomlik, amelyek magassága $r$. Így $t = \\frac{ar}{2} + \\frac{br}{2} + \\frac{cr}{2} = s \\cdot r$, ahol $s = \\frac{a+b+c}{2}$. A **Héron-képlet** szerint, ha az oldalak $a$, $b$, $c$: $t = \\sqrt{s(s-a)(s-b)(s-c)}$. Szükség esetén a beírt kör sugara $r = \\frac{t}{s}$.',
        },
        { kind: 'heading', text: 'Négyszögek' },
        {
          kind: 'compare',
          columns: ['Terület', 'Megjegyzés'],
          rows: [
            { label: 'téglalap', cells: ['$a \\cdot b$', 'kerület: $2(a + b)$'] },
            { label: 'négyzet', cells: ['$a^2$', 'kerület: $4a$'] },
            {
              label: 'paralelogramma',
              cells: ['$a \\cdot m_a = ab\\sin\\gamma$', 'kerület: $2(a + b)$'],
            },
            {
              label: 'rombusz',
              cells: ['$a \\cdot m_a = \\frac{e \\cdot f}{2}$', 'kerület: $4a$'],
            },
            { label: 'deltoid', cells: ['$\\frac{e \\cdot f}{2}$', 'az átlók merőlegesek'] },
            {
              label: 'trapéz',
              cells: ['$\\frac{a + c}{2} \\cdot m$', 'a középvonal $\\frac{a+c}{2}$'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Bizonyítások (emelt).** *Paralelogramma:* a háromszögrészt levágva és a másik oldalra illesztve téglalap lesz, így $t = a \\cdot m$. *Trapéz:* két egybevágó trapézt paralelogrammává illesztve $2t = (a+c) \\cdot m$. *Rombusz, deltoid:* az átlók négy derékszögű háromszögre bontják, ezek területe együtt $\\frac{e \\cdot f}{2}$.',
        },
        { kind: 'heading', text: 'Szabályos sokszög' },
        {
          kind: 'text',
          text: 'A szabályos $n$-szöget a középpontból $n$ egybevágó egyenlő szárú háromszögre bontjuk. Ha az oldal $a$, az oldalhoz tartozó magasság (apotéma) $m$, akkor a terület $t = n \\cdot \\frac{a \\cdot m}{2}$, a kerület $n \\cdot a$. Szabályos hatszög esetén a háromszögek szabályosak, ezért $t = 6 \\cdot \\frac{a^2\\sqrt{3}}{4} = \\frac{3\\sqrt{3}}{2}a^2$. Például $a = 6$ esetén $t = 54\\sqrt{3} \\approx 93{,}53$, a kerület $36$.',
        },
        { kind: 'heading', text: 'Kör és részei' },
        {
          kind: 'keypoints',
          items: [
            '**Kör**: $K = 2\\pi r$, $T = \\pi r^2$.',
            '**Körcikk**: $i = \\frac{2\\pi r\\alpha}{360^\\circ}$, $t = \\frac{\\pi r^2\\alpha}{360^\\circ}$; kerülete $2r + i$.',
            '**Körszelet**: területe a körcikk és a háromszög különbsége ($\\alpha < 180^\\circ$ esetén), kerülete az ív és a húr hosszának összege.',
            '**Körgyűrű**: területe $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$, kerülete $2\\pi R + 2\\pi r$.',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példák',
          problem:
            '1) Egy háromszög két oldala 8 és 11, a közbezárt szög $30^\\circ$. Mekkora a területe? 2) Egy egyenlő szárú trapéz alapjai 12 és 8, szárai 5. Mekkora a területe? 3) Egy 10 sugarú kör $60^\\circ$-os középponti szögéhez tartozó körszelet területe és kerülete? 4) Körgyűrű, $R = 7$, $r = 4$: területe?',
          solution:
            '1) $t = \\frac{8 \\cdot 11 \\cdot \\sin 30^\\circ}{2} = 22$.\n\n2) A magasságot kiszámoljuk: az alapok különbségének fele $\\frac{12 - 8}{2} = 2$, ezért $m = \\sqrt{5^2 - 2^2} = \\sqrt{21} \\approx 4{,}58$. A terület $\\frac{12 + 8}{2} \\cdot \\sqrt{21} = 10\\sqrt{21} \\approx 45{,}83$.\n\n3) A körcikk területe $\\frac{100\\pi \\cdot 60}{360} \\approx 52{,}36$. A kapott háromszög szabályos (két sugár és a $60^\\circ$), területe $\\frac{10^2\\sqrt{3}}{4} \\approx 43{,}30$. A körszelet területe $52{,}36 - 43{,}30 \\approx 9{,}06$. Kerülete: az ív $\\frac{2\\pi \\cdot 10}{6} \\approx 10{,}47$ plusz a húr $10$, összesen $\\approx 20{,}47$.\n\n4) $\\pi(49 - 16) = 33\\pi \\approx 103{,}67$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: Héron-képlet és beírt kör',
          problem:
            'Egy háromszög oldalai 13, 14 és 15. Mekkora a területe, a beírt köre sugara és a 14-es oldalhoz tartozó magasság?',
          solution:
            '$s = \\frac{13 + 14 + 15}{2} = 21$. Héron-képlettel $t = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$. A beírt kör sugara $r = \\frac{t}{s} = \\frac{84}{21} = 4$. A 14-es oldalhoz tartozó magasság: $\\frac{14 \\cdot m}{2} = 84$, így $m = 12$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: egy síkidom (téglalap, trapéz, körcikk, körgyűrű) területe vagy kerülete adott adatokból; hiányzó adat visszaszámolása a területből.',
            'II. rész: összetett alakzat (négyzetbe írt kör, köröket tartalmazó alakzat, kerítés, térkép, padlólap) területe vagy kerülete, gyakran a Pitagorasz-tétellel, hasonlósággal vagy trigonometriával együtt; a maradék rész (kivágás utáni terület).',
            'Szóbeli: a háromszög és a nevezetes négyszögek területképletének levezetése.',
            'Emelt: $t = sr$, Héron-képlet, bizonyítások, szélsőérték-feladat (adott kerületű téglalap maximális területe).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: kerületet és területet összekeverni (mértékegység: m, illetve m²); a trapéz magasságát az oldallal (szárral) összecserélni; a körcikknél a szöget fokban és radiánban keverni; a körszeletnél elfelejteni a háromszöget levonni. A végeredményt mindig mértékegységgel add meg.',
        },
        {
          kind: 'tip',
          text: 'Összetett alakzatnál bontsd részekre: nagy alakzat mínusz kivágott rész, vagy elemi részek összege. Írd fel, melyik részek területét számolod. A javítókulcs a lépések felírásáért is pontot ad, nem csak a végeredményért.',
        },
      ],
      topicMatch: [
        '=terület',
        '=kerület',
        'terület és kerület',
        'területszámítás',
        'területarány',
        '=területképlet',
        'héron',
      ],
      quiz: [
        {
          question:
            'Egy háromszög két oldala 10 és 14, a közbezárt szög $30^\\circ$. Mekkora a területe?',
          options: ['$70$', '$35$', '$140$', '$60{,}6$'],
          answer: 1,
          explanation:
            '$\\frac{10 \\cdot 14 \\cdot \\sin 30^\\circ}{2} = \\frac{140 \\cdot 0{,}5}{2} = 35$. Nem a szorzat fele, hanem a szinusszal szorzott szorzat fele adja a területet.',
        },
        {
          question: 'Egy rombusz átlói 12 és 16 cm. Mekkora a területe?',
          options: [
            '$192\\ \\text{cm}^2$',
            '$96\\ \\text{cm}^2$',
            '$56\\ \\text{cm}^2$',
            '$48\\ \\text{cm}^2$',
          ],
          answer: 1,
          explanation: '$t = \\frac{e \\cdot f}{2} = \\frac{12 \\cdot 16}{2} = 96$.',
        },
        {
          question: 'Egy trapéz alapjai 9 és 5, magassága 6. Mekkora a területe?',
          options: ['$84$', '$42$', '$270$', '$30$'],
          answer: 1,
          explanation: '$\\frac{9 + 5}{2} \\cdot 6 = 42$.',
        },
        {
          question: 'Egy körgyűrű külső sugara 7, belső sugara 4. Mekkora a területe?',
          options: ['$33\\pi$', '$9\\pi$', '$65\\pi$', '$3\\pi$'],
          answer: 0,
          explanation: '$\\pi(7^2 - 4^2) = \\pi(49 - 16) = 33\\pi$.',
        },
        {
          question: 'Mennyi a 13, 14, 15 oldalú háromszög területe?',
          options: ['$84$', '$91$', '$105$', '$42$'],
          answer: 0,
          explanation:
            '$s = 21$, Héron-képlettel $t = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Terület (geometria)', url: wiki('Terület (geometria)') },
        { label: 'Wikipédia: Háromszög területe', url: wiki('Háromszög területe') },
        { label: 'Wikipédia: Héron-képlet', url: wiki('Héron-képlet') },
      ],
    },
  ],
};

export default unit;
