import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 4.5 (gazdasági kiegyezés, Budapest), 4.8 (A dualizmus kora) and 4.9 (A nemzetiségi kérdés). */
const unit: GuideUnit = {
  id: 'dualizmus',
  subject: 'tortenelem',
  order: 45,
  title: 'A kiegyezés és a dualizmus kora Magyarországon',
  requirementRef: '4.5 (gazdasági kiegyezés, Budapest), 4.8–4.9',
  intro:
    'Az 1867-es kiegyezéstől az első világháborúig: a kiegyezés okai és közös ügyei, a dualista államszervezet, a gazdasági fellendülés, Budapest születése, a nemzetiségi kérdés és a pártok küzdelmei.',
  requirementSource:
    'A témák, fogalmak, személyek, évszámok és helyszínek az érettségi részletes vizsgakövetelményeinek 4. témaköréből (4.5, 4.8 és 4.9) valók. Ami emelt szintű, azt külön jelöljük.',
  requirements: {
    terms: {
      kozep: [
        'dualizmus',
        'közös ügyek',
        'közjogi kérdés',
        'nyílt és titkos szavazás',
        'dzsentri',
        'MÁV',
        'Millennium',
        'urbanizáció',
        'kivándorlás',
        'asszimiláció',
        'cionizmus',
        'emancipáció',
        'autonómia',
      ],
      emelt: [
        'monopólium',
        'kartell',
        'szecesszió',
        'historizmus',
        'pánszlávizmus',
        'delegáció',
        'Szabadelvű Párt',
        'obstrukció',
        'koalíció',
        'Nemzeti Munkapárt',
        'szeparatizmus',
      ],
    },
    people: {
      kozep: [
        'Ganz Ábrahám',
        'Deák Ferenc',
        'Ferenc József',
        'Andrássy Gyula',
        'Eötvös József',
        'Baross Gábor',
        'Tisza Kálmán',
        'Wekerle Sándor',
        'Tisza István',
        'Weiss Manfréd',
      ],
      emelt: [
        'Puskás Tivadar',
        'Kandó Kálmán',
        'Ybl Miklós',
        'Podmaniczky Frigyes',
        'Herzl Tivadar',
      ],
    },
    dates: {
      kozep: [
        '1848/1867–1916 Ferenc József uralkodása',
        '1867 a kiegyezés',
        '1868 a horvát-magyar kiegyezés, a nemzetiségi törvény, a népiskolai törvény',
        '1873 Budapest egyesítése',
        '1896 a millennium',
      ],
      emelt: [
        '1866 a königgrätzi csata',
        '1875–1890 Tisza Kálmán miniszterelnöksége',
        '1905 a koalíciós válság',
      ],
    },
    places: {
      kozep: ['Pest-Buda', 'Budapest', 'Osztrák-Magyar Monarchia', 'Fiume'],
      emelt: [],
    },
  },
  pages: [
    {
      id: 'kiegyezes-okai-kozos-ugyek',
      subject: 'tortenelem',
      unitId: 'dualizmus',
      title: 'A kiegyezés okai és a közös ügyek',
      level: 'kozep',
      requirement: {
        kozep: 'A kiegyezés okai, a közös ügyek, a magyar államszervezet',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szabadságharc után a **neoabszolutizmus** korszaka jött (a Bach-korszak, 1849–1859): központosítás, a magyar önkormányzat felszámolása.',
            'A Habsburgokat külső vereségek (1859 Solferino, **1866 königgrätzi csata**) és pénzügyi bajok kényszerítették egyezkedésre.',
            'A magyar politikai elit mérsékelt vezetője **Deák Ferenc** volt: törvényes alapon, kompromisszummal akarta visszaszerezni az alkotmányt.',
            '**1867**: a **kiegyezés**. Az uralkodó (**Ferenc József**) Magyarország királya, a birodalom két fele, Ausztria és Magyarország, egyenrangú állam lett: **dualizmus**.',
            '**Közös ügyek**: a külügy, a hadügy és az ezek költségeit fedező pénzügy. Minden más magyar belügy.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'dualizmus',
              text: 'Kettősség: az Osztrák-Magyar Monarchia két államból (Ausztria és Magyarország) állt, közös uralkodóval és közös ügyekkel.',
            },
            {
              term: 'közös ügyek',
              text: 'Az Ausztriával közösen intézett ügyek: külügy, hadügy és a kettő költségeit fedező pénzügy.',
            },
            {
              term: 'közjogi kérdés',
              text: 'Az a vita, hogy milyen legyen Magyarország és a Habsburg-birodalom (Ausztria) viszonya: a kiegyezést elfogadók és elvetők nézeteltérése.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A neoabszolutizmus és a válság' },
        {
          kind: 'text',
          text: 'A szabadságharc leverése után Bécs központosított, a magyar alkotmányt felfüggesztő rendszert épített ki. Magyarország különállása megszűnt, a hivatalokat német nyelvű (és cseh) tisztviselők töltötték be, az adóterhek nőttek. A magyar politikai elit nagy része **passzív ellenállással** válaszolt: nem vett részt a hivatalokban, és megtagadta az együttműködést.',
        },
        {
          kind: 'text',
          text: 'A rendszer külső vereségei megingatták a birodalmat. **1859-ben** Olaszországban Franciaország és Szardínia győzte le a császári sereget (Solferino). Ezután az udvar engedményeket tett: az **októberi diploma** (1860) és a **februári pátens** (1861) még a birodalmi egység megtartásáról szólt, ezért a magyarok elutasították. Az 1861-es országgyűlésen két irányzat állt szemben: a **Felirati párt** (Deák Ferenc), amely feliratban kérte az alkotmány helyreállítását, és a **Határozati párt**, amely nem volt hajlandó a királlyal alkudozni. Az uralkodó feloszlatta az országgyűlést, és a **provizórium** korszaka következett (1861–1865).',
        },
        { kind: 'heading', text: 'A kiegyezés felé' },
        {
          kind: 'text',
          text: '**Deák Ferenc** 1865-ben a **Húsvéti cikkben** fogalmazta meg az álláspontját: a magyar nemzet az alkotmányát és az 1848-as törvényeket nem adhatja fel, de kész engedni a birodalom biztonságához szükséges ügyekben. **1866-ban Königgrätznél (Sadowánál)** Poroszország legyőzte Ausztriát, és az osztrák császárság kiszorult a német egység folyamatából. A Habsburgoknak most már mindenképpen belső békére volt szükségük, és meg kellett nyerniük a magyarokat.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1849–1859', text: 'A Bach-korszak, a neoabszolutizmus.' },
            { date: '1859', text: 'Solferinói vereség, a rendszer válsága.' },
            { date: '1861–1865', text: 'Provizórium, országgyűlési viták.' },
            { date: '1865', text: 'Deák Húsvéti cikke.' },
            {
              date: '1866',
              text: 'A königgrätzi csata: a porosz győzelem után az udvar kiegyezésre kényszerül.',
              emelt: true,
            },
            {
              date: '1867. február',
              text: 'Az uralkodó kinevezi az első felelős magyar kormányt, Andrássy Gyula miniszterelnökkel.',
            },
            {
              date: '1867. június 8.',
              text: 'Ferenc József megkoronázása Budán; a kiegyezést törvénybe iktatták (1867. évi XII. törvénycikk).',
            },
          ],
        },
        { kind: 'heading', text: 'Mit kötöttek ki? A közös ügyek' },
        {
          kind: 'text',
          text: 'Az 1867. évi XII. tc. szerint az uralkodó személye és a **pragmatica sanctio** (a Habsburg-ház örökösödési rendje) közös. A magyar kormány és az országgyűlés mellett három **közös minisztérium** működött: a **külügyi**, a **hadügyi** és a **közös pénzügyi** (ez csak a másik kettő költségeit intézte). A közös ügyeket a két ország **delegációja** tárgyalta meg és szavazta meg.',
        },
        {
          kind: 'keypoints',
          title: 'Közös, vagy magyar belügy?',
          items: [
            '**Közös**: külügy, hadügy (a közös hadsereg vezényleti nyelve német), a kettő költségeit fedező pénzügy.',
            '**Magyar belügy**: a belügy, az igazságügy, a vallás- és közoktatásügy, a pénzügy, a földművelés és a közlekedés, valamint a **honvédség**.',
            'A közös költségekhez Magyarország a **kvóta** szerint járult hozzá (kezdetben kb. 30%).',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A delegációk 60–60 tagúak voltak (a felsőházból 20, az alsóházból 40 tag), évente felváltva ülésezett Pesten és Bécsben, és külön tanácskozott: a két fél írásban érintkezett. Az uralkodó a külügyet és a hadsereg irányítását kézben tartotta, ezért a kiegyezés a király szerepét is erősítette. A **Cassandra-levélben** (1867) a száműzött Kossuth a kiegyezés ellen szólt: szerinte az ország önállóságát adja föl.',
        },
        {
          kind: 'compare',
          title: 'A kiegyezés megítélése',
          columns: ['Kiegyezés mellett (a "67-esek")', 'Kiegyezés ellen (a "48-asok")'],
          rows: [
            {
              label: 'Vezető',
              cells: ['Deák Ferenc, Andrássy Gyula', 'Kossuth Lajos (száműzetésből)'],
            },
            {
              label: 'Álláspont',
              cells: [
                'az alkotmány helyreáll, a gazdaság fejlődhet, a Monarchia nagyhatalmi védelmet ad',
                'a közös ügyek miatt az ország nem független, Magyarország csak félig önálló',
              ],
            },
            {
              label: 'Mit tartottak fontosnak?',
              cells: [
                'a realitásokat, a törvényes úton elérhetőt',
                'az 1848-as törvények és az önállóság',
              ],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: részlet az 1867. évi XII. törvénycikkből vagy Deák Húsvéti cikkéből; mit rendelkezik, mi közös, mi nem?',
            'Lista alapján: válaszd ki a közös ügyeket (külügy, hadügy, pénzügy).',
            'Esszé: a kiegyezés okai, tartalma és megítélése (előnyei, hátrányai).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az oktatásügyet, a közlekedést vagy a honvédséget közös ügynek tekinteni. Közös csak a külügy, a hadügy és az ezeket fedező pénzügy volt. A honvédség magyar volt, a közös hadsereg külön.',
        },
        {
          kind: 'tip',
          text: 'A kiegyezés okait két oldalról mutasd be: a Habsburgok oldaláról (vereségek, pénzügyi válság, a magyar ellenállás) és a magyarok oldaláról (a passzív ellenállás kudarca, Deák kompromisszumkészsége). Az „előnyei és hátrányai” szerkezet külön pontot ér.',
        },
      ],
      topicMatch: ['kiegyezés', 'dualizmus'],
      cards: { subject: 'tortenelem', deck: 'evszamok', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik évben jött létre a kiegyezés?',
          options: ['1848', '1849', '1865', '1867'],
          answer: 3,
          explanation:
            'A kiegyezés 1867-ben jött létre. Az 1865 Deák Húsvéti cikkének éve, 1848 az áprilisi törvényeké.',
        },
        {
          question: 'Melyik NEM tartozott a közös ügyek közé?',
          options: ['külügy', 'hadügy', 'a közös ügyeket fedező pénzügy', 'közoktatásügy'],
          answer: 3,
          explanation:
            'A közoktatás (a vallás- és közoktatásügy) magyar belügy volt. Közös a külügy, a hadügy és az ezek költségeit fedező pénzügy.',
        },
        {
          question: 'Ki volt a kiegyezés legfontosabb magyar előkészítője?',
          options: ['Kossuth Lajos', 'Deák Ferenc', 'Tisza Kálmán', 'Eötvös József'],
          answer: 1,
          explanation:
            'Deák Ferenc, „a haza bölcse”. Kossuth a száműzetésből a kiegyezés ellen szólt.',
        },
        {
          question: 'Mit jelent a dualizmus a Monarchia államszervezetében?',
          options: [
            'Két uralkodó közös kormányzását.',
            'Két, egyenrangú államot (Ausztria és Magyarország) közös uralkodóval.',
            'Két országgyűlést Magyarországon.',
            'Magyarország és Horvátország kettős királyságát.',
          ],
          answer: 1,
          explanation:
            'A dualizmus: két állam, egy uralkodó, néhány közös ügy. A szó kettősséget jelent.',
        },
        {
          question: 'Melyik csata után kényszerült az udvar kiegyezésre?',
          options: ['königgrätzi (1866)', 'solferinói (1859)', 'pákozdi (1848)', 'világosi (1849)'],
          answer: 0,
          explanation:
            'A königgrätzi vereség (1866) után az udvarnak már mindenképpen belső békére volt szüksége. Solferino (1859) az első válságjel volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Osztrák–magyar kiegyezés', url: wiki('Osztrák–magyar kiegyezés') },
        { label: 'Wikipédia: Deák Ferenc', url: wiki('Deák Ferenc') },
        { label: 'Wikipédia: Osztrák–Magyar Monarchia', url: wiki('Osztrák–Magyar Monarchia') },
      ],
    },
    {
      id: 'dualista-allamszervezet',
      subject: 'tortenelem',
      unitId: 'dualizmus',
      title: 'A dualista államszervezet és a dzsentri',
      level: 'kozep',
      requirement: {
        kozep: 'A kiegyezés okai, a közös ügyek, a magyar államszervezet',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyar állam kormányzati rendszere **alkotmányos monarchia** volt: a király, a kormány (az országgyűlésnek felelős) és a kétkamarás **országgyűlés** (képviselőház és főrendiház).',
            'Az uralkodó nevezte ki a miniszterelnököt, aki a törvényhozás többségére támaszkodott. Az első miniszterelnök **Andrássy Gyula** volt (1867–1871).',
            'A **választójog** vagyoni és műveltségi cenzushoz kötött volt, a lakosságnak csak a kis része szavazhatott; a szavazás vidéken **nyílt** volt.',
            '**1868**: a **horvát-magyar kiegyezés**: Horvátország belső önkormányzatot kapott, **Fiume** pedig Magyarországhoz tartozott.',
            'A vezető politikai-hivatali réteg a **dzsentri** (elszegényedett középnemesség) lett.',
          ],
        },
        {
          kind: 'map',
          title: 'A dualista Monarchia helyszínei',
          places: [
            {
              name: 'Budapest',
              lat: 47.5,
              lon: 19.04,
              note: 'a magyar kormány és az országgyűlés székhelye',
            },
            {
              name: 'Bécs',
              lat: 48.21,
              lon: 16.37,
              note: 'a közös ügyek és az uralkodó birodalmi székhelye',
            },
            {
              name: 'Pozsony',
              lat: 48.14,
              lon: 17.11,
              note: 'a reformkori rendi országgyűlés helye',
            },
            {
              name: 'Zágráb',
              lat: 45.81,
              lon: 15.98,
              note: 'Horvátország fővárosa, saját tartománygyűlés',
            },
            {
              name: 'Kolozsvár',
              lat: 46.77,
              lon: 23.6,
              note: 'Erdély: 1867 után újra Magyarország része',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A magyar államszervezet' },
        {
          kind: 'text',
          text: 'Az állam élén az **uralkodó** állt: Ausztriában császár, Magyarországon király (**Ferenc József**, uralkodott 1848/1867–1916). Ő szentesítette a törvényeket, kinevezte a kormányt, és ő volt a hadsereg legfőbb parancsnoka. A magyar **kormány**, amelynek élén a miniszterelnök állt, az országgyűlésnek volt felelős. Az **országgyűlés** két házból állt: a **képviselőházat** a cenzus alapján választották, a **főrendiházba** a főnemesség, a főpapok és a kinevezett tagok kerültek.',
        },
        {
          kind: 'text',
          text: 'A helyi közigazgatásban a **vármegyék** megmaradtak, de a kormány befolyása nőtt. Az 1870-es években a törvényhatóságok (megye, szabad királyi város) igazgatását egységesítették. Erdély újra egyesült Magyarországgal (unió, 1867–68). A **bíróságok** különváltak a közigazgatástól.',
        },
        { kind: 'heading', text: 'A választójog' },
        {
          kind: 'text',
          text: 'Az 1874. évi törvény a vagyonhoz és az adóhoz, illetve a műveltséghez kötötte a választójogot: a becslések szerint a lakosságnak nagyjából 6–8%-a szavazhatott, a nők és a nincstelenek nem. A választás **nyílt szavazás** volt vidéken (a szavazó nyilvánosan mondta meg, kire szavaz, ami lehetővé tette a nyomásgyakorlást és a vesztegetést), **titkos** csak a nagyobb városokban. A kormánypárt ezért szinte mindig megnyerte a választást.',
        },
        {
          kind: 'compare',
          title: 'A választójog 1848-ban és a dualizmus korában',
          columns: ['1848 (áprilisi törvények)', 'Dualizmus kora'],
          rows: [
            {
              label: 'Alap',
              cells: ['cenzus (vagyon vagy műveltség)', 'cenzus (vagyon vagy műveltség)'],
            },
            { label: 'Szavazók aránya', cells: ['a becslések eltérnek', 'kb. 6–8%'] },
            { label: 'Szavazás módja', cells: ['nyílt', 'vidéken nyílt, a nagyvárosokban titkos'] },
          ],
        },
        { kind: 'heading', text: 'A horvát-magyar kiegyezés (1868)' },
        {
          kind: 'text',
          text: 'Horvátország a Magyar Korona országa maradt, de a **belügyekben, az igazságügyben és a vallás- és oktatásügyben** önkormányzatot kapott: saját tartománygyűlése (szábor), kormánya és bánja volt. A közös ügyekben magyar-horvát egyezség szólt: a magyar országgyűlésben horvát képviselők is ültek. **Fiume** a magyar tengeri kikötő lett, közvetlenül a magyar kormány irányítása alatt: a magyar kereskedelem kijáratát jelentette. A horvát politikai elit nagy része az 1868-as megállapodást kevésnek tartotta, ezért a magyar-horvát viszony később is feszült maradt.',
        },
        { kind: 'heading', text: 'A társadalom: a dzsentri' },
        {
          kind: 'text',
          text: 'A jobbágyfelszabadítás és a liberális gazdaság után sok középnemes elvesztette a földjét. Az elszegényedett **dzsentri** a megyei és állami hivatalokban talált megélhetést, és a kor politikai-közigazgatási elitjének fontos rétege lett. Életmódjuk a „úri” hagyományokat őrizte (becsület, vendégszeretet, költekezés), a polgári életformát sokan nem fogadták el. Az irodalomban (például Mikszáth Kálmán műveiben) is gyakran visszatér.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A dualizmus idején a magyar társadalomban a polgári átalakulás mellett erős maradt a rendi örökség: a **nagybirtok** (a földterület jelentős része a nagybirtokosok kezében volt) és az arisztokrácia politikai súlya nagy maradt, a parasztság nagy része törpebirtokos vagy földnélküli volt. Ez a **feudális maradványok** kérdése az 1890-es évek agrárszocialista mozgalmaiban és a kivándorlásban is megjelent.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábra: a dualista Monarchia vagy a magyar államszervezet vázlata; töltsd ki a hiányzó intézményeket.',
            'Statisztika: a választójogosultak aránya; mire utal a kis arány?',
            'Fogalmak: közös ügyek, dzsentri, nyílt szavazás, közjogi kérdés.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Horvátországot és Magyarországot összekeverni a közös ügyek szintjén. A közös ügyek Ausztriával voltak közösek, Horvátország pedig a magyar államon belül kapott autonómiát (1868).',
        },
        {
          kind: 'tip',
          text: 'Ha a választójogról kérdeznek, a számon túl a következményt is mondd: a szűk, nyílt szavazású választójog a kormánypártnak kedvezett, és tartósan kirekesztette a munkásokat és a nemzetiségek többségét.',
        },
      ],
      topicMatch: ['dualizmus', 'kiegyezés'],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'ujkor' },
      quiz: [
        {
          question: 'Ki volt az első miniszterelnök a kiegyezés után?',
          options: ['Deák Ferenc', 'Tisza Kálmán', 'Andrássy Gyula', 'Eötvös József'],
          answer: 2,
          explanation:
            'Andrássy Gyula 1867–1871 között volt miniszterelnök, majd közös külügyminiszter lett.',
        },
        {
          question: 'Mi volt a nyílt szavazás következménye?',
          options: [
            'Mindenki szabadon szavazhatott.',
            'A szavazókra nyomást lehetett gyakorolni, a kormánypárt előnyben volt.',
            'A nők is szavazhattak.',
            'Nem kellett cenzus.',
          ],
          answer: 1,
          explanation:
            'A nyílt szavazásnál nyilvános volt, ki kire szavaz, ezért nyomást lehetett gyakorolni a választókra, és a vesztegetés is elterjedt.',
        },
        {
          question: 'Milyen önkormányzatot kapott Horvátország 1868-ban?',
          options: [
            'Teljes függetlenséget.',
            'Belügyekben, igazságügyben és oktatásban önkormányzatot a magyar állam keretén belül.',
            'Semmilyet, a magyar kormány közvetlenül irányította.',
            'Közös ügyekben döntési jogot Ausztriával.',
          ],
          answer: 1,
          explanation:
            'A horvát-magyar kiegyezés belső önkormányzatot adott; Fiume viszont a magyar kormány alatt maradt.',
        },
        {
          question: 'Kik tartoztak a dzsentri társadalmi rétegbe?',
          options: [
            'a gyári munkások',
            'az elszegényedett, hivatalokból élő középnemesek',
            'a főnemesek',
            'a zsidó nagykereskedők',
          ],
          answer: 1,
          explanation:
            'A dzsentri a földjét elvesztett vagy kisbirtokos nemesség volt, amely az állami és megyei hivatalokban talált megélhetést.',
        },
        {
          question: 'Hány százalék szavazhatott a dualizmus korában a cenzus miatt?',
          options: ['kb. 6–8%', 'kb. 25%', 'kb. 50%', 'kb. 90%'],
          answer: 0,
          explanation:
            'A vagyoni és műveltségi cenzus miatt a lakosság csak 6–8%-a volt választó; általános választójog nem volt.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Horvát–magyar kiegyezés', url: wiki('Horvát–magyar kiegyezés') },
        {
          label: 'Wikipédia: Dualizmus kora Magyarországon',
          url: wiki('Dualizmus kora Magyarországon'),
        },
        { label: 'Wikipédia: Dzsentri', url: wiki('Dzsentri') },
      ],
    },
    {
      id: 'gazdasagi-kiegyezes-gazdasagpolitika',
      subject: 'tortenelem',
      unitId: 'dualizmus',
      title: 'A gazdasági kiegyezés és a dualista gazdaság',
      level: 'kozep',
      requirement: {
        kozep: 'Gazdasági kiegyezés és állami gazdaságpolitika, a dualista Magyarország',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **gazdasági kiegyezés** vámuniót (közös vámterület) teremtett Ausztriával: szabad kereskedelem a két fél között, közös vámhatár kifelé. Tíz évenként újratárgyalták.',
            'Magyarország **agrár-ipari ország** lett: a mezőgazdaság maradt a fő ágazat (a lakosság kb. 60%-a dolgozott benne), de az ipar gyorsan nőtt.',
            'A fejlődés mozgatói: **vasútépítés** (**MÁV**, 1868), a gőzmalmok és a gépipar, a bankok, a külföldi tőke.',
            'Az **állam** támogatta a gazdaságot (adókedvezmények, vasútállamosítás, szabályozások), a kormányok **Baross Gábor** és **Wekerle Sándor** nevéhez köthető intézkedéseivel.',
            'A fellendülést a **millennium** (1896) ünnepelte meg.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'MÁV',
              text: 'Magyar Államvasutak: az állami vasúttársaság (1868-ban alakult), amely az 1880-as évektől az államosított vasutakat is átvette.',
            },
            {
              term: 'kivándorlás',
              text: 'Az országot elhagyó tömegek mozgása (főleg Amerikába); csak az első világháború előtti másfél évtizedben mintegy másfél millióan vándoroltak ki, közel negyedük később visszatért.',
            },
            {
              term: 'Millennium',
              text: 'A honfoglalás ezeréves évfordulójának megünneplése 1896-ban: ünnepségek, országos kiállítás, Budapest nagy építkezései.',
            },
            {
              term: 'monopólium',
              text: 'Egy cég uralja a piacot, mert nincs versenytársa.',
              emelt: true,
            },
            {
              term: 'kartell',
              text: 'Független cégek megállapodása az árakról és a piacok felosztásáról a verseny korlátozására.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A gazdasági kiegyezés' },
        {
          kind: 'text',
          text: 'A kiegyezéssel együtt az **1867. évi XVI. törvénycikk** szabályozta a gazdasági viszonyokat. A két fél **vám- és kereskedelmi szövetséget** kötött: nem volt vámhatár köztük, kifelé közös vámot alkalmaztak, és közös volt a pénz is (a forint, majd 1892-től a **korona**). A szerződést **tíz évenként** újra kellett tárgyalni, ami minden alkalommal heves vitákat szült. A közös ügyek költségeihez Magyarország a **kvóta** arányában járult hozzá: kezdetben kb. 30%, ami az évtizedek során fokozatosan nőtt (1907-ben 36,4%).',
        },
        {
          kind: 'text',
          text: 'Mire volt jó a vámunió? Magyarországnak: biztos piac a gabonának és a lisztnek, kedvezőbb a tőkebeáramlás. Ausztriának: biztos piaca a fejlettebb iparcikkeknek. A magyar ipar egy részét viszont az osztrák verseny visszatartotta, ezért a 48-asok szerint a gazdaság is félgyarmati helyzetbe került.',
        },
        { kind: 'heading', text: 'Mezőgazdaság: az ország gabonatára' },
        {
          kind: 'text',
          text: 'A **folyószabályozások** (a Tisza szabályozása az 1880-as évekre nagyrészt befejeződött) hatalmas területeket tettek szántóvá. A termelés növekedett, a búza és a liszt a fő exportcikk lett, a **malomipar** Budapesten Európa egyik legnagyobb malomipari központjává fejlődött. Az 1870-es évek végén jött a **filoxéra** (a szőlőgyökér kártevője), és az olcsó amerikai gabona versenye miatt az 1880-as évektől agrárválság is kialakult. A **birtokszerkezet** egyenlőtlen maradt: a nagybirtok mellett sok törpebirtokos és földnélküli élt, ők adták a kivándorlók többségét.',
        },
        { kind: 'heading', text: 'Közlekedés és ipar' },
        {
          kind: 'text',
          text: 'A vasút volt a gazdasági fellendülés motorja. A vonalak hossza a kiegyezéstől az első világháborúig körülbelül tízszeresére nőtt, a hálózat sugarasan **Budapest** felé tartott. A vasút a termény elszállítását, a gyáripar nyersanyagellátását és a piac egységesülését tette lehetővé. **Baross Gábor** miniszter (1886–1892) államosította a magánvasutakat, bevezette az olcsó **zónatarifát**, és fejlesztette **Fiume** kikötőjét.',
        },
        {
          kind: 'text',
          text: 'Az iparban a **malomipar** és az **élelmiszeripar** vezetett, de nőtt a **gépipar** és a **villamosipar** is. **Ganz Ábrahám** vasöntödéje (keményöntésű vasúti kerekek) a Ganz-gyár alapja lett, amely később a villamosság úttörője volt. A **Weiss Manfréd** alapította konzerv- és lőszergyár Csepelen a magyar nehézipar egyik legnagyobb üzemévé nőtt. A hazai bankok (például a Magyar Általános Hitelbank, 1867) és a külföldi, főleg osztrák és német tőke finanszírozták a beruházásokat.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Ganz Ábrahám',
              text: 'Svájci származású öntödei vállalkozó, a Ganz-gyár megalapítója Budán.',
            },
            {
              name: 'Weiss Manfréd',
              text: 'Gyáros, a csepeli konzerv- és lőszergyár alapítója; a magyar nehézipar egyik vezére.',
            },
            {
              name: 'Baross Gábor',
              text: 'Miniszter (közlekedés, majd kereskedelem): vasútállamosítás, zónatarifa, a fiumei kikötő fejlesztése.',
            },
            {
              name: 'Wekerle Sándor',
              text: 'Pénzügyminiszter, majd az első polgári származású miniszterelnök (1892–1895): pénzügyi rendezés (1892: a korona bevezetése) és az egyházpolitikai reformok.',
            },
            {
              name: 'Kandó Kálmán',
              text: 'A Ganz-gyár mérnöke, a villamos vasúti vontatás úttörője.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A dualista gazdaságpolitika' },
        {
          kind: 'text',
          text: 'A magyar kormányok liberális gazdaságpolitikát folytattak, de nem utasították el az állami beavatkozást. Támogatták az ipart (adókedvezmények, állami megrendelések, az 1881-es és későbbi iparfejlesztési törvények), államosították a vasutakat, kiépítették a közlekedést és a hitelrendszert. A cél a külföldi, főleg osztrák iparral szembeni felzárkózás volt. Az 1870-es évek elején egy **gazdasági válság** (1873) bénította a gazdaságot, de **Tisza Kálmán** kormánya az 1870-es évek végére rendezte a költségvetést.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az 1890-es évektől a magyar iparban is megjelentek a **kartellek** és a **monopóliumok**: a cukor-, a gabona- és a vasiparban a nagyvállalatok egyezséget kötöttek az árakról. A koncentráció fő színtere Budapest volt. A modern ipar így is szigetszerű maradt: az ipari munkások aránya alacsony volt, az ország nagy része mezőgazdasági jellegű maradt.',
        },
        {
          kind: 'keypoints',
          title: 'A fejlődés mérlege',
          items: [
            'Előny: a vasút, a gőzmalmok és a gépipar gyors fejlődése, a gazdaság nőtt, a főváros felemelkedett.',
            'Hátrány: a falu és a város, a nagybirtok és a törpebirtok közötti különbség nőtt, az ország nagy része agrár maradt, a munkások és a parasztok életszínvonala alacsony volt.',
            'Következmények: kivándorlás (főleg az 1880-as évektől), munkásmozgalom és agrárszocialista mozgalmak.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Táblázat vagy diagram: a vasúthálózat, a termelés vagy a kivándorlás adatainak értelmezése.',
            'Forrás: a gazdasági kiegyezés előnyei és hátrányai Magyarország szempontjából.',
            'Esszé: a dualizmus kori gazdasági fejlődés tényezői és ellentmondásai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a dualizmus korát „iparosodott országnak” nevezni. Magyarország ekkor agrár-ipari ország volt: a lakosság nagyobb része a mezőgazdaságból élt, az ipar (főleg a budapesti) a gazdaság dinamikus, de kisebb része maradt.',
        },
        {
          kind: 'tip',
          text: 'Egy erős válaszban a gazdasági fejlődés okait (vámunió, vasút, tőke, állami politika) és ellentmondásait (agrár jelleg, egyenlőtlenség, kivándorlás) is megnevezed, és egy-két konkrét példát (MÁV, Ganz, Csepel, Fiume) is mondasz.',
        },
      ],
      topicMatch: ['gazdasági kiegyezés', 'dualizmus'],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'ujkor' },
      quiz: [
        {
          question: 'Mit jelentett a vámunió Ausztria és Magyarország között?',
          options: [
            'Mindkét fél saját vámhatárt tartott fenn.',
            'Nem volt vámhatár köztük, kifelé közös vám védte a területet.',
            'Magyarország vámmentesen exportálhatott a világ minden országába.',
            'Csak a mezőgazdasági termékekre vonatkozott.',
          ],
          answer: 1,
          explanation:
            'A gazdasági kiegyezés közös vámterületet teremtett: a két fél között szabad kereskedelem, kifelé közös vámhatár.',
        },
        {
          question: 'Melyik miniszter államosította a vasutakat és vezette be a zónatarifát?',
          options: ['Tisza Kálmán', 'Eötvös József', 'Baross Gábor', 'Andrássy Gyula'],
          answer: 2,
          explanation: 'Baross Gábor miniszter volt (1886–1892).',
        },
        {
          question: 'Melyik ágazat vezetett a magyar iparban a dualizmus korában?',
          options: ['hajógyártás', 'malomipar és élelmiszeripar', 'textilipar', 'olajipar'],
          answer: 1,
          explanation:
            'A malomipar (Budapest) és az élelmiszeripar volt a vezető ágazat; a gépipar és a villamosipar felfelé törő volt.',
        },
        {
          question: 'Melyik állítás igaz a dualista Magyarország gazdaságára?',
          options: [
            'Ipari ország volt, a lakosság többsége a gyárakban dolgozott.',
            'Agrár-ipari ország volt: a mezőgazdaság maradt a fő ágazat, az ipar gyorsan fejlődött.',
            'A gazdaság stagnált.',
            'Teljesen külön vámterület volt.',
          ],
          answer: 1,
          explanation:
            'Az ipar nőtt, de a lakosság kb. 60%-a még a mezőgazdaságban dolgozott, ezért agrár-ipari országról beszélünk.',
        },
        {
          question: 'Mi a kartell?',
          options: [
            'Állami vasúttársaság.',
            'Független cégek megállapodása az árakról és a piac felosztásáról.',
            'A hitelezők szövetsége.',
            'A munkások érdekvédelmi szervezete.',
          ],
          answer: 1,
          explanation:
            'A kartell a verseny korlátozására kötött egyezség független vállalatok között; a monopólium ezzel szemben egyetlen cég piaci uralma.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Gazdasági kiegyezés', url: wiki('Gazdasági kiegyezés 1867 vámunió') },
        { label: 'Wikipédia: Baross Gábor', url: wiki('Baross Gábor') },
        { label: 'Wikipédia: Magyar Államvasutak', url: wiki('Magyar Államvasutak története') },
      ],
    },
    {
      id: 'budapest-egyesitese-fejlodese',
      subject: 'tortenelem',
      unitId: 'dualizmus',
      title: 'Budapest egyesítése és fejlődése az első világháborúig',
      level: 'emelt',
      requirement: {
        emelt: 'Pest-Buda/Budapest fejlődése a reformkortól az első világháborúig',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1873**: **Pest**, **Buda** és **Óbuda** egyesült **Budapesttel**. A főváros a gazdaság, a közigazgatás és a kultúra központja lett.',
            'A reformkorban Pest már nemzeti központ (Nemzeti Múzeum, Magyar Tudós Társaság, Lánchíd); a kiegyezés után az építkezések a dualizmus kori **urbanizáció** csúcsát hozták.',
            'A népesség 1869 és 1910 között mintegy **270 ezerről 880 ezerre** nőtt (a környékkel együtt a millióhoz közelített).',
            'A város arculatát a **Fővárosi Közmunkák Tanácsa** (1870) határozta meg: Nagykörút, Andrássy út, hidak, a **földalatti** (1896).',
            'A **millennium** (1896) ünnepe a fejlődés csúcspontja volt.',
          ],
        },
        {
          kind: 'map',
          title: 'Pest, Buda és Óbuda',
          places: [
            {
              name: 'Pest',
              lat: 47.497,
              lon: 19.06,
              note: 'a kereskedelmi és közigazgatási központ',
            },
            { name: 'Buda', lat: 47.5, lon: 19.03, note: 'a királyi vár, a hivatalok' },
            { name: 'Óbuda', lat: 47.54, lon: 19.04, note: 'régi település, ipari terület' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A reformkori Pest-Buda' },
        {
          kind: 'text',
          text: 'A 19. század elején Pest és Buda két külön város volt, lakosságuk jórészt német ajkú. A reformkorban Pest gyors fejlődésnek indult: itt kapott helyet a **Magyar Tudós Társaság** (az Akadémia elődje), a **Nemzeti Múzeum**, a Nemzeti Színház; **1849-ben** a Lánchíd összekötötte Pestet és Budát. A „magyar főváros” szerepét 1848-ban már Pest töltötte be: itt zajlott a forradalom, itt ült össze a népképviseleti országgyűlés.',
        },
        { kind: 'heading', text: 'Az egyesítés (1873)' },
        {
          kind: 'text',
          text: 'A kiegyezés után a magyar kormány a fővárost nemzetközi mércével is rendezni akarta. **1870-ben** létrejött a **Fővárosi Közmunkák Tanácsa** (a fejlesztés irányítója, ebben nagy szerepe volt báró **Podmaniczky Frigyes**nek), **1873-ban** pedig törvényileg egyesítették **Pestet, Budát és Óbudát**. Az egyesített város **Budapest** nevet kapta, és a Monarchia második legnagyobb városa lett Bécs után.',
        },
        { kind: 'heading', text: 'A város átalakulása' },
        {
          kind: 'keypoints',
          items: [
            '**Közlekedés**: a **Nagykörút** és az **Andrássy út** kiépítése; hidak: Margit híd (1876), Szabadság híd (1896), Erzsébet híd (1903); a **földalatti vasút** (1896), az európai kontinens első elektromos földalattija; az 1887-től megjelenő villamos.',
            '**Középületek**: a **Magyar Állami Operaház** (**Ybl Miklós**, 1884), az **Országház** (Steindl Imre, 1885–1904), a Műcsarnok, a Vajdahunyad vára és a Hősök tere a millenniumra.',
            '**Infrastruktúra**: vízvezeték, csatornázás, közvilágítás; **Puskás Tivadar** a telefonhírmondót alapította (1893), amely a világ egyik első hírszolgáltató rendszere volt.',
            '**Gazdaság**: vasúti csomópont, a **malomipar** központja, a gépipar és a bankok telephelye (Ganz, Weiss Manfréd), a tőzsde.',
          ],
        },
        {
          kind: 'text',
          text: 'Az építészetben a **historizmus** (történelmi stílusok újraélesztése: neogótika, neoreneszánsz, neobarokk) uralkodott, majd az 1890-es évektől a **szecesszió** jelent meg (például **Lechner Ödön** Iparművészeti Múzeuma). A várost a gyors növekedés mellett komoly ellentmondások jellemezték: a belvárosi paloták mellett a külső kerületekben (Angyalföld, Kőbánya, Ferencváros) zsúfolt bérházak, lakásínség és gyári munkástelepek voltak.',
        },
        { kind: 'heading', text: 'Társadalom és nyelv' },
        {
          kind: 'text',
          text: 'A lakosság növekedését elsősorban a bevándorlás adta. Eleinte sok német és szlovák költözött a városba, ők a magyarosodás (**asszimiláció**) során magyar nyelvűvé váltak. Budapesten élt az ország zsidó lakosságának jelentős része (a főváros népességének mintegy ötöde), a **polgári réteg** és a szabad foglalkozások (orvos, ügyvéd, újságíró) jelentős hányadát adták. Budapest így a vidéktől eltérően gyorsan **magyar nyelvű és polgári** nagyvárossá vált.',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1825',
              text: 'Széchenyi felajánlása a Tudós Társaság (az Akadémia) megalapítására.',
            },
            { date: '1849', text: 'A Lánchíd átadása.' },
            { date: '1870', text: 'A Fővárosi Közmunkák Tanácsának megalakulása.' },
            { date: '1873', text: 'Pest, Buda és Óbuda egyesítése: Budapest.' },
            { date: '1896', text: 'Millennium: kiállítás, a földalatti vasút megnyitása.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Képek (épületek) vagy térképrészlet alapján: melyik korszakhoz tartozik, mit jelentett a fejlesztés?',
            'Statisztika: Budapest népességének alakulása, a lakosság vallási és nyelvi összetétele.',
            'Emelt esszé: Pest-Buda/Budapest fejlődése a reformkortól az első világháborúig.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az egyesítés évét (1873) a kiegyezés (1867) vagy a millennium (1896) évszámával összekeverni. Budapest egyesítése 1873.',
        },
        {
          kind: 'tip',
          text: 'Esszében a fejlődést három szinten mutasd be: ki és mikor szervezte (Közmunkák Tanácsa, kormány), mi épült (közlekedés, középületek, közművek), és milyen volt a társadalmi hatása (bevándorlás, asszimiláció, ellentétek).',
        },
      ],
      topicMatch: ['budapest', 'dualizmus'],
      cards: { subject: 'tortenelem', deck: 'topografia', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik évben egyesült Pest, Buda és Óbuda?',
          options: ['1849', '1867', '1873', '1896'],
          answer: 2,
          explanation: '1873-ban jött létre Budapest. 1896 a millennium éve, 1867 a kiegyezésé.',
        },
        {
          question: 'Melyik város tartozott az egyesítésben Pest és Buda mellé?',
          options: ['Kispest', 'Óbuda', 'Szentendre', 'Vác'],
          answer: 1,
          explanation:
            'Óbuda; a külső településeket (például Kispestet) jóval később csatolták a fővároshoz.',
        },
        {
          question: 'Mi volt a Fővárosi Közmunkák Tanácsának feladata?',
          options: [
            'A szabadságharc emlékművének építése.',
            'A főváros fejlesztésének irányítása (utak, hidak, közművek).',
            'A vasutak államosítása.',
            'A nemzetiségi iskolák felügyelete.',
          ],
          answer: 1,
          explanation:
            'A testület (1870) irányította a főváros nagy építkezéseit, így a Nagykörút és az Andrássy út kiépítését.',
        },
        {
          question: 'Melyik építészeti stílus jellemezte a dualizmus korának nagy középületeit?',
          options: ['romanika', 'historizmus', 'barokk', 'modern építészet'],
          answer: 1,
          explanation:
            'A historizmus (neogótika, neoreneszánsz, neobarokk); az 1890-es évektől a szecesszió is megjelent.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Budapest története', url: wiki('Budapest története 1873 egyesítés') },
        { label: 'Wikipédia: Fővárosi Közmunkák Tanácsa', url: wiki('Fővárosi Közmunkák Tanácsa') },
        { label: 'Wikipédia: Millennium', url: wiki('Millenniumi ünnepségek 1896') },
      ],
    },
    {
      id: 'nemzetisegi-kerdes-dualizmus',
      subject: 'tortenelem',
      unitId: 'dualizmus',
      title: 'Etnikai viszonyok, nemzetiségi törvény, zsidók és cigányok a dualizmus korában',
      level: 'kozep',
      requirement: {
        kozep:
          'Etnikai viszonyok, zsidó emancipáció, cigányok/romák Magyarországon a dualizmus korában',
        emelt:
          'Magyar nemzetiségi politika, a nemzetiségek autonómiatörekvései és irredenta mozgalmai a dualizmus korában',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Magyar Királyság lakosságának **kb. 54%-a magyar** volt (1910): a többiek **románok, szlovákok, németek, ruszinok, szerbek, horvátok**.',
            'A **nemzetiségi törvény** (1868): a magyar politikai nemzet egységes, de a nemzetiségek anyanyelvüket használhatták az iskolában, a közigazgatásban és az egyházban.',
            'A **népiskolai törvény** (1868, Eötvös József): kötelező elemi oktatás (6–12 éves korig), anyanyelven.',
            'A **zsidó emancipáció** (1867): a zsidóság jogegyenlőséget kapott; a **recepció** (1895) a zsidó vallást a bevett vallások közé emelte.',
            'A **cigányok/romák** (az 1893-as összeírás) társadalmilag peremhelyzetben éltek.',
            'A hivatalos nemzetiségi politika **asszimiláló** volt: a magyarosítás erősödött az 1870-es évektől.',
          ],
        },
        {
          kind: 'compare',
          title: 'Az ország lakossága (1910 körül)',
          columns: ['Arány (kb.)', 'Fő településterület'],
          rows: [
            { label: 'magyar', cells: ['54%', 'az Alföld, a Dunántúl, Székelyföld'] },
            { label: 'román', cells: ['16%', 'Erdély, a Partium'] },
            { label: 'szlovák', cells: ['11%', 'a Felvidék'] },
            { label: 'német', cells: ['10%', 'szórványban (svábok, szászok)'] },
            {
              label: 'ruszin, szerb, horvát és más',
              cells: ['együtt kb. 9%', 'Északkelet, Délvidék'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az etnikai viszonyok' },
        {
          kind: 'text',
          text: 'A Magyar Királyság (Horvátország nélkül) lakossága 1910 körül kb. 18 millió volt. A magyarok kb. 54%-ot tettek ki, a nemzetiségek **kisebbségi többséget** alkottak, többnyire összefüggő területeken: a **románok** Erdélyben és a Partiumban, a **szlovákok** a Felvidéken, a **szerbek** a Délvidéken, a **ruszinok** az Északkeleti-Kárpátokban, a **németek** (svábok, szászok) szórtan, az **erdélyi szászok** Erdély délkeleti részén. A magyar nyelvű lakosság növekedése részben a **magyarosodásnak** (asszimiláció) és a nagyvárosok fejlődésének volt köszönhető.',
        },
        { kind: 'heading', text: 'A nemzetiségi törvény (1868)' },
        {
          kind: 'text',
          text: 'Az **1868. évi nemzetiségi törvény** (Eötvös József és Deák Ferenc szellemében) abból indult ki, hogy az állam **egy politikai nemzetet** alkot: a magyar nemzetet, amelybe minden állampolgár beletartozik, bármilyen nyelvű legyen. A törvény biztosította, hogy a nemzetiségek anyanyelvüket használhatják a helyi közigazgatásban, a bíróságokon (alsó fokon), az egyházban és az oktatásban (az iskolákban és részben az egyetemen), és kulturális egyesületeket alapíthatnak. **Területi autonómiát és külön politikai jogokat** viszont nem adott. A törvényt a gyakorlatban sokszor nem tartották be.',
        },
        {
          kind: 'text',
          text: 'A **népiskolai törvény** (1868, **Eötvös József** vallás- és közoktatásügyi miniszter) minden 6–12 éves gyermek számára kötelezővé tette az elemi iskolát; a felekezeti és községi iskolák anyanyelven tanítottak. Ez a művelődés terjedését és az írástudás gyors növekedését hozta.',
        },
        {
          kind: 'keypoints',
          title: 'Az asszimilációs politika eszközei',
          items: [
            'a magyar nyelv kötelező oktatása a népiskolákban (1879-es törvény)',
            'a magyar államnyelv a közigazgatásban és a bíróságokon',
            'a nemzetiségi iskolák és kulturális intézmények (például a három szlovák gimnázium és a Matica slovenská) bezárása az 1870-es években',
            'a névmagyarosítás ösztönzése, a magyar nyelvű állami hivatalok és a vasút',
          ],
        },
        { kind: 'heading', text: 'A zsidóság' },
        {
          kind: 'text',
          text: 'A zsidóság az áprilisi törvények idején nem kapott teljes jogegyenlőséget; a **zsidó emancipáció** (jogegyenlőség) **1867-ben** valósult meg (1867. évi XVII. tc.). **1895-ben** az országgyűlés a zsidó (izraelita) vallást **bevett vallássá** tette (recepció), ez a Wekerle-kormány egyházpolitikai reformjainak része volt (polgári házasság, állami anyakönyvezés). A zsidóság nagy része asszimilálódott, magyarnak vallotta magát, és jelentős szerepet játszott a polgárosodásban. A vallási közösségen belül **neológ** (reformer) és **ortodox** irányzat alakult ki (1868–69-es izraelita kongresszus után). A kor árnyoldala az **antiszemitizmus** megjelenése volt, például a **tiszaeszlári per** (1882–83): a vérvád ellenére a vádlottakat felmentették.',
        },
        {
          kind: 'text',
          text: 'A **cionizmus** a zsidóság nemzeti mozgalma, amely külön zsidó államot akart Palesztinában. Alapítója **Herzl Tivadar**, a Pesten született újságíró volt (az első cionista kongresszus 1897-ben Bázelben ülésezett). A magyarországi zsidóság nagy többsége a cionizmust ekkor elutasította: asszimilációban, a magyar nemzethez való tartozásban gondolkodott.',
        },
        { kind: 'heading', text: 'A cigányok/romák' },
        {
          kind: 'text',
          text: 'A cigányság a dualizmus korában is peremhelyzetben élt. Jellemző foglalkozásaik: zenész, kovács, vályogvető, alkalmi munkás. A hatóságok a letelepítésüket, nyilvántartásukat és a „kóbor” életmód felszámolását akarták (az **1893-as országos cigányösszeírás** ennek fontos állomása). Életkörülményeik rosszak maradtak, és kirekesztéssel is szembesültek, bár a vidéki falvakban sokszor beilleszkedtek a helyi gazdaságba.',
        },
        { kind: 'heading', text: 'Kivándorlás' },
        {
          kind: 'text',
          text: 'Az 1880-as évektől tömegek hagyták el az országot, főleg az Egyesült Államokba (csak az első világháború előtti másfél évtizedben mintegy másfél millióan, közel negyedük később visszatért). A kivándorlók többsége a nincstelen vagy törpebirtokos paraszt volt, a nemzetiségek (szlovákok, ruszinok, németek) aránya pedig magasabb volt a lakosságban betöltött részüknél.',
        },
        {
          kind: 'heading',
          text: 'A nemzetiségek autonómiatörekvései és az irredenta mozgalmak',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A nemzetiségi pártok (a Román Nemzeti Párt, szerb és szlovák vezetők) **autonómiát**, a nyelvi jogok betartását és a választójog kiterjesztését követelték. A románok vezetői 1892-ben **memorandumot** adtak át az uralkodónak (a **memorandum-per** 1894-ben, Kolozsváron); 1895-ben a **nemzetiségi kongresszus** Budapesten a három nemzetiség közös fellépését mutatta. A külföldi központok felé fordulók **irredentizmusa** (az anyaországhoz való csatlakozás vágya, például a román irredentizmus Romániához, a **pánszlávizmus** a szlávok összefogását hirdető eszme) és a **szeparatizmus** (elszakadási törekvés) a Monarchia felbomlásának fontos ellenfele lett. A trónörökös, **Ferenc Ferdinánd** köre a Monarchia átalakításával (trializmus) akarta rendezni a nemzetiségi kérdést, de a magyar elit ezt elutasította.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A magyar nemzetiségi politika így két ponton elégedetlenséget szült: a nemzetiségek az asszimilációt, a magyar politikai elit pedig az autonómiát és a területi egység megbontását utasította el. Az első világháború végén a kisebbségek elszakadása ennek az évtizedes feszültségnek is a következménye volt.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Statisztika vagy térkép: a lakosság nemzetiségi összetétele, a nemzetiségek elhelyezkedése.',
            'Forrás: részlet az 1868-as nemzetiségi törvényből; mit biztosított, mit nem?',
            'Fogalmak: asszimiláció, emancipáció, kivándorlás, autonómia, cionizmus.',
            'Emelt esszé: a magyar nemzetiségi politika és a nemzetiségek törekvései a dualizmus korában.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt mondani, hogy a nemzetiségi törvény (1868) jogokat nem adott. Adott nyelvhasználati jogokat (iskola, egyház, helyi közigazgatás), de nem ismerte el a nemzetiségeket politikai közösségként, és nem adott területi autonómiát.',
        },
        {
          kind: 'tip',
          text: 'A „zsidó emancipáció” és a „zsidó recepció” két külön esemény: az emancipáció (1867) a jogegyenlőség, a recepció (1895) a vallás bevett vallássá válása. Ha évszámot kérnek, nézd meg, melyiket kérdezik.',
        },
      ],
      topicMatch: ['nemzetiségi kérdés', 'zsidó emancipáció', 'dualizmus'],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'ujkor' },
      quiz: [
        {
          question:
            'Hány százalékot tett ki a magyarság a Magyar Királyság lakosságából 1910 körül?',
          options: ['kb. 30%', 'kb. 45%', 'kb. 54%', 'kb. 80%'],
          answer: 2,
          explanation:
            'A magyarok kb. 54%-ot tettek ki; a többi nemzetiség (románok, szlovákok, németek stb.) együtt kb. 46%.',
        },
        {
          question: 'Mit tartalmazott az 1868-as nemzetiségi törvény?',
          options: [
            'Területi autonómiát a nemzetiségeknek.',
            'Az anyanyelv használatát az oktatásban, a helyi közigazgatásban és az egyházban.',
            'A nemzetiségi nyelvek tiltását.',
            'Külön országgyűlést a románoknak.',
          ],
          answer: 1,
          explanation:
            'A törvény egységes politikai nemzetből indult ki, ezért nyelvhasználati jogokat adott, területi autonómiát nem.',
        },
        {
          question: 'Mikor valósult meg a zsidó emancipáció Magyarországon?',
          options: ['1848', '1867', '1873', '1895'],
          answer: 1,
          explanation:
            'A zsidók jogegyenlősége 1867-ben (a kiegyezés évében) lett törvény. 1895-ben a zsidó vallás bevett vallás lett.',
        },
        {
          question: 'Ki szervezte meg az első cionista kongresszust (1897)?',
          options: ['Herzl Tivadar', 'Eötvös József', 'Weiss Manfréd', 'Tisza Kálmán'],
          answer: 0,
          explanation:
            'A cionizmus alapítója Herzl Tivadar (Theodor Herzl), a Pesten született újságíró.',
        },
        {
          question: 'Mit követelt a román memorandum (1892)?',
          options: [
            'A magyar nyelv betiltását Erdélyben.',
            'A románok jogainak és nyelvhasználatának elismerését, autonómiát.',
            'A birodalom megszüntetését.',
            'Horvátország csatlakozását Magyarországhoz.',
          ],
          answer: 1,
          explanation:
            'A román vezetők az uralkodónak benyújtott memorandumban nemzeti jogokat és autonómiát követeltek.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Nemzetiségi törvény (1868)',
          url: wiki('1868. évi XLIV. törvénycikk nemzetiségi egyenjogúság'),
        },
        {
          label: 'Wikipédia: Zsidó emancipáció Magyarországon',
          url: wiki('Zsidó emancipáció Magyarországon'),
        },
        {
          label: 'Wikipédia: Magyarországi cigányság',
          url: wiki('Magyarországi cigányság története'),
        },
      ],
    },
    {
      id: 'partrendszer-polgarosodas-dualizmus',
      subject: 'tortenelem',
      unitId: 'dualizmus',
      title: 'A dualizmus kori pártrendszer, a zsidóság és a németség szerepe',
      level: 'emelt',
      requirement: {
        emelt:
          'Politikai eszmék és pártrendszer (kormánypárt, közjogi ellenzék, agrármozgalmak, nemzetiségi pártok) a dualizmus kori Magyarországon. A zsidóság és a németség szerepe a polgárosodásban',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A pártrendszer a **közjogi kérdés** körül szerveződött: **kormánypárt** (a kiegyezés hívei, 67-esek) és **közjogi ellenzék** (a függetlenségi, 48-as pártok).',
            '**1875**: a Deák-párt és a Tisza Kálmán vezette balközép egyesülésével megalakult a **Szabadelvű Párt**; **Tisza Kálmán** miniszterelnök **1875–1890**.',
            'A századfordulón megjelentek az **agrárszocialista** mozgalmak, a **szociáldemokrácia** és a **nemzetiségi pártok**.',
            '**1904–1905** az **obstrukció**: a Szabadelvű Párt elvesztette a választást; **1905-ben a koalíciós válság** bontakozott ki.',
            'A **zsidóság és a németség** a polgárosodás hordozója lett: a kereskedelemben, az iparban, a pénzügyekben és a szabad foglalkozásokban játszott kiemelkedő szerepet.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Szabadelvű Párt',
              text: 'A dualizmus domináns kormánypártja (1875–1905), a 67-es kiegyezés híve.',
              emelt: true,
            },
            {
              term: 'obstrukció',
              text: 'A parlamenti munka szándékos akadályozása (hosszú beszédek, késleltetés), hogy az ellenzék megakadályozza egy törvény elfogadását.',
              emelt: true,
            },
            {
              term: 'koalíció',
              text: 'Több párt tartós szövetsége a kormányzás vagy az ellenzéki fellépés érdekében.',
              emelt: true,
            },
            {
              term: 'Nemzeti Munkapárt',
              text: 'Tisza István alapította (1910) kormánypárt, a Szabadelvű Párt utódja.',
              emelt: true,
            },
            {
              term: 'delegáció',
              text: 'A közös ügyek intézésére a két ország parlamentje által kiküldött testület.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A 67-esek és a 48-asok' },
        {
          kind: 'text',
          text: 'A politikai életet a kiegyezés megítélése osztotta két táborra. A **67-esek** (a **Deák-párt**, később a **Szabadelvű Párt**) a kiegyezést elfogadták, és az alkotmányos fejlődés keretének tekintették. A **48-asok** (**Függetlenségi és 48-as Párt**) a kiegyezés revízióját követelték: önálló magyar hadsereget, önálló vámterületet, vagyis a **személyi unióra** épülő viszonyt. A tábor eszmei vezére a száműzött Kossuth Lajos volt, a Függetlenségi Pártot később **Kossuth Ferenc** vezette.',
        },
        { kind: 'heading', text: 'A Tisza-korszak (1875–1890)' },
        {
          kind: 'text',
          text: '**Tisza Kálmán** (a balközép vezetője) 1875-ben egyesítette pártját a Deák-párttal, így jött létre a **Szabadelvű Párt**. Tisza **1875–1890** között miniszterelnök volt, ez a magyar politika leghosszabb miniszterelnöki ciklusa. Kormánya a kiegyezésre alapozva rendezte a költségvetést, megerősítette a közigazgatást és kiépítette az állami hatalmat; közben a nyílt szavazás és a cenzusos választójog fenntartotta a kormánypárt tartós többségét.',
        },
        { kind: 'heading', text: 'A századforduló új erői' },
        {
          kind: 'keypoints',
          items: [
            '**Agrármozgalmak**: az 1890-es évek **agrárszocialista** mozgalmai (Békés, Csongrád megye: aratósztrájkok, 1897) a földnélküli parasztok mozgalmai voltak; az állam a csendőrséggel verte le őket.',
            '**Munkásmozgalom**: szociáldemokrata párt (1890), szakszervezetek; a választójog kiterjesztését követelték.',
            '**Nemzetiségi pártok**: Román Nemzeti Párt, szerb és szlovák képviselők (1895-ös nemzetiségi kongresszus).',
            '**Egyházpolitikai harcok** (1894–95): polgári házasság, állami anyakönyvezés, a zsidó vallás bevett vallássá tétele; a katolikus egyház ellenállása után a **Néppárt** (1895) is létrejött.',
          ],
        },
        { kind: 'heading', text: 'A koalíciós válság (1905)' },
        {
          kind: 'text',
          text: 'A hadsereg magyar vezényleti nyelve körüli vita és a katonai létszámemelés (hadügyi törvény) miatt az ellenzék **obstrukciót** folytatott. **Tisza István** kormánya (1903–1905) erőszakkal akarta a házszabályt módosítani, ami a **parlamenti válságot** súlyosbította. **1905 januárjában** az ellenzéki **koalíció** (Függetlenségi Párt, Néppárt és a Szabadelvű Párt kilépett tagjai) megnyerte a választást: ez volt a Szabadelvű Párt első választási veresége, és a kormányzás stabilitása megrendült. Az uralkodó **Fejérváry Géza** katonai („darabont”) kormányát nevezte ki, amely a titkos és általános választójog ígéretével akarta megtörni az ellenzéket. 1906-ban kompromisszum született, és a koalíció alakított kormányt (miniszterelnöke **Wekerle Sándor**).',
        },
        {
          kind: 'text',
          text: '**1910-ben** Tisza István megalapította a **Nemzeti Munkapártot**, amely visszaállította a kormányzati stabilitást; **1913-tól** ismét ő volt a miniszterelnök. Az általános választójog kérdése a háború kitöréséig megoldatlan maradt.',
        },
        { kind: 'heading', text: 'A zsidóság és a németség szerepe a polgárosodásban' },
        {
          kind: 'text',
          text: 'Magyarországon a nemesi társadalom kevésbé vett részt a kereskedelemben és az iparban, ezért ezek a feladatok a **bevándorló németek** (a városok, például Pest-Buda polgársága), a **zsidóság** és más csoportok kezére kerültek. A németek iparosok, kereskedők, bányászok és gyáriparosok voltak, a **zsidóság** a kereskedelemben, a bankszférában, az iparban, a sajtóban és a szabad foglalkozásokban (orvos, ügyvéd) jelent meg nagy arányban. Ők alkották a **polgárság** alapját, és a gazdasági modernizáció fontos szereplői lettek.',
        },
        {
          kind: 'text',
          text: 'Mindkét csoport **asszimilálódott**: átvették a magyar nyelvet, nevet változtattak (névmagyarosítás), és magyarnak vallották magukat. A társadalmi felemelkedés lehetőséget (nemesség, címek) adott, ugyanakkor a konzervatív gondolkodású réteg gyanakodott rájuk, és az 1880-as évektől az antiszemitizmus is megjelent. A németek közül a magyarországi **svábok** és az erdélyi **szászok** esetében az asszimilációs nyomás a nyelvüket és kultúrájukat veszélyeztette.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: pártprogram vagy képviselői beszéd; melyik tábor (67-es vagy 48-as) álláspontját mutatja?',
            'Táblázat: a dualizmus kori pártok összehasonlítása (program, vezető, bázis).',
            'Emelt esszé: a dualizmus kori politikai rendszer működése és válsága (Tisza Kálmán, obstrukció, 1905).',
            'Zsidóság és németség szerepe: miben játszottak vezető szerepet, hogyan illeszkedtek be?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Tisza Kálmán (miniszterelnök 1875–1890) és a Tisza István (1903–05 és 1913–17) neveket összekeverni. Apa és fia, de két külön korszak.',
        },
        {
          kind: 'tip',
          text: 'A polgárosodásról szóló kérdésnél két dolgot mondj: milyen szerepet vállaltak (gazdaság, szabad foglalkozások), és hogyan viszonyult hozzájuk a társadalom (asszimiláció, elismerés, de az antiszemitizmus megjelenése is).',
        },
      ],
      topicMatch: ['dualizmus'],
      cards: { subject: 'tortenelem', deck: 'szemelyek', era: 'ujkor' },
      quiz: [
        {
          question: 'Mikor volt Tisza Kálmán miniszterelnök?',
          options: ['1867–1871', '1875–1890', '1892–1895', '1913–1917'],
          answer: 1,
          explanation:
            'Tisza Kálmán 1875 és 1890 között volt miniszterelnök. Az 1913–1917 Tisza Istváné.',
        },
        {
          question: 'Melyik pártot alapította Tisza István 1910-ben?',
          options: ['Szabadelvű Párt', 'Nemzeti Munkapárt', 'Függetlenségi Párt', 'Néppárt'],
          answer: 1,
          explanation: 'A Nemzeti Munkapárt a Szabadelvű Párt utódja lett.',
        },
        {
          question: 'Mi az obstrukció?',
          options: [
            'A kormány feloszlatása.',
            'A parlamenti munka szándékos akadályozása.',
            'A választójog kiterjesztése.',
            'A közös ügyek megszavazása.',
          ],
          answer: 1,
          explanation:
            'Az obstrukció a parlamenti eljárás szándékos hátráltatása (hosszú beszédek stb.), amellyel az ellenzék megakadályozta a törvények elfogadását.',
        },
        {
          question: 'Melyik esemény kapcsolódik az 1905-ös évhez?',
          options: ['a koalíciós válság', 'Budapest egyesítése', 'a kiegyezés', 'a millennium'],
          answer: 0,
          explanation:
            '1905-ben a Szabadelvű Párt elvesztette a választást; ez a koalíciós válság éve.',
        },
        {
          question: 'Melyik csoport nem tartozott a dualizmus kori polgárosodás fő szereplői közé?',
          options: [
            'a zsidóság',
            'a németség',
            'a kereskedők és gyárosok',
            'a földnélküli napszámosok',
          ],
          answer: 3,
          explanation:
            'A napszámosok a szegény, földnélküli réteg (az agrárszocialista mozgalmak bázisa) voltak, a polgárosodás hordozói a kereskedők, gyárosok, szabadfoglalkozásúak.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Tisza Kálmán', url: wiki('Tisza Kálmán') },
        { label: 'Wikipédia: Szabadelvű Párt (1875)', url: wiki('Szabadelvű Párt 1875') },
        {
          label: 'Wikipédia: Koalíciós válság (1905)',
          url: wiki('1905-ös magyarországi koalíciós válság'),
        },
      ],
    },
  ],
};

export default unit;
