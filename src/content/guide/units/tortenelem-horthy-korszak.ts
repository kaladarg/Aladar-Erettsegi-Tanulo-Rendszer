import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 5.5 (Politika és gazdaság Magyarországon) and 5.6 (Társadalom és életmód). */
const unit: GuideUnit = {
  id: 'horthy-korszak',
  subject: 'tortenelem',
  order: 52,
  title: 'A Horthy-korszak: konszolidáció, válság, oktatás és társadalom',
  requirementRef: '5.5–5.6',
  intro:
    'Hogyan állt talpra Magyarország Trianon után? A Horthy-rendszer kialakulása, a bethleni konszolidáció, a világgazdasági válság hatása, Klebelsberg kultúrpolitikája és a korszak társadalma.',
  requirementSource:
    'A témák, fogalmak, személyek és évszámok az érettségi részletes vizsgakövetelményeinek 5. témaköréből (A két világháború kora) valók, csak a magyarországi politikára, gazdaságra, oktatásra és társadalomra vonatkozó elemek. Ami emelt szintű, azt külön jelöljük.',
  requirements: {
    terms: {
      kozep: [
        'Népszövetség',
        'revízió',
        'Egységes Párt',
        'pengő',
        'Magyar Nemzeti Bank',
        'Szent István-i állameszme',
      ],
      emelt: [
        'legitimizmus',
        'Collegium Hungaricum',
        'dzsentri',
        'vitézi rend',
        'numerus clausus',
        'protekcionizmus',
        'közmunkaprogram',
        'magyar népi mozgalom',
      ],
    },
    people: {
      kozep: [
        'Horthy Miklós',
        'Teleki Pál',
        'Bethlen István',
        'Klebelsberg Kuno',
        'Szent-Györgyi Albert',
      ],
      emelt: ['Gömbös Gyula'],
    },
    dates: {
      kozep: ['1920–1944 a Horthy-rendszer', '1921–1931 Bethlen miniszterelnöksége'],
      emelt: ['1921 a Habsburg-ház trónfosztása', '1929 a gazdasági világválság kezdete'],
    },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'horthy-rendszer-kialakulasa',
      subject: 'tortenelem',
      unitId: 'horthy-korszak',
      title: 'A Horthy-rendszer kialakulása és jellege',
      level: 'kozep',
      requirement: {
        kozep: 'Politikai és gazdasági konszolidáció Magyarországon az 1920-as években',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Tanácsköztársaság bukása után a **Horthy Miklós** vezette Nemzeti Hadsereg vette át a hatalmat; a rendszer **ellenforradalmi**, keresztény-nemzeti jellegű volt.',
            '**1920. március 1.**: a nemzetgyűlés **kormányzóvá** választotta Horthyt. Magyarország **királyság maradt, de király nélkül**.',
            'A Horthy-rendszer **1920–1944** között állt fenn.',
            'Fő célja a **trianoni határok revíziója** és a forradalmak megismétlődésének megakadályozása volt.',
            '1921-ben a Habsburg-restaurációs kísérletek után **Bethlen István** lett a miniszterelnök, és megkezdődött a **konszolidáció**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kormányzó',
              text: 'Az államfő a király helyett; széles jogkörrel (a hadsereg főparancsnoka, kinevezi a kormányt, feloszlathatja az országgyűlést).',
            },
            {
              term: 'revízió',
              text: 'A trianoni békeszerződés határainak felülvizsgálata, a korszak külpolitikájának fő célja.',
            },
            {
              term: 'Szent István-i állameszme',
              text: 'A rendszer ideológiai alapja: az ezeréves magyar állam folytonosságára, a keresztény értékekre és a történelmi hagyományra hivatkozott. Része volt a Szent Korona tiszteletéhez kapcsolódó gondolkodás is.',
            },
            {
              term: 'legitimizmus',
              text: 'A Habsburg-ház (IV. Károly) jogos királyságát valló irányzat.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Honnan indult a rendszer?' },
        {
          kind: 'text',
          text: 'Az 1919-es tanácsköztársaság bukása után az országot a szegedi ellenforradalmi kormány és a **Nemzeti Hadsereg** fölé emelkedő **Horthy Miklós** (volt tengernagy) ellenőrizte. Horthy **1919. november 16-án** vonult be Budapestre. Az átmeneti időszakot **fehérterror** jellemezte: a tanácsköztársaság vezetőit és támogatóit a „különítményesek” üldözték, sokan börtönbe kerültek vagy külföldre menekültek.',
        },
        {
          kind: 'text',
          text: 'Az 1920. januári **nemzetgyűlési választáson** a keresztény-nemzeti és a kisgazda pártok győztek. A nemzetgyűlés **1920. március 1-jén** kormányzóvá választotta Horthyt, aki 1944-ig az ország államfője maradt.',
        },
        { kind: 'heading', text: 'Királyság király nélkül' },
        {
          kind: 'text',
          text: 'A nemzetgyűlés nem akarta kimondani sem a köztársaságot (az 1918–19-es forradalmakat idézte volna), sem a Habsburg-ház visszatérését (a szomszédos államok háborúval fenyegettek). Ezért a **kormányzóság** mint átmeneti megoldás tartósult. A kormányzó nem volt felelős az országgyűlésnek, de a törvényhozást nem ő gyakorolta.',
        },
        {
          kind: 'keypoints',
          title: 'A királykérdés 1921-ben',
          items: [
            '**1921 tavasza**: IV. Károly, az utolsó Habsburg király titokban hazatért, és trónjának visszaadását követelte Horthytól. Horthy visszautasította, a király elhagyta az országot.',
            '**1921 októbere**: IV. Károly másodszor is megkísérelte a hatalom átvételét, katonai erővel. Horthy csapatai megállították.',
            '**1921. november**: a nemzetgyűlés kimondta a **Habsburg-ház trónfosztását**.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A legitimisták (Habsburg-hívők) és a **szabad királyválasztók** (akik szerint az országgyűlés választhatná meg a királyt) vitája végig megosztotta a jobboldalt. A Kisantant (Csehszlovákia, Románia, Jugoszlávia) ellenezte a Habsburg-restaurációt, ezért a trónfosztás külpolitikai megnyugtatás is volt.',
        },
        { kind: 'heading', text: 'A rendszer ideológiája és jellege' },
        {
          kind: 'text',
          text: 'A Horthy-rendszer **keresztény-nemzeti** ideológiájú, antiliberális és antikommunista volt. Az 1919-es forradalmakért sokan a liberális értelmiséget és a zsidóságot tették felelőssé, ez a vád számos későbbi intézkedés (például a **numerus clausus**, lásd a kultúrpolitikai oldalt) hátterében is ott állt. A rendszer hivatkozási alapja a **Szent István-i állameszme** volt: az ezeréves állam folytonossága, amit Trianon megtört, de amit a revízió helyreállíthat.',
        },
        {
          kind: 'compare',
          title: 'Dualizmus kora és Horthy-korszak',
          columns: ['Dualizmus (1867–1918)', 'Horthy-korszak (1920–1944)'],
          rows: [
            { label: 'Államfő', cells: ['király (Habsburg-uralkodó)', 'kormányzó (Horthy)'] },
            {
              label: 'Országterület',
              cells: ['a történelmi Magyarország', 'a trianoni Magyarország'],
            },
            {
              label: 'Fő külpolitikai cél',
              cells: ['a birodalmi keret és a kiegyezés megőrzése', 'a trianoni határok revíziója'],
            },
            {
              label: 'Politikai jelleg',
              cells: [
                'liberális-konzervatív, szűk választójog',
                'konzervatív, antiliberális, korlátozott parlamentarizmus',
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
            'Forrásrészlet (a kormányzóválasztásról szóló törvény, Horthy vagy Bethlen szövege): milyen államforma, milyen jogkörök?',
            'Fogalmak: kormányzó, revízió, Szent István-i állameszme.',
            'Rövid kifejtés: miért kormányzóság lett, és miért nem tért vissza IV. Károly?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Horthy király volt vagy hogy Magyarország köztársaság volt. A helyes válasz: királyság király nélkül, kormányzóval. Teleki Pál 1920–21-ben volt először miniszterelnök, Bethlen István 1921–1931 között: ne keverd össze őket.',
        },
        {
          kind: 'tip',
          text: 'Az érettségi gyakran kérdezi, hogy mi tartotta egyben a rendszert. Három szempontot mondj: ideológia (keresztény-nemzeti, Szent István-i állameszme), külpolitikai cél (revízió), belső rend (az 1919-es forradalmak megismétlődésének megakadályozása).',
        },
      ],
      topicMatch: ['horthy-korszak', 'két világháború között'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor választotta kormányzóvá a nemzetgyűlés Horthy Miklóst?',
          options: [
            '1919. november 16.',
            '1920. március 1.',
            '1920. június 4.',
            '1921. április 14.',
          ],
          answer: 1,
          explanation:
            '1920. március 1-jén. November 16-án Horthy csak bevonult Budapestre, június 4-én írták alá a trianoni békét, április 14-én Bethlen lett miniszterelnök.',
        },
        {
          question: 'Mi volt Magyarország államformája 1920 és 1944 között?',
          options: [
            'Köztársaság',
            'Népköztársaság',
            'Királyság király nélkül, kormányzóval',
            'Tanácsköztársaság',
          ],
          answer: 2,
          explanation:
            'A nemzetgyűlés nem akarta sem a köztársaságot, sem a Habsburg-restaurációt, ezért kormányzóság lett a királyságban.',
        },
        {
          question: 'Mi volt a Horthy-rendszer külpolitikájának legfontosabb célja?',
          options: [
            'A trianoni határok revíziója',
            'Csatlakozás a Kisantanthoz',
            'A Habsburg-birodalom helyreállítása',
            'Semlegesség minden háborúban',
          ],
          answer: 0,
          explanation:
            'A revízió, vagyis a trianoni határok felülvizsgálata volt a korszak külpolitikájának vezérelve.',
        },
        {
          question: 'Mi történt 1921 novemberében?',
          options: [
            'A nemzetgyűlés kimondta a Habsburg-ház trónfosztását.',
            'Horthy lemondott a kormányzóságról.',
            'IV. Károly visszanyerte a trónt.',
            'Kimondták a köztársaságot.',
          ],
          answer: 0,
          explanation:
            'IV. Károly két sikertelen visszatérési kísérlete után a nemzetgyűlés trónfosztást mondott ki.',
        },
        {
          question: 'Kiket neveztek legitimistáknak?',
          options: [
            'Akik szabad királyválasztást akartak.',
            'Akik a Habsburg-ház, IV. Károly jogos királyságát vallották.',
            'Akik köztársaságot akartak.',
            'Akik a kormányzó hatalmát akarták növelni.',
          ],
          answer: 1,
          explanation:
            'A legitimisták szerint a koronához IV. Károlynak volt joga; velük álltak szemben a szabad királyválasztók.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Horthy Miklós', url: wiki('Horthy Miklós') },
        { label: 'Wikipédia: Horthy-korszak', url: wiki('Horthy-korszak') },
        {
          label: 'Wikipédia: IV. Károly királypuccsai',
          url: wiki('IV. Károly visszatérési kísérletei 1921'),
        },
      ],
    },
    {
      id: 'bethleni-konszolidacio',
      subject: 'tortenelem',
      unitId: 'horthy-korszak',
      title: 'A bethleni konszolidáció',
      level: 'kozep',
      requirement: {
        kozep: 'Politikai és gazdasági konszolidáció Magyarországon az 1920-as években',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Bethlen István** miniszterelnök **1921. április 14-től 1931. augusztusig** vezette az országot; a két világháború közötti Magyarország legerősebb kormányfője volt.',
            '**Politikai konszolidáció**: a **Bethlen–Peyer-paktum** (1921. december), az **Egységes Párt** (1922), a szűkített választójog (nyílt szavazás vidéken).',
            '**Gazdasági konszolidáció**: a Népszövetségtől kapott **kölcsön** (1924), a **Magyar Nemzeti Bank** (1924), az új pénz, a **pengő** (1927).',
            '**Külpolitika**: **1922** a **Népszövetségbe** lépés, 1927 olasz–magyar barátsági szerződés; a cél a **békés revízió** előkészítése.',
            'A konszolidáció külföldi hitelekre épült, ezért a válság 1931-ben súlyosan érintette.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1921. április 14.', text: 'Bethlen István miniszterelnök lesz.' },
            {
              date: '1921. december 22.',
              text: 'Bethlen–Peyer-paktum a kormány és a szociáldemokraták között.',
            },
            { date: '1922', text: 'Az Egységes Párt megalakulása; új választójogi rendelet.' },
            { date: '1922. szeptember', text: 'Magyarország a Népszövetség tagja lesz.' },
            {
              date: '1924',
              text: 'Népszövetségi (genfi) kölcsön; megalakul a Magyar Nemzeti Bank.',
            },
            { date: '1925', text: 'Védővámos vámtarifa az ipar védelmére.', emelt: true },
            { date: '1927. január 1.', text: 'A pengő bevezetése.' },
            { date: '1927. április 5.', text: 'Olasz–magyar barátsági szerződés.' },
            { date: '1931. augusztus', text: 'Bethlen lemond a válság közepette.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mit jelent a konszolidáció?' },
        {
          kind: 'text',
          text: 'A **konszolidáció** a rend, a belső béke és a gazdasági stabilitás helyreállítása. 1921-ben az ország a háború, a forradalmak, a trianoni veszteségek és az infláció miatt kaotikus állapotban volt: a szélsőjobboldali különítmények zavarták a rendet, a költségvetés hiányos volt, a korona romlott, és több százezer menekült érkezett az elcsatolt területekről.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Bethlen István',
              text: 'Erdélyi származású gróf, nagybirtokos, miniszterelnök 1921–1931 között. Politikája a hagyományos elit együttműködésén, a rend megszilárdításán és a revízió békés előkészítésén alapult.',
            },
            {
              name: 'Peyer Károly',
              text: 'A Magyarországi Szociáldemokrata Párt (MSZDP) vezetője, a Bethlen–Peyer-paktum másik szereplője.',
            },
            {
              name: 'Teleki Pál',
              text: 'Miniszterelnök 1920–21-ben; később, 1939–41 között is.',
            },
          ],
        },
        { kind: 'heading', text: 'Politikai konszolidáció' },
        {
          kind: 'keypoints',
          items: [
            '**Bethlen–Peyer-paktum (1921)**: a szociáldemokraták legálisan működhettek, a szakszervezetek is, cserébe lemondtak a mezőgazdasági munkások és állami alkalmazottak szervezéséről, a köztársasági propagandáról és a politikai sztrájkról. Így a baloldalt kordában tartotta a kormány.',
            '**Egységes Párt (1922)**: Bethlen a kisgazdapárt egy részét beolvasztotta a kormánypártba. Ez a párt tartósan a parlament többségét adta, vezetője a miniszterelnök volt.',
            '**Választójog (1922)**: kormányrendelettel szűkítették a választójogot; vidéken **nyílt szavazást** vezettek be, titkos szavazás csak Budapesten és néhány nagyobb városban maradt. A kormányzati befolyás így erős volt a falusi választókra.',
            '**A szélsőjobb visszaszorítása**: a fegyveres különítményeket feloszlatták vagy beszervezték az államba.',
            '**A felsőház visszaállítása (1927)**: a törvényhozás kétkamarás lett, ez is a rendszer konzervatív jellegét erősítette.',
          ],
        },
        {
          kind: 'text',
          text: 'A rendszer ezért **korlátozott parlamentarizmus** volt: létezett többpártrendszer, szabadon működő ellenzék (liberálisok, szociáldemokraták, legitimisták), de a kormánypárt, a közigazgatás és a nyílt szavazás miatt a hatalom gyakorlatilag nem cserélődhetett le.',
        },
        { kind: 'heading', text: 'Gazdasági konszolidáció' },
        {
          kind: 'text',
          text: 'A háború utáni években a korona értéke rohamosan csökkent (**infláció**), a költségvetés hiányos volt, a szomszédos országokkal megszakadtak a kereskedelmi kapcsolatok. A kormány a stabilizációhoz külföldi támogatást keresett.',
        },
        {
          kind: 'keypoints',
          items: [
            '**Népszövetségi kölcsön (1924)**: a Népszövetség jóváhagyásával, külföldi pénzügyi ellenőrzés mellett nagy összegű kölcsönt kapott az ország. Ebből stabilizálták a költségvetést és a pénzt.',
            '**Magyar Nemzeti Bank (1924)**: új jegybank, amely a pénzkibocsátást irányította (a háború előtt az Osztrák–Magyar Bank látta el ezt).',
            '**Pengő (1927)**: a korona helyett új, stabil pénz. A korábbi korona jóval kevesebbet ért, ezért a pengő bevezetése a konszolidáció szimbóluma lett.',
            '**Ipar és vámvédelem**: a trianoni Magyarországon az ipar nagyobb szerepet kapott (élelmiszeripar, textilipar); a **védővámok** (1925) és állami támogatás segítette. A **mezőgazdaság** maradt a legnagyobb ágazat.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A konszolidáció gyenge pontja az volt, hogy a külföldi hitelek jelentős része **rövid lejáratú** volt. Amikor 1931-ben a külföldi hitelezők a pénzüket visszakérték, a magyar bankrendszer megingott. Ugyanakkor a földbirtokrendszer lényegében érintetlen maradt: az **1920-as földreform** csak a földterület kis részét érintette, és ez a későbbi társadalmi feszültségek egyik forrása lett.',
        },
        { kind: 'heading', text: 'Külpolitika: kitörés az elszigeteltségből' },
        {
          kind: 'text',
          text: 'Trianon után Magyarországot a **Kisantant** (Csehszlovákia, Románia, Jugoszlávia) vette körül, amely a békerendszer megőrzésére szövetkezett. Bethlen ezért először **a nemzetközi elszigeteltséget** oldotta fel: **1922-ben** az ország belépett a **Népszövetségbe**, ahol a kisebbségvédelem és a revízió ügyében is fellépett. **1927-ben** barátsági szerződést kötött Olaszországgal, amely Mussolini révén támogatta a magyar revíziós törekvéseket. Bethlen a revíziót békés eszközökkel, tárgyalásokkal és a nagyhatalmak támogatásával képzelte el.',
        },
        {
          kind: 'compare',
          title: 'A konszolidáció mérlege',
          columns: ['Eredmények', 'Árnyoldalak'],
          rows: [
            {
              label: 'Politika',
              cells: ['stabil kormányzás, rend', 'korlátozott demokrácia, nyílt szavazás'],
            },
            {
              label: 'Gazdaság',
              cells: [
                'stabil pénz, jegybank, kölcsön',
                'külföldi adósság, a nagybirtok érintetlen',
              ],
            },
            {
              label: 'Külpolitika',
              cells: ['Népszövetség, olasz kapcsolat', 'a revízió nem hozott eredményt'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: Bethlen István beszéde vagy a Bethlen–Peyer-paktum részlete; mit mutat a rendszer jellegéről?',
            'Rövid válasz: mi a konszolidáció, és milyen politikai, gazdasági eszközei voltak?',
            'Időrend: pengő, Nemzeti Bank, Népszövetségbe lépés, olasz szerződés.',
            'Esszé: a bethleni konszolidáció politikai és gazdasági intézkedései.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Magyar Nemzeti Bank (1924) és a pengő (1927) időrendjének felcserélése. Előbb jött a jegybank, utána az új pénz. Ne írd azt sem, hogy Bethlen „diktatúrát” vezetett be: a parlament és az ellenzék működött, de a választás tisztasága korlátozott volt.',
        },
        {
          kind: 'tip',
          text: 'Esszévázlat: 1) a kiinduló helyzet (1921: káosz, infláció, Trianon), 2) politikai konszolidáció (paktum, Egységes Párt, választójog), 3) gazdasági konszolidáció (kölcsön, Nemzeti Bank, pengő), 4) külpolitika (Népszövetség, Olaszország), 5) mérleg: sikerek és gyenge pontok (külföldi hitelek). A mérleg a „tényeken alapuló értékelés”, amiért külön pontot kapsz.',
        },
      ],
      topicMatch: ['bethlen', 'konszolidáció', 'horthy-korszak'],
      cards: { subject: 'tortenelem', deck: 'evszamok', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor volt Bethlen István miniszterelnök?',
          options: ['1919–1920', '1921–1931', '1932–1936', '1939–1941'],
          answer: 1,
          explanation:
            'A vizsgakövetelmény szerint Bethlen miniszterelnöksége 1921–1931. Gömbös 1932–36, Teleki 1939–41 volt miniszterelnök.',
        },
        {
          question: 'Mi volt a Bethlen–Peyer-paktum lényege?',
          options: [
            'Megállapodás Olaszországgal a revízióról.',
            'Megállapodás a Habsburg-házzal a trón visszaadásáról.',
            'Megállapodás a kormány és a szociáldemokraták között a legális működésről.',
            'Megállapodás a kormány és a kisgazdák egyesüléséről.',
          ],
          answer: 2,
          explanation:
            'A szociáldemokraták legálisan működhettek, cserébe nem szervezhették a mezőgazdasági munkásokat és az állami alkalmazottakat.',
        },
        {
          question: 'Mikor vezették be a pengőt?',
          options: ['1924', '1925', '1931', '1927'],
          answer: 3,
          explanation:
            '1927. január 1-jén. 1924-ben a Magyar Nemzeti Bank jött létre, a válság pedig 1929 után mélyült.',
        },
        {
          question: 'Mire használták a Népszövetségtől kapott 1924-es kölcsönt?',
          options: [
            'A pénzügyek és a költségvetés stabilizálására.',
            'Fegyverkezésre és a hadsereg bővítésére.',
            'A jobbágyok földhöz juttatására.',
            'Trianon utáni kárpótlás kifizetésére a szomszédoknak.',
          ],
          answer: 0,
          explanation:
            'A kölcsön a költségvetés egyensúlyának és az új pénz stabilitásának megteremtését szolgálta, külföldi ellenőrzés mellett.',
        },
        {
          question:
            'Miért tette sebezhetővé az országot a bethleni konszolidáció gazdasági modellje?',
          options: [
            'Mert nem volt ipar.',
            'Mert sok rövid lejáratú külföldi hitelre épült, amelyek a válságban visszavonhatók voltak.',
            'Mert a pengő értéktelen volt.',
            'Mert a Népszövetség kizárta Magyarországot.',
          ],
          answer: 1,
          explanation:
            'A hitelek visszahívása 1931-ben bankválságot okozott, ezért a stabilitás a válságban megrendült.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Bethlen István', url: wiki('Bethlen István') },
        { label: 'Wikipédia: Bethlen–Peyer-paktum', url: wiki('Bethlen–Peyer-paktum') },
        { label: 'Wikipédia: Pengő', url: wiki('Pengő') },
      ],
    },
    {
      id: 'vilagvalsag-magyarorszagon',
      subject: 'tortenelem',
      unitId: 'horthy-korszak',
      title: 'A világgazdasági válság hatása Magyarországon az 1930-as években',
      level: 'emelt',
      requirement: {
        emelt:
          'A világgazdasági válság hatása, kezelése és következményei Magyarországon az 1930-as években',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1929**: a New York-i tőzsdekrachtól induló **gazdasági világválság** a hitelekre és mezőgazdasági exportra épülő Magyarországot különösen érte.',
            '**Hatások**: zuhanó gabonaárak, eladósodó gazdák, **munkanélküliség**, **bankválság** (1931), a külföldi hitelek visszavonása.',
            '**1931. augusztus**: Bethlen lemondott. **1932-től Gömbös Gyula** lett a miniszterelnök, aki a gazdaságban és a politikában is erősebb állami szerepet akart.',
            '**Kezelés**: állami beavatkozás, **közmunkák**, devizakorlátozás, **protekcionizmus**, a német piacra való ráutaltság.',
            '**Következmény**: a külpolitika **Olaszország és Németország** felé fordult; erősödött a szélsőjobboldal és a radikális társadalombíráló mozgalom.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'protekcionizmus',
              text: 'Gazdaságvédő politika: vámokkal, korlátozásokkal védik a hazai termelőket a külföldi versenytől.',
              emelt: true,
            },
            {
              term: 'közmunkaprogram',
              text: 'Állami beruházás útépítésre, vízrendezésre, középítkezésre, hogy a munkanélkülieknek munkát adjon.',
              emelt: true,
            },
            {
              term: 'agrárolló',
              text: 'Amikor a mezőgazdasági termékek ára jobban esik, mint az iparcikkeké, így a gazdálkodó rosszabbul jár.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Háttér: mi történt a világban? (az 5.4 témakörből)' },
        {
          kind: 'keypoints',
          items: [
            '**1929. október**: a New York-i tőzsde összeomlása. Túltermelés és spekuláció miatt a részvényárak zuhantak, a bankok az amerikai hiteleket visszahívták.',
            'Az Egyesült Államokban **Roosevelt** **New Deal** programja (1933-tól) állami beavatkozással, közmunkával próbálta a válságot enyhíteni.',
            'Európában a válság a **németországi nácizmus** felemelkedését is segítette (1933), a német gazdaság pedig újra a nemzetközi kereskedelem fontos szereplője lett.',
          ],
        },
        { kind: 'heading', text: 'A válság hatása Magyarországon' },
        {
          kind: 'text',
          text: 'Magyarország kicsi, nyitott, mezőgazdasági exportra (főleg gabonára) és **külföldi hitelekre** épülő gazdaság volt, ezért a válság gyorsan és mélyen érte.',
        },
        {
          kind: 'keypoints',
          items: [
            '**Mezőgazdaság**: a gabonaárak zuhantak, az iparcikkek ára kevésbé (**agrárolló**). A gazdák eladósodtak, sokan elvesztették földjüket.',
            '**Ipar**: a belső kereslet összeomlott, gyárak zártak be vagy kevesebbet termeltek. A **munkanélküliség** nagy lett, a bérek csökkentek.',
            '**Pénzügyek**: 1931 nyarán az osztrák bankválság (Creditanstalt) átterjedt Magyarországra: **bankpánik** tört ki, a külföldi hitelek törlesztését fel kellett függeszteni, bevezették a **devizakorlátozást**.',
            '**Társadalom**: elszegényedés, éhezés a falvakban és a városi peremeken; a középosztály fizetéseit is csökkentették.',
          ],
        },
        { kind: 'heading', text: 'A politikai válasz' },
        {
          kind: 'text',
          text: 'A válság Bethlen rendszerét is megrendítette: **1931 augusztusában** lemondott. Rövid átmeneti kormányzás (Károlyi Gyula) után **1932 októberében Gömbös Gyula** lett a miniszterelnök. Korábban a szélsőjobb, a „fajvédő” irányzat vezetője volt, de miniszterelnökként a kormányzó mellett kellett kormányoznia.',
        },
        {
          kind: 'compare',
          title: 'Bethlen és Gömbös',
          columns: ['Bethlen (1921–1931)', 'Gömbös (1932–1936)'],
          rows: [
            {
              label: 'Politikai stílus',
              cells: ['konzervatív, elitközpontú', 'dinamikus, tömegmozgósító, tekintélyelvű'],
            },
            {
              label: 'Pártja',
              cells: ['Egységes Párt', 'Nemzeti Egység Pártja'],
            },
            {
              label: 'Gazdaságpolitika',
              cells: [
                'külföldi hitelekre építő stabilizáció',
                'állami beavatkozás, Nemzeti Munkaterv, közmunkák',
              ],
            },
            {
              label: 'Külpolitika',
              cells: [
                'Népszövetség, Olaszország, békés revízió',
                'olasz–német tengelyhez közeledés',
              ],
            },
          ],
        },
        {
          kind: 'keypoints',
          title: 'Gömbös programja és eredményei',
          items: [
            '**Nemzeti Munkaterv (1932)**: a gazdaság fellendítésére és a munkanélküliség enyhítésére (közmunka, mezőgazdasági adósságrendezés, iparfejlesztés).',
            'Gömbös **egypártrendszer** és a társadalom fasiszta mintájú, **korporatív** szervezésének gondolatával kacérkodott, de a parlamentarizmust és a kormányzó jogkörét nem tudta felszámolni.',
            '**Külpolitika**: Hitlerhez az elsők között látogatott el (1933), **1934**-ben aláírta az olasz–osztrák–magyar **Római jegyzőkönyveket**, és szoros gazdasági kapcsolatot épített ki Németországgal.',
            '**Németország** vált a magyar mezőgazdasági export legfontosabb vevőjévé, ezért Magyarország gazdaságilag is függővé vált tőle.',
          ],
        },
        {
          kind: 'text',
          text: 'Az 1930-as évek közepére a gazdaság lassan magához tért, főleg a német piacnak és az erősödő fegyvergyártásnak köszönhetően. **1938 márciusában** a **győri program** (Darányi Kálmán kormánya) mintegy egymilliárd pengőt szánt a hadsereg fejlesztésére és az ipar bővítésére. Az 1930-as évek végén a revíziós sikerek (1938: első bécsi döntés) és a német orientáció összefonódtak.',
        },
        {
          kind: 'heading',
          text: 'A válság társadalmi és eszmei következményei',
        },
        {
          kind: 'text',
          text: 'A válság tovább növelte a társadalmi feszültségeket: nőtt a **szélsőjobboldal** népszerűsége (például Szálasi Ferenc mozgalma), és a parasztság helyzetét feltáró **népi írók** is a válság tapasztalatából merítettek (lásd a társadalom és életmód oldalt). A **szociáldemokraták** és a szakszervezetek gyengébb pozícióban voltak, mert a munkanélküliség tompította az érdekérvényesítést.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Statisztika vagy diagram: gabonaár, munkanélküliség, külkereskedelem a válság éveiben; mit mutat?',
            'Forrás Gömbös beszédéből, programjából: milyen politikai és gazdasági célt fogalmaz meg?',
            'Összehasonlítás: a válság kezelése az USA-ban (New Deal) és Magyarországon.',
            'Emelt esszé: a világgazdasági válság hatása, kezelése és következményei Magyarországon.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Gömbös diktatúrát vezetett be, vagy hogy a válságot a külföldi kölcsönök okozták. A válság oka a nemzetközi gazdasági összeomlás volt; a magyar gazdaság sebezhetőségét a hitelfüggés és az agrárexport adta.',
        },
        {
          kind: 'tip',
          text: 'Emelt esszé szerkezete: 1) a világválság kiindulópontja, 2) a magyar gazdaság sebezhetősége (agrárexport, hitelek), 3) hatások (agrárolló, bankválság, munkanélküliség), 4) a kezelés (Bethlen lemondása, Gömbös, közmunka, devizakorlátozás, német piac), 5) következmények (külpolitikai fordulat, szélsőjobb erősödése, fegyverkezés). Az USA-val való összehasonlításnál mondd ki: ott a New Deal demokratikus keretek közt, nálunk tekintélyelvű, külpolitikai irányváltással járt együtt.',
        },
      ],
      topicMatch: ['világgazdasági válság', 'horthy-korszak'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik évet tekintjük a gazdasági világválság kezdetének?',
          options: ['1925', '1929', '1933', '1931'],
          answer: 1,
          explanation:
            'A vizsgakövetelmény szerint 1929 a világválság kezdete (a New York-i tőzsdekrach). 1931 a magyarországi bankválság éve.',
        },
        {
          question: 'Miért volt Magyarország különösen sebezhető a válságban?',
          options: [
            'Mert már nem volt mezőgazdasága.',
            'Mert nem volt külkereskedelme.',
            'Mert a Népszövetség kizárta.',
            'Mert gabonaexportra és külföldi hitelekre épült.',
          ],
          answer: 3,
          explanation:
            'A gabonaárak zuhanása és a külföldi hitelek visszavonása egyszerre sújtotta a magyar gazdaságot.',
        },
        {
          question: 'Ki lett miniszterelnök 1932-ben?',
          options: ['Bethlen István', 'Teleki Pál', 'Gömbös Gyula', 'Darányi Kálmán'],
          answer: 2,
          explanation:
            'Bethlen 1931-ben lemondott, 1932 októberétől Gömbös Gyula volt a miniszterelnök.',
        },
        {
          question: 'Mi volt a Nemzeti Munkaterv?',
          options: [
            'Gömbös 1932-es gazdasági és társadalmi programja a válság enyhítésére.',
            'A Bethlen–Peyer-paktum egyik fejezete.',
            'A tanácsköztársaság földreformja.',
            'A Népszövetség tervezete a jóvátételről.',
          ],
          answer: 0,
          explanation:
            'A Nemzeti Munkaterv közmunkákat, adósságrendezést és iparfejlesztést tartalmazott.',
        },
        {
          question:
            'Melyik ország lett az 1930-as években Magyarország legfontosabb külkereskedelmi partnere?',
          options: ['Egyesült Államok', 'Németország', 'Franciaország', 'Románia'],
          answer: 1,
          explanation:
            'A német piac vette át a mezőgazdasági termékek jelentős részét; ez gazdasági függést is jelentett.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gazdasági világválság', url: wiki('Gazdasági világválság') },
        { label: 'Wikipédia: Gömbös Gyula', url: wiki('Gömbös Gyula') },
        { label: 'Wikipédia: Győri program', url: wiki('Győri program') },
      ],
    },
    {
      id: 'klebelsberg-kulturpolitika',
      subject: 'tortenelem',
      unitId: 'horthy-korszak',
      title: 'Oktatás és kultúrpolitika: Klebelsberg Kuno',
      level: 'kozep',
      requirement: {
        kozep: 'Oktatás és kultúrpolitika Magyarországon',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Klebelsberg Kuno** gróf **1922–1931** között vallás- és közoktatásügyi miniszter volt, Bethlen közeli munkatársa.',
            'Fő gondolata: Trianon után az ország **kultúrfölényével** kell megerősödnie; a nemzet felemelkedése az oktatáson és a tudományon múlik.',
            '**Népiskolák**: több ezer új tanterem, különösen a tanyákon; az írástudatlanság visszaszorítása.',
            '**Középiskola**: az 1924-es törvény új iskolatípusokat vezetett be.',
            '**Egyetemek**: az elcsatolt egyetemek **Szegedre** (Kolozsvár) és **Pécsre** (Pozsony) költöztek; ösztöndíjak és külföldi **Collegium Hungaricumok**.',
            'Az **1920-as numerus clausus** a zsidó származású fiatalok egyetemi felvételét korlátozta.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kultúrfölény',
              text: 'Klebelsberg tétele: a politikai és gazdasági hatalmukat vesztett magyaroknak a műveltségük színvonalával kell a szomszédok fölé emelkedniük.',
            },
            {
              term: 'numerus clausus',
              text: '„Zárt szám”: az egyetemi felvételek korlátozása. Az 1920-as törvény a zsidó származású jelentkezők kiszorítását szolgálta; 1928-ban módosították.',
              emelt: true,
            },
            {
              term: 'Collegium Hungaricum',
              text: 'Külföldi magyar kulturális és tudományos intézet (Bécs, Berlin, Róma), ahol magyar ösztöndíjasok tanulhattak és kutathattak.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Klebelsberg elképzelése' },
        {
          kind: 'text',
          text: 'Klebelsberg szerint Trianon után az országot nem lehet katonai erővel újjáépíteni, ezért a **tudás, a művelődés és a tudomány** kell, hogy megerősítse. Programja a **neonacionalizmus** (újfajta, kultúrát előtérbe helyező nemzeti gondolkodás) és a nyugati példákhoz való felzárkózás kettős célját követte. Pénzügyi alapja a bethleni konszolidáció volt: a gazdasági stabilizáció tette lehetővé az állami beruházásokat az iskolákba.',
        },
        { kind: 'heading', text: 'Az oktatási rendszer fejlesztése' },
        {
          kind: 'keypoints',
          items: [
            '**Népoktatás**: az 1926-os népiskolai program több ezer tantermet és tanítói lakást építtetett, főként a **tanyákon** és a kisebb falvakban, ahol addig alig volt iskola. A cél az **analfabetizmus** (írástudatlanság) csökkentése volt.',
            '**Középiskola**: az **1924-es törvény** a gimnázium és a reáliskola mellett új típusokat (reálgimnázium, líceum) hozott, a modern nyelvek és természettudományok nagyobb súlyával.',
            '**Felsőoktatás**: Trianon után a kolozsvári és a pozsonyi egyetem elveszett, ezért a **kolozsvári egyetem Szegeden**, a **pozsonyi Pécsett** működött tovább. Új épületek és klinikák épültek, **Debrecen** és Budapest egyeteme is fejlődött.',
            '**Tudomány**: kutatóintézetek, laboratóriumok, tudományos ösztöndíjak; a külföldi **Collegium Hungaricumok** (Bécs, Berlin, Róma) a fiatal kutatók képzését szolgálták.',
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Szent-Györgyi Albert',
              text: 'A Szegeden dolgozó biokémikus, **1937**-ben orvosi-élettani **Nobel-díjat** kapott a **C-vitamin** felfedezéséért és a biológiai égési folyamatok kutatásáért. A klebelsbergi tudománypolitika egyik legnagyobb sikere.',
            },
          ],
        },
        { kind: 'heading', text: 'A kultúrpolitika árnyoldala: a numerus clausus' },
        {
          kind: 'text',
          text: 'Az **1920-as numerus clausus** törvény az egyetemekre felvehetők számát a „népfajok és nemzetiségek” országos aránya szerint korlátozta. Gyakorlatilag a **zsidó származású** fiatalokat szorította ki az egyetemekről. Ez a korszak első, a zsidó származásúakat hátrányosan megkülönböztető magyar jogszabálya volt. Hatására sok fiatal külföldön tanult tovább. Klebelsberg **1928-ban** a törvényt módosította (a „népfaj” kifejezést kivette), de a gyakorlatban a korlátozás nagyjából megmaradt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kultúrpolitika a **keresztény-nemzeti** ideológiát is szolgálta: **Szekfű Gyula** *Három nemzedék* (1920) című műve a dualizmus liberalizmusát tette felelőssé a háborús vereségért és a forradalmakért, és a rendszer történelemszemléletét befolyásolta. Az 1930-as években **Hóman Bálint** miniszter alatt a kultúrpolitika jobbra tolódott és a revíziós gondolatot erősítette.',
        },
        {
          kind: 'text',
          text: 'A korszak kultúrájának része volt még a **Magyar Rádió** 1925-ös indulása és a mozik elterjedése, amelyek a műveltség új, tömegeket elérő csatornái lettek (lásd a társadalom és életmód oldalt).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: Klebelsberg szövege a kultúrfölényről vagy az iskolaépítésről; mit mutat a miniszter céljairól?',
            'Rövid válasz: nevezz meg két intézkedést, amely az oktatás fejlesztését szolgálta.',
            'Fogalom: numerus clausus; mi volt a célja, és melyik csoportot sújtotta?',
            'Esszé: Klebelsberg oktatáspolitikája és helye a bethleni konszolidációban.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Klebelsberget összekeverni Eötvös Józseffel (1868, népoktatási törvény) vagy Hóman Bálinttal (1930-as évek). Klebelsberg az **1920-as években** dolgozott. A másik tipikus hiba: a numerus clausust a felsőoktatás általános bővítésének hinni; éppen ellenkezőleg, korlátozás volt.',
        },
        {
          kind: 'tip',
          text: 'Esszében kösd össze a kultúrpolitikát a konszolidációval: a gazdasági stabilitás adott pénzt az iskolákra, a trianoni sokk pedig az oktatásban és tudományban kereste a nemzeti kitörést. A numerus clausust külön említsd, mert ez mutatja a rendszer másik, kirekesztő oldalát.',
        },
      ],
      topicMatch: ['klebelsberg', 'horthy-korszak'],
      cards: { subject: 'tortenelem', deck: 'szemelyek', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Ki volt a vallás- és közoktatásügyi miniszter 1922 és 1931 között?',
          options: ['Hóman Bálint', 'Klebelsberg Kuno', 'Bethlen István', 'Teleki Pál'],
          answer: 1,
          explanation:
            'Klebelsberg Kuno. Hóman Bálint az 1930-as években töltötte be ezt a tisztséget.',
        },
        {
          question: 'Mi volt Klebelsberg népiskolai programjának fő célja?',
          options: [
            'A felsőoktatás díjmentessé tétele.',
            'Az egyházi iskolák megszüntetése.',
            'A katonai nevelés bevezetése.',
            'Új iskolák építése, főleg a tanyákon, és az írástudatlanság csökkentése.',
          ],
          answer: 3,
          explanation:
            'A program több ezer tantermet épített a falvakban és a tanyákon, hogy visszaszorítsa az írástudatlanságot.',
        },
        {
          question: 'Mit írt elő az 1920-as numerus clausus törvény?',
          options: [
            'Az egyetemi felvételek korlátozását, ami főleg a zsidó származású fiatalokat sújtotta.',
            'Az általános tankötelezettség 14 éves korig.',
            'Az egyházi oktatás állami átvételét.',
            'Az egyetemi tandíjak eltörlését.',
          ],
          answer: 0,
          explanation:
            'A törvény az egyetemre felvehetők számát korlátozta, gyakorlatilag a zsidó származású hallgatókat kiszorítva.',
        },
        {
          question: 'Ki kapott 1937-ben orvosi Nobel-díjat a C-vitamin felfedezéséért?',
          options: ['Bay Zoltán', 'Neumann János', 'Szent-Györgyi Albert', 'Kandó Kálmán'],
          answer: 2,
          explanation:
            'Szent-Györgyi Albert, aki a szegedi egyetemen dolgozott, ahová a kolozsvári egyetem költözött át.',
        },
        {
          question: 'Mi volt a Collegium Hungaricum?',
          options: [
            'Egy magyar katonai akadémia.',
            'Külföldi magyar kulturális és tudományos intézet ösztöndíjasoknak.',
            'A numerus clausus végrehajtó szerve.',
            'A legrégebbi magyar egyetem.',
          ],
          answer: 1,
          explanation:
            'Bécsben, Berlinben és Rómában működő intézetek, ahol a magyar fiatal kutatók és művészek tanulhattak.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Klebelsberg Kuno', url: wiki('Klebelsberg Kuno') },
        { label: 'Wikipédia: Numerus clausus (1920)', url: wiki('Numerus clausus 1920 törvény') },
        { label: 'Wikipédia: Szent-Györgyi Albert', url: wiki('Szent-Györgyi Albert') },
      ],
    },
    {
      id: 'tarsadalom-eletmod-horthy-korszak',
      subject: 'tortenelem',
      unitId: 'horthy-korszak',
      title: 'A társadalom és az életmód átalakulása a Horthy-korszakban',
      level: 'emelt',
      requirement: {
        emelt: 'A társadalom és az életmód átalakulása Magyarországon',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A társadalom **vidéki és mezőgazdasági** maradt: a keresők közel fele a földből élt, a **nagybirtok** érintetlen volt, miközben milliók éltek földnélküliként vagy törpebirtokon.',
            '**Trianon után** több százezer menekült érkezett az elcsatolt területekről; sokan vagonlakásokban kezdték az új életet.',
            'A társadalom csúcsán a nagybirtokos **arisztokrácia** és a hivatalnok-**úri középosztály** (köztük a **dzsentri**) állt; Horthy létrehozta a **vitézi rendet**.',
            '**Budapest** milliós nagyváros lett; megjelent a **rádió** (1925), a mozi, a tömegsport.',
            'Az 1930-as években a **népi írók** a parasztság helyzetét tárták fel (**magyar népi mozgalom**).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'dzsentri',
              text: 'A földjét vagy vagyonát részben elvesztett, de nemesi műveltségét és „úri” életmódját őrző kisbirtokos réteg; sokan állami hivatalnokká váltak.',
              emelt: true,
            },
            {
              term: 'vitézi rend',
              text: 'Horthy 1920-ban alapított érdemrendje: katonai érdemekért adták, gyakran kis földbirtokkal (vitézi telek). A tagok neve elé a „vitéz” szó került.',
              emelt: true,
            },
            {
              term: 'magyar népi mozgalom',
              text: 'Az 1930-as évek értelmiségi csoportja (népi írók), amely a parasztság nyomorára figyelmeztetett, földreformot és „harmadik utat” követelt.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A társadalom szerkezete' },
        {
          kind: 'text',
          text: 'Trianon után a magyar társadalom még mindig **agrárjellegű** volt. A földbirtok rendkívül egyenlőtlenül oszlott meg: a földterület mintegy harmada kevés nagybirtokos kezén volt, miközben több millió **agrárproletár** (cseléd, summás, napszámos) és **törpebirtokos** élt a faluban. Ez a társadalmi helyzet adta a „**hárommillió koldus**” kifejezés használatát. Az 1920-as földreform csak szerény eredményt hozott.',
        },
        {
          kind: 'keypoints',
          title: 'A társadalmi rétegek',
          items: [
            '**Arisztokrácia és nagybirtokosok**: a politikai elit része; Bethlen István maga is közéjük tartozott.',
            '**Úri középosztály**: állami hivatalnokok, tisztek, szabadfoglalkozásúak; a **dzsentri** lassan beolvadt ide. A **vitézi rend** (1920) a rendszerhez hű rétegek megjutalmazását szolgálta.',
            '**Polgárság**: kereskedők, iparosok, értelmiségiek; a zsidó származású polgárság jelentős része Budapesten élt.',
            '**Munkásság**: az iparosodó Budapest és a nagyobb ipari városok munkásai; a szociáldemokraták és szakszervezetek képviselték őket.',
            '**Parasztság**: a társadalom legnagyobb rétege, a kis- és törpebirtokosok, földnélküliek; sokan elvándoroltak vagy tanyákon éltek.',
          ],
        },
        {
          kind: 'text',
          text: 'A **Trianon utáni menekültek** (az elcsatolt területekről érkező tisztviselők, tanárok, tisztek) több százezren voltak, és sokáig vagonokban, barakkokban laktak. Ellátásuk, elhelyezésük a konszolidáció egyik társadalmi feladata volt. A **társadalmi mobilitás** korlátozott volt: a származás, a vagyon és a politikai kapcsolatok sokat számítottak.',
        },
        { kind: 'heading', text: 'A szociális helyzet' },
        {
          kind: 'text',
          text: 'Az 1920-as években a kormány a társadalmi béke megőrzése érdekében szociális intézkedéseket is hozott: **1927-ben** törvény szabályozta a kötelező **betegbiztosítást**. A válság idején azonban a szegénység nagyobb lett, a munkanélküli-segély kevés volt, és a nyomortelepek Budapest szélén megsokasodtak.',
        },
        { kind: 'heading', text: 'Életmód és szabadidő' },
        {
          kind: 'keypoints',
          items: [
            '**Budapest** milliós világváros lett, élénk kávéházi, színházi és fürdőkultúrával; a vidék és a főváros között nagy volt a különbség.',
            '**Rádió**: 1925-től rendszeres adás; a háztartások egyre nagyobb része hallgatta.',
            '**Mozi**: a filmszínházak a legolcsóbb szórakozást nyújtották; megjelent a magyar hangosfilm.',
            '**Sport**: a labdarúgás tömegsport lett; a magyar válogatott 1938-ban világbajnoki döntőt játszott.',
            '**Falun** a hagyományos életmód maradt meg: a házak, az étkezés, a viselet régiónként eltért; sok helyen az **egyke** (egy gyermekes családmodell) is megjelent a birtok szétaprózódásának elkerülésére.',
          ],
        },
        { kind: 'heading', text: 'A népi mozgalom' },
        {
          kind: 'text',
          text: 'Az 1930-as évek közepén fiatal írók és társadalomkutatók az országot járva **szociográfiákban** mutatták be a parasztság nyomorát. Ilyen volt **Illyés Gyula** *Puszták népe* (1936) és **Féja Géza** *Viharsarok* (1937) című műve. A mozgalom célja a **földreform**, a paraszti tömegek felemelése és egy, a kapitalizmustól és a nagybirtoktól egyaránt eltérő **„harmadik út”** volt. 1937-ben **Márciusi Front** néven közös programot fogalmaztak meg. A hatalom gyanakodva fogadta őket, a városi értelmiség („urbánusok”) pedig vitatkozott velük.',
        },
        {
          kind: 'text',
          text: 'A korszak végére a társadalmat a **zsidóellenes törvények** (1938-tól) is átalakították: a zsidó polgárok jogfosztása a következő témakör (a holokauszt előzménye).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Statisztika: foglalkozási megoszlás, földbirtok-megoszlás; milyen társadalmat mutat?',
            'Fogalmak: dzsentri, vitézi rend, népi mozgalom.',
            'Forrás: Illyés Gyula vagy Féja Géza szociográfiájának részlete; mit mutat a falu életéről?',
            'Emelt esszé: a társadalom szerkezete és az életmód a két világháború között.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Horthy-kori magyar társadalmat egységesen „úri”-nak gondolni. A falu nyomora és az uralkodó elit életmódja közti különbség volt a korszak egyik fő feszültsége. A népi írókat ne keverd össze a szélsőjobboldali mozgalmakkal.',
        },
        {
          kind: 'tip',
          text: 'Esszében rétegenként mutasd be a társadalmat (elit, középosztály, munkásság, parasztság), majd az életmód-változásokat (város–falu, rádió, mozi, sport), végül a társadalmi feszültségeket (földkérdés, népi mozgalom). Így szerkezetes és tényekkel alátámasztott lesz a válaszod.',
        },
      ],
      topicMatch: ['horthy-korszak', 'két világháború között'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Kik voltak a dzsentrik?',
          options: [
            'Gazdag arisztokraták.',
            'Földnélküli mezőgazdasági munkások.',
            'A nemesi életmódot őrző, hanyatló kisbirtokos és hivatalnok réteg.',
            'A városi gyárosok.',
          ],
          answer: 2,
          explanation:
            'A dzsentri a földjét részben elvesztő, de „úri” életmódját megtartó réteg volt, sokan hivatalnokká váltak.',
        },
        {
          question: 'Mi volt a vitézi rend?',
          options: [
            'A Habsburg-ház lovagrendje.',
            'Horthy által 1920-ban alapított rend, érdemekért adott „vitéz” címmel és gyakran földadománnyal.',
            'A szegedi ellenforradalmi hadsereg.',
            'Egy szociáldemokrata szakszervezet.',
          ],
          answer: 1,
          explanation:
            'A vitézi címet a rendszerhez hű, katonai érdemeket szerzett emberek kapták.',
        },
        {
          question: 'Mi volt a népi írók mozgalmának legfontosabb célja?',
          options: [
            'A Habsburg-restauráció.',
            'A numerus clausus megszigorítása.',
            'Csatlakozás a német birodalomhoz.',
            'A parasztság helyzetének feltárása és földreform, társadalmi megújulás.',
          ],
          answer: 3,
          explanation:
            'Szociográfiáikkal a parasztság nyomorára hívták fel a figyelmet, és földreformot követeltek.',
        },
        {
          question: 'Melyik mű Illyés Gyula szociográfiája?',
          options: ['Puszták népe', 'Három nemzedék', 'Hitel', 'Nemzeti dal'],
          answer: 0,
          explanation:
            'A *Puszták népe* (1936) Illyés műve. A *Három nemzedék* Szekfű Gyuláé, a *Hitel* Széchenyié.',
        },
        {
          question: 'Mit jelentett az 1927-es szociális törvény?',
          options: [
            'Általános választójogot adott a nőknek.',
            'Szabályozta a kötelező betegség- és baleseti biztosítást.',
            'Eltörölte a földbirtokot.',
            'Megszüntette a numerus clausust.',
          ],
          answer: 1,
          explanation:
            'Az 1927-es törvény a kötelező betegség- és baleseti biztosítást szabályozta; a korszak egyik fontos szociális intézkedése volt.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Vitézi Rend', url: wiki('Vitézi Rend') },
        { label: 'Wikipédia: Népi írók', url: wiki('Népi írók mozgalma') },
        {
          label: 'Wikipédia: Magyarország a két világháború között',
          url: wiki('Magyarország története 1920–1944'),
        },
      ],
    },
  ],
};

export default unit;
