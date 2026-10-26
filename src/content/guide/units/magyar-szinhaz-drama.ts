import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Irodalom 7. témakör, Színház és dráma. */
const unit: GuideUnit = {
  id: 'szinhaz-drama',
  subject: 'magyar',
  order: 85,
  title: 'Színház és dráma',
  requirementRef: '2.1 Szerzők, művek, 7. témakör: Színház és dráma',
  intro:
    'A dráma műnemi jellemzői, majd a vizsgán kérhető színházi és drámai művek: Szophoklész, Shakespeare, Molière, Katona József Bánk bán, Madách Imre Az ember tragédiája. Emelt szinten az epikus és az abszurd dráma, egy 20. századi magyar dráma és a színpadi előadás mint értelmezés.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 7. témakör: Színház és dráma). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'dramai-mufaj-antik-szinhaz-szophoklesz',
      subject: 'magyar',
      unitId: 'szinhaz-drama',
      title: 'A dráma műneme, az antik színház és Szophoklész',
      level: 'kozep',
      requirement: {
        kozep:
          'Szophoklész egy műve: a világlátás és a kifejezésmód sajátosságainak bemutatása a dráma lényegre törő értelmezésével; drámarészletek értelmezése; színház és dráma az adott mű korában; a felvetett kérdések etikai, történeti, lélektani vagy társadalmi vonatkozásai.',
        emelt:
          'Az adott mű színpadi előadása mint az interpretáció eszköze; a művekben felvetett kérdések gondolati, filozófiai, esztétikai vonatkozása; az antik és a shakespeare-i tragédia összevetése.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **dráma** a három műnem egyike: a cselekményt **párbeszédben** és **közvetlenül, színpadra szánva** mutatja be, a szereplők a nézők szeme előtt cselekszenek.',
            'Fő fogalmai: **konfliktus**, **szerkezet** (expozíció, bonyodalom, tetőpont, megoldás vagy katasztrófa), **tragikus hős**, **katarzis**. Műfajai: **tragédia**, **komédia**, **színmű**.',
            'Az **antik görög színház** vallási ünnephez (Dionüszosz-ünnepek) kötődött: szabad ég alatt, tömegek előtt játszottak, a **kar** (khorosz) és három színész adta elő a darabot.',
            'Az **Antigoné** és az **Oidipusz király** (Szophoklész) a thébai mondakörből ered. Az Antigonéban az **isteni törvény** és az **állam törvénye** ütközik, az Oidipusz királyban az **önismeret** és a **végzet** kérdése áll a középpontban.',
            'Arisztotelész szerint a tragédia **félelmet és szánalmat** kelt, és ezzel **katarzist** (megtisztulást) hoz.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'műnem',
              text: 'Az irodalom három alapformája: epika, líra, dráma. A drámát a párbeszéd, a közvetlen megjelenítés és a színpadra szánt jelleg különbözteti meg.',
            },
            {
              term: 'konfliktus',
              text: 'A dráma mozgatórugója: szembenálló akaratok, értékek vagy erők összeütközése.',
            },
            {
              term: 'tragikus hős',
              text: 'Kiemelkedő ember, aki a saját tetteivel vagy a megoldhatatlan helyzet miatt elbukik; a bukása a nézőben szánalmat és félelmet kelt.',
            },
            {
              term: 'katarzis',
              text: 'A tragédia hatása Arisztotelész szerint: az érzelmek megtisztulása a szánalom és a félelem átélése után.',
            },
            {
              term: 'khorosz (kar)',
              text: 'Az antik tragédia énekes-táncos együttese; kommentálja az eseményeket, és a közösség véleményét fejezi ki.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A dráma mint műnem' },
        {
          kind: 'text',
          text: 'A drámai mű **cselekményét** a szereplők beszéde és tettei viszik előre: nincs mesélő, a nézőnek (olvasónak) a párbeszédekből, a monológokból és a rendezői utasításokból kell összeraknia az eseményeket. Ezért a dráma **sűrít**: a lényeges helyzeteket, döntéseket és összeütközéseket mutatja meg.\n\nA klasszikus drámai szerkezet szakaszai: **expozíció** (a helyzet bemutatása), **bonyodalom**, **tetőpont** (a konfliktus legélesebb pontja), **megoldás** vagy **katasztrófa**. A drámát nagyobb egységekre (felvonás, szakasz, kép) és jelenetekre osztják.',
        },
        {
          kind: 'compare',
          title: 'A dráma főbb műfajai',
          columns: ['Műfaj', 'Jellemzője'],
          rows: [
            {
              label: 'tragédia',
              cells: [
                'komoly konfliktus',
                'a hős bukása, halála vagy lelki összeomlása; szánalom és félelem, katarzis',
              ],
            },
            {
              label: 'komédia',
              cells: [
                'nevetséges helyzetek, jellemek',
                'a hibák és hiúságok kigúnyolása; a vége általában kibékülés vagy a rend helyreállítása',
              ],
            },
            {
              label: 'színmű',
              cells: [
                'komoly, de nem tragikus kimenetelű',
                'a konfliktus megoldódik, a hős nem pusztul el',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Az antik görög színház' },
        {
          kind: 'text',
          text: 'Az ókori Athénban a színjátszás a **Dionüszosz-ünnepekhez** kapcsolódott, a darabok **versenyben** (drámaíró-pályázaton) szerepeltek. A színházak **szabad ég alatt**, a domboldalra épített nézőtérrel (theatron) működtek; az előadás középpontja a kör alakú játéktér (orchestra) volt, mögötte a színpadépület (skené). A szereplők **maszkot** viseltek, a női szerepeket is férfiak játszották. A tragédiában a színészek mellett a **kar** is fontos szerepet kapott.\n\nA színház **közösségi, polgári** esemény volt: a nézők a város polgárai, a témák a mítoszok, amelyek az ember és az istenek, a város és a törvény viszonyát vizsgálták.',
        },
        { kind: 'heading', text: 'Szophoklész' },
        {
          kind: 'text',
          text: '**Szophoklész** (kb. Kr. e. 496–406) az ókori Athén egyik legnagyobb tragédiaköltője. A hagyomány szerint ő vezette be a **harmadik színészt**, ezzel gazdagabb párbeszédeket tett lehetővé. Mindkét híres drámája a **thébai mondakörhöz** tartozik. A vizsgán valamelyik művét kell ismerned.',
        },
        {
          kind: 'compare',
          title: 'Antigoné és Oidipusz király',
          columns: ['Antigoné', 'Oidipusz király'],
          rows: [
            {
              label: 'Helyzet',
              cells: [
                'Antigoné fivére, Polüneikész Théba ellen harcolva halt meg. Kreón király tiltja a temetését.',
                'Thébait pestis sújtja. A jóslat szerint Laiosz király gyilkosát kell megbüntetni.',
              ],
            },
            {
              label: 'Konfliktus',
              cells: [
                'Antigoné az **íratlan isteni törvényt** követi, Kreón az **állam rendjét** védi.',
                'Oidipusz a **gyilkos nyomát** kutatja, és közben **önmagára** talál.',
              ],
            },
            {
              label: 'Szerkezet',
              cells: [
                'Antigoné eltemeti a testvérét, Kreón halálra ítéli. A jós figyelmeztetése után későn enged.',
                '**Analitikus dráma**: a múlt titkai lépésről lépésre derülnek ki (Teiresziász, Iokaszté, a hírnök).',
              ],
            },
            {
              label: 'Vég',
              cells: [
                'Antigoné, Haimón és Eurüdiké meghal, Kreón összeomlik.',
                'Iokaszté öngyilkos lesz, Oidipusz önmagát megvakítja és száműzetésbe megy.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **Oidipusz király** a világirodalom egyik legjobb példája a **tragikus iróniára**: a néző tudja, amit a hős még nem, ezért Oidipusz minden mondata kétértelmű. A felismerés (anagnorizisz) és a sors fordulata (peripetia) egybeesik. Az **Antigonéban** nincs egyetlen „rossz” fél: mindkét szereplőnek van igazsága, ezért a konfliktus tragikus.',
        },
        {
          kind: 'text',
          text: 'Mindkét dráma etikai-társadalmi kérdése ma is él: mikor kell megtagadni egy igazságtalan parancsot, milyen felelősséggel tartozik az ember a tetteiért, és meddig szabad az emberé a döntés, ha a sorsa kijelölt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **antik és a shakespeare-i tragédia** összevetése: az antik tragédiában a hős sorsát gyakran a **végzet** és a **közösség rendje** szabja meg, szigorú a szerkezet, az események rövid idő alatt, egy helyszínen zajlanak, és a kar kommentálja őket. Shakespeare-nél a bukás a **jellemből és a döntésekből** nő ki, a cselekmény több helyszínen, hosszabb idő alatt zajlik, a komikus és a tragikus elemek keverednek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **színpadi előadás mint értelmezés**: ugyanazt az Antigonét lehet az állammal szembeszegülő egyén drámájaként, családi tragédiaként vagy mai politikai példázatként színre vinni. A rendező döntései (kar, maszk, díszlet, a szövegváltozat, Kreón alakítása) egy-egy olvasatot erősítenek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Tétel: *Színház és dráma* a szóbelin; a világirodalmi tételben szerepelhet Szophoklész egy műve.',
            'Írásbeli: drámarészlet értelmezése (a *műértelmező szövegalkotás* bázisszövege drámarészlet is lehet), vagy műnemi-műfaji felismerés az irodalmi feladatlapon.',
            'Szempontok: konfliktus, szerkezet, a hős sorsa, színház és dráma az adott korban, a felvetett etikai kérdések.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a tanuló a **cselekményt meséli el**, nem pedig értelmez. A cselekményt csak annyiban írd le, amennyi az érveléshez kell. Másik hiba az **Antigoné** és az **Oidipusz király** szereplőinek összekeverése (Kreón mindkettőben szerepel!).',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: az Antigoné konfliktusa',
          problem: 'Mutasd be Szophoklész Antigonéjának központi konfliktusát!',
          solution:
            '1. **Bevezetés**: Szophoklész, thébai mondakör, az athéni tragédia kora. 2. **Helyzet**: Kreón tiltja Polüneikész temetését, Antigoné megszegi a tilalmat. 3. **Konfliktus**: isteni (íratlan) törvény és állami törvény; mindkettőnek van igazsága. 4. **Szerkezet**: párbeszédes szembenállás Antigoné és Kreón között, a kar kommentárja, a jós figyelmeztetése, a késői belátás. 5. **Következmény**: Antigoné, Haimón és Eurüdiké halála. 6. **Üzenet**: a hatalom korlátai, lelkiismeret, felelősség.',
        },
        {
          kind: 'tip',
          text: 'A szóbelin röviden mutasd be a **színházi korszakot** is (az antik színház: ünnep, kar, maszk), mert a követelmény külön kéri: *színház és dráma az adott mű korában*.',
        },
      ],
      topicMatch: [
        'szophoklész',
        'antik dráma',
        'ókori görög dráma',
        'dráma műneme',
        'drámai és epikus forma',
        'drámai műfajok',
        'drámaelmélet',
        'epikai és drámai szereplők',
        'drámatörténet',
        'színháztörténet',
        '=dráma',
        '=színház',
      ],
      cards: { subject: 'magyar', era: 'antik' },
      quiz: [
        {
          question: 'Melyik állítás igaz a drámára mint műnemre?',
          options: [
            'A történetet a narrátor mondja el.',
            'A cselekmény párbeszédekben, közvetlenül jelenik meg, színpadra szánva.',
            'A költő saját érzéseit fejezi ki.',
            'Mindig prózában íródik.',
          ],
          answer: 1,
          explanation:
            'A dráma a párbeszéd és a közvetlen megjelenítés műneme. A mesélő az epikára, az én érzéseinek kifejezése a lírára jellemző.',
        },
        {
          question: 'Mi a katarzis Arisztotelész szerint?',
          options: [
            'A hős büntetése',
            'A komédia nevettető hatása',
            'A színpadi díszlet váltása',
            'A szánalom és a félelem átélése utáni lelki megtisztulás',
          ],
          answer: 3,
          explanation:
            'A tragédia szánalmat és félelmet kelt, és ezzel megtisztítja az érzelmeket. Ez a katarzis.',
        },
        {
          question: 'Mi az Antigoné központi konfliktusa?',
          options: [
            'Az isteni (íratlan) és az állami törvény ütközése',
            'A szegények és a gazdagok harca',
            'Két szerelmes családjának ellentéte',
            'A király és a pap hatalmi vitája a jóslatról',
          ],
          answer: 0,
          explanation:
            'Antigoné az isteni parancsot követi (eltemeti a testvérét), Kreón az állam rendjét védi. Ez a kettő ütközik.',
        },
        {
          question: 'Miért „analitikus” dráma az Oidipusz király?',
          options: [
            'Mert versben íródott.',
            'Mert a múltban történt titkok a cselekmény során lépésről lépésre kiderülnek.',
            'Mert nincs benne kar.',
            'Mert a hős hosszú utat tesz meg.',
          ],
          answer: 1,
          explanation:
            'Az analitikus szerkezetben a döntő esemény (Laiosz meggyilkolása) a darab előtt történt, és a vizsgálat során derül ki.',
        },
        {
          question:
            'Mit jelent az antik és a shakespeare-i tragédia összevetésében, hogy az antik hős sorsát gyakran a végzet is meghatározza?',
          options: [
            'A hős bukása csak a saját jelleméből következik.',
            'A hős semmit sem dönthet.',
            'A hős sorsát a végzet és a közösség rendje is szabja, nem csak a jelleme.',
            'Az antik tragédiában nincs bukás.',
          ],
          answer: 2,
          explanation:
            'Az antik tragédiában a sors, a jóslat és a világrend is erős tényező; Shakespeare-nél inkább a jellem és a döntések hozzák létre a bukást.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szophoklész', url: wiki('Szophoklész') },
        { label: 'Wikipédia: Antigoné (Szophoklész)', url: wiki('Antigoné Szophoklész') },
        { label: 'Wikipédia: Oidipusz király', url: wiki('Oidipusz király') },
      ],
    },
    {
      id: 'shakespeare-szinhaz-hamlet-romeo',
      subject: 'magyar',
      unitId: 'szinhaz-drama',
      title: 'Shakespeare és az angol reneszánsz színház',
      level: 'kozep',
      requirement: {
        kozep:
          'Shakespeare egy műve (Hamlet, Rómeó és Júlia): a világlátás és a kifejezésmód bemutatása, drámarészletek értelmezése, színház és dráma a mű korában, a felvetett kérdések etikai, történeti, lélektani, társadalmi vonatkozásai.',
        emelt:
          'A mű színpadi előadása mint az interpretáció eszköze (pl. színpadi megjelenítések összehasonlítása); gondolati, filozófiai, esztétikai vonatkozások.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**William Shakespeare** (1564–1616) az angol reneszánsz legnagyobb drámaírója; színháza a londoni **Globe** (1599) volt.',
            'A **Rómeó és Júlia** (kb. 1595) a két szerelmes tragédiája a veronai Montague és Capulet család ellenségeskedésében; a **Hamlet** (kb. 1600) a dán királyfi tragédiája.',
            'A **Hamletben** Hamlet apja szelleme azt kéri, hogy bosszulja meg a gyilkosságát; Hamlet a **tépelődés** és a **késleltetés** hőse. Kulcsmotívumok: bosszú, őrület, színlelés, a „színház a színházban” (az **egérfogó**).',
            'A shakespeare-i színház **nyitott, kevés díszletű**; a nyelv, a szó teremt teret és hangulatot. A női szerepeket férfiak játszották.',
            'A tragédia a **jellemből** és a **döntésekből** fakad, és a komikus elemek keverednek a komolyakkal.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'reneszánsz színház',
              text: 'Az angol színház a 16–17. század fordulóján: kerek vagy sokszögű, részben nyitott színház, kevés díszlet, élénk jelenetváltások.',
            },
            {
              term: 'színház a színházban',
              text: 'A műben egy másik előadás is megjelenik (a Hamletben az „egérfogó”); a látszat és a valóság kérdését veti fel.',
            },
            {
              term: 'monológ',
              text: 'A szereplő magában vagy a közönségnek mondott hosszabb beszéde; a belső vívódást mutatja (Hamlet: „Lenni vagy nem lenni”).',
            },
            {
              term: 'késleltetés',
              text: 'A drámai szerkezetben a megoldást halasztó mozzanatok sora; a Hamletben a hős tétovázása is késleltet.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Színház Shakespeare korában' },
        {
          kind: 'text',
          text: 'A 16. század végén Londonban sorra nyíltak a **köztéri színházak**. A Globe-ban a nézők egy része a nyílt színpad előtt állt, mások az emeleti karzaton ültek. A színpadkép egyszerű volt, a színészek **szavai** teremtették meg a helyszínt és a hangulatot. A társulatok férfiakból álltak, a női szerepeket fiúk és férfiak játszották. A közönség vegyes volt: az udvari emberektől a városi nép egyszerűbb tagjáig mindenki látta a darabokat. Ez magyarázza, hogy Shakespeare-nél a **fennkölt és a komikus, a vers és a próza** keveredik.',
        },
        { kind: 'heading', text: 'A Hamlet' },
        {
          kind: 'text',
          text: 'A dán királyi udvarban (Elsinore) **Hamlet** apját, a királyt meggyilkolták; a trónt a testvére, **Claudius** szerezte meg, és feleségül vette az özvegy **Gertrudot**. A szellem azt mondja Hamletnek, hogy bosszulja meg a gyilkosságot. Hamlet **őrültet színlel**, **színházi előadással** (az egérfogó) próbálja leleplezni Claudiust, tévedésből megöli **Poloniust**, **Ophelia** megőrül és meghal. A végső párbajban Hamlet, Claudius, Gertrud és Laertes is meghal; **Fortinbras** veszi át a hatalmat.',
        },
        {
          kind: 'text',
          text: 'A főhős a gondolkodó, kételkedő **reneszánsz ember**: nem a bosszú ténye, hanem az **etikai kérdés** foglalkoztatja: mi a helyes cselekvés egy romlott világban? A „Lenni vagy nem lenni” monológ az élet értelméről, a halálról és a cselekvésről szól. Magyarul **Arany János** fordítása (1867) vált klasszikussá.',
        },
        { kind: 'heading', text: 'A Rómeó és Júlia' },
        {
          kind: 'text',
          text: 'Veronában a **Montague** és a **Capulet** család ősi ellenségeskedésben él; **Rómeó** és **Júlia** egymásba szeretnek. **Lőrinc barát** titokban összeadja őket, Rómeó párbajban megöli Júlia unokatestvérét, **Tybaltot**, ezért száműzik. A félreértések miatt Rómeó hamis halálhírt hall, megmérgezi magát; Júlia felébred az altatóból, és a tőrével leszúrja magát. A halálukkal a két család kibékül.',
        },
        {
          kind: 'text',
          text: 'Fő kérdések: **szerelem és gyűlölet**, az ifjúság és az öregek világa, a **véletlen** és a végzet szerepe, a társadalmi elvárások és az egyéni boldogság összeütközése. A darabban a lírai, a komikus (Mercutio, a dajka) és a tragikus hangnem keveredik.',
        },
        {
          kind: 'compare',
          title: 'Hamlet és Rómeó és Júlia',
          columns: ['Hamlet', 'Rómeó és Júlia'],
          rows: [
            {
              label: 'Témák',
              cells: ['bosszú, hatalom, igazság, őrület', 'szerelem, gyűlölet, család, véletlen'],
            },
            {
              label: 'Hős',
              cells: [
                'tépelődő gondolkodó, késlelteti a tettet',
                'szenvedélyes, gyorsan döntő fiatalok',
              ],
            },
            {
              label: 'Vég',
              cells: [
                'a királyi udvar szinte kipusztul, új uralkodó jön',
                'a szerelmesek halála békítő hatású',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Színpadi interpretációk: a Hamlet színpadra vitele eltérő olvasatokat hozhat: a hős lehet **politikai** ellenfél (a hatalom ellen), **lélektani** eset (a gyász és a bűntudat) vagy **filozófiai** gondolkodó. Az emelt szintű szóbelin ezért az előadás (színpadkép, jelmez, a szellem megjelenítése, a monológ tolmácsolása) érvelő összehasonlítás alapja lehet.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: a világirodalmi *Színház és dráma* tételben Shakespeare egy műve (Hamlet vagy Rómeó és Júlia), kiemelt szemponttal (tragikum, hősábrázolás, színház a korban, motívumok).',
            'Írásbeli: drámarészlet értelmezése (például a Hamlet-monológ vagy az erkélyjelenet), összehasonlítás másik tragédiával.',
            'Összekapcsolás: az antik és a shakespeare-i tragédia, vagy Shakespeare és Katona (Bánk bán) összevetése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondd, hogy Hamlet „gyáva”: a **tépelődés** a mű központi problémája, nem egyszerű jellemhiba. A Rómeó és Júliát se egyszerű „szerelmi történetként” mutasd be: a tragédia oka a **családi gyűlölet** és a felelőtlen, siető döntések.',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: Hamlet mint tragikus hős',
          problem: 'Mutasd be Hamletet tragikus hősként!',
          solution:
            '1. **Helyzet**: apja meggyilkolva, Claudius a király. 2. **Konfliktus**: a bosszú kötelessége és a kételkedő gondolkodás ellentéte. 3. **Eszközök**: monológok, színlelt őrület, az egérfogó. 4. **Bukás**: a késlekedés és a bosszú pusztító következményei. 5. **Tanulság**: a romlott világban a helyes cselekvés kérdése.',
        },
      ],
      topicMatch: ['shakespeare', 'hamlet', 'rómeó és júlia'],
      cards: { subject: 'magyar', era: 'reneszansz' },
      quiz: [
        {
          question: 'Melyik színházhoz kötődik Shakespeare pályája Londonban?',
          options: ['Burgtheater', 'Globe', 'Théâtre-Français', 'Odeon'],
          answer: 1,
          explanation: 'A Globe Színház (1599) Shakespeare társulatának híres játszóhelye volt.',
        },
        {
          question: 'Mi az „egérfogó” a Hamletben?',
          options: [
            'Hamlet fegyvere',
            'Polonius titkos szobája',
            'Egy színházi előadás, amellyel Hamlet Claudius bűnét akarja leleplezni',
            'Ophelia dala',
          ],
          answer: 2,
          explanation:
            'A színház a színházban: Hamlet a gyilkosságot bemutató előadással próbálja leleplezni Claudiust.',
        },
        {
          question: 'Ki fordította a Hamletet magyarra, és vált a fordítás klasszikussá?',
          options: ['Arany János', 'Petőfi Sándor', 'Babits Mihály', 'Vörösmarty Mihály'],
          answer: 0,
          explanation: 'Arany János fordítása (1867) vált a mű klasszikus magyar szövegévé.',
        },
        {
          question: 'Mi a Rómeó és Júlia tragédiájának fő oka?',
          options: [
            'A szerelmesek szüleinek szegénysége',
            'A két család ellenségeskedése és a félreértések',
            'Egy idegen háború',
            'Hamlet bosszúja',
          ],
          answer: 1,
          explanation:
            'A családi gyűlölet és a félreértések, siető döntések vezetnek a halálukhoz.',
        },
        {
          question: 'Miben különbözik az antik tragédia a shakespeare-itől?',
          options: [
            'Az antik tragédiában nincs konfliktus.',
            'Shakespeare nem használ monológot.',
            'Az antikban a végzet szerepe nagyobb, Shakespeare-nél a jellem és a döntések fontosabbak.',
            'Az antik tragédia mindig komikus.',
          ],
          answer: 2,
          explanation:
            'A két tragédiatípus hangsúlya eltér: végzet és közösség az antikban, jellem és döntés Shakespeare-nél.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: William Shakespeare', url: wiki('William Shakespeare') },
        { label: 'Wikipédia: Hamlet', url: wiki('Hamlet') },
        { label: 'Wikipédia: Rómeó és Júlia', url: wiki('Rómeó és Júlia') },
      ],
    },
    {
      id: 'moliere-klasszicista-vigjatek',
      subject: 'magyar',
      unitId: 'szinhaz-drama',
      title: 'Molière és a klasszicista vígjáték',
      level: 'kozep',
      requirement: {
        kozep:
          'Molière egy műve (A fösvény, Tartuffe): a világlátás és a kifejezésmód bemutatása, drámarészletek értelmezése, színház és dráma az adott mű korában, a felvetett kérdések etikai, társadalmi vonatkozásai.',
        emelt:
          'A mű színpadi előadása mint az interpretáció eszköze; gondolati, filozófiai, esztétikai vonatkozások.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Molière** (1622–1673; valódi neve Jean-Baptiste Poquelin) színész, rendező és drámaíró volt, **XIV. Lajos** udvarának színházában.',
            'A **klasszicizmus** drámája: rend, ész, szabályosság. A **három egység** (hely, idő, cselekmény) elve, a magas és az alacsony műfajok különválasztása.',
            'Műfaja a **jellemkomédia**: a vígjáték egy emberi hibát, szenvedélyt (fösvénység, képmutatás) állít a középpontba.',
            '**A fösvény** (1668) főhőse **Harpagon**; a pénz szeretete tönkreteszi a családi kapcsolatokat. A **Tartuffe** (1664) a **képmutatás** leleplezése: Tartuffe vallásos álarc mögött csal.',
            'A komikum forrása a **túlzás**, a félreértés, a leleplezés. A nevetés a **társadalmi bírálat** eszköze.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'klasszicizmus',
              text: 'A 17. századi francia művészeti irányzat: a józan ész, a szabályosság, a mérték és az antik minták követése.',
            },
            {
              term: 'három egység',
              text: 'A klasszicista dráma szabálya: a cselekmény egy helyen, egy napon belül, egy fő cselekményszálon bontakozik ki.',
            },
            {
              term: 'jellemkomédia',
              text: 'A vígjáték középpontjában egy kiemelt emberi hiba áll (fösvénység, képmutatás), és a cselekmény ennek következményeit mutatja.',
            },
            {
              term: 'deus ex machina',
              text: 'Külső beavatkozás, amely váratlanul megoldja a konfliktust. A Tartuffe-ben a király megbízottja ilyen.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Színház és dráma Molière korában' },
        {
          kind: 'text',
          text: 'A 17. századi Franciaországban a színház az **udvari élet** és a **városi közönség** szórakozása volt. XIV. Lajos udvara védnökséget vállalt a művészek fölött, ugyanakkor ellenőrizte is őket. A klasszicista elmélet szerint a **tragédia** a magas műfaj, a **komédia** alacsonyabb rendű, de Molière a komédiát a társadalom ítélőszékévé tette. Elődeinek példáját, a commedia dell’arte típusait és a francia bohózati hagyományt is felhasználta.',
        },
        {
          kind: 'text',
          text: 'Molière társulatát maga vezette és maga is játszott. Mindez a mondanivaló, a színészi játék és a közönségre hatás szoros egységét eredményezte. A hagyomány szerint a **Képzelt beteg** előadása közben lett rosszul, és még aznap meghalt.',
        },
        { kind: 'heading', text: 'A fösvény' },
        {
          kind: 'text',
          text: '**Harpagon**, a vén fösvény a pénzét mindennél jobban szereti. Feleségül akarja venni a fiatal **Mariane-t**, akit a fia, **Cléante** szeret; a lányát, **Élise-t** egy gazdag, de idős férfihoz akarja adni. Elásott kincsét (a ládikóját) ellopják; a kétségbeesett Harpagon az egész házat megvádolja. A végén kiderül a család több titka, a fiatalok összeházasodhatnak, Harpagon visszakapja a pénzét, de a családi kapcsolatai tönkrementek. A darab **prózában** íródott.',
        },
        {
          kind: 'text',
          text: 'A fösvénység itt **szenvedély**, amely kifordítja az embert önmagából: Harpagon nem apa és férj, hanem a pénz rabja. A komikum a **túlzásból** adódik (a hős a saját vagyonának őrzésében nevetségessé válik), de a mögötte lévő kép **kegyetlen**: a pénz felbomlasztja a családot.',
        },
        { kind: 'heading', text: 'Tartuffe' },
        {
          kind: 'text',
          text: '**Orgon** befogadja házába a látszólag mélyen vallásos **Tartuffe-öt**, és mindenben engedelmeskedik neki, még a lánya, **Mariane** eljegyzését is felbontaná, hogy Tartuffe-nek adja. Tartuffe közben az otthon rendjét is, **Orgon feleségét**, **Elmire-t** is meg akarja szerezni. A család más tagjai (Dorine, Cléante) átlátnak rajta, de Orgon csak akkor ébred fel, amikor saját szemével látja Tartuffe képmutatását. A végén a király megbízottja letartóztatja Tartuffe-öt (**deus ex machina**).',
        },
        {
          kind: 'text',
          text: 'A mű a **képmutatás** és a vakhit bírálata, ezért a kortársak közül sokan támadták. Az előadását betiltották, később (1669) engedélyezték. Nem a vallást támadja, hanem azt, aki a vallást a **saját érdekére** használja fel.',
        },
        {
          kind: 'compare',
          title: 'A fösvény és a Tartuffe',
          columns: ['A fösvény', 'Tartuffe'],
          rows: [
            {
              label: 'Középpontban',
              cells: ['Harpagon pénzvágya', 'Tartuffe képmutatása és Orgon vaksága'],
            },
            {
              label: 'Komikum',
              cells: [
                'túlzás: a hős a pénzét siratja, ahelyett hogy a családjával törődne',
                'leleplezés: a látszat és a valóság összeütközik',
              ],
            },
            {
              label: 'Megoldás',
              cells: [
                'a titkok kiderülése, a fiatalok boldogsága',
                'külső beavatkozás: a király igazságot tesz',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Színpadra állítás: Harpagon lehet **nevetséges** és **tragikus** is, attól függően, hogy a rendező a komikumot vagy a magányt hangsúlyozza. Ugyanígy a Tartuffe befejezését is lehet **kritikusan** (a hatalom hamis igazsága) vagy **könnyed** megoldásként rendezni. Két előadás összevetésekor érdemes a díszletet, a jelmezt és a főszereplő játékmódját vizsgálni.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Világirodalmi *Színház és dráma* tétel: Molière egy műve, kiemelt szempont: jellemkomédia, komikum, társadalmi kritika.',
            'Drámarészlet értelmezése: egy jelenet a Fösvényből vagy a Tartuffe-ből, a szereplő viselkedése, a nyelv, a komikum eszközei.',
            'Összevetés: antik, shakespeare-i és klasszicista dráma, vagy a vígjáték és tragédia viszonya.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondd, hogy Molière „a vallást gúnyolja”: a Tartuffe célpontja a **képmutatás**, a vallásos máz alatt húzódó önzés. A komédiát se kezeld „csak viccként”: a nevetés mögött **komoly társadalmi** kérdés áll.',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: a komikum eszközei A fösvényben',
          problem: 'Mutasd be a komikum eszközeit Molière A fösvény című művében!',
          solution:
            '1. **Műfaj**: jellemkomédia, klasszicizmus, próza. 2. **Hős**: Harpagon, a pénz rabja. 3. **Eszközök**: túlzás, félreértés, az elásott ládika körüli jelenetek, a szereplők nevetséges beszéde. 4. **Mögöttes jelentés**: a pénz romboló hatása a családra. 5. **Megoldás**: a titkok kiderülése, a fiatalok boldogsága. 6. **Összegzés**: a nevetés a társadalmi bírálat eszköze.',
        },
      ],
      topicMatch: ['molière', 'a fösvény', 'tartuffe', 'klasszicista dráma'],
      cards: { subject: 'magyar', era: 'barokk' },
      quiz: [
        {
          question: 'Melyik irányzathoz kapcsolódik Molière színháza?',
          options: ['Romantika', 'Klasszicizmus', 'Realizmus', 'Szimbolizmus'],
          answer: 1,
          explanation:
            'Molière a 17. századi francia klasszicizmus korában alkotott, XIV. Lajos udvarának színházában.',
        },
        {
          question: 'Mit jelent a három egység elve?',
          options: [
            'Három szereplő van a színpadon.',
            'A műnek három felvonása van.',
            'Hely, idő és cselekmény egysége.',
            'Három műfaj keveredik.',
          ],
          answer: 2,
          explanation:
            'A klasszicista dráma szabálya szerint a cselekmény egy helyen, egy napon belül, egy fő szálon zajlik.',
        },
        {
          question: 'Melyik szereplő a Tartuffe-ben a megtévesztett családfő?',
          options: ['Harpagon', 'Orgon', 'Cléante', 'Valère'],
          answer: 1,
          explanation:
            'Orgon fogadja be Tartuffe-öt, és vakon hisz neki. Harpagon A fösvény főhőse.',
        },
        {
          question: 'Mi a Tartuffe központi témája?',
          options: [
            'A hatalom elvesztése',
            'A fiatal szerelmesek viszálya',
            'Egy kincs elrablása',
            'A képmutatás leleplezése',
          ],
          answer: 3,
          explanation:
            'Tartuffe a vallásosság álarcában csal és él vissza a bizalommal, a mű ezt leplezi le.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Molière', url: wiki('Molière') },
        { label: 'Wikipédia: A fösvény', url: wiki('A fösvény Molière') },
        { label: 'Wikipédia: Tartuffe', url: wiki('Tartuffe') },
      ],
    },
    {
      id: 'katona-bank-ban',
      subject: 'magyar',
      unitId: 'szinhaz-drama',
      title: 'Katona József: Bánk bán',
      level: 'kozep',
      requirement: {
        kozep:
          'Katona József: Bánk bán. A világlátás és a kifejezésmód bemutatása, drámarészletek értelmezése, színház és dráma a mű korában, a felvetett kérdések etikai, történeti, lélektani, társadalmi vonatkozásai; olvasatok, vélemények megértése.',
        emelt:
          'A mű színpadi előadása mint az interpretáció eszköze (színpadi megjelenítések összehasonlítása); gondolati, filozófiai, esztétikai vonatkozások; memoriter szöveghű és kifejező előadása.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Katona József** (1791–1830) kecskeméti származású drámaíró; fő műve a **Bánk bán** (1819-re készült el, 1820-ban jelent meg), a magyar dráma egyik csúcsa.',
            'A mű **történelmi tragédia**: II. András uralkodásának idején játszódik, a király távollétében **Gertrudis királynét** és a merániakat a **hazafias elégedetlenség** (Petur bán, Tiborc) fenyegeti.',
            'A **tragikus konfliktus** Bánk lelkében is zajlik: a **hűséges alattvaló**, a **férj** és a **hazafi** kötelessége ütközik. Bánk megöli a királynét, miközben **Melinda**, a felesége, Ottó erőszakos csábítása után megőrül és meghal.',
            'A darab **öt szakaszból** áll. Szerkezete: expozíció, bonyodalom, a **tetőpont** a Bánk és Gertrudis összecsapása, majd a katasztrófa.',
            'A mű a maga korában **nem aratott sikert**: először 1833-ban Kassán játszották, a Pesti Magyar Színház 1837-ben nyílt meg.',
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Bánk bán',
              text: 'A király távollétében a helytartó, a tragikus hős; a hazafi, a férj és a hűséges alattvaló szerepe ütközik benne.',
            },
            {
              name: 'Gertrudis',
              text: 'A királyné, a merániak vezére; a kormányzás hibái és a fivére, Ottó kicsapongása miatt az elégedetlenség fókusza.',
            },
            {
              name: 'Melinda',
              text: 'Bánk felesége, Ottó erőszakoskodásának áldozata; megőrül és meghal.',
            },
            { name: 'Ottó', text: 'Gertrudis fivére, Melinda csábítója.' },
            { name: 'Tiborc', text: 'A parasztok képviselője, panasza a nép sorsát jeleníti meg.' },
            { name: 'Petur bán', text: 'A lázadó, elégedetlen magyar nemesek vezére.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Színház és dráma Katona korában' },
        {
          kind: 'text',
          text: 'A 18. század végén indult el a **magyar nyelvű színjátszás**: 1790-ben Pesten magyar nyelvű előadást tartottak, de állandó, rendszeres magyar színház még nem működött. A vándortársulatok a vidéken, kisvárosokban játszottak, a hazai drámairodalom még gyenge volt. A **Pesti Magyar Színház** 1837-ben nyílt meg, később, 1840-től **Nemzeti Színház** a neve. Katona műve így nem a színházi közegből nőtt ki, hanem az előtt vált drámává, mielőtt a színházi hagyomány kialakult volna.',
        },
        { kind: 'heading', text: 'A mű keletkezése' },
        {
          kind: 'text',
          text: 'Katona József az **Erdélyi Múzeum** pályázatára írta a drámát; a végleges változat 1819-re készült el, **1820-ban** jelent meg. Életében a mű nem keltett visszhangot. A színpadon először **1833-ban, Kassán** adták elő. A mű valódi jelentőségét a 19. század második felében ismerték fel. Katona a **shakespeare-i drámát** vette példának.',
        },
        { kind: 'heading', text: 'A cselekmény' },
        {
          kind: 'text',
          text: 'II. András király **hadjáraton** van, az országot felesége, **Gertrudis királyné** és az idegen, meráni kísérete uralja. A királyné fivére, **Ottó** Bánk felesége, **Melinda** után les. A nemesek, **Petur bán** vezetésével, szövetkeznek Gertrudis ellen. Bánk előbb szeretné **békésen** rendezni a bajokat, de a parasztok sorsát megismerve (**Tiborc** panasza) és Melinda megaláztatását látva dönt. Bánk **megöli Gertrudist**. Melinda megőrül, és meghal; a király hazatér, és Bánknak számot kell adnia a tettéről.',
        },
        { kind: 'heading', text: 'Értelmezési szempontok' },
        {
          kind: 'keypoints',
          items: [
            '**Műfaj**: történelmi tragédia, **konfliktusdráma**: a tragikus hős döntése összeütközik a hűségével.',
            '**Bánk belső konfliktusa**: a király iránti hűség, a hazafiság és az apai-férji kötelesség. Bánk egyszerre **bíró és vádlott**.',
            '**Tiborc** alakja: a nép szenvedése, a társadalmi igazságtalanság képe.',
            '**Gertrudis** nem egyszerű gonosz: tragikus alak, aki a hatalom és a családi érdek foglya.',
            'A **nemzeti tragédia** gondolata: az ország sorsa és az egyén tragédiája összefonódik.',
          ],
        },
        {
          kind: 'text',
          text: 'A mű **olvasatai** eltérőek: lehet **hazafias** dráma (a nemzet védelme), **erkölcsi** dráma (a bosszú és a jog) vagy **lélektani** tragédia (a hős kételyei, tévedései). A Bánk bán témája a **zsarnokölés**, vagyis az igazságtalan hatalom elleni fellépés jogosságának kérdése.',
        },
        {
          kind: 'text',
          text: 'A mű utóélete: **Erkel Ferenc** operát írt belőle (1861), amely a darab népszerűségét is erősítette. A „Bánk bán” a magyar színjátszás egyik legtöbbet játszott és vitatott darabja.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Színpadi előadás és memoriter.** A Bánk bán rendezései eltérnek abban, hogy Bánkot **hősnek** vagy **tragikusan tévedőnek** mutatják, Gertrudist pedig **gonosznak** vagy **áldozatnak**. Ezért két előadás összevetésekor a főszereplők játéka, a Bánk–Gertrudis jelenet rendezése és a befejezés hatása a kulcs. A kötelezőnek kijelölt **memoriter** szöveghű és kifejező előadásához a jelenet gondolati ívét és a szereplő indulatát is meg kell értened.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Magyar irodalmi tétel a *Színház és dráma* témakörben: Katona József Bánk bán, kiemelt szempont: tragikus konfliktus, hős, műfaj, szerkezet.',
            'Írásbeli: drámarészlet-értelmezés, műfaji és szerkezeti kérdések az irodalmi feladatlapon.',
            'Összehasonlító tétel: Bánk bán és Az ember tragédiája (nemzeti és egyetemes tragédia), vagy a Bánk bán és Shakespeare tragédiái.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy Bánkot „gyilkosnak” és Gertrudist „áldozatnak” (vagy fordítva) egy mondattal lezárod. A mű **kétoldalú**: Bánk tette jogos is, szörnyű is. Ne keverd össze a személyeket sem (Ottó a királyné fivére, Melinda Bánk felesége).',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: Bánk tragikus konfliktusa',
          problem: 'Mutasd be Bánk bán tragikus konfliktusát!',
          solution:
            '1. **Kor és mű**: Katona József, magyar romantikus történelmi tragédia, 1819/1820. 2. **Helyzet**: a király távol, a merániak uralma, az elégedetlen nemesek. 3. **Bánk dilemmája**: a király iránti hűség és a haza, a feleség védelme. 4. **Tetőpont**: Bánk és Gertrudis összecsapása. 5. **Katasztrófa**: a királyné halála, Melinda halála. 6. **Értelmezés**: a hűség és a lelkiismeret dilemmája, nemzeti sors és egyéni tragédia.',
        },
      ],
      topicMatch: ['katona józsef', 'bánk bán'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Milyen műfajú Katona József Bánk bán című műve?',
          options: ['Vígjáték', 'Történelmi tragédia', 'Elbeszélő költemény', 'Bohózat'],
          answer: 1,
          explanation: 'A mű történelmi tragédia, amely a hűség és a hazafiság konfliktusára épül.',
        },
        {
          question: 'Ki Ottó a Bánk bánban?',
          options: [
            'Bánk testvére',
            'Gertrudis királyné fivére, Melinda csábítója',
            'II. András fia',
            'A parasztok vezére',
          ],
          answer: 1,
          explanation: 'Ottó a királyné fivére, aki Melinda után les.',
        },
        {
          question: 'Ki jeleníti meg a nép panaszát a darabban?',
          options: ['Petur bán', 'Biberach', 'Tiborc', 'Myksa bán'],
          answer: 2,
          explanation: 'Tiborc paraszt, panasza a nép nyomorát mutatja.',
        },
        {
          question: 'Hol adták elő először a Bánk bánt (1833)?',
          options: ['Pesten', 'Kassán', 'Kecskeméten', 'Pozsonyban'],
          answer: 1,
          explanation:
            'Az első előadás 1833-ban Kassán volt; a Pesti Magyar Színház 1837-ben nyílt meg.',
        },
        {
          question: 'Miben állhat két Bánk bán-előadás különbsége?',
          options: [
            'Csak a jelmezekben',
            'A mű szövegének nyelvében, minden esetben',
            'A rendezői értelmezésben: Bánk hősként vagy tragikus tévedőként jelenik meg',
            'Abban, hogy van-e kar',
          ],
          answer: 2,
          explanation:
            'A színpadi előadás értelmezés: a rendezés dönti el, hogyan látjuk Bánkot és Gertrudist.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Katona József', url: wiki('Katona József') },
        { label: 'Wikipédia: Bánk bán (dráma)', url: wiki('Bánk bán Katona József dráma') },
        { label: 'Wikipédia: Pesti Magyar Színház', url: wiki('Pesti Magyar Színház') },
      ],
    },
    {
      id: 'madach-az-ember-tragediaja',
      subject: 'magyar',
      unitId: 'szinhaz-drama',
      title: 'Madách Imre: Az ember tragédiája',
      level: 'kozep',
      requirement: {
        kozep:
          'Madách Imre: Az ember tragédiája. A világlátás és a kifejezésmód bemutatása, műrészletek értelmezése, színház és dráma a mű korában; a felvetett kérdések etikai, történeti, lélektani, társadalmi vonatkozásai. Egy 19. századi dráma: Ibsen, Csehov.',
        emelt:
          'A mű színpadi előadása mint az interpretáció eszköze; gondolati, filozófiai, esztétikai vonatkozások; memoriter szöveghű és kifejező előadása.',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Madách Imre** (1823–1864) **Az ember tragédiáját** 1859–1860-ban írta; 1861-es címlappal, **1862 elején** jelent meg. **Arany János** átnézte, nyelvileg és stilisztikailag javította.',
            'Műfaja **drámai költemény**, a **romantika** filozófiai alkotása: az emberiség története 15 színben, Ádám és Éva, valamint **Lucifer** szerepeltetésével.',
            'A szerkezet: **keretszínek** (I–III. és XV.) és **történelmi színek** (IV–XIV.). Ádám a történelem különböző korszakaiban él, Éva mindig más alakban jelenik meg, Lucifer kísérőként és kétkedőként követi.',
            'Az **Úr** és **Lucifer** vitája: van-e értelme az emberi törekvésnek? A mű végén az Úr szavai: „Mondottam, ember: küzdj és bízva bízzál!”',
            'A **színpadon** először 1883-ban, a Nemzeti Színházban mutatták be.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1859–1860',
              text: 'Madách megírja Az ember tragédiáját (1859. február–1860. március).',
            },
            {
              date: '1861–1862',
              text: 'A mű megjelenik (a kötet címlapján 1861, tényleges megjelenés 1862 elején).',
            },
            {
              date: '1883',
              text: 'A Nemzeti Színházban az első előadás, Paulay Ede rendezésében.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Madách és a kor' },
        {
          kind: 'text',
          text: 'Madách Imre a Nógrád megyei **Alsósztregován** született. A szabadságharc bukása után elszigetelődött, magánéleti válságot is átélt (a házassága felbomlott). A világszemléletet a **1848–49 utáni csalódás** és a **felvilágosodás-eszme** kudarca is alakította. A mű témája: az **emberiség sorsa**, az, hogy van-e értelme a küzdésnek, a haladásnak.',
        },
        { kind: 'heading', text: 'A színek' },
        {
          kind: 'compare',
          title: 'A 15 szín',
          columns: ['Szín', 'Helyszín'],
          rows: [
            {
              label: 'I–III.',
              cells: ['keret', 'mennyország, paradicsom, a Paradicsomból kiűzve'],
            },
            {
              label: 'IV–VII.',
              cells: ['ókor, középkor kezdete', 'Egyiptom, Athén, Róma, Konstantinápoly'],
            },
            { label: 'VIII–X.', cells: ['kora újkor', 'Prága, Párizs, Prága II.'] },
            {
              label: 'XI–XIV.',
              cells: ['újkor, jövő', 'London, falanszter, az űr, eszkimó-világ'],
            },
            { label: 'XV.', cells: ['keret', 'a Paradicsomból kiűzve (a végső jelenet)'] },
          ],
        },
        {
          kind: 'text',
          text: 'Minden történelmi színben **Ádám** más szerepben (fáraó, Miltiádész, Sergiolus, Tankréd, Kepler, Danton, polgár, tudós) próbál eszményt megvalósítani, de mindig csalódik. **Éva** mindig más nőalakként tér vissza, **Lucifer** pedig mindenhol ott van, és azt bizonygatja, hogy az emberi törekvés hiábavaló.',
        },
        { kind: 'heading', text: 'Szereplők és eszmék' },
        {
          kind: 'people',
          items: [
            {
              name: 'Ádám',
              text: 'Az ember, aki az eszményt keresi, hisz a haladásban; csalódásai ellenére nem adja fel.',
            },
            {
              name: 'Éva',
              text: 'Az emberi nem anyja és a női princípium: érzelem, szerelem, a küzdelem biztosítéka; minden színben más alakban.',
            },
            {
              name: 'Lucifer',
              text: 'A tagadás szelleme, a kételkedő. Az Úr ellenfele és Ádám kísérője.',
            },
            {
              name: 'Az Úr',
              text: 'A keretszínek isteni alakja; végső szava az emberi küzdelem értelmét erősíti.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A mű **kérdései**: van-e értelme a történelemnek, a haladásnak? Lehet-e boldog az ember? Mi a szerepe az eszménynek, a szabadságnak, a szerelemnek? A színek egy-egy **kor eszményét** mutatják be, és azt is, miért bukik el: a rabszolgaság Egyiptomban, a demokrácia Athénban, a hedonizmus Rómában, a vallási fanatizmus a középkorban, a tudomány korlátai Prágában, a forradalom Párizsban, a pénz és a verseny Londonban, a falanszterben az egyén szabadságának elvesztése.',
        },
        {
          kind: 'text',
          text: 'A mű végén Ádám kétségbeesésében az **öngyilkosság** gondolata felé fordul, de **Éva** közli, hogy gyermeket vár. Ádám ekkor visszatér az élethez. Az **Úr** szavai („Mondottam, ember: küzdj és bízva bízzál!”) nem ad egyértelmű választ, hanem a **küzdés** és a **bizalom** értékét hangsúlyozza.',
        },
        { kind: 'heading', text: 'Színház és dráma Madách korában' },
        {
          kind: 'text',
          text: 'A Tragédia **nem a színpadra** íródott: a műfaja **drámai költemény** amelyet inkább olvasni lehet. Az első színpadi előadás **1883-ban** a Nemzeti Színházban volt, Paulay Ede rendezésében. Azóta számos rendezés született: a mű színpadi megvalósítása nehéz feladat (az időugrások, a színek sokasága, a látványos és a filozófiai elemek egyensúlya).',
        },
        { kind: 'heading', text: 'Egy 19. századi dráma: Ibsen és Csehov' },
        {
          kind: 'text',
          text: 'A követelmény külön kéri **egy 19. századi dráma** ismeretét is (**Ibsen**, **Csehov**). **Henrik Ibsen** (1828–1906) norvég drámaíró, a modern **társadalmi dráma** mestere; híres műve a **Nóra** (Babaház, 1879), amely a nő egyéni szabadságáról és a házasság hazugságairól szól. **Anton Pavlovics Csehov** (1860–1904) orosz író, kevés külső cselekményű, **hangulati** drámák szerzője (*Sirály*, *Három nővér*, *Cseresznyéskert*), ahol a kimondatlan vágyak, a **magány** és a **meg nem értettség** számít.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Színpadi előadás és filozófiai olvasat.** A Tragédia rendezései eltérnek: a rendező a **történelmi** (haladás és bukás), a **filozófiai** (az ember helye a világban) vagy a **lélektani** (Ádám és Éva viszonya) szempontot emelheti ki. Az összevetésnél a színek kiválasztása, a Lucifer-szerep, a kezdő és a záró jelenet hangsúlya, valamint a látványvilág a kulcs. A kötelezőnek kijelölt **memoriter** előadásához a jelenet gondolati íve szükséges.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Magyar irodalmi tétel a *Színház és dráma* témakörben: Madách Imre Az ember tragédiája. Kiemelt szempont: műfaj, szerkezet, a szereplők, a filozófiai mondanivaló.',
            'Összehasonlító tétel: Madách és Katona (nemzeti és egyetemes tragédia), vagy Madách és más, a történelem vagy az ember sorsát vizsgáló mű.',
            'Drámarészlet-értelmezés: egy szín (például a Paradicsom, Athén, a falanszter), a szereplők beszéde, a párbeszéd gondolati ívét kell bemutatni.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondd, hogy a mű „pesszimista” vagy „optimista”, mert a vég **nyitott**: a kétség és a bizalom egyszerre van jelen. Ne keverd össze a **keretszíneket** (I–III., XV.) és a **történelmi színeket** (IV–XIV.). Arany János javított, de a mű szerzője Madách.',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: a mű szerkezete és tanulsága',
          problem: 'Mutasd be Az ember tragédiája szerkezetét és fő kérdését!',
          solution:
            '1. **Mű**: drámai költemény, romantika, Madách, 1859–1860. 2. **Szerkezet**: keret (I–III., XV.) és 11 történelmi szín (IV–XIV.). 3. **Szereplők**: Ádám, Éva, Lucifer, az Úr. 4. **Menet**: Ádám különböző korokban próbál eszményt megvalósítani, és csalódik. 5. **Kérdés**: van-e értelme az emberi törekvésnek? 6. **Vég**: az Úr szava, a küzdés és a bizalom gondolata. 7. **Összegzés**: egyetemes kérdések, nyitott befejezés.',
        },
        {
          kind: 'tip',
          text: 'Ha a vizsgán egy színt kapsz, először azonosítsd a kor eszméjét, Ádám szerepét, majd Lucifer ellenvetését, végül a **bukás okát**. Ez mindig működő menet.',
        },
      ],
      topicMatch: ['madách', 'az ember tragédiája', 'ibsen', 'csehov'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Hány színből áll Az ember tragédiája?',
          options: ['12', '15', '10', '18'],
          answer: 1,
          explanation: 'A mű 15 színből áll, három keretszínnel az elején és egy a végén.',
        },
        {
          question: 'Melyik mű műfaja a „drámai költemény”?',
          options: ['A fösvény', 'Az ember tragédiája', 'Hamlet', 'Bánk bán'],
          answer: 1,
          explanation:
            'Madách műve drámai költemény: filozófiai tartalmú, versben írt dráma, amely inkább olvasásra való.',
        },
        {
          question: 'Ki javította át nyelvileg a művet megjelenés előtt?',
          options: ['Petőfi Sándor', 'Arany János', 'Vörösmarty Mihály', 'Jókai Mór'],
          answer: 1,
          explanation: 'Arany János átnézte és javította a szöveget.',
        },
        {
          question: 'Melyik szín tartozik a keretszínek közé?',
          options: ['Athén', 'Róma', 'Mennyország', 'Falanszter'],
          answer: 2,
          explanation:
            'A keretszínek a mennyország, a Paradicsom, a Paradicsomból kiűzve és a záró jelenet.',
        },
        {
          question: 'Mit emel ki az Úr záró szava?',
          options: [
            'A halál győzelmét',
            'A tudomány haladását',
            'A küzdés és a bizalom értékét',
            'A bosszú jogosságát',
          ],
          answer: 2,
          explanation:
            'Az Úr („küzdj, és bízva bízzál”) nem ad kész választ, hanem a küzdés és a bizalom értékét hangsúlyozza.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Madách Imre', url: wiki('Madách Imre') },
        { label: 'Wikipédia: Az ember tragédiája', url: wiki('Az ember tragédiája dráma') },
        { label: 'Wikipédia: Henrik Ibsen', url: wiki('Henrik Ibsen') },
      ],
    },
    {
      id: 'epikus-abszurd-dramak-orkeny',
      subject: 'magyar',
      unitId: 'szinhaz-drama',
      title: 'Epikus és abszurd dráma, 20. századi magyar dráma',
      level: 'emelt',
      requirement: {
        emelt:
          'Az epikus dráma. Az abszurd dráma. Egy 20–21. századi magyar dráma. Az adott mű színpadi előadása mint az interpretáció eszköze (pl. színpadi megjelenítések összehasonlítása). Memoriter szöveghű és kifejező előadása. A művekben felvetett kérdések gondolati, filozófiai, esztétikai vonatkozása.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **epikus dráma** (epikus színház) a 20. századi modern színház iránya: nem a beleélésre, hanem a **gondolkodásra** épít; a nézőt kritikai távolságban tartja (**elidegenítő effektus**). Legismertebb képviselője **Bertolt Brecht** (*Kurázsi mama és gyermekei*).',
            'Az **abszurd dráma** a világháborúk utáni színház iránya: az **értelmetlenség**, a **kommunikáció csődje** és az **ember magányának** kifejezése, a hagyományos cselekmény helyett helyzetekkel. Legismertebb példája **Samuel Beckett**: *Godot-ra várva* (1953-ban mutatták be Párizsban).',
            '**Örkény István** (1912–1979) a magyar **groteszk** és abszurd irányzat jellegzetes alkotója; drámái: **Tóték**, **Macskajáték**.',
            'Az **emelt szintű** szóbelin színpadi előadások összehasonlítása és a kijelölt **memoriter** is szerepelhet.',
          ],
        },
        {
          kind: 'compare',
          title: 'Hagyományos, epikus és abszurd dráma',
          columns: ['Epikus dráma (Brecht)', 'Abszurd dráma (Beckett)'],
          rows: [
            {
              label: 'Cél',
              cells: [
                'kritikai gondolkodás, társadalmi tanulság',
                'az értelmetlenség és a magány megmutatása',
              ],
            },
            {
              label: 'Szerkezet',
              cells: ['önálló jelenetek, narráció, songok', 'ismétlődő, lassan haladó helyzetek'],
            },
            {
              label: 'Nyelv',
              cells: ['tanító, közlő, ironikus', 'töredezett, elakadó, értelmetlenné váló'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az epikus dráma' },
        {
          kind: 'text',
          text: 'Az **epikus színház** a hagyományos „arisztotelészi” drámával áll szemben: nem akarja, hogy a néző beleélje magát és átélje a katarzist, hanem hogy **ítélkezzen**. Eszközei az **elidegenítő effektus** (a néző nem feledkezik meg arról, hogy színházban van), a **narrátor**, a feliratok, a **songok**, az egymástól független jelenetek. Az események nem szükségszerűek, hanem **megváltoztathatók**, ezért a néző felelősségét hangsúlyozza. **Bertolt Brecht** (1898–1956) német drámaíró és rendező ennek az irányzatnak a megteremtője; híres művei a **Koldusopera** (1928) és a **Kurázsi mama és gyermekei** (1939). A Kurázsi mama a harmincéves háborúban játszódik, és azt mutatja, hogy a háborúból haszonszerző ember mindent elveszít.',
        },
        { kind: 'heading', text: 'Az abszurd dráma' },
        {
          kind: 'text',
          text: 'Az **abszurd** („képtelen”) színház a második világháború utáni tapasztalatot fejezi ki: a világnak nincs értelme, az emberek nem értik egymást. A szerkezet nem a hagyományos cselekményt követi, a párbeszédek **üresek** vagy ismétlődnek, a helyzetek **groteszkek**. **Samuel Beckett** *Godot-ra várva* című darabjában két férfi egy kietlen helyen **egy meg nem érkező szereplőre** vár; a várakozás maga a mű tárgya. Az abszurd dráma az **elidegenedés**, a magány és a kommunikáció válságát jeleníti meg.',
        },
        { kind: 'heading', text: 'Egy 20. századi magyar dráma: Örkény István' },
        {
          kind: 'text',
          text: '**Örkény István** (1912–1979) a magyar **groteszk** látásmód legjelentősebb írója; az **Egyperces novellák** (1968) szerzője, a drámái a **Tóték** (1967) és a **Macskajáték**. A **Tóték** a második világháború idején egy faluban játszódik. Egy **őrnagy** a frontról érkezik a Tót családhoz, a család engedelmesen kiszolgálja, a kedvességgel igyekszik az őrnagy kedvében járni, de közben a **kiszolgáltatottság és az erőszak** válik uralkodóvá, végül a család férfi tagja, Tót Lajos megöli az őrnagyot. A mű a hatalom és a kiszolgáltatottság, a tehetetlenség és az ellenállás kérdéséről szól, **groteszk** formában.',
        },
        {
          kind: 'text',
          text: 'Az Örkény-drámát **tragikomédiaként**, **groteszkként** értelmezik: a nevetés és a rettenet egyszerre jelenik meg. Nem szó szerint abszurd, de rokon az abszurd színházzal abban, hogy **az emberi helyzet kiszolgáltatottságát** mutatja.',
        },
        { kind: 'heading', text: 'Színpadi előadás mint értelmezés' },
        {
          kind: 'keypoints',
          items: [
            'Egy mű színpadi előadása **olvasat**: a rendezés a szöveget értelmezi.',
            'Az összehasonlítás szempontjai: **díszlet**, **jelmez**, **szerepformálás**, **zene**, **szövegváltozat**, a **befejezés** hangsúlya.',
            'Mindig a **kérdésre** válaszolj: mit emel ki az előadás a műből, és mit hagy el?',
            'A felvett kérdések (gondolati, filozófiai, esztétikai) a rendezés választásaiban is megjelennek.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szóbeli: az epikus vagy az abszurd dráma jellemzői egy konkrét mű alapján, vagy egy 20. századi magyar dráma (például Örkény egy drámája) bemutatása.',
            'Színpadi megjelenítések összehasonlítása: két előadás vagy rendezés ugyanarról a műről, egy kiemelt szemponttal.',
            'Memoriter: szöveghű és kifejező előadás, ha a tétel kéri.',
            'Összehasonlítás: hagyományos dráma és epikus vagy abszurd dráma; Katona vagy Madách és Örkény.',
          ],
        },
        {
          kind: 'warning',
          text: 'Az **epikus** és az **abszurd** drámát ne keverd össze: az epikus színház **tanít és kritikus gondolkodásra nevel**, az abszurd az **értelmetlenséget** mutatja. Brecht nem az abszurd drámához tartozik. Ha Örkényről beszélsz, a **groteszk** fogalmát is használd.',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: Örkény István drámája',
          problem:
            'Mutasd be egy 20. századi magyar dráma (Örkény István: Tóték) világlátását és kifejezésmódját!',
          solution:
            '1. **Szerző és mű**: Örkény István, Tóték, a groteszk látásmód. 2. **Helyzet**: az őrnagy és a Tót család viszonya, kedvesség és kiszolgáltatottság. 3. **Eszközök**: groteszk túlzás, a hétköznapi és a rettenetes keveredése. 4. **Értelmezés**: a hatalom hatása az emberi viselkedésre, a megalkuvás határa. 5. **Előadás**: hogyan hangsúlyozzák a rendezések a komikumot vagy a tragikumot.',
        },
      ],
      topicMatch: [
        'epikus színház',
        'abszurd dráma',
        'brecht',
        'beckett',
        'örkény',
        'modern dráma',
        'dramaturgia',
        'dramatizálás',
      ],
      cards: { subject: 'magyar', era: 'kesomodern' },
      quiz: [
        {
          question: 'Melyik fogalom jellemzi Brecht epikus színházát?',
          options: ['Katarzis', 'Három egység', 'Elidegenítő effektus', 'Színház a színházban'],
          answer: 2,
          explanation:
            'Az elidegenítő effektus tartja kritikai távolságban a nézőt; a cél nem a beleélés, hanem a gondolkodás.',
          emelt: true,
        },
        {
          question: 'Melyik mű az abszurd dráma legismertebb példája?',
          options: ['Godot-ra várva', 'Kurázsi mama és gyermekei', 'Bánk bán', 'A fösvény'],
          answer: 0,
          explanation:
            'Beckett Godot-ra várva című műve az abszurd dráma legismertebb példája; a Kurázsi mama Brechté.',
          emelt: true,
        },
        {
          question: 'Melyik Örkény István-dráma?',
          options: ['Tóték', 'Bánk bán', 'Hamlet', 'Az ember tragédiája'],
          answer: 0,
          explanation: 'A Tóték Örkény István drámája, 1967-ből.',
          emelt: true,
        },
        {
          question: 'Mit jelent a színpadi előadás mint az interpretáció eszköze?',
          options: [
            'Az előadás pontosan lemásolja a szöveget.',
            'A rendezés választásai (díszlet, szereposztás, hangsúlyok) a mű egy olvasatát adják.',
            'Az előadás csak a színészek munkája.',
            'A néző szerepe nem számít.',
          ],
          answer: 1,
          explanation:
            'Az előadás értelmezés: a rendező és a színészek döntéseivel egy lehetséges olvasatot hoznak létre.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Bertolt Brecht', url: wiki('Bertolt Brecht') },
        { label: 'Wikipédia: Örkény István', url: wiki('Örkény István') },
        { label: 'Wikipédia: Abszurd dráma', url: wiki('abszurd dráma') },
      ],
    },
  ],
};

export default unit;
