import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 7 (Magyarország – helyünk a Kárpát-medencében és Európában). */
const unit: GuideUnit = {
  id: 'magyarorszag',
  subject: 'foldrajz',
  order: 70,
  title: 'Magyarország – helyünk a Kárpát-medencében és Európában',
  requirementRef: '7.1–7.8 Magyarország',
  intro:
    'Hazánk fekvése, tájai, éghajlata és vizei, népessége, gazdasága és természeti értékei: a vizsga minden évben kérdez róla, és a topográfiai feladatban is sok hazai név szerepel.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (7. témakör). A topográfiai nevek teljes listáját a követelmény 7. Magyarország része tartalmazza. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'magyarorszag-fekves-tajak-eghajlat',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Fekvés, nagytájak, éghajlat és vizek',
      level: 'kozep',
      requirement: {
        kozep:
          'Hazánk helye a Kárpát-medencében, nagytájai, felszíne, éghajlata, vizei, talajai és növényzete; a természeti adottságok szerepe.',
        emelt:
          'A Kárpát-medence kialakulása, a tájak összehasonlítása, a természeti adottságok és a gazdálkodás összefüggései.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Magyarország a **Kárpát-medence** közepén fekszik, területe kb. **93 000 km²**, tengerparttal nem rendelkezik.',
            'A hat **nagytáj**: Alföld, Kisalföld, Nyugat-magyarországi-peremvidék, Dunántúli-dombság, Dunántúli-középhegység, Északi-középhegység.',
            'Legmagasabb pontja a **Kékes** (1014 m, Mátra), legalacsonyabb pontja Szeged közelében van (kb. 76 m).',
            'Éghajlata **mérsékelten szárazföldi**: óceáni, szárazföldi és mediterrán hatások keverednek, ezért az időjárás változékony.',
            'Fő folyói a **Duna** és a **Tisza**; legnagyobb tava a **Balaton**, Közép-Európa legnagyobb tava.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A Kárpát-medencét a Kárpátok, az Alpok és a Dinári-hegység keretezi. A medence belseje a harmadidőszakban süllyedt, tengere, majd tava feltöltődött, ezért nagy részét **síkságok** (Alföld, Kisalföld) borítják. A hegységek két csoportba tartoznak: a **Dunántúli-középhegység** nagyrészt üledékes kőzetekből (mészkő, dolomit) épül fel, az **Északi-középhegység** nagy része (Mátra, Zempléni-hegység) vulkáni eredetű.',
        },
        {
          kind: 'map',
          title: 'Tájékozódási pontok',
          places: [
            { name: 'Budapest', lat: 47.5, lon: 19.04, note: 'főváros, a Duna partján' },
            { name: 'Kékes', lat: 47.87, lon: 20.01, note: 'legmagasabb pont, Mátra' },
            { name: 'Balaton (Siófok)', lat: 46.9, lon: 18.05 },
            { name: 'Szeged', lat: 46.25, lon: 20.15, note: 'a Tisza mentén, az Alföldön' },
            { name: 'Debrecen', lat: 47.53, lon: 21.63, note: 'az Alföld keleti része' },
            { name: 'Győr', lat: 47.69, lon: 17.63, note: 'Kisalföld' },
            { name: 'Pécs', lat: 46.07, lon: 18.23, note: 'Mecsek, Dunántúli-dombság' },
          ],
        },
        {
          kind: 'text',
          text: 'Az **éghajlat**: az évi középhőmérséklet nagyjából 10–11 °C, az évi csapadék kb. 500–800 mm; nyugaton több, az Alföld közepén kevesebb a csapadék. A nyár meleg, a tél hideg, gyakori a **nyári aszály**. A **talajok** közül a csernozjom (mezőségi talaj) az Alföld legjobb termőtalaja, a dombvidékeken barna erdőtalaj a jellemző.',
        },
        {
          kind: 'text',
          text: 'A **vizek**: hazánk folyói szinte mind a Dunába ömlenek, és többségük a szomszéd országokból érkezik, ezért az árvizek és a szennyezés a határon túlról is érkezhet. A Tisza vízjárása szélsőséges (tavaszi és nyár eleji árvíz). A Balaton sekély tó (átlagmélysége néhány méter), gyorsan melegszik. Gazdag a **termál- és gyógyvíz** készlet, mert a medence alatt vékony a földkéreg.',
          emelt: true,
        },
        {
          kind: 'compare',
          title: 'Két nagytáj összevetése',
          columns: ['Alföld', 'Dunántúli-középhegység'],
          rows: [
            {
              label: 'Felszín',
              cells: [
                'síkság, folyóvízi és szélhordta üledék (homok, lösz)',
                'röghegység, mészkő és dolomit',
              ],
            },
            { label: 'Éghajlat', cells: ['szárazabb, nagyobb hőingás', 'csapadékosabb, hűvösebb'] },
            {
              label: 'Gazdálkodás',
              cells: ['szántóföldi növénytermesztés', 'erdő, bauxit (korábban), idegenforgalom'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'A topográfiai feladatban kontúrtérképen kell megnevezni tájakat, hegységeket, folyókat és városokat. Tanuld a neveket a térképen, ne listából.',
        },
        {
          kind: 'example',
          title: 'Mintakérdés',
          problem: 'Miért szélsőséges a Tisza vízjárása?',
          solution:
            'A vízgyűjtője nagy része hegyvidék (Kárpátok), ahol a hóolvadás és a nagy esők gyorsan sok vizet juttatnak a folyóba, az alföldi szakaszon pedig kicsi az esés, ezért a víz lassan vonul le.',
        },
      ],
      topicMatch: [
        '=magyarország',
        'kárpát-medence',
        'tájak',
        'kisalföld',
        'balaton-felvidék',
        '=duna',
      ],
      quiz: [
        {
          question: 'Melyik Magyarország legmagasabb pontja?',
          options: ['Galya-tető', 'Kékes', 'Írott-kő', 'Zengő'],
          answer: 1,
          explanation: 'A Kékes (1014 m) a Mátrában van; ez hazánk legmagasabb pontja.',
        },
        {
          question: 'Milyen éghajlat jellemző Magyarországra?',
          options: ['óceáni', 'mediterrán', 'mérsékelten szárazföldi', 'sarkvidéki'],
          answer: 2,
          explanation:
            'Hazánkban óceáni, szárazföldi és mediterrán hatások keverednek; ez a mérsékelten szárazföldi éghajlat.',
        },
        {
          question: 'Melyik az Alföld legjobb termőtalaja?',
          options: ['csernozjom (mezőségi talaj)', 'váztalaj', 'láptalaj', 'barna erdőtalaj'],
          answer: 0,
          explanation: 'A csernozjom humuszban gazdag, ezért a legjobb szántóföldi talaj.',
        },
        {
          question: 'Miért gazdag Magyarország termálvízben?',
          options: [
            'mert sok a tengervíz',
            'mert a medence alatt vékony a földkéreg, és nagy a hőáram',
            'mert sok a gleccser',
            'mert kevés a csapadék',
          ],
          answer: 1,
          explanation:
            'A vékony kéreg miatt gyorsan nő a hőmérséklet a mélységgel, ezért a mélyben tárolt víz meleg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyarország földrajza', url: wiki('Magyarország földrajza') },
        { label: 'Wikipédia: Kárpát-medence', url: wiki('Kárpát-medence') },
      ],
    },
    {
      id: 'magyarorszag-nepesseg-gazdasag',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Népesség, települések és gazdaság',
      level: 'kozep',
      requirement: {
        kozep:
          'Hazánk népessége és települései, a népesség fogyása és öregedése; a gazdaság szerkezete, főbb ágazatai, energiagazdálkodása; területi különbségek.',
        emelt: 'A gazdasági fejlődés szakaszai, a regionális különbségek okai és következményei.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A népesség kb. **9,6 millió** (2022). 1981 óta **csökken**, mert kevesebben születnek, mint ahányan meghalnak, és a társadalom **öregszik**.',
            'A népesség többsége városban él; a legnagyobb város **Budapest** (kb. 1,7 millió lakos).',
            'A foglalkoztatottak többsége a **szolgáltatásokban** dolgozik; az ipar húzóága a **járműipar**.',
            'Az áram nagy része a **Paksi Atomerőműből** származik; a földgáz és a kőolaj nagyrészt import.',
            'Közigazgatás: **19 megye** és a főváros.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A **természetes fogyás** oka az alacsony születésszám. A korfa urna alakú: kevés a fiatal, sok az idős. A népesség térben is egyenlőtlenül oszlik el: Budapest és agglomerációja sűrűn lakott, egyes aprófalvas térségek (például az ország keleti és déli határ menti részein) elnéptelenednek.',
        },
        {
          kind: 'text',
          text: 'A **gazdaság**: a rendszerváltoztatás után a gazdaság piacgazdasággá alakult, sok külföldi **működőtőke** érkezett. Ma meghatározó a járműipar (Győr, Kecskemét, Esztergom), az elektronika és a vegyipar. A **mezőgazdaság** fő termékei a gabonafélék (búza, kukorica) és a napraforgó, fontos a szőlő- és gyümölcstermesztés. Az **idegenforgalom** központjai Budapest, a Balaton és a gyógyfürdők.',
        },
        {
          kind: 'text',
          text: 'A **területi különbségek**: a fejlettebb térségek Budapest és környéke, valamint az ország északnyugati része; a kevésbé fejlett térségek inkább keleten és délen vannak. A különbségek okai közé tartozik a nyugati határ közelsége, a közlekedési kapcsolatok és a régi ipari központok hanyatlása.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'example',
          title: 'Számolás: természetes fogyás',
          problem:
            'Egy évben kb. 85 ezer gyermek született és kb. 130 ezer ember halt meg egy 9,6 milliós országban. Mekkora a természetes fogyás ezrelékben?',
          solution:
            '$(85\\,000 - 130\\,000) / 9\\,600\\,000 \\cdot 1000 \\approx -4{,}7$ ‰. A népesség tehát természetes úton kb. 4,7 ezrelékkel fogyott.',
        },
        {
          kind: 'tip',
          text: 'Diagramelemzésnél mindig írd le a változás irányát és okát is (például: csökken, mert kevés a születés).',
        },
      ],
      topicMatch: ['magyarország régiói', '=magyarország'],
      quiz: [
        {
          question: 'Mióta csökken Magyarország népessége?',
          options: ['1920 óta', '1981 óta', '2004 óta', '1945 óta'],
          answer: 1,
          explanation: 'A természetes fogyás 1981 óta tart.',
        },
        {
          question: 'Honnan származik hazánk villamos energiájának nagy része?',
          options: ['vízerőművekből', 'a Paksi Atomerőműből', 'szélerőművekből', 'kőszénből'],
          answer: 1,
          explanation: 'A paksi atomerőmű adja a hazai áramtermelés jelentős részét.',
        },
        {
          question: 'Melyik ágazat a magyar ipar egyik húzóága?',
          options: ['bányászat', 'textilipar', 'járműipar', 'hajógyártás'],
          answer: 2,
          explanation:
            'A járműipar (autógyárak és beszállítóik) a magyar ipar legfontosabb exportágazata.',
        },
      ],
      sources: [
        { label: 'KSH', url: 'https://www.ksh.hu/' },
        { label: 'Wikipédia: Magyarország gazdasága', url: wiki('Magyarország gazdasága') },
      ],
    },
    {
      id: 'magyarorszag-ertekek-kornyezet',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Természeti és kulturális értékek, környezeti állapot',
      level: 'kozep',
      requirement: {
        kozep:
          'Nemzeti parkok, világörökségi helyszínek, természeti és kulturális értékek; hazánk környezeti állapota és a környezetvédelem feladatai.',
        emelt: 'A környezeti problémák okainak és megoldási lehetőségeinek elemzése.',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Hazánkban **10 nemzeti park** van; az első a **Hortobágyi Nemzeti Park** (1973).',
            'Világörökségi helyszín például Budapest (Duna-part, Budai Vár, Andrássy út), Hollókő, Pannonhalma, a Hortobágy, Tokaj-hegyalja, az Aggteleki-karszt barlangjai és a pécsi ókeresztény sírkamrák.',
            'Fő környezeti gondok: **aszály** és a Duna–Tisza közi homokhátság **vízhiánya**, árvizek, talajerózió, levegőszennyezés a nagyvárosokban.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A **nemzeti park** a legszigorúbb védelmi kategória, amely nagy kiterjedésű, természetes állapotú tájat véd. Példák: Hortobágyi, Kiskunsági, Bükki, Aggteleki, Fertő–Hanság, Duna–Ipoly, Balaton-felvidéki, Duna–Dráva, Körös–Maros és Őrségi Nemzeti Park.',
        },
        {
          kind: 'text',
          text: 'Az **éghajlatváltozás** miatt gyakoribb a hőség és az aszály. A Duna–Tisza közén a talajvízszint süllyedése elsivatagosodási folyamatokat indított el. A megoldás része a víz visszatartása, az öntözés fejlesztése és a tájhoz illő gazdálkodás.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Ha környezeti problémáról írsz, mindig három részt adj meg: ok, következmény, megoldás.',
        },
      ],
      topicMatch: ['magyarország'],
      quiz: [
        {
          question: 'Melyik hazánk első nemzeti parkja?',
          options: ['Bükki', 'Hortobágyi', 'Kiskunsági', 'Aggteleki'],
          answer: 1,
          explanation: 'A Hortobágyi Nemzeti Parkot 1973-ban alapították, ez volt az első.',
        },
        {
          question: 'Hány nemzeti park van Magyarországon?',
          options: ['5', '8', '10', '12'],
          answer: 2,
          explanation: 'Magyarországon 10 nemzeti park van.',
        },
        {
          question: 'Melyik térség küzd a talajvízszint süllyedésével és a vízhiánnyal?',
          options: ['Duna–Tisza köze (homokhátság)', 'Őrség', 'Zempléni-hegység', 'Szigetköz'],
          answer: 0,
          explanation:
            'A homokhátságon a talajvízszint süllyedése elsivatagosodási folyamatokat okoz.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Magyarország nemzeti parkjai',
          url: wiki('Magyarország nemzeti parkjai'),
        },
        {
          label: 'Wikipédia: Magyarország világörökségi helyszínei',
          url: wiki('Magyarország világörökségi helyszínei'),
        },
      ],
    },
  ],
};

export default unit;
