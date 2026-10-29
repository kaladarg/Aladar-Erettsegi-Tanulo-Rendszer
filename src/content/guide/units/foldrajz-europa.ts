import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 8 (Európa földrajza), 8.1–8.4. */
const unit: GuideUnit = {
  id: 'europa',
  subject: 'foldrajz',
  order: 80,
  title: 'Európa földrajza',
  requirementRef:
    '8.1 Természetföldrajzi kép; 8.2 Társadalomföldrajzi kép; 8.3 Az Európai Unió; 8.4 Regionális földrajz (magterület, Alpok és Észak-Európa, Dél-Európa, Kelet-Közép-, Kelet- és Délkelet-Európa, Oroszország)',
  intro:
    'Európa természeti és társadalmi képe, az Európai Unió, majd a követelményben nevesített országok és országcsoportok. A követelmény szerint a feldolgozás mélységét a topográfiai fogalmak határozzák meg: a lenti hivatalos névlista vizsgaanyag.',
  requirementSource:
    'A követelmények és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (8. témakör; topográfia: 6. Európa). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: { kozep: [], emelt: [] },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: {
      kozep: [
        'Dél-Európa',
        'Észak-Európa',
        'Kelet-Európa',
        'Kelet-Közép-Európa',
        'Közép-Európa',
        'Nyugat-Európa',
        'Alpok',
        'Appenninek',
        'Appennini-félsziget',
        'Balkán-félsziget',
        'Balkán-hegység',
        'Bécsi-medence',
        'Brit-szigetek',
        'Ciprus',
        'Csallóköz',
        'Cseh-medence',
        'Dalmácia',
        'Déli-Kárpátok',
        'Dinári-hegység',
        'Duna-delta',
        'Erdélyi-medence',
        'Erdélyi-szigethegység (Erdélyi-középhegység)',
        'Etna',
        'Északkeleti-Kárpátok',
        'Északnyugati-Kárpátok',
        'Finn-tóvidék',
        'Francia-középhegység',
        'Germán-alföld',
        'Hargita',
        'Holland-mélyföld',
        'Izland',
        'Kárpát-medence (Pannon-medence)',
        'Kárpátok',
        'Kelet-európai-síkság',
        'Keleti-Alpok',
        'Keleti-Kárpátok',
        'Kréta',
        'Krím-félsziget',
        'Lengyel-alföld',
        'Lengyel-középhegység',
        'Lengyel-tóhátság',
        'Londoni-medence',
        'Magas-Tátra',
        'Mont Blanc',
        'Morva-medence',
        'Német-középhegység',
        'Nyugati-Alpok',
        'Párizsi-medence',
        'Pennine-hegység (Pennine)',
        'Pireneusi (Ibériai)-félsziget',
        'Pireneusok',
        'Pó-alföld',
        'Román-alföld',
        'Skandináv-félsziget',
        'Skandináv-hegység',
        'Szicília',
        'Szilézia',
        'Szudéták',
        'Urál',
        'Vezúv',
        'Adriai-tenger',
        'Balti-tenger',
        'Boden-tó',
        'Dnyeper',
        'Don',
        'Duna',
        'Duna–Majna–Rajna vízi út',
        'Elba',
        'Égei-tenger',
        'Északi-tenger',
        'Fekete-tenger',
        'Földközi-tenger',
        'Garda-tó',
        'Genfi-tó',
        'Gyilkos-tó',
        'La Manche',
        'Ladoga-tó',
        'Odera',
        'Olt',
        'Pó',
        'Rajna',
        'Rhône',
        'Szajna',
        'Száva',
        'Szent Anna-tó',
        'Tajo (Tejo)',
        'Temze',
        'Urál (folyó)',
        'Vág',
        'Visztula',
        'Volga',
        'Ausztria',
        'Belgium',
        'Bosznia-Hercegovina',
        'Bulgária',
        'Csehország',
        'Dánia',
        'Észak-Macedónia',
        'Észtország',
        'Finnország',
        'Franciaország',
        'Görögország',
        'Hollandia',
        'Horvátország',
        'Írország',
        'Koszovó',
        'Lengyelország',
        'Lettország',
        'Litvánia',
        'Luxemburg',
        'Málta',
        'Montenegró',
        'Nagy-Britannia (Anglia, Skócia, Wales) és Észak-Írország Egyesült Királysága',
        'Németország',
        'Norvégia',
        'Olaszország',
        'Oroszország',
        'Portugália',
        'Románia',
        'Spanyolország',
        'Svájc',
        'Svédország',
        'Szerbia',
        'Szlovákia',
        'Szlovénia',
        'Ukrajna',
        'Vatikán',
        'Burgenland (Őrvidék)',
        'Délvidék',
        'Erdély',
        'Felvidék',
        'Kárpátalja',
        'Muravidék',
        'Partium',
        'Székelyföld',
        'Vajdaság',
        'Amszterdam',
        'Arad',
        'Athén',
        'Barcelona',
        'Belgrád',
        'Beregszász',
        'Berlin',
        'Bern',
        'Bécs',
        'Birmingham',
        'Brassó',
        'Bréma',
        'Brno',
        'Brüsszel',
        'Bukarest',
        'Constanţa',
        'Csernobil',
        'Csíkszereda',
        'Doneck',
        'Dortmund',
        'Drezda',
        'Dublin',
        'Dubrovnik',
        'Duisburg',
        'Eszék',
        'Fiume (Rijeka)',
        'Frankfurt am Main',
        'Gdańsk',
        'Genf',
        'Genova',
        'Gibraltár',
        'Glasgow',
        'Graz',
        'Hamburg',
        'Helsinki',
        'Karlovy Vary',
        'Kassa',
        'Katowice',
        'Kijev',
        'Kolozsvár',
        'Koppenhága',
        'Köln',
        'Krakkó',
        'Linz',
        'Lipcse',
        'Lisszabon',
        'Liverpool',
        'Ljubljana',
        'London',
        'Luxembourg',
        'Lyon',
        'Madrid',
        'Manchester',
        'Marosvásárhely',
        'Marseille',
        'Milánó',
        'Moszkva',
        'Munkács',
        'Murmanszk',
        'München',
        'Nagyvárad',
        'Nápoly',
        'Odessza',
        'Oslo',
        'Ostrava',
        'Párizs',
        'Ploieşti',
        'Plzeň',
        'Podgorica',
        'Pozsony',
        'Prága',
        'Priština',
        'Reykjavík',
        'Révkomárom',
        'Riga',
        'Rostock',
        'Rotterdam',
        'Róma',
        'Salzburg',
        'Skopje (Szkopje)',
        'Split',
        'Stockholm',
        'Strasbourg',
        'Stuttgart',
        'Szabadka',
        'Szarajevó',
        'Szentpétervár',
        'Székelyudvarhely',
        'Szófia',
        'Tallinn',
        'Temesvár',
        'Torino',
        'Trieszt',
        'Újvidék',
        'Ungvár',
        'Varsó',
        'Velence',
        'Vilnius',
        'Volgográd',
        'Zágráb',
        'Zürich',
        'Donyec-medence',
        'Közép-angliai iparvidék',
        'Olasz ipari háromszög',
        'Ruhr-vidék',
      ],
      emelt: [
        'Ardennek',
        'Korzika',
        'Stromboli',
        'Szardínia',
        'Szent Gotthárd-hágó',
        'Vaskapu',
        'Vereckei-hágó',
        'Botteni-öböl',
        'Ebro',
        'IJssel-tó',
        'Loire',
        'Ohridi-tó',
        'Poprádi-tó',
        'Albánia',
        'Fehéroroszország',
        'Moldova',
        'Monaco',
        'Antwerpen',
        'Bilbao',
        'Chișinău',
        'Göteborg',
        'Hága',
        'Minszk',
        'Nyizsnyij Novgorod',
        'Sevilla',
        'Thesszaloniki (Szaloniki)',
        'Tirana',
      ],
    },
  },
  pages: [
    {
      id: 'europa-termeszeti-kepe',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Európa természetföldrajzi képe',
      level: 'kozep',
      requirement: {
        kozep:
          '8.1: Ismertesse a nagytájak felszínformáit, a földtörténeti múltjuk és a geológiai szerkezetük közötti összefüggéseket. Támassza alá példákkal a geológiai szerkezet és az ásványkincsek előfordulásának összefüggését. Mutassa meg a térképen és jellemezze a kontinens nagytájait, szerkezeti egységeit. Mutassa be az éghajlatot alakító és módosító tényezők szerepét. Ismerje fel diagramok és más ábrák, képek, leírások alapján a kontinens jellegzetes éghajlatait, jellemezze azokat. Nevezze meg kontúrtérképen a legfontosabb felszíni vizeket. Mutassa be tematikus térképek segítségével az éghajlat, a vízrajz, a növényzet és a talajtípus közötti összefüggést. Mutassa be konkrét példákon a társadalom környezetátalakító tevékenységét és annak hatásait.',
        emelt:
          'Mutassa be a kontinens kialakulásának folyamatát tematikus térképek segítségével. Magyarázza meg a lemeztektonikai folyamatok és a kontinens területének változása közötti összefüggéseket.',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A partvonal rendkívül tagolt: nagy **félszigetek** (Skandináv-, Pireneusi (Ibériai)-, Appennini-, Balkán-félsziget) és **szigetek** (Brit-szigetek, Izland, Szicília, Kréta). Ezért a tenger hatása messze benyúlik a szárazföldre.',
            'A földtörténeti **szerkezeti egységek** kora szerint rendeződnek: **ősföld** (Kelet-európai-tábla, Balti-pajzs), **kaledóniai** (Skandináv-hegység), **variszkuszi** röghegységek (Francia- és Német-középhegység, Ardennek, Szudéták, Urál) és fiatal **alpi** gyűrthegységek (Alpok, Pireneusok, Appenninek, Dinári-hegység, Balkán-hegység, Kárpátok).',
            'Az Alpok legmagasabb csúcsa a **Mont Blanc** (kb. 4800 m). Működő tűzhányók: **Etna** (Szicília), **Vezúv** (Nápoly mellett), **Stromboli**; **Izland** a Közép-atlanti-hátság vulkáni szigete.',
            '**Éghajlat**: nyugaton **óceáni**, kelet felé **szárazföldibb**, délen **mediterrán**, északon és a hegyekben hideg. A fő okok: a **nyugati szelek**, az **Észak-atlanti-áramlás**, a tengertől való távolság és a domborzat.',
            'A **Volga** a leghosszabb európai folyó (a Kaszpi-tengerbe ömlik), a **Duna** a második. A **Duna–Majna–Rajna vízi út** összeköti az Északi- és a Fekete-tengert.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szerkezeti egységek és felszín' },
        {
          kind: 'text',
          text: 'Európa felszínét a **földtörténeti múlt** alakította. Minél régebbi egy terület, annál inkább lepusztult: a legidősebb darabok síkságok vagy lekopott hátak, a legfiatalabbak magas, kiemelt gyűrthegységek.',
        },
        {
          kind: 'compare',
          title: 'Európa szerkezeti egységei',
          columns: ['Példák', 'Jellemzők'],
          rows: [
            {
              label: 'Ősföld (előkambriumi pajzs és tábla)',
              cells: [
                'Balti-pajzs, Kelet-európai-tábla',
                'Skandináv-félsziget keleti fele, Finn-tóvidék, Kelet-európai-síkság. Nagyon idős, lepusztult kőzetek; a pajzson **vasérc** (Kiruna, Svédország), a táblát vastag üledék borítja.',
              ],
            },
            {
              label: 'Kaledóniai röghegység',
              cells: [
                'Skandináv-hegység, a skót felföld',
                'Régen felgyűrődött, lepusztult, de később újra kiemelkedett hegyek; a jégkorszaki jég mély **fjordokat** vájt a norvég partba.',
              ],
            },
            {
              label: 'Variszkuszi röghegység',
              cells: [
                'Francia-középhegység, Német-középhegység, Ardennek, Szudéták, Pennine-hegység, Urál',
                'Középmagas, lekerekített hegységek, gyakran töréses szerkezet. Előterükben és medencéikben **kőszén** (Ruhr-vidék, Szilézia, Közép-angliai iparvidék, Donyec-medence) és **ércek**.',
              ],
            },
            {
              label: 'Alpi gyűrthegység',
              cells: [
                'Alpok, Pireneusok, Appenninek, Dinári-hegység, Balkán-hegység, Kárpátok',
                'Fiatal, magas, ma is mozgó hegységek: **földrengések** és vulkánosság (Appennini-félsziget, Balkán). Az Alpokban és a Tátrában jégkorszaki formák (karok, gleccservölgyek, tavak).',
              ],
            },
            {
              label: 'Süllyedékek, medencék, alföldek',
              cells: [
                'Párizsi-medence, Londoni-medence, Pó-alföld, Kárpát-medence, Germán-alföld, Lengyel-alföld, Román-alföld',
                'Üledékes medencék és alföldek. A Pó-alföld az Alpok és az Appenninek között betöltött süllyedék; a Germán- és a Lengyel-alföldet a jégkorszaki jég morénái, a **Lengyel-tóhátság** és a **Finn-tóvidék** pedig tavakkal tarkított jégkorszaki felszín.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **Kárpát-medence** a Kárpátok és az Alpok ívében fekvő, beszakadt belső medence. Peremén a **Kárpátok** íve: **Északnyugati-Kárpátok**, **Északkeleti-Kárpátok**, **Keleti-Kárpátok**, **Déli-Kárpátok** és az **Erdélyi-szigethegység** (Erdélyi-középhegység); itt van a **Magas-Tátra** és a vulkáni eredetű **Hargita**. Az Erdélyi-medence a Keleti- és Déli-Kárpátok között fekvő belső medence.',
        },
        { kind: 'heading', text: 'Szerkezet és ásványkincsek' },
        {
          kind: 'text',
          text: 'Az ásványkincsek előfordulása a szerkezettől függ. A **kőszén** a variszkuszi korban keletkezett, trópusi lápvidékeken: ezért van meg a variszkuszi hegységek előterében és medencéiben. A **kőolaj és földgáz** üledékes medencékben, tengeri üledékben gyűlt össze (Északi-tenger, Volga–Urál-vidék, Kárpát-medence, Ploieşti környéke). A **vasérc** az ősföldeken (Balti-pajzs, Krivoj Rog Ukrajnában) található, a **bauxit** a mediterrán karsztvidékeken. A **réz** (Lengyelország) és a **kősó** (Lengyelország, Románia) bányászata is a térség ipari alapja.',
        },
        { kind: 'heading', text: 'Az éghajlat tényezői és típusai' },
        {
          kind: 'text',
          text: 'Az éghajlatot **alakító** tényezők: a földrajzi szélesség (a Nap sugárzásának beesési szöge), a tenger és a szárazföld eloszlása, a légkörzés. **Módosító** tényezők: a tengeráramlások, a domborzat (magasság, a hegyek elhelyezkedése a szelekhez képest), a felszín borítása. Nyugat-Európa éghajlata azért enyhe és csapadékos, mert a **nyugati szelek** az Atlanti-óceán felől hozzák a nedves levegőt, az **Észak-atlanti-áramlás** pedig melegíti a partokat. Ugyanazon a szélességen Lisszabon, Párizs, Moszkva és Jakutszk éghajlata nagyon különbözik: kelet felé nő a **hőingás**, csökken a csapadék.',
        },
        {
          kind: 'compare',
          title: 'Éghajlatok Európában',
          columns: ['Óceáni (Nyugat-Európa)', 'Mediterrán (Dél-Európa)'],
          rows: [
            { label: 'Nyár', cells: ['hűvös, csapadékos', 'forró, száraz'] },
            {
              label: 'Tél',
              cells: ['enyhe, csapadékos', 'enyhe, csapadékos (a csapadék fő ideje)'],
            },
            { label: 'Hőingás', cells: ['kicsi', 'közepes'] },
            {
              label: 'Növényzet, talaj',
              cells: [
                'lomberdő, barna erdőtalaj',
                'keménylombú erdő és bozót (macchia), terra rossa',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'További éghajlati típusok',
          columns: ['Terület', 'Jellemzők, növényzet, talaj'],
          rows: [
            {
              label: 'Mérsékelt övi szárazföldi',
              cells: [
                'Kelet-Európa, a Kárpát-medence átmeneti',
                'hideg tél, meleg nyár, nagy hőingás, kevés csapadék; lomberdő, délen **sztyepp** és **csernozjom** (Ukrajna, Dél-Oroszország).',
              ],
            },
            {
              label: 'Hideg (szubarktikus, sarkvidéki)',
              cells: [
                'Észak-Skandinávia, Észak-Oroszország',
                'hosszú, hideg tél, rövid, hűvös nyár; **tajga** (tűlevelű erdő, podzol talaj), északabbra **tundra**.',
              ],
            },
            {
              label: 'Hegyvidéki',
              cells: [
                'Alpok, Kárpátok, Pireneusok, Skandináv-hegység',
                'a magassággal hűl, nő a csapadék; **függőleges övezetesség**: lomberdő, tűlevelű erdő, hegyi rét, hó és jég.',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: éghajlati adatsor értelmezése',
          problem:
            'Két állomás (közelítő, kerekített adatok): A állomás januári középhőmérséklete 11 °C, júliusi 23 °C, éves csapadéka 700 mm, ennek zöme novembertől márciusig esik. B állomás januári középhőmérséklete −8 °C, júliusi 19 °C, éves csapadéka 650 mm, a csapadék jórészt nyáron esik. Mekkora az évi hőingás? Melyik éghajlat jellemzi az állomásokat?',
          solution:
            'Az évi közepes hőingás a legmelegebb és a leghidegebb hónap középhőmérsékletének különbsége.\n\nA állomás: $23 - 11 = 12$ °C. B állomás: $19 - (-8) = 27$ °C.\n\nA kis hőingás, az enyhe tél és a **téli csapadékmaximum** (száraz nyár) mediterrán jelleget mutat; a száraz nyár és a 11 °C-os januári átlag miatt A állomás **mediterrán** éghajlatú (Lisszabon vagy Athén típusú). A nagy hőingás, a fagyos tél és a nyári csapadék **szárazföldi** éghajlatra utal: B állomás Kelet-Európában lehet (például Moszkva környéke).',
        },
        { kind: 'heading', text: 'Vízrajz' },
        {
          kind: 'map',
          title: 'Néhány topográfiai név a Kárpát-medence peremén',
          places: [
            {
              name: 'Vaskapu',
              lat: 44.67,
              lon: 22.52,
              note: 'a Duna szurdoka a Déli-Kárpátok és a Balkán között',
            },
            {
              name: 'Vereckei-hágó',
              lat: 48.77,
              lon: 23.03,
              note: 'Északkeleti-Kárpátok, a honfoglalás hagyományos útja',
              emelt: true,
            },
            {
              name: 'Csallóköz',
              lat: 47.85,
              lon: 17.6,
              note: 'a Duna szigete Pozsony és Komárom között',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'A fontos európai folyók (nem teljes lista)',
          columns: ['Torkolat', 'Mit érdemes tudni'],
          rows: [
            {
              label: 'Volga',
              cells: [
                'Kaszpi-tenger',
                'Európa leghosszabb folyója (kb. 3500 km), Oroszország központi vízi útja; Volgográd, Nyizsnyij Novgorod. Don: Azovi-tenger (Volga–Don-csatorna).',
              ],
            },
            {
              label: 'Duna',
              cells: [
                'Fekete-tenger (Duna-delta)',
                'Európa második leghosszabb folyója (kb. 2850 km), tíz országot érint. Mellékfolyói: Vág, Száva, Olt.',
              ],
            },
            {
              label: 'Rajna',
              cells: [
                'Északi-tenger (Rotterdam)',
                'Az Alpokban ered (Boden-tó), a világ egyik legforgalmasabb belvízi útja; mentén Strasbourg, Köln, Duisburg. Főbb mellékfolyója a Majna.',
              ],
            },
            {
              label: 'Dnyeper',
              cells: ['Fekete-tenger', 'Kijev folyója, vízerőművek.'],
            },
            {
              label: 'Elba, Odera, Visztula',
              cells: [
                'Elba: Északi-tenger; Odera, Visztula: Balti-tenger',
                'Elba: Drezda–Hamburg; Odera: Szilézia; Visztula: Krakkó–Varsó–Gdańsk, Lengyelország fő folyója.',
              ],
            },
            {
              label: 'Pó, Rhône, Tajo (Tejo)',
              cells: [
                'Pó: Adriai-tenger; Rhône: Földközi-tenger; Tajo: Atlanti-óceán',
                'Pó: Észak-Olaszország; Rhône: Genfi-tó, Lyon; Tajo: Toledón át Lisszabonnál torkollik.',
              ],
            },
            {
              label: 'Szajna, Temze',
              cells: [
                'Szajna: La Manche; Temze: Északi-tenger',
                'Szajna: Párizs; Temze: London. Mindkettő kisebb folyó, de fővárost köt a tengerhez.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Fontos tavak: a **Ladoga-tó** Európa legnagyobb tava; az alpi tavakat (**Boden-tó**, **Genfi-tó**, **Garda-tó**) gleccserek vájták; a **Finn-tóvidék** a jég munkájának eredménye. A **Gyilkos-tó** (hegyomlás torlasztotta tó a Keleti-Kárpátokban) és a **Szent Anna-tó** (kialudt vulkáni kráter) Romániában vannak. A **Duna–Majna–Rajna vízi út** (kb. 3500 km hosszú összeköttetés, 1992 óta használható az egész szakasz) átvezeti a hajókat a Rajna és a Duna vízgyűjtője között, így az Északi-tenger és a Fekete-tenger között.',
        },
        {
          kind: 'text',
          text: '**Emelt**: a **Loire** Franciaország leghosszabb folyója (Atlanti-óceán), az **Ebro** a Pireneusi-félsziget északkeleti folyója (Földközi-tenger), az **IJssel-tó** egykori tengeröböl, amelyet gáttal zártak el a Wadden-tengertől, a **Poprádi-tó** a Magas-Tátra gleccsertava, az **Ohridi-tó** a Balkán mélyen fekvő, tektonikus eredetű tava, a **Botteni-öböl** a Balti-tenger északi nyúlványa.',
          emelt: true,
        },
        { kind: 'heading', text: 'A társadalom környezetátalakító hatása' },
        {
          kind: 'compare',
          title: 'Példák az emberi hatásra',
          columns: ['Hol', 'Mi történt, mi a következmény'],
          rows: [
            {
              label: 'Hollandia: polderek',
              cells: [
                'Holland-mélyföld',
                'A tengerszint alatti területeket gátakkal védik és szivattyúzzák: új termőföld és lakóterület, de állandó árvízvédelem szükséges.',
              ],
            },
            {
              label: 'Alpok',
              cells: [
                'turizmus, vízerőművek',
                'Munkahely és bevétel, de a felszín és a vízrendszer átalakul, a közlekedés terheli a völgyeket.',
              ],
            },
            {
              label: 'Folyószabályozás, csatornák',
              cells: [
                'Rajna, Duna',
                'Hajózás, árvízvédelem, de elvész az ártér, nő az árvíz csúcsa lejjebb.',
              ],
            },
            {
              label: 'Ipari és bányászati területek',
              cells: [
                'Ruhr, Szilézia, Donyec-medence',
                'Légszennyezés, bányászati süllyedés, tájsebek; későbbi rehabilitáció.',
              ],
            },
            {
              label: 'Mediterrán erdőirtás és túllegeltetés',
              cells: ['Dél-Európa', 'Talajpusztulás (erózió), elkarsztosodás, erdőtüzek.'],
            },
            {
              label: 'Csernobil, 1986',
              cells: [
                'Ukrajna',
                'Atomerőmű-baleset, szennyezett zárt zóna; a következmények egész Európát érintették.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A kontinens magja az ősföld (Kelet-európai-tábla). Ehhez forrtak hozzá a kaledóniai, majd a variszkuszi hegységképződés során a felgyűrt területek (a két folyamat az óidőben zajlott, a variszkuszi végén létrejött a **Pangea**), majd a Pangea szétesésekor nyílt meg az Atlanti-óceán. Az újidőben az afrikai és az eurázsiai lemez közeledése emelte ki az alpi hegységeket, miközben a közöttük lévő Tethys-tenger elfogyott; maradványa a Földközi-tenger, a Fekete-tenger és a Kaszpi-tenger. Izland a Közép-atlanti-hátság lemezszétnyílási zónájában nő; ezt a hátságot nyugatról az észak-amerikai, keletről az eurázsiai lemez határolja. A jégkorszakokban a skandináv eljegesedés a Germán- és Lengyel-alföldre morénákat hordott, a hegységekben gleccserek vájtak völgyeket és tavakat.',
          emelt: true,
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: lemeztektonika és felszín összekapcsolása',
          problem:
            'Magyarázd meg, miért van gyakran földrengés Dél-Olaszországban és Görögországban, de ritkán Franciaország északi részén!',
          solution:
            'Dél-Olaszország és Görögország az **afrikai és az eurázsiai lemez** ütközési övezetében fekszik: a lemezek közeledése miatt feszültség halmozódik fel, ez földrengésekben szabadul fel, a szubdukció pedig vulkánosságot (Etna, Vezúv, Stromboli) okoz. Észak-Franciaország az eurázsiai lemez belsejében van, ahol nincs lemezhatár, ezért ott a földrengések ritkák és gyengék.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Kontúrtérképen vagy ábrán: nagytájak, hegységek, tavak, folyók, tengerek megnevezése (a topográfiai lista alapján).',
            'Éghajlati diagram vagy adatsor felismerése: melyik éghajlat? Mi az évi hőingás, mikor esik a csapadék?',
            'Tematikus térképek összevetése: éghajlat, folyók, növényzet, talaj kapcsolata.',
            'Szóbeli tétel: Európa szerkezeti egységei vagy az éghajlat tényezői, példákkal.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az éghajlati diagramon nem a hőmérsékletet, hanem a csapadékot figyelni elsőnek. A mediterrán éghajlatot a **téli csapadék és a száraz, forró nyár** különbözteti meg az óceánitól. Másik hiba: a kaledóniai és a variszkuszi hegységeket összekeverni az alpi gyűrthegységekkel; az alpi hegységek a fiatalok és a magasak.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz-vázlat a „miért enyhe Nyugat-Európa éghajlata?” kérdésre: (1) nyugati szelek az óceán felől, (2) az Észak-atlanti-áramlás melegíti a partokat, (3) a tagolt partvonal miatt a tenger hatása mélyre hatol, (4) kelet felé a tengertől távolodva nő a hőingás és csökken a csapadék. Nevezz meg egy-egy példát (London vagy Dublin, Moszkva).',
        },
        {
          kind: 'tip',
          text: 'Az ásványkincseknél mindig kösd össze a **szerkezeti egységet** és a nyersanyagot: kőszén és variszkuszi hegységek, kőolaj és tengeri üledék, vasérc és ősföld.',
        },
      ],
      topicMatch: ['=európa', 'germán-alföld'],
      quiz: [
        {
          question: 'Miért enyhe Nyugat-Európa tele?',
          options: [
            'mert közel van az Egyenlítőhöz',
            'mert az Észak-atlanti-áramlás és a nyugati szelek melegítik',
            'mert magasan fekszik',
            'mert kevés a felhő',
          ],
          answer: 1,
          explanation:
            'A meleg tengeráramlás és az óceán felől fújó nyugati szelek enyhítik a telet.',
        },
        {
          question: 'Melyik hegység tartozik az alpi hegységrendszerhez?',
          options: ['Skandináv-hegység', 'Urál', 'Dinári-hegység', 'Francia-középhegység'],
          answer: 2,
          explanation:
            'A Dinári-hegység fiatal gyűrthegység, az alpi hegységrendszer része. A Skandináv-hegység kaledóniai, az Urál és a Francia-középhegység variszkuszi.',
        },
        {
          question: 'Melyik Európa leghosszabb folyója?',
          options: ['Duna', 'Rajna', 'Volga', 'Loire'],
          answer: 2,
          explanation: 'A Volga Európa leghosszabb folyója (kb. 3500 km), a Duna a második.',
        },
        {
          question:
            'Egy állomás januári középhőmérséklete −8 °C, júliusi 19 °C. Mekkora az évi hőingás?',
          options: ['11 °C', '27 °C', '19 °C', '8 °C'],
          answer: 1,
          explanation:
            'A hőingás a legmelegebb és a leghidegebb hónap középhőmérsékletének különbsége: $19 - (-8) = 27$ °C. Ez szárazföldi éghajlatra utal.',
        },
        {
          question: 'Melyik ásványkincs jellemző a variszkuszi hegységek előterében?',
          options: [
            'kőszén',
            'kősó a Balti-pajzson',
            'földgáz a Pó-alföld hegységeiben',
            'vulkáni tufa',
          ],
          answer: 0,
          explanation:
            'A kőszén a variszkuszi korban keletkezett lápvidékeken, ezért van meg például a Ruhr-vidéken és Sziléziában.',
        },
        {
          question: 'Mi okozza az Etna és a Vezúv vulkáni működését?',
          options: [
            'az afrikai és az eurázsiai lemez ütközése',
            'a jégkorszaki eljegesedés',
            'az Atlanti-óceán árapálya',
            'a Közép-atlanti-hátság nyílása',
          ],
          answer: 0,
          explanation:
            'Dél-Olaszország az afrikai és az eurázsiai lemez határán fekszik, ott lemezütközés és vulkánosság zajlik. A Közép-atlanti-hátság Izlandot érinti.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Európa földrajza', url: wiki('Európa földrajza') },
        { label: 'Wikipédia: Észak-atlanti-áramlás', url: wiki('Észak-atlanti-áramlás') },
        { label: 'Wikipédia: Duna–Majna–Rajna-csatorna', url: wiki('Rajna–Majna–Duna-csatorna') },
      ],
    },
    {
      id: 'europa-tarsadalmi-kepe',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Európa társadalomföldrajzi képe',
      level: 'kozep',
      requirement: {
        kozep:
          '8.2: Magyarázza meg a természeti adottságok és a társadalmi-gazdasági fejlődés népsűrűséggel való kapcsolatát. Mutassa meg térképen Európa sűrűn lakott területeit, nagy agglomeráit, és indokolja az elhelyezkedésüket. Sorolja fel és mutassa meg térképen, kontúrtérképen a résztémakörökben nevesített országcsoportokat, országokat, azok fővárosait, legfontosabb gazdasági központjait, és ismertesse tipikus földrajzi jellemzőiket. Sorolja fel a kontinensrészek jellegzetes mezőgazdasági terményeit, ásványkincseit, illetve tipikus gazdasági ágazatait. Mutassa be a nevesített országok, országcsoportok szerepét, jelentőségét a világgazdaságban és az Európai Unióban.',
        emelt:
          'Mondjon példákat a nevesített országok, országcsoportok kulturális értékeire. Mutassa be az európai erőtér átalakuló világgazdasági szerepét. Hasonlítson össze és elemezzen az európai erőtér országainak, országcsoportjainak gazdasági jelentőségét alátámasztó adatsorokat. Mutassa be a centrum, félperiféria és periféria térségek kapcsolatrendszerét.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **legsűrűbben lakott sáv** Dél-Anglia (London) – Benelux – Rajna-vidék (Ruhr) – Svájc – Észak-Olaszország (Milánó) vonalán húzódik. Itt kedvezők a természeti adottságok (síkság, folyók, kikötők, ásványkincsek), és régóta iparosodott, városias a térség.',
            'Ritkán lakott az **észak** (Skandinávia, Finnország, Izland), a **magashegységek** és a **kelet-európai** peremterületek.',
            '**Nagy agglomerációk**: London, Párizs, a Rajna–Ruhr-vidék, a holland Randstad (Amszterdam–Rotterdam–Hága), Milánó, Moszkva.',
            '**Tipikus mezőgazdaság**: nyugaton és északon tej- és húsgazdaság, búza, cukorrépa; délen szőlő, olajfa, déli gyümölcsök; keleten gabona (búza, kukorica), napraforgó.',
            '**Gazdasági erőtér**: a centrum a nyugati magterület, a periféria a keleti és déli peremek; az Európai Unió a világ egyik legnagyobb gazdasági tömbje.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Népsűrűség és természeti adottságok' },
        {
          kind: 'text',
          text: 'A népsűrűség a lakosok számának és a terület nagyságának hányadosa: $\\text{népsűrűség} = \\dfrac{\\text{népességszám}}{\\text{terület (km}^2\\text{)}}$. Európa népsűrűsége a világ legmagasabbjai közé tartozik, de nagyon egyenetlen. A sűrűn lakott térségek közös jellemzői: **síkság vagy medence** (jó termőföld, könnyű közlekedés), **hajózható folyók és kikötők**, **ásványkincsek** (kőszén, vasérc), és ennek nyomán a **korai iparosodás és városodás**. A ritkán lakott területeken a hideg éghajlat, a hegyvidéki felszín vagy a gyenge termőtalaj miatt kevesebben élnek.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: népsűrűség és egy főre jutó GDP',
          problem:
            'Egy (kitalált) országnak 10,4 millió lakosa van, területe 31 000 km², GDP-je 480 milliárd dollár. Számítsd ki a népsűrűséget és az egy főre jutó GDP-t! Egy másik országban 5,4 millió lakos él 338 000 km²-en. Hányszor ritkábban lakott?',
          solution:
            'Az első ország népsűrűsége: $10\\,400\\,000 / 31\\,000 \\approx 335$ fő/km².\n\nAz egy főre jutó GDP: $480\\,000\\,000\\,000 / 10\\,400\\,000 \\approx 46\\,200$ dollár/fő.\n\nA második ország népsűrűsége: $5\\,400\\,000 / 338\\,000 \\approx 16$ fő/km². Az arány: $335 / 16 \\approx 21$, vagyis a második ország kb. 21-szer ritkábban lakott, mint az első. (Ez a skandináv országok és a Benelux államok különbségére emlékeztet.)',
        },
        { kind: 'heading', text: 'Az országok és a fővárosok' },
        {
          kind: 'compare',
          title: 'Országcsoportok, fővárosok (a topográfiai lista alapján)',
          columns: ['Országok', 'Fővárosok'],
          rows: [
            {
              label: 'Magterület',
              cells: [
                'Egyesült Királyság, Franciaország, Benelux, Németország',
                'London, Párizs, Brüsszel, Amszterdam (a hivatalos főváros; a kormány Hágában ül), Luxembourg, Berlin; Írország: Dublin.',
              ],
            },
            {
              label: 'Alpok országai',
              cells: ['Ausztria, Svájc', 'Bécs, Bern'],
            },
            {
              label: 'Észak-Európa',
              cells: [
                'Norvégia, Svédország, Finnország, Dánia, Izland',
                'Oslo, Stockholm, Helsinki, Koppenhága, Reykjavík; a Baltikum: Tallinn, Riga, Vilnius.',
              ],
            },
            {
              label: 'Dél-Európa',
              cells: [
                'Spanyolország, Portugália, Olaszország, Görögország, Málta, Ciprus, Vatikán',
                'Madrid, Lisszabon, Róma, Athén; Málta: Valletta; a Vatikán városállam.',
              ],
            },
            {
              label: 'Kelet-Közép-Európa',
              cells: [
                'Csehország, Lengyelország, Szlovákia (és Magyarország)',
                'Prága, Varsó, Pozsony',
              ],
            },
            {
              label: 'Délkelet-Európa',
              cells: [
                'Románia, Bulgária, a volt Jugoszlávia utódállamai',
                'Bukarest, Szófia; Ljubljana, Zágráb, Belgrád, Szarajevó, Podgorica, Szkopje, Priština',
              ],
            },
            {
              label: 'Kelet-Európa',
              cells: ['Ukrajna, Oroszország', 'Kijev, Moszkva'],
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            { term: 'Albánia', text: 'Fővárosa Tirana.', emelt: true },
            { term: 'Fehéroroszország', text: 'Fővárosa Minszk.', emelt: true },
            { term: 'Moldova', text: 'Fővárosa Chișinău.', emelt: true },
            { term: 'Monaco', text: 'Városállam a francia Riviérán.', emelt: true },
          ],
        },
        {
          kind: 'compare',
          title: 'Tipikus gazdasági jellemzők nagytájanként',
          columns: ['Táj', 'Mezőgazdaság, ásványkincs, ágazat'],
          rows: [
            {
              label: 'Észak-Európa',
              cells: [
                'Skandinávia, Finnország',
                'erdőgazdaság, faipar; tejgazdaság, rozs, zab; norvég kőolaj és földgáz, svéd vasérc, vízenergia; halászat.',
              ],
            },
            {
              label: 'Nyugat-Európa',
              cells: [
                'Franciaország, Benelux, Németország, Egyesült Királyság',
                'búza, cukorrépa, tejgazdaság, szőlő (Franciaország); ipar (autó, gép, vegyipar), pénzügyi és üzleti szolgáltatások; kőszén, kőolaj és földgáz az Északi-tenger térségében.',
              ],
            },
            {
              label: 'Dél-Európa',
              cells: [
                'Pireneusi-, Appennini-, Balkán-félsziget',
                'olajfa, szőlő, déli gyümölcs (citrus), zöldség; idegenforgalom, hajózás; bauxit, ércek.',
              ],
            },
            {
              label: 'Kelet-Közép-Európa',
              cells: [
                'Cseh-medence, Lengyel-alföld, Kárpát-medence',
                'búza, kukorica, cukorrépa, burgonya; kőszén (Szilézia), járműipar, gépipar.',
              ],
            },
            {
              label: 'Kelet-Európa',
              cells: [
                'Kelet-európai-síkság',
                'búza, kukorica, napraforgó (csernozjom); kőolaj, földgáz, kőszén (Donyec-medence), vasérc.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **iparvidékek** (Ruhr-vidék, Közép-angliai iparvidék, Olasz ipari háromszög, Donyec-medence) a nyersanyag, a közlekedés és a munkaerő találkozásánál alakultak ki. A régi nehézipari térségek többsége **szerkezetváltáson** ment át, mert a bánya- és kohóipar válságba jutott.',
        },
        { kind: 'heading', text: 'Az Európai Unió és a világgazdaság' },
        {
          kind: 'text',
          text: 'Az **Európai Unió** egyben a világ egyik legnagyobb gazdasági tömbje: népessége kb. 450 millió fő, a közös belső piac a világkereskedelem fontos szereplőjévé teszi. A világgazdasági **triád** (Észak-Amerika, Nyugat-Európa, Kelet-Ázsia) egyik pólusa Európa.',
        },
        {
          kind: 'text',
          text: '**A kulturális örökség**: Európa nagy kulturális értékei a történelmi városok és a világörökségi helyszínek. Példák: Róma és Vatikán, Athén (Akropolisz), Párizs, Velence, Prága történelmi központja, Krakkó, Barcelona (Gaudí), a Rajna-vidéki kastélyok, a Loire-völgyi kastélyok, a Ruhr-vidéki Zollverein-bányakomplexum (rehabilitált ipari örökség).',
          emelt: true,
        },
        {
          kind: 'text',
          text: 'Az európai **erőtér** nem egyenletes. A **centrum** a nyugati magterület (Németország, Franciaország, Benelux, Észak-Európa, Észak-Olaszország): magas jövedelem, tőke, kutatás-fejlesztés, szolgáltatások. A **félperiféria** a feltörekvő, felzárkózó térségek (Kelet-Közép-Európa nagy része, Dél-Európa). A **periféria** az elmaradottabb, általában nyersanyag-, mezőgazdasági vagy olcsó munkaerőt kínáló peremek (Balkán, Kelet-Európa kevésbé fejlett vidékei). A térségek **kapcsolata** kölcsönös: a centrum tőkét és technológiát visz, a periféria munkaerőt, piacot és olcsó összeszerelést ad; a munkaerő a centrum felé vándorol (elvándorlás, „agyelszívás”).',
          emelt: true,
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: adatsor elemzése',
          problem:
            'Az egy főre jutó GDP az EU-átlag százalékában (kitalált adatok): A régió 135%, B régió 98%, C régió 62%. Sorold be a régiókat a centrum, félperiféria és periféria csoportba, és indokolj!',
          solution:
            'A (135%) jóval az átlag felett van: **centrum** jellegű (magas jövedelmű, tőkében és innovációban gazdag). B (98%) az átlag körül: **félperiféria**, mert közel van a fejlett térségekhez, de nem éri el azok szintjét. C (62%) az átlag 75%-a alatt marad: **periféria**, a felzárkózás támogatást igényel. Az indoklásba érdemes beírni az adat forrását és évét, valamint azt, hogy az egy főre jutó GDP csak egy mutató (a jövedelem-eloszlás, az életminőség mást is mutat).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Kontúrtérkép: országok, fővárosok, folyók, városok és iparvidékek megnevezése (topográfiai feladat).',
            'Térképelemzés: indokold, miért sűrűn lakott Dél-Anglia–Benelux–Rajna-vidék–Észak-Olaszország.',
            'Számítás: népsűrűség, egy főre jutó GDP, arányok táblázatból.',
            'Szóbeli: egy régió jellemzése (mezőgazdaság, ásványkincs, ágazatok, nagyvárosok).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a népsűrűség számolásánál a nagyságrend elrontása (millió fő, km²) vagy a „fő/km²” mértékegység kihagyása. Másik hiba: a fővárost és a legnagyobb várost összekeverni (például Hollandiában a főváros Amszterdam, de a kormány székhelye Hága; Svájcban Bern, nem Zürich vagy Genf).',
        },
        {
          kind: 'tip',
          text: 'Egy sűrűn lakott terület magyarázatánál mindig három okot adj: **természeti adottság** (síkság, folyó, nyersanyag), **gazdasági ok** (ipar, kikötő, munkahely) és **történelmi-társadalmi ok** (korai városodás).',
        },
      ],
      topicMatch: ['=európa', 'fővárosok', 'iparvidékek'],
      quiz: [
        {
          question: 'Melyik terület NEM tartozik Európa legsűrűbben lakott sávjához?',
          options: [
            'a Rajna-vidék',
            'Észak-Skandinávia',
            'a Benelux államok',
            'Észak-Olaszország (Pó-alföld)',
          ],
          answer: 1,
          explanation:
            'Észak-Skandinávia hideg éghajlatú és ritkán lakott. A másik három a sűrűn lakott európai magterülethez tartozik.',
        },
        {
          question: 'Mi Svájc fővárosa?',
          options: ['Genf', 'Zürich', 'Basel', 'Bern'],
          answer: 3,
          explanation:
            'Svájc fővárosa Bern. Genf nemzetközi szervezetek székhelye, Zürich a gazdasági központ.',
        },
        {
          question:
            'Egy országnak 12 millió lakosa van és 60 000 km² a területe. Mekkora a népsűrűsége?',
          options: ['5 fő/km²', '72 fő/km²', '200 fő/km²', '720 fő/km²'],
          answer: 2,
          explanation: '$12\\,000\\,000 / 60\\,000 = 200$ fő/km².',
        },
        {
          question: 'Mi jellemző az európai mezőgazdaságra délen?',
          options: [
            'olajfa, szőlő és citrusfélék termesztése',
            'rozs- és zabtermesztés',
            'rénszarvas-tenyésztés',
            'kakaótermesztés',
          ],
          answer: 0,
          explanation:
            'A mediterrán éghajlat a szőlő, az olajfa és a déli gyümölcsök termesztésének kedvez.',
        },
        {
          question: 'Mit jelent a „periféria” a gazdasági erőtér modelljében?',
          options: [
            'a gazdaság legfejlettebb magterülete',
            'a centrumhoz képest elmaradottabb, függő peremterület',
            'a legnagyobb népességű város',
            'az ország fővárosa',
          ],
          answer: 1,
          explanation:
            'A periféria a fejlett centrumtól függő, elmaradottabb térség; a centrum tőkét visz, a periféria munkaerőt és nyersanyagot ad.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Európa', url: wiki('Európa') },
        { label: 'Wikipédia: Népsűrűség', url: wiki('Népsűrűség') },
        { label: 'Eurostat (az EU statisztikai hivatala)', url: 'https://ec.europa.eu/eurostat' },
      ],
    },
    {
      id: 'europai-unio-mukodese',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Az Európai Unió',
      level: 'kozep',
      requirement: {
        kozep:
          '8.3: Nevezze meg az Európai Unió tagállamait. Mutassa be az európai együttműködés kialakulását és hatását a tagállamok társadalmi-gazdasági életére. Ismertesse az Európai Unió fő intézményeinek legfontosabb jellemzőit. Mutassa be példákkal alátámasztva az unión belüli területi fejlettségi különbségeket, a regionális politika fő vonásait. Elemezzen az Európai Unióval kapcsolatos statisztikai adatokat.',
        emelt:
          'Ismertesse az európai integráció fejlődésének történetét. Tárja fel az integráció bővítésének lehetőségeit és problémáit. Mutassa be a szervezet mezőgazdasági politikáját források alapján.',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az EU-nak **27 tagállama** van (az Egyesült Királyság 2020-ban kilépett). Magyarország **2004. május 1.** óta tag, ekkor tíz ország csatlakozott. A legutóbbi bővítés 2013-ban volt (Horvátország).',
            'A **kezdet**: 1951-es Párizsi szerződés (Európai Szén- és Acélközösség), 1957-es Római szerződések (Európai Gazdasági Közösség); az **Európai Unió** a maastrichti szerződéssel (hatályba 1993) jött létre. A cél a háború elkerülése és a gazdasági együttműködés volt.',
            'Az **egységes belső piac** négy szabadsága: áruk, szolgáltatások, tőke és személyek szabad mozgása. **Euróövezet**: 2026-tól 21 ország. A **schengeni térségben** nincs rendszeres belső határellenőrzés.',
            '**Fő intézmények**: Európai Parlament, Európai Unió Tanácsa, Európai Bizottság, Európai Tanács, Európai Unió Bírósága, Európai Központi Bank.',
            'A **regionális (kohéziós) politika** az elmaradottabb térségek felzárkóztatását támogatja.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A tagállamok' },
        {
          kind: 'compare',
          title: 'Az EU tagállamai a csatlakozás szerint',
          columns: ['Év', 'Országok'],
          rows: [
            {
              label: 'Alapítók (Római szerződések, 1957)',
              cells: [
                '1957/1958',
                'Belgium, Franciaország, Hollandia, Luxemburg, Németország, Olaszország',
              ],
            },
            {
              label: 'Első bővítés',
              cells: ['1973', 'Dánia, Írország (az Egyesült Királyság is, 2020-ban kilépett)'],
            },
            {
              label: 'Déli bővítések',
              cells: ['1981, 1986', 'Görögország (1981), Spanyolország és Portugália (1986)'],
            },
            { label: 'Észak-nyugati bővítés', cells: ['1995', 'Ausztria, Finnország, Svédország'] },
            {
              label: 'Keleti bővítés',
              cells: [
                '2004',
                'Ciprus, Csehország, Észtország, Lengyelország, Lettország, Litvánia, Magyarország, Málta, Szlovákia, Szlovénia',
              ],
            },
            { label: 'Bulgária és Románia', cells: ['2007', 'Bulgária, Románia'] },
            { label: 'Horvátország', cells: ['2013', 'Horvátország'] },
          ],
        },
        {
          kind: 'text',
          text: 'Ellenőrzésképpen: $6 + 2 + 1 + 2 + 3 + 10 + 2 + 1 = 27$ tagállam (az 1973-ban belépett Egyesült Királyság nélkül). **Nem tagja** az EU-nak: Norvégia, Svájc, Izland, Szerbia, Ukrajna, Oroszország, a nyugat-balkáni államok többsége és az Egyesült Királyság.',
        },
        { kind: 'heading', text: 'Az együttműködés kialakulása és hatása' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1950–1951',
              text: 'A Schuman-terv alapján létrejön az Európai Szén- és Acélközösség (Párizsi szerződés): a hadiipar két nyersanyagának közös irányítása nem engedi újra a háborút.',
            },
            {
              date: '1957',
              text: 'Római szerződések: Európai Gazdasági Közösség és Euratom (hatályba 1958).',
            },
            {
              date: '1993',
              text: 'A maastrichti szerződés életbe lép: létrejön az Európai Unió, az egységes belső piac befejeződik.',
            },
            {
              date: '1995',
              text: 'Schengeni egyezmény életbe lép: megszűnik az ellenőrzés a részt vevő országok belső határain.',
            },
            {
              date: '1999–2002',
              text: 'Az euró bevezetése: 1999-ben elszámolási pénz, 2002-től készpénz.',
            },
            { date: '2004', text: 'A legnagyobb bővítés: tíz új tagállam, köztük Magyarország.' },
            { date: '2009', text: 'A lisszaboni szerződés életbe lép: új működési rend.' },
            { date: '2020', text: 'Az Egyesült Királyság kilép az EU-ból (Brexit).' },
          ],
        },
        {
          kind: 'text',
          text: 'A **hatás** a tagállamokra: (1) a belső piacon nincs vám, nő a verseny és a kereskedelem; (2) a **munkaerő és a tőke** szabadon mozoghat; (3) az **euróövezetben** nincs árfolyamkockázat, de a tagállamok elvesztik az önálló monetáris politikát; (4) a **támogatások** segítik a felzárkózást; (5) közös szabályok a környezetvédelemben, fogyasztóvédelemben; (6) hallgatói mobilitás (például Erasmus). Hátrány lehet a nagyobb verseny a gyengébb vállalatoknak, és az elvándorlás a szegényebb tagállamokból. **Az euró** tagállamai 2026. január 1-jétől 21-en vannak (Bulgária a 21.). Az euróövezeten kívül maradt: Csehország, Dánia, Lengyelország, Magyarország, Románia és Svédország.',
        },
        {
          kind: 'text',
          text: 'A **schengeni térségbe** 29 ország tartozik: az EU 27 tagjából Írország és Ciprus nem, viszont Svájc, Norvégia, Izland és Liechtenstein igen. Románia és Bulgária 2025. január 1-jétől teljes jogú tag (a szárazföldi határellenőrzés is megszűnt). Ezért a Magyarország–Románia határon nincs rendszeres útlevélellenőrzés.',
        },
        { kind: 'heading', text: 'Az intézmények' },
        {
          kind: 'compare',
          title: 'Az EU fő intézményei',
          columns: ['Összetétel', 'Feladat, székhely'],
          rows: [
            {
              label: 'Európai Parlament',
              cells: [
                'Közvetlenül választott képviselők (öt évente; 720 képviselő a 2024-es választás után, ebből 21 magyar).',
                'A Tanáccsal együtt jogot alkot, elfogadja a költségvetést, ellenőrzi a Bizottságot. Székhely: Strasbourg (plenáris ülések) és Brüsszel.',
              ],
            },
            {
              label: 'Európai Unió Tanácsa',
              cells: [
                'A tagállamok kormányainak miniszterei.',
                'Jogalkotás és költségvetés (a Parlamenttel), a tagállami érdekek képviselete. Brüsszel. Az elnökséget hat hónaponként más tagállam tölti be.',
              ],
            },
            {
              label: 'Európai Bizottság',
              cells: [
                'A „kormány”: tagállamonként egy biztos, élén az elnök.',
                'Jogszabály-javaslatok, a jog végrehajtása és őrzése (a szerződések őre). Brüsszel.',
              ],
            },
            {
              label: 'Európai Tanács',
              cells: [
                'A tagállamok állam- és kormányfői, állandó elnökkel.',
                'Meghatározza az EU általános politikai irányát, nem alkot jogot. Brüsszel.',
              ],
            },
            {
              label: 'Európai Unió Bírósága',
              cells: [
                'Bírák minden tagállamból.',
                'Az uniós jog értelmezése és egységes alkalmazása. Luxembourg.',
              ],
            },
            {
              label: 'Európai Központi Bank (EKB)',
              cells: [
                'A közös pénz (euró) monetáris politikája.',
                'Az árstabilitás megőrzése, az alapkamat meghatározása az euróövezetben. Frankfurt am Main.',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Területi különbségek és regionális politika' },
        {
          kind: 'text',
          text: 'Az Unión belül nagyok a fejlettségi különbségek. Az egy főre jutó GDP-t **vásárlóerő-paritáson** (PPS) az EU-átlaghoz (=100) viszonyítva adják meg. A legmagasabb szinten Luxemburg és Írország áll messze az átlag felett, a Benelux államok, Ausztria, Németország, Dánia, Svédország is átlag feletti; a legalacsonyabb szint Bulgária és több más kelet- és délkelet-európai tagállam, az átlag kétharmada körül. Az országokon belül is nagyok a különbségek: a fővárosi régiók (például London, Párizs, Prága, Pozsony, Bukarest) általában messze az országos átlag fölött vannak. Általában a **centrum** a nyugati magterület, a **periféria** a keleti és déli peremek.',
        },
        {
          kind: 'text',
          text: 'A **regionális (kohéziós) politika** célja a régiók közti fejlettségi különbségek csökkentése. Eszközei az **alapok** (például Európai Regionális Fejlesztési Alap, Európai Szociális Alap Plusz, Kohéziós Alap). A támogatást elsősorban a **kevésbé fejlett régiók** kapják: azok a NUTS 2 szintű régiók, ahol az egy főre jutó GDP az uniós átlag **75%-a alatt** van. Elvek: **társfinanszírozás** (a tagállam is hozzájárul), programozás (többéves tervek), partnerség. A forrásokból közlekedési infrastruktúra, szennyvíztisztítás, kutatás, vállalkozás- és munkahelyfejlesztés valósul meg. Ez a politika az uniós költségvetés egyik legnagyobb tétele.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: statisztika elemzése, támogatott régió',
          problem:
            'Egy régióban az egy főre jutó GDP 16 800 euró (PPS). Az uniós átlag 33 600 euró. Az átlag hány százaléka a régió? Kaphat-e a régió a kevésbé fejlett régióknak járó támogatást?',
          solution:
            'Az arány: $16\\,800 / 33\\,600 = 0{,}5$, vagyis az uniós átlag **50%-a**. Mivel ez a **75%-os küszöb alatt** van, a régió a **kevésbé fejlett** kategóriába tartozik, és a legmagasabb támogatási intenzitást kaphatja. Fordítva: egy 40 320 eurós régió az átlag $40\\,320 / 33\\,600 = 1{,}2$-szerese, azaz a 120%-a, ő fejlettnek számít.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'vámunió, közös piac, gazdasági és monetáris unió',
              text: 'Az integráció fokozatai: az országok között nincs vám és közös külső vám van (vámunió); szabad a tőke, áru, munkaerő mozgása (közös piac); közös a pénz (monetáris unió).',
              emelt: true,
            },
            {
              term: 'közös agrárpolitika (KAP)',
              text: 'Az 1960-as években indult. Az uniós költségvetés közel egyharmadát teszi ki. Két pillére: közvetlen támogatás a gazdálkodóknak (nagyrészt földterület alapján), és vidékfejlesztés.',
              emelt: true,
            },
            {
              term: 'tagjelölt ország',
              text: 'Olyan állam, amely hivatalosan tagjelölti státuszt kapott az EU-tól; ilyen többek között Ukrajna, Moldova és több nyugat-balkáni ország.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A közös agrárpolitika története**: az 1960-as évektől garantált árak védték a gazdákat, ez túltermeléshez vezetett („vajhegyek”, „tejtó”). Az 1990-es évek reformjai a garantált árakat közvetlen támogatásra cserélték, később a tejkvótát (2015) és a cukorkvótát (2017) megszüntették. Ma a támogatás a környezetvédelmi és a tájgondozási elvárásokhoz (zöld feltételek) is kötött, a vidékfejlesztési pillér pedig a tanyás, kistelepülési térségek fennmaradását segíti. Az **adatelemzési** feladatban a források (diagramok) alapján a támogatások országonkénti megoszlását, a mezőgazdaság arányát és a gazdák számát kell összevetni.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A bővítés lehetőségei és problémái',
          columns: ['Lehetőségek', 'Problémák'],
          rows: [
            {
              label: 'Gazdaság',
              cells: [
                'nagyobb belső piac, külföldi tőke, felzárkózás a támogatásokból',
                'a fejlettségi különbségek nőnek, nagy támogatási igény, a gyengébb vállalatok versenyhátránya',
              ],
            },
            {
              label: 'Munkaerő',
              cells: [
                'új munkaerőpiac, mobilitás',
                'a szegényebb tagállamokból elvándorol a képzett munkaerő',
              ],
            },
            {
              label: 'Politika',
              cells: [
                'béke, stabilitás, demokratikus intézmények erősödése a szomszédságban',
                'nehezebb a döntéshozatal, különböző érdekek, a bővítéssel szembeni elégedetlenség (Brexit)',
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
            'Kontúrtérkép: az EU tagállamainak színezése; csatlakozási évek párosítása.',
            'Fogalmak és intézmények párosítása: melyik intézmény alkot jogot, melyik végzi a közös pénzpolitikát, hol van a székhelye.',
            'Statisztikai táblázat vagy diagram: egy főre jutó GDP, a támogatások megoszlása, a mezőgazdaság aránya; következtetés levonása.',
            'Szóbeli: az EU kialakulása és hatásai; a regionális politika, magyar példákkal.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az **Európai Tanácsot** és az **Európai Unió Tanácsát** összekeverni, vagy az **Európa Tanácsot** (nem uniós szervezet) az EU intézményei közé sorolni. A schengeni térség és az euróövezet sem azonos az EU-val: Írország és Ciprus az EU tagja, de nem schengeni; Svájc schengeni, de nem uniós tag. Dánia, Svédország, Lengyelország, Csehország, Magyarország és Románia uniós tag, de az euró nélkül.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz-vázlat az „EU hatásai” kérdésre: (1) szabadságok és belső piac, (2) euró és Schengen mint közös rendszer, (3) regionális támogatások és felzárkózás, (4) kockázatok: elvándorlás, függés, nagyobb verseny. Mindig adj magyar példát (a 2004-es csatlakozás, az uniós forrásból épült utak).',
        },
        {
          kind: 'tip',
          text: 'Statisztikánál mindig olvasd el: mi a mértékegység (euró, százalék, PPS), melyik évre vonatkozik, és mi az összehasonlítás alapja (az uniós átlag = 100).',
        },
      ],
      topicMatch: ['európai unió'],
      quiz: [
        {
          question: 'Mióta tagja Magyarország az Európai Uniónak?',
          options: ['1995', '2004', '2007', '2013'],
          answer: 1,
          explanation: 'Magyarország 2004. május 1-jén csatlakozott, a tíz új tagállam egyikeként.',
        },
        {
          question: 'Melyik NEM tartozik az egységes piac négy szabadsága közé?',
          options: [
            'áruk szabad mozgása',
            'tőke szabad mozgása',
            'közös hadsereg',
            'személyek szabad mozgása',
          ],
          answer: 2,
          explanation: 'A négy szabadság: áruk, szolgáltatások, tőke és személyek szabad mozgása.',
        },
        {
          question: 'Melyik intézmény székhelye Luxembourg?',
          options: [
            'Európai Központi Bank',
            'Európai Bizottság',
            'Európai Tanács',
            'Európai Unió Bírósága',
          ],
          answer: 3,
          explanation:
            'Az Európai Unió Bírósága Luxembourgban működik. Az EKB Frankfurtban, a Bizottság és a Tanács Brüsszelben van.',
        },
        {
          question: 'Egy régió egy főre jutó GDP-je az uniós átlag 60%-a. Mi igaz erre a régióra?',
          options: [
            'fejlettnek számít, nem kaphat támogatást',
            'a 75%-os küszöb alatt van, kevésbé fejlett régióként támogatható',
            'csak az euróövezet tagja kaphat támogatást',
            'a Kohéziós Alap kizárja',
          ],
          answer: 1,
          explanation:
            'A kevésbé fejlett régiók az uniós átlag 75%-a alatt vannak, így a regionális politika támogatja őket.',
        },
        {
          question: 'Melyik állítás igaz az euróra 2026-ban?',
          options: [
            'Dánia, Lengyelország, Csehország, Svédország, Románia és Magyarország nem vezette be',
            'Magyarország az euróövezet tagja',
            'minden uniós tagállam fizetőeszköze',
            'csak a schengeni országok használják',
          ],
          answer: 0,
          explanation:
            'Az EU 27 tagja közül 21 használja az eurót (Bulgária 2026. január 1-jétől), hat ország nem: Csehország, Dánia, Lengyelország, Magyarország, Románia és Svédország.',
        },
        {
          question:
            'Mi volt a közös agrárpolitika korai garantált áras rendszerének következménye?',
          options: [
            'terméshiány',
            'az import növekedése',
            'túltermelés (vajhegyek, tejtó)',
            'a földek elhagyása a gazdák által',
          ],
          answer: 2,
          explanation:
            'A garantált árak a termelőket többlet előállítására ösztönözték; a felesleg tárolása nagy költséget jelentett, ezért reformok következtek.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Az Európai Unió hivatalos oldala',
          url: 'https://european-union.europa.eu/index_hu',
        },
        { label: 'Wikipédia: Európai Unió', url: wiki('Európai Unió') },
        { label: 'Wikipédia: Közös agrárpolitika', url: wiki('Közös agrárpolitika') },
      ],
    },
    {
      id: 'europa-magterulete',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Európa magterülete: Egyesült Királyság, Franciaország, Benelux, Németország',
      level: 'kozep',
      requirement: {
        kozep:
          '8.4.1: Egyesült Királyság: mutassa be konkrét példákon a szigetország földrajzi fekvésének és ásványkincseinek szerepét a gazdaság fejlődésében. Franciaország: ismertesse az ország szerepét az Európai Unió élelmiszertermelésében; támassza alá példákkal az idegenforgalom gazdasági jelentőségét. Németország: mutassa be az országot mint Európa vezető gazdaságát; ismerje a keleti és nyugati országrész eltérő társadalmi-gazdasági fejlődésének útját, az ebből fakadó problémákat; mutassa be a hagyományos iparvidékek gazdasági és környezeti átalakulásának folyamatát a Ruhr-vidék példáján.',
        emelt:
          'Egyesült Királyság: ismertesse a gyarmatosítás szerepét az ország gazdaságának fejlődésében, magyarázza meg világgazdasági szerepének átalakulását; értelmezze az ország Európai Unióhoz való viszonyát. Franciaország: mutassa be a gyarmatosítás társadalmi-gazdasági sajátosságokra gyakorolt hatását. Benelux államok: ismertesse az egyes országok társadalmi-gazdasági jellemzőit, az együttműködés kialakulásához vezető okokat. Németország: támassza alá példákkal a déli tartományok gyors gazdasági fejlődését; igazolja példák alapján a német nagyvállalatok szerepét hazánk és a volt szocialista országok gazdasági fejlődésében.',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Egyesült Királyság**: szigetország, ezért a tengeri kereskedelem és a flotta fontos volt; **kőszén és vasérc** alapozta meg az **ipari forradalmat** (Közép-angliai iparvidék, Glasgow). Ma a gazdaság zöme szolgáltatás, **London** nagy pénzügyi központ; az Északi-tenger kőolaja és földgáza is számít.',
            '**Franciaország**: az EU vezető **mezőgazdasági és élelmiszer-termelője** (búza, bor, sajt, tejtermék). A világ egyik legtöbb külföldi látogatót fogadó országa. Atomenergia, repülőgép- és járműipar; Párizs nagy szerepe.',
            '**Németország**: Európa vezető gazdasága (autóipar, gépgyártás, vegyipar), a **Ruhr-vidék** a hagyományos iparvidékek átalakulásának iskolapéldája. Az 1990-es újraegyesítés után a **keleti tartományok** felzárkózása lassú.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten még',
          items: [
            '**Benelux államok** (Belgium, Hollandia, Luxemburg): kicsi, nyitott, sűrűn lakott, kikötőkre és kereskedelemre épülő gazdaságok; együttműködésük (vámunió 1944-től) az európai közös piac előfutára. **Rotterdam** Európa legnagyobb kikötője.',
            '**Gyarmatosítás**: a brit és a francia gazdaság nyersanyagot és piacot nyert, ma a Brit Nemzetközösség, a Francia Közösség nyomai és a bevándorlás látszik. **Brexit**: az Egyesült Királyság 2020-ban kilépett az EU-ból.',
            '**Német déli tartományok** (Bajorország, Baden-Württemberg): csúcstechnológia és járműipar; a német nagyvállalatok nagy gyárakat működtetnek Magyarországon.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Egyesült Királyság' },
        {
          kind: 'text',
          text: 'Az **Egyesült Királyság** (Nagy-Britannia és Észak-Írország Egyesült Királysága) négy országból áll: Anglia, Skócia, Wales és Észak-Írország. Fővárosa **London**, a Temze mentén. Területe kb. 244 ezer km², lakossága kb. 68–69 millió fő. **Írország** önálló köztársaság (fővárosa Dublin), nem része az Egyesült Királyságnak.',
        },
        {
          kind: 'compare',
          title: 'A fekvés és az ásványkincsek szerepe',
          columns: ['Adottság', 'Hatás a gazdaságra'],
          rows: [
            {
              label: 'Szigetfekvés',
              cells: [
                'tengeri kereskedelem, jó kikötők, a tenger védelme',
                'London, Liverpool, Glasgow kikötőváros; a hajózás, a tengeri kereskedelem és a flotta a világkereskedelem és a gyarmatbirodalom alapja; mára légi és tengeri átkelők (La Manche, Csatorna-alagút 1994).',
              ],
            },
            {
              label: 'Kőszén és vasérc',
              cells: [
                'Pennine-hegység előtere, Wales, Skócia, Közép-Anglia',
                'a gőzgép és a vasgyártás energiabázisa: az **ipari forradalom** szülőhazája. Iparvidékek: Birmingham (vas, gép), Manchester (textil), Glasgow (hajógyártás), Liverpool (kikötő).',
              ],
            },
            {
              label: 'Északi-tengeri kőolaj és földgáz',
              cells: [
                'az 1970-es évektől kitermelt',
                'energia-önellátás és export; a kitermelés mára csökkenőben van.',
              ],
            },
            {
              label: 'Mai gazdaság',
              cells: [
                'szolgáltatás, pénzügy, kreatív ipar, gyógyszer- és repülőgépipar',
                'London (a City) Európa vezető pénzügyi központja; a hagyományos nehézipar (kőszén, acél, hajógyártás) válságba jutott.',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Gyarmatosítás és az EU-hoz való viszony',
          columns: ['Téma', 'Összefüggések'],
          rows: [
            {
              label: 'Gyarmatbirodalom',
              cells: [
                'a világ legnagyobb birodalma (India, Afrika, Ausztrália, Kanada)',
                'olcsó nyersanyag (pamut, gyapjú, ércek), védett piacok az iparcikkeknek, tőkehalmozás; innen a „világ műhelye” szerep a 19. században. A birodalom felbomlása után a Nemzetközösségben és a nyelvben él tovább.',
              ],
            },
            {
              label: 'A világgazdasági szerep átalakulása',
              cells: [
                'nehézipar → szolgáltatás',
                'az ipari verseny és a gyarmatok elvesztése után a pénzügyi és üzleti szolgáltatások, a kreatív ipar lett a húzóágazat; a régi iparvidékek (Észak-Anglia, Wales, Glasgow vidéke) szerkezetváltása nehéz.',
              ],
            },
            {
              label: 'Viszony az EU-hoz',
              cells: [
                '1973-tól tag, nem lépett be a schengeni térségbe és az euróövezetbe; 2016-os népszavazás után 2020-ban kilépett',
                'a kilépés okai között szerepelt a szuverenitás, a bevándorlás ellenőrzése és az uniós költségvetési hozzájárulás. Az új kereskedelmi megállapodás 2021 elejétől él; a vámformalitások, a munkaerő és a pénzügyi szolgáltatások területén a hatások vitatottak.',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Franciaország' },
        {
          kind: 'text',
          text: 'Franciaország területe kb. 550 ezer km² (az anyaország), lakossága kb. 68 millió fő. Fővárosa **Párizs** (a Szajna mentén, a Párizsi-medencében) és agglomerációja a lakosság nagy részét tömöríti. További nagyvárosok: **Lyon** (a Rhône és a Saône találkozásánál), **Marseille** (Franciaország legnagyobb kikötője), **Strasbourg** (az Európai Parlament egyik székhelye, a Rajnán).',
        },
        {
          kind: 'compare',
          title: 'Franciaország az uniós élelmiszertermelésben és az idegenforgalomban',
          columns: ['Terület', 'Termékek, jelentőség'],
          rows: [
            {
              label: 'Párizsi-medence',
              cells: [
                'a legjobb adottságú síkság',
                'búza, cukorrépa, olajnövények; ez az EU egyik legnagyobb gabonatermő vidéke.',
              ],
            },
            {
              label: 'Szőlő- és borvidékek',
              cells: [
                'Bordeaux, Burgundia, Champagne, a Rhône völgye',
                'a világ egyik legnagyobb bor- és pezsgőtermelője és exportőre.',
              ],
            },
            {
              label: 'Állattenyésztés',
              cells: [
                'Normandia, Bretagne, Francia-középhegység',
                'szarvasmarha, tej- és sajttermékek (camembert, roquefort).',
              ],
            },
            {
              label: 'Idegenforgalom',
              cells: [
                'Párizs (Eiffel-torony, Louvre), Loire-menti kastélyok, Côte d’Azur, Alpok, Normandia és Bretagne tengerpartjai',
                'évente körülbelül 100 millió külföldi látogató: a világ egyik legnépszerűbb úti célja, jelentős bevétel és sok munkahely.',
              ],
            },
            {
              label: 'Ipar',
              cells: [
                'atomenergia, repülőgép (Toulouse), járműgyártás, luxuscikkek',
                'az áramtermelés körülbelül kétharmada atomerőműből származik; magas hozzáadott értékű ipar.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **gyarmatosítás** hatása Franciaországban: Észak- és Nyugat-Afrika, Indokína, a Karib-térség gyarmatai nyersanyagot és piacot adtak. A felszabadulás (1950-es, 1960-as évek) után sok bevándorló érkezett a volt gyarmatokról (Algéria, Marokkó, Nyugat-Afrika), ezért sokszínű a társadalom, és fontos a **frankofón** (francia nyelvű) kapcsolatrendszer. Párizs túlsúlya miatt a fejlettség a fővároson kívül kevésbé egyenletes.',
        },
        { kind: 'heading', text: 'Németország' },
        {
          kind: 'text',
          text: 'Németország kb. 84 millió lakosú, területe kb. 357 ezer km², fővárosa **Berlin**. Az EU legnagyobb gazdasága és népessége, és Európa vezető ipari hatalma: járműipar (BMW, Mercedes-Benz, Volkswagen), gépgyártás, vegyipar, elektronika; erős exportorientáció. Nagy városok: **Hamburg** (Európa egyik legnagyobb kikötője az Elbán), **München**, **Köln**, **Frankfurt am Main** (pénzügyi központ, az Európai Központi Bank székhelye), **Stuttgart**, **Drezda**, **Lipcse**, **Bréma**, **Rostock** (Balti-tengeri kikötő).',
        },
        {
          kind: 'compare',
          title: 'A keleti és a nyugati országrész eltérő útja',
          columns: ['Nyugat (NSZK)', 'Kelet (NDK)'],
          rows: [
            {
              label: '1949–1990',
              cells: [
                'piacgazdaság, gyors fejlődés, nyugati integráció',
                'tervgazdaság a szovjet blokkban, elmaradottabb termelékenység',
              ],
            },
            {
              label: '1990 után',
              cells: [
                'a költségvetés megterhelése az újraegyesítés finanszírozásával',
                'a régi ipar összeomlása, magas munkanélküliség, elvándorlás nyugatra; a felzárkózás fokozatos (új ipari központok: Lipcse, Drezda)',
              ],
            },
            {
              label: 'Ma',
              cells: [
                'magas jövedelem, erős szolgáltatások',
                'az átlagos jövedelem és a termelékenység még elmarad, kisebb a nagyvállalati központok száma',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A két német állam **újraegyesítése** 1990. október 3-án történt. A volt NDK területén a tervgazdaság vállalatait privatizálták, sok ipari üzem megszűnt, ezért nagy volt a munkanélküliség, és sokan költöztek nyugatra. Nagy összegeket fordítottak az infrastruktúra és a környezet felújítására. A különbség ma kisebb, de megmaradt (jövedelem, népességcsökkenés, egyes térségek elöregedése).',
        },
        { kind: 'heading', text: 'A Ruhr-vidék' },
        {
          kind: 'text',
          text: 'A **Ruhr-vidék** (Duisburg, Essen, Dortmund, Bochum) a Rajna és mellékfolyói mentén a **kőszénre és az acélra** épült, ez volt Európa egyik legnagyobb nehézipari térsége. Az 1950-es évektől a szén és az acél válságba jutott (olcsóbb import, kimerülő telepek, a kőolaj és az újabb energiahordozók). A **szerkezetváltás** során: a bányák bezártak (az utolsó kőszénbánya 2018-ban), az ipart korszerűsítették, új ágazatok (szolgáltatás, logisztika, egyetemek, kutatóintézetek, környezetipar) jelentek meg. A **környezeti átalakulás**: a szennyezett folyót (Emscher) megtisztították, a **barnamezős** ipari területeket parkká, kulturális terekké alakították (Zollverein-bányakomplexum az UNESCO világörökségén, a Ruhr-vidék 2010-ben Európa kulturális fővárosa). Duisburg Európa egyik legnagyobb belvízi kikötője.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: foglalkoztatási szerkezet változása',
          problem:
            'Egy hagyományos iparvidék (kitalált adatok) foglalkoztatási szerkezete: 1960-ban bányászat és kohászat 45%, egyéb ipar 25%, szolgáltatás 30%; ma bányászat és kohászat 3%, egyéb ipar 22%, szolgáltatás 75%. Értelmezd az adatokat!',
          solution:
            'A bányászat és kohászat részesedése $45\\% \\to 3\\%$ (42 százalékpontos csökkenés), a szolgáltatásé $30\\% \\to 75\\%$ (45 százalékpontos növekedés). Az összeg mindkét évben 100%: $45 + 25 + 30 = 100$ és $3 + 22 + 75 = 100$.\n\nEz **szerkezetváltást** (foglalkozási átrétegződést) mutat: a válságágazat helyett szolgáltatások adják a munkahelyek többségét. Ugyanez történt a Ruhr-vidéken: a bányászat megszűnt, a szolgáltatás, a kutatás és az oktatás lett a fő foglalkoztató. A százalékpont és a százalék különbségére figyelj: itt a százalékpont a helyes mértékegység.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A déli tartományok** (Bajorország, Baden-Württemberg) a háború után gyorsabban fejlődtek, mint a hagyományos északi-nyugati iparvidékek: ott nem volt nehézipar-válság, hanem kis- és középvállalatok, autóipar (München, Stuttgart, Ingolstadt), elektronika, gépgyártás, kutatóintézetek és egyetemek, valamint idegenforgalom (Alpok, München). A német nagyvállalatok (Audi Győrben, Mercedes-Benz Kecskeméten, BMW Debrecenben, Opel/Stellantis Szentgotthárdon) jelentős tőkét, munkahelyet és exportot adtak Magyarországnak és a környező országoknak; ezzel nő a függés a német gazdaság helyzetétől.',
        },
        { kind: 'heading', text: 'Benelux államok' },
        {
          kind: 'compare',
          emelt: true,
          title: 'A három ország jellemzői',
          columns: ['Alapadatok', 'Gazdaság, jellemző vonások'],
          rows: [
            {
              label: 'Hollandia',
              cells: [
                'főváros Amszterdam (a kormány székhelye Hága), kb. 18 millió lakos, nagyon sűrűn lakott',
                'Holland-mélyföld, polderek, gátak és deltaművek; Rotterdam (Európa legnagyobb kikötője), Schiphol repülőtér; intenzív mezőgazdaság (virág, zöldség, tej).',
              ],
            },
            {
              label: 'Belgium',
              cells: [
                'főváros Brüsszel (az EU és a NATO székhelye), kb. 12 millió lakos, két nagy nyelvi közösség (holland nyelvű flamand észak, francia nyelvű vallon dél)',
                'Antwerpen kikötője, vegyipar, gyémántkereskedelem; a vallon ipar (szén, acél) hanyatlott, Flandria fejlettebb.',
              ],
            },
            {
              label: 'Luxemburg',
              cells: [
                'főváros Luxembourg, kb. 0,67 millió lakos, nagyhercegség, három hivatalos nyelv',
                'az EU legmagasabb egy főre jutó GDP-jű országa: bank- és pénzügyi szolgáltatások, uniós intézmények (Bíróság), acélipar; sok határ menti ingázó.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **együttműködés okai**: kis területű, a nemzetközi kereskedelemre ráutalt gazdaságok, a Rajna–Maas–Scheldt torkolat kikötői és tranzitszerepe, a háborús tapasztalatok (két világháború), valamint a közös piac szükségessége. A vámunió 1944-ben a számkivetett kormányok megállapodásából indult, 1948-tól működött, és gazdasági unióvá fejlődött (szerződés 1958). A Benelux az európai integráció mintájául szolgált.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Topográfia: városok (London, Birmingham, Manchester, Liverpool, Glasgow, Párizs, Lyon, Marseille, Strasbourg, Amszterdam, Rotterdam, Brüsszel, Luxembourg, Berlin, Hamburg, Frankfurt, Köln, Dortmund, Duisburg, München, Stuttgart, Drezda, Lipcse), tájak (Londoni-medence, Párizsi-medence, Holland-mélyföld, Germán-alföld), folyók (Temze, Szajna, Rajna, Elba).',
            'Országjellemzés: fekvés, természeti adottságok, népesség, gazdaság, nevezetes városok, kapcsolat az EU-val.',
            'Folyamat leírása: a Ruhr-vidék átalakulása (ok, szerkezetváltás, környezeti rehabilitáció).',
            'Szóbeli: Németország mint Európa vezető gazdasága; a keleti és nyugati országrész különbsége.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az Egyesült Királyságot és Nagy-Britanniát, vagy Hollandiát és Belgiumot összekeverni. Az Egyesült Királyságba Észak-Írország is beletartozik, Írország viszont független ország. A „kőszén miatt alakult ki a Ruhr-vidék” mellé a hanyatlás okait is írd: a válság nem csak a szén kimerülése, hanem az olcsóbb import és a szerkezetváltás kényszere.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz-vázlat a Ruhr-vidék átalakulására: (1) kialakulás: szén és vasérc, vasút és vízi út, (2) válság: a szén és az acél versenyképtelensége, munkanélküliség, szennyezés, (3) szerkezetváltás: új ágazatok (szolgáltatás, kutatás, egyetemek), (4) környezeti rehabilitáció: folyó megtisztítása, barnamezős területek parkká alakítása, ipari örökség turisztikai hasznosítása (Zollverein), (5) eredmény és nehézségek: megmaradt a munkanélküliség és a nagy népsűrűség.',
        },
        {
          kind: 'tip',
          text: 'Országjellemzésnél haladj sorban: fekvés, természeti adottságok, népesség, gazdaság, nevezetes városok, kapcsolat az EU-val. Az emelt szinten ehhez jön a gyarmatosítás, a Benelux együttműködés és a német nagyvállalatok magyarországi szerepe.',
        },
      ],
      topicMatch: ['ruhr', 'benelux', '=németország'],
      quiz: [
        {
          question: 'Melyik ország az EU vezető mezőgazdasági termelője?',
          options: ['Hollandia', 'Luxemburg', 'Belgium', 'Franciaország'],
          answer: 3,
          explanation:
            'Franciaország nagy, jó adottságú szántóföldjei és borvidékei miatt az EU legnagyobb agrártermelője.',
        },
        {
          question: 'Mi történt a Ruhr-vidéken a szén és az acél válsága után?',
          options: [
            'új bányákat nyitottak',
            'a térség kiürült',
            'szerkezetváltás: szolgáltatások, kutatás, rehabilitált ipari területek',
            'mezőgazdasági terület lett',
          ],
          answer: 2,
          explanation:
            'A régi iparvidék szolgáltató, kutatási és kulturális központtá alakult, az ipari területeket rehabilitálták.',
        },
        {
          question: 'Mi alapozta meg az Egyesült Királyság ipari forradalmát?',
          options: [
            'a szigetfekvés és az Északi-tengeri kőolaj',
            'a kőszén- és vasérckincs',
            'az Alpok vízereje',
            'a jégkorszaki gleccserek',
          ],
          answer: 1,
          explanation:
            'A kőszén (energia) és a vasérc tette lehetővé a gőzgépet, a vasgyártást és a textilipart. Az Északi-tengeri kőolajat csak az 1970-es évektől termelik.',
        },
        {
          question: 'Mi jellemző a volt NDK területére a német újraegyesítés után?',
          options: [
            'gyors fejlődés, a nyugati tartományokat meghaladó jövedelem',
            'a tervgazdaság fenntartása',
            'a lakosság gyors növekedése',
            'az ipar összeomlása, munkanélküliség és elvándorlás nyugatra',
          ],
          answer: 3,
          explanation:
            'A tervgazdaság vállalatai versenyképtelenek voltak, sok ipari üzem megszűnt, ezért magas volt a munkanélküliség, és sokan költöztek nyugatra.',
        },
        {
          question: 'Melyik államcsoport vámunióval indította az együttműködését 1944–1948 között?',
          options: ['a Benelux államok', 'a V4 országok', 'az Alpok országai', 'a balti államok'],
          answer: 0,
          explanation:
            'Belgium, Hollandia és Luxemburg vámuniója az európai közös piac előfutára volt.',
          emelt: true,
        },
        {
          question: 'Melyik város a világ egyik legnagyobb belvízi kikötője a Ruhr-vidéken?',
          options: ['Essen', 'Duisburg', 'Dortmund', 'Köln'],
          answer: 1,
          explanation:
            'Duisburg a Rajna és a Ruhr találkozásánál fekszik, és Európa egyik legnagyobb belvízi kikötője.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Ruhr-vidék', url: wiki('Ruhr-vidék') },
        { label: 'Wikipédia: Benelux', url: wiki('Benelux') },
        { label: 'Wikipédia: Németország gazdasága', url: wiki('Németország gazdasága') },
      ],
    },
    {
      id: 'europa-alpok-eszak-del',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Az Alpok országai, Észak-Európa és Dél-Európa',
      level: 'kozep',
      requirement: {
        kozep:
          '8.4.2–8.4.3: Az Alpok országai: mutassa be az alpesi országok jellemző vonásait; mondjon példát az országok semlegességből adódó nemzetközi szerepvállalására. Észak-Európa országai: ismertesse az észak-európai országok gazdasági életében szerepet játszó természeti és társadalmi tényezőket; emelje ki a hasonlóságokat és a különbségeket. Dél-Európa országai: mutassa be a mediterrán országok földrajzi jellemzőit; értékelje a tenger és az idegenforgalom szerepét az országok gazdasági életében; mutassa be a történelmi és kulturális örökség szerepét a dél-európai térségben. Olaszország: hasonlítsa össze az ország északi és déli területeinek természeti és társadalmi adottságait, gazdasági fejlettségét.',
        emelt:
          'Igazolja hazánk és Ausztria sokoldalú társadalmi-gazdasági kapcsolatát, annak történelmi gyökereit. Mutassa be az éghajlatváltozás turizmusra gyakorolt hatását. Értelmezze a dél-európai országok gazdasági fejlődését segítő és nehezítő tényezőket.',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Ausztria, Svájc**: magashegyi országok; vízenergia, idegenforgalom (síturizmus, nyári hegyi turizmus), minőségi ipar, Svájcban pénzügyi és gyógyszeripari központok. Mindkettő **semleges**: Bécs és Genf nemzetközi szervezetek székhelye.',
            '**Észak-Európa** (Norvégia, Svédország, Finnország, Dánia, Izland): kis lakosságú, magas életszínvonalú **jóléti államok**; a gazdaságot a természeti kincsek (kőolaj, vasérc, erdő, vízenergia, halászat) és a képzett társadalom alapozza meg.',
            '**Dél-Európa**: mediterrán éghajlat, tagolt partok, hegyek; az **idegenforgalom**, a mezőgazdaság (olajfa, szőlő, citrus) és a kulturális örökség (Róma, Athén, Barcelona) a gazdaság alapja.',
            '**Olaszország**: fejlett **észak** (Pó-alföld, Milánó–Torino–Genova ipari háromszög), elmaradottabb **dél** (Mezzogiorno, Nápoly, Szicília).',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten még',
          items: [
            'Ausztria és Magyarország kapcsolata a közös történelemben (Habsburg Monarchia, 1867 óta Osztrák–Magyar Monarchia) gyökerezik; ma a gazdasági, munkaerő- és határ menti kapcsolat sokoldalú.',
            'Az **éghajlatváltozás** miatt az alpesi síturizmus hóbiztos területei csökkennek; az Alpok turizmusa átalakul.',
            'Dél-Európa fejlődését segíti a turizmus, az EU-támogatás és az adottságok; nehezíti a magas munkanélküliség, az államadósság, az elvándorlás és a térségi különbségek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az Alpok országai: Ausztria és Svájc' },
        {
          kind: 'text',
          text: 'Az **Alpok** Európa legmagasabb hegységrendszere, fiatal gyűrthegység. A **Nyugati-Alpok** magasabbak (Mont Blanc kb. 4800 m), a **Keleti-Alpok** alacsonyabbak (Ausztria legmagasabb csúcsa a Großglockner, 3798 m). A hegység éghajlatában a **függőleges övezetesség** érvényesül: lomberdő, tűlevelű erdő, havasi rét (alpesi legelő), hó- és jégövezet. Az Alpokból ered a Rajna, a Rhône, a Pó és a Duna egyik fő mellékvize (az Inn).',
        },
        {
          kind: 'compare',
          title: 'Ausztria és Svájc összehasonlítása',
          columns: ['Ausztria', 'Svájc'],
          rows: [
            {
              label: 'Főváros, nagyobb városok',
              cells: [
                'Bécs (a Dunán), Graz, Linz, Salzburg',
                'Bern (főváros), Zürich (pénzügyi központ), Genf (nemzetközi szervezetek), Bázel (gyógyszeripar)',
              ],
            },
            {
              label: 'Népesség, terület',
              cells: ['kb. 9 millió fő, kb. 84 ezer km²', 'kb. 9 millió fő, kb. 41 ezer km²'],
            },
            {
              label: 'Természeti adottság',
              cells: [
                'a terület nagy része hegyvidék, a Duna menti síkságok és a Bécsi-medence a gazdasági magterület',
                'Alpok, Svájci-fennsík, Jura; a Rajna és a Rhône forrásvidéke, sok tó (Boden-tó, Genfi-tó)',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'idegenforgalom (téli és nyári), gép- és járműalkatrész-gyártás, vaskohászat (Linz), faipar, vízenergia',
                'precíziós ipar (órák), gyógyszeripar, bank- és biztosítási szektor, gépgyártás, tejtermékek, turizmus',
              ],
            },
            {
              label: 'EU-hoz való viszony',
              cells: [
                'tag 1995 óta, euróövezeti és schengeni ország',
                'nem tag; kétoldalú szerződések rendszerén keresztül kapcsolódik a belső piachoz, schengeni tag',
              ],
            },
            {
              label: 'Semlegesség',
              cells: [
                '1955 óta az alkotmány rögzíti',
                'több száz éve semleges, az 1815-ös bécsi kongresszuson ismerték el; az ENSZ-hez 2002-ben csatlakozott',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **semlegesség** azt jelenti, hogy az ország nem csatlakozik katonai szövetséghez, és nem vesz részt háborúban. Ebből adódik a **nemzetközi szerepvállalás**: közvetítés, béketárgyalások helyszíne, humanitárius munka. **Bécs** az ENSZ egyik székhelye (és az OPEC, a Nemzetközi Atomenergia-ügynökség, az EBESZ székhelye), **Genf** az ENSZ európai központja, az Egészségügyi Világszervezet (WHO), a Nemzetközi Vöröskereszt és a Világkereskedelmi Szervezet (WTO) városa. Az alpesi országok közlekedési szerepe is nagy: a Brenner-, a Szent Gotthárd-hágó és az alagutak (a Gotthárd-bázisalagút kb. 57 km, 2016) az észak–déli forgalom útvonalai.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Ausztria és Magyarország kapcsolata**: a közös államiság (a Habsburg Monarchia, 1867-től Osztrák–Magyar Monarchia) hosszú közös történelmet, kulturális és gazdasági kötődést hozott. Trianon után az **Őrvidék (Burgenland)** Ausztriához került (Sopron és környéke 1921-ben népszavazással maradt Magyarországé). Ma a határ menti együttműködés, a Fertő-tó vidékének közös védelme (Fertő–Hanság Nemzeti Park), a munkavállalás (sok magyar ingázik Ausztriába), az osztrák tulajdonú vállalatok és a kereskedelem fontosak. Bécs és Pozsony közelsége miatt a Bécs–Pozsony–Győr térség közös gazdasági térségként is felfogható.',
        },
        {
          kind: 'map',
          title: 'Ausztria és Magyarország kapcsolati pontjai',
          places: [
            {
              name: 'Bécs',
              lat: 48.21,
              lon: 16.37,
              note: 'Ausztria fővárosa, a Duna mentén; a Bécsi-medencében',
            },
            {
              name: 'Graz',
              lat: 47.07,
              lon: 15.44,
              note: 'Stájerország székhelye, egyetemi és ipari város',
            },
            {
              name: 'Kismarton (Eisenstadt)',
              lat: 47.85,
              lon: 16.53,
              note: 'Burgenland (Őrvidék) székhelye',
            },
            {
              name: 'Sopron',
              lat: 47.68,
              lon: 16.59,
              note: 'a határ magyar oldalán, 1921-es népszavazás',
            },
            {
              name: 'Fertő-tó',
              lat: 47.8,
              lon: 16.75,
              note: 'osztrák–magyar határtó, közös nemzeti park',
            },
            { name: 'Pozsony', lat: 48.15, lon: 17.11, note: 'Bécstől kb. 60 km-re' },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Az éghajlatváltozás hatása a turizmusra**: az Alpok melegszik a világátlagnál gyorsabban. Következmények: a hóhatár felfelé tolódik, a **hóbiztos síterepek** száma csökken, a gleccserek visszahúzódnak, a téli szezon rövidül, nő a műhóhasználat költsége és a környezeti terhelés. A hegyi permafroszt olvadása miatt gyakoribbak a sziklaomlások és a hegyomlások. Az alkalmazkodás: nagyobb magasságú sípályák, nyári és egész éves kínálat (túrázás, kerékpározás, wellness), az energiahatékonyság. Az alacsonyabb hegységekben a téli turizmus ellehetetlenülhet.',
        },
        { kind: 'heading', text: 'Észak-Európa' },
        {
          kind: 'compare',
          title: 'Az észak-európai országok összehasonlítása',
          columns: ['Természeti és gazdasági jellemzők', 'EU-viszony, főváros'],
          rows: [
            {
              label: 'Norvégia',
              cells: [
                'fjordos partok, hegyek; az Északi-tenger kőolaja és földgáza, vízenergia, halászat (lazac), hajózás',
                'nem EU-tag (népszavazásokon elutasították), az Európai Gazdasági Térség tagja; Oslo',
              ],
            },
            {
              label: 'Svédország',
              cells: [
                'erdők, vasérc (Kiruna), faipar, gépipar és járműipar (Volvo, Scania), távközlés (Ericsson), bútor (IKEA)',
                '1995 óta EU-tag, az eurót nem vezette be; Stockholm',
              ],
            },
            {
              label: 'Finnország',
              cells: [
                'Finn-tóvidék (kb. 180 ezer tó), erdőgazdaság, papír- és cellulózipar, elektronika és távközlés',
                '1995 óta EU-tag, euróövezeti ország; Helsinki',
              ],
            },
            {
              label: 'Dánia',
              cells: [
                'alacsony síkság, intenzív mezőgazdaság (sertés, tej), szélenergia (szélturbina-gyártás), hajózás',
                '1973 óta EU-tag, az euró nélkül; Koppenhága',
              ],
            },
            {
              label: 'Izland',
              cells: [
                'Közép-atlanti-hátság vulkáni szigete; geotermikus és vízenergia, halászat, alumíniumkohók, turizmus',
                'nem EU-tag, Európai Gazdasági Térség; Reykjavík',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Hasonlóságok**: kis népesség, nagy terület (kb. 28 millió ember a fenti öt országban), magas életszínvonal és képzettség, **jóléti állam** (magas adók, széles szociális ellátás, esélyegyenlőség), innovatív gazdaság, a megújuló energia nagy szerepe, szigorú környezetvédelem. **Különbségek**: Norvégia a kőolaj- és földgázexportra, Svédország az erdőre, ércre és a gépiparra, Finnország az erdőre és az elektronikára, Dánia a mezőgazdaságra és a szélenergiára, Izland a geotermikus energiára és a halászatra épít. Az EU-hoz való viszonyuk is eltér (tag/nem tag, euró/nem euró). A hideg éghajlatot az **Észak-atlanti-áramlás** enyhíti a norvég partok mentén, ezért a norvég partok kikötői nem fagynak be.',
        },
        { kind: 'heading', text: 'Dél-Európa' },
        {
          kind: 'text',
          text: 'Dél-Európa három nagy félszigete a **Pireneusi- (Ibériai-)**, az **Appennini-** és a **Balkán-félsziget**; ide tartoznak a nagy szigetek is (Szicília, Szardínia, Korzika, Kréta, Ciprus, Málta). A térség **mediterrán éghajlatú**: forró, száraz nyár, enyhe, csapadékos tél. Ez kedvez a szőlőnek, az olajfának, a citrusféléknek és a napsütésnek mint turisztikai erőforrásnak. A hegységek (Pireneusok, Appenninek, Dinári-hegység) a partok közelében magasodnak, ezért a síkságok kicsik (kivétel a Pó-alföld).',
        },
        {
          kind: 'compare',
          title: 'A mediterrán országok gazdasága',
          columns: ['Ország', 'Jellemző ágazatok és nevezetességek'],
          rows: [
            {
              label: 'Spanyolország (Madrid)',
              cells: [
                'világ második legnagyobb idegenforgalmi országa Franciaország mögött (kb. 94 millió külföldi látogató 2024-ben)',
                'Barcelona (Gaudí, kikötő), Madrid; olívaolaj, szőlő, citrus, zöldség, járműgyártás.',
              ],
            },
            {
              label: 'Portugália (Lisszabon)',
              cells: [
                'az Atlanti-óceán partján, a Tajo torkolatánál',
                'parafa, bor, halászat, turizmus.',
              ],
            },
            {
              label: 'Olaszország (Róma)',
              cells: ['lásd alább', 'gép-, divat- és élelmiszeripar, turizmus.'],
            },
            {
              label: 'Görögország (Athén)',
              cells: [
                'félsziget- és szigetország',
                'idegenforgalom, kereskedelmi hajózás (a világ egyik legnagyobb kereskedelmi flottája), mezőgazdaság (olívaolaj, gyapot, déli gyümölcs); Athén.',
              ],
            },
            {
              label: 'Málta, Ciprus',
              cells: [
                'szigetországok, 2004 óta EU-tagok',
                'idegenforgalom, pénzügyi és hajózási szolgáltatások.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **tenger szerepe**: a strandturizmus (nap, tenger, homok), a vitorlázás, a halászat, a kikötők (Barcelona, Genova, Marseille, Athén/Pireusz) és a kereskedelmi hajózás. A **történelmi és kulturális örökség**: ókori görög és római emlékek (Akropolisz, Colosseum, Pompeji), a középkori városok, a reneszánsz és a barokk (Firenze, Róma, Velence), Gaudí épületei Barcelonában; az **UNESCO-világörökségi** helyek, múzeumok és fesztiválok. A turizmus jelentős bevétel és munkahely, de **szezonális**, a tömeges turizmus terheli a környezetet és a vízkészletet (**túlturizmus**: Velence, Dubrovnik, Barcelona).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: az idegenforgalom jelentősége',
          problem:
            'Egy (kitalált) mediterrán országnak 11 millió lakosa van. Évente 33 millió külföldi turista érkezik, az idegenforgalmi bevétel 22 milliárd euró, a GDP 220 milliárd euró. Hány turista jut egy lakosra? A GDP hány százaléka az idegenforgalmi bevétel?',
          solution:
            'Turista/lakos: $33 / 11 = 3$, vagyis három látogató jut egy lakosra.\n\nA bevétel aránya: $22 / 220 = 0{,}1$, azaz a GDP **10%-a**. Ez a gazdaság erős turisztikai függését mutatja: a szezonalitás, a külső események (járvány, válság) érzékenyen érintik az országot.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Dél-Európa fejlődését segíti**: a napfényes éghajlat és a tenger (turizmus), az EU-támogatások, a kulturális örökség, a kedvező közlekedési fekvés (hajózási útvonalak), a megújuló energia (nap) lehetősége. **Nehezíti**: a központi térségektől való távolság, a hegyvidéki terep, a szárazság és vízhiány, az elaprózódott mezőgazdaság, a nagy fiatalkori munkanélküliség, a magas államadósság (a 2008-as válság után Görögországban, Portugáliában, Spanyolországban és Olaszországban megszorítások), az elvándorlás és az elöregedés, a kevésbé fejlett déli területek (Mezzogiorno).',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Stromboli, Szardínia, Korzika',
              text: 'A Stromboli az Eolie-szigetek folyamatosan működő tűzhányója; Szardínia (Olaszország) és Korzika (Franciaország) a Földközi-tenger nagy szigetei.',
              emelt: true,
            },
            {
              term: 'Szent Gotthárd-hágó',
              text: 'Alpesi átjáró Svájcban, az észak–déli forgalom egyik fő útvonala.',
              emelt: true,
            },
            {
              term: 'Sevilla, Bilbao, Thesszaloniki (Szaloniki), Göteborg',
              text: 'Sevilla és Bilbao spanyol, Thesszaloniki görög, Göteborg svéd gazdasági központ.',
              emelt: true,
            },
            {
              term: 'Ebro',
              text: 'A Pireneusi-félsziget északkeleti folyója, a Földközi-tengerbe ömlik.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'Olaszország: észak és dél' },
        {
          kind: 'compare',
          title: 'Észak- és Dél-Olaszország összehasonlítása',
          columns: ['Észak', 'Dél (Mezzogiorno)'],
          rows: [
            {
              label: 'Felszín, éghajlat',
              cells: [
                'Alpok és a Pó-alföld; párás, szárazföldibb éghajlat (hideg tél, forró nyár)',
                'Appenninek és szigetek (Szicília); mediterrán éghajlat, száraz nyár, gyakori aszály',
              ],
            },
            {
              label: 'Mezőgazdaság',
              cells: [
                'Európa egyik leggazdagabb termőterülete: rizs, kukorica, búza, szarvasmarha, sertés',
                'olajfa, szőlő, citrus, durumbúza (tészta), paradicsom; kisbirtokok',
              ],
            },
            {
              label: 'Ipar',
              cells: [
                'ipari háromszög: Milánó (pénzügy, divat), Torino (járműipar), Genova (kikötő); Veneto és Emilia-Romagna: kis- és középvállalatok',
                'kevesebb nagy üzem, hagyományos ipar (Nápoly, Taranto acélmű), szolgáltatás',
              ],
            },
            {
              label: 'Társadalom',
              cells: [
                'magas jövedelem, alacsony munkanélküliség, bevándorlási célterület',
                'kisebb jövedelem, magas munkanélküliség, elvándorlás északra és külföldre, a szervezett bűnözés (maffia) hátráltatja a fejlődést',
              ],
            },
            {
              label: 'Közlekedés',
              cells: [
                'sűrű autópálya- és vasúthálózat, közel Nyugat-Európa piacaihoz',
                'gyengébb infrastruktúra, távolabb a nagy piacoktól',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az olasz állam a második világháború után (1950-ben alapított Dél-olasz Fejlesztési Alap) iparosítással próbálta felzárkóztatni a délt, de a különbség nem szűnt meg. A déli régiók egy főre jutó GDP-je az északi régiókénál kevesebb mint kétharmad. **Fővárosa Róma** (a Vatikán a városban fekvő, önálló városállam). A **Vezúv** (Nápoly mellett) és az **Etna** (Szicília) működő tűzhányók, a térségben földrengések is gyakoriak.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: észak–dél különbség mérése',
          problem:
            'Észak-Olaszországban az egy főre jutó GDP kb. 36 000 euró, a déli régiókban kb. 21 000 euró (kerekített, szemléltető adatok). Az északi érték hány százaléka a déli? Mekkora a különbség?',
          solution:
            'A déli érték az északinak $21\\,000 / 36\\,000 \\approx 0{,}583$, azaz kb. **58%**-a; az északi érték a délinek kb. $36\\,000 / 21\\,000 \\approx 1{,}71$-szerese. Az abszolút különbség $36\\,000 - 21\\,000 = 15\\,000$ euró fejenként. Az eredmény egyetlen tényezőből nem magyarázható: az ipar, az infrastruktúra, az elvándorlás és a történelmi háttér együtt ad magyarázatot.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Topográfia: Alpok (Keleti-, Nyugati-Alpok), Mont Blanc, Bécs, Graz, Linz, Salzburg, Bern, Genf, Zürich, Boden-tó, Genfi-tó; Oslo, Stockholm, Helsinki, Koppenhága, Reykjavík, Skandináv-félsziget, Izland; Madrid, Barcelona, Lisszabon, Róma, Milánó, Torino, Genova, Nápoly, Velence, Athén, Szicília, Etna, Vezúv, Pó-alföld.',
            'Összehasonlítás: Észak- és Dél-Olaszország (felszín, éghajlat, mezőgazdaság, ipar, jövedelem).',
            'Hasonlóságok és különbségek az északi országok gazdaságában (táblázat kitöltése).',
            'Szóbeli: a tenger és az idegenforgalom szerepe a mediterrán gazdaságban; az Alpok országainak jellemzői.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Svájc EU-tagságát feltételezni (nem tag), vagy Norvégiát EU-tagnak írni. Másik gyakori tévedés: az északi országok gazdaságát egységesnek leírni, holott Norvégia kőolajra, Svédország erdőre és ércre, Dánia mezőgazdaságra épül. A semlegesség nem „semmit sem csinálás”: aktív diplomáciai szerepet jelent.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz-vázlat Olaszország észak–dél különbségére: (1) természeti adottság (alföld vs hegység, aszály), (2) gazdaság (ipari háromszög vs mezőgazdaság), (3) társadalom (jövedelem, munkanélküliség, elvándorlás), (4) következmény és a kiegyenlítési kísérletek. Mindig hozz két-két konkrét példát (Milánó/Torino, Nápoly/Szicília).',
        },
        {
          kind: 'tip',
          text: 'Az éghajlatváltozás-turizmus témánál (emelt) mindig írj okot, következményt és alkalmazkodást: melegedés → kevesebb hó → rövidebb szezon → nyári és egész éves kínálat.',
        },
      ],
      topicMatch: ['=ausztria', 'alpok', 'svájc', 'olaszország', 'földközi-tenger'],
      quiz: [
        {
          question:
            'Melyik ország bevételeinek fontos forrása az északi-tengeri kőolaj és földgáz?',
          options: ['Svédország', 'Finnország', 'Norvégia', 'Svájc'],
          answer: 2,
          explanation: 'Norvégia az északi-tengeri mezőkből jelentős bevételt szerez.',
        },
        {
          question: 'Mi jellemző Olaszország gazdaságára?',
          options: [
            'egyenletesen fejlett',
            'fejlett észak, elmaradottabb dél',
            'csak mezőgazdasága van',
            'fejlett dél, elmaradott észak',
          ],
          answer: 1,
          explanation: 'Az ipar és a jólét az északi területeken (Pó-alföld) koncentrálódik.',
        },
        {
          question: 'Melyik város az Egészségügyi Világszervezet (WHO) székhelye?',
          options: ['Bécs', 'Bern', 'Zürich', 'Genf'],
          answer: 3,
          explanation:
            'A WHO Genfben székel. Bécs más szervezeteknek (például az OPEC-nek) ad otthont, Bern Svájc fővárosa, Zürich a pénzügyi központ.',
        },
        {
          question: 'Melyik ország az Alpok országai közül uniós tag?',
          options: ['Ausztria', 'Svájc', 'mindkettő', 'egyik sem'],
          answer: 0,
          explanation: 'Ausztria 1995 óta tag, Svájc nem az EU tagja.',
        },
        {
          question: 'Mi az éghajlatváltozás egyik hatása az alpesi turizmusra?',
          options: [
            'a hóbiztos síterepek számának növekedése',
            'a téli szezon rövidülése, a hóbiztos síterepek csökkenése',
            'a gleccserek növekedése',
            'a nyári turizmus teljes megszűnése',
          ],
          answer: 1,
          explanation:
            'A melegedés miatt feljebb tolódik a hóhatár, kevesebb a hó az alacsonyabb pályákon, ezért a téli szezon rövidebb.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Svájc', url: wiki('Svájc') },
        { label: 'Wikipédia: Olaszország gazdasága', url: wiki('Olaszország gazdasága') },
        { label: 'Wikipédia: Skandinávia', url: wiki('Észak-Európa') },
      ],
    },
    {
      id: 'europa-tersegei',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Kelet-Közép-, Kelet- és Délkelet-Európa, Oroszország',
      level: 'kozep',
      requirement: {
        kozep:
          '8.4.4–8.4.5: A Visegrádi Együttműködés országai (Csehország, Lengyelország, Szlovákia) és keleti szomszédaink (Románia, Ukrajna): ismertesse a magas- és középhegységi tájak, a medencék, a tengerpart és a síkságok természeti és társadalmi-gazdasági jellemzőit; mondjon példát magyar vonatkozású kulturális központokra. Délszláv államok: sorolja fel az egykori Jugoszlávia utódállamait, jellemezze azok legfontosabb természeti és gazdasági adottságait, az Európai Unióhoz fűződő kapcsolatukat; mutassa be a dalmáciai idegenforgalom szerepét; mondjon példát magyar vonatkozású kulturális központokra. Oroszország: mutassa be világgazdasági szerepét; hasonlítsa össze az ország európai és ázsiai részének jellemzőit.',
        emelt:
          'A V4 országai: ismertesse az országcsoport társadalmi-gazdasági fejlődésének történelmi vonatkozásait. Románia, Ukrajna: mutassa be a társadalmi-gazdasági fejlődést elősegítő és hátráltató tényezőket. Délszláv államok: ismertesse az egykori Jugoszláviát megosztó társadalmi és kulturális különbségeket, a térség nemzetiségeinek területi elhelyezkedését tematikus térképek segítségével. Oroszország: ismertesse az ország társadalmi-gazdasági fejlődésének történelmi vonatkozásait, energiagazdaságának jellemzőit, az energiatermelés környezeti következményeit.',
      },
      minutes: 22,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**V4** (Magyarország, Csehország, Lengyelország, Szlovákia; 2004 óta mind EU-tag): Csehország járműipara és gépgyártása (Prága, Brno, Ostrava, Plzeň), Lengyelország kőszene (Szilézia, Katowice) és nagy népessége, Szlovákia autógyárai (Pozsony, Kassa vidéke).',
            '**Románia**: a Kárpátok íve övezi az Erdélyi-medencét, délen a Román-alföld, keleten a Duna-delta; kőolaj (Ploieşti), Constanţa kikötő; 2007 óta EU-tag. **Ukrajna**: termékeny csernozjom talaj (gabona, napraforgó), Donyec-medence (kőszén, vas), Kijev, Odessza; 2022-ben EU-tagjelölt lett.',
            'A volt **Jugoszlávia** utódállamai: Szlovénia, Horvátország, Bosznia-Hercegovina, Szerbia, Montenegró, Észak-Macedónia és Koszovó. EU-tag Szlovénia (2004) és Horvátország (2013). **Dalmácia** (Adriai-tenger partja) a horvát idegenforgalom központja.',
            '**Oroszország**: a világ legnagyobb területű országa, nyersanyag-, kőolaj- és földgázexportőr. Az **európai részen** él a népesség nagy többsége; az **ázsiai rész** (Szibéria) hatalmas, ritkán lakott, nyersanyagban gazdag.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A Visegrádi Együttműködés országai' },
        {
          kind: 'text',
          text: 'A **Visegrádi Együttműködést** 1991-ben Magyarország, Csehszlovákia és Lengyelország alapította (a magyarországi Visegrádon), 1993 óta a csehszlovák utódállamok miatt négyen vannak: Csehország, Lengyelország, Szlovákia és Magyarország (V4). Mind a négy ország 2004-ben lett EU-tag. A közös érdekek: az EU-n belüli érdekképviselet, a közlekedési és energiahálózatok összekapcsolása, a kulturális együttműködés.',
        },
        {
          kind: 'compare',
          title: 'A V4 országai',
          columns: ['Természeti adottságok', 'Társadalmi-gazdasági jellemzők'],
          rows: [
            {
              label: 'Csehország (Prága)',
              cells: [
                'a Cseh-medencét középhegységek (Szudéták, Érchegység) veszik körül; a Morva-medence délkeleten; Elba és Moldva (Vltava)',
                'kb. 10,9 millió lakos; erős járműipar (Škoda), gép- és üvegipar, sör; Prága (turizmus), Brno (gépipar, vásárváros), Ostrava (hagyományos nehézipar, szén és acél), Plzeň (sör, gépgyártás), Karlovy Vary (gyógyfürdő); EU-tag, az eurót nem vezette be.',
              ],
            },
            {
              label: 'Lengyelország (Varsó)',
              cells: [
                'Lengyel-alföld, Lengyel-tóhátság (északon, jégkorszaki tavak), Lengyel-középhegység, Szilézia (kőszénmedence a Szudéták előterében); a Visztula és az Odera a Balti-tengerbe ömlik; a Balti-tenger partján Gdańsk',
                'a V4 legnagyobb országa (kb. 37–38 millió lakos); kőszén, barnaszén és réz; a villamosenergia nagy részét még szénből állítja elő; autóipar, gépipar, élelmiszeripar, mezőgazdaság (rozs, burgonya, cukorrépa); városok: Varsó, Krakkó (történelmi központ, turizmus), Gdańsk (kikötő, hajógyár), Katowice (Felső-Szilézia, bányászat).',
              ],
            },
            {
              label: 'Szlovákia (Pozsony)',
              cells: [
                'a Kárpátok északnyugati íve (Északnyugati-Kárpátok, Magas-Tátra), délen a Kárpát-medence síksága, a Csallóköz; Duna, Vág',
                'kb. 5,4 millió lakos; Pozsony a Duna mentén Bécs közelében; az ipart a külföldi tőkéből épült autógyárak (Pozsony, Nagyszombat, Zsolna, Nyitra) és az elektronikai üzemek határozzák meg, Kassa vas- és acélipari központ; 2009 óta az euróövezet tagja.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Magas-Tátra**: a Kárpátok legmagasabb része, a lengyel–szlovák határon (Gerlachfalvi-csúcs, 2655 m), alpesi jellegű, gleccservájta völgyekkel és tavakkal, turizmus. **Csallóköz**: a Duna és a Kis-Duna közötti, a Duna hordalékából épült sík terület (Európa egyik legnagyobb folyami szigete), jó termőföld. **Szilézia**: a Szudéták és a Kárpátok között fekvő iparvidék, kőszén, Katowice és Ostrava körül (Felső-Szilézia). A V4-országok mezőgazdasága: búza, rozs, cukorrépa, burgonya; a tengerpart (Lengyelország) halászatot és kikötői forgalmat ad.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A történelmi vonatkozások**: a térség a 19. századig a Habsburg Birodalomhoz, Lengyelország felosztott területei (1795-től) három nagyhatalomhoz tartozott. 1918-ban újjáalakult Lengyelország és létrejött Csehszlovákia; a második világháború után a Szovjetunió befolyási övezetébe kerültek: **tervgazdaság**, nehézipar-központú iparosítás (Szilézia, Ostrava, Kassa), a mezőgazdaság kollektivizálása. 1989–1990 körül **rendszerváltás**: privatizáció, külföldi (főleg német) tőke, az autóipar növekedése, majd az EU-csatlakozás 2004-ben. 1993-ban Csehszlovákia békésen kettévált. A fejlődést segítette a nyugat-európai piacokhoz való közelség, a képzett munkaerő, a külföldi tőke; hátráltatta a nehézipar elavult szerkezete, a környezetszennyezés, az elvándorlás és a függés a nyugati (különösen a német) autóipartól.',
        },
        { kind: 'heading', text: 'Keleti szomszédaink: Románia és Ukrajna' },
        {
          kind: 'compare',
          title: 'Románia',
          columns: ['Adottságok', 'Jellemzők'],
          rows: [
            {
              label: 'Felszín',
              cells: [
                'a Kárpátok íve (Keleti-, Déli-Kárpátok, Erdélyi-szigethegység, Hargita), az Erdélyi-medence, a Román-alföld (Havasalföld), a Duna-delta',
                'A Kárpátok hegyei fogják közre az Erdélyi-medencét; a Déli-Kárpátokban van az ország legmagasabb csúcsa (Moldoveanu, kb. 2544 m).',
              ],
            },
            {
              label: 'Vizek',
              cells: [
                'a Duna a déli határfolyó; Olt, Maros; Duna-delta; Fekete-tenger partja (Constanţa)',
                'Vaskapu: szurdok és vízerőmű a Dunán; Gyilkos-tó (hegyomlás torlaszolta tó), Szent Anna-tó (kráter) a Hargitán; a Duna-delta természetvédelmi terület és a madárvilág otthona.',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'kőolaj és földgáz (Ploieşti), kőszén, só',
                'kőolaj-finomítás, gépipar, autóipar (Dacia), élelmiszeripar, textil; mezőgazdaság (búza, kukorica, napraforgó, szőlő); informatika (Kolozsvár, Bukarest). Nagyvárosok: Bukarest, Kolozsvár, Brassó, Temesvár.',
              ],
            },
            {
              label: 'EU-viszony',
              cells: [
                'EU-tag 2007 óta',
                'euróövezeten kívül; 2025 óta teljes jogú schengeni tag (a szárazföldi határellenőrzés is megszűnt).',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Ukrajna',
          columns: ['Adottságok', 'Jellemzők'],
          rows: [
            {
              label: 'Felszín, éghajlat',
              cells: [
                'a Kelet-európai-síkság déli része, a Kárpátok északkeleti ágai (Kárpátalja), a Krím-félsziget',
                'mérsékelt övi szárazföldi éghajlat, délen sztyepp; a csernozjom talaj Európa egyik legtermékenyebb földje.',
              ],
            },
            {
              label: 'Vizek',
              cells: [
                'Dnyeper (Kijev), Fekete-tenger, Azovi-tenger, Duna alsó szakasza',
                'a Dnyeper vízerőművei; Odessza a Fekete-tenger egyik legnagyobb kikötője.',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'gabona és napraforgó (a világ élelmiszerpiacán fontos), kőszén és vasérc, vas- és acélipar',
                'Donyec-medence (Doneck): a hagyományos nehézipar központja, Dnyeper-vidék (gépgyártás, kohászat); Kijev a főváros és szolgáltatási központ; Csernobil az 1986-os atomerőmű-baleset helyszíne (zárt zóna).',
              ],
            },
            {
              label: 'Mai helyzet',
              cells: [
                'a Krím-félszigetet Oroszország 2014-ben annektálta (a nemzetközi közösség nagy része ezt nem ismeri el), 2022-ben az orosz támadás háborút hozott',
                '2022-ben EU-tagjelölti státuszt kapott; a háború súlyos károkat okoz a gazdaságban, a népességben és az infrastruktúrában.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A fejlődést segítő tényezők Romániában és Ukrajnában**: nagy termőterület és természeti erőforrás (olaj, gáz, szén, érc, termőföld), olcsó és képzett munkaerő, a kikötők a Fekete-tengeren, az EU-források és a külföldi tőke (Románia). **Hátráltató tényezők**: a tervgazdaság öröksége (elavult ipar), a korrupció és a gyenge intézmények, az elvándorlás, a területi különbségek (a fővárosi térség és a kelet-romániai megyék között), a környezetszennyezés, Ukrajnában a 2014-től tartó katonai konfliktus és az orosz agresszió.',
        },
        {
          kind: 'map',
          title: 'Magyar vonatkozású kulturális központok a szomszédos országokban',
          places: [
            {
              name: 'Pozsony',
              lat: 48.15,
              lon: 17.11,
              note: 'Felvidék; koronázóváros 1563–1830, a pozsonyi országgyűlések',
            },
            {
              name: 'Révkomárom',
              lat: 47.76,
              lon: 18.13,
              note: 'Felvidék; a Duna menti magyar nyelvterület központja',
            },
            {
              name: 'Kassa',
              lat: 48.72,
              lon: 21.26,
              note: 'Felvidék; Szent Erzsébet-dóm, II. Rákóczi Ferenc és társai hamvainak nyughelye',
            },
            {
              name: 'Ungvár',
              lat: 48.62,
              lon: 22.3,
              note: 'Kárpátalja; megyeszékhely, magyar kulturális élet',
            },
            {
              name: 'Munkács',
              lat: 48.44,
              lon: 22.72,
              note: 'Kárpátalja; vár, II. Rákóczi Ferenc és Zrínyi Ilona',
            },
            {
              name: 'Beregszász',
              lat: 48.2,
              lon: 22.64,
              note: 'Kárpátalja; magyar többségű város, II. Rákóczi Ferenc Kárpátaljai Magyar Főiskola',
            },
            {
              name: 'Kolozsvár',
              lat: 46.77,
              lon: 23.59,
              note: 'Erdély; Mátyás király szülővárosa, Babeș–Bolyai Egyetem',
            },
            {
              name: 'Nagyvárad',
              lat: 47.05,
              lon: 21.92,
              note: 'Partium; Szent László, a Körös-vidék kulturális központja',
            },
            {
              name: 'Marosvásárhely',
              lat: 46.54,
              lon: 24.56,
              note: 'Székelyföld; Teleki Téka (Bolyai-könyvtár), Kultúrpalota',
            },
            {
              name: 'Csíkszereda',
              lat: 46.36,
              lon: 25.8,
              note: 'Székelyföld; Hargita megye székhelye',
            },
            {
              name: 'Székelyudvarhely',
              lat: 46.3,
              lon: 25.29,
              note: 'Székelyföld; magyar többségű város',
            },
            { name: 'Brassó', lat: 45.65, lon: 25.6, note: 'Erdély; Barcaság, a Fekete templom' },
            {
              name: 'Temesvár',
              lat: 45.75,
              lon: 21.23,
              note: 'Bánát; az 1989-es romániai forradalom kezdete',
            },
            {
              name: 'Arad',
              lat: 46.18,
              lon: 21.32,
              note: 'Partium; az 1849-es aradi vértanúk városa',
            },
            {
              name: 'Szabadka',
              lat: 46.1,
              lon: 19.67,
              note: 'Vajdaság; szecessziós városháza, magyar kulturális központ',
            },
            {
              name: 'Újvidék',
              lat: 45.25,
              lon: 19.84,
              note: 'Vajdaság; a Duna mellett, magyar oktatási és kulturális élet',
            },
            {
              name: 'Eszék',
              lat: 45.55,
              lon: 18.69,
              note: 'Szlavónia, a Dráva mellett; Baranya közelében',
            },
            {
              name: 'Zágráb',
              lat: 45.81,
              lon: 15.98,
              note: 'Horvátország fővárosa; 1102-től magyar–horvát perszonálunió, 1868 horvát–magyar kiegyezés',
            },
          ],
        },
        {
          kind: 'map',
          title: 'Természeti és gazdasági pontok a Kárpátok körül',
          places: [
            {
              name: 'Magas-Tátra',
              lat: 49.18,
              lon: 20.09,
              note: 'a Kárpátok legmagasabb hegysége',
            },
            {
              name: 'Csallóköz',
              lat: 47.85,
              lon: 17.6,
              note: 'a Duna szigete Pozsony és Komárom között',
            },
            { name: 'Gyilkos-tó', lat: 46.79, lon: 25.8, note: 'Keleti-Kárpátok' },
            { name: 'Szent Anna-tó', lat: 46.13, lon: 25.89, note: 'vulkáni kráter, Székelyföld' },
            { name: 'Hargita', lat: 46.4, lon: 25.65, note: 'kialudt vulkáni hegység' },
            {
              name: 'Vaskapu',
              lat: 44.67,
              lon: 22.52,
              note: 'a Duna szurdoka a Déli-Kárpátok és a Balkán között',
            },
            { name: 'Ploieşti', lat: 44.94, lon: 26.03, note: 'kőolaj-finomítás' },
            { name: 'Belgrád', lat: 44.82, lon: 20.46, note: 'a Duna és a Száva összefolyásánál' },
            {
              name: 'Poprádi-tó',
              lat: 49.15,
              lon: 20.07,
              note: 'a Magas-Tátra gleccsertava',
              emelt: true,
            },
            {
              name: 'Vereckei-hágó',
              lat: 48.77,
              lon: 23.03,
              note: 'az Északkeleti-Kárpátok átjárója, a honfoglalás hagyományos útja',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A délszláv államok' },
        {
          kind: 'compare',
          title: 'Az egykori Jugoszlávia utódállamai',
          columns: ['Főváros, adottságok', 'Gazdaság, EU-viszony'],
          rows: [
            {
              label: 'Szlovénia',
              cells: [
                'Ljubljana; Júliai-Alpok (Triglav), karsztvidék, rövid adriai partszakasz (Koper)',
                'a legfejlettebb utódállam; autóipar, gyógyszeripar; EU-tag 2004, euró 2007 óta. Muravidék (Lendva) magyar kisebbsége.',
              ],
            },
            {
              label: 'Horvátország',
              cells: [
                'Zágráb; Dalmácia (Split, Dubrovnik), szigetek, Dinári-hegység, Szlavónia (Eszék, Száva, Dráva)',
                'turizmus a GDP jelentős része; hajógyártás; EU-tag 2013, euró és Schengen 2023 óta.',
              ],
            },
            {
              label: 'Bosznia-Hercegovina',
              cells: [
                'Szarajevó; Dinári-hegység, Száva völgye',
                'a háború (1992–1995) után két entitás és Brčko kerület; gyenge gazdaság; 2022 óta EU-tagjelölt.',
              ],
            },
            {
              label: 'Szerbia',
              cells: [
                'Belgrád (a Duna és a Száva összefolyása); Vajdaság (Újvidék, Szabadka; Pannon-síkság), a Dunán a Vaskapu',
                'mezőgazdaság (búza, kukorica, napraforgó), autóipar, bányászat; EU-tagjelölt; a vajdasági magyarság kulturális központjai Újvidék és Szabadka.',
              ],
            },
            {
              label: 'Montenegró',
              cells: [
                'Podgorica; hegyvidék és adriai tengerpart',
                'turizmus; 2006 óta független, NATO-tag, EU-tagjelölt.',
              ],
            },
            {
              label: 'Észak-Macedónia',
              cells: [
                'Skopje; Vardar völgye, hegyvidék',
                'mezőgazdaság, ásványkincs; EU-tagjelölt, NATO-tag.',
              ],
            },
            {
              label: 'Koszovó',
              cells: [
                'Priština; hegyekkel övezett medencék',
                '2008-ban kiáltotta ki függetlenségét; Szerbia és több állam nem ismeri el; az EU-hoz asszociációs kapcsolat fűzi.',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A dalmáciai idegenforgalom' },
        {
          kind: 'text',
          text: '**Dalmácia** az Adriai-tenger keleti partvidéke Horvátországban. A Dinári-hegység mészkőhegységei közvetlenül a tengerig érnek, a part rendkívül tagolt, több száz sziget (Hvar, Korčula, Brač) szegélyezi. A kedvező mediterrán éghajlat, a tiszta tenger, a történelmi városok (**Dubrovnik**, **Split** a római Diocletianus-palotával), a nemzeti parkok és a viszonylag jó megközelíthetőség miatt a horvát idegenforgalom központja. A turizmus a GDP jelentős részét adja, sok munkahelyet teremt, de **szezonális** (a nyári hónapokra koncentrálódik), a tömegturizmus terheli a környezetet, és a kikötővárosokban (Dubrovnik) szűkíti a lakosok életterét.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Mi osztotta meg Jugoszláviát?',
          columns: ['Különbség', 'Példa, következmény'],
          rows: [
            {
              label: 'Vallás',
              cells: [
                'katolikus (szlovének, horvátok), ortodox (szerbek, montenegróiak, macedónok), muszlim (bosnyákok, albánok)',
                'a háborúkban a vallási-nemzeti határvonalak fontos szerepet játszottak, Bosznia-Hercegovinában vegyes lakosság él.',
              ],
            },
            {
              label: 'Történelmi örökség',
              cells: [
                'az északi területek a Habsburg Monarchiához, a déliek az Oszmán Birodalomhoz tartoztak',
                'eltérő fejlettség: az észak (Szlovénia, Horvátország) fejlettebb, a déli területek elmaradottabbak.',
              ],
            },
            {
              label: 'Írás és nyelv',
              cells: [
                'latin betűs írás (szlovén, horvát), cirill (szerb, macedón), albán nyelv Koszovóban',
                'a nyelvi-nemzeti identitás megerősödése a föderáció gyengülésekor.',
              ],
            },
            {
              label: 'Nemzetiségek elhelyezkedése',
              cells: [
                'kevert területek: Bosznia-Hercegovina, Koszovó (albán többség), Vajdaság (magyarok és mások), Horvátország egyes vidékei',
                'a függetlenedések (1991–1992, 2006, 2008) a határok és a kisebbségek kérdését vetették fel; ezek háborúkhoz vezettek (Horvátország 1991–1995, Bosznia-Hercegovina 1992–1995, Koszovó 1998–1999).',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Jugoszlávia története**: 1918-ban létrejött a Szerb–Horvát–Szlovén Királyság (1929-től Jugoszlávia). A második világháború után Tito vezetésével szocialista szövetségi állam lett hat köztársasággal (Szlovénia, Horvátország, Bosznia-Hercegovina, Szerbia, Montenegró, Macedónia) és két szerbiai autonóm tartománnyal (Vajdaság, Koszovó). Tito halála (1980) után a gazdasági válság és a nemzeti ellentétek erősödtek; 1991–1992-ben Szlovénia, Horvátország, Macedónia és Bosznia-Hercegovina kiválásával az állam felbomlott.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Bulgária',
              text: 'Fővárosa Szófia, a Balkán-hegység és a Fekete-tenger partja. 2007 óta EU-tag; az euróövezet tagja 2026. január 1-jétől.',
            },
            {
              term: 'Balti államok (Észtország, Lettország, Litvánia)',
              text: 'Fővárosaik Tallinn, Riga és Vilnius, a Balti-tenger partján. 2004 óta EU-tagok, euróövezeti országok (Észtország 2011, Lettország 2014, Litvánia 2015).',
            },
          ],
        },
        { kind: 'heading', text: 'Oroszország' },
        {
          kind: 'text',
          text: 'Oroszország a világ legnagyobb területű országa (kb. 17,1 millió km²), lakossága kb. 146 millió fő. Az Urál-hegység és az Urál folyó jelöli az európai és ázsiai rész határát. **Városok**: Moszkva (főváros, a Moszkva folyó mellett, Európa legnagyobb városa), Szentpétervár (1703-ban Nagy Péter alapította, a Néva torkolatánál), Murmanszk (jégmentes északi kikötő a Barents-tengeren), Volgográd (a Volgán, a második világháborús sztálingrádi csata helyszíne), Nyizsnyij Novgorod (emelt; a Volga és az Oka összefolyásánál).',
        },
        {
          kind: 'compare',
          title: 'Európai és ázsiai rész összehasonlítása',
          columns: ['Európai rész', 'Ázsiai rész (Szibéria, Távol-Kelet)'],
          rows: [
            {
              label: 'Terület, népesség',
              cells: [
                'a terület kb. egynegyede, a népesség kb. háromnegyede',
                'a terület kb. háromnegyede, a népesség kb. egynegyede',
              ],
            },
            {
              label: 'Felszín',
              cells: [
                'Kelet-európai-síkság, Volga',
                'Nyugat-szibériai-alföld, Közép-szibériai-fennsík, hegységek a keleti részen',
              ],
            },
            {
              label: 'Éghajlat',
              cells: [
                'mérsékelt övi szárazföldi, északon tundra és tajga',
                'szélsőségesen szárazföldi, hosszú, nagyon hideg tél, kiterjedt örök fagy (permafroszt), tajga',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'feldolgozóipar (gépipar, járműipar, vegyipar), szolgáltatás, mezőgazdaság (búza: déli sávban)',
                'nyersanyag-kitermelés: kőolaj és földgáz (Nyugat-Szibéria), szén (Kuznyecki-medence), fa, arany, gyémánt (Jakutföld), nikkel (Norilszk)',
              ],
            },
            {
              label: 'Közlekedés',
              cells: [
                'sűrű vasút- és úthálózat, Moszkva a csomópont',
                'ritka hálózat, a Transzszibériai vasút (kb. 9300 km, Moszkva–Vlagyivosztok), csővezetékek, folyók',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: népsűrűség európai és ázsiai részen',
          problem:
            'Oroszország területe kb. 17,1 millió km², lakossága kb. 146 millió fő. A terület 23%-a európai, a lakosság 75%-a él az európai részen (kerekített adatok). Mekkora a népsűrűség az európai részen, az ázsiai részen és az ország egészében?',
          solution:
            'Európai rész: terület $0{,}23 \\cdot 17{,}1 \\approx 3{,}93$ millió km², népesség $0{,}75 \\cdot 146 = 109{,}5$ millió fő, így népsűrűség $109{,}5 / 3{,}93 \\approx 28$ fő/km².\n\nÁzsiai rész: terület $17{,}1 - 3{,}93 \\approx 13{,}17$ millió km², népesség $146 - 109{,}5 = 36{,}5$ millió fő, népsűrűség $36{,}5 / 13{,}17 \\approx 2{,}8$ fő/km².\n\nAz ország egészében $146 / 17{,}1 \\approx 8{,}5$ fő/km². Az európai rész tehát kb. tízszer sűrűbben lakott, mint az ázsiai.',
        },
        { kind: 'heading', text: 'Oroszország világgazdasági szerepe' },
        {
          kind: 'text',
          text: 'Oroszország a világ legnagyobb kőolaj- és földgázexportőrei közé tartozik, nagy szerepe van a szén-, érc- és gabonapiacon is. Az export túlnyomó része **nyersanyag és energiahordozó**, ezért a gazdaság a világpiaci árak ingadozására érzékeny. Politikai és katonai nagyhatalom (az ENSZ Biztonsági Tanácsának állandó tagja, atomhatalom, űrkutatási hagyományokkal), a **BRICS** csoport tagja. Az Ukrajna elleni 2022-es támadás után az EU és más országok szankciókat vezettek be, és az EU jelentősen csökkentette az orosz energiahordozók behozatalát. Magyarország kőolaj- és földgázfelhasználásának jelentős része Oroszországból érkezik.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A történelmi vonatkozások**: a cári Oroszország hatalmas birodalommá terjeszkedett Szibéria felé, a 19. században elmaradott agrárország volt. 1917 után szovjet hatalom, 1922-ben a **Szovjetunió** létrejötte; **tervgazdaság**, erőltetett iparosítás (Urál, Szibéria nyersanyaga), kollektivizálás. A Szovjetunió 1991-ben felbomlott, Oroszország a jogutód: a rendszerváltás privatizációval és gazdasági válsággal járt, a 2000-es évek olaj- és gázár-emelkedése gyors növekedést hozott.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Az energiagazdaság és a környezeti következmények',
          columns: ['Jellemző', 'Következmény'],
          rows: [
            {
              label: 'Kitermelés',
              cells: [
                'kőolaj és földgáz Nyugat-Szibériában (Jamal-félsziget, Urengoj) és a Volga–Urál-vidéken; szén a Kuznyecki-medencében',
                'a hideg, mocsaras terület nehéz kitermelés; nagy beruházás és hosszú szállítási távolság.',
              ],
            },
            {
              label: 'Szállítás',
              cells: [
                'csővezetékek: Barátság kőolajvezeték, nagy földgázvezetékek Európa felé; kikötők',
                'az energiaszállítás politikai és gazdasági függést is teremt; a vezetékek szivárgása környezeti kockázat.',
              ],
            },
            {
              label: 'Villamosenergia',
              cells: [
                'földgáz, atomenergia, vízenergia (szibériai folyók), szén',
                'a gáztüzelés a szénnél tisztább, de metánkibocsátással jár; a nagy tározók elárasztanak területeket.',
              ],
            },
            {
              label: 'Környezeti hatások',
              cells: [
                'olajszennyezés, gázfáklyázás, a permafroszt olvadása',
                'a kőolajvezetékek törései, a norilszki nehézfém-szennyezés, a talaj- és vízszennyezés, a kibocsátott üvegházgázok miatt a permafroszt olvad, és újabb metánt szabadít fel.',
              ],
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Albánia',
              text: 'Fővárosa Tirana, az Adriai-tenger mellett; NATO-tag, EU-tagjelölt.',
              emelt: true,
            },
            {
              term: 'Fehéroroszország',
              text: 'Fővárosa Minszk; szoros orosz kapcsolat.',
              emelt: true,
            },
            {
              term: 'Moldova',
              text: 'Fővárosa Chișinău; 2022-ben EU-tagjelölt lett.',
              emelt: true,
            },
            {
              term: 'Monaco',
              text: 'Városállam a Földközi-tenger partján, a francia Riviérán.',
              emelt: true,
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Topográfia (kontúrtérkép): Prága, Varsó, Pozsony, Kassa, Bukarest, Kijev, Odessza, Zágráb, Belgrád, Szarajevó, Moszkva, Szentpétervár; Kárpátok és részei, Cseh-medence, Lengyel-alföld, Duna-delta, Dnyeper, Visztula; a történelmi tájak (Felvidék, Erdély, Kárpátalja, Vajdaság, Muravidék).',
            'Magyar vonatkozású kulturális központok megnevezése és ország szerinti besorolása (Kassa, Pozsony, Kolozsvár, Nagyvárad, Marosvásárhely, Ungvár, Munkács, Beregszász, Szabadka, Újvidék).',
            'Összehasonlítás: Oroszország európai és ázsiai része (felszín, éghajlat, népesség, gazdaság).',
            'Szóbeli: Románia, Ukrajna vagy egy délszláv állam jellemzése; a dalmáciai idegenforgalom; a V4 országai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az EU-tag és a tagjelölt országokat összekeverni (EU-tag: Szlovénia, Horvátország, Románia, Bulgária; nem tag: Szerbia, Bosznia-Hercegovina, Montenegró, Észak-Macedónia, Koszovó, Ukrajna). Másik gyakori tévedés a Magas-Tátra és az Alpok vagy a Kárpátok részeinek összekeverése, valamint Oroszországnál az ázsiai rész népességének túlbecslése: a terület háromnegyede ázsiai, de a népesség nagy része Európában él.',
        },
        {
          kind: 'tip',
          text: 'A magyar vonatkozású központoknál mindig három adatot mondj: a **várost**, az **országot** és a **történelmi tájat** (például: Kassa, Szlovákia, Felvidék; Kolozsvár, Románia, Erdély; Ungvár, Ukrajna, Kárpátalja; Újvidék, Szerbia, Vajdaság). Egy-egy kulturális vagy történelmi hivatkozás is jár hozzá (például Kolozsvár: Mátyás király szülővárosa; Arad: az aradi vértanúk).',
        },
        {
          kind: 'tip',
          text: 'Modellválasz-vázlat Oroszország világgazdasági szerepére: (1) méret és nyersanyagok, (2) az energia- és nyersanyagexport szerepe, (3) az ipar és a mezőgazdaság, (4) a gazdaság egyoldalúsága és a világpiaci árak ingadozása, (5) politikai szerep és szankciók hatása.',
        },
      ],
      topicMatch: ['=európa', 'visegrádi', 'románia'],
      quiz: [
        {
          question: 'Melyik ország NEM tagja a Visegrádi Együttműködésnek?',
          options: ['Csehország', 'Lengyelország', 'Ausztria', 'Szlovákia'],
          answer: 2,
          explanation: 'A V4 tagjai: Magyarország, Csehország, Lengyelország, Szlovákia.',
        },
        {
          question: 'Melyik délszláv utódállam lett elsőként az EU tagja?',
          options: ['Horvátország', 'Szerbia', 'Montenegró', 'Szlovénia'],
          answer: 3,
          explanation: 'Szlovénia 2004-ben, Horvátország 2013-ban csatlakozott az Unióhoz.',
        },
        {
          question: 'Mi Oroszország legfontosabb exportterméke-csoportja?',
          options: ['autók', 'kőolaj és földgáz', 'elektronika', 'bor'],
          answer: 1,
          explanation:
            'Oroszország gazdasága nagyban az energiahordozók és nyersanyagok kivitelére épül.',
        },
        {
          question: 'Melyik város, ország és történelmi táj párosítása helyes?',
          options: [
            'Kassa, Románia, Erdély',
            'Újvidék, Szerbia, Vajdaság',
            'Ungvár, Szlovákia, Felvidék',
            'Marosvásárhely, Ukrajna, Kárpátalja',
          ],
          answer: 1,
          explanation:
            'Újvidék Vajdaságban, Szerbiában van. Kassa Felvidék (Szlovákia), Ungvár Kárpátalja (Ukrajna), Marosvásárhely Székelyföld (Románia).',
        },
        {
          question:
            'Oroszország népsűrűsége az európai részen kb. 28 fő/km², az ázsiai részen kb. 2,8 fő/km². Hányszor sűrűbb az európai rész?',
          options: ['kb. 2-szer', 'kb. 5-ször', 'kb. 10-szer', 'kb. 100-szor'],
          answer: 2,
          explanation: '$28 / 2{,}8 = 10$, tehát az európai rész kb. tízszer sűrűbben lakott.',
        },
        {
          question:
            'Miért különbözött a volt Jugoszlávia északi és déli része fejlettségben és kultúrában?',
          options: [
            'az északi terület a Habsburg Monarchiához, a déli az Oszmán Birodalomhoz tartozott',
            'az északi rész sivatag volt',
            'a déli részen nem éltek emberek',
            'a két rész nem volt szomszédos',
          ],
          answer: 0,
          explanation:
            'A történelmi birodalmi örökség (Habsburg vagy Oszmán) vallási, kulturális és fejlettségi különbségeket hagyott.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Visegrádi együttműködés', url: wiki('Visegrádi együttműködés') },
        { label: 'Wikipédia: Jugoszlávia felbomlása', url: wiki('Jugoszlávia felbomlása') },
        { label: 'Wikipédia: Oroszország gazdasága', url: wiki('Oroszország gazdasága') },
      ],
    },
  ],
};

export default unit;
