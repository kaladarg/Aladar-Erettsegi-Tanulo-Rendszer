import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv, 4. témakör (A nyelvi rendszer), első fele: jelrendszer, hangtan, alaktan és szótan. */
const unit: GuideUnit = {
  id: 'nyelvi-rendszer-hangtan-alaktan',
  subject: 'magyar',
  order: 12,
  title: 'A nyelvi rendszer I.: hangtan, alaktan, szófajok',
  requirementRef:
    'Nyelv 4. A nyelvi rendszer (A nyelv mint jelrendszer; Hangtan; Alaktan és szótan)',
  intro:
    'A nyelv jelrendszer, amelynek szintjei egymásra épülnek: hang, morféma, szó, szószerkezet, mondat, szöveg. Ebben a témakörben a hangokkal és a hangkapcsolódási szabályokkal, a szóelemekkel és a szóalkotással, végül a szófajokkal foglalkozunk. A mondattan külön témakör.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Magyar nyelv, 4. témakör: A nyelvi rendszer). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'nyelvi-jelrendszer-es-szintek',
      subject: 'magyar',
      unitId: 'nyelvi-rendszer-hangtan-alaktan',
      title: 'A nyelv mint jelrendszer, a nyelvi szintek',
      level: 'kozep',
      requirement: {
        kozep: 'A nyelv mint jelrendszer. A nyelvi szintek.',
        emelt: 'A jelnyelvek.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Jel**: valami, ami másra utal, helyettesíti vagy jelzi azt (füst a tűzre, piros lámpa a megállásra, a *fa* szó a fára).',
            '**Jelrendszer**: a jelek és a használatukat szabályozó törvényszerűségek együttese. A nyelv a legfejlettebb jelrendszerünk.',
            'A **nyelvi jel** két oldala: a **hangalak** (jelölő) és a **jelentés** (jelölt). A kapcsolatuk **megegyezésen** alapul, nem természetes: ezért mondják a fát másként magyarul és angolul.',
            '**Nyelvi szintek** (a kisebbtől a nagyobbig): hang, morféma (szóelem), szó, szószerkezet, mondat, szöveg. Mindegyiket más tudományág (nyelvtani rész) vizsgálja.',
            'Az alsóbb szint elemeiből épül a felsőbb szint: a hangokból morfémák, a morfémákból szavak, a szavakból mondatok, a mondatokból szövegek.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'jel',
              text: 'Észlelhető dolog (hang, kép, mozdulat), amely valami másra utal.',
            },
            {
              term: 'jelrendszer',
              text: 'A jelek és a hozzájuk tartozó szabályok rendszere (például a nyelv, a KRESZ, a zenei kottaírás).',
            },
            {
              term: 'nyelvi jel',
              text: 'A nyelv jele: hangalak és jelentés összetartozása (szó, szóelem).',
            },
            {
              term: 'nyelvi szint',
              text: 'A nyelvi egységek egy csoportja, amely azonos nagyságrendű és azonos módon vizsgálható (például a hangok szintje).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Jelek és jelrendszerek' },
        {
          kind: 'text',
          text: 'Az ember az információt **jelek** útján adja tovább. Jelet nemcsak a nyelv használ: nyelvi jel a szó, **nem nyelvi jel** például a közlekedési tábla, a villogó lámpa, a térkép színei, a zenei hangjegy vagy a gesztus (a fejbólintás). A jelrendszerek közül a nyelv a **legsokoldalúbb**, mert bármiről lehet vele beszélni, és saját magát is leírhatjuk vele.',
        },
        {
          kind: 'compare',
          title: 'Nyelvi és nem nyelvi jelek',
          columns: ['Nyelvi jel', 'Nem nyelvi jel'],
          rows: [
            {
              label: 'Példa',
              cells: ['szó: *kutya*, *fut*', 'KRESZ-tábla, piros lámpa, nyíl, hangjegy'],
            },
            {
              label: 'Mire használjuk',
              cells: ['bármilyen téma megfogalmazása', 'szűk, meghatározott közlések'],
            },
            {
              label: 'Szabályok',
              cells: [
                'nyelvtan: hangtan, alaktan, mondattan',
                'jelkészlet és használati megegyezés',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A nyelvi jel felépítése' },
        {
          kind: 'text',
          text: 'A nyelvi jelnek két oldala van: a **hangalak** (amit hallunk vagy leírunk) és a **jelentés** (amit elgondolunk). A kettő viszonya **önkényes, megegyezéses**: nincs természeti oka, hogy a *ház* szó éppen így hangzik. Ezt bizonyítja, hogy más nyelvekben ugyanazt a fogalmat más hangsor jelöli (*Haus*, *house*, *maison*). Ugyanakkor a nyelvet használók közössége a megegyezést **betartja**, ezért a hangalakot nem változtathatjuk meg tetszés szerint.',
        },
        { kind: 'heading', text: 'A nyelvi szintek' },
        {
          kind: 'compare',
          title: 'A nyelvi szintek áttekintése',
          columns: ['Szint és egysége', 'Példa és fő kérdés'],
          rows: [
            {
              label: 'Hangtan',
              cells: ['hang, szótag', '*ház*: h-á-z; milyen hangokból áll, hogyan kapcsolódnak?'],
            },
            {
              label: 'Alaktan',
              cells: ['morféma, szóalak', '*házak*: ház + ak; milyen szóelemekből áll a szóalak?'],
            },
            {
              label: 'Szótan',
              cells: ['szó, szófaj', 'milyen szófajú, hogyan alkotjuk (képzés, összetétel)?'],
            },
            {
              label: 'Mondattan',
              cells: ['szószerkezet, mondat', 'hogyan kapcsolódnak a szavak mondattá?'],
            },
            {
              label: 'Szövegtan',
              cells: ['szöveg', 'hogyan áll össze a mondatokból összefüggő egész?'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A jelentéssel a **jelentéstan** (szemantika) foglalkozik: ez nem külön szint, hanem minden szinten jelen van (a morféma, a szó, a mondat és a szöveg is jelent valamit). A tankönyvek a szintek elnevezésében kissé eltérhetnek: a lényeg a **növekvő nagyságrend** és az, hogy a felsőbb szint az alsóbb elemekből épül.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Jelnyelvek.** A siketek jelnyelve **önálló, természetes nyelv**, saját nyelvtannal; nem a beszélt magyar nyelv jelekkel való lemásolása. Az információt **kézmozdulatokkal**, az **arc és a test** mozgásával is közvetíti, és a térben szerveződik: több információ **egyszerre** is megjelenhet. A magyar jelnyelvet a magyar jogrendben is elismerik (2009-ben törvény mondta ki). A jelnyelv ugyanúgy hangtani (jelelemek), alaktani és mondattani szabályokkal rendelkezik, mint a beszélt nyelvek, csak a csatornája más (látás és mozgás).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Írásbeli: nyelvi feladat egy szöveghez (a szövegértési-nyelvi feladatsorban): jelek, jelrendszerek felismerése, vagy annak megállapítása, melyik szint jelensége látható a példában.',
            'Szóbeli: a magyar nyelvi tételsor 4. témaköre (A nyelvi rendszer): 2–4 tétel; a feladat egy szöveg vagy szövegrészlet, amelyből ki kell emelned és magyaráznod a nyelvi jelenséget.',
            'Emelt szinten kiegészül a jelnyelvek bemutatásával.',
          ],
        },
        {
          kind: 'example',
          title: 'Melyik szint jelensége?',
          problem:
            'Állapítsd meg, melyik nyelvi szinthez tartozik: (a) a *-ban* rag, (b) a *h* és a *k* különbsége, (c) az állítmány és az alany kapcsolata, (d) a címadás és a bekezdések tagolása.',
          solution:
            '(a) **alaktan**: a rag szóelem (morféma). (b) **hangtan**: két mássalhangzó, amely megkülönbözteti a szavakat (*hal*, *kal*). (c) **mondattan**: mondatrészek viszonya. (d) **szövegtan**: a szöveg egésze szerveződik.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a **jelet** a **jelentéssel**: a jel a hangalak és a jelentés együtt, nem csak a szó leírt formája. Az önkényességet se értsd félre: az egyén nem választhat szabadon hangalakot, a közösségi megegyezés kötelező.',
        },
        {
          kind: 'tip',
          text: 'A nyelvi szintekhez egy mintapélda mindig segít: egyetlen szóalakot (például *házakban*) bontsd le hangokra, majd morfémákra, és mondd meg, melyik szint mit lát benne. Így a feleleted a rendszerességet mutatja.',
        },
      ],
      topicMatch: ['jelrendszer', 'nyelvi szint'],
      quiz: [
        {
          question: 'Melyik a nyelvi jel két oldala?',
          options: ['hang és betű', 'hangalak és jelentés', 'szótő és toldalék', 'főnév és ige'],
          answer: 1,
          explanation:
            'A nyelvi jel hangalakból (jelölő) és jelentésből (jelölt) áll; a kettő kapcsolata megegyezésen alapul.',
        },
        {
          question: 'Melyik nem nyelvi jel?',
          options: ['a *ház* szó', 'a KRESZ-tábla', 'a *-ban* rag', 'a mondat'],
          answer: 1,
          explanation:
            'A közlekedési tábla jelrendszere nem a nyelv; a másik három nyelvi egység (szó, szóelem, mondat).',
        },
        {
          question: 'Melyik a helyes sorrend a kisebbtől a nagyobb nyelvi szint felé?',
          options: [
            'szöveg, mondat, szó, hang',
            'hang, morféma, szó, mondat, szöveg',
            'szó, hang, mondat, morféma',
            'mondat, szó, morféma, szöveg',
          ],
          answer: 1,
          explanation:
            'Az alsóbb szint elemeiből épül a felsőbb: hang, morféma, szó, mondat, szöveg.',
        },
        {
          question: 'Mi bizonyítja, hogy a hangalak és a jelentés kapcsolata önkényes?',
          options: [
            'A szavak mindig hangutánzók.',
            'Más nyelvek más hangsorral jelölik ugyanazt a fogalmat.',
            'A szavak jelentése soha nem változik.',
            'Minden szónak csak egy jelentése van.',
          ],
          answer: 1,
          explanation:
            'A *ház*, *Haus*, *house* ugyanazt jelenti, mégis eltérő hangalakkal: a kapcsolat nem természetes, hanem megegyezéses.',
        },
        {
          question: 'Melyik állítás igaz a jelnyelvekre?',
          options: [
            'A beszélt magyar nyelv szó szerinti lemásolása.',
            'Önálló nyelvek, saját nyelvtannal, a térben szerveződnek.',
            'Csak néhány szóból állnak.',
            'Nincs bennük mondattan.',
          ],
          answer: 1,
          explanation:
            'A jelnyelv természetes nyelv, saját szabályrendszerrel; az információ a kéz, az arc és a test mozgásával, térben jelenik meg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nyelvi jel', url: wiki('nyelvi jel') },
        { label: 'Wikipédia: Jelnyelv', url: wiki('jelnyelv') },
        { label: 'Wikipédia: Nyelvtan', url: wiki('nyelvtan magyar') },
      ],
    },
    {
      id: 'magyar-magan-es-massalhangzok',
      subject: 'magyar',
      unitId: 'nyelvi-rendszer-hangtan-alaktan',
      title: 'A magánhangzók és a mássalhangzók rendszere',
      level: 'kozep',
      requirement: {
        kozep: 'A magánhangzók és a mássalhangzók rendszere.',
        emelt: 'A magyar hangállomány ismerete, a hangok alapvető képzési, ejtési jellemzői.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyar hangállomány: **14 magánhangzó** és **25 mássalhangzó**. A hangot nem a betű, hanem az ejtés alapján számoljuk (a *ly* és a *j* ugyanazt a hangot jelöli).',
            '**Magánhangzók**: a levegő akadálytalanul áramlik. Csoportjaik: **rövid és hosszú** (a, á; e, é; i, í; o, ó; ö, ő; u, ú; ü, ű), **magas és mély** hangrendű, **ajakkerekítéses és ajakréses**.',
            '**Mássalhangzók**: a levegő akadályba ütközik. Fontos csoportosítás: **zöngés és zöngétlen**, valamint rövid és hosszú.',
            '**Zöngés és zöngétlen párok**: b és p, d és t, g és k, gy és ty, v és f, z és sz, zs és s, dz és c, dzs és cs. Páratlanok: m, n, ny, l, r, j (zöngések) és h (zöngétlen).',
            'A zöngésség ismerete a **hasonulás** megértésének alapja.',
          ],
        },
        {
          kind: 'compare',
          title: 'Magánhangzók csoportosítása',
          columns: ['Mély hangrendű', 'Magas hangrendű'],
          rows: [
            { label: 'Rövid', cells: ['a, o, u', 'e, i, ö, ü'] },
            { label: 'Hosszú', cells: ['á, ó, ú', 'é, í, ő, ű'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A magánhangzók' },
        {
          kind: 'text',
          text: 'A magyar nyelvben **14 magánhangzót** különböztetünk meg: *a, á, e, é, i, í, o, ó, ö, ő, u, ú, ü, ű*. A magánhangzók szótagot alkothatnak, vagyis egy szótagban egy magánhangzó szerepel, ezért a szótagok száma a szóban a magánhangzók száma.',
        },
        {
          kind: 'keypoints',
          title: 'A magánhangzók három csoportosítási szempontja',
          items: [
            '**Időtartam**: rövid (a, e, i, o, ö, u, ü) és hosszú (á, é, í, ó, ő, ú, ű). A hosszúság jelentést is megkülönböztet: *kerek* és *kerék*, *szel* és *szél*.',
            '**Hangrend**: mély (a, á, o, ó, u, ú) és magas (e, é, i, í, ö, ő, ü, ű). A hangrend az illeszkedésnél fontos.',
            '**Ajakműködés**: ajakkerekítéses (o, ó, ö, ő, u, ú, ü, ű, a) és ajakréses (á, e, é, i, í).',
          ],
        },
        {
          kind: 'text',
          text: 'A magas hangrendű magánhangzók között megkülönböztetünk **semleges** hangokat (*i, í, é, e*): ezek a toldalékolásnál mély hangrendű szavakban is előfordulhatnak (*papír*, *kávé*). Erről az illeszkedésnél lesz szó.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Képzési jellemzők (emelt).** A magánhangzókat a **nyelv függőleges helyzete** (nyelvállás) szerint is csoportosítják: **felső** (zárt: i, í, ü, ű, u, ú), **középső** (é, ö, ő, o, ó) és **alsó** (nyílt: e, a, á). A magas és mély megkülönböztetés a nyelv vízszintes (elöl és hátul) helyzetére utal, az ajakműködés az ajkak állására utal.',
        },
        { kind: 'heading', text: 'A mássalhangzók' },
        {
          kind: 'text',
          text: 'A magyar nyelvben **25 mássalhangzó** van: *b, c, cs, d, dz, dzs, f, g, gy, h, j, k, l, m, n, ny, p, r, s, sz, t, ty, v, z, zs*. A betűk között kétjegyű (*cs, gy, ly, ny, sz, ty, zs*) és háromjegyű (*dzs*) is van, de **egy hangot** jelölnek. Az *ly* betű ejtése megegyezik a *j*-vel.',
        },
        {
          kind: 'compare',
          title: 'Zöngés és zöngétlen mássalhangzók',
          columns: ['Zöngés', 'Zöngétlen'],
          rows: [
            {
              label: 'Párok',
              cells: ['b, d, g, gy, v, z, zs, dz, dzs', 'p, t, k, ty, f, sz, s, c, cs'],
            },
            { label: 'Pár nélküliek', cells: ['m, n, ny, l, r, j (ly)', 'h'] },
          ],
        },
        {
          kind: 'text',
          text: 'A mássalhangzók másik fontos csoportosítása az **időtartam**: rövid vagy hosszú (kettős) mássalhangzó. A hosszú mássalhangzót írásban kettőzéssel jelöljük (*ff, tt, ssz, ggy*). Az időtartam jelentést megkülönböztet: *tol* és *toll*, *hal* és *hall*.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Képzési hely és mód (emelt).** Képzés helye szerint: **ajakhangok** (b, p, m, f, v), **fogmedri hangok** (t, d, n, sz, z, c, dz, l, r, s, zs, cs, dzs), **kemény szájpadlás** (gy, ty, ny, j) és **lágy szájpadlás** (k, g), **gége** (h). Képzés módja szerint: **zárhangok** (b, p, t, d, k, g, gy, ty), **réshangok** (f, v, sz, z, s, zs, h, j), **zár-rés hangok** (c, dz, cs, dzs), **orrhangok** (m, n, ny) és **folyékony hangok** (l, r).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Írásbeli: egy szóban (szóalakban) a hangok csoportosítása; a hangok számának megállapítása (például hány hang van a *csőtörés* szóban).',
            'Szóbeli: a hangtani tétel kifejtése, a csoportosítás szempontjainak bemutatása példákkal.',
            'Emelt szinten a hangok képzési helyét és módját is tudni kell megnevezni.',
          ],
        },
        {
          kind: 'example',
          title: 'Hangok számlálása',
          problem: 'Hány hangból és hány szótagból áll a *gyümölcs* szó? Írd fel a hangokat!',
          solution:
            'Hangok: **gy, ü, m, ö, l, cs**, vagyis **6 hang** (a *gy* és a *cs* egy-egy hang). Szótag: **2** (*gyü-mölcs*), mert két magánhangzó van (ü, ö). Mindkét magánhangzó rövid, magas hangrendű, ajakkerekítéses.',
        },
        {
          kind: 'example',
          title: 'Zöngés vagy zöngétlen?',
          problem: 'Csoportosítsd zöngés és zöngétlen hangokra a *szekrény* szó mássalhangzóit!',
          solution:
            '**sz**: zöngétlen (párja a z); **k**: zöngétlen (párja a g); **r**: zöngés, pár nélküli; **ny**: zöngés, pár nélküli.',
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a **betűk** számát a **hangok** számával keverik. A *ly* egy hang (j), a *dzs* egy hang, a *tyúk* szó eleji *ty* is egy hang, nem kettő.',
        },
        {
          kind: 'tip',
          text: 'Helyesírási kapcsolat: a *ly* és a *j* ugyanazt a hangot jelöli, ezért a helyes írást szavanként kell megtanulni: *ly* van például a *hely*, *folyó*, *gólya* szóban, *j* a *fej*, *ujj*, *bajusz* szóban.',
        },
      ],
      topicMatch: ['hangtan'],
      quiz: [
        {
          question: 'Hány magánhangzója van a magyar nyelvnek?',
          options: ['12', '14', '16', '25'],
          answer: 1,
          explanation: 'A magyar nyelv 14 magánhangzót tartalmaz: hét rövidet és hét hosszút.',
        },
        {
          question: 'Melyik a *k* hang zöngés párja?',
          options: ['t', 'g', 'p', 'h'],
          answer: 1,
          explanation: 'A k zöngétlen, a párja a zöngés g.',
        },
        {
          question: 'Melyik sor mind mély hangrendű magánhangzó?',
          options: ['a, o, ú', 'e, ö, ű', 'i, ó, u', 'á, é, o'],
          answer: 0,
          explanation:
            'Mély hangrendűek: a, á, o, ó, u, ú. A többi sor magas hangrendű hangot is tartalmaz.',
        },
        {
          question: 'Hány hangot jelöl a *csősz* szóban az *sz* betűkapcsolat?',
          options: ['kettőt', 'egyet', 'hármat', 'egyet sem'],
          answer: 1,
          explanation: 'Az *sz* kétjegyű betű, de egyetlen hangot jelöl.',
        },
        {
          question: 'Melyik hang zár-rés hang?',
          options: ['c', 'f', 'n', 'l'],
          answer: 0,
          explanation:
            'A c, dz, cs és dzs zár-rés hangok; az f réshang, az n orrhang, az l folyékony hang.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyar fonológia', url: wiki('magyar fonológia') },
        { label: 'Wikipédia: Magánhangzó', url: wiki('magánhangzó') },
        { label: 'Wikipédia: Mássalhangzó', url: wiki('mássalhangzó') },
      ],
    },
    {
      id: 'hangkapcsolodasi-szabalysagok-helyesiras',
      subject: 'magyar',
      unitId: 'nyelvi-rendszer-hangtan-alaktan',
      title: 'Hangkapcsolódási szabályosságok és a helyesírás',
      level: 'kozep',
      requirement: {
        kozep: 'A hangkapcsolódási szabályosságok típusai és a helyesírás összefüggése.',
        emelt:
          'Hangtani ismeretek: a magyar hangállomány ismerete, a hangok alapvető képzési, ejtési jellemzői.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szóelemek és a szavak találkozásakor a hangok **hatnak egymásra**; ezért a kiejtés gyakran eltér az írástól.',
            '**Hasonulás**: az egyik hang a másikhoz hasonlóvá válik (zöngésség, képzés helye szerint; teljes vagy részleges). Példák: *népdal* [nébdal], *kézzel*, *színpad* [simpad].',
            '**Összeolvadás**: két hangból egy új (gyakran hosszú) hang lesz: *látszik* [lácik], *látja* [láttya].',
            '**Rövidülés**: hosszú mássalhangzó rövid lesz, ha mássalhangzó követi: *hallgat* [halgat].',
            '**Kiesés**: mássalhangzó-torlódásban egy hang kimarad: *mondta* [monta].',
            '**Illeszkedés**: a toldalék magánhangzója a tő hangrendjéhez igazodik (*ház-ban*, *kert-ben*, *kéz-hez*, *ökör-höz*).',
            '**Írásban** csak a **teljes hasonulást** a *-val/-vel* és a *-vá/-vé* toldaléknál jelöljük (*kézzel*, *vízzé*); a többi hangkapcsolódást nem (*népdal*, *hídtól*).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'hasonulás',
              text: 'Szomszédos mássalhangzók közül az egyik a másikhoz hasonlóvá válik.',
            },
            {
              term: 'összeolvadás',
              text: 'Két hang egyetlen, a kettő jegyeit őrző új hanggá válik.',
            },
            { term: 'rövidülés', text: 'Hosszú mássalhangzó rövid lesz mássalhangzó mellett.' },
            { term: 'kiesés', text: 'Három mássalhangzó találkozásakor a középső kimarad.' },
            {
              term: 'illeszkedés',
              text: 'A toldalék hangrend szerint igazodik a szótőhöz (magánhangzó-illeszkedés).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hasonulás' },
        {
          kind: 'text',
          text: 'Hasonulásnál a **szomszédos mássalhangzók** közül az egyik a másik hatására megváltoztatja a tulajdonságát. Három szempont szerint csoportosítjuk:',
        },
        {
          kind: 'compare',
          title: 'A hasonulás típusai',
          columns: ['Típus', 'Példa'],
          rows: [
            {
              label: 'Zöngésség szerint (zöngésítő)',
              cells: [
                'zöngétlen hang zöngéssé válik zöngés előtt',
                '*népdal* [nébdal], *csapda* [csabda]',
              ],
            },
            {
              label: 'Zöngésség szerint (zöngétlenítő)',
              cells: [
                'zöngés hang zöngétlenné válik zöngétlen előtt',
                '*hídtól* [híttól], *vadtól* [vattól]',
              ],
            },
            {
              label: 'Képzés helye szerint',
              cells: [
                'az *n* ajakhang előtt *m*-nek hangzik',
                '*színpad* [simpad], *szénbánya* [szémbánya]',
              ],
            },
            {
              label: 'Teljes hasonulás',
              cells: [
                'az egyik hang a másikkal teljesen egyformává válik',
                '*kézzel* (kéz + vel), *bottal* (bot + val), *ággyal* (ágy + val)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **irány** szerint kétféle van. **Visszaiható** (a második hang hat az elsőre): *népdal*, *hídtól*, *színpad*. **Haladó** (az első hat a másodikra): *kézzel*, *vízzé*, mert a tő végi hang alakítja a toldalék kezdő hangját. A hasonulás **részleges**, ha a hang csak egy tulajdonságában változik (zöngésség, képzés helye), és **teljes**, ha a két hang teljesen egyforma lesz.',
        },
        { kind: 'heading', text: 'Összeolvadás, rövidülés, kiesés' },
        {
          kind: 'text',
          text: '**Összeolvadásnál** két különböző hangból egyetlen új hang jön létre: a *látszik* ejtése [lácik] (*t + sz → c*), a *látja* ejtése [láttya] (*t + j → tty*), az *adja* ejtése [aggya] (*d + j → ggy*). A szó **írott alakja** ilyenkor nem változik.',
        },
        {
          kind: 'text',
          text: '**Rövidülés**: ha hosszú mássalhangzó után másik mássalhangzó következik, a hosszú rövidre változik. A *hallgat* kiejtve [halgat], az *állt* [ált]. **Kiesés**: mássalhangzók torlódásakor a középső hang kimaradhat; a *mondta* kiejtve [monta], a *kezdte* [kezte].',
        },
        { kind: 'heading', text: 'Illeszkedés' },
        {
          kind: 'text',
          text: 'Az **illeszkedés** a magánhangzókat érinti: a toldalék hangrendje a szótő hangrendjéhez igazodik. **Mély hangrendű** szóhoz mély hangú toldalék kapcsolódik (*ház-ban*, *autó-hoz*), **magas hangrendűhöz** magas (*kert-ben*, *kéz-hez*). A **vegyes hangrendű** szavaknál általában az **utolsó magánhangzó** dönt (*hotel-ben*, *sofőr-nek*).',
        },
        {
          kind: 'keypoints',
          title: 'Toldalékok az illeszkedés szerint',
          items: [
            '**Kétalakú** toldalék: *-ban/-ben*, *-nak/-nek*, *-val/-vel*.',
            '**Háromalakú** toldalék: *-hoz/-hez/-höz*, *-on/-en/-ön*: az ajakkerekítéses magas hangrendű szavak (ö, ő, ü, ű) *ö*-s alakot kapnak (*ökör-höz*, *tűz-höz*).',
            '**Egyalakú** toldalék, amely nem illeszkedik: *-ig*, *-ként*, *-kor*.',
          ],
        },
        {
          kind: 'text',
          text: 'A **semleges** magánhangzók (*i, í, é, e*) magas hangrendűek, de mély hangrendű szóban nem változtatják meg a toldalék alakját: *papír-hoz*, *kávé-hoz*. Egyes *i, í, é* magánhangzós tövek mély toldalékot kapnak (*híd-hoz*, *hidak*): ezeket külön meg kell tanulni.',
        },
        { kind: 'heading', text: 'Nyúlás' },
        {
          kind: 'text',
          text: 'A tő végi **a, e** magánhangzó a toldalék előtt megnyúlik: *alma → almák*, *kefe → kefék*. Ez az **időtartam** változása; a tő végi hang írásban is jelölődik (*á, é*).',
        },
        { kind: 'heading', text: 'Hangkapcsolódás és helyesírás' },
        {
          kind: 'text',
          text: 'A magyar helyesírás főleg a **szóelemző** írásmódot követi: a szóelemeket úgy írjuk, ahogy külön-külön írnánk, még akkor is, ha a kiejtés más. Ezért írjuk, hogy *népdal* (nem *nébdal*), *hídtól* (nem *híttól*), *látszik* (nem *lácik*). A **kiejtés szerinti** írásmód csak néhány esetben érvényesül: a teljes hasonulást a **-val/-vel** és **-vá/-vé** toldalékoknál jelöljük (*kézzel*, *szemmel*, *vízzé*). Hasonló hangzás miatt gyakori hiba a *ly* és *j*, valamint a hosszú és rövid mássalhangzók írása.',
        },
        {
          kind: 'warning',
          text: 'A hosszú mássalhangzókat ne rövidítsd írásban: *hallgat* (nem *halgat*), *mondta* (nem *monta*). A rövidülés és a kiesés csak a kiejtésben van meg.',
        },
        {
          kind: 'tip',
          text: 'Helyesírási kapcsolat: összetett szó határán a találkozó azonos mássalhangzókat mindkettőt kiírjuk (*kisszoba*, *nagygyűlés*). A kettős mássalhangzós tőhöz tartozó toldalékoknál a kiejtés ugyan rövidebb, az írás a szóelemeket őrzi.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a hangkapcsolódásokat a **képzési jellemzők** alapján is meg kell tudni magyarázni: a *népdal* [nébdal] példájában a *p* zárhang, zöngétlen, ajakhang, a *d* zárhang, zöngés, fogmedri hang; a *p* a *d* hatására zöngéssé válik, tehát **zöngésítő, visszaiható, részleges hasonulás** történik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Írásbeli nyelvi feladat: egy szövegből ki kell keresni a hasonulásos, összeolvadásos, rövidüléses szavakat, és meg kell nevezni a jelenséget.',
            'Írásos kérdés a jelölésre: miért írjuk *kézzel*, de miért nem jelöljük a *népdal* kiejtését?',
            'Szóbeli tétel: a hangkapcsolódási szabályosságok bemutatása példákkal, a helyesírással való összefüggésük megmutatásával.',
          ],
        },
        {
          kind: 'example',
          title: 'Hangtörvény felismerése',
          problem:
            'Nevezd meg a hangtörvényt a kiejtésben: (a) *hídtól* [híttól], (b) *hallgat* [halgat], (c) *látszik* [lácik], (d) *mondta* [monta], (e) *színpad* [simpad].',
          solution:
            '(a) **zöngétlenítő hasonulás**, visszaiható (a *t* zöngétlenné teszi a *d*-t). (b) **rövidülés** (hosszú *ll* + *g*). (c) **összeolvadás** (*t + sz → c*). (d) **kiesés** (a *d* kimarad *n* és *t* között). (e) **képzés helye szerinti hasonulás** (az *n* a *p* előtt *m*-mé válik).',
        },
        {
          kind: 'example',
          title: 'Hasonulás jelölése',
          problem: 'Írd helyesen a kiejtett alakokat: [kézzel], [híttól], [nébdal], [ággyal].',
          solution:
            '*kézzel* (a teljes hasonulást a *-val/-vel* esetében jelöljük), *hídtól* (nem jelöljük), *népdal* (nem jelöljük), *ággyal* (jelöljük). A szabály: a **-val/-vel** és **-vá/-vé** toldalék *v*-je a tő utolsó mássalhangzójához hasonul, és ezt írásban is kifejezzük.',
        },
        {
          kind: 'example',
          title: 'Illeszkedés',
          problem:
            'Egészítsd ki a megfelelő toldalékkal: ház___ (-ban/-ben), kert___ (-ban/-ben), kéz___ (-hoz/-hez/-höz), ökör___ (-hoz/-hez/-höz).',
          solution:
            '*házban* (mély), *kertben* (magas), *kézhez* (magas, nem kerekített), *ökörhöz* (magas, ajakkerekítéses). A háromalakú toldalék *-höz* alakját az *ö, ő, ü, ű* magánhangzós tövek kapják.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a hangtörvényt a **helyesírási szabállyal**. A hangtörvény a kiejtés változását írja le (*hídtól* [híttól]), a helyesírási szabály azt, hogy milyen alakban írjuk le.',
        },
      ],
      topicMatch: ['hasonulás', 'mássalhangzótörvények', 'hangtan'],
      quiz: [
        {
          question: 'Melyik szóban jelöljük írásban a hasonulást?',
          options: ['népdal', 'kézzel', 'hídtól', 'színpad'],
          answer: 1,
          explanation:
            'A *-val/-vel* toldalék teljes hasonulását írásban is jelöljük (*kézzel*). A *népdal*, *hídtól*, *színpad* kiejtése eltér az írásmódtól.',
        },
        {
          question: 'Milyen hangtörvény érvényesül a *látszik* [lácik] kiejtésében?',
          options: ['rövidülés', 'kiesés', 'összeolvadás', 'nyúlás'],
          answer: 2,
          explanation: 'A *t* és az *sz* egyetlen *c* hanggá olvad össze.',
        },
        {
          question: 'Melyik szóban rövidül a hosszú mássalhangzó a kiejtésben?',
          options: ['hallgat', 'kézzel', 'népdal', 'színpad'],
          answer: 0,
          explanation:
            'A *hallgat* kiejtése [halgat]: a hosszú *ll* mássalhangzó előtt rövid lesz.',
        },
        {
          question: 'Melyik szóalak írása helyes?',
          options: ['nébdal', 'népdal', 'népdall', 'nebdal'],
          answer: 1,
          explanation:
            'A helyesírás szóelemző: a *nép* és a *dal* szóelemet kiírjuk, bár a kiejtés [nébdal].',
        },
        {
          question: 'Melyik toldalék háromalakú?',
          options: ['-ban/-ben', '-nak/-nek', '-ig', '-hoz/-hez/-höz'],
          answer: 3,
          explanation:
            'A *-hoz/-hez/-höz* háromalakú: mély, magas és magas ajakkerekítéses változata van.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Hasonulás (nyelvészet)', url: wiki('hasonulás nyelvészet') },
        { label: 'Wikipédia: Magyar helyesírás', url: wiki('magyar helyesírás') },
        { label: 'Wikipédia: Magánhangzó-harmónia', url: wiki('magánhangzó-harmónia') },
      ],
    },
    {
      id: 'morfemak-szoelemek-szoalkotas',
      subject: 'magyar',
      unitId: 'nyelvi-rendszer-hangtan-alaktan',
      title: 'Morfémák, szóelemek és szóalkotás',
      level: 'kozep',
      requirement: {
        kozep:
          'A morfémák, szóelemek szerepe és helyes használata a szóalak felépítésében, a szószerkezetek alkotásában.',
        emelt:
          'Alaktani sajátosságok: a szótő, a szóelemek szerepe és funkciója, kapcsolódási szabályaik.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Morféma**: a legkisebb jelentéssel bíró nyelvi egység. A szóalak morfémákból (szóelemekből) épül fel.',
            '**Szótő**: a szó alapja, a jelentés hordozója (*ház*, *olvas*). Toldalékmorfémák: **képző**, **jel**, **rag**.',
            '**Képző**: új szót alkot, gyakran szófajt vált (*ír → írás*). **Jel**: módosít (többes szám *-k*, múlt idő *-t*, középfok *-bb*). **Rag**: viszonyt fejez ki a mondatban (*-ban*, *-nak*, *-t*).',
            'Általános sorrend: **tő + képző + jel + rag** (*tanítóknak*: tanít + ó + k + nak).',
            '**Szóalkotási módok**: szóképzés, szóösszetétel; ritkábban rövidülés, mozaikszó, hangutánzás és hangfestés.',
          ],
        },
        {
          kind: 'compare',
          title: 'A toldalékmorfémák fajtái',
          columns: ['Szerep', 'Példa'],
          rows: [
            {
              label: 'Képző',
              cells: ['új szót hoz létre, szófajt is válthat', '*olvas-ás*, *jó-ság*, *kert-ész*'],
            },
            {
              label: 'Jel',
              cells: [
                'a szót módosítja (szám, idő, mód, fok, birtoklás)',
                '*ház-ak*, *írt*, *szép-ebb*',
              ],
            },
            {
              label: 'Rag',
              cells: ['a mondatbeli viszonyt fejezi ki', '*ház-ban*, *könyv-et*, *olvas-ok*'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Morféma, szótő, toldalék' },
        {
          kind: 'text',
          text: 'A **morféma** a nyelv legkisebb jelentéshordozó egysége. Két fő típusa a **szótő** (az alapjelentést hordozza) és a **toldalék** (kiegészíti, módosítja, viszonyt fejez ki). A toldalékok három csoportja: a **képző**, a **jel** és a **rag**. A szóalak felépítése általában: **tő + képző(k) + jel(ek) + rag**.',
        },
        {
          kind: 'text',
          text: 'A **szótő** lehet **egyszerű** (*ház*), **képzett** (*olvasás*) vagy **összetett** (*iskolatáska*). A tő képzővel továbbépíthető, ezért a szóelemzésnél mindig a legegyszerűbb tőig kell visszabontani.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'képző',
              text: 'A szótőhöz kapcsolódó toldalék, amely **új szót** hoz létre (*tanít → tanítás*, *barát → barátság*). Gyakran **szófajt vált**.',
            },
            {
              term: 'jel',
              text: 'A szó **jelentését módosítja** vagy nyelvtani információt hordoz: többes szám jele *-k*, múlt idő jele *-t/-tt*, felszólító mód jele *-j*, középfok jele *-bb*.',
            },
            {
              term: 'rag',
              text: 'A **mondatbeli viszonyt** fejezi ki: határozórag (*-ban*, *-ra*, *-nak*), tárgyrag (*-t*), igei személyrag (*-m*, *-sz*, *-nk*).',
            },
            {
              term: 'kötőhang',
              text: 'A toldalék és a tő között megjelenő magánhangzó, amely a kiejtést könnyíti (*ház-a-k*, *könyv-e-t*).',
            },
          ],
        },
        {
          kind: 'warning',
          text: 'Ugyanaz a hangalak különböző szóelem lehet. A *-t* lehet **tárgyrag** (*könyvet*, *szót*) és **múlt idő jele** (*írt*, *látott*). A szóelem szerepét mindig a szóban betöltött feladat dönt el.',
        },
        {
          kind: 'example',
          title: 'Szóelemzés: tanítóknak',
          problem: 'Bontsd szóelemekre a *tanítóknak* szót!',
          solution:
            '**tanít** (szótő) + **ó** (képző, igéből főnevet alkot) + **k** (többes szám jele) + **nak** (határozórag). A szóalak négy morfémából áll.',
        },
        {
          kind: 'example',
          title: 'Szóelemzés: olvasgatnánk',
          problem: 'Bontsd szóelemekre az *olvasgatnánk* igealakot!',
          solution:
            '**olvas** (szótő) + **gat** (gyakorító képző) + **ná** (feltételes mód jele) + **nk** (igei személyrag, 1. személy, többes szám).',
        },
        {
          kind: 'example',
          title: 'Szóelemzés: kerékpárosoknak',
          problem: 'Bontsd szóelemekre a *kerékpárosoknak* szót!',
          solution:
            '**kerék + pár** (összetett tő, szóösszetétel) + **os** (képző) + **o** (kötőhang) + **k** (többes szám jele) + **nak** (rag). A szóelemzésben először az összetételt, majd a képzőt, jelet, ragot határozzuk meg.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kapcsolódási szabályok (emelt).** A toldalékok sorrendje kötött: a **képző** a tőhöz közvetlenül kapcsolódik, utána a **jel**, legkívül a **rag** áll (*barát-ság-ok-nak*). A tő a toldalékolásnál változhat: **tőváltozat** (*tó → tavat*, *ló → lovat*), **kiesés** (*sátor → sátrak*), **nyúlás** (*alma → almát*). A kapcsolódás **hangrendi** és **mássalhangzó-illeszkedési** szabályokat követ (lásd az előző oldal).',
        },
        { kind: 'heading', text: 'Szóalkotási módok' },
        {
          kind: 'text',
          text: 'A szókincs gyarapodásának belső módja a **szóalkotás**. A leggyakoribb módok a **szóképzés** és a **szóösszetétel**.',
        },
        {
          kind: 'compare',
          title: 'Szóképzés és szóösszetétel',
          columns: ['Szóképzés', 'Szóösszetétel'],
          rows: [
            {
              label: 'Módja',
              cells: ['szótő + képző', 'két (vagy több) szó összekapcsolása'],
            },
            {
              label: 'Példa',
              cells: [
                '*kert → kertész*, *jó → jóság*',
                '*iskola + táska → iskolatáska*, *vas + út → vasút*',
              ],
            },
            {
              label: 'Az új szó',
              cells: ['új szó, gyakran más szófajú', 'egy szó, új, egységes jelentéssel'],
            },
          ],
        },
        {
          kind: 'keypoints',
          title: 'A szóösszetétel fajtái',
          items: [
            '**Alárendelő**: az előtag meghatározza az utótagot (*iskolatáska*, *vasút*, *hóember*).',
            '**Mellérendelő**: a két tag egyenrangú (*ki-be*, *fel-alá*, *kék-fehér*).',
            '**Ikerszó**: ismétlődő vagy rímelő elemekből áll (*csiri-biri*, *ici-pici*).',
            '**Szóismétlés**: azonos szavak egymás után (*nagy-nagy*, *lassan-lassan*).',
          ],
        },
        { kind: 'heading', text: 'Ritkább szóalkotási módok' },
        {
          kind: 'terms',
          items: [
            {
              term: 'szórövidülés',
              text: 'A szó rövidebb alakja önállósul: *autóbusz → busz*, *televízió → tévé*.',
            },
            {
              term: 'mozaikszó',
              text: 'Szavak kezdőbetűiből vagy részeiből alkotott szó, például a betűszó: *MÁV* (Magyar Államvasutak), *ELTE*.',
            },
            {
              term: 'hangutánzás',
              text: 'Hangot utánzó szó: *kakukk*, *kopog*.',
            },
            {
              term: 'hangfestés',
              text: 'A hangulatot, mozgást érzékeltető szó: *libeg*, *csillog*.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Helyesírási kapcsolat: az **alárendelő összetételek** általában egybe íródnak (*iskolatáska*, *vasút*), a **mellérendelők** és az **ikerszók** kötőjellel (*ki-be*, *csiri-biri*). A betűszókat nagybetűvel írjuk (*MÁV*), a toldalék kötőjellel kapcsolódik (*MÁV-nál*).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóelemzés: egy szó bontása szótőre, képzőre, jelre, ragra; a szóelemek típusának megnevezése.',
            'Szóalkotás: meg kell határozni, hogy egy szó képzett, összetett vagy ritkább módon alkotott (*busz*, *MÁV*).',
            'Helyes használat: a megfelelő toldalék kiválasztása (*három könyv*, nem *három könyvek*; hol? *-ban/-ben*, hová? *-ba/-be*).',
            'Szóbeli tételben a szóelemek rendszerezése, példákkal.',
          ],
        },
        {
          kind: 'example',
          title: 'Szóalkotási mód felismerése',
          problem:
            'Határozd meg a szóalkotás módját: (a) *kertész*, (b) *vasút*, (c) *csiri-biri*, (d) *busz*, (e) *MÁV*, (f) *kakukk*.',
          solution:
            '(a) **szóképzés** (kert + ész). (b) **alárendelő szóösszetétel** (vas + út). (c) **ikerszó**. (d) **szórövidülés** (autóbusz). (e) **mozaikszó** (betűszó). (f) **hangutánzás**.',
        },
        {
          kind: 'example',
          title: 'Szóelemzés összetett szóval',
          problem: 'Elemezd a *tanulmányozás* szót!',
          solution:
            '**tanul** (tő) + **mány** (főnévképző) + **oz** (igeképző) + **ás** (főnévképző). A szó három képzővel épül: ige → főnév → ige → főnév. Ez **képzett szó**.',
        },
        {
          kind: 'example',
          title: 'Helyes használat',
          problem:
            'Javítsd a hibás alakokat: *három könyvek*, *Pécsben megyek*, *a barátom hozzá*.',
          solution:
            '*három könyv* (számnév után egyes szám), *Pécsre megyek* (hová? kérdésre -ra/-re), *a barátomhoz* (a -hoz toldalék a szóhoz kapcsolódik).',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a **képzőt** a **raggal**. A képző új szót alkot (*olvas → olvasás*), a rag ugyanazt a szót teszi mondatba illeszthetővé (*olvasást*). A **jel** a kettő között áll: módosítja a szót, de nem hoz létre új szót.',
        },
      ],
      topicMatch: ['szóelemek', 'szóalakok', 'szóalkotás', 'morfém'],
      quiz: [
        {
          question: 'Melyik szóelem a képző a *tanítóknak* szóban?',
          options: ['tanít', 'ó', 'k', 'nak'],
          answer: 1,
          explanation:
            'A *tanít* szótő, az *ó* képző (igéből főnevet alkot), a *k* jel, a *nak* rag.',
        },
        {
          question: 'Melyik szóelem fejezi ki a mondatbeli viszonyt?',
          options: ['szótő', 'képző', 'rag', 'jel'],
          answer: 2,
          explanation: 'A rag a szó mondatbeli viszonyát fejezi ki, például *házban*, *könyvet*.',
        },
        {
          question: 'Melyik alárendelő összetett szó?',
          options: ['ki-be', 'fel-alá', 'iskolatáska', 'csiri-biri'],
          answer: 2,
          explanation:
            'Az *iskolatáska* előtagja meghatározza az utótagot (alárendelő összetétel), a többi mellérendelő vagy ikerszó.',
        },
        {
          question: 'Melyik mozaikszó?',
          options: ['busz', 'MÁV', 'kakukk', 'asztalos'],
          answer: 1,
          explanation:
            'A *MÁV* betűszó, mozaikszó. A *busz* szórövidülés, a *kakukk* hangutánzás, az *asztalos* képzett szó.',
        },
        {
          question: 'Melyik szóban változik a szótő toldalékoláskor?',
          options: ['ház → házat', 'tó → tavat', 'kert → kertet', 'asztal → asztalt'],
          answer: 1,
          explanation: 'A *tó* tő a toldalék előtt *tav-* alakot vesz fel, ez tőváltozat.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Morféma', url: wiki('morféma') },
        { label: 'Wikipédia: Szóképzés', url: wiki('szóképzés') },
        { label: 'Wikipédia: Szóösszetétel', url: wiki('szóösszetétel') },
      ],
    },
    {
      id: 'magyar-szofaji-rendszer',
      subject: 'magyar',
      unitId: 'nyelvi-rendszer-hangtan-alaktan',
      title: 'A magyar szófaji rendszer',
      level: 'kozep',
      requirement: {
        kozep: 'A magyar nyelv szófaji rendszere: az alapszófajok, a viszonyszók és a mondatszók.',
        emelt:
          'A szavak szófaji rendszerbe sorolásának kritériumai, hagyományai, egy lehetséges szófaji rendszer bemutatása. Szófajváltás, többszófajúság, átmeneti szófajok.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szófajok három nagy csoportja: **alapszófajok** (önálló jelentésű szavak), **viszonyszók** (viszonyt fejeznek ki), **mondatszók** (önmagukban mondat értékűek).',
            '**Alapszófajok**: ige, főnév, melléknév, számnév, névmás, határozószó.',
            '**Viszonyszók**: névelő, névutó, kötőszó, igekötő.',
            '**Mondatszók**: módosítószó (*talán*, *bizony*, *igen*, *nem*), indulatszó (*jaj*, *hűha*), hangutánzó és hangulatfestő szó (*puff*, *kopp*).',
            'A szófaj meghatározásához három szempont segít: **jelentés** (mit jelöl?), **toldalékolhatóság** (milyen toldalékot kaphat?) és **mondatbeli szerep** (milyen mondatrész lehet?).',
          ],
        },
        {
          kind: 'compare',
          title: 'A szófajok csoportjai',
          columns: ['Szófajok', 'Példák'],
          rows: [
            { label: 'Ige', cells: ['cselekvés, történés, létezés', '*fut*, *esik*, *van*'] },
            {
              label: 'Főnév',
              cells: ['dolog, személy, fogalom neve (ki? mi?)', '*ház*, *Péter*, *szeretet*'],
            },
            { label: 'Melléknév', cells: ['tulajdonság (milyen?)', '*szép*, *kék*, *okos*'] },
            {
              label: 'Számnév',
              cells: ['mennyiség, sorszám (hány? hányadik?)', '*három*, *harmadik*, *sok*'],
            },
            {
              label: 'Névmás',
              cells: ['más szót helyettesít vagy rá utal', '*ő*, *ez*, *ki?*, *valaki*'],
            },
            {
              label: 'Határozószó',
              cells: ['körülményt fejez ki (hol? hogyan?)', '*itt*, *nagyon*, *lassan*'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Alapszófajok' },
        {
          kind: 'text',
          text: 'Az alapszófajokat **önálló jelentésük** és a **mondatban betöltött szerepük** különbözteti meg. A **főnév**, a **melléknév** és a **számnév** névszó: ragozhatók, a **névmás** más névszót vagy szót helyettesít. Az **ige** a cselekvést, történést, létezést fejezi ki, személyragokkal és időjelekkel ragozódik. A **határozószó** többnyire toldalékolatlan körülményszó (*itt*, *most*, *nagyon*).',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'főnév',
              text: 'Személy, állat, dolog, fogalom neve. Fajtái: köznév és tulajdonnév; egyedi és gyűjtőnév; konkrét és elvont.',
            },
            {
              term: 'melléknév',
              text: 'Tulajdonságot jelöl, jelzőként áll (*piros alma*). Fokozható: *szép, szebb, legszebb*.',
            },
            {
              term: 'számnév',
              text: 'Határozott (*három*, *harmadik*) és határozatlan (*sok*, *kevés*) számnév; fajtái: tőszámnév, sorszámnév, törtszámnév.',
            },
            {
              term: 'névmás',
              text: 'Személyes (*én, te, ő*), mutató (*ez, az*), kérdő (*ki? mi?*), vonatkozó (*aki, ami*), határozatlan (*valaki*), általános (*mindenki*), visszaható (*magam*), birtokos (*enyém*), kölcsönös (*egymás*).',
            },
            {
              term: 'ige',
              text: 'Cselekvést, történést, létezést jelöl. Igenevei (*olvasó, olvasott, olvasni, olvasva*) az igéből képzett, névszói vagy határozói szerepű alakok.',
            },
            {
              term: 'határozószó',
              text: 'Körülményt, módot, helyet, időt fejez ki: *itt*, *most*, *nagyon*, *lassan*.',
            },
          ],
        },
        { kind: 'heading', text: 'Viszonyszók' },
        {
          kind: 'text',
          text: 'A viszonyszók **nem önálló mondatrészek**, hanem más szavakhoz kapcsolódva viszonyt fejeznek ki.',
        },
        {
          kind: 'keypoints',
          items: [
            '**Névelő**: *a, az* (határozott), *egy* (határozatlan).',
            '**Névutó**: névszóhoz kapcsolódik, a toldalékoló viszonyt fejezi ki: *a ház mögött*, *asztal alatt*, *óra után*.',
            '**Kötőszó**: szavakat, mondatrészeket, mondatokat kapcsol: *és, de, vagy, mert, hogy*.',
            '**Igekötő**: az igéhez kapcsolódik, irányt, módot, befejezettséget fejez ki: *el-megy*, *meg-ír*, *fel-kel*.',
          ],
        },
        { kind: 'heading', text: 'Mondatszók' },
        {
          kind: 'text',
          text: 'A mondatszók **önmagukban mondat értékűek**, nem tagolhatók mondatrészekre. Fajtái: **módosítószó** (*talán*, *bizony*, *igen*, *nem*), **indulatszó** (*jaj*, *hűha*, *ó*), **hangutánzó és hangulatfestő szó** (*puff*, *kopp*). Pl. Például az *Eljössz?* kérdésre adott *Igen.* válasz egyetlen mondatszó.',
        },
        {
          kind: 'example',
          title: 'Szófajok felismerése',
          problem: 'Határozd meg minden szó szófaját: *Az öreg ember lassan ment a ház mögött.*',
          solution:
            '*Az* névelő; *öreg* melléknév; *ember* főnév; *lassan* határozószó; *ment* ige; *a* névelő; *ház* főnév; *mögött* névutó.',
        },
        {
          kind: 'example',
          title: 'Szófajok egy összetettebb mondatban',
          problem: 'Elemezd: *Jaj, ki hozta ide ezt a három könyvet, és mikor?*',
          solution:
            '*Jaj* indulatszó (mondatszó); *ki* névmás (kérdő); *hozta* ige; *ide* határozószó; *ezt* névmás (mutató); *a* névelő; *három* számnév; *könyvet* főnév; *és* kötőszó; *mikor* névmás (kérdő).',
        },
        {
          kind: 'tip',
          text: 'A szófaj felismeréséhez tegyél fel kérdést: **ki? mi?** (főnév), **milyen?** (melléknév), **hány?** (számnév), **mit csinál?** (ige), **hol? hogyan? mikor?** (határozószó). Ha a szó önmagában mondat, akkor mondatszó. Ha csak viszonyít, viszonyszó.',
        },
        {
          kind: 'warning',
          text: 'A tankönyvek a szófaji rendszert kissé eltérően csoportosíthatják (például a segédige, a névmási határozószók besorolása). Az érettségin a tanult rendszer elvei számítanak, de az indoklásnak következetesnek kell lennie.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Írásbeli nyelvi feladat: egy mondatban vagy szövegrészletben az aláhúzott szavak szófajának megnevezése.',
            'Szóbeli tétel: a magyar szófaji rendszer bemutatása (alapszófajok, viszonyszók, mondatszók), példákkal.',
            'Emelt szinten: a besorolás kritériumainak és az átmeneti jelenségeknek a tárgyalása (lásd az emelt oldalt).',
          ],
        },
        {
          kind: 'example',
          title: 'Szóbeli tétel vázlata',
          problem: 'Mutasd be a magyar szófaji rendszert!',
          solution:
            '**1.** A szófaj fogalma és a besorolás szempontjai (jelentés, toldalékolás, mondatbeli szerep). **2.** Alapszófajok: ige, főnév, melléknév, számnév, névmás, határozószó, példákkal. **3.** Viszonyszók: névelő, névutó, kötőszó, igekötő. **4.** Mondatszók: módosítószó, indulatszó, hangutánzó és hangulatfestő szó. **5.** Elemzés a kapott mondaton. **6.** Zárás: a szófaji rendszer a nyelvi szintek közül az alaktan és a mondattan kapcsolata.',
        },
        {
          kind: 'tip',
          text: 'Helyesírási kapcsolat: az **igekötő** az igétől külön vagy egybe is állhat (*megír*, de *nem írja meg*), a **névutó** külön íródik (*a ház mögött*). A szófaj felismerése segít a helyes egybe- és különírásban.',
        },
      ],
      topicMatch: ['szófajok'],
      quiz: [
        {
          question: 'Melyik szó viszonyszó?',
          options: ['ház', 'mögött', 'szép', 'jaj'],
          answer: 1,
          explanation:
            'A *mögött* névutó, ez viszonyszó. A *ház* főnév, a *szép* melléknév, a *jaj* mondatszó.',
        },
        {
          question: 'Melyik szó mondatszó?',
          options: ['után', 'meg', 'hűha', 'három'],
          answer: 2,
          explanation: 'A *hűha* indulatszó: önmagában mondat értékű.',
        },
        {
          question: 'Melyik szófajú a *lassan* szó a *lassan ment* szerkezetben?',
          options: ['melléknév', 'határozószó', 'névutó', 'ige'],
          answer: 1,
          explanation: 'A *lassan* a *ment* cselekvés módját fejezi ki, határozószó.',
        },
        {
          question: 'Melyik szófajú a *három* szó?',
          options: ['számnév', 'főnév', 'névmás', 'melléknév'],
          answer: 0,
          explanation: 'A *három* mennyiséget jelöl, ezért számnév.',
        },
        {
          question: 'Melyik névmásfajta a *valaki*?',
          options: ['személyes', 'kérdő', 'határozatlan', 'vonatkozó'],
          answer: 2,
          explanation: 'A *valaki* határozatlan névmás, a személyt nem azonosítja.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Szófaj', url: wiki('szófaj') },
        { label: 'Wikipédia: Magyar szófajok', url: wiki('magyar nyelv szófajai') },
        { label: 'Wikipédia: Névmás', url: wiki('névmás') },
      ],
    },
    {
      id: 'nyelvi-rendszer-emelt-bovitesek',
      subject: 'magyar',
      unitId: 'nyelvi-rendszer-hangtan-alaktan',
      title: 'Emelt kiegészítések: nyelvjárás, nyelvtörténet, szófajváltás',
      level: 'emelt',
      requirement: {
        emelt:
          'A magyar hangrendszer nyelvjárási eltéréseinek megfigyelése, néhány nyelvtörténeti vonatkozása; a szófaji besorolás kritériumai, szófajváltás, többszófajúság, átmeneti szófajok.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **nyelvjárások** hangrendszere eltérhet a köznyelvtől: például az **ö-zés** (*köll* a *kell* helyett) vagy a **zárt ë** megléte.',
            'A hangrendszer **nyelvtörténeti** nyomai: a rokon nyelvekkel való összevetés (*hal* ~ finn *kala*, *fa* ~ finn *puu*), a jövevényszavak hangalakja (*iskola* a latin *schola* szóból).',
            '**Szófajváltás**: a szó toldalék nélkül új szófajba lép át (*az öreg bölcs*, ahol az *öreg* főnév).',
            '**Többszófajúság**: ugyanaz a szóalak több szófajba tartozik (*az*: névelő és névmás; *meg*: igekötő és kötőszó).',
            '**Átmeneti szófajok**: két szófaj között állnak, például az **igenevek** (ige és névszó között).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hangrendszer nyelvjárási eltérései' },
        {
          kind: 'text',
          text: 'A **nyelvjárások** a hangrendszerben is eltérhetnek a köznyelvtől. Megfigyelhetők különbségek az **egyes hangok megléte vagy hiánya**, az **ejtés** és a **hangok időtartama** terén. A vizsgán egy rövid szövegrészlet kapcsán kell megállapítani, mi tér el a köznyelvi ejtéstől.',
        },
        {
          kind: 'compare',
          title: 'Nyelvjárási hangtani jelenségek',
          columns: ['Jelenség', 'Példa'],
          rows: [
            {
              label: 'ö-zés',
              cells: ['*ö* hangot ejtenek *e* helyett', '*köll* (kell), *nöm* (nem)'],
            },
            {
              label: 'zárt ë',
              cells: ['a köznyelvben nincs külön hang, egyes nyelvjárásokban él', '*ëgy*, *ëmber*'],
            },
            {
              label: 'ly-ejtés',
              cells: [
                'a *ly*-t a köznyelvtől eltérően, nem *j*-ként ejtik',
                'a *ly* külön hang a nyelvjárásban',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Nyelvjárási szöveg megfigyelése',
          problem: 'Mit figyelhetsz meg a szövegben? *„Köll nekem a kenyér.”*',
          solution:
            'A *köll* alakban **ö-zés** látható: a köznyelvi *kell* helyén ö hang áll. A mondat többi része köznyelvi. A nyelvjárási jelenség hangtani, nem alaktani: a szóelemek ugyanazok.',
        },
        { kind: 'heading', text: 'Nyelvtörténeti vonatkozások' },
        {
          kind: 'text',
          text: 'A mai magyar hangrendszer **történetileg alakult**. A rokon nyelvekkel való összevetés megmutatja a hangváltozásokat: a finn *kala* szónak a magyar *hal*, a finn *puu* szónak a *fa* felel meg. Ezek alapján a szó eleji *k → h* és *p → f* változás jellemző. A **jövevényszavakban** a magyar nyelv a szó eleji mássalhangzó-torlódást feloldotta (*iskola* < latin *schola*).',
        },
        {
          kind: 'text',
          text: 'Az *ly* betű régi hang emléke: ma már a *j*-vel azonos hangot jelöl, de az írás őrzi a hagyományt. Ezért tanuljuk szavanként: *hely*, *folyó*, de *fej*, *ujj*.',
        },
        { kind: 'heading', text: 'A szavak szófaji besorolása' },
        {
          kind: 'text',
          text: 'A szófaji rendszerbe sorolás **kritériumai**: **1.** jelentés (mit jelöl?), **2.** alaktani szempont (milyen toldalékot kaphat?), **3.** mondattani szempont (milyen mondatrész lehet, hogyan kapcsolódik?). A **hagyományos** rendszer főleg a jelentésre és a toldalékolhatóságra épít, a **mai** leírások a mondatbeli viselkedést is figyelembe veszik.',
        },
        {
          kind: 'compare',
          title: 'Szófajváltás, többszófajúság, átmenet',
          columns: ['Jelenség', 'Példa'],
          rows: [
            {
              label: 'Szófajváltás',
              cells: [
                'a szó toldalék nélkül más szófajúvá válik',
                '*Az öreg bölcs.* (melléknévből főnév); *a kék* (melléknévből főnév)',
              ],
            },
            {
              label: 'Többszófajúság',
              cells: [
                'ugyanaz a szóalak több szófajba tartozik',
                '*az* (névelő és mutató névmás); *meg* (igekötő és kötőszó); *egy* (névelő és számnév)',
              ],
            },
            {
              label: 'Átmeneti szófaj',
              cells: [
                'két szófaj jegyeit viseli',
                'igenevek: *tanuló*, *írt*, *olvasva*; névmási határozószók: *itt*, *ott*',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Szófajváltás felismerése',
          problem:
            'Mi a *fiatal* szó szófaja? (a) *A fiatal ember jött.* (b) *A fiatal tanult, az öreg tanított.*',
          solution:
            '(a) **melléknév** (jelzőként a főnevet határozza meg). (b) **főnév** (szófajváltás: ragozható, alanyként áll). A szó alakja nem változott, de mondatbeli szerepe más.',
        },
        {
          kind: 'example',
          title: 'Többszófajúság',
          problem: 'Határozd meg az *az* szó szófaját: (a) *Az ember jött.* (b) *Az volt itt.*',
          solution:
            '(a) **névelő** (főnév előtt áll, a határozottságot jelzi). (b) **mutató névmás** (önállóan áll, alany). Ugyanaz a szóalak, két szófaj: **többszófajúság**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szöveg alapján: egy nyelvjárási szövegben meg kell figyelni a hangtani eltéréseket, és összevetni a köznyelvi alakkal.',
            'Szófaji elemzés: a feladat kifejezetten rákérdezhet a szófajváltásra, a többszófajúságra vagy az átmeneti szófajokra.',
            'Szóbeli tétel emelt szinten: a szófaji rendszer elvei, egy lehetséges rendszer bemutatása és a kritériumok megvitatása.',
          ],
        },
        {
          kind: 'warning',
          text: 'A szófajváltást ne keverd a **képzéssel**. Szófajváltásnál nincs új toldalék (*az öreg*), képzésnél van (*öreg → öregség*). Ha a szó alakja nem változik, a szófajt a mondatbeli szerepből ismered meg.',
        },
        {
          kind: 'tip',
          text: 'Emelt szinten a besorolásnál mindig nevezd meg a **szempontot**, amely alapján döntöttél: jelentés, toldalékolhatóság vagy mondatbeli szerep. Ez mutatja, hogy érted a kritériumokat.',
        },
      ],
      topicMatch: ['szófajváltás', 'átmeneti szófaj', 'többszófajú'],
      quiz: [
        {
          question: 'Melyik nyelvjárási jelenség a *köll* alak a *kell* helyett?',
          options: ['i-zés', 'ö-zés', 'o-zás', 'ly-ejtés'],
          answer: 1,
          explanation: 'Az *e* helyett *ö* hangot ejtenek: ez az ö-zés.',
        },
        {
          question: 'Melyik magyar szó felel meg a finn *kala* (hal) szónak?',
          options: ['kal', 'hal', 'fa', 'hall'],
          answer: 1,
          explanation: 'A *hal* a megfelelője; a szó eleji *k → h* változás jellemző a magyarban.',
        },
        {
          question: 'Mi a szófajváltás?',
          options: [
            'A szó új szófajba kerül képzővel.',
            'A szó toldalék nélkül új szófajba lép át.',
            'A szó kihagyás miatt megváltozik.',
            'A szó jelentése leszűkül.',
          ],
          answer: 1,
          explanation:
            'Szófajváltásnál a szó alakja változatlan marad, de új szófaji szerepet tölt be (*az öreg bölcs*).',
        },
        {
          question: 'Melyik szó többszófajú?',
          options: ['ház', 'az', 'szép', 'kerék'],
          answer: 1,
          explanation: 'Az *az* névelő (*az ember*) és mutató névmás (*az volt itt*) is lehet.',
        },
        {
          question: 'Melyik átmeneti szófaj?',
          options: ['igenév', 'főnév', 'névelő', 'kötőszó'],
          answer: 0,
          explanation: 'Az igenév az ige és a névszó (vagy határozószó) között áll.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyar nyelvjárások', url: wiki('magyar nyelvjárások') },
        { label: 'Wikipédia: Finnugor nyelvek', url: wiki('finnugor nyelvrokonság') },
        { label: 'Wikipédia: Szófaj', url: wiki('szófaj') },
      ],
    },
  ],
};

export default unit;
