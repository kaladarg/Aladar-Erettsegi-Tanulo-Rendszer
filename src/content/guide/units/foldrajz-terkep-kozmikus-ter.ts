import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 1 (Tájékozódás a földrajzi térben) and 2 (Tájékozódás a kozmikus térben és az időben). */
const unit: GuideUnit = {
  id: 'terkep-kozmikus-ter',
  subject: 'foldrajz',
  order: 10,
  title: 'Térkép, kozmikus tér és időszámítás',
  requirementRef:
    '1. Tájékozódás a földrajzi térben (1.1 A térkép; 1.2 Tájékozódás a térképen és a térképpel; 1.3 Távérzékelés és térinformatika); 2. Tájékozódás a kozmikus térben és az időben (2.1 A Világegyetem; 2.2 A Nap és kísérői; 2.3 A Föld és mozgásai; 2.4 Az űrkutatás)',
  intro:
    'Hogyan igazodsz el a térképen, a fokhálózaton és a világűrben? Méretarány és távolság, földrajzi koordináták, távérzékelés és GPS; a Világegyetem, a Naprendszer és a Hold; a Föld mozgásai, az évszakok, a helyi idő és a zónaidő, emelt szinten a delelési magasság, a dátumválasztó vonal és az űrkutatás. A számítási feladatokat lépésről lépésre gyakorolhatod.',
  requirementSource:
    'A követelmények, a fogalmak és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (1. és 2. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'természeti környezet',
        'társadalmi környezet',
        'földrajzi környezet',
        'térkép',
        'földgömb',
        'méretarány',
        'vonalas aránymérték',
        'jelkulcs',
        'topográfiai, földrajzi és tematikus térkép',
        'atlasz',
        'kis, közepes és nagy méretarányú térkép',
        'szintvonalas, színfokozatos, árnyékolásos domborzatábrázolás',
        'tényleges és viszonylagos földrajzi fekvés',
        'tengerszint feletti magasság',
        'magassági szám',
        'abszolút és relatív magasság',
        'földrajzi fokhálózat',
        'szélességi kör',
        'hosszúsági kör',
        'északi, déli, keleti és nyugati félgömb',
        'keresőhálózat',
        'fő- és mellékvilágtájak',
        'távérzékelés',
        'légi és űrfelvétel',
        'műhold',
        'globális helymeghatározó rendszer (GPS)',
        'Greenwich',
        'Sarkcsillag',
        'fényév',
        'csillagászati egység (CSE)',
        'csillag',
        'bolygó',
        'csillagrendszer (galaxis)',
        'csillagkép',
        'nap- és holdfogyatkozás',
        'holdfázisok (újhold, első negyed, holdtölte/telihold, utolsó negyed)',
        'nagybolygó',
        'kőzetbolygó (Föld-típusú bolygó)',
        'gázbolygó (Jupiter-típusú bolygó)',
        'gyűrűrendszer',
        'hold',
        'törpebolygó',
        'kisbolygó (aszteroida)',
        'üstökös',
        'meteoroid',
        'meteor',
        'meteorit',
        'bolygóközi anyag',
        'tengely körüli forgás',
        'eltérítő erő (Coriolis-erő)',
        'Nap körüli keringés',
        'nap',
        'napszakok',
        'év',
        'napi és évi időszámítás',
        'helyi idő',
        'zónaidő',
        'időzóna',
        'napév',
        'naptári év',
        'szökőév',
        'ekliptika',
        'tengelyferdeség',
        'tavaszi és őszi nap-éj egyenlőség',
        'nyári és téli napforduló',
        'csillagászati évszakok (tavasz, nyár, ősz, tél)',
        'Világegyetem (Univerzum)',
        'Tejútrendszer (Galaktika, Galaxis)',
        'Naprendszer',
        'Nap',
        'Hold',
        'Merkúr',
        'Vénusz',
        'Föld',
        'Mars',
        'Jupiter',
        'Szaturnusz',
        'Uránusz',
        'Neptunusz',
        'Plútó',
        'Nagy Göncöl',
        'Kis Göncöl',
      ],
      emelt: [
        'sík-, henger- és kúpvetület',
        'síkrajz',
        'domborzatrajz',
        'névrajz',
        'földrajzi (csillagászati) és mágneses északi irány',
        'mágneses deklináció',
        'passzív és aktív távérzékelés',
        'valós színes és hamis színes felvétel',
        'felbontóképesség',
        'földrajzi információs rendszer (GIS)',
        'ősrobbanás',
        'a bolygók mozgástörvényei',
        'a Nap gömbhéjai (mag, sugárzási öv, áramlási öv, fotoszféra, kromoszféra, napkorona)',
        'plazma',
        'magfúzió (termonukleáris folyamat)',
        'napkitörés',
        'napszél',
        'napfolt',
        'sarki fény',
        'naptevékenység',
        'holdtenger',
        'meteoritkráter',
        'az üstökös részei (mag, kóma, csóva)',
        'forgási ellipszoid',
        'földalak (geoid)',
        'zenit',
        'valódi napidő',
        'helyi középnapidő',
        'világidő',
        'delelési magasság',
        'dátumválasztó vonal',
        'űrállomás',
        'űrszonda',
        'űrtávcső',
        'űrhajó',
        'űrrepülőgép (űrsikló)',
        'űrszemét',
        'exobolygó',
        'Johannes Kepler',
        'Jurij Gagarin',
        'Neil Armstrong',
        'Bay Zoltán',
        'Farkas Bertalan',
        'Juliánus-naptár',
        'Gergely-naptár',
      ],
    },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'terkep-meretarany-domborzatabrazolas',
      subject: 'foldrajz',
      unitId: 'terkep-kozmikus-ter',
      title: 'A térkép: méretarány, jelek és domborzatábrázolás',
      level: 'kozep',
      requirement: {
        kozep:
          'A méretarány és az ábrázolt terület nagysága, valamint az ábrázolás részletessége közötti kapcsolat; a domborzatábrázolás különböző módszerei; domborzati formák felismerése térképen; a földrajzi fokhálózat jellemzői; térképvázlat készítése jelrendszerrel.',
        emelt:
          'A vetület fogalma és a legelterjedtebb vetülettípusok, jellemzőik összehasonlítása.',
      },
      minutes: 25,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **térkép** a Föld felszínének (vagy egy részének) kicsinyített, síkba rajzolt, jelekkel készített képe. A **földgömb** a Föld torzításmentes, kicsinyített modellje.',
            '**Méretarány** $1:M$: a térképen mért 1 cm a valóságban $M$ cm. Minél kisebb az $M$, annál **nagyobb** a méretarány: kisebb terület, részletesebb ábrázolás.',
            '**Nagy méretarányú** térkép (pl. 1:10 000): kis terület, sok részlet. **Kis méretarányú** térkép (pl. 1:10 000 000): nagy terület, kevés részlet.',
            '**Domborzatábrázolás**: szintvonalas, színfokozatos és árnyékolásos módszer. A szintvonal az azonos tengerszint feletti magasságú pontokat köti össze; ahol sűrű, ott meredek a lejtő.',
            'Térképtípusok: **topográfiai** (részletes, pontos), **földrajzi** (atlaszok áttekintő térképe) és **tematikus** (egy téma, pl. népsűrűség, éghajlat).',
            'A **jelkulcs** megmondja, mit jelölnek a jelek és színek; a **vonalas aránymérték** a méretarányt rajzban adja meg, ezért nagyításkor is helyes marad.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a térkép, mi a földgömb?' },
        {
          kind: 'text',
          text: 'A **földgömb** alakhű, de kicsinyített, ezért nehezen kezelhető, és részletek ábrázolására alkalmatlan. A **térkép** síkban ábrázolja a felszínt, ezért kényelmesen használható, de a gömbfelület síkba terítése mindig **torzít**. A torzítás mértéke függ a méretaránytól és (emelt szinten) a vetülettől.',
        },
        {
          kind: 'text',
          text: 'A térképen a **földrajzi környezetet** látod: a **természeti környezet** (domborzat, vizek, éghajlat, növényzet) és a **társadalmi környezet** (települések, utak, határok, gazdasági létesítmények) együttesét.',
        },
        { kind: 'heading', text: 'Méretarány és az ábrázolás részletessége' },
        {
          kind: 'text',
          text: 'A méretarány megmutatja, hányszor kisebb a térkép a valóságnál. Az 1:50 000 azt jelenti, hogy 1 cm a térképen 50 000 cm = 500 m = 0,5 km a valóságban. Három fajta megadása van: **számmal** (1:50 000), **vonalas aránymértékkel** (szakasz, melyre fel van írva a valós hossz) és szóban ("1 cm 500 m").',
        },
        {
          kind: 'compare',
          title: 'Nagy és kis méretarányú térkép',
          columns: ['Nagy méretarányú (pl. 1:10 000)', 'Kis méretarányú (pl. 1:10 000 000)'],
          rows: [
            {
              label: 'Ábrázolt terület',
              cells: ['kicsi (egy falu, egy városrész)', 'nagy (ország, kontinens)'],
            },
            {
              label: 'Részletesség',
              cells: ['nagy, sok részletet mutat', 'kicsi, csak a lényeget mutatja'],
            },
            { label: 'Torzítás', cells: ['elhanyagolható', 'jelentős lehet'] },
            {
              label: 'Tipikus példa',
              cells: ['turistatérkép, várostérkép', 'atlasz világtérképe'],
            },
          ],
        },
        {
          kind: 'warning',
          text: 'A "nagy" és a "kis" a **tört** nagyságára vonatkozik, nem a szám nagyságára. Az 1:10 000 méretarány **nagyobb**, mint az 1:100 000, mert $\\frac{1}{10\\,000} > \\frac{1}{100\\,000}$. A leggyakoribb tévedés, hogy az 1:100 000-et tartják nagyobbnak.',
        },
        { kind: 'heading', text: 'Térképtípusok' },
        {
          kind: 'terms',
          items: [
            {
              term: 'topográfiai térkép',
              text: 'nagy méretarányú, a terep részleteit pontosan mutatja (síkrajz, domborzat, feliratok); turisztikai és katonai használatra is alkalmas.',
            },
            {
              term: 'földrajzi térkép',
              text: 'kis méretarányú, a földrajzi elemek (domborzat, vizek, települések, országhatárok) áttekintő képe; az atlaszok legtöbb térképe ilyen.',
            },
            {
              term: 'tematikus térkép',
              text: 'egy téma eloszlását mutatja (pl. éghajlati övezetek, népsűrűség, ipar, talajtípusok), a topográfiai alap csak háttér.',
            },
            {
              term: 'atlasz',
              text: 'térképek rendszerezett gyűjteménye; az érettségin a II. feladatlaphoz középiskolai földrajzi atlaszt használhatsz.',
            },
          ],
        },
        { kind: 'heading', text: 'A domborzat ábrázolása' },
        {
          kind: 'compare',
          title: 'Három módszer',
          columns: ['Mit mutat?', 'Előnye / hátránya'],
          rows: [
            {
              label: 'Szintvonalas',
              cells: [
                'az azonos tengerszint feletti magasságú pontokat összekötő vonalak; a szomszédos vonalak közti magasságkülönbség a szintköz',
                'pontosan leolvasható a magasság és a lejtés; gyakorlatlan szemnek nem szemléletes',
              ],
            },
            {
              label: 'Színfokozatos',
              cells: [
                'a magassági (vagy mélységi) sávokat különböző színek jelölik, atlaszban a tengerszint alatt kék, alacsonyan zöld, magasabban sárga, barna',
                'szemléletes, de csak sávonként ad magasságot',
              ],
            },
            {
              label: 'Árnyékolásos',
              cells: [
                'a lejtőket oldalról megvilágítva ábrázolják, a nap felé néző oldal világos, a másik sötét',
                'plasztikus kép, de magasság nem olvasható le belőle',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A szintvonalak **sűrűsége** a lejtő meredekségét mutatja: sűrű szintvonalak meredek lejtőt, ritkák enyhe lejtőt jeleznek. Zárt, egymásba rajzolt szintvonalak **hegycsúcsot** vagy **dombot** (a belső a legmagasabb), mélyedést is jelölhetnek (ilyenkor lejtő felé mutató rövid vonalkák vagy a számok jelzik, melyik a mélyebb). A **völgyben** a szintvonalak V alakban a magasabb terület felé, a **hátban (gerincen)** a mélyebb terület felé hajlanak.',
        },
        {
          kind: 'text',
          text: 'A térképen szereplő magasságot a **magassági szám** adja meg (pl. csúcs mellett: 1014). Ez **abszolút magasság**, azaz tengerszint feletti magasság. A **relatív magasság** két pont közti magasságkülönbség (két hely tengerszint feletti magasságának különbsége, lásd a következő leckét).',
        },
        { kind: 'heading', text: 'A földrajzi fokhálózat' },
        {
          kind: 'text',
          text: 'A fokhálózat a Föld felszínének pontos helymeghatározására szolgáló gondolatban megrajzolt hálózat. Része a **szélességi körök** (az Egyenlítővel párhuzamos körök, 0°-tól 90°-ig az északi és a déli sark felé) és a **hosszúsági körök** (a sarkokat összekötő félkörök, más néven délkörök vagy meridiánok). A 0°-os hosszúsági kör a londoni **Greenwich**-en halad át. Az Egyenlítő északi és déli, a 0° és 180°-os hosszúsági körök pedig keleti és nyugati félgömbre osztják a Földet.',
        },
        {
          kind: 'keypoints',
          title: 'A fokhálózat jellemzői',
          items: [
            'A szélességi körök **párhuzamosak** egymással, és az Egyenlítőtől a sarkok felé egyre rövidebbek.',
            'A hosszúsági körök a sarkokban **összefutnak**, az Egyenlítőnél vannak a legtávolabb egymástól.',
            'Az Egyenlítő hossza kb. 40 000 km, egy hosszúsági kör félköre kb. 20 000 km.',
            'A fokhálózat a térképen a vetülettől függően lehet derékszögű rács vagy íves vonalak rendszere.',
          ],
        },
        {
          kind: 'text',
          text: 'A **keresőhálózat** (az atlasz tárgymutatójának betű-szám rácsa, pl. D3) a települések, hegységek gyors megtalálására szolgál; nem azonos a fokhálózattal.',
        },
        { kind: 'heading', text: 'Kidolgozott példák: méretarány és távolság' },
        {
          kind: 'example',
          title: 'Távolság a térképen, kiszámítva a valóságba',
          problem:
            'Az 1:50 000 méretarányú térképen két település légvonalban 4,2 cm-re van egymástól. Hány km a valós távolságuk?',
          solution:
            'A valós távolság: $4{,}2\\ \\text{cm} \\cdot 50\\,000 = 210\\,000\\ \\text{cm}$.\n\nÁtváltás: $210\\,000\\ \\text{cm} = 2100\\ \\text{m} = 2{,}1\\ \\text{km}$.\n\nÜgyelj az átváltásra: 100 000 cm = 1 km, tehát elég a cm-ben kapott számot 100 000-rel osztani.',
        },
        {
          kind: 'example',
          title: 'Távolság a valóságból a térképre',
          problem:
            'Két város közötti valós távolság 18 km. Hány cm-re lesz egymástól az 1:300 000 méretarányú térképen?',
          solution:
            '$18\\ \\text{km} = 1\\,800\\,000\\ \\text{cm}$, ezt osztjuk 300 000-rel: $\\frac{1\\,800\\,000}{300\\,000} = 6\\ \\text{cm}$.',
        },
        {
          kind: 'example',
          title: 'A méretarány meghatározása',
          problem:
            'Egy térképen 3 cm-es szakasz 12 km valós távolságot ábrázol. Mekkora a térkép méretaránya?',
          solution:
            '1 cm a térképen $\\frac{12}{3} = 4\\ \\text{km} = 400\\,000\\ \\text{cm}$ a valóságban, így a méretarány **1:400 000**.',
        },
        {
          kind: 'example',
          title: 'Ugyanaz a távolság két térképen',
          problem:
            'Ugyanazt a két települést az egyik térképen 8 cm, a másikon 2 cm távolságra találod. Az elsőn a méretarány 1:50 000. Mekkora a másikon?',
          solution:
            'A valós távolság: $8 \\cdot 50\\,000 = 400\\,000\\ \\text{cm} = 4\\ \\text{km}$.\n\nA második térképen 2 cm felel meg ennek: $\\frac{400\\,000}{2} = 200\\,000$, tehát a méretarány **1:200 000**. A második térkép **négyszer kisebb** méretarányú, mint az első ($200\\,000 : 50\\,000 = 4$).',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Terület számítása a méretarány felhasználásával',
          problem:
            'Az 1:25 000 méretarányú térképen egy téglalap alakú tó 4 cm hosszú és 3 cm széles. Mekkora a valós területe?',
          solution:
            'Oldalak a valóságban: $4 \\cdot 25\\,000 = 100\\,000\\ \\text{cm} = 1\\ \\text{km}$ és $3 \\cdot 25\\,000 = 75\\,000\\ \\text{cm} = 0{,}75\\ \\text{km}$. Terület: $1 \\cdot 0{,}75 = 0{,}75\\ \\text{km}^2$.\n\nEllenőrzés: a térképi terület $12\\ \\text{cm}^2$; 1 cm² a térképen $25\\,000^2 = 6{,}25 \\cdot 10^8\\ \\text{cm}^2 = 0{,}0625\\ \\text{km}^2$, így $12 \\cdot 0{,}0625 = 0{,}75\\ \\text{km}^2$.\n\nA terület a méretarány **négyzetével** arányos. A leggyakoribb hiba, hogy a területet is csak az oldalarányos szorzóval számolják (25 000-rel).',
        },
        {
          kind: 'text',
          text: 'A **görbe vonal** (folyó, út, vasút) hosszát cérnával, finom drótdarabbal vagy térképmérővel (kurvimeterrel) méred: a vonalat követve mérd le, majd egyenesítsd ki és mérd meg vonalzóval, a végén használd a méretarányt.',
        },
        { kind: 'heading', text: 'Vetületek (emelt)' },
        {
          kind: 'text',
          emelt: true,
          text: 'A gömbfelületet síkba teríteni nem lehet torzítás nélkül, ezért a térképet **vetítéssel** készítik. A vetület azt mondja meg, hogyan feleltetjük meg a gömb pontjait a síknak. Három alapvető típusa: **síkvetület** (a Föld egy pontján érintő sík), **hengervetület** (a Földet az Egyenlítő mentén érintő henger palástjára vetítjük) és **kúpvetület** (a Földet egy szélességi kör mentén érintő kúp palástjára vetítjük). A torzítás csökkenthető, de nem szüntethető meg: egyetlen vetületben sem lehet egyszerre minden hossz, szög és terület helyes.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A legelterjedtebb vetülettípusok',
          columns: ['Hol torzít kevésbé?', 'Mire használják?'],
          rows: [
            {
              label: 'Síkvetület',
              cells: [
                'az érintési pont (pl. a pólus) környékén',
                'sarkvidéki térképek, légiforgalmi térképek',
              ],
            },
            {
              label: 'Hengervetület',
              cells: [
                'az Egyenlítő környékén; a sarkok felé a torzítás nagy (a szélességi körök egyforma hosszúak lesznek)',
                'világtérképek, trópusi területek, tengerészeti térképek',
              ],
            },
            {
              label: 'Kúpvetület',
              cells: [
                'az érintő szélességi kör mentén',
                'mérsékelt övi országok, kisebb területek (pl. Európa vagy Magyarország térképei)',
              ],
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'síkrajz',
              text: 'a térkép tartalmi eleme: vízrajz, települések, utak, határok, növényzet és más, nem a domborzathoz tartozó jelek.',
            },
            {
              term: 'domborzatrajz',
              text: 'a felszín formáinak ábrázolása (szintvonalak, színfokozat, árnyékolás, magassági számok).',
            },
            {
              term: 'névrajz',
              text: 'a térkép feliratai: földrajzi nevek, magassági és mélységi számok, a településnevek.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. feladatlap: **méretarány-számítás** (távolság a térképről, méretarány kiszámítása, a térképek összehasonlítása), atlaszban vagy képen **szintvonalas térkép** olvasása.',
            'Tesztkérdés: melyik térkép a legrészletesebb, melyiknek nagyobb a méretaránya; domborzati forma felismerése szintvonalakról.',
            'Szóbeli: a tétel első felében a térkép típusai, jelei, domborzatábrázolás; a számításhoz atlasz és vonalzó használható.',
            'Emelt szinten: a vetület és típusainak összehasonlítása, területszámítás méretarány alapján.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: a cm-m-km átváltás elrontása (1 km = 100 000 cm); a méretarány "nagy" és "kis" jelzőjének felcserélése; területnél a méretarány négyzetre emelésének kihagyása; a mértékegység elhagyása a válaszból.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz-vázlat ("Hasonlítsd össze a két térképet"): 1. melyiknek nagyobb a méretaránya (nagyobb tört); 2. mekkora területet mutat; 3. mennyire részletes; 4. melyik pontosabb a távolság és a terület mérésére.',
        },
      ],
      topicMatch: [
        'méretarány',
        'térképi ismeretek',
        'domborzatábrázolás',
        'térképészet',
        'vetületek',
        'szintvonalak',
        'térképolvasás',
        'térképelemzés',
      ],
      quiz: [
        {
          question: 'Melyik a legnagyobb méretarányú térkép?',
          options: ['1:500 000', '1:10 000', '1:1 000 000', '1:100 000'],
          answer: 1,
          explanation:
            'A legnagyobb tört, az 1:10 000 a legnagyobb méretarány, mert ott a legkisebb a szám az "1:" után. Ez ábrázolja a legkisebb területet a legnagyobb részletességgel.',
        },
        {
          question:
            'Az 1:200 000 méretarányú térképen két város között 7,5 cm a távolság. Mekkora a valós távolság?',
          options: ['1,5 km', '150 km', '15 km', '1500 km'],
          answer: 2,
          explanation: '$7{,}5 \\cdot 200\\,000 = 1\\,500\\,000\\ \\text{cm} = 15\\ \\text{km}$.',
        },
        {
          question: 'Mit mutat meg a szintvonalak sűrűsége?',
          options: [
            'A hely tengerszint feletti magasságát.',
            'A terület nagyságát.',
            'A felszín meredekségét.',
            'A terület talajtípusát.',
          ],
          answer: 2,
          explanation:
            'Sűrű szintvonalak között kicsi a vízszintes távolság ugyanakkora magasságkülönbségnél, ezért meredek a lejtő. A magasságot a szintvonalra írt szám adja.',
        },
        {
          question: 'Melyik állítás igaz a kis méretarányú térképre?',
          options: [
            'Kis területet ábrázol sok részlettel.',
            'Nagy területet ábrázol kevés részlettel.',
            'Mindig topográfiai térkép.',
            'Csak szintvonalakkal ábrázol domborzatot.',
          ],
          answer: 1,
          explanation:
            'A kis méretarányú térkép (pl. az atlasz világtérképe) nagy területet mutat, ezért csak a lényeges elemeket tudja ábrázolni.',
        },
        {
          question:
            'Az 1:25 000 méretarányú térképen egy 12 cm² területű erdő hány km²-nek felel meg a valóságban?',
          options: ['0,75 km²', '3 km²', '7,5 km²', '0,3 km²'],
          answer: 0,
          explanation:
            '1 cm² a térképen $0{,}0625\\ \\text{km}^2$ (a méretarány négyzetével arányos), így $12 \\cdot 0{,}0625 = 0{,}75\\ \\text{km}^2$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Térkép', url: wiki('Térkép') },
        { label: 'Wikipédia: Méretarány', url: wiki('Méretarány térkép') },
        { label: 'Wikipédia: Szintvonal', url: wiki('Szintvonal') },
      ],
    },
    {
      id: 'tajekozodas-terkepen-taverzekeles',
      subject: 'foldrajz',
      unitId: 'terkep-kozmikus-ter',
      title: 'Tájékozódás: koordináták, távolság, távérzékelés és GPS',
      level: 'kozep',
      requirement: {
        kozep:
          'A térkép jelei, színei, számai által közölt információk értelmezése; információk leolvasása különböző méretarányú és tartalmú térképekről, keresztmetszetekről, tömbszelvényekről; tematikus térképek összehasonlítása; a viszonylagos magasság kiszámítása; távolság mérése térképi egyenes és görbe vonal mentén; helymeghatározás és tájékozódás; a légi és űrfelvételek felhasználása; a GPS működési elve és jelentősége.',
        emelt:
          'Távolság meghatározása az Egyenlítő vagy valamely hosszúsági kör mentén a fokhálózat segítségével; területszámítás a méretarány felhasználásával; szintvonalas térkép azonosítása keresztmetszet alapján; a Föld háromdimenziós megjelenítése számítógépes programmal; a műholdfelvételek készítésének elve és típusai; a GIS szerepe.',
      },
      minutes: 30,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Egy hely **földrajzi koordinátái**: földrajzi szélesség (az Egyenlítőtől északra vagy délre, 0–90°) és földrajzi hosszúság (Greenwichtől keletre vagy nyugatra, 0–180°). Budapest kb. 47,5° é. sz., 19° k. h.',
            '**Tényleges földrajzi fekvés**: koordináták. **Viszonylagos földrajzi fekvés**: más tájakhoz, országokhoz, vizekhez viszonyítva ("a Balatontól északra").',
            '**Viszonylagos (relatív) magasság** = a magasabb pont magassága $-$ az alacsonyabb pont magassága.',
            'Világtájak: **főirányok** (É, K, D, Ny) és **mellékirányok** (ÉK, DK, DNy, ÉNy).',
            '**Távérzékelés**: tárgyak vizsgálata érintkezés nélkül, repülőgépről vagy műholdról készült felvételek alapján. **GPS**: műholdas helymeghatározás, legalább négy műhold jelei alapján.',
            'Emelt szinten az Egyenlítő vagy egy hosszúsági kör mentén 1° kb. **111 km**.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Helymeghatározás a fokhálózaton' },
        {
          kind: 'text',
          text: 'A **földrajzi szélesség** ($\\varphi$) az Egyenlítő síkjától mért szög: északon + (é. sz.), délen − (d. sz.), legfeljebb 90°. A **földrajzi hosszúság** ($\\lambda$) a Greenwichi kezdő hosszúsági körtől mért szög: keletre k. h., nyugatra ny. h., legfeljebb 180°. Magyarország az északi és a keleti félgömbön fekszik.',
        },
        {
          kind: 'compare',
          title: 'Mely félgömbökön fekszik?',
          columns: ['Félgömb', 'Mi dönti el?'],
          rows: [
            {
              label: 'Északi / déli',
              cells: ['é. sz. / d. sz.', 'az Egyenlítőtől északra vagy délre van'],
            },
            {
              label: 'Keleti / nyugati',
              cells: [
                'k. h. / ny. h.',
                'a 0° és a 180° hosszúsági kör szerint (Greenwichtől keletre vagy nyugatra)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az érettségin a térképen (atlaszban) megadott koordinátájú pontot **meg kell találnod**, vagy egy ismert pont koordinátáit **le kell olvasnod**. Atlaszban a hosszúsági és szélességi körök fokokban vannak megszámozva.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: félgömb és koordináta',
          problem:
            'Egy hely koordinátái 35° d. sz. és 70° ny. h. Melyik félgömbökön fekszik? Hol van az ellentétes helyzetű (azonos számú, de ellenkező előjelű) pont koordinátája?',
          solution:
            'Déli szélesség: **déli félgömb**; nyugati hosszúság: **nyugati félgömb**.\n\nAz azonos számú, ellenkező előjelű pont: 35° é. sz. és 70° k. h., az **északi és keleti félgömbön**. Az atlaszban a két pont az Egyenlítőre és a Greenwichi meridiánra "tükrözve" van.',
        },
        {
          kind: 'text',
          text: 'Az **északi irányt** a térképek általában a lap teteje felé mutatják. A Sarkcsillag az északi égbolton a Föld forgástengelyének északi meghosszabbítása közelében áll: ezért az északi félgömbön közelítőleg az északi irányt mutatja. A Kis Göncöl (Kis Medve) végén található. A Nagy Göncöl két "hátsó" csillagát összekötő egyenest kb. ötszörösen meghosszabbítva a Sarkcsillaghoz jutsz. A Sarkcsillag horizont feletti magassága az északi félgömbön **megegyezik a megfigyelő földrajzi szélességével** (Magyarországon kb. 46–48°).',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Földrajzi és mágneses észak',
          columns: ['Földrajzi (csillagászati) észak', 'Mágneses észak'],
          rows: [
            {
              label: 'Mit jelent?',
              cells: [
                'az északi földrajzi pólus (a forgástengely) iránya',
                'az iránytű tűje által mutatott irány (a Föld mágneses terének iránya)',
              ],
            },
            { label: 'Változik?', cells: ['nem', 'lassan, a hely és az idő szerint változik'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kettő közti szög a **mágneses deklináció**. Az iránytűvel mért irányt a deklináció értékével korrigálni kell, ha pontosan a földrajzi északhoz akarsz viszonyítani.',
        },
        { kind: 'heading', text: 'Mérés a térképen: magasság és távolság' },
        {
          kind: 'example',
          title: 'Kidolgozott példa: viszonylagos magasság',
          problem:
            'Egy hegy csúcsának magassági száma 312 m, a lábánál lévő tó szintje 105 m. Mekkora a hegy viszonylagos magassága a tóhoz képest? Mekkora a lejtő átlagos lejtése, ha a térképen mért vízszintes távolság 2,5 km?',
          solution:
            'Viszonylagos magasság: $312 - 105 = 207\\ \\text{m}$.\n\nA lejtés: $\\frac{207\\ \\text{m}}{2500\\ \\text{m}} \\approx 0{,}083$, azaz kb. 8,3% (kb. $4{,}7^\\circ$).',
        },
        {
          kind: 'text',
          text: '**Keresztmetszet** (domborzati metszet): a terep függőleges metszete egy kiválasztott vonal mentén; magassága általában eltúlzott (az ábrázolt függőleges méretarány nagyobb a vízszintesnél). **Tömbszelvény**: térbeli, perspektivikus kép, melyen a felszín a szelvény oldalán metszetben is látszik. Az érettségin ezekből kell információkat leolvasni (pl. a hegy magassága, a lejtő iránya, a folyó helye).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** azt is kérik, hogy szintvonalas térképhez **keresztmetszetet válassz** (vagy fordítva): a metszővonal mentén leolvasod, hol keresztezi az adott magasságú szintvonalakat, és ezeket a magasságokat sorban ábrázolod. Hasonlóan kell értelmezned a számítógépes **3D-s felszínmodellt** is.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'abszolút magasság',
              text: 'a tengerszint feletti magasság (magassági szám a térképen).',
            },
            {
              term: 'relatív magasság',
              text: 'két pont, illetve a pont és környezete közti magasságkülönbség.',
            },
          ],
        },
        { kind: 'heading', text: 'Távolság az Egyenlítő vagy egy hosszúsági kör mentén' },
        {
          kind: 'text',
          emelt: true,
          text: 'Az Egyenlítő hossza kb. 40 000 km, és 360 foktól áll. Így **1° ívhossza az Egyenlítő mentén**: $\\frac{40\\,000}{360} \\approx 111\\ \\text{km}$. Ugyanennyi 1° a **hosszúsági körök** (meridiánok) mentén is, mert a Föld kb. gömb alakú, és a meridián is kb. 40 000 km. A számításhoz tehát elég megszámolnod, hány fok a két pont közti szögtávolság.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: távolság az Egyenlítő mentén',
          problem:
            'Két egyenlítői pont földrajzi hosszúsága 0° és 45° k. h. Milyen messze vannak egymástól? A Föld egyenlítői kerülete 40 000 km.',
          solution:
            'A szögkülönbség: $45^\\circ - 0^\\circ = 45^\\circ$.\n\nA távolság: $45 \\cdot \\frac{40\\,000}{360} = 45 \\cdot 111{,}1 = 5000\\ \\text{km}$.\n\nMásképp: a kör $\\frac{45}{360} = \\frac{1}{8}$ része, $\\frac{40\\,000}{8} = 5000\\ \\text{km}$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: távolság hosszúsági kör mentén',
          problem:
            'Két pont ugyanazon a hosszúsági körön van, az egyik 40° é. sz., a másik 50° é. sz. Milyen messze vannak egymástól?',
          solution:
            'Szögkülönbség: $50^\\circ - 40^\\circ = 10^\\circ$. Távolság: $10 \\cdot 111{,}1 \\approx 1111\\ \\text{km}$.\n\nHa a két pont a két félgömbön van (pl. 20° é. sz. és 15° d. sz.), a szélességeket **össze kell adnod**: $20^\\circ + 15^\\circ = 35^\\circ$, azaz $35 \\cdot 111{,}1 \\approx 3889\\ \\text{km}$. Gyakori hiba, hogy kivonják őket.',
        },
        { kind: 'heading', text: 'Távérzékelés' },
        {
          kind: 'text',
          text: 'A **távérzékelés** olyan megfigyelés, amelynél a vizsgált tárggyal nincs közvetlen érintkezés: a Föld felszínét **légi felvételekről** (repülőgép, drón) és **űrfelvételekről** (**műholdak**) tanulmányozzuk. A felvételek a visszavert vagy kisugárzott elektromágneses sugárzást rögzítik.',
        },
        {
          kind: 'keypoints',
          title: 'Mire használják?',
          items: [
            'Térképek készítése és frissítése, településfejlődés (városok terjeszkedése) követése.',
            'Mezőgazdaság és erdészet: termés- és állapotbecslés, erdőirtás, erdőtűz.',
            'Természeti katasztrófák: árvíz, belvíz, vulkánkitörés, aszály követése és kárfelmérés.',
            'Környezeti változások: gleccserek visszahúzódása, tavak zsugorodása, szennyezések.',
            'Időjárás-előrejelzés, felhőzet és viharok követése.',
          ],
        },
        {
          kind: 'text',
          text: 'Az érettségin légi vagy műholdfelvételt kell **térképpel összevetni**: azonosítod a folyót, a települést, az erdőt, a szántót, a repülőteret, a víztározót; két időpont felvételét összehasonlítva felismered a változást (pl. kiszáradó tó, növekvő város), és következtetést vonsz le belőle.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Passzív és aktív távérzékelés',
          columns: ['Passzív', 'Aktív'],
          rows: [
            {
              label: 'Működése',
              cells: [
                'a Nap sugárzásának visszaverődését vagy a tárgyak saját sugárzását érzékeli',
                'a berendezés maga bocsát ki jelet (pl. radar, lézer), és a visszavert jelet méri',
              ],
            },
            {
              label: 'Példa',
              cells: [
                'közönséges fényképezőgép, infravörös kamera',
                'radar: éjszaka és felhőn át is "lát"',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **valós színes** felvétel a szemünknek természetes színeket mutat. A **hamis színes** felvétel a nem látható (pl. közeli infravörös) tartományokat kódolja látható színekkel; ezen az élő növényzet általában vörös árnyalatú, ezért jól elkülöníthető a vízfelülettől, az épített környezettől. A **felbontóképesség** azt adja meg, mekkora a legkisebb megkülönböztethető részlet (pl. egy képpont a felszínen 10 m-es négyzetet jelent). A nagyobb felbontású felvétel részletesebb, de kisebb területet fed le.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **földrajzi információs rendszer (GIS)** térbeli adatokat (térképeket, műholdfelvételeket, statisztikákat) tárol rétegekben, ezeket elemzi és szemlélteti. Segítségével pl. kijelölhető az árvízzel veszélyeztetett terület, megtervezhető egy út nyomvonala, vagy a lakosság elérhetősége vizsgálható.',
        },
        { kind: 'heading', text: 'GPS' },
        {
          kind: 'text',
          text: 'A **globális helymeghatározó rendszer (GPS)** műholdakból áll, amelyek folyamatosan jelet sugároznak a pontos időponttal és helyzetükkel. A vevőkészülék a jelek **terjedési idejéből** kiszámítja, milyen messze van az egyes műholdaktól (a távolság = a fénysebesség × az idő), és legalább **négy műhold** adataiból határozza meg a saját helyzetét (hosszúság, szélesség, magasság) és az időt. Ezért kell az eszköznek szabad rálátás az égboltra.',
        },
        {
          kind: 'text',
          text: 'Jelentősége: közúti és tengeri navigáció, repülés, mentés és katasztrófavédelem, földmérés, mezőgazdasági gépek irányítása, sportolók és turisták tájékozódása.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            '**Topográfiai feladat** (I. feladatlap, 20 perc, 20 pont, segédeszköz nélkül): helyek, objektumok megnevezése.',
            '**II. feladatlap**: koordináták leolvasása atlaszból, viszonylagos magasság, távolság mérése, légi- és űrfelvétel azonosítása térképpel, változás felismerése két felvétel összevetésével.',
            'Emelt szinten: távolság az Egyenlítő vagy meridián mentén, szintvonalas térkép és keresztmetszete párosítása, GIS és műholdtípusok.',
            'Szóbeli: a "Tájékozódás a földrajzi térben" tételben a méretarány, a fokhálózat és a távérzékelés-GPS párosítás egyaránt előfordulhat.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: a szélesség és a hosszúság felcserélése; az előjel (é./d., k./ny.) elhagyása; a viszonylagos magasságnál az abszolút magasságok megadása a különbség helyett; az GPS-nél a "három műhold" és a "külső jel" félreértése; a távérzékelésnél a felvétel és a térkép nem összevetése.',
        },
        {
          kind: 'tip',
          text: 'Koordináta-feladatnál mindig két adatot adj meg, mindkettőhöz kiírva az irányt (pl. 47° é. sz., 19° k. h.). Atlaszban a hely mellé írt számokat először a keretről olvasd le, majd a hálózat segítségével keresd meg.',
        },
      ],
      topicMatch: [
        'fokhálózat',
        'földrajzi koordináták',
        'földrajzi tájékozódás',
        'távérzékelés',
        'térképi ismeretek',
        'térképolvasás',
        'térképelemzés',
        'szintvonalak',
      ],
      quiz: [
        {
          question: 'Melyik állítás igaz a hosszúsági körökre?',
          options: [
            'Párhuzamosak egymással.',
            'Az Egyenlítővel párhuzamosak.',
            'A sarkokon összefutnak.',
            'Hosszuk az Egyenlítőtől a sarkok felé csökken.',
          ],
          answer: 2,
          explanation:
            'A hosszúsági körök a sarkokat összekötő félkörök, így a pólusokban találkoznak. A szélességi körök párhuzamosak, és ezek hossza csökken a sarkok felé.',
        },
        {
          question: 'Egy hely koordinátái 20° d. sz., 60° k. h. Hol fekszik?',
          options: [
            'Északi és keleti félgömb.',
            'Északi és nyugati félgömb.',
            'Déli és nyugati félgömb.',
            'Déli és keleti félgömb.',
          ],
          answer: 3,
          explanation: 'A déli szélesség a déli, a keleti hosszúság a keleti félgömböt jelenti.',
        },
        {
          question:
            'Egy város tengerszint feletti magassága 130 m, a közelében levő hegycsúcsé 780 m. Mekkora a csúcs viszonylagos magassága a városhoz képest?',
          options: ['910 m', '780 m', '650 m', '130 m'],
          answer: 2,
          explanation:
            'A viszonylagos magasság a két magasság különbsége: $780 - 130 = 650\\ \\text{m}$.',
        },
        {
          question: 'Mi a GPS működésének alapja?',
          options: [
            'A vevő a Napot használja tájékozódási pontként.',
            'A vevő a műholdak jeleinek terjedési idejéből számítja ki a helyzetét.',
            'A vevő a Föld mágneses terét méri.',
            'A vevő a talajt térképezi radarral.',
          ],
          answer: 1,
          explanation:
            'A műholdak jelet sugároznak, amelynek futásidejéből a vevő a távolságokat számítja, és legalább négy műholddal határozza meg a helyét és az időt.',
        },
        {
          question:
            'Két pont ugyanazon a hosszúsági körön fekszik, szélességük 30° é. sz. és 10° d. sz. Mekkora a távolságuk (1° kb. 111 km)?',
          options: ['kb. 2220 km', 'kb. 4440 km', 'kb. 3330 km', 'kb. 1110 km'],
          answer: 1,
          explanation:
            'A két félgömbön fekvő pontok szélességét össze kell adni: $30^\\circ + 10^\\circ = 40^\\circ$, így $40 \\cdot 111 = 4440\\ \\text{km}$.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Földrajzi koordináta-rendszer',
          url: wiki('Földrajzi koordináta-rendszer'),
        },
        { label: 'Wikipédia: Távérzékelés', url: wiki('Távérzékelés') },
        { label: 'Wikipédia: Global Positioning System', url: wiki('Global Positioning System') },
      ],
    },
    {
      id: 'vilagegyetem-naprendszer-hold',
      subject: 'foldrajz',
      unitId: 'terkep-kozmikus-ter',
      title: 'A Világegyetem, a Naprendszer és a Hold',
      level: 'kozep',
      requirement: {
        kozep:
          'A Tejútrendszer alakja, mérete, a Naprendszer helyzete; az asztronómiai nagyságrendek; a csillagok és bolygók tartalmi jegyei; a csillagképek látszólagossága; a Naprendszer égitesttípusai; a Nap jellemzői és a földi életben betöltött szerepe; a Föld- és a Jupiter-típusú bolygók; a Hold mozgása, a holdfázisok, a nap- és holdfogyatkozás; a meteoroid, meteor, meteorit különbsége.',
        emelt:
          'A Világegyetem keletkezésének elmélete; a bolygók mozgástörvényei; a Nap gömbhéjas szerkezete és jelenségei; a bolygók adatsorainak összehasonlítása; a naptávolság, hőmérséklet és anyageloszlás összefüggései; holdfázisok, fogyatkozások ábrázolása; a Hold felszíne és légkörhiányának következményei; az üstökösök felépítése és mozgása.',
      },
      minutes: 35,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **Tejútrendszer** (Galaxis) csillagrendszer: kb. 100 000 fényév átmérőjű, spirális szerkezetű. A Naprendszer a központtól kb. 26 000 fényévre, az egyik spirálkarban van.',
            '**Fényév**: a fény által egy év alatt megtett út, kb. $9{,}46 \\cdot 10^{12}$ km. **CSE**: a Nap-Föld távolság, kb. 150 millió km.',
            '**Csillag**: saját fényű, magfúzióval energiát termelő gázgömb. **Bolygó**: csillag körül kering, saját fénye nincs.',
            'Naprendszer: a Nap, 8 **bolygó**, törpebolygók, kisbolygók, holdak, üstökösök, meteoroidok, bolygóközi anyag.',
            '**Kőzetbolygók**: Merkúr, Vénusz, Föld, Mars. **Gázbolygók (nagybolygók)**: Jupiter, Szaturnusz, Uránusz, Neptunusz.',
            '**Hold**: a Föld kísérője, kötött keringésű, mindig ugyanazt az oldalát mutatja. Fázisai: újhold, első negyed, telihold, utolsó negyed. **Napfogyatkozás** újholdkor, **holdfogyatkozás** teliholdkor.',
            '**Meteoroid**: a bolygóközi térben haladó kis test; **meteor**: a légkörben elégve keletkező fényjelenség; **meteorit**: a felszínre érkező maradvány.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Nagyságrendek: a fényév és a csillagászati egység' },
        {
          kind: 'text',
          text: 'A csillagászati távolságokat nem kilométerben, hanem külön egységekben adjuk meg. A **csillagászati egység (CSE)** a Nap-Föld átlagos távolsága, kb. 150 millió km (pontosabban 149,6 millió km). A **fényév** a fény egy év alatt megtett útja. A fény sebessége kb. 300 000 km/s, így $1\\ \\text{fényév} \\approx 300\\,000\\ \\text{km/s} \\cdot 31\\,557\\,600\\ \\text{s} \\approx 9{,}46 \\cdot 10^{12}\\ \\text{km}$ (kb. 9,46 billió km).',
        },
        {
          kind: 'compare',
          title: 'Nagyságrendek',
          columns: ['Távolság / méret', 'Egység'],
          rows: [
            { label: 'Hold-Föld', cells: ['kb. 384 400 km', 'a fény kb. 1,3 s alatt teszi meg'] },
            {
              label: 'Nap-Föld',
              cells: ['kb. 150 millió km = 1 CSE', 'a fény kb. 8 perc 19 s alatt teszi meg'],
            },
            {
              label: 'Nap-Neptunusz',
              cells: ['kb. 30 CSE = 4,5 milliárd km', 'a fény kb. 4,2 óra alatt teszi meg'],
            },
            {
              label: 'A legközelebbi csillag (Proxima Centauri)',
              cells: ['kb. 4,2 fényév', 'kb. 40 billió km'],
            },
            {
              label: 'A Tejútrendszer átmérője',
              cells: ['kb. 100 000 fényév', 'kb. $10^{18}$ km'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: a fény útja a Naptól a Földig',
          problem:
            'Mennyi idő alatt ér a Napból a Földre a fény? A Nap-Föld távolság 149,6 millió km, a fény sebessége 299 792 km/s.',
          solution:
            '$t = \\frac{s}{c} = \\frac{149\\,600\\,000\\ \\text{km}}{299\\,792\\ \\text{km/s}} \\approx 499\\ \\text{s}$.\n\nEz $\\frac{499}{60} \\approx 8{,}3$ perc, azaz kb. **8 perc 19 másodperc**. Amit a Napon látsz, 8 perccel korábbi állapot.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: távolság CSE-ben és km-ben',
          problem:
            'A Neptunusz átlagosan 30,1 CSE-re kering a Naptól. Hány km ez, és mennyi idő alatt ér oda a fény?',
          solution:
            '$30{,}1 \\cdot 149{,}6 \\approx 4503$ millió km, kb. $4{,}5 \\cdot 10^9\\ \\text{km}$.\n\nA fény ideje: $\\frac{4{,}503 \\cdot 10^9}{299\\,792} \\approx 15\\,020\\ \\text{s} \\approx 4{,}2\\ \\text{óra}$.',
        },
        { kind: 'heading', text: 'A Tejútrendszer és a Világegyetem' },
        {
          kind: 'text',
          text: 'A **Világegyetem (Univerzum)** a tér, az anyag és az energia együttese. Az anyag **csillagrendszerekbe (galaxisokba)** szerveződik; ezek száma óriási, és egymástól nagy távolságra vannak. A mi csillagrendszerünk a **Tejútrendszer (Galaxis)**: mintegy 100 milliárd (sok szerint akár 200–400 milliárd) csillagot tartalmaz, korong alakú, spirális karokkal, közepén sűrű maggal. Átmérője kb. 100 000 fényév, a korong vastagsága a központ közelében kb. 1000 fényév. A **Naprendszer** a központtól kb. 26 000 fényévre, az egyik spirálkarban, a korong síkja közelében helyezkedik el, és kb. 220–230 millió év alatt kerüli meg a Galaxis központját. A Tejút az égen halványan fehéres sáv, amely a korong síkja irányába látható csillagok összessége.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A legszélesebb körben elfogadott elmélet szerint a Világegyetem az **ősrobbanással** (Big Bang) kb. 13,8 milliárd éve keletkezett, rendkívül forró és sűrű állapotból, és azóta tágul. Ennek bizonyítéka, hogy a távoli galaxisok távolodnak tőlünk (annál gyorsabban, minél messzebb vannak), és hogy a világűrben mindenütt kimutatható a korai Világegyetem hátrahagyott sugárzása.',
        },
        { kind: 'heading', text: 'Csillagok, bolygók, csillagképek' },
        {
          kind: 'compare',
          title: 'Csillag és bolygó',
          columns: ['Csillag', 'Bolygó'],
          rows: [
            {
              label: 'Fény',
              cells: ['saját fénye van', 'nincs saját fénye, a csillag fényét veri vissza'],
            },
            {
              label: 'Anyag, energia',
              cells: [
                'forró, izzó gázgömb (plazma), belsejében magfúzió zajlik',
                'szilárd (kőzet) vagy gáz halmazállapotú test, nincs magfúzió',
              ],
            },
            {
              label: 'Mozgás',
              cells: [
                '(az égen) látszólag egymáshoz képest nem mozdul',
                'csillag körül kering; az égen a csillagok között vándorol',
              ],
            },
            { label: 'Példa', cells: ['Nap, Sarkcsillag, Szíriusz', 'Föld, Mars, Jupiter'] },
          ],
        },
        {
          kind: 'text',
          text: 'A **csillagkép** a Földről nézve egymáshoz közelinek látszó csillagok alakzata, amelyeknek elnevezést adtak (pl. Nagy Göncöl, Kis Göncöl). A csillagképek **látszólagosak**: az alakzatban látható csillagok a Földtől nagyon különböző távolságra vannak, és térben nem tartoznak össze. Egy másik csillagról nézve egészen más alakzat látszana. A Nagy Göncöl (a Nagy Medve része) és a Kis Göncöl (a Kis Medve része) hét-hét fényes csillagából álló "szekér" alakzat; a Kis Göncöl "rúdjának" végén áll a Sarkcsillag.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A bolygók mozgástörvényei (Kepler)**: 1. A bolygók a Nap körül **ellipszispályán** keringenek, amelynek egyik gyújtópontjában áll a Nap. 2. A bolygót a Nappal összekötő szakasz **egyenlő idők alatt egyenlő területeket súrol**: a bolygó napközelben gyorsabban, naptávolban lassabban mozog. 3. A keringési idők négyzetei úgy aránylanak egymáshoz, mint a pályák fél nagytengelyeinek köbei. Ha a keringési időt években, a fél nagytengelyt CSE-ben mérjük, akkor $T^2 = a^3$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: Kepler harmadik törvénye',
          problem:
            'A Jupiter pályájának fél nagytengelye 5,2 CSE. Mennyi a keringési ideje? Egy kisbolygó 8 év alatt kerüli meg a Napot. Mekkora a pályájának fél nagytengelye?',
          solution:
            'A Jupiter: $T^2 = a^3 = 5{,}2^3 = 140{,}6$, így $T = \\sqrt{140{,}6} \\approx 11{,}86$ év. (A mért érték kb. 11,86 év.)\n\nA kisbolygó: $a^3 = T^2 = 8^2 = 64$, tehát $a = \\sqrt[3]{64} = 4\\ \\text{CSE}$.',
        },
        { kind: 'heading', text: 'A Naprendszer égitestei' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Nap',
              text: 'a Naprendszer központi csillaga, a Naprendszer tömegének több mint 99%-a.',
            },
            {
              term: 'bolygó',
              text: 'a Nap körül kering, gömb alakú, pályája környékét "kitakarította". Nyolc van: négy kőzetbolygó és négy gázbolygó.',
            },
            {
              term: 'törpebolygó',
              text: 'a Nap körül kering, gömb alakú, de pályája környékét nem takarította ki (pl. Plútó, Ceres). A Plútót 2006-ban sorolták át bolygóból törpebolygóvá.',
            },
            {
              term: 'kisbolygó (aszteroida)',
              text: 'a Nap körül keringő kisebb kőzet- vagy fémtest; legtöbbjük a Mars és a Jupiter pályája között, a kisbolygóövben kering.',
            },
            { term: 'hold', text: 'bolygó körül keringő természetes égitest.' },
            {
              term: 'üstökös',
              text: 'jég és por keverékéből álló, a Nap körül erősen elnyúlt ellipszispályán keringő kis égitest.',
            },
            {
              term: 'bolygóközi anyag',
              text: 'a bolygók közötti térben lévő por és gáz (valamint a napszél részecskéi).',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Kőzetbolygók és gázbolygók',
          columns: ['Kőzetbolygók (Föld-típusú)', 'Gázbolygók (Jupiter-típusú, nagybolygók)'],
          rows: [
            {
              label: 'Bolygók',
              cells: ['Merkúr, Vénusz, Föld, Mars', 'Jupiter, Szaturnusz, Uránusz, Neptunusz'],
            },
            {
              label: 'Méret',
              cells: [
                'kicsi (a Föld a legnagyobb, átmérője kb. 12 700 km)',
                'nagy (a Jupiter átmérője kb. 11-szer akkora, mint a Földé)',
              ],
            },
            {
              label: 'Sűrűség',
              cells: [
                'nagy, szilárd felszín',
                'kicsi, főleg hidrogén és hélium, nincs szilárd felszín',
              ],
            },
            {
              label: 'Holdak',
              cells: [
                'kevés vagy nincs (Merkúr, Vénusz: 0; Föld: 1; Mars: 2)',
                'sok, gyűrűrendszerük van (leglátványosabb: Szaturnusz)',
              ],
            },
            { label: 'Forgás', cells: ['lassabb', 'gyors (kb. 10 óra körül a Jupiternél)'] },
            {
              label: 'Naptávolság',
              cells: ['közel a Naphoz (0,4–1,5 CSE)', 'messze a Naptól (5–30 CSE)'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Naptávolság, hőmérséklet, anyageloszlás összefüggései (emelt)**: minél messzebb van a bolygó a Naptól, annál kevesebb sugárzást kap, ezért átlagos hőmérséklete általában csökken. **Kivétel a Vénusz**: sűrű szén-dioxid-légköre erős üvegházhatást okoz, ezért felszíne (kb. 460 °C) melegebb, mint a Naphoz közelebbi Merkúré. A Naphoz közel a nagy olvadáspontú anyagok (kőzetek, fémek) álltak össze, ezért a belső bolygók kisebbek és kőzetből állnak; távolabb a könnyű gázok és jegek is összegyűltek, ezért ott nagy bolygók keletkeztek.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Adatsor a bolygókról (összehasonlításhoz)',
          columns: ['Naptávolság (CSE)', 'Keringési idő'],
          rows: [
            { label: 'Merkúr', cells: ['0,39', '88 nap'] },
            { label: 'Vénusz', cells: ['0,72', '225 nap'] },
            { label: 'Föld', cells: ['1,00', '365,25 nap'] },
            { label: 'Mars', cells: ['1,52', '687 nap (1,88 év)'] },
            { label: 'Jupiter', cells: ['5,20', '11,86 év'] },
            { label: 'Szaturnusz', cells: ['9,58', '29,5 év'] },
            { label: 'Uránusz', cells: ['19,2', '84 év'] },
            { label: 'Neptunusz', cells: ['30,1', '165 év'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az adatsorokból azt olvashatod le, hogy a naptávolság növekedésével nő a keringési idő (Kepler harmadik törvénye), a pálya hossza és a bolygó pályamenti sebessége pedig csökken.',
        },
        { kind: 'heading', text: 'A Nap és a földi élet' },
        {
          kind: 'keypoints',
          title: 'A Nap jellemzői',
          items: [
            'Átmérője kb. 1,39 millió km, ez a Föld átmérőjének kb. 109-szerese.',
            'Távolsága a Földtől kb. 150 millió km (1 CSE).',
            'Anyaga főleg hidrogén (kb. háromnegyed része) és hélium (kb. egynegyed része), a tömeg többi része ennél kisebb.',
            'Hőmérséklete a magjában kb. 15 millió °C, felszínén kb. 5500 °C.',
            'Energiáját a magjában zajló **magfúzióval** (hidrogénatommagokból hélium keletkezik, közben tömeg alakul energiává) termeli.',
          ],
        },
        {
          kind: 'text',
          text: 'A Nap a földi élet alapja: fénye és hője a **fotoszintézis** (a növények szervesanyag-termelése) energiaforrása, ez szabja meg a Föld hőmérsékleti viszonyait, hajtja a **vízkörforgást**, a légkör és az óceánok áramlásait, és az energiahordozók (pl. szén, kőolaj) eredetileg a Nap energiájának tárolt formái.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'a Nap gömbhéjai',
              text: 'belülről kifelé: **mag** (itt zajlik a magfúzió, kb. 15 millió °C), **sugárzási öv** (az energia sugárzással terjed), **áramlási öv** (az energia gázáramlással jut a felszín felé), **fotoszféra** (a látható felszín, kb. 5500 °C, innen jön a látható fény), **kromoszféra**, **napkorona** (a Nap külső légköre, nagyon ritka, de millió fokos).',
            },
            {
              term: 'plazma',
              text: 'az anyag negyedik halmazállapota: elektronokból és ionokból álló, elektromosan vezető forró gáz; a Nap anyaga plazma.',
            },
            {
              term: 'napfolt',
              text: 'a fotoszféra hűvösebb (kb. 4000 °C), sötétebbnek látszó területe, erős mágneses tér kíséri.',
            },
            {
              term: 'napkitörés',
              text: 'a Nap légkörében hirtelen felszabaduló nagy energia; sugárzás- és részecskeözönnel jár.',
            },
            {
              term: 'napszél',
              text: 'a Napból folyamatosan kiáramló töltött részecskék (főleg protonok és elektronok) árama.',
            },
            {
              term: 'sarki fény',
              text: 'a napszél töltött részecskéi a Föld mágneses terén keresztül a sarkvidékek légkörébe jutnak, és fényt keltenek.',
            },
            {
              term: 'naptevékenység',
              text: 'a napfoltok, napkitörések gyakoriságának kb. 11 éves ingadozása; erős kitörések zavarhatják a rádiókapcsolatot, a műholdakat és az elektromos hálózatokat (űridőjárás).',
            },
          ],
        },
        { kind: 'heading', text: 'A Hold' },
        {
          kind: 'text',
          text: 'A Hold a Föld természetes kísérője, átmérője kb. 3500 km (a Föld kb. egynegyede), távolsága kb. 384 000 km. A Föld körül kb. **27,3 nap** alatt kerüli meg, és ugyanennyi idő alatt fordul meg a tengelye körül is (**kötött keringés**), ezért mindig ugyanazt az oldalát látjuk. A Hold nem világít, hanem a Nap fényét veri vissza.',
        },
        {
          kind: 'compare',
          title: 'A holdfázisok',
          columns: ['Helyzete', 'Hogyan látszik?'],
          rows: [
            {
              label: 'Újhold',
              cells: [
                'a Hold a Nap és a Föld között, a Nap felé fordított oldala világos',
                'nem látjuk (a Nappal együtt kel és nyugszik)',
              ],
            },
            {
              label: 'Első negyed',
              cells: [
                'a Nap-Föld-Hold szög kb. derékszög',
                'jobb oldala világos (az északi féltekén), kb. napnyugtakor delel',
              ],
            },
            {
              label: 'Telihold',
              cells: [
                'a Föld a Nap és a Hold között',
                'teljes korongja világos, napnyugtakor kel, éjfélkor delel',
              ],
            },
            {
              label: 'Utolsó negyed',
              cells: [
                'a Nap-Föld-Hold szög ismét kb. derékszög',
                'bal oldala világos (az északi féltekén), kb. napkeltekor delel',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Két egymást követő azonos fázis között kb. **29,5 nap** telik el (egy holdhónap), hosszabb, mint a keringési idő, mert a Föld is halad a Nap körüli pályán, így a Holdnak "többet kell mennie".',
        },
        {
          kind: 'compare',
          title: 'Nap- és holdfogyatkozás',
          columns: ['Napfogyatkozás', 'Holdfogyatkozás'],
          rows: [
            { label: 'Mikor?', cells: ['újholdkor', 'teliholdkor'] },
            {
              label: 'Mi történik?',
              cells: [
                'a Hold a Nap és a Föld közé kerül, árnyéka a Földre esik, eltakarja a Napot',
                'a Hold a Föld árnyékába lép',
              ],
            },
            {
              label: 'Hol látszik?',
              cells: [
                'a Földön csak egy keskeny sávban teljes, a környezetében részleges',
                'mindenütt látszik, ahol a Hold a horizont felett van (az éjszakai félgömbön)',
              ],
            },
            {
              label: 'Hossza',
              cells: ['teljes fázisa legfeljebb néhány perc', 'teljes fázisa akár másfél óra'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Nem minden újholdkor van napfogyatkozás, mert a Hold pályasíkja kb. 5°-kal dől a Föld pályasíkjához képest: legtöbbször a Hold árnyéka elkerüli a Földet, vagy a Hold elkerüli a Föld árnyékát. Fogyatkozás csak akkor van, ha a Nap, a Föld és a Hold közel egy egyenesbe esik.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A Hold felszínén világos **felföldeket** és sötét, bazaltos, sík **holdtengereket** (a hajdan kitört láva által kitöltött, óriási becsapódási medencék) látunk. A felszín tele van **meteoritkráterekkel**. Mivel a Hold tömege kicsi, a **gravitáció** a földi kb. egyhatod része, ezért nem tudta megtartani a légkört. A légkör hiányának következményei: nincs víz és szél, nincs időjárás és mállás, így a kráterek évmilliárdokig megmaradnak; a meteoroidok akadálytalanul becsapódnak; hatalmas a napi hőmérséklet-ingadozás (a nappali oldal sok száz fokkal melegebb az éjszakainál); nincs hang; a Napot nem szórja a légkör, ezért az égbolt nappal is fekete.',
        },
        { kind: 'heading', text: 'Meteoroid, meteor, meteorit, üstökös' },
        {
          kind: 'compare',
          title: 'Mi a különbség?',
          columns: ['Meghatározás', 'Hol van?'],
          rows: [
            {
              label: 'Meteoroid',
              cells: ['a bolygóközi térben mozgó kis kőzet- vagy fémtest', 'a világűrben'],
            },
            {
              label: 'Meteor',
              cells: [
                'a meteoroid felizzása a légkörben, a fényjelenség ("hulló csillag")',
                'a légkörben, kb. 100 km magasan',
              ],
            },
            {
              label: 'Meteorit',
              cells: ['a meteoroidból a Föld felszínére lehulló maradvány', 'a felszínen'],
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'az üstökös részei',
              text: '**mag** (kb. néhány km-es "piszkos hógolyó": jég és por), **kóma** (a Nap közelében a mag körül kialakuló gáz- és porburok), **csóva** (a kómából kiáramló gáz és por; mindig a Naptól elfelé mutat, mert a napszél és a napsugárzás elfújja).',
            },
            {
              term: 'mozgásuk',
              text: 'erősen elnyúlt ellipszis pályán keringenek, a Nap közelében látványosak. A Halley-üstökös kb. 76 évente tér vissza, utoljára 1986-ban látszott.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Tesztfeladat: csillag vagy bolygó, kőzet- vagy gázbolygó, a holdfázis felismerése ábráról, a fogyatkozás kialakulásának helyzete.',
            'Ábraelemzés: a Nap-Föld-Hold elrendezése és a megfelelő fázis, esetleg a Hold helyzete a fogyatkozásnál.',
            'Számítás: a fény útja a Naptól (fényév, CSE), átváltás.',
            'Szóbeli: két tétel is a kozmikus térhez kapcsolódik (a 20 tételből kettő).',
            'Emelt szinten: a Nap szerkezete és jelenségei, a Hold felszíne, Kepler törvényei, bolygóadatok összehasonlítása, üstökös.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: a fényév idő- és nem távolság-egységként való kezelése; a bolygók és csillagok szétválasztásának elmulasztása; a fogyatkozások okának felcserélése (holdfogyatkozás: a Hold lép a Föld árnyékába); "a Hold forog" tagadása (kötött keringés miatt egyszer fordul meg egy kör alatt); a meteor és a meteorit összekeverése.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz-vázlat ("Mutasd be a Naprendszer égitesttípusait"): 1. Nap, 2. bolygók (kőzet-gáz), 3. törpebolygók és kisbolygók (kisbolygóöv), 4. holdak, 5. üstökösök, 6. meteoroidok és bolygóközi anyag; mindegyikhez egy jellemző példa.',
        },
      ],
      topicMatch: [
        'kozmikus környezet',
        'naprendszer',
        'tejútrendszer',
        'világegyetem',
        '=nap',
        'bolygók',
        'nagybolygók',
        'kepler',
        'holdfázisok',
        'fogyatkozások',
        'csillagászati földrajz',
        'űridőjárás',
      ],
      quiz: [
        {
          question: 'Mi a fényév?',
          options: [
            'Az idő egysége, amely alatt a fény megkerüli a Földet.',
            'A fény által egy év alatt megtett út, a távolság egysége.',
            'A Nap és a Föld átlagos távolsága.',
            'A Nap fényességének mértékegysége.',
          ],
          answer: 1,
          explanation:
            'A fényév távolságegység: kb. 9,46 billió km. A Nap-Föld távolság egysége a CSE.',
        },
        {
          question: 'Melyik felsorolás tartalmaz csak kőzetbolygókat?',
          options: [
            'Merkúr, Vénusz, Jupiter, Mars',
            'Föld, Mars, Szaturnusz, Vénusz',
            'Merkúr, Vénusz, Föld, Mars',
            'Mars, Jupiter, Uránusz, Neptunusz',
          ],
          answer: 2,
          explanation:
            'A kőzetbolygók (Föld-típusú bolygók) a Naphoz legközelebbi négy bolygó: Merkúr, Vénusz, Föld, Mars. A Jupiter, Szaturnusz, Uránusz és Neptunusz gázbolygók.',
        },
        {
          question: 'Mikor következhet be holdfogyatkozás?',
          options: ['Újholdkor.', 'Első negyedkor.', 'Utolsó negyedkor.', 'Teliholdkor.'],
          answer: 3,
          explanation:
            'Holdfogyatkozáskor a Hold a Föld árnyékába lép, ehhez a Földnek a Nap és a Hold között kell lennie, vagyis teliholdnak kell lennie.',
        },
        {
          question: 'Miért látszólagosak a csillagképek?',
          options: [
            'Mert a csillagok mozognak a Földről nézve.',
            'Mert a csillagok a Földtől nagyon különböző távolságra vannak, és térben nem tartoznak össze.',
            'Mert a csillagképek csak a Naprendszer égitestei.',
            'Mert a csillagképeket csak a Hold fényében látjuk.',
          ],
          answer: 1,
          explanation:
            'Az alakzat csak a Földről nézve áll össze. A benne lévő csillagok térben nagy távolságra lehetnek egymástól.',
        },
        {
          question: 'Mit jelent a meteor szó?',
          options: [
            'A felszínen megtalált, lehullott kőzet.',
            'A kisbolygóövben keringő nagyobb test.',
            'Az üstökös csóvája.',
            'A meteoroid légköri elégésekor látható fényjelenség.',
          ],
          answer: 3,
          explanation:
            'A meteoroid a világűrben haladó kis test, a meteor a légkörbe érve keletkező fényjelenség, a meteorit pedig a felszínre jutott maradvány.',
        },
        {
          question:
            'Egy üstökös pályájának fél nagytengelye 4 CSE. Mennyi a keringési ideje Kepler harmadik törvénye szerint?',
          options: ['4 év', '16 év', '8 év', '2 év'],
          answer: 2,
          explanation: '$T^2 = a^3 = 4^3 = 64$, így $T = \\sqrt{64} = 8$ év.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Tejútrendszer', url: wiki('Tejútrendszer') },
        { label: 'Wikipédia: Naprendszer', url: wiki('Naprendszer') },
        { label: 'Wikipédia: Hold', url: wiki('Hold égitest') },
      ],
    },
    {
      id: 'fold-mozgasai-evszakok-delelesi-magassag',
      subject: 'foldrajz',
      unitId: 'terkep-kozmikus-ter',
      title: 'A Föld mozgásai, az évszakok és a delelési magasság',
      level: 'kozep',
      requirement: {
        kozep:
          'A Föld méretei (sugár, Egyenlítő hossza); az eltérítő erő hatásai; a nappalok és éjszakák váltakozása; az égitestek látszólagos napi K-Ny-i járása, a forgás Ny-K-i iránya; a keringés pályájának jellemzői és ideje; a keringéssel kapcsolatos ábrák értelmezése; a napéjegyenlőségek és napfordulók fogalma és időpontja; a forgástengely ferdesége és az évszakok kapcsolata.',
        emelt:
          'A Föld alakja és tengely körüli forgása közötti összefüggés; a nappalok és éjszakák hosszának változása; a Nap delelési magasságának kiszámítása nevezetes időpontokban bármely földrajzi helyen.',
      },
      minutes: 30,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Föld sugara kb. **6371 km**, az Egyenlítő hossza kb. **40 000 km** (pontosabban 40 075 km).',
            '**Forgás**: tengely körül nyugatról keletre, 24 óra (egy nap). Következmény: nappal és éjszaka váltakozása, az égitestek látszólagos keleti-nyugati járása, **eltérítő erő** (Coriolis-erő).',
            '**Keringés**: a Nap körül nyugatról keletre, ellipszis alakú (majdnem kör) pályán, kb. 365,25 nap alatt. A pálya síkja az **ekliptika**.',
            'A Föld forgástengelye az ekliptika síkjára merőleges iránnyal kb. **23,5°-os** szöget zár be (**tengelyferdeség**), iránya keringés közben állandó.',
            'Az **évszakok** oka: a tengelyferdeség és a keringés együtt. Nem a naptávolság változása okozza őket.',
            'Napéjegyenlőségek: **márc. 21.** (tavaszi), **szept. 23.** (őszi). Napfordulók: **jún. 22.** (nyári), **dec. 22.** (téli). A dátumok ±1 nappal változhatnak.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A Föld alakja és méretei' },
        {
          kind: 'text',
          text: 'A Föld közel gömb alakú. Átlagos **sugara kb. 6371 km**, az **Egyenlítő hossza kb. 40 000 km** (pontosabban 40 075 km), egy hosszúsági kör ugyanennyi, kb. 40 000 km. A gömb alakot a holdfogyatkozáskor a Hold felületére vetülő kör alakú árnyék, a hajók "kibukkanása" a horizont mögül és a műholdfelvételek is bizonyítják.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A Föld pontos alakja nem gömb, hanem **forgási ellipszoid**: a gyors tengely körüli forgás miatt a sarkoknál lapult, az Egyenlítőnél kidudorodó. Az egyenlítői sugár (kb. 6378 km) nagyobb a sarki sugárnál (kb. 6357 km). A tömegeloszlás szabálytalansága miatt a valódi földalak, a **geoid** (az átlagos tengerszintet folytatólagosan kiterjesztve gondolt felület) kisebb eltéréseket mutat az ellipszoidtól. A **zenit** a megfigyelő feletti pont az égbolton (a függőleges egyenes felfelé meghosszabbítása).',
        },
        { kind: 'heading', text: 'A tengely körüli forgás és következményei' },
        {
          kind: 'text',
          text: 'A Föld a tengelye körül **nyugatról keletre** forog, az északi pólus felől nézve az óramutató járásával ellentétesen. Egy teljes körülfordulás (a napi időszámítás alapja) kb. 24 óra. A forgás következményei:',
        },
        {
          kind: 'keypoints',
          items: [
            '**Nappalok és éjszakák váltakozása**: a Föld gömb alakú és saját fénye nincs, a Nap mindig csak egyik felét világítja meg. A forgás miatt minden hely váltakozva kerül a megvilágított és az árnyékos oldalra.',
            '**Az égitestek látszólagos napi mozgása keletről nyugatra**: mivel a Föld nyugatról keletre forog, a Nap, a Hold és a csillagok keleten kelnek és nyugaton nyugszanak.',
            '**Eltérítő erő (Coriolis-erő)**: a mozgó testeket (szelek, tengeráramlások, folyók, lövedékek) az északi féltekén jobbra, a délin balra téríti el a mozgás irányához képest. Az Egyenlítőn nulla, a sarkok felé nő.',
            'Az **időszámítás** alapja (a nap), és a helyi idők eltérése a földrajzi hosszúságtól (lásd a következő leckét).',
            'A Föld **lapultsága** (emelt): a forgás miatti centrifugális hatás.',
          ],
        },
        { kind: 'heading', text: 'A keringés' },
        {
          kind: 'text',
          text: 'A Föld a Nap körül szintén **nyugatról keletre** kering, **ellipszis** alakú, de a körhöz nagyon közeli pályán. A pálya síkja az **ekliptika**. A Nap-Föld távolság átlagosan 149,6 millió km, a legkisebb (napközel, kb. január 3.) kb. 147 millió km, a legnagyobb (naptávol, kb. július 4.) kb. 152 millió km. A keringés ideje **365 nap 6 óra** (365,25 nap), egy **napév**, a keringési sebesség kb. 30 km/s. A Föld forgástengelye az ekliptika síkjának merőlegesével kb. **23,5°-os szöget** zár be (tengelyferdeség), és a tengely iránya a keringés során állandó marad, az északi végével a Sarkcsillag felé mutat.',
        },
        {
          kind: 'warning',
          text: 'Az északi féltekén a nyár a Föld **naptávolban** van (július eleje), a tél pedig **napközelben** (január eleje). Tehát nem a naptávolság okozza az évszakokat, hanem a **tengelyferdeség**. A déli féltekén nyár van decemberben, januárban.',
        },
        {
          kind: 'compare',
          title: 'Az évszakok kezdete (csillagászati évszakok, az északi féltekén)',
          columns: ['Dátum (kb.)', 'A Nap merőleges (90°-os) delelése'],
          rows: [
            { label: 'Tavaszi napéjegyenlőség', cells: ['március 21.', 'az Egyenlítőn (0°)'] },
            { label: 'Nyári napforduló', cells: ['június 22.', 'a Ráktérítőn (23,5° é. sz.)'] },
            { label: 'Őszi napéjegyenlőség', cells: ['szeptember 23.', 'az Egyenlítőn (0°)'] },
            { label: 'Téli napforduló', cells: ['december 22.', 'a Baktérítőn (23,5° d. sz.)'] },
          ],
        },
        {
          kind: 'text',
          text: 'A **napéjegyenlőségkor** a Nap az Egyenlítő fölött delel, a nappal és az éjszaka az egész Földön kb. 12-12 óra. A **nyári napfordulón** az északi féltekén van a leghosszabb nappal és a legmagasabb napállás; az északi sarkkörön (66,5° é. sz.) túl a Nap nem nyugszik le (sarki nap), a déli sarkkörön túl nem kel fel (sarki éj). A **téli napforduló** éppen fordítva van: az északi féltekén a legrövidebb a nappal és a legalacsonyabb a delelési magasság. Magyarországon (kb. 47° é. sz.) a leghosszabb nappal kb. 16 óra, a legrövidebb kb. 8 óra.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A nappalok és éjszakák hosszának változása** a ferde tengely és a keringés együttes hatása: az északi féltekén tavasztól nyárig nő a nappal, mert az északi félgömb a keringés közben egyre inkább a Nap felé dől, így a Nap által megvilágított fél gömbön a szélességi körök egyre nagyobb része esik a nappali oldalra. Az Egyenlítőn az év minden napján kb. 12 óra a nappal; a sarkok felé egyre nagyobb a nappalok hosszának évi ingadozása, a sarkokon fél évig nappal, fél évig éjszaka van.',
        },
        { kind: 'heading', text: 'A Nap delelési magassága' },
        {
          kind: 'text',
          emelt: true,
          text: 'A **delelési magasság** ($h$) a Nap horizont feletti szöge, amikor a legmagasabban áll (helyi dél). Egy hely földrajzi szélessége $\\varphi$ (északon pozitív, délen negatív), a Nap merőleges delelésének szélessége, azaz a **deklináció** $\\delta$ az adott napon: napéjegyenlőségkor $0^\\circ$, nyári napfordulón $+23{,}5^\\circ$, téli napfordulón $-23{,}5^\\circ$. Ekkor:',
        },
        {
          kind: 'formula',
          emelt: true,
          tex: 'h = 90^\\circ - |\\varphi - \\delta|',
          caption:
            'A delelési magasság: 90° mínusz a hely szélessége és a Nap merőleges delelési szélessége közti szögtávolság. Ha negatív az eredmény, a Nap aznap nem kel fel (sarki éj).',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: delelési magasság Magyarországon',
          problem:
            'Mekkora a Nap delelési magassága a 47° é. sz.-i helyen a tavaszi napéjegyenlőségkor, a nyári napfordulón és a téli napfordulón?',
          solution:
            'Napéjegyenlőség ($\\delta = 0^\\circ$): $h = 90^\\circ - |47^\\circ - 0^\\circ| = 43^\\circ$.\n\nNyári napforduló ($\\delta = +23{,}5^\\circ$): $h = 90^\\circ - |47^\\circ - 23{,}5^\\circ| = 90^\\circ - 23{,}5^\\circ = 66{,}5^\\circ$.\n\nTéli napforduló ($\\delta = -23{,}5^\\circ$): $h = 90^\\circ - |47^\\circ + 23{,}5^\\circ| = 90^\\circ - 70{,}5^\\circ = 19{,}5^\\circ$.\n\nA nyári és a téli delelési magasság különbsége $66{,}5^\\circ - 19{,}5^\\circ = 47^\\circ$, azaz $2 \\cdot 23{,}5^\\circ$.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: déli félteke és sarkvidék',
          problem:
            'Mekkora a delelési magasság a 34° d. sz.-i helyen december 22-én? És a 70° d. sz.-i helyen június 22-én?',
          solution:
            'A déli szélességet negatívnak vesszük. December 22-én $\\delta = -23{,}5^\\circ$, $\\varphi = -34^\\circ$: $h = 90^\\circ - |-34^\\circ + 23{,}5^\\circ| = 90^\\circ - 10{,}5^\\circ = 79{,}5^\\circ$.\n\nJúnius 22-én $\\delta = +23{,}5^\\circ$, $\\varphi = -70^\\circ$: $h = 90^\\circ - |-70^\\circ - 23{,}5^\\circ| = 90^\\circ - 93{,}5^\\circ = -3{,}5^\\circ$. A negatív érték azt jelenti, hogy a Nap délben is a horizont alatt marad: **sarki éj** van.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: megfordított feladat',
          problem:
            'Március 21-én egy helyen a Nap delelési magassága 60°. Mekkora a hely földrajzi szélessége?',
          solution:
            'Napéjegyenlőség, $\\delta = 0^\\circ$: $60^\\circ = 90^\\circ - |\\varphi|$, így $|\\varphi| = 30^\\circ$. A hely **30° é. sz. vagy 30° d. sz.** Ha a feladat az északi (vagy déli) félgömbre vonatkozik, csak az egyik megoldás jó. Az északi féltekén a Nap délen áll, a délin északon.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Mindig rajzolj fel egy vázlatot: a hely szélessége és a Nap merőleges delelésének helye (Egyenlítő, Ráktérítő vagy Baktérítő) közötti szögtávolság $x$. A delelési magasság $90^\\circ - x$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábra: a Föld négy helyzete a Nap körül; ezekhez kell hozzárendelni a napéjegyenlőséget és a napfordulót, az évszakot és a megvilágítást.',
            'Teszt: a forgás és a keringés következményeinek szétválasztása (nappalok és éjszakák: forgás; évszakok: keringés + tengelyferdeség).',
            'Atlaszos feladat: sarkkörök, térítők, a Nap delelési magassága adott napon.',
            'Emelt szinten: a Nap delelési magassága adott napon és helyen; a nappalok hossza a szélességtől függően; a Föld lapultsága és a forgás kapcsolata.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: az évszakok okául a naptávolság változásának megnevezése; a forgás és a keringés következményeinek összekeverése; az égitestek látszólagos mozgásának irányáról (K→Ny) és a forgás irányáról (Ny→K) szóló rész felcserélése; a déli félgömb szélességének előjelhibája a delelési magasságnál.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz-vázlat ("Magyarázd el az évszakok kialakulását"): 1. a tengely ferde (kb. 23,5°) és iránya állandó; 2. a Föld a Nap körül kering; 3. emiatt a Nap delelési magassága és a nappal hossza az év folyamán változik; 4. ez határozza meg a beérkező energia mennyiségét (a meredekebb sugárzás kisebb felületen oszlik el, a hosszabb nappal több napsütést jelent).',
        },
      ],
      topicMatch: [
        'föld mozgásai',
        'hold és föld',
        'a föld és a hold',
        'nevezetes napok',
        'kozmikus környezet',
        'csillagászati földrajz',
      ],
      quiz: [
        {
          question: 'Melyik jelenség a Föld tengely körüli forgásának következménye?',
          options: [
            'Az évszakok váltakozása.',
            'A nappalok és éjszakák váltakozása.',
            'A napfordulók különböző időpontja.',
            'A Nap-Föld távolság változása.',
          ],
          answer: 1,
          explanation:
            'A forgás miatt kerül váltakozva minden hely a megvilágított és az árnyékos oldalra. Az évszakok a keringés és a ferde tengely következményei.',
        },
        {
          question: 'Melyik állítás igaz az eltérítő erőre?',
          options: [
            'Az északi féltekén a mozgó testeket jobbra téríti el.',
            'Az északi féltekén a mozgó testeket balra téríti el.',
            'Az Egyenlítőn a legnagyobb.',
            'Csak a szilárd testekre hat.',
          ],
          answer: 0,
          explanation:
            'A Coriolis-erő az északi féltekén jobbra, a délin balra téríti el a mozgó testeket; az Egyenlítőn nulla, a sarkok felé nő.',
        },
        {
          question: 'Mikor van tavaszi napéjegyenlőség (kb.)?',
          options: ['június 22.', 'szeptember 23.', 'december 22.', 'március 21.'],
          answer: 3,
          explanation:
            'A tavaszi napéjegyenlőség március 21. körül van, ekkor a Nap az Egyenlítő felett delel.',
        },
        {
          question: 'Miért nincs évszakváltozás a tengelyferdeség nélkül?',
          options: [
            'Mert a tengelyferdeség miatt változik meg a Nap delelési magassága és a nappalok hossza az év folyamán.',
            'Mert a tengelyferdeség miatt változik a Föld sebessége.',
            'Mert a tengelyferdeség okozza a gravitációt.',
            'Mert a tengelyferdeség miatt kering a Föld a Nap körül.',
          ],
          answer: 0,
          explanation:
            'Ferde tengely nélkül a Nap mindig az Egyenlítőn delelne merőlegesen, a nappalok hossza állandó lenne, és nem lennének évszakok.',
        },
        {
          question: 'Mekkora a Nap delelési magassága a 40° é. sz.-i helyen a nyári napfordulón?',
          options: ['73,5°', '50°', '26,5°', '90°'],
          answer: 0,
          explanation:
            '$h = 90^\\circ - |40^\\circ - 23{,}5^\\circ| = 90^\\circ - 16{,}5^\\circ = 73{,}5^\\circ$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A Föld mozgásai', url: wiki('Föld forgása és keringése') },
        { label: 'Wikipédia: Évszak', url: wiki('Évszak') },
        { label: 'Wikipédia: Napforduló', url: wiki('Napforduló') },
      ],
    },
    {
      id: 'idoszamitas-helyi-ido-zonaido',
      subject: 'foldrajz',
      unitId: 'terkep-kozmikus-ter',
      title: 'Időszámítás: helyi idő, zónaidő és dátumválasztó vonal',
      level: 'kozep',
      requirement: {
        kozep:
          'Az alapvető átváltások: 15 hosszúsági fok = 1 óra időkülönbség = 1 időzóna; 1 hosszúsági fok = 4 perc időkülönbség; a helyi idő és a zónaidő kiszámítása; a Föld mozgásaihoz kapcsolódó időbeli léptékek.',
        emelt: 'A dátumválasztó vonal következményének alkalmazása feladatmegoldás során.',
      },
      minutes: 30,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**15 hosszúsági fok = 1 óra = 1 időzóna** és **1 hosszúsági fok = 4 perc**.',
            '**Helyi idő**: a Nap járásához igazodik (a Nap délben delel). Egy meridián minden pontján azonos. **Keletre** haladva **előbbre jár**, nyugatra haladva **később**.',
            '**Zónaidő**: egy 15°-os időzónán belül mindenhol ugyanaz, a zóna középső meridiánjának helyi ideje. **Világidő**: a greenwichi (0°) időzóna ideje.',
            'Magyarország a **közép-európai időzónában** van (15° k. h. a zóna közepe), ennek ideje a világidő + 1 óra, nyáron +2 óra.',
            '**Szökőév**: 366 napos, a 4-gyel osztható évek (kivéve a 100-zal oszthatókat, hacsak 400-zal nem oszthatók).',
            'Emelt: a **dátumválasztó vonal** (kb. 180°) átlépésekor keletre haladva egy nappal vissza, nyugatra haladva egy nappal előre ugrik a dátum.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az idő alapegységei' },
        {
          kind: 'compare',
          title: 'Időbeli lépték és csillagászati háttere',
          columns: ['Alapja', 'Hossza'],
          rows: [
            {
              label: 'Nap',
              cells: [
                'a Föld tengely körüli forgása',
                '24 óra (napszakok: pl. reggel, dél, este, éjszaka)',
              ],
            },
            { label: 'Év (napév)', cells: ['a Föld Nap körüli keringése', 'kb. 365,25 nap'] },
            {
              label: 'Naptári év',
              cells: ['a naptár egésszé kerekített éve', '365 nap, szökőévben 366 nap'],
            },
            { label: 'Holdhónap', cells: ['a holdfázisok váltakozása', 'kb. 29,5 nap'] },
          ],
        },
        {
          kind: 'text',
          text: 'A **szökőév** azért van, mert a napév nem pontosan 365 nap, hanem kb. 365,25 nap. A felgyülemlő negyednapokat négyévente egy beiktatott napban, február 29-én egyenlítik ki. A pontos szabály a Gergely-naptárban: szökőév az évszám, ha 4-gyel osztható, kivéve a 100-zal oszthatókat, amelyek csak akkor szökőévek, ha 400-zal is oszthatók. Így 1900 nem volt szökőév, 2000 igen, 2100 nem lesz, 2024 szökőév volt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **Juliánus-naptár** (Julius Caesar, i. e. 45) minden negyedik évet szökőévnek vette, így az év átlagos hossza 365,25 nap volt, vagyis kicsit (évente kb. 11 perccel) hosszabb a valódi napévnél (365,2422 nap). Ez kb. 128 év alatt 1 napot jelent, 1582-re kb. 10 napos eltérés alakult ki. XIII. Gergely pápa naptárreformja (**Gergely-naptár**, 1582) kihagyott 10 napot (1582. október 4-ét október 15. követte), és bevezette a fenti, pontosabb szökőévszabályt (átlagos évhossz 365,2425 nap, az eltérés kb. 3300 év alatt gyűlik fel egy napra).',
        },
        { kind: 'heading', text: 'Helyi idő' },
        {
          kind: 'text',
          text: 'Mivel a Föld nyugatról keletre forog, a Nap előbb ér a keletebbre lévő helyek déli állásába. A **helyi idő** (valódi napidő) a Nap járásához igazodik: abban a pillanatban 12 óra van, amikor a Nap az adott hely meridiánja felett delel. A Föld 360°-ot 24 óra alatt fordul: $\\frac{360^\\circ}{24\\ \\text{óra}} = 15^\\circ$ óránként, azaz $\\frac{60\\ \\text{perc}}{15^\\circ} = 4$ perc fokonként.',
        },
        {
          kind: 'formula',
          tex: '\\Delta t = \\Delta\\lambda \\cdot 4\\ \\text{perc}',
          caption:
            'A helyi időkülönbség a hosszúságkülönbség (fokban) szorozva 4 perccel. A keletebbre lévő helyen a helyi idő későbbi (előbbre jár).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: helyi időkülönbség',
          problem:
            'Egy 20° k. h. hosszúságú helyen 12:00 van helyi idő szerint. Mennyi a helyi idő a 50° k. h. és a 10° ny. h. hosszúságú helyen?',
          solution:
            '50° k. h.: a hosszúságkülönbség $50^\\circ - 20^\\circ = 30^\\circ$, így $30 \\cdot 4 = 120$ perc = 2 óra, **keletebbre**, ezért 2 órával előrébb jár: **14:00**.\n\n10° ny. h.: a hosszúságkülönbség $20^\\circ + 10^\\circ = 30^\\circ$ (a két oldalon lévő szögeket összeadjuk), 2 óra, **nyugatabbra**: **10:00**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: helyi idő Greenwichhez képest',
          problem:
            'Greenwichben (0°) 12:00 van. Mennyi a helyi idő a 75° ny. h. hosszúságú helyen?',
          solution:
            '$75 \\cdot 4 = 300$ perc = 5 óra. Nyugatabbra vagyunk, ezért 5 órával korábban: **07:00**.',
        },
        {
          kind: 'warning',
          text: 'Először mindig döntsd el, hogy a keresett hely **keletebbre** (későbbi idő, összeadás) vagy **nyugatabbra** (korábbi idő, kivonás) van. Ha a két hely a Greenwichi meridián két oldalán van, a hosszúságokat **össze kell adni**; ha azonos oldalon, ki kell vonni.',
        },
        { kind: 'heading', text: 'Zónaidő' },
        {
          kind: 'text',
          text: 'Ha mindenhol a helyi időt használnánk, szomszédos városokban is eltérő lenne az idő. Ezért a Földet 24 darab 15°-os **időzónára** osztották. Egy zónán belül mindenhol ugyanazt a **zónaidőt** használják: ez a zóna középső meridiánjának helyi ideje. A kiindulás a **0°-os zóna**, ahol a greenwichi helyi idő a **világidő** (UTC); Greenwichtől keletre haladva zónánként 1 órával nő, nyugatra csökken az idő.',
        },
        {
          kind: 'compare',
          title: 'Példák zónaidőre (az egyszerűsített 15°-os zónák szerint)',
          columns: ['Középső meridián', 'Zónaidő a világidőhöz képest'],
          rows: [
            { label: 'Greenwich (világidő)', cells: ['0°', '+0 óra'] },
            {
              label: 'Közép-európai idő (Magyarország)',
              cells: ['15° k. h.', '+1 óra (nyári időszámításkor +2 óra)'],
            },
            { label: 'Kelet-ázsiai zóna (pl. Japán)', cells: ['135° k. h.', '+9 óra'] },
            { label: 'Észak-amerikai keleti part zónája', cells: ['75° ny. h.', '−5 óra'] },
          ],
        },
        {
          kind: 'text',
          text: 'A valóságban az időzónák határai nem pontosan a meridiánokat követik: az országok és államok határaihoz igazodnak, néhány országban a zónák eltérnek az egész óráktól. A feladatokban a 15°-os szabályt használod. A nyári időszámítás (Magyarországon március végétől október végéig) a zónaidőhöz képest 1 órával előrébb állítja az órát.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: zónaidő és helyi idő Magyarországon',
          problem:
            'Egy 19° k. h. hosszúságú magyarországi városban hány perccel jár előbbre a helyi idő a közép-európai zónaidőnél? Mennyi a helyi idő, amikor a zónaidő 12:00?',
          solution:
            'A zóna középső meridiánja 15° k. h. A hosszúságkülönbség $19^\\circ - 15^\\circ = 4^\\circ$, ez $4 \\cdot 4 = 16$ perc. A város keletebbre van, ezért a helyi idő 16 perccel **előbbre jár**: amikor a zónaidő 12:00, a helyi idő **12:16**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: időkülönbség két zóna között',
          problem:
            'Budapesten (közép-európai zónaidő, 15° k. h.) 8:00 van. Mennyi a zónaidő Tokióban (135° k. h.) és New York partvidékén (75° ny. h.)?',
          solution:
            'Tokió: $\\frac{135^\\circ - 15^\\circ}{15^\\circ} = 8$ zónával keletebbre, tehát 8 órával későbbi: **16:00**.\n\nNew York: $\\frac{15^\\circ + 75^\\circ}{15^\\circ} = 6$ zónával nyugatabbra, 6 órával korábbi: **02:00**.',
        },
        { kind: 'heading', text: 'A dátumválasztó vonal' },
        {
          kind: 'text',
          emelt: true,
          text: 'A kezdő hosszúsági körrel szemben, a **180°-os** meridián mentén (nagyrészt a Csendes-óceánon, az országhatárokat és szigeteket kikerülve) húzódik a **dátumválasztó vonal**. Itt fordul át a naptári nap: a vonaltól nyugatra (Kelet-Ázsia, Óceánia) egy nappal **későbbi** a dátum, mint a vonaltól keletre (Amerika). Ha a vonalat átlépjük:',
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: [
            '**Nyugatról keletre haladva** (Ázsia felől Amerika felé) a dátum **egy nappal csökken** (ugyanazt a napot kétszer éled meg).',
            '**Keletről nyugatra haladva** (Amerika felől Ázsia felé) a dátum **egy nappal nő** (egy nap kimarad).',
            'A vonal két oldalán a zónaidő óraértéke azonos, a naptári nap viszont 24 órával tér el: nyugaton UTC+12, keleten UTC−12.',
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: időkülönbség a dátumválasztó vonalon át',
          problem:
            'Auckland a 180° meridián közelében van (zónaidő: világidő + 12 óra). Itt január 1-jén 08:00 van. Mennyi a zónaidő és mi a dátum a 150° ny. h. hosszúságú Honoluluban (világidő − 10 óra)?',
          solution:
            'Világidő: $08{:}00 - 12\\ \\text{óra} = $ december 31., 20:00.\n\nHonolulu: $20{:}00 - 10\\ \\text{óra} = $ december 31., **10:00**.\n\nAz időkülönbség 22 óra, és a dátum is eltér: Aucklandben január 1., Honoluluban még december 31.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: utazás át a dátumválasztó vonalon',
          problem:
            'Tokióból (135° k. h.) indul egy gép szeptember 1-jén 22:00 helyi (zónaidő szerint) órakor, és 9 óra utazás után Honoluluba érkezik (150° ny. h.). Mennyi a zónaidő és a dátum Honoluluban az érkezéskor?',
          solution:
            'A világidő az indulásnál: $22{:}00 - 9\\ \\text{óra} = 13{:}00$ szeptember 1. Az érkezéskor (+9 óra): 22:00 világidő, szeptember 1.\n\nHonolulu zónaidő: $22{:}00 - 10\\ \\text{óra} = 12{:}00$, **szeptember 1., 12:00**.\n\nA gép este indult, mégis délben érkezik ugyanazon a napon: 9 órát utazott, de a dátumválasztó vonalon keletre haladva a dátum egy nappal csökkent, ezért nem szeptember 2. lett.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Biztonságos módszer a feladatokhoz: számold át az időpontot **világidőre** (a zóna eltolását kivonva), majd onnan a célhely zónaidejére (hozzáadva az eltolását). A dátumot az átszámításból kapod, nem külön szabályból.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            '**Számítási feladat** (II. feladatlap): helyi idő meghatározása adott hosszúsághoz, zónaidő meghatározása, időkülönbség két város között.',
            'Atlaszból le kell olvasnod a város hosszúságát, a számításhoz vonalzó és számológép használható.',
            'Emelt szinten: összetett időzóna- és dátumfeladat, gyakran utazással vagy közvetítéssel.',
            'Tesztkérdés: szökőév, a dátumválasztó vonal haladási irányának következménye.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: a keleti és nyugati irány felcserélése (keletre előrébb jár az idő!); a szögek összeadása helyett kivonása, ha a két hely a Greenwichi meridián két oldalán van; a perc és óra keverése (1° = 4 **perc**, 15° = 1 óra); a nyári időszámítás figyelmen kívül hagyása, ha a feladat külön megadja.',
        },
        {
          kind: 'tip',
          text: 'Ellenőrzés: a keletebbre lévő helyen mindig későbbi az idő, mert a Nap ott korábban delel. Ha az eredményed nyugatabbra korábbi időt ad, jól számoltál.',
        },
      ],
      topicMatch: ['időszámítás', 'földrajzi koordináták', 'föld mozgásai', 'kozmikus környezet'],
      quiz: [
        {
          question: 'Hány perc időkülönbség felel meg 1 hosszúsági fokú különbségnek?',
          options: ['1 perc', '15 perc', '60 perc', '4 perc'],
          answer: 3,
          explanation:
            'A Föld 360°-ot 24 óra (1440 perc) alatt fordul, ezért $\\frac{1440}{360} = 4$ perc jut egy fokra.',
        },
        {
          question:
            'A 30° k. h. hosszúságú helyen 12:00 van helyi idő szerint. Mennyi a helyi idő a 60° k. h. hosszúságú helyen?',
          options: ['10:00', '14:00', '11:00', '13:00'],
          answer: 1,
          explanation:
            'A hosszúságkülönbség 30°, ez 2 óra. Keletebbre vagyunk, tehát később van: 14:00.',
        },
        {
          question:
            'Mekkora a közép-európai zónaidő középső meridiánja, és mennyi a világidőhöz képesti eltérése?',
          options: ['15° k. h., +1 óra', '0°, +1 óra', '30° k. h., +2 óra', '15° ny. h., −1 óra'],
          answer: 0,
          explanation:
            'Magyarország időzónájának középső meridiánja 15° k. h., ez 1 órával jár előrébb Greenwichnél.',
        },
        {
          question: 'Melyik év szökőév?',
          options: ['1900', '2100', '2023', '2000'],
          answer: 3,
          explanation:
            'A 2000 osztható 400-zal, tehát szökőév. Az 1900 és 2100 századfordulók, de nem oszthatók 400-zal; a 2023 nem osztható 4-gyel.',
        },
        {
          question:
            'Mi történik a dátummal, ha nyugatról keletre (Ázsia felől Amerika felé) átlépsz a dátumválasztó vonalon?',
          options: ['Egy nappal csökken.', 'Egy nappal nő.', 'Nem változik.', 'Két nappal nő.'],
          answer: 0,
          explanation:
            'A vonaltól nyugatra egy nappal későbbi a dátum. Keletre lépve ezt egy nappal csökkenteni kell: ugyanazt a napot kétszer éled meg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Időzóna', url: wiki('Időzóna') },
        { label: 'Wikipédia: Dátumválasztó vonal', url: wiki('Dátumválasztó vonal') },
        { label: 'Wikipédia: Szökőév', url: wiki('Szökőév') },
      ],
    },
    {
      id: 'urkutatas',
      subject: 'foldrajz',
      unitId: 'terkep-kozmikus-ter',
      title: 'Az űrkutatás',
      level: 'emelt',
      requirement: {
        emelt:
          'Az űrkutatás legfontosabb mérföldkövei; az űrkutatás eszközei és szerepük; a mesterséges égitestek jelentősége a Naprendszer, a Tejútrendszer és más galaxisok, exobolygók megismerésében; az űrkutatás eredményeinek gyakorlati hasznosítása; az űrkutatáshoz kapcsolódó magyar vonatkozású eredmények.',
      },
      minutes: 20,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1957**: Szputnyik-1, az első mesterséges hold. **1961**: Jurij Gagarin, az első ember a világűrben. **1969**: Neil Armstrong az első ember a Holdon (Apollo-11).',
            'Eszközök: **műhold**, **űrszonda**, **űrtávcső**, **űrhajó**, **űrrepülőgép (űrsikló)**, **űrállomás**. Mindegyiknek más a feladata.',
            'Az **űrtávcső** a légkör zavarása és elnyelése nélkül figyel (pl. Hubble). **Exobolygó**: a Naprendszeren kívüli csillag körül keringő bolygó.',
            'Gyakorlati haszon: műholdas navigáció (GPS), távközlés, meteorológia, távérzékelés.',
            'Magyar vonatkozás: **Farkas Bertalan** (1980, az első magyar űrhajós), **Bay Zoltán** (1946, radarvisszhang a Holdról).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az űrkutatás mérföldkövei' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1946',
              text: 'Bay Zoltán és munkatársai radarjelet vertek vissza a Holdról (magyar eredmény).',
            },
            {
              date: '1957',
              text: 'A Szovjetunió felbocsátja a Szputnyik-1-et, az első mesterséges holdat.',
            },
            {
              date: '1961',
              text: 'Jurij Gagarin a Vosztok-1 űrhajóval az első ember a világűrben, egyszer megkerüli a Földet.',
            },
            {
              date: '1969',
              text: 'Apollo-11: Neil Armstrong és Buzz Aldrin az első emberek a Holdon.',
            },
            { date: '1971', text: 'Szaljut-1, az első űrállomás.' },
            {
              date: '1977',
              text: 'A Voyager-1 és a Voyager-2 űrszonda indítása; a Voyager-1 2012-ben elhagyta a Naprendszer védő "buborékját", és a csillagközi térbe jutott.',
            },
            {
              date: '1980',
              text: 'Farkas Bertalan az első magyar űrhajós (Szojuz-36, Szaljut-6).',
            },
            {
              date: '1981–2011',
              text: 'Az űrrepülőgépek (űrsiklók) korszaka: újrafelhasználható űrjárművek.',
            },
            { date: '1990', text: 'A Hubble űrtávcső felbocsátása.' },
            {
              date: '1998-',
              text: 'A Nemzetközi Űrállomás (ISS) építése, 2000 óta folyamatosan lakott.',
            },
            {
              date: '2009',
              text: 'A Kepler űrtávcső indítása, amely több ezer exobolygót fedezett fel.',
            },
          ],
        },
        { kind: 'heading', text: 'Az űrkutatás eszközei' },
        {
          kind: 'terms',
          items: [
            {
              term: 'műhold',
              text: 'a Föld körül keringő mesterséges égitest: távközlési, meteorológiai, navigációs, földmegfigyelő és tudományos műholdak.',
            },
            {
              term: 'űrszonda',
              text: 'ember nélküli eszköz, amely a Naprendszer távoli égitestjeit (bolygókat, holdakat, kisbolygókat, üstökösöket) közelről vizsgálja, vagy leszáll rájuk (pl. Voyager, Marsjárók).',
            },
            {
              term: 'űrtávcső',
              text: 'a légkör felett keringő távcső; a légkör zavaró hatása és elnyelése nélkül dolgozik, a Föld felszínéről nem megfigyelhető tartományokban is (pl. ultraibolya, infravörös, röntgen): Hubble, Kepler, James Webb.',
            },
            {
              term: 'űrhajó',
              text: 'embert szállító, a világűrbe induló jármű (pl. Vosztok, Szojuz, Apollo).',
            },
            {
              term: 'űrrepülőgép (űrsikló)',
              text: 'rakétával indított, szárnyas, vízszintesen leszálló, részben újrafelhasználható jármű (1981–2011).',
            },
            {
              term: 'űrállomás',
              text: 'a Föld körül keringő, hosszabb időre lakható berendezés (Szaljut, Mir, Nemzetközi Űrállomás). Itt tudományos kísérleteket végeznek, a súlytalanság körülményei között.',
            },
            {
              term: 'űrszemét',
              text: 'elhasznált rakétafokozatok, működésképtelen műholdak és töredékeik a pályán; nagy sebességük miatt veszélyt jelentenek a működő műholdakra és az űrhajókra.',
            },
            {
              term: 'exobolygó',
              text: 'a Naprendszeren kívüli csillag körül keringő bolygó; felfedezésükben a Kepler űrtávcső tett nagy lépést.',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Pályák',
          columns: ['Magasság', 'Jellemzője'],
          rows: [
            {
              label: 'Alacsony Föld körüli pálya (pl. ISS)',
              cells: [
                'kb. 400 km',
                'keringési ideje kb. 90 perc; földmegfigyelő műholdak és az űrállomás is itt kering',
              ],
            },
            {
              label: 'Geostacionárius pálya',
              cells: [
                'kb. 36 000 km (az Egyenlítő fölött)',
                'keringési ideje 24 óra, így a műhold a Föld egy pontja fölött "áll"; távközlési és meteorológiai műholdak',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: rádiójel a Holdról és a geostacionárius pályáról',
          problem:
            'Mennyi idő alatt ér a rádiójel a Hold felszínéről a Földre (384 400 km), illetve egy 35 786 km magasan keringő geostacionárius műholdról a Földre? A rádiójel sebessége 299 792 km/s.',
          solution:
            'A Holdról: $t = \\frac{384\\,400}{299\\,792} \\approx 1{,}28\\ \\text{s}$ (oda-vissza kb. 2,6 s).\n\nA geostacionárius pályáról: $t = \\frac{35\\,786}{299\\,792} \\approx 0{,}12\\ \\text{s}$. Ezért van kis késés a műholdas adásban.',
        },
        { kind: 'heading', text: 'Mit tudunk meg a világegyetemről az űreszközökkel?' },
        {
          kind: 'keypoints',
          items: [
            '**Naprendszer**: űrszondák kerültek a bolygók, holdak, kisbolygók és üstökösök közelébe, mintákat hoztak vissza, Marsjárók és leszállóegységek dolgoztak a felszínen, a Nap-megfigyelő műholdak az űridőjárást követik.',
            '**Tejútrendszer**: az űrtávcsövek a csillagok keletkezését, szerkezetét és a galaxis közepét vizsgálják.',
            '**Más galaxisok**: a Hubble űrtávcső nagyon távoli galaxisokat is megfigyelt, és ezzel a Világegyetem tágulását és korát segített pontosítani.',
            '**Exobolygók**: az űrtávcsövek a csillag fényének apró elhalványulásából mutatják ki, hogy bolygó halad el előtte; ma már több ezer ismert exobolygó van.',
          ],
        },
        { kind: 'heading', text: 'Gyakorlati hasznosítás' },
        {
          kind: 'keypoints',
          items: [
            '**Navigáció**: GPS és más műholdas rendszerek.',
            '**Távközlés**: műholdas televízió, telefon, internet.',
            '**Meteorológia**: felhőzet- és viharkövetés, előrejelzés.',
            '**Földmegfigyelés**: mezőgazdaság, erdők, vizek, árvizek, városok, éghajlat-változás követése.',
            '**Új anyagok és technológiák**: az űrkutatás miniatürizált elektronikát, új anyagokat és orvosi műszereket is fejlesztett.',
          ],
        },
        { kind: 'heading', text: 'Magyar vonatkozású eredmények' },
        {
          kind: 'people',
          items: [
            {
              name: 'Bay Zoltán',
              text: 'fizikus; 1946-ban munkatársaival radarjelet vert vissza a Holdról, és ezzel kimutatta, hogy a rádióhullámok eljutnak a Holdig és vissza (a "radarcsillagászat" kezdete).',
            },
            {
              name: 'Farkas Bertalan',
              text: 'az első magyar űrhajós: 1980-ban a Szojuz-36 fedélzetén a Szaljut-6 űrállomásra repült, szovjet-magyar közös program (Interkozmosz) keretében.',
            },
            {
              name: 'Magyar műszerek',
              text: 'magyar fejlesztésű műszerek (például a Pille sugárzásmérő) űrállomásokon is dolgoztak.',
            },
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Johannes Kepler',
              text: 'német csillagász (1571–1630); a bolygómozgás törvényeit fogalmazta meg, a Kepler űrtávcsövet is róla nevezték el.',
            },
            {
              name: 'Jurij Gagarin',
              text: 'szovjet űrhajós, 1961-ben az első ember a világűrben.',
            },
            { name: 'Neil Armstrong', text: 'amerikai űrhajós, 1969-ben az első ember a Holdon.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű témakör: a szóbeli tételek között a kozmikus tér témakörön belül szerepelhet.',
            'Kronológiai párosítás: esemény és év (Szputnyik, Gagarin, Armstrong), vagy személy és esemény.',
            'Eszközök megnevezése: melyik eszköz végzi a megadott feladatot (pl. űrtávcső: exobolygók, űrszonda: bolygók közeli vizsgálata, űrállomás: hosszú tartózkodás).',
            'Gyakorlati hasznosítás és magyar vonatkozások felsorolása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: az űrhajó, az űrszonda és az űrállomás felcserélése (az űrszonda ember nélküli, az űrhajó embert szállít, az űrállomás hosszabb tartózkodásra való); az "első hold" és az "első ember" összekeverése (Szputnyik-1 1957: első műhold; Gagarin 1961: első ember a világűrben; Armstrong 1969: első ember a Holdon).',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz-vázlat ("Mutasd be az űrkutatás eszközeit és szerepüket"): 1. a Föld körül: műholdak (távközlés, navigáció, meteorológia), űrállomás; 2. a Naprendszerben: űrszondák; 3. a távoli világűr: űrtávcsövek; 4. az ember a világűrben: űrhajó, űrrepülőgép; mindegyikhez egy példa és egy gyakorlati haszon.',
        },
      ],
      topicMatch: ['űrkutatás', 'kozmikus környezet'],
      quiz: [
        {
          question: 'Mikor és melyik eszközzel jutott fel az első mesterséges hold a világűrbe?',
          options: ['1957, Szputnyik-1', '1969, Apollo-11', '1961, Vosztok-1', '1990, Hubble'],
          answer: 0,
          explanation:
            'Az első mesterséges holdat, a Szputnyik-1-et 1957-ben a Szovjetunió bocsátotta fel. A Vosztok-1 Gagarin repülése (1961), az Apollo-11 a Holdraszállás (1969).',
        },
        {
          question: 'Ki volt az első magyar űrhajós?',
          options: ['Bay Zoltán', 'Jurij Gagarin', 'Farkas Bertalan', 'Neil Armstrong'],
          answer: 2,
          explanation:
            'Farkas Bertalan 1980-ban a Szojuz-36 fedélzetén jutott a világűrbe. Bay Zoltán fizikus, nem űrhajós.',
        },
        {
          question: 'Miért előnyös az űrtávcső a földi távcsővel szemben?',
          options: [
            'Mert közelebb van a csillagokhoz.',
            'Mert a légkör zavarása és elnyelése nélkül tud megfigyelni, olyan tartományokban is, amelyeket a légkör elnyel.',
            'Mert nem igényel áramot.',
            'Mert csak a Napot figyeli.',
          ],
          answer: 1,
          explanation:
            'A csillagok távolsága így sem változik számottevően. Az előny, hogy a légkör felett nincs légköri zavarás és elnyelés (pl. ultraibolya, röntgen megfigyelhető).',
        },
        {
          question: 'Mi az exobolygó?',
          options: [
            'A Naprendszer legkülsőbb bolygója.',
            'A Nap körül keringő törpebolygó.',
            'Mesterséges bolygó a Föld körüli pályán.',
            'A Naprendszeren kívüli csillag körül keringő bolygó.',
          ],
          answer: 3,
          explanation:
            'Az exobolygó más csillag körül kering. Felfedezésüket nagyban segítette a Kepler űrtávcső.',
        },
        {
          question: 'Mi jellemzi a geostacionárius pályán keringő műholdat?',
          options: [
            'A Föld egy pontja felett áll, mert keringési ideje 24 óra, és az Egyenlítő fölött kering.',
            'A Nap körül kering.',
            'A sarkok felett halad át minden körben.',
            'Mindig a Hold közelében kering.',
          ],
          answer: 0,
          explanation:
            'A kb. 36 000 km magasan, az Egyenlítő fölött keringő műhold a Föld forgásával megegyező idő alatt kerüli meg a Földet, így a Földről egy helyben állónak látszik.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Űrkutatás', url: wiki('Űrkutatás') },
        { label: 'Wikipédia: Farkas Bertalan', url: wiki('Farkas Bertalan') },
        { label: 'Wikipédia: Bay Zoltán', url: wiki('Bay Zoltán') },
      ],
    },
  ],
};

export default unit;
