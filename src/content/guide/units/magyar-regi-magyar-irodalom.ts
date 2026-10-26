import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

const REQ_KOZEP =
  'Az életmű néhány jellemzője keretében néhány lírai és/vagy egy-három epikai, drámai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); műrészletek értelmezése; memoriterek; a művekben felvetett kérdések néhány etikai, történeti, lélektani vagy társadalmi vonatkozása.';
const REQ_EMELT =
  'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság; a pályaszakaszok főbb témái; a pályaképre ható irányzatok, világirodalmi párhuzamok; kötetek, ciklusok, motívumok; a művek hatása, fogadtatása; a szerző utóélete; kritikák, interpretációk.';

/** Magyar irodalom: Szerzők, művek, korszakok a régi magyar irodalomból a 18. század végéig (választható szerzők). */
const unit: GuideUnit = {
  id: 'regi-magyar-irodalom',
  subject: 'magyar',
  order: 40,
  title: 'Régi magyar irodalom a 18. század végéig',
  requirementRef:
    '2.1 Szerzők, művek, 2. témakör: Szerzők, művek, korszakok a régi magyar irodalomból a 18. század végéig. Választható szerzők',
  intro:
    'Janus Pannonius, Balassi Bálint, Zrínyi Miklós, Mikes Kelemen és Csokonai Vitéz Mihály, valamint a korszakok háttere: a reformáció vallásos és világi irodalma, a barokk és a kuruc kor lírája. Életút, főbb művek, értelmezési szempontok és a szóbeli tétel menete.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 2. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'janus-pannonius-humanista-koltoje',
      subject: 'magyar',
      unitId: 'regi-magyar-irodalom',
      title: 'Janus Pannonius: a humanista költő',
      level: 'kozep',
      requirement: { kozep: REQ_KOZEP, emelt: REQ_EMELT },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Janus Pannonius** (Csezmiczei János, 1434–1472) **latin nyelven** író magyarországi **humanista költő**, pécsi püspök; a magyar irodalom első nagy költőegyénisége.',
            'Nagybátyja, **Vitéz János** taníttatta: **Ferrarában** Guarino da Verona (Guarino Veronese) iskolájában tanult, majd Padovában jogot hallgatott.',
            '**1459-től pécsi püspök** Mátyás király udvarában; 1471–72-ben részt vett a Mátyás elleni összeesküvésben, menekülés közben **Medvevárott** halt meg (1472).',
            'Műfajai: **epigramma**, **elégia**, **episztola**, **panegyricus** (ünnepi dicsőítő vers); antik mintákat követ, **disztichonban** ír.',
            'Főbb művei: *Pannónia dicsérete* (*Laus Pannoniae*), *Egy dunántúli mandulafáról*, *Búcsú Váradtól*.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1434', text: 'Születése (valószínűleg Csezmicén, a Dráva mentén).' },
            { date: '1447-től', text: 'Tanulmányok Ferrarában, Guarino iskolájában.' },
            { date: '1454–1458 körül', text: 'Egyetemi jogi tanulmányok Padovában.' },
            { date: '1458', text: 'Búcsú Váradtól (elégikus óda), Mátyás király trónra lépése.' },
            { date: '1459', text: 'Pécsi püspök lesz.' },
            { date: '1471–1472', text: 'Az összeesküvés kudarca, menekülés, halál Medvevárott.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kor és életút' },
        {
          kind: 'text',
          text: 'Janus a **magyarországi reneszánsz** és **humanizmus** első nagy költője. A humanizmus az antik műveltség (latin és görög irodalom) újrafelfedezése és az ember földi élete, az érték, a műveltség és a tehetség megbecsülése. Nagybátyja, **Vitéz János** nagyváradi püspök, a magyar humanizmus szervezője, külföldi tanulmányokra küldte. Az itáliai évek után Janus **Mátyás király** udvarának egyik legműveltebb embere lett, 1459-től pécsi püspök. A király és a Vitéz-kör között később megromlott a viszony, ezért 1471-ben Janus a **Mátyás elleni összeesküvéshez** csatlakozott. A terv megbukott, a költő menekülés közben, 1472-ben halt meg Medvevárott.',
        },
        {
          kind: 'text',
          text: 'Latinul írt, mégis a magyar irodalom része: **magyarországi** szerzőként, magyarországi élményekről is szóló művei miatt. A közép- és emelt szintű követelmény is a költő néhány művének értelmezését, a korstílus (reneszánsz humanizmus) felismerését kéri.',
        },
        { kind: 'heading', text: 'Műfajok és versforma' },
        {
          kind: 'terms',
          items: [
            {
              term: 'epigramma',
              text: 'Rövid, csattanós, gyakran szellemes vagy gúnyos vers; az antik költészet kedvelt műfaja (Martialis).',
            },
            {
              term: 'elégia',
              text: 'Elmélkedő, érzelmes, gyakran szomorkás hangú költemény; antik formában disztichonban íródik.',
            },
            {
              term: 'disztichon',
              text: 'Hexameterből és pentameterből álló verspár: az **időmértékes** antik verselés egyik alapformája.',
            },
            {
              term: 'panegyricus',
              text: 'Ünnepi dicsőítő költemény, amely egy híres embert vagy eseményt magasztal.',
            },
          ],
        },
        { kind: 'heading', text: 'Főbb művek és értelmezésük' },
        {
          kind: 'text',
          text: '**Pannónia dicsérete** (*Laus Pannoniae*, 1465 körül): epigramma. Üzenete: eddig csak Itália földjén termettek a „könyvek”, vagyis az irodalom és a műveltség, de **Pannónia is** hozza már a szép dalokat. A költő a hazájával és önmagával is **büszke**, mert a latin műveltség már Magyarországon is él. Témája tehát a **haza dicsérete** és az **önmagasztalás** (a költő híre). A műfaj kötött, tömör, a mondanivaló egy csattanóra épül.',
        },
        {
          kind: 'text',
          text: '**Egy dunántúli mandulafáról** (1466): elégikus epigramma. A fa a hűvös Pannóniában hamar kivirágzik, a korai virágot azonban tönkreteszi a fagy. A mandulafa és a költő sorsának **párhuzama** adja a vers gondolati magját: az itáliai (déli) növény idegen helyen szenved, ahogy a költő is. A vers a **mulandóság**, az idegenség és a **szépség sérülékenysége** kérdését veti fel.',
        },
        {
          kind: 'text',
          text: '**Búcsú Váradtól** (1458): elégikus óda. A költő a nagyváradi környezettől, a baráti körtől és a humanista kultúra helyétől búcsúzik, mert Mátyás udvarába hívják. A mű az **antik istenekre, tájra** és a **műveltség** társaira való hivatkozásokkal telített, a búcsú pedig személyes, **elégikus** hangulatú.',
        },
        {
          kind: 'compare',
          title: 'Három Janus-mű egymás mellett',
          columns: ['Mű és műfaj', 'Téma és hangulat'],
          rows: [
            {
              label: 'Pannónia dicsérete',
              cells: ['epigramma', 'a haza és a költő dicsérete, büszke, magabiztos'],
            },
            {
              label: 'Egy dunántúli mandulafáról',
              cells: ['elégikus epigramma', 'idegenség és mulandóság, a fa és a költő párhuzama'],
            },
            {
              label: 'Búcsú Váradtól',
              cells: ['elégikus óda', 'búcsú egy baráti, művelt közegtől, nosztalgia'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten**: a pályaképen belül két hangot szokás megkülönböztetni. Az olaszországi korszak versei életvidámabbak, merészebbek (szerelmi és gúnyos epigrammák, az egyházi élet bírálata), a magyarországi évek versei inkább **elégikusak**, melankolikusak. Epigrammáiban az antik mintát (például Martialist) követi. Hatása: a magyar irodalom kezdeteként, az európai szintű magyarországi költészet első nagy példájaként tartjuk számon; a latin nyelv miatt a szélesebb közönséghez fordításokon át jut el.',
        },
        {
          kind: 'tip',
          text: 'A *Pannónia dicsérete* magyar fordítása szerepel az app **Memoriterek** részében. Tanuld meg szöveghűen, mert a szóbeli és az írásbeli vizsgán is kérhetik a memoritert.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Janus Pannonius válogatott művei (például *Pannónia dicsérete*, *Egy dunántúli mandulafáról*) a humanizmus, a műfaj és a világlátás szempontjából.',
            'Irodalmi feladatlap: korstílus felismerése (reneszánsz, humanizmus), műfaj (epigramma, elégia), memoriter-kiegészítés.',
            'Emelt szinten: pályaszakaszok, antik hatások, utóélet.',
          ],
        },
        {
          kind: 'example',
          title: 'Tételvázlat: Janus Pannonius költészete',
          problem:
            'Mutasd be Janus Pannonius költészetét a *Pannónia dicsérete* és az *Egy dunántúli mandulafáról* alapján.',
          solution:
            '**Bevezetés**: a magyarországi humanizmus latin nyelvű költője, itáliai tanulmányok, pécsi püspök.\n**1. mű**: *Pannónia dicsérete*: epigramma, a haza és a költő büszkesége, Itália és Pannónia ellentéte.\n**2. mű**: *Egy dunántúli mandulafáról*: elégikus hangulat, a fa mint a költő sorsának jelképe, idegenség és mulandóság.\n**Összekötő gondolat**: mindkettő a humanista műveltség és a magyarországi lét viszonyáról szól; az első büszke, a második fájdalmas.\n**Zárás**: Janus az európai humanizmus magyar képviselője, az önálló költői hang első nagy példája.',
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Janust *magyar nyelvű* költőnek mondani. Latinul írt, a magyar irodalomhoz **magyarországi szerzőként** tartozik. A fordítások (amelyeket tanulsz) nem az eredeti nyelvet jelentik.',
        },
      ],
      topicMatch: ['janus pannonius'],
      cards: { subject: 'magyar', era: 'reneszansz' },
      quiz: [
        {
          question: 'Milyen nyelven írta verseit Janus Pannonius?',
          options: ['magyarul', 'latinul', 'olaszul', 'németül'],
          answer: 1,
          explanation:
            'Janus a humanista költők szokása szerint latinul alkotott; a magyar irodalom magyarországi szerzőjeként tartjuk számon.',
        },
        {
          question: 'Melyik város iskolájában tanult Janus Guarino tanítványaként?',
          options: ['Bécsben', 'Krakkóban', 'Ferrarában', 'Prágában'],
          answer: 2,
          explanation: 'Janus 1447-től Ferrarában, Guarino da Verona iskolájában tanult.',
        },
        {
          question: 'Mi a Pannónia dicsérete műfaja?',
          options: ['himnusz', 'ballada', 'epigramma', 'komikus eposz'],
          answer: 2,
          explanation:
            'A Pannónia dicsérete tömör, csattanóra épülő epigramma, antik, disztichonos formában.',
        },
        {
          question:
            'Mi az egyik fő gondolati párhuzam az *Egy dunántúli mandulafáról* című versben?',
          options: [
            'A fa és a költő sorsa.',
            'A hazaszeretet és a török veszély.',
            'A szerelem és a halál.',
            'A hit és a kétely.',
          ],
          answer: 0,
          explanation:
            'A hűvös Pannóniában hamar virágzó, majd fagykárt szenvedő fa a költő idegen környezetben megélt sorsát jelképezi.',
        },
        {
          question: 'Melyik versforma jellemző az antik mintát követő Janus-versekre?',
          options: [
            'ütemhangsúlyos felező tizenkettes',
            'disztichon',
            'Balassi-strófa',
            'tizenkettes rímes',
          ],
          answer: 1,
          explanation:
            'A disztichon (hexameter + pentameter) időmértékes antik forma, amelyet Janus a latin epigrammákban és elégiákban használ.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Janus Pannonius', url: wiki('Janus Pannonius') },
        { label: 'Wikipédia: Vitéz János', url: wiki('Vitéz János esztergomi érsek') },
        { label: 'Wikipédia: Magyar humanizmus', url: wiki('Magyarországi humanizmus') },
      ],
    },
    {
      id: 'balassi-balint-szerelmi-vitezi-istenes-kolteszet',
      subject: 'magyar',
      unitId: 'regi-magyar-irodalom',
      title: 'Balassi Bálint: szerelmi, vitézi és istenes költészet',
      level: 'kozep',
      requirement: { kozep: REQ_KOZEP, emelt: REQ_EMELT },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Balassi Bálint** (1554–1594) a **magyar nyelvű költészet első kiemelkedő alakja**, a reneszánsz főnemes-költő és végvári vitéz.',
            'Életét perek, bujdosás és a **török elleni harc** kísérte; **1594-ben**, Esztergom ostrománál halt meg.',
            'Költészetének három nagy köre: **szerelmi** (Anna-, Júlia- és Célia-versek), **vitézi** (*Egy katonaének*) és **istenes** versek.',
            'Újítása a **Balassi-strófa**: három soros, belső rímes versszak, szótagszáma **6–6–7**, rímképlete aab ccb ddb.',
            'Szerelmi verseit **ciklusba** rendezte (a *Balassa-kódexben*); drámája a *Szép magyar komédia* (1589).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Balassi-strófa',
              text: 'Hárompárosan rímelő, három soros szakasz: **6+6+7** szótagos sorok, a-a-b, c-c-b, d-d-b képlettel.',
            },
            {
              term: 'petrarkizmus',
              text: 'Petrarca nyomán kialakult szerelmi költői hagyomány: a hölgy eszményítése, a szerelem kínja és boldogsága, az ellentétek.',
            },
            {
              term: 'végvár',
              text: 'A török elleni védelmi vonal erődítményei; a végvári vitézek életéről szól Balassi *Egy katonaéneke*.',
            },
            {
              term: 'ciklus',
              text: 'Tudatosan összeszerkesztett verssorozat, amely közös témát és belső fejlődést mutat (Júlia-ciklus).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Élet és kor' },
        {
          kind: 'text',
          text: 'Balassi **Zólyomban** született főúri családban, a török előrenyomulás idején. Gyerekkorában a nevelője **Bornemisza Péter** volt. Apja bukása után a család Lengyelországba menekült, Balassi pedig bujdosás, perek és vitézi élet között töltötte az életét. Fiatalon az **egri végvárban** katonáskodott (1579–1582). 1586-ban áttért a katolikus hitre. **1589-ben** Lengyelországba ment, ott írta *Egy katonaének* című versét, majd **1591-ben** hazatért. A **tizenöt éves háború** idején (1593-tól) ismét harcolt a törökök ellen; **1594. május 19-én** Esztergom ostromakor megsebesült, és május 30-án meghalt.',
        },
        {
          kind: 'text',
          text: 'Költészete a **reneszánsz** korszakba illeszkedik, de a **végvári világot**, a magyar nyelvet és a személyes hangot is tükrözi. A versek kéziratos gyűjteménye a **Balassa-kódex**. Műveit életében nem adták ki nyomtatásban.',
        },
        { kind: 'heading', text: 'Szerelmi költészet' },
        {
          kind: 'text',
          text: 'A szerelmi versekben a **petrarkizmus** és a virágének hagyománya egyesül. A korai, **Anna-versek** (Losonczy Anna) még sablonosak: a lírai én reménytelenül imádja a tökéletes, de kegyetlen hölgyet. A **Júlia-versek** (a kódexben a ciklus főszereplője a fiktív Júlia) egységesebbek, kidolgozottabbak, a költő már megtalálta saját hangját. A ciklus **belső fejlődést** mutat: a boldog találkozás öröme felől halad a lemondás és a reménytelenség felé. A **Célia-versek** már viszonzott szerelmet és bensőségesebb hangot mutatnak.',
        },
        {
          kind: 'text',
          text: 'A kompozíció tudatos: a versek **sorrendje nem a keletkezés ideje szerinti**, hanem a költő szerkesztési elvét követi (hármas számszimbolika, szimmetria). Az *Anna-*, *Júlia-* és *Célia-versek* egymást követő szerelmi szakaszokat, de egyúttal költői rangsort is mutatnak: a legmagasabb szintet a Júlia-versek képviselik.',
        },
        { kind: 'heading', text: 'Vitézi költészet: Egy katonaének' },
        {
          kind: 'text',
          text: 'A vers (más címen *A végek dicséretére*, 1589 körül) a végvári élet **dicsérete**. Nyitó kérdése: *„Vitézek, mi lehet / ez széles föld felett / szebb dolog az végeknél?”* A költő felsorolja a végvári élet szépségeit: a **harc és a közösség** örömét, a hírnevet, a **természetet**. Az egész vers **a végeken való vitézi lét** (és a bujdosó emlékezete) kifejezése. A szerkezet arányos, szimmetrikus, kiegyensúlyozott, ami a reneszánsz harmóniaeszményt mutatja.',
        },
        { kind: 'heading', text: 'Istenes versek' },
        {
          kind: 'text',
          text: 'Balassi a magyar irodalom egyik legnagyobb **vallásos költője**. Istenes énekeiben a bűnbánat, a kétely, a vágyakozás és az Istennel való vitatkozás szól. A **személyes hang** a reneszánsz vallásos líra egyik jellemzője. Híres vers az *Adj már csendességet* (1591 körül), amely a világi csalódás után a lelki béke és a megnyugvás után vágyakozik.',
        },
        {
          kind: 'compare',
          title: 'Balassi három költői köre',
          columns: ['Szerelmi líra', 'Vitézi és istenes líra'],
          rows: [
            {
              label: 'Téma',
              cells: [
                'a hölgy eszménye, a távolság, a szerelem kínja és öröme',
                'végvári élet, hazaszeretet; bűnbánat, Isten-keresés',
              ],
            },
            {
              label: 'Minta',
              cells: [
                'Petrarca, újlatin költők (Secundus, Angerianus), virágének',
                'zsoltárok, humanista latin zsoltárparafrázisok, végvári tapasztalat',
              ],
            },
            {
              label: 'Hangnem',
              cells: ['udvarló, bókoló, érzelmes', 'ünnepélyes, személyes, könyörgő'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** fontos a *Szép magyar komédia* (1589): Castelletti *Amarilli* című olasz pásztorjátéka alapján írt, prózai szöveget és verses betéteket tartalmazó udvari dráma. Balassi az eredetit magyar, vitézi környezetbe helyezte. A pályaszakaszok: a korai Anna-versek (1578 körül), a Júlia-ciklus (1587–1588 körül), a Célia-versek, az istenes énekek és a lengyelországi vers. Hatás: Balassit a magyar szerelmi költészet megteremtőjeként és a magyar lírai hagyomány első klasszikusaként tartják számon; a **Balassi-strófát** a későbbi költők is felhasználták.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Balassi költészetének bemutatása egy szerelmi és egy vitézi vagy istenes vers alapján.',
            'Irodalmi feladatlap: a Balassi-strófa felismerése, ciklus-fogalom, reneszánsz stílusjegyek, versforma meghatározása.',
            'Összehasonlító szempontok: reneszánsz és barokk (Balassi és Zrínyi), szerelmi és vallásos líra.',
          ],
        },
        {
          kind: 'example',
          title: 'Tételvázlat: Balassi Bálint költészete',
          problem: 'Mutasd be Balassi költészetét az *Egy katonaének* és egy Júlia-vers alapján.',
          solution:
            '**Bevezetés**: a magyar nyelvű költészet első nagy alakja, reneszánsz főnemes, végvári vitéz.\n**Szerelmi líra**: Anna-, Júlia-, Célia-versek, petrarkista hagyomány, a Júlia-ciklus belső fejlődése.\n**Vitézi líra**: *Egy katonaének*, a végek dicsérete, arányos szerkezet, harmónia.\n**Versforma**: Balassi-strófa (6+6+7, aab ccb ddb).\n**Összefoglalás**: a reneszánsz világlátás: a földi élet, a szerelem és a hírnév értéke, mégis a vallásos kétely és a halálgondolat jelenik meg az utolsó évek verseiben.',
        },
        {
          kind: 'warning',
          text: 'A *Balassi-strófa* **3 soros**, a sorok **6–6–7 szótagosak**, és a rímek (aab ccb ddb) a sorokon belül és a sorvégeken is tagolják a versszakot; a b-rím minden szakaszban visszatér. Ne mondd, hogy Balassi minden vitézi verse katonaének: a hagyomány szerint valójában csak az *Egy katonaének* ilyen.',
        },
      ],
      topicMatch: ['balassi'],
      cards: { subject: 'magyar', era: 'reneszansz' },
      quiz: [
        {
          question: 'Hány szótagos sorokból áll a Balassi-strófa?',
          options: ['8–8–8', '6–6–7', '4–4–5', '12–12–12'],
          answer: 1,
          explanation:
            'A Balassi-strófa három soros: 6, 6 és 7 szótagos sorok, aab ccb ddb rímekkel.',
        },
        {
          question: 'Melyik ciklus tartozik Balassi szerelmi költészetéhez?',
          options: ['Lilla-ciklus', 'Júlia-ciklus', 'Kisfaludy-dalok', 'Kelet népe'],
          answer: 1,
          explanation:
            'A Júlia-versek Balassi szerelmi költészetének csúcsát jelentik; a Lilla-dalok Csokonaihoz kapcsolódnak.',
        },
        {
          question: 'Hol halt meg Balassi?',
          options: ['Szigetvárnál', 'Esztergom ostrománál', 'Egerben', 'Pozsonyban'],
          answer: 1,
          explanation: 'Esztergom 1594-es ostroma során megsebesült, és 1594. május 30-án meghalt.',
        },
        {
          question: 'Melyik vers a végvári élet dicsérete?',
          options: [
            'Adj már csendességet',
            'Egy katonaének',
            'Egy dunántúli mandulafáról',
            'A Reményhez',
          ],
          answer: 1,
          explanation: 'Az *Egy katonaének* (A végek dicséretére) a végvári vitézi élet dicsérete.',
        },
        {
          question: 'Melyik dráma Balassi műve?',
          options: ['Szép magyar komédia', 'Bánk bán', 'Csongor és Tünde', 'A Karnyóné'],
          answer: 0,
          explanation:
            'A *Szép magyar komédia* Castelletti olasz pásztorjátékának átdolgozása, Balassi egyetlen drámája.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Balassi Bálint', url: wiki('Balassi Bálint') },
        { label: 'Wikipédia: Balassi-strófa', url: wiki('Balassi-strófa') },
        { label: 'Wikipédia: Balassa-kódex', url: wiki('Balassa-kódex') },
      ],
    },
    {
      id: 'zrinyi-miklos-szigeti-veszedelem',
      subject: 'magyar',
      unitId: 'regi-magyar-irodalom',
      title: 'Zrínyi Miklós: Szigeti veszedelem',
      level: 'kozep',
      requirement: { kozep: REQ_KOZEP, emelt: REQ_EMELT },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Zrínyi Miklós** (1620–1664) horvát bán, hadvezér, politikus és **barokk költő**; a török elleni összefogást és a nemzeti függetlenséget sürgette.',
            'Fő műve a **Szigeti veszedelem**: 15 éneket tartalmazó **barokk hősköltemény**, **1651-ben** jelent meg Bécsben az *Adriai tengernek Syrenaia* című kötetben.',
            'Tárgya **Szigetvár 1566-os ostroma**, a hős **dédapja**, a szigetvári Zrínyi Miklós.',
            'Alapgondolata: a törökellenes harc **Isten büntetése** a magyarok bűnei miatt, de a hősi áldozat **megtisztít**, és példát ad.',
            'Mintái: **Vergilius** *Aeneise*, **Tasso** és **Marino** olasz eposzai; versformája a **négyes rímű tizenkettes** (6+6).',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1566', text: 'Szigetvár ostroma: a dédapa, Zrínyi Miklós hősi halála.' },
            { date: '1620', text: 'Zrínyi Miklós, a költő születése.' },
            { date: '1645–1646', text: 'A Szigeti veszedelem megírása.' },
            { date: '1651', text: 'Megjelenik az *Adriai tengernek Syrenaia* kötet Bécsben.' },
            { date: '1664', text: 'Zrínyi vadászbalesetben meghal.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A költő és kora' },
        {
          kind: 'text',
          text: 'Zrínyi Miklós a **Zrínyi család** horvát eredetű főnemesi ágából származott, magyarul írt, és magyar identitású volt. Tanult Grazban, Bécsben és Nagyszombaton, majd Itáliában járt. Horvát bán, **török elleni hadvezér** és politikus volt. 1664 elején téli hadjáratban felgyújtotta a török utánpótlást szolgáló eszéki hidat, Európa-szerte híressé vált. A szentgotthárdi csata után a **vasvári béke** (1664) kijátszotta a reményeit. Ugyanabban az évben vadászaton meghalt; halálát sokan merényletnek tartották.',
        },
        {
          kind: 'text',
          text: 'Zrínyi **katona-költő** volt, aki elsősorban politikusnak tartotta magát. Prózai művei közül jelentős a *Török áfium ellen való orvosság* (1661), amely a törökellenes magyar összefogást sürgeti („Ne bántsd a magyart”). Költészetét a **barokk** jellemzi: ellentét, mozgalmasság, pompa, a hit és a halál állandó jelenléte.',
        },
        { kind: 'heading', text: 'A Szigeti veszedelem' },
        {
          kind: 'text',
          text: 'A mű **15 énekből** áll. Cselekménye: **Szulejmán** szultán 1566-ban ostrom alá veszi **Szigetvárat**. A várvédők élén **Zrínyi** áll, mellette hősök harcolnak (például **Deli Vid**, **Radivoj**); a török oldalon is vannak méltó ellenfelek. A szultán az ostrom közben meghal. A magyarok és horvátok fogyatkoznak, végül Zrínyi **kitörést** vezet, és hősi halált hal; lelkét **angyalok** viszik a mennybe. A hősi történet mellett szerelmi mellékszálak futnak (például Deli Vid és Borbála, a török **Delimán** és **Cumilla**).',
        },
        {
          kind: 'text',
          text: 'Az **invokáció** és a **propozíció** az antik eposzi hagyományt követi: *„Fegyvert s vitézt éneklek…”* (Vergilius *Aeneisének* nyitányát idézi). A szöveg szerkezete is **eposzi**: seregszemle, párharcok, tanácskozás, természeti és égi csodák, hasonlatok.',
        },
        {
          kind: 'keypoints',
          title: 'Eposzi kellékek a Szigeti veszedelemben',
          items: [
            'propozíció és invokáció (a téma megjelölése, a segítség kérése)',
            'a **csodás** elemek: angyalok, ördögök, égi közbeavatkozás',
            'párharcok, seregszemle, hősi halál',
            'a hőst körülvevő kisebb hősök és a szerelmi epizódok',
            'a hasonlatok és a barokk képek bősége',
          ],
        },
        { kind: 'heading', text: 'Világlátás és értelmezés' },
        {
          kind: 'text',
          text: 'A mű alapgondolata, hogy Isten a magyarokat **bűneik miatt** sújtja a török veszéllyel, a **hősi áldozat** azonban megváltja a közösséget. Zrínyi tehát **keresztény hős**, szinte vértanú; a harc vallási és nemzeti ügy egyszerre. A mű a **nemzeti identitás** és a közösségért vállalt áldozat eposza. A barokk stílus jegyei: a heroikus pátosz, a pompa, az égi és földi világ összefonódása, az ellentétek (élet–halál, bűn–megváltás).',
        },
        {
          kind: 'compare',
          title: 'Reneszánsz és barokk: Balassi és Zrínyi',
          columns: ['Balassi (reneszánsz)', 'Zrínyi (barokk)'],
          rows: [
            {
              label: 'Műfaj',
              cells: [
                'lírai versek, ciklus, pásztorjáték',
                'hősi eposz, publicisztika, lírai versek',
              ],
            },
            {
              label: 'Hős',
              cells: ['a lírai én, a vitéz költő', 'a közösség védelmében hősi halált halló vezér'],
            },
            {
              label: 'Világlátás',
              cells: [
                'földi értékek, harmónia, de bűntudat és kétely',
                'isteni gondviselés, bűn és büntetés, áldozat és megváltás',
              ],
            },
            {
              label: 'Stílus',
              cells: ['arányos, szimmetrikus', 'pompás, mozgalmas, ellentétekre épülő'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten**: a *Szigeti veszedelem* utóélete fontos. A 17–18. században alig olvasták, **Kazinczy** fedezte fel újra, ő adta a *Zrinyiász* nevet is, és 1817-ben kiadta. **Arany János** 1848-ban nekiállt mai nyelvre átdolgozni, a *Zrínyi és Tasso* című tanulmánya töredék maradt. Kapcsolat: Zrínyi öccse, **Zrínyi Péter** horvát nyelvű költő volt; a *Syrena* horvát változata 1660-ban Velencében jelent meg. A kötetben Zrínyi szerelmi lírája (a feleségéhez, Violának nevezett Draskovich Eusébiához írt versek) is helyet kapott.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: a *Szigeti veszedelem* bemutatása a műfaj (hősköltemény), a kompozíció és a világlátás szempontjából, műrészlet értelmezése.',
            'Irodalmi feladatlap: eposzi kellékek felismerése, barokk stílusjegyek, versforma (tizenkettes), részletek azonosítása.',
            'Összehasonlító szempontok: a hős és a közösség, Zrínyi és más eposzok (Homérosz, Vergilius, Arany *Toldi*), reneszánsz és barokk.',
          ],
        },
        {
          kind: 'example',
          title: 'Tételvázlat: A Szigeti veszedelem',
          problem: 'Mutasd be a *Szigeti veszedelem* műfaját, szerkezetét és alapgondolatát.',
          solution:
            '**Bevezetés**: Zrínyi Miklós, a katona-költő; a mű 1651-ben jelent meg a *Syrena* kötetben.\n**Műfaj**: barokk hősi eposz, Vergilius, Tasso és Marino mintájára; 15 ének; négyes rímű tizenkettes.\n**Tárgy**: Szigetvár 1566-os ostroma, a dédapa hősi halála.\n**Eposzi kellékek**: propozíció, invokáció, csodás elemek (angyalok), párharcok, szerelmi epizódok.\n**Alapgondolat**: a török veszély Isten büntetése a bűnökért; a hősi áldozat megváltó erejű.\n**Zárás**: a mű a nemzeti összefogás és a keresztény hősiesség eposza, amelyet Kazinczy, Arany és Toldy fedezett fel újra.',
        },
        {
          kind: 'warning',
          text: 'A *Szigeti veszedelem* nem történelmi krónika: a hősi események mellett **költői fikció**, csodás elemek és szerelmi történetek is vannak benne. A cselekményt ne csak meséld el, hanem értelmezd a műfaj és a világlátás felől.',
        },
        {
          kind: 'tip',
          text: 'Zrínyi és Balassi szövege jelenleg nem szerepel az app Memoriterek részében; kérdezd meg a tanárodat, mely részleteket kell kívülről tudnod. A tételben a legfontosabb a **műrészlet értelmezése**.',
        },
      ],
      topicMatch: ['zrínyi'],
      cards: { subject: 'magyar', era: 'barokk' },
      quiz: [
        {
          question: 'Hány énekből áll a Szigeti veszedelem?',
          options: ['12', '15', '24', '27'],
          answer: 1,
          explanation: 'A mű 15 énekből álló hősköltemény.',
        },
        {
          question: 'Melyik történelmi esemény a Szigeti veszedelem tárgya?',
          options: [
            'A mohácsi csata',
            'Eger ostroma',
            'Szigetvár ostroma 1566-ban',
            'Buda visszafoglalása',
          ],
          answer: 2,
          explanation:
            'A mű Szigetvár 1566-os ostromát és a dédapa, Zrínyi Miklós hősi halálát dolgozza fel.',
        },
        {
          question: 'Melyik versforma jellemző a Szigeti veszedelemre?',
          options: ['hexameter', 'szapphói strófa', 'Balassi-strófa', 'négyes rímű tizenkettes'],
          answer: 3,
          explanation:
            'A mű négyes rímű, tizenkét szótagos sorokból épül fel, a magyar históriás énekek hagyománya nyomán.',
        },
        {
          question: 'Mi az eposz alapgondolata?',
          options: [
            'A tudomány haladása.',
            'A török veszély bűneink büntetése, a hősi áldozat megváltó.',
            'A szerelem erősebb a halálnál.',
            'A természet mulandósága.',
          ],
          answer: 1,
          explanation:
            'Zrínyi világlátása szerint Isten a bűnökért bünteti a magyarokat, a hősi áldozat azonban a közösséget megváltja.',
        },
        {
          question: 'Ki adta ki újra a Szigeti veszedelmet 1817-ben, és nevezte el Zrinyiásznak?',
          options: ['Arany János', 'Kazinczy Ferenc', 'Toldy Ferenc', 'Berzsenyi Dániel'],
          answer: 1,
          explanation:
            'Kazinczy fedezte fel újra Zrínyit, Költői munkák címmel kiadta az eposzt, és ő adta a Zrinyiász nevet.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Zrínyi Miklós (költő)', url: wiki('Zrínyi Miklós költő') },
        { label: 'Wikipédia: Szigeti veszedelem', url: wiki('Szigeti veszedelem') },
        { label: 'Wikipédia: Szigetvár ostroma (1566)', url: wiki('Szigetvár ostroma 1566') },
      ],
    },
    {
      id: 'mikes-kelemen-torokorszagi-levelek',
      subject: 'magyar',
      unitId: 'regi-magyar-irodalom',
      title: 'Mikes Kelemen: Törökországi levelek',
      level: 'kozep',
      requirement: { kozep: REQ_KOZEP, emelt: REQ_EMELT },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Mikes Kelemen** (1690–1761) **II. Rákóczi Ferenc** íródeákja és kamarása, aki a fejedelmet **Lengyelországba, Franciaországba, majd Törökországba** (Rodostó) követte.',
            'Fő műve a **Törökországi levelek**: **207 fiktív levél** (1717–1758), címzettjük a kitalált **P. E. grófné** („édes néném”).',
            'A mű műfaja **fiktív levélgyűjtemény**, a magyar széppróza egyik első nagy alkotása; a **rokokó** magyar mestereként tartják számon.',
            'Témái: a **bujdosás** mindennapjai, **hazavágyás**, a fejedelem halála, Isten akaratába való belenyugvás, anekdoták, humor.',
            'Stílusa: egyszerű, természetes, személyes; a **mindennapi apró dolgok** és a nagy történelmi sors együtt szólal meg.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1690', text: 'Mikes Kelemen születése Zágonban.' },
            {
              date: '1711 után',
              text: 'Rákóczival emigrációba megy: Lengyelország, majd Franciaország.',
            },
            {
              date: '1717',
              text: 'Törökországba érkeznek; az első levél kelte: 1717. október 10.',
            },
            { date: '1720', text: 'A bujdosók végleges szállása Rodostó.' },
            { date: '1735', text: 'II. Rákóczi Ferenc halála Rodostóban.' },
            { date: '1761', text: 'Mikes Kelemen halála Rodostóban.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Élet és háttér' },
        {
          kind: 'text',
          text: 'Mikes **erdélyi** (Zágon) kisnemesi családban született, a jezsuiták kolozsvári kollégiumában tanult. 1707 körül **II. Rákóczi Ferenc** szolgálatába lépett. A **Rákóczi-szabadságharc** bukása (1711) után Rákóczival együtt emigrált: Lengyelország, Franciaország (itt ismerkedett meg a francia kultúrával), majd 1717-től **Törökország**. A száműzöttek 1720-tól **Rodostóban** éltek. Mikes nem tért haza: a fejedelem halála (1735) után is a bujdosók közt maradt, és ott halt meg 1761-ben. A hazatérési kérelmet elutasították; az „Ex Turcia non est redemptio” (Törökországból nincs megváltás) mondást Mária Teréziának tulajdonítják, de okirat nem maradt róla.',
        },
        { kind: 'heading', text: 'A mű kompozíciója' },
        {
          kind: 'text',
          text: 'A **Törökországi levelek** 207 levélből áll, az első 1717. október 10-én, az utolsó 1758. december 20-án kelt. A levelek **fiktívek**: a címzett, **P. E. grófné** kitalált alak, sok nő vonásaiból összeállított ideális olvasó, akinek Mikes „édes néném”-ként szól. A gyűjtemény nem szigorúan szerkesztett mű, de a személyes hang, a közös téma és a hosszú idő egységet ad neki. A levelek első része Rákóczi életében, még a hazatérés reményében íródott (az első 111 levél), a fejedelem halálát a **112. levél** írja le. Utána a remény elhalványul, és az ismétlődő, magányosabb hangvétel kerül előtérbe.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'levélregény / fiktív levélgyűjtemény',
              text: 'Levélformában megírt, irodalmi igényű mű; a levelek nem valóban elküldött üzenetek, hanem művészi szerkesztések.',
            },
            {
              term: 'bujdosás',
              text: 'A hazájából elűzött ember száműzetése; Mikesnél a Rákóczi-emigráció élete.',
            },
            {
              term: 'rokokó',
              text: 'A 18. századi stílus: finomkodó, bensőséges, játékos hangulatú, a hétköznapi és a személyes értékeit emeli ki.',
            },
          ],
        },
        { kind: 'heading', text: 'Témák és motívumok' },
        {
          kind: 'keypoints',
          title: 'Mikes legfontosabb témái',
          items: [
            '**Hazavágyás**: a távoli Erdély, a család és a haza elvesztése.',
            '**Beletörődés**: Isten akaratába való belenyugvás, a bujdosás elfogadása.',
            '**A mindennapok**: étkezések, kertek, ünnepek, betegségek, apró örömök.',
            '**A fejedelem alakja**: Rákóczi iránti hűség, a fejedelem halála.',
            '**Humor és önirónia**: derűs, enyhén ironikus hang a bánat mellett.',
            '**Anekdoták és elbeszélések**: a levelekbe szőtt történetek, sok francia és más forrásból.',
          ],
        },
        {
          kind: 'text',
          text: 'Szerb Antal szerint a levelek „a lélektörténet új fejezetét kezdik a magyar irodalomban”: a **zordon vallásosság** és a **heroikus** hangoltság után Mikes a **humánum** korát vezeti be. A levelek az irodalomban az **egyén érzelmi világa**, a személyes hang és a magánélet felé fordulást jelentik.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten**: a levelek forrásai között ott vannak francia klasszicista levelezők (például Madame de Sévigné) és más szerzők művei; Mikes sok történetet és leírást fordított, átdolgozott. A **kuruc** világlátás (Rákóczi-kultusz) és a **felvilágosodás** felé mutató humanizmus együtt van jelen. A mű keletkezéséről több elmélet él (naplószerű emlékirat, tudatosan szerkesztett irodalmi alkotás); Mikes művei életében nem jelentek meg. A száműzetés és a haza elvesztése motívuma a magyar irodalomban később is visszatér.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Mikes Kelemen és a Törökországi levelek műfaja, témája, hangvétele; levélrészlet értelmezése.',
            'Irodalmi feladatlap: műfaj (fiktív levélgyűjtemény), korstílus (rokokó/barokk és felvilágosodás között), életrajzi adatok.',
            'Összehasonlító szempont: a száműzetés, a hazavágyás és a beletörődés motívuma más művekben (például Balassi, Kölcsey, Ady).',
          ],
        },
        {
          kind: 'example',
          title: 'Tételvázlat: Mikes Törökországi levelei',
          problem: 'Mutasd be a *Törökországi levelek* műfaját, témáit és hangvételét.',
          solution:
            '**Bevezetés**: Mikes Kelemen, Rákóczi kamarása; bujdosás Lengyelországban, Franciaországban és Törökországban, Rodostó.\n**Műfaj**: fiktív levélgyűjtemény, 207 levél, kitalált címzett (P. E. grófné).\n**Témák**: hazavágyás, a bujdosók mindennapjai, a fejedelem halála, beletörődés, humor.\n**Stílus**: egyszerű, személyes, bensőséges, rokokó.\n**Zárás**: a mű a magyar széppróza és a személyes hang úttörő alkotása, amely a hontalanság élményét általános emberi tapasztalattá emeli.',
        },
        {
          kind: 'warning',
          text: 'A levelek nem valódi levelezés: a **címzett kitalált**, és a mű irodalmi szerkesztés. Ne mondd tényszerűnek a „P. E. grófnét”. Az „Ex Turcia non est redemptio” mondás is bizonytalan eredetű.',
        },
      ],
      topicMatch: ['mikes', 'törökországi levelek'],
      cards: { subject: 'magyar', era: 'felvilagosodas' },
      quiz: [
        {
          question: 'Hány levélből áll a Törökországi levelek?',
          options: ['100', '150', '207', '300'],
          answer: 2,
          explanation: 'A gyűjtemény 207 fiktív levelet tartalmaz (1717–1758).',
        },
        {
          question: 'Kinek íródtak a levelek?',
          options: [
            'II. Rákóczi Ferencnek',
            'Mikes családjának Zágonban',
            'a kitalált P. E. grófnénak',
            'Mária Teréziának',
          ],
          answer: 2,
          explanation: 'A címzett kitalált: P. E. grófné, akit Mikes „édes néném”-nek szólít.',
        },
        {
          question: 'Hol élt Mikes a száműzetésben haláláig?',
          options: ['Párizsban', 'Rodostóban', 'Bécsben', 'Krakkóban'],
          answer: 1,
          explanation:
            '1720-tól a bujdosók végleges szállása Rodostó volt; Mikes itt halt meg 1761-ben.',
        },
        {
          question: 'Melyik levél írja le Rákóczi halálát?',
          options: ['az 1.', 'a 112.', 'a 150.', 'a 207.'],
          answer: 1,
          explanation:
            'A fejedelem halálát a 112. levél tárgyalja; az első 111 levélben még él a hazatérés reménye.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Mikes Kelemen (író)', url: wiki('Mikes Kelemen író') },
        { label: 'Wikipédia: Törökországi levelek', url: wiki('Törökországi levelek') },
        { label: 'Wikipédia: II. Rákóczi Ferenc', url: wiki('II. Rákóczi Ferenc') },
      ],
    },
    {
      id: 'csokonai-vitez-mihaly-eletmuve',
      subject: 'magyar',
      unitId: 'regi-magyar-irodalom',
      title: 'Csokonai Vitéz Mihály életműve',
      level: 'kozep',
      requirement: { kozep: REQ_KOZEP, emelt: REQ_EMELT },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Csokonai Vitéz Mihály** (Debrecen, 1773 – Debrecen, 1805) a magyar **felvilágosodás** és **rokokó** nagy költője; a debreceni kollégiumban tanult, később vándorköltő és tanár.',
            'Sokoldalú: dal, óda, vígeposz, színmű, filozófiai és alkalmi költemény; **„poeta doctus”** (tudós költő) és **„poeta natus”** (született költő) is.',
            'Főbb művei: a **Lilla** dalciklus, *Dorottya* (vígeposz), *A Reményhez*, *Tartózkodó kérelem*, *A Tihanyi Ekhóhoz*, *Az estve*.',
            'Témái: **szerelem**, **remény és csalódás**, természet, a **felvilágosodás eszméi** és az elszigeteltség.',
            'Halála után lett igazán híres; Kazinczyval és a nyelvújítókkal is kapcsolatban állt.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1773', text: 'Csokonai Debrecenben születik.' },
            { date: '1795', text: 'Elhagyja a debreceni kollégiumot (fegyelmi ügyek miatt).' },
            { date: '1797', text: 'Komáromban megismerkedik Vajda Juliannával, Lillával.' },
            { date: '1799', text: 'Segédtanár Csurgón.' },
            { date: '1804', text: 'Megjelenik a *Dorottya*; Nagyváradon a Halotti versek.' },
            { date: '1805', text: 'Csokonai Debrecenben meghal; ekkor jelent meg a *Lilla*.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Életút és kor' },
        {
          kind: 'text',
          text: 'Csokonai **Debrecenben**, a református kollégiumban tanult, korán kitűnt műveltségével és tehetségével. A kollégium szigorú szabályai ütköztek szabad gondolkodásával, ezért **1795-ben** távozott. Sárospatakon, Pozsonyban, Komáromban, Csurgón és Debrecenben élt, folyamatos anyagi gondok között. Kazinczy Ferenccel, a nyelvújítás vezetőjével levelezett. **1805-ben**, alig 31 évesen halt meg Debrecenben, amikor verseinek kiadása éppen megindult.',
        },
        {
          kind: 'text',
          text: 'Költészete a **felvilágosodás** (értelem, haladás, nevelés), a **rokokó** (játékos, finom, könnyed érzelmesség) és a **szentimentalizmus** (érzékeny, érzelmes szemlélet) jegyeit hordozza. Vállalta a nemzeti nyelv művelését és az új műfajok kipróbálását is.',
        },
        { kind: 'heading', text: 'A Lilla-versek és a szerelmi líra' },
        {
          kind: 'text',
          text: 'A **Lilla** (1805, halála után) a költő szerelmi költészetének kiemelkedő ciklusa: Komáromban ismerkedett meg Vajda Juliannával, akit Lillának nevezett. A dalok **népies, könnyed, dalszerű** hangon szólnak a boldog szerelemről és a veszteségről. A szerelmi líra **anakreoni** (az élet örömeit, a szerelmet és a bort ünneplő) elemekkel is gazdag. A *Tartózkodó kérelem* könnyed, játékos szerelmi dal: a lírai én a kedvest dicséri (szemei, ajka), és csókot kér.',
        },
        { kind: 'heading', text: 'A Reményhez' },
        {
          kind: 'text',
          text: 'A vers **megszólító** formájú: a költő a **Reményhez**, mint égi tüneményhez szól. A Remény „istenségnek látszó, csalfa, vak”, megcsalja azt, aki hisz neki. A szerkezet: **megszólítás és vád**, majd a múlt boldog képei (a nárciszos kert, a Lilla szerelme), a **hervadás** és a veszteség, végül a **lemondás**: *„Hagyj el, óh Reménység!”*, a zárás búcsú (*„Isten véletek!”*). A versben a felvilágosodás reményhite és a személyes csalódás feszül egymásnak. A rövid soros (6–5 szótagos), nyolcsoros szakaszokból álló dal **allegorikus** (elvont fogalmat megszemélyesít).',
        },
        { kind: 'heading', text: 'Dorottya és a vígeposz' },
        {
          kind: 'text',
          text: 'A **Dorottya, vagy is a dámák diadalma a fársángon** (1804-ben jelent meg) **furcsa vitézi versezet négy könyvben**: komikus eposz. Az eposzi hagyományt (invokáció, hősi küzdelem, csodás elemek) a farsangi bálok világára alkalmazza: az idősödő hölgyek és a vitézkedő legények **komikus harca** szatirikus képet fest a korról. A mű a **felvilágosodás** gúnyos, nevelő szándékú szemléletét mutatja. A műfaj előképe a komikus eposz (például Petőfi *A helység kalapácsa* később ugyanezt a hagyományt követi).',
        },
        { kind: 'heading', text: 'Egyéb művek' },
        {
          kind: 'text',
          text: 'A költő színműveket is írt (*Karnyóné*, *Cultura*), fordított (Metastasio, Kleist, Homérosz *Békaegérharc* átdolgozása), és alkalmi verseket szerzett. A *Halotti versek* (1804) a nagyváradi temetésre készült, és **A lélek halhatatlansága** a pálya utolsó nagy sikere.',
        },
        {
          kind: 'compare',
          title: 'Három Csokonai-költemény',
          columns: ['Cím és műfaj', 'Téma és hangvétel'],
          rows: [
            {
              label: 'A Reményhez',
              cells: ['dal, allegorikus megszólítás', 'remény és csalódás, vád és lemondás'],
            },
            {
              label: 'Tartózkodó kérelem',
              cells: ['szerelmi dal, anakreoni jelleg', 'játékos, tisztelettel kérő hang'],
            },
            {
              label: 'Dorottya',
              cells: ['komikus eposz (vígeposz)', 'szatirikus, gúnyos, nevelő szándékú'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten**: a pálya szakaszai (debreceni diákévek, vándorévek, csurgói tanárság, a debreceni utolsó évek) különböző műfajokat és hangokat hoznak. Hatása: **Kazinczy** és köre elismerte, **Kölcsey** 1817-ben kemény kritikát írt róla, de tehetségét elismerte; a sírfelirat körüli **Árkádia-per** (Kazinczy „Arcádiában éltem én is” felirata) a debreceniek és a nyelvújítók közti vitához vezetett. Világirodalmi párhuzamok: Anakreón, Metastasio, Kleist, a francia rokokó.',
        },
        {
          kind: 'tip',
          text: 'Csokonai két verse, a *Tartózkodó kérelem* és *A Reményhez*, az app **Memoriterek** részében is megvan. Tanuld meg szöveghűen, és gyakorold a kifejező előadást.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Csokonai költészete (például *A Reményhez*, *Tartózkodó kérelem*, Lilla-dalok) a korstílus és a műfajok szempontjából.',
            'Irodalmi feladatlap: korstílus (felvilágosodás, rokokó, szentimentalizmus), műfaj (óda, dal, vígeposz), memoriter-kiegészítés.',
            'Összehasonlítás: Csokonai és Berzsenyi, Kölcsey vagy Petőfi (szerelem, remény, költői szerep).',
          ],
        },
        {
          kind: 'example',
          title: 'Műelemzési vázlat: A Reményhez',
          problem: 'Mutasd be *A Reményhez* témáját, szerkezetét és hangulatát.',
          solution:
            '**Bevezetés**: Csokonai, felvilágosodás és rokokó; a vers a remény és a csalódás viszonyát vizsgálja.\n**Megszólítás**: a Remény megszemélyesítése (égi tünemény, csalfa, vak).\n**Szerkezet**: vád, a megcsalt hit emléke, lemondás és búcsú.\n**Forma**: rövid soros (6–5 szótag), nyolcsoros szakaszok, dalszerű lüktetés.\n**Értelmezés**: a felvilágosodás hitét és a személyes csalódást egyszerre fejezi ki.\n**Zárás**: a vers az egyéni életérzésből általános emberi tapasztalatot formál.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a *Lillát* (dalciklus) a *Dorottyával* (komikus eposz). A Csokonai-életmű műfajilag sokszínű: dal, óda, vígeposz, színmű.',
        },
      ],
      topicMatch: ['csokonai'],
      cards: { subject: 'magyar', era: 'felvilagosodas' },
      quiz: [
        {
          question: 'Melyik város kollégiumában tanult Csokonai?',
          options: ['Sárospatakon', 'Debrecenben', 'Pozsonyban', 'Pesten'],
          answer: 1,
          explanation:
            'Csokonai a debreceni református kollégium diákja volt, és Debrecenben is halt meg.',
        },
        {
          question: 'Ki volt Lilla?',
          options: ['Vajda Julianna', 'Szendrey Júlia', 'Losonczy Anna', 'Draskovich Euzébia'],
          answer: 0,
          explanation:
            'Lillát Vajda Juliannával azonosítják, akivel Csokonai Komáromban ismerkedett meg.',
        },
        {
          question: 'Milyen műfajú a Dorottya?',
          options: ['elégia', 'komikus eposz (vígeposz)', 'tragédia', 'vallásos ének'],
          answer: 1,
          explanation:
            'A Dorottya furcsa vitézi versezet, az eposzi hagyomány komikus alkalmazása.',
        },
        {
          question: 'Mit szólít meg Csokonai A Reményhez című versében?',
          options: ['a hazát', 'a szerelmét', 'a Reményt mint égi tüneményt', 'a természetet'],
          answer: 2,
          explanation: 'A Reményt megszemélyesítve szólítja meg, mint „csalfa, vak” égi tüneményt.',
        },
        {
          question: 'Mi az Árkádia-per?',
          options: [
            'Csokonai és Berzsenyi vitája.',
            'A Csokonai sírfelirata körüli vita (Arcádiában éltem én is).',
            'A Dorottya körüli botrány.',
            'A Lilla kiadása körüli per.',
          ],
          answer: 1,
          explanation:
            'Kazinczy sírfeliratjavaslata („Arcádiában éltem én is”) miatt a debreceniek és a nyelvújítók közt vita támadt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Csokonai Vitéz Mihály', url: wiki('Csokonai Vitéz Mihály') },
        { label: 'Wikipédia: Dorottya (Csokonai)', url: wiki('Dorottya Csokonai Vitéz Mihály') },
        {
          label: 'Wikipédia: Lilla (Csokonai)',
          url: wiki('Lilla Csokonai Vitéz Mihály dalciklus'),
        },
      ],
    },
    {
      id: 'reformacio-barokk-kuruc-kor-irodalma',
      subject: 'magyar',
      unitId: 'regi-magyar-irodalom',
      title: 'A reformáció, a barokk és a kuruc kor irodalma',
      level: 'kozep',
      requirement: {
        kozep:
          'A reformáció vallásos irodalma, az anyanyelvű kultúra születése; a reformáció világi irodalma; a barokk irodalma; népszerű világi költészet a 17–18. században: a kuruc kor lírája. A korszakok néhány jellemzője, alkotások értelmezése.',
        emelt:
          'Műfaji, kifejezésmódbeli, tematikai sajátosságok a korszak szellemi irányzataival, a korstílussal való összefüggésben; a művek hatása, fogadtatása.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **reformáció** (16. század) az **anyanyelvű kultúra** felvirágzását hozta: bibliafordítások, prédikációk, zsoltárok, nyomdák, iskolák.',
            'Vallásos irodalom: **Sylvester János** *Újtestamentuma* (1541), **Károli Gáspár** *Vizsolyi Bibliája* (1590), **Szenczi Molnár Albert** zsoltárfordítása (1607).',
            'Világi irodalom: **Tinódi Lantos Sebestyén** históriás énekei, **Bornemisza Péter**, **Heltai Gáspár** és Balassi köre; a **história** és **széphistória** műfajai.',
            'A **barokk** (17. század) a **katolikus megújulás** (ellenreformáció) és a pompa stílusa: **Pázmány Péter**, **Zrínyi Miklós**, **Gyöngyösi István**.',
            'A **kuruc kor lírája** (17–18. század fordulója) névtelen, népies hangú **szabadságvágyat, bujdosást, harcot** kifejező dalokat hozott.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'reformáció',
              text: 'A 16. századi egyházi megújulási mozgalom (Luther, Kálvin); a hívek anyanyelvű igehirdetést, bibliát és éneket kaptak.',
            },
            {
              term: 'históriás ének',
              text: 'Történelmi eseményt elbeszélő, énekelt verses mű (Tinódi); a mondanivaló gyakran tanító szándékú.',
            },
            {
              term: 'széphistória',
              text: 'Verses elbeszélés szerelmi vagy kalandos tárgyról, gyakran külföldi forrás nyomán.',
            },
            {
              term: 'barokk',
              text: 'A 17. század fő stílusa: pompa, mozgalmasság, ellentétek, vallásos és heroikus tartalom, a mulandóság érzése.',
            },
            {
              term: 'ellenreformáció',
              text: 'A katolikus egyház megújulása és a protestantizmus visszaszorítása, Magyarországon főleg Pázmány Péter működéséhez kapcsolódik.',
            },
            {
              term: 'kuruc költészet',
              text: 'A Rákóczi-szabadságharc (1703–1711) idejének és hagyományának névtelen, dalszerű lírája.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A reformáció és az anyanyelvű kultúra' },
        {
          kind: 'text',
          text: 'A reformáció a latin helyett az **anyanyelvet** helyezte a hitélet középpontjába. Ezért születtek magyar bibliafordítások, énekeskönyvek, prédikációk és tankönyvek, és ezért szaporodtak a nyomdák és az iskolák. **Sylvester János** a *Grammatica Hungarolatina* szerzője, és 1541-ben megjelentette az első nyomtatott magyar **Újszövetséget**. **Károli Gáspár** és a vizsolyi nyomda 1590-ben kiadta a **teljes magyar Bibliát** (*Vizsolyi Biblia*). **Szenczi Molnár Albert** a *Psalterium Ungaricum* szerzője (1607), amelynek zsoltárai a református egyház énekeskönyvének alapjává váltak.',
        },
        { kind: 'heading', text: 'A reformáció világi irodalma' },
        {
          kind: 'text',
          text: '**Tinódi Lantos Sebestyén** énekmondó, a *Cronica* (1554) szerzője. **Históriás énekei** a török háborúk eseményeit (például Eger ostromát) mondják el, tanúk és szemtanúk elbeszélése alapján, dallammal együtt. **Bornemisza Péter** prédikátor, író, Balassi nevelője; **Heltai Gáspár** a *Száz fabula* szerzője. A világi irodalom a **széphistóriák**, a krónikák és a vitézi énekek műfajaiban él. Balassi költészete ugyanennek a kornak a legmagasabb szintű költői teljesítménye.',
        },
        { kind: 'heading', text: 'A barokk irodalma' },
        {
          kind: 'text',
          text: 'A barokk Magyarországon a **török háborúk** és a **vallási küzdelmek** korában élt. **Pázmány Péter** esztergomi érsek a katolikus megújulás vezetője: hatalmas, színes stílusú **prédikációi** és vitairatai (*Kalauz*, 1613) a magyar kultúrprózát gazdagították. **Zrínyi Miklós** a barokk hősi eposz kiváló képviselője (*Szigeti veszedelem*). **Gyöngyösi István** a *Murányi Vénusz* szerzője, a barokk verses regény mestere. A barokk világlátás: a földi élet mulandó, a hit és a hősiesség emel fel; az ellentétek (élet–halál, bűn–megváltás) állandóak.',
        },
        {
          kind: 'compare',
          title: 'Reformáció és barokk',
          columns: ['Reformáció (16. sz.)', 'Barokk (17. sz.)'],
          rows: [
            {
              label: 'Fő cél',
              cells: [
                'anyanyelvű hit, bibliafordítás, oktatás',
                'katolikus megújulás, pompa, hősi példa',
              ],
            },
            {
              label: 'Műfajok',
              cells: [
                'bibliafordítás, zsoltár, históriás ének',
                'hősköltemény, prédikáció, verses regény',
              ],
            },
            {
              label: 'Szerzők',
              cells: ['Sylvester, Károli, Tinódi, Szenczi Molnár', 'Pázmány, Zrínyi, Gyöngyösi'],
            },
            {
              label: 'Stílus',
              cells: ['egyszerűbb, tanító, közösségi', 'pompás, mozgalmas, ellentétekre épül'],
            },
          ],
        },
        { kind: 'heading', text: 'A kuruc kor lírája' },
        {
          kind: 'text',
          text: 'A **kuruc** költészet a **Rákóczi-szabadságharc** (1703–1711) és az azt megelőző felkelések világából nőtt ki. A költemények többnyire **névtelenek**, népdalszerűek, szájhagyományban terjedtek. Témájuk a **szabadságvágy**, a harc, a fogság, a **bujdosás** és a hazaszeretet; a haza és a fejedelem iránti hűség. Ismert kuruc nóta például a *Tiszán innen, Dunán túl*. A gyűjtés és közzététel kora a 19. századra esett (**Thaly Kálmán** kiadásai), ő azonban saját költeményeit is a kuruc dalok közé keverte, ezért a hitelesség kérdése ma is fontos.',
        },
        {
          kind: 'keypoints',
          title: 'A kuruc líra jellemzői',
          items: [
            'névtelen, népköltészeti jellegű dalok',
            'a harc, a fogság, a bujdosás, a hazaszeretet és a szabadságvágy témái',
            'egyszerű nyelv, érzelmes és közvetlen hang',
            'a kuruc–labanc szembenállás, Rákóczi-kultusz',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten**: a korszak műfajainak összefüggése a szellemi irányzatokkal. A reformáció **humanista** gyökerekből fakadt, a barokk az **ellenreformáció** és a török háborúk légkörében; a kuruc dalok a népköltészet és az irodalom határán helyezkednek el. A korszakok hatása: a magyar irodalmi nyelv kialakulása (Károli Biblia), a nemzeti hőskultusz (Zrínyi, Rákóczi), a népiesség előzményei.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: korszak jellemzése (reformáció, barokk) szerzőkkel és művekkel.',
            'Irodalmi feladatlap: műfajok (históriás ének, zsoltár, prédikáció, eposz) és korstílusok felismerése, szerzők és művek párosítása.',
            'Összehasonlítás: reneszánsz és barokk (Balassi és Zrínyi), vagy népies költészet különböző korokból.',
          ],
        },
        {
          kind: 'example',
          title: 'Párosító feladat: szerző, mű, korszak',
          problem: 'Párosítsd: Károli Gáspár, Tinódi Lantos Sebestyén, Pázmány Péter, kuruc dalok.',
          solution:
            '**Károli Gáspár**: Vizsolyi Biblia (1590), reformáció, anyanyelvű bibliafordítás.\n**Tinódi Lantos Sebestyén**: históriás énekek, Cronica (1554), reformációkori világi irodalom.\n**Pázmány Péter**: Kalauz (1613), prédikációk, barokk és ellenreformáció.\n**Kuruc dalok**: névtelen, népies szabadságvágyó költészet a Rákóczi-szabadságharc idejéből.',
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a reformációt és az ellenreformációt egyetlen mozgalomnak venni. A **reformáció** protestáns (Luther, Kálvin), az **ellenreformáció** a katolikus válasz (Pázmány Péter). Ne feledd: a Vizsolyi Biblia **protestáns** fordítás.',
        },
      ],
      topicMatch: ['barokk', 'reformáció', 'kuruc'],
      cards: { subject: 'magyar', era: 'barokk' },
      quiz: [
        {
          question: 'Ki fordította le és adta ki a teljes magyar Bibliát 1590-ben Vizsolyban?',
          options: ['Pázmány Péter', 'Károli Gáspár', 'Sylvester János', 'Tinódi Lantos Sebestyén'],
          answer: 1,
          explanation: 'A Vizsolyi Biblia Károli Gáspár munkája, 1590-ben jelent meg.',
        },
        {
          question: 'Melyik műfaj Tinódi Lantos Sebestyén fő műfaja?',
          options: ['hősköltemény', 'históriás ének', 'dráma', 'levél'],
          answer: 1,
          explanation:
            'Tinódi énekmondóként történelmi eseményeket mondott el énekelt, verses formában.',
        },
        {
          question: 'Ki a katolikus megújulás magyarországi vezéralakja a barokk korban?',
          options: ['Károli Gáspár', 'Szenczi Molnár Albert', 'Pázmány Péter', 'Heltai Gáspár'],
          answer: 2,
          explanation:
            'Pázmány Péter esztergomi érsek az ellenreformáció vezéralakja, a Kalauz szerzője.',
        },
        {
          question: 'Mi jellemzi a kuruc kor lírájának dalait?',
          options: [
            'Latin nyelv és antik formák.',
            'Névtelen, népdalszerű hang, szabadságvágy és bujdosás témája.',
            'Filozófiai értekezések.',
            'Nyelvújító szóalkotások.',
          ],
          answer: 1,
          explanation:
            'A kuruc dalok népies hangon fejezik ki a harc, a bujdosás és a haza iránti szeretet érzéseit.',
        },
        {
          question: 'Ki gyűjtötte és adta ki a kuruc költemények nagy részét a 19. században?',
          options: ['Toldy Ferenc', 'Kazinczy Ferenc', 'Thaly Kálmán', 'Arany János'],
          answer: 2,
          explanation:
            'Thaly Kálmán adta ki a kuruc kor költeményeit, de saját verseit is köztük szerepeltette.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyar reformáció', url: wiki('Reformáció Magyarországon') },
        { label: 'Wikipédia: Barokk irodalom', url: wiki('Magyar barokk irodalom') },
        { label: 'Wikipédia: Kuruc költészet', url: wiki('Kuruc költészet') },
      ],
    },
  ],
};

export default unit;
