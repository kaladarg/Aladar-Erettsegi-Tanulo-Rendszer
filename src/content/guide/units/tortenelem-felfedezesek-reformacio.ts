import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 3.1 (A földrajzi felfedezések és következményeik) and 3.2 (A reformáció és a katolikus megújulás). */
const unit: GuideUnit = {
  id: 'felfedezesek-reformacio',
  subject: 'tortenelem',
  order: 28,
  title: 'Földrajzi felfedezések, korai kapitalizmus, reformáció és katolikus megújulás',
  requirementRef:
    '3.1 A földrajzi felfedezések és következményeik, 3.2 A reformáció és a katolikus megújulás Európában és Magyarországon',
  intro:
    'Hogyan lett Európa a világ gazdasági központja, és hogyan szakadt kettő a nyugati kereszténység? A portugál és spanyol felfedezések, a korai kapitalizmus, a gyarmatosítás, Luther és Kálvin tanai, a jezsuiták és a barokk.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (3. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'felfedező',
        'újkor',
        'gyarmat',
        'világkereskedelem',
        'manufaktúra',
        'tőke',
        'kapitalizmus',
        'infláció',
        'tőkés',
        'bérmunkás',
        'bank',
        'tőzsde',
        'részvény',
        'örökös jobbágyság',
        'reformáció',
        'protestáns',
        'evangélikus',
        'református',
        'anglikán',
        'unitárius',
        'vallási türelem',
        'ellenreformáció',
        'jezsuita',
        'katolikus megújulás',
        'barokk',
      ],
      emelt: ['presbiter', 'predesztináció', 'rekatolizáció', 'merkantilizmus'],
    },
    people: {
      kozep: [
        'Kolumbusz',
        'Vasco da Gama',
        'Magellán',
        'V. Károly',
        'Luther',
        'Kálvin',
        'Loyolai (Szent) Ignác',
        'Károli Gáspár',
        'Pázmány Péter',
      ],
      emelt: ['Méliusz Juhász Péter', 'Misztótfalusi Kis Miklós'],
    },
    dates: {
      kozep: [
        '1492 Amerika felfedezése',
        '1492-től az újkor',
        '1517 a reformáció kezdete',
        '1545 a tridenti zsinat kezdete',
      ],
      emelt: ['1555 augsburgi vallásbéke'],
    },
    places: {
      kozep: ['India', 'Spanyolország'],
      emelt: ['Genf', 'Nagyszombat'],
    },
  },
  pages: [
    {
      id: 'portugal-spanyol-felfedezesek',
      subject: 'tortenelem',
      unitId: 'felfedezesek-reformacio',
      title: 'A portugál és spanyol felfedezések',
      level: 'kozep',
      requirement: {
        kozep: 'A portugál és spanyol felfedezések',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A 15. században a **portugálok** Afrika nyugati partja mentén keresték a tengeri utat **Indiába**; **Vasco da Gama** 1498-ban érte el az indiai partot.',
            '**Kolumbusz** a spanyol királyi pár megbízásából nyugat felé indult, és **1492-ben** új földrészre ért: ez **Amerika felfedezése**.',
            '**Magellán** expedíciója (1519–1522) körbehajózta a Földet.',
            'A felfedezések okai: a **fűszerek és az arany** utáni vágy, az **oszmán hatalom** miatt nehezebb keleti kereskedelem, új hajózási **technika**, az államok és a vallás támogatása.',
            'Következmény: a világgazdasági súlypont a **Földközi-tengerről az Atlanti-óceánra** került, megindult a **gyarmatosítás** és a **világkereskedelem**.',
            'A hagyományos periodizáció szerint **1492-től az újkor** kezdődik.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'felfedező',
              text: 'Olyan utazó, aki az európaiak számára ismeretlen területet ért el vagy térképezett fel; a korszakban gyakran állami vagy uralkodói megbízásból indult.',
            },
            {
              term: 'újkor',
              text: 'A történelem korszaka, amelyet a hagyományos felosztás 1492-től (Amerika felfedezésétől) számít.',
            },
            {
              term: 'gyarmat',
              text: 'Egy államnak alávetett, tőle gazdaságilag és politikailag függő terület, amelyet az anyaország saját érdekében használ ki.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért indultak útra az európaiak?' },
        {
          kind: 'text',
          text: 'A késő középkorban Európa nagyon sokat vásárolt Keletről: **fűszereket** (bors, fahéj, szegfűszeg), selymet, drágaköveket. Az áru hosszú szárazföldi és tengeri láncon, arab és olasz kereskedők kezén jutott el a nyugati piacokra, ezért drága volt. 1453-ban az **oszmánok elfoglalták Konstantinápolyt**, és a keleti kereskedelem útvonalai az ő ellenőrzésük alá kerültek, így az európai uralkodók közvetlen tengeri utat kerestek.',
        },
        {
          kind: 'keypoints',
          title: 'A felfedezések feltételei',
          items: [
            '**Gazdasági ok**: a fűszerek, az arany és az ezüst megszerzése, a közvetítő kereskedők kiiktatása.',
            '**Technikai feltétel**: a **karavella** (gyors, az óceánon is használható vitorlás), az iránytű, a csillagászati szögmérő, pontosabb térképek.',
            '**Politikai feltétel**: az erős, központosított **portugál** és **spanyol** királyság pénzzel és hajókkal támogatta az útvonalakat.',
            '**Vallási és szellemi ok**: a keresztény hit terjesztése, a reneszánsz tudásvágy és világkép.',
          ],
        },
        { kind: 'heading', text: 'A portugál út Indiába' },
        {
          kind: 'text',
          text: 'A kis ország, **Portugália** kezdte a sort. A 15. században lépésről lépésre haladtak előre Afrika nyugati partja mentén. **Bartolomeu Dias** 1488 körül megkerülte Afrika déli csúcsát (a Jóreménység fokát). **Vasco da Gama** 1497–98-ban ezen az úton eljutott **Indiába** (Kalikutba), és értékes fűszerrakománnyal tért haza. A portugálok a part mentén kereskedelmi támaszpontokat (erődített kikötőket) építettek, és megszerezték a fűszerkereskedelem nagy részét. Később Brazília is portugál birtok lett.',
        },
        { kind: 'heading', text: 'Kolumbusz és a spanyol felfedezések' },
        {
          kind: 'text',
          text: '**Kolumbusz** genovai származású hajós volt. Úgy gondolta, a Föld gömbölyű, ezért nyugat felé is el lehet jutni Ázsiába. A portugál udvar elutasította, de a **spanyol királyi pár** (Izabella és Ferdinánd) támogatta. **1492 őszén** három hajóval elérte a Bahama-szigetek egyikét. Kolumbusz haláláig azt hitte, Ázsia partjait találta meg, ezért a bennszülötteket „indiánoknak” hívták. Hamarosan kiderült, hogy egy ismeretlen **új földrészről** van szó.',
        },
        {
          kind: 'text',
          text: 'A két katolikus hatalom vitáját a pápa közvetítésével kötött egyezség rendezte: a Föld egy képzeletbeli vonal mentén **portugál és spanyol érdekszférára** oszlott (tordesillasi egyezmény, 1494). Ezért lett Brazília portugál, a többi amerikai terület nagyobb része spanyol.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1488 körül', text: 'Dias megkerüli Afrika déli csúcsát' },
            { date: '1492', text: 'Kolumbusz eléri Amerikát' },
            { date: '1494', text: 'a tordesillasi egyezmény: portugál–spanyol felosztás' },
            { date: '1497–1498', text: 'Vasco da Gama útja Indiába' },
            { date: '1519–1522', text: 'Magellán expedíciója: a Föld körülhajózása' },
          ],
        },
        {
          kind: 'text',
          text: '**Magellán** portugál származású, de spanyol szolgálatban álló kapitány volt. 1519-ben indult el nyugat felé, és áthajózott a később róla elnevezett szoroson a Csendes-óceánra. Magellán a Fülöp-szigeteken életét vesztette (1521), de egyik hajója, Elcano vezetésével, 1522-ben visszatért Spanyolországba: ez bizonyította, hogy a Föld **gömb alakú**, és az óceánok összefüggnek.',
        },
        { kind: 'heading', text: 'A spanyol hódítók' },
        {
          kind: 'text',
          text: 'Spanyol kalandorok (konkvisztádorok) kis csapatokkal, lőfegyverekkel, lovakkal és az őslakosok közötti ellentétek kihasználásával meghódították Amerika két nagy birodalmát. **Cortés** 1519–1521 között az **aztékokat** (a mai Mexikó), **Pizarro** az 1530-as évek elején az **inkákat** (a mai Peru) győzte le. A betelepülő spanyolok gyarmati igazgatást építettek ki, az őslakosokat kényszermunkára fogták, és terjesztették a katolikus vallást.',
        },
        { kind: 'heading', text: 'A felfedezések következményei' },
        {
          kind: 'keypoints',
          items: [
            '**Gazdasági súlypont-áthelyeződés**: az olasz kereskedővárosok helyett az **Atlanti-óceán partvidéke** (Lisszabon, Sevilla, később Antwerpen, Amszterdam, London) lett az európai kereskedelem központja.',
            '**Világkereskedelem**: az áruk, a pénz és a hajózás egyetlen, a földrészeket összekötő hálózatot alkotott.',
            '**Amerikai nemesfém**: a spanyolok hatalmas mennyiségű **ezüstöt** és aranyat szállítottak haza; ez áremelkedést (**árforradalom**) okozott.',
            '**Új növények és állatok**: Amerikából a burgonya, a kukorica, a paradicsom, a dohány, a kakaó jutott Európába; Európából a ló, a szarvasmarha, a búza és a cukornád ment Amerikába.',
            '**Az őslakosok pusztulása**: a kényszermunka, az erőszak és a behurcolt betegségek miatt az amerikai népesség jelentősen megfogyatkozott.',
            '**Szellemi hatás**: a világról alkotott kép bővült, a térképészet, a csillagászat és a természettudomány fejlődött.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (Kolumbusz naplója, Vasco da Gama vagy Magellán útjának leírása, térkép): ki, mikor, merre indult, mi volt a célja?',
            'Térképen: a három nagy felfedezőút nyomvonala, India, Spanyolország, Amerika.',
            'Rövid kifejtés: miért éppen Portugália és Spanyolország kezdte a felfedezéseket, és mi lett a következménye?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Kolumbusz Indiába érkezett vagy hogy ő kerülte meg először Afrikát. A helyes: Kolumbusz (spanyol szolgálatban, nyugat felé) Amerikát érte el 1492-ben, Vasco da Gama (portugál, Afrikát megkerülve) jutott el Indiába 1498-ban, Magellán expedíciója pedig körbehajózta a Földet.',
        },
        {
          kind: 'tip',
          text: 'A „következmények” kérdésre mindig három szinten válaszolj: gazdaság (nemesfém, árforradalom, világkereskedelem), társadalom (őslakosok sorsa, gyarmatosítás), szellemi élet (új világkép). Az évszámokból elég az 1492 és az 1498, a többit a kronológiai sorrend alapján tudod elhelyezni.',
        },
      ],
      topicMatch: ['felfedezések'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question:
            'Melyik felfedező jutott el először tengeri úton Indiába Afrika megkerülésével?',
          options: ['Kolumbusz', 'Magellán', 'Vasco da Gama', 'Cortés'],
          answer: 2,
          explanation:
            'Vasco da Gama portugál hajósként 1498-ban Kalikutba ért. Kolumbusz Amerikát érte el, Magellán expedíciója a Föld körülhajózását végezte, Cortés az azték birodalmat hódította meg.',
        },
        {
          question: 'Mit jelent a 1492-es év a történelemben?',
          options: [
            'Kolumbusz elérte Amerikát, a hagyományos felosztás szerint ekkor kezdődik az újkor',
            'Az oszmánok elfoglalták Konstantinápolyt',
            'Luther kiszögezte a 95 tételt',
            'Magellán körbehajózta a Földet',
          ],
          answer: 0,
          explanation:
            '1492-ben Kolumbusz spanyol megbízásból elérte Amerikát; az újkor kezdetét hagyományosan ehhez az évhez kötjük. Konstantinápoly 1453-ban esett el, Luther fellépése 1517, Magellán útja 1519–1522.',
        },
        {
          question: 'Melyik NEM tartozik a felfedezések kiváltó okai közé?',
          options: [
            'A fűszerek és az arany megszerzése',
            'A keleti szárazföldi kereskedelem megdrágulása és nehezebbé válása',
            'A karavella és az iránytű elterjedése',
            'A gőzgép feltalálása',
          ],
          answer: 3,
          explanation:
            'A gőzgép a 18. század vívmánya. A felfedezések okai a gazdasági vágy, az oszmán hatalom miatt nehezebb keleti út, a hajózási technika fejlődése és az államok támogatása voltak.',
        },
        {
          question: 'Mi az árforradalom?',
          options: [
            'A kormány hirtelen árszabályozása',
            'Az árak tartós és nagymértékű emelkedése a 16. században, részben az amerikai nemesfém beáramlása miatt',
            'A gabonaárak zuhanása a 17. században',
            'A fűszerek árának csökkenése az indiai út megnyitása után',
          ],
          answer: 1,
          explanation:
            'Az amerikai ezüst Európába áramlása és a népességnövekedés a 16. században tartós áremelkedést okozott. Ezt nevezzük árforradalomnak.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Földrajzi felfedezések', url: wiki('Földrajzi felfedezések') },
        { label: 'Wikipédia: Kolumbusz Kristóf', url: wiki('Kolumbusz Kristóf') },
        { label: 'Wikipédia: Vasco da Gama', url: wiki('Vasco da Gama') },
      ],
    },
    {
      id: 'korai-kapitalizmus-arforradalom',
      subject: 'tortenelem',
      unitId: 'felfedezesek-reformacio',
      title: 'A korai kapitalizmus: árforradalom, manufaktúra, bank és tőzsde',
      level: 'kozep',
      requirement: {
        kozep:
          'A korai kapitalizmus (árforradalom, manufaktúrák, bankok kialakulása és tőzsde, a jobbágyrendszer átalakulása)',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A felfedezések és az amerikai ezüst után a 16. században **árforradalom** zajlott: az árak jelentősen emelkedtek.',
            'A pénzzel rendelkező **tőkések** pénzt fektettek be vállalkozásba. A **manufaktúrában** sok bérmunkás dolgozott egy műhelyben, munkamegosztással, még kézi szerszámokkal.',
            'Új pénzügyi intézmények jöttek létre: **bankok**, **tőzsde** (Antwerpen, Amszterdam, London) és **részvénytársaságok**.',
            'Nyugat-Európában a jobbágyság fokozatosan megszűnt (bérmunka, bérleti rendszer), **Kelet-Európában** viszont a földesúri gabonatermelés miatt **erősödött** a függőség. Magyarországon az **örökös jobbágyság** lett törvényileg rögzített.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'manufaktúra',
              text: 'Kézi szerszámokkal dolgozó, munkamegosztáson alapuló, nagyobb üzem. A tulajdonos (tőkés) bérmunkásokat foglalkoztat.',
            },
            {
              term: 'tőke',
              text: 'A vállalkozásba fektetett pénz vagy vagyon, amely nyereséget hoz.',
            },
            {
              term: 'kapitalizmus',
              text: 'Gazdasági rendszer: a termelőeszközök magántulajdonban vannak, a termelés a piacra és a nyereségre épül, a munkaerő bérmunka.',
            },
            {
              term: 'bank',
              text: 'Pénzügyi intézmény, amely letéteket fogad el, hitelt nyújt és pénzforgalmat bonyolít.',
            },
            {
              term: 'tőzsde',
              text: 'Nyilvános, szervezett piac, ahol szigorú szabályok szerint áruval, később értékpapírral kereskednek. Először Antwerpenben nyílt (16. század), majd Amszterdamban és Londonban (17. század).',
            },
            {
              term: 'részvény',
              text: 'Értékpapír, amely a vállalat egy részének tulajdonjogát igazolja, és a nyereségből osztalékot hoz.',
            },
            {
              term: 'infláció',
              text: 'A pénz értékvesztése, az árak általános és tartós emelkedése.',
            },
            {
              term: 'merkantilizmus',
              text: 'Az a gazdaságpolitika, amely szerint az állam gazdagsága a nemesfém-készlettől függ; ezért az államnak ösztönöznie kell a kivitelt, korlátoznia a behozatalt (védővámok), támogatnia a manufaktúrákat és a gyarmatokat.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az árforradalom' },
        {
          kind: 'text',
          text: 'A 16. században Európában hosszú ideig emelkedtek az árak, a gabonáé és a ruhaneműé különösen. Ennek több oka volt: a **népesség nőtt**, tehát nőtt a kereslet; az amerikai bányákból (főleg Mexikóból és Peruból) **rengeteg ezüst** áramlott Spanyolországba, és onnan szétterjedt Európában, tehát több pénz jutott ugyanannyi árura. A folyamatot **árforradalomnak** hívjuk.',
        },
        {
          kind: 'text',
          text: 'Az infláció nem mindenkit sújtott egyformán. A **fix járadékból élő** földesurak és a bérből élők reálértéke csökkent, a kereskedők, a **vállalkozók** és az árut piacra vivő termelők viszont nyertek.',
        },
        { kind: 'heading', text: 'Manufaktúra és bérmunka' },
        {
          kind: 'text',
          text: 'A középkori céhes ipar szabályokkal korlátozta a termelést és a versenyt. A kapitalista vállalkozó, a **tőkés**, ezzel szemben nagyobb műhelyt (**manufaktúrát**) alapított. Itt az egyes munkások a termék különböző részműveletét végezték, tehát **munkamegosztás** volt. A munkások **bérmunkások** voltak: nem a termelőeszköz tulajdonosai, hanem munkaerejüket adták el. Manufaktúrák főleg a textiliparban, a bányászatban, a hajóépítésben és a fegyvergyártásban jöttek létre. A gép még nem játszott szerepet: a termelés kézi szerszámokkal folyt, ezért ez különbözik a 18–19. századi gyáripartól.',
        },
        { kind: 'heading', text: 'Bankok, tőzsde, részvénytársaságok' },
        {
          kind: 'text',
          text: 'A távolsági kereskedelem és a felfedezőutak nagy tőkét igényeltek. Itália és Dél-Németország városaiban gazdag **bankárcsaládok** alakultak ki. A híres **Fuggerek** (Augsburg) a Habsburg-uralkodók hitelezői voltak, és magyarországi bányákban is érdekeltek voltak (Thurzó-Fugger vállalat). A kereskedők a váltót, a hitelt és a biztosítást használták. A tőzsdén egyre fontosabbá váltak az értékpapírok. A **részvénytársaság** egy új cégforma: sok befektető teszi össze a pénzét, és osztozik a nyereségben és a kockázatban. Híres példa a **Holland Kelet-indiai Társaság** (1602).',
        },
        {
          kind: 'compare',
          title: 'Középkori és korai kapitalista gazdaság',
          columns: ['Középkori gazdaság', 'Korai kapitalizmus'],
          rows: [
            { label: 'Ipar', cells: ['céhes kisüzem, kézműves', 'manufaktúra, munkamegosztás'] },
            { label: 'Munkaerő', cells: ['családi, céhlegény', 'bérmunkás'] },
            { label: 'Pénz', cells: ['kevés pénz, természetbeni járadék', 'bank, hitel, tőzsde'] },
            { label: 'Piac', cells: ['helyi, regionális', 'világkereskedelem'] },
          ],
        },
        { kind: 'heading', text: 'A jobbágyrendszer átalakulása' },
        {
          kind: 'text',
          text: 'A gazdasági átalakulás Európa két felén ellentétes irányba hatott. **Nyugat-Európában** (Anglia, Hollandia) a pénzgazdaság terjedésével a földesurak pénzjáradékot szedtek, a jobbágyok egy része szabaddá vált, vagy bérlővé, béresmunkássá lett. **Kelet-Európában** (Lengyelország, Poroszország, Magyarország) a nyugati városok **gabonát, marhát, bort** vásároltak. A földesurak ezért saját nagybirtokot (majorságot) létesítettek, hogy a terményt eladják. A földet a jobbágyok kötelező **robotmunkájával** műveltették, ezért a függőség növekedett.',
        },
        {
          kind: 'text',
          text: 'Magyarországon az **1514-es Dózsa-parasztháború** leverése után a törvények a jobbágyokat **örökös jobbágysággá** tették: a szabad költözés joga megszűnt, a jobbágy a földesúr földjéhez volt kötve. A 16–17. században a robot és a terhek tovább nőttek, a földesúri gazdálkodás pedig kiterjedt.',
        },
        {
          kind: 'heading',
          text: 'Merkantilizmus',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **merkantilizmus** az abszolutista államok gazdaságpolitikája volt (17. század). Fő elvei: az ország gazdagsága a nemesfém; a **kivitelt** kell növelni, a **behozatalt** korlátozni (védővámok); az állam támogassa a manufaktúrákat és a gyarmatokat, mert azok nyersanyagot adnak és piacot jelentenek. Anglia 1651-es **hajózási törvénye** (navigációs akta) úgy rendelkezett, hogy a gyarmatok árui csak angol hajókon szállíthatók, ezzel a holland közvetítő kereskedelmet akarta visszaszorítani.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalommagyarázat: árforradalom, manufaktúra, tőzsde, részvény, bank, infláció.',
            'Összehasonlítás: a céhes ipar és a manufaktúra, vagy a nyugat- és kelet-európai jobbágyság.',
            'Forrás: gazdasági szöveg vagy ábra (az árak alakulása a 16. században), a tulajdonságok felismerése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a manufaktúrát és a gyárat összekeverni. A manufaktúrában kézi szerszámokkal, munkamegosztással dolgoznak, a gyárban gép (gőzgép) hajtja a termelést. Másik tipikus tévedés: azt gondolni, hogy a jobbágyság mindenhol megszűnt. Kelet-Európában éppen erősödött.',
        },
        {
          kind: 'tip',
          text: 'Az „ok–következmény” gondolatmenet így épül fel: felfedezések → amerikai ezüst → árforradalom → a pénzt befektetők gazdagodnak, a rögzített járadékból élők szegényednek → új üzemformák és pénzügyi intézmények. Kelet-Európában a nyugati gabonaigény a földesúri gazdálkodást és a robotot erősítette.',
        },
      ],
      topicMatch: ['kapitalizmus'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Mi jellemzi a manufaktúrát?',
          options: [
            'A termelést gőzgép hajtja',
            'Kézi szerszámokkal, munkamegosztással dolgozó üzem, bérmunkásokkal',
            'A céh szabályozza a termelést és a munkások számát',
            'Egyetlen mester dolgozik egyedül',
          ],
          answer: 1,
          explanation:
            'A manufaktúrában a bérmunkások kézi szerszámokkal, munkamegosztással dolgoznak. A gőzgép a gyárra jellemző, a céhek és az egyéni mesterek pedig a középkori iparra.',
        },
        {
          question: 'Hol nyílt az első tőzsde a 16. században?',
          options: ['Amszterdamban', 'Londonban', 'Budapesten', 'Antwerpenben'],
          answer: 3,
          explanation:
            'A tőzsde először Antwerpenben nyílt (16. század), majd a 17. században Amszterdamban és Londonban. Budapesten csak 1864-ben nyílt tőzsde.',
        },
        {
          question: 'Mi történt a jobbágyrendszerrel Kelet-Európában a korai újkorban?',
          options: [
            'Megszűnt, mert mindenki bérmunkás lett',
            'Nem változott, mert nem volt gabonakereskedelem',
            'A jobbágyok kapták meg a földesurak földjeit',
            'Erősödött: a földesurak majorságot hoztak létre, és nőtt a robot',
          ],
          answer: 3,
          explanation:
            'A nyugati városok gabona- és marhakereslete miatt a földesurak saját gazdaságot kezdtek, ehhez a jobbágyok robotjára építettek, ezért Kelet-Európában erősödött a függőség. Nyugaton a jobbágyság gyengült.',
        },
        {
          question: 'Melyik a merkantilizmus egyik fő elve?',
          options: [
            'A szabad verseny, az állam teljes távolmaradása a gazdaságból',
            'A behozatal növelése és a vámok eltörlése',
            'A kivitel növelése, a behozatal korlátozása és a manufaktúrák állami támogatása',
            'A mezőgazdaság kizárólagos támogatása az ipar rovására',
          ],
          answer: 2,
          explanation:
            'A merkantilizmus a nemesfém-felhalmozást és a pozitív külkereskedelmi mérleget tartotta célnak, ezért védővámokat vezetett be, és támogatta a manufaktúrákat és a gyarmatokat.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Árforradalom', url: wiki('Árforradalom') },
        { label: 'Wikipédia: Manufaktúra', url: wiki('Manufaktúra') },
        { label: 'Wikipédia: Merkantilizmus', url: wiki('Merkantilizmus') },
      ],
    },
    {
      id: 'gyarmatositas-vilagkereskedelem-magyar-gazdasag',
      subject: 'tortenelem',
      unitId: 'felfedezesek-reformacio',
      title: 'Gyarmatosítás, világkereskedelem és Magyarország gazdasága (16–17. század)',
      level: 'emelt',
      requirement: {
        emelt:
          'A gyarmatosítás a 16–17. században, a világkereskedelem; Magyarország gazdasága az európai munkamegosztásban (16–17. század)',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **spanyolok és portugálok** után a 17. században a **hollandok, angolok és franciák** is gyarmatokat szereztek Amerikában, Ázsiában, Afrikában.',
            'Az amerikai **ültetvényeken** (cukornád, dohány) az őslakosok helyett egyre inkább **afrikai rabszolgák** dolgoztak. Kialakult az **atlanti rabszolgakereskedelem** és a háromszög alakú kereskedelem.',
            'A **világkereskedelmet** a nagy kereskedelmi társaságok (például Holland Kelet-indiai Társaság) irányították, a gyarmatok nyersanyagot és nemesfémet szállítottak az anyaországnak.',
            'Magyarország a **nyugat-európai munkamegosztásban** nyersanyag- és mezőgazdasági termékeket (marha, bor, réz, nemesfém) szállított, ipari termékeket vásárolt.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A spanyol és a portugál gyarmatbirodalom' },
        {
          kind: 'text',
          text: 'Spanyolország az amerikai birtokokat **királyi igazgatás** alá vonta, helytartók (alkirályok) vezették. Az őslakosokat a gyarmatosítók munkára kényszerítették (**encomienda**: az őslakosok munkáját a gyarmatos kapta), a legfontosabb haszon a mexikói és perui **ezüstbányák** termelése volt. A spanyol királyság az ezüstből háborúkat finanszírozott, de saját iparát nem fejlesztette eléggé, ezért a haszon jelentős része más országokba is eljutott. **Portugália** főként part menti **kereskedőtelepeket** tartott fenn Afrikában és Ázsiában, Brazíliában pedig cukorültetvényeket létesített.',
        },
        { kind: 'heading', text: 'Holland, angol és francia gyarmatosítás' },
        {
          kind: 'text',
          text: 'A 17. században a spanyol–portugál egyeduralom megtört. A **Holland Kelet-indiai Társaság** (1602) az indonéz szigetvilágban szerzett fűszerkereskedelmi központot, a hollandok kereskedelmi flottája Európa legnagyobbja volt, Amszterdam a világkereskedelem pénzügyi központjává vált. Az **angolok** 1607-ben alapították Jamestownt (Virginia), 1620-ban a vallásuk miatt üldözött **puritánok** Új-Angliában telepedtek le (Mayflower). Az angol **Kelet-indiai Társaság** már 1600-ban megalakult. A franciák Kanadában (Québec, 1608) építettek ki gyarmatot. A telepesgyarmatokon az európaiak letelepedtek, az ültetvényes és kereskedelmi gyarmatokon pedig az anyaország kereskedői és tisztviselői irányították a gazdaságot.',
        },
        { kind: 'heading', text: 'Az ültetvények és a rabszolgakereskedelem' },
        {
          kind: 'text',
          text: 'A Karib-térség és Brazília ültetvényein (cukornád, dohány, később gyapot) hatalmas munkaerőigény keletkezett, de az őslakosság nagyon megfogyatkozott. A telepesek ezért **Afrikából hurcoltak rabszolgákat**. A **háromszög alakú kereskedelem** lényege: Európából fegyvert, textilt szállítottak Afrikába, onnan rabszolgákat Amerikába, Amerikából pedig cukrot, dohányt, nemesfémet Európába. A rabszolgák milliói szenvedtek el embertelen körülményeket, és az afrikai társadalmakat is súlyosan károsította az emberkereskedelem.',
        },
        {
          kind: 'compare',
          title: 'Gyarmatbirodalmak a 16–17. században',
          columns: ['Spanyol–portugál', 'Holland–angol–francia'],
          rows: [
            { label: 'Időszak', cells: ['16. század fő ereje', '17. század'] },
            {
              label: 'Jellemző',
              cells: [
                'nemesfém, királyi igazgatás, kereskedőtelepek',
                'kereskedelmi társaságok, telepesgyarmatok, ültetvények',
              ],
            },
            {
              label: 'Fő haszon',
              cells: ['ezüst, arany, fűszer, cukor', 'fűszer, dohány, cukor, prémek, kereskedelem'],
            },
          ],
        },
        { kind: 'heading', text: 'Világkereskedelem' },
        {
          kind: 'text',
          text: 'A gyarmatosítással első ízben jött létre a **világkereskedelem**: az amerikai ezüst Ázsiába is eljutott, és ott is fizetőeszközként szolgált, az ázsiai fűszer, selyem és porcelán Európába. A kereskedelem súlypontja a **nyugat-európai Atlanti-parti államokba** (Hollandia, Anglia, Franciaország) került. Az európai áruforgalom ellenőrzése a nagy kereskedelmi társaságok kezébe jutott.',
        },
        { kind: 'heading', text: 'Magyarország gazdasága az európai munkamegosztásban' },
        {
          kind: 'text',
          text: 'A korai újkorban kialakult egy **nemzetközi munkamegosztás**: Nyugat-Európa (főleg Hollandia, Anglia) a fejlett kereskedelem és ipar központja lett, Kelet- és Közép-Európa pedig **nyersanyagot és mezőgazdasági terméket** szállított nyugatra, és ipari terméket vásárolt onnan. Magyarország is ebbe a rendszerbe illeszkedett.',
        },
        {
          kind: 'keypoints',
          title: 'Mit adott és mit vett Magyarország?',
          items: [
            '**Kivitel**: a híres **magyar szarvasmarha** (a nagy gulyák Bécsbe, Nyugat-Németország és Itália városaiba hajtva), **bor** (például tokaji), **réz és nemesfém** a felvidéki bányákból.',
            '**Behozatal**: **iparcikkek**, főleg posztó és szövet, fegyver, luxuscikkek.',
            '**Gazdasági hatás**: a marhakereskedelem a **mezővárosokat** (például Debrecen, Kecskemét, Cegléd) gazdaggá tette, a földesurak és a jobbágyok egy része piacra termelt. A török hódoltság és a háborúk ugyanakkor gátolták a fejlődést, a városi ipar gyenge maradt.',
          ],
        },
        {
          kind: 'text',
          text: 'A magyar gazdaság tehát **kiszolgáltatott, nyersanyagszállító** szerepet töltött be, ez a függő helyzet a későbbi évszázadokban is éreztette hatását. A nyugati országok ezzel szemben iparosodtak és tőkét halmoztak fel.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Esszé vagy rövid kifejtés: a gyarmatosítás fő szakaszai és következményei, a háromszög alakú kereskedelem működése.',
            'Összehasonlítás: spanyol–portugál és holland–angol gyarmatosítás.',
            'Magyar gazdaság: milyen termékeket szállított ki és hozott be Magyarország a 16–17. században? Milyen munkamegosztásba illeszkedett?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a „gyarmatosítás” szó alatt csak a spanyol–portugál terjeszkedést érteni, vagy a háromszög alakú kereskedelem irányát összekeverni. A rabszolgák Afrikából Amerikába kerültek, nem fordítva.',
        },
        {
          kind: 'tip',
          text: 'Magyarország gazdaságáról egyetlen mondatban: „Nyersanyag- és mezőgazdasági terméket szállított Nyugatra, ipari terméket hozott be, így a nyugat-európai munkamegosztás függő, kiszolgáltatott résztvevője volt.” Ehhez mondj két konkrét példát (marha, réz) és egy következményt (mezővárosok fellendülése).',
        },
      ],
      topicMatch: ['világkereskedelem'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Mit szállítottak a háromszög alakú kereskedelem során Afrikából Amerikába?',
          options: ['Ezüstöt', 'Dohányt', 'Rabszolgákat', 'Gabonát'],
          answer: 2,
          explanation:
            'Afrikából rabszolgákat szállítottak az amerikai ültetvényekre, Amerikából cukrot, dohányt és nemesfémet Európába, Európából pedig iparcikkeket Afrikába.',
        },
        {
          question: 'Melyik társaságot alapították 1602-ben a hollandok?',
          options: ['Holland Kelet-indiai Társaság', 'Hanza', 'Fugger-bank', 'Jezsuita rend'],
          answer: 0,
          explanation:
            'A Holland Kelet-indiai Társaság 1602-ben jött létre, és az ázsiai fűszerkereskedelmet irányította. A Hanza középkori városszövetség, a Fuggerek augsburgi bankárok, a jezsuiták szerzetesrend.',
        },
        {
          question: 'Mit szállított ki főként Magyarország a 16–17. században?',
          options: [
            'Iparcikkeket és fegyvereket',
            'Szarvasmarhát, bort, rezet és nemesfémet',
            'Textíliát és luxuscikkeket',
            'Fűszereket és selymet',
          ],
          answer: 1,
          explanation:
            'Magyarország mezőgazdasági terméket és nyersanyagot (marha, bor, réz, nemesfém) szállított Nyugatra, az iparcikkeket behozta.',
        },
        {
          question:
            'Miért nevezzük Magyarország helyzetét „kiszolgáltatottnak” a nemzetközi munkamegosztásban?',
          options: [
            'Mert a magyar áruk drágábbak voltak a nyugatinál',
            'Mert nyersanyagot adott el és ipari terméket vásárolt, a fejlett ipar és tőkefelhalmozás másutt zajlott',
            'Mert tilos volt a külkereskedelem',
            'Mert Magyarország saját gyarmatokkal rendelkezett',
          ],
          answer: 1,
          explanation:
            'Nyersanyagot és mezőgazdasági terméket exportálva a fejlett ipari központok mögött maradt. A haszon és a tőkefelhalmozás nagy része Nyugat-Európában keletkezett.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gyarmatosítás', url: wiki('Gyarmatosítás') },
        {
          label: 'Wikipédia: Atlanti rabszolga-kereskedelem',
          url: wiki('Atlanti rabszolga-kereskedelem'),
        },
        {
          label: 'Wikipédia: Magyarország gazdaságtörténete',
          url: wiki('Magyarország gazdaságtörténete'),
        },
      ],
    },
    {
      id: 'reformacio-luther-kalvin',
      subject: 'tortenelem',
      unitId: 'felfedezesek-reformacio',
      title: 'A reformáció: Luther, Kálvin és a protestáns egyházak',
      level: 'kozep',
      requirement: {
        kozep:
          'A reformáció, a protestáns egyházak megszerveződése és a protestantizmus elterjedése Európában és Magyarországon',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1517**: **Luther Márton** wittenbergi szerzetes és tanár fellépése a **búcsúcédulák** ellen. Ez a reformáció kezdete.',
            'Luther tanai: az ember **hit által** üdvözül, a hit forrása a **Biblia**, és a papság nem kiváltságos. A Bibliát a nép nyelvére fordították.',
            '**Kálvin János** Genfben szervezte meg a másik nagy irányzatot. Tanítása szerint Isten előre elrendeli az ember sorsát (**predesztináció**), az egyházat választott **presbiterek** vezetik.',
            'Kialakultak a **protestáns egyházak**: evangélikus (lutheránus), református (kálvinista), **anglikán**, **unitárius**.',
            'Magyarországon a lutheri tanok a városi németek között, a kálvini irány a magyarlakta területeken terjedt el. Fordítás: **Károli Gáspár** (Vizsoly, 1590).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'reformáció',
              text: 'A 16. századi egyházújító mozgalom, amelynek eredménye a nyugati kereszténység szétszakadása katolikus és protestáns egyházakra.',
            },
            {
              term: 'protestáns',
              text: 'Az újonnan alakult, a pápai fennhatóságot elutasító egyházak híve.',
            },
            {
              term: 'evangélikus',
              text: 'Luther tanításán alapuló egyház.',
            },
            {
              term: 'református',
              text: 'Kálvin (és Zwingli) tanításán alapuló egyház.',
            },
            {
              term: 'anglikán',
              text: 'Az angol állami egyház, amelynek VIII. Henrik óta az uralkodó a feje.',
            },
            {
              term: 'unitárius',
              text: 'A Szentháromságot tagadó irányzat; Erdélyben szerveződött egyházzá Dávid Ferenc vezetésével (1568). Jelmondata: „Egy az Isten!”',
            },
            {
              term: 'vallási türelem',
              text: 'A különböző vallások szabad gyakorlásának elfogadása. Erdélyben a tordai országgyűlés (1568) mondta ki.',
            },
            {
              term: 'presbiter',
              text: 'A református gyülekezet választott világi vezetője (lelkipásztor mellett), a gyülekezet vezető testületének tagja.',
              emelt: true,
            },
            {
              term: 'predesztináció',
              text: 'Kálvin tanítása az eleve elrendelésről: Isten előre eldönti, ki üdvözül.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért volt szükség reformra?' },
        {
          kind: 'text',
          text: 'A késő középkori katolikus egyházat sokan bírálták. Az egyháziak közül sokan világi hatalomra és vagyonra törekedtek, a papok egy része képzetlen volt, a főpapok gazdagon éltek. A pénzszerzés egyik módja a **búcsúcédula** (búcsúlevél) árusítása volt: aki megvásárolta, a hit szerint bűnei alóli megbocsátást kapott. A pápa ilyen bevételekből építtette Rómában a Szent Péter-bazilikát. Közben a **nyomtatás** (Gutenberg) lehetővé tette, hogy a bírálatok és a Biblia széles körben elterjedjenek, a humanisták pedig az eredeti szövegek tanulmányozására ösztönöztek.',
        },
        { kind: 'heading', text: 'Luther Márton fellépése' },
        {
          kind: 'text',
          text: '**Luther Márton** ágostonrendi szerzetes és wittenbergi egyetemi tanár volt. **1517. október 31-én** közzétette 95 tételét a búcsúcédulák ellen. A tételek gyorsan elterjedtek, a pápa kiközösítette, de a fejedelmek egy része (különösen **Bölcs Frigyes szász választófejedelem**) védelmébe vette. **V. Károly** császár 1521-ben, a wormsi birodalmi gyűlésen követelte, hogy Luther vonja vissza tanait, de ő nem tette. Wartburg várában bujkálva lefordította az **Újszövetséget** németre, ezzel a népnyelv és az irodalmi német nyelv fejlődését is segítette.',
        },
        {
          kind: 'keypoints',
          title: 'Luther fő tanításai',
          items: [
            '**Hit általi megigazulás**: az embert nem a jócselekedetek, hanem a hit teszi Isten előtt igazzá, ezért a búcsú értelmetlen.',
            '**Egyedül a Biblia** a hit forrása (nem a pápa és a hagyomány). Bárki olvashatja, ezért anyanyelvi fordítás kell.',
            '**Általános papság**: minden hívő közvetlen kapcsolatban áll Istennel, nincs szükség a papok közvetítésére.',
            'Csak **két szentség** marad: a keresztség és az úrvacsora. Az úrvacsorában a kenyér és a bor jelen van, mellette Jézus testét is felveszik. A szerzetesrendek és a papi nőtlenség fölösleges, az istentisztelet anyanyelven zajlik.',
          ],
        },
        { kind: 'heading', text: 'Kálvin János és a református irány' },
        {
          kind: 'text',
          text: 'A francia származású **Kálvin János** Svájcban, **Genfben** építette ki a másik nagy protestáns irányzatot. Főműve *A keresztény vallás rendszere* (Institutio), a református hitelvek összefoglalása. Kálvin tanítása szerint Isten mindenható, és az ember sorsa **előre elrendelt** (**predesztináció**), a hívő feladata, hogy Isten dicsőségére becsületes és szorgalmas életet éljen.',
        },
        {
          kind: 'text',
          text: 'A kálvini egyház **egyszerű istentiszteletet** tart (kevés díszítés, szentképek nélkül), az úrvacsorában csak szimbolikusan van jelen Krisztus: a hívők lelkileg veszik magukhoz testét és vérét. Az egyház vezetését **választott testület** végzi, ebben lelkészek és világi **presbiterek** vannak. Genf a protestantizmus egyik központja lett.',
        },
        {
          kind: 'compare',
          title: 'Az evangélikus és a református egyház',
          columns: ['Evangélikus (Luther)', 'Református (Kálvin)'],
          rows: [
            {
              label: 'Úrvacsora',
              cells: [
                'a kenyér és bor megmarad, mellette Jézus teste is jelen van',
                'a kenyér és a bor jelkép, a hívők lelkileg veszik magukhoz Krisztust',
              ],
            },
            {
              label: 'Az egyház vezetése',
              cells: [
                'gyakran az állam, a fejedelem irányítása alatt',
                'választott testület, presbiterek',
              ],
            },
            {
              label: 'Templom',
              cells: ['mérsékelt díszítés', 'nagyon egyszerű, kép és szobor nélkül'],
            },
            {
              label: 'Főbb területek',
              cells: ['Németország, Skandinávia', 'Svájc, Hollandia, Skócia, Magyarország'],
            },
          ],
        },
        { kind: 'heading', text: 'Az anglikán és az unitárius egyház' },
        {
          kind: 'text',
          text: 'Angliában a reformációt az uralkodó vezette be. **VIII. Henrik** szakított a pápával, és 1534-ben a király lett az angol egyház feje: így jött létre az **anglikán egyház**. Az **unitáriusok** a Szentháromság tanát vetették el, Erdélyben **Dávid Ferenc** vezetésével szerveződtek egyházzá 1568-ban. Angliában a református elveket követő, tisztább egyházra vágyó irányzat a **puritánoké** volt.',
        },
        { kind: 'heading', text: 'A protestantizmus elterjedése Európában' },
        {
          kind: 'text',
          text: 'A lutheri tanok Észak-Németországban és Skandináviában gyorsan terjedtek. A német fejedelmek egy része belépett az új egyházba, mert szabadulni akart a pápa és a császár hatalmától, és megszerezhette az egyházi birtokokat. A református irány Svájcban, Hollandiában, Skóciában és Franciaországban (**hugenották**) vált jelentőssé. A vallási ellentét hosszú háborúkhoz vezetett Németországban és Franciaországban.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A németországi vallási harcokat az **1555-ös augsburgi vallásbéke** zárta le: a birodalmi rendek (a fejedelmek) maguk választhattak a katolikus és az evangélikus vallás között, és alattvalóik követték őket („akié a föld, azé a vallás” elv). A református irányt a béke még nem ismerte el.',
        },
        { kind: 'heading', text: 'A reformáció Magyarországon' },
        {
          kind: 'text',
          text: 'A reformáció eszméi már az 1520-as években eljutottak Magyarországra: a városi német polgárság, a külföldi egyetemeken tanuló magyarok és kereskedők hozták. A török veszély, az ország három részre szakadása és a gyenge királyi hatalom kedvezett az elterjedésüknek. A **lutheri irány** először a felvidéki és erdélyi szász városokban terjedt, majd a **kálvini irány** a magyar lakosság körében, főleg az Alföldön és Erdélyben (**Debrecen** lett a magyar kálvinizmus központja). Nagyon sok földesúr áttért, a jobbágyok pedig általában követték földesurukat. A 16. század végére a lakosság jelentős része protestáns lett.',
        },
        {
          kind: 'map',
          title: 'A magyar reformáció főbb helyszínei',
          places: [
            { name: 'Debrecen', lat: 47.53, lon: 21.63, note: 'a magyar református központ' },
            { name: 'Sárospatak', lat: 48.32, lon: 21.57, note: 'református kollégium' },
            { name: 'Vizsoly', lat: 48.42, lon: 21.13, note: 'a Vizsolyi Biblia (1590)' },
            { name: 'Kolozsvár', lat: 46.77, lon: 23.59, note: 'unitárius központ' },
            { name: 'Torda', lat: 46.57, lon: 23.79, note: 'az 1568-as vallásügyi országgyűlés' },
          ],
        },
        {
          kind: 'keypoints',
          title: 'A magyar protestantizmus eredményei',
          items: [
            '**Anyanyelvű oktatás és irodalom**: protestáns iskolák és kollégiumok (Debrecen, Sárospatak) jöttek létre.',
            '**Bibliafordítás**: **Károli Gáspár** és munkatársai lefordították a teljes Bibliát magyarra (vizsolyi Biblia, 1590).',
            '**Vallási türelem Erdélyben**: az 1568-as tordai országgyűlés biztosította a szabad vallásgyakorlatot.',
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Méliusz Juhász Péter',
              text: 'Debreceni református püspök, a magyar kálvinizmus szervezője. 1567-ben a debreceni zsinaton a svájci (helvét) hitvallást fogadták el.',
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
            'Forrás: Luther 95 tétele, Kálvin vagy Luther tanításának összehasonlítása (úrvacsora, egyházszervezet).',
            'Fogalmak: reformáció, protestáns, evangélikus, református, anglikán, unitárius, vallási türelem.',
            'Rövid kifejtés: miért terjedt el gyorsan a reformáció Magyarországon? Mi volt a hatása a magyar nyelvre és az iskolákra?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a lutheri és a kálvini tanítást egybemosni. Luther: hit általi megigazulás, az úrvacsorában Jézus jelen van. Kálvin: predesztináció, jelképes úrvacsora, a gyülekezet választott vezetése. Másik hiba: Luthernek tulajdonítani a „95 tételt” 1519-ben vagy a Biblia magyar fordítását.',
        },
        {
          kind: 'tip',
          text: 'Ha a reformáció okait kérdezik, adj három szempontot: egyházi visszaélések (búcsúcédula), a humanizmus és a nyomtatás hatása, a fejedelmek politikai-gazdasági érdeke. Magyarországon még ott a török veszély és a központi hatalom gyengesége.',
        },
      ],
      topicMatch: ['=reformáció'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Mikor lépett fel Luther Márton a búcsúcédulák ellen Wittenbergben?',
          options: ['1492', '1517', '1545', '1555'],
          answer: 1,
          explanation:
            '1517-ben tette közzé 95 tételét. 1492 Amerika felfedezése, 1545 a tridenti zsinat kezdete.',
        },
        {
          question: 'Melyik állítás igaz Kálvin János tanításáról?',
          options: [
            'Szerinte a pápa az egyház feje',
            'Szerinte a búcsú megbocsátja a bűnöket',
            'Szerinte csak az uralkodó lehet az egyház feje',
            'Szerinte Isten előre elrendeli az ember sorsát, és az egyházat választott testület vezeti',
          ],
          answer: 3,
          explanation:
            'A kálvini tanítás lényege a predesztináció és a választott presbiterek vezette egyházszervezet. Az uralkodó egyházfőségét az angol anglikán egyház vezette be.',
        },
        {
          question: 'Ki fordította le magyarra a teljes Bibliát (Vizsoly, 1590)?',
          options: ['Pázmány Péter', 'Dávid Ferenc', 'Luther Márton', 'Károli Gáspár'],
          answer: 3,
          explanation:
            'A vizsolyi Bibliát Károli Gáspár vezetésével fordították. Pázmány Péter katolikus főpap volt, Dávid Ferenc az unitárius egyház szervezője, Luther pedig németre fordította a Bibliát.',
        },
        {
          question: 'Mi az anglikán egyház sajátossága?',
          options: [
            'A pápa az egyház feje',
            'Az egyházat választott presbiterek vezetik',
            'Az angol király az egyház feje (VIII. Henrik óta)',
            'Csak Erdélyben alakult ki',
          ],
          answer: 2,
          explanation:
            'VIII. Henrik 1534-ben szakított a pápával, és a király lett az egyházfő. Ez különböztette meg az anglikánt a katolikus és a református egyháztól.',
        },
        {
          question: 'Mit mondott ki az 1555-ös augsburgi vallásbéke?',
          options: [
            'Minden német állam köteles volt katolikusnak maradni',
            'A birodalmi rendek (fejedelmek) választhattak a katolikus és az evangélikus vallás között',
            'Teljes vallásszabadság lett az egész birodalomban, minden alattvaló számára',
            'Betiltotta az evangélikus vallást',
          ],
          answer: 1,
          explanation:
            'A béke szerint a fejedelem döntött a területe vallásáról (katolikus vagy evangélikus), az alattvalók követték őt. A református irányt még nem ismerte el.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Reformáció', url: wiki('Reformáció') },
        { label: 'Wikipédia: Luther Márton', url: wiki('Luther Márton') },
        { label: 'Wikipédia: Magyarországi reformáció', url: wiki('Reformáció Magyarországon') },
      ],
    },
    {
      id: 'katolikus-megujulas-barokk',
      subject: 'tortenelem',
      unitId: 'felfedezesek-reformacio',
      title: 'Az ellenreformáció, a katolikus megújulás és a barokk',
      level: 'kozep',
      requirement: {
        kozep: 'Az ellenreformáció, a katolikus megújulás és a barokk Európában és Magyarországon',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A katolikus egyház a **tridenti zsinaton** (1545–1563) megerősítette tanításait, és megújította magát: papképzés, fegyelem, a pápa tekintélye.',
            '**Loyolai Szent Ignác** alapította a **jezsuita rendet** (jóváhagyás: 1540): szigorú engedelmesség, iskolák, hitterjesztés. A jezsuita nevelés sok előkelő családot visszavezetett a katolikus hithez.',
            'Az **ellenreformáció** a protestantizmus visszaszorítása a katolikus államokban (Habsburg-birodalom, Lengyelország), részben állami erővel.',
            'A katolikus egyház ünnepélyes, pompás művészete a **barokk** volt.',
            'Magyarországon **Pázmány Péter** esztergomi érsek, író, jezsuita volt a katolikus megújulás vezéralakja: nagyszombati egyetem (1635), Kalauz (1613).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ellenreformáció',
              text: 'A protestantizmus visszaszorítására irányuló katolikus törekvések, gyakran állami támogatással.',
            },
            {
              term: 'katolikus megújulás',
              text: 'A katolikus egyház belső megújulása: a tridenti zsinat, a jezsuiták, papképzés, hitélet. Szélesebb fogalom, mint az ellenreformáció.',
            },
            {
              term: 'jezsuita',
              text: 'Loyolai Ignác által alapított katolikus szerzetesrend, a pápának tartozik engedelmességgel; nevelésükről és hitvitáikról volt ismert.',
            },
            {
              term: 'barokk',
              text: 'A 17–18. század művészeti stílusa: hatalmas, díszes, mozgalmas, a hatalom és a hit pompáját fejezi ki.',
            },
            {
              term: 'rekatolizáció',
              text: 'A protestánsok visszatérítése a katolikus egyházba, az ellenreformáció gyakorlati eredménye.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A katolikus egyház válasza' },
        {
          kind: 'text',
          text: 'A protestantizmus gyors terjedése válságba sodorta a katolikus egyházat. Előbb csak elutasította a reformot, de a 16. század közepétől a belső megújulás útját is választotta. A megújulás két fő eszköze a **tridenti zsinat** és az új szerzetesrendek, elsősorban a **jezsuiták** voltak.',
        },
        { kind: 'heading', text: 'A tridenti zsinat (1545–1563)' },
        {
          kind: 'text',
          text: 'A zsinat Trentóban (Tridentum) ült össze **1545-ben**, és csaknem húsz évig, megszakításokkal ülésezett. Határozatai:',
        },
        {
          kind: 'keypoints',
          items: [
            '**A hagyományos tanok megerősítése**: a pápa elsősége, hét szentség, a hit forrása a Biblia és az egyházi hagyomány együtt.',
            '**Reformok a papságnál**: a papnevelés megszervezése (szemináriumok), a papi fegyelem és a lelkipásztori munka erősítése, a búcsúval való visszaélések megszüntetése.',
            '**Ellenőrzés**: a tiltott könyvek jegyzéke és az egyház tanításait ellenőrző intézmények.',
            'A protestánsokkal való kiegyezés lehetősége megszűnt: a zsinat végleg rögzítette a két irány közti különbséget.',
          ],
        },
        { kind: 'heading', text: 'A jezsuiták' },
        {
          kind: 'text',
          text: 'A spanyol **Loyolai Ignác** 1534-ben társaival fogadalmat tett, a rendet **1540-ben** hagyta jóvá a pápa. A **Jézus Társasága** (jezsuita rend) katonás fegyelemmel működött: a tagok feltétlen engedelmességgel tartoztak a pápának és a rendfőnöknek. Fő feladataik: **oktatás** (iskolák, kollégiumok, egyetemek), a **hitvita** és a prédikáció, valamint a hittérítés (Amerikában és Ázsiában is). A jezsuita iskolák tanulmányi színvonala magas volt, és a katolikus uralkodók, főnemesek fiait gyakran ők nevelték.',
        },
        { kind: 'heading', text: 'Az ellenreformáció' },
        {
          kind: 'text',
          text: 'Az ellenreformáció a protestantizmus visszaszorítása. A katolikus uralkodók (a **Habsburgok**, a lengyel király) támogatták, mert a vallási egység a hatalom megszilárdulását is segítette. Eszközei a hitvita, az iskolák, a papi fegyelem, a főnemesek megnyerése, ill. egyes helyeken a kényszer és az üldözés. A katolikus vidékeken a **barokk** építészet és művészet is a hit vonzerejét szolgálta.',
        },
        { kind: 'heading', text: 'A barokk' },
        {
          kind: 'text',
          text: 'A **barokk** a 17. században Itáliából indult, és a 18. században virágzott. Jellemzői: nagy méretek, mozgalmasság, hatásvadász fény–árnyék, gazdag díszítés, ívelt vonalak. Az egyház és az abszolutista uralkodók egyaránt ezzel akarták a hatalmukat és a hitüket fényesen megmutatni. Építészetben: templomok (például római jezsuita templom, a Gesù) és uralkodói paloták (**Versailles**). Zenében Bach és Händel, a festészetben például Rubens és Rembrandt neve fémjelzi. A barokk nem kizárólag katolikus stílus, de a katolikus megújulás egyik legfontosabb kifejezője volt.',
        },
        { kind: 'heading', text: 'Katolikus megújulás Magyarországon' },
        {
          kind: 'text',
          text: 'Magyarországon a protestantizmus nagyon elterjedt, a katolikus egyház helyzete a 16. század végére meggyengült. A megújulás vezéralakja **Pázmány Péter** (1570–1637) volt. Pázmány egy református nemes családban született, katolikus hitre tért, belépett a jezsuita rendbe, majd **1616-tól esztergomi érsek** lett. Eszközei:',
        },
        {
          kind: 'keypoints',
          items: [
            '**Hitvita és irodalom**: magyar nyelvű, nagy hatású művei, a legismertebb az *Isteni igazságra vezérlő kalauz* (**1613**), a katolikus tanok magyarázata és a protestánsokkal való vita.',
            '**Oktatás**: **1635-ben nagyszombati egyetemet** alapított (a mai ELTE jogelődje), a jezsuita iskolákat támogatta. Bécsben papnevelő intézetet (**Pázmáneum**) hozott létre.',
            '**A főnemesség megnyerése**: számos nagy család (például az Esterházyak) visszatért a katolikus hitre, mert a Habsburg-király is a katolikus hívők mellé állt, és a földesúr vallása gyakran a birtokon élők vallását is meghatározta.',
          ],
        },
        {
          kind: 'text',
          text: 'A katolikus egyház megerősödése főleg a **királyi Magyarországon** volt látványos, a török hódoltsági és erdélyi területeken a protestantizmus megmaradt. A 17. század végétől, a török kiűzése után, a katolikus egyház támogatást kapott a Habsburgoktól. A barokk a 18. században, a háborúk utáni újjáépítés idején virágzott fel (templomok, kastélyok, kolostorok).',
        },
        {
          kind: 'map',
          title: 'A katolikus megújulás magyarországi helyei',
          places: [
            {
              name: 'Nagyszombat',
              lat: 48.38,
              lon: 17.59,
              note: 'Pázmány egyeteme (1635)',
              emelt: true,
            },
            { name: 'Esztergom', lat: 47.79, lon: 18.74, note: 'az érseki székhely' },
            { name: 'Győr', lat: 47.69, lon: 17.63, note: 'barokk püspöki város' },
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Misztótfalusi Kis Miklós',
              text: 'Erdélyi származású nyomdász és betűmetsző (1650–1702). Amszterdamban dolgozott, 1685-ben ott adta ki a magyar nyelvű Bibliát, ismert magyar betűtípusokat metszett.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **rekatolizáció** során a protestánsok visszatérése a katolikus egyházba nagyrészt a földesúr vallásváltásán, a jezsuita iskolákon és prédikációkon, valamint a 17. század végi állami támogatáson múlt. Az Alföldön és Erdélyben ugyanakkor a protestantizmus tartósan megmaradt, a protestáns iskolák és nyomdák (például Misztótfalusi Kis Miklós munkássága) a magyar nyelvű műveltséget erősítették.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalmak: ellenreformáció, katolikus megújulás, jezsuita, barokk (és emelten a rekatolizáció).',
            'Forrás: Pázmány Péter szövege, tridenti zsinat határozata, barokk templom vagy palota képe: mi a stílus, milyen célt szolgált?',
            'Rövid kifejtés: hogyan újította meg magát a katolikus egyház a 16–17. században? Mit tett Pázmány Péter?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Pázmány Péter protestáns volt, vagy hogy a jezsuita rendet Luther alapította. Pázmány református családból tért katolikus hitre, és jezsuita lett. A jezsuita rend alapítója Loyolai Ignác, és a rend a pápa kezéhez tartozott. Másik hiba: az ellenreformációt és a katolikus megújulást azonosnak tekinteni: az előbbi a protestantizmus visszaszorítása, az utóbbi az egyház belső megújulása is.',
        },
        {
          kind: 'tip',
          text: 'A „katolikus megújulás eszközei” kérdésre ezt a sort mondd: tridenti zsinat (hit megerősítése, papnevelés), jezsuiták (iskolák, hitvita), állami támogatás (Habsburgok), barokk művészet. Magyarországon: Pázmány Péter, nagyszombati egyetem, főurak megnyerése.',
        },
      ],
      topicMatch: ['ellenreformáció', 'katolikus megújulás', 'barokk'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Mikor kezdődött a tridenti zsinat?',
          options: ['1517', '1526', '1545', '1555'],
          answer: 2,
          explanation:
            'A tridenti zsinat 1545-ben kezdődött, és 1563-ig tartott. 1517 Luther fellépése, 1526 a mohácsi csata, 1555 az augsburgi vallásbéke.',
        },
        {
          question: 'Ki alapította a jezsuita rendet?',
          options: ['Kálvin János', 'Loyolai Ignác', 'Pázmány Péter', 'V. Károly'],
          answer: 1,
          explanation:
            'A rendet Loyolai Ignác alapította (a pápa 1540-ben hagyta jóvá). Pázmány Péter jezsuita volt, de nem alapító.',
        },
        {
          question: 'Melyik NEM tartozik Pázmány Péter tevékenységéhez?',
          options: [
            'Esztergomi érsekként működött',
            'Megalapította a nagyszombati egyetemet (1635)',
            'Megírta az Isteni igazságra vezérlő kalauzt',
            'Lefordította a teljes Bibliát magyarra, a vizsolyi Bibliát',
          ],
          answer: 3,
          explanation:
            'A vizsolyi Bibliát a református Károli Gáspár és munkatársai fordították. Pázmány katolikus főpap, író és iskolaalapító volt.',
        },
        {
          question: 'Mi jellemzi a barokk stílust?',
          options: [
            'Szigorú egyszerűség és szimmetria, díszítés nélkül',
            'Mozgalmasság, nagy méretek, gazdag díszítés, a hatalom és a hit pompája',
            'Csúcsíves boltozat és hatalmas üvegablakok',
            'Kizárólag a protestáns templomokban jelent meg',
          ],
          answer: 1,
          explanation:
            'A barokk mozgalmas, díszes, nagyszabású stílus volt, az egyház és az abszolutista uralkodók egyaránt használták. A gótika a csúcsíves boltozatot jelenti.',
        },
        {
          question: 'Mit jelent a rekatolizáció?',
          options: [
            'A protestánsok visszatérítését a katolikus egyházba',
            'A katolikusok áttérését a protestáns hitre',
            'A tridenti zsinat összehívását',
            'A jezsuita rend feloszlatását',
          ],
          answer: 0,
          explanation:
            'A rekatolizáció az ellenreformáció gyakorlati eredménye: sokan visszatértek a katolikus egyházba, főként a földesúr vallásváltása és a jezsuita nevelés hatására.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Tridenti zsinat', url: wiki('Tridenti zsinat') },
        { label: 'Wikipédia: Jézus Társasága', url: wiki('Jézus Társasága') },
        { label: 'Wikipédia: Pázmány Péter', url: wiki('Pázmány Péter') },
      ],
    },
  ],
};

export default unit;
