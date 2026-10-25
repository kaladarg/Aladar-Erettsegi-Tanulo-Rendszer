import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 5.8 (Magyarország a második világháborúban) and 5.9 (A holokauszt Európában és Magyarországon). */
const unit: GuideUnit = {
  id: 'tortenelem-masodik-vh-magyarorszag-holokauszt',
  subject: 'tortenelem',
  order: 56,
  title: 'Magyarország a második világháborúban és a holokauszt',
  requirementRef:
    '5.8 Magyarország a második világháborúban, 5.9 A holokauszt Európában és Magyarországon (a német megszállás és a nyilas hatalomátvétel az 5.10 témakörből)',
  intro:
    'Hogyan lett a revízió útja a háborúba vezető út? Itt a területi gyarapodás lépéseit, az ország hadba sodródását, a zsidóság jogfosztását és a holokauszt európai és magyarországi folyamatát tanulod meg, a német megszállástól a nyilas hatalomátvételen át a háború végéig. A háború általános frontjairól a világháborús lecke szól.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (5. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'revízió',
        'numerus clausus',
        'antiszemitizmus',
        'zsidótörvények',
        'bécsi döntések',
        'tengelyhatalmak',
        'szövetségesek',
        'kiugrási kísérlet',
        'munkaszolgálat',
        'gettó',
        'deportálás',
        'koncentrációs tábor',
        'haláltábor',
        'népirtás',
        'holokauszt',
        'nyilasok',
        'Vörös Hadsereg',
        'malenkij robot',
        'hadifogság',
      ],
      emelt: ['nürnbergi törvények', 'porrajmos', 'genocídium', 'kollaboráns'],
    },
    people: {
      kozep: [
        'Teleki Pál',
        'Bárdossy László',
        'Kállay Miklós',
        'Szálasi Ferenc',
        'Raoul Wallenberg',
        'Bajcsy-Zsilinszky Endre',
        'Veesenmayer',
        'Salkaházi Sára',
        'Apor Vilmos',
        'Sztehlo Gábor',
      ],
      emelt: ['Szombathelyi Ferenc', 'Sztójay Döme', 'Eichmann'],
    },
    dates: {
      kozep: [
        '1938',
        '1939',
        '1940',
        '1941. április',
        '1941. június 22.',
        '1941. június 27.',
        '1943. január',
        '1944. március 19.',
        '1944. október 15.',
        '1945. április',
        '1945. május 9.',
      ],
      emelt: [
        '1938 eviani konferencia',
        '1941 romániai holokauszt kezdete',
        '1942 wannseei konferencia',
        '1942 újvidéki mészárlás',
        '1944. május a magyarországi deportálások kezdete',
        '1944. július, a magyarországi deportálások leállítása',
        '1944. december–1945. február Budapest ostroma',
      ],
    },
    places: {
      kozep: [
        'Felvidék',
        'Kárpátalja',
        'Délvidék',
        'Észak-Erdély',
        'Újvidék',
        'Don-kanyar',
        'Kamenyec-Podolszkij',
        'Auschwitz',
      ],
      emelt: ['Mauthausen', 'Jasenovac'],
    },
  },
  pages: [
    {
      id: 'teruleti-revizio-es-hadba-sodrodas',
      subject: 'tortenelem',
      unitId: 'tortenelem-masodik-vh-magyarorszag-holokauszt',
      title: 'A területi revízió lépései és az ország hadba sodródása',
      level: 'kozep',
      requirement: {
        kozep: 'A területi revízió lépései, az ország hadba sodródásának folyamata',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Horthy-korszak külpolitikai célja a **trianoni határok revíziója** volt. A siker a **náci Németországhoz és fasiszta Olaszországhoz (tengelyhatalmak)** való közeledésen múlt.',
            '**1938. november 2.**: **első bécsi döntés**, a Felvidék déli sávja (Kassa, Komárom) Magyarországhoz kerül.',
            '**1939 márciusa**: a magyar hadsereg bevonul **Kárpátaljára**. **1940. augusztus 30.**: **második bécsi döntés**, **Észak-Erdély** visszacsatolása.',
            '**1941 áprilisa**: a németek Jugoszlávia elleni támadásához kapcsolódva visszakerül a **Délvidék** egy része. **Teleki Pál** miniszterelnök öngyilkos lett.',
            '**1941. június 27.**: **Bárdossy László** kormánya a Szovjetunió elleni háborúba lép, a hadba lépés közvetlen ürügye Kassa bombázása volt. Magyarország a **tengelyhatalmak** oldalán háborúzott.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'revízió',
              text: 'A trianoni békeszerződés határainak felülvizsgálata, a Horthy-korszak külpolitikájának fő célja.',
            },
            {
              term: 'bécsi döntések',
              text: 'Német–olasz döntőbíráskodás, amellyel Magyarország területet kapott Csehszlovákiától (1938) és Romániától (1940).',
            },
            {
              term: 'tengelyhatalmak',
              text: 'A Németország, Olaszország és Japán vezette szövetség. Magyarország 1940 novemberében csatlakozott a háromhatalmi egyezményhez.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért Németország mellett?' },
        {
          kind: 'text',
          text: 'Az 1920-as években Magyarország a revíziót békés eszközökkel, Olaszország támogatásával próbálta elérni. Az 1930-as évek végén **Hitler** Németországa lett a térség meghatározó hatalma, és a trianoni rendszer szétverésében a németeknek is érdekük volt. A magyar vezetés ezért a **német orientációt** választotta, abban reménykedve, hogy a revízió ára nem lesz túl magas.',
        },
        { kind: 'heading', text: 'A revízió lépései' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1938. november 2.',
              text: 'Első bécsi döntés: Németország és Olaszország döntőbíráskodása nyomán Csehszlovákiától Magyarországhoz kerül a Felvidék déli, magyarlakta sávja Kassával és Komárom magyarországi részével; Kárpátalján Ungvár és Munkács is.',
            },
            {
              date: '1939. március',
              text: 'A németek feldarabolják Csehszlovákiát, Szlovákia kikiáltja függetlenségét. A magyar hadsereg bevonul **Kárpátaljára**, így Magyarországnak újra közös határa lesz Lengyelországgal.',
            },
            {
              date: '1939. szeptember',
              text: 'A német és szovjet támadás Lengyelország ellen. Magyarország nem vesz részt a háborúban, az ország befogadja a lengyel menekülteket.',
            },
            {
              date: '1940. augusztus 30.',
              text: 'Második bécsi döntés: Romániától **Észak-Erdély** (Kolozsvár, Nagyvárad, Székelyföld) Magyarországhoz kerül. A terület vegyes lakosságú volt, a romániai magyarság nagy része Romániában maradt.',
            },
            {
              date: '1940. november 20.',
              text: 'Magyarország csatlakozik a háromhatalmi egyezményhez (Németország, Olaszország, Japán).',
            },
            {
              date: '1941. április',
              text: 'A németek lerohanják Jugoszláviát. A magyar hadsereg bevonul a **Délvidékre** (Bácska, Baranya-háromszög, Muraköz, Muravidék). Ezt megelőzte az 1940 decemberi magyar–jugoszláv örökbarátsági szerződés.',
            },
          ],
        },
        {
          kind: 'map',
          title: 'A visszacsatolt területek néhány városa',
          places: [
            { name: 'Kassa', lat: 48.72, lon: 21.26, note: 'Felvidék, 1938' },
            {
              name: 'Komárom',
              lat: 47.74,
              lon: 18.12,
              note: 'Felvidék, 1938 (a Duna északi partjáról)',
            },
            { name: 'Munkács', lat: 48.44, lon: 22.72, note: 'Kárpátalja' },
            { name: 'Kolozsvár', lat: 46.77, lon: 23.59, note: 'Észak-Erdély, 1940' },
            { name: 'Nagyvárad', lat: 47.05, lon: 21.92, note: 'Észak-Erdély, 1940' },
            { name: 'Újvidék', lat: 45.25, lon: 19.84, note: 'Délvidék (Bácska), 1941' },
            { name: 'Szabadka', lat: 46.1, lon: 19.67, note: 'Délvidék (Bácska), 1941' },
          ],
        },
        { kind: 'heading', text: 'Hadba sodródás' },
        {
          kind: 'text',
          text: 'A revíziós sikerek mögött **német nyomás** is állt: **Teleki Pál** miniszterelnök a magyar–jugoszláv szerződés után kénytelen volt tudomásul venni, hogy a németek magyar területen vonulnak át Jugoszlávia ellen. 1941. április 3-án öngyilkos lett; tettét a szerződésszegés miatti kétségbeesésével magyarázzák. Utóda **Bárdossy László** lett.',
        },
        {
          kind: 'text',
          text: '**1941. június 22-én** a németek megtámadták a Szovjetuniót. Magyarország kezdetben semleges maradt. **Június 26-án** ismeretlen repülők bombázták **Kassát**, a támadás elkövetőiről a történészek között vita van. A kormány a bombázást ürügynek használta: **június 27-én** a Szovjetunióval hadiállapotot jelentett be, parlamenti vita nélkül. 1941 végén az ország hadiállapotba került a nyugati nagyhatalmakkal is (Nagy-Britanniával és az Egyesült Államokkal).',
        },
        {
          kind: 'text',
          text: 'Eleinte csak kisebb magyar csapatok harcoltak a keleti fronton. **1942 tavaszától** az ország nagy erőkkel vett részt a háborúban: a **2. magyar hadsereg** a Don folyónál állt. **1943 januárjában** a szovjet támadás a **Don-kanyarnál** szétverte, a hadsereg legnagyobb része elpusztult, megsebesült vagy fogságba esett. Ekkor a magyar vezetés számára is világossá vált, hogy a háború elveszíthető. **Kállay Miklós** miniszterelnök (1942–1944) titkos tárgyalásokba kezdett a nyugati szövetségesekkel a **kiugrási kísérlet** előkészítéséről.',
        },
        {
          kind: 'compare',
          title: 'Teleki Pál és Bárdossy László',
          columns: ['Teleki Pál (1939–1941)', 'Bárdossy László (1941–1942)'],
          rows: [
            {
              label: 'Külpolitika',
              cells: [
                'revízió, de a háborútól való távolmaradás',
                'német orientáció, belépés a Szovjetunió elleni háborúba',
              ],
            },
            {
              label: 'Fordulópont',
              cells: ['1941 április: öngyilkosság', '1941. június 27.: hadüzenet'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép és időrend: melyik terület melyik évben, melyik döntéssel került vissza?',
            'Forrás (bécsi döntés szövege, Teleki búcsúlevele, a hadba lépés bejelentése): ki, mikor, mi a célja?',
            'Rövid kifejtés: miért Németország mellé állt Magyarország, és hogyan sodródott a háborúba?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni a két bécsi döntést. Az **első** (1938) a Felvidéket, a **második** (1940) Észak-Erdélyt érinti. Kárpátaljára 1939-ben vonultak be, a Délvidékre 1941-ben, és ezek nem bécsi döntések voltak.',
        },
        {
          kind: 'tip',
          text: 'A hadba sodródás menetét három lépésben mondd: (1) revíziós sikerek a németek mellett, (2) csatlakozás a háromhatalmi egyezményhez és a Délvidék, (3) a Szovjetunió elleni háború 1941. június 27-én.',
        },
      ],
      topicMatch: [
        'területi revízió',
        'magyarország a második világháborúban',
        'magyarország 1941–1945',
        'magyarország területének változásai',
      ],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor volt az első bécsi döntés?',
          options: ['1939. március', '1940. augusztus 30.', '1938. november 2.', '1941. április'],
          answer: 2,
          explanation:
            'Az első bécsi döntést 1938. november 2-án hozták meg. 1940. augusztus 30-án a második bécsi döntés volt, 1941 áprilisában a Délvidék visszaszerzése.',
        },
        {
          question: 'Melyik területet kapta vissza Magyarország a második bécsi döntéssel?',
          options: ['Észak-Erdélyt', 'A Felvidék déli sávját', 'A Délvidéket', 'Kárpátalját'],
          answer: 0,
          explanation:
            'A második bécsi döntés (1940) Romániától Észak-Erdélyt juttatta Magyarországnak. A Felvidék az elsőé volt, Kárpátalját fegyveresen foglalták el 1939-ben.',
        },
        {
          question: 'Melyik esemény után lépett Magyarország hadba a Szovjetunióval?',
          options: [
            'Pearl Harbor elleni támadás',
            'Kamenyec-Podolszkij',
            'A 2. magyar hadsereg pusztulása',
            'Kassa bombázása',
          ],
          answer: 3,
          explanation:
            '1941. június 26-án bombázták Kassát, amit a kormány ürügyként használt, és június 27-én hadiállapotot jelentett be.',
        },
        {
          question: 'Ki volt Magyarország miniszterelnöke a Szovjetunió elleni hadba lépéskor?',
          options: ['Teleki Pál', 'Bárdossy László', 'Kállay Miklós', 'Sztójay Döme'],
          answer: 1,
          explanation:
            'Bárdossy László 1941 áprilisától miniszterelnök volt. Teleki öngyilkos lett, Kállay 1942-ben követte Bárdossyt.',
        },
        {
          question: 'Mi történt 1943 januárjában a keleti fronton?',
          options: [
            'Magyarország hadat üzent a Szovjetuniónak.',
            'A szovjet támadás a Don-kanyarnál szétverte a 2. magyar hadsereget.',
            'A magyar csapatok bevonultak Kárpátaljára.',
            'A németek elfoglalták Budapestet.',
          ],
          answer: 1,
          explanation:
            'A Don-kanyar (Voronyezs környéke) a magyar hadsereg legnagyobb vesztesége volt a háborúban.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Bécsi döntések', url: wiki('Első bécsi döntés') },
        {
          label: 'Wikipédia: Magyarország a második világháborúban',
          url: wiki('Magyarország a második világháborúban'),
        },
        { label: 'Wikipédia: Bárdossy László', url: wiki('Bárdossy László') },
      ],
    },
    {
      id: 'magyar-haborus-reszvetel-1944-marciusig',
      subject: 'tortenelem',
      unitId: 'tortenelem-masodik-vh-magyarorszag-holokauszt',
      title: 'Magyarország háborús részvétele 1944 márciusig',
      level: 'emelt',
      requirement: {
        emelt: 'Magyarország háborús részvétele 1944 márciusig',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '1941 nyarán a **Kárpát-csoport** és a gyorshadtest vett részt a szovjetellenes hadjáratban, 1942 tavaszától a **2. magyar hadsereg** a Donnál.',
            '**1942 januárjában** a bácskai („**újvidéki**”) razzia: magyar katonák és csendőrök polgári személyeket végeztek ki, főleg szerbeket és zsidókat.',
            '**1943 januárjában** a **Don-kanyarnál** a hadsereg nagy része elpusztult.',
            '**Kállay Miklós** 1942–44 között „hintapolitikát” folytatott: formálisan a tengely mellett maradt, a háttérben a nyugati szövetségesekkel tárgyalt.',
            '**Szombathelyi Ferenc** 1941-től a honvédség vezérkari főnöke volt.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'hintapolitika',
              text: 'Kállay Miklós politikája: a németekkel való szövetség formális fenntartása és a titkos kapcsolatfelvétel a nyugati szövetségesekkel.',
              emelt: true,
            },
            {
              term: 'kollaboráns',
              text: 'A megszálló hatalommal együttműködő személy vagy kormány.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A keleti front és az „újvidéki” razzia' },
        {
          kind: 'text',
          emelt: true,
          text: 'A magyar hadsereg 1941 nyarán a Szovjetunió déli részén harcolt, majd nagyobb részét hazarendelték, a megszállt területeken kisebb alakulatok maradtak. Ezek **partizánok elleni** akciókban is részt vettek. **1942 tavaszától** a német kérésre a **2. magyar hadsereg** (kb. 200 ezer katona) a Don folyónál foglalt állást. A hadsereg felszerelése elavult volt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A Délvidéken 1942 januárjában **partizánellenes razzia** kezdődött Bácskában. A magyar hadsereg és csendőrség a hadművelet során nagyszámú civilt végzett ki, főleg szerbeket és zsidókat. Az áldozatok összes számáról a becslések eltérnek (általában 3000–4000 körüli értéket adnak), ebből Újvidéken több mint ezer ember halt meg. A felelősök ellen 1943-ban eljárás indult Magyarországon, de a németek segítségével Németországba szöktek; a háború után többeket Jugoszláviában és Magyarországon elítéltek.',
        },
        { kind: 'heading', text: 'A Don-kanyar' },
        {
          kind: 'text',
          emelt: true,
          text: '**1943. január 12–13-án** a Vörös Hadsereg áttörte a Don menti védelmet. A 2. magyar hadsereg a német alakulatok közötti hézagban rendezetlenül vonult vissza. A veszteségek (halott, sebesült, hadifogoly) a becslések szerint körülbelül százezres nagyságrendűek voltak, a magyar hadsereg nehézfegyverzetének nagy része elveszett. Az ország ezután már nem tudott ugyanilyen erőt a keleti frontra küldeni.',
        },
        { kind: 'heading', text: 'Kállay Miklós és a kiugrási kísérletek' },
        {
          kind: 'text',
          emelt: true,
          text: '**Kállay Miklós** 1942 márciusától miniszterelnök volt. Kormánya a kényszerű háborús részvételt igyekezett csökkenteni: a hadsereg nagy részét otthon tartotta, és 1943-tól titkos kapcsolatokat keresett a **nyugati szövetségesekkel** (például Isztambulban). A cél az volt, hogy Magyarországot a német szövetségből kiléptetve a nyugati hatalmak csapatai érjék el, ne a Vörös Hadsereg. A titkos tárgyalásokról a németek tudomást szereztek.',
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Miért nem sikerült a kiugrás?',
          items: [
            'A magyar vezetés a Vörös Hadseregtől félt, ezért nem akart nyíltan a németek ellen fordulni.',
            'A nyugati szövetségesek katonailag nem voltak a közelben, keleti irányból a szovjet csapatok közeledtek.',
            'A németek tudtak a tárgyalásokról, és 1944 márciusában megszállták az országot.',
          ],
        },
        {
          kind: 'timeline',
          emelt: true,
          items: [
            {
              date: '1941. június 27.',
              text: 'Magyarország hadiállapotban a Szovjetunióval.',
              emelt: true,
            },
            { date: '1942 januárja', text: 'Az újvidéki mészárlás (bácskai razzia).', emelt: true },
            { date: '1942 tavasza', text: 'A 2. magyar hadsereg a Donnál.', emelt: true },
            { date: '1943. január', text: 'Don-kanyar: a 2. hadsereg pusztulása.', emelt: true },
            { date: '1944. március 19.', text: 'A német megszállás.', emelt: true },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Hogyan és miért vett részt Magyarország a háborúban 1944 márciusáig?',
            'Forrás: Kállay Miklós emlékirata vagy a Don-kanyarról szóló visszaemlékezés.',
            'Fogalmak: Don-kanyar, kiugrási kísérlet, Szombathelyi Ferenc, újvidéki mészárlás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt gondolni, hogy a kiugrási kísérletet Horthy 1944. október 15-én kezdte. Már Kállay is keresett kapcsolatot a szövetségesekkel 1943-tól; az október 15-i proklamáció a második, végül sikertelen kísérlet volt.',
        },
        {
          kind: 'tip',
          text: 'Mondd el a háborús részvétel szakaszait: (1) 1941 hadba lépés, (2) 1942 nagy erővel a Donnál, (3) 1943 Don-kanyar és az óvatos kiugrási törekvések, (4) 1944 márciusában megszállás.',
        },
      ],
      topicMatch: ['magyarország a második világháborúban', 'magyarország 1941–1945'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mit nevezünk újvidéki mészárlásnak?',
          options: [
            'A magyar hadsereg és csendőrség 1942. januári bácskai razziáját, amelyben többezer civil halt meg.',
            'A Délvidék 1941. áprilisi elfoglalását.',
            'A Don-kanyari csatát.',
            'Az 1944-es nyilas Duna-parti kivégzéseket.',
          ],
          answer: 0,
          explanation:
            'Az újvidéki mészárlás a bácskai partizánellenes razzia része volt 1942 januárjában, főleg szerb és zsidó civilek haltak meg.',
          emelt: true,
        },
        {
          question: 'Mit értünk Kállay Miklós hintapolitikáján?',
          options: [
            'Egyszerre három hatalommal kötött szövetséget.',
            'A tengelyhatalmak melletti formális kitartást és a nyugati szövetségesekkel való titkos tárgyalást.',
            'A szovjetekkel való közeledést.',
            'A semlegesség kikiáltását.',
          ],
          answer: 1,
          explanation:
            'Kállay a tengely oldalán maradt, a háttérben azonban a nyugati szövetségesekkel kereste a kiutat.',
          emelt: true,
        },
        {
          question: 'Melyik hadsereg szenvedett súlyos vereséget a Don-kanyarnál?',
          options: [
            'Az 1. magyar hadsereg',
            'A gyorshadtest',
            'A Kárpát-csoport',
            'A 2. magyar hadsereg',
          ],
          answer: 3,
          explanation:
            'A 2. magyar hadsereg állt a Don mellett, és 1943 januárjában a szovjet támadás szétverte.',
          emelt: true,
        },
        {
          question: 'Mikor kezdődött a 2. magyar hadsereg frontszolgálata a Donnál?',
          options: ['1941 nyarán', '1942 tavaszán', '1943 januárjában', '1944 márciusában'],
          answer: 1,
          explanation:
            'A 2. hadsereg 1942 tavaszától, a nyári német hadjárathoz kapcsolódva vonult a Donhoz.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Doni katasztrófa', url: wiki('Doni katasztrófa') },
        { label: 'Wikipédia: Kállay Miklós', url: wiki('Kállay Miklós') },
        { label: 'Wikipédia: Újvidéki vérengzés', url: wiki('Újvidéki razzia 1942') },
      ],
    },
    {
      id: 'holokauszt-europaban',
      subject: 'tortenelem',
      unitId: 'tortenelem-masodik-vh-magyarorszag-holokauszt',
      title: 'A holokauszt Európában',
      level: 'kozep',
      requirement: {
        kozep: 'A zsidóság jogfosztásának folyamata és a holokauszt Európában és Magyarországon',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **holokauszt** (héberül soá) az európai zsidóság náci Németország általi, tervszerű, ipari módszerekkel végrehajtott **megsemmisítése** volt.',
            'A folyamat lépései: **jogfosztás** (1933-tól), **gettóba zárás**, tömeges kivégzések a keleti fronton, majd **deportálás** a **haláltáborokba**.',
            'Az áldozatok száma a becslések szerint **5–6 millió** zsidó; a leggyakrabban idézett érték körülbelül 6 millió. A nácik más csoportokat is üldöztek és gyilkoltak, köztük **romákat**.',
            'A legnagyobb megsemmisítő tábor **Auschwitz-Birkenau** volt.',
            'A vezetők a **nemzetiszocialista faji ideológia** alapján cselekedtek: ez az **antiszemitizmus** szélsőséges formája.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'antiszemitizmus',
              text: 'A zsidókkal szembeni előítélet, gyűlölet és hátrányos megkülönböztetés.',
            },
            {
              term: 'gettó',
              text: 'A zsidóság számára kijelölt, elzárt városrész vagy terület, rossz ellátással és zsúfoltsággal.',
            },
            {
              term: 'koncentrációs tábor',
              text: 'Fogolytábor, ahol az embereket kényszermunkára fogták. Sokan a körülmények miatt haltak meg.',
            },
            {
              term: 'haláltábor (megsemmisítő tábor)',
              text: 'Olyan tábor, amelynek elsődleges célja az emberek tömeges megölése volt (gázkamrák).',
            },
            {
              term: 'népirtás',
              text: 'Egy nemzeti, etnikai vagy vallási csoport szándékos, tervszerű kiirtása.',
            },
            {
              term: 'nürnbergi törvények',
              text: '1935-ös német törvények, amelyek megfosztották a zsidókat az állampolgári jogaiktól, és tiltották a vegyes házasságot.',
              emelt: true,
            },
            {
              term: 'genocídium',
              text: 'A népirtás nemzetközi jogi kifejezése.',
              emelt: true,
            },
            {
              term: 'porrajmos',
              text: 'A romák nácik általi üldözésének és népirtásának roma neve.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ideológia és jogfosztás 1933–1939' },
        {
          kind: 'text',
          text: 'A nemzetiszocialista rendszer a zsidókat „idegen fajnak” tekintette, és őket tette felelőssé Németország bajaiért. **1933-tól** boikottot hirdettek a zsidó üzletek ellen, kizárták a zsidókat a közszolgálatból. **1935-ben** hozták meg a **nürnbergi törvényeket**, amelyek megfosztották őket a német állampolgárságtól, tiltották a vegyes házasságot. **1938. november 9–10-én** (a „kristályéjszaka”) szinagógákat gyújtottak fel, zsidó üzleteket pusztítottak el, és tömegesen tartóztattak le férfiakat.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kivándorlás megoldását keresve 1938 júliusában az **eviani konferencián** 32 ország képviselői tanácskoztak a zsidó menekültek befogadásáról. A résztvevő országok többsége nem vállalt jelentős többletbefogadást, ezért sokan nem tudtak elmenekülni.',
        },
        { kind: 'heading', text: 'A háború alatt: gettók és tömeges kivégzések' },
        {
          kind: 'text',
          text: '**1939-ben** Lengyelország megszállása után milliós zsidó közösség került német uralom alá. A lengyelországi zsidókat **gettókba** zárták (Varsó, Lodz és más városok), ahol éhezés és járványok pusztítottak. **1941 nyarától**, a Szovjetunió elleni támadással a német rendőri és SS egységek, az **Einsatzgruppenek** tömeges kivégzéseket kezdtek a megszállt keleti területeken: férfiakat, nőket és gyerekeket lőttek tömegsírokba. Ugyanekkor megkezdődtek a gázzal való gyilkolás kísérletei.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Romániában Antonescu rendszere alatt **1941-ben** kezdődött meg a zsidók üldözése és tömeges legyilkolása (jászvásári pogrom, 1941 júniusa), majd deportálásokat is végeztek. Ez a **romániai holokauszt kezdete**. A horvát usztasa rezsim a **Jasenovac** táborban szerbeket, zsidókat és romákat gyilkolt. Az áldozatok számáról a becslések jelentősen eltérnek: a szakirodalom a néhány tízezertől a százezret meghaladó értékig terjedő számokat ad meg.',
        },
        { kind: 'heading', text: 'A „végső megoldás”' },
        {
          kind: 'text',
          text: 'A náci vezetés **1941 végére** a zsidóság teljes európai kiirtása mellett döntött. A **végső megoldás** koordinálását **Heydrich** irányította. A zsidókat vonatokon szállították a **haláltáborokba**, amelyek többségét lengyel területen hozták létre (Auschwitz-Birkenau, Bełżec, Chełmno, Majdanek, Sobibór, Treblinka). A megérkezők nagy részét azonnal a gázkamrákba küldték, a munkaképeseket kényszermunkára fogták.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A „végső megoldást” az **1942. januári wannseei konferencia** koordinálta: a berlini találkozón Heydrich vezetésével a német minisztériumok és az SS képviselői megbeszélték a deportálás és a gyilkolás megszervezését. **Eichmann** készítette a jegyzőkönyvet, és ő szervezte a deportálásokat. **Mauthausen** (Ausztria) koncentrációs tábor volt, ahol kényszermunka miatt tömegesen haltak meg a foglyok.',
        },
        {
          kind: 'compare',
          title: 'Koncentrációs tábor és haláltábor',
          columns: ['Koncentrációs tábor', 'Haláltábor (megsemmisítő tábor)'],
          rows: [
            {
              label: 'Fő cél',
              cells: ['fogva tartás, kényszermunka', 'tömeges, azonnali gyilkolás'],
            },
            { label: 'Példa', cells: ['Mauthausen, Dachau', 'Treblinka, Sobibór, Birkenau'] },
          ],
        },
        { kind: 'heading', text: 'Az áldozatok és a mentők' },
        {
          kind: 'text',
          text: 'Az európai zsidóság körülbelül kétharmada elpusztult. Az áldozatok számának becslései forrástól függően **5 és 6 millió** között mozognak (legtöbbször kb. 6 millió). **Auschwitzban** mintegy 1,1 millió ember halt meg, közülük körülbelül 1 millió zsidó volt. A **romák** üldözésének áldozatairól a becslések nagyon eltérnek (gyakran 200–500 ezer között), ez a **porrajmos**.',
        },
        {
          kind: 'text',
          text: 'Sokan **segítettek** is: rejtegették az üldözötteket, hamis iratokat szereztek. A később **Világ Igaza** címmel kitüntetett embereket a Jad Vasem emlékhely tartja számon. Ellenállás is volt, például a **varsói gettó felkelése 1943 tavaszán**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalmak: holokauszt, gettó, koncentrációs tábor, haláltábor, antiszemitizmus, népirtás.',
            'Forrás (náci törvény, visszaemlékezés, fénykép): milyen lépésről van szó a folyamatban?',
            'Rövid kifejtés: hogyan jutott el a náci politika a jogfosztástól a tömeges gyilkolásig?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: koncentrációs tábort és haláltábort azonos fogalomként használni. A haláltáborok célja a tömeges megsemmisítés volt. Másik hiba: pontos áldozatszámot adni ott, ahol a források eltérnek; mondd azt, hogy a becslések 5–6 millió között vannak.',
        },
        {
          kind: 'tip',
          text: 'A folyamatot lépésekben mondd el: (1) ideológia és jogfosztás, (2) elkülönítés, gettók, (3) tömeges kivégzések a keleti fronton, (4) deportálás és megsemmisítés a haláltáborokban.',
        },
      ],
      topicMatch: ['holokauszt'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mit jelent a holokauszt?',
          options: [
            'Az európai zsidóság nácik általi tervszerű megsemmisítését.',
            'A második világháború légi háborúját.',
            'A német hadigazdaság átállását a háborúra.',
            'A lengyel ellenállást.',
          ],
          answer: 0,
          explanation:
            'A holokauszt a zsidóság tervszerű, államilag szervezett kiirtása volt. A kifejezés a soá héber szónak is megfelel.',
        },
        {
          question: 'Melyik volt a legnagyobb náci megsemmisítő tábor?',
          options: ['Dachau', 'Mauthausen', 'Auschwitz-Birkenau', 'Majdanek'],
          answer: 2,
          explanation:
            'Auschwitz-Birkenauban mintegy 1,1 millió ember halt meg, ezek többsége zsidó volt. Dachau és Mauthausen koncentrációs tábor volt.',
        },
        {
          question: 'Mi jellemzi a haláltáborokat a koncentrációs táborokkal szemben?',
          options: [
            'Csak hadifoglyokat tartottak bennük.',
            'Elsődleges céljuk a tömeges gyilkolás volt, gázkamrákkal.',
            'Nem a németek működtették őket.',
            'Csak Németországban voltak.',
          ],
          answer: 1,
          explanation:
            'A haláltáborok többségét lengyel területen hozták létre a tömeges gyilkolás céljából.',
        },
        {
          question:
            'Mikor kezdődtek a zsidóság tömeges kivégzései a megszállt szovjet területeken?',
          options: ['1933', '1935', '1938', '1941 nyara'],
          answer: 3,
          explanation:
            'A Szovjetunió elleni támadás (1941. június) után az Einsatzgruppenek tömeges kivégzéseket kezdtek.',
        },
        {
          question: 'Mit mondtak ki a nürnbergi törvények 1935-ben?',
          options: [
            'A zsidóság megfosztása a német állampolgárságtól és a vegyes házasságok tilalma.',
            'A németországi zsidók kitelepítését.',
            'A haláltáborok felépítését.',
            'Az összes zsidó azonnali letartóztatását.',
          ],
          answer: 0,
          explanation:
            'A nürnbergi törvények a zsidókat megfosztották az állampolgári jogaiktól, és megtiltották a vegyes házasságot; ez a jogfosztás része, nem a megsemmisítés.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Holokauszt', url: wiki('Holokauszt') },
        { label: 'Wikipédia: Auschwitz', url: wiki('Auschwitz-Birkenau') },
        { label: 'Wikipédia: Nürnbergi törvények', url: wiki('Nürnbergi törvények') },
      ],
    },
    {
      id: 'zsidotorvenyek-es-jogfosztas-magyarorszagon',
      subject: 'tortenelem',
      unitId: 'tortenelem-masodik-vh-magyarorszag-holokauszt',
      title: 'Zsidótörvények és jogfosztás Magyarországon 1944 márciusa előtt',
      level: 'kozep',
      requirement: {
        kozep: 'A zsidóság jogfosztásának folyamata és a holokauszt Európában és Magyarországon',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Már **1920-ban** a **numerus clausus** törvény korlátozta a zsidó fiatalok egyetemi felvételét.',
            'Három **zsidótörvény** követte egymást: **1938**, **1939**, **1941**. Fokozatosan szűkítették a zsidók gazdasági és állampolgári jogait.',
            'A harmadik törvény (1941) **faji alapra** helyezte a zsidó fogalmát, és megtiltotta a vegyes házasságot.',
            'A zsidó férfiakat fegyver nélküli **munkaszolgálatra** hívták be. Sokan meghaltak a keleti fronton.',
            '**1941 augusztusában** a hatóságok „igazolatlan állampolgárokat” hurcoltak ki **Kamenyec-Podolszkijba**, ahol tömeggyilkosság történt.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'numerus clausus',
              text: 'Az 1920-as törvény, amely felsőoktatási felvételnél korlátozta az egyes népcsoportok arányát; a gyakorlatban főleg a zsidó hallgatókat sújtotta.',
            },
            {
              term: 'zsidótörvények',
              text: 'Az 1938–1941 között hozott magyar törvények, amelyek korlátozták a zsidók jogait.',
            },
            {
              term: 'munkaszolgálat',
              text: 'Fegyver nélküli katonai kényszermunka. A zsidó származású férfiak sokszor megalázó körülmények között szolgáltak.',
            },
            {
              term: 'antiszemitizmus',
              text: 'A zsidókkal szembeni előítélet és hátrányos megkülönböztetés.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az előzmények' },
        {
          kind: 'text',
          text: 'A Horthy-korszakban az antiszemitizmus a hivatalos politika egyik eleme volt. A **numerus clausus (1920)** nem említette név szerint a zsidókat, de az egyetemi felvételnél a „nemzetiségi arányra” hivatkozva a zsidó származású fiatalokat sújtotta. A **világgazdasági válság** és a **nácizmus** terjedése erősítette a zsidóellenes hangulatot. A **nyilasok** (Szálasi Ferenc pártja) radikális antiszemita ideológiát hirdettek.',
        },
        { kind: 'heading', text: 'A három zsidótörvény' },
        {
          kind: 'compare',
          title: 'A három zsidótörvény',
          columns: ['Év', 'Lényege'],
          rows: [
            {
              label: 'I. zsidótörvény',
              cells: [
                '1938',
                'A zsidók számát a kamarákban, értelmiségi és gazdasági pályákon 20 százalékban korlátozta.',
              ],
            },
            {
              label: 'II. zsidótörvény',
              cells: [
                '1939',
                'Szigorította a megkülönböztetést: a zsidó fogalmát bővítette, közhivatalokból kizárta, a gazdasági arányt tovább szűkítette.',
              ],
            },
            {
              label: 'III. zsidótörvény',
              cells: [
                '1941',
                'Faji alapra helyezte a zsidó fogalmát (származás szerint), tiltotta a vegyes házasságot és a zsidók-nem zsidók közötti nemi kapcsolatot.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A törvényeket a magyar országgyűlés fogadta el, magyar belpolitikai döntésként, bár a német birodalom erősödése és példája hatott rájuk. Az indoklás részben gazdasági volt: a zsidóság „térfoglalásának” korlátozása, a keresztény középosztály előnyben részesítése. A korábbi törvények még inkább a vallásra támaszkodtak, a harmadik már faji kategóriákat használt.',
        },
        { kind: 'heading', text: 'Munkaszolgálat' },
        {
          kind: 'text',
          text: 'A zsidó férfiakat nem vették fel fegyveres szolgálatra, hanem **munkaszolgálatra** hívták be, sárga karszalaggal, fegyvertelenül. A munkásszázadok egy részét **1942-től** a keleti frontra vezényelték, ahol kegyetlen bánásmódban volt részük, éheztek, fáztak. A doni vereség idején a munkaszolgálatosok közül több tízezren pusztultak el. Az áldozatok pontos száma bizonytalan.',
        },
        { kind: 'heading', text: 'Kamenyec-Podolszkij' },
        {
          kind: 'text',
          text: '**1941 augusztusában** a magyar hatóságok „állampolgárság nélkülinek” minősített, főleg Kárpátaljáról származó zsidókat toloncoltak át a német megszállási övezetbe, a Kamenyec-Podolszkij környékére. A magyar hatóságok által átadott embereket német egységek **augusztus végén** nagyrészt legyilkolták. Az áldozatok számára a becslések 16 és 23 ezer között mozognak.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **újvidéki mészárlás (1942 januárja)** szintén szerb és zsidó civileket sújtott (lásd az emelt oldalt a háborús részvételről).',
        },
        {
          kind: 'text',
          text: 'A magyar kormányok, köztük a **Kállay Miklós** vezette kormány 1944 márciusáig a német követelések ellenére sem adták ki a magyarországi zsidók tömegét a németeknek. Ezért 1944 tavaszán a magyarországi zsidóság, bár jogfosztott és megalázott helyzetben, sokan munkaszolgálatban, még életben volt, ellentétben sok német uralom alatt álló ország zsidóságával. Ez **1944. március 19-én** megváltozott.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Mikor és milyen intézkedéseket hoztak a zsidótörvények? Sorrend és tartalom.',
            'Forrás: a zsidótörvény részlete, munkaszolgálatos visszaemlékezése.',
            'Fogalmak: numerus clausus, zsidótörvény, munkaszolgálat, antiszemitizmus.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a magyarországi zsidótörvényeket a németek kényszerítették ki, vagy hogy 1944 előtt nem volt jogfosztás. A törvényeket magyar kormányok vezették be, a deportálások viszont 1944-ben, a német megszállás után kezdődtek.',
        },
        {
          kind: 'tip',
          text: 'Tartsd külön a két időszakot: (1) 1920–1944. március: jogfosztás, munkaszolgálat, de nincs tömeges deportálás; (2) 1944. március 19. után: gettó, deportálás.',
        },
      ],
      topicMatch: ['holokauszt'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor hozták meg az első magyarországi zsidótörvényt?',
          options: ['1920', '1938', '1941', '1944'],
          answer: 1,
          explanation:
            'Az első zsidótörvény 1938-ban született. 1920-ban a numerus clausus volt, 1941-ben a harmadik zsidótörvény.',
        },
        {
          question: 'Mi volt a harmadik zsidótörvény (1941) új vonása?',
          options: [
            'A deportálás elrendelése',
            'Faji alapra helyezte a zsidó fogalmát, és megtiltotta a vegyes házasságot.',
            'Kimondta a zsidók egyetemi felvételének tilalmát.',
            'Kiterjesztette a sorkötelezettséget a zsidókra.',
          ],
          answer: 1,
          explanation:
            'A harmadik törvény a származás alapján határozta meg a zsidó fogalmát, megtiltotta a vegyes házasságot.',
        },
        {
          question: 'Mi volt a munkaszolgálat?',
          options: [
            'Önkéntes szolgálat a hadiiparban',
            'Fegyveres katonai szolgálat zsidó önkéntesek számára',
            'Fegyver nélküli kényszermunka a hadsereg mellett, a zsidó származású férfiak számára',
            'A kormány közmunkaprogramja',
          ],
          answer: 2,
          explanation:
            'A zsidó férfiakat fegyver nélküli munkaszolgálatra osztották be, gyakran embertelen körülmények között.',
        },
        {
          question: 'Mit jelent a numerus clausus?',
          options: [
            'A felsőoktatási felvétel népcsoportok szerinti korlátozását.',
            'A zsidók kiűzését az országból.',
            'A munkaszolgálat bevezetését.',
            'A parlamenti helyek számának rögzítését.',
          ],
          answer: 0,
          explanation:
            'Az 1920-as törvény a „nemzetiségi arányra” hivatkozva korlátozta a felvételt, ami főleg a zsidó fiatalokat sújtotta.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Zsidótörvények Magyarországon',
          url: wiki('Zsidótörvények Magyarországon'),
        },
        { label: 'Wikipédia: Munkaszolgálat', url: wiki('Magyarországi zsidó munkaszolgálat') },
        { label: 'Wikipédia: Numerus clausus', url: wiki('Numerus clausus 1920') },
      ],
    },
    {
      id: 'nemet-megszallas-es-deportalasok-1944',
      subject: 'tortenelem',
      unitId: 'tortenelem-masodik-vh-magyarorszag-holokauszt',
      title: 'A német megszállás és a magyarországi zsidóság deportálása',
      level: 'kozep',
      requirement: {
        kozep:
          'A zsidóság jogfosztásának folyamata és a holokauszt Európában és Magyarországon; Német megszállás (5.10)',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1944. március 19-én** a német csapatok megszállták Magyarországot. A németek által kinevezett kormány és a magyar közigazgatás együttműködött velük.',
            'A zsidóságot **megbélyegezték** (sárga csillag), **gettókba** zárták, majd **deportálták**.',
            'A deportálásokat 1944 tavaszán és nyarán a **vidéki** zsidóság ellen hajtották végre. A deportáltak többségét **Auschwitzba** vitték.',
            'A deportálásokat **1944 nyarán** leállították, így a **budapesti** zsidóság nagy része életben maradt.',
            'Többen **mentettek** üldözötteket: **Raoul Wallenberg**, **Sztehlo Gábor**, **Salkaházi Sára**, **Apor Vilmos**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'gettó',
              text: 'A zsidók számára kijelölt zárt városrész vagy épületegyüttes, ahová a hatóságok összegyűjtötték őket a deportálás előtt.',
            },
            {
              term: 'deportálás',
              text: 'Az emberek erőszakos elszállítása más helyre, itt a haláltáborokba.',
            },
            {
              term: 'Sztójay Döme',
              text: 'A megszállás után 1944. március 22-től miniszterelnök. Kormánya végrehajtotta a német követeléseket.',
              emelt: true,
            },
            {
              term: 'Eichmann',
              text: 'Az SS tisztje, a zsidók deportálásának megszervezője, 1944-ben Magyarországon is irányította a különítményét.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A megszállás' },
        {
          kind: 'text',
          text: 'A német vezetés Kállay miniszterelnök kiugrási törekvései és a front közeledése miatt döntött a megszállásról. Horthyt Hitler március közepén Klessheimbe hívatta, miközben német csapatok **március 19-én** bevonultak Magyarországra. Az országot ellenállás nélkül megszállták. Horthy kormányzó maradt, a hatalom azonban a német megbízott, **Veesenmayer** kezébe került. A Kállay-kormányt új, németbarát kormány váltotta fel. A belügyi államtitkárságokat a zsidóellenes intézkedésekért felelős szélsőjobboldali politikusok (Endre László, Baky László) vezették.',
        },
        { kind: 'heading', text: 'A jogfosztástól a gettóig' },
        {
          kind: 'keypoints',
          title: 'A magyar hatóságok és a németek közös munkája',
          items: [
            'A német **SS-különítmény** kis létszámú volt; a végrehajtást a **magyar közigazgatás, rendőrség és csendőrség** végezte.',
            'A zsidókat összeírták, vagyonukat elkobozták, elvették rádiójukat, telefonjukat, **sárga csillagot** kellett viselniük (1944 áprilisától).',
            'A zsidó vezetőket **Zsidó Tanácsba** kényszerítették, amely a hatóságok végrehajtó szerve lett.',
            '**Gettókat** hoztak létre (előbb Kárpátalján és Észak-Erdélyben), a zsidóságot a hatóságok összegyűjtötték.',
          ],
        },
        { kind: 'heading', text: 'A deportálások' },
        {
          kind: 'text',
          text: 'A gettókból **marhavagonokban** hurcolták el az embereket. A deportálások az ország keleti részéről indultak, és zónánként haladtak nyugat felé, a főváros kivételével. A transzportok célja elsősorban **Auschwitz-Birkenau** volt, ahol a legtöbb deportáltat megérkezés után a gázkamrákba küldték, a munkaképeseket kényszermunkára fogták. A német jelentések 437 ezer körüli számot adnak; a becslések szerint **mintegy 430–440 ezer** embert hurcoltak el, mintegy nyolc hét alatt.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1944. március 19.', text: 'Német megszállás.' },
            {
              date: '1944 áprilisa',
              text: 'A sárga csillag viselése kötelező, megkezdődik a gettósítás.',
            },
            { date: '1944. május', text: 'A magyarországi deportálások kezdete.', emelt: true },
            { date: '1944. július', text: 'A deportálások leállítása.', emelt: true },
          ],
        },
        {
          kind: 'map',
          title: 'A gettósítás és a deportálás néhány állomása',
          places: [
            {
              name: 'Munkács',
              lat: 48.44,
              lon: 22.72,
              note: 'Kárpátalja, a gettósítás elindult itt',
            },
            { name: 'Kassa', lat: 48.72, lon: 21.26, note: 'gyűjtőhely és vasúti csomópont' },
            { name: 'Nagyvárad', lat: 47.05, lon: 21.92, note: 'nagy gettó, Észak-Erdély' },
            { name: 'Kolozsvár', lat: 46.77, lon: 23.59, note: 'gettó, Észak-Erdély' },
            { name: 'Debrecen', lat: 47.53, lon: 21.63, note: 'vidéki gettó' },
            { name: 'Szeged', lat: 46.25, lon: 20.15, note: 'vidéki gettó' },
            {
              name: 'Budapest',
              lat: 47.5,
              lon: 19.04,
              note: 'a fővárosból nem deportáltak tömegesen',
            },
          ],
        },
        { kind: 'heading', text: 'A deportálások leállítása és a mentők' },
        {
          kind: 'text',
          text: '1944 nyarán **nemzetközi tiltakozások** (a semleges államok, a pápa, a svéd király, a szövetségesek figyelmeztetései) és a front közeledése nyomán **Horthy** július elején leállíttatta a deportálásokat. A fővárosi zsidóságot nem hurcolták el ekkor, bár a budapesti zsidóknak csillagos házakba kellett költözniük.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Raoul Wallenberg',
              text: 'Svéd diplomata, 1944 júliusától Budapesten védőleveleket és védett házakat szervezett, így több tízezer embert mentett meg. 1945 januárjában szovjet fogságba került, sorsa tisztázatlan.',
            },
            {
              name: 'Sztehlo Gábor',
              text: 'Evangélikus lelkész, gyermekek százait bújtatta; a becslések szerint mintegy kétezer embert mentett meg.',
            },
            {
              name: 'Salkaházi Sára',
              text: 'Szociális Testvérület nővére, zsidó üldözötteket bújtatott. 1944 decemberében a nyilasok kivégezték.',
            },
            {
              name: 'Apor Vilmos',
              text: 'Győri megyéspüspök, egyházi épületében menekülteket rejtegetett. 1945 húsvétján halt meg, miután egy szovjet katona megsebesítette, mert a bújtatott nőket védte.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A magyarországi áldozatok teljes számát (a visszacsatolt területek zsidóságát is beleszámítva) a kutatók **500–600 ezer** közé teszik. A pontos szám a területi hovatartozás és a számítási módszerek miatt vitatott.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (sárga csillagról szóló rendelet, Wallenberg védlevele): milyen lépést ír le a folyamatban?',
            'Rövid kifejtés: hogyan zajlott a zsidóság jogfosztása és deportálása 1944-ben, ki mit tett?',
            'Személyek: Veesenmayer, Wallenberg, Sztehlo, Salkaházi, Apor (emelt szinten Sztójay és Eichmann).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az SS-különítményt kizárólagos felelősnek mondani. A deportálást a német megszállók a magyar közigazgatás és csendőrség közreműködésével hajtották végre. A második hiba: Horthyra hárítani vagy minden felelősséget letagadni; írd le a tényeket: Horthy kormányzó volt, a német nyomás jelentős volt, és a végrehajtás a magyar hivatalokon múlt.',
        },
        {
          kind: 'tip',
          text: 'Öt szóval a menet: megszállás, megbélyegzés, gettó, deportálás, leállítás. A számokat tartományként adj meg (kb. 430–440 ezer deportált).',
        },
      ],
      topicMatch: ['holokauszt', '=magyarország 1944'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor szállták meg a német csapatok Magyarországot?',
          options: ['1941. június 27.', '1943. január', '1944. március 19.', '1944. október 15.'],
          answer: 2,
          explanation:
            'A megszállás 1944. március 19-én történt. Október 15-én Horthy kiugrási kísérlete bukott meg.',
        },
        {
          question: 'Hová szállították a vidéki magyar zsidók többségét 1944-ben?',
          options: ['Mauthausenba', 'Kamenyec-Podolszkijba', 'Jasenovacba', 'Auschwitz-Birkenauba'],
          answer: 3,
          explanation:
            'A transzportok célja elsősorban Auschwitz-Birkenau volt, ahol sokakat azonnal meggyilkoltak.',
        },
        {
          question: 'Miért maradt életben a budapesti zsidóság jelentős része?',
          options: [
            'A deportálásokat július elején leállították, mielőtt a fővárosra sor került volna.',
            'Mert a nyilasok megvédték őket.',
            'Mert a németek nem akarták őket elvinni.',
            'Mert Budapest nem tartozott a megszállt területhez.',
          ],
          answer: 0,
          explanation:
            'A vidéki deportálások után Horthy leállíttatta a transzportokat; a fővárosban nemzetközi védelem is segített.',
        },
        {
          question: 'Ki volt Raoul Wallenberg?',
          options: [
            'Német tiszt',
            'A deportálások szervezője',
            'Svéd diplomata, aki védlevelekkel üldözötteket mentett Budapesten',
            'Magyar püspök',
          ],
          answer: 2,
          explanation:
            'Wallenberg 1944 nyarától védlevelekkel és védett házakkal mentett embereket.',
        },
        {
          question: 'Mikor kezdődtek és mikor álltak le a magyarországi deportálások?',
          options: [
            '1944 májusában kezdődtek, júliusban álltak le.',
            '1944 februárjában kezdődtek, áprilisban álltak le.',
            '1944 júniusában kezdődtek, októberben álltak le.',
            '1943 végén kezdődtek, 1944 tavaszán álltak le.',
          ],
          answer: 0,
          explanation:
            'A deportálások 1944 májusában indultak, és július elején leállították őket.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: A holokauszt Magyarországon',
          url: wiki('A holokauszt Magyarországon'),
        },
        { label: 'Wikipédia: Raoul Wallenberg', url: wiki('Raoul Wallenberg') },
        { label: 'Wikipédia: Sztójay Döme', url: wiki('Sztójay Döme') },
      ],
    },
    {
      id: 'nyilas-hatalomatvetel-es-a-haboru-vege',
      subject: 'tortenelem',
      unitId: 'tortenelem-masodik-vh-magyarorszag-holokauszt',
      title: 'A nyilas hatalomátvétel és a háború vége Magyarországon',
      level: 'kozep',
      requirement: {
        kozep:
          'Német megszállás, nyilas diktatúra – a hadszíntérré vált ország, deportálások a Szovjetunióba (5.10)',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1944. október 15-én** Horthy rádióproklamációban bejelentette a háborúból való kilépést (**kiugrási kísérlet**), de a németek és a nyilasok **átvették a hatalmat**.',
            '**Szálasi Ferenc** „nemzetvezetőként” **nyilas diktatúrát** vezetett be.',
            'A **nyilasok** terrort alkalmaztak: zsidók és politikai ellenfelek kivégzése, **halálmenetek**, a Duna-parti kivégzések.',
            'Az ország **hadszíntérré** vált: a szovjet csapatok elfoglalták a területet, **Budapest ostroma** 1945 elejéig tartott.',
            'A **Vörös Hadsereg** sok magyar katonát és civilt **hadifogságba** és kényszermunkára hurcolt (**malenkij robot**). A harcok **1945 áprilisára** értek véget Magyarországon.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nyilasok',
              text: 'A Szálasi Ferenc vezette Nyilaskeresztes Párt (hungarizmus) tagjai és támogatói; szélsőjobboldali, antiszemita, németbarát mozgalom.',
            },
            {
              term: 'kiugrási kísérlet',
              text: 'Az a törekvés, hogy az ország kilépjen a háborúból a német szövetségből.',
            },
            {
              term: 'malenkij robot',
              text: 'A szovjet hatóságok által civilek és katonák kényszermunkára hurcolása (a „malenkij robot” oroszul „kis munkát” jelent, ezzel az ürüggyel vittek el embereket).',
            },
            {
              term: 'hadifogság',
              text: 'A harcoló katonák ellenséges fogságba esése, amely sokszor évekig tartott.',
            },
            { term: 'Vörös Hadsereg', text: 'A Szovjetunió hadserege.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A front közeledése és október 15.' },
        {
          kind: 'text',
          text: '1944 nyarán a szovjet csapatok a Kárpátokhoz értek, **augusztus 23-án** Románia kilépett a tengelyből és átállt a szövetségesekhez. Horthy augusztus végén **Lakatos Géza** miniszterelnökkel új kormányt nevezett ki, és titokban fegyverszüneti tárgyalásokat folytatott a szovjetekkel. Szeptember végén a Vörös Hadsereg átlépte a magyar határt.',
        },
        {
          kind: 'text',
          text: '**1944. október 15-én** Horthy rádióban bejelentette, hogy fegyverszünetet kér. A német kommandósok már előzőleg elrabolták fiát, Horthy Miklós ifjabbat, és a kormányzót a kiáltvány visszavonására kényszerítették. A kiáltványt a legtöbb parancsnok nem hajtotta végre, a front nem állt meg. Horthyt Németországba vitték, a hatalmat **Szálasi Ferenc** vette át, akit a kormányzó kényszer hatására miniszterelnökké nevezett ki.',
        },
        { kind: 'heading', text: 'A nyilas uralom' },
        {
          kind: 'text',
          text: 'Szálasi **„nemzetvezetőként”** totális diktatúrát vezetett be a hungarista ideológiára építve. Célja a háború folytatása volt. A nyilas terror során **zsidókat és politikai ellenfeleket** gyilkoltak: Duna-parti kivégzéseket hajtottak végre, és **halálmenetekben** hajtottak tízezreket nyugat felé (**Hegyeshalom** irányába, német munkára). Budapesten létrehozták a **pesti gettót**. Kivégezték **Salkaházi Sárát** (1944 decemberében) és **Bajcsy-Zsilinszky Endrét**, a nyilasellenes ellenállás egyik vezetőjét (1944 végén).',
        },
        {
          kind: 'map',
          title: 'A hadszíntérré vált Magyarország néhány helyszíne',
          places: [
            {
              name: 'Debrecen',
              lat: 47.53,
              lon: 21.63,
              note: '1944 őszén harcok, az ideiglenes kormány székhelye',
            },
            { name: 'Budapest', lat: 47.5, lon: 19.04, note: 'ostrom a tél folyamán' },
            {
              name: 'Hegyeshalom',
              lat: 47.89,
              lon: 17.15,
              note: 'a halálmenetek célpontja a nyugati határon',
            },
          ],
        },
        { kind: 'heading', text: 'Hadszíntér és a háború vége' },
        {
          kind: 'text',
          text: 'A szovjet hadsereg és a vele szövetséges román egységek **1944 őszén** vonultak be az országba. **Debrecennél** nagy harcok folytak, a front **1944 decemberére** elérte Budapestet. Az ideiglenes nemzetgyűlés és kormány Debrecenben alakult meg (1944 végén). A főváros bekerítése december végén fejeződött be; **Pest 1945. január 18-án**, a **budai oldal február 13-án** került szovjet kézre. Az ostrom a lakosságra és az épületekre nézve is óriási pusztítást okozott. Az utolsó német csapatok **1945 áprilisának elején** hagyták el az ország területét; a háború Európában **1945. május 9-én** ért véget.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Budapest ostroma **1944. december–1945. február** közötti időszakként tartjuk számon. A harcok idején a német–magyar védők a Vörös Hadsereg és a román csapatok ellen küzdöttek; a polgári lakosság pincékben bújt meg.',
        },
        { kind: 'heading', text: 'Szovjet megszállás: hadifogság és malenkij robot' },
        {
          kind: 'text',
          text: 'A szovjet katonai hatóságok a front mögött katonákat és civileket fogtak el, és kényszermunkára hurcoltak a Szovjetunióba (**malenkij robot**). A fogságba esett magyarok számáról a becslések eltérnek; a leggyakoribb érték **600–700 ezer fő** (a hadifoglyokkal együtt, a civilek száma ennél jóval kisebb). Sokan meghaltak, mások csak évek múlva térhettek haza.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Mi történt 1944. október 15-én, és miért nem sikerült a kiugrás?',
            'Forrás: Horthy proklamációja vagy Szálasi kiáltványa; mi a két szöveg célja?',
            'Fogalmak: nyilasok, hungarizmus, malenkij robot, Budapest ostroma.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a nyilasokat és a Horthy-rendszert, vagy a nyilas hatalomátvételt a német megszállással azonosítani. A megszállás 1944. március 19-én volt; a nyilas hatalomátvétel 1944. október 15-én. Ne keverd a két dátumot.',
        },
        {
          kind: 'tip',
          text: '1944 három fordulópontja: március 19. (megszállás), október 15. (kiugrási kísérlet és nyilas hatalomátvétel), december vége (Budapest ostroma). A számokat becslésként add meg.',
        },
      ],
      topicMatch: ['magyarország 1941–1945', '=magyarország 1944'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mi történt 1944. október 15-én?',
          options: [
            'A német megszállás',
            'Budapest ostroma kezdődött',
            'A deportálások leálltak',
            'Horthy kiugrási kísérlete megbukott, a nyilasok átvették a hatalmat',
          ],
          answer: 3,
          explanation:
            'Horthy proklamációja ellenére a németek és a nyilasok átvették a hatalmat, Szálasi lett a miniszterelnök.',
        },
        {
          question: 'Ki vezette a nyilas diktatúrát?',
          options: ['Szálasi Ferenc', 'Sztójay Döme', 'Lakatos Géza', 'Bárdossy László'],
          answer: 0,
          explanation:
            'Szálasi Ferenc volt a Nyilaskeresztes Párt vezére, „nemzetvezetőként” irányította az országot.',
        },
        {
          question: 'Mi a malenkij robot?',
          options: [
            'A nyilasok munkaszolgálata',
            'Civilek és katonák szovjet kényszermunkára hurcolása a Szovjetunióba',
            'A deportálás Auschwitzba',
            'A magyar hadsereg visszavonulása',
          ],
          answer: 1,
          explanation:
            'A szovjet hatóságok „kis munka” ürügyén hurcoltak el civileket és katonákat a Szovjetunióba.',
        },
        {
          question: 'Mikor ért véget Budapest ostroma?',
          options: [
            '1944. október 15-én',
            '1944. december 24-én',
            '1945. február 13-án, a budai oldal elfoglalásával',
            '1945. május 9-én',
          ],
          answer: 2,
          explanation: 'Pest január 18-án, Buda február 13-án esett el; az ostrom ekkor ért véget.',
        },
        {
          question: 'Mikor ért véget a háború Magyarországon?',
          options: [
            '1945. április elején az utolsó német csapatok kivonultak',
            '1944 decemberében',
            '1945 szeptemberében',
            '1946-ban',
          ],
          answer: 0,
          explanation:
            'Az utolsó német egységek 1945 áprilisának elején hagyták el az országot; május 9-én ért véget a háború Európában.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Szálasi Ferenc', url: wiki('Szálasi Ferenc') },
        { label: 'Wikipédia: Budapest ostroma', url: wiki('Budapest ostroma 1944–1945') },
        {
          label: 'Wikipédia: Horthy kiugrási kísérlete',
          url: wiki('1944. október 15. Horthy proklamáció'),
        },
      ],
    },
  ],
};

export default unit;
