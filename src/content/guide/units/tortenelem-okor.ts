import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 1.1 (Politika), 1.2 (Ókori civilizációk) and 1.3 (Vallások). */
const unit: GuideUnit = {
  id: 'okor',
  subject: 'tortenelem',
  order: 10,
  title: 'Az ókor: politika, civilizációk, vallások',
  requirementRef: '1.1–1.3',
  intro:
    'Az athéni demokrácia és a római köztársaság, Caesar és Augustus, a hunok, a görög és római építészet, az ókori írások, filozófia és jog, valamint a zsidó, a keresztény és az ókori keleti vallások.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (1. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'városállam/polisz',
        'arisztokrácia',
        'démosz',
        'demokrácia',
        'népgyűlés',
        'sztratégosz',
        'cserépszavazás',
        'falanx',
        'rabszolga',
        'polgárjog',
        'Akropolisz',
        'amfiteátrum',
        'gladiátor',
        'politeizmus/többistenhit',
        'monoteizmus/egyistenhit',
        'monda',
        'zsidó vallás',
        'Ószövetség/Héber Biblia',
        'Tízparancsolat',
        'próféta',
        'jeruzsálemi templom',
        'diaszpóra',
        'Messiás',
        'keresztény vallás',
        'keresztség',
        'úrvacsora',
        'apostol',
        'misszió',
        'Biblia',
        'Újszövetség',
        'evangélium',
        'püspök',
        'császár',
        'zsinat',
        'jósda',
        'olümpiai játékok',
        'patrícius',
        'plebejus',
        'consul',
        'senatus',
        'dictator',
        'néptribunus',
        'provincia',
        'limes',
        'légió',
        'öntözéses földművelés',
        'hieroglifa',
        'ékírás',
        'fáraó',
        'piramis',
        'múmia',
        'filozófia',
        'népvándorlás',
        'hunok',
        'nagy fal',
        'kasztrendszer',
      ],
      emelt: [
        'arisztokratikus köztársaság',
        'esküdtbíróság',
        'türannisz',
        'cenzor',
        'triumvirátus',
        'principátus',
        'Colosseum',
        'bazilika',
        'Forum Romanum',
        'Circus Maximus',
        'újraelosztás',
        'árupénz',
        'betűírás',
        'szofizmus',
        'zsinagóga',
        'államvallás',
        'dogma',
        'brahmanizmus/hinduizmus',
        'buddhizmus',
        'lélekvándorlás/reinkarnáció',
        'taoizmus',
        'az ókori Izrael állama',
      ],
    },
    people: {
      kozep: [
        'Kleiszthenész',
        'Periklész',
        'Nagy Sándor',
        'Ábrahám',
        'Mózes',
        'Dávid',
        'Salamon',
        'Jézus',
        'Mária',
        'József',
        'Augustus',
        'Szent Péter',
        'Szent Pál',
        'Constantinus',
        'Romulus',
        'Julius Caesar',
        'Attila',
        'Hammurapi',
        'Platón',
        'Arisztotelész',
        'Kheopsz',
      ],
      emelt: [
        'Pompeius',
        'Antonius',
        'Szókratész',
        'Nagy Theodosius',
        'Ré',
        'Ízisz',
        'Ozirisz',
        'Buddha',
        'Zeusz',
        'Aphrodité',
        'Arész',
        'Athéné',
        'Poszeidon',
        'Héra',
      ],
    },
    dates: {
      kozep: [
        'Kr. e. 3000 körül – Kr. u. 476 az ókor',
        'Kr. e. 508 Kleiszthenész reformjai',
        'Kr. e. 490 a marathóni csata',
        'Kr. e. 5. sz. közepe az athéni demokrácia fénykora',
        'Kr. e. 753 Róma alapítása a hagyomány szerint',
        'Kr. e. 510 a köztársaság kezdete Rómában',
        'Kr. u. 70 Jeruzsálem lerombolása',
        'a keresztény időszámítás kezdete (Kr. e. és Kr. u.)',
        '313 a milánói rendelet',
        '325 a niceai zsinat',
        'Kr. e. 776 az első feljegyzett olümpiai játékok',
        'Kr. e. 44 Caesar halála',
        '395 a Római Birodalom kettéosztása',
        '476 a Nyugatrómai Birodalom bukása',
      ],
      emelt: [
        'Kr. e. 6. század Szolón reformja',
        'Kr. e. 31 az actiumi csata',
        '451 a catalaunumi csata',
      ],
    },
    places: {
      kozep: [
        'Athén',
        'Alexandria',
        'Itália',
        'Róma',
        'Római Birodalom',
        'Pannónia',
        'Aquincum',
        'Savaria',
        'Jeruzsálem',
        'Kánaán',
        'Júdea',
        'Izrael',
        'Palesztina',
        'Betlehem',
        'Konstantinápoly',
        'Olümpia',
        'Egyiptom',
        'Spárta',
        'Marathón',
        'Mezopotámia',
        'Babilon',
        'Nílus',
        'Hun Birodalom',
      ],
      emelt: ['Hispania', 'Gallia', 'Actium', 'Olümposz', 'Delphoi'],
    },
  },
  pages: [
    {
      id: 'athen-demokracia',
      subject: 'tortenelem',
      unitId: 'okor',
      title: 'Az athéni demokrácia',
      level: 'kozep',
      requirement: {
        kozep: 'Az athéni államszervezet és működése a demokrácia virágkorában',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A görögök **városállamokban** (**polisz**) éltek; Athénban a fejlődés az **arisztokrácia** uralmától a **demokráciáig** vezetett.',
            '**Kr. e. 508**: **Kleiszthenész** reformjai megteremtették a demokrácia alapjait (új területi beosztás, ötszázak tanácsa, cserépszavazás).',
            'A **Kr. e. 5. század közepe** a demokrácia fénykora, **Periklész** korában: a **népgyűlés** döntött, a tisztségek jó részét sorsolták, a közhivatalért fizetést adtak.',
            'Polgár az a szabad athéni férfi volt, akinek athéni származása volt; a nők, a külföldiek és a **rabszolgák** kimaradtak a politikából.',
            'Ugyanebben a korban dőlt el a perzsa háborúk sorsa (**Kr. e. 490 marathóni csata**), és ekkor épültek az **Akropolisz** nagy templomai.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'városállam/polisz',
              text: 'Önálló, a városból és a hozzá tartozó vidékből álló államocska saját törvényekkel és hadsereggel.',
            },
            {
              term: 'démosz',
              text: 'A nép, a polgárok összessége; a **demokrácia** szó jelentése: a nép uralma.',
            },
            {
              term: 'népgyűlés',
              text: 'A polgárok gyűlése, Athénban a legfőbb döntéshozó szerv: törvényekről, háborúról, békéről szavazott.',
            },
            {
              term: 'sztratégosz',
              text: 'Hadvezér és vezető tisztségviselő; évente tízet választottak, újraválaszthatók voltak.',
            },
            {
              term: 'cserépszavazás',
              text: 'A tekintélyes, a demokráciára veszélyesnek tartott politikust cseréptörmelékre írt névvel tíz évre száműzhették.',
            },
            {
              term: 'falanx',
              text: 'A nehézfegyverzetű gyalogosok (hoplitészek) zárt, sűrű harcrendje.',
            },
            {
              term: 'polgárjog',
              text: 'A közügyekben való részvétel joga; Athénban a szabad, athéni származású férfiaké.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A városállam és az arisztokrácia' },
        {
          kind: 'text',
          text: 'A görög világ hegyvidéki, tengerparti tájain nem jött létre egységes állam: a völgyekben és a szigeteken **városállamok** alakultak. A polisz közepén az **agora** (piac és gyűlési tér) állt, fölötte a védhető magaslat, az **Akropolisz**. A görögöket a közös nyelv, a vallás és az **olümpiai játékok** (az első feljegyzett játékok **Kr. e. 776**-ban voltak Olümpiában, Zeusz tiszteletére) fogták össze.',
        },
        {
          kind: 'text',
          text: 'Athénban eleinte a földbirtokos **arisztokrácia** (előkelők) irányított. A kisbirtokosok az adósságok miatt a rabszolgasors szélére kerültek, a kereskedők és kézművesek pedig nem kaptak beleszólást a döntésekbe.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Szolón** reformja (Kr. e. 6. század eleje) eltörölte az adósrabszolgaságot, és a polgárokat vagyon szerint osztályokba sorolta: a jogokat nem a származás, hanem a vagyon határozta meg. **Peiszisztratosz** és fiai **türannisz** (egyeduralom) alatt tartották Athént; ez nem feltétlenül kegyetlen kormányzást jelentett, de a hatalmat törvényes alap nélkül gyakorolták. A türannisz bukása után tört át a demokrácia.',
        },
        { kind: 'heading', text: 'Kleiszthenész reformjai (Kr. e. 508)' },
        {
          kind: 'keypoints',
          items: [
            'Új **területi beosztás**: tíz törzs (phülé), amelyekbe a város, a tengerpart és a belső vidék lakói egyaránt kerültek. Így gyengült az előkelő családok helyi befolyása.',
            'Az **Ötszázak Tanácsa**: tíz törzsből ötven-ötven sorsolt tag készítette elő a népgyűlés döntéseit.',
            '**Cserépszavazás**: a zsarnoksággal fenyegető politikus tíz évre száműzhető volt (a szavazáshoz legalább 6000 szavazat kellett).',
          ],
        },
        { kind: 'heading', text: 'A demokrácia működése a Kr. e. 5. század közepén' },
        {
          kind: 'text',
          text: 'A hatalom a **népgyűlésen** nyugodott: minden athéni polgár részt vehetett rajta, és szavazhatott. Itt döntöttek a törvényekről, a háborúról és békéről, a tisztségviselők elszámoltatásáról. Az **Ötszázak Tanácsa** a mindennapi ügyeket vitte és előkészítette a napirendet. A **bíróságokat** esküdtek (sorsolt polgárok) alkották, ők hozták a döntést.',
        },
        {
          kind: 'text',
          text: 'A legtöbb tisztséget **sorsolással** töltötték be, évente cserélődtek, és mindenki elszámolással tartozott. Egyetlen kivétel volt a **sztratégoszok** tisztsége: a hadvezéreket választották, és több évre is újraválaszthatták. **Periklész** a Kr. e. 5. század közepén éveken át sztratégoszként vezette Athént; tekintélye így nem hivatalon, hanem a népgyűlés bizalmán alapult.',
        },
        {
          kind: 'text',
          text: 'Periklész bevezette a **fizetést** a közhivatalokért és a népgyűlési, bírósági szolgálatért, hogy a szegényebb polgárok is vállalhassák a közügyek intézését.',
        },
        {
          kind: 'compare',
          title: 'Athén és Spárta',
          columns: ['Athén', 'Spárta'],
          rows: [
            {
              label: 'Hatalom',
              cells: ['a polgárok népgyűlése', 'két király, vének tanácsa, éforoszok'],
            },
            {
              label: 'Katonaság',
              cells: [
                'hajóhad (flotta) és hoplitészek',
                'hivatásos hoplita sereg, katonai nevelés',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'kereskedelem, kézművesség, tengeri hatalom',
                'földművelés a leigázott helóták munkájával',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Ki tartozott bele, ki nem?' },
        {
          kind: 'text',
          text: 'A demokrácia **korlátozott** volt: a polgárjoggal csak a szabad, athéni származású férfiak rendelkeztek. A **nők**, a városban élő **külföldiek** és a **rabszolgák** nem vehettek részt a politikában. Ez a lakosság jelentős részét kizárta, de a polgárok között addig soha nem látott egyenlőség valósult meg.',
        },
        { kind: 'heading', text: 'A görög–perzsa háborúk és Nagy Sándor' },
        {
          kind: 'text',
          text: 'A kis-ázsiai görög városok fellázadtak a perzsa uralom ellen, Athén támogatta őket, ezért a perzsák megtámadták a görög szárazföldet. **Kr. e. 490-ben** Marathón mellett az athéniak legyőzték a perzsa sereget. A görög szövetség később is visszaverte a támadásokat, és a győzelem tette Athént a görög világ vezető hatalmává, ez alapozta meg a demokrácia fénykorát.',
        },
        {
          kind: 'text',
          text: 'A városállamok viszályai (köztük az athéni és spártai szövetség között dúló peloponnészoszi háború) gyengítették a görögöket. A Kr. e. 4. században a macedón uralom alá kerültek; **Nagy Sándor** hódításaival a görög kultúra Egyiptomtól Indiáig elterjedt (**hellenizmus**). Egyik leghíresebb új városa **Alexandria** volt Egyiptomban.',
        },
        { kind: 'heading', text: 'Vallás és közösség: a görög politeizmus' },
        {
          kind: 'text',
          text: 'A görögök **többistenhívők** (politeisták) voltak. Isteneik emberi tulajdonságokkal bírtak, és a **mondák** szereplői voltak. Az **olümpiai játékok** idejére a harcoló városok szent békét kötöttek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Zeusz** az istenek királya, **Pallasz Athéné** Athén védőistennője (neki szentelték az Akropolisz templomát). A delphoi **jósda** az istenek akaratát közvetítette.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (például Thuküdidész Periklész-beszéde vagy ábra az államszervezetről): melyik intézményről szól, ki dönt?',
            'Fogalom azonosítása leírásból (cserépszavazás, sztratégosz, démosz, népgyűlés).',
            'Esszé vagy rövid válasz: az athéni demokrácia működése és korlátai; összevetés a mai demokráciával vagy Spártával.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az athéni demokráciát a mai képviseleti demokráciával azonosítani. Athénban **közvetlen** demokrácia volt (a polgárok maguk szavaztak), és csak a polgárok kis része vehetett részt benne.',
        },
        {
          kind: 'tip',
          text: 'Válaszban mindig mondd ki mindkét oldalt: **mi volt demokratikus** (népgyűlés, sorsolás, fizetés a hivatalért) és **mi nem** (nők, rabszolgák, külföldiek kizárása). Ezt a „tényeken alapuló értékelést” jutalmazzák.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Emelt szinten a fejlődést is várják: arisztokrácia, Szolón, türannisz, Kleiszthenész, Periklész. A reformok mindegyike a polgári jogok kiszélesítése felé tett lépés volt.',
        },
      ],
      topicMatch: ['athéni demokrácia', 'görög városok', 'antikvitás', '=ókor'],
      cards: { subject: 'tortenelem', era: 'okor' },
      quiz: [
        {
          question: 'Mi volt a népgyűlés szerepe az athéni demokráciában?',
          options: [
            'Csak ünnepségeket szervezett.',
            'A legfőbb döntéshozó szerv volt: törvényekről, háborúról és békéről szavazott.',
            'A hadvezérek kinevezését végezte a király nevében.',
            'Kizárólag a rabszolgák ügyeit intézte.',
          ],
          answer: 1,
          explanation:
            'A népgyűlés minden athéni polgár gyűlése volt; ez döntött a legfontosabb kérdésekben.',
        },
        {
          question: 'Melyik évhez kötjük Kleiszthenész reformjait?',
          options: ['Kr. e. 776', 'Kr. e. 490', 'Kr. e. 508', 'Kr. e. 753'],
          answer: 2,
          explanation:
            'Kr. e. 508: Kleiszthenész reformjai. Kr. e. 776 az első olümpiai játékok, 490 a marathóni csata, 753 Róma hagyomány szerinti alapítása.',
        },
        {
          question: 'Ki vehetett részt az athéni népgyűlésen?',
          options: [
            'Minden felnőtt lakos, a nők és a rabszolgák is.',
            'Csak a nemesek.',
            'A szabad, athéni származású férfiak.',
            'Csak a gazdag kereskedők.',
          ],
          answer: 2,
          explanation:
            'A polgárjog a szabad, athéni származású férfiaké volt; a nők, a külföldiek és a rabszolgák kimaradtak.',
        },
        {
          question: 'Mit jelent a cserépszavazás?',
          options: [
            'A hadvezérek választását szavazatokkal.',
            'A veszélyesnek tartott politikus tíz évre történő száműzését.',
            'A bírák kisorsolását cserépdarabokkal.',
            'A népgyűlés napirendjének megszavazását.',
          ],
          answer: 1,
          explanation:
            'A polgárok cseréptörmelékre írták a név, és a legtöbb szavazatot kapott politikust tíz évre száműzték.',
        },
        {
          question: 'Melyik tisztséget NEM sorsolással töltötték be az athéni demokráciában?',
          options: [
            'az Ötszázak Tanácsának tagjai',
            'a bírósági esküdtek',
            'a sztratégoszok',
            'a legtöbb hivatalnok',
          ],
          answer: 2,
          explanation:
            'A hadvezéreket, a sztratégoszokat választották, mert hozzáértés kellett hozzájuk; a legtöbb más tisztséget sorsolták.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Athéni demokrácia', url: wiki('Athéni demokrácia') },
        { label: 'Wikipédia: Kleiszthenész', url: wiki('Kleiszthenész') },
        { label: 'Wikipédia: Periklész', url: wiki('Periklész') },
      ],
    },
    {
      id: 'roma-koztarsasag-principatus',
      subject: 'tortenelem',
      unitId: 'okor',
      title: 'A római köztársaság, Caesar és Augustus',
      level: 'emelt',
      requirement: {
        emelt: 'Köztársaságból egyeduralom: a római köztársaság működése, Caesar és Augustus',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Róma alapítását a hagyomány **Kr. e. 753**-ra teszi (**Romulus**); a királyok kiűzése után **Kr. e. 510-től** köztársaság volt.',
            'A köztársaság **arisztokratikus**: két **consul**, a **senatus**, a népgyűlések és a **néptribunusok** osztoztak a hatalmon; a **patríciusok** és a **plebejusok** küzdelme alakította a rendszert.',
            'A hódítások (provinciák, rabszolgák, vagyon) szétzilálták a társadalmat; a belső harcokban hadvezérek ragadták magukhoz a hatalmat.',
            '**Caesar** (Kr. e. 44-ben meggyilkolták) diktátorként már egyeduralkodó volt; **Augustus** a **principátussal** valóban egyeduralmat épített ki, a köztársaság látszatát megőrizve.',
            '**Kr. e. 31**: az **actiumi csata**; ezután Octavianus egyedül maradt, Kr. e. 27-ben megkapta az **Augustus** címet.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'patrícius',
              text: 'Az őshonos, előkelő római családok tagja; kezdetben csak ők viselhettek tisztségeket.',
            },
            {
              term: 'plebejus',
              text: 'A köznép tagja; kezdetben kimaradt a tisztségekből, jogaiért évszázadokon át küzdött.',
            },
            {
              term: 'consul',
              text: 'A köztársaság két legmagasabb tisztségviselője, egy évre választották őket; ők vezették a sereget és a senatust.',
            },
            {
              term: 'senatus',
              text: 'A volt tisztségviselőkből álló tanács; valójában az állam irányítója.',
            },
            {
              term: 'dictator',
              text: 'Végszükségben, legfeljebb hat hónapra kinevezett teljhatalmú vezető.',
            },
            {
              term: 'néptribunus',
              text: 'A plebejusok védelmére választott tisztségviselő, vétójoggal a hivatalnokok döntései ellen.',
            },
            {
              term: 'cenzor',
              text: 'Összeírta a polgárokat, vagyonuk szerint osztályba sorolta őket, és ügyelt a senatusi tagok erkölcsi és vagyoni alkalmasságára.',
            },
            {
              term: 'triumvirátus',
              text: 'Három politikus (három férfi) szövetsége a hatalom megosztására.',
            },
            {
              term: 'principátus',
              text: 'Augustus rendszere: a **princeps** (első polgár) uralma, formálisan a köztársasági intézmények megtartásával.',
            },
            {
              term: 'provincia',
              text: 'Hódítással szerzett, Rómán kívüli terület, kormányzó vezette, adót fizetett.',
            },
            {
              term: 'légió',
              text: 'A római hadsereg fő egysége; a hivatásos katonák hosszú szolgálati időre álltak be.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A köztársaság kezdetei' },
        {
          kind: 'text',
          text: 'A hagyomány szerint **Romulus** alapította Rómát Kr. e. 753-ban. Itália közepén, a Tiberis partján fekvő város eleinte királyok uralma alatt állt. A rómaiak az etruszk eredetű királyokat elűzték, és **Kr. e. 510-ben** köztársaságot hoztak létre, amelyben a közügyek a polgárok közös ügyei (*res publica*).',
        },
        { kind: 'heading', text: 'Hogyan működött a köztársaság?' },
        {
          kind: 'keypoints',
          items: [
            '**Consulok**: két tisztségviselő, egy évre; egymás döntését megvétózhatták.',
            '**Senatus**: a tapasztalt, volt tisztségviselőkből álló tanács; ő irányította a külpolitikát és a pénzügyeket.',
            '**Népgyűlések**: választották a tisztségviselőket és szavaztak a törvényekről.',
            '**Néptribunusok**: a plebejusok védelmezői, vétójoggal.',
            '**Cenzorok**: a polgárok összeírása és osztályba sorolása.',
            '**Dictator**: végveszélyben, legfeljebb hat hónapra.',
          ],
        },
        {
          kind: 'text',
          text: 'A hatalom megosztása, a rövid hivatali idő és a kölcsönös vétó a hatalom egy kézben való összpontosulását akadályozta. Mégis **arisztokratikus** köztársaság volt: a tisztségeket és a senatust az előkelők uralták. A **plebejusok** a patríciusokkal vívott küzdelemben kiharcolták a tisztségekhez való hozzáférést, a néptribunusi tisztséget és a törvények írásba foglalását (**tizenkét táblás törvény**, Kr. e. 5. század közepe).',
        },
        { kind: 'heading', text: 'Hódítások és a köztársaság válsága' },
        {
          kind: 'text',
          text: 'Róma előbb Itáliát egyesítette, majd a **pun háborúkban** legyőzte Karthágót, és meghódította a Földközi-tenger térségét; a hódított területek **provinciák** lettek. A hadjáratok hatalmas vagyont és rabszolgákat hoztak, de a kisbirtokos parasztok tönkrementek, a földek a nagybirtokosok kezébe kerültek, a hadsereg pedig a parancsnokaihoz lett lojális. Rabszolgafelkelések (**Spartacus**, Kr. e. 73–71), földreformért küzdő politikusok és polgárháborúk szakították meg a békét.',
        },
        { kind: 'heading', text: 'Caesar' },
        {
          kind: 'text',
          text: '**Kr. e. 60-ban** Julius Caesar, **Pompeius** és Crassus megkötötték az első **triumvirátust**. Caesar meghódította **Galliát** (Kr. e. 58–51 között), hadserege rendkívül hűséges lett hozzá. Amikor a senatus Pompeius oldalára állt, Caesar átkelt a Rubiconon (Kr. e. 49), és polgárháborúban legyőzte Pompeiust. **Diktátorrá** nevezték ki, végül élethossziglan.',
        },
        {
          kind: 'text',
          text: 'Caesar intézkedései közé tartozott a naptárreform (julián naptár), a provinciák lakóinak polgárjog-adása és a veteránok földhöz juttatása. A senatus előkelői attól tartottak, hogy királyi hatalmat akar; összeesküvők **Kr. e. 44** március idusán (március 15.) megölték.',
        },
        { kind: 'heading', text: 'Augustus és a principátus' },
        {
          kind: 'text',
          text: 'Caesar örököse, **Octavianus** **Antoniusszal** és Lepidusszal második triumvirátust kötött (Kr. e. 43). Antonius és az egyiptomi királynő, Kleopátra ellen **Kr. e. 31-ben az actiumi (Actium) csatában** győzött, Egyiptomot a birodalomhoz csatolták. **Kr. e. 27-ben** a senatus az **Augustus** (fenséges) címet adta neki.',
        },
        {
          kind: 'text',
          text: 'Augustus megtartotta a köztársasági intézményeket (consulok, senatus), de hatalmi eszközöket gyűjtött egy kézbe: a hadsereg főparancsnoka volt, a néptribunusi jogkört élete végéig birtokolta, és a legfontosabb provinciák katonaságát ő irányította. Ez a **principátus**: formálisan „első polgár” (*princeps*), valójában **egyeduralom**. Uralmát a béke (**pax Romana**), a közigazgatás rendezése és a pártfogolt kultúra tette elfogadottá.',
        },
        {
          kind: 'compare',
          title: 'Köztársaság és principátus',
          columns: ['Köztársaság', 'Principátus'],
          rows: [
            {
              label: 'Hatalom',
              cells: [
                'megosztott: consulok, senatus, népgyűlés',
                'a princeps kezében összpontosul',
              ],
            },
            {
              label: 'Hivatalok',
              cells: [
                'egy évre választott tisztségviselők',
                'megmaradnak, de a princeps felügyeli őket',
              ],
            },
            {
              label: 'Hadsereg',
              cells: [
                'polgárok sorozása, vezérekhez hű seregek',
                'állandó hivatásos hadsereg, a princeps parancsnoksága alatt',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A birodalom és Pannónia' },
        {
          kind: 'text',
          text: 'Augustus korában a birodalom határa a Rajna és a Duna lett. A Kárpát-medence nyugati és déli részén **Pannónia** provincia jött létre (a Kr. e. 1. század végén, Kr. u. 1. század elején). A határvédelmi rendszert (**limes**) a **légiók** táborai és a várak alkották a Duna mentén. Alsó-Pannónia fővárosa később **Aquincum** (a mai Budapest területén) lett, **Savaria** (Szombathely) Pannónia első coloniája volt. A birodalom adminisztratív központjai (**Róma** és a későbbi székhelyek) mellett a provinciák városai a római életmód (fürdők, amfiteátrumok, utak) terjesztői voltak.',
        },
        {
          kind: 'map',
          title: 'Pannónia római városai',
          places: [
            {
              name: 'Aquincum',
              lat: 47.5535,
              lon: 19.0455,
              note: 'a limes mentén, Alsó-Pannónia későbbi fővárosa',
            },
            { name: 'Savaria', lat: 47.2307, lon: 16.6218, note: 'colonia, a borostyánút mentén' },
            { name: 'Brigetio', lat: 47.7309, lon: 18.2084, note: 'légiótábor a Duna mentén' },
            { name: 'Scarbantia', lat: 47.6849, lon: 16.59, note: 'a mai Sopron' },
            { name: 'Sopianae', lat: 46.0727, lon: 18.2323, note: 'a mai Pécs' },
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: 'Kr. e. 753', text: 'Róma alapítása a hagyomány szerint.' },
            { date: 'Kr. e. 510', text: 'A köztársaság kezdete Rómában.' },
            { date: 'Kr. e. 44', text: 'Caesar halála.' },
            { date: 'Kr. e. 31', text: 'Az actiumi csata.' },
            {
              date: 'Kr. e. 27',
              text: 'Octavianus megkapja az Augustus címet; a principátus kezdete.',
            },
            { date: '395', text: 'A Római Birodalom kettéosztása.' },
            { date: '476', text: 'A Nyugatrómai Birodalom bukása.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: tisztségek leírása (consul, senatus, néptribunus), vagy Augustus önéletrajzi felirata (*Res gestae*): mit mutat a hatalom jellegéről?',
            'Fogalmak: dictator, principátus, triumvirátus, provincia.',
            'Emelt esszé: miként lett a köztársaságból egyeduralom (okok: hódítások, a hadsereg szerepe, polgárháborúk, Caesar, Augustus).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Caesart császárnak nevezni. Caesar **diktátor** volt, nem császár; az első császár (princeps) **Augustus**. A „császár” szó (caesar) Caesar nevéből származik.',
        },
        {
          kind: 'tip',
          text: 'Esszében a köztársaság és a principátus összevetése szempontok szerint (hatalom, hadsereg, tisztségek, a polgárok szerepe) teljes értékű választ ad. Mutasd meg a **folyamatot**: nem egyetlen esemény, hanem a hódítás és a hadvezérek hatalma tette lehetővé az egyeduralmat.',
        },
      ],
      topicMatch: ['caesar', 'augustus', '=róma', '=római birodalom'],
      cards: { subject: 'tortenelem', era: 'okor' },
      quiz: [
        {
          question: 'Melyik évvel kezdődött a köztársaság Rómában?',
          options: ['Kr. e. 753', 'Kr. e. 510', 'Kr. e. 508', 'Kr. e. 44'],
          answer: 1,
          explanation:
            'Kr. e. 510: a királyok kiűzése, a köztársaság kezdete. Kr. e. 753 Róma legendás alapítása, 508 Kleiszthenész reformja Athénban.',
        },
        {
          question: 'Mi volt a néptribunus feladata?',
          options: [
            'A hadsereg vezetése.',
            'A plebejusok védelme vétójoggal.',
            'A polgárok összeírása.',
            'Végveszélyben a teljhatalom gyakorlása.',
          ],
          answer: 1,
          explanation:
            'A néptribunus a plebejusok védelmezője volt, vétót mondhatott a hivatalnokok döntéseire. A cenzor írta össze a polgárokat, a dictator kapott teljhatalmat.',
        },
        {
          question: 'Mikor ölték meg Caesart?',
          options: ['Kr. e. 31', 'Kr. e. 27', 'Kr. e. 44', 'Kr. e. 49'],
          answer: 2,
          explanation: 'Kr. e. 44 március idusán gyilkolták meg a senatus ellenzéki tagjai.',
        },
        {
          question: 'Mi jellemezte Augustus rendszerét, a principátust?',
          options: [
            'A köztársasági tisztségek megszüntetése.',
            'Formálisan megmaradt a köztársaság, a valódi hatalom a princepsé volt.',
            'A hatalom megosztása két consul között.',
            'A népgyűlés teljhatalma.',
          ],
          answer: 1,
          explanation:
            'Augustus megtartotta a köztársasági intézményeket, de a hadsereg és a legfőbb hatalmi jogkörök az ő kezében voltak.',
        },
        {
          question: 'Melyik csatában győzte le Octavianus Antoniust és Kleopátrát?',
          options: ['Marathónnál', 'Actiumnál', 'Catalaunumnál', 'Niceában'],
          answer: 1,
          explanation: 'Kr. e. 31-ben Actiumnál; ezután Octavianus egyedül maradt a hatalomban.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Római köztársaság', url: wiki('Római köztársaság') },
        { label: 'Wikipédia: Julius Caesar', url: wiki('Julius Caesar') },
        { label: 'Wikipédia: Augustus', url: wiki('Augustus római császár') },
      ],
    },
    {
      id: 'hunok-sztyeppei-allam',
      subject: 'tortenelem',
      unitId: 'okor',
      title: 'A sztyeppei állam: a Hun Birodalom',
      level: 'emelt',
      requirement: {
        emelt: 'A sztyeppei állam: a Hun Birodalom és hódításainak iránya',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **hunok** a keleti sztyeppék lovas nomád népe voltak; **375 körül** jelentek meg Európában, ezzel megindult a **népvándorlás**.',
            'A sztyeppei állam a nomád törzsek katonai szövetsége, amely a letelepedett birodalmakat **adófizetésre** kényszerítette.',
            '**Attila** (434-től testvérével, Bledával, 445 után egyedül) a Kárpát-medencéből uralkodott; zsákmány és adó a Keletrómai Birodalomtól.',
            'Hódításainak iránya: először a **Keletrómai Birodalom** (Balkán), majd nyugatra **Gallia** és **Itália**.',
            '**451**: a **catalaunumi csata** Galliában; **453**: Attila halála, a birodalom rövid időn belül szétesett.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'hunok',
              text: 'A Kr. u. 4. században Európába érkező lovas nomád nép; a nyugati történetírás a „barbár” világ rettegett harcosaiként írta le őket.',
            },
            {
              term: 'népvándorlás',
              text: 'A Kr. u. 4–6. században a Római Birodalom határain kívül élő népek (germánok, hunok) költözése, amely a birodalom felbomlásához vezetett.',
            },
            {
              term: 'újraelosztás',
              text: 'A sztyeppei uralkodó a zsákmányt és az adót híveinek osztotta szét; ez biztosította a hatalmát.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A sztyeppei állam jellemzői' },
        {
          kind: 'text',
          text: 'A sztyeppén élő nomád pásztornépek nem folytattak földművelést, állatállományukkal vándoroltak. A sztyeppei állam a törzsek **szövetsége**, amelynek élén egy uralkodó áll: a hatalmát katonai erejére és a **zsákmány, adó újraosztására** építi. A nomádok kitűnő **lovasíjászok** voltak, gyors, mozgékony hadviselést folytattak. A letelepedett szomszédoktól adót, fegyverszüneti díjat vagy ajándékot kényszerítettek ki; ezt a gazdaságukat kiegészítő forrásnak tartották.',
        },
        { kind: 'heading', text: 'A hunok megjelenése' },
        {
          kind: 'text',
          text: 'A hunok Közép-Ázsia felől érkeztek, **375 körül** legyőzték a keleti gótokat, ami a germán népek menekülését indította el a Római Birodalom területére. Ez a **népvándorlás** kezdete, és gyengítette a birodalmat. A hunok a Kr. u. 5. század elejére a Kárpát-medencében és környékén szerveztek birodalmat.',
        },
        { kind: 'heading', text: 'Attila birodalma' },
        {
          kind: 'text',
          text: '**Attila** (434-től kezdve) testvérével, Bledával közösen, 445 után egyedül uralkodott. A birodalom központja a Kárpát-medencében volt (a Duna–Tisza vidékén). A hunok uralma alatt germán és más népek éltek, akik katonákat adtak. Attila legnagyobb zsákmánya a **Keletrómai Birodalomtól** (székhelye **Konstantinápoly**) követelt, folyamatosan növelt **évi adó** volt.',
        },
        {
          kind: 'keypoints',
          title: 'Hódításainak iránya',
          items: [
            '**Délnyugat, Balkán**: a Keletrómai Birodalom területének fosztogatása, az adó kikényszerítése.',
            '**Nyugat, Gallia (451)**: a római–nyugati gót szövetséggel szemben a **catalaunumi csata** (451) döntetlen, de Attila visszavonult.',
            '**Itália (452)**: a hunok betörtek Itáliába, de nem foglalták el Rómát.',
          ],
        },
        {
          kind: 'text',
          text: 'Attila **453**-ban meghalt. Fiai között harc kezdődött, az alávetett népek fellázadtak, és a Hun Birodalom szétesett. A hunok maradéka Kelet felé húzódott, más részük beolvadt a szomszéd népekbe. A sztyeppei államok sorsa gyakran a megalapító uralkodó személyétől függött: halála után rövid idő alatt felbomlottak.',
        },
        {
          kind: 'compare',
          title: 'A Római Birodalom és a Hun Birodalom',
          columns: ['Római Birodalom', 'Hun Birodalom'],
          rows: [
            {
              label: 'Életmód',
              cells: ['letelepedett, városi, földművelő', 'nomád, lovas pásztorkodó'],
            },
            {
              label: 'Hatalom alapja',
              cells: [
                'törvények, közigazgatás, állandó hadsereg',
                'a vezér katonai ereje, zsákmány és adó elosztása',
              ],
            },
            {
              label: 'Gazdaság',
              cells: ['mezőgazdaság, kézművesség, kereskedelem', 'állattartás, adó és zsákmány'],
            },
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '375 körül', text: 'A hunok legyőzik a gótokat; kezdődik a népvándorlás.' },
            {
              date: '395',
              text: 'A Római Birodalom kettéosztása (Nyugat- és Keletrómai Birodalom).',
            },
            { date: '451', text: 'A catalaunumi csata.' },
            { date: '453', text: 'Attila halála.' },
            { date: '476', text: 'A Nyugatrómai Birodalom bukása.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: a Hun Birodalom helye és a hódítások iránya (Kárpát-medence, Balkán, Gallia, Itália).',
            'Forrás: római író Attiláról vagy a hunokról; mit mutat az életmódról és a hatalomról?',
            'Emelt esszé: a sztyeppei állam jellemzői és a Hun Birodalom összehasonlítása a Római Birodalommal.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Attilát a magyarok vezérének tartani. A hunok és a honfoglaló magyarok **különböző népek**, a hun birodalom a Kr. u. 5. században létezett. Ne keverd az évszámokat (451 Catalaunum, 453 Attila halála, 895–896 a honfoglalás).',
        },
        {
          kind: 'tip',
          text: 'A „sztyeppei állam” jellemzésénél hozd ki a három pontot: nomád életmód, a vezér katonai hatalma, adó és zsákmány újraosztása. Ezek bármely sztyeppei birodalomra igazak.',
        },
      ],
      topicMatch: ['hun birodalom', 'attila', 'népvándorlás'],
      cards: { subject: 'tortenelem', era: 'okor' },
      quiz: [
        {
          question: 'Melyik esemény indította el a népvándorlást a hunok megjelenésével?',
          options: [
            'A hunok legyőzték a gótokat (375 körül).',
            'Attila meghalt (453).',
            'Róma elesett (476).',
            'A birodalmat kettéosztották (395).',
          ],
          answer: 0,
          explanation:
            'A hunok támadása elől a germán népek a Római Birodalom területére menekültek: ez volt a népvándorlás kezdete.',
        },
        {
          question: 'Mi volt a sztyeppei állam hatalmának alapja?',
          options: [
            'A földművelés és a városi kereskedelem.',
            'A vezér katonai ereje, valamint a zsákmány és az adó újraosztása.',
            'A tanács és a népgyűlés döntései.',
            'A tengeri hajóhad.',
          ],
          answer: 1,
          explanation:
            'A nomád uralkodó a zsákmány és az adó elosztásával tartotta magához a kíséretet és a törzseket.',
        },
        {
          question: 'Hol uralkodott Attila a birodalom központjában?',
          options: ['Itáliában', 'A Kárpát-medencében', 'Galliában', 'Hispániában'],
          answer: 1,
          explanation:
            'A hun birodalom központja a Kárpát-medence volt, innen indultak a Balkánra, Galliába és Itáliába.',
        },
        {
          question: 'Melyik évhez kötjük Attila halálát?',
          options: ['451', '476', '395', '453'],
          answer: 3,
          explanation:
            '453: Attila halála, utána a birodalom szétesett. 451 a catalaunumi csata, 476 a Nyugatrómai Birodalom bukása.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Hunok', url: wiki('Hunok') },
        { label: 'Wikipédia: Attila', url: wiki('Attila hun uralkodó') },
        { label: 'Wikipédia: Catalaunumi csata', url: wiki('Catalaunumi csata') },
      ],
    },
    {
      id: 'gorog-romai-epiteszet',
      subject: 'tortenelem',
      unitId: 'okor',
      title: 'A görög és a római építészet',
      level: 'kozep',
      requirement: { kozep: 'A görög és a római építészet' },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **görög** építészet a harmóniát és az arányt kereste: az építészet csúcsa az oszlopos **templom** (Athénban az **Akropolisz**), jellemző épület még a színház és a stadion.',
            'A **római** építészet a tömegek kiszolgálására épült: boltív, dongaboltozat, kupola és beton teszi lehetővé a hatalmas épületeket (**amfiteátrum**, fürdő, vízvezeték, út).',
            'Római jellegzetesség a nagy **amfiteátrum** és a közéleti terek; a provinciákban (Aquincum, Savaria) is épültek hasonló létesítmények.',
            'A mai épületek, színházak, stadionok és bíróságok közvetlen mintája az antik építészet.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Akropolisz',
              text: 'Athén magaslati vára, szentélyek és templomok együttese; legismertebb épülete a **Parthenon**, a város védőistennőjének temploma.',
            },
            {
              term: 'amfiteátrum',
              text: 'Ovális, lépcsőzetes nézőtérrel épített római aréna gladiátorjátékok és állatviadalok számára.',
            },
            {
              term: 'gladiátor',
              text: 'Az amfiteátrumban küzdő harcos (rabszolga, hadifogoly vagy önkéntes); a nézők szórakoztatására viaskodtak.',
            },
            {
              term: 'Colosseum',
              emelt: true,
              text: 'Róma legnagyobb amfiteátruma, a Flavius-dinasztia építette a Kr. u. 1. században.',
            },
            {
              term: 'bazilika',
              emelt: true,
              text: 'Hosszanti, oszlopsorokkal tagolt csarnok: a rómaiaknál törvénykezési és kereskedelmi célú épület, később a keresztény templomok mintája.',
            },
            {
              term: 'Forum Romanum',
              emelt: true,
              text: 'Róma köz- és vallási életének központja: tér templomokkal, bazilikákkal, a senatus épületével.',
            },
            {
              term: 'Circus Maximus',
              emelt: true,
              text: 'Róma legnagyobb versenypályája, szekérversenyek színhelye.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A görög építészet' },
        {
          kind: 'text',
          text: 'A görög templom az istenség lakhelye volt, nem a hívek gyülekezőhelye: az áldozatokat a templom előtt, oltáron mutatták be. Szerkezete: a téglalap alapú belső szentélyt (cella) oszlopsor veszi körül, tetején háromszögű oromzat (timpanon). Az **oszloprendek** (dór, ión, korinthoszi) a görög építészet jellegzetes elemei. Az épületek **arányosak, harmonikusak, szimmetrikusak**.',
        },
        {
          kind: 'text',
          text: 'A legismertebb példa az athéni **Akropolisz** a **Parthenonnal**, amelyet a város védőistennőjének szenteltek. Az Akropolisz nagy épületei a Kr. e. 5. század közepén, Periklész korában készültek, a demokrácia fénykorának büszke jelei. A görögök **színházat** (félkör alakú, lejtős nézőtér) és **stadiont** (az olümpiai játékokhoz) is építettek. A polisz központja az **agora** volt.',
        },
        { kind: 'heading', text: 'A római építészet' },
        {
          kind: 'text',
          text: 'A rómaiak átvették a görög mintákat, de **új műszaki megoldásokat** vezettek be: a **boltívet**, a **dongaboltozatot**, a **kupolát** és a **betont**. Ezekkel a hatalmas, nyitott belső terű épületeket tudtak emelni, ahol nem kellett sűrű oszlopsor. A birodalom egységét utak, hidak, **vízvezetékek** (aquaeductus) és **fürdők** (thermae) szolgálták.',
        },
        {
          kind: 'keypoints',
          title: 'Fontosabb római épülettípusok',
          items: [
            '**Amfiteátrum**: a gladiátorharcok és állatviadalok színtere; a legnagyobb Rómában állt.',
            '**Fürdők, vízvezetékek, utak**: a római életmód és a birodalom működésének alapja.',
            '**Diadalív, oszlop**: a győzelmek emlékműve.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt: további épülettípusok',
          emelt: true,
          items: [
            '**Circus**: a szekérversenyek pályája (**Circus Maximus**).',
            '**Bazilika**: törvénykezés és kereskedelem hosszanti csarnoka.',
            '**Forum**: tér a város közéletéhez (**Forum Romanum**).',
          ],
        },
        {
          kind: 'text',
          text: 'A római építészet a birodalom egész területén jelen volt. **Pannóniában** is emeltek amfiteátrumot, fürdőt és vízvezetéket, például **Aquincumban** (két amfiteátrum, vízvezeték, fürdők, orgona) és Savariában. A római épületek nyomai ma is megtekinthetők.',
        },
        {
          kind: 'compare',
          title: 'Görög és római építészet',
          columns: ['Görög', 'Római'],
          rows: [
            {
              label: 'Fő cél',
              cells: [
                'az istenek háza, a harmónia, az arány',
                'a tömegek kiszolgálása, a hatalom megjelenítése',
              ],
            },
            {
              label: 'Szerkezet',
              cells: ['oszlop és szemöldökgerenda', 'boltív, boltozat, kupola, beton'],
            },
            {
              label: 'Jellemző épület',
              cells: ['templom (Parthenon), színház, stadion', 'amfiteátrum, fürdő, vízvezeték'],
            },
          ],
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'A bazilika később a keresztény templom alaptípusa lett: a hosszanti csarnok szerkezetét a keresztények a nagy tömegek befogadására alkalmasnak találták. Az építészet így a pogány és a keresztény világ közti átmenetet is mutatja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Képfelismerés: melyik épület (Parthenon, amfiteátrum, vízvezeték, színház) és melyik kultúrához tartozik?',
            'Párosítás: épülettípus és funkció (amfiteátrum: gladiátorjáték; fürdő: tisztálkodás és közösségi élet).',
            'Rövid válasz: mi a különbség a görög és a római építészet között?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az **amfiteátrumot** színháznak nevezni. A színház félkör alakú, drámák színhelye (görög eredetű), az amfiteátrum ovális, gladiátorharcok helye (római).',
        },
        {
          kind: 'tip',
          text: 'Kapcsold az épületet a társadalmi szerepéhez: a görög templom a polisz védőistene, a római amfiteátrum a tömegek szórakoztatása (a „kenyér és cirkusz”), a vízvezeték és út a birodalom szervezettsége.',
        },
      ],
      topicMatch: ['építészet', 'antikvitás', 'görög városok'],
      cards: { subject: 'tortenelem', era: 'okor' },
      quiz: [
        {
          question: 'Melyik épület állt az athéni Akropoliszon?',
          options: ['Amfiteátrum', 'Parthenon', 'Fürdő', 'Vízvezeték'],
          answer: 1,
          explanation:
            'A Parthenon az Akropoliszon állt, Athén védőistennőjének temploma volt; az amfiteátrum, a fürdő és a vízvezeték római épület.',
        },
        {
          question: 'Mire használták az amfiteátrumot?',
          options: [
            'Drámák előadására.',
            'Gladiátorharcok és állatviadalok megrendezésére.',
            'Szekérversenyekre.',
            'Törvénykezésre.',
          ],
          answer: 1,
          explanation:
            'Az amfiteátrum a gladiátorjátékok színhelye; a szekérverseny a circusé, a törvénykezés a bazilikáé.',
        },
        {
          question: 'Melyik római építészeti újítás tette lehetővé a nagy belső tereket?',
          options: [
            'Az oszlopok sűrű sora.',
            'A boltív, a boltozat és a beton.',
            'A fa tetőszerkezet.',
            'Az oromzat.',
          ],
          answer: 1,
          explanation:
            'A rómaiak a boltívet, a boltozatot, a kupolát és a betont alkalmazták, így hatalmas csarnokokat építhettek.',
        },
        {
          question: 'Melyik város volt Pannónia római települése, ahol amfiteátrum állt?',
          options: ['Aquincum', 'Athén', 'Marathón', 'Alexandria'],
          answer: 0,
          explanation:
            'Aquincum a mai Budapest területén feküdt; itt két amfiteátrum is volt. Az Athén, Marathón és Alexandria nem Pannóniában voltak.',
        },
        {
          question: 'Mi volt a bazilika eredeti szerepe a római világban?',
          options: [
            'Gladiátorjátékok színtere.',
            'Törvénykezési és kereskedelmi csarnok.',
            'Szekérverseny-pálya.',
            'Fürdő.',
          ],
          answer: 1,
          explanation:
            'A római bazilika hosszanti csarnok volt törvénykezéshez és kereskedéshez; a keresztények később templomtípusként vették át.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Ókori görög építészet', url: wiki('Ókori görög építészet') },
        { label: 'Wikipédia: Ókori római építészet', url: wiki('Ókori római építészet') },
        { label: 'Wikipédia: Aquincum', url: wiki('Aquincum') },
      ],
    },
    {
      id: 'penz-iras-filozofia-jog',
      subject: 'tortenelem',
      unitId: 'okor',
      title: 'Pénz, írás, filozófia és jog az ókorban',
      level: 'emelt',
      requirement: {
        emelt:
          'A pénz megjelenése, formái és szerepe az ókori gazdaságban; Ókori írások, a görög filozófia, a római jog alapelvei',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Pénz**: az **árupénz** (marha, só, fém) után jelent meg a **fémpénz**; a pénz csereeszköz és értékmérő, a kereskedelem és a gazdaság alapja.',
            '**Írások**: az **ékírás** (Mezopotámia), a **hieroglifa** (Egyiptom) és a **betűírás** (föníciaiaktól a görögökön át a rómaiakhoz).',
            '**Filozófia**: a görögök a világot észérvekkel akarták megérteni; **szofisták**, **Szókratész**, **Platón**, **Arisztotelész**.',
            '**Római jog**: a tizenkét táblás törvényektől a kidolgozott magánjogig; sok elve ma is él (ártatlanság vélelme, szerződések szentsége).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'árupénz',
              text: 'Csereeszközként elfogadott áru (marha, gabona, só, fémdarabok): értéke az árujellegéből adódik.',
            },
            {
              term: 'újraelosztás',
              text: 'A keleti birodalmakban a palota és a templom gyűjtötte be a terményt és az adót, majd szétosztotta (nem piaci csere, hanem központi elosztás).',
            },
            {
              term: 'öntözéses földművelés',
              text: 'A folyóvölgyekben (Nílus, Eufrátesz, Tigris) csatornákkal öntözött mezőgazdaság, amely nagy termést adott, és központi szervezést kívánt.',
            },
            { term: 'ékírás', text: 'Mezopotámiai írás: nyomott ék alakú jelek agyagtáblán.' },
            {
              term: 'hieroglifa',
              text: 'Egyiptomi képírás: jelek, amelyeket kőbe véstek vagy papiruszra festettek.',
            },
            {
              term: 'betűírás',
              text: 'A hangokat jelölő írás: kevés jel elég; a föníciai írásból alakult ki a görög, majd a latin ábécé.',
            },
            {
              term: 'filozófia',
              text: '„A bölcsesség szeretete”: a világ és az ember megértése észérvekkel, mítoszok helyett.',
            },
            {
              term: 'szofizmus',
              text: 'A szofisták tanítása: vándor tanítók, akik pénzért oktattak (szónoklat, vita); szerintük az igazság viszonylagos.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A pénz megjelenése és szerepe' },
        {
          kind: 'text',
          text: 'Az ókori Keleten (Egyiptom, Mezopotámia) a gazdaság alapja az **öntözéses földművelés** volt. A termést a palota és a templom gyűjtötte be, és osztotta szét (**újraelosztás**): a közösség nagy része nem piacon cserélt. Közben a kereskedők **árupénzt** használtak: marhát, gabonát, sót, később mérlegen lemért nemesfémet.',
        },
        {
          kind: 'text',
          text: 'A **vert fémpénz** a Kr. e. 7. században terjedt el Kis-Ázsiában (**Lüdia**), onnan a görög városállamokba, majd a rómaiakhoz. A pénz **értékmérő**, **csereeszköz** és **felhalmozási** eszköz: megkönnyítette a kereskedelmet, mert nem kellett az árut cserélni, és az uralkodó adót is könnyebben szedhetett. A görög és római állam jegyezte a pénz értékét, saját pénzverdében verte.',
        },
        {
          kind: 'keypoints',
          title: 'A pénz szerepe a gazdaságban',
          items: [
            '**csereeszköz**: a kereskedelem fellendítője (Athén tengeri kereskedelme)',
            '**értékmérő**: az árak összehasonlítható alapja',
            '**felhalmozás**: vagyon tárolása, hitelezés, adófizetés, zsoldosok fizetése',
          ],
        },
        { kind: 'heading', text: 'Az ókori írások' },
        {
          kind: 'keypoints',
          items: [
            '**Ékírás** (Mezopotámia, Kr. e. 4. évezred vége): nedves agyagtáblába nyomott ék alakú jelek; adminisztráció, törvények, irodalom.',
            '**Hieroglifa** (Egyiptom): képjelekkel és hangjelekkel, kőbe vésve vagy papiruszra festve; írnokok tudtak írni.',
            '**Betűírás**: a föníciaiak fejlesztették ki a hangokat jelölő, kevés jelből álló írást; ebből lett a **görög ábécé** (mássalhangzók és magánhangzók), majd a **latin betűk**. Egyszerűbb, így többen megtanulhatták.',
          ],
        },
        {
          kind: 'text',
          text: 'Az írás tette lehetővé az adók nyilvántartását, a törvények rögzítését, a tudomány és az irodalom hagyományozását. **Hammurapi** (babiloni király, Kr. e. 18. század) törvényoszlopa az ókori jogi szövegek leghíresebb példája.',
        },
        { kind: 'heading', text: 'A görög filozófia' },
        {
          kind: 'text',
          text: 'A görög filozófusok a mítoszok helyett **ésszel**, érvekkel keresték a világ rendjét. A **szofisták** (Kr. e. 5. század) a szónoklást és vitatkozást tanították pénzért; szerintük nincs mindenki számára érvényes igazság. **Szókratész** (Athén, Kr. e. 5. század) beszélgetésekkel, kérdésekkel tisztázta a jó és igazságos fogalmát; nem írt semmit, az athéniak halálra ítélték, mert szerintük megrontotta az ifjúságot. **Platón**, Szókratész tanítványa, megalapította az **Akadémiát**, és az **eszmék világát** tanította; az *Állam* című művében az ideális államot írta le. **Arisztotelész**, Platón tanítványa, a megfigyelésre épített tudományt, a logikát és az államformák tanulmányozását; Nagy Sándor nevelője volt.',
        },
        { kind: 'heading', text: 'A római jog alapelvei' },
        {
          kind: 'text',
          text: 'A rómaiak jogrendszere a **tizenkét táblás törvényből** (Kr. e. 5. század közepe) indult, amelyet nyilvánosan kitűztek, így a jog nem lehetett az előkelők titka. A római jogászok kidolgozták a **magánjogot**: tulajdon, szerződés, örökség, család. Később **Iustinianus** császár (6. század) összegyűjtötte a római jogot (*Corpus Iuris Civilis*), amelyre Európa jogi gondolkodása építkezett.',
        },
        {
          kind: 'keypoints',
          title: 'A római jog elvei, amelyek ma is élnek',
          items: [
            'A törvény mindenkire egyformán vonatkozik, és **írásban, nyilvánosan** hirdetik.',
            '**Ártatlanság vélelme**: a vádlott ártatlan, amíg a bűnösségét be nem bizonyítják.',
            'A felet meg kell hallgatni a döntés előtt (**audiatur et altera pars**).',
            'A **szerződés** kötelez (pacta sunt servanda), a **tulajdon** védett.',
            'A jog különbséget tesz **személyek, dolgok és perek** között.',
          ],
        },
        {
          kind: 'compare',
          title: 'Keleti és görög–római jog és gondolkodás',
          columns: ['Keleti birodalmak', 'Görögök és rómaiak'],
          rows: [
            {
              label: 'Gazdaság',
              cells: ['újraelosztás, palota és templom', 'piac, pénz, kereskedelem'],
            },
            {
              label: 'Írás',
              cells: ['bonyolult jelrendszer, írnokok', 'betűírás, szélesebb rétegek számára'],
            },
            { label: 'Világmagyarázat', cells: ['isteni rend, vallás', 'filozófia: ész és érv'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: törvényoszlop (Hammurapi), filozófiai szöveg (Platón, Arisztotelész), jogi szöveg: mit mutat a társadalomról és a gondolkodásról?',
            'Fogalmak: árupénz, újraelosztás, ékírás, hieroglifa, betűírás, szofizmus.',
            'Emelt rövid esszé: a pénz megjelenésének hatása a gazdaságra, vagy az írás és a filozófia öröksége.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni az ékírást és a hieroglifát. **Ékírás**: Mezopotámia, agyagtábla; **hieroglifa**: Egyiptom, papirusz és kő. A betűírás a föníciaiaktól származik, nem az egyiptomiaktól.',
        },
        {
          kind: 'tip',
          text: 'Filozófusoknál tudd a **sorrendet és a kapcsolatot**: szofisták, majd Szókratész, tanítványa Platón, az ő tanítványa Arisztotelész. Mindegyikhez kapcsolj egy fogalmat: viszonylagosság, kérdezés, eszmék, megfigyelés.',
        },
      ],
      topicMatch: [
        'a pénz megjelenése',
        'az írás kialakulása',
        'római jog',
        'jogelvek',
        'ókori mezopotámia',
      ],
      cards: { subject: 'tortenelem', era: 'okor' },
      quiz: [
        {
          question: 'Melyik írás kapcsolódik Mezopotámiához?',
          options: ['hieroglifa', 'ékírás', 'latin betűk', 'rovásírás'],
          answer: 1,
          explanation: 'Az ékírás Mezopotámiában, agyagtáblán jött létre; a hieroglifa egyiptomi.',
        },
        {
          question: 'Ki volt Platón tanítványa és Nagy Sándor nevelője?',
          options: ['Szókratész', 'Arisztotelész', 'Hammurapi', 'Periklész'],
          answer: 1,
          explanation:
            'Arisztotelész Platón tanítványa és Nagy Sándor nevelője volt. Szókratész Platón tanára volt.',
        },
        {
          question: 'Mit jelent az újraelosztás az ókori keleti gazdaságban?',
          options: [
            'A kereskedők szabadon cserélik az árut a piacon.',
            'A palota és a templom begyűjti a termést, majd szétosztja.',
            'A pénz az adót pótolja.',
            'Az állam földet oszt a rabszolgáknak.',
          ],
          answer: 1,
          explanation:
            'A központi szervek (palota, templom) gyűjtötték be és osztották szét a terményt; ez nem piaci csere.',
        },
        {
          question: 'Melyik elv származik a római jogból?',
          options: [
            'A vádlott ártatlan, amíg a bűnösségét be nem bizonyítják.',
            'A fáraó akarata a törvény.',
            'A szemet szemért elv.',
            'Nincs különbség a magán- és a közjog között.',
          ],
          answer: 0,
          explanation:
            'Az ártatlanság vélelme a római jog elve. A „szemet szemért” Hammurapi törvényeire jellemző.',
        },
        {
          question: 'Melyik népnek köszönhető a hangokat jelölő betűírás kialakulása?',
          options: ['az egyiptomiaknak', 'a föníciaiaknak', 'a hunoknak', 'a rómaiaknak'],
          answer: 1,
          explanation: 'A föníciaiak betűírásából alakult ki a görög, majd a latin ábécé.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Pénz története', url: wiki('A pénz története') },
        { label: 'Wikipédia: Görög filozófia', url: wiki('Ókori görög filozófia') },
        { label: 'Wikipédia: Római jog', url: wiki('Római jog') },
      ],
    },
    {
      id: 'okori-vallasok',
      subject: 'tortenelem',
      unitId: 'okor',
      title: 'Az ókor vallásai: zsidó monoteizmus, kereszténység, politeizmus',
      level: 'kozep',
      requirement: {
        kozep: 'A zsidó monoteizmus; a kereszténység kialakulása, tanai, elterjedése',
        emelt: 'Politeizmus az ókori Keleten',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **zsidó vallás** az első **monoteista** (egyistenhívő) vallások egyike: egyetlen Istent hisznek, a szövetség jeleként kapták a **Tízparancsolatot** (**Mózes**). Szent könyve a **Héber Biblia** (Ószövetség).',
            'Fontos alakok: **Ábrahám**, **Mózes**, **Dávid**, **Salamon**; Kr. u. **70-ben** a rómaiak lerombolták a **jeruzsálemi templomot**, a zsidók szétszóródtak (**diaszpóra**).',
            'A **kereszténység** a Júdeai zsidóságból nőtt ki: **Jézus** tanítása, halála és (hívei szerint) feltámadása; a tanítványok, az **apostolok** hirdették.',
            'A kereszténység a birodalomban a **misszió** révén terjedt; **Szent Pál** missziós útjai a legfontosabbak. A **313-as milánói rendelet** szabaddá tette, a **325-ös niceai zsinat** egységes hitvallást adott.',
            'A rómaiak, görögök, egyiptomiak, mezopotámiaiak **többistenhívők** (**politeisták**) voltak.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'monoteizmus/egyistenhit', text: 'Hit egyetlen, mindenható Istenben.' },
            {
              term: 'politeizmus/többistenhit',
              text: 'Hit több istenben, akik a természet erőit, az élet területeit képviselik.',
            },
            {
              term: 'Tízparancsolat',
              text: 'Az Isten által Mózesnek átadott tíz alapvető erkölcsi és vallási szabály.',
            },
            {
              term: 'próféta',
              text: 'Isten szócsöve: az Isten akaratát közvetítette a néphez, és figyelmeztette a királyokat.',
            },
            {
              term: 'Messiás',
              text: 'A zsidó hit szerint az Isten küldötte, a megváltó; a keresztények Jézust tartják Messiásnak (Krisztus).',
            },
            {
              term: 'diaszpóra',
              text: 'Szétszórtságban élő közösség: a Palesztinán kívül élő zsidók.',
            },
            { term: 'apostol', text: 'Jézus tanítványa, a tanítás hirdetője (küldött).' },
            { term: 'misszió', text: 'Hittérítés: a vallás tanainak terjesztése.' },
            { term: 'püspök', text: 'A keresztény egyházközségek vezetője, az apostolok utóda.' },
            {
              term: 'zsinat',
              text: 'Az egyház vezetőinek gyűlése a hit kérdéseiben való döntésre.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A zsidó vallás' },
        {
          kind: 'text',
          text: 'A zsidók ősei a Közel-Keleten, **Kánaán** (később Palesztina, Izrael) földjén éltek. A Biblia szerint **Ábrahám** volt az első, akit egyetlen Isten megszólított, és szövetséget kötött vele: a nép Isten népe lesz, Isten pedig megvédi őket. Az Egyiptomból való kivonulás vezetője **Mózes** volt, aki a Sínai-hegyen átvette a **Tízparancsolatot**.',
        },
        {
          kind: 'text',
          text: 'A zsidó királyság első nagy uralkodói **Dávid** (aki Jeruzsálemet fővárossá tette) és fia **Salamon**, aki felépítette a **jeruzsálemi templomot** (az Isten lakóhelyét, a zsidó vallásgyakorlat központját). A **próféták** a királyokat és a népet figyelmeztették, ha eltértek Isten parancsaitól, és megígérték a **Messiás** eljövetelét.',
        },
        {
          kind: 'text',
          text: 'A zsidó vallás szent könyve a **Héber Biblia** (a keresztények Ószövetsége). A zsidó hit **monoteista**: egyetlen, láthatatlan, képmással nem ábrázolt Isten van. A hívők hitéletének központja a templom, majd **Kr. u. 70-ben**, amikor a rómaiak Jeruzsálemet elfoglalták és a templomot lerombolták, a **zsinagóga** (imaház és közösségi tér) lett. A zsidók szétszóródtak a Római Birodalomban (**diaszpóra**).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A zsinagóga a templom lerombolása után a vallási élet fő helyszíne lett, ahol a közösség imádkozott, a Szentírást olvasták és tanították. Az írástudók (rabbik) irányították a közösséget. A diaszpórában élő zsidók nyelvet, kultúrát és hitet őriztek, és lakóhelyük szerint a kereszténység első befogadói is lettek.',
        },
        { kind: 'heading', text: 'A kereszténység kialakulása' },
        {
          kind: 'text',
          text: 'Jézus **Betlehemben** született, a római fennhatóság alatt álló **Júdeában**, és Názáretben nőtt fel; édesanyja **Mária**, nevelőapja **József**. Tanítása szerint Isten mindenkit szeret, és a legfontosabb parancs az Isten és a felebarát szeretete; tanította a megbocsátást, a szegények és bűnösök felkarolását, és az Isten országának eljövetelét. Hívei Messiásnak, **Krisztusnak** (a „felkentnek”) tartották. A római helytartó, Pilátus ítélete alapján **Jeruzsálemben** keresztre feszítették; a keresztények hite szerint harmadnapra feltámadt. **A keresztény időszámítás kezdete** Jézus születése.',
        },
        {
          kind: 'keypoints',
          title: 'A keresztény tanítás alapjai',
          items: [
            'Egyetlen Isten létezik (három személyben: Atya, Fiú, Szentlélek).',
            'Jézus Isten fia, aki megváltotta az embereket bűneikből; a feltámadás reményt ad az örök életre.',
            'Szent könyve a **Biblia**: az **Ószövetség** (a zsidó szent könyv) és az **Újszövetség** (a négy **evangélium**, az apostolok cselekedetei és levelei).',
            'Szertartások: a **keresztség** (felvétel az egyházba) és az **úrvacsora** (Jézus utolsó vacsorájának emlékére).',
          ],
        },
        { kind: 'heading', text: 'Az egyház elterjedése' },
        {
          kind: 'text',
          text: 'Az **apostolok** Jézus halála után hirdették a tanítást. **Szent Péter** (a hagyomány szerint Róma első püspöke) és **Szent Pál** a legfontosabbak. Pál volt a legnagyobb **misszionárius**: a birodalom városaiban (Kis-Ázsia, Görögország) járt, és a nem zsidóknak is hirdette a hitet. A keresztény közösségek (gyülekezetek) élén **püspökök** álltak.',
        },
        {
          kind: 'text',
          text: 'A kereszténységet a római utak, a közös görög nyelv és a zsidó diaszpóra közösségei terjesztették. A keresztényeket sokáig üldözték, mert **megtagadták a császárkultuszt** (a császárnak mint istennek való áldozatot), és gyanúsnak tartották őket. A rómaiak szemében államellenes csoportot alkottak. A 3–4. század fordulóján (Diocletianus) súlyos üldözés is volt.',
        },
        {
          kind: 'keypoints',
          title: 'A kereszténység útja a birodalomban',
          items: [
            '**Kr. u. 1. század**: Jézus tanítása, az apostolok missziója, az első keresztény közösségek.',
            '**313**: a **milánói rendelet** (Constantinus császár) szabaddá tette a keresztény vallás gyakorlását.',
            '**325**: a **niceai zsinat** Constantinus összehívására; meghatározta a hit alapját (hitvallás), elítélte az Arius-féle tanítást.',
            '**330**: Constantinus **Konstantinápolyt** a birodalom új fővárosává tette.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: ['**380** után: **Nagy Theodosius** idején a kereszténység **államvallás** lett.'],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **dogma** az egyház által kötelezően hirdetett hitigazság. A zsinatok a dogmák kimondására is szolgáltak: a niceai zsinat a Szentháromság tanát és az Atya és Fiú egylényegűségét mondta ki az arianizmussal szemben.',
        },
        { kind: 'heading', text: 'Politeizmus az ókori Keleten' },
        {
          kind: 'text',
          emelt: true,
          text: 'A **politeizmus** az ókor legelterjedtebb vallási formája volt. **Egyiptomban** a vallás a **fáraó** isteni hatalmára és a halál utáni életre épült. Fontos istenek: **Ré** (a napisten), **Oziris** (az alvilág ura, a halottak bírája) és **Ízisz** (Oziris felesége, a termékenység és varázslás istennője). A test megőrzésére **múmiává** balzsamozták az elhunytat, a fáraók sírjai a **piramisok** (**Kheopsz** fáraó nagy piramisa a legismertebb).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Mezopotámiában** is sok istent tiszteltek (városistenek, természeti erők), templomtornyokat (zikkurat) emeltek számukra; **Hammurapi** törvénykönyve szerint a törvényeket az igazság istene, Samas bízta rá. **Indiában** a **brahmanizmus/hinduizmus** isteneket és **kasztrendszert** (a társadalom szigorú rétegei) jelent; a hívők hisznek a **lélekvándorlásban/reinkarnációban**. **Buddha** tanítása (**buddhizmus**) szerint a szenvedésből a vágyakról való lemondás és a **nirvána** (a megvilágosodás, az újjászületések körforgásának vége) szabadít meg. **Kínában** a **taoizmus** a természettel való harmóniát tanította; a birodalmat a **nagy fal** védte a nomád népek támadásaitól.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A görög és római isteneket emberi tulajdonságokkal ruházták fel: **Zeusz** (Jupiter) az istenek királya, **Héra** a felesége, **Poszeidon** a tengeré, **Arész** a háborúé, **Aphrodité** a szerelemé, **Pallasz Athéné** (Minerva) a bölcsességé és Athén védője. Az istenek az **Olümposzon** laktak, és a rómaiaknál az állam és a császár tiszteletét kötelező állami kultusz is jelezte.',
        },
        {
          kind: 'compare',
          title: 'Politeizmus és monoteizmus',
          columns: ['Politeizmus', 'Monoteizmus (zsidó, keresztény)'],
          rows: [
            {
              label: 'Istenek száma',
              cells: ['sok, természeti erőkhöz kötött', 'egyetlen, mindenható Isten'],
            },
            {
              label: 'Ábrázolás',
              cells: ['szobrok, képek, emberi tulajdonságok', 'nem ábrázolják (a zsidóknál tilos)'],
            },
            { label: 'Etika', cells: ['kultusz, áldozat', 'Isten parancsai: erkölcsi törvény'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: bibliai szöveg (Tízparancsolat, evangéliumi példabeszéd, Pál levele): melyik vallásból való, mit tanít?',
            'Térkép: Betlehem, Jeruzsálem, Júdea, Konstantinápoly, a keresztény missziók útvonala.',
            'Fogalmak és évszámok: milánói rendelet (313), niceai zsinat (325), Jeruzsálem lerombolása (Kr. u. 70).',
            'Emelt: az ókori keleti vallások jellemzése (egyiptomi, mezopotámiai, indiai, kínai), politeizmus és monoteizmus összehasonlítása.',
          ],
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'Gyakori hiba: összekeverni a **313-as milánói rendeletet** (a kereszténység szabad vallás lett) a **380-as thesszalonikai rendelettel** (államvallás), és a **325-ös niceai zsinattal** (hitvallás). Nem Constantinus tette államvallássá!',
        },
        {
          kind: 'tip',
          text: 'Ha a zsidó és keresztény vallást kell összevetni: **közös** (egy Isten, Ószövetség, erkölcsi parancsok), **eltérő** (Jézus Messiás-e, Újszövetség, szertartások). A forráselemzésben keresd a kulcsszavakat (szövetség, megváltás, feltámadás).',
        },
      ],
      topicMatch: ['zsidó vallás', 'jézus', '=kereszténység'],
      cards: { subject: 'tortenelem', era: 'okor' },
      quiz: [
        {
          question: 'Ki kapta a Tízparancsolatot a hagyomány szerint?',
          options: ['Ábrahám', 'Dávid', 'Mózes', 'Salamon'],
          answer: 2,
          explanation:
            'Mózes kapta a Sínai-hegyen. Ábrahámmal kötött Isten szövetséget, Dávid király volt, Salamon a templomot építette.',
        },
        {
          question: 'Mi történt Kr. u. 70-ben?',
          options: [
            'A rómaiak lerombolták a jeruzsálemi templomot.',
            'A niceai zsinat összeült.',
            'Constantinus kiadta a milánói rendeletet.',
            'A rómaiak Pannóniát meghódították.',
          ],
          answer: 0,
          explanation:
            'A rómaiak elfoglalták Jeruzsálemet és lerombolták a templomot; a zsidók szétszóródtak (diaszpóra).',
        },
        {
          question: 'Mit mondott ki a milánói rendelet 313-ban?',
          options: [
            'A kereszténység államvallás lett.',
            'A keresztény vallás gyakorlása szabad.',
            'A keresztényeket üldözni kell.',
            'A birodalmat kettéosztják.',
          ],
          answer: 1,
          explanation:
            'A milánói rendelet vallásszabadságot adott a keresztényeknek; államvallás csak a 4. század végén lett.',
          emelt: true,
        },
        {
          question: 'Ki volt a kereszténység legnagyobb hatású hittérítője (misszionáriusa)?',
          options: ['Szent Péter', 'Szent Pál', 'Constantinus', 'Mária'],
          answer: 1,
          explanation:
            'Pál több útján is hirdette a hitet a Római Birodalom városaiban, a nem zsidóknak is.',
        },
        {
          question: 'Mi jellemezte a politeista vallásokat?',
          options: [
            'Egyetlen, láthatatlan Istenben hittek.',
            'Több istent tiszteltek, akik természeti erőkhöz és az élet területeihez kötődtek.',
            'Nem ismertek szent könyvet vagy szertartást.',
            'Csak a zsidóknál léteztek.',
          ],
          answer: 1,
          explanation:
            'A politeizmus (többistenhit) a természeti erők és az élet területeinek isteneit tisztelte; az egyetlen Istenben hit a monoteizmus.',
        },
        {
          question:
            'Melyik isten kapcsolódik az egyiptomi alvilághoz és a halottak bíráskodásához?',
          options: ['Ré', 'Oziris', 'Arész', 'Poszeidon'],
          answer: 1,
          explanation:
            'Oziris az alvilág ura és a halottak bírája. Ré a napisten, Arész és Poszeidon görög istenek.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Zsidó vallás', url: wiki('Judaizmus') },
        { label: 'Wikipédia: Kereszténység', url: wiki('Kereszténység története') },
        { label: 'Wikipédia: Milánói ediktum', url: wiki('Milánói ediktum') },
      ],
    },
  ],
};

export default unit;
