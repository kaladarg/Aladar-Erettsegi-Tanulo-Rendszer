import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 7 (Magyarország – helyünk a Kárpát-medencében és Európában), 7.1–7.9. */
const unit: GuideUnit = {
  id: 'magyarorszag',
  subject: 'foldrajz',
  order: 70,
  title: 'Magyarország – helyünk a Kárpát-medencében és Európában',
  requirementRef:
    '7.1 A Kárpát-medence; 7.2 Természeti adottságok; 7.3 Társadalmi jellemzők; 7.4 Gazdasági fejlődés; 7.5 Hazánk tájai; 7.6 Régiók; 7.7 Értékek védelme; 7.8 Környezeti állapot; 7.9 Országhatárokon átívelő kapcsolatok',
  intro:
    'Hazánk fekvése, földtörténete, éghajlata és vizei, tájai, népessége, gazdasága, régiói, értékei és környezeti állapota. A követelmény szerint a feldolgozás mélységét a topográfiai fogalmak határozzák meg: a lenti hivatalos névlista minden eleme vizsgaanyag.',
  requirementSource:
    'A követelmények és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (7. témakör; topográfia: 7. Magyarország). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: { kozep: [], emelt: [] },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: {
      kozep: [
        'Alpokalja',
        'Dunántúli-dombvidék',
        'Északi-középhegység',
        'Kisalföld',
        'Badacsony',
        'Bakony',
        'Balaton-felvidék',
        'Baranyai-dombság',
        'Belső-Somogy',
        'Borsodi-medence',
        'Börzsöny',
        'Budai-hegység',
        'Bükk-fennsík',
        'Csepel-sziget',
        'Cserehát',
        'Cserhát',
        'menti síkság (Dráva-mellék)',
        'Duna menti síkság',
        'köze',
        'Dunakanyar',
        'Dunazug-hegység',
        'Gödöllői-dombság',
        'Győri-medence',
        'Hajdúság',
        'Írott-kő',
        'Jászság',
        'Keszthelyi-hegység',
        'Kékes',
        'Körös–Maros köze',
        'Kőszegi-hegység',
        'Marcal-medence',
        'Mátra',
        'Mecsek',
        'Mohácsi-sziget',
        'Móri-árok',
        'Nagykunság',
        'Nyírség',
        'Őrség',
        'Pesti-síkság',
        'Pilis',
        'Soproni-hegység',
        'Szentendrei-sziget',
        'Szigetköz',
        'Tihanyi-félsziget',
        'Tiszántúl',
        'Tokaji',
        'Tolnai-dombság',
        'Velencei-hegység',
        'Villányi-hegység',
        'Visegrádi-hegység',
        'Bodrog',
        'Dráva',
        'Duna',
        'Fertő',
        'Hernád',
        'Hévízi-tó',
        'Kis-Balaton',
        'Körös',
        'Maros',
        'Mura',
        'Rába',
        'Sajó',
        'Sió',
        'szegedi Fehér-tó',
        'Szelidi-tó',
        'Tisza',
        'Tisza-tó',
        'Zagyva',
        'Zala',
        'Algyő',
        'Baja',
        'Balassagyarmat',
        'Balatonfüred',
        'Berente',
        'Budapest',
        'Bük',
        'Debrecen',
        'Dunaújváros',
        'Eger',
        'Gödöllő',
        'Gyöngyös',
        'Győr',
        'Gyula',
        'Harkány',
        'Hatvan',
        'Hegyeshalom',
        'Hévíz',
        'Jászberény',
        'Jászfényszaru',
        'Kalocsa',
        'Kecskemét',
        'Keszthely',
        'Komárom',
        'Kőszeg',
        'Makó',
        'Miskolc',
        'Mohács',
        'Nagykanizsa',
        'Nyíregyháza',
        'Orosháza',
        'Ózd',
        'Paks',
        'Pápa',
        'Pécs',
        'Salgótarján',
        'Sárospatak',
        'Siófok',
        'Sopron',
        'Százhalombatta',
        'Szeged',
        'Székesfehérvár',
        'Szekszárd',
        'Szentendre',
        'Szentgotthárd',
        'Szolnok',
        'Szombathely',
        'Tata',
        'Tatabánya',
        'Tihany',
        'Tiszaújváros',
        'Tokaj',
        'Vác',
        'Várpalota',
        'Veresegyház',
        'Veszprém',
        'Visegrád',
        'Visonta',
        'Zalaegerszeg',
        'Zalakaros',
        'Záhony',
        'Budapesti agglomeráció',
        'Aggteleki Nemzeti Park',
        'Balaton-felvidéki Nemzeti Park',
        'Bükki Nemzeti Park',
        'Duna–Dráva Nemzeti Park',
        'Duna– Ipoly Nemzeti Park',
        'Fertő–Hanság Nemzeti Park',
        'Hortobágyi Nemzeti Park',
        'Kiskunsági Nemzeti Park',
        'Körös–Maros Nemzeti Park',
        'Őrségi Nemzeti Park',
        'Aggteleki-és Szlovák-karsztvidék',
        'Budapest Andrássy út a Millenniumi földalattival',
        'Budapest Várnegyed és a pesti Duna-part',
        'Fertő',
        'Hollókő',
        'Hortobágy',
        'Pannonhalmi Főapátság',
        'Pécsi ókeresztény sírkamrák',
        'Tokaj-Hegyalja borvidéke',
        'Baranya megye',
        'Bács-Kiskun megye',
        'Békés megye',
        'Borsod-Abaúj-Zemplén megye',
        'Csongrád-Csanád megye',
        'Fejér megye',
        'Győr-Moson-Sopron megye',
        'Hajdú-Bihar megye',
        'Heves megye',
        'Jász-Nagykun-Szolnok megye',
        'Komárom-Esztergom megye',
        'Nógrád megye',
        'Pest megye',
        'Somogy megye',
        'Szabolcs-Szatmár-Bereg megye',
        'Tolna megye',
        'Vas megye',
        'Veszprém megye',
        'Zala megye',
        'Alföld és Észak nagyrégió',
        'Dunántúl nagyrégió',
        'Közép-Magyarország nagyrégió',
        'Budapest régió',
        'Dél-Alföld régió',
        'Dél-Dunántúl régió',
        'Észak-Alföld régió',
        'Észak-Magyarország régió',
        'Közép-Dunántúl régió',
        'Nyugat-Dunántúl régió',
        'Pest régió',
      ],
      emelt: [],
    },
  },
  pages: [
    {
      id: 'magyarorszag-karpat-medence-foldtortenet',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'A Kárpát-medence, földtörténet és kőzetek',
      level: 'kozep',
      requirement: {
        kozep:
          '7.1: hazánk elhelyezése a térképen, a földgömbön, Európában és a Kárpát-medencében; a medencejelleg következményei az éghajlat, a vízrajz, a vízkészlet és a környezeti állapot vonatkozásában; a Kárpát-medence nemzetiségi összetétele; a magyarság elhelyezkedése a Kárpát-medencében és a világban. 7.2: a földtörténeti idők meghatározó geológiai eseményei (folyamatábra vagy táblázat segítségével); az egyes idők, időszakok főbb képződményei térképen; hazánk legfontosabb felszínalkotó kőzeteinek előfordulása és felhasználása.',
        emelt:
          '7.1: a földrajzilag nyitott határ következményei. 7.2: a Kárpát-medence földtörténeti fejlődésének kapcsolata a lemeztektonikai folyamatokkal; a geológiai fejlődés eseményeinek és főbb képződményeinek kötése földtörténeti korokhoz.',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Magyarország a **Kárpát-medence** közepén fekszik; területe kb. **93 000 km²**, ez a medence területének nagyjából harmada. A medencét a Kárpátok íve, az Alpok keleti nyúlványai és a Dinári-hegység veszi körül.',
            'Szomszédaink: **Ausztria, Szlovákia, Ukrajna, Románia, Szerbia, Horvátország, Szlovénia**. A határon túl is élnek magyarok (Felvidék, Kárpátalja, Erdély és Partium, Vajdaság, Muravidék, Őrvidék).',
            '**Medencejelleg**: a hegyek övezte süllyedék miatt az éghajlat szárazabb és szélsőségesebb, a folyók a hegyekből befelé futnak, és a szennyezés a medencében megrekedhet.',
            '**Földtörténet** (régitől az újig): előidő és óidő (kristályos kőzetek) → **középidő** (tengeri mészkő, dolomit; bauxit) → **harmadidőszak** (vulkánosság, Pannon-tenger, szén, szénhidrogének) → **negyedidőszak** (lösz, futóhomok, folyóhordalék).',
            'Kőzet és felhasználás: mészkő és dolomit (cement, építőanyag), andezit (zúzottkő), bazalt, lösz (talajképző), homok, kavics, agyag; energiahordozók: kőszén, lignit, kőolaj, földgáz.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Helyünk a térképen' },
        {
          kind: 'text',
          text: 'Hazánk **Közép-Európában**, a Kárpát-medence közepén fekszik. Földrajzi koordinátáival a kontúrtérképen és a földgömbön is el kell tudnod helyezni: az északi szélesség kb. 45°44′ és 48°35′ között, a keleti hosszúság kb. 16°05′ és 22°54′ között húzódik. Tengerparttal nem rendelkezik (**szárazföldi ország**), de a Duna révén a Fekete-tengerrel, a Rajna–Majna–Duna-csatorna (1992) révén az Északi-tengerrel is összeköthető vízi úton.',
        },
        {
          kind: 'text',
          text: 'A **Kárpát-medence** természetföldrajzi egység: a Kárpátok íve (Északnyugati-, Északkeleti-, Keleti- és Déli-Kárpátok), nyugaton az Alpok keleti nyúlványai, délnyugaton és délen a Dinári-hegység zárja körül. Egyetlen jelentős kijárata a Duna **Vaskapu**-szoros, ezért a medence belső vizei a Dunán át távoznak.',
        },
        {
          kind: 'map',
          title: 'A Kárpát-medence magyar közösségeinek jellegzetes központjai',
          places: [
            { name: 'Budapest', lat: 47.4979, lon: 19.0402, note: 'Magyarország' },
            { name: 'Pozsony', lat: 48.1486, lon: 17.1077, note: 'Felvidék (Szlovákia)' },
            { name: 'Kassa', lat: 48.7164, lon: 21.2611, note: 'Felvidék (Szlovákia)' },
            { name: 'Ungvár', lat: 48.6208, lon: 22.2879, note: 'Kárpátalja (Ukrajna)' },
            { name: 'Beregszász', lat: 48.2, lon: 22.6489, note: 'Kárpátalja (Ukrajna)' },
            { name: 'Kolozsvár', lat: 46.7712, lon: 23.6236, note: 'Erdély (Románia)' },
            { name: 'Marosvásárhely', lat: 46.5425, lon: 24.5575, note: 'Erdély (Románia)' },
            { name: 'Csíkszereda', lat: 46.36, lon: 25.8, note: 'Székelyföld (Románia)' },
            { name: 'Nagyvárad', lat: 47.0465, lon: 21.9189, note: 'Partium (Románia)' },
            { name: 'Szabadka', lat: 46.1, lon: 19.6667, note: 'Vajdaság (Szerbia)' },
            { name: 'Újvidék', lat: 45.2517, lon: 19.8369, note: 'Vajdaság (Szerbia)' },
            { name: 'Muraszombat', lat: 46.6628, lon: 16.1658, note: 'Muravidék (Szlovénia)' },
            { name: 'Kismarton', lat: 47.8456, lon: 16.5192, note: 'Őrvidék (Ausztria)' },
          ],
        },
        {
          kind: 'text',
          text: 'A **nemzetiségi összetétel**: a medencében a magyarok mellett szlovákok, románok, szerbek, horvátok, ukránok (ruszinok), németek, szlovének, romák és más népek élnek. Az 1920-as trianoni békeszerződés a történeti Magyarország területének kb. kétharmadát más államokhoz csatolta, ezért ma a magyarság jelentős része **határon túl**, szülőföldjén, kisebbségben él. Számra a legnagyobb közösség **Romániában** (Erdély, Partium) él, utána Szlovákia, Szerbia és Ukrajna következik. Magyarországon a törvény 13 nemzetiséget ismer el (például németek, szlovákok, románok, horvátok, szerbek, szlovének, romák). A magyarság a Kárpát-medencén kívül, a **diaszpórában** is jelen van (például az Egyesült Államokban, Kanadában, Németországban, Nagy-Britanniában, Ausztráliában, Izraelben).',
        },
        { kind: 'heading', text: 'A medencejelleg következményei' },
        {
          kind: 'compare',
          title: 'Mit okoz a hegyekkel körülzárt medence?',
          columns: ['Ok', 'Következmény'],
          rows: [
            {
              label: 'Éghajlat',
              cells: [
                'A hegykeret részben elzárja az óceáni és a hideg északi légtömegeket',
                'szárazabb, szélsőségesebb, nagyobb hőingású éghajlat; a medence belseje kevesebb csapadékot kap (csapadékárnyék), a peremek többet; télen a hideg levegő a medence alján megül (inverzió, hidegpárna)',
              ],
            },
            {
              label: 'Vízrajz és vízkészlet',
              cells: [
                'A folyók a hegyvidékről a medence belseje felé futnak',
                'a felszíni vizeink túlnyomó része (több mint 90%-a) külföldről érkezik; a Duna és a Tisza hegyvidéki vízgyűjtőjén kialakuló árhullámok nálunk vonulnak le; a medence üledékes rétegei sok felszín alatti vizet (talajvíz, rétegvíz, termálvíz) tárolnak',
              ],
            },
            {
              label: 'Környezeti állapot',
              cells: [
                'A légmozgás és a vízlefolyás a medence belseje felé tart',
                'a levegő- és a vízszennyezés a határokon túlról is érkezik, és a medencében megrekedhet; a környezetvédelem csak nemzetközi összefogással lehet eredményes',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **földrajzilag nyitott határ** azt jelenti, hogy a természetföldrajzi egységek (vízgyűjtők, hegységek, medence) nem esnek egybe az országhatárokkal. Következmény: a folyók, a levegő és a talajvíz szennyezése átlépi a határt; az árvizek a felső szakaszon, külföldön keletkeznek; a növény- és állatvilág, a tájak és a magyar közösségek is határokon átnyúlnak. Példa: a **2000. évi tiszai cianidszennyezés** (a romániai Nagybánya mellől a Szamoson és a Tiszán át a Dunáig jutott) és a **2010. évi ajkai vörösiszap-katasztrófa** (Marcal, Torna-patak, Rába, Duna) is mutatja, hogy a védekezéshez nemzetközi együttműködés kell.',
        },
        { kind: 'heading', text: 'A Kárpát-medence földtörténete' },
        {
          kind: 'compare',
          title: 'Földtörténeti idők, fő események és képződmények',
          columns: ['Időtartam', 'Események és képződmények a mai Magyarország területén'],
          rows: [
            {
              label: 'Előidő és óidő',
              cells: [
                'kb. 4,6 milliárd–252 millió évvel ezelőtt',
                'Az ősi kristályos aljzat kőzetei (gneisz, csillámpala, gránit) alakultak ki; az óidő végén a **variszkuszi hegységképződés** során gránit keletkezett (Velencei-hegység, Mórágyi-rög), a Mecsekben vörös homokkő rakódott le (uránérc).',
              ],
            },
            {
              label: 'Középidő',
              cells: [
                'kb. 252–66 millió évvel ezelőtt',
                'Meleg, sekély **tenger** borította a területet: vastag **mészkő- és dolomitrétegek** rakódtak le (Dunántúli-középhegység, Aggteleki-karszt, Bükk, Villányi-hegység). A jura korból a Mecsek **feketekőszene** származik. A kréta végén a szárazföldi, trópusi mállás során **bauxit** keletkezett (Bakony). A kréta időszakban kezdődött az **alpi hegységképződés**.',
              ],
            },
            {
              label: 'Újidő: harmadidőszak',
              cells: [
                'kb. 66–2,6 millió évvel ezelőtt',
                'A Kárpátok felgyűrődése és a medence süllyedése közben **tengeri üledékek** (például lajta-mészkő) rakódtak le, és megindult a **vulkánosság**: andezit és riolit (Visegrádi-hegység, Börzsöny, Mátra, Tokaji-hegység), későbbi bazaltvulkánok (Balaton-felvidék, Tapolcai-medence). Szénképződés: **barnakőszén** (Tatabánya, Salgótarján, Borsodi-medence), később **lignit** (Visonta). A medencét kb. 10 millió éve a **Pannon-tenger** (később Pannon-tó) töltötte ki, és homok-, agyag-, iszaprétegekkel feltöltődött; ezekben alakult ki a **kőolaj és a földgáz** (Algyő, Zala).',
              ],
            },
            {
              label: 'Újidő: negyedidőszak',
              cells: [
                'kb. 2,6 millió évvel ezelőtt – ma',
                'A jégkorszakok hideg, száraz szakaszaiban a szél **löszt** és **futóhomokot** rakott le (Mezőföld, Tolna–Baranya, Duna–Tisza köze, Nyírség); a folyók kavicsot, homokot, iszapot (hordalékkúpok, árterek) halmoztak fel (Kisalföld, Alföld). Édesvízi mészkő (travertínó) és tőzeg is keletkezett.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **lemeztektonikai háttér**: az afrikai és az eurázsiai kőzetlemez közeledése, ütközése hozta létre az Alpokat és a Kárpátokat. A Kárpát-medence aljzatát két kisebb kőzetlemez-darab (mikrolemez, az ALCAPA és a Tisza–Dácia) alkotja, amelyek a középidőtől északra, majd a harmadidőszakban a mai helyükre vándoroltak, miközben a Kárpátok íve gyűrődött. A hegyek mögött a kéreg **elvékonyodott és megsüllyedt**, ezért alakult ki a medence, a vékony kéreg miatt pedig a vulkánosság és a nagy **földi hőáram** jellemző. Ennek következménye a kedvező geotermikus adottság: nálunk a hőmérséklet kb. 20 m-enként nő 1 °C-kal (a világátlag kb. 33 m).',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: geotermikus gradiens',
          problem:
            'A felszín közelében 10 °C a hőmérséklet, és 20 méterenként 1 °C-kal nő. Becsüld meg a hőmérsékletet 2000 m mélyen! Mennyi lenne a világátlagos, 33 m/°C gradienssel?',
          solution:
            'Nálunk $2000 / 20 = 100$ °C a növekedés, tehát kb. $10 + 100 = 110$ °C. A világátlaggal $2000 / 33 \\approx 60{,}6$ °C a növekedés, vagyis kb. $70{,}6$ °C. A medence aljzata tehát jóval melegebb, ezért gazdag a **termálvízben** és a geotermikus energiában.',
        },
        { kind: 'heading', text: 'Felszínalkotó kőzetek és felhasználásuk' },
        {
          kind: 'terms',
          items: [
            {
              term: 'mészkő, dolomit',
              text: 'Középidei tengeri üledék. Dunántúli-középhegység, Bükk, Aggteleki-karszt, Villányi-hegység, Mecsek. **Építőanyag**, cement- és mészgyártás (például Lábatlan, Beremend), zúzottkő. Vízraktározó (karsztvíz).',
            },
            {
              term: 'andezit',
              text: 'Harmadidőszaki vulkáni kőzet. Börzsöny, Visegrádi-hegység, Mátra, Tokaji-hegység. **Zúzottkő** út- és vasútépítéshez, építőkő.',
            },
            {
              term: 'bazalt',
              text: 'Fiatal vulkáni kőzet. Balaton-felvidék tanúhegyei (Badacsony), Tapolcai-medence. Építőkő, zúzottkő.',
            },
            {
              term: 'riolit, riolittufa',
              text: 'Vulkáni kőzet és hamu. Tokaji-hegység, Mátra, Bükkalja. A puha tufába **pincéket** vájtak (Tokaj, Eger).',
            },
            {
              term: 'gránit, gneisz, csillámpala',
              text: 'Kristályos kőzetek. Velencei-hegység (gránit), Mórágyi-rög, Soproni- és Kőszegi-hegység. Építőkő, zúzottkő.',
            },
            {
              term: 'lösz',
              text: 'A jégkorszaki szél hordta porszerű, meszes üledék. Mezőföld, Tolna–Baranya, Tokaj-Hegyalja. **Termékeny talajok alapja**; a löszfalak jellegzetes tájformák.',
            },
            {
              term: 'homok, kavics, agyag',
              text: 'Fiatal üledékek. Futóhomok: Duna–Tisza köze, Nyírség (szőlő, gyümölcs, erdő). Kavics és homok: a Duna hordalékából, **építőipari alapanyag** (Szentendrei-sziget, Szigetköz). Agyag: tégla- és cserépgyártás.',
            },
            {
              term: 'kőszén, lignit',
              text: 'Feketekőszén (Mecsek, jura) és barnakőszén (Tatabánya, Salgótarján, Borsodi-medence) bányászata nagyrészt **megszűnt**. Lignit: Visonta (a Mátrai Erőmű tüzelője).',
            },
            {
              term: 'kőolaj, földgáz',
              text: 'Pannon üledékekben (Algyő, Zala-vidék). **Energiahordozók, vegyipari alapanyag**; a hazai kitermelés az igények kisebb részét fedezi.',
            },
            {
              term: 'bauxit',
              text: 'Krétakori mállástermék. Bakony, Villányi-hegység. **Alumíniumgyártás** alapanyaga (Ajka, Várpalota); a bányászat ma már kicsi.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Egy kőzetet így tanulj meg: **eredet** (üledékes, vulkáni, kristályos) + **kor** + **hol** + **mire használják**. A vizsga ezt a négy kapcsolatot kérdezi.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Írásbeli: földtörténeti táblázat vagy folyamatábra kitöltése (kor → esemény → képződmény), térképen kőzetek, ásványkincsek felismerése, szomszédos országok és határon túli magyarlakta tájak megnevezése kontúrtérképen.',
            'Szóbeli: „Mutasd be hazánk helyét a Kárpát-medencében, és ismertesd a medencejelleg következményeit”, illetve a földtörténet fő eseményei és képződményei atlasz segítségével.',
            'Emelt szinten: a lemeztektonika kapcsolata a medence kialakulásával, a nyitott határ következményei konkrét példával.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a mészkövet és a dolomitot a harmadidőszakhoz kötni (középidei tengeri képződmények), az andezitet pedig a középidőhöz (harmadidőszaki vulkáni kőzet). Másik hiba: a lösz és a futóhomok keletkezését a Pannon-tengerhez kötni; ezek negyedidőszaki, szél általi lerakódások.',
        },
        {
          kind: 'example',
          title: 'Modellválasz: a medencejelleg következményei',
          problem: 'Hogyan hat a medencejelleg az éghajlatra, a vizekre és a környezetre?',
          solution:
            'Vázlat: **1. Éghajlat**: a hegykeret fékezi az óceáni nedves levegőt, ezért a medence belseje szárazabb; a szélsőséges hőmérséklet és a téli inverzió (hidegpárna) gyakori. **2. Vizek**: a folyók a hegyekből befelé tartanak, a felszíni vizek nagy része külföldről jön, ezért az árvizeket felvízi csapadék okozza, és a vízkészletünk külső tényezőktől függ; a medence üledékeiben bő felszín alatti víz van. **3. Környezet**: a szennyezés, mind levegőben, mind vízben, megrekedhet vagy kívülről érkezhet, így nemzetközi összefogás kell (például a Duna-védelmi egyezmény).',
        },
      ],
      topicMatch: ['kárpát-medence', 'határon túli magyarok'],
      quiz: [
        {
          question:
            'Melyik földtörténeti időben rakódtak le a Dunántúli-középhegység mészkő- és dolomitrétegei?',
          options: ['előidő', 'óidő', 'középidő', 'negyedidőszak'],
          answer: 2,
          explanation: 'A középidő meleg, sekély tengereiben rakódott le a mészkő és a dolomit.',
        },
        {
          question: 'Melyik kőzet vulkáni eredetű és a Mátrában, a Börzsönyben bányásszák?',
          options: ['dolomit', 'andezit', 'lösz', 'homokkő'],
          answer: 1,
          explanation:
            'Az andezit harmadidőszaki vulkáni kőzet, zúzottkőnek használják. A dolomit üledékes, a lösz szél rakta le.',
        },
        {
          question: 'Mi a medencejelleg egyik következménye?',
          options: [
            'a felszíni vizeink nagy része külföldről érkezik',
            'a Balaton tengerszinten fekszik',
            'hazánknak tengerpartja van',
            'a folyók a medencéből kifelé, a hegyekbe tartanak',
          ],
          answer: 0,
          explanation:
            'A folyók a hegyvidékről a medence belseje felé futnak, ezért vizeink túlnyomó része külföldről érkezik, a szennyezés is.',
        },
        {
          question: 'Melyik ország területén él a legtöbb határon túli magyar?',
          options: ['Szlovákia', 'Szerbia', 'Románia', 'Ukrajna'],
          answer: 2,
          explanation:
            'A legnagyobb határon túli magyar közösség Romániában, Erdélyben és a Partiumban él.',
        },
        {
          question: 'Melyik képződmény kötődik a negyedidőszakhoz?',
          options: ['bauxit', 'lösz és futóhomok', 'andezit', 'feketekőszén'],
          answer: 1,
          explanation:
            'A jégkorszaki szél hordta a löszt és a futóhomokot. A bauxit krétakori, az andezit harmadidőszaki, a feketekőszén jura kori.',
        },
        {
          question:
            'Mekkora a hőmérséklet 1500 m mélyen, ha a felszínen 10 °C, és a hőmérséklet 20 méterenként 1 °C-kal nő?',
          options: ['75 °C', '85 °C', '60 °C', '110 °C'],
          answer: 1,
          explanation: '$1500 / 20 = 75$ °C a növekedés, így $10 + 75 = 85$ °C.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kárpát-medence', url: wiki('Kárpát-medence') },
        { label: 'Wikipédia: Magyarország földrajza', url: wiki('Magyarország földrajza') },
        {
          label: 'Wikipédia: Magyarország földtörténete',
          url: wiki('Magyarország földtörténete'),
        },
      ],
    },
    {
      id: 'magyarorszag-fekves-tajak-eghajlat',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Éghajlat, vizek, talaj és növényzet',
      level: 'kozep',
      requirement: {
        kozep:
          '7.2: hazánk földrajzi helyzetének éghajlati következményei, a legfontosabb módosító tényezők; hazánk éghajlatának jellemzése; a legjelentősebb folyók és tavak megnevezése kontúrtérképen és jellemzésük; a felszíni vizek gazdasági jelentősége; a felszín alatti vizek hazai típusai, előfordulásuk, hasznosításuk; vizeink környezeti problémái; a vízvédelem hazai lehetőségei és megoldásai; az éghajlat, a természetes növénytakaró és a talaj összefüggései; tematikus térképek értelmezése.',
        emelt:
          'Az időjárási-éghajlati elemek értékeinek hazai eloszlási jellegzetességei tematikus térképek alapján; a vízszennyezés regionális összefüggései, a nemzetközi összefogás szükségessége a Kárpát-medencében.',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Éghajlatunk **mérsékelten szárazföldi** (kontinentális): óceáni (nyugati), mediterrán (déli, délnyugati) és szárazföldi (keleti) hatás keveredik. Az évi középhőmérséklet kb. 10–11 °C, az évi csapadék kb. 500–800 mm.',
            'Módosító tényezők: a **domborzat és a tengerszint feletti magasság**, a hegyek elhelyezkedése, a nagy vizek (Balaton), a növényzet. A hőmérséklet kb. **0,6 °C-kal** csökken 100 m emelkedésenként.',
            'Legcsapadékosabb az **Alpokalja** és a hegyvidékek, legszárazabb az **Alföld közepe** (gyakori az aszály).',
            'Vizeink: **Duna** (417 km hazai szakasz), **Tisza**, **Balaton** (kb. 594 km², közép-európai viszonylatban a legnagyobb tó). Felszín alatti vizek: talajvíz, rétegvíz, karsztvíz, hévíz.',
            'Zonális talajok: **csernozjom** (erdőssztyepp, löszön), **barna erdőtalajok** (erdők alatt), mellettük réti, szikes, homok- és mészköves talajok.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az éghajlat' },
        {
          kind: 'text',
          text: 'Hazánk a **mérsékelt övezetben**, az óceán és az eurázsiai szárazföld határán fekszik, ezért három légköri hatás találkozik: **atlanti** (nyugatról; enyhébb, csapadékosabb, főleg nyáron és ősszel), **kontinentális** (keletről; hideg tél, forró nyár, kevés csapadék) és **mediterrán** (délről, délnyugatról; enyhe tél, őszi csapadék-maximum). Az uralkodó szélirány északnyugati. A nyár és a tél közötti nagy hőingás a szárazföldi hatás jele.',
        },
        {
          kind: 'compare',
          title: 'Az éghajlati elemek eloszlása (kerekített jellemzők)',
          columns: ['Nyugat, hegyvidékek', 'Alföld, főleg a keleti és középső rész'],
          rows: [
            {
              label: 'Csapadék',
              cells: [
                'több: az Alpokalja és a magasabb hegyek 700–800 mm fölött (az óceáni hatás és a domborzat miatt)',
                'kevesebb: kb. 500–550 mm (Hortobágy, Duna–Tisza köze); gyakori aszály',
              ],
            },
            {
              label: 'Hőmérséklet',
              cells: [
                'hűvösebb, kisebb hőingás; a hegyeken a magassággal csökken',
                'melegebb nyár (július kb. 21–23 °C), hidegebb tél, nagy hőingás',
              ],
            },
            {
              label: 'Napsütés',
              cells: [
                'kevesebb (a nyugati országrészben kb. 1800–1900 óra/év)',
                'több (a déli Alföldön kb. 2000 óra/év fölött)',
              ],
            },
            {
              label: 'Következmény',
              cells: [
                'erdők, rétek, kisebb öntözési igény',
                'szántóföldi termelés, öntözés szükséges, aszálykockázat',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Módosító tényezők**: a földrajzi szélesség (adott), a **tengerszint feletti magasság** (a hőmérséklet átlagosan kb. 0,6 °C-kal csökken 100 m-enként, a csapadék nő), a **domborzat** (a szélnek kitett oldal csapadékosabb, a védett medence szárazabb, a hegyekben a völgyekben hidegpárnák alakulnak ki), a **vizek** (a Balaton mérsékli a hőingást, enyhíti a tél hidegét), a növényzet (az erdő párologtat, hűsít), valamint a városok hatása (városi hősziget).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: hőmérséklet a magassággal',
          problem:
            'Szeged (kb. 80 m tengerszint feletti magasság) júliusi középhőmérséklete 22 °C. Becsüld meg a júliusi átlagot egy 1000 m magas hegycsúcson, ha 100 m-enként 0,6 °C-kal csökken a hőmérséklet!',
          solution:
            'A magasságkülönbség $1000 - 80 = 920$ m. A csökkenés $920 / 100 \\cdot 0{,}6 = 5{,}52$ °C. A hőmérséklet kb. $22 - 5{,}52 \\approx 16{,}5$ °C. (A valóságban a domborzat és a hőmérsékleti inverzió eltéréseket okoz.)',
        },
        { kind: 'heading', text: 'Felszíni vizek' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Duna',
              text: 'A hazai szakasz kb. 417 km. Hazánk legjelentősebb folyója; **hajózás** (nemzetközi vízi út, a Rajna–Majna–Duna-csatornán át az Északi-tengerrel összekötve), hűtővíz (Paks), ivóvíz (parti szűrésű kutak), turizmus (Dunakanyar), szigetei: Szentendrei-sziget, Csepel-sziget, Mohácsi-sziget. Mellékfolyói: Rába, Ipoly, Sió, Dráva.',
            },
            {
              term: 'Tisza',
              text: 'Ukrajnában ered, Tiszabecsnél lép az országba. Kicsi esésű, kanyargós, **szélsőséges vízjárású** (a hegyvidéki vízgyűjtőn gyors árhullámok, az alföldi szakaszon lassú levonulás). A 19. századi **szabályozás** (Vásárhelyi Pál terve) lerövidítette és gátak közé szorította. A Kiskörei vízlépcső duzzasztja a **Tisza-tavat**. Mellékfolyói: Szamos, Bodrog, Sajó (Hernád), Zagyva, Körös, Maros.',
            },
            {
              term: 'Balaton',
              text: 'Kb. 594 km², hossza kb. 77 km, **átlagosan csak kb. 3 m mély** (sekély, gyorsan átmelegszik). Vízgyűjtőjének fő vízfolyása a Zala (Kis-Balaton), egyetlen levezetése a **Sió**. Kiemelt idegenforgalmi és üdülőkörzet; vízminősége a terhelésre érzékeny (algásodás).',
            },
            {
              term: 'további tavak',
              text: '**Tisza-tó** (kb. 127 km², mesterséges tározó, vízpótlás, öntözés, turizmus); **Velencei-tó** (sekély, kb. 25 km²); **Fertő** (sztyeppei tó, nagyobbik része Ausztriában); **Hévízi-tó** (termálvizű forrástó); **szegedi Fehér-tó** (szikes); **Szelidi-tó** (a Duna egykori holtága, szikes).',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A felszíni vizek **gazdasági jelentősége**: ivóvízellátás, öntözés (a Keleti-főcsatorna a Tiszából vezet vizet a Hajdúságba és a Tiszántúlra), ipari hűtővíz, szállítás (Duna), halászat, vízenergia (kicsi: Kisköre, Tiszalök), idegenforgalom és gyógyfürdők (Balaton, Tisza-tó). Hátrányuk az árvíz és az ingadozó vízjárás.',
        },
        {
          kind: 'map',
          title: 'Fontosabb folyók és tavak a térképen',
          places: [
            { name: 'Balaton (Siófok)', lat: 46.9, lon: 18.05 },
            { name: 'Velencei-tó', lat: 47.2, lon: 18.6 },
            { name: 'Tisza-tó (Tiszafüred)', lat: 47.62, lon: 20.76 },
            { name: 'Fertő (Fertőrákos)', lat: 47.72, lon: 16.68 },
            { name: 'Hévízi-tó (Hévíz)', lat: 46.79, lon: 17.19 },
            { name: 'Kis-Balaton', lat: 46.65, lon: 17.1 },
            { name: 'Szegedi Fehér-tó', lat: 46.32, lon: 20.08 },
            { name: 'Dunakanyar (Visegrád)', lat: 47.785, lon: 18.97 },
            { name: 'Tisza és Maros találkozása (Szeged)', lat: 46.25, lon: 20.15 },
            { name: 'Duna belépése (Rajka)', lat: 48.0, lon: 17.2 },
            { name: 'Szelidi-tó (Dunapataj)', lat: 46.62, lon: 19.05 },
          ],
        },
        { kind: 'heading', text: 'Felszín alatti vizek' },
        {
          kind: 'compare',
          title: 'A felszín alatti víz hazai típusai',
          columns: ['Hol és hogyan található', 'Hasznosítás, jellemző'],
          rows: [
            {
              label: 'Talajvíz',
              cells: [
                'az első vízzáró réteg felett, a felszín közelében; szintje csapadéktól függ',
                'ásott kutak, öntözés; **szennyeződésre érzékeny**, aszályos években süllyed (Duna–Tisza köze)',
              ],
            },
            {
              label: 'Rétegvíz',
              cells: [
                'vízzáró rétegek között, nyomás alatt (artézi kút)',
                'a hazai **ivóvíz** nagy része innen származik; védettebb a szennyezéstől',
              ],
            },
            {
              label: 'Karsztvíz',
              cells: [
                'mészkő és dolomit repedéseiben, barlangokban (Bakony, Bükk, Aggtelek)',
                'tiszta ivóvíz, de **gyorsan beszivárog** a szennyezés; a bányászati vízszintsüllyesztés veszélyezteti',
              ],
            },
            {
              label: 'Hévíz, termálvíz',
              cells: [
                'mélyebb rétegekből, a nagy földi hőáram miatt melegebb (Alföld, Dunántúl)',
                '**gyógyfürdők** (Hévíz, Hajdúszoboszló, Harkány, Zalakaros, Bük, Gyula), melegvizes mezőgazdaság, geotermikus fűtés (például Szentes, Hódmezővásárhely)',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Környezeti problémák és vízvédelem' },
        {
          kind: 'text',
          text: '**Problémák**: árvíz (a hegyvidéki vízgyűjtőkről lezúduló vizek), **belvíz** (a lapos Alföldön a talajvíz és a csapadék felgyűlik), aszály, eutrofizáció (a tápanyagterheléstől algásodás a Balatonban és a kis tavakban), a mezőgazdaság nitrát- és növényvédőszer-szennyezése, kommunális és ipari szennyvíz, balesetek (2000-ben a tiszai cianidszennyezés; 2010-ben a vörösiszap-katasztrófa).',
        },
        {
          kind: 'text',
          text: '**Vízvédelem**: szennyvízgyűjtés és -tisztítás, a mezőgazdasági terhelés csökkentése, védőterületek az ivóvízbázisok körül, a **Kis-Balaton** vízvédelmi rendszere (a Zala vizét szűri a Balaton előtt), a Tisza-völgy árvízvédelmi fejlesztése (töltések, vésztározók), vízvisszatartás és tározók az aszály ellen, a vizes élőhelyek helyreállítása, valamint a **nemzetközi együttműködés** (például a Duna-védelmi egyezmény).',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Regionális összefüggés**: mivel a folyóink nagy vízgyűjtői külföldön vannak, a szennyezés is onnan érkezik (Szamos, Tisza, Sajó, Ipoly), míg a hazai szennyvíz és a mezőgazdasági terhelés a Balatont és a Dunát terheli. A Duna a Fekete-tengerig összeköti az országokat, így a vízszennyezés megoldása valamennyi alvízi ország közös ügye.',
        },
        { kind: 'heading', text: 'Talaj és természetes növényzet' },
        {
          kind: 'compare',
          title: 'Az éghajlat, a növényzet és a talaj kapcsolata',
          columns: ['Száraz, meleg Alföld', 'Csapadékos, hűvös hegyvidék és Nyugat'],
          rows: [
            {
              label: 'Természetes növényzet',
              cells: [
                'erdős sztyepp (tölgyes foltok közt gyepek); ma nagyrészt szántó, a Hortobágyon és a Kiskunságban füves puszta',
                'lomberdők: cseres-tölgyes, gyertyános-tölgyes, **bükkös** (500–600 m fölött, hűvös, nedves); az Alpokalján fenyők is',
              ],
            },
            {
              label: 'Jellemző talaj',
              cells: [
                '**csernozjom** löszön (vastag humuszréteg, a legtermékenyebb), homoktalajok, szikes talajok, réti talajok',
                '**barna erdőtalajok**; sekély, köves talajok mészkövön (rendzina) és vulkáni kőzeten',
              ],
            },
            {
              label: 'Hasznosítás',
              cells: [
                'búza, kukorica, napraforgó; homokon szőlő, gyümölcs; szikesen legeltetés',
                'erdőgazdálkodás, legelő; dombvidéken szőlő, gyümölcs',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az összefüggés láncszerű: **éghajlat → növényzet → talaj**. A kevés csapadék és meleg nyár füves növényzetnek kedvez, amelynek gyökerei sok szerves anyagot (humuszt) hagynak a talajban, ezért a löszön **csernozjom** képződik. Az erdők alatt a lehulló lomb adja a humuszt, a csapadék kimossa az anyagot: **barna erdőtalaj** alakul ki. A **szikes talaj** a sós talajvíz kiválása miatt keletkezik (Hortobágy, Kiskunság): rossz termőhely, de legelőnek jó. A **homoktalaj** laza, száraz, tápanyagszegény (Duna–Tisza köze, Nyírség), mégis jó szőlő- és gyümölcstermesztési terület (Kecskemét kajszi, Nyírség alma).',
        },
        {
          kind: 'tip',
          text: 'A természetes növénytakaró ma már kevés: a területnek kb. ötödét borítja erdő, és az is nagyrészt telepített. Ha a vizsga „természetes” növényzetet kérdez, a **klímának megfelelő eredeti** vegetációra gondolj.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Éghajlati diagram (klímadiagram) elemzése: középhőmérséklet, hőingás, csapadékmennyiség és évi menet; melyik állomás melyik tájra jellemző (például Sopron / Szeged / Kékestető).',
            'Kontúrtérképen folyók, tavak megnevezése (Duna, Tisza, Dráva, Mura, Rába, Zala, Sió, Körös, Maros, Sajó, Hernád, Bodrog, Zagyva; Balaton, Fertő, Velencei-tó, Tisza-tó, Kis-Balaton, Hévízi-tó, szegedi Fehér-tó, Szelidi-tó).',
            'Számítás: hőmérséklet a magasság függvényében; térkép alapján méretarányos távolság.',
            'Oksági kérdés: „Miért szélsőséges a Tisza vízjárása?”, „Miért nagyobb az aszályveszély a Duna–Tisza közén?”.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Balatont mélynek tartani (átlagosan alig 3 m); a Fertőt hazai tónak tekinteni (nagyobbik fele Ausztriában van); a **talajvizet** és a **rétegvizet** összekeverni (a talajvíz az első vízzáró réteg felett van, a rétegvíz zárt rétegek között, nyomás alatt).',
        },
        {
          kind: 'example',
          title: 'Modellválasz: miért szélsőséges a Tisza vízjárása?',
          problem: 'Magyarázd meg, miért szélsőséges a Tisza vízjárása!',
          solution:
            'Vázlat: **1.** A vízgyűjtő felső része a Kárpátokban van, ahol a hóolvadás és a nagy esők gyors árhullámot okoznak. **2.** Az alföldi szakaszon az esés kicsi, ezért az árhullám lassan vonul le, és sokáig magas a vízállás. **3.** Nyáron, aszályos időben viszont kevés a víz. **4.** A szabályozás, a gátak és a tározók mérsékelik a hatást, de nem szüntetik meg.',
        },
      ],
      topicMatch: ['=duna', '=tisza'],
      quiz: [
        {
          question: 'Milyen éghajlat jellemző Magyarországra?',
          options: ['óceáni', 'mediterrán', 'mérsékelten szárazföldi', 'sarkvidéki'],
          answer: 2,
          explanation:
            'Hazánkban óceáni, szárazföldi és mediterrán hatások keverednek, az éghajlat mérsékelten szárazföldi.',
        },
        {
          question: 'Melyik tájon a legkisebb az évi csapadék?',
          options: ['Alpokalja', 'Mecsek', 'Hortobágy', 'Bakony'],
          answer: 2,
          explanation:
            'Az Alföld keleti és középső része kapja a legkevesebb csapadékot (kb. 500–550 mm), ezért gyakori az aszály. Az Alpokalja a legcsapadékosabb.',
        },
        {
          question: 'Melyik NEM felszín alatti víztípus?',
          options: ['karsztvíz', 'rétegvíz', 'talajvíz', 'morotvató'],
          answer: 3,
          explanation:
            'A morotvató felszíni állóvíz (levágott folyókanyar), a többi felszín alatti víz.',
        },
        {
          question:
            'Mennyivel csökken a hőmérséklet 800 m emelkedésnél, ha 100 m-enként 0,6 °C-kal csökken?',
          options: ['3,6 °C', '4,8 °C', '6,0 °C', '8,0 °C'],
          answer: 1,
          explanation: '$800 / 100 \\cdot 0{,}6 = 4{,}8$ °C.',
        },
        {
          question: 'Melyik talaj képződik a löszön, az erdős sztyepp füves növényzete alatt?',
          options: ['barna erdőtalaj', 'csernozjom', 'szikes talaj', 'rendzina'],
          answer: 1,
          explanation:
            'A füves növényzet sok humuszt halmoz fel, így a löszön a legtermékenyebb talaj, a csernozjom alakul ki.',
        },
        {
          question: 'Mi a Kis-Balaton vízvédelmi rendszerének célja?',
          options: [
            'a Balaton vízszintjének emelése',
            'a Zala szennyezett vizének szűrése a Balaton előtt',
            'a hajózás segítése',
            'termálvíz kitermelése',
          ],
          answer: 1,
          explanation:
            'A Kis-Balaton mocsárrendszere megköti a Zala hordalékát és tápanyagát, így kevesebb jut a Balatonba.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyarország éghajlata', url: wiki('Magyarország éghajlata') },
        { label: 'Wikipédia: Magyarország folyóinak listája', url: wiki('Magyarország folyói') },
        { label: 'Wikipédia: Magyarország talajai', url: wiki('Magyarország talajtípusai') },
      ],
    },
    {
      id: 'magyarorszag-fo-tajegysegei',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Hazánk fő tájegységei és résztájaik',
      level: 'kozep',
      requirement: {
        kozep:
          '7.5: hazánk fő tájegységei és résztájaik térképen és kontúrtérképen; a fő tájegységek felszíne, éghajlata, vízrajza, fő talajtípusai, ásványkincsei és a természeti adottságok hatása a gazdasági életre; a kőzetanyag és az ásványkincsek kötése földtörténeti időkhöz; a tájformálásban szerepet játszó külső erők; jellegzetes településtípusok; a fontosabb települések, természeti erőforrások és gazdasági tevékenységek; természeti és kulturális értékek, idegenforgalom; környezeti problémák és mérséklésük lehetőségei.',
        emelt:
          'A fő tájegységek, résztájak kőzetanyagának és ásványkincseinek kötése földtörténeti korokhoz; a fő tájegységek szerepe a gazdasági életben statisztikai adatok alapján; a résztájak természeti és társadalmi-gazdasági adottságainak összehasonlítása.',
      },
      minutes: 24,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A hat **fő tájegység**: Alföld, Kisalföld, Alpokalja, Dunántúli-dombvidék, Dunántúli-középhegység, Északi-középhegység.',
            '**Alföld**: a legnagyobb, folyóvízi és szél által épített síkság (Duna–Tisza köze, Tiszántúl, Nyírség, Hajdúság, Hortobágy); mezőgazdaság, szénhidrogének (Algyő), termálvíz.',
            '**Kisalföld**: a Duna hordalékkúpja (Szigetköz, Győri-medence, Marcal-medence); jó talaj, fejlett ipar (Győr).',
            '**Alpokalja**: a legnyugatibb, legcsapadékosabb táj (Soproni- és Kőszegi-hegység, Írott-kő, Őrség); erdők, turizmus.',
            '**Dunántúli-dombvidék**: dombok és két hegység (Mecsek, Villányi-hegység), löszös talajok, borvidékek, a Mecsekben egykor feketekőszén.',
            '**Dunántúli-középhegység**: mészkő és dolomit (Bakony, Vértes, Gerecse, Pilis, Budai-hegység) és a Balaton-felvidék bazalt tanúhegyei; bauxit, karsztvíz, cementipar.',
            '**Északi-középhegység**: vulkáni hegységek (Börzsöny, Cserhát, Mátra, Tokaji-hegység) és a mészköves Bükk; andezit, lignit, borvidékek (Eger, Tokaj).',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Az érettségi kontúrtérképén a hat fő tájegységet és a névlistában szereplő résztájakat, hegységeket kell megmutatnod. Az alábbi csoportosítás a tankönyvi felosztást követi; néhány kis táj besorolása forrásonként eltér (például a **Mezőföld**, a **Visegrádi-hegység** és a **Dráva menti síkság**), ilyenkor a saját atlaszod jelöléséhez igazodj.',
        },
        { kind: 'heading', text: 'Dunántúl: Alpokalja, Kisalföld, dombvidék' },
        {
          kind: 'map',
          title: 'Nyugati és déli Dunántúl: fő tájak és jellegzetes pontjaik',
          places: [
            { name: 'Írott-kő', lat: 47.3517, lon: 16.4383, note: 'Alpokalja, Kőszegi-hegység' },
            { name: 'Kőszeg', lat: 47.3892, lon: 16.5406, note: 'Alpokalja' },
            { name: 'Sopron', lat: 47.6849, lon: 16.5905, note: 'Soproni-hegység' },
            { name: 'Őriszentpéter', lat: 46.8, lon: 16.4, note: 'Őrség (Alpokalja)' },
            { name: 'Szombathely', lat: 47.2354, lon: 16.6217, note: 'Alpokalja' },
            { name: 'Szigetköz (Dunakiliti)', lat: 47.8836, lon: 17.2825, note: 'Kisalföld' },
            { name: 'Győr', lat: 47.6875, lon: 17.6504, note: 'Kisalföld, Győri-medence' },
            { name: 'Pápa', lat: 47.3292, lon: 17.4672, note: 'Marcal-medence (Kisalföld)' },
            { name: 'Zalaegerszeg', lat: 46.8417, lon: 16.8416, note: 'Zalai-dombság' },
            { name: 'Kaposvár', lat: 46.3594, lon: 17.7968, note: 'Somogyi-dombság' },
            { name: 'Szekszárd', lat: 46.3474, lon: 18.7062, note: 'Szekszárdi-dombság' },
            { name: 'Pécs', lat: 46.0727, lon: 18.2323, note: 'Mecsek' },
            { name: 'Villány', lat: 45.8693, lon: 18.4531, note: 'Villányi-hegység' },
            { name: 'Mohács', lat: 45.9928, lon: 18.6783, note: 'Mohácsi-sziget, Duna' },
          ],
        },
        {
          kind: 'compare',
          title: 'Alpokalja és Kisalföld',
          columns: ['Alpokalja', 'Kisalföld'],
          rows: [
            {
              label: 'Felszín',
              cells: [
                'az Alpok keleti előhegyei: Soproni-hegység, Kőszegi-hegység (Írott-kő 882 m), dombos Őrség',
                'a Duna hordalékkúpja, síkság: Szigetköz, Győri-medence, Marcal-medence; a Duna ártere és szigetei',
              ],
            },
            {
              label: 'Kőzet, kor',
              cells: [
                'kristályos kőzetek (gneisz, csillámpala), ősi eredetűek, fiatal üledékek a lábánál',
                'a harmadidőszaki süllyedék folyóvízi kavics-, homok- és iszaplerakódásai (negyedidőszak)',
              ],
            },
            {
              label: 'Éghajlat és vizek',
              cells: [
                'a legcsapadékosabb, hűvösebb tájunk; sok patak (például a Rába és a Répce)',
                'mérsékelten csapadékos, szeles (uralkodó az északnyugati szél); a Duna, a Rába, a Fertő és a Hanság nedves területei',
              ],
            },
            {
              label: 'Talaj és növényzet',
              cells: [
                'barna erdőtalaj, savanyúbb erdők, fenyők, bükkösök',
                'termékeny öntéstalajok és csernozjom jellegű talajok, szántóföld',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'erdőgazdálkodás, kistermelői gazdaságok, idegenforgalom (Sopron, Kőszeg, Őrség)',
                'szántóföldi növénytermesztés, fejlett ipar (Győr: járműipar, Szentgotthárd, Mosonmagyaróvár)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **Dunántúli-dombvidék** a Balaton és a Dráva között terül el: Zalai-dombság (Göcsej, Hetés), Somogyi-dombság (Külső- és Belső-Somogy), Szekszárdi- és Tolnai-dombság, Baranyai-dombság, a nagyobb tömeg **Mecsek** és a **Villányi-hegység**; ide soroljuk a Mezőföldet és a Dráva menti síkságot is. Felszínét sok völgy szabdalja, a löszön **erózió** lép fel. A Mecsek óidei és középidei kőzeteiben feketekőszén és uránérc volt (a bányászat megszűnt), a Villányi-hegységben mészkő és bauxit. A talajok barna erdőtalajok és lösz-alapú talajok, jó szőlő-, gyümölcs- és szántóföldi területek. Településeit **aprófalvak** jellemzik (különösen az Ormánságban, Zselicben).',
        },
        { kind: 'heading', text: 'Dunántúli-középhegység' },
        {
          kind: 'map',
          title: 'Dunántúli-középhegység és a Duna-kanyar környéke',
          places: [
            { name: 'Keszthely', lat: 46.7678, lon: 17.2425, note: 'Keszthelyi-hegység' },
            { name: 'Badacsony', lat: 46.8, lon: 17.5, note: 'Balaton-felvidék, bazalt tanúhegy' },
            { name: 'Tihany', lat: 46.9136, lon: 17.8908, note: 'Tihanyi-félsziget' },
            { name: 'Zirc', lat: 47.2637, lon: 17.8737, note: 'Bakony' },
            { name: 'Veszprém', lat: 47.0933, lon: 17.9115, note: 'Bakony, Balaton-felvidék' },
            { name: 'Várpalota', lat: 47.2, lon: 18.1394, note: 'Bakony és Mezőföld találkozása' },
            { name: 'Mór', lat: 47.3748, lon: 18.2, note: 'Móri-árok (Vértes és Bakony között)' },
            { name: 'Tatabánya', lat: 47.5849, lon: 18.3949, note: 'Gerecse és Vértes között' },
            { name: 'Sukoró', lat: 47.2833, lon: 18.5667, note: 'Velencei-hegység' },
            { name: 'Esztergom', lat: 47.7928, lon: 18.7406, note: 'Duna, Dunazug-hegység szélén' },
            { name: 'Dobogókő', lat: 47.7167, lon: 18.8833, note: 'Pilis' },
            { name: 'János-hegy', lat: 47.5, lon: 18.9667, note: 'Budai-hegység' },
          ],
        },
        {
          kind: 'text',
          text: 'A **Dunántúli-középhegység** a Balaton és a Duna között, DNy–ÉK irányban húzódik. Részei: **Keszthelyi-hegység**, **Balaton-felvidék** (Badacsony, Tihanyi-félsziget, Tapolcai-medence), **Bakony**, **Vértes**, **Velencei-hegység**, **Gerecse**, **Pilis** és a **Budai-hegység** (a Gerecse, a Pilis és a Budai-hegység együtt a **Dunazug-hegység**). A **Móri-árok** a Vértest és a Bakonyt választja el. Fő kőzetei középidei **mészkő és dolomit** (karsztos hegyek: víznyelők, barlangok, karsztvíz), mellettük harmadidőszaki üledékek; a Balaton-felvidéken **bazalt** tanúhegyeket találsz (Badacsony), a Velencei-hegységben **gránit** van (ősi, óidei). A hegység **tanúhegyeit** a bazalt sapka védte meg a lepusztulástól.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Ásványkincsek (Dunántúli-középhegység)',
              text: 'kréta végi **bauxit** (Bakony; alumíniumipar: Ajka, Várpalota), **barnakőszén** (Tatabánya, Dorog, korábban Oroszlány, Ajka), mészkő, dolomit (cement, építőkő, zúzottkő), hévízforrások (Budapest, Hévíz).',
            },
            {
              term: 'Gazdasági szerep',
              text: '**Cementipar** (Lábatlan), bányászat (a szén- és bauxitbányászat nagyrészt megszűnt), **erdőgazdálkodás**, szőlő- és bortermelés (Badacsony, Balatonfüred–Csopak, Mór), **idegenforgalom** (Balaton, Tihany, Keszthely, Veszprém, Zirc).',
            },
            {
              term: 'Természeti és kulturális értékek',
              text: 'Balaton-felvidéki Nemzeti Park, Tihanyi Apátság, Festetics-kastély (Keszthely), Veszprém (Várnegyed), Zirci Ciszterci Apátság.',
            },
          ],
        },
        { kind: 'heading', text: 'Északi-középhegység' },
        {
          kind: 'map',
          title: 'Északi-középhegység: hegységek és fontosabb települései',
          places: [
            { name: 'Nagybörzsöny', lat: 47.9167, lon: 18.9667, note: 'Börzsöny' },
            { name: 'Visegrád', lat: 47.7855, lon: 18.9709, note: 'Visegrádi-hegység, Dunakanyar' },
            { name: 'Vác', lat: 47.7775, lon: 19.1359, note: 'Duna, Dunakanyar' },
            { name: 'Balassagyarmat', lat: 48.0733, lon: 19.2917, note: 'Nógrádi-medence' },
            {
              name: 'Salgótarján',
              lat: 48.1,
              lon: 19.8,
              note: 'Cserhát, Nógrád (egykor szén, üveg)',
            },
            { name: 'Kékes', lat: 47.8667, lon: 20.0, note: 'Mátra, 1014 m' },
            { name: 'Gyöngyös', lat: 47.78, lon: 19.93, note: 'Mátra' },
            { name: 'Visonta', lat: 47.78, lon: 20.07, note: 'Mátra alja, lignit' },
            { name: 'Eger', lat: 47.9025, lon: 20.3772, note: 'Bükk és Mátra között, borvidék' },
            { name: 'Bükk-fennsík', lat: 48.07, lon: 20.5, note: 'Bükk' },
            { name: 'Miskolc', lat: 48.1034, lon: 20.7784, note: 'Borsodi-medence' },
            { name: 'Ózd', lat: 48.2167, lon: 20.2833, note: 'Cserehát, Borsodi-medence' },
            {
              name: 'Aggtelek',
              lat: 48.4733,
              lon: 20.5,
              note: 'Aggteleki-karszt, Baradla-barlang',
            },
            { name: 'Tokaj', lat: 48.1167, lon: 21.4167, note: 'Tokaji (Zempléni)-hegység' },
            { name: 'Sárospatak', lat: 48.3189, lon: 21.5667, note: 'Bodrog' },
          ],
        },
        {
          kind: 'compare',
          title: 'Dunántúli-középhegység és Északi-középhegység',
          columns: ['Dunántúli-középhegység', 'Északi-középhegység'],
          rows: [
            {
              label: 'Kőzet',
              cells: [
                'túlnyomóan középidei tengeri mészkő és dolomit; kisebb bazalt- és gránitterület',
                'vulkáni kőzetek (andezit, riolit, tufa; harmadidőszak) és a Bükk, Aggteleki-karszt mészköve',
              ],
            },
            {
              label: 'Ásványkincs',
              cells: [
                'bauxit, barnakőszén, építőkő',
                'lignit (Mátra alja), barnakőszén (Borsodi-medence, Nógrád), építőkő (andezit), perlit, kaolin (Tokaji-hegység)',
              ],
            },
            {
              label: 'Jellegzetes tájforma',
              cells: [
                'karsztfennsíkok, tanúhegyek (Badacsony), törmelékes lejtők',
                'vulkáni kúpok, kalderaszerű völgyek, karsztfennsík (Bükk), cseppkőbarlangok (Baradla)',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'cement, alumínium, turizmus (Balaton), borászat',
                'erőművek (Visonta), kohászat és vegyipar volt (Miskolc, Ózd, Tiszaújváros), borászat (Eger, Tokaj), turizmus (Mátra, Bükk)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **Északi-középhegység** részei: **Börzsöny** (a Duna-kanyartól északra), **Visegrádi-hegység**, **Cserhát**, **Mátra** (Kékes, 1014 m, hazánk legmagasabb pontja), **Bükk** (Bükk-fennsík), **Aggteleki-karszt** és a Cserehát, a **Tokaji (Zempléni)-hegység**; közöttük medencék: **Nógrádi-medence**, **Borsodi-medence**. A hegységek zöme a harmadidőszaki vulkáni működés (a Kárpátok mentén húzódó vulkáni ív) terméke, ezért itt andezitbányák, ásványvizek és gyógyforrások vannak. A **Bükk** és az **Aggteleki-karszt** a középidei mészkő karsztja: víznyelők, barlangok (Baradla), forrásbarlangok. A hegységek lábán, a **lösszel** borított dombokon híres borvidékek vannak (Eger, Mátra, Tokaj-Hegyalja).',
        },
        { kind: 'heading', text: 'Alföld' },
        {
          kind: 'map',
          title: 'Alföld: résztájak és fontosabb települései',
          places: [
            { name: 'Baja', lat: 46.1803, lon: 18.9547, note: 'Duna menti síkság' },
            { name: 'Kalocsa', lat: 46.5333, lon: 18.9833, note: 'Duna menti síkság, paprika' },
            { name: 'Kecskemét', lat: 46.9062, lon: 19.6913, note: 'Duna–Tisza köze, Kiskunság' },
            { name: 'Jászberény', lat: 47.5, lon: 19.9167, note: 'Jászság' },
            { name: 'Szolnok', lat: 47.1747, lon: 20.1953, note: 'Tisza, Nagykunság határa' },
            { name: 'Karcag', lat: 47.3167, lon: 20.9333, note: 'Nagykunság' },
            { name: 'Hortobágy', lat: 47.5833, lon: 21.15, note: 'Hortobágyi puszta' },
            { name: 'Debrecen', lat: 47.5316, lon: 21.6273, note: 'Hajdúság' },
            { name: 'Hajdúszoboszló', lat: 47.4492, lon: 21.3947, note: 'Hajdúság, gyógyfürdő' },
            { name: 'Nyíregyháza', lat: 47.9554, lon: 21.7167, note: 'Nyírség' },
            { name: 'Záhony', lat: 48.4083, lon: 22.1833, note: 'Tiszahát, határátkelő' },
            { name: 'Békéscsaba', lat: 46.6735, lon: 21.0877, note: 'Körös–Maros köze' },
            { name: 'Szeged', lat: 46.253, lon: 20.1414, note: 'Tisza–Maros' },
            { name: 'Algyő', lat: 46.3333, lon: 20.2, note: 'szénhidrogén-mező' },
            { name: 'Makó', lat: 46.2219, lon: 20.4806, note: 'Maros-menti, hagyma' },
          ],
        },
        {
          kind: 'text',
          text: 'Az **Alföld** hazánk legnagyobb tája (az ország területének kb. fele tartozik ide). A harmadidőszakban süllyedt, a **Pannon-tenger** üledékei, majd a negyedidőszaki **folyóvízi és szél által lerakott** (homok, lösz) anyag töltötte fel. Résztájai: **Duna menti síkság** (Szentendrei-sziget, Csepel-sziget, Pesti-síkság, Mohácsi-sziget), **Duna–Tisza köze** (Kiskunság: homokbuckák, szikes tavak), **Tisza-vidék és Tiszántúl** (**Jászság**, **Nagykunság**, **Hajdúság**, **Nyírség**: futóhomok, **Hortobágy**: szikes puszta, **Körös–Maros köze**, Bodrogköz). Az éghajlat itt a legszárazabb, legnagyobb hőingású; a vizek a Duna, Tisza és mellékfolyói, valamint szikes tavak. **Ásványkincs**: kőolaj és földgáz (Algyő, a Pannon-tenger üledékeiben), **termálvíz** (Hajdúszoboszló, Szeged, Gyula, Makó). **Talajok**: csernozjom (Hajdúság, Mezőföld felé), homok (Kiskunság, Nyírség), szikes (Hortobágy), réti (folyók mentén).',
        },
        {
          kind: 'text',
          text: 'Jellegzetes **településtípusok**: az Alföldön a nagy kiterjedésű **mezővárosok** (Kecskemét, Debrecen, Hódmezővásárhely), a **tanyák** (szétszórt, magányos gazdaságok a mezővárosok határában, a 18–19. századi mezőgazdasági terjeszkedés nyomán), a **hajdúvárosok** (Hajdúszoboszló, Hajdúböszörmény). A Dunántúlon a **dombvidéki aprófalvak** (Zselic, Ormánság), az Őrségben a **szórványtelepülések** („szeres” településszerkezet), a Kisalföldön nagyobb falvak, mezővárosok jellemzők.',
        },
        {
          kind: 'compare',
          title: 'Az Alföld résztájai',
          columns: [
            'Duna–Tisza köze (Kiskunság)',
            'Tisza-vidék és Tiszántúl (Hortobágy, Hajdúság, Nyírség)',
          ],
          rows: [
            {
              label: 'Felszín és talaj',
              cells: [
                'homokbuckák (futóhomok), löszhát, szikes tavak; homoktalaj, szikes',
                'Hortobágy: szikes puszta; Hajdúság: lösz, csernozjom; Nyírség: homokhát',
              ],
            },
            {
              label: 'Vizek',
              cells: [
                'szikes tavak (Fehér-tó, Szelidi-tó), süllyedő talajvíz; csatornák',
                'Tisza és mellékfolyói, Keleti-főcsatorna, Tisza-tó',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'szőlő, gyümölcs (Kecskemét: kajszi), paprika (Kalocsa), kertészet',
                'búza, kukorica, napraforgó; legeltető állattartás (szürkemarha, racka, ló), alma (Nyírség)',
              ],
            },
            {
              label: 'Értékek',
              cells: [
                'Kiskunsági Nemzeti Park, Kalocsa, Kecskemét',
                'Hortobágyi Nemzeti Park, világörökség (Hortobágy), Hajdúszoboszló, Debrecen',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Tájformáló külső erők' },
        {
          kind: 'terms',
          items: [
            {
              term: 'folyóvíz',
              text: 'Hordalékot szállít és **lerak** (hordalékkúp, ártér, kanyarulatok, morotvák; a Kisalföld és az Alföld nagy része), a hegyekben **völgyeket vág**. A szabályozás (19. század) megváltoztatta a folyók medrét és az árteret.',
            },
            {
              term: 'szél',
              text: '**Homokbuckákat** épít (Duna–Tisza köze, Nyírség), **löszt** rak le (Mezőföld, Tolna–Baranya, Tokaj-Hegyalja), és a talajt kifújhatja (defláció).',
            },
            {
              term: 'karsztosodás',
              text: 'A víz oldja a mészkövet és dolomitot: **víznyelők, dolinák, barlangok** (Baradla, a Bakony és a Bükk karsztjai).',
            },
            {
              term: 'lejtőfolyamatok, erózió',
              text: 'A löszös dombokon **vízmosások, szakadékok** és **csuszamlások** (például a Duna löszmagasparti szakaszain), a hegyeken kőzettörmelék, sziklák leomlása.',
            },
            {
              term: 'lepusztulás és tanúhegy',
              text: 'A kemény kőzetek (bazalt) védték az alattuk levő rétegeket, így keletkeztek a **tanúhegyek** (Badacsony, Csobánc, Szent György-hegy).',
            },
          ],
        },
        { kind: 'heading', text: 'Fontosabb települések és szerepük' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Dunántúl',
              text: '**Győr** (járműipar, Audi), **Sopron** (határváros, Fertő, bor), **Kőszeg** (vár), **Szentgotthárd** (autóipar, motorgyártás), **Szombathely** (Savaria, regionális központ), **Zalaegerszeg** (olaj- és gázipar, ma járműipari tesztpálya), **Nagykanizsa** (olaj, gáz), **Hévíz**, **Zalakaros**, **Bük** (gyógyfürdők), **Keszthely**, **Siófok**, **Balatonfüred**, **Tihany** (Balaton-turizmus), **Veszprém** (egyetem, 2023: Európa kulturális fővárosa), **Pápa** (kastély, könnyűipar), **Székesfehérvár** (elektronika, járműipar), **Várpalota** (volt szénbányászat, vegyipar), **Tata**, **Tatabánya** (volt szénbányászati iparváros), **Komárom** (Duna-híd, hajógyártási hagyományok), **Dunaújváros** (vas- és acélgyártás), **Paks** (atomerőmű), **Százhalombatta** (kőolaj-finomító, erőmű), **Szekszárd** (bor), **Baja** (Duna-híd, halászat), **Mohács** (busójárás), **Pécs** (egyetem, kulturális központ, volt szénbányászat), **Harkány** (gyógyfürdő), **Kaposvár** (élelmiszeripar), **Veresegyház** (budapesti agglomeráció).',
            },
            {
              term: 'Északi-középhegység és környéke',
              text: '**Esztergom**, **Visegrád**, **Szentendre** (kultúra, turizmus a Dunakanyarban), **Vác** (cement, Duna-part), **Gödöllő** (kastély, egyetem), **Hatvan** (vasúti csomópont, cukorgyár), **Gyöngyös** (Mátra kapuja, bor), **Eger** (vár, bor, turizmus), **Miskolc** (egyetem, volt kohászat), **Ózd** (volt kohászat), **Salgótarján** (volt szén-, üveg- és acélipar), **Balassagyarmat** (megyei központ), **Berente** (energetikai és vegyipari telephely), **Tiszaújváros** (vegyipar, Tisza), **Visonta** (lignit, hőerőmű), **Tokaj** (bor), **Sárospatak** (kollégium, vár).',
            },
            {
              term: 'Alföld',
              text: '**Kecskemét** (Mercedes, gyümölcs), **Kalocsa** (paprika, hímzés), **Szeged** (egyetem, paprika, Tisza), **Algyő** (szénhidrogén), **Makó** (hagyma, termálfürdő), **Orosháza** (üveg- és gépipar), **Békéscsaba** (élelmiszeripar), **Gyula** (vár, gyógyfürdő), **Szolnok** (közlekedési csomópont), **Jászberény** (hűtőgép-, gépipar), **Jászfényszaru** (Samsung elektronikai gyár), **Debrecen** (egyetem, ipar), **Hajdúszoboszló** (gyógyfürdő), **Nyíregyháza** (almatermesztés, élelmiszeripar), **Záhony** (vasúti átrakóhely az ukrán határon).',
            },
          ],
        },
        { kind: 'heading', text: 'Környezeti problémák tájanként' },
        {
          kind: 'compare',
          title: 'Mi a gond és mi segíthet?',
          columns: ['Probléma', 'Mérséklés'],
          rows: [
            {
              label: 'Alföld',
              cells: [
                'aszály, belvíz, szikesedés, szél- és vízerózió, talajvízszint-süllyedés a Duna–Tisza közén, nitrát a talajvízben',
                'vízvisszatartás, tározók, szélfogó erdősávok, szervesanyag-visszapótlás, korszerű öntözés',
              ],
            },
            {
              label: 'Kisalföld',
              cells: [
                'a Szigetköz vízhiánya a Duna 1992-es elterelése után (bősi erőmű), intenzív mezőgazdaság terhelése',
                'vízpótlás a mellékágakba, fenékküszöb, szennyezés-csökkentés',
              ],
            },
            {
              label: 'Dunántúli-középhegység',
              cells: [
                'bányászat tájsebei, a karsztvíz szennyezése és süllyedése, turisztikai terhelés (Balaton-part)',
                'rekultiváció, karsztvízvédelem, szennyvízcsatornázás',
              ],
            },
            {
              label: 'Északi-középhegység',
              cells: [
                'külszíni lignitbányászat (Visonta, Bükkábrány), volt ipari térségek szennyezése (Borsod), levegőszennyezés a völgyekben',
                'rekultiváció, korszerű szűrők, iparszerkezet-átalakítás',
              ],
            },
            {
              label: 'Dunántúli-dombvidék',
              cells: [
                'erózió a löszös dombokon, aprófalvak elnéptelenedése, szőlőhegyek lejtői',
                'teraszos művelés, erdősítés, falusi turizmus, helyi termékek',
              ],
            },
            {
              label: 'Alpokalja',
              cells: [
                'tranzitforgalom a határon, erdőkárok, a Fertő térségének terhelése',
                'forgalomcsillapítás, természetvédelem (Őrségi NP, Fertő–Hanság NP)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A Kisalföld szélén, Győr közelében áll a **Pannonhalmi Főapátság** (világörökség), a Fertő–Hanság térsége pedig nemzeti park és világörökségi kulturális táj.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Kőzet, földtörténeti kor és ásványkincs tájanként',
          columns: ['Kor és kőzet', 'Ásványkincs, hasznosítás'],
          rows: [
            {
              label: 'Alpokalja, Velencei-hegység, Mórágyi-rög',
              cells: [
                'előidő és óidő: kristályos kőzetek (gneisz, csillámpala, gránit)',
                'építő- és zúzottkő; kicsi gazdasági szerep',
              ],
            },
            {
              label: 'Mecsek',
              cells: [
                'óidő végi (perm) homokkő, jura kori kőszenes üledék',
                'uránérc (bányászata megszűnt), feketekőszén (megszűnt)',
              ],
            },
            {
              label: 'Dunántúli-középhegység, Bükk, Aggteleki-karszt, Villányi-hegység',
              cells: [
                'középidő: tengeri mészkő, dolomit',
                'cement- és építőanyag; kréta végi bauxit (Bakony)',
              ],
            },
            {
              label: 'Északi-középhegység, Balaton-felvidék',
              cells: [
                'harmadidőszak: vulkáni kőzetek (andezit, riolit, bazalt)',
                'zúzottkő, építőkő; Mátra alján miocén-pliocén lignit; Borsodi-medence barnakőszene',
              ],
            },
            {
              label: 'Alföld, Kisalföld',
              cells: [
                'harmadidőszaki Pannon-tengeri üledékek, negyedidőszaki hordalék, lösz, homok',
                'kőolaj és földgáz (Algyő), termálvíz, kavics, homok, agyag',
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
            'Kontúrtérképen a hat fő tájegység, a hegységek, a résztájak, a folyók, a tavak és a névlista településeinek bejelölése vagy megnevezése (az írásbeli 20%-a topográfia).',
            'Ábra- és képfelismerés: tanúhegy (Badacsony), homokbuckák, szikes puszta, karsztforma, löszfal; melyik tájra jellemző?',
            'Összehasonlítás: két tájegység felszíne, kőzete, éghajlata, talaja és gazdasága táblázatban.',
            'Szóbeli: „Mutasd be az Alföld vagy a Dunántúli-középhegység természeti adottságait és gazdaságát”, atlaszhasználattal.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Bakonyt az Északi-középhegységbe tenni (a Dunántúli-középhegység tagja), a Bükköt vulkáni hegységnek hinni (mészkő), a Mecseket a Dunántúli-középhegységhez sorolni (a Dunántúli-dombvidék hegysége), vagy a Hortobágyot és a Nyírséget összekeverni (szikes puszta, illetve homokhát).',
        },
        {
          kind: 'tip',
          text: 'Tanulj „térképi sorban”: északról délre, nyugatról keletre haladva mondd el a tájakat, és minden tájhoz kapcsolj **egy kőzetet, egy ásványkincset, egy várost és egy értéket**. Ez a szóbeli kifejtés vázlata is.',
        },
        {
          kind: 'example',
          title: 'Modellválasz: az Alföld természeti adottságai és hatásuk a gazdaságra',
          problem:
            'Jellemezd az Alföldet a természeti adottságai és a gazdaság kapcsolata alapján!',
          solution:
            'Vázlat: **1. Felszín, kőzet**: nagy kiterjedésű síkság, a Pannon-tenger üledékét negyedidőszaki hordalék, lösz és homok fedi. **2. Éghajlat**: az országban a legszárazabb, meleg nyarú; aszályveszély. **3. Vizek**: Duna, Tisza és mellékfolyói, szikes tavak, termálvíz. **4. Talaj**: csernozjom, réti, homok, szikes. **5. Gazdaság**: szántóföldi növénytermesztés (búza, kukorica, napraforgó), kertészet és gyümölcs a homokon, legeltetés a szikesen, élelmiszeripar, szénhidrogén-kitermelés (Algyő), gyógyturizmus (Hajdúszoboszló). **6. Értékek, problémák**: nemzeti parkok (Hortobágy, Kiskunság), aszály, belvíz, szikesedés.',
        },
      ],
      topicMatch: ['=magyarország', 'kisalföld', 'balaton-felvidék'],
      quiz: [
        {
          question: 'Melyik a hat fő tájegység egyike?',
          options: ['Mezőföld', 'Alpokalja', 'Nyírség', 'Hortobágy'],
          answer: 1,
          explanation:
            'A hat fő tájegység: Alföld, Kisalföld, Alpokalja, Dunántúli-dombvidék, Dunántúli-középhegység, Északi-középhegység. A többi résztáj.',
        },
        {
          question: 'Melyik hegység NEM az Északi-középhegység része?',
          options: ['Mátra', 'Bükk', 'Bakony', 'Börzsöny'],
          answer: 2,
          explanation: 'A Bakony a Dunántúli-középhegység része.',
        },
        {
          question: 'Melyik fő tájegység a legcsapadékosabb?',
          options: ['Alföld', 'Kisalföld', 'Északi-középhegység', 'Alpokalja'],
          answer: 3,
          explanation: 'Az Alpokalja az óceáni hatásnak leginkább kitett, legnyugatibb tájunk.',
        },
        {
          question: 'Hol találhatók hazánk szénhidrogén-mezői (kőolaj, földgáz)?',
          options: [
            'a Bükkben',
            'az Alföld mélyén (például Algyő)',
            'a Mecsekben',
            'a Velencei-hegységben',
          ],
          answer: 1,
          explanation:
            'A kőolaj és a földgáz a Pannon-tenger üledékeiben képződött, az Alföld süllyedékeiben (például Algyő) és a Zala-vidéken található.',
        },
        {
          question: 'Melyik tájforma kapcsolódik a karsztosodáshoz?',
          options: ['homokbucka', 'löszfal', 'víznyelő és barlang', 'hordalékkúp'],
          answer: 2,
          explanation:
            'A víz oldja a mészkövet és a dolomitot, így víznyelők és barlangok keletkeznek (például Aggteleki-karszt, Bükk, Bakony).',
        },
        {
          question: 'Melyik kőzet a Balaton-felvidék tanúhegyeinek védőréteg-kőzete?',
          options: ['bazalt', 'lösz', 'gránit', 'dolomit'],
          answer: 0,
          explanation:
            'A bazalt kemény kőzet, védte a lepusztulástól az alatta levő rétegeket, így maradtak meg a tanúhegyek (például Badacsony).',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Magyarország földrajzi nagytájai',
          url: wiki('Magyarország földrajzi nagytájai'),
        },
        { label: 'Wikipédia: Alföld', url: wiki('Alföld') },
        { label: 'Wikipédia: Dunántúli-középhegység', url: wiki('Dunántúli-középhegység') },
      ],
    },
    {
      id: 'magyarorszag-nepesseg-telepulesek',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Népesség és településhálózat',
      level: 'kozep',
      requirement: {
        kozep:
          '7.3: hazánk 20. századi és jelenkori népesedési folyamatai és társadalmi-gazdasági következményeik; a korfa értelmezése; a népességszám és a természetes szaporodás alakulásának leolvasása diagramokról, adatsorokról; magas és alacsony népsűrűségű területek megnevezése és indoklása; a foglalkoztatási szerkezet és átalakulása, az átalakulás okai; hazánk legfontosabb településföldrajzi jellemzői térképek, képek, adatsorok, ábrák alapján.',
        emelt:
          'A népességmozgások összefüggése a gazdasági-politikai tényezőkkel; a településfajták és a településhálózat átalakulása; a településföldrajzi jellemzők területi különbségei, a településtípusok változó súlya; a falusias térségek válsághelyzetének okai és a felzárkózás lehetőségei; a lakókörnyezetet és az életmódot alakító tényezők (nagyvárosi, városi, falusi települések; természeti és épített környezet; gazdasági, szociális eltérések).',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A népesség a 2022-es népszámlálás szerint kb. **9,6 millió**. A népességszám **1981 óta csökken** (a természetes fogyás miatt, a vándorlás is hat rá), a társadalom **öregszik**.',
            'Az átlagos **népsűrűség** kb. **103 fő/km²** (9,6 millió : 93 ezer km²). Legsűrűbben lakott Budapest és az agglomeráció, a nagyvárosok térsége; ritkábban lakott az aprófalvas Ormánság, a Zselic, az Őrség, a Hegyhát, a Cserehát, a Hortobágy.',
            'A **foglalkoztatási szerkezet**: a mezőgazdaság aránya kicsi (kb. 4–5%), az iparé és építőiparé kb. 30%, a **szolgáltatásoké kb. 65%** – a gazdaság „szolgáltatóvá” alakult.',
            'A **korfa** hazánkban urna alakú: kicsi a gyermekkorúak, nagy az idősek aránya. A kiugrások (Ratkó-korszak, a háborúk és a gazdasági válságok „bevágásai”) a történelmi eseményeket mutatják.',
            'Települések: **Budapest** a legnagyobb; a városok kb. 350-en vannak, a falvak többsége kicsi. Jellegzetes típusok: alföldi mezővárosok és **tanyák**, dunántúli **aprófalvak**, Őrség **szeres** települései, **agglomeráció**.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Népesedési folyamatok a 20. században és ma' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1920 után',
              text: 'A trianoni békeszerződés után az ország népessége kb. 8 millió. A határon túlról menekültek és áttelepültek érkeztek.',
            },
            {
              date: '1941–1949',
              text: 'A második világháború emberveszteségei (katonák, civilek, a deportált zsidóság), a németek kitelepítése és a magyar–csehszlovák lakosságcsere.',
            },
            {
              date: '1950-es évek',
              text: '**Ratkó-korszak**: az abortusz tilalma miatt nagy születésszám; a nagy létszámú nemzedék ma idős. 1956-ban kb. 200 ezren hagyták el az országot.',
            },
            {
              date: '1960–1970-es évek',
              text: 'A születésszám visszaesése, majd a családtámogatások (például GYES, 1967) és az abortusz szigorítása miatt újabb hullám (a „Ratkó-unokák” az 1970-es évek közepén). Az urbanizáció és a mezőgazdaság gépesítése: a falvakból sokan városba költöztek.',
            },
            {
              date: '1981 óta',
              text: 'A népesség **csökken**: több a halálozás, mint a születés (természetes fogyás). Az 1990-es évek gazdasági átalakulása tovább mérsékelte a gyermekvállalást.',
            },
            {
              date: '2004 és 2011 után',
              text: 'Az EU-csatlakozás és a nyugati munkaerőpiacok megnyitása után nőtt a külföldön munkát vállalók száma. A 2010-es évek elején a születésszám mélypontra süllyedt.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A népesség változását két tényező adja: a **természetes szaporodás vagy fogyás** (születések és halálozások különbsége) és a **vándorlási különbözet** (bevándorlók és kivándorlók különbsége). Hazánkban a természetes fogyás a fő ok: évente kb. 40–50 ezer fővel több ember hal meg, mint ahány születik (2023-ban kb. 43 ezer, 2024-ben kb. 50 ezer a KSH szerint). Az egy nőre jutó gyermekek száma a népességmegtartáshoz szükséges 2,1 alatt van.',
        },
        {
          kind: 'formula',
          tex: '\\text{természetes szaporodás (ezrelék)} = \\frac{\\text{születések száma} - \\text{halálozások száma}}{\\text{népesség}} \\cdot 1000',
          caption: 'Negatív érték esetén természetes fogyásról beszélünk.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: természetes fogyás ezrelékben',
          problem:
            'Egy évben kb. 85 ezer gyermek született és kb. 128 ezer ember halt meg egy 9,6 milliós országban (kerekített, az utóbbi évekhez közeli számok). Mekkora a természetes szaporodás ezrelékben?',
          solution:
            '$(85\\,000 - 128\\,000) / 9\\,600\\,000 \\cdot 1000 = -43\\,000 / 9\\,600\\,000 \\cdot 1000 \\approx -4{,}5$ ‰. Tehát **természetes fogyás** van, évi kb. 4,5 ezrelék.',
        },
        { kind: 'heading', text: 'A korfa és az elöregedés' },
        {
          kind: 'text',
          text: 'A **korfa** a népességet kor és nem szerint ábrázolja (a férfiak és a nők külön oldalon, az idősebb korcsoportok felül). Hazánkban a korfa **urna alakú**: a talp (gyermekkorúak) keskeny, a törzs (aktív korúak) széles, a csúcs (idősek) vastag. Az idősek aránya nő, a nők várható élettartama hosszabb, mint a férfiaké, ezért az idős korosztályban több a nő. Az „öregedési index” az időskorúak és a gyermekkorúak aránya.',
        },
        {
          kind: 'compare',
          title: 'Mit olvashatsz ki a korfából?',
          columns: ['Jellemző a korfán', 'Magyarázat'],
          rows: [
            {
              label: 'Keskeny talp',
              cells: [
                'kevés a 0–14 évesek aránya',
                'alacsony születésszám, a termékenység a népességmegtartó szint alatt',
              ],
            },
            {
              label: '1950-es évek kiugrása',
              cells: [
                'az ma idős (70 év körüli) korosztály nagy létszámú',
                'a Ratkó-korszak (abortusztilalom) magas születésszáma',
              ],
            },
            {
              label: '1940-es évek bevágása',
              cells: [
                'a ma 80–85 év körüliek korcsoportja kisebb',
                'a háború éveiben kevesebb gyermek született, nagyok voltak a veszteségek',
              ],
            },
            {
              label: 'Az idős korcsoportban a nők túlsúlya',
              cells: ['a nők sokkal többen vannak', 'a nők várható élettartama hosszabb'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: eltartottsági arány',
          problem:
            'Egy országban 1,4 millió gyermekkorú (0–14), 6,3 millió aktív korú (15–64) és 1,9 millió idős (65 év feletti) él. Mekkora az eltartottsági arány (az inaktív korúak és az aktív korúak aránya)?',
          solution:
            'Az inaktív korúak száma $1{,}4 + 1{,}9 = 3{,}3$ millió. Az arány $3{,}3 / 6{,}3 \\approx 0{,}52$, vagyis 100 aktív korúra kb. 52 eltartott jut. Ha az idősek aránya nő, az eltartottsági arány is nő.',
        },
        { kind: 'heading', text: 'Népsűrűség' },
        {
          kind: 'formula',
          tex: '\\text{népsűrűség} = \\frac{\\text{népesség (fő)}}{\\text{terület (km}^2\\text{)}}',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: népsűrűség',
          problem:
            'Magyarország népessége kb. 9,6 millió, területe kb. 93 000 km². Mekkora az átlagos népsűrűség?',
          solution: '$9\\,600\\,000 / 93\\,000 \\approx 103$ fő/km².',
        },
        {
          kind: 'compare',
          title: 'Magas és alacsony népsűrűségű területek',
          columns: ['Sűrűn lakott', 'Ritkán lakott'],
          rows: [
            {
              label: 'Példák',
              cells: [
                'Budapest és az agglomeráció (Pest megye), a nagyvárosok (Debrecen, Szeged, Miskolc, Győr, Pécs) környéke, a Dunakanyar és a Balaton-part',
                'az aprófalvas dombvidékek (Ormánság, Zselic), az Őrség, a Hegyhát, a Cserehát, a Zemplén, a Hortobágy és a Kiskunság pusztai területei, az Alföld tanyás peremterületei',
              ],
            },
            {
              label: 'Miért?',
              cells: [
                'munkahelyek, szolgáltatások és közlekedési csomópontok koncentrációja; jó mezőgazdasági vagy turisztikai adottságok',
                'kedvezőtlen természeti adottságok (szikes, homokos talaj, hegyvidék), munkahelyhiány, rossz megközelíthetőség, elvándorlás',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A foglalkoztatási szerkezet átalakulása' },
        {
          kind: 'text',
          text: 'Az 1940-es évek végén a foglalkoztatottak több mint fele **mezőgazdaságban** dolgozott. A szocialista iparosítás (az 1950-es években) a munkaerőt az **iparba** vitte, a falvakból városba költöztek. A mezőgazdaság gépesítése és a szövetkezetek korszerűsítése csökkentette a munkaerő-igényt. A rendszerváltoztatás után a **nehézipar** (kohászat, bányászat) visszaesett, megszűntek a nagy állami vállalatok, a munkanélküliség megjelent. A külföldi tőke új ipari ágakat (járműipar, elektronika) és sok **szolgáltatási** munkahelyet hozott. Ma a foglalkoztatottak kb. kétharmada a **harmadik szektorban** (kereskedelem, szállítás, oktatás, egészségügy, turizmus, pénzügy, üzleti szolgáltatások) dolgozik.',
        },
        { kind: 'heading', text: 'Településföldrajz' },
        {
          kind: 'text',
          text: 'Hazánkban több mint 3100 település van, közülük kb. 350 város. A településhálózat **központi eleme Budapest**, a legnagyobb város, a „fejlődés motorja”; utána a regionális központok következnek (Debrecen, Szeged, Miskolc, Pécs, Győr). A településméret szerint sok az aprófalu (500 fő alatt), különösen a Dunántúlon. A **kisvárosok** a környék szolgáltató központjai. Az **agglomeráció** a nagyváros körüli, vele szoros kapcsolatban álló települések gyűrűje (lakó-, munkahelyi-, ellátási-, szabadidős kapcsolatok); a **szuburbanizáció** a városból a környékre költözést jelenti.',
        },
        {
          kind: 'compare',
          title: 'Jellegzetes településtípusok',
          columns: ['Hol', 'Jellemzők'],
          rows: [
            {
              label: 'Mezőváros',
              cells: [
                'Alföld (Kecskemét, Hódmezővásárhely, Debrecen, Cegléd)',
                'nagy kiterjedésű, sok mezőgazdasági népességgel, a határában tanyák; hagyományosan kereskedelmi és mezőgazdasági központ',
              ],
            },
            {
              label: 'Tanya',
              cells: [
                'Duna–Tisza köze, Szeged környéke, Nyírség',
                'magányos vagy kisebb csoportos gazdaság a mezőváros határában; a lakosság csökken, kihalófélben',
              ],
            },
            {
              label: 'Aprófalu',
              cells: [
                'Dél-Dunántúl (Ormánság, Zselic), Zala, Nyugat-Dunántúl',
                'kevés lakosú (500 alatt), elöregedő; ellátási és közlekedési nehézségek',
              ],
            },
            {
              label: 'Szeres település',
              cells: ['Őrség', 'kisebb házcsoportok („szerek”) szétszórt rendszere'],
            },
            {
              label: 'Hajdúváros',
              cells: [
                'Hajdúság (Hajdúszoboszló, Hajdúböszörmény)',
                'a 17. századi hajdútelepítések nyomán alakult települések',
              ],
            },
            {
              label: 'Ipari város',
              cells: [
                'Dunaújváros, Tiszaújváros, Tatabánya, Ózd, Salgótarján',
                'a 20. századi iparosítás vagy bányászat nyomán nőttek; a nehézipar visszaesése súlyos gondokat okozott',
              ],
            },
            {
              label: 'Üdülő- és fürdőváros',
              cells: [
                'Balaton-part, Hévíz, Harkány, Bük, Zalakaros',
                'idegenforgalom, szezonális népesség',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Politikai-gazdasági tényezők és a népességmozgás kapcsolata**: a trianoni határváltozás menekülthullámot indított; a háború utáni kitelepítések és lakosságcserék átrajzolták a Dunántúl és a Felvidék néprajzi térképét; az 1950-es iparosítás és téeszesítés a falvakat az ipari központokba áramoltatta; 1956 után kb. 200 ezren elmenekültek; a rendszerváltoztatás után a nehézipari térségek (Borsod, Nógrád) népessége fogyott, az agglomeráció pedig nőtt (szuburbanizáció); az EU-csatlakozás és a nyugati munkaerőpiacok megnyitása a nyugati elvándorlást erősítette. Ezekből látszik, hogy a népességváltozás okát mindig politikai vagy gazdasági eseményekben keresd.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A falusias térségek válsága és a felzárkózás lehetőségei',
          columns: ['Okok, jelek', 'Felzárkózási lehetőségek'],
          rows: [
            {
              label: 'Gazdaság',
              cells: [
                'a mezőgazdasági és ipari munkahelyek megszűnése, kevés vállalkozás, alacsony jövedelem',
                'helyi termékek és élelmiszer-feldolgozás, falusi és ökoturizmus, megújuló energia, vállalkozásfejlesztés',
              ],
            },
            {
              label: 'Népesség',
              cells: [
                'fiatalok elvándorlása, elöregedés, a képzett réteg hiánya',
                'képzés, távmunka, lakáshoz juttatás, a fiatalok megtartása',
              ],
            },
            {
              label: 'Infrastruktúra, szolgáltatás',
              cells: [
                'rossz közlekedés, iskolák, orvosi ellátás megszűnése, korlátozott internet',
                'mikrotérségi központok, közösségi közlekedés, széles sávú internet, uniós vidékfejlesztési források',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **lakókörnyezet** és az életmód települési típusonként eltér: a **nagyvárosban** (Budapest) sok a szolgáltatás és a munkahely, de zsúfolt a forgalom, drága a lakás, panelházas lakótelepek (az 1960–80-as években épültek) és kertvárosok váltakoznak; a **kisvárosban** kisebb a szolgáltatáskínálat, jó a zöldterületi aránya; a **faluban** természetközeli, de gyengébb az ellátás, nagyobb az elszigeteltség. A különbségeket a természeti környezet (tájba illeszkedés, vizek), az épített környezet (lakásminőség, közterek) és a szociális-gazdasági helyzet együtt alakítja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Diagram- és adatsor-elemzés: a népességszám és a természetes szaporodás alakulása több évtizedre; korfa értelmezése (kiugrások és bevágások magyarázata).',
            'Számítás: természetes szaporodás ezrelékben, népsűrűség, aktív keresők aránya, eltartottsági arány.',
            'Térképelemzés: népsűrűség tematikus térképe (magas és alacsony népsűrűségű tájak megnevezése és indoklása), településtípusok elhelyezése.',
            'Szóbeli: a népesedési folyamatok a 20. században és következményeik; a foglalkoztatási szerkezet átalakulása és okai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a **természetes fogyást** és a **népességfogyást** azonosnak venni. A népességszám változását a természetes szaporodás/fogyás **és** a vándorlási különbözet együtt adja. Másik hiba: az „urna alakú” korfát az „öregedő” helyett piramisnak írni, vagy a Ratkó-korszakot az 1970-es évekkel összekeverni (az 1950-es évek jelenség, az 1970-es évek közepe a „Ratkó-unokák” hulláma).',
        },
        {
          kind: 'example',
          title: 'Modellválasz: a foglalkoztatási szerkezet átalakulása',
          problem: 'Ismertesd a magyar foglalkoztatási szerkezet átalakulását és annak okait!',
          solution:
            'Vázlat: **1. Kiindulás** (1940-es évek vége): az agrárnépesség volt a legnagyobb. **2. Iparosítás** (1950–60-as évek): a nehézipar fejlesztése, a falvakból a városokba áramlott a munkaerő. **3. Gépesítés és téeszesítés**: kevesebb mezőgazdasági munkaerő kellett. **4. Rendszerváltoztatás** (1989–90 után): a nehézipar összeomlott, megjelent a munkanélküliség; a külföldi tőke járműipart és elektronikai ipart telepített. **5. Ma**: a szolgáltatások a foglalkoztatottak kétharmadát adják (tercierizáció), a mezőgazdaság alig 4–5%.',
        },
      ],
      topicMatch: ['=magyarország'],
      quiz: [
        {
          question: 'Mióta csökken Magyarország népessége?',
          options: ['1920 óta', '1945 óta', '1981 óta', '2004 óta'],
          answer: 2,
          explanation: 'A természetes fogyás 1981 óta tart, azóta csökken a népességszám.',
        },
        {
          question:
            'Egy 10 milliós országban 90 ezer gyermek született és 120 ezer ember halt meg. Mekkora a természetes szaporodás?',
          options: ['+3 ezrelék', 'mínusz 3 ezrelék (fogyás)', 'mínusz 12 ezrelék', '+30 ezrelék'],
          answer: 1,
          explanation:
            '$(90\\,000 - 120\\,000) / 10\\,000\\,000 \\cdot 1000 = -3$ ‰, vagyis természetes fogyás.',
        },
        {
          question: 'Milyen alakú a mai magyar korfa?',
          options: ['piramis', 'harang', 'urna', 'kör'],
          answer: 2,
          explanation:
            'Az alacsony születésszám és az idősödő társadalom miatt a korfa talpa keskeny, a teteje vastag: urna alakú.',
        },
        {
          question: 'Melyik szektorban dolgozik ma a foglalkoztatottak többsége Magyarországon?',
          options: ['mezőgazdaság', 'nehézipar', 'szolgáltatások', 'bányászat'],
          answer: 2,
          explanation:
            'A szolgáltatások (tercier szektor) adják a foglalkoztatottak kb. kétharmadát.',
        },
        {
          question: 'Melyik településtípus jellemző az Őrségre?',
          options: ['tanya', 'szeres település', 'hajdúváros', 'lakótelep'],
          answer: 1,
          explanation:
            'Az Őrségben a házcsoportok („szerek”) szétszórt rendszere alakult ki. A tanya az Alföld, a hajdúváros a Hajdúság jellemzője.',
        },
        {
          question: 'Mi jellemzi a falusias térségek válsághelyzetét?',
          options: [
            'sok munkahely és fiatal bevándorló',
            'elvándorlás, elöregedés és munkahelyhiány',
            'gyors népességnövekedés',
            'a szolgáltatások gyors bővülése',
          ],
          answer: 1,
          explanation:
            'A falusias térségekben a munkahelyek megszűnése miatt a fiatalok elköltöznek, a lakosság elöregszik, a szolgáltatások megszűnnek.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'KSH: népszámlálás 2022', url: 'https://nepszamlalas2022.ksh.hu/' },
        { label: 'Wikipédia: Magyarország demográfiája', url: wiki('Magyarország demográfiája') },
        {
          label: 'Wikipédia: Magyarország települései',
          url: wiki('Magyarország településeinek listája'),
        },
      ],
    },
    {
      id: 'magyarorszag-nepesseg-gazdasag',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Gazdaság, régiók, Budapest és külkapcsolatok',
      level: 'kozep',
      requirement: {
        kozep:
          '7.4: természeti erőforrások és szerepük; a magyar nemzetgazdaság jellemző vonásai, területi és szerkezeti átrendeződése; a gazdasági rendszerváltoztatás következményei; a magyar gazdaság helye Európában és a világgazdaságban mutatók alapján; a GDP regionális adatai; az élelmiszergazdaság; éghajlati és talajadottságaink szerepe a termőterületek elhelyezkedésében; a történelmi borvidékek; az energiagazdaság; az ipar átalakulása; a húzóágazatok; a tudásipar feltételei; infrastruktúra és településhálózat; közlekedésföldrajzi helyzet, átmenő forgalom; az idegenforgalom szerepe és a fontosabb idegenforgalmi körzetek. 7.6: a régiók, erőforrásaik, szerepük; Budapest központi szerepe, településszerkezete, kapcsolata az agglomerációval. 7.9: a külkereskedelem szerepe, a legfontosabb partnerek, a nemzetközi gazdasági kapcsolatok iránya és tartalma, határon átnyúló együttműködések.',
        emelt:
          '7.4: a társadalmi-gazdasági fejlődés és történelmi háttere; a piac és a tulajdonformák szerepe; a külföldi tőke szerepe a rendszerváltoztatás utáni fejlődésben; a munkanélküliség okai és csökkentésének lehetőségei; a régiók kialakításának elvei; a gazdasági ágazatok szerepe nemzetközi statisztikák alapján; hagyományos magyar élelmiszerek; ipari parkok, infoparkok, zöld- és barnamezős beruházások; az idegenforgalmi fejlesztések lehetőségei, a turizmus hatásai; a fenntarthatóságot támogató gazdasági törekvések; Magyarország és az EU gazdasági kapcsolatai. 7.6: fejlődési, felzárkózási utak a régiók számára.',
      },
      minutes: 26,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Természeti erőforrásaink közül a **termőföld**, a **víz** (termálvíz) a legfontosabb; az ásványkincs kevés (bauxit, szén és szénhidrogén kisebb mennyiségben), ezért energiahordozókból és nyersanyagokból sokat **importálunk**.',
            'A **rendszerváltoztatás** (1989–90) után privatizáció, piacgazdaság, a nehézipar és a mezőgazdasági nagyüzemek átalakulása, munkanélküliség, majd a **külföldi működőtőke** hatására a **járműipar**, az elektronika és a gyógyszeripar lett a húzóágazat.',
            'Az **energiagazdaság**: villamos energiánk jelentős részét a **Paksi Atomerőmű** adja, mellette földgáz-, lignit- és megújuló (főleg nap-, biomassza-) erőművek; a kőolaj és a földgáz nagyobb része import.',
            '**Régiók**: Budapest, Pest, Közép-Dunántúl, Nyugat-Dunántúl, Dél-Dunántúl, Észak-Magyarország, Észak-Alföld, Dél-Alföld. A fejlettségi különbségek nagyok: **Budapest** és a nyugati országrész fejlettebb, a keleti és déli peremek lemaradnak.',
            'Külkereskedelem: nyitott, exportra termelő gazdaság; az exportunk nagy része az **EU-ba** megy, **Németország** a legfontosabb partner; a kivitel nagyrészt gépek, járművek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Természeti erőforrások és a gazdasági átalakulás' },
        {
          kind: 'text',
          text: 'Hazánk gazdasági alapja a **termékeny talaj** és a mérsékelt éghajlat, a sok **felszín alatti és termálvíz**, az erdők, valamint az építőanyag-ipari nyersanyagok (mészkő, kavics, homok, agyag). Az **ásványkincseink** (bauxit, kőszén, lignit, kőolaj, földgáz, uránérc) szegények, és a kőszén- és bauxitbányászat nagyrészt megszűnt. A gazdasági fejlődést a **geopolitikai helyzet** és a történelem is alakította: a Habsburg-birodalmon belüli agrárszerep, Trianon, a tervutasításos szocialista korszak (KGST-kapcsolatok), majd a nyugati nyitás.',
        },
        {
          kind: 'compare',
          title: 'A rendszerváltoztatás előtt és után',
          columns: ['1989 előtt (szocialista tervgazdaság)', '1990 után (piacgazdaság)'],
          rows: [
            {
              label: 'Tulajdon',
              cells: [
                'állami és szövetkezeti tulajdon uralkodó',
                'privatizáció, a magántulajdon és a külföldi tulajdon súlya nő',
              ],
            },
            {
              label: 'Ipar',
              cells: [
                'nehézipar, bányászat, kohászat (Ózd, Diósgyőr, Dunaújváros), a KGST-piacra termelés',
                'a nehézipar egy része összeomlott; korszerű járműipar, elektronika, gyógyszeripar; az exportpiac nyugatra váltott',
              ],
            },
            {
              label: 'Mezőgazdaság',
              cells: [
                'termelőszövetkezetek és állami gazdaságok',
                'a földek magántulajdonba kerültek, a nagyüzemek átalakultak, sok kisgazdaság és nagy agrárvállalat',
              ],
            },
            {
              label: 'Foglalkoztatás',
              cells: [
                'teljes foglalkoztatás, sok munkahely az iparban és a mezőgazdaságban',
                'a gazdasági átalakulás nyomán 1990-es évek eleji nagy munkanélküliség, majd a szolgáltatások bővülésével javuló munkaerőpiac',
              ],
            },
            {
              label: 'Külkapcsolat',
              cells: [
                'a kereskedelem nagy része a KGST-országokkal, főleg a Szovjetunióval',
                'az EU, főleg Németország; 2004-től EU-tagság, 2007-től Schengen',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **külföldi működőtőke** a rendszerváltoztatás után a közép-európai régióban hozzánk áramlott a legtöbb. A **zöldmezős beruházás** új gyárat épít üres területen (például Suzuki Esztergomban, Audi Győrben, Mercedes Kecskeméten), a **barnamezős beruházás** a leállt, korábbi ipari terület újrahasznosítása (például Graphisoft Park Óbudán a volt gázgyár helyén, a Zsolnay Kulturális Negyed Pécsett). Az **ipari park** infrastruktúrával ellátott terület vállalkozásoknak, az **infopark** informatikai-kutatási vállalkozások telephelye (például Budapesten az Infopark). A külföldi tőke előnye a tőke, technológia és munkahely; hátránya a függés a külföldi anyavállalatoktól, az alacsony hazai hozzáadott érték és a profit kivitele.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **munkanélküliség** kialakulásának okai: az átalakuló iparszerkezet (strukturális), a gazdasági válságok (ciklikus), a képzettség és a munkahelyek közötti eltérés, a területi különbségek. Az 1990-es évek elején hirtelen nőtt (1993-ban kb. 12%), majd a gazdasági növekedéssel csökkent; a legnagyobb ma is a keleti és déli peremterületeken. Csökkentési lehetőségek: átképzés, befektetés-ösztönzés, közfoglalkoztatás, vállalkozásösztönzés, a munkaerő mobilitásának segítése, a vidéki infrastruktúra fejlesztése.',
        },
        { kind: 'heading', text: 'Mezőgazdaság és élelmiszergazdaság' },
        {
          kind: 'compare',
          title: 'Termőterületek: az éghajlat és a talaj szerepe',
          columns: ['Típus', 'Hol és miért?'],
          rows: [
            {
              label: 'Búza, árpa',
              cells: [
                'gabonafélék',
                'Mezőföld, Tiszántúl, Alföld löszös, csernozjom talajain; mérsékelten száraz, meleg nyár',
              ],
            },
            {
              label: 'Kukorica',
              cells: [
                'gabona, takarmány',
                'a melegebb, kissé csapadékosabb Dunántúli-dombvidék, Dél-Alföld, Tiszántúl',
              ],
            },
            {
              label: 'Napraforgó, repce',
              cells: ['olajnövények', 'Alföld és Mezőföld, jó talajú és napsütéses területek'],
            },
            {
              label: 'Szőlő',
              cells: [
                'borvidékek',
                'déli lejtők, vulkáni és lösz talajok, napfény; a homok is jó (Kunság)',
              ],
            },
            {
              label: 'Gyümölcs',
              cells: [
                'alma, kajszi, őszibarack',
                'alma: Nyírség (Szabolcs); kajszi, barack: Kecskemét környéke; homokos, napsütötte területek',
              ],
            },
            {
              label: 'Zöldség, fűszerpaprika',
              cells: [
                'kertészet',
                'paprika: Szeged és Kalocsa környéke; hagyma: Makó; öntözött, meleg területek',
              ],
            },
            {
              label: 'Állattartás',
              cells: [
                'sertés, baromfi, szarvasmarha',
                'Hortobágy: legelő (szürkemarha, racka); sertés és baromfi: kukoricatermő vidékek',
              ],
            },
          ],
        },
        {
          kind: 'map',
          title: 'Történelmi borvidékek központjai',
          places: [
            {
              name: 'Tokaj-Hegyalja (Tokaj)',
              lat: 48.1167,
              lon: 21.4167,
              note: 'tokaji aszú, furmint',
            },
            { name: 'Eger', lat: 47.9025, lon: 20.3772, note: 'egri bikavér' },
            { name: 'Sopron', lat: 47.6849, lon: 16.5905, note: 'soproni kékfrankos' },
            {
              name: 'Badacsony',
              lat: 46.8,
              lon: 17.5,
              note: 'balatoni borvidék, szürkebarát, kéknyelű',
            },
            { name: 'Szekszárd', lat: 46.3474, lon: 18.7062, note: 'szekszárdi vörösbor' },
            { name: 'Villány', lat: 45.8693, lon: 18.4531, note: 'villányi vörösbor' },
            { name: 'Mór', lat: 47.3748, lon: 18.2, note: 'móri ezerjó' },
            { name: 'Kecskemét', lat: 46.9062, lon: 19.6913, note: 'Kunsági borvidék' },
          ],
        },
        {
          kind: 'text',
          text: 'Az **élelmiszergazdaság** (mezőgazdasági termelés + élelmiszer-feldolgozás + kereskedelem) hagyományosan fontos ágazat és exportcikk. Az élelmiszeripar nagy része a nyersanyagtermelő vidékekhez kötődik (cukorgyárak, húsipar, malomipar, konzervipar, borászat). **Hagyományos magyar élelmiszerek** a szegedi és kalocsai fűszerpaprika, a téliszalámi (Pick, Szeged), a tokaji aszú, a gyulai és csabai kolbász, a makói hagyma, a kecskeméti barack, a hortobágyi húsok (szürkemarha), a pálinka. Földrajzi alapjuk az éghajlat, a talaj és a hagyományos gazdálkodás.',
          emelt: true,
        },
        { kind: 'heading', text: 'Energiagazdaság' },
        {
          kind: 'text',
          text: 'Hazánk **energiaigényének** nagy részét importból fedezi: a **kőolaj** a Barátság-vezetéken Oroszország felől és az Adria-vezetéken Horvátország felől érkezik Százhalombattára, a **földgáz** is túlnyomórészt vezetékes import (több vezetéken, többek között Ukrajna és Szerbia felől). A villamos energia termelése: a **Paksi Atomerőmű** (négy blokk, kb. 2000 MW; a hazai termelés kb. 40–50%-a), a **földgáztüzelésű erőművek** (Százhalombatta), a **lignit**-erőmű (Visonta, a Mátrai Erőmű), a biomassza- és hulladékerőművek, valamint a gyorsan növekvő **napenergia** és kisebb mértékű szélenergia. Jelentős a villamosenergia-import is. A **geotermikus energia** hasznosítása (Szentes, Hódmezővásárhely, Szeged) a fűtésben és a mezőgazdaságban jelentős lehetőség. A paksi bővítés (Paks II.) tervezett.',
        },
        {
          kind: 'compare',
          title: 'Energiaforrások előnyei és hátrányai',
          columns: ['Előny', 'Hátrány'],
          rows: [
            {
              label: 'Atomenergia (Paks)',
              cells: [
                'üvegházgáz-kibocsátás nélküli, stabil, nagy kapacitás',
                'radioaktív hulladék, nagy beruházási igény, import fűtőelem, hűtővíz (a Duna) használata',
              ],
            },
            {
              label: 'Lignit (Visonta)',
              cells: [
                'hazai, olcsó tüzelőanyag',
                'sok CO₂-kibocsátás, kisebb fűtőértékű, külszíni fejtés tájsebet okoz',
              ],
            },
            {
              label: 'Nap- és szélenergia',
              cells: [
                'megújuló, tiszta, az Alföld napsütése jó adottság',
                'időjárásfüggő, hálózati szabályozást és tárolást igényel',
              ],
            },
            {
              label: 'Földgáz, kőolaj',
              cells: [
                'kényelmes, rugalmas, a kémiai ipar alapanyaga',
                'főleg import, függőség a szállítóktól, kibocsátás',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Ipar és húzóágazatok' },
        {
          kind: 'terms',
          items: [
            {
              term: 'járműipar',
              text: 'A legfontosabb húzóágazat: **Győr** (Audi motor- és autógyártás), **Esztergom** (Suzuki), **Kecskemét** (Mercedes), **Szentgotthárd** (Opel/Stellantis motorgyár), valamint a beszállító alkatrészgyárak. Újabban az akkumulátorgyártás is megjelent (Debrecen, Göd, Iváncsa). A Dunántúl és a Közép-Magyarország ipari fejlődésének motorja.',
            },
            {
              term: 'elektronikai ipar',
              text: 'Székesfehérvár, Jászfényszaru (Samsung), Budapest; külföldi tulajdonú üzemek, montázs jellegű tevékenység.',
            },
            {
              term: 'gyógyszer- és vegyipar',
              text: 'A **gyógyszeripar** hagyományosan erős (Budapest, Debrecen, Dorog). **Vegyipar**: Tiszaújváros, Kazincbarcika és Berente (Borsod), Százhalombatta (kőolaj-finomítás), Várpalota–Pétfürdő.',
            },
            {
              term: 'élelmiszeripar',
              text: 'Az ország minden tájáról: gabona- és húsfeldolgozás, cukor-, konzerv-, bor- és hűtőipar. A mezőgazdasági nyersanyag közelében települ.',
            },
            {
              term: 'nehézipar',
              text: 'Egykor Ózd, Salgótarján, Miskolc-Diósgyőr, Dunaújváros (vasmű), Tatabánya és Várpalota. Nagy része megszűnt vagy összezsugorodott, ma Dunaújvárosban és Miskolcon maradt acélipar.',
            },
            {
              term: 'tudásipar',
              text: 'A kutatás-fejlesztésre, informatikára és magasan képzett munkaerőre épülő ágazatok (szoftverfejlesztés, gyógyszerkutatás, mérnöki szolgáltatások). **Feltételei**: egyetemek és kutatóhelyek (Budapest, Szeged, Debrecen, Pécs, Győr), képzett és idegen nyelveket beszélő munkaerő, tőke, innovációs környezet (innovációs parkok, infoparkok), gyors internet és jó infrastruktúra.',
            },
          ],
        },
        { kind: 'heading', text: 'Közlekedés, átmenő forgalom, idegenforgalom' },
        {
          kind: 'text',
          text: 'Hazánk **közlekedésföldrajzi helyzete** kedvező: Európa közepén, a nyugat–kelet és észak–dél irányú forgalom keresztútján fekszik. A közúti és vasúti hálózat **Budapest-központú sugaras**: a fő autópályák az M1 (Bécs felé, Hegyeshalom), az M3 (Ukrajna felé, Záhony), az M5 (Szeged, Szerbia felé), az M7 (Balaton, Horvátország felé), az M0 körgyűrű Budapest körül. A **Duna** nemzetközi vízi út (Rajna–Majna–Duna-csatorna), a Tisza hajózása kisebb. A Liszt Ferenc repülőtér nemzetközi légi kapu. **Átmenő (tranzit) forgalom**: kelet–nyugat irányú kamion- és áruszállítás (Ukrajna, Románia felől Nyugat felé), vasúton Záhonyban az ukrán széles nyomtávról a normál nyomtávra való átrakás. Előnyei: bevétel (úthasználati díj, szolgáltatások, fuvarozás); hátrányai: zaj, levegőszennyezés, balesetek, az utak terhelése.',
        },
        {
          kind: 'text',
          text: 'Az **infrastruktúra és a településhálózat** kapcsolata: az autópályák és vasútvonalak a nagyvárosokat kötik össze, a jó megközelíthetőségű térségek (M1, M7 mentén) gyorsabban fejlődnek, a távoli, rossz közlekedésű aprófalvas térségek (Dél-Dunántúl, Északkelet-Magyarország) lemaradnak.',
        },
        {
          kind: 'text',
          text: 'Az **idegenforgalom** a gazdaság fontos ága (bevétel, munkahely, a külföldi turisták devizája). Fő vonzerők: **Budapest** (fürdők, kultúra, világörökség), a **Balaton** (üdülés, fürdőzés), **gyógyturizmus** (Hévíz, Hajdúszoboszló, Harkány, Zalakaros, Bük, Gyula), **kulturális és borturizmus** (Tokaj, Eger, Villány, Pécs, Sopron), **ökoturizmus** (Hortobágy, Tisza-tó, Aggtelek), **aktív turizmus** (Mátra, Bükk, Dunakanyar). A kiemelt idegenforgalmi körzetek: Budapest és környéke, Balaton, Tisza-tó, Mátra–Bükk, Sopron–Fertő–Kőszeg, Tokaj-Hegyalja, Hajdúszoboszló–Debrecen–Hortobágy, Pécs–Mecsek, Dunakanyar.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A turizmus hatásai: **kedvező** a bevétel, a foglalkoztatás, a szolgáltatások (kereskedelem, vendéglátás, szállítás) bővülése, az infrastruktúra fejlesztése; **kedvezőtlen** a természeti környezet terhelése (Balaton-part beépítése, hulladék), a szezonalitás, az árak emelkedése a helyiek számára. Fejlesztési lehetőségek: a szezon meghosszabbítása (gyógy-, konferencia- és kulturális turizmus), falusi és ökoturizmus a leszakadó térségekben, a fenntartható turizmus (környezetbarát szállás, kerékpáros turizmus, helyi termékek).',
        },
        { kind: 'heading', text: 'A régiók és Budapest' },
        {
          kind: 'terms',
          items: [
            {
              term: 'A régiók (és megyéik)',
              text: '**Budapest** (főváros); **Pest** (Pest megye); **Közép-Dunántúl** (Fejér, Komárom-Esztergom, Veszprém); **Nyugat-Dunántúl** (Győr-Moson-Sopron, Vas, Zala); **Dél-Dunántúl** (Baranya, Somogy, Tolna); **Észak-Magyarország** (Borsod-Abaúj-Zemplén, Heves, Nógrád); **Észak-Alföld** (Hajdú-Bihar, Jász-Nagykun-Szolnok, Szabolcs-Szatmár-Bereg); **Dél-Alföld** (Bács-Kiskun, Békés, Csongrád-Csanád). A **nagyrégiók**: Közép-Magyarország (Budapest + Pest), Dunántúl (Közép-, Nyugat-, Dél-Dunántúl), Alföld és Észak (Észak-Magyarország, Észak-Alföld, Dél-Alföld).',
            },
            {
              term: 'Regionális központok',
              text: 'Közép-Dunántúl: Székesfehérvár; Nyugat-Dunántúl: Győr; Dél-Dunántúl: Pécs; Észak-Magyarország: Miskolc; Észak-Alföld: Debrecen; Dél-Alföld: Szeged.',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Két régió összehasonlítása',
          columns: ['Nyugat-Dunántúl', 'Észak-Magyarország'],
          rows: [
            {
              label: 'Erőforrás, adottság',
              cells: [
                'kedvező földrajzi helyzet (Ausztria, Szlovákia közelsége), jó közlekedés, erdők, termálvizek',
                'ásványkincsek (lignit, barnakőszén), hegyvidék, borvidékek, erdők, termálvizek',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'járműipar (Győr, Szentgotthárd), elektronika, turizmus (Sopron, Bük, Hévíz, Zalakaros), mezőgazdaság',
                'a volt nehézipar válsága (Ózd, Salgótarján, Diósgyőr), vegyipar (Tiszaújváros, Kazincbarcika), turizmus és borászat (Eger, Tokaj)',
              ],
            },
            {
              label: 'Fejlettség',
              cells: [
                'az ország legfejlettebb vidéki régiója, alacsony munkanélküliség',
                'az országos átlag alatti, magas munkanélküliség, elvándorlás',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'További régiók röviden: a **Közép-Dunántúl** (Székesfehérvár, Tatabánya, Veszprém) ipari régió (járműipar, vegyipar, alumínium, Balaton északi partja); a **Dél-Dunántúl** (Pécs, Kaposvár, Szekszárd) agrárjellegű, aprófalvas, kevésbé fejlett (Paks, Mecsek, Harkány); az **Észak-Alföld** (Debrecen, Nyíregyháza, Szolnok) mezőgazdasági és élelmiszeripari, a leginkább leszakadó térségekkel (Szabolcs), Debrecen mégis gyorsan fejlődik; a **Dél-Alföld** (Szeged, Kecskemét, Békéscsaba) mezőgazdasági-élelmiszeripari, kőolaj- és földgázkitermelés (Algyő), járműipar (Kecskemét); a **Pest** régió a főváros agglomerációja.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: regionális GDP-arányok',
          problem:
            'Egy (kitalált) országban egy régió lakossága az ország népességének 17%-a, GDP-je az ország GDP-jének 40%-a. Hányszorosa a régió egy főre jutó GDP-je az országos átlagnak?',
          solution:
            'Az egy főre jutó GDP aránya: $40 / 17 \\approx 2{,}35$. A régió egy főre jutó GDP-je az országos átlag kb. 2,35-szerese. (Hazánkban Budapest hasonló szerepet tölt be: a lakosság kb. egyhatoda él itt, de a GDP-nek több mint harmadát adja.)',
        },
        {
          kind: 'text',
          text: '**Budapest szerepe**: az ország politikai, gazdasági, kulturális, tudományos és közlekedési központja; a lakosság kb. 17%-a él itt, a GDP több mint harmadát adja; itt van a legtöbb egyetem, kutatóhely, vállalati székhely, a repülőtér, a vasút- és autóútcsomópontok. A főváros **1873-ban** egyesült Pestből, Budából és Óbudából; **1950-ben** jött létre Nagy-Budapest (22 kerülettel; a XXIII. kerület 1994-ben alakult, ma 23 kerület van). A **településszerkezet** gyűrűs-sugaras: a Belváros (a Kiskörúton belül), a Nagykörút körüli sűrű, kereskedelmi-lakó városrészek, a külső lakótelepek és ipari területek (Csepel, Kőbánya, Újpest), majd kertvárosok, a budai oldalon hegyvidéki, zöldebb lakóterületek. A Duna két oldala eltérő: Pest a síkság gazdasági-kereskedelmi központja, Buda a hegyvidéki lakó- és rekreációs terület.',
        },
        {
          kind: 'text',
          text: 'A **budapesti agglomeráció** (Pest megye egy része és a főváros) Budapesttel szoros kapcsolatban áll. A szuburbanizáció (az 1990-es évektől) nyomán sokan költöztek a környékre (Gödöllő, Szentendre, Vác, Veresegyház, Érd, Szigetszentmiklós). Kapcsolatok: **ingázás** (munka, tanulás), **ellátás** (Budapest ivóvizének jelentős része a Szentendrei-sziget és a Csepel-sziget partiszűrésű kútjaiból, élelmiszer a környékről), **gazdaság** (ipari parkok és logisztikai központok az M0 mentén, ipari beszállítás), **rekreáció** (Dunakanyar, Gödöllői-dombság).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A régiók **felzárkózási útjai**: a közlekedési kapcsolatok fejlesztése (autópálya- és vasútfejlesztés), innovációs és ipari parkok létesítése a regionális központok körül (Debrecen, Szeged, Pécs, Miskolc), az egyetemek és vállalkozások együttműködése, az agrár- és élelmiszeripar korszerűsítése, a helyi erőforrásokra épülő turizmus (gyógyfürdők, borászat), megújuló energia, valamint az EU-források (regionális fejlesztési alapok) felhasználása. A **régiók kialakításának elvei**: a gazdasági-társadalmi kapcsolatok (központ és vonzáskörzet), a hasonló fejlettség, a természeti és történelmi adottságok, valamint az uniós statisztikai és támogatási rendszerhez (NUTS) való illeszkedés.',
        },
        { kind: 'heading', text: 'Külkereskedelem és országhatárokon átívelő kapcsolatok' },
        {
          kind: 'text',
          text: 'A magyar gazdaság **nyitott**: kicsi belső piaca miatt a termelés nagy része exportra készül, ezért a külkereskedelem jelentős (az export értéke a GDP nagy hányadát teszi ki). **Kivitelünk** fő termékei: gépek és szállítóeszközök (autók, motorok, elektronikai berendezések, akkumulátorok), élelmiszer és mezőgazdasági termékek, gyógyszerek és vegyipari termékek. **Behozatalunk**: alkatrészek és félkész termékek (az összeszerelő iparnak), energiahordozók (kőolaj, földgáz), fogyasztási cikkek. A kereskedelem iránya a rendszerváltoztatás után a KGST-ből **nyugatra** váltott: az **EU-tagállamok** a kivitel kb. háromnegyedét veszik fel.',
        },
        {
          kind: 'compare',
          title: 'Legfontosabb külkereskedelmi partnereink',
          columns: ['Kivitel', 'Behozatal'],
          rows: [
            {
              label: 'Első',
              cells: ['Németország (az export kb. egynegyede)', 'Németország'],
            },
            {
              label: 'További jelentős partnerek',
              cells: [
                'Románia, Szlovákia, Olaszország, Ausztria, Lengyelország, Csehország, Franciaország, az Egyesült Államok',
                'Kína, Ausztria, Lengyelország, Szlovákia, Olaszország, Csehország, Románia',
              ],
            },
            {
              label: 'Jellemző termékek',
              cells: [
                'gépek, járművek, élelmiszer, gyógyszer',
                'alkatrészek, energiahordozók, fogyasztási cikkek',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: külkereskedelmi mérleg és nyitottság',
          problem:
            'Egy (kitalált) ország exportja 120, importja 110 milliárd euró, GDP-je 180 milliárd euró. Mekkora a külkereskedelmi mérleg, és az export a GDP hány százaléka?',
          solution:
            'Mérleg: $120 - 110 = +10$ milliárd euró, vagyis **többlet**. Az export aránya a GDP-ben: $120 / 180 \\cdot 100 \\approx 66{,}7\\%$. Minél nagyobb ez az arány, annál nyitottabb, a külföldi kereslettől annál függőbb a gazdaság.',
        },
        {
          kind: 'text',
          text: '**Határon átnyúló együttműködések**: az **EU-tagság** (2004) és a **Schengeni övezet** (2007) megszüntette a határellenőrzést a legtöbb szomszédunkkal. A **Visegrádi Együttműködés** (V4: Csehország, Lengyelország, Magyarország, Szlovákia) a közép-európai országok kapcsolata. **Eurorégiók** határokon átnyúló együttműködési területek: **Kárpátok Eurorégió**, Duna–Körös–Maros–Tisza (DKMT) Eurorégió, Ister-Granum Eurorégió (Esztergom–Párkány). Konkrét példák: a **Fertő–Hanság Nemzeti Park** és az osztrák Neusiedler See-Seewinkel Nemzeti Park közös természetvédelme, a Szentgotthárd–Heiligenkreuz közös ipari park, a Duna Régió Stratégia (a Duna menti országok közös fejlesztése), a Mária Valéria híd Esztergom és Párkány között, a Duna védelmére létrejött nemzetközi együttműködés.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Magyarország és az EU gazdasági kapcsolatai**: az EU-ból jelentős **fejlesztési támogatás** (kohéziós és strukturális alapok, agrártámogatás) érkezik, kereskedelmünk legnagyobb része az egységes belső piacon belül zajlik, a munkaerő és a tőke szabadon áramlik. Hátrányok: a külföldi konkurencia, a nyugatra vándorlás, a közös szabályozásokhoz való alkalmazkodás.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Kontúrtérképen: régiók, megyék, történelmi borvidékek, a nagyvárosok, ipari központok (Győr, Dunaújváros, Százhalombatta, Tiszaújváros, Paks, Algyő, Visonta), határátkelők (Hegyeshalom, Záhony).',
            'Diagram- és térképelemzés: a GDP regionális különbségei, a foglalkoztatás szerkezete, a külkereskedelmi partnerek aránya, az energiamix (kördiagram).',
            'Számítás: külkereskedelmi mérleg, export/GDP arány, GDP/fő arányok régiók között, százalékos változások.',
            'Szóbeli: „A magyar gazdaság átalakulása a rendszerváltoztatás óta”, „Budapest szerepe az ország életében”, „Hazánk idegenforgalma”, „Hazánk energiagazdasága”.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a **zöldmezős** és a **barnamezős** beruházást felcserélni (zöld = új, üres területen épített gyár; barna = a korábbi ipari terület újrahasznosítása). Másik hiba: a Paksi Atomerőművet a fosszilis erőművekhez sorolni, vagy a külkereskedelmi mérleget az exportnak és az importnak az összegével számolni (különbségük, nem összegük).',
        },
        {
          kind: 'example',
          title: 'Modellválasz: Budapest központi szerepe',
          problem: 'Mutasd be Budapest szerepét az ország életében!',
          solution:
            'Vázlat: **1. Földrajzi helyzet**: a Duna két partján, a síkság és a hegyvidék határán, közlekedési csomópont. **2. Funkciók**: politikai (főváros), gazdasági (a GDP több mint harmada, vállalati székhelyek), kulturális és tudományos (egyetemek, kutatóintézetek), közlekedési (sugaras hálózat, repülőtér). **3. Népesség**: kb. 1,7 millió fő, az ország népességének mintegy hatoda. **4. Kapcsolat az agglomerációval**: ingázás, lakóhely (szuburbanizáció), ellátás (víz, élelmiszer), logisztika. **5. Problémák**: forgalom, levegőszennyezés, lakásárak, a vidék elnéptelenedése.',
        },
        {
          kind: 'tip',
          text: 'A szóbelin a gazdasági témákat mindig **ok → folyamat → következmény → mai helyzet** sorrendben mondd el, és hozz példát településre vagy cégre: például rendszerváltoztatás → külföldi tőke → járműipar → Győr (Audi).',
        },
      ],
      topicMatch: ['=magyarország', 'magyarország régiói'],
      quiz: [
        {
          question: 'Melyik hazánk legfontosabb külkereskedelmi partnere?',
          options: ['Kína', 'Oroszország', 'az Egyesült Államok', 'Németország'],
          answer: 3,
          explanation: 'A kivitel és a behozatal legnagyobb része Németországgal bonyolódik.',
        },
        {
          question: 'Melyik a hivatalos régiók egyike?',
          options: ['Felső-Tisza-vidék', 'Nyugat-Dunántúl', 'Duna-mente', 'Kelet-Magyarország'],
          answer: 1,
          explanation:
            'A régiók: Budapest, Pest, Közép-, Nyugat- és Dél-Dunántúl, Észak-Magyarország, Észak- és Dél-Alföld.',
        },
        {
          question: 'Melyik város járműipari központ, ahol az Audi gyára működik?',
          options: ['Győr', 'Dunaújváros', 'Tiszaújváros', 'Paks'],
          answer: 0,
          explanation:
            'Győrben az Audi motor- és autógyártása a térség iparának motorja. Dunaújváros a vasmű, Tiszaújváros a vegyipar, Paks az atomerőmű helye.',
        },
        {
          question:
            'Egy ország exportja 95, importja 100 milliárd dollár. Mekkora a külkereskedelmi mérleg?',
          options: [
            '+5 milliárd dollár',
            '195 milliárd dollár',
            'mínusz 5 milliárd dollár (hiány)',
            '0',
          ],
          answer: 2,
          explanation: 'A mérleg az export és az import különbsége: $95 - 100 = -5$, vagyis hiány.',
        },
        {
          question: 'Melyik történelmi borvidék híres az aszúról?',
          options: ['Villány', 'Tokaj-Hegyalja', 'Szekszárd', 'Eger'],
          answer: 1,
          explanation:
            'A tokaji aszú Tokaj-Hegyalja jellegzetes bora. Villány és Szekszárd vörösboráról, Eger a bikavérről híres.',
        },
        {
          question: 'Mit jelent a barnamezős beruházás?',
          options: [
            'új gyár építése üres, zöld területen',
            'korábbi ipari terület újrahasznosítása',
            'mezőgazdasági terület bővítése',
            'természetvédelmi terület kijelölése',
          ],
          answer: 1,
          explanation:
            'A barnamezős beruházás a használaton kívüli korábbi ipari terület újrahasznosítása, a zöldmezős beruházás új, korábban beépítetlen területen épül.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'KSH', url: 'https://www.ksh.hu/' },
        { label: 'Wikipédia: Magyarország gazdasága', url: wiki('Magyarország gazdasága') },
        { label: 'Wikipédia: Magyarország régiói', url: wiki('Magyarország régiói') },
      ],
    },
    {
      id: 'magyarorszag-ertekek-kornyezet',
      subject: 'foldrajz',
      unitId: 'magyarorszag',
      title: 'Értékeink védelme és hazánk környezeti állapota',
      level: 'kozep',
      requirement: {
        kozep:
          '7.7–7.8: a nemzeti parkok és a világörökségi értékek felismerése térképen, kontúrtérképen, megnevezésük; a nemzeti parkok és a világörökségi helyszínek idegenforgalmi szerepe források alapján; hazánk környezeti állapotának értékelése tematikus térképek, adatsorok, fotók segítségével; a medence- és tranzitjelleg szerepe a környezet szennyeződésében, az összefogás szükségessége; a nagyvárosok környezeti ártalmai, a környezetvédelmi intézkedések és eredményeik.',
        emelt:
          'Magyarországi néprajzi csoportok, hagyományaik és értékeik; a hungarikum fogalma, példái, jelentősége; különböző forrásokból származó adatok összehasonlító elemzése, előrejelzések; a védettség jellege és fokozatai; a környezeti szempontokat figyelembe vevő gazdasági fejlesztések fontossága; Magyarország feladatai a fenntarthatóság, a vízgazdálkodás és a mezőgazdaság kapcsolatában.',
      },
      minutes: 20,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **10 nemzeti park**: Aggteleki, Balaton-felvidéki, Bükki, Duna–Dráva, Duna–Ipoly, Fertő–Hanság, Hortobágyi, Kiskunsági, Körös–Maros és Őrségi. Az első a **Hortobágyi** (1973), egyben a legnagyobb.',
            'A hazai **világörökségi** helyszínek (UNESCO): Aggteleki- és Szlovák-karsztvidék; Budapest (Andrássy út a Millenniumi földalattival, Várnegyed és a pesti Duna-part); Fertő; Hollókő; Hortobágy; Pannonhalmi Főapátság; Pécsi ókeresztény sírkamrák; Tokaj-Hegyalja borvidéke.',
            'A védettség fokozatai: **nemzeti park**, tájvédelmi körzet, természetvédelmi terület, természeti emlék. Mellettük nemzetközi címek: világörökség, Ramsar-terület, Natura 2000.',
            'Környezeti állapotunk gondjai: a **levegő** (por, ózon, nagyvárosi szmog), a **vizek** (szennyezés, eutrofizáció), a **talaj** (erózió, szikesedés), a **hulladék**, az **aszály és az árvíz**. A **medence- és tranzitjelleg** miatt a szennyezés a határon túlról is jöhet.',
            'Emelt szinten: **hungarikum**, néprajzi csoportok (palócok, matyók, jászok, kunok), fenntartható vízgazdálkodás és mezőgazdaság.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Nemzeti parkjaink' },
        {
          kind: 'map',
          title: 'Nemzeti parkok és világörökségi helyszínek',
          places: [
            {
              name: 'Aggtelek',
              lat: 48.4733,
              lon: 20.5,
              note: 'Aggteleki NP; világörökség (karszt)',
            },
            { name: 'Szilvásvárad', lat: 48.1, lon: 20.4, note: 'Bükki NP' },
            { name: 'Hortobágy', lat: 47.5833, lon: 21.15, note: 'Hortobágyi NP; világörökség' },
            { name: 'Bugac', lat: 46.68, lon: 19.65, note: 'Kiskunsági NP' },
            { name: 'Sarród', lat: 47.65, lon: 16.8, note: 'Fertő–Hanság NP; Fertő világörökség' },
            { name: 'Őriszentpéter', lat: 46.8, lon: 16.4, note: 'Őrségi NP' },
            {
              name: 'Tapolca',
              lat: 46.8814,
              lon: 17.4411,
              note: 'Balaton-felvidéki NP (Tapolcai-medence)',
            },
            { name: 'Gemenc', lat: 46.22, lon: 18.83, note: 'Duna–Dráva NP' },
            { name: 'Nagybörzsöny', lat: 47.9167, lon: 18.9667, note: 'Duna–Ipoly NP (Börzsöny)' },
            { name: 'Szarvas', lat: 46.8667, lon: 20.55, note: 'Körös–Maros NP' },
            { name: 'Hollókő', lat: 47.9967, lon: 19.5892, note: 'világörökség (ófalu)' },
            { name: 'Pannonhalma', lat: 47.5489, lon: 17.7586, note: 'Főapátság, világörökség' },
            {
              name: 'Pécs',
              lat: 46.0727,
              lon: 18.2323,
              note: 'ókeresztény sírkamrák, világörökség',
            },
            {
              name: 'Tokaj',
              lat: 48.1167,
              lon: 21.4167,
              note: 'Tokaj-Hegyalja borvidéke, világörökség',
            },
            { name: 'Budapest (Várnegyed)', lat: 47.4962, lon: 19.0396, note: 'világörökség' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Hortobágyi Nemzeti Park',
              text: 'Hazánk első (1973) és legnagyobb nemzeti parkja. **Szikes puszta**, vizes élőhelyek, a **vonuló madarak** (darvak) pihenőhelye; hagyományos pásztorgazdálkodás (szürkemarha, racka, ló). A Hortobágy a világörökség része (kulturális táj).',
            },
            {
              term: 'Kiskunsági Nemzeti Park',
              text: 'A Duna–Tisza köze **homokbuckái**, szikes tavai, gyepei, nyárasok és borókások; a Bugac puszta lovasbemutatókkal.',
            },
            {
              term: 'Aggteleki Nemzeti Park',
              text: '**Karsztvidék**, cseppkőbarlangok (Baradla–Domica), a szlovákiai részekkel együtt világörökség.',
            },
            {
              term: 'Bükki Nemzeti Park',
              text: 'A Bükk mészkő karsztfennsíkja, bükkösök, barlangok, források (Szalajka-völgy).',
            },
            {
              term: 'Fertő–Hanság Nemzeti Park',
              text: 'A Fertő-tó (sztyeppei tó, nádas) és a Hanság lápvidéke; az osztrák Neusiedler See-Seewinkel Nemzeti Parkkal közös védelem, a Fertő kulturális tájként világörökség.',
            },
            {
              term: 'Őrségi Nemzeti Park',
              text: 'Erdős, dombos, szeres települések, patakvölgyek, hagyományos építészet; hazánk nyugati határán.',
            },
            {
              term: 'Balaton-felvidéki Nemzeti Park',
              text: 'A Balaton északi partvidéke: Tihanyi-félsziget, Badacsony és a Tapolcai-medence tanúhegyei, a Kis-Balaton.',
            },
            {
              term: 'Duna–Dráva Nemzeti Park',
              text: 'A Duna és a Dráva ártéri erdői, mocsarai (Gemenc, Béda–Karapancsa), a szabályozatlan folyók maradványai.',
            },
            {
              term: 'Duna–Ipoly Nemzeti Park',
              text: 'A Dunakanyar és a környező hegységek: Börzsöny, Visegrádi-hegység, Pilis, Szentendrei-sziget, Ipoly-völgy.',
            },
            {
              term: 'Körös–Maros Nemzeti Park',
              text: 'A Körösök és a Maros ártere, löszgyepek, mocsarak; az Alföld déli részén (Szarvas).',
            },
          ],
        },
        { kind: 'heading', text: 'A világörökség hazai értékei' },
        {
          kind: 'compare',
          title: 'Világörökségi helyszínek (UNESCO)',
          columns: ['Mit őriz?', 'Mikor került a listára?'],
          rows: [
            {
              label: 'Hollókő ófalu és környezete',
              cells: ['palóc népi építészet, élő hagyományok', '1987'],
            },
            {
              label: 'Budapest: Duna-part, Várnegyed, Andrássy út',
              cells: [
                'a Duna két partját összekötő városkép, a Budai Vár, a Parlament, a Lánchíd; az Andrássy út és a Millenniumi földalatti (a kontinentális Európa első földalattija, 1896)',
                '1987, bővítve 2002-ben',
              ],
            },
            {
              label: 'Aggteleki- és Szlovák-karsztvidék barlangjai',
              cells: ['cseppkőbarlangok, karsztjelenségek (Baradla)', '1995, bővítve 2000-ben'],
            },
            {
              label: 'Pannonhalmi Főapátság',
              cells: ['bencés monostor és környezete (996-ban alapították)', '1996'],
            },
            {
              label: 'Hortobágyi Nemzeti Park (Hortobágy)',
              cells: ['a puszta kultúrtája, pásztorélet', '1999'],
            },
            {
              label: 'Pécsi ókeresztény sírkamrák',
              cells: ['a római kori Sopianae temetője (4. század)', '2000'],
            },
            {
              label: 'Fertő/Neusiedlersee kultúrtáj',
              cells: ['a Fertő környéke közösen Ausztriával', '2001'],
            },
            {
              label: 'Tokaj-Hegyalja történelmi borvidéke',
              cells: ['szőlőültetvények, pincék, aszú hagyománya', '2002'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A nemzeti parkok és a világörökségi helyszínek **idegenforgalmi szerepe** nagy: látogatókat vonzanak (Hortobágy, Aggtelek, Tokaj, Hollókő, Pannonhalma, Budapest), ökoturizmust, kulturális turizmust, bor- és gasztroturizmust hoznak; helyi munkahelyek, vendéglátás, szálláshelyek, hagyományőrzés kapcsolódik hozzájuk. Egyúttal a túlzott látogatottság terhelheti őket, ezért a védelem és a hasznosítás egyensúlyára kell törekedni.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A védettség fokozatai',
          columns: ['Jellemzők', 'Hazai példa'],
          rows: [
            {
              label: 'Nemzeti park',
              cells: [
                'nagy kiterjedésű, természeti és kultúrtáji értékeket együtt védő terület; fokozottan védett magterülettel; bemutatás, ökoturizmus is lehet',
                'Hortobágyi, Kiskunsági, Aggteleki NP',
              ],
            },
            {
              label: 'Tájvédelmi körzet',
              cells: [
                'nagyobb, természeti és kultúrtáji értéket őrző táj, a hagyományos tájhasználat megőrzésével',
                'például a Zselici Tájvédelmi Körzet',
              ],
            },
            {
              label: 'Természetvédelmi terület',
              cells: [
                'kisebb, egy-egy élőhely vagy ritka faj védelmére kijelölt terület',
                'például lápok, szikes tavak, ligeterdők',
              ],
            },
            {
              label: 'Természeti emlék',
              cells: [
                'egyedi, kis kiterjedésű érték (barlang, forrás, fa, kőzettani feltárás)',
                'barlangok, forrásbarlangok, védett fák',
              ],
            },
            {
              label: 'Nemzetközi címek',
              cells: [
                'világörökség (UNESCO), Ramsar-terület (vizes élőhely), Natura 2000 (EU), bioszféra-rezervátum',
                'Hortobágy, Fertő, Aggtelek',
              ],
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'hungarikum',
              text: 'A magyarság egyedi, kiemelkedő értéke (termék, alkotás, tudás, hagyomány), amelyet a **Hungarikumok Gyűjteménye** nyilvántart; jogszabály is szabályozza. Jelentősége: a nemzeti identitás erősítése, a magyar értékek nemzetközi ismertsége, a minőségvédelem és az idegenforgalom (gazdasági haszon).',
              emelt: true,
            },
            {
              term: 'hungarikumok példái',
              text: 'tokaji aszú, Pick téliszalámi és szegedi szalámi, Herendi és Zsolnay porcelán, a matyó népművészet, Hollókő ófalu, Hortobágy, pálinka, Unicum, szürkemarha, a Rubik-kocka és a Kodály-módszer.',
              emelt: true,
            },
            {
              term: 'néprajzi csoportok',
              text: '**Palócok** (Észak-Magyarország, Hollókő: népviselet, népi építészet), **matyók** (Mezőkövesd: hímzés), **jászok és kunok** (Jászság, Nagykunság: hagyományaik, kunhalmok, régi jogaik), **Sárköz** népe (Tolna, Baranya: népviselet), **Ormánság** népe (református népi építészet), **Őrség** lakói (szeres települések, fazekasság), **dunai svábok** és más nemzetiségek (német, szlovák) hagyományai.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'Környezeti állapot' },
        {
          kind: 'compare',
          title: 'Környezeti elemek problémái és megoldásaik',
          columns: ['Probléma', 'Megoldás, intézkedés'],
          rows: [
            {
              label: 'Levegő',
              cells: [
                'nagyvárosi **szmog** (por, nitrogén-oxidok), ózon, fűtési szennyezés, a forgalom; télen az **inverzió** miatt megrekedő szennyezés a medencében',
                'katalizátor és ólommentes benzin, kibocsátási normák, zöld zónák, tömegközlekedés és kerékpár-infrastruktúra fejlesztése, a szilárd tüzelés szabályozása, zöldterületek',
              ],
            },
            {
              label: 'Víz',
              cells: [
                'szennyvíz, a mezőgazdasági tápanyagterhelés, eutrofizáció (Balaton), vízszennyező balesetek (2000 cianid, 2010 vörösiszap), aszály és belvíz',
                'szennyvíztisztítók és csatornahálózat, ivóvízbázis-védelem, Kis-Balaton, árvízvédelem, vízvisszatartás',
              ],
            },
            {
              label: 'Talaj',
              cells: [
                'erózió (víz és szél), szikesedés, savanyodás, a túlzott műtrágya- és növényvédőszer-használat, tömörödés',
                'talajvédő művelés, erdősávok, szervestrágyázás, ökológiai gazdálkodás',
              ],
            },
            {
              label: 'Hulladék és zaj',
              cells: [
                'települési és ipari hulladék, illegális lerakók, radioaktív hulladék (Paks), közlekedési zaj',
                'szelektív gyűjtés, újrahasznosítás, korszerű lerakók és hulladékégetés, zajvédő falak',
              ],
            },
            {
              label: 'Élővilág',
              cells: [
                'élőhelyek pusztulása, tájsebek, invazív fajok',
                'védett területek, élőhely-rekonstrukció, természetvédelmi kezelés',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **medencejelleg** miatt a szennyezett levegő télen, szélcsendben a medence alján megrekedhet; a **tranzitjelleg** pedig azt jelenti, hogy a nemzetközi áru- és személyforgalom a területünkön halad át, zajt, kipufogógázt, balesetkockázatot okozva (Hegyeshalom, Záhony és a fő közlekedési folyosók mentén). Mivel a folyók, a levegő és a szennyezés átlépik a határt, a megoldáshoz **nemzetközi összefogás** szükséges (EU-szabályozás, a Duna-védelmi együttműködés, határon átnyúló nemzeti parkok).',
        },
        {
          kind: 'text',
          text: 'A **nagyvárosok környezeti ártalmai**: a levegő szennyezettsége (szálló por, nitrogén-oxidok), a **városi hősziget** (a beépített területek melegebbek), zaj, a kevés zöldterület, a közlekedési torlódás, a hulladék- és szennyvízmennyiség. A védelmükre tett intézkedések: ólmozott benzin kivezetése, szennyvíztisztítás bővítése, parkok és zöldfelületek növelése, környezetbarát tömegközlekedés (metró, villamos, e-buszok), forgalomszabályozás.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Környezeti szempontú gazdasági fejlesztések**: a megújuló energia (nap, geotermia, biomassza), az energiahatékonyság (épületek szigetelése), az ökológiai gazdálkodás és a helyi termékek, a körforgásos gazdaság (hulladék újrahasznosítása), a környezetbarát közlekedés és a fenntartható turizmus. Fontos, mert csökkentik a kibocsátást, a külföldi energiafüggőséget és a természet terhelését, és új munkahelyeket teremtenek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Fenntarthatóság, vízgazdálkodás, mezőgazdaság**: hazánkban egyszerre jelentkezik az **árvíz, belvíz és aszály**, ezért a vízgazdálkodás célja a víz **visszatartása** (tározók, vizes élőhelyek helyreállítása, ártéri gazdálkodás), a hatékony **öntözés**, a talajvízszint védelme és a vízminőség megőrzése. A mezőgazdaság feladata a tápanyag- és vegyszerterhelés csökkentése, a talajvédő művelés, az aszálytűrő fajták és a precíziós gazdálkodás. Az éghajlatváltozás miatt várhatóan melegebb, szárazabb nyarak és szélsőségesebb csapadék várható, amihez alkalmazkodni kell.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Kontúrtérképen a 10 nemzeti park és a világörökségi helyszínek bejelölése vagy megnevezése (az írásbeli topográfiai feladatában gyakori).',
            'Képfelismerés: Hortobágyi puszta, Baradla cseppkő, Hollókő, Tokaji pince, Pannonhalmi Főapátság; melyik helyszín?',
            'Forráselemzés: térkép vagy adatsor a levegő- és vízminőségről, a látogatószámról; ok, következmény, megoldás megfogalmazása.',
            'Szóbeli: „Mutasd be hazánk védett természeti és kulturális értékeit”, „Hogyan hat a medence- és tranzitjelleg a környezeti állapotra?”.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a nemzeti parkot és a világörökségi helyszínt azonosnak venni (egy helyszín lehet mindkettő, de a két cím különböző: Hortobágy, Aggtelek, Fertő), vagy a **Budai Várat** és a **pesti Duna-partot** külön helyszínnek hinni (egy világörökségi cím tartozik a Várnegyedhez és a Duna-parthoz).',
        },
        {
          kind: 'tip',
          text: 'Környezeti problémánál mindig három részt adj meg: **ok → következmény → megoldás**, és hozz hazai példát (Balaton eutrofizációja, Kis-Balaton, 2010 vörösiszap, budapesti szmog).',
        },
        {
          kind: 'example',
          title: 'Modellválasz: a medence- és tranzitjelleg szerepe a szennyeződésben',
          problem: 'Hogyan járul hozzá a medence- és a tranzitjelleg a környezet szennyeződéséhez?',
          solution:
            'Vázlat: **1. Medencejelleg**: a hegyekkel övezett medencében a szennyezett levegő télen, szélcsendben megrekedhet (inverzió); a folyók a szomszéd országokból hozzák a szennyezést. **2. Tranzitjelleg**: a nemzetközi áru- és személyforgalom átmegy az országon: zaj, levegőszennyezés, balesetveszély a fő útvonalak mentén. **3. Következmény**: a hazai intézkedések nem elegendők. **4. Megoldás**: nemzetközi összefogás (EU-előírások, Duna-védelem, közös nemzeti parkok), a forgalom vasútra és vízre terelése.',
        },
      ],
      topicMatch: ['=magyarország'],
      quiz: [
        {
          question: 'Melyik hazánk első nemzeti parkja?',
          options: ['Bükki', 'Aggteleki', 'Kiskunsági', 'Hortobágyi'],
          answer: 3,
          explanation: 'A Hortobágyi Nemzeti Parkot 1973-ban alapították, egyben a legnagyobb is.',
        },
        {
          question: 'Melyik szerepel a hazai világörökségi helyszínek között?',
          options: ['Visegrád', 'Hollókő', 'Eger vára', 'Hévízi-tó'],
          answer: 1,
          explanation: 'Hollókő ófalu és környezete a világörökség része (1987).',
        },
        {
          question: 'Melyik NEM nemzeti park?',
          options: ['Őrségi', 'Körös–Maros', 'Velencei-tavi', 'Fertő–Hanság'],
          answer: 2,
          explanation:
            'A tíz nemzeti park: Aggteleki, Balaton-felvidéki, Bükki, Duna–Dráva, Duna–Ipoly, Fertő–Hanság, Hortobágyi, Kiskunsági, Körös–Maros, Őrségi.',
        },
        {
          question: 'Miért romolhat télen a levegő minősége a Kárpát-medencében?',
          options: [
            'mert erős a tengeri szél',
            'mert a medence aljában a hideg levegő megül (inverzió), és a szennyezés nem távozik',
            'mert a hegyek elvezetik a szennyezést',
            'mert télen kevesebbet fűtenek',
          ],
          answer: 1,
          explanation:
            'A hegyekkel övezett medence alján az inverzió miatt a hideg, szennyezett levegő megrekedhet.',
        },
        {
          question: 'Mit jelent a tranzitjelleg a környezet szempontjából?',
          options: [
            'a vizek nagy része külföldről érkezik',
            'az átmenő nemzetközi forgalom terheli a környezetet',
            'az ország tengerparton fekszik',
            'a nemzeti parkok határon átnyúlnak',
          ],
          answer: 1,
          explanation:
            'A tranzitjelleg az országon áthaladó áru- és személyforgalom zaj-, levegőszennyezés- és balesetkockázatát jelenti.',
        },
        {
          question: 'Mi a hungarikum?',
          options: [
            'bármely Magyarországon gyártott termék',
            'a magyarság egyedi, kiemelkedő értéke',
            'egy nemzeti park',
            'egy magyar borvidék neve',
          ],
          answer: 1,
          explanation:
            'A hungarikum a magyarság csúcsteljesítményét, egyedi értékét jelölő gyűjtőfogalom, amelyet a Hungarikumok Gyűjteménye tart nyilván.',
          emelt: true,
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
        { label: 'Wikipédia: Hungarikum', url: wiki('Hungarikum') },
      ],
    },
  ],
};

export default unit;
