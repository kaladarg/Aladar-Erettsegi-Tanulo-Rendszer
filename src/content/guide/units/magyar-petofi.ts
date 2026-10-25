import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Petőfi Sándor életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'petofi',
  subject: 'magyar',
  order: 50,
  title: 'Petőfi Sándor életműve',
  requirementRef:
    '2.1 Szerzők, művek, 1. témakör: Életművek a magyar irodalomból. Kötelező szerzők',
  intro:
    'A magyar romantika legnépszerűbb költője: a népies dal és a tájleíró vers, a Júlia-versek, a két nagy elbeszélő költemény, majd a forradalmi és látnoki líra. Életút, főbb művek, értelmezési szempontok és a műelemzés menete.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 1. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'petofi-eletut-palyaszakaszok',
      subject: 'magyar',
      unitId: 'petofi',
      title: 'Petőfi életútja és pályaszakaszai',
      level: 'emelt',
      requirement: {
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai tájékozottság; a pályaszakaszokat jellemző főbb témák és kérdésfeltevések; a pályaképre ható irányzatok és szellemi kötődések.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Petőfi Sándor** (1823–1849) a magyar romantika és a **népies költészet** legnagyobb alakja; rövid pályája alatt több száz verset és két nagy elbeszélő költeményt írt.',
            'Szülőhelye **Kiskőrös**, gyerekkora az Alföldön telt; a családnevét később magyarosította (Petrovics → Petőfi).',
            'Pályája három szakasza: **1.** a vándorévek és a népies dalok (1842–1845), **2.** az érett, szerelmi és tájleíró líra (1846–1847), **3.** a forradalom és a szabadságharc költészete (1848–1849).',
            '**1848. március 15.** a pesti forradalom egyik vezéralakja: a *Nemzeti dal* ekkor kerül a nyomdába.',
            '1849 nyarán a **segesvári csatában** tűnt el: **1849. július 31.** a halálának hagyományos dátuma.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1823', text: 'Kiskőrösön született (Petrovics Sándor).' },
            {
              date: '1839–1844',
              text: 'Tanulóévek és vándorélet: diákság, katonáskodás, színészkedés. Az első verse 1842-ben jelent meg.',
            },
            {
              date: '1844',
              text: 'Pestre költözik, megjelennek a *Versek*; Vörösmarty támogatja. Ekkor születik *Az alföld*, *A helység kalapácsa* és a *János vitéz*.',
            },
            {
              date: '1846',
              text: 'Megalakul a Tízek Társasága, a baráti írókör; a szervezésben Petőfi és Vahot Imre neve is szerepel.',
            },
            {
              date: '1847',
              text: 'Házasság Szendrey Júliával (szeptember), a koltói nászút: *Szeptember végén*, *A Tisza*, *A XIX. század költői*.',
            },
            { date: '1848. március 15.', text: 'Forradalom Pesten, *Nemzeti dal*.' },
            { date: '1849. július 31.', text: 'Eltűnik a segesvári csatában.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Gyerekkor és vándorévek' },
        {
          kind: 'text',
          text: 'Petőfi **Kiskőrösön** született, a gyermekkorát Kiskunfélegyházán és a környéken töltötte; az **Alföld** később költészetének alapélménye lett. Apja mészáros és kocsmáros volt, így a költő a nép közelében nőtt fel. Tanult több városban is, a pályája elején katona, majd vándorszínész volt. Az első verse 1842-ben jelent meg; a pesti irodalmi életbe 1844-ben lépett be.',
        },
        { kind: 'heading', text: 'A pesti évek' },
        {
          kind: 'text',
          text: '1844-ben a **Vörösmarty Mihály** támogatásával kiadott *Versek* hozta meg az első sikert. Ugyanebben az évben írta a komikus eposzt (*A helység kalapácsa*) és a népmesei elbeszélő költeményt (*János vitéz*). A **Pesti Divatlap** segédszerkesztőjeként a „népi” hangot az irodalmi élet közepébe vitte.',
        },
        {
          kind: 'text',
          text: '1846-ban baráti írók köre alakult **Tízek Társasága** néven (tagja volt például Jókai Mór); a szervezésben Petőfi mellett Vahot Imre neve is szerepel. A baráti kör a fiatal írók közös fellépését szolgálta. 1847-től szoros barátság fűzte **Arany Jánoshoz**: Petőfi lelkesen köszöntötte a *Toldi*t.',
        },
        { kind: 'heading', text: 'Szendrey Júlia és az érett líra' },
        {
          kind: 'text',
          text: '1847 szeptemberében feleségül vette **Szendrey Júliát**. A koltói nászút termése a *Júlia-versek* egy része (például *Szeptember végén*). Ebben az időszakban a költészete egyszerre mélyül el és válik politikaibbá: a szerelmi vers a mulandósággal, a tájleíró vers a nemzeti sorssal kapcsolódik össze.',
        },
        { kind: 'heading', text: 'Forradalom és szabadságharc' },
        {
          kind: 'text',
          text: '1848-ban a költő a **márciusi ifjak** vezéralakja volt. A *Nemzeti dal* a forradalom jelképévé vált. 1848 őszén honvédnek állt, később **Bem József** tábornok mellett harcolt Erdélyben. Már 1848-ban megírta *Az apostol* című hosszú költeményét. A költészete ekkor válik teljesen közéletivé. **1849 nyarán, a segesvári csatában** eltűnt; a halála körülményei ma sem tisztázottak.',
        },
        {
          kind: 'compare',
          title: 'Petőfi költészetének három szakasza',
          columns: ['Időszak', 'Jellemző művek és témák'],
          rows: [
            {
              label: '1842–1845',
              cells: [
                'vándorévek, kezdetek',
                'népies dalok, *János vitéz*, *A helység kalapácsa*, *Az alföld*',
              ],
            },
            {
              label: '1846–1847',
              cells: [
                'érett líra',
                'Júlia-versek, *A Tisza*, *Egy gondolat bánt engemet*, *A XIX. század költői*',
              ],
            },
            {
              label: '1848–1849',
              cells: ['forradalom, háború', '*Nemzeti dal*, *Az apostol*, a harctéri versek'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Petőfi a **romantika** nagy költője: az egyéniség, a szabadság és a nemzet eszménye, a költő mint népe vezetője (**vátesz**). A romantikus pátoszt azonban a népi nyelv, a hétköznapi helyzetek és a humor egyensúlyozza, ezért a költészetében a romantika és a **népiesség** elválaszthatatlan. A korábbi irodalmi hagyományhoz (Kölcsey *Nemzeti hagyományok*, Vörösmarty, Arany) úgy kapcsolódik, hogy a „nép” a költészet középpontjába kerül, és nemcsak témaként, hanem hangként is megjelenik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Életrajzi kérdés a műelemzés mellett: melyik időszakban, milyen élethelyzetben keletkezett a vers?',
            'Műelemzés vagy összehasonlító elemzés: Petőfi-vers és egy másik költő műve (például Arany, Vörösmarty).',
            'Emelt szinten: a Petőfi-életmű helye a romantikában, a népiesség és a közéleti szerep.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba a keletkezési idők összekeverése. *János vitéz*, *A helység kalapácsa* és *Az alföld* 1844-es; *A Tisza*, *Szeptember végén* és *A XIX. század költői* 1847-es; *Nemzeti dal* 1848-as. Az életrajzi háttér mindig csak támogassa az értelmezést, ne helyettesítse.',
        },
        {
          kind: 'tip',
          text: 'A műelemzés fő menete: **1.** rövid bevezetés (cím, keletkezés, műfaj, téma); **2.** szerkezet és gondolatmenet; **3.** a költői eszközök funkciója; **4.** a vers helye az életműben; **5.** zárás saját megállapítással. Ez a menet minden Petőfi-versnél használható. Részletes mintát a lírai oldalak „A vizsgán” részében találsz.',
        },
      ],
      topicMatch: ['petőfi'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik évben ment Petőfi feleségül Szendrey Júliához?',
          options: ['1844', '1846', '1847', '1849'],
          answer: 2,
          explanation:
            'Az esküvőre 1847 szeptemberében került sor; a koltói nászút verseiből több Júlia-vers született.',
        },
        {
          question: 'Hol tűnt el Petőfi 1849 nyarán?',
          options: ['Világosnál', 'Segesvárnál', 'Komáromnál', 'Isaszegnél'],
          answer: 1,
          explanation:
            'A segesvári csatában tűnt el, a halálának hagyományos dátuma 1849. július 31.',
        },
        {
          question: 'Melyik költő támogatta Petőfit az első kötet megjelenésekor?',
          options: [
            'Vörösmarty Mihály',
            'Kölcsey Ferenc',
            'Berzsenyi Dániel',
            'Csokonai Vitéz Mihály',
          ],
          answer: 0,
          explanation:
            'Vörösmarty Mihály segítette és méltatta a fiatal költőt; Kölcsey, Berzsenyi és Csokonai a korábbi korszakokhoz tartozik.',
        },
        {
          question: 'Melyik művet írta Petőfi 1848-ban?',
          options: ['János vitéz', 'Az alföld', 'Nemzeti dal', 'A helység kalapácsa'],
          answer: 2,
          explanation:
            'A *Nemzeti dal* 1848. március 15-én vált a forradalom jelképévé. A többi mű 1844-es.',
        },
        {
          question: 'Mi a romantikus költő „vátesz” szerepe?',
          options: [
            'A tájat leíró megfigyelő.',
            'A népe vezetője és látnoka.',
            'A humoros szórakoztató.',
            'A pártatlan krónikás.',
          ],
          answer: 1,
          explanation:
            'A vátesz a nemzet tanítója és jövőlátó vezetője; Petőfi forradalmi költészete ezt a szerepet vállalja.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Petőfi Sándor', url: wiki('Petőfi Sándor') },
        { label: 'Wikipédia: Szendrey Júlia', url: wiki('Szendrey Júlia') },
        { label: 'Wikipédia: Tízek Társasága', url: wiki('Tízek Társasága') },
      ],
    },
    {
      id: 'petofi-nepiesseg-tajleiras-szerelem',
      subject: 'magyar',
      unitId: 'petofi',
      title: 'Népiesség, tájleíró költészet és szerelmi líra',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai művek értelmezése: a népies dalok, a tájleíró versek (Az alföld, A Tisza) és a Szeptember végén; műrészletek értelmezése és memoriterek; a művek kapcsolatai és elhelyezése az életműben.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a művek hatása, fogadtatása egy-két példa alapján.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **népiesség** a népköltészet nyelvének, formájának, témáinak és szemléletének beemelése az irodalomba; Petőfi **népies dalai** egyszerű helyzetet, hétköznapi hangot és őszinte érzést mutatnak.',
            '*Az alföld* (1844) a szülőföld dicsérete: az **Alföld** a **Kárpátok** vadregényes tájával szemben a szabadság és az otthonosság tája.',
            '*A Tisza* (1847) a tájleírásból átmegy a nemzeti sors és a közélet gondolatába: a folyó a nép életének is jelképe.',
            '*Szeptember végén* (1847) a **Júlia-versek** legismertebbike: a nyár–tél ellentét a szerelem és a mulandóság viszonyát fejezi ki.',
            'A tájversben és a szerelmi versben is a **konkrét kép** és a **gondolati tanulság** együtt jelenik meg.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'népiesség',
              text: 'A népköltészet és a népélet motívumainak, hangjának és formájának beemelése az irodalmi műbe.',
            },
            {
              term: 'népies dal',
              text: 'Rövid, egyszerű szerkezetű, hétköznapi szavakat használó lírai vers; gyakran helyzetdal (Petőfi korai dalai, például *Füstbement terv*).',
            },
            {
              term: 'tájleíró költészet',
              text: 'A táj a vers központi témája, de a leírás mögött gondolat, érzés, nemzeti jelentés áll.',
            },
            {
              term: 'Júlia-versek',
              text: 'A Szendrey Júliához írt szerelmes versek, köztük a *Szeptember végén*.',
            },
            {
              term: 'szülőföld-dicséret',
              text: 'A költő a hazai tájat magasztalja (*Az alföld*): az otthon és a szabadság képét rajzolja meg.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Népies dal: egyszerűség és őszinteség' },
        {
          kind: 'text',
          text: 'Petőfi korai verseiben a népköltészet hatása erős: **egyszerű mondatok**, hétköznapi helyzet (a lány a konyhában, a kocsmában, útközben), rövid, dalszerű forma. Ilyenek például a *Befordúltam a konyhára*, a *Füstbement terv* vagy a *Reszket a bokor, mert…* kezdetű dalok. A népiesség nála nem a nép stilizált utánzása, hanem **a költő saját érzésének természetes hangja**.',
        },
        {
          kind: 'text',
          text: 'A programot **Kölcsey** és a Kisfaludy Társaság köre alapozta meg, Petőfi viszont a **nép nyelvét, humorát és szabadságvágyát** emelte a magas irodalomba.',
        },
        { kind: 'heading', text: 'Az alföld (1844)' },
        {
          kind: 'text',
          text: 'A vers a szülőföld dicsérete. Az első szakasz egy **elutasítással** kezdődik: *„Mit nekem te zordon Kárpátoknak / Fenyvesekkel vadregényes tája!”* A költő a Kárpátokról mond le. A Kárpátok a romantika **fenséges** tája, de a költő az **Alföldet** választja. Az alföldi tájon a **szabadság** és a **végtelen** érzése, a pusztai élet apró képei (nyáj, kút, a délibáb) és a személyes emlékek kapcsolódnak össze. A vers a szülőföldhöz való **személyes kötődést** mutatja: az Alföld a költő otthona és költészetének forrása.',
        },
        {
          kind: 'keypoints',
          title: 'Az alföld szerkezete',
          items: [
            'a Kárpátok elutasítása, az Alföld választása',
            'az alföldi táj képei: végtelen sík, nyári délután, pusztai élet',
            'a szülőföldhöz kötő személyes emlékek, a vers zárása',
          ],
        },
        { kind: 'heading', text: 'A Tisza (1847)' },
        {
          kind: 'text',
          text: 'A vers a Tiszán eltöltött nyári délután képeit mutatja be: a folyó nyugalma, a víz fénye, a part élete. A tájleírás mögött azonban gondolati szint is van: a költő a **nemzeti sorsra, a nép életére** gondol. A *Tisza* így **tájversből közéleti költeménnyé** emelkedik. A romantikus tájszemlélet itt a **természet és az ember lelke közötti megfelelést** fejezi ki.',
        },
        {
          kind: 'compare',
          title: 'Az alföld és A Tisza',
          columns: ['Az alföld (1844)', 'A Tisza (1847)'],
          rows: [
            {
              label: 'Alapélmény',
              cells: [
                'a szülőföld iránti szeretet, szabadságérzet',
                'a nyugodt tájban születő nemzeti és emberi gondolat',
              ],
            },
            {
              label: 'Tájkép',
              cells: ['a sík, a puszta, a nyári nap', 'a folyó, a víz, a part, az alkonyat'],
            },
            {
              label: 'Szerkezet',
              cells: [
                'elutasítás (Kárpátok), majd az Alföld bemutatása',
                'leírásból közéleti gondolat',
              ],
            },
            {
              label: 'Hang',
              cells: ['lelkes, személyes, dicsőítő', 'szemlélődő, elmélyülő, komolyabb'],
            },
          ],
        },
        { kind: 'heading', text: 'A szerelmi líra: Júlia-versek' },
        {
          kind: 'text',
          text: 'Petőfi korábbi szerelmes versei között ott van a *Cipruslombok Etelke sírjáról* (1845) elégikus ciklusa is. A **Júlia-versek** a házassághoz kapcsolódnak: a szerelem már nem pusztán ábránd, hanem **életre szóló kapcsolat**. A *Szeptember végén* kulcsverse: a költő a kertben és a hegyen látható évszakot (a völgy nyara, a hegytető tele) a saját életére is vonatkoztatja.',
        },
        {
          kind: 'text',
          text: 'Alapkép: **még nyílnak a virágok, de a hegyen már hó van** – az idő múlik. A mulandóság felismerése nem rontja el a szerelmet, hanem a hűség és az emlékezet fontosságát emeli ki. Néhány híres sor: *„Elhull a virág, eliramlik az élet…”*. Az érzelem és a tájkép elválaszthatatlan.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten érdemes elemezni a **tájkép és a lelkiállapot megfeleléseit** (kettős látás: a lélek nyara és az idő múlása), valamint azt, hogyan lesz a személyes szerelmi vallomás egyetemes emberi kérdéssé. A Petőfi-féle szerelmi líra különbözik a korábbi, főleg ábrándozó vagy rokokós szerelmi költészettől is: **hétköznapibb, személyesebb és erősebb érzelmű**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: *Az alföld*, *A Tisza* vagy *Szeptember végén* (a szöveg előtted van).',
            'Összehasonlítás: két tájvers vagy két szerelmes vers (akár különböző költőtől).',
            'Szempontok: témája, hangulata, szerkezete, képei, a vers helye az életműben.',
          ],
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: Szeptember végén',
          problem: 'Írj kb. 600 szavas elemzést a *Szeptember végén* című versről.',
          solution:
            '**Bevezetés**: Petőfi 1847-es verse, a Júlia-versek közé tartozik; a nászút idején született, tájkép és szerelmi vallomás.\n**Szerkezet**: a táj (nyár a völgyben, tél a hegyen), az idő múlásának felismerése, majd a kedveshez szóló kérések a halál utáni emlékezésről.\n**Képek, ellentétek**: nyár–tél, fiatalság–öregkor, élet–halál; a természeti képek a lélek állapotát fejezik ki.\n**Hangnem**: halk, bensőséges, elégikus, mégis a szerelem melegét őrző.\n**Értelmezés**: a vers a szerelem és a mulandóság viszonyát vizsgálja; a hűség és az emlékezet válasz az időre.\n**Zárás**: saját megállapítás: a vers egyszerre személyes és egyetemes.',
        },
        {
          kind: 'warning',
          text: 'Ne mesélj el egy verset! A vizsgáztató az értelmezést keresi: mit fejez ki egy kép, miért fontos az ellentét, hogyan alakul a vers gondolatmenete.',
        },
        {
          kind: 'tip',
          text: 'Ha *A Tisza* vagy *Az alföld* kerül elő, mindig mutasd be a **leírás és a gondolat kapcsolatát**: a táj csak az első szint, mögötte a hon, a szabadság és az otthon állnak.',
        },
      ],
      topicMatch: ['petőfi'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik vers első szakasza utasítja el a Kárpátok tájait?',
          options: ['A Tisza', 'Szeptember végén', 'Az alföld', 'Nemzeti dal'],
          answer: 2,
          explanation:
            '*Az alföld* nyitánya: a költő elutasítja a Kárpátokat; az Alföldet választja.',
        },
        {
          question: 'Melyik vers a Júlia-versek közé tartozik?',
          options: ['Szeptember végén', 'Az alföld', 'A XIX. század költői', 'János vitéz'],
          answer: 0,
          explanation:
            'A *Szeptember végén* a Szendrey Júliához szóló szerelmes versek egyik főműve.',
        },
        {
          question: 'Mi a népies dal fő jellemzője?',
          options: [
            'Bonyolult mitológiai utalások.',
            'Egyszerű nyelv, hétköznapi helyzet, dalszerű forma.',
            'Hosszú filozofikus fejtegetés.',
            'Latin idézetek használata.',
          ],
          answer: 1,
          explanation: 'A népies dal a népköltészethez közelít: egyszerű, természetes hangon szól.',
        },
        {
          question: 'Melyik ellentétre épül a *Szeptember végén* alapképe?',
          options: ['nappal és éjszaka', 'nyár és tél', 'város és falu', 'ifjú és gyermek'],
          answer: 1,
          explanation: 'A völgyben még nyár van, a hegytetőn már tél: ez az idő múlásának képe.',
        },
        {
          question: 'Mire emelkedik a *Tisza* a tájleírásból?',
          options: [
            'Kizárólag természetleírás marad.',
            'Közéleti, nemzeti gondolatot fejez ki.',
            'Komikus eposzi paródia lesz.',
            'Népmesei elbeszélés.',
          ],
          answer: 1,
          explanation:
            'A vers a tájképből a nép és a nemzet sorsára vonatkozó gondolatot is megfogalmaz.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Az alföld (vers)', url: wiki('Az alföld Petőfi Sándor') },
        { label: 'Wikipédia: Szeptember végén', url: wiki('Szeptember végén') },
        { label: 'Wikipédia: Népiesség', url: wiki('Népiesség irodalom') },
      ],
    },
    {
      id: 'petofi-elbeszelo-kolteszet',
      subject: 'magyar',
      unitId: 'petofi',
      title: 'Elbeszélő költészet: A helység kalapácsa és a János vitéz',
      level: 'kozep',
      requirement: {
        kozep:
          'Az elbeszélő művek (A helység kalapácsa, János vitéz) értelmezése: téma, műfaj, kompozíció, jellemző motívumok; a művek elhelyezése az életműben és a korszakban; műrészletek értelmezése.',
        emelt:
          'A művekben felvetett kérdések gondolati, filozófiai és esztétikai vonatkozásai; különféle kritikák, interpretációk.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Mindkét mű **1844-ben** keletkezett, de egészen más műfajú: *A helység kalapácsa* **komikus eposz**, a *János vitéz* **verses népmese**.',
            '*A helység kalapácsa* a nagyeposzok kellékeit (invokáció, seregszemle, hasonlatok) **parodizálja**; a hősei a falusi **Fejenagy**, **Harangláb** és **Erzsók**.',
            'A *János vitéz* hőse **Kukorica Jancsi**, aki **Iluskáért** küzd; útja a valóságos világból a tündérvilágba vezet.',
            'A *János vitéz* versformája **ütemhangsúlyos felező tizenkettes**; *A helység kalapácsa* műfaját az eposzparódia adja.',
            'A kettő **tárgya** és **hangneme** más, de a népi hang és a humor közös.',
          ],
        },
        {
          kind: 'compare',
          title: 'A két elbeszélő költemény',
          columns: ['A helység kalapácsa', 'János vitéz'],
          rows: [
            {
              label: 'Műfaj',
              cells: ['komikus eposz, paródia', 'verses népmese, mesei hősköltemény'],
            },
            { label: 'Hangnem', cells: ['ironikus, gúnyos, humoros', 'derűs, mesés, érzelmes'] },
            {
              label: 'Helyszín',
              cells: ['egy falu', 'falu, csatatér, Óriások földje, Tündérország'],
            },
            {
              label: 'Stílus',
              cells: [
                'fennkölt eposzi stílus, jelentéktelen falusi téma',
                'népies, egyszerű, dalszerű nyelv',
              ],
            },
            {
              label: 'Főszereplő',
              cells: ['Fejenagy, a falu kovácsa', 'János vitéz (Kukorica Jancsi)'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A helység kalapácsa (1844)' },
        {
          kind: 'text',
          text: 'A cím a falusi kovácsot, **Fejenagyot** jelöli, a „helység kalapácsát”. Cselekménye egyszerű: a falu kántora, **Harangláb** és a kovács verseng **Erzsók** kegyeiért, a vita verekedésbe fordul, a hősök a kocsmában is összecsapnak. A hétköznapi történetet a költő a **magasztos eposzi nyelven** adja elő, és éppen ez a **kontraszt** hozza létre a komikumot.',
        },
        {
          kind: 'keypoints',
          title: 'Az eposzi kellékek parodizálása',
          items: [
            'a hős megidézése és a téma megjelölése (invokáció, propozíció)',
            'a hasonlatok és a hősi epitheton-szerkezetek (állandó jelzők)',
            'a „seregszemle” és a hősi küzdelem: itt falusi verekedés',
            'a fennkölt stílus és a jelentéktelen falusi téma ellentéte',
          ],
        },
        {
          kind: 'text',
          text: 'A mű **paródia**: nem a falusi embert gúnyolja, hanem a **nagy eposzok hősi pátoszát**, valamint a korabeli patetikus költészetet. A szöveg így az irodalmi hagyományokkal folytatott játék is.',
        },
        { kind: 'heading', text: 'János vitéz (1844)' },
        {
          kind: 'text',
          text: 'A történet főhőse **Kukorica Jancsi**, árva juhászgyerek, szerelmes **Iluskába**. A gonosz mostoha elűzi, Jancsi a világban bolyong, huszár lesz, majd hősi tettei által **János vitézzé** válik. A mese szerkezete: **a hős elindul – próbákon megy át – megtalálja a boldogságot**. Fontos állomásai: a falu, a katonaélet és a francia királylány megmentése, az **Óriások földje**, a **sötét erdő** boszorkányai, majd **Tündérország**.',
        },
        {
          kind: 'text',
          text: 'A *János vitéz* **27 fejezetből** áll. A népmesei elemek (három próba, tündérek, óriások, varázstárgyak) mellett a **valóságos érzés** is jelen van: a szerelem, a hűség, a hazavágyás. A mű **népies** hangja az egyszerű nyelvben és a dalszerű lüktetésben mutatkozik meg.',
        },
        {
          kind: 'keypoints',
          title: 'János vitéz: motívumok',
          items: [
            'az **árva hős**, aki kiemelkedik a közösségből',
            'a **szerelem** mint mozgatóerő (Iluska)',
            'az **út**, mint a felnőtté válás és a próbák ideje',
            'a **mesei világ** (óriások, boszorkányok, tündérek) és a valóság keveredése',
            'a végső **boldogság**, de egy mesei, nem földi világban',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten érdemes a két művet **műfaji és szemléleti szempontból** összevetni: a *Helység kalapácsa* a magas műfaj parodisztikus megfordítása, a *János vitéz* pedig a népmese és a **romantikus hősköltemény** ötvözése. Mindkettőben megjelenik Petőfi **népies** szemlélete, de az egyik ironikus, a másik naiv-mesés.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műfaji besorolás és indoklás (komikus eposz, verses népmese).',
            'Részlet elemzése: hangnem, nyelvi eszközök, a komikum forrása.',
            'Összehasonlítás: a két mű vagy a János vitéz és más elbeszélő költemény (például Arany *Toldi*ja).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a két mű műfaját! *A helység kalapácsa* komikus eposz (eposzparódia); a *János vitéz* verses népmese, ütemhangsúlyos felező tizenkettesben.',
        },
        {
          kind: 'tip',
          text: 'A komikum forrása *A helység kalapácsában* a **stílus és a téma ellentéte**: nagy szavak, kicsi tárgy. Ha részletet kapsz, keress emelkedett kifejezéseket hétköznapi helyzetben.',
        },
      ],
      topicMatch: ['petőfi'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Milyen műfajú *A helység kalapácsa*?',
          options: ['népmese', 'komikus eposz', 'dráma', 'elégia'],
          answer: 1,
          explanation: 'A mű az eposzi hagyomány paródiája, azaz komikus eposz.',
        },
        {
          question: 'Ki a *János vitéz* hőse?',
          options: ['Fejenagy', 'Harangláb', 'Kukorica Jancsi', 'Toldi Miklós'],
          answer: 2,
          explanation:
            'János vitéz eredeti neve Kukorica Jancsi; a másik két név a *Helység kalapácsa* szereplője, Toldi Arany hőse.',
        },
        {
          question: 'Melyik versforma jellemzi a *János vitézt*?',
          options: ['felező nyolcas', 'szapphói strófa', 'felező tizenkettes', 'alkaioszi strófa'],
          answer: 2,
          explanation: 'A *János vitéz* ütemhangsúlyos, 6+6 tagolású felező tizenkettes.',
        },
        {
          question: 'Mi a komikum fő forrása *A helység kalapácsában*?',
          options: [
            'Az idegen nyelvű idézetek.',
            'A magas stílus és a hétköznapi téma ellentéte.',
            'A történelmi események elferdítése.',
            'A rímek hiánya.',
          ],
          answer: 1,
          explanation: 'Falusi verekedést adnak elő eposzi szavakkal, és ez a kontraszt komikus.',
        },
        {
          question: 'Hol ér véget János vitéz útja?',
          options: ['Franciaországban', 'Tündérországban', 'Pesten', 'A pusztán'],
          answer: 1,
          explanation: 'A tündérországi jutalom a mesei befejezés.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: János vitéz', url: wiki('János vitéz Petőfi') },
        { label: 'Wikipédia: A helység kalapácsa', url: wiki('A helység kalapácsa') },
      ],
    },
    {
      id: 'petofi-forradalmi-latnoki-kolteszet',
      subject: 'magyar',
      unitId: 'petofi',
      title: 'Forradalmi és látnoki költészet',
      level: 'kozep',
      requirement: {
        kozep:
          'A forradalmi és látnoki művek (Nemzeti dal, A XIX. század költői, Egy gondolat bánt engemet) értelmezése: téma, kifejezésmód, jellemző motívumok; memoriterek szöveghű előadása; a művekben felvetett kérdések történeti, társadalmi vonatkozásai.',
        emelt:
          'A pályaképre ható irányzatok és szellemi kötődések; a művekben felvetett kérdések gondolati, esztétikai vonatkozásai; a szerző hatása és utóélete.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A forradalmi líra Petőfi **közéleti szerepvállalásából** nő ki: a költő nemcsak az érzéseit, hanem a közösség kérdéseit is megszólaltatja.',
            '*Egy gondolat bánt engemet* (keletkezési ideje a forrásokban eltér): a költő a **szabadságért vívott harcban** akar meghalni, nem ágyban, párnák közt.',
            '*A XIX. század költői* (1847): a **költő hivatásáról** szól; a kor költője a nép és az új eszmék szolgálatában áll.',
            '*Nemzeti dal* (1848. március 15.): a **forradalom himnusza**, refrénje az eskü: a közösség megesküszik, hogy nem lesz rab',
            'A **látnok** (vátesz) költő előre jelzi a jövőt, és vezeti a közösséget.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'közéleti költészet',
              text: 'A közösség ügyeit, a politikai és társadalmi kérdéseket tárgyaló költészet.',
            },
            {
              term: 'vátesz',
              text: 'Látnok költő: a közösségnek utat mutat, és a jövőről is szól.',
            },
            { term: 'felhívás', text: 'Cselekvésre buzdító versbeszéd (a *Nemzeti dal* alapja).' },
            {
              term: 'refrén',
              text: 'Ismétlődő sor a versszakok végén; a *Nemzeti dalban* az eskü.',
            },
            {
              term: 'szabadság-eszmény',
              text: 'A romantika alapeszméje: a nemzeti és az egyéni szabadság elérése.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Egy gondolat bánt engemet' },
        {
          kind: 'text',
          text: 'A vers híres nyitánya: *„Egy gondolat bánt engemet: / Ágyban, párnák közt halni meg!”* A költő ezt a kényelmes halált utasítja el, helyette azt kívánja: *„Ott essem el én, / A harc mezején”*. A költő nem a békés, hétköznapi halált kívánja, hanem a **hősi halált a szabadságért**. A párnák a kényelmes, tétlen élet jelképei; a csatatér a vállalt küzdelemé. A vers az **ellentétre** épül: a nyugalmas, értelmetlen halál és az áldozatos, értelmes halál. Közben megjelenik a **világszabadság** gondolata is: a harc a szabadság egyetemes ügye.',
        },
        {
          kind: 'text',
          text: 'Egyik legismertebb gondolata, hogy a költő a harc mezején akar elesni. A költői szerepvállalás tehát nemcsak elképzelés: a költő a **halálát is a közösség ügyének szenteli**. A vers prófétai jellegű, mert az életút végét előre megsejteti.',
        },
        { kind: 'heading', text: 'A XIX. század költői (1847)' },
        {
          kind: 'text',
          text: 'A költemény a **költői hivatás** kérdésére válaszol. Petőfi szerint a XIX. század költője nem elégedhet meg a magánérzések kifejezésével: a **nép szolgálatában** áll, a **szabadság és haladás eszméit** hirdeti, és a jövőt is megjósolja. A vers hangneme gúnyos, kritikus (a hivatását nem teljesítő költőkkel szemben), majd egyre lelkesebb és prófétikusabb. A költő feladata a **népet felvilágosítani, vezetni**, így a költészet társadalmi eszköz.',
        },
        { kind: 'heading', text: 'Nemzeti dal (1848)' },
        {
          kind: 'text',
          text: 'A *Nemzeti dal* **1848. március 15-én** a forradalom jelképévé vált: a márciusi ifjak cenzúra nélkül kinyomtatták. A cím a közösségi műfajra utal. A vers **felszólítással** indul: *„Talpra magyar, hí a haza! / Itt az idő, most vagy soha!”* Ezt követi a **döntési kérdés**: *„Rabok legyünk, vagy szabadok? / Ez a kérdés, válasszatok!”* A **refrén** a közösség esküje: *„A magyarok istenére / Esküszünk, / Esküszünk, hogy rabok tovább / Nem leszünk!”*; a vers így a költő és a nép **párbeszéde**.',
        },
        {
          kind: 'keypoints',
          title: 'A Nemzeti dal szerkezete',
          items: [
            'a felszólítás és a döntési kérdés (talpra magyar, rabok vagy szabadok)',
            'az **Isten** megidézése, a múlt (az elődök) és a jelen összekapcsolása',
            'a **refrén**: az eskü, amely az egész közösség vállalása',
            'a **jelenre** szóló, egyszerű, ütemes és dallamos, ütemhangsúlyos forma',
          ],
        },
        {
          kind: 'compare',
          title: 'A három közéleti vers',
          columns: ['Téma', 'Hangnem és szerep'],
          rows: [
            {
              label: 'Egy gondolat bánt engemet',
              cells: ['a hősi halál kívánsága', 'személyes vallomás, látnoki sejtés'],
            },
            {
              label: 'A XIX. század költői',
              cells: ['a költői hivatás', 'gúnyos, majd lelkes tanító, vátesz'],
            },
            {
              label: 'Nemzeti dal',
              cells: ['döntés a szabadság mellett', 'felhívó, közösségi, eskü'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A forradalmi líra jelentősége az emelt szinten az, hogy Petőfi a **költőt a nép vezetőjeként** határozza meg (vátesz-szerep), és a **világszabadság** nem csak nemzeti, hanem egyetemes eszmény. A szerepvállalás ugyanakkor kérdéseket is vet fel: mi a költő felelőssége, és hol a határa a művészet és a politika között?',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés a *Nemzeti dal*, *Egy gondolat bánt engemet* vagy *A XIX. század költői* alapján.',
            'Összehasonlítás: két költői hivatásvers (például Petőfi és Vörösmarty vagy Arany).',
            'Szempont: a költői szerep, a hangnem, a megszólítás, a szerkezet.',
          ],
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: Nemzeti dal',
          problem: 'Vázold fel egy elemzés menetét a *Nemzeti dal*ról.',
          solution:
            '**Bevezetés**: 1848. március 15., a forradalom verse, közéleti költemény; a költő és a közösség szerepe.\n**Szerkezet**: felszólítás, a döntés kérdése, a közösség válasza (refrén), az eskü vállalása.\n**Eszközök**: felkiáltás, kérdés, a refrén ismétlése, egyszerű és ütemes nyelv, a megszólított „magyar” közösség.\n**Hangnem**: lelkes, felhívó, ünnepélyes.\n**Értelmezés**: a költő nem egyedül szól: a nép nevében beszél, és a vers jelképpé válik a szabadság szempontjából.\n**Zárás**: a verset egyszerre jellemzi a közvetlen politikai hatás és az időtálló érvényesség.',
        },
        {
          kind: 'warning',
          text: 'A *Nemzeti dal* nem szerelmes vers, nem is elégikus: ne a magánérzelmek felől közelíts. Mindig a közösségi felhívás, a refrén és a döntési helyzet legyen a középpontban.',
        },
        {
          kind: 'tip',
          text: 'Ha a **költői szerep** a feladat, kapcsold össze a három verset: *Egy gondolat bánt engemet* (személyes vállalás), *A XIX. század költői* (a hivatás elmélete), *Nemzeti dal* (a gyakorlati megvalósulás). Az ilyen lépcsőzetes gondolatmenet erős érv.',
        },
      ],
      topicMatch: ['petőfi'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik vers refrénje az eskü?',
          options: ['Az alföld', 'Szeptember végén', 'A Tisza', 'Nemzeti dal'],
          answer: 3,
          explanation: 'A *Nemzeti dal* refrénje a közösség esküje, a rabság elutasítása.',
        },
        {
          question: 'Mit kíván a költő az *Egy gondolat bánt engemet* című versben?',
          options: [
            'Békés öregkort.',
            'Hősi halált a szabadságért.',
            'Hírnevet a külföldön.',
            'Visszatérést a szülőföldre.',
          ],
          answer: 1,
          explanation: 'A költő nem ágyban, párnák közt, hanem a szabadság harcában akar meghalni.',
        },
        {
          question: 'Mi *A XIX. század költői* központi témája?',
          options: [
            'Egy szerelmi történet.',
            'A költő hivatása és feladata.',
            'A Kárpátok szépsége.',
            'A gyermekkor emléke.',
          ],
          answer: 1,
          explanation:
            'A vers a kor költőjének feladatát, a nép és a szabadság szolgálatát fogalmazza meg.',
        },
        {
          question: 'Mikor vált a *Nemzeti dal* a forradalom jelképévé?',
          options: [
            '1847. szeptember',
            '1848. április 11.',
            '1849. július 31.',
            '1848. március 15.',
          ],
          answer: 3,
          explanation:
            'A pesti forradalom napján, 1848. március 15-én kinyomtatták és elszavalták.',
        },
        {
          question: 'Mit jelent a vátesz kifejezés?',
          options: [
            'Szerelmes költő.',
            'Látnok, a közösség vezetőjeként fellépő költő.',
            'Népi dalnok.',
            'Humoros mesemondó.',
          ],
          answer: 1,
          explanation:
            'A vátesz a jövőt is megsejtő, a nemzetet vezető költő; a romantika egyik jellegzetes költőszerepe.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nemzeti dal', url: wiki('Nemzeti dal Petőfi') },
        { label: 'Wikipédia: Egy gondolat bánt engemet', url: wiki('Egy gondolat bánt engemet') },
        { label: 'Wikipédia: A XIX. század költői', url: wiki('A XIX. század költői') },
      ],
    },
    {
      id: 'petofi-vilagszabadsag-apostol-verseles',
      subject: 'magyar',
      unitId: 'petofi',
      title: 'Világszabadság, Az apostol, romantika és verselés',
      level: 'emelt',
      requirement: {
        emelt:
          'A pályaképre ható irányzatok és szellemi kötődések (romantika); a művekben felvetett gondolati, filozófiai és esztétikai kérdések; a szerző hatása és utóélete.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **világszabadság** eszménye: Petőfi szerint a szabadságot nem egy nemzet, hanem az egész emberiség számára kell kiharcolni.',
            '*Az apostol* (1848) hosszú, **elbeszélő–lírai költemény**: hőse **Szilveszter**, aki a nép szabadságáért küzd; a mű a költő önkifejezése is.',
            'Petőfi a **romantika** nagy költője, de a romantikát **népiességgel** és hétköznapi nyelvvel ötvözi.',
            '**Verselés**: a Petőfi-versek többsége **ütemhangsúlyos** (népies ritmus), az időmértékes verselés az antik eposzok hagyománya (hexameter).',
            'A *János vitéz* ütemhangsúlyos **felező tizenkettes** (6+6) sorokban íródott.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'világszabadság',
              text: 'Az egyetemes emberi szabadság eszménye, amely túlmutat a nemzeti kereten.',
            },
            {
              term: 'ütemhangsúlyos verselés',
              text: 'A versritmust a hangsúlyos ütemek szabályos váltakozása adja; a szótagszám állandó, a szótagok időtartama nem számít.',
            },
            {
              term: 'időmértékes verselés',
              text: 'A ritmust a hosszú és rövid szótagok szabályos sorrendje adja (például az antik eposzok hexametere).',
            },
            { term: 'felező nyolcas', text: 'Nyolc szótagos, 4+4 tagolású sor.' },
            {
              term: 'felező tizenkettes',
              text: 'Tizenkét szótagos, 6+6 tagolású sor (*János vitéz*).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A világszabadság eszménye' },
        {
          kind: 'text',
          text: 'Petőfi a szabadságot **egyetemes eszmének** tekinti: nem elég egy nemzet szabadsága, mert a **szabadság az emberiség közös ügye**. Ezért a költő hajlandó „világszabadságért” harcolni, és az *Egy gondolat bánt engemet* is ezt a gondolatot fejezi ki: az áldozat értelme az egész emberiségért való küzdelem. A világszabadság eszméje a **romantika** és a **forradalmi eszmék** (szabadság, egyenlőség, testvériség) örököse.',
        },
        { kind: 'heading', text: 'Az apostol (1848)' },
        {
          kind: 'text',
          text: 'Az 1848-ban írt hosszú költemény főhőse **Szilveszter**, aki a nép szabadságáért vállal küzdelmet. A mű **önéletrajzi vonásokat** is tartalmaz, és a **költői küldetést** egy kudarcokkal is járó eszmei útként mutatja be. A hős a **forradalmár apostol**: a szabadságot hirdeti, de a világ nem érti meg teljesen. A műben egyszerre van jelen a **lírai önkifejezés** és az **elbeszélés**.',
        },
        {
          kind: 'warning',
          text: 'Az apostol nem a *János vitéz* vagy a *Helység kalapácsa* típusú mese vagy paródia: ez **eszmei, komor hangú** költemény. Ne a cselekményt, hanem a hős sorsát és az eszmei mondanivalót emeld ki.',
        },
        { kind: 'heading', text: 'Petőfi és a romantika' },
        {
          kind: 'compare',
          title: 'Romantikus és népies vonások',
          columns: ['Romantikus vonás', 'Népies vonás'],
          rows: [
            {
              label: 'Szemlélet',
              cells: ['szabadság, nemzet, egyéniség', 'a nép élete és hangja'],
            },
            {
              label: 'Költőszerep',
              cells: ['vátesz, hivatás, prófétai küldetés', 'a nép fia, a nép nevében szól'],
            },
            {
              label: 'Nyelv',
              cells: ['pátosz, nagy képek', 'egyszerű szavak, humor, népdalszerűség'],
            },
            { label: 'Táj', cells: ['a fenséges és a végtelen', 'az alföldi hétköznapi világ'] },
          ],
        },
        {
          kind: 'text',
          text: 'A kettő nem választható el: Az *Alföld* táját **romantikus lelkesedés** teszi emelkedetté, a *Nemzeti dal* ugyanakkor **népdalszerű egyszerűséggel** szól. A Petőfi-költészet egyik legnagyobb eredménye az, hogy a **romantikát közérthetővé** tette.',
        },
        { kind: 'heading', text: 'Verselés' },
        {
          kind: 'compare',
          title: 'Ütemhangsúlyos és időmértékes verselés',
          columns: ['Ütemhangsúlyos', 'Időmértékes'],
          rows: [
            {
              label: 'Alapelv',
              cells: [
                'a hangsúlyos ütemek szabályos sorrendje',
                'a hosszú és rövid szótagok szabályos sorrendje',
              ],
            },
            { label: 'Eredet', cells: ['népdal, magyar hagyomány', 'görög–latin hagyomány'] },
            {
              label: 'Példa',
              cells: ['*Nemzeti dal*, *János vitéz*, a legtöbb dal', 'az antik eposzok hexametere'],
            },
            {
              label: 'Hatás',
              cells: ['dallamos, könnyen megjegyezhető', 'ünnepélyes, az eposzi hagyományt idézi'],
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Verselemzéskor mindig állapítsd meg a **szótagszámot**, a **tagolást** (hány ütem, hol van a cezúra) és a **rímképletet**, majd mondd el, **milyen hatást** kelt (például a *Nemzeti dal* ritmusa lendületes, a menetelő tömegre emlékeztet).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű esszé: a költői szerep és a világszabadság eszménye Petőfinél.',
            'Összehasonlítás: Petőfi és más romantikus költő (Vörösmarty, Arany) szemlélete.',
            'Verstani kérdés: egy rövid versrészlet ütemhangsúlyos vagy időmértékes jellegének meghatározása.',
          ],
        },
        {
          kind: 'example',
          title: 'Esszévázlat: Petőfi és a romantika',
          problem: 'Mutasd be, hogyan jelenik meg a romantika Petőfi költészetében.',
          solution:
            '**Tétel**: Petőfi a romantika nagy költője, de a romantikus eszményeket a népiességgel ötvözi.\n**1. érv**: a szabadság- és nemzeteszmény (*Nemzeti dal*, *Egy gondolat bánt engemet*).\n**2. érv**: a költő mint vátesz (*A XIX. század költői*, *Az apostol*).\n**3. érv**: a táj és a lélek összhangja (*Az alföld*, *A Tisza*, *Szeptember végén*).\n**4. érv**: a népies hang és forma (népies dalok, *János vitéz*).\n**Összegzés**: a romantikát közérthetővé és közösségivé tette.',
        },
        {
          kind: 'tip',
          text: 'Az emelt szintű elemzésben **hozz példát minden állításhoz**: egy-egy rövid idézet vagy motívum többet ér, mint az általános megállapítás.',
        },
      ],
      topicMatch: ['petőfi'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Ki a főhőse *Az apostol* című költeménynek?',
          options: ['Szilveszter', 'Fejenagy', 'Kukorica Jancsi', 'Toldi'],
          answer: 0,
          explanation: 'Az apostol hőse Szilveszter, aki a nép szabadságáért harcol.',
        },
        {
          question: 'Milyen műfajú a *Nemzeti dal*?',
          options: ['elégia', 'kardal és induló', 'komikus eposz', 'verses népmese'],
          answer: 1,
          explanation:
            'A *Nemzeti dal* induló és kardal: közösségi, felszólító jellegű költemény refrénnel.',
        },
        {
          question: 'Melyik Petőfi-mű az eposz paródiája?',
          options: ['János vitéz', 'Nemzeti dal', 'A helység kalapácsa', 'Szeptember végén'],
          answer: 2,
          explanation:
            '*A helység kalapácsa* komikus eposz: a falusi történetet eposzi kellékekkel és fennkölt stílusban mondja el.',
        },
        {
          question: 'Mit jelent a világszabadság eszménye?',
          options: [
            'Csak a magyar nemzet szabadságát.',
            'Az egész emberiség szabadságát.',
            'A kereskedelmi szabadságot.',
            'A költő szabad szerelmét.',
          ],
          answer: 1,
          explanation: 'A világszabadság egyetemes eszmény, amely túlmutat egyetlen nemzet ügyén.',
        },
        {
          question: 'Mi Petőfi romantikájának fő sajátossága?',
          options: [
            'Távoli, mitikus világok.',
            'Romantikus eszmék népies hangon.',
            'Klasszicista mértéktartás.',
            'Nyelvújítási szóalkotások.',
          ],
          answer: 1,
          explanation:
            'Petőfi a szabadság- és hivatáseszményt népies, közérthető nyelven fejezi ki.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Az apostol (Petőfi)', url: wiki('Az apostol Petőfi Sándor') },
        { label: 'Wikipédia: Ütemhangsúlyos verselés', url: wiki('Ütemhangsúlyos verselés') },
        { label: 'Wikipédia: Romantika', url: wiki('Romantika irodalom') },
      ],
    },
  ],
};

export default unit;
