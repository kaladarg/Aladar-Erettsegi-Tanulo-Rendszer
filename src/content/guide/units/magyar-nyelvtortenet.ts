import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv, 2. témakör: A magyar nyelv története. */
const unit: GuideUnit = {
  id: 'nyelvtortenet',
  subject: 'magyar',
  order: 4,
  title: 'A magyar nyelv története',
  requirementRef: 'Nyelv 2. A magyar nyelv története',
  intro:
    'A nyelv folyamatosan változik: ennek nyomait a nyelvemlékekben, a rokon nyelvekben és a szókincsben találod meg. Ebben a témakörben a nyelv változásával, a magyar nyelv rokonságával, a nyelvtörténeti korszakokkal és nyelvemlékekkel, a nyelvújítással és a szókészlet rétegeivel foglalkozunk.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Magyar nyelv, 2. témakör: A magyar nyelv története). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'nyelvtortenet-valtozas-es-allandosag',
      subject: 'magyar',
      unitId: 'nyelvtortenet',
      title: 'A nyelv mint történeti képződmény',
      level: 'kozep',
      requirement: {
        kozep:
          'Változás és állandóság a nyelvben. A szókészlet változása a magyar nyelv történetében.',
        emelt:
          'Szinkrón és diakrón kutatási módszer. Összehasonlító nyelvszemlélet: nyelvünk helye a világban.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A nyelv **történeti képződmény**: a közösség használata közben folyamatosan **változik**, mégis megmarad érthetőnek, mert a változás lassú.',
            '**Állandó** a nyelv rendszer jellege és alapvető szókincse, **változik** a hangrendszer, a nyelvtan, a szókincs és a jelentés.',
            'A szókészlet a leggyorsabban változik: **új szavak** keletkeznek (*internet*), mások **kihalnak** (régi tárgyak nevei), megint mások **jelentést váltanak** (*egér*).',
            'A változás oka a **társadalmi, technikai, műveltségi változás**, a más nyelvekkel való érintkezés és a nyelvhasználók igényei.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nyelvi változás',
              text: 'A nyelv elemeinek vagy szabályainak tartós megváltozása a használat során.',
            },
            {
              term: 'archaizmus',
              text: 'Elavult szó vagy kifejezés, amelyet ma már alig használunk (például *tarisznya* helyett a *hátizsák*).',
            },
            {
              term: 'neologizmus',
              text: 'Új szó vagy új jelentés, amely nemrég került a nyelvbe (például *szelfi*).',
            },
            {
              term: 'szinkrón nyelvszemlélet',
              text: 'A nyelvet egy adott időpontban, állapotában vizsgálja.',
              emelt: true,
            },
            {
              term: 'diakrón nyelvszemlélet',
              text: 'A nyelv időbeli változását, fejlődését vizsgálja.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Változás és állandóság' },
        {
          kind: 'text',
          text: 'Egy nyelv soha nem „kész”: minden nemzedék kicsit másképp beszél, mint az előző. A változás **lassú**, ezért a beszélők nem veszik észre, a nyelv mégis alkalmas marad a kommunikációra. Ha viszont százötven-kétszáz évet ugrunk vissza, már feltűnnek a különbségek, ezer évvel korábbról pedig csak tanulva értjük meg a szöveget.',
        },
        {
          kind: 'text',
          text: 'A nyelvben **állandó** az, hogy rendszer marad: a hangok, a szóelemek és a mondatszerkesztés szabályai összefüggenek. Változhat a rendszer egy része (például egy hang eltűnik, egy ragtípus kihal), de a nyelv közben is működik. A változás belső (a rendszer egyszerűsödik, kiegyenlítődik) és külső (idegen hatás, társadalmi igény) okokra vezethető vissza.',
        },
        { kind: 'heading', text: 'A szókészlet változása' },
        {
          kind: 'text',
          text: 'A szókincsben tükröződik a közösség élete. Ha új tárgy, fogalom jelenik meg, új név kell rá; ha egy tárgy kimegy a használatból, a neve is kikopik vagy szűk körben él tovább.',
        },
        {
          kind: 'compare',
          title: 'A szókészlet változásának módjai',
          columns: ['Mi történik', 'Példa'],
          rows: [
            {
              label: 'új szó keletkezik',
              cells: ['szóalkotással vagy átvétellel', '*kerékpár*, *internet*, *telefon*'],
            },
            {
              label: 'szó kihal',
              cells: [
                'a jelölt dolog eltűnik vagy elavul',
                'régi mértékegységek, foglalkozások nevei',
              ],
            },
            {
              label: 'jelentés változik',
              cells: ['a szó új jelentést kap', '*egér* (állat és számítógépes eszköz)'],
            },
            {
              label: 'idegen szó honosodik',
              cells: ['hangalakban alkalmazkodik a magyarhoz', '*fotel*, *kávé*'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A nyelvészet kétféleképpen vizsgálhatja a nyelvet. A **szinkrón** (leíró) szemlélet egy adott korszak nyelvállapotát írja le: például a mai magyar hangrendszert. A **diakrón** (történeti) szemlélet azt követi, hogyan változott a nyelv az időben: például hogyan alakult ki a névelő. A kettő kiegészíti egymást: a mai nyelvállapot sok sajátosságát csak a történeti háttér magyarázza meg.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **összehasonlító nyelvszemlélet** a nyelveket egymással veti össze: a rokon nyelvek közös vonásaiból következtet az ősnyelvre és a kapcsolatokra. Ebből adódik nyelvünk helye a világ nyelvei között (lásd a következő oldalt: a magyar nyelv rokonsága).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegrészlet (régi vagy mai) alapján kell felismerni a nyelvi változást: elavult szó, új szó, jelentésváltozás.',
            'Szóbeli tételben: mutasd be példákkal, hogy mi változik és mi marad állandó a nyelvben.',
            'Emelt szinten: a szinkrón és a diakrón megközelítés különbsége egy konkrét példán.',
          ],
        },
        {
          kind: 'warning',
          text: 'A nyelvi változás nem romlás! A tanári válaszban kerüld az „elromlik a nyelv” megfogalmazást: a változás természetes, a nyelv a közösség igényeihez igazodik.',
        },
        {
          kind: 'tip',
          text: 'A feleletben mindig hozz **példákat** a három szintről: hang (kiejtés), nyelvtan (rag, igeidő) és szókincs. A szókincsi példa a legkönnyebb, ezzel kezdd.',
        },
      ],
      topicMatch: ['nyelvtörténet', 'nyelvi változás'],
      quiz: [
        {
          question: 'A nyelv mely része változik a leggyorsabban?',
          options: ['A hangrendszer', 'A szókészlet', 'A mondattani szabályok', 'A ragrendszer'],
          answer: 1,
          explanation:
            'A szókészlet követi legközvetlenebbül a társadalmi és technikai változást, ezért változik a leggyorsabban.',
        },
        {
          question: 'Melyik példa jelentésváltozásra utal?',
          options: [
            'A *kerékpár* szó megalkotása',
            'Az *egér* szó új jelentése a számítástechnikában',
            'A *fotel* átvétele',
            'A *telefon* szó nemzetközi elterjedése',
          ],
          answer: 1,
          explanation: 'Az *egér* ugyanaz a szó maradt, de egy új jelentést kapott.',
        },
        {
          question: 'Mit jelent az archaizmus?',
          options: [
            'Új szó',
            'Idegen eredetű szó',
            'Elavult szó vagy kifejezés',
            'Nyelvjárási szó',
          ],
          answer: 2,
          explanation: 'Az archaizmus a nyelvből kikopó, elavult elem.',
        },
        {
          question: 'Melyik szemlélet vizsgálja a nyelv időbeli változását?',
          options: ['szinkrón', 'diakrón', 'pragmatikai', 'stilisztikai'],
          answer: 1,
          explanation:
            'A diakrón nyelvészet a nyelv történetét, változását vizsgálja; a szinkrón egy adott időpont állapotát.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nyelvváltozás', url: wiki('Nyelvi változás') },
        {
          label: 'Wikipédia: Szinkrón és diakrón nyelvészet',
          url: wiki('szinkrón diakrón nyelvészet'),
        },
      ],
    },
    {
      id: 'nyelvtortenet-nyelvrokonsag',
      subject: 'magyar',
      unitId: 'nyelvtortenet',
      title: 'A magyar nyelv rokonsága',
      level: 'kozep',
      requirement: {
        kozep: 'A magyar nyelv rokonságának elméletei.',
        emelt:
          'A 19. század versengő elméletei, az utóbbi évtizedek törekvései a származási modellek felülvizsgálatára („család” és „fa” metaforák kritikája, újabb régészeti és más segédtudományok kutatásai).',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyar nyelv az **uráli nyelvcsaládba**, ezen belül a **finnugor** ágba tartozik, az **ugor** csoportban a **hanti** (osztyák) és a **manysi** (vogul) a legközelebbi rokona.',
            'Más rokonaink: a **finn**, az **észt**, a **lapp** (számi), a **mordvin**, a **cseremisz** (mari), a **votják** (udmurt) és a **zürjén** (komi) nyelv.',
            'A rokonságot **szabályos hangmegfelelések**, közös **alapszókincs** és a nyelvtani rendszer hasonlósága bizonyítja, nem a hasonló hangzású szavak.',
            'Rokonnyelvészeti úttörők: **Sajnovics János** (1770), **Gyarmathi Sámuel** (1799), **Reguly Antal**, **Hunfalvy Pál**, **Budenz József**.',
            'A nyelvrokonság **nyelvészeti** fogalom: nem azonos a népek genetikai vagy kulturális rokonságával.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nyelvcsalád',
              text: 'Közös ősnyelvből származó, szabályos megfelelésekkel összekapcsolható nyelvek csoportja.',
            },
            {
              term: 'alapnyelv (ősnyelv)',
              text: 'A rokon nyelvek közös, írásban nem maradt, összehasonlítással rekonstruált őse.',
            },
            {
              term: 'hangmegfelelés',
              text: 'A rokon nyelvek szavaiban szabályosan visszatérő hangkapcsolat (például a magyar *k* a finn *k*-nak felel meg a *kéz* – *käsi* párban).',
            },
            {
              term: 'nyelvrokonság',
              text: 'Közös eredet a nyelvek között, nem összetévesztendő a népek rokonságával.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A nyelvcsalád családfája' },
        {
          kind: 'text',
          text: 'A magyar nyelv az **uráli nyelvcsalád** tagja. Az uráli család két fő ága a **finnugor** és a **szamojéd**. A finnugor ágon belül a **balti-finn** (finn, észt), a **lapp**, a **volgai** (mordvin, mari), a **permi** (udmurt, komi) és az **ugor** nyelvek különíthetők el. Az ugor csoport: **hanti**, **manysi** és **magyar**.',
        },
        {
          kind: 'compare',
          title: 'Rokon szavak: magyar és finn',
          columns: ['Magyar', 'Finn'],
          rows: [
            { label: 'kéz', cells: ['kéz', 'käsi'] },
            { label: 'hal (állat)', cells: ['hal', 'kala'] },
            { label: 'víz', cells: ['víz', 'vesi'] },
            { label: 'vér', cells: ['vér', 'veri'] },
            { label: 'él', cells: ['él', 'elää'] },
          ],
        },
        {
          kind: 'text',
          text: 'Az ilyen szavak az **alapszókincshez** tartoznak (testrészek, természeti jelenségek, életműködések, rokonság), és a **hangmegfelelések** is szabályosak. Ez különbözteti meg őket az esetleges hasonlóságtól vagy az átvételtől.',
        },
        { kind: 'heading', text: 'A nyelvrokonság felfedezése' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1770',
              text: '**Sajnovics János** *Demonstratio* című művében a magyar és a lapp nyelv rokonságát igyekezett bizonyítani.',
            },
            {
              date: '1799',
              text: '**Gyarmathi Sámuel** *Affinitas* című műve a magyar és a finnugor nyelvek nyelvtani rokonságát tárgyalja.',
            },
            {
              date: '19. század',
              text: '**Reguly Antal** gyűjtőútjai (manysi nyelvanyag), **Hunfalvy Pál** és **Budenz József** munkája: a finnugor rokonság tudományos megalapozása.',
            },
          ],
        },
        { kind: 'heading', text: 'Elméletek és viták' },
        {
          kind: 'text',
          text: 'A 19. századra a finnugor elmélet vált a nyelvtudomány elfogadott álláspontjává. Az **ugor–török háború** néven ismert vitában (az 1870-es években) **Vámbéry Ármin** török–tatár rokonságot hirdetett, míg Hunfalvy Pál és Budenz József a finnugor elmélet mellett állt. A török nyelvekkel való kapcsolat valós, de **kölcsönzésen**, nem rokonságon alapul: a magyar szókincs sok ótörök jövevényszót őriz.',
        },
        {
          kind: 'text',
          text: 'Más elméletek (például a sumer, a hun vagy a székely rovásírás alapján kitalált rokonítások) **tudományosan nem megalapozottak**: nem igazolják szabályos hangmegfelelések és közös alapszókincs.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A 19. századi **versengő elméletek** (finnugor és török rokonság) mellett az utóbbi évtizedekben újabb kérdések merültek fel. A **családfamodell** (a nyelvek közös ősből ágaznak szét, mint egy fa ágai) leegyszerűsíti a valóságot: a nyelvek érintkeznek, átvesznek egymástól szavakat és szerkezeteket. Ezért javasolta például **Johannes Schmidt** a **hullámelméletet** (a változások hullámként terjednek a szomszédos nyelvek között). Az újabb kutatások a **régészet**, a **genetika** és más segédtudományok eredményeit is bevonják, hogy a népek és a nyelvek útját pontosabban rekonstruálják.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Fontos különbség: a „család” és a „fa” **metafora**, nem tény. A nyelvek rokonsága nem biológiai öröklődés, és a nyelvváltás vagy az érintkezés miatt egy nép nyelve és származása nem feltétlenül esik egybe.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Családfa vagy ábra kitöltése: hova tartozik a magyar nyelv, ki a legközelebbi rokona?',
            'Szópárok alapján annak megállapítása, hogy mi bizonyítja a rokonságot.',
            'Szóbeli tételben: a rokonság elméletei, a bizonyítékok, a vita.',
            'Emelt szinten: a családfamodell kritikája, a segédtudományok szerepe.',
          ],
        },
        {
          kind: 'example',
          title: 'Mit bizonyít a rokonságot?',
          problem:
            'Egy diák szerint a magyar és a török nyelv rokon, mert sok hasonló szó van bennük. Mit felelsz?',
          solution:
            '**1.** A hasonló szavak lehetnek **jövevényszavak**: az ótörök nyelvekkel a magyarok sokáig érintkeztek, ezért sok ótörök szót átvettünk (például *bor*, *búza*, *ökör*).\n**2.** A rokonságot **szabályos hangmegfelelések**, **alapszókincs** és **nyelvtani egyezések** bizonyítják, nem az egyes szavak.\n**3.** A magyar alapszókincs és nyelvtani rendszer a finnugor nyelvekkel mutat szabályos megfelelést.\n**Következtetés**: a török hatás átvételen alapul, a magyar nyelv finnugor.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a **nyelvi** és a **népi** rokonságot! A magyar nyelv finnugor, de ez nem jelenti azt, hogy a magyarság minden szempontból a finnekkel azonos eredetű. Ne állítsd azt sem, hogy a hasonló hangzású szavak már rokonságot bizonyítanak.',
        },
      ],
      topicMatch: ['nyelvrokonság', 'finnugor', 'nyelvtörténet'],
      quiz: [
        {
          question: 'Melyik nyelvcsaládba tartozik a magyar nyelv?',
          options: ['indoeurópai', 'altaji', 'uráli', 'sémi–hámi'],
          answer: 2,
          explanation:
            'A magyar az uráli nyelvcsalád finnugor ágába, azon belül az ugor csoportba tartozik.',
        },
        {
          question: 'Melyik két nyelv áll legközelebb a magyarhoz?',
          options: ['finn és észt', 'hanti és manysi', 'lapp és mordvin', 'török és tatár'],
          answer: 1,
          explanation:
            'A hanti (osztyák) és a manysi (vogul) a magyarral együtt az ugor nyelvek csoportját alkotja.',
        },
        {
          question: 'Mi bizonyítja igazán a nyelvrokonságot?',
          options: [
            'Néhány hasonló hangzású szó',
            'A szabályos hangmegfelelések és a közös alapszókincs',
            'A népek közös hagyományai',
            'A közös írásrendszer',
          ],
          answer: 1,
          explanation:
            'A rokonságot rendszeres megfelelések és közös alapszókincs igazolják, nem véletlen hasonlóságok.',
        },
        {
          question: 'Melyik szópár bizonyítja a magyar–finn rokonságot?',
          options: [
            '*kéz* – *käsi*',
            '*bor* – *viini*',
            '*asztal* – *pöytä*',
            '*fotel* – *nojatuoli*',
          ],
          answer: 0,
          explanation: 'A *kéz* – *käsi* alapszókincsbeli szópár, szabályos hangmegfelelésekkel.',
        },
        {
          question: 'Miért vitatható a „nyelvcsaládfa” modellje?',
          options: [
            'Mert a nyelvek nem változnak',
            'Mert a nyelvek érintkeznek és hatnak egymásra, nem csak ágaznak szét',
            'Mert nincs közös alapszókincs',
            'Mert az írásbeliség hiányzik',
          ],
          answer: 1,
          explanation:
            'A fa metafora leegyszerűsít: a nyelvek közti kölcsönhatást a hullámelmélet és az újabb kutatások is hangsúlyozzák.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Finnugor nyelvek', url: wiki('finnugor nyelvek') },
        { label: 'Wikipédia: Ugor–török háború', url: wiki('ugor-török háború') },
        { label: 'Wikipédia: Magyar nyelv', url: wiki('magyar nyelv eredete rokonsága') },
      ],
    },
    {
      id: 'nyelvtortenet-korszakok-nyelvemlekek',
      subject: 'magyar',
      unitId: 'nyelvtortenet',
      title: 'Nyelvtörténeti korszakok és nyelvemlékek',
      level: 'kozep',
      requirement: {
        kozep:
          'A magyar nyelv történetének fő korszakai. A nyelvtörténet forrásai: kézírásos és nyomtatott nyelvemlékek (pl. A tihanyi apátság alapítólevele, Halotti beszéd és könyörgés, Ómagyar Mária-siralom).',
        emelt:
          'Az ősmagyar, az ómagyar, a középmagyar korszak, az újmagyar kor jellemzőinek és nyelvtörténeti folyamatainak részletesebb ismerete.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyar nyelvtörténet fő korszakai: **ősmagyar kor** (a honfoglalásig), **ómagyar kor** (a honfoglalástól kb. 1526-ig), **középmagyar kor** (kb. 1526–1772) és **újmagyar kor** (kb. 1772-től).',
            'A **nyelvemlék** a nyelv egykori állapotát őrző írásos (vagy nyomtatott) szöveg, vagy szó.',
            '**Tihanyi apátság alapítólevele** (1055): az első olyan latin szöveg, amelyben összefüggő magyar nyelvű szókapcsolatok (58 magyar szó) szerepelnek.',
            '**Halotti beszéd és könyörgés** (1192 és 1195 között): az első összefüggő magyar nyelvű szöveg.',
            '**Ómagyar Mária-siralom** (13. század, kb. 1300): az első magyar nyelvű vers, a Leuveni kódexben maradt fenn.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1055',
              text: 'A tihanyi apátság alapítólevele (I. András király idejéből), latin szövegben magyar szavakkal és szókapcsolatokkal.',
            },
            { date: '1192–1195', text: 'A Halotti beszéd és könyörgés keletkezése (Pray-kódex).' },
            { date: '13. század (kb. 1300)', text: 'Ómagyar Mária-siralom (Leuveni kódex).' },
            {
              date: '1541',
              text: 'Sylvester János Újtestamentuma, az első magyar nyelven nyomtatott Újszövetség (Sárvár-Újsziget).',
            },
            { date: '1590', text: 'A Vizsolyi Biblia (Károli Gáspár fordítása).' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A nyelvtörténet korszakai' },
        {
          kind: 'compare',
          title: 'A magyar nyelv történeti korszakai',
          columns: ['Időszak', 'Jellemző'],
          rows: [
            {
              label: 'ősmagyar kor',
              cells: [
                'a finnugor egység felbomlásától a honfoglalásig',
                'írásbeli emlék nincs; török és iráni jövevényszavak',
              ],
            },
            {
              label: 'ómagyar kor',
              cells: [
                'a honfoglalástól (kb. 895) a 16. század elejéig (1526)',
                'latin betűs írásbeliség kezdetei, szláv jövevényszavak',
              ],
            },
            {
              label: 'középmagyar kor',
              cells: [
                'kb. 1526–1772',
                'reformáció, nyomtatás, anyanyelvű irodalom, bibliafordítások, török hatás',
              ],
            },
            {
              label: 'újmagyar kor',
              cells: [
                'kb. 1772-től',
                'nyelvújítás, a nyelv egységesülése, mai köznyelv kialakulása',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A korszakhatárokat a szakirodalom nem egységesen adja meg, ezért a határidők **hozzávetőlegesek**. A korszakhatárokat a nyelv és a magyarság történetének nagy fordulópontjai jelölik: a honfoglalás, a mohácsi csata (1526) és a magyar felvilágosodás kezdete.',
        },
        { kind: 'heading', text: 'Mi az a nyelvemlék?' },
        {
          kind: 'text',
          text: 'A nyelvemlék a nyelv egykori állapotát megőrző szöveg, vagy szó. A korai korokból **nem maradt fenn magyar nyelvű könyvanyag**: a magyar szavakat először **latin szövegek** őrizték meg (személy- és helynevek, oklevelek). Az írásbeliséget a **latin ábécé** tette lehetővé, de nem volt egységes helyesírás, ezért ugyanazt a hangot többféleképpen jelölték.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'A tihanyi apátság alapítólevele (1055)',
              text: 'I. András király adománylevele. A latin szövegben kb. 58 magyar szó áll, köztük a helyek és a határ leírása. Híres szókapcsolata: *feheruuaru rea meneh hodu utu rea*, vagyis „Fehérvárra menő hadi útra”.',
            },
            {
              name: 'Halotti beszéd és könyörgés (1192–1195)',
              text: 'Az első összefüggő magyar nyelvű szöveg, a Pray-kódexben maradt fenn. Egy temetési beszéd és az utána következő imádság. Kezdete: *Latiatuc feleym zumtuchel mic vogmuc*, vagyis „Látjátok, feleim, szemetekkel, mik vagyunk”.',
            },
            {
              name: 'Ómagyar Mária-siralom (kb. 1300)',
              text: 'Az első magyar nyelvű vers, a latin nyelvű siralom fordítása és átdolgozása. A Leuveni kódexben maradt fenn, 1922-ben találták meg Leuvenben. Fejlett rímelés, alliteráció és kétütemű sorok jellemzik.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az említett három emlék háromféle forrás: az **első** latin szövegbe ágyazott magyar szavakat, a **második** már összefüggő magyar prózát, a **harmadik** magyar nyelvű verset mutat. A középmagyar korban a **nyomtatás** és a reformáció hozta létre a nagy magyar nyelvű bibliafordításokat.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Nyelvemlék-részlet (például a Halotti beszéd kezdete) mai megfelelőjének megadása vagy a korszak felismerése.',
            'Időrendbe állítás: Tihanyi alapítólevél, Halotti beszéd, Ómagyar Mária-siralom.',
            'Szóbeli tételben: a nyelvtörténet forrásai, korszakai, a nyelvemlékek jellemzése.',
            'Emelt szinten: korszakokra jellemző nyelvi változások (névelő, igeidők, hangok), régi szövegek nyelvi vizsgálata.',
          ],
        },
        {
          kind: 'example',
          title: 'Régi szöveg értelmezése',
          problem:
            'Mit jelent a *Latiatuc feleym zumtuchel mic vogmuc* mondat, és milyen korszak szövege?',
          solution:
            '**Mai megfelelője**: „Látjátok, feleim, szemetekkel, mik vagyunk.”\n**Forrás**: a Halotti beszéd és könyörgés, 1192 és 1195 között keletkezett.\n**Korszak**: ómagyar kor; az első összefüggő magyar nyelvű szöveg.\n**Észrevétel**: a szöveg a latin betűkkel jelöli a magyar hangokat, a helyesírás még nem egységes (például *zumtuchel*).',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a három nyelvemléket! A Tihanyi alapítólevél latin szöveg magyar szavakkal (1055), a Halotti beszéd összefüggő magyar próza (1192–1195), az Ómagyar Mária-siralom magyar vers (kb. 1300).',
        },
      ],
      topicMatch: ['nyelvemlék', 'nyelvtörténet'],
      quiz: [
        {
          question: 'Melyik az első összefüggő magyar nyelvű szöveg?',
          options: [
            'A tihanyi apátság alapítólevele',
            'Ómagyar Mária-siralom',
            'Halotti beszéd és könyörgés',
            'A Vizsolyi Biblia',
          ],
          answer: 2,
          explanation:
            'A Halotti beszéd és könyörgés (1192–1195) az első összefüggő magyar nyelvű szöveg.',
        },
        {
          question: 'Mikor készült a tihanyi apátság alapítólevele?',
          options: ['896', '1055', '1192', '1526'],
          answer: 1,
          explanation: 'Az alapítólevél I. András idejéből, 1055-ből való.',
        },
        {
          question: 'Melyik az első magyar nyelvű vers?',
          options: [
            'Ómagyar Mária-siralom',
            'Halotti beszéd',
            'Tihanyi alapítólevél',
            'Vizsolyi Biblia',
          ],
          answer: 0,
          explanation:
            'Az Ómagyar Mária-siralom (13. század, kb. 1300) az első magyar nyelvű vers.',
        },
        {
          question: 'Melyik korszakhatár választja el az ómagyar és a középmagyar kort?',
          options: ['Honfoglalás', 'Mohácsi csata (1526)', 'Bessenyei fellépése', 'Trianon'],
          answer: 1,
          explanation:
            'A hagyományos korszakbeosztás az ómagyar kor végét az 1526-os mohácsi csatával jelöli.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Halotti beszéd és könyörgés',
          url: wiki('Halotti beszéd és könyörgés'),
        },
        { label: 'Wikipédia: Ómagyar Mária-siralom', url: wiki('Ómagyar Mária-siralom') },
        {
          label: 'Wikipédia: A tihanyi apátság alapítólevele',
          url: wiki('A tihanyi apátság alapítólevele'),
        },
      ],
    },
    {
      id: 'nyelvtortenet-nyelvujitas',
      subject: 'magyar',
      unitId: 'nyelvtortenet',
      title: 'A nyelvújítás',
      level: 'kozep',
      requirement: {
        kozep: 'A nyelvújítás lényege és jelentősége példák alapján.',
        emelt:
          'A nyelvújítás története, hatása, értékelése, az ortológus–neológus vita főbb állomásai és szereplői, a magyar nyelv sztenderdizációja.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **nyelvújítás** a 18. század végén kezdődő, a 19. század első felében kiteljesedő mozgalom, amely a magyar nyelvet minden területre (tudomány, irodalom, hétköznapi élet) alkalmassá akarta tenni.',
            'Fő alakja **Kazinczy Ferenc**; előzménye **Bessenyei György** fellépése, aki a magyar nyelv művelését hirdette.',
            'Mintegy **tízezer** új szó honosodott meg a nyelvben.',
            'A **neológusok** (megújítók) és az **ortológusok** (a régi nyelv védői) vitája a nyelvújítási harc.',
            'Eredménye: **gazdagabb szókincs** és a nyelv egységesülése (**sztenderdizáció**), a magyar mint hivatalos és tudományos nyelv.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'neológus', text: 'A nyelvújítás híve, az új szavak alkotását támogatta.' },
            {
              term: 'ortológus',
              text: 'A nyelvújítás mértéktelen szóalkotásának ellenzője, a nyelv hagyományos állapotának védője.',
            },
            {
              term: 'szóalkotás',
              text: 'Új szó létrehozása szóképzéssel, szóösszetétellel, szóelvonással stb.',
            },
            {
              term: 'sztenderdizáció',
              text: 'A nyelv egységes, mindenki által követett normájának (sztenderd) kialakulása.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért volt rá szükség?' },
        {
          kind: 'text',
          text: 'A 18. században a tudomány, a törvénykezés és a hivatalok nyelve nem a magyar volt. Az anyanyelv ezért nem fejlődött minden területen, és hiányoztak a szavai a tudományos, szakmai és irodalmi kifejezéshez. A nyelvújítók célja az volt, hogy a magyar alkalmas legyen minden gondolat kifejezésére, és közben **nemzeti nyelvvé** váljék a reformkor szellemében.',
        },
        { kind: 'heading', text: 'Hogyan alkottak új szavakat?' },
        {
          kind: 'compare',
          title: 'A nyelvújítás módszerei és példák',
          columns: ['Módszer', 'Példa'],
          rows: [
            {
              label: 'nyelvjárási szavak felhasználása',
              cells: ['tájszó kerül az általános nyelvbe', '*betyár*, *burgonya*, *hullám*'],
            },
            {
              label: 'régi szavak felelevenítése',
              cells: ['elfeledett szó újra használatba kerül', '*aggastyán*, *fegyelem*'],
            },
            { label: 'szóképzés', cells: ['meglévő tőből új szó', '*lazít*'] },
            { label: 'szóösszetétel', cells: ['két szó összekapcsolása', '*szemüveg*'] },
            { label: 'szóelvonás', cells: ['szóból rövidebb szót vonnak el', '*címer* → *cím*'] },
            {
              label: 'idegen szó magyarosítása',
              cells: ['az idegen szót a magyar hangrendszerhez igazítják', '*fauteuil* → *fotel*'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A nyelvújítók sok szót maguk alkottak, de nem mindegyik bizonyult életképesnek: sok erőltetett szó **nem honosodott meg**, és ezekről gúnyos írások is születtek.',
        },
        { kind: 'heading', text: 'Jelentősége' },
        {
          kind: 'keypoints',
          items: [
            'Hozzávetőleg tízezer új szó vált a nyelv részévé, főleg a tudomány, a mindennapi élet és az irodalom területén.',
            'A magyar alkalmassá vált a tudományos és hivatalos nyelvhasználatra; 1844-ben a magyar lett az ország hivatalos nyelve.',
            'A mozgalom elősegítette a nyelv egységesülését, a köznyelv és az irodalmi nyelv megszilárdulását.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A nyelvújítás története állomásokra bontható. **Bessenyei György** az 1770-es években hirdette az anyanyelv művelését. **Kazinczy Ferenc** a nyelvújítás vezéralakja, aki a nyelv megújítását az irodalmi ízlés megújításával kötötte össze. 1795-ben az ortológusok a *Debreceni Grammatikával* léptek fel a túlzásokkal szemben. **1811-ben** Kazinczy *Tövisek és virágok* című epigrammagyűjteménye élesítette ki a vitát; **1813-ban** a *Mondolat* című gúnyirat a nyelvújítás kudarcba fulladt szavait gúnyolta ki. A „harc” a **Magyar Tudós Társaság** (1825) és a **Kölcsey**, **Kazinczy** körének közeledésével csillapodott. A nyelvújítás lezárultának szokásos jelzése a **Magyar Nyelvőr** 1872-es megindulása.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **értékelés** kétoldalú: a nyelvújítás **gazdagította** a szókincset és hozzájárult a **nyelv egységesítéséhez** (sztenderdizáció), ugyanakkor túlzásai miatt sok mesterséges, életképtelen szó is született. Az **Akadémia** 1832-ben kiadott helyesírási szabályai a sztenderd nyelv kialakulását segítették.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szólista vagy szöveg alapján a nyelvújítás útján keletkezett szavak felismerése és a módszer megnevezése (szóképzés, összetétel, elvonás, tájszó).',
            'Szóbeli tételben: a nyelvújítás lényege, okai, módszerei és jelentősége példákkal.',
            'Emelt szinten: az ortológus–neológus vita szereplői és állomásai, az értékelés, a sztenderdizáció.',
          ],
        },
        {
          kind: 'example',
          title: 'Szóalkotási mód megállapítása',
          problem: 'Melyik módszerrel keletkezett a *szemüveg* és a *cím* a nyelvújítás idején?',
          solution:
            '**szemüveg**: **szóösszetétel**, a *szem* és az *üveg* összekapcsolásából.\n**cím**: **szóelvonás**, a *címer* szó elvonásával keletkezett.\nMás módszer: a *lazít* szóképzéssel jött létre a *laza* tőből.',
        },
        {
          kind: 'warning',
          text: 'A nyelvújítás nem kizárólag szóteremtés: tájszavak és régi szavak felhasználása is idetartozik. Ne mondd, hogy minden újonnan alkotott szó ma is használatos: sok kihalt.',
        },
        {
          kind: 'tip',
          text: 'Tanulj meg legalább **egy-egy példát** minden módszerhez, és a vita két oldalát (neológus: Kazinczy; ortológus: a nyelv hagyományát védők).',
        },
      ],
      topicMatch: ['nyelvújítás'],
      quiz: [
        {
          question: 'Ki volt a nyelvújítás vezéralakja?',
          options: ['Bessenyei György', 'Kazinczy Ferenc', 'Sylvester János', 'Pázmány Péter'],
          answer: 1,
          explanation:
            'A nyelvújítás vezéralakja Kazinczy Ferenc volt; Bessenyei a mozgalom előfutára.',
        },
        {
          question: 'Kik voltak az ortológusok?',
          options: [
            'A nyelvújítás hívei',
            'A nyelvújítás túlzásainak ellenzői, a hagyományos nyelv védői',
            'A nyelvemlékek kutatói',
            'Fordítók',
          ],
          answer: 1,
          explanation:
            'Az ortológusok a mértéktelen szóalkotást ellenezték, a neológusok a megújítást támogatták.',
        },
        {
          question: 'Melyik módszerrel keletkezett a *szemüveg* szó?',
          options: ['szóelvonás', 'szóösszetétel', 'tájszó átvétele', 'idegen szó magyarosítása'],
          answer: 1,
          explanation: 'A *szem* és az *üveg* összetételéből jött létre.',
        },
        {
          question: 'Melyik szó példa az idegen szó magyarosítására?',
          options: ['fotel', 'lazít', 'betyár', 'aggastyán'],
          answer: 0,
          explanation: 'A *fotel* a francia *fauteuil* magyarosított alakja.',
        },
        {
          question: 'Melyik művel kapcsolódik a vita kiéleződése 1811-hez?',
          options: ['Mondolat', 'Debreceni Grammatika', 'Tövisek és virágok', 'Magyar Nyelvőr'],
          answer: 2,
          explanation:
            'Kazinczy *Tövisek és virágok* című epigrammagyűjteménye 1811-ben élesítette a vitát.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nyelvújítás', url: wiki('nyelvújítás') },
        { label: 'Wikipédia: Kazinczy Ferenc', url: wiki('Kazinczy Ferenc') },
        { label: 'Wikipédia: Ortológus–neológus vita', url: wiki('ortológusok neológusok') },
      ],
    },
    {
      id: 'nyelvtortenet-szokeszlet-retegei',
      subject: 'magyar',
      unitId: 'nyelvtortenet',
      title: 'A szókészlet rétegei',
      level: 'kozep',
      requirement: {
        kozep:
          'A szókészlet rétegei: ősi örökség, belső keletkezésű elemek, jövevényszók, nemzetközi műveltségszók, idegen szavak.',
        emelt: 'A szókincs jelentésváltozásának főbb típusai, tendenciái.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Ősi örökség**: az uráli, finnugor, ugor korból származó szavak (*kéz*, *víz*, *él*, *hal*).',
            '**Belső keletkezésű elemek**: a magyar nyelvben szóalkotással létrejött szavak (*olvasó*, *kerékpár*, *csörög*).',
            '**Jövevényszavak**: más nyelvből átvett, a magyar hangrendszerhez és nyelvtanhoz alkalmazkodott szavak (*bor*, *kovács*, *polgár*).',
            '**Nemzetközi műveltségszavak** és **idegen szavak**: a nemzetközi műveltségszó több nyelvben azonos (*telefon*), az idegen szó még idegennek érződik (*party*).',
            'A szókészlet rétegei a nép **történetét** tükrözik: kikkel érintkeztek, mit tanultak tőlük.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ősi örökség',
              text: 'A rokon nyelvekkel közös, az alapnyelvből örökölt szavak.',
            },
            {
              term: 'belső keletkezésű szó',
              text: 'A magyarban képzéssel, összetétellel, szóelvonással, hangutánzással stb. létrejött szó.',
            },
            {
              term: 'jövevényszó',
              text: 'Idegen eredetű, de a magyar hangrendszerhez és ragozáshoz alkalmazkodott szó, amelyet már nem érzünk idegennek.',
            },
            {
              term: 'nemzetközi műveltségszó',
              text: 'Több nyelvben azonos alakú, főleg latin–görög eredetű szó, főként a tudomány és a technika területén.',
            },
            {
              term: 'idegen szó',
              text: 'Az átadó nyelv hangalakját és írásmódját megőrző szó, amelyet idegennek érzünk.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ősi örökség' },
        {
          kind: 'text',
          text: 'Az ősi szavak a legrégebbi réteget alkotják: **testrészek** (*kéz*, *szem*), **természeti jelenségek** (*víz*, *fa*), **életműködések** (*él*, *hal*), **rokonság** (*apa*). A szavak száma kicsi, de a mindennapi beszédben nagyon gyakoriak. A finnugor eredetet a rokon nyelvek megfelelései bizonyítják.',
        },
        { kind: 'heading', text: 'Belső keletkezésű szavak' },
        {
          kind: 'text',
          text: 'A magyar nyelv saját eszközeivel is alkot szavakat: **szóképzéssel** (*olvasó*), **szóösszetétellel** (*kerékpár*), **szóelvonással**, **hangutánzással** és **hangulatfestéssel** (*csörög*, *kakukk*). A nyelvújítás idején e módszerekkel rengeteg szó keletkezett.',
        },
        { kind: 'heading', text: 'Jövevényszavak' },
        {
          kind: 'text',
          text: 'A jövevényszavak rétegei megmutatják, hogy a magyarság kikkel érintkezett:',
        },
        {
          kind: 'compare',
          title: 'Jövevényszó-rétegek (példák)',
          columns: ['Átadó nyelv', 'Példák'],
          rows: [
            { label: 'iráni', cells: ['ősmagyar kori érintkezés', '*tehén*, *asszony*'] },
            {
              label: 'ótörök',
              cells: [
                'honfoglalás előtti és körüli kapcsolat; földművelés, állattartás, szőlészet',
                '*bor*, *búza*, *ökör*, *szőlő*',
              ],
            },
            {
              label: 'szláv',
              cells: [
                'a Kárpát-medencei együttélés; földművelés, kézművesség, egyházi élet',
                '*kovács*, *kasza*, *bárány*, *mák*, *karácsony*, *pap*',
              ],
            },
            { label: 'latin', cells: ['egyház, iskola, hivatal, tudomány', '*iskola*, *templom*'] },
            {
              label: 'német',
              cells: ['városi élet, kereskedelem, hadviselés', '*polgár*, *ostrom*'],
            },
            { label: 'török (oszmán)', cells: ['a török hódoltság kora', '*kávé*, *papucs*'] },
            {
              label: 'francia, angol',
              cells: ['újabb kor: divat, technika, sport', '*fotel*, *sport*'],
            },
          ],
        },
        { kind: 'heading', text: 'Nemzetközi műveltségszavak és idegen szavak' },
        {
          kind: 'text',
          text: 'A **nemzetközi műveltségszavak** több nyelvben azonos alakúak, főleg latin vagy görög eredetűek, és a tudomány, a technika, a közélet szavai (*biológia*, *telefon*, *demokrácia*, *internet*). Az **idegen szavak** írásmódjukban és kiejtésükben megőrzik az idegen jelleget (*party*, *shopping*), és sokszor van magyar megfelelőjük. Az idegen szavak idővel jövevényszóvá válhatnak.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A szókincs **jelentésváltozásának** főbb típusai: a **jelentésszűkülés** (a szó jelentése szűkebb körre vonatkozik), a **jelentésbővülés** (tágabb körre), a **jelentésátvitel** (metafora, metonímia, szinekdoché: például *egér* mint állat és számítógépes eszköz, *ablak* az épületen és a képernyőn), valamint a **jelentésemelkedés** és a **jelentésromlás** (a szó értékelő színezete javul vagy romlik). A jelentésváltozás tendenciája, hogy a szavak újabb és újabb használati körre bővülnek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szavak rétegbe sorolása: ősi örökség, jövevényszó, belső keletkezésű, idegen szó.',
            'Szövegben idegen szavak, nemzetközi műveltségszavak keresése, magyar megfelelőik megadása.',
            'Szóbeli tételben: a szókészlet rétegei és ami belőlük a nép történetéről kiderül.',
            'Emelt szinten: jelentésváltozás típusainak felismerése példákon.',
          ],
        },
        {
          kind: 'example',
          title: 'Rétegbe sorolás',
          problem:
            'Sorold rétegbe a következő szavakat: *kéz*, *kovács*, *kerékpár*, *shopping*, *telefon*.',
          solution:
            '*kéz*: **ősi örökség** (finnugor, a finn *käsi* rokona).\n*kovács*: **jövevényszó** (szláv eredetű).\n*kerékpár*: **belső keletkezésű** szó (összetétel).\n*shopping*: **idegen szó** (angol, idegen írásmóddal).\n*telefon*: **nemzetközi műveltségszó** (görög eredetű elemekből, sok nyelvben azonos).',
        },
        {
          kind: 'warning',
          text: 'A jövevényszót ne keverd az idegen szóval! A jövevényszó alkalmazkodott a magyarhoz és nem érezzük idegennek (*kávé*, *polgár*), az idegen szó még megőrizte az idegen alakját (*party*).',
        },
      ],
      topicMatch: ['szókészlet', 'jövevényszó'],
      quiz: [
        {
          question: 'Melyik szó tartozik az ősi örökséghez?',
          options: ['fotel', 'kéz', 'iskola', 'sport'],
          answer: 1,
          explanation: 'A *kéz* finnugor eredetű alapszó (finn *käsi*).',
        },
        {
          question: 'Melyik szó szláv jövevényszó?',
          options: ['bor', 'kovács', 'fotel', 'polgár'],
          answer: 1,
          explanation:
            'A *kovács* szláv eredetű jövevényszó; a *bor* ótörök, a *fotel* francia, a *polgár* német eredetű.',
        },
        {
          question: 'Melyik példa az idegen szóra?',
          options: ['kávé', 'iskola', 'shopping', 'ostrom'],
          answer: 2,
          explanation: 'A *shopping* még idegen hangalakú és írású, a többi jövevényszó.',
        },
        {
          question: 'Mi a nemzetközi műveltségszó?',
          options: [
            'Több nyelvben azonos alakú, főleg latin–görög eredetű szó',
            'Csak a magyarban létező szó',
            'Nyelvjárási szó',
            'Hangutánzó szó',
          ],
          answer: 0,
          explanation:
            'Ilyen például a *telefon* vagy a *biológia*: sok nyelvben közös a hangalakja.',
        },
        {
          question: 'Milyen jelentésváltozás az *egér* szó új, számítástechnikai jelentése?',
          options: [
            'jelentésszűkülés',
            'jelentésátvitel (metafora)',
            'jelentésromlás',
            'jelentésemelkedés',
          ],
          answer: 1,
          explanation:
            'A számítógépes eszköz az alakja miatt kapta az állat nevét: hasonlóságon alapuló jelentésátvitel.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Jövevényszó', url: wiki('jövevényszó') },
        { label: 'Wikipédia: A magyar szókincs rétegei', url: wiki('magyar szókincs rétegei') },
        { label: 'Wikipédia: Jelentésváltozás', url: wiki('jelentésváltozás') },
      ],
    },
    {
      id: 'nyelvtortenet-emelt-folyamatok-regi-szovegek',
      subject: 'magyar',
      unitId: 'nyelvtortenet',
      title: 'Nyelvtörténeti folyamatok és régi szövegek',
      level: 'emelt',
      requirement: {
        emelt:
          'A nyelvtörténeti korszakokat jellemző változások néhány példája a hangrendszerből, a nyelvtani rendszerből. Nyelvtörténeti-nyelvtudományi kézikönyvek (pl. TESZ). Néhány szöveg nyelvi szempontú bemutatása a régi magyar irodalomból (pl. Pázmány Péter, Mikes Kelemen írásai).',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **ómagyar korban** alakult ki a **határozott névelő**; az **elbeszélő múlt idő** (*látá*, *mondá*) később kiveszett.',
            'Az **ikes ragozás** visszaszorult: ma már csak néhány igénél él (*eszik*, *iszik*).',
            'A régi írás megkülönböztetett **zárt ë** hangot, ez a köznyelvből kiveszett.',
            '**Pázmány Péter** prózája latinos, hosszú **körmondatokra** épül; **Mikes Kelemen** *Törökországi levelei* közvetlen, élőbeszédszerű hangot mutatnak.',
            'Kézikönyv: **TESZ** (*A magyar nyelv történeti-etimológiai szótára*): a szavak eredetét és első előfordulását adja meg.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Változások a hangrendszerben és a nyelvtanban' },
        {
          kind: 'text',
          text: 'Az **ómagyar korban** alakult ki a **határozott névelő** (ősmagyarban nem volt), ekkor még élt az **elbeszélő múlt idő** (például *látá*, *mondá*), amely a mai nyelvből kiveszett. Az **ikes ragozás** az idők során visszaszorult (a mai nyelvben csak néhány igénél maradt meg: *eszik*, *iszik*). A hangrendszerben a **zárt ë** hang, amelyet a régi írás még megkülönböztetett, a köznyelvből kiveszett.',
        },
        { kind: 'heading', text: 'Az életmód és a szókincs összefüggései' },
        {
          kind: 'text',
          text: 'A szókészlet az anyagi és szellemi műveltséget tükrözi. A földművelés szavai (*búza*, *szőlő*, *kasza*) a letelepült életmódot, a hadviselés és a városi élet szavai (*ostrom*, *polgár*) a középkori kapcsolatokat, a technikai szavak (*telefon*, *internet*) a modern korszakot idézik. A szavak eredetét a TESZ-ben követheted nyomon.',
        },
        { kind: 'heading', text: 'Régi szövegek nyelvi szempontú vizsgálata' },
        {
          kind: 'compare',
          title: 'Két régi író nyelvhasználata',
          columns: ['Pázmány Péter (17. század)', 'Mikes Kelemen (18. század)'],
          rows: [
            {
              label: 'mondatszerkesztés',
              cells: [
                'hosszú, gondosan szerkesztett körmondat, latin minta',
                'rövidebb, természetes mondatok',
              ],
            },
            {
              label: 'hangvétel',
              cells: ['érvelő, szónoki, meggyőző', 'közvetlen, élőbeszédszerű, személyes'],
            },
            { label: 'műfaj', cells: ['vitairat, prédikáció', 'levél (*Törökországi levelek*)'] },
          ],
        },
        {
          kind: 'text',
          text: 'Régi szöveg elemzésekor figyeld a **szókincset** (archaizmusok, idegen hatás), az **írásmódot**, a **nyelvtani alakokat** (régi ragok, igeidők) és a **mondatszerkesztést**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Régi szövegrészlet nyelvi jellemzőinek megállapítása (archaikus alakok, mondatszerkezet).',
            'Korszakra jellemző nyelvi változás megnevezése példával (névelő, igeidő, hang).',
            'Nyelvtörténeti kézikönyv (például TESZ) szócikkének értelmezése.',
          ],
        },
        {
          kind: 'tip',
          text: 'Régi szövegnél ne csak a szavakat vizsgáld: nevezd meg a **korszakot**, a **műfajt** és a mondatszerkesztést is, és mindegyikhez hozz egy konkrét példát a szövegből.',
        },
      ],
      topicMatch: ['nyelvtörténet', 'nyelvemlék'],
      quiz: [
        {
          question: 'Mi jellemzi Pázmány Péter prózáját?',
          options: [
            'Rövid, élőbeszédszerű mondatok',
            'Latin mintájú, hosszú körmondatok',
            'Verses forma',
            'Nyelvjárási szavak',
          ],
          answer: 1,
          explanation:
            'Pázmány gondosan szerkesztett, latinos körmondatai a régi magyar próza csúcsát jelentik.',
          emelt: true,
        },
        {
          question: 'Melyik nyelvtani elem alakult ki az ómagyar korban?',
          options: [
            'a határozott névelő',
            'az ikes ragozás',
            'a feltételes mód',
            'az -ni infinitivus',
          ],
          answer: 0,
          explanation: 'A határozott névelő az ómagyar korban jött létre; ősmagyarban nem volt.',
          emelt: true,
        },
        {
          question: 'Mire használható a TESZ?',
          options: [
            'Helyesírási szabályok kikeresésére',
            'A szavak eredetének és első előfordulásának megismerésére',
            'Idegen szavak fordítására',
            'Mondatelemzésre',
          ],
          answer: 1,
          explanation:
            'A TESZ történeti-etimológiai szótár: a szavak eredetét és történetét tárgyalja.',
          emelt: true,
        },
        {
          question: 'Melyik múlt idő tűnt el a mai magyar nyelvből?',
          options: [
            'az elbeszélő múlt (*látá*)',
            'a beszélő múlt (*láttam*)',
            'a jelen idő',
            'a jövő idő',
          ],
          answer: 0,
          explanation:
            'Az elbeszélő múlt idő (például *mondá*) a régi nyelv sajátja volt, a mai nyelvből kiveszett.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Pázmány Péter', url: wiki('Pázmány Péter') },
        { label: 'Wikipédia: Mikes Kelemen', url: wiki('Mikes Kelemen Törökországi levelek') },
        { label: 'Wikipédia: TESZ', url: wiki('A magyar nyelv történeti-etimológiai szótára') },
      ],
    },
  ],
};

export default unit;
