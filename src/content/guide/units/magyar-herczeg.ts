import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Herczeg Ferenc életműve (kötelező életmű-szerző a 2020-as tantervtől). */
const unit: GuideUnit = {
  id: 'herczeg',
  subject: 'magyar',
  order: 58,
  title: 'Herczeg Ferenc életműve',
  requirementRef: 'Irodalom 1. Életművek: Herczeg Ferenc',
  intro:
    'A 20. század eleji magyar irodalom egyik legolvasottabb írója: újságíró, szerkesztő, regény-, novella- és drámaíró. Életút és közéleti szerepek, Az élet kapuja (Róma, 1513), a Bizánc, a pályakép szakaszai, és emelt szinten a vita az életműről és az utóélet.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Irodalom 1. témakör, Életművek). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'herczeg-eletut-uj-idok',
      subject: 'magyar',
      unitId: 'herczeg',
      title: 'Herczeg Ferenc életútja, az Új Idők és a közéleti szerepek',
      level: 'kozep',
      requirement: {
        kozep:
          'Az életmű néhány jellemzőjének bemutatása; a művek elhelyezése az életműben és az adott korszakban.',
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság, a szerző regionális, kulturális kötődései; a pályaképre ható irányzatok és szellemi kötődések.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Herczeg Ferenc** (1863–1954) **Versecen** született, a mai Szerbia területén, délvidéki német (sváb) családban; eredeti neve Franz Herzog. Az anyanyelve német volt, a magyart gyerekként tanulta meg, és írói nyelvévé tette.',
            'Jogot tanult Budapesten, de újságíró és író lett. Első nagy sikere a *Fenn és lenn* (1890), majd *A Gyurkovics-lányok* (1893).',
            'Az **Új Idők** című irodalmi hetilapot 1896-tól szerkesztette: a lap évtizedekig a legolvasottabb családi szépirodalmi újság volt.',
            'Közéleti szerepei: országgyűlési képviselő, a Petőfi Társaság elnöke, a Magyar Figyelő szerkesztője, később felsőházi tag és a Magyar Revíziós Liga elnöke.',
            'Az 1945 utáni években az életműve háttérbe szorult; a 2020-as tantervvel került vissza a kötelező szerzők közé.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1863', text: 'Versecen született (szeptember 22.).' },
            {
              date: '1890',
              text: '*Fenn és lenn*: első nagy sikerű regénye. A hagyomány szerint börtönben írta, miután egy párbajban meghalt az ellenfele.',
            },
            {
              date: '1893',
              text: '*A Gyurkovics-lányok* (regény) és *A dolovai nábob leánya*: első drámája a Nemzeti Színházban.',
            },
            { date: '1896', text: 'Az *Új Idők* szerkesztője lesz.' },
            { date: '1904', text: '*Bizánc*, bemutató a Nemzeti Színházban (április 22.).' },
            { date: '1911–1918', text: 'A *Magyar Figyelő* szerkesztője.' },
            {
              date: '1919/1920',
              text: '*Az élet kapuja* (az első kiadás éve a forrásokban eltér).',
            },
            { date: '1927–1945', text: 'Felsőházi tag és a Magyar Revíziós Liga elnöke.' },
            { date: '1954', text: 'Budapesten halt meg (február 24.).' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kezdetek: Versec, a nyelv és a pálya' },
        {
          kind: 'text',
          text: 'Herczeg **Versecen**, a Bánátban született, ez a délvidéki, többnemzetiségű vidék az életmű egyik háttere. Gimnáziumi éveit több városban töltötte (például Temesvár, Szeged, Fehértemplom), a jogot a budapesti egyetemen végezte. A magyar nyelvet gyerekként sajátította el, ezért az **anyanyelvváltás** és az idegenből jött író tudatos magyarsága az életrajz fontos eleme. Újságíróként kezdett, tárcái és novellái a Budapesti Hírlapban jelentek meg.',
        },
        {
          kind: 'text',
          text: 'Az írói áttörést a *Fenn és lenn* (1890) hozta. Az 1890-es években a **dzsentri** és a katonatiszti világ ábrázolásával, könnyed, szellemes, jól szerkesztett prózával lett népszerű. 1891-ben a Petőfi Társaság, 1893-ban a Kisfaludy Társaság tagja lett, 1899-ben az Akadémia levelező tagjává választották.',
        },
        { kind: 'heading', text: 'Új Idők és az irodalmi élet' },
        {
          kind: 'text',
          text: '1896-tól ő szerkesztette az **Új Idők** című irodalmi hetilapot. A lap a polgári olvasóközönség legnépszerűbb szépirodalmi újsága volt, az Új Idők körül sok író pályája indult el vagy futott be. A szerkesztői és irodalmi szervezői szerep éppoly fontos része Herczeg pályájának, mint az írás. **Jókai halála (1904) után a Petőfi Társaság elnöke** lett, így az akkori hivatalos irodalmi élet egyik vezetője volt. (A források az elnökség pontos éveiben eltérnek, ezért vizsgán elég a tény: Jókai után ő vette át a társaság vezetését.)',
        },
        { kind: 'heading', text: 'Közéleti szerepek' },
        {
          kind: 'text',
          text: 'Herczeg konzervatív, a Tisza István-féle politikához közel álló nézeteket vallott. A szerepeit az alábbi tények írják le, ezeket érdemes ismerni, értékelés nélkül:',
        },
        {
          kind: 'keypoints',
          items: [
            '**Országgyűlési képviselő** volt (1896–1901 Versec, majd 1910–1918 Pécska választókerületében, közben időközi mandátumokkal).',
            '**1911–1918: a Magyar Figyelő** című szemle szerkesztője, amely Tisza István politikáját támogatta.',
            'Az első világháború idején hadsegélyező és hadi jóléti feladatokat vezetett.',
            '**1919-ben** a Tanácsköztársaság idején őrizetbe vették, és a lapja éléről eltávolították.',
            '**1927–1945: a felsőház tagja**, és a **Magyar Revíziós Liga** elnöke. A liga a trianoni békeszerződés felülvizsgálatát követelte.',
          ],
        },
        { kind: 'heading', text: '1945 után' },
        {
          kind: 'text',
          text: 'A második világháború után Herczeg visszavonultan élt, nem publikált. 1949-ben az Akadémia átszervezésekor megszűnt a tagsága, a műveit évtizedekig nem adták ki. **1954-ben halt meg** Budapesten. A könyvei csak az 1980-as évektől jelentek meg újra, a 2020-as tanterv pedig a kötelező szerzők közé vette fel.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Topográfiai és kulturális kötődések (emelt).** Versec és a Bánát (Délvidék) az indulás helye; Budapest az irodalmi élet színtere (Nemzeti Színház, Új Idők, Petőfi Társaság, Akadémia); a Dél- és Felvidék, Erdély elvesztése (Trianon) a harmincas évek közéleti szerepeinek háttere. A pályaképre ható hagyomány: a magyar elbeszélő próza (Jókai, Mikszáth), a bécsi és francia társalgási próza és színmű, a századforduló szecessziós ízlése.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel (Irodalom 1. témakör, kötelező szerzők): egy-három mű bemutatása az életmű néhány jellemzőjének keretében. Az életút csak a művek elhelyezéséhez kell.',
            'Irodalmi feladatlap: műfaj, korszak, szerzői pálya ismerete (például melyik műfajt írta, hol jelent meg, hol játszódik).',
            'Emelt szinten: a pályaszakaszok, a közéleti szerepek, a kortársi fogadtatás és az utóélet.',
          ],
        },
        {
          kind: 'warning',
          text: 'Az életrajzi és politikai tényeket tárgyilagosan add elő. A vizsga nem azt kérdezi, hogy szimpatikus-e a szerző, hanem azt, hogy tudod-e, mit írt, mikor, milyen környezetben, és hogyan értelmezhető a műve.',
        },
        {
          kind: 'tip',
          text: 'Egy mondatban tudd összefoglalni: **sváb származású, magyarul író, Versecről indult, az Új Idők szerkesztője, a Petőfi Társaság elnöke, a Nemzeti Színház kedvelt szerzője, és a két főműve, amelyet a tantervek általában tárgyalnak: *Az élet kapuja* és a *Bizánc*.**',
        },
      ],
      topicMatch: ['herczeg'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Hol született Herczeg Ferenc?',
          options: ['Pécsett', 'Versecen', 'Szegeden', 'Kassán'],
          answer: 1,
          explanation:
            'Versecen született, a Bánátban (ma Szerbia). Az indulás helye a délvidéki sváb környezet.',
        },
        {
          question: 'Melyik lapot szerkesztette 1896-tól?',
          options: ['Nyugat', 'Pesti Divatlap', 'Új Idők', 'Vasárnapi Újság'],
          answer: 2,
          explanation:
            'Az Új Idők irodalmi hetilap volt, amelynek Herczeg a szerkesztője lett. A Nyugat 1908-ban indult, a Pesti Divatlap a reformkorban.',
        },
        {
          question: 'Melyik társaság elnöke lett Herczeg Jókai halála után?',
          options: [
            'A Petőfi Társaság',
            'A Tízek Társasága',
            'A Szent István Akadémia',
            'A Nyugat Társaság',
          ],
          answer: 0,
          explanation: 'Jókai a Petőfi Társaság elnöke volt, utána Herczeg vette át a vezetést.',
        },
        {
          question: 'Mi volt a Magyar Revíziós Liga célja, amelynek Herczeg az elnöke volt?',
          options: [
            'A trianoni békeszerződés felülvizsgálatának követelése',
            'A magyar helyesírás megreformálása',
            'A színházak államosítása',
            'A Habsburg-ház visszahívása',
          ],
          answer: 0,
          explanation:
            'A Revíziós Liga a trianoni határok felülvizsgálatát tűzte ki célul; Herczeg 1927-től volt az elnöke.',
        },
        {
          question:
            'Mi jellemezte Herczeg hivatalos szerepeit a harmincas években? Melyik állítás igaz?',
          options: [
            'Emigrált, és külföldön élt.',
            'A felsőház tagja volt.',
            'A kommunista párt tagja volt.',
            'Nem volt közéleti szerepe.',
          ],
          answer: 1,
          explanation:
            '1927-től 1945-ig a felsőház tagja volt, és a Revíziós Liga elnökeként is közszereplő volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Herczeg Ferenc', url: wiki('Herczeg Ferenc író') },
        { label: 'Wikipédia: Új Idők', url: wiki('Új Idők folyóirat') },
        { label: 'Wikipédia: Magyar Revíziós Liga', url: wiki('Magyar Revíziós Liga') },
      ],
    },
    {
      id: 'herczeg-az-elet-kapuja',
      subject: 'magyar',
      unitId: 'herczeg',
      title: 'Az élet kapuja: Bakócz Tamás Rómában',
      level: 'kozep',
      requirement: {
        kozep:
          'A főbb művek szövegismereten alapuló értelmezése (téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); kapcsolatok a művek között; a művek etikai, történeti, lélektani, társadalmi vonatkozásai.',
        emelt:
          'Kötetek, témák, motívumok; a művek hatása, fogadtatása egy-két példa alapján; a felvetett kérdések gondolati, filozófiai, esztétikai vonatkozásai; különféle kritikák, interpretációk.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Az élet kapuja** (1919/1920) történelmi elbeszélés (a kiadás alcíme: *Elbeszélés*; sok tankönyv kisregényként tárgyalja). Helyszíne **Róma**, ideje 1512–1513.',
            'Főszereplői: **Bakócz Tamás** esztergomi érsek, a magyar bíboros, aki a pápai trónra pályázik; keresztfia, **Vértesi Tamás**; a római kurtizán **Fiametta**; a bankár **Chigi**.',
            'A cím a **Szent Péter kulcsaira** utal: ha magyar pápa lesz, a kereszténység összefog a török ellen, és Magyarország megmenekülhet. A kaput csak a pápai kulcsok nyithatják meg.',
            'Az ütközés két világ között zajlik: a **raffinált reneszánsz Róma** és a **nyers, hatalmi akaratú magyarság**.',
            'Medici Giovanni a pápa (X. Leó), Bakócz bukik. A mű végén Dózsa György neve előrevetíti az 1514-es parasztháborút.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Konklávé',
              text: 'A bíborosok zárt tanácskozása, amely megválasztja az új pápát.',
            },
            {
              term: 'Tiara',
              text: 'A pápa hármas koronája; a pápai trón jelképe.',
            },
            {
              term: 'Szent Péter kulcsai',
              text: 'A pápai hatalom jelképe; a műben az „élet kapujának” kulcsa.',
            },
            {
              term: 'Barbár',
              text: 'A rómaiak szemében az Alpokon túli, műveletlen népek és emberek jelzője; a mű több szereplője használja a magyarokra.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Történelmi háttér' },
        {
          kind: 'text',
          text: 'A mű alapja valós esemény: **II. Gyula** pápa utolsó évei, majd **1513-ban a konklávé**. **Bakócz Tamás** esztergomi érsek, magyar bíboros az egyik pápajelölt volt. Az is történeti tény, hogy az 1514-es keresztes hadjárat meghirdetése a **Dózsa-féle parasztháborúba** torkollott. Herczeg ezt a háttért egy képzelt szerelmi és hatalmi történettel tölti meg.',
        },
        { kind: 'heading', text: 'A cselekmény menete' },
        {
          kind: 'text',
          text: 'A mű **22 számozott fejezetből** áll, a kezdő fejezet a kora reneszánsz Róma tablóját rajzolja meg: szűk utcák, romok, paloták. A **2–4. fejezetben** a főutcán várják Bakócz ünnepi bevonulását, amelyet három római néz Fiametta erkélyéről: a bankár **Chigi Agostino**, **Cardulo** pap és diplomata, valamint a kalandor **Vico Hannibal**. Cardulo itt mondja ki a cím jelentését: a magyarok az „Élet Kapujában ülnek”, a kapun túl a nemzeti jövő, a kapun innen a „pogány rabság”. A kaput csak Szent Péter kulcsaival lehet kinyitni.',
        },
        {
          kind: 'text',
          text: 'A menetben feltűnik **Vértesi Tamás**, a bíboros fiatal keresztfia és legkedvesebb rokona, aki katonának érzi magát. Egy megbokrosodott ló jelenete alatt találkozik a tekintete Fiamettáéval. Ettől kezdve két szál fut: a **politikai szál** (Bakócz tárgyalásai II. Gyula pápával és a bíborosokkal, a konklávé előkészítése) és a **szerelmi szál** (Tamás és Fiametta). A két szál nem független egymástól: Chigi és köre Medici Giovanni pápaságát támogatja, és egy római vacsorán a Bembo-féle köszöntő a „szépség és szellem fegyvereivel” küzdő géniuszt ünnepli.',
        },
        {
          kind: 'text',
          text: 'A konklávé végén **Medici Giovanni** lesz a pápa (X. Leó), nem Bakócz. A magyarok elindulnak hazafelé. Tamás nem fordul vissza Fiametta felé. A záró jelenetben a visszatérő társaság úton van a Campagnán, Bakócz keresztes hadjáratot tervez parasztokkal, és a vezér neve, amelyet kimond, **Dózsa György**. Az olvasó tudja, hová vezet ez: a keresztes hadjáratból parasztfelkelés lesz.',
        },
        {
          kind: 'compare',
          title: 'A két világ szembeállítása',
          columns: ['Róma (reneszánsz)', 'A magyarok (a „barbárok”)'],
          rows: [
            {
              label: 'Életforma',
              cells: ['gazdagság, művészet, élvezet', 'a vagyon és a földbirtok, a hatalom'],
            },
            { label: 'Értékrend', cells: ['kultúra, szépség, intrika', 'akarat, erő, hűség'] },
            {
              label: 'Veszély',
              cells: ['erkölcsi könnyelműség', 'belső széthúzás, a török fenyegetés'],
            },
            {
              label: 'Főszereplők',
              cells: ['Chigi, Fiametta, Bembo, II. Gyula', 'Bakócz Tamás, Vértesi Tamás'],
            },
          ],
        },
        { kind: 'heading', text: 'Értelmezési szempontok' },
        {
          kind: 'keypoints',
          items: [
            '**Műfaj:** történelmi elbeszélés (kisregény), ironikus és anekdotikus, gazdag korrajzzal. Nem eposzi hősköltemény, hanem **társasági és politikai korrajz**.',
            '**Kompozíció:** rövid, számozott fejezetek, filmszerű jelenetek (a bevonulás, a pápa-fogadás, a Sixtus-kápolna anekdotája, a vacsorák), keretként a Campagna.',
            '**Szereplők:** Bakócz tipikus „vadkanember”: parasztfiúból lett államférfi, akaraterő és ravaszság. Ellenpontja II. Gyula, a harcos pápa. Fiametta a szépség és a művelt társaság képviselője.',
            '**Motívumok:** a **kapu és a kulcs**, a **barbárság és kultúra**, a hatalom és a halál („az élet olyan rövid”), a művészet és az építkezés (Szent Péter-bazilika, Michelangelo).',
            '**Jelentésrétegek:** a magyarság történelmi választása; a nemzeti jövő felelőssége; a személyes érzelem és a közös cél ütközése.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** a Nobel-díjra jelölés is hozzátartozik a fogadtatáshoz: az Akadémia az 1920-as években ezzel a művel jelölte Herczeget. A kritikák megoszlanak: az egyik olvasat szerint nem mestermű, inkább érdekes történelmi kalandmű; más szerint a két világ szembeállítása és a gazdag korrajz az értéke. Az ellentétpárok (nyers erő és finomított műveltség) Herczeg több művében visszatérnek, ezért a *Bizánc* párja is lehet.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: *Az élet kapuja* bemutatása témája, szereplői és üzenete alapján; kapcsolata a *Bizánc*cal (a történelmi sorsfordulók, a nemzet felelőssége).',
            'Irodalmi feladatlap: műfaj (elbeszélés, történelmi regény), szereplő és helyszín párosítása, a cím jelentése.',
            'Műértelmező szöveg: részlet (például a bevonulás vagy Cardulo beszéde) elemzése: cím, szereplők, nyelvi eszközök, kor- és hatalomrajz.',
          ],
        },
        {
          kind: 'example',
          title: 'Modellválasz-vázlat: mit jelent a cím?',
          problem: 'Értelmezd *Az élet kapuja* címét a mű alapján. (kb. 200 szó)',
          solution:
            '**Tétel:** a cím a Szent Péter kulcsaira, vagyis a pápai trónra utal. **Hely a műben:** Cardulo szavai: a magyarok az Élet Kapujában ülnek, a kapun túl a nemzeti jövő, a kapun innen a pogány rabság. **Értelmezés:** Bakócz azért pályázik a tiarára, hogy a török ellen egyesítse Európát. **Jelképes réteg:** a kapu a nemzet sorsfordulója. **Ironikus tanulság:** a kaput nem nyitják ki; a konklávé másképp dönt, és a mű végén a keresztes hadjáratból parasztháború lesz.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a szereplőket! **Bakócz Tamás** a bíboros, **Vértesi Tamás** a keresztfia (nem pap, katona alkatú). **Fiametta** kurtizán, a **bankár Chigi**. A pápa II. Gyula, az új pápa Medici Giovanni (X. Leó). A mű nem Magyarországon játszódik, hanem Rómában.',
        },
        {
          kind: 'tip',
          text: 'Mondd el, hogy a mű **történelmi tényekből** (Bakócz, a konklávé, a Dózsa-felkelés) és **költött szálakból** (Tamás, Fiametta) áll. A kettő viszonya a korrajz eszköze.',
        },
      ],
      topicMatch: ['herczeg', 'az élet kapuja'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Hol játszódik Az élet kapuja?',
          options: ['Budán', 'Bizáncban', 'Rómában', 'Erdélyben'],
          answer: 2,
          explanation: 'A történet helyszíne Róma; Bakócz Tamás itt készül a pápaválasztásra.',
        },
        {
          question: 'Mit jelképez a cím („az élet kapuja”)?',
          options: [
            'A pápai trónon keresztül elérhető nemzeti megmenekülést, a Szent Péter kulcsait',
            'A római Szent Péter-bazilika bejáratát',
            'A budai vár kapuját',
            'Fiametta palotájának kapuját',
          ],
          answer: 0,
          explanation:
            'Cardulo szerint a magyarok az „élet kapujában” ülnek, és a kaput csak Szent Péter kulcsaival lehet kinyitni: magyar pápa esetén megszervezhetnék az Európa-szintű törökellenes ligát.',
        },
        {
          question: 'Ki Vértesi Tamás?',
          options: [
            'A római bankár',
            'A pápa titkára',
            'A török szultán követe',
            'Bakócz Tamás keresztfia és rokona',
          ],
          answer: 3,
          explanation:
            'Vértesi Tamás Bakócz keresztfia, aki a bevonulás jelenetében tűnik fel és beleszeret Fiamettába.',
        },
        {
          question: 'Ki lesz végül pápa a műben és a történelemben?',
          options: ['Bakócz Tamás', 'Chigi Agostino', 'II. Gyula', 'Medici Giovanni (X. Leó)'],
          answer: 3,
          explanation:
            'Nem Bakócz, hanem Medici Giovanni lett a pápa. II. Gyula az előző pápa volt.',
        },
        {
          question: 'Melyik nevet mondja ki Bakócz a mű végén, mint a keresztesek leendő vezérét?',
          options: ['Hunyadi János', 'Zrínyi Miklós', 'Mátyás király', 'Dózsa György'],
          answer: 3,
          explanation:
            'Dózsa György neve előrevetíti az 1514-es parasztháborút, amely a keresztes hadjáratból lett.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Az élet kapuja', url: wiki('Herczeg Ferenc Az élet kapuja') },
        { label: 'Wikipédia: Bakócz Tamás', url: wiki('Bakócz Tamás') },
        { label: 'Wikipédia: Dózsa-felkelés', url: wiki('Dózsa-felkelés') },
      ],
    },
    {
      id: 'herczeg-bizanc-dolovai-nabob',
      subject: 'magyar',
      unitId: 'herczeg',
      title: 'Herczeg drámái: a Bizánc és a színpad',
      level: 'both',
      requirement: {
        kozep:
          'Egy-három epikai, drámai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, világlátás); műnemek és műfajok felismerése.',
        emelt:
          'Azonos műfajú alkotások poétikai összevetése, a műfaj változása; a művek hatása, fogadtatása egy-két példa alapján; gondolati, filozófiai, esztétikai vonatkozások.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Herczeg a **Nemzeti Színház** egyik legjátszottabb szerzője volt. Első drámája *A dolovai nábob leánya* (bemutató: 1893), vígjátékos, katonai-dzsentri környezetben.',
            'A **történelmi színművei** közül a legismertebb a **Bizánc** (bemutató: 1904. április 22.), amely a Bizánci Birodalom utolsó napján játszódik, 1453-ban.',
            'A Bizánc műfaja a szerző szándéka szerint **színmű három felvonásban**, nem „történelmi dráma”: a szereplők szenvedélyek, bűnök és erények jelképei.',
            'Főszereplők: **Konstantin császár**, **Iréne császárné**, **Herma** (a császár hű apródja, valójában lány), a genovai zsoldosvezér **Giovanni (Giustiniani)**.',
            'Témák: a **dekadencia**, az **árulás**, a **hűség és önfeláldozás**, a hanyatló birodalom pusztulása.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Herczeg a színpadon' },
        {
          kind: 'text',
          text: 'Herczeg első drámáját, *A dolovai nábob leányát* 1893-ban mutatta be a Nemzeti Színház; a darab katonatiszti-dzsentri közegben játszódik, vígjátékos hangvételű. Később dolgozott történelmi színművekkel is: ilyen az *Ocskay brigadéros* (1901), a kuruc korhoz kapcsolódó dráma, és a **Bizánc** (1904). A Nemzeti Színházban a mű 1905 és 1944 között a források szerint 78 alkalommal szerepelt a műsoron Budapesten. A kritikus-rendező **Hevesi Sándor** a legsikeresebb magyar színdarabok közé sorolta.',
        },
        { kind: 'heading', text: 'A Bizánc cselekménye' },
        {
          kind: 'text',
          text: 'A színmű a Bizánci Birodalom **fennállásának utolsó napját** mutatja be: 1453-ban Konstantinápoly török ostrom alatt áll, a császári trónteremben dől el a város sorsa. **Konstantin császár** gyenge, a környezete hízelgő udvaroncokból és önző érdekekből áll. **Iréne császárné** szépsége a hatalom eszköze, és csak a férfi mellett tudja meghatározni magát: amikor a császár elbukik, leteszi a koronát, és a győztes szultán felé fordul. **Herma**, az árva apród (aki valójában lány) a hűség és a szolgálat megtestesítője. A császár a város védelmében kemény döntést hoz: a források szerint kivégezteti a török követet, Ahmedet, ezzel a városra zúdítja a szultán bosszúját. Konstantin elesik, Herma pedig a halott császár fölött a tőrrel vet véget az életének. A korona rákerül, de nem a hatalom, hanem a **hűség jutalma**.',
        },
        {
          kind: 'compare',
          title: 'Iréne és Herma',
          columns: ['Iréne', 'Herma'],
          rows: [
            {
              label: 'Szerepe',
              cells: ['császárné, a hatalom és szépség', 'apród, valójában árva lány'],
            },
            { label: 'Jelkép', cells: ['hatalom, látszat, önérdek', 'szolgálat, hűség, szerelem'] },
            {
              label: 'A végén',
              cells: ['leteszi a koronát, új „uralkodót” keres', 'meghal a császár mellett'],
            },
            { label: 'Ellentét', cells: ['„koronás virág”', '„hervadó szép virág”'] },
          ],
        },
        { kind: 'heading', text: 'Értelmezés' },
        {
          kind: 'keypoints',
          items: [
            '**Műfaj:** háromfelvonásos színmű. A szerző szerint nem történelmi dráma, mert a szereplők inkább **általános emberi típusok** (hatalom, hűség, árulás).',
            '**Világlátás:** a hanyatló, intrikákkal és gyávasággal teli birodalom saját hibájából bukik meg. A közösség erkölcsi állapota előbb pusztul, mint a falak.',
            '**Korstílus:** a **szecesszió** dekoratív, jelképes nyelve: színek, virágok, ellentétek, pompás látomások (Iréne látomásai: tigris, sárkány).',
            '**Szerkezet:** zárt tér (a trónterem), tömör idő (egyetlen nap), egyre fokozódó feszültség: ez a klasszikus drámai szerkesztés.',
            '**Aktualitás:** a mű nem a múlt kedvéért születik. Egy tanulmány szerint Herczeg eredetileg magyar tárgyú drámát tervezett *Mohács előtt* címmel, és a történetet Bizáncba helyezte át. A közönség a mai korra vonatkoztatva értelmezte a hanyatlás és a veszély témáját.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Poétikai összevetés (emelt).** A Bizánc női szereplői szándékosan ellenpontozott párok. Az **Iréne** név Kisfaludy Károly *Irene* című szomorújátékának (1820) címszereplőjére emlékeztet, aki a szultánnal kerül kapcsolatba, de Kisfaludynál a lány áldozatot vállal, Herczegnél az Iréne figura a hatalom felé fordul. A Bizánc és a **Pogányok** (Herczeg 1902-es regénye, a magyar kereszténység felvételének korába helyezett történet) hasonló kérdést tesz fel: mi történik egy közösséggel, amikor régi rendje összeomlik. Az *Az élet kapuja* ennek a sorozatnak a közvetlen rokona.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel (Színház és dráma, illetve Életművek): a *Bizánc* bemutatása cselekmény, szereplők, műfaj és üzenet szerint.',
            'Irodalmi feladatlap: műnem és műfaj felismerése, szereplő és helyszín párosítása, a korstílus megnevezése.',
            'Műértelmező szöveg: drámarészlet (például Iréne vagy Herma szavai) elemzése: szereplők, jelképek, hangnem, dramaturgiai szerep.',
          ],
        },
        {
          kind: 'example',
          title: 'Modellválasz-vázlat: Herma szerepe',
          problem: 'Mutasd be Herma alakját és szerepét a Bizánc című drámában. (kb. 200 szó)',
          solution:
            '**Bevezetés:** Herczeg 1904-es színműve Konstantinápoly utolsó napján játszódik. **Herma:** a császár apródja, valójában lány; a hűség, szolgálat és áldozat megtestesítője. **Ellenpont:** Iréne, aki a hatalomhoz és a szépséghez ragaszkodik, és a győztest választja. **Fordulópont:** Herma a halott császár fölött a tőrrel öli meg magát; a korona a hűség jutalma. **Jelentés:** a bukás pillanatában is vannak értékek, de a birodalmat már nem menti meg senki. **Zárás:** a Bizánc a szecesszió jelképes nyelvén mondja el, hogy a hanyatló közösség elbukik.',
        },
        {
          kind: 'warning',
          text: 'A *Bizánc* nem regény és nem tudományos történelmi leírás. A dráma szereplői közül sokan költöttek vagy általános típusok. Ne mondd rá, hogy a történelmi események pontos dokumentuma.',
        },
        {
          kind: 'tip',
          text: 'Ha Herczeg drámájáról kell beszélni, mindig kapcsold össze a **dekadencia**, az **árulás** és a **hűség** témáját, és említsd a **szecessziós** stílust. Ez a három fogódzó elég egy 15 perces felelethez.',
        },
      ],
      topicMatch: ['herczeg', 'bizánc'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Mikor játszódik a Bizánc cselekménye?',
          options: [
            'A honfoglalás idején',
            'Konstantinápoly eleste előtt, 1453-ban',
            'A Rákóczi-szabadságharc idején',
            'Mohács után, 1526-ban',
          ],
          answer: 1,
          explanation:
            'A színmű Konstantinápoly bukásának napján, 1453-ban játszódik, a trónteremben.',
        },
        {
          question: 'Mi Herma szerepe a drámában?',
          options: [
            'A szultán követe',
            'A genovai zsoldosvezér',
            'A császár hű apródja, aki az életét is feláldozza érte',
            'A patriarcha',
          ],
          answer: 2,
          explanation:
            'Herma a hűség és szolgálat megtestesítője: a halott császár mellett vet véget az életének.',
        },
        {
          question: 'Milyen műfajú a Bizánc a szerző megjelölése szerint?',
          options: [
            'Színmű három felvonásban',
            'Szomorújáték öt felvonásban',
            'Verses mese',
            'Komikus eposz',
          ],
          answer: 0,
          explanation:
            'Herczeg „színműnek” nevezte, és nem „történelmi drámának”, mert a szereplők általános emberi típusok.',
        },
        {
          question: 'Melyik színházban volt a Bizánc ősbemutatója?',
          options: ['Vígszínház', 'Népszínház', 'Nemzeti Színház', 'Operaház'],
          answer: 2,
          explanation: 'A színmű 1904. április 22-én került színre a budapesti Nemzeti Színházban.',
        },
        {
          question: 'Melyik korstílus jegyei jellemzik a Bizánc nyelvét és képeit?',
          options: ['Klasszicizmus', 'Barokk', 'Realizmus', 'Szecesszió'],
          answer: 3,
          explanation:
            'A dekoratív, jelképes képek, a színek és ellentétek a szecesszió stílusjegyei.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Bizánc (Herczeg Ferenc)', url: wiki('Herczeg Ferenc Bizánc színmű') },
        { label: 'Wikipédia: Nemzeti Színház', url: wiki('Nemzeti Színház Budapest története') },
        { label: 'Wikipédia: Szecesszió', url: wiki('szecesszió irodalom') },
      ],
    },
    {
      id: 'herczeg-palyakep-fogadtatas-utoelet',
      subject: 'magyar',
      unitId: 'herczeg',
      title: 'Pályaszakaszok, fogadtatás, vita és utóélet',
      level: 'emelt',
      requirement: {
        emelt:
          'A pályaszakaszokat jellemző főbb témák, kérdésfeltevések; a pályaképre ható irányzatok és szellemi kötődések; a művek hatása, fogadtatása egy-két példa alapján; a szerző utóélete, helye és hatása az irodalmi-kulturális hagyományban; különféle kritikák, interpretációk.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A pálya három szakasza: **1.** az 1890-es évek: szórakoztató, dzsentri-témájú próza és első drámák; **2.** a századforduló utáni **történelmi fordulat** (Pogányok, Ocskay brigadéros, Bizánc); **3.** a világháborúk közötti évek: nagyobb közéleti szerep, történelmi és társadalmi elbeszélések, az emlékiratok.',
            'A kortársak közül **Ady, Babits** és **Szabó Dezső** bírálta; mások (például Szekfű Gyula, Schöpflin Aladár) a dzsentrivilág tükrözőjeként vagy társadalomkritikusként értékelték.',
            '1945 után az életműve háttérbe szorult, műveit évtizedekig nem adták ki. Az 1980-as évektől újra megjelent.',
            'A **2020-as tantervbe** a kötelező szerzők közé került; ez heves vitát váltott ki.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A pálya szakaszai' },
        {
          kind: 'compare',
          title: 'Három pályaszakasz',
          columns: ['Időszak', 'Jellemző művek és témák'],
          rows: [
            {
              label: '1890-es évek',
              cells: [
                'indulás, népszerűség',
                '*Fenn és lenn* (1890), *A Gyurkovics-lányok* (1893), *A dolovai nábob leánya* (1893): dzsentri, katonai élet, humor, szerelmi történetek',
              ],
            },
            {
              label: '1900–1914',
              cells: [
                'történelmi fordulat',
                '*Ocskay brigadéros* (1901), *Pogányok* (1902), *Bizánc* (1904): nagy kérdések, hatalom, árulás, hűség, a közösség sorsa',
              ],
            },
            {
              label: '1914–1945',
              cells: [
                'háború, közélet',
                '*A hét sváb* (1916), *Az élet kapuja* (1919/1920), *Ádám, hol vagy?* (1935), *Pro libertate!* (1936), *Emlékezéseim* (1933–1939)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**A Gyurkovics-lányok** (1893) a korai, szellemes, mulatságos társasági próza mintája: az anya a lányait házasítja ki, a mű humorát a dzsentri-világ finom iróniája adja. Folytatása is született (*A Gyurkovics-fiúk*). A **Pogányok** (1902) a magyarság kereszténység felé fordulásának korába helyezett történelmi regény. Ezekkel szemben **az Élet kapuja** és a **Bizánc** már a hatalmi és nemzetsors-kérdésekre épít.',
        },
        {
          kind: 'text',
          text: 'A szerző ráhatása és kötődései: a **Jókai–Mikszáth**-féle magyar elbeszélő hagyomány, a bécsi és francia társalgási próza és színmű, a **szecesszió** díszítő stílusa. Szellemi irányát a **nemzeti-konzervatív** gondolkodás határozta meg, amelynek a közéleti szerepei is kifejezik.',
        },
        { kind: 'heading', text: 'Fogadtatás és viták' },
        {
          kind: 'text',
          text: 'Herczeg a maga korában rendkívül népszerű volt: a művei több nyelvre lefordultak, az 1920-as évek végén nagy gyűjteményes kiadásban (*Munkái*) jelentek meg a művei. Az Akadémia 1925 és 1927 között Nobel-díjra jelölte *Az élet kapuja* alapján. A kortársi fogadtatás megosztott volt:',
        },
        {
          kind: 'keypoints',
          items: [
            '**Bírálók:** Ady, Babits és Szabó Dezső kritikusan nyilatkoztak róla. A gyakori vád: a dzsentri életmódot romantizálta, és túl elnézően ábrázolta.',
            '**Elismerők:** Schöpflin Aladár (1933) a polgári-dzsentri értékekkel való összhangját emelte ki; Szekfű Gyula társadalomkritikus írónak látta, aki leleplezi a dzsentrivilág látszatait; Kornis Gyula a magyar jellegét hangsúlyozta.',
            '**Későbbi kritika:** Barta János (1955) szerint a célja a szórakoztatás volt, és csak kisebb humoros-szatirikus művei maradandóak. Rónay György a *Simon Zsuzsát* naturalista alkotásnak, az *Élet kapuját* gyengébbnek ítélte.',
          ],
        },
        { kind: 'heading', text: 'Utóélet és a 2020-as vita' },
        {
          kind: 'text',
          text: '1945 után Herczeg műveit hosszú ideig nem adták ki, így az irodalmi tudat szélére került. A 2020-as Nemzeti alaptanterv, amelynek alapján a kerettantervek készültek, a kötelező szerzők közé sorolta. A döntésről **megoszlottak a vélemények**: egyesek az elfeledett, olvasmányos író visszahelyezésének tartották, mások a politikai szerepei miatt vagy az irodalmi érték hiányára hivatkozva bírálták. Az irodalomtörténészek véleménye is eltérő: van, aki szerint a szórakoztató művei (például *A Gyurkovics-lányok*) értékesebbek, mint a kanonizált történelmi művek, mások a *Pogányokat* vagy *A hét svábot* emelik ki.',
        },
        {
          kind: 'text',
          text: 'Az írói hagyatékból több adaptáció is született: a *Pogányokat* 1937-ben megfilmesítették, a *Bizánc*ból 2014-ben opera készült (zene: Selmeczi György). 2019-től Herczeg Ferenc-díj is létezik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szóbeli: „Mutasd be Herczeg Ferenc pályáját és életművét két-három mű alapján!”',
            'Kritikák, interpretációk: hogyan ítélték meg a kortársak, a későbbi irodalomtörténet, és mi az, ami vitatott?',
            'Utóélet: tiltás vagy háttérbe szorítás 1945 után, újrakiadás, a mai kanonizáció.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondj ítéletet a szerző politikai szerepeiről, hanem tényeket és véleményeket állíts szembe. A vizsgán az számít, hogy különbséget teszel **ténymegállapítás** és **értékítélet** között, és hogy forrással vagy szerzővel kapcsolod a véleményeket.',
        },
        {
          kind: 'tip',
          text: 'Vázlat egy emelt feleletre: **1.** életút és közéleti szerepek (3 tény); **2.** pályaszakaszok (3 mű); **3.** egy mű részletesen (*Az élet kapuja* vagy *Bizánc*); **4.** fogadtatás (két ellentétes vélemény); **5.** utóélet (1945 után, 2020).',
        },
      ],
      topicMatch: ['herczeg'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik műve alapján jelölte az Akadémia Nobel-díjra Herczeg Ferencet?',
          options: ['A Gyurkovics-lányok', 'Bizánc', 'Az élet kapuja', 'Fenn és lenn'],
          answer: 2,
          explanation:
            'Az Akadémia az 1920-as években Az élet kapuja alapján terjesztette fel Herczeget a Nobel-díjra.',
        },
        {
          question: 'Melyik pályaszakaszhoz tartozik a Bizánc (1904)?',
          options: [
            'Az 1890-es évek szórakoztató prózájához',
            'Az emlékiratokhoz',
            'A világháború utáni publicisztikához',
            'A századforduló utáni történelmi fordulathoz',
          ],
          answer: 3,
          explanation:
            'A Pogányok, az Ocskay brigadéros és a Bizánc együtt jelzik a történelmi tárgyak felé fordulást.',
        },
        {
          question: 'Mi történt Herczeg műveivel 1945 után?',
          options: [
            'Kötelező olvasmányok lettek',
            'Évtizedekig nem adták ki őket',
            'Külföldön betiltották őket',
            'Az Akadémia díjat adott érte',
          ],
          answer: 1,
          explanation:
            'A műveit 1945 után hosszú ideig nem jelentették meg, az 1980-as évektől lehetett újra kiadni.',
        },
        {
          question: 'Kik bírálták a kortársak közül Herczeget?',
          options: [
            'Ady, Babits és Szabó Dezső',
            'Jókai és Mikszáth',
            'Arany János és Petőfi',
            'József Attila és Illyés Gyula',
          ],
          answer: 0,
          explanation:
            'A kortársi kritikusok között Ady, Babits és Szabó Dezső szerepel, a leggyakoribb vád a dzsentri idealizálása volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Herczeg Ferenc', url: wiki('Herczeg Ferenc író') },
        { label: 'Wikipédia: A Gyurkovics-lányok', url: wiki('A Gyurkovics-lányok') },
        { label: 'Wikipédia: Pogányok (regény)', url: wiki('Herczeg Ferenc Pogányok') },
      ],
    },
  ],
};

export default unit;
