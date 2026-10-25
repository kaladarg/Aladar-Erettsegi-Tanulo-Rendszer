import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Vörösmarty Mihály életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'vorosmarty',
  subject: 'magyar',
  order: 48,
  title: 'Vörösmarty Mihály életműve',
  requirementRef:
    '2.1 Szerzők, művek, 1. témakör: Életművek a magyar irodalomból. Kötelező szerzők',
  intro:
    'A magyar romantika első nagy költője: a honfoglalási eposz (Zalán futása), a drámai tündérmese (Csongor és Tünde), a reformkor nemzeti és filozófiai költészete (Szózat, Gondolatok a könyvtárban) és a szabadságharc utáni látomásos versek (Előszó, A vén cigány). Életút, főbb művek, értelmezési szempontok és a vizsgán várható feladatok.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 1. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'vorosmarty-eletut-palyaszakaszok',
      subject: 'magyar',
      unitId: 'vorosmarty',
      title: 'Vörösmarty életútja és pályaszakaszai',
      level: 'emelt',
      requirement: {
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai tájékozottság; a pályaszakaszokat jellemző főbb témák és kérdésfeltevések; a pályaképre ható irányzatok és szellemi kötődések, világirodalmi párhuzamok; a művek hatása, fogadtatása; a szerző utóélete.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Vörösmarty Mihály** (1800–1855) a magyar **romantika** első nagy költője; epikus, drámai és lírai életművet is alkotott.',
            'Pályájának három nagy szakasza: **1.** a romantikus eposz és a nemzeti múlt (1820-as évek), **2.** a reformkori költészet, a dráma és a filozófiai líra (1830–1840-es évek), **3.** a szabadságharc utáni, borúlátó, látomásos költészet (1850–1854).',
            'Fő művei: *Zalán futása* (1825), *Csongor és Tünde* (1830–1831), *Szózat* (1836), *Gondolatok a könyvtárban* (1844), *Előszó* (1850), *A vén cigány* (1854).',
            'Kulcsfogalma a **nemzet sorsa** és az **emberiség sorsa**: a költő felelősségét mindkettőért vállalja.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1800', text: 'Fejér vármegyében, Kápolnásnyéken született.' },
            {
              date: '1825',
              text: 'Megjelenik a *Zalán futása*: a honfoglalási eposz azonnal hírnevet hoz.',
            },
            { date: '1830–1831', text: '*Csongor és Tünde* (dramatikus költemény).' },
            { date: '1836', text: '*Szózat*.' },
            { date: '1844', text: '*Gondolatok a könyvtárban*.' },
            {
              date: '1850',
              text: '*Előszó*: a szabadságharc leverése utáni számvetés.',
            },
            { date: '1854', text: '*A vén cigány*.' },
            { date: '1855', text: 'Pesten meghalt.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Indulás és a nemzeti eposz' },
        {
          kind: 'text',
          text: 'Vörösmarty szegény nemesi családban született Fejér vármegyében. Tanult Székesfehérváron, majd Pesten jogot hallgatott; közben nevelőskedett, többek között a **Perczel családnál**. Az 1820-as években lépett be az irodalmi életbe. A **Zalán futása** (1825) a magyar romantika első nagy sikere lett: a költő a nemzeti múlt nagy eseményét, a honfoglalást írta meg eposzban.',
        },
        { kind: 'heading', text: 'A reformkor' },
        {
          kind: 'text',
          text: 'A reformkorban Vörösmarty az irodalmi élet egyik vezéralakja lett: a nemzeti irodalom szervezésében vett részt, az Akadémia is tagjai közé választotta. Ebben az időszakban írta a **Csongor és Tündét**, a *Szózatot* és a *Gondolatok a könyvtárban* című filozófiai költeményt. A nemzeti kérdés mellé ekkor kerül az **emberiség sorsának** kérdése is.',
        },
        { kind: 'heading', text: '1848–1849 és a szabadságharc utáni évek' },
        {
          kind: 'text',
          text: 'A szabadságharc idején Vörösmarty a nemzeti ügy mellett állt. A bukás után bujkálnia kellett, majd a hatóság elé állt. A költészete ekkor válik legsötétebbé, látomásossá: az *Előszó* és *A vén cigány* a vereség utáni kiábrándultságot és a világ sorsa feletti aggodalmat fogalmazza meg. 1855-ben halt meg Pesten.',
        },
        {
          kind: 'compare',
          title: 'Három pályaszakasz',
          columns: ['Időszak', 'Jellemző művek és kérdések'],
          rows: [
            {
              label: '1820-as évek',
              cells: ['nemzeti múlt, eposz', '*Zalán futása*: honfoglalás, a nemzet hősi múltja'],
            },
            {
              label: '1830–1840-es évek',
              cells: [
                'reformkor, filozófiai líra',
                '*Csongor és Tünde*, *Szózat*, *Gondolatok a könyvtárban*: a boldogság, a nemzet és az emberiség sorsa',
              ],
            },
            {
              label: '1850–1854',
              cells: [
                'vereség után',
                '*Előszó*, *A vén cigány*: kiábrándulás, a világ sorsa feletti kétségbeesés',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Vörösmarty költészetét a **romantika** határozza meg: a nemzeti múlt megidézése, a fantázia, a költő felelőssége a közösségért. A pályaképre hatott a magyar hagyomány (Kazinczy és a nyelvújítás, Kölcsey és Berzsenyi költészete), valamint a világirodalom: a *Csongor és Tünde* esetében szokás Shakespeare *Szentivánéji álom* című vígjátékára és a magyar *Árgirus*-hagyományra utalni, a nemzethalál-látomás gondolata pedig a korszak német gondolkodóinak (Herder) hatását mutatja.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Fogadtatás és utóélet.** A *Zalán futása* kortársi sikere megalapozta Vörösmarty hírnevét; a *Szózat* a nemzeti közösség verse lett, a Kölcsey-féle *Himnusz* párja. A *Csongor és Tünde* a 20. században vált a magyar drámairodalom egyik legfontosabb darabjává, a későbbi versek (különösen *A vén cigány*) pedig a modern költészet előzményeiként is olvashatók. A neve a mai napig él: például Budapest egyik főterét róla nevezték el.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: egy Vörösmarty-mű bemutatása adott szempont szerint (műfaji, tematikus, világértelmezési), kapcsolat másik művel.',
            'Írásbeli: műértelmező szövegalkotás Vörösmarty-versből (például *Szózat*, *Gondolatok a könyvtárban*, *Előszó*, *A vén cigány*) vagy összehasonlító elemzés.',
            'Emelt szinten: a pályaszakaszok jellemzése, irányzati és szellemi kötődések, fogadtatás, utóélet.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba a három szakasz összekeverése: a *Szózat* (1836) és a *Gondolatok a könyvtárban* (1844) reformkori, az *Előszó* (1850) és *A vén cigány* (1854) a szabadságharc utáni. Ne beszélj a *Szózat* reményteli hangján az *Előszó* kapcsán, mert a két mű világlátása eltér.',
        },
        {
          kind: 'tip',
          text: 'Pályakép-feladatnál használd a „kérdés – mű – válasz” szerkezetet: minden szakaszhoz írd le, milyen kérdést tesz fel a költő, melyik mű mutatja meg, és milyen választ kapunk.',
        },
      ],
      topicMatch: ['vörösmarty'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik Vörösmarty-mű keletkezett a szabadságharc leverése után?',
          options: ['Zalán futása', 'Szózat', 'A vén cigány', 'Csongor és Tünde'],
          answer: 2,
          explanation:
            'A vén cigány 1854-es, a szabadságharc utáni időszak verse; a többi mű korábbi.',
        },
        {
          question: 'Melyik évben jelent meg a Zalán futása?',
          options: ['1825', '1836', '1844', '1850'],
          answer: 0,
          explanation: 'A *Zalán futása* 1825-ben jelent meg, ez hozta meg Vörösmarty hírnevét.',
        },
        {
          question: 'Melyik pályaszakaszhoz tartozik a Gondolatok a könyvtárban?',
          options: [
            'az 1820-as évek eposzi',
            'a reformkori költészet',
            'a szabadságharc utáni költészet',
            'a gyermekkori versek',
          ],
          answer: 1,
          explanation: 'A vers 1844-es, a reformkor filozófiai költészetének egyik csúcsa.',
        },
        {
          question: 'Melyik állítás igaz Vörösmartyra?',
          emelt: true,
          options: [
            'A magyar klasszicizmus utolsó költője.',
            'A magyar romantika első nagy költője.',
            'A Nyugat első nemzedékéhez tartozott.',
            'Csak lírát írt.',
          ],
          answer: 1,
          explanation:
            'Vörösmarty a romantika első nagy magyar költője, eposzt, drámát és lírát is írt.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Vörösmarty Mihály', url: wiki('Vörösmarty Mihály') },
        { label: 'Wikipédia: Romantika', url: wiki('Romantika irodalom') },
        { label: 'Wikipédia: Reformkor', url: wiki('Reformkor') },
      ],
    },
    {
      id: 'vorosmarty-zalan-futasa-eposz',
      subject: 'magyar',
      unitId: 'vorosmarty',
      title: 'Zalán futása: a romantikus honfoglalási eposz',
      level: 'kozep',
      requirement: {
        kozep:
          'A főbb művek szövegismereten alapuló értelmezése; a művek elhelyezése az életműben és a korszakban; az epikai alkotás értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, világlátás); kapcsolatok a művek között.',
        emelt:
          'Műfajteremtő művek; azonos műfajú alkotások poétikai szempontú összevetése; a mű hatása, fogadtatása.',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Zalán futása** (1825): romantikus **hősköltemény**, a **honfoglalás** eposza.',
            'Témája Árpád és a magyarok győzelme a honfoglaláskor; az ellenfél **Zalán**, a bolgár vezér, akit a magyarok elűznek.',
            'A mű a **nemzeti múlt** megidézése: a magyarok eredetét és hivatását a hősi múlton keresztül mutatja meg.',
            'A romantikus eposz egyszerre használja az antik eposz eszközeit és a **természetfeletti elemeket**; verselése **hexameter**.',
            'Vörösmarty ezzel az első nagy sikerét aratta, és a nemzeti eposz igényét kielégítette.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'eposz (hősköltemény)',
              text: 'Hosszú elbeszélő költemény, amely egy közösség nagy eseményét, a hősök tetteit énekli meg.',
            },
            {
              term: 'hexameter',
              text: 'Hat verslábas antik sor; a magyar eposzok hagyományos verselése.',
            },
            {
              term: 'romantika',
              text: 'A 19. század eleji korstílus: a képzelet, az érzelem, a nemzeti múlt és a költő küldetése áll a középpontban.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miről szól?' },
        {
          kind: 'text',
          text: 'A mű a **honfoglalás** idejének egy szakaszát mutatja be: Árpád és a magyarok hódítása, a bolgár vezér, **Zalán** bukása, a vezér megfutamodása. A mű címe is ezt jelzi: Zalán futása. Az események mellett isteni és természetfeletti erők is megjelennek, ezek a magyar mitológia és az antik eposz hagyományából építkeznek.',
        },
        { kind: 'heading', text: 'Műfaj és kompozíció' },
        {
          kind: 'text',
          text: 'A **hősköltemény** (eposz) az antik hagyományt követi: hosszú, énekekre tagolt elbeszélő költemény, hexameterben írva. A hagyományos eposzi elemek: **közösségi hős**, nagy esemény, csaták leírása, természetfeletti erők beavatkozása. A műben a hangsúly a **nemzeti múlt dicsőségén** van, ezért a romantika nemzeti elköteleződésének tipikus alkotása.',
        },
        { kind: 'heading', text: 'Miért fontos?' },
        {
          kind: 'text',
          text: 'A *Zalán futása* az első nagy magyar **romantikus eposz**. A nemzeti öntudat erősödésének idején született, ezért a kortársak lelkesen fogadták. Később maga Vörösmarty is más műfajok felé fordult, a drámai és filozófiai költészet felé, de az eposz a pálya elején megteremtette hírnevét.',
        },
        {
          kind: 'compare',
          title: 'Zalán futása és a Csongor és Tünde',
          columns: ['Zalán futása', 'Csongor és Tünde'],
          rows: [
            { label: 'Műnem', cells: ['epika (eposz)', 'dráma (dramatikus költemény)'] },
            {
              label: 'Téma',
              cells: ['a nemzet hősi múltja, a honfoglalás', 'a boldogság keresése, az egyén útja'],
            },
            {
              label: 'Világ',
              cells: ['történelmi-mitikus', 'mesés, szimbolikus'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Poétikai összevetés.** A magyar eposzi hagyományban a *Zalán futása* a Zrínyi-féle *Szigeti veszedelem* és a 18. század végi eposzkísérletek után a romantika ízlésének megfelelő nemzeti eposzt teremtett. A mű a **műfaj történeti változásának** példája is: az eposz, mint a nemzeti közösség nagy műfaja, a romantikában még él, de a századfordulóra a regény és a dráma veszi át a szerepét.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műfaji kérdés: mi a hősköltemény jellemzője, hogyan mutatja ezt a *Zalán futása*?',
            'Szóbeli tételben: az epikai életműrész bemutatása a romantika nemzeti törekvései alapján.',
            'Összehasonlítás másik eposzi vagy elbeszélő költeményes alkotással (például Arany *Toldi*, Zrínyi *Szigeti veszedelem*).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a honfoglalási eposz témáját a későbbi nemzeti sorskérdésekkel (*Szózat*). A *Zalán futása* a hősi múltról szól, nem a jövőről.',
        },
        {
          kind: 'tip',
          text: 'Vázlat: **1.** műfaj és keletkezés; **2.** téma és szereplők (Árpád, Zalán); **3.** eposzi eszközök (hexameter, természetfeletti elemek, hősök); **4.** helye az életműben és a korszakban; **5.** záró gondolat: a nemzeti múlt szerepe a romantikában.',
        },
      ],
      topicMatch: ['vörösmarty'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Milyen műfajú a Zalán futása?',
          options: ['dráma', 'hősköltemény (eposz)', 'dal', 'regény'],
          answer: 1,
          explanation: 'A *Zalán futása* hősköltemény, a honfoglalás eposza.',
        },
        {
          question: 'Ki Zalán a műben?',
          options: [
            'a magyarok vezére',
            'a bolgár vezér, akit a magyarok elűznek',
            'a költő barátja',
            'Árpád fia',
          ],
          answer: 1,
          explanation: 'Zalán a bolgár vezér, a cím a menekülésére utal.',
        },
        {
          question: 'Milyen verselésű a Zalán futása?',
          options: ['ütemhangsúlyos', 'hexameter', 'szabadvers', 'sapphói strófa'],
          answer: 1,
          explanation:
            'A magyar eposzok hagyományos verselése a hexameter, ezt használja Vörösmarty is.',
        },
        {
          question: 'Melyik korstílushoz tartozik a mű?',
          options: ['reneszánsz', 'klasszicizmus', 'romantika', 'realizmus'],
          answer: 2,
          explanation:
            'A nemzeti múlt megidézése és a természetfeletti elemek a romantikára jellemzők.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Zalán futása', url: wiki('Zalán futása') },
        { label: 'Wikipédia: Eposz', url: wiki('Eposz') },
        { label: 'Wikipédia: Honfoglalás', url: wiki('Magyar honfoglalás') },
      ],
    },
    {
      id: 'vorosmarty-csongor-es-tunde',
      subject: 'magyar',
      unitId: 'vorosmarty',
      title: 'Csongor és Tünde: a boldogság keresése',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai, drámai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, jellemző motívumok, jelentésrétegek, világlátás alapján); műrészletek értelmezése; kapcsolatok a művek között.',
        emelt:
          'Műfajteremtő művek; a világirodalmi párhuzamok; a művekben felvetett kérdések gondolati, filozófiai, esztétikai vonatkozása; a mű hatása, fogadtatása.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Csongor és Tünde** (1830–1831): **dramatikus költemény**, tündérmese-dráma öt felvonásban.',
            'Főszereplők: **Csongor** (a földi ember), **Tünde** (a tündér), kísérőik **Balga** és **Ilma**; az ellenfél **Mirigy**, a boszorkány.',
            'Alapkérdés: **mi a boldogság**, és hogyan érhető el? Csongor útja a boldogság keresése.',
            'Jelentős motívumok: **az út**, az **aranyalmafa**, a **három vándor** (kalmár, fejedelem, tudós), amelyek a pénz, a hatalom és a tudás hiábavalóságát mutatják.',
            'A mű mesei köntösben szól az **emberi életről**; a happy end ellenére a világot sötét erők is fenyegetik.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'dramatikus költemény',
              text: 'Verses drámai forma, amely inkább olvasásra és gondolati mélységre épít, mint a színpadi cselekményre.',
            },
            {
              term: 'motívum',
              text: 'A műben visszatérő, jelentést hordozó elem (itt például az út, az alma, az éj).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A cselekmény fő vonala' },
        {
          kind: 'text',
          text: 'Csongor a **boldogságot** keresi, és ez a keresés **Tündéhez** vezeti. Útja során kísérője, **Balga** mellett találkozik **Ilmával**, Tünde barátnőjével, valamint a **három vándorral**, akik a világ hagyományos céljait testesítik meg. A boszorkány, **Mirigy** akadályokat állít Csongor elé. A mű végén Csongor és Tünde egymásra talál.',
        },
        {
          kind: 'people',
          items: [
            { name: 'Csongor', text: 'a főhős, a boldogságot kereső földi ember.' },
            {
              name: 'Tünde',
              text: 'a tündér, a boldogság, a szerelem, az eszmény megtestesítője.',
            },
            { name: 'Balga', text: 'Csongor szolgája, a hétköznapi, komikus ellenpont.' },
            { name: 'Ilma', text: 'Tünde barátnője, Balga párja.' },
            { name: 'Mirigy', text: 'a boszorkány, az akadályok állítója.' },
          ],
        },
        { kind: 'heading', text: 'Jelentésrétegek' },
        {
          kind: 'text',
          text: 'A mű három rétegben olvasható. **Mesei réteg:** a hős megkeresi a szerelmét. **Emberi réteg:** a boldogság keresése az egyéni élet kérdése. **Filozófiai réteg:** a három vándor (kalmár, fejedelem, tudós) az emberi törekvések csődjét mutatja: a vagyon, a hatalom és a tudás nem adja meg a boldogságot. A kérdés tehát nemcsak Csongoré, hanem az emberi létezésé.',
        },
        {
          kind: 'compare',
          title: 'A három vándor és Csongor útja',
          columns: ['Vándor', 'Mit képvisel?'],
          rows: [
            { label: 'Kalmár', cells: ['a vagyon', 'az anyagi jólét nem hoz boldogságot'] },
            { label: 'Fejedelem', cells: ['a hatalom', 'a hatalom sem teszi boldoggá az embert'] },
            { label: 'Tudós', cells: ['a tudás', 'a tudás sem ad végső választ'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Források és világirodalmi párhuzamok.** A mese alapja a 16. századi *Árgirus* története, a mű hangulata és a tündérvilág ábrázolása Shakespeare *Szentivánéji álom* című vígjátékával rokonítható. Vörösmarty a mesét filozófiai drámává mélyítette, ezért a mű a magyar drámairodalom egyik különleges, nehezen besorolható alkotása. A boldogság keresése és a szimbolikus szereplők a **világirodalmi** hagyományhoz kapcsolják.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műfaji kérdés: miért „dramatikus költemény”, és mi köze a mesékhez?',
            'Motívumvizsgálat: út, aranyalma, vándorok, éj és nappal, boldogság.',
            'Összehasonlítás másik Vörösmarty-művel (például *Gondolatok a könyvtárban*), mert mindkettő az emberi lét nagy kérdéseit teszi fel.',
          ],
        },
        {
          kind: 'warning',
          text: 'A *Csongor és Tünde* nem „csak mese”. Ha pusztán a cselekményt meséled el, elveszted a pontokat a jelentésrétegekért. Mindig kapcsold a motívumokat a boldogság kérdéséhez.',
        },
        {
          kind: 'tip',
          text: 'Vázlat: **1.** keletkezés, műfaj; **2.** cselekmény röviden; **3.** szereplők mint jelképek; **4.** a három vándor jelentése; **5.** a mű helye az életműben; **6.** személyes értelmezés a boldogságról.',
        },
      ],
      topicMatch: ['vörösmarty'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Milyen műfajú a Csongor és Tünde?',
          options: [
            'eposz',
            'ballada',
            'dramatikus költemény (tündérmese-dráma)',
            'filozófiai óda',
          ],
          answer: 2,
          explanation: 'A mű verses dráma, mesei elemekkel: dramatikus költemény.',
        },
        {
          question: 'Mit keres Csongor?',
          options: ['a hatalmat', 'a boldogságot', 'a tudást', 'a hazáját'],
          answer: 1,
          explanation: 'Csongor útja a boldogság keresése, ez vezeti Tündéhez.',
        },
        {
          question: 'Mit jelképez a három vándor?',
          options: [
            'az évszakokat',
            'a hagyományos emberi célokat: vagyont, hatalmat, tudást',
            'a három magyar törzset',
            'a három fiút a mesében',
          ],
          answer: 1,
          explanation:
            'A kalmár a vagyont, a fejedelem a hatalmat, a tudós a tudást képviseli, és egyik sem hoz boldogságot.',
        },
        {
          question: 'Kicsoda Mirigy?',
          options: ['Tünde anyja', 'a boszorkány', 'Csongor szolgája', 'a kalmár'],
          answer: 1,
          explanation: 'Mirigy a boszorkány, az akadályok állítója.',
        },
        {
          question: 'Melyik mű párhuzamaként említik a Csongor és Tündét?',
          options: [
            'Shakespeare: Szentivánéji álom',
            'Dante: Isteni színjáték',
            'Madách: Az ember tragédiája',
            'Arany: Toldi',
          ],
          answer: 0,
          emelt: true,
          explanation:
            'A tündérvilág ábrázolása miatt szokás Shakespeare *Szentivánéji álom* című művével rokonítani.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Csongor és Tünde', url: wiki('Csongor és Tünde') },
        { label: 'Wikipédia: Árgirus', url: wiki('Árgirus története') },
        { label: 'Wikipédia: Szentivánéji álom', url: wiki('Szentivánéji álom') },
      ],
    },
    {
      id: 'vorosmarty-szozat-gondolatok-konyvtarban',
      subject: 'magyar',
      unitId: 'vorosmarty',
      title: 'A reformkori líra: Szózat, Gondolatok a könyvtárban',
      level: 'both',
      requirement: {
        kozep:
          'Néhány lírai alkotás bemutatása, értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); műrészletek értelmezése; memoriterek szöveghű és kifejező előadása; a művekben felvetett kérdések etikai, történeti, társadalmi vonatkozása.',
        emelt:
          'A pályaszakaszt jellemző témák, kérdésfeltevések; a művekben felvetett kérdések gondolati, filozófiai, esztétikai vonatkozása; különféle interpretációk.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Szózat** (1836): hazafias **óda**, a nemzeti összetartozás költeménye; a Kölcsey-féle *Himnusz* társa.',
            'Szerkezete: **felszólítás** a hazához való hűségre, **indoklás** a múlt hősi példájával, majd a **nemzethalál** rémképe és a hit a megmaradásban.',
            'Híres sorai: „Hazádnak rendületlenűl / Légy híve, óh magyar” és „Itt élned, halnod kell.”',
            '**Gondolatok a könyvtárban** (1844): **filozófiai költemény**; a könyvek bölcsessége nem elég, ha az emberiség boldogtalan, ezért cselekedni kell.',
            'Mindkét vers a költő **felelősségét** mutatja: a nemzet és az emberiség sorsáról szól.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'óda',
              text: 'Emelkedett hangú, ünnepélyes lírai műfaj, amely egy személyt, eszmét vagy közösséget dicsőít.',
            },
            {
              term: 'nemzethalál',
              text: 'A nemzet pusztulásának rémképe, a reformkori költészet visszatérő félelme.',
            },
            {
              term: 'filozófiai költemény',
              text: 'Olyan vers, amely az emberi lét nagy kérdéseire kérdez rá, gondolatmenetre épül.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'A *Szózat* a Memoriterek szekcióban is megtalálható az alkalmazásban, ott begyakorolhatod a szöveghű előadást.',
        },
      ],
      details: [
        { kind: 'heading', text: 'Szózat' },
        {
          kind: 'text',
          text: 'A *Szózat* a **reformkor** nemzeti költészetének egyik csúcsa. Műfaja **óda**, de ünnepélyes retorikus hangja a **szózat** (felhívás) jellegét is hordozza. A szerkezet három fő gondolati egysége: **1.** a hazához való hűség követelése („Hazádnak rendületlenűl / Légy híve, óh magyar”); **2.** a haza szeretetének indoklása: a föld, amelyet a magyarok elődei vérükkel szereztek és védtek; **3.** a jövő két képe: a **nemzethalál** vízió és a megmaradásba vetett hit. A záró gondolat: „Itt élned, halnod kell.”',
        },
        {
          kind: 'text',
          text: 'A *Szózat* a *Himnusz* párja: a *Himnusz* a nemzet sorsát imaként fogalmazza meg, a *Szózat* felhívás a közösséghez. Egressy Béni zenésítette meg, és a *Himnusz* mellett a nemzeti ünnepek közös éneke lett.',
        },
        { kind: 'heading', text: 'Gondolatok a könyvtárban' },
        {
          kind: 'text',
          text: 'A vers 1844-es, a reformkor végének filozófiai költeménye. A beszélő a **könyvtárban** áll, a felhalmozott tudás között, és azt kérdezi, mit ér a tudomány, ha az emberiség sorsa nem javul. A válasz a **cselekvés**: a gondolatot tettnek kell követnie. A kulcsgondolat a költemény egyik híres kérdésében fogalmazódik meg: „Mi dolgunk a világon? küzdeni / Erőnk szerint a legnemesbekért.” A verset rímtelen, jambikus sorok jellemzik.',
        },
        {
          kind: 'compare',
          title: 'Szózat és Gondolatok a könyvtárban',
          columns: ['Szózat', 'Gondolatok a könyvtárban'],
          rows: [
            { label: 'Év', cells: ['1836', '1844'] },
            { label: 'Műfaj', cells: ['óda, felhívás', 'filozófiai költemény'] },
            { label: 'Kérdés', cells: ['a nemzet sorsa, hűség', 'az emberiség sorsa, cselekvés'] },
            {
              label: 'Hang',
              cells: ['ünnepélyes, retorikus', 'elmélkedő, gondolatmenetes'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Értelmezési szempontok.** A két mű együtt mutatja a reformkori pálya jellemzőit: a nemzeti gondolat kiterjed az emberiség egészére, és a költői szerep **közösségi felelősség**. A *Szózat* hatása és utóélete (nemzeti ünnepek, himnusz-hagyomány) külön vizsgálható, ahogy a *Gondolatok a könyvtárban* és a későbbi *Előszó* közötti **világlátásbeli változás** is: a cselekvő hit helyét a kiábrándultság veszi át.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: a *Szózat* vagy a *Gondolatok a könyvtárban* szerkezete, műfaja, jellemző szavai, költői eszközei.',
            'Összehasonlítás: *Szózat* és *Himnusz* (Kölcsey), vagy két Vörösmarty-vers.',
            'Memoriter: a *Szózat* szöveghű előadása (ismerd fel a kihagyott részeket és a strófák sorrendjét).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondd, hogy a *Szózat* teljesen derűs: a hit mellett benne van a nemzethalál rémképe is. A *Gondolatok a könyvtárban* sem pusztán elvont gondolkodás: a vers a cselekvésre mutat.',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: a Szózat értelmezése',
          problem: 'Mutasd be a *Szózat* szerkezetét és fő gondolatát!',
          solution:
            '**Bevezetés:** 1836, óda, a reformkori nemzeti költészet műve.\n\n**Szerkezet:** felszólítás a hűségre (az első strófák), indoklás a múlt hősi áldozataival, majd a jövő két képe: nemzethalál vagy megmaradás.\n\n**Eszközök:** retorikai felszólítás, ünnepélyes hang, ellentétek.\n\n**Zárás:** a vers a *Himnusz* párja, és a nemzeti összetartozás kifejezése: „Itt élned, halnod kell.”',
        },
      ],
      topicMatch: ['vörösmarty'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik évben íródott a Szózat?',
          options: ['1825', '1836', '1844', '1854'],
          answer: 1,
          explanation: 'A *Szózat* 1836-os, a reformkor nemzeti költészetének egyik fő műve.',
        },
        {
          question: 'Mi a Szózat műfaja?',
          options: ['elégia', 'ballada', 'óda', 'epigramma'],
          answer: 2,
          explanation: 'A *Szózat* ünnepélyes, emelkedett hangú óda.',
        },
        {
          question: 'Melyik vers kérdése: „Mi dolgunk a világon?”',
          options: ['Szózat', 'Gondolatok a könyvtárban', 'A vén cigány', 'Zalán futása'],
          answer: 1,
          explanation: 'A kérdés a *Gondolatok a könyvtárban* kulcsgondolata.',
        },
        {
          question: 'Mit jelent a nemzethalál?',
          options: [
            'a nemzeti ünnep napját',
            'a nemzet pusztulásának rémképét',
            'egy ismert eposzt',
            'a költő halálát',
          ],
          answer: 1,
          explanation:
            'A nemzethalál a nemzet pusztulásának félelme, a *Szózat* visszatérő motívuma.',
        },
        {
          question: 'Melyik vers a Szózat „párja”?',
          options: ['Himnusz', 'Nemzeti dal', 'Toldi', 'Előszó'],
          answer: 0,
          emelt: true,
          explanation:
            'Kölcsey *Himnusza* és a *Szózat* a magyar nemzeti költészet két alappillére.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Szózat', url: wiki('Szózat Vörösmarty') },
        { label: 'Wikipédia: Gondolatok a könyvtárban', url: wiki('Gondolatok a könyvtárban') },
        { label: 'Wikipédia: Himnusz', url: wiki('Himnusz Kölcsey') },
      ],
    },
    {
      id: 'vorosmarty-kesei-koltoszet',
      subject: 'magyar',
      unitId: 'vorosmarty',
      title: 'A késői költészet: Előszó, A vén cigány',
      level: 'kozep',
      requirement: {
        kozep:
          'Néhány lírai alkotás bemutatása, értelmezése; műrészletek értelmezése; kapcsolatok a művek között (témák, műfajok, kifejezésmód, motívumok); a művek elhelyezése az életműben és a korszakban.',
        emelt:
          'A pályaszakaszokat jellemző főbb témák, kérdésfeltevések; a művek hatása, fogadtatása; különféle kritikák, interpretációk.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szabadságharc leverése után Vörösmarty költészete **sötét, látomásos** lett.',
            '**Előszó** (1850): számvetés a vereség után, a költő és a nemzet sorsának kérdése.',
            '**A vén cigány** (1854): az egyik legnagyobb magyar vers; a cigányzenész a költő hasonmása, a mulatás kerete a világ sorsáról szóló látomássá tágul.',
            'Közös jellemzőik: a **kiábrándultság**, a **kétségbeesés** és az összeomlás képei, mégis a **költői szó** értékének megtartása.',
            'Ezek a versek a **modern költészet** előzményeiként is olvashatók.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'látomásos költészet',
              text: 'Olyan költészet, amelyben a belső vízió, a nagy, sokszor drámai képek hordozzák a gondolatot.',
            },
            {
              term: 'alteregó',
              text: 'A költő másik énje: *A vén cigány* zenésze a költő hasonmása is.',
            },
          ],
        },
        {
          kind: 'tip',
          text: 'A vizsgán ne az életrajzi eseményeket sorolj: mutasd meg, hogyan változik a világlátás a *Szózattól* és a *Gondolatok a könyvtárbantól* az *Előszóig* és *A vén cigányig*.',
        },
      ],
      details: [
        { kind: 'heading', text: 'Előszó' },
        {
          kind: 'text',
          text: 'Az *Előszó* **1850-ben** született, a szabadságharc leverése után. A költemény a veszteség utáni számvetés: a reformkor hite és a valóság összeütközik. A költői szó értékének és a nemzet sorsának kérdése itt egymásba fonódik; a hang lemondó, de a vers nem adja fel teljesen az értékeket.',
        },
        { kind: 'heading', text: 'A vén cigány' },
        {
          kind: 'text',
          text: '*A vén cigány* (**1854**) kerete egy mulatás: a beszélő a **cigányzenészt** szólítja fel, hogy játsszon. A mulatás azonban látomássá tágul: a világ rendje megbomlik, a gondolat a nemzeti keretből az **egyetemes emberi sorsig** emelkedik. A cigány a költő hasonmása is, a zene pedig a költészet, amely a kétségbeesésben is tovább szól.',
        },
        {
          kind: 'text',
          text: 'A vers jellemzője a **nagy ív**: a mulatós hangból átcsap az apokaliptikus látomásba, a zene fokozódásával együtt. A képek zaklatottak, a hangnem hol vádló, hol részeg-önfeledt, hol tragikus.',
        },
        {
          kind: 'compare',
          title: 'Reformkor és késői költészet',
          columns: ['Reformkor (Szózat, Gondolatok…)', 'Késői költészet (Előszó, A vén cigány)'],
          rows: [
            { label: 'Hang', cells: ['hitet erősítő, felszólító', 'kiábrándult, látomásos'] },
            {
              label: 'Cél',
              cells: [
                'a nemzet és az emberiség előrehaladása',
                'a veszteség és a világ sorsa feletti számvetés',
              ],
            },
            { label: 'Költő', cells: ['közösségi vezető', 'magányos látnok'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Pályaszakasz és utóélet.** A késői versek külön szakaszt alkotnak: a témák (kiábrándultság, a költői szó értéke, a világ sorsa) a modern költészet felé mutatnak. *A vén cigány* a magyar irodalom egyik leggyakrabban elemzett verse, és különféle olvasatai (történeti, filozófiai, az alkotó önmagára vonatkozó) eltérő hangsúlyokat emelnek ki, ezért érdemes tudni, hogy nem egyetlen „helyes” értelmezés létezik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: *A vén cigány* vagy az *Előszó* szerkezete, hangulata, motívumai, költői eszközei.',
            'Összehasonlítás: *Szózat* – *A vén cigány*: a világlátás változása.',
            'Szóbeli tétel: a késői lírai életműrész bemutatása a korszakban (romantika vége, szabadságharc utáni irodalom).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne írd, hogy *A vén cigány* „csak egy mulatós vers”: a keret csak kiindulópont, a jelentés az egyetemes sors látomása. Az *Előszót* se olvasd egyszerű búcsúként: a számvetés a költői szerepet is érinti.',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: A vén cigány értelmezése',
          problem: 'Hogyan bontakozik ki *A vén cigány* látomása a mulatás keretéből?',
          solution:
            '**Bevezetés:** 1854, a szabadságharc utáni költészet csúcsa.\n\n**Keret:** a beszélő zenére szólítja a cigányt, mulatás.\n\n**Kibontás:** a zene fokozódásával a vers látomássá tágul: a világ összeomlásának képei.\n\n**Jelentés:** a cigány a költő alteregója; a zene a költészet.\n\n**Zárás:** a vers a modern költészet felé mutat, és a reformkori hit után a kiábrándultságot rögzíti.',
        },
      ],
      topicMatch: ['vörösmarty'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik évben íródott A vén cigány?',
          options: ['1836', '1844', '1850', '1854'],
          answer: 3,
          explanation: '*A vén cigány* 1854-es; az *Előszó* 1850-es.',
        },
        {
          question: 'Kit jelképez a cigányzenész a versben?',
          options: ['a költő hasonmását', 'Kölcsey Ferencet', 'a honfoglaló vezért', 'a kalmárt'],
          answer: 0,
          explanation: 'A cigány a költő alteregója, a zene pedig a költészet.',
        },
        {
          question: 'Mi jellemzi a késői Vörösmarty-költészetet?',
          options: [
            'derűs természetleírás',
            'látomásos, kiábrándult hang',
            'népies dalok',
            'hexameteres eposzok',
          ],
          answer: 1,
          explanation: 'A szabadságharc utáni versek sötét, látomásos hangja jellemző.',
        },
        {
          question: 'Mikor keletkezett az Előszó?',
          options: ['1825', '1836', '1850', '1855'],
          answer: 2,
          explanation: 'Az *Előszó* 1850-es, a szabadságharc leverése utáni vers.',
        },
      ],
      sources: [
        { label: 'Wikipédia: A vén cigány', url: wiki('A vén cigány Vörösmarty') },
        { label: 'Wikipédia: Előszó (Vörösmarty)', url: wiki('Előszó Vörösmarty Mihály vers') },
        { label: 'Wikipédia: Vörösmarty Mihály', url: wiki('Vörösmarty Mihály') },
      ],
    },
  ],
};

export default unit;
