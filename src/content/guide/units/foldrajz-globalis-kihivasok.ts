import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 10 (Helyi problémák, globális kihívások, a fenntartható jövő dilemmái), 10.1–10.5. */
const unit: GuideUnit = {
  id: 'globalis-kihivasok',
  subject: 'foldrajz',
  order: 100,
  title: 'Helyi problémák, globális kihívások, a fenntartható jövő dilemmái',
  requirementRef:
    '10.1 Globálissá váló környezetszennyezés; 10.2 Demográfiai és urbanizációs problémák; 10.3 Élelmezés és egészség; 10.4 A fogyasztás és a növekedés következményei; 10.5 Környezet- és természetvédelem, a globális béke',
  intro:
    'A környezetszennyezés és az éghajlatváltozás, a népesség és a városok, az élelmezés, az egészség és a víz, a fogyasztás és a hulladék, végül a környezetvédelem és a nemzetközi összefogás: okok, következmények, megoldások.',
  requirementSource:
    'A követelmények és a fogalmak az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (10. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'helyi, regionális és globális probléma',
        'környezeti katasztrófa',
        'környezetkárosítás',
        'természetes és mesterséges életközösség',
        'veszélyeztetett élőhely',
        'a biológiai sokféleség (biodiverzitás) csökkenése',
        'eltartóképesség',
        'túlnépesedés',
        'születésszabályozás',
        'élelmiszer-túltermelés',
        'túlfogyasztás',
        'éhínség',
        'egyoldalú táplálkozás',
        'éhségövezet',
        'alultápláltság',
        'járvány',
        'hulladékgazdálkodás',
        'szelektív hulladékgyűjtés',
        'fogyasztói társadalom',
        'tudatos fogyasztói közösség',
        'fenntarthatóság',
        'ökológiai lábnyom',
        'megújuló és nem megújuló energiaforrások',
        'környezet- és természetvédelem',
        'nemzeti park',
        'világörökség',
        'FAO',
        'WWF',
        'Túlfogyasztás Napja',
      ],
      emelt: [
        'környezeti válság',
        'klímaválság',
        'élelmezési válság',
        'mennyiségi és minőségi éhezés',
        'biogazdálkodás',
        'GMO',
        'vízlábnyom',
        'nyersanyag- és energiaválság',
        'energiahatékonyság',
        'fogyasztóvédelem',
        'környezetgazdálkodás',
        'természetvédelmi terület',
        'tájvédelmi körzet',
        'bioszféra rezervátum',
        'natúrpark',
        'Natura 2000',
        'Kiotói Jegyzőkönyv',
        'párizsi egyezmény',
        'riói egyezmény',
        'Nemzetközi Vöröskereszt',
        'Máltai Szeretetszolgálat',
      ],
    },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'globalis-kornyezeti-problemak',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'A globálissá váló környezetszennyezés és következményei',
      level: 'kozep',
      requirement: {
        kozep:
          '10.1: a lokális szennyeződés globális következményei; a környezetkárosítás és a katasztrófák társadalmi hatásai; a felkészülés, a mérséklés és a megállítás lehetőségei; a nemzetközi törekvések és az összefogás szükségessége; az emberi tevékenység szerepe az élőhelyek csökkenésében.',
        emelt:
          'A környezeti válság kialakulásának okai és folyamata; a földrajzi környezet változásai; források elemzése, véleményalkotás esetek alapján.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szennyezés nem áll meg a határoknál: a levegő és a vizek továbbszállítják, ezért a **helyi** problémából **regionális**, majd **globális** lesz.',
            'Az **üvegházhatás** természetes, de a fosszilis tüzelőanyagok égetése és az erdőirtás miatt **erősödik**, a Föld átlaghőmérséklete emelkedik. Következmények: hőhullám, aszály, szélsőséges csapadék, olvadó jég, emelkedő tengerszint.',
            'A **savas eső** kén- és nitrogén-oxidokból keletkezik; az **ózonréteg** elvékonyodását a freonok okozták.',
            'Az élőhelyek pusztulása (erdőirtás, mocsarak lecsapolása, beépítés) a **biológiai sokféleség csökkenéséhez** vezet.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Az ENSZ éghajlati testülete (IPCC) szerint a Föld átlaghőmérséklete az ipari forradalom előtti szinthez képest kb. 1,1 °C-kal emelkedett, és ennek fő oka az emberi tevékenység. A válaszok két csoportja: a **mérséklés** (kevesebb kibocsátás, megújuló energia, erdőtelepítés) és az **alkalmazkodás** (árvízvédelem, aszálytűrő növények, hőségriasztás).',
        },
        {
          kind: 'compare',
          title: 'Két légköri probléma',
          columns: ['Az üvegházhatás erősödése', 'Az ózonréteg elvékonyodása'],
          rows: [
            { label: 'Oka', cells: ['szén-dioxid, metán kibocsátása', 'freonok (CFC-gázok)'] },
            {
              label: 'Következménye',
              cells: ['globális felmelegedés', 'több UV-sugárzás jut a felszínre'],
            },
            {
              label: 'Egyezmény',
              cells: [
                'Kiotói Jegyzőkönyv (1997), párizsi egyezmény (2015)',
                'Montreali Jegyzőkönyv (1987)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **környezeti válság** akkor alakul ki, amikor a környezet terhelése tartósan meghaladja a természet megújuló képességét. A fejlődés során a természetes életközösségeket egyre inkább **mesterséges életközösségek** (szántók, ültetvények, városok) váltották fel.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'warning',
          text: 'Ne keverd össze az üvegházhatás erősödését az ózonréteg elvékonyodásával: más az okuk és a következményük is.',
        },
      ],
      topicMatch: ['globális', 'környezeti problémák', 'környezeti és globális'],
      quiz: [
        {
          question: 'Mi az üvegházhatás erősödésének fő oka?',
          options: [
            'a freonok kibocsátása',
            'a fosszilis tüzelőanyagok égetése és az erdőirtás',
            'a vulkánkitörések egyedül',
            'a Föld pályájának változása',
          ],
          answer: 1,
          explanation:
            'A szén-dioxid-kibocsátás és az erdők pusztulása növeli a légkör szén-dioxid-tartalmát.',
        },
        {
          question: 'Melyik egyezmény tiltotta be az ózonkárosító anyagokat?',
          options: [
            'párizsi egyezmény',
            'Kiotói Jegyzőkönyv',
            'Montreali Jegyzőkönyv',
            'Antarktisz-egyezmény',
          ],
          answer: 2,
          explanation: 'A Montreali Jegyzőkönyv (1987) az ózonréteget védi.',
        },
        {
          question: 'Miből keletkezik a savas eső?',
          options: ['kén- és nitrogén-oxidokból', 'oxigénből', 'vízgőzből egyedül', 'ózonból'],
          answer: 0,
          explanation:
            'A kén- és nitrogén-oxidok a légkörben savvá alakulnak, és a csapadékkal hullanak le.',
        },
      ],
      sources: [
        { label: 'IPCC', url: 'https://www.ipcc.ch/' },
        { label: 'Wikipédia: Globális felmelegedés', url: wiki('Globális felmelegedés') },
      ],
    },
    {
      id: 'demografiai-urbanizacios-problemak',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Demográfiai és urbanizációs problémák',
      level: 'kozep',
      requirement: {
        kozep:
          '10.2: a népességszám alakulásának következményei; a népességrobbanás okai, következményei és területi jellemzői; a nagyvárosok terjeszkedésének környezeti következményei; a városi életforma és a környezet terhelése; adatok, ábrák, szövegek elemzése.',
        emelt:
          'Az urbanizációs folyamatok eltérő területi jellemzői és összefüggésük a környezet állapotával.',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Föld népessége 2022-ben elérte a **8 milliárdot**; a növekedés főként Afrikában és Dél-Ázsiában gyors (**népességrobbanás**), a fejlett országokban a népesség öregszik és fogy.',
            'A népességrobbanás oka, hogy a halálozás (egészségügy, higiénia) gyorsan csökkent, a születésszám viszont magas maradt.',
            'Következmények: túlnépesedés, munkanélküliség, éhezés, túlzsúfolt városok, a természeti erőforrások túlhasználata.',
            'A nagyvárosok terjeszkedése beépíti a termőföldet, növeli a forgalmat, a levegő- és zajszennyezést, a hulladék mennyiségét.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A fejlett országokban az **öregedés** a nyugdíj- és egészségügyi rendszert terheli, munkaerőhiányt és bevándorlást okoz. A fejlődő országokban a gyorsan növő városok peremén nyomornegyedek alakulnak ki, hiányos a víz- és csatornahálózat.',
        },
        {
          kind: 'text',
          text: 'A fejlett világban a városokból kiköltözés (szuburbanizáció) a környező tájat terheli; a fejlődő világban a gyors, tervezetlen városnövekedés miatt súlyos a levegő- és vízszennyezés.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Népességi diagramnál nevezd meg a szakaszt (például: magas születés, csökkenő halálozás = népességrobbanás) és a következményt.',
        },
      ],
      topicMatch: ['globális kihívások'],
      quiz: [
        {
          question: 'Mi a népességrobbanás oka?',
          options: [
            'a születésszám csökkenése',
            'a halálozás gyors csökkenése, miközben a születésszám magas marad',
            'a bevándorlás',
            'az öregedés',
          ],
          answer: 1,
          explanation:
            'A javuló egészségügy miatt kevesebben halnak meg, de továbbra is sok gyermek születik.',
        },
        {
          question: 'Mi jellemző a fejlett országok népességére?',
          options: [
            'gyors növekedés',
            'öregedés és fogyás',
            'fiatal korfa',
            'magas csecsemőhalandóság',
          ],
          answer: 1,
          explanation: 'A fejlett országokban kevés a születés, nő az idősek aránya.',
        },
        {
          question: 'Melyik a városterjeszkedés környezeti következménye?',
          options: [
            'nő a termőföld területe',
            'beépül a termőföld, nő a forgalom és a szennyezés',
            'csökken a hulladék',
            'tisztább lesz a levegő',
          ],
          answer: 1,
          explanation:
            'A terjeszkedő városok termőföldet építenek be, és több forgalmat, szennyezést okoznak.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Népességrobbanás', url: wiki('Népességrobbanás') },
        { label: 'Wikipédia: Világnépesség', url: wiki('Világnépesség') },
      ],
    },
    {
      id: 'nepesseg-elelmezes-eroforrasok',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Élelmezés, egészség és víz',
      level: 'kozep',
      requirement: {
        kozep:
          '10.3: az élelmiszertermelés és -fogyasztás területi ellentmondásai; a fejlettség és az egészségi állapot összefüggése, az egyenlőtlenség következményei; források elemzése; a különböző térségek vízigénye, a vízhiány korlátai és következményei.',
        emelt:
          'Az élelmezési válság okai; a mezőgazdasági termelés környezeti hatásai; a bioszféra és a talaj sérülékenysége; a biogazdálkodás; a GMO-termékek.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A világ összességében elég élelmet termel, mégis sokan éheznek: a gond a **területi egyenlőtlenség** és a szegénység. A fejlett világban **élelmiszer-túltermelés** és **túlfogyasztás**, a fejlődő világban **alultápláltság**, **éhínség**, **egyoldalú táplálkozás**.',
            'Az **éhségövezet** főként Trópusi-Afrikát és Dél-Ázsia egyes részeit jelenti.',
            'A szegénység rossz egészségi állapottal jár: alacsonyabb várható élettartam, több **járvány**, magas csecsemőhalandóság.',
            'A **vízhiány** a száraz területeken és a gyorsan növő városokban a legsúlyosabb; a mezőgazdaság (öntözés) használja a legtöbb vizet.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Egy térség vízigénye függ az éghajlattól (párolgás, csapadék), a népesség számától, a mezőgazdaság (öntözés) és az ipar szerkezetétől. A vízhiány következményei: terméskiesés, betegségek, migráció, államok közötti konfliktusok a közös folyók vize miatt.',
        },
        {
          kind: 'text',
          text: 'A termelés fokozása (műtrágya, növényvédő szerek, öntözés) talajromláshoz, szikesedéshez, vízszennyezéshez vezethet. A **biogazdálkodás** vegyszerek nélkül, a talaj termékenységét megőrizve termel. A **GMO** (genetikailag módosított) növényekkel nagyobb termést vagy kártevőkkel szembeni ellenállóságot érnek el, de felhasználásuk vitatott, az EU szigorúan szabályozza.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Esszében hasonlítsd össze a fejlett és a fejlődő világot: ugyanaz a probléma (élelem, víz, egészség) máshogy jelenik meg.',
        },
      ],
      topicMatch: ['fenntartható gazdálkodás', 'fenntartható fogyasztás'],
      quiz: [
        {
          question: 'Mi az éhezés fő oka a világban?',
          options: [
            'a Föld nem termel elég élelmet',
            'az egyenlőtlen elosztás és a szegénység',
            'a túl sok eső',
            'a hideg éghajlat',
          ],
          answer: 1,
          explanation: 'Elég élelmiszer terem, de a szegények nem jutnak hozzá.',
        },
        {
          question: 'Melyik gazdasági ág használja a legtöbb vizet a Földön?',
          options: ['ipar', 'mezőgazdaság (öntözés)', 'háztartások', 'idegenforgalom'],
          answer: 1,
          explanation: 'A vízfelhasználás legnagyobb része öntözésre megy.',
        },
        {
          question: 'Mi jellemző a biogazdálkodásra?',
          options: [
            'sok műtrágya',
            'vegyszermentes termelés a talaj termékenységének megőrzésével',
            'GMO-növények',
            'nagy öntözött monokultúrák',
          ],
          answer: 1,
          explanation: 'A biogazdálkodás kerüli a mesterséges vegyszereket.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'FAO', url: 'https://www.fao.org/' },
        { label: 'Wikipédia: Éhezés', url: wiki('Éhezés') },
      ],
    },
    {
      id: 'hulladek-fenntarthatosag',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Fogyasztás, hulladék, energia és fenntartható gazdaság',
      level: 'kozep',
      requirement: {
        kozep:
          '10.4: a hulladékgazdálkodás jelentősége és megoldásai, az újrahasznosítás; a fenntartható gazdaság jellemzői; az egyén szerepe és felelőssége; a fogyasztói társadalom és a tudatos fogyasztói közösségek; a megújuló és a nem megújuló energiahordozók jellemzői, lehetőségei, korlátai, környezeti következményei.',
        emelt:
          'A nyersanyag- és energiaválság kialakulása; az energia- és nyersanyag-hatékony gazdálkodás, az alternatív energiaforrások; a környezeti szempontok a termelésben és a fogyasztásban; a hagyományos és az elektronikus vásárlás fogyasztóvédelmi szempontból.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A hulladékgazdálkodás sorrendje: **megelőzés**, újrahasználat, **újrahasznosítás** (szelektív hulladékgyűjtés), energetikai hasznosítás, és csak végül a **lerakás**.',
            'A **fogyasztói társadalom** sokat vásárol és dob el; a **tudatos fogyasztói közösség** mérlegeli a termék környezeti hatását, helyi és tartós termékeket választ.',
            '**Nem megújuló** energiahordozó: kőolaj, földgáz, kőszén, urán. **Megújuló**: nap, szél, víz, biomassza, geotermikus energia.',
            'A **fenntartható gazdaság** úgy termel, hogy ne élje fel a jövő erőforrásait (körforgásos gazdaság, energiahatékonyság).',
          ],
        },
      ],
      details: [
        {
          kind: 'compare',
          title: 'Energiahordozók',
          columns: ['Nem megújuló (fosszilis, nukleáris)', 'Megújuló'],
          rows: [
            {
              label: 'Előny',
              cells: [
                'folyamatosan termelhető, nagy energiasűrűség',
                'kifogyhatatlan, alig bocsát ki szén-dioxidot',
              ],
            },
            {
              label: 'Hátrány',
              cells: [
                'kifogy; szén-dioxid, savas eső; az atomenergiánál radioaktív hulladék',
                'időjárásfüggő (nap, szél), tárolás és hálózat kell; tájképi hatás',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **ökológiai lábnyom** azt mutatja, mekkora termékeny terület kell egy ember vagy ország fogyasztásához és hulladékának elnyeléséhez. A **Túlfogyasztás Napja** az a nap az évben, amikor az emberiség felhasználta mindazt, amit a Föld abban az évben meg tud újítani; ez a dátum évtizedek óta egyre korábbra esik.',
        },
        {
          kind: 'text',
          text: 'Az 1970-es évek kőolajár-robbanásai megmutatták, hogy a nyersanyagoktól függő gazdaság sebezhető (energiaválság). Válasz az energiahatékonyság, a takarékos technológia és az alternatív energiaforrások fejlesztése. Elektronikus vásárlásnál fogyasztóvédelmi szempont például az elállási jog és a megbízható kereskedő kiválasztása.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'example',
          title: 'Számolás: újrahasznosítási arány',
          problem:
            'Egy városban egy évben 120 ezer tonna települési hulladék keletkezett, ebből 42 ezer tonnát hasznosítottak újra. Mekkora az újrahasznosítási arány?',
          solution: '$42\\,000 / 120\\,000 = 0{,}35$, vagyis **35%**.',
        },
      ],
      topicMatch: ['hulladékkezelés', 'fenntarthatóság', 'fenntartható divat'],
      quiz: [
        {
          question: 'Mi áll a hulladékgazdálkodás sorrendjének élén?',
          options: ['lerakás', 'égetés', 'megelőzés', 'újrahasznosítás'],
          answer: 2,
          explanation: 'A legjobb hulladék az, amely nem keletkezik.',
        },
        {
          question: 'Melyik megújuló energiaforrás?',
          options: ['földgáz', 'szélenergia', 'kőszén', 'uránérc'],
          answer: 1,
          explanation: 'A szélenergia folyamatosan újratermelődik.',
        },
        {
          question: 'Mit jelent a Túlfogyasztás Napja?',
          options: [
            'a karácsonyi vásárlási csúcsot',
            'azt a napot, amikor az emberiség elhasználta a Föld adott évi megújuló erőforrásait',
            'a hulladékgyűjtés napját',
            'az energiaárak emelkedésének napját',
          ],
          answer: 1,
          explanation: 'Utána az év végéig a jövő kárára fogyasztunk.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Ökológiai lábnyom', url: wiki('Ökológiai lábnyom') },
        { label: 'Wikipédia: Körforgásos gazdaság', url: wiki('Körforgásos gazdaság') },
      ],
    },
    {
      id: 'kornyezetvedelem-nemzetkozi-osszefogas',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Környezet- és természetvédelem, nemzetközi összefogás',
      level: 'kozep',
      requirement: {
        kozep:
          '10.5: a globális környezeti problémák felismerése hírekben, folyamatokban, és okaik; a nemzetközi szervezetek tevékenysége; a természeti-táji értékek és a kultúrkincs védelme; az egyén társadalmi szerepvállalása; a fenntarthatóság fogalma és elérésének lehetőségei; a helyi, regionális és nemzetközi összefogás.',
        emelt:
          'A fő nemzetközi környezetvédelmi egyezmények és célok, megvalósításuk eredményei és nehézségei; a háborúk és fegyveres konfliktusok földrajzi okai és következményei; a nemzetközi humanitárius szervezetek.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **fenntartható fejlődés** úgy elégíti ki a jelen szükségleteit, hogy nem veszélyezteti a jövő nemzedékek esélyeit.',
            'Nemzetközi szervezetek: **FAO** (az ENSZ élelmezésügyi és mezőgazdasági szervezete), **WWF** (természetvédelmi alap), az **UNESCO** (világörökség).',
            'Az értékek védelme: **nemzeti parkok**, védett területek, a **világörökség** listája.',
            'Az egyén szerepe: szelektív gyűjtés, takarékos energia- és vízhasználat, közösségi közlekedés, önkéntesség, helyi környezetvédő szerveződések.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A védelem szintjei: **helyi** (település, civil szervezet: faültetés, szemétszedés), **regionális** (például egy folyó vízgyűjtőjének országai), **nemzetközi** (egyezmények, ENSZ-szervezetek). A globális problémákat csak összefogással lehet kezelni, mert a szennyezés és az éghajlatváltozás nem ismer határokat.',
        },
        {
          kind: 'text',
          text: 'Fontos egyezmények: a **riói** ENSZ-konferencia (1992) egyezményei az éghajlatról és a biológiai sokféleségről; a **Kiotói Jegyzőkönyv** (1997) kibocsátás-csökkentési vállalásai; a **párizsi egyezmény** (2015) célja, hogy a melegedés jóval 2 °C alatt maradjon. Nehézség, hogy a vállalások teljesítése önkéntes vagy nehezen ellenőrizhető. A háborúk okai között gyakran ott van az erőforrásokért (víz, kőolaj, termőföld) folyó verseny; következményük menekültáradat, éhínség, környezetpusztulás. Humanitárius segítséget nyújt például a **Nemzetközi Vöröskereszt** és a **Máltai Szeretetszolgálat**.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Ha a feladat egy hírt vagy képet mutat, nevezd meg a problémát, az okát, a következményét és egy helyi és egy nemzetközi megoldást.',
        },
      ],
      topicMatch: ['környezetvédelem'],
      quiz: [
        {
          question: 'Mi a FAO?',
          options: [
            'természetvédelmi alap',
            'az ENSZ élelmezésügyi és mezőgazdasági szervezete',
            'egy nemzeti park',
            'egy energiaügynökség',
          ],
          answer: 1,
          explanation: 'A FAO az éhezés és az élelmezés kérdéseivel foglalkozó ENSZ-szervezet.',
        },
        {
          question: 'Mi a fenntartható fejlődés lényege?',
          options: [
            'a gazdaság bármi áron való növelése',
            'a jelen szükségleteinek kielégítése a jövő nemzedékek esélyeinek veszélyeztetése nélkül',
            'a fogyasztás teljes megszüntetése',
            'csak a természetvédelem',
          ],
          answer: 1,
          explanation: 'Ez a fenntartható fejlődés általánosan elfogadott meghatározása.',
        },
        {
          question: 'Melyik egyezmény célja, hogy a melegedés jóval 2 °C alatt maradjon?',
          options: [
            'Montreali Jegyzőkönyv',
            'párizsi egyezmény',
            'Antarktisz-egyezmény',
            'riói egyezmény a sivatagokról',
          ],
          answer: 1,
          explanation: 'A párizsi egyezményt 2015-ben fogadták el.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Fenntartható fejlődés', url: wiki('Fenntartható fejlődés') },
        { label: 'Wikipédia: Párizsi klímaegyezmény', url: wiki('Párizsi klímaegyezmény') },
      ],
    },
  ],
};

export default unit;
