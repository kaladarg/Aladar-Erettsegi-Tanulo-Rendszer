import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Arany János életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'arany',
  subject: 'magyar',
  order: 52,
  title: 'Arany János életműve',
  requirementRef:
    '2.1 Szerzők, művek, 1. témakör: Életművek a magyar irodalomból. Kötelező szerzők (Arany János)',
  intro:
    'A magyar epika és a ballada legnagyobb mestere: a Toldi-trilógia, a balladák a bűnről, a hatalomról és a költő felelősségéről, az 1850-es évek számvető lírája, majd az Őszikék. Életút, főbb művek, értelmezési szempontok és a műelemzés menete.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 1. témakör, 2.2 Értelmezési szintek, megközelítések). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'arany-eletut-palyaszakaszok',
      subject: 'magyar',
      unitId: 'arany',
      title: 'Arany életútja, pályaszakaszai, hatása',
      level: 'emelt',
      requirement: {
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság, a szerző regionális, kulturális kötődései; a pályaszakaszokat jellemző főbb témák, kérdésfeltevések; a pályaképre ható irányzatok és szellemi kötődések, világirodalmi párhuzamok; a művek hatása, fogadtatása; a szerző utóélete.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Arany János** (1817–1882) **Nagyszalontán** született, szegény, református családban nőtt fel; a debreceni kollégiumban tanult.',
            'Pályája négy szakasza: **1.** a szalontai évek és a *Toldi* (1840-es évek), **2.** a nagykőrösi évek (1851–1860), **3.** a pesti évek: akadémiai titkár, szerkesztő, eposz és fordítás (1860-as évek), **4.** az öregkor, az *Őszikék* (1877–1882).',
            'Az **1848–49-es szabadságharc bukása** fordulópont: a Toldi derűjét a számvetés, a hallgatás és a balladák komorabb hangja váltja fel.',
            'Barátja és költőtársa **Petőfi Sándor** volt; a *Toldi* Petőfi lelkes fogadtatásával lett országos siker.',
            'Világirodalmi kötődései közül kiemelkedik a **Shakespeare-fordítás** és az antik–népköltészeti hagyomány.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1817', text: 'Nagyszalontán született.' },
            {
              date: '1846',
              text: 'A *Toldi* elnyeri a Kisfaludy Társaság pályázatának díját; 1847-ben megjelenik.',
            },
            { date: '1847', text: 'Petőfi és Arany barátsága, a költői levélváltás kezdete.' },
            { date: '1851', text: 'Nagykőrösre költözik, a református gimnázium tanára.' },
            { date: '1860', text: 'Pestre költözik; a Kisfaludy Társaság igazgatója.' },
            { date: '1865', text: 'Az MTA titkára lesz.' },
            { date: '1877–1882', text: 'Az *Őszikék* versei.' },
            { date: '1882', text: 'Meghal Budapesten.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szalonta és a pályakezdés' },
        {
          kind: 'text',
          text: 'Arany **Nagyszalontán** (a mai Románia területén, a Hajdúság peremén) nőtt fel, szegény református családban. Tanulmányait a **debreceni kollégiumban** végezte, majd tanítóskodott és színészkedett, később Nagyszalontán lett jegyző. Az **alföldi-hajdúsági** környezet, a népnyelv és a népköltészet ismerete egész életművét meghatározza.',
        },
        {
          kind: 'text',
          text: '1845-ben a Kisfaludy Társaság pályázatára komikus eposzt írt (*Az elveszett alkotmány*), 1846-ban a *Toldi*val nyert. Ez emelte országos hírű költővé; Petőfi lelkes verssel köszöntötte, és szoros barátság alakult ki közöttük.',
        },
        { kind: 'heading', text: 'Nagykőrös: a hallgatás és a balladák évtizede' },
        {
          kind: 'text',
          text: 'A szabadságharc bukása után Arany nehéz egzisztenciális és lelki helyzetbe került. **1851-től Nagykőrösön** tanított a református gimnáziumban. A **kiegyezés előtti, önkényuralmi évek** légköre a költészetét is átformálta: az 1850-es években születtek a nagy **balladák** (*Ágnes asszony*, *V. László*, *Szondi két apródja*, *A walesi bárdok*), valamint a számvető, magányos hangú lírai költemények.',
        },
        { kind: 'heading', text: 'Pest: intézmények, eposz, fordítás' },
        {
          kind: 'text',
          text: '1860-tól Pesten él: a **Kisfaludy Társaság** igazgatója, szerkesztője az irodalmi folyóiratoknak, 1865-től az **MTA titkára**. Ebben az időszakban elsősorban a nagyepikai terv foglalkoztatja (*Buda halála*, a hun mondakör) és a **műfordítás**; lefordította többek között Shakespeare néhány drámáját (például a *Hamlet*et). A pályán belül egyre inkább háttérbe szorul a költői alkotás az irodalomszervezés javára.',
        },
        { kind: 'heading', text: 'Az öregkor: Őszikék' },
        {
          kind: 'text',
          text: 'Az 1870-es évek második felében visszavonult, a **Margitszigeten** töltött éveiben újra verselni kezdett. Az **Őszikék** (1877–1882) versei az öregedő költő számvetései: a mulandóság, az emlékezés, a költői pálya értékelése, humor és keserűség keveréke. A ciklus 1883-ban, a költő halála után jelent meg, ezért posztumusz kötetnek tekintjük.',
        },
        {
          kind: 'compare',
          title: 'Arany pályaszakaszai',
          columns: ['Időszak és hely', 'Jellemző művek és témák'],
          rows: [
            {
              label: '1840-es évek',
              cells: ['Nagyszalonta', '*Toldi*, népies epika, a nemzeti hős eszménye'],
            },
            {
              label: '1851–1860',
              cells: [
                'Nagykőrös',
                'balladák, *Letészem a lantot*, *Kertben*; a bukás és a hallgatás élménye',
              ],
            },
            {
              label: '1860-as évek',
              cells: ['Pest', '*Buda halála*, szerkesztés, fordítás, akadémiai munka'],
            },
            {
              label: '1877–1882',
              cells: [
                'Margitsziget, Budapest',
                '*Őszikék*, *Toldi szerelme* (1879), öregkori számvetés',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Arany **szellemi kötődései**: a népköltészet (a népballada formanyelve), a magyar **reformkori nemzeti irodalom** (Kölcsey, Vörösmarty, Kisfaludy Károly hagyománya), az **antik és a reneszánsz–barokk epika** (az eposzi kellékek ismerete), valamint **Shakespeare**, akit magyarra fordított. A világirodalmi párhuzamokhoz az epikai hagyomány (eposz, ballada) és a népies epika európai változatai tartoznak. Arany a **romantika** költője, de a kor szenvedélyes pátoszát komor mérlegeléssel, mértéktartással és mély lélektani ábrázolással ötvözi.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Fogadtatás és utóélet**: a *Toldi* azonnali közönségsiker volt, a nagykőrösi balladák és a számvető líra a kortársak előtt kevésbé voltak ismertek. Az *Őszikék* igazi jelentőségét főként a 20. század olvasói ismerték fel: a személyes tapasztalatot sűrítő, kihagyásos, lélektani líra a modern költészet felé mutat. Arany nyelvművészete és verselése a magyar költészet egyik legfontosabb mintája lett.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel (emelt szinten 20 perc): Arany életműve, pályaszakaszai; egy kijelölt mű vagy műrészlet értelmezése, kapcsolat más művekkel.',
            'Kronológiai kérdés: melyik évtizedben, melyik helyen és milyen élethelyzetben keletkezett a mű?',
            'Összehasonlítás: Arany és Petőfi, vagy Arany két korszaka (például *Toldi* és *Toldi estéje*).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a *Toldi*, a *Toldi estéje* és a *Toldi szerelme* keletkezési sorrendjét és cselekményidejét (lásd a Toldi-oldalt). Arany életrajzi adataiból csak azt használd, amit a mű értelmezéséhez fel is tudsz használni.',
        },
        {
          kind: 'tip',
          text: 'Az emelt szintű szóbeliben pályaképet vázolsz: **1.** szakaszok és helyszínek (Szalonta, Nagykőrös, Pest, Margitsziget); **2.** szakaszonként egy-két mű; **3.** állandó motívumok (hűség, bűn, hatalom, öregkor, költői szerep); **4.** hatás és utóélet. Mindig társíts egy konkrét művet az állításaidhoz.',
        },
      ],
      topicMatch: ['arany jános'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Hol született Arany János?',
          options: ['Kiskőrösön', 'Debrecenben', 'Nagyszalontán', 'Nagykőrösön'],
          answer: 2,
          explanation:
            'Nagyszalontán született (1817); Nagykőrösön később tanár lett, Debrecenben a kollégiumban tanult.',
        },
        {
          question: 'Melyik város kapcsolódik Arany 1851–1860 közötti éveihez?',
          options: ['Pest', 'Nagykőrös', 'Szeged', 'Szalonta'],
          answer: 1,
          explanation:
            'Nagykőrösön tanított a református gimnáziumban; ekkor születtek a nagy balladák.',
        },
        {
          question: 'Melyik kötet tartozik Arany késői költészetéhez?',
          options: ['Versek (1844)', 'Őszikék', 'Toldi', 'Nemzeti dal'],
          answer: 1,
          explanation:
            'Az *Őszikék* az 1877–1882 között írt öregkori versek gyűjteménye; a *Versek* Petőfi első kötete.',
        },
        {
          question: 'Melyik volt Arany első nagy sikere, amely országos hírűvé tette?',
          options: ['Toldi', 'Buda halála', 'Epilógus', 'Ágnes asszony'],
          answer: 0,
          explanation:
            'A *Toldi* nyerte el a Kisfaludy Társaság pályázatát 1846-ban; Petőfi lelkesen üdvözölte.',
        },
        {
          question: 'Melyik angol szerzőt fordított Arany magyarra?',
          options: ['Byront', 'Shakespeare-t', 'Miltont', 'Dickenst'],
          answer: 1,
          explanation:
            'Arany a magyar Shakespeare-fordítás jelentős alakja (például *Hamlet*); ez a világirodalmi kötődésének egyik jele.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Arany János', url: wiki('Arany János költő') },
        { label: 'Wikipédia: Őszikék', url: wiki('Őszikék Arany János') },
        { label: 'Wikipédia: Nagykőrös', url: wiki('Arany János Nagykőrös') },
      ],
    },
    {
      id: 'arany-toldi-trilogia',
      subject: 'magyar',
      unitId: 'arany',
      title: 'A Toldi-trilógia: Toldi, Toldi estéje, Toldi szerelme',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása, értelmezése: a téma, a műfaj, a kompozíció, a jellemző motívumok és jelentésrétegek alapján; kapcsolatok a művek között; a művek elhelyezése az életműben és a korszakban; műrészletek értelmezése; memoriterek.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a művekben felvetett kérdések gondolati, esztétikai vonatkozásai; a művek hatása és fogadtatása; különféle interpretációk.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A trilógia hőse **Toldi Miklós**, a 14. századi, **Nagy Lajos** korabeli magyar vitéz. A három rész: *Toldi* (1846–47), *Toldi estéje* (a megírása az 1840-es évekre esik, megjelent 1854), *Toldi szerelme* (1879).',
            'A *Toldi* **verses elbeszélés** (elbeszélő költemény): népies hangú, a népmese és a lovagi hősmondák elemeit ötvözi; a hős a **paraszti sorból** emelkedik fel.',
            'A mű témája az **igazság és a becsület**, a testvéri sértés, az elnyomott ifjú kiemelkedése és megbékélése a királlyal.',
            'A *Toldi estéje* az **öregkorról, a mellőzésről és a hősi becsületről** szól: az öreg hős is kiáll a lovagi erkölcs mellett; a mű az elmúlás képeivel indul.',
            'Versforma: **ütemhangsúlyos felező tizenkettes** (6+6), páros rímekkel.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'verses elbeszélés (elbeszélő költemény)',
              text: 'Az epika verses műfaja: cselekmény, szereplők, elbeszélő, de versbe szedve.',
            },
            {
              term: 'népies epika',
              text: 'A népköltészet nyelvét, formáit és hőseszményét felhasználó epika.',
            },
            {
              term: 'trilógia',
              text: 'Három, egymással összefüggő mű; itt egyetlen hős életének három szakasza.',
            },
            {
              term: 'felező tizenkettes',
              text: 'Tizenkét szótagos, 6+6 tagolású ütemhangsúlyos sor.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Toldi (1846–47): a népi hős felemelkedése' },
        {
          kind: 'text',
          text: 'A *Toldi* cselekménye Nagy Lajos király korában játszódik. **Toldi Miklós**, az ifjú, erős, de a testvére, **György** által elnyomott és megalázott vitéz **paraszti környezetben** él, a szolgája **Bence**. Miklóst a lovagi erkölcs, az igazságérzet és az indulat mozgatja. A sértések, a kitaszítottság és a bizonyítási vágy miatt útra kel, a király udvarába jut, ahol vitézi tettei (köztük egy cseh bajnok legyőzése) révén **megbékél a királlyal**, és visszanyeri a helyét.',
        },
        {
          kind: 'text',
          text: 'A történet egyszerre **népmesei váz** (az elnyomott legkisebb fiú győzelme) és a **nemzeti önkép** kifejezése: a hős a nép erejét és erkölcsét képviseli. Az 1840-es években ez a **népi hőseszmény** a reformkor nemzeti irodalmának fontos kérdése.',
        },
        {
          kind: 'keypoints',
          title: 'A Toldi főbb motívumai',
          items: [
            'az **elnyomott, de erős hős** (népmesei motívum), a testvéri igazságtalanság',
            'a **hűség** (Bence) és az **anya** alakja',
            'a **próbatétel** és a bizonyítás: a párbaj, a király előtti kiállás',
            'a **megbékélés**: az egyén visszatér a közösségbe',
            'a természetközeli, **népies leírás** és beszédmód',
          ],
        },
        { kind: 'heading', text: 'Toldi estéje (megjelent 1854): az öregkor drámája' },
        {
          kind: 'text',
          text: 'A második rész (a keletkezési sorrendben a második, a megjelenésben a harmadik) az **öreg Toldiról** szól. A nyitóképe a **természeti évszakváltás**: az ősz képe a hős életkorát vetíti előre. A mű első két sora: *„Őszbe csavarodott a természet feje, / Dérré vált a harmat, hull a fák levele,”* – az évszak az emberi élet őszével kapcsolódik össze. A mű a **mellőzöttség**, az **elmúlás**, a **becsület** és az **öregkori helytállás** témáit dolgozza fel, és komorabb, elégikusabb, mint az első rész. Hőse a halálában is megőrzi méltóságát.',
        },
        {
          kind: 'tip',
          text: 'A *Toldi estéje* két része a Memoriterek szekcióban is szerepel az appban (**I. ének 1. versszak** és **VI. ének 28. versszak**): érdemes szó szerint megtanulni.',
        },
        { kind: 'heading', text: 'Toldi szerelme (1879): a késői rész' },
        {
          kind: 'text',
          text: 'A trilógia utolsó, legkésőbb megírt darabja **Toldi szerelme** (1879). Cselekményidőben a hős élete **középső szakaszához** tartozik (szerelem, lovagi világ, az udvar), megírása azonban Arany öregkorára esik. A trilógia így három költői korszakot is összeköt: a fiatal Arany népies derűjét, a számvetés korát és az öregkor visszatekintését.',
        },
        {
          kind: 'compare',
          title: 'A trilógia három része',
          columns: ['Hangulat és téma', 'Elhelyezés'],
          rows: [
            {
              label: 'Toldi',
              cells: ['népmesei, derűs; felemelkedés, megbékélés', 'szalontai évek, 1846–47'],
            },
            {
              label: 'Toldi estéje',
              cells: ['elégikus, komor; öregkor, becsület, halál', 'megjelenés: 1854'],
            },
            {
              label: 'Toldi szerelme',
              cells: ['lovagi, szerelmi történet; a hős középső élete', 'öregkori mű, 1879'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a **műfaji változás** a fő kérdés: a *Toldi* a népmese és a hősköltemény ötvözete, a *Toldi estéje* már **tragikus hangú, lélektani** mű. A trilógia így a hős életpályáján és Arany saját pályáján keresztül is **az idő és a nemzeti sors** kérdését vizsgálja. A *Toldi* korabeli fogadtatásban nemzeti hőseposz-igényeket elégített ki, a *Toldi estéje* a későbbi olvasók számára a költői számvetés példája.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Részlet elemzése (a *Toldi estéje* nyitánya vagy egy *Toldi*-részlet): téma, kép, hangulat, versforma.',
            'Összehasonlítás: *Toldi* és *Toldi estéje* (hőskép, hangnem), vagy Arany Toldija és Petőfi *János vitéz*e.',
            'Irodalmi feladatlap: műfaj (verses elbeszélés), versforma felismerése, memoriter kiegészítése.',
          ],
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: a Toldi estéje nyitánya',
          problem: 'Elemezd a *Toldi estéje* első versszakát (kb. 600 szó).',
          solution:
            '**Bevezetés**: a *Toldi estéje* nyitánya; az évszakváltás képe, a trilógia második darabja.\n**Szerkezet**: a természet ősze (dér, hulló levél, rövidülő nap), majd az öregek halála; a természeti kép előlegzi a hős sorsát.\n**Képek, eszközök**: megszemélyesítés („a természet feje”), metafora („őszbe csavarodott”), az idő múlását kifejező ismétlés.\n**Versforma**: tizenkét szótagos, felező, páros rímek.\n**Értelmezés**: a természeti folyamat és az emberi élet párhuzama, elégikus hangnem.\n**Zárás**: a nyitókép az egész mű témáját (öregkor, elmúlás, becsület) előlegzi.',
        },
        {
          kind: 'warning',
          text: 'A *Toldi*t ne mesélj el! Ha részletet kapsz, a hangnemet, a szereplők viszonyát és a hős erkölcsi helyzetét elemezd. A három rész **keletkezési** és **cselekményidejű** sorrendje nem azonos, és ezt kérdezhetik is.',
        },
      ],
      topicMatch: ['arany jános'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Ki a *Toldi* főhőse?',
          options: ['Toldi György', 'Bence', 'Toldi Miklós', 'Nagy Lajos király'],
          answer: 2,
          explanation:
            'A főhős Toldi Miklós; György a bátyja, Bence a szolgája, Nagy Lajos a király.',
        },
        {
          question: 'Milyen versformában íródott a *Toldi*?',
          options: ['hexameter', 'szapphói strófa', 'felező tizenkettes', 'kétütemű nyolcas'],
          answer: 2,
          explanation:
            'A Toldi ütemhangsúlyos, 6+6 tagolású felező tizenkettes sorokból áll, páros rímekkel.',
        },
        {
          question: 'Melyik állítás igaz a *Toldi estéje* nyitányára?',
          options: [
            'Tavaszi tájképpel indul.',
            'Az évszakváltás (ősz) képével indul.',
            'Csatajelenettel indul.',
            'Szerelmi vallomással indul.',
          ],
          answer: 1,
          explanation:
            'A nyitókép az ősz (*„Őszbe csavarodott a természet feje”*), amely a hős öregkorát előlegzi.',
        },
        {
          question: 'Melyik a trilógia legkésőbb megírt része?',
          options: ['Toldi', 'Toldi estéje', 'Toldi szerelme', 'Buda halála'],
          answer: 2,
          explanation:
            'A *Toldi szerelme* 1879-ben íródott; a *Buda halála* nem tartozik a trilógiához.',
        },
        {
          question: 'Mi a trilógia kompozícióját különösen izgalmassá tevő eltérés?',
          options: [
            'Az első és harmadik rész azonos hangulatú.',
            'A megírás sorrendje és a cselekmény időrendje nem egyezik.',
            'Mindhárom rész ugyanabban az évben készült.',
            'A hős neve részenként változik.',
          ],
          answer: 1,
          explanation:
            'A *Toldi szerelme* cselekményben a középső szakaszhoz tartozik, de utolsóként született meg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Toldi', url: wiki('Toldi Arany János') },
        { label: 'Wikipédia: Toldi estéje', url: wiki('Toldi estéje') },
        { label: 'Wikipédia: Toldi szerelme', url: wiki('Toldi szerelme') },
      ],
    },
    {
      id: 'arany-balladak',
      subject: 'magyar',
      unitId: 'arany',
      title: 'Arany balladái',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai és epikai alkotások értelmezése: téma, műfaj (ballada), kompozíció, jellemző motívumok, jelentésrétegek; műnemek és műfajok felismerése; a művekben felvetett kérdések etikai, történeti, lélektani vonatkozásai; kapcsolatok a művek között.',
        emelt:
          'Azonos műfajú alkotások poétikai szempontú összevetése; a művekben felvetett kérdések gondolati, filozófiai, esztétikai vonatkozásai; különféle kritikák, interpretációk.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **ballada** lírai-epikai-drámai műnemi határokat átlépő műfaj: tragikus tárgyú, tömör, kihagyásos (**balladai homály**), párbeszédes, drámai csúcsponttal.',
            '*Ágnes asszony* (1853): **bűn és bűnhődés**, lelkiismeret, megőrülés; a vérfoltos lepedő mosása.',
            '*Szondi két apródja* (1856): Szondi György **drégelyi hőstette** (1552) és a megtört hűségű apródok szembeállítása Ali pasával: hűség és hatalom.',
            '*A walesi bárdok* (1857): a bárdok megtagadják I. Edward dicséretét; a **költő és a hatalom** viszonya, rejtett szabadságharc utáni utalással.',
            '*Tengeri-hántás* (1877): késői, falusi környezetű, balladás hangulatú alkotás.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ballada',
              text: 'Tragikus kimenetelű, rövid történetet elbeszélő, párbeszédekkel és sűrítéssel építkező műfaj; lírai, epikai és drámai vonások egyszerre.',
            },
            {
              term: 'balladai homály',
              text: 'A cselekmény fontos részeinek kihagyása; az olvasónak kell összerakni a történetet.',
            },
            {
              term: 'drámai csúcspont',
              text: 'A feszültség legmagasabb pontja, amelyre a ballada egész szerkezete épül.',
            },
            {
              term: 'lélektani ballada',
              text: 'A bűn és a lelkiismeret belső folyamatait mutatja (*Ágnes asszony*).',
            },
            {
              term: 'történelmi ballada',
              text: 'Történelmi helyzetet, hőst vagy hatalmi viszonyt ábrázol (*Szondi két apródja*, *A walesi bárdok*).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a ballada? A műfaj és Arany' },
        {
          kind: 'text',
          text: 'A népballadák hagyományát Arany **műballadává** emelte: komor hangulat, **sűrített szerkezet**, a döntő mozzanatok elhallgatása, a párbeszédek és a **drámai fordulat** jellemzi. A tárgy többnyire **erkölcsi próbatétel**: bűn, hűség, hatalom, becsület. A balladák az 1850-es évek nehéz történelmi helyzetében a közvetlen kimondás helyett **allegóriával és történelmi példával** beszélnek.',
        },
        { kind: 'heading', text: 'Ágnes asszony (1853): lélektani ballada' },
        {
          kind: 'text',
          text: 'Ágnes asszony **bűnrészes** a férje halálában. A vers a **következményt** mutatja: a bűnös asszony a patakban mossa a **vérfoltos lepedőt**, és a bűn nyoma nem tűnik el. A ballada **lélektani** mű: a lelkiismeret-furdalás az őrületbe vezeti az asszonyt. A lepedő a **bűn jelképe**, a víz a megtisztulás hiábavaló vágyát fejezi ki. A cselekmény kihagyásos: a ballada a bűn utáni állapotot ábrázolja, a bírósági jelenetek és a mosás képei váltakoznak.',
        },
        { kind: 'heading', text: 'Szondi két apródja (1856): hűség és hatalom' },
        {
          kind: 'text',
          text: 'A történelmi háttér: **1552, Drégely vára**. **Szondi György** a vár kapitánya, a török ellen hősi halált halt. A ballada **Ali budai pasa** sátra előtt játszódik: a pasa az apródokat arra kényszerítené, hogy őt dicsérjék, ők azonban **Szondi emlékét éneklik**. A mű szerkezete a **szembeállításra** épül: a hűséges apródok és a hatalmas, de dicséretre éhes pasa, a keresztény–török ellentét mellett az **erkölcsi nagyság** és a puszta erő különbsége. Az apródok éneke egyben **hőskölteményt** idéz meg: az emlékezet erkölcsi erő.',
        },
        { kind: 'heading', text: 'A walesi bárdok (1857): költő és hatalom' },
        {
          kind: 'text',
          text: 'A ballada háttere a **I. Edward** angol király által meghódított Wales. A király lakomáján a **walesi bárdoktól** dicsőítő éneket várnak, de a bárdok **megtagadják a hízelgést**, és vállalják a halált is. A király a bárdokat elpusztítja, a vers a **hatalom bűnét** és a művész szabadságát állítja szembe. A mű az 1848–49 utáni **Habsburg-elnyomás** idején keletkezett, és **allegóriaként** olvasható: a magyar költők sem dicsérik a hatalmat. A cenzúra miatt a közvetlen politikai kimondás nem volt lehetséges.',
        },
        {
          kind: 'compare',
          title: 'Három ballada összevetése',
          columns: ['Téma és szerkezet', 'Mondanivaló'],
          rows: [
            {
              label: 'Ágnes asszony (1853)',
              cells: ['bűn és lelkiismeret; a vérfoltos lepedő', 'a bűn nem mosható le'],
            },
            {
              label: 'Szondi két apródja (1856)',
              cells: [
                'apródok éneke Ali sátra előtt; hős és hatalom',
                'a hűség és emlékezet ereje',
              ],
            },
            {
              label: 'A walesi bárdok (1857)',
              cells: ['bárdok és király; allegória', 'a költő nem hódol a zsarnokság előtt'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Poétikai összevetés: a **lélektani** ballada (*Ágnes asszony*) a belső világot sűríti jelképekbe, a **történelmi** balladák (*Szondi*, *Walesi bárdok*) a hatalom és erkölcs ellentétét építik **párhuzamos szerkezetre**. A *Walesi bárdok* a hatalom és a költők szembeállítására épül, a *Szondi két apródja* az emlékezet, az éneklés erejére. Mindhárom mű központi kérdése az **erkölcsi felelősség**: a bűn, a hűség és a költői szabadság.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: egy ballada (*Ágnes asszony*, *Szondi két apródja*, *A walesi bárdok*) teljes elemzése vagy részletének értelmezése.',
            'Összehasonlítás: két ballada (például *Szondi* és *Walesi bárdok*: hatalom és hűség) vagy Arany-ballada és más szerző balladája.',
            'Irodalmi feladatlap: műfaj felismerése (ballada), a balladai homály fogalma, motívumok párosítása a művekkel.',
          ],
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: A walesi bárdok',
          problem:
            'Elemezd *A walesi bárdok* című balladát a költő és a hatalom viszonya szempontjából.',
          solution:
            '**Bevezetés**: 1857, történelmi ballada; I. Edward és a walesi bárdok, allegorikus olvasat az 1848–49 utáni elnyomásról.\n**Szerkezet**: a király és a lakoma, a dicséret elvárása, a bárdok megtagadása és sorsa, a király magára marad.\n**Képek, ellentétek**: király és bárdok, hatalom és erkölcsi erő, dicsőítés és igazmondás.\n**Hangnem**: komor, drámai, ünnepélyes.\n**Értelmezés**: a költő nem szolgálja a zsarnokot; a vers a hallgatás és a halál árán is vállalt igazság mellett áll.\n**Zárás**: a ballada az 1850-es évek magyar helyzetére is vonatkozik, ezért a hatalom–művész viszony időtlen példája.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a három ballada témáját! *Ágnes asszony*: bűn és lelkiismeret (lélektani); *Szondi két apródja*: hűség, hősi emlékezet (Drégely, 1552); *A walesi bárdok*: költő és zsarnok (I. Edward). A történelmi hátteret ne mesélő módon használd, hanem az értelmezés szolgálatában.',
        },
        {
          kind: 'tip',
          text: 'Balladaelemzéskor mindig keresd: **kihagyás**, **párbeszéd**, **drámai csúcspont**, **jelkép** (lepedő, tűz, sátor, lant). Ezek a fogalmak az irodalmi feladatlapon is előjönnek.',
        },
      ],
      topicMatch: ['arany jános'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik ballada jelképe a vérfoltos lepedő?',
          options: ['Szondi két apródja', 'Ágnes asszony', 'A walesi bárdok', 'V. László'],
          answer: 1,
          explanation:
            'Az *Ágnes asszony* főhőse a bűn nyomát mossa; a lepedő a lelkiismeret jelképe.',
        },
        {
          question: 'Hol és mikor játszódik *Szondi két apródja* háttértörténete?',
          options: ['Mohács, 1526', 'Drégely, 1552', 'Eger, 1552', 'Szigetvár, 1566'],
          answer: 1,
          explanation:
            'Szondi György Drégely várát védte 1552-ben; a ballada Ali pasa sátra előtt játszódik.',
        },
        {
          question: 'Mit tagadnak meg a walesi bárdok?',
          options: [
            'A fegyverletételt.',
            'A király dicséretét.',
            'A király lakomájára érkezést.',
            'A hazájuk elhagyását.',
          ],
          answer: 1,
          explanation:
            'A bárdok nem hajlandók dicsőíteni a királyt, vállalják a halált is: ez a költői szabadság allegóriája.',
        },
        {
          question: 'Mit jelent a „balladai homály”?',
          options: [
            'A vers nyelvének régies volta.',
            'A cselekmény lényeges részeinek kihagyása.',
            'A ballada sötét évszakban játszódik.',
            'A szereplők névtelensége.',
          ],
          answer: 1,
          explanation:
            'A ballada a történetet sűríti: kihagyja a magyarázatokat és részleteket, az olvasó tölti ki.',
        },
        {
          question: 'Miért olvasható a *Walesi bárdok* allegóriaként?',
          options: [
            'Mert Walesben játszódik.',
            'Mert az 1848–49 utáni magyar helyzetre vonatkozó üzenetet rejt.',
            'Mert népdalszerű.',
            'Mert Arany Londonban írta.',
          ],
          answer: 1,
          explanation:
            'A történelmi példa (I. Edward) a Habsburg-hatalom és a magyar költők viszonyát rejtetten fejezi ki.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Ágnes asszony', url: wiki('Ágnes asszony Arany János') },
        { label: 'Wikipédia: Szondi két apródja', url: wiki('Szondi két apródja') },
        { label: 'Wikipédia: A walesi bárdok', url: wiki('A walesi bárdok') },
      ],
    },
    {
      id: 'arany-lirai-szamvetes-1850-es-evek',
      subject: 'magyar',
      unitId: 'arany',
      title: 'Az 1850-es évek lírája: Letészem a lantot, Kertben',
      level: 'kozep',
      requirement: {
        kozep:
          'Néhány lírai alkotás bemutatása, értelmezése (téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); műrészletek értelmezése; a művek elhelyezése az életműben és a korszakban; memoriterek.',
        emelt:
          'A pályaszakaszokat jellemző főbb témák, kérdésfeltevések; kötetek, ciklusok, témák, motívumok; különféle kritikák, interpretációk.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az 1850-es évek lírája a **szabadságharc bukása** és az önkényuralom után a **kiábrándulás, a hallgatás és a számvetés** hangján szól.',
            'A *Letészem a lantot* (1850) a költői szerep **feladásának** kimondása: a költő csalódottan hallgat, a lantot félreteszi.',
            'A *Kertben* a magányos, **belső világba fordult** költő képe: a kert a zárt, intim tér, a természet és a lélek egymásnak megfelelő rendszere.',
            'Az új hang **személyesebb, reflexívebb**, mint a népies Toldi-korszak lírája.',
            'Motívumok: **lant** (a költői hivatás jelképe), **kert**, **évszakok**, az elmúlás.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'lant', text: 'A költészet és a költői hivatás hagyományos jelképe.' },
            {
              term: 'számvetés',
              text: 'A költő saját pályáját, értékeit és kudarcait mérlegelő vers.',
            },
            {
              term: 'elégikus hangnem',
              text: 'Múlandóságot, veszteséget, csendes fájdalmat kifejező hang.',
            },
            {
              term: 'reflexív költészet',
              text: 'A gondolkodás, a töprengés kerül a középpontba, nem az esemény vagy a leírás.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A történelmi és életrajzi háttér' },
        {
          kind: 'text',
          text: 'A szabadságharc leverése után, **1849–50-ben** Arany és a magyar értelmiség nagy része **csalódottan, bizonytalanul** élt. Petőfi eltűnt, a nemzeti remények szertefoszlottak, a **cenzúra** a nyílt politikai kifejezést ellehetetlenítette. Arany Nagykőrösre költözött, tanári munkája mellett a költészet új módját kereste: a közéleti pátosz helyett **belső feszültséget** és **jelképes beszédet**.',
        },
        { kind: 'heading', text: 'Letészem a lantot (1850)' },
        {
          kind: 'text',
          text: 'A cím már a program: a költő **félreteszi** a költészet jelképét, a **lantot**. A vers a **költői szerep válságát** fejezi ki: a költő felteszi a kérdést, van-e értelme még a daloknak a bukás után. A mű **számvető**, a hangnem csalódott, de nem teljesen reményvesztett; a költői hallgatás nem végleges lemondás, hanem a **korszak lelkiállapotának** kifejezése. A vers a nemzeti sorssal és a költői küldetéssel való viszonyt mutatja.',
        },
        { kind: 'heading', text: 'Kertben' },
        {
          kind: 'text',
          text: 'A *Kertben* az 1850-es évek **magányos, elvonult** költőjét mutatja. A **kert** zárt, védett hely, a külvilág zajától való menekülés, ugyanakkor a **belső számvetés** tere. A természet jelenségei (évszak, növények, csend) a lelkiállapotot tükrözik, a **táj és lélek megfelelése** a romantika hagyományához kapcsolódik, de Arany költészetében **visszafogottabb, higgadtabb** hangon szólal meg.',
        },
        {
          kind: 'text',
          text: 'A *Letészem a lantot* és a *Kertben* ellentéte: az előbbi a **költői szerep** kérdése, az utóbbi a **magány és a belső élet**; mindkettő a bukás utáni korszak lírai megnyilvánulása.',
        },
        {
          kind: 'keypoints',
          title: 'Az 1850-es évek lírájának jellemzői',
          items: [
            'kiábrándultság, hallgatás, magány',
            'a költői hivatás kérdéses voltának kimondása (lant)',
            'visszafogott, mértéktartó, elégikus hangnem',
            'természeti kép (kert, évszak) mint lelkiállapot kifejezője',
            'a közvetlen politikai kimondás helyett jelképek, utalások',
          ],
        },
        {
          kind: 'compare',
          title: 'A Toldi-kor és az 1850-es évek költészete',
          columns: ['Toldi-kor (1840-es évek)', '1850-es évek'],
          rows: [
            { label: 'Hangnem', cells: ['népies, derűs, lelkes', 'komor, elégikus, tépelődő'] },
            {
              label: 'Tárgy',
              cells: ['hős, történet, közösség', 'a költő belső világa, hallgatás'],
            },
            {
              label: 'Műfaj',
              cells: ['elbeszélő költemény', 'számvető, reflexív líra, ballada'],
            },
            {
              label: 'Költői szerep',
              cells: ['nemzeti hős dicsérője', 'kételkedő, visszahúzódó költő'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a lírát a **pályaszakasz** kérdései felől is vizsgáld: a költői szerep átalakulása (a reformkori vátesz-eszmény helyett a mérlegelő, magányos költő), a **romantika** és az új, komorabb világlátás viszonya, valamint az, hogy a lírai és balladai művek közös erkölcsi kérdéseket vetnek fel. A számvető versek a későbbi *Őszikék* költői hangját előlegzik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: a *Letészem a lantot* vagy a *Kertben* teljes elemzése, részletek értelmezése.',
            'Összehasonlítás: Arany lírai verse és más költő hivatásverse (például Petőfi *A XIX. század költői*).',
            'Témakifejtés: a költői szerep változása Arany életművében.',
          ],
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: Letészem a lantot',
          problem:
            'Vázolj elemzést a *Letészem a lantot* című költeményről a költői szerep szempontjából.',
          solution:
            '**Bevezetés**: 1850, a szabadságharc bukása utáni korszak; hivatásvers, számvető költemény.\n**Szerkezet**: a lant letételének kimondása, az okok mérlegelése (csalódás, értelmetlenség), a költői szerep kérdése.\n**Jelképek, eszközök**: a lant mint a költészet jelképe, felkiáltás és kérdés, tőmondatos, mérsékelt hangnem.\n**Hangnem**: csalódott, elégikus, fegyelmezett.\n**Értelmezés**: a költő nem a költészet értékét tagadja, hanem a korszak reménytelenségét; a hallgatás is állásfoglalás.\n**Zárás**: összehasonlítás Petőfi pátoszával: Aranynál a csend, a mérlegelés a jellemző.',
        },
        {
          kind: 'warning',
          text: 'Ne tekintsd a *Letészem a lantot* című verset végleges lemondásnak: a hallgatás a kor érzésének kifejezése. Ne keverd össze a korai (1840-es) népies derűt az 1850-es évek komor hangjával.',
        },
      ],
      topicMatch: ['arany jános'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Minek a jelképe a lant Arany költészetében?',
          options: ['A háborúnak', 'A költői hivatásnak', 'A szerelemnek', 'A természetnek'],
          answer: 1,
          explanation: 'A lant a költészet és a költői hivatás hagyományos jelképe.',
        },
        {
          question: 'Melyik történelmi esemény hatására változik meg az 1850-es évek lírája?',
          options: ['A mohácsi vész.', 'A szabadságharc bukása.', 'A kiegyezés.', 'A tatárjárás.'],
          answer: 1,
          explanation:
            'Az 1848–49-es szabadságharc leverése után az önkényuralom légkörében kiábrándult, számvető hang jelenik meg.',
        },
        {
          question: 'Mi jellemzi a *Kertben* helyszínét?',
          options: [
            'Nyüzsgő városi tér.',
            'A zárt, magányos belső tér, a lélek tükre.',
            'A csatatér.',
            'Az udvari lakoma.',
          ],
          answer: 1,
          explanation:
            'A kert a külvilágtól elvonult, védett hely, amely a belső számvetés terévé válik.',
        },
        {
          question: 'Mire utal a *Letészem a lantot* címe?',
          options: [
            'A költői szerepvállalás feladására, a hallgatásra.',
            'Egy zenemű befejezésére.',
            'Egy csatajelenetre.',
            'Egy szerelmi vallomásra.',
          ],
          answer: 0,
          explanation:
            'A lant letétele a költői hallgatás kimondása; a vers a hivatás válságáról szól.',
        },
        {
          question:
            'Milyen költői szerep jellemzi az 1850-es évek Aranyát az emelt szintű értelmezés szerint?',
          options: [
            'A látnok vezér, aki tömegeket mozgat.',
            'A mérlegelő, magányos, kételkedő költő.',
            'A pártatlan krónikás.',
            'A humoros mesemondó.',
          ],
          answer: 1,
          explanation:
            'A reformkori vátesz-szereppel szemben itt a visszahúzódó, mérlegelő költő jelenik meg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Letészem a lantot', url: wiki('Letészem a lantot Arany János') },
        { label: 'Wikipédia: Kertben (Arany János)', url: wiki('Kertben Arany János') },
        { label: 'Wikipédia: Arany János költészete', url: wiki('Arany János költészete') },
      ],
    },
    {
      id: 'arany-oszikek-epilogus',
      subject: 'magyar',
      unitId: 'arany',
      title: 'A késői költészet: Őszikék, Epilógus',
      level: 'kozep',
      requirement: {
        kozep:
          'Néhány lírai alkotás bemutatása, értelmezése (téma, műfaj, kompozíció, jellemző motívumok, világlátás); műrészletek értelmezése; a művek elhelyezése az életműben; memoriterek.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a pályaszakaszokat jellemző kérdésfeltevések; a szerző utóélete, hatása az irodalmi hagyományban; különféle interpretációk.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **Őszikék** (1877–1882) az **öregkor költészete**: számvetés, emlékezés, a mulandóság és a költői pálya értékelése.',
            'A versek **személyesek**, közvetlen hangúak, gyakran **humorral és iróniával** oldott fájdalmat fejeznek ki.',
            'Az *Epilógus* (1877) a költői pálya lezárása: a költő visszatekint az életművére, és számot vet a költészet értelmével.',
            'A késői versek **kötetlenebb**, szabadabb szerkezetűek, a nyelvük egyszerű, mégis sűrített.',
            'Fő motívumok: **ősz és öregség**, **emlékezet**, **költői hivatás**, a lant; a *Toldi estéje* hangulata folytatódik.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Őszikék',
              text: 'Arany öregkori versgyűjteménye (1877–1882); a költő halála után jelent meg.',
            },
            {
              term: 'számvető költemény',
              text: 'A költő az életét, pályáját és értékeit értékeli.',
            },
            {
              term: 'epilógus',
              text: 'Befejező rész, utószó; itt az életmű lezárása.',
            },
            {
              term: 'önirónia',
              text: 'A költő saját magát, törekvéseit ironikusan szemléli.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az Őszikék világa' },
        {
          kind: 'text',
          text: 'Az öreg Arany a **Margitszigeten**, a természetben töltött napjai között újra verselni kezdett. A versek ritkán rendszeres, kötetbe szánt ciklusként születtek, inkább **magáncélú feljegyzések**, számvetések. A kötet címe (*Őszikék*) kettős jelentésű: az évszak és az **öregkor**, a késői virágok képe. A versek **sűrítettek, elmélkedők**, a bennük lévő humor gyakran keserű.',
        },
        {
          kind: 'text',
          text: 'Jellegzetes témák: **az idő múlása**, a **fiatalkor emléke**, a **költői pálya** értéke, a **halállal való szembenézés**. A hang mégsem pusztán panaszos: a **mértéktartás, az önirónia** és a bölcs szemlélődés jellemzi.',
        },
        { kind: 'heading', text: 'Epilógus (1877)' },
        {
          kind: 'text',
          text: 'Az *Epilógus* a **költői életmű búcsúja**: a költő visszatekint a pályájára, a lantra, az alkotás örömére és fájdalmára. A hangnem **tárgyilagos, elégikus**, a vers a költői hivatás értelmét kérdezi. A vers a *Letészem a lantot* motívumaival is kapcsolatot tart: a **lant** és a hallgatás képe az 1850-es évek lírájához vezet vissza, míg az öregkori nyugalom az *Őszikék* világához tartozik.',
        },
        {
          kind: 'keypoints',
          title: 'Kapcsolatok a művek között',
          items: [
            'Toldi estéje és Őszikék: az ősz, az öregkor, az elmúlás képe',
            'Letészem a lantot és Epilógus: a költői szerep, a lant és a hallgatás',
            'Ágnes asszony, Walesi bárdok és a késői líra: erkölcsi kérdések, bűn és felelősség',
            'Toldi (népies derű) és Őszikék (önirónia, egyszerű nyelv): a népies hangvétel újrafogalmazása',
          ],
        },
        {
          kind: 'compare',
          title: 'Hasonlóságok és különbségek',
          columns: ['Letészem a lantot (1850)', 'Epilógus (1877)'],
          rows: [
            {
              label: 'Élethelyzet',
              cells: ['a szabadságharc bukása utáni csalódás', 'öregkor, az életmű lezárása'],
            },
            { label: 'Hangnem', cells: ['csalódott, elégikus', 'tárgyilagos, bölcsen elégikus'] },
            {
              label: 'Költői szerep',
              cells: ['a hivatás feladása, hallgatás', 'visszatekintés, a hivatás értékelése'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az *Őszikék* fogadtatása és utóélete: a kortársak jórészt a nagy epikus és ballada-költőt látták Aranyban, az *Őszikék* **egyedi hangját** a későbbi korszak olvasói becsülték. A késői versek **személyes líraisága**, a nyelvi tömörség és a költői szerep önreflexív szemlélete a 20. századi lírára is hatott. Az emelt szintű válaszban érdemes példát hozni az életmű íveire: **népies epika → ballada → számvető líra → öregkori önértelmezés**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: az *Epilógus* vagy egy *Őszikék*-vers (a szöveg előtted van).',
            'Összehasonlítás: az öregkori Arany és más költő öregkori vagy számvető verse (például *Toldi estéje* nyitánya vagy Babits, Kosztolányi hasonló verse).',
            'Életműtételben: az életmű egészének bemutatása, az ív: Toldi → balladák → Őszikék.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a *Toldi estéjét* (epikus mű, a hős öregkora) az *Őszikék* költeményeivel (lírai, a költő saját öregkora). A hangulatuk rokon, a műnem és a téma más.',
        },
        {
          kind: 'tip',
          text: 'Az **életműtételhez** tanuld meg az ívet három mondatban: **1.** a *Toldi* népies derűje és nemzeti hőseszménye; **2.** a szabadságharc utáni balladák és számvető líra, a bűn, hatalom és hivatás kérdéseivel; **3.** az *Őszikék* öregkori számvetése. Minden állításhoz kapcsolj egy művet.',
        },
      ],
      topicMatch: ['arany jános'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Mi az *Őszikék* fő témaköre?',
          options: [
            'Tavaszi természetleírás.',
            'Öregkori számvetés, emlékezés, mulandóság.',
            'Forradalmi felhívás.',
            'Népmesei hősök.',
          ],
          answer: 1,
          explanation:
            'Az *Őszikék* az öreg költő számvetése, az idő múlásának és a pálya értékelésének versei.',
        },
        {
          question: 'Melyik vers zárja le a költői pályát számvetéssel?',
          options: ['Ágnes asszony', 'Epilógus', 'Toldi', 'Szondi két apródja'],
          answer: 1,
          explanation: 'Az *Epilógus* a költő pályájára visszatekintő, búcsúzó hangú mű.',
        },
        {
          question: 'Hol élt Arany az Őszikék keletkezésének éveiben?',
          options: ['Nagykőrösön', 'Debrecenben', 'Szalontán', 'Budapesten'],
          answer: 3,
          explanation:
            'Az 1870-es évek végén Budapesten él, a Margitsziget a visszavonultság helye.',
        },
        {
          question: 'Melyik motívum köti össze a *Letészem a lantot* és az *Epilógus* című verset?',
          options: ['A csatatér', 'A lant, a költői hivatás', 'A tenger', 'A vásár'],
          answer: 1,
          explanation:
            'Mindkét vers a költői szerep és a költészet értelmét vizsgálja a lant képével.',
        },
        {
          question:
            'Melyik állítás jellemzi az *Őszikék* utóéletét az emelt szintű értelmezés szerint?',
          options: [
            'Nem hatott a későbbi költészetre.',
            'Személyes, sűrített lírája a 20. századi költészet számára is fontos volt.',
            'Csak a kortársak tartották értékesnek.',
            'Mindenben megegyezik a Toldival.',
          ],
          answer: 1,
          explanation:
            'A késői líra egyedi hangját főleg a későbbi olvasók értékelték, és a modern költészet felé mutat.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Őszikék', url: wiki('Őszikék Arany János') },
        { label: 'Wikipédia: Epilógus (Arany János)', url: wiki('Epilógus Arany János') },
        { label: 'Wikipédia: Arany János', url: wiki('Arany János') },
      ],
    },
  ],
};

export default unit;
