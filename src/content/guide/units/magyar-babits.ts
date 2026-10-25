import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Babits Mihály életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'babits',
  subject: 'magyar',
  order: 62,
  title: 'Babits Mihály életműve',
  requirementRef:
    '2.1 Szerzők, művek, 1. témakör: Életművek a magyar irodalomból. Kötelező szerzők (Babits Mihály)',
  intro:
    'A Nyugat első nemzedékének „tudós költője”: az önmagába zárt lírikus korai versei, a háborúellenes költészet, a betegség és a halál előtti számvetés, végül a Jónás könyve. Életút, főbb művek, kapcsolatok az életművön belül és a műelemzés menete.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 1. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'babits-eletut-nyugat-poeta-doctus',
      subject: 'magyar',
      unitId: 'babits',
      title: 'Babits életútja, a Nyugat és a poeta doctus',
      level: 'emelt',
      requirement: {
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság, a jellegzetes regionális, kulturális kötődések; a pályaképre ható irányzatok és szellemi kötődések, világirodalmi párhuzamok; kötetek, ciklusok.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Babits Mihály** (1883–1941) a **Nyugat** első nemzedékének egyik vezéralakja: költő, regényíró, esszéíró, műfordító, később a lap szerkesztője.',
            'Született: **Szekszárd**, 1883. november 26. Meghalt: **Budapest**, 1941. augusztus 4.',
            'Latin–magyar szakos tanár volt; a műveltsége a **klasszikus és a nyugat-európai irodalom** ismeretén alapul. Ezért nevezik **poeta doctusnak** (tudós költőnek).',
            'Pályájának nagy szakaszai: **1.** a korai, önmagába forduló líra (1909–1911), **2.** a háború éveinek költészete (1910-es évek közepe), **3.** a „hit és felelősség” költészete, **4.** a betegség és a számvetés (1930-as évek).',
            'Az utolsó években **gégerákkal** küzdött: az 1938-as műtét után már nem tudott beszélni, írásban közölt.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1883', text: 'Szekszárdon született.' },
            {
              date: '1893–1901',
              text: 'A pécsi cisztercita gimnáziumban tanul, 1901-ben érettségizik.',
            },
            { date: '1909', text: 'Megjelenik első kötete, a *Levelek Írisz koszorújából*.' },
            { date: '1911', text: '*Herceg, hátha megjön a tél is!* című kötet.' },
            { date: '1916', text: '*Recitatív* című kötet, háborús versek; *Húsvét előtt*.' },
            { date: '1929', text: 'A Nyugat szerkesztője lesz.' },
            { date: '1938', text: 'Gégeműtét; megjelenik a *Jónás könyve*.' },
            { date: '1941', text: 'Budapesten meghal.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Iskolák, tanári évek' },
        {
          kind: 'text',
          text: 'Babits **Szekszárdon** született, az iskoláit **Pécsett** végezte (cisztercita gimnázium, 1901-ben érettségizett). A budapesti egyetemen **magyar–latin szakon** tanult; itt ismerkedett meg Juhász Gyulával és Kosztolányi Dezsővel. Tanárként több helyen dolgozott, többek között **Baján**, **Szegeden** és **Fogarason**, később Újpesten. A tanári pálya mellett fordított, esszét és verset írt.',
        },
        {
          kind: 'map',
          title: 'Babits életének helyszínei',
          places: [
            { name: 'Szekszárd', lat: 46.35, lon: 18.71, note: 'szülővárosa' },
            { name: 'Pécs', lat: 46.07, lon: 18.23, note: 'gimnáziumi évek' },
            { name: 'Baja', lat: 46.18, lon: 18.95, note: 'tanári állás' },
            { name: 'Szeged', lat: 46.25, lon: 20.15, note: 'tanári állás' },
            { name: 'Fogaras', lat: 45.84, lon: 24.97, note: 'tanári állás' },
            {
              name: 'Budapest',
              lat: 47.5,
              lon: 19.04,
              note: 'az irodalmi élet központja, halála helye',
            },
          ],
        },
        { kind: 'heading', text: 'A Nyugat' },
        {
          kind: 'text',
          text: 'A **Nyugat** (1908–1941) a magyar irodalmi modernség legfontosabb folyóirata. Babits a lap első nemzedékéhez tartozott, Ady Endre, Kosztolányi Dezső, Móricz Zsigmond és mások mellett. Szerkesztőként **1929-től** volt a lap vezető alakja. A Nyugat az esztétikai értéket, az európai irodalom ismeretét és a függetlenséget tartotta fontosnak.',
        },
        { kind: 'heading', text: 'Poeta doctus: mit jelent?' },
        {
          kind: 'text',
          text: 'A **poeta doctus** (latinul: tudós költő) olyan szerző, akinek a költészete tudatosan épít az **irodalmi hagyományra**: antik és bibliai témákra, mitológiai és európai kulturális utalásokra, a verselés gazdag ismeretére. Babitsnál ez a költői formák (rím, ritmus, strófaszerkezet) fegyelmezett használatában, a **filozófiai és vallási** kérdések iránti érdeklődésben, valamint az **intertextualitásban** látszik. A **Dante-fordítás** (*Isteni színjáték*) a legnagyobb műfordítói vállalkozása, és szorosan kapcsolódik ehhez az alkathoz.',
        },
        {
          kind: 'compare',
          title: 'Babits és Ady a Nyugatban',
          columns: ['Ady Endre', 'Babits Mihály'],
          rows: [
            {
              label: 'Alkat',
              cells: [
                'látnok, küzdő, a korszak „prófétája”',
                'tudós, mérlegelő, a hagyomány őrzője',
              ],
            },
            {
              label: 'Hatások',
              cells: [
                'francia szimbolizmus, a magyar prófétai hagyomány',
                'antik és bibliai kultúra, Dante, az európai irodalom',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten érdemes látnod a **pályaképet**: a korai, műveltségelvű és önmagába forduló verseket a háború élménye vezeti a közösségi felelősség felé; később a költő **prófétai küldetésének** kérdése (Jónás) és a **személyes szembenézés a betegséggel** (Balázsolás) válik központivá. A kötetek közül a *Levelek Írisz koszorújából* (1909), a *Herceg, hátha megjön a tél is!* (1911), a *Recitatív* (1916) és a *Sziget és tenger* (1925) a legfontosabbak.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel (a teljes szóbeli felelet, irodalom és nyelv együtt, középszinten legfeljebb 15, emelt szinten 20 perc): a Babits-életmű bemutatása néhány vers elemzésével.',
            'Irodalmi feladatlap: fogalom (poeta doctus, ars poetica), mű–szerző párosítás, memoriter kiegészítése.',
            'Emelt szinten: az életpálya szakaszai, a Nyugat szerepe, a kortársi kapcsolatok.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba a **poeta doctus** puszta „okos költő” szinonimának tekintése. A lényege az, hogy a költészet tudatosan a **műveltségre és a hagyományra** épül. Ne keverd össze a Nyugat szerkesztőit sem: **Babits** 1929-től jelentős, de a lapot nem ő alapította.',
        },
        {
          kind: 'tip',
          text: 'Babits **Jónás imája** című verse szerepel az alkalmazás **Memoriterek** részében: tanuld meg, mert az életmű-tételben ars poeticaként is felhasználhatod.',
        },
      ],
      topicMatch: ['babits'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik folyóirat első nemzedékéhez tartozott Babits Mihály?',
          options: ['Pesti Divatlap', 'Nyugat', 'Athenaeum', 'Kritikai Lapok'],
          answer: 1,
          explanation:
            'Babits a Nyugat első nemzedékének egyik meghatározó alakja volt, 1929-től a lap szerkesztője.',
        },
        {
          question: 'Mit jelent a „poeta doctus” kifejezés?',
          options: [
            'Népies hangú költő.',
            'Tudós költő, aki tudatosan épít a műveltségre és a hagyományra.',
            'Politikai költő.',
            'Vándorköltő.',
          ],
          answer: 1,
          explanation:
            'A latin kifejezés tudós költőt jelent; Babitsra a klasszikus és az európai irodalom ismerete jellemző.',
        },
        {
          question: 'Hol született Babits Mihály?',
          options: ['Pécsett', 'Szegeden', 'Budapesten', 'Szekszárdon'],
          answer: 3,
          explanation: 'Szekszárdon született 1883. november 26-án; Pécsett a gimnáziumba járt.',
        },
        {
          question: 'Melyik műfordítói vállalkozása a legjelentősebb?',
          options: [
            'Shakespeare összes drámája',
            'Dante: Isteni színjáték',
            'Goethe: Faust',
            'Homérosz: Odüsszeia',
          ],
          answer: 1,
          explanation: 'Dante Isteni színjátékát fordította le, 1913-tól kezdődően.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Babits Mihály', url: wiki('Babits Mihály') },
        { label: 'Wikipédia: Nyugat (folyóirat)', url: wiki('Nyugat folyóirat') },
        { label: 'Wikipédia: Poeta doctus', url: wiki('poeta doctus') },
      ],
    },
    {
      id: 'babits-korai-lira-lirikus-epilogja-esti-kerdes',
      subject: 'magyar',
      unitId: 'babits',
      title: 'A korai líra: A lírikus epilógja és az Esti kérdés',
      level: 'kozep',
      requirement: {
        kozep:
          'A főbb művek szövegismereten alapuló értelmezése, kapcsolatok a művek között; néhány lírai alkotás bemutatása (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek); műrészletek értelmezése.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a pályaszakaszokat jellemző főbb témák, kérdésfeltevések.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A korai Babits-versek a *Levelek Írisz koszorújából* (1909) kötetben jelentek meg.',
            '*A lírikus epilógja*: **ars poetica**; a költő saját énjébe zárva érzi magát, a világgal való kapcsolat lehetetlenségét (**szolipszizmus**) fogalmazza meg.',
            '*Esti kérdés* (1909): **gondolati vers**; az esti táj leírásából kibontakozó kérdés az emberi élet és a világ értelméről.',
            'A két vers közös motívuma a **magány**, az **önvizsgálat** és a **kérdezés**.',
            'Műfaj: lírai költemények; a gondolatiság és a filozófiai kérdésfeltevés a jellemzőjük.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ars poetica',
              text: 'Költői önmeghatározás: a vers a költő szerepéről, feladatáról, a költészet lehetőségeiről szól.',
            },
            {
              term: 'szolipszizmus',
              text: 'Az a felfogás, hogy az egyén csak a saját tudatának létezését tudja biztosan; a költő itt az énjébe zártság élménye.',
            },
            {
              term: 'gondolati vers',
              text: 'A lírai tárgy egy gondolat, kérdés; a képek a gondolat kifejtését szolgálják.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A lírikus epilógja' },
        {
          kind: 'text',
          text: 'A vers a *Levelek Írisz koszorújából* kötet záródarabja (1909). **Epilógus** (utószó): a költő mintegy lezárja az addigi költészetét, és számot vet vele. A központi kérdés: **mire képes a költészet**, ha a költő mindig csak saját magáról tud írni, és nem tudja kifejezni a külvilágot? A **szolipszizmus** problémája itt az alkotói válság kifejezése: a költő úgy érzi, hogy a lírai én **börtön**, amelyből nincs kijárat.',
        },
        {
          kind: 'text',
          text: 'Az ars poetica a Nyugat-nemzedék jellegzetes kérdését veti fel: milyen viszonyban áll a **költő és a világ**, az **egyéniség és a közösség**? Babits válasza ebben a versben még kétkedő, magányos; később a **felelősség** költészetébe fordul át.',
        },
        { kind: 'heading', text: 'Esti kérdés' },
        {
          kind: 'text',
          text: 'Az *Esti kérdés* (1909) az **este** tájképével indul: az estében a mindenség hangulata érezhető. A költő különféle helyszíneket idéz fel, ahová az este leszáll, aztán a leíró részből **kérdések sora** bontakozik ki az idő múlásáról, az emlékezetről és az élet értelméről. A vers a kérdéssel zárul, **nem ad végleges választ**. Az este-motívum a hangulatot és a gondolatot egyszerre fejezi ki.',
        },
        {
          kind: 'compare',
          title: 'A két korai vers összevetése',
          columns: ['A lírikus epilógja', 'Esti kérdés'],
          rows: [
            { label: 'Műfaj', cells: ['ars poetica', 'gondolati vers'] },
            {
              label: 'Alapkérdés',
              cells: [
                'mit tud a költő a világról, ha csak magáról írhat?',
                'mi az élet, az idő és az emlékezet értelme?',
              ],
            },
            {
              label: 'Hangulat',
              cells: ['kétkedő, önvizsgáló', 'szemlélődő, kérdező'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten kapcsold össze a verseket a *Levelek Írisz koszorújából* kötet egészével: a kötet a **szecessziós és szimbolista** hatásokat is mutatja, a **műveltségélményt** és a **formai fegyelmet**. A korai szakasz kérdése (az én határai) ellentétben áll a későbbi, **közösségi felelősséget** hangsúlyozó versekkel.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műértelmezés: *A lírikus epilógja* vagy az *Esti kérdés* szövege alapján (téma, szerkezet, képek, hangulat).',
            'Összehasonlítás: ars poeticák (például Babits és Ady vagy József Attila).',
            'Szóbeli tételben: a korai Babits mint a pályakép első szakasza.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mesélj el egy verset! A vizsgáztató azt várja, hogy a vers **kérdését**, **szerkezetét** és **képeit** értelmezd. Az ars poeticánál a költő–világ viszony a lényeg.',
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: A lírikus epilógja',
          problem: 'Mutasd be röviden *A lírikus epilógja* című verset!',
          solution:
            '**Bevezetés**: Babits 1909-es ars poeticája, a *Levelek Írisz koszorújából* záró verse.\n**Téma**: a költő és a világ viszonya, az énbe zártság élménye (szolipszizmus).\n**Szerkezet és gondolatmenet**: számvetés az addigi költészettel, a kérdés kifejtése, a kitörés lehetetlenségének felismerése.\n**Értelmezés**: az alkotói válság és a költői szerep problémája.\n**Helye az életműben**: a későbbi felelősségvállaló költészet kiindulópontja.',
        },
        {
          kind: 'tip',
          text: 'Mindig keress **kapcsolatot** a versek között: az *Esti kérdés* kérdező hangja és *A lírikus epilógja* kétkedése egyaránt a korai Babits önvizsgáló szemléletét mutatja.',
        },
      ],
      topicMatch: ['babits'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik kötet záróverse *A lírikus epilógja*?',
          options: [
            'Recitatív',
            'Sziget és tenger',
            'Levelek Írisz koszorújából',
            'Herceg, hátha megjön a tél is!',
          ],
          answer: 2,
          explanation: 'A vers az első kötet, a *Levelek Írisz koszorújából* (1909) záródarabja.',
        },
        {
          question: 'Melyik műfajba sorolható *A lírikus epilógja*?',
          options: ['Elégia', 'Ars poetica', 'Óda', 'Ballada'],
          answer: 1,
          explanation: 'A költő saját költészetéről és szerepéről gondolkodik, ez az ars poetica.',
        },
        {
          question: 'Mi az *Esti kérdés* kiindulópontja?',
          options: [
            'Az este tájképe.',
            'Egy történelmi esemény.',
            'Egy szerelmi emlék.',
            'A háború híre.',
          ],
          answer: 0,
          explanation:
            'A vers az este képéből indul, és ebből bontakozik ki az életről szóló kérdés.',
        },
        {
          question: 'Mit jelent a szolipszizmus a költészet szempontjából?',
          options: [
            'A költő a tömeghez beszél.',
            'A költő az énjébe zártnak érzi magát.',
            'A költő csak a természetről ír.',
            'A költő hitet tesz.',
          ],
          answer: 1,
          explanation: 'A fogalom az egyén énjébe zártságára utal, ez a korai vers témája.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A lírikus epilógja', url: wiki('A lírikus epilógja Babits') },
        { label: 'Wikipédia: Esti kérdés', url: wiki('Esti kérdés Babits') },
        { label: 'Wikipédia: Ars poetica', url: wiki('ars poetica') },
      ],
    },
    {
      id: 'babits-haboru-husvet-elott-fortissimo',
      subject: 'magyar',
      unitId: 'babits',
      title: 'A háború költészete: Húsvét előtt, Fortissimo',
      level: 'kozep',
      requirement: {
        kozep:
          'A főbb művek értelmezése, kapcsolatok a művek között (témák, motívumok); a háború élménye mint motívum; műrészletek értelmezése.',
        emelt:
          'A pályaszakaszokat jellemző főbb témák, kérdésfeltevések; a művek hatása, fogadtatása.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az első világháború idején Babits a **békét** és az **emberiességet** védi, a háború dicsőítésével szemben.',
            '*Húsvét előtt* (1916): háborúellenes vers; a béke utáni vágyat kimondja, vallási (húsvéti) hangulatba ágyazva.',
            '*Fortissimo* (1917): a háború borzalmának és a költő tiltakozásának kifejezése.',
            'A háború élménye a költőt a magányos önvizsgálatból a **közösségi felelősség** felé fordítja.',
            'A versek a *Recitatív* (1916) időszakához kapcsolódnak.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'háborúellenes költészet',
              text: 'A háború erőszakát elítélő, a békét és az emberi életet védő költészet.',
            },
            {
              term: 'felelősségvállalás',
              text: 'A költő a közösség sorsáért is felelősnek érzi magát, és nyilvánosan megszólal.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A háború és a költő' },
        {
          kind: 'text',
          text: 'Az **első világháború** Babitsot is megrázta. A korábban magányos, műveltségközpontú költő számára a háború **erkölcsi próbatétel**: nem hallgathat, hanem **kimondja a békevágyat**. Ez a fordulat jelzi, hogy a költészete a személyes önvizsgálatból a **közösségi, erkölcsi** kérdések felé fordul.',
        },
        { kind: 'heading', text: 'Húsvét előtt (1916)' },
        {
          kind: 'text',
          text: 'A vers a **húsvéti ünnep** hangulatát a háborúval kapcsolja össze: a nagyhét szenvedése, a feltámadás reménye és a háború pusztítása. A költő a **hősök és a gépek** dicsőítésével szemben az **emberséget**, a **szeretetet** és az **életet** állítja. A szöveg imádságszerű, közösségi hangot használ, és a **béke** után vágyakozik.',
        },
        { kind: 'heading', text: 'Fortissimo (1917)' },
        {
          kind: 'text',
          text: 'A *Fortissimo* (zenei műszó: nagyon erősen, leghangosabban) a háború **harsány, pusztító erejét** és az ellene való költői tiltakozást fejezi ki. A cím a háború hangerejére és az indulatra utal.',
        },
        {
          kind: 'compare',
          title: 'A korai magány és a háborús vers',
          columns: ['Korai líra (1909)', 'Háborús líra (1916–1917)'],
          rows: [
            {
              label: 'Középpont',
              cells: ['az én, az önvizsgálat', 'a közösség, az emberiség sorsa'],
            },
            {
              label: 'Hang',
              cells: ['kétkedő, szemlélődő', 'tiltakozó, imádságszerű, indulatos'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten foglalkozz a **fogadtatással**: a háborúellenes hang a korszakban vitát váltott ki, és Babits irodalmi-közéleti szerepét is formálta. Gondold végig, hogyan kapcsolódik ez a pályaszakasz a későbbi, **prófétai** Jónás-motívumhoz: mindkettőben a költő kimondja az igazságot a közösségnek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műértelmezés vagy összehasonlítás: háborús versek (Babits és például Radnóti vagy Kosztolányi).',
            'Téma: a háború élménye, a költő felelőssége.',
            'Szóbeli tételben: Babits fordulata az önvizsgálatból a közösségi felelősség felé.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne a keletkezési éveket keverd össze: a *Húsvét előtt* 1916-os, a *Fortissimo* 1917-es. A két vers a háború költészetét képviseli, a *Jónás könyve* már 1938-as.',
        },
        {
          kind: 'tip',
          text: 'Háborús versnél mindig nézd meg: **ki beszél**, **kihez szól**, **milyen képek** jelennek meg (vallási, természeti, gépi), és **mit állít a vers a békéről**.',
        },
      ],
      topicMatch: ['babits'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik évben íródott a *Húsvét előtt*?',
          options: ['1909', '1911', '1916', '1938'],
          answer: 2,
          explanation: 'A *Húsvét előtt* 1916-os, az első világháború idején született.',
        },
        {
          question: 'Mi a *Húsvét előtt* központi gondolata?',
          options: [
            'A tájszeretet.',
            'A háborúellenesség és a béke utáni vágy.',
            'A szerelem dicsérete.',
            'A tudomány dicsérete.',
          ],
          answer: 1,
          explanation: 'A vers a háborúval szemben a békét és az emberséget hirdeti.',
        },
        {
          question: 'Mit jelent a *Fortissimo* cím?',
          options: ['nagyon halkan', 'nagyon erősen', 'lassan', 'vidáman'],
          answer: 1,
          explanation: 'A fortissimo zenei műszó, jelentése: nagyon erősen, leghangosabban.',
        },
        {
          question: 'Hogyan változik Babits költészete a háború hatására?',
          options: [
            'A közösségi felelősség felé fordul.',
            'Abbahagyja a költést.',
            'Csak tájverseket ír.',
            'A népies dal felé fordul.',
          ],
          answer: 0,
          explanation:
            'A háború élménye a magányos önvizsgálatból a közösségi, erkölcsi kérdések felé viszi a költőt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Húsvét előtt', url: wiki('Húsvét előtt Babits') },
        { label: 'Wikipédia: Fortissimo', url: wiki('Fortissimo Babits') },
        { label: 'Wikipédia: Recitatív (Babits)', url: wiki('Recitatív Babits Mihály') },
      ],
    },
    {
      id: 'babits-kesei-lira-balazsolas-osz-es-tavasz',
      subject: 'magyar',
      unitId: 'babits',
      title: 'A késői líra: Ősz és tavasz között, Balázsolás',
      level: 'kozep',
      requirement: {
        kozep:
          'Néhány lírai alkotás bemutatása, értelmezése; kapcsolatok a művek között (témák, motívumok); az életmű elhelyezése a korszakban.',
        emelt:
          'A pályaszakaszokat jellemző főbb témák, kérdésfeltevések; kötetek, ciklusok, motívumok; a művekben felvetett etikai, lélektani, filozófiai vonatkozások.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az 1930-as évek költészetét a **betegség**, a **halálgondolat** és a **számvetés** határozza meg.',
            '*Ősz és tavasz között* (1936): a mulandóság, az elmúlás és a természet körforgása; refrénje a halál elkerülhetetlenségét hangsúlyozza.',
            '*Balázsolás* (1937): imádságszerű vers Szent Balázshoz, a gégebetegségről; a félelem és az irónia keveredik benne.',
            'A betegség a költőt a **végesség** és az **emberi sors** kérdései elé állítja.',
            'A késői versek műfaja: személyes számvetés, imádság, elégikus hangvétel.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Szent Balázs',
              text: 'A katolikus hagyományban a torokbetegségek védőszentje; Balázs napján a torkot megáldják.',
            },
            {
              term: 'refrén',
              text: 'A vers során ismétlődő sor vagy sorcsoport, ami hangsúlyozza a fő gondolatot.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ősz és tavasz között (1936)' },
        {
          kind: 'text',
          text: 'A vers az **évszakok körforgását** állítja szembe az emberi élet véges voltával. Az ősz és a tél az elmúlás képe, a tavasz a megújulásé, de a költő számára a természet megújulása **nem vigasz**: az ember halála végleges. A refrén a halál elkerülhetetlenségét ismétli. A vers a **mulandóság** és a **barátok elvesztése** gondolatával a személyes számvetés felé halad.',
        },
        { kind: 'heading', text: 'Balázsolás (1937)' },
        {
          kind: 'text',
          text: 'A *Balázsolás* a gégebetegségre utal. A beszélő **Szent Balázshoz** könyörög a segítségért, felidézi a gyermekkori balázsolás szokását, és kapcsolatba kerül a **betegség**, a **félelem** és a **halálgondolat** kérdésével. A vers hangja egyszerre **komoly és ironikus**, ez a késő Babits sajátossága: a személyes szenvedést műveltséggel, humorral és hittel fogalmazza meg.',
        },
        {
          kind: 'compare',
          title: 'A két késői vers',
          columns: ['Ősz és tavasz között (1936)', 'Balázsolás (1937)'],
          rows: [
            {
              label: 'Téma',
              cells: [
                'mulandóság, a természet körforgása és a halál',
                'betegség, félelem, a segítség kérése',
              ],
            },
            {
              label: 'Forma',
              cells: ['refrénes számvetés', 'imádságszerű könyörgés'],
            },
            {
              label: 'Hang',
              cells: ['elégikus', 'komoly és ironikus'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten keresd a **kapcsolatokat**: a halálgondolat és a mulandóság a korai *Esti kérdés* kérdéseit tágítja, a prófétai felelősség (Jónás) pedig a betegség elfogadásához kapcsolódik. A késői Babits költészete a személyes sorsot **etikai és filozófiai** kérdéssé emeli.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műértelmezés: a vers témája, hangulata, szerkezete, képei.',
            'Összehasonlítás: a halál és a mulandóság motívuma más költőknél (például Kosztolányi, József Attila).',
            'Szóbeli tételben: a késői Babits mint a pálya lezáró szakasza.',
          ],
        },
        {
          kind: 'warning',
          text: 'A *Balázsolás* nem egyszerű panasz: figyelj a **hangnem** kettősségére (komoly és ironikus), a vallási és a hétköznapi elemek keveredésére.',
        },
        {
          kind: 'tip',
          text: 'Késői versnél mindig kösd az **életrajzi tényt** (betegség) a **költői megformáláshoz** (hang, kép, szerkezet), de ne helyettesítsd az elemzést az életrajzzal.',
        },
      ],
      topicMatch: ['babits'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Mire utal a *Balázsolás* című vers?',
          options: [
            'Szent Balázs napjára és a torokbetegségre.',
            'Egy szerelmi történetre.',
            'A háború borzalmaira.',
            'Egy vidéki tájra.',
          ],
          answer: 0,
          explanation:
            'Szent Balázs a torokbetegségek védőszentje; a vers a költő gégebetegségéhez kapcsolódik.',
        },
        {
          question: 'Melyik vers kapcsolódik az évszakok körforgásához és a mulandósághoz?',
          options: ['Húsvét előtt', 'Fortissimo', 'Ősz és tavasz között', 'A lírikus epilógja'],
          answer: 2,
          explanation:
            'Az *Ősz és tavasz között* az évszakok körforgását állítja szembe az emberi élet végességével.',
        },
        {
          question: 'Milyen a *Balázsolás* hangneme?',
          options: ['Csak ironikus', 'Komoly és ironikus', 'Heroikus', 'Idilli'],
          answer: 1,
          explanation: 'A vers a személyes szenvedést egyszerre fejezi ki komolyan és ironikusan.',
        },
        {
          question: 'Melyik korai vers kérdései tágulnak a késői halálgondolatban?',
          options: ['Esti kérdés', 'János vitéz', 'Nemzeti dal', 'Szeptember végén'],
          answer: 0,
          explanation:
            'Az *Esti kérdés* az idő és az élet értelmére kérdez, a késői versek ezt a halál felől mélyítik.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Balázsolás', url: wiki('Balázsolás Babits') },
        { label: 'Wikipédia: Ősz és tavasz között', url: wiki('Ősz és tavasz között Babits') },
        { label: 'Wikipédia: Szent Balázs', url: wiki('Szent Balázs') },
      ],
    },
    {
      id: 'babits-jonas-konyve',
      subject: 'magyar',
      unitId: 'babits',
      title: 'Jónás könyve és Jónás imája',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); memoriterek szöveghű és kifejező előadása; az etikai, történeti, lélektani vonatkozások.',
        emelt:
          'A művekben felvetett kérdések etikai, lélektani, filozófiai, esztétikai vonatkozása; a művek hatása, fogadtatása; különféle interpretációk.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A *Jónás könyve* (1938) **elbeszélő költemény**, bibliai téma nyomán; Babits utolsó nagy műve.',
            'A próféta **menekül** Isten parancsa elől, nem akar Ninivének a pusztulást hirdetni; végül **vállalja** a küldetést.',
            'A mű **négy fejezetből** áll.',
            'Jelentése: a költő (a próféta) **erkölcsi felelőssége** a gonosszal szemben, és Isten **irgalma**.',
            '*Jónás imája* (1939) a **memoriter**; ars poetica, benne a költő megvallja a szavak elvesztését és a költői küldetés nehézségét.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'elbeszélő költemény',
              text: 'Verses epikai műfaj: történetet mond el rímes, kötött formában.',
            },
            {
              term: 'próféta',
              text: 'Isten szavát hirdető ember; Babits költői önképében a költő is ilyen szerepet kap.',
            },
            {
              term: 'ars poetica',
              text: 'Költői önmeghatározás; a Jónás-történet a költő küldetéséről is szól.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A történet és a bibliai előkép' },
        {
          kind: 'text',
          text: 'A *Jónás könyve* az **Ószövetség** Jónás-történetét dolgozza fel. Isten arra küldi Jónást, hogy **Ninivében** hirdesse a bűnös város pusztulását. Jónás megijed és **menekül**, hajóra száll, a vihar után a **cethal** nyeli el. A hal gyomrában megtér, majd elviszi Isten üzenetét. A város megtér, Isten pedig megkegyelmez neki, Jónás viszont **elégedetlen**: a próféta jóslata nem teljesül. Isten **az irgalomról** tanítja.',
        },
        { kind: 'heading', text: 'Jelentésrétegek' },
        {
          kind: 'keypoints',
          title: 'Hogyan értelmezhető?',
          items: [
            '**Bibliai történet**: a próféta és Isten viszonya, a bűn, a bűnhődés és az irgalom.',
            '**Ars poetica**: Jónás a költő, aki nem akarja vállalni a küldetést, mégis kimondja az igazságot.',
            '**Korkép**: a mű a háború előtti Európa veszélyérzetét és a hallgatás vagy szólás kérdését is megfogalmazza.',
          ],
        },
        { kind: 'heading', text: 'Jónás imája' },
        {
          kind: 'text',
          text: 'A *Jónás imája* a költő ars poeticája, a memoriterek között is szerepel. A vers a **szavak elvesztését** és a költői hang megtalálásának vágyát fejezi ki. Kezdete: *„Hozzám már hűtlen lettek a szavak, / vagy én lettem mint túláradt patak”*. A beszélő Jónáshoz hasonlítja magát: ő is menekült a feladat elől, de a **szenvedésben megtalálja** a hangját.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten érdemes foglalkozni az **olvasatokkal**: az allegorikus (Babits maga Jónás), a történeti (a fasizmus előszele), az etikai (a próféta felelőssége és az irgalom) és a filozófiai (a küldetés elől való menekülés lehetetlensége) értelmezéssel. A mű a **korstílus** (Nyugat-modernség) és a **bibliai hagyomány** találkozása.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műértelmezés: téma, műfaj, kompozíció, motívumok, jelentésrétegek.',
            'Memoriter: *Jónás imája* szöveghű előadása, kiegészítése, értelmezése.',
            'Összehasonlítás: a próféta vagy a költői küldetés más műveknél (például Ady, Vörösmarty, József Attila).',
          ],
        },
        {
          kind: 'warning',
          text: 'A *Jónás könyve* nem puszta bibliai átirat. Mindig mutasd meg, mi **Babits sajátja**: a költői önértelmezés és a kor kérdései.',
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: Jónás könyve',
          problem: 'Mutasd be a *Jónás könyve* főbb jellemzőit!',
          solution:
            '**Bevezetés**: Babits 1938-as elbeszélő költeménye, bibliai alapra épül.\n**Téma**: a próféta menekül a küldetés elől, aztán vállalja.\n**Kompozíció**: négy fejezet, a menekülés és a visszatérés íve.\n**Jelentésrétegek**: bibliai, ars poetica, korkép.\n**Értelmezés**: a költő erkölcsi felelőssége, Isten irgalma.\n**Zárás**: összekapcsolás a *Jónás imájával* és a korábbi Babits-versekkel.',
        },
        {
          kind: 'tip',
          text: 'A *Jónás imája* a **Memoriterek** részben megtalálható az alkalmazásban, tanuld meg szó szerint.',
        },
      ],
      topicMatch: ['babits'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Milyen műfajú a *Jónás könyve*?',
          options: ['Dráma', 'Elbeszélő költemény', 'Regény', 'Esszé'],
          answer: 1,
          explanation: 'Verses epikai mű, bibliai történet nyomán.',
        },
        {
          question: 'Mit tesz Jónás Isten parancsára?',
          options: [
            'Azonnal elindul Ninivébe.',
            'Menekül a küldetés elől.',
            'Háborút hirdet.',
            'Elhagyja a hazáját örökre.',
          ],
          answer: 1,
          explanation: 'Jónás megijed a feladattól, és menekül, majd végül vállalja a küldetést.',
        },
        {
          question: 'Melyik vers a Memoriterek között is szereplő Babits-mű?',
          options: ['Jónás imája', 'Balázsolás', 'Fortissimo', 'Esti kérdés'],
          answer: 0,
          explanation: 'A *Jónás imája* a tanulandó memoriterek egyike.',
        },
        {
          question: 'Melyik jelentésréteg nem tartozik a *Jónás könyve* olvasatai közé?',
          options: [
            'Ars poetica',
            'Bibliai történet',
            'Humoros paródia a népmeséről',
            'Korkép és erkölcsi felelősség',
          ],
          answer: 2,
          explanation:
            'A mű bibliai, ars poeticai és korképi rétegekkel rendelkezik; népmese-paródia nincs benne.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Jónás könyve (Babits)', url: wiki('Jónás könyve Babits Mihály') },
        { label: 'Wikipédia: Jónás imája', url: wiki('Jónás imája Babits') },
        { label: 'Wikipédia: Jónás próféta', url: wiki('Jónás próféta') },
      ],
    },
    {
      id: 'babits-proza-forditas-fogadtatas',
      subject: 'magyar',
      unitId: 'babits',
      title: 'Regények, esszék, műfordítás és utóélet',
      level: 'emelt',
      requirement: {
        emelt:
          'Kötetek, ciklusok, témák; a művek hatása, fogadtatása egy-két példa alapján; a szerző utóélete, helye és hatása az irodalmi-kulturális hagyományban; különféle kritikák, interpretációk.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Babits regényei: *A gólyakalifa* (1916), *Timár Virgil fia* (1922), *Kártyavár* (1923), *Halálfiai* (1927), *Elza pilóta* (1933).',
            '**Esszé**: *Az európai irodalom története* (1934–1935, bővített kiadása 1936).',
            '**Műfordítás**: Dante *Isteni színjátéka* (*Pokol* 1913, *Purgatórium* 1920, *Paradicsom* 1923).',
            '1927-től a **Baumgarten Alapítvány** kurátora volt.',
            'Utóélet: a Nyugat egyik legfontosabb alakja, a modern magyar költészet és a hagyomány összekapcsolója.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1913', text: 'Megjelenik Dante *Pokol*ának fordítása.' },
            { date: '1916', text: '*A gólyakalifa* című regény.' },
            { date: '1920', text: 'Dante: *Purgatórium*.' },
            { date: '1923', text: 'Dante: *Paradicsom*; a *Kártyavár* című regény.' },
            { date: '1927', text: '*Halálfiai*; a Baumgarten Alapítvány kurátora lesz.' },
            { date: '1934–1935', text: '*Az európai irodalom története*, két kötetben.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az epikus életmű' },
        {
          kind: 'text',
          emelt: true,
          text: 'Babits regényei a **lélektani és társadalmi** kérdéseket vizsgálják. *A gólyakalifa* (1916) az öntudatlan és tudatos élet, a szellemi kettősség kérdését veti fel. A *Halálfiai* (1927) **családregény**, a polgári élet válságát mutatja be. A regényekben is jelen van a poeta doctus: a filozófiai és erkölcsi érdeklődés.',
        },
        { kind: 'heading', text: 'Az esszéíró és műfordító' },
        {
          kind: 'text',
          emelt: true,
          text: '*Az európai irodalom története* (1934–1935) az irodalom egészét a **műveltség folyamatában** mutatja be. A **Dante-fordítás** (1913–1923) a magyar műfordítás kiemelkedő teljesítménye; a fordítás a Babits-i költői nyelv és a világirodalom találkozása. A Baumgarten Alapítványban a kurátori munka a fiatal írók támogatásával kapcsolódott össze.',
        },
        { kind: 'heading', text: 'Utóélet és olvasatok' },
        {
          kind: 'text',
          emelt: true,
          text: 'Babits utóéletében a legfontosabb kérdés, hogyan értelmezzük a **poeta doctus** alkatát: elzárkózó műveltségként, vagy a közösségi felelősség költészeteként. A *Jónás könyve* a pálya betetőzéseként él a hagyományban. A Nyugat-nemzedék kontextusában Ady, Kosztolányi és József Attila mellett érdemes megítélni.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szóbeli tétel: életpálya, kötetek, a Nyugat és Babits kapcsolata.',
            'Témakifejtő szöveg: például a költő felelőssége Babits műveiben.',
            'Összehasonlítás: Babits és kortársai (Ady, Kosztolányi).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne sorolj fel kötetcímeket magyarázat nélkül: minden adatot kapcsolj témához, pályaszakaszhoz vagy értelmezési kérdéshez.',
        },
        {
          kind: 'tip',
          text: 'A kötetek közül tanuld meg: *Levelek Írisz koszorújából* (1909), *Recitatív* (1916), *Sziget és tenger* (1925), *Jónás könyve* (1938).',
        },
      ],
      topicMatch: ['babits'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik Babits regénye jelent meg 1927-ben?',
          options: ['Halálfiai', 'A gólyakalifa', 'Kártyavár', 'Timár Virgil fia'],
          answer: 0,
          explanation: 'A *Halálfiai* 1927-ben jelent meg.',
        },
        {
          question: 'Melyik klasszikus művet fordította le Babits?',
          options: ['Odüsszeia', 'Isteni színjáték', 'Faust', 'Hamlet'],
          answer: 1,
          explanation: 'Dante *Isteni színjátékát* fordította 1913 és 1923 között.',
        },
        {
          question: 'Melyik az 1934–1935-ös esszéisztikus összefoglaló műve?',
          options: [
            'Az európai irodalom története',
            'Nyugtalanság völgye',
            'Elza pilóta',
            'Recitatív',
          ],
          answer: 0,
          explanation: 'Az európai irodalom története két kötetben jelent meg 1934–1935-ben.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Babits Mihály', url: wiki('Babits Mihály') },
        {
          label: 'Wikipédia: Az európai irodalom története',
          url: wiki('Az európai irodalom története Babits'),
        },
        { label: 'Wikipédia: Baumgarten-díj', url: wiki('Baumgarten-díj') },
      ],
    },
  ],
};

export default unit;
