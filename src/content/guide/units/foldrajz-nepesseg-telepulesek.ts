import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic: 5. Átalakuló települések, eltérő demográfiai problémák a 21. században. */
const unit: GuideUnit = {
  id: 'nepesseg-telepulesek',
  subject: 'foldrajz',
  order: 50,
  title: 'Népesség és települések',
  requirementRef:
    '5.1 A népesség földrajzi jellemzői; 5.2 Településtípusok, urbanizáció (5. Átalakuló települések, eltérő demográfiai problémák a 21. században)',
  intro:
    'A népesség számának változása és a demográfiai átmenet, a korfa és a fiatalodó, illetve öregedő társadalmak, a népsűrűség és a vándorlás, majd az állam, a nemzet, a nyelv és a vallás fogalmai. Ezután a települések: a falvak, a tanya és a farm, a város belső szerkezete, az agglomeráció, emelt szinten az urbanizáció a fejlett és a fejlődő világban.',
  requirementSource:
    'A követelmények, a fogalmak és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (5.1, 5.2). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'népességrobbanás',
        'természetes szaporodás',
        'természetes fogyás',
        'népességfogyás',
        'öregedő és fiatalodó társadalom',
        'népesedési átmenet (demográfiai átmenet)',
        'korfa',
        'születéskor várható átlagos élettartam',
        'népességmozgás (migráció)',
        'belföldi és nemzetközi vándorlás',
        'ki- és bevándorlás',
        'ingázás',
        'állam',
        'nemzet',
        'nemzetállam',
        'többnemzetiségű állam',
        'nemzetiség',
        'etnikum',
        'nemzeti azonosságtudat (identitás)',
        'nemzeti kisebbség',
        'etnikai kisebbség',
        'hivatalos nyelv',
        'világnyelv',
        'világvallások (kereszténység, iszlám, hinduizmus, buddhizmus, zsidó vallás)',
        'népsűrűség',
        'népességtömörülés (népességkoncentráció)',
        'ideiglenes és állandó település',
        'infrastruktúra',
        'szórványtelepülés',
        'csoportos település',
        'tanya',
        'bokor-, sor- és szórt tanya',
        'farm',
        'falu',
        'szabálytalan alaprajzú falu (halmazfalu)',
        'útifalu',
        'szabályos alaprajzú falu',
        'város',
        'óriásváros (megapolisz)',
        'településhalmaz (agglomeráció)',
        'technopolisz',
        'világváros (globális város)',
        'városodás',
        'városiasodás',
        'városfejlődés (urbanizáció)',
        'városrehabilitáció',
        'központi szerepkör (központi funkció)',
        'belső munkahelyöv (city)',
        'belső lakóhelyöv',
        'külső munkahelyöv',
        'külső lakóhelyöv',
        'urbanizációs ártalmak',
        'nyomornegyed',
      ],
      emelt: [
        'időszakos és állandó népességmozgás',
        'vándorlási egyenleg',
        'interkontinentális vándorlás',
        'ki- és betelepítés',
        'menekült',
        'vendégmunkás',
        'agyelszívás (brain drain)',
        'államforma',
        'köztársaság',
        'monarchia',
        'abszolút monarchia',
        'alkotmányos monarchia',
        'központi irányítású köztársaság',
        'szövetségi köztársaság',
        'europid',
        'negrid',
        'mongolid',
        'veddo-ausztralid nagyrassz',
        'keveréknépek',
        'természeti vallás',
        'nyelvcsalád',
        'kulturális régió',
        'hagyományos, átalakult és városias/modern falu',
        'elővárosodás (szuburbanizáció)',
        'ellenvárosodás (dezurbanizáció)',
        'reurbanizáció',
        'egyközpontú és sokközpontú agglomeráció',
        'slum',
        'gettó',
        'mamutváros (megalopolisz)',
        'városklíma',
        'BosWash',
        'Randstad',
        'Tokaido',
      ],
    },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'nepessegszam-valtozas-demografiai-atmenet',
      subject: 'foldrajz',
      unitId: 'nepesseg-telepulesek',
      title: 'Népességszám-változás és demográfiai átmenet',
      level: 'both',
      requirement: {
        kozep:
          'A népességszám-változás időbeli és területi különbségei, okai és következményei; a népesedési (demográfiai) átmenet szakaszai; egyszerű számítási feladatok a demográfiai folyamatokhoz, következtetések az eredményekből',
        emelt:
          'A népesedési szakaszok és a korfa alakjának összefüggése; a népességmozgások okainak és társadalmi-gazdasági vonatkozásainak magyarázata',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Természetes szaporodás** = születések száma – halálozások száma. Ezrelékben (‰) kifejezve a **természetes szaporodás üteme**. Ha negatív, **természetes fogyásról** beszélünk.',
            'A népesség tényleges változását a természetes szaporodás és a vándorlás együtt adja.',
            '**Demográfiai (népesedési) átmenet**: a népesség a magas születési és halálozási arányú állapotból az alacsony születési és halálozási arányú állapotba jut. Közben a halálozás csökken előbb, a születés később, ezért átmenetileg gyors a növekedés.',
            '**Népességrobbanás**: a gyors népességnövekedés időszaka, amikor a halálozás már alacsony, a születésszám még magas. A 20. században a fejlődő országokban ment végbe.',
            '**Születéskor várható átlagos élettartam**: az újszülöttek átlagosan hány évet élnének a jelenlegi halálozási viszonyok mellett.',
            'A fejlett világban a népesség lassan nő, stagnál vagy fogy; a legszegényebb országokban még gyors a növekedés.',
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Vándorlási egyenleg',
              text: 'a bevándorlók és a kivándorlók számának különbsége. Pozitív, ha többen érkeznek, mint ahányan elmennek.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi határozza meg a népességszámot?' },
        {
          kind: 'text',
          text: 'Egy terület lakossága két módon változik: **természetes úton** (születések és halálozások különbsége) és **vándorlással** (be- és kivándorlás). A számításokban a születési és a halálozási arányt rendszerint **ezrelékben** adják meg, vagyis azt, hogy 1000 lakosra hány születés vagy halálozás jut egy évben.',
        },
        {
          kind: 'formula',
          tex: '\\text{természetes szaporodás (‰)} = \\frac{\\text{születések száma} - \\text{halálozások száma}}{\\text{lakosság száma}} \\cdot 1000',
          caption:
            'Pozitív eredmény: természetes szaporodás; negatív eredmény: természetes fogyás (népességfogyás, ha a vándorlás sem pótolja).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: természetes szaporodás',
          problem:
            'Egy 10 millió lakosú országban egy évben 150 000 gyermek született és 90 000 ember halt meg. Mekkora a születési és a halálozási arány, és mekkora a természetes szaporodás ezrelékben?',
          solution:
            'Születési arány: $\\frac{150\\,000}{10\\,000\\,000} \\cdot 1000 = 15\\,‰$.\n\nHalálozási arány: $\\frac{90\\,000}{10\\,000\\,000} \\cdot 1000 = 9\\,‰$.\n\nTermészetes szaporodás: $15 - 9 = 6\\,‰$, vagyis évente 60 000 fővel nő a lakosság. Mivel az érték pozitív, az ország népessége természetes úton gyarapodik.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: természetes fogyás',
          problem:
            'Egy 8 millió lakosú országban 72 000 születés és 96 000 halálozás volt egy évben. Mi történt a lakossággal?',
          solution:
            'Születési arány: $\\frac{72\\,000}{8\\,000\\,000} \\cdot 1000 = 9\\,‰$. Halálozási arány: $\\frac{96\\,000}{8\\,000\\,000} \\cdot 1000 = 12\\,‰$.\n\nTermészetes változás: $9 - 12 = -3\\,‰$, azaz évente 24 000 fő a fogyás. Az ország természetes fogyásban van. Ha nincs elegendő bevándorlás, népességfogyás következik.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: vándorlási egyenleg',
          problem:
            'Az első példa 10 milliós országába egy évben 40 000 ember vándorolt be és 25 000 ment el. Mekkora a vándorlási egyenleg, és mennyivel változik a lakosság száma összesen?',
          solution:
            'Vándorlási egyenleg: $40\\,000 - 25\\,000 = +15\\,000$ fő, ami $1{,}5\\,‰$.\n\nA lakosság változása: $60\\,000 + 15\\,000 = 75\\,000$ fő, azaz $6 + 1{,}5 = 7{,}5\\,‰$.',
        },
        { kind: 'heading', text: 'A demográfiai átmenet szakaszai' },
        {
          kind: 'text',
          text: 'A hagyományos társadalmakban sok gyermek születik, de sokan halnak meg is (járványok, éhínség, rossz egészségügy). Az ipari forradalom, az orvostudomány fejlődése, a jobb élelmezés és higiénia után előbb a halálozás csökken, a születésszám még magas marad. Később a városiasodás, az oktatás (különösen a nők iskolázottsága), a gyermeknevelés költségei és a családtervezés elterjedése a születésszámot is lecsökkentik.',
        },
        {
          kind: 'compare',
          title:
            'A demográfiai átmenet négy szakasza (a tankönyvek egy része ötödikként a természetes fogyás szakaszát is megkülönbözteti)',
          columns: ['Születés, halálozás', 'Szaporodás és jellemzők'],
          rows: [
            {
              label: '1. szakasz',
              cells: [
                'mindkettő magas',
                'a szaporodás alacsony vagy ingadozó; a népesség lassan nő',
              ],
            },
            {
              label: '2. szakasz',
              cells: [
                'a halálozás gyorsan csökken, a születés még magas',
                'gyors növekedés, népességrobbanás; fiatal társadalom',
              ],
            },
            {
              label: '3. szakasz',
              cells: [
                'a halálozás alacsony, a születés is csökken',
                'a szaporodás lassul; a népesség még nő',
              ],
            },
            {
              label: '4. szakasz',
              cells: [
                'mindkettő alacsony',
                'a népesség stagnál, lassan nő, vagy fogyni kezd; öregedő társadalom',
              ],
            },
          ],
        },
        {
          kind: 'plot',
          title: 'A demográfiai átmenet sematikusan (az idő előrehaladtával, ‰)',
          x: [0, 12],
          y: [0, 45],
          functions: [
            { label: 'születési arány', fn: (x) => 12 + 28 / (1 + Math.exp(x - 7.5)) },
            { label: 'halálozási arány', fn: (x) => 10 + 30 / (1 + Math.exp(x - 3.5)) },
          ],
        },
        {
          kind: 'text',
          text: 'Az ábrán a két görbe közötti **rés** a természetes szaporodás. Legnagyobb a második szakaszban (a halálozás már esik, a születés még magas), a végén összeszűkül. Az ábra csak szemléltetés, nem valódi adatsor.',
        },
        { kind: 'heading', text: 'Időbeli és területi különbségek' },
        {
          kind: 'keypoints',
          items: [
            '**Időben**: a Föld népessége sokáig lassan nőtt. Az ENSZ becslése szerint 1800 körül kb. 1 milliárd, 2022 végén kb. 8 milliárd volt a lakossága. A gyors növekedés a 20. században, főleg a fejlődő országokban zajlott (népességrobbanás).',
            '**Területileg**: a legtöbb fejlett országban (Európa, Japán) a népesség stagnál vagy csökken, a szubszaharai Afrika országaiban még gyors a növekedés. Ma a népességnövekedés nagy része a fejlődő világban zajlik.',
            '**Okok**: a halálozás csökkenése (orvoslás, élelmezés, tiszta ivóvíz), a születésszámot a vallási és kulturális hagyomány, a nők iskolázottsága, a gyermekek gazdasági szerepe és a családtervezés elérhetősége alakítja.',
            '**Következmények** a gyorsan növekvő országokban: oktatási, élelmezési és munkahelyteremtési gondok, városokba áramlás; a fogyó országokban: öregedés, munkaerőhiány, a nyugdíj- és egészségügyi rendszer terhelése.',
          ],
        },
        {
          kind: 'text',
          text: 'A **születéskor várható átlagos élettartam** az egészségügy, az élelmezés, a higiénia és az életmód színvonalát is tükrözi. A fejlett országokban jóval 70 év felett, nagyjából 80 év körül van, a legszegényebb országok egy részében még 60 év alatt volt a 2020-as években. Az élettartam emelkedése a halálozás csökkenésén keresztül a demográfiai átmenet fő mozgatója.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** az átmenet szakaszait a korfa alakjához is kötni kell: a második szakaszra széles alapú, piramis alakú, a negyedikre keskeny alapú, urna alakú korfa jellemző (lásd a következő leckét).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Számítási feladat: születési és halálozási adatokból a természetes szaporodás ezrelékben vagy fő/év, majd a változás értelmezése.',
            'Ábraelemzés: születési és halálozási arány görbéi alapján a demográfiai átmenet szakaszának meghatározása, ország hozzárendelése.',
            'Táblázatelemzés: több ország szaporodási adatai, sorba rendezés, következtetés.',
            'Szóbeli: a népességrobbanás okai és következményei, fejlett és fejlődő országok összehasonlítása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a természetes szaporodást összekeverni a teljes népességváltozással. A vándorlás nincs benne a természetes szaporodásban. Gyakori az is, hogy a százalék és az ezrelék elcsúszik: $6\\,‰ = 0{,}6\\%$.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz a „miért gyors a népességnövekedés a fejlődő országokban?” kérdésre: (1) az orvoslás és a higiénia fejlődése miatt a halálozás csökkent, (2) a születésszám a hagyományok, az alacsony iskolázottság és a gyermekek munkaerő-szerepe miatt még magas, (3) így a kettő különbsége, a természetes szaporodás nagy. Zárd le egy következménnyel (például városokba áramlás).',
        },
      ],
      topicMatch: [
        'demográfiai átmenet',
        'népességszám-változás',
        'természetes szaporodás',
        '=népesség',
        '=népesség és település',
        'népességföldrajz',
      ],
      quiz: [
        {
          question:
            'Egy 5 millió lakosú országban egy évben 55 000 születés és 40 000 halálozás volt. Mekkora a természetes szaporodás?',
          options: ['3 ‰', '8 ‰', '11 ‰', '15 000 ‰'],
          answer: 0,
          explanation:
            'A különbség 15 000 fő, ez $\\frac{15\\,000}{5\\,000\\,000} \\cdot 1000 = 3\\,‰$. A 8 és a 11 ‰ a halálozási, illetve a születési arány.',
        },
        {
          question:
            'Melyik szakaszban a legnagyobb a természetes szaporodás a demográfiai átmenet során?',
          options: [
            'az első szakaszban, mert mindkét arány magas',
            'a negyedik szakaszban, mert mindkét arány alacsony',
            'a második szakaszban, amikor a halálozás már esik, a születés még magas',
            'minden szakaszban egyforma',
          ],
          answer: 2,
          explanation:
            'A halálozás előbb csökken, mint a születésszám, ezért a második szakaszban nyílik legszélesebbre a két arány közötti rés.',
        },
        {
          question: 'Mit nevezünk népességrobbanásnak?',
          options: [
            'a népesség hirtelen fogyását háború után',
            'a gyors népességnövekedés időszakát, amikor a halálozás már alacsony, a születés még magas',
            'a népesség városokba áramlását',
            'a népesség egyenetlen elrendeződését',
          ],
          answer: 1,
          explanation:
            'A népességrobbanás a gyors természetes szaporodás időszaka az átmenet második szakaszában, a fejlődő országokban főleg a 20. században.',
        },
        {
          question: 'Melyik a népesség tényleges változásának két összetevője?',
          options: [
            'népsűrűség és korfa',
            'születéskor várható élettartam és népsűrűség',
            'városodás és városiasodás',
            'természetes szaporodás és vándorlás',
          ],
          answer: 3,
          explanation:
            'A lakosság számát a születések és halálozások különbsége, valamint a be- és kivándorlás különbsége módosítja.',
        },
        {
          question:
            'Egy országban 30 000 fő a természetes szaporodás, a be- és kivándorlás különbsége pedig –10 000 fő. Mekkora a lakosság tényleges változása?',
          options: ['+40 000 fő', '+20 000 fő', '–10 000 fő', '+30 000 fő'],
          answer: 1,
          emelt: true,
          explanation:
            'A vándorlási egyenleg negatív (több a kivándorló), ezért $30\\,000 - 10\\,000 = +20\\,000$ fő a teljes változás.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Demográfiai átmenet', url: wiki('Demográfiai átmenet') },
        { label: 'Wikipédia: Népességrobbanás', url: wiki('Népességrobbanás') },
        { label: 'Wikipédia: Természetes szaporodás', url: wiki('Természetes szaporodás') },
      ],
    },
    {
      id: 'korfa-fiatalodo-oregedo-tarsadalom',
      subject: 'foldrajz',
      unitId: 'nepesseg-telepulesek',
      title: 'Korfa, fiatalodó és öregedő társadalom',
      level: 'both',
      requirement: {
        kozep:
          'A korfa adatainak leolvasása és értelmezése, alapvető következtetések a korfa alakjából; a fiatalodó és az öregedő társadalmak összehasonlítása, korösszetételükből adódó társadalmi-gazdasági következmények',
        emelt:
          'A korfán tapasztalható eltérések összekapcsolása történelmi eseményekkel és társadalmi-gazdasági problémákkal; a népesedési szakaszok és a korfa alakjának összefüggése',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **korfa** a népesség kor és nem szerinti összetételét mutatja: középen az életkor, bal oldalon általában a férfiak, jobb oldalon a nők száma vagy aránya.',
            '**Piramis alakú** korfa (széles alap): fiatalodó társadalom, sok gyermek, gyors növekedés.',
            '**Harang alakú** korfa: az évjáratok nagysága közel egyenletes, a népesség stagnál; kiegyenlített korösszetétel.',
            '**Urna alakú** korfa (keskeny alap, szélesebb felső rész): öregedő társadalom, kevés gyermek, sok idős.',
            'Fiatalodó társadalom gondja: oktatás, munkahelyek, élelmezés. Öregedő társadalom gondja: nyugdíj, egészségügy, munkaerőhiány.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan olvasd a korfát?' },
        {
          kind: 'text',
          text: 'A korfán a függőleges tengely az életkor (egyes évek vagy 5 éves korcsoportok), a vízszintes oszlopok hossza a korcsoport létszáma vagy a népességen belüli aránya. Három dolgot nézz meg mindig:\n- az **alap szélességét**: ez a gyermekkorúak és így a születésszám nagyságát mutatja,\n- az **oldalak lefutását**: gyorsan szűkülő oldal nagy halálozást, lassan szűkülő hosszú élettartamot jelent,\n- a **csúcsot** és a nők–férfiak arányát: az idős korban a nők többen vannak, mert tovább élnek.',
        },
        {
          kind: 'compare',
          title: 'A korfa három fő típusa',
          columns: ['Alak és korösszetétel', 'Jellemző országok, szakasz'],
          rows: [
            {
              label: 'Piramis (fiatalodó)',
              cells: [
                'széles alap, felfelé gyorsan keskenyedő; sok gyermek, kevés idős',
                'a demográfiai átmenet 2.–3. szakasza; a szubszaharai Afrika országai (például Niger, Nigéria)',
              ],
            },
            {
              label: 'Harang (stagnáló)',
              cells: [
                'az alap nem szélesebb a középnél; a fiatal és a középkorú évjáratok hasonló nagyságúak',
                'a népesség növekedése lelassult, stagnál; a fejlettebb országok egy része',
              ],
            },
            {
              label: 'Urna (öregedő, fogyó)',
              cells: [
                'keskeny alap, szélesebb középső és felső rész; kevés gyermek, sok idős',
                'az átmenet 4. szakasza; Japán, Németország, Olaszország, Magyarország',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Fiatalodó és öregedő társadalom' },
        {
          kind: 'compare',
          columns: ['Fiatalodó társadalom', 'Öregedő társadalom'],
          rows: [
            {
              label: 'Korösszetétel',
              cells: ['sok gyermek, kevés időskorú', 'kevés gyermek, sok időskorú'],
            },
            {
              label: 'Népességszám',
              cells: ['gyorsan nő', 'stagnál vagy csökken'],
            },
            {
              label: 'Várható élettartam',
              cells: ['alacsonyabb', 'magas'],
            },
            {
              label: 'Gazdasági gondok',
              cells: [
                'nincs elég munkahely, nagy a fiatalok munkanélkülisége, élelmezési nehézségek',
                'munkaerőhiány, kevés aktív kereső tart el sok nyugdíjast',
              ],
            },
            {
              label: 'Társadalmi gondok',
              cells: [
                'kevés iskola és tanár, sok az iskolázatlan gyermek; kivándorlási nyomás, városokba áramlás',
                'az egészségügyi és szociális ellátás (idősgondozás) terhelése, a nyugdíjrendszer fenntarthatósága',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: korfa adataiból következtetés',
          problem:
            'Az „A” ország 12 millió lakosából 3,6 millió 0–14 éves, 6,6 millió 15–64 éves és 1,8 millió 65 éves vagy idősebb. A „B” ország 10 millió lakosából 1,5 millió 0–14 éves, 6,4 millió 15–64 éves és 2,1 millió 65 éves vagy idősebb. Melyik ország társadalma fiatalodó, és melyiké öregedő? Miért?',
          solution:
            '„A” ország: 0–14 évesek aránya $\\frac{3{,}6}{12} = 30\\%$, 65 évesek és idősebbek aránya $\\frac{1{,}8}{12} = 15\\%$.\n\n„B” ország: 0–14 évesek aránya $\\frac{1{,}5}{10} = 15\\%$, 65 évesek és idősebbek aránya $\\frac{2{,}1}{10} = 21\\%$.\n\nA gyermekkorúak aránya „A”-ban kétszer akkora, tehát széles alapú, piramis alakú korfa valószínű: fiatalodó társadalom. „B”-ben az idősek aránya nagyobb, mint a gyermekeké, keskeny alap és urna alak: öregedő társadalom.',
        },
        {
          kind: 'tip',
          text: 'A korfákat mindig a **gyermekkorúak** és az **időskorúak** arányával jellemezd, nem az abszolút számmal. Egy nagy, de fiatalodó ország is lehet, ahol az idősek száma nagyobb, mint egy kis, öregedő országé.',
        },
        { kind: 'heading', text: 'A korfa és a történelem', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'A korfa alakja nemcsak a demográfiai átmenet szakaszát tükrözi, hanem a múlt eseményeit is. A „horpadások” és „kiemelkedések” az egyes évjáratokban születések számának ingadozását mutatják, és évtizedekkel később újra megjelennek a szülőkorú korcsoportokban (**visszhanghatás**).',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Mit olvashatunk ki a korfa eltéréseiből?',
          columns: ['Jelenség a korfán', 'Magyarázat'],
          rows: [
            {
              label:
                'Világháborúk idején született évjáratok kis létszáma, a férfiak hiánya a megfelelő korcsoportokban',
              cells: [
                'a háborús veszteségek, a férfiak elesése, a születések csökkenése',
                'Európa több országának korfáján megjelenik; Magyarországén is',
              ],
            },
            {
              label: 'Születési hullám a háború után',
              cells: [
                'a háború alatt elhalasztott gyermekvállalás pótlása',
                'több országban megfigyelhető',
              ],
            },
            {
              label:
                'Magyarország: nagy létszámú évjáratok az 1950-es évek elején és az 1970-es évek közepén',
              cells: [
                'népesedéspolitikai intézkedések és a nagy létszámú nemzedékek visszhangja a következő nemzedékben',
                'az 1990-es évektől a születésszám csökkenése, mély horpadás a korfán',
              ],
            },
            {
              label: 'Kína: a fiatal korcsoportok beszűkülése az egygyermekes politika időszakában',
              cells: [
                'állami születésszabályozás (az 1979-től kb. 2015-ig érvényes egygyermekes szabályozás)',
                'gyorsan öregedő társadalom, a munkaképes korúak arányának csökkenése',
              ],
            },
            {
              label:
                'Egyes Perzsa-öböl menti országok: a férfiak jelentős többlete a munkaképes korban',
              cells: [
                'a férfi vendégmunkások tömeges beáramlása',
                'a korfa nem a természetes szaporodást, hanem a vándorlást tükrözi',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A korfa eltéréseiből társadalmi-gazdasági problémákra is következtethetünk: kis létszámú, fiatal évjáratok esetén a későbbi munkaerőpiac és a nyugdíjrendszer, a nagy létszámú évjáratok esetén az oktatás, majd a nyugdíjba vonulók ellátása jelent terhet.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Korfa elemzése: milyen típusú, melyik szakaszba tartozik, fiatalodó vagy öregedő, milyen következményekkel jár.',
            'Két korfa összehasonlítása (fejlett és fejlődő ország), vagy korfa hozzárendelése országhoz.',
            'Korfa adataiból számolás: az egyes korcsoportok aránya, az idősek és gyermekek aránya.',
            'Emelt szint: a korfa „horpadásainak” és kiemelkedéseinek magyarázata történelmi eseményekkel, népesedéspolitikával.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a két oldal (férfiak és nők) különbségét tekintik a korfa alakjának jellemzőjének. Az **alakot** az alap szélessége és az oldalak lejtése adja, a nemek közötti különbség csak kiegészítő információ.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz „mutassa be az öregedő társadalom következményeit” kérdésre: (1) kevés az aktív kereső, sok a nyugdíjas, ezért terhelt a nyugdíjrendszer, (2) nő az egészségügyi és idősgondozási kiadás, (3) munkaerőhiány alakul ki, amit bevándorlással, a nyugdíjkorhatár emelésével vagy a termelékenység növelésével lehet enyhíteni.',
        },
      ],
      topicMatch: ['korfa', 'öregedő társadalom'],
      quiz: [
        {
          question: 'Milyen alakú a gyorsan növekvő, fiatalodó társadalom korfája?',
          options: ['urna alakú', 'harang alakú', 'téglalap alakú', 'piramis alakú'],
          answer: 3,
          explanation:
            'Sok gyermek születik, ezért az alap széles, felfelé a magasabb halálozás miatt gyorsan keskenyedik: piramis alakú korfa.',
        },
        {
          question: 'Melyik állítás igaz az öregedő társadalomra?',
          options: [
            'sok gyermek és kevés idős él benne',
            'keskeny alapú korfa jellemzi, és az idősek aránya nagy',
            'a népesség gyorsan növekszik a nagy születésszám miatt',
            'a korfa alakja piramis',
          ],
          answer: 1,
          explanation:
            'Az öregedő társadalomban kevés a gyermek (keskeny alap), a hosszú élettartam miatt az idősek aránya magas, a korfa urna alakú.',
        },
        {
          question: 'Melyik probléma jellemző inkább a fiatalodó társadalmakra?',
          options: [
            'a nyugdíjrendszer fenntarthatatlansága',
            'a munkaerőhiány',
            'a sok gyermek taníttatása, az új munkahelyek hiánya',
            'az idősek ellátásának túlterheltsége',
          ],
          answer: 2,
          explanation:
            'Sok gyermekre kell iskolát, ételt és később munkahelyet biztosítani. A többi válasz az öregedő társadalom gondja.',
        },
        {
          question:
            'Egy 20 millió lakosú országban 6 millió a 0–14 évesek száma. Mekkora az arányuk, és mire utal ez?',
          options: [
            '3%, öregedő társadalomra',
            '30%, fiatalodó társadalomra',
            '70%, öregedő társadalomra',
            '6%, stagnáló társadalomra',
          ],
          answer: 1,
          explanation:
            '$\\frac{6}{20} = 30\\%$. Ilyen magas gyermekarány széles alapú korfát és fiatalodó társadalmat jelent.',
        },
        {
          question:
            'Mivel magyarázható egy ország korfáján egy hirtelen, nagy létszámú „kiemelkedés” után, évtizedekkel később jelentkező újabb kiemelkedés?',
          options: [
            'a bevándorlók magas halálozásával',
            'a szülőkorba lépő nagy létszámú nemzedék visszhanghatásával',
            'a népsűrűség növekedésével',
            'a korfa méretarányának változásával',
          ],
          answer: 1,
          emelt: true,
          explanation:
            'A nagy létszámú nemzedék szülőkorba érve ismét sok gyermeket hoz világra, ezért az eltérés egy nemzedékkel később megismétlődik (visszhanghatás).',
        },
      ],
      sources: [
        { label: 'Wikipédia: Korfa', url: wiki('Korfa') },
        { label: 'Wikipédia: Társadalom öregedése', url: wiki('Népesség öregedése') },
        { label: 'Wikipédia: Ratkó-korszak', url: wiki('Ratkó-korszak') },
      ],
    },
    {
      id: 'nepsuruseg-nepessegmozgas',
      subject: 'foldrajz',
      unitId: 'nepesseg-telepulesek',
      title: 'Népsűrűség, népességtömörülések és vándorlás',
      level: 'both',
      requirement: {
        kozep:
          'A népesség térbeli eloszlását befolyásoló tényezők, ritkán és sűrűn lakott területek; a Föld legnagyobb népességtömörülései és kialakulásuk okai; a népesség egyenlőtlen elrendeződésének következményei; a népességmozgás típusai; népsűrűség számítása',
        emelt:
          'A népességmozgások okainak, társadalmi-gazdasági vonatkozásainak magyarázata; migrációs folyamatokat bemutató ábrák és tematikus térképek elemzése',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Népsűrűség** = népességszám / terület (fő/km²). Az átlag elfedi a területi különbségeket.',
            'A **sűrűn lakott területek** (népességtömörülések): Kelet-Ázsia, Dél-Ázsia, Európa. Ott kedvező az éghajlat, termékeny a talaj, bőséges a víz, a gazdasági élet és a történelmi fejlődés is vonzotta az embereket.',
            '**Ritkán lakott területek**: sivatagok, sarkvidékek, magashegységek, trópusi esőerdők, tundra és tajga.',
            '**Vándorlás (migráció)**: belföldi vagy nemzetközi; kivándorlás és bevándorlás; ingázás.',
            'A vándorlás okai kiűző (push) és vonzó (pull) tényezők: munkahely, bérek, háború, természeti katasztrófa, tanulás, családegyesítés.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A népsűrűség és kiszámítása' },
        {
          kind: 'formula',
          tex: '\\text{népsűrűség} = \\frac{\\text{népességszám}}{\\text{terület (km}^2\\text{)}} \\quad (\\text{fő/km}^2)',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: népsűrűség',
          problem:
            'Egy ország lakossága 60 millió fő, területe 250 000 km². Mekkora a népsűrűsége?',
          solution: '$\\frac{60\\,000\\,000}{250\\,000} = 240$ fő/km².',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: Magyarország népsűrűsége',
          problem:
            'Magyarország területe kb. 93 000 km², lakossága 2022-ben kb. 9,6 millió fő. Mekkora a népsűrűség, és hogyan viszonyul a Föld szárazföldjeinek (az Antarktisz nélküli) átlagos, kb. 60 fő/km² népsűrűségéhez?',
          solution:
            '$\\frac{9\\,600\\,000}{93\\,000} \\approx 103$ fő/km². Ez a világátlag kb. 1,7-szerese ($103 / 60 \\approx 1{,}7$), tehát Magyarország a világátlagnál sűrűbben lakott ország.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: két terület együttes népsűrűsége',
          problem:
            'Az „A” régió 2,4 millió lakosa 8000 km²-en, a „B” régió 0,6 millió lakosa 6000 km²-en él. Mekkora az együttes népsűrűség?',
          solution:
            '„A”: $\\frac{2\\,400\\,000}{8000} = 300$ fő/km². „B”: $\\frac{600\\,000}{6000} = 100$ fő/km².\n\nEgyütt: $\\frac{2\\,400\\,000 + 600\\,000}{8000 + 6000} = \\frac{3\\,000\\,000}{14\\,000} \\approx 214$ fő/km².',
        },
        {
          kind: 'warning',
          text: 'Nem a két népsűrűség átlagát kell venni! $\\frac{300 + 100}{2} = 200$ hibás, mert a két terület nagysága eltérő. Mindig a **teljes népességet** és a **teljes területet** oszd el.',
        },
        {
          kind: 'text',
          text: 'A népsűrűség **átlagérték**: egy országon belül óriási lehet a különbség (például a fővárosi térség és egy hegyvidék között). Ezért a népsűrűség kevésbé mutatja meg, hogy hol is élnek az emberek, mint a népességtérkép.',
        },
        { kind: 'heading', text: 'Mi határozza meg, hol élnek az emberek?' },
        {
          kind: 'compare',
          columns: ['Sűrűn lakott területek', 'Ritkán lakott területek'],
          rows: [
            {
              label: 'Természeti tényezők',
              cells: [
                'mérsékelt vagy meleg, csapadékos éghajlat; termékeny talajú síkságok és folyóvölgyek; bőséges víz; tengerpart',
                'szélsőségesen hideg (sarkvidék, tundra, tajga), száraz (sivatag) vagy magas (magashegység) vidék; trópusi esőerdő',
              ],
            },
            {
              label: 'Társadalmi-gazdasági tényezők',
              cells: [
                'régi kultúrák és földművelés, ipar, kereskedelem, közlekedési csomópontok, városok',
                'kevés munkalehetőség, nehéz megközelíthetőség, nehéz élelmezés, a gazdálkodás korlátai',
              ],
            },
            {
              label: 'Példák',
              cells: [
                'Kelet-Kína síkságai, a Gangesz-medence, Jáva szigete, Nyugat-Európa',
                'Szahara, Grönland, Szibéria, Himalája, Amazonas-medence, Ausztrália belseje',
              ],
            },
          ],
        },
        {
          kind: 'keypoints',
          title: 'A Föld legnagyobb népességtömörülései',
          items: [
            '**Kelet-Ázsia** (Kína keleti része, Japán, a Koreai-félsziget): termékeny síkságok és folyóvölgyek, a rizstermesztés sok embert eltart, régi kultúrák, ma ipar.',
            '**Dél-Ázsia** (az Indiai-félsziget, a Gangesz-síkság, Banglades): meleg, monszun csapadék, nagyon termékeny folyóvölgyek, intenzív rizstermesztés.',
            '**Európa** (főleg Nyugat- és Közép-Európa): régi iparosodás és városfejlődés, kedvező éghajlat, termékeny talaj.',
            'Kisebb tömörülések: például Északkelet-Amerika, a Nílus völgye, Jáva szigete.',
          ],
        },
        {
          kind: 'text',
          text: '**Következmények**: ahol a népesség sűrű, ott nagy a lakás-, élelmiszer- és vízigény, terhelt a környezet és a közlekedés, de az infrastruktúra olcsóbban kiépíthető. Ahol nagyon ritka, ott az ellátás (iskola, kórház, közlekedés) drága és nehéz, a fiatalok gyakran elvándorolnak. A népesség egyenlőtlen elrendeződése okozza a belső vándorlást és a nagyvárosok gyors növekedését.',
        },
        { kind: 'heading', text: 'A népességmozgás típusai' },
        {
          kind: 'compare',
          columns: ['Fogalom', 'Mit jelent, példák'],
          rows: [
            {
              label: 'Belföldi vándorlás',
              cells: [
                'egy országon belüli költözés',
                'falusiak városba költözése, a keletről nyugatra költözés',
              ],
            },
            {
              label: 'Nemzetközi vándorlás',
              cells: [
                'az országhatárt átlépő költözés',
                'kivándorlás (elhagyja az országot), bevándorlás (megérkezik az új országba)',
              ],
            },
            {
              label: 'Ingázás',
              cells: [
                'rendszeres, napi vagy heti oda-vissza utazás a lakóhely és a munkahely vagy iskola között',
                'a falusi lakosok városba járó dolgozói, az agglomeráció lakói',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A vándorlás okai lehetnek **gazdaságiak** (jobb kereset, munkanélküliség), **politikaiak** (háború, üldöztetés), **természetiek** (aszály, árvíz, földrengés) és **személyesek** (tanulás, házasság). A kiűző tényezők a kiindulási helyről elfordítják, a vonzó tényezők a célterület felé húzzák az embereket.',
        },
        { kind: 'heading', text: 'A népességmozgás emelt szinten', emelt: true },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Időszakos népességmozgás',
              text: 'a lakóhely ideiglenes vagy rendszeres elhagyása, majd visszatérés: ingázás, idénymunka, tanulmányi vagy vendégmunkás-tartózkodás.',
              emelt: true,
            },
            {
              term: 'Állandó népességmozgás',
              text: 'tartós lakóhelyváltoztatás, a költöző nem tér vissza (kivándorlás, letelepedés).',
              emelt: true,
            },
            {
              term: 'Interkontinentális vándorlás',
              text: 'földrészek közötti vándorlás. Például a 19. században és a 20. század elején az európaiak tömegesen vándoroltak Amerikába.',
              emelt: true,
            },
            {
              term: 'Ki- és betelepítés',
              text: 'az állam szervezi, gyakran kényszerrel. Például a második világháború után több országban a német lakosság kitelepítése, Magyarországon is.',
              emelt: true,
            },
            {
              term: 'Menekült',
              text: 'aki háború, üldöztetés vagy katasztrófa miatt hagyja el lakóhelyét vagy országát.',
              emelt: true,
            },
            {
              term: 'Vendégmunkás',
              text: 'külföldön ideiglenesen dolgozó munkavállaló. Például a Perzsa-öböl olajgazdag országaiban dolgozó dél-ázsiai munkások, vagy a Törökországból Nyugat-Németországba érkezők az 1960–70-es években.',
              emelt: true,
            },
            {
              term: 'Agyelszívás (brain drain)',
              text: 'a magasan képzett szakemberek elvándorlása a fejlődő vagy a kevésbé fejlett országokból a gazdagabbak felé. A kibocsátó ország elveszíti a képzésbe fektetett befektetését.',
              emelt: true,
            },
            {
              term: 'Vándorlási egyenleg',
              text: 'bevándorlók mínusz kivándorlók. Pozitív: a terület vándorlási nyertes, negatív: vesztes.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Társadalmi-gazdasági hatások**: a fogadó ország munkaerőhiánya enyhül, de feszültségek is keletkezhetnek (munkaerőpiac, beilleszkedés). A kibocsátó ország számára a kivándorlók hazautalt pénze fontos bevétel lehet, de az agyelszívás hosszú távon gyengíti a gazdaságát.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Migrációs térképet (nyilakkal) így elemezz: (1) honnan hová, (2) melyik nyíl a legvastagabb, (3) milyen kiűző és vonzó tényezők magyarázzák, (4) mik a következmények a kibocsátó és a fogadó országnak.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Számítási feladat: népsűrűség a népességből és a területből; a terület vagy a népesség kiszámítása a népsűrűségből; országok sorba rendezése.',
            'Térképen a nagy népességtömörülések megmutatása, a népsűrűség-térkép értelmezése, ritkán és sűrűn lakott területek okai.',
            'Teszt: a migrációs fogalmak (ingázás, kivándorlás, menekült) megkülönböztetése példákkal.',
            'Emelt szint: migrációs ábrák, tematikus térképek elemzése, a vándorlás okai és következményei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: egy ország népsűrűségéből arra következtetni, hogy a lakosság egyenletesen oszlik el. Egy nagy, de sivatagos ország (például Egyiptom, ahol az emberek a Nílus mentén sűrűsödnek) átlagos népsűrűsége félrevezető. Fontos az **ingázás** és a **kivándorlás** megkülönböztetése is: az ingázó nem változtat lakóhelyet.',
        },
        {
          kind: 'tip',
          text: 'Mértékegységet mindig írj a számítás végére (fő/km²). Ha két terület egyesített adatát kérik, a lakosságot és a területet külön-külön összegezd, és csak azután oszd el.',
        },
      ],
      topicMatch: ['népsűrűség', 'vándorlás'],
      quiz: [
        {
          question:
            'Mekkora annak az országnak a népsűrűsége, amelynek lakossága 45 millió fő, területe pedig 300 000 km²?',
          options: ['15 fő/km²', '150 fő/km²', '1500 fő/km²', '67 fő/km²'],
          answer: 1,
          explanation: '$\\frac{45\\,000\\,000}{300\\,000} = 150$ fő/km².',
        },
        {
          question: 'Melyik a Föld egyik legnagyobb népességtömörülése?',
          options: ['a Szahara', 'Grönland', 'Dél-Ázsia', 'az Amazonas-medence'],
          answer: 2,
          explanation:
            'Dél-Ázsia (az Indiai-félsziget és a Gangesz-síkság) a termékeny folyóvölgyek és a monszun csapadék miatt a legsűrűbben lakott területek közé tartozik. A másik három ritkán lakott.',
        },
        {
          question: 'Mi az ingázás?',
          options: [
            'tartós kivándorlás másik országba',
            'a lakóhely és a munkahely vagy iskola közötti rendszeres utazás',
            'az állam által szervezett betelepítés',
            'külföldi szakemberek elszívása',
          ],
          answer: 1,
          explanation:
            'Az ingázó lakóhelye nem változik, csak rendszeresen utazik a munkahelyére vagy iskolájába.',
        },
        {
          question:
            'Egy régió 300 fő/km², egy másik 100 fő/km² népsűrűségű. Mi a két régió együttes népsűrűségének számítása?',
          options: [
            'mindig 200 fő/km², a két érték átlaga',
            'a két terület népességének összege osztva a két terület összegével',
            'a nagyobb népsűrűség értéke',
            'a két népsűrűség szorzata',
          ],
          answer: 1,
          explanation:
            'Az együttes népsűrűséghez a teljes népességet és a teljes területet kell használni. A két érték átlaga csak akkor lenne jó, ha a két terület egyforma nagy volna.',
        },
        {
          question: 'Mit nevezünk agyelszívásnak?',
          options: [
            'a népesség korfa szerinti öregedését',
            'a magasan képzett szakemberek kivándorlását',
            'a menekültek tömeges beáramlását',
            'a falusiak városba költözését',
          ],
          answer: 1,
          emelt: true,
          explanation:
            'Az agyelszívás (brain drain) a képzett szakemberek elvándorlása, ami a kibocsátó országnak veszteség.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Népsűrűség', url: wiki('Népsűrűség') },
        { label: 'Wikipédia: Népvándorlás (migráció)', url: wiki('Migráció (népességmozgás)') },
        { label: 'Wikipédia: Brain drain', url: wiki('Agyelszívás') },
      ],
    },
    {
      id: 'allam-nemzet-nyelv-vallas',
      subject: 'foldrajz',
      unitId: 'nepesseg-telepulesek',
      title: 'Állam, nemzet, nyelv és vallás',
      level: 'both',
      requirement: {
        kozep:
          'Az állam, nemzet, nemzetállam, többnemzetiségű állam, nemzetiség fogalmának értelmezése; a világvallások megnevezése, legfőbb jellemzőik és központjaik',
        emelt:
          'Az államformák jellemzése példákkal; a nagyrasszok földrajzi elterjedésének bemutatása a térképen; a világvallások elterjedése és szerepe a társadalmi-gazdasági folyamatokban; a Föld kulturális régióinak legfőbb jellemzői',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Állam**: meghatározott területen élő népesség, közhatalommal (kormány, törvények, hadsereg). **Nemzet**: közös nyelvű, kultúrájú, történelmű, összetartozást érző emberek közössége.',
            '**Nemzetállam**: lakosságának döntő többsége egy nemzethez tartozik. **Többnemzetiségű állam**: több nemzet vagy etnikum él benne jelentős arányban.',
            '**Nemzetiség (nemzeti kisebbség)**: egy államban élő, de az állam fő nemzetétől eltérő nemzethez tartozó közösség.',
            '**Világvallások**: kereszténység, iszlám, hinduizmus, buddhizmus, zsidó vallás.',
            '**Hivatalos nyelv**: az állam által használt nyelv. **Világnyelv**: sok országban, nemzetközi kapcsolatokban használt nyelv (például angol, spanyol, francia, arab, orosz, kínai).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Állam, nemzet, nemzetállam' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Állam',
              text: 'határokkal körülvett területen közhatalmat gyakorló szervezet: van kormánya, törvényei, hivatalos nyelve és állampolgársága.',
            },
            {
              term: 'Nemzet',
              text: 'közös nyelv, kultúra, történelem és **nemzeti azonosságtudat (identitás)** köti össze. Nem azonos az állammal: a magyar nemzet tagjai több országban élnek.',
            },
            {
              term: 'Nemzetállam',
              text: 'az állam lakosságának nagy többsége egy nemzethez tartozik. Például Japán, Izland, Lengyelország.',
            },
            {
              term: 'Többnemzetiségű állam',
              text: 'több nemzet vagy etnikai csoport él együtt. Például Svájc (négy hivatalos nyelv), Belgium, India, Oroszország.',
            },
            {
              term: 'Nemzetiség (nemzeti kisebbség)',
              text: 'az államalkotó nemzettől eltérő, de az országban élő nemzeti közösség. Például a Magyarországon élő németek vagy a Szlovákiában élő magyarok.',
            },
            {
              term: 'Etnikum, etnikai kisebbség',
              text: 'közös származástudatú, kultúrájú és gyakran nyelvű embercsoport. Az etnikai kisebbség az államban kisebbségben élő ilyen csoport.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az államhatárok és a nemzethatárok sok helyen nem esnek egybe. A nemzeti kisebbségek helyzete, jogai ezért országok közötti viták és együttműködések tárgya is lehet.',
        },
        { kind: 'heading', text: 'Nyelv' },
        {
          kind: 'text',
          text: 'A **hivatalos nyelv** az, amelyet az állam a közigazgatásban, oktatásban használ; egy országnak több is lehet (például Svájcnak, Belgiumnak). A **világnyelvek** azok, amelyeket sok ország használ hivatalos vagy közvetítő nyelvként: az ENSZ hat hivatalos nyelve az angol, francia, spanyol, orosz, kínai és arab. Az angol a legelterjedtebb közvetítő nyelv a világban.',
        },
        { kind: 'heading', text: 'A világvallások' },
        {
          kind: 'compare',
          title: 'A világvallások legfontosabb jellemzői',
          columns: ['Elterjedés', 'Jellemzők, központok'],
          rows: [
            {
              label: 'Kereszténység',
              cells: [
                'Európa, Amerika, Ausztrália és Óceánia, a szubszaharai Afrika nagy része',
                'egy Isten, Jézus Krisztus; ágai: katolikus, protestáns, ortodox; központok: Róma és a Vatikán (katolikus), Jeruzsálem (szent hely), Konstantinápoly (ortodox)',
              ],
            },
            {
              label: 'Iszlám',
              cells: [
                'Észak-Afrika, Délnyugat-Ázsia, Közép-Ázsia, Pakisztán, Banglades, Indonézia',
                'egy Isten (Allah), Mohamed próféta, szent könyve a Korán; ágai: szunnita, síita; szent helyek: Mekka, Medina, Jeruzsálem',
              ],
            },
            {
              label: 'Hinduizmus',
              cells: [
                'főként India, Nepál',
                'sok isten, kasztrendszer és újjászületés tana; szent folyó a Gangesz, szent város Váránaszi',
              ],
            },
            {
              label: 'Buddhizmus',
              cells: [
                'Kelet- és Délkelet-Ázsia (például Thaiföld, Mianmar, Srí Lanka, Japán, Tibet)',
                'Buddha tanítása, a szenvedésből való megszabadulás; zarándokhelyek Indiában és Nepálban (például Bodh Gaya, Lumbini)',
              ],
            },
            {
              label: 'Zsidó vallás',
              cells: [
                'Izrael, az Egyesült Államok, szétszórtan sok országban',
                'egy Isten, szent könyve a Tóra; központja Jeruzsálem',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A kereszténység hívőinek a száma a legnagyobb, az iszlám a második. Jeruzsálem három vallás számára is szent város.',
        },
        {
          kind: 'heading',
          text: 'Emelt szinten: államformák, nagyrasszok, kulturális régiók',
          emelt: true,
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Államformák',
          columns: ['Jellemző', 'Példa'],
          rows: [
            {
              label: 'Abszolút monarchia',
              cells: ['az uralkodó korlátlan hatalmú', 'Szaúd-Arábia, Brunei'],
            },
            {
              label: 'Alkotmányos monarchia',
              cells: [
                'az uralkodó hatalmát alkotmány és parlament korlátozza',
                'Egyesült Királyság, Spanyolország, Japán, Svédország',
              ],
            },
            {
              label: 'Köztársaság',
              cells: ['az államfőt meghatározott időre választják', 'Franciaország, Magyarország'],
            },
            {
              label: 'Szövetségi köztársaság',
              cells: [
                'tagállamokból áll, amelyeknek saját jogköre van',
                'Amerikai Egyesült Államok, Németország, Brazília, India',
              ],
            },
            {
              label: 'Központi irányítású köztársaság',
              cells: [
                'egy párt vagy központi vezetés irányít, szoros állami ellenőrzéssel',
                'Kína, Kuba',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A nagyrasszok és elterjedésük',
          columns: ['Fő elterjedési terület', 'Megjegyzés'],
          rows: [
            {
              label: 'Europid',
              cells: [
                'Európa, Észak-Afrika, Délnyugat-Ázsia, Dél-Ázsia nagy része; a betelepülők révén Amerika, Ausztrália',
                'világos és barna bőrszín, hullámos és egyenes haj',
              ],
            },
            {
              label: 'Negrid',
              cells: ['a Szahara alatti Afrika', 'sötét bőr, göndör haj'],
            },
            {
              label: 'Mongolid',
              cells: [
                'Kelet-, Közép-, Észak-Ázsia; Amerika őslakói (indiánok, inuitok)',
                'sárgás bőrszín, egyenes, fekete haj',
              ],
            },
            {
              label: 'Veddo-ausztralid',
              cells: [
                'Ausztrália őslakói, Dél-India és Délkelet-Ázsia egyes népei',
                'sötét bőr, hullámos haj',
              ],
            },
            {
              label: 'Keveréknépek',
              cells: [
                'főként Latin-Amerika és Dél-Afrika',
                'különböző nagyrasszok keveredéséből alakultak ki',
              ],
            },
          ],
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'A nagyrasszok csak külső jegyek alapján megkülönböztetett csoportok: biológiailag minden ember egy fajhoz tartozik, az emberek között nincs értékbeli különbség.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Nyelvcsalád',
              text: 'rokon nyelvek csoportja. Az indoeurópai nyelvcsalád a legnagyobb (például angol, spanyol, német, hindi, orosz); a magyar az uráli nyelvcsaládba tartozik.',
              emelt: true,
            },
            {
              term: 'Természeti vallás',
              text: 'a természeti jelenségeket és szellemeket tisztelő hit (például animizmus, sámánizmus). Törzsi közösségekben maradt fenn, főleg Afrikában, Amerikában, Szibériában.',
              emelt: true,
            },
            {
              term: 'Kulturális régió',
              text: 'a nyelv, vallás, történelem, hagyományok és életmód alapján elkülönülő nagy térség. A felosztás tankönyvenként eltérhet; jellemző régiók például az európai–észak-amerikai (nyugati), a latin-amerikai, az iszlám, a fekete-afrikai, a hindu és a kelet-ázsiai (kínai–japán) kultúrkör.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A vallás a mindennapokat is alakítja: az ünnepeket, az étkezést, a családszerkezetet, a nők helyzetét, sok helyen a jogrendet is. A vallási különbségek konfliktusokat is okozhatnak (például Közel-Kelet, Dél-Ázsia), de a vallások zarándokturizmusa is gazdasági tényező.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalmak megkülönböztetése példákkal: nemzetállam és többnemzetiségű állam, nemzeti kisebbség.',
            'Térképen a világvallások elterjedési területei, a vallási központok megnevezése.',
            'Teszt: ország–vallás, vallás–szent hely vagy vallás–szent könyv párosítás.',
            'Emelt szint: államformák példákkal; a nagyrasszok és a kulturális régiók elterjedése térképen; a vallás szerepe a társadalmi-gazdasági életben.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy az állam és a nemzet fogalmát összekeverik. A nemzet közösség, az állam szervezet: egy nemzet több államban is élhet, és egy államban több nemzet.',
        },
        {
          kind: 'tip',
          text: 'A vallásoknál tanulj meg mindegyikhez egy elterjedési területet, egy szent helyet vagy központot és egy jellemző vonást (hívők, szent könyv). Emelt szinten ugyanilyen hármast az államformákhoz: meghatározás, ország, jellemző.',
        },
      ],
      topicMatch: ['világvallások', 'államformák'],
      quiz: [
        {
          question: 'Melyik ország nemzetállam?',
          options: ['Svájc', 'India', 'Belgium', 'Japán'],
          answer: 3,
          explanation:
            'Japán lakosságának túlnyomó többsége egy nemzethez tartozik. Svájc, India és Belgium több nyelvű, többnemzetiségű vagy sokszínű állam.',
        },
        {
          question: 'Mit jelent a nemzeti kisebbség?',
          options: [
            'egy állam kisebb nemzetgazdasága',
            'az államalkotó nemzettől eltérő nemzethez tartozó, az országban élő közösség',
            'az állam ideiglenesen ott tartózkodó külföldi állampolgárai',
            'egy vallás kisebb ága',
          ],
          answer: 1,
          explanation:
            'A nemzeti kisebbség az államban élő, de az államalkotó nemzettől eltérő nemzethez tartozó közösség, például a szlovákiai magyarok.',
        },
        {
          question: 'Melyik város szent a keresztények, a zsidók és a muszlimok számára is?',
          options: ['Róma', 'Mekka', 'Váránaszi', 'Jeruzsálem'],
          answer: 3,
          explanation:
            'Jeruzsálem a három vallás számára is szent város. Róma a katolikusoké, Mekka a muszlimoké, Váránaszi a hinduké.',
        },
        {
          question: 'Melyik világvallás legfontosabb szent folyója a Gangesz?',
          options: ['hinduizmus', 'iszlám', 'buddhizmus', 'zsidó vallás'],
          answer: 0,
          explanation:
            'A hinduk számára a Gangesz szent folyó, partján fekszik Váránaszi, a hinduizmus egyik legfontosabb szent városa.',
        },
        {
          question: 'Melyik államforma jellemzi az Egyesült Királyságot?',
          options: [
            'abszolút monarchia',
            'szövetségi köztársaság',
            'alkotmányos monarchia',
            'központi irányítású köztársaság',
          ],
          answer: 2,
          emelt: true,
          explanation:
            'Az Egyesült Királyságban az uralkodó hatalmát az alkotmány és a parlament korlátozza: alkotmányos monarchia.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Nemzetállam', url: wiki('Nemzetállam') },
        { label: 'Wikipédia: Világvallások', url: wiki('Világvallások') },
        { label: 'Wikipédia: Államforma', url: wiki('Államforma') },
      ],
    },
    {
      id: 'telepulestipusok-varosok-szerkezete',
      subject: 'foldrajz',
      unitId: 'nepesseg-telepulesek',
      title: 'Településtípusok és a város szerkezete',
      level: 'both',
      requirement: {
        kozep:
          'A településtípusok ismerete, csoportosítása, jellemzése; különböző szerepkört betöltő települések, a szerepkörök átalakulása; a tanya és a farm összehasonlítása; a városodás és a városiasodás különbsége; a városi övezetek felismerése; a nagyváros és az agglomeráció kapcsolata; a nagyvárosi élet környezeti és társadalmi problémái, megoldási lehetőségek',
        emelt:
          'A városok szerkezetében megnyilvánuló eltérések a különböző földrészeken; a falvak és a városok átalakulása',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Ideiglenes település** (például nomád tábor, kutatóállomás) és **állandó település**. Az állandók lehetnek **szórványtelepülések** (tanya, farm) és **csoportos települések** (falu, város).',
            '**Falu** alaprajza: szabálytalan (halmazfalu), útifalu, szabályos. **Város**: központi szerepkörű település, ellátja a környező területet is.',
            '**Városodás**: a városi népesség számának és arányának növekedése. **Városiasodás**: a városi életforma, a szolgáltatások, az infrastruktúra terjedése. Együtt: **urbanizáció (városfejlődés)**.',
            'A város övezetei kívülről befelé: külső lakóhelyöv, külső munkahelyöv, belső lakóhelyöv, belső munkahelyöv (**city**).',
            '**Agglomeráció**: a nagyváros és a vele szoros kapcsolatban (ingázás, szolgáltatások) álló települések együttese. Az **óriásváros (megapolisz)** általában 10 millió fő feletti.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A települések csoportosítása' },
        {
          kind: 'compare',
          columns: ['Szórványtelepülés', 'Csoportos település'],
          rows: [
            {
              label: 'Mi ez?',
              cells: [
                'egymástól távol álló, magányos gazdaságok (tanya, farm)',
                'összetartozó házak, utcák, közös központ (falu, város)',
              ],
            },
            {
              label: 'Jellemző',
              cells: [
                'a gazdálkodó a földje közelében él; távol a szolgáltatásoktól',
                'a szolgáltatások (bolt, iskola, orvos) elérhetők; közös közigazgatás',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Tanya és farm',
          columns: ['Tanya', 'Farm'],
          rows: [
            {
              label: 'Méret',
              cells: [
                'kis- vagy közepes gazdaság',
                'nagy kiterjedésű, gyakran több száz–ezer hektár',
              ],
            },
            {
              label: 'Termelés',
              cells: [
                'sokszor önellátó vagy vegyes gazdálkodás, kis gépesítettség',
                'piacra termel, nagyfokú gépesítés, szakosodás',
              ],
            },
            {
              label: 'Elhelyezkedés',
              cells: [
                'főként Magyarország Alföldje; típusai: bokortanya, sortanya, szórt tanya',
                'Egyesült Államok, Kanada, Ausztrália, Argentína, Dél-Afrika',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Falvak' },
        {
          kind: 'compare',
          columns: ['Alaprajz', 'Jellemzők'],
          rows: [
            {
              label: 'Szabálytalan alaprajzú (halmazfalu)',
              cells: [
                'utcák, házak rendezetlenül, a domborzathoz igazodva',
                'dombos, hegyes területek, régi falvak',
              ],
            },
            {
              label: 'Útifalu',
              cells: [
                'egy út mentén sorakozó házak',
                'domborzati vagy vízrajzi okok miatt, folyók, utak mentén',
              ],
            },
            {
              label: 'Szabályos alaprajzú falu',
              cells: [
                'tervezett, derékszögű utcahálózat, központi tér',
                'újabb tervszerű telepítéssel létrejött falvak, síkságokon',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A város és szerepkörei' },
        {
          kind: 'text',
          text: 'A várost nem csak a lakosság száma, hanem a **központi szerepköre (központi funkciója)** is megkülönbözteti: közigazgatási, kereskedelmi, ipari, oktatási, kulturális, egészségügyi, közlekedési szolgáltatásokat nyújt a környékének. Egy városnak több szerepköre is lehet, és ezek idővel átalakulnak.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Ipari város',
              text: 'például Dunaújváros, amely a vasműre épülve jött létre.',
            },
            {
              term: 'Üdülő- és gyógyfürdőváros',
              text: 'például Hévíz, ahol az idegenforgalom a fő bevételi forrás.',
            },
            {
              term: 'Oktatási, kulturális központ',
              text: 'például Pécs, Szeged, Debrecen, ahol egyetemek működnek.',
            },
            {
              term: 'Szerepkör-átalakulás',
              text: 'a bányászati vagy nehézipari szerepkör megszűnése után a város szolgáltatásra, oktatásra, könnyűiparra vagy idegenforgalomra állhat át. Például a szénbányászatáról ismert Tatabánya.',
            },
            {
              term: 'Technopolisz',
              text: 'a csúcstechnológiai kutatás és termelés városa (például a kaliforniai Szilícium-völgy).',
            },
            {
              term: 'Világváros (globális város)',
              text: 'a világgazdaság irányító központja: pénzügyi, üzleti, kulturális szerepe világméretű (például New York, London, Tokió).',
            },
          ],
        },
        {
          kind: 'map',
          title: 'Magyarország nagyvárosai és szerepkörük',
          places: [
            {
              name: 'Budapest',
              lat: 47.4979,
              lon: 19.0402,
              note: 'főváros, a legnagyobb város, sokközpontú szerepkör',
            },
            {
              name: 'Debrecen',
              lat: 47.5316,
              lon: 21.6273,
              note: 'az Alföld keleti központja, egyetem',
            },
            { name: 'Szeged', lat: 46.253, lon: 20.1414, note: 'a Dél-Alföld központja, egyetem' },
            { name: 'Pécs', lat: 46.0727, lon: 18.2323, note: 'Dél-Dunántúl központja, egyetem' },
            { name: 'Győr', lat: 47.6875, lon: 17.6504, note: 'Nyugat-Dunántúl ipari központja' },
            {
              name: 'Miskolc',
              lat: 48.1035,
              lon: 20.7784,
              note: 'Észak-Magyarország hagyományos ipari központja',
            },
          ],
        },
        { kind: 'heading', text: 'Városodás és városiasodás' },
        {
          kind: 'compare',
          columns: ['Városodás', 'Városiasodás'],
          rows: [
            {
              label: 'Mi?',
              cells: [
                'a városok számának, méretének és a városlakók arányának növekedése',
                'a városi életforma, a szolgáltatások és az infrastruktúra elterjedése',
              ],
            },
            {
              label: 'Jellege',
              cells: ['mennyiségi folyamat', 'minőségi folyamat'],
            },
            {
              label: 'Példa',
              cells: [
                'a falusiak tömegesen városba költöznek',
                'egy faluban kiépül a vízvezeték, csatorna, internet, bolthálózat',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: a városi lakosság aránya',
          problem:
            'Egy ország 80 millió lakosából 52 millió él városban. Mekkora a városi népesség aránya? Hány százalékpont a növekedés, ha 20 évvel ezelőtt ez az arány 50% volt?',
          solution:
            'Városi arány: $\\frac{52}{80} = 0{,}65$, azaz 65%.\n\nA változás: $65 - 50 = 15$ százalékpont. Ez a **városodás** mutatója. Hogy a városiasodás is előrehaladt-e, a szolgáltatások és az infrastruktúra fejlődéséből ítélhető meg.',
        },
        { kind: 'heading', text: 'A város belső szerkezete' },
        {
          kind: 'compare',
          title: 'A városi övezetek a központtól kifelé',
          columns: ['Jellemző', 'Funkciók'],
          rows: [
            {
              label: 'Belső munkahelyöv (city)',
              cells: [
                'a város központja, magas ingatlanár, kevés állandó lakó',
                'hivatalok, bankok, irodák, üzletek, kulturális intézmények',
              ],
            },
            {
              label: 'Belső lakóhelyöv',
              cells: [
                'sűrű beépítés, régi bérházak, lakótelepek',
                'lakás, kisebb boltok, szolgáltatások',
              ],
            },
            {
              label: 'Külső munkahelyöv',
              cells: [
                'ipari területek, raktárak, logisztikai központok, bevásárlóközpontok',
                'nagy területigény, jó közlekedési kapcsolat',
              ],
            },
            {
              label: 'Külső lakóhelyöv',
              cells: [
                'családi házak, kertvárosok, lakóparkok',
                'a lakók gyakran autóval vagy elővárosi vonattal közlekednek a munkahelyükre',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Nagyváros és agglomeráció' },
        {
          kind: 'text',
          text: 'A nagyváros környékén lévő települések (falvak, kisvárosok) kapcsolata a központtal egyre szorosabb: a lakók **ingáznak** a központba dolgozni, tanulni, bevásárolni, a város pedig kiszolgálja a környéket. Így alakul ki az **agglomeráció (településhalmaz)**. Példa: a budapesti agglomeráció a fővárost és a környező, vele szorosan összekapcsolódó településeket foglalja magába.',
        },
        {
          kind: 'compare',
          title: 'A nagyvárosi élet problémái és lehetséges megoldásaik',
          columns: ['Probléma (urbanizációs ártalmak)', 'Megoldási lehetőség'],
          rows: [
            {
              label: 'Légszennyezés, zaj, közlekedési dugók',
              cells: [
                'a belvárosi autóforgalom zsúfoltsága, szmog',
                'tömegközlekedés fejlesztése, behajtási díj, kerékpárutak, P+R parkolók',
              ],
            },
            {
              label: 'Lakáshiány, nyomornegyedek',
              cells: [
                'drága lakások, szegénység, rossz lakáskörülmények',
                'szociális lakásépítés, városrehabilitáció',
              ],
            },
            {
              label: 'Zöldfelületek hiánya, hulladék',
              cells: [
                'kevés park, nagy hulladékmennyiség',
                'parkok, zöld tetők, szelektív hulladékgyűjtés',
              ],
            },
            {
              label: 'Társadalmi problémák',
              cells: [
                'elszigetelődés, bűnözés, elkülönülő negyedek',
                'közösségi terek, oktatási és szociális programok',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **városrehabilitáció** a leromlott városrészek felújítása, új funkciókkal való megtöltése, hogy a lakók életkörülményei javuljanak, és a városrész újra vonzó legyen.',
        },
        { kind: 'heading', text: 'A városok szerkezete a különböző földrészeken', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          columns: ['Jellemző városszerkezet', 'Megjegyzés'],
          rows: [
            {
              label: 'Európa',
              cells: [
                'történelmi belváros szűk utcákkal, tér a központban; többnyire sűrű beépítés',
                'jól kiépült tömegközlekedés; középkori eredetű központ',
              ],
            },
            {
              label: 'Észak-Amerika',
              cells: [
                'derékszögű utcahálózat, felhőkarcolós üzleti negyed (CBD), kiterjedt, autóra épült elővárosok',
                'a belső városrészekben a szegényebb, gyakran etnikailag elkülönülő negyedek',
              ],
            },
            {
              label: 'Latin-Amerika',
              cells: [
                'gazdag belső negyedek, a peremeken nagy kiterjedésű nyomornegyedek (favelák)',
                'gyors, szabályozatlan növekedés',
              ],
            },
            {
              label: 'Iszlám világ (például Észak-Afrika, Délnyugat-Ázsia)',
              cells: [
                'szűk utcás régi városmag (medina), bazár, mellette új, nyugatias városrészek',
                'a régi és az új városrészek éles kontrasztja',
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
            'Képről, alaprajzról vagy leírásból településtípus (halmazfalu, útifalu, tanya, farm) felismerése.',
            'Városi övezetek azonosítása ábrán vagy leírásban; melyik övezetben található egy adott funkció.',
            'Összehasonlítás: tanya és farm, városodás és városiasodás.',
            'Példák szerepkörökre és azok átalakulására; a nagyvárosi problémák és megoldásaik bemutatása példával.',
            'Számítási feladat: a városi népesség aránya, változása.',
          ],
        },
        {
          kind: 'warning',
          text: 'A **városodás** és a **városiasodás** nem azonos: az egyik a városi népesség mennyiségi növekedése, a másik a városi életforma terjedése (akár faluban is). Az agglomerációt se keverd a megapolisszal: az agglomeráció a város és vonzáskörzete, a megapolisz a 10 milliós nagyságrendű óriásváros.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz „mutasson be egy nagyvárosi problémát és megoldást” kérdésre: nevezd meg a problémát (például forgalmi dugó és légszennyezés), mondd meg az okát (sok autó, a lakóövezet és a munkahelyek távolsága), majd adj egy konkrét megoldást (tömegközlekedés, P+R, behajtási díj).',
        },
      ],
      topicMatch: [
        'településtípusok',
        '=települések',
        '=városok',
        'településföldrajz',
        '=népesség és település',
      ],
      quiz: [
        {
          question: 'Melyik kijelentés igaz a farmra a tanyához képest?',
          options: [
            'kisebb és önellátó gazdaság',
            'nagyobb, gépesített, piacra termelő gazdaság',
            'csoportos település',
            'csak Magyarországon fordul elő',
          ],
          answer: 1,
          explanation:
            'A farm nagy kiterjedésű, gépesített, a piacra termelő szórványtelepülés, például az Egyesült Államokban vagy Ausztráliában. A tanya kisebb, gyakran vegyes, önellátó jellegű.',
        },
        {
          question: 'Melyik övezet a város legbelső, üzleti és hivatali magja?',
          options: [
            'külső lakóhelyöv',
            'külső munkahelyöv',
            'belső lakóhelyöv',
            'belső munkahelyöv (city)',
          ],
          answer: 3,
          explanation:
            'A city, a belső munkahelyöv a város központja, itt vannak a hivatalok, bankok, irodák, kevés az állandó lakó.',
        },
        {
          question: 'Mi a különbség a városodás és a városiasodás között?',
          options: [
            'nincs különbség, ugyanaz a két fogalom',
            'a városodás a városi népesség növekedése, a városiasodás a városi életforma terjedése',
            'a városodás a faluk átalakulása, a városiasodás a városlakók számának csökkenése',
            'a városodás az agglomeráció, a városiasodás a megapolisz',
          ],
          answer: 1,
          explanation:
            'A városodás mennyiségi (a városi népesség aránya nő), a városiasodás minőségi (szolgáltatások, infrastruktúra, életmód).',
        },
        {
          question:
            'Egy országban a 40 millió lakosból 26 millióan élnek városban. Mekkora a városi népesség aránya?',
          options: ['26%', '35%', '65%', '70%'],
          answer: 2,
          explanation: '$\\frac{26}{40} = 0{,}65$, azaz 65%.',
        },
        {
          question: 'Melyik a nagyvárosi problémák egyik tipikus megoldása?',
          options: [
            'a tömegközlekedés fejlesztése',
            'az autóforgalom növelése a belvárosban',
            'a zöldterületek beépítése',
            'a városrehabilitáció leállítása',
          ],
          answer: 0,
          explanation:
            'A fejlett tömegközlekedés kevesebb autót jelent, így csökken a dugó és a légszennyezés. A többi válasz a problémát súlyosbítaná.',
        },
        {
          question:
            'Melyik földrészen jellemző a nagy kiterjedésű nyomornegyedek (favelák) a város peremén?',
          options: ['Latin-Amerika', 'Észak-Európa', 'Japán', 'Ausztrália belseje'],
          answer: 0,
          emelt: true,
          explanation:
            'Latin-Amerika nagyvárosainak peremén, a gyors, szabályozatlan növekedés miatt hatalmas nyomornegyedek alakultak ki.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Település', url: wiki('Település') },
        { label: 'Wikipédia: Agglomeráció', url: wiki('Agglomeráció') },
        { label: 'Wikipédia: Urbanizáció', url: wiki('Urbanizáció') },
      ],
    },
    {
      id: 'urbanizacio-fejlett-fejlodo-vilag',
      subject: 'foldrajz',
      unitId: 'nepesseg-telepulesek',
      title: 'Városfejlődés, szuburbanizáció és az urbanizáció a fejlett és a fejlődő világban',
      level: 'emelt',
      requirement: {
        emelt:
          'A falvak és a városok átalakulási folyamatának bemutatása források felhasználásával, szerepük átértékelődése; a városfejlődés folyamatának magyarázata; a fejlett és a fejlődő világ urbanizációs folyamatainak összehasonlítása',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          emelt: true,
          items: [
            '**Szuburbanizáció (elővárosodás)**: a lakosság (majd a munkahelyek) kiköltözik a városközpontból az agglomerációba, a belváros népessége csökken.',
            '**Dezurbanizáció (ellenvárosodás)**: a városok népessége csökken, a lakosok vidékre költöznek vagy a város egésze zsugorodik.',
            '**Reurbanizáció**: a városba való visszatérés, a belváros újjáélesztése (városrehabilitáció).',
            'A **fejlett világban** az urbanizáció már lassú, magas városi arányú; a **fejlődő világban** gyors, szegénység, slumok kísérik.',
            '**Megalopolisz (mamutváros)**: összeépült agglomerációk láncolata, például BosWash, Randstad (sokközpontú), Tokaido.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A városfejlődés szakaszai', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          columns: ['Mi történik?', 'Jellemzők'],
          rows: [
            {
              label: 'Urbanizáció',
              cells: [
                'a városok növekednek, a központ népessége nő',
                'iparosodás, a falvakból a városba áramlás; a 19–20. században Európában és Észak-Amerikában',
              ],
            },
            {
              label: 'Szuburbanizáció (elővárosodás)',
              cells: [
                'a lakosság, majd a kereskedelem és az ipar a városperemre költözik',
                'a belváros népessége csökken, az agglomeráció nő; autóhasználat és ingázás nő',
              ],
            },
            {
              label: 'Dezurbanizáció (ellenvárosodás)',
              cells: [
                'a város egésze veszít a népességéből, a lakosok vidékre, kisebb településekre költöznek',
                'iparvidékek válsága, a belvárosok kiürülése',
              ],
            },
            {
              label: 'Reurbanizáció',
              cells: [
                'visszaköltözés a központi városrészekbe',
                'a belváros felújítása, városrehabilitáció, új szolgáltatások és munkahelyek',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Egyközpontú és sokközpontú agglomeráció',
          columns: ['Egyközpontú', 'Sokközpontú'],
          rows: [
            {
              label: 'Jellemző',
              cells: [
                'egy domináns központi város (a legtöbb munkahely és szolgáltatás ott van)',
                'több, hasonló súlyú város szolgáltat egymás mellett',
              ],
            },
            {
              label: 'Példa',
              cells: [
                'a budapesti agglomeráció',
                'a hollandiai Randstad (Amszterdam, Rotterdam, Hága, Utrecht)',
              ],
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Megalopolisz (mamutváros)',
              text: 'több, egymáshoz közeli agglomeráció összenövésével kialakuló, több százezer–tízmillió fős városi térség.',
              emelt: true,
            },
            {
              term: 'BosWash',
              text: 'az Egyesült Államok északkeleti partvidékének városlánca, Bostontól Washingtonig (a közbeeső New Yorkkal, Philadelphiával, Baltimore-ral).',
              emelt: true,
            },
            {
              term: 'Randstad',
              text: 'Hollandia nyugati részének sokközpontú városgyűrűje (Amszterdam, Rotterdam, Hága, Utrecht).',
              emelt: true,
            },
            {
              term: 'Tokaido',
              text: 'Japán Honsú szigetének délkeleti partvidékén a Tokió–Oszaka közötti városlánc.',
              emelt: true,
            },
            {
              term: 'Városklíma',
              text: 'a városi beépítettség miatt a környezetnél melegebb (hősziget), szárazabb levegőjű, szennyezettebb, kevésbé szeles, helyenként kevesebb napfényes éghajlat.',
              emelt: true,
            },
            {
              term: 'Slum, gettó',
              text: 'a slum a fejlődő országok nagyvárosainak rossz körülményű nyomornegyede; a gettó a társadalmilag vagy etnikailag elkülönülő, szegényes városrész, a fejlett országokban is előfordul.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A falvak átalakulása', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          columns: ['Hagyományos falu', 'Átalakult és városias, modern falu'],
          rows: [
            {
              label: 'Gazdaság',
              cells: [
                'a lakosság nagy része mezőgazdaságból él',
                'a lakók nagy része ingázik, vagy szolgáltatásban, iparban, idegenforgalomban dolgozik',
              ],
            },
            {
              label: 'Népesség',
              cells: [
                'zártabb közösség, kevés bevándorló',
                'az agglomerációban kiköltözők érkeznek, nő a lakosság; a távoli aprófalvakban viszont elöregedés és elnéptelenedés',
              ],
            },
            {
              label: 'Szerepkör',
              cells: [
                'élelmiszertermelő és munkaerőforrás',
                'lakó-, üdülő- és pihenőfunkció, a környezet védelme',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Urbanizáció a fejlett és a fejlődő világban', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          columns: ['Fejlett világ', 'Fejlődő világ'],
          rows: [
            {
              label: 'Ütem',
              cells: [
                'lassú, a városi népesség aránya már magas',
                'gyors, a városi lakosság gyorsan nő',
              ],
            },
            {
              label: 'Fő ok',
              cells: [
                'iparosodás és szolgáltatások, utána szuburbanizáció',
                'szegénység és népességrobbanás a vidéken, vonzó városi munkalehetőség (kiűző és vonzó tényezők)',
              ],
            },
            {
              label: 'Jellemző folyamatok',
              cells: [
                'szuburbanizáció, dezurbanizáció, városrehabilitáció, reurbanizáció',
                'slumok, nyomornegyedek kialakulása, az infrastruktúra elmarad a növekedéstől',
              ],
            },
            {
              label: 'Problémák',
              cells: [
                'forgalom, környezetterhelés, a belvárosok kiürülése, társadalmi szétszakadás',
                'túlzsúfoltság, szegénység, tiszta víz és szennyvízelvezetés hiánya, informális munka',
              ],
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: forrásalapú elemzés',
          problem:
            'Egy 20. század végi település lakossága 20 év alatt 2000 főről 3500 főre nőtt, a lakók 60%-a ingázik a közeli nagyvárosba, a faluban új családi házas lakóparkot építettek. Milyen folyamatot mutat ez?',
          solution:
            'Az adatok **szuburbanizációra** utalnak: a nagyváros lakói kiköltöznek az agglomerációba (a lakosság gyorsan nő, nagy az ingázók aránya, lakópark épül). A falu **átalakult**, szerepköre a mezőgazdaságiról lakófunkcióra tolódott. A nagyvárosban ez a belváros népességfogyásával járhat, ezt reurbanizációval (rehabilitációval) lehet ellensúlyozni.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          emelt: true,
          items: [
            'Forrás (szöveg, diagram, fotó, térkép) alapján a településfejlődés szakaszának azonosítása.',
            'A szuburbanizáció, dezurbanizáció és reurbanizáció megkülönböztetése példával.',
            'A fejlett és a fejlődő világ urbanizációjának összehasonlítása szempontok szerint (ütem, ok, problémák).',
            'Topográfia-jellegű feladat: BosWash, Randstad, Tokaido elhelyezése a térképen.',
          ],
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'A szuburbanizáció nem a falvak elnéptelenedése: a város peremére és az agglomerációba költözés. A dezurbanizáció az, amikor magának a városnak (a teljes városnak) csökken a népessége.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Összehasonlító válasznál mindig szempontonként dolgozz (ütem, okok, következmények), mindkét oldalra írj példát vagy adatot, és a végén foglald össze a legfőbb különbséget egy mondatban.',
        },
      ],
      topicMatch: ['urbanizáció', 'városfejlődés', 'megalopolisz', 'világ nagyvárosai'],
      quiz: [
        {
          question: 'Mit jelent a szuburbanizáció (elővárosodás)?',
          options: [
            'a lakosság kiköltözése a városközpontból az agglomerációba',
            'a falvak lakosságának városba költözése',
            'a belváros újjáélesztése',
            'a város fejlődésének leállása',
          ],
          answer: 0,
          explanation:
            'A szuburbanizáció során a lakosság (majd a munkahelyek) a városperemre és az agglomerációba települ át.',
        },
        {
          question: 'Melyik a sokközpontú agglomeráció példája?',
          options: [
            'a budapesti agglomeráció',
            'a hollandiai Randstad',
            'a falusi halmazfalu',
            'a farmgazdaság',
          ],
          answer: 1,
          explanation:
            'A Randstadban Amszterdam, Rotterdam, Hága és Utrecht hasonló súlyú városok egymás mellett. A budapesti agglomeráció egyközpontú.',
        },
        {
          question: 'Melyik állítás igaz a fejlődő országok urbanizációjára?',
          options: [
            'lassú, a városi arány már magas',
            'jellemző a belvárosok rehabilitációja',
            'gyors, és gyakran slumok kialakulásával jár',
            'kizárólag a szuburbanizáció jellemzi',
          ],
          answer: 2,
          explanation:
            'A fejlődő világban a vidéki szegénység és a népességnövekedés miatt gyors a városba áramlás, az infrastruktúra elmarad, nyomornegyedek jönnek létre.',
        },
        {
          question: 'Mi a Tokaido?',
          options: [
            'egy holland városgyűrű',
            'az amerikai északkeleti partvidék városlánca',
            'a Tokió–Oszaka közötti japán városlánc',
            'a világ legnagyobb slumja',
          ],
          answer: 2,
          explanation:
            'A Tokaido Honsú szigetének partvidékén a Tokió és Oszaka közötti, összenőtt városok lánca. A BosWash az amerikai, a Randstad a holland megfelelője.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Szuburbanizáció', url: wiki('Szuburbanizáció') },
        { label: 'Wikipédia: Megalopolisz', url: wiki('Megalopolisz') },
        { label: 'Wikipédia: Randstad', url: wiki('Randstad') },
      ],
    },
  ],
};

export default unit;
