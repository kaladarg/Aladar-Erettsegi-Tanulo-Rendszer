import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

const SOURCE =
  'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 3. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.';

const REF = 'Irodalom 3. Portrék, metszetek, látásmódok a 19–20. század magyar irodalmából';

const KOZEP =
  'Az életmű néhány jellemzője keretében néhány lírai és/vagy egy-három epikai, drámai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); a világlátás és a kifejezésmód sajátosságai; műrészletek értelmezése; memoriterek szöveghű és kifejező előadása.';

const EMELT =
  'Kronológiai és topográfiai tájékozottság, a pályakép főbb jellemzői, a pályaszakaszok témái; a pályaképre ható irányzatok és világirodalmi párhuzamok; kötetek, ciklusok, motívumok; a művek hatása, fogadtatása, a szerző utóélete; műfaji és kifejezésmódbeli sajátosságok a korstílussal összefüggésben.';

/** Magyar nyelv és irodalom: választható szerzők a 19–20. századból (3. témakör). */
const unit: GuideUnit = {
  id: 'portrek-19-20-szazad',
  subject: 'magyar',
  order: 70,
  title: 'Portrék a 19–20. századból: választható szerzők',
  requirementRef: REF,
  intro:
    'A szóbeli tételsorban a 3. témakörből két tétel szerepel, az írásbeli műértelmezés pedig bármelyik szerző művét kiválaszthatja. Hat gyakran választott szerző: Kölcsey, Berzsenyi, Móricz, Radnóti, Örkény és Pilinszky. Mindegyiknél a legfontosabb művek, értelmezési szempontok és egy kidolgozható felelet vázlata.',
  requirementSource: SOURCE,
  pages: [
    {
      id: 'kolcsey-himnusz-zrinyi-parainesis',
      subject: 'magyar',
      unitId: 'portrek-19-20-szazad',
      title: 'Kölcsey Ferenc: Himnusz, Zrínyi-versek, Parainesis',
      level: 'kozep',
      requirement: { kozep: KOZEP, emelt: EMELT },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Kölcsey Ferenc** (1790–1838) a reformkor eleji irodalom meghatározó költője, kritikusa és politikusa; **Szatmárcsekén** élt és ott is halt meg.',
            'A **Himnusz** alcíme: *A magyar nép zivataros századaiból*; keltezése: Cseke, **1823. január 22.** Imaszerű költemény: kérés, történelmi visszatekintés, bűnbánat, könyörgés.',
            'A **Zrínyi dala** (1826) és a **Zrínyi második éneke** (1830) a szigetvári hős, Zrínyi Miklós alakján át a hazáért vállalt áldozat és a becsület kérdését vizsgálja.',
            'A **Parainesis Kölcsey Kálmánhoz** (a pálya végén) erkölcsi intelem prózában: a közösség és a haza szolgálata az ember legfőbb feladata.',
            'Kritikusként 1817-ben éles bírálatot írt Berzsenyi verseiről; a magyar romantika elméleti alapjait (népiesség, *Nemzeti hagyományok*, 1826) is ő vetette fel.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'himnusz',
              text: 'Istenhez vagy a nemzethez szóló ünnepélyes, magasztos hangú költemény; Kölcseynél imádság.',
            },
            {
              term: 'ima',
              text: 'Isten megszólítása, kérés, hálaadás, bűnvallomás: a Himnusz szerkezetét ez adja.',
            },
            {
              term: 'óda',
              text: 'Magasztos, emelkedett hangú, gondolati költemény, gyakran antik hagyományokkal.',
            },
            {
              term: 'intelem (parainesis)',
              text: 'Erkölcsi tanácsokat adó mű. A *Parainesis* a fiatal Kálmánnak szóló apai-nagybátyai útmutatás.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút és szerepek' },
        {
          kind: 'text',
          text: 'Kölcsey **Sződemeteren** született 1790-ben, gyerekkori betegség miatt az egyik szemére megvakult. Tanulmányait a **debreceni kollégiumban** végezte. Barátja és levelezőtársa volt **Kazinczy Ferenc**; a nyelvújítás védelmére *Felelet a Mondolatra* (1815) címmel írt. Később **Szatmárcsekén** élt, 1832–1835 között a rendi országgyűlésen Szatmár megye követe volt, a reformok és a magyar nyelv jogai mellett szólalt fel. 1838-ban halt meg Szatmárcsekén.',
        },
        { kind: 'heading', text: 'Himnusz (1823)' },
        {
          kind: 'text',
          text: 'A költemény nyolc versszakból áll. Az első versszak a **könyörgéssel** indul: *„Isten, áldd meg a magyart / Jó kedvvel, bőséggel”*. A 2–4. versszak a **múltat** idézi: Isten hozta a honfoglaló magyarokat a Kárpát-medencébe, és segítette őket. Az 5. versszak fordulópont: *„Hajh, de bűneink miatt / Gyúlt harag kebledben”*, azaz a nemzet történelmi szenvedéseit **bűneinek büntetéseként** értelmezi. A záró részek **bűnbánattal** kérnek megbocsátást és jobb jövőt.',
        },
        {
          kind: 'compare',
          title: 'A Himnusz szerkezete',
          columns: ['Versszak', 'Tartalom'],
          rows: [
            {
              label: '1.',
              cells: ['kérés', 'Isten áldását és védelmét kéri a nemzetnek.'],
            },
            {
              label: '2–4.',
              cells: ['múlt', 'honfoglalás és isteni segítség a történelmi sikerekben.'],
            },
            {
              label: '5–7.',
              cells: ['bűn és bűnhődés', 'a viszontagságok a nemzet bűneinek következményei.'],
            },
            {
              label: '8.',
              cells: ['összegzés', 'a megbűnhődött nép újabb esélyt kér.'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A Himnusz **nemzeti imádság**: a „mi” közösségi hangja szólal meg, a nemzet sorsát a **bűn–bűnhődés–megbocsátás** keresztény gondolatmenetébe helyezi. Kölcsey a verset 1823-ban írta, nyomtatásban 1829-ben jelent meg; **Erkel Ferenc** zenéje később vált a nemzeti himnusz dallamává. A vers születésnapját, január 22-ét a **magyar kultúra napjaként** ünnepeljük.',
        },
        {
          kind: 'tip',
          text: 'A *Himnusz* szövege a Memoriterek szekcióban megtalálható az appban. Az első versszakot és a bűn–bűnhődés fordulatot (5. versszak) feltétlenül tudd szó szerint.',
        },
        { kind: 'heading', text: 'Zrínyi dala és Zrínyi második éneke' },
        {
          kind: 'text',
          text: 'A két vers **szerepvers**: Kölcsey Zrínyi Miklós, a **szigetvári hős** (1566) szájába adja a gondolatokat. A *Zrínyi dala* (1826) a hazafias hősiességet, a *Zrínyi második éneke* (1830) a hősi halál, az erkölcsi tartás és a nemzet sorsának kérdését mélyíti. Ezekben a versekben a **történelmi példa** a jelen tanulsága: a költő a bukás ellenére is a becsület és az áldozatvállalás mellett érvel.',
        },
        { kind: 'heading', text: 'Parainesis Kölcsey Kálmánhoz' },
        {
          kind: 'text',
          text: 'A *Parainesis* **erkölcsi intelem**, amelyet Kölcsey unokaöccsének, Kálmánnak szánt. A mű az **erényes életre**, a becsületre, a mértékletességre és a **közösség szolgálatára** tanít; a gondolatmenet középpontjában a *„haza minden előtt”* elv áll. A prózai mű **szónoki, emelkedett** stílusú, tehát kapcsolódik a Himnusz és a Zrínyi-versek hazafias etikájához.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Pályaszakaszok és kötődések.** Az 1810–1820-as évek kritikai és elméleti írásai (Berzsenyi-bírálat 1817, *Nemzeti hagyományok* 1826) után a 20-as évek végétől a költészetben a nemzeti sors és a haza áll középpontban. A 30-as években politikusként a reformot képviselte. A pályát a **szentimentalizmus**, a **klasszicizmus** és a korai **romantika** hatása, valamint a német esztétikai gondolkodás alakította. **Fogadtatás:** a Himnusz a 19. század közepére a nemzeti identitás szimbólumává vált; a vitában helye van a *Himnusz* és Vörösmarty *Szózat*ának összevetésének, hiszen az egyik az imádságot, a másik a felhívást testesíti meg.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: *Kölcsey Ferenc* mint választható szerző, kiemelt szemponttal (például hazaszeretet, történelemszemlélet) és konkrét művekkel (Himnusz, Zrínyi-versek, Parainesis).',
            'Irodalmi feladatlap: a Himnusz memoriter-részleteinek felismerése, kiegészítése; műfaj (ima, himnusz), korstílus meghatározása.',
            'Műértelmező szövegalkotás: a *Himnusz* vagy a *Zrínyi* szerkezetének, hangnemének, a bűn–bűnhődés gondolatának elemzése, vagy összehasonlítás egy másik hazafias verssel (Berzsenyi, Vörösmarty).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a Himnuszt **népdalként** vagy **csak történelmi vers**ként kezelik. Műfaja imádság, a történelem benne a bűn–bűnhődés keretben jelenik meg. Másik hiba a *Himnusz* és a *Szózat* felcserélése: a *Szózat* Vörösmartyé.',
        },
        {
          kind: 'example',
          title: 'Felelet vázlata: Kölcsey hazaszeretete',
          problem:
            'Mutasd be Kölcsey hazafias költészetét a Himnusz és még egy mű alapján, két-három perces felelettel.',
          solution:
            '**1.** Bevezetés: Kölcsey a reformkor eleji költő és kritikus, a Himnusz 1823-ban keletkezett.\n**2.** Himnusz: imaszerkezet, a múlt isteni segítsége, a bűn–bűnhődés fordulat (5. versszak), a záró kérés. Hangnem: ünnepélyes, közösségi.\n**3.** Második mű: a *Zrínyi* vagy a *Parainesis*. A szerepvers a hősiességet, az intelem az erkölcsi kötelességet fogalmazza meg.\n**4.** Összegzés: a hazaszeretet nála etikai kérdés: erény, áldozat, felelősség. Hatás: a Himnusz a nemzeti identitás része.',
        },
      ],
      topicMatch: ['kölcsey'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik évben, hol keltezte Kölcsey a Himnuszt?',
          options: [
            'Cseke, 1823. január 22.',
            'Pest, 1848. március 15.',
            'Debrecen, 1815. május 1.',
            'Pozsony, 1832. január 1.',
          ],
          answer: 0,
          explanation:
            'A Himnusz keltezése Cseke, 1823. január 22.; ezt a napot a magyar kultúra napjaként ünnepeljük.',
        },
        {
          question: 'Mi a Himnusz alcíme?',
          options: [
            'A magyar nép zivataros századaiból',
            'Hazafias óda a magyarokhoz',
            'A nemzet fohásza',
            'Szigetvár hőséhez',
          ],
          answer: 0,
          explanation: 'A mű alcíme: *A magyar nép zivataros századaiból*.',
        },
        {
          question: 'Hogyan értelmezi a Himnusz a nemzet szenvedéseit?',
          options: [
            'Idegen hatalmak ármánya miatt következtek be.',
            'A nemzet bűneinek büntetéseként.',
            'Véletlen történelmi események.',
            'A természeti csapások következménye.',
          ],
          answer: 1,
          explanation:
            'Az 5. versszak fordulata (*„Hajh, de bűneink miatt / Gyúlt harag kebledben”*) a történelmi bajokat bűnhődésként értelmezi.',
        },
        {
          question: 'Kinek szól a Parainesis?',
          options: [
            'Kazinczy Ferencnek',
            'Kölcsey Kálmánnak',
            'Széchenyi Istvánnak',
            'Berzsenyinek',
          ],
          answer: 1,
          explanation:
            'A *Parainesis Kölcsey Kálmánhoz* a költő unokaöccsének szóló erkölcsi intelem.',
        },
        {
          question: 'Melyik nevezetes kritikát írta Kölcsey 1817-ben?',
          options: [
            'Bírálat Vörösmarty *Zalán futásá*ról',
            'Bírálat Berzsenyi verseiről',
            'Bírálat Petőfi *János vitéz*éről',
            'Bírálat Katona *Bánk bán*járól',
          ],
          answer: 1,
          explanation:
            'Kölcsey 1817-ben éles kritikát írt Berzsenyi verseiről, ami a költőt mélyen megsértette.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kölcsey Ferenc', url: wiki('Kölcsey Ferenc') },
        { label: 'Wikipédia: Himnusz (vers)', url: wiki('Himnusz Kölcsey Ferenc költemény') },
        {
          label: 'Wikipédia: Parainesis Kölcsey Kálmánhoz',
          url: wiki('Parainesis Kölcsey Kálmánhoz'),
        },
      ],
    },
    {
      id: 'berzsenyi-ody-magyarokhoz-kozeleito-tel',
      subject: 'magyar',
      unitId: 'portrek-19-20-szazad',
      title: 'Berzsenyi Dániel: A magyarokhoz, A közelítő tél, Osztályrészem',
      level: 'kozep',
      requirement: { kozep: KOZEP, emelt: EMELT },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Berzsenyi Dániel** (1776–1836) a magyar **klasszicizmus** legnagyobb költője; **Egyházashetyén** született, **Niklán** gazdálkodott és halt meg.',
            'Az **antik ódai formák**, különösen **Horatius** hatása érezhető: a mérték, az önismeret, az aranyközépszer.',
            'A magyarokhoz (I.): **hazafias óda**, erkölcsi felrázás: a nemzet elpuhulását ostorozza.',
            'A közelítő tél: **elégikus** költemény, az évszakváltás a **múlandóság** képe; az élet vége közeledik.',
            'Osztályrészem: **programvers**, a költő életfilozófiája: a békés, mértéktartó élet elfogadása.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'klasszicizmus',
              text: 'Az antik példákhoz, a mértékhez és a harmóniához igazodó stílus. A magyar irodalomban a 18–19. század fordulóján jelent meg.',
            },
            {
              term: 'óda',
              text: 'Magasztos hangú, gondolati költemény antik versformában. Berzsenyi ódái a hazáról, az életről és a halálról szólnak.',
            },
            {
              term: 'elégia',
              text: 'Szomorkás, elmélkedő költemény a múlandóságról vagy elmúlt boldogságról.',
            },
            {
              term: 'aranyközépszer',
              text: 'A horatiusi életeszmény: a mértékletes, kiegyensúlyozott életmód.',
            },
            {
              term: 'antik versforma',
              text: 'Időmértékes (hosszú és rövid szótagokon alapuló) verselés, például alkaioszi vagy aszklepiadészi strófa.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút és helye az irodalomban' },
        {
          kind: 'text',
          text: 'Berzsenyi kisnemesi családból származott, tanulmányait a **soproni evangélikus líceumban** kezdte, de nem fejezte be. 1799-ben megnősült (Dukai Takách Zsuzsanna), majd **Niklán** gazdálkodott. Barátja, **Kis János** küldte el a verseit **Kazinczy Ferencnek**, aki bátorította a megjelenésre; a *Versek* 1813-ban jelentek meg. **Kölcsey 1817-es bírálata** mélyen elkedvetlenítette, és később egyre inkább esztétikai-elméleti munkákkal foglalkozott (*Poetai harmonistica*, 1833).',
        },
        { kind: 'heading', text: 'A magyarokhoz (I.)' },
        {
          kind: 'text',
          text: 'Az óda a nemzeti erkölcs hanyatlása miatt aggódik. Első versszaka: *„Romlásnak indult hajdan erős magyar! / Nem látod, Árpád vére miként fajul?”* A költő **múlt és jelen** szembeállításával dolgozik: a hajdani erős nemzet és a mai elpuhult nemesség. A szándék **nevelő**: a figyelmeztetés a nemzet felrázását szolgálja. A hang szónoki, számonkérő; a költő a nemzet erkölcsi tanítója.',
        },
        { kind: 'heading', text: 'A közelítő tél' },
        {
          kind: 'text',
          text: 'A vers az **ősz-tél** képeivel indul: *„Hervad már ligetünk, s díszei hullanak.”* A természeti kép szimbolikus: az évszakok váltása az **emberi élet** múlásának tükre. A gondolat a **múlandóság** és a halál elfogadása; az elégikus hangulatot a klasszikus mérték és a nyugodt, bölcs tartás ellensúlyozza.',
        },
        {
          kind: 'tip',
          text: 'A *Osztályrészem*, *A közelítő tél* és *A magyarokhoz (I.)* kezdő versszaka a Memoriterek szekcióban megtalálható az appban. A memoriter feladatban gyakran kiegészítést kérnek.',
        },
        { kind: 'heading', text: 'Osztályrészem' },
        {
          kind: 'text',
          text: 'A vers a költő **életprogramja**. Nyitóképe a hajós, aki a veszélyek után kikötött: *„Partra szállottam. Levonom vitorlám.”* Az élet-hajózás **allegória**: a költő a viharok után megtalálta a békét. A nyugodt vidéki lét, a mértéktartás és az önismeret a kiegyensúlyozott élet alapja. Berzsenyi itt a **horatiusi** eszmét követi.',
        },
        {
          kind: 'compare',
          title: 'Három Berzsenyi-vers összevetése',
          columns: ['Mű', 'Jellemzők'],
          rows: [
            {
              label: 'A magyarokhoz (I.)',
              cells: ['hazafias óda', 'múlt–jelen szembeállítás, erkölcsi felhívás'],
            },
            {
              label: 'A közelítő tél',
              cells: ['elégikus óda', 'természeti kép, múlandóság, bölcs elfogadás'],
            },
            {
              label: 'Osztályrészem',
              cells: ['programvers', 'életfilozófia, hajó-allegória, aranyközépszer'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kortársak és hagyomány.** Berzsenyi kapcsolata Kazinczyval (a patrónus és a tanácsadó) és Kölcseyvel (a bírálat) a kor irodalmi vitáit mutatja. A **horatiusi** hagyomány Kosztolányinál és Radnótinál is folytatódik az antik hagyomány újraértelmezésében. Fogadtatás: az 1810-es évek bírálata után a 19. század második felétől vált kanonikus költővé, a *magyar klasszicizmus* csúcsaként tartjuk számon. Hatását Vörösmarty és a későbbi hazafias költészet is mutatja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Berzsenyi mint választható szerző; a tétel gyakran hazaszeretet, múlandóság vagy antik hagyomány szempontját emeli ki.',
            'Irodalmi feladatlap: korstílus (klasszicizmus) és műfaj (óda, elégia) felismerése, memoriterkiegészítés, antik versforma felismerése.',
            'Műértelmezés: *A közelítő tél* vagy *A magyarokhoz* elemzése, vagy összehasonlítás egy másik költő versével (például Kölcsey *Huszt*, Vörösmarty *Szózat*).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a **klasszicizmust** a romantikával. Berzsenyi stílusa az antik minták és a mérték szerint formált, még ha érzelmi töltete erős is. Az ódák időmértékes, antik versformában íródtak, ezért ne ütemhangsúlyosként említsd őket.',
        },
        {
          kind: 'example',
          title: 'Felelet vázlata: a múlandóság Berzsenyinél',
          problem: 'Mutasd be a múlandóság motívumát *A közelítő tél* alapján.',
          solution:
            '**1.** Bevezetés: Berzsenyi, klasszicista óda- és elégiaköltő, a vers témája az évszakváltás és az élet múlása.\n**2.** Szerkezet: a természeti kép (hervadó liget) átvált az emberi élet kérdésébe.\n**3.** Hangnem: elégikus, de a mértéktartó, bölcs elfogadás ellensúlyozza.\n**4.** Összegzés: a költő a halált az élet természetes részeként fogja fel, ez a horatiusi tartás.',
        },
      ],
      topicMatch: ['berzsenyi', '=a közelítő tél'],
      cards: { subject: 'magyar', era: 'felvilagosodas' },
      quiz: [
        {
          question: 'Melyik stílus- vagy korszakhoz sorolható leginkább Berzsenyi költészete?',
          options: ['Romantika', 'Klasszicizmus', 'Realizmus', 'Szimbolizmus'],
          answer: 1,
          explanation:
            'Berzsenyi az antik formákat és a mértéket követő magyar klasszicizmus legnagyobb költője.',
        },
        {
          question: 'Melyik szerzőt tekintette Berzsenyi a költészetében leginkább mintának?',
          options: ['Petőfit', 'Horatiust', 'Homéroszt', 'Shakespeare-t'],
          answer: 1,
          explanation: 'A horatiusi ódák és az aranyközépszer eszménye döntően hatott rá.',
        },
        {
          question: 'Mi jellemzi *A közelítő tél* alapképét?',
          options: [
            'Az évszakváltás az emberi élet múlásának jelképe.',
            'A háború pusztításának leírása.',
            'Egy szerelmes vallomás.',
            'A tavasz érkezésének öröme.',
          ],
          answer: 0,
          explanation: 'A hervadó természet képe az élet és a boldogság múlását fejezi ki.',
        },
        {
          question: 'Melyik képpel kezdődik az *Osztályrészem*?',
          options: [
            'A hajós kikötőbe érkezésével',
            'A hervadó ligettel',
            'Árpád vérének romlásával',
            'A kalapácsos kovács képével',
          ],
          answer: 0,
          explanation:
            'A nyitókép: *„Partra szállottam. Levonom vitorlám.”*, az élet-hajózás allegóriája.',
        },
        {
          question: 'Mi volt Berzsenyi 1833-ban megjelent akadémiai székfoglalójának címe?',
          options: ['Poetai harmonistica', 'Magyar poetica', 'Nemzeti hagyományok', 'Mondolat'],
          answer: 0,
          explanation:
            'A *Poetai harmonistica* című értekezés Berzsenyi esztétikai munkásságának része.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Berzsenyi Dániel', url: wiki('Berzsenyi Dániel') },
        { label: 'Wikipédia: A közelítő tél', url: wiki('A közelítő tél Berzsenyi') },
        { label: 'Wikipédia: Klasszicizmus', url: wiki('Klasszicizmus irodalom') },
      ],
    },
    {
      id: 'moricz-het-krajcar-uri-muri-rokonok',
      subject: 'magyar',
      unitId: 'portrek-19-20-szazad',
      title: 'Móricz Zsigmond: Hét krajcár, Barbárok, Úri muri, Rokonok',
      level: 'kozep',
      requirement: { kozep: KOZEP, emelt: EMELT },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Móricz Zsigmond** (1879–1942) a 20. századi magyar realista próza egyik legnagyobb alakja; **Tiszacsécsén** született.',
            'A **Nyugat** első nemzedékének tagja: a *Hét krajcár* 1908-ban jelent meg a folyóiratban, és országos hírnevet hozott.',
            'Témái: a **parasztság** és a **dzsentri** világa, a szegénység, a társadalmi igazságtalanság; stílusa **realista**, lélektani hitelű.',
            'A *Hét krajcár* **lélektani novella**: a szegény anya és kisfia egyetlen délutánja.',
            'Az *Úri muri* (1928) és a *Rokonok* (1932) a **dzsentri** pusztulását és a vidéki közélet romlottságát ábrázolja.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'realizmus',
              text: 'A valóság hű, társadalmi összefüggéseket feltáró ábrázolása.',
            },
            {
              term: 'dzsentri',
              text: 'A földjét vagy vagyonát vesztő, de úri életformához ragaszkodó középbirtokos réteg.',
            },
            {
              term: 'lélektani novella',
              text: 'A cselekmény kevés, a hangsúly a szereplő belső világán és érzésein van.',
            },
            {
              term: 'én-elbeszélés',
              text: 'A történetet egy szereplő mondja el első személyben (a *Hét krajcár* narrátora a kisfiú, felnőtt keretben).',
            },
            {
              term: 'népi írók',
              text: 'A parasztság sorsát, a falu problémáit előtérbe helyező írói irányzat; Móricz támogatta és példaképként szolgált.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút' },
        {
          kind: 'text',
          text: 'Móricz **1879. július 2-án** született Tiszacsécsén, református parasztpolgári családban. Debrecenben, Sárospatakon és Kisújszálláson tanult, 1900-ban költözött Budapestre. A **Nyugat** folyóirat munkatársa lett, 1929–1933 között **Babitscsal** szerkesztette. 1939-től a *Kelet Népe* című folyóiratot vezette. 1942-ben halt meg Budapesten. A legjelentősebb művei: *Sárarany* (1911), *Légy jó mindhalálig* (1920), az *Erdély* trilógia (*Tündérkert*, 1922), *Úri muri* (1928), *Rokonok* (1932).',
        },
        { kind: 'heading', text: 'Hét krajcár (1908)' },
        {
          kind: 'text',
          text: 'A novella egy szegény asszony és kisfia **egyetlen délutánja**. Az anya hét krajcárt keres szappanra, hogy kimoshassa a férje ingeit. A gyerek segít keresni, de a vitrinben lévő pénzhez a becsület miatt nem nyúl. Végül egy **koldus** adja a hiányzó pénzt, de mire összejön az összeg, a bolt bezár, és lámpaolaj sincs. A záró jelenet az anya **nevetésének** köhögésbe fordulása, vér is van benne: a betegség jele.',
        },
        {
          kind: 'compare',
          title: 'A Hét krajcár jellemzői',
          columns: ['Szempont', 'A novellában'],
          rows: [
            {
              label: 'Műfaj',
              cells: ['lélektani novella', 'kevés szereplő, egyszerű cselekmény, belső tartalom'],
            },
            {
              label: 'Elbeszélő',
              cells: ['én-elbeszélő', 'felnőtt keret, gyermeki látószög'],
            },
            {
              label: 'Téma',
              cells: ['szegénység és méltóság', 'a vidám külső mögött szenvedés van'],
            },
            {
              label: 'Szerkezet',
              cells: ['kezdet–fordulat–tragikus zárás', 'a várt boldog vég elmarad'],
            },
          ],
        },
        { kind: 'heading', text: 'Barbárok' },
        {
          kind: 'text',
          text: 'A *Barbárok* címe nem az ókori értelemben vett „idegen” népre utal, hanem **erkölcsi, társadalmi és lélektani** értelemben a durvaságra, érzéketlenségre. A tételben a mű konkrét kidolgozásához a saját olvasmányélményedre kell támaszkodnod: a cselekmény, a szereplők és a címadás kapcsolata a leggyakoribb kérdés.',
        },
        { kind: 'heading', text: 'Úri muri és Rokonok' },
        {
          kind: 'text',
          text: 'Az *Úri muri* (1928) a vidéki **dzsentri** világát mutatja: az iszogatás, a mulatozás, a tétlenség lassú pusztuláshoz vezet. A regény főszereplője **Szakhmáry Zoltán**. A *Rokonok* (1932) a **vidéki közélet** korrupciós hálóját ábrázolja, ahol a rokoni kapcsolatok és a hatalmi játszmák nyomják el az egyént. A két regény együtt a **dzsentri-kritikát** és a társadalomrajzot szolgálja.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Pályaszakaszok és hatás.** Az 1900-as évek **naturalista** kezdetei (a nyers valóság ábrázolása) után az 1910–1920-as években a lélektani realizmus, majd a 30-as években a társadalombíráló regények következnek. A **népi írók** Móriczot példaképnek tekintették; a *Kelet Népe* a falukutató szemlélet folyóirata lett. A *Légy jó mindhalálig* a kötelező olvasmány-hagyományban az egyik legismertebb Móricz-regény.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Móricz mint választható szerző; kiemelt szempont lehet a társadalomkritika, a gyermeki látásmód vagy a dzsentri-ábrázolás.',
            'Irodalmi feladatlap: korstílus (realizmus), műfaj (novella, regény), elbeszélői nézőpont, a Nyugat szerepe.',
            'Műértelmezés: a *Hét krajcár* elemzése (nézőpont, szerkezet, zárlat) vagy két Móricz-mű összevetése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a **Hét krajcárt** (1908, novella, anya–fiú) a *Légy jó mindhalálig*gal (1920, regény, Nyilas Misi). A két mű témája és hangulata eltérő. A *Hét krajcár* nem fejeződik be happy enddel, de a szegénység mellett a méltóság is fontos.',
        },
        {
          kind: 'example',
          title: 'Felelet vázlata: a Hét krajcár',
          problem: 'Értelmezd a *Hét krajcár* című novellát nézőpont és szerkezet szempontjából.',
          solution:
            '**1.** Bevezetés: Móricz 1908-ban a Nyugatban jelentette meg, lélektani novella.\n**2.** Nézőpont: én-elbeszélő, a felnőtt keret és a gyermeki emlékezet kettőssége.\n**3.** Szerkezet: a pénzkeresés, a fordulat (koldus), a tragikus zárlat (köhögés, vér).\n**4.** Értelmezés: szegénység és méltóság, a hang vidám külseje és a mélyén rejlő fájdalom.\n**5.** Összegzés: a novella helye az életműben, a szegény emberek iránti együttérzés.',
        },
      ],
      topicMatch: ['móricz'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik folyóiratban jelent meg 1908-ban a Hét krajcár?',
          options: ['Pesti Divatlap', 'Aurora', 'Nyugat', 'Tudományos Gyűjtemény'],
          answer: 2,
          explanation:
            'A *Hét krajcár* a Nyugatban jelent meg, és Móricz egycsapásra híressé vált.',
        },
        {
          question: 'Mit keresnek a Hét krajcár szereplői a házban?',
          options: ['Pénzt szappanra', 'Kenyeret', 'Lámpaolajat', 'Orvosságot'],
          answer: 0,
          explanation: 'Az anya hét krajcárt keres szappanra, hogy kimoshassa a férje ingeit.',
        },
        {
          question: 'Melyik réteg pusztulását ábrázolja az Úri muri?',
          options: ['A parasztságét', 'A dzsentriét', 'A nagypolgárságét', 'A munkásságét'],
          answer: 1,
          explanation: 'Az *Úri muri* a vidéki dzsentri élet mulatozó, tétlen pusztulását mutatja.',
        },
        {
          question: 'Melyik regény Móricz műve?',
          options: ['Rokonok', 'Tóték', 'Egri csillagok', 'A Pál utcai fiúk'],
          answer: 0,
          explanation: 'A *Rokonok* (1932) Móricz regénye; a *Tóték* Örkényé.',
        },
        {
          question: 'Melyik folyóirat szerkesztésében vett részt Móricz 1929–1933 között?',
          options: ['Nyugat', 'Kelet Népe', 'Újhold', 'Vigilia'],
          answer: 0,
          explanation:
            'A Nyugatot Babitscsal szerkesztették; a *Kelet Népe* vezetését később, 1939-től vállalta.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Móricz Zsigmond', url: wiki('Móricz Zsigmond') },
        { label: 'Wikipédia: Hét krajcár', url: wiki('Hét krajcár Móricz Zsigmond') },
        { label: 'Wikipédia: Úri muri', url: wiki('Úri muri Móricz Zsigmond') },
      ],
    },
    {
      id: 'radnoti-ecloga-eroltetett-menet-razglednicak',
      subject: 'magyar',
      unitId: 'portrek-19-20-szazad',
      title: 'Radnóti Miklós: eclogák, Erőltetett menet, Razglednicák',
      level: 'kozep',
      requirement: { kozep: KOZEP, emelt: EMELT },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Radnóti Miklós** (1909–1944) a **Nyugat harmadik nemzedékének** költője; Budapesten született, **munkaszolgálatosként** halt meg 1944 novemberében **Abda** környékén.',
            'A **Bori notesz** a tábori versek gyűjteménye: a notesz a tömegsírból 1946-ban került elő a kabátzsebből.',
            'Az **ecloga** (Vergilius nyomán) pásztori műfaj, Radnótinál a költő és a háborús világ párbeszéde.',
            'Az **Erőltetett menet** (Bor, 1944. szeptember 15.): a kimerült menetelő monológja, a halál és az élet akarása között.',
            'A **Razglednicák** („képeslapok”, 1944. október) a kivégzés előtti utolsó versek, rövid, tárgyilagos hangon.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ecloga',
              text: 'Vergiliusig visszanyúló, pásztori jelenetű költemény; Radnóti a háborús szorongás és a költői szerep kifejezésére használja.',
            },
            {
              term: 'razglednica',
              text: 'Szerb szó, jelentése: képeslap. A négy utolsó vers ilyen „képeslap”-szerű közlés.',
            },
            {
              term: 'Bori notesz',
              text: 'A munkaszolgálatban írt versek füzete, amelyet a tömegsír exhumálásakor, 1946-ban találtak meg.',
            },
            {
              term: 'hexameter',
              text: 'Hatlábú antik versforma; Radnóti eclogái ebben a formában is megszólalnak.',
            },
            {
              term: 'munkaszolgálat',
              text: 'A zsidó származású férfiak kényszermunkára kötelezése a második világháború idején.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút' },
        {
          kind: 'text',
          text: 'Radnóti **1909. május 5-én** született Budapesten (eredeti neve Glatter Miklós). Az első kötetei az avantgárd hatását mutatják: *Pogány köszöntő* (1930), *Újmódi pásztorok éneke* (1931). A 30-as években egyre klasszikusabb formában ír: *Járkálj csak, halálraítélt!* (1936), *Meredek út* (1938). A *Naptár* (1942) a háborús évek kötete; a *Tajtékos ég* 1946-ban, a halála után jelent meg. A munkaszolgálat során Borba került; a front közeledtével a foglyokat nyugatra hajtották. **1944 novemberében**, Abda térségében lelőtték; a sírt 1946 júniusában tárták fel.',
        },
        { kind: 'heading', text: 'Az ecloga' },
        {
          kind: 'text',
          text: 'Radnóti az **eclogát** (pásztori költemény) a modern költő és a háborús világ **párbeszédes formájává** alakítja. Az *Első ecloga* a *Meredek út* kötetben (1938) jelent meg. A *Hetedik ecloga* és a *Nyolcadik ecloga* már a tábori körülmények között keletkezett (1944); a *Hetedik ecloga* *Az alvó tábor* címmel még 1944 októberében megjelent. A formának két funkciója van: a **költői szerep** kérdése („írhat-e a költő a háború idején?”) és a **kitartás**, a költészet mint a túlélés eszköze.',
        },
        { kind: 'heading', text: 'Erőltetett menet' },
        {
          kind: 'text',
          text: 'A vers keltezése: **Bor, 1944. szeptember 15.** A beszélő menet közben kimerült, földre rogy, mégis újra feláll: *„Bolond, ki földre rogyván fölkél és újra lépked”*. A vers egyszerre mutatja a **testi kimerülést** és az otthon, a feleség **emlékképét**, amely erőt ad. A vers a **túlélés akarata** és a **halálvárás** feszültségére épül.',
        },
        { kind: 'heading', text: 'Razglednicák' },
        {
          kind: 'text',
          text: 'A négy rövid vers 1944 októberében keletkezett. A második Cservenkán (okt. 6.), a harmadik Mohácson (okt. 24.), a negyedik Szentkirályszabadján (okt. 31.) íródott. A **negyedik** a legismertebb: a költő a meggyilkolt társa mellett fekve rögzíti saját halálának előérzetét: *„Tarkólövés. – Így végzed hát te is”*. A tárgyilagos, szikár hang és a rendkívüli élethelyzet kontrasztja adja a vers erejét.',
        },
        {
          kind: 'text',
          text: 'Radnóti költészetének közös jellemzője a **klasszicizáló modernség**: antik versformák, fegyelmezett szerkezet és a háború pusztítása. A **hitves** alakja (*Levél a hitveshez*, *Nem tudhatom…*) az otthon, a szeretet és az emberi méltóság jelképe.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Pályaszakaszok és párhuzamok.** Az avantgárd kezdetektől a klasszicizáló, ecloga-központú korszakon át a bori záró évekig. Az antik hagyomány (Vergilius, Horatius) Berzsenyi és Kosztolányi költészetében is megjelenik, Radnóti ezt a háborús tapasztalattal tölti meg. **Utóélet:** a Bori notesz és a Razglednicák a magyar holokauszt-irodalom emblematikus szövegei lettek; a költő a magyar irodalmi emlékezet központi alakja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Radnóti mint választható szerző; kiemelt szempont lehet az emberi helytállás, a háború élménye vagy az antik hagyomány.',
            'Irodalmi feladatlap: a Bori notesz, az ecloga műfaja, az időmértékes verselés felismerése, a Nyugat harmadik nemzedéke.',
            'Műértelmezés: az *Erőltetett menet* vagy egy *Razglednica* elemzése; összehasonlítás például József Attila vagy Pilinszky egy versével.',
          ],
        },
        {
          kind: 'warning',
          text: 'Pontosan idézd az évszámokat: **1944** a bori versek éve, de a halál időpontja november. A Razglednicákat ne keverd a *Bori noteszszel*: az utóbbi a teljes tábori gyűjtemény, a négy képeslap annak a legvégén áll.',
        },
        {
          kind: 'example',
          title: 'Felelet vázlata: Erőltetett menet',
          problem: 'Értelmezd az *Erőltetett menet* című verset három-négy perces válaszban.',
          solution:
            '**1.** Bevezetés: keletkezés (Bor, 1944. szeptember 15.), a Bori notesz része.\n**2.** Helyzet: a kimerült menetelő monológja, aki nem tud megállni.\n**3.** Szerkezet: a jelen szenvedése és az otthon emléke váltakozik.\n**4.** Eszközök: tárgyilagos hang, a *„Bolond, ki földre rogyván fölkél…”* paradoxona.\n**5.** Összegzés: a vers az emberi méltóság és az élet akarásának tanúsága.',
        },
      ],
      topicMatch: ['radnóti'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Hol találták meg a Bori noteszt?',
          options: [
            'A Dunában',
            'A tömegsír exhumálásakor Radnóti kabátzsebében',
            'Radnóti feleségénél',
            'Egy bori irodában',
          ],
          answer: 1,
          explanation: 'A noteszt a költő holttestén találták meg az 1946-os exhumáláskor.',
        },
        {
          question: 'Mit jelent a „razglednica” szó?',
          options: ['Hadifogoly', 'Képeslap', 'Szerencsétlenség', 'Nyugalom'],
          answer: 1,
          explanation: 'A szó szerb, jelentése képeslap; a négy utolsó vers ezt a címet viseli.',
        },
        {
          question: 'Mi az Erőltetett menet keltezése?',
          options: [
            'Bor, 1944. szeptember 15.',
            'Budapest, 1938. május 5.',
            'Abda, 1944. november 9.',
            'Mohács, 1944. október 24.',
          ],
          answer: 0,
          explanation: 'A verset Borban keltezte Radnóti 1944. szeptember 15-re.',
        },
        {
          question: 'Melyik műfajt újítja fel Radnóti az ecloga formájában?',
          options: [
            'A pásztori költeményt',
            'A hőséposzt',
            'A verses regényt',
            'A tanító költeményt',
          ],
          answer: 0,
          explanation:
            'Az ecloga (Vergilius nyomán) pásztori költemény; Radnóti ezt a háborús világ kifejezésére használja.',
        },
        {
          question: 'Melyik antik költő a pásztori költemény (ecloga) legismertebb mintája?',
          options: ['Vergilius', 'Ovidius', 'Homérosz', 'Catullus'],
          answer: 0,
          explanation: 'Az *Eclogák* Vergilius műve.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Radnóti Miklós', url: wiki('Radnóti Miklós') },
        { label: 'Wikipédia: Bori notesz', url: wiki('Bori notesz') },
        { label: 'Wikipédia: Erőltetett menet', url: wiki('Erőltetett menet Radnóti') },
      ],
    },
    {
      id: 'orkeny-egyperces-totek',
      subject: 'magyar',
      unitId: 'portrek-19-20-szazad',
      title: 'Örkény István: Egyperces novellák, Tóték',
      level: 'kozep',
      requirement: { kozep: KOZEP, emelt: EMELT },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Örkény István** (1912–1979) a magyar **groteszk** próza és dráma legjelentősebb alakja; gyógyszerészként és vegyészmérnökként is dolgozott.',
            'Az **Egyperces novellák** (1968) új műfajt teremtett: nagyon rövid, groteszk vagy abszurd történetek, váratlan fordulattal.',
            'A **Tóték** (1967) groteszk kisregény és dráma: egy család a hatalom, az őrnagy kedvéért mindenre képes.',
            'A műfaj lényege: a **groteszk** a tragikus és a komikus keveredése, az értelmetlenség világa.',
            'Örkény 1956 utáni szerepvállalása miatt évekig nem publikálhatott.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'groteszk',
              text: 'A tragikus és a komikus egyidejű jelenléte, torzított, ellentmondásos világ.',
            },
            {
              term: 'abszurd',
              text: 'Értelmetlen, logikátlan helyzet, amely a világ értelmetlenségét mutatja.',
            },
            {
              term: 'egyperces novella',
              text: 'Rendkívül rövid, hétköznapi vagy képtelen helyzetet bemutató elbeszélés; a cím és a csattanó nagy jelentőségű.',
            },
            {
              term: 'kisregény',
              text: 'A regénynél rövidebb, a novellánál nagyobb terjedelmű epikai műfaj (a *Tóték* eredetileg kisregény).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút' },
        {
          kind: 'text',
          text: 'Örkény **1912. április 5-én** született Budapesten, és 1979. június 24-én ott is halt meg. Eredetileg gyógyszerész, majd vegyészmérnök, később író és dramaturg. A *Lágerek népe* (1947) a háborús tapasztalatait dolgozza fel. 1956 után egy időre eltiltották a publikálástól. A *Macskajáték* (1963), a *Tóték* (előbb kisregény, drámaként 1967-ben mutatták be) és az *Egyperces novellák* (1968) hozták meg a nagy sikert. Kossuth-díjat 1973-ban kapott.',
        },
        { kind: 'heading', text: 'Egyperces novellák (1968)' },
        {
          kind: 'text',
          text: 'Az Egyperces novellák **rövidek**, néha csak néhány sorosak; gyakran hétköznapi szöveget (hírt, utasítást) fordítanak groteszkre. A **cím** a történet fontos része: gyakran élezi a csattanót. Örkény szerint a rövid forma teljes, önálló mű, és időt takarít meg az olvasónak. A kötetben szerepel például a *Ballada a költészet hatalmáról*, amely a Remeteszőlősön emlékműként állított telefonfülkében hallható.',
        },
        {
          kind: 'tip',
          text: 'Az egyperces novellák elemzésénél mindig figyeld meg a **címet**, a **kiinduló helyzetet**, a **fordulatot** és a **befejező mondatot**: ezek adják az értelmezés vázát.',
        },
        { kind: 'heading', text: 'Tóték (1967)' },
        {
          kind: 'text',
          text: 'A *Tóték* története egy magyar faluban játszódik 1944 nyarán. Egy **őrnagy** érkezik pihenni a Tót családhoz, akinek a fia a fronton van. A család minden erejével az őrnagy kedvében jár: **dobozolnak**, vendégeskednek, a család feje, **Tót Lajos** a tűzoltóparancsnok. Az őrnagy szeszélyei egyre képtelenebbek, a család pedig egyre inkább elveszíti emberi méltóságát. A vége a **lázadás**: az alázat és a kiszolgáltatottság határán a család fellázad.',
        },
        {
          kind: 'compare',
          title: 'Két Örkény-mű összevetése',
          columns: ['Mű', 'Jellemzők'],
          rows: [
            {
              label: 'Egyperces novellák',
              cells: ['rövid, sűrített forma', 'csattanó, cím-szerep, groteszk szemlélet'],
            },
            {
              label: 'Tóték',
              cells: [
                'kisregény és dráma',
                'a hatalom kiszolgálása, az emberi méltóság elvesztése',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Hatás és párhuzamok.** A groteszk-abszurd szemlélet közeli rokona Kafka és Beckett világának, de Örkény a hazai tapasztalatot (hatalom, kiszolgáltatottság) ábrázolja. A *Tóték* filmváltozata *Isten hozta, őrnagy úr!* (1969) címmel készült el. Az egyperces forma Spiró György, Vámos Miklós és Temesi Ferenc műveire hatott.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Örkény mint választható szerző; kiemelt szempont lehet a groteszk, a kiszolgáltatottság vagy a rövid prózai forma.',
            'Irodalmi feladatlap: a groteszk, az abszurd fogalma, műfajok (novella, kisregény, dráma) megkülönböztetése.',
            'Műértelmezés: egy egyperces novella értelmezése vagy a *Tóték* egy jelenetének elemzése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze az **abszurdot** a **groteszkkel**: a groteszk a komikus és a tragikus keveredése, az abszurd az értelmetlenség. A *Tóték* groteszk, nem pusztán humoros: a komikus helyzet mögött tragikus tartalom áll.',
        },
        {
          kind: 'example',
          title: 'Felelet vázlata: a Tóték groteszkje',
          problem: 'Mutasd be, miben groteszk a *Tóték*!',
          solution:
            '**1.** Bevezetés: Örkény István (1967), kisregény és dráma.\n**2.** Helyzet: a front mögötti falu, az őrnagy látogatása, a család szolgálatkészsége.\n**3.** Groteszk elemek: a képtelen kívánságok teljesítése, a komikus helyzet és a háború közelsége.\n**4.** Kifejtés: a hatalom kiszolgálása az emberi méltóság elvesztéséhez vezet.\n**5.** Összegzés: a lázadás a személyes felelősségre mutat.',
        },
      ],
      topicMatch: ['örkény', '=tóték'],
      cards: { subject: 'magyar', era: 'kesomodern' },
      quiz: [
        {
          question: 'Melyik évben jelent meg az Egyperces novellák első kötete?',
          options: ['1948', '1958', '1968', '1978'],
          answer: 2,
          explanation: 'Az *Egyperces novellák* első kötete 1968-ban jelent meg.',
        },
        {
          question: 'Mit jelent a groteszk?',
          options: [
            'Tisztán komikus hangnemet',
            'A tragikus és a komikus keverését',
            'Csak a tragikus szemléletet',
            'Naturalista leírást',
          ],
          answer: 1,
          explanation: 'A groteszk a tragikus és a komikus egyidejű jelenléte, torz világ.',
        },
        {
          question: 'Ki érkezik a Tót családhoz a Tótékban?',
          options: ['Egy tanító', 'Egy őrnagy', 'Egy pap', 'Egy orvos'],
          answer: 1,
          explanation: 'Az őrnagy érkezése és a család kiszolgálása adja a cselekmény magját.',
        },
        {
          question: 'Melyik Örkény-mű rövid, csattanós elbeszélésekből áll?',
          options: ['Macskajáték', 'Egyperces novellák', 'Lágerek népe', 'Tóték'],
          answer: 1,
          explanation: 'Az *Egyperces novellák* nagyon rövid, groteszk történetek gyűjteménye.',
        },
        {
          question:
            'Melyik két külföldi szerző groteszk-abszurd világával rokon Örkény szemlélete?',
          options: [
            'Kafka és Beckett',
            'Tolsztoj és Dosztojevszkij',
            'Goethe és Schiller',
            'Dickens és Hugo',
          ],
          answer: 0,
          explanation: 'Kafka és Beckett abszurd, groteszk világa párhuzamba állítható Örkénnyel.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Örkény István', url: wiki('Örkény István') },
        { label: 'Wikipédia: Egyperces novellák', url: wiki('Egyperces novellák') },
        { label: 'Wikipédia: Tóték', url: wiki('Tóték Örkény István') },
      ],
    },
    {
      id: 'pilinszky-harbach-apokrif',
      subject: 'magyar',
      unitId: 'portrek-19-20-szazad',
      title: 'Pilinszky János: Harbach 1944, Apokrif',
      level: 'kozep',
      requirement: { kozep: KOZEP, emelt: EMELT },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Pilinszky János** (1921–1981) a második világháború utáni magyar költészet kiemelkedő alakja; az **Újhold** szerkesztője volt (1946–1948).',
            'Költészete **szikár, tömör**: a szenvedés, a bűn, a megváltás kérdései **keresztény egzisztencialista** szemlélettel.',
            'A **Harbach 1944** a *Harmadnapon* (1959) kötet verse: a koncentrációs táborok élményét sűríti.',
            'Az **Apokrif** (az 1950-es évek elején írt) hosszabb költemény, apokalipszis-látomás és a tékozló fiú példázata.',
            'A *Harmadnapon* cím a feltámadásra utal.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'apokrif',
              text: 'Eredetileg a hivatalos kánonból kimaradt, „rejtett” szöveg; Pilinszky versében vallási-látomásos mű.',
            },
            {
              term: 'egzisztencializmus',
              text: 'A magányos, szenvedő emberi lét alapkérdéseit vizsgáló filozófia.',
            },
            {
              term: 'tékozló fiú példázata',
              text: 'Újszövetségi példabeszéd a hazatérésről és megbocsátásról; az *Apokrif* második része erre épül.',
            },
            {
              term: 'Újhold',
              text: 'A Nyugat hagyományait folytató folyóirat (1946–1948), Pilinszky is szerkesztette.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút és kötetek' },
        {
          kind: 'text',
          text: 'Pilinszky **1921. november 27-én** született Budapesten, és 1981. május 27-én halt meg. Első költeményei a katolikus *Vigilia* folyóiratban jelentek meg (1938–39). Kötetei: *Trapéz és korlát* (1946), *Harmadnapon* (1959), *Nagyvárosi ikonok* (1970), *Szálkák* (1972), *Végkifejlet* (1974), *Kráter* (1976). Díjak: Baumgarten-díj (1947), József Attila-díj (1971), Kossuth-díj (1980).',
        },
        { kind: 'heading', text: 'Harbach 1944' },
        {
          kind: 'text',
          text: 'A *Harbach 1944* a lágerélményt sűríti. Pilinszky a háború végén katonaként Németországban, **Harbach** faluban látott koncentrációs táborok foglyait; a versben a **tanúság** és a **szenvedés** kérdése áll középpontban. A stílus **tárgyilagos**: kevés szó, erős képek, az emberi test és a kiszolgáltatottság képe. A cím évszáma dokumentum-jellegű, a költő mégsem leírja, hanem **jelképpé** sűríti az élményt.',
        },
        { kind: 'heading', text: 'Apokrif' },
        {
          kind: 'text',
          text: 'Az *Apokrif* az 1950-es évek első felében készült, és sokáig kéziratban terjedt; nyomtatásban csak később jelent meg. A költemény személyes **apokalipszis-látomás**: atomhalál és lágerélmény képei találkoznak az egyén kozmikus magányával. A második rész a **tékozló fiú** példázatára épül: a megváltás reménye a hazatérésben, a megbocsátásban jelenik meg.',
        },
        {
          kind: 'compare',
          title: 'A két vers összevetése',
          columns: ['Mű', 'Jellemzők'],
          rows: [
            {
              label: 'Harbach 1944',
              cells: ['lágerélmény', 'szikár, jelképes kép, tanúság, szenvedés'],
            },
            {
              label: 'Apokrif',
              cells: ['látomásos költemény', 'apokalipszis, magány, tékozló fiú, megváltás'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kötődések és utóélet.** Pilinszky a **Nyugat** hagyományát folytató Újhold-körhöz tartozott; a költészetét a **keresztény gondolkodás**, és az **egzisztencializmus** alakították. A késői kötetekben (*Szálkák*) a forma még tömörebb. A kritikák a „kevés szó, nagy jelentés” elvet emelik ki; hatása a későbbi magyar lírára erős.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Pilinszky mint választható szerző; kiemelt szempont lehet a szenvedés, a bűn, a háborús élmény, a vallásos látásmód.',
            'Irodalmi feladatlap: a kötetek, a korszak (a második világháború utáni modernség) és a költői eszközök felismerése.',
            'Műértelmezés: a *Harbach 1944* kis szövegrészének elemzése vagy összevetése Radnóti egy versével (háborús élmény két megközelítése).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne tekintsd az *Apokrif*ot egyszerű vallásos költeménynek: az apokalipszis-látomás és a lágerélmény együtt a modern ember magányát fejezi ki. A „Harbach 1944” nem dokumentum, hanem költői sűrítés.',
        },
        {
          kind: 'example',
          title: 'Felelet vázlata: háborús élmény Radnótinál és Pilinszkynél',
          problem: 'Hasonlítsd össze a háborús élmény ábrázolását Radnótinál és Pilinszkynél!',
          solution:
            '**1.** Bevezetés: Radnóti közvetlen tanú (Bori notesz), Pilinszky a háború után sűríti az élményt (*Harbach 1944*).\n**2.** Radnóti: konkrét helyzet, kimondott személyes hang (*Erőltetett menet*, *Razglednicák*).\n**3.** Pilinszky: szikár, jelképes kép, a tanúság és a szenvedés általános kérdése.\n**4.** Közös pont: az emberi méltóság kérdése.\n**5.** Összegzés: két különböző költői út ugyanarra a tapasztalatra.',
        },
      ],
      topicMatch: ['pilinszky'],
      cards: { subject: 'magyar', era: 'kesomodern' },
      quiz: [
        {
          question: 'Melyik kötetben jelent meg a Harbach 1944?',
          options: ['Trapéz és korlát', 'Harmadnapon', 'Szálkák', 'Kráter'],
          answer: 1,
          explanation: 'A *Harbach 1944* a *Harmadnapon* (1959) kötet verse.',
        },
        {
          question: 'Melyik folyóirat szerkesztője volt Pilinszky 1946–1948 között?',
          options: ['Nyugat', 'Újhold', 'Szépirodalmi Figyelő', 'Kelet Népe'],
          answer: 1,
          explanation: 'Az Újhold társszerkesztője volt 1946 és 1948 között.',
        },
        {
          question: 'Melyik példázatra épül az Apokrif második része?',
          options: [
            'A tékozló fiú példázatára',
            'A magvető példázatára',
            'A jó szamaritánus példázatára',
            'A talentumok példázatára',
          ],
          answer: 0,
          explanation: 'Az *Apokrif* második része a tékozló fiú példázatára épül.',
        },
        {
          question: 'Mire utal a Harmadnapon kötetcím?',
          options: ['A feltámadásra', 'A teremtésre', 'A földrengésre', 'A hazatérés napjára'],
          answer: 0,
          explanation: 'A harmadnapi feltámadás keresztény motívuma.',
        },
        {
          question: 'Melyik filozófiai irányzat hatása érezhető Pilinszky költészetében?',
          options: ['Pozitivizmus', 'Egzisztencializmus', 'Marxizmus', 'Utilitarizmus'],
          answer: 1,
          explanation:
            'A magány, szenvedés és bűn kérdései az egzisztencialista gondolkodáshoz kötik.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Pilinszky János', url: wiki('Pilinszky János') },
        { label: 'Wikipédia: Harmadnapon', url: wiki('Harmadnapon Pilinszky') },
        { label: 'Wikipédia: Apokrif (Pilinszky)', url: wiki('Apokrif Pilinszky János') },
      ],
    },
  ],
};

export default unit;
