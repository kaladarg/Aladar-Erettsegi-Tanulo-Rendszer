import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Mikszáth Kálmán életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'mikszath',
  subject: 'magyar',
  order: 56,
  title: 'Mikszáth Kálmán életműve',
  requirementRef: 'Irodalom 1. Életművek: Mikszáth Kálmán',
  intro:
    'A magyar prózairodalom nagy mesélője: az anekdotikus előadásmód, a palóc novellák, a Szent Péter esernyője és a dzsentri világot ábrázoló regények. Életút, főbb művek, értelmezési szempontok és a vizsgán várható feladatok.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 1. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'mikszath-eletut-anekdotikus-elbeszeles',
      subject: 'magyar',
      unitId: 'mikszath',
      title: 'Mikszáth életútja és az anekdotikus elbeszélés',
      level: 'kozep',
      requirement: {
        kozep:
          'Az életmű néhány jellemzője keretében egy-három epikai alkotás bemutatása; a művek elhelyezése az életműben és a korszakban.',
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság, regionális kötődések; a pályakép főbb jellemzői; kötetek, témák, motívumok.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Mikszáth Kálmán** (1847–1910) a magyar realista próza egyik legnagyobb alakja, **novellista, regényíró és újságíró**.',
            '**Szklabonyán** (Nógrád vármegye, a Palócföld) született; gyerekkora és a vidéki világ emléke egész életművét meghatározza.',
            'Pályája elején **újságíró** volt, később Pesten élt, és **országgyűlési képviselőként** is ismerte a közéletet.',
            'Jellegzetes műfaja az **anekdotikus elbeszélés**: a mesélő bizalmas hangon, humorral és iróniával, kitérőkkel és csattanóval ad elő történeteket.',
            'Első nagy sikerei a novelláskötetei: *Tót atyafiak* (1881), *A jó palócok* (1882).',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1847', text: 'Szklabonyán született (ma Mikszáthfalva, Szlovákia).' },
            {
              date: '1857–1863',
              text: 'Rimaszombati tanulóévek; a középiskola végét Selmecbányán végezte.',
            },
            {
              date: '1870-es évek',
              text: 'Jogi tanulmányok Pesten (diplomát nem szerzett), majd vidéki újságírás.',
            },
            { date: '1881', text: '*Tót atyafiak*.' },
            { date: '1882', text: '*A jó palócok*: az első nagy elismerés.' },
            { date: '1887-től', text: 'Országgyűlési képviselő haláláig.' },
            { date: '1895', text: '*Szent Péter esernyője*.' },
            { date: '1908', text: '*A Noszty fiú esete Tóth Marival*.' },
            { date: '1910', text: 'Budapesten halt meg (május 28.).' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút' },
        {
          kind: 'text',
          text: 'Mikszáth **1847. január 16-án** született Szklabonyán, a Nógrád vármegyei **Palócföldön**. Tanulmányait Rimaszombatban és Selmecbányán végezte, Pesten jogot hallgatott, de nem fejezte be. Újságíróként kezdett, majd a pesti lapoknál (például a *Pesti Hírlap*ban és a *Budapesti Hírlap*ban) a kor egyik legnépszerűbb humoristája lett. **1887-től** haláláig országgyűlési képviselő volt, így a politika és a megyei közélet világát belülről ismerte. Ez a tapasztalat a regényeiben is kamatozik.',
        },
        {
          kind: 'text',
          text: 'A szülőföld és a gyerekkor emléke nem tűnik el a későbbi művekből: a **felvidéki és palóc világ** a novellák színtere, és a nagy regények (például a *Szent Péter esernyője*) is a Felvidéken játszódnak. A kitalált palóc falunevek között **Bodok** a szerző szülőfaluját, Szklabonyát idézi.',
        },
        { kind: 'heading', text: 'Mi az anekdotikus elbeszélés?' },
        {
          kind: 'text',
          text: 'Az **anekdota** rövid, csattanóval végződő, mulatságos történet, amelyet gyakran valós személyhez kötnek. Mikszáthnál az anekdota nemcsak egy-egy epizód, hanem **az egész elbeszélésmód alapja**: a mesélő úgy beszél, mintha a hallgatóság előtt szóban adná elő a történetet.',
        },
        {
          kind: 'keypoints',
          title: 'Az anekdotikus előadásmód jellemzői',
          items: [
            '**mesélő hang**: bizalmas, közvetlen, a szóbeli elbeszélést idézi; az elbeszélő „beszélget” az olvasóval',
            '**kitérők, közbeszúrt történetek**: a cselekmény gyakran elágazik, majd visszatér a fő szálhoz',
            '**humor és irónia**: a mesélő mosolyog a szereplőkön, de gyakran megértéssel is',
            '**csattanó**: a történetek váratlan fordulattal vagy találó megjegyzéssel zárulnak',
            '**hasonlatok, szóbeli fordulatok**: élénk, gazdag nyelv',
            '**kisvilág**: a falu, a megye, a város kicsi, zárt közössége áll a középpontban',
          ],
        },
        {
          kind: 'compare',
          title: 'Mikszáth és Jókai mesélése',
          columns: ['Jókai Mór', 'Mikszáth Kálmán'],
          rows: [
            {
              label: 'Szemlélet',
              cells: [
                'romantikus: eszmények, hősök, a jó győzelme',
                'realista, ironikus: a hétköznapi emberek gyengeségei',
              ],
            },
            {
              label: 'Hősök',
              cells: [
                'nagy jellemek, kivételes sorsok',
                'átlagos, esendő emberek, falusi és megyei típusok',
              ],
            },
            {
              label: 'Hang',
              cells: ['ünnepélyes, színes, lelkesítő', 'bizalmas, humoros, fanyar'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a pályaképhez hozzátartozik, hogy Mikszáth **Jókai Mór** pályatársa és barátja volt, ugyanakkor a romantikus mesélő hagyományát átformálta. A korszakok szerinti besorolás nem egyszerű: a kritika gyakran a **romantikából a realizmusba átvezető** írónak tekinti. Érdemes a pályát művek szerint is felosztani: a **novellák** (*Tót atyafiak*, *A jó palócok*), a nagy **regények** (*Szent Péter esernyője*, *A Noszty fiú esete Tóth Marival*), valamint a politikai szatírák és a történelmi tárgyú művek (például az *Új Zrínyiász*).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: „Mikszáth Kálmán életműve” egy-három epikai mű bemutatásával (például egy novella és egy regény).',
            'Irodalmi feladatlap: műfaj (novella, regény), korstílus (realizmus), műismeret, a szerző és a mű összepárosítása.',
            'Műértelmező szövegalkotás: egy Mikszáth-novella vagy regényrészlet értelmezése, vagy esszé az elbeszélő szerepéről, a humorról és az iróniáról.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mesélj el egy regényt a szóbelin vagy az írásbelin! Az értékelés az **értelmezést** keresi: ki az elbeszélő, mi a mű témája, mire szolgál az irónia, hogyan épül fel a történet.',
        },
        {
          kind: 'tip',
          text: 'Egy Mikszáth-műnél mindig kérdezd meg magadtól: **ki mesél, milyen hangon, és mire használja az iróniát?** Ez a három szempont szinte minden Mikszáth-feladatban kamatoztatható.',
        },
      ],
      topicMatch: ['mikszáth'],
      cards: { subject: 'magyar', era: 'realizmus' },
      quiz: [
        {
          question: 'Hol született Mikszáth Kálmán?',
          options: ['Szklabonyán', 'Rimaszombatban', 'Pesten', 'Kiskőrösön'],
          answer: 0,
          explanation:
            'Szklabonyán, a Nógrád vármegyei Palócföldön született 1847-ben; Rimaszombat a tanulóévek, Kiskőrös Petőfi szülőhelye.',
        },
        {
          question: 'Melyik az anekdota meghatározása?',
          options: [
            'Hosszú, filozofikus fejtegetés.',
            'Rövid, csattanóval végződő, mulatságos történet.',
            'Verses népmese.',
            'Tragikus végű színdarab.',
          ],
          answer: 1,
          explanation:
            'Az anekdota rövid, csattanós, mulatságos történet; Mikszáth prózájának alapeleme.',
        },
        {
          question: 'Melyik kötet jelent meg 1882-ben?',
          options: ['Tót atyafiak', 'A jó palócok', 'Szent Péter esernyője', 'Beszterce ostroma'],
          answer: 1,
          explanation:
            'A jó palócok 1882-es; a Tót atyafiak egy évvel korábbi (1881), a *Szent Péter esernyője* 1895-ös.',
        },
        {
          question: 'Melyik jellemző illik Mikszáth elbeszélőjére?',
          options: [
            'Személytelen, tárgyilagos, soha nem szól az olvasóhoz.',
            'Bizalmas, szóbeli hangú, ironikus mesélő.',
            'Pátoszos, hősöket magasztaló próféta.',
            'Csak párbeszédekből álló drámai hang.',
          ],
          answer: 1,
          explanation:
            'Az anekdotikus mesélő közvetlenül, humorral és iróniával szól, mintha a hallgatóság előtt mesélne.',
        },
        {
          question: 'Miben különbözik Mikszáth szemlélete Jókaitól?',
          options: [
            'Mikszáth ironikusabb és realistább, a hétköznapi emberek gyengeségeit mutatja.',
            'Mikszáth romantikus eszményeket hirdet.',
            'Mikszáth csak verseket írt.',
            'Nincs különbség.',
          ],
          answer: 0,
          explanation:
            'Jókai a romantika nagy mesélője, Mikszáth a fanyar iróniával és realista látásmóddal dolgozó utódja.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Mikszáth Kálmán', url: wiki('Mikszáth Kálmán') },
        { label: 'Wikipédia: Anekdota', url: wiki('Anekdota irodalom') },
        { label: 'Wikipédia: Palócföld', url: wiki('Palócföld') },
      ],
    },
    {
      id: 'mikszath-palocok-novellak',
      subject: 'magyar',
      unitId: 'mikszath',
      title: 'Novellák: A jó palócok és a Tót atyafiak',
      level: 'kozep',
      requirement: {
        kozep:
          'Néhány epikai alkotás (novella) bemutatása, értelmezése: téma, műfaj, kompozíció, jellemző motívumok, jelentésrétegek; műrészletek értelmezése; a művekben felvetett kérdések etikai, lélektani, társadalmi vonatkozásai.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a művek hatása, fogadtatása egy-két példa alapján; különféle kritikák, interpretációk.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **Tót atyafiak** (1881) és *A jó palócok* (1882) Mikszáth első nagy novelláskötetei.',
            'Színterük a **felvidéki, palóc falu**; szereplőik falusi emberek: szerelmesek, kapzsi öregek, babonás asszonyok.',
            'A novellák témái: **szerelem, hűség és hűtlenség, babona, sors**; több közülük tragikus végű.',
            '*A jó palócok* 15 kis történetet tartalmaz, köztük a **Bede Anna tartozása** és *A néhai bárány* című novellákat.',
            'A mesélő megértéssel, melegséggel szól a falusi emberekről, és komolyan veszi a népi hiedelmeket.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'novella',
              text: 'Rövid epikai műfaj, egyetlen sűrített történettel vagy fordulóponttal, kevés szereplővel.',
            },
            {
              term: 'palóc',
              text: 'A Felvidék nyugat–keleti sávjában élő magyar néprajzi csoport; Mikszáth novelláinak világa.',
            },
            {
              term: 'balladás hangulat',
              text: 'Tömör, sejtelmes előadás, tragikus kimenet és titokzatos háttér (a népballadára emlékeztet).',
            },
            {
              term: 'babona',
              text: 'A népi hiedelemvilág eleme; a novellákban a szereplők döntéseit gyakran ez irányítja.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A kötetek' },
        {
          kind: 'text',
          text: 'A *Tót atyafiak* (1881) Mikszáth első nagyobb novelláskötete, négy elbeszélést tartalmaz (többek között *Az arany kisasszony*, *Lapaj, a híres dudás* és *Jasztrabék pusztulása*). A tót (szlovák) falusi emberek világát mutatja be; a hangnem a fanyar iróniától a tragikus és a humoros elbeszélésig változik. *A jó palócok* (1882) hozta meg a régóta várt **elismerést**. A kötet 15 novellát tartalmaz, és a palóc világ ábrázolásának alapműve.',
        },
        {
          kind: 'text',
          text: 'A történetek különállóak, de közös bennük a **színtér** (a palóc falu), a **szereplőtípusok** (parasztok, öregek, szerelmesek, pletykás asszonyok) és a mesélő **szeretetteljes, de pontos** ábrázolásmódja. Sok falunév kitalált; a **Bodok** név a szerző szülőfaluját, Szklabonyát idézi.',
        },
        { kind: 'heading', text: 'Bede Anna tartozása' },
        {
          kind: 'text',
          text: 'A novella *A jó palócok* kötetből való. **Bede Anna** nővérét, aki szerelme, Kártony Gábor miatt keveredett bajba, lopott holmi átvételéért **hat hónap börtönre** ítélték, és kártérítést kellett fizetnie. Anna azonban **meghal**, mielőtt a büntetését letölthette volna. A család úgy érzi, hogy a halott nővérnek tartozása maradt: a kártérítést az anyjuk fizeti, a hat hónapot pedig a fiatalabb húg, **Bede Erzsi** tölti le, és a törvényszékre megy. A bíró először hidegen fogadja, majd kiderül, hogy az ítélet hibás volt: az igazság „másképp tudódott ki”. Nem bünteti meg Erzsit, hanem azt üzeni, hogy Anna ártatlan volt. Erzsi halkan felel: „Gondoltuk mi azt!”. A cím a **tartozás** szóval a családi kötelességet, a bűnhődést és a hivatalos igazságszolgáltatás viszonyát veti fel. A szerző a falusi emberek gondolkodását **megértően** ábrázolja, a bíró **emberséges** gesztusa pedig rokonszenvessé teszi a hivatalos világot is. A tömör előadás, a sejtelmes háttér és a komoly tét balladás hangulatot teremt.',
        },
        { kind: 'heading', text: 'A néhai bárány' },
        {
          kind: 'text',
          text: 'Szintén *A jó palócok* kötetben szerepel. Egy áradás után a folyón **tulipánosan festett láda** úszik, rajta egy bárány. A bárány nyoma **Sós Pál** birtokához vezet, és a falu rögtön őt gyanúsítja. A ládáról pletyka terjed, hogy ezüstpénz volt benne, az elbeszélő viszont kideríti, hogy a ládában **Baló Ágnes kelengyéje** (ruhák, kendők, csizmák) volt, és a láda nem került elő. A házkutatás nem talál semmit; a kislány, **Borcsa** nem nyugszik bele a veszteségbe. Az utolsó jelenetben Sós Pál a falu előtt esküre emeli a kezét, de új ködmönje lecsúszik róla. Borcsa a bundán felismeri bárányának foltjait: a ködmön bélése a bárány bőréből készült. A novella a **rejtélyt** így egy megindító jelenettel zárja, bár Sós Pál bűnösségét a szöveg formálisan nem bizonyítja. A mesélés fokozatosan építi a feszültséget, a csattanó pedig a gyerekre és a bundára kerül.',
        },
        {
          kind: 'compare',
          title: 'Két palóc novella összevetése',
          columns: ['Bede Anna tartozása', 'A néhai bárány'],
          rows: [
            {
              label: 'Alapkérdés',
              cells: [
                'a családi tartozás és a hivatalos igazságszolgáltatás ellentéte',
                'rejtély: ki vitte el a bárányt, és mit ér a bizonyíték',
              ],
            },
            {
              label: 'Hangulat',
              cells: ['komoly, balladás, megrendítő', 'titokzatos, fanyar, megindító'],
            },
            {
              label: 'Közös',
              cells: [
                'palóc falu, falusi szereplők, szeretetteljes ábrázolás',
                'palóc falu, falusi szereplők, anekdotikus előadás',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten érdemes a novellákat **ciklusként** is nézni: a kötet 15 története közös világot rajzol, de hangnemük eltér (komoly, balladás, humoros). Az értelmezések gyakran kiemelik, hogy a **népi hiedelem** Mikszáthnál nem pusztán nevetség tárgya, hanem a szereplők valóságos világképe. A fogadtatás szempontjából fontos, hogy *A jó palócok* hozta meg számára az országos elismerést.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műfaji és kompozíciós kérdések: mi a novella, mitől anekdotikus, hol a fordulópont és a csattanó.',
            'Szövegrészlet értelmezése: elbeszélői hang, szereplők beszéde, hangnem, a falusi világ ábrázolása.',
            'Összehasonlítás: két Mikszáth-novella vagy egy Mikszáth-novella és más szerző novellája (például Móricz).',
          ],
        },
        {
          kind: 'example',
          title: 'Értelmezési vázlat: Bede Anna tartozása',
          problem: 'Vázold fel egy novellaelemzés menetét a *Bede Anna tartozása* alapján.',
          solution:
            '**Bevezetés**: Mikszáth, *A jó palócok* (1882), novella; a palóc falusi világ.\n**Téma**: a családi tartozás és a hivatalos igazságszolgáltatás ellentéte; a halott nővér bűnének vállalása.\n**Elbeszélő**: megértő, szeretetteljes hang; a bíró emberséges.\n**Hangulat és eszközök**: tömörség, sejtelmes háttér, balladás tónus.\n**Értelmezés**: mit jelent a „tartozás”, és miért a húg viseli a büntetést; az ítélet hibája és az igazság „másképp” kiderülése.\n**Zárás**: saját megállapítás a falusi világ komolyan vételéről.',
        },
        {
          kind: 'tip',
          text: 'A novellaelemzésben mindig mondd ki a **fordulópontot** (hol változik meg a helyzet) és a **zárlat szerepét**. Ha nem emlékszel egy részletre, inkább fogalmazz általánosabban, mint hogy kitalálj egy eseményt.',
        },
      ],
      topicMatch: ['mikszáth'],
      cards: { subject: 'magyar', era: 'realizmus' },
      quiz: [
        {
          question: 'Melyik kötetben szerepel a *Bede Anna tartozása*?',
          options: ['Tót atyafiak', 'Szent Péter esernyője', 'A jó palócok', 'Új Zrínyiász'],
          answer: 2,
          explanation: 'A *Bede Anna tartozása* *A jó palócok* (1882) novellái közé tartozik.',
        },
        {
          question: 'Hol játszódnak *A jó palócok* novellái?',
          options: ['Alföldi tanyavilág', 'Palóc falu a Felvidéken', 'Budapest', 'Erdély'],
          answer: 1,
          explanation: 'A kötet színtere a Palócföld, a felvidéki palóc falusi világ.',
        },
        {
          question: 'Mi jellemzi a *Bede Anna tartozása* hangulatát?',
          options: [
            'Komikus eposzi paródia.',
            'Tömör, balladás, komoly hangnem.',
            'Pátoszos politikai szónoklat.',
            'Tudományos tárgyilagosság.',
          ],
          answer: 1,
          explanation: 'A novella tömör, sejtelmes, komoly tétű: balladás hangulatú.',
        },
        {
          question: 'Melyik műfaj a *Bede Anna tartozása*?',
          options: ['regény', 'novella', 'dráma', 'elégia'],
          answer: 1,
          explanation: 'Rövid, egyetlen történetet sűrítő epikai mű: novella.',
        },
        {
          question: 'Hogyan viszonyul az elbeszélő a népi hiedelmekhez a palóc novellákban?',
          options: [
            'Komolyan veszi őket, a szereplők világképének részei.',
            'Kizárólag kigúnyolja őket.',
            'Teljesen kerüli.',
            'Tudományosan cáfolja.',
          ],
          answer: 0,
          explanation:
            'A mesélő a babonát a szereplők valós világképeként kezeli, megértően ábrázolja.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A jó palócok', url: wiki('A jó palócok') },
        { label: 'Wikipédia: Bede Anna tartozása', url: wiki('Bede Anna tartozása') },
        { label: 'Wikipédia: Tót atyafiak', url: wiki('Tót atyafiak Mikszáth') },
      ],
    },
    {
      id: 'mikszath-szent-peter-esernyoje',
      subject: 'magyar',
      unitId: 'mikszath',
      title: 'Szent Péter esernyője',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, jellemző motívumok, jelentésrétegek, világlátás); műrészletek értelmezése; a művekben felvetett kérdések etikai, történeti, lélektani, társadalmi vonatkozásai.',
        emelt:
          'A művek hatása, fogadtatása egy-két példa alapján; a művekben felvetett gondolati, filozófiai, esztétikai kérdések; különféle kritikák, interpretációk.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '*Szent Péter esernyője* (1895) Mikszáth egyik legismertebb **regénye**, az anekdotikus elbeszélés mintadarabja.',
            'Színtere a **felvidéki** világ: a kis falu, **Glogova**, és a város, **Besztercebánya**.',
            'A központi tárgy egy **esernyő**, amely körül legenda és valóság keveredik: a csoda, a pénz és a szerelem kérdése.',
            'A történet több szálon halad: **kisvilág** (falu, plébánia, polgárok) és emberi sorsok, **happy end**-del.',
            'Az elbeszélő **ironikus és megértő**, a hangnem humoros, mégis van benne komoly mondanivaló.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'regény',
              text: 'Hosszabb, összetett epikai műfaj, több szereplővel, szállal és hosszabb időtartammal.',
            },
            {
              term: 'kisvilág',
              text: 'Zárt közösség (falu, kisváros), amelyen keresztül a nagy emberi kérdések láthatók.',
            },
            {
              term: 'irónia',
              text: 'A kimondott jelentés mögött az ellenkezője vagy egy más szándék áll; a mesélő távolságtartó, fanyar hangja.',
            },
            {
              term: 'legenda és csoda',
              text: 'A regényben a hit által teremtett történet és a hétköznapi valóság áll szemben egymással.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Cselekmény és szereplők' },
        {
          kind: 'text',
          text: 'A történet a felvidéki **Glogova** faluban és **Besztercebányán** játszódik. **Veronka** (Bélyi Veronka) két éves korában került a faluba: eső közben egy vörös esernyő védte meg, és a falu úgy hiszi, Szent Péter oltalmazta. Az esernyő így csodás ereklyévé válik, zarándokokat vonz. A másik szál **Wibra Gyuri**, aki **Gregorics Pál** törvénytelen fia. Gregorics besztercebányai ember volt, aki kémként is dolgozott az 1848–49-es szabadságharcban, és jelentős vagyont szerzett. Halála előtt végrendeletet készít, de a fiának nem hagy vagyont. A vagyon nyomát egy külföldi bankban lévő nyugta jelenti, amelyet valószínűleg az esernyő nyelében rejtett el. Az esernyőt később elárverezik, és Gyuri ezért kezd kutatni utána. A végén Gyuri felhagy az apja vagyonának keresésével, Szent Péter álmában pedig Veronka mellett dönt. Veronka eltűnik, de Gyuri megtalálja, bevallja neki az egész történetet, a lány megbocsát, és összeházasodnak.',
        },
        { kind: 'heading', text: 'Szerkezet és elbeszélés' },
        {
          kind: 'text',
          text: 'A regény nem lineárisan halad: a mesélő **több szálat** futtat, kitérőkkel, közbeszúrt történetekkel, ismétlésekkel. A hangnem **bizalmas és humoros**, az elbeszélő időnként az olvasóhoz szól. A mű két világot állít szembe: a **falusi, hiedelmekkel teli kisvilágot** és a **városi, pénzcentrikus polgári világot**.',
        },
        {
          kind: 'keypoints',
          title: 'Motívumok és jelentésrétegek',
          items: [
            '**az esernyő**: csodát ígérő tárgy, a hit és a haszonlesés közös pontja',
            '**a csoda és a pénz**: a hit nemcsak vallás, hanem gazdasági érdek is lehet',
            '**a szerelem**: a fiatalok sorsa kapcsolja össze a történet szálait',
            '**falu és város**: két világ, két értékrend',
            '**a mesélő hangja**: irónia, részvét és humor együtt',
          ],
        },
        {
          kind: 'text',
          text: 'A mű **világlátása** mértékletes optimizmust sugároz: a hétköznapi emberek gyarlóságai nevetségesek, de nem gonoszak, és a történet végén a jó elnyeri jutalmát. Ez a hang a romantika mesélői hagyományát és a realizmus szemléletét ötvözi.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten érdemes megvizsgálni, hogyan **oldja fel az irónia a hit és a babona kérdését**: a mű nem gúnyolja ki a hívőket, de megmutatja, hogy a csodához az emberi érdek is hozzájárul. Az értelmezések közül sokan a regény **anekdotikus szerkezetét** hangsúlyozzák, mások a **társadalomrajzot** (a kisvilág pénz- és hatalomviszonyait). A fogadtatás szempontjából jelentős, hogy a *Szent Péter esernyője* a szerző egyik legnépszerűbb műve lett, és több filmes feldolgozás is készült belőle.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: a regény bemutatása (téma, műfaj, kompozíció, motívumok, világlátás) és egy részlet értelmezése.',
            'Irodalmi feladatlap: műfaj, szerző, korstílus, motívumok felismerése.',
            'Esszé: az irónia szerepe Mikszáth prózájában, vagy a hit és a pénz kérdése a regényben.',
          ],
        },
        {
          kind: 'example',
          title: 'Szóbeli vázlat: Szent Péter esernyője',
          problem: 'Mutasd be röviden a regényt tételként.',
          solution:
            '**Bevezetés**: Mikszáth, 1895, regény; a magyar realista próza anekdotikus mesélője.\n**Téma**: egy legendás esernyő körül kibontakozó történet; a csoda, a pénz és a szerelem.\n**Szereplők, helyszínek**: Glogova, Besztercebánya; Veronka, Wibra Gyuri, Gregorics Pál.\n**Kompozíció**: több szál, kitérők, mesélő hang; falu és város szembeállítása.\n**Hangnem**: humoros, ironikus, megértő.\n**Értelmezés**: a hit és az érdek viszonya; a kisvilág mint az emberi gyarlóság tükre.\n**Zárás**: saját vélemény arról, miért ma is élvezetes a regény.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a *Szent Péter esernyőjét* a *Noszty fiú esetével*! Az előbbi a hit, a csoda és a falu–város szembeállítás regénye, az utóbbi a dzsentri világ szatírája.',
        },
        {
          kind: 'tip',
          text: 'Ha a szereplők neveire nem emlékszel pontosan, fogalmazz a szerepükkel (a fiatal pár, a kereskedő, a falu közössége), de a **fő motívumot** (az esernyő) és a **helyszíneket** pontosan mondd.',
        },
      ],
      topicMatch: ['mikszáth'],
      cards: { subject: 'magyar', era: 'realizmus' },
      quiz: [
        {
          question: 'Melyik évben jelent meg a *Szent Péter esernyője*?',
          options: ['1881', '1882', '1895', '1908'],
          answer: 2,
          explanation:
            'A regény 1895-ös; 1881 a *Tót atyafiak*, 1882 *A jó palócok*, 1908 a *Noszty fiú esete* éve.',
        },
        {
          question: 'Melyik tárgy áll a regény középpontjában?',
          options: ['egy kard', 'egy esernyő', 'egy könyv', 'egy gyűrű'],
          answer: 1,
          explanation:
            'A cím is jelzi: a Szent Péternek tulajdonított esernyő körül szövődik a történet.',
        },
        {
          question: 'Melyik két helyszín jellemzi a regényt?',
          options: [
            'Glogova és Besztercebánya',
            'Pest és Bécs',
            'Szeged és Debrecen',
            'Kiskőrös és Pest',
          ],
          answer: 0,
          explanation: 'A cselekmény a felvidéki Glogova faluban és Besztercebányán játszódik.',
        },
        {
          question: 'Mi jellemzi a regény elbeszélőjét?',
          options: [
            'Ironikus, bizalmas, mesélő hang.',
            'Személytelen tudományos hang.',
            'Pátoszos hősköltői hang.',
            'Első személyű naplóíró.',
          ],
          answer: 0,
          explanation: 'Mikszáth mesélője humorral, iróniával és megértéssel szól az olvasóhoz.',
        },
        {
          question: 'Mit állít szembe a regény elsősorban?',
          options: [
            'Az ókort és a középkort.',
            'A falusi kisvilágot és a városi, pénzcentrikus világot.',
            'Két háborút.',
            'A tengert és a hegyet.',
          ],
          answer: 1,
          explanation:
            'A mű a falusi hiedelemvilágot és a városi pénzvilágot is bemutatja, és összeütközteti.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szent Péter esernyője', url: wiki('Szent Péter esernyője regény') },
        { label: 'Wikipédia: Mikszáth Kálmán', url: wiki('Mikszáth Kálmán') },
      ],
    },
    {
      id: 'mikszath-noszty-fiu-dzsentri',
      subject: 'magyar',
      unitId: 'mikszath',
      title: 'A Noszty fiú esete Tóth Marival és a dzsentri világ',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); a művekben felvetett kérdések etikai, történeti, lélektani vagy társadalmi vonatkozása.',
        emelt:
          'A művekben felvetett társadalmi, gondolati kérdések; a mű fogadtatása, kritikák, interpretációk; helye az életműben és a korszakban.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '*A Noszty fiú esete Tóth Marival* (1908) **szatirikus regény**: a dzsentri világ torzulásait és a polgárosodó társadalom érdekviszonyait mutatja be.',
            'Főszereplője **Noszty Feri**, az eladósodott dzsentri család fia, aki **érdekből**, a vagyon miatt akar megnősülni.',
            'A másik oldalon **Tóth Mari** és gazdag apja, **Tóth Mihály** áll, a vagyonos, polgári világ képviselői.',
            'A **dzsentri** a nemesi származású, de vagyonát vesztett, hivatalba vagy látszatéletbe menekülő réteg.',
            'A hang **ironikus**, a bírálat mégsem kegyetlen: Mikszáth szereplői emberi gyarlóságaikkal is rokonszenvesek.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'dzsentri',
              text: 'A kiegyezés utáni korszak lecsúszó, nemesi származású társadalmi rétege, amely a látszatot igyekszik fenntartani.',
            },
            {
              term: 'szatíra',
              text: 'Gúnyos, kritikus ábrázolás, amely a társadalom vagy az emberek hibáit teszi nevetségessé.',
            },
            {
              term: 'társadalomrajz',
              text: 'A regény hátterét a korabeli társadalom viszonyai adják (vagyon, származás, házasság, karrier).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A történet alapkonfliktusa' },
        {
          kind: 'text',
          text: '**Noszty Feri** huszárhadnagy, a családja vagyonát elvesztette, de a dzsentri életmódot és az előkelő látszatot fenn akarja tartani. A megoldást egy **gazdag házasságban** látja, így szemet vet **Tóth Marira**, aki az Amerikából meggazdagodva hazatért **Tóth Mihály** lánya. A regény a házassági szándék, az érdek és az érzelmek közötti feszültségből bontakozik ki. Mari és Feri kapcsolatában a számító kezdetet a **valódi vonzalom** is megzavarja. A házasság végül nem jön létre: az esküvő napján Mari eltűnik, Tóth Mihály pedig bejelenti, hogy lánya és felesége külföldre utazott. Feri a kudarcot könnyedén veszi, így a dzsentri könnyelműsége a végén sem változik meg.',
        },
        { kind: 'heading', text: 'A dzsentri világ ábrázolása' },
        {
          kind: 'keypoints',
          title: 'Mit mutat meg a regény a dzsentriről?',
          items: [
            '**látszat és valóság**: az előkelő életmód mögött adósság és üres zseb áll',
            '**a nemesi származás büszkesége**, amely a pénz nélkül már nem elég',
            '**az érdekházasság**: a házasság vagyonszerzési eszköz',
            '**a polgárosodó társadalom**: a vagyonos, nem nemesi réteg megjelenése',
            '**a megyei és úri világ szokásai**: vendégeskedés, rangkórság, pletyka',
          ],
        },
        {
          kind: 'compare',
          title: 'Két világ a regényben',
          columns: ['Noszty-család (dzsentri)', 'Tóth-család (vagyonos polgári világ)'],
          rows: [
            {
              label: 'Érték',
              cells: ['származás, rang, látszat', 'vagyon, munka, gyakorlatiasság'],
            },
            {
              label: 'Helyzet',
              cells: ['eladósodott, de büszke', 'gazdag, de társadalmilag kevésbé elismert'],
            },
            {
              label: 'Cél',
              cells: ['pénzhez jutni, a státust megtartani', 'a lány jó házassága, rang'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A regény **szatíra**, de nem pusztán kegyetlen: az elbeszélő a hibás szereplőket sem kárhoztatja, hanem **mosolyogva leleplezi**. A mű így egyszerre bírálja a dzsentrit, és értelmezi is a kor változását: a régi nemesi világ lassú hanyatlását, a polgárosodás kezdetét.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a regény a **dzsentri-ábrázolás hagyományába** helyezhető (a kiegyezés utáni irodalom visszatérő témája), és összevethető más szerzők társadalomrajzával. A fogadtatásban visszatérő kérdés, mennyire kritikus a mű: egyesek **éles társadalombírálatnak**, mások **megbocsátó, derűs szatírának** látják. Az életműben a regény a szerző érett korszakához tartozik, amikor az irónia és a társadalomrajz hangsúlyosabbá válik a korai idill mellett.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: a regény bemutatása, a dzsentri világ jellemzése, részlet értelmezése.',
            'Műfaji kérdés: szatirikus társadalmi regény; irodalmi feladatlap: korstílus (realizmus), szereplők, fogalmak (dzsentri, irónia, szatíra).',
            'Összehasonlítás: a *Szent Péter esernyője* és a *Noszty fiú esete* (kisvilág, irónia), vagy más szerző társadalomrajza.',
          ],
        },
        {
          kind: 'example',
          title: 'Esszévázlat: a dzsentri Mikszáth műveiben',
          problem:
            'Mutasd be, hogyan jelenik meg a dzsentri világ a *Noszty fiú esete Tóth Marival* című regényben.',
          solution:
            '**Tétel**: Mikszáth a dzsentri látszatvilágát gúnyos, de megértő szemmel ábrázolja.\n**1. érv**: a főhős, Noszty Feri érdekből keres gazdag feleséget.\n**2. érv**: a Noszty- és a Tóth-család szembeállítása (származás és vagyon).\n**3. érv**: az elbeszélő iróniája, amely leleplez, de nem pusztít.\n**4. érv**: a polgárosodás, a társadalmi változás háttere.\n**Összegzés**: a regény szatíra és társadalomrajz, amely a kor világát élvezetesen, a mai olvasónak is érthetően mutatja meg.',
        },
        {
          kind: 'warning',
          text: 'A dzsentri nem egyszerűen „gazdag nemes”: éppen a **vagyon elvesztése** és a rang fenntartásának kényszere jellemzi. Ne azonosítsd az arisztokráciával!',
        },
      ],
      topicMatch: ['mikszáth'],
      cards: { subject: 'magyar', era: 'realizmus' },
      quiz: [
        {
          question: 'Ki a *Noszty fiú esete Tóth Marival* főszereplője?',
          options: ['Wibra Gyuri', 'Noszty Feri', 'Kukorica Jancsi', 'Gregorics Pál'],
          answer: 1,
          explanation:
            'A regény főhőse Noszty Feri, az eladósodott dzsentri család fia; a többi név más művekből való.',
        },
        {
          question: 'Mi a dzsentri?',
          options: [
            'Gazdag nagypolgári réteg.',
            'Lecsúszó, nemesi származású társadalmi réteg, amely a látszatot őrzi.',
            'Falusi parasztság.',
            'Katonai rang.',
          ],
          answer: 1,
          explanation:
            'A dzsentri a nemesi származású, de vagyonát vesztett réteg, amely az úri életmód látszatát próbálja megőrizni.',
        },
        {
          question: 'Milyen műfajú a *Noszty fiú esete Tóth Marival*?',
          options: [
            'Szatirikus társadalmi regény.',
            'Verses népmese.',
            'Komikus eposz.',
            'Tragédia.',
          ],
          answer: 0,
          explanation: 'A regény a dzsentri világát bíráló, ironikus társadalmi regény.',
        },
        {
          question: 'Miért akar Noszty Feri megnősülni?',
          options: [
            'Mert egyetemet végzett.',
            'A vagyon miatt, az anyagi gondjai megoldására.',
            'A hadseregből való elbocsátás miatt.',
            'Irodalmi pályára készül.',
          ],
          answer: 1,
          explanation: 'Feri érdekházasságot tervez: a gazdag Tóth Marival oldaná meg adósságait.',
        },
        {
          question: 'Hogyan ítélik meg az értelmezők a regény bírálatát?',
          options: [
            'Egyesek éles társadalombírálatnak, mások derűs szatírának látják.',
            'Mindenki egyformán gyűlöletes pamfletnek tartja.',
            'Mindenki romantikus meseként olvassa.',
            'Nincs róla vélemény.',
          ],
          answer: 0,
          explanation:
            'A regény iróniája miatt eltér az olvasatok hangsúlya: bírálat és megbocsátó humor együtt van jelen.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: A Noszty fiú esete Tóth Marival',
          url: wiki('A Noszty fiú esete Tóth Marival regény'),
        },
        { label: 'Wikipédia: Dzsentri', url: wiki('Dzsentri') },
        { label: 'Wikipédia: Mikszáth Kálmán', url: wiki('Mikszáth Kálmán') },
      ],
    },
    {
      id: 'mikszath-romantika-realizmus-irodalmi-hely',
      subject: 'magyar',
      unitId: 'mikszath',
      title: 'Romantika és realizmus között: irónia, hatás, fogadtatás',
      level: 'emelt',
      requirement: {
        emelt:
          'A pályakép főbb jellemzői; a pályaképre ható irányzatok és szellemi kötődések; tájékozottság a korszakban, a kortársak között (pl. Jókai és kora); a művek hatása, fogadtatása; a szerző utóélete, helye és hatása az irodalmi-kulturális hagyományban; különféle kritikák, interpretációk.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Mikszáth a **romantikus mesélő hagyomány** (Jókai) és a **realista társadalomábrázolás** határán áll.',
            'A **kisvilág** (palóc falu, megye, kisváros) ábrázolása révén az egész kor emberi és társadalmi kérdéseit mutatja meg.',
            'Legfőbb eszköze az **irónia** és az **anekdotikus kompozíció**, amely a szóbeli mesélés hagyományát emeli irodalmivá.',
            'Témái: a **dzsentri hanyatlása**, a polgárosodás, a hit és a pénz, a hagyomány és a változás.',
            'Hatása: az anekdotikus, ironikus magyar prózahagyomány egyik meghatározó alakja, művei ma is olvasottak és filmen is népszerűek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mikszáth és a korszak' },
        {
          kind: 'text',
          text: 'Mikszáth a **19. század második felének** írója: pályája a kiegyezés utáni korszakban bontakozott ki. Jókai Mór romantikus nagyregényei után a magyar próza **realista irányba** fordult, de Mikszáth nem szakított a mesélés hagyományával. Nála a **romantikus mesélő hang** és a **realista társadalomlátás** keveredik: a szereplők hétköznapi emberek, a hang mégis szinte mesélői, szórakoztató.',
        },
        {
          kind: 'compare',
          title: 'Romantikus és realista vonások Mikszáthnál',
          columns: ['Romantikus vonás', 'Realista vonás'],
          rows: [
            {
              label: 'Elbeszélő',
              cells: [
                'mesélő, a hallgatósággal beszélgető hang',
                'megfigyelő, a társadalmat leleplező szem',
              ],
            },
            {
              label: 'Szereplők',
              cells: [
                'népi alakok idilli megjelenítése, mesei fordulatok',
                'típusok, korhű társadalmi helyzetek (dzsentri, polgár, paraszt)',
              ],
            },
            {
              label: 'Szemlélet',
              cells: ['a jó végső győzelme, a happy end', 'irónia, az emberi gyarlóság feltárása'],
            },
          ],
        },
        { kind: 'heading', text: 'Az irónia és a kisvilág' },
        {
          kind: 'text',
          text: 'Az **irónia** Mikszáthnál nem pusztán gúny: a mesélő távolságot tart, mégis rokonszenvvel szemléli a szereplőket. A **kisvilág** (a falu, a megye, a kisváros) azért fontos, mert benne a nagy emberi és társadalmi kérdések (hatalom, pénz, szerelem, becsület) **kicsiben, jól áttekinthetően** jelennek meg. A kisvilág egyszerre idill és kritika tárgya.',
        },
        { kind: 'heading', text: 'Utóélet és hatás' },
        {
          kind: 'text',
          text: 'Mikszáth művei a magyar olvasóközönség egyik legkedveltebb olvasmányai. Regényeiből és novelláiból filmek és tévéfeldolgozások is készültek (a *Szent Péter esernyője* és a *Noszty fiú esete Tóth Marival* is több változatban). Az **anekdotikus, ironikus elbeszélésmód** a későbbi magyar prózában is továbbél.',
        },
        {
          kind: 'keypoints',
          title: 'Kérdések, amelyeket érdemes feltenned az életműhöz',
          items: [
            'Hol a határ a mesélés és a társadalomkritika között?',
            'Mennyire gúnyol, mennyire szeret az elbeszélő?',
            'Hogyan változik a kisvilág képe a korai novellák és a késői regények között?',
            'Melyik hagyományhoz (Jókai, népmese, anekdota) kötődik, és miben újít?',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű esszé: Mikszáth helye a romantika és a realizmus között, az elbeszélő és az irónia szerepe.',
            'Összehasonlítás: Jókai és Mikszáth mesélése, vagy két Mikszáth-mű (novella és regény).',
            'Szóbeli tétel: pályakép, kötetek, korszak, utóélet, egy-két példa a fogadtatásra.',
          ],
        },
        {
          kind: 'example',
          title: 'Esszévázlat: Mikszáth és az irónia',
          problem: 'Mutasd be az iróniát mint Mikszáth meghatározó eszközét két mű alapján.',
          solution:
            '**Tétel**: az irónia Mikszáth prózájának alaphangja, amely távolságot és rokonszenvet egyszerre jelent.\n**1. érv**: *A jó palócok* novelláiban az elbeszélő megértő, de fanyar.\n**2. érv**: a *Szent Péter esernyőjében* a hit és az érdek viszonya ironikusan jelenik meg.\n**3. érv**: a *Noszty fiú esetében* a dzsentri látszatvilága szatirikus.\n**Összegzés**: az irónia révén Mikszáth a romantikus mesélést realista társadalomlátással kapcsolja össze.',
        },
        {
          kind: 'tip',
          text: 'Az emelt szintű válaszban **hozz konkrét példát** minden állításhoz (mű, szereplő, motívum), és mindig kapcsold a kérdést a **korszakhoz**: mit jelent a romantikából a realizmusba való átmenet az ő prózájában?',
        },
      ],
      topicMatch: ['mikszáth'],
      cards: { subject: 'magyar', era: 'realizmus' },
      quiz: [
        {
          question: 'Melyik két hagyomány találkozik Mikszáth prózájában?',
          options: [
            'Barokk és reneszánsz.',
            'Romantikus mesélés és realista társadalomlátás.',
            'Klasszicizmus és avantgárd.',
            'Antik dráma és szimbolizmus.',
          ],
          answer: 1,
          explanation:
            'Mikszáth a jókais mesélői hagyományt ötvözi a realista, ironikus társadalomábrázolással.',
        },
        {
          question: 'Mire szolgál a kisvilág ábrázolása Mikszáthnál?',
          options: [
            'Csak a tájleírásra.',
            'Kicsiben mutatja meg a nagy emberi és társadalmi kérdéseket.',
            'A történelmi események részletes leírására.',
            'Tudományos magyarázatra.',
          ],
          answer: 1,
          explanation:
            'A zárt közösség (falu, megye) áttekinthető terepe a hatalom, a pénz és a szerelem kérdéseinek.',
        },
        {
          question: 'Melyik állítás igaz Mikszáth iróniájára?',
          options: [
            'Mindig kegyetlen gúny.',
            'Teljesen hiányzik.',
            'Távolságtartó, de rokonszenves, megértő hang is.',
            'Csak a verseiben jelenik meg.',
          ],
          answer: 2,
          explanation: 'Az irónia nála nem pusztán gúny: leleplez, de megért és szeret is.',
        },
        {
          question: 'Melyik Mikszáth-műből készült több filmes feldolgozás?',
          options: ['Szent Péter esernyője', 'Az apostol', 'Toldi', 'Az ember tragédiája'],
          answer: 0,
          explanation: 'A *Szent Péter esernyője* többször került filmre; a többi mű más szerzőké.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Mikszáth Kálmán', url: wiki('Mikszáth Kálmán') },
        { label: 'Wikipédia: Realizmus (irodalom)', url: wiki('Realizmus irodalom') },
        { label: 'Wikipédia: Jókai Mór', url: wiki('Jókai Mór') },
      ],
    },
  ],
};

export default unit;
