import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 2.1–2.5: Alapműveletek, természetes számok, racionális és valós számok, hatvány, gyök, logaritmus. */
const unit: GuideUnit = {
  id: 'szamelmelet-szamhalmazok',
  subject: 'matematika',
  order: 20,
  title: 'Számelmélet, számhalmazok, hatvány, gyök, logaritmus',
  requirementRef:
    '2.1 Alapműveletek, 2.2 A természetes számok halmaza, számelméleti ismeretek (2.2.1 Oszthatóság, 2.2.2 Számrendszerek), 2.3 Racionális és irracionális számok, 2.4 Valós számok, 2.5 Hatvány, gyök, logaritmus',
  intro:
    'A számolás alapjai: műveleti azonosságok, oszthatóság, prímek, lnko és lkkt, számrendszerek, a számhalmazok és a számegyenes, majd a hatvány, a gyök és a logaritmus azonosságai és a normálalak. Emelt szinten a bizonyítások is jönnek.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1, 2.2, 2.2.1, 2.2.2, 2.3, 2.4, 2.5). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'alapmuveletek-oszthatosag-szamrendszerek',
      subject: 'matematika',
      unitId: 'szamelmelet-szamhalmazok',
      title: 'Alapműveletek, oszthatósági szabályok, számrendszerek',
      level: 'both',
      requirement: {
        kozep:
          'Alapműveletek biztonságos elvégzése (zsebszámológéppel is), a műveleti azonosságok (kommutativitás, asszociativitás, disztributivitás); a 10 hatványaira és a 2, 3, 4, 5, 6, 8, 9 számokra vonatkozó oszthatósági szabályok, egyszerű oszthatósági feladatok; átírás 10-es alapú számrendszerből n alapú (n ≤ 9) számrendszerbe és vissza, helyiértékes írásmód',
        emelt:
          'Összetett oszthatósági feladatok; n alapú (n ≤ 9) számrendszerben felírt számok összeadása és kivonása',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Műveleti azonosságok**: $a + b = b + a$ és $ab = ba$ (kommutativitás); $(a + b) + c = a + (b + c)$ (asszociativitás); $a(b + c) = ab + ac$ (disztributivitás).',
            '**Műveleti sorrend**: zárójel, hatványozás, szorzás és osztás, végül összeadás és kivonás.',
            '**2-vel**: az utolsó jegy páros. **5-tel**: az utolsó jegy 0 vagy 5. **10, 100, 1000-rel**: a szám végén legalább 1, 2, 3 nulla áll.',
            '**3-mal** és **9-cel**: a jegyek összege osztható 3-mal, illetve 9-cel. **6-tal**: 2-vel és 3-mal is osztható.',
            '**4-gyel**: az utolsó két jegyből álló szám osztható 4-gyel. **8-cal**: az utolsó három jegyből álló szám osztható 8-cal.',
            '**Számrendszer**: $n$ alapú írásmódban a jegyek helyiértéke az $n$ hatványa, a jegyek $0$ és $n-1$ közöttiek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Alapműveletek okosan' },
        {
          kind: 'text',
          text: 'A műveleti azonosságokkal a fejszámolás gyorsabb és biztosabb. Az összeadás és a szorzás kommutatív és asszociatív, a **kivonás és az osztás nem**: $8 - 3 \\ne 3 - 8$, és $(16 : 4) : 2 \\ne 16 : (4 : 2)$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: számolás azonosságokkal',
          problem: 'Számítsa ki fejben: $25 \\cdot 37 \\cdot 4$, illetve $98 \\cdot 15$!',
          solution:
            'A szorzás kommutatív és asszociatív, ezért $25 \\cdot 37 \\cdot 4 = (25 \\cdot 4) \\cdot 37 = 100 \\cdot 37 = 3700$.\n\nA disztributivitással $98 \\cdot 15 = (100 - 2) \\cdot 15 = 1500 - 30 = 1470$.',
        },
        {
          kind: 'warning',
          text: 'A hatványozás megelőzi a szorzást, és a mínuszjel is számít: $-3^2 = -9$, de $(-3)^2 = 9$. Zsebszámológépnél is zárójelezd a negatív alapot.',
        },
        { kind: 'heading', text: 'Oszthatósági szabályok' },
        {
          kind: 'text',
          text: 'A szabályok a számjegyekből döntik el az oszthatóságot, osztás nélkül. A 4-es és 8-as szabály azon alapul, hogy a 100, illetve az 1000 osztható 4-gyel, illetve 8-cal, így csak a végződés számít.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: melyik számmal osztható a 3456?',
          problem: 'A 2, 3, 4, 6, 8, 9 közül melyekkel osztható a 3456?',
          solution:
            'Az utolsó jegy 6, páros, ezért osztható 2-vel.\n\nA jegyek összege $3 + 4 + 5 + 6 = 18$, ez osztható 3-mal és 9-cel is, tehát a szám is.\n\nAz utolsó két jegy 56, ez $4 \\cdot 14$, ezért a szám osztható 4-gyel. Az utolsó három jegy 456, ez $8 \\cdot 57$, ezért 8-cal is osztható.\n\nA 2-vel és a 3-mal is osztható, ezért 6-tal is. Mind a hat számmal osztható.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: hiányzó számjegy',
          problem: 'Milyen $x$ számjegyre lesz a $47x2$ négyjegyű szám osztható 9-cel?',
          solution:
            'A jegyek összege $4 + 7 + x + 2 = 13 + x$. Ennek 9 többszörösének kell lennie, és $x$ számjegy, ezért $13 + x = 18$, vagyis $x = 5$. Ellenőrzés: $4752 = 9 \\cdot 528$.',
        },
        { kind: 'heading', text: 'Számrendszerek' },
        {
          kind: 'text',
          text: 'A tízes számrendszerben a $3\\,204$ azt jelenti, hogy $3 \\cdot 10^3 + 2 \\cdot 10^2 + 0 \\cdot 10 + 4$. Más alapnál ugyanígy: az $n$ alapú számrendszerben a jegyek $0, 1, \\dots, n-1$, a helyiértékek $n$ hatványai.',
        },
        {
          kind: 'text',
          text: '**Átírás tízesből $n$ alapúba**: ismételten osztunk $n$-nel maradékkal, a maradékokat alulról felfelé olvassuk. **Visszaírás**: a jegyeket szorozzuk a helyiértékekkel, és összeadjuk.',
        },
        {
          kind: 'compare',
          title: 'Példák',
          columns: ['Átírás', 'Számolás'],
          rows: [
            {
              label: '$100$ kettes alapon',
              cells: ['$1100100_2$', '$100 = 64 + 32 + 4 = 2^6 + 2^5 + 2^2$'],
            },
            {
              label: '$500$ hetes alapon',
              cells: ['$1313_7$', '$500 = 1 \\cdot 343 + 3 \\cdot 49 + 1 \\cdot 7 + 3$'],
            },
            {
              label: '$2314_5$ tízesben',
              cells: ['$334$', '$2 \\cdot 125 + 3 \\cdot 25 + 1 \\cdot 5 + 4 = 334$'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Összeadás $n$ alapú számrendszerben** ugyanúgy megy, mint tízesben, csak $n$ elérésekor (nem 10-nél) kell átvinni. Például $243_5 + 134_5$: $3 + 4 = 7 = 1 \\cdot 5 + 2$, leírjuk a 2-t, átvitel 1; $4 + 3 + 1 = 8 = 1 \\cdot 5 + 3$, leírjuk a 3-at, átvitel 1; $2 + 1 + 1 = 4$. Az eredmény $432_5$. Ellenőrzés tízesben: $73 + 44 = 117 = 4 \\cdot 25 + 3 \\cdot 5 + 2$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kivonásnál** az átvitel helyett kölcsönvétel van: ha a kivonandó jegy nagyobb, a következő helyiértékről egy egységet hozunk, ami $n$-nel nagyobb értéket jelent. Mindig ellenőrizd az eredményt tízes alapon.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Összetett oszthatósági feladat',
          problem: 'Igazolja, hogy három egymást követő egész szám szorzata osztható 6-tal!',
          solution:
            'Három egymást követő szám közül pontosan egy osztható 3-mal, és legalább egy páros, tehát a szorzat osztható 2-vel és 3-mal is. A 2 és a 3 relatív prím, ezért a szorzat osztható $2 \\cdot 3 = 6$-tal.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: rövid feladat az oszthatóságról (hiányzó számjegy, melyik szám osztható 6-tal vagy 9-cel), egy szám átírása kettes vagy ötös számrendszerbe.',
            'II. A rész: szöveges feladat, amelynek egyik lépése az oszthatóság vagy a jegyek vizsgálata, például hány háromjegyű szám osztható 6-tal.',
            'Emelt szint: összetett oszthatósági feladat indoklással, számolás $n$ alapú számrendszerben, bizonyítás oszthatóságra.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a 4-es és a 8-as szabálynál az **utolsó jegyet** vizsgálni. A 4-nél az utolsó **két**, a 8-nál az utolsó **három** jegy számít. Másik hiba: a 6-os szabálynál csak a 3-as szabályt ellenőrizni; mindkét feltétel kell (2 és 3).',
        },
        {
          kind: 'tip',
          text: 'Számrendszeres átírásnál írd le a lépéseket (a maradékos osztásokat vagy a helyiértékes felbontást), és ellenőrizd visszaírással tízesbe. Az ellenőrzés kevés idő, és kiszűri a számolási hibát.',
        },
      ],
      topicMatch: ['oszthatóság', 'számjegyek', 'számrendszerek', 'paritás'],
      quiz: [
        {
          question: 'Melyik szám osztható 8-cal?',
          options: ['2 316', '5 104', '7 212', '9 330'],
          answer: 1,
          explanation:
            'A 8-as szabály szerint az utolsó három jegyből álló számnak kell oszthatónak lennie 8-cal: $104 = 8 \\cdot 13$. A $316$, $212$ és $330$ nem osztható 8-cal.',
        },
        {
          question: 'Hány $x$ számjegyre lesz a $4x7$ háromjegyű szám osztható 3-mal?',
          options: ['1', '2', '3', '4'],
          answer: 2,
          explanation:
            'A jegyek összege $11 + x$ legyen 3 többszöröse: $x = 1$, $x = 4$ vagy $x = 7$ (ekkor az összeg 12, 15, 18).',
        },
        {
          question: 'Hogyan írható fel a 100 kettes számrendszerben?',
          options: ['$1010100_2$', '$1100010_2$', '$1001100_2$', '$1100100_2$'],
          answer: 3,
          explanation: '$100 = 64 + 32 + 4 = 2^6 + 2^5 + 2^2$, ezért a jegyek: $1100100_2$.',
        },
        {
          question: 'Mennyi a $2314_5$ szám értéke tízes számrendszerben?',
          options: ['$314$', '$334$', '$434$', '$384$'],
          answer: 1,
          explanation: '$2 \\cdot 125 + 3 \\cdot 25 + 1 \\cdot 5 + 4 = 250 + 75 + 5 + 4 = 334$.',
        },
        {
          question: 'Mennyi $243_5 + 134_5$ az ötös számrendszerben?',
          options: ['$377_5$', '$432_5$', '$422_5$', '$1000_5$'],
          answer: 1,
          explanation:
            'Tízesben $73 + 44 = 117$, és $117 = 4 \\cdot 25 + 3 \\cdot 5 + 2$, ez $432_5$. Ötös alapon nem szerepelhet 5-nél nagyobb jegy, ezért a $377_5$ sem jó.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Oszthatóság', url: wiki('Oszthatóság') },
        { label: 'Wikipédia: Számrendszer', url: wiki('Számrendszer') },
        { label: 'Wikipédia: Műveleti sorrend', url: wiki('Műveleti sorrend') },
      ],
    },
    {
      id: 'prim-lnko-lkkt',
      subject: 'matematika',
      unitId: 'szamelmelet-szamhalmazok',
      title: 'Prímek, prímtényezős felbontás, lnko és lkkt',
      level: 'both',
      requirement: {
        kozep:
          'Az oszthatóság alapvető fogalmai (osztó, többszörös, prímszám, összetett szám); természetes számok prímtényezőkre bontása; adott számok legnagyobb közös osztója és legkisebb közös többszöröse, alkalmazás egyszerű szöveges feladatokban; a relatív prím számpár fogalma',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Osztó**: ha $a = b \\cdot k$ ($k$ egész), akkor $b$ osztója $a$-nak, és $a$ többszöröse $b$-nek. Jelölés: $b \\mid a$.',
            '**Prímszám**: olyan 1-nél nagyobb természetes szám, amelynek pontosan két pozitív osztója van (az 1 és önmaga). Az 1 **nem** prím. A 2 az egyetlen páros prím.',
            '**Összetett szám**: 1-nél nagyobb, nem prím szám.',
            '**Prímtényezős felbontás**: $360 = 2^3 \\cdot 3^2 \\cdot 5$.',
            '**lnko**: a közös prímtényezők közül a **kisebb** kitevőjűek szorzata. **lkkt**: az összes előforduló prímtényező a **nagyobb** kitevővel.',
            '**Relatív prímek**: két szám relatív prím, ha lnko-juk 1.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Prímek és felbontás' },
        {
          kind: 'text',
          text: 'Az 50 alatti prímek: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. Egy $n$ szám prímségét elég az $\\sqrt{n}$-nél nem nagyobb prímekkel való osztással ellenőrizni: ha ezek egyike sem osztója, $n$ prím.',
        },
        {
          kind: 'text',
          text: 'Az összetett számok prímtényezők szorzatára bonthatók. A felbontást az osztási szabályokkal, „létrás” osztással végezheted: $360 = 2 \\cdot 180 = 2 \\cdot 2 \\cdot 90 = 2^3 \\cdot 45 = 2^3 \\cdot 3^2 \\cdot 5$.',
        },
        { kind: 'heading', text: 'lnko és lkkt' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Adja meg a 360 és az 504 legnagyobb közös osztóját és legkisebb közös többszörösét!',
          solution:
            '$360 = 2^3 \\cdot 3^2 \\cdot 5$, $504 = 2^3 \\cdot 3^2 \\cdot 7$.\n\nlnko: a közös prímek a kisebb kitevővel, $2^3 \\cdot 3^2 = 72$.\n\nlkkt: minden prím a nagyobb kitevővel, $2^3 \\cdot 3^2 \\cdot 5 \\cdot 7 = 2520$.\n\nEllenőrzés: két szám esetén $\\text{lnko} \\cdot \\text{lkkt} = a \\cdot b$, és valóban $72 \\cdot 2520 = 181\\,440 = 360 \\cdot 504$.',
        },
        {
          kind: 'tip',
          text: 'Az lnko mindig osztója, az lkkt mindig többszöröse mindkét számnak. Ha az eredményed nem ilyen, hibáztál. Két szám esetén $\\text{lnko} \\cdot \\text{lkkt} = a \\cdot b$ is jó gyors ellenőrzés.',
        },
        { kind: 'heading', text: 'Mikor melyiket?' },
        {
          kind: 'compare',
          columns: ['lnko', 'lkkt'],
          rows: [
            {
              label: 'Szöveges jel',
              cells: ['szétosztás, egyenlő részekre bontás', 'együtt újra előfordul, találkozás'],
            },
            {
              label: 'Mit ad meg?',
              cells: [
                'a legnagyobb lehetséges csoport- vagy csomagméret',
                'a legkorábbi közös időpont vagy darabszám',
              ],
            },
            {
              label: 'Prímtényezők',
              cells: ['közösek, kisebb kitevővel', 'mind, nagyobb kitevővel'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Szöveges feladat: lnko',
          problem:
            '84 almát és 126 körtét egyforma, vegyes csomagokba osztunk szét úgy, hogy semmi sem marad. Legfeljebb hány csomag készíthető, és mi van egy csomagban?',
          solution:
            '$84 = 2^2 \\cdot 3 \\cdot 7$ és $126 = 2 \\cdot 3^2 \\cdot 7$, ezért $\\text{lnko}(84; 126) = 2 \\cdot 3 \\cdot 7 = 42$. Legfeljebb **42 csomag** készíthető, mindegyikben $84 : 42 = 2$ alma és $126 : 42 = 3$ körte van.',
        },
        {
          kind: 'example',
          title: 'Szöveges feladat: lkkt',
          problem:
            'Két busz ugyanabból a megállóból 8 órakor indul, az egyik 20, a másik 30 percenként. Mikor indulnak újra egyszerre?',
          solution:
            '$20 = 2^2 \\cdot 5$, $30 = 2 \\cdot 3 \\cdot 5$, $\\text{lkkt} = 2^2 \\cdot 3 \\cdot 5 = 60$. Újra egyszerre 60 perc múlva, **9 órakor** indulnak.',
        },
        {
          kind: 'text',
          text: '**Relatív prímek**: a 15 és a 28 relatív prímek, mert $15 = 3 \\cdot 5$ és $28 = 2^2 \\cdot 7$ között nincs közös prímtényező, lnko-juk 1. Két szám lehet relatív prím akkor is, ha egyik sem prím. Relatív prím számok lkkt-je a szorzatuk.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: két szám lnko-ja vagy lkkt-je, prímtényezős felbontás, annak eldöntése, hogy egy szám prím-e.',
            'II. A rész: szöveges (gyakorlati) feladat, ahol fel kell ismerni, hogy lnko-t vagy lkkt-t kell számolni: csomagolás, ütemezés, csempézés, találkozás.',
            'Relatív prím: állítás megfogalmazása és indoklása, például hogy két szomszédos pozitív egész szám mindig relatív prím.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a szövegből rossz műveletet választani. Ha **szétosztani** kell, az lnko; ha **találkozást, ismétlődést** keresnek, az lkkt. Ne feledd leírni a szöveges választ is: „legfeljebb 42 csomag készíthető”.',
        },
        {
          kind: 'tip',
          text: 'Prímtényezős felbontásnál mindig ellenőrizz szorzással, és ne felejtsd el, hogy az 1 nem prím, a 2 pedig prím.',
        },
      ],
      topicMatch: ['prímszámok', 'prímtényezős felbontás', 'osztók', 'számelmélet'],
      quiz: [
        {
          question: 'Mennyi a 48 és a 72 legnagyobb közös osztója?',
          options: ['12', '18', '24', '36'],
          answer: 2,
          explanation: '$48 = 2^4 \\cdot 3$ és $72 = 2^3 \\cdot 3^2$, az lnko $2^3 \\cdot 3 = 24$.',
        },
        {
          question: 'Mennyi a 8 és a 12 legkisebb közös többszöröse?',
          options: ['24', '48', '96', '4'],
          answer: 0,
          explanation: '$8 = 2^3$ és $12 = 2^2 \\cdot 3$, az lkkt $2^3 \\cdot 3 = 24$.',
        },
        {
          question: 'Melyik szám prím?',
          options: ['91', '59', '51', '57'],
          answer: 1,
          explanation:
            'A $91 = 7 \\cdot 13$, az $51 = 3 \\cdot 17$ és az $57 = 3 \\cdot 19$ összetett. Az 59-et a 2, 3, 5, 7 egyike sem osztja ($\\sqrt{59} < 8$), ezért prím.',
        },
        {
          question: 'Melyik számpár relatív prím?',
          options: ['$(12; 18)$', '$(14; 21)$', '$(15; 28)$', '$(16; 24)$'],
          answer: 2,
          explanation:
            'A $15 = 3 \\cdot 5$ és $28 = 2^2 \\cdot 7$ lnko-ja 1. A többi pár lnko-ja 6, 7, illetve 8.',
        },
        {
          question:
            'Két busz 8 órakor indul egyszerre, az egyik 20, a másik 30 percenként. Mikor indulnak újra egyszerre?',
          options: ['8:50', '9:00', '9:30', '10:00'],
          answer: 1,
          explanation: 'Az lkkt(20; 30) = 60 perc, tehát 9 órakor.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Prímszám', url: wiki('Prímszám') },
        { label: 'Wikipédia: Legnagyobb közös osztó', url: wiki('Legnagyobb közös osztó') },
        { label: 'Wikipédia: Legkisebb közös többszörös', url: wiki('Legkisebb közös többszörös') },
      ],
    },
    {
      id: 'szamelmeleti-bizonyitasok-emelt',
      subject: 'matematika',
      unitId: 'szamelmelet-szamhalmazok',
      title: 'Emelt számelmélet: alaptétel, bizonyítások, osztók száma',
      level: 'emelt',
      requirement: {
        emelt:
          'A számelmélet alaptétele; annak bizonyítása, hogy végtelen sok prímszám van; természetes számok pozitív osztóinak száma; annak eldöntése, hogy $\\sqrt{n}$ irracionális-e; a $\\sqrt{2}$ irracionalitásának bizonyítása; tizedestört alakban megadott racionális szám közönséges tört alakja',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**A számelmélet alaptétele**: minden 1-nél nagyobb természetes szám felbontható prímszámok szorzatára, és ez a felbontás a tényezők sorrendjétől eltekintve **egyértelmű**.',
            '**Osztók száma**: ha $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}$, akkor $n$ pozitív osztóinak száma $(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$.',
            '**Végtelen sok prím van** (indirekt bizonyítás).',
            '**$\\sqrt{n}$**: ha $n$ négyzetszám, egész, különben **irracionális**. A $\\sqrt{2}$ irracionalitása indirekt módon bizonyítható.',
            '**Tizedestört → tört**: véges tizedestörtnél a tizedesjegyek számának megfelelő 10-hatvány a nevező; szakaszosnál ismétlődő rész szerint szorzunk és kivonunk.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az osztók száma' },
        {
          kind: 'text',
          text: 'Az $n$ minden pozitív osztója úgy áll elő, hogy minden $p_i$ prímet a $0, 1, \\dots, a_i$ kitevők valamelyikével szerepeltetjük. Ez $a_i + 1$ lehetőség prímenként, és a lehetőségek szorzódnak.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Hány pozitív osztója van a 360-nak? És a 100-nak?',
          solution:
            '$360 = 2^3 \\cdot 3^2 \\cdot 5$, ezért $(3 + 1)(2 + 1)(1 + 1) = 4 \\cdot 3 \\cdot 2 = 24$ osztója van.\n\n$100 = 2^2 \\cdot 5^2$, tehát $(2 + 1)(2 + 1) = 9$ osztója van (1, 2, 4, 5, 10, 20, 25, 50, 100).',
        },
        { kind: 'heading', text: 'Végtelen sok prímszám van' },
        {
          kind: 'text',
          text: '**Bizonyítás (Eukleidész)**: tegyük fel, hogy csak véges sok prím van, $p_1, p_2, \\dots, p_k$. Legyen $N = p_1 p_2 \\cdots p_k + 1$. Az $N$ egyik $p_i$-vel sem osztható, mert mindegyikkel osztva 1 a maradék. Az $N$-nek viszont van prímosztója (ha prím, önmaga az, különben a prímfelbontásban szerepel), ez egy a felsoroltakon kívüli prím. Ez ellentmondás, tehát végtelen sok prím van.',
        },
        {
          kind: 'warning',
          text: 'Az $N$ nem feltétlenül prím, csak van a listán kívüli prímosztója. Például $2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1 = 30\\,031 = 59 \\cdot 509$ összetett. A bizonyításban ezt a két esetet is meg kell különböztetni.',
        },
        { kind: 'heading', text: 'Irracionális négyzetgyökök' },
        {
          kind: 'text',
          text: '**A $\\sqrt{2}$ irracionális.** Tegyük fel az ellenkezőjét: $\\sqrt{2} = \\frac{p}{q}$ egyszerűsített tört ($p, q$ pozitív egészek, relatív prímek). Négyzetre emelve $p^2 = 2q^2$, tehát $p^2$ páros, ezért $p$ is páros: $p = 2r$. Visszaírva $4r^2 = 2q^2$, azaz $q^2 = 2r^2$, így $q$ is páros. Akkor viszont $p$ és $q$ mindketten párosak, ami ellentmond az egyszerűsítettségnek. Tehát $\\sqrt{2}$ nem racionális.',
        },
        {
          kind: 'text',
          text: '**Általánosan**: ha $n$ négyzetszám (például 49), akkor $\\sqrt{n}$ egész szám, tehát racionális. Ha $n$ nem négyzetszám (például 10, 200), akkor $\\sqrt{n}$ irracionális. Hogy egy szám négyzetszám-e, a prímfelbontásból látszik: pontosan akkor, ha minden prím kitevője páros. Így $200 = 2^3 \\cdot 5^2$ nem négyzetszám, $\\sqrt{200}$ irracionális.',
        },
        { kind: 'heading', text: 'Tizedestört átírása törtté' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Írja fel közönséges tört alakban: $0{,}125$; $0{,}\\overline{36}$; $2{,}1\\overline{6}$!',
          solution:
            '$0{,}125 = \\frac{125}{1000} = \\frac{1}{8}$.\n\n$x = 0{,}\\overline{36}$: $100x = 36{,}\\overline{36}$, kivonva $99x = 36$, $x = \\frac{36}{99} = \\frac{4}{11}$.\n\n$x = 2{,}1\\overline{6}$: $10x = 21{,}\\overline{6}$ és $100x = 216{,}\\overline{6}$, kivonva $90x = 195$, $x = \\frac{195}{90} = \\frac{13}{6}$.',
        },
        {
          kind: 'example',
          title: 'Összetett oszthatósági feladat',
          problem: 'Igazolja, hogy $n^3 - n$ minden egész $n$-re osztható 6-tal!',
          solution:
            '$n^3 - n = n(n^2 - 1) = (n - 1) \\cdot n \\cdot (n + 1)$, három egymást követő egész szám szorzata. Közülük pontosan egy osztható 3-mal és legalább egy páros, ezért a szorzat osztható 2-vel és 3-mal. A 2 és a 3 relatív prím, így a szorzat osztható 6-tal.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt II. rész: egy feladat részeként oszthatósági vagy prímtulajdonságú állítás igazolása, osztók számának meghatározása, annak eldöntése, hogy egy négyzetgyök irracionális-e.',
            'Szóbeli tétel: a számelmélet alaptételének kimondása, annak bizonyítása, hogy végtelen sok prím van, vagy hogy $\\sqrt{2}$ irracionális, majd egy alkalmazás.',
            'Tizedestört alakban adott szám átírása közönséges törtté.',
          ],
        },
        {
          kind: 'warning',
          text: 'Indirekt bizonyításnál ki kell mondani a feltevést, és meg kell nevezni az ellentmondást. A „nem lehet” önmagában kevés. A $\\sqrt{2}$-nél a feltevés az egyszerűsített tört, az ellentmondás, hogy $p$ és $q$ is páros.',
        },
        {
          kind: 'tip',
          text: 'Osztók számánál a kitevőkhöz **egyet adj hozzá**, és szorozz. A 360-nál $3 + 1$, $2 + 1$, $1 + 1$, és nem $3 + 2 + 1$ lesz a szorzótényező.',
        },
      ],
      topicMatch: ['számelmélet', 'osztók', 'prímszámok', 'négyzetszám', 'bizonyítás'],
      quiz: [
        {
          question: 'Hány pozitív osztója van a 360-nak?',
          options: ['12', '18', '24', '30'],
          answer: 2,
          explanation: '$360 = 2^3 \\cdot 3^2 \\cdot 5$, ezért $(3 + 1)(2 + 1)(1 + 1) = 24$.',
          emelt: true,
        },
        {
          question: 'Hány pozitív osztója van a 100-nak?',
          options: ['6', '8', '9', '10'],
          answer: 2,
          explanation: '$100 = 2^2 \\cdot 5^2$, tehát $(2 + 1)(2 + 1) = 9$.',
          emelt: true,
        },
        {
          question: 'Melyik közönséges törttel egyenlő a $0{,}\\overline{27}$?',
          options: ['$\\frac{27}{100}$', '$\\frac{3}{11}$', '$\\frac{1}{4}$', '$\\frac{27}{90}$'],
          answer: 1,
          explanation:
            '$100x - x = 27{,}\\overline{27} - 0{,}\\overline{27} = 27$, tehát $x = \\frac{27}{99} = \\frac{3}{11}$.',
          emelt: true,
        },
        {
          question: 'Mi vezet ellentmondásra a $\\sqrt{2}$ irracionalitásának bizonyításában?',
          options: [
            'hogy $p$ páratlan',
            'hogy $q$ negatív',
            'hogy $p$ és $q$ is páros, pedig a tört egyszerűsített',
            'hogy $p^2 = 2q^2$ nem lehet egész',
          ],
          answer: 2,
          explanation:
            'A $p^2 = 2q^2$ egyenletből $p$, majd $q$ párossága következik, ez ellentmond annak, hogy $p$ és $q$ relatív prímek.',
          emelt: true,
        },
        {
          question: 'Melyik szám négyzetgyöke irracionális?',
          options: ['$\\sqrt{49}$', '$\\sqrt{121}$', '$\\sqrt{144}$', '$\\sqrt{200}$'],
          answer: 3,
          explanation:
            'A 49, 121 és 144 négyzetszám, négyzetgyökük 7, 11, 12. A $200 = 2^3 \\cdot 5^2$ nem négyzetszám (a 2 kitevője páratlan), ezért $\\sqrt{200}$ irracionális.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Számelmélet alaptétele', url: wiki('A számelmélet alaptétele') },
        {
          label: 'Wikipédia: Eukleidész tétele a prímszámokról',
          url: wiki('Eukleidész prímszámok végtelen'),
        },
        { label: 'Wikipédia: Irracionális szám', url: wiki('Irracionális szám') },
      ],
    },
    {
      id: 'racionalis-irracionalis-valos-szamok',
      subject: 'matematika',
      unitId: 'szamelmelet-szamhalmazok',
      title: 'Racionális, irracionális és valós számok',
      level: 'both',
      requirement: {
        kozep:
          'A racionális és irracionális számok definíciója és kapcsolatuk a tizedestörtekkel; a valós számkör felépítése (ℕ, ℤ, ℚ, ℚ*, ℝ), a valós számok és a számegyenes kapcsolata, számok ábrázolása a számegyenesen; nyílt és zárt intervallum; az abszolútérték definíciója',
        emelt: 'Adott műveletekre zárt számhalmazok',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Racionális szám**: felírható $\\frac{p}{q}$ alakban, ahol $p$ egész, $q$ egész és $q \\ne 0$. Tizedestört alakja **véges** vagy **végtelen szakaszos**.',
            '**Irracionális szám**: nem írható fel törtként. Tizedestört alakja végtelen, nem szakaszos (például $\\sqrt{2}$, $\\pi$).',
            '**Számhalmazok**: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. A $\\mathbb{Q}^*$ az irracionális számok halmaza, $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{Q}^*$.',
            '**Számegyenes**: minden valós számnak egy pont felel meg, és minden pont egy valós számot jelent.',
            '**Abszolútérték**: $|x| = x$, ha $x \\ge 0$, és $|x| = -x$, ha $x < 0$. Az $x$ távolsága a 0-tól.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A számhalmazok felépítése' },
        {
          kind: 'compare',
          title: 'Mit tartalmaznak?',
          columns: ['Jelölés és név', 'Példák'],
          rows: [
            { label: '$\\mathbb{N}$', cells: ['természetes számok', '$0, 1, 2, 3, \\dots$'] },
            {
              label: '$\\mathbb{Z}$',
              cells: ['egész számok', '$\\dots, -2, -1, 0, 1, 2, \\dots$'],
            },
            {
              label: '$\\mathbb{Q}$',
              cells: ['racionális számok', '$\\frac{3}{4}$, $-2{,}5$, $0{,}\\overline{3}$, $7$'],
            },
            {
              label: '$\\mathbb{Q}^*$',
              cells: ['irracionális számok', '$\\sqrt{2}$, $\\pi$, $\\sqrt{10}$'],
            },
            {
              label: '$\\mathbb{R}$',
              cells: ['valós számok', 'a racionális és az irracionális számok együtt'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Minden egész szám racionális ($7 = \\frac{7}{1}$), de nem minden racionális szám egész. Az irracionális számokat nem lehet véges vagy szakaszos tizedestörttel pontosan megadni, csak közelíteni: $\\sqrt{2} \\approx 1{,}414$.',
        },
        {
          kind: 'warning',
          text: 'A $3{,}14$ és a $\\frac{22}{7}$ **racionális**, csak közelítései a $\\pi$-nek. A $0{,}999\\ldots$ szakaszos tizedestört, racionális, és értéke pontosan 1.',
        },
        { kind: 'heading', text: 'Számegyenes és intervallumok' },
        {
          kind: 'text',
          text: 'A számegyenesen a $\\sqrt{2}$ pontosan megszerkeszthető: egy 1 egység oldalú négyzet átlójának hossza $\\sqrt{2}$ (Pitagorasz-tétel), ezt körzővel a 0-tól kimérhetjük. Az intervallumok a számegyenes összefüggő szakaszai:',
        },
        {
          kind: 'compare',
          columns: ['Jelölés', 'Jelentés'],
          rows: [
            {
              label: '$[a; b]$',
              cells: ['zárt intervallum', '$a \\le x \\le b$ (a végpontok benne vannak)'],
            },
            {
              label: '$]a; b[$',
              cells: ['nyílt intervallum', '$a < x < b$ (a végpontok nincsenek benne)'],
            },
            { label: '$[a; b[$', cells: ['balról zárt, jobbról nyílt', '$a \\le x < b$'] },
            {
              label: '$[a; \\infty[$',
              cells: ['végtelen intervallum', '$x \\ge a$ (a végtelen sosem tartozik hozzá)'],
            },
          ],
        },
        { kind: 'heading', text: 'Abszolútérték' },
        {
          kind: 'text',
          text: 'Az $|x|$ mindig nemnegatív. Például $|5| = 5$, $|-5| = 5$, $|0| = 0$. A $|a - b|$ az $a$ és $b$ távolsága a számegyenesen.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Számítsa ki: $|3 - 8| - |-2|$. Oldja meg: $|x - 2| = 3$!',
          solution:
            '$|3 - 8| = |-5| = 5$, és $|-2| = 2$, ezért az érték $5 - 2 = 3$.\n\nAz $|x - 2| = 3$ azt jelenti, hogy $x$ távolsága a 2-től 3, ezért $x = 5$ vagy $x = -1$.',
        },
        {
          kind: 'example',
          title: 'Intervallum megadása',
          problem:
            'Adja meg intervallummal azokat a valós számokat, amelyekre $x \\ge 1$ és $x < 5$!',
          solution: '$[1; 5[$: az 1 benne van (zárt oldal), az 5 nincs benne (nyílt oldal).',
        },
        { kind: 'heading', text: 'Zárt halmazok', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Egy számhalmaz **zárt egy műveletre**, ha a halmaz bármely két elemén elvégezve a műveletet, az eredmény is a halmazban van (ahol a művelet elvégezhető).',
        },
        {
          kind: 'compare',
          emelt: true,
          columns: ['Zárt', 'Nem zárt (ellenpélda)'],
          rows: [
            {
              label: '$\\mathbb{N}$',
              cells: ['összeadás, szorzás', 'kivonás: $2 - 5$; osztás: $1 : 2$'],
            },
            { label: '$\\mathbb{Z}$', cells: ['összeadás, kivonás, szorzás', 'osztás: $1 : 2$'] },
            {
              label: '$\\mathbb{Q}$',
              cells: ['összeadás, kivonás, szorzás, osztás (0-val nem)', 'gyökvonás: $\\sqrt{2}$'],
            },
            {
              label: '$\\mathbb{Q}^*$',
              cells: [
                'semelyik alapműveletre',
                '$\\sqrt{2} \\cdot \\sqrt{2} = 2$, $\\sqrt{2} + (-\\sqrt{2}) = 0$',
              ],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: melyik szám irracionális, melyik halmaz eleme egy adott szám, intervallum felírása vagy ábrázolása a számegyenesen.',
            'Igaz–hamis állítás a számhalmazokról („minden racionális szám egész”, „két irracionális szám összege irracionális”).',
            'Emelt szinten: zárt halmaz vizsgálata, ellenpélda adása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az intervallum végpontjának rossz zárójelezése, és a végtelennél zárt zárójel használata. Az állítások cáfolatához elég **egy ellenpélda**, például $\\sqrt{2} \\cdot \\sqrt{2} = 2$ cáfolja, hogy az irracionális számok szorzata mindig irracionális.',
        },
        {
          kind: 'tip',
          text: 'Számegyenesen az üres karika (o) a nyílt végpontot, a teli pont (●) a zárt végpontot jelöli. Ezt a vizsgán is használhatod.',
        },
      ],
      topicMatch: ['egész számok', 'abszolút érték'],
      quiz: [
        {
          question: 'Melyik szám irracionális?',
          options: ['$\\sqrt{16}$', '$\\frac{7}{3}$', '$\\sqrt{10}$', '$0{,}\\overline{45}$'],
          answer: 2,
          explanation:
            'A $\\sqrt{16} = 4$ egész, a $\\frac{7}{3}$ tört, a $0{,}\\overline{45}$ szakaszos tizedestört, így mind racionális. A 10 nem négyzetszám, ezért $\\sqrt{10}$ irracionális.',
        },
        {
          question: 'Mennyi $|3 - 8| - |-2|$ értéke?',
          options: ['$-7$', '$3$', '$7$', '$-3$'],
          answer: 1,
          explanation: '$|3 - 8| = 5$ és $|-2| = 2$, így $5 - 2 = 3$.',
        },
        {
          question: 'Melyik szám eleme a $]-2; 3]$ intervallumnak?',
          options: ['$-2$', '$4$', '$-3$', '$3$'],
          answer: 3,
          explanation:
            'A bal végpont nyílt, így a $-2$ nincs benne, a jobb végpont zárt, így a 3 benne van. A 4 és a $-3$ kívül esik.',
        },
        {
          question: 'Melyik intervallum jelöli az $1 \\le x < 5$ számokat?',
          options: ['$[1; 5]$', '$]1; 5[$', '$]1; 5]$', '$[1; 5[$'],
          answer: 3,
          explanation:
            'Az 1 benne van (zárt, szögletes zárójel), az 5 nincs benne (nyílt, fordított zárójel).',
        },
        {
          question: 'Melyik halmaz zárt a kivonásra?',
          options: [
            '$\\mathbb{N}$',
            '$\\mathbb{Z}$',
            'az irracionális számok',
            'a pozitív páratlan egészek',
          ],
          answer: 1,
          explanation:
            'Két egész szám különbsége mindig egész. Az $\\mathbb{N}$-ben $2 - 5 = -3$ kilép, az irracionálisoknál $\\sqrt{2} - \\sqrt{2} = 0$, a páratlanoknál $3 - 1 = 2$ kilép.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Valós számok', url: wiki('Valós szám') },
        { label: 'Wikipédia: Racionális szám', url: wiki('Racionális szám') },
        { label: 'Wikipédia: Abszolútérték', url: wiki('Abszolútérték') },
      ],
    },
    {
      id: 'hatvany-gyok-logaritmus-normalalak',
      subject: 'matematika',
      unitId: 'szamelmelet-szamhalmazok',
      title: 'Hatvány, gyök, logaritmus, normálalak',
      level: 'both',
      requirement: {
        kozep:
          'Hatványozás racionális kitevővel, a hatványozás azonosságai (bizonyítás konkrét alapra és pozitív egész kitevőre); a négyzetgyökvonás azonosságai; az n-edik gyök fogalma; a logaritmus fogalma, tetszőleges alapú logaritmus kiszámítása 10-es alapú logaritmussal; normálalak és számolás vele; kerekítés adott helyiértékre',
        emelt:
          'A permanencia elv; irracionális kitevőjű hatvány szemléletesen; a hatványozás azonosságainak bizonyítása egész kitevőre; a négyzetgyökvonás azonosságainak bizonyítása; a gyökvonás azonosságai; a szorzat, hányados és hatvány logaritmusának azonosságai és bizonyításuk; az áttérés szabálya más alapú logaritmusra és bizonyítása',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Hatvány**: $a^0 = 1$, $a^{-n} = \\frac{1}{a^n}$, $a^{\\frac{p}{q}} = \\sqrt[q]{a^p}$ ($a > 0$).',
            '**Azonosságok**: $a^n a^k = a^{n+k}$, $\\frac{a^n}{a^k} = a^{n-k}$, $(a^n)^k = a^{nk}$, $(ab)^n = a^n b^n$.',
            '**Négyzetgyök**: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ ($a, b \\ge 0$), de $\\sqrt{a^2} = |a|$.',
            '**Logaritmus**: $\\log_a b = x \\iff a^x = b$ ($a > 0$, $a \\ne 1$, $b > 0$). Az $\\lg$ a 10-es alapú logaritmus.',
            '**Áttérés**: $\\log_a b = \\frac{\\lg b}{\\lg a}$ (számológéphez).',
            '**Normálalak**: $a \\cdot 10^k$, ahol $1 \\le a < 10$ és $k$ egész.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            'Logaritmus azonosságai: $\\log_a(xy) = \\log_a x + \\log_a y$, $\\log_a \\frac{x}{y} = \\log_a x - \\log_a y$, $\\log_a x^k = k \\log_a x$.',
            '**Permanencia elv**: a hatványozás kiterjesztésekor az azonosságok érvényben maradnak.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hatványozás' },
        {
          kind: 'formula',
          tex: 'a^n \\cdot a^k = a^{n+k} \\qquad \\frac{a^n}{a^k} = a^{n-k} \\qquad (a^n)^k = a^{nk} \\qquad (ab)^n = a^n b^n',
        },
        {
          kind: 'formula',
          tex: 'a^0 = 1 \\ (a \\ne 0) \\qquad a^{-n} = \\frac{1}{a^n} \\qquad a^{\\frac{p}{q}} = \\sqrt[q]{a^p} \\ (a > 0)',
        },
        {
          kind: 'text',
          text: 'Az azonosság pozitív egész kitevőkre a hatvány definíciójából jön. Például $a^3 \\cdot a^2 = (a \\cdot a \\cdot a) \\cdot (a \\cdot a) = a^5$, mert összesen $3 + 2$ tényező szerepel.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egyszerűsítse: $\\frac{3^5 \\cdot 3^{-2}}{9}$, és számítsa ki: $8^{\\frac{2}{3}}$!',
          solution:
            '$\\frac{3^5 \\cdot 3^{-2}}{9} = \\frac{3^{3}}{3^2} = 3$.\n\n$8^{\\frac{2}{3}} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$.',
        },
        { kind: 'heading', text: 'Gyökvonás' },
        {
          kind: 'text',
          text: 'Az $a \\ge 0$ szám $n$-edik gyöke az a nemnegatív szám, amelynek $n$-edik hatványa $a$: $\\sqrt[n]{a} = b \\iff b^n = a$, $b \\ge 0$. A négyzetgyök azonosságai ($a, b \\ge 0$):',
        },
        {
          kind: 'formula',
          tex: '\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b} \\qquad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\ (b > 0) \\qquad \\sqrt{a^2} = |a|',
        },
        {
          kind: 'plot',
          title: 'A √(x²) függvény: azonos az |x|-szel',
          x: [-4, 4],
          y: [-1, 5],
          functions: [{ label: '√(x²) = |x|', fn: (x) => Math.sqrt(x * x) }],
        },
        {
          kind: 'warning',
          text: 'A $\\sqrt{(-5)^2} = \\sqrt{25} = 5$, és **nem** $-5$. A négyzetgyök mindig nemnegatív.',
        },
        {
          kind: 'example',
          title: 'Gyöktényező kihozása',
          problem: 'Egyszerűsítse: $\\sqrt{50} - \\sqrt{18}$!',
          solution:
            '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$ és $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$, ezért a különbség $5\\sqrt{2} - 3\\sqrt{2} = 2\\sqrt{2}$.',
        },
        { kind: 'heading', text: 'Logaritmus' },
        {
          kind: 'text',
          text: '$\\log_2 8 = 3$, mert $2^3 = 8$. Csak **pozitív** számnak van logaritmusa, az alap pozitív és 1-től különböző. Néhány érték: $\\lg 1000 = 3$, $\\lg 0{,}001 = -3$, $\\log_3 \\frac{1}{9} = -2$, $\\log_{\\frac{1}{2}} 8 = -3$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: áttérés 10-es alapra',
          problem: 'Számítsa ki három tizedesjegyre kerekítve: $\\log_2 20$!',
          solution:
            '$\\log_2 20 = \\frac{\\lg 20}{\\lg 2} \\approx \\frac{1{,}30103}{0{,}30103} \\approx 4{,}322$. Ellenőrzés: $2^4 = 16 < 20 < 32 = 2^5$, tehát a logaritmus 4 és 5 között van.',
        },
        { kind: 'heading', text: 'Normálalak és kerekítés' },
        {
          kind: 'text',
          text: 'Nagyon nagy és nagyon kicsi számokat normálalakban írunk: $a \\cdot 10^k$, ahol $1 \\le a < 10$ és $k$ egész. Például $123\\,000\\,000 = 1{,}23 \\cdot 10^8$ és $0{,}00045 = 4{,}5 \\cdot 10^{-4}$.',
        },
        {
          kind: 'text',
          text: 'Számolás: szorzásnál az $a$ részeket szorozzuk, a hatványkitevőket összeadjuk; osztásnál osztunk és kivonunk. Összeadásnál közös 10-hatványra hozunk. Az eredményt ismét normálalakra hozzuk.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'A Nap fénye $1{,}5 \\cdot 10^{11}$ m-t tesz meg a Földig, a fény sebessége $3 \\cdot 10^8$ m/s. Hány perc alatt ér ide?',
          solution:
            'Idő: $\\frac{1{,}5 \\cdot 10^{11}}{3 \\cdot 10^8} = 0{,}5 \\cdot 10^3 = 5 \\cdot 10^2 = 500$ s. Percben: $\\frac{500}{60} \\approx 8{,}3$ perc.',
        },
        {
          kind: 'text',
          text: '**Kerekítés adott helyiértékre**: nézd az utána következő jegyet; ha 5 vagy több, felfelé, ha kevesebb, lefelé kerekítünk. Például $2\\,849$ ezresre kerekítve $3000$; $3{,}14159$ századra kerekítve $3{,}14$; $0{,}0856$ tizedre kerekítve $0{,}1$.',
        },
        {
          kind: 'warning',
          text: 'Közbenső eredményeket ne kerekíts, csak a végén. A pontos érték (például gyökös vagy törtes alak) használatával elkerülheted a felhalmozódó hibát.',
        },
        { kind: 'heading', text: 'Emelt szint: azonosságok és bizonyítások', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: '**Permanencia elv**: a hatványozást úgy terjesztjük ki egész, majd racionális kitevőre, hogy a kitevők azonosságai érvényben maradjanak. Ebből adódik $a^0 = 1$ (mert $a^n \\cdot a^0 = a^n$), $a^{-n} = \\frac{1}{a^n}$ és $a^{\\frac{1}{n}} = \\sqrt[n]{a}$. **Irracionális kitevő** szemléletesen: a $2^{\\sqrt{2}}$ a $2^{1{,}4}$, $2^{1{,}41}$, $2^{1{,}414}$, … számok határa, értéke körülbelül $2{,}665$.',
        },
        {
          kind: 'formula',
          emelt: true,
          tex: '\\log_a(xy) = \\log_a x + \\log_a y \\qquad \\log_a \\frac{x}{y} = \\log_a x - \\log_a y \\qquad \\log_a x^k = k \\cdot \\log_a x',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Bizonyítás a szorzatra**: legyen $\\log_a x = u$ és $\\log_a y = v$, azaz $x = a^u$, $y = a^v$. Ekkor $xy = a^u \\cdot a^v = a^{u+v}$, vagyis $\\log_a(xy) = u + v$. A hányadosnál és a hatványnál is a definícióból és a kitevők azonosságából indulunk ki. **Áttérés bizonyítása**: ha $\\log_a b = x$, akkor $a^x = b$; mindkét oldal 10-es alapú logaritmusát véve $x \\cdot \\lg a = \\lg b$, így $x = \\frac{\\lg b}{\\lg a}$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Logaritmus azonosságai',
          problem: 'Számítsa ki: $\\log_6 2 + \\log_6 3$ és $\\log_2 12 - \\log_2 3$!',
          solution:
            '$\\log_6 2 + \\log_6 3 = \\log_6 6 = 1$.\n\n$\\log_2 12 - \\log_2 3 = \\log_2 \\frac{12}{3} = \\log_2 4 = 2$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: hatványok és gyökök egyszerűsítése, kiszámítása, logaritmus értéke ($\\log_3 81$, $\\lg 0{,}01$), számolás normálalakkal, kerekítés.',
            'II. A rész: szöveges feladat, amelyben nagy vagy kis számokkal (távolság, tömeg) kell számolni és az eredményt normálalakban megadni.',
            'Emelt szint: logaritmus-azonosságok alkalmazása, azonosság bizonyítása, a szóbelin a hatvány- vagy logaritmusazonosság kimondása és bizonyítása.',
            'A logaritmus- és exponenciális függvényeket, egyenleteket a „Függvények” egység tárgyalja.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: $(a + b)^2 = a^2 + b^2$, $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$, $\\sqrt{a^2} = a$ (helyesen $|a|$), és negatív számnak logaritmust venni. A normálalakban az $a$ szám 1 és 10 közé essen: $12 \\cdot 10^8$ még nem normálalak.',
        },
        {
          kind: 'tip',
          text: 'Logaritmusnál először írd át a definíciót: $\\log_3 81 = x \\iff 3^x = 81$, ebből $x = 4$. Ha számológéppel számolsz áttéréssel, a felírt képlet is pontot ér.',
        },
      ],
      topicMatch: ['hatványozás', 'gyökvonás', 'normálalak', 'kerekítés'],
      quiz: [
        {
          question: 'Mennyi $8^{\\frac{2}{3}}$ értéke?',
          options: ['4', '2', '16', '$\\frac{16}{3}$'],
          answer: 0,
          explanation: '$8^{\\frac{2}{3}} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$.',
        },
        {
          question: 'Mivel egyenlő $\\sqrt{50} - \\sqrt{18}$?',
          options: ['$\\sqrt{32}$', '$2$', '$8\\sqrt{2}$', '$2\\sqrt{2}$'],
          answer: 3,
          explanation:
            '$\\sqrt{50} = 5\\sqrt{2}$ és $\\sqrt{18} = 3\\sqrt{2}$, a különbség $2\\sqrt{2} \\approx 2{,}83$. A $\\sqrt{32} = 4\\sqrt{2}$ nem jó, mert a gyökök különbsége nem a számok különbségének gyöke.',
        },
        {
          question: 'Mennyi $\\lg 0{,}001$?',
          options: ['$3$', '$-3$', '$-2$', '$0{,}001$'],
          answer: 1,
          explanation: '$0{,}001 = 10^{-3}$, ezért a 10-es alapú logaritmusa $-3$.',
        },
        {
          question: 'Melyik a $0{,}00072$ normálalakja?',
          options: [
            '$72 \\cdot 10^{-5}$',
            '$7{,}2 \\cdot 10^{-3}$',
            '$7{,}2 \\cdot 10^{-4}$',
            '$0{,}72 \\cdot 10^{-3}$',
          ],
          answer: 2,
          explanation:
            'Normálalakban az első tényező 1 és 10 közötti: $0{,}00072 = 7{,}2 \\cdot 10^{-4}$. A $72 \\cdot 10^{-5}$ értéke ugyanennyi, de az első tényezője nem 1 és 10 közötti, tehát nem normálalak.',
        },
        {
          question: 'Mennyi $\\log_6 2 + \\log_6 3$?',
          options: ['$\\log_6 5$', '$1$', '$2$', '$0$'],
          answer: 1,
          explanation:
            'A szorzat logaritmusának azonossága szerint $\\log_6 (2 \\cdot 3) = \\log_6 6 = 1$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hatványozás', url: wiki('Hatványozás') },
        { label: 'Wikipédia: Logaritmus', url: wiki('Logaritmus') },
        { label: 'Wikipédia: Normálalak', url: wiki('Normálalak') },
      ],
    },
  ],
};

export default unit;
