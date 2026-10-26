import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 6 (A nemzetgazdaságtól a globális világgazdaságig), 6.1–6.4. */
const unit: GuideUnit = {
  id: 'vilaggazdasag',
  subject: 'foldrajz',
  order: 60,
  title: 'A nemzetgazdaságtól a globális világgazdaságig',
  requirementRef:
    '6.1 A nemzetgazdaságok és a világgazdaság; 6.2 Integrációs folyamatok; 6.3 A globalizáció; 6.4 A monetáris világ',
  intro:
    'Hogyan működik egy piacgazdaság, mitől fejlett egy ország, miért szövetkeznek az államok, mit jelent a globalizáció, és hogyan működik a pénz, a hitel, az infláció és az árfolyam? Számítási példákkal, amilyeneket a vizsga is kér.',
  requirementSource:
    'A követelmények, a fogalmak és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (6.1–6.4). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'termelés, fogyasztás, termelékenység, természeti erőforrás, nemzetközi munkamegosztás, szakosodás (specializáció), társadalmi (humán) erőforrás, telepítő tényező, gazdasági ág és ágazat, gazdasági szektor, gazdasági szerkezet, mezőgazdaság, ipar, szolgáltatások, primer, szekunder, tercier és kvaterner szektor, információs gazdaság, kutatás-fejlesztés (K+F tevékenység), innováció, húzóágazat, válságágazat, aktív kereső, eltartott, munkanélküli, foglalkoztatási szerkezet, gazdasági szerkezetváltás, foglalkozási átrétegződés, gazdasági fejlettség, gazdasági növekedés, gazdasági visszaesés, bruttó hazai termék (GDP), bruttó nemzeti jövedelem (GNI), alacsony, közepes és magas jövedelmű ország, életszínvonal, fejlett és fejlődő ország, világgazdasági pólus (centrum térség), világgazdasági erőtér, félperiféria térség, periféria térség, világgazdaság, világpiac, nemzetgazdaság, piacgazdaság, tervutasításos gazdaság, gazdasági rendszerváltoztatás, állami, szövetkezeti és magántulajdon, privatizáció, piac, ár, kínálat, kereslet, haszon (profit), piaci verseny, versenyképesség, adó, agrárország, ipari (indusztriális) társadalom, ipar utáni (posztindusztriális) társadalom, információs társadalom, duális gazdasági szerkezet, belkereskedelem és külkereskedelem, szabadkereskedelem, protekcionizmus, vám, kvóta, külkereskedelmi áruszerkezet, pozitív és negatív külkereskedelmi mérleg',
        'integráció, kedvezményes (preferenciális) kereskedelmi övezet, szabadkereskedelmi övezet, vámunió, közös piac, gazdasági unió, pénzügyi (monetáris) unió, politikai unió, regionális együttműködés, regionális politika, régió, eurorégió',
        'kőolajár-robbanás, túltermelési válság, tömegáru-termelés, multinacionális vállalat, tudományos-technikai forradalom, globalizáció, világgazdasági korszakváltás, globális világgazdaság, transznacionális vállalat (TNC), anyavállalat, leányvállalat, társadalmi-gazdasági egyenlőtlenség, világtermék',
        'pénz, készpénz, papírpénz (bankjegy), fémpénz (érme), bankszámlapénz, folyószámla, valuta, deviza, konvertibilitás, valutaárfolyam, értékpapírok (állampapír, kötvény, részvény), rövid és hosszú lejáratú hitel, rögzített (fix) és változó kamatozású hitel, devizahitel, kamat, hozam, hitelképesség, infláció, érték- és árutőzsde, pénztőke, működőtőke, nemzetközi tőkeáramlás, értékpapír-befektetés, működőtőke-befektetés',
        'Triád, BRICS országok, újonnan iparosodott országok, Európai Unió, Európai Parlament, Európai Unió Tanácsa, Európai Bizottság, Európai Tanács, Európai Központi Bank, Európai Unió Bírósága, Egyesült Nemzetek Szervezete (ENSZ), az ENSZ Nevelésügyi, Tudományos és Kulturális Szervezete (UNESCO), Egészségügyi Világszervezet (WHO), Észak-atlanti Szerződés Szervezete (NATO), Kőolaj-exportáló Országok Szervezete (OPEC), Visegrádi Együttműködés (V4), Kárpátok Eurorégió',
      ],
      emelt: [
        'extenzív és intenzív gazdasági növekedés, életminőség, emberi fejlettség indexe (HDI), jóléti állam, szociális háló, egyéni és társas vállalkozás, ipari park, robotizáció, áru- és szolgáltatáskereskedelem, exporttámogatás (szubvenció), árudömping, embargó, cserearányromlás',
        'árucsere (barter), árupénz, tőzsdeindex, államháztartás, költségvetés, költségvetési egyensúly, mérleghiány (deficit), mérlegtöbblet (szufficit), barnamezős (rekonstrukciós) és zöldmezős beruházás, adósság, eladósodás, külső és belső adósságállomány, átütemezés, adósságcsapda, adósságválság, lekötöttség (likviditás), THM, EBKM, állami és EU-támogatás, támogatott hitel, önerő, monetáris világgazdaság, adóparadicsom, offshore cég',
        'Európa Tanács, Amerikai Egyesült Államok−Mexikó−Kanada Egyezmény (USMCA), Ázsiai és Csendes-óceáni Gazdasági Együttműködés (APEC), Délkelet-ázsiai Nemzetek Szövetsége (ASEAN), Dél-amerikai Közös Piac (MERCOSUR), Gazdasági Együttműködési és Fejlesztési Szervezet (OECD), G8, Világkereskedelmi Szervezet (WTO), Dow Jones-index, BUX-index, Nemzetközi Valutaalap (IMF), Világbank',
      ],
    },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'piacgazdasag-es-allam',
      subject: 'foldrajz',
      unitId: 'vilaggazdasag',
      title: 'Piacgazdaság, állam és külkereskedelem',
      level: 'kozep',
      requirement: {
        kozep:
          'Mutassa be a piacgazdaság működési elveit. Mutassa be az állam piacgazdaságban betöltött szerepét.',
        emelt:
          'Értelmezze a nemzetgazdaságok hagyományos és a globális világgazdaságban betöltött szerepét.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **piacgazdaságban** a termelők és a fogyasztók döntéseit a **piac** hangolja össze: az **ár** a **kereslet** és a **kínálat** találkozásából alakul ki.',
            'A fő hajtóerő a **haszon (profit)** és a **piaci verseny**; az állam kereteket szab (jog, adó, közszolgáltatás, szabályozás).',
            'A **tervutasításos gazdaságban** a termelést és az árakat központi terv határozza meg, a termelőeszközök zömmel állami tulajdonban vannak.',
            'A **gazdasági rendszerváltoztatás** során a tervutasításos rendszerből piacgazdaság lett: **privatizáció**, árak felszabadítása.',
            'Az országok **külkereskedelmet** folytatnak. A **szabadkereskedelem** akadályok nélküli, a **protekcionizmus** a hazai termelőt védi (**vám**, **kvóta**).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kereslet',
              text: 'Amennyi árut a vevők egy adott áron meg akarnak és meg tudnak venni.',
            },
            {
              term: 'kínálat',
              text: 'Amennyi árut az eladók egy adott áron kész eladni.',
            },
            {
              term: 'vám',
              text: 'A határon átlépő (főleg importált) áru után fizetett adó.',
            },
            {
              term: 'kvóta',
              text: 'Mennyiségi korlát: legfeljebb ennyi árut lehet behozni (vagy kivinni).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan működik a piac?' },
        {
          kind: 'text',
          text: 'A **nemzetgazdaság** egy ország egész gazdasága. A **piacgazdaságban** a **magántulajdon** (egyéni és társas vállalkozások) a meghatározó, a vállalatok **versenyeznek** a vevőkért, és a **haszonra** törekszenek. Az **ár** jelzi, mi mennyire szűkös: ha egy áruból több kell, mint amennyi van, az ára nő, a termelők pedig többet kezdenek gyártani.',
        },
        {
          kind: 'text',
          text: 'Ha az ár **nő**, a vevők kevesebbet kérnek (a kereslet csökken), az eladók viszont többet kínálnak (a kínálat nő). Az **egyensúlyi ár** ott alakul ki, ahol a két mennyiség egyenlő. A **helyettesítő termék** drágulása más termék keresletét növeli (például a vaj drágulásakor többen vesznek margarint).',
        },
        {
          kind: 'plot',
          title: 'Kereslet és kínálat (kitalált példa)',
          x: [0, 50],
          y: [0, 100],
          functions: [
            { label: 'Kereslet: ár = 100 − 2 · mennyiség', fn: (q) => 100 - 2 * q },
            { label: 'Kínálat: ár = 20 + 2 · mennyiség', fn: (q) => 20 + 2 * q },
          ],
          points: [{ x: 20, y: 60, label: 'Egyensúly: 20 db, 60 pénzegység' }],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: egyensúlyi ár',
          problem:
            'A fenti (kitalált) piacon a kereslet $p = 100 - 2q$, a kínálat $p = 20 + 2q$. Mennyi az egyensúlyi mennyiség és ár? Mi történik, ha az ár 80 pénzegység?',
          solution:
            'Egyensúlyban a két ár egyenlő: $100 - 2q = 20 + 2q$, vagyis $4q = 80$, $q = 20$. Az ár ekkor $100 - 2 \\cdot 20 = 60$.\n\n80 pénzegységnél a kereslet $q = (100 - 80)/2 = 10$, a kínálat $q = (80 - 20)/2 = 30$. A kínálat 20 egységgel nagyobb a keresletnél, vagyis **árufelesleg** van, ami az árak csökkenése felé hat.',
        },
        { kind: 'heading', text: 'Az állam szerepe' },
        {
          kind: 'text',
          text: 'A piacgazdaságban is van állami szerep. Az állam **jogi keretet** ad (tulajdon védelme, versenyszabályok), **adót** szed, és abból **közszolgáltatásokat** nyújt (oktatás, egészségügy, közlekedési hálózat), valamint **szabályozza** a gazdaságot (például környezetvédelmi előírásokkal). Azt, hogy az államnak mekkora legyen a szerepe, a gazdaságpolitikai irányzatok eltérően ítélik meg: van, aki kisebb, van, aki nagyobb állami jelenlétet tart jónak.',
        },
        {
          kind: 'compare',
          title: 'Két gazdasági rendszer fő vonásai',
          columns: ['Piacgazdaság', 'Tervutasításos gazdaság'],
          rows: [
            {
              label: 'Tulajdon',
              cells: [
                'túlnyomórészt magántulajdon',
                'túlnyomórészt állami és szövetkezeti tulajdon',
              ],
            },
            {
              label: 'Mit termeljenek?',
              cells: [
                'a vállalatok döntik el, a kereslet alapján',
                'a központi terv írja elő a mennyiségeket',
              ],
            },
            {
              label: 'Az árak',
              cells: ['a kereslet és a kínálat alakítja', 'jórészt hatóságilag meghatározottak'],
            },
            {
              label: 'Hajtóerő',
              cells: ['haszon, verseny', 'a tervteljesítés'],
            },
            {
              label: 'Jellemző előny és hátrány',
              cells: [
                'rugalmas, innovációra ösztönöz; de nagyok lehetnek a jövedelemkülönbségek',
                'a tervezhető ellátás és a foglalkoztatás biztonsága; de a terv nehezen követi a valódi igényeket, hiányjelenségek alakulhatnak ki',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **gazdasági rendszerváltoztatás** (például a volt szocialista országokban 1989–1990 után) a tervutasításos rendszer piacgazdasággá alakítása: az állami vagyont **privatizálták** (állami, szövetkezeti tulajdonból magántulajdon lett), felszabadították az árakat, és megnyitották a külkereskedelmet.',
        },
        { kind: 'heading', text: 'Külkereskedelem' },
        {
          kind: 'text',
          text: 'A **belkereskedelem** az ország határain belüli, a **külkereskedelem** a más országokkal folytatott áruforgalom (**export** = kivitel, **import** = behozatal). A **nemzetközi munkamegosztás** és a **szakosodás (specializáció)** azért éri meg, mert minden ország azt termeli, amihez a legjobbak az adottságai, a többit megveszi. A **külkereskedelmi áruszerkezet** azt mutatja, milyen termékcsoportokból áll a kivitel és a behozatal (nyersanyag, félkész termék, gép, élelmiszer stb.).',
        },
        {
          kind: 'compare',
          title: 'Szabadkereskedelem és protekcionizmus',
          columns: ['Szabadkereskedelem', 'Protekcionizmus'],
          rows: [
            {
              label: 'Lényege',
              cells: [
                'nincsenek vagy kicsik a külkereskedelmi akadályok',
                'a belföldi termelők védelme a külföldi versennyel szemben',
              ],
            },
            {
              label: 'Eszközei',
              cells: ['vámcsökkentés, kvóták megszüntetése', 'vám, kvóta'],
            },
            {
              label: 'Érv mellette',
              cells: [
                'olcsóbb áruk, nagyobb választék, verseny',
                'a hazai ipar és a munkahelyek védelme',
              ],
            },
            {
              label: 'Kockázat',
              cells: [
                'a gyengébb hazai termelők kiszorulhatnak',
                'drágább áruk, bosszúvámok, kisebb verseny',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **külkereskedelmi mérleg** a kivitel és a behozatal értékének különbsége: ha az export nagyobb, a mérleg **pozitív** (többlet), ha az import nagyobb, **negatív** (hiány).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: külkereskedelmi mérleg',
          problem:
            'Egy ország exportja egy évben 80, importja 92 milliárd dollár. Mekkora a külkereskedelmi mérleg? Pozitív vagy negatív?',
          solution:
            'Mérleg = export − import = $80 - 92 = -12$ milliárd dollár. A mérleg **negatív**, vagyis az országnak külkereskedelmi hiánya van.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'jóléti állam, szociális háló',
              text: 'Az állam adóbevételből széles körű ellátást biztosít (egészségügy, oktatás, nyugdíj, munkanélküli-ellátás). A szociális háló a rászorulókat segítő támogatások rendszere.',
              emelt: true,
            },
            {
              term: 'exporttámogatás (szubvenció)',
              text: 'Az állam pénzzel támogatja a kivitelt, így a termék olcsóbban kínálható külföldön.',
              emelt: true,
            },
            {
              term: 'árudömping',
              text: 'Az áru külföldön a belföldi áránál (vagy az előállítási költségnél) olcsóbban kerül piacra, hogy kiszorítsa a versenytársakat.',
              emelt: true,
            },
            {
              term: 'embargó',
              text: 'Egy országgal szembeni kereskedelmi tilalom (egyes áruk vagy az egész áruforgalom tilalma), általában politikai nyomásgyakorlás eszköze.',
              emelt: true,
            },
            {
              term: 'cserearányromlás',
              text: 'Az exportált termékek ára az importáltakhoz képest csökken, ezért ugyanannyi kivitelből kevesebb behozatalt lehet fizetni.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: cserearányromlás',
          problem:
            'Egy nyersanyagexportáló ország 1 tonna nyersanyagot 400 dollárért ad el, egy gép ára 20 000 dollár. Hány tonna nyersanyagból fizethető egy gép? Hány tonnából, ha a nyersanyag ára 20%-kal csökken, a gép ára változatlan?',
          solution:
            'Eredetileg $20\\,000 / 400 = 50$ tonna kell egy gépért. Az új nyersanyagár $400 \\cdot 0{,}8 = 320$ dollár, így $20\\,000 / 320 = 62{,}5$ tonna. Ugyanazért a gépért 12,5 tonnával többet kell kivinni: ez a **cserearányromlás**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalmak párosítása: piacgazdaság, tervutasításos gazdaság, privatizáció, vám, kvóta, szabadkereskedelem, protekcionizmus.',
            'Rövid kifejtés: mi határozza meg az árat, mi az állam szerepe a piacgazdaságban.',
            'Számítás: külkereskedelmi mérleg, árváltozás hatása; táblázat vagy diagram értelmezése (például export-import adatok).',
            'Szóbeli tétel: a gazdasági rendszerváltoztatás okai és következményei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a vámot és a kvótát összekeverni. A vám **pénzben** (adóként) drágítja az importot, a kvóta **mennyiségben** korlátozza. Másik hiba: a piacgazdaságot állami szerep nélkülinek leírni, miközben az állam keretet és közszolgáltatást ad.',
        },
        {
          kind: 'tip',
          text: 'Rendszerek összehasonlításánál mindig ugyanazokat a szempontokat vedd sorra (tulajdon, ki dönt a termelésről, hogyan alakul az ár, mi a hajtóerő), és értékelő jelzők nélkül, tényszerűen írd le mindkettőt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a külkereskedelmi eszközök (exporttámogatás, árudömping, embargó) hatását kell tudnod magyarázni, és a cserearányromlást a nyersanyagexportáló országok helyzetével kell összekötnöd.',
        },
      ],
      topicMatch: [
        '=piacgazdaság',
        'kereslet és kínálat',
        'árképződés',
        'külkereskedelem',
        '=gazdaság',
        'helyettesítő termékek',
        'gazdasági ciklus',
        'világkereskedelem',
      ],
      quiz: [
        {
          question: 'Mi alakítja ki az árat a piacgazdaságban?',
          options: [
            'A központi terv',
            'A kereslet és a kínálat találkozása',
            'Kizárólag a vámok mértéke',
            'Az aktív keresők száma',
          ],
          answer: 1,
          explanation:
            'A piacgazdaságban az ár a kereslet és a kínálat egyensúlyából alakul ki. Központi terv a tervutasításos gazdaságban rendelkezik az árakról.',
        },
        {
          question: 'Melyik állítás igaz a kvótára?',
          options: [
            'Az importált áru után fizetett adó',
            'Az állami támogatás az exportőröknek',
            'Mennyiségi korlát a behozatalra vagy kivitelre',
            'A külföldi pénz bankszámlán lévő formája',
          ],
          answer: 2,
          explanation:
            'A kvóta mennyiségi korlát. Az importadó a vám, az exporttámogatás a szubvenció, a bankszámlán lévő külföldi pénz a deviza.',
        },
        {
          question:
            'Egy ország exportja 150, importja 130 milliárd dollár. Milyen a külkereskedelmi mérlege?',
          options: [
            'Negatív, 20 milliárd dollár',
            'Pozitív, 280 milliárd dollár',
            'Negatív, 280 milliárd dollár',
            'Pozitív, 20 milliárd dollár',
          ],
          answer: 3,
          explanation:
            'A mérleg az export és az import különbsége: $150 - 130 = +20$. Mivel az export nagyobb, a mérleg pozitív.',
        },
        {
          question: 'Mit jelent a privatizáció?',
          options: [
            'Állami vagy szövetkezeti vagyon magántulajdonba adását',
            'A vámok eltörlését',
            'Az árak központi rögzítését',
            'A külföldi tőke kitiltását',
          ],
          answer: 0,
          explanation:
            'A privatizáció az állami (vagy szövetkezeti) vagyon magántulajdonba kerülése, a gazdasági rendszerváltoztatás fontos eleme.',
        },
        {
          emelt: true,
          question: 'Mit jelent a cserearányromlás?',
          options: [
            'Az export ára az importhoz képest csökken, ezért ugyanannyi kivitelből kevesebb behozatal fizethető',
            'A kivitel mennyisége nő a behozatalhoz képest',
            'A hazai valuta árfolyama erősödik',
            'Az országok közötti vámok emelkednek',
          ],
          answer: 0,
          explanation:
            'A cserearány a kivitel és a behozatal árának viszonya. Ha az exportált áruk ára az importáltakhoz képest csökken, romlik a cserearány.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Piacgazdaság', url: wiki('Piacgazdaság') },
        { label: 'Wikipédia: Kereslet és kínálat', url: wiki('Kereslet és kínálat') },
        { label: 'Wikipédia: Protekcionizmus', url: wiki('Protekcionizmus') },
      ],
    },
    {
      id: 'gazdasagi-szerkezet-telepito-tenyezok',
      subject: 'foldrajz',
      unitId: 'vilaggazdasag',
      title: 'Gazdasági szektorok, foglalkoztatási szerkezet és telepítő tényezők',
      level: 'kozep',
      requirement: {
        kozep:
          'Nevezze meg a gazdaság szerveződését befolyásoló telepítő tényezőket, nevezzen meg példákat szerepük átalakulására. Mutassa be a gazdaság ágazati és szektorok szerinti felépítését, a gazdasági ágak és szektorok fő jellemzőit. Elemezze a népesség gazdasági aktivitás szerinti jellemzőit. Mutassa be a gazdasági szerkezet átalakulását, a népesség foglalkoztatási szerkezetét és annak átalakulását. Értelmezzen a gazdasági és a foglalkoztatási szerkezetet, illetve ezek változását bemutató adatsorokat, ábrákat.',
        emelt:
          'A középszinti követelményeken túl az emelt szintű fogalmakat is kéri (extenzív és intenzív gazdasági növekedés, ipari park, robotizáció).',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A gazdaságot **szektorokra** osztjuk: **primer** (mezőgazdaság és más nyersanyag-kitermelés), **szekunder** (ipar), **tercier** (szolgáltatások), **kvaterner** (információ, K+F, tudásalapú szolgáltatások).',
            'A **foglalkoztatási szerkezet** azt mutatja, hogy a dolgozók hány százaléka dolgozik az egyes szektorokban.',
            'Fejlődéssel a foglalkozási **átrétegződés** iránya: **agrárország** → **ipari társadalom** → **ipar utáni (posztindusztriális)**, **információs társadalom**.',
            'A **telepítő tényezők** (nyersanyag, energia, munkaerő, tőke, piac, közlekedés, tudás stb.) döntik el, hol jön létre egy gazdasági tevékenység. Szerepük **átalakul**: a nyersanyag szerepe csökken, a tudásé nő.',
            'A **népesség** gazdasági szempontból **gazdaságilag aktívakra** (foglalkoztatottak és munkanélküliek) és **inaktívakra, eltartottakra** oszlik; az **aktív kereső** a foglalkoztatott.',
          ],
        },
        {
          kind: 'compare',
          title: 'A négy szektor',
          columns: ['Jellemzés', 'Példák'],
          rows: [
            {
              label: 'Primer (elsődleges)',
              cells: [
                'a természetből közvetlenül nyert termékek',
                'mezőgazdaság, erdőgazdálkodás, halászat',
              ],
            },
            {
              label: 'Szekunder (másodlagos)',
              cells: ['a nyersanyagok feldolgozása, termékek gyártása', 'ipar, építőipar'],
            },
            {
              label: 'Tercier (harmadlagos)',
              cells: [
                'szolgáltatások',
                'kereskedelem, közlekedés, pénzügy, turizmus, oktatás, egészségügy',
              ],
            },
            {
              label: 'Kvaterner (negyedleges)',
              cells: [
                'tudás- és információalapú szolgáltatások',
                'informatika, kutatás-fejlesztés (K+F), információs szolgáltatások',
              ],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ágazatok és szektorok' },
        {
          kind: 'text',
          text: 'A **gazdasági ág** a gazdaság azonos jellegű tevékenységeinek csoportja (például mezőgazdaság, ipar, közlekedés). Az **ágazat** egy ágon belüli szűkebb terület (például az iparon belül a gépipar, a vegyipar, az élelmiszeripar). A **szektorok** az ágakat nagyobb egységekbe vonják össze. A **gazdasági szerkezet** az ágak és szektorok egymáshoz viszonyított súlya, jellemzően a GDP-ben (az ország gazdasági teljesítményében) vagy a foglalkoztatottak között.',
        },
        {
          kind: 'warning',
          text: 'A bányászatot az iskolai besorolások egy része a primer szektorhoz (nyersanyag-kitermelés), más része az iparhoz (szekunder) sorolja. Feladatban mindig a megadott besorolás vagy a feladat szövege szerint dönts.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'információs gazdaság',
              text: 'Olyan gazdaság, amelyben az információ előállítása, feldolgozása és továbbítása az értékteremtés kulcsa.',
            },
            {
              term: 'K+F tevékenység, innováció',
              text: 'A kutatás-fejlesztés új tudást és új technológiát hoz létre. Az innováció az új ötletek gyakorlati megvalósítása (új termék, eljárás).',
            },
            {
              term: 'húzóágazat, válságágazat',
              text: 'A húzóágazat gyorsan fejlődik és a többi ágat is maga után húzza (például informatika). A válságágazat visszaszorul, munkahelyeket veszít (például a hagyományos nehézipari ágak egyes régiókban).',
            },
            {
              term: 'termelékenység',
              text: 'Az egységnyi ráfordításra (például egy dolgozóra vagy egy munkaórára) jutó termelés.',
            },
            {
              term: 'duális gazdasági szerkezet',
              text: 'Egy országban egyszerre van jelen egy modern, fejlett gazdasági szektor és egy elmaradott, hagyományos (például önellátó mezőgazdasági) szektor.',
            },
            {
              term: 'extenzív és intenzív gazdasági növekedés',
              text: 'Extenzív: több ráfordítással (több munkaerő, több terület) nő a termelés. Intenzív: a ráfordításokat hatékonyabban használják fel (technológia, szaktudás, K+F), így nő a termelés.',
              emelt: true,
            },
            {
              term: 'ipari park, robotizáció',
              text: 'Az ipari park kijelölt, infrastruktúrával ellátott terület, ahol vállalatok összpontosítva települnek meg. A robotizáció a munka gépekre, robotokra bízása, ami növeli a termelékenységet, de csökkentheti az emberi munkaerő iránti igényt.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A népesség gazdasági aktivitása' },
        {
          kind: 'text',
          text: 'A népesség egy része **gazdaságilag aktív**: dolgozik (**aktív kereső**, foglalkoztatott), vagy munkát keres (**munkanélküli**). A többiek **eltartottak** (például gyermekek, tanulók, nyugdíjasok), akiket a keresők jövedelme és az állami ellátások tartanak el. A **munkanélküliségi ráta** a munkát keresők arányát adja az aktív keresők között.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: aktivitás és munkanélküliség',
          problem:
            'Egy (kitalált) országban 10 millió lakos él. A gazdaságilag aktívak száma 4,5 millió, ebből 0,3 millió munkanélküli. Mennyi a gazdaságilag aktívak aránya a teljes népességben, és mennyi a munkanélküliségi ráta?',
          solution:
            'A gazdaságilag aktívak aránya: $4{,}5 / 10 = 0{,}45 = 45\\%$. A munkanélküliségi ráta: $0{,}3 / 4{,}5 = 0{,}0667 \\approx 6{,}7\\%$. Dolgozik tehát $4{,}5 - 0{,}3 = 4{,}2$ millió fő.',
        },
        { kind: 'heading', text: 'A foglalkoztatási szerkezet átalakulása' },
        {
          kind: 'text',
          text: 'A fejlődés során a dolgozók fokozatosan áttevődnek az egyik szektorból a másikba (**foglalkozási átrétegződés**). A gazdaság korai szakaszában a legtöbben a **mezőgazdaságban** dolgoznak (**agrárország**), az **iparosodás** idején a szekunder szektor kerül előtérbe (**ipari társadalom**), a legfejlettebb országokban pedig a **szolgáltatásoké** a főszerep (**ipar utáni, információs társadalom**). A **gazdasági szerkezetváltás** ilyen átalakulás: az egyik szektor súlya csökken, a másiké nő.',
        },
        {
          kind: 'compare',
          title: 'Három (kitalált) ország foglalkoztatási szerkezete, a foglalkoztatottak %-ában',
          columns: ['Primer / szekunder / tercier', 'Társadalomtípus'],
          rows: [
            { label: 'A ország', cells: ['40 / 25 / 35', 'agrártársadalom jegyei'] },
            { label: 'B ország', cells: ['10 / 35 / 55', 'ipari társadalom'] },
            { label: 'C ország', cells: ['4 / 24 / 72', 'ipar utáni társadalom'] },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: foglalkoztatási arányok számítása',
          problem:
            'A (kitalált) A ország 20 millió foglalkoztatottja közül 8 millió dolgozik a primer, 5 millió a szekunder, 7 millió a tercier szektorban. A C országban 4,5 millió foglalkoztatottból 0,18 millió a primer, 1,08 millió a szekunder, 3,24 millió a tercier szektorban dolgozik. Számítsd ki az arányokat, és döntsd el, melyik a fejlettebb szerkezetű!',
          solution:
            'A ország: $8/20 = 40\\%$, $5/20 = 25\\%$, $7/20 = 35\\%$.\n\nC ország: $0{,}18/4{,}5 = 4\\%$, $1{,}08/4{,}5 = 24\\%$, $3{,}24/4{,}5 = 72\\%$.\n\nAz arányok összege mindkét esetben 100%. A C országban a primer szektor alig foglalkoztat, a tercier szektor a domináns, ez a fejlett, ipar utáni társadalom jellemzője. Az A ország agrárjellegű.',
        },
        { kind: 'heading', text: 'Telepítő tényezők' },
        {
          kind: 'text',
          text: 'A **telepítő tényezők** azok a feltételek, amelyek meghatározzák, hová érdemes egy gazdasági tevékenységet (gyárat, farmot, szolgáltató központot) létrehozni. Két nagy csoportjuk van: **természeti** (nyersanyag, energia, éghajlat, talaj, víz, domborzat, természeti erőforrás) és **társadalmi-gazdasági** (munkaerő, **humán erőforrás**, tőke, piac, közlekedés és infrastruktúra, tudás, gazdaságpolitika).',
        },
        {
          kind: 'compare',
          title: 'Telepítő tényezők a mezőgazdaságban és az iparban',
          columns: ['Mezőgazdaság', 'Ipar'],
          rows: [
            {
              label: 'Meghatározó természeti tényezők',
              cells: [
                'éghajlat (hőmérséklet, csapadék), talaj, víz, domborzat',
                'nyersanyag, energia, víz (ágazattól függően)',
              ],
            },
            {
              label: 'Társadalmi-gazdasági tényezők',
              cells: [
                'piac (feldolgozók, városok közelsége), szállítás, tőke, munkaerő, agrárpolitika',
                'munkaerő és szaktudás, tőke, piac, közlekedés, infrastruktúra, K+F',
              ],
            },
            {
              label: 'Szerepük átalakulása',
              cells: [
                'a technológia (öntözés, nemesítés, gépesítés) csökkenti az adottságoktól való függést',
                'a szállítás olcsóbbodása és az anyagtakarékosság miatt a nyersanyag szerepe csökken, a tudás és a munkaerő minősége felértékelődik',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Példa az átalakulásra: a hagyományos **vaskohászat** a szén és a vasérc közelében települt (például a Ruhr-vidéken), ma már sok új gyár ott jön létre, ahol képzett munkaerő, jó közlekedés, egyetemek és a piac közel van. Az **informatikai** és **kutatás-fejlesztési** tevékenységeket szinte kizárólag a képzett munkaerő, a tőke és a tudásközpontok vonzzák (például az amerikai Szilícium-völgy).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Diagramelemzés: a foglalkoztatási szerkezet (oszlop- vagy kör-, esetleg háromszögdiagram) alapján döntsd el, mely országok fejlettek, és indokold.',
            'Számítás: szektorok százalékos aránya, munkanélküliségi ráta.',
            'Párosítás: tevékenység vagy ágazat és szektor; fogalmak (húzóágazat, válságágazat, duális szerkezet).',
            'Rövid kifejtés: egy ipari vagy mezőgazdasági tevékenység telepítő tényezői, vagy hogyan változott meg egy telepítő tényező szerepe.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a GDP-ben és a foglalkoztatásban mért szektorarányt összekeverni. Egy szektor lehet kis foglalkoztatású, de jelentős GDP-részesedésű (például a fejlett országok mezőgazdasága). Mindig nézd meg, melyik arányról szól a kérdés.',
        },
        {
          kind: 'tip',
          text: 'Egy diagramnál ellenőrizd, hogy a százalékok összege 100 legyen. A fejlettség fő jele a tercier (és kvaterner) szektor magas és a primer szektor alacsony aránya.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a gazdasági növekedés két típusát (extenzív, intenzív) példával tudnod kell megkülönböztetni: ha az ipar több munkással és több nyersanyaggal termel többet, extenzív a növekedés; ha ugyanannyi munkaerővel, de modernebb technológiával, intenzív.',
        },
      ],
      topicMatch: ['foglalkoztatási szerkezet', 'gazdasági aktivitás'],
      quiz: [
        {
          question: 'Melyik szektorba tartozik a mezőgazdaság?',
          options: ['Primer', 'Szekunder', 'Tercier', 'Kvaterner'],
          answer: 0,
          explanation:
            'A mezőgazdaság a primer (elsődleges) szektor tipikus ága. Az ipar a szekunder, a szolgáltatások a tercier, a tudásalapú szolgáltatások a kvaterner szektorba tartoznak.',
        },
        {
          question:
            'Egy ország foglalkoztatottjainak 3%-a a primer, 22%-a a szekunder szektorban dolgozik. Hány százalék dolgozik a tercier szektorban?',
          options: ['25%', '81%', '78%', '75%'],
          answer: 3,
          explanation:
            'A három arány összege 100%, így a tercier szektor aránya $100 - 3 - 22 = 75\\%$.',
        },
        {
          question: 'Melyik szerkezet jellemző a legfejlettebb országokra?',
          options: [
            'Magas primer arány, alacsony tercier arány',
            'A szekunder szektor 80% feletti aránya',
            'Magas tercier (és kvaterner) arány, alacsony primer arány',
            'Egyenlő arányú szektorok',
          ],
          answer: 2,
          explanation:
            'A fejlett, ipar utáni társadalmakban a szolgáltatások dominálnak, a mezőgazdaság aránya pedig kicsi.',
        },
        {
          question: 'Mit nevezünk telepítő tényezőnek?',
          options: [
            'Egy ország GDP-jét',
            'Azt a feltételt, amely meghatározza, hová érdemes egy gazdasági tevékenységet létrehozni',
            'A külföldi tőke kamatát',
            'A foglalkoztatottak és az eltartottak arányát',
          ],
          answer: 1,
          explanation:
            'A telepítő tényezők (például nyersanyag, munkaerő, piac, közlekedés) azt határozzák meg, hová települ egy üzem vagy farm.',
        },
        {
          emelt: true,
          question: 'Melyik példa intenzív gazdasági növekedésre?',
          options: [
            'Több ezer új munkást vesznek fel ugyanazzal a technológiával',
            'Újabb területeket szántanak fel',
            'Ugyanannyi munkaerővel modernebb gépekkel több terméket állítanak elő',
            'Több nyersanyagot termelnek ki, hogy több terméket gyártsanak',
          ],
          answer: 2,
          explanation:
            'Intenzív a növekedés, ha a ráfordítások hatékonyabb felhasználásából (technológia, tudás) ered. A másik három példa a ráfordítás növeléséből származik, vagyis extenzív.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Gazdasági szektorok',
          url: wiki('gazdasági szektorok primer szekunder tercier'),
        },
        { label: 'Wikipédia: Telepítő tényezők', url: wiki('telepítő tényezők gazdaságföldrajz') },
        { label: 'Wikipédia: Foglalkoztatás', url: wiki('foglalkoztatási szerkezet') },
      ],
    },
    {
      id: 'fejlettseg-centrum-periferia',
      subject: 'foldrajz',
      unitId: 'vilaggazdasag',
      title: 'Gazdasági fejlettség, GDP, HDI, centrum és periféria',
      level: 'kozep',
      requirement: {
        kozep:
          'Nevezze meg és értelmezze a gazdasági fejlettség összehasonlítására alkalmas mutatókat, vessen össze adatsorokat. Mondjon példákat különböző fejlettségű országokra és mutassa meg ezeket a térképen. Jellemezze a centrum, a félperiféria és a periféria térségeket, hasonlítsa össze világgazdasági szerepkörüket. Mutassa meg térképen a világgazdasági pólusokat és vezető országaikat, valamint a Föld különböző térségeinek periféria országait. Mutassa be adatsorok, diagramok alapján a pólusok világgazdasági jelentőségét.',
        emelt:
          'Nevezzen meg az életminőség mérésére alkalmas mutatókat. Ismerje az emberi fejlettség indexét (HDI) és hasonlítsa össze azt a GDP-vel és a GNI-vel. Mutassa be a világgazdasági pólusok kialakulását és területi átrendeződését, a periféria térségek kialakulását, a centrum és periféria térségek sajátos kapcsolatrendszerét.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **GDP** (bruttó hazai termék) az országban egy év alatt megtermelt javak és szolgáltatások értéke. A **GDP/fő** a GDP és a népesség hányadosa.',
            'A **GNI** (bruttó nemzeti jövedelem) az ország **lakosainak** jövedelme, a külfölddel való jövedelemáramlással együtt.',
            'Fejlettségi mutatók: GDP/fő, GNI/fő, a foglalkoztatási szerkezet, a várható élettartam, a csecsemőhalandóság, az írástudatlanság aránya.',
            'A **világgazdasági pólusok** (centrum): Észak-Amerika, Nyugat-Európa (EU), Kelet-Ázsia (Japán és más országok). Ezek alkotják az ún. **Triádot**.',
            'A **félperiféria** (például BRICS-országok, újonnan iparosodott országok) a pólusok és a **periféria** között áll. A periféria térségek elmaradottabbak, a pólusoktól függenek.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'bruttó hazai termék (GDP)',
              text: 'Egy ország területén egy év alatt előállított javak és szolgáltatások piaci értéke.',
            },
            {
              term: 'bruttó nemzeti jövedelem (GNI)',
              text: 'Az ország lakosainak és vállalatainak jövedelme, függetlenül attól, hol keletkezett: GDP + külföldről kapott jövedelem − külföldre kifizetett jövedelem.',
            },
            {
              term: 'életszínvonal',
              text: 'Az anyagi javakkal és szolgáltatásokkal való ellátottság mértéke (jövedelem, lakás, fogyasztás).',
            },
            {
              term: 'világgazdasági pólus (centrum)',
              text: 'A világgazdaság erőforrásait, tőkéjét, technológiáját és a döntéseit nagymértékben összpontosító, fejlett térség.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan mérjük a gazdasági fejlettséget?' },
        {
          kind: 'text',
          text: 'A **gazdasági fejlettség** egy ország gazdaságának teljesítményét és szerkezetét jelenti. A **gazdasági növekedés** a GDP (rendszerint évi) növekedése, a **gazdasági visszaesés** a csökkenése. A **fejlett** országokat és a **fejlődő** országokat gazdasági mutatók szerint szokás elkülöníteni.',
        },
        {
          kind: 'compare',
          title: 'GDP és GNI',
          columns: ['GDP', 'GNI'],
          rows: [
            {
              label: 'Mit mér?',
              cells: ['az ország területén megtermelt értéket', 'az ország lakosainak jövedelmét'],
            },
            {
              label: 'Mi dönt a „hovatartozásról”?',
              cells: [
                'hol történt a termelés',
                'kié a jövedelem, függetlenül attól, hol keletkezett',
              ],
            },
            {
              label: 'Mikor tér el nagyon a kettő?',
              cells: [
                'ha sok külföldi cég termel az országban és viszi ki a profitot',
                'ha az országnak nagy külföldi befektetései vagy kitelepült munkavállalói vannak',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: GDP/fő összehasonlítás',
          problem:
            'Az X (kitalált) ország GDP-je 600 milliárd dollár, népessége 40 millió fő. Az Y országé 90 milliárd dollár, 45 millió fő. Számítsd ki a GDP/fő értéket, és hasonlítsd össze!',
          solution:
            'X: $600 \\cdot 10^9 / (40 \\cdot 10^6) = 15\\,000$ dollár/fő.\n\nY: $90 \\cdot 10^9 / (45 \\cdot 10^6) = 2\\,000$ dollár/fő.\n\nAz X ország egy főre jutó GDP-je $15\\,000/2\\,000 = 7{,}5$-szerese az Y országénak. (Az összes GDP-t nem szabad összehasonlítani népességszám nélkül: az X GDP-je is 6,7-szer nagyobb, de a népessége csak 0,89-szeres.)',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: GNI számítása',
          problem:
            'Egy (kitalált) ország GDP-je 200 milliárd dollár. A külföldi cégek 15 milliárd dollár jövedelmet vittek ki az országból, az ország lakosai 5 milliárd dollár jövedelmet kaptak külföldről. Mennyi a GNI?',
          solution:
            '$\\text{GNI} = 200 - 15 + 5 = 190$ milliárd dollár. A GNI kisebb a GDP-nél, mert többet vittek ki, mint amennyi érkezett.',
        },
        {
          kind: 'text',
          text: 'A Világbank az országokat a **GNI/fő** alapján **alacsony, közepes és magas jövedelmű** csoportba sorolja (a határokat időnként módosítja). Más fejlettségi mutatók: a gazdasági szerkezet (a mezőgazdaságban dolgozók aránya), a **születéskor várható élettartam**, a **csecsemőhalandóság**, az **írástudatlanság**, az internet- és egészségügyi ellátottság.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'életminőség',
              text: 'Az anyagi javakon túl az egészséget, az oktatást, a környezet állapotát, a biztonságot és a szabadidőt is figyelembe vevő fogalom.',
              emelt: true,
            },
            {
              term: 'emberi fejlettség indexe (HDI)',
              text: 'Összetett mutató 0 és 1 között, három tényezőből: a születéskor várható élettartam (egészség), az oktatás (iskolázottság) és az életszínvonal (GNI/fő).',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A HDI azért jobb az életminőség mérésére, mint a GDP/fő vagy a GNI/fő, mert nem csak a pénzjövedelmet méri, hanem az egészséget és az oktatást is. Két azonos GDP/fő értékű országnak lehet nagyon eltérő HDI-je, ha az egyik többet költ egészségügyre és oktatásra, vagy ha a jövedelem kevesek kezében összpontosul. A HDI viszont az egyenlőtlenségeket és a környezet állapotát közvetlenül nem mutatja.',
        },
        { kind: 'heading', text: 'Centrum, félperiféria, periféria' },
        {
          kind: 'compare',
          title: 'A világgazdasági térségek szerepköre',
          columns: ['Jellemzőik', 'Példák'],
          rows: [
            {
              label: 'Centrum (pólusok)',
              cells: [
                'tőke-, tudás- és technológiakibocsátó; a K+F, a pénzügyi és szolgáltató központok, a transznacionális vállalatok székhelyei; magas jövedelem, tercier és kvaterner szektor',
                'Észak-Amerika, Nyugat-Európa (EU), Kelet-Ázsia (Japán, Dél-Korea, Kína egyes térségei)',
              ],
            },
            {
              label: 'Félperiféria',
              cells: [
                'gyorsan fejlődő vagy közepesen fejlett; iparosodó, a centrumtól tőkét és technológiát vesz át; gyakran olcsó munkaerejű gyártóbázis',
                'BRICS-országok, újonnan iparosodott országok, Kelet-Közép-Európa egyes országai, olajexportőr országok',
              ],
            },
            {
              label: 'Periféria',
              cells: [
                'jórészt nyersanyag- és mezőgazdasági termékek kivitele; alacsony jövedelem, magas primer szektorarány; függés a külföldi tőkétől',
                'a Föld legszegényebb országai, például a szubszaharai Afrika, Dél-Ázsia egyes térségei',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **BRICS-országok** eredetileg Brazília, Oroszország, India, Kína és a Dél-afrikai Köztársaság, nagy, gyorsan növekvő gazdaságok (a csoport később bővült). Az **újonnan iparosodott országok** (például a „négy ázsiai tigris”: Dél-Korea, Tajvan, Hongkong, Szingapúr) a 20. század második felében váltak iparosodóvá, majd szolgáltató és csúcstechnológiai központtá. A **világgazdasági erőtér** a pólusok gazdasági hatásának, kapcsolatrendszerének tere.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **pólusok kialakulása**: Európa az ipari forradalommal (18–19. század) vált vezetővé, Észak-Amerika a 19. századtól, Kelet-Ázsia a 20. század második felétől. A világgazdaság súlypontja az utóbbi évtizedekben az Atlanti-óceán térségétől a Csendes-óceán térsége felé tolódik el. A **periféria kialakulásában** szerepet játszott a gyarmati múlt (nyersanyagkitermelés a gyarmattartó számára), az egyoldalú nyersanyag- és mezőgazdasági export, a gyors népességnövekedés, a tőke és a képzett munkaerő hiánya, valamint a háborúk és a politikai instabilitás.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **centrum és a periféria kapcsolata** kölcsönös, de egyenlőtlen: a periféria nyersanyagot, mezőgazdasági terméket és olcsó munkaerőt kínál, a centrum tőkét, technológiát és ipari terméket. A cserearányromlás és a külső tőkétől való függés miatt a periféria nehezen zárkózik fel; ugyanakkor a külföldi tőke munkahelyet és technológiát is hozhat, és vannak országok, amelyeknek ezen az úton sikerült felemelkedniük (például az újonnan iparosodott országok).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Számítás: GDP/fő, GNI, két ország összehasonlítása (számológép és atlasz használható a II. feladatlapon).',
            'Térképfeladat: a világgazdasági pólusok és a Triád országainak, a BRICS-országoknak, a periféria térségeknek a megjelölése.',
            'Táblázat- vagy diagramelemzés: melyik ország tartozik a centrumba, félperifériába, perifériára, és miért (foglalkoztatási szerkezet, GDP/fő, exportszerkezet).',
            'Szóbeli tétel: a pólusok és a periféria jellemzői, kapcsolatuk.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a GDP-t és a GDP/fő-t összekeverni. Egy nagy népességű ország GDP-je nagy lehet, de a GDP/fő mégis alacsony (például India, Kína). A fejlettséghez a GDP/fő a mérvadó. Másik hiba: a GDP-t és a GNI-t azonosnak tekinteni.',
        },
        {
          kind: 'tip',
          text: 'Egy ország besorolásánál három dolgot nézz: GDP/fő (vagy GNI/fő), foglalkoztatási szerkezet (tercier arány), exportszerkezet (nyersanyag vagy késztermék, csúcstechnológia).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a HDI és a GDP/GNI eltérését kell tudnod magyarázni: ha egy ország HDI-rangsorbeli helye jóval előrébb áll a GDP/fő-rangsorbelinél, akkor jövedelméhez képest sokat fordít oktatásra és egészségügyre; ha hátrébb, a jövedelem ellenére az ellátás gyengébb.',
        },
      ],
      topicMatch: ['gdp', 'centrum és periféria', 'gazdasági térségek', 'világgazdaság'],
      quiz: [
        {
          question:
            'Egy ország GDP-je 300 milliárd dollár, lakossága 20 millió fő. Mennyi a GDP/fő?',
          options: ['1 500 dollár', '6 000 000 dollár', '150 dollár', '15 000 dollár'],
          answer: 3,
          explanation:
            'A GDP/fő a GDP és a népesség hányadosa: $300 \\cdot 10^9 / (20 \\cdot 10^6) = 15\\,000$ dollár/fő.',
        },
        {
          question: 'Melyik térség tartozik a Triádhoz?',
          options: [
            'Dél-Amerika, Afrika, Dél-Ázsia',
            'Észak-Amerika, Nyugat-Európa, Kelet-Ázsia (Japán)',
            'Közel-Kelet, Oroszország, Ausztrália',
            'Közép-Amerika, Óceánia, Dél-Afrika',
          ],
          answer: 1,
          explanation:
            'A világgazdaság három fő pólusa, a Triád: Észak-Amerika, Nyugat-Európa (EU) és Kelet-Ázsia (elsősorban Japán).',
        },
        {
          question: 'Mi jellemzi a periféria térségeket?',
          options: [
            'A magas tercier szektorarány és a K+F-központok',
            'A transznacionális vállalatok székhelyei',
            'A nyersanyag- és mezőgazdasági export, az alacsony jövedelem és a külső tőkétől való függés',
            'A pénzügyi központok és a magas HDI',
          ],
          answer: 2,
          explanation:
            'A perifériát alacsony jövedelem, magas primer arány, nyersanyag-export és tőkehiány jellemzi. A másik három a centrum jellemzője.',
        },
        {
          question: 'Mi a különbség a GDP és a GNI között?',
          options: [
            'A GDP a lakosok jövedelme, a GNI az országban megtermelt érték',
            'A GDP az országban megtermelt érték, a GNI az ország lakosainak jövedelme',
            'A GDP csak az ipar, a GNI csak a mezőgazdaság teljesítménye',
            'Nincs különbség, ugyanazt jelentik',
          ],
          answer: 1,
          explanation:
            'A GDP a területen megtermelt értéket, a GNI az ország lakosainak (külfölddel is elszámolt) jövedelmét méri.',
        },
        {
          emelt: true,
          question: 'Melyik három tényezőből áll össze a HDI?',
          options: [
            'GDP, külkereskedelmi mérleg, infláció',
            'Egészség (várható élettartam), oktatás, életszínvonal (GNI/fő)',
            'Népsűrűség, urbanizáció, GDP',
            'Foglalkoztatás, államadósság, kamat',
          ],
          answer: 1,
          explanation:
            'A HDI az egészséget (születéskor várható élettartam), az oktatást és az életszínvonalat (GNI/fő) ötvözi.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Bruttó hazai termék', url: wiki('bruttó hazai termék') },
        { label: 'Wikipédia: Emberi fejlettségi index', url: wiki('emberi fejlettségi index') },
        { label: 'Wikipédia: Triád (gazdaság)', url: wiki('világgazdasági pólusok Triád') },
      ],
    },
    {
      id: 'integracio-globalizacio-tnc',
      subject: 'foldrajz',
      unitId: 'vilaggazdasag',
      title: 'Integrációk, globalizáció, transznacionális vállalatok',
      level: 'kozep',
      requirement: {
        kozep:
          'Nevezze meg az együttműködések kialakulásában szerepet játszó tényezőket. Ismertesse az integrációk fejlődésének szintjeit. Értelmezze a globalizáció folyamatát. Mutassa be a globalizáció mindennapi életünkben érzékelhető hatását. Ismerje a világtermék fogalmát. Ismertesse a transznacionális vállalatok működésének elvét. Nevezzen meg a világgazdaságban meghatározó szerepet játszó TNC-ket. Ismertesse a világpolitika és a világgazdaság működését befolyásoló nemzetközi szervezetek, együttműködések legfontosabb jellemzőit.',
        emelt:
          'Nevezzen meg példákat különböző szintre jutott és különböző típusú integrációkra. Ismertesse a globális világgazdaság működésének jellemzőit, a világméretű szerveződést lehetővé tevő feltételeket. Értékelje a globalizációhoz kapcsolódó folyamatokat, azok társadalmi-gazdasági és környezeti hatásait. Mutassa be a transznacionális vállalatok termelésszervezésének sajátosságait. Igazolja a TNC-k szerepét a tercier és a kvaterner szektor fejlődésében.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **integráció** országok gazdasági (néha politikai) összekapcsolódása. A szintek: **preferenciális övezet** → **szabadkereskedelmi övezet** → **vámunió** → **közös piac** → **gazdasági unió** → **pénzügyi (monetáris) unió** → **politikai unió**.',
            'Az **Európai Unió** a legmélyebb integráció: közös piac, gazdasági és (az euróövezetben) pénzügyi unió, politikai együttműködés.',
            'A **globalizáció** a gazdasági, kulturális, politikai kapcsolatok világméretű kiterjedése és összefonódása. Motorjai: a **tudományos-technikai forradalom** (informatika, közlekedés), a kereskedelem és a tőkemozgás liberalizációja, a **TNC-k**.',
            'A **transznacionális vállalatok** (TNC) több országban működnek: **anyavállalat** és **leányvállalatok** hálózata.',
            'A **világtermék** a világ sok országában elterjedt, azonos vagy hasonló formában kapható, gyakran sok országban készülő termék (például mobiltelefon).',
          ],
        },
        {
          kind: 'compare',
          title: 'Az integráció szintjei',
          columns: ['Mi változik?', 'Példa'],
          rows: [
            {
              label: '1. Preferenciális kereskedelmi övezet',
              cells: [
                'kedvezményes vám a tagok között egyes termékekre',
                'kedvezményes megállapodások',
              ],
            },
            {
              label: '2. Szabadkereskedelmi övezet',
              cells: [
                'a tagok között megszűnnek a vámok, de a külső vámot mindenki maga szabja',
                'USMCA (korábban NAFTA)',
              ],
            },
            {
              label: '3. Vámunió',
              cells: ['közös külső vám a nem tagokkal szemben', 'az EU vámuniója'],
            },
            {
              label: '4. Közös piac',
              cells: [
                'az áruk, szolgáltatások, a tőke és a munkaerő is szabadon áramlik',
                'az EU belső piaca',
              ],
            },
            {
              label: '5. Gazdasági unió',
              cells: ['a gazdaságpolitikák összehangolása', 'az EU'],
            },
            {
              label: '6. Pénzügyi (monetáris) unió',
              cells: ['közös pénz és közös jegybank', 'az euróövezet'],
            },
            {
              label: '7. Politikai unió',
              cells: ['közös politikai döntéshozatal', 'az EU részben (közös intézmények)'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért kötnek az országok gazdasági együttműködést?' },
        {
          kind: 'keypoints',
          items: [
            '**Gazdasági érdek**: nagyobb piac, olcsóbb kereskedelem, a vállalatok ott gyártanak, ahol a legjobb a feltétel, nagyobb versenyképesség a más pólusokkal szemben.',
            '**Földrajzi közelség** és a kialakult kereskedelmi kapcsolatok.',
            '**Politikai és biztonsági** célok (béke, stabilitás, közös fellépés).',
            '**Történelmi, kulturális** hasonlóság, közös problémák (környezet, migráció).',
          ],
        },
        {
          kind: 'text',
          text: 'A **regionális együttműködés** szomszédos országok vagy térségek közös fellépése, a **regionális politika** a térségek közti fejlettségi különbségek csökkentésére irányul, a **régió** egy ország (vagy több ország) összefüggő térsége, az **eurorégió** pedig határon átnyúló régió együttműködés (például a **Kárpátok Eurorégió**).',
        },
        { kind: 'heading', text: 'Az Európai Unió' },
        {
          kind: 'text',
          text: 'Az **Európai Unió** (EU) előzménye az 1957-ben a **Római Szerződéssel** létrehozott Európai Gazdasági Közösség volt (a hat alapító: Belgium, Franciaország, NSZK, Olaszország, Luxemburg, Hollandia). Az **Európai Unió** néven a **maastrichti szerződés** (1993) hozta létre. Magyarország 2004-ben csatlakozott. Az Egyesült Királyság 2020-as kilépése után az EU-nak 27 tagállama van.',
        },
        {
          kind: 'compare',
          title: 'Az EU fő intézményei',
          columns: ['Szerepe', 'Székhely'],
          rows: [
            {
              label: 'Európai Parlament',
              cells: [
                'a polgárok által közvetlenül választott képviselők, törvényhozás, költségvetés',
                'Strasbourg, Brüsszel',
              ],
            },
            {
              label: 'Európai Unió Tanácsa',
              cells: ['a tagállamok kormányainak miniszterei, törvényhozás', 'Brüsszel'],
            },
            {
              label: 'Európai Tanács',
              cells: [
                'az állam- és kormányfők csúcstalálkozója, az irányvonalak kijelölése',
                'Brüsszel',
              ],
            },
            {
              label: 'Európai Bizottság',
              cells: ['jogszabály-javaslatok, a közös politikák végrehajtása', 'Brüsszel'],
            },
            {
              label: 'Európai Központi Bank (EKB)',
              cells: ['az euró és a közös monetáris politika', 'Frankfurt'],
            },
            {
              label: 'Európai Unió Bírósága',
              cells: ['az uniós jog értelmezése és betartatása', 'Luxembourg'],
            },
          ],
        },
        {
          kind: 'warning',
          text: 'Az **Európa Tanács** (1949, emberi jogi szervezet, Strasbourg) nem azonos az Európai Tanáccsal és nem uniós intézmény.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'USMCA',
              text: 'Az Amerikai Egyesült Államok, Mexikó és Kanada egyezménye (2020-tól), a korábbi NAFTA (1994) utódja; szabadkereskedelmi övezet.',
              emelt: true,
            },
            {
              term: 'ASEAN',
              text: 'A Délkelet-ázsiai Nemzetek Szövetsége (1967): Délkelet-Ázsia országainak gazdasági, politikai együttműködése, szabadkereskedelmi törekvésekkel.',
              emelt: true,
            },
            {
              term: 'MERCOSUR',
              text: 'A Dél-amerikai Közös Piac (1991): Dél-Amerika déli országainak vámunióra és közös piacra törekvő integrációja.',
              emelt: true,
            },
            {
              term: 'APEC',
              text: 'Ázsiai és Csendes-óceáni Gazdasági Együttműködés (1989): a Csendes-óceán két partján fekvő országok laza gazdasági fóruma.',
              emelt: true,
            },
            {
              term: 'OECD',
              text: 'Gazdasági Együttműködési és Fejlesztési Szervezet: fejlett piacgazdaságok szervezete (Párizs), elemzések, gazdaságpolitikai egyeztetés.',
              emelt: true,
            },
            {
              term: 'G8',
              text: 'A vezető ipari hatalmak csúcstalálkozója; Oroszország 2014-es kizárása után G7 néven működik.',
              emelt: true,
            },
            {
              term: 'WTO',
              text: 'Világkereskedelmi Szervezet (1995, Genf): a világkereskedelem szabályai, a kereskedelmi viták rendezése, a GATT utódja.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az integrációk **különböző szintre** jutottak: az EU a közös piacon és gazdasági unión túl az euróövezetben pénzügyi uniót is megvalósított; az USMCA szabadkereskedelmi övezet; az ASEAN gazdasági szempontból szabadkereskedelmi törekvésű együttműködés; az APEC laza fórum, nem kötelező erejű szabályokkal.',
        },
        { kind: 'heading', text: 'Nemzetközi szervezetek' },
        {
          kind: 'compare',
          title: 'A világpolitikát és a világgazdaságot befolyásoló szervezetek',
          columns: ['Mivel foglalkozik?', 'Megjegyzés'],
          rows: [
            {
              label: 'ENSZ',
              cells: [
                'béke és biztonság, emberi jogok, fejlesztés; a legnagyobb világszervezet',
                '1945, székhelye New York',
              ],
            },
            {
              label: 'UNESCO',
              cells: [
                'oktatás, tudomány, kultúra; a világörökség védelme',
                'ENSZ-szakosított szervezet',
              ],
            },
            {
              label: 'WHO',
              cells: ['az egészségügy nemzetközi koordinálása', 'ENSZ-szakosított szervezet, Genf'],
            },
            {
              label: 'NATO',
              cells: [
                'katonai-védelmi szövetség (kollektív védelem)',
                '1949; Magyarország 1999 óta tag',
              ],
            },
            {
              label: 'OPEC',
              cells: [
                'a kőolaj-exportáló országok szervezete, a kitermelés és az ár befolyásolása',
                '1960-ban alapították, székhelye Bécs',
              ],
            },
            {
              label: 'V4',
              cells: [
                'Csehország, Lengyelország, Magyarország, Szlovákia együttműködése',
                'Visegrádi Együttműködés, 1991',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A globalizáció' },
        {
          kind: 'text',
          text: 'A **globalizáció** során a gazdaság, a kultúra és a politika kapcsolatai világméretűvé válnak, az országok egyre jobban egymásra utaltak. Az 1970-es évektől a **világgazdasági korszakváltás** zajlott: a tömegtermelés és a nemzeti gazdaságok helyébe egy összekapcsolt, információalapú **globális világgazdaság** lépett. Fő feltételei: a **tudományos-technikai forradalom** (számítógép, internet, műhold, konténeres és repülőszállítás), a kereskedelmi és tőkeáramlási korlátok lebontása, a **TNC-k** világméretű működése, a nemzetközi szervezetek (például WTO).',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1929–1933',
              text: '**Túltermelési válság**: a **tömegáru-termelés** (például futószalagon gyártott fogyasztási cikkek) olyan mennyiséget termelt, amelyet a vevők nem tudtak megvásárolni; a termelés visszaesett, nőtt a munkanélküliség, a külkereskedelem összeomlott, megerősödött a protekcionizmus.',
            },
            {
              date: '1970-es évek',
              text: '**Kőolajár-robbanás** (1973, 1979): a kőolajár hirtelen, többszörösére nőtt. Az olajimportáló fejlett országok gazdasága lelassult, megkezdődött az energiatakarékosság és a gazdasági szerkezetváltás (a hagyományos ágazatok, például a kohászat válságba kerültek).',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'A globalizáció hatásai (tényszerű összevetés)',
          columns: ['Kedvező vonások', 'Kedvezőtlen vonások'],
          rows: [
            {
              label: 'Gazdaság',
              cells: [
                'olcsóbb áruk, nagyobb választék, új munkahelyek, technológiaátadás',
                'a termelés áttelepülése, helyi cégek kiszorulása, a világgazdasági válságok gyors továbbterjedése',
              ],
            },
            {
              label: 'Társadalom, kultúra',
              cells: [
                'információ, utazás, külföldi tanulás',
                'a kulturális hagyományok háttérbe szorulása, **társadalmi-gazdasági egyenlőtlenségek** (országok között és országon belül)',
              ],
            },
            {
              label: 'Környezet',
              cells: [
                'a környezetvédelmi együttműködés és technológia terjedése',
                'a szállítás és a fogyasztás terhelése, a szennyező tevékenységek kitelepítése',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A globalizáció **mindennapi életünkben** is látszik: a boltokban világmárkák kaphatók, ugyanaz a **világtermék** (például az okostelefon, a farmernadrág vagy az üdítő) szinte mindenhol megvásárolható, és sok fogyasztási cikk alkatrészei több országból származnak.',
        },
        { kind: 'heading', text: 'Transznacionális vállalatok (TNC)' },
        {
          kind: 'text',
          text: 'A **multinacionális vállalat** több országban működő cég. A **transznacionális vállalat** (**TNC**) a világméretű hálózatban gondolkodó cég: az **anyavállalat** (székhely, vezetés, gyakran K+F) irányítja a különböző országokban működő **leányvállalatokat**. Működési elve: a tevékenységet ott végzik, ahol a legkedvezőbb a munkaerő, a nyersanyag, az adó, és ahol a piac van. A kifejezéseket gyakran azonos értelemben használják. Meghatározó TNC-k például a gépjárműgyártásban a Toyota és a Volkswagen, az elektronikában az Apple és a Samsung, az energiaiparban a Shell, a kereskedelemben a Walmart.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A TNC-k **termelésszervezésének sajátossága**, hogy a folyamat szakaszait szétosztják: a kutatás-fejlesztés és az irányítás az anyaországban, az alkatrészgyártás és az összeszerelés a kedvező költségű országokban történik, az értékesítés pedig a piacokon. A **tercier és a kvaterner** szektor fejlődését a TNC-k vitték előre: pénzügyi, kereskedelmi, logisztikai és informatikai szolgáltatásokat hoztak létre és terjesztettek el világszerte, és K+F-központokat működtetnek. A globalizáció előnyeit azok az országok tudják jobban kihasználni, amelyek képzett munkaerővel, jó infrastruktúrával és stabil gazdasági környezettel vonzzák a tőkét; ezért nem mindegy, hogy egy ország a centrumhoz vagy a perifériához tartozik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalmak párosítása: az integráció szintjei, az EU intézményei, a nemzetközi szervezetek (OPEC, NATO, UNESCO, WHO, V4).',
            'Hírrészlet vagy leírás alapján felismerni a globalizáció jelenségét (TNC, világtermék, kitelepülés, kulturális hatás).',
            'Rövid kifejtés: a globalizáció előnyei és hátrányai, a TNC-k működési elve.',
            'Szóbeli tétel: a transznacionális vállalatok, a globalizáció mindennapi életünkre gyakorolt hatásai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a szabadkereskedelmi övezetet és a vámuniót összekeverni. Szabadkereskedelmi övezetben a tagok között nincs vám, de mindenki maga szab külső vámot; a vámunióban **közös** külső vám van. Másik hiba: az Európai Tanácsot, az EU Tanácsát és az Európa Tanácsot összekeverni.',
        },
        {
          kind: 'tip',
          text: 'Az integrációs szinteket sorrendben tanuld: minden szint tartalmazza az előzőt, és egy újabb lépéssel bővül (vám → közös külső vám → szabad tőke- és munkaerőáramlás → közös gazdaságpolitika → közös pénz → közös politika).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a globalizációt mérlegelve értékeld: társadalmi-gazdasági és környezeti hatásokat is hozz, kedvezőt és kedvezőtlent is, és nevezz meg példákat. Az integrációs példáknál tudnod kell, melyik szintre jutott az adott szervezet.',
        },
      ],
      topicMatch: ['opec', 'globalizáció', 'nemzetközi szervezetek', 'világgazdaság'],
      quiz: [
        {
          question:
            'Melyik az integráció szintjeinek helyes sorrendje az egyszerűtől a bonyolultabb felé?',
          options: [
            'Közös piac, vámunió, szabadkereskedelmi övezet, politikai unió',
            'Szabadkereskedelmi övezet, vámunió, közös piac, gazdasági unió',
            'Vámunió, szabadkereskedelmi övezet, gazdasági unió, közös piac',
            'Politikai unió, pénzügyi unió, vámunió, közös piac',
          ],
          answer: 1,
          explanation:
            'A sorrend: preferenciális övezet, szabadkereskedelmi övezet, vámunió, közös piac, gazdasági unió, pénzügyi unió, politikai unió.',
        },
        {
          question: 'Mi jellemzi a vámuniót?',
          options: [
            'Közös külső vám a nem tagokkal szemben',
            'Közös pénz és közös jegybank',
            'Közös törvényhozás és kormány',
            'Csak a mezőgazdasági termékek szabad áramlása',
          ],
          answer: 0,
          explanation:
            'A vámunióban a tagok között nincs vám, és a kívülállókkal szemben közös külső vámot alkalmaznak. A közös pénz a pénzügyi unió ismérve.',
        },
        {
          question:
            'Melyik szervezet foglalkozik a kőolajkitermelés és az olajár befolyásolásával?',
          options: ['NATO', 'UNESCO', 'WHO', 'OPEC'],
          answer: 3,
          explanation:
            'Az OPEC a Kőolaj-exportáló Országok Szervezete. A NATO katonai szövetség, az UNESCO kulturális és oktatási, a WHO egészségügyi szervezet.',
        },
        {
          question: 'Mit jelent a világtermék fogalma?',
          options: [
            'Csak egy országban gyártott, helyi termék',
            'Állami támogatással exportált termék',
            'A világ sok országában elterjedt, azonos vagy hasonló formában kapható termék',
            'Kizárólag nyersanyag',
          ],
          answer: 2,
          explanation:
            'A világtermék a globalizáció jele: a világ sok országában azonos formában kapható és fogyasztják (például mobiltelefon, üdítő).',
        },
        {
          question: 'Melyik gazdasági válság a túltermelési válság?',
          options: [
            'Az 1973-as kőolajár-robbanás',
            'Az 1929–1933-as gazdasági világválság',
            'A rendszerváltozás utáni átalakulás',
            'A 2020-as világjárvány',
          ],
          answer: 1,
          explanation:
            'Az 1929–1933-as világválság a tömegáru-termelés túltermelési válsága volt: a megtermelt árut nem tudták megvásárolni.',
        },
        {
          emelt: true,
          question: 'Mi jellemzi a TNC-k termelésszervezését?',
          options: [
            'Minden tevékenységet egy országban végeznek',
            'Csak mezőgazdasági terméket gyártanak',
            'A folyamat szakaszait több országban végzik, ahol a legkedvezőbb a feltétel',
            'Nem állnak kapcsolatban leányvállalatokkal',
          ],
          answer: 2,
          explanation:
            'A TNC-k tevékenységüket szétosztják: K+F és irányítás az anyaországban, gyártás és összeszerelés kedvező költségű országokban, értékesítés a piacokon.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gazdasági integráció', url: wiki('gazdasági integráció szintjei') },
        { label: 'Wikipédia: Globalizáció', url: wiki('globalizáció') },
        { label: 'Wikipédia: Transznacionális vállalat', url: wiki('transznacionális vállalat') },
      ],
    },
    {
      id: 'penz-valuta-hitel-inflacio',
      subject: 'foldrajz',
      unitId: 'vilaggazdasag',
      title: 'Pénz, valuta, hitel, infláció és tőzsde',
      level: 'kozep',
      requirement: {
        kozep:
          'Ismerje a pénzhez kapcsolódó alapvető fogalmakat. Mutassa be a mindennapok pénzügyi folyamatait, a pénzügyi szolgáltatások működésének jellemzőit. Értelmezzen pénzügyi, gazdasági folyamatokhoz kapcsolódó híreket, adatokat. Oldjon meg egyszerű valutaváltási számítási feladatokat, értse a valutaárfolyam változásának következményeit. Mutassa be az infláció kialakulását és következményeit. Értelmezze az egyéni hitelfelvétel lehetőségeit és kockázatait. Ismertesse a működőtőke és a pénztőke áramlásának jellemzőit, a befektetési típusokat.',
        emelt:
          'Hasonlítsa össze az árfolyam- és a kamatváltozás hatását egyszerű számítási feladatban.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **pénz** funkciói: **csereeszköz** és fizetési eszköz, **értékmérő**, **értékmegőrző** (felhalmozási eszköz). Formái: **készpénz** (bankjegy, érme) és **bankszámlapénz**.',
            '**Valuta**: külföldi készpénz. **Deviza**: külföldi pénz nem készpénz formában (például külföldi pénznemben vezetett számla). A **valutaárfolyam** azt mutatja, mennyiért vehető egy egység külföldi pénz.',
            'A **hitel** kamatot fizetünk. A kamat lehet **fix** vagy **változó**. A **devizahitelnél** az árfolyam változása miatt a törlesztés összege is változik.',
            'Az **infláció** a tartós, általános áremelkedés: csökken a pénz vásárlóereje.',
            '**Értékpapírok**: állampapír, kötvény (hitelviszony, kamat) és részvény (tulajdonrész, osztalék, árfolyam-nyereség). Kereskedés a **tőzsdén** (érték- és árutőzsde).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'konvertibilitás',
              text: 'Egy pénz szabadon átváltható más pénznemre.',
            },
            {
              term: 'kamat',
              text: 'A hitel ára (a felvevő fizeti a hitelezőnek), illetve a betét után járó hozam.',
            },
            {
              term: 'hozam',
              text: 'A befektetés nyeresége a befektetett összeg százalékában.',
            },
            {
              term: 'hitelképesség',
              text: 'Azt jelzi, mennyire megbízható a hitelfelvevő, hogy vissza tudja fizetni a hitelt (jövedelem, tartozások, korábbi fizetési előzmények).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A pénz' },
        {
          kind: 'text',
          text: 'A pénz **funkciói**: **csereeszköz** (vele fizetünk), **értékmérő** (az árut pénzben fejezzük ki), **értékmegőrző** (felhalmozhatjuk), és **fizetési eszköz** (tartozás kiegyenlítése). Formái a **fémpénz (érme)**, a **papírpénz (bankjegy)**, mindkettő együtt a **készpénz**, valamint a **bankszámlapénz**, amely a **folyószámlán** lévő, kártyával vagy átutalással mozgatható összeg. A pénz kialakulása előtt árucserével (barter) csereberéltek, a pénz előfutára az árupénz volt.',
        },
        {
          kind: 'text',
          text: 'A **kereskedelmi bank** betétet gyűjt és hitelt nyújt: a betét és a hitel kamata közötti különbség a bank bevétele. A **jegybank** (Magyarországon a Magyar Nemzeti Bank) bankjegyet bocsát ki, az alapkamatot állapítja meg, és az árstabilitásra, a pénz értékének megőrzésére törekszik.',
        },
        { kind: 'heading', text: 'Valuta, deviza és árfolyam' },
        {
          kind: 'text',
          text: 'A **valutaárfolyam** a külföldi pénz ára hazai pénzben (például 1 euró = 400 forint). A pénzváltók és a bankok **vételi** árfolyamon veszik meg tőlünk a külföldi pénzt, és **eladási** árfolyamon adják el nekünk; az eladási árfolyam mindig magasabb, a különbség a bank nyeresége. Ha az euró árfolyama emelkedik, a **forint gyengül** (egy euró több forintba kerül), az import drágul, az export a külföldiek számára olcsóbb; ha csökken, a forint erősödik, az import olcsóbb, az export kevésbé versenyképes.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: valutaváltás és a vételi-eladási különbség',
          problem:
            'A bank eladási árfolyama 405 Ft/EUR, vételi árfolyama 395 Ft/EUR. Mennyibe kerül 200 euró megvásárlása? Ha ezt a 200 eurót azonnal visszaváltod, mennyit kapsz, és mennyit buktál?',
          solution:
            'Vásárláskor a bank eladási árfolyamát kell fizetned: $200 \\cdot 405 = 81\\,000$ Ft.\n\nVisszaváltáskor a bank a vételi árfolyamon fizet: $200 \\cdot 395 = 79\\,000$ Ft.\n\nA különbség $81\\,000 - 79\\,000 = 2\\,000$ Ft: ennyi a váltás költsége.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: az árfolyam változása',
          problem:
            'Egy 200 eurós ár 400 Ft/EUR árfolyamon hány forint? Mennyibe kerül, ha a forint erősödik, és az árfolyam 360 Ft/EUR lesz?',
          solution:
            '$200 \\cdot 400 = 80\\,000$ Ft, illetve $200 \\cdot 360 = 72\\,000$ Ft. A forint erősödésekor a külföldi termék olcsóbb lesz hazai pénzben: $80\\,000 - 72\\,000 = 8\\,000$ Ft a megtakarítás (10%).',
        },
        { kind: 'heading', text: 'Hitel és kamat' },
        {
          kind: 'text',
          text: 'A **hitel** olyan kölcsön, amelyet kamattal együtt kell visszafizetni. **Rövid lejáratú** (általában legfeljebb egy év, például folyószámlahitel, személyi hitel) és **hosszú lejáratú** (több év, például lakáshitel) lehet. **Fix kamatozású** hitelnél a kamat a futamidő nagy részében nem változik (kiszámítható a törlesztés), **változó kamatozásúnál** a piaci kamatokkal együtt módosul (a törlesztés nőhet vagy csökkenhet). A **devizahitel** külföldi pénznemben van nyilvántartva, így az árfolyam-kockázatot a felvevő viseli.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: fix és változó kamat',
          problem:
            'Egymillió forintos hitel kamata 10%. Mennyi az éves kamat, ha a kamat fix, és mennyi, ha 13%-ra emelkedik (a tőke változatlan)?',
          solution:
            '10%-nál: $1\\,000\\,000 \\cdot 0{,}10 = 100\\,000$ Ft, 13%-nál: $1\\,000\\,000 \\cdot 0{,}13 = 130\\,000$ Ft. A változó kamat 30 000 Ft többletterhet jelent évente.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: a devizahitel kockázata',
          problem:
            'Valaki 20 000 euró hitelt vesz fel, amikor az árfolyam 300 Ft/EUR. Hány forint hitelt kap? Hány forintot ér a tartozása, ha az árfolyam 400 Ft/EUR-ra emelkedik?',
          solution:
            'Felvételkor: $20\\,000 \\cdot 300 = 6\\,000\\,000$ Ft.\n\nTörlesztéskor: $20\\,000 \\cdot 400 = 8\\,000\\,000$ Ft. A tőketartozás forintértéke a gyengülő forint miatt $\\frac{8}{6} \\approx 1{,}33$-szorosára nőtt, a kamat nélkül is 2 millióval nagyobb.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: kamatos kamat',
          problem:
            'Betétbe teszel 500 000 forintot évi 8%-os kamatra. Mennyi lesz a számládon 3 év múlva, ha a kamatot is újra befekteted?',
          solution:
            '$500\\,000 \\cdot 1{,}08^3 = 629\\,856$ Ft. (Egy év után 540 000, két év után 583 200 Ft.)',
        },
        { kind: 'heading', text: 'Infláció' },
        {
          kind: 'text',
          text: 'Az **infláció** az árszínvonal tartós, általános emelkedése, vagyis a pénz vásárlóértéke csökken. **Kialakulhat**, ha a kereslet gyorsabban nő, mint a kínálat (kereslet-húzó infláció), ha a termelési költségek (nyersanyag, energia, bér) nőnek (költségnyomó infláció), vagy ha túl sok pénz kerül forgalomba. Mérik a **fogyasztóiár-index** segítségével: egy jellemző „fogyasztói kosár” árát hasonlítják össze két időpontban.',
        },
        {
          kind: 'compare',
          title: 'Az infláció következményei',
          columns: ['Kinek rosszabb?', 'Kinek kedvezőbb?'],
          rows: [
            {
              label: 'Megtakarítók',
              cells: [
                'ha a kamat kisebb az inflációnál, a megtakarítás vásárlóereje csökken',
                'ha a kamat nagyobb az inflációnál',
              ],
            },
            {
              label: 'Adósok',
              cells: [
                'változó kamatnál a kamat emelkedhet',
                'fix kamatnál a törlesztendő összeg reálértéke csökken',
              ],
            },
            {
              label: 'Állandó jövedelműek (például fix nyugdíj)',
              cells: [
                'a jövedelem vásárlóereje csökken',
                'ha a jövedelmet indexálják (az inflációhoz kötik)',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: infláció és vásárlóerő',
          problem:
            'Az éves infláció 4,5%. Hány forintot kell fizetni egy év múlva azért a kosárért, amely ma 100 000 Ft? Mennyi a mai 100 000 Ft vásárlóereje egy év múlva (a mai forintban kifejezve)? Mennyit ér reálértékben egy 3%-os betét, ha az infláció 5%?',
          solution:
            'A kosár ára: $100\\,000 \\cdot 1{,}045 = 104\\,500$ Ft.\n\nA mai 100 000 Ft egy év múlva már csak $100\\,000/1{,}045 \\approx 95\\,694$ Ft értékű kosarat vesz.\n\nA betét 100 000 Ft-ból 103 000 Ft lesz, de az árak 5%-kal nőnek: $\\frac{1{,}03}{1{,}05} = 0{,}981$, azaz a reálérték kb. 1,9%-kal csökken, hiába volt pozitív a kamat.',
        },
        { kind: 'heading', text: 'Értékpapírok és tőzsde' },
        {
          kind: 'compare',
          title: 'Az értékpapírok',
          columns: ['Mit jelent?', 'Hozama'],
          rows: [
            {
              label: 'Állampapír',
              cells: ['az állam hitelfelvétele a lakosságtól és a befektetőktől', 'kamat'],
            },
            {
              label: 'Kötvény',
              cells: [
                'hitelviszony: a kibocsátó (vállalat, állam) tartozik a vevőnek',
                'kamat, lejáratkor visszafizetés',
              ],
            },
            {
              label: 'Részvény',
              cells: [
                'tulajdonrész a vállalatban',
                'osztalék és árfolyam-nyereség (veszteség is lehet)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **tőzsdén** szervezett módon adják-veszik az értékpapírokat (**értéktőzsde**) vagy a nyersanyagokat, mezőgazdasági termékeket (**árutőzsde**). A kereslet és a kínálat dönti el az árfolyamot. A kockázat és a hozam összefügg: a nagyobb várható hozam általában nagyobb kockázattal jár.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: részvény hozama',
          problem:
            'Egy részvényt 2 000 forintért vettél, egy év alatt az árfolyama 2 300 forintra nőtt, és 100 forint osztalékot kaptál. Mennyi a hozam?',
          solution:
            'Nyereség: $(2\\,300 - 2\\,000) + 100 = 400$ Ft. Hozam: $400/2\\,000 = 0{,}20 = 20\\%$. (Ha az árfolyam esett volna, veszteség is lehetett volna.)',
        },
        { kind: 'heading', text: 'Pénztőke és működőtőke' },
        {
          kind: 'compare',
          title: 'A tőke áramlásának két fő formája',
          columns: ['Pénztőke', 'Működőtőke'],
          rows: [
            {
              label: 'Jellege',
              cells: [
                'értékpapír-befektetés, hitel, betét',
                'üzemek, vállalatok létesítése vagy felvásárlása',
              ],
            },
            {
              label: 'Mozgás',
              cells: ['gyors, könnyen ki- és beáramlik', 'hosszú távú, nehezen visszavonható'],
            },
            {
              label: 'Hatás',
              cells: ['finanszírozás, árfolyamhatás', 'munkahelyek, technológia, export'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **nemzetközi tőkeáramlás** a tőke országok közötti mozgása. A **működőtőke-befektetés** a termelő kapacitás létrehozását szolgálja, az **értékpapír-befektetés** pedig pénzügyi eszközökbe történő tőkehelyezés.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'zöldmezős és barnamezős beruházás',
              text: 'Zöldmezős: új üzem építése eddig be nem épített területen. Barnamezős (rekonstrukciós): meglévő, korábban már használt üzem vagy terület felújítása, átvétele.',
              emelt: true,
            },
            {
              term: 'THM, EBKM',
              text: 'A THM (teljes hiteldíj mutató) a hitel összes költségét, a kamaton kívüli díjakat is, éves százalékban mutatja. Az EBKM (egységesített betéti kamatláb mutató) a betét valódi éves hozamát mutatja.',
              emelt: true,
            },
            {
              term: 'állami és EU-támogatás, támogatott hitel, önerő',
              text: 'A támogatott hitel az állami vagy uniós támogatás miatt kedvezőbb feltételű. Az önerő a vásárló saját pénzből fedezett része.',
              emelt: true,
            },
            {
              term: 'lekötöttség (likviditás)',
              text: 'Azt jelzi, milyen gyorsan váltható a vagyon készpénzre: a folyószámla likvid, a hosszú lejáratra lekötött betét kevésbé.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: árfolyam- vagy kamatváltozás?',
          problem:
            'Egymillió forintot kétféleképpen fektethetsz be egy évre: (a) forintbetét 6% kamattal, (b) átváltod euróra 400 Ft/EUR árfolyamon, és euróbetétbe teszed 3% kamattal. Egy év múlva az euró árfolyama 380 vagy 420 Ft. Melyik a jobb?',
          solution:
            '(a) $1\\,000\\,000 \\cdot 1{,}06 = 1\\,060\\,000$ Ft.\n\n(b) $1\\,000\\,000 / 400 = 2\\,500$ euró; kamattal $2\\,500 \\cdot 1{,}03 = 2\\,575$ euró. Ha az árfolyam 380 Ft: $2\\,575 \\cdot 380 = 978\\,500$ Ft (a forintbetétnél rosszabb, sőt kevesebb, mint a kezdőösszeg). Ha 420 Ft: $2\\,575 \\cdot 420 = 1\\,081\\,500$ Ft (jobb).\n\nA fordulópont: $1\\,060\\,000/2\\,575 \\approx 411{,}65$ Ft/EUR. Az euróbetét csak akkor jobb, ha az árfolyam ennél erősebb euró felé mozdul. Itt az árfolyam-változás hatása (a 380 és 420 közötti eltérés kb. 100 000 Ft) nagyobb a kamatkülönbségnél (3 százalékpont, 30 000 Ft).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Számítás: valutaváltás (vételi, eladási árfolyam), a hitel kamata, a devizahitel törlesztésének változása, az infláció hatása, részvényhozam.',
            'Fogalmak: valuta és deviza, fix és változó kamat, kötvény és részvény, érték- és árutőzsde, pénztőke és működőtőke.',
            'Híradás vagy hírrészlet értelmezése: mit jelent a forint gyengülése, az inflációs adat, a kamatemelés?',
            'Szóbeli tétel: a mindennapi pénzügyi folyamatok (bankszámla, hitel, megtakarítás, biztosítás).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: a valutát és a devizát felcserélni (a valuta a **készpénz**); a forint gyengülését az árfolyamszám csökkenésének hinni (gyengülésnél **nő** a Ft/EUR árfolyam); az inflációt a pénz „értéknövekedésének” gondolni. Mindig kezeld egységesen, melyik pénznem a „nevező”.',
        },
        {
          kind: 'tip',
          text: 'Váltásnál ellenőrizd az észszerűséget: ha eurót veszel, a bank eladási (magasabb), ha eladsz, vételi (alacsonyabb) árfolyamát használjuk. A kamatos kamathoz: $K_n = K_0 \\cdot (1+p)^n$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a kamat- és az árfolyamváltozás hatását egy számításban kell összevetned: számold ki mindkét lehetőség végösszegét forintban, és add meg, milyen árfolyamnál egyenlő a kettő.',
        },
      ],
      topicMatch: [
        'monetáris világ',
        'pénz',
        'a pénz funkciói',
        'hitel',
        'infláció',
        'tőzsde',
        'árfolyam',
        'fogyasztóiár-index',
      ],
      quiz: [
        {
          question: 'Mit nevezünk valutának?',
          options: [
            'A bankszámlán lévő külföldi pénzt',
            'A külföldi pénznem készpénz formában',
            'Az állam hitelfelvételét',
            'A hitel kamatát',
          ],
          answer: 1,
          explanation:
            'A valuta a külföldi készpénz. A külföldi pénz számlán lévő, nem készpénz formája a deviza.',
        },
        {
          question:
            'A bank eladási árfolyama 410 Ft/EUR. Hány forintba kerül 150 euró megvásárlása?',
          options: ['61 500 Ft', '55 000 Ft', '615 000 Ft', '2,73 Ft'],
          answer: 0,
          explanation: '$150 \\cdot 410 = 61\\,500$ Ft.',
        },
        {
          question: 'Mit jelent, ha az euró árfolyama 380-ról 420 forintra emelkedik?',
          options: [
            'A forint erősödik, az import olcsóbb lesz',
            'A forint gyengül, az import drágul',
            'Csökken az infláció',
            'Az euró elveszti a konvertibilitását',
          ],
          answer: 1,
          explanation:
            'Egy euróért több forintot kell adni, vagyis a forint gyengül, a külföldi termékek hazai pénzben drágábbak.',
        },
        {
          question: 'Mi az infláció?',
          options: [
            'Az árszínvonal tartós, általános emelkedése, a pénz vásárlóerejének csökkenése',
            'Az árak átmeneti csökkenése egy boltban',
            'A hitelek kamatának megszűnése',
            'A részvények értékének emelkedése',
          ],
          answer: 0,
          explanation:
            'Az infláció tartós, általános áremelkedés, ami a pénz vásárlóértékének csökkenésével jár.',
        },
        {
          question: 'Melyik a részvény jellemzője?',
          options: [
            'Hitelviszony, fix kamat',
            'Az állam kölcsönt vesz fel általa',
            'Külföldi bankszámlapénz',
            'Tulajdonrész egy vállalatban, osztalék és árfolyam-nyereség lehetőségével',
          ],
          answer: 3,
          explanation:
            'A részvény tulajdonjogot testesít meg a vállalatban. A kötvény hitelviszony, az állampapír az állam hitelfelvétele.',
        },
        {
          emelt: true,
          question: 'Mit jelent a zöldmezős beruházás?',
          options: [
            'Meglévő üzem felújítását',
            'Új üzem építését korábban be nem épített területen',
            'Értékpapír vásárlását',
            'Mezőgazdasági támogatást',
          ],
          answer: 1,
          explanation:
            'A zöldmezős beruházásnál új üzem épül eddig beépítetlen területen. A barnamezős (rekonstrukciós) beruházás meglévő üzemet újít fel vagy vesz át.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Infláció', url: wiki('infláció') },
        { label: 'Wikipédia: Árfolyam', url: wiki('devizaárfolyam') },
        { label: 'Wikipédia: Tőzsde', url: wiki('tőzsde') },
      ],
    },
    {
      id: 'allamhaztartas-adossag-nemzetkozi-penzugy',
      subject: 'foldrajz',
      unitId: 'vilaggazdasag',
      title: 'Államháztartás, eladósodás és nemzetközi pénzügyi szervezetek',
      level: 'emelt',
      requirement: {
        emelt:
          'Ismerje az államháztartás fogalmát, sorolja fel a költségvetés fő összetevőit. Mondjon példákat költségvetési hiányt gerjesztő folyamatokra. Mutassa be a működőtőke mozgásának hatásait a gazdasági fejlődésben. Mutassa be a nemzetgazdaságok hitelfelvételének lehetséges kedvező és kedvezőtlen következményeit. Tárja fel az összefüggéseket az eladósodás és az adósságválság kialakulása között. Ismertesse a nemzetközi pénzügyi szervezetek szerepét és feladataikat. Oldjon meg a témához kapcsolódó problémamegoldást igénylő feladatokat.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **államháztartás** az állam pénzgazdálkodásának egésze (a központi költségvetés, az önkormányzatok és a társadalombiztosítás). A **költségvetés** az állam bevételeinek és kiadásainak terve.',
            '**Bevételek**: adók, járulékok, vámok, uniós támogatások. **Kiadások**: egészségügy, oktatás, nyugdíj, védelem, közlekedés, adósságszolgálat.',
            'Ha a kiadás nagyobb a bevételnél, **költségvetési hiány (deficit)** van; ha kisebb, **többlet (szufficit)**.',
            'A hiány finanszírozható hitellel, ami **adósságot** halmoz fel. Az **adósságcsapda** és az **adósságválság** akkor alakul ki, ha az adósságszolgálat felemészti a forrásokat.',
            'A **Nemzetközi Valutaalap (IMF)** és a **Világbank** nemzetközi pénzügyi szervezetek.',
          ],
          emelt: true,
        },
      ],
      details: [
        { kind: 'heading', text: 'Államháztartás és költségvetés', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **államháztartás** a közfeladatok (oktatás, egészségügy, rendvédelem, infrastruktúra) finanszírozását végző pénzügyi rendszer. A **költségvetés** az éves bevételek és kiadások terve. A **költségvetési egyensúly** azt jelenti, hogy a bevételek és a kiadások egyenlők; ha a kiadás nagyobb, **mérleghiány (deficit)**, ha a bevétel nagyobb, **mérlegtöbblet (szufficit)** keletkezik.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A költségvetés fő összetevői',
          columns: ['Bevételek', 'Kiadások'],
          rows: [
            {
              label: 'Fő tételek',
              cells: [
                'adók (például általános forgalmi adó, jövedelemadó), járulékok, vámok, uniós támogatás',
                'nyugdíj, egészségügy, oktatás, védelem, közlekedés, kamatkiadás, támogatások',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**A hiányt gerjesztő folyamatok** például: a gazdasági visszaesés (kisebb adóbevétel, nagyobb szociális kiadás), a népesség elöregedése (nyugdíj- és egészségügyi kiadás nő), nagy állami beruházások vagy természeti katasztrófa, adócsökkentés, valamint a hatékonytalan adóbeszedés vagy a rosszul célzott kiadások.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: hiány és adósság aránya',
          problem:
            'Egy (kitalált) ország költségvetési bevétele 4 800, kiadása 5 200 milliárd forint, a GDP 40 000 milliárd forint, az államadósság 24 000 milliárd forint. Mekkora a hiány, és mennyi ez a GDP százalékában? Mennyi az államadósság a GDP százalékában?',
          solution:
            'Hiány: $5\\,200 - 4\\,800 = 400$ milliárd forint. A GDP-hez viszonyítva $400 / 40\\,000 = 1{,}0\\%$.\n\nAz államadósság aránya: $24\\,000/40\\,000 = 60\\%$. (Az eurót bevezető EU-országok számára a maastrichti kritériumok a hiányra 3%-os, az adósságra 60%-os felső határt szabnak a GDP arányában.)',
        },
        { kind: 'heading', text: 'Hitelfelvétel, eladósodás, adósságválság', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          title: 'Egy ország hitelfelvételének következményei',
          columns: ['Kedvező', 'Kedvezőtlen'],
          rows: [
            {
              label: 'Fejlesztés',
              cells: [
                'a hitelből beruházás (infrastruktúra, ipar, oktatás) finanszírozható, ami később növeli a GDP-t',
                'ha a hitelt fogyasztásra költik, nem teremt jövőbeli bevételt',
              ],
            },
            {
              label: 'Terhek',
              cells: [
                'a fejlődés gyorsabb lehet, mint saját forrásból',
                'kamatfizetés, törlesztés, függés a hitelezőktől',
              ],
            },
            {
              label: 'Kockázat',
              cells: [
                'alacsony kamat mellett olcsó finanszírozás',
                'kamatemelés vagy a pénz gyengülése (külföldi pénznemű adósságnál) megdrágítja',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Belső adósság**: a hazai hitelezőkkel (lakosság, bankok) szemben fennálló tartozás. **Külső adósság**: külföldi hitelezőkkel szembeni. Az **eladósodás** akkor válik veszélyessé, ha az ország a hiányt új hitelből fedezi, és a kamat- és törlesztésfizetés a bevételek egyre nagyobb részét viszi el: ez az **adósságcsapda**. Ha az ország nem tudja fizetni a törlesztést, **adósságválság** következik be. Ilyenkor lehetőség az **átütemezés** (a lejáratok kitolása, kedvezőbb feltételek).',
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Az adósságválság kialakulásának összefüggései',
          items: [
            'Túlzott hitelfelvétel, főleg külső, külföldi pénznemben.',
            'A fő exporttermék árának esése (például nyersanyagexportőr országoknál): csökken a devizabevétel.',
            'Kamatemelkedés vagy a hazai pénz gyengülése: nő a törlesztés forintértéke (hazai pénzben).',
            'Hatékonytalan felhasználás: a hitelből nem lett többletbevétel.',
            'Példák: az 1980-as évek latin-amerikai adósságválsága (például Mexikó 1982), az euróövezeti adósságválság Görögországban (2010-től).',
          ],
        },
        { kind: 'heading', text: 'Működőtőke és a gazdasági fejlődés', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          title: 'A működőtőke-beáramlás hatásai a fogadó országra',
          columns: ['Kedvező', 'Kedvezőtlen'],
          rows: [
            {
              label: 'Hatás',
              cells: [
                'munkahelyek, technológia, szaktudás, export, adóbevétel',
                'a profit kivitele, függés a külföldi cégektől, a helyi vállalkozások kiszorulása',
              ],
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'adóparadicsom, offshore cég',
              text: 'Az adóparadicsom olyan terület, ahol az adó nagyon alacsony vagy nulla, és a pénzügyi adatok titkosak. Az offshore cég ilyen területen bejegyzett, ott tényleges tevékenységet nem folytató cég. Használata lehet jogszerű adóoptimalizálás, de visszaélésre is alkalmas.',
              emelt: true,
            },
            {
              term: 'monetáris világgazdaság',
              text: 'A pénzügyi folyamatok (devizapiac, tőzsdék, tőkeáramlás) világméretű hálózata, amely gyakran gyorsabban mozog, mint a valódi (termelő) gazdaság.',
              emelt: true,
            },
            {
              term: 'tőzsdeindex, Dow Jones-index, BUX-index',
              text: 'A tőzsdeindex kiválasztott vállalatok részvényárfolyamainak súlyozott összesítése, a tőzsde általános irányát mutatja. A Dow Jones az amerikai tőzsde 30 nagyvállalatát, a BUX a budapesti tőzsde vezető részvényeit követi.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'Nemzetközi pénzügyi szervezetek', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          title: 'IMF és Világbank',
          columns: ['Nemzetközi Valutaalap (IMF)', 'Világbank'],
          rows: [
            {
              label: 'Fő feladat',
              cells: [
                'a nemzetközi pénzügyi rendszer stabilitása, rövid távú hitel fizetési nehézségekkel küzdő országoknak',
                'hosszú távú fejlesztési hitelek és szakmai segítség a fejlődő országoknak',
              ],
            },
            {
              label: 'Jellemző',
              cells: [
                'a hitelhez gazdaságpolitikai feltételeket (például hiánycsökkentést) köt',
                'konkrét fejlesztési projekteket (infrastruktúra, oktatás, egészségügy) finanszíroz',
              ],
            },
            {
              label: 'Alapítás',
              cells: [
                'a bretton woodsi konferencia (1944) nyomán',
                'a bretton woodsi konferencia (1944) nyomán',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A WTO (Világkereskedelmi Szervezet) a világkereskedelem szabályaival, az OECD a fejlett piacgazdaságok közötti egyeztetéssel foglalkozik (lásd az előző lecke).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Így kérdezik',
          items: [
            'Számítás: költségvetési hiány, hiány és adósság a GDP arányában, árfolyam- és kamatváltozás összevetése.',
            'Ok-okozati kifejtés: hogyan vezet az eladósodás adósságcsapdához és adósságválsághoz?',
            'Fogalmak: deficit és szufficit, belső és külső adósság, átütemezés, THM, EBKM, adóparadicsom.',
            'Az IMF és a Világbank szerepének megkülönböztetése.',
          ],
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'Gyakori hiba: a hiányt (egy évi bevétel és kiadás különbsége) és az adósságot (a felhalmozott tartozás) összekeverni. A hiány évente új adóssággal egészíti ki a meglévő adósságállományt.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'A hitelfelvétel értékelésénél mindig mondj kedvezőt és kedvezőtlent is, és mondd ki a feltételt: akkor kedvező, ha a hitelből olyan beruházás lesz, amely többletbevételt hoz, és az ország a törlesztést a jövőbeli bevételekből fizetni tudja.',
        },
      ],
      topicMatch: ['államháztartás', 'monetáris világ'],
      quiz: [
        {
          emelt: true,
          question: 'Mi a költségvetési hiány (deficit)?',
          options: [
            'A kiadások nagyobbak a bevételeknél',
            'A bevételek nagyobbak a kiadásoknál',
            'Az export nagyobb az importnál',
            'Az infláció meghaladja a kamatot',
          ],
          answer: 0,
          explanation:
            'A deficit a bevételeket meghaladó állami kiadás. Ha a bevétel nagyobb, szufficit van.',
        },
        {
          emelt: true,
          question:
            'Egy ország bevétele 900, kiadása 960 milliárd, a GDP 6 000 milliárd. Mennyi a hiány a GDP százalékában?',
          options: ['6,7%', '1%', '0,1%', '10%'],
          answer: 1,
          explanation: 'Hiány: $960 - 900 = 60$ milliárd; $60/6\\,000 = 0{,}01 = 1\\%$.',
        },
        {
          emelt: true,
          question: 'Mi az adósságcsapda?',
          options: [
            'Az államadósság teljes eltörlése',
            'A külkereskedelmi többlet',
            'Az állam új hitelből fizeti a régi adósság kamatait és törlesztését, így az adósság tovább nő',
            'A vámok emelése',
          ],
          answer: 2,
          explanation:
            'Adósságcsapdában az adósságszolgálat felemészti a bevételeket, ezért új hitelt kell felvenni, és az adósság tovább nő.',
        },
        {
          emelt: true,
          question:
            'Melyik szervezet nyújt rövid távú hitelt fizetési nehézségekkel küzdő országoknak, gazdaságpolitikai feltételekkel?',
          options: ['WTO', 'UNESCO', 'Nemzetközi Valutaalap (IMF)', 'OPEC'],
          answer: 2,
          explanation:
            'Az IMF a fizetési mérleg nehézségeivel küzdő országoknak nyújt hitelt, feltételekhez kötve. A WTO a kereskedelmi szabályokkal, az UNESCO a kultúrával, az OPEC a kőolajjal foglalkozik.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Államháztartás', url: wiki('államháztartás') },
        { label: 'Wikipédia: Adósságválság', url: wiki('adósságválság') },
        { label: 'Wikipédia: Nemzetközi Valutaalap', url: wiki('Nemzetközi Valutaalap') },
      ],
    },
  ],
};

export default unit;
