import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar irodalom: határon túli irodalom, kortárs irodalom, az irodalom határterületei (4., 5., 8. témakör). */
const unit: GuideUnit = {
  id: 'hataron-tuli-kortars',
  subject: 'magyar',
  order: 75,
  title: 'Határon túli, kortárs és határterületi irodalom',
  requirementRef:
    '2.1 Szerzők, művek: 4. Metszetek a 20. századi délvidéki, erdélyi, felvidéki és kárpátaljai irodalomból; 5. Művek a kortárs magyar irodalomból; 8. Az irodalom határterületei VAGY Regionális irodalom',
  intro:
    'A trianoni békeszerződés utáni határon túli magyar irodalom válogatott szerzői (Áprily Lajos, Dsida Jenő, Gion Nándor, Kányádi Sándor, Kovács Vilmos, Reményik Sándor, Sütő András, Tamási Áron, Wass Albert), a kortárs művek értelmezése és az irodalom határterületei: népköltészet, adaptáció, ifjúsági és szórakoztató irodalom.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 4., 5. és 8. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'erdelyi-irodalom-20-szazad',
      subject: 'magyar',
      unitId: 'hataron-tuli-kortars',
      title: 'Erdélyi irodalom a 20. században',
      level: 'kozep',
      requirement: {
        kozep:
          'A felsorolt szerzők közül az életmű néhány jellemzője keretében néhány lírai és/vagy egy-három epikai, drámai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); műrészletek értelmezése; memoriterek előadása; a művekben felvetett kérdések etikai, történeti, lélektani vagy társadalmi vonatkozása.',
        emelt:
          'Kronológiai és topográfiai tájékozottság, a szerzők regionális és kulturális kötődései, a pályakép főbb jellemzői (lásd az emelt oldalt).',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **trianoni békeszerződés (1920)** után Erdély Romániához került; az itt élő magyarok **kisebbségi** helyzetben alkottak. Az erdélyi magyar irodalom központja **Kolozsvár** lett.',
            'A lista erdélyi szerzői: **Reményik Sándor**, **Áprily Lajos**, **Dsida Jenő**, **Tamási Áron**, **Wass Albert**, **Kányádi Sándor**, **Sütő András**.',
            'Visszatérő témák: a **szülőföld** és a **táj**, a **megmaradás** kérdése, a közösség és az egyén felelőssége, a kisebbségi lét.',
            'Fontos fórumok: a *Pásztortűz* folyóirat és az *Erdélyi Helikon* köre (Reményik, Áprily, Dsida is kapcsolódott hozzájuk).',
            'A vizsgán **néhány mű** értelmezését kérik, nem az egész életművet; a szerzőt a korszaka és a témái alapján kell elhelyezned.',
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Reményik Sándor (1890–1941)',
              text: 'Kolozsvári költő; „Végvári” álnéven is publikált; a kisebbségi sors és a helytállás lírikusa.',
            },
            {
              name: 'Áprily Lajos (1887–1967)',
              text: 'Természetközeli, letisztult hangú költő; legismertebb verse a *Március*.',
            },
            {
              name: 'Dsida Jenő (1907–1938)',
              text: 'A fiatalon elhunyt költő; *Psalmus Hungaricus*, *Nagycsütörtök*.',
            },
            {
              name: 'Tamási Áron (1897–1966)',
              text: 'Székelyföldi prózaíró; az *Ábel*-trilógia szerzője.',
            },
            {
              name: 'Wass Albert (1908–1998)',
              text: 'Erdélyi származású, népszerű prózaíró és költő; emigrációban halt meg. Megítélése vitatott.',
            },
            {
              name: 'Kányádi Sándor (1929–2018)',
              text: 'Székelyföldi költő, műfordító és gyermekversíró; *Valaki jár a fák hegyén*.',
            },
            {
              name: 'Sütő András (1927–2006)',
              text: 'Író és drámaíró; *Anyám könnyű álmot ígér*, *Egy lócsiszár virágvasárnapja*, *Csillag a máglyán*.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A történelmi háttér' },
        {
          kind: 'text',
          text: 'Az első világháború után Erdély Romániához került, a magyar irodalmi élet pedig a trianoni határok miatt több központra szakadt. Az erdélyi magyar írók számára kulcskérdés lett, hogyan marad meg a közösség a nyelvével és a kultúrájával kisebbségben. Ez adja a **végvári**, **helytállást** hirdető hangot, a **transzilvanizmus** gondolatát (az erdélyi sajátos szellemi hagyomány) és később a diktatúra alatti **megmaradás-irodalmat**.',
        },
        { kind: 'heading', text: 'Reményik Sándor' },
        {
          kind: 'text',
          text: '**Reményik Sándor** Kolozsváron született (1890) és ott halt meg (1941). Első kötete a *Fagyöngyök* (1918); 1921-ben „Végvári” néven jelent meg a *Mindhalálig* és a *Hangok a végekről* alcímű verskötet. A *Pásztortűz* című folyóirat főszerkesztője is volt. Költészetének alapkérdése a kisebbségi sorsban való kitartás: a **végvári** hang a közösség védelmét és a hűséget hangsúlyozza. Sírfelirata: *Egy lángot adok, ápold, add tovább*.',
        },
        { kind: 'heading', text: 'Áprily Lajos' },
        {
          kind: 'text',
          text: '**Áprily Lajos** (született Jékely Lajos) Brassóban született (1887), a gyermekkorát Parajdon töltötte; Nagyenyeden tanított, 1926-tól Kolozsváron az *Erdélyi Helikon* szerkesztője lett, 1929-ben Budapestre költözött, később Szentgyörgypusztán, Visegrád mellett élt. Az *Esti párbeszéd* (1923) kötetében jelent meg a **Március**, legismertebb verse. Költészetét a **természet közelsége**, a tájélmény, a tömör, letisztult forma és a klasszikus hagyományhoz való kötődés jellemzi.',
        },
        { kind: 'heading', text: 'Dsida Jenő' },
        {
          kind: 'text',
          text: '**Dsida Jenő** Szatmárnémetiben született (1907), Kolozsváron halt meg (1938). Kötetei: *Leselkedő magány* (1928), *Nagycsütörtök* (1933), a halála után megjelent *Angyalok citeráján* (1938). A **Psalmus Hungaricus** zsoltárszerű, a nemzeti sors fölötti fohász, amely sokáig kéziratos másolatokban terjedt. A *Nagycsütörtök* a szenvedés és a hit, a gyermeki hang és az elmélyült vallásos líra kapcsolatát mutatja. Dsida a *Cimbora* gyermeklapnak is rendszeres szerzője volt.',
        },
        { kind: 'heading', text: 'Tamási Áron' },
        {
          kind: 'text',
          text: '**Tamási Áron** Farkaslakán született (1897), Budapesten halt meg (1966). A **székely** világot jeleníti meg humorral, népi bölcsességgel és mesés elemekkel. Fő műve az **Ábel-trilógia**: *Ábel a rengetegben* (1932), *Ábel az országban* (1933), *Ábel Amerikában* (1934). Ábel a főhős, aki a rengetegben, majd a nagyvilágban próbálja megtalálni a helyét; a regény a **beavatódás**, az önállósodás és az **otthon** értékének története. Színpadi műve az *Énekes madár* (1934).',
        },
        { kind: 'heading', text: 'Wass Albert' },
        {
          kind: 'text',
          text: '**Wass Albert** 1908-ban született Válaszúton, 1945-ben elhagyta az országot, az Egyesült Államokban élt, és 1998-ban halt meg. Ismert művei: *Farkasverem* (1934), *Adjátok vissza a hegyeimet!* (1949), *A funtineli boszorkány* (1959), *Kard és kasza* (1974). A tájélmény, a vadon és a természet, a **pusztulás és a megmaradás** motívumai jellemzik, nyelvezete költői. Az írót népszerűsége mellett **vita övezi**: a háború utáni román bíróság távollétében elítélte, ezt ő és családja alaptalannak tartotta, az irodalomtörténészek pedig eltérően értékelik. A vizsgán a műveket szövegszerűen kell értelmezni, a politikai vitát tárgyilagosan, tényekre támaszkodva kezelheted.',
        },
        { kind: 'heading', text: 'Kányádi Sándor' },
        {
          kind: 'text',
          text: '**Kányádi Sándor** Nagygalambfalván született (1929), Budapesten halt meg (2018). Első kötete a *Virágzik a cseresznyefa* (1955); további kötetei: *Függőleges lovak* (1968), *Fától fáig* (1970), *Sörény és koponya* (1989). Költészete a **székely hagyományt**, a természetet és a kisebbségi létet köti össze, a hangja egyszerű, a gondolati mélysége nagy. Gyermekverseket is írt (*Fából vaskarika*, 1969) és jelentős műfordító volt.',
        },
        {
          kind: 'text',
          text: 'A *Valaki jár a fák hegyén* a bizalom és a remény verse, és az emberi létezés kérdéseit teszi fel. Nyitó sorai: „valaki jár a fák hegyén / ki gyújtja s oltja csillagod”. A rejtélyes „valaki” és a csillagok motívuma a transzcendens jelenlét érzetét kelti.',
        },
        {
          kind: 'tip',
          text: 'Kányádi Sándor *Valaki jár a fák hegyén* című verse a Memoriterek szakaszban megtalálható az alkalmazásban.',
        },
        { kind: 'heading', text: 'Sütő András' },
        {
          kind: 'text',
          text: '**Sütő András** Pusztakamarás faluban született (1927), Budapesten halt meg (2006). Az *Anyám könnyű álmot ígér* (1970) vallomásos regény: a szülőfalu, a család, az anyához való viszony és a közösség sorsa fonódik össze benne. Drámái a **hatalom és az egyén erkölcsi konfliktusát** állítják a középpontba: *Egy lócsiszár virágvasárnapja* (Kleist Kohlhaas Mihály című elbeszélésének nyomán), *Csillag a máglyán* (Szervét Mihály és Kálvin János vitájáról), *Káin és Ábel*, *Advent a Hargitán*. Ezekben a történelmi példázat a saját korra is vonatkozik.',
        },
        {
          kind: 'compare',
          title: 'Az erdélyi szerzők műfaji kapcsolódásai',
          columns: ['Szerző', 'Fő műfaj és tipikus mű'],
          rows: [
            { label: 'Reményik Sándor', cells: ['líra', 'végvári versek, *Mindhalálig*'] },
            { label: 'Áprily Lajos', cells: ['líra', '*Március*, *Esti párbeszéd*'] },
            { label: 'Dsida Jenő', cells: ['líra', '*Psalmus Hungaricus*, *Nagycsütörtök*'] },
            { label: 'Tamási Áron', cells: ['epika, dráma', '*Ábel*-trilógia, *Énekes madár*'] },
            { label: 'Wass Albert', cells: ['epika, líra', '*Adjátok vissza a hegyeimet!*'] },
            { label: 'Kányádi Sándor', cells: ['líra, gyermekvers', '*Valaki jár a fák hegyén*'] },
            { label: 'Sütő András', cells: ['epika, dráma', '*Anyám könnyű álmot ígér*'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: a szerzők közül egyet vagy kettőt kell bemutatnod néhány mű értelmezésével, jellemzően a korstílus, a téma, a műfaj és a kompozíció szempontjából.',
            'Írásbeli irodalmi feladatlap: a tételsorban szereplő szerző egy műrészletének értelmezése.',
            'Memoriter: a megtanult vers szöveghű és kifejező előadása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne csak életrajzot mondj. A vizsgán a **mű** értelmezése a fontos: mit mond, hogyan van felépítve, milyen motívumok, képek hordozzák. Wass Albert esetében külön ügyelj arra, hogy az írói teljesítményről és a művekről beszélj, a politikai vitát csak tényszerűen említsd.',
        },
        {
          kind: 'tip',
          text: 'Minta-vázlat egy erdélyi szerző tételéhez: **1.** hely és idő (Erdély, kisebbségi helyzet, a szerző kötődése); **2.** két-három mű (téma, műfaj, motívumok); **3.** világlátás (megmaradás, szülőföld, erkölcsi kérdések); **4.** a mű hatása, a mai olvasó számára fontos üzenete.',
        },
      ],
      topicMatch: [
        'dsida',
        'reményik',
        'áprily',
        'kányádi',
        'sütő andrás',
        'tamási áron',
        'wass albert',
      ],
      cards: { subject: 'magyar', era: 'kesomodern' },
      quiz: [
        {
          question: 'Melyik szerző műve a *Psalmus Hungaricus*?',
          options: ['Reményik Sándor', 'Áprily Lajos', 'Dsida Jenő', 'Kányádi Sándor'],
          answer: 2,
          explanation:
            'A *Psalmus Hungaricus* Dsida Jenő zsoltárszerű verse; Reményik a „Végvári” hangot, Áprily a *Március*t, Kányádi a *Valaki jár a fák hegyén*t írta.',
        },
        {
          question: 'Melyik mű Tamási Áron Ábel-trilógiájának első része?',
          options: ['Ábel Amerikában', 'Ábel az országban', 'Énekes madár', 'Ábel a rengetegben'],
          answer: 3,
          explanation:
            'A trilógia első része az *Ábel a rengetegben* (1932), amelyet az *Ábel az országban* és az *Ábel Amerikában* követ.',
        },
        {
          question: 'Melyik költő használta a „Végvári” álnevet?',
          options: ['Reményik Sándor', 'Dsida Jenő', 'Áprily Lajos', 'Kányádi Sándor'],
          answer: 0,
          explanation:
            'Reményik Sándor „Végvári” néven adta ki a *Mindhalálig* és a *Hangok a végekről* verseit.',
        },
        {
          question: 'Melyik drámája Sütő Andrásnak?',
          options: [
            'Csillag a máglyán',
            'Énekes madár',
            'Adjátok vissza a hegyeimet!',
            'Fából vaskarika',
          ],
          answer: 0,
          explanation:
            'A *Csillag a máglyán* Sütő András drámája Szervét Mihályról és Kálvinról; az *Énekes madár* Tamási, a másik két mű Wass, illetve Kányádi műve.',
        },
        {
          question: 'Melyik Áprily Lajos legismertebb verse?',
          options: ['Március', 'Nagycsütörtök', 'Mindhalálig', 'Sörény és koponya'],
          answer: 0,
          explanation:
            'A *Március* az *Esti párbeszéd* (1923) kötet verse, Áprily legismertebb költeménye. A *Nagycsütörtök* Dsidáé, a *Sörény és koponya* Kányádié.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Erdélyi magyar irodalom', url: wiki('erdélyi magyar irodalom') },
        { label: 'Wikipédia: Reményik Sándor', url: wiki('Reményik Sándor') },
        { label: 'Wikipédia: Kányádi Sándor', url: wiki('Kányádi Sándor') },
      ],
    },
    {
      id: 'delvideki-felvideki-karpataljai-irodalom',
      subject: 'magyar',
      unitId: 'hataron-tuli-kortars',
      title: 'Délvidéki, felvidéki és kárpátaljai irodalom',
      level: 'kozep',
      requirement: {
        kozep:
          'A délvidéki, felvidéki és kárpátaljai irodalomból a felsorolt szerzők (Gion Nándor, Kovács Vilmos) néhány művének bemutatása, értelmezése; a világlátás és a kifejezésmód sajátosságai; műrészletek értelmezése; a művekben felvetett etikai, történeti, lélektani vagy társadalmi kérdések. A lista bővíthető hasonló jelentőségű szerzővel.',
        emelt:
          'Kronológiai és topográfiai tájékozottság, regionális és kulturális kötődések; a művek hatása, fogadtatása, a szerző utóélete.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyar nyelvű irodalom a trianoni határok mentén több régióban él: **Erdély**, **Felvidék** (ma Szlovákia), **Délvidék** (a Vajdaság, ma Szerbia) és **Kárpátalja** (ma Ukrajna).',
            'A hivatalos listán a Délvidékhez **Gion Nándor**, Kárpátaljához **Kovács Vilmos** kapcsolódik. Felvidéki szerző a felsorolásban nincs, de a lista **bővíthető** hasonló jelentőségű szerzővel.',
            '**Gion Nándor** (1941–2002) szenttamási születésű vajdasági író; főműve a *Latroknak is játszott* regénysorozat, benne a *Virágos katona*.',
            '**Kovács Vilmos** (1927–1977) kárpátaljai költő és író; regénye a *Holnap is élünk* (1965).',
            'A közös szál a **kisebbségi lét**, a szülőföld és az identitás kérdése.',
          ],
        },
        {
          kind: 'map',
          title: 'A két szerző életének egy-egy helyszíne',
          places: [
            {
              name: 'Szenttamás (Srbobran)',
              lat: 45.54,
              lon: 19.79,
              note: 'Gion Nándor szülővárosa',
            },
            {
              name: 'Ungvár (Uzshorod)',
              lat: 48.62,
              lon: 22.3,
              note: 'Kovács Vilmos munkahelye (Kárpáti Kiadó)',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A régiók és a kisebbségi irodalom' },
        {
          kind: 'text',
          text: 'A trianoni határok kialakulása után a magyar nyelvű irodalom a kisebbségbe került magyar közösségekben is folytatódott, az anyaország irodalmától részben elszigetelve, részben vele élő kapcsolatban. A kisebbségi irodalom jellemző kérdései: **a szülőföld, a nyelv megtartása, az identitás, a többség és a kisebbség viszonya**, a történelmi sorsfordulók (a második világháború, a kommunista korszak) hatása a hétköznapokra.',
        },
        { kind: 'heading', text: 'Gion Nándor' },
        {
          kind: 'text',
          text: '**Gion Nándor** Szenttamáson született (1941), az újvidéki egyetemen magyar nyelv és irodalom szakot végzett, 1963 és 1983 között az újvidéki magyar rádió munkatársa volt. 1993-ban Magyarországra költözött. Tehát vajdasági szerzőként a **Délvidék** magyarságának sorsát ábrázolja.',
        },
        {
          kind: 'text',
          text: 'Műveiből: *Kétéltűek a barlangban* és *Testvérem, Joáb* (1968), *Postarablók* (1972), *Virágos katona* (1973), *Latroknak is játszott* (1976; a *Virágos katona* és a *Rózsaméz* közös kötete), *Sortűz egy fekete bivalyért* (1982). A **Latroknak is játszott** regénysorozat (*Virágos katona*, *Rózsaméz*, *Ez a nap a miénk*, *Aranyat talált*) Szenttamás környékén játszódik, a kisemberek szemszögéből mutatja be a 20. század első felének történelmét. A világlátás: a kisközösség emberi kapcsolatai, a történelem által sodort egyén, a humor és a szomorúság keveredése.',
        },
        { kind: 'heading', text: 'Kovács Vilmos' },
        {
          kind: 'text',
          text: '**Kovács Vilmos** Gáton született (1927), Kárpátalján; Ungváron a Kárpáti Kiadó magyar osztályán dolgozott. Verseskötetei: *Tavaszi viharok* (1959), *Lázas a Föld* (1962), *Csillagfénynél* (1968). A *Holnap is élünk* (1965) című regénye a kárpátaljai magyarok második világháború utáni sorsát, a hadifogságba hurcolt férfiak ügyét érinti; a kötetet nemsokára kivonták a forgalomból. 1977-ben Budapesten halt meg. A kárpátaljai magyar irodalom egyik fontos alakja volt.',
        },
        {
          kind: 'compare',
          title: 'A két régió szerzője',
          columns: ['Gion Nándor', 'Kovács Vilmos'],
          rows: [
            { label: 'Régió', cells: ['Délvidék (Vajdaság)', 'Kárpátalja'] },
            {
              label: 'Életrajz',
              cells: ['1941–2002, Szenttamás, Újvidék', '1927–1977, Gát, Ungvár'],
            },
            { label: 'Műfaj', cells: ['regény', 'líra, regény'] },
            { label: 'Fő mű', cells: ['*Latroknak is játszott*', '*Holnap is élünk*'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A tételsorban a határon túli irodalom egy szerzője vagy műve szerepelhet; legalább **egy-három epikai** vagy **néhány lírai** alkotás értelmezése a követelmény.',
            'Régió-azonosítás: melyik szerző melyik régióhoz tartozik (Délvidék, Kárpátalja, Erdély).',
          ],
        },
        {
          kind: 'warning',
          text: 'A felvidéki irodalomról a hivatalos lista nem nevez meg szerzőt, a kárpátaljai és a délvidéki régióhoz azonban igen. Ne tanulj be olyan szerzőt, akit a tételsor nem kér, hacsak a tanárod nem ezt jelölte ki.',
        },
      ],
      topicMatch: ['gion nándor', 'kovács vilmos', 'délvidék', 'vajdaság', 'kárpátalj'],
      cards: { subject: 'magyar', era: 'kesomodern' },
      quiz: [
        {
          question: 'Melyik régióhoz kapcsolódik Gion Nándor?',
          options: ['Felvidék', 'Erdély', 'Kárpátalja', 'Délvidék (Vajdaság)'],
          answer: 3,
          explanation: 'Gion Nándor Szenttamáson, a vajdasági Délvidéken született.',
        },
        {
          question: 'Melyik regény Kovács Vilmos műve?',
          options: ['Holnap is élünk', 'Virágos katona', 'Ábel a rengetegben', 'Rózsaméz'],
          answer: 0,
          explanation:
            'A *Holnap is élünk* (1965) Kovács Vilmos kárpátaljai regénye. A *Virágos katona* és a *Rózsaméz* Giontól való, az *Ábel* Tamási műve.',
        },
        {
          question: 'Melyik sorozat része a *Virágos katona*?',
          options: [
            'Ábel-trilógia',
            'Latroknak is játszott',
            'Végvári versek',
            'Sörény és koponya',
          ],
          answer: 1,
          explanation:
            'A *Virágos katona* a *Latroknak is játszott* regénysorozat része, amelyet Gion Nándor írt.',
        },
        {
          question: 'Mi a közös témája a határon túli irodalom szerzőinek?',
          options: [
            'A kisebbségi lét, a szülőföld és az identitás',
            'A reneszánsz udvari kultúra',
            'Kizárólag a tudományos-fantasztikus irodalom',
            'A klasszicista ódaköltészet',
          ],
          answer: 0,
          explanation:
            'A szerzők művei a kisebbségi létet, a szülőföldhöz való kötődést és az identitás kérdéseit járják körül.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gion Nándor', url: wiki('Gion Nándor') },
        { label: 'Wikipédia: Kovács Vilmos (író)', url: wiki('Kovács Vilmos kárpátaljai költő') },
        {
          label: 'Wikipédia: Határon túli magyar irodalom',
          url: wiki('határon túli magyar irodalom'),
        },
      ],
    },
    {
      id: 'kortars-magyar-irodalom',
      subject: 'magyar',
      unitId: 'hataron-tuli-kortars',
      title: 'Kortárs magyar irodalom',
      level: 'kozep',
      requirement: {
        kozep:
          'Legalább egy szerző néhány lírai vagy drámai, illetve epikai művének értelmezése az utolsó harminc évből; a világlátás és a kifejezésmód sajátosságai egy-két mű értelmezésével; műrészletek értelmezése; memoriter; olvasatok megértése; etikai, történeti, lélektani vagy társadalmi kérdések.',
        emelt:
          'Nyomtatott és digitális közlés; tájékozódás a kortárs irodalmi nyilvánosságban; a művek hatása, fogadtatása; kritikák, interpretációk (lásd az emelt oldalt).',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Kortárs mű**: a mindenkori vizsga előtti utolsó **harminc évben** keletkezett (írt, bemutatott, megjelent) alkotás.',
            'A követelmény **nem nevez meg szerzőt**: legalább **egy** szerző néhány művét kell ismerned és értelmezned (líra, dráma vagy epika).',
            'Ugyanúgy értelmezed, mint bármely más művet: **téma, műfaj, szerkezet, motívumok, nyelv, világlátás**.',
            'Segít a kortárs szövegekkel való ismerkedés: mai folyóiratok, antológiák, a Könyvhét.',
            'A harmincéves időablak évről évre továbbcsúszik: ellenőrizd, hogy a választott mű beleesik-e!',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mit jelent a „kortárs”?' },
        {
          kind: 'text',
          text: 'A követelmény szerint kortárs az a mű, amely a vizsga előtti **utolsó harminc évben** született. Ez azt jelenti, hogy egy 2026-os vizsgán az 1996 után keletkezett művek tartoznak ide; egy korábbi, akár híres mű (például egy 1970-es évek regénye) már nem kortárs, még ha a szerzője ma is él. A tételsor és a tanár dönti el, mely szerzők művei kerülnek elő; a hivatalos lista **nem nevez meg** szerzőt vagy művet.',
        },
        { kind: 'heading', text: 'Példák a tanított kortárs szerzőkre' },
        {
          kind: 'text',
          text: 'Az alábbiak csak példák arra, kikkel találkozhatsz az iskolában; nem hivatalos kötelező lista. Mindig a saját tételsorodra támaszkodj.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Esterházy Péter (1950–2016)',
              text: 'A posztmodern próza vezető alakja; *Harmonia caelestis* (2000), *Javított kiadás*.',
            },
            {
              name: 'Nádas Péter',
              text: 'Regényíró, esszéista; *Párhuzamos történetek* (2005).',
            },
            {
              name: 'Kertész Imre (1929–2016)',
              text: 'Nobel-díjas író (2002); fő műve a *Sorstalanság* (1975), tehát ez a harmincéves időablakon kívül esik, ezért a vizsgán kortárs műként nem a regény, hanem a később keletkezett művei jöhetnek szóba.',
            },
            {
              name: 'Závada Pál',
              text: '*Jadviga párnája* (1997): naplóforma, a 20. századi szlovák-magyar falusi világ.',
            },
          ],
        },
        { kind: 'heading', text: 'Hogyan értelmezz kortárs művet?' },
        {
          kind: 'text',
          text: 'A kortárs szövegre is érvényes a szokásos szempontsor: **1.** a mű témája és műfaja; **2.** a szerkezet és a szövegalkotás módja; **3.** a nyelv és a költői eszközök funkciója; **4.** a világlátás (mit gondol a szerző az emberről, a közösségről, a történelemről); **5.** a mű kapcsolata más művekkel és hagyományokkal; **6.** a mű által felvetett etikai, történeti, lélektani vagy társadalmi kérdések.',
        },
        {
          kind: 'compare',
          title: 'Kortárs és klasszikus szöveg értelmezése',
          columns: ['Klasszikus mű', 'Kortárs mű'],
          rows: [
            {
              label: 'Hagyomány',
              cells: [
                'kialakult kánon, sok korábbi értelmezés',
                'kevés kész értelmezés, saját olvasat fontos',
              ],
            },
            {
              label: 'Nyelv',
              cells: ['korszakhoz kötött nyelvhasználat', 'mai nyelv, gyakran játékos, többrétegű'],
            },
            {
              label: 'Kontextus',
              cells: ['történelmi háttér szükséges', 'a mai olvasó tapasztalatához közel áll'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A szóbelin a kortárs témakörben egy szerző néhány művének bemutatása és értelmezése.',
            'Műrészlet értelmezése: a szöveg elhelyezése a műben, a stílus, a nyelv.',
            'Memoriter: a kortárs költőknél is lehetséges a szöveghű, kifejező előadás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy valaki olyan művet választ „kortársnak”, amely a harmincéves időablakon kívül esik. Mielőtt belekezdesz a tétel kidolgozásába, ellenőrizd a mű keletkezési évét!',
        },
        {
          kind: 'tip',
          text: 'Minta-vázlat: **1.** a szerző és a mű (év, műfaj); **2.** a téma és a szerkezet; **3.** két-három jellemző részlet értelmezése; **4.** a világlátás és a kérdések; **5.** saját olvasat, rövid zárás.',
        },
      ],
      topicMatch: ['kortárs', 'esterházy', 'nádas péter', 'závada', 'varró dániel', 'győrffy ákos'],
      cards: { subject: 'magyar', era: 'kortars' },
      quiz: [
        {
          question: 'Mit jelent a vizsgakövetelmény szerint a „kortárs” mű?',
          options: [
            'Az utolsó száz évben keletkezett mű.',
            'Bármely 20. századi mű.',
            'A vizsga előtti utolsó harminc évben keletkezett mű.',
            'Csak élő szerző műve.',
          ],
          answer: 2,
          explanation:
            'A követelmény a mindenkori vizsga előtti utolsó harminc évben keletkezett (írt, bemutatott, megjelent) alkotást tekinti kortársnak.',
        },
        {
          question: 'Hány szerző művét kell legalább ismerned a kortárs témakörben?',
          options: ['Legalább egyet', 'Legalább hármat', 'Mindegyik listán szereplőt', 'Egyet sem'],
          answer: 0,
          explanation: 'A követelmény szerint legalább egy szerző néhány művét kell értelmezni.',
        },
        {
          question: 'Melyik Esterházy Péter műve?',
          options: [
            'Párhuzamos történetek',
            'Harmonia caelestis',
            'Sorstalanság',
            'Jadviga párnája',
          ],
          answer: 1,
          explanation:
            'A *Harmonia caelestis* (2000) Esterházy műve. A *Párhuzamos történetek* Nádasé, a *Sorstalanság* Kertészé, a *Jadviga párnája* Závada Pálé.',
        },
        {
          question: 'Miért nem választható a *Sorstalanság* kortárs műnek a mai vizsgán?',
          options: [
            'Mert a regény nem magyar nyelvű.',
            'Mert 1975-ben jelent meg, ez kívül esik az utolsó harminc éven.',
            'Mert szerzője nem kapott irodalmi díjat.',
            'Mert csak versekből állhat a kortárs tétel.',
          ],
          answer: 1,
          explanation:
            'A *Sorstalanság* 1975-ös, tehát régebbi, mint a harmincéves időablak, így nem kortárs a követelmény értelmében.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Esterházy Péter', url: wiki('Esterházy Péter') },
        { label: 'Wikipédia: Nádas Péter', url: wiki('Nádas Péter') },
        { label: 'Wikipédia: Kortárs magyar irodalom', url: wiki('kortárs magyar irodalom') },
      ],
    },
    {
      id: 'nepkoltes-irodalom-hataterulete',
      subject: 'magyar',
      unitId: 'hataron-tuli-kortars',
      title: 'Népköltészet és az irodalom határterületei',
      level: 'kozep',
      requirement: {
        kozep:
          'A népköltészet; az irodalom filmen, televízióban, dalszövegben, a virtuális valóságban (adaptáció); gyermek- és ifjúsági irodalom; a szórakoztató irodalom hatáskeltő eszközei; egy-két tipikus műfaj jellemzői (pl. útirajz, detektívregény, kalandregény, képregény, sci-fi, humoros irodalom, dalszöveg, vicc); mítosz, mese és kultusz. VAGY: az adott régió, tájegység, település irodalmi hagyományai, a tájhoz kötődő szerzők.',
        emelt:
          'Tömegszükséglet és művészi minőség; magas művészet és tömegkultúra; könyvnyomtatás, sajtó, irodalom; az irodalomolvasás motivációi; az irodalom praktikus használata; irodalmi ismeretterjesztés (lásd az emelt oldalt).',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A 8. témakör két választható ága: **az irodalom határterületei** VAGY **regionális irodalom**. Egy jelenséget, szerzőt, műfajt vagy alkotást kell elemezned.',
            '**Népköltészet**: szájhagyományban élő, közösségi alkotások (népdal, népballada, mese, találós kérdés), névtelen szerzőkkel, változatokkal (*variánsokkal*).',
            '**Népballada**: tragikus, drámai sűrítésű; példák: *Kőműves Kelemenné*, *Molnár Anna*.',
            '**Adaptáció**: irodalmi mű átdolgozása filmre, rajzfilmre, rádióra, televízióra, digitális formára.',
            '**Gyermek- és ifjúsági irodalom**, **szórakoztató irodalom** (kalandosság, csattanó, szójáték, értékvilág), tipikus műfajok: útirajz, detektívregény, kalandregény, képregény, sci-fi, humoros irodalom, dalszöveg, vicc, reklámvers.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Népköltészet' },
        {
          kind: 'text',
          text: 'A népköltészet a **szóbeli hagyományban** élő, közösségi alkotás. Szerzője általában ismeretlen, a szöveg a továbbadás során **változik**, ezért egy műnek több **változata** (variánsa) van. Fő műfajai: **népdal**, **népballada**, **népmese**, mondák, találós kérdések, közmondások, szokásköltészet (pl. jeles napok énekei).',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Népdal',
              text: 'rövid, strófikus dallamú és szövegű lírai műfaj; tárgya a szerelem, a természet, a mindennapi élet; ismétlések és hasonlatok jellemzik.',
            },
            {
              term: 'Népballada',
              text: 'tragikus, drámai sűrítésű, párbeszédes történet; hiányoznak a magyarázatok (*balladai homály*), a cselekmény a csúcspontra koncentrál.',
            },
            {
              term: 'Variáns',
              text: 'ugyanannak a műnek más-más helyen, más előadótól élő változata.',
            },
            {
              term: 'Szóbeliség',
              text: 'a művek emlékezetben élnek és szájról szájra terjednek, nem írásban.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **Kőműves Kelemenné** az **építőáldozat** motívumát dolgozza fel: a kőművesek munkáját a vár fala újra meg újra leomlik, ezért elhatározzák, hogy a falba áldozatot építenek be: az lesz az áldozat, aki elsőként érkezik. A balladában ez Kelemen felesége, akit a falba építenek. Az építőáldozat-hiedelem sok népnél megtalálható (a magyar ballada Déva várához kötődik). A **Molnár Anna** az „elcsalt feleség” balladatípus: az asszonyt egy idegen férfi csalja el a családja mellől, a történet azonban az asszony kiállásával és győzelmével ér véget. A balladák részleteit mindig a tankönyvi vagy gyűjteményi szöveg alapján idézd.',
        },
        { kind: 'heading', text: 'Az irodalom más művészetekben: adaptáció' },
        {
          kind: 'text',
          text: 'Az **adaptáció** az irodalmi mű áttétele más médiumba: filmre, rajzfilmre, rádiójátékba, televízióba, színpadra, digitális formára. Az átdolgozás mindig **értelmezés** is: ami a regényben belső gondolat, azt a filmnek képpel, hanggal, színészi játékkal kell kifejeznie. Összehasonlítási szempontok: mit hagy ki, mit tesz hozzá, hogyan változik a szerkezet, a nézőpont, a hangsúly.',
        },
        { kind: 'heading', text: 'Gyermek- és ifjúsági irodalom, szórakoztató irodalom' },
        {
          kind: 'text',
          text: 'A **gyermekirodalom** (mese, mondóka, gyermekvers) a kicsiknek szól, az **ifjúsági irodalom** a serdülők problémáit, kalandvágyát állítja a középpontba. A szórakoztató irodalom **hatáskeltő eszközei**: izgalmas cselekmény, kalandosság, **csattanó**, szójáték, a jól ismert értékvilág (a jó győz), azonosulható hősök. Példa: Kányádi Sándor gyermekversei (*Fából vaskarika*).',
        },
        {
          kind: 'compare',
          title: 'Tipikus műfajok',
          columns: ['Műfaj', 'Jellemzője'],
          rows: [
            {
              label: 'Útirajz',
              cells: ['utazás élményei', 'hely- és kultúraleírás, szubjektív látásmód'],
            },
            {
              label: 'Detektívregény',
              cells: ['rejtély, nyomozás', 'logikai feszültség, fordulatos megoldás'],
            },
            { label: 'Kalandregény', cells: ['veszély, utazás', 'gyors cselekmény, bátor hős'] },
            {
              label: 'Képregény',
              cells: ['kép és szöveg együtt', 'szekvenciális történetmesélés'],
            },
            { label: 'Humoros irodalom', cells: ['nevettetés', 'szójáték, túlzás, csattanó'] },
            {
              label: 'Dalszöveg',
              cells: ['zenéhez kötött szöveg', 'ismétlés, rím, dallam és szöveg kapcsolata'],
            },
          ],
        },
        { kind: 'heading', text: 'Mítosz, mese, kultusz; regionális irodalom' },
        {
          kind: 'text',
          text: 'A **mítosz** és a **mese** ősi történetformák, amelyek a mai kultúrában (filmek, könyvsikerek, divatjelenségek) új alakban jelennek meg; a **kultusz** egy mű vagy szerző rajongói tisztelete. A **regionális irodalom** ága szerint egy táj, régió vagy település irodalmi hagyományát mutathatod be (pl. nemzetiségi, etnikai kisebbségek irodalma, folklór), vagy a tájhoz kötődő szerzőket. Itt kapcsolódik a témakör az erdélyi, a délvidéki és a kárpátaljai szerzőkhöz.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A szóbeli tételben a 8. témakörnél **egy jelenséget, szerzőt, műfajt vagy alkotást** kell elemezned a lehetséges témák közül.',
            'Népköltészeti tétel: a műfaj jellemzői és egy konkrét alkotás (népdal vagy népballada) értelmezése.',
            'Adaptációs tétel: az irodalmi mű és filmes, rajzfilmes vagy rádiós változatának összevetése.',
          ],
        },
        {
          kind: 'warning',
          text: 'A népballada tartalmát ne mondd el „sztoriként” végig: emeld ki, miért **balladai** (tragikum, drámai sűrítés, párbeszéd, homály), és mi a motívum jelentése.',
        },
        {
          kind: 'tip',
          text: 'Minta-vázlat népballada-tételhez: **1.** a népköltészet jellemzői; **2.** a ballada műfaja; **3.** a konkrét mű (*Kőműves Kelemenné*): cselekmény, motívum (építőáldozat), szerkezet; **4.** a közösségi tartalom, üzenet; **5.** kapcsolat az irodalmi balladával (pl. Arany János balladái).',
        },
      ],
      topicMatch: [
        'népköltészet',
        'népballada',
        'adaptáció',
        'ifjúsági irodalom',
        'gyermekirodalom',
      ],
      quiz: [
        {
          question: 'Mi jellemzi a népköltészet alkotásait?',
          options: [
            'Ismert szerző, kötött írásbeli szöveg.',
            'Szájhagyományban élnek, változatokban terjednek.',
            'Csak prózai műfajok tartoznak ide.',
            'Mindig egyetlen szövegváltozatuk van.',
          ],
          answer: 1,
          explanation:
            'A népköltészet közösségi alkotás: szájról szájra terjed, így egy műnek több változata (variánsa) alakul ki.',
        },
        {
          question: 'Melyik népballada épül az építőáldozat motívumára?',
          options: ['Molnár Anna', 'Kőműves Kelemenné', 'Szegény Zsuzsi', 'Tengeri-hántás'],
          answer: 1,
          explanation:
            'A *Kőműves Kelemenné* története szerint a vár falába áldozatként építik be Kelemen feleségét.',
        },
        {
          question: 'Mit jelent az adaptáció?',
          options: [
            'Egy mű lefordítása idegen nyelvre.',
            'Az irodalmi mű áttétele más műfajra vagy médiumra, például filmre.',
            'A szerző életrajzának megírása.',
            'Az olvasó véleményének összegyűjtése.',
          ],
          answer: 1,
          explanation:
            'Az adaptáció egy irodalmi mű átdolgozása másik médiumba (film, rajzfilm, rádió, színpad).',
        },
        {
          question: 'Melyik NEM tartozik a szórakoztató irodalom hatáskeltő eszközei közé?',
          options: ['Csattanó', 'Szójáték', 'Kalandosság', 'Szigorú jogszabályi szövegezés'],
          answer: 3,
          explanation:
            'A csattanó, a szójáték és a kalandosság a hatáskeltés eszköze; a jogszabályi szöveg nem irodalmi eszköz.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Népköltészet', url: wiki('népköltészet') },
        { label: 'Wikipédia: Magyar népballadák', url: wiki('magyar népballada') },
        { label: 'Wikipédia: Kőműves Kelemen', url: wiki('Kőműves Kelemenné ballada') },
      ],
    },
    {
      id: 'hataron-tuli-kortars-emelt',
      subject: 'magyar',
      unitId: 'hataron-tuli-kortars',
      title: 'Emelt szint: pályakép, fogadtatás és irodalmi nyilvánosság',
      level: 'emelt',
      requirement: {
        emelt:
          'Határon túli szerzők: kronológiai és topográfiai tájékozottság, pályakép, pályaszakaszok témái, irányzatok és szellemi kötődések, világirodalmi párhuzamok, kötetek, ciklusok, a művek hatása és fogadtatása, a szerző utóélete, kritikák. Kortárs: nyomtatott és digitális közlés, tájékozódás a kortárs irodalmi nyilvánosságban, hatás, fogadtatás, kritikák. Határterületek: tömegszükséglet és művészi minőség, elit és tömegkultúra, könyvnyomtatás és sajtó, az irodalomolvasás motivációi, az irodalom praktikus használata, irodalmi ismeretterjesztés.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Határon túli szerzők**: kronológia (mikor, hol), topográfia (melyik város, táj), **pályakép** és pályaszakaszok, kötetek, **fogadtatás**, utóélet.',
            '**Kortárs irodalom**: nyomtatott és digitális megjelenés, antológiák, irodalmi ismeretterjesztés, **Ünnepi Könyvhét**, online irodalmi programok, kritikák.',
            '**Határterületek**: a tömegigény és a művészi színvonal viszonya, a „magas” és a tömegkultúra, a folytatásos regény, az olvasás motivációi, az irodalom praktikus használata (olvasásterápia, alkalmi költészet).',
          ],
          emelt: true,
        },
      ],
      details: [
        { kind: 'heading', text: 'Határon túli szerzők: pályakép és fogadtatás' },
        {
          kind: 'text',
          text: 'Emelt szinten nem elég egy-két művet ismerned, hanem el kell helyezned a szerzőt az **időben és a térben**. Tudnod kell, hol élt és dolgozott (pl. Reményik és Dsida Kolozsvár, Áprily Nagyenyed, majd Budapest és Visegrád, Gion Újvidék és Szenttamás, Kovács Vilmos Ungvár), milyen folyóiratok körül működött (*Pásztortűz*, *Erdélyi Helikon*), milyen kötetei jelentek meg, és ezek milyen témákat, ciklusokat tartalmaztak.',
          emelt: true,
        },
        {
          kind: 'text',
          text: 'A **fogadtatás** és az **utóélet** kérdése azt kérdezi: hogyan olvasták a szerzőt kortársai, és hogyan olvassák ma. Példák: Dsida *Psalmus Hungaricus* kéziratos másolatokban terjedt; Kovács Vilmos *Holnap is élünk* című regénye megjelenése után kivonták a forgalomból; Wass Albert megítélése megosztott: egyszerre népszerű olvasmány és vita tárgya, ezt tényszerűen, véleményeskedés nélkül kell bemutatni.',
          emelt: true,
        },
        {
          kind: 'text',
          text: '**Világirodalmi párhuzamok** keresése: Sütő András *Egy lócsiszár virágvasárnapja* Heinrich von Kleist Kohlhaas Mihály című művéből táplálkozik; *Csillag a máglyán* Szervét Mihály és Kálvin konfliktusáról szól. Kányádi Sándor műfordítóként a világirodalom és a népköltészet kapcsolatait is felmutatja (pl. erdélyi jiddis népköltészet gyűjtése).',
          emelt: true,
        },
        { kind: 'heading', text: 'Kortárs irodalmi nyilvánosság' },
        {
          kind: 'text',
          text: 'A kortárs műveket nyomtatott és digitális formában is olvashatod. A kortárs **irodalmi nyilvánosság** színterei: folyóiratok és internetes folyóiratok, antológiák, irodalmi ismeretterjesztés, **könyvhét**, online programok. A kortárs mű **fogadtatását** és **kritikáit** egy-két példa alapján kell tudnod bemutatni: ki írt róla, milyen szempontból értékelték.',
          emelt: true,
        },
        { kind: 'heading', text: 'Tömegkultúra, magas művészet és az olvasás' },
        {
          kind: 'text',
          text: 'A határterületek emelt kérdései: hogyan függ össze az **olvasmányok iránti tömegszükséglet** és a **művészi minőség**; hogyan viszonyul a „magas” (elit) művészet a tömegkultúrához egy korszakban; milyen szerepe volt a **sajtónak** és a **folytatásos regénynek** az irodalom terjesztésében; milyen lelki és szellemi motiváció visz az olvasáshoz; és hogyan használható az irodalom a gyakorlatban (pl. **olvasásterápia**, **alkalmi költészet**: köszöntők, ünnepi versek).',
          emelt: true,
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Elit és tömegkultúra',
          columns: ['„Magas” irodalom', 'Tömegkultúra'],
          rows: [
            {
              label: 'Cél',
              cells: ['esztétikai élmény, értelmezés', 'szórakoztatás, azonnali hatás'],
            },
            { label: 'Közönség', cells: ['szűkebb, képzett olvasók', 'széles olvasóközönség'] },
            {
              label: 'Terjesztés',
              cells: ['kötet, folyóirat', 'sajtó, folytatásos regény, film, digitális felületek'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Így kérdezik',
          items: [
            'Emelt szintű szóbelin kronológiai és topográfiai tájékozottságot, pályaképet és fogadtatást kérnek, nemcsak műelemzést.',
            'A kortárs témakörben a közlés módjáról (nyomtatott, digitális) és a kritikákról is kérdezhetnek.',
            'A határterületi témában érveket kell hoznod: tömegigény és minőség, elit és tömegkultúra.',
          ],
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'Ne sorolj fel csak éveket és kötetcímeket. A pályaképnél azt mutasd meg, **mi változott** a pályaszakaszok között (téma, hang, kérdésfeltevés), és hogyan kapcsolódik ez a történelmi helyzethez.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Emelt szintű tétel felépítése: **1.** hely, idő, kötődések; **2.** pályaszakaszok és kötetek; **3.** két-három mű értelmezése; **4.** irányzatok, világirodalmi párhuzamok; **5.** fogadtatás, utóélet, a mai olvasat.',
        },
      ],
      topicMatch: ['irodalmi nyilvánosság', 'tömegkultúra', 'olvasásterápia', 'könyvhét'],
      cards: { subject: 'magyar', era: 'kortars' },
      quiz: [
        {
          question: 'Melyik szerző műve került ki a forgalomból a megjelenése után nem sokkal?',
          options: [
            'Tamási Áron: Ábel a rengetegben',
            'Kovács Vilmos: Holnap is élünk',
            'Gion Nándor: Postarablók',
            'Kányádi Sándor: Fától fáig',
          ],
          answer: 1,
          explanation: 'A *Holnap is élünk* (1965) című regényt nemsokára kivonták a forgalomból.',
          emelt: true,
        },
        {
          question: 'Mit jelent az „irodalmi nyilvánosság” a kortárs irodalomban?',
          options: [
            'A kormányzati könyvtári nyilvántartás.',
            'Az a tér, ahol az irodalom megjelenik és vitatják: folyóiratok, antológiák, könyvhét, online programok.',
            'A szerzők személyes levelezése.',
            'Az iskolai tankönyvek kizárólagos köre.',
          ],
          answer: 1,
          explanation:
            'Az irodalmi nyilvánosság a művek közlésének és megvitatásának színtere (nyomtatott és digitális formában is).',
          emelt: true,
        },
        {
          question: 'Melyik példa az irodalom praktikus használatára?',
          options: ['Olvasásterápia', 'Szövegkritika', 'Verselemzés', 'Szerkezeti ábra'],
          answer: 0,
          explanation:
            'Az olvasásterápia és az alkalmi költészet (köszöntők, ünnepi versek) az irodalom gyakorlati használatának példái.',
          emelt: true,
        },
        {
          question: 'Mi a folytatásos regény jelentősége a sajtóban?',
          options: [
            'Egyetlen kötetben jelent meg.',
            'Az újságban részletekben közölt regény nagy olvasótábort vonzott.',
            'Csak a gyermekirodalomra jellemző.',
            'Nem kapcsolódott a sajtóhoz.',
          ],
          answer: 1,
          explanation:
            'A folytatásos regény a sajtóban, részletekben jelent meg, így az olvasókat folyamatosan lekötötte és a tömegkultúra fontos formája volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Pásztortűz', url: wiki('Pásztortűz folyóirat') },
        { label: 'Wikipédia: Erdélyi Helikon', url: wiki('Erdélyi Helikon') },
        { label: 'Wikipédia: Tömegkultúra', url: wiki('tömegkultúra') },
      ],
    },
  ],
};

export default unit;
