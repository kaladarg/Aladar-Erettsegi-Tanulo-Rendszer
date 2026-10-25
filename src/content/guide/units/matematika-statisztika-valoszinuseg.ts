import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic: Valószínűség-számítás, statisztika. */
const unit: GuideUnit = {
  id: 'statisztika-valoszinuseg',
  subject: 'matematika',
  order: 50,
  title: 'Statisztika és valószínűség-számítás',
  requirementRef: '5.1 Leíró statisztika; 5.2 A valószínűség-számítás elemei',
  intro:
    'Adatok rendszerezése és ábrázolása, átlag, medián, módusz, szórás, kvartilisek és sodrófa-diagram; majd a valószínűség alapjai: klasszikus és geometriai modell, mintavétel, várható érték, emelt szinten binomiális eloszlás és feltételes valószínűség.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (5.1, 5.2). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'statisztikai-adatok-diagramok',
      subject: 'matematika',
      unitId: 'statisztika-valoszinuseg',
      title: 'Adatok rendszerezése és diagramok',
      level: 'both',
      requirement: {
        kozep:
          'Adathalmaz szemléltetése, táblázatba rendezése, táblázatból adatok feldolgozása; véletlenszerű mintavétel; kör-, oszlop- és sodrófa-diagram készítése és leolvasása; diagramtípus választása; grafikus manipulációk felismerése; osztályba sorolás, gyakorisági diagram, relatív gyakoriság',
        emelt: 'Adathalmazok összehasonlítása sodrófa-diagramok alapján',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Gyakoriság**: hányszor fordul elő egy érték. **Relatív gyakoriság**: a gyakoriság osztva az adatok számával (törtként vagy százalékban).',
            'A relatív gyakoriságok összege mindig **1** (azaz 100%).',
            '**Osztályba sorolás**: sok különböző érték esetén az adatokat intervallumokba (osztályokba) csoportosítjuk, és az osztályok gyakoriságát nézzük.',
            '**Kördiagram**: az egész részekre bontása; a körcikk középponti szöge $360^\\circ \\cdot$ relatív gyakoriság.',
            '**Oszlopdiagram**: értékek vagy gyakoriságok összehasonlítása. **Sodrófa-diagram**: az adatok eloszlásának jellemzése (lásd a harmadik leckét).',
            '**Véletlenszerű mintavétel**: a mintába minden elem egyenlő eséllyel kerülhet be, így a minta jól képviseli az egészet.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Adatok táblázatba rendezése' },
        {
          kind: 'text',
          text: 'Egy 20 fős csoport témazáró dolgozatának jegyei: a gyakorisági táblázatból minden fontos adat kiolvasható.',
        },
        {
          kind: 'compare',
          columns: ['Gyakoriság (fő)', 'Relatív gyakoriság és körcikk'],
          rows: [
            { label: 'Jegy: 1', cells: ['2', '0,10 = 10%, $36^\\circ$'] },
            { label: 'Jegy: 2', cells: ['3', '0,15 = 15%, $54^\\circ$'] },
            { label: 'Jegy: 3', cells: ['6', '0,30 = 30%, $108^\\circ$'] },
            { label: 'Jegy: 4', cells: ['5', '0,25 = 25%, $90^\\circ$'] },
            { label: 'Jegy: 5', cells: ['4', '0,20 = 20%, $72^\\circ$'] },
          ],
        },
        {
          kind: 'text',
          text: 'Az összes gyakoriság $2 + 3 + 6 + 5 + 4 = 20$, a körcikkek szögeinek összege $360^\\circ$. Az átlagot is a táblázatból számoljuk: $\\frac{1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 6 + 4 \\cdot 5 + 5 \\cdot 4}{20} = \\frac{66}{20} = 3{,}3$.',
        },
        { kind: 'heading', text: 'Osztályba sorolás' },
        {
          kind: 'text',
          text: 'Ha az adatok sokfélék (például testmagasságok, pontszámok), az értékeket egyforma szélességű intervallumokba soroljuk, például 0–9, 10–19, 20–29 pont. A **gyakorisági diagram** (hisztogram) oszlopai az osztályok gyakoriságát mutatják. Az osztályok ne fedjék át egymást, és minden adat pontosan egybe essen.',
        },
        { kind: 'heading', text: 'Melyik diagramot válaszd?' },
        {
          kind: 'compare',
          columns: ['Diagram', 'Mire jó?'],
          rows: [
            {
              label: 'Kördiagram',
              cells: ['részek az egészből', 'költségvetés, szavazati arányok'],
            },
            {
              label: 'Oszlopdiagram',
              cells: ['értékek, gyakoriságok összehasonlítása', 'jegyek eloszlása, havi adatok'],
            },
            {
              label: 'Sodrófa-diagram',
              cells: ['az adatok szóródása, több adathalmaz összevetése', 'két osztály pontszámai'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A választást indokolni is tudni kell: például egy részarány szemléltetésére a kördiagram természetes, két adathalmaz szóródásának összehasonlítására a sodrófa-diagram.',
        },
        { kind: 'heading', text: 'Grafikus manipulációk' },
        {
          kind: 'keypoints',
          items: [
            '**Csonkolt tengely**: ha az oszlopdiagram függőleges tengelye nem nullánál kezdődik, az oszlopok magasságának aránya nem egyezik az értékek arányával, a különbség látszólag nagyobb.',
            '**Egyenetlen skála vagy osztályszélesség**: a diagram torzít, ha a tengelybeosztás vagy az osztályok szélessége nem egyenletes.',
            '**Térhatású (3D) ábra**: a dőlés miatt az elöl lévő részek nagyobbnak látszanak.',
          ],
        },
        {
          kind: 'tip',
          text: 'Javítás: a tengelyt nullától indítod, egyenletes skálát használsz, és síkbeli ábrát rajzolsz. Ez a „javítsa a diagramot” feladat jellemző megoldása.',
        },
        { kind: 'heading', text: 'Mintavétel' },
        {
          kind: 'text',
          text: 'Nagy sokaságot (például egy ország lakosait) nem tudunk teljesen megkérdezni, ezért mintát veszünk. A minta csak akkor ad jó képet az egészről, ha **véletlenszerűen** választjuk ki, vagyis minden elemnek egyenlő esélye van bekerülni. Ha csak a barátainkat kérdezzük meg, a minta torzított.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Sodrófa-diagramok összehasonlítása**: két adathalmaz sodrófa-diagramját egymás mellett, közös skálán rajzolva a mediánt, a doboz hosszát és a szárak hosszát vetjük össze (részletesen a harmadik leckében).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: táblázatból vagy diagramról kiolvasható adat, relatív gyakoriság, körcikk szöge.',
            'II. A / II. B: összetett feladat, ahol táblázatot kell kiegészíteni, diagramot rajzolni, majd mutatókat számolni belőle.',
            '„Mi a hibája a diagramnak?”: grafikus manipuláció felismerése és javítása.',
            'Szóbeli: adatok ábrázolása és értelmezése példán keresztül.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: kördiagramnál a szögeket nem a relatív gyakoriságból számolod, hanem a gyakoriságból, vagy nem ellenőrzöd, hogy az összeg $360^\\circ$. Mindig tedd próbává az összegeket (20 fő, 100%, $360^\\circ$).',
        },
        {
          kind: 'tip',
          text: 'Diagramnál a címet, a tengelyek feliratát és a beosztást is fel kell tüntetni. Ezek hiánya pontvesztés, még ha az adatok jók is.',
        },
      ],
      topicMatch: ['statisztika', '=diagramok', 'oszlopdiagram'],
      quiz: [
        {
          question:
            'Hány fokos körcikk tartozik a kördiagramon egy 25%-os relatív gyakoriságú értékhez?',
          options: ['$25^\\circ$', '$45^\\circ$', '$90^\\circ$', '$180^\\circ$'],
          answer: 2,
          explanation: 'A körcikk szöge $360^\\circ \\cdot 0{,}25 = 90^\\circ$.',
        },
        {
          question:
            'Melyik diagram a legalkalmasabb annak szemléltetésére, hogy egy költségvetés részei mekkora hányadot tesznek ki az egészből?',
          options: [
            'kördiagram',
            'sodrófa-diagram',
            'csonkolt tengelyű oszlopdiagram',
            'egyik sem',
          ],
          answer: 0,
          explanation:
            'A részek az egészhez viszonyított arányát a kördiagram mutatja a legjobban, a körcikkek együtt a teljes kört adják.',
        },
        {
          question: '20 dolgozatból 6 hármas született. Mennyi a hármasok relatív gyakorisága?',
          options: ['6', '0,06', '3,3', '0,3'],
          answer: 3,
          explanation:
            'A relatív gyakoriság a gyakoriság és az adatok számának hányadosa: $\\frac{6}{20} = 0{,}3$.',
        },
        {
          question:
            'Miért félrevezető az az oszlopdiagram, amelynek függőleges tengelye 90-nél kezdődik 0 helyett?',
          options: [
            'az oszlopok túl keskenyek lesznek',
            'az oszlopok magasságának aránya nem egyezik az értékek arányával',
            'a diagram nem tartalmazhat értékeket',
            'ilyenkor kördiagramot kell használni',
          ],
          answer: 1,
          explanation:
            'A csonkolt tengely miatt a kis különbségek is nagynak látszanak, mert az oszlopok magassága már nem arányos az értékekkel.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Statisztika', url: wiki('Statisztika') },
        { label: 'Wikipédia: Hisztogram', url: wiki('Hisztogram') },
      ],
    },
    {
      id: 'kozepertekek-szoras',
      subject: 'matematika',
      unitId: 'statisztika-valoszinuseg',
      title: 'Átlag, medián, módusz, terjedelem és szórás',
      level: 'both',
      requirement: {
        kozep:
          'Átlag, medián, módusz, terjedelem és szórás ismerete és alkalmazása; ismert átlagú adathalmazok egyesítésének átlaga; a szórás kiszámítása a definíció alapján vagy számológéppel; adathalmazok összehasonlítása a mutatókkal',
        emelt:
          'Súlyozott számtani közép, átlagos abszolút eltérés; a jól jellemző középérték megválasztása és indoklása; statisztikai adatok értelmezése, következtetések',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Átlag**: az adatok összege osztva a darabszámmal: $\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$.',
            '**Medián**: a nagyság szerint sorba rendezett adatok középső eleme (páros számú adatnál a két középső átlaga).',
            '**Módusz**: a leggyakoribb érték. **Terjedelem**: a legnagyobb és a legkisebb adat különbsége.',
            '**Szórás**: az átlagtól való eltérések négyzetes átlagának gyöke: $\\sigma = \\sqrt{\\frac{(x_1 - \\bar{x})^2 + \\dots + (x_n - \\bar{x})^2}{n}}$.',
            'Kis szórás: az adatok az átlag körül sűrűn állnak; nagy szórás: szétszórtak.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            '**Súlyozott számtani közép**: az adatokat a súlyukkal szorozzuk, az összeget a súlyok összegével osztjuk.',
            '**Átlagos abszolút eltérés**: az átlagtól való eltérések abszolút értékének átlaga.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Egy adathalmaz minden mutatója' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy csoport nyolc tanulója a következő pontszámokat érte el egy feladatsoron: 2, 4, 4, 4, 5, 5, 7, 9. Adja meg az átlagot, a mediánt, a móduszt, a terjedelmet és a szórást!',
          solution:
            'Átlag: $\\frac{2+4+4+4+5+5+7+9}{8} = \\frac{40}{8} = 5$.\n\nMedián: az adatok már rendezettek, a 4. és 5. elem 4 és 5, a medián $\\frac{4+5}{2} = 4{,}5$.\n\nMódusz: 4 (háromszor szerepel).\n\nTerjedelem: $9 - 2 = 7$.\n\nSzórás: az átlagtól való eltérések: $-3, -1, -1, -1, 0, 0, 2, 4$; négyzeteik összege $9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32$. Így $\\sigma = \\sqrt{\\frac{32}{8}} = \\sqrt{4} = 2$.',
        },
        {
          kind: 'text',
          text: 'A számológép statisztikai módjában az adatokat bevíve a szórást közvetlenül megkapod. Figyelj arra, hogy az érettségin a szórás nevezőjében az adatok száma, $n$ áll, ezért a számológép megfelelő ($\\sigma_n$, nem $\\sigma_{n-1}$) gombját használd.',
        },
        { kind: 'heading', text: 'Egyesített adathalmaz átlaga' },
        {
          kind: 'text',
          text: 'Ha ismert két adathalmaz átlaga és elemszáma, az egyesítés átlagát az összegekből kapod: az átlag és az elemszám szorzata az összeg.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Az A osztály 12 tanulójának dolgozatátlaga 4,0, a B osztály 18 tanulójáé 3,5. Mennyi a két osztály együttes átlaga?',
          solution:
            'Az összegek: $12 \\cdot 4 = 48$ és $18 \\cdot 3{,}5 = 63$. Együtt $\\frac{48 + 63}{12 + 18} = \\frac{111}{30} = 3{,}7$.',
        },
        {
          kind: 'warning',
          text: 'Nem a két átlag átlagát kell venni! $\\frac{4 + 3{,}5}{2} = 3{,}75$ hibás, mert a két osztály létszáma különböző. A nagyobb csoport átlaga nagyobb súllyal számít.',
        },
        { kind: 'heading', text: 'Adathalmazok összehasonlítása' },
        {
          kind: 'text',
          text: 'Két adathalmazt a mutatók együtt jellemeznek: az átlag vagy a medián a „közepet”, a terjedelem és a szórás a szóródást mutatja. Két csoport lehet azonos átlagú, mégis eltérő szórású: az egyik csoport pontszámai egyenletesek, a másiké erősen ingadozóak.',
        },
        { kind: 'heading', text: 'Súlyozott közép és átlagos abszolút eltérés', emelt: true },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: súlyozott átlag',
          problem:
            'Egy félév jegyei: egy 5-ös dolgozat 2-szeres súllyal, egy 4-es 1-szeres és egy 3-as 1-szeres súllyal számít. Mennyi a súlyozott átlag?',
          solution:
            '$\\frac{5 \\cdot 2 + 4 \\cdot 1 + 3 \\cdot 1}{2 + 1 + 1} = \\frac{17}{4} = 4{,}25$. (A súlyozatlan átlag 4 lenne.)',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **átlagos abszolút eltérés** az előző pontszámokra: az eltérések abszolút értékei $3, 1, 1, 1, 0, 0, 2, 4$, összegük 12, tehát $\\frac{12}{8} = 1{,}5$. Ez kisebb, mint a szórás (2), mert a szórásnál a négyzetre emelés a nagy eltéréseket jobban hangsúlyozza.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Melyik középértéket válaszd?',
          problem:
            'Egy kisvállalkozás hat dolgozójának havi bére (ezer Ft): 280, 290, 300, 310, 320, 2000. Melyik jellemzi jobban a „tipikus” bért, az átlag vagy a medián?',
          solution:
            'Az átlag $\\frac{3500}{6} \\approx 583{,}3$ ezer Ft, a medián $\\frac{300 + 310}{2} = 305$ ezer Ft. A 2000 ezres kiugró érték az átlagot felhúzza, ezért a medián jobban jellemzi a tipikus bért. Ha viszont az összes bérköltséget vizsgáljuk, az átlag a megfelelő mutató.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: adott adatsor átlaga, mediánja, módusza vagy terjedelme; egy adat hozzáadása után mi változik.',
            'II. A / II. B: táblázatban adott gyakoriságokkal a szórás kiszámítása, két adathalmaz összehasonlítása.',
            'Hiányzó adat meghatározása az ismert átlagból vagy mediánból.',
            'Szóbeli: a mutatók definíciója és szerepe egy konkrét adathalmazon bemutatva.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba a mediánnál, hogy nem rendezed sorba az adatokat, vagy páros számú adatnál a két középső elem átlaga helyett csak az egyiket veszed. Szórásnál gyakori, hogy a négyzetgyökvonás elmarad, és a szórásnégyzetet adod meg.',
        },
        {
          kind: 'tip',
          text: 'A szórás kiszámításának lépéseit írd le (átlag, eltérések, négyzetek összege, osztás, gyökvonás), akkor is, ha a számológép adja meg az eredményt. Ha csak a végeredmény áll ott, és az hibás, nem kapsz részpontot.',
        },
      ],
      topicMatch: ['=átlag', 'szórás', 'medián', 'módusz', 'terjedelem', 'súlyozott átlag'],
      quiz: [
        {
          question: 'Mennyi a 2, 4, 4, 4, 5, 5, 7, 9 adatok mediánja?',
          options: ['4', '4,5', '5', '5,5'],
          answer: 1,
          explanation:
            'Nyolc adat van, a medián a 4. és 5. elem átlaga: $\\frac{4 + 5}{2} = 4{,}5$.',
        },
        {
          question: 'Mennyi a 3, 5, 5, 7, 7, 7, 9 adatok módusza?',
          options: ['5', '9', '3', '7'],
          answer: 3,
          explanation: 'A 7 szerepel a leggyakrabban, háromszor.',
        },
        {
          question:
            'Az egyik csoport 12 tanulójának átlaga 4,0, a másik csoport 18 tanulójának átlaga 3,5. Mennyi az együttes átlag?',
          options: ['3,7', '3,75', '3,8', '3,5'],
          answer: 0,
          explanation: 'Az összegek 48 és 63, az együttes átlag $\\frac{111}{30} = 3{,}7$.',
        },
        {
          question: 'Mennyi a 2, 4, 4, 4, 5, 5, 7, 9 adatok szórása?',
          options: ['1', '1,5', '2', '4'],
          answer: 2,
          explanation:
            'Az átlag 5, az eltérések négyzeteinek összege 32, így $\\sigma = \\sqrt{\\frac{32}{8}} = 2$. A 4 a szórásnégyzet.',
        },
        {
          question:
            'Egy dolgozat 2-szeres súllyal számít 5-ösre, egy 1-szeres súlyú 4-esre és egy 1-szeres súlyú 3-asra. Mennyi a súlyozott átlag?',
          options: ['4', '4,25', '4,5', '3,5'],
          answer: 1,
          explanation: '$\\frac{5 \\cdot 2 + 4 + 3}{4} = \\frac{17}{4} = 4{,}25$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szórás', url: wiki('Szórás (statisztika)') },
        { label: 'Wikipédia: Medián', url: wiki('Medián') },
        { label: 'Wikipédia: Módusz', url: wiki('Módusz (statisztika)') },
      ],
    },
    {
      id: 'kvartilisek-dobozdiagram',
      subject: 'matematika',
      unitId: 'statisztika-valoszinuseg',
      title: 'Kvartilisek és sodrófa-diagram',
      level: 'both',
      requirement: {
        kozep:
          'A kvartilisek ismerete és alkalmazása; sodrófa- (box-plot) diagram készítése és leolvasása; adathalmazok összehasonlítása a statisztikai mutatókkal',
        emelt: 'Adathalmazok összehasonlítása sodrófa-diagramok alapján',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A rendezett adatsort a **medián** két részre osztja; az **alsó kvartilis** ($Q_1$) az alsó fél mediánja, a **felső kvartilis** ($Q_3$) a felső fél mediánja.',
            'A kvartilisek az adatokat négy, nagyjából egyenlő elemszámú részre osztják.',
            'A **sodrófa-diagram** (doboz-diagram, box-plot) öt értéket mutat: legkisebb adat, $Q_1$, medián, $Q_3$, legnagyobb adat.',
            'A **doboz** $Q_1$-től $Q_3$-ig tart, benne van a medián vonala; az adatok középső fele a dobozba esik. A „szárak” a legkisebb és a legnagyobb adatig érnek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A kvartilisek kiszámítása' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy 12 fős csoport pontszámai rendezve: 3, 4, 4, 5, 6, 7, 8, 9, 9, 10, 12, 15. Adja meg a mediánt, a kvartiliseket és a terjedelmet, és rajzolja meg a sodrófa-diagramot!',
          solution:
            'Medián: a 6. és 7. adat átlaga, $\\frac{7 + 8}{2} = 7{,}5$.\n\nAz alsó fél: 3, 4, 4, 5, 6, 7, ennek mediánja $Q_1 = \\frac{4 + 5}{2} = 4{,}5$.\n\nA felső fél: 8, 9, 9, 10, 12, 15, ennek mediánja $Q_3 = \\frac{9 + 10}{2} = 9{,}5$.\n\nTerjedelem: $15 - 3 = 12$.\n\nA sodrófa-diagram öt értéke: 3; 4,5; 7,5; 9,5; 15. A skála fölött a dobozt 4,5-től 9,5-ig rajzoljuk, a mediánnál függőleges vonallal, a szárak a 3-ig és a 15-ig érnek.',
        },
        {
          kind: 'keypoints',
          title: 'Mit olvashatsz le a diagramról?',
          items: [
            'a medián helyét, a terjedelmet és a kvartiliseket;',
            'az adatok **középső 50%-a** a dobozban van (itt a 4,5 és 9,5 közötti pontszámok);',
            'ha a medián vonala nem a doboz közepén van, vagy az egyik szár hosszabb, az eloszlás **aszimmetrikus**;',
            'nem olvasható le belőle az átlag és az egyes adatok pontos értéke.',
          ],
        },
        {
          kind: 'tip',
          text: 'A kvartiliseket páros elemszámú adatsornál a fentiek szerint a két fél mediánja adja. Páratlan elemszámnál a tankönyvek a középső elem kezelésében kissé eltérhetnek, ezért az érettségi feladatok általában kényelmesen kezelhető adatot adnak; kövesd az órán tanult módszert.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Két sodrófa-diagram összehasonlítása',
          problem:
            'Két csoport pontszámainak öt jellemző értéke (legkisebb, $Q_1$, medián, $Q_3$, legnagyobb): A csoport: 2; 4; 6; 8; 10. B csoport: 3; 5; 6; 7; 9. Mit állíthatunk?',
          solution:
            'A két csoport mediánja azonos (6), tehát a pontszámok fele mindkét csoportban legfeljebb 6.\n\nAz A csoport doboza hosszabb (4-től 8-ig, hossza 4), a B-é rövidebb (5-től 7-ig, hossza 2), a terjedelem is nagyobb (8 és 6). Ezért a B csoport eredményei a medián körül sűrűbben állnak, az A csoporté jobban szórnak. A diagramból azt nem tudjuk megmondani, melyik csoport átlaga nagyobb.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: adott sodrófa-diagramról a medián, a kvartilisek, a terjedelem leolvasása; igaz–hamis állítások.',
            'II. rész: táblázatban megadott adatokból sodrófa-diagram elkészítése, majd értelmezése.',
            'Emelt: két adathalmaz összehasonlítása a diagramjuk alapján, indoklással.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt gondolni, hogy a doboz hossza az adatok számát vagy a szárak hossza az adatok számát mutatja. A diagram csak az öt jellemző értéket adja meg. Az is hiba, ha a kvartiliseket nem rendezett adatsorból számolod.',
        },
        {
          kind: 'tip',
          text: 'Rajzolásnál használj skálát a vízszintes (vagy függőleges) tengelyen, és jelöld a szélső értékeket, a kvartiliseket és a mediánt. Az ábra mellé írd fel a számolást is.',
        },
      ],
      topicMatch: ['kvartilis', 'dobozdiagram', 'doboz-diagram', 'sodrófadiagram'],
      quiz: [
        {
          question: 'Mennyi az alsó kvartilis a 3, 4, 4, 5, 6, 7, 8, 9, 9, 10, 12, 15 adatoknál?',
          options: ['4,5', '4', '5', '5,5'],
          answer: 0,
          explanation: 'Az alsó fél 3, 4, 4, 5, 6, 7, ennek mediánja $\\frac{4 + 5}{2} = 4{,}5$.',
        },
        {
          question:
            'Mennyi a felső kvartilis ugyanezeknél az adatoknál (3, 4, 4, 5, 6, 7, 8, 9, 9, 10, 12, 15)?',
          options: ['9', '10', '9,5', '12'],
          answer: 2,
          explanation: 'A felső fél 8, 9, 9, 10, 12, 15, a mediánja $\\frac{9 + 10}{2} = 9{,}5$.',
        },
        {
          question: 'Az adatok hányadrésze esik a sodrófa-diagram dobozába?',
          options: ['negyede', 'háromnegyede', 'mindegyik', 'fele'],
          answer: 3,
          explanation:
            'A doboz az alsó kvartilistől a felsőig tart, ide esik az adatok középső 50%-a.',
        },
        {
          question: 'Mennyi a terjedelme az előző adatsornak?',
          options: ['9', '12', '15', '7,5'],
          answer: 1,
          explanation: 'A terjedelem a legnagyobb és a legkisebb adat különbsége: $15 - 3 = 12$.',
        },
        {
          question:
            'Két sodrófa-diagramban azonos a medián, de az első doboza hosszabb. Mit állíthatunk biztosan?',
          options: [
            'az első adathalmaz átlaga nagyobb',
            'az első adathalmaznak több eleme van',
            'az első adathalmaz középső fele jobban szór',
            'a második adathalmaz minden adata kisebb',
          ],
          answer: 2,
          explanation:
            'A doboz hossza az adatok középső 50%-ának szóródását mutatja, az átlagról és az elemszámról a diagram nem ad információt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kvartilis', url: wiki('Kvartilis') },
        { label: 'Wikipédia: Doboz-ábra', url: wiki('Doboz-ábra') },
      ],
    },
    {
      id: 'valoszinuseg-alapok',
      subject: 'matematika',
      unitId: 'statisztika-valoszinuseg',
      title: 'Valószínűség: klasszikus, geometriai modell, várható érték',
      level: 'both',
      requirement: {
        kozep:
          'Esemény, eseménytér, elemi esemény, események összege és szorzata, komplementer, egymást kizáró és független események; klasszikus (Laplace-) modell; komplementer valószínűsége; relatív gyakoriság és valószínűség kapcsolata; geometriai valószínűség; visszatevéses és visszatevés nélküli mintavétel; várható érték',
        emelt: 'A középszintű fogalmak definiálása és alkalmazása',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Klasszikus modell**: ha az elemi események egyformán valószínűek, $P(A) = \\frac{\\text{kedvező esetek száma}}{\\text{összes eset száma}}$.',
            '**Komplementer**: $P(\\bar{A}) = 1 - P(A)$. Az „legalább egy” típusú feladatok gyakran így egyszerűsödnek.',
            '**Egymást kizáró** események nem következhetnek be egyszerre: $P(A + B) = P(A) + P(B)$. **Független** események esetén $P(A \\cdot B) = P(A) \\cdot P(B)$.',
            '**Geometriai valószínűség**: $P = \\frac{\\text{kedvező rész mérete}}{\\text{teljes rész mérete}}$ (hossz, terület, térfogat).',
            '**Várható érték**: az értékek és valószínűségeik szorzatának összege: $E = \\sum x_i \\cdot p_i$.',
          ],
        },
        {
          kind: 'tip',
          text: 'A Gyakorlás menüben külön oldal van a valószínűségi feladatokhoz (Valószínűség lépésről lépésre): ott kidolgozott példákon és új feladatokon gyakorolhatod a lépéseket. Itt a vizsgához szükséges alapokat találod.',
        },
      ],
      details: [
        { kind: 'heading', text: 'Az alapfogalmak' },
        {
          kind: 'terms',
          items: [
            {
              term: 'eseménytér',
              text: 'a kísérlet összes lehetséges kimenetelének halmaza (egy kockadobásnál $\\{1, 2, 3, 4, 5, 6\\}$).',
            },
            {
              term: 'elemi esemény',
              text: 'egyetlen kimenetel (például „a dobás 4”); az **esemény** elemi események halmaza (például „páros a dobás”).',
            },
            {
              term: 'események összege',
              text: '$A + B$: az $A$ vagy a $B$ (esetleg mindkettő) bekövetkezik.',
            },
            {
              term: 'események szorzata',
              text: '$A \\cdot B$: az $A$ és a $B$ is bekövetkezik.',
            },
            {
              term: 'komplementer esemény',
              text: '$\\bar{A}$: az $A$ nem következik be.',
            },
            {
              term: 'egymást kizáró',
              text: 'az $A$ és $B$ nem következhet be egyszerre ($A \\cdot B$ lehetetlen).',
            },
            {
              term: 'független',
              text: 'az egyik bekövetkezése nem befolyásolja a másik valószínűségét (két külön kockadobás).',
            },
          ],
        },
        {
          kind: 'formula',
          tex: 'P(A + B) = P(A) + P(B) - P(A \\cdot B)',
          caption: 'ha A és B nem zárják ki egymást; kizáró eseményeknél az utolsó tag 0',
        },
        { kind: 'heading', text: 'Klasszikus modell és komplementer' },
        {
          kind: 'example',
          title: 'Kidolgozott példa: két kocka',
          problem:
            'Két szabályos dobókockával dobunk. Mekkora a valószínűsége, hogy a dobott számok összege 7?',
          solution:
            'Összes eset: $6 \\cdot 6 = 36$ (a sorrend számít). Kedvező: $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$, vagyis 6. $P = \\frac{6}{36} = \\frac{1}{6}$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: legalább egy hatos',
          problem:
            'Háromszor dobunk egy kockával. Mekkora a valószínűsége, hogy legalább egyszer hatost dobunk?',
          solution:
            'A komplementer esemény: egyszer sem dobunk hatost. A dobások függetlenek, ezért $P(\\bar{A}) = \\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$. A keresett valószínűség $1 - \\frac{125}{216} = \\frac{91}{216} \\approx 0{,}421$.',
        },
        {
          kind: 'text',
          text: 'Az összes és a kedvező esetek megszámolásához gyakran kombinatorika kell (sorrendek, kiválasztások száma). Ezt a kombinatorika témakörben tanulod meg, itt csak alkalmazod.',
        },
        { kind: 'heading', text: 'Relatív gyakoriság és valószínűség' },
        {
          kind: 'text',
          text: 'Ha a kísérletet sokszor ismételjük, egy esemény relatív gyakorisága a valószínűsége körül ingadozik, és a kísérletek számának növelésével általában egyre közelebb kerül hozzá. Például egy kockát 600-szor feldobva a hatosok száma 100 körül lesz, a relatív gyakoriság $\\frac{1}{6} \\approx 0{,}167$ körüli. A relatív gyakoriság tehát becslés a valószínűségre, de nem azonos vele.',
        },
        { kind: 'heading', text: 'Mintavétel visszatevéssel és anélkül' },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy urnában 4 piros és 6 kék golyó van. Két golyót húzunk. Mekkora a valószínűsége, hogy mindkettő piros, ha a) visszatesszük az elsőt, b) nem tesszük vissza?',
          solution:
            'a) Visszatevéssel a húzások függetlenek: $\\frac{4}{10} \\cdot \\frac{4}{10} = 0{,}16$.\n\nb) Visszatevés nélkül az első húzás után 3 piros marad 9 golyóból: $\\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 0{,}133$.',
        },
        { kind: 'heading', text: 'Geometriai valószínűség' },
        {
          kind: 'text',
          text: 'Ha a kimenetelek egy hosszal, területtel vagy térfogattal mérhető halmaz pontjai, és minden pont egyformán esélyes, a valószínűség a kedvező és az összes rész mérték szerinti aránya.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy buszjárat 15 percenként érkezik. Véletlenszerűen érkezel a megállóba. Mekkora a valószínűsége, hogy legfeljebb 4 percet kell várnod?',
          solution:
            'Az összes lehetőség a 15 perces időszak, a kedvező rész 4 perc hosszú: $P = \\frac{4}{15} \\approx 0{,}267$.',
        },
        { kind: 'heading', text: 'Várható érték' },
        {
          kind: 'example',
          title: 'Kidolgozott példa: játék',
          problem:
            'Egy játékban 200 Ft-ot fizetsz, majd egy kockával dobsz. Ha hatost dobsz, 900 Ft-ot kapsz, különben semmit. Mennyi a nyereményed várható értéke?',
          solution:
            'A kifizetés várható értéke: $900 \\cdot \\frac{1}{6} + 0 \\cdot \\frac{5}{6} = 150$ Ft. A nyereség (a befizetést levonva) várható értéke $150 - 200 = -50$ Ft, vagyis hosszú távon játékonként átlagosan 50 Ft-ot veszítesz. A játék igazságos lenne 150 Ft belépődíj mellett.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: egyszerű klasszikus valószínűség (kocka, érme, kártya), komplementer esemény.',
            'II. A / II. B: összetett szöveges feladat, ahol több lépésben kell az összes és a kedvező esetet megszámolni; mintavétel golyókkal, termékekkel; geometriai valószínűség síkidomokkal.',
            'Várható érték: játék vagy nyeremény (nyeremény–valószínűség táblázat).',
            'Szóbeli: a klasszikus modell vagy a várható érték bemutatása példával.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: a sorrend figyelmen kívül hagyása két kockánál (36 eset van, nem 21); a visszatevéses és a visszatevés nélküli mintavétel összekeverése; a „legalább egy” esemény közvetlen számolása a komplementer helyett; a várható értéknél a befizetés elfelejtése.',
        },
        {
          kind: 'tip',
          text: 'A valószínűséget mindig írd fel törtként, majd (ha kérik) kerekítsd. Az esemény megnevezése és a kedvező-összes eset leírása a javítókulcsban külön pontot ér.',
        },
      ],
      topicMatch: [
        '=valószínűség',
        'klasszikus valószínűség',
        'komplementer',
        'független események',
      ],
      quiz: [
        {
          question: 'Két szabályos kockával dobunk. Mekkora a valószínűsége, hogy az összeg 7?',
          options: ['$\\frac{1}{12}$', '$\\frac{1}{36}$', '$\\frac{7}{36}$', '$\\frac{1}{6}$'],
          answer: 3,
          explanation:
            '36 egyformán valószínű pár van, ebből 6 ad 7-et: $\\frac{6}{36} = \\frac{1}{6}$.',
        },
        {
          question:
            'Háromszor dobunk egy kockával. Mekkora a valószínűsége, hogy van köztük hatos?',
          options: [
            '$\\frac{1}{2}$',
            '$\\frac{91}{216}$',
            '$\\frac{1}{216}$',
            '$\\frac{125}{216}$',
          ],
          answer: 1,
          explanation:
            'A komplementer esemény (nincs hatos) valószínűsége $\\frac{125}{216}$, a kérdéses esemény így $1 - \\frac{125}{216} = \\frac{91}{216}$.',
        },
        {
          question:
            'Egy urnában 4 piros és 6 kék golyó van. Visszatevés nélkül kihúzunk kettőt. Mennyi a valószínűsége, hogy mindkettő piros?',
          options: ['$\\frac{2}{15}$', '$\\frac{4}{25}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
          answer: 0,
          explanation:
            '$\\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{2}{15}$. A $\\frac{4}{25}$ a visszatevéses eset eredménye.',
        },
        {
          question:
            'Egy 10 cm oldalú négyzetbe véletlenszerűen pontot választunk. Mekkora a valószínűsége, hogy a pont a négyzet beírt körén belül van?',
          options: [
            '$\\frac{\\pi}{8}$',
            '$\\frac{1}{2}$',
            '$\\frac{\\pi}{4}$',
            '$\\frac{\\pi}{16}$',
          ],
          answer: 2,
          explanation:
            'A beírt kör sugara 5 cm, területe $25\\pi$, a négyzeté 100. A valószínűség a területek aránya: $\\frac{25\\pi}{100} = \\frac{\\pi}{4} \\approx 0{,}785$.',
        },
        {
          question:
            'Egy játékban 200 Ft a belépő, hatos dobásnál 900 Ft a nyeremény, különben semmi. Mennyi a nyereség várható értéke?',
          options: ['$+50$ Ft', '$-50$ Ft', '0 Ft', '$-150$ Ft'],
          answer: 1,
          explanation:
            'A kifizetés várható értéke $900 \\cdot \\frac{1}{6} = 150$ Ft, ebből a 200 Ft belépő levonva $-50$ Ft.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Valószínűség-számítás', url: wiki('Valószínűség-számítás') },
        { label: 'Wikipédia: Várható érték', url: wiki('Várható érték') },
        { label: 'Wikipédia: Geometriai valószínűség', url: wiki('Geometriai valószínűség') },
      ],
    },
    {
      id: 'binomialis-eloszlas-feltetelesvaloszinuseg',
      subject: 'matematika',
      unitId: 'statisztika-valoszinuseg',
      title: 'Binomiális eloszlás és feltételes valószínűség',
      level: 'emelt',
      requirement: {
        emelt:
          'A feltételes valószínűség definiálása és alkalmazása; a binomiális eloszlás (visszatevéses modell) és a hipergeometriai eloszlás (visszatevés nélküli modell) értelmezése, konkrét valószínűségek kiszámítása',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Feltételes valószínűség**: $P(A \\mid B) = \\frac{P(A \\cdot B)}{P(B)}$, annak valószínűsége, hogy $A$ bekövetkezik, ha tudjuk, hogy $B$ bekövetkezett.',
            '**Szorzási szabály**: $P(A \\cdot B) = P(B) \\cdot P(A \\mid B)$.',
            'Az $A$ és $B$ **független**, ha $P(A \\mid B) = P(A)$.',
            '**Binomiális eloszlás** (visszatevéses modell): $n$ független kísérlet, mindegyikben $p$ a siker valószínűsége; $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$. Várható értéke $n \\cdot p$.',
            '**Hipergeometriai eloszlás** (visszatevés nélküli modell): $P = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Feltételes valószínűség' },
        {
          kind: 'example',
          title: 'Kidolgozott példa: kockadobás',
          problem:
            'Egy kockával dobunk. Mekkora a valószínűsége, hogy a dobott szám nagyobb 3-nál, ha tudjuk, hogy páros?',
          solution:
            '$B$: „páros” ($\\{2, 4, 6\\}$), $P(B) = \\frac{3}{6}$. $A \\cdot B$: „4 vagy 6”, $P(A \\cdot B) = \\frac{2}{6}$. Így $P(A \\mid B) = \\frac{2/6}{3/6} = \\frac{2}{3}$.\n\nGyorsabban: a feltétel leszűkíti az eseményteret a páros számokra (3 eset), ezek közül 2 kedvező.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: visszatevés nélküli húzás',
          problem:
            'Egy urnában 4 piros és 6 kék golyó van. Kihúzunk egyet, nem tesszük vissza, aztán még egyet. Mekkora a valószínűsége, hogy a második piros, ha az első is piros volt?',
          solution:
            'Az első húzás után 3 piros marad 9 golyóból, ezért $P = \\frac{3}{9} = \\frac{1}{3}$. A szorzási szabály szerint a két piros húzás valószínűsége $\\frac{4}{10} \\cdot \\frac{1}{3} = \\frac{2}{15}$.',
        },
        { kind: 'heading', text: 'Binomiális eloszlás' },
        {
          kind: 'text',
          text: 'Akkor használjuk, ha ugyanazt a kísérletet $n$-szer, egymástól függetlenül végezzük, és minden kísérletben ugyanaz a $p$ a „siker” valószínűsége (visszatevéses mintavétel, érmefeldobás, találgatásos teszt). A $k$ sikeres kísérlet $\\binom{n}{k}$ különböző helyre eshet, és minden ilyen elrendezés valószínűsége $p^k (1-p)^{n-k}$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: találgatás',
          problem:
            'Egy 5 kérdéses tesztben minden kérdésre 4 válasz közül pontosan egy helyes. Valaki találgat. Mekkora a valószínűsége, hogy pontosan 3 kérdésre jól felel, és hogy legalább 3-ra? Mennyi a jó válaszok várható száma?',
          solution:
            '$n = 5$, $p = \\frac{1}{4}$.\n\nPontosan 3: $\\binom{5}{3} \\cdot 0{,}25^3 \\cdot 0{,}75^2 = 10 \\cdot 0{,}015625 \\cdot 0{,}5625 \\approx 0{,}0879$.\n\nPontosan 4: $\\binom{5}{4} \\cdot 0{,}25^4 \\cdot 0{,}75 \\approx 0{,}0146$. Pontosan 5: $0{,}25^5 \\approx 0{,}0010$.\n\nLegalább 3: $0{,}0879 + 0{,}0146 + 0{,}0010 \\approx 0{,}1035$.\n\nVárható érték: $5 \\cdot 0{,}25 = 1{,}25$.',
        },
        { kind: 'heading', text: 'Hipergeometriai eloszlás' },
        {
          kind: 'example',
          title: 'Kidolgozott példa: selejtes termékek',
          problem:
            'Egy 20 termékes tételben 4 selejtes van. Egyszerre kiválasztunk 5 terméket. Mekkora a valószínűsége, hogy pontosan 1 selejtes lesz közöttük?',
          solution:
            'Összes eset: $\\binom{20}{5} = 15504$. Kedvező: 1 selejtes a 4-ből ($\\binom{4}{1} = 4$) és 4 jó a 16-ból ($\\binom{16}{4} = 1820$). $P = \\frac{4 \\cdot 1820}{15504} = \\frac{7280}{15504} \\approx 0{,}470$.',
        },
        {
          kind: 'compare',
          title: 'Melyik modell?',
          columns: ['Binomiális', 'Hipergeometriai'],
          rows: [
            { label: 'Mintavétel', cells: ['visszatevéssel', 'visszatevés nélkül'] },
            {
              label: 'Siker valószínűsége',
              cells: ['minden lépésben ugyanaz ($p$)', 'lépésről lépésre változik'],
            },
            {
              label: 'Kifejezés',
              cells: ['$\\binom{n}{k} p^k (1-p)^{n-k}$', 'kiválasztások száma hányadosa'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. B feladat része: „Mekkora a valószínűsége, hogy pontosan / legalább $k$ ...?” binomiális vagy hipergeometriai modellel.',
            'Feltételes valószínűség táblázatból vagy szövegből (például szűrővizsgálat, két osztály tanulói).',
            'Szóbeli: a feltételes valószínűség vagy a binomiális eloszlás definíciója, alkalmazása egy példán.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a modell kiválasztásának elmaradása. A „legalább” kérdésnél a komplementer sokszor rövidebb ($1 - P(\\text{kevesebb})$). Feltételes valószínűségnél gyakori a $P(A \\mid B)$ és $P(B \\mid A)$ felcserélése, ezek általában különböznek.',
        },
        {
          kind: 'tip',
          text: 'Mondd ki, melyik modellt használod és miért ("visszatevéses, ezért független, $n = 5$, $p = 0{,}25$"). Ez a javítókulcsban önálló pontot érhet.',
        },
      ],
      topicMatch: ['feltételes valószínűség', 'binomiális eloszlás', 'teljes valószínűség'],
      quiz: [
        {
          question: 'Egy kockadobás páros. Mekkora a valószínűsége, hogy nagyobb 3-nál?',
          options: ['$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$'],
          answer: 0,
          explanation: 'A páros számok közül ($2, 4, 6$) kettő nagyobb 3-nál: $P = \\frac{2}{3}$.',
          emelt: true,
        },
        {
          question:
            'Egy 5 kérdéses tesztben minden kérdésre 4 válasz közül egy helyes. Mekkora a valószínűsége, hogy találgatással pontosan 3 kérdésre jól válaszolunk?',
          options: ['0,0156', '0,2637', '0,0879', '0,1563'],
          answer: 2,
          explanation:
            '$\\binom{5}{3} \\cdot 0{,}25^3 \\cdot 0{,}75^2 = 10 \\cdot 0{,}015625 \\cdot 0{,}5625 \\approx 0{,}0879$.',
          emelt: true,
        },
        {
          question:
            'Egy sorozatgyártott alkatrész 30% eséllyel selejtes, 40 darabot ellenőrzünk, a hibák egymástól függetlenek. Mennyi a selejtesek számának várható értéke?',
          options: ['9', '12', '28', '0,3'],
          answer: 1,
          explanation: 'Binomiális eloszlás várható értéke $n \\cdot p = 40 \\cdot 0{,}3 = 12$.',
          emelt: true,
        },
        {
          question:
            'Egy 20 termékes tételben 4 selejtes van, egyszerre 5-öt választunk ki. Melyik kifejezés adja a pontosan 1 selejtes valószínűségét?',
          options: [
            '$\\binom{5}{1} \\cdot 0{,}2 \\cdot 0{,}8^4$',
            '$\\frac{\\binom{4}{1}}{\\binom{20}{5}}$',
            '$\\frac{\\binom{4}{1}\\binom{20}{4}}{\\binom{20}{5}}$',
            '$\\frac{\\binom{4}{1}\\binom{16}{4}}{\\binom{20}{5}}$',
          ],
          answer: 3,
          explanation:
            'Visszatevés nélküli (egyszerre történő) kiválasztásnál hipergeometriai modellt használunk: 1 selejtes a 4-ből, 4 jó a 16-ból, az összes eset $\\binom{20}{5}$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Feltételes valószínűség', url: wiki('Feltételes valószínűség') },
        { label: 'Wikipédia: Binomiális eloszlás', url: wiki('Binomiális eloszlás') },
        {
          label: 'Wikipédia: Hipergeometrikus eloszlás',
          url: wiki('Hipergeometrikus eloszlás'),
        },
      ],
    },
  ],
};

export default unit;
