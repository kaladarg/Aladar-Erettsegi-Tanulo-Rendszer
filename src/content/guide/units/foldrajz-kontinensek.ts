import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 9 (Az Európán kívüli kontinensek földrajza), 9.1–9.6. */
const unit: GuideUnit = {
  id: 'kontinensek',
  subject: 'foldrajz',
  order: 90,
  title: 'Az Európán kívüli kontinensek földrajza',
  requirementRef:
    '9.1 A kontinensek általános képe; 9.2 Ázsia; 9.3 Ausztrália és Óceánia; 9.4 A sarkvidékek; 9.5 Afrika; 9.6 Amerika',
  intro:
    'A kontinensek közös vonásai, majd Ázsia, Ausztrália és Óceánia, a sarkvidékek, Afrika és Amerika, a követelményben nevesített országokkal. A feldolgozás mélységét a topográfiai fogalmak határozzák meg: a lenti hivatalos névlista vizsgaanyag.',
  requirementSource:
    'A követelmények és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (9. témakör; topográfia: 1. Föld, 2. Afrika, 3. Amerika, 4. Ausztrália és Óceánia, 5. Ázsia). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: { kozep: [], emelt: [] },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: {
      kozep: [
        'Baktérítő',
        'Déli-sark',
        'Déli sarkkör',
        'Egyenlítő',
        'Északi-sark',
        'Északi sarkkör',
        'Ráktérítő',
        'kezdő hosszúsági kör (greenwichi délkör)',
        'Afrika',
        'Amerika',
        'Antarktika',
        'Ausztrália',
        'Ázsia',
        'Európa',
        'Eurázsia',
        'Atlanti-óceán',
        'Csendes-óceán',
        'Déli-óceán',
        'Indiai-óceán',
        'Jeges-óceán (Jeges-tenger)',
        'Afrikai-lemez',
        'Antarktiszi-lemez',
        'Arab-lemez',
        'Ausztrál– Indiai-lemez',
        'Csendes-óceáni-lemez',
        'Dél-amerikai-lemez',
        'Észak-amerikai-lemez',
        'Eurázsiai-lemez',
        'Fülöp-lemez (Filippínó-lemez)',
        'Nazca-lemez',
        'Afrikai-ősföld',
        'Angara-ősföld',
        'Antarktiszi-ősföld',
        'Arab-ősföld',
        'Balti-ősföld',
        'Brazil-ősföld',
        'Dekkán-ősföld',
        'Guyanai-ősföld',
        'Kanadai-ősföld',
        'Kínai-ősföld',
        'Nyugat-ausztráliai-ősföld',
        'Eurázsiai-hegységrendszer',
        'Kaledóniai-hegységrendszer',
        'Pacifikus-hegységrendszer',
        'Variszkuszi-hegységrendszer',
        'Japán-árok',
        'Mariana-árok',
        'Észak-atlanti-áramlás',
        'Golf-áramlás',
        'Kanári-áramlás',
        'Labrador-áramlás',
        'Nyugati-szél-áramlás',
        'Déli-sarkvidék (Antarktisz)',
        'Északi-sarkvidék (Arktisz)',
        'Észak-Afrika',
        'Trópusi-Afrika (szubszaharai Afrika)',
        'Afrikai-árokrendszer',
        'Atlasz',
        'Dél-afrikai-magasföld',
        'Etióp-magasföld',
        'Kelet-afrikai-magasföld',
        'Kilimandzsáró (Kilimandzsáró-csoport)',
        'Kongó-medence',
        'Madagaszkár',
        'Szahara',
        'Szudán',
        'Száhel (Száhel-öv)',
        'Gibraltári-szoros',
        'Guineai-öböl',
        'Kongó',
        'Nílus',
        'Szuezi-csatorna',
        'Tanganyika-tó',
        'Viktória-tó',
        'Vörös-tenger',
        'Asszuáni-gát (asszuáni Nagy-gát)',
        'Dél-afrikai Köztársaság',
        'Egyiptom',
        'Kenya',
        'Líbia',
        'Niger',
        'Nigéria',
        'Tunézia',
        'Abuja',
        'Kairó',
        'Pretoria',
        'Észak-Amerika',
        'Dél-Amerika',
        'Közép-Amerika',
        'Latin-Amerika',
        'Alaszka',
        'Amazonas-medence',
        'Andok',
        'Antillák',
        'Appalache-hegység (Appalache)',
        'Brazil-felföld',
        'Floridai-félsziget',
        'Grönland',
        'Guyanai-hegyvidék',
        'Hawaii-szigetek',
        'Kaliforniai-félsziget',
        'Kordillerák',
        'Labrador-félsziget',
        'Mexikói-fennsík',
        'Mississippi-alföld',
        'Mount St. Helens',
        'Paraná-alföld',
        'Préri',
        'Sziklás-hegység',
        'Szilícium-völgy',
        'Amazonas',
        'Colorado',
        'Karib (Antilla)-tenger',
        'Mexikói-öböl',
        'Mississippi',
        'Nagy-tavak (Erie-, Felső-, Huron-, Michigan-, Ontario-tó)',
        'Niagara-vízesés',
        'Panama-csatorna',
        'Paraná',
        'Szent Lőrinc-folyó',
        'Amerikai Egyesült Államok',
        'Argentína',
        'Brazília',
        'Costa Rica',
        'Kanada',
        'Mexikó',
        'Venezuela',
        'Atlanta',
        'Brazíliaváros',
        'Buenos Aires',
        'Caracas',
        'Chicago',
        'Dallas',
        'Houston',
        'Los Angeles',
        'Mexikóváros',
        'New Orleans',
        'New York',
        'Ottawa',
        'Rio de Janeiro',
        'San Francisco',
        'Seattle',
        'Washington',
        'Ausztráliai-alföld',
        'Nagy-Artézi-medence',
        'Nagy-korallzátony',
        'Nagy-Vízválasztó-hegység',
        'Murray',
        'Ausztrália',
        'Canberra',
        'Melbourne',
        'Sydney',
        'Dél-Ázsia',
        'Délkelet-Ázsia',
        'Délnyugat-Ázsia',
        'Észak-Ázsia',
        'Kelet-Ázsia',
        'Közép-Ázsia',
        'Belső-Ázsia',
        'Közel-Kelet',
        'Arab-félsziget',
        'Csomolungma (Mt. Everest)',
        'Dekkán-fennsík',
        'Dél-kínai-hegyvidék',
        'Fuji (Fudzsi)',
        'Fülöp-szigetek',
        'Góbi',
        'Himalája',
        'Hindusztáni-alföld',
        'Hindusztáni-félsziget',
        'Indokínai-félsziget',
        'Indonéz-szigetvilág',
        'Japán-szigetek',
        'Jáva',
        'Kamcsatka-félsziget',
        'Kaszpi-mélyföld',
        'Kaukázus',
        'Kínai-alföld',
        'Kis-Ázsia',
        'Koreai-félsziget',
        'Közép-szibériai-fennsík',
        'Mezopotámia',
        'Nyugat-szibériai-alföld',
        'Pamír',
        'Szibéria',
        'Tajvan',
        'Takla-Makán',
        'Tibet',
        'Aral-tó',
        'Bajkál-tó',
        'Bering-szoros',
        'Boszporusz',
        'Eufrátesz',
        'Gangesz',
        'Holt-tenger',
        'Indus',
        'Jangce',
        'Japán (Keleti)-tenger',
        'Jenyiszej',
        'Kaszpi-tenger',
        'Léna',
        'Ob',
        'Perzsa (Arab)-öböl',
        'Sárga-folyó',
        'Tigris',
        'Három-szurdok-gát',
        'Egyesült Arab Emírségek',
        'Dél-Korea (Koreai Köztársaság)',
        'Fülöp-szigetek',
        'India',
        'Indonézia',
        'Irak',
        'Irán',
        'Izrael',
        'Japán',
        'Kína',
        'Malajzia',
        'Szaúd-Arábia',
        'Szingapúr',
        'Thaiföld',
        'Törökország',
        'Ankara',
        'Bagdad',
        'Bangkok',
        'Bengaluru (Bangalore)',
        'Hongkong',
        'Isztambul',
        'Jakarta',
        'Jekatyerinburg',
        'Jeruzsálem',
        'Jokohama (Yokohama)',
        'Kanton',
        'Kolkata (Calcutta)',
        'Manila',
        'Mekka',
        'Mumbai (Bombay)',
        'Oszaka (Osaka)',
        'Peking',
        'Rijád',
        'Sanghaj',
        'Szöul',
        'Teherán',
        'Tokió',
        'Újdelhi',
        'Váránaszi (Benares)',
        'Vlagyivosztok',
        'Vuhan',
        'Dubaj',
      ],
      emelt: [
        'Benguela-áramlás',
        'Brazíliai-áramlás',
        'Dél-egyenlítői-áramlás',
        'Észak-egyenlítői-áramlás',
        'Humboldt-áramlás',
        'Kuro-shio-áramlás',
        'Oja-shio-áramlás',
        'Kalahári-medence',
        'Kanári-szigetek',
        'Namib-sivatag',
        'Teleki-vulkán',
        'Csád-tó',
        'Niger',
        'Zambézi',
        'Algéria',
        'Csád',
        'Etiópia',
        'Libéria',
        'Marokkó',
        'Seychelle-szigetek',
        'Alexandria',
        'Fokváros',
        'Johannesburg',
        'Lagos',
        'Atacama-sivatag',
        'Bahama-szigetek',
        'Orinoco-medence',
        'Popocatépetl',
        'Yellowstone Nemzeti Park',
        'Hudson-öböl',
        'Itaipu-gát',
        'Kráter-tó',
        'La Plata',
        'Orinoco',
        'Bolívia',
        'Chile',
        'Dominikai Köztársaság',
        'Ecuador',
        'Kolumbia',
        'Kuba',
        'Panama',
        'Boston',
        'Detroit',
        'Havanna',
        'Miami',
        'Montréal',
        'Santiago',
        'São Paulo',
        'Toronto',
        'Vancouver',
        'Melanézia',
        'Mikronézia',
        'Polinézia',
        'Tasmánia',
        'Új-Guinea',
        'Új-Zéland',
        'Wellington',
        'Iráni-felföld',
        'Krakatau',
        'Tien-san',
        'Turáni-alföld',
        'Bengáli-öböl',
        'Brahmaputra',
        'Dardanellák',
        'Mekong',
        'Afganisztán',
        'Banglades',
        'Észak-Korea (Koreai Népi Demokratikus Köztársaság)',
        'Kazahsztán',
        'Kuvait',
        'Pakisztán',
        'Cseljabinszk',
        'Csennai (Madras)',
        'Kiotó (Kyoto)',
        'Krasznojarszk',
        'Novoszibirszk',
        'Sencsen',
        'Tel Aviv-Jaffa',
        'Tiencsin',
      ],
    },
  },
  pages: [
    {
      id: 'kontinensek-altalanos-kepe',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'A kontinensek általános képe',
      level: 'kozep',
      requirement: {
        kozep:
          '9.1: a kontinensek nagytájai, folyói, tavai, jellegzetes térségei, a nevesített országcsoportok, országok, fővárosok és gazdasági központok térképen; fő erőforrások; a geológiai szerkezet és az ásványkincsek összefüggése tematikus térképeken; a természetföldrajzi adottságok éghajlati, növényzeti és talajtérképek alapján; a földrajzi övek és tipikus tájak felismerése; a népességkoncentrációk kialakulása, az egyenlőtlen népességeloszlás okai és következményei; a kontinensek világgazdasági szerepe és változása; az országcsoportok eltérő ütemű fejlődése, a területi fejlettségi különbségek; a mezőgazdasági termelés típusai és terményei; jellegzetes ásványkincsek és gazdasági ágazatok; az emberi beavatkozás környezetkárosító hatásai és mérséklésük.',
        emelt:
          '9.1: a kontinensek felépítésének lemeztektonikai háttere; keresztmetszet elemzése a természeti adottságokról; sajátos kulturális értékek; a centrum, félperiféria és periféria térségek kapcsolatrendszere.',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Minden kontinens hasonló elvek szerint épül fel: **ősföldek** (ércek) – **régi, lepusztult hegységek** (kőszén) – **fiatal gyűrthegységek** a lemezszegélyek mentén (vulkánok, földrengések, színesfémek) – **medencék, síkságok** (kőolaj, földgáz).',
            'A népesség ott tömörül, ahol jó az éghajlat, van víz és termékeny talaj: folyóvölgyekben, tengerpartokon, ipari-bányászati térségekben. A sivatagok, a magashegységek, az esőerdők és a sarkvidék ritkán lakott.',
            'A kontinensek **világgazdasági szerepe** eltér: Észak-Amerika, Nyugat-Európa és Kelet-Ázsia a gazdasági centrum, Afrika és Latin-Amerika nagy része nyersanyagot ad.',
            'Mezőgazdasági típusok: **talajváltó**, **nomád**, **ültetvényes**, **farm**, **intenzív öntözéses**.',
            'Az emberi beavatkozás kárai: erdőirtás, elsivatagosodás, tavak kiszáradása, folyószabályozás, szennyezés.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ősföld',
              text: 'A kontinensek legrégebbi, merev, kevéssé mozgó magja; gazdag ércekben (vas, arany, uránérc).',
            },
            {
              term: 'fiatal gyűrthegység',
              text: 'Lemezek ütközésénél felgyűrődött, még ma is magasodó és földrengésveszélyes hegység (Andok, Kordillerák, Himalája).',
            },
            {
              term: 'agglomeráció',
              text: 'Egy nagyváros és a vele összefüggő beépített, ingázó környezet.',
            },
            {
              term: 'centrum',
              text: 'Fejlett, tőkében és technológiában gazdag, irányító szerepű térség.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Geológiai szerkezet és ásványkincsek' },
        {
          kind: 'text',
          text: 'Az ásványkincsek elhelyezkedését a kőzetek keletkezése szabja meg. Ezért a tematikus térképeken (geológiai és ásványkincs-térkép) a két térkép mintázata megegyezik:\n- **ősföldek** (Kanadai-, Brazil-, Afrikai-, Dekkán-, Angara-, Nyugat-ausztráliai-ősföld): vas-, réz-, arany-, urán-, nikkelérc, gyémánt;\n- **idős, lepusztult hegységek** (Appalache, Kaledóniai és Variszkuszi-hegységrendszer maradványai): kőszén, vasérc;\n- **fiatal gyűrthegységek** (Andok, Kordillerák, Himalája, Atlasz): réz, ezüst, ón, színesfémek, vulkáni területeken kén és termálvíz;\n- **medencék, süllyedékek, selfterületek** (Perzsa-öböl, Mexikói-öböl, Nyugat-szibériai-alföld): kőolaj, földgáz;\n- **hordalékos síkságok**: kavics, homok, építőanyag, talajkincs.',
        },
        {
          kind: 'compare',
          title: 'A kontinensek jellegzetes ásványkincsei (példák)',
          columns: ['Ércek, nemfémes ásványok', 'Energiahordozók'],
          rows: [
            {
              label: 'Ázsia',
              cells: [
                'vasérc, ón (Délkelet-Ázsia)',
                'kőolaj és földgáz (Perzsa-öböl, Nyugat-Szibéria), kőszén (Kína, India)',
              ],
            },
            {
              label: 'Afrika',
              cells: [
                'arany és platina (Dél-afrikai Köztársaság), réz, gyémánt',
                'kőolaj (Nigéria, Líbia, Algéria)',
              ],
            },
            {
              label: 'Észak-Amerika',
              cells: ['vasérc, réz, uránérc, nikkel (Kanadai-ősföld)', 'kőszén, kőolaj, földgáz'],
            },
            {
              label: 'Dél-Amerika',
              cells: [
                'réz (Chile), vasérc és bauxit (Brazília), ón (Bolívia)',
                'kőolaj (Venezuela)',
              ],
            },
            { label: 'Ausztrália', cells: ['vasérc, bauxit, arany, uránérc', 'kőszén'] },
          ],
        },
        { kind: 'heading', text: 'Éghajlat, övezetesség, tájak' },
        {
          kind: 'text',
          text: 'A földrajzi övezetesség a Naptól kapott energia és a csapadék szélességi változásán alapul, ezért a kontinenseken nagyjából szélességi körök mentén követik egymást az övek: egyenlítői esőerdő – trópusi szavanna – sivatag (a térítők mentén) – mediterrán és mérsékelt öv – tajga – tundra – jégsivatag. Az Egyenlítő környékén fekvő Afrika és Dél-Amerika övezetessége az Egyenlítőtől kifelé szimmetrikus. A tengerhatás, a hegységek és a tengeráramlások eltorzítják az övek sávjait (például a Humboldt-áramlás hűti a perui-chilei partot, ezért ott sivatag van, holott trópusi szélességen vagyunk).',
        },
        {
          kind: 'text',
          text: 'Képek, leírások alapján a tájak felismerésében a **növényzet** segít (pálmák, szavanna-akác, tűlevelű erdő), a **felszín** (dűne, mesa, gyűrt hegység, deltatorkolat), és a **gazdálkodás** (rizsteraszok, farmok kör alakú öntözött földjei, ültetvények).',
        },
        { kind: 'heading', text: 'Népességeloszlás' },
        {
          kind: 'text',
          text: 'A népesség a Föld szárazföldi területén nagyon egyenlőtlenül oszlik el. A **népességkoncentrációk** a következők: Kelet-Ázsia (a kínai partvidék, a Kínai-alföld, Japán), Dél-Ázsia (Hindusztáni-alföld, a Gangesz-vidék, a partvidékek), Délkelet-Ázsia (Jáva), Nyugat- és Közép-Európa, az Egyesült Államok északkeleti része és a Nagy-tavak vidéke, valamint kisebb gócok: a Nílus völgye és deltája, a Guineai-öböl partvidéke, Brazília délkeleti partvidéke. Ázsiában él az emberiség nagyjából 60%-a.',
        },
        {
          kind: 'compare',
          title: 'Miért sűrű és miért ritka a népesség?',
          columns: ['Sűrűn lakott térségek', 'Ritkán lakott térségek'],
          rows: [
            {
              label: 'Éghajlat',
              cells: [
                'mérsékelt, monszun, bőséges csapadék',
                'szélsőséges: száraz, nagyon hideg, nagyon forró',
              ],
            },
            {
              label: 'Felszín',
              cells: ['síkság, folyóvölgy, tengerpart', 'magashegység, esőerdő, sivatag'],
            },
            {
              label: 'Talaj, víz',
              cells: [
                'termékeny (öntésföld, lösz, vulkáni talaj), vízbőség',
                'terméketlen vagy tartósan fagyott talaj, víz hiánya',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'ipar, kereskedelem, bányászat, nagyvárosok',
                'nincs vagy kevés a megélhetési lehetőség',
              ],
            },
            {
              label: 'Történelem',
              cells: ['ősi földművelő kultúrák, korai államok', 'későn vált hasznosíthatóvá'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az egyenlőtlen elhelyezkedés következményei: a sűrű térségekben terhelt a környezet (szennyezés, vízhiány, hulladék), a nagyvárosokban lakáshiány és nyomornegyedek alakulnak ki; a ritkán lakott területeken drága a közműépítés és a szolgáltatás, kicsi a munkaerő-kínálat. A termékeny vidékekre, városokba áramlás kiürítheti az elmaradott vidékeket.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: népsűrűség',
          problem:
            'Egy ország területe 3,3 millió km², lakossága 1 400 millió fő. Mekkora a népsűrűsége? Hányszor sűrűbben lakott, mint az a 7,7 millió km²-es ország, amelyen 26 millió ember él?',
          solution:
            'Népsűrűség = népesség / terület. Az első országban $1\\,400 / 3{,}3 \\approx 424$ fő/km². A másodikban $26 / 7{,}7 \\approx 3{,}4$ fő/km². A hányados $424 / 3{,}4 \\approx 125$, tehát az első ország kb. 125-szer sűrűbben lakott. (A két szám India és Ausztrália kerekített adata.)',
        },
        { kind: 'heading', text: 'Világgazdasági szerep és fejlettség' },
        {
          kind: 'text',
          text: 'A **gazdasági fejlettség** a kontinenseken belül is sokféle. Észak-Amerika (USA, Kanada) a legfejlettebb, innovatív, nagy tőkéjű centrum. Ázsiában Kelet-Ázsia (Japán, Dél-Korea, Kína partvidéke) a világ "műhelye", Délnyugat-Ázsia a kőolajé, Dél-Ázsia nagy része elmaradottabb. Afrika és Latin-Amerika többnyire nyersanyagokat és mezőgazdasági terményeket ad el, késztermékeket vesz, ezért kiszolgáltatott a világpiaci áraknak. Ausztrália a nyersanyagexportra épít. A fejlettségi különbségeket a természeti adottság, a gyarmati múlt, a politikai stabilitás, az oktatás és a tőkeellátottság együtt magyarázza.',
        },
        { kind: 'heading', text: 'Mezőgazdasági típusok' },
        {
          kind: 'compare',
          title: 'A kontinensek jellemző gazdálkodási formái',
          columns: ['Jellemzők', 'Példák'],
          rows: [
            {
              label: 'Talajváltó gazdálkodás',
              cells: [
                'az esőerdő felégetése után néhány évig művelt föld, a kimerült talajt elhagyják',
                'kasszava, jamgyökér, kukorica (Afrika, Dél-Amerika, Délkelet-Ázsia)',
              ],
            },
            {
              label: 'Nomád pásztorkodás',
              cells: [
                'száraz térségekben a legelő és a víz után vándorló állattartás',
                'tevék, kecskék, juhok (Száhel, Arab-félsziget, Belső-Ázsia)',
              ],
            },
            {
              label: 'Ültetvényes gazdálkodás',
              cells: [
                'egy növényt termelnek nagy területen, exportra, sok munkaerővel',
                'kávé, kakaó, banán, tea, cukornád, gumi, olajpálma',
              ],
            },
            {
              label: 'Farmgazdaság',
              cells: [
                'gépesített nagyüzem, piacra termel',
                'gabona, szója, kukorica, hús (Észak-Amerika, Argentína, Ausztrália)',
              ],
            },
            {
              label: 'Intenzív öntözéses rizstermesztés',
              cells: [
                'sok kézi munka, sűrű népesség, évi 2–3 termés a monszunvidéken',
                'rizs (Kína, India, Délkelet-Ázsia)',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Az emberi beavatkozás hatásai' },
        {
          kind: 'compare',
          title: 'Környezetkárosítás a kontinenseken',
          columns: ['Példa és ok', 'Következmény és megoldás'],
          rows: [
            {
              label: 'Trópusi erdőirtás',
              cells: [
                'Amazonas-medence, Indonézia: legelő-, ültetvény-, szójaföld, fa',
                'fajok pusztulása, talajerózió, kevesebb szén-dioxid-megkötés; védett területek, fenntartható fakitermelés',
              ],
            },
            {
              label: 'Aral-tó',
              cells: [
                'a befolyó folyók vizét gyapot- és rizsöntözésre vezették el',
                'a tó nagy része kiszáradt, sós por, halászat összeomlott; takarékos öntözés, kisebb tórész megmentése',
              ],
            },
            {
              label: 'Elsivatagosodás',
              cells: [
                'Száhel: túllegeltetés, fakivágás, aszály',
                'termőtalaj elvesztése, éhínség; fásítás, helyi vízgazdálkodás',
              ],
            },
            {
              label: 'Folyók duzzasztása',
              cells: [
                'Asszuáni-gát, Három-szurdok-gát',
                'áram, árvízvédelem, öntözés; de kitelepítés, iszap elmaradása, ökológiai károk',
              ],
            },
            {
              label: 'Szennyezés',
              cells: [
                'ipari és városi füst, szennyvíz (Kína, India nagyvárosai)',
                'smog, egészségkárosodás; szűrők, tiszta energia, szigorúbb előírások',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kontinensek **lemeztektonikai háttere**: a kontinensek a kőzetlemezek részei (Eurázsiai-, Afrikai-, Észak- és Dél-amerikai-, Ausztrál–Indiai-, Antarktiszi-lemez, a kisebbek közül az Arab-, Fülöp-, Nazca-lemez). A **fiatal gyűrthegységek** a lemezek ütközésénél keletkeztek: a Himalája az Indiai- és az Eurázsiai-lemez, az Andok a Nazca- és a Dél-amerikai-lemez találkozásánál; a **Pacifikus-hegységrendszer** (Kordillerák, Andok, Japán-szigetek, Indonéz-szigetvilág) a Csendes-óceán peremén a "tűzgyűrű" vulkán- és földrengés-övezete. A kontinensek közepén az ősföldek a lemezek stabil magjai. Az **Afrikai-árokrendszer** széthúzódó (hasadó) lemezszegély.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Keresztmetszet elemzése',
          problem:
            'Egy Észak-Amerikán keresztülmenő, nyugat–keleti keresztmetszeten ezt látod: keskeny part, magas, csúcsos hegység, száraz fennsík, újabb magas hegység, hatalmas, sík terület kis folyóesés mellett, végül alacsony, lekerekített hegység. Mit mond ez a természeti adottságokról?',
          solution:
            'A sorrend a Kordillerák (Parti-hegységek, Kaszkádok, Sziklás-hegység) – Mississippi-alföld és Préri (a nagy síkság) – Appalache vonala. A nyugati magas, csúcsos hegységek fiatal gyűrthegységek (lemezszegély, vulkanizmus, földrengés), a fennsík esőárnyékos, száraz, a keleti alacsony, lekerekített hegység idős, lepusztult (kőszén). A síkság süllyedék, folyóvízi feltöltődés, kőolaj, földgáz és termékeny talaj, ezért ott farmgazdaság van. Mindig nevezd meg a tájat, a keletkezés korát és az ebből adódó hasznosítást.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Centrum, félperiféria, periféria',
          columns: ['Kapcsolat a világgazdasággal', 'Példák'],
          rows: [
            {
              label: 'Centrum',
              cells: [
                'tőke, innováció, TNC-székhelyek, csúcstechnológia',
                'Észak-Amerika, Nyugat-Európa, Japán',
              ],
            },
            {
              label: 'Félperiféria',
              cells: [
                'gyorsan iparosodó, feltörekvő: részben a centrum gyártója, részben nyersanyagot ad',
                'Kína, India, Brazília, Mexikó, Délkelet-Ázsia, Dél-afrikai Köztársaság',
              ],
            },
            {
              label: 'Periféria',
              cells: [
                'nyersanyag- és olcsó munkaerő-szállító, kevés feldolgozás, függ a centrumtól',
                'Trópusi-Afrika nagy része, Közép-Amerika',
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
            'Topográfiai feladat (I. feladatlap, 20 perc, atlasz nélkül): a vaktérképen számozott hegységet, folyót, tavat, országot, fővárost nevezel meg; vagy a névhez rendeled a számot.',
            'Térképelemzés: geológiai térkép és ásványkincs-térkép egybevetése; éghajlati, növényzeti és talajtérkép összehasonlítása.',
            'Számítás: népsűrűség, a népesség arányai; grafikon- és táblázatelemzés (népességszám-változás).',
            'Szóbeli tétel: a kontinens természeti adottságai (1. feladat) vagy társadalmi-gazdasági képe (2. feladat) atlasz használatával.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a hegységet csak névvel jelölni, kor és ásványkincs nélkül. Másik hiba: az ősföldeket és a fiatal gyűrthegységeket összekeverni. Az ősföld ércet, az idős hegység kőszenet, a medence kőolajat ad; a fiatal gyűrthegység ott van, ahol a földrengések és vulkánok vannak.',
        },
        {
          kind: 'text',
          text: '**Mintaválasz-vázlat** ("Magyarázd meg, miért tömörül a népesség a Gangesz-vidéken"): 1. éghajlat: monszun, bő csapadék, két-három termés; 2. talaj: a folyó hordaléka, termékeny öntésföld; 3. víz: folyó, öntözés; 4. történelem: ősi földművelő kultúrák, a rizs sok munkáskezet igényel; 5. következmény: nagy népsűrűség, élelmezési gondok, városi túlzsúfoltság.',
        },
        {
          kind: 'tip',
          text: 'A topográfiai nevek mindig három szinten kellenek: hely a térképen (hol van), természeti sajátosság (milyen) és gazdasági jelentőség (mire használják). A kontinensek többi oldalán tanuld őket, nagytájhoz és országhoz kötve.',
        },
      ],
      topicMatch: ['=amerika', 'kontinensek'],
      quiz: [
        {
          question: 'Hol fordul elő jellemzően kőolaj és földgáz?',
          options: [
            'ősföldeken',
            'süllyedékekben, üledékes medencékben',
            'gleccserek alatt',
            'vulkáni kőzetekben',
          ],
          answer: 1,
          explanation:
            'A szénhidrogének üledékes medencékben, süllyedékekben halmozódtak fel; az ősföldeken érc van.',
        },
        {
          question: 'Melyik mezőgazdasági típus termel kávét, kakaót, teát exportra?',
          options: [
            'nomád pásztorkodás',
            'talajváltó gazdálkodás',
            'ültetvényes gazdálkodás',
            'öntözéses rizstermesztés',
          ],
          answer: 2,
          explanation:
            'Az ültetvényeken egy-egy trópusi növényt termesztenek nagy tételben, eladásra.',
        },
        {
          question: 'Melyik NEM természetes oka a sűrű népességnek?',
          options: [
            'termékeny folyóvölgyi talaj',
            'bőséges csapadék',
            'állandó fagy és jégtakaró',
            'tengerpart és kikötő',
          ],
          answer: 2,
          explanation:
            'A tartósan fagyott, jeges terület nem kedvez a megtelepedésnek, ritkán lakott.',
        },
        {
          question: 'Mi történt az Aral-tóval?',
          options: [
            'a vulkáni kitörés miatt megnőtt',
            'a befolyó folyók vizét öntözésre vezették el, ezért nagy része kiszáradt',
            'tengerré alakult',
            'a Himalájából jövő gleccserek töltötték fel',
          ],
          answer: 1,
          explanation:
            'A gyapot- és rizsöntözés elvonta a Szr-darja és az Amu-darja vizét, így a tó zsugorodott.',
        },
        {
          question: 'Melyik példa mutatja a félperifériát?',
          options: ['Svájc', 'Brazília vagy India', 'Egyesült Államok', 'Antarktisz'],
          answer: 1,
          explanation: 'A gyorsan iparosodó, feltörekvő országok a félperiféria; az USA centrum.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kontinens', url: wiki('Kontinens') },
        { label: 'Wikipédia: Aral-tó', url: wiki('Aral-tó') },
        { label: 'Wikipédia: Népsűrűség', url: wiki('Népsűrűség') },
      ],
    },
    {
      id: 'azsia-foldrajza',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Ázsia általános képe, Kína és Japán',
      level: 'kozep',
      requirement: {
        kozep:
          '9.2.1–9.2.2: az ázsiai nagy sivatagok kialakulásának okai; a monszun szerepe a gazdasági élet jellemzőinek kialakulásában; a természeti veszélyhelyzetek és a védekezés; az ázsiai népességrobbanás statisztikai adatokkal, következményei és megoldási lépések. Kína: a népességszám változásai diagramok alapján; hogyan lett Kína a világ meghatározó gazdasága; a gazdasági fejlődés és a környezetátalakítás kapcsolata, a környezeti veszélyek. Japán: a szigethelyzet és az erőforrás-szűkösség következményei; Japán szerepe Ázsia gazdasági fejlődésében.',
        emelt:
          '9.2.1–9.2.2: az ősi kultúrák és a világvallások társadalmat, gazdaságot, környezetet befolyásoló szerepe; az élelmezési problémák okai és megoldásuk lépései. Kína: a társadalmi-gazdasági fejlődés sajátos történelmi vonásai; Kína népességpolitikájának értékelése forrásokkal; Kelet- és Nyugat-Kína mezőgazdaságának összehasonlítása; a tengerparti és belső területek fejlettségkülönbségének természeti alapjai és következményei. Japán: a társadalmi-gazdasági fejlődés sajátos történelmi vonásai; a világpiac igényeihez való alkalmazkodás szerepe.',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Ázsia a legnagyobb és legnépesebb földrész: a Föld lakosságának nagyjából 60%-a itt él. Itt van a Föld legmagasabb hegycsúcsa, a **Csomolungma (Mt. Everest)**, az Eurázsiai-lemez és az Indiai-lemez ütközésénél.',
            'A nagy sivatagok (**Góbi**, **Takla-Makán**, Arab-félsziget) a tengertől távol, hegyekkel körülzárva, illetve a szubtrópusi nagy nyomású övben alakultak ki.',
            'A **monszun** évszakosan irányt váltó szél: nyáron a tenger felől csapadékot hoz, télen a szárazföld felől száraz. Erre épül a rizstermesztés és a sűrű népesség.',
            'Veszélyhelyzetek: földrengés, cunami, vulkánkitörés, trópusi ciklon (tájfun), árvíz, aszály. Védekezés: előrejelzés, jelzőrendszerek, árvízvédelem, szabályozott építés.',
            '**Kína**: kb. 1,4 milliárd lakos, az 1970-es évek végi nyitás óta a világ meghatározó gazdasága; a fejlett kelet és az elmaradottabb nyugat között nagy a különbség; súlyos környezeti gondok.',
            '**Japán**: szigetország, kevés nyersanyaggal, ezért importált nyersanyagból feldolgozott, exportra termelő fejlett ipar; Ázsia gazdasági fejlődésének úttörője.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'monszun',
              text: 'Félévente irányt változtató szél, amely a szárazföld és a tenger eltérő felmelegedéséből ered.',
            },
            {
              term: 'népességrobbanás',
              text: 'A halandóság gyors csökkenése miatt a születések és a halálozások különbsége nagy, ezért a népesség gyorsan nő.',
            },
            { term: 'tájfun', text: 'A Csendes-óceán nyugati részén kialakuló trópusi ciklon.' },
            {
              term: 'különleges gazdasági övezet',
              text: 'Kedvezményes adóval és szabályokkal külföldi tőkét vonzó terület (például Sencsen).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Felszín és vizek' },
        {
          kind: 'text',
          text: 'Ázsia felszíne nagyon változatos. A **Himalája** és a környező **Pamír**, **Tibet** (a "világ teteje") fiatal gyűrthegységek. Északon a **Nyugat-szibériai-alföld**, a **Közép-szibériai-fennsík**, délen a **Hindusztáni-alföld** és a **Dekkán-fennsík**, keleten a **Kínai-alföld** és a **Dél-kínai-hegyvidék** a nagytájak. A nagy folyók: **Ob**, **Jenyiszej**, **Léna** (Jeges-tengerbe), **Sárga-folyó** és **Jangce** (Kínában), **Mekong**, **Gangesz**, **Indus**, **Tigris** és **Eufrátesz** (Mezopotámia). A **Bajkál-tó** a Föld legmélyebb tava, a **Kaszpi-tenger** a legnagyobb tó, a **Holt-tenger** partja a szárazföld legmélyebben fekvő pontja.',
        },
        { kind: 'heading', text: 'Miért vannak itt nagy sivatagok?' },
        {
          kind: 'compare',
          title: 'Az ázsiai sivatagok kialakulásának okai',
          columns: ['Fő ok', 'Hatás'],
          rows: [
            {
              label: 'Góbi, Takla-Makán, Belső-Ázsia',
              cells: [
                'a Világtengertől nagyon távol',
                'a magas hegységek (Himalája, Tien-san) elzárják a csapadékot hozó nedves légtömegeket (esőárnyék)',
              ],
            },
            {
              label: 'Arab-félsziget, Thar',
              cells: [
                'a térítő körüli szubtrópusi nagy nyomású öv',
                'lefelé áramló, száraz levegő, kevés felhő',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A monszun és szerepe' },
        {
          kind: 'text',
          text: 'Nyáron a szárazföld jobban felmelegszik, mint a tenger, fölötte alacsony légnyomás alakul ki, ezért a tenger felől nedves levegő áramlik be: **nyári monszun**, rengeteg csapadék (Indiában például június–szeptember között). Télen a szárazföld lehűl, fölötte magas nyomás van, a szél a szárazföld felől a tenger felé fúj: **téli monszun**, száraz idő. A **gazdasági élet** a monszunhoz igazodik: a mezőgazdasági év (vetés, aratás), a rizstermesztés két-három termése, az öntözés, a folyók vízjárása. A késő vagy elmaradó monszun aszályt és terméskiesést, a túl erős monszun árvizet okoz (például Banglades).',
        },
        {
          kind: 'compare',
          title: 'A két monszun',
          columns: ['Nyári monszun', 'Téli monszun'],
          rows: [
            {
              label: 'Nyomás a szárazföld fölött',
              cells: ['alacsony (meleg szárazföld)', 'magas (hideg szárazföld)'],
            },
            {
              label: 'A szél iránya',
              cells: ['a tenger felől a szárazföld felé', 'a szárazföldről a tenger felé'],
            },
            { label: 'Időjárás', cells: ['nedves, csapadékos, esős évszak', 'száraz évszak'] },
            {
              label: 'Gazdasági hatás',
              cells: [
                'rizsvetés, öntözővíz, árvízveszély',
                'aratás, aszályveszély, csatornák vízhiánya',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Természeti veszélyhelyzetek' },
        {
          kind: 'text',
          text: 'A kontinens hatalmas és tektonikailag aktív. A lemezszegélyeken (Japán-, Mariana-árok, Fülöp-lemez, Himalája, Indonézia) gyakoriak a **földrengések**, a tenger alatti rengések **cunamit** keltenek (2004-ben, a Szumátra előtti földrengés után az Indiai-óceán partjain több mint 200 ezer áldozat), a **vulkánok** Indonéziában és Japánban pusztítanak. A trópusi tengerek felől **tájfunok** (Kelet- és Délkelet-Ázsia), a Bengáli-öbölből **ciklonok** érik el a partokat; a monszunvidékeken **árvíz**, máshol **aszály**, **porvihar**, **hó- és sárlavina**. Védekezés: földrengésálló építkezés (Japán), cunamiriasztó rendszer, árvízvédelmi gátak, kitelepítési tervek, műholdas előrejelzés, nemzetközi segítségnyújtás.',
        },
        { kind: 'heading', text: 'Az ázsiai népességrobbanás' },
        {
          kind: 'text',
          text: 'A 20. század második felében az orvoslás, a higiénia és az élelmezés javulása miatt a halandóság gyorsan csökkent, a születésszám viszont még magas maradt, ezért a népesség pár évtized alatt megsokszorozódott. Ázsia lakossága 1950-ben kb. 1,3–1,5 milliárd volt, 2023-ban kb. 4,7 milliárd. Következmények: élelmezési gondok, a városok gyors növekedése, munkanélküliség, oktatási és egészségügyi terhek. Megoldási lépések: **családtervezés** (Kína egygyermekes politikája, India programjai), a nők oktatása, a **zöld forradalom** (új búza- és rizsfajták, műtrágya, öntözés), iparosodás és a városi életforma terjedése, ami csökkenti a gyermekvállalási kedvet. A "mai" kép már megosztott: Kelet-Ázsiában (Kína, Japán, Dél-Korea) a népesség öregszik és csökken, Dél-Ázsiában még fiatal és növekszik.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: természetes szaporodás',
          problem:
            'Egy ázsiai ország népessége 50 millió fő, a születési arányszám 30‰, a halálozási arányszám 8‰. Mennyi a természetes szaporodás, és hány fővel nő a népesség egy év alatt (vándorlástól eltekintve)?',
          solution:
            'Természetes szaporodás = születési arányszám − halálozási arányszám $= 30 - 8 = 22$‰ vagyis 2,2%. Az éves növekedés $50\\,000\\,000 \\cdot 0{,}022 = 1\\,100\\,000$ fő. Magas születési és csökkenő halálozási arány: népességrobbanás.',
        },
        { kind: 'heading', text: 'Kína' },
        {
          kind: 'text',
          text: 'Kína a Föld egyik legnagyobb területű országa (kb. 9,6 millió km²). Főváros: **Peking**; nagyvárosok: **Sanghaj**, **Kanton**, **Tiencsin**, **Vuhan**, **Sencsen**, **Hongkong**. Az ország népességének túlnyomó többsége a keleti, monszun éghajlatú **Kínai-alföldön** és a folyóvölgyekben él (a **Sárga-folyó** és a **Jangce** mentén), nyugaton hegységek, fennsíkok, sivatagok vannak (Tibet, Takla-Makán, Góbi), ritka a népesség. Kína népessége kb. 1,4 milliárd fő; a népesség növekedése a 20. század közepétől gyorsult, az 1970-es évek végétől a népességpolitika (egygyermekes politika) lassította, 2022 körül fogyni kezdett.',
        },
        {
          kind: 'text',
          text: '**Hogyan lett Kína a világ meghatározó gazdasága?** 1978 után a reformok (Teng Hsziao-ping) a tervgazdaságot fokozatosan piaci elemekkel egészítették ki: a mezőgazdaságban a családi gazdálkodás visszatért, megnyitották az országot a külföldi tőke előtt, **különleges gazdasági övezeteket** hoztak létre a tengerparton (például Sencsen), az olcsó és nagy tömegű munkaerőre exportra termelő üzemek épültek, majd a technológiai fejlesztés és a belső piac is nőtt. Ma Kína a világ "műhelye" (elektronika, textil, acél, hajógyártás), a világ második legnagyobb gazdasága (névleges GDP szerint) és a legnagyobb ipari termelők egyike. A **kínai rizstermelés** a világ első helyén áll, a mezőgazdaság legfontosabb terményei a rizs, a búza, a kukorica, a szója, a gyapot és a tea.',
        },
        {
          kind: 'text',
          text: '**A gazdasági fejlődés és a környezet.** Az iparosodás szénre épült, ezért a nagyvárosokban erős a **levegőszennyezés** (smog), a folyók és a talajvíz szennyezett, az erdőirtás és túllegeltetés a nyugati-északi területeken **elsivatagosodást** és porviharokat okoz, a Sárga-folyó alsó szakaszán időnként kiszárad a meder, az árvizeket gátakkal szabályozzák. A **Három-szurdok-gát** a Jangcén (2006-ban készült el, a vízerőmű 2012-ben állt teljes üzembe) áramot termel és csökkenti az árvízveszélyt, de több mint egymillió embert kellett kitelepíteni, és megváltozott a folyó élővilága. Válaszlépések: megújuló energiák (nap, szél, víz) nagy arányú építése, erdősítés ("zöld nagy fal"), a szén visszaszorítása a nagyvárosokban.',
        },
        { kind: 'heading', text: 'Japán' },
        {
          kind: 'text',
          text: '**Japán** a Csendes-óceán nyugati peremén szigetország (a **Japán-szigetek**: Hokkaidó, Honsú, Sikoku, Kjúsú és sok kis sziget), a Pacifikus-hegységrendszer része: hegyes, vulkáni (a **Fuji** a legmagasabb csúcs, 3776 m), földrengések és cunamik sújtják. A síkságok kis területűek, a népesség a part menti síkságokon tömörül (Tokió–Jokohama, **Oszaka**, **Kiotó**), a **Tokió** környéki agglomeráció a Föld legnépesebb agglomerációi közé tartozik. A lakosság kb. 125 millió, öregedő és fogy.',
        },
        {
          kind: 'compare',
          title: 'Japán adottságai és következményeik',
          columns: ['Adottság', 'Következmény'],
          rows: [
            {
              label: 'Szigethelyzet',
              cells: [
                'tengerek veszik körül, jó kikötők',
                'kiváló hajózás, halászat, óriási kereskedelmi kikötők; az áruk többsége tengeren érkezik és távozik',
              ],
            },
            {
              label: 'Szegény erőforrások',
              cells: [
                'alig van kőolaj, vasérc, kőszén, földgáz',
                'nyersanyag- és energiaimport; ipar a part menti kikötőkben; energiatakarékos technológiák',
              ],
            },
            {
              label: 'Kevés termőterület',
              cells: [
                'hegyes ország, kicsi művelhető terület',
                'intenzív, terasz-, rizs- és zöldségtermesztés, a hal fontos fehérjeforrás; élelmiszer-behozatal',
              ],
            },
            {
              label: 'Sűrű népesség, képzett munkaerő',
              cells: [
                'sok munkaerő, fegyelem, magas képzettség',
                'a munkaigényes, majd a tudásigényes ágazatok fejlődése: autó, elektronika, robotok',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Japán a második világháború után hihetetlenül gyorsan újjáépült. Az állam és a nagyvállalatok együttműködtek, a külföldi technológiát átvették és továbbfejlesztették, az országot exportra állították át. Az 1960–80-as években a világ egyik legnagyobb gazdaságává vált (autógyártás: Toyota, Honda; elektronika: Sony, Panasonic; acél, hajógyártás, robotika). Japán egész Ázsia gazdasági fejlődésében **úttörő** volt: tőkét, technológiát és mintát adott a "kistigrisek" (Dél-Korea, Tajvan, Szingapúr, Hongkong) és Kína számára.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Ősi kultúrák és világvallások.** Ázsia az ősi folyóvölgyi kultúrák bölcsője (Mezopotámia a **Tigris** és az **Eufrátesz** között, az Indus-völgy, a Sárga-folyó völgye) és a nagy világvallások hazája (hinduizmus, buddhizmus, iszlám, kereszténység, konfucianizmus). A vallások az életmódot, az étkezést (a hinduknál a szent tehén, a muszlimoknál a sertéshús tilalma), az ünnepeket, a nők helyzetét és a gazdasági életet is alakítják; a vallási központok (Mekka, Jeruzsálem, Váránaszi) zarándokturizmust vonzanak.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Az élelmezési problémák okai.** A gyors népességnövekedés, a művelhető föld kis aránya, a monszun szeszélyei, az elavult gazdálkodás, a föld egyenlőtlen birtoklása, a háborúk és az elosztás hibái. Lépések: zöld forradalom, öntözés, tárolás, birtokreform, élelmiszersegély, a szegénység csökkentése.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Kína: a tengerparti és a belső területek',
          columns: ['Kelet-Kína (tengerpart)', 'Nyugat-Kína (belső terület)'],
          rows: [
            {
              label: 'Természeti alap',
              cells: [
                'alföld, nagy folyók, monszun, bő csapadék, jó kikötők',
                'hegységek, fennsíkok, sivatagok, szárazság, nehéz megközelítés',
              ],
            },
            {
              label: 'Mezőgazdaság',
              cells: [
                'intenzív: rizs (délen), búza és kukorica (északon), szója, tea, selyem; öntözés, sűrű népesség',
                'extenzív: nomád juh- és jaktartás, öntözéses oázisok, gyapot, kevés termőföld',
              ],
            },
            {
              label: 'Népsűrűség, gazdaság',
              cells: [
                'nagyon sűrű; ipar, szolgáltatás, külföldi tőke, nagyvárosok',
                'ritka; nyersanyag (kőszén, kőolaj, ritka fémek), lassabb fejlődés',
              ],
            },
            {
              label: 'Következmény',
              cells: [
                'gazdag, de szennyezett, belső vándorlás célpontja',
                'elmaradott; az állam fejlesztési programokkal (vasút, "nyugati fejlesztés") próbál felzárkóztatni',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Népességpolitika.** Az 1970-es évek végén bevezetett **egygyermekes politika** (pénzbüntetés, juttatások) lassította a népességnövekedést, de következményei: gyors öregedés, kevesebb munkaerő, férfitöbblet, a "kis császárok" nemzedéke. Ezért 2016-ban kétgyermekesre, 2021-ben háromgyermekesre lazították. Történelmi vonások: a több ezer éves császárság és a kommunista hatalomátvétel (1949) után a tervgazdaság, majd 1978-tól a reform. Japán történelmi vonásai: a Meidzsi-kor (1868) iparosítása, a háború utáni gazdasági csoda és az exportra, a világpiac igényeihez alkalmazkodó termelés (jó minőség, olcsó és innovatív termékek).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Grafikon: Kína népességszámának változása a 20. századtól – olvasd le a gyors növekedés szakaszát, a lassulást, a csúcsot.',
            'Éghajlati diagram felismerése: monszun éghajlat = nyáron nagyon sok csapadék, télen száraz (például Mumbai vagy Kalkutta).',
            'Kifejtés: a monszun kialakulása és szerepe; miért sűrű a népesség Kelet-Ázsiában; Kína gazdasági felemelkedése és annak ára; Japán erőforrás-szegény, mégis gazdag.',
            'Szóbeli: Ázsia természeti képe (1. feladat) vagy Kína és Japán gazdasága (2. feladat) atlasz használatával.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a monszunt "esős évszaknak" nevezni. A monszun szél, az esőt a nyári monszun hozza. Másik hiba: Kínát egységes országnak leírni; kelet és nyugat adottsága, gazdasága és népsűrűsége más. Japánnál ne írd, hogy "sok nyersanyaga van": a nyersanyagot importálja.',
        },
        {
          kind: 'text',
          text: '**Mintaválasz-vázlat** ("Magyarázd meg, miért lett Japán gazdag, noha szegény nyersanyagokban"): 1. szigethelyzet, kikötők, import/export; 2. a nyersanyagot a part menti ipari kikötőkben dolgozza fel; 3. képzett, fegyelmezett munkaerő, nagy belső tőke; 4. állami irányítás, külföldi technológia átvétele és fejlesztése; 5. exportorientált csúcstechnológiai ipar (autó, elektronika, robot); 6. kockázat: földrengés, cunami, öregedés.',
        },
        {
          kind: 'tip',
          text: 'Atlasszal a legtöbb pontot a pontos névhasználat adja: írd le a nagytájat és a folyót is (Kínai-alföld, Sárga-folyó, Jangce), ne csak annyit, hogy "keleten".',
        },
      ],
      topicMatch: ['=ázsia', 'kína', 'monszun'],
      quiz: [
        {
          question: 'Mi okozza a monszunt?',
          options: [
            'a Föld forgása egyedül',
            'a szárazföld és a tenger eltérő felmelegedése',
            'a vulkánkitörések',
            'a tengeráramlások hiánya',
          ],
          answer: 1,
          explanation:
            'A szárazföld és a tenger eltérően melegszik, ez évszakosan változó nyomáskülönbséget és szelet okoz.',
        },
        {
          question: 'Miért van sivatag a Takla-Makán helyén?',
          options: [
            'mert közel van a Csendes-óceánhoz',
            'mert a nedves légtömegeket a magas hegységek elzárják, és a tengertől nagyon távol van',
            'mert a monszun mindig oda fúj',
            'mert vulkáni kőzet van alatta',
          ],
          answer: 1,
          explanation:
            'A belső-ázsiai sivatagok a Világtengertől távol, magas hegységekkel körülzárva alakultak ki.',
        },
        {
          question: 'Melyik a nyári monszun jellemzője?',
          options: [
            'a szél a szárazföld felől a tenger felé fúj',
            'száraz, hideg levegő',
            'a szél a tenger felől fúj, sok csapadékot hozva',
            'havazás a síkságokon',
          ],
          answer: 2,
          explanation:
            'Nyáron a szárazföld fölött alacsony nyomás van, ezért a nedves levegő a tenger felől áramlik be.',
        },
        {
          question: 'Melyik állítás igaz Japánra?',
          options: [
            'sok kőolajat és vasércet termel ki',
            'szigetország, a nyersanyagot nagyrészt importálja, és exportra dolgozza fel',
            'a népesség gyorsan nő',
            'nincsenek földrengések',
          ],
          answer: 1,
          explanation:
            'Japán erőforrásokban szegény, ezért importált nyersanyagból feldolgozott, exportra termelő iparra épít.',
        },
        {
          question: 'Mi jellemzi Kína 1978 utáni fejlődését?',
          options: [
            'teljes elzárkózás a külföldi tőkétől',
            'különleges gazdasági övezetek a tengerparton, exportra termelő ipar',
            'a mezőgazdaság összeomlása',
            'a népesség gyors növekedése az egygyermekes politika miatt',
          ],
          answer: 1,
          explanation:
            'A nyitás és a tengerparti övezetek (például Sencsen) hozták a külföldi tőkét és az exportiparral a gyors növekedést.',
        },
        {
          question: 'Mi az egygyermekes politika egyik következménye Kínában?',
          options: [
            'a lakosság fiatalodása',
            'a népesség öregedése',
            'a városok kiürülése',
            'a monszun gyengülése',
          ],
          answer: 1,
          explanation:
            'Kevés született gyermek miatt ma kevés a fiatal, sok az idős; a munkaerő csökken.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Ázsia', url: wiki('Ázsia') },
        { label: 'Wikipédia: Monszun', url: wiki('Monszun') },
        { label: 'Wikipédia: Kína gazdasága', url: wiki('Kína gazdasága') },
      ],
    },
    {
      id: 'india-delkelet-delnyugat-azsia',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'India, Délkelet-Ázsia és Délnyugat-Ázsia',
      level: 'kozep',
      requirement: {
        kozep:
          '9.2.2: India: a népesedési folyamatok és összefüggésük az élelmezéssel; a természeti adottságokhoz igazodó mezőgazdaság és fő terményei; a duális gazdasági szerkezet. Délkelet-Ázsia: a térség országai, sajátos társadalmi-gazdasági fejlődésük természeti és társadalmi háttere, világgazdasági jelentőségük. Délnyugat-Ázsia: a kőolajgazdagság világgazdasági jelentősége és szerepe az országok életében; az idegenforgalmi adottságok.',
        emelt:
          '9.2.2: India: a társadalmi-gazdasági fejlődés sajátos történelmi vonásai; a társadalmi és vallási hagyományok szerepe a gazdasági életben; szerepe a szolgáltatás-kereskedelemben. Délnyugat-Ázsia: a vallás szerepe a társadalmi-gazdasági életben; a török és az izraeli gazdaság jellemző vonásai és termékei; Törökország híd szerepe kultúrák és kontinensek között; Izrael sajátos társadalmi-gazdasági fejlődése.',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**India**: kb. 1,4 milliárd lakos, 2023 óta a világ legnépesebb országa; a népesség még fiatal és nő, ezért az élelmezés kulcskérdés. Fő terményei: rizs, búza, gyapot, tea, cukornád, juta; **duális gazdaság**: a modern informatika és ipar mellett a hagyományos, szegény falusi szektor.',
            '**Délkelet-Ázsia** (Indokínai-félsziget és Indonéz-szigetvilág): trópusi, monszun éghajlatú térség, ültetvényekkel (gumi, olajpálma, rizs), gyorsan iparosodó országokkal (Thaiföld, Malajzia, Indonézia, Szingapúr) és fontos hajózási útvonallal (Malakka-szoros).',
            '**Délnyugat-Ázsia** (Közel-Kelet): a Perzsa-öböl környéke a Föld legnagyobb kőolajkészletét rejti; a kőolajbevétel határozza meg az országok életét; az idegenforgalom (vallási helyek, tengerpartok) is fontos.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'duális gazdaság',
              text: 'Egy országon belül egymás mellett él a modern, fejlett szektor és a hagyományos, elmaradott szektor.',
            },
            {
              term: 'zöld forradalom',
              text: 'Új, nagy hozamú gabonafajták, műtrágya és öntözés terjesztése az 1960-as évektől, főleg Ázsiában.',
            },
            {
              term: 'kistigris',
              text: 'Gyorsan iparosodó, exportra termelő kelet-ázsiai és délkelet-ázsiai gazdaság (például Szingapúr, Dél-Korea, Tajvan).',
            },
            {
              term: 'OPEC',
              text: 'A kőolajexportáló országok szervezete (1960), a kínálat és az ár befolyásolására.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'India' },
        {
          kind: 'text',
          text: 'India a **Hindusztáni-félszigeten** fekszik. A területe nagyjából 3,3 millió km². Északon a **Himalája**, délen a **Dekkán-fennsík** (régi ősföld, a **Dekkán-ősföld**), a kettő között a **Hindusztáni-alföld**, amelyen a **Gangesz** és az **Indus** folyik. Fővárosa **Újdelhi**, nagyvárosai **Mumbai**, **Kolkata**, **Csennai**, **Bengaluru**, a szent város **Váránaszi**. Az éghajlatot a monszun szabja meg: a nyári monszun hozza a csapadékot, a Himalája pedig elzárja az észak felől jövő hideg levegőt.',
        },
        {
          kind: 'text',
          text: '**Népesedés és élelmezés.** India népessége 1950 óta közel négyszeresére nőtt. A halálozás csökkent, a születésszám lassabban, ezért gyors volt a növekedés (népességrobbanás). Bár a Hindusztáni-alföld talaja termékeny, a népsűrűség nagy és a gazdaságok felaprózódtak, ezért az élelmezés a központi kérdés. A **zöld forradalom** (nagy hozamú búza és rizs, műtrágya, öntözés) Indiát gabona-önellátóvá tette, de a szegénység, az alultápláltság és a regionális különbségek megmaradtak. Az állam családtervezési programokkal próbálja lassítani a növekedést. A városi népesség aránya alacsony (kb. 35%), de a nagyvárosok gyorsan nőnek, nyomornegyedekkel.',
        },
        {
          kind: 'compare',
          title: 'India mezőgazdasága a természeti adottságokhoz igazodva',
          columns: ['Térség és adottság', 'Fő termények'],
          rows: [
            {
              label: 'Keleti part, Bengál, Gangesz alsó folyása',
              cells: ['sok csapadék, öntözés, meleg', 'rizs, juta'],
            },
            {
              label: 'Pandzsáb, Hindusztáni-alföld nyugati része',
              cells: ['kevesebb csapadék, csatornás öntözés, enyhébb tél', 'búza'],
            },
            {
              label: 'Dekkán',
              cells: ['vulkáni lávatakaró (regur talaj), száraz', 'gyapot, cukornád, köles'],
            },
            { label: 'Himalája lábánál, Asszam', cells: ['nedves, hegyvidéki lejtők', 'tea'] },
          ],
        },
        {
          kind: 'text',
          text: 'A mezőgazdaság a foglalkoztatottak mintegy 40%-át foglalkoztatja, a GDP-hez viszont csak kisebb arányban járul hozzá. India a tej, a rizs, a búza, a gyapot és a tea termelésében is a világ élvonalába tartozik; a szarvasmarha-állomány nagy, ám vallási okokból (hinduizmus) húsa nem fogyasztható.',
        },
        {
          kind: 'compare',
          title: 'India duális gazdasági szerkezete',
          columns: ['Modern szektor', 'Hagyományos szektor'],
          rows: [
            {
              label: 'Ágazatok',
              cells: [
                'informatika, szoftver, gyógyszeripar, autó- és gépipar, pénzügy',
                'kisparaszti gazdálkodás, kézműipar, utcai kereskedelem',
              ],
            },
            {
              label: 'Helye',
              cells: [
                'nagyvárosok (Bengaluru, Mumbai, Hyderabad)',
                'falvak, a nagyvárosok peremén lévő nyomornegyedek',
              ],
            },
            {
              label: 'Munkaerő',
              cells: [
                'képzett, angolul beszélő, olcsó',
                'nagy tömegű, képzetlen, gyakran önellátó',
              ],
            },
            { label: 'Jövedelem', cells: ['magas, külföldi tőke', 'alacsony, nagy szegénység'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Történelmi vonások és hagyományok.** India a brit gyarmati uralom (1858–1947) alatt vált nyersanyag- és gyapotszállítóvá, a vasúthálózat és az angol nyelv öröksége viszont ma előny. 1947-ben függetlenné vált, majd kettéoszlott Indiára és Pakisztánra. A **hinduizmus** és a **kasztrendszer** öröksége (hagyományos munkamegosztás, társadalmi mobilitás nehézségei) a gazdaságra is hat. A hagyományos szerepek lassítják az egyenlőséget és a modernizációt. Az 1990-es évek gazdasági reformjai után (liberalizáció) az ország **szolgáltatás-kereskedelmi** nagyhatalommá vált: informatikai és üzleti háttérszolgáltatások (szoftverfejlesztés, ügyfélszolgálat) exportja, amelyet a sok, képzett, angolul beszélő szakember és az időeltolódás tesz lehetővé.',
        },
        { kind: 'heading', text: 'Délkelet-Ázsia' },
        {
          kind: 'text',
          text: 'A térség országai az Indokínai-félszigeten: **Mianmar, Thaiföld, Laosz, Kambodzsa, Vietnám**, a félsziget déli részén **Malajzia**, valamint szigeteken: **Szingapúr**, **Indonézia**, **Fülöp-szigetek**, **Brunei**, **Kelet-Timor**. Az éghajlat nagyrészt egyenlítői és trópusi monszun, bőséges csapadékkal. Az Indonéz-szigetvilág a Csendes-óceáni tűzgyűrű tagja, ezért sok a vulkán (**Krakatau**) és a földrengés. Népessége kb. 700 millió fő. A legnagyobb ország Indonézia (több mint 17 ezer sziget, a Föld negyedik legnépesebb országa), népességének több mint fele a termékeny vulkáni talajú **Jáván** él; fővárosa **Jakarta**. A folyók (**Mekong**) deltái a rizstermesztés központjai.',
        },
        {
          kind: 'compare',
          title: 'Délkelet-Ázsia országainak eltérő fejlődése',
          columns: ['Fejlődés és gazdaság', 'Természeti és társadalmi háttér'],
          rows: [
            {
              label: 'Szingapúr',
              cells: [
                'városállam, gazdag: kikötő, pénzügy, elektronika, kereskedelem, magas jövedelem',
                'a Malakka-szoros partján, az Ázsia–Európa hajózási út csomópontja; kis terület, kevés erőforrás',
              ],
            },
            {
              label: 'Malajzia, Thaiföld',
              cells: [
                'gyors iparosodás: elektronika, autóalkatrész; gumi, olajpálma, rizs; turizmus (Thaiföld)',
                'trópusi ültetvények, külföldi tőke, jó kikötők és munkaerő',
              ],
            },
            {
              label: 'Indonézia, Fülöp-szigetek',
              cells: [
                'nagy népesség, nyersanyagok (kőolaj, ón, szén), mezőgazdaság, olcsó munkaerő; nagy a szegénység',
                'szigetek szétszórtsága, gyakori természeti katasztrófák, sok nyelv és vallás',
              ],
            },
            {
              label: 'Vietnám, Kambodzsa, Mianmar',
              cells: [
                'rizs, textil, cipő, összeszerelés; Vietnám 1986-tól nyitott',
                'háborúk (Vietnám), zárt politikai rendszer (Mianmar) lassították a fejlődést',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Világgazdasági jelentőség.** A térség a Föld egyik legfontosabb **ültetvényes** területe (természetes gumi, olajpálma, kávé, kókusz, rizs), jelentős a bányászat (ón, kőolaj, földgáz), olcsó munkaerőt kínál az elektronikai és textilipari összeszerelésnek, a **Malakka-szoros** a világ egyik legforgalmasabb hajózási útvonala (Indiai- és Csendes-óceán között). A térség országai az **ASEAN** együttműködésben dolgoznak (1967). Az ázsiai "kistigrisek" mintáját követő országok exportra termelnek.',
        },
        { kind: 'heading', text: 'Délnyugat-Ázsia' },
        {
          kind: 'text',
          text: 'Délnyugat-Ázsia (a **Közel-Kelet**, **Kis-Ázsia** és az **Arab-félsziget**) a világ kőolaj- és földgázkészletének nagy részét rejti, főleg a **Perzsa-öböl** körül: **Szaúd-Arábia**, **Irán**, **Irak**, **Kuvait**, **Egyesült Arab Emírségek**. A kőolaj a nagy üledékes medencében halmozódott fel, a mezők a szárazföldön és a selfen is vannak. A térség a Föld bizonyított kőolajkészletének nagyjából felét adja, és a világ kőolajexportjának jelentős részét. Éghajlata száraz, sivatagos; két nagy folyója a **Tigris** és az **Eufrátesz**. Fővárosok: **Rijád**, **Bagdad**, **Teherán**, **Ankara**, **Jeruzsálem**; nagyváros: **Isztambul**, **Dubaj**.',
        },
        {
          kind: 'text',
          text: '**A kőolaj szerepe.** A kőolajbevételből infrastruktúra, nagyvárosok, oktatás és egészségügy épült (Kuvait, Egyesült Arab Emírségek), a munkaerő nagy részét külföldi vendégmunkások adják, a gazdaság egyoldalú, ezért kiszolgáltatott az olajár ingadozásának. Az árat az **OPEC** a kitermelés korlátozásával igyekszik befolyásolni. A térségben gyakoriak a konfliktusok (az olajmezők feletti ellenőrzés, vallási és etnikai ellentétek). Az olaj kimerülése előtt az országok diverzifikálnak: **Dubaj** kereskedelmi és pénzügyi központ, légi csomópont, turizmus.',
        },
        {
          kind: 'text',
          text: '**Idegenforgalom.** Vonzerő a vallási zarándokhelyek (**Mekka**, **Jeruzsálem**), az ókori emlékek (Mezopotámia, Petra), a tengerpartok (Vörös-tenger, Perzsa-öböl), a **Holt-tenger** gyógyhatása és a modern városok (Dubaj). Hátrány: a politikai bizonytalanság.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Törökország és Izrael',
          columns: ['Törökország', 'Izrael'],
          rows: [
            {
              label: 'Fekvés',
              cells: [
                'két kontinensen fekszik (Isztambul a Boszporusz két partján); a Dardanellák és a Boszporusz a Fekete-tengert köti össze a Földközi-tengerrel',
                'a Földközi-tenger keleti partján, kis terület, a Negev sivatag',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'sokoldalú: textil és ruházat, autó- és háztartásigép-gyártás, élelmiszer, idegenforgalom, mezőgazdaság (gyümölcs, gabona, gyapot)',
                'csúcstechnológia, informatika, gyémántcsiszolás, gyógyszeripar, öntözéses mezőgazdaság (csepegtető öntözés), vegyipar',
              ],
            },
            {
              label: 'Sajátosság',
              cells: [
                'kultúrák és kontinensek közötti híd (Európa és Ázsia, kereszténység és iszlám); az EU-val vámunió',
                'államalapítás 1948, a világ minden tájáról érkező bevándorlók; kutatás-fejlesztésre sokat költ; Tel Aviv-Jaffa a gazdasági központ',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A vallás szerepe.** Az iszlám az öltözködést, a nők helyzetét, a pénzügyeket (kamattilalom), az étkezést és a jogot is meghatározza; Szaúd-Arábiában vallási központok, zarándokturizmus (hadzs) hozza a bevételt; Izraelben a judaizmus, a zsidó állam és a környező arab államok vallási-politikai konfliktusa a gazdaságot és a mindennapokat is áthatja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép, topográfia: Himalája, Hindusztáni-alföld, Dekkán, Mekong, Jáva, Perzsa-öböl; fővárosok: Újdelhi, Bangkok, Jakarta, Rijád, Teherán, Bagdad, Ankara.',
            'Táblázat vagy diagram: India népességének alakulása, mezőgazdasági termelés; "melyik ország tartozik Délkelet-Ázsiához?".',
            'Kifejtés: duális gazdaság; miért gazdag a Perzsa-öböl, és mik az egyoldalú gazdaság kockázatai; Dubaj átalakulása.',
            'Emelt: források alapján India szolgáltatásexportja, a hagyományok szerepe; Törökország híd szerepe, Izrael gazdasága.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Délkelet- és Délnyugat-Ázsiát összekeverni (a név megtévesztő), valamint a duális gazdaságot "két ország" jelentésűnek hinni. A duális szerkezet egy országon belül két, egymástól elszakadó gazdasági szektor. Másik hiba: a Perzsa-öböl országait egyformán gazdagnak írni: a legnagyobb egy főre jutó jövedelem Kuvaitban és az Egyesült Arab Emírségekben van, a nagy népességű Iránban és Irakban kisebb.',
        },
        {
          kind: 'text',
          text: '**Mintaválasz-vázlat** ("Mutasd be India duális gazdaságát"): 1. állítás: egy országban két világ; 2. modern szektor: informatika (Bengaluru), gyógyszer, autóipar, nagyvárosok, külföldi tőke; 3. hagyományos szektor: kisparaszti mezőgazdaság (rizs, búza, gyapot, tea) a foglalkoztatottak nagy részével, kis jövedelem; 4. következmény: nagy jövedelemkülönbség, belső vándorlás, nyomornegyedek; 5. kitekintés: a felzárkózás feltétele az oktatás és az infrastruktúra.',
        },
        {
          kind: 'tip',
          text: 'A kőolajról szóló kifejtésben mindig említsd mindkét oldalt: a bevételt (fejlődés, jólét) és a kockázatot (egyoldalúság, ármozgás, konfliktusok, kimerülő készlet).',
        },
      ],
      topicMatch: ['india', 'délkelet-ázsia'],
      quiz: [
        {
          question: 'Mit jelent India duális gazdasága?',
          options: [
            'két hivatalos pénznemet',
            'modern, fejlett szektor és hagyományos, elmaradott szektor egymás mellett',
            'csak mezőgazdaságot',
            'két egyenlő ipari központot',
          ],
          answer: 1,
          explanation:
            'A modern informatika és ipar mellett nagy a hagyományos mezőgazdaságból élők aránya.',
        },
        {
          question: 'Melyik növény India nedves keleti részén, a Gangesz alsó folyásánál jellemző?',
          options: ['búza', 'rizs', 'kávé', 'olajfa'],
          answer: 1,
          explanation:
            'A bő csapadék és a meleg a rizstermesztésnek kedvez; a búza a szárazabb Pandzsábban terem.',
        },
        {
          question: 'Melyik ország tartozik Délkelet-Ázsiához?',
          options: ['Irán', 'Pakisztán', 'Indonézia', 'Szaúd-Arábia'],
          answer: 2,
          explanation:
            'Indonézia az Indonéz-szigetvilágon, Délkelet-Ázsiában fekszik; a másik három országot Délnyugat- vagy Dél-Ázsiába soroljuk.',
        },
        {
          question:
            'Melyik hajózási útvonal köti össze az Indiai- és a Csendes-óceánt, és fontos Délkelet-Ázsiában?',
          options: ['Szuezi-csatorna', 'Panama-csatorna', 'Malakka-szoros', 'Gibraltári-szoros'],
          answer: 2,
          explanation:
            'A Malakka-szoros a Malajzia és Indonézia (Szumátra) közötti szoros, Szingapúr mellett.',
        },
        {
          question: 'Mi jellemző a Perzsa-öböl menti országok gazdaságára?',
          options: [
            'sokoldalú feldolgozóipar',
            'a kőolaj- és földgázbevételre épülő, egyoldalú gazdaság',
            'öntözéses rizstermesztés',
            'halászat',
          ],
          answer: 1,
          explanation:
            'A bevételek zöme a kőolajból és a földgázból származik, ezért kiszolgáltatottak az olajár ingadozásának.',
        },
        {
          question: 'Mi Törökország világgazdasági-kulturális sajátossága?',
          options: [
            'Kultúrák és kontinensek közötti híd: területe Európában és Ázsiában is fekszik',
            'a Perzsa-öböl legnagyobb kőolajexportőre',
            'teljesen sivatagos ország',
            'szigetország a Csendes-óceánon',
          ],
          answer: 0,
          explanation:
            'Isztambul a Boszporusz két partján fekszik, Törökország Európa és Ázsia között ér át.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: India', url: wiki('India') },
        { label: 'Wikipédia: Délkelet-Ázsia', url: wiki('Délkelet-Ázsia') },
        { label: 'Wikipédia: Közel-Kelet', url: wiki('Közel-Kelet') },
      ],
    },
    {
      id: 'ausztralia-oceania-sarkvidekek',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Ausztrália, Óceánia és a sarkvidékek',
      level: 'kozep',
      requirement: {
        kozep:
          '9.3–9.4: Ausztrália sajátos természeti adottságai és erőforrásai, ezek hatása a társadalmi-gazdasági életre; a két sarkvidék földrajzi adottságainak összehasonlítása; az éghajlatváltozás következményei a sarkvidékeken.',
        emelt:
          '9.3–9.4: Óceánia fő földrajzi sajátosságai, a térség természeti és társadalmi-gazdasági jellemzői; az Antarktikán működő kutatóállomások jelentősége.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Ausztrália** a legkisebb és (az Antarktisz után) a legszárazabb kontinens, izolált fekvésű: ezért sok endemikus faj él itt (kenguru, koala). A belseje száraz (sivatag, félsivatag), a népesség a délkeleti partvidéken él.',
            'Felszín: nyugaton ősföld (**Nyugat-ausztráliai-ősföld**), középen **Ausztráliai-alföld** (a **Nagy-Artézi-medence** vízkincsével), keleten a **Nagy-Vízválasztó-hegység**. Folyó: **Murray**.',
            'Gazdaság: **bányászat** (vasérc, kőszén, bauxit, arany, uránérc) és mezőgazdaság (juh, marha, búza), nagy részük exportra megy, főleg Ázsiába.',
            '**Óceánia**: a Csendes-óceán szigetvilága (Melanézia, Mikronézia, Polinézia); vulkáni és korallszigetek.',
            '**Arktisz**: jéggel fedett tenger. **Antarktisz**: jégtakaróval borított kontinens, a Föld leghidegebb helye. Mindkettőt fenyegeti az éghajlatváltozás.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'artézi kút',
              text: 'Olyan kút, ahonnan a víz a rétegnyomás miatt önként a felszínre tör.',
            },
            { term: 'endemikus faj', text: 'Csak egy adott területen élő faj.' },
            {
              term: 'permafroszt',
              text: 'Az év nagy részében vagy tartósan fagyott talaj a sarkvidékeken.',
            },
            {
              term: 'albedó',
              text: 'Az a hányad, amelyet egy felszín a ráeső napsugárzásból visszaver. A hó és a jég albedója nagy.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ausztrália természeti adottságai' },
        {
          kind: 'text',
          text: 'Ausztrália területe kb. 7,7 millió km². Az **Ausztrál–Indiai-lemez** stabil része, ezért vulkáni és földrengés-veszély alig van. Nyugaton a **Nyugat-ausztráliai-ősföld** ősi, ércekben gazdag táblavidék. Középen az **Ausztráliai-alföld** fekszik, benne a **Nagy-Artézi-medence**, a Föld egyik legnagyobb artézi vízkészletével. A keleti partot a **Nagy-Vízválasztó-hegység** kíséri (idős, lepusztult hegység, legmagasabb csúcsa kb. 2200 m), ez választja el a nedves partvidéket a száraz belsőtől. A legfontosabb folyórendszer a **Murray** (és mellékfolyói), a legjelentősebb természeti érték a **Nagy-korallzátony** a keleti part előtt (világörökség).',
        },
        {
          kind: 'text',
          text: '**Éghajlat.** A kontinens az Egyenlítő–déli térítő sávban fekszik, a belseje a déli térítő körüli nagy nyomású öv alatt van, a keleti hegyvonulat pedig elzárja a csapadékot. Ezért a belső rész sivatagos és félsivatagos, északon forró, nyáron monszunhatású (trópusi), délkeleten és délnyugaton mérsékelt/mediterrán, bőségesebb csapadékkal. Az aszály, az erdőtüzek (bozóttüzek) és az áradások gyakoriak.',
        },
        {
          kind: 'compare',
          title: 'Természeti adottságok és gazdasági hatásuk',
          columns: ['Adottság', 'Hatás a gazdaságra és a népességre'],
          rows: [
            {
              label: 'Száraz éghajlat',
              cells: [
                'a belső terület kevés csapadékot kap',
                'extenzív állattartás (nagy farmok), kicsi népsűrűség (kb. 3–4 fő/km²)',
              ],
            },
            {
              label: 'Nagy-Artézi-medence',
              cells: [
                'a mélyből feltörő víz',
                'juh- és marhatenyésztés a száraz belsőben; a kutak vizének kiapadása veszély',
              ],
            },
            {
              label: 'Ősföld és idős hegység',
              cells: [
                'gazdag ércek és kőszén',
                'vasérc (Pilbara), kőszén, bauxit, arany, uránérc; Ausztrália a nyersanyag-kivitel élvonalában',
              ],
            },
            {
              label: 'Kedvező délkeleti éghajlat',
              cells: [
                'mérsékelt, elegendő csapadék',
                'búza, gyümölcs, bor, nagyvárosok (Sydney, Melbourne) – itt él a népesség többsége',
              ],
            },
            {
              label: 'Izoláltság',
              cells: [
                'hatalmas távolságok, szigetfekvés',
                'endemikus élővilág, repülőhálózat, a kereskedelem tengeri útvonalakra támaszkodik',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Ausztrália gazdaságára a **nyersanyag-kivitel** (vasérc, kőszén, cseppfolyós földgáz, arany) és az **agrártermékek** (gyapjú, hús, búza, bor) jellemzők; a legnagyobb vásárló Kína és a többi ázsiai ország. A szolgáltatások (oktatás, turizmus, pénzügy) adják a GDP legnagyobb részét. A népesség kb. 26 millió, nagyrészt európai származású (brit, ír), a bevándorlás ma már főleg Ázsiából érkezik, az őslakosok (**aboriginalok**) aránya kicsi. Fővárosa **Canberra** (mesterséges főváros, Sydney és Melbourne vetélkedése miatt épült), a legnagyobb városok **Sydney** és **Melbourne**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: népsűrűség és eloszlás',
          problem:
            'Ausztrália területe 7,7 millió km², népessége 26 millió fő. Mekkora az átlagos népsűrűség? Miért nem mond sokat ez az érték?',
          solution:
            '$26 / 7{,}7 \\approx 3{,}4$ fő/km². Az átlag azért félrevezető, mert a lakosság nagyobb része a délkeleti és keleti partvidéki nagyvárosokban él, a belső terület szinte lakatlan. Az átlag tehát nem mutatja az egyenlőtlen népességeloszlást.',
        },
        { kind: 'heading', text: 'A sarkvidékek' },
        {
          kind: 'compare',
          title: 'A két sarkvidék összehasonlítása',
          columns: ['Arktisz (északi)', 'Antarktisz (déli)'],
          rows: [
            {
              label: 'Felszín',
              cells: [
                'jéggel fedett tenger (Jeges-tenger), körülötte szárazföldek (Grönland, Szibéria, Alaszka, Kanada északi része)',
                'jégtakaróval borított kontinens (Antarktika), átlagosan 2000 m körüli jégvastagság',
              ],
            },
            {
              label: 'Hőmérséklet',
              cells: [
                'hideg, de a tenger enyhítő hatása miatt kevésbé szélsőséges, mint az Antarktiszon',
                'a Föld leghidegebb helye: magas fekvés, száraz levegő, a jég visszaveri a sugarakat; az abszolút minimum kb. −89 °C (Vosztok)',
              ],
            },
            {
              label: 'Élővilág',
              cells: [
                'tundra, jegesmedve, sarki róka, rénszarvas, fókák',
                'szárazföldön nincs magasabb rendű növényzet, a part menti kolóniákban pingvinek, fókák; a tenger krillben gazdag',
              ],
            },
            {
              label: 'Lakosság',
              cells: [
                'őslakos népek (inuitok, számik, nyenyecek), városok Szibériában és Alaszkában',
                'nincs állandó lakosság, csak kutatóállomások személyzete',
              ],
            },
            {
              label: 'Jogi helyzet',
              cells: [
                'a környező országok területe és gazdasági övezete',
                'az Antarktisz-egyezmény (1959): békés, tudományos célú felhasználás, katonai tevékenység tilos; a Madrid-jegyzőkönyv (1991) a bányászatot is tiltja',
              ],
            },
            {
              label: 'Kincsek',
              cells: [
                'kőolaj, földgáz, ércek, halászat',
                'nagy ásványkincs-potenciál, de védett; az édesvíz nagy része jég formájában',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Éghajlatváltozás a sarkvidékeken.** A sarkvidékek gyorsabban melegszenek, mint a Föld átlaga, mert az olvadó hó és jég helyén sötétebb tenger és szárazföld bukkan elő, amely több napsugárzást nyel el (kisebb albedó): ez **önerősítő folyamat**. Következmények: zsugorodik a nyári tengerjég az Arktiszon, olvadnak a gleccserek és a **grönlandi jégtakaró**, a szárazföldi jég olvadása emeli a világtenger szintjét. Az olvadó **permafroszt** metánt és szén-dioxidot szabadít fel (tovább fokozza a felmelegedést), épületek, utak süllyednek. Az élőhelyek változnak (jegesmedve, pingvin), de új hajózási útvonalak és ásványkincs-lelőhelyek válnak elérhetővé az Arktiszon, ami geopolitikai versengést okoz. Az Antarktisz nyugati részén a jégtakaró vesztesége gyorsul.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Óceánia szigetei',
          columns: ['Név jelentése', 'Példák és jellemzők'],
          rows: [
            {
              label: 'Melanézia',
              cells: [
                '"fekete szigetek"',
                'Új-Guinea (nagy, hegyes, esőerdős), Salamon-szigetek, Fidzsi; sok nyelv, ércek',
              ],
            },
            {
              label: 'Mikronézia',
              cells: [
                '"kis szigetek"',
                'Mariana-szigetek, Marshall-szigetek, Kiribati; kicsi korallszigetek',
              ],
            },
            {
              label: 'Polinézia',
              cells: [
                '"sok sziget"',
                'Hawaii, Tahiti, Új-Zéland, Húsvét-sziget; nagy kiterjedés, közös kultúra',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Óceánia** (az Ausztrálián kívül) a Csendes-óceán vizeit szórványosan benépesítő szigetek összessége. Háromféle szigettípus: **kontinentális szigetek** (Új-Guinea, Új-Zéland, Tasmánia), **vulkáni szigetek** (Hawaii, Fidzsi; magasak, termékeny talajjal) és **korallszigetek** (atollok: alacsonyak, kis termőfölddel). A kis szigeteken kevés a természeti erőforrás, ezért a gazdaság a halászatra, a kókuszra (kopra), a turizmusra és külföldi segélyekre épül. A **tengerszint emelkedése** és a viharok fenyegetik az alacsony atollokat (Tuvalu, Kiribati, Marshall-szigetek). **Új-Zéland** fejlett: juh- és tejtermékexport, turizmus, főváros **Wellington**, két fő szigete az Északi- és a Déli-sziget (a Csendes-óceáni tűzgyűrűn fekszik: vulkánok, földrengések).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Az Antarktikán működő kutatóállomások jelentősége.** Az Antarktisz-egyezmény (1959) szerint a kontinens a tudomány kontinense. Az állomásokon ezeket vizsgálják: a jégfuratok mintái a múlt éghajlatát őrzik (több százezer évre visszamenő légköri összetétel), az ózonréteg vékonyodása (az "ózonlyukat" itt észlelték), a meteoritok, az élővilág, a csillagászat és a geofizika. A nemzetközi együttműködés eredménye az éghajlatváltozás tudományos megértése.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Topográfia: Ausztráliai-alföld, Nagy-Artézi-medence, Nagy-korallzátony, Nagy-Vízválasztó-hegység, Murray; Sydney, Melbourne, Canberra; emelten Új-Zéland, Tasmánia, Új-Guinea, Melanézia, Mikronézia, Polinézia, Wellington.',
            'Éghajlati diagram, térkép: miért száraz Ausztrália belseje; hol él a népesség; a bányászati és mezőgazdasági területek.',
            'Összehasonlítás: Arktisz és Antarktisz – táblázatos kifejtés szempontok szerint.',
            'Kifejtés: az éghajlatváltozás következményei a sarkvidékeken, okok és hatások láncban.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az Arktiszt kontinensnek nevezni (ott tenger van, nem szárazföld), vagy az Antarktiszt lakottnak hinni. Másik hiba: Ausztrália fővárosának Sydneyt írni (Canberra). Az éghajlatváltozásnál ne csak a "melegedés"-t írd: nevezd meg a visszacsatolást (albedó) és a következményt (tengerszint, élőhely, hajózás).',
        },
        {
          kind: 'text',
          text: '**Mintaválasz-vázlat** ("Magyarázd meg, miért kevés ember él Ausztráliában, és miért a partvidéken"): 1. a kontinens belsejében a déli térítő körüli száraz öv és a hegyek miatt sivatag van; 2. a mezőgazdaság extenzív (nagy farmok), kevés munkahely; 3. a délkeleti és a keleti partvidéken elegendő a csapadék, jó a kikötő, itt a nagyvárosok; 4. bányák a sivatagban, kis létszámú, távoli települések; 5. következmény: erősen városlakó, partvidéki népesség, hatalmas távolságok.',
        },
        {
          kind: 'tip',
          text: 'A sarkvidékek összehasonlításánál mindig az alapból indulj: az egyik jéggel fedett tenger, a másik jégtakaróval borított szárazföld. Ebből következik a hőmérséklet, a lakosság és a jogi helyzet különbsége.',
        },
      ],
      topicMatch: ['ausztrália', 'óceánia', 'sarkvidék'],
      quiz: [
        {
          question: 'Mi teszi lehetővé a juhtenyésztést Ausztrália száraz belsejében?',
          options: ['a monszun', 'a gleccserek', 'az artézi kutak vize', 'a sok folyó'],
          answer: 2,
          explanation: 'A Nagy-Artézi-medence rétegvizei artézi kutakból törnek fel.',
        },
        {
          question: 'Miben különbözik az Antarktisz az Arktisztól?',
          options: [
            'az Antarktisz melegebb',
            'az Arktiszon nincs jég',
            'az Antarktisz jéggel borított kontinens, az Arktisz jéggel fedett tenger',
            'az Antarktiszon őslakosok élnek',
          ],
          answer: 2,
          explanation: 'Az Antarktisz szárazföld, az Arktisz a Jeges-tenger és környéke.',
        },
        {
          question: 'Melyik Ausztrália fővárosa?',
          options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
          answer: 2,
          explanation: 'Ausztrália fővárosa Canberra, a legnagyobb város Sydney.',
        },
        {
          question: 'Miért gyorsítja a melegedést a sarki jég olvadása?',
          options: [
            'mert a jég több hőt bocsát ki',
            'mert a sötétebb felszín több napsugárzást nyel el, mint a fehér jég',
            'mert a jég szén-dioxidot termel',
            'mert a tenger szintje csökken',
          ],
          answer: 1,
          explanation:
            'A hó és a jég albedója nagy; amikor eltűnik, a sötétebb felszín több energiát nyel el.',
        },
        {
          question: 'Mit tilt az Antarktisz-egyezmény (1959) az Antarktiszon?',
          options: [
            'a tudományos kutatást',
            'a katonai célú felhasználást',
            'a turizmust az egész kontinensen',
            'a halászatot minden vizén',
          ],
          answer: 1,
          explanation:
            'Az egyezmény békés, tudományos célokra tartja fenn a kontinenst, a katonai tevékenység tilos.',
        },
        {
          question: 'Melyik szigetcsoporthoz tartozik Hawaii és Új-Zéland?',
          options: ['Melanézia', 'Mikronézia', 'Polinézia', 'Antillák'],
          answer: 2,
          explanation: 'Hawaii, Tahiti és Új-Zéland a Polinézia háromszögének csúcsai.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Ausztrália földrajza', url: wiki('Ausztrália földrajza') },
        { label: 'Wikipédia: Antarktisz-egyezmény', url: wiki('Antarktisz-egyezmény') },
        { label: 'Wikipédia: Óceánia', url: wiki('Óceánia') },
      ],
    },
    {
      id: 'afrika-ausztralia-sarkvidekek',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Afrika',
      level: 'kozep',
      requirement: {
        kozep:
          '9.5: a népességrobbanás következményei; a gazdasági fejlődést nehezítő tényezők és a felzárkózás lehetőségei; gazdaságilag fejlett és elmaradott területek, országok, jellemző gazdasági ágazatok; a trópusi mezőgazdaság jellemző formái és az azokhoz kötődő életmódok különbségei; Észak-Afrika és Trópusi-Afrika (szubszaharai Afrika) földrajzi adottságainak összehasonlítása; a Száhel-öv környezeti problémái és kialakulásuk tényezői.',
        emelt:
          '9.5: a népek és kultúrák találkozásából adódó problémák példák alapján; az ősi kultúra és a globalizáció sajátos kapcsolódása Egyiptom példáján; a Dél-afrikai Köztársaság mint a kontinens meghatározó gazdasági központja.',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Afrikát az Egyenlítő kettészeli, ezért övezetessége szimmetrikus: középen esőerdő (**Kongó-medence**), kifelé szavanna, sivatag (északon a **Szahara**, délen a Namib és a Kalahári), a szélein mediterrán terület.',
            '**Észak-Afrika** arab-iszlám kultúrájú, szárazabb, kőolajban és földgázban gazdag (Líbia, Algéria), a Nílus völgyében sűrű népesség él (Egyiptom). **Trópusi-Afrika** (szubszaharai Afrika) a legszegényebb térség.',
            'A **népességrobbanás** miatt gyorsan nő a népesség, a városok túlzsúfoltak, gyakori az éhezés, sok a fiatal, kevés a munkahely.',
            'Trópusi mezőgazdaság: **talajváltó** önellátó gazdálkodás, **ültetvények** (kakaó, kávé, tea), **nomád pásztorkodás** a száraz területeken.',
            'A **Száhel** övezetben súlyos az **elsivatagosodás**: aszály, túllegeltetés, fakivágás és népességnövekedés együtt okozza.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten még',
          items: [
            '**Egyiptom**: az ősi kultúra emlékei és a turizmus, a Nílus és a Szuezi-csatorna.',
            'A **Dél-afrikai Köztársaság** a kontinens meghatározó gazdasági központja.',
            'A gyarmati határok miatti népek-és-kultúrák közti konfliktusok.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Száhel',
              text: 'A Szahara déli peremén húzódó átmeneti sáv a sivatag és a szavanna között.',
            },
            {
              term: 'elsivatagosodás',
              text: 'A termőtalaj és a növénytakaró pusztulása száraz területeken, amelynek nyomán sivatagi viszonyok alakulnak ki.',
            },
            {
              term: 'talajváltó gazdálkodás',
              text: 'A trópusi erdő felégetésével nyert területen néhány évig termesztenek, majd a kimerült földet elhagyják.',
            },
            {
              term: 'nomád pásztorkodás',
              text: 'Az állatok legelőjét és vizét követő vándorló állattartás.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Felszín, vizek, övezetek' },
        {
          kind: 'text',
          text: 'Afrika (kb. 30 millió km²) a Föld második legnagyobb kontinense. A felszín nagy része az **Afrikai-ősföld** magasföldjeiből áll (**Dél-afrikai-**, **Etióp-**, **Kelet-afrikai-magasföld**). A medencék közül a legnagyobb a **Kongó-medence**. Északnyugaton a fiatal gyűrthegység, az **Atlasz** emelkedik. Keleten az **Afrikai-árokrendszer** a lemezek szétválásának nyoma (vulkánok: **Kilimandzsáró**, a kontinens legmagasabb pontja, kb. 5895 m). A tavak: **Viktória-tó** (a kontinens legnagyobb tava), **Tanganyika-tó** (nagyon mély árokvölgyi tó). A folyók: a **Nílus** (a Föld egyik leghosszabb folyója, Viktória-tótól és Etióp-magasföldtől a Földközi-tengerig), a **Kongó**, a **Niger**, a **Zambézi**; a legnagyobb sziget **Madagaszkár**. A **Szuezi-csatorna** a Vörös-tengert és a Földközi-tengert köti össze.',
        },
        {
          kind: 'text',
          text: 'Övezetesség: az Egyenlítő mentén egyenlítői **esőerdő** (Kongó-medence, Guineai-öböl partja), tőle északra és délre **szavanna** (nyáron esős, télen száraz évszak; jellemző az akácfa és a nagy testű emlősök), majd **félsivatag** és **sivatag** (Szahara, Namib, Kalahári), a legkülső szegélyeken **mediterrán** éghajlat (az Atlasz vidéke, a Fokföld).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'További emelt szintű nevek: a **Kalahári-medence** és a **Namib-sivatag** (a Namibot a part mentén áramló hideg **Benguela-áramlás** hűti, ezért a part menti levegő nem hoz esőt), a **Teleki-vulkán** az Afrikai-árokrendszerben, a **Csád-tó** (a Száhelben, az aszályok miatt erősen zsugorodott), a **Zambézi** és a **Niger** folyók, valamint a **Kanári-** és a **Seychelle-szigetek**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: hőmérséklet a magassággal (Kilimandzsáró)',
          problem:
            'A Kilimandzsáró lábánál, a tengerszinten 28 °C a hőmérséklet. Mennyi a hőmérséklet a csúcson, 5895 m-en, ha 100 méterenként átlagosan 0,6 °C-kal hűl a levegő? Mit mutat ez az övezetességről?',
          solution:
            'A hőmérséklet-csökkenés $5895 / 100 \\cdot 0{,}6 \\approx 35{,}4$ °C. A csúcson tehát $28 - 35{,}4 \\approx -7{,}4$ °C. A forró egyenlítői térségben a hegy lábánál szavanna, feljebb erdő, majd a csúcs közelében gleccser van: a **függőleges övezetesség** rövid távon megismétli a szélességi övezetességet.',
        },
        { kind: 'heading', text: 'Népességrobbanás' },
        {
          kind: 'text',
          text: 'Afrika népessége a 20. század közepétől rendkívül gyorsan nőtt (1950-ben kb. 225 millió, 2023-ban kb. 1,46 milliárd), a Föld lakosságának mintegy 18%-a. A halandóság az egészségügy és a védőoltások miatt csökkent, a születésszám a hagyományok, a vallás, a gyermekekre mint munkaerőre és időskori ellátásra való támaszkodás, az alacsony iskolázottság miatt magas maradt (a Trópusi-Afrikában gyakran 4–5 gyermek nőnként). Következmények: a fiatalok nagy aránya (a népesség jelentős része 15 év alatti), amihez nincs elég iskola és munkahely; élelmiszerhiány és éhezés; gyors, de ellenőrizetlen városodás (**Lagos**, **Kairó**), nyomornegyedek; a környezet terhelése (erdőirtás, túllegeltetés); kivándorlás. Lehetőség: ha az oktatás és a munkahelyteremtés lépést tart, a fiatal népesség a gazdasági fejlődés motorja lehet.',
        },
        { kind: 'heading', text: 'Miért nehéz a gazdasági fejlődés?' },
        {
          kind: 'compare',
          title: 'A gazdasági fejlődést nehezítő tényezők és a felzárkózás lehetőségei',
          columns: ['Nehezítő tényező', 'Felzárkózási lehetőség'],
          rows: [
            {
              label: 'Gyarmati örökség',
              cells: [
                'önkényes határok (a gyarmatosítók húzták, népeket szeltek ketté vagy zártak össze), nyersanyag-kivitelre szakosodott gazdaság',
                'regionális együttműködés (Afrikai Unió), kereskedelmi szövetségek',
              ],
            },
            {
              label: 'Egyoldalú gazdaság',
              cells: [
                'egy-két nyersanyag exportjától függ, a világpiaci ár ingadozik',
                'a nyersanyagok helyi feldolgozása, termékpaletta bővítése',
              ],
            },
            {
              label: 'Alacsony iskolázottság, egészségügy',
              cells: [
                'járványok (malária, HIV/AIDS), alultápláltság, kevés képzett szakember',
                'oktatási és egészségügyi programok, nemzetközi segélyek',
              ],
            },
            {
              label: 'Politikai instabilitás',
              cells: [
                'fegyveres konfliktusok, korrupció, menekültek',
                'stabil intézmények, béketeremtés',
              ],
            },
            {
              label: 'Infrastruktúra, éghajlat',
              cells: [
                'kevés út, vasút, áram; aszályok, árvizek',
                'infrastruktúra-építés, napenergia, öntözés',
              ],
            },
            {
              label: 'Adósság',
              cells: [
                'eladósodás, külföldi tőkétől való függés',
                'adósság-elengedés, helyi tulajdon, turizmus (például Kenya nemzeti parkjai)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Fejlett és elmaradott területek.** A kontinens gazdaságilag legfejlettebb térségei az Észak-Afrika mediterrán partvidéke (Tunézia, Marokkó, Egyiptom), a Dél-afrikai Köztársaság és néhány kőolajexportőr (Nigéria, Líbia, Algéria). A legszegényebbek a Száhel-övezet országai és a konfliktusok sújtotta országok. Jellemző ágazatok: a kőolaj és földgáz kitermelése (Nigéria, Líbia, Algéria), a bányászat (arany, platina, gyémánt, réz, foszfát), a kakaó- és kávétermesztés (Elefántcsontpart, Ghána, Etiópia, Kenya), a turizmus (Egyiptom, Tunézia, Kenya, Marokkó).',
        },
        { kind: 'heading', text: 'A trópusi mezőgazdaság formái és életmódok' },
        {
          kind: 'compare',
          title: 'Mezőgazdasági formák Afrikában',
          columns: ['Jellemzők', 'Életmód és példa'],
          rows: [
            {
              label: 'Talajváltó gazdálkodás',
              cells: [
                'égetéses irtás, kézi művelés, néhány évig termel, a kimerült földet elhagyják',
                'kis falvak, önellátás; kasszava, kukorica, jam, köles',
              ],
            },
            {
              label: 'Nomád pásztorkodás',
              cells: [
                'a száraz területeken az állatok után vándorolnak',
                'sátorlakás, vándorlás; tevék, kecskék, szarvasmarhák (Száhel, Szomália, masszájok Kelet-Afrikában)',
              ],
            },
            {
              label: 'Ültetvényes gazdálkodás',
              cells: [
                'exportra, egy növényből sok, bérmunkások',
                'kakaó (Elefántcsontpart, Ghána), kávé (Etiópia), tea (Kenya), olajpálma, gyapot; a világpiaci áraktól függ',
              ],
            },
            {
              label: 'Oázisgazdálkodás, öntözéses völgyek',
              cells: [
                'víz körüli, intenzív kertművelés a sivatagban és a folyók mentén',
                'datolya (Szahara), gyapot, rizs, gabona a Nílus völgyében',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Észak-Afrika és Trópusi-Afrika' },
        {
          kind: 'compare',
          title: 'A két nagy térség összehasonlítása',
          columns: ['Észak-Afrika', 'Trópusi-Afrika'],
          rows: [
            {
              label: 'Éghajlat, táj',
              cells: [
                'mediterrán partvidék, Atlasz, majd a Szahara',
                'egyenlítői esőerdő, szavanna, kisebb sivatagok, magasföldek',
              ],
            },
            {
              label: 'Népesség, kultúra',
              cells: [
                'arab-berber, főleg muszlim; a lakosság a partvidéken és a Nílus völgyében sűrű',
                'sok nép, nyelv és vallás; szétszórt; gyors növekedés',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'kőolaj, földgáz (Líbia, Algéria), foszfát (Marokkó), turizmus, öntözéses mezőgazdaság',
                'nyersanyagok (arany, gyémánt, réz, kőolaj), ültetvények, önellátó gazdálkodás',
              ],
            },
            {
              label: 'Fejlettség',
              cells: [
                'közepes, a partvidék fejlettebb',
                'a legszegényebb térség, kivéve a Dél-afrikai Köztársaságot',
              ],
            },
            {
              label: 'Kapcsolat a világgal',
              cells: [
                'Európa közelsége, a Földközi-tenger, a Szuezi-csatorna',
                'távolabb, közlekedési nehézségek, kevesebb tőke',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A Száhel és az elsivatagosodás' },
        {
          kind: 'text',
          text: 'A **Száhel** (az arab "part" szóból) a Szahara déli szegélye, a sivatag és a szavanna közötti átmeneti sáv, a Szenegáltól Szudánig. Éves csapadéka kevés (néhány száz mm) és ingadozó. Az 1970–80-as években nagy aszályok sújtották, az emberek tömegesen vándoroltak és éheztek.',
        },
        {
          kind: 'compare',
          title: 'A Száhel-övezet elsivatagosodásának tényezői',
          columns: ['Természeti okok', 'Emberi okok'],
          rows: [
            {
              label: 'Éghajlat',
              cells: [
                'ingadozó, kevés csapadék, többéves aszályok',
                'a lakosság gyors növekedése nagyobb terhelést ró a földre',
              ],
            },
            {
              label: 'Növényzet és talaj',
              cells: [
                'a gyér növénytakarót a szél és a hirtelen esők hordják el',
                'túllegeltetés, fakivágás tűzifának, túlművelés a kimerült talajon',
              ],
            },
            {
              label: 'Következmény',
              cells: [
                'homokmozgás, a termőföld pusztulása',
                'éhínség, kivándorlás, konfliktus a legelőkért',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **elsivatagosodás** láncolata: aszály és túllegeltetés, fakivágás → a növénytakaró pusztul → a szél és az eső elhordja a talajt → a terület sivataggá válik. Védekezés: fásítás és a **Nagy Zöld Fal** (a Száhel mentén tervezett erdősáv, 2007-ben indult), vízgyűjtő gátak, gondosabb legeltetés, tűzifa helyett napkályhák, a föld megtartó művelése.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Egyiptom: az ősi kultúra és a globalizáció.** A fáraók korának emlékei (piramisok, Luxor, Karnak, Asszuán) a világ turizmusának célpontjai, ezért az idegenforgalom és a **Szuezi-csatorna** (1869) a fő devizaforrások. A Nílus a "természet ajándéka": a lakosság túlnyomó többsége a keskeny folyóvölgyben és a deltában él, az ország területének csak kis része lakott. Az **Asszuáni-gát** (az 1960-as években épült) és a Nasszer-tó szabályozza a vizet, áramot ad és lehetővé teszi az évi többszöri aratást, de a folyó iszapja elmarad. Egyiptom kultúrája nemzetközi jelkép, ugyanakkor a modernizáció és a globális fogyasztás (Kairó, nagy népesség) feszültséget kelt az örökséggel.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A Dél-afrikai Köztársaság.** Fővárosai: **Pretoria** (közigazgatási), Fokváros (törvényhozó), Bloemfontein (igazságszolgáltatási). Gazdasági központja **Johannesburg**. Ásványkincsekben gazdag (arany, platina, gyémánt, kőszén, mangán), a kontinens legiparosodottabb országa, fejlett pénzügyi szektorral és infrastruktúrával, az ország a BRICS tagja. Az **apartheid** (1948–1994) öröksége, hogy ma nagyok a jövedelemkülönbségek és magas a munkanélküliség. A kontinens meghatározó, de nem egyetlen nagy gazdasága (Nigéria, Egyiptom is nagy).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Népek és kultúrák találkozásából adódó problémák.** A gyarmati határok közösségeket szakítottak szét vagy ellenséges csoportokat zártak egy államba; ebből törzsi-etnikai és vallási konfliktusok (Szudán, Nigéria, Ruanda), fegyveres összetűzések, menekültáradat, államok instabilitása ered. Ráadásul sok nyelv és hagyomány él együtt, a gyarmatosítók nyelve (angol, francia, portugál) lett a hivatalos nyelv.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Topográfia (I. feladatlap): Szahara, Atlasz, Kongó-medence, Etióp-magasföld, Kilimandzsáró, Nílus, Viktória-tó, Madagaszkár, Szuezi-csatorna; országok: Egyiptom, Kenya, Líbia, Nigéria, Tunézia, Dél-afrikai Köztársaság; fővárosok: Kairó, Abuja, Pretoria.',
            'Éghajlati diagram felismerése (esőerdő, szavanna, sivatag, mediterrán); övezetesség és tipikus tájak képről.',
            'Kifejtés: a népességrobbanás okai és következményei; az elsivatagosodás láncolata; Észak-Afrika és Trópusi-Afrika összehasonlítása.',
            'Emelt: források (szöveg, diagram) alapján a Dél-afrikai Köztársaság központi szerepe; Egyiptom turizmusa és a Nílus.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Afrikát egységesként kezelni. Észak-Afrika, a Száhel, a Kongó-medence és a Dél-afrikai Köztársaság adottsága, kultúrája és fejlettsége különbözik. Másik hiba: a népességrobbanás okaként a "nagy születésszámot" megjelölni, de a csökkenő halálozást kihagyni; a robbanást a kettő különbsége adja. Az elsivatagosodást nem csak természeti jelenségként írd le, az emberi tényezők is szerepet játszanak.',
        },
        {
          kind: 'text',
          text: '**Mintaválasz-vázlat** ("Mutasd be a Száhel környezeti problémáit"): 1. hol van (Szahara déli pereme), éghajlata (szavanna és félsivatag, kevés, ingadozó csapadék); 2. a probléma: elsivatagosodás; 3. természeti ok: aszályok; 4. emberi okok: népességnövekedés → túllegeltetés, fakivágás, túlművelés; 5. következmények: talajpusztulás, éhínség, vándorlás, konfliktus; 6. megoldás: fásítás, Nagy Zöld Fal, vízgazdálkodás, nemzetközi segítség.',
        },
        {
          kind: 'tip',
          text: 'A fejlődést nehezítő tényezőket mindig tedd ok-okozati kapcsolatba: például gyarmati nyersanyag-kivitel → egyoldalú gazdaság → ármozgásra érzékeny bevétel → kevés beruházás az oktatásba.',
        },
      ],
      topicMatch: ['afrika', 'elsivatagosodás'],
      quiz: [
        {
          question: 'Melyik övezetben súlyos az elsivatagosodás Afrikában?',
          options: ['Kongó-medence', 'Fokföld', 'Száhel', 'Madagaszkár keleti partja'],
          answer: 2,
          explanation: 'A Szahara déli peremén húzódó Száhel övezetben gyors az elsivatagosodás.',
        },
        {
          question: 'Mi jellemző a talajváltó gazdálkodásra?',
          options: [
            'nagyüzemi gépesített termelés',
            'az erdő felégetése után néhány évig művelt, majd elhagyott földek',
            'öntözéses rizstermesztés',
            'ültetvényes kávétermesztés',
          ],
          answer: 1,
          explanation:
            'A gyorsan kimerülő trópusi talaj miatt a földművesek néhány év után új területre költöznek.',
        },
        {
          question: 'Mi okozza leginkább az afrikai népességrobbanást?',
          options: [
            'a halálozás csökkenése, miközben a születésszám magas marad',
            'a születésszám csökkenése',
            'a bevándorlás Európából',
            'a halálozás növekedése',
          ],
          answer: 0,
          explanation:
            'Az egészségügy és a védőoltások miatt kevesebben halnak meg, a születések száma viszont magas, ezért gyors a növekedés.',
        },
        {
          question: 'Melyik kontinensrész gazdasága épül jellemzően kőolaj- és földgázkivitelre?',
          options: ['Észak-Afrika (Líbia, Algéria)', 'a Száhel-övezet', 'Madagaszkár', 'Etiópia'],
          answer: 0,
          explanation:
            'Líbia és Algéria jelentős kőolaj- és földgázexportőr; a Száhel és Etiópia szegény, mezőgazdasági.',
        },
        {
          question: 'Miért a Dél-afrikai Köztársaság a kontinens gazdasági központja?',
          options: [
            'a legnagyobb a népessége',
            'mert ásványkincsei és iparának, pénzügyi szektorának fejlettsége a legnagyobb',
            'mert a Szuezi-csatorna mellett fekszik',
            'mert nincsenek társadalmi feszültségek',
          ],
          answer: 1,
          explanation:
            'A gazdag ásványkincsek, a fejlett ipar és pénzügyi szektor teszi a kontinens meghatározó gazdasági központjává.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Afrika', url: wiki('Afrika') },
        { label: 'Wikipédia: Száhel', url: wiki('Száhel') },
        { label: 'Wikipédia: Egyiptom', url: wiki('Egyiptom') },
      ],
    },
    {
      id: 'amerika-foldrajza',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Amerika általános képe, az Egyesült Államok és Kanada',
      level: 'kozep',
      requirement: {
        kozep:
          '9.6.1–9.6.2: Észak-, Közép- és Dél-Amerika természeti adottságainak és erőforrásainak összehasonlítása; az észak–déli nyitottság és a kelet–nyugati zártság éghajlati következményei és veszélyhelyzetei Észak-Amerikában; a kontinens társadalmi-kulturális felosztása, a népességkeveredés következményei; az ültetvényeken és a farmokon folyó termelés. USA: világgazdasági vezető szerepe és kialakulása; a gazdaság jellemzése, térbeli elrendeződésének és szerkezetének átalakulása; amerikai TNC-k világgazdasági szerepe.',
        emelt:
          '9.6.1–9.6.2: az urbanizáció kontinensrészenként eltérő vonásai, agglomerálódó térségek; a népesség városba áramlásának okai és jellemzői; a kvaterner szektor szerepe a modern amerikai gazdaságban. USA: a népesség összetételének változásai, a bevándorlás szerepe. Kanada: az USA-val kialakult szoros gazdasági együttműködés földrajzi alapjai, szerepe az USMCA-ban.',
      },
      minutes: 20,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Nyugaton fiatal gyűrthegységek (**Kordillerák**, **Andok**), keleten idős hegységek (**Appalache**, **Brazil-felföld**, **Guyanai-hegyvidék**), középen nagy síkságok (**Mississippi-alföld**, **Préri**, **Amazonas-medence**, **Paraná-alföld**).',
            'Észak-Amerikában a hegyek észak–déli irányúak, ezért a hideg sarki és a meleg trópusi légtömegek akadálytalanul áramlanak (**észak–déli nyitottság**): hirtelen lehűlések, **tornádók**, **hurrikánok**. A Kordillerák elzárják a csendes-óceáni nedves levegőt (**kelet–nyugati zártság**), így a belső síkságok szárazabbak.',
            'Kulturális felosztás: **Angol-Amerika** (USA, Kanada) és **Latin-Amerika**; a népesség őslakosok, európai bevándorlók és afrikai rabszolgák utódainak keveredéséből alakult.',
            'Mezőgazdaság: **farmok** (gépesített, nagyüzemi) és **ültetvények** (trópusi növények exportra).',
            'Az **USA** a világ vezető gazdasága: fejlett szolgáltatások, csúcstechnológia (**Szilícium-völgy**), világméretű TNC-k, nagyüzemi farmgazdaság.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten még',
          items: [
            'Az urbanizáció eltérő vonásai, agglomerálódó térségek (megalopolisz).',
            'A **kvaterner szektor** szerepe az amerikai gazdaságban.',
            'A bevándorlás szerepe az USA társadalmi-gazdasági fejlődésében.',
            '**Kanada** és az **USMCA**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'farm',
              text: 'Gépesített, nagyüzemi, piacra termelő gazdaság (búza, kukorica, szója, hús).',
            },
            {
              term: 'ültetvény',
              text: 'Trópusi növényt (kávé, banán, cukornád) nagy tételben, sok munkaerővel, exportra termelő gazdaság.',
            },
            {
              term: 'TNC (transznacionális vállalat)',
              text: 'Több országban termelő és értékesítő nagyvállalat.',
            },
            {
              term: 'tornádó',
              text: 'A zivatarfelhőből a talajig nyúló, gyorsan forgó, pusztító légörvény.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Természeti adottságok: Észak-, Közép- és Dél-Amerika' },
        {
          kind: 'text',
          text: 'A kontinens két nagy részből áll (**Észak-Amerika** és **Dél-Amerika**), amelyeket a **Közép-Amerika** (szárazföldi földnyelv, Mexikó déli része Panamáig, valamint az **Antillák**) kapcsol össze. A nyugati partvonal mentén végighúzódik a **Kordillerák–Andok** hegyvonulata (Alaszkától Tűzföldig), amely a **Pacifikus-hegységrendszer** része: vulkánok (**Mount St. Helens**, 1980-ban volt nagy kitörése), földrengések. Északon a **Kanadai-ősföld** (**Labrador-félsziget**, **Hudson-öböl**), a **Nagy-tavak** és a **Szent Lőrinc-folyó**, a közepén a **Mississippi** és a **Préri**, keleten az **Appalache-hegység**; délen az **Amazonas-medence**, a **Guyanai-hegyvidék**, a **Brazil-felföld** és a **Paraná-alföld**.',
        },
        {
          kind: 'compare',
          title: 'Észak-, Közép- és Dél-Amerika összehasonlítása',
          columns: ['Észak-Amerika', 'Dél-Amerika'],
          rows: [
            {
              label: 'Hegységek',
              cells: [
                'Kordillerák (nyugaton), Appalache (keleten)',
                'Andok (nyugaton), Brazil-felföld és Guyanai-hegyvidék (keleten)',
              ],
            },
            {
              label: 'Alföldek',
              cells: ['Mississippi-alföld, Préri', 'Amazonas-medence, Paraná-alföld'],
            },
            {
              label: 'Éghajlat',
              cells: [
                'hideg (sarki, tajga, tundra), mérsékelt és szubtrópusi; a déli részen trópusi',
                'főleg trópusi (esőerdő, szavanna), délen mérsékelt',
              ],
            },
            {
              label: 'Ásványkincsek',
              cells: [
                'kőszén, kőolaj, földgáz, vasérc, réz, nikkel, uránérc, arany',
                'réz (Chile), vasérc, bauxit, ón, kőolaj (Venezuela), ezüst',
              ],
            },
            {
              label: 'Veszélyek',
              cells: [
                'tornádók, hurrikánok, hóviharok, földrengések, erdőtüzek',
                'földrengések és vulkánok az Andokban, árvizek, aszály, hurrikán a Karib-térségben',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Közép-Amerika** (**Mexikó**, **Costa Rica**, **Panama** és a szigetek: **Antillák**, **Kuba**): vulkáni hegyvidék, trópusi éghajlat, a **Karib-tenger** hurrikánjai, **Panama-csatorna** (a Csendes- és az Atlanti-óceánt összekötő hajózási út, 1914), ültetvények (banán, cukornád, kávé), turizmus.',
        },
        { kind: 'heading', text: 'Észak–déli nyitottság, kelet–nyugati zártság' },
        {
          kind: 'text',
          text: 'Észak-Amerika hegységei (Kordillerák, Appalache) észak–déli irányban húzódnak, tehát kelet–nyugati irányban zárnak, észak–déli irányban nyitottak. A nyugatról érkező nedves tengeri levegő a Kordillerákon felemelkedik, csapadékát a nyugati lejtőn leadja, a hegyen túl **esőárnyék** és száraz éghajlat alakul ki (Nagy-medence, a Préri nyugati része). Északról a sarki hideg levegő, délről a Mexikói-öböl meleg, nedves levegője akadálytalanul behatolhat az országba, ezek találkozásánál zivatarok, **tornádók** alakulnak ki (a Préri, "Tornádó-sáv"). A hurrikánok a Karib-tenger felől a Mexikói-öböl és az Atlanti-partvidék (Florida, New Orleans) ellen hatnak. Védekezés: előrejelzés, riasztás, kitelepítés, viharbiztos építkezés, árvízvédelem.',
        },
        { kind: 'heading', text: 'Társadalmi-kulturális felosztás és népességkeveredés' },
        {
          kind: 'compare',
          title: 'Angol-Amerika és Latin-Amerika',
          columns: ['Angol-Amerika (USA, Kanada)', 'Latin-Amerika'],
          rows: [
            {
              label: 'Gyarmatosítók',
              cells: ['angolok, franciák (Kanadában Québec)', 'spanyolok, portugálok (Brazília)'],
            },
            {
              label: 'Nyelv, vallás',
              cells: [
                'angol (Kanadában angol és francia), protestáns',
                'spanyol, portugál (Brazília), katolikus',
              ],
            },
            {
              label: 'Népesség',
              cells: [
                'európai bevándorlók, afrikai eredetűek, őslakosok kis aránya; ma sok ázsiai és latin-amerikai bevándorló',
                'erős keveredés: mesztic (európai és indián), mulatt (európai és afrikai), jelentős őslakos-arány az Andokban',
              ],
            },
            {
              label: 'Fejlettség',
              cells: ['fejlett centrum', 'félperiféria–periféria, nagy egyenlőtlenségek'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A népességkeveredés következménye a sokszínű kultúra, a zene és az ételek, az egyes országokban azonban a társadalmi egyenlőtlenség (kik a földtulajdonosok, kik a szegények) és a faji-etnikai feszültségek is együtt járnak vele. A népesség az Egyesült Államokban és Kanadában is vegyes eredetű (bevándorlók), az őslakosok (indiánok, inuitok) háttérbe szorultak.',
        },
        { kind: 'heading', text: 'Farmok és ültetvények' },
        {
          kind: 'compare',
          title: 'Farm és ültetvény',
          columns: ['Farm (Észak-Amerika, Argentína)', 'Ültetvény (Közép- és Dél-Amerika)'],
          rows: [
            {
              label: 'Termények',
              cells: ['búza, kukorica, szója, hús, gyapot', 'kávé, banán, kakaó, cukornád, dohány'],
            },
            {
              label: 'Munka',
              cells: ['gépesített, kevés munkaerő', 'sok kézi munkaerő, bérmunkások'],
            },
            { label: 'Éghajlat', cells: ['mérsékelt, szubtrópusi', 'trópusi'] },
            {
              label: 'Piac',
              cells: [
                'hazai és világpiac, élelmiszer-gazdaság',
                'főleg export, a világpiaci ár ingadozik',
              ],
            },
            {
              label: 'Övezetek',
              cells: [
                'búzaöv, kukoricaöv, gyapotöv, tejgazdasági öv',
                'Karib-térség, Brazília, Kolumbia, Ecuador',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Az Egyesült Államok' },
        {
          kind: 'text',
          text: 'Az **Amerikai Egyesült Államok** területe kb. 9,8 millió km², lakossága kb. 335 millió. Fővárosa **Washington** (D.C.), a gazdasági-kulturális központok: **New York**, **Los Angeles**, **Chicago**, **Houston**, **San Francisco**, **Seattle**, **Dallas**, **Atlanta**, **New Orleans**. Az ország belseje a Préri farmvidéke, folyórendszere a **Mississippi**, **Colorado**, a **Nagy-tavak** (Felső-, Michigan-, Huron-, Erie-, Ontario-tó) és a **Niagara-vízesés** a kanadai határon. A természeti erőforrások (termékeny préritalaj, kőszén, kőolaj, földgáz, vasérc, réz, sok víz, erdők) kedveznek a fejlődésnek.',
        },
        {
          kind: 'text',
          text: '**Hogyan lett az USA a világgazdaság vezetője?** Kedvező természeti adottságok és hatalmas belső piac; a bevándorlás munkaerőt és tudást hozott; az ipari forradalom a 19. század végén gyorsan kiterjedt (vasút, acél, autó); a két világháborúban az USA nem szenvedett háborús pusztítást, hanem hitelező és szállító lett; 1945 után a dollár a világ vezető pénze, az USA a technológiai és katonai vezető. Ma a világ legnagyobb gazdasága (a GDP a világ összes GDP-jének mintegy negyede), a gazdaság szerkezetében a szolgáltatások a meghatározók (a GDP nagyjából négyötöde), az ipar és a mezőgazdaság aránya kicsi, a mezőgazdaság viszont a világ élvonalába tartozó exportőr (kukorica, szója, búza).',
        },
        {
          kind: 'compare',
          title: 'Az amerikai gazdaság térbeli átalakulása',
          columns: ['Hagyományos iparvidék', 'Új növekedési térség'],
          rows: [
            {
              label: 'Hol',
              cells: [
                'Északkelet és a Nagy-tavak vidéke ("Iparöv", később "Rozsdaöv"): Detroit, Chicago, Pittsburgh',
                'Dél és Nyugat ("Napfény-öv"): Kalifornia, Texas, Florida',
              ],
            },
            {
              label: 'Ágazatok',
              cells: [
                'kohászat, autógyártás, gépgyártás',
                'elektronika, informatika (**Szilícium-völgy**), repülő- és űripar, olaj és vegyipar (Houston), szórakoztatóipar (Los Angeles), turizmus',
              ],
            },
            {
              label: 'Folyamat',
              cells: [
                'elavult üzemek bezártak, munkanélküliség, a népesség elvándorolt',
                'kedvező éghajlat, új technológiák, kutatóegyetemek, kockázati tőke, gyorsan növekvő népesség',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Amerikai TNC-k.** Az amerikai székhelyű, világszerte termelő és értékesítő vállalatok a globális gazdaság meghatározó szereplői: informatika (Microsoft, Apple, Alphabet/Google, Amazon), autó (Ford, General Motors), élelmiszer és ital (Coca-Cola, PepsiCo), kereskedelem (Walmart), energia (ExxonMobil), repülőgépgyártás (Boeing). Kutatás-fejlesztés az USA-ban, termelés sok országban (olcsó munkaerő), értékesítés az egész világon; így befolyásolják a kereskedelmet, a technológiát és a fogyasztási szokásokat.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Urbanizáció.** Az USA és Kanada magas fokon urbanizált, a népesség többsége nagyvárosok agglomerációiban él, a városok kiterjedtek, alacsony beépítésűek (elővárosok, "suburbia"), sok autóval. Az **agglomerálódó térségek**: a keleti partvidék **megalopolisza** (Boston–New York–Washington), a Nagy-tavak mente (Chicago–Detroit), a kaliforniai partvidék (San Francisco–Los Angeles). Latin-Amerikában az urbanizáció gyors, a városok peremén nyomornegyedek vannak (fejlődő világ mintázata).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A kvaterner szektor.** A negyedik gazdasági szektor a tudásalapú szolgáltatások csoportja: kutatás-fejlesztés, informatika, szoftverfejlesztés, tanácsadás, felsőoktatás, biotechnológia, pénzügyi és szellemi szolgáltatások. Az amerikai gazdaság innovációs erejének alapja a nagy kutatóegyetem (Stanford, MIT) és a vállalatok szoros kapcsolata, valamint a kockázati tőke.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Népességösszetétel és bevándorlás.** Az USA a bevándorlók országa. A 17–19. században főleg angolok, írek, németek, az afrikai rabszolgák, a 19. század végén és a 20. század elején olasz, kelet-európai és zsidó bevándorlók érkeztek, a 20. század második felében egyre inkább latin-amerikaiak és ázsiaiak. Ma a lakosság közel ötöde latin-amerikai (hispán) eredetű. A bevándorlás munkaerőt, tehetséget és fiatal korösszetételt adott a gazdaságnak, de társadalmi feszültségeket és vitát is okoz.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Kanada és az USA gazdasági kapcsolata',
          columns: ['Földrajzi alap', 'Gazdasági következmény'],
          rows: [
            {
              label: 'Közös határ',
              cells: [
                'a világ leghosszabb szárazföldi határa, a népesség a déli sávban él, a határ mentén',
                'a hálózatok (vasút, út, elektromos hálózat, kőolajvezeték) összenőttek',
              ],
            },
            {
              label: 'Kiegészítő adottságok',
              cells: [
                'Kanada: nagy kiterjedés, kevés lakos, nyersanyagok (kőolaj, földgáz, fa, érc, vízenergia); USA: nagy piac',
                'Kanada nyersanyagot, energiát szállít, az USA a fő vevő; az USA a fő beruházó',
              ],
            },
            {
              label: 'Szerződés',
              cells: [
                'NAFTA (1994), utódja az **USMCA** (2020): Kanada, Mexikó, USA szabadkereskedelmi térsége',
                'vámmentes kereskedelem, közös autóipar, Kanada exportjának döntő része az USA-ba megy',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Kanada területe kb. 10 millió km² (a Föld második legnagyobb országa), lakossága kb. 40 millió. Fővárosa **Ottawa**, nagy városai **Toronto**, **Montréal** és **Vancouver**. A Kanadai-ősföld gazdag ércekben, **Alberta** olajhomokja a világ egyik legnagyobb olajkészlete, a Nagy-tavak és a Szent Lőrinc-folyó kedvez a hajózásnak. A hidegebb északi területeken ritka a lakosság.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Topográfia: Kordillerák, Sziklás-hegység, Appalache, Mississippi-alföld, Préri, Nagy-tavak, Niagara-vízesés, Mexikói-öböl, Floridai-félsziget, Alaszka, Hawaii; New York, Washington, Los Angeles, Chicago, San Francisco, Houston.',
            'Térkép és ábra: tornádók és hurrikánok előfordulása; a farmövek (búza-, kukoricaöv) felismerése; "Rozsdaöv" és "Napfény-öv" a térképen.',
            'Kifejtés: az észak–déli nyitottság következményei; az USA világgazdasági szerepe és annak kialakulása; amerikai TNC-k példákkal; a Napfény-öv felemelkedése.',
            'Emelt: források alapján a bevándorlás szerepe, a kvaterner szektor, Kanada és az USMCA.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az "észak–déli nyitottságot" összekeverni a hegységek irányával. A hegységek észak–déli irányúak, ezért a légtömegek észak–déli irányban szabadon mozognak. Másik hiba: az USA mezőgazdaságát kis jelentőségűnek írni: a termelés a világ élvonalában van, a foglalkoztatás aránya viszont kicsi, mert gépesített.',
        },
        {
          kind: 'text',
          text: '**Mintaválasz-vázlat** ("Mutasd be az észak–déli nyitottság és a kelet–nyugati zártság hatásait"): 1. a hegységek (Kordillerák, Appalache) észak–déli irányúak; 2. nyitottság: sarki hideg levegő délre, trópusi meleg levegő északra áramlik; 3. következmény: hirtelen lehűlések, tornádók (Préri), hurrikánok (Mexikói-öböl, Atlanti-part); 4. zártság: a Kordillerák megfogják a csendes-óceáni nedvességet, esőárnyék a belső fennsíkokon; 5. védekezés: előrejelzés, riasztás, építési előírások, biztosítás.',
        },
        {
          kind: 'tip',
          text: 'Az USA-nál használd a "mi változott" gondolkodást: ipar (Iparöv) → szolgáltatás, informatika (Napfény-öv); mezőgazdaság → nagyüzem; bevándorlás → összetétel. A változás okát és következményét is írd le.',
        },
      ],
      topicMatch: ['=amerika', 'észak-amerika', 'egyesült államok'],
      quiz: [
        {
          question: 'Miért gyakoriak Észak-Amerikában a hirtelen hidegbetörések és a tornádók?',
          options: [
            'mert a hegyek kelet–nyugati irányúak',
            'mert nincs tengerpart',
            'mert a hegyek észak–déli irányúak, és a légtömegek akadálytalanul áramlanak',
            'mert a kontinens az Egyenlítőn fekszik',
          ],
          answer: 2,
          explanation:
            'Az észak–déli nyitottság miatt a hideg és a meleg légtömegek szabadon találkoznak.',
        },
        {
          question: 'Mi jellemző a farmgazdaságra?',
          options: [
            'önellátó, kézi munka',
            'gépesített, nagyüzemi, piacra termelő gazdálkodás',
            'nomád pásztorkodás',
            'talajváltó gazdálkodás',
          ],
          answer: 1,
          explanation: 'A farm nagyüzemi, gépesített, piacra termelő gazdaság.',
        },
        {
          question: 'Melyik terület az USA új, dinamikusan fejlődő gazdasági térsége?',
          options: [
            'a Rozsdaöv',
            'a Napfény-öv (Kalifornia, Texas, Florida)',
            'a Nagy-tavak mente',
            'Alaszka belső része',
          ],
          answer: 1,
          explanation:
            'A Dél és a Nyugat új iparágai (informatika, űripar, szolgáltatás) vonzották a tőkét és a népességet.',
        },
        {
          question: 'Mi a TNC?',
          options: [
            'nemzetközi szerződés',
            'több országban termelő és értékesítő nagyvállalat',
            'természetvédelmi szervezet',
            'szabadkereskedelmi övezet',
          ],
          answer: 1,
          explanation:
            'A transznacionális vállalat több országban működik (például Apple, Coca-Cola, Ford).',
        },
        {
          question: 'Melyik gazdasági szerződés tagja Kanada az USA-val és Mexikóval?',
          options: ['EU', 'ASEAN', 'USMCA', 'OPEC'],
          answer: 2,
          explanation:
            'Az USMCA a NAFTA utódja: Kanada, Mexikó és az USA szabadkereskedelmi egyezménye.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Amerikai Egyesült Államok földrajza',
          url: wiki('Amerikai Egyesült Államok földrajza'),
        },
        { label: 'Wikipédia: Észak-Amerika', url: wiki('Észak-Amerika') },
        { label: 'Wikipédia: Kanada gazdasága', url: wiki('Kanada gazdasága') },
      ],
    },
    {
      id: 'latin-amerika-mexiko-brazilia',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Latin-Amerika, Mexikó, Brazília, banánköztársaságok és adóparadicsomok',
      level: 'kozep',
      requirement: {
        kozep: '9.6.2: Latin-Amerika: a gazdasági fejlődést befolyásoló tényezők.',
        emelt:
          '9.6.2: Latin-Amerika: a gazdasági fejlődés történelmi összefüggései. Mexikó: az USA és Mexikó határán kialakult gazdasági övezet jellemzői, az ország szerepe az USMCA-ban. Brazília: igazolja, hogy feltörekvő nagygazdaság. „Banánköztársaságok”, adóparadicsomok: példa banánköztársaságra, a gazdasági sebezhetőség okai és következményei, világgazdasági szerepük; adóparadicsomok a közép-amerikai térségben, gazdasági jellemzőik és világgazdasági szerepük.',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Latin-Amerika** (Mexikó, Közép-Amerika és Dél-Amerika) népessége kb. 650 millió fő; spanyol és portugál gyarmati örökség, katolikus vallás, erős népességkeveredés, nagy jövedelemkülönbségek.',
            'A fejlődést befolyásoló tényezők: **gyarmati múlt** (nagybirtokok, nyersanyag-kivitel), **egyoldalú export**, eladósodás, politikai instabilitás, gyors városodás és nyomornegyedek, egyenlőtlen birtokeloszlás; előny a sok nyersanyag és a nagy belső piac.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten még',
          items: [
            '**Mexikó** az USMCA tagja, az amerikai határ mentén összeszerelő üzemek övezete alakult ki.',
            '**Brazília** feltörekvő nagygazdaság (BRICS): vasérc, szója, kávé, cukornád, repülőgépgyártás.',
            '**Banánköztársaságok** (egy exportterményre épülő, külföldi vállalatoktól függő kis országok, például Honduras, Guatemala) és **adóparadicsomok** (Kajmán-szigetek, Bahama-szigetek, Panama).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nagybirtok (latifundium)',
              text: 'A földet kevés család birtokolja, a földnélküli parasztok bérmunkások vagy kisbérlők.',
            },
            {
              term: 'favella',
              text: 'A brazil nagyvárosok szegény, szabálytalanul beépített nyomornegyede.',
            },
            {
              term: 'feltörekvő gazdaság',
              text: 'Gyors növekedésű, iparosodó, nagy népességű, de még nem fejlett ország (BRICS: Brazília, Oroszország, India, Kína, Dél-afrikai Köztársaság).',
            },
            {
              term: 'adóparadicsom',
              text: 'Alacsony vagy nulla adót kínáló, a tulajdonosok adatait védő, kis ország vagy terület.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Latin-Amerika gazdasági fejlődése' },
        {
          kind: 'text',
          text: 'Latin-Amerika mintegy 20 országból áll, ezek közül a legnagyobbak **Brazília**, **Mexikó**, **Argentína**, **Kolumbia**. A térség sokféle természeti adottságot egyesít: az **Andok** hegysége és a hozzá tartozó ásványi kincsek (réz Chilében, ón Bolíviában, ezüst Mexikóban és Peruban), az **Amazonas-medence** esőerdeje, a **Pampa** gazdag legelői és szántói, a **Karib-térség** trópusi szigetei. Népesség: a lakosság nagy része a part menti és a magasföldi nagyvárosokban él; a városodás mértéke magas (a népesség jelentős többsége városlakó), de gyakran ipar nélkül ("túlurbanizáció").',
        },
        {
          kind: 'compare',
          title: 'A latin-amerikai gazdasági fejlődést befolyásoló tényezők',
          columns: ['Hátráltató tényezők', 'Segítő tényezők'],
          rows: [
            {
              label: 'Történelem',
              cells: [
                'gyarmati kor: nyersanyag-kivitel az anyaországnak, nagybirtokrendszer',
                'a 19. század eleji függetlenség óta önálló államok',
              ],
            },
            {
              label: 'Társadalom',
              cells: [
                'nagy jövedelemkülönbség, szegénység, rossz színvonalú oktatás, informális szektor',
                'fiatal, egyre képzettebb népesség, nagy belső piac',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'egyoldalú nyersanyag- és mezőgazdasági export (ár- és konjunktúraérzékeny), külföldi tőke, eladósodás',
                'gazdag ásványkincsek, energia, mezőgazdasági termőterület, egyes iparosodó központok',
              ],
            },
            {
              label: 'Politika',
              cells: [
                'katonai diktatúrák, instabilitás, korrupció, bűnözés',
                'demokratizálódás, regionális együttműködés (például Mercosur)',
              ],
            },
            {
              label: 'Természet',
              cells: [
                'földrengések, hurrikánok, árvizek, nehezen átjárható esőerdő és Andok',
                'sok víz, termékeny talaj, trópusi növények',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Történelmi összefüggések.** A spanyol és portugál hódítás (16. század) után az őslakos birodalmak (azték, maja, inka) összeomlottak. A gyarmatosítók ültetvényeket és bányákat létesítettek, őslakos és afrikai rabszolga-munkaerővel, a javak az anyaországba mentek. A nagybirtok (latifundium) rendszere megmaradt a függetlenség (19. század eleje) után is. A 20. században a nyersanyagexportra épült modell függővé tette a térséget a világpiactól, az 1980-as években a külföldi hitelek miatt adósságválság tört ki, sok országban katonai diktatúrák váltották egymást. Az 1990-es évektől a demokrácia megerősödött, de a szociális különbségek megmaradtak.',
        },
        { kind: 'heading', text: 'Mexikó' },
        {
          kind: 'text',
          emelt: true,
          text: '**Mexikó** (főváros **Mexikóváros**, a Föld egyik legnagyobb agglomerációja) a **Mexikói-fennsík** és a környező hegyvidékek országa (vulkán: **Popocatépetl**), a Mexikói-öböl és a Csendes-óceán között. Kincsei: kőolaj (Mexikói-öböl), ezüst, turizmus (tengerpart, maja és azték emlékek). Az 1994-ben létrejött NAFTA, majd 2020-tól az **USMCA** tagjaként az USA és Kanada fontos kereskedelmi partnere.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Az USA–Mexikó határövezet.** Az amerikai-mexikói határ mentén, főleg a mexikói oldalon alakult ki a **maquiladora**-övezet: külföldi (főleg amerikai) vállalatok összeszerelő üzemei, amelyek olcsó mexikói munkaerőt használnak, a bérmunkában készülő termékeket (elektronika, autóalkatrész, textil) vámmentesen szállítják az USA-ba. Előnye: munkahely, tőke, technológia; hátránya: alacsony bérek, a környezetszennyezés, a gyors városodás és a bűnözés, függés az amerikai konjunktúrától. Az USMCA kedvező feltételeket ad az észak-amerikai gyártási láncoknak (autóipar), Mexikó az USA egyik legnagyobb kereskedelmi partnere.',
        },
        { kind: 'heading', text: 'Brazília' },
        {
          kind: 'text',
          emelt: true,
          text: '**Brazília** Dél-Amerika legnagyobb országa (kb. 8,5 millió km²), lakossága kb. 215 millió, nyelve portugál. A fővárosa **Brazíliaváros** (1960-ban épült a belső területek fejlesztésére), nagy városai **São Paulo** (ipari és pénzügyi központ), **Rio de Janeiro**. Természeti adottságai: az **Amazonas-medence** (a Föld legnagyobb esőerdeje, a legvízbőbb folyó), a **Brazil-felföld**, a part menti sáv; az **Itaipu-gát** (a Paraná folyón, Paraguayjal közösen) hatalmas vízerőmű.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Miért feltörekvő nagygazdaság Brazília?',
          columns: ['Tény', 'Magyarázat'],
          rows: [
            {
              label: 'Méret',
              cells: ['hatalmas terület és népesség', 'nagy belső piac, bőséges munkaerő'],
            },
            {
              label: 'Ásványkincsek',
              cells: [
                'vasérc, bauxit, mangán, arany',
                'ipari alapanyag és nagy export (vasérc az egyik fő kiviteli cikk)',
              ],
            },
            {
              label: 'Mezőgazdaság',
              cells: [
                'a világ élvonalában: szója, kávé, cukornád, marha, narancs, etanol',
                'nagy export, bioüzemanyag-gyártás (etanol)',
              ],
            },
            {
              label: 'Ipar',
              cells: [
                'São Paulo vidéke: autógyártás, repülőgépgyártás (Embraer), gépipar, vegyipar',
                'iparosodó gazdaság, a termelés nemcsak nyersanyag',
              ],
            },
            {
              label: 'Nemzetközi szerep',
              cells: [
                'BRICS-tag, G20-tag, regionális vezető',
                'a világgazdaság egyik gyorsan növekvő szereplője',
              ],
            },
            {
              label: 'Gondok',
              cells: [
                'nagy társadalmi egyenlőtlenség, favellák, erdőirtás, infláció',
                'ezek miatt még nem tartozik a fejlett országok közé',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Banánköztársaságok' },
        {
          kind: 'text',
          emelt: true,
          text: 'A **banánköztársaság** gúnyos kifejezés egy kis, többnyire közép-amerikai ország számára, amelynek gazdasága egy-két mezőgazdasági exportcikkre (banán, kávé, cukor) épül, amelyeket főleg külföldi (amerikai) vállalatok ültetvényein termelnek (a legismertebb a United Fruit Company), a politikai hatalom pedig gyenge és megvesztegethető. Példák: **Honduras** (a kifejezés Hondurashoz kötődik) és Guatemala.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A gazdasági sebezhetőség okai és következményei',
          columns: ['Ok', 'Következmény'],
          rows: [
            {
              label: 'Egyterményes gazdaság',
              cells: [
                'az export 1–2 terméktől függ (monokultúra)',
                'a világpiaci ár-esés vagy a rossz termés (betegség, hurrikán) az egész gazdaságot megrendíti',
              ],
            },
            {
              label: 'Külföldi tulajdon',
              cells: [
                'a legjobb földek és a kikötők idegen vállalatoké',
                'a nyereség kivándorol, kevés helyi beruházás, a vállalat a politikát is befolyásolja',
              ],
            },
            {
              label: 'Kis belső piac, gyenge ipar',
              cells: [
                'kevés feldolgozás, a készárut importálják',
                'cserearányromlás, eladósodás, elszegényedés',
              ],
            },
            {
              label: 'Gyenge állam',
              cells: [
                'korrupció, katonai puccsok, külső beavatkozás',
                'politikai instabilitás, bizonytalan befektetési környezet',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A banánköztársaságok a világgazdaságban a **nyersanyag- és élelmiszer-szállítók** (periféria) szerepét töltik be: olcsó trópusi árut adnak a fejlett országoknak. Ma sok ország igyekszik bővíteni a gazdaságát (turizmus, textil, szolgáltatás), a **fair trade** kereskedelem pedig a termelők jobb árát szolgálja.',
        },
        { kind: 'heading', text: 'Adóparadicsomok' },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **adóparadicsom** (offshore központ) olyan, többnyire kis ország vagy terület, amely **alacsony vagy nulla adót** vet ki a külföldiek jövedelmére és tőkéjére, titokban tartja a számlatulajdonosok adatait (**banktitok**), és gyors, olcsó cégalapítást tesz lehetővé. A **közép-amerikai és karibi térségben**: **Kajmán-szigetek**, **Bahama-szigetek**, Panama, Brit Virgin-szigetek. A kis sziget gazdasága a pénzügyi szolgáltatásra (bankok, ügyvédek, könyvelők), valamint a turizmusra épül.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Adóparadicsom: jellemzők és világgazdasági szerep',
          columns: ['Gazdasági jellemzők', 'Világgazdasági szerep'],
          rows: [
            {
              label: 'Adórendszer',
              cells: [
                'nincs vagy nagyon alacsony társasági és jövedelemadó',
                'a TNC-k nyereségüket ide telepítik, így csökkentik adójukat',
              ],
            },
            {
              label: 'Pénzügyi titok',
              cells: [
                'titkos számlák, kevés információcsere',
                'adóelkerülés és pénzmosás lehetősége; a nemzetközi szervezetek (OECD, EU) fekete listákat vezetnek',
              ],
            },
            {
              label: 'Szerkezet',
              cells: [
                'kis termelés, a bevétel pénzügyi szolgáltatásból és turizmusból származik',
                'a világ tőkeáramlásának fontos csomópontjai, a "valódi" gazdaság kevés',
              ],
            },
            {
              label: 'Következmény',
              cells: [
                'gazdag szigetek, de egyoldalú gazdaság',
                'a többi ország adóbevétele csökken; a szabályok szigorítása a cél',
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
            'Topográfia: Andok, Amazonas-medence, Brazil-felföld, Mexikói-fennsík, Karib-tenger, Panama-csatorna; országok: Brazília, Mexikó, Argentína, Venezuela, Costa Rica; fővárosok: Mexikóváros, Brazíliaváros, Buenos Aires, Caracas; emelten Kuba, Havanna, Chile, Santiago, Bahama-szigetek, São Paulo.',
            'Táblázatelemzés: az export összetétele (egy-két termék aránya) – ebből ismered fel a banánköztársaság jellegű gazdaságot; népesség és urbanizáció.',
            'Kifejtés: Latin-Amerika fejlődését befolyásoló tényezők; miért feltörekvő Brazília; mi a maquiladora és miért kapcsolódik az USMCA-hoz.',
            'Szóbeli (emelt): banánköztársaság és adóparadicsom, ok-okozati láncokkal.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az adóparadicsomot banánköztársasággal keverni. A banánköztársaság egyterményes, külföldi ültetvényekre támaszkodó mezőgazdasági gazdaság, az adóparadicsom pénzügyi szolgáltatásra épül, alacsony adóval. Másik hiba: Brazíliát fejlett országnak vagy szegény országnak nevezni; feltörekvő: gyors növekedés mellett nagy egyenlőtlenség. A "Latin-Amerika" nem földrajzi, hanem kulturális fogalom.',
        },
        {
          kind: 'text',
          text: '**Mintaválasz-vázlat** ("Mutasd be a banánköztársaságok gazdasági sebezhetőségét", emelt): 1. definíció: egy-két mezőgazdasági exportcikk, külföldi tulajdonú ültetvények; 2. példa: Honduras, Guatemala; 3. ok: monokultúra, kis belső piac, gyenge ipar, külföldi tőke; 4. következmény: világpiaci ár- és időjárásfüggés, az árbevétel kivándorlása, eladósodás, politikai instabilitás; 5. világgazdasági szerep: periféria, olcsó nyersanyag a centrumnak; 6. kitörés: sokszínűbb gazdaság, feldolgozás, fair trade.',
        },
        {
          kind: 'tip',
          text: 'Brazília "feltörekvő" voltának igazolásához három érvet adj: méret és erőforrások, sokszínű gazdaság (mezőgazdaság + ipar + szolgáltatás), nemzetközi szerep (BRICS, G20). Nevezd meg a hátrányt is: társadalmi egyenlőtlenség.',
        },
      ],
      topicMatch: ['latin-amerika'],
      quiz: [
        {
          question: 'Melyik tényező hátráltatta Latin-Amerika gazdasági fejlődését?',
          options: [
            'a nyersanyagok teljes hiánya',
            'az egyoldalú nyersanyagexport és a nagy társadalmi egyenlőtlenség',
            'a rendkívül magas iskolázottság',
            'a nagyon alacsony népesség',
          ],
          answer: 1,
          explanation:
            'A gyarmati örökség, a nagybirtokok, az egyoldalú export és a jövedelemkülönbségek lassították a fejlődést.',
        },
        {
          question: 'Mi a favella?',
          options: [
            'kávéültetvény',
            'brazil nyomornegyed',
            'mexikói összeszerelő üzem',
            'andoki falu',
          ],
          answer: 1,
          explanation:
            'A favellák a brazil nagyvárosok szegény, szabálytalanul beépített lakónegyedei.',
        },
        {
          question: 'Mi a latin-amerikai népességkeveredés egyik jellegzetes csoportja?',
          options: ['mesztic', 'kasztok', 'beduin', 'maori'],
          answer: 0,
          explanation: 'A meszticek európai és őslakos indián felmenőkkel rendelkeznek.',
        },
        {
          question: 'Mi a maquiladora-övezet?',
          options: [
            'brazil kávéültetvények sora',
            'az USA–Mexikó határ menti összeszerelő üzemek övezete',
            'kanadai olajhomok-bányák',
            'karibi adóparadicsom',
          ],
          answer: 1,
          explanation:
            'Külföldi cégek a mexikói oldalon olcsó munkaerővel szerelnek össze termékeket, és vámmentesen szállítják az USA-ba.',
          emelt: true,
        },
        {
          question: 'Mi jellemző az adóparadicsomokra?',
          options: [
            'magas adók és nagy ipar',
            'alacsony vagy nulla adó, banktitok, pénzügyi szolgáltatásokra épülő gazdaság',
            'egyterményes banánültetvények',
            'nagyüzemi gabonatermesztés',
          ],
          answer: 1,
          explanation:
            'Az adóparadicsomok alacsony adóval és titokvédelemmel vonzzák a külföldi tőkét (például Kajmán-szigetek, Bahama-szigetek).',
          emelt: true,
        },
        {
          question: 'Melyik igaz a banánköztársaságra?',
          options: [
            'a gazdasága sokoldalú, ipari',
            'egy-két exportterményre épül, és külföldi vállalatok ültetvényeitől függ',
            'adóparadicsom is egyben',
            'a legfejlettebb országcsoport tagja',
          ],
          answer: 1,
          explanation:
            'A banánköztársaság egyoldalú, külföldi tőkétől függő mezőgazdasági gazdaság, például Honduras.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Latin-Amerika', url: wiki('Latin-Amerika') },
        { label: 'Wikipédia: Brazília gazdasága', url: wiki('Brazília gazdasága') },
        { label: 'Wikipédia: Banánköztársaság', url: wiki('Banánköztársaság') },
      ],
    },
  ],
};

export default unit;
