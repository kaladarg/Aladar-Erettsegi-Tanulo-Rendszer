import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 2.6 (A vegyesházi királyok kora). */
const unit: GuideUnit = {
  id: 'vegyeshazi-kiralyok',
  subject: 'tortenelem',
  order: 25,
  title: 'A vegyesházi királyok kora',
  requirementRef: '2.6 A vegyesházi királyok kora',
  intro:
    'Az Árpád-ház kihalása után idegen dinasztiák ültek a magyar trónon. Anjou I. Károly megszilárdította a királyi hatalmat, Nagy Lajos birodalmat épített, Zsigmond és Hunyadi János az oszmánok ellen harcolt, Mátyás pedig központosított államot és reneszánsz udvart teremtett.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'aranyforint',
        'regálé',
        'kapuadó',
        'kilenced',
        'bandérium',
        'perszonálunió',
        'kormányzó',
        'végvár',
        'zsoldos',
        'szekérvár',
        'rendkívüli hadiadó',
        'füstpénz',
        'fekete sereg',
        'Corvina',
        'Szent Korona',
        'reneszánsz',
      ],
      emelt: ['ősiség', 'familiaritás', 'honorbirtok', 'bán'],
    },
    people: {
      kozep: [
        'I. (Anjou) Károly',
        'I. (Nagy) Lajos',
        'Luxemburgi Zsigmond',
        'Hunyadi János',
        'I. (Hunyadi) Mátyás',
      ],
      emelt: ['II. Mehmed', 'Vitéz János', 'Szilágyi Mihály', 'Kapisztrán János'],
    },
    dates: {
      kozep: [
        '1301 az Árpád-ház kihalása',
        '1308 I. (Anjou) Károly trónra lépése',
        '1335 a visegrádi királytalálkozó',
        '1351 Nagy Lajos törvényei',
        '1396 a nikápolyi csata',
        '1443–1444 a hosszú hadjárat',
        '1444 a várnai csata',
        '1456 a nándorfehérvári diadal',
        '1458–1490 Hunyadi Mátyás uralkodása',
      ],
      emelt: [
        '1308–1342 I. (Anjou) Károly',
        '1342–1382 I. (Nagy) Lajos uralkodása',
        '1370 lengyel–magyar perszonálunió',
        '1389 rigómezei csata',
        '1479 kenyérmezei csata',
        '1485 Mátyás elfoglalja Bécset',
      ],
    },
    places: {
      kozep: [
        'Visegrád',
        'Buda',
        'Nándorfehérvár',
        'Lengyelország',
        'Csehország',
        'osztrák tartományok',
        'Nikápoly',
        'Várna',
        'Kolozsvár',
        'Kenyérmező',
        'Oszmán Birodalom',
      ],
      emelt: [
        'Kassa',
        'Nagyszeben',
        'Pécs',
        'Halics/Galícia',
        'Nápoly',
        'Krakkó',
        'Moldva',
        'Havasalföld',
        'Bosznia',
        'Konstantinápoly/Isztambul',
      ],
    },
  },
  pages: [
    {
      id: 'anjou-karoly-robert-kiralyi-hatalom',
      subject: 'tortenelem',
      unitId: 'vegyeshazi-kiralyok',
      title: 'I. (Anjou) Károly: a királyi hatalom újjáépítése',
      level: 'kozep',
      requirement: {
        kozep:
          'A királyi hatalom újbóli megszilárdítása Anjou I. Károly idején, a visegrádi királytalálkozó',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **Árpád-ház 1301-ben kihalt** (III. András halálával). Hosszú trónharc következett, és az ország a **tartományurak** (oligarchák) kezére került.',
            'A pápa támogatásával az **Anjou-házi Károly** (Károly Róbert) győzött: **1308-ban** megkezdte uralkodását, **1310-ben** a Szent Koronával megkoronázták Székesfehérváron.',
            'Károly lépésről lépésre legyőzte a tartományurakat, székhelyét **Visegrádra** tette, és a **királyi jövedelmekre** (regálék, bányák, vám, adó) építette a hatalmát.',
            'Pénzügyi reformja: **aranyforint** (1325-től), **regálé**-jövedelmek, **kapuadó**.',
            'Külpolitikája: **1335-ben** a **visegrádi királytalálkozón** a cseh, a lengyel és a magyar király megegyezett.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1301', text: 'Kihal az Árpád-ház férfiága (III. András halála).' },
            { date: '1308', text: 'I. (Anjou) Károly trónra lép.' },
            { date: '1310', text: 'Károly koronázása a Szent Koronával Székesfehérváron.' },
            { date: '1325', text: 'Megkezdődik az aranyforint verése.' },
            { date: '1335', text: 'A visegrádi királytalálkozó.' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'aranyforint',
              text: 'A firenzei aranyforint mintájára Károly idején bevezetett, jó minőségű arany pénz; a magyar aranyforint nemzetközileg is elfogadott volt.',
            },
            {
              term: 'regálé',
              text: 'A királyt kizárólagosan megillető jövedelemforrás, például a bányászat, a pénzverés, a vámok és a sójövedelem.',
            },
            {
              term: 'kapuadó',
              text: 'A jobbágyok által a kapu (a jobbágyporta) után fizetett állami adó; Károly a korábbi adók helyett vezette be.',
            },
            {
              term: 'honorbirtok',
              text: 'Hivatalhoz kötött birtok: a tisztség betöltője addig élvezte, amíg a hivatalát viselte. A király így tudta lojalitásra kényszeríteni a főurakat.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az Árpád-ház kihalása és a trónharc' },
        {
          kind: 'text',
          text: '**III. András 1301-ben** fiú utód nélkül halt meg, így az Árpád-ház férfiága kihalt. Három trónkövetelő lépett fel: a cseh **Vencel**, a bajor **Ottó** és az **Anjou-házból** származó **Károly Róbert**, akinek a nagyanyja Árpád-házi hercegnő volt. Mindhárom mögött külföldi hatalom és hazai főúri párt állt. Közben a nagy tartományurak (például a Csák, az Aba és a Kőszegi család) a királyi vármegyék hatalmát átvették, saját vármegyéjükben szinte önállóan uralkodtak.',
        },
        {
          kind: 'text',
          text: 'Károlyt a **pápa** és az egyház nagy része támogatta. Uralkodását **1308-tól** számítjuk. A **Szent Koronával** csak **1310-ben**, Székesfehérváron koronázták meg: ettől vált mindenki számára törvényes királlyá. A tartományurak ellen évtizedekig kellett harcolnia. A korszak fordulópontja az **1312-es rozgonyi csata** volt, ahol a király hívei legyőzték az Aba család haderejét. A legerősebb ellenfél, **Csák Máté** halála (1321) után a tartományúri hatalom összeomlott.',
        },
        { kind: 'heading', text: 'Visegrád és az új hatalmi rendszer' },
        {
          kind: 'text',
          text: 'Károly **1323-ban** a székhelyét Temesvárról **Visegrádra** tette át. Ez a Duna-kanyarban álló királyi vár lett a központ. Az országot nem a rendek, hanem a **királyi jövedelmek** kormányozták: Károlynak annyi pénze volt, hogy alig kellett országgyűlést összehívnia.',
        },
        {
          kind: 'keypoints',
          title: 'A királyi hatalom három pillére',
          items: [
            '**Pénzügy**: a bányákból (arany, ezüst: például Körmöcbánya), a pénzverésből, a vámokból és a sóból származó **regálé** adta a király jövedelmének nagy részét. Magyarország a 14. században Európa jelentős aranytermelője volt.',
            '**Pénz**: a **1325-től** vert **aranyforint** stabil fizetőeszköz volt, amely a nemzetközi kereskedelemben is jól használható volt.',
            '**Adó**: a **kapuadó** a jobbágyportánként beszedett állami adó volt, amely a királyi bevételeket növelte.',
            '**Hivatalrendszer**: a főméltóságokat Károly hivatalhoz kötött birtokokkal jutalmazta; aki a tisztségét elvesztette, a birtokát is elveszítette. Így a főurak a király kegyétől függtek.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A honorbirtok-rendszer lényege az volt, hogy a nagybirtokot nem örökölhető tulajdonként, hanem **hivatalhoz kötve** adományozta a király. Emellett a kisebb nemesek közül sokan **familiárisként** (hűbéres jellegű szolgálati kapcsolattal) csatlakoztak egy-egy főúri családhoz, ami a későbbi főúri bandériumok alapját adta.',
        },
        {
          kind: 'map',
          title: 'Károly Magyarországa',
          places: [
            { name: 'Visegrád', lat: 47.79, lon: 18.97, note: '1323-tól a királyi székhely' },
            {
              name: 'Székesfehérvár',
              lat: 47.19,
              lon: 18.41,
              note: 'itt koronázták meg 1310-ben',
            },
            {
              name: 'Temesvár',
              lat: 45.75,
              lon: 21.23,
              note: 'Károly korábbi székhelye',
            },
            {
              name: 'Körmöcbánya',
              lat: 48.7,
              lon: 18.92,
              note: 'a királyi aranyverés és aranybánya központja',
            },
          ],
        },
        { kind: 'heading', text: 'A visegrádi királytalálkozó (1335)' },
        {
          kind: 'text',
          text: '**1335-ben** Visegrádon találkozott **I. Károly** magyar, **III. (Nagy) Kázmér** lengyel és **I. (Luxemburgi) János** cseh király. A tárgyalás a Habsburgok erősödése és a kereskedelmi útvonalak miatt volt fontos. Megegyeztek a lengyel–cseh viszály rendezéséről, és közös gazdasági célban is: a kereskedők a **Bécset elkerülő** kereskedelmi útvonalat kaptak, így a három ország a Habsburg-vám nélkül kereskedhetett. A találkozó a közép-európai együttműködés korai példája, ezért a mai **visegrádi együttműködés** (V4) neve is erre az eseményre utal.',
        },
        { kind: 'heading', text: 'Az utód' },
        {
          kind: 'text',
          text: 'Károly fia, **Nagy Lajos** a 14. század második felében a szilárd belső rendet külpolitikai nagyhatalmi törekvésekre használta. **1351-ben** bevezette a **kilencedet**, a jobbágyok földesúrnak fizetett terménykilenced-adóját, és létrehozta az egyenlő nemesi jogok elvét. Uralkodása alatt Magyarország **perszonálunióba** került Lengyelországgal, vagyis egy személy volt a két ország uralkodója, de a két állam külön maradt. Az emelt szintű részleteket a következő lap tárgyalja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Évszámok: 1301 (Árpád-ház kihalása), 1308 (Károly uralkodása), 1335 (visegrádi találkozó).',
            'Fogalmak: aranyforint, regálé, kapuadó, bandérium.',
            'Forrás vagy rövid kifejtés: mivel erősítette meg Károly a királyi hatalmat a tartományurakkal szemben?',
            'Térkép: Visegrád, Székesfehérvár. Lengyelország és Csehország mint az 1335-ös találkozó résztvevői.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni Károly Róbertet a későbbi Anjou-kori uralkodókkal vagy a Habsburgokkal, illetve a visegrádi találkozót a mai V4-gyel. Károly 1308–1342, a találkozó 1335, a mai visegrádi együttműködés pedig a rendszerváltozás utáni szervezet (1991-ben indult).',
        },
        {
          kind: 'tip',
          text: 'Az „Anjou-kor” kulcsszavai röviden: tartományurak legyőzése + regálék + aranyforint + visegrádi székhely. Ha magyarázatot kér a feladat, mindig azt kösd össze, hogy a jövedelmek miatt nem függött az országgyűléstől.',
        },
      ],
      topicMatch: ['anjou-kor', 'i. károly'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Melyik évben halt ki az Árpád-ház férfiága?',
          options: ['1222', '1301', '1308', '1342'],
          answer: 1,
          explanation:
            '1301-ben III. András meghalt, utód nélkül. 1222 az Aranybulla, 1308 Károly uralkodásának kezdete, 1342 Károly halála.',
        },
        {
          question: 'Mi volt a regálé?',
          options: [
            'A jobbágyok földesúrnak fizetett adója.',
            'A királynak kizárólagosan járó jövedelemforrás, például a bányászat.',
            'A nemesek hadba vonulási kötelezettsége.',
            'A városok kiváltságlevele.',
          ],
          answer: 1,
          explanation:
            'A regálé a királyi jog alapján szedett jövedelem (bányák, pénzverés, vám, só). A jobbágyi adó a kilenced vagy a kapuadó.',
        },
        {
          question: 'Hol találkozott 1335-ben a magyar, a lengyel és a cseh király?',
          options: ['Pozsonyban', 'Esztergomban', 'Kassán', 'Visegrádon'],
          answer: 3,
          explanation: 'A találkozó helyszíne a királyi székhely, Visegrád volt.',
        },
        {
          question: 'Mi a kapuadó?',
          options: [
            'A kapuk után fizetett városi vám.',
            'A jobbágyok által a jobbágyporta után fizetett állami adó.',
            'A nemesi birtok után járó egyházi adó.',
            'A külföldi kereskedők különadója.',
          ],
          answer: 1,
          explanation:
            'A kapuadót a jobbágyportánként szedték be, és a király jövedelmét növelte; nem azonos a földesúrnak járó adókkal.',
        },
        {
          question: 'Mi a honorbirtok?',
          options: [
            'Örökölhető családi birtok.',
            'A városok közös földje.',
            'Hivatalhoz kötött birtok, amelyet a hivatal elvesztése után a király visszavett.',
            'A király által elzálogosított birtok.',
          ],
          answer: 2,
          explanation: 'A honorbirtok hivatalhoz kötött volt, így a főurak a királytól függtek.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: I. Károly magyar király', url: wiki('I. Károly magyar király') },
        {
          label: 'Wikipédia: Visegrádi királytalálkozó',
          url: wiki('visegrádi királytalálkozó 1335'),
        },
        { label: 'Wikipédia: Aranyforint', url: wiki('aranyforint Károly Róbert') },
      ],
    },
    {
      id: 'nagy-lajos-kulpolitika-1351',
      subject: 'tortenelem',
      unitId: 'vegyeshazi-kiralyok',
      title: 'Nagy Lajos külpolitikája és az 1351-es törvények',
      level: 'emelt',
      requirement: {
        emelt: 'Nagy Lajos külpolitikája és az 1351-es törvények',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**I. (Nagy) Lajos** **1342–1382** között uralkodott, Károly fia volt. Hosszú uralkodása alatt Magyarország az európai nagyhatalmak közé tartozott.',
            '**Külpolitika**: hadjáratok **Nápoly** ellen (öccse, András meggyilkolása miatt), háború **Velence** ellen (Dalmácia megszerzése), a Balkán és a **Havasalföld**, **Moldva**, **Bosznia** fölötti befolyás.',
            '**1370**: Kázmér lengyel király halála után Lajos lett Lengyelország királya is, **lengyel–magyar perszonálunió** jött létre.',
            '**1351-es törvények**: megerősítették az **Aranybullát** (az ellenállási záradék kivételével), bevezették az **ősiséget** és a jobbágyi **kilenced** kötelezettséget, kimondták a nemesek jogegyenlőségét.',
            'Lajos **1382-ben** fiú örökös nélkül halt meg, így az Anjou-ház magyarországi ága kihalt.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1342', text: 'Károly halála, Lajos trónra lép.' },
            { date: '1347–1348', text: 'Az első nápolyi hadjárat.' },
            { date: '1351', text: 'Az 1351-es törvények (Aranybulla, ősiség, kilenced).' },
            { date: '1370', text: 'Lengyel–magyar perszonálunió.' },
            { date: '1382', text: 'Nagy Lajos halála.' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ősiség',
              text: 'A nemesi birtok elidegeníthetetlen volt: a család birtokát a család férfi tagjai örökölték, kihalás esetén a király kezére szállt vissza.',
            },
            {
              term: 'kilenced',
              text: 'A jobbágyok terményük kilencedét fizették a földesúrnak.',
            },
            {
              term: 'perszonálunió',
              text: 'Két állam közös uralkodója ugyanaz a személy, de az államok külön maradnak.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az uralkodó és a nagyhatalmi törekvések' },
        {
          kind: 'text',
          text: 'Nagy Lajos **1342-ben** örökölte apja stabil államát. A belső rend és a bőséges királyi jövedelmek lehetővé tették, hogy az egész Közép- és Délkelet-Európára kiterjedő külpolitikát folytasson. Hadjáratai közül a leglátványosabbak a nápolyi, a velencei és a balkáni vállalkozások voltak.',
        },
        {
          kind: 'keypoints',
          title: 'A külpolitika irányai',
          items: [
            '**Nápoly**: öccsét, Andrást, a nápolyi királynő, **I. Johanna** férjét **1345-ben** meggyilkolták. Lajos bosszúból kétszer is hadjáratot vezetett Dél-Itáliába (1347–1348, 1350), de a hódítást nem tudta fenntartani.',
            '**Velence** és **Dalmácia**: a Velence elleni háború a tengermellék birtokáért folyt. Az 1358-as zárai béke után Velence lemondott Dalmáciáról, és a magyar király hatalma az Adriai-tengerig ért.',
            '**Balkán**: Lajos a szerb, a bolgár és a boszniai területeken terjesztette ki a magyar befolyást. **Bosznia**, **Havasalföld** és **Moldva** fejedelmei időnként hűbéresei voltak.',
            '**Lengyelország**: Lajos anyja lengyel hercegnő volt, így Kázmér lengyel király unokaöccse volt. Kázmér **1370-ben** utód nélkül halt meg, és Lajos örökölte a lengyel trónt (**Krakkóban** koronázták). A **perszonálunió** 1370-től 1382-ig tartott.',
          ],
        },
        {
          kind: 'text',
          text: 'A lengyel trón Lajos lányaira szállt volna. A lengyel nemesség támogatását kiváltságokkal biztosította: az 1374-es **kassai privilégium** a lengyel nemességnek adókedvezményeket ígért, hogy elfogadják Lajos lányát örökösének. Ez jól mutatja, hogy a rendek már nemcsak a magyar belpolitikában számítottak.',
        },
        {
          kind: 'map',
          title: 'Nagy Lajos Európája',
          places: [
            { name: 'Visegrád', lat: 47.79, lon: 18.97, note: 'az uralkodó székhelye' },
            {
              name: 'Kassa',
              lat: 48.72,
              lon: 21.26,
              note: 'az 1374-es privilégium helyszíne',
            },
            {
              name: 'Zára',
              lat: 44.12,
              lon: 15.23,
              note: 'dalmát kikötő, az 1358-as béke névadója',
            },
          ],
        },
        { kind: 'heading', text: 'Az 1351-es törvények' },
        {
          kind: 'text',
          text: 'Az **1351-es országgyűlésen** Lajos jogi rendezést adott az országnak. Három fontos intézkedés született.',
        },
        {
          kind: 'compare',
          title: 'Az 1351-es törvények három fő eleme',
          columns: ['Mit mond ki?', 'Kinek a javára?'],
          rows: [
            {
              label: 'Az Aranybulla megerősítése',
              cells: [
                'Visszaállította az 1222-es Aranybulla rendelkezéseit, de az ellenállási záradékot elhagyta.',
                'A nemességnek, de a király hatalmát nem korlátozta.',
              ],
            },
            {
              label: 'Ősiség',
              cells: [
                'A nemesi birtok szétosztásának és eladásának korlátozása; kihalás esetén a király örökölt.',
                'A nemesi családoknak (a birtok megőrzése) és a koronának.',
              ],
            },
            {
              label: 'Kilenced',
              cells: [
                'A jobbágyok minden terményük kilencedét kötelesek a földesúrnak adni.',
                'A földesuraknak, de egységesítette a jobbágyi terheket.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A törvények kimondták a **nemesek jogegyenlőségét** is, vagyis a nemesi rend tagjainak azonos jogaikat. Az **ősiség** később akadályozta a birtok szabad forgalmát (a tőkeképződést), és csak 1848-ban szüntették meg. A **kilenced** a jobbágyok terheit egységesítette és ezzel védte is őket a földesúri önkénytől. Az **ellenállási záradék** elhagyása azt mutatja, hogy a király nem hagyta, hogy a nemesség fegyveres fellépési joga szerepeljen a törvényekben.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt esszéelem vagy forráselemzés az 1351-es törvényekről: mit erősített meg, mit hagyott el, kinek kedvezett?',
            'Fogalmak: ősiség, kilenced, perszonálunió, ellenállási záradék.',
            'Évszámok: 1342–1382, 1370.',
            'Térkép: Nápoly, Krakkó, Halics/Galícia, Bosznia, Moldva, Havasalföld.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Lajos az egész Aranybullát megerősítette. Az ellenállási záradék kimaradt. Másik hiba: a kilencedet a király vagy az egyház adójának nevezni, pedig a földesúrnak járt.',
        },
        {
          kind: 'tip',
          text: 'Esszéhez használd az „uralkodói hatalom és korlátai” gondolatot: Károly a jövedelmekkel, Lajos a külpolitikai sikerekkel és a nemesi jogok rendezésével szilárdította meg a hatalmát, ugyanakkor a nemesség jogait is elismerte.',
        },
      ],
      topicMatch: ['nagy lajos', 'i. lajos', 'anjou-kor'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mely két évszám határolja Nagy Lajos uralkodását?',
          options: ['1308–1342', '1342–1382', '1382–1437', '1387–1437'],
          answer: 1,
          explanation:
            'Nagy Lajos 1342-ben követte apját, 1382-ben halt meg. 1308–1342 Károly, 1387–1437 Zsigmond uralkodása.',
        },
        {
          question: 'Az Aranybulla melyik rendelkezését hagyta ki Nagy Lajos 1351-ben?',
          options: [
            'A nemesek adómentességét',
            'A nemesek személyes szabadságát',
            'A nemesek bíróság előtti védelmét',
            'Az ellenállási záradékot',
          ],
          answer: 3,
          explanation:
            'Az 1351-es törvény az Aranybullát megerősítette, de az ellenállási záradékot kihagyta.',
        },
        {
          question: 'Mi volt az ősiség?',
          options: [
            'A nemesi birtok elidegeníthetetlensége és a fiági öröklés elve.',
            'A jobbágyok terménykilenced-adója.',
            'A király kizárólagos jövedelmi joga.',
            'A hadba vonulás kötelezettsége.',
          ],
          answer: 0,
          explanation:
            'Az ősiség a nemesi birtokot a családhoz kötötte; a kilenced a jobbágyoké, a regálé a királyé.',
        },
        {
          question: 'Mi történt 1370-ben?',
          options: [
            'Nagy Lajos megszerezte Dalmáciát.',
            'Létrejött a lengyel–magyar perszonálunió.',
            'Elesett Nándorfehérvár.',
            'Kihalt az Anjou-ház.',
          ],
          answer: 1,
          explanation:
            'Kázmér lengyel király halála után Lajos lengyel király is lett, így a két országot perszonálunió kötötte össze.',
        },
      ],
      sources: [
        { label: 'Wikipédia: I. Lajos magyar király', url: wiki('I. (Nagy) Lajos magyar király') },
        {
          label: 'Wikipédia: Az 1351-es törvények',
          url: wiki('1351 törvények Nagy Lajos kilenced'),
        },
        {
          label: 'Wikipédia: Lengyel–magyar perszonálunió',
          url: wiki('Nagy Lajos lengyel király 1370'),
        },
      ],
    },
    {
      id: 'zsigmond-torok-veszely-nikapoly',
      subject: 'tortenelem',
      unitId: 'vegyeshazi-kiralyok',
      title: 'Luxemburgi Zsigmond és az oszmán veszély',
      level: 'kozep',
      requirement: {
        kozep: 'Luxemburgi Zsigmond, Hunyadi János és Hunyadi Mátyás törökellenes harcai',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Nagy Lajos halála (1382) után lánya, **Mária** lett a királynő, férje, a **Luxemburgi Zsigmond** brandenburgi őrgróf pedig **1387-ben** magyar király.',
            'Zsigmond uralkodása (**1387–1437**) alatt az **Oszmán Birodalom** elérte Magyarország déli határát.',
            '**1396**: a **nikápolyi csatában** a Zsigmond vezette keresztes sereg súlyos vereséget szenvedett I. Bajazid szultántól.',
            'Zsigmond **végvárrendszert** épített ki a déli határon (Nándorfehérvár, Szörény), és a főurakat hadba vonulásra kötelezte (**bandérium**).',
            'Zsigmond német–római király (1410-től), majd császár (1433) és cseh király is volt, ezért gyakran hosszú időre távol volt az országtól.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1387', text: 'Zsigmond magyar király lesz.' },
            { date: '1389', text: 'Rigómezei csata (emelt).', emelt: true },
            { date: '1396', text: 'A nikápolyi csata.' },
            { date: '1427', text: 'Zsigmond átveszi Nándorfehérvárt.' },
            { date: '1437', text: 'Zsigmond halála.' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'bandérium',
              text: 'A földbirtokos nagyúr vagy a püspök saját, a király által előírt létszámú lovas csapata (zászlóalja); a király hadserege részben ezekből állt.',
            },
            {
              term: 'végvár',
              text: 'A határvédelem erődje; a végvárak láncolata a határ védelmét szolgálta.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Zsigmond trónra lépése' },
        {
          kind: 'text',
          text: '**Nagy Lajos 1382-ben** fiú utód nélkül halt meg. Lengyelország a lányát, Hedviget fogadta el, Magyarországon pedig Mária lett királynő. Mária férje, **Zsigmond** (aki a Luxemburg-házból származott, apja IV. Károly császár volt) a belviszályok és a Durazzói Károly (Kis Károly) elleni 1386-os merénylet után szerezte meg a koronát: **1387-ben** királlyá koronázták. Hatalmát a főúri ligákkal szemben nehezen tartotta, **1401-ben** a főurak egy időre le is tartóztatták.',
        },
        { kind: 'heading', text: 'Az oszmánok megjelenése a határon' },
        {
          kind: 'text',
          text: 'Az **Oszmán Birodalom** a 14. század végén már a Balkán nagy részén terjeszkedett. Szerbia a 14. század végén az oszmánok hűbérese lett, így a török hatalom a magyar déli határig ért. Zsigmond ezért a Dunától délre, a Balkánon próbálta feltartóztatni őket.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **rigómezei csatában (1389)** az oszmán és a szerb vezetők közül **I. Murád szultán és Lázár szerb fejedelem** is életét vesztette. A csata kimenetele vitatott, de a szerb állam a következő években oszmán hűbéressé vált.',
        },
        { kind: 'heading', text: 'A nikápolyi csata (1396)' },
        {
          kind: 'text',
          text: 'Zsigmond **keresztes hadjáratot** hirdetett az oszmánok ellen. A sereghez francia és burgundi lovagok is csatlakoztak. **1396. szeptember 25-én Nikápolynál** (a mai Bulgáriában, a Duna mellett) **I. Bajazid szultán** legyőzte a keresztesek seregét. Zsigmond hajón menekült, és hosszú kerülő úton tért haza. A vereség megmutatta, hogy a lovagi hadviselés nem elég az oszmán haderő ellen.',
        },
        {
          kind: 'warning',
          text: 'Nikápoly és Várna a mai Bulgária területén fekszik, ezért nincs rajta a magyar térképen. Tudnod kell, hogy a csaták a Balkánon, a Duna alsó folyásánál vagy a Fekete-tenger közelében folytak.',
        },
        { kind: 'heading', text: 'A védelem megszervezése' },
        {
          kind: 'keypoints',
          items: [
            '**Végvárrendszer**: Zsigmond a déli határ védelmére erődláncot hozott létre. **1427-ben** Lazarević István szerb despota halála után a magyar korona átvette **Nándorfehérvárt**, amely a következő évtizedek legfontosabb déli kapuja lett.',
            '**Hadszervezet**: a **bandérium** a főurak és a püspökök zászlóalja. Az **1397-es** temesvári országgyűlés a hadba vonulás kötelezettségeit is szabályozta.',
            '**Külpolitika**: az uralkodó német–római király (1410-től), majd **császár** (1433) is volt. Részt vett a **konstanzi zsinaton** (1414–1418), amely az egyházszakadást próbálta megszüntetni. Cseh király is lett, de a huszita háborúk miatt a koronát csak 1436-ban foglalhatta el.',
            '**Lovagrend**: **1408-ban** alapította a **Sárkányrendet**, a híveiből álló lovagi szövetséget.',
          ],
        },
        {
          kind: 'text',
          text: 'Zsigmond halála (**1437**) után lánya, Erzsébet és férje, a Habsburg **Albert** örökölt, ő viszont hamarosan meghalt. Az oszmán nyomás tovább nőtt, és a 15. század közepén a védelem **Hunyadi János** kezébe került.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Évszámok: 1387, 1396, 1437.',
            'Fogalmak: bandérium, végvár, perszonálunió (a Lajos-kori kapcsolatban).',
            'Rövid kifejtés: miért veszített Zsigmond Nikápolynál, és mit tett utána a védelemért?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni a nikápolyi (1396) és a várnai (1444) vereséget. Mindkettő a Balkánon történt, de nem ugyanaz a hadjárat.',
        },
        {
          kind: 'tip',
          text: 'Ha időrendet kérnek a törökellenes harcokról, ezt a sort jegyezd meg: Nikápoly (1396), Várna (1444), Nándorfehérvár (1456).',
        },
      ],
      topicMatch: ['i. károly és hunyadi mátyás'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Melyik évben szenvedett vereséget a keresztes sereg Nikápolynál?',
          options: ['1389', '1396', '1444', '1456'],
          answer: 1,
          explanation:
            '1396-ban. 1389 a rigómezei, 1444 a várnai csata, 1456 a nándorfehérvári diadal éve.',
        },
        {
          question: 'Mi volt a bandérium?',
          options: [
            'A királyi zsoldoshadsereg neve.',
            'A főurak és püspökök saját lovas csapata a király seregében.',
            'A déli végvárak láncolata.',
            'A király elleni főúri szövetség.',
          ],
          answer: 1,
          explanation:
            'A bandérium a nagybirtokos saját zászlóalja, amelyet a király hadjáratában vitt. A zsoldoshadsereg Mátyás fekete serege volt.',
        },
        {
          question: 'Melyik város lett Zsigmond idején a déli védelmi rendszer kulcsa?',
          options: ['Pozsony', 'Nándorfehérvár', 'Eger', 'Kassa'],
          answer: 1,
          explanation:
            'Nándorfehérvárt 1427-ben vette át a magyar korona, és a déli védelem legfontosabb erődje lett.',
        },
        {
          question: 'Mi történt a rigómezei csatában (1389)?',
          options: [
            'Zsigmond legyőzte Bajazidot.',
            'Hunyadi János kormányzó lett.',
            'Az oszmán és a szerb vezetők is elestek, a szerb állam később oszmán hűbéres lett.',
            'A magyar sereg elfoglalta Konstantinápolyt.',
          ],
          answer: 2,
          explanation:
            'Murád szultán és Lázár fejedelem is elesett, de a szerb állam rövidesen az oszmánok hűbérese lett.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Luxemburgi Zsigmond', url: wiki('Luxemburgi Zsigmond magyar király') },
        { label: 'Wikipédia: Nikápolyi csata', url: wiki('nikápolyi csata 1396') },
        { label: 'Wikipédia: Bandérium', url: wiki('bandérium') },
      ],
    },
    {
      id: 'hunyadi-janos-torokellenes-harcai',
      subject: 'tortenelem',
      unitId: 'vegyeshazi-kiralyok',
      title: 'Hunyadi János törökellenes harcai',
      level: 'kozep',
      requirement: {
        kozep: 'Luxemburgi Zsigmond, Hunyadi János és Hunyadi Mátyás törökellenes harcai',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Hunyadi János** köznemesi családból származott, Zsigmond udvarában kezdte, majd **déli végvári kapitány** és **erdélyi vajda** lett. Kiváló hadvezér volt.',
            '**1443–1444**: a **hosszú hadjárat**; **1444**: a **várnai csata**, amelyben I. Ulászló király elesett.',
            '**1446–1453**: Hunyadi az országgyűlés által választott **kormányzó** volt a kiskorú V. László mellett.',
            '**1456. július 22.**: a **nándorfehérvári diadal**. A török ostrom megállt, a déli határ évtizedekre biztos lett.',
            'Hunyadi **1456. augusztus 11-én** meghalt. A **déli harangszó** a nándorfehérvári győzelem emlékét őrzi.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1443–1444', text: 'A hosszú hadjárat.' },
            { date: '1444', text: 'A várnai csata, I. Ulászló halála.' },
            { date: '1446', text: 'Hunyadit kormányzóvá választják.' },
            { date: '1448', text: 'A második rigómezei csata, Hunyadi vereséget szenved.' },
            { date: '1456', text: 'A nándorfehérvári diadal, majd Hunyadi halála.' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kormányzó',
              text: 'A király helyett országot irányító vezető, ha az uralkodó kiskorú vagy távol van.',
            },
            {
              term: 'zsoldos',
              text: 'Pénzért harcoló katona; Hunyadi kisebb részben zsoldoshadsereget is tartott fenn.',
            },
            {
              term: 'bán',
              text: 'A déli határvidékek (például Szörény) katonai és közigazgatási vezetője.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hunyadi emelkedése' },
        {
          kind: 'text',
          text: '**Zsigmond halála (1437)** után a trónért harcok folytak. Végül a lengyel **I. Ulászló** (Jagelló) lett magyar király (1440–1444). Hunyadi János ekkor már a **déli határvédelem** egyik vezetője volt, **1441-től** nándorfehérvári kapitány és **erdélyi vajda** lett. Gazdag birtokokat szerzett, és saját sereget tarthatott. Sikerei **1442-ben** (Erdélyben, majd a Vaskapunál) megmutatták, hogy az oszmánok legyőzhetők.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Hunyadi a **bán** méltóságot is viselte: a déli határvidék, például **Szörény** bánja volt. Itt ismerte meg a balkáni és oszmán hadviselést.',
        },
        { kind: 'heading', text: 'A hosszú hadjárat és Várna' },
        {
          kind: 'text',
          text: 'Ulászló és Hunyadi **1443–1444 telén** nagy keresztes hadjáratot vezetett a Balkánra, a „hosszú hadjáratot”. Kezdeti sikerek után **1444-ben** tízéves békét kötöttek a törökkel (Szeged). A pápai követ és a nyugati lovagok nyomására azonban a király megszegte a békét. **1444. november 10-én Várnánál** a keresztes sereg súlyos vereséget szenvedett II. Murád seregétől, **I. Ulászló király elesett**. Hunyadi életben maradt.',
        },
        { kind: 'heading', text: 'A kormányzó' },
        {
          kind: 'text',
          text: 'A törvényes király **V. László** (Habsburg Albert fia) volt, aki 1440-ben született, ezért kiskorú volt. A főurak **1446-ban** Hunyadit **kormányzóvá** választották. Hunyadi az ország tényleges vezetője lett, de királyi címet nem viselt. **1448-ban** a **második rigómezei csatában** vereséget szenvedett az oszmánoktól. **1453-ban** V. László nagykorúsága után lemondott a kormányzóságról, de megtartotta a főkapitányi tisztséget.',
        },
        {
          kind: 'map',
          title: 'Hunyadi harcai és a déli határ',
          places: [
            {
              name: 'Nándorfehérvár',
              lat: 44.82,
              lon: 20.46,
              note: '1456: a nagy diadal helyszíne (ma Belgrád)',
            },
            {
              name: 'Nagyszeben',
              lat: 45.8,
              lon: 24.15,
              note: '1442: Hunyadi győzelme',
              emelt: true,
            },
            { name: 'Szeged', lat: 46.25, lon: 20.15, note: '1444: itt kötöttek békét' },
            {
              name: 'Kolozsvár',
              lat: 46.77,
              lon: 23.6,
              note: 'Hunyadi János fiának, Mátyásnak a szülővárosa',
            },
            { name: 'Buda', lat: 47.5, lon: 19.04, note: 'a királyi székhely' },
          ],
        },
        { kind: 'heading', text: 'Nándorfehérvár, 1456' },
        {
          kind: 'text',
          text: 'Az oszmánok a bizánci főváros 1453-as elfoglalása után északra fordultak. Az oszmán szultán 1456 nyarán hatalmas sereggel Nándorfehérvárt vette ostrom alá, amely a magyar–oszmán határ kulcsa volt. Hunyadi hajóhaddal tört át a Dunán, és a várvédőket megsegítette. A pápa által hirdetett keresztes hadjáratban a szegény keresztes katonák is részt vettek. **1456. július 22-én** a keresztesek és a védők visszaverték a török támadást, a szultán elvonult.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A vár védelmét **Szilágyi Mihály** (Hunyadi sógora) vezette, a keresztes tábort **Kapisztrán János** szervezte. **II. Mehmed** szultán visszavonult, és Magyarország ellen évtizedekre elvesztette a kezdeményezést. Hunyadi néhány héttel később, **augusztus 11-én** Zimonyban, a táborban pusztító járványban meghalt.',
        },
        {
          kind: 'text',
          text: 'III. Callixtus pápa 1456-ban elrendelte a déli harangszót a keresztes hadjárat sikeréért; a **déli harangszó** szokása ma is a nándorfehérvári diadalhoz kapcsolódik. A győzelem következménye: a déli határ hat évtizedig kitartott, egészen **1521-ig**, Nándorfehérvár elestéig.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Évszámok: 1444 (Várna), 1446 (kormányzóság), 1456 (Nándorfehérvár).',
            'Fogalmak: kormányzó, zsoldos, végvár.',
            'Forrás: Hunyadi, Kapisztrán vagy a pápa levele a nándorfehérvári ostromról.',
            'Kifejtés: miért jelentős a nándorfehérvári győzelem, és hogyan kapcsolódik a déli harangszóhoz?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Hunyadit királynak nevezni. Ő kormányzó volt; a király V. László, majd fia, Mátyás lett. Másik hiba: Várnát (1444, vereség) és Nándorfehérvárt (1456, győzelem) összekeverni.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Az emelt szintű feladat gyakran nevek összekapcsolását kéri: Kapisztrán János (keresztes sereg), Szilágyi Mihály (várvédő), II. Mehmed (az ostromló szultán), Hunyadi János (a hajóhad és a sereg vezére).',
        },
      ],
      topicMatch: ['hunyadi jános', 'i. károly és hunyadi mátyás'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Melyik csatában esett el I. Ulászló király?',
          options: ['Nikápolynál', 'Rigómezőn', 'Nándorfehérvárnál', 'Várnánál'],
          answer: 3,
          explanation:
            'I. Ulászló 1444-ben Várnánál esett el. Nikápoly 1396, Nándorfehérvár 1456 eseménye.',
        },
        {
          question: 'Mikor volt a nándorfehérvári diadal?',
          options: ['1444', '1448', '1456', '1458'],
          answer: 2,
          explanation:
            '1456-ban Hunyadi János visszaverte az oszmán ostromot. 1458 Mátyás királlyá választásának éve.',
        },
        {
          question: 'Mit jelent a kormányzói tisztség Hunyadi esetében?',
          options: [
            'Ő volt a király.',
            'A kiskorú király helyett irányította az országot.',
            'Csak a déli határt védte.',
            'Az egyház vezetője volt.',
          ],
          answer: 1,
          explanation:
            'Hunyadi 1446-tól 1453-ig kormányzó volt V. László kiskorúsága idején, de királyi címet nem viselt.',
        },
        {
          question: 'Ki szervezte Nándorfehérvárnál a keresztes tábort?',
          options: ['Vitéz János', 'Szilágyi Mihály', 'Kapisztrán János', 'Zsigmond császár'],
          answer: 2,
          explanation:
            'Kapisztrán János ferences szerzetes mozgósította a keresztes katonákat. Szilágyi Mihály a vár védője volt.',
          emelt: true,
        },
        {
          question: 'Melyik szultán vezette az oszmán sereget Nándorfehérvár ellen 1456-ban?',
          options: ['I. Bajazid', 'I. Murád', 'I. Szulejmán', 'II. Mehmed'],
          answer: 3,
          explanation:
            'II. Mehmed, Konstantinápoly 1453-as meghódítója ostromolta Nándorfehérvárt. I. Szulejmán 1521-ben vette be.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hunyadi János', url: wiki('Hunyadi János kormányzó') },
        { label: 'Wikipédia: Nándorfehérvári diadal', url: wiki('nándorfehérvári diadal 1456') },
        { label: 'Wikipédia: Várnai csata', url: wiki('várnai csata 1444') },
      ],
    },
    {
      id: 'matyas-kozpontositott-hatalom-jovedelmek',
      subject: 'tortenelem',
      unitId: 'vegyeshazi-kiralyok',
      title: 'Hunyadi Mátyás: a központosított királyi hatalom',
      level: 'kozep',
      requirement: {
        kozep:
          'Hunyadi Mátyás: a központosított királyi hatalom, jövedelmek és kiadások, birodalomépítő tervek',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Hunyadi Mátyás** **1458. január 24-én** a rendek királlyá választották, ő lett az első nem dinasztikus (nem királyi családból származó), köznemesi eredetű magyar király. Uralkodása **1458–1490**.',
            'Hatalmát a **Szent Korona** visszaszerzésével (**1463**) és **1464-es** koronázásával tette törvényessé.',
            'Mátyás a **főurak** hatalmát korlátozta, tehetséges, kevésbé függő **tanácsosokra** és hivatalnokokra támaszkodott, az országgyűlést ritkán hívta össze.',
            'Alapja a **jövedelem** volt: regálék, bányák, vámok, kapuadó, de **rendkívüli hadiadó** is. Ebből tartotta fenn a **fekete sereget**.',
            'A zsoldoshadsereg állandó volt és független a főúri bandériumoktól, de fenntartása nagy adóterhet jelentett, ami népszerűtlenné tette az uralkodót.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1458', text: 'Mátyás királlyá választása (január 24.).' },
            { date: '1463', text: 'A Szent Korona visszaváltása III. Frigyes császártól.' },
            { date: '1464', text: 'Mátyás koronázása Székesfehérváron.' },
            { date: '1476', text: 'Házassága Aragóniai Beatrixszal.' },
            { date: '1490', text: 'Mátyás halála Bécsben.' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'fekete sereg',
              text: 'Mátyás állandó zsoldoshadserege, amelyet a rendszeres királyi jövedelmekből fizettek; kiképzett, jól felszerelt, nagy részben külföldi zsoldosokból állt.',
            },
            {
              term: 'rendkívüli hadiadó',
              text: 'Az évi rendes adón felül háború esetén szedett adó. Mátyás a rendek hozzájárulása nélkül is többször kivetette.',
            },
            {
              term: 'füstpénz',
              text: 'A háztartások (füstök) után szedett adófajta.',
            },
            {
              term: 'zsoldos',
              text: 'Pénzért harcoló katona, szemben a nemesi hadkötelezettséggel.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A király, aki nem a rendek teremtménye' },
        {
          kind: 'text',
          text: '**Hunyadi László** kivégzése (1457) és V. László halála után a főúri pártok közül a Hunyadi-párt győzött. **1458. január 24-én** a rendek a mindössze 14 éves **Mátyást** választották királlyá. Kezdetben nagybátyja, **Szilágyi Mihály** irányította a kormányzatot, de Mátyás hamar megszabadult a gyámságtól és a főúri pártoktól. Hatalma törvényességét a **Szent Korona** hiányában még vitatták: a koronát III. Frigyes császár őrizte, akitől Mátyás **1463-ban** 80 ezer aranyforintért visszaváltotta, és **1464-ben** Székesfehérváron megkoronáztatta magát.',
        },
        { kind: 'heading', text: 'Központosítás' },
        {
          kind: 'keypoints',
          title: 'A hatalom eszközei',
          items: [
            '**Új tanácsosok**: a főurakkal szemben tehetséges, műveltebb, gyakran köznemesi származású embereket emelt magas tisztségekbe, akik neki tartoztak hálával.',
            '**Pénzügyek központosítása**: a királyi kincstár irányította a jövedelmeket; a vámokat, a bányákat és a regálékat a király emberei kezelték.',
            '**Kormányzás**: Mátyás az országgyűlést keveset hívta össze; sok ügyet közvetlenül, királyi rendeletekkel intézett.',
            '**Igazságszolgáltatás**: a király személyesen is bíráskodott, a királyi bíróságokat erősítette. Az „Igazságos Mátyás” alakja ebből a hagyományból nőtt ki.',
            '**Hadsereg**: a fekete sereg a nemesi bandériumoktól független katonaság volt, ami a főurak katonai függetlenségét csökkentette.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Mátyás nagybátyja, **Szilágyi Mihály** 1458-ban az új király mellett kormányzói hatalmat kapott, de Mátyás hamarosan önállósította magát.',
        },
        { kind: 'heading', text: 'Jövedelmek és kiadások' },
        {
          kind: 'compare',
          title: 'A király pénzügyei',
          columns: ['Jövedelmek', 'Kiadások'],
          rows: [
            {
              label: 'Rendszeres',
              cells: [
                'Regálék (bányák, pénzverés, sójövedelem), vámok, kapuadó, a koronabirtokok jövedelme',
                'Udvartartás, a várak és az igazgatás fenntartása',
              ],
            },
            {
              label: 'Rendkívüli',
              cells: [
                'Rendkívüli hadiadó (gyakran évente többször), különadók és füstpénz',
                'A fekete sereg zsoldja, háborúk, diplomáciai kiadások',
              ],
            },
            {
              label: 'Reprezentáció és kultúra',
              cells: [
                'A királyi városok adója és a kincstárba befolyó vámok',
                'Építkezések (Buda, Visegrád), a könyvtár és az udvari élet',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az uralkodó évi jövedelme a legjobb években **több százezer aranyforintot** tett ki, ami az akkori Európában kiemelkedő összeg volt. A **legnagyobb kiadási tétel a fekete sereg** volt. A hadiadó ismételt kivetése azonban sok ellenséget szerzett, és a jobbágyok és a nemesek is panaszkodtak a terhekre. Ezért a rendszer a király személyétől függött: Mátyás halála után a rendek hamar visszaszerezték a befolyásukat.',
        },
        {
          kind: 'example',
          title: 'Rövid válasz: mivel erősítette meg Mátyás a királyi hatalmat?',
          problem:
            'Írj legalább három eszközt a központosított királyi hatalom megerősítéséről Mátyás idején.',
          solution:
            '1. Visszaszerezte a Szent Koronát (1463) és megkoronáztatta magát (1464): így törvényes király lett. 2. Állandó zsoldoshadsereget (fekete sereg) tartott fenn, amely független volt a főurak bandériumaitól. 3. A regálékból, a vámokból és a rendkívüli hadiadóból nagy jövedelemhez jutott, ezért kevésbé függött az országgyűléstől. 4. Alacsonyabb származású, tehetséges tanácsosokra támaszkodott a főurak ellen.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalmak: fekete sereg, rendkívüli hadiadó, füstpénz, kapuadó, zsoldos.',
            'Évszámok: 1458–1490, 1463–1464 (a korona és a koronázás).',
            'Forrás vagy ábra: a királyi jövedelmek és kiadások elemzése.',
            'Kifejtés: hogyan központosította a hatalmat, és miért volt törékeny a rendszer?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Mátyás eltörölte a rendi gyűlést vagy hogy a nemesség nem volt jelentős. Az országgyűlés megmaradt, csak ritkán ülésezett. Másik hiba: Hunyadi Jánost királynak nevezni; János kormányzó volt, Mátyás király.',
        },
        {
          kind: 'tip',
          text: 'Ha esszét írsz, a „jövedelem – hadsereg – hatalom” kört emeld ki: a pénz tartotta el a zsoldoshadsereget, a hadsereg biztosította a király függetlenségét a főuraktól. A gyenge pont: az egész az adóterhekre épült.',
        },
      ],
      topicMatch: ['hunyadi mátyás', '=mátyás', 'i. károly és hunyadi mátyás'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mikor uralkodott Hunyadi Mátyás?',
          options: ['1444–1456', '1456–1458', '1458–1490', '1490–1516'],
          answer: 2,
          explanation:
            'Mátyás 1458-ban lett király, és 1490-ben halt meg. 1490–1516 II. Ulászló uralkodása.',
        },
        {
          question: 'Mi volt a fekete sereg?',
          options: [
            'A főurak bandériumai.',
            'A déli végvárak védőinek elnevezése.',
            'Hunyadi János keresztes serege.',
            'Mátyás állandó zsoldoshadserege.',
          ],
          answer: 3,
          explanation:
            'A fekete sereg a királyi jövedelmekből fizetett állandó zsoldoshad volt; a bandérium a főúri csapat.',
        },
        {
          question: 'Mit tett Mátyás 1463-ban a Szent Koronával?',
          options: [
            'Visszaváltotta III. Frigyes császártól.',
            'Elzálogosította a pápának.',
            'Új koronát készíttetett.',
            'Átadta fiának, Corvin Jánosnak.',
          ],
          answer: 0,
          explanation:
            'A koronát 80 ezer aranyforintért váltotta vissza Frigyestől, és 1464-ben megkoronáztatta magát.',
        },
        {
          question: 'Melyik adó volt a hadjáratok idején kivetett többletteher?',
          options: ['kilenced', 'rendkívüli hadiadó', 'tized', 'regálé'],
          answer: 1,
          explanation:
            'A rendkívüli hadiadót háborús szükségre vetették ki. A kilenced a földesúrnak járt, a tized az egyháznak, a regálé a király jogos jövedelme.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Hunyadi Mátyás', url: wiki('Hunyadi Mátyás magyar király') },
        { label: 'Wikipédia: Fekete sereg', url: wiki('fekete sereg Mátyás') },
        { label: 'Wikipédia: Mátyás-kori adórendszer', url: wiki('Mátyás király adórendszere') },
      ],
    },
    {
      id: 'matyas-kulpolitika-reneszansz-udvar',
      subject: 'tortenelem',
      unitId: 'vegyeshazi-kiralyok',
      title: 'Mátyás törökellenes harcai, birodalomépítés és reneszánsz udvar',
      level: 'both',
      requirement: {
        kozep:
          'Luxemburgi Zsigmond, Hunyadi János és Hunyadi Mátyás törökellenes harcai; Hunyadi Mátyás: birodalomépítő tervek',
        emelt:
          'Luxemburgi Zsigmond, Hunyadi János és Hunyadi Mátyás törökellenes harcai; Hunyadi Mátyás: birodalomépítő tervek',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Mátyás **külpolitikájának** két fő iránya volt: délen a **török védelem** (a déli végvárak), nyugaton a **terjeszkedés**: **Csehország** és az **osztrák tartományok** megszerzése.',
            'A cseh háború (1468–1478) után Mátyás cseh király lett, a morvaországi és sziléziai területek is hozzá kerültek. elfoglalta **Bécset**, ahol haláláig lakott (1490).',
            'Ez a **dunai birodalom** terve volt, amelyet fiának, **Corvin Jánosnak** akart átadni.',
            'Mátyás udvara a **reneszánsz** egyik közép-európai központja volt: humanisták, olasz művészek, a híres **Corvina-könyvtár**, a budai és visegrádi palota.',
            'Mátyás halála után **II. Ulászló** (Jagelló) következett; a királyi hatalom gyengült, 1526-ban **Mohács** következett.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1463', text: 'Jajca megszerzése, a déli védvonal előterének megerősítése.' },
            { date: '1468–1478', text: 'A cseh háború; 1478-ban az olmützi béke.' },
            { date: '1476', text: 'Mátyás házassága Aragóniai Beatrixszal.' },
            { date: '1479', text: 'A kenyérmezei csata.', emelt: true },
            { date: '1485', text: 'Mátyás elfoglalja Bécset.', emelt: true },
            { date: '1490', text: 'Mátyás halála Bécsben.' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'reneszánsz',
              text: 'Az ókori művészet és tudomány újjáélesztése, az emberközpontú világkép, a humanizmus; a 15. században Itáliából terjedt el.',
            },
            {
              term: 'Corvina',
              text: 'Mátyás könyvtárának díszes kódexei, a Bibliotheca Corviniana kötetei; a név a Hunyadi-címer hollójából (latinul corvus) ered.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A törökkel szemben: védekezés' },
        {
          kind: 'text',
          text: 'Mátyás a törökellenes háborút apja módszerével folytatta, de óvatosabban. **1463-ban** hadjáratot vezetett a déli határ előterében: elfoglalta **Jajcát**, és ott védőövezetet hozott létre. Később a déli védvonalat (**Szabács** 1476) erősítette. Erdélyben a törökök betörését a **kenyérmezei csatában** állították meg: itt **Báthory István** és **Kinizsi Pál** győzte le az oszmán sereget. Az oszmánokkal ezután hosszabb békét is kötött (1483), mert a nyugati terveire összpontosított.',
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten',
          items: [
            '**1479, kenyérmezei csata**: Erdélyben aratott magyar győzelem, Báthory István és Kinizsi Pál nevéhez fűződik.',
            '**Bosznia, Moldva, Havasalföld**: a magyar király mint hűbérúr igyekezett a határmenti fejedelemségeket maga mellett tartani. A török veszély miatt ezek a területek ütközőzónát jelentettek.',
            '**II. Mehmed** és **Konstantinápoly** (1453): Mátyás kora a török hatalom állandó kiterjesztésének kora, ezért nem volt lehetséges teljes fordulatot elérni.',
          ],
        },
        { kind: 'heading', text: 'Nyugat felé: cseh és osztrák háborúk' },
        {
          kind: 'text',
          text: 'A pápa **1468-ban** keresztes hadjáratot hirdetett a huszita cseh király, Podjebrád György ellen, és Mátyás vállalta a háborút. **1469-ben** a katolikus morva és sziléziai rendek **cseh királlyá** választották. Végül a cseh háborút az **1478-as olmützi béke** zárta le: Mátyás megtartotta Morvaországot, Sziléziát és a Lausitzot, Csehország maga pedig a Jagelló Ulászlóé maradt.',
        },
        {
          kind: 'text',
          text: 'Ezután **III. Frigyes császár** ellen fordult. Az **osztrák tartományokat** megtámadva elfoglalta **Bécset**, majd **1487-ben** Bécsújhelyt. Székhelyét Bécsbe tette át. Mátyás ekkor Közép-Európa legerősebb uralkodói közé tartozott.',
        },
        {
          kind: 'map',
          title: 'Mátyás nyugati és déli területei',
          places: [
            { name: 'Buda', lat: 47.5, lon: 19.04, note: 'a királyi székhely' },
            {
              name: 'Visegrád',
              lat: 47.79,
              lon: 18.97,
              note: 'nyári palota, reneszánsz építkezés',
            },
            { name: 'Bécs', lat: 48.21, lon: 16.37, note: 'Mátyás elfoglalta, itt halt meg' },
            { name: 'Bécsújhely', lat: 47.81, lon: 16.24, note: '1487' },
            { name: 'Olmütz', lat: 49.59, lon: 17.25, note: '1478: a cseh háborút lezáró béke' },
            { name: 'Jajca', lat: 44.34, lon: 17.27, note: '1463: Mátyás hadjárata' },
            { name: 'Szabács', lat: 44.75, lon: 19.69, note: '1476: a déli védvonal erődje' },
            {
              name: 'Kenyérmező',
              lat: 45.85,
              lon: 23.2,
              note: 'győzelem az oszmánok felett (Erdély)',
            },
          ],
        },
        { kind: 'heading', text: 'A birodalomépítő terv' },
        {
          kind: 'text',
          text: 'Mátyás célja az volt, hogy Magyarország, Csehország és az osztrák tartományok egyesítésével **dunai birodalmat** hozzon létre, amelynek ő és utóda uralkodik. Ez megerősítette volna a térséget az oszmánokkal szemben, de a birodalomhoz hiányzott a stabil igazgatás és a törvényes örökös: törvénytelen fia, **Corvin János** nem kapta meg a koronát. A kutatók azt vitatják, mennyire volt tudatos ez a terv, és Mátyás miért fordult inkább nyugatra, mint a török ellen.',
        },
        { kind: 'heading', text: 'A reneszánsz udvar' },
        {
          kind: 'keypoints',
          items: [
            '**Beatrix**: Mátyás 1476-ban feleségül vette Aragóniai Beatrixot, a nápolyi király lányát. Az olasz hatás ettől erősödött.',
            '**Építkezés**: a budai és a visegrádi királyi palota gótikus alapokon reneszánsz stílusban újult meg.',
            '**Corvinák**: Mátyás könyvtára a kor Európájának egyik leghíresebb gyűjteménye volt; ma már csak mintegy kétszáz corvina ismert.',
            '**Humanisták**: **Janus Pannonius** (pécsi püspök, költő), az olasz **Bonfini** (történetíró) és mások az udvarban dolgoztak.',
            '**Nyomda**: **1473-ban** Budán Hess András kinyomtatta az első magyarországi nyomtatott könyvet, a Budai krónikát.',
            '**Oktatás**: **1465-ben** Vitéz János kezdeményezésére Pozsonyban egyetem (Academia Istropolitana) alakult.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Vitéz János**, Mátyás nevelője és kancellárja, esztergomi érsek a magyar humanizmus vezetője volt. Később azonban Mátyás ellen szervezkedő főpapok és főurak közé sodródott (1471), ezért kegyvesztett lett. **Janus Pannonius**, a pécsi püspök, Vitéz unokaöccse is érintett volt, és a szervezkedés után menekülés közben, 1472-ben halt meg.',
        },
        { kind: 'heading', text: 'Út Mohácshoz' },
        {
          kind: 'keypoints',
          items: [
            '**1490**: Mátyás törvényes fia nem volt, ezért a főurak a gyengébb **II. Ulászlót** (Jagelló) választották királynak.',
            'A királyi jövedelmek és a fekete sereg szétesett, a végvárak védői fizetetlenek lettek.',
            'Az **1514-es** Dózsa-féle parasztháború és a rendi széthúzás tovább gyengítette az országot.',
            '**1526**: a mohácsi csata. Erről a következő témakör (a török kor és Erdély) szól.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Évszámok: 1458–1490; emelten 1479 (kenyérmezei csata) és 1485 (Bécs elfoglalása).',
            'Térképi feladat: Bécs, Csehország, Buda, Nándorfehérvár.',
            'Fogalmak: Corvina, reneszánsz, fekete sereg.',
            'Esszé: Hunyadi Mátyás belpolitikája és külpolitikája; hogyan viszonyult a központosítás a birodalomépítéshez?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Mátyás megalapította a Habsburg-birodalmat, vagy hogy sikerült Bécset véglegesen megtartani. Mátyás halála után a Habsburgok visszaszerezték Ausztriát. Másik hiba: Hess András nyomdáját a Corvina-könyvtárral keverni; a Corvinák kézzel írt, díszes kódexek.',
        },
        {
          kind: 'example',
          title: 'Esszévázlat: Mátyás uralkodásának értékelése',
          problem: 'Értékeld Hunyadi Mátyás uralkodását három szempontból.',
          solution:
            '1. Belpolitika: Szent Korona (1463), fekete sereg, regálék és rendkívüli hadiadó, a főurak visszaszorítása. 2. Külpolitika: a déli védvonal, majd a nyugati háborúk, Bécs 1485. 3. Kultúra: a reneszánsz udvar, a Corvina-könyvtár, a humanisták. Mérleg: kiemelkedő központosított állam, de a siker egy ember személyéhez kötődött, és adóterhekre épült; halála után 1490-ben a rendszer összeomlott.',
        },
        {
          kind: 'tip',
          text: 'Mérleg-feladatnál mindig adj pozitívumot és hátrányt is: pozitív a stabilitás és a művelődés, hátrány az adóteher és az, hogy a törökellenes védelmet a nyugati háborúk miatt háttérbe szorította.',
        },
      ],
      topicMatch: ['hunyadi mátyás', '=mátyás', 'i. károly és hunyadi mátyás'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Melyik város elfoglalása fűződik Mátyás 1485-ös hadjáratához?',
          options: ['Prága', 'Bécs', 'Velence', 'Krakkó'],
          answer: 1,
          explanation:
            'Mátyás 1485-ben foglalta el Bécset III. Frigyes császártól, és haláláig ott lakott.',
        },
        {
          question: 'Ki lett Mátyás halála után Magyarország királya?',
          options: ['Corvin János', 'I. Ferdinánd', 'V. László', 'II. Ulászló'],
          answer: 3,
          explanation:
            'A főurak a Jagelló II. Ulászlót választották, mert gyenge királyt akartak. Corvin János nem kapta meg a koronát.',
        },
        {
          question: 'Mi a Corvina?',
          options: [
            'Mátyás könyvtárának díszes kódexe.',
            'Mátyás állandó hadserege.',
            'A budai palota egyik terme.',
            'A Hunyadi-család adója.',
          ],
          answer: 0,
          explanation:
            'A corvinák Mátyás Bibliotheca Corviniana nevű könyvtárának kéziratai; a név a hollós Hunyadi-címerre utal.',
        },
        {
          question: 'Kik győzték le az oszmánokat az 1479-es kenyérmezei csatában?',
          options: [
            'Hunyadi János és Kapisztrán János',
            'Zsigmond és Bajazid',
            'Báthory István és Kinizsi Pál',
            'Szilágyi Mihály és Vitéz János',
          ],
          answer: 2,
          explanation:
            'Erdélyben Báthory István és Kinizsi Pál vezetésével aratott győzelmet a magyar sereg.',
          emelt: true,
        },
        {
          question: 'Ki volt a magyar humanizmus egyik vezetője, Mátyás nevelője és kancellárja?',
          options: ['Janus Pannonius', 'Vitéz János', 'Bonfini', 'Hess András'],
          answer: 1,
          explanation:
            'Vitéz János esztergomi érsek volt Mátyás nevelője. Janus Pannonius költő és pécsi püspök, Bonfini történetíró, Hess András pedig nyomdász volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hunyadi Mátyás', url: wiki('Hunyadi Mátyás külpolitikája') },
        { label: 'Wikipédia: Corvinák', url: wiki('Bibliotheca Corviniana') },
        { label: 'Wikipédia: Kenyérmezei csata', url: wiki('kenyérmezei csata 1479') },
      ],
    },
  ],
};

export default unit;
