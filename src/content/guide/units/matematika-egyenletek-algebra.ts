import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics: 2.6 Betűkifejezések, 2.7 Arányosság, 2.8 Egyenletek, 2.9 Középértékek. */
const unit: GuideUnit = {
  id: 'egyenletek-algebra',
  subject: 'matematika',
  order: 22,
  title: 'Algebra, egyenletek, egyenlőtlenségek',
  requirementRef:
    '2.6 Betűkifejezések; 2.7 Arányosság (százalékszámítás); 2.8 Egyenletek, egyenletrendszerek, egyenlőtlenségek, egyenlőtlenség-rendszerek; 2.9 Középértékek, egyenlőtlenségek',
  intro:
    'A nevezetes azonosságoktól és a százalékszámítástól az elsőfokú, másodfokú, gyökös és abszolútértékes egyenleteken, az egyenlőtlenségeken és a szöveges feladatokon át az emelt szintű középérték-egyenlőtlenségekig. Az exponenciális, logaritmusos és trigonometrikus egyenletek másik egységben szerepelnek.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.6, 2.7, 2.8, 2.9). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'betukifejezesek-azonossagok',
      subject: 'matematika',
      unitId: 'egyenletek-algebra',
      title: 'Betűkifejezések és nevezetes azonosságok',
      level: 'both',
      requirement: {
        kozep:
          'Algebrai kifejezésekkel egyszerű műveletek (összevonás, szorzás, osztás, szorzattá alakítás kiemeléssel és nevezetes azonosságokkal); az (a + b)², (a − b)², a² − b² kifejtése és szorzattá alakítása',
        emelt:
          'A polinom fokszáma és fokszám szerint rendezett alakja; az aⁿ − bⁿ és az a²ⁿ⁺¹ + b²ⁿ⁺¹ kifejezés szorzattá alakítása',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Összevonni csak **egynemű** tagokat lehet: $3x^2 + 5x^2 = 8x^2$, de $3x^2 + 5x$ nem vonható össze.',
            '**Kiemelés**: $6x^2 - 9x = 3x(2x - 3)$. Mindig a legnagyobb közös tényezőt emeld ki.',
            'Három nevezetes azonosság: $(a+b)^2$, $(a-b)^2$ és $a^2 - b^2$.',
            'Törtes kifejezésnél előbb szorzattá alakítunk, aztán egyszerűsítünk, és megadjuk, mely $x$-ekre nincs értelmezve (a nevező nem lehet 0).',
          ],
        },
        { kind: 'formula', tex: '(a+b)^2 = a^2 + 2ab + b^2' },
        { kind: 'formula', tex: '(a-b)^2 = a^2 - 2ab + b^2' },
        { kind: 'formula', tex: 'a^2 - b^2 = (a-b)(a+b)' },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            'A **polinom foka** a legnagyobb kitevő: $3x^4 - 2x + 5$ negyedfokú.',
            'Általánosabb szorzattá alakítás: $a^n - b^n$ és páratlan kitevőnél $a^{2n+1} + b^{2n+1}$.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Műveletek betűkifejezésekkel' },
        {
          kind: 'text',
          text: 'A betűkifejezés számokat és betűket tartalmazó kifejezés, a betű helyére számot helyettesítve számot kapunk. Zárójelet felbontva minden taggal végig kell szorozni, és a mínusz előjel az egész zárójel előjelét megfordítja: $-(2x - 3) = -2x + 3$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: nevezetes azonosság',
          problem: 'Egyszerűsítse: $(2x + 3)^2 - (2x - 3)^2$!',
          solution:
            'Kifejtve: $(4x^2 + 12x + 9) - (4x^2 - 12x + 9) = 24x$.\n\nGyorsabb út: $a^2 - b^2$ azonosságával, $a = 2x + 3$, $b = 2x - 3$: $(a-b)(a+b) = 6 \\cdot 4x = 24x$.',
        },
        { kind: 'heading', text: 'Szorzattá alakítás' },
        {
          kind: 'text',
          text: 'Két lépésben gondolkodj: először **kiemelés** (van-e közös tényező?), aztán **nevezetes azonosság**. Például $3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: törtes kifejezés',
          problem:
            'Egyszerűsítse a $\\frac{x^2 - 9}{x^2 - 6x + 9}$ törtet, és adja meg, mikor értelmezett!',
          solution:
            'A számláló: $x^2 - 9 = (x - 3)(x + 3)$. A nevező teljes négyzet: $x^2 - 6x + 9 = (x - 3)^2$.\n\nEgyszerűsítve: $\\frac{(x-3)(x+3)}{(x-3)^2} = \\frac{x+3}{x-3}$.\n\nA kifejezés eredetileg is, egyszerűsítve is csak $x \\ne 3$ esetén értelmezett.',
        },
        {
          kind: 'text',
          text: 'Képletet is gyakran kell átrendezni: ha $T = \\frac{a + c}{2} \\cdot m$, akkor $a = \\frac{2T}{m} - c$. Ilyenkor ugyanúgy járunk el, mint az egyenletnél: ugyanazt tesszük az egyenlőség mindkét oldalával.',
        },
        { kind: 'heading', text: 'Magasabb fokú azonosságok', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'A **polinom foka** a nem nulla együtthatós tagok közül a legnagyobb kitevő, a **fokszám szerint rendezett alak** a csökkenő kitevők szerinti felírás: $5x^3 - x^2 + 4$.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Szorzattá alakítás magasabb hatványokkal',
          columns: ['Kifejezés', 'Szorzatalak'],
          rows: [
            {
              label: '$a^3 - b^3$',
              cells: ['$(a - b)(a^2 + ab + b^2)$', 'általában: $a^n - b^n$'],
            },
            { label: '$a^3 + b^3$', cells: ['$(a + b)(a^2 - ab + b^2)$', 'páratlan kitevőnél'] },
            {
              label: '$a^n - b^n$',
              cells: ['$(a - b)(a^{n-1} + a^{n-2}b + \\dots + b^{n-1})$', 'minden $n$-re'],
            },
            {
              label: '$a^{2n+1} + b^{2n+1}$',
              cells: [
                '$(a + b)(a^{2n} - a^{2n-1}b + \\dots + b^{2n})$',
                'a tagok előjele váltakozik',
              ],
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa',
          problem: 'Alakítsa szorzattá: $x^5 + 32$, illetve $x^4 - 16$!',
          solution:
            '$x^5 + 32 = x^5 + 2^5 = (x + 2)(x^4 - 2x^3 + 4x^2 - 8x + 16)$.\n\n$x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$. Az utolsó tényező valós számok körében nem bontható tovább.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: „Alakítsa szorzattá…”, „Egyszerűsítse a törtet…”, kifejezés értékének kiszámítása behelyettesítéssel.',
            'II. rész: szinte minden feladatban előkerül, mert az egyenletek, a függvények és a geometriai képletek átalakítása is ezt használja.',
            'Emelt szint: oszthatósági vagy bizonyítási feladat, ahol a szorzattá alakítás adja az ötletet.',
          ],
        },
        {
          kind: 'example',
          title: 'Minta I. rész feladat',
          problem:
            'Egyszerűsítse a $\\frac{x^2 - 25}{x^2 + 5x}$ törtet ($x \\ne 0$ és $x \\ne -5$)!',
          solution:
            'Számláló: $(x - 5)(x + 5)$. Nevező: $x(x + 5)$.\n\nEgyszerűsítve $(x + 5)$-tel: $\\frac{x - 5}{x}$.',
        },
        {
          kind: 'warning',
          text: 'Leggyakoribb hibák: $(a + b)^2 = a^2 + b^2$ (hiányzik a $2ab$); kiemelésnél elveszik egy tag vagy rossz az előjel; **tagot** egyszerűsítenek (például $\\frac{x + 3}{3}$-ból $x + 1$ lesz), pedig csak **szorzótényezőt** lehet.',
        },
        {
          kind: 'tip',
          text: 'Ellenőrzés: helyettesíts be egy egyszerű számot (például $x = 1$ vagy $x = 2$) az eredeti és az átalakított kifejezésbe. Ha nem ugyanazt kapod, hiba van.',
        },
      ],
      topicMatch: [
        'algebrai kifejezések',
        'nevezetes azonosságok',
        'azonosságok',
        'szorzattá alakítás',
        'szorzatalak',
        'polinomok',
        'képletek átrendezése',
      ],
      quiz: [
        {
          question: 'Melyik a $(3x - 2)^2$ kifejtett alakja?',
          options: ['$9x^2 - 4$', '$9x^2 - 12x + 4$', '$9x^2 + 12x + 4$', '$3x^2 - 12x + 4$'],
          answer: 1,
          explanation: '$(a - b)^2 = a^2 - 2ab + b^2$, vagyis $9x^2 - 2 \\cdot 3x \\cdot 2 + 4$.',
        },
        {
          question: 'Melyik a $25x^2 - 49$ szorzattá alakított alakja?',
          options: ['$(5x - 7)^2$', '$(5x + 7)^2$', '$(5x - 7)(5x + 7)$', '$(25x - 49)(x + 1)$'],
          answer: 2,
          explanation: '$a^2 - b^2 = (a - b)(a + b)$, itt $a = 5x$ és $b = 7$.',
        },
        {
          question: 'Mire egyszerűsíthető az $\\frac{x^2 - 4}{x - 2}$ tört, ha $x \\ne 2$?',
          options: ['$x - 2$', '$x + 2$', '$x^2 - 2$', '$2$'],
          answer: 1,
          explanation: '$\\frac{(x-2)(x+2)}{x-2} = x + 2$.',
        },
        {
          question: 'Mennyi $(2x + 3)^2 - (2x - 3)^2$?',
          options: ['$0$', '$18$', '$12x$', '$24x$'],
          answer: 3,
          explanation: 'A két négyzetes tag kiesik, marad $12x + 12x = 24x$.',
        },
        {
          question: 'Melyik a $x^3 + 8$ szorzattá alakított alakja?',
          options: [
            '$(x + 2)(x^2 - 2x + 4)$',
            '$(x + 2)(x^2 + 2x + 4)$',
            '$(x + 2)^3$',
            '$(x - 2)(x^2 + 2x + 4)$',
          ],
          answer: 0,
          explanation:
            '$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$, $a = x$, $b = 2$. Kifejtve ellenőrizhető: $x^3 - 2x^2 + 4x + 2x^2 - 4x + 8 = x^3 + 8$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nevezetes azonosságok', url: wiki('Nevezetes azonosságok') },
        { label: 'Wikipédia: Polinom', url: wiki('Polinom') },
      ],
    },
    {
      id: 'aranyossag-szazalekszamitas',
      subject: 'matematika',
      unitId: 'egyenletek-algebra',
      title: 'Arányosság és százalékszámítás',
      level: 'kozep',
      requirement: {
        kozep:
          'Az egyenes és a fordított arányosság definíciója és grafikus ábrázolása; az arányosság és a százalék fogalma, alkalmazása feladatokban',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Egyenes arányosság**: ha az egyik mennyiség többszörösére nő, a másik is ugyanannyiszorosára. $y = ax$, a hányados állandó.',
            '**Fordított arányosság**: ha az egyik többszörösére nő, a másik ugyanannyiad részére csökken. $y = \\frac{k}{x}$, a szorzat állandó.',
            '**Százalék**: a század rész, $p\\% = \\frac{p}{100}$. Három szereplő van: **alap**, **százalékláb**, **százalékérték**.',
            'Változásnál szorzótényezővel számolj: $+15\\%$ esetén $\\cdot 1{,}15$, $-20\\%$ esetén $\\cdot 0{,}8$.',
          ],
        },
        {
          kind: 'formula',
          tex: 'a \\cdot \\frac{p}{100} = \\text{százalékérték}',
          caption: 'alap · százalékláb = százalékérték',
        },
      ],
      details: [
        { kind: 'heading', text: 'Egyenes és fordított arányosság' },
        {
          kind: 'plot',
          title: 'Egyenes ($y = 2x$) és fordított ($y = 6/x$) arányosság',
          x: [0, 6],
          y: [0, 8],
          functions: [
            { label: 'y = 2x', fn: (x) => 2 * x },
            { label: 'y = 6/x', fn: (x) => (x < 0.1 ? NaN : 6 / x) },
          ],
        },
        {
          kind: 'compare',
          columns: ['Egyenes arányosság', 'Fordított arányosság'],
          rows: [
            { label: 'Összefüggés', cells: ['$y = ax$', '$y = \\frac{k}{x}$'] },
            {
              label: 'Állandó',
              cells: ['a hányados: $\\frac{y}{x} = a$', 'a szorzat: $x \\cdot y = k$'],
            },
            { label: 'Grafikon', cells: ['az origón átmenő egyenes', 'hiperbola'] },
            { label: 'Példa', cells: ['az ár és a mennyiség', 'a munkások száma és a munkaidő'] },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            '5 kg alma 1450 Ft. Mennyibe kerül 8 kg? Egy munkát 3 munkás 12 nap alatt végez el. Hány nap alatt végezne vele 4 munkás?',
          solution:
            'Egyenes arányosság: 1 kg ára $1450 : 5 = 290$ Ft, 8 kg ára $8 \\cdot 290 = 2320$ Ft.\n\nFordított arányosság: a munkanapok szorzata állandó, $3 \\cdot 12 = 36$ munkásnap. 4 munkás $36 : 4 = 9$ nap alatt végez.',
        },
        { kind: 'heading', text: 'Százalékszámítás' },
        {
          kind: 'text',
          text: 'Hármat tudsz kiszámolni a három szereplő közül, ha a másik kettő ismert: **százalékérték** = alap · $\\frac{p}{100}$; **alap** = százalékérték : $\\frac{p}{100}$; **százalékláb** = $\\frac{\\text{százalékérték}}{\\text{alap}} \\cdot 100$.',
        },
        {
          kind: 'text',
          text: '**Változás**: ha egy mennyiség $p\\%$-kal nő, az új érték az eredeti $(1 + \\frac{p}{100})$-szorosa, ha csökken, akkor $(1 - \\frac{p}{100})$-szorosa. **Több egymás utáni változásnál a szorzótényezők összeszorzódnak.**',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: egymás utáni változás',
          problem:
            'Egy 18 000 Ft-os cipő árát 15%-kal csökkentik, majd az új árat 10%-kal megemelik. Mennyi a végső ár, és hány százalékkal változott az eredeti ár?',
          solution:
            '$18\\,000 \\cdot 0{,}85 \\cdot 1{,}10 = 16\\,830$ Ft.\n\nA teljes szorzótényező $0{,}85 \\cdot 1{,}10 = 0{,}935$, vagyis az ár összesen 6,5%-kal csökkent. (Nem 5%-kal: a két változás alapja különböző.)',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: visszafelé számolás',
          problem: 'Egy termék bruttó ára 12 700 Ft, ebben 27% áfa van. Mennyi a nettó ár?',
          solution:
            'A nettó ár 100%, a bruttó ár 127%, vagyis a nettó ár $\\cdot 1{,}27 = 12\\,700$. Ebből a nettó ár $12\\,700 : 1{,}27 = 10\\,000$ Ft.\n\nHiba lenne a bruttó árból 27%-ot levonni: a 27% a nettó árra vonatkozik, nem a bruttóra.',
        },
        {
          kind: 'warning',
          text: '**Százalék és százalékpont**: ha egy arány 20%-ról 25%-ra nő, az 5 **százalékpont** növekedés, de relatíve $\\frac{25}{20} = 1{,}25$, vagyis 25%-os növekedés.',
        },
        {
          kind: 'text',
          text: 'Kamatos kamatnál (és minden ismétlődő százalékos változásnál) a tőke $n$ év után $T \\cdot (1 + \\frac{p}{100})^n$. A sorozatokhoz kapcsolódó részletes tárgyalás a Sorozatok egységben van.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: rövid százalékos feladat (ár, kedvezmény, áfa, „hány százalékkal több”), arányos osztás.',
            'II. rész: szöveges feladat, gyakran táblázattal, diagrammal vagy kamatos kamattal összekötve, kerekítési utasítással.',
            'Fordított arányosság: munkavégzés, sebesség és idő ugyanazon az úton.',
          ],
        },
        {
          kind: 'example',
          title: 'Minta I. rész feladat',
          problem:
            'Egy telefon árát először 20%-kal csökkentették, így 6400 Ft lett. Mennyi volt az eredeti ár?',
          solution: 'Az eredeti ár 100%, az új ár 80%. Eredeti ár $= 6400 : 0{,}8 = 8000$ Ft.',
        },
        {
          kind: 'warning',
          text: 'Tipikus pontvesztés: a +20% és −20% nem ejti ki egymást ($1{,}2 \\cdot 0{,}8 = 0{,}96$, tehát 4% a veszteség); rossz alap választása; a kerekítési szabály figyelmen kívül hagyása. A feladat kérdése mindig a végeredményt kéri mértékegységgel.',
        },
      ],
      topicMatch: ['arányosság', 'arányok', 'százalékszámítás', 'méretarány'],
      quiz: [
        {
          question: 'Mennyi lesz egy 40 000 Ft-os fizetés 15%-os emelés után?',
          options: ['40 600 Ft', '46 000 Ft', '45 000 Ft', '34 000 Ft'],
          answer: 1,
          explanation: '$40\\,000 \\cdot 1{,}15 = 46\\,000$.',
        },
        {
          question:
            'Egy árat először 50%-kal megemelnek, aztán az új árat 50%-kal csökkentik. Mi lesz az eredményhez képest?',
          options: ['változatlan marad', '25%-kal kisebb', '25%-kal nagyobb', '50%-kal kisebb'],
          answer: 1,
          explanation:
            '$1{,}5 \\cdot 0{,}5 = 0{,}75$, vagyis az ár a kezdeti ár 75%-a, 25%-os csökkenés.',
        },
        {
          question:
            '6 gép egy munkát 10 óra alatt végez el. Hány óra alatt végezne vele 4 gép (ugyanolyan teljesítménnyel)?',
          options: ['6,67 óra', '12 óra', '15 óra', '20 óra'],
          answer: 2,
          explanation: 'Fordított arányosság: $6 \\cdot 10 = 60$ gépóra, $60 : 4 = 15$ óra.',
        },
        {
          question:
            'Egy csökkentés után egy cikk ára 3200 Ft. A csökkentés 20%-os volt. Mi volt az eredeti ár?',
          options: ['3840 Ft', '2560 Ft', '4000 Ft', '3520 Ft'],
          answer: 2,
          explanation: 'Az új ár az eredeti 80%-a: $3200 : 0{,}8 = 4000$.',
        },
        {
          question: 'Egy arány 12%-ról 15%-ra nőtt. Mekkora a változás?',
          options: ['3 százalékpont', '3%', '15 százalékpont', '25 százalékpont'],
          answer: 0,
          explanation:
            'A különbség $15 - 12 = 3$ százalékpont (relatíve 25%-os növekedés, de a „százalékpont” a különbséget jelenti).',
        },
      ],
      sources: [
        { label: 'Wikipédia: Százalékszámítás', url: wiki('Százalékszámítás') },
        { label: 'Wikipédia: Arányosság', url: wiki('Arányosság') },
      ],
    },
    {
      id: 'elsofoku-egyenletek-rendszerek',
      subject: 'matematika',
      unitId: 'egyenletek-algebra',
      title: 'Elsőfokú egyenletek, egyenletrendszerek, szöveges feladatok',
      level: 'both',
      requirement: {
        kozep:
          'Alaphalmaz, megoldáshalmaz; egyenletmegoldási módszerek (mérlegelv, grafikus megoldás, ekvivalens átalakítás, következményegyenlet, új ismeretlen, értelmezési tartomány); elsőfokú egyismeretlenes egyenlet és kétismeretlenes egyenletrendszer; szöveges feladatok',
        emelt:
          'Paraméteres elsőfokú egyenletek; elsőfokú háromismeretlenes egyenletrendszerek; értelmezési tartomány és értékkészlet vizsgálatával, szorzattá alakítással megoldható összetett feladatok',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Alaphalmaz**: azok az értékek, amelyek közül a megoldást keressük. **Megoldáshalmaz**: az alaphalmaz azon elemei, amelyek az egyenletet igazzá teszik.',
            '**Mérlegelv**: az egyenlet mindkét oldalával ugyanazt tesszük (ugyanazt adjuk hozzá, 0-tól különbözővel szorozzuk, osztjuk). Ez **ekvivalens** átalakítás, a megoldáshalmaz nem változik.',
            'Ha olyan lépést teszünk, ami új „megoldást” hozhat be (például négyzetre emelés), az **következményegyenlet**: ellenőrizni kell.',
            'Egyenletrendszer: **behelyettesítő** vagy **egyenlő együtthatók** módszer, vagy grafikusan a két egyenes metszéspontja.',
            'Szöveges feladat: ismeretlen, egyenlet, megoldás, **ellenőrzés a szöveggel**, válasz.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az elsőfokú egyenlet' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Oldja meg a valós számok halmazán: $3(x - 2) - 2(1 - x) = 7$!',
          solution:
            'Zárójelek felbontása: $3x - 6 - 2 + 2x = 7$, azaz $5x - 8 = 7$. Ebből $5x = 15$, $x = 3$.\n\nEllenőrzés: $3 \\cdot 1 - 2 \\cdot (-2) = 3 + 4 = 7$. Jó.',
        },
        {
          kind: 'text',
          text: 'Háromféle kimenetel lehet: egy megoldás ($2x + 3 = 7$), **nincs megoldás** (ellentmondás: $2x + 3 = 2x + 5$, üres megoldáshalmaz), vagy **minden szám megoldás** (azonosság: $2x + 3 = 2x + 3$, a megoldáshalmaz az alaphalmaz).',
        },
        { kind: 'heading', text: 'Kétismeretlenes egyenletrendszer' },
        {
          kind: 'plot',
          title: 'Grafikus megoldás: x + y = 5 és 2x − y = 1',
          x: [-1, 6],
          y: [-2, 7],
          functions: [
            { label: 'y = 5 − x', fn: (x) => 5 - x },
            { label: 'y = 2x − 1', fn: (x) => 2 * x - 1 },
          ],
          points: [{ x: 2, y: 3, label: 'metszéspont: (2; 3)' }],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Oldja meg: $3x + 2y = 12$ és $2x - y = 1$!',
          solution:
            'A második egyenletből $y = 2x - 1$. Behelyettesítve az elsőbe: $3x + 2(2x - 1) = 12$, $7x - 2 = 12$, $x = 2$, majd $y = 3$.\n\nEgyenlő együtthatók módszerével: a második egyenlet kétszeresét az elsőhöz adva $7x = 14$ ugyanezt adja.\n\nA két egyenes egy pontban metszi egymást. Párhuzamosak, ha nincs megoldás, egybeesnek, ha végtelen sok.',
        },
        { kind: 'heading', text: 'Szöveges feladatok' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Anna az első nap elolvasta egy könyv oldalainak negyedét, másnap a maradék kétharmadát, és még 30 oldal van hátra. Hány oldalas a könyv?',
          solution:
            'Legyen a könyv $x$ oldalas. Az első nap után $\\frac{3x}{4}$ oldal maradt, a második napon ennek kétharmadát olvasta, így hátra van a maradék harmada: $\\frac{1}{3} \\cdot \\frac{3x}{4} = \\frac{x}{4}$.\n\n$\\frac{x}{4} = 30$, ezért $x = 120$.\n\nEllenőrzés: első nap 30, maradt 90; második nap 60, maradt 30. Jó. A válasz: a könyv 120 oldalas.',
        },
        {
          kind: 'tip',
          text: 'A megoldás után mindig nézd meg, **illik-e a szöveghez**: az oldalszám, a létszám természetes szám, az idő nem negatív. Ha nem, a feladat eredménye „nincs megoldás” vagy el kell vetni egy gyököt.',
        },
        {
          kind: 'heading',
          text: 'Paraméteres egyenlet és háromismeretlenes rendszer',
          emelt: true,
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: paraméteres egyenlet',
          problem:
            'Oldja meg a valós számok halmazán az $(a - 2)x = a^2 - 4$ egyenletet az $a$ paraméter minden értékére!',
          solution:
            'Ha $a \\ne 2$, osztunk $(a - 2)$-vel: $x = \\frac{a^2 - 4}{a - 2} = a + 2$.\n\nHa $a = 2$, az egyenlet $0 \\cdot x = 0$, ami minden valós $x$-re igaz, vagyis minden valós szám megoldás.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: három ismeretlen',
          problem: 'Oldja meg: $x + y + z = 6$, $x - y + z = 2$, $2x + y - z = 1$!',
          solution:
            'Az első két egyenletet kivonva $2y = 4$, tehát $y = 2$. Összeadva az első kettőt: $2x + 2z = 8$, azaz $x + z = 4$. A harmadikba $y = 2$-t írva $2x - z = -1$. A két egyenletet összeadva $3x = 3$, $x = 1$, $z = 3$.\n\nEllenőrzés: $1 + 2 + 3 = 6$, $1 - 2 + 3 = 2$, $2 + 2 - 3 = 1$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: egyszerű egyenlet vagy kétismeretlenes rendszer megoldása, ritkán szöveges kerettel.',
            'II. A / II. B: szöveges feladat, amelyben fel kell írni az egyenletet vagy rendszert (életkor, keverék, munka, mozgás, pénz).',
            'Emelt szint: paraméteres egyenlet esetszétválasztással, háromismeretlenes rendszer.',
          ],
        },
        {
          kind: 'warning',
          text: 'Szöveges feladatnál az ellenőrzés a szöveg alapján pontot ér, kihagyása pontvesztő. Ha **osztasz** egy kifejezéssel, amelyik lehet nulla (például $a - 2$ vagy $x - 3$), előbb esetet kell szétválasztani, különben megoldás vész el. Paraméteres feladatban a „minden valós szám” és a „nincs megoldás” esetet külön ki kell mondani.',
        },
        {
          kind: 'tip',
          text: 'Szöveges feladat pontozása: ismeretlenek megadása, egyenlet felírása, megoldás, ellenőrzés a szöveg alapján, válasz mondatban. Mindegyikre jár pont.',
        },
      ],
      topicMatch: [
        'elsőfokú egyenlet',
        '=egyenlet',
        '=egyenletek',
        'egyenletrendszer',
        'szöveges feladat',
      ],
      quiz: [
        {
          question: 'Mi a megoldása a $2(x + 3) = x - 5$ egyenletnek?',
          options: ['$x = 1$', '$x = -11$', '$x = 11$', '$x = -1$'],
          answer: 1,
          explanation: '$2x + 6 = x - 5$, ebből $x = -11$.',
        },
        {
          question: 'Hány megoldása van a $2x + 3 = 2x + 5$ egyenletnek a valós számok halmazán?',
          options: ['egy', 'kettő', 'végtelen sok', 'nincs megoldás'],
          answer: 3,
          explanation: 'Mindkét oldalból $2x$-et levonva $3 = 5$, ami ellentmondás.',
        },
        {
          question: 'Mi az $x + y = 7$, $x - y = 3$ egyenletrendszer megoldása $(x; y)$?',
          options: ['$(4; 3)$', '$(5; 2)$', '$(2; 5)$', '$(3; 4)$'],
          answer: 1,
          explanation: 'Az egyenleteket összeadva $2x = 10$, $x = 5$, majd $y = 2$.',
        },
        {
          question: 'Két szám összege 47, különbségük 9. Melyik a két szám?',
          options: ['28 és 19', '30 és 17', '26 és 17', '29 és 20'],
          answer: 0,
          explanation: '$x + y = 47$ és $x - y = 9$, így $x = 28$ és $y = 19$.',
        },
        {
          question: 'Hány megoldása van az $(a - 2)x = a^2 - 4$ egyenletnek az $a = 2$ esetben?',
          options: [
            'nincs megoldás',
            'pontosan egy',
            'pontosan kettő',
            'minden valós szám megoldás',
          ],
          answer: 3,
          explanation:
            'Az egyenlet $0 \\cdot x = 0$ alakra egyszerűsödik, amely minden $x$-re igaz.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Egyenlet', url: wiki('Egyenlet') },
        { label: 'Wikipédia: Lineáris egyenletrendszer', url: wiki('Lineáris egyenletrendszer') },
      ],
    },
    {
      id: 'masodfoku-egyenletek',
      subject: 'matematika',
      unitId: 'egyenletek-algebra',
      title: 'Másodfokú egyenletek és a másodfokúra visszavezethető egyenletek',
      level: 'both',
      requirement: {
        kozep:
          'A másodfokú egyenlet általános alakja, diszkriminánsa és a megoldások száma; megoldóképlet; teljes négyzetté alakítás; gyöktényezős alak; másodfokúra vezető szöveges feladatok; egyszerű, másodfokúra visszavezethető egyenletek',
        emelt:
          'A megoldóképlet igazolása; gyökök és együtthatók közötti összefüggések (Viète-formulák); paraméteres másodfokú egyenletek; törtes egyenletek; egyszerű másodfokú egyenletrendszerek; másodfokúra visszavezethető egyenletek és egyenletrendszerek',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Általános alak: $ax^2 + bx + c = 0$, $a \\ne 0$.',
            'A **diszkrimináns**: $D = b^2 - 4ac$. Ha $D > 0$, két valós megoldás van; ha $D = 0$, egy (kétszeres) megoldás; ha $D < 0$, nincs valós megoldás.',
            '**Gyöktényezős alak**: $ax^2 + bx + c = a(x - x_1)(x - x_2)$.',
            'Hiányos esetek gyorsabban: $x^2 = 9$ gyökvonással, $x^2 - 5x = 0$ kiemeléssel.',
            '**Visszavezetés**: $x^4 - 5x^2 + 4 = 0$-nál új ismeretlen $y = x^2$.',
          ],
        },
        {
          kind: 'formula',
          tex: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
          caption: 'A másodfokú egyenlet megoldóképlete',
        },
        {
          kind: 'plot',
          title: 'A diszkrimináns jelentése: a parabola és az x tengely',
          x: [-1, 5],
          y: [-2, 6],
          functions: [
            { label: 'x² − 4x + 3 (D = 4)', fn: (x) => x * x - 4 * x + 3 },
            { label: 'x² − 4x + 4 (D = 0)', fn: (x) => x * x - 4 * x + 4 },
            { label: 'x² − 4x + 5 (D = −4)', fn: (x) => x * x - 4 * x + 5 },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Megoldás lépésről lépésre' },
        {
          kind: 'example',
          title: 'Kidolgozott példa: megoldóképlet',
          problem: 'Oldja meg a valós számok halmazán: $2x^2 - 5x - 3 = 0$!',
          solution:
            '$a = 2$, $b = -5$, $c = -3$. $D = 25 + 24 = 49 > 0$.\n\n$x_{1,2} = \\frac{5 \\pm 7}{4}$, vagyis $x_1 = 3$, $x_2 = -\\frac{1}{2}$.\n\nGyöktényezős alak: $2(x - 3)(x + \\frac{1}{2})$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: teljes négyzetté alakítás',
          problem: 'Oldja meg a $x^2 - 6x + 5 = 0$ egyenletet teljes négyzetté alakítással!',
          solution:
            '$x^2 - 6x + 5 = (x - 3)^2 - 9 + 5 = (x - 3)^2 - 4$. Tehát $(x - 3)^2 = 4$, $x - 3 = \\pm 2$, $x = 5$ vagy $x = 1$.\n\nEz a módszer adja a parabola csúcsát is: $(3; -4)$.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'hiányos eset, $b = 0$',
              text: '$x^2 = 9$, megoldás $x = 3$ vagy $x = -3$. Ha a jobb oldal negatív, nincs valós megoldás.',
            },
            {
              term: 'hiányos eset, $c = 0$',
              text: '$x^2 - 5x = x(x - 5) = 0$, a szorzat akkor 0, ha valamelyik tényezője 0: $x = 0$ vagy $x = 5$.',
            },
          ],
        },
        { kind: 'heading', text: 'Másodfokúra visszavezethető egyenlet' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Oldja meg: $x^4 - 5x^2 + 4 = 0$!',
          solution:
            'Legyen $y = x^2$ ($y \\ge 0$). Az egyenlet: $y^2 - 5y + 4 = 0$, ennek gyökei $y = 1$ és $y = 4$.\n\nVisszaírva: $x^2 = 1$, tehát $x = \\pm 1$; $x^2 = 4$, tehát $x = \\pm 2$. Négy megoldás van: $-2$, $-1$, $1$, $2$.',
        },
        { kind: 'heading', text: 'Szöveges feladat' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Egy téglalap kerülete 28 cm, területe 48 cm². Mekkorák az oldalai?',
          solution:
            'Az oldalak összege $a + b = 14$, szorzata $ab = 48$. Ha $a = x$, akkor $b = 14 - x$, és $x(14 - x) = 48$, azaz $x^2 - 14x + 48 = 0$.\n\n$D = 196 - 192 = 4$, $x = \\frac{14 \\pm 2}{2}$, vagyis $x = 8$ vagy $x = 6$. A téglalap oldalai 6 cm és 8 cm. (A két gyök ugyanazt a téglalapot adja.)',
        },
        { kind: 'heading', text: 'Emelt szintű kiegészítések', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: '**A megoldóképlet igazolása**: $ax^2 + bx + c = 0$ egyenletet $a$-val osztva és teljes négyzetté alakítva: $\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$. Ha a jobb oldal nemnegatív, gyököt vonva $x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$, amiből a képlet adódik.',
        },
        {
          kind: 'formula',
          emelt: true,
          tex: 'x_1 + x_2 = -\\frac{b}{a}, \\qquad x_1 \\cdot x_2 = \\frac{c}{a}',
          caption: 'Gyökök és együtthatók közötti összefüggések (Viète-formulák)',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: Viète-formulák és paraméter',
          problem:
            'Az $x^2 - 7x + k = 0$ egyenlet gyökeinek különbsége 3. Mennyi $k$? Milyen $p$ esetén van két különböző valós gyöke az $x^2 - 2x + p = 0$ egyenletnek?',
          solution:
            'Mivel $x_1 + x_2 = 7$ és $x_1 - x_2 = 3$, ezért $x_1 = 5$, $x_2 = 2$, és $k = x_1 x_2 = 10$.\n\nA másik egyenletre $D = 4 - 4p > 0$ pontosan akkor teljesül, ha $p < 1$.\n\nHasznos azonosság: $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$. Például az $x^2 - 6x + 4 = 0$ gyökeinek négyzetösszege $36 - 8 = 28$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: törtes egyenlet',
          problem: 'Oldja meg: $\\frac{1}{x - 1} + \\frac{2}{x + 1} = 1$!',
          solution:
            'Értelmezési tartomány: $x \\ne 1$ és $x \\ne -1$. Közös nevezőre hozva: $(x + 1) + 2(x - 1) = (x - 1)(x + 1)$, azaz $3x - 1 = x^2 - 1$, vagyis $x^2 - 3x = 0$, $x = 0$ vagy $x = 3$.\n\nMindkettő megfelel az értelmezési tartománynak. Ellenőrzés: $x = 3$-ra $\\frac{1}{2} + \\frac{2}{4} = 1$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: másodfokú egyenletrendszer',
          problem: 'Oldja meg: $y = x + 1$ és $x^2 + y^2 = 25$!',
          solution:
            'Behelyettesítve: $x^2 + (x + 1)^2 = 25$, azaz $2x^2 + 2x - 24 = 0$, $x^2 + x - 12 = 0$, $x = 3$ vagy $x = -4$.\n\nA megoldások: $(3; 4)$ és $(-4; -3)$. (Geometriailag a kör és az egyenes metszéspontjai.)',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: másodfokú egyenlet megoldása; a megoldások száma a diszkrimináns alapján; gyöktényezős alak.',
            'II. rész: szöveges feladat (téglalap oldalai, szám és négyzete, mozgás), gyakran két szempont együtt: egyenlet és függvény/geometria.',
            'Emelt szint: paraméteres egyenlet („milyen $p$-re van két megoldás”), törtes egyenlet értelmezési tartománnyal, másodfokú egyenletrendszer, Viète-formulák, levezetés vagy bizonyítás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: $a$, $b$, $c$ előjelének elrontása a képletbe írásnál (különösen negatív $b$-nél: $-b$ pozitív); osztás $x$-szel (ezzel megoldás vész el, helyette emelj ki); szöveges feladatnál a negatív vagy értelmetlen gyök (például negatív hosszúság) elvetésének elmulasztása; törtes egyenletnél az értelmezési tartomány figyelmen kívül hagyása.',
        },
        {
          kind: 'tip',
          text: 'Először mindig nézd meg, nem hiányos-e az egyenlet, és nem lehet-e kiemelni vagy nevezetes azonossággal szorzattá alakítani. A megoldóképlet csak a biztos út, nem mindig a leggyorsabb.',
        },
      ],
      topicMatch: ['másodfokú egyenlet', 'diszkrimináns', 'harmadfokú egyenlet', 'törtes egyenlet'],
      quiz: [
        {
          question:
            'Mennyi az $x^2 - 6x + 9 = 0$ egyenlet diszkriminánsa, és hány valós megoldása van?',
          options: [
            '$D = 0$, egy megoldás',
            '$D = 0$, két megoldás',
            '$D = 36$, két megoldás',
            '$D < 0$, nincs megoldás',
          ],
          answer: 0,
          explanation:
            '$D = 36 - 36 = 0$; az egyenlet $(x - 3)^2 = 0$, egyetlen megoldása $x = 3$.',
        },
        {
          question: 'Melyek az $x^2 - 3x - 10 = 0$ egyenlet megoldásai?',
          options: ['$2$ és $-5$', '$-2$ és $5$', '$-2$ és $-5$', '$2$ és $5$'],
          answer: 1,
          explanation: '$D = 9 + 40 = 49$, $x = \\frac{3 \\pm 7}{2}$, tehát $5$ és $-2$.',
        },
        {
          question: 'Melyik egyenletnek nincs valós megoldása?',
          options: [
            '$x^2 + 2x - 5 = 0$',
            '$x^2 + 2x + 5 = 0$',
            '$x^2 - 2x - 5 = 0$',
            '$x^2 - 5 = 0$',
          ],
          answer: 1,
          explanation: 'A másodiknál $D = 4 - 20 = -16 < 0$; a többinél $D$ pozitív.',
        },
        {
          question: 'Hány valós megoldása van az $x^4 - 10x^2 + 9 = 0$ egyenletnek?',
          options: ['2', '3', '4', '0'],
          answer: 2,
          explanation:
            '$y = x^2$-tel $y^2 - 10y + 9 = 0$, $y = 1$ vagy $y = 9$, így $x = \\pm 1$ vagy $x = \\pm 3$.',
        },
        {
          question: 'Mennyi a $2x^2 - 10x + 7 = 0$ egyenlet gyökeinek összege és szorzata?',
          options: [
            'összeg 5, szorzat $\\frac{7}{2}$',
            'összeg $-5$, szorzat $\\frac{7}{2}$',
            'összeg 10, szorzat 7',
            'összeg 5, szorzat 7',
          ],
          answer: 0,
          explanation:
            'A Viète-formulák szerint $x_1 + x_2 = -\\frac{b}{a} = 5$ és $x_1 x_2 = \\frac{c}{a} = \\frac{7}{2}$. ($D = 44 > 0$, tehát valóban vannak valós gyökök.)',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Másodfokú egyenlet', url: wiki('Másodfokú egyenlet') },
        { label: 'Wikipédia: Diszkrimináns', url: wiki('Diszkrimináns') },
        { label: 'Wikipédia: Viète-formulák', url: wiki('Viète formulák') },
      ],
    },
    {
      id: 'gyokos-abszolutertekes-egyenlotlensegek',
      subject: 'matematika',
      unitId: 'egyenletek-algebra',
      title: 'Gyökös és abszolútértékes egyenletek, egyenlőtlenségek',
      level: 'both',
      requirement: {
        kozep:
          'Négyzetgyökös egyenletek (√x + b = cx + d típus); egyszerű első- és másodfokú egyenlőtlenségek',
        emelt:
          'Legfeljebb két négyzetre emeléssel megoldható gyökös egyenletek; egyszerű abszolútértékes egyenletek algebrai úton; első- és másodfokú egyenlőtlenség-rendszerek; egyszerű négyzetgyökös, abszolútértékes és törtes egyenlőtlenségek',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Gyökös egyenlet**: különítsd el a gyököt, emelj négyzetre, oldd meg, és **mindig ellenőrizz** (a négyzetre emelés következményegyenlet).',
            '**Első- és másodfokú egyenlőtlenség**: negatív számmal szorozva vagy osztva a relációs jel megfordul. Másodfokúnál a parabola felvázolása segít.',
            'Az egyenlőtlenség megoldáshalmaza általában **intervallum** vagy intervallumok egyesítése.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            '**Abszolútértékes egyenlet**: esetszétválasztás az abszolútérték előjele szerint.',
            'Egyenlőtlenség-rendszer: az egyes megoldáshalmazok **metszete**.',
            'Törtes egyenlőtlenségnél ne szorozz át a nevezővel előjelvizsgálat nélkül.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Négyzetgyökös egyenlet' },
        {
          kind: 'plot',
          title: 'Az √(x + 7) = x + 1 egyenlet grafikusan',
          x: [-7, 5],
          y: [-4, 5],
          functions: [
            { label: '√(x + 7)', fn: (x) => (x >= -7 ? Math.sqrt(x + 7) : NaN) },
            { label: 'x + 1', fn: (x) => x + 1 },
          ],
          points: [{ x: 2, y: 3, label: 'megoldás: x = 2' }],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Oldja meg a valós számok halmazán: $\\sqrt{x + 7} = x + 1$!',
          solution:
            'Értelmezési tartomány: $x \\ge -7$. Négyzetre emelve: $x + 7 = x^2 + 2x + 1$, azaz $x^2 + x - 6 = 0$, $x = 2$ vagy $x = -3$.\n\nEllenőrzés: $x = 2$: $\\sqrt{9} = 3 = 2 + 1$, jó. $x = -3$: $\\sqrt{4} = 2$, de $-3 + 1 = -2$, nem jó (hamis gyök).\n\nAz egyenlet egyetlen megoldása $x = 2$. A grafikon is egyetlen metszéspontot mutat.',
        },
        {
          kind: 'warning',
          text: 'A négyzetre emelés nem ekvivalens átalakítás: $-2 \\ne 2$, de $(-2)^2 = 2^2$. A négyzetgyök értéke sosem negatív, ezért például az $\\sqrt{x} = -2$ egyenletnek nincs megoldása.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: két négyzetgyök',
          problem: 'Oldja meg: $\\sqrt{x + 5} + \\sqrt{x} = 5$!',
          solution:
            'Értelmezési tartomány: $x \\ge 0$. Átrendezve: $\\sqrt{x + 5} = 5 - \\sqrt{x}$. Négyzetre emelve: $x + 5 = 25 - 10\\sqrt{x} + x$, vagyis $10\\sqrt{x} = 20$, $\\sqrt{x} = 2$, $x = 4$.\n\nEllenőrzés: $\\sqrt{9} + \\sqrt{4} = 3 + 2 = 5$. Jó.',
        },
        { kind: 'heading', text: 'Abszolútértékes egyenlet', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Az $|a|$ az $a$ távolsága a nullától: $|a| = a$, ha $a \\ge 0$, és $|a| = -a$, ha $a < 0$. Ezért az egyenletet **esetekre bontjuk** aszerint, hogy a belső kifejezés nemnegatív vagy negatív.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa',
          problem: 'Oldja meg: $|2x - 1| = x + 4$!',
          solution:
            '1. eset: $2x - 1 \\ge 0$, azaz $x \\ge \\frac{1}{2}$. Ekkor $2x - 1 = x + 4$, $x = 5$. Ez teljesíti a feltételt.\n\n2. eset: $x < \\frac{1}{2}$. Ekkor $-(2x - 1) = x + 4$, $-2x + 1 = x + 4$, $x = -1$. Ez is teljesíti a feltételt.\n\nEllenőrzés: $|9| = 9 = 5 + 4$, és $|-3| = 3 = -1 + 4$. Két megoldás van: $5$ és $-1$.\n\nAz $|x - 3| = 5$ típusú egyenlet közvetlenül: $x - 3 = 5$ vagy $x - 3 = -5$, tehát $x = 8$ vagy $x = -2$.',
        },
        { kind: 'heading', text: 'Egyenlőtlenségek' },
        {
          kind: 'example',
          title: 'Kidolgozott példa: elsőfokú',
          problem: 'Oldja meg: $3 - 2x < 7$!',
          solution:
            '$-2x < 4$. Negatív számmal osztunk, ezért a reláció megfordul: $x > -2$. A megoldáshalmaz: $]-2; \\infty[$.',
        },
        {
          kind: 'plot',
          title:
            'Az x² − 2x − 3 ≤ 0 egyenlőtlenség: hol van a parabola az x tengelyen vagy alatta?',
          x: [-3, 5],
          y: [-5, 6],
          functions: [{ label: 'x² − 2x − 3', fn: (x) => x * x - 2 * x - 3 }],
          points: [
            { x: -1, y: 0, label: 'x = −1' },
            { x: 3, y: 0, label: 'x = 3' },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: másodfokú',
          problem: 'Oldja meg: $x^2 - 2x - 3 \\le 0$!',
          solution:
            'A zérushelyek: $x^2 - 2x - 3 = (x + 1)(x - 3)$, tehát $x = -1$ és $x = 3$. A parabola felfelé nyílik, ezért a két gyök között nem pozitív.\n\nA megoldás: $-1 \\le x \\le 3$, azaz $[-1; 3]$.\n\nHa a feladat $x^2 - 2x - 3 > 0$ lenne, a megoldás a kívül eső rész: $x < -1$ vagy $x > 3$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: rendszer, abszolútértékes és törtes egyenlőtlenség',
          problem:
            'Oldja meg: a) $2x - 1 > 3$ és $x^2 \\le 25$; b) $|x - 2| < 3$; c) $\\frac{x + 1}{x - 2} \\le 0$!',
          solution:
            'a) Az első: $x > 2$. A második: $-5 \\le x \\le 5$. A metszet: $2 < x \\le 5$.\n\nb) $-3 < x - 2 < 3$, azaz $-1 < x < 5$.\n\nc) Egy tört akkor $\\le 0$, ha a számláló és a nevező ellenkező előjelű, vagy a számláló 0. A nevező nem lehet 0, tehát $x \\ne 2$. Előjeltáblázat: $x < -1$-nél a tört pozitív, $-1 \\le x < 2$-nél nem pozitív, $x > 2$-nél pozitív. Megoldás: $-1 \\le x < 2$.',
        },
        {
          kind: 'tip',
          text: 'Az exponenciális, logaritmusos és trigonometrikus egyenletek és egyenlőtlenségek (a 2.8.2.2–2.8.2.4 és a 2.8.3 pont emelt részei) a Függvények és a Trigonometria egységben szerepelnek, itt csak a gyökös, abszolútértékes és törtes típust gyakoroljuk.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: egyszerű elsőfokú vagy másodfokú egyenlőtlenség megoldása; gyökös egyenlet megoldása ellenőrzéssel.',
            'II. rész: egyenlőtlenség egy összetett feladat része (például „milyen $x$-re pozitív a kifejezés”); a megoldáshalmaz megadása intervallummal vagy számegyenesen.',
            'Emelt szint: abszolútértékes egyenlet vagy egyenlőtlenség esetszétválasztással, törtes egyenlőtlenség, gyökös egyenlet két négyzetre emeléssel, egyenlőtlenség-rendszer.',
          ],
        },
        {
          kind: 'warning',
          text: 'Pontvesztő hibák: a gyökös egyenletnél az ellenőrzés kihagyása; negatívval szorzásnál a relációs jel meg nem fordítása; a másodfokú egyenlőtlenségnél a rossz tartomány (a gyökök közé vagy kívülre kerül a megoldás); abszolútértékes egyenletnél az eset feltételének elhagyása; törtes egyenlőtlenségnél a nevezővel átszorzás előjel nélkül.',
        },
        {
          kind: 'tip',
          text: 'Vázold fel a parabolát, még ha csak egy kis ábra is: a megoldás abból leolvasható. Az eredményt mindig a kérdezett alakban add meg (intervallum, számegyenes vagy halmazjelölés), és a végpontoknál ($\\le$ és $<$) figyelj a zárójelre.',
        },
      ],
      topicMatch: [
        'gyökös egyenlet',
        'irracionális egyenlet',
        'abszolútértékes',
        '=egyenlőtlenség',
        '=egyenlőtlenségek',
        'egyenlőtlenségrendszer',
        'másodfokú egyenlőtlenség',
      ],
      quiz: [
        {
          question: 'Mi a megoldáshalmaza az $\\sqrt{x + 7} = x + 1$ egyenletnek?',
          options: ['$\\{2; -3\\}$', '$\\{-3\\}$', '$\\{2\\}$', 'üres halmaz'],
          answer: 2,
          explanation:
            'Négyzetre emelés után $x = 2$ vagy $x = -3$; az ellenőrzésnél csak a $2$ jó, a $-3$ hamis gyök.',
        },
        {
          question: 'Oldja meg: $5 - 3x \\ge -4$.',
          options: ['$x \\ge 3$', '$x \\le 3$', '$x \\le -3$', '$x \\ge -3$'],
          answer: 1,
          explanation: '$-3x \\ge -9$; negatívval osztva a relációs jel megfordul: $x \\le 3$.',
        },
        {
          question: 'Mi a $x^2 - 4x + 3 < 0$ egyenlőtlenség megoldása?',
          options: ['$x < 1$ vagy $x > 3$', '$1 < x < 3$', '$-3 < x < -1$', '$x < 3$'],
          answer: 1,
          explanation:
            'A gyökök $1$ és $3$, a parabola felfelé nyílik, tehát a gyökök között negatív.',
        },
        {
          question: 'Mi az $\\sqrt{x} = -2$ egyenlet megoldáshalmaza a valós számok halmazán?',
          options: ['$\\{4\\}$', '$\\{-4\\}$', '$\\{4; -4\\}$', 'üres halmaz'],
          answer: 3,
          explanation:
            'A négyzetgyök értéke nem lehet negatív. (Négyzetre emeléssel $x = 4$ jönne ki, de az ellenőrzésnél $\\sqrt{4} = 2 \\ne -2$.)',
        },
        {
          question: 'Melyek az $|x - 3| = 5$ egyenlet megoldásai?',
          options: ['$8$ és $-2$', '$8$ és $2$', '$-8$ és $2$', 'csak $8$'],
          answer: 0,
          explanation: '$x - 3 = 5$ vagy $x - 3 = -5$, tehát $x = 8$ vagy $x = -2$.',
          emelt: true,
        },
        {
          question: 'Mi az $|x - 2| < 3$ egyenlőtlenség megoldása?',
          options: ['$x < 5$', '$-1 < x < 5$', '$x < -1$ vagy $x > 5$', '$-3 < x < 3$'],
          answer: 1,
          explanation: '$-3 < x - 2 < 3$, mindhárom részhez 2-t adva $-1 < x < 5$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Egyenlőtlenség', url: wiki('Egyenlőtlenség') },
        { label: 'Wikipédia: Abszolútérték', url: wiki('Abszolútérték') },
        { label: 'Wikipédia: Irracionális egyenlet', url: wiki('Irracionális egyenlet') },
      ],
    },
    {
      id: 'kozepertekek-egyenlotlensegei',
      subject: 'matematika',
      unitId: 'egyenletek-algebra',
      title: 'Középértékek és egyenlőtlenségeik',
      level: 'emelt',
      requirement: {
        emelt:
          'Két pozitív szám számtani, mértani, négyzetes és harmonikus közepe és a nagyságrendi viszonyaikra vonatkozó tételek; annak bizonyítása, hogy (a + b)/2 ≥ √(ab), ha a, b pozitív valós számok; feladatok megoldása a számtani és mértani közép közötti összefüggés alapján',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Két pozitív szám, $a$ és $b$ **számtani közepe** $A = \\frac{a + b}{2}$, **mértani közepe** $G = \\sqrt{ab}$, **négyzetes közepe** $Q = \\sqrt{\\frac{a^2 + b^2}{2}}$, **harmonikus közepe** $H = \\frac{2}{\\frac{1}{a} + \\frac{1}{b}} = \\frac{2ab}{a + b}$.',
            'Nagyságrendi sorrend: $H \\le G \\le A \\le Q$, és **egyenlőség pontosan akkor** van, ha $a = b$.',
            'A számtani és mértani közép közötti összefüggés: $\\frac{a + b}{2} \\ge \\sqrt{ab}$.',
            'Alkalmazás: szélsőérték-feladatok. Adott összegű pozitív számok szorzata akkor legnagyobb, ha egyenlők; adott szorzatú számok összege akkor legkisebb, ha egyenlők.',
          ],
          emelt: true,
        },
        {
          kind: 'formula',
          emelt: true,
          tex: 'H \\le G \\le A \\le Q',
          caption: 'Pozitív $a$ és $b$ esetén; egyenlőség akkor és csak akkor, ha $a = b$',
        },
      ],
      details: [
        {
          kind: 'plot',
          title: 'A négy közép, ha a = 4, és b változik (x tengely: b)',
          x: [0.5, 10],
          y: [0, 10],
          functions: [
            { label: 'H (harmonikus)', fn: (b) => (8 * b) / (4 + b) },
            { label: 'G (mértani)', fn: (b) => Math.sqrt(4 * b) },
            { label: 'A (számtani)', fn: (b) => (4 + b) / 2 },
            { label: 'Q (négyzetes)', fn: (b) => Math.sqrt((16 + b * b) / 2) },
          ],
          points: [{ x: 4, y: 4, label: 'b = a: mind egyenlő' }],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: a négy közép',
          problem: 'Számolja ki $a = 4$ és $b = 9$ négy közepét, és rendezze őket nagyság szerint!',
          solution:
            '$A = \\frac{4 + 9}{2} = 6{,}5$; $G = \\sqrt{36} = 6$; $Q = \\sqrt{\\frac{16 + 81}{2}} = \\sqrt{48{,}5} \\approx 6{,}96$; $H = \\frac{2 \\cdot 36}{13} = \\frac{72}{13} \\approx 5{,}54$.\n\nSorrend: $H < G < A < Q$, vagyis $5{,}54 < 6 < 6{,}5 < 6{,}96$.',
          emelt: true,
        },
        {
          kind: 'heading',
          text: 'A számtani és mértani közép közötti összefüggés bizonyítása',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Állítás: ha $a, b > 0$, akkor $\\frac{a + b}{2} \\ge \\sqrt{ab}$, egyenlőség csak $a = b$ esetén.\n\n**Bizonyítás.** Egy valós szám négyzete nemnegatív, ezért $(\\sqrt{a} - \\sqrt{b})^2 \\ge 0$. Kifejtve: $a - 2\\sqrt{ab} + b \\ge 0$, azaz $a + b \\ge 2\\sqrt{ab}$. Mindkét oldalt 2-vel osztva kapjuk az állítást. Egyenlőség pontosan akkor van, ha $\\sqrt{a} - \\sqrt{b} = 0$, azaz $a = b$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A harmonikus közép az $\\frac{1}{a}$ és $\\frac{1}{b}$ számtani közepének reciproka, és az $\\frac{1}{a}, \\frac{1}{b}$ számokra alkalmazott $A \\ge G$ egyenlőtlenségből következik, hogy $H \\le G$. A $Q \\ge A$ egyenlőtlenség ekvivalens a $2(a^2 + b^2) \\ge (a + b)^2$ átalakítással, vagyis $(a - b)^2 \\ge 0$.',
        },
        { kind: 'heading', text: 'Alkalmazások', emelt: true },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: legkisebb érték',
          problem:
            'Mekkora az $x + \\frac{9}{x}$ kifejezés legkisebb értéke, ha $x > 0$? Mely $x$-nél veszi fel?',
          solution:
            'A számtani és mértani közép összefüggéséből: $\\frac{x + \\frac{9}{x}}{2} \\ge \\sqrt{x \\cdot \\frac{9}{x}} = 3$, tehát $x + \\frac{9}{x} \\ge 6$.\n\nEgyenlőség akkor van, ha $x = \\frac{9}{x}$, azaz $x = 3$. A legkisebb érték 6, az $x = 3$ helyen.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: legnagyobb terület',
          problem: 'Egy téglalap kerülete 40 cm. Mekkora lehet legfeljebb a területe?',
          solution:
            'Az oldalak $a$ és $b$, $a + b = 20$. A számtani és mértani közép összefüggéséből $\\sqrt{ab} \\le \\frac{a + b}{2} = 10$, így $ab \\le 100$. Egyenlőség $a = b = 10$ esetén. A legnagyobb terület 100 cm², a négyzet.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: harmonikus közép a hétköznapokban',
          problem:
            'Egy autó az A és B város közti utat 40 km/h átlagsebességgel teszi meg oda, vissza 60 km/h-val. Mekkora az egész út átlagsebessége?',
          solution:
            'Ha az út hossza $s$, az idő $\\frac{s}{40} + \\frac{s}{60} = \\frac{5s}{120}$, az össztávolság $2s$, az átlagsebesség $\\frac{2s}{5s/120} = 48$ km/h.\n\nEz a két sebesség harmonikus közepe: $\\frac{2 \\cdot 40 \\cdot 60}{100} = 48$ (kisebb, mint a számtani közép, 50).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli: mondja ki a számtani és mértani közép közötti összefüggést, bizonyítsa be, és mutasson alkalmazást.',
            'II. B feladat: szélsőérték-feladat, amelynél vagy a számtani és mértani közép összefüggésével, vagy másodfokú függvénnyel is célba érhetsz.',
            'Egyenlőtlenség bizonyítása: „Igazolja, hogy $a + \\frac{1}{a} \\ge 2$ minden pozitív $a$-ra.”',
          ],
          emelt: true,
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Minta bizonyítás',
          problem: 'Igazolja, hogy ha $a > 0$, akkor $a + \\frac{1}{a} \\ge 2$!',
          solution:
            'A számtani és mértani közép összefüggése $a$-ra és $\\frac{1}{a}$-ra: $\\frac{a + \\frac{1}{a}}{2} \\ge \\sqrt{a \\cdot \\frac{1}{a}} = 1$, tehát $a + \\frac{1}{a} \\ge 2$. Egyenlőség $a = 1$-nél van.\n\nMásik út: $a + \\frac{1}{a} - 2 = \\frac{(a - 1)^2}{a} \\ge 0$.',
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'A tétel csak **pozitív** (nemnegatív) számokra igaz: $a + \\frac{1}{a} \\ge 2$ negatív $a$-ra nem érvényes. A szélsőérték megadásához igazolni kell, hogy az egyenlőség tényleg elérhető (itt $x = 3$), különben csak korlátot adtál, nem minimumot.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Szélsőérték-feladatnál először keresd a „kétféle kapcsolat” alakot: ha az összeg adott és a szorzat érdekel, vagy a szorzat adott és az összeg. Az egyenlőség esete mindig az, amikor a két tag egyenlő.',
        },
      ],
      topicMatch: [
        'közepek',
        'számtani közép',
        'mértani közép',
        'harmonikus közép',
        'négyzetes közép',
        'számtani-mértani közép',
      ],
      quiz: [
        {
          question: 'Mennyi a 2 és 8 mértani közepe?',
          options: ['5', '4', '3,2', '16'],
          answer: 1,
          explanation:
            '$\\sqrt{2 \\cdot 8} = \\sqrt{16} = 4$. (A számtani közép 5, a harmonikus közép 3,2.)',
        },
        {
          question: 'Melyik a helyes nagyságrendi sorrend pozitív, különböző $a$ és $b$ esetén?',
          options: ['$H < G < A < Q$', '$G < H < A < Q$', '$H < A < G < Q$', '$Q < A < G < H$'],
          answer: 0,
          explanation:
            'A harmonikus a legkisebb, utána a mértani, a számtani, a legnagyobb a négyzetes közép.',
        },
        {
          question: 'Mikor egyenlő egymással a két pozitív szám számtani és mértani közepe?',
          options: [
            'soha',
            'ha a két szám egyenlő',
            'ha a két szám összege 2',
            'ha az egyik szám a másik kétszerese',
          ],
          answer: 1,
          explanation:
            'A bizonyításban $(\\sqrt{a} - \\sqrt{b})^2 = 0$ pontosan akkor áll fenn, ha $a = b$.',
        },
        {
          question: 'Mekkora az $x + \\frac{4}{x}$ legkisebb értéke, ha $x > 0$?',
          options: ['2', '8', '4', '5'],
          answer: 2,
          explanation:
            '$x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$, egyenlőség $x = 2$-nél.',
        },
        {
          question:
            'Egy autó ugyanazt az utat oda 30 km/h, vissza 60 km/h sebességgel teszi meg. Mekkora az átlagsebesség az egész úton?',
          options: ['45 km/h', '40 km/h', '36 km/h', '50 km/h'],
          answer: 1,
          explanation:
            'A két sebesség harmonikus közepe: $\\frac{2 \\cdot 30 \\cdot 60}{90} = 40$ km/h.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Számtani és mértani közép közötti egyenlőtlenség',
          url: wiki('Számtani és mértani közép közötti egyenlőtlenség'),
        },
        { label: 'Wikipédia: Közép (matematika)', url: wiki('Közép (matematika)') },
      ],
    },
  ],
};

export default unit;
