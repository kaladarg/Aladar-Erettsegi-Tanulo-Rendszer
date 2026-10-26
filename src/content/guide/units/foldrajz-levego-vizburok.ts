import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 3.2 (A levegőburok földrajza) and 3.3 (A vízburok földrajza). */
const unit: GuideUnit = {
  id: 'levego-vizburok',
  subject: 'foldrajz',
  order: 30,
  title: 'A levegőburok és a vízburok földrajza',
  requirementRef: '3.2 A levegőburok földrajza; 3.3 A vízburok földrajza',
  intro:
    'A légkör szerkezete és felmelegedése, a légnyomás és a szelek, a ciklonok és frontok, a csapadék, az időjárás és az éghajlat; majd a víz körforgása, a tengerek és az óceánok, a folyók, a tavak, a felszín alatti vizek és a víz mint erőforrás. A számítási feladatok (hőmérséklet, hőingás, vízhozam) lépésről lépésre.',
  requirementSource:
    'A követelmények, a fogalmak és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (3.2, 3.3). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'alsó, középső és felső légkör',
        'troposzféra',
        'sztratoszféra',
        'ózonréteg',
        'mezoszféra',
        'termoszféra',
        'exoszféra',
        'állandó, változó és erősen változó gázok',
        'vendéganyagok',
        'besugárzás',
        'visszaverődés',
        'elnyelődés',
        'kisugárzás',
        'üvegházhatás',
        'üvegházgázok',
        'sugárzás-visszaverő képesség (albedó)',
        'felmelegedés és lehűlés',
        'a hőmérséklet napi és évi járása',
        'napi, havi és évi középhőmérséklet',
        'napi hőingás',
        'évi közepes hőingás',
        'abszolút hőingás',
        'izoterma',
        'légnyomás',
        'szél',
        'izobár',
        'mérsékelt övezeti ciklon és anticiklon',
        'hideg- és melegfront',
        'szélrendszer',
        'passzátszelek',
        'nyugatias szelek',
        'sarki szelek',
        'általános légkörzés (nagy földi légkörzés)',
        'hőmérsékleti (termikus) egyenlítő',
        'forró övezeti (trópusi) monszunszélrendszer',
        'mérsékelt övezeti monszunszélrendszer',
        'tényleges (abszolút) és viszonylagos (relatív) vízgőztartalom',
        'harmatpont',
        'telítettség',
        'túltelítettség',
        'kicsapódási (kondenzációs) mag',
        'kicsapódás',
        'felhő- és csapadékképződés',
        'felhő',
        'köd',
        'hulló csapadékfajták (eső, hó, jégeső, ónos eső, havas eső, zápor)',
        'talaj menti (felszíni) csapadékfajták (harmat, dér, zúzmara)',
        'aszály',
        'idő',
        'időjárás',
        'éghajlat (klíma)',
        'időjárási térkép',
        'időjárás-előrejelzés',
        'időjárási és éghajlati elemek',
        'időjárási veszélyhelyzetek',
        'az üvegházhatás fokozódása',
        'globális felmelegedés',
        'ózonréteg-elvékonyodás (ózonritkulás)',
        'éghajlatváltozás (klímaváltozás)',
        'légszennyező anyagok',
        'savas csapadék',
        'savas ülepedés',
        'elsavanyodás',
        'füstköd (szmog)',
        'radioaktív szennyeződés',
        'vízháztartás (párolgás-párologtatás, csapadék, lefolyás)',
        'a víz körforgása',
        'világtenger',
        'óceán',
        'tenger',
        'tengerszoros',
        'öböl',
        'beltenger',
        'peremtenger',
        'szárazföldi talapzat (self)',
        'kontinentális lejtő',
        'fajlagos hőkapacitás (fajhő)',
        'sótartalom',
        'hűtő-fűtő hatás',
        'hullámzás',
        'hideg és meleg tengeráramlás',
        'tengerjárás',
        'apály',
        'dagály',
        'állóvíz',
        'tó',
        'fertő',
        'mocsár',
        'láp',
        'kimélyített és elgátolt tómedence',
        'jégvájta tó',
        'morotvató',
        'szélvájta tó',
        'moréna által elgátolt tó',
        'tektonikus eredetű tó',
        'krátertó',
        'maradványtó',
        'mesterséges tó',
        'feltöltődés',
        'lecsapolódás',
        'kiszáradás',
        'vízgyűjtő terület',
        'vízválasztó',
        'fő- és mellékfolyó',
        'lefolyásos és belső lefolyású terület',
        'időszakos vízfolyás',
        'vízállás',
        'vízhozam',
        'vízjárás',
        'árvíz',
        'felszín alatti víz',
        'vízfogó és víztartó kőzetréteg',
        'talajnedvesség',
        'talajvíz',
        'belvíz',
        'artézi víz',
        'hévíz',
        'ásványvíz',
        'gyógyvíz',
        'résvíz',
        'karsztvíz',
        'forrás',
        'artézi kút',
        'vízgazdálkodás',
        'ár- és belvízvédelem',
        'árvízvédelmi gát',
        'ártér',
        'hullámtér',
        'ármentesített terület (mentesített ártér)',
        'vésztározó',
        'víztározó',
        'ivóvíz',
        'öntözővíz',
        'ipari víz',
        'szennyvíztisztítás',
        'vízszennyező források',
        'belvízi és tengerhajózás',
        'halászat',
      ],
      emelt: [
        'ionoszféra',
        'napfénytartam',
        'lejtőkitettség',
        'fordított hőrétegződés (hőmérsékleti inverzió)',
        'tenyészidőszak',
        'hőösszeg',
        'napállandó',
        'okklúziós front',
        'trópusi ciklon (hurrikán, tájfun)',
        'tornádó',
        'helyi szelek (parti szél, hegy-völgyi szél, városi szél, főn)',
        'futóáramlás',
        'felhőfajták (pehely-, fátyol-, réteg-, gomoly-, zivatarfelhő)',
        'mikroklíma',
        'emisszió',
        'transzmisszió',
        'immisszió',
        '„fagyosszentek”',
        '„Medárd-nap”',
        '„vénasszonyok nyara”',
        'Azori- és Szibériai-maximum',
        'Elő-ázsiai (iráni) minimum',
        'Izlandi minimum',
        'a földközi tenger',
        'pozitív és negatív hőmérsékleti anomália',
        'óceáni vízkörzés',
        'szökőár',
        'vakár',
        'vihardagály',
        'tengerszem',
        'poljetó',
        'kalderató',
        'időszakos tó',
        'eutrofizáció',
        'villámáradás',
        'folyószabályozás',
        'közműolló',
        'nitrátosodás',
        'vízforgatás',
        'ásott kút',
        'fúrt kút',
        'csápos kút',
        'mechanikai, biológiai és kémiai szennyvíztisztítás',
        'polder',
        'túlhalászás',
        'El Niño',
      ],
    },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'legkor-szerkezete-felmelegedese',
      subject: 'foldrajz',
      unitId: 'levego-vizburok',
      title: 'A légkör szerkezete és felmelegedése',
      level: 'both',
      requirement: {
        kozep:
          'A légkört alkotó anyagok csoportosítása, a légkör gazdasági jelentősége; a légkör szerkezete és a szférák fő jellemzői, ábraelemzés; az ózonréteg jelentősége. A levegő felmelegedése a napsugarak hajlásszöge alapján; az üvegházhatás; a hőmérséklet napi és évi járása; napi és évi középhőmérséklet, napi, évi közepes és abszolút hőingás kiszámítása; hőmérsékleti adatok ábrázolása és elemzése; a napsugárzás és az energiagazdaság',
        emelt:
          'A felmelegedést és lehűlést módosító tényezők; a hőmérséklet gazdasági jelentőségével kapcsolatos fogalmak',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A száraz levegő kb. **78% nitrogén**, **21% oxigén**, közel 1% argon; a szén-dioxid csak kb. 0,04%, mégis fontos (üvegházgáz).',
            'A légkör rétegei lentről felfelé: **troposzféra, sztratoszféra, mezoszféra, termoszféra, exoszféra**. Az időjárás a troposzférában zajlik.',
            'A troposzférában a hőmérséklet felfelé **kb. 0,6 °C-ot csökken 100 méterenként**. A sztratoszférában az ózonréteg elnyeli az ibolyántúli sugarakat, ezért itt a hőmérséklet nő.',
            'A felmelegedést a **napsugarak hajlásszöge** szabja meg: minél nagyobb, annál nagyobb a felmelegedés (egyenlítő felé).',
            '**Üvegházhatás**: a légkör egy része átengedi a Nap sugárzását, de visszatartja a Föld hősugárzását. Nélküle a Föld átlaghőmérséklete kb. –18 °C lenne, így kb. 15 °C.',
            'Napi középhőmérséklet = a mérések átlaga; hőingás = legmagasabb – legalacsonyabb érték.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A légkör anyaga' },
        {
          kind: 'compare',
          title: 'A légkör alkotói',
          columns: ['Összetevők', 'Példák'],
          rows: [
            {
              label: 'Állandó gázok',
              cells: ['aránya alig változik', 'nitrogén (kb. 78%), oxigén (kb. 21%), nemesgázok'],
            },
            {
              label: 'Változó gázok',
              cells: [
                'aránya helytől és időtől függően ingadozik',
                'vízgőz, szén-dioxid, metán, ózon',
              ],
            },
            {
              label: 'Erősen változó anyagok, vendéganyagok',
              cells: [
                'nem a levegő állandó részei, természetes vagy emberi eredetűek',
                'por, korom, vulkáni hamu, pollen, szennyező gázok',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A légkör gazdasági jelentősége: oxigénje a légzéshez és az égéshez kell, a nitrogén a műtrágyagyártás nyersanyaga, a levegő mozgási energiája (szélerőművek) és a Nap sugárzása (napelemek) megújuló energiaforrás, a repülés közege, a csapadék pedig a mezőgazdaság alapja. Az összetétel változásának hatása a mindennapokra: a szén-dioxid növekedése erősíti az üvegházhatást, a szennyezett levegő légzőszervi betegségeket okoz, az ózonréteg ritkulása növeli az ibolyántúli sugárzást.',
        },
        { kind: 'heading', text: 'A légkör szerkezete' },
        {
          kind: 'compare',
          title: 'A szférák fő jellemzői',
          columns: ['Kiterjedése és hőmérséklete', 'Jellemző'],
          rows: [
            {
              label: 'Troposzféra (alsó légkör)',
              cells: [
                'a felszíntől kb. 8–18 km-ig (sarkokon vékonyabb, az Egyenlítőnél vastagabb); hőmérséklet felfelé csökken',
                'a légkör tömegének nagy része és szinte az összes vízgőz itt van; felhők, csapadék, szél, az időjárás itt zajlik',
              ],
            },
            {
              label: 'Sztratoszféra (középső légkör)',
              cells: [
                'a tropopauza fölött kb. 50 km-ig; hőmérséklet felfelé nő',
                'az ózonréteg kb. 20–30 km magasan van; elnyeli az ibolyántúli (UV) sugárzás nagy részét',
              ],
            },
            {
              label: 'Mezoszféra (középső légkör)',
              cells: [
                'kb. 50–80 km; a hőmérséklet felfelé újra csökken, a légkör leghidegebb része',
                'itt égnek el a hullócsillagok (meteorok)',
              ],
            },
            {
              label: 'Termoszféra (felső légkör)',
              cells: [
                'kb. 80 km fölött; a hőmérséklet felfelé erősen nő',
                'nagyon ritka levegő; a sarki fény itt jelenik meg',
              ],
            },
            {
              label: 'Exoszféra (felső légkör)',
              cells: [
                'a termoszféra fölött; fokozatosan megy át a világűrbe',
                'a gázrészecskék kiszabadulhatnak a világűrbe',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **ionoszféra** nem külön szféra, hanem a termoszféra és az alatta lévő rétegek elektromosan töltött (ionizált) gázrészecskékben gazdag tartománya. Visszaveri a rádióhullámokat, ezért a hosszú távú rádiókapcsolatban fontos.',
        },
        { kind: 'heading', text: 'Hőmérséklet-változás a magassággal' },
        {
          kind: 'formula',
          tex: '\\Delta T = 0{,}6\\,^\\circ\\text{C} \\cdot \\frac{\\Delta h}{100\\ \\text{m}}',
          caption:
            'A troposzférában átlagosan 100 méterenként kb. 0,6 °C-kal csökken a hőmérséklet.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'A hegy lábánál, 200 m tengerszint feletti magasságban 18 °C-ot mérnek. Mennyi a hőmérséklet a csúcson, 1200 m magasan, ha a hőmérséklet 100 méterenként 0,6 °C-kal csökken? Hány méter magasan van ott a fagypont, ha a hegy lábánál 12 °C van?',
          solution:
            'Magasságkülönbség: $1200 - 200 = 1000$ m, ami 10 darab 100 méteres szakasz. Csökkenés: $10 \\cdot 0{,}6 = 6$ °C. A csúcson $18 - 6 = 12$ °C van.\n\nFagypont: 12 °C-ot kell lehűlnie, ami $\\frac{12}{0{,}6} = 20$ szakasz, azaz $20 \\cdot 100 = 2000$ m magasságkülönbség. Ha a lábnál 12 °C van, a fagypont a láb fölött 2000 m-rel van (ha a láb 400 m-en van, akkor 2400 m magasan).',
        },
        { kind: 'heading', text: 'Hogyan melegszik fel a levegő?' },
        {
          kind: 'text',
          text: 'A Nap sugárzásának a légkör csak kisebb részét nyeli el közvetlenül. A **besugárzás** egy részét a felhők és a felszín **visszaveri**, a többit a felszín **elnyeli**, és hősugárzásként **kisugározza**. A levegőt tehát főleg a felmelegedett felszín fűti alulról. A felszín sugárzás-visszaverő képessége az **albedó**: a friss hó nagyon magas (kb. 80–90%), az erdő és a sötét talaj alacsony, a víz általában alacsony. Ezért melegszik fel kevésbé a hó, mint a szántó.',
        },
        {
          kind: 'text',
          text: 'A **napsugarak hajlásszöge** a döntő: ha a sugarak meredeken (nagy szögben) érkeznek, ugyanaz a sugárnyaláb kisebb felületet melegít, és rövidebb utat tesz meg a légkörben, így kevesebb sugárzás vész el. Ezért meleg az Egyenlítő környéke, és ezért hideg a sarkvidék, valamint ezért melegebb nyáron, mint télen. A hajlásszög a földrajzi szélességtől és az évszaktól (a Föld keringésétől és tengelyferdeségétől) függ.',
        },
        {
          kind: 'text',
          text: 'Az **üvegházhatás**: a Föld felszíne által kisugárzott hosszúhullámú hősugárzást az **üvegházgázok** (vízgőz, szén-dioxid, metán, dinitrogén-oxid, ózon) részben elnyelik, és visszasugározzák a felszín felé. A természetes üvegházhatás teszi lakhatóvá a Földet. A gond az emberi eredetű **fokozódása**, mert a hőmérséklet emelkedik (lásd a harmadik leckét).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A felmelegedést és a lehűlést módosító tényezők: a tengerszint feletti magasság, a **lejtőkitettség** (a déli lejtő több napsugárzást kap, mint az északi), a felszín anyaga és albedója, a víz–szárazföld eloszlás (a víz lassan melegszik, lassan hűl), a felhőzet és a szél. **Fordított hőrétegződés (inverzió)**: ha a felszín közelében hidegebb a levegő, mint fölötte (például télen, szélcsendben, völgyekben), a hideg levegő megreked, a köd és a szennyezés összegyűlik. A hőmérséklet gazdasági jelentőségéhez tartozik a **tenyészidőszak** (az az időszak, amikor a napi középhőmérséklet a növények fejlődéséhez elég magas, kb. 5 °C fölött van), a **hőösszeg** (a tenyészidőszak napi középhőmérsékleteinek összege, a termesztett növények hőigényéhez mérik) és a **napfénytartam**. A **napállandó** a Föld légkörének határán, a sugárzásra merőleges felületre érkező napsugárzás teljesítménye; értéke kb. 1361 W/m².',
        },
        { kind: 'heading', text: 'A hőmérséklet napi és évi járása' },
        {
          kind: 'text',
          text: 'A **napi járás**: napkelte után a felszín fokozatosan felmelegszik, a legmagasabb hőmérséklet nem délben, hanem délután 2–3 óra körül van (a felszín még akkor is többet nyel el, mint amennyit kisugároz). A legalacsonyabb hőmérséklet napkelte körül, a hosszú éjszakai lehűlés végén alakul ki. Az **évi járás** a Föld keringésével és a tengelyferdeséggel függ össze: Magyarországon a legmelegebb hónap a július, a leghidegebb a január; az óceánok közelében a szélsőértékek később (augusztus, február) jelentkeznek, mert a víz lassabban melegszik és hűl.',
        },
        { kind: 'heading', text: 'Középhőmérséklet és hőingás kiszámítása' },
        {
          kind: 'compare',
          title: 'A hőmérsékleti mutatók',
          columns: ['Számítás', 'Példa'],
          rows: [
            {
              label: 'Napi középhőmérséklet',
              cells: ['a nap során mért értékek számtani átlaga', '(2 + 9 + 15 + 10) : 4 = 9 °C'],
            },
            {
              label: 'Napi hőingás',
              cells: ['az adott nap legmagasabb – legalacsonyabb hőmérséklete', '15 – 2 = 13 °C'],
            },
            {
              label: 'Havi / évi középhőmérséklet',
              cells: ['a napi (havi) középhőmérsékletek átlaga', 'a 12 havi érték összege : 12'],
            },
            {
              label: 'Évi közepes hőingás',
              cells: [
                'a legmelegebb hónap – a leghidegebb hónap középhőmérséklete',
                '21 – (–1) = 22 °C',
              ],
            },
            {
              label: 'Abszolút hőingás',
              cells: [
                'a vizsgált időszak abszolút maximuma – abszolút minimuma',
                'a legmagasabb és a legalacsonyabb mért érték különbsége',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy város havi középhőmérsékletei januártól decemberig (°C): –1, 1, 6, 11, 16, 19, 21, 21, 16, 11, 5, 0. Mennyi az évi középhőmérséklet és az évi közepes hőingás?',
          solution:
            'Összeg: $-1 + 1 + 6 + 11 + 16 + 19 + 21 + 21 + 16 + 11 + 5 + 0 = 126$. Évi középhőmérséklet: $126 : 12 = 10{,}5$ °C.\n\nA legmelegebb hónap 21 °C (július, augusztus), a leghidegebb –1 °C (január). Évi közepes hőingás: $21 - (-1) = 22$ °C.',
        },
        {
          kind: 'text',
          text: 'Hőmérsékleti adatokat vonaldiagramon ábrázolunk (a hónapok a vízszintes, a hőmérséklet a függőleges tengelyen). A **térképeken az izoterma** az azonos hőmérsékletű pontokat összekötő vonal: ahol sűrűn követik egymást, ott gyorsan változik a hőmérséklet.',
        },
        { kind: 'heading', text: 'Napsugárzás és energiagazdaság' },
        {
          kind: 'text',
          text: 'A napsugárzás megújuló energiaforrás: napelemek (áramtermelés) és napkollektorok (vízmelegítés). A hasznosítás a napsütéses órák számától és a sugarak hajlásszögétől függ, ezért a sivatagos, szubtrópusi területek kedvezők. A Nap energiája közvetve a szél, a víz körforgása és a biomassza energiájának is az alapja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Légkör szerkezetének ábrája: a szférákat és a hőmérséklet-görbét kell azonosítani (hol van az ózonréteg, melyik réteg a leghidegebb).',
            'Számítás: hőmérséklet a hegy tetején vagy a repülőgép magasságában; napi és évi középhőmérséklet, hőingás táblázatból vagy diagramból.',
            'Magyarázat: miért melegebb az Egyenlítő, miért van üvegházhatás, miért nem délben a legmelegebb.',
            'Éghajlati diagram vagy hőmérsékleti térkép összehasonlítása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a hőingást összeadod a mínuszos értékkel (21 + 1), pedig kivonni kell (21 – (–1) = 22). A másik tipikus hiba, hogy az üvegházhatást és az ózonréteg ritkulását összekeveríted: az első a hő visszatartása, a második az UV-sugárzás átjutása.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz vázlata (üvegházhatás): 1. a Nap rövidhullámú sugárzása átjut a légkörön; 2. a felszín elnyeli és hősugárzásként kisugározza; 3. az üvegházgázok elnyelik és visszasugározzák; 4. ezért a felszín közelében melegebb van, mint nélkülük; 5. az emberi kibocsátás ezt fokozza.',
        },
      ],
      topicMatch: [
        '=a légkör szerkezete',
        '=a légkör jellemzői',
        '=a légkör gazdasági hasznosítása',
        '=légkör',
        '=levegőburok',
        '=légkör rétegei',
        '=légkör összetétele',
        '=ózonréteg',
        '=felmelegedés',
        '=napsugárzás',
        '=albedó',
        '=hőmérséklet',
      ],
      quiz: [
        {
          question: 'Melyik szférában zajlik az időjárási jelenségek nagy része?',
          options: ['sztratoszféra', 'mezoszféra', 'troposzféra', 'termoszféra'],
          answer: 2,
          explanation:
            'A felhők, a csapadék és a szél a troposzférában alakulnak ki, mert itt található a vízgőz nagy része.',
        },
        {
          question:
            'A hegy lábánál 20 °C van, a hőmérséklet 100 méterenként 0,6 °C-kal csökken. Hány °C van a 1500 m-rel magasabban lévő csúcson?',
          options: ['11 °C', '5 °C', '14 °C', '9 °C'],
          answer: 0,
          explanation:
            'Az 1500 m 15 darab 100 méteres szakasz: $15 \\cdot 0{,}6 = 9$ °C a csökkenés, tehát $20 - 9 = 11$ °C.',
        },
        {
          question: 'Mi okozza a természetes üvegházhatást?',
          options: [
            'az ózonréteg elnyeli az UV-sugárzást',
            'az üvegházgázok visszatartják a felszín hősugárzását',
            'a felhők visszaverik a napsugarakat',
            'a szél szétosztja a meleget',
          ],
          answer: 1,
          explanation:
            'Az üvegházgázok a felszín kisugárzott hőjének egy részét elnyelik és visszasugározzák, ezért a Föld felszíne melegebb, mint nélkülük lenne.',
        },
        {
          question:
            'Egy hónap legmagasabb hőmérséklete 28 °C, a legalacsonyabb –3 °C volt. Mennyi az abszolút hőingás ebben a hónapban?',
          options: ['25 °C', '15,5 °C', '31 °C', '11 °C'],
          answer: 2,
          explanation: 'A hőingás a két szélsőérték különbsége: $28 - (-3) = 31$ °C.',
        },
        {
          question: 'Mi a hőmérsékleti inverzió?',
          emelt: true,
          options: [
            'a hőmérséklet gyorsan emelkedik a magassággal',
            'a felszín közelében hidegebb a levegő, mint fölötte',
            'az óceán vize melegebb a levegőnél',
            'a nappali és éjszakai hőmérséklet felcserélődik',
          ],
          answer: 1,
          explanation:
            'Fordított hőrétegződéskor a hideg levegő alul reked, a hőmérséklet a magassággal nő; ez a köd és a szennyezés felhalmozódásának kedvez.',
        },
      ],
      sources: [
        { label: 'Wikipédia: A Föld légköre', url: wiki('A Föld légköre') },
        { label: 'Wikipédia: Üvegházhatás', url: wiki('Üvegházhatás') },
        { label: 'Wikipédia: Ózonréteg', url: wiki('Ózonréteg') },
      ],
    },
    {
      id: 'legnyomas-szelek-ciklonok',
      subject: 'foldrajz',
      unitId: 'levego-vizburok',
      title: 'Légnyomás, szél, általános légkörzés és frontok',
      level: 'both',
      requirement: {
        kozep:
          'A légnyomás és az izobár fogalma; a légnyomás-változás oka és kapcsolata a széllel; a Coriolis-erő (eltérítő erő) szerepe; az állandó szélrendszerek; a termikus egyenlítő; az általános légkörzés egyszerű rajza; a monszun évszakos irányváltozása és következményei; a mérsékelt övezeti ciklon és anticiklon, a hideg- és melegfront kialakulása és összehasonlítása',
        emelt:
          'A függőleges légmozgások és a szelek kapcsolata ábrán; trópusi ciklonok és helyi szelek; a futóáramlások szerepe; magyarázó ábrák a monszunszélrendszerekről',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Légnyomás**: a levegő súlyából adódó nyomás. Tengerszinten átlagosan kb. 1013 hPa; felfelé csökken. Az **izobár** az azonos légnyomású pontokat összekötő vonal.',
            '**Szél**: a levegő vízszintes mozgása a nagyobb légnyomású hely felől a kisebb felé. Minél sűrűbbek az izobárok, annál erősebb a szél.',
            'A **Föld forgása** miatt a szél eltérül: az északi féltekén jobbra, a délin balra (Coriolis-erő, eltérítő erő).',
            '**Általános légkörzés**: egyenlítői minimum, két szubtrópusi maximum (kb. 30°), két mérsékelt övi (szubpoláris) minimum (kb. 60°), két sarki maximum. Állandó szelek: **passzát**, **nyugatias szelek**, **sarki szelek**.',
            '**Ciklon**: alacsony nyomású, feláramlás, felhős, csapadékos idő. **Anticiklon**: magas nyomású, leáramlás, derült idő.',
            '**Hidegfront**: a hideg levegő a meleg alá nyomul, záporok, zivatarok, lehűlés. **Melegfront**: a meleg levegő felsiklik a hidegre, rétegfelhők, tartós eső, felmelegedés.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A légnyomás és a szél' },
        {
          kind: 'text',
          text: 'A felmelegedett levegő kitágul, sűrűsége csökken, felemelkedik, és a felszín közelében **kisebb légnyomás** (minimum) alakul ki. A lehűlő levegő összehúzódik, lesüllyed, és **nagyobb légnyomást** (maximum) hoz létre. A két terület közötti nyomáskülönbség hozza létre a **szelet**: a levegő a magas nyomású helyről az alacsony felé áramlik. A nyomáskülönbség nagyságát az izobárok sűrűsége mutatja: sűrű izobárok, erős szél.',
        },
        {
          kind: 'text',
          text: 'Ha a Föld nem forogna, a szél pontosan merőlegesen fújna az izobárokra. A forgás miatti **eltérítő erő** (Coriolis-erő) az északi féltekén jobbra, a déli féltekén balra téríti a mozgó levegőt, és az Egyenlítőn nulla. Ezért az északi féltekén a magas nyomású területtől a levegő jobbra kitérve, óramutató járásával megegyezően fúj ki; az alacsony nyomású terület felé óramutatóval ellentétesen áramlik be.',
        },
        { kind: 'heading', text: 'Az általános légkörzés' },
        {
          kind: 'text',
          text: 'Az Egyenlítő körül a nagy felmelegedés miatt a levegő felemelkedik. Ezt a sávot, ahol a legmagasabb az évi középhőmérséklet, **hőmérsékleti (termikus) egyenlítőnek** nevezzük; a Nap látszólagos járásával ez a sáv évszakosan eltolódik (az átlaga kicsit az északi féltekén van). A felemelkedett levegő a magasban a pólusok felé áramlik, kb. 30° körül lesüllyed (szubtrópusi nagynyomású öv, itt vannak a sivatagok). Innen a felszínen egy része az Egyenlítő felé fúj (**passzátszelek**), másik része a mérsékelt övbe (**nyugatias szelek**). A sarkokon a hideg, nehéz levegő lesüllyed, és a **sarki szelek** áramlanak az alacsonyabb szélességek felé.',
        },
        {
          kind: 'compare',
          title: 'Az állandó szelek',
          columns: ['Északi félteke', 'Déli félteke'],
          rows: [
            {
              label: 'Passzát (szubtrópusi maximumtól az egyenlítői minimum felé)',
              cells: ['északkeleti szél', 'délkeleti szél'],
            },
            {
              label: 'Nyugatias szelek (szubtrópusi maximumtól a mérsékelt övi minimum felé)',
              cells: ['délnyugati szél', 'északnyugati szél'],
            },
            {
              label: 'Sarki szelek (sarki maximumtól a mérsékelt övi minimum felé)',
              cells: ['északkeleti szél', 'délkeleti szél'],
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Rajzolj egyszerű rajzot: oszlopokban 0°, 30°, 60°, 90°; alattuk a nyomási öv (minimum, maximum, minimum, maximum), közte nyilakkal a szelek. A szelek irányát a Coriolis-erő szabja meg (északon jobbra tér ki).',
        },
        { kind: 'heading', text: 'A monszun' },
        {
          kind: 'text',
          text: 'A **monszun** az a szélrendszer, amelynek iránya fél évente az ellenkezőjére változik, mert a szárazföld és a tenger nyáron és télen eltérően melegszik fel. **Forró övezeti (indiai) monszun**: nyáron az erősen felmelegedő szárazföld felett alacsony nyomás van, ezért a szél az óceán felől (délnyugatról) fúj, rengeteg nedvességet hoz, és bőséges nyári csapadékot ad. Télen a szárazföld lehűl, a szél a szárazföld felől (északkeletről) fúj, száraz, csapadékmentes évszak következik. Az emberek életére nagy hatása van: a mezőgazdaság (rizs) a nyári esők időzítésétől függ, az elmaradó vagy kései monszun aszályt, a túl erős árvizet okoz. **Mérsékelt övi (kelet-ázsiai) monszun**: a nyári szél délkeleti (tenger felől), a téli északnyugati (szárazföld felől), Kínában és Japánban nyáron esős, télen szárazabb, hűvösebb az idő.',
        },
        { kind: 'heading', text: 'Mérsékelt övezeti ciklon és anticiklon' },
        {
          kind: 'compare',
          title: 'Ciklon és anticiklon',
          columns: ['Ciklon', 'Anticiklon'],
          rows: [
            {
              label: 'Légnyomás',
              cells: ['alacsony (minimum), középpontjában a legkisebb', 'magas (maximum)'],
            },
            {
              label: 'Légmozgás',
              cells: ['feláramlás, a szél a középpont felé fúj', 'leáramlás, a szél kifelé fúj'],
            },
            {
              label: 'Szél forgása (északi félteke)',
              cells: ['óramutatóval ellentétes', 'óramutatóval megegyező'],
            },
            {
              label: 'Időjárás',
              cells: [
                'felhős, csapadékos, szeles; frontokkal',
                'derült, száraz; nyáron meleg, télen hideg, ősszel-télen köd',
              ],
            },
            {
              label: 'Kialakulás fő térsége',
              cells: [
                'a mérsékelt övben, az Atlanti-óceán északi része (az izlandi minimum)',
                'a szubtrópusi nagynyomású övben (Azori-maximum), a kontinensek belsejében télen',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Hideg- és melegfront' },
        {
          kind: 'text',
          text: 'A **front** két különböző tulajdonságú (hőmérsékletű) légtömeg határa. A mérsékelt övben a ciklonhoz hideg- és melegfront tartozik.',
        },
        {
          kind: 'compare',
          title: 'A két front összehasonlítása',
          columns: ['Hidegfront', 'Melegfront'],
          rows: [
            {
              label: 'Kialakulás',
              cells: [
                'a hideg levegő a nehezebb, a meleg levegő alá nyomul, és felemeli azt',
                'a meleg levegő a hideg levegőre lassan felsiklik',
              ],
            },
            {
              label: 'Sebesség, lejtés',
              cells: ['gyors, meredek frontfelület', 'lassabb, enyhe lejtésű frontfelület'],
            },
            {
              label: 'Felhők, csapadék',
              cells: [
                'gomolyfelhők, zivatarfelhők; záporok, zivatarok, jégeső, szél',
                'rétegfelhők; hosszan tartó, csendes eső',
              ],
            },
            {
              label: 'Hőmérséklet, légnyomás',
              cells: ['a front után lehűlés, nyomásemelkedés', 'a front után felmelegedés'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Okklúziós front**: a gyorsabb hidegfront utoléri a melegfrontot, és a meleg levegőt a felszínről teljesen felemeli; a ciklon ilyenkor idősebb, fokozatosan megszűnik.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Függőleges légmozgások és a szelek**: a felszíni minimum fölött a magasban a levegő szétáramlik, a maximum fölött összeáramlik. A felszíni szelek és a magasbeli áramlás zárt cirkulációt alkot (például a passzátok és a magasban az ellenkező irányú áramlás).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Futóáramlás**: a tropopauza közelében (kb. 9–12 km) fújó, keskeny, nagy sebességű, nyugat–keleti irányú légáramlás. Meghatározza a mérsékelt övi ciklonok, frontok pályáját, és a repülők útvonalát, menetidejét is befolyásolja.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Trópusi ciklon** (az Atlanti-óceánon és az Északkelet-Csendes-óceánon hurrikán, a Nyugat-Csendes-óceánon tájfun): a meleg (kb. 26–27 °C fölötti) óceán fölött, az Egyenlítőtől legalább kb. 5° távolságra alakul ki, mert a kialakuláshoz kell az eltérítő erő. Közepén a szem szélcsendes, a szemfal körül a legerősebb a szél; hatása: heves szél, özönvízszerű eső, vihardagály, partok pusztulása. Szárazföld fölé érve gyengül, mert elveszíti a meleg víz energiáját. A **tornádó** keskeny, tölcsér alakú, erős légörvény, amely zivatarfelhőből ereszkedik le; gyakori az Egyesült Államok középső részén.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Helyi szelek',
          columns: ['Kialakulás', 'Jellemző'],
          rows: [
            {
              label: 'Parti szél',
              cells: [
                'a szárazföld és a víz eltérő felmelegedése miatt',
                'nappal a tenger felől a szárazföld felé, éjjel fordítva fúj',
              ],
            },
            {
              label: 'Hegy-völgyi szél',
              cells: [
                'a lejtő és a völgy eltérő felmelegedése',
                'nappal a völgyből a hegy felé, éjjel a hegyről a völgy felé',
              ],
            },
            {
              label: 'Városi szél',
              cells: [
                'a város felmelegedő, felszálló levegője miatt',
                'a környékről a város felé áramló, gyenge szél',
              ],
            },
            {
              label: 'Főn',
              cells: [
                'a hegy szél felőli oldalán a levegő felemelkedik, lehűl, kicsapódik; a hegy túloldalán leszáll, felmelegszik',
                'meleg, száraz lefelé fúvó szél (például az Alpok északi oldalán)',
              ],
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: a főn felmelegedése',
          problem:
            'A szél 500 m magasságban, 15 °C-os levegővel indul egy hegy szél felőli lába felé, és a 2500 m-es gerincig emelkedik. Közben a levegő végig telített, 100 méterenként 0,5 °C-ot hűl. A másik oldalon száraz levegőként 500 m-ig süllyed, 100 méterenként 1 °C-kal melegedve. Mennyi a hőmérséklet a gerincen és a völgyben?',
          solution:
            'Emelkedés: $2500 - 500 = 2000$ m, azaz 20 szakasz. Lehűlés: $20 \\cdot 0{,}5 = 10$ °C, a gerincen $15 - 10 = 5$ °C.\n\nSüllyedés: szintén 2000 m, 20 szakasz, melegedés $20 \\cdot 1 = 20$ °C, a völgyben $5 + 20 = 25$ °C. A levegő tehát 10 °C-kal melegebb, mint a hegy másik oldalán volt, és a csapadékot a hegy előterében leadta, ezért száraz.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Magyarázó ábra a monszunról**: rajzold le két külön ábrán a nyári és a téli helyzetet: a szárazföld fölötti nyomás (nyáron minimum, télen maximum), a tenger fölötti nyomás, a szél nyilai és a csapadék (nyáron a szárazföldön).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Légkörzési ábra kiegészítése: nyomási övek (maximum, minimum), szélnevek, szélirányok.',
            'Időjárási térkép: melyik területen ciklon (L / A), hol van a hidegfront, mi lesz az időjárás.',
            'Összehasonlítás: ciklon és anticiklon, hideg- és melegfront.',
            'Monszun: miért változik az irány, mi a következménye a csapadékra és a mezőgazdaságra.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a szél irányát arról nevezed meg, ahová fúj. A szél mindig attól az iránytól kapja a nevét, ahonnan érkezik (északkeleti passzát = északkeleti irányból fúj). A másik hiba a Coriolis-erő: az északi féltekén jobbra, a délin balra tér el.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz vázlata (hidegfront): 1. a hideg levegő nehezebb; 2. a meleg levegő alá nyomul, azt gyorsan felemeli; 3. a meleg, nedves levegő lehűl, a vízgőz kicsapódik; 4. gomolyfelhő, zivatar, zápor; 5. a front után lehűlés.',
        },
      ],
      topicMatch: ['légkörzés', 'ciklon és anticiklon', 'helyi szelek', 'forgószelek', 'monszun'],
      quiz: [
        {
          question: 'Melyik irányból fúj az északi félteke passzátszele?',
          options: ['délnyugat', 'északnyugat', 'délkelet', 'északkelet'],
          answer: 3,
          explanation:
            'A passzát a szubtrópusi maximumtól az Egyenlítő felé fúj, az északi féltekén az eltérítő erő jobbra téríti, így északkeleti.',
        },
        {
          question: 'Mi jellemző az anticiklonra?',
          options: [
            'feláramlás és csapadékos idő',
            'leáramlás és derült idő',
            'frontok és zivatar',
            'a szél a középpont felé fúj',
          ],
          answer: 1,
          explanation:
            'Az anticiklon magas nyomású, a levegő lesüllyed és közben melegszik, a felhők feloszlanak, ezért derült az idő.',
        },
        {
          question: 'Melyik front hoz hosszan tartó, csendes esőt és rétegfelhőket?',
          options: ['hidegfront', 'melegfront', 'okklúziós front', 'egyik sem'],
          answer: 1,
          explanation:
            'A melegfrontnál a meleg levegő lassan siklik fel a hidegre, ezért rétegfelhők és tartós eső jön létre.',
        },
        {
          question: 'Miért fordul meg a monszun szélirány fél évente?',
          options: [
            'a Föld forgása megváltozik',
            'a szárazföld és a tenger nyáron és télen eltérően melegszik, ezért a nyomásviszonyok megfordulnak',
            'a Hold vonzása változik',
            'a passzátok eltolódnak',
          ],
          answer: 1,
          explanation:
            'Nyáron a szárazföld fölött alacsony nyomás van (a szél a tenger felől fúj), télen magas nyomás (a szél a szárazföld felől).',
        },
        {
          question: 'Mi a főn?',
          emelt: true,
          options: [
            'hideg, nedves tengeri szél',
            'a hegyről lefelé fújó meleg, száraz szél',
            'a trópusi ciklon másik neve',
            'a városi hőszigetet pótló szél',
          ],
          answer: 1,
          explanation:
            'A főn a hegy szél felőli oldalán felemelkedő, ott kicsapódó, majd a túloldalon leszálló és felmelegedő száraz levegő.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Légnyomás', url: wiki('Légnyomás') },
        { label: 'Wikipédia: Általános légkörzés', url: wiki('Általános légkörzés') },
        { label: 'Wikipédia: Monszun', url: wiki('Monszun') },
      ],
    },
    {
      id: 'felho-csapadek-idojaras-eghajlat',
      subject: 'foldrajz',
      unitId: 'levego-vizburok',
      title: 'Felhő- és csapadékképződés, időjárás, éghajlat, légszennyezés',
      level: 'both',
      requirement: {
        kozep:
          'Vízgőztartalom, telítettség, túltelítettség, harmatpont, kicsapódás, kicsapódási mag; a csapadékképződés feltételei és folyamata; hulló és talaj menti csapadékfajták; a csapadék gazdasági jelentősége; időjárási és éghajlati elemek; az időjárás-előrejelzés jelentősége; éghajlati diagramok és tematikus térképek; időjárási veszélyhelyzetek és védekezés; a legnagyobb légszennyező források, az emberi tevékenység hatásai, a társadalmi eredetű éghajlatváltozás okai és következményei',
        emelt:
          'Fő felhőtípusok és időjárási jelenségek; vízgőztartalommal kapcsolatos számítási feladatok; az időjárás-változások biológiai hatásai; az általános légkörzés és a helyi időjárás kapcsolata; érvelés az egyén felelőssége mellett; az összetétel változását bemutató adatsorok értelmezése',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Abszolút vízgőztartalom**: hány gramm vízgőz van 1 m³ levegőben. **Relatív vízgőztartalom (relatív páratartalom)**: ez hány százaléka annak, amennyit a levegő az adott hőmérsékleten maximum felvehet. Melegebb levegő több vízgőzt képes felvenni.',
            '**Harmatpont**: az a hőmérséklet, amelyre lehűlve a levegő telítetté válik. Ha tovább hűl, a vízgőz **kicsapódik**.',
            'Felhő- és csapadékképződés feltételei: a levegő lehűlése a harmatpont alá, vízgőz és **kicsapódási mag** (por, só, korom).',
            '**Hulló** csapadék: eső, zápor, hó, havas eső, ónos eső, jégeső. **Talaj menti** csapadék: harmat, dér, zúzmara. A köd a talaj közelében lévő felhő.',
            '**Időjárás**: a légkör rövid idejű állapota egy helyen. **Éghajlat**: sok éves (általában 30 éves) átlag és szélsőségek.',
            'Fő légszennyezők: energiatermelés, közlekedés, ipar, mezőgazdaság. Következmény: savas csapadék, szmog, ózonritkulás, fokozódó üvegházhatás.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A levegő vízgőztartalma' },
        {
          kind: 'text',
          text: 'A levegőben mindig van vízgőz, amely a vizek, a talaj és a növények párolgásából származik. A **telítettség** azt jelenti, hogy a levegő az adott hőmérsékleten több vízgőzt már nem tud felvenni. Ha a levegő mégis több vízgőzt tartalmazna (például gyors hűlés miatt), **túltelített**, és a felesleg kicsapódik.',
        },
        {
          kind: 'compare',
          title: 'Az 1 m³ levegő által maximum felvehető vízgőz (kerekített értékek)',
          columns: ['Maximális vízgőztartalom', 'Megjegyzés'],
          rows: [
            { label: '0 °C', cells: ['kb. 4,8 g/m³', 'a hideg levegő kevés vízgőzt bír el'] },
            { label: '10 °C', cells: ['kb. 9,4 g/m³', 'kb. a 0 °C-os érték duplája'] },
            {
              label: '20 °C',
              cells: ['kb. 17,3 g/m³', 'a melegebb levegő sokkal több vízgőzt bír el'],
            },
            {
              label: '30 °C',
              cells: ['kb. 30,3 g/m³', 'a vizsgán a feladat megadja a táblázatot'],
            },
          ],
        },
        {
          kind: 'formula',
          tex: 'f = \\frac{a}{m} \\cdot 100\\%',
          caption:
            'Relatív vízgőztartalom: a a tényleges (abszolút), m az adott hőmérsékleten maximális vízgőztartalom (g/m³).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'A 20 °C-os levegő 1 m³-ében 9,4 g vízgőz van. Mekkora a relatív vízgőztartalma? Hány °C a harmatpontja? Hány gramm víz csapódik ki 1 m³ telített, 20 °C-os levegőből, ha 10 °C-ra hűl? (A táblázat adatai szerint.)',
          solution:
            'Relatív vízgőztartalom: $\\frac{9{,}4}{17{,}3} \\cdot 100\\% \\approx 54\\%$.\n\nHarmatpont: az a hőmérséklet, amelynél a maximális vízgőztartalom 9,4 g/m³, vagyis 10 °C.\n\nKicsapódás: a 20 °C-os telített levegőben 17,3 g van, 10 °C-on legfeljebb 9,4 g maradhat: $17{,}3 - 9{,}4 = 7{,}9$ g vízgőz csapódik ki köbméterenként.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Emelt szintű számítási feladat',
          problem:
            'A 30 °C-os levegő relatív vízgőztartalma 50%. Mennyi a tényleges vízgőztartalma? Hány gramm vízgőzt tud még felvenni 1 m³? Hogyan változik a relatív vízgőztartalom, ha 10 °C-ra hűl, és a vízgőz nem csapódik ki?',
          solution:
            'Tényleges vízgőztartalom: $0{,}5 \\cdot 30{,}3 = 15{,}15$ g/m³ (kb. 15,2 g/m³).\n\nMég felvehető: $30{,}3 - 15{,}15 = 15{,}15$ g.\n\nA harmatpont 10 és 20 °C között van, mert a 15,15 g/m³ a 10 °C-os maximum (9,4) fölött, a 20 °C-os maximum (17,3) alatt van. 10 °C-on a levegő legfeljebb 9,4 g-ot bír el, ezért a feleslegből $15{,}15 - 9{,}4 = 5{,}75$ g/m³ csapódik ki, és a levegő telített (100%) lesz.',
        },
        { kind: 'heading', text: 'Felhő- és csapadékképződés' },
        {
          kind: 'text',
          text: 'A csapadékképződés lépései: 1. a nedves levegő **felemelkedik** (a felmelegedés, a front, a hegység miatt); 2. felfelé tágul és lehűl; 3. eléri a **harmatpontot**, telítetté válik; 4. a vízgőz a **kicsapódási magokon** apró vízcseppekké vagy jégkristályokká csapódik ki: **felhő** keletkezik; 5. a cseppek összeolvadnak, megnőnek, és a felhőből **lehullanak**.',
        },
        {
          kind: 'compare',
          title: 'Csapadékfajták',
          columns: ['Fajta', 'Hogyan keletkezik'],
          rows: [
            {
              label: 'Eső, zápor',
              cells: [
                'vízcseppek',
                'a zápor rövid ideig tart, erős, gomolyfelhőből (hidegfront, nyári zivatar)',
              ],
            },
            {
              label: 'Hó, havas eső',
              cells: ['jégkristályok', 'fagypont körüli vagy alatti hőmérsékleten'],
            },
            {
              label: 'Jégeső',
              cells: [
                'jégszemek',
                'zivatarfelhőben a feláramlás többször felviszi, rétegesen nő a jégdarab',
              ],
            },
            {
              label: 'Ónos eső',
              cells: [
                'túlhűlt esőcseppek',
                'a fagypont alatti felszínre hulló cseppek azonnal ráfagynak, jégbevonatot képeznek',
              ],
            },
            {
              label: 'Harmat, dér, zúzmara (talaj menti)',
              cells: [
                'a felszínen, tárgyakon csapódik ki',
                'harmat: 0 °C fölött; dér: fagypont alatt jégkristályok; zúzmara: ködből kiváló jégkristályok a tárgyakon',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Köd akkor keletkezik, ha a talaj közelében lehűlő levegő eléri a harmatpontot; a felhő ugyanez nagyobb magasságban. **Aszály**: hosszabb időszak jelentős csapadékhiánnyal, ami a mezőgazdaságra, a vízellátásra és a folyók vízjárására is hat. A csapadék gazdasági jelentősége: a mezőgazdaság, a vízellátás és a vízerőművek alapja; a túl sok vagy kevés viszont károkat okoz (árvíz, aszály).',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Fő felhőtípusok',
          columns: ['Megjelenés, magasság', 'Időjárási jelenség'],
          rows: [
            {
              label: 'Pehelyfelhő (cirrus)',
              cells: ['magas, vékony, szálas jégkristály-felhő', 'a front közeledtét jelezheti'],
            },
            {
              label: 'Fátyolfelhő (cirrostratus)',
              cells: ['magas, vékony, az eget fátyolként borítja', 'melegfront közeledtekor'],
            },
            {
              label: 'Rétegfelhő (stratus, nimbostratus)',
              cells: [
                'egyenletes, szürke, alacsony felhőréteg',
                'tartós, csendes eső (melegfront) vagy szitálás',
              ],
            },
            {
              label: 'Gomolyfelhő (cumulus)',
              cells: ['kupolás, „vattapamacs” felhő', 'derült időben csapadék nélkül'],
            },
            {
              label: 'Zivatarfelhő (cumulonimbus)',
              cells: [
                'magasra tornyosuló, üllő alakú felhő',
                'zápor, zivatar, villámlás, jégeső (hidegfront)',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Időjárás és éghajlat' },
        {
          kind: 'compare',
          title: 'Idő, időjárás, éghajlat',
          columns: ['Időjárás', 'Éghajlat'],
          rows: [
            {
              label: 'Időtartam',
              cells: [
                'a légkör pillanatnyi vagy rövid idejű állapota',
                'sokéves (általában 30 év) jellemző állapot',
              ],
            },
            {
              label: 'Mire jó?',
              cells: [
                'előrejelzésre, mindennapi döntésekre',
                'gazdálkodásra, településtervezésre, ökológiai övezetességre',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Időjárási és éghajlati elemek**: a hőmérséklet, a légnyomás, a szél (irány és sebesség), a vízgőztartalom, a felhőzet, a csapadék és a napsütés. Az **éghajlati diagramon** a hőmérsékletet vonal (hónapok szerint), a csapadékot oszlopok mutatják: ebből leolvasható az évi középhőmérséklet, az évi hőingás, az évi csapadékösszeg és a csapadékos és száraz évszak.',
        },
        {
          kind: 'text',
          text: 'Az **időjárás-előrejelzés** (időjárási térképek, műholdfelvételek, radar alapján) segíti a mezőgazdaságot, a közlekedést, az építőipart, az energiatermelést és a veszélyhelyzetekre való felkészülést. Az **időjárási veszélyhelyzetek**: hőhullám, aszály, viharos szél, jégeső, villámlás, heves esőzés és árvíz, ónos eső, tartós hideg. Védekezés: figyelmeztetések követése, tűzgyújtási tilalom, fedett hely keresése, vízfogyasztás és védekezés hőhullámban, vigyázat a gyengébbekre (idősekre, gyerekekre).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Biológiai hatások**: a légnyomás-, hőmérséklet- és frontváltozások fejfájást, keringési panaszokat, allergiás tünetek erősödését okozhatják érzékeny embereknél; a hőhullám a szív- és érrendszeri betegeket veszélyezteti. A **mikroklíma** a kis területre (például egy lejtőre, erdőbe, városi parkra, völgyre) jellemző éghajlat, amely eltér a tágabb környezetétől.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Az általános légkörzés és a magyarországi időjárás',
          columns: ['Hatás', 'Időjárás Magyarországon'],
          rows: [
            {
              label: 'Izlandi minimum',
              cells: ['óceáni ciklonok', 'enyhe, csapadékos időjárás, főleg ősszel, télen'],
            },
            {
              label: 'Azori-maximum',
              cells: ['szubtrópusi anticiklon', 'nyáron derült, meleg idő'],
            },
            {
              label: 'Szibériai-maximum',
              cells: ['téli kontinentális anticiklon', 'erős hideg, száraz idő'],
            },
            {
              label: 'Elő-ázsiai (iráni) minimum',
              cells: ['nyári termikus minimum', 'forró, száraz idő'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az év bizonyos időszakaiban gyakran visszatérő időjárási szabálytalanságok: „**fagyosszentek**” (május 12–14., Pongrác, Szervác, Bonifác: késő tavaszi lehűlés, fagy veszélye a gyümölcsösökben), „**Medárd-nap**” (június 8., a néphit szerint az ilyenkor kezdődő esős idő hosszan elhúzódik), „**vénasszonyok nyara**” (ősz elején visszatérő, napsütéses, meleg időszak).',
        },
        { kind: 'heading', text: 'A légszennyezés következményei' },
        {
          kind: 'keypoints',
          items: [
            '**Források**: fosszilis energiahordozók égetése (erőművek, fűtés), közlekedés, ipar, mezőgazdaság (metán, ammónia), hulladékégetés.',
            '**Savas csapadék**: a kén-dioxid és a nitrogén-oxidok vízzel savakat alkotnak; savas ülepedés, **elsavanyodás** (tavak, talaj, erdők pusztulása, épületek korróziója).',
            '**Szmog (füstköd)**: a ködben összegyűlő szennyező anyagok, légzőszervi megbetegedéseket okoz; az inverzió kedvez neki.',
            '**Ózonritkulás**: a freonok (CFC-k) bontják a sztratoszférikus ózont, több UV-sugárzás jut a felszínre. A freonok kibocsátását a Montreali Jegyzőkönyv (1987) korlátozta.',
            '**Az üvegházhatás fokozódása, globális felmelegedés, éghajlatváltozás**: az üvegházgázok (főleg a szén-dioxid és a metán) kibocsátása miatt a Föld átlaghőmérséklete emelkedik. Következmények: olvadó jégtakarók, tengerszint-emelkedés, szélsőségesebb időjárás, élőhelyek változása.',
            '**Radioaktív szennyeződés**: nukleáris balesetekből vagy kísérletekből származik, nagy távolságra eljut.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **emisszió** a szennyező anyag kibocsátása a forrásból, a **transzmisszió** a légkörben történő terjedése, szállítása és átalakulása, az **immisszió** pedig a szennyezőanyag-koncentráció a levegőben, ahol az embert vagy a környezetet éri. A csökkentés lehetőségei: szűrők, megújuló energia, tömegközlekedés, energiatakarékosság. Az egyén felelőssége: közlekedési, fogyasztási és fűtési szokások.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábra: a felhő- és csapadékképződés lépéseinek sorrendje, hiányzó elemek beírása.',
            'Éghajlati diagram: évi középhőmérséklet, évi hőingás, csapadékösszeg, a csapadékos évszak megállapítása; két város összehasonlítása.',
            'Számítás (emelt): relatív vízgőztartalom, harmatpont, kicsapódó víz mennyisége a megadott táblázat szerint.',
            'Párosítás: a csapadékfajták, felhőtípusok, légszennyezési jelenségek.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekevered az időjárást és az éghajlatot (egy rendkívüli hideg nap nem éghajlati jellemző). A másik: a relatív páratartalmat úgy értelmezed, mintha a levegő vízgőztartalma nőne, pedig lehűléskor a tényleges tartalom változatlan, a relatív érték nő.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz vázlata (felhőképződés): 1. felemelkedés; 2. tágulás és lehűlés; 3. harmatpont elérése; 4. kicsapódás a kicsapódási magokon; 5. felhő, majd csepp-összeolvadás és csapadék. Mindig írd le a három feltételt: lehűlés, vízgőz, kicsapódási mag.',
        },
      ],
      topicMatch: [
        '=csapadék',
        'csapadékképződés',
        'felhőképződés',
        'felhőtípusok',
        'felhőzet',
        'légköri vízgőz',
        '=időjárás',
        '=éghajlat',
        '=éghajlati adatok',
        '=éghajlati diagram',
        '=éghajlati diagramok',
        '=éghajlati elemek',
        '=éghajlatváltozás',
        'légszennyezés',
      ],
      quiz: [
        {
          question: 'Mi a harmatpont?',
          options: [
            'a legmagasabb nappali hőmérséklet',
            'a hőmérséklet, amelyre lehűlve a levegő telítetté válik',
            'a fagypont másik neve',
            'a felhők alsó határának magassága méterben',
          ],
          answer: 1,
          explanation:
            'A harmatpont az a hőmérséklet, amelynél a levegő adott vízgőztartalma éppen a telítettséget jelenti; további hűlésnél kicsapódás indul.',
        },
        {
          question:
            'A 10 °C-os levegő 1 m³-ében 4,7 g vízgőz van. Mekkora a relatív vízgőztartalma, ha 10 °C-on legfeljebb 9,4 g/m³ vízgőz fér el?',
          options: ['25%', '100%', '4,7%', '50%'],
          answer: 3,
          explanation: 'Relatív vízgőztartalom: $\\frac{4{,}7}{9{,}4} \\cdot 100\\% = 50\\%$.',
        },
        {
          question: 'Melyik NEM feltétele a csapadékképződésnek?',
          options: [
            'a levegő lehűlése a harmatpont alá',
            'vízgőz a levegőben',
            'kicsapódási mag',
            'a felszín fagypont alatti hőmérséklete',
          ],
          answer: 3,
          explanation:
            'A felhő- és csapadékképződéshez lehűlés, vízgőz és kicsapódási mag kell; a felszín hőmérséklete nem feltétel.',
        },
        {
          question: 'Mi a savas csapadék fő kiváltó anyaga?',
          options: [
            'a nitrogén és az oxigén',
            'a kén-dioxid és a nitrogén-oxidok',
            'a nemesgázok',
            'a vízgőz',
          ],
          answer: 1,
          explanation:
            'A fosszilis tüzelőanyagok égéséből származó kén-dioxid és nitrogén-oxidok a vízzel savakat képeznek, és savas csapadékként hullanak le.',
        },
        {
          question: 'Melyik felhőtípus kapcsolódik jégesőhöz, zivatarhoz?',
          emelt: true,
          options: ['pehelyfelhő', 'fátyolfelhő', 'zivatarfelhő', 'rétegfelhő'],
          answer: 2,
          explanation:
            'A magasra tornyosuló zivatarfelhőben erős feláramlás van, ez okoz zivatart, villámlást és jégesőt.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Csapadék', url: wiki('Csapadék (meteorológia)') },
        { label: 'Wikipédia: Éghajlat', url: wiki('Éghajlat') },
        { label: 'Wikipédia: Légszennyezés', url: wiki('Légszennyezés') },
      ],
    },
    {
      id: 'vizburok-tengerek-oceanok',
      subject: 'foldrajz',
      unitId: 'levego-vizburok',
      title: 'A vízburok: körforgás, tengerek, áramlások, árapály',
      level: 'both',
      requirement: {
        kozep:
          'A vízburok tagolódása, a víz körforgása; az óceánok és a tengerek különbségei; a tengervíz felmelegedésének, lehűlésének és fagyáspontjának sajátosságai, a fajhő és a hőtároló képesség; a hullámzás; a tengeráramlások kialakulása és kapcsolata az általános légkörzéssel; hideg és meleg áramlások a térképen, éghajlatmódosító hatásuk; a tengerjárás',
        emelt:
          'A sós víz és az édesvíz eltérő tulajdonságaiból adódó következmények; a sótartalom változása a párolgással, a csapadékkal, a hozzáfolyással; az áramlások éghajlatmódosító hatása térképek és éghajlati diagramok alapján; az általános légkörzés és az óceáni vízkörzés hasonlóságai',
      },
      minutes: 16,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Föld felszínének kb. 71%-át víz borítja. A víz kb. 97%-a sós (óceán, tenger), az édesvíz nagy része jég formájában van.',
            '**A víz körforgása**: párolgás, vízgőz szállítása, kicsapódás, csapadék, lefolyás (folyók) és beszivárgás.',
            '**Vízháztartás**: az óceánok fölött a párolgás nagyobb, mint a csapadék, a szárazföldeken a csapadék nagyobb a párolgásnál; a különbséget a lefolyás pótolja.',
            'A tengervíz **sótartalma** átlagosan kb. 35 ‰. A víz **fajhője** nagy, ezért lassan melegszik és lassan hűl: **hűtő-fűtő hatás**.',
            '**Tengeráramlások**: az állandó szelek hozzák létre, és a kontinensek térítik el. Lehetnek **meleg** (melegítik a partot) és **hideg** (hűtik, szárazzá teszik).',
            '**Árapály (tengerjárás)**: a Hold (és a Nap) vonzása miatt a tengerszint naponta kétszer emelkedik (dagály) és süllyed (apály).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A vízburok és a víz körforgása' },
        {
          kind: 'text',
          text: 'A **vízburok** (hidroszféra) a Föld összes vizét magában foglalja: a világtengert, a folyókat, a tavakat, a felszín alatti vizeket, a jégtakarókat, a vízgőzt a levegőben és az élőlényekben lévő vizet. A **világtenger** a Föld összefüggő, sós vízburka (óceánok és tengerek). Az édesvíz kisebb része a folyókban és tavakban van, nagyobb része jég (a szárazföldi jégtakarók) és felszín alatti víz.',
        },
        {
          kind: 'text',
          text: '**A víz körforgása**: a Nap melege hatására a víz **elpárolog** a tengerekből, vizekből (a növények által elpárologtatott víz a párologtatás). A vízgőz a légkörben **szállítódik**, lehűlve **kicsapódik**, és **csapadék** formájában lehull. A csapadék egy része a felszínen **lefolyik** (patakok, folyók), másik része **beszivárog** a talajba, felszín alatti vízzé válik. Végül a víz visszajut a tengerbe. A körforgás a **vízháztartás** része: a bevétel a csapadék, a kiadás a párolgás és a lefolyás.',
        },
        {
          kind: 'compare',
          title: 'Vízháztartás',
          columns: ['Világtenger', 'Szárazföld'],
          rows: [
            {
              label: 'Párolgás és csapadék',
              cells: ['a párolgás nagyobb a csapadéknál', 'a csapadék nagyobb a párolgásnál'],
            },
            {
              label: 'Mi pótolja a különbséget?',
              cells: [
                'a folyók és a felszín alatti vizek hozzáfolyása',
                'a lefolyás elviszi a többletet a tengerbe',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Óceánok és tengerek' },
        {
          kind: 'text',
          text: 'Az **óceánok** (Csendes-, Atlanti-, Indiai-, Jeges-tenger néven is ismert Északi-sarki-óceán) nagy kiterjedésű, mély vizek, önálló vízkörzéssel. A **tengerek** kisebbek, sekélyebbek, a szárazföldekhez kapcsolódnak, saját áramlási rendszerük gyenge. Az óceánokhoz és a szárazföldhöz való viszony szerint: **peremtenger** (a szárazföld peremén, a szigetek, félszigetek választják el az óceántól; például az Északi-tenger), **beltenger** (a szárazföld belsejébe nyúlik, keskeny szoroson át kapcsolódik az óceánhoz; például a Fekete-tenger), az **öböl** és a **tengerszoros** pedig a tenger beszűkülő részei, illetve összekötő szűkületei. A világtenger fenekén a **szárazföldi talapzat (self)** a part menti sekély (kb. 200 m-ig), halban és nyersanyagban gazdag rész; ezt a **kontinentális lejtő** követi, majd a mély medence.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **földközi tenger** a kontinensek között elhelyezkedő tenger (például a Földközi-tenger, a Karib-tenger). A **sós víz és az édesvíz** eltérő tulajdonságai: a sós víz sűrűbb, fagyáspontja alacsonyabb, ezért a folyótorkolatokban a könnyebb édesvíz a sós víz fölött terjed, és a sós víz később fagy be.',
        },
        { kind: 'heading', text: 'A tengervíz tulajdonságai' },
        {
          kind: 'compare',
          title: 'A víz hőtani sajátosságai',
          columns: ['Tulajdonság', 'Következmény'],
          rows: [
            {
              label: 'Nagy fajhő (fajlagos hőkapacitás)',
              cells: [
                'sok hőt tárol, lassan melegszik, lassan hűl',
                'a tenger közelében kisebb a napi és az évi hőingás (tengeri éghajlat); a part meleg vagy hideg áramlása az éghajlatot módosítja',
              ],
            },
            {
              label: 'Fagyáspont',
              cells: [
                'a tengervíz kb. –1,9 °C-on fagy (35 ‰ sótartalomnál)',
                'a sós víz alacsonyabb hőmérsékleten fagy, mint az édesvíz (0 °C)',
              ],
            },
            {
              label: 'Sótartalom',
              cells: [
                'átlagosan kb. 35 ‰ (kb. 35 g só 1 kg tengervízben)',
                'a hőmérséklet és a sűrűség is függ tőle',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **sótartalom változását** a párolgás (növeli), a csapadék, a folyók hozzáfolyása és a jég olvadása (csökkenti) szabja meg. A szubtrópusi, száraz, nagy párolgású tengerekben nagy a sótartalom (a Vörös-tenger kb. 40 ‰), míg ott, ahol sok csapadék, folyóvíz, olvadóvíz érkezik és kicsi a párolgás, kicsi (a Balti-tenger néhány ‰, északon még kevesebb).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **hőmérsékleti anomália** a megfelelő szélességi kör átlagától való eltérés: **pozitív**, ha melegebb (meleg áramlás mentén, például Nyugat-Európa partjainál), **negatív**, ha hidegebb (hideg áramlás mentén, például Dél-Amerika nyugati partjainál).',
        },
        { kind: 'heading', text: 'Hullámzás' },
        {
          kind: 'text',
          text: 'A **hullámzást** főleg a szél kelti. A vízrészecskék körpályán mozognak, a víz maga nem halad tovább, csak a hullámforma. A hullám magassága a szél sebességétől, tartósságától és a nyílt vízfelület nagyságától függ. A partra érve a hullám alja a mederhez ér, lelassul, megtörik: ez a **szörf**, amely a partot **pusztítja** (abráziót végez), a hordalékot pedig lerakja. A földrengés vagy vulkánkitörés okozta hullám a cunami, amely a nyílt tengeren alacsony, a partnál hatalmasra nő.',
        },
        { kind: 'heading', text: 'Tengeráramlások' },
        {
          kind: 'text',
          text: 'A tengeráramlások a tengervíz nagy, rendszeres, sodrásszerű mozgásai. Kialakulásuk fő tényezői: az **állandó szelek** (passzát, nyugatias szél), az **eltérítő erő** (az északi féltekén jobbra, a délin balra) és a **kontinensek**, amelyek a víz útját elterelik. Az eredmény: a nagy óceánokban a szubtrópusi övben az északi féltekén az óramutató járásával megegyező, a délin ellentétes irányú nagy körforgások. A fő áramlások és az általános légkörzés kapcsolata tehát szoros.',
        },
        {
          kind: 'compare',
          title: 'Fontos tengeráramlások',
          columns: ['Meleg áramlások', 'Hideg áramlások'],
          rows: [
            {
              label: 'Atlanti-óceán',
              cells: [
                'Golf-áramlás, Észak-atlanti-áramlás, Brazil-áramlás',
                'Labrador-, Kanári-, Benguela-áramlás',
              ],
            },
            {
              label: 'Csendes-óceán',
              cells: ['Kuroshio (Japán-áramlás)', 'Kaliforniai-, Perui-áramlás'],
            },
            {
              label: 'Indiai-óceán',
              cells: ['Agulhas-áramlás', '(Nyugat-ausztráliai-áramlás)'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **éghajlatmódosító hatás**: a meleg áramlások melegítik és nedvesebbé teszik a part menti éghajlatot (a Golf-áramlás és az Észak-atlanti-áramlás miatt Nyugat- és Észak-Európa sokkal enyhébb, mint ugyanazon szélességen Kanada keleti partja). A hideg áramlások lehűtik és szárazzá teszik a partvidéket: ezek mellett alakultak ki a part menti sivatagok (Atacama, Namib), mert a hideg víz fölött a levegő nem képes csapadékot adni, gyakori viszont a köd.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **óceáni vízkörzés** és az általános légkörzés hasonlósága: mindkettőt a Föld forgása és a hőmérsékleti különbség hozza létre, mindkettő a hőt az alacsonyabb szélességekről a magasabbak felé szállítja, a szélrendszer pedig kiváltja az áramlásokat. Az **El Niño** a Csendes-óceán keleti részén, rendszertelenül, néhány évente jelentkező rendellenes felmelegedés, amikor a hideg perui áramlás gyengül; következménye lehet árvíz Dél-Amerika nyugati partján és aszály Ausztráliában, Indonéziában.',
        },
        { kind: 'heading', text: 'Tengerjárás (árapály)' },
        {
          kind: 'text',
          text: 'A **tengerjárás** a tengerszint rendszeres, napi ingadozása. A fő oka a **Hold vonzása** (kisebb mértékben a Napé): a Holddal szemközti oldalon és az átellenes oldalon is megemelkedik a vízfelszín. A Föld forgása miatt egy adott parton naponta kétszer van **dagály** (vízállás magas) és kétszer **apály** (alacsony); két dagály között kb. 12 óra 25 perc telik el. A tengerjárás következményei: a dagály a folyótorkolatokba is behatol, a part menti sávban (a dagálytér) az élővilág alkalmazkodik, a hajózás az apály-dagály idejéhez igazodik, és energiát is nyerhetünk belőle (dagályerőmű). Különösen nagy a szintkülönbség a keskeny, tölcsér alakú öblökben (például a Fundy-öbölben több mint 15 m).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Szökőár** (ebben a témában a különösen magas dagály, nem a cunami): újholdkor és teliholdkor, amikor a Nap és a Hold vonzása egy irányba esik, a dagály a legmagasabb. **Vakár**: az első és az utolsó negyedkor, amikor a két vonzás merőleges, a szintkülönbség kicsi. A **vihardagály** akkor keletkezik, amikor a tengeri vihar a vizet a partra nyomja, és az a dagályhoz adódik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Vakon térképen: tengeráramlások megnevezése, hideg vagy meleg besorolása, éghajlatra gyakorolt hatása.',
            'Ábra: a víz körforgásának elemei (párolgás, kicsapódás, lefolyás, beszivárgás).',
            'Magyarázat: miért enyhébb Nyugat-Európa éghajlata, miért sivatagos a chilei és a namíbiai part.',
            'Éghajlati diagramok összehasonlítása tengerparti és szárazföld belsejében fekvő városok között (hőingás).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a tengerjárást a szél hatásával vagy a hullámzással keveríted. A hullámzást a szél kelti, az árapályt a Hold vonzása. Másik hiba: a hideg áramlás mellett nem „sok” hanem „kevés” a csapadék.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz vázlata (a Golf-áramlás hatása): 1. a passzát a meleg vizet a Karib-térségből a Mexikói-öbölbe hajtja; 2. az eltérítő erő és a kontinens miatt északkelet felé fordul; 3. az Észak-atlanti-áramlásként meleg vizet visz Európa partjaihoz; 4. a nyugatias szelek ezt a meleget a szárazföldre szállítják; 5. enyhe, csapadékos telek, jégmentes norvég kikötők.',
        },
      ],
      topicMatch: [
        'világtenger',
        'tengerjárás',
        'tengervíz mozgásai',
        'tengeráramlások',
        '=vízburok',
        '=el niño',
      ],
      quiz: [
        {
          question: 'Melyik hideg tengeráramlás kapcsolódik a Namib-sivatag kialakulásához?',
          options: ['Golf-áramlás', 'Kuroshio', 'Benguela-áramlás', 'Brazil-áramlás'],
          answer: 2,
          explanation:
            'Afrika délnyugati partján a hideg Benguela-áramlás lehűti a levegőt, csapadék alig keletkezik, ezért part menti sivatag alakult ki.',
        },
        {
          question: 'Miért kisebb a tenger közelében a napi és az évi hőingás?',
          options: [
            'mert a víz fajhője kicsi',
            'mert a víz fajhője nagy, lassan melegszik és lassan hűl',
            'mert a tengeren nincs szél',
            'mert a tenger sós',
          ],
          answer: 1,
          explanation:
            'A víz nagy hőkapacitása miatt nyáron tárolja a meleget, télen lassan adja le: hűtő-fűtő hatás.',
        },
        {
          question: 'Mi okozza a tengerjárást (árapályt)?',
          options: [
            'a szél',
            'a földrengések',
            'a Hold (és a Nap) vonzása',
            'a folyók hozzáfolyása',
          ],
          answer: 2,
          explanation:
            'A Hold vonzása a Föld tengervizét a Holddal szemközti és az átellenes oldalon megemeli, a Föld forgása miatt naponta kétszer dagály van.',
        },
        {
          question: 'Mit jelent a vízháztartás az óceánok fölött?',
          options: [
            'a csapadék nagyobb a párolgásnál',
            'a párolgás nagyobb a csapadéknál',
            'nincs lefolyás',
            'a párolgás és a csapadék pontosan egyenlő',
          ],
          answer: 1,
          explanation:
            'Az óceánok fölött több víz párolog el, mint amennyi csapadékként visszahull; a különbséget a szárazföldi lefolyás pótolja.',
        },
        {
          question: 'Miért magas a Vörös-tenger sótartalma?',
          emelt: true,
          options: [
            'sok folyó torkollik bele',
            'nagy a párolgás, kevés a csapadék és a hozzáfolyás',
            'hideg áramlás hűti',
            'a jég olvadása sót visz bele',
          ],
          answer: 1,
          explanation:
            'A száraz, forró éghajlaton nagy a párolgás, a sót nem viszi el a víz, és kevés az édesvizes hozzáfolyás és csapadék, így a sótartalom nő.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Hidroszféra', url: wiki('Hidroszféra') },
        { label: 'Wikipédia: Tengeráramlás', url: wiki('Tengeráramlás') },
        { label: 'Wikipédia: Árapály', url: wiki('Árapály') },
      ],
    },
    {
      id: 'felszini-es-felszin-alatti-vizek',
      subject: 'foldrajz',
      unitId: 'levego-vizburok',
      title: 'Folyók, tavak, felszín alatti vizek és a víz mint erőforrás',
      level: 'both',
      requirement: {
        kozep:
          'A tómedencék keletkezési típusai, a tavak pusztulása, hasznosítása, az emberi tevékenység szerepe; vízgyűjtő terület, vízválasztó, fő- és mellékfolyó, lefolyásos és belső lefolyású terület, vízállás, vízhozam, vízjárás; a folyók vízjárása és az éghajlat; a folyó vízhozamának kiszámítása; a felszíni és a felszín alatti vizek kapcsolata; a felszín alatti vizek kialakulása, mozgása; vízgazdálkodás, ár- és belvízvédelem, vízellátás, öntözés, vízenergia, mesterséges tavak, vízi közlekedés, idegenforgalom, a világtenger gazdasági jelentősége',
        emelt:
          'A tavak keletkezése térképek és műholdfelvételek alapján; geotermikus gradiens és a felszín alatti vizek hőmérséklete; folyószabályozás; ivóvíz és ipari víz kinyerésének lehetőségei; vízgazdálkodás és fenntarthatóság; nemzetközi összefogás a vizek védelmében',
      },
      minutes: 18,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Vízgyűjtő terület**: ahonnan egy folyó vizet kap. **Vízválasztó**: két vízgyűjtőt elválasztó vonal (általában gerinc).',
            '**Vízhozam**: az a vízmennyiség, amely egy időegység alatt a meder keresztmetszetén átfolyik (m³/s). **Vízállás**: a vízszint magassága egy mérőponton. **Vízjárás**: a vízhozam és a vízállás évi ingadozása.',
            'A vízhozam számítása: $Q = A \\cdot v$ (keresztmetszet szorozva az átlagos sebességgel).',
            '**Tómedence-típusok**: kimélyített (jég, szél, folyó) és elgátolt (moréna, lávafolyás, lejtőmozgás); tektonikus, kráter, maradvány- és mesterséges tó.',
            '**Felszín alatti víz**: talajvíz, rétegvíz (artézi), karsztvíz, forrás, hévíz. A csapadék beszivárgásából keletkezik.',
            'A vízgazdálkodás feladata: a vízkészlet hasznosítása és a vízkárok (árvíz, belvíz, aszály) elleni védekezés.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Folyók: alapfogalmak' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Vízgyűjtő terület',
              text: 'az a terület, amelynek vize egy folyóba (vagy tóba) jut; a mellékfolyók vízgyűjtői együtt adják a főfolyóét.',
            },
            {
              term: 'Vízválasztó',
              text: 'a szomszédos vízgyűjtőket elválasztó, általában hegygerinc vonal.',
            },
            {
              term: 'Fő- és mellékfolyó',
              text: 'a főfolyó a vízrendszer legnagyobb vízhozamú, leghosszabb tagja, a mellékfolyók ebbe torkollnak.',
            },
            {
              term: 'Lefolyásos terület',
              text: 'a folyók vize eljut a világtengerbe (például a Duna a Fekete-tengerbe).',
            },
            {
              term: 'Belső lefolyású terület',
              text: 'a víz nem jut el a világtengerig, hanem tóban elpárolog vagy elszivárog (például a Kaszpi-tenger vízgyűjtője).',
            },
            {
              term: 'Időszakos vízfolyás',
              text: 'csak csapadék idején vagy az olvadáskor vezet vizet (száraz éghajlaton).',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Vízállás, vízhozam, vízjárás',
          columns: ['Mit jelent?', 'Mértékegység, példa'],
          rows: [
            {
              label: 'Vízállás',
              cells: ['a vízszint magassága a mérőléc nullpontjától', 'cm; például 540 cm'],
            },
            {
              label: 'Vízhozam',
              cells: ['a meder keresztmetszetén időegység alatt átfolyó víz térfogata', 'm³/s'],
            },
            {
              label: 'Vízjárás',
              cells: [
                'a vízhozam és a vízállás évi ingadozása, rendszere',
                'tavaszi áradás, nyári kisvíz stb.',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A vízhozam kiszámítása' },
        {
          kind: 'formula',
          tex: 'Q = A \\cdot v = (b \\cdot m) \\cdot v',
          caption:
            'Q: vízhozam (m³/s); A: a meder vízzel kitöltött keresztmetszete (m²); v: a víz átlagos sebessége (m/s); b: a meder szélessége, m: az átlagos mélység (m).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Egy téglalap keresztmetszetű mederben a folyó 40 m széles, átlagos mélysége 2,5 m, a víz átlagos sebessége 1,2 m/s. Mekkora a vízhozam? Hány köbméter víz folyik át naponta?',
          solution:
            'Keresztmetszet: $A = 40 \\cdot 2{,}5 = 100$ m². Vízhozam: $Q = 100 \\cdot 1{,}2 = 120$ m³/s.\n\nNaponta egy nap $24 \\cdot 3600 = 86\\,400$ másodperc, tehát $120 \\cdot 86\\,400 = 10\\,368\\,000$ m³, kb. 10,4 millió m³ víz folyik át.',
        },
        {
          kind: 'example',
          title: 'Fordított feladat',
          problem:
            'Egy 30 m széles, átlagosan 2 m mély folyó vízhozama árvíz idején 150 m³/s. Mekkora ekkor a víz átlagos sebessége?',
          solution:
            'Keresztmetszet: $30 \\cdot 2 = 60$ m². Sebesség: $v = \\frac{Q}{A} = \\frac{150}{60} = 2{,}5$ m/s.',
        },
        {
          kind: 'heading',
          text: 'A folyók vízjárása és az éghajlat',
        },
        {
          kind: 'text',
          text: 'A vízjárást a vízgyűjtő éghajlata szabja meg. A **hóolvadásos** (magashegységi) folyók vízhozama nyáron a legnagyobb (az Alpokból érkező Duna). Az **esővízzel táplált** folyók a csapadékos időszakban áradnak (monszun vidékén nyáron, a mediterrán éghajlaton télen). Az egyenlítői éghajlat folyóin (Amazonas) egész évben bőséges a víz, a száraz éghajlaton a vízfolyások időszakosak. Magyarországon a hóolvadás és a tavaszi esőzések miatt tavasszal, a Dunán a magashegységi olvadás és a nyári esők miatt kora nyáron is lehet árvíz.',
        },
        { kind: 'heading', text: 'Tavak' },
        {
          kind: 'compare',
          title: 'A tómedencék keletkezése',
          columns: ['Típus', 'Példa, magyarázat'],
          rows: [
            {
              label: 'Tektonikus eredetű',
              cells: ['a kéreg mozgásával (árok, süllyedék)', 'Tanganyika-tó, Bajkál-tó, Balaton'],
            },
            {
              label: 'Jégvájta',
              cells: ['a jég mélyítette ki', 'a Nagy-tavak, skandináv tavak'],
            },
            {
              label: 'Moréna által elgátolt',
              cells: [
                'a gleccser által lerakott törmelék gátolja el',
                'Alpok előtere, Skandinávia',
              ],
            },
            {
              label: 'Krátertó',
              cells: ['kialudt vulkán kráterében', 'Szent Anna-tó (Romániában)'],
            },
            {
              label: 'Szélvájta',
              cells: ['a szél kifújta a laza anyagot', 'sivatagos, száraz vidékeken'],
            },
            {
              label: 'Morotvató',
              cells: ['a folyó elhagyott kanyarulata', 'a Tisza és a Duna mentén'],
            },
            {
              label: 'Maradványtó',
              cells: ['egykori tenger vagy nagyobb tó maradványa', 'Kaszpi-tenger, Aral-tó'],
            },
            {
              label: 'Mesterséges tó',
              cells: ['gát építésével, bányagödör elárasztásával', 'Tisza-tó, Asszuáni-víztározó'],
            },
          ],
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'További tótípusok',
          columns: ['Jellemzője', 'Példa'],
          rows: [
            {
              label: 'Tengerszem',
              cells: ['jégvájta, kis, hegyvidéki tó a magashegységben', 'Magas-Tátra'],
            },
            {
              label: 'Poljetó',
              cells: ['karsztos medencében, időszakosan vízzel telik meg', 'dinári karszt'],
            },
            {
              label: 'Kalderató',
              cells: ['kitörés után beomlott vulkáni kaldera tava', 'vulkáni területeken'],
            },
            {
              label: 'Időszakos tó',
              cells: ['csak csapadékos időszakban van vize', 'száraz éghajlaton'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A tó keletkezésére a térképen, műholdfelvételen a **helyzetéből, alakjából, mélységéből** következtethetsz: a hosszú, keskeny, mély tó tektonikus árokra vagy gleccservájta völgyre utal; a kerek, kisebb tó kráterre; a folyó mentén a kanyarulat alakú tó morotva; a sekély, tágas, szabálytalan tó elgátolt medencére.',
        },
        {
          kind: 'text',
          text: '**A tavak pusztulása**: a folyók hordaléka és az elhalt növényzet **feltölti** a tavat (tó, majd fertő, mocsár, láp, végül szárazföld); a kifolyó mélyülése miatt **lecsapolódhat** a tó; a száraz éghajlat vagy a víz elvezetése miatt **kiszáradhat** (például az Aral-tó a vízkivétel miatt). Az ember szerepe: tavakat hoz létre (víztározók), de elősegítheti pusztulásukat (lecsapolás, öntözés, szennyezés, **eutrofizáció** – a túlzott tápanyag-bemosódás miatt algásodás és oxigénhiány). A tavak hasznosítása: ivóvíz, idegenforgalom, halászat, öntözés, hajózás, energia, hűtővíz.',
        },
        {
          kind: 'heading',
          text: 'Felszín alatti vizek',
        },
        {
          kind: 'text',
          text: 'A csapadék egy része **beszivárog** a talajba, és a vízzáró rétegig jutva felhalmozódik. A **talajvíz** az első vízzáró réteg fölött felgyülemlő, szabad vízszínű víz; szintje a csapadéktól és a párolgástól, a folyók vízállásától függ. Ha a talajvíz a felszínre emelkedik, **belvíz** keletkezik. Két vízzáró réteg közé zárt, nyomás alatt álló víz az **artézi víz**; a fúrt **artézi kút** vizét a nyomás a felszínre vagy föléje emelheti. A **hévíz** a 30 °C-nál melegebb víz; **gyógyvíz** és **ásványvíz** a nagyobb oldott ásványianyag-tartalmú, gyógyhatású vagy palackozott víz. A **karsztvíz** a mészkőben, a repedésekben (**résvíz**) mozgó víz; a **forrás** a felszín alatti víz természetes kilépése. A **vízfogó** (vízzáró) kőzetréteg nem engedi át, a **víztartó** réteg tárolja a vizet.',
        },
        {
          kind: 'text',
          text: 'A felszíni és a felszín alatti vizek kapcsolata: a folyók árvíz idején vizet adnak a talajvíznek, kisvíz idején a talajvíz táplálja a folyót; a források a felszín alatti vizeket szállítják felszínre; a talajvíz szintje a csapadéktól és a párolgástól függ.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Geotermikus gradiens: a víz hőmérséklete mélyfúrásban',
          problem:
            'A felszíni átlaghőmérséklet 10 °C, a geotermikus gradiens 33 méterenként 1 °C. Hány °C-os vizet adhat egy 1650 m mély fúrt kút (a hőmérséklet a kőzettel egyenlő)?',
          solution:
            'A mélység: $\\frac{1650}{33} = 50$ szakasz, a hőmérséklet-növekedés $50 \\cdot 1 = 50$ °C. A víz hőmérséklete $10 + 50 = 60$ °C, tehát hévíz (30 °C fölött). Magyarországon a gradiens a világátlagnál nagyobb (kisebb mélységben melegszik fel a kőzet), ezért gazdag a hévízben.',
        },
        { kind: 'heading', text: 'A víz mint gazdasági erőforrás' },
        {
          kind: 'text',
          text: '**Vízgazdálkodás**: a vízkészletek hasznosítása, védelme és a vízkárok elleni védekezés. **Ár- és belvízvédelem**: az **árvízvédelmi gátak**, a **hullámtér** (a gátak és a meder közötti terület, ahol az árvíz lefolyik), a **vésztározók** és a **mentesített ártér** (ármentesített terület, a gátak mögötti egykori ártér) szolgálják. A belvizet csatornákkal és szivattyúkkal vezetik el. Ár- és belvízvédelem mellett a víztározók tartalékot adnak aszály idején.',
        },
        {
          kind: 'compare',
          title: 'Vízhasználatok, lehetőségek és korlátok',
          columns: ['Lehetőség', 'Korlát, környezeti hatás'],
          rows: [
            {
              label: 'Ivóvíz (kommunális vízellátás)',
              cells: [
                'talajvíz, rétegvíz, folyó vagy tó vize; tisztítás',
                'szennyezés, kimerülés, a szennyvíztisztítás költsége',
              ],
            },
            {
              label: 'Öntözővíz',
              cells: [
                'a terméshozam növelése száraz vidéken',
                'nagy vízigény (a világon a vízfelhasználás nagy része), talajsófelhalmozódás, vízkészlet csökkenése',
              ],
            },
            {
              label: 'Ipari víz',
              cells: ['hűtés, mosás, technológia', 'szennyezés, hőterhelés'],
            },
            {
              label: 'Vízenergia',
              cells: [
                'megújuló, nem bocsát ki szén-dioxidot',
                'gát építése miatt élőhelyek tönkremennek, a hordalék megreked',
              ],
            },
            {
              label: 'Mesterséges tavak',
              cells: [
                'víztározás, árvízvédelem, energia, üdülés',
                'elöntött területek, az élővilág megváltozik, a vízhőmérséklet és a hordalék is',
              ],
            },
            {
              label: 'Vízi közlekedés, szállítás',
              cells: [
                'olcsó, nagy tömegű áru szállítására alkalmas (belvízi hajózás, tengerhajózás)',
                'lassú, függ a vízállástól (kisvíz, jegesedés), kikötők szükségesek',
              ],
            },
            {
              label: 'Halászat, idegenforgalom',
              cells: [
                'halászat, fürdők, vízi sportok, hajózás, üdülés',
                'túlhalászás, szennyezés, tömegturizmus terhelése',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Vízszennyező források**: a háztartások és az ipar szennyvize, a mezőgazdaság (műtrágya, növényvédő szerek), a hulladéklerakók, az olajszennyezés. A **szennyvíztisztítás** a vizek védelmének alapja. A világtenger és a tengerpartok gazdasági jelentősége: halászat, hajózás, tengeri energia, ásványkincsek (kőolaj, földgáz a talapzaton), idegenforgalom.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Folyószabályozás**: a meder átalakítása a mederhordalék, árvízvédelem, hajózás és mezőgazdaság érdekében (kanyarulatok átvágása, gátépítés, mederkotrás); jelentősége a társadalmi-gazdasági életben nagy, de a természetes élőhelyeket is megváltoztatja. **Villámáradás**: hirtelen, heves esőzés után a hegyvidéki kis vízfolyás gyors, pusztító áradása. **Polder**: gáttal körülvett, a környező vízszint alá süllyedő, a vizet szivattyúzással szárazon tartott terület (például Hollandiában). **Közműolló**: a vezetékes ivóvízzel ellátott és a csatornahálózatra kötött lakások arányának különbsége (a csatornázottság elmarad). **Nitrátosodás**: a műtrágyából és a trágyából kimosódó nitrát szennyezi a talaj- és rétegvizet. **Vízforgatás**: az ipari víz újrahasznosítása zárt körben. **Kutak**: az **ásott kút** a sekély talajvizet tárja fel, a **fúrt kút** mélyebb rétegvizet, a **csápos kút** a part menti kavicsrétegből vízszintes csövekkel nyer vizet (parti szűrésű). A **szennyvíztisztítás** mechanikai (szűrés, ülepítés), biológiai (mikroorganizmusok) és kémiai (vegyszerekkel kicsapás) lépésekből áll. **Túlhalászás**: a halállomány fogyását okozó, túl sok fogás. A vízgazdálkodás a fenntarthatóság eszköze: az ivóvíz, az ipari és az öntözővíz felhasználása takarékos, a vizek védelme nemzetközi összefogást kíván, mert a folyók és tengerek átlépik az országhatárt (például a Duna, a Tisza vízgyűjtője több ország területét érinti).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Számítás: vízhozam a meder méreteiből és a sebességből ($Q = A \\cdot v$); vagy a sebesség, a mélység fordított kérdésként.',
            'Vízjárás-diagram: a havi vízhozam görbéjéből következtess a folyó éghajlati körülményeire (hóolvadásos, csapadékos).',
            'Térkép: tótípusok megnevezése és bemutatása, vízgyűjtő, vízválasztó azonosítása.',
            'Szöveges forrás: árvízvédelem, belvíz, vízhasznosítás előnyei és hátrányai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a vízhozamnál nem váltod át az egységeket (cm, km/h helyett m, m/s), vagy a keresztmetszetet csak a szélességből, mélység nélkül számolod. Írd ki mindig a mértékegységet is.',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz vázlata (árvízvédelem): 1. gátak a mederhez közel; 2. hullámtér az áradó víznek; 3. vésztározók a tetőzés levágására; 4. mentesített ártér a gátak mögött, belvíz-csatornák és szivattyúk; 5. előrejelzés és védekezési terv.',
        },
      ],
      topicMatch: [
        '=folyók',
        '=folyók és tavak',
        '=folyóvizek',
        'tavak',
        'felszín alatti vizek',
        'vízgazdálkodás',
        'vízhozam',
        'vízjárás',
        'vízállás',
        'vízfolyások',
        'vízrajz',
        'vízbázis',
        'vízmegosztás',
        'ivóvíz',
        'árvizek',
        'halászat',
        'túlhalászás',
        'nitrátszennyezés',
      ],
      quiz: [
        {
          question:
            'Egy folyó 20 m széles, átlagosan 3 m mély, a víz sebessége 0,5 m/s. Mekkora a vízhozam?',
          options: ['30 m³/s', '60 m³/s', '120 m³/s', '3 m³/s'],
          answer: 0,
          explanation: '$Q = A \\cdot v = (20 \\cdot 3) \\cdot 0{,}5 = 30$ m³/s.',
        },
        {
          question: 'Mit nevezünk vízválasztónak?',
          options: [
            'a folyó torkolatát',
            'két szomszédos vízgyűjtő terület határát',
            'a folyó legmélyebb pontját',
            'a mellékfolyók összefolyását',
          ],
          answer: 1,
          explanation:
            'A vízválasztó a szomszédos vízgyűjtőket elválasztó (általában gerinc) vonal; a két oldalon a víz más-más folyóba jut.',
        },
        {
          question: 'Melyik tó keletkezett a folyó elhagyott kanyarulatából?',
          options: ['krátertó', 'morotvató', 'jégvájta tó', 'poljetó'],
          answer: 1,
          explanation:
            'A morotvató a folyó átvágott, lefűződött kanyarulatából keletkezik, ezért hosszúkás, íves alakú.',
        },
        {
          question: 'Mi a belvíz?',
          options: [
            'a folyó áradása a mederből',
            'a felszínre emelkedő talajvíz és a fel nem szívódó csapadék a mélyebb területeken',
            'a tengervíz bejutása a folyóba',
            'a gleccserek olvadékvize',
          ],
          answer: 1,
          explanation:
            'A belvíz a sík területeken a talajvíz felszínre emelkedéséből és a talajba nem szivárgó csapadékvízből halmozódik fel; nem a folyó medréből tör ki.',
        },
        {
          question:
            'A kőzet hőmérséklete 33 méterenként 1 °C-kal nő. Felszíni átlaghőmérséklet 10 °C. Hány °C-os a víz egy 990 m mélyről?',
          emelt: true,
          options: ['30 °C', '40 °C', '20 °C', '43 °C'],
          answer: 1,
          explanation: '$990 : 33 = 30$ szakasz, azaz +30 °C, így $10 + 30 = 40$ °C.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Folyó', url: wiki('Folyó') },
        { label: 'Wikipédia: Tó', url: wiki('Tó') },
        { label: 'Wikipédia: Vízgazdálkodás', url: wiki('Vízgazdálkodás') },
      ],
    },
    {
      id: 'levego-vizburok-emelt-osszefuggesek',
      subject: 'foldrajz',
      unitId: 'levego-vizburok',
      title: 'Emelt szint: számítások és összefüggések a levegő- és vízburokban',
      level: 'emelt',
      requirement: {
        emelt:
          'A felmelegedést és lehűlést módosító tényezők; vízgőztartalommal kapcsolatos számítási feladatok; felhőtípusok; trópusi ciklon, helyi szelek, futóáramlás; a sótartalom változása; az áramlások éghajlatmódosító hatása; az általános légkörzés és az óceáni vízkörzés kapcsolata; tavak keletkezésének következtetése; geotermikus gradiens; folyószabályozás',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Hőmérséklet-változás a magassággal**: száraz levegő kb. 1 °C/100 m, telített kb. 0,5 °C/100 m; a troposzférában a mért átlag kb. 0,6 °C/100 m.',
            '**Relatív vízgőztartalom** = tényleges / maximális vízgőztartalom $\\cdot$ 100%. A harmatpontnál a relatív érték 100%.',
            '**Főn**: a szél felőli oldalon lassan hűl (kicsapódás), a túloldalon gyorsan melegszik: ezért meleg és száraz.',
            '**Trópusi ciklon**: meleg óceán (kb. 26–27 °C fölött), Egyenlítőtől legalább kb. 5° távolság.',
            '**Sótartalom**: a párolgás növeli, a csapadék, a hozzáfolyás és az olvadás csökkenti.',
            '**Geotermikus gradiens**: a mélységgel nő a hőmérséklet (átlagosan kb. 1 °C / 33 m).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Összetett számítások lépésről lépésre' },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: felhő és csapadék a hegy előterében',
          problem:
            'A 20 °C-os levegő 1 m³-ében 9,4 g vízgőz van (a maximum 17,3 g/m³). A levegő a hegy lejtőjén száraz állapotban 1 °C/100 m-rel hűl, amíg eléri a harmatpontot (itt 10 °C). Hány méter emelkedés után kezdődik a felhőképződés? Mennyi víz csapódik ki 1 m³-ből további 5 °C-os lehűlésnél, ha 5 °C-on a maximum 6,8 g/m³?',
          solution:
            'Szükséges lehűlés: $20 - 10 = 10$ °C, ami $10 : 1 = 10$ szakasz, azaz 1000 m emelkedés után kezdődik a felhőképződés (a kicsapódás magassága).\n\nA levegő tényleges vízgőztartalma 9,4 g/m³. További 5 °C-ra hűlve a maximum 6,8 g/m³, kicsapódik: $9{,}4 - 6{,}8 = 2{,}6$ g/m³. (A tágulás miatti térfogatváltozást itt elhanyagoljuk.)',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: két állomás összehasonlítása',
          problem:
            'A tengerparti A állomás legmelegebb hónapjának középhőmérséklete 22 °C, a leghidegebbé 8 °C. A kontinentális B állomás értékei 24 °C és –12 °C. Számítsd ki mindkettő évi közepes hőingását, és magyarázd a különbséget!',
          solution:
            'A: $22 - 8 = 14$ °C. B: $24 - (-12) = 36$ °C.\n\nA tengerparti állomáson a nagy fajhőjű víz kiegyenlíti a hőmérsékletet (lassan melegszik, lassan hűl), ezért kisebb a hőingás; a szárazföld belsejében a hőingás nagy (kontinentális éghajlat).',
        },
        { kind: 'heading', text: 'Összefüggések' },
        {
          kind: 'compare',
          title: 'Légkörzés és vízkörzés',
          columns: ['Általános légkörzés', 'Óceáni vízkörzés'],
          rows: [
            {
              label: 'Mi hajtja?',
              cells: [
                'a Nap egyenlőtlen felmelegítése, a nyomáskülönbség',
                'az állandó szelek, a sűrűségkülönbség',
              ],
            },
            {
              label: 'Mi téríti el?',
              cells: ['a Föld forgása (Coriolis-erő)', 'a Coriolis-erő és a kontinensek partjai'],
            },
            {
              label: 'Mit tesz?',
              cells: [
                'hőt és nedvességet szállít az alacsony szélességekről a magasabbak felé',
                'meleg vizet vagy hideg vizet szállít, módosítja a partok éghajlatát',
              ],
            },
            {
              label: 'Forgásirány a szubtrópusokon (északi félteke)',
              cells: [
                'a szubtrópusi maximum körül az óramutatóval megegyező',
                'az óceáni körforgás óramutatóval megegyező',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Az áramlások éghajlatmódosító hatását bizonyítani** térképen és éghajlati diagramon úgy kell: azonos szélességű, de eltérő partra tartozó két állomás hőmérsékletét hasonlítod össze (például Norvégia nyugati partja és Labrador): az áramlás menti állomás évi középhőmérséklete magasabb, a hőingása kisebb.',
        },
        {
          kind: 'text',
          text: '**Az általános légkörzés és a helyi időjárás**: a nyugatias szelek, az Izlandi minimum és az Azori-maximum együtt határozzák meg Közép-Európa időjárását; a helyi szelek (főn, parti, hegy-völgyi szél) a domborzat és a víz–szárazföld eloszlás miatt módosítják azt. A mikroklímát a lejtőkitettség, a növényzet és a beépítettség alakítja.',
        },
        {
          kind: 'warning',
          text: 'A szökőár a tengerjárás témában a különösen magas dagályt jelenti (újhold, telihold); a földrengés okozta hatalmas hullám a cunami. A vizsgán mindig nézd meg, melyik témáról kérdez.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt írásbeli: kidolgozott számítás (vízgőztartalom, kicsapódás, harmatpont, hőmérséklet-csökkenés magassággal) táblázat segítségével.',
            'Összetett ábraelemzés: éghajlati diagramok, tengeráramlás-térkép és hőmérsékleti anomália együtt.',
            'Szóbeli: összefüggések (általános légkörzés – áramlások – éghajlat – folyók vízjárása) rendszerezett kifejtése.',
          ],
        },
        {
          kind: 'tip',
          text: 'Számításnál mindig írd le a képletet, a behelyettesítést és a mértékegységet is; a részeredményeket jelöld. A feladat táblázata megadja a maximális vízgőztartalmat, azt ne a fejedből idézd.',
        },
      ],
      topicMatch: ['villámár', 'folyószabályozás'],
      quiz: [
        {
          question:
            'A levegő 20 °C-os, harmatpontja 10 °C. Száraz levegő 100 méterenként 1 °C-ot hűl felemelkedéskor. Hány méter magasan kezdődik a felhőképződés?',
          emelt: true,
          options: ['500 m', '1000 m', '2000 m', '100 m'],
          answer: 1,
          explanation:
            'A levegőnek $20 - 10 = 10$ °C-ot kell hűlnie, ez $10 \\cdot 100 = 1000$ m emelkedéssel jár.',
        },
        {
          question:
            'Miért kisebb a tengerparti város hőingása, mint a szárazföld belsejében lévőé?',
          emelt: true,
          options: [
            'mert a tengerparton mindig fúj a szél',
            'mert a víz nagy fajhője kiegyenlíti a hőmérsékletet',
            'mert a tengerparton kevesebb a napsütés',
            'mert a tengerparton magasabban van a város',
          ],
          answer: 1,
          explanation:
            'A víz lassan melegszik és lassan hűl, ezért a tengerparton enyhébbek a szélsőségek.',
        },
        {
          question: 'Melyik jellemzi a trópusi ciklon kialakulását?',
          emelt: true,
          options: [
            'hideg tenger fölött, az Egyenlítőn',
            'meleg óceán fölött, az Egyenlítőtől távolabb',
            'hegyvidéken télen',
            'a sarkvidéken, jég fölött',
          ],
          answer: 1,
          explanation:
            'A trópusi ciklon sok meleg vízgőzből nyeri energiáját, és a forgáshoz eltérítő erő kell, ezért az Egyenlítőtől távolabb alakul ki.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Trópusi ciklon', url: wiki('Trópusi ciklon') },
        { label: 'Wikipédia: Főn (szél)', url: wiki('Főn (szél)') },
        { label: 'Wikipédia: El Niño', url: wiki('El Niño') },
      ],
    },
  ],
};

export default unit;
