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
      title: 'A lokális szennyezés globális következményei: üvegházhatás, ózonréteg, savas eső',
      level: 'kozep',
      requirement: {
        kozep:
          '10.1: Ismertesse példák alapján a lokális szennyeződés globális következményeit. Mutassa be a változásokra történő felkészülés és a változások mérséklésének, megállításának lehetőségeit. Ismertesse a megoldásokra irányuló nemzetközi törekvéseket, indokolja az összefogás szükségességét.',
        emelt:
          'Értelmezze a környezeti válság kialakulásának okait és folyamatát. Mutassa be a földrajzi környezet társadalmi tevékenységek hatására bekövetkezett változásait. Elemezzen a témához kapcsolódó forrásokat. Alkosson véleményt konkrét példák, esetelemzések alapján.',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szennyezés nem áll meg a határnál: a levegő, a folyók és a tengeri áramlatok **továbbviszik**, ezért a **helyi** problémából **regionális**, majd **globális** probléma lesz.',
            'Az **üvegházhatás** természetes, és élhetővé teszi a Földet. A **fokozódó** üvegházhatás oka a szén-dioxid, a metán és más üvegházgázok kibocsátása (fosszilis tüzelőanyagok égetése, erdőirtás, mezőgazdaság). Az IPCC szerint a felszín átlaghőmérséklete 2011–2020-ban kb. **1,1 °C-kal** volt magasabb, mint 1850–1900-ban.',
            'A **savas eső** oka a kén-dioxid és a nitrogén-oxidok kibocsátása; az **ózonréteg** elvékonyodását a **freonok** (CFC-k) okozták, és a Montreali Jegyzőkönyv (1987) fékezte meg.',
            'Két válaszcsoport van: a **mérséklés** (a kibocsátás csökkentése, megállítása) és az **alkalmazkodás** (felkészülés a változásra). Mindkettő nemzetközi összefogást kíván.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Helyi, regionális, globális: hogyan nő meg egy probléma?' },
        {
          kind: 'text',
          text: 'A **helyi** (lokális) probléma egy településre vagy tájra korlátozódik, például egy gyár füstje vagy egy szennyezett patak. **Regionális** a probléma, ha több országot érint, például a savas eső a szél irányában messze az okozótól, vagy egy folyó szennyezése az alsó szakasz országaiban. **Globális** a probléma, ha az egész Földre hat, vagy ha mindenhol megjelenik, és csak közös fellépéssel kezelhető.',
        },
        {
          kind: 'text',
          text: 'Az átmenetet a Föld **kapcsolt rendszerei** teszik lehetővé: a légkör, a vízburok és az élővilág mozgó közegek. A csernobili atomerőmű-baleset (1986) radioaktív felhője Európa nagy részén kimutatható volt; a freonok a talajszinten kerültek a levegőbe, mégis a sztratoszférában bontották az ózont; a szén-dioxid pedig bárhol kerül a légkörbe, az egész légkör összetételét változtatja.',
        },
        { kind: 'heading', text: 'Az üvegházhatás erősödése és az éghajlatváltozás' },
        {
          kind: 'text',
          text: 'A légkör üvegházgázai (vízgőz, szén-dioxid, metán, dinitrogén-oxid, ózon, freonok) átengedik a Nap rövidhullámú sugárzását, de a felszín hosszúhullámú hősugárzásának egy részét elnyelik és visszasugározzák. E **természetes üvegházhatás** nélkül a Föld átlaghőmérséklete jóval fagypont alatt lenne. A probléma az **erősödés**: az ipari forradalom óta az ember egyre több üvegházgázt juttat a légkörbe.',
        },
        { kind: 'heading', text: 'A fokozódó üvegházhatás fő forrásai' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Fosszilis tüzelőanyagok égetése',
              text: 'szén, kőolaj és földgáz az erőművekben, a közlekedésben, az iparban és a fűtésben: ez a legfontosabb szén-dioxid-forrás.',
            },
            {
              term: 'Erdőirtás és földhasználat-változás',
              text: 'az erdő szén-dioxidot köt meg, kivágása és égetése ezt visszajuttatja a légkörbe, és csökkenti a megkötést.',
            },
            {
              term: 'Mezőgazdaság',
              text: 'a kérődző állatok és a vizes rizsföldek metánt, a műtrágyázás dinitrogén-oxidot bocsát ki.',
            },
            {
              term: 'Hulladéklerakók, ipari folyamatok',
              text: 'a lerakókban keletkező metán; a cementgyártás szén-dioxidja; a hűtőközegek fluortartalmú gázai.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A mérések szerint a légkör szén-dioxid-koncentrációja az ipari forradalom előtti kb. 280 ppm-ről a 2020-as években 420 ppm fölé emelkedett. Az **IPCC** (az ENSZ éghajlat-változási kormányközi testülete) hatodik értékelő jelentése (AR6, 2021–2023) szerint az emberi hatás a légkör, az óceánok és a szárazföldek felmelegedésében **egyértelmű**, a felszín átlaghőmérséklete 2011–2020-ban kb. 1,1 °C-kal haladta meg az 1850–1900-as értéket, a tengerszint pedig 1901 és 2018 között átlagosan kb. 20 cm-t emelkedett. A Meteorológiai Világszervezet (WMO) szerint 2024 volt a mért legmelegebb év (kb. 1,55 °C az 1850–1900-as átlag fölött). Ez egyetlen év adata, amelyet az El Niño is növelt: a hosszú távú felmelegedés ennél kisebb, és a vizsgán a több évtizedes átlag a mérvadó.',
        },
        {
          kind: 'example',
          title: 'Számolás: mennyit nőtt a szén-dioxid-koncentráció?',
          problem:
            'A légkör szén-dioxid-tartalma az ipari forradalom előtt kb. 280 ppm volt, ma kb. 420 ppm. Hány százalékos a növekedés?',
          solution:
            '$\\dfrac{420-280}{280} = \\dfrac{140}{280} = 0{,}5$, vagyis a koncentráció kb. **50%-kal** nőtt. Figyelj a kérdésre: a változás a *kiindulási* (280) értékhez viszonyított arány, nem a mai értékhez (140/420 = 33% lenne, ez hibás válasz).',
        },
        {
          kind: 'text',
          text: 'A következmények egymásra épülnek. **Természeti**: a hőhullámok és az aszályok gyakoribbak és erősebbek, a nagy csapadékok és az árvizek nagyobb eséllyel következnek be, a gleccserek, a sarki jégtakaró és a szárazföldi jég olvad, a melegedő óceán kitágul, így a **tengerszint emelkedik**, az óceánok pedig a több szén-dioxid miatt savasodnak. **Társadalmi-gazdasági**: terméskiesés és vízhiány egyes térségekben, árvízi és viharkárok, part menti városok és kis szigetállamok veszélyeztetettsége, a trópusi betegségek elterjedési területének változása, éghajlati menekültek. A hatás **területileg egyenlőtlen**: a legkevesebbet kibocsátó, szegény országok sokszor a legsérülékenyebbek.',
        },
        { kind: 'heading', text: 'Az ózonréteg elvékonyodása' },
        {
          kind: 'text',
          text: 'A sztratoszférában (kb. 20–30 km magasan) az ózonréteg elnyeli a Nap ibolyántúli (UV) sugárzásának nagy részét. A **freonok** (CFC-k: hűtőgépek, spray-k, habosítók gázai) a talajszinten ártalmatlanok és stabilak, felkerülnek a sztratoszférába, ott az UV-sugárzás klóratomokat szabadít fel belőlük, amelyek az ózont bontják. Az **ózonlyuk** (az Antarktisz fölött tavasszal, szeptember–októberben kialakuló nagy ritkulás) megfigyelését az 1980-as években közölték. Több UV-sugárzás jut a felszínre: nő a bőrrák és a szürkehályog kockázata, károsodik a fitoplankton és egyes növények.',
        },
        {
          kind: 'text',
          text: 'A **Montreali Jegyzőkönyv** (1987) a freonok és más ózonkárosító anyagok gyártásának és használatának felszámolására jött létre. A nemzetközi összefogás egyik legsikeresebb példája: az ózonkárosító anyagok kb. 99%-át kivonták, és az ENSZ szakértői szerint az ózonréteg a jelenlegi politikával az Antarktisz fölött kb. 2066-ra, az Északi-sark fölött kb. 2045-re, a világ többi részén kb. 2040-re állhat vissza az 1980-as szintre.',
        },
        { kind: 'heading', text: 'Savas eső és légszennyezés' },
        {
          kind: 'text',
          text: 'A **savas eső** a hőerőművek, a fémkohászat és a közlekedés **kén-dioxid** és **nitrogén-oxid** kibocsátásából keletkezik: a légkörben kénsavvá és salétromsavvá alakulnak, és a csapadékkal (vagy száraz kicsapódással) kerülnek a talajra. Károsítja az erdőket, savasítja a tavakat és a talajt, pusztítja a kőszobrokat, épületeket. Tipikus példa az észak-európai tavak elsavasodása, mert a szél messze elviszi a szennyezést a forrásától (regionális probléma). A megoldás: kén-dioxid-leválasztás az erőművekben, katalizátoros autók, tisztább tüzelőanyagok, az összefogás pedig a határokon átnyúló légszennyezésről szóló európai egyezmények.',
        },
        {
          kind: 'compare',
          title: 'Az üvegházhatás erősödése és az ózonréteg elvékonyodása',
          columns: ['Fokozódó üvegházhatás', 'Ózonréteg elvékonyodása'],
          rows: [
            {
              label: 'Fő ok',
              cells: [
                'szén-dioxid, metán, dinitrogén-oxid kibocsátása',
                'freonok (CFC-k) és más halogénezett vegyületek',
              ],
            },
            {
              label: 'Hol hat?',
              cells: ['a troposzférában (hőmérséklet)', 'a sztratoszférában (ózonréteg)'],
            },
            { label: 'Léptéke', cells: ['globális', 'globális'] },
            {
              label: 'Fő következmény',
              cells: [
                'globális felmelegedés, szélsőséges időjárás, tengerszint-emelkedés',
                'több UV-sugárzás: bőrrák, szürkehályog, károsodó élővilág',
              ],
            },
            {
              label: 'Nemzetközi válasz',
              cells: [
                'ENSZ éghajlat-változási keretegyezmény (1992), Kiotói Jegyzőkönyv (1997), párizsi egyezmény (2015)',
                'Montreali Jegyzőkönyv (1987)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **savas eső** ezektől eltér: oka a kén-dioxid és a nitrogén-oxidok kibocsátása, a hatása inkább **regionális** (a szennyező forrástól távol is jelentkezik), következménye a savasodó talaj és víz, az erdőpusztulás és az épületkárok. A nemzetközi válasz a határokon átterjedő légszennyezést korlátozó európai megállapodások.',
        },
        { kind: 'heading', text: 'Mit lehet tenni? Mérséklés, alkalmazkodás, összefogás' },
        {
          kind: 'compare',
          title: 'Mérséklés és alkalmazkodás',
          columns: ['Mérséklés (megelőzés, megállítás)', 'Alkalmazkodás (felkészülés)'],
          rows: [
            {
              label: 'Célja',
              cells: ['az okok csökkentése: kevesebb kibocsátás', 'a következmények kezelése'],
            },
            {
              label: 'Példák',
              cells: [
                'megújuló energia, energiatakarékosság, hatékonyabb közlekedés, erdőtelepítés, a metánkibocsátás csökkentése',
                'árvízvédelmi gátak, hőségriasztás, aszálytűrő növényfajták, vízmegtartó gazdálkodás, a part menti építkezés korlátozása',
              ],
            },
            {
              label: 'Ki dönt?',
              cells: [
                'főként kormányok, nemzetközi megállapodások, vállalatok, de az egyén fogyasztása is számít',
                'főként helyi és regionális szint: települések, gazdák, katasztrófavédelem',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Miért kell az összefogás?** A légkör közös: a kibocsátás hatása nem a kibocsátó országban jelentkezik, így önmagában egyetlen állam sem tudja megoldani a problémát. Ha egy ország csökkenti kibocsátását, de mások nem, haszna kicsi, ezért bizalom és kötelező vagy ellenőrizhető vállalások kellenek. Az ENSZ keretében ezért születtek egyezmények (éghajlat: 1992 Rio, 1997 Kiotó, 2015 Párizs; ózon: 1987 Montreal), és ezért van szerepük a helyi szinteknek is.',
        },
        {
          kind: 'text',
          text: 'A **környezeti válság** nem egyetlen szennyezés, hanem akkor alakul ki, amikor a környezet terhelése több ponton egyszerre és tartósan meghaladja a természet **megújuló képességét**. Folyamata: (1) a népességnövekedés, a technika fejlődése és a fogyasztás emelkedése nő a terhelést; (2) a helyi problémák (szennyezés, élőhelypusztulás) halmozódnak és összekapcsolódnak; (3) regionális, majd globális problémák (éghajlat, ózon, biológiai sokféleség) alakulnak ki; (4) a visszacsatolások (például a jég olvadása csökkenti a visszaverődést, így tovább melegít) felgyorsíthatják a változást. A **földrajzi környezet** társadalmi hatásra bekövetkezett változásai: a természetes életközösségek helyére lépő **mesterséges életközösségek** (szántó, ültetvény, város), a megváltozott folyók és tavak, a talajok pusztulása, a légkör összetételének módosulása. A **klímaválság** kifejezés az éghajlatváltozás súlyosságát hangsúlyozza.',
          emelt: true,
        },
        {
          kind: 'text',
          text: 'Esetelemzésnél ezt a lépéssort használd. (1) Mi a probléma, és milyen léptékű? (2) Mi az ok (természeti vagy emberi)? (3) Kiket és hogyan érint (életkörülmény, gazdaság, egészség)? (4) Milyen megoldás van (mérséklés, alkalmazkodás, nemzetközi megállapodás), és mik a korlátai? (5) Véleményed adat vagy példa nélkül nem ér semmit: hivatkozz a forrásra („a grafikon szerint…”).',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Az írásbeli vizsgán** a téma rövid választ kérő kérdésekben, tesztekben és ábra- vagy szövegelemzésben jelenik meg: hőmérséklet-anomália és szén-dioxid-koncentráció grafikonja, a „fogalom – ok – következmény” párosítása, hírrészlet felismerése. **A szóbeli** vizsgán ez a téma a második (társadalomföldrajzi) feladatban szerepelhet: a „Helyi problémák, globális kihívások, a fenntartható jövő dilemmái” témakörből egy 20 tételes tételsorban 4 tétel van. A felelet 30 pontos: 23 pont a tartalom, 4 a logikus felépítés, 3 a szaknyelv és az eszközhasználat (atlasz), ezért önállóan, összefüggően és szakszavakkal kell beszélned.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd az **üvegházhatás erősödését** és az **ózonréteg elvékonyodását**: más gáz, más légkörréteg, más következmény. A freonok nem a felmelegedés fő okai, a szén-dioxid pedig nem az ózonlyuk oka. Az ózonrétegre tilalom van, az éghajlatra eddig csak mérséklési vállalások.',
        },
        {
          kind: 'warning',
          text: 'Egyetlen meleg év vagy egy hideg tél nem bizonyít semmit az éghajlatról: az éghajlat több évtizedes átlag. Írd le pontosan: „az átlaghőmérséklet az ipari forradalom előtti szinthez képest emelkedett”, ne „minden évben melegebb lesz”.',
        },
        {
          kind: 'tip',
          text: 'Tételvázlat az éghajlatváltozásról: (1) a természetes és a fokozódó üvegházhatás; (2) okok (fosszilis energia, erdőirtás, mezőgazdaság), (3) természeti következmények (hőhullámok, aszály, olvadás, tengerszint), (4) társadalmi-gazdasági következmények (terméskiesés, vízhiány, migráció, árvízkár), (5) mérséklés és alkalmazkodás, (6) nemzetközi összefogás és a nehézségei. Zárd egy példával a környezetedből.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz („Indokold, miért szükséges a nemzetközi összefogás!”): „A légkör közös, a kibocsátott üvegházgázok az egész Földön hatnak, a következmények gyakran nem a kibocsátónál jelentkeznek. Ezért egy ország önállóan nem tud megoldást hozni, közös célok és vállalások kellenek, mint a Montreali Jegyzőkönyv az ózonréteg védelmében.”',
        },
      ],
      topicMatch: [
        'globális felmelegedés',
        'globális éghajlatváltozás',
        'globális környezeti problémák',
        'környezeti és globális problémák',
        'környezeti problémák',
      ],
      quiz: [
        {
          question: 'Mi a fokozódó üvegházhatás fő oka?',
          options: [
            'a freonok kibocsátása',
            'a fosszilis tüzelőanyagok égetése és az erdőirtás',
            'a vulkánok kitörése egyedül',
            'a Föld pályájának változása',
          ],
          answer: 1,
          explanation:
            'A szén-dioxid-kibocsátás és az erdők pusztulása növeli az üvegházgázok mennyiségét a légkörben; a freonok az ózonréteget károsítják.',
        },
        {
          question: 'Melyik egyezmény korlátozta az ózonkárosító anyagok (freonok) használatát?',
          options: [
            'párizsi egyezmény',
            'Kiotói Jegyzőkönyv',
            'Montreali Jegyzőkönyv',
            'a riói biodiverzitási egyezmény',
          ],
          answer: 2,
          explanation: 'A Montreali Jegyzőkönyv (1987) az ózonréteg védelmére született.',
        },
        {
          question: 'Miből keletkezik a savas eső?',
          options: [
            'kén-dioxidból és nitrogén-oxidokból',
            'szén-dioxidból és oxigénből',
            'freonokból',
            'ózonból és vízgőzből',
          ],
          answer: 0,
          explanation:
            'A kén-dioxid és a nitrogén-oxidok a légkörben savvá alakulnak, és a csapadékkal kerülnek le.',
        },
        {
          question: 'Melyik állítás igaz a mérsékléssel és az alkalmazkodással kapcsolatban?',
          options: [
            'a hőségriasztás mérséklési intézkedés',
            'az árvízvédelmi gát az alkalmazkodás példája, a megújuló energia a mérséklésé',
            'az erdőtelepítés alkalmazkodási intézkedés, az árvízi gát mérséklési',
            'mindkettő ugyanazt jelenti',
          ],
          answer: 1,
          explanation:
            'A mérséklés a kibocsátást csökkenti (megújuló energia), az alkalmazkodás a hatásokra készít fel (gát, hőségriasztás).',
        },
        {
          question: 'Miért szükséges a nemzetközi összefogás a globális környezeti problémáknál?',
          options: [
            'mert a szennyezés és a légkör nem ismer országhatárt, egy ország egyedül nem oldhatja meg',
            'mert csak az ENSZ tagjai szennyeznek',
            'mert a problémák csak a fejlődő országokban léteznek',
            'mert a kibocsátás hatása mindig a kibocsátó országban jelentkezik',
          ],
          answer: 0,
          explanation:
            'A légkör és a vizek közösek, a hatások átlépik a határokat, ezért közös vállalások kellenek.',
        },
        {
          question: 'Mi jellemzi a környezeti válság kialakulását?',
          options: [
            'egyetlen szennyezés okozza',
            'a terhelés több területen tartósan meghaladja a természet megújuló képességét',
            'csak természeti folyamatok miatt alakul ki',
            'mindig gyorsan, néhány hónap alatt zajlik le',
          ],
          answer: 1,
          explanation:
            'A környezeti válság akkor áll elő, ha a halmozódó terhelés meghaladja a természet megújuló képességét.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'IPCC: Hatodik értékelő jelentés (AR6)',
          url: 'https://www.ipcc.ch/assessment-report/ar6/',
        },
        { label: 'WMO: a 2024-es év éghajlati állapota', url: 'https://wmo.int/' },
        { label: 'Wikipédia: Globális felmelegedés', url: wiki('Globális felmelegedés') },
      ],
    },
    {
      id: 'elohelyek-biodiverzitas-katasztrofak',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Élőhelyek pusztulása, biológiai sokféleség, környezeti katasztrófák',
      level: 'kozep',
      requirement: {
        kozep:
          '10.1: Mutassa be a környezetkárosítás és a környezeti katasztrófák társadalmi következményeit, életkörülményekre gyakorolt hatását példák alapján. Mutassa be a változásokra történő felkészülés és a változások mérséklésének, megállításának lehetőségeit. Mutassa be az emberi tevékenység szerepét a természetes életközösségek, élőhelyek számának csökkenésében. Ismertesse e folyamat következményeit.',
        emelt:
          'Értelmezze a környezeti válság kialakulásának okait és folyamatát; mutassa be a földrajzi környezet társadalmi tevékenységek hatására bekövetkezett változásait; elemezzen forrásokat, alkosson véleményt konkrét példák, esetelemzések alapján.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az ember a **természetes életközösségeket** (erdő, mocsár, gyep, korallzátony) egyre inkább **mesterséges** életközösségekkel (szántó, ültetvény, város, út) váltja fel. Ez az **élőhelyek** pusztulása és szétdarabolása.',
            'Következmény a **biológiai sokféleség (biodiverzitás) csökkenése**: fajok tűnnek el, az ökoszisztémák kevésbé stabilak. Az ENSZ biodiverzitási testülete (IPBES, 2019) szerint kb. egymillió faj kihalással fenyegetett.',
            '**Környezetkárosítás** a folyamatos terhelés (talaj- és vízszennyezés, erdőirtás); **környezeti katasztrófa** a hirtelen, nagy kárral járó esemény (atomerőmű-baleset, olajszennyezés, gátszakadás, zagytározó-szakadás).',
            'A felkészülés: előrejelzés, riasztás, szabályozás, védelmi rendszerek. A megoldás: megelőzés, kárelhárítás, **kármentesítés**, védett területek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az élőhelyek pusztulásának okai' },
        { kind: 'heading', text: 'Mi csökkenti az élőhelyek számát és területét?' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Erdőirtás',
              text: 'fa- és fűtőanyag, legelő és szántó (például szója, marhatartás, pálmaolaj-ültetvények) kedvéért; a trópusi esőerdők a legfajgazdagabb élőhelyek közé tartoznak.',
            },
            {
              term: 'Mezőgazdaság terjeszkedése és intenzívvé válása',
              text: 'a nagy táblák és a monokultúrák kiszorítják a természetes növénytakarót; a műtrágya és a növényvédő szer terheli a vizeket.',
            },
            {
              term: 'Mocsarak, ártéri területek lecsapolása, folyószabályozás',
              text: 'a vizes élőhelyek eltűnnek. Magyarországon a 19. századi folyószabályozás és lecsapolás az árterek és mocsarak nagy részét megszüntette.',
            },
            {
              term: 'Beépítés, infrastruktúra',
              text: 'városok, ipari területek, utak és vasutak elfoglalják és szétdarabolják az élőhelyeket, a vadállatok vándorútjait elvágják.',
            },
            {
              term: 'Szennyezés',
              text: 'a víz, a levegő és a talaj szennyezése elpusztítja vagy elűzi a fajokat.',
            },
            {
              term: 'Túlzott kitermelés',
              text: 'túlhalászat, orvvadászat, ritka fajok kereskedelme.',
            },
            {
              term: 'Idegen (özön-) fajok és éghajlatváltozás',
              text: 'az új fajok kiszorítják a honosakat; a melegedés megváltoztatja az élőhelyek hőmérsékletét és vízellátását.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Egy **veszélyeztetett élőhely** az, amelynek területe vagy állapota rohamosan romlik, így az ott élő fajok léte kérdéses. Az élőhely nemcsak kisebb lesz, hanem **szétdarabolódik**: a kis foltokon kevés egyed él, amelyek nem tudnak egymással találkozni, ezért a populációk sérülékenyebbek.',
        },
        { kind: 'heading', text: 'A biológiai sokféleség csökkenésének következményei' },
        {
          kind: 'text',
          text: 'A **biológiai sokféleség (biodiverzitás)** a gének, a fajok és az életközösségek sokfélesége. Csökkenése nem csak a természetet szegényíti: az ökoszisztémák **szolgáltatásai** (a beporzás, a vízmegtartás, a talajvédelem, az árvízvédelem, a levegő és a víz tisztítása, a szénmegkötés, a gyógyszer- és élelmiszer-alapanyag) is romlanak. Az elszegényedett ökoszisztéma kevésbé ellenálló a kártevőkkel, az aszállyal, a betegségekkel szemben, a mezőgazdaság pedig a beporzók (méhek) és a talaj élővilágának hanyatlását szenvedi meg. A kipusztult faj már **nem pótolható**. Hatás az emberre: élelmezésbiztonság, gazdasági veszteség, kevesebb gyógyszerkutatási lehetőség, a települések védelme is gyengül.',
        },
        {
          kind: 'compare',
          title: 'Természetes és mesterséges életközösség',
          columns: ['Természetes életközösség', 'Mesterséges életközösség'],
          rows: [
            {
              label: 'Példa',
              cells: ['esőerdő, mocsár, természetes gyep', 'szántó, ültetvény, parkerdő, város'],
            },
            {
              label: 'Fajgazdagság',
              cells: ['nagy, sokféle faj', 'kicsi, gyakran egy-két faj (monokultúra)'],
            },
            {
              label: 'Fenntartás',
              cells: [
                'önszabályozó, külön emberi beavatkozás nélkül működik',
                'az ember tartja fenn (vetés, vegyszer, öntözés)',
              ],
            },
            {
              label: 'Ellenálló képesség',
              cells: ['nagyobb', 'kisebb, sérülékenyebb'],
            },
          ],
        },
        { kind: 'heading', text: 'Környezetkárosítás és környezeti katasztrófa' },
        {
          kind: 'text',
          text: '**Környezetkárosítás**: az emberi tevékenység okozta, lassabb, tartós környezetromlás (talajromlás, talajvíz-szennyezés, tavak elöregedése, folyamatos légszennyezés). **Környezeti katasztrófa**: hirtelen bekövetkező, nagy kiterjedésű, gyakran emberi mulasztás vagy műszaki hiba miatti esemény, amely életeket, megélhetést és a természetet is súlyosan érinti. Természeti katasztrófa (földrengés, árvíz) és emberi katasztrófa nem mindig különül el: egy földrengés vagy cunami atomerőműbalesetet vagy vegyi kiömlést is okozhat.',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1984',
              text: 'Bhopal (India): egy vegyi üzemben mérgező gáz szabadult ki, az emberi veszteség rendkívül nagy volt.',
            },
            {
              date: '1986',
              text: 'Csernobil (Ukrajna): atomerőmű-baleset, a radioaktív szennyezés Európa nagy részén kimutatható volt, nagy területet kellett kitelepíteni.',
            },
            {
              date: '1989',
              text: 'Exxon Valdez: olajszállító tartályhajó zátonyra futott Alaszka partjainál, az olaj nagy partszakaszt szennyezett be.',
            },
            {
              date: '2000',
              text: 'A romániai Nagybánya közelében zagytározó szakadt, a ciános szennyezés a Szamos és a Tisza halállományát elpusztította.',
            },
            {
              date: '2010',
              text: 'Magyarország, Ajka: a vörösiszap-tározó gátja átszakadt, az iszap elöntötte Kolontárt és Devecsert; emberek haltak meg, a talaj és a vizek károsodtak. Ugyanebben az évben a Deepwater Horizon olajfúró-platform robbanása a Mexikói-öbölben nagy olajszennyezést okozott.',
            },
            {
              date: '2011',
              text: 'Fukushima (Japán): a földrengés és a cunami következtében atomerőmű-baleset történt.',
            },
          ],
        },
        {
          kind: 'text',
          text: '**Társadalmi következmények és életkörülmények**: kitelepítés és otthonvesztés, egészségkárosodás, megélhetés elvesztése (halászat, mezőgazdaság), a termőterület és az ivóvíz szennyeződése, hosszú tisztítási költségek, a bizalom megrendülése. A következményeket általában a szegényebb, kiszolgáltatottabb csoportok viselik legjobban. Az Aral-tó példája lassú környezeti katasztrófát mutat: az Amu-darja és a Szir-darja vizét öntözésre vonták el (főként gyapotra), a tó nagy része kiszáradt, a halászat megszűnt, a kiszáradt tófenék sós pora az egészséget és a mezőgazdaságot is rontja.',
        },
        { kind: 'heading', text: 'Felkészülés, mérséklés, megállítás' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Megelőzés',
              text: 'a káros hatás keletkezésének megakadályozása: környezeti hatásvizsgálat, szigorú biztonsági előírások, tisztább technológia, élőhelyvédelem, hulladékcsökkentés.',
            },
            {
              term: 'Felkészülés',
              text: 'a bekövetkezés valószínű hatásainak csökkentése: előrejelző és riasztó rendszerek, katasztrófavédelmi tervek, gátak, kitelepítési gyakorlatok, a lakosság tájékoztatása.',
            },
            {
              term: 'Elhárítás és helyreállítás',
              text: 'a kár korlátozása és a helyzet rendbetétele: kárelhárítás (olajzár, gátfelújítás), kármentesítés, rekultiváció (a terület újrahasznosítható állapotba hozása), élőhely-helyreállítás.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az élőhelyek megőrzésének eszközei: védett területek és ökológiai folyosók (amelyek összekötik a megmaradt élőhelyfoltokat), a mezőgazdasági területek természetbarát kezelése, az erdők fenntartható gazdálkodása, a vadon élő fajok kereskedelmének korlátozása, a szennyezés csökkentése. A **felelősség** megosztott: jogszabályok, hatóságok, vállalatok és egyének is.',
        },
        {
          kind: 'text',
          text: 'Forráselemzés minta: a téma szövegrészlete (például egy hír a tározó gátszakadásáról) alapján meg kell nevezni az okot (műszaki hiba, ellenőrzés hiánya, szabályozási hiba), a közvetlen hatást (elöntés, szennyezés), a közép- és hosszú távú következményt (talaj, egészség, gazdaság), valamint a megelőzést. A vélemény ott erős, ahol indokolod: „szerintem a legfontosabb a megelőzés, mert a kármentesítés hosszú és költséges”. A környezeti válság okaihoz a halmozódó terhelés, a megnövekedett igény és a gyenge szabályozás tartozik.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli:** fogalmak (veszélyeztetett élőhely, biodiverzitás, környezeti katasztrófa) párosítása; kép- vagy szövegrészlet alapján a probléma felismerése; ok–következmény kérdések („nevezz meg két okot, amely miatt csökken az élőhelyek száma”). Gyakori kérdés, hogy egy katasztrófa következményeit milyen szinten kell kezelni (helyi, országos, nemzetközi).',
        },
        {
          kind: 'warning',
          text: 'A „környezetkárosítás” és a „környezeti katasztrófa” nem ugyanaz: az előbbi folyamatos, az utóbbi hirtelen esemény. Ha a feladat „katasztrófa társadalmi következményeit” kéri, ne írj általános szennyezésről: konkrét esetet említs (Csernobil, vörösiszap, Tisza-cianid), és a következmény legyen társadalmi (kitelepítés, egészség, megélhetés), ne csak ökológiai.',
        },
        {
          kind: 'tip',
          text: 'Szóbeli vázlat: (1) természetes és mesterséges életközösség; (2) az élőhelypusztulás okai; (3) következmények: biodiverzitás, ökoszisztéma-szolgáltatások, élelmezés; (4) katasztrófa-példa az okokkal és a hatásokkal; (5) felkészülés, mérséklés, megállítás; (6) helyi és nemzetközi lépések (védett területek).',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz: „Az emberi tevékenység azért csökkenti az élőhelyek számát, mert az erdőket kivágjuk, a mocsarakat lecsapoljuk, a területeket beépítjük vagy szántóvá alakítjuk. Következmény: a fajok kipusztulása, kevesebb beporzás, romló talaj- és vízvédelem. Megállítás: védett területek, ökológiai folyosók, fenntartható gazdálkodás.”',
        },
      ],
      topicMatch: ['környezeti és globális problémák', 'környezeti problémák', 'élőhely'],
      quiz: [
        {
          question: 'Melyik NEM okozza közvetlenül az élőhelyek pusztulását?',
          options: [
            'erdőirtás szántóföld kedvéért',
            'mocsarak lecsapolása',
            'természetes életközösség védetté nyilvánítása',
            'beépítés és úthálózat építése',
          ],
          answer: 2,
          explanation: 'A védetté nyilvánítás az élőhelyek megőrzését szolgálja.',
        },
        {
          question: 'Mit jelent a biológiai sokféleség (biodiverzitás)?',
          options: [
            'csak a fajok száma',
            'a gének, a fajok és az életközösségek sokfélesége',
            'a szántóföldi növények fajtái',
            'az állatkertekben élő fajok',
          ],
          answer: 1,
          explanation:
            'A biodiverzitás a genetikai, a faji és az életközösségi sokféleséget jelenti.',
        },
        {
          question: 'Melyik példa környezeti katasztrófa?',
          options: [
            'az évtizedes talajerózió egy dombvidéken',
            'a 2010-es ajkai vörösiszap-tározó gátszakadás',
            'az éves savas esők',
            'a város lassú terjeszkedése',
          ],
          answer: 1,
          explanation:
            'A hirtelen gátszakadás és szennyezés katasztrófa; a lassú folyamatok környezetkárosítások.',
        },
        {
          question: 'Melyik a mesterséges életközösség?',
          options: ['esőerdő', 'természetes gyep', 'monokultúrás ültetvény', 'mocsár'],
          answer: 2,
          explanation: 'Az ültetvény az ember által fenntartott, kevés fajú életközösség.',
        },
        {
          question: 'Mit jelent a kármentesítés?',
          options: [
            'a katasztrófa előrejelzését',
            'a szennyezett terület megtisztítását, a kár csökkentését',
            'új gyár építését',
            'a baleset titkosítását',
          ],
          answer: 1,
          explanation: 'A kármentesítés a szennyezés eltávolítása vagy ártalmatlanítása.',
        },
      ],
      sources: [
        {
          label: 'IPBES: globális értékelés a biodiverzitásról',
          url: 'https://www.ipbes.net/global-assessment',
        },
        { label: 'Wikipédia: Biodiverzitás', url: wiki('Biológiai sokféleség') },
        {
          label: 'Wikipédia: Ajkai vörösiszap-katasztrófa',
          url: wiki('Ajkai vörösiszap-katasztrófa'),
        },
      ],
    },
    {
      id: 'demografiai-urbanizacios-problemak',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Népességrobbanás, túlnépesedés és öregedés',
      level: 'kozep',
      requirement: {
        kozep:
          '10.2: Mutassa be a népességszám alakulásának társadalmi-gazdasági következményeit és összefüggéseit. Ismertesse a népességrobbanás kialakulásának okait, következményeit és területi jellemzőit. Elemezzen a témához kapcsolódó adatokat, ábrákat, szövegeket.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Föld népessége 2022 novemberében érte el a **8 milliárdot** (ENSZ-becslés), 2024-ben kb. 8,2 milliárd volt. Az ENSZ 2024-es előrejelzése szerint a növekedés a 2080-as években, kb. 10,3 milliárdnál éri el a csúcsot, utána enyhén csökken.',
            'A **népességrobbanás** oka, hogy a **halálozás gyorsan csökkent** (egészségügy, oltások, higiénia, élelmezés), a **születésszám** viszont magas maradt. Ma főként a Szaharától délre eső Afrikában és Dél-Ázsia egyes térségeiben jellemző.',
            'A fejlett országokban és Kelet-Ázsiában a népesség **öregszik**, a születésszám alacsony, a népesség fogy vagy stagnál.',
            '**Túlnépesedés**: a népesség meghaladja a térség **eltartóképességét**. Következmények: élelem- és vízhiány, munkanélküliség, városokba áramlás, környezetterhelés. **Születésszabályozás**: az országok különbözőképpen próbálják kezelni.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan nőtt meg a népesség?' },
        {
          kind: 'timeline',
          items: [
            { date: 'kb. 1800', text: 'a Föld népessége elérte az 1 milliárdot.' },
            { date: '1927', text: '2 milliárd: kb. 125 év kellett hozzá.' },
            { date: '1960', text: '3 milliárd.' },
            { date: '1974', text: '4 milliárd.' },
            { date: '1987', text: '5 milliárd.' },
            { date: '1999', text: '6 milliárd.' },
            { date: '2011', text: '7 milliárd.' },
            { date: '2022', text: '8 milliárd: újabb egymilliárd kb. 11–12 év alatt.' },
          ],
        },
        {
          kind: 'text',
          text: 'Az adatsor jól mutatja a **növekedés gyorsulását**, majd lassulását: a növekedés *üteme* (százalékban) már a 20. század második felében csúcsot ért el és azóta csökken, a *növekmény* (főben) azonban még évtizedekig nagy marad, mert sok a fiatal, szülőképes korú nő. Az ENSZ szerint a világ termékenységi rátája ma kb. 2,3 gyermek/nő, ami már közel van a népesség egyszerű fenntartásához szükséges kb. 2,1-hez. Az ENSZ szerint a világ országainak több mint felében a termékenység már a népesség fenntartásához szükséges szint alatt van.',
        },
        {
          kind: 'text',
          text: 'Az adatok a **népesedési (demográfiai) átmenet** modelljével értelmezhetők: a hagyományos társadalmakban magas a születés és a halálozás is, ezért a népesség alig nő; az egészségügyi fejlődés során a halálozás csökken, a születésszám még magas (népességrobbanás); később a születésszám is csökken, a népesség növekedése lelassul, végül az öregedő társadalmakban megállhat vagy csökkenhet. A népességrobbanás tehát nem azért van, mert „több gyerek születik”, hanem mert **kevesebben halnak meg**.',
        },
        {
          kind: 'compare',
          title: 'Népességrobbanás és öregedés',
          columns: [
            'Népességrobbanás (pl. Szaharától délre eső Afrika)',
            'Öregedő társadalom (pl. Japán, Európa)',
          ],
          rows: [
            {
              label: 'Születésszám',
              cells: [
                'magas (átlagosan 4–5 gyermek/nő vagy több)',
                'alacsony (2,1 alatt, Magyarországon kb. 1,4–1,5)',
              ],
            },
            {
              label: 'Halálozás',
              cells: [
                'csökken, de a csecsemőhalandóság még magas',
                'alacsony, a várható élettartam magas',
              ],
            },
            {
              label: 'Korfa',
              cells: [
                'széles alapú, „piramis” alakú, sok fiatal',
                'keskeny alapú, sok idős (urna- vagy fordított gomba alakú)',
              ],
            },
            {
              label: 'Gondok',
              cells: [
                'munkahely-, lakás-, iskola- és élelemhiány, gyors városodás, szegénység',
                'nyugdíj- és egészségügyi kiadások növekedése, munkaerőhiány, fogyó települések',
              ],
            },
            {
              label: 'Lehetséges válaszok',
              cells: [
                'oktatás (főleg a nőké), családtervezés, egészségügy, gazdasági fejlesztés',
                'családtámogatás, nyugdíjkorhatár, bevándorlás, a munkaerő termelékenységének növelése',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A népességrobbanás okai és területi jellemzői' },
        {
          kind: 'text',
          text: '**Okok:** (1) a halálozás csökkenése: a járványok visszaszorulása, oltások, tiszta ivóvíz, jobb élelmezés és anyai ellátás; (2) a magas születésszám fennmaradása: a hagyományok, a vallás, a gyermek munkaerő- és időskori biztosíték szerepe, a családtervezés és az iskolázottság hiánya; (3) a fiatal korszerkezet lendülete: a már megszületett nagy létszámú nemzedékek még évtizedekig gyermekeket vállalnak. **Területi jellemzők:** a legnagyobb ütemű a Szaharától délre eső Afrikában (például Niger, Kongói DK, Nigéria), valamint Dél-Ázsia és a Közel-Kelet egyes térségeiben; a világ népességnövekedésének egyre nagyobb része Afrikára esik. A fejlett országokban (Európa, Japán, Dél-Korea, Kína) a termékenység alacsony.',
        },
        { kind: 'heading', text: 'Társadalmi-gazdasági következmények' },
        { kind: 'heading', text: 'Következmények' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Eltartóképesség',
              text: 'az a népességszám, amelyet egy térség adott technikai és gazdasági színvonalon, tartós környezeti károsítás nélkül el tud tartani. Nem állandó: a technika (öntözés, nemesítés), a kereskedelem és a fogyasztási szint változtatja.',
            },
            {
              term: 'Túlnépesedés',
              text: 'a népesség meghaladja az eltartóképességet: kevés az élelem, a víz, a munkahely, a lakás, az iskola, ezért romlik az életszínvonal és terhelődik a környezet.',
            },
            {
              term: 'Gazdasági hatások',
              text: 'a gyors népességnövekedés a megtakarításokat és beruházásokat fogyasztja el (a megnövekvő gyermeklétszám iskoláztatása), nehéz a munkahelyteremtés (fiatalok munkanélkülisége), és terheli az államot.',
            },
            {
              term: 'Társadalmi és környezeti hatások',
              text: 'városba vándorlás, nyomornegyedek, élelmezési és vízgondok, erdőirtás és legeltetés a nagyobb élelemigény miatt, elsivatagosodás veszélye, kivándorlás.',
            },
            {
              term: 'Öregedés',
              text: 'kevesebb aktív kor, több nyugdíjas, ezért a nyugdíj-, egészségügyi és gondozási rendszerek terhelődnek, munkaerőhiány, bevándorlási igény.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **ökológiai terhelést** nem csupán a létszám, hanem a **fogyasztási szint** is meghatározza: egy gazdag ország lakosa átlagosan sokszorosát fogyasztja és bocsátja ki a szegény országok lakosának, ezért a népességszám és a környezetterhelés kapcsolata nem egyszerű.',
        },
        {
          kind: 'text',
          text: '**Születésszabályozás:** a családtervezés (fogamzásgátlás, felvilágosítás), a nők iskoláztatása és foglalkoztatása, az egészségügy fejlesztése a legtartósabb eszközök: a gyermekek halálozásának csökkenésével a családok kevesebb gyermeket vállalnak. Egyes országok kényszerítő eszközöket is alkalmaztak: Kína az **egygyermekes politikát** a 20. század végétől 2015-ig érvényesítette, ez gyorsan lassította a növekedést, de egyoldalú nemi arányt, gyors öregedést és munkaerő-csökkenést okozott. Más országok a születésszám emelését támogatják (családi adókedvezmények, szülői szabadság), mert öregedő népességgel és fogyó munkaerővel néznek szembe.',
        },
        {
          kind: 'example',
          title: 'Számolás: természetes szaporodás és megduplázódás',
          problem:
            'Egy országban 1000 lakosra évente 38 élveszületés és 9 halálozás jut. Mekkora a természetes szaporodás (ezrelékben és százalékban)? Hány év alatt duplázódna meg a népesség, ha ez az ütem állandó maradna (a 70-es szabállyal becsüld)?',
          solution:
            'Természetes szaporodás: $38 - 9 = 29\\,‰$, vagyis évi **2,9%**. A megduplázódás ideje közelítőleg $70 / 2{,}9 \\approx 24$ év. A 70-es szabály csak becslés, ugyanakkor jól mutatja, milyen gyors a népességrobbanás. (Vándorlást nem számoltunk bele.)',
        },
        {
          kind: 'example',
          title: 'Számolás: népességszám évek múlva',
          problem:
            'Egy 5 millió lakosú ország népessége évente 2%-kal nő. Mekkora lesz a népessége 10 év múlva?',
          solution:
            '$5 \\cdot 1{,}02^{10} \\approx 5 \\cdot 1{,}219 \\approx 6{,}09$ millió fő, vagyis kb. **6,1 millió**. Figyelj: a 2%-os növekedés nem 20% (10 · 2%) a tíz év alatt, hanem kamatos módon kb. 21,9%.',
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli:** népességi grafikon (a lakosság számának növekedése, a születési és halálozási arányszám) elemzése, korfa felismerése és értelmezése, természetes szaporodás számítása, a népességrobbanás okainak megnevezése, területi minta. **Szóbeli:** a „A népességszám alakulásának társadalmi-gazdasági következményei, összefüggései” típusú tétel. Hasonlítsd össze a két világrészt (például Nigéria és Japán), és mondj következményeket és megoldásokat.',
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: „a népességrobbanás oka a sok gyerek”. A pontos magyarázat: a **halálozás csökkent**, a születésszám pedig még magas. A népességrobbanás és a **túlnépesedés** sem azonos: az előbbi a gyors növekedés folyamata, az utóbbi az állapot, amikor a népesség meghaladja az eltartóképességet.',
        },
        {
          kind: 'tip',
          text: 'Diagramnál nevezd meg a szakaszt (például: magas születés, csökkenő halálozás = népességrobbanás), olvasd le az értékeket, és fogalmazd meg a következményt. A korfáról mindig mondd meg: fiatalodó, stagnáló vagy öregedő-e.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz („Magyarázd meg a népességrobbanás okát!”): „A halálozás az egészségügyi fejlődés, az oltások és a jobb élelmezés miatt gyorsan csökkent, miközben a hagyományok és az alacsony iskolázottság miatt a születésszám magas maradt. A kettő különbsége a gyors természetes szaporodás.”',
        },
      ],
      topicMatch: ['globális kihívások'],
      quiz: [
        {
          question: 'Mi a népességrobbanás oka?',
          options: [
            'a születésszám gyors növekedése',
            'a halálozás gyors csökkenése, miközben a születésszám még magas',
            'a bevándorlás',
            'az öregedés',
          ],
          answer: 1,
          explanation:
            'A javuló egészségügy és élelmezés miatt kevesebben halnak meg, a születésszám viszont még magas.',
        },
        {
          question: 'Hol a leggyorsabb a népességnövekedés ma?',
          options: ['Európa', 'Észak-Amerika', 'a Szaharától délre eső Afrika', 'Japán'],
          answer: 2,
          explanation: 'Itt a legmagasabb a termékenység, ezért itt a leggyorsabb a növekedés.',
        },
        {
          question: 'Mit jelent az eltartóképesség?',
          options: [
            'az állami költségvetés nagysága',
            'azt a népességszámot, amelyet egy térség adott színvonalon tartós környezeti károsítás nélkül el tud tartani',
            'a mezőgazdasági terület nagyságát',
            'a születések számát',
          ],
          answer: 1,
          explanation: 'Az eltartóképesség a technikai színvonaltól és a fogyasztástól is függ.',
        },
        {
          question: 'Melyik NEM jellemző az öregedő társadalmakra?',
          options: [
            'keskeny alapú korfa',
            'alacsony termékenység',
            'a nyugdíjrendszer terhelése',
            'a fiatalok magas aránya és a gyors népességnövekedés',
          ],
          answer: 3,
          explanation: 'A fiatal korszerkezet és a gyors növekedés a népességrobbanásra jellemző.',
        },
        {
          question:
            'Évi 3% népességnövekedés mellett nagyjából hány év alatt duplázódik meg a népesség (70-es szabály)?',
          options: ['kb. 23 év', 'kb. 33 év', 'kb. 3 év', 'kb. 70 év'],
          answer: 0,
          explanation: '70 / 3 ≈ 23 év.',
        },
      ],
      sources: [
        { label: 'ENSZ: World Population Prospects 2024', url: 'https://population.un.org/wpp/' },
        { label: 'Wikipédia: Népességrobbanás', url: wiki('Népességrobbanás') },
        { label: 'Wikipédia: Világnépesség', url: wiki('Világnépesség') },
      ],
    },
    {
      id: 'urbanizacio-nagyvarosok-kornyezet',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Urbanizáció, nagyvárosok és a környezet terhelése',
      level: 'kozep',
      requirement: {
        kozep:
          '10.2: Mutassa be példák alapján a nagyvárosok terjeszkedésének környezeti következményeit. Mutassa be az összefüggést a városi életforma és a környezet fokozott terhelése között. Elemezzen a témához kapcsolódó adatokat, ábrákat, szövegeket.',
        emelt:
          'Igazolja példák alapján az urbanizációs folyamatok eltérő területi jellemzőit és ezek összefüggéseit a környezet állapotával.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **urbanizáció** a városok számának, méretének és a városlakók arányának növekedése. Az ENSZ 2018-as előrejelzése szerint 2018-ban a Föld népességének kb. 55%-a városban élt, 2050-re kb. 68% lehet.',
            'A nagyvárosok terjeszkedése **beépíti a termőföldet és a zöldterületet**, szétdarabolja az élőhelyeket, és növeli a forgalmat, a **levegőszennyezést**, a zajt, a **hulladék** és a szennyvíz mennyiségét.',
            'A **városi életforma** (sok energia, közlekedés, csomagolt és szállított áru, magasabb fogyasztás) fokozottan terheli a környezetet: a város az erőforrásokat a környezetéből szívja el, a hulladékot oda adja vissza.',
            'Megoldás: tömegközlekedés, kompakt városfejlesztés, zöldfelületek, szennyvíztisztítás, korszerű hulladékgazdálkodás, energiahatékony épületek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az urbanizáció és a nagyvárosok' },
        {
          kind: 'text',
          text: 'Az **urbanizáció** a városodás folyamata: a vidékről a városba áramlás, a városok területi és népességi növekedése, valamint a városi életforma elterjedése. A **nagyvárosok** (millió fő fölötti, a legnagyobbak, a **megavárosok**, 10 millió fő fölöttiek) körül **agglomeráció** alakul ki, amely a város vonzáskörzetét és az ingázó népességet jelenti. A városok terjeszkedése kétféle: a **belső sűrűsödés** (a város tömörebbé válik) és a **szétterülés** (urban sprawl): az alacsony beépítésű övezetek egyre nagyobb területet foglalnak el.',
        },
        {
          kind: 'compare',
          title: 'A városodás kétféle útja',
          columns: ['Fejlett országok', 'Fejlődő országok'],
          rows: [
            {
              label: 'Városlakók aránya',
              cells: [
                'már magas (gyakran 70–80% fölött)',
                'gyorsan nő, de még általában alacsonyabb',
              ],
            },
            {
              label: 'Folyamat',
              cells: [
                'lassú növekedés, a belváros mellett a szuburbanizáció (kiköltözés a város környékére)',
                'gyors, sokszor tervezetlen növekedés, a vidék elszegényedése miatti városba áramlás',
              ],
            },
            {
              label: 'Jellemző gond',
              cells: [
                'szétterülés (sprawl), autófüggés, forgalom, beépített termőföld',
                'nyomornegyedek (slum, favela), hiányos víz- és csatornahálózat, szennyvíz, hulladék',
              ],
            },
            {
              label: 'Környezeti hatás',
              cells: [
                'nagy energia- és anyagfelhasználás főre vetítve, légszennyezés (közlekedés)',
                'kevés fő, de gyorsan nő a szennyezés, nincs elég hulladék- és szennyvízkezelés',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A nagyvárosok terjeszkedésének környezeti következményei' },
        { kind: 'heading', text: 'Következmények' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Földhasználat-változás',
              text: 'a beépítés termőföldet és természetes élőhelyet foglal el; a burkolt felületek megakadályozzák a víz beszivárgását, ezért a csapadék gyorsan lefolyik, nő az árvízveszély.',
            },
            {
              term: 'Városi hősziget',
              text: 'a beton, az aszfalt és a kevés növény miatt a város hőmérséklete magasabb, mint a környezetéé, különösen éjszaka; a hőhullámok idején ez egészségügyi kockázat.',
            },
            {
              term: 'Légszennyezés, szmog',
              text: 'a közlekedés, a fűtés és az ipar kibocsátása miatt; medencében fekvő városokban (például Mexikóváros) a szennyezés összegyűlik, egyes városokban télen az inverzió idején fokozódik.',
            },
            {
              term: 'Zaj és fényszennyezés',
              text: 'forgalom, ipar, éjszakai világítás: egészségkárosító, zavarja az állatokat.',
            },
            {
              term: 'Víz és szennyvíz',
              text: 'nagy az ivóvíz- és az ipari vízigény; a tisztítatlan szennyvíz a folyókat és a talajvizet szennyezi.',
            },
            {
              term: 'Hulladék',
              text: 'a városlakók több hulladékot termelnek; a lerakók helyigényesek, talajt és vizet szennyeznek.',
            },
            {
              term: 'Energiaigény',
              text: 'fűtés, hűtés, világítás, közlekedés: a városok az üvegházgáz-kibocsátás nagy részéért felelősek.',
            },
          ],
        },
        {
          kind: 'text',
          text: '**A városi életforma és a fokozott terhelés kapcsolata.** A városlakók általában több energiát és árut fogyasztanak, többet utaznak (ingázás), sok az eldobható termék, az élelmiszert messziről szállítják. A város **ökológiai lábnyoma** sokszorosa a saját területének: élelmet, vizet, energiát és nyersanyagot importál, hulladékot, szennyvizet és légszennyezést exportál. A sűrűn lakott városok ugyanakkor előnyösek is lehetnek: rövidebb utak, tömegközlekedés, közös fűtés és közműhálózat, egy főre vetítve kisebb energiafelhasználás. Az eredmény a tervezéstől függ.',
        },
        {
          kind: 'example',
          title: 'Számolás: növekedett-e a népsűrűség?',
          problem:
            'Egy város területe 2000-ben 400 km², népessége 3 millió fő; 2020-ban a terület 520 km², a népesség 3,9 millió fő. Hogyan változott a népsűrűség? Mit mutat ez a terjeszkedésről?',
          solution:
            '2000: $3\\,000\\,000 / 400 = 7500$ fő/km². 2020: $3\\,900\\,000 / 520 = 7500$ fő/km². A népsűrűség **nem változott**, a város a népességgel arányosan nőtt (mindkettő 30%-kal), vagyis a város a népességgel arányosan terjeszkedett. Ha a terület 30%-nál nagyobb mértékben nőtt volna, a sűrűség csökkent volna, ami szétterülésre (sprawl) utalna.',
        },
        {
          kind: 'text',
          text: '**Megoldások:** tömegközlekedés, kerékpárutak, forgalomcsökkentő szabályok (környezetvédelmi övezet, dugódíj), zöldfelületek és zöld tetők a hősziget enyhítésére, a belső, használaton kívüli (barnamezős) területek újrahasznosítása a szétterülés helyett, szennyvíztisztítók, szelektív hulladékgyűjtés, energiahatékony épületek és távfűtés. A fejlődő országokban a tervezés, az infrastruktúra (víz, csatorna) és a vidéki fejlesztés együtt segíti a probléma megoldását.',
        },
        {
          kind: 'text',
          text: '**Eltérő területi jellemzők és a környezeti állapot.** Európa és Észak-Amerika városai már régóta fejlettek, a szennyezést jellemzően technikai megoldásokkal (szűrők, szennyvíztisztítás, szabályozás) lehet csökkenteni, így az utóbbi évtizedekben több nagyvárosban javult a levegő és a folyók állapota, ugyanakkor a szétterülés és a közlekedés új terhelést jelent. A fejlődő térségekben (Dél-Ázsia, Trópusi-Afrika, Latin-Amerika) a városnövekedés gyorsabb, mint az infrastruktúra, ezért a nagyvárosokban (például Delhi, Dhaka, Lagos) súlyos a levegő- és vízszennyezés, a nyomornegyedekben pedig hiányzik a tiszta víz és a csatorna. Az összefüggés tehát: a környezet állapotát a **városnövekedés üteme, a gazdasági fejlettség és a szabályozás** együtt határozza meg.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli:** városi adatok vagy diagramok (népesség, városi népesség aránya) elemzése, légszennyezettségi vagy hőmérsékleti ábra értelmezése, szövegrészlet a nagyvárosi problémákról, számítás (népsűrűség, városi népességarány). **Szóbeli:** „A nagyvárosi élettel járó környezeti és társadalmi problémák, illetve azok megoldási lehetőségei” típusú tétel.',
        },
        {
          kind: 'warning',
          text: 'Ne csak felsorold a bajokat: a „hogyan függ össze?” kérdéshez ok–okozati láncot írj (például: több autó, több kipufogógáz, szmog, egészségügyi kár). A megoldásnál különítsd el a helyi (tömegközlekedés), a vállalati és az egyéni (kerékpár, takarékosság) lépéseket.',
        },
        {
          kind: 'tip',
          text: 'Vázlat: (1) az urbanizáció üteme és területi különbségei; (2) a terjeszkedés következményei (termőföld, hősziget, légszennyezés, zaj, hulladék, víz); (3) a városi életforma és a terhelés kapcsolata; (4) fejlett és fejlődő városok összehasonlítása; (5) megoldások.',
        },
      ],
      topicMatch: ['globális kihívások', 'környezeti és globális problémák'],
      quiz: [
        {
          question: 'Melyik a nagyvárosok terjeszkedésének környezeti következménye?',
          options: [
            'nő a termőföld területe',
            'beépül a termőföld, nő a forgalom és a szennyezés',
            'csökken a hulladék',
            'tisztább lesz a levegő',
          ],
          answer: 1,
          explanation:
            'A terjeszkedő város termőföldet épít be, és több forgalmat, szennyezést okoz.',
        },
        {
          question: 'Mit jelent a városi hősziget?',
          options: [
            'a város hőforrásokkal ellátott sziget',
            'azt, hogy a város hőmérséklete magasabb a környezetéénél',
            'a városok melletti geotermikus telepet',
            'a hideg városi levegő beáramlását',
          ],
          answer: 1,
          explanation:
            'A beton, az aszfalt és a kevés növény miatt a város melegebb, mint a környéke.',
        },
        {
          question: 'Mi jellemző a fejlődő országok gyorsan növő nagyvárosaira?',
          options: [
            'minden lakos ellátott víz- és csatornahálózattal',
            'nyomornegyedek és hiányos infrastruktúra',
            'kizárólag szuburbanizáció',
            'csökkenő lakosságszám',
          ],
          answer: 1,
          explanation:
            'A tervezetlen, gyors növekedés miatt a víz-, csatorna- és hulladékkezelés elmarad.',
        },
        {
          question: 'Melyik a szétterülő beépítés (urban sprawl) következménye?',
          options: [
            'rövidebb utak és kisebb autóhasználat',
            'nagyobb területfoglalás, több közlekedés',
            'nagyobb népsűrűség',
            'kevesebb szennyezés',
          ],
          answer: 1,
          explanation:
            'Az alacsony beépítésű övezetek több földet foglalnak, és autófüggést okoznak.',
        },
        {
          question: 'Melyik a környezetbarát nagyvárosi megoldás?',
          options: [
            'több autóút építése',
            'a tömegközlekedés fejlesztése és a zöldfelületek növelése',
            'a zöldterületek beépítése',
            'a lerakók bővítése',
          ],
          answer: 1,
          explanation:
            'A tömegközlekedés és a zöldfelület csökkenti a szennyezést és a hőszigetet.',
        },
        {
          question:
            'Mi jellemző a fejlett és a fejlődő világ városodására az emelt szintű anyag szerint?',
          options: [
            'a fejlett világban gyorsabb a városnövekedés, mint az infrastruktúra',
            'a fejlődő világban gyakoribb a tervezetlen növekedés és a nyomornegyed',
            'a két térségben ugyanolyan a városodás',
            'a fejlődő világban nincs légszennyezés',
          ],
          answer: 1,
          explanation:
            'A fejlődő térségekben a gyors városnövekedés meghaladja az infrastruktúra fejlesztését.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'ENSZ: World Urbanization Prospects', url: 'https://population.un.org/wup/' },
        { label: 'Wikipédia: Urbanizáció', url: wiki('Urbanizáció') },
        { label: 'Wikipédia: Városi hősziget', url: wiki('Városi hősziget') },
      ],
    },
    {
      id: 'nepesseg-elelmezes-eroforrasok',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Élelmezés és egészség: a területi ellentmondások',
      level: 'kozep',
      requirement: {
        kozep:
          '10.3: Ismerje fel az élelmiszer termelésének és fogyasztásának területi ellentmondásait. Ismerje a társadalmi-gazdasági fejlettség és a lakosság általános egészségi állapota közötti összefüggéseket, értelmezze a társadalmi-gazdasági egyenlőtlenségből fakadó következményeket. Elemezzen a témához kapcsolódó forrásokat.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A világ összességében **elég élelmet termel**, mégis sokan éheznek: a gond a **területi egyenlőtlenség**, a szegénység, a konfliktusok és az élelmiszer-pazarlás. Az ENSZ élelmezési szervezete (FAO) szerint 2024-ben kb. **673 millió** ember (8,2%) éhezett.',
            'A fejlett világban **élelmiszer-túltermelés** és **túlfogyasztás** (elhízás), a fejlődő világban **alultápláltság**, **éhínség** és **egyoldalú táplálkozás** jellemző. Az **éhségövezet** főként a Szaharától délre eső Afrika és Dél-Ázsia egyes térségei.',
            'A gazdasági fejlettség és az **egészségi állapot** szorosan összefügg: a szegény térségekben alacsony a várható élettartam, magas a csecsemőhalandóság, gyakoribbak a **járványok**.',
            'A fejlett világban a civilizációs betegségek (szív- és érrendszeri bajok, cukorbetegség, elhízás) és az öregedés okoz gondot.',
          ],
        },
      ],
      details: [
        {
          kind: 'heading',
          text: 'Az élelmiszer termelése és fogyasztása: a területi ellentmondások',
        },
        {
          kind: 'text',
          text: 'Az élelmiszer-ellátás kérdése nem pusztán azon múlik, hogy mennyi élelmet termel a Föld, hanem azon, hogy **hol van, ki fér hozzá és mennyiért**. A termelés a fejlett és a nagy exportőr országokban (Egyesült Államok, az EU, Brazília, Argentína) meghaladja a helyi szükségletet, egyes fejlődő országokban viszont a helyi termelés nem fedezi az igényt. A FAO szerint az előállított élelmiszer kb. egyharmada **elvész vagy kárba megy** (a fejlődő országokban inkább a betakarítás, a tárolás és a szállítás során, a fejlett országokban a kereskedelemben és a háztartásokban).',
        },
        {
          kind: 'compare',
          title: 'Az élelmezés két arca',
          columns: ['Fejlett országok', 'Fejlődő országok (főleg éhségövezet)'],
          rows: [
            {
              label: 'Termelés',
              cells: [
                'élelmiszer-túltermelés, nagy exporttal és támogatásokkal',
                'gyakran nem fedezi az igényt: kisgazdaságok, gyenge technika, kevés öntözés, aszály',
              ],
            },
            {
              label: 'Fogyasztás',
              cells: [
                'túlfogyasztás: sok energia, zsír, cukor, élelmiszer-pazarlás, elhízás',
                'alultápláltság, éhezés, egyoldalú táplálkozás (egy-két alapélelmiszer), hiányos fehérje és vitaminok',
              ],
            },
            {
              label: 'Egészségi következmény',
              cells: [
                'elhízás, cukorbetegség, szív- és érrendszeri betegségek',
                'fejlődési zavarok, fertőzések iránti fogékonyság, magas halálozás',
              ],
            },
            {
              label: 'Fő ok',
              cells: [
                'kényelem, olcsó élelmiszer, a kereskedelem szerkezete',
                'szegénység, aszály, háború, gyenge infrastruktúra, gyors népességnövekedés',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Fogalmak' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Éhezés, alultápláltság',
              text: 'a szervezet tartósan nem jut elég energiához (kalóriához) és tápanyaghoz. Az éhezők száma az ENSZ szerint 2024-ben kb. 673 millió volt (8,2%): a legtöbben Ázsiában, a legnagyobb arány azonban Afrikában van.',
            },
            {
              term: 'Éhínség',
              text: 'hirtelen, tömegeket érintő, súlyos élelemhiány (aszály, háború, természeti katasztrófa, az élelem elosztásának összeomlása miatt, például Szomália, Dél-Szudán, a Száhel-övezet).',
            },
            {
              term: 'Egyoldalú táplálkozás',
              text: 'a kalória szerzése egy-két növényből (például kukorica, rizs, maniókagyökér), de kevés a fehérje és a vitamin. Ez „rejtett éhezés”: a táplálék elég lehet energiának, a szervezetnek mégis hiányos.',
            },
            {
              term: 'Éhségövezet',
              text: 'az a térség, ahol tartósan és nagy arányban éheznek, főleg a Szaharától délre eső Afrika, Dél-Ázsia egyes részei.',
            },
            {
              term: 'Élelmiszer-túltermelés és túlfogyasztás',
              text: 'a fejlett országokban a termelés meghaladja a fogyasztást, a háztartásokban sok élelmiszer kárba megy, és az elhízás széles körű. Az elhízás világszerte terjed: az Egészségügyi Világszervezet szerint 2022-ben több mint egymilliárd ember volt elhízott.',
            },
          ],
        },
        { kind: 'heading', text: 'A fejlettség és az egészségi állapot összefüggése' },
        {
          kind: 'text',
          text: 'A gazdasági fejlettség és a lakosság egészségi állapota között erős az összefüggés. A jellemző mutatók: **várható élettartam**, **csecsemőhalandóság**, az ezer lakosra jutó orvosok és kórházi ágyak száma, az ivóvízhez és szennyvízkezeléshez való hozzáférés, az oltások elérhetősége, az élelmezés minősége. A szegénység és az egészség **körforgást** alkot: a szegény ember nem jut jó ellátáshoz, beteg lesz, nem tud dolgozni, tovább szegényedik.',
        },
        {
          kind: 'compare',
          title: 'Az egészségi állapot a fejlettség szerint',
          columns: ['Fejlett országok', 'Elmaradott országok'],
          rows: [
            {
              label: 'Várható élettartam',
              cells: [
                'magas (80 év körüli vagy afölötti)',
                'alacsonyabb (sok országban 60 év körüli)',
              ],
            },
            { label: 'Csecsemőhalandóság', cells: ['alacsony', 'magas'] },
            {
              label: 'Jellemző betegségek',
              cells: [
                'civilizációs és öregkori betegségek (szív- és érrendszeri, daganatos, cukorbetegség), mozgásszegény életmód',
                'fertőző betegségek (malária, kolera, HIV/AIDS, tüdőgyulladás, hasmenéses betegségek), alultápláltság',
              ],
            },
            {
              label: 'Ellátás',
              cells: [
                'sok orvos, kórház, oltási program',
                'kevés orvos, nehezen elérhető ellátás, tiszta víz hiánya',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **járvány** egy betegség gyors terjedése egy térségben; ha kontinenseken át terjed, **világjárvány** (pandémia). Terjedését a sűrű lakosság, a tiszta víz hiánya, a gyenge egészségügy és a nemzetközi forgalom gyorsítja (a COVID-19 2020-tól az egész világra kiterjedt). A fejlett országok gyorsabban reagálnak (oltás, ellátás), de a globális összekapcsolódás miatt a világjárványok az egész világot érintik. A következmények: gazdasági visszaesés, kiesett munkaerő, árvák, élelmezési gondok.',
        },
        {
          kind: 'text',
          text: '**A társadalmi-gazdasági egyenlőtlenségből fakadó következmények:** nemzetközi és országon belüli különbségek az egészségi állapotban; a szegényebb térségből a jobb ellátású országokba irányuló vándorlás; a kiszolgáltatott csoportok (nők, gyerekek, vidéki szegények) fokozott veszélyeztetettsége; a fejlődés akadálya, mert az éhező vagy beteg gyerek nem tud tanulni, és később alacsonyabb jövedelmet szerez. Az ENSZ és a FAO, az Egészségügyi Világszervezet (WHO), a UNICEF és civil szervezetek élelmiszersegélyt, oltást és fejlesztési programot nyújtanak.',
        },
        {
          kind: 'example',
          title: 'Számolás: az éhezők aránya',
          problem:
            'A Föld népessége 2024-ben kb. 8,2 milliárd fő, az éhezők száma kb. 673 millió. Hány százalék éhezik? Ha egy másik térségben a 300 milliós népesség 20%-a éhezik, hány fő ez?',
          solution:
            '$673 / 8200 \\approx 0{,}082$, azaz kb. **8,2%**. A másik térségben: $300 \\cdot 0{,}20 = 60$ millió fő. A százalék és a fő nem ugyanaz: Afrikában a legmagasabb az éhezők *aránya*, Ázsiában a legnagyobb a *száma*, mert ott sokkal többen élnek.',
        },
        {
          kind: 'example',
          title: 'Ábraelemzés: adatsor értelmezése (példaadatok)',
          problem:
            'Két ország példaadatai: „A” országban a csecsemőhalandóság 60‰, a várható élettartam 58 év, az egy főre jutó GDP alacsony; „B” országban a csecsemőhalandóság 3‰, a várható élettartam 82 év, az egy főre jutó GDP magas. Milyen összefüggést mutat ez?',
          solution:
            'A fejlettség növekedésével javul az egészségi állapot: a **magasabb GDP** jobb élelmezést, tiszta vizet, orvosi ellátást jelent, ezért **alacsonyabb a csecsemőhalandóság és magasabb a várható élettartam**. Megfogalmazás: „A B országban fejlettebb az egészségügy, ezért az egészségi mutatók kedvezőbbek.” A számok csak példák; a vizsgán a megadott táblázat adatait kell használni.',
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli:** világtérkép vagy diagram az éhezők arányáról, kördiagram az élelmiszer-fogyasztásról, szövegrészlet az éhínségről, táblázat a várható élettartamról és a csecsemőhalandóságról; fogalompárosítás (éhínség, alultápláltság, egyoldalú táplálkozás, éhségövezet, járvány). **Szóbeli:** „Az élelmiszerek előállításának és fogyasztásának területi ellentmondásai” típusú tétel: hasonlítsd össze a fejlett és a fejlődő világot.',
        },
        {
          kind: 'warning',
          text: 'Ne írd azt, hogy „nincs elég élelem a világon”. Pontosabb: a világ elég élelmet termel, de **egyenlőtlenül oszlik el**, és sok vész kárba. Az **éhínség** nem azonos az **alultápláltsággal**: az előbbi hirtelen, akut krízis, az utóbbi tartós állapot.',
        },
        {
          kind: 'tip',
          text: 'Tételvázlat: (1) az élelmiszer-termelés és -fogyasztás eloszlása; (2) a fejlett világ gondjai (túltermelés, pazarlás, elhízás); (3) a fejlődő világ gondjai (éhezés, éhínség, egyoldalú táplálkozás), okok; (4) az egészség és a fejlettség kapcsolata, járványok; (5) megoldások: fejlesztés, oktatás, pazarlás csökkentése, segélyszervezetek (FAO). Használj konkrét példát (például Száhel, Szomália).',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz („Magyarázd meg, miért éheznek emberek, miközben a világ elég élelmet termel!”): „Az élelem egyenlőtlenül oszlik el, mert a szegények nem tudnak hozzájutni, a konfliktusok és az aszályok megszakítják az ellátást, a termelés és a tárolás gyenge, a fejlett országokban pedig sok élelmiszer kárba megy.”',
        },
      ],
      topicMatch: ['túlfogyasztás', 'éhezés', 'élelmezés'],
      quiz: [
        {
          question: 'Mi az éhezés fő oka a világban?',
          options: [
            'a Föld nem termel elég élelmet',
            'az egyenlőtlen elosztás, a szegénység és a konfliktusok',
            'a túl sok eső',
            'a hideg éghajlat',
          ],
          answer: 1,
          explanation:
            'Összességében elég élelem terem, de a szegények nem jutnak hozzá, és sok kárba megy.',
        },
        {
          question: 'Melyik NEM jellemző a fejlett országok élelmezésére?',
          options: ['élelmiszer-túltermelés', 'túlfogyasztás', 'éhínség', 'élelmiszer-pazarlás'],
          answer: 2,
          explanation: 'Az éhínség a szegény, instabil térségekre jellemző.',
        },
        {
          question: 'Mit jelent az egyoldalú táplálkozás?',
          options: [
            'sok állati fehérje fogyasztása',
            'egy-két alapélelmiszerre épülő étrend, fehérje- és vitaminhiánnyal',
            'a vegetáriánus étrend',
            'a kizárólag helyi termékek fogyasztása',
          ],
          answer: 1,
          explanation: 'Az egyoldalú étrend hiánybetegségekhez vezet.',
        },
        {
          question: 'Melyik állítás igaz a fejlettség és az egészségi állapot összefüggésére?',
          options: [
            'a fejletlen országokban alacsonyabb a csecsemőhalandóság',
            'a fejlett országokban magasabb a várható élettartam és kisebb a csecsemőhalandóság',
            'a fejlett országokban a fertőző betegségek a leggyakoribbak',
            'nincs összefüggés',
          ],
          answer: 1,
          explanation: 'A jobb ellátás, tiszta víz és élelmezés javítja az egészségi mutatókat.',
        },
        {
          question: 'Melyik térségben van a legnagyobb arányban éhezés ma?',
          options: ['Észak-Amerika', 'Európa', 'a Szaharától délre eső Afrika', 'Ausztrália'],
          answer: 2,
          explanation: 'Az éhségövezet főként Trópusi-Afrikában van.',
        },
      ],
      sources: [
        {
          label: 'FAO: Az élelmezésbiztonság helyzete (SOFI)',
          url: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world',
        },
        { label: 'WHO: Egészségügyi Világszervezet', url: 'https://www.who.int/' },
        { label: 'Wikipédia: Éhezés', url: wiki('Éhezés') },
      ],
    },
    {
      id: 'elelmezesi-valsag-viz-biogazdalkodas',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Élelmezési válság, mezőgazdaság és környezet, biogazdálkodás, GMO, vízigény',
      level: 'emelt',
      requirement: {
        emelt:
          '10.3: Ismertesse az élelmezési válság kialakulásához vezető társadalmi-gazdasági és környezeti folyamatok összefüggéseit. Bizonyítsa példákkal a fokozódó mezőgazdasági termelés környezeti hatásait. Magyarázza a bioszféra és a talaj sérülékenysége, valamint az élelmiszerellátás összefüggéseit. Jellemezze a biogazdálkodást. Ismertesse a genetikailag módosított termékek előállításának okait, elemezzen a témához kapcsolódó forrásokat. Következtessen a földrajzi elhelyezkedésből, a természet- és társadalomföldrajzi jellemzőkből a különböző térségek vízigényére. Mutassa be a vízigény kielégítésének korlátait, a vízhiány következményeit.',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **élelmezési válság** társadalmi-gazdasági (szegénység, konfliktusok, népességnövekedés, élelmiszerárak) és környezeti (aszály, talajromlás, vízhiány, éghajlatváltozás) okok együttes hatása.',
            'A termelés fokozása (műtrágya, vegyszer, öntözés, monokultúra) **környezeti hatásokkal** jár: talajromlás, szikesedés, vízszennyezés, biodiverzitás-csökkenés, üvegházgáz-kibocsátás. A talaj kialakulása nagyon lassú, a pusztulása gyors.',
            '**Biogazdálkodás**: szintetikus műtrágya és növényvédő szer nélkül, a talaj termékenységének megőrzésére építve termel. **GMO**: genetikailag módosított szervezet: nagyobb hozam, kártevő- vagy gyomirtószer-tűrés, szárazságtűrés célból; vitatott és szabályozott.',
            'A **vízigény** az éghajlattól, a népességtől, a gazdaság szerkezetétől és az életszínvonaltól függ; a mezőgazdaság használja a vízkivétel kb. 70%-át. A vízhiány terméskiesést, betegséget, migrációt és konfliktust okozhat.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az élelmezési válság okai' },
        {
          kind: 'compare',
          title: 'Mi vezet élelmezési válsághoz?',
          columns: ['Társadalmi-gazdasági okok', 'Környezeti okok'],
          rows: [
            {
              label: 'Példák',
              cells: [
                'szegénység és alacsony jövedelem; gyors népességnövekedés; háborúk és politikai instabilitás; kevés beruházás a mezőgazdaságba; élelmiszerárak ingadozása; a termőföld más célú használata (bioüzemanyag, városok); a kereskedelem és az elosztás hibái; pazarlás',
                'aszály, árvíz és más szélsőséges időjárás (az éghajlatváltozás növeli a gyakoriságot); talajromlás, szikesedés, elsivatagosodás; vízhiány; kártevők, betegségek; a termőterületek csökkenése',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az okok **összekapcsolódnak**: az aszály rontja a termést, az élelmiszerár emelkedik, a szegény háztartások nem tudnak vásárolni, a konfliktusok pedig akadályozzák a segélyek célba jutását; a hosszú távú éhezés pedig gyengíti a gazdaságot. A válság tehát nem egy tényező műve, hanem **folyamat**: ez a vizsgán akkor ér pontot, ha az ok–okozati láncot is leírod.',
        },
        { kind: 'heading', text: 'A mezőgazdasági termelés fokozásának környezeti hatásai' },
        { kind: 'heading', text: 'Eszközök és következményeik' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Műtrágya',
              text: 'növeli a hozamot, de a felesleg (nitrát, foszfát) a talajvizet és a folyókat szennyezi (nitrátszennyezés), a tavak elalgásodását (eutrofizáció) okozza, és dinitrogén-oxidot (üvegházgázt) bocsát ki.',
            },
            {
              term: 'Növényvédő szerek',
              text: 'csökkentik a kártevők okozta veszteséget, de szennyezik a vizet és a talajt, a hasznos élőlényeket (például a beporzókat) is károsítják, és a kártevők ellenállóvá válhatnak.',
            },
            {
              term: 'Öntözés',
              text: 'jelentősen növeli a hozamot száraz térségben, de túlöntözés és rossz vízelvezetés esetén a talaj szikesedik (sófelhalmozódás); a víz elvonása folyókból és tavakból (Aral-tó) ökológiai katasztrófát okozhat.',
            },
            {
              term: 'Monokultúra és nagy táblák',
              text: 'gépesíthető és olcsó, de kevés a faj, a kártevők gyorsan terjednek, a talajt erózió fenyegeti, a biológiai sokféleség csökken.',
            },
            {
              term: 'Új termőterületek bevonása',
              text: 'erdőirtással, mocsarak lecsapolásával, legelők szántóvá alakításával: élőhelyek pusztulnak, szén-dioxid kerül a légkörbe.',
            },
            {
              term: 'Állattartás',
              text: 'sok takarmányt és vizet igényel, a kérődzők metánt bocsátanak ki, a trágya a vizeket terheli.',
            },
          ],
        },
        {
          kind: 'text',
          text: '**A bioszféra és a talaj sérülékenysége.** A termékeny talaj a mezőgazdaság alapja, de kialakulása nagyon lassú (néhány centiméter vastag réteg kialakulásához évszázadok kellenek), a pusztulása viszont gyors lehet: **erózió** (víz és szél lehordja a termőréteget, főleg erdőirtás, meredek lejtő, szántás hatására), **szikesedés**, savasodás, **elsivatagosodás** (a száraz térségek túllegeltetése és túlművelése miatt, például a Száhel-övezetben), tömörödés, szennyezés. A talajvesztés csökkenti a termőterületet és a terméshozamot, ezért az élelmiszerellátás szempontjából kritikus. A biológiai sokféleség (beporzók, talajlakó élőlények) csökkenése szintén a termelés alapjait ássa alá.',
        },
        { kind: 'heading', text: 'Biogazdálkodás' },
        {
          kind: 'text',
          text: 'A **biogazdálkodás** (ökológiai gazdálkodás) olyan termelési rendszer, amely **nem használ szintetikus műtrágyát és szintetikus növényvédő szert**, nem alkalmaz GMO-t, hanem a természetes folyamatokra épít: **vetésforgó**, szerves trágya és komposzt, zöldtrágyázás, biológiai védekezés (hasznos rovarok), fajtaválasztás, kíméletes talajművelés. A termékeket független szervezet **ellenőrzi és tanúsítja** (bio-jelölés). Előnyei: kisebb vegyszerterhelés, jobb talajszerkezet és -termékenység, nagyobb biodiverzitás, kevesebb szennyezés. Hátrányai: általában **alacsonyabb hozam** és nagyobb terület/élőmunka-igény, magasabb termelői és fogyasztói ár, kisebb választék. Ezért kérdés, hogy a biogazdálkodás önmagában képes-e ellátni a világ növekvő népességét; a lehetőség az, hogy más fenntartható módszerekkel együtt alkalmazzák.',
        },
        { kind: 'heading', text: 'Genetikailag módosított termékek (GMO)' },
        {
          kind: 'text',
          text: 'A **GMO** (genetikailag módosított szervezet) olyan élőlény, amelynek öröklődő anyagába laboratóriumban, géntechnológiával más élőlény génjét építették be, vagy módosították. **Az előállítás okai:** kártevőkkel szembeni ellenállás (például a Bt-kukorica), gyomirtószer-tűrés, szárazság- és sótűrés, nagyobb hozam, jobb tápérték (aranyrizs: A-vitamin), hosszabb eltarthatóság. **Viták:** a lehetséges környezeti kockázat (a módosított gén átkerülése vadon élő rokonokra, a hasznos rovarok károsodása), az emberi egészségre gyakorolt hatás (allergia, hosszú távú vizsgálatok), a vetőmag-cégektől való függőség (szabadalom, a gazdák nem tarthatnak meg vetőmagot), a monokultúra erősödése. Az EU szigorú engedélyezést és címkézést ír elő; Magyarországon a GMO-növények termesztése tilos.',
        },
        {
          kind: 'compare',
          title: 'Intenzív (vegyszeres) és biogazdálkodás',
          columns: ['Intenzív (vegyszeres)', 'Biogazdálkodás'],
          rows: [
            {
              label: 'Alapelv',
              cells: [
                'nagy hozam műtrágyával, vegyszerrel, öntözéssel',
                'természetes folyamatok, vegyszerek nélkül',
              ],
            },
            {
              label: 'Előny',
              cells: [
                'nagy hozam, olcsó élelmiszer',
                'kisebb terhelés, talajtermékenység, biodiverzitás',
              ],
            },
            { label: 'Probléma', cells: ['szennyezés, talajromlás', 'kisebb hozam, magasabb ár'] },
          ],
        },
        { kind: 'heading', text: 'Vízigény és vízhiány' },
        {
          kind: 'text',
          text: 'Egy térség **vízigényét** meghatározza: az **éghajlat** (a párolgás és a csapadék: száraz térségben több öntözővíz kell), a **népesség** száma és életszínvonala (háztartási használat, élelmiszer-fogyasztás), a **gazdaság szerkezete** (öntözéses mezőgazdaság, hőerőművek hűtése, vízigényes ipar), a technológiai szint (csepegtető öntözés, szennyvíz újrahasznosítása), és a városodás. A mezőgazdaság a világ édesvízkivételének kb. 70%-át használja (FAO, 2022-ben 71%); a fejlődő száraz térségekben ez gyakran 80% fölött van. A **vízlábnyom** a termékek előállításához felhasznált teljes víz: nagyságrendileg 1 kg búza kb. 1 500–2 000 liter, 1 kg marhahús kb. 15 000 liter víz.',
        },
        {
          kind: 'text',
          text: '**A vízigény kielégítésének korlátai:** véges és egyenlőtlenül elosztott készlet (a vízben gazdag és a száraz térségek eltérnek: például Kanada és Brazília gazdag, a Közel-Kelet és Észak-Afrika szegény), a felszíni és a talajvíz szennyezése, a talajvízszint süllyedése (a túlzott kitermelés miatt), az infrastruktúra és a tőke hiánya, **határokon átnyúló folyók** (Nílus, Eufrátesz–Tigris, Jordán, Amu-darja) vízmegosztási vitái, az éghajlatváltozás miatti csapadék- és olvadásvíz-változás. A válaszok: víztakarékos öntözés, szennyvíz-újrahasznosítás, tengervíz sótalanítása (az Arab-félszigeten, energiaigényes), víztározás, vízgazdálkodási megállapodások, kevésbé vízigényes növények.',
        },
        {
          kind: 'text',
          text: '**A vízhiány következményei:** terméskiesés és éhezés; ivóvíz- és higiéniai hiány miatt betegségek (a WHO és a UNICEF szerint kb. 2 milliárd embernek nincs biztonságos ivóvízellátása); az ipar és a gazdaság visszaesése; vándorlás a vízben szegény vidékekről; államok közötti és társadalmi feszültségek, konfliktusok a közös vízkészletekért; az ökoszisztémák (tavak, vizes élőhelyek) kiszáradása.',
        },
        {
          kind: 'example',
          title: 'Számolás: egy főre jutó vízkészlet',
          problem:
            'Egy ország megújuló vízkészlete évi 40 km³, népessége 20 millió fő. Mennyi víz jut egy főre évente? Mennyi jutna, ha a népesség 35 millióra nőne? (1 km³ = 10⁹ m³.) A gyakran használt jelzőszám szerint évi 1000 m³/fő alatt vízhiányról, 1700 m³/fő alatt vízstresszről beszélünk.',
          solution:
            'Most: $40 \\cdot 10^{9} / 20 \\cdot 10^{6} = 2000$ m³/fő/év, ami elegendő. 35 millió fő esetén: $40 \\cdot 10^{9} / 35 \\cdot 10^{6} \\approx 1143$ m³/fő/év, ez már a vízstressz tartományában van (1000 és 1700 között). Következtetés: a népességnövekedés a vízkészlet változása nélkül is vízstresszt okozhat.',
        },
        {
          kind: 'example',
          title: 'Számolás: vízlábnyom (nagyságrend)',
          problem:
            'Ha 1 kg marhahús előállítása kb. 15 000 liter, 1 kg búzáé kb. 1 800 liter vizet igényel, mennyi vizet igényel 200 g hús, illetve 200 g búza?',
          solution:
            'Hús: $15\\,000 \\cdot 0{,}2 = 3000$ liter. Búza: $1800 \\cdot 0{,}2 = 360$ liter. A hús kb. nyolcszor vízigényesebb, ezért a húsfogyasztás csökkentése víztakarékos is. (Az értékek nagyságrendi becslések, forrásonként eltérnek.)',
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli (emelt):** forráselemzés (hírek, táblázat az éhezésről, a termőterületről, a vízhasználatról), ok–okozati lánc megrajzolása, érvelés a biogazdálkodás vagy a GMO mellett és ellen, vízkészlet és vízigény összevetése térképen vagy táblázatban, számítás (egy főre jutó vízkészlet, vízhasználat aránya). A feladat gyakran „indokolja”, „bizonyítsa példával”, „vesse össze” típusú.',
        },
        {
          kind: 'warning',
          text: 'GMO-nál ne pártos legyél: sorold fel az előállítás okait **és** a vitatott pontokat is. A biogazdálkodás sem „hozamot növelő csodamódszer”: általában kisebb a hozam, a környezeti előnye viszont nagyobb. A talaj „megújuló” voltára vigyázz: gyakorlatilag nem pótolható ember által belátható időn belül.',
        },
        {
          kind: 'tip',
          text: 'Vízigény-következtetés: nézd az éghajlati övet (sivatagi, félsivatagi: sok öntözés), a népsűrűséget, az iparszerkezetet és a fejlettséget. Például: Egyiptom a Nílus öntözővizére, a kevés csapadék miatt ráutalt; Hollandia vízgazdag, ezért a vízigényt nem a készlet, hanem a szennyezés korlátozza.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz („Érveljen a biogazdálkodás mellett, majd mutasson rá a korlátaira!”): „A biogazdálkodás nem használ műtrágyát és vegyszert, ezért kevésbé szennyezi a vizeket, megőrzi a talaj termékenységét és a biológiai sokféleséget. Korlátja, hogy általában alacsonyabb a hozam és magasabb az ár, ezért önmagában nem elég a növekvő népesség élelmezésére.”',
        },
      ],
      topicMatch: ['fenntartható gazdálkodás'],
      quiz: [
        {
          question: 'Melyik NEM okozza közvetlenül az élelmezési válságot?',
          options: [
            'aszály és szélsőséges időjárás',
            'háború és politikai instabilitás',
            'megfelelő elosztási rendszerek',
            'szegénység',
          ],
          answer: 2,
          explanation: 'A jó elosztás enyhíti, nem okozza a válságot.',
          emelt: true,
        },
        {
          question: 'Mi jellemző a biogazdálkodásra?',
          options: [
            'nagy mennyiségű műtrágya használata',
            'vegyszermentes termelés a talaj termékenységének megőrzésével, vetésforgóval',
            'GMO-növények termesztése',
            'nagy öntözött monokultúrák',
          ],
          answer: 1,
          explanation: 'A biogazdálkodás nem használ szintetikus vegyszert és GMO-t.',
          emelt: true,
        },
        {
          question: 'Melyik a túlöntözés lehetséges következménye száraz térségben?',
          options: [
            'a talaj szikesedése',
            'a talaj savasodása',
            'az erózió megszűnése',
            'a kártevők eltűnése',
          ],
          answer: 0,
          explanation: 'A párolgás a sót a felszínen hagyja, ha nincs megfelelő vízelvezetés.',
          emelt: true,
        },
        {
          question: 'Miért vitatott a GMO-k használata?',
          options: [
            'mert nem növelik a hozamot',
            'környezeti és egészségügyi kockázatok, valamint a vetőmagcégektől való függőség miatt',
            'mert drágább a talajművelés',
            'mert minden országban tilos',
          ],
          answer: 1,
          explanation: 'Az érvek: kockázat-bizonytalanság, függőség, a monokultúra erősödése.',
          emelt: true,
        },
        {
          question: 'Melyik gazdasági ág használja a legtöbb édesvizet a Földön?',
          options: ['ipar', 'mezőgazdaság (öntözés)', 'háztartások', 'idegenforgalom'],
          answer: 1,
          explanation: 'A vízkivétel kb. 70%-a öntözésre megy.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'FAO AQUASTAT: a vízhasználat adatai', url: 'https://www.fao.org/aquastat/' },
        { label: 'Wikipédia: Biogazdálkodás', url: wiki('Ökológiai gazdálkodás') },
        {
          label: 'Wikipédia: Genetikailag módosított szervezet',
          url: wiki('Genetikailag módosított szervezet'),
        },
      ],
    },
    {
      id: 'hulladek-fenntarthatosag',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Fogyasztás, hulladék, ökológiai lábnyom és fenntartható gazdaság',
      level: 'kozep',
      requirement: {
        kozep:
          '10.4: Ismertesse a hulladékgazdálkodás jelentőségét, vesse össze a különböző megoldási lehetőségeket. Mutassa be példák alapján a hulladékok újrahasznosításának lehetőségeit. Mutassa be a fenntartható gazdaság jellemzőit, érveljen ennek fontossága mellett. Ismertesse példák segítségével az egyén szerepét, felelősségét a fenntartható gazdaság kialakításában. Ismerje a fogyasztói társadalom és a tudatos fogyasztói közösségek fő jellemzőit.',
        emelt:
          'Mutassa be a környezeti szempontok érvényesíthetőségét a termelésben és a fogyasztásban.',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A hulladékgazdálkodás sorrendje: **megelőzés**, újrahasználat, **újrahasznosítás** (szelektív hulladékgyűjtés), egyéb hasznosítás (például energetikai), és csak végül az **ártalmatlanítás** (lerakás, égetés energia-visszanyerés nélkül).',
            'A **fogyasztói társadalom** sokat vásárol és gyorsan eldob; a **tudatos fogyasztói közösség** mérlegeli a termék környezeti és társadalmi hatását, tartós, helyi, javítható termékeket választ.',
            'Az **ökológiai lábnyom** azt méri, mekkora termékeny terület kell egy ember vagy ország fogyasztásához és hulladékának elnyeléséhez. A **Túlfogyasztás Napja** azt mutatja, hogy az év melyik napján használtuk fel az évi megújuló erőforrásokat: 2025-ben július 24-én, 2024-ben augusztus 1-jén volt.',
            'A **fenntartható gazdaság** úgy termel és fogyaszt, hogy ne élje fel a jövő erőforrásait: takarékosság, újrahasznosítás, megújuló energia, körforgásos gondolkodás. Az egyénnek is van szerepe.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hulladék és a hulladékgazdálkodás' },
        {
          kind: 'text',
          text: 'A **hulladék** a termelés és a fogyasztás mellékterméke: települési (háztartási) hulladék, ipari hulladék, mezőgazdasági és építési hulladék, veszélyes hulladék (akkumulátor, vegyszer, festék), elektronikai hulladék. A mennyisége a **gazdagsággal és a fogyasztással nő**: a fejlett országokban egy főre több hulladék jut, a fejlődő világ gyorsan növő városaiban pedig gyakran hiányzik a gyűjtés és a kezelés. A rosszul kezelt hulladék szennyezi a talajt, a talajvizet, a levegőt (égetés), a tengereket (műanyag), és kárba veszik a benne lévő nyersanyagok.',
        },
        {
          kind: 'text',
          text: 'A **hulladékgazdálkodás** a hulladék keletkezésének megelőzésétől az utolsó kezelésig terjedő rendszer. Az EU öt lépcsős **hulladékhierarchiát** határoz meg, amely a megoldások sorrendjét adja: (1) **megelőzés** (kevesebb hulladék keletkezzen), (2) **újrahasználatra előkészítés** (javítás, újrahasználat), (3) **újrahasznosítás** (anyagában történő feldolgozás), (4) **egyéb hasznosítás** (például energiatermelés), (5) **ártalmatlanítás** (lerakás). A legjobb hulladék az, amely nem keletkezik.',
        },
        { kind: 'heading', text: 'A hulladékkezelés módjai' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Lerakás',
              text: 'a hulladék tárolása szigetelt lerakón. Előny: olcsó, egyszerű. Hátrány: nagy területet foglal, szennyezheti a talajt és a vizet, metánt (üvegházgáz) bocsát ki.',
            },
            {
              term: 'Égetés energia-visszanyeréssel',
              text: 'a hulladékból hő és áram nyerhető, a mennyiség jelentősen csökken. Hátrány: légszennyező anyagok (szűrni kell), hamu, a nyersanyag elvész.',
            },
            {
              term: 'Újrahasznosítás',
              text: 'a hulladék anyagának újrafeldolgozása új termékké: nyersanyagot és energiát takarít meg, csökkenti a bányászatot. Hátrány: kell hozzá szelektív gyűjtés és tisztítás, nem minden anyag hasznosítható korlátlanul.',
            },
            {
              term: 'Komposztálás',
              text: 'a szerves hulladék lebontása, talajjavító anyag előállítása: visszajuttatja a tápanyagot a talajba. Hátrány: csak szerves anyagra alkalmas, helyet és odafigyelést igényel.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **szelektív hulladékgyűjtés** (papír, üveg, fém, műanyag, szerves hulladék, veszélyes hulladék külön) az újrahasznosítás előfeltétele. **Példák az újrahasznosításra:** a papír újra papírrá (a fa kímélése), az üveg újraolvasztva (nyersanyagot és energiát spórol), a fémek (az alumínium újrahasznosítása a primer gyártás energiájának töredékéből megoldható), a műanyag (palack, fólia), az elektronikai hulladékból értékes fémek nyerhetők vissza (arany, réz, ritka fémek), a szerves hulladékból komposzt vagy biogáz. Az újrahasznosításnak is vannak korlátai: a gyűjtés és a szállítás költsége, a szennyezett vagy kevert hulladék, az egyes anyagok minőségromlása.',
        },
        {
          kind: 'example',
          title: 'Számolás: újrahasznosítási arány és a lerakott hulladék',
          problem:
            'Egy városban egy évben 120 ezer tonna települési hulladék keletkezett. Ebből 42 ezer tonnát hasznosítottak újra, 18 ezer tonnát komposztáltak, 12 ezer tonnát energetikailag hasznosítottak, a többit lerakták. Mekkora az újrahasznosítási arány, és mennyi került lerakóra?',
          solution:
            'Újrahasznosítási arány: $42\\,000 / 120\\,000 = 0{,}35$, vagyis **35%**. (Ha a komposztálást is az újrahasznosításhoz számítják: $(42+18)/120 = 50\\%$; mindig nézd meg, mit kér a feladat.) Lerakott hulladék: $120 - 42 - 18 - 12 = 48$ ezer tonna, vagyis $48/120 = 40\\%$. Az energetikai hasznosítás aránya 10%.',
        },
        { kind: 'heading', text: 'Fogyasztói társadalom és tudatos fogyasztás' },
        {
          kind: 'compare',
          title: 'Fogyasztói társadalom és tudatos fogyasztói közösség',
          columns: ['Fogyasztói társadalom', 'Tudatos fogyasztói közösség'],
          rows: [
            {
              label: 'Vásárlás',
              cells: [
                'sokat és gyakran, a reklám és a divat hatására; eldobható termékek',
                'szükség szerint, a termék életciklusát mérlegelve; tartós, javítható termékek',
              ],
            },
            {
              label: 'Szempontok',
              cells: [
                'ár, kényelem, státusz, újdonság',
                'környezeti hatás, származás, tisztességes munkakörülmény, helyi termék, csomagolás',
              ],
            },
            {
              label: 'Példák',
              cells: [
                'gyorsdivat (fast fashion), tervezett elavulás, nagy csomagolás, élelmiszer-pazarlás',
                'fair trade termékek, helyi termelői piac, használtcikk-csere, javítóműhelyek, csomagolásmentes boltok, közösségi kertek',
              ],
            },
            {
              label: 'Környezeti hatás',
              cells: [
                'nagy nyersanyag- és energiaigény, sok hulladék',
                'kisebb ökológiai lábnyom, kevesebb hulladék',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **fogyasztói társadalom** gazdaságát a folyamatos fogyasztás hajtja; haszna a munkahely és a bőség, ára a nyersanyag-kitermelés, a szállítás és a hulladék. A **tudatos fogyasztói közösségek** (például helyi termelőkkel együttműködő vásárlói körök, közös használatot szervező csoportok) a vásárlási döntéseikkel hatnak a termelésre. A fenntartható divat is idetartozik: tartós ruha, használt ruha, javítás, kevesebb új vásárlás.',
        },
        { kind: 'heading', text: 'Ökológiai lábnyom és a Túlfogyasztás Napja' },
        {
          kind: 'text',
          text: 'Az **ökológiai lábnyom** egy ember, település vagy ország ellátásához és hulladékának elnyeléséhez szükséges biológiailag termékeny terület (szántó, legelő, erdő, tenger, beépített terület, a szén-dioxid megkötéséhez szükséges erdő), amelyet globális hektárban fejeznek ki. Ezt a **bioszféra eltartóképességével** (biokapacitás) vetik össze. A **Túlfogyasztás Napja** (Earth Overshoot Day) az a nap, amikorra az emberiség elfogyasztja azt, amit a Föld abban az évben megújítani tud: utána az év végéig a készletekből élünk. A Global Footprint Network számítása szerint 2025-ben július 24-ére esett (2024: augusztus 1.); az 1970-es évek elején még az év végére. Országokra is kiszámítják: a gazdag országok napja sokkal korábban van.',
        },
        {
          kind: 'example',
          title: 'Számolás: hányadik napra esik a Túlfogyasztás Napja?',
          problem:
            'Az emberiség ökológiai lábnyoma egy évben a Föld biokapacitásának 1,8-szerese. Az év hányadik napjára esik a Túlfogyasztás Napja (365 napos évet számolj)? Hány Földre lenne szükségünk, ha mindenki így élne?',
          solution:
            '$365 / 1{,}8 \\approx 203$. Tehát az év kb. **203. napján**, július 22-én. Ha mindenki így élne, **1,8 Földre** lenne szükség. Ha a lábnyom csak 1,5-szörös lenne, a nap később, a 243. napon, augusztus 31-én lenne.',
        },
        { kind: 'heading', text: 'Fenntartható gazdaság és az egyén' },
        {
          kind: 'text',
          text: 'A **fenntartható gazdaság** a gazdasági célokat a társadalmi és környezeti szempontokkal együtt követi, úgy, hogy a mai szükségletek kielégítése ne veszélyeztesse a jövő nemzedékeit. Jellemzői: **takarékos erőforrás-használat** (anyag- és energiahatékonyság), **újrahasznosítás** és **körforgásos gazdaság** (a hulladék nyersanyag lesz), **megújuló energia**, a szennyezés megelőzése, a tisztességes munka és a helyi gazdaság erősítése, hosszú élettartamú, javítható termékek. Mellette szól: a nyersanyagok és a természet megóvása, az egészség, a hosszú távú gazdasági biztonság, az éghajlat védelme, az utódok joga az erőforrásokra.',
        },
        { kind: 'heading', text: 'Az egyén szerepe és felelőssége' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Fogyasztás',
              text: 'kevesebb, tartósabb, javítható termék; élelmiszer-pazarlás csökkentése; helyi és szezonális élelmiszer.',
            },
            {
              term: 'Hulladék',
              text: 'szelektív gyűjtés, komposztálás, csomagolás kerülése, többször használható termékek.',
            },
            {
              term: 'Energia és víz',
              text: 'takarékos fűtés és világítás, hatékony készülékek, vízkímélés.',
            },
            {
              term: 'Közlekedés',
              text: 'tömegközlekedés, kerékpár, gyaloglás, közös autóhasználat.',
            },
            {
              term: 'Társadalmi szerepvállalás',
              text: 'önkéntes munka, szemétszedési akciók, helyi civil szervezetek, szavazás és véleménynyilvánítás.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A környezeti szempontok **érvényesítése a termelésben**: tisztább technológia, környezeti hatásvizsgálat, hulladékminimalizálás, termék-életciklus-szemlélet (a tervezéstől a hulladékig), környezetbarát termékek jelölése (ökocímke). **A fogyasztásban:** az ár mellett a környezeti terhelés mérlegelése, az információk (jelölések) használata. A korlát az, hogy a környezetbarát termék gyakran drágább, az információ hiányos („zöldre mosás”), és a kereslet az árra érzékeny.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli:** hulladékhierarchia sorba rendezése, kördiagram a hulladék összetételéről vagy kezeléséről (százalék- és tömegszámítás), újrahasznosítási arány kiszámítása, a Túlfogyasztás Napja grafikon értelmezése, fogalompárosítás (fogyasztói társadalom, tudatos fogyasztói közösség, ökológiai lábnyom). **Szóbeli:** „A hulladékgazdálkodás jelentősége, a hulladékok újrahasznosításának lehetőségei”, „A fogyasztói társadalom és a tudatos fogyasztói közösségek jellemzői”, „A fenntartható gazdaság”, „Az egyén társadalmi szerepvállalásának lehetőségei”.',
        },
        {
          kind: 'warning',
          text: 'A szelektív gyűjtés **nem azonos** az újrahasznosítással: a gyűjtés csak az előfeltétel. Az égetés és a lerakás sem „megoldás”, hanem a hierarchia alsó lépcsője. A Túlfogyasztás Napja nem „fogyasztási ünnep” és nem karácsonyi csúcs, hanem a biokapacitás elfogyásának napja.',
        },
        {
          kind: 'tip',
          text: 'Érvelés a fenntartható gazdaság mellett mindig három szinten legyen: környezeti (nyersanyag, éghajlat), gazdasági (költségmegtakarítás, hosszú távú biztonság), társadalmi (egészség, igazságosság, utódok). A példád legyen konkrét: például a papír újrahasznosítása a fát kíméli, az üveg újraolvasztása energiát takarít meg.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz („Miért jobb a megelőzés az újrahasznosításnál?”): „Ha a hulladék nem keletkezik, nincs gyűjtési, szállítási és feldolgozási energiaigény, és nem kell nyersanyagot sem kitermelni. Az újrahasznosítás is energiát igényel, és minőségvesztéssel járhat, ezért a hulladékhierarchiában a megelőzés előzi meg.”',
        },
      ],
      topicMatch: [
        'hulladékkezelés',
        'fenntarthatóság',
        'fenntartható divat',
        'fenntartható fogyasztás',
        'túlfogyasztás',
      ],
      quiz: [
        {
          question: 'Mi áll a hulladékgazdálkodás sorrendjének élén?',
          options: ['lerakás', 'égetés', 'megelőzés', 'újrahasznosítás'],
          answer: 2,
          explanation: 'A legjobb hulladék az, amely nem keletkezik.',
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
          explanation: 'Utána az év végéig a készleteket éljük fel, a jövő rovására.',
        },
        {
          question: 'Melyik a tudatos fogyasztói közösség jellemzője?',
          options: [
            'minél több eldobható termék vásárlása',
            'a termékek környezeti és társadalmi hatásának mérlegelése, helyi és tartós termékek választása',
            'a reklámok alapján történő vásárlás',
            'a gyorsdivat',
          ],
          answer: 1,
          explanation: 'A tudatos fogyasztó a termék hatásait is figyelembe veszi.',
        },
        {
          question:
            '120 ezer tonna hulladékból 30 ezer tonnát hasznosítanak újra. Mekkora az újrahasznosítási arány?',
          options: ['20%', '25%', '30%', '40%'],
          answer: 1,
          explanation: '30 / 120 = 0,25, azaz 25%.',
        },
        {
          question: 'Mit mutat az ökológiai lábnyom?',
          options: [
            'egy ország területének nagyságát',
            'mekkora termékeny terület szükséges egy ember vagy ország fogyasztásához és hulladékának elnyeléséhez',
            'a megtett út hosszát',
            'a szennyező gyárak számát',
          ],
          answer: 1,
          explanation: 'A lábnyom az erőforrás-igény területi egyenértéke.',
        },
      ],
      sources: [
        {
          label: 'Global Footprint Network: Earth Overshoot Day',
          url: 'https://overshoot.footprintnetwork.org/',
        },
        { label: 'Wikipédia: Ökológiai lábnyom', url: wiki('Ökológiai lábnyom') },
        { label: 'Wikipédia: Körforgásos gazdaság', url: wiki('Körforgásos gazdaság') },
      ],
    },
    {
      id: 'energiahordozok-megujulo-nem-megujulo',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Megújuló és nem megújuló energiahordozók: lehetőségek, korlátok, következmények',
      level: 'kozep',
      requirement: {
        kozep:
          '10.4: Mutassa be a megújuló és a nem megújuló energiahordozók fő jellemzőit, felhasználásuk lehetőségeit, korlátait és környezeti következményeit.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Nem megújuló** energiahordozók: kőszén, kőolaj, földgáz (fosszilisek) és az urán (atomenergia). Készletük véges, kialakulásuk milliónyi évet igényel.',
            '**Megújuló** energiaforrások: napenergia, szélenergia, vízenergia, biomassza, geotermikus energia (a tengerek energiája is). Folyamatosan újratermelődnek, vagy gyakorlatilag kimeríthetetlenek.',
            'Világszerte a fosszilis energiahordozók adják az elsődleges energiafelhasználás mintegy négyötödét; a megújulók aránya a villamosenergia-termelésben 2023-ban kb. 30% volt, és gyorsan nő.',
            'Minden energiaforrásnak van környezeti hatása és korlátja: a fosszilisek üvegházgázt és légszennyezést okoznak, az atomenergia sugárzó hulladékot hagy, a megújulók időjárásfüggők, helyigényesek, és beavatkoznak a tájba.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az energiahordozók csoportosítása' },
        {
          kind: 'text',
          text: 'Az **energiahordozó** olyan anyag vagy természeti jelenség, amelyből energia nyerhető. **Elsődleges** energiahordozó a természetben található (kőolaj, szén, szél), **másodlagos** a feldolgozott (villamos áram, benzin, távhő). Az **energiagazdaság** a termelés, a szállítás és a felhasználás rendszere. A **megújuló** források kimeríthetetlenek vagy az ember időskáláján gyorsan újratermelődnek, a **nem megújulók** elfogynak: ha kitermeljük, pótlásuk rendkívül lassú.',
        },
        { kind: 'heading', text: 'A fő energiahordozók összehasonlítása' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Kőszén',
              text: '**Felhasználás:** hőerőművek, vas- és acélgyártás; nagy készletek (például Kína, India, USA, Ausztrália). **Korlát:** véges; a bányászat és a szállítás költséges. **Környezet:** az egységnyi energiára legtöbb szén-dioxid; kén-dioxid (savas eső), por; felszíni bányák tájrombolása.',
            },
            {
              term: 'Kőolaj',
              text: '**Felhasználás:** közlekedés (benzin, gázolaj), vegyipar nyersanyaga; a készletek nagy része a Perzsa-öböl térségében van. **Korlát:** véges; kevés térségbe összpontosul, az árak ingadoznak, politikai függőség. **Környezet:** szén-dioxid, szennyezés a kitermelésnél és szállításnál (olajszennyezés, tengeri baleset).',
            },
            {
              term: 'Földgáz',
              text: '**Felhasználás:** fűtés, villamosenergia-termelés, vegyipar; gázvezetékek és cseppfolyósított szállítás. **Korlát:** véges; vezeték- vagy szállítási infrastruktúra, ellátási függőség. **Környezet:** tisztább a szénnél, de szén-dioxidot bocsát ki, a kitermelés és szállítás során metán szökhet el.',
            },
            {
              term: 'Urán (atomenergia)',
              text: '**Felhasználás:** nagy mennyiségű, folyamatos áram egy atomerőműből; kevés tüzelőanyag kell. **Korlát:** véges uránkészlet; nagy beruházási költség, biztonsági igények. **Környezet:** működés közben nincs szén-dioxid-kibocsátás, de sugárzó hulladék keletkezik, és baleset veszélye van (Csernobil, Fukushima).',
            },
            {
              term: 'Napenergia',
              text: '**Felhasználás:** napelem (áramtermelés), napkollektor (hő); napfényben gazdag térségekben különösen. **Korlát:** időjárás- és napszakfüggő, tárolás és hálózat kell, helyigényes. **Környezet:** működés közben nincs kibocsátás; a gyártás és az elhasznált panelek terhelnek.',
            },
            {
              term: 'Szélenergia',
              text: '**Felhasználás:** szélerőművek, főleg tengerparton, szeles területeken, tengeri parkokban. **Korlát:** a szél ingadozik, a hálózat terhelése, tárolás. **Környezet:** nincs kibocsátás; zaj, tájképi hatás, madarak és denevérek veszélyeztetése.',
            },
            {
              term: 'Vízenergia',
              text: '**Felhasználás:** duzzasztógátas és folyóvízi erőművek; a hegyvidéki, vízben gazdag térségek előnyben. **Korlát:** megfelelő folyó és esés kell, az aszály csökkenti a termelést. **Környezet:** a gát megváltoztatja a folyót, elöntött területek, a halak vándorlásának akadályozása, elköltöztetett lakosság.',
            },
            {
              term: 'Biomassza',
              text: '**Felhasználás:** tűzifa, növényi maradék, biogáz, bioüzemanyag; a hulladékból is nyerhető. **Korlát:** a termőterület más célt is szolgálhatna (élelmiszer), a szállítás költsége. **Környezet:** szén-dioxid-semleges lehet, ha fenntartható; az erdőirtás és a nagyüzemi energiaültetvény ártalmas; az égetésből por keletkezik.',
            },
            {
              term: 'Geotermikus energia',
              text: '**Felhasználás:** a Föld belső hője: fűtés, termálvíz, áramtermelés; vulkáni térségekben (Izland) és a Pannon-medencében kedvező. **Korlát:** a hőforrás helyhez kötött, a beruházás költséges, a hévíz sótartalma. **Környezet:** alacsony kibocsátás; a sós termálvizet vissza kell sajtolni, kis talajmozgás-kockázat.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **fosszilis** tüzelőanyagok a földtörténet során felhalmozódott szerves anyagokból keletkeztek (a kőszén a karbon korszak erdeiből), ezért ember által belátható időn belül nem pótolhatók. Az **atomenergia** nem fosszilis, de az uránérc véges, ezért a nem megújulók közé tartozik. Magyarországon a legnagyobb villamosenergia-termelő a paksi atomerőmű; a hazai megújulók közül a napenergia és a biomassza fontos, a Pannon-medencében a geotermikus adottságok kedvezőek (termálfürdők, távfűtés, üvegházak).',
        },
        {
          kind: 'text',
          text: 'Miért nem váltja le egyszerűen a megújuló energia a fosszilisakat? (1) A **változékonyság**: a nap nem süt éjjel, a szél nem mindig fúj, ezért kiegészítő források, **tárolás** (akkumulátor, szivattyús tározó) és erős, okos **hálózat** kell. (2) A **beruházási költség** és az átállás ideje: az erőművek, hálózatok és járművek hosszú élettartamúak. (3) A **földrajzi egyenlőtlenség**: nem mindenhol van folyó, szél vagy napfény. (4) Az **ipar** nyersanyagigénye (például a kőolaj vegyipari felhasználása). (5) Az energiaszegény országok **hozzáférési** problémái. A megújulók költsége az utóbbi évtizedekben jelentősen csökkent, ezért részaránya gyorsan nő.',
        },
        {
          kind: 'example',
          title: 'Számolás: háztartási napelem',
          problem:
            'Egy háztartás évi villamosenergia-fogyasztása 3000 kWh. Hazai viszonyok között egy 1 kW névleges teljesítményű napelem évente átlagosan kb. 1000 kWh-t termel. Hány kW-os napelem fedezné a fogyasztást éves szinten? Miért nem elég ez a számítás az ellátáshoz?',
          solution:
            '$3000 / 1000 = 3$, vagyis kb. **3 kW**-os rendszer termelné éves összegben a szükséges áramot. A számítás csak éves egyenleg: a napelem nyáron és délben termel a legtöbbet, télen és este kevés, a fogyasztás viszont más időpontokban csúcsos, ezért hálózat, tárolás vagy kiegészítő forrás is kell. (A termelési érték becslés, a tájolástól és a dőlésszögtől függ.)',
        },
        {
          kind: 'example',
          title: 'Ábraelemzés: energiamix százalékai',
          problem:
            'Egy ország évi villamosenergia-termelése 60 TWh: ebből 24 TWh atom-, 15 TWh gáz-, 9 TWh nap-, 6 TWh szél- és 6 TWh egyéb. Mekkora a megújulók és a fosszilisek aránya?',
          solution:
            'Megújuló (nap + szél) = $9 + 6 = 15$ TWh, ami $15/60 = 25\\%$. Fosszilis (gáz) = 15 TWh = 25%. Az atomenergia (24 TWh, 40%) nem megújuló, de nem is fosszilis: a feladat szövegében ügyelj a kategóriára. Az „egyéb” kategóriát csak akkor sorold valahová, ha a feladat megmondja, mi az.',
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli:** energiahordozók csoportosítása (megújuló és nem megújuló), a villamosenergia-termelés összetételét mutató kör- vagy oszlopdiagram elemzése, kitermelő és felhasználó országok a térképen, előny–hátrány párosítás, százalékszámítás. **Szóbeli:** „Az energiahordozók csoportosítása, környezetre gyakorolt hatásuk értékelése” – mindig mondj legalább egy-egy megújuló és nem megújuló példát előnnyel és hátránnyal.',
        },
        {
          kind: 'warning',
          text: 'Az **atomenergia** nem megújuló (véges uránkészlet), bár működés közben nem bocsát ki szén-dioxidot. A **biomassza** csak akkor megújuló és kedvező, ha fenntartható módon termelik. A „megújuló” nem jelent „hatás nélküli”: vízerőmű, szélerőmű és napelem is terheli a környezetet.',
        },
        {
          kind: 'tip',
          text: 'Értékelő válasz szerkezete: (1) csoport (megújuló/nem), (2) felhasználási lehetőség, (3) korlát, (4) környezeti következmény, (5) összegzés („ezért célszerű a források keverékét használni”). A pontozás gyakran erre a négy elemre osztható.',
        },
      ],
      topicMatch: [
        'energiahordozók',
        'energiaforrások',
        'energiatermelés',
        'villamosenergia-termelés',
        'geotermikus energia',
      ],
      quiz: [
        {
          question: 'Melyik megújuló energiaforrás?',
          options: ['földgáz', 'szélenergia', 'kőszén', 'uránérc'],
          answer: 1,
          explanation: 'A szélenergia folyamatosan újratermelődik.',
        },
        {
          question: 'Melyik állítás igaz az atomenergiára?',
          options: [
            'megújuló energiaforrás',
            'működés közben nem bocsát ki szén-dioxidot, de radioaktív hulladék keletkezik',
            'szén-dioxidot bocsát ki, mint a szén',
            'az uránkészlet kimeríthetetlen',
          ],
          answer: 1,
          explanation:
            'Az atomenergia nem megújuló, nincs működési CO₂-kibocsátás, de sugárzó hulladékot hagy.',
        },
        {
          question: 'Melyik a napenergia fő korlátja?',
          options: [
            'működés közben nagy szén-dioxid-kibocsátás',
            'időjárás- és napszakfüggő, tárolás és hálózat szükséges',
            'véges készlet',
            'nincs szükség területre',
          ],
          answer: 1,
          explanation: 'A termelés ingadozik, ezért tárolás vagy kiegészítő forrás kell.',
        },
        {
          question:
            'Melyik fosszilis energiahordozó bocsát ki egységnyi energiára a legtöbb szén-dioxidot?',
          options: ['földgáz', 'kőszén', 'szélenergia', 'geotermikus energia'],
          answer: 1,
          explanation: 'A kőszén szén-dioxid-intenzitása a fosszilisek között a legnagyobb.',
        },
        {
          question:
            'Egy háztartás évi 4000 kWh áramot fogyaszt, a napelem 1 kW-ja évente 1000 kWh-t termel. Hány kW-os rendszer fedezi éves szinten?',
          options: ['2 kW', '3 kW', '4 kW', '5 kW'],
          answer: 2,
          explanation: '4000 / 1000 = 4 kW.',
        },
      ],
      sources: [
        { label: 'Nemzetközi Energiaügynökség (IEA)', url: 'https://www.iea.org/' },
        { label: 'Wikipédia: Megújuló energia', url: wiki('Megújuló energia') },
        { label: 'Wikipédia: Energiahordozó', url: wiki('Energiahordozó') },
      ],
    },
    {
      id: 'nyersanyag-energiavalsag-fogyasztovedelem',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Nyersanyag- és energiaválság, hatékonyság, fogyasztóvédelem',
      level: 'emelt',
      requirement: {
        emelt:
          '10.4: Mutassa be a nyersanyag- és energiaválság kialakulásának folyamatát. Igazolja az energia- és nyersanyag-hatékony gazdálkodás lényegét, az alternatív energiaforrások hasznosításának jelentőségét. Mutassa be a környezeti szempontok érvényesíthetőségét a termelésben és a fogyasztásban. Hasonlítsa össze fogyasztóvédelmi szempontból a hagyományos és elektronikus vásárlást.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **nyersanyag- és energiaválság** akkor áll elő, ha a kereslet gyorsan nő, a könnyen hozzáférhető készletek fogynak, a kitermelés néhány térségre összpontosul, és az ellátás vagy az ár zavart szenved. Példa: az 1973-as olajválság.',
            'A válasz az **energiahatékonyság** (ugyanahhoz a haszonhoz kevesebb energia), az **anyaghatékonyság** (kevesebb nyersanyag, újrahasznosítás) és az **alternatív** (megújuló) energiaforrások hasznosítása.',
            'A **környezeti szempontok** a termelésben (tisztább technológia, életciklus-szemlélet) és a fogyasztásban (tudatos választás) érvényesíthetők.',
            'A **fogyasztóvédelem** a vásárló jogait védi. Elektronikus vásárlásnál (távollévők között kötött szerződés) megvan az **elállási jog**, de nagyobb a csalás- és adatvédelmi kockázat, nem lehet kipróbálni a terméket.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A nyersanyag- és energiaválság kialakulása' },
        {
          kind: 'text',
          text: 'Az **ipari forradalom** óta a gazdaság növekedése a nyersanyagok és az energia fogyasztásának ugrásszerű emelkedésén alapult: előbb a szén, a 20. században a kőolaj és a földgáz lett a legfontosabb. A 20. század második felében a **népesség, a termelés és a fogyasztás** együtt nőtt, a felhasználás meghaladta a hazai készleteket, és a fejlett országok importra szorultak. A kőolaj- és földgázkészletek néhány térségben (Perzsa-öböl, Oroszország) összpontosulnak, ezért az ellátás **politikai függőséget** okoz.',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1973',
              text: 'Olajválság: a közel-keleti háború után az arab olajexportáló országok korlátozták a szállítást, az olaj ára többszörösére nőtt. Az iparosodott országok gazdasága lelassult, megkezdődött az energiatakarékosság és az alternatívák keresése.',
            },
            {
              date: '1979',
              text: 'Második olajválság az iráni forradalom után: újabb áremelkedés.',
            },
            {
              date: '2000-es évek',
              text: 'A feltörekvő országok (főként Kína és India) kereslete miatt emelkedtek a nyersanyag- és energiaárak.',
            },
            {
              date: '2022',
              text: 'Az ukrajnai háború nyomán az európai gázellátás zavart szenvedett, az energiaárak megugrottak, az országok az ellátás diverzifikálását kezdték.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A válság nemcsak az energiát érinti. A modern technológiához szükséges **nyersanyagok** (például lítium, kobalt, ritkaföldfémek) kitermelése is néhány országra koncentrálódik, ezért ellátási kockázat jön létre. A **rendelkezésre álló készlet** helyett a **gazdaságosan kitermelhető készlet** számít: ha a könnyű lelőhelyek elfogynak, a kitermelés költsége és környezeti terhelése nő. A válság következménye: áremelkedés, infláció, gazdasági visszaesés, energiaszegénység a szegényebb háztartásokban, geopolitikai feszültségek.',
        },
        { kind: 'heading', text: 'Energia- és nyersanyag-hatékony gazdálkodás' },
        {
          kind: 'compare',
          title: 'Hatékonyság és alternatív források',
          columns: ['Energia- és anyaghatékonyság', 'Alternatív energiaforrások'],
          rows: [
            {
              label: 'Lényege',
              cells: [
                'ugyanazt a terméket vagy szolgáltatást kevesebb energiával és nyersanyaggal állítani elő',
                'a fosszilis forrásokat megújuló vagy kisebb terhelésű forrásokkal kiváltani',
              ],
            },
            {
              label: 'Példák',
              cells: [
                'épületek hőszigetelése, LED-világítás, hőszivattyú, kapcsolt hő- és villamosenergia-termelés, takarékos járművek, újrahasznosítás, hosszú élettartamú termékek, a gyártási hulladék visszavezetése',
                'nap-, szél-, víz-, biomassza- és geotermikus energia, hidrogén és tárolási megoldások',
              ],
            },
            {
              label: 'Jelentőség',
              cells: [
                'olcsóbb, kevesebb kibocsátás, kisebb importfüggés – a „legolcsóbb energia a meg nem termelt energia”',
                'diverzifikált ellátás, kevesebb üvegházgáz, helyi gazdasági fejlődés, kisebb importfüggés',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **körforgásos gazdaság** a nyersanyagot lehetőleg a körben tartja (javítás, újrahasználat, újrahasznosítás). Az **életciklus-szemlélet** az egész utat nézi: kitermelés, gyártás, szállítás, használat, hulladék. Az **elektromos autó** például használat közben nem bocsát ki, de gyártása (akkumulátor) nyersanyag- és energiaigényes, így az előnye az áramtermelés összetételétől is függ.',
        },
        { kind: 'heading', text: 'Környezeti szempontok a termelésben és a fogyasztásban' },
        { kind: 'heading', text: 'Hogyan érvényesíthetők?' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Termelésben',
              text: 'környezeti hatásvizsgálat, tisztább technológia, hulladék- és kibocsátás-csökkentés, hatékony anyag- és energiafelhasználás, szennyező fizet elv, adók és támogatások, hatósági ellenőrzés.',
            },
            {
              term: 'Fogyasztásban',
              text: 'környezetbarát jelölések (ökocímke), információ a termék eredetéről és hatásáról, tartós termékek, javítás, szelektív gyűjtés, kevesebb pazarlás.',
            },
            {
              term: 'Korlátok',
              text: 'a környezetbarát termék gyakran drágább; hiányos vagy megtévesztő információ („zöldre mosás”); eltérő szabályozás országonként; a költségérzékeny kereslet.',
            },
          ],
        },
        { kind: 'heading', text: 'Fogyasztóvédelem: hagyományos és elektronikus vásárlás' },
        {
          kind: 'text',
          text: 'A **fogyasztóvédelem** azokat a jogszabályokat és intézményeket jelenti, amelyek a vásárlót a tisztességtelen eladóval szemben védik: tájékoztatás, biztonságos termék, szavatosság és jótállás, panaszkezelés, tisztességtelen kereskedelmi gyakorlatok tiltása. Magyarországon fogyasztóvédelmi hatóság és békéltető testületek segítik a fogyasztókat; az Európai Unióban egységesek az alapvető szabályok.',
        },
        {
          kind: 'compare',
          title: 'Hagyományos (üzletben) és elektronikus (internetes) vásárlás',
          columns: ['Hagyományos vásárlás', 'Elektronikus vásárlás'],
          rows: [
            {
              label: 'Termék megismerése',
              cells: [
                'kipróbálható, megnézhető, azonnal elvihető',
                'csak leírás és kép alapján, nem kipróbálható',
              ],
            },
            {
              label: 'Elállás',
              cells: [
                'általában nincs külön törvényes elállási jog (az eladó engedékenységétől függ), a hibás termékre szavatosság van',
                'távollévők között kötött szerződésnél az EU-ban főszabály szerint 14 napos indokolás nélküli elállási jog',
              ],
            },
            {
              label: 'Kockázat',
              cells: [
                'kisebb: személyes kapcsolat, azonnali fizetés',
                'nagyobb: megtévesztő hirdetés, hamisított termék, csaló webshop, adatlopás',
              ],
            },
            {
              label: 'Adatok',
              cells: [
                'kevés személyes adat',
                'a személyes és a fizetési adatok védelme kiemelt kérdés',
              ],
            },
            {
              label: 'Környezet',
              cells: [
                'a vásárló utazik az üzletbe',
                'csomagolás és házhoz szállítás, visszaküldések szállítási terhe',
              ],
            },
            {
              label: 'Előny',
              cells: [
                'személyes tanács, azonnali csere',
                'nagy választék, árösszehasonlítás, kényelem',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Elektronikus vásárlásnál a tudatos fogyasztó ellenőrzi az eladó adatait (cégnév, cím, elérhetőség), az értékeléseket, a biztonságos fizetési módot, az elállási és szállítási feltételeket, és kerüli a „túl jó ajánlatokat”. Kétség esetén a fogyasztóvédelmi hatósághoz és a békéltető testülethez lehet fordulni.',
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli (emelt):** idősor vagy ábra az energiaárakról és a termelésről, szövegrészlet a kőolajválságról, ok–okozati lánc a nyersanyag-függőségről; érvelés az energiahatékonyság mellett; táblázat kitöltése hagyományos és internetes vásárlás összehasonlításáról; esetelemzés fogyasztói panaszról.',
        },
        {
          kind: 'warning',
          text: 'Az energiahatékonyság és az energiatakarékosság nem ugyanaz: a hatékonyság a technika javítása (kevesebb energia ugyanahhoz a szolgáltatáshoz), a takarékosság a fogyasztás visszafogása. Az 1973-as olajválság oka nem a készletek hirtelen kifogyása volt, hanem az ellátás korlátozása és az áremelés.',
        },
        {
          kind: 'tip',
          text: 'Összehasonlításnál (hagyományos – elektronikus vásárlás) mindig adj legalább három azonos szempontot (kipróbálhatóság, elállás, kockázat, adatvédelem) mindkét oldalra, és fogalmazz meg egy összegző mondatot („az elektronikus vásárlásnál nagyobb a kockázat, de az elállási jog védi a vásárlót”).',
        },
      ],
      topicMatch: ['energiagazdaság', 'nyersanyag', 'fogyasztóvédelem'],
      quiz: [
        {
          question: 'Mi jellemzi az energiahatékonyságot?',
          options: [
            'a fogyasztás teljes megszüntetése',
            'ugyanahhoz a szolgáltatáshoz kevesebb energia felhasználása',
            'csak a megújuló energia használata',
            'az energiaárak emelése',
          ],
          answer: 1,
          explanation: 'A hatékonyság az energia és a haszon aránya.',
          emelt: true,
        },
        {
          question: 'Mi történt az 1973-as olajválságban?',
          options: [
            'kifogytak a kőolajkészletek',
            'az olajexportáló országok korlátozták a szállítást, az olaj ára többszörösére nőtt',
            'az olaj ára hirtelen leesett',
            'új olajmezőt találtak',
          ],
          answer: 1,
          explanation: 'Ellátási korlátozás és áremelkedés indította el a gazdasági zavarokat.',
          emelt: true,
        },
        {
          question: 'Melyik előny az elektronikus vásárláshoz kapcsolódó jog?',
          options: [
            'a termék kipróbálása',
            'az indokolás nélküli elállási jog (főszabály szerint 14 nap)',
            'garantált alacsonyabb ár',
            'személyes tanácsadás',
          ],
          answer: 1,
          explanation:
            'Távollévők között kötött szerződésnél az EU-ban elállási jog illeti a fogyasztót.',
          emelt: true,
        },
        {
          question: 'Melyik NEM nyersanyag- és energiahatékony megoldás?',
          options: [
            'épület hőszigetelése',
            'az újrahasznosítás bővítése',
            'a rövid élettartamú, eldobható termékek terjesztése',
            'LED-világítás',
          ],
          answer: 2,
          explanation: 'Az eldobható termékek növelik a nyersanyag- és energiaigényt.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'IEA: energiahatékonyság',
          url: 'https://www.iea.org/energy-system/energy-efficiency-and-demand',
        },
        { label: 'Wikipédia: 1973-as olajválság', url: wiki('1973-as olajválság') },
        { label: 'Wikipédia: Fogyasztóvédelem', url: wiki('Fogyasztóvédelem') },
      ],
    },
    {
      id: 'kornyezetvedelem-nemzetkozi-osszefogas',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Környezet- és természetvédelem, fenntarthatóság, az egyén és az összefogás',
      level: 'kozep',
      requirement: {
        kozep:
          '10.5: Ismerje fel a globális környezeti problémákat hírekben, folyamatokban, jelenségekben, és mutassa be kialakulásuk fő okait. Ismertesse a globális környezeti problémákkal foglalkozó legfontosabb nemzetközi szervezetek fő tevékenységeit. Soroljon fel a természeti-táji értékek és az emberiség kultúrkincsének védelmében tett lépéseket, igazolja ezek fontosságát. Mutassa be az egyén társadalmi szerepvállalásának lehetőségeit, a tevékeny közreműködés példáit a környezet védelmében. Értelmezze a fenntarthatóság fogalmát, a fenntarthatóság elérésének lehetőségeit. Mutassa be példák alapján a helyi szerveződések, illetve a regionális és nemzetközi összefogás feladatát és lehetőségeit a környezet védelme és a fenntarthatóság elérése érdekében.',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **fenntartható fejlődés** a jelen szükségleteit úgy elégíti ki, hogy nem veszélyezteti a jövő nemzedékek lehetőségeit. Három pillére a **környezeti, a gazdasági és a társadalmi** fenntarthatóság.',
            '**Környezetvédelem**: az ember által okozott szennyezés és károsítás megelőzése és csökkentése. **Természetvédelem**: a természeti értékek, fajok és élőhelyek megőrzése. A kettő összefügg, de nem azonos.',
            'Nemzetközi szervezetek: **ENSZ** és szervezetei (környezetvédelmi program, **UNESCO**, **FAO**), **WWF** (természetvédelmi alap, civil szervezet). Értékvédelem: **nemzeti parkok**, védett területek, **világörökség**.',
            'A védelem **helyi** (civil szervezetek, települések), **regionális** (több ország közös ügye, például egy folyó vízgyűjtője) és **nemzetközi** szinten működik. Az egyén szerepe: fogyasztás, hulladék, energia, közlekedés, önkéntesség, szavazat.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a fenntarthatóság?' },
        {
          kind: 'text',
          text: 'A **fenntartható fejlődés** fogalmát az ENSZ megbízásából készült, „Közös jövőnk” című jelentés (1987, Brundtland-jelentés) tette ismertté: olyan fejlődés, amely kielégíti a jelen szükségleteit anélkül, hogy veszélyeztetné a jövő nemzedékek lehetőségét saját szükségleteik kielégítésére. Három összefüggő eleme: **környezeti** (a természeti rendszerek megőrzése), **gazdasági** (hosszú távú gazdasági stabilitás), **társadalmi** (igazságosság, szegénység csökkentése, oktatás, egészség). 2015-ben az ENSZ tagállamai elfogadták a **2030-as Fenntartható Fejlődési Célokat** (17 cél, például a szegénység és az éhezés felszámolása, tiszta víz, megújuló energia, éghajlatvédelem, élővilág védelme).',
        },
        {
          kind: 'compare',
          title: 'Környezetvédelem és természetvédelem',
          columns: ['Környezetvédelem', 'Természetvédelem'],
          rows: [
            {
              label: 'Tárgya',
              cells: [
                'a környezet (levegő, víz, talaj) szennyezésének és károsításának megelőzése, csökkentése',
                'a természeti értékek, a fajok, az élőhelyek és a tájak megőrzése',
              ],
            },
            {
              label: 'Eszközei',
              cells: [
                'kibocsátási határértékek, szennyvíztisztítás, hulladékgazdálkodás, környezeti hatásvizsgálat',
                'védett területek, fajvédelem, élőhely-helyreállítás, ökológiai folyosók',
              ],
            },
            {
              label: 'Példa',
              cells: [
                'szennyvíztisztító építése, szűrők az erőműben',
                'nemzeti park létrehozása, védett faj megóvása',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A természeti-táji értékek és a kultúrkincs védelme' },
        { kind: 'heading', text: 'Védelmi formák' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Nemzeti park',
              text: 'nagy kiterjedésű, természeti értékekben gazdag terület, amelyet az állam védetté nyilvánít; a természeti értékek megóvása mellett bemutatásuk, oktatás és természetkímélő turizmus is cél. A világ első nemzeti parkja az amerikai Yellowstone (1872); az első magyar a Hortobágyi Nemzeti Park (1973). Magyarországnak jelenleg 10 nemzeti parkja van.',
            },
            {
              term: 'Védett terület',
              text: 'jogszabályban védetté nyilvánított természeti terület; a hazai kategóriák közé tartozik a nemzeti park, a tájvédelmi körzet és a természetvédelmi terület. A védelem korlátozza a gazdasági használatot (építés, vadászat, gyűjtés).',
            },
            {
              term: 'Világörökség',
              text: 'az UNESCO 1972-es egyezménye alapján felvett, az egész emberiség számára kiemelkedő jelentőségű kulturális és természeti értékek listája. Magyar példák: a budapesti Duna-part és a Budai Várnegyed, Hollókő, az Aggteleki-karszt barlangjai, a Hortobágy, a pannonhalmi Főapátság, Tokaj-hegyalja, a Fertő táj, Pécs ókeresztény sírkamrái.',
            },
            {
              term: 'Kultúrkincs védelme',
              text: 'műemlékvédelem, restaurálás, múzeumok és levéltárak, a hagyományok megőrzése; háborúban és katasztrófában az értékek mentése. A kultúra és a természet védelme kiegészíti egymást.',
            },
          ],
        },
        {
          kind: 'text',
          text: '**Miért fontos?** A természeti értékek nem pótolhatók, és szolgáltatásokat nyújtanak (tiszta víz, levegő, beporzás, árvízvédelem, pihenés, kutatás). A védett területek menedéket adnak a veszélyeztetett fajoknak. A kultúrkincs a közösség azonosságtudatát őrzi, és az idegenforgalom révén gazdasági értéket is jelent. A világörökségi cím ugyanakkor kötelezettséget is jelent a megőrzésre, és a tömegturizmus maga is terhelheti az értékeket.',
        },
        { kind: 'heading', text: 'Nemzetközi szervezetek' },
        { kind: 'heading', text: 'A legfontosabb szervezetek és fő tevékenységük' },
        {
          kind: 'terms',
          items: [
            {
              term: 'ENSZ környezetvédelmi programja (UNEP)',
              text: 'nemzetközi környezetpolitika összehangolása, kutatás, tájékoztatás, környezeti egyezmények előkészítése',
            },
            {
              term: 'UNESCO',
              text: 'oktatás, tudomány, kultúra: a világörökségi lista vezetése, bioszféra-rezervátumok, kulturális értékek védelme',
            },
            {
              term: 'FAO',
              text: 'az ENSZ élelmezési és mezőgazdasági szervezete: az éhezés csökkentése, a mezőgazdaság, az erdők és a halászat fenntartható fejlesztése, adatok az élelmezésről',
            },
            {
              term: 'WWF',
              text: 'civil természetvédelmi szervezet (1961): élőhelyek és veszélyeztetett fajok védelme, kampányok, természetvédelmi programok, oktatás',
            },
            {
              term: 'Greenpeace és más civil szervezetek',
              text: 'figyelemfelhívás, tiltakozás, nyomásgyakorlás a kormányokra és a vállalatokra',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az egyes szintek feladata: **helyi** szinten a települések és civil szervezetek (faültetés, szemétszedés, patakok megtisztítása, helyi hulladékgazdálkodás, környezeti nevelés); **regionális** szinten a közös természeti rendszerek (Duna, Balti-tenger, Alpok, Kárpátok) védelme, uniós politikák; **nemzetközi** szinten egyezmények, ENSZ-programok, támogatások a fejlődő országoknak. A szintek **kiegészítik egymást**: a nemzetközi célokat helyi tettek valósítják meg.',
        },
        { kind: 'heading', text: 'Az egyén szerepe' },
        { kind: 'heading', text: 'Az egyén lehetőségei' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Fogyasztói döntések',
              text: 'kevesebb és tudatosabb vásárlás, helyi és szezonális élelmiszer, pazarlás csökkentése, javítás és újrahasználat.',
            },
            {
              term: 'Energia, víz, hulladék',
              text: 'takarékos fűtés és világítás, szelektív gyűjtés, komposztálás, vízkímélés.',
            },
            {
              term: 'Közlekedés',
              text: 'tömegközlekedés, kerékpár, gyaloglás, közös autóhasználat, ritkább repülés.',
            },
            {
              term: 'Közösségi szerepvállalás',
              text: 'önkéntes környezetvédelmi akciók, civil szervezetekben részvétel, petíciók, véleménynyilvánítás, szavazás.',
            },
            {
              term: 'Példaadás és tájékozódás',
              text: 'környezeti nevelés, megbízható források használata, a környezeti hírek kritikus értékelése.',
            },
          ],
        },
        {
          kind: 'text',
          text: '**Hírekben a globális problémák felismerése.** Egy hír vagy ábra alapján azonosítsd: (1) melyik probléma (éghajlatváltozás, ózonritkulás, biodiverzitás-csökkenés, vízhiány, hulladék, népességnövekedés, éhezés), (2) mi az oka (energiafelhasználás, erdőirtás, szegénység, fogyasztás), (3) mi a következmény, (4) mi lehet a megoldás és kinek a feladata (helyi, nemzeti, nemzetközi). Különítsd el a *tényt* a *véleménytől*, és ellenőrizd az adatok forrását.',
        },
        {
          kind: 'example',
          title: 'Gyakorlat: hír elemzése',
          problem:
            'Egy hír szerint egy folyó mentén a gyárak tisztítatlan szennyvize miatt elpusztult a halállomány, a lakosság ivóvize szennyezett lett. Hogyan elemeznéd a fent tanult szempontok szerint?',
          solution:
            '**Probléma:** vízszennyezés, a folyó élővilágának pusztulása. **Ok:** tisztítatlan ipari szennyvíz, ellenőrzés hiánya. **Következmény:** halpusztulás, ivóvíz-szennyeződés, egészségügyi és megélhetési károk (halászat, idegenforgalom). **Megoldás:** helyi szinten ellenőrzés, szennyvíztisztítók, a gyár felelősségre vonása, civil figyelés; ha a folyó határokon átér (regionális szint), a vízgyűjtő országainak együttműködése; az egyén szerepe: a szennyezés jelzése, a takarékos vízhasználat és a környezetbarát termékek választása.',
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli:** hír- vagy képrészlet alapján a probléma felismerése, a szervezetek és tevékenységeik párosítása (FAO, WWF, UNESCO), védett területek és világörökségi helyszínek felismerése térképen vagy képen, a fenntarthatóság fogalma. **Szóbeli:** „A fenntartható gazdaság”, „Az egyén társadalmi szerepvállalásának lehetőségei, a tevékeny közreműködés példái a környezet védelme érdekében”, nemzeti park vagy világörökségi helyszín bemutatása (a tételsor a lakóhelyhez közeli értékekre is kitérhet).',
        },
        {
          kind: 'warning',
          text: 'A „fenntarthatóság” nem azt jelenti, hogy semmit sem szabad használni, és nem csak természetvédelem: három pillére van (környezeti, gazdasági, társadalmi). A WWF nem állami szervezet, az UNESCO nem a természetvédelmi alap, a FAO pedig nem környezetvédelmi, hanem élelmezési és mezőgazdasági szervezet.',
        },
        {
          kind: 'tip',
          text: 'Tételvázlat az egyén szerepéről: (1) miért számít az egyén; (2) lehetőségek: fogyasztás, energia, hulladék, közlekedés, önkéntesség; (3) a helyi szerveződések szerepe; (4) a nemzeti és nemzetközi szint; (5) korlátok (költség, tudatosság, infrastruktúra) és példa a saját környezetedből.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz („Értelmezd a fenntarthatóság fogalmát!”): „A fenntarthatóság azt jelenti, hogy ma úgy elégítjük ki a szükségleteinket, hogy a jövő nemzedékek is megtehessék ugyanezt. Három eleme a környezeti, a gazdasági és a társadalmi szempont. Eléréséhez takarékos erőforrás-használat, megújuló energia, hulladékcsökkentés és nemzetközi összefogás kell.”',
        },
      ],
      topicMatch: ['környezetvédelem', 'környezeti problémák'],
      quiz: [
        {
          question: 'Mi a FAO?',
          options: [
            'természetvédelmi alap',
            'az ENSZ élelmezési és mezőgazdasági szervezete',
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
            'a jelen szükségleteinek kielégítése a jövő nemzedékek lehetőségeinek veszélyeztetése nélkül',
            'a fogyasztás teljes megszüntetése',
            'csak a természetvédelem',
          ],
          answer: 1,
          explanation:
            'Ez a fenntartható fejlődés általánosan elfogadott meghatározása (Brundtland-jelentés, 1987).',
        },
        {
          question: 'Melyik a világörökségi helyszín Magyarországon?',
          options: ['Kékes', 'a Hortobágy', 'a Velencei-tó', 'a Mecsek'],
          answer: 1,
          explanation: 'A Hortobágy az UNESCO világörökségi listáján szerepel.',
        },
        {
          question: 'Melyik szervezet civil természetvédelmi szervezet?',
          options: ['WWF', 'FAO', 'UNESCO', 'ENSZ Közgyűlés'],
          answer: 0,
          explanation: 'A WWF (Természetvédelmi Világalap) nem kormányközi, hanem civil szervezet.',
        },
        {
          question: 'Melyik a regionális szintű környezetvédelmi összefogás példája?',
          options: [
            'egy osztály szemétszedése',
            'a Duna vízgyűjtőjének országai közös vízvédelmi együttműködése',
            'egy háztartás szelektív hulladékgyűjtése',
            'egy ember kerékpározása',
          ],
          answer: 1,
          explanation:
            'A regionális szint több szomszédos ország közös természeti rendszerének védelmét jelenti.',
        },
      ],
      sources: [
        { label: 'ENSZ: 2030-as Fenntartható Fejlődési Célok', url: 'https://sdgs.un.org/goals' },
        { label: 'UNESCO Világörökség', url: 'https://whc.unesco.org/' },
        { label: 'Wikipédia: Fenntartható fejlődés', url: wiki('Fenntartható fejlődés') },
      ],
    },
    {
      id: 'egyezmenyek-bekefenntartas-humanitarius',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Nemzetközi egyezmények, háborúk és humanitárius szervezetek',
      level: 'emelt',
      requirement: {
        emelt:
          '10.5: Ismertesse források alapján a környezet védelmében született fő nemzetközi egyezményeket, irányelveket, célkitűzéseket, mutassa be a megvalósítás eredményeit és nehézségeit. Mutassa be a háborúk, fegyveres konfliktusok földrajzi sajátosságokra visszavezethető okait és következményeit. Ismertesse a legfontosabb nemzetközi humanitárius szervezetek fő tevékenységeit.',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Montreali Jegyzőkönyv** (1987): az ózonkárosító anyagok kivonása, nagy siker. **Riói egyezmények** (1992): éghajlat-változási keretegyezmény és biológiai sokféleség. **Kiotói Jegyzőkönyv** (1997): a fejlett országok kibocsátás-csökkentési vállalásai. **Párizsi egyezmény** (2015): a melegedés jóval 2 °C alatt tartása, törekvés 1,5 °C-ra, minden ország vállalásokkal.',
            'Az **EU Natura 2000** hálózata a madárvédelmi (1979) és az élőhelyvédelmi (1992) irányelven alapul. További védelmi formák: természetvédelmi terület, tájvédelmi körzet, **bioszféra-rezervátum**, **natúrpark**.',
            'A **nehézség**: önkéntes vállalások, különböző érdekek (fejlett és fejlődő országok), gazdasági költségek, nehéz ellenőrzés. Az eredmény vegyes: az ózon területén sikeres, az éghajlat területén a kibocsátás még nem csökken kellőképpen.',
            '**Háborúk és konfliktusok** földrajzi okai: erőforrások (olaj, víz, termőföld), határok, stratégiai fekvés, etnikai és vallási határvonalak. Következmények: menekültek, éhínség, pusztítás. **Humanitárius szervezetek**: Nemzetközi Vöröskereszt, Máltai Szeretetszolgálat és mások.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A fő nemzetközi környezetvédelmi egyezmények' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1972',
              text: 'Stockholmi ENSZ-konferencia az emberi környezetről: a környezetvédelem a nemzetközi politika részévé vált, létrejött az ENSZ környezetvédelmi programja (UNEP).',
            },
            {
              date: '1987',
              text: 'Montreali Jegyzőkönyv az ózonréteget lebontó anyagokról (hatályba lépett 1989-ben); ugyanebben az évben jelent meg a „Közös jövőnk” jelentés.',
            },
            {
              date: '1992',
              text: 'Riói „Föld-csúcs” (ENSZ Környezet és Fejlődés Konferencia): az éghajlat-változási keretegyezmény, a biológiai sokféleségről szóló egyezmény és a fenntartható fejlődés cselekvési programja (Agenda 21).',
            },
            { date: '1997', text: 'Kiotói Jegyzőkönyv elfogadása (hatályba lépett 2005-ben).' },
            {
              date: '2015',
              text: 'Párizsi egyezmény (a felek konferenciáján 2015 decemberében fogadták el, 2016 novemberében lépett hatályba); ugyanebben az évben az ENSZ elfogadta a 2030-as fenntartható fejlődési célokat.',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Éghajlati egyezmények: Kiotó és Párizs',
          columns: ['Kiotói Jegyzőkönyv (1997)', 'Párizsi egyezmény (2015)'],
          rows: [
            {
              label: 'Kikre vonatkozik?',
              cells: [
                'a fejlett országokra kötelező vállalások; a fejlődő országoknak (például Kínának, Indiának) nem volt számszerű vállalásuk',
                'szinte minden országra: mindenki saját, nemzeti vállalást (hozzájárulást) tesz',
              ],
            },
            {
              label: 'Cél',
              cells: [
                'a fejlett országok üvegházgáz-kibocsátásának csökkentése az 1990-es szint alatt (az első időszak 2008–2012)',
                'a globális felmelegedés jóval 2 °C alatt tartása az ipari forradalom előtti szinthez képest, törekvés az 1,5 °C-ra; a kibocsátási csúcs mielőbbi elérése és a klímasemlegesség a század második felében',
              ],
            },
            {
              label: 'Eszköz',
              cells: [
                'kötelező, számszerű vállalások, kibocsátás-kereskedelem',
                'a felek saját vállalásai, amelyeket öt évente felül kell vizsgálni és szigorítani; átláthatósági szabályok; támogatás a fejlődő országoknak',
              ],
            },
            {
              label: 'Nehézség',
              cells: [
                'az USA nem ratifikálta, a nagy kibocsátó feltörekvők nem vállaltak, az egyezmény nem fedte le a kibocsátás nagy részét',
                'a vállalások nem elegendők a célhoz, nem szankcionálhatók, a vállalások politikai változásoktól függnek',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Eredmények és nehézségek.** Az **ózon** esetében a jegyzőkönyv sikeres volt, mert létezett helyettesítő technológia, a költség viszonylag kicsi volt, az ellenőrzés egyszerű. Az **éghajlatnál** a kibocsátás az egész gazdaságot érinti (energia, közlekedés, mezőgazdaság), ezért nagyobb az ellenállás. A fő nehézségek: a **közös, de eltérő felelősség** vitája (a fejlett országok történelmileg többet bocsátottak ki, a fejlődők gazdasági fejlődési joga), a vállalások **önkéntes** jellege, az **ellenőrzés** és a **finanszírozás**, a **politikai ciklusok** (egyes országok kilépnek, majd visszalépnek), a gazdasági érdekek (fosszilis ipar). Az ENSZ környezetvédelmi programjának jelentései szerint a vállalt és a szükséges kibocsátás-csökkentés között még jelentős különbség („kibocsátási rés”) van. Az EU saját politikája (Európai Zöld Megállapodás) a klímasemlegességet 2050-re tűzi ki.',
        },
        { kind: 'heading', text: 'Területvédelem: Natura 2000 és védelmi formák' },
        { kind: 'heading', text: 'Védett területek' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Natura 2000',
              text: 'az EU közös természetvédelmi hálózata. Az 1979-es madárvédelmi és az 1992-es élőhelyvédelmi irányelv alapján kijelölt területek; célja a veszélyeztetett fajok és élőhelyek megőrzése, a gazdálkodás természetkímélő formáival együtt. Magyarországon a terület mintegy ötöde Natura 2000-es.',
            },
            {
              term: 'Természetvédelmi terület',
              text: 'kisebb kiterjedésű, kiemelt értékű, szigorúbban védett terület.',
            },
            {
              term: 'Tájvédelmi körzet',
              text: 'nagyobb, természeti és kultúrtörténeti értékekben gazdag táj, ahol a hagyományos tájhasználat is megmarad.',
            },
            {
              term: 'Nemzeti park',
              text: 'nagy kiterjedésű, kiemelt természeti értékű terület, amelyben a bemutatás és a turizmus is szerepet kap.',
            },
            {
              term: 'Bioszféra-rezervátum',
              text: 'az UNESCO „Az ember és a bioszféra” programjának területe: védelem, fenntartható gazdálkodás és kutatás együtt (Magyarországon például a Hortobágy és az Aggteleki-karszt).',
            },
            {
              term: 'Natúrpark',
              text: 'a természeti értékeket és a helyi gazdasági, kulturális fejlesztést összekötő védett táj: a védelem és a vidékfejlesztés egymást segíti.',
            },
          ],
        },
        {
          kind: 'heading',
          text: 'Háborúk és fegyveres konfliktusok földrajzi okai és következményei',
        },
        { kind: 'heading', text: 'Földrajzi okok' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Természeti erőforrások',
              text: 'kőolaj és földgáz (Perzsa-öböl térsége, az 1990–91-es öbölháború), víz (a Jordán, a Nílus, az Eufrátesz és a Tigris vizének megosztása), termőföld, ásványkincsek (például a konfliktusásványok Közép-Afrikában).',
            },
            {
              term: 'Határok és etnikai-vallási tagoltság',
              text: 'a gyarmati korszakban meghúzott, a népek elhelyezkedését nem követő határok (Afrika, Közel-Kelet); egy területen élő több nép vagy vallás közti ellentét.',
            },
            {
              term: 'Stratégiai fekvés',
              text: 'tengeri szorosok (Hormuzi-szoros), kikötők, vezetékek, hegyi átjárók feletti ellenőrzés.',
            },
            {
              term: 'Környezeti stressz',
              text: 'aszály, termőföld- és vízhiány, elsivatagosodás: tovább élezheti a feszültségeket (például a Száhel-övezetben és Darfúrban).',
            },
          ],
        },
        {
          kind: 'text',
          text: '**Következmények:** halottak és sebesültek, **menekültek és belső lakóhelyüket elhagyók** (több tízmillió ember van kényszerűen lakóhelyén kívül), éhínség (a földek és a kereskedelem elpusztul), egészségügyi rendszerek összeomlása, az infrastruktúra pusztulása, aknamezők, **környezeti károk** (az 1991-es kuvaiti olajkutak égetése, a talaj- és vízszennyezés, az élőhelyek pusztulása), a gazdaság visszaesése, a szomszédos országok terhelése. A konfliktusok éhínséget okozhatnak, az éhínség pedig újabb konfliktusok forrása lehet (ördögi kör).',
        },
        { kind: 'heading', text: 'Nemzetközi humanitárius szervezetek' },
        { kind: 'heading', text: 'Szervezetek és fő tevékenységeik' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Nemzetközi Vöröskereszt (és Vörös Félhold)',
              text: 'Henry Dunant kezdeményezésére jött létre (1863, Genf); háborús sebesültek és foglyok védelme, ellátása, az eltűntek felkutatása, katasztrófa- és vészhelyzeti segítség, a genfi egyezmények (a háborús emberi jogok) védelme',
            },
            {
              term: 'Máltai Szeretetszolgálat',
              text: 'magyar karitatív szervezet (1989), a Szuverén Máltai Lovagrend hagyományaihoz kapcsolódik; szociális és egészségügyi segítség, hajléktalanok, idősek, gyerekek támogatása, katasztrófa- és menekültsegély',
            },
            {
              term: 'ENSZ-szervezetek',
              text: 'pl. az ENSZ Menekültügyi Főbiztosság (menekültek védelme), az Élelmezési Világprogram (élelmiszersegély), a UNICEF (gyermekek védelme), a WHO (egészségügy)',
            },
            {
              term: 'Orvosok Határok Nélkül és más civil szervezetek',
              text: 'orvosi segítség háborús és járványos térségekben',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A humanitárius segítség alapelvei: **emberség**, **pártatlanság**, **semlegesség**, **függetlenség** – a segélyt a rászorulónak adják, nem választanak oldalt a konfliktusban. A nehézségek: a harcoló felek korlátozzák a hozzáférést, a segélyszállítók is veszélyben vannak, a források mindig kevesebbek az igénynél, a segélyek hosszú távon nem pótolják a fejlesztést és a béke megteremtését.',
        },
        {
          kind: 'example',
          title: 'Forráselemzés: hogyan értékeld a klíma-egyezményeket?',
          problem:
            'Egy szövegrészlet szerint „a Párizsi egyezmény minden aláíró országot saját vállalásra kötelez, de a vállalások együtt még nem elegendők a 2 °C-os cél eléréséhez”. Mit olvashatsz ki belőle, és mi a véleményed?',
          solution:
            '**Kiolvasható:** az egyezmény általános (minden ország részt vesz), a vállalások önkéntesek és nemzeti szinten határozódnak meg, a jelenlegi vállalások összességében nem elég ambiciózusak. **Vélemény (indokolva):** a kereten belül az ellenőrzés és az öt évenkénti felülvizsgálat teszi lehetővé a szigorítást, de a hatás attól függ, hogy az országok betartják-e és szigorítják-e a vállalásaikat; ezért fontos a nyomásgyakorlás, a finanszírozás és a technológiai együttműködés. Mindig hivatkozz a szövegre, és indokolj.',
        },
      ],
      exam: [
        {
          kind: 'text',
          text: '**Írásbeli (emelt):** forráselemzés egyezményekről (szövegrészlet, idősor, a kibocsátások grafikonja), egyezmények és évszámok párosítása, védett területkategóriák megkülönböztetése, térképes elemzés a konfliktusövezetekről (például a Közel-Kelet, a Száhel-övezet), érvelés a nemzetközi együttműködés nehézségeiről; a humanitárius szervezetek tevékenységeinek párosítása.',
        },
        {
          kind: 'warning',
          text: 'A Kiotói Jegyzőkönyv és a párizsi egyezmény nem azonos: Kiotó a fejlett országok kötelező vállalásait tartalmazta, Párizs az országok önkéntes, nemzeti vállalásain alapul. A Montreali Jegyzőkönyv az ózonról, nem az éghajlatról szól. A riói egyezmény (1992) két fő témája az éghajlat és a biodiverzitás.',
        },
        {
          kind: 'tip',
          text: 'Egyezmény-összehasonlításnál használd a szempontokat: év, téma, kire vonatkozik, cél, eszköz, eredmény, nehézség. A „nehézség” szempontnál említs politikai, gazdasági és ellenőrzési akadályt is.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz („Miért nehéz globális környezeti megállapodást kötni?”): „Mert az országok érdekei eltérnek: a fejlett országok többet bocsátottak ki, a fejlődők fejlődési jogot követelnek; a vállalások sokszor önkéntesek és nehezen ellenőrizhetők; a kibocsátás-csökkentés költséges és a fosszilis iparral ütközik. Az ózon esetében azért sikerült, mert volt olcsó helyettesítő anyag és egyszerű az ellenőrzés.”',
        },
      ],
      topicMatch: ['környezeti és globális problémák', 'globális kihívások'],
      quiz: [
        {
          question: 'Melyik egyezmény szólt az ózonréteget lebontó anyagok kivonásáról?',
          options: [
            'Kiotói Jegyzőkönyv',
            'párizsi egyezmény',
            'Montreali Jegyzőkönyv',
            'Natura 2000 irányelv',
          ],
          answer: 2,
          explanation: 'A Montreali Jegyzőkönyvet 1987-ben fogadták el.',
          emelt: true,
        },
        {
          question: 'Mi a párizsi egyezmény célja?',
          options: [
            'a freonok kivonása',
            'a globális melegedés jóval 2 °C alatt tartása, törekvés 1,5 °C-ra',
            'a nemzeti parkok számának növelése',
            'a háborúk megszüntetése',
          ],
          answer: 1,
          explanation: 'Az egyezményt 2015-ben fogadták el; a felek saját vállalásokat tesznek.',
          emelt: true,
        },
        {
          question: 'Miben különbözik a Kiotói Jegyzőkönyv a párizsi egyezménytől?',
          options: [
            'Kiotó csak a fejlett országok kötelező vállalásait tartalmazta, Párizs szinte minden ország saját vállalására épül',
            'Kiotó későbbi, mint Párizs',
            'Párizs csak az ózonról szól',
            'nincs különbség',
          ],
          answer: 0,
          explanation:
            'Kiotó (1997) a fejlett országok kötelező vállalásairól, Párizs (2015) mindenki nemzeti vállalásairól szól.',
          emelt: true,
        },
        {
          question: 'Melyik a háborúk földrajzi okai közé tartozó tényező?',
          options: [
            'a nemzeti parkok száma',
            'az olaj- és vízkészletek feletti vita, a stratégiai fekvés, a mesterséges határok',
            'a hulladékgyűjtés',
            'a szelektív gyűjtés',
          ],
          answer: 1,
          explanation: 'Az erőforrások, a határok és a stratégiai fekvés gyakran konfliktusforrás.',
          emelt: true,
        },
        {
          question: 'Melyik szervezet tevékenysége a háborús sebesültek és foglyok védelme?',
          options: ['WWF', 'Nemzetközi Vöröskereszt', 'FAO', 'UNESCO'],
          answer: 1,
          explanation: 'A Nemzetközi Vöröskereszt a háborús áldozatok védelmére jött létre.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'UNFCCC: A párizsi egyezmény',
          url: 'https://unfccc.int/process-and-meetings/the-paris-agreement',
        },
        { label: 'Wikipédia: Kiotói Jegyzőkönyv', url: wiki('Kiotói Jegyzőkönyv') },
        { label: 'Wikipédia: Nemzetközi Vöröskereszt', url: wiki('Vöröskereszt') },
      ],
    },
  ],
};

export default unit;
