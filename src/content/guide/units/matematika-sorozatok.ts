import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic: Sorozatok. */
const unit: GuideUnit = {
  id: 'sorozatok',
  subject: 'matematika',
  order: 35,
  title: 'Sorozatok',
  requirementRef:
    '1.2.1 Fogalmak, tételek és bizonyítások; 2.7.1 Százalékszámítás; 3.3 Sorozatok; 3.3.1 Számtani és mértani sorozatok; 3.3.2 Végtelen mértani sor; 3.3.3 Kamatos kamat, járadékszámítás',
  intro:
    'A sorozat fogalmától a számtani és mértani sorozaton és a kamatos kamaton át, emelt szinten a monotonitásig, korlátosságig, határértékig és a teljes indukcióig.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (1.2.1, 2.7.1, 3.3, 3.3.1, 3.3.2, 3.3.3). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'szamtani-sorozat',
      subject: 'matematika',
      unitId: 'sorozatok',
      title: 'A sorozat fogalma és a számtani sorozat',
      level: 'both',
      requirement: {
        kozep:
          'A számsorozat fogalma és megadási módjai (utasítás, képlet, rekurzív definíció); a számtani sorozat n-edik tagja és első n tagjának összege, az összegképlet bizonyítása; feladatok a számtani sorozat fogalmával és az a_n, S_n összefüggésekkel',
        emelt:
          'A számtani sorozat általános tagjára vonatkozó összefüggés levezetése; összetettebb feladatok számtani sorozatokkal',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **sorozat** olyan függvény, amelynek értelmezési tartománya a pozitív egész számok halmaza: $n \\mapsto a_n$. A tagok: $a_1, a_2, a_3, \\dots$',
            'Megadása: **képlettel** ($a_n = 3n - 2$) vagy **rekurzióval** (az első tag és egy szabály, amely a következőt az előzőből adja).',
            '**Számtani sorozat**: a szomszédos tagok különbsége állandó, ez a **differencia** $d$: $a_{n+1} = a_n + d$.',
            'n-edik tag: $a_n = a_1 + (n - 1)d$.',
            'Első $n$ tag összege: $S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n\\,(2a_1 + (n-1)d)}{2}$.',
            'Szomszédos tagokra: $a_n = \\frac{a_{n-1} + a_{n+1}}{2}$ (mindegyik tag a két szomszédja számtani közepe).',
          ],
        },
        {
          kind: 'plot',
          title: 'Az a_n = 3n − 2 számtani sorozat első nyolc tagja',
          x: [0, 9],
          y: [-2, 24],
          functions: [],
          points: [
            { x: 1, y: 1, label: 'a₁ = 1' },
            { x: 2, y: 4, label: 'a₂ = 4' },
            { x: 3, y: 7, label: 'a₃ = 7' },
            { x: 4, y: 10, label: 'a₄ = 10' },
            { x: 5, y: 13, label: 'a₅ = 13' },
            { x: 6, y: 16, label: 'a₆ = 16' },
            { x: 7, y: 19, label: 'a₇ = 19' },
            { x: 8, y: 22, label: 'a₈ = 22' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a sorozat?' },
        {
          kind: 'text',
          text: 'A sorozat egy **függvény**, csak az $x$ helyett itt az $n$ sorszám áll, és csak egész értékeket vehet fel. Ezért a grafikonja nem folytonos görbe, hanem **különálló pontok** sora: az $(n; a_n)$ pontok. Az ábrán látod, hogy a számtani sorozat pontjai egy egyenesen vannak. Ez nem véletlen: $a_n = dn + (a_1 - d)$ elsőfokú kifejezés $n$-ben.',
        },
        {
          kind: 'compare',
          columns: ['Explicit (képlet)', 'Rekurzív'],
          rows: [
            {
              label: 'Példa',
              cells: ['$a_n = 3n - 2$', '$a_1 = 1,\\ a_{n+1} = a_n + 3$'],
            },
            {
              label: 'Előny',
              cells: ['bármelyik tag közvetlenül kiszámolható', 'a sorozat szerkezetét mutatja'],
            },
            {
              label: 'Hátrány',
              cells: ['nem mindig adható meg egyszerűen', 'a századik tagig végig kell számolni'],
            },
          ],
        },
        { kind: 'heading', text: 'Az összegképlet' },
        {
          kind: 'text',
          text: 'Az összeget Gauss ötlete adja: az első és az utolsó tag összege ugyanannyi, mint a második és az utolsó előtti összege, és így tovább. Az $n$ tagból $\\frac{n}{2}$ ilyen pár van, ezért $S_n = \\frac{n}{2}(a_1 + a_n)$. Példa: $1 + 2 + \\dots + 100 = \\frac{100 \\cdot 101}{2} = 5050$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.',
          problem:
            'Egy számtani sorozat harmadik tagja 7, nyolcadik tagja 22. Adja meg az első tagját és a differenciáját, az n-edik tag képletét, és számolja ki az első 20 tag összegét!',
          solution:
            'A harmadik és a nyolcadik tag között 5 lépés van: $a_8 = a_3 + 5d$, azaz $22 = 7 + 5d$, ebből $d = 3$.\n\nAz első tag: $a_1 = a_3 - 2d = 7 - 6 = 1$.\n\nAz n-edik tag: $a_n = 1 + (n-1) \\cdot 3 = 3n - 2$.\n\nEllenőrzés: $a_3 = 7$, $a_8 = 22$, megfelel.\n\n$a_{20} = 3 \\cdot 20 - 2 = 58$, ezért $S_{20} = \\frac{20 \\cdot (1 + 58)}{2} = 10 \\cdot 59 = 590$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.',
          problem:
            'A 3 szám egy számtani sorozat három szomszédos tagja. Összegük 21, szorzatuk 315. Melyik ez a három szám?',
          solution:
            'Legyen a három szám $x - d$, $x$, $x + d$. Összegük $3x = 21$, tehát $x = 7$.\n\nSzorzatuk: $7(7 - d)(7 + d) = 7(49 - d^2) = 315$, ebből $49 - d^2 = 45$, $d^2 = 4$, $d = \\pm 2$.\n\nA számok: 5, 7, 9 (vagy fordított sorrendben 9, 7, 5). Ellenőrzés: $5 + 7 + 9 = 21$ és $5 \\cdot 7 \\cdot 9 = 315$.',
        },
        {
          kind: 'tip',
          text: 'Három szomszédos tagot érdemes $x - d$, $x$, $x + d$ alakban felvenni: az összeg egyszerűsödik. Négy tagnál $x - 3d$, $x - d$, $x + d$, $x + 3d$ a kényelmes jelölés.',
        },
        { kind: 'heading', text: 'Összegből a tag' },
        {
          kind: 'text',
          text: 'Ha csak az összegek ismertek, a tagot a különbségükből kapjuk: $a_1 = S_1$ és $n \\ge 2$ esetén $a_n = S_n - S_{n-1}$. Példa: ha $S_n = n^2 + 2n$, akkor $a_1 = 3$ és $a_n = n^2 + 2n - \\big((n-1)^2 + 2(n-1)\\big) = 2n + 1$. Ez $n = 1$-re is $3$-at ad, tehát a sorozat számtani, $d = 2$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: hány tagot kell összeadni?',
          problem:
            'Hány tagját kell összeadni az 5, 9, 13, 17, … sorozatnak, hogy az összeg 230 legyen?',
          solution:
            '$a_1 = 5$, $d = 4$, ezért $S_n = \\frac{n\\,(2 \\cdot 5 + (n-1) \\cdot 4)}{2} = \\frac{n(4n + 6)}{2} = 2n^2 + 3n$.\n\nA feltétel: $2n^2 + 3n = 230$, azaz $2n^2 + 3n - 230 = 0$. A megoldóképlet szerint $n = \\frac{-3 \\pm \\sqrt{9 + 1840}}{4} = \\frac{-3 \\pm 43}{4}$, tehát $n = 10$ vagy $n = -11{,}5$.\n\nCsak a pozitív egész $n = 10$ jó. Ellenőrzés: a 10. tag $5 + 9 \\cdot 4 = 41$, az összeg $\\frac{10 \\cdot (5 + 41)}{2} = 230$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: egy tag vagy a differencia kiszámítása két megadott tagból; egyszerű összeg.',
            'Szöveges feladat: lépcső, színpad ülésrend, napi növekvő edzésadag (számtani sorozat), kérdés az összeg vagy az n-edik tag.',
            'II. rész: számtani és mértani sorozat együtt szerepel (például három szám mindkét sorozat szomszédos tagja).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: $a_n = a_1 + n \\cdot d$ írása $(n-1)$ helyett. Mindig ellenőrizd az $n = 1$ esetet: ott $a_1$-nek kell kijönnie.',
        },
        {
          kind: 'tip',
          text: 'Szöveges feladatnál írd le először, mi $a_1$, mi $d$, és mit jelent az $n$. A javítókulcs a modell felállítására is ad pontot, nem csak a számolásra.',
        },
      ],
      topicMatch: ['számtani sorozat', '=sorozatok', 'sorozat összege', 'összegzés'],
      quiz: [
        {
          question: 'Egy számtani sorozatban $a_1 = 4$ és $d = 3$. Mennyi $a_{10}$?',
          options: ['27', '30', '31', '34'],
          answer: 2,
          explanation: '$a_{10} = 4 + 9 \\cdot 3 = 31$.',
        },
        {
          question: 'Mennyi a $2 + 4 + 6 + \\dots + 20$ összeg?',
          options: ['100', '110', '120', '210'],
          answer: 1,
          explanation: 'Számtani sorozat, 10 taggal: $S_{10} = \\frac{10(2 + 20)}{2} = 110$.',
        },
        {
          question: 'Melyik számtani sorozat?',
          options: ['3, 6, 12, 24', '1, 4, 9, 16', '10, 7, 4, 1', '2, 3, 5, 8'],
          answer: 2,
          explanation: 'A 10, 7, 4, 1 szomszédos tagjainak különbsége végig $-3$.',
        },
        {
          question:
            'Az $a_1 = 2$, $a_{n+1} = a_n + 5$ rekurzióval megadott sorozat negyedik tagja:',
          options: ['12', '17', '22', '32'],
          answer: 1,
          explanation: 'A tagok: 2, 7, 12, 17.',
        },
        {
          question: 'Egy sorozat első $n$ tagjának összege $S_n = n^2 + 2n$. Mennyi $a_5$?',
          options: ['11', '24', '35', '9'],
          answer: 0,
          explanation: '$a_5 = S_5 - S_4 = 35 - 24 = 11$.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Számtani sorozat', url: wiki('Számtani sorozat') },
        { label: 'Wikipédia: Sorozat (matematika)', url: wiki('Sorozat (matematika)') },
      ],
    },
    {
      id: 'mertani-sorozat',
      subject: 'matematika',
      unitId: 'sorozatok',
      title: 'Mértani sorozat',
      level: 'both',
      requirement: {
        kozep:
          'A mértani sorozat fogalma (hányados), n-edik tagja és első n tagjának összege, az összegképlet bizonyítása; feladatok a mértani sorozat fogalmával és az a_n, S_n összefüggésekkel',
        emelt:
          'A mértani sorozat általános tagjára vonatkozó összefüggés levezetése; a végtelen mértani sor fogalma és összege; összetett feladatok számtani és mértani sorozattal',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Mértani sorozat**: a szomszédos tagok hányadosa állandó, ez a **kvóciens** $q$: $a_{n+1} = a_n \\cdot q$.',
            'n-edik tag: $a_n = a_1 \\cdot q^{\\,n-1}$.',
            'Első $n$ tag összege ($q \\ne 1$): $S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1}$. Ha $q = 1$, akkor $S_n = n \\cdot a_1$.',
            'Szomszédos tagokra: $a_n^2 = a_{n-1} \\cdot a_{n+1}$ (a tag a szomszédai mértani közepe).',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            'Ha $|q| > 1$, a tagok abszolút értéke nő; ha $|q| < 1$, a tagok nullához tartanak.',
          ],
        },
        {
          kind: 'plot',
          title: 'Az a_n = 2 · 3ⁿ⁻¹ mértani sorozat első hat tagja',
          x: [0, 7],
          y: [-20, 500],
          functions: [],
          points: [
            { x: 1, y: 2, label: 'a₁ = 2' },
            { x: 2, y: 6, label: 'a₂ = 6' },
            { x: 3, y: 18, label: 'a₃ = 18' },
            { x: 4, y: 54, label: 'a₄ = 54' },
            { x: 5, y: 162, label: 'a₅ = 162' },
            { x: 6, y: 486, label: 'a₆ = 486' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az n-edik tag és a grafikon' },
        {
          kind: 'text',
          text: 'A mértani sorozat grafikonja az exponenciális függvény pontjaira illeszkedik: $a_n = \\frac{a_1}{q} \\cdot q^n$. Ezért, ha $q > 1$ és $a_1 > 0$, a pontok egyre meredekebben emelkednek (ahogy az ábrán), ha $0 < q < 1$, a pontok a vízszintes tengelyhez simulnak, ha $q < 0$, a tagok előjele váltakozik.',
        },
        {
          kind: 'compare',
          columns: ['Számtani', 'Mértani'],
          rows: [
            { label: 'Állandó', cells: ['a különbség ($d$)', 'a hányados ($q$)'] },
            { label: 'n-edik tag', cells: ['$a_1 + (n-1)d$', '$a_1 \\cdot q^{n-1}$'] },
            {
              label: 'Összeg',
              cells: ['$\\frac{n(a_1 + a_n)}{2}$', '$a_1 \\cdot \\frac{q^n - 1}{q - 1}$'],
            },
            {
              label: 'Grafikon',
              cells: ['egyenesen lévő pontok', 'exponenciális görbén lévő pontok'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.',
          problem:
            'Egy mértani sorozat második tagja 6, ötödik tagja 162. Adja meg az első tagját és a kvócienst, majd számolja ki az első 6 tag összegét!',
          solution:
            '$a_5 = a_2 \\cdot q^3$, azaz $162 = 6q^3$, ebből $q^3 = 27$, $q = 3$ (valós számok között a köbgyök egyértelmű).\n\nAz első tag: $a_1 = \\frac{a_2}{q} = \\frac{6}{3} = 2$.\n\nAz első 6 tag összege: $S_6 = 2 \\cdot \\frac{3^6 - 1}{3 - 1} = 3^6 - 1 = 728$.\n\nEllenőrzés összeadással: $2 + 6 + 18 + 54 + 162 + 486 = 728$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.',
          problem:
            'Három pozitív szám egy mértani sorozat szomszédos tagja. Összegük 14, szorzatuk 64. Melyik ez a három szám?',
          solution:
            'Legyenek a számok $\\frac{b}{q}$, $b$, $bq$. Szorzatuk $b^3 = 64$, tehát $b = 4$.\n\nÖsszegük: $\\frac{4}{q} + 4 + 4q = 14$, azaz $\\frac{4}{q} + 4q = 10$. Szorozzunk $q$-val: $4q^2 - 10q + 4 = 0$, vagyis $2q^2 - 5q + 2 = 0$. Ebből $q = \\frac{5 \\pm 3}{4}$, tehát $q = 2$ vagy $q = \\frac{1}{2}$.\n\nA számok: 2, 4, 8 (vagy fordított sorrendben 8, 4, 2). Ellenőrzés: $2 + 4 + 8 = 14$ és $2 \\cdot 4 \\cdot 8 = 64$.',
        },
        {
          kind: 'warning',
          text: 'Ha egy feladat szerint két tag között több lépés van, a kvóciens hatványként szerepel: $a_5 = a_2 \\cdot q^3$. A $q$ meghatározásakor gyököt kell vonni, páros kitevőnél ($q^2 = 4$) a $q = \\pm 2$ mindkét esetét vizsgáld meg, hacsak a szöveg nem zárja ki.',
        },
        { kind: 'heading', text: 'A végtelen mértani sor', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Ha $|q| < 1$, akkor $q^n \\to 0$, ezért az összegképletből az $n \\to \\infty$ esetben a **végtelen mértani sor összege** adódik:',
        },
        {
          kind: 'formula',
          emelt: true,
          tex: 'S = \\frac{a_1}{1 - q} \\qquad (|q| < 1)',
          caption: 'ha $|q| \\ge 1$, a sor nem konvergens (nincs véges összege)',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa 3.: végtelen sor',
          problem:
            'Egy labda 12 m magasról esik le, és minden visszapattanás után az előző magasság $\\frac{1}{3}$ részéig emelkedik fel. Mekkora a labda által megtett út, ha korlátlanul sokáig pattog?',
          solution:
            'Az első esés 12 m. Ezután minden pattanásnál felfelé és lefelé is megteszi ugyanazt a távot: a felfelé út 4 m, 4/3 m, 4/9 m, … (mértani sorozat, $a_1 = 4$, $q = \\frac{1}{3}$), és ugyanennyi lefelé.\n\nA pattanások utáni teljes út (fel és le): $2 \\cdot \\frac{4}{1 - \\frac13} = 2 \\cdot 6 = 12$ m.\n\nÖsszesen: $12 + 12 = 24$ m.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: kvóciens vagy egy tag kiszámítása, az összeg egyszerű esetben.',
            'Szöveges feladat: populáció, érték csökkenése, lejátszott játékok számának duplázódása; kérdés: hányadik tagtól lesz egy értéknél nagyobb.',
            'Vegyes feladat: három szám, amely az egyik sorrendben számtani, másikban mértani sorozat (összefüggő egyenletrendszer).',
            'Emelt: végtelen sor összege, tizedes tört átírása közönséges törtté.',
          ],
        },
        {
          kind: 'tip',
          text: '„Hányadik tagtól nagyobb” típusú kérdésnél logaritmust kell használni: $a_1 q^{n-1} > K$ esetén $n - 1 > \\frac{\\lg (K/a_1)}{\\lg q}$. Az eredményt egész számra, a feladat szövegének megfelelően kell kerekíteni.',
        },
        {
          kind: 'warning',
          text: 'Az összegképletnél gyakori a $q^n - 1$ és $q^{n-1} - 1$ összekeverése. Az $n$ tag összegében a kitevő $n$ (az utolsó tag $a_1 q^{n-1}$). Ellenőrizd két-három tagos példán, például $1 + 2 = 3$ esetén $q = 2$, $n = 2$: $\\frac{2^2 - 1}{2 - 1} = 3$.',
        },
      ],
      topicMatch: ['mértani sorozat'],
      quiz: [
        {
          question: 'Egy mértani sorozat első tagja 3, kvóciense 2. Mennyi a 7. tagja?',
          options: ['96', '384', '42', '192'],
          answer: 3,
          explanation: '$a_7 = 3 \\cdot 2^6 = 3 \\cdot 64 = 192$.',
        },
        {
          question: 'Mennyi az $1 + 3 + 9 + 27 + 81$ összeg?',
          options: ['111', '121', '131', '243'],
          answer: 1,
          explanation: '$S_5 = \\frac{3^5 - 1}{3 - 1} = \\frac{242}{2} = 121$.',
        },
        {
          question: 'Melyik mértani sorozat?',
          options: ['81, 27, 9, 3', '5, 10, 15, 20', '1, 2, 4, 7', '2, 4, 6, 8'],
          answer: 0,
          explanation: 'A 81, 27, 9, 3 hányadosa végig $\\frac{1}{3}$.',
        },
        {
          question:
            'Egy pozitív tagú mértani sorozatban $a_2 = 10$ és $a_4 = 40$. Mennyi a kvóciens?',
          options: ['1,5', '4', '2', '$\\sqrt{2}$'],
          answer: 2,
          explanation: '$a_4 = a_2 q^2$, azaz $q^2 = 4$. A tagok pozitívak, ezért $q = 2$.',
        },
        {
          question: 'Mennyi az $8 + 4 + 2 + 1 + \\dots$ végtelen sor összege?',
          options: ['12', '14', '16', 'nincs véges összege'],
          answer: 2,
          explanation: '$q = \\frac{1}{2}$, ezért $S = \\frac{8}{1 - \\frac12} = 16$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Mértani sorozat', url: wiki('Mértani sorozat') },
        { label: 'Wikipédia: Mértani sor', url: wiki('Mértani sor') },
      ],
    },
    {
      id: 'kamatos-kamat-szazalek',
      subject: 'matematika',
      unitId: 'sorozatok',
      title: 'Kamatos kamat és százalékos növekedés',
      level: 'both',
      requirement: {
        kozep:
          'A százalék fogalma és alkalmazása; kamatos kamat képlete, bármelyik ismeretlen adat kiszámítása; gyűjtőjáradék és törlesztőrészlet; megtakarítási, befektetési és hitelfelvételi feladatok',
        emelt:
          'Nincs külön emelt szintű követelmény ebben a témában; a középszintű anyag (kamatos kamat, gyűjtőjáradék, törlesztőrészlet) emelt szinten is része a vizsgának',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Ha egy mennyiség $p\\%$-kal **nő**, a szorzó $1 + \\frac{p}{100}$; ha $p\\%$-kal **csökken**, a szorzó $1 - \\frac{p}{100}$.',
            '**Kamatos kamat**: $K_n = K_0 \\cdot \\left(1 + \\frac{p}{100}\\right)^n$, ahol $K_0$ a kezdőtőke, $p$ a kamatláb, $n$ az évek száma. Ez mértani sorozat, $q = 1 + \\frac{p}{100}$.',
            'Egymás utáni változások szorzói **összeszorzódnak**, a százalékok nem adódnak össze.',
            'A „hány év alatt” kérdés **logaritmussal** oldható meg, és az eredményt a szöveg szerint kerekítjük.',
          ],
        },
        {
          kind: 'plot',
          title: '1 000 000 Ft évi 5%-os kamattal',
          x: [0, 11],
          y: [900000, 1700000],
          functions: [{ label: '1 000 000 · 1,05ˣ', fn: (x) => 1000000 * 1.05 ** x }],
          points: [
            { x: 0, y: 1000000, label: '0. év: 1 000 000 Ft' },
            { x: 5, y: 1276282, label: '5. év: kb. 1 276 282 Ft' },
            { x: 10, y: 1628895, label: '10. év: kb. 1 628 895 Ft' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szorzó, nem összeadás' },
        {
          kind: 'text',
          text: 'Ha a 20 000 Ft-os termék ára 15%-kal nő, az új ár $20\\,000 \\cdot 1{,}15 = 23\\,000$ Ft. Ha az ár 15%-kal csökken, $20\\,000 \\cdot 0{,}85 = 17\\,000$ Ft. A szorzó mindig az **új érték és a régi érték hányadosa**, ezért több változás szorzata adja a teljes változást.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: kamatos kamat',
          problem:
            'Egy 500 000 Ft-os betét évi 4%-os kamattal kamatozik, a kamatot évente tőkésítik. Mennyi lesz a számlán 8 év múlva? Hány százalékkal több ez a kezdőtőkénél?',
          solution:
            'A szorzó $1{,}04$, így $K_8 = 500\\,000 \\cdot 1{,}04^8 \\approx 500\\,000 \\cdot 1{,}368569 \\approx 684\\,285$ Ft.\n\nA növekedés mértéke: $1{,}04^8 \\approx 1{,}3686$, vagyis a betét kb. **36,9%**-kal nőtt.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: egymás utáni változások',
          problem:
            'Egy áru árát először 20%-kal emelték, majd az új árat 20%-kal csökkentették. Az eredeti árhoz képest hány százalékkal változott az ár?',
          solution:
            'A teljes szorzó: $1{,}2 \\cdot 0{,}8 = 0{,}96$. Tehát az ár az eredeti 96%-a lett, vagyis **4%-kal csökkent**.\n\nA +20% és −20% nem oltja ki egymást, mert a második változás már a megnövelt árra vonatkozik.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: csökkenő érték',
          problem:
            'Egy gép értéke 2 000 000 Ft, évente 10%-kal csökken az előző évi értékéhez képest. Mennyi az értéke 5 év múlva? Hány év múlva lesz az értéke az eredeti fele alatt?',
          solution:
            'A szorzó $0{,}9$, ezért 5 év múlva $2\\,000\\,000 \\cdot 0{,}9^5 = 2\\,000\\,000 \\cdot 0{,}59049 = 1\\,180\\,980$ Ft.\n\nA második kérdés: $0{,}9^n < 0{,}5$. Logaritmussal (a $\\lg 0{,}9$ negatív, ezért az egyenlőtlenség iránya megfordul): $n > \\frac{\\lg 0{,}5}{\\lg 0{,}9} \\approx 6{,}58$.\n\nTehát **7 év** múlva lesz az érték az eredeti fele alatt.',
        },
        {
          kind: 'warning',
          text: 'Az „éves kamatláb” és az „éves kamat” nem azonos a havi vagy negyedéves tőkésítéssel. Ha a feladat szerint a kamatot havonta írják jóvá, akkor a periódusonkénti szorzót és az időszakok számát kell használni (például 12 év alatt $n = 144$ hónap). Mindig olvasd el, mikor történik a tőkésítés.',
        },
        { kind: 'heading', text: 'Rendszeres betét' },
        {
          kind: 'text',
          text: 'Ha minden év végén ugyanannyit teszel a számlára, az egyes befizetések eltérő ideig kamatoznak, és az értékeik mértani sorozatot alkotnak. Az utolsó befizetés még nem kamatozik, az első $n - 1$ évig.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 4.: rendszeres megtakarítás',
          problem:
            'Valaki 3 éven át minden év végén 50 000 Ft-ot tesz egy számlára, amely évi 10%-kal kamatozik. Mennyi pénz lesz a számlán az utolsó befizetés után?',
          solution:
            'Az első befizetés 2 évig kamatozik, a második 1 évig, a harmadik nem kamatozik. Az összeg:\n\n$50\\,000 \\cdot 1{,}1^2 + 50\\,000 \\cdot 1{,}1 + 50\\,000 = 50\\,000(1{,}21 + 1{,}1 + 1)$.\n\nA zárójelben mértani sorozat áll ($a_1 = 1$, $q = 1{,}1$, 3 tag): $\\frac{1{,}1^3 - 1}{1{,}1 - 1} = \\frac{0{,}331}{0{,}1} = 3{,}31$.\n\nAz összeg: $50\\,000 \\cdot 3{,}31 = 165\\,500$ Ft. A befizetett összeg 150 000 Ft, a kamat tehát 15 500 Ft.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: százalékos változás, két egymás utáni változás eredője, kamatos kamat egy-két évre.',
            'II. rész: szöveges feladat bankbetétről, hitelről, népességnövekedésről; a kérdések: mennyi lesz, mennyi volt, hány év alatt, mekkora a kamatláb.',
            'Rendszeres betét vagy törlesztőrészlet (gyűjtőjáradék), a mértani összegképlet felismerése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Visszafelé számolásnál ne vond le a százalékot a végső értékből! Ha az ár 25%-os emelés után 15 000 Ft lett, az eredeti ár $\\frac{15\\,000}{1{,}25} = 12\\,000$ Ft, nem $15\\,000 \\cdot 0{,}75$.',
        },
        {
          kind: 'tip',
          text: 'A kamatlábat a $q = \\sqrt[n]{\\frac{K_n}{K_0}}$ gyökvonással kapod, az évek számát logaritmussal. A számolást két-három tizedes pontossággal tartsd, és csak a végén kerekíts (pénznél a feladat szerint egész forintra).',
        },
      ],
      topicMatch: ['százalékszámítás', 'kamatos kamat', 'kamat'],
      quiz: [
        {
          question: 'Mennyi lesz 200 000 Ft két év múlva évi 3%-os kamatos kamat mellett?',
          options: ['212 000 Ft', '206 000 Ft', '218 000 Ft', '212 180 Ft'],
          answer: 3,
          explanation: '$200\\,000 \\cdot 1{,}03^2 = 200\\,000 \\cdot 1{,}0609 = 212\\,180$ Ft.',
        },
        {
          question:
            'Egy mennyiséget 25%-kal növelnek, majd az eredményt 20%-kal csökkentik. Az eredetihez képest:',
          options: ['5%-kal nő', 'nem változik', '5%-kal csökken', '45%-kal nő'],
          answer: 1,
          explanation: 'A szorzók szorzata $1{,}25 \\cdot 0{,}8 = 1$.',
        },
        {
          question: 'Mi a szorzó, ha egy mennyiség 15%-kal csökken?',
          options: ['0,85', '0,15', '1,15', '0,75'],
          answer: 0,
          explanation: '$1 - 0{,}15 = 0{,}85$.',
        },
        {
          question:
            'Mennyi lesz 1000 Ft három év múlva évi 5%-os kamattal (egész forintra kerekítve)?',
          options: ['1150 Ft', '1158 Ft', '1160 Ft', '1050 Ft'],
          answer: 1,
          explanation: '$1000 \\cdot 1{,}05^3 = 1157{,}625$, ami 1158 Ft.',
        },
        {
          question:
            'Valaki 3 éven át minden év végén 50 000 Ft-ot tesz be évi 10%-os kamat mellett. Mennyi lesz a számlán az utolsó befizetés után?',
          options: ['150 000 Ft', '165 500 Ft', '166 550 Ft', '181 500 Ft'],
          answer: 1,
          explanation: '$50\\,000(1{,}21 + 1{,}1 + 1) = 50\\,000 \\cdot 3{,}31 = 165\\,500$ Ft.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Kamatos kamat', url: wiki('Kamatos kamat') },
        { label: 'Wikipédia: Százalékszámítás', url: wiki('Százalékszámítás') },
      ],
    },
    {
      id: 'sorozatok-tulajdonsagai-hatarertek',
      subject: 'matematika',
      unitId: 'sorozatok',
      title: 'Monotonitás, korlátosság, határérték',
      level: 'emelt',
      requirement: {
        emelt:
          'Sorozat jellemzése (monotonitás, korlátosság); a konvergencia szemléletes fogalma és a konvergens sorozat definíciója egyszerű sorozatokban; konvergens sorozatok összegének, különbségének, szorzatának és hányadosának határértéke',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Monoton növő**: $a_{n+1} \\ge a_n$ minden $n$-re; **szigorúan** monoton, ha egyenlőség nélkül teljesül. Vizsgálat: az $a_{n+1} - a_n$ előjele.',
            '**Korlátos**: van olyan $K$, hogy $|a_n| \\le K$ minden $n$-re (alulról és felülről is).',
            'A sorozat **határértéke** $A$, ha a tagok egyre közelebb kerülnek $A$-hoz: $\\lim_{n \\to \\infty} a_n = A$. Ha van véges határérték, a sorozat **konvergens**, különben **divergens**.',
            'Alapok: $\\frac{1}{n} \\to 0$; ha $|q| < 1$, akkor $q^n \\to 0$; ha $q > 1$, akkor $q^n \\to \\infty$.',
            'Törtekben a legnagyobb hatvánnyal osztunk el, és a $\\frac{c}{n^k}$ alakú tagok $0$-hoz tartanak.',
          ],
        },
        {
          kind: 'plot',
          title: 'Az a_n = (2n − 1)/(n + 1) sorozat tagjai: monoton nő, 2-höz tart',
          x: [0, 11],
          y: [0, 2.5],
          functions: [{ label: 'korlát: y = 2', fn: () => 2 }],
          points: [
            { x: 1, y: 0.5, label: 'a₁ = 0,5' },
            { x: 2, y: 1, label: 'a₂ = 1' },
            { x: 3, y: 1.25, label: 'a₃ = 1,25' },
            { x: 4, y: 1.4, label: 'a₄ = 1,4' },
            { x: 5, y: 1.5, label: 'a₅ = 1,5' },
            { x: 10, y: 19 / 11, label: 'a₁₀ ≈ 1,73' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Monotonitás' },
        {
          kind: 'text',
          text: 'A sorozat monotonitását két módon vizsgálhatod: a szomszédos tagok **különbségének** előjelével ($a_{n+1} - a_n$), vagy pozitív tagoknál a **hányadosukkal** ($\\frac{a_{n+1}}{a_n}$ az 1-hez képest).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.',
          problem:
            'Vizsgálja meg az $a_n = \\frac{2n - 1}{n + 1}$ sorozat monotonitását, korlátosságát és határértékét!',
          solution:
            'Monotonitás: $a_{n+1} - a_n = \\frac{2n + 1}{n + 2} - \\frac{2n - 1}{n + 1} = \\frac{(2n+1)(n+1) - (2n-1)(n+2)}{(n+2)(n+1)}$.\n\nA számláló: $(2n^2 + 3n + 1) - (2n^2 + 3n - 2) = 3$, így $a_{n+1} - a_n = \\frac{3}{(n+1)(n+2)} > 0$. A sorozat **szigorúan monoton nő**.\n\nKorlátosság: $a_n = \\frac{2(n+1) - 3}{n+1} = 2 - \\frac{3}{n+1} < 2$, és az első tag a legkisebb: $a_1 = 0{,}5$. Tehát $0{,}5 \\le a_n < 2$, a sorozat korlátos.\n\nHatárérték: $\\frac{3}{n+1} \\to 0$, ezért $\\lim a_n = 2$.',
        },
        { kind: 'heading', text: 'Határérték kiszámítása' },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.',
          problem:
            'Számítsa ki a határértékeket: a) $\\lim \\frac{3n + 1}{n + 2}$; b) $\\lim \\frac{2n^2 + n}{n^2 - 1}$; c) $\\lim \\frac{n + 4}{n^2 + 1}$!',
          solution:
            'Mindhárom törtben a nevező legnagyobb hatványával ($n$, illetve $n^2$) osztjuk a számlálót és a nevezőt.\n\na) $\\frac{3 + \\frac{1}{n}}{1 + \\frac{2}{n}} \\to \\frac{3}{1} = 3$.\n\nb) $\\frac{2 + \\frac{1}{n}}{1 - \\frac{1}{n^2}} \\to \\frac{2}{1} = 2$.\n\nc) $\\frac{\\frac{1}{n} + \\frac{4}{n^2}}{1 + \\frac{1}{n^2}} \\to \\frac{0}{1} = 0$.',
        },
        {
          kind: 'compare',
          title: 'Racionális törtek határértéke (a számláló és a nevező fokszáma)',
          columns: ['Határérték', 'Példa'],
          rows: [
            { label: 'számláló foka kisebb', cells: ['$0$', 'például $\\frac{n+4}{n^2+1}$'] },
            {
              label: 'fokszám egyenlő',
              cells: ['a főegyütthatók hányadosa', 'például $\\frac{3n+1}{n+2} \\to 3$'],
            },
            {
              label: 'számláló foka nagyobb',
              cells: ['nem konvergens', 'például $\\frac{n^2+1}{n+1} \\to \\infty$'],
            },
          ],
        },
        { kind: 'heading', text: 'Mértani sorozat és a határérték' },
        {
          kind: 'terms',
          items: [
            {
              term: '$|q| < 1$',
              text: '$q^n \\to 0$, a sorozat konvergens; például $\\left(\\frac{1}{2}\\right)^n \\to 0$.',
            },
            { term: '$q = 1$', text: 'a sorozat konstans, a határértéke 1.' },
            {
              term: '$q > 1$',
              text: '$q^n \\to \\infty$, a sorozat divergens, felülről nem korlátos.',
            },
            {
              term: '$q \\le -1$',
              text: 'a tagok előjele váltakozik, nincs határérték. (Például $(-1)^n$ korlátos, de nem konvergens.)',
            },
          ],
        },
        {
          kind: 'warning',
          text: 'A korlátosság nem jelent konvergenciát: a $(-1)^n$ sorozat tagjai $-1$ és $1$ között ugrálnak, korlátos, de divergens. Fordítva viszont igaz: minden konvergens sorozat korlátos, és a korlátos monoton sorozat konvergens.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Egy képlettel adott sorozatról kérdés: monoton-e, korlátos-e, mi a határértéke.',
            'Határérték számítása törtből (a legnagyobb hatvánnyal való osztás), vagy mértani sorozat részletösszegéből.',
            'Állítások igaz–hamis eldöntése indoklással (például „minden korlátos sorozat konvergens”).',
          ],
        },
        {
          kind: 'warning',
          text: 'A monotonitást nem elég néhány tag kiszámításával „megmutatni”. Az $a_{n+1} - a_n$ előjelét **minden** $n$-re igazolnod kell, vagy a viselkedést kell általánosan megindokolnod.',
        },
        {
          kind: 'tip',
          text: 'Hamis állítás cáfolásához egy jól választott ellenpélda elég: a $(-1)^n$ cáfolja, hogy „minden korlátos sorozat konvergens”, az $a_n = n$ pedig azt, hogy „minden monoton sorozat korlátos”.',
        },
      ],
      topicMatch: ['=határérték', 'sorozatok határértéke', 'monotonitás', 'korlátosság'],
      quiz: [
        {
          question: 'Mennyi a $\\lim \\frac{4n + 1}{2n - 3}$ határérték?',
          options: ['4', '1', '2', '$\\infty$'],
          answer: 2,
          explanation:
            'Elosztjuk $n$-nel: $\\frac{4 + \\frac1n}{2 - \\frac3n} \\to \\frac{4}{2} = 2$.',
        },
        {
          question: 'Melyik állítás igaz az $a_n = (-1)^n$ sorozatra?',
          options: [
            'monoton és konvergens',
            'korlátos és konvergens',
            'korlátos, de nem konvergens',
            'nem korlátos, de konvergens',
          ],
          answer: 2,
          explanation: 'A tagok $1$ és $-1$ között váltakoznak: korlátos, de nincs határértéke.',
        },
        {
          question: 'Mennyi a $\\lim \\left(\\frac{1}{2}\\right)^n$?',
          options: ['0', '1', '$\\frac12$', '$\\infty$'],
          answer: 0,
          explanation: 'Ha $|q| < 1$, akkor $q^n \\to 0$.',
        },
        {
          question: 'Az $a_n = \\frac{n - 1}{n}$ sorozatra igaz, hogy:',
          options: [
            'szigorúan monoton csökkenő',
            'szigorúan monoton nő, és a határértéke 1',
            'nem korlátos',
            'divergens',
          ],
          answer: 1,
          explanation:
            '$a_n = 1 - \\frac{1}{n}$: az $\\frac{1}{n}$ csökken, ezért $a_n$ nő, és $\\frac{1}{n} \\to 0$ miatt a határérték 1.',
        },
        {
          question: 'Mennyi a $\\lim \\frac{n^2 + 1}{n + 1}$?',
          options: ['1', '0', '$\\infty$ (nincs véges határértéke)', '$-1$'],
          answer: 2,
          explanation:
            'A számláló foka nagyobb: $\\frac{n + \\frac1n}{1 + \\frac1n}$, a számláló minden határon túl nő.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Sorozat határértéke', url: wiki('Sorozat határértéke') },
        { label: 'Wikipédia: Konvergens sorozat', url: wiki('Konvergens sorozat') },
      ],
    },
    {
      id: 'teljes-indukcio',
      subject: 'matematika',
      unitId: 'sorozatok',
      title: 'Teljes indukció',
      level: 'emelt',
      requirement: {
        emelt:
          'A teljes indukció bizonyítási típus ismerete; példa mondása alkalmazására (a direkt és indirekt bizonyítás, a skatulyaelv mellett)',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **teljes indukció** olyan bizonyítás, amellyel egy állítást minden pozitív egész $n$-re igazolunk.',
            '**1. lépés (alapeset)**: az állítás igaz $n = 1$-re (vagy a legkisebb szóba jövő $n$-re).',
            '**2. lépés (öröklődés)**: ha az állítás igaz valamelyik $n = k$-ra (**indukciós feltevés**), akkor igaz $n = k + 1$-re is.',
            'A kettőből következik: igaz 1-re, ezért 2-re, ezért 3-ra, és így tovább minden $n$-re.',
            'Tipikus témák: összegképletek, oszthatóság, egyenlőtlenségek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az érvelés lényege' },
        {
          kind: 'text',
          text: 'Képzelj el egy dominósort: ha az első dominó eldől (alapeset), és minden dominó eldöntése után a következő is eldől (öröklődés), akkor az összes eldől. A teljes indukció ugyanezt mondja ki az állításokra. **Mindkét lépés kell**: öröklődés nélkül az alapeset csak egyetlen esetet igazol, alapeset nélkül az öröklődés nem indul el.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: összegképlet',
          problem:
            'Igazolja, hogy minden pozitív egész $n$-re $1 + 3 + 5 + \\dots + (2n - 1) = n^2$!',
          solution:
            '**Alapeset**: $n = 1$ esetén a bal oldal $1$, a jobb oldal $1^2 = 1$. Egyenlő.\n\n**Öröklődés**: tegyük fel, hogy valamely $k$-ra igaz: $1 + 3 + \\dots + (2k - 1) = k^2$. Igazoljuk $k + 1$-re. A bal oldal:\n\n$1 + 3 + \\dots + (2k-1) + (2(k+1) - 1) = k^2 + (2k + 1)$.\n\nEz egy teljes négyzet: $k^2 + 2k + 1 = (k+1)^2$, ami pontosan a jobb oldal $n = k + 1$-re. Az állítás tehát örökli a tulajdonságot, és az indukció szerint minden $n$-re igaz.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: oszthatóság',
          problem: 'Igazolja, hogy minden pozitív egész $n$-re a $4^n + 15n - 1$ osztható 9-cel!',
          solution:
            '**Alapeset**: $n = 1$ esetén $4 + 15 - 1 = 18 = 9 \\cdot 2$, osztható 9-cel.\n\n**Öröklődés**: tegyük fel, hogy $4^k + 15k - 1$ osztható 9-cel. Ekkor\n\n$4^{k+1} + 15(k+1) - 1 = 4 \\cdot 4^k + 15k + 14$.\n\nKihasználjuk a feltevést: $4(4^k + 15k - 1) = 4 \\cdot 4^k + 60k - 4$. A kettő különbsége:\n\n$\\big(4 \\cdot 4^k + 15k + 14\\big) - \\big(4 \\cdot 4^k + 60k - 4\\big) = -45k + 18 = 9(2 - 5k)$.\n\nTehát a $k + 1$-hez tartozó szám $4 \\cdot (\\text{9-cel osztható}) + 9(2 - 5k)$, azaz két 9-cel osztható szám összege. Az állítás minden $n$-re igaz.',
        },
        {
          kind: 'tip',
          text: 'Az öröklődési lépésben mindig jelöld meg, hol használod az indukciós feltevést. Összegeknél a $k$-adik összeget cseréld ki a feltevés szerinti értékre, oszthatóságnál pedig a $k+1$-edik kifejezést alakítsd úgy, hogy tartalmazza a $k$-adikat.',
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az öröklődés lépésben azt „bizonyítani” az $n = k + 1$ esetre, amit bizonyítani kell, vagyis az igazolandó egyenlőséget kiindulásként használni. A bal oldalból indulj, és alakítsd át a jobb oldalra.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű II. rész feladat része: „Igazolja teljes indukcióval, hogy …”.',
            'Összegre vonatkozó képlet (például $1 + 2 + \\dots + n$, négyzetösszeg) vagy oszthatósági állítás.',
            'Néha rekurzív sorozat explicit képletének igazolása indukcióval.',
          ],
        },
        {
          kind: 'example',
          title: 'Mintamegoldás vázlata',
          problem:
            'Igazolja, hogy $1 + 2 + 3 + \\dots + n = \\frac{n(n+1)}{2}$ minden pozitív egész $n$-re!',
          solution:
            '1. **Alapeset**: $n = 1$: bal oldal $1$, jobb oldal $\\frac{1 \\cdot 2}{2} = 1$.\n\n2. **Feltevés**: $1 + 2 + \\dots + k = \\frac{k(k+1)}{2}$.\n\n3. **Lépés**: $1 + 2 + \\dots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1) = \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$, ami az állítás $n = k+1$-re.\n\n4. **Következtetés**: az állítás igaz minden pozitív egész $n$-re.',
        },
        {
          kind: 'tip',
          text: 'A javítókulcs jellemzően külön pontot ad az alapesetre, az indukciós feltevés kimondására, a lépés helyes levezetésére és a befejező következtetésre. Mind a négyet írd le, még ha rövid is.',
        },
      ],
      topicMatch: ['teljes indukció'],
      quiz: [
        {
          question: 'Mi a teljes indukció két fő lépése?',
          options: [
            'a bal és a jobb oldal külön kiszámítása',
            'ellenpélda keresése és annak cáfolata',
            'alapeset és öröklődés (ha $k$-ra igaz, akkor $k+1$-re is)',
            'két különböző $n$ ellenőrzése',
          ],
          answer: 2,
          explanation:
            'Az alapeset indítja a láncot, az öröklődés biztosítja, hogy az igazság továbbadódik.',
        },
        {
          question: 'Mi az indukciós feltevés a $4^n + 15n - 1$ oszthatóságának igazolásánál?',
          options: [
            'hogy $4^{k+1} + 15(k+1) - 1$ osztható 9-cel',
            'hogy a kifejezés 18',
            'hogy $n = 1$',
            'hogy $4^k + 15k - 1$ osztható 9-cel',
          ],
          answer: 3,
          explanation:
            'A feltevés az állítás egy tetszőleges $k$-ra; ebből kell $k + 1$-re következtetni.',
        },
        {
          question: 'Az $1 + 3 + \\dots + (2k-1) = k^2$ feltevésből mit kapunk $k+1$-re?',
          options: ['$k^2 + 2k - 1$', '$k^2 + 2k + 1 = (k+1)^2$', '$k^2 + (k+1)$', '$2k^2$'],
          answer: 1,
          explanation: 'A következő tag $2(k+1) - 1 = 2k + 1$, és $k^2 + 2k + 1 = (k+1)^2$.',
        },
        {
          question: 'Igaz-e, hogy $4^n + 15n - 1$ osztható 9-cel, ha $n = 2$?',
          options: [
            'nem, az érték 45, de nem osztható 9-cel',
            'igen, az érték 45',
            'igen, az érték 36',
            'nem, az érték 31',
          ],
          answer: 1,
          explanation: '$16 + 30 - 1 = 45 = 9 \\cdot 5$.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Teljes indukció', url: wiki('Teljes indukció') },
        { label: 'Wikipédia: Matematikai indukció', url: wiki('Matematikai indukció') },
      ],
    },
  ],
};

export default unit;
