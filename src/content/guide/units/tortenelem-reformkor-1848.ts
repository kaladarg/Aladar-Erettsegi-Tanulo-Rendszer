import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 4.3 (A reformkor) and 4.4 (A forradalom és szabadságharc). */
const unit: GuideUnit = {
  id: 'reformkor-1848',
  subject: 'tortenelem',
  order: 40,
  title: 'A reformkor és az 1848–49-es forradalom és szabadságharc',
  requirementRef: '4.3–4.4',
  intro:
    'A polgári átalakulás magyar útja: a reformkori viták, a pesti forradalom és az áprilisi törvények, majd a szabadságharc és a megtorlás.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (4. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'liberalizmus',
        'nacionalizmus',
        'nemzetállam',
        'konzervativizmus',
        'reform',
        'érdekegyesítés',
        'közteherviselés',
        'jobbágyfelszabadítás',
        'örökváltság',
        'politikai nemzet',
        'nemzetiség',
        'márciusi ifjak',
        'sajtószabadság',
        'cenzúra',
        'áprilisi törvények',
        'népképviseleti országgyűlés',
        'honvédség',
        'Függetlenségi nyilatkozat',
        'emigráció',
        'alsó- és felsőtábla',
      ],
      emelt: [
        'zsellér',
        'követutasítás',
        'Pesti Hírlap',
        'Védegylet',
        'főispán',
        'alispán',
        'közgyűlés',
        'Országos Honvédelmi Bizottmány (OHB)',
        'olmützi alkotmány',
      ],
    },
    people: {
      kozep: [
        'József nádor',
        'Metternich',
        'Wesselényi Miklós',
        'Széchenyi István',
        'Kölcsey Ferenc',
        'Deák Ferenc',
        'Kossuth Lajos',
        'Petőfi Sándor',
        'Batthyány Lajos',
        'Görgei Artúr',
        'Bem József',
        'Klapka György',
        'Ferenc József',
        'Haynau',
      ],
      emelt: [
        'I. Ferenc',
        'Jellasics/Jelačić',
        'Windisch-Grätz',
        'Gábor Áron',
        'Damjanich János',
        'I. Miklós orosz cár',
      ],
    },
    dates: {
      kozep: [
        '1830–1848 a reformkor',
        '1830 a Hitel megjelenése',
        '1844 törvény a magyar államnyelvről',
        '1848. március 15. a pesti forradalom',
        '1848. április 11. az áprilisi törvények',
        '1848. szeptember 29. a pákozdi csata',
        '1849. április–május a tavaszi hadjárat',
        '1849. április 14. a Függetlenségi nyilatkozat',
        '1849. május 21. Buda visszavétele',
        '1849. augusztus 13. a világosi fegyverletétel',
        '1849. október 6. az aradi vértanúk és Batthyány kivégzése',
      ],
      emelt: ['1849. április isaszegi csata'],
    },
    places: {
      kozep: ['Pest-Buda', 'Pákozd', 'Isaszeg', 'Világos', 'Komárom', 'Arad'],
      emelt: [],
    },
  },
  pages: [
    {
      id: 'reformkor-kerdesei',
      subject: 'tortenelem',
      unitId: 'reformkor-1848',
      title: 'A reformkor fő kérdései',
      level: 'kozep',
      requirement: {
        kozep:
          'A reformkor fő kérdései (a magyar nyelv ügye, a jobbágykérdés, a polgári alkotmányosság kérdése)',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **reformkor** 1830-tól 1848-ig tartott: ekkor dolgozták ki a polgári átalakulás magyar programját.',
            'Kezdete **1830**, Széchenyi István *Hitel* című művének megjelenése; előzménye az 1825–27-es országgyűlés.',
            'Három nagy kérdés: a **magyar nyelv** ügye, a **jobbágykérdés** és a **polgári alkotmányosság**.',
            'Az ország a Habsburg Birodalom része volt, a rendi országgyűlés Pozsonyban ülésezett, a törvényekhez királyi szentesítés kellett.',
            'A reformerek többsége liberális nemes volt: a nemesi kiváltságokról lemondva akarták az ország felemelkedését.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'reform',
              text: 'Fokozatos, törvényes úton végrehajtott átalakítás (szemben a forradalommal).',
            },
            {
              term: 'liberalizmus',
              text: 'Az egyéni szabadságjogokat, a jogegyenlőséget, a szabad versenyt és az alkotmányos kormányzást hirdető eszme.',
            },
            {
              term: 'nacionalizmus',
              text: 'A nemzeti közösséget, a nemzeti nyelvet és kultúrát középpontba állító eszme.',
            },
            {
              term: 'érdekegyesítés',
              text: 'Kossuth programja: a nemesség és a jobbágyság érdekeinek összekapcsolása, hogy a jobbágyok is a nemzet részévé váljanak.',
            },
            {
              term: 'közteherviselés',
              text: 'A nemesség is fizessen adót, ne csak a jobbágyság.',
            },
            {
              term: 'örökváltság',
              text: 'A jobbágy egyszeri összeggel megváltja a földjét és terheit, így szabad birtokossá válik.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért volt szükség reformokra?' },
        {
          kind: 'text',
          text: 'A 19. század elején Magyarország gazdaságilag elmaradt Nyugat-Európától. A földet az **ősiség** törvénye (1351) kötötte a nemesi családokhoz, ezért nem lehetett eladni vagy jelzálogként használni: a birtokosok nem kaptak hitelt. A jobbágyok **robottal**, kilenceddel és egyházi tizeddel tartoztak, a nemesség nem fizetett adót. A Habsburg-kormányzat **kettős vámhatárral** a birodalom ipari részeinek érdekeit védte.',
        },
        {
          kind: 'text',
          text: 'A nyugati példák (angol parlamentarizmus, francia forradalom, ipari forradalom) és a liberalizmus, nacionalizmus eszméi megmutatták, hogy az ország csak polgári átalakulással zárkózhat fel.',
        },
        { kind: 'heading', text: 'A magyar nyelv ügye' },
        {
          kind: 'text',
          text: 'A hivatalos nyelv a latin volt. A reformerek szerint a nemzetet a közös nyelv tartja össze, ezért a magyart akarták az ügyintézés, a törvényhozás és az oktatás nyelvévé tenni. Ez lépésenként történt: az 1830-as években a törvények magyar szövege lett hiteles, 1840-ben a hivatali ügyintézés nyelve a magyar lett, végül **1844-ben a magyar lett az államnyelv**.',
        },
        {
          kind: 'tip',
          text: 'A nyelvkérdésnek volt egy árnyoldala: a nem magyar nemzetiségek (az ország lakosságának több mint fele) attól tartottak, hogy elveszítik nyelvüket. Ez 1848-ban súlyos ellentétekhez vezetett.',
        },
        { kind: 'heading', text: 'A jobbágykérdés' },
        {
          kind: 'text',
          text: 'A jobbágyság a lakosság többsége volt. A reformerek abban egyetértettek, hogy a jobbágyot szabad birtokossá kell tenni, a módjában viszont nem. Az **önkéntes örökváltságot** (a földesúr és a jobbágy megegyezik) 1840-ben törvénybe iktatták, de kevesen tudták megfizetni. A radikálisabb reformerek ezért a **kötelező örökváltságot** követelték, állami kártalanítással a földesuraknak.',
        },
        { kind: 'heading', text: 'A polgári alkotmányosság kérdése' },
        {
          kind: 'text',
          text: 'A cél a rendi alkotmány helyett polgári alkotmány: **népképviselet** (nem rendek, hanem választott képviselők), **felelős kormány**, **törvény előtti egyenlőség**, **közteherviselés**, sajtószabadság. 1844-ben már nem nemesek is szerezhettek földbirtokot és viselhettek hivatalt.',
        },
        {
          kind: 'keypoints',
          title: 'Az országgyűlések menete',
          items: [
            '1825–27: Széchenyi felajánlja birtokai egyévi jövedelmét a tudós társaság (Akadémia) alapítására.',
            '1832–36: a reformellenzék megerősödik, de a jobbágykérdésben nem jut eredményre.',
            '1839–40: önkéntes örökváltság, magyar hivatali nyelv.',
            '1843–44: magyar államnyelv; nem nemesek is birtokolhatnak földet.',
            '1847–48: az utolsó rendi országgyűlés; a forradalom hatására itt fogadják el az áprilisi törvényeket.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A reformellenzék 1847-ben **Ellenzéki Párttá** szerveződött; programja az **Ellenzéki nyilatkozat** volt, amelyet Deák Ferenc fogalmazott. A kormányhoz hű konzervatívok 1846-ban alakították meg a Konzervatív Pártot: ők is elfogadtak óvatos reformokat, de a bécsi udvarral egyetértésben.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet (Széchenyi, Kossuth, Kölcsey, Deák szövege): melyik reformkérdésről szól, ki írta, mit követel?',
            'Fogalom azonosítása leírásból (örökváltság, közteherviselés, érdekegyesítés).',
            'Esszé: a reformkor fő kérdései, egy kérdés részletesen (például a jobbágykérdés megoldási javaslatai).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az önkéntes és a kötelező örökváltság összekeverése. Önkéntes: ha a földesúr is beleegyezik (1840-es törvény). Kötelező: a földesúr nem utasíthatja el, az állam kártalanítja (ezt csak 1848 hozta meg, jobbágyfelszabadításként).',
        },
        {
          kind: 'tip',
          text: 'Esszében mindig kösd össze a kérdéseket: a nyelvkérdés a nemzetté válás, a jobbágykérdés és az alkotmányosság a polgári átalakulás része. Ez a „tényeken alapuló megállapítás”, amire pontot adnak.',
        },
      ],
      topicMatch: ['reformkor', 'kölcsey', 'védegylet', 'ősiség', 'úrbérrendezés'],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik évhez kötjük a reformkor kezdetét?',
          options: ['1825', '1830', '1840', '1844'],
          answer: 1,
          explanation:
            'A vizsgakövetelmény szerint a reformkor 1830–1848; kezdete Széchenyi Hitelének megjelenése (1830).',
        },
        {
          question: 'Mit jelent az örökváltság?',
          options: [
            'A nemesség is adót fizet.',
            'A jobbágy egyszeri összeggel megváltja földjét és terheit.',
            'A föld nem idegeníthető el a nemesi családtól.',
            'A jobbágy elköltözhet a földesúr engedélye nélkül.',
          ],
          answer: 1,
          explanation:
            'Az örökváltsággal a jobbágy szabad birtokossá vált. A második válasz a közteherviselés, a harmadik az ősiség leírása.',
        },
        {
          question: 'Mikor lett a magyar az államnyelv?',
          options: ['1830', '1836', '1844', '1848'],
          answer: 2,
          explanation: 'Az 1843–44-es országgyűlés tette a magyart államnyelvvé (1844).',
        },
        {
          question: 'Mit jelent az érdekegyesítés?',
          options: [
            'A magyar és a horvát nemesség szövetségét.',
            'A nemesség és a jobbágyság érdekeinek összekapcsolását.',
            'Ausztria és Magyarország közös vámterületét.',
            'A katolikus és protestáns egyházak egyesülését.',
          ],
          answer: 1,
          explanation:
            'Kossuth programja: a jobbágyok felszabadításával és a nemesség áldozatvállalásával egységes nemzet jöjjön létre.',
        },
        {
          question: 'Ki fogalmazta az 1847-es Ellenzéki nyilatkozatot?',
          options: ['Széchenyi István', 'Wesselényi Miklós', 'Deák Ferenc', 'Batthyány Lajos'],
          answer: 2,
          explanation: 'Az Ellenzéki Párt programját Deák Ferenc fogalmazta.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Reformkor', url: wiki('Reformkor') },
        { label: 'Wikipédia: Örökváltság', url: wiki('Örökváltság') },
      ],
    },
    {
      id: 'szechenyi-kossuth',
      subject: 'tortenelem',
      unitId: 'reformkor-1848',
      title: 'Széchenyi és Kossuth programja és vitája',
      level: 'kozep',
      requirement: { kozep: 'Széchenyi és Kossuth programja és vitája' },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Széchenyi István**: fokozatos, gazdasági reformokkal induló átalakulás, a bécsi udvarral együttműködve. Fő műve a *Hitel* (1830).',
            '**Kossuth Lajos**: gyorsabb, politikai és gazdasági átalakulás egyszerre, érdekegyesítés, a közvélemény mozgósítása. Fő fóruma a reformellenzéki sajtó (1841–1844).',
            'Vitájuk 1841-ben robbant ki: Széchenyi *A Kelet népe* című művében támadta Kossuthot, aki a *Felelet*-ben válaszolt.',
            'A cél közös volt (polgári átalakulás), a módszer és a tempó különbözött.',
          ],
        },
        {
          kind: 'compare',
          title: 'A két program röviden',
          columns: ['Széchenyi', 'Kossuth'],
          rows: [
            { label: 'Tempó', cells: ['fokozatos, lassú', 'gyors, átfogó'] },
            {
              label: 'Sorrend',
              cells: ['előbb gazdaság, aztán politika', 'gazdasági és politikai reform együtt'],
            },
            {
              label: 'Bécshez való viszony',
              cells: ['együttműködés az udvarral', 'nagyobb önállóság, szembenállás is'],
            },
            {
              label: 'Jobbágykérdés',
              cells: [
                'önkéntes örökváltság, az ősiség eltörlése',
                'kötelező örökváltság állami kárpótlással',
              ],
            },
            {
              label: 'Kire épít?',
              cells: ['a felvilágosult arisztokráciára', 'a köznemességre és a közvéleményre'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Széchenyi István, „a legnagyobb magyar”' },
        {
          kind: 'text',
          text: 'Főnemesi családból származott, sokat utazott Nyugat-Európában, különösen Angliában. Az 1825–27-es országgyűlésen birtokai egyévi jövedelmét ajánlotta fel a **Magyar Tudós Társaság** (a későbbi Akadémia) megalapítására.',
        },
        {
          kind: 'text',
          text: 'A ***Hitel*** (1830) fő gondolata: a magyar földbirtokos azért szegény, mert nem kap hitelt, és azért nem kap, mert az **ősiség** miatt a földje nem lehet biztosíték. Ezért el kell törölni az ősiséget, a robotmunka helyett pedig bérmunkára van szükség, mert az hatékonyabb. A *Világ* (1831) és a *Stádium* (1833) folytatta a programot.',
        },
        {
          kind: 'keypoints',
          title: 'Széchenyi gyakorlati alkotásai',
          items: [
            'a Pest és Buda közötti **Lánchíd** (építése 1839-től)',
            'a Duna-gőzhajózás és az Al-Duna szabályozása, a Tisza szabályozásának megindítása',
            'Nemzeti Kaszinó (1827), lóversenyek, a selyemhernyó-tenyésztés és a hengermalom támogatása',
          ],
        },
        { kind: 'heading', text: 'Kossuth Lajos és a nyilvánosság' },
        {
          kind: 'text',
          text: 'Köznemesi családból származó ügyvéd volt. Az 1832–36-os országgyűlésről kéziratos **Országgyűlési Tudósítások**at szerkesztett, ezért elítélték és börtönbe zárták (1837–1840). Kiszabadulása után a reformellenzéki lap szerkesztője lett (1841–1844): vezércikkeiben az érdekegyesítést, a kötelező örökváltságot, a közteherviselést és a népképviseletet hirdette.',
        },
        {
          kind: 'text',
          text: 'A gazdaságban a hazai ipart akarta védeni: egy 1844-es egyesület tagjai vállalták, hogy csak hazai iparcikket vásárolnak. Kossuth Friedrich List német közgazdász nyomán a védővámokat tartotta szükségesnek.',
        },
        { kind: 'heading', text: 'A vita' },
        {
          kind: 'text',
          text: 'Széchenyi 1841-ben ***A Kelet népe*** című művében azzal vádolta Kossuthot, hogy izgatásával forradalomba sodorja az országot, felbőszíti az udvart és a nemzetiségeket. Kossuth a ***Felelet***-ben válaszolt: a reformok csak a közvélemény támogatásával vihetők végig. A reformellenzék nagy része Kossuth mellé állt.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Wesselényi Miklós',
              text: 'Erdélyi főnemes, Széchenyi barátja, a reformellenzék egyik vezetője; *Balítéletekről* (1833) című műve a jobbágykérdés megoldását sürgette.',
            },
            {
              name: 'Kölcsey Ferenc',
              text: 'Költő és politikus, a *Himnusz* szerzője (1823); országgyűlési követként a jobbágyfelszabadításért és a magyar nyelvért küzdött.',
            },
            {
              name: 'Deák Ferenc',
              text: 'Zala megyei követ, „a haza bölcse”; a jogi alapokat kereső, mérsékelt reformer, az 1847-es Ellenzéki nyilatkozat fogalmazója.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A vita nemcsak taktikai volt. Széchenyi a birodalmon belüli fokozatos fejlődést tartotta biztonságosnak, és attól tartott, hogy a gyors magyarosítás és a politikai radikalizmus a nemzetiségeket és az udvart is szembefordítja a magyarsággal. 1848–49 eseményei bizonyos értelemben mindkettőjüket igazolták: Kossuth programja megvalósult, de a nemzetiségi és az udvarral szembeni konfliktus, amitől Széchenyi félt, be is következett.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Idézet alapján: Széchenyitől vagy Kossuthtól származik? (Hitel-részlet, vezércikk.)',
            'Táblázat: a két program összehasonlítása szempontok szerint.',
            'Esszé: Széchenyi és Kossuth reformprogramjának összevetése.',
          ],
        },
        {
          kind: 'tip',
          text: 'Esszében szempontonként hasonlítsd össze őket (tempó, sorrend, Bécs, jobbágykérdés, társadalmi bázis), ne egymás után írd le a két életrajzot. A források állításait mindig kösd egy konkrét szemponthoz.',
        },
        {
          kind: 'warning',
          text: 'Ne mondd, hogy Széchenyi ellenezte a reformokat: ő is reformer volt, csak más tempóban és módszerrel.',
        },
      ],
      topicMatch: ['kossuth', 'széchenyi', 'reformkor'],
      cards: { subject: 'tortenelem', deck: 'szemelyek', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik Széchenyi műve, amely a hitelhiányt és az ősiséget elemzi?',
          options: ['Felelet', 'Hitel', 'Balítéletekről', 'Kelet népe'],
          answer: 1,
          explanation: 'A Hitel (1830). A Felelet Kossuthé, a Balítéletekről Wesselényié.',
        },
        {
          question: 'Melyik állítás illik Kossuth programjára?',
          options: [
            'Előbb gazdasági, csak utána politikai reformok.',
            'Kötelező örökváltság állami kárpótlással.',
            'Szoros együttműködés a bécsi udvarral.',
            'A reformokat csak az arisztokrácia vigye végig.',
          ],
          answer: 1,
          explanation: 'Kossuth a kötelező örökváltságot és az érdekegyesítést hirdette.',
        },
        {
          question: 'Mi volt a Védegylet célja?',
          options: [
            'A jobbágyok fegyveres védelme.',
            'A hazai ipar támogatása hazai termékek vásárlásával.',
            'A cenzúra elleni tiltakozás.',
            'Az Akadémia anyagi támogatása.',
          ],
          answer: 1,
          explanation:
            'A Védegylet (1844) tagjai csak hazai iparcikket vettek, hogy védjék a magyar ipart.',
          emelt: true,
        },
        {
          question: 'Melyik műben támadta Széchenyi Kossuthot 1841-ben?',
          options: ['A Kelet népe', 'Stádium', 'Világ', 'Felelet'],
          answer: 0,
          explanation: 'A Kelet népe (1841); Kossuth a Felelet-ben válaszolt.',
        },
        {
          question: 'Ki szerkesztette a Pesti Hírlapot 1841 és 1844 között?',
          options: ['Kossuth Lajos', 'Petőfi Sándor', 'Deák Ferenc', 'Kölcsey Ferenc'],
          answer: 0,
          explanation: 'Kossuth Lajos; vezércikkei tették a lapot a reformellenzék fórumává.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Széchenyi István', url: wiki('Széchenyi István') },
        { label: 'Wikipédia: Kossuth Lajos', url: wiki('Kossuth Lajos') },
        { label: 'Wikipédia: Pesti Hírlap', url: wiki('Pesti Hírlap') },
      ],
    },
    {
      id: 'rendi-orszaggyules-megye',
      subject: 'tortenelem',
      unitId: 'reformkor-1848',
      title: 'A rendi országgyűlés és a megyerendszer a reformkorban',
      level: 'emelt',
      requirement: { emelt: 'A rendi országgyűlés és a megyerendszer a reformkorban' },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az országgyűlést a király hívta össze, **Pozsonyban** ülésezett, és **kétkamarás** volt: **felsőtábla** és **alsótábla**.',
            'A felsőtábla a főrendeké (főpapok, főnemesek, főispánok); az alsótáblán a **megyék követei** ültek.',
            'A követek **követutasítást** kaptak a megyétől, és vissza is hívhatták őket.',
            'A **vármegye** a nemesi önkormányzat központja volt: a **közgyűlés** döntött, az **alispán** vezette a közigazgatást, a **főispánt** a király nevezte ki.',
            'A reformkorban a megyei közgyűlések lettek a politikai viták fő színterei.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'alsó- és felsőtábla',
              text: 'A rendi országgyűlés két háza: az alsótáblán a megyék és városok követei, a felsőtáblán a főrendek ültek.',
            },
            {
              term: 'követutasítás',
              text: 'A megyei közgyűlés írásos utasítása arról, hogyan szavazzon a követ az országgyűlésen.',
            },
            {
              term: 'főispán',
              text: 'A megye élén álló, a király által kinevezett főnemes; a központi hatalom embere.',
            },
            {
              term: 'alispán',
              text: 'A megyei nemesség által választott tisztviselő, ő irányította a megye mindennapi igazgatását.',
            },
            {
              term: 'közgyűlés',
              text: 'A megye nemeseinek gyűlése: tisztújítás, követválasztás, követutasítás, a királyi rendeletek kihirdetése.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az országgyűlés működése' },
        {
          kind: 'text',
          text: 'A **felsőtábla** tagjai a főpapok, a főnemesek (bárók, grófok, hercegek) és a főispánok voltak, elnöke a **nádor** (1796 és 1847 között **József nádor**). Az **alsótáblán** minden megye két követet küldött; a szabad királyi városok és a káptalanok követei is itt ültek, de együttesen kevés szavazatuk volt. Az alsótábla elnöke a királyi személynök volt.',
        },
        {
          kind: 'text',
          text: 'Egy javaslat a két tábla közötti üzenetváltással vált törvénnyé, végül a királyi **szentesítéssel**. A felsőtábla többnyire a kormány álláspontját képviselte, ezért sok alsótáblai reformjavaslatot elakasztott.',
        },
        {
          kind: 'text',
          text: 'Az alsótábla tagjai az üléseket megelőzően kerületi üléseken vitatták meg a javaslatokat. Ezeket a fiatal joggyakornokok (**jurátusok**) is hallgatták, így terjedtek a reformeszmék.',
        },
        { kind: 'heading', text: 'A megye, a nemesi alkotmány bástyája' },
        {
          kind: 'text',
          text: 'A **vármegye** a köznemesség önkormányzata volt. A **közgyűlés** választotta a tisztviselőket (tisztújítás), a követeket, és megszabta a követutasítást. A megye a törvénytelennek tartott királyi rendeletet „félretehette”: ez volt a **sérelmi politika** és a passzív ellenállás eszköze.',
        },
        {
          kind: 'text',
          text: 'Mivel a követek utasítást kaptak, az országgyűlési többség a megyei közgyűléseken dőlt el. Ezért a reformellenzék a megyékben építette ki befolyását (például Deák Zalában, Kossuth Pest megyében), és a konzervatívok is itt próbáltak többséget szerezni.',
        },
        {
          kind: 'text',
          text: 'Az udvar 1845 után az **adminisztrátori rendszerrel** próbálta megtörni az ellenzéki megyéket: a főispán helyett kinevezett, a kormánynak engedelmes adminisztrátorok vezették a megyét. Ez éles tiltakozást váltott ki, és erősítette az ellenzéket.',
        },
        {
          kind: 'compare',
          title: 'Rendi és polgári képviselet',
          columns: ['Rendi országgyűlés (1848 előtt)', 'Népképviseleti országgyűlés (1848)'],
          rows: [
            {
              label: 'Ki választ?',
              cells: ['a nemesség (a megyékben)', 'a cenzusnak megfelelő férfiak'],
            },
            { label: 'Mit képvisel?', cells: ['rendeket', 'a választókerületek lakóit'] },
            { label: 'Helye', cells: ['Pozsony', 'Pest'] },
            { label: 'Gyakoriság', cells: ['a király hívja össze', 'évente ülésezik'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábra vagy szöveg alapján: melyik testület hogyan működött (ki elnököl, ki választ, ki szentesít)?',
            'Forrás: követutasítás vagy megyei közgyűlési határozat; mit mutat a megye szerepéről?',
            'Emelt esszé: a rendi intézmények szerepe a reformellenzék küzdelmében.',
          ],
        },
        {
          kind: 'tip',
          text: 'Az emelt szintű feladatokban az intézmények működésének okát is kérdezik: miért volt fontos a követutasítás (a megyei többség döntött az országgyűlésen), miért vezették be az adminisztrátorokat (az ellenzéki megyék megtörésére).',
        },
      ],
      topicMatch: ['reformkor', 'rendi gyűlés', 'ősiség'],
      quiz: [
        {
          question: 'Hol ülésezett a reformkori rendi országgyűlés?',
          options: ['Pesten', 'Budán', 'Pozsonyban', 'Bécsben'],
          answer: 2,
          explanation: 'Pozsonyban; 1848 után már Pesten ülésezett a népképviseleti országgyűlés.',
        },
        {
          question: 'Ki nevezte ki a főispánt?',
          options: ['a megyei közgyűlés', 'a király', 'a nádor', 'az alsótábla'],
          answer: 1,
          explanation: 'A főispánt a király nevezte ki, az alispánt a megyei nemesség választotta.',
        },
        {
          question: 'Mi volt a követutasítás?',
          options: [
            'A király levele az országgyűlésnek.',
            'A megye utasítása a követnek arról, hogyan szavazzon.',
            'A nádor elnöki rendelkezése.',
            'A felsőtábla határozata.',
          ],
          answer: 1,
          explanation:
            'A követ a megyei közgyűlés utasítása szerint szavazott, és visszahívható volt.',
        },
        {
          question: 'Mi volt az adminisztrátori rendszer célja (1845-től)?',
          options: [
            'Az ellenzéki megyék megtörése kormányhű vezetőkkel.',
            'A jobbágyok bevonása a megyei igazgatásba.',
            'A magyar nyelv bevezetése a megyékben.',
            'A városok képviseletének növelése.',
          ],
          answer: 0,
          explanation:
            'A kormány a főispánok helyére engedelmes adminisztrátorokat állított, hogy az ellenzéki megyéket megfékezze.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Rendi országgyűlés', url: wiki('Magyar országgyűlés rendi') },
        { label: 'Wikipédia: Vármegye', url: wiki('Vármegye') },
      ],
    },
    {
      id: 'pesti-forradalom',
      subject: 'tortenelem',
      unitId: 'reformkor-1848',
      title: 'A pesti forradalom és az áprilisi törvények',
      level: 'kozep',
      requirement: { kozep: 'A pesti forradalom és az áprilisi törvények' },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '1848 elején forradalmi hullám söpört végig Európán (február: Párizs, március 13.: Bécs, Metternich bukása).',
            '**1848. március 15.**: a pesti **márciusi ifjak** (Petőfi Sándor, Jókai Mór, Vasvári Pál, Irinyi József) vértelen forradalma; a **12 pont** és a *Nemzeti dal* cenzúra nélküli kinyomtatása.',
            'Március 17.: a király kinevezte **Batthyány Lajost** miniszterelnökké; megalakult az első felelős magyar kormány.',
            '**1848. április 11.**: V. Ferdinánd szentesítette az **áprilisi törvényeket**: ezek tették Magyarországot polgári alkotmányos monarchiává.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1848. február 22–24.',
              text: 'Forradalom Párizsban, a francia király elmenekül.',
            },
            {
              date: '1848. március 3.',
              text: 'Kossuth felirati javaslata Pozsonyban: alkotmányt a birodalomnak, felelős kormányt Magyarországnak.',
            },
            { date: '1848. március 13.', text: 'Forradalom Bécsben, Metternich lemond.' },
            {
              date: '1848. március 15.',
              text: 'Pesti forradalom: 12 pont, Nemzeti dal, Landerer nyomdája, Táncsics kiszabadítása.',
            },
            { date: '1848. március 17.', text: 'Batthyány Lajos miniszterelnöki kinevezése.' },
            { date: '1848. április 11.', text: 'Az áprilisi törvények szentesítése.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Március 15. menete' },
        {
          kind: 'text',
          text: 'A fiatal értelmiségiek a **Pilvax kávéházban** gyülekeztek. Reggel a Landerer és Heckenast nyomdában **cenzúra nélkül** kinyomtatták a 12 pontot és Petőfi *Nemzeti dal*át: ez volt a sajtószabadság első gyakorlati megvalósulása. Délután a Nemzeti Múzeum előtt népgyűlést tartottak, majd a tömeg Budára vonult, ahol a **Helytartótanács** elfogadta a követeléseket, és kiszabadították a börtönből **Táncsics Mihály**t.',
        },
        {
          kind: 'keypoints',
          title: 'A 12 pont ("Mit kíván a magyar nemzet")',
          items: [
            'sajtószabadság, a cenzúra eltörlése',
            'felelős minisztérium Buda-Pesten',
            'évenkénti országgyűlés Pesten',
            'törvény előtti egyenlőség polgári és vallási tekintetben',
            'nemzeti őrsereg',
            'közös teherviselés',
            'az úrbéri viszonyok megszüntetése',
            'esküdtszék, képviselet egyenlőség alapján',
            'nemzeti bank',
            'a katonaság esküdjön az alkotmányra, magyar katonát ne vigyenek külföldre',
            'a politikai foglyok szabadon bocsátása',
            'unió Erdéllyel',
          ],
        },
        { kind: 'heading', text: 'Az áprilisi törvények' },
        {
          kind: 'text',
          text: 'A pozsonyi utolsó rendi országgyűlés a forradalom hatására gyorsan elfogadta a reformellenzék programját. A 31 törvénycikk legfontosabb elemei:',
        },
        {
          kind: 'keypoints',
          items: [
            '**felelős magyar kormány** (minisztérium), amely az országgyűlésnek felelős',
            '**népképviseleti országgyűlés**, évente Pesten; választójog vagyoni vagy műveltségi **cenzus** alapján (a lakosság kb. 7–9%-a)',
            '**jobbágyfelszabadítás**: az úrbéri terhek megszűntek, a földesurakat az állam kártalanítja',
            '**közteherviselés**, az **ősiség** és az egyházi tized eltörlése',
            '**sajtószabadság** (sajtótörvény), nemzetőrség felállítása',
            'a bevett vallások egyenjogúsága, **unió Erdéllyel**',
          ],
        },
        {
          kind: 'people',
          items: [
            { name: 'Batthyány Lajos', text: 'miniszterelnök' },
            { name: 'Kossuth Lajos', text: 'pénzügyminiszter' },
            { name: 'Széchenyi István', text: 'közlekedési és közmunkaügyi miniszter' },
            { name: 'Deák Ferenc', text: 'igazságügy-miniszter' },
            { name: 'Eötvös József', text: 'vallás- és közoktatásügyi miniszter' },
          ],
        },
        {
          kind: 'warning',
          text: 'Nyitott kérdések maradtak: a hadügy és a pénzügy viszonya a birodalomhoz nem volt pontosan rendezve, a földnélküliek és a majorsági földeken élők nem kaptak földet, és a nemzetiségek kollektív jogait nem ismerték el. Ezek a kérdések 1848 nyarán konfliktusokhoz vezettek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az áprilisi törvények Magyarország és a birodalom viszonyát **perszonáluniós** jelleggel rendezték: közös uralkodó, de önálló magyar kormány, és a király személye körüli miniszter (Esterházy Pál) tartotta a kapcsolatot Béccsel. Az udvar ezt kényszerből fogadta el, és már 1848 nyarán a visszavonására törekedett.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A 12 pont egy pontja alapján: melyik áprilisi törvény valósította meg?',
            'Kép vagy szöveg: március 15. eseményei időrendben.',
            'Fogalmak: népképviselet, cenzus, felelős kormány, közteherviselés.',
            'Esszé: az áprilisi törvények és a polgári átalakulás (gyakran a kiegyezéssel összevetve).',
          ],
        },
        {
          kind: 'tip',
          text: 'Esszében érdemes a törvényeket csoportosítani: államszervezet (kormány, országgyűlés), társadalom (jobbágyfelszabadítás, közteherviselés, jogegyenlőség), szabadságjogok (sajtó, vallás). Így látszik, hogy a polgári átalakulás minden területét érintették.',
        },
      ],
      topicMatch: ['1848', 'áprilisi törvények'],
      cards: { subject: 'tortenelem', deck: 'evszamok', era: 'ujkor' },
      quiz: [
        {
          question: 'Mi volt a 12 pont első követelése?',
          options: [
            'Unió Erdéllyel',
            'Sajtószabadság, a cenzúra eltörlése',
            'Nemzeti bank',
            'Közös teherviselés',
          ],
          answer: 1,
          explanation:
            'Az első pont a sajtószabadság volt; március 15-én azonnal meg is valósították.',
        },
        {
          question: 'Ki lett az első felelős magyar kormány miniszterelnöke?',
          options: ['Kossuth Lajos', 'Batthyány Lajos', 'Széchenyi István', 'Deák Ferenc'],
          answer: 1,
          explanation: 'Batthyány Lajost 1848. március 17-én nevezte ki a király.',
        },
        {
          question: 'Melyik NEM volt az áprilisi törvények része?',
          options: [
            'jobbágyfelszabadítás állami kártalanítással',
            'népképviseleti országgyűlés',
            'általános választójog minden felnőttnek',
            'közteherviselés',
          ],
          answer: 2,
          explanation:
            'A választójog cenzushoz (vagyon vagy műveltség) kötött volt; csak a lakosság kb. 7–9%-a szavazhatott.',
        },
        {
          question: 'Mikor szentesítette a király az áprilisi törvényeket?',
          options: [
            '1848. március 15.',
            '1848. március 17.',
            '1848. április 11.',
            '1849. április 14.',
          ],
          answer: 2,
          explanation: '1848. április 11. A 1849. április 14. a Függetlenségi nyilatkozat napja.',
        },
        {
          question: 'Kik nem kaptak földet a jobbágyfelszabadítással?',
          options: ['a telkes jobbágyok', 'a zsellérek', 'a nemesek', 'a városi polgárok'],
          answer: 1,
          explanation: 'A zsellérek és a majorsági földeken dolgozók föld nélkül maradtak.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Áprilisi törvények', url: wiki('Áprilisi törvények') },
        { label: 'Wikipédia: Mit kíván a magyar nemzet', url: wiki('Mit kíván a magyar nemzet') },
      ],
    },
    {
      id: 'szabadsagharc-esemenyei',
      subject: 'tortenelem',
      unitId: 'reformkor-1848',
      title: 'A szabadságharc főbb eseményei',
      level: 'kozep',
      requirement: {
        kozep:
          'A szabadságharc főbb eseményei: harc a dinasztiával és a nemzetiségekkel, tavaszi hadjárat, Függetlenségi nyilatkozat, a szabadságharc leverése',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '1848 nyarán a bécsi udvar a nemzetiségek (szerbek, horvátok, románok) mozgalmait is felhasználva fordult szembe az áprilisi törvényekkel.',
            'Szeptemberben a horvát bán támadott; **1848. szeptember 29.** a **pákozdi csata** az új honvédsereg első sikere.',
            'Télen a császári sereg elfoglalta Pestet, a kormány Debrecenbe költözött.',
            '**1849 tavasza**: a **tavaszi hadjárat** győzelmei (Görgei Artúr), közben **április 14.**: **Függetlenségi nyilatkozat**, május 21.: Buda visszavétele.',
            'Az orosz beavatkozás után **1849. augusztus 13.** a **világosi fegyverletétel**; **október 6.** az aradi vértanúk és Batthyány kivégzése.',
          ],
        },
        {
          kind: 'map',
          title: 'A szabadságharc fontos helyszínei',
          places: [
            { name: 'Pest-Buda', lat: 47.5, lon: 19.04, note: 'forradalom, Buda visszavétele' },
            { name: 'Pákozd', lat: 47.22, lon: 18.55, note: '1848. szeptember 29.' },
            { name: 'Isaszeg', lat: 47.53, lon: 19.4, note: '1849. április 6.' },
            { name: 'Debrecen', lat: 47.53, lon: 21.63, note: 'Függetlenségi nyilatkozat' },
            { name: 'Komárom', lat: 47.74, lon: 18.12, note: 'erőd, felmentés 1849. április' },
            { name: 'Világos', lat: 46.26, lon: 21.64, note: '1849. augusztus 13.' },
            { name: 'Arad', lat: 46.18, lon: 21.31, note: '1849. október 6.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az udvar és a nemzetiségek (1848 nyara)' },
        {
          kind: 'text',
          text: 'A júliusban Pesten összeült **népképviseleti országgyűlés** Kossuth javaslatára 200 ezer újonc kiállítását és 42 millió forint hitelt szavazott meg a haza védelmére. Közben a délvidéki **szerbek** fegyveres felkelésbe kezdtek, a horvát bán pedig nyíltan szembefordult a magyar kormánnyal. Az udvar egyre nyíltabban támogatta őket.',
        },
        { kind: 'heading', text: 'Önvédelmi harc (1848 ősze és tele)' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1848. szeptember 11.',
              text: 'A horvát bán átlépi a Drávát, megtámadja Magyarországot.',
            },
            {
              date: '1848. szeptember',
              text: 'A Batthyány-kormány lemond; a honvédelmet az **Országos Honvédelmi Bizottmány** (OHB) veszi át, Kossuth vezetésével.',
              emelt: true,
            },
            {
              date: '1848. szeptember 29.',
              text: 'Pákozdi csata: a magyar sereg megállítja a horvát bánt.',
            },
            {
              date: '1848. október 30.',
              text: 'Schwechati vereség: a magyar sereg nem tudja megsegíteni a forradalmi Bécset.',
            },
            {
              date: '1848. december 2.',
              text: 'V. Ferdinánd lemond, trónra lép **Ferenc József**; az országgyűlés nem ismeri el, mert nem koronázták meg.',
            },
            {
              date: '1849. január',
              text: 'A császári sereg elfoglalja Pest-Budát; a kormány és az országgyűlés Debrecenbe költözik.',
            },
            {
              date: '1849. március 4.',
              text: 'Az **olmützi alkotmány** egységes birodalomba olvasztja Magyarországot.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          text: 'Erdélyben **Bem József** lengyel tábornok vezetésével a honvédek 1849 tavaszára szinte az egész tartományt felszabadították.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A honvédsereg ágyúit többek között a székely **Gábor Áron** öntötte.',
        },
        { kind: 'heading', text: 'A tavaszi hadjárat és a Függetlenségi nyilatkozat' },
        {
          kind: 'text',
          text: 'A **tavaszi hadjárat** (1849. április–május) Görgei Artúr vezetésével sorozatos győzelmeket hozott: Hatvan, Tápióbicske, **Isaszeg** (április 6.), Vác, Nagysalló, majd **Komárom** felmentése. **1849. május 21-én** a honvédek visszafoglalták **Buda** várát.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Damjanich János** hadteste kiemelkedően harcolt.',
        },
        {
          kind: 'text',
          text: '**1849. április 14-én** Debrecenben az országgyűlés kimondta a **Függetlenségi nyilatkozatot**: a Habsburg-Lotaringiai házat trónfosztottnak nyilvánította, Kossuthot kormányzó-elnökké választotta. A trónfosztás válasz volt a birodalmi központosításra, de megosztotta a vezetőket: Görgei és a mérsékeltek politikailag hibásnak tartották.',
        },
        { kind: 'heading', text: 'A szabadságharc leverése' },
        {
          kind: 'text',
          text: 'Ferenc József orosz segítséget kért; 1849 nyarán mintegy 200 ezer orosz katona vonult be, az osztrák sereget pedig **Haynau** vezette. A túlerővel szemben a honvédsereg vereségeket szenvedett (Segesvár, ahol Petőfi eltűnt; Temesvár). Kossuth augusztus 11-én lemondott és átadta a hatalmat Görgeinek, aki **1849. augusztus 13-án Világosnál** letette a fegyvert az orosz csapatok előtt. **Komárom** vára **Klapka György** vezetésével október elejéig kitartott, és szabad elvonulást harcolt ki.',
        },
        {
          kind: 'text',
          text: '**1849. október 6-án** Aradon kivégezték a honvédsereg 13 tábornokát (az **aradi vértanúkat**), Pesten pedig **Batthyány Lajos** volt miniszterelnököt.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: csaták helyszíne és időrendje (Pákozd, Isaszeg, Buda, Világos, Arad).',
            'Évszámok sorba rendezése: tavaszi hadjárat, Függetlenségi nyilatkozat, világosi fegyverletétel.',
            'Forrás: a Függetlenségi nyilatkozat részlete, Kossuth vagy Görgei szövege.',
            'Esszé: a szabadságharc katonai eseményei és politikai fordulópontjai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Függetlenségi nyilatkozatot Pestre tenni. Debrecenben mondták ki, a református nagytemplomban, 1849. április 14-én.',
        },
        {
          kind: 'tip',
          text: 'Rendezd a szabadságharcot szakaszokra: 1) önvédelmi harc (1848 ősz), 2) téli visszavonulás, 3) tavaszi hadjárat és függetlenség, 4) orosz beavatkozás és bukás. Esszében ez a szerkezet külön pontot ér.',
        },
      ],
      topicMatch: ['1848', '=szabadságharc'],
      cards: { subject: 'tortenelem', deck: 'topografia', era: 'ujkor' },
      quiz: [
        {
          question: 'Hol mondták ki a Függetlenségi nyilatkozatot?',
          options: ['Pesten', 'Pozsonyban', 'Debrecenben', 'Szegeden'],
          answer: 2,
          explanation: 'Debrecenben, 1849. április 14-én.',
        },
        {
          question: 'Melyik csata volt a honvédsereg első nagy sikere 1848 őszén?',
          options: ['Isaszeg', 'Pákozd', 'Schwechat', 'Kápolna'],
          answer: 1,
          explanation:
            'Pákozd (1848. szeptember 29.): megállították a horvát bánt. Schwechat és Kápolna vereség volt.',
        },
        {
          question: 'Ki vezette a tavaszi hadjáratot?',
          options: ['Bem József', 'Görgei Artúr', 'Klapka György', 'Kossuth Lajos'],
          answer: 1,
          explanation: 'Görgei Artúr; Bem az erdélyi hadjáratot vezette.',
        },
        {
          question: 'Hány tábornokot végeztek ki Aradon 1849. október 6-án?',
          options: ['7', '10', '13', '15'],
          answer: 2,
          explanation: 'Tizenhárom tábornokot, ők az aradi vértanúk.',
        },
        {
          question: 'Mi volt az olmützi alkotmány lényege?',
          options: [
            'Magyarország függetlenségét ismerte el.',
            'Egységes birodalomba olvasztotta Magyarországot.',
            'Bevezette az általános választójogot.',
            'Kiegyezést ajánlott a magyaroknak.',
          ],
          answer: 1,
          explanation:
            'Az 1849. március 4-i olmützi alkotmány megszüntette Magyarország különállását; erre válasz volt a trónfosztás.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: 1848–49-es forradalom és szabadságharc',
          url: wiki('1848–49-es forradalom és szabadságharc'),
        },
        { label: 'Wikipédia: Tavaszi hadjárat', url: wiki('Tavaszi hadjárat') },
        { label: 'Wikipédia: Aradi vértanúk', url: wiki('Aradi vértanúk') },
      ],
    },
    {
      id: 'nemzetisegek-megtorlas',
      subject: 'tortenelem',
      unitId: 'reformkor-1848',
      title: 'A nemzetiségek a szabadságharcban és a megtorlás',
      level: 'emelt',
      requirement: {
        emelt:
          'A nemzetiségek és a kisebbségek (németek, szlávok és zsidók) részvételének bemutatása a szabadságharcban és az azt követő megtorlás során',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyarság a Magyar Királyság lakosságának kevesebb mint felét adta; a nemzetiségek nyelvi és területi jogokat követeltek.',
            'Az áprilisi törvények az egyéni jogegyenlőséget adták meg, a **nemzetiségek közösségi jogait nem**: a **politikai nemzet** egységét hirdették.',
            'A **szerbek** és **horvátok** fegyverrel fordultak szembe a magyar kormánnyal, a **románok** Erdélyben az unió ellen léptek fel, a **szlovák** vezetők egy része az udvar oldalára állt.',
            'Sok **német** polgár és **zsidó** a magyar ügy mellé állt; a szegedi országgyűlés 1849. július 28-án elfogadta a **nemzetiségi törvényt** és a **zsidó emancipációt**.',
            'A megtorlás (Haynau) nemzetiségtől függetlenül sújtotta a honvédeket: az aradi vértanúk között német, osztrák, horvát, szerb és örmény származású tisztek is voltak.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'politikai nemzet',
              text: 'Az ország minden polgára egyetlen (magyar) nemzethez tartozik, nyelvétől függetlenül.',
            },
            {
              term: 'nemzetiség',
              text: 'Az országban élő, a többségtől eltérő nyelvű és kultúrájú közösség.',
            },
            {
              term: 'emancipáció',
              text: 'Egy hátrányos helyzetű csoport jogegyenlőségének kimondása (itt: a zsidóságé).',
            },
            {
              term: 'emigráció',
              text: 'Politikai okokból külföldre menekülés; 1849 után Kossuth és sok honvédtiszt emigrált.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A nemzetiségek követelései 1848-ban' },
        {
          kind: 'keypoints',
          items: [
            '**Szerbek**: a karlócai gyűlés (1848 május) **Szerb Vajdaság** létrehozását követelte; a délvidéken nyáron fegyveres harc kezdődött.',
            '**Horvátok**: Jelačić bán vezetésével elutasították a magyar kormány fennhatóságát; szeptemberben Horvátország felől indult a támadás.',
            '**Románok**: a balázsfalvi gyűlés (1848 május) nemzeti elismerést kért és tiltakozott az **unió** ellen; Erdélyben polgárháborús helyzet alakult ki kölcsönös vérengzésekkel.',
            '**Szlovákok**: a liptószentmiklósi kérvény (1848 május) nyelvi és politikai jogokat kért; a szlovák nemzeti vezetők egy része önkéntes csapatokkal az udvart támogatta.',
          ],
        },
        {
          kind: 'text',
          text: 'Az udvar kihasználta az ellentéteket: a nemzetiségek egy része abban bízott, hogy a császár hűségükért autonómiát ad. A szabadságharc után azonban nem kaptak külön jogokat: a neoabszolutizmus mindenkit egyformán központosított hatalom alá vetett. (Ezt a kortársak úgy foglalták össze: amit a magyarok büntetésül kaptak, a nemzetiségek jutalmul.)',
        },
        { kind: 'heading', text: 'Akik a magyar ügy mellé álltak' },
        {
          kind: 'text',
          text: 'A városi **német** polgárság nagy része támogatta a forradalmat; sok német ajkú tiszt harcolt a honvédseregben. Az erdélyi **szászok** viszont többnyire a császár mellé álltak. A **zsidóság** soraiból sokan honvédnek álltak, és pénzzel is támogatták a szabadságharcot. A szabadságharcot külföldiek is segítették: lengyel tábornokok (Bem József, Dembiński Henrik), olasz és német önkéntes légiók.',
        },
        {
          kind: 'text',
          text: 'A háború végén a magyar vezetés változtatott a nemzetiségi politikán: **1849. július 28-án Szegeden** az országgyűlés elfogadta a **nemzetiségi törvényt** (szabad nyelvhasználat a helyi közigazgatásban, az oktatásban és az egyházban) és a **zsidók egyenjogúsításáról** szóló törvényt. Megelőzte ezt a román vezetőkkel folytatott tárgyalás (Kossuth és Nicolae Bălcescu megbékélési terve), de a fordulat túl későn jött.',
        },
        { kind: 'heading', text: 'A megtorlás' },
        {
          kind: 'text',
          text: '**Haynau** teljhatalommal irányította a megtorlást. **1849. október 6-án** Aradon kivégezték a 13 honvédtábornokot, Pesten Batthyány Lajost. Összesen több mint száz embert végeztek ki, sokakat bebörtönöztek, a honvédek tízezreit pedig büntetésből a császári hadseregbe sorozták. Kossuth és sok vezető **emigrációba** kényszerült (először az Oszmán Birodalomba).',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Az aradi vértanúk',
              text: 'Aulich Lajos, Damjanich János, Dessewffy Arisztid, Kiss Ernő, Knezić Károly, Lahner György, Lázár Vilmos, Leiningen-Westerburg Károly, Nagysándor József, Poeltenberg Ernő, Schweidel József, Török Ignác, Vécsey Károly.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A vértanúk származása is jelzi, hogy a szabadságharc nem csak etnikai magyarok ügye volt: Damjanich szerb, Knezić horvát családból származott, Leiningen-Westerburg német gróf, Poeltenberg osztrák, Lázár Vilmos örmény eredetű volt.',
        },
        {
          kind: 'text',
          text: 'A megtorlás a kisebbségeket is sújtotta: a zsidó hitközségekre kollektív hadisarcot vetettek ki a szabadságharc támogatásáért.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: nemzetiségi petíció (karlócai, balázsfalvi, liptószentmiklósi), mit követel, melyik nemzetiség?',
            'Statisztika: az ország nemzetiségi összetétele 1848 körül.',
            'Emelt esszé: a nemzetiségek és kisebbségek szerepe a szabadságharcban és a megtorlásban.',
          ],
        },
        {
          kind: 'tip',
          text: 'Esszében mutasd be a két oldalt: a szembeforduló nemzetiségek követeléseit és okait (a politikai nemzet fogalma, az unió), valamint a magyar ügyet támogató csoportokat (németek, zsidók, külföldiek). A szegedi nemzetiségi törvénnyel mutathatod meg a változást.',
        },
        {
          kind: 'warning',
          text: 'Ne általánosíts: egy nemzetiségen belül is voltak eltérő magatartások (például szerb származású honvédtisztek is harcoltak a magyar oldalon).',
        },
      ],
      topicMatch: ['1848–49', '=szabadságharc'],
      quiz: [
        {
          question: 'Mi volt a szerbek fő követelése 1848-ban?',
          options: [
            'Unió Erdéllyel',
            'Szerb Vajdaság létrehozása',
            'A zsidók emancipációja',
            'A jobbágyfelszabadítás visszavonása',
          ],
          answer: 1,
          explanation: 'A karlócai gyűlés Szerb Vajdaságot követelt.',
        },
        {
          question: 'Mikor és hol fogadták el a nemzetiségi törvényt?',
          options: [
            '1848. április 11., Pozsony',
            '1849. április 14., Debrecen',
            '1849. július 28., Szeged',
            '1849. október 6., Arad',
          ],
          answer: 2,
          explanation: 'Szegeden, 1849. július 28-án, a zsidó emancipációs törvénnyel együtt.',
        },
        {
          question: 'Melyik állítás igaz az áprilisi törvényekre?',
          options: [
            'Területi autonómiát adtak a nemzetiségeknek.',
            'Az egyéni jogegyenlőséget mondták ki, közösségi jogokat nem.',
            'Megtiltották a nemzetiségi nyelvek használatát.',
            'Külön országgyűlést adtak a románoknak.',
          ],
          answer: 1,
          explanation:
            'A politikai nemzet elve szerint minden polgár egyenlő, de a nemzetiségeket nem ismerték el közösségként.',
        },
        {
          question: 'Ki irányította a megtorlást 1849-ben?',
          options: ['Windisch-Grätz', 'Haynau', 'Jelačić', 'Metternich'],
          answer: 1,
          explanation: 'Julius Haynau táborszernagy, teljhatalommal.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Nemzetiségi törvény (1849)',
          url: wiki('1849 nemzetiségi törvény Szeged'),
        },
        { label: 'Wikipédia: Aradi vértanúk', url: wiki('Aradi vértanúk') },
      ],
    },
  ],
};

export default unit;
