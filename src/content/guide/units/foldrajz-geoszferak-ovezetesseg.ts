import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 4 (A geoszférák kölcsönhatásai, a földrajzi övezetesség), 4.1–4.8. */
const unit: GuideUnit = {
  id: 'geoszferak-ovezetesseg',
  subject: 'foldrajz',
  order: 40,
  title: 'A geoszférák kölcsönhatásai, a földrajzi övezetesség',
  requirementRef:
    '4.1 A földfelszín formálódása; 4.2 A külső erők felszínformáló tevékenysége; 4.3 A talaj; 4.4 A geoszférák közötti kapcsolatok; 4.5 A szoláris és a valódi éghajlati övezetek; 4.6 A vízszintes földrajzi övezetesség; 4.7 A függőleges földrajzi övezetesség; 4.8 A geoszférák fejlődése a múltban, földtörténet',
  intro:
    'Miért más a talaj, a növényzet és a gazdálkodás az Amazonas mentén, a Szahara szélén és Szibériában? Hogyan formálja a felszínt a szél, a víz, a jég és a mészkő oldódása? Ez a témakör a belső és külső erőktől a talajon és az övezetességen át a földtörténetig mutatja meg, hogyan függ össze minden geoszféra.',
  requirementSource:
    'A követelmények, a fogalmak és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (4.1–4.8). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'aprózódás',
        'mállás',
        'lepusztulás',
        'szállítás',
        'felhalmozás',
        'külső és belső erők',
        'mélyföld',
        'alföld',
        'fennsík',
        'dombság',
        'közép- és magashegység',
        'hátság',
        'völgy',
        'medence',
        'tanúhegy',
        'háthegység',
        'lánchegység',
        'homokfodor',
        'homokbucka (dűne)',
        'hullámmorajlás',
        'hullámtörés',
        'épülő part',
        'turzás',
        'lagúna',
        'parti dűne',
        'pusztuló part',
        'tagolt és tagolatlan part',
        'deltatorkolat',
        'tölcsértorkolat',
        'a folyók munkavégző képessége',
        'sodorvonal',
        'bevágódó, oldalazó és feltöltő szakaszjelleg',
        'hordalék',
        'holtág',
        'hordalékkúp',
        'zátony',
        'sziget',
        'V alakú völgy',
        'hóhatár',
        'csonthó (firn)',
        'gleccserjég',
        'gleccser',
        'jégtakaró',
        'moréna',
        'lavina',
        'U alakú völgy (teknővölgy)',
        'fenék- és végmoréna',
        'morénasánc',
        'gleccserpatak',
        'tóhátság',
        'fjord',
        '„örök fagy” (permafroszt)',
        'víznyelő',
        'dolina (töbör)',
        'karrmező',
        'cseppkő',
        'karsztbarlang',
        'barlangi patak',
        'karsztforrás',
        'talaj',
        'anyakőzet (alapkőzet)',
        'humusz',
        'talajszemcse',
        'talajlevegő',
        'termőképesség',
        'zonális és azonális talaj',
        'laterittalaj',
        'vörös- és sárgaföldek',
        'sivatagi talaj',
        'mezőségi talaj',
        'barna erdőtalaj',
        'szürke erdőtalaj (podzol)',
        'tundratalaj',
        'szikesedés',
        'szikes talajok',
        'talajpusztulás (talajerózió)',
        'talajszennyezés',
        'éghajlati övezetesség',
        'szoláris és valódi éghajlati övezetek',
        'földrajzi övezetesség',
        'vízszintes földrajzi övezetesség',
        'függőleges földrajzi övezetesség',
        'övezet',
        'öv',
        'vidék',
        'terület',
        'forró övezet',
        'egyenlítői öv',
        'egyenlítői éghajlat',
        'átmeneti öv',
        'szavannaéghajlat',
        'nedves és száraz szavanna',
        'térítői öv',
        'forró övezeti (trópusi) sivatagi éghajlat',
        'monszunvidék',
        'forró övezeti (trópusi) monszunéghajlat',
        'trópusi esőerdő',
        'szavanna',
        'monszunerdő (dzsungel)',
        'oázis',
        'jövevényfolyó',
        'ültetvényes gazdálkodás',
        'égetéses-talajváltó gazdálkodás',
        'oázisgazdálkodás',
        'monszungazdálkodás',
        'nomád pásztorkodás (vándorló állattenyésztés)',
        'erdőirtás',
        'felégetés',
        'túllegeltetés',
        'elsivatagosodás',
        'mérsékelt övezet',
        'meleg mérsékelt öv',
        'monszunterület',
        'mérsékelt övezeti monszunéghajlat',
        'mediterrán terület',
        'mediterrán éghajlat',
        'keménylombú erdő',
        'babérlombú erdő',
        'mediterrán gazdálkodás',
        'valódi mérsékelt öv',
        'óceáni terület',
        'óceáni éghajlat',
        'mérsékelten szárazföldi terület',
        'nedves kontinentális éghajlat',
        'szárazföldi terület',
        'száraz kontinentális éghajlat',
        'szélsőségesen szárazföldi terület',
        'mérsékelt övezeti sivatagi éghajlat',
        'lombhullató erdő',
        'erdős puszta',
        'füves puszta (füves mezőség)',
        'vegyes gazdálkodás',
        'füves területek feltörése',
        'hideg mérsékelt öv',
        'tajgaéghajlat',
        'tajga',
        'hideg övezet',
        'sarkköri öv',
        'tundraéghajlat',
        'tundra',
        'sarkvidéki öv',
        'állandóan fagyos éghajlat',
        'erdőhatár',
        'fahatár',
        'hóhatár',
        'havasi legelő',
        'sziklahavas',
        'havasi pásztorkodás',
        'éghajlatválasztó hegység',
        'a földtörténet időegységei (idő, időszak, kor)',
        'ős-, elő-, ó-, közép- és újidő',
        'harmad- és negyedidőszak',
        'jégkor (pleisztocén)',
        'jelenkor (holocén)',
        'őslégkör (elsődleges légkör)',
        'ősóceán',
        'ősföld (ősmasszívum)',
        'kaledóniai, variszkuszi, eurázsiai és pacifikus hegységképződés',
      ],
      emelt: [
        'kémiai és biológiai mállás',
        'tömegmozgások (csuszamlás, suvadás, omlás, folyás)',
        'hágó',
        'szoros',
        'rekultiváció',
        'szélkifúvás (defláció)',
        'szélmarás',
        'barkán',
        'parabolabucka',
        'deflációs tanúhegy',
        'gombaszikla (kőgomba)',
        'szélbarázda',
        'maradékgerinc',
        'felszíni leöblítés',
        'vonalas erózió',
        'abrázió',
        'hullámmarás',
        'abráziós fülke',
        'abráziós terasz',
        'abráziós torony',
        'abráziós kapu',
        'folyóterasz',
        'szurdok',
        'kanyon',
        'kárfülke',
        'vásott szikla',
        'oldal- és középmoréna',
        'morénasíkság',
        'ősfolyamvölgy',
        'vándorkő',
        'polje',
        'zsomboly',
        'forrásmészkő (édesvízi mészkő)',
        'talajszintek (A-, B-, C-szint)',
        'kilúgozási szint',
        'felhalmozódási szint',
        'terra rossa',
        'láptalaj',
        'öntéstalaj',
        'rendzina',
        'váztalajok',
        'indikátor szerep',
        'galériaerdő',
        'erdős, cserjés és füves szavanna',
        'macchia',
        'pampa',
        'préri',
        'sztyepp',
        'tőzegmohaláp',
        'viszonylagos (relatív) és tényleges (abszolút) kormeghatározás',
        'ősmaradvány',
        'vezérkövület',
        'paleomágnesség',
        'másodlagos légkör',
        'mai légkör',
        'őskontinens',
        'kambrium',
        'ordovícium',
        'szilur',
        'devon',
        'karbon',
        'perm',
        'triász',
        'jura',
        'kréta',
        'paleocén',
        'eocén',
        'oligocén',
        'miocén',
        'pliocén',
        'jégkorszak (glaciális)',
        'jégkorszakköz (interglaciális)',
        'Pangea',
        'Panthalassza',
        'Laurázsia',
        'Gondwana',
        'Tethys',
      ],
    },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'felszinformalas-belso-kulso-erok',
      subject: 'foldrajz',
      unitId: 'geoszferak-ovezetesseg',
      title: 'A felszín formálódása: belső és külső erők, szél, víz, jég, karszt',
      level: 'kozep',
      requirement: {
        kozep:
          'A belső és a külső erők (köztük az ember) szerepe a felszínformálódásban; a belső erők megnyilvánulásai a kőzetlemezek mozgásával összekapcsolva; felszínformák felismerése és példák; a szél, a csapadék, a tengervíz, a folyók és a jég felszínformáló munkája, a keletkezett formák felismerése (pusztító vagy építő tevékenység); a hóhatár; a karsztosodás folyamata és a fő karsztformák.',
        emelt:
          'A rekultiváció lehetőségei; a külső erők által létrehozott formák jellemzése és kialakulása; a domborzat és a folyók szakaszjellegének összefüggése; a mészkő oldódásának kémiai folyamata.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A felszínt két erőcsoport formálja: a **belső erők** (a Föld belső energiája: lemezmozgás, hegységképződés, vulkanizmus, földrengés) **építenek és szabdalnak**, a **külső erők** (a Nap energiája és a gravitáció: szél, víz, jég) **lepusztítanak, szállítanak és felhalmoznak**.',
            'A külső erők munkája mindig négy lépés: **aprózódás és mállás, lepusztulás, szállítás, felhalmozás**. Ami lepusztul, valahol felhalmozódik.',
            '**Szél**: száraz, kevés növényzetű tájakon dolgozik (homokbuckák, gombaszikla, lösz).',
            '**Víz**: csapadék (leöblítés, vízmosás), folyó (bevágódó, oldalazó, feltöltő szakasz) és tenger (pusztuló és épülő partok).',
            '**Jég**: a hóhatár felett keletkező gleccser U alakú völgyet és morénákat hagy. **Karszt**: a mészkő oldódik, így dolinák, víznyelők, barlangok jönnek létre.',
          ],
        },
        {
          kind: 'compare',
          title: 'Belső és külső erők',
          columns: ['Belső erők', 'Külső erők'],
          rows: [
            {
              label: 'Energiaforrás',
              cells: ['a Föld belső hője, a lemezmozgás', 'a Nap sugárzása és a gravitáció'],
            },
            {
              label: 'Hatás',
              cells: [
                'a felszín egyenetlenségeit létrehozza (hegyek, árkok, vulkánok)',
                'a felszínt lepusztítja, kiegyenlíti, a hordalékot felhalmozza',
              ],
            },
            {
              label: 'Példa',
              cells: [
                'gyűrt hegység, vulkán, földrengés, vetődés',
                'folyóvölgy, homokbucka, gleccservölgy, karsztbarlang',
              ],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Belső erők és kőzetlemezek' },
        {
          kind: 'text',
          text: 'A belső erők megnyilvánulásai a **kőzetlemezek mozgásához** kötődnek. Ahol két lemez **ütközik**, ott gyűrt **lánchegység** (Alpok, Himalája, Andok) vagy vulkáni öv keletkezik. Ahol a lemezek **távolodnak**, ott árok és vulkanizmus jön létre (óceánközépi hátság, kelet-afrikai árok). Ahol a lemezek **elcsúsznak** egymás mellett, ott földrengések kísérik a mozgást. A vetődésekkel rögök emelkednek ki, süllyedékek (medencék) jönnek létre.',
        },
        { kind: 'heading', text: 'A felszínformák fajtái' },
        {
          kind: 'compare',
          title: 'Felszínformák és hazai, külföldi példák',
          columns: ['Forma', 'Jellemző, példa'],
          rows: [
            {
              label: 'Mélyföld, alföld',
              cells: [
                'kis tengerszint feletti magasságú, alig tagolt síkság',
                'Alföld, Kisalföld, Germán-alföld',
              ],
            },
            {
              label: 'Hátság',
              cells: [
                'a síkságból kissé kiemelkedő, enyhén hullámos terület',
                'a Duna–Tisza közi hátság',
              ],
            },
            {
              label: 'Dombság',
              cells: ['alacsony, lekerekített formák', 'Zselic, Tolnai-dombság'],
            },
            {
              label: 'Középhegység, magashegység',
              cells: [
                'a középhegység lekerekítettebb, a magashegység (kb. 1500 m felett) éles gerincű, jég által formált',
                'Mátra, Bakony, Bükk; Alpok, Kárpátok magashegységi része',
              ],
            },
            {
              label: 'Lánchegység',
              cells: [
                'ütköző lemezek gyűrődésével keletkezett, hosszan elnyúló hegység',
                'Alpok, Himalája, Andok',
              ],
            },
            {
              label: 'Háthegység',
              cells: [
                'a nagy hegység előtt húzódó, alacsonyabb hegységsor',
                'a Himalája előtti Siwalik-hegység',
              ],
            },
            {
              label: 'Fennsík',
              cells: [
                'magasan fekvő, többé-kevésbé sík felszín, mély völgyekkel szabdalva',
                'Tibeti-fennsík, Bükk-fennsík (hazai karsztfennsík)',
              ],
            },
            {
              label: 'Medence, völgy',
              cells: [
                'hegységgel körülvett süllyedék, illetve a víz vájta árok',
                'Kárpát-medence, Kongó-medence',
              ],
            },
            {
              label: 'Tanúhegy',
              cells: [
                'a környezeténél magasabb, a lepusztulásnak ellenálló maradványhegy',
                'Badacsony, Somló, Ság',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Hágó**: a hegységben a gerinc legmélyebb, járható átjárója. **Szoros**: a folyó által átvágott, keskeny völgyszakasz. **Tömegmozgások**: a lejtőn a gravitáció hatására lezajló kőzet- és talajmozgások. Az **omlás** gyors, sziklafalról leszakadó anyag. A **csuszamlás** és a **suvadás** összefüggő tömeg lassabb lecsúszása (a Duna menti löszfalakon gyakori). A **folyás** vízzel átitatott, híg anyag lejtőn lefelé mozgása. A **mállás** lehet fizikai (aprózódás), **kémiai** (az ásványok átalakulnak) és **biológiai** (gyökerek, élőlények bontják).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Rekultiváció**: az ember által károsított terület (külszíni bánya, meddőhányó, szeméttelep) helyreállítása újra hasznosítható állapotba: feltöltés, talajréteg terítése, erdősítés, tó vagy rekreációs terület kialakítása. Példa: az egykori külszíni bányák helyén létrehozott tavak és erdők.',
        },
        { kind: 'heading', text: 'A külső erők négy lépése' },
        {
          kind: 'text',
          text: '1. **Aprózódás és mállás**: a kőzet szétesik (hőmérséklet-ingadozás, fagy, víz, kémiai hatás). 2. **Lepusztulás**: a málladék elmozdul az eredeti helyéről. 3. **Szállítás**: szél, víz vagy jég viszi. 4. **Felhalmozás** (lerakódás): az energia csökkenésével a hordalék leülepedik. A **pusztító** tevékenység elviszi az anyagot, az **építő** tevékenység lerakja. Egy-egy tájon a két folyamat egymás mellett működik.',
        },
        { kind: 'heading', text: 'Szél' },
        {
          kind: 'text',
          text: 'A szél munkáját a **szélsebesség**, a **növényzet hiánya**, a laza, száraz felszín és a hőmérséklet-ingadozás segíti. Ezért sivatagokban, félsivatagokban, tengerparton és a folyók száraz hordalékán erős. **Pusztító formái**: gombaszikla, szélbarázda. **Építő formái**: **homokfodor** (kicsi hullámok), **homokbucka (dűne)**. A finom por messzire jut, és **lösz**ként rakódik le (Kárpát-medence, Észak-Kína).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Szélkifúvás (defláció)**: a szél elfújja a laza, finom anyagot (mélyedések, deflációs tanúhegy, maradékgerinc). **Szélmarás**: a szél által szállított homok csiszolja a sziklákat (gombaszikla vagy kőgomba, szélbarázda, vásott szikla). A buckák alakja a szélhez kötődik: a **barkán** sarló alakú, szarvai a szél irányába mutatnak. A **parabolabucka** szárnyait a növényzet rögzíti, ezek a szél felé mutatnak.',
        },
        {
          kind: 'text',
          text: '**Gazdasági következmények**: a szél elhordja a termőtalajt (szélerózió), a homok betemeti a földeket, utakat. A védekezés **szélvédő erdősáv**, talajtakarás, a füves területek megóvása.',
        },
        { kind: 'heading', text: 'Csapadék és folyók' },
        {
          kind: 'text',
          text: 'A csapadék felszínformáló hatása függ a **csapadék mennyiségétől és intenzitásától**, a **lejtésszögtől**, a kőzet ellenálló képességétől és a **növényborítottságtól**. Nyílt, növényzet nélküli lejtőn a lezúduló eső lemossa a talajt. A csapadék **gazdasági következménye** a talajpusztulás, az elöntött földek, a károsodott utak és épületek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Felszíni leöblítés**: a víz vékony rétegben, nagy felületen viszi a finom anyagot. **Vonalas erózió**: a víz összegyűlik, és árkot, vízmosást, szakadékot váj.',
        },
        {
          kind: 'text',
          text: 'A **folyó munkavégző képességét** a **vízhozam** (mennyi víz folyik át), az **esés** (lejtés), így a sebesség, valamint a szállított hordalék mennyisége határozza meg. A folyó leggyorsabb vonala a **sodorvonal**; a kanyarulatban a külső ívben erősebb, a belső ívben gyengébb a víz. A folyó **szakaszjellege** a lejtéssel változik:',
        },
        {
          kind: 'compare',
          title: 'A folyó három szakaszjellege',
          columns: ['Szakasz', 'Jellemzők és formák'],
          rows: [
            {
              label: 'Bevágódó (felső)',
              cells: [
                'nagy esés, gyors víz, a folyó mélyíti a medrét',
                'V alakú völgy, vízesés, zuhatag',
              ],
            },
            {
              label: 'Oldalazó (középső)',
              cells: [
                'kisebb esés, a folyó kanyarog, a külső ívet pusztítja, a belsőt építi',
                'kanyarulat, holtág, zátony, sziget',
              ],
            },
            {
              label: 'Feltöltő (alsó)',
              cells: [
                'kis esés, lassú víz, lerakja a hordalékot',
                'hordalékkúp, ártér, deltatorkolat',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Hordalékkúp** ott keletkezik, ahol a folyó a hegységből a síkságra ér, és hirtelen csökken az esése. A **torkolat** kétféle: **deltatorkolat** (sok hordalék, kis árapály: Duna, Nílus, Mississippi) és **tölcsértorkolat** (az árapály kimossa a hordalékot: Temze, Elba).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Szakaszjelleg és domborzat**: a hegységi szakaszon a folyó **szurdokot** vagy **kanyont** vág (Colorado), mert nagy az esése és sok a kőzet. Ahogy a folyó bevágódik, az egykori völgyfenék feljebb marad lépcsőként: **folyóterasz**. Az **ősfolyamvölgy** egy ma már kis vizű folyó vagy kiszáradt, egykor nagy vízhozamú folyam völgye (a jégkorszak utáni olvadásvizek vájták). A szakaszjelleg térben (forrástól a torkolatig) és időben (az éghajlattal, a tengerszint változásával) is változik.',
        },
        { kind: 'heading', text: 'Tenger' },
        {
          kind: 'text',
          text: 'A **hullámverés** (hullámtörés, hullámmorajlás) a part közelében dolgozik. **Pusztuló part**: a hullámok aláásják a sziklafalat, meredek partfal marad. **Épülő part**: a hullámok homokot, kavicsot raknak le; a **turzás** (homokgát) elzárhatja az öblöt, mögötte **lagúna** keletkezik, a parton **parti dűnék** alakulnak ki. A part lehet **tagolt** (sok öböl, félsziget, sziget, pl. fjordos és rias partok) vagy **tagolatlan** (kevés öböl, egyenes vonal, pl. Afrika nagy része).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A tenger pusztítása az **abrázió** (hullámmarás). Formái: **abráziós fülke** (a part lábánál), **abráziós terasz** (a part előtti, hullámok által lecsiszolt sík felszín), **abráziós torony** és **abráziós kapu** (a part előtt megmaradt szikla, illetve a belőle kialakult nyílás).',
        },
        { kind: 'heading', text: 'Jég' },
        {
          kind: 'text',
          text: 'A **hóhatár** az a magasság, amely felett a hó nyáron sem olvad el teljesen. Magassága a **földrajzi szélességtől** (az Egyenlítőnél magas, kb. 4500–5000 m; a száraz térítői területeken a legmagasabb; a sarkok felé a tengerszintig süllyed) és a **domborzattól** (a csapadékos, a hideg lejtőkön alacsonyabb) függ. A hóhatár fölött a hóból **csonthó (firn)**, majd **gleccserjég** lesz. A hegyvidéki **gleccser** völgyben mozog lefelé, a **jégtakaró** (Grönland, Antarktisz) kontinensnyi jégréteg.',
        },
        {
          kind: 'text',
          text: '**Formák**: **U alakú völgy (teknővölgy)** (a V alakú folyóvölgyet a jég kitágítja), **moréna** (a jég által szállított törmelék: fenékmoréna, végmoréna, **morénasánc**), **gleccserpatak**, **tóhátság** (a jégtakaró morénáinak dombsora tavakkal, pl. a Mazuri-tóhátság), **fjord** (a tenger által elöntött U alakú völgy, pl. Norvégia). Az **„örök fagy” (permafroszt)** az állandóan fagyott talaj a hideg tájakon (Szibéria, Kanada). A **lavina** a hegyoldalról lezúduló hótömeg.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt: **kárfülke** (a gleccserfej tölcsér alakú, jég vájta hegyoldala), **oldal- és középmoréna** (a gleccser szélén, illetve két gleccser összefolyásánál), **morénasíkság**, **vándorkő** (a jég által messzire szállított, idegen kőzetű szikla). A gleccserek **visszahúzódása** a felmelegedés jelzője (környezetváltozást jelző szerep).',
        },
        { kind: 'heading', text: 'Karszt' },
        {
          kind: 'text',
          text: 'A **karsztosodás** repedezett, oldódó kőzeten (mészkő, dolomit) megy végbe. A csapadék szén-dioxidot old fel, a **szénsavas víz** feloldja a mészkövet, a víz a repedésekben lefolyik. Felszíni formák: **karrmező** (éles élű barázdák), **dolina (töbör)** (tölcsér alakú mélyedés), **víznyelő**. Felszín alatt: **karsztbarlang**, **barlangi patak**, **cseppkő** (kiváló mész a barlangban), a szélén **karsztforrás**. Hazai példa: Aggteleki-karszt (Baradla-barlang), Bükk; külföldi: a Dinári-karszt.',
        },
        {
          kind: 'formula',
          tex: '\\mathrm{CaCO_3} + \\mathrm{H_2O} + \\mathrm{CO_2} \\rightleftharpoons \\mathrm{Ca(HCO_3)_2}',
          caption:
            'Emelt: a mészkő oldódása. Az oldódás a hideg, szén-dioxidban gazdag vízben erős (jobbra tolódik); a barlangban a víz CO₂-ot veszít, és a mész kiválik (cseppkő).',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt formák: **polje** (nagy, lapos fenekű karsztmedence), **zsomboly** (függőleges, mély barlangszakasz), **forrásmészkő (édesvízi mészkő)** (a karsztforrás környékén kiváló mész).',
        },
        {
          kind: 'warning',
          text: 'A karszton kevés a felszíni víz, mert a csapadék elszivárog; ezért vízhiány és szennyezés-érzékenység jellemzi (a szennyezés szűrés nélkül jut a karsztvízbe). Turisztikai jelentősége nagy.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Képfelismerés: homokbucka, V és U alakú völgy, kanyarulat és holtág, delta, fjord, dolina. Írd le, **pusztító** vagy **építő** tevékenység hozta létre.',
            'Párosítás: forma és az azt létrehozó erő (szél, folyó, tenger, jég, karszt).',
            'Rövid kifejtés: a folyó három szakasza, mi határozza meg a munkavégző képességét.',
            'Ábraelemzés: a hóhatár magassága a földrajzi szélesség és a domborzat függvényében.',
            'Emelt: karsztosodás kémiai egyenlete, abráziós formák, terasz és szakaszjelleg kapcsolata.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a **deltatorkolatot** és a **tölcsértorkolatot** felcserélni. A deltánál a folyó hordaléka felépül (kis árapály), a tölcsértorkolatnál az árapály elszállítja. Másik hiba: az U alakú völgyet folyóvölgynek tekinteni. A V alakú völgyet a víz, az U alakút a jég vájta.',
        },
        {
          kind: 'tip',
          text: 'Mindig ezt a kérdéssorozatot kövesd: **ki dolgozik** (szél, víz, jég, oldódás)? **Pusztít vagy épít** (kivájt, lerakott)? **Hol** van (felső szakasz, part, hegység)? Ez a három kérdés a legtöbb képfelismerő feladatban elég a helyes válaszhoz.',
        },
        {
          kind: 'example',
          title: 'Hóhatár és szélesség (rövid kifejtés vázlata)',
          problem: 'Magyarázd meg, miért nem a legmagasabb a hóhatár az Egyenlítőnél!',
          solution:
            'Az Egyenlítőnél a legnagyobb a hőmérséklet, de a hóhatár magasságát a **hőmérséklet és a csapadék** együtt szabja meg. Az egyenlítői területen sok a csapadék és sok a felhő, ezért a hóhatár kb. 4500–5000 m-en van. A **térítők** körül száraz a levegő, kevés a hó, erős a napsütés, ezért ott a legmagasabb a hóhatár. A sarkok felé a hőmérséklet csökken, így a hóhatár a tengerszintig süllyed.',
        },
      ],
      topicMatch: [
        'belső erők',
        'külső erők',
        'felszínformálás',
        'felszínformák',
        'vízi és szélformálás',
        'folyók munkája',
        'folyóvízi',
        'karszt',
        'terasz',
      ],
      quiz: [
        {
          question: 'Melyik állítás igaz a belső és külső erőkre?',
          options: [
            'a külső erők hegyeket építenek, a belső erők kiegyenlítenek',
            'a belső erők a felszín egyenetlenségeit hozzák létre, a külső erők lepusztítanak és felhalmoznak',
            'mindkettő csak lepusztít',
            'a külső erők energiaforrása a Föld belső hője',
          ],
          answer: 1,
          explanation:
            'A belső erők (lemezmozgás, vulkanizmus) építik a domborzatot, a Nap energiája és a gravitáció működteti a külső erőket, amelyek lepusztítanak, szállítanak és lerakják az anyagot.',
        },
        {
          question: 'Melyik a folyó középső, oldalazó szakaszának jellemző formája?',
          options: ['V alakú völgy', 'kanyarulat és holtág', 'hordalékkúp', 'vízesés'],
          answer: 1,
          explanation:
            'Az oldalazó szakaszon kisebb az esés, a folyó kanyarog, a kanyarulat lefűződésével holtág keletkezik. A V alakú völgy és a vízesés a bevágódó, a hordalékkúp a feltöltő szakasz jellemzője.',
        },
        {
          question: 'Melyik forma keletkezik a gleccser munkája nyomán?',
          options: ['dolina', 'barkán', 'U alakú völgy', 'abráziós terasz'],
          answer: 2,
          explanation:
            'A gleccser a V alakú folyóvölgyet kitágítja, U alakú (teknő) völgy marad. A dolina a karszté, a barkán a szélé, az abráziós terasz a tengeré.',
        },
        {
          question: 'Mi határozza meg a hóhatár magasságát?',
          options: [
            'csak a tengerszint feletti magasság',
            'a földrajzi szélesség és a domborzat (a csapadék, a lejtő kitettsége)',
            'a folyók vízhozama',
            'a kőzet mésztartalma',
          ],
          answer: 1,
          explanation:
            'A hóhatár a szélességtől (hőmérséklet, csapadék) és a domborzattól is függ, ezért a térítők száraz vidékén a legmagasabb, a sarkokon a tengerszinten van.',
        },
        {
          question: 'Melyik kémiai folyamat áll a karsztosodás hátterében?',
          options: [
            'a mészkő szénsavas vízben oldódik',
            'a gránit szétbomlik a fagytól',
            'a homok összecementálódik',
            'a bazalt oldódik a tengervízben',
          ],
          answer: 0,
          explanation:
            'A csapadék CO₂-ot old, a szénsavas víz a mészkövet (CaCO₃) oldható kalcium-hidrogénkarbonáttá alakítja. Ennek nyomán lesz dolina, víznyelő, barlang.',
        },
        {
          question: 'Melyik a barkán?',
          emelt: true,
          options: [
            'sarló alakú homokbucka, szarvai a szél irányába mutatnak',
            'kör alakú gleccsermélyedés',
            'a tenger által épített turzás',
            'karsztos zsomboly',
          ],
          answer: 0,
          explanation:
            'A barkán a szél által épített, sarló alakú homokbucka; a szél felőli oldala lankás, az átellenes oldal meredek, szarvai szél alatt vannak.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Külső erők', url: wiki('külső erők felszínformálás') },
        { label: 'Wikipédia: Karszt', url: wiki('Karszt') },
        { label: 'Wikipédia: Gleccser', url: wiki('Gleccser') },
      ],
    },
    {
      id: 'talaj-es-geoszferak-kolcsonhatasa',
      subject: 'foldrajz',
      unitId: 'geoszferak-ovezetesseg',
      title: 'A talaj és a geoszférák közötti kapcsolatok',
      level: 'kozep',
      requirement: {
        kozep:
          'A talajképződés folyamata és tényezői, az éghajlat meghatározó szerepe; a talaj fő alkotói; zonális és azonális talaj; az elterjedt talajok jellemzése, elhelyezkedésük; a talajt veszélyeztető folyamatok és a megelőzés; a geoszférák egymásra hatása példákkal; többgeoszférás környezeti ártalmak, okok, következmények, megoldások.',
        emelt:
          'A talaj szintjei és jellemzőik; a fenntarthatóság és a talaj kapcsolata a különböző éghajlati övekben; a talaj környezeti hatásjelző szerepe; folyamatábrák és szemelvények elemzése.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **talaj** a kőzetburok legfelső, laza, termékeny rétege, amelyben a szilárd, a folyékony és a gázhalmazállapotú anyag és az élő szervezetek együtt vannak jelen.',
            'Talajképző tényezők: **anyakőzet, éghajlat, élővilág, domborzat, víz, idő** és az **ember**. Az **éghajlat** a meghatározó.',
            'Alkotói: **ásványi szemcsék, humusz, víz, levegő**.',
            '**Zonális talaj**: az éghajlat és a növényzet hozza létre, övezetesen rendeződik (pl. mezőségi talaj). **Azonális talaj**: helyi tényező (víz, anyakőzet) alakítja, bármelyik övben előfordul (pl. szikes talaj).',
            'A geoszférák **kölcsönhatásban** vannak: a vulkánkitörés, a savas eső vagy az üvegházhatás egyszerre érint légkört, vizet, kőzetet, talajt és élővilágot.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'anyakőzet', text: 'Az a kőzet, amelynek málladékából a talaj kialakul.' },
            {
              term: 'humusz',
              text: 'Az elhalt növényi és állati maradványokból a lebontók által képzett sötét, tápanyagban gazdag szerves anyag.',
            },
            {
              term: 'termőképesség',
              text: 'A talaj azon képessége, hogy a növények számára vizet és tápanyagot biztosít.',
            },
            {
              term: 'talajpusztulás (talajerózió)',
              text: 'A talaj lemosódása, elfújása, a termőréteg elvesztése.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A talaj kialakulása' },
        {
          kind: 'text',
          text: 'A felszíni kőzet **málladékából** a növényzet, a lebontó szervezetek és a víz hatására **talaj** lesz. A folyamat lassú: néhány centiméter talaj kialakulása száz–ezer év, elpusztítása akár egyetlen nagy záporral megtörténhet. A fő tényezők:',
        },
        {
          kind: 'keypoints',
          items: [
            '**Anyakőzet (alapkőzet)**: meghatározza az ásványi összetételt (a mészkőből a mésztartalmú, a gránitból a savanyúbb talaj lesz).',
            '**Éghajlat**: a hőmérséklet és a csapadék szabja meg a málladék képződését, a növényzet fajtáját, a humusz lebomlását. **Ez a legmeghatározóbb tényező.**',
            '**Élővilág**: a növények és lebontók adják a humuszt.',
            '**Domborzat és víz**: a lejtőn vékony, a völgyben vastag a talaj; a magas talajvíz szikesedést okozhat.',
            '**Idő** és **ember**: a talaj évszázadok alatt érik; az ember javíthatja (trágyázás, öntözés) vagy rontja.',
          ],
        },
        {
          kind: 'text',
          text: 'A talaj fő alkotói: a **talajszemcsék** (ásványi anyag), a **humusz**, a **talajvíz** és a **talajlevegő**. A **termőképességet** a humusztartalom, a vízgazdálkodás és a tápanyagok együtt adják. Az éghajlat hatására a trópusokon a nagy csapadék kimossa a tápanyagot (vékony humuszréteg), hűvösebb, nedvesebb helyen sok az elhalt növényi maradvány, de lassú a lebomlás.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A talajszelvény **szintjei**: az **A-szint** a humuszos, felső, a víz által kimosott (**kilúgozási szint**); a **B-szint** az **felhalmozódási szint** (ide mosódnak le az anyagok); a **C-szint** a málladék, alatta az anyakőzet.',
        },
        { kind: 'heading', text: 'Zonális és azonális talajok' },
        {
          kind: 'compare',
          title: 'A legfontosabb talajok',
          columns: ['Talaj és hely', 'Jellemző'],
          rows: [
            {
              label: 'Laterit, vörös- és sárgaföldek (egyenlítői öv, szavanna)',
              cells: [
                'zonális',
                'sok csapadék, magas hőmérséklet, a tápanyag kimosódik; vékony humusz, vas- és alumíniumvegyületek színezik',
              ],
            },
            {
              label: 'Sivatagi talaj (térítők)',
              cells: ['zonális', 'kevés a humusz és a víz, sós lehet'],
            },
            {
              label: 'Mezőségi talaj (száraz kontinentális, füves puszta)',
              cells: ['zonális', 'vastag humuszréteg, a legtermékenyebb talajok közé tartozik'],
            },
            {
              label: 'Barna erdőtalaj (nedves kontinentális, óceáni; lombhullató erdő)',
              cells: ['zonális', 'jó termőtalaj, erdők alatt alakul ki'],
            },
            {
              label: 'Szürke erdőtalaj (podzol) (tajga)',
              cells: ['zonális', 'savanyú, kilúgozott, tápanyagban szegény'],
            },
            {
              label: 'Tundratalaj (tundra)',
              cells: ['zonális', 'vékony, fagyott, a permafroszt miatt víztől átitatott'],
            },
            {
              label: 'Szikes talaj (pl. Hortobágy, száraz alföldek)',
              cells: [
                'azonális',
                'magas talajvíz párolgásakor a sók feldúsulnak, gyengébb termőképesség',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt: a **terra rossa** a mediterrán terület vörös, mészkövön képződő zonális talaja. Emelt azonális talajok: **öntéstalaj** (a folyó hordalékából az árterületen), **láptalaj** (mocsarakban, tőzeges), **rendzina** (mészkövön, vékony, humuszos), **váztalajok** (kőzetváz, homok, vékony vagy hiányos fejlődésű). Ezek nem az éghajlatot, hanem a kőzetet, a vizet vagy a domborzatot tükrözik.',
        },
        { kind: 'heading', text: 'A talajt veszélyeztető folyamatok' },
        {
          kind: 'keypoints',
          items: [
            '**Talajerózió (talajpusztulás)**: lejtős, növénytakaró nélküli területen a víz lemossa, szárazon a szél elfújja a talajt. Védekezés: szintvonalas szántás, teraszművelés, erdősáv, füvesítés.',
            '**Szikesedés**: helytelen öntözés, magas talajvíz miatt a sók a felszínen gyűlnek. Védekezés: vízszabályozás, gipszezés, megfelelő öntözés.',
            '**Talajszennyezés**: túlzott műtrágya- és növényvédőszer-használat, ipari és települési hulladék, olajszennyezés. Védekezés: ökológiai gazdálkodás, hulladékkezelés.',
            '**Erdőirtás és túllegeltetés**: eltűnik a védő növényzet, a talaj elpusztul.',
            '**Beépítés, tömörödés**: a termőterület csökken.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Fenntarthatóság és talaj**: a trópusi esőerdőben a tápanyag a növényzetben van, nem a talajban, ezért az erdőirtás után a talaj gyorsan elszegényedik (ezért az égetéses-talajváltó gazdálkodás nem fenntartható sűrű lakosság mellett). A mérsékelt övben a vastag humuszú talajok tartós gazdálkodást bírnak, ha védjük a talajeróziótól. A száraz övekben a rossz öntözés szikesedéshez vezet. A talaj **hatásjelző (indikátor) szerepe**: a talaj szennyezettsége (nehézfémek, savasodás) jelzi a környezet állapotát.',
        },
        { kind: 'heading', text: 'A geoszférák kölcsönhatásai' },
        {
          kind: 'text',
          text: 'A Föld geoszférái (kőzetburok, vízburok, légkör, bioszféra, talajburok) **egymásra hatnak**: az egyikben lezajló változás a többit is módosítja.',
        },
        {
          kind: 'compare',
          title: 'Példák kölcsönhatásra',
          columns: ['Kiinduló folyamat', 'Hatás a többi geoszférára'],
          rows: [
            {
              label: 'Nagy vulkánkitörés (kőzetburok)',
              cells: [
                'hamu és kén-dioxid a légkörbe jut',
                'a napsugárzás gyengül, a hőmérséklet átmenetileg csökken; a kihulló hamu a talajt és a vizeket is érinti',
              ],
            },
            {
              label: 'Üvegházgázok kibocsátása (légkör)',
              cells: [
                'melegebb éghajlat',
                'olvadnak a jégtakarók és gleccserek (vízburok), emelkedik a tengerszint, változik az élővilág és a talaj',
              ],
            },
            {
              label: 'Savas eső (légkör, szennyezés)',
              cells: [
                'SO₂ és nitrogén-oxidok oldódnak a csapadékban',
                'savanyodik a talaj és a víz, pusztul az erdő, károsodik a kőzetburok felszíni építménye',
              ],
            },
            {
              label: 'Erdőirtás (bioszféra)',
              cells: [
                'nincs, ami lassítsa a lefolyást',
                'talajerózió, árvíz, helyi éghajlat szárazabb, a folyók hordaléka megnő',
              ],
            },
            {
              label: 'Túlzott műtrágyázás (talajburok)',
              cells: [
                'nitrát jut a talajvízbe',
                'szennyeződik az ivóvíz, a felszíni vizek eutrofizálódnak (algásodás), pusztul a vízi élővilág',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **megelőzés** és a **megoldás** lehetőségei: kibocsátáscsökkentés, szűrők, fenntartható erdő- és vízgazdálkodás, hulladékkezelés, nemzetközi megállapodások. Emelt szinten folyamatábrákat és szemelvényeket kell elemezned: nézd meg, mi a **kiváltó ok**, melyik geoszféra változik először, és mi a **következmény**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Talajtípus és hely párosítása (laterit, mezőségi, podzol, tundra, szikes).',
            'Zonális vagy azonális? Indoklás.',
            'Folyamatábra: pl. erdőirtás, talajerózió, árvíz; írd le a láncot lépésenként, geoszférák szerint.',
            'Rövid kifejtés: egy talajveszélyeztető folyamat oka, következménye, megelőzése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a trópusi esőerdő talaja termékeny, mert dús a növényzet. A tápanyag a **növényzetben** van, a talaj vékony humuszú és kimosott. Ne keverd a mezőségi (száraz kontinentális, füves puszta) és a podzol (tajga) talajt sem.',
        },
        {
          kind: 'tip',
          text: 'A kölcsönhatásnál mindig **láncot** írj: ok → első hatás (melyik geoszféra) → következmény (melyik geoszféra) → megoldás. Nevezd meg a geoszférákat.',
        },
      ],
      topicMatch: [
        'talaj',
        'zonális talajok',
        'talajpusztulás',
        'talajösszetevők',
        'geoszférák kölcsönhatása',
      ],
      quiz: [
        {
          question: 'Melyik tényező a talajképződés legmeghatározóbb tényezője?',
          options: [
            'az idő',
            'az éghajlat',
            'az emberi tevékenység',
            'a tengerszint feletti magasság',
          ],
          answer: 1,
          explanation:
            'Az éghajlat (hőmérséklet, csapadék) szabja meg a mállást, a növényzetet és a humuszképződést, ezért a zonális talajok övezetesen rendeződnek.',
        },
        {
          question: 'Melyik azonális talaj?',
          options: ['mezőségi talaj', 'podzol', 'szikes talaj', 'laterit'],
          answer: 2,
          explanation:
            'A szikes talajt a magas talajvíz és a párolgás hozza létre, nem az éghajlati övezet. A többi zonális talaj.',
        },
        {
          question: 'Melyik talaj a legtermékenyebbek közé tartozó, vastag humuszréteggel?',
          options: ['laterit', 'tundratalaj', 'mezőségi talaj', 'sivatagi talaj'],
          answer: 2,
          explanation:
            'A száraz kontinentális füves pusztán (sztyepp) a fű gyökerei sok humuszt adnak, ezért a mezőségi talaj igen termékeny.',
        },
        {
          question: 'Hogyan hat a nagy vulkánkitörés a légkörre és az éghajlatra?',
          options: [
            'a légkörbe jutó hamu és gáz átmenetileg hűti a Földet',
            'tartósan emeli a levegő oxigéntartalmát',
            'nincs kapcsolata az éghajlattal',
            'a tengerszint csökkenéséhez vezet',
          ],
          answer: 0,
          explanation:
            'A légkörbe jutó hamu és a kén-dioxidból képződő aeroszol a napsugárzás egy részét visszaveri, ezért a hőmérséklet átmenetileg csökken. Ez a kőzetburok és a légkör kölcsönhatása.',
        },
        {
          question: 'Mi az A-szint a talajszelvényben?',
          emelt: true,
          options: [
            'a felhalmozódási szint',
            'a humuszos, kilúgozási szint',
            'az anyakőzet',
            'a málladékszint',
          ],
          answer: 1,
          explanation:
            'Az A-szint a felső, humuszos réteg, amelyből a víz kimossa az anyagokat. A B-szint a felhalmozódási, a C-szint a málladékszint.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Talaj', url: wiki('Talaj') },
        { label: 'Wikipédia: Talajtípusok', url: wiki('talajtípusok zonális azonális') },
        { label: 'Wikipédia: Szikes talaj', url: wiki('Szikes talaj') },
      ],
    },
    {
      id: 'szolaris-eghajlat-es-fuggoleges-ovezetesseg',
      subject: 'foldrajz',
      unitId: 'geoszferak-ovezetesseg',
      title: 'Szoláris és valódi éghajlati övezetek, függőleges övezetesség',
      level: 'kozep',
      requirement: {
        kozep:
          'A napsugarak hajlásszögének és a felmelegedés mértékének változása a földrajzi szélességgel (egyszerű rajz); a szoláris éghajlati övezetek jelölése és helye a fokhálózatban; az óceánok, tengeráramlások, szélrendszerek, felszín és domborzat éghajlat-módosító hatása; éghajlati és földrajzi övezetesség különbsége; a tengerszint feletti magasság és a természetföldrajzi tényezők kapcsolata; a mérsékelt övezeti hegységek függőleges övezetessége, gazdálkodási lehetőségek.',
        emelt:
          'A szoláris és a valódi éghajlati övezetek különbsége; a forró és a mérsékelt övezet hegységeinek összehasonlítása keresztmetszetek segítségével; függőleges övezetességet bemutató keresztmetszet készítése; az éghajlatváltozás hatása a magashegységek idegenforgalmára.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szoláris éghajlati övezetek** csak a napsugarak beesési szögétől függnek, ezért a szélességi körök mentén húzódnak: **forró** (a térítők között, 23,5° É és D), **mérsékelt** (a térítők és a sarkkörök között), **hideg** (a sarkkörökön túl, 66,5°-tól).',
            'A **valódi éghajlati övezetek** tartalmazzák a további tényezőket is (óceánok és tengeráramlások, szélrendszerek, a szárazföld-víz eloszlás, domborzat), ezért határaik nem párhuzamosak a szélességi körökkel.',
            'Az **éghajlati övezetesség** csak az éghajlatot, a **földrajzi övezetesség** az éghajlatot, vizeket, talajt, növényzetet, élővilágot együtt jelenti.',
            '**Vízszintes övezetesség**: az Egyenlítőtől a sarkok felé. **Függőleges övezetesség**: a tengerszint feletti magasság szerint, ugyanezek a tényezők változnak.',
            'Átlagosan **100 m-enként kb. 0,6 °C-kal** csökken a hőmérséklet felfelé haladva.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'erdőhatár',
              text: 'Felette az erdő összefüggő zárt állománya már nem található.',
            },
            { term: 'fahatár', text: 'Felette már fa sem él meg.' },
            { term: 'hóhatár', text: 'Felette a hó egész évben megmarad.' },
            {
              term: 'éghajlatválasztó hegység',
              text: 'Az a hegység, amelynek két oldalán eltérő az éghajlat (pl. Alpok, Himalája).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A napsugarak hajlásszöge és a hőmérséklet' },
        {
          kind: 'text',
          text: 'Az Egyenlítő környékén a napsugarak közel merőlegesen érik a felszínt, a sarkok felé egyre laposabb szögben. **Kisebb beesési szögnél** ugyanaz a sugárnyaláb **nagyobb felületen** oszlik el, és **hosszabb utat** tesz meg a légkörben, így több energia nyelődik el vagy verődik vissza. A felmelegedés ezért a sarkok felé csökken. Egyszerű rajz: rajzolj egy félkört a Földről, a Nap felől párhuzamos sugarakat, és jelöld az Egyenlítőnél, a mérsékelt övben és a sarkon ugyanakkora nyaláb által megvilágított felület méretét.',
        },
        {
          kind: 'text',
          text: 'A napsugarak déli magassága (**delelési magasság**) a napállástól és a helytől függ: $h = 90^\\circ - |\\varphi - \\delta|$, ahol $\\varphi$ a földrajzi szélesség, $\\delta$ a Nap merőleges beesésének szélessége (június 21.: $+23{,}5^\\circ$, március 21. és szeptember 23.: $0^\\circ$, december 22.: $-23{,}5^\\circ$).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: delelési magasság Budapesten',
          problem:
            'Mekkora a Nap delelési magassága Budapesten (kb. 47,5° É) június 21-én és december 22-én?',
          solution:
            'Június 21.: $h = 90^\\circ - |47{,}5^\\circ - 23{,}5^\\circ| = 90^\\circ - 24^\\circ = 66^\\circ$.\n\nDecember 22.: $h = 90^\\circ - |47{,}5^\\circ - (-23{,}5^\\circ)| = 90^\\circ - 71^\\circ = 19^\\circ$.\n\nNyáron tehát meredekebb a sugárzás: nagyobb a felmelegedés. A kettő különbsége $47^\\circ$ (= $2 \\cdot 23{,}5^\\circ$).',
        },
        { kind: 'heading', text: 'Szoláris és valódi éghajlati övezetek' },
        {
          kind: 'compare',
          title: 'Szoláris és valódi éghajlati övezetek',
          columns: ['Szoláris', 'Valódi'],
          rows: [
            {
              label: 'Mitől függ?',
              cells: [
                'csak a Nap sugárzásától (a beesési szögtől)',
                'a napsugárzás mellett óceánok, tengeráramlások, szélrendszerek, szárazföld-víz eloszlás, domborzat is módosítja',
              ],
            },
            {
              label: 'Határai',
              cells: [
                'szélességi körök: térítők (23,5°), sarkkörök (66,5°)',
                'szabálytalanok, nem követik a szélességi köröket',
              ],
            },
            {
              label: 'Övezetek',
              cells: [
                'forró, mérsékelt, hideg',
                'ezek tovább tagolt övei, területei (pl. óceáni, szárazföldi)',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Mi módosítja az éghajlatot?',
          columns: ['Tényező', 'Hatás'],
          rows: [
            {
              label: 'Óceánok, tengerek',
              cells: ['kiegyenlítik a hőmérsékletet', 'part menti területeken kisebb a hőingás'],
            },
            {
              label: 'Tengeráramlások',
              cells: [
                'a meleg áramlás melegít, a hideg hűt',
                'pl. az Észak-atlanti-áramlás enyhébbé teszi Nyugat-Európa éghajlatát; a hideg Humboldt-áramlás hozzájárul az Atacama szárazságához',
              ],
            },
            {
              label: 'Szélrendszerek',
              cells: [
                'nedves vagy száraz levegőt szállítanak',
                'nyugati szelek nedvességet hoznak Nyugat-Európába; monszunok nyáron csapadékot',
              ],
            },
            {
              label: 'Földfelszín (szárazföld, víz)',
              cells: [
                'a szárazföld gyorsabban melegszik és hűl',
                'szárazföld belsejében nagy a hőingás',
              ],
            },
            {
              label: 'Domborzat',
              cells: [
                'magasság, hegyek, lejtők kitettsége',
                'a hegység a nedvességet felfogja (szélárnyék), a magasban hidegebb',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt: a szoláris és valódi éghajlati övezetek különbsége jól látszik a térképen. A szoláris mérsékelt övezetben ugyanazon a szélességen Lisszabon enyhe és csapadékos, belső Ázsiában pedig szélsőségesen hideg telű, száraz éghajlat van. A **valódi övezetek** ezért pl. Nyugat-Európa csapadékos óceáni, Közép-Ázsia száraz kontinentális éghajlatát is tartalmazzák.',
        },
        { kind: 'heading', text: 'Éghajlati és földrajzi övezetesség' },
        {
          kind: 'text',
          text: 'Az **éghajlati övezetesség** a Föld éghajlatának szabályos rendje. Az éghajlat kihat a vizekre, a talajra, a növényzetre, az élővilágra, a felszínformálásra és az ember gazdálkodására, ezért ezek is övezetesen rendeződnek: ez a **földrajzi övezetesség**. Vízszintes irányban az Egyenlítőtől a sarkok felé, függőleges irányban a tengerszinttől a csúcsok felé változnak a feltételek.',
        },
        { kind: 'heading', text: 'Függőleges övezetesség' },
        {
          kind: 'text',
          text: 'Felfelé haladva a **hőmérséklet átlagosan 100 m-enként kb. 0,6 °C-kal csökken**, a **csapadék** először nő (felszálló, lehűlő levegő), majd egy magasság felett csökken, a szél erősebb. Ezért a hegyekben egymás fölött változik a növényzet, a talaj és a gazdálkodás, hasonlóan, mintha északra utaznánk.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: hőmérséklet-csökkenés a magassággal',
          problem:
            'A völgyben, 400 m-en 18 °C a hőmérséklet. Mennyi lehet 2000 m-en, ha 100 m-enként 0,6 °C-kal csökken?',
          solution:
            'A magasságkülönbség: $2000 - 400 = 1600$ m, ez $16$ százméter.\n\nA csökkenés: $16 \\cdot 0{,}6 = 9{,}6$ °C.\n\nA hőmérséklet 2000 m-en: $18 - 9{,}6 = 8{,}4$ °C.',
        },
        {
          kind: 'compare',
          title: 'A mérsékelt övezeti hegység (pl. Alpok) övei alulról felfelé',
          columns: ['Öv', 'Növényzet, gazdálkodás'],
          rows: [
            {
              label: 'Alsó öv (dombvidék, völgyek)',
              cells: [
                'lombhullató erdő (főleg kiirtva)',
                'szántóföldi növénytermesztés, szőlő, gyümölcs, települések',
              ],
            },
            {
              label: 'Erdőöv',
              cells: ['lombhullatóból vegyes, majd tűlevelű erdő', 'erdőgazdálkodás, fakitermelés'],
            },
            {
              label: 'Havasi legelő (az erdőhatár fölött)',
              cells: [
                'fátlan, alacsony füvek, törpecserjék',
                'havasi pásztorkodás nyáron (szarvasmarha, juh)',
              ],
            },
            {
              label: 'Sziklahavas',
              cells: ['alig van növényzet (zuzmók, mohák)', 'idegenforgalom, kevés hasznosítás'],
            },
            {
              label: 'Hóhatár fölött',
              cells: ['állandó hó és jég, gleccser', 'síelés, magashegyi turizmus'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **éghajlatválasztó hegység** két oldalán eltérő éghajlat van: az **Alpok** északi oldala csapadékos, mérsékelt, a déli oldala már mediterrán hatású; a **Himalája** déli oldalát a monszun csapadéka éri, északi oldalán száraz a Tibeti-fennsík.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Forró és mérsékelt övezeti hegység összehasonlítása',
          columns: ['Forró övezet (pl. Andok, Kilimandzsáró)', 'Mérsékelt övezet (pl. Alpok)'],
          rows: [
            {
              label: 'Alsó öv',
              cells: ['trópusi esőerdő', 'lombhullató erdő, szántóföld'],
            },
            {
              label: 'Évszakok',
              cells: [
                'alig vannak, az övek hőmérséklete egész évben kiegyenlített',
                'jelentős évszakos hőmérséklet-különbség',
              ],
            },
            {
              label: 'Hóhatár',
              cells: [
                'sokkal magasabban (kb. 4500–5000 m)',
                'alacsonyabban (Alpok kb. 2800–3000 m)',
              ],
            },
            {
              label: 'Övek száma',
              cells: [
                'több, változatosabb, a magas fekvésű területek lakottak',
                'kevesebb, a lakott terület alacsonyabb',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Éghajlatváltozás és turizmus**: a felmelegedés miatt a gleccserek visszahúzódnak, a hóhatár emelkedik, a hótakaró vékonyabb és rövidebb ideig tart. Az alacsonyabban fekvő síközpontok hóhiánnyal küzdenek, a mesterséges havazás költséges és vízigényes. A turizmus a magasabb központok és a nyári szezon (túrázás) felé tolódik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Egyszerű rajz: napsugarak az Egyenlítőn és a mérsékelt övben, és annak magyarázata, miért kisebb a felmelegedés.',
            'Térképvázlat: szoláris övezetek berajzolása, a határ szélességi értékei.',
            'Hegység keresztmetszete: övek megnevezése (erdő, havasi legelő, hóhatár) és gazdálkodás.',
            'Számítás: hőmérséklet adott magasságban, 100 m-enként 0,6 °C.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni az **éghajlati** és a **földrajzi** övezetességet. Az éghajlati csak az éghajlatot, a földrajzi az egész rendszert (víz, talaj, növényzet) jelenti. Másik hiba: a hőmérséklet-csökkenésnél százméterenként számolni és 1000 m-nél hibázni: 1000 m = 10 százméter = 6 °C.',
        },
        {
          kind: 'tip',
          text: 'Szoláris határok: **23,5°** (térítők) és **66,5°** (sarkkörök). Rajzolásnál a két félteke szimmetrikus.',
        },
      ],
      topicMatch: [
        'földrajzi övezetesség',
        'éghajlati övezetek',
        'hegyvidéki éghajlat',
        'trópusi éghajlatok',
      ],
      quiz: [
        {
          question: 'Hol húzódik a hideg szoláris övezet határa?',
          options: [
            'a térítőknél',
            'a 45. szélességi körnél',
            'a sarkköröknél (66,5°)',
            'az Egyenlítőnél',
          ],
          answer: 2,
          explanation:
            'A hideg övezet a sarkkörön túl (66,5° felett) kezdődik. A forró övezet határai a térítők (23,5°).',
        },
        {
          question: 'Miért kisebb a felmelegedés a sarkok felé?',
          options: [
            'a Nap messzebb van',
            'laposabb a napsugarak beesési szöge, ugyanaz a nyaláb nagyobb felületen oszlik el',
            'több a szárazföld',
            'ott mindig éjszaka van',
          ],
          answer: 1,
          explanation:
            'A sarkok felé a beesési szög kisebb, a sugárnyaláb nagyobb felületre terül szét és hosszabb utat tesz meg a légkörben, így kevesebb energia jut egységnyi felületre.',
        },
        {
          question:
            'Mennyi a hőmérséklet 3000 m-en, ha a tengerszinten 25 °C és 100 m-enként 0,6 °C a csökkenés?',
          options: ['7 °C', '19 °C', '10 °C', '-5 °C'],
          answer: 0,
          explanation: '3000 m = 30 százméter, a csökkenés 30 · 0,6 = 18 °C, ezért 25 − 18 = 7 °C.',
        },
        {
          question: 'Melyik a helyes sorrend a mérsékelt övezeti hegységben alulról felfelé?',
          options: [
            'havasi legelő, erdő, szántó, hóhatár',
            'szántó, erdő, havasi legelő, sziklahavas, hóhatár fölött állandó hó',
            'erdő, szántó, sziklahavas, havasi legelő',
            'hóhatár, erdő, szántó',
          ],
          answer: 1,
          explanation:
            'Lentről felfelé hűvösebb a klíma: szántóföldek, erdő, az erdőhatár felett havasi legelő, majd sziklahavas és a hóhatár fölötti jég.',
        },
        {
          question: 'Melyik állítás igaz a forró és a mérsékelt övezet hegységére?',
          emelt: true,
          options: [
            'a forró övezet hegységében a hóhatár alacsonyabban van',
            'a forró övezeti hegységben a hóhatár sokkal magasabban van és alig vannak évszakok',
            'mindkét hegységben azonos az övek hőmérséklete',
            'a mérsékelt övezetben nincs hóhatár',
          ],
          answer: 1,
          explanation:
            'A forró övezetben az övek hőmérséklete egész évben kiegyenlített, a hóhatár kb. 4500–5000 m, a mérsékelt övezetben (Alpok) kb. 2800–3000 m.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Éghajlati övezet', url: wiki('éghajlati övezetek') },
        { label: 'Wikipédia: Függőleges övezetesség', url: wiki('függőleges övezetesség') },
        { label: 'Wikipédia: Hóhatár', url: wiki('Hóhatár') },
      ],
    },
    {
      id: 'forro-ovezet-ovei',
      subject: 'foldrajz',
      unitId: 'geoszferak-ovezetesseg',
      title: 'A forró övezet övei',
      level: 'kozep',
      requirement: {
        kozep:
          'A földrajzi övezetesség fogalma, rendszere; az uralkodó szélrendszerek szerepe; az övek éghajlati, vízrajzi és felszínformálódási sajátosságai, talaja, élővilága; a termesztett növények, tenyésztett állatok, a gazdálkodás típusai; környezeti problémák; elhelyezkedés térképen, éghajlati diagramok.',
        emelt:
          'Az övezetesség és az eltartóképesség kapcsolata; a települések képe; a környezetkárosodással leginkább sújtott térségek; komplex jellemzés, természetföldrajzi változások az Egyenlítő és a térítők között; galériaerdő, macchia és más emelt fogalmak.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **forró övezet** a térítők között van. Négy része: **egyenlítői öv**, **átmeneti öv** (szavanna), **térítői öv** (sivatag) és **monszunvidék**.',
            'Az **egyenlítői öv**: egész évben meleg és csapadékos, **trópusi esőerdő**, laterit, égetéses-talajváltó és ültetvényes gazdálkodás.',
            'Az **átmeneti öv**: esős és száraz évszak, **szavanna**, nomád pásztorkodás, túllegeltetés és felégetés miatt elsivatagosodás.',
            'A **térítői öv**: a leszálló légáramlás miatt száraz, **forró övezeti sivatagi éghajlat**, oázisgazdálkodás, jövevényfolyó.',
            'A **monszunvidék**: nyáron a tenger felől csapadékot hozó szél, **monszunerdő**, rizstermesztés (monszungazdálkodás).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szélrendszerek és az övezetek kialakulása' },
        {
          kind: 'text',
          text: 'Az **uralkodó szélrendszerek** (az állandó légáramlások) szabják meg, hol van csapadék. Az Egyenlítő mentén a levegő felemelkedik, lehűl, a vízgőz kicsapódik: bőséges a csapadék. A térítők körül a levegő leszáll, felmelegszik, kiszárad: sivatagok. Az általános légkörzés tehát az övezetek sorrendjét is kijelöli.',
        },
        {
          kind: 'compare',
          title: 'A forró övezet övei',
          columns: ['Egyenlítői öv', 'Átmeneti öv (szavanna)'],
          rows: [
            {
              label: 'Éghajlat',
              cells: [
                'egész évben meleg (átlag kb. 25–27 °C), kicsi hőingás, napi zivatarok, évi csapadék 2000 mm körüli vagy afeletti',
                'meleg, csapadékos és száraz évszak váltakozik; a száraz szavanna évi csapadéka kevesebb',
              ],
            },
            {
              label: 'Vízrajz',
              cells: [
                'bővizű folyók egész évben (Amazonas, Kongó)',
                'időszakos, ingadozó vízjárás; a száraz évszakban sok kis vízfolyás kiszárad',
              ],
            },
            {
              label: 'Felszínformálás, talaj',
              cells: [
                'gyors kémiai mállás, vastag málladék; laterit, vörös- és sárgaföld, kimosott, vékony humusz',
                'vörös- és sárgaföldek; az eső talajeróziót okoz',
              ],
            },
            {
              label: 'Növényzet',
              cells: [
                'trópusi esőerdő: többszintes, fajgazdag, évelő lomb',
                'szavanna: magas füvek és szétszórt fák (baobab, akác); a nedves szavanna fásabb, a száraz füves',
              ],
            },
            {
              label: 'Gazdálkodás',
              cells: [
                'égetéses-talajváltó gazdálkodás (hagyományos); ültetvényes gazdálkodás (kakaó, kaucsuk, olajpálma, banán)',
                'nomád pásztorkodás (szarvasmarha, kecske); kukorica, cirok, gyapot termesztése',
              ],
            },
            {
              label: 'Környezeti probléma',
              cells: [
                'erdőirtás, talajpusztulás, fajok eltűnése',
                'felégetés, túllegeltetés, elsivatagosodás (Száhel)',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'A forró övezet övei, folytatás',
          columns: ['Térítői öv', 'Monszunvidék'],
          rows: [
            {
              label: 'Éghajlat',
              cells: [
                'forró övezeti sivatagi éghajlat: nagyon kevés csapadék (a legtöbb helyen 250 mm alatt), nagy napi hőingás, kevés felhő',
                'forró övezeti monszunéghajlat: nyáron a tenger felől csapadékos, télen száraz szél',
              ],
            },
            {
              label: 'Vízrajz',
              cells: [
                'kevés állandó víz, száraz medrek; jövevényfolyó (Nílus) átszeli',
                'nyáron árvíz, télen kisvíz (Gangesz, Mekong)',
              ],
            },
            {
              label: 'Felszínformálás, talaj',
              cells: [
                'szél pusztít és épít (dűnék), hőmérséklet-ingadozás okozta aprózódás; sivatagi talaj',
                'erős kémiai mállás, az árvíz hordaléka termékeny',
              ],
            },
            {
              label: 'Növényzet',
              cells: ['ritka növényzet; oázisokban pálma', 'monszunerdő (dzsungel), nyáron lombos'],
            },
            {
              label: 'Gazdálkodás',
              cells: [
                'oázisgazdálkodás (datolyapálma, gabona, zöldség); nomád pásztorkodás (teve)',
                'monszungazdálkodás: rizs, tea, juta, ültetvények, nagy népsűrűség',
              ],
            },
            {
              label: 'Környezeti probléma',
              cells: ['elsivatagosodás, vízhiány', 'árvíz, erdőirtás, túlnépesedés'],
            },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'jövevényfolyó',
              text: 'Olyan folyó, amely száraz területen is átfolyik, mert vízgyűjtő területe csapadékos vidéken van (Nílus a Szaharán, Indus).',
            },
            {
              term: 'oázis',
              text: 'A sivatagban talajvíz vagy forrás mellett létrejövő, öntözött zöld terület.',
            },
            {
              term: 'égetéses-talajváltó gazdálkodás',
              text: 'A földet felégetik, néhány évig termesztenek rajta, majd amikor kimerül a talaj, újat vágnak. Kevés népesség mellett fenntartható.',
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt: az átmeneti övben a folyók mentén **galériaerdő** húzódik. A szavanna lehet **erdős**, **cserjés** vagy **füves**. Az Egyenlítőtől a térítők felé haladva csökken a csapadék és az évi csapadékos hónapok száma, ezért az esőerdő → nedves szavanna → száraz szavanna → sivatag sorrend következik. Az **eltartóképesség** az esőerdőben az égetéses-talajváltó gazdálkodás miatt kicsi, a monszunvidéken az öntözött rizstermesztés nagy népsűrűséget bír el.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A települések képe: az esőerdőben szétszórt, kis falvak, cölöpházak; a száraz övekben vályogház, oázisfalvak; a monszunvidéken sűrű, folyóparti települések.',
        },
        { kind: 'heading', text: 'Éghajlati diagram olvasása: egyenlítői példa' },
        {
          kind: 'text',
          text: 'Az éghajlati diagram (klímadiagram) a **havi középhőmérsékletet** (vonal) és a **havi csapadékösszeget** (oszlop) mutatja. Leolvasható belőle: évi középhőmérséklet, **hőingás** (a legmelegebb és leghidegebb hónap különbsége), **évi csapadék**, száraz hónapok. A feladatok az adatokat kérik számolni, majd az övet felismerni.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: melyik öv ez?',
          problem:
            'Egy (kitalált) állomás havi középhőmérséklete (°C): 26,5; 26,8; 27,0; 26,8; 26,5; 26,0; 25,6; 25,8; 26,0; 26,2; 26,3; 26,3. Havi csapadéka (mm): 250; 230; 260; 280; 270; 150; 100; 110; 160; 220; 260; 270. Számítsd ki az évi középhőmérsékletet, a hőingást és az évi csapadékot, majd döntsd el, melyik övhöz tartozik!',
          solution:
            'Az évi középhőmérséklet: a 12 érték összege 315,8, osztva 12-vel kb. $26{,}3$ °C.\n\nHőingás: a legmelegebb hónap 27,0 °C, a leghidegebb 25,6 °C, a különbség $27{,}0 - 25{,}6 = 1{,}4$ °C.\n\nÉvi csapadék: a havi értékek összege $2560$ mm.\n\nÉrtékelés: magas hőmérséklet, majdnem állandó (kis hőingás), nagyon sok csapadék, nincs száraz hónap (a legszárazabb is 100 mm). Ez az **egyenlítői öv**, trópusi esőerdő.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Éghajlati diagram alapján öv felismerése és az indoklás (hőingás, csapadék eloszlása).',
            'Kép alapján: esőerdő, szavanna, sivatag, oázis, rizsföld.',
            'Táblázat kitöltése: öv, éghajlat, talaj, növényzet, gazdálkodás, környezeti probléma.',
            'Térképen az övek elhelyezkedése (Afrika, Dél-Amerika, Dél-Ázsia).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az esőerdő talaját termékenynek hinni, a szavannát és a sivatagot összekeverni, vagy a **jövevényfolyót** (száraz területen átfolyik) az időszakos folyóval (egyes időszakban kiszárad). A monszunvidék nem a térítői sivatag, annak ellenére, hogy a térítők közelében van.',
        },
        {
          kind: 'tip',
          text: 'Klímadiagramon először nézd a **hőingást** (kicsi: egyenlítői; nagy: sivatag vagy kontinentális), majd a **csapadék eloszlását** (egész évben: egyenlítői; két évszak: szavanna vagy monszun; szinte semmi: sivatag).',
        },
      ],
      topicMatch: ['sivatagi éghajlat', 'éghajlati diagram', 'trópusi éghajlatok'],
      quiz: [
        {
          question: 'Melyik öv jellemzője a trópusi esőerdő?',
          options: ['térítői öv', 'egyenlítői öv', 'átmeneti öv', 'hideg mérsékelt öv'],
          answer: 1,
          explanation:
            'Az egyenlítői övben egész évben meleg és csapadékos, ezért alakul ki a többszintes trópusi esőerdő.',
        },
        {
          question: 'Mi okozza az elsivatagosodást a szavanna szélén?',
          options: [
            'a túlzott öntözés',
            'a túllegeltetés és a felégetés',
            'a hideg áramlat',
            'a lomberdők irtása',
          ],
          answer: 1,
          explanation:
            'A sok állat kiirtja a füvet, a felégetés pusztítja a növénytakarót, így a talaj lepusztul, és a terület sivataggá válik (Száhel).',
        },
        {
          question: 'Melyik gazdálkodási forma jellemző a monszunvidékre?',
          options: [
            'nomád pásztorkodás',
            'oázisgazdálkodás',
            'rizstermesztésre épülő monszungazdálkodás',
            'mediterrán gazdálkodás',
          ],
          answer: 2,
          explanation:
            'A nyári monszun csapadéka és az árterületek hordaléka a rizstermesztésnek kedvez, ezért nagy a népsűrűség.',
        },
        {
          question:
            'Egy éghajlati diagramon kicsi a hőingás (kb. 1–2 °C), évi csapadék 2500 mm, nincs száraz hónap. Melyik öv?',
          options: ['szavanna', 'forró övezeti sivatag', 'egyenlítői öv', 'tundra'],
          answer: 2,
          explanation: 'Állandó meleg, minimális hőingás, egész évben sok csapadék: egyenlítői öv.',
        },
        {
          question: 'Mi a galériaerdő?',
          emelt: true,
          options: [
            'a monszunerdő téli szakasza',
            'a folyók mentén húzódó erdősáv a szavannán',
            'az oázisok pálmaerdeje',
            'a tajga déli szegélye',
          ],
          answer: 1,
          explanation: 'A szavannán a folyó melletti nedvesebb sávban fák nőnek, ez a galériaerdő.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Esőerdő', url: wiki('Esőerdő') },
        { label: 'Wikipédia: Szavanna', url: wiki('Szavanna') },
        { label: 'Wikipédia: Monszun', url: wiki('Monszun') },
      ],
    },
    {
      id: 'merseklet-hideg-ovezet-ovei',
      subject: 'foldrajz',
      unitId: 'geoszferak-ovezetesseg',
      title: 'A mérsékelt és a hideg övezet övei, éghajlati diagramok',
      level: 'kozep',
      requirement: {
        kozep:
          'A mérsékelt és a hideg övezet övei, vidékei, területei: éghajlat, vízrajz, felszínformálódás, talaj, élővilág, gazdálkodás, környezeti problémák; elhelyezkedés térképen; éghajlati diagramok értelmezése, összehasonlítása, öv felismerése.',
        emelt:
          'Az övezetesség és az eltartóképesség; települések képe; környezetkárosodással leginkább sújtott térségek; a kontinentalitás nyugat–keleti változása Eurázsiában diagramok és keresztmetszetek alapján; macchia, pampa, préri, sztyepp, tőzegmohaláp.',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **mérsékelt övezet**: **meleg mérsékelt öv** (mediterrán terület, monszunterület), **valódi mérsékelt öv** (óceáni, mérsékelten szárazföldi, szárazföldi, szélsőségesen szárazföldi terület), **hideg mérsékelt öv** (tajga).',
            'A **hideg övezet**: **sarkköri öv** (tundra) és **sarkvidéki öv** (állandóan fagyos éghajlat).',
            'Nyugatról keletre a valódi mérsékelt övben nő a **kontinentalitás**: nagyobb a hőingás, kevesebb a csapadék.',
            'A növényzet: lombhullató erdő → erdős puszta → füves puszta → félsivatag; északon tajga, majd tundra.',
            'Gazdálkodás: vegyes gazdálkodás (Közép-Európa), búza a füves pusztán, erdőgazdálkodás a tajgán, nomád pásztorkodás a tundrán.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A mérsékelt övezet' },
        {
          kind: 'compare',
          title: 'A meleg mérsékelt öv',
          columns: ['Mediterrán terület', 'Monszunterület'],
          rows: [
            {
              label: 'Hely',
              cells: [
                'Földközi-tenger partvidéke, Kalifornia, Chile közepe, a Fokföld',
                'Kelet-Ázsia keleti partvidéke (Dél-Kína, Dél-Japán)',
              ],
            },
            {
              label: 'Éghajlat',
              cells: [
                'mediterrán éghajlat: forró, száraz nyár, enyhe, csapadékos tél',
                'mérsékelt övezeti monszunéghajlat: forró, csapadékos nyár, hűvös, szárazabb tél',
              ],
            },
            {
              label: 'Vízrajz',
              cells: [
                'téli bőviz, nyári kisvíz; sok időszakos vízfolyás',
                'nyári áradás, télen kisebb a vízhozam',
              ],
            },
            {
              label: 'Növényzet, talaj',
              cells: [
                'keménylombú erdő (parafatölgy, olajfa), a lepusztult helyen cserjés (macchia); terra rossa',
                'babérlombú erdők, később lombhullató erdő; sárgaföld és barna erdőtalaj',
              ],
            },
            {
              label: 'Gazdálkodás',
              cells: [
                'mediterrán gazdálkodás: olajbogyó, szőlő, citrusfélék, gyümölcs, öntözéssel; turizmus',
                'rizs, tea, selyemhernyó, sűrű népesség',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'A valódi mérsékelt öv területei',
          columns: ['Terület', 'Éghajlat, növényzet, talaj, gazdálkodás'],
          rows: [
            {
              label: 'Óceáni terület (pl. Brit-szigetek, Nyugat-Európa)',
              cells: [
                'óceáni éghajlat: enyhe tél, hűvös nyár, kis hőingás, egész évben csapadék',
                'lombhullató erdő (tölgy, bükk), barna erdőtalaj; kiegyenlített vízjárás; legeltetés, vegyes gazdálkodás',
              ],
            },
            {
              label: 'Mérsékelten szárazföldi terület (pl. Közép-Európa, Magyarország)',
              cells: [
                'nedves kontinentális éghajlat: nagyobb hőingás, mérsékelt csapadék',
                'lombhullató erdő, barna erdőtalaj; vegyes gazdálkodás (gabona, kukorica, állattenyésztés)',
              ],
            },
            {
              label: 'Szárazföldi terület (pl. Ukrajna, Kazahsztán, az USA Nagy-síkság)',
              cells: [
                'száraz kontinentális éghajlat: forró nyár, hideg tél, kevés csapadék',
                'erdős puszta, füves puszta (füves mezőség), mezőségi talaj; búzatermesztés, nagyüzemi gazdálkodás',
              ],
            },
            {
              label: 'Szélsőségesen szárazföldi terület (pl. Közép-Ázsia, Gobi)',
              cells: [
                'mérsékelt övezeti sivatagi éghajlat: nagyon száraz, nagy hőingás',
                'félsivatag, sivatag; nomád pásztorkodás, öntözéses gazdálkodás a folyók mentén',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **füves területek feltörése** (a füves puszta szántóvá alakítása) a szélerózió fő oka: az 1930-as évek amerikai „porviharai” (Dust Bowl) példa. A mérsékelt övezet környezeti problémái: erdőirtás, talajerózió, szennyezés, folyószabályozás következményei.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt: **pampa** (Dél-Amerika), **préri** (Észak-Amerika), **sztyepp** (Eurázsia): a mérsékelt övezeti füves puszta nevei. A mediterrán terület cserjés növényzete a **macchia**. Hideg mérsékelt övben a lassú lebomlás miatt **tőzegmohaláp** alakul ki.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kontinentalitás Eurázsiában**: az Atlanti-óceántól kelet felé a téli hőmérséklet csökken, a nyári nő, tehát nő a **hőingás**, a csapadék pedig csökken (óceáni → nedves kontinentális → száraz kontinentális → szélsőségesen szárazföldi). Közép-Szibériában a hőingás 50 °C feletti is lehet, a nyugati óceáni területeken kb. 10–12 °C.',
        },
        { kind: 'heading', text: 'A hideg mérsékelt öv és a hideg övezet' },
        {
          kind: 'compare',
          title: 'Tajga, tundra, sarkvidék',
          columns: ['Tajga (hideg mérsékelt öv)', 'Tundra (sarkköri öv)'],
          rows: [
            {
              label: 'Éghajlat',
              cells: [
                'tajgaéghajlat: hosszú, nagyon hideg tél, rövid, enyhe nyár, nagy hőingás, mérsékelt csapadék',
                'tundraéghajlat: hosszú tél, rövid, hűvös nyár (a legmelegebb hónap középhőmérséklete 10 °C alatt)',
              ],
            },
            {
              label: 'Vízrajz',
              cells: [
                'nagy folyók (Ob, Jenyiszej, Léna), tavaszi olvadási árvíz, télen befagynak',
                'tavasszal sok olvadékvíz, mocsarak, tavak a fagyott talaj fölött',
              ],
            },
            {
              label: 'Felszín, talaj',
              cells: [
                'permafroszt Szibériában; szürke erdőtalaj (podzol): savanyú, kilúgozott',
                'állandó fagy („örök fagy”), fagyaprózódás; tundratalaj: vékony, tápanyagszegény',
              ],
            },
            {
              label: 'Növényzet',
              cells: [
                'tűlevelű erdő (fenyő, lucfenyő, vörösfenyő)',
                'moha, zuzmó, törpecserje, fű; fák nincsenek',
              ],
            },
            {
              label: 'Gazdálkodás',
              cells: [
                'erdőgazdálkodás, fakitermelés, prémvadászat; kevés mezőgazdaság',
                'rénszarvas-nomád pásztorkodás, vadászat, halászat; ritka népesség',
              ],
            },
            {
              label: 'Környezeti probléma',
              cells: [
                'erdőirtás, kőolaj- és földgáz-kitermelés, permafroszt olvadása',
                'a törékeny természet kis regenerálódása, szennyezés, a permafroszt olvadása',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **sarkvidéki öv** (Grönland, Antarktisz és a Jeges-tenger környéke) **állandóan fagyos éghajlatú**: a hőmérséklet egész évben fagypont alatt vagy körül van, jégtakaró borítja, nincs talaj és összefüggő növényzet. Az élővilág a tengerhez kötődik (fókák, jegesmedve, pingvinek), az ember kutató- és bányatelepeken él.',
        },
        { kind: 'heading', text: 'Éghajlati diagramok összehasonlítása' },
        {
          kind: 'text',
          text: 'Három (kitalált) állomás adata. **B**: mediterrán típus; **C**: tajga; **D**: nedves kontinentális (Közép-Európa).',
        },
        {
          kind: 'compare',
          title: 'Három diagram számolt adatai',
          columns: ['Adat', 'B, C, D állomás'],
          rows: [
            {
              label: 'B állomás',
              cells: [
                'havi hőmérséklet: 9,5; 10,5; 12,5; 15,0; 19,0; 23,0; 26,0; 26,0; 22,5; 18,0; 13,5; 10,5 °C',
                'csapadék: 70; 60; 55; 45; 30; 15; 5; 10; 40; 85; 100; 90 mm. Évi közép 17,2 °C, hőingás 16,5 °C, évi csapadék 605 mm; nyáron (június–augusztus) száraz',
              ],
            },
            {
              label: 'C állomás',
              cells: [
                'havi hőmérséklet: −20; −17; −9; 0; 8; 14; 17; 14; 8; 0; −10; −17 °C',
                'csapadék: 25; 20; 20; 25; 40; 60; 70; 70; 50; 40; 35; 30 mm. Évi közép −1,0 °C, hőingás 37 °C, évi csapadék 485 mm; nyári maximum',
              ],
            },
            {
              label: 'D állomás',
              cells: [
                'havi hőmérséklet: −1; 0,5; 5; 10,5; 15,5; 19; 21; 20,5; 16; 10,5; 5; 0,5 °C',
                'csapadék: 30; 30; 30; 45; 60; 70; 60; 55; 40; 35; 45; 40 mm. Évi közép 10,3 °C, hőingás 22 °C, évi csapadék 540 mm; egyenletes eloszlás',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: melyik állomás melyik öv?',
          problem:
            'Indokold a fenti három állomás övét a diagramadatok alapján, és állítsd sorrendbe őket a hőingás szerint!',
          solution:
            '**B**: télen enyhe (a leghidegebb hónap 9,5 °C), nyáron forró (26 °C) és száraz (5–15 mm), a csapadék télen esik: **mediterrán** éghajlat.\n\n**C**: nagyon hideg tél (−20 °C), enyhe nyár, a vegetációs idő rövid, hőingás 37 °C, a csapadék a nyári hónapokban a legtöbb: **tajga** (hideg mérsékelt öv).\n\n**D**: a tél fagypont körüli, a nyár meleg, a csapadék egyenletes, mérsékelt: **nedves kontinentális**, mérsékelten szárazföldi terület (Közép-Európa).\n\nA hőingás sorrendje csökkenően: C (37 °C), D (22 °C), B (16,5 °C).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Diagramok összehasonlítása: melyiknek nagyobb a hőingás, melyik száraz nyarú, hány hónap fagyos.',
            'Öv felismerése diagram vagy kép alapján (mediterrán, óceáni, tajga, tundra, füves puszta).',
            'Egy öv komplex jellemzése: éghajlat, vízrajz, talaj, növényzet, gazdálkodás, környezeti probléma.',
            'Emelt: a kontinentalitás nyugat–keleti változása Eurázsiában.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a **mediterrán** és a **monszun** csapadékeloszlás felcserélése. A mediterrán övben a csapadék **télen** esik, a nyár száraz. A monszunövben a csapadék **nyáron**. Másik hiba: a tajgát és a tundrát összekeverni. A tajgán fák (tűlevelű erdő) vannak, a tundrán nincs fa.',
        },
        {
          kind: 'tip',
          text: 'Öv felismeréséhez tedd fel sorban: **hőmérséklet** (fagy van-e?), **hőingás**, **csapadék mennyisége**, **mikor esik**. Négy kérdés, és kizárhatod az övek többségét.',
        },
      ],
      topicMatch: ['éghajlati diagram', 'sivatagi éghajlat', 'földrajzi övezetesség'],
      quiz: [
        {
          question: 'Mikor esik a legtöbb csapadék a mediterrán éghajlaton?',
          options: ['nyáron', 'egész évben egyenletesen', 'főleg télen', 'csak tavasszal'],
          answer: 2,
          explanation:
            'A mediterrán terület nyara száraz és forró, a csapadék télen esik, ezért nyáron aszály, télen bővizű vízfolyások jellemzőek.',
        },
        {
          question: 'Melyik területre jellemző a mezőségi talaj és a búzatermesztés?',
          options: [
            'óceáni terület',
            'tajga',
            'a szárazföldi terület füves pusztája',
            'a sarkvidéki öv',
          ],
          answer: 2,
          explanation:
            'A száraz kontinentális éghajlatú füves pusztán (Ukrajna, Kazahsztán, az USA Nagy-síksága) a mezőségi talaj termékeny, itt folyik a nagyüzemi búzatermesztés.',
        },
        {
          question: 'Melyik állítás igaz a tajgára?',
          options: [
            'tűlevelű erdő, podzol, permafroszt',
            'keménylombú erdő, terra rossa',
            'mohák, zuzmók, fa nélkül',
            'trópusi esőerdő, laterit',
          ],
          answer: 0,
          explanation:
            'A hideg mérsékelt övben tűlevelű erdő nő, a talaj szürke erdőtalaj (podzol), Szibériában örök fagy is van. A moha-zuzmó a tundra jellemzője.',
        },
        {
          question: 'Mit jelent a „kontinentalitás” növekedése nyugatról keletre Eurázsiában?',
          options: [
            'csökken a hőingás és nő a csapadék',
            'nő a hőingás és csökken a csapadék',
            'mindkettő nő',
            'változatlan marad az éghajlat',
          ],
          answer: 1,
          explanation:
            'Az óceántól távolodva a tél hidegebb, a nyár melegebb (nagyobb hőingás), kevesebb nedvesség jut el, ezért csökken a csapadék.',
        },
        {
          question: 'Melyik a macchia?',
          emelt: true,
          options: [
            'mediterrán cserjés',
            'a szavanna fás szegélye',
            'a tundra mohaszőnyege',
            'a tajga mocsara',
          ],
          answer: 0,
          explanation:
            'A macchia a mediterrán terület kiirtott keménylombú erdejének helyén kialakult cserjés.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Mediterrán éghajlat', url: wiki('Mediterrán éghajlat') },
        { label: 'Wikipédia: Tajga', url: wiki('Tajga') },
        { label: 'Wikipédia: Tundra', url: wiki('Tundra') },
      ],
    },
    {
      id: 'foldtortenet-geoszferak-fejlodese',
      subject: 'foldrajz',
      unitId: 'geoszferak-ovezetesseg',
      title: 'A geoszférák fejlődése, a földtörténet',
      level: 'kozep',
      requirement: {
        kozep:
          'A földtörténeti idő léptékei, a földtörténeti korbeosztás nagy egységei, időrendjük és hozzávetőleges időtartamuk; az egyes időknek meghatározó eseményei, képződményei; a Föld nagyszerkezeti egységeinek kialakulása és átalakulása.',
        emelt:
          'A relatív és abszolút kormeghatározás összehasonlítása; a légkör fejlődése; a vízburok kialakulása; az őskontinensek kialakulása, feldarabolódása és összekapcsolódása; a jégkorszak és az eljegesedések; a geoszférák fejlődésének kötése földtörténeti korokhoz.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Föld kora kb. **4,6 milliárd év**. A földtörténet egységei: **ősidő, előidő, óidő, középidő, újidő**. Az újidő két időszaka: **harmadidőszak** és **negyedidőszak**.',
            'Az idők sorrendje: **ősidő → előidő → óidő → középidő → újidő**.',
            'Hegységképződések: **kaledóniai** (óidő eleje), **variszkuszi** (óidő vége), **eurázsiai** (alpi, újidő) és **pacifikus**.',
            'A negyedidőszak első része a **jégkor (pleisztocén)**, a mai a **jelenkor (holocén)**.',
            'Az **ősföldek (ősmasszívumok)** a Föld legrégebbi, kemény kőzettömbjei, a kontinensek magja.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A földtörténeti időegységek' },
        {
          kind: 'text',
          text: 'A földtörténet léptéke hatalmas: ha a Föld történetét egy napnak képzeled, az ember csak az utolsó pillanatokban jelenik meg. A nagy egységek **idők**, ezek **időszakokra**, azok **korokra** oszlanak.',
        },
        {
          kind: 'compare',
          title: 'A földtörténeti idők (hozzávetőleges időtartam)',
          columns: ['Idő', 'Mikor, mi történt'],
          rows: [
            {
              label: 'Ősidő',
              cells: [
                'kb. 4,6 milliárd évtől kb. 2,5 milliárd évig',
                'a Föld kialakulása, a kéreg kihűlése; őslégkör, ősóceán; az első kőzetmaradványok (ősföldek); az első egyszerű élet (baktériumok)',
              ],
            },
            {
              label: 'Előidő',
              cells: [
                'kb. 2,5 milliárd évtől kb. 540 millió évig',
                'ősföldek kiterjedése, a kékalgák oxigént termelnek; kialakulnak az első sejtmagvasok és többsejtű élőlények',
              ],
            },
            {
              label: 'Óidő',
              cells: [
                'kb. 540 millió évtől kb. 250 millió évig',
                'kaledóniai és variszkuszi hegységképződés; a tengeri gerinctelenek és halak megjelenése, szárazföldi növények, kétéltűek; karbonban kőszénerdők, a perm végén nagy kihalás',
              ],
            },
            {
              label: 'Középidő',
              cells: [
                'kb. 250 millió évtől kb. 66 millió évig',
                'a hüllők kora, dinoszauruszok, az első emlősök és madarak; a Pangea szétesése; a kréta végén (kb. 66 millió éve) nagy kihalás, eltűnnek a dinoszauruszok',
              ],
            },
            {
              label: 'Újidő',
              cells: [
                'kb. 66 millió évtől napjainkig',
                'az emlősök kora; eurázsiai (alpi) és pacifikus hegységképződés; a negyedidőszakban jégkorszakok, az ember megjelenése',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Az újidő két időszaka',
          columns: ['Harmadidőszak', 'Negyedidőszak'],
          rows: [
            {
              label: 'Időtartam',
              cells: ['kb. 66 millió évtől kb. 2,6 millió évig', 'kb. 2,6 millió évtől napjainkig'],
            },
            {
              label: 'Jellemző',
              cells: [
                'az eurázsiai (alpi) hegységképződés fő szakasza: Alpok, Kárpátok, Himalája; az emlősök elterjedése',
                'jégkor (pleisztocén): jégkorszakok és melegebb szakaszok; a jelenkor (holocén) az utolsó kb. 11–12 ezer év',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt: a periódusok sorrendje. **Óidő**: kambrium, ordovícium, szilur, devon, karbon, perm. **Középidő**: triász, jura, kréta. **Újidő**: paleocén, eocén, oligocén, miocén, pliocén (harmadidőszak), majd a pleisztocén és holocén. Jellemzők: kambrium (tengeri gerinctelenek robbanásszerű elterjedése), devon (halak kora, az első szárazföldi gerincesek), karbon (kőszénképző erdők), perm (a perm végén a legnagyobb tömeges kihalás), triász (az első dinoszauruszok), jura (a dinoszauruszok virágkora, az első madarak), kréta (a dinoszauruszok kihalása, virágos növények).',
        },
        { kind: 'heading', text: 'A hegységképződések' },
        {
          kind: 'compare',
          title: 'Hegységképződési ciklusok',
          columns: ['Ciklus', 'Mikor, példák'],
          rows: [
            {
              label: 'Kaledóniai',
              cells: [
                'az óidő elején',
                'Skandináv-hegység, Skót-felföld, az Appalache északi része',
              ],
            },
            {
              label: 'Variszkuszi',
              cells: [
                'az óidő végén',
                'Közép-európai röghegységek (Fekete-erdő, Cseh-medence hegyei), Urál, az Appalache déli része',
              ],
            },
            {
              label: 'Eurázsiai (alpi)',
              cells: [
                'főleg az újidőben (harmadidőszak)',
                'Alpok, Kárpátok, Pireneusok, Kaukázus, Himalája',
              ],
            },
            {
              label: 'Pacifikus',
              cells: [
                'a középidőtől napjainkig',
                'Kordillerák (Sziklás-hegység), Andok, a Csendes-óceán peremi hegységei',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A hegységképződések helyén a Föld **nagyszerkezeti egységei** (ősföldek, a rájuk települt táblás területek, a fiatal lánchegységek) alakultak ki. Az idősebb hegységek (kaledóniai, variszkuszi) már **lepusztultak**, alacsonyak, a fiatal hegységek (alpi, pacifikus) magasak. Ősföldek: Kanadai-pajzs, Balti-pajzs, Szibériai-tábla, Afrika, Dél-Amerika, Ausztrália és India magja.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'őslégkör (elsődleges légkör)',
              text: 'A Föld születése után hidrogénből és héliumból álló burok; a könnyű gázok nagy része elszökött.',
            },
            {
              term: 'ősóceán',
              text: 'A kihűlő Földön a vízgőz kicsapódásából keletkezett első vízburok.',
            },
            {
              term: 'ősföld (ősmasszívum)',
              text: 'A Föld legidősebb, kemény kőzettömbje, a kontinensek stabil magja.',
            },
          ],
        },
        { kind: 'heading', text: 'Emelt: kormeghatározás, légkör, vízburok, őskontinensek' },
        {
          kind: 'compare',
          emelt: true,
          title: 'Relatív és abszolút kormeghatározás',
          columns: ['Relatív (viszonylagos)', 'Abszolút (tényleges)'],
          rows: [
            {
              label: 'Mit ad meg?',
              cells: ['hogy melyik réteg idősebb vagy fiatalabb', 'az életkort években'],
            },
            {
              label: 'Módszer',
              cells: [
                'rétegsorrend, ősmaradványok, vezérkövületek (rövid ideig élő, elterjedt, gyorsan változó fajok)',
                'radioaktív izotópok bomlása (felezési idő), paleomágnesség (a kőzet mágnesezettsége a keletkezés helyét is mutatja)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A légkör fejlődése**: az **elsődleges légkör** (H₂, He) elszökött. A **másodlagos légkör** a vulkáni gázokból alakult ki (vízgőz, CO₂, nitrogén, metán, ammónia), oxigén szinte nem volt benne. Az előidőben a kékalgák fotoszintézise **oxigént** termelt, ez ózonréteget hozott létre, amely védte az életet a UV-sugárzástól, és lehetővé tette a szárazföld meghódítását. A **mai légkör** nitrogénben (kb. 78%) és oxigénben (kb. 21%) gazdag. **A vízburok**: a Föld kihűlésekor a vízgőz kicsapódott, a vizet a vulkáni gázok szolgáltatták (ősóceán).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Őskontinensek**: a középidő elején egyetlen szuperkontinens, a **Pangea** állt, körülötte a **Panthalassza** (ősóceán). A **Tethys** nevű tengeröböl a keleten két részre osztotta. A Pangea a középidőben **Laurázsiára** (északi rész) és **Gondwanára** (déli rész) szakadt, majd szétvált az Atlanti-óceán. Az újidőben a Tethys bezáródásával az eurázsiai hegységek (Alpok, Himalája) kiemelkedtek. A kontinensek mozgása a klímát és az élővilágot is átalakította.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Jégkorszak**: a negyedidőszakban többször váltakozott **glaciális** (eljegesedés) és **interglaciális** (jégkorszakköz) szakasz. Az eljegesedések során a tengerszint süllyedt, a jégtakarók Észak-Európára és az Alpokra terjedtek. Következményei: U alakú völgyek, morénák, tóhátságok, a folyók vízjárása és a növényzet változása; az utolsó eljegesedés kb. 11–12 ezer éve ért véget.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Időrend: állítsd sorba az időket vagy eseményeket (kőszénerdők, dinoszauruszok, alpi hegységképződés).',
            'Párosítás: hegységképződés és hegység (kaledóniai: Skandináv-hegység; variszkuszi: Urál; alpi: Alpok; pacifikus: Andok).',
            'Táblázat vagy ábra: a földtörténeti spirál, melyik időhöz tartozik az esemény.',
            'Emelt: a kormeghatározás módszerei, légkör fejlődése, Pangea szétesése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az **újidőt** és a **középidőt** felcserélni (a dinoszauruszok a középidőben éltek), vagy az alpi hegységképződést a középidőre tenni. Az Alpok, Himalája és Kárpátok **újidei** (harmadidőszaki) keletkezésűek. Az ember és a jégkorszak a **negyedidőszakban** van.',
        },
        {
          kind: 'tip',
          text: 'Jegyezd meg a sorrendet: **ős – elő – ó – közép – új**. Dátumként elég a nagyságrend: 4,6 Mrd; 2,5 Mrd; 540 M; 250 M; 66 M. Az évszámokat a vizsgán „hozzávetőlegesen” kell tudni.',
        },
      ],
      topicMatch: ['földtörténet', 'jégkorszak'],
      quiz: [
        {
          question: 'Melyik a helyes sorrend a legrégebbitől a legújabbig?',
          options: [
            'óidő, előidő, ősidő, újidő, középidő',
            'ősidő, előidő, óidő, középidő, újidő',
            'ősidő, óidő, előidő, középidő, újidő',
            'előidő, ősidő, középidő, óidő, újidő',
          ],
          answer: 1,
          explanation: 'A földtörténet nagy egységei: ősidő, előidő, óidő, középidő, újidő.',
        },
        {
          question: 'Melyik idő alatt éltek a dinoszauruszok?',
          options: ['óidő', 'középidő', 'újidő', 'előidő'],
          answer: 1,
          explanation:
            'A dinoszauruszok a középidő (triász–kréta) uralkodó állatai voltak, a kréta végén (kb. 66 millió éve) tömegesen kihaltak.',
        },
        {
          question: 'Melyik hegységképződés hozta létre az Alpokat?',
          options: ['kaledóniai', 'variszkuszi', 'eurázsiai (alpi)', 'a Pangea előtti'],
          answer: 2,
          explanation:
            'Az Alpok, a Kárpátok és a Himalája az eurázsiai (alpi) hegységképződés fő szakaszában, főleg az újidőben (harmadidőszak) emelkedtek ki.',
        },
        {
          question: 'Melyik időszak jellemzője a jégkor (pleisztocén)?',
          options: ['harmadidőszak', 'negyedidőszak', 'perm', 'kréta'],
          answer: 1,
          explanation:
            'A pleisztocén a negyedidőszak első, hosszabb szakasza, ekkor váltakoztak a jégkorszakok.',
        },
        {
          question: 'Mit jelent az abszolút kormeghatározás?',
          emelt: true,
          options: [
            'a rétegek sorrendjének megállapítása',
            'az életkor megadása években, pl. radioaktív izotópokkal',
            'a vezérkövületek vizsgálata',
            'a kőzet színének vizsgálata',
          ],
          answer: 1,
          explanation:
            'Az abszolút kormeghatározás a radioaktív izotópok bomlása alapján években adja meg az életkort, a relatív csak az időrendet (idősebb–fiatalabb).',
        },
      ],
      sources: [
        { label: 'Wikipédia: Földtörténet', url: wiki('Földtörténet') },
        { label: 'Wikipédia: Pangea', url: wiki('Pangea') },
        { label: 'Wikipédia: Hegységképződés', url: wiki('Hegységképződés') },
      ],
    },
  ],
};

export default unit;
