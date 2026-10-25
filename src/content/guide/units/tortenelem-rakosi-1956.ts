import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 6.3 (A kommunista diktatúra kiépítése és működése) and 6.4 (Az 1956-os forradalom és szabadságharc). */
const unit: GuideUnit = {
  id: 'rakosi-1956',
  subject: 'tortenelem',
  order: 60,
  title: 'A Rákosi-diktatúra és az 1956-os forradalom és szabadságharc',
  requirementRef: '6.3–6.4',
  intro:
    'A kommunisták hatalomra jutása, a Rákosi-diktatúra működése, majd az 1956-os forradalom és szabadságharc, leverése és a megtorlás.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (6. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'államosítás',
        'Magyar Kommunista Párt',
        'Független Kisgazdapárt',
        'Magyar Dolgozók Pártja',
        'népköztársaság',
        'pártállam',
        'internálás',
        'Államvédelmi Hatóság (ÁVH)',
        'tanácsrendszer',
        'beszolgáltatás',
        'aranycsapat',
        'úttörő',
        'termelőszövetkezet',
        'MEFESZ',
        'pesti srácok',
        'Molotov-koktél',
        'munkástanács',
        'sortüzek',
        'földosztás',
        'szalámitaktika',
      ],
      emelt: [
        'Szövetséges Ellenőrző Bizottság (SZEB)',
        'B-listázás',
        'népfront',
        'munkaverseny',
        'forradalmi bizottságok',
      ],
    },
    people: {
      kozep: [
        'Hruscsov',
        'Mindszenty József',
        'Rákosi Mátyás',
        'Rajk László',
        'Gerő Ernő',
        'Maléter Pál',
        'Nagy Imre',
        'Iván Kovács László',
        'Pongrátz Gergely',
        'Kádár János',
        'Tildy Zoltán',
        'Kovács Béla',
      ],
      emelt: ['Nagy Ferenc', 'Péter Gábor', 'Szabó János', 'Mansfeld Péter'],
    },
    dates: {
      kozep: [
        '1945 szovjet megszállás',
        '1948 MDP megalakulása',
        '1948–1956 a Rákosi-diktatúra',
        '1949 kommunista alkotmány',
        '1956. október 23. a forradalom kitörése',
        '1956. október 25. a Kossuth téri sortűz',
        '1956. november 4. a szovjet támadás',
        '1958 Nagy Imre és társainak kivégzése',
        '1945 választás Magyarországon, földosztás',
        '1947 kékcédulás választások',
      ],
      emelt: [
        '1946 a svábok kitelepítésének kezdete, 1946 a forint bevezetése, a köztársaság kikiáltása',
        '1953 Sztálin halála',
        '1953–55 Nagy Imre első kormánya',
        '1956 az SZKP XX. kongresszusa, lengyel munkásfelkelés, 1956 szuezi válság',
        '1956. október 28. a forradalom győzelme',
      ],
    },
    places: {
      kozep: [
        'Sztálinváros (Dunaújváros)',
        'Recsk',
        'Hortobágy',
        'Kossuth tér és Corvin köz (Budapest)',
        'Mosonmagyaróvár',
        'Salgótarján',
      ],
      emelt: [],
    },
  },
  pages: [
    {
      id: 'rakosi-partallam-terror',
      subject: 'tortenelem',
      unitId: 'rakosi-1956',
      title: 'A Rákosi-diktatúra: pártállam, terror, koncepciós perek',
      level: 'kozep',
      requirement: {
        kozep: 'A Rákosi-diktatúra: a pártállam, a terror, egyházüldözés, koncepciós perek',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **Rákosi-diktatúra** 1948–1956 között a Szovjetunió mintájára épült egypárti **pártállam** volt.',
            '1948-ban a kommunisták és a szociáldemokraták egyesültek: megalakult a **Magyar Dolgozók Pártja** (MDP), vezetője **Rákosi Mátyás**.',
            '**1949-ben** a kommunista alkotmány kikiáltotta a **Magyar Népköztársaságot**: a vezető szerep a párté lett, a hatalmi ágak szétválasztása megszűnt.',
            'A hatalom fő eszköze a **terror** volt: az **ÁVH**, az **internálás**, a kitelepítések és a **koncepciós perek** (Rajk-per, Mindszenty-per).',
            'Az **egyházakat** üldözték: a püspököket bebörtönözték, a szerzetesrendeket feloszlatták, az egyházi iskolákat államosították.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'pártállam',
              text: 'Olyan rendszer, ahol egyetlen párt (itt az MDP) irányít mindent, az állami szervek csak végrehajtják a párt döntéseit.',
            },
            {
              term: 'népköztársaság',
              text: 'A szovjet típusú államforma neve; a hatalom nevében „a dolgozó népé”, valójában a párté.',
            },
            {
              term: 'Államvédelmi Hatóság (ÁVH)',
              text: 'A politikai rendőrség: megfigyelés, letartóztatás, kínvallatás; a diktatúra legfőbb terroreszköze.',
            },
            {
              term: 'internálás',
              text: 'Bírósági ítélet nélküli fogva tartás, munkatáborban is (például Recsk).',
            },
            {
              term: 'koncepciós per',
              text: 'Előre eldöntött ítéletű, kitalált vádakra épülő politikai per; a vádlottakat kínzással kényszerítették vallomásra.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A pártállam felépítése' },
        {
          kind: 'text',
          text: 'A kommunisták 1948–49 fordulójára minden hatalmi pozíciót megszereztek. A **hadsereget, a rendőrséget és a bíróságokat** a párt irányította, a többi pártot megszüntették vagy bábpárttá tették, a **Magyar Függetlenségi Népfront** egylistás választásokon szerepelt. Az **1949-es alkotmány** a Szovjetunió 1936-os alkotmányának mintájára készült: kimondta a „dolgozó nép” hatalmát, de a valóságban a párt döntött mindenről. A helyi igazgatást az **1950-es tanácsrendszer** vette át: a szovjet példát követve a **tanácsok** a vármegyék és a régi önkormányzatok helyére léptek, és a pártszervek alá voltak rendelve.',
        },
        {
          kind: 'text',
          text: 'Rákosi Mátyás a „népi demokrácia” vezére volt, akit személyi kultusz vett körül („a nép bölcs vezére”, „Sztálin legjobb magyar tanítványa”). A főtitkár mellett a hatalmi csúcs a „kis Sztálinok” köre volt: **Gerő Ernő** (gazdaság), Farkas Mihály (hadsereg) és Révai József (kultúra) is ide tartozott.',
        },
        { kind: 'heading', text: 'A terror eszközei' },
        {
          kind: 'keypoints',
          items: [
            '**ÁVH**: a politikai rendőrség (ÁVO, 1950-től ÁVH) besúgók hálózatával, házkutatásokkal, éjszakai elhurcolásokkal és kínzásokkal működött.',
            '**Internálás és munkatáborok**: bírói ítélet nélkül vittek embereket kényszermunkára; ilyen volt a **recski tábor** (1950–1953) kőbányában.',
            '**Kitelepítések**: 1951-ben a fővárosból és más városokból az „osztályidegennek” bélyegzett családokat (volt földbirtokosok, arisztokraták, tisztviselők) vidékre, többek között a **Hortobágyra** kényszerítették.',
            '**Koncepciós perek**: a párt a vezetőkön belüli ellenfeleket és az ellenállást is így számolta fel.',
          ],
        },
        {
          kind: 'text',
          text: 'A **Rajk-per** (1949): **Rajk László** korábbi belügyminiszter és társai ellen koholt vádakat gyártottak (kémkedés, összeesküvés Tito jugoszláv vezetővel, akit a Szovjetunió ekkor „árulónak” bélyegzett). Rajkot kivégezték (1949. október 15.). A per üzenete: a pártvezetésen belül sem biztonságos senki.',
        },
        {
          kind: 'text',
          text: 'A **Mindszenty-per** (1949. február): **Mindszenty József** hercegprímást 1948. december 26-án letartóztatták, majd összeesküvés és devizaüzérkedés vádjával életfogytiglan elítélték. Mindszenty a diktatúrával szembeni egyházi ellenállás jelképe lett.',
        },
        {
          kind: 'people',
          emelt: true,
          items: [
            {
              name: 'Péter Gábor',
              text: 'az ÁVO, majd ÁVH vezetője a Rákosi-korszakban.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'Az egyházak üldözése' },
        {
          kind: 'text',
          text: '1948-ban **államosították az egyházi iskolákat** (az iskolák többsége felekezeti volt), 1950-ben feloszlatták a szerzetesrendeket, a szerzeteseket szétszórták vagy internálták. Az egyházi vezetőket az állami Egyházügyi Hivatal ellenőrizte, a püspököknek az államnak kellett hűségesküt tenniük. A vallásos gyakorlás veszélyessé vált.',
        },
        {
          kind: 'compare',
          title: 'Rendszer a névleges alkotmány szerint és a valóságban',
          columns: ['Az 1949-es alkotmány szerint', 'A valóságban'],
          rows: [
            { label: 'Hatalom', cells: ['a dolgozó népé', 'a párt (MDP) szűk vezetőségéé'] },
            { label: 'Választás', cells: ['titkos, népfrontos', 'egylistás, előre eldöntött'] },
            {
              label: 'Jogvédelem',
              cells: ['törvény előtti egyenlőség', 'ÁVH, internálás, koncepciós perek'],
            },
            {
              label: 'Vallásszabadság',
              cells: ['biztosított', 'egyházüldözés, államosított iskolák'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A Rákosi-féle terror kiterjedt a párton belülre is: a „szovjet típusú” rendszer lényegéhez tartozott, hogy időről időre ellenséget keresett. 1949 után a legtöbb koncepciós perben korábbi kommunista vezetők, katonatisztek és szociáldemokraták is a vádlottak padjára kerültek. A perek egyszerre szolgáltak a belső ellenfelek eltávolítására és a félelemkeltésre.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (alkotmányrészlet, per jegyzőkönyve, plakát): mit mutat a diktatúra működéséről?',
            'Fogalmak azonosítása leírásból (ÁVH, internálás, koncepciós per, pártállam).',
            'Esszé: a Rákosi-diktatúra jellemzői: a terror eszközei és a pártállam felépítése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Rákosi-diktatúrát (1948–1956) és a Kádár-rendszert (1956–1989) összekeverni. A nyílt, tömeges terror, a koncepciós perek, a kitelepítések és az egyházüldözés a Rákosi-korszakra jellemzők.',
        },
        {
          kind: 'tip',
          text: 'Esszében csoportosítsd az eszközöket: **politikai** (egypárti rendszer, alkotmány), **terror** (ÁVH, perek, internálás, kitelepítés), **ideológiai** (kultusz, propaganda, egyházüldözés). Egy konkrét példa (Rajk-per vagy Mindszenty-per) bizonyítja az állítást.',
        },
      ],
      topicMatch: ['rákosi-diktatúra', 'rákosi-korszak', 'sztálini diktatúra'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question:
            'Melyik párt neve lett 1948-ban a kommunisták és a szociáldemokraták egyesülése után?',
          options: [
            'Magyar Szocialista Munkáspárt',
            'Magyar Dolgozók Pártja',
            'Független Kisgazdapárt',
            'Magyar Kommunista Párt',
          ],
          answer: 1,
          explanation:
            'A Magyar Dolgozók Pártja (MDP) 1948-ban jött létre. Az MSZMP 1956 novemberében alakult, az MKP az egyesülés előtti kommunista párt volt.',
        },
        {
          question: 'Mi volt az ÁVH?',
          options: [
            'A Rákosi-diktatúra politikai rendőrsége.',
            'Az állami egyházügyi hivatal.',
            'A szovjet hadsereg magyarországi parancsnoksága.',
            'A kommunista ifjúsági szervezet.',
          ],
          answer: 0,
          explanation:
            'Az Államvédelmi Hatóság a politikai terror eszköze volt: megfigyelés, letartóztatás, kínvallatás.',
        },
        {
          question:
            'Ki ellen indult a koholt vádakra épülő koncepciós per 1949-ben, és mi lett a vége?',
          options: [
            'Mindszenty József, kivégezték.',
            'Rajk László, kivégezték.',
            'Nagy Imre, életfogytiglant kapott.',
            'Gerő Ernő, kivégezték.',
          ],
          answer: 1,
          explanation:
            'Rajk Lászlót, a volt belügyminisztert kivégezték (1949. október 15.). Mindszentyt életfogytiglanra ítélték, Nagy Imrét 1958-ban végezték ki.',
        },
        {
          question: 'Mit jelentett az internálás?',
          options: [
            'A törvényhozás átmeneti felfüggesztését.',
            'Az államosított üzem munkásainak áthelyezését.',
            'Bírósági ítélet nélküli fogva tartást, gyakran munkatáborban.',
            'A külföldre költözés tilalmát.',
          ],
          answer: 2,
          explanation:
            'Az internáltakat per nélkül, adminisztratív döntéssel tartották fogva, például Recsken.',
        },
        {
          question: 'Mi volt az 1950-es tanácsrendszer lényege?',
          options: [
            'A vármegyék és régi önkormányzatok helyére lépő, a pártnak alárendelt szovjet típusú helyi hatalom.',
            'A munkások üzemi önigazgatása.',
            'A parasztok szövetkezeti irányítása.',
            'A szakszervezetek vezető szerepe a gazdaságban.',
          ],
          answer: 0,
          explanation:
            'A tanácsok a szovjet mintára épültek, és a pártszervek irányítása alatt álltak.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Rákosi-korszak', url: wiki('Rákosi-korszak') },
        { label: 'Wikipédia: Rajk-per', url: wiki('Rajk-per') },
        { label: 'Wikipédia: Mindszenty József', url: wiki('Mindszenty József') },
      ],
    },
    {
      id: 'rakosi-gazdasag-mindennapok',
      subject: 'tortenelem',
      unitId: 'rakosi-1956',
      title: 'Államosítás, kollektivizálás, propaganda és mindennapok',
      level: 'kozep',
      requirement: {
        kozep:
          'államosítás és kollektivizálás, erőltetett iparosítás, propaganda és mindennapok a diktatúra idején',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A kommunisták a gazdaságot is a szovjet minta szerint építették át: **államosítás** (bankok, nagyipar, kisipar), **tervgazdaság** (ötéves tervek).',
            'Az **erőltetett iparosítás** a nehéz- és hadiparra épült; jelképe **Sztálinváros** (a mai Dunaújváros) volt, amely a semmiből épült.',
            'A mezőgazdaságban **kollektivizálás** folyt: a parasztokat termelőszövetkezetekbe kényszerítették, a gazdáktól **beszolgáltatást** követeltek.',
            'Az életszínvonal csökkent, **hiánygazdaság** alakult ki.',
            'A **propaganda** és a személyi kultusz az élet minden területére kiterjedt: iskola, sajtó, ünnepek, **úttörő**mozgalom.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'államosítás',
              text: 'A magán tulajdon (bankok, gyárak, üzletek) állami tulajdonba vétele.',
            },
            {
              term: 'beszolgáltatás',
              text: 'A parasztok kötelesek termékeik meghatározott részét alacsony áron átadni az államnak.',
            },
            {
              term: 'termelőszövetkezet',
              text: 'A földek, eszközök közös gazdálkodásba vonása a kollektivizálás során; a magángazdaság megszüntetése volt a cél.',
            },
            {
              term: 'úttörő',
              text: 'A gyerekek kommunista szellemű tömegszervezete: egyenruha, ünnepségek, politikai nevelés.',
            },
            {
              term: 'aranycsapat',
              text: 'A magyar labdarúgó-válogatott (1952-es olimpiai bajnok; 1953-ban 6–3-ra legyőzte Angliát a Wembleyben), a korszak népszerű sikere.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Államosítás és tervgazdaság' },
        {
          kind: 'text',
          text: 'A bankokat 1947–48-ban, a 100 főnél többet foglalkoztató nagyüzemeket **1948-ban** vette állami kézbe a hatalom, később a kisipart és a kereskedelmet is felszámolta vagy szövetkezetekbe kényszerítette. A gazdaságot **tervutasításos** rendszerben irányították: az **ötéves terv** (1950-től, a szovjet minta szerint) mennyiségi mutatókat írt elő. A vállalatok a hatalmi irányítástól függtek, a piac nem működött.',
        },
        {
          kind: 'text',
          text: 'A hatalom **munkaversennyel** (a szovjet sztahanovizmus mintájára) hajtotta a dolgozókat: a normák folyamatosan nőttek, a kiemelkedő teljesítményt a propaganda példaképként állította elé.',
          emelt: true,
        },
        { kind: 'heading', text: 'Erőltetett iparosítás' },
        {
          kind: 'text',
          text: 'Rákosi Magyarországot „a vas és acél országává” akarta tenni. Az ötéves terv a **nehézipart** (vas- és acélgyártás, gépgyártás, bányászat) és a hadiipart részesítette előnyben, a könnyűipar, a fogyasztási cikkek és a lakásépítés háttérbe szorult. A terv irreális célokat tűzött ki, nyersanyagokban szegény országot sújtott. Szimbóluma **Sztálinváros** (1950-ben kezdték építeni a Dunai Vasmű köré; 1961-től **Dunaújváros**).',
        },
        { kind: 'heading', text: 'Kollektivizálás és beszolgáltatás' },
        {
          kind: 'text',
          text: 'Az 1945-ös földosztás után kisparaszti birtokok alakultak ki; a párt ezeket szovjet mintájú közös gazdálkodásra akarta cserélni. A parasztoktól **kötelező beszolgáltatást** követeltek: a terméket az állam olcsón vásárolta fel, aki nem teljesített, azt megbüntették. A gazdagabb parasztot **kuláknak** bélyegezték, és a „kuláklistára” kerülőt zaklatták, vagyonát elvették. Sokan beléptek a **termelőszövetkezetekbe**, mások a földet elhagyva a városba, az iparba menekültek.',
        },
        {
          kind: 'text',
          text: '1953-ban a hatalomváltás után a szövetkezetekből ki lehetett lépni, sokan ki is léptek, de a kollektivizálás a Kádár-korszakban folytatódott.',
        },
        { kind: 'heading', text: 'Propaganda, kultúra, mindennapok' },
        {
          kind: 'text',
          text: 'Az oktatás és a kultúra a párt eszköze lett: iskolai tananyag, filmek, irodalom a **szocialista realizmus** szerint készültek, a **Szabad Nép** és a rádió a pártot szolgálta. Az ünnepek (május 1., november 7.) és a tömegfelvonulások a hatalom erejét mutatták be, a **Rákosi-kultusz** pedig mindent átszőtt. A gyerekeket **úttörő**ként, a fiatalokat a DISZ-ben nevelték.',
        },
        {
          kind: 'text',
          text: 'A mindennapokat a **hiány**, a hosszú sorbanállás, a lakáshiány és a félelem jellemezte. A beszélgetések, viccek, a külföldi rádió hallgatása is veszélyes lehetett. Az életszínvonal romlott, hiszen az ipari beruházások elvonták a forrásokat a fogyasztástól. A diktatúra ugyanakkor biztosított munkát, ingyenes iskolát és társadalmi felemelkedési lehetőséget a munkás- és parasztszármazású fiataloknak, és a sporttal (**aranycsapat**) is büszkeséget adott.',
        },
        {
          kind: 'map',
          title: 'A Rákosi-korszak helyszínei',
          places: [
            {
              name: 'Sztálinváros (Dunaújváros)',
              lat: 46.96,
              lon: 18.94,
              note: 'erőltetett iparosítás jelképe',
            },
            { name: 'Recsk', lat: 47.93, lon: 20.1, note: 'kényszermunkatábor' },
            { name: 'Hortobágy', lat: 47.58, lon: 21.15, note: 'kitelepítettek, internálótáborok' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Plakát, fénykép, gazdasági adatok (iparosítás, termelőszövetkezeti arány): mit mutat a gazdaságpolitikáról?',
            'Fogalmak: beszolgáltatás, termelőszövetkezet, államosítás, tervgazdaság.',
            'Esszé: a gazdaság átalakítása és annak társadalmi következményei a Rákosi-korszakban.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd a földosztást (1945, a földbirtokosok földjét kapják a parasztok) a kollektivizálással (1948–től, a parasztok földjét közössé teszik). Az első magántulajdont adott, a második elvette.',
        },
        {
          kind: 'tip',
          text: 'Egy jó válasz mindig összeköti az okot és a következményt: a szovjet minta követése → nehézipar-központú terv → a fogyasztási cikkek hiánya, az életszínvonal romlása → elégedetlenség (ez vezet 1956-hoz).',
        },
      ],
      topicMatch: ['gazdaságpolitikája', 'kollektivizálás', 'rákosi'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik város épült a Rákosi-korszak erőltetett iparosításának jelképeként?',
          options: ['Salgótarján', 'Mosonmagyaróvár', 'Sztálinváros', 'Hortobágy'],
          answer: 2,
          explanation:
            'Sztálinvárost a Dunai Vasmű mellett építették; 1961-től Dunaújváros a neve.',
        },
        {
          question: 'Mit jelentett a beszolgáltatás?',
          options: [
            'A gyárak részvényeinek állami átvételét.',
            'A parasztok kötelező terményátadását az államnak, alacsony áron.',
            'A munkások kötelező éjszakai műszakját.',
            'Az egyházi birtokok elvételét.',
          ],
          answer: 1,
          explanation:
            'A beszolgáltatás a kollektivizálás eszköze volt: a parasztoktól olcsón vették el a termést.',
        },
        {
          question: 'Melyik iparágat részesítette előnyben az erőltetett iparosítás?',
          options: ['a könnyűipart', 'a nehéz- és hadiipart', 'a turizmust', 'az élelmiszeripart'],
          answer: 1,
          explanation:
            'A vas- és acélgyártás, gépgyártás, hadiipar fejlesztése volt a cél, a fogyasztási cikkek háttérbe szorultak.',
        },
        {
          question: 'Mi volt az aranycsapat?',
          options: [
            'A kommunista párt legfelsőbb vezetése.',
            'A gazdaság tervezői.',
            'A magyar labdarúgó-válogatott az 1950-es években.',
            'Az úttörőmozgalom országos tanácsa.',
          ],
          answer: 2,
          explanation:
            'Az aranycsapat az 1952-es olimpiai bajnok, 1953-ban Angliát Wembleyben legyőző válogatott.',
        },
        {
          question: 'Mi volt a munkaverseny?',
          options: [
            'A sztahanovizmus mintájú teljesítményhajszolás.',
            'A szakszervezeti választás.',
            'A szabad bértárgyalás.',
            'A termelőszövetkezetek közötti vásár.',
          ],
          answer: 0,
          explanation:
            'A szovjet mintára szervezett verseny a normák folyamatos emelésére szolgált.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Rákosi-korszak gazdaságpolitikája',
          url: wiki('Rákosi-korszak gazdaságpolitikája'),
        },
        {
          label: 'Wikipédia: Kollektivizálás Magyarországon',
          url: wiki('Kollektivizálás Magyarországon'),
        },
        { label: 'Wikipédia: Dunaújváros', url: wiki('Dunaújváros története') },
      ],
    },
    {
      id: 'szovjetizalas-1945-1949',
      subject: 'tortenelem',
      unitId: 'rakosi-1956',
      title: 'A szovjetizálás: a kommunisták térnyerése 1945–1949',
      level: 'emelt',
      requirement: {
        emelt:
          'A szovjetizálás Magyarországon: a kommunisták térnyerése, a korlátozott többpártrendszer, az egypárti diktatúra kiépítése',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '1945-ben a **szovjet megszállás** alatt koalíciós, többpárti rendszer indult (**korlátozott többpártrendszer**): a Szövetséges Ellenőrző Bizottság (SZEB) elnöke szovjet volt.',
            'Az 1945. novemberi szabad választást a **Független Kisgazdapárt** nyerte, de a kommunisták (MKP) kapták a belügyet.',
            'A kommunisták **szalámitaktikával**, lépésről lépésre számolták fel ellenfeleiket: a „reakció” leleplezése, a politikusok félreállítása.',
            '**1947-ben** a **kékcédulás választással** az MKP lett a legnagyobb párt; **1948-ban** a szociáldemokratákkal egyesültek (MDP), **1949-ben** pedig megszületett az egypárti diktatúra.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1945',
              text: 'Szovjet megszállás; földosztás; novemberi nemzetgyűlési választás: a Kisgazdapárt győz.',
            },
            {
              date: '1946',
              text: 'A köztársaság kikiáltása (február 1.), a forint bevezetése, a svábok kitelepítésének kezdete.',
            },
            {
              date: '1947',
              text: 'Kovács Béla letartóztatása, Nagy Ferenc lemondatása; kékcédulás választás (augusztus 31.).',
            },
            {
              date: '1948',
              text: 'Az MKP és az SZDP egyesül: MDP; államosítás, Mindszenty letartóztatása (december).',
            },
            {
              date: '1949',
              text: 'Egylistás választás, kommunista alkotmány (augusztus 20.), Rajk-per.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kiindulópont: megszállt ország, koalíciós kormány (1944–46)' },
        {
          kind: 'text',
          text: 'A Szovjetunió 1944–45-ben elfoglalta Magyarországot, és ez döntő hatalmi tényező maradt. Az 1945. januári fegyverszüneti egyezmény alapján a **Szövetséges Ellenőrző Bizottság (SZEB)** felügyelte az országot, elnöke a szovjet **Vorosilov** marsall volt, ezért a SZEB lényegében a szovjet érdekeket érvényesítette. A koalíciós kormányban a Független Kisgazdapárt (FKgP), az MKP, a Szociáldemokrata Párt (SZDP) és a Nemzeti Parasztpárt ültek.',
        },
        {
          kind: 'text',
          text: '1945 márciusában a földreform (**földosztás**) a nagybirtok földjét a parasztoknak adta: ez a kommunisták számára népszerűséget hozott. **1945. november 4-én** tartották az első szabad nemzetgyűlési választást: a Kisgazdapárt kb. 57%-ot kapott, a kommunisták és a szociáldemokraták 17–17%-ot. A szovjet nyomás miatt azonban az MKP kapta a **belügyminisztériumot** (először Nagy Imre, 1946-tól Rajk László), így a rendőrséget is.',
        },
        {
          kind: 'text',
          text: '**1946. február 1-jén** kikiáltották a **köztársaságot** (köztársasági elnök **Tildy Zoltán**, miniszterelnök **Nagy Ferenc**). 1946 nyarán a **forint** bevezetésével megszűnt a példátlan méretű hiperinfláció, és stabilizálódott a gazdaság. A szövetségesek döntése alapján 1946-tól megindult a **svábok** (magyarországi németek) kitelepítése Németországba.',
        },
        { kind: 'heading', text: 'A szalámitaktika (1946–47)' },
        {
          kind: 'text',
          text: '**Rákosi Mátyás** kommunista pártvezér szerint a politikai ellenfeleket úgy kell eltávolítani, mint a szalámit: szeletenként. A taktika lépései: a baloldali **blokk** (1946) létrehozása, a Kisgazdapárt jobbszárnyának kizárása, a „fasiszta összeesküvés” leleplezése. 1947-ben a szovjet hatóságok letartóztatták a kisgazda főtitkárt, **Kovács Bélát**, és elhurcolták a Szovjetunióba; **Nagy Ferenc** miniszterelnök külföldön tartózkodva, családja fenyegetésére lemondott, és nem tért haza. A **B-listázás** (köztisztviselők elbocsátása politikai szempontok szerint) a közigazgatásból távolította el az ellenfeleket.',
        },
        {
          kind: 'text',
          text: 'A párizsi béke (1947) után a szovjet csapatok maradhattak az országban (az ausztriai megszállás biztosítására). **1947. augusztus 31-én** a kommunisták választási csalással („**kékcédulás**” szavazás: kék igazolásokkal tömegesen, jogosulatlanul szavaztak) elérték, hogy az MKP lett a legnagyobb párt (kb. 22%).',
        },
        { kind: 'heading', text: 'A pártállam kialakulása (1948–49)' },
        {
          kind: 'keypoints',
          items: [
            '**1948 nyara**: a Szociáldemokrata Pártot beolvasztották az MKP-ba; megalakult a **Magyar Dolgozók Pártja (MDP)**.',
            'A többi párt kiszorítása vagy átalakítása; a **népfront** (Magyar Függetlenségi Népfront) mint bábkeret.',
            '**1949. május 15.**: egylistás választás a Népfront listáján; **augusztus 20.**: kommunista alkotmány, megszületik a **Magyar Népköztársaság**.',
            'A hatalom a letartóztatásokkal és a perekkel (Mindszenty, Rajk) lezárta a folyamatot.',
          ],
        },
        {
          kind: 'compare',
          title: 'Hasonlítsd össze a két szakaszt',
          columns: ['1945–1947', '1948–1949'],
          rows: [
            {
              label: 'Pártrendszer',
              cells: ['korlátozott többpártrendszer', 'egypárti diktatúra'],
            },
            {
              label: 'Választás',
              cells: ['szabad (1945), majd csalás (1947)', 'egylistás népfrontos'],
            },
            {
              label: 'A kommunisták módszere',
              cells: ['szalámitaktika, belügyi pozíciók', 'egyesítés, perek, terror'],
            },
            { label: 'Szovjet szerep', cells: ['SZEB, megszállás', 'a szovjet minta átvétele'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Választási eredmények táblázata (1945, 1947, 1949): mit mutatnak a kommunisták térnyeréséről?',
            'Forrás (Rákosi beszéde a szalámitaktikáról, SZEB-dokumentum): mit mutat a szovjet szerepről?',
            'Emelt esszé: hogyan jutottak a kommunisták egyeduralomra 1945–49 között?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a kommunisták a szabad választáson szerezték meg a hatalmat. 1945-ben csak kb. 17%-ot kaptak, a hatalom megszerzése a szovjet támogatás, a belügyi pozíciók, a szalámitaktika és a csalás eredménye volt.',
        },
        {
          kind: 'tip',
          text: 'Tényezők, amelyeket esszében érdemes megnevezni: a szovjet megszállás és a SZEB, a belügyi pozíciók, a szalámitaktika, a választási csalás (1947), a pártok összeolvasztása (1948), az egylistás választás (1949).',
        },
      ],
      topicMatch: ['szovjetizálás', 'egypárti diktatúra', '1944–1949', '1945–1948'],
      quiz: [
        {
          question: 'Melyik párt nyerte az 1945. novemberi nemzetgyűlési választást?',
          options: [
            'Magyar Kommunista Párt',
            'Szociáldemokrata Párt',
            'Független Kisgazdapárt',
            'Nemzeti Parasztpárt',
          ],
          answer: 2,
          explanation: 'A Kisgazdapárt kb. 57%-ot kapott, a kommunisták csak kb. 17%-ot.',
        },
        {
          question: 'Mit jelent a szalámitaktika?',
          options: [
            'A kommunisták ellenfeleik fokozatos, szeletenkénti eltávolítását.',
            'A földosztás kisebb részekre bontását.',
            'A kisgazdák ellenállási módszerét.',
            'A szovjet hadsereg lassú kivonulását.',
          ],
          answer: 0,
          explanation: 'Rákosi hasonlata: az ellenfeleket szeletről szeletre kell eltávolítani.',
        },
        {
          question: 'Mi történt 1947 augusztusában?',
          options: [
            'Köztársaságot kiáltottak ki.',
            'Kékcédulás választás: csalással az MKP lett a legnagyobb párt.',
            'Bevezették a forintot.',
            'Kihirdették a kommunista alkotmányt.',
          ],
          answer: 1,
          explanation:
            'A kékcédulás választás (augusztus 31.) csalás volt; a köztársaság 1946, a forint 1946, az alkotmány 1949.',
        },
        {
          question: 'Ki volt a SZEB elnöke?',
          options: ['Hruscsov', 'Vorosilov', 'Sztálin', 'Molotov'],
          answer: 1,
          explanation:
            'A Szövetséges Ellenőrző Bizottság elnöke Vorosilov szovjet marsall volt, ezért szovjet érdekeket érvényesített.',
        },
        {
          question: 'Mikor jött létre a Magyar Népköztársaság?',
          options: ['1946', '1947', '1948', '1949'],
          answer: 3,
          explanation:
            'A kommunista alkotmány 1949. augusztus 20-án kikiáltotta a népköztársaságot.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Szalámitaktika', url: wiki('Szalámitaktika') },
        { label: 'Wikipédia: Kékcédulás választás', url: wiki('Kékcédulás választás') },
        {
          label: 'Wikipédia: Szövetséges Ellenőrző Bizottság',
          url: wiki('Szövetséges Ellenőrző Bizottság'),
        },
      ],
    },
    {
      id: 'forradalom-okai-celjai-politikaja',
      subject: 'tortenelem',
      unitId: 'rakosi-1956',
      title: '1956: okok, célok és a kormánypolitika változásai',
      level: 'kozep',
      requirement: { kozep: 'A forradalom okai és céljai, a kormánypolitika változásai' },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Okok: a **szovjet függés**, a **diktatúra és terror**, a gazdasági nehézségek és a **Sztálin halála** utáni bizonytalanság.',
            '**1953**: Sztálin halála után **Nagy Imre** lett a miniszterelnök, az **„új szakasz”** enyhítette a terrort és a kényszerítő gazdaságpolitikát.',
            '**1955**: Rákosi visszaszerezte a hatalmat, Nagy Imrét eltávolították; **1956** februárjában az SZKP XX. kongresszusán **Hruscsov** leleplezte Sztálin bűneit.',
            '**1956. július**: Rákosit leváltották (utóda **Gerő Ernő**), de a változások lassúak voltak; a Petőfi Kör és az értelmiség nyíltan bírálta a rendszert.',
            'Céljai: a szovjet csapatok kivonása, **Nagy Imre** kormánya, a többpártrendszer, a szabad választás, a szabadságjogok, a nemzeti függetlenség.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1953. március', text: 'Sztálin halála.' },
            { date: '1953. július', text: 'Nagy Imre lesz a miniszterelnök: az „új szakasz”.' },
            {
              date: '1955. április',
              text: 'Nagy Imrét eltávolítják a miniszterelnöki székből (később kizárják a pártból).',
            },
            {
              date: '1956. február',
              text: 'Az SZKP XX. kongresszusa: Hruscsov Sztálin-bírálata.',
              emelt: true,
            },
            { date: '1956. július', text: 'Rákosit leváltják, helyére Gerő Ernő lép.' },
            {
              date: '1956. október 6.',
              text: 'Rajk László újratemetése: százezres nagyságrendű tömeg vesz részt.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A forradalom okai' },
        {
          kind: 'keypoints',
          items: [
            '**Politikai ok**: egypárti diktatúra, a szabadságjogok hiánya, az ÁVH terrorja, a koncepciós perek és kitelepítések.',
            '**Nemzeti ok**: a **szovjet megszállás**, a Szovjetuniótól való függés; a magyar nemzeti jelképek (március 15., Kossuth-címer) háttérbe szorítása.',
            '**Gazdasági ok**: erőltetett iparosítás, életszínvonal-romlás, kötelező beszolgáltatás, hiánygazdaság.',
            '**Nemzetközi kiváltó**: Sztálin halála, a **desztalinizáció** (XX. kongresszus), a lengyelországi változások 1956-ban.',
          ],
        },
        { kind: 'heading', text: 'A kormánypolitika változásai 1953–1956' },
        {
          kind: 'text',
          text: '**1953**: Sztálin halála után a szovjet vezetés Magyarországon is enyhítést kívánt. **Nagy Imre** kormánya (1953–1955) az **új szakasz** politikájával: lassította az iparosítást, engedélyezte a kilépést a termelőszövetkezetekből, megszüntette az internálótáborokat, javította az ellátást, enyhítette a terrort.',
        },
        {
          kind: 'text',
          text: '**1955**: a szovjet fordulat után **Rákosi** és a keményvonalasok visszavették a hatalmat, Nagy Imrét eltávolították a kormányfői posztról, és a pártból is kizárták. A pártvezetés a régi irányba tért vissza, az elégedetlenség nőtt.',
        },
        {
          kind: 'text',
          text: '**1956**: Hruscsov titkos beszéde (február) után a Rákosi-vezetés is gyengült. A **Petőfi Kör** (értelmiségi vitaklub, 1956 tavaszától) nyílt viták színtere lett (sajtóvita: június 27.), egyre többen követelték Nagy Imre rehabilitálását. **1956. július 18-án** Rákosit „egészségügyi okból” leváltották (Moszkvába ment), utóda **Gerő Ernő** lett: ez nem hozott lényegi változást. A Rajk-per áldozatainak újratemetése (október 6.) tömegtüntetéssé vált a rendszer ellen.',
        },
        { kind: 'heading', text: 'A forradalom céljai' },
        {
          kind: 'text',
          text: 'A forradalom követeléseit először az egyetemisták foglalták írásba. Szegeden október 16-án megalakult a **MEFESZ** (Magyar Egyetemisták és Főiskolások Egyesült Szövetsége), s a budapesti műszaki egyetemisták **16 pontja** (október 22.) a következőket tartalmazta többek között: a szovjet csapatok kivonását, Nagy Imre kormányát, szabad titkos választást többpárti alapon, a Rákosi-korszak bűnöseinek felelősségre vonását, a Sztálin-szobor eltávolítását, a sajtó- és szólásszabadságot, a nemzeti ünnepek (március 15.) és a Kossuth-címer visszaállítását.',
        },
        {
          kind: 'people',
          items: [
            { name: 'Rákosi Mátyás', text: 'a diktatúra vezére; 1956 júliusában leváltották.' },
            {
              name: 'Gerő Ernő',
              text: 'Rákosi utóda az MDP élén (1956 július); október 23-án rádióbeszéde elmérgesítette a helyzetet.',
            },
            {
              name: 'Nagy Imre',
              text: 'az „új szakasz” kormányfője 1953–55-ben; a forradalom miniszterelnöke.',
            },
            {
              name: 'Hruscsov',
              text: 'szovjet pártvezér; az SZKP XX. kongresszusán leleplezte Sztálin bűneit.',
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A magyar pártvezetés 1953–56 között is a szovjet vezetéstől függött: Nagy Imre kinevezése (1953) és Rákosi leváltása (1956) is szovjet nyomásra, illetve jóváhagyással történt. A magyar fordulatok tehát a szovjet vezetés irányváltásaihoz igazodtak.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: a 16 pont vagy a 12 pont részlete: melyik követelés melyik okból fakad?',
            'Időrendbe állítás: Sztálin halála, Nagy Imre kinevezése, XX. kongresszus, Rákosi leváltása.',
            'Esszé: az 1956-os forradalom okai és céljai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Nagy Imre két különböző kormányát ne keverd össze: az elsőt (1953–55, „új szakasz”) és a másodikat, amely a forradalom idején, 1956. október 24-től működött.',
        },
        {
          kind: 'tip',
          text: 'Az okokat csoportosítsd (politikai, nemzeti, gazdasági, nemzetközi), a célokat pedig a 16 pontból illusztráld. Esszében érdemes jelezni a kiváltó eseményeket is (a Rajk-temetés, a lengyel események).',
        },
      ],
      topicMatch: ['1956', 'nagy imre'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Ki lett a miniszterelnök Sztálin halála után 1953-ban?',
          options: ['Kádár János', 'Gerő Ernő', 'Nagy Imre', 'Maléter Pál'],
          answer: 2,
          explanation: 'Nagy Imre 1953 júliusában, az új szakasz politikájával.',
        },
        {
          question: 'Mi volt a Petőfi Kör?',
          options: [
            'Az ÁVH belső csoportja.',
            'Az értelmiség vitaklubja, amely nyíltan bírálta a rendszert.',
            'A szovjet csapatok magyar tagozata.',
            'A forradalom fegyveres alakulata.',
          ],
          answer: 1,
          explanation: 'A Petőfi Kör 1956 tavaszán a rendszerkritika fórumává vált.',
        },
        {
          question: 'Ki váltotta Rákosit 1956 júliusában a párt élén?',
          options: ['Nagy Imre', 'Gerő Ernő', 'Kádár János', 'Hruscsov'],
          answer: 1,
          explanation: 'Gerő Ernő; Kádár csak 1956. október 25-én lett első titkár.',
        },
        {
          question: 'Melyik NEM tartozott a diákok 16 pontjának követelései közé?',
          options: [
            'A szovjet csapatok kivonása.',
            'Többpárti szabad választás.',
            'A Sztálin-szobor eltávolítása.',
            'A kommunista párt vezető szerepének törvénybe iktatása.',
          ],
          answer: 3,
          explanation:
            'A 16 pont a szabadságjogokról, a nemzeti függetlenségről, a választásról szólt, a párt vezető szerepének rögzítése nem.',
        },
        {
          question: 'Mi volt a desztalinizáció kiváltója 1956 februárjában?',
          options: [
            'Hruscsov beszéde az SZKP XX. kongresszusán.',
            'A Varsói Szerződés megalakulása.',
            'A Kossuth téri sortűz.',
            'Nagy Imre kormányprogramja.',
          ],
          answer: 0,
          explanation: 'Hruscsov titkos beszédében elítélte Sztálin bűneit és a személyi kultuszt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Az 1956-os forradalom', url: wiki('1956-os forradalom') },
        { label: 'Wikipédia: Nagy Imre', url: wiki('Nagy Imre') },
        { label: 'Wikipédia: Petőfi Kör', url: wiki('Petőfi Kör') },
      ],
    },
    {
      id: 'forradalom-lefolyasa-megtorlas',
      subject: 'tortenelem',
      unitId: 'rakosi-1956',
      title: '1956: a forradalom és szabadságharc, a leverés és a megtorlás',
      level: 'kozep',
      requirement: { kozep: 'a szabadságharc és leverése, a megtorlás' },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1956. október 23.**: diákok és munkások tüntetése, a Sztálin-szobor ledöntése, a Rádiónál fegyveres harc: kitört a forradalom.',
            'Nagy Imre lett a miniszterelnök; **október 25-én** a Kossuth téri sortűz sok halálos áldozatot követelt; Gerő helyére Kádár János került.',
            '**Október 28.**: tűzszünet, Nagy Imre elismerte a forradalmat; **október 30-án** visszaállították a többpártrendszert.',
            '**November 1.**: Nagy Imre bejelentette a Varsói Szerződésből való kilépést és a semlegességet.',
            '**1956. november 4.**: a szovjet csapatok megtámadták Budapestet; a szabadságharc 1956 novemberében elbukott. Kádár János kormánya a szovjet támogatással átvette a hatalmat.',
            'A **megtorlás**: kivégzések (köztük **1958-ban Nagy Imre és társaié**), börtön, internálás, emigráció.',
          ],
        },
        {
          kind: 'map',
          title: 'Az 1956-os forradalom helyszínei',
          places: [
            {
              name: 'Budapest',
              lat: 47.5,
              lon: 19.04,
              note: 'Kossuth tér, Corvin köz, Magyar Rádió',
            },
            {
              name: 'Mosonmagyaróvár',
              lat: 47.87,
              lon: 17.27,
              note: 'október 26., sortűz a tüntetőkre',
            },
            { name: 'Salgótarján', lat: 48.1, lon: 19.8, note: 'december 8., sortűz a tüntetőkre' },
            {
              name: 'Sztálinváros (Dunaújváros)',
              lat: 46.96,
              lon: 18.94,
              note: 'a Rákosi-korszak iparosítása',
            },
            { name: 'Recsk', lat: 47.93, lon: 20.1, note: 'a diktatúra kényszermunkatábora' },
            { name: 'Hortobágy', lat: 47.58, lon: 21.15, note: 'kitelepítések, internálótáborok' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A forradalom napjai' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1956. október 23.',
              text: 'Tüntetés a Bem-szobornál, majd a Parlamentnél; ledöntik a Sztálin-szobrot; este Gerő beszéde, a Magyar Rádiónál lövések: a tüntetés fegyveres felkeléssé válik.',
            },
            {
              date: '1956. október 24.',
              text: 'Nagy Imre miniszterelnök; a szovjet csapatok beavatkoznak. Általános sztrájk, munkástanácsok alakulnak.',
            },
            {
              date: '1956. október 25.',
              text: 'A **Kossuth téri sortűz**: a tüntetőkre lőnek; a halottak száma vitatott, a téren legalább 61, a környéken együtt legalább 75 áldozatot azonosítottak, a becslések ennél jóval magasabbak is. Gerő helyett Kádár János az MDP első titkára.',
            },
            {
              date: '1956. október 26.',
              text: '**Mosonmagyaróvár**: sortűz a tüntetők közé; legalább 50 halott, a becslések eltérnek.',
            },
            {
              date: '1956. október 28.',
              text: 'Tűzszünet; Nagy Imre elismeri a forradalmat, a szovjet csapatok kivonulását ígéri (a forradalom győzelme).',
            },
            {
              date: '1956. október 30.',
              text: 'A többpártrendszer visszaállítása; fegyveres harc a Köztársaság téri pártházban.',
            },
            {
              date: '1956. november 1.',
              text: 'Nagy Imre bejelenti a Varsói Szerződésből való kilépést és Magyarország semlegességét; Kádár János Moszkvába megy.',
            },
            {
              date: '1956. november 4.',
              text: 'A szovjet hadsereg támadást indít (a hajnali órákban); Nagy Imre a jugoszláv követségen kér menedéket; a Kádár-kormány hatalomra kerül.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A harcokban a **pesti srácok** (fiatal felkelők) keményen álltak ellen a szovjet harckocsik ellen: a **Molotov-koktélt** is bevetették. A leghíresebb fegyveres csoport a **Corvin közi** volt, amelyet előbb **Iván Kovács László**, november 1-jétől **Pongrátz Gergely** vezetett. **Maléter Pál**, a Kilián laktanya parancsnoka a felkelők oldalára állt, Nagy Imre kormányában honvédelmi miniszter lett; 1956. november 3–4. éjszaka a szovjet fél tárgyalásra hívta, de letartóztatták.',
        },
        {
          kind: 'text',
          text: 'A forradalom az országban is **forradalmi bizottságokat** és **munkástanácsokat** hívott életre: a helyi hatalmat ők vették át a pártszervektől. A forradalom után a munkástanácsok (decemberben is) sztrájkkal és tiltakozással álltak ellen a Kádár-rendszernek.',
        },
        {
          kind: 'people',
          emelt: true,
          items: [
            {
              name: 'Szabó János',
              text: '„Szabó bácsi”, a Széna téri felkelőcsoport parancsnoka 1956-ban; 1957 januárjában kivégezték.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A leverés' },
        {
          kind: 'text',
          text: '**1956. november 4-én** hajnalban a szovjet hadsereg (a **Forgószél**-hadművelet) nagy túlerővel támadta meg Budapestet és az országot. A Kádár János vezette **Magyar Forradalmi Munkás-Paraszt Kormány** a szovjet támogatással átvette a hatalmat. A harcok néhány napig tartottak (Budapesten és ipari központokban), és a szabadságharc november második hetére elbukott. Nagy Imre november 22-én, a szabad elvonulás ígérete ellenére, szovjet katonák kezére került: Romániába vitték.',
        },
        {
          kind: 'text',
          text: 'Az áldozatok: kb. 2600 magyar (a KSH korabeli adata szerint) és kb. 700 szovjet katona halt meg, mintegy **200 ezren** hagyták el az országot (emigráció). Az ellenállás ezután is folytatódott: a munkástanácsok és sztrájkok (1956 decemberében), a salgótarjáni sortűz (**december 8.**) még sok halottat követelt.',
        },
        { kind: 'heading', text: 'A megtorlás' },
        {
          kind: 'keypoints',
          items: [
            '1956 decemberétől **statárium** és gyorsított bírósági eljárások működtek.',
            'Kb. **230 embert végeztek ki** (a pontos szám forrásonként eltér), tízezreket börtönöztek be vagy internáltak.',
            '**1958. június 16-án** kivégezték **Nagy Imrét**, **Maléter Pált** és **Gimes Miklóst**; titokban temették el őket.',
            '**Mansfeld Péter** a kivégzettek közül a legfiatalabb: fiatalkorúként tartóztatták le, 1959-ben végezték ki.',
          ],
        },
        {
          kind: 'text',
          text: 'A forradalom sajátos jellemzője volt a spontaneitás: nem volt egységes irányító szervezet, ezért a vezetők (Nagy Imre, Maléter) sokszor csak követték az eseményeket. A forradalom egyszerre volt **nemzeti szabadságharc** (szovjet csapatok ellen) és **demokratikus forradalom** (diktatúra ellen), ezért a hivatalos kifejezés: „forradalom és szabadságharc”.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Időrend: október 23., 25., 28., november 4. események sorba rendezése.',
            'Térkép és topográfia: Kossuth tér, Corvin köz, Mosonmagyaróvár, Salgótarján.',
            'Forrás: Nagy Imre rádióbeszéde (nov. 1. vagy nov. 4.), a Kossuth téri sortűz leírása, a megtorlás dokumentuma.',
            'Esszé: a forradalom és szabadságharc eseményei, leverése, a megtorlás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Kossuth téri (október 25.), a mosonmagyaróvári (október 26.) és a salgótarjáni (december 8.) sortűz összekeverése. A salgótarjáni már a leverés utáni időszakban történt.',
        },
        {
          kind: 'tip',
          text: 'Esszében a szerkezet: kitörés (október 23.) → győzelem (október 28–30.) → a forradalom céljai teljesülnek (többpártrendszer, semlegesség) → szovjet támadás (november 4.) → megtorlás (statárium, kivégzések, emigráció, 1958: Nagy Imre). Használj helyszíneket és személyeket is.',
        },
      ],
      topicMatch: ['1956', 'nagy imre szerepe'],
      cards: { subject: 'tortenelem', deck: 'evszamok', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor tört ki a forradalom Budapesten?',
          options: [
            '1956. október 6.',
            '1956. október 23.',
            '1956. október 25.',
            '1956. november 4.',
          ],
          answer: 1,
          explanation:
            'A tüntetés és a Rádiónál kitört harc október 23-án kezdődött. Október 25. a Kossuth téri sortűz, november 4. a szovjet támadás.',
        },
        {
          question: 'Mi történt 1956. október 25-én a Kossuth téren?',
          options: [
            'Kikiáltották a köztársaságot.',
            'Sortűz a tüntetők közé, sok halottal.',
            'Nagy Imre bejelentette a semlegességet.',
            'Leleplezték a Sztálin-szobrot.',
          ],
          answer: 1,
          explanation:
            'A Parlament előtti sortűz sok halálos áldozatot követelt, és eszkalálta a harcot.',
        },
        {
          question: 'Melyik város sortüze történt 1956. október 26-án?',
          options: ['Salgótarján', 'Mosonmagyaróvár', 'Recsk', 'Sztálinváros'],
          answer: 1,
          explanation:
            'Mosonmagyaróváron október 26-án lőttek a tüntetőkbe; a salgótarjáni sortűz december 8-án volt.',
        },
        {
          question: 'Mit jelentett be Nagy Imre 1956. november 1-jén?',
          options: [
            'A Magyar Népköztársaság megszüntetését.',
            'A kilépést a Varsói Szerződésből és a semlegességet.',
            'A forradalom feladását.',
            'A szovjet csapatok behívását.',
          ],
          answer: 1,
          explanation: 'A kilépés és a semlegesség volt a szovjetek számára elfogadhatatlan lépés.',
        },
        {
          question: 'Ki lett Magyarország vezetője a szovjet támadás után?',
          options: ['Nagy Imre', 'Gerő Ernő', 'Kádár János', 'Rákosi Mátyás'],
          answer: 2,
          explanation: 'A Kádár János vezette kormány vette át a hatalmat 1956. november 4-én.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Az 1956-os forradalom', url: wiki('1956-os forradalom') },
        { label: 'Wikipédia: Kossuth téri sortűz', url: wiki('Kossuth téri sortűz') },
        { label: 'Wikipédia: Nagy Imre per', url: wiki('Nagy Imre és társainak pere') },
      ],
    },
    {
      id: 'forradalom-nemzetkozi-hatter',
      subject: 'tortenelem',
      unitId: 'rakosi-1956',
      title: 'Az 1956-os forradalom nemzetközi háttere',
      level: 'emelt',
      requirement: { emelt: 'A forradalom nemzetközi háttere' },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A forradalom a **hidegháború** keretei között zajlott: Magyarország a szovjet érdekszférába tartozott, a Varsói Szerződés (1955) tagja volt.',
            'Sztálin halála (1953) és a **XX. kongresszus** (1956) a szovjet blokkban is megingatta a rendszert; a **lengyel munkásfelkelés** (poznańi felkelés, 1956 június) és az októberi lengyel változások példát adtak.',
            'A nyugati nagyhatalmak (USA, Nagy-Britannia, Franciaország) **nem avatkoztak be**: a **szuezi válság** (1956 október vége) lekötötte őket.',
            'A szovjet vezetés kezdetben habozott, de a többpártrendszer és a blokkból való kilépés veszélye miatt katonai beavatkozás mellett döntött (a támadás **november 4-én** indult).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'desztalinizáció',
              text: 'Sztálin kultuszának és bűneinek elítélése 1956-tól.',
            },
            {
              term: 'Varsói Szerződés',
              text: 'A szovjet blokk 1955-ben alapított katonai szövetsége, a NATO ellenpárja.',
            },
            {
              term: 'szuezi válság',
              text: '1956 végén Izrael, Nagy-Britannia és Franciaország megtámadta Egyiptomot a Szuezi-csatorna miatt; a két szuperhatalom (USA, Szovjetunió) is a béke mellett lépett fel.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A szovjet blokk 1953–56 között' },
        {
          kind: 'text',
          text: 'Sztálin halála után a szovjet vezetés (**Hruscsov**) a „békés egymás mellett élés” politikáját hirdette, és kereste a feszültség csökkentését: 1955-ben megkötötték az **osztrák államszerződést** (a szovjet csapatok kivonultak Ausztriából, az ország semleges lett), megalakult a **Varsói Szerződés**. A XX. kongresszus (1956 február) a Sztálin-kultusz elítélésével a blokk országaiban is változást indított el.',
        },
        {
          kind: 'text',
          text: '**Lengyelországban** 1956 júniusában a poznańi munkások sztrájkoltak, a lengyel kommunista vezetés októberben a Moszkvával szembeszálló **Gomułkát** választotta meg, aki elérte az enyhülést. Ez példa volt a magyar értelmiségnek: a diákok október 23-i tüntetése a lengyelekkel való szolidaritásból indult.',
        },
        { kind: 'heading', text: 'A nagyhatalmak és Magyarország' },
        {
          kind: 'text',
          text: 'A szovjet vezetés 1956 októberében kezdetben tárgyalt: október 30-án nyilatkozatot tett a szocialista államok egyenjogúságáról. Október 31-én viszont a beavatkozás mellett döntött, mert a többpártrendszer visszaállítása után a blokkból való kilépéstől tartott (ezt Nagy Imre november 1-jén be is jelentette), és attól félt, hogy a példa a többi országra is átterjed. A szovjet vezetők a Brioni-szigeteken (november 2–3.) egyeztettek **Titóval** is, aki a beavatkozást és Kádár hatalomra juttatását elfogadta.',
        },
        {
          kind: 'text',
          text: 'A **nyugati hatalmak** retorikájukban támogatták a „felszabadítás” politikáját (a **Szabad Európa Rádió** is bátorította a magyarokat), de ténylegesen nem akartak háborút a Szovjetunióval. Az **USA** nem avatkozott be, mert a szovjet érdekszféra elismert volt, a **szuezi válság** pedig a figyelmet is elterelte: október 29-én Izrael, majd október 31-től Nagy-Britannia és Franciaország támadta Egyiptomot. Az **ENSZ** közgyűlése elítélte a szovjet beavatkozást, de ez következmények nélkül maradt.',
        },
        {
          kind: 'compare',
          title: 'A két válság egy időben',
          columns: ['Magyar forradalom', 'Szuezi válság'],
          rows: [
            {
              label: 'Időpont',
              cells: [
                '1956. október 23-tól november 4-ig',
                '1956. október 29-től november elejéig',
              ],
            },
            {
              label: 'Nagyhatalmi szerep',
              cells: [
                'szovjet katonai beavatkozás',
                'az USA és a Szovjetunió is a támadók ellen lépett fel',
              ],
            },
            {
              label: 'Nyugat reakciója',
              cells: ['nem avatkozott be', 'Nagy-Britannia és Franciaország maga volt a támadó'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A forradalom következményei: a Nyugat és a szovjet blokk országai számára világossá vált, hogy a szovjet érdekszférát a Nyugat nem vitatja. A Kádár-rendszert a szovjet csapatok jelenléte biztosította (1991-ig).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás vagy térkép: a lengyel és a magyar események, a szuezi válság időrendje.',
            'Miért nem avatkozott be a Nyugat? Miért támadtak a szovjetek november 4-én?',
            'Emelt esszé: a forradalom nemzetközi háttere és következményei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne írd, hogy a Nyugat teljesen közömbös volt: szavakban és rádióadásokkal támogatta a forradalmat, de a nagyhatalmi egyensúly és a szuezi válság miatt katonai segítséget nem nyújtott.',
        },
        {
          kind: 'tip',
          text: 'Emelt szinten az okokat is meg kell nevezni: a hidegháborús érdekszférák, a szuezi válság elterelő hatása, a Varsói Szerződésből való kilépés mint a szovjet számára elfogadhatatlan lépés.',
        },
      ],
      topicMatch: ['1956', 'nagy imre szerepe'],
      quiz: [
        {
          question: 'Melyik szervezetből akart kilépni Magyarország 1956. november 1-jén?',
          options: ['NATO', 'ENSZ', 'Varsói Szerződés', 'Kominform'],
          answer: 2,
          explanation:
            'Nagy Imre a Varsói Szerződésből való kilépést és a semlegességet jelentette be.',
        },
        {
          question: 'Melyik esemény vonta el a nyugati hatalmak figyelmét 1956 végén?',
          options: [
            'A berlini fal építése',
            'A szuezi válság',
            'A koreai háború',
            'A kubai rakétaválság',
          ],
          answer: 1,
          explanation:
            'A szuezi válság (1956 október vége) lekötötte Nagy-Britanniát, Franciaországot és az USA figyelmét.',
        },
        {
          question:
            'Mely ország eseményei adtak 1956 októberében közvetlen példát a magyar diákoknak?',
          options: ['Ausztria', 'Lengyelország', 'Jugoszlávia', 'Csehszlovákia'],
          answer: 1,
          explanation:
            'A lengyelországi változások (poznańi felkelés, Gomułka) hatottak a magyar diákokra.',
        },
        {
          question: 'Miért nem avatkozott be fegyveresen a Nyugat?',
          options: [
            'Mert a magyar kormány kérte, hogy ne tegyék.',
            'Mert a szovjet érdekszférát elismerte, és háború kockázatát nem vállalta.',
            'Mert az ENSZ megtiltotta.',
            'Mert Magyarország a NATO tagja volt.',
          ],
          answer: 1,
          explanation:
            'A hidegháborús érdekszféra-felfogás és az atomháború veszélye miatt a Nyugat csak szavakban támogatta a forradalmat.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Szuezi válság', url: wiki('Szuezi válság') },
        {
          label: 'Wikipédia: Az 1956-os forradalom nemzetközi háttere',
          url: wiki('1956-os forradalom nemzetközi háttere'),
        },
      ],
    },
  ],
};

export default unit;
