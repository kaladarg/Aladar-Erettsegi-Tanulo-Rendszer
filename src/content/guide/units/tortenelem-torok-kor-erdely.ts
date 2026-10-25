import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 3.3 (Törökellenes és rendi küzdelmek) and 3.4 (Erdély). */
const unit: GuideUnit = {
  id: 'torok-kor-erdely',
  subject: 'tortenelem',
  order: 30,
  title: 'A török kor és Erdély: Mohácstól a 17. századi küzdelmekig',
  requirementRef: '3.3–3.4',
  intro:
    'Az ország három részre szakadása Mohács után, a végvárak harca, majd Erdély útja: vallási türelem, fejedelmi állam, Bocskai, Bethlen és Zrínyi Miklós.',
  requirementSource:
    'A témák, fogalmak, személyek, évszámok és helyszínek az érettségi részletes vizsgakövetelményeinek 3. témaköréből (kora újkor) valók, a 3.3 és 3.4 pontokhoz tartozó tételek. Ami emelt szintű, azt külön jelöljük.',
  requirements: {
    terms: {
      kozep: [
        'protestáns',
        'evangélikus',
        'református',
        'unitárius',
        'vallási türelem',
        'abszolutizmus',
        'hajdúszabadság',
        'szabadságharc',
      ],
      emelt: ['három rendi nemzet'],
    },
    people: {
      kozep: [
        'I. Szulejmán',
        'II. Lajos',
        '(Szapolyai) János',
        'I. Ferdinánd',
        'Dobó István',
        'Zrínyi Miklós (a szigetvári hős)',
        'Bethlen Gábor',
      ],
      emelt: [
        'Tomori Pál',
        'Fráter György',
        'Báthory István',
        'Bocskai István',
        'I. Rákóczi György',
        'Zrínyi Miklós (a költő és hadvezér)',
      ],
    },
    dates: {
      kozep: [
        '1526 a mohácsi csata',
        '1541 Buda eleste',
        '1552 Eger védelme',
        '1566 Szigetvár eleste',
        '1568 a tordai határozat',
      ],
      emelt: [
        '1568 drinápolyi béke',
        '1570 speyeri szerződés',
        '1606 bécsi béke',
        '1613–1629 Bethlen fejedelemsége',
        '1648 a vesztfáliai békék',
        '1664 Zrínyi téli hadjárata',
        '1664 vasvári béke',
      ],
    },
    places: {
      kozep: [
        'Mohács',
        'Kőszeg',
        'Eger',
        'Szigetvár',
        'Sárospatak',
        'Erdélyi Fejedelemség',
        'Hódoltság',
        'Magyar Királyság (királyi Magyarország)',
        'Pozsony',
        'Gyulafehérvár',
        'Debrecen',
        'Temesvár',
      ],
      emelt: ['Nagyszombat', 'Partium', 'Bánság/Temesköz'],
    },
  },
  pages: [
    {
      id: 'mohacs-kettos-kiralyvalasztas',
      subject: 'tortenelem',
      unitId: 'torok-kor-erdely',
      title: 'Mohács és a kettős királyválasztás',
      level: 'kozep',
      requirement: {
        kozep: 'A mohácsi csata és közvetlen előzményei, a kettős királyválasztás',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A 15. században Hunyadi János és Hunyadi Mátyás még meg tudta állítani az oszmánokat. A Jagelló-korban (1490–1526) a központi hatalom gyenge volt, a nemesség széthúzott.',
            '**1521**: elesett Nándorfehérvár, a déli kapu. **I. Szulejmán** szultán 1526-ban újra támadott.',
            '**1526. augusztus 29.**: a **mohácsi csata**. A magyar sereg alig két óra alatt vereséget szenvedett, **II. Lajos** király a menekülésben meghalt, a vezérek (köztük **Tomori Pál**) is elestek.',
            'Mohács után két király volt: **Szapolyai János** (Székesfehérvár, 1526. november) és **I. Ferdinánd** (Pozsony, 1526. december).',
            'A mohácsi vereség önmagában még nem szakította három részre az országot: az igazi szakadás **1541-ben** következett be.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1514', text: 'Dózsa-parasztháború, a Hármaskönyv (Werbőczy) összeállítása.' },
            { date: '1521', text: 'Nándorfehérvár eleste.' },
            { date: '1526. augusztus 29.', text: 'Mohácsi csata, II. Lajos halála.' },
            {
              date: '1526. november',
              text: 'Szapolyai Jánost királlyá választják és megkoronázzák.',
            },
            { date: '1526. december', text: 'Pozsonyban I. Ferdinándot választják királlyá.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért volt gyenge az ország?' },
        {
          kind: 'text',
          text: 'Mátyás halála (1490) után a nagybirtokos főurak a gyenge **Jagelló-királyokat** (II. Ulászló, majd gyermekként trónra lépő **II. Lajos**) választották, hogy ők maradjanak az ország tényleges urai. A királyi jövedelmek elfogytak, a végvárakat nem fizették ki, és a nemesi pártok (a főurak és a köznemesség) egymás ellen harcoltak. Az 1514-es **Dózsa-féle parasztháború** leverése után a jobbágyságot még súlyosabb terhek (örökös jobbágyság) sújtották, így a lakosság sem lelkesedett a védelemért.',
        },
        { kind: 'heading', text: 'Az oszmán támadás' },
        {
          kind: 'text',
          text: 'Az Oszmán Birodalom a Balkánt már a 15. században meghódította. **I. Szulejmán** 1520-ban lett szultán; 1521-ben bevette **Nándorfehérvárt** (Belgrádot), amelynek 1456-os védelmét Hunyadi János még sikerrel vezette. 1526-ban nagy sereggel indult északnak a Duna mentén.',
        },
        {
          kind: 'text',
          text: 'A magyar sereg (mintegy 25–30 ezer ember) **Mohácsnál** ütközött meg az oszmánokkal. Fővezére **Tomori Pál** kalocsai érsek volt. A király mellé nem csatlakozott időben **Szapolyai János** erdélyi vajda serege, és a szövetségesek (cseh, német segítség) sem érkeztek meg. A csata után **II. Lajos** a menekülés közben a Csele-patakba fulladt. Elesett a főpapok és főurak jelentős része is.',
        },
        {
          kind: 'warning',
          text: 'Mohács nem azonnal jelentette az ország végét. Szulejmán a csata után kivonult az országból, és csak 1541-ben szállta meg Budát. A vereség a **trónüresedést** és a **kettős királyválasztást** okozta, ez vezetett a hosszú belháborúhoz.',
        },
        { kind: 'heading', text: 'Két király' },
        {
          kind: 'compare',
          title: 'A két trónkövetelő',
          columns: ['Szapolyai János', 'I. Ferdinánd'],
          rows: [
            {
              label: 'Ki ő?',
              cells: ['erdélyi vajda, nagybirtokos', 'osztrák főherceg, V. Károly öccse'],
            },
            {
              label: 'Jogcíme',
              cells: [
                'magyar király kell, a nemzeti érzés és a köznemesség támogatja',
                'II. Lajos sógora; az 1515-ös Habsburg–Jagelló házassági szerződés',
              ],
            },
            {
              label: 'Választás',
              cells: ['Székesfehérvár, 1526. november', 'Pozsony, 1526. december'],
            },
            {
              label: 'Támogatói',
              cells: ['főleg a köznemesség', 'több főúr és a Habsburg-hatalom'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Szapolyait Székesfehérvárott a Szent Koronával koronázták meg, Ferdinándot 1527 novemberében koronázták. A két király polgárháborúban küzdött. Szapolyai a szultán támogatását kereste: 1529-ben Szulejmán Budára vezette vissza, majd Bécset ostromolta (sikertelenül). **1532-ben Kőszeget** Jurisics Miklós kapitány néhány száz védővel tartotta, és a szultáni sereg visszafordult. 1538-ban a **váradi békében** Ferdinánd és Szapolyai megegyezett, hogy mindketten megtartják, amijük van, de Szapolyai halála után Ferdinánd örökli az egész országot. Ez nem valósult meg.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kettős választás mögött jogi vita is állt: a magyar rendek a szabad királyválasztás jogára hivatkoztak, a Habsburgok pedig a családi szerződésekre és a rokonságra. Ferdinánd később elfoglalta Budát (1527), Szapolyai viszont a szultán támogatását kérte, és ezzel az oszmánokat is bevonta a magyar belharcba.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Évszám és esemény párosítása: 1526 a mohácsi csata, 1541 Buda eleste.',
            'Forrás: a mohácsi csata leírása vagy II. Lajos halála; mi okozta a vereséget?',
            'Térkép: Mohács, Kőszeg, Pozsony helyszínek azonosítása.',
            'Rövid esszé vagy szöveges feladat: a mohácsi csata okai és következményei, a kettős királyválasztás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a csata után az ország azonnal három részre szakadt. Mohács után két király volt; a háromfelé szakadást Buda 1541-es eleste hozta.',
        },
        {
          kind: 'tip',
          text: 'Okokat és következményeket külön csoportosíts. Okok: a központi hatalom gyengesége, a belső harcok, az oszmán túlerő. Következmények: a király halála, a kettős királyválasztás, a török előrenyomulás, a Habsburgok megjelenése.',
        },
      ],
      topicMatch: ['mohácsi csata', 'török háborúk', 'török hódítás'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Mikor volt a mohácsi csata?',
          options: ['1514', '1521', '1526', '1541'],
          answer: 2,
          explanation: '1526. augusztus 29. 1521-ben Nándorfehérvár esett el, 1541-ben pedig Buda.',
        },
        {
          question: 'Ki volt a magyar sereg fővezére Mohácsnál?',
          options: ['Dobó István', 'Szapolyai János', 'Zrínyi Miklós', 'Tomori Pál'],
          answer: 3,
          explanation:
            'Tomori Pál kalocsai érsek vezette a sereget. Szapolyai nem érkezett meg időben.',
        },
        {
          question: 'Mi történt II. Lajossal a csata után?',
          options: [
            'Elfogták és Isztambulba vitték.',
            'A menekülés közben meghalt.',
            'Lemondott a trónról.',
            'Erdélybe menekült.',
          ],
          answer: 1,
          explanation:
            'II. Lajos a menekülés közben a Csele-patakba fulladt, ezért trónüresedés lett.',
        },
        {
          question: 'Hol választották meg királlyá I. Ferdinándot?',
          options: ['Székesfehérvárott', 'Budán', 'Pozsonyban', 'Debrecenben'],
          answer: 2,
          explanation:
            'Ferdinándot Pozsonyban választották (1526. december); Szapolyait Székesfehérvárott (1526. november).',
        },
        {
          question: 'Mi volt Ferdinánd egyik fő jogcíme a magyar trónra?',
          options: [
            'A pápa kinevezése.',
            'II. Lajos sógora volt, és volt Habsburg–Jagelló szerződés.',
            'Hunyadi Mátyás örököse volt.',
            'A szultán támogatta.',
          ],
          answer: 1,
          explanation:
            'Ferdinánd Lajos felesége révén sógora volt, és az 1515-ös házassági szerződésre hivatkozott.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Mohácsi csata', url: wiki('Mohácsi csata') },
        { label: 'Wikipédia: Szapolyai János', url: wiki('Szapolyai János') },
        { label: 'Wikipédia: I. Ferdinánd magyar király', url: wiki('I. Ferdinánd magyar király') },
      ],
    },
    {
      id: 'harom-reszre-szakadas-varhaboruk',
      subject: 'tortenelem',
      unitId: 'torok-kor-erdely',
      title: 'A három részre szakadt ország és a várháborúk (1541–1568)',
      level: 'kozep',
      requirement: {
        kozep: 'Az ország három részre szakadása; a várháborúk (1541–1568)',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1541**: Szulejmán Budát elfoglalta. Az ország három részre szakadt: **királyi Magyarország** (Habsburg), **Hódoltság** (oszmán uralom), **Erdély** (a keleti országrész, később Erdélyi Fejedelemség).',
            'A Habsburg-ellenes és a török elleni harc a **végvárakon** folyt. A hős védők: **Dobó István** (Eger, **1552**) és **Zrínyi Miklós** (Szigetvár, **1566**).',
            '**1566**: Szigetvár elesett, de az ostrom alatt meghalt **Szulejmán** is.',
            '**1568**: a **drinápolyi béke** (Habsburg és Oszmán Birodalom) rögzítette a határokat; ugyanekkor Erdélyben a **tordai határozat** vallási türelmet hirdetett.',
          ],
        },
        {
          kind: 'map',
          title: 'A török kor fontos helyszínei',
          places: [
            { name: 'Mohács', lat: 45.99, lon: 18.68, note: '1526' },
            { name: 'Kőszeg', lat: 47.39, lon: 16.54, note: '1532, Jurisics Miklós' },
            { name: 'Buda', lat: 47.5, lon: 19.04, note: '1541, török kézbe kerül' },
            { name: 'Eger', lat: 47.9, lon: 20.37, note: '1552, Dobó István' },
            { name: 'Szigetvár', lat: 46.05, lon: 17.8, note: '1566, Zrínyi Miklós' },
            { name: 'Temesvár', lat: 45.75, lon: 21.23, note: '1552-ben török kézbe kerül' },
            {
              name: 'Pozsony',
              lat: 48.15,
              lon: 17.11,
              note: 'az ország központja, az országgyűlések helye',
            },
            { name: 'Gyulafehérvár', lat: 46.07, lon: 23.57, note: 'erdélyi fejedelmi székhely' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Buda eleste és a három rész' },
        {
          kind: 'text',
          text: 'Szapolyai 1540-ben meghalt; halála idején született kisfia, **János Zsigmond**. Ferdinánd katonái Budát ostromolták, mire Szulejmán 1541-ben **cselvetéssel bevette Budát**, és a közép országrészt közvetlen oszmán uralom alá vonta. A Dunától keletre eső terület Erdéllyel és a Tiszántúl egy részével a kis János Zsigmond és anyja, **Izabella királyné** (a tanácsadó **Fráter György** vezetésével) alatt maradt, oszmán védnökség alatt.',
        },
        {
          kind: 'compare',
          title: 'Hódoltság és királyi Magyarország',
          columns: ['Hódoltság', 'Királyi Magyarország'],
          rows: [
            {
              label: 'Uralkodó',
              cells: ['az oszmán szultán', 'a Habsburg-uralkodó (magyar király)'],
            },
            {
              label: 'Központ',
              cells: ['Buda (budai vilajet)', 'Pozsony (országgyűlés, koronázás)'],
            },
            {
              label: 'Terület',
              cells: [
                'a Dunántúl déli–középső része, a Duna–Tisza köze, a Tiszántúl nagy része (később a Bánság is)',
                'a nyugati és északi sáv (nyugati Dunántúl, Felvidék, Horvátország)',
              ],
            },
            {
              label: 'Jellemző',
              cells: [
                'kettős adóztatás, virágzó mezővárosok',
                'végvárrendszer, rendi országgyűlés',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A harmadik rész **Erdély** volt, amely Szapolyai fia révén a keleti Magyar Királyságból lassan önálló fejedelemséggé vált (lásd az Erdély-oldalakat).',
        },
        { kind: 'heading', text: 'A Hódoltság' },
        {
          kind: 'text',
          text: 'A hódoltságban a lakosok a **szultánnak adóztak**, de a magyar földesurak és az egyház is gyakran beszedte a magáét: ez a **kettős adóztatás**. A lakosság nem pusztult el, a nagy alföldi **mezővárosok** (például Kecskemét, Nagykőrös, Cegléd) gazdagodtak a marhakereskedelemből. A reformáció is gyorsan terjedt, mert a török nem avatkozott a vallásba. A katonai uralmat az oszmán várak (például Buda és Temesvár) biztosították.',
        },
        { kind: 'heading', text: 'A királyi Magyarország és a végvárak' },
        {
          kind: 'text',
          text: 'Ferdinánd a Habsburg-örökös tartományokkal együtt irányította az országot. Magyarország központja **Pozsony** lett (országgyűlés, koronázás). A török határán **végvárrendszert** építettek ki: várak sora, zsoldos katonasággal, amelyet a magyar rendek adója és a birodalmi segély tartott fenn. A hadi kérdéseket az **Udvari Haditanács** irányította Bécsből.',
        },
        { kind: 'heading', text: 'A várháborúk (1541–1568)' },
        {
          kind: 'timeline',
          items: [
            { date: '1541', text: 'Buda eleste, az ország három részre szakad.' },
            {
              date: '1552',
              text: 'A törökök elfoglalják Temesvárt és sok más várat, **Eger** viszont kitart: Dobó István kapitány és védői visszaverik a túlerőt.',
            },
            {
              date: '1566',
              text: '**Szigetvár** ostroma: Zrínyi Miklós kitörésben esik el, a vár elesik, az ostrom alatt Szulejmán is meghal.',
            },
            { date: '1568', text: 'Drinápolyi béke: a határok a helyükön maradnak.' },
          ],
        },
        {
          kind: 'text',
          text: 'Az Egri vár 1552 őszén sikeresen megvédte magát a sokszoros túlerőtől. A védők egy része, köztük a nők is, részt vett a harcban. **Dobó István** egri várkapitány volt, később erdélyi vajda. Szigetvárat **Zrínyi Miklós** kapitány védte: a katonák utolsó csapata kirohant a vár égő maradványaiból, és szinte mind elesett. A hős védők példája később a magyar emlékezet fontos része lett.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **drinápolyi béke** (1568) értelmében a Habsburg-uralkodó éves **adót** (tiszteletdíjat) fizetett a szultánnak, a felek elismerték egymás birtokait. A végvárháborúk így békeidőben is folytatódtak (portyázások, kisháborúk). A hosszú háború (1593–1606) tette ismét nyílt háborúvá a küzdelmet.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: az ország három részének azonosítása, Mohács, Eger, Szigetvár, Buda elhelyezése.',
            'Évszám és esemény párosítása: 1541, 1552, 1566.',
            'Forrás: egri vagy szigetvári ostrom leírása; ki a védő, mi a következmény?',
            'Összehasonlítás: a Hódoltság és a királyi Magyarország működése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Dobó Istvánt és Zrínyi Miklóst összekeverni. Dobó Eger védője (1552, siker), Zrínyi Szigetvárt védte (1566, a vár elesett, de a védők hősiesen harcoltak).',
        },
        {
          kind: 'tip',
          text: 'A három rész bemutatásánál mindig mondd meg, ki az uralkodó, mi a központ és mi a jellemző. Egy rövid táblázat vagy három mondat pontot ér a „tényeken alapuló megállapításra”.',
        },
      ],
      topicMatch: [
        'várháborúk',
        'hódoltság',
        'török hódoltság',
        'török kor',
        'magyarország 16–17. század',
      ],
      cards: { subject: 'tortenelem', deck: 'topografia', era: 'koraujkor' },
      quiz: [
        {
          question: 'Melyik évhez kötjük az ország három részre szakadását?',
          options: ['1526', '1541', '1552', '1566'],
          answer: 1,
          explanation: '1541-ben Szulejmán elfoglalta Budát; ezzel jött létre a három rész.',
        },
        {
          question: 'Ki védte sikeresen Egert 1552-ben?',
          options: ['Zrínyi Miklós', 'Jurisics Miklós', 'Dobó István', 'Fráter György'],
          answer: 2,
          explanation:
            'Dobó István. Zrínyi Szigetvárt védte 1566-ban, Jurisics pedig Kőszeget 1532-ben.',
        },
        {
          question: 'Mi történt Szigetvár ostroma alatt?',
          options: [
            'Szulejmán meghalt, a vár elesett.',
            'A vár ellenállt, és a török visszavonult.',
            'Zrínyi megegyezett Szulejmánnal.',
            'Buda is elesett.',
          ],
          answer: 0,
          explanation:
            '1566-ban Szulejmán az ostrom alatt meghalt; a vár elesett, Zrínyi kitörésben esett el.',
        },
        {
          question: 'Melyik NEM az ország három részéhez tartozott?',
          options: ['Hódoltság', 'Királyi Magyarország', 'Erdély', 'Moldvai Fejedelemség'],
          answer: 3,
          explanation:
            'A három rész: a királyi Magyarország, a Hódoltság és a keleti rész (Erdély).',
        },
        {
          question: 'Mit jelent a kettős adóztatás?',
          options: [
            'A nemesek is adóztak.',
            'Az adót kétszer évente szedték.',
            'A hódoltsági lakosok a szultánnak és gyakran a magyar földesúrnak is fizettek.',
            'Az adót pénzben és természetben is kellett fizetni.',
          ],
          answer: 2,
          explanation:
            'A hódoltsági lakosok a szultánnak adóztak, de a magyar földesurak és az egyház is beszedte a járandóságát.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Magyarország három részre szakadása',
          url: wiki('Magyarország három részre szakadása'),
        },
        { label: 'Wikipédia: Egri ostrom (1552)', url: wiki('Egri ostrom 1552') },
        { label: 'Wikipédia: Szigetvár ostroma', url: wiki('Szigetvár ostroma 1566') },
      ],
    },
    {
      id: 'erdely-etnikai-vallasi-helyzete',
      subject: 'tortenelem',
      unitId: 'torok-kor-erdely',
      title: 'Erdély etnikai és vallási helyzete',
      level: 'kozep',
      requirement: {
        kozep: 'Erdély sajátos etnikai és vallási helyzete',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Erdélyben **magyarok**, **székelyek**, **szászok** és **románok** éltek. A magyar nemesség, a székelyek és a szászok alkották a **három rendi nemzetet**; a románok nem tartoztak közéjük.',
            'Vallások: katolikus, evangélikus (főleg szászok), református (főleg magyarok) és **unitárius**. Ortodox (görögkeleti) hitű volt a legtöbb román.',
            '**1568**: a **tordai országgyűlés** határozata: a hit Isten ajándéka, szabad a prédikálás. Ez Európában példátlan **vallási türelem** volt.',
            'A négy **bevett vallás** (katolikus, evangélikus, református, unitárius) egyenjogú volt; az ortodoxok csak tűrtek maradtak.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'protestáns',
              text: 'A reformációból kialakult egyházak közös neve (evangélikus, református, unitárius).',
            },
            {
              term: 'evangélikus',
              text: 'Luther tanain alapuló egyház; Erdélyben főleg a szászok.',
            },
            { term: 'református', text: 'Kálvin tanain alapuló egyház; a magyarok nagy része.' },
            {
              term: 'unitárius',
              text: 'Az Atya, a Fiú és a Szentlélek hármasságát elvető egyház; Erdély sajátossága, Dávid Ferenc vezetésével szerveződött.',
            },
            {
              term: 'vallási türelem',
              text: 'Az államhatalom nem erőszakolja az uralkodó vallást, a különböző hiteket egyaránt tűri.',
            },
            {
              term: 'három rendi nemzet',
              text: 'Erdély politikai nemzetei: a magyar nemesség, a székelyek és a szászok. A románok nem alkottak rendi nemzetet.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Etnikai helyzet' },
        {
          kind: 'text',
          text: 'Erdély lakosságát több csoport alkotta. A **magyar nemesek** vármegyékben éltek. A **székelyek** a Székelyföldön katonáskodtak, a közszabadok közös nemesi jogokat élveztek. A **szászok** a középkorban betelepülő német vendégek leszármazottai: privilégiumaikat (Andreanum, 1224) őrizték, gazdag városokban (Nagyszeben, Brassó) éltek, a Királyföldön. A **románok** nagyrészt pásztorkodó vagy jobbágyi sorban éltek, a görögkeleti (ortodox) egyházhoz tartoztak. Számuk a 16–17. században folyamatosan nőtt, és a lakosság nagy részét tették ki.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **három rendi nemzet** (a magyar nemesség, a székelyek és a szászok) szövetsége az **1437-es kápolnai unióra** megy vissza, a bábolnai parasztfelkelés leverése után. Ez az unió alkotta Erdély rendi alkotmányát: a három nemzet együtt vett részt az országgyűlésben, a románoknak azonban nem volt rendi jogaik.',
        },
        { kind: 'heading', text: 'Vallási helyzet' },
        {
          kind: 'text',
          text: 'A reformáció gyorsan elterjedt. A **szászok** Honterus János brassói tevékenysége nyomán **evangélikusok** lettek, a **magyarok** többsége **református**, a Kolozsvár környéki magyarok egy része **unitárius**. A katolikusok kisebbségbe kerültek. Az unitárius egyház vezetője **Dávid Ferenc** volt, János Zsigmond udvari papja; őt 1579-ben börtönbe vetették, és ott halt meg Déván.',
        },
        {
          kind: 'text',
          text: 'Erdély egyedülálló vallási helyzetet teremtett Európában. Az 1557-es tordai országgyűlés már a lutheránus vallás törvényes elismerését hozta, ez azonban még nem volt teljes vallásszabadság (a források értelmezése eltér). **1568-ban** János Zsigmond **tordai országgyűlése** kimondta: mindenki a maga hite szerint prédikálhat, és ezt nem büntethetik. Később a **négy bevett vallás** (katolikus, evangélikus, református, unitárius) egyenjogú volt.',
        },
        {
          kind: 'warning',
          text: 'Az ortodox (görögkeleti) románok vallása nem tartozott a bevett vallások közé, csak tűrték. A vallási türelem tehát nem jelentett teljes egyenlőséget.',
        },
        {
          kind: 'compare',
          title: 'A három rendi nemzet és a románok',
          columns: ['Három rendi nemzet', 'Románok'],
          rows: [
            {
              label: 'Rendi jog',
              cells: ['van, részt vesznek az országgyűlésben', 'nincs rendi jog'],
            },
            { label: 'Vallás', cells: ['bevett vallások', 'ortodox, csak tűrt'] },
            {
              label: 'Társadalmi helyzet',
              cells: [
                'nemesek, székely szabadok, szász polgárok',
                'nagyrészt jobbágyok, pásztorok',
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
            'Forrás: a tordai országgyűlési határozat szövege; mit mond a vallásszabadságról?',
            'Statisztika vagy táblázat: Erdély lakosságának vallási és etnikai megoszlása.',
            'Fogalmak: unitárius, vallási türelem, három rendi nemzet.',
            'Esszé vagy rövid válasz: miben volt más Erdély helyzete, mint a nyugati országoké?',
          ],
        },
        {
          kind: 'tip',
          text: 'A „sajátos” helyzetet mindig összehasonlítással mutasd meg: máshol Európában a vallásháborúk idején az uralkodó vallása kötelező volt (például az 1555-ös augsburgi vallásbéke elve), Erdélyben viszont a rendek négy vallást egyaránt elfogadtak.',
        },
        {
          kind: 'warning',
          text: 'Ne írd, hogy Erdélyben „mindenki egyenlő volt”: a románok nem voltak rendi nemzet, az ortodox vallás nem volt bevett.',
        },
      ],
      topicMatch: [
        'az erdélyi fejedelemség etnikai',
        'erdélyi fejedelemség',
        'magyarország 16–17. század',
      ],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Melyik évhez kötjük a tordai határozatot?',
          options: ['1526', '1541', '1568', '1606'],
          answer: 2,
          explanation:
            '1568-ban a tordai országgyűlés kimondta a vallásszabadságot (János Zsigmond uralkodása alatt).',
        },
        {
          question: 'Melyik vallás Erdély sajátossága Európában?',
          options: ['unitárius', 'református', 'evangélikus', 'anglikán'],
          answer: 0,
          explanation:
            'Az unitárius egyház Erdélyben jött létre és volt bevett vallás; Dávid Ferenc tevékenységéhez kötődik.',
        },
        {
          question: 'Melyik csoport NEM tartozott Erdély három rendi nemzete közé?',
          options: ['magyar nemesség', 'székelyek', 'szászok', 'románok'],
          answer: 3,
          explanation: 'A románok nem alkottak rendi nemzetet, bár a lakosság nagy részét adták.',
        },
        {
          question: 'Melyik vallásúak voltak főleg az erdélyi szászok?',
          options: ['katolikus', 'református', 'evangélikus', 'unitárius'],
          answer: 2,
          explanation: 'A szászok a reformáció során evangélikusok (lutheránusok) lettek.',
        },
        {
          question: 'Mikor jött létre a kápolnai unió a három nemzet szövetségeként?',
          options: ['1437', '1514', '1526', '1568'],
          answer: 0,
          explanation:
            'Az 1437-es kápolnai unió a bábolnai felkelés után kötötte össze a magyar nemességet, a székelyeket és a szászokat.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Erdélyi Fejedelemség', url: wiki('Erdélyi Fejedelemség') },
        { label: 'Wikipédia: Tordai országgyűlés', url: wiki('Tordai országgyűlés 1568') },
        { label: 'Wikipédia: Dávid Ferenc', url: wiki('Dávid Ferenc unitárius') },
      ],
    },
    {
      id: 'bocskai-bethlen-rendi-abszolutista',
      subject: 'tortenelem',
      unitId: 'torok-kor-erdely',
      title: 'Bocskai és Bethlen: rendi és abszolutista törekvések a 17. században',
      level: 'emelt',
      requirement: {
        emelt:
          'Rendi és abszolutista törekvések, konfliktusok a 17. században: a Bocskai-szabadságharc, Bethlen Gábor bekapcsolódása a harmincéves háborúba',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Habsburgok **abszolutista** törekvései (erős központi hatalom, a rendek jogainak csorbítása) és a protestáns vallás elleni fellépés ellenállást váltott ki.',
            '**Bocskai István** vezette a hajdúkat és a rendeket 1604-ben a Habsburg-ellenes **szabadságharcba**. Az 1606-os **bécsi béke** biztosította a vallásszabadságot és az alkotmányos jogokat.',
            '**Bethlen Gábor** (fejedelem 1613–1629) a **harmincéves háborúban** a protestáns oldalon támadta a Habsburgokat; a nikolsburgi békében hét vármegyét kapott.',
            'A rendi harc célja: az alkotmány és a vallásszabadság védelme, nem a függetlenség önmagában.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1604',
              text: 'Bocskai István csatlakozik a hajdúkhoz; kitör a szabadságharc.',
            },
            {
              date: '1605',
              text: 'Szerencsi országgyűlés: Bocskait Magyarország fejedelmévé választják; a hajdúk kollektív nemességet kapnak.',
            },
            {
              date: '1606',
              text: 'Bécsi béke Mátyás főherceggel, majd zsitvatoroki béke a törökkel.',
            },
            { date: '1613–1629', text: 'Bethlen Gábor erdélyi fejedelem.' },
            { date: '1618', text: 'A harmincéves háború kitörése.' },
            { date: '1621', text: 'Nikolsburgi béke.' },
            { date: '1648', text: 'A vesztfáliai békék véget vetnek a harmincéves háborúnak.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Bocskai-szabadságharc (1604–1606)' },
        {
          kind: 'text',
          text: 'A **hosszú háború** (1593–1606) a Habsburgok és az oszmánok között dúlt, a királyi Magyarországon pusztítást és sanyargatást hozott. **II. Rudolf** kormányzata a protestánsok ellen lépett fel: elvette templomaikat, és vagyonelkobzással sújtotta a Habsburg-ellenes főnemeseket. 1604-ben a király egyoldalúan kiegészítette az országgyűlési törvényeket is. **Bocskai István** erdélyi nemes, korábban Habsburg-barát volt, de birtokát el akarták kobozni, ezért a **hajdúk** (volt marhahajcsárok és katonák) élére állt.',
        },
        {
          kind: 'text',
          text: 'A hajdúk győztek a Habsburg-seregek ellen, és az oszmánok is támogatták Bocskait (a szultán koronát küldött neki, de ő nem fogadta el királyként). 1605-ben a **szerencsi országgyűlés** fejedelemmé választotta. A hajdúkat kollektív **nemességgel** és földdel jutalmazta: ez a **hajdúszabadság**, a Hajdúkerület alapja.',
        },
        {
          kind: 'keypoints',
          title: 'A bécsi béke (1606)',
          items: [
            'a **vallásszabadság** biztosítása (a nemesek és szabad királyi városok számára)',
            'a rendi alkotmány és a nádor országgyűlési választásának helyreállítása',
            'Erdély Bocskai és örökösei kezén marad (a fejedelemség elismerése)',
            'idegen tisztviselők kizárása a magyar hivatalokból',
          ],
        },
        {
          kind: 'text',
          text: 'Ezt a rendi vívmányt a Habsburgok később sem tudták teljesen visszavonni. Bocskai 1606 végén meghalt; ugyanebben az évben a **zsitvatoroki békében** a Habsburgok és az oszmánok is megegyeztek.',
        },
        { kind: 'heading', text: 'Bethlen Gábor és a harmincéves háború' },
        {
          kind: 'text',
          text: '**Bethlen Gábor** 1613-ban lett erdélyi fejedelem, uralma a fejedelemség fénykora volt. Gazdaságpolitikájában a fejedelmi **monopóliumokra** és külföldi mesterek betelepítésére támaszkodott; Gyulafehérváron kollégiumot alapított. A külpolitikában a **protestáns szövetséget** támogatta.',
        },
        {
          kind: 'text',
          text: '1618-ban **Prágában** kitört a **harmincéves háború**: a cseh protestáns rendek a Habsburgok (II. Ferdinánd) ellen lázadtak. Bethlen 1619-ben csatlakozott: elfoglalta **Kassát** és **Pozsonyt**, és Bécset is veszélyeztette. 1620-ban a besztercebányai országgyűlés királlyá választotta, de nem koronáztatta meg magát. **1621-ben a nikolsburgi békében** II. Ferdinánd megerősítette a bécsi béke rendelkezéseit, és Bethlen **hét vármegyét** kapott (életére). Bethlen később még két hadjáratot vezetett a Habsburgok ellen (1623–24, 1626), de nagy áttörést nem ért el.',
        },
        {
          kind: 'compare',
          title: 'Bocskai és Bethlen',
          columns: ['Bocskai István', 'Bethlen Gábor'],
          rows: [
            {
              label: 'Cél',
              cells: [
                'a rendi alkotmány és a vallásszabadság védelme',
                'protestáns szövetség, a Habsburgok gyengítése, Erdély megerősítése',
              ],
            },
            {
              label: 'Támasz',
              cells: [
                'hajdúk, a rendek, az oszmánok',
                'a harmincéves háború protestáns szövetségesei, az oszmánok',
              ],
            },
            {
              label: 'Eredmény',
              cells: ['bécsi béke (1606)', 'nikolsburgi béke (1621), hét vármegye'],
            },
          ],
        },
        {
          kind: 'text',
          text: '**I. Rákóczi György** (1630–1648) 1644–45-ben a svédek oldalán támadta a Habsburgokat, és az 1645-ös linzi békében a protestánsok jogainak megerősítését érte el. A harmincéves háborút a **vesztfáliai békék** (1648) zárták le.',
        },
        {
          kind: 'warning',
          text: 'A „rendi” és az „abszolutista” szót ne keverd: a **rendi** törekvés a rendek (nemesség, városok) jogainak védelme, az **abszolutista** az uralkodó korlátlan hatalmának növelése. A Habsburgok abszolutizmusa ellen küzdöttek a rendek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: Bocskai kiáltványa vagy a bécsi béke részlete; mi volt a felkelés oka és célja?',
            'Emelt esszé: a 17. század rendi–abszolutista konfliktusai (Bocskai, Bethlen, Rákóczi).',
            'Évszám–esemény páros: 1606 bécsi béke, 1613–1629 Bethlen, 1648 vesztfáliai békék.',
          ],
        },
        {
          kind: 'tip',
          text: 'Esszében használd a szempontokat: **okok** (vallásüldözés, adóterhek), **résztvevők**, **eredmény** (béke), **hosszú távú hatás** (az alkotmányos és vallási jogok megmaradása). Hasonlítsd össze Bocskait és Bethlent is.',
        },
        {
          kind: 'warning',
          text: 'Ne mondd, hogy Bethlen Gábor „király” volt: bár a besztercebányai országgyűlés megválasztotta, nem koronáztatta meg magát és nem használta a címet.',
        },
      ],
      topicMatch: ['bocskai', 'magyarország 16–17. század'],
      quiz: [
        {
          question: 'Ki vezette a hajdúkat a Habsburgok ellen 1604-ben?',
          options: ['Bethlen Gábor', 'Fráter György', 'I. Rákóczi György', 'Bocskai István'],
          answer: 3,
          explanation: 'Bocskai István; Bethlen csak 1613-tól fejedelem.',
        },
        {
          question: 'Melyik békében biztosították a vallásszabadságot 1606-ban?',
          options: ['bécsi béke', 'drinápolyi béke', 'vasvári béke', 'nikolsburgi béke'],
          answer: 0,
          explanation:
            'Az 1606-os bécsi béke a protestáns vallásgyakorlás szabadságát is rögzítette.',
        },
        {
          question: 'Mikor kapcsolódott be Bethlen Gábor a harmincéves háborúba?',
          options: ['1604-ben', '1619-ben', '1648-ban', '1664-ben'],
          answer: 1,
          explanation:
            'A háború 1618-ban tört ki, Bethlen 1619-ben csatlakozott a protestáns oldalon.',
        },
        {
          question: 'Mit kapott Bethlen a nikolsburgi békében (1621)?',
          options: [
            'A magyar királyi címet.',
            'Hét vármegyét az országban.',
            'Buda visszaadását.',
            'A Habsburg-családi címet.',
          ],
          answer: 1,
          explanation: 'II. Ferdinánd Bethlennek hét vármegyét engedett át élete végéig.',
        },
        {
          question: 'Mit jelent a hajdúszabadság?',
          options: [
            'A hajdúk adómentességet és kollektív nemességet kaptak.',
            'A hajdúk szabadon vándorolhattak.',
            'A hajdúk katonai szolgálat alól mentesültek.',
            'A hajdúk saját királyt választhattak.',
          ],
          answer: 0,
          explanation:
            'Bocskai kollektív nemességgel és földdel jutalmazta a hajdúkat (Hajdúkerület).',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Bocskai István', url: wiki('Bocskai István') },
        { label: 'Wikipédia: Bethlen Gábor', url: wiki('Bethlen Gábor') },
        { label: 'Wikipédia: Bécsi béke (1606)', url: wiki('Bécsi béke 1606') },
      ],
    },
    {
      id: 'zrinyi-miklos-palyafutasa',
      subject: 'tortenelem',
      unitId: 'torok-kor-erdely',
      title: 'Zrínyi Miklós pályafutása (1620–1664)',
      level: 'emelt',
      requirement: {
        emelt: 'Zrínyi Miklós pályafutása',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Zrínyi Miklós** (1620–1664) költő, hadvezér és politikus, horvát bán (1647-től). A szigetvári hős dédunokája.',
            'A **Szigeti veszedelem** (1651) című eposzban ősei hőstettét énekelte meg, hogy a magyarokat a török elleni harcra buzdítsa.',
            'Programja: a török kiűzése **állandó, magyar vezetésű hadsereggel**; kritizálta a Habsburg-vezetést.',
            '**1664 elején** téli hadjárata során Eszék hídját felégette. **1664. augusztus** a szentgotthárdi csatában Montecuccoli győzött, de a **vasvári béke** a törökök helyzetét megerősítette.',
            'Zrínyi 1664 novemberében vadászbalesetben halt meg.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1620', text: 'Zrínyi Miklós születése.' },
            { date: '1647', text: 'Horvát bán lesz.' },
            { date: '1651', text: 'A Szigeti veszedelem megjelenése.' },
            { date: '1664. január–február', text: 'Téli hadjárat: Eszék hídjának felégetése.' },
            { date: '1664. augusztus', text: 'Szentgotthárd, vasvári béke.' },
            { date: '1664. november', text: 'Zrínyi halála.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életpálya' },
        {
          kind: 'text',
          text: '**Zrínyi Miklós** horvát–magyar főnemesi családból származott, családja a Dráva–Mura vidékén birtokolt. Műveltsége szokatlanul széles volt (hadtudomány, latin, magyar irodalom). Katonai pályáján a török elleni határvidéki harcokban tűnt ki, és **1647-ben horvát bán** lett. Birtokán, **Csáktornyán** gyűjtötte könyvtárát.',
        },
        {
          kind: 'heading',
          text: 'Költő',
        },
        {
          kind: 'text',
          text: 'Műveit nemcsak a költészet kedvéért írta. A **Szigeti veszedelem** (1651) a Szigetvár ostromát idézi, hogy a magyarokat és a Habsburgokat a török elleni közös harcra ösztönözze. A hős, **Zrínyi Miklós** (a szigetvári hős) az ő dédapja volt. Politikai röpiratában (**Az török ellen való orvosság**) a magyar rendeket **állandó hadsereg** felállítására buzdította, mert szerinte a nemesi felkelés és a Habsburg-hadvezetés nem elég a török kiűzéséhez.',
        },
        { kind: 'heading', text: 'Hadvezér: az 1664-es események' },
        {
          kind: 'text',
          text: '1664 januárjában–februárjában **téli hadjáratot** vezetett a Dél-Dunántúlra: felégette az **eszéki hidat** (amely a török utánpótlás útvonala volt), és elérte Pécset. Ez nagy hatást keltett Nyugat-Európában is. Közben a törökök nagy erővel támadtak, és **1664 augusztusában Szentgotthárdnál** Montecuccoli császári serege győzött. Ám a Habsburgok győzelem ellenére sietve megkötötték a **vasvári békét** (20 évre), a törökök megtarthatták az addig hódított területeket (köztük Érsekújvárt). Ez sok magyar főúrban felháborodást keltett, és hozzájárult a **Wesselényi-összeesküvéshez**.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a két Zrínyit! A **szigetvári hős** (†1566) a dédapa, a **költő és hadvezér** (1620–1664) a dédunoka. A kettő eltérő korszakhoz tartozik.',
        },
        {
          kind: 'text',
          text: 'Zrínyi 1664 novemberében, vadászat közben halt meg (az egyik feltevés szerint vaddisznó ölte meg). A török kiűzése Zrínyi halála után csak az 1680-as években indult meg.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: részlet a Szigeti veszedelemből vagy Az török ellen való orvosságból; mit javasol Zrínyi?',
            'Évszám–esemény: 1664 Zrínyi téli hadjárata, 1664 vasvári béke.',
            'Emelt esszé: Zrínyi Miklós szerepe és programja a 17. század küzdelmeiben.',
          ],
        },
        {
          kind: 'tip',
          text: 'Egy mondatban foglald össze Zrínyi programját: a törököt állandó, magyar hadsereggel lehet kiűzni. A vasvári béke így lesz érthető: a Habsburgok más érdekeket követtek, mint a magyar rendek.',
        },
      ],
      topicMatch: ['zrínyi miklós'],
      quiz: [
        {
          question: 'Melyik Zrínyi-művet írta a szigetvári ostromról?',
          options: ['Vitéz hadnagy', 'Hitel', 'Az török ellen való orvosság', 'Szigeti veszedelem'],
          answer: 3,
          explanation: 'A Szigeti veszedelem (1651) a dédapa szigetvári hőstettét énekli meg.',
        },
        {
          question: 'Melyik évben volt Zrínyi téli hadjárata?',
          options: ['1566', '1606', '1648', '1664'],
          answer: 3,
          explanation: '1664 elején; ugyanezen évben kötötték a vasvári békét is.',
        },
        {
          question: 'Mi volt Zrínyi fő javaslata a török kiűzésére?',
          options: [
            'Szövetség az oszmánokkal.',
            'Állandó magyar hadsereg felállítása.',
            'A nemesi felkelés fenntartása.',
            'A katonák helyett zsoldosok vásárlása külföldről.',
          ],
          answer: 1,
          explanation: 'Szerinte az állandó, magyar vezetésű hadsereg hozhatott eredményt.',
        },
        {
          question: 'Mi volt a vasvári béke következménye?',
          options: [
            'A törököt kiűzték az országból.',
            'A törökök megtartották hódításaikat, ami sok magyart felháborított.',
            'Erdély elveszett a törökök számára.',
            'A magyar rendek elismerték a török fennhatóságot.',
          ],
          answer: 1,
          explanation:
            'A Habsburgok a szentgotthárdi győzelem után sietve békét kötöttek; ez megerősítette a török helyzetét.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Zrínyi Miklós (költő)', url: wiki('Zrínyi Miklós költő 1620') },
        { label: 'Wikipédia: Vasvári béke', url: wiki('Vasvári béke') },
        { label: 'Wikipédia: Szentgotthárdi csata', url: wiki('Szentgotthárdi csata 1664') },
      ],
    },
    {
      id: 'erdelyi-fejedelemseg-allamszervezete',
      subject: 'tortenelem',
      unitId: 'torok-kor-erdely',
      title: 'Az Erdélyi Fejedelemség államszervezete',
      level: 'emelt',
      requirement: {
        emelt: 'Az Erdélyi Fejedelemség államszervezete',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A fejedelemség a keleti országrészből alakult ki: János Zsigmond **1570-es speyeri szerződésben** lemondott a királyi címről és fejedelem lett.',
            'Az államfő a **fejedelem**: a **rendek** (országgyűlés) választották, és az oszmán szultán megerősítette.',
            'Az **országgyűlés** (főurak, vármegyék, székely és szász székek követei) döntött az adókról és a törvényekről; Gyulafehérvár volt a központ.',
            'Erdély az Oszmán Birodalom **adófizető hűbéresének** számított, de belső ügyeiben és vallási kérdésekben önálló volt.',
            'A fejedelmek (Bethlen Gábor, I. Rákóczi György) mégis erősítették a központi hatalmat.',
          ],
        },
        {
          kind: 'map',
          title: 'Az Erdélyi Fejedelemség fontos helyei',
          places: [
            { name: 'Gyulafehérvár', lat: 46.07, lon: 23.57, note: 'fejedelmi székhely' },
            { name: 'Kolozsvár', lat: 46.77, lon: 23.6, note: 'magyar polgárváros' },
            { name: 'Nagyszeben', lat: 45.8, lon: 24.15, note: 'szász központ' },
            { name: 'Brassó', lat: 45.65, lon: 25.6, note: 'szász város' },
            { name: 'Marosvásárhely', lat: 46.54, lon: 24.56, note: 'székelyföldi város' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kialakulás' },
        {
          kind: 'text',
          text: 'Szapolyai halála után Erdély a keleti királyság része volt, kisfia **János Zsigmond** nevében. 1551-ben a Habsburgok rövid időre elfoglalták az országrészt (ekkor ölték meg **Fráter Györgyöt**), de 1556-ban Izabella és fia visszatért. **1570-ben a speyeri szerződésben** János Zsigmond lemondott a magyar királyi címről, és Erdély, illetve a **Partium** fejedelme lett; elismerte a Habsburg-király címét, de függetlenségét megtartotta.',
        },
        { kind: 'heading', text: 'A fejedelem és az országgyűlés' },
        {
          kind: 'text',
          text: 'Az Erdélyi Fejedelemség **rendi állam** volt, de erős fejedelmi hatalommal. A **fejedelmet** az **országgyűlés** választotta, és az **oszmán szultán megerősítette** (megerősítés és évi adó fejében). Báthory István (1571–1576), Bocskai, Bethlen Gábor és I. Rákóczi György voltak a legfontosabb fejedelmek. A fejedelem irányította a külpolitikát és a hadsereget, kinevezte a főtisztviselőket, és maga is nagybirtokos volt.',
        },
        {
          kind: 'text',
          text: 'Az **országgyűlés** a három rendi nemzet (magyar nemesség, székelyek, szászok) képviselőiből állt, ülései gyakran Gyulafehérváron, Tordán vagy Kolozsváron voltak. A rendek szavazták meg az adókat és a törvényeket, és ők választották a fejedelmet. A **fejedelmi tanács** a fejedelem mellett működött, a közigazgatás a vármegyékben, a székely és szász székekben folyt.',
        },
        {
          kind: 'compare',
          title: 'Fejedelem és szultán',
          columns: ['Erdély önállósága', 'Oszmán függés'],
          rows: [
            {
              label: 'Belügyek',
              cells: ['a fejedelem és az országgyűlés dönt', 'a szultán nem avatkozik be'],
            },
            { label: 'Adó', cells: ['a rendek megszavazzák', 'évi adót fizetnek a szultánnak'] },
            { label: 'Fejedelem', cells: ['a rendek választják', 'a szultán megerősíti'] },
            {
              label: 'Külpolitika',
              cells: ['a fejedelem irányítja', 'oszmán érdekeket nem sérthet'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A fejedelmek különösen Bethlen Gábor idejében erősítették hatalmukat: **monopóliumokat** vezettek be (kereskedelem, bányák), saját jövedelmeket szereztek, és külföldi zsoldosokra is támaszkodtak. A törvények gyűjteménye, az **Approbatae Constitutiones** (1653) rögzítette a jogrendet és a vallási helyzetet.',
        },
        {
          kind: 'warning',
          text: 'Az Erdélyi Fejedelemség nem volt „független állam” a mai értelemben: a szultán hűbérese volt, adót fizetett, és a fejedelmet meg kellett erősíttetni. Ugyanakkor a **belső önállóság** jelentős volt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A fejedelemség területe (Erdély, a **Partium**, időnként több felső-magyarországi vármegye) a 17. század közepéig változott. **II. Rákóczi György** 1657-es lengyelországi hadjáratát a törökök megtorolták, és a fejedelemség ereje megtört; a 17. század végén Erdély Habsburg-uralom alá került.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábra: az államszervezet bemutatása (fejedelem, országgyűlés, rendek, szultán).',
            'Forrás: fejedelmi választás vagy országgyűlési határozat; mit mutat a hatalom megosztásáról?',
            'Emelt esszé: az Erdélyi Fejedelemség helye a három országrész között.',
          ],
        },
        {
          kind: 'tip',
          text: 'A hatalmi viszonyokat három kérdéssel tudod áttekinteni: ki választja a fejedelmet, ki dönt az adókról, kinek fizet adót az ország. Így az „önállóság és függés” egyszerre érthető.',
        },
      ],
      topicMatch: ['erdélyi fejedelemség'],
      quiz: [
        {
          question: 'Ki választotta az erdélyi fejedelmet?',
          options: ['a szultán egyedül', 'az országgyűlés', 'a Habsburg-uralkodó', 'a pápa'],
          answer: 1,
          explanation: 'Az országgyűlés választotta, a szultán pedig megerősítette.',
        },
        {
          question: 'Hol volt a fejedelemség központja?',
          options: ['Pozsony', 'Buda', 'Gyulafehérvár', 'Debrecen'],
          answer: 2,
          explanation: 'Gyulafehérvár volt a fejedelmi székhely.',
        },
        {
          question: 'Mit tartalmazott az 1570-es speyeri szerződés?',
          options: [
            'János Zsigmond lemondott a magyar királyi címről és fejedelem lett.',
            'Erdély a Habsburgokhoz csatlakozott.',
            'A tordai vallásszabadságot visszavonták.',
            'Bethlen Gábor elismerte a Habsburg-uralmat.',
          ],
          answer: 0,
          explanation:
            'János Zsigmond 1570-ben Erdély és a Partium fejedelme lett, és elismerte a Habsburg-királyt.',
        },
        {
          question: 'Milyen kapcsolat fűzte Erdélyt az Oszmán Birodalomhoz?',
          options: [
            'Teljes beolvadás.',
            'Hűbéri viszony: adófizetés és a fejedelem megerősítése.',
            'Katonai szövetség egyenlő felekkel.',
            'Semmilyen kapcsolat nem volt.',
          ],
          answer: 1,
          explanation: 'Erdély a szultán adózó hűbérese volt, de belügyeiben önálló.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Erdélyi Fejedelemség', url: wiki('Erdélyi Fejedelemség') },
        { label: 'Wikipédia: Speyeri szerződés', url: wiki('Speyeri szerződés 1570') },
        {
          label: 'Wikipédia: Erdélyi fejedelmek listája',
          url: wiki('Erdély fejedelmeinek listája'),
        },
      ],
    },
  ],
};

export default unit;
