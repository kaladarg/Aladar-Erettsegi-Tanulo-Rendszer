import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics: 1.1 Halmazok, 1.2 Matematikai logika. */
const unit: GuideUnit = {
  id: 'halmazok-logika',
  subject: 'matematika',
  order: 10,
  title: 'Halmazok és matematikai logika',
  requirementRef:
    '1.1 Halmazok (1.1.1 Halmazműveletek, 1.1.2 Számosság, részhalmazok); 1.2 Matematikai logika (1.2.1 Fogalmak, tételek és bizonyítások a matematikában)',
  intro:
    'A halmazoktól és a Venn-diagramtól a logikai szitán és a kijelentések tagadásán át a megfordításig; emelt szinten a de Morgan azonosságok, a végtelen halmazok és a bizonyítási módszerek.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (1.1, 1.1.1, 1.1.2, 1.2, 1.2.1). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'halmazok-muveletek',
      subject: 'matematika',
      unitId: 'halmazok-logika',
      title: 'Halmazok és halmazműveletek',
      level: 'both',
      requirement: {
        kozep:
          'A halmazok megadási módjai, az elem fogalma; halmazok egyenlősége, részhalmaz, üres halmaz, véges és végtelen halmaz, komplementer halmaz; unió, metszet, különbség; egyszerűbb ponthalmazok ábrázolása koordináta-rendszerben',
        emelt: 'A de Morgan azonosságok ismerete és alkalmazása',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **halmaz** jól meghatározott elemek összessége. Megadhatod **felsorolással** ($A = \\{1; 2; 3\\}$), **tulajdonsággal** ($B = \\{x \\mid x \\text{ páros}, x < 10\\}$) vagy **ábrával** (Venn-diagram).',
            '$x \\in A$: az $x$ eleme az $A$-nak. $A \\subseteq B$: **részhalmaz**, ha $A$ minden eleme $B$-nek is eleme. $A = B$: ugyanazok az elemek.',
            '**Üres halmaz**: $\\emptyset$ vagy $\\{\\}$, nincs eleme. Minden halmaznak részhalmaza.',
            '**Unió** $A \\cup B$: ami legalább az egyikben benne van. **Metszet** $A \\cap B$: ami mindkettőben. **Különbség** $A \\setminus B$: ami $A$-ban van, de $B$-ben nincs.',
            '**Komplementer** $\\overline{A}$: az alaphalmaz ($H$) azon elemei, amelyek nincsenek $A$-ban.',
            'Emelt szinten: **de Morgan** azonosságok: $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ és $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a halmaz, és hogyan adjuk meg?' },
        {
          kind: 'text',
          text: 'A halmaz alapfogalom: nem definiáljuk, de pontosan tudnunk kell, hogy egy elem benne van-e vagy nincs. A "szép számok" halmaza nem halmaz, a "10-nél kisebb pozitív páros számok" igen. A halmazban **nem számít a sorrend** és **nem számít az ismétlés**: $\\{1; 2; 3\\} = \\{3; 2; 1; 1\\}$.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Véges halmaz',
              text: 'Elemeinek száma egy természetes szám, például $\\{2; 4; 6\\}$.',
            },
            {
              term: 'Végtelen halmaz',
              text: 'Elemeinek száma nem véges, például a természetes számok halmaza ($\\mathbb{N}$).',
            },
            {
              term: 'Üres halmaz',
              text: 'Egyetlen eleme sincs. Például a 2-nél kisebb prímek halmaza üres.',
            },
            {
              term: 'Részhalmaz',
              text: '$A \\subseteq B$, ha $x \\in A$ esetén mindig $x \\in B$. Minden halmaz részhalmaza önmagának, és az üres halmaz minden halmaznak részhalmaza.',
            },
            {
              term: 'Egyenlőség',
              text: '$A = B$ pontosan akkor, ha $A \\subseteq B$ és $B \\subseteq A$, vagyis ugyanazok az elemeik.',
            },
            {
              term: 'Komplementer halmaz',
              text: 'Az alaphalmazhoz ($H$) viszonyítva: $\\overline{A} = H \\setminus A$. Mindig meg kell mondani az alaphalmazt, enélkül a komplementer nem értelmezhető.',
            },
          ],
        },
        { kind: 'heading', text: 'Halmazműveletek' },
        {
          kind: 'compare',
          title: 'A három alapművelet',
          columns: ['Jelölés és jelentés', 'Venn-diagramon'],
          rows: [
            {
              label: 'Unió',
              cells: ['$A \\cup B$: "A vagy B" (megengedő vagy)', 'mindkét kör teljes területe'],
            },
            {
              label: 'Metszet',
              cells: ['$A \\cap B$: "A és B"', 'a két kör közös része (a "lencse")'],
            },
            {
              label: 'Különbség',
              cells: ['$A \\setminus B$: "A, de nem B"', 'az A kör a közös rész nélkül'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: műveletek felsorolt halmazokkal',
          problem:
            'Legyen $H = \\{1; 2; \\dots; 10\\}$, $A = \\{1; 2; 3; 4; 5; 6\\}$ és $B = \\{2; 4; 6; 8; 10\\}$. Adja meg az $A \\cup B$, $A \\cap B$, $A \\setminus B$, $B \\setminus A$ és $\\overline{A}$ halmazt!',
          solution:
            '$A \\cup B = \\{1; 2; 3; 4; 5; 6; 8; 10\\}$ (8 elem).\n\n$A \\cap B = \\{2; 4; 6\\}$.\n\n$A \\setminus B = \\{1; 3; 5\\}$.\n\n$B \\setminus A = \\{8; 10\\}$.\n\n$\\overline{A} = H \\setminus A = \\{7; 8; 9; 10\\}$.\n\nA Venn-diagram négy részre oszlik: csak $A$-ban ($\\{1; 3; 5\\}$), mindkettőben ($\\{2; 4; 6\\}$), csak $B$-ben ($\\{8; 10\\}$), és egyikben sem ($\\{7; 9\\}$).',
        },
        { kind: 'heading', text: 'Ponthalmazok a koordináta-rendszerben' },
        {
          kind: 'text',
          text: 'A sík pontjai $(x; y)$ számpárok, ezért a feltételekkel megadott számpárok halmaza a sík egy része. Az $y > x$ feltétel az $y = x$ egyenes **feletti** félsík, az $x + y < 4$ az $y = 4 - x$ egyenes **alatti** félsík. A "$>$" és "$<$" esetén a határegyenes **nem** tartozik a halmazhoz, "$\\ge$" és "$\\le$" esetén igen. Két feltétel egyszerre ("és") a halmazok **metszete**, az "vagy" az **unió**.',
        },
        {
          kind: 'plot',
          title: 'Az y > x és az x + y < 4 félsíkok határegyenesei',
          x: [-1, 5],
          y: [-1, 5],
          equalAxes: true,
          functions: [
            { label: 'y = x', fn: (x) => x },
            { label: 'y = 4 − x', fn: (x) => 4 - x },
          ],
          points: [
            { x: 2, y: 2, label: 'metszéspont (2; 2)' },
            { x: 1, y: 2, label: 'E (1; 2), a metszet egy pontja' },
          ],
        },
        {
          kind: 'text',
          text: 'A metszet az $y = x$ egyenes fölötti és az $y = 4 - x$ egyenes alatti rész, vagyis az ábrán a két egyenes által közrefogott, balra nyitott szög belseje. A csúcsa a $(2; 2)$ pont, de az nem tartozik hozzá. Az $E(1; 2)$ pont benne van: $2 > 1$ és $1 + 2 = 3 < 4$.',
        },
        { kind: 'heading', text: 'De Morgan azonosságok', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'A komplementer és a két alapművelet kapcsolata: $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ ("nem igaz, hogy A vagy B" ugyanaz, mint "nem A és nem B") és $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$. Bizonyítás az első azonosságra: $x \\in \\overline{A \\cup B}$ akkor és csak akkor, ha $x \\notin A \\cup B$, azaz $x \\notin A$ és $x \\notin B$, vagyis $x \\in \\overline{A} \\cap \\overline{B}$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa 2.: de Morgan ellenőrzése',
          problem:
            'Ellenőrizze az $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ azonosságot az 1. példa halmazaival!',
          solution:
            '$A \\cup B = \\{1; 2; 3; 4; 5; 6; 8; 10\\}$, ennek komplementere $H$-ban: $\\{7; 9\\}$.\n\n$\\overline{A} = \\{7; 8; 9; 10\\}$ és $\\overline{B} = \\{1; 3; 5; 7; 9\\}$, a metszetük: $\\{7; 9\\}$.\n\nA két oldal megegyezik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: felsorolt halmazokkal műveletet kell végezni, vagy Venn-diagramon kell kijelölni egy halmazt (például $A \\setminus B$ vagy $\\overline{A \\cup B}$).',
            'I. vagy II. A rész: ponthalmaz ábrázolása a koordináta-rendszerben, például két egyenlőtlenség közös része, majd a kapott síkidom területe vagy egy rácspont megadása.',
            'II. rész: szöveges feladat, ahol a halmazok elemszámait kell Venn-diagram segítségével meghatározni (lásd a következő leckét).',
            'Szóbeli: halmazműveletek definíciója; emelt szinten a de Morgan azonosságok megfogalmazása és bizonyítása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: a $\\{2\\}$ és a $2$ összekeverése ($2 \\in \\{2\\}$, de $2 \\not\\subseteq \\{2\\}$); az $A \\setminus B$ és a $B \\setminus A$ felcserélése; a komplementer alaphalmazának figyelmen kívül hagyása; a határegyenes kezelése szigorú egyenlőtlenségnél.',
        },
        {
          kind: 'tip',
          text: 'Ha a feladat több halmazt kever, rajzolj Venn-diagramot, és írd be a részekbe az elemeket. Egy elem csak egy részbe kerülhet, így a végén ellenőrizhető, hogy minden elemet felhasználtál-e.',
        },
      ],
      topicMatch: ['halmaz', 'venn-diagram'],
      quiz: [
        {
          question:
            'Legyen $A = \\{1; 2; 3; 4; 5; 6\\}$ és $B = \\{2; 4; 6; 8; 10\\}$. Mi az $A \\setminus B$?',
          options: [
            '$\\{1; 3; 5\\}$',
            '$\\{8; 10\\}$',
            '$\\{2; 4; 6\\}$',
            '$\\{1; 3; 5; 8; 10\\}$',
          ],
          answer: 0,
          explanation:
            'A különbség azokat az $A$-beli elemeket tartalmazza, amelyek nincsenek $B$-ben: 1, 3, 5. A $\\{8; 10\\}$ a $B \\setminus A$.',
        },
        {
          question: 'Melyik állítás igaz minden $A$ halmazra?',
          options: [
            '$A \\in A$',
            '$\\emptyset \\in A$',
            '$\\emptyset \\subseteq A$',
            '$A \\subseteq \\emptyset$',
          ],
          answer: 2,
          explanation:
            'Az üres halmaznak nincs olyan eleme, amely $A$-ban ne lenne benne, ezért minden halmaznak részhalmaza. A többi állítás általában hamis.',
        },
        {
          question:
            'Az $H = \\{1; 2; \\dots; 10\\}$ alaphalmazban $A$ a páros számok halmaza. Mi az $\\overline{A}$?',
          options: [
            '$\\{2; 4; 6; 8; 10\\}$',
            '$\\{1; 3; 5; 7; 9\\}$',
            '$\\{1; 2; 3; 4; 5\\}$',
            '$\\{3; 5; 7\\}$',
          ],
          answer: 1,
          explanation:
            'A komplementer az alaphalmaz azon elemeit tartalmazza, amelyek nem párosak.',
        },
        {
          question:
            'Melyik pont tartozik az $\\{(x; y) \\mid y > x\\} \\cap \\{(x; y) \\mid x + y < 4\\}$ halmazhoz?',
          options: ['$(3; 1)$', '$(2; 2)$', '$(0; 5)$', '$(1; 2)$'],
          answer: 3,
          explanation:
            'Az $(1; 2)$-re $2 > 1$ és $1 + 2 = 3 < 4$. A $(3; 1)$-re $1 > 3$ hamis, a $(2; 2)$-nél $2 > 2$ hamis, a $(0; 5)$-nél $5 < 4$ hamis.',
        },
        {
          question: 'Melyik egyenlő az $\\overline{A \\cup B}$ halmazzal?',
          options: [
            '$\\overline{A} \\cup \\overline{B}$',
            '$\\overline{A \\cap B}$',
            '$\\overline{A} \\cap \\overline{B}$',
            '$A \\setminus B$',
          ],
          answer: 2,
          explanation:
            'A de Morgan azonosság szerint a unió komplementere a komplementerek metszete. A $\\overline{A} \\cup \\overline{B}$ az $\\overline{A \\cap B}$-vel egyenlő.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Halmaz (matematika)', url: wiki('Halmaz matematika') },
        { label: 'Halmazműveletek és Venn-diagram', url: wiki('Venn-diagram halmazműveletek') },
        { label: 'De Morgan-azonosságok', url: wiki('De Morgan azonosságok') },
      ],
    },
    {
      id: 'szamossag-logikai-szita',
      subject: 'matematika',
      unitId: 'halmazok-logika',
      title: 'Elemszám, logikai szita és végtelen halmazok',
      level: 'both',
      requirement: {
        kozep:
          'Véges halmazok elemszámának meghatározása; a logikai szita elvének alkalmazása két és három halmaz esetén',
        emelt:
          'Példa véges, megszámlálhatóan végtelen és nem megszámlálhatóan végtelen halmazra; a megszámlálhatóan végtelen halmaz definíciója; egyszerűbb esetekben annak bizonyítása, hogy egy halmaz megszámlálhatóan végtelen',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az $A$ halmaz elemszáma: $|A|$. Az $n$ elemű halmaznak $2^n$ részhalmaza van (az üres halmazzal és önmagával együtt).',
            '**Két halmaz**: $|A \\cup B| = |A| + |B| - |A \\cap B|$. A közös elemeket kétszer számoltuk, ezért egyszer le kell vonni.',
            '**Három halmaz**: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$.',
            'Ez a **logikai szita** (szitaformula): hozzáadunk, kivonunk, visszaadunk.',
            'Szöveges feladatnál rajzolj Venn-diagramot, és **kívülről befelé** töltsd ki: először a legbelső részt (a hármas metszetet).',
            'Emelt szinten: egy halmaz **megszámlálhatóan végtelen**, ha elemei kölcsönösen egyértelműen megfeleltethetők a természetes számoknak. A valós számok halmaza nem ilyen.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Elemek megszámlálása' },
        {
          kind: 'text',
          text: 'Véges halmaznál az elemszám az elemek darabszáma. Ha $A = \\{1; 2; 3; 4\\}$, akkor $|A| = 4$, és a részhalmazai: az üres halmaz, 4 egyelemű, 6 kételemű, 4 háromelemű és maga $A$, összesen $1 + 4 + 6 + 4 + 1 = 16 = 2^4$. Minden elemről kétféleképpen dönthetünk (benne van vagy nincs), ezért $2 \\cdot 2 \\cdot 2 \\cdot 2$ részhalmaz van.',
        },
        { kind: 'heading', text: 'A logikai szita két halmazra' },
        {
          kind: 'text',
          text: 'Ha összeadjuk $|A|$-t és $|B|$-t, a mindkét halmazban lévő elemeket kétszer számoljuk. Ezért $|A \\cup B| = |A| + |B| - |A \\cap B|$. A Venn-diagram három részre bomlik: csak $A$, a közös rész és csak $B$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: két halmaz',
          problem:
            'Egy 30 fős osztályban 18-an járnak focizni, 15-en kosarazni, és 6-an mindkettőre járnak. Hányan nem sportolnak egyikre sem?',
          solution:
            '$|A \\cup B| = 18 + 15 - 6 = 27$ tanuló jár legalább az egyikre.\n\nEgyikre sem jár: $30 - 27 = 3$ tanuló.\n\nVenn-diagramon: csak foci $18 - 6 = 12$, csak kosár $15 - 6 = 9$, mindkettő $6$, egyik sem $3$. Összesen $12 + 9 + 6 + 3 = 30$, ez ellenőrzi a számolást.',
        },
        { kind: 'heading', text: 'A logikai szita három halmazra' },
        {
          kind: 'text',
          text: 'Három halmaznál az elemeket összeadjuk, a páronkénti metszeteket kivonjuk (ekkor a mindhárom halmazban lévő elemeket háromszor adtuk hozzá és háromszor vontuk le, vagyis egyszer sem számoltuk), ezért a hármas metszetet vissza kell adni:',
        },
        {
          kind: 'formula',
          tex: '|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: három halmaz',
          problem:
            'Egy 40 fős évfolyamon 20-an tanulnak angolul ($A$), 18-an németül ($B$), 15-en franciául ($C$). Angolul és németül 8-an, angolul és franciául 6-an, németül és franciául 5-en, mindhárom nyelvet 3-an tanulják. Hányan nem tanulnak egyik nyelvet sem?',
          solution:
            '$|A \\cup B \\cup C| = 20 + 18 + 15 - 8 - 6 - 5 + 3 = 37$.\n\nEgyik nyelvet sem tanulja: $40 - 37 = 3$ diák.\n\nEllenőrzés a Venn-diagram részeivel: csak angol $20 - 8 - 6 + 3 = 9$, csak német $18 - 8 - 5 + 3 = 8$, csak francia $15 - 6 - 5 + 3 = 7$, angol-német (franciát nem) $8 - 3 = 5$, angol-francia (németet nem) $6 - 3 = 3$, német-francia (angolt nem) $5 - 3 = 2$, mindhárom $3$. Összeg: $9 + 8 + 7 + 5 + 3 + 2 + 3 = 37$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: oszthatóság a szitával',
          problem:
            'Hány olyan szám van 1 és 100 között, amely osztható 2-vel vagy 3-mal? Hány osztható 2-vel, 3-mal vagy 5-tel?',
          solution:
            '2-vel osztható: 50 szám, 3-mal: 33, mindkettővel, vagyis 6-tal: 16. Tehát $50 + 33 - 16 = 67$ szám.\n\nHárom osztóval: 5-tel 20 szám, 10-zel (2 és 5) 10 szám, 15-tel (3 és 5) 6 szám, 30-cal (mindhárom) 3 szám. Az eredmény: $50 + 33 + 20 - 16 - 10 - 6 + 3 = 74$.\n\nEgyikkel sem osztható: $100 - 74 = 26$ szám.',
        },
        {
          kind: 'tip',
          text: 'A feladat gyakran a **komplementert** kérdezi ("hányan nem ..."). Először a legalább az egyikben lévők számát számold ki, és vond le az összesből.',
        },
        { kind: 'heading', text: 'Végtelen halmazok', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Véges halmaz: az elemei megszámlálhatók egy természetes számig. A természetes számok halmaza $\\mathbb{N}$ végtelen. Egy halmaz **megszámlálhatóan végtelen**, ha elemei kölcsönösen egyértelműen (bijekcióval) megfeleltethetők a pozitív egész számoknak, vagyis felsorolhatók egy $a_1, a_2, a_3, \\dots$ sorozatba úgy, hogy minden elem pontosan egyszer szerepel. Ellenkező esetben a végtelen halmaz **nem megszámlálható**.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Példák',
          columns: ['Halmaz', 'Típus'],
          rows: [
            { label: 'Véges', cells: ['egy doboz 12 golyója, $\\{2; 4; 6\\}$', 'véges'] },
            {
              label: 'Természetes, egész, páros számok',
              cells: ['$\\mathbb{N}$, $\\mathbb{Z}$, a páros számok', 'megszámlálhatóan végtelen'],
            },
            {
              label: 'Valós számok',
              cells: [
                '$\\mathbb{R}$, vagy a $[0; 1]$ intervallum',
                'nem megszámlálhatóan végtelen',
              ],
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa 4.: az egész számok megszámlálhatóan végtelenek',
          problem: 'Bizonyítsa be, hogy az egész számok halmaza megszámlálhatóan végtelen!',
          solution:
            'Soroljuk fel az egész számokat így: $0, 1, -1, 2, -2, 3, -3, \\dots$ Ekkor a $0$ az 1. elem, a $k > 0$ szám a $2k$-adik, a $-k$ szám a $(2k+1)$-edik elem. Ez minden egész számot pontosan egyszer ér el, tehát az $n \\mapsto$ ($n$-edik elem) hozzárendelés kölcsönösen egyértelmű megfeleltetés $\\mathbb{N}^+$ és $\\mathbb{Z}$ között.\n\nHasonlóan a páros számok: az $n$-edik elem $2n$, ez kölcsönösen egyértelmű. Érdekes, hogy egy végtelen halmaznak lehet valódi részhalmaza, amely ugyanolyan számosságú: a páros számok "ugyanannyian vannak", mint az összes természetes szám.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: két halmazos szöveges feladat ("Hányan sportolnak ...?"), vagy részhalmazok számának meghatározása.',
            'II. A vagy II. B rész: három halmazos feladat Venn-diagrammal, esetleg oszthatósági vagy kombinatorikai kérdéssel összekötve.',
            'Szóbeli: a logikai szita tétele és bizonyítása két halmazra; emelt szinten a megszámlálhatóan végtelen halmaz definíciója és példa.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a szöveg adataiból a "csak ..." részeket összekeverni a "legalább ..." adatokkal. Ha azt írják, hogy 8-an tanulnak angolul **és** németül, akkor ebben a hármas metszet is benne van. Mindig kérdezd meg: ez a szám a Venn-diagram melyik részeit tartalmazza?',
        },
        {
          kind: 'tip',
          text: 'Ellenőrzés: a Venn-diagram minden részét írd be, és add össze őket. Az összegnek az alaphalmaz elemszámának kell lennie (a "egyik sem" résszel együtt).',
        },
      ],
      topicMatch: ['logikai szita'],
      quiz: [
        {
          question: 'Ha $|A| = 12$, $|B| = 9$ és $|A \\cap B| = 4$, mennyi $|A \\cup B|$?',
          options: ['21', '17', '25', '13'],
          answer: 1,
          explanation:
            '$12 + 9 - 4 = 17$. A közös elemeket kétszer számoltuk, ezért egyszer le kell vonni.',
        },
        {
          question: 'Hány szám osztható 2-vel vagy 3-mal az 1 és 100 közötti egész számok között?',
          options: ['83', '66', '67', '72'],
          answer: 2,
          explanation:
            '2-vel 50, 3-mal 33, 6-tal 16 szám osztható: $50 + 33 - 16 = 67$. A 83 a metszet levonása nélküli összeg.',
        },
        {
          question:
            'Egy 30 fős osztályban mindenki tanul angolt vagy németet (vagy mindkettőt). Angolt 20-an, németet 14-en tanulnak. Hányan tanulnak mindkettőt?',
          options: ['4', '6', '10', '16'],
          answer: 0,
          explanation: '$30 = 20 + 14 - x$, ebből $x = 4$.',
        },
        {
          question:
            'Hány részhalmaza van egy 4 elemű halmaznak (az üres halmazt és önmagát is beleértve)?',
          options: ['8', '12', '16', '4'],
          answer: 2,
          explanation: 'Minden elem benne lehet vagy nem, ezért $2^4 = 16$ részhalmaz van.',
        },
        {
          question: 'Melyik halmaz NEM megszámlálhatóan végtelen?',
          options: [
            'a természetes számok halmaza',
            'az egész számok halmaza',
            'a $[0; 1]$ intervallum valós számai',
            'a páros pozitív egész számok halmaza',
          ],
          answer: 2,
          explanation:
            'A természetes, az egész és a páros számok felsorolhatók egy sorozatba. A valós számok nem sorolhatók fel, ezért az intervallum nem megszámlálható.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Logikai szita (szitaformula)', url: wiki('szitaformula logikai szita') },
        { label: 'Számosság és megszámlálható halmaz', url: wiki('megszámlálható halmaz') },
        { label: 'Halmaz elemszáma', url: wiki('halmaz számossága') },
      ],
    },
    {
      id: 'matematikai-logika-kijelentesek',
      subject: 'matematika',
      unitId: 'halmazok-logika',
      title: 'Kijelentések, tagadás és logikai műveletek',
      level: 'kozep',
      requirement: {
        kozep:
          'Egyszerű matematikai szövegek értelmezése; a tagadás művelete; az "és", a "megengedő vagy" és a "kizáró vagy" jelentése és kapcsolata a halmazműveletekkel; a "ha ..., akkor ..." és az "akkor és csak akkor" típusú állítások igazságértékének megállapítása; a "minden" és a "van olyan" helyes használata',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Kijelentés**: olyan mondat, amelyről egyértelműen eldönthető, hogy igaz vagy hamis.',
            '**Tagadás**: $\\neg A$ pontosan akkor igaz, ha $A$ hamis. Nem elég "elé írni, hogy nem": jól kell megfogalmazni.',
            '**És**: akkor igaz, ha mindkettő igaz (metszet). **Megengedő vagy**: igaz, ha legalább az egyik igaz (unió). **Kizáró vagy**: igaz, ha pontosan az egyik igaz.',
            '**Ha $A$, akkor $B$** ($A \\Rightarrow B$): csak akkor hamis, ha $A$ igaz, $B$ pedig hamis. **$A$ akkor és csak akkor, ha $B$** ($A \\Leftrightarrow B$): igaz, ha $A$ és $B$ azonos igazságértékű.',
            '**Minden** tagadása: **van olyan**, amelyre nem. **Van olyan** tagadása: **minden** esetben nem.',
            '**De Morgan** a logikában: $\\neg(A \\text{ és } B)$ = "nem $A$ vagy nem $B$"; $\\neg(A \\text{ vagy } B)$ = "nem $A$ és nem $B$".',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kijelentés és igazságérték' },
        {
          kind: 'text',
          text: 'Kijelentés például: "7 prímszám" (igaz), "Minden prímszám páratlan" (hamis, mert a 2 prím), "Gyere ide!" (nem kijelentés). A **nyitott mondat** (például "$x > 3$") csak akkor kijelentés, ha az $x$ értékét rögzítjük, vagy megmondjuk, hogy minden $x$-re, vagy van-e olyan $x$, amelyre állítjuk.',
        },
        { kind: 'heading', text: 'Az "és", a "vagy" és a kizáró "vagy"' },
        {
          kind: 'compare',
          title: 'Igazságtáblázat ($i$: igaz, $h$: hamis)',
          columns: ['És, vagy, kizáró vagy', 'Ha A, akkor B; akkor és csak akkor'],
          rows: [
            {
              label: 'A = i, B = i',
              cells: [
                'és: i, vagy: i, kizáró vagy: h',
                'ha A, akkor B: i; A akkor és csak akkor, ha B: i',
              ],
            },
            {
              label: 'A = i, B = h',
              cells: [
                'és: h, vagy: i, kizáró vagy: i',
                'ha A, akkor B: h; A akkor és csak akkor, ha B: h',
              ],
            },
            {
              label: 'A = h, B = i',
              cells: [
                'és: h, vagy: i, kizáró vagy: i',
                'ha A, akkor B: i; A akkor és csak akkor, ha B: h',
              ],
            },
            {
              label: 'A = h, B = h',
              cells: [
                'és: h, vagy: h, kizáró vagy: h',
                'ha A, akkor B: i; A akkor és csak akkor, ha B: i',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A halmazműveletekkel így kapcsolódik: ha $A$ és $B$ egy elem tulajdonságai, akkor az elemek "$A$ és $B$" halmaza a **metszet**, az "$A$ vagy $B$" halmaza az **unió**, a "nem $A$" halmaza a **komplementer**, a "kizáró vagy" halmaza pedig $(A \\setminus B) \\cup (B \\setminus A)$, a két halmaz "külső" részei. Az $A \\subseteq B$ éppen azt jelenti: "ha $x \\in A$, akkor $x \\in B$".',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: kizáró vagy',
          problem:
            'Legyen $A = \\{1; 2; 3; 4; 5; 6\\}$ és $B = \\{2; 4; 6; 8; 10\\}$. Adja meg azokat a számokat, amelyek az $A$ és a $B$ halmaz közül pontosan az egyikben vannak benne!',
          solution:
            'Ez a kizáró vagy: $(A \\setminus B) \\cup (B \\setminus A) = \\{1; 3; 5\\} \\cup \\{8; 10\\} = \\{1; 3; 5; 8; 10\\}$.\n\nA megengedő vagy (unió) ezen kívül a közös $2; 4; 6$ elemeket is tartalmazná.',
        },
        { kind: 'heading', text: 'A "ha ..., akkor ..." állítás' },
        {
          kind: 'text',
          text: 'Az $A \\Rightarrow B$ állítás **csak egyetlen esetben hamis**: ha $A$ igaz, de $B$ hamis. Hamis előfeltételből bármi következhet: "Ha $2 \\cdot 2 = 5$, akkor 3 páros" **igaz** állítás, mert az előfeltétel hamis. Ez eleinte furcsa, de így lesz igaz a "minden 6-tal osztható szám osztható 3-mal" a 4-re is: a 4 nem osztható 6-tal, tehát az állítás rá nem hamis.',
        },
        {
          kind: 'text',
          text: 'Az **akkor és csak akkor** állítás két irányt mond: $A \\Rightarrow B$ és $B \\Rightarrow A$ is igaz. Példa: "Egy szám akkor és csak akkor osztható 10-zel, ha osztható 2-vel és 5-tel" igaz. Ezzel szemben az "Egy szám akkor és csak akkor páros, ha osztható 4-gyel" hamis, mert a 6 páros, de nem osztható 4-gyel.',
        },
        { kind: 'heading', text: 'Tagadás' },
        {
          kind: 'compare',
          title: 'Hogyan tagadunk helyesen?',
          columns: ['Állítás', 'Tagadása'],
          rows: [
            { label: 'Egyszerű', cells: ['$x > 3$', '$x \\le 3$ (nem: $x < 3$)'] },
            {
              label: 'Mennyiség',
              cells: ['legalább 3 piros golyó van', 'legfeljebb 2 piros golyó van'],
            },
            {
              label: 'És',
              cells: ['Anna magas és szőke', 'Anna nem magas vagy nem szőke'],
            },
            {
              label: 'Vagy',
              cells: ['Anna magas vagy szőke', 'Anna nem magas és nem szőke'],
            },
            {
              label: 'Minden',
              cells: [
                'Minden tanuló szereti a matekot',
                'Van olyan tanuló, aki nem szereti a matekot',
              ],
            },
            {
              label: 'Van olyan',
              cells: ['Van olyan prímszám, amely páros', 'Egyetlen prímszám sem páros'],
            },
          ],
        },
        {
          kind: 'warning',
          text: 'A "Minden tanuló szereti a matekot" tagadása **nem** az, hogy "Egyik tanuló sem szereti". Elég egyetlen tanuló, aki nem szereti. A "van olyan" állítás igazolásához elég **egy példa**, a "minden" állítás cáfolásához elég **egy ellenpélda**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: igazságérték megállapítása',
          problem:
            'Döntse el az alábbi állítások igazságértékét, és adja meg a tagadásukat: (a) Minden pozitív egész szám négyzete nagyobb önmagánál. (b) Van olyan egész szám, amelynek a négyzete 49.',
          solution:
            '(a) Hamis: az $1^2 = 1$ nem nagyobb 1-nél. Tagadása: Van olyan pozitív egész szám, amelynek a négyzete nem nagyobb önmagánál (például az 1).\n\n(b) Igaz: a 7 és a $-7$ ilyen. Tagadása: Nincs olyan egész szám, amelynek a négyzete 49, vagyis minden egész szám négyzete 49-től különböző. A tagadás hamis, mert az eredeti igaz.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: "Adja meg az állítás tagadását!", vagy "Döntse el, hogy igaz vagy hamis az állítás!", gyakran indoklással (ellenpélda vagy bizonyítás).',
            'Egyszerű logikai feladat: ki hazudik, melyik ajtó mögött van a nyeremény; a szöveg kijelentéseit kell kezelni, a lehetséges esetek végigvizsgálásával.',
            'Összetett állítás: "Ha ..., akkor ..." és "akkor és csak akkor" igazságértéke konkrét számokra, illetve halmazműveletekkel összekötve.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: a "legalább" és "legfeljebb" tagadásának összekeverése; a "minden" tagadásaként "egyik sem" írása; az "és" tagadásánál a "vagy" elfelejtése; a "ha ..., akkor ..." hamis előfeltétellel igaznak tekintése helyett hamisnak mondása.',
        },
        {
          kind: 'tip',
          text: 'Logikai feladatnál (például hazudós-igazmondós) vizsgáld végig a lehetőségeket: tegyük fel, hogy az első állítás igaz, és nézd meg, ellentmondás lesz-e. Írd fel táblázatba, hogy ki mit állít.',
        },
      ],
      topicMatch: ['=logika', 'kijelentések', 'tagadás', 'logikai feladat', 'logikai indoklás'],
      quiz: [
        {
          question: 'Melyik a "Minden diák szereti a matematikát" állítás tagadása?',
          options: [
            'Egy diák sem szereti a matematikát.',
            'Van olyan diák, aki nem szereti a matematikát.',
            'Minden diák utálja a matematikát.',
            'Van olyan diák, aki szereti a matematikát.',
          ],
          answer: 1,
          explanation:
            'A "minden" tagadása a "van olyan, amelyre nem". Az "egyik sem" ennél erősebb állítás, ezért nem tagadás.',
        },
        {
          question: 'Melyik állítás igaz?',
          options: [
            'Ha 9 osztható 3-mal, akkor 9 páros.',
            'Ha 5 prím, akkor 5 osztható 2-vel.',
            'Ha 8 páros, akkor 8 osztható 3-mal.',
            'Ha 5 osztható 2-vel, akkor 5 osztható 4-gyel.',
          ],
          answer: 3,
          explanation:
            'A "ha ..., akkor ..." csak akkor hamis, ha az előfeltétel igaz, a következmény hamis. Az első három állításnál az előfeltétel igaz, a következmény hamis. A negyediknél az előfeltétel hamis (5 nem osztható 2-vel), ezért az állítás igaz.',
        },
        {
          question:
            'Az $A = \\{1; 2; 3; 4; 5; 6\\}$ és $B = \\{2; 4; 6; 8; 10\\}$ halmazok esetén hány elem van pontosan az egyikben ("kizáró vagy")?',
          options: ['3', '5', '8', '11'],
          answer: 1,
          explanation:
            '$|A \\setminus B| + |B \\setminus A| = 3 + 2 = 5$ (az 1, 3, 5, 8, 10 számok).',
        },
        {
          question: 'Melyik állítás igaz?',
          options: [
            'Egy szám akkor és csak akkor páros, ha osztható 4-gyel.',
            'Az $x^2 = 9$ akkor és csak akkor, ha $x = 3$.',
            'Egy szám akkor és csak akkor osztható 10-zel, ha osztható 2-vel és 5-tel.',
            'Egy háromszög akkor és csak akkor egyenlő szárú, ha szabályos.',
          ],
          answer: 2,
          explanation:
            'Az "akkor és csak akkor" mindkét irányban igaz kell legyen. A 10-zel oszthatóságnál igaz. A többi hamis: a 6 páros, de nem osztható 4-gyel; $x = -3$ is megoldás; az egyenlő szárú háromszög nem mindig szabályos.',
        },
        {
          question: 'Mi a "Legalább 3 piros golyó van a dobozban" állítás tagadása?',
          options: [
            'Pontosan 2 piros golyó van a dobozban.',
            'Legalább 3 nem piros golyó van a dobozban.',
            'Legfeljebb 2 piros golyó van a dobozban.',
            'Nincs piros golyó a dobozban.',
          ],
          answer: 2,
          explanation:
            'A legalább 3 tagadása a kevesebb mint 3, vagyis legfeljebb 2 (0, 1 vagy 2 piros golyó). A "pontosan 2" csak az egyik eset.',
        },
      ],
      sources: [
        { label: 'Matematikai logika', url: wiki('matematikai logika') },
        { label: 'Kijelentéslogika és igazságtábla', url: wiki('kijelentéslogika igazságtábla') },
        { label: 'Kvantorok (minden, van olyan)', url: wiki('kvantor logika') },
      ],
    },
    {
      id: 'definicio-tetel-megfordit',
      subject: 'matematika',
      unitId: 'halmazok-logika',
      title: 'Definíció, tétel, megfordítás és egyszerű bizonyítás',
      level: 'both',
      requirement: {
        kozep:
          'Definíciók és tételek pontos megfogalmazása; egyszerű állítások, tételek bizonyítása; annak eldöntése, hogy egy egyszerű állítás igaz vagy hamis; egy állítás megfordításának megfogalmazása',
        emelt:
          'A szükséges, az elégséges, valamint a szükséges és elégséges feltétel fogalmának helyes használata feladatokban; tételek megfordításának megfogalmazása konkrét esetekben',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Definíció**: egy fogalom pontos meghatározása (például: a paralelogramma olyan négyszög, amelynek két-két szemközti oldala párhuzamos).',
            '**Tétel**: bizonyított igaz állítás, általában "ha ..., akkor ..." alakú: $A \\Rightarrow B$. Az $A$ az **előfeltétel**, a $B$ a **következmény**.',
            '**Megfordítás**: $B \\Rightarrow A$. Az eredeti tétel igazságából **nem következik**, hogy a megfordítása is igaz.',
            '**Hamis állítást egyetlen ellenpéldával** cáfolhatunk. Igaz általános állítást példákkal **nem** lehet bizonyítani, csak általános érveléssel.',
            '**Direkt bizonyítás**: az előfeltételből lépésről lépésre eljutunk a következményhez.',
            'Emelt szinten: ha $A \\Rightarrow B$, akkor $A$ **elégséges** feltétele $B$-nek, $B$ pedig **szükséges** feltétele $A$-nak. Ha $A \\Leftrightarrow B$, akkor szükséges és elégséges.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Definíció és tétel' },
        {
          kind: 'text',
          text: 'A definíció megállapodás: megmondja, mit nevezünk egy fogalomnak, és nem kell bizonyítani. A tétel olyan állítás, amelynek igazságát **bizonyítani** kell. Mindkettőt pontosan, minden szükséges feltétellel kell megfogalmazni. Hiányos: "A háromszög területe $\\frac{a \\cdot m}{2}$." Pontos: "A háromszög területe az egyik oldal és a hozzá tartozó magasság szorzatának a fele."',
        },
        { kind: 'heading', text: 'A megfordítás' },
        {
          kind: 'compare',
          title: 'Tétel és megfordítása',
          columns: ['Tétel', 'Megfordítása'],
          rows: [
            {
              label: 'Alak',
              cells: ['Ha $A$, akkor $B$', 'Ha $B$, akkor $A$'],
            },
            {
              label: 'Példa 1.',
              cells: [
                'Ha egy szám osztható 6-tal, akkor osztható 3-mal. (igaz)',
                'Ha egy szám osztható 3-mal, akkor osztható 6-tal. (hamis: 9)',
              ],
            },
            {
              label: 'Példa 2.',
              cells: [
                'Ha egy háromszögben $a^2 + b^2 = c^2$, akkor a háromszög derékszögű. (igaz)',
                'Ha egy háromszög derékszögű, akkor oldalaira $a^2 + b^2 = c^2$ teljesül ($c$ a leghosszabb oldal). (igaz)',
              ],
            },
            {
              label: 'Példa 3.',
              cells: [
                'Ha egy négyszög négyzet, akkor téglalap. (igaz)',
                'Ha egy négyszög téglalap, akkor négyzet. (hamis)',
              ],
            },
          ],
        },
        {
          kind: 'warning',
          text: 'A megfordítás **nem** a tagadás! Az "Ha esik az eső, akkor ázik az út" megfordítása: "Ha ázik az út, akkor esik az eső" (nem biztos, hogy igaz: locsolhattak). Tagadása: "Esik az eső, és mégsem ázik az út."',
        },
        { kind: 'heading', text: 'Állítások igazságának eldöntése' },
        {
          kind: 'text',
          text: 'Általános állítás ("minden ...") **cáfolásához** elég egy **ellenpélda**. Például a "Minden prímszám páratlan" állítást a 2 cáfolja. **Igazolásához** viszont nem elég néhány eset kipróbálása: például $n^2 + n + 41$ prímszám $n = 0, 1, \\dots, 39$ esetén is, de $n = 40$-re $40^2 + 40 + 41 = 1681 = 41^2$ már nem az. Az állítást tehát általánosan kell bizonyítani.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: direkt bizonyítás',
          problem: 'Bizonyítsa be, hogy három egymást követő egész szám összege osztható 3-mal!',
          solution:
            'Legyen a három szám $n - 1$, $n$, $n + 1$ ($n$ egész szám). Az összegük $(n - 1) + n + (n + 1) = 3n$. Ez $n$ egész szám volta miatt 3-mal osztható.\n\nAz állítás igaz minden egész $n$-re, ezt a betűs jelölés biztosítja. (Példa: $4 + 5 + 6 = 15 = 3 \\cdot 5$.)',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: bizonyítás páros és páratlan számokkal',
          problem: 'Bizonyítsa be, hogy két páratlan szám összege páros! Igaz-e a megfordítása?',
          solution:
            'A páratlan számok $2k + 1$ és $2m + 1$ alakúak ($k, m$ egész számok). Összegük $2k + 1 + 2m + 1 = 2(k + m + 1)$, ami páros.\n\nA megfordítás: "Ha két szám összege páros, akkor mindkettő páratlan." Hamis: $2 + 4 = 6$ páros összeg, de a tagok párosak. (Ellenpélda.)',
        },
        { kind: 'heading', text: 'Szükséges és elégséges feltétel', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Az $A \\Rightarrow B$ igaz állításban $A$ **elégséges** feltétele $B$-nek (ha $A$ teljesül, $B$ már biztos), $B$ pedig **szükséges** feltétele $A$-nak (ha $B$ nem teljesül, $A$ sem). Ha $A \\Leftrightarrow B$ is igaz, akkor $A$ **szükséges és elégséges** $B$-hez. Példa: egy szám 3-mal oszthatósága **szükséges**, de **nem elégséges** a 6-tal oszthatóhoz; a 6-tal oszthatóság viszont **elégséges** a 3-mal oszthatóhoz. Szükséges és elégséges feltétel: egy szám akkor és csak akkor osztható 10-zel, ha osztható 2-vel és 5-tel.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa 3.: szükséges, elégséges, megfordítás',
          problem:
            'Az "Ha egy négyszög paralelogramma, akkor átlói felezik egymást" tételben milyen feltétel az átlók felezése a paralelogrammához? Mondja ki a tétel megfordítását, és döntse el, igaz-e!',
          solution:
            'Az átlók felezése **szükséges** feltétel a paralelogrammához: ha egy négyszögben az átlók nem felezik egymást, nem lehet paralelogramma.\n\nMegfordítás: "Ha egy négyszög átlói felezik egymást, akkor a négyszög paralelogramma." Ez a megfordítás is igaz (bizonyítható középpontos tükrözéssel vagy egybevágó háromszögekkel).\n\nÍgy az átlók felezése **szükséges és elégséges** feltétel: egy négyszög akkor és csak akkor paralelogramma, ha az átlói felezik egymást.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: "Igaz vagy hamis az állítás? Válaszát indokolja!" Hamis esetben ellenpélda kell, igaz esetben rövid érvelés.',
            'I. vagy II. A rész: "Fogalmazza meg az állítás megfordítását, és döntse el, igaz-e!"',
            'Bizonyítási feladat egyszerű számelméleti vagy geometriai állításra (például oszthatóság betűs jelöléssel).',
            'Szóbeli: tétel pontos kimondása, megfordítása, bizonyítása; emelt szinten a szükséges és elégséges feltétel használata.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: a megfordítás és a tagadás összekeverése; a "példa elég a bizonyításhoz" tévhit; ellenpéldánál olyan példa választása, amely az állításnak megfelel; a feltételek közül egy elhagyása a tétel kimondásakor.',
        },
        {
          kind: 'tip',
          text: 'Oszthatósági bizonyításnál használj betűs alakot: páros szám $2k$, páratlan $2k + 1$, 3-mal osztható $3k$, és az eredményt hozd a kívánt alakra. A bizonyítás végén írd le, miért következik az állítás.',
        },
      ],
      topicMatch: ['bizonyítás', 'megfordítás', 'ellenpélda', 'példaadás'],
      quiz: [
        {
          question: 'Melyik a "Ha egy négyszög négyzet, akkor téglalap" állítás megfordítása?',
          options: [
            'Ha egy négyszög nem négyzet, akkor nem téglalap.',
            'Egy négyszög négyzet, de nem téglalap.',
            'Ha egy négyszög nem téglalap, akkor négyzet.',
            'Ha egy négyszög téglalap, akkor négyzet.',
          ],
          answer: 3,
          explanation:
            'A megfordításban az előfeltétel és a következmény helyet cserél. Az első a negáció-megfordítás (inverz), a második az eredeti állítás tagadása. A megfordítás hamis, mert nem minden téglalap négyzet.',
        },
        {
          question: 'Melyik szám cáfolja a "Minden prímszám páratlan" állítást?',
          options: ['9', '2', '15', '1'],
          answer: 1,
          explanation:
            'Ellenpéldának olyan prímszámot kell találni, amely nem páratlan: ez a 2. A 9 és a 15 nem prím, az 1 nem prímszám.',
        },
        {
          question:
            'Igaz-e a "Ha egy szám osztható 6-tal, akkor osztható 3-mal" tétel megfordítása?',
          options: [
            'Igaz, mert 6 = 2 · 3.',
            'Igaz, mert 3 osztója a 6-nak.',
            'Hamis, ellenpélda a 9.',
            'Hamis, ellenpélda a 12.',
          ],
          answer: 2,
          explanation:
            'A megfordítás: "Ha osztható 3-mal, akkor osztható 6-tal". A 9 osztható 3-mal, de nem 6-tal. A 12 mindkettővel osztható, ezért nem ellenpélda.',
        },
        {
          question: 'Melyik gondolatmenet bizonyítja, hogy két páros szám összege páros?',
          options: [
            'Kipróbáltam: 2 + 4, 6 + 8, 10 + 12 mind páros.',
            'A páros számok $2k$ és $2m$ alakúak, összegük $2(k + m)$, ami páros.',
            'Két páros szám összege nem lehet páratlan, mert az furcsa lenne.',
            'A 4 és a 6 páros számok, összegük 10, ami páros.',
          ],
          answer: 1,
          explanation:
            'A bizonyításhoz általános, betűs jelölés kell: $2k + 2m = 2(k + m)$. Néhány példa kipróbálása nem bizonyítás.',
        },
        {
          question:
            'A "Ha egy szám osztható 6-tal, akkor osztható 3-mal" állításban a 3-mal oszthatóság a 6-tal oszthatóságnak:',
          options: [
            'szükséges és elégséges feltétele',
            'elégséges, de nem szükséges feltétele',
            'szükséges, de nem elégséges feltétele',
            'sem szükséges, sem elégséges feltétele',
          ],
          answer: 2,
          explanation:
            'Aki osztható 6-tal, az biztosan osztható 3-mal, tehát a 3-mal oszthatóság szükséges. De a 3-mal oszthatóság nem elég a 6-tal oszthatósághoz (a 9 ellenpélda).',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Matematikai tétel és bizonyítás', url: wiki('matematikai bizonyítás') },
        { label: 'Szükséges és elégséges feltétel', url: wiki('szükséges és elégséges feltétel') },
        { label: 'Ellenpélda', url: wiki('ellenpélda') },
      ],
    },
    {
      id: 'bizonyitasi-modszerek',
      subject: 'matematika',
      unitId: 'halmazok-logika',
      title: 'Bizonyítási módszerek: indirekt, skatulyaelv, teljes indukció',
      level: 'emelt',
      requirement: {
        emelt:
          'A direkt és az indirekt bizonyítás, a skatulyaelv és a teljes indukció ismerete, példa mondása az alkalmazásukra',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Direkt bizonyítás**: az előfeltételből közvetlenül, lépésenként jutunk a következményhez.',
            '**Indirekt bizonyítás**: feltesszük, hogy az állítás **tagadása** igaz, és ebből **ellentmondásra** jutunk. Így az állítás igaz.',
            '**Skatulyaelv**: ha $n$ skatulyába $n + 1$ (vagy több) tárgyat helyezünk, lesz olyan skatulya, amelyben legalább két tárgy van.',
            '**Teljes indukció**: ha az állítás igaz $n = 1$-re (**alapeset**), és abból, hogy igaz $n = k$-ra, következik $n = k + 1$-re (**öröklődés**), akkor minden pozitív egész $n$-re igaz.',
            'Az indukciót természetes számoktól függő állításoknál (összegképletek, oszthatóság) használjuk.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Indirekt bizonyítás' },
        {
          kind: 'text',
          text: 'Menete: 1. tegyük fel, hogy az állítás **nem** igaz (a tagadása igaz); 2. logikai lépésekkel ellentmondásra jutunk (valami egyszerre igaz és hamis); 3. ezért a feltevés hamis, az állítás igaz. Akkor érdemes használni, ha a tagadásból sok használható információ jön.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: a $\\sqrt{2}$ irracionális',
          problem: 'Bizonyítsa be, hogy a $\\sqrt{2}$ nem racionális szám!',
          solution:
            'Tegyük fel, hogy $\\sqrt{2} = \\frac{p}{q}$, ahol $p, q$ pozitív egész számok és a tört **már egyszerűsített** (nincs közös osztójuk).\n\nNégyzetre emelve: $2 = \\frac{p^2}{q^2}$, azaz $p^2 = 2q^2$. Tehát $p^2$ páros, ezért $p$ is páros (páratlan szám négyzete páratlan), $p = 2k$.\n\nVisszahelyettesítve: $4k^2 = 2q^2$, azaz $q^2 = 2k^2$. Így $q^2$ páros, tehát $q$ is páros.\n\nEllentmondás: $p$ és $q$ is páros, de a törtet egyszerűsítettnek tekintettük. A feltevés hamis, tehát a $\\sqrt{2}$ nem racionális.',
        },
        { kind: 'heading', text: 'Skatulyaelv' },
        {
          kind: 'text',
          text: 'Ha $n$ skatulyában $n + 1$ tárgyat helyezünk el, lesz olyan skatulya, amelyben legalább kettő van. (Indirekt bizonyítás: ha minden skatulyában legfeljebb 1 lenne, összesen legfeljebb $n$ tárgy volna.) Általánosabban: $m$ tárgy $n$ skatulyában esetén van olyan skatulya, amelyben legalább $\\lceil m / n \\rceil$ tárgy van. A nehézség mindig az, hogy **mi legyen a skatulya**, és **mi a tárgy**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: skatulyaelv',
          problem:
            'Igazolja, hogy az 1, 2, ..., 10 számok közül bárhogy választunk ki hatot, lesz köztük két olyan, amelyek összege 11!',
          solution:
            'Skatulyák: a számokat párokba soroljuk, amelyek összege 11: $\\{1; 10\\}$, $\\{2; 9\\}$, $\\{3; 8\\}$, $\\{4; 7\\}$, $\\{5; 6\\}$. Ez 5 skatulya.\n\nTárgyak: a kiválasztott 6 szám. A skatulyaelv szerint lesz két szám, amelyek ugyanabba a párba esnek, és ezek összege 11.\n\nÉrdekes: 5 szám kiválasztása nem elég (például 1, 2, 3, 4, 5 egyik párja sem fordul elő kétszer).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: erősebb skatulyaelv',
          problem:
            'Egy 25 fős csoportban legalább hányan születtek ugyanabban a hónapban biztosan?',
          solution:
            '12 skatulya (hónap), 25 tárgy (ember). Ha minden hónapban legfeljebb 2-en születtek volna, akkor összesen legfeljebb $12 \\cdot 2 = 24$ ember lenne. 25 van, ezért van olyan hónap, amelyben legalább 3-an születtek. ($\\lceil 25 / 12 \\rceil = 3$.)',
        },
        { kind: 'heading', text: 'Teljes indukció' },
        {
          kind: 'text',
          text: 'Mintha dominókat döntenénk: ha az első eldől (**alapeset**), és minden dominó eldöntése eldönti a következőt (**indukciós lépés**), akkor mindegyik eldől. Az indukciós lépésben az **indukciós feltevést** ($n = k$-ra igaz) használjuk fel a $k + 1$-re.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 4.: az első n páratlan szám összege',
          problem:
            'Bizonyítsa be teljes indukcióval, hogy $1 + 3 + 5 + \\dots + (2n - 1) = n^2$ minden pozitív egész $n$-re!',
          solution:
            '**Alapeset** ($n = 1$): bal oldal $1$, jobb oldal $1^2 = 1$. Egyenlő.\n\n**Indukciós feltevés**: tegyük fel, hogy valamely $k$-ra igaz: $1 + 3 + \\dots + (2k - 1) = k^2$.\n\n**Lépés** ($k \\to k + 1$): $1 + 3 + \\dots + (2k - 1) + (2k + 1) = k^2 + (2k + 1) = (k + 1)^2$. Ez éppen az állítás $n = k + 1$-re.\n\nTehát az állítás minden pozitív egész $n$-re igaz. (Ellenőrzés: $n = 10$-re $1 + 3 + \\dots + 19 = 100 = 10^2$.)',
        },
        {
          kind: 'warning',
          text: 'Az indukciónál mindkét lépés kell. Az öröklődés alapeset nélkül semmit sem bizonyít: például a "$n = n + 1$" állítás az öröklődést teljesíti ($k = k + 1$ esetén $k + 1 = k + 2$), de egyetlen $n$-re sem igaz.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű szóbeli: tétel kimondása és bizonyítása (például a $\\sqrt{2}$ irracionális, a skatulyaelv egy alkalmazása); a bizonyítási módszer megnevezése és példa.',
            'II. B rész: bizonyítsa be, hogy ...; oszthatósági vagy összegképletes állítás teljes indukcióval; skatulyaelves kombinatorikai vagy gráfos feladat.',
            'Gráfoknál a skatulyaelv jellegzetes alkalmazása: egy legalább kétpontú egyszerű gráfban van két azonos fokszámú pont.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: indirekt bizonyításnál nem a tagadást tesszük fel (például "nem irracionális" helyett "nem racionális"); indukciónál az alapeset kihagyása vagy az indukciós feltevés használata nélküli lépés; skatulyaelvnél rossz skatulyák választása.',
        },
        {
          kind: 'tip',
          text: 'Indukciónál mindig írd le: alapeset, indukciós feltevés, mit kell bizonyítani $k + 1$-re, a lépés, és a végén a következtetést. Ezek mind pontot érnek a javítókulcs szerint.',
        },
      ],
      topicMatch: ['skatulyaelv', 'teljes indukció'],
      quiz: [
        {
          question: 'Milyen módszerrel bizonyítjuk általában, hogy a $\\sqrt{2}$ nem racionális?',
          options: [
            'teljes indukcióval',
            'skatulyaelvvel',
            'indirekt bizonyítással',
            'példákkal való kipróbálással',
          ],
          answer: 2,
          explanation:
            'Feltesszük, hogy racionális (az állítás tagadása), és ellentmondásra jutunk: ez az indirekt bizonyítás.',
        },
        {
          question:
            'Egy 25 fős csoportban legalább hányan születtek biztosan ugyanabban a hónapban?',
          options: ['2', '3', '4', '13'],
          answer: 1,
          explanation:
            'Ha minden hónapban legfeljebb 2-en születtek volna, összesen legfeljebb 24 fő lenne. 25 fő van, ezért van olyan hónap, amelyben legalább 3.',
        },
        {
          question: 'Melyik a teljes indukció két lépése?',
          options: [
            'tagadás és ellentmondás',
            'alapeset és öröklődés ($k \\to k + 1$)',
            'skatulyák és tárgyak megadása',
            'állítás és megfordítása',
          ],
          answer: 1,
          explanation:
            'Az állítást igazoljuk az első esetre, majd megmutatjuk, hogy ha egy $k$-ra igaz, akkor $k + 1$-re is.',
        },
        {
          question:
            'Legalább hány számot kell kiválasztani az 1, 2, ..., 10 közül ahhoz, hogy biztosan legyen két kiválasztott szám, amelyek összege 11?',
          options: ['5', '7', '10', '6'],
          answer: 3,
          explanation:
            'Öt pár van, amelyek összege 11. 5 szám kiválasztható úgy, hogy mindegyik más párból való (1, 2, 3, 4, 5). A 6. szám már biztosan egy meglévő párját adja.',
        },
        {
          question:
            'Az indirekt bizonyítás első lépése az "Egy páros szám négyzete páros" tétel megfordításának bizonyításához ("ha $n^2$ páros, akkor $n$ páros"). Mit tegyünk fel?',
          options: [
            '$n$ páros és $n^2$ páratlan',
            '$n$ páratlan és $n^2$ páros',
            '$n^2$ páratlan',
            '$n$ és $n^2$ is páros',
          ],
          answer: 1,
          explanation:
            'A tagadás: $n^2$ páros, de $n$ nem páros, vagyis páratlan. Ebből ellentmondás jön: páratlan szám négyzete páratlan.',
        },
      ],
      sources: [
        { label: 'Indirekt bizonyítás', url: wiki('indirekt bizonyítás') },
        { label: 'Skatulyaelv', url: wiki('skatulyaelv') },
        { label: 'Teljes indukció', url: wiki('teljes indukció') },
      ],
    },
  ],
};

export default unit;
