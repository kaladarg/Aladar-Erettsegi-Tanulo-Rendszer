import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Ady Endre életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'ady',
  subject: 'magyar',
  order: 60,
  title: 'Ady Endre életműve',
  requirementRef: 'Irodalom 1. Életművek: Ady Endre',
  intro:
    'A magyar modern líra megteremtője és a Nyugat első nagy költője. Életút és a fordulat az Új versek körül, a főbb témák (magyarság, szerelem, Isten, halál, pénz), a szimbolista kifejezésmód, a háborús versek, és emelt szinten a kötetek, hatások és a fogadtatás.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Irodalom 1. témakör, Életművek). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'ady-eletut-nyugat-uj-versek',
      subject: 'magyar',
      unitId: 'ady',
      title: 'Ady életútja, a Nyugat és az Új versek fordulata',
      level: 'kozep',
      requirement: {
        kozep:
          'A főbb művek elhelyezése az életműben és az adott korszakban; az életmű néhány jellemzője keretében lírai alkotások bemutatása.',
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság, regionális és kulturális kötődések; a pályaszakaszokat jellemző főbb témák.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Ady Endre** (1877–1919) a magyar modern líra megteremtője: a 20. század eleji költészet megújítója.',
            '**Új versek** (1906): ez a kötet a nagy fordulat. A költő a szimbolista, modern hangot hozza be a magyar költészetbe, és ezzel vitát robbant ki.',
            'Ady a **Nyugat** első nagy költője: a folyóirat 1908-ban indult, és a modern magyar irodalom fóruma lett.',
            'Három fő színtér: **Érmindszent** és a vidék (származás), **Nagyvárad** (újságíróság), **Párizs** (a francia költészet élménye).',
            'Életműve a magyarság sorskérdéseitől a szerelmen, az Istenen és a halálon át a háború elleni tiltakozásig ível.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1877', text: 'Érmindszenten született (Szilágy vármegye).' },
            {
              date: '1900-as évek eleje',
              text: 'Újságíróként Nagyváradon dolgozik; itt ismeri meg Brüll Adélt (Léda).',
              emelt: true,
            },
            {
              date: '1904',
              text: 'Először utazik Párizsba, és a francia költészet hatása alá kerül.',
            },
            { date: '1906', text: 'Megjelenik az *Új versek*.' },
            { date: '1908', text: 'Megindul a *Nyugat*; Ady a folyóirat meghatározó költője.' },
            {
              date: '1915',
              text: 'Házasságot köt Boncza Bertával (Csinszka).',
              emelt: true,
            },
            { date: '1919', text: 'Budapesten meghalt.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Honnan indul?' },
        {
          kind: 'text',
          text: 'Ady **Érmindszenten** született, egy református, elszegényedett nemesi családban. A tanulmányait református iskolákban végezte (**Zilah**, **Debrecen**). A vidéki, kisnemesi környezet és a református hagyomány később is megjelenik a verseiben: a magyar sors kérdései, a bibliai nyelv és a prófétai szerep.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Újságíróként dolgozott Debrecenben, majd **Nagyváradon**. Itt ismerkedett meg Brüll Adéllal, aki a költészetében **Léda** néven él tovább. 1904-ben Párizsba utazott, és a nagyvárosi költészet, a francia **szimbolizmus** (például Baudelaire és Verlaine) hatása döntő lett a pályáján.',
        },
        { kind: 'heading', text: 'A fordulat: Új versek (1906)' },
        {
          kind: 'text',
          text: 'Az *Új versek* a magyar költészet egyik legnagyobb fordulata. Három dolgot hozott: **új témákat** (a magyar sors kritikája, a modern szerelem, az egyén magánya), **új hangot** (szimbolizmus, a nagybetűs fogalmak, a sejtelmes képek) és **új költői önképet** (a költő mint magányos, küldetéses ember). A kötet nagy vitát váltott ki, mert sokan sértőnek vagy érthetetlennek találták.',
        },
        {
          kind: 'text',
          text: 'A kötet két ismert ciklusa: **A magyar Ugaron** (a magyar társadalom és a költő helye) és **Léda asszony zsoltárai** (a szerelem). A nyitóverse a *Góg és Magóg fia vagyok én…*, amely ars poetica jellegű: a költő vállalja az „új dalt”, a régi hagyományokkal szemben.',
        },
        { kind: 'heading', text: 'A Nyugat' },
        {
          kind: 'text',
          text: 'A **Nyugat** 1908-ban indult. A folyóirat a modern, nyugat-európai irányzatok felé nyitott: a szimbolizmus, az impresszionizmus és a **modernség** fóruma lett. Ady itt jelentette meg a verseit, és a költői nemzedék központi alakja lett (Babits, Kosztolányi, Móricz és mások mellett).',
        },
        {
          kind: 'compare',
          title: 'Mi változik Ady fellépésével?',
          columns: ['Korábbi (19. századi) költészet', 'Ady költészete'],
          rows: [
            {
              label: 'Világlátás',
              cells: ['közösségi, nemzeti hangú, egyértelmű', 'egyéni, kételkedő, ellentmondásos'],
            },
            {
              label: 'Nyelv',
              cells: [
                'tiszta, érthető, hagyományos',
                'szimbólumok, többértelmű képek, nagybetűs szavak',
              ],
            },
            {
              label: 'Költőszerep',
              cells: ['a nemzet szószólója', 'magányos, küldetéses, ostorozó próféta'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az életmű **pályaszakaszai** nagyjából követhetők a kötetek mentén: a kezdet (az 1899-es *Versek*, a *Még egyszer*), a fordulat (*Új versek*, *Vér és arany*), az érett korszak (*Az Illés szekerén*, *Szeretném, ha szeretnének*, *A Minden-Titkok versei*, *A menekülő Élet*), majd a háborús évek (*A halottak élén*). Az egyes szakaszok témái a következő lapokon szerepelnek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbelin: **Ady Endre** a kötelező életmű-szerzők között van. Az életműből több alkotást kell bemutatnod, és meg kell mondanod, hová tartozik a vers az életműben.',
            'Az **irodalmi feladatlapon**: a korstílus felismerése (szimbolizmus), a memoriterek, a Nyugat és Ady kapcsolata, az Új versek jelentősége.',
            'Műértelmező szövegalkotásban Ady-vers is lehet bázisszöveg.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy Adyt egyszerűen „szimbolistának” nevezik, és mást nem mondanak. Mindig mutass rá arra, mit jelent ez a konkrét versben (melyik kép szimbólum, mit jelképez). Másik hiba az évszámok összekeverése: *Új versek* 1906, *Nyugat* 1908.',
        },
        {
          kind: 'tip',
          text: 'A „helye az életműben” szempontot így fogalmazd meg: „A vers az *Új versek* (1906) kötetben jelent meg, a fordulat időszakában, tehát a modern, szimbolista költészet első nagy példái közé tartozik.” Két mondat elég, de legyen benne a kötet neve és az évszám.',
        },
      ],
      topicMatch: ['ady endre', 'nyugat'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik kötet jelentette Ady költészetének nagy fordulatát?',
          options: ['Versek (1899)', 'Még egyszer', 'Új versek (1906)', 'A halottak élén'],
          answer: 2,
          explanation:
            'Az Új versek (1906) hozta be a magyar költészetbe a szimbolista, modern hangot; ezért tekintjük fordulópontnak.',
        },
        {
          question: 'Melyik folyóirat lett Ady és a modern magyar költészet fóruma?',
          options: ['Pesti Divatlap', 'Nyugat', 'Athenaeum', 'Kisfaludy Társaság Évlapjai'],
          answer: 1,
          explanation: 'A Nyugat 1908-ban indult, és a modern irányzatok fóruma lett.',
        },
        {
          question: 'Melyik város hatott Adyra a francia költészet élményével?',
          options: ['Bécs', 'Debrecen', 'Pozsony', 'Párizs'],
          answer: 3,
          explanation:
            'Párizsban ismerkedett meg a francia szimbolizmussal; ez döntően meghatározta az Új versek hangját.',
        },
        {
          question: 'Melyik vers az Új versek nyitóverse, ars poetica jellegű alkotás?',
          options: [
            'Góg és Magóg fia vagyok én…',
            'Kocsi-út az éjszakában',
            'Elbocsátó, szép üzenet',
            'Emlékezés egy nyár-éjszakára',
          ],
          answer: 0,
          explanation:
            'A Góg és Magóg fia vagyok én… az Új versek nyitóverse; a költő vállalja az új dalt a régi hagyományokkal szemben.',
        },
        {
          question: 'Kivel kötött házasságot Ady 1915-ben?',
          options: [
            'Brüll Adéllal (Léda)',
            'Boncza Bertával (Csinszka)',
            'Szendrey Júliával',
            'Gizella Karolinával',
          ],
          answer: 1,
          explanation:
            'Boncza Berta, a költő „Csinszkája” volt a felesége. Brüll Adél a Léda-versek ihletője volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Ady Endre', url: wiki('Ady Endre') },
        { label: 'Wikipédia: Új versek (Ady Endre)', url: wiki('Új versek Ady Endre') },
        { label: 'Wikipédia: Nyugat (folyóirat)', url: wiki('Nyugat folyóirat') },
      ],
    },
    {
      id: 'ady-magyarsag-ugar-gog-magog',
      subject: 'magyar',
      unitId: 'ady',
      title: 'A magyarság-versek: Góg és Magóg, az Ugar',
      level: 'kozep',
      requirement: {
        kozep:
          'A főbb művek szövegismereten alapuló értelmezése, kapcsolatok a művek között (témák, műfajok, kifejezésmód, motívumok); lírai alkotások értelmezése; memoriterek előadása.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a művek hatása, fogadtatása egy-két példa alapján.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Ady a **magyarság sorsáról** a nemzeti költészet hagyományát megújítva ír: szeretettel és kegyetlen kritikával egyszerre.',
            'Központi jelkép az **Ugar**: a parlag, a műveletlen, kihasználatlan föld, a magyar társadalom és kultúra állapota.',
            '*Góg és Magóg fia vagyok én…* (Új versek, 1906): ars poetica; a költő keleti származását vállalja, és az „új dalt” hozza.',
            '*A Hortobágy poétája*: a művészlélek elsorvad a közönyös, kulturálatlan környezetben.',
            'A kérdés: **szabad-e sírni**, azaz szabad-e kritikát mondani a hazáról? Ady szerint igen, mert a szeretet kritikus is lehet.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mit jelent a magyarság-téma Adynál?' },
        {
          kind: 'text',
          text: 'Ady magyarság-versei nem a megszokott hazafias dicsőítés hangján szólnak. A költő **a nemzetet és önmagát is vizsgálja**: szeretett, de elmaradott, a modern Európától elszakadt országot lát. A kritika éles, mert **a szeretet kritikus**. A versekben visszatérő jelképek: az **Ugar**, a keleti származás (**Góg és Magóg**), az elmaradottság és a kultúra hiánya.',
        },
        { kind: 'heading', text: 'Góg és Magóg fia vagyok én…' },
        {
          kind: 'text',
          text: 'A verset az *Új versek* nyitja. A **Góg és Magóg** a Bibliában a népek ellenségei; Ady a keleti, „barbár” származásra utal, amelyet büszkén vállal. A beszélő ismeri a nyugati kultúrát, de a régi kapuk előtt állva nem kap bebocsátást: hiába „döngeti a kaput”, mégis kérdez.',
        },
        {
          kind: 'text',
          text: 'A vers híres kérdése így hangzik: *„Szabad-e sírni a Kárpátok alatt?”* A „sírás” a kritika és a fájdalom kifejezése, a vers tehát a költő jogát védi arra, hogy bírálja a hazát. Ez a mű **ars poetica** is: a költő önmagát és az új költészetet határozza meg.',
        },
        { kind: 'heading', text: 'A magyar Ugar' },
        {
          kind: 'text',
          text: 'Az **ugar** műveletlen, parlagon hagyott földet jelent. Ady számára ez a magyar társadalom és kultúra jelképe: a tehetség elsorvad, az újítás értetlenségbe ütközik. A kötet egyik ciklusa a *A magyar Ugaron* címet viseli. Ide tartozik az *A Hortobágy poétája* is, amelyben a költő-sors a kietlen alföldi tájban jelenik meg.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Ars poetica',
              text: 'Költői önmeghatározás: a vers a költő szerepéről, a költészet céljáról szól (például *Góg és Magóg fia vagyok én…*).',
            },
            {
              term: 'Ugar',
              text: 'Műveletlen, parlag föld; Adynál a magyar társadalom és kultúra elmaradottságának jelképe.',
            },
            {
              term: 'Vátesz',
              text: 'A költő mint a közösség tanítója, látnoka; Adynál a költő magányos, küldetéses próféta.',
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A magyarság-téma **hagyományhoz kapcsolódik**: a nemzeti sors kérdése a magyar költészetben Kölcsey *Hymnus*ától, Vörösmarty *Szózat*ától kezdve folyamatosan jelen van. Adynál az új az **önostorozó, kritikus hang** és a szimbolista képalkotás. Összehasonlító feladatban érdemes megvizsgálni: ki a beszélő, milyen a viszonya a közösséghez, mi a hangnem (dicsőítő vagy kritikus), és miért válik a költő magányossá.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: *Góg és Magóg fia vagyok én…* vagy *A Hortobágy poétája* – téma, beszélő, jelképek.',
            'Összehasonlítás: Ady magyarság-verse és egy másik költő hazafias verse (például Berzsenyi, Kölcsey, Vörösmarty, Petőfi vagy József Attila).',
            'Memoriter: a *Góg és Magóg fia vagyok én…* szövege, ezt az irodalmi feladatlap is kérheti.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondd azt, hogy Ady „nem szerette a hazáját”. A magyarság-versek kritikája a **szeretetből** fakad, és a költő sorsközösséget vállal a nemzettel. A másik hiba, ha a Góg és Magóg-hivatkozást nem magyarázod meg.',
        },
        {
          kind: 'example',
          title: 'Mintavázlat: Góg és Magóg fia vagyok én…',
          problem: 'Röviden mutasd be a verset: téma, beszélő, kulcsjelképek, helye az életműben.',
          solution:
            '1. **Bevezetés**: Ady Endre ars poetica jellegű verse, az *Új versek* (1906) nyitóverse.\n2. **Téma**: a költő vállalja keleti származását és az új költészetet; a beszélő kívülállónak érzi magát, és kérdez.\n3. **Jelképek**: Góg és Magóg (keleti, „barbár” eredet), a döngetett kapu (elzárkózó világ), „sírás” (a kritika joga).\n4. **Kapcsolat**: az Ugar-versekkel és *A Hortobágy poétájá*val a magyar sors kritikus látása köti össze.\n5. **Zárás**: a vers a modern magyar költészet programja.',
        },
        {
          kind: 'tip',
          text: 'A *Góg és Magóg fia vagyok én…* és a *Kocsi-út az éjszakában* is megtalálható az alkalmazás **Memoriterek** részében. Tanuld meg szöveghűen!',
        },
      ],
      topicMatch: ['ady endre'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Mit jelképez az „Ugar” Ady költészetében?',
          options: [
            'Az új ipari fejlődést',
            'A vidéki élet nyugalmát',
            'A magyar társadalom és kultúra elmaradottságát',
            'A szerelem termékenységét',
          ],
          answer: 2,
          explanation:
            'Az ugar a műveletlen, parlag föld; Ady a magyar társadalom és kultúra állapotának jelképeként használja.',
        },
        {
          question: 'Melyik a *Góg és Magóg fia vagyok én…* alapkérdése?',
          options: [
            'Mi a költő feladata a háborúban?',
            'Szabad-e sírni a Kárpátok alatt?',
            'Van-e Isten?',
            'Miért fut a kocsi az éjszakában?',
          ],
          answer: 1,
          explanation:
            'A vers a kritika jogát védi: a „sírás” a hazáról szóló bírálat, a fájdalom kifejezése.',
        },
        {
          question: 'Milyen műfaji jellegű a *Góg és Magóg fia vagyok én…*?',
          options: ['Elégia', 'Óda', 'Ars poetica', 'Epigramma'],
          answer: 2,
          explanation:
            'A költő önmagát és az új költészetet határozza meg, tehát ars poetica jellegű.',
        },
        {
          question: 'Melyik ciklus tartalmazza *A Hortobágy poétája* című verset?',
          options: [
            'Léda asszony zsoltárai',
            'A magyar Ugaron',
            'Az Illés szekerén',
            'A halottak élén',
          ],
          answer: 1,
          explanation:
            'A Hortobágy poétája az Új versek *A magyar Ugaron* ciklusába tartozik, a magyar sors kritikus látásának versei közé.',
        },
        {
          question: 'Hogyan kapcsolódik Ady magyarság-költészete a korábbi hagyományhoz?',
          options: [
            'Szakít vele, a nemzeti sors kérdése teljesen eltűnik.',
            'Folytatja a nemzeti sors témáját, de kritikus, önostorozó hangon.',
            'Csak a népdalokat idézi.',
            'Kizárólag a dicsőítő hangot veszi át.',
          ],
          answer: 1,
          explanation:
            'A nemzeti sors kérdése Kölcseytől és Vörösmartytól kezdve jelen van; Adynál az új a kritikus, szimbolista megközelítés.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Góg és Magóg fia vagyok én', url: wiki('Góg és Magóg fia vagyok én') },
        { label: 'Wikipédia: A Hortobágy poétája', url: wiki('A Hortobágy poétája') },
        { label: 'Wikipédia: Ady Endre', url: wiki('Ady Endre') },
      ],
    },
    {
      id: 'ady-szerelem-isten-halal-penz',
      subject: 'magyar',
      unitId: 'ady',
      title: 'Léda, Csinszka, Isten, halál, pénz: a fő témák',
      level: 'kozep',
      requirement: {
        kozep:
          'Kapcsolatok a művek között (témák, műfajok, kifejezésmód, jellemző motívumok); lírai alkotások bemutatása, értelmezése (téma, jelentésrétegek, világlátás); a művekben felvetett etikai, lélektani, társadalmi kérdések.',
        emelt:
          'A pályaszakaszokat jellemző főbb témák, kérdésfeltevések; a művekben felvetett gondolati, filozófiai, esztétikai vonatkozások.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Szerelem**: a **Léda-versek** (*Léda asszony zsoltárai*) a vágy és a kín, a szerelem „harc” jellegű; a szakításvers az *Elbocsátó, szép üzenet*; a **Csinszka-versek** nyugodtabb, védelmezőbb hangúak.',
            '**Isten**: Ady Istene nem a hagyományos hit Istene, hanem távoli, titokzatos, a költő küzdelme és keresése.',
            '**Halál**: állandó jelenlét, az elmúlás sejtelme (*Párisban járt az ősz*); a halállal való szembenézés.',
            '**Pénz, arany**: a *Vér és arany* kötet címe is ezt a kettősséget mutatja: az élet (vér) és a pusztító hatalom (arany).',
            'Ezek a témák **összefüggnek**: a szerelem, a hit és a halál mind a magány és a teljesség keresésének változatai.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A szerelem' },
        {
          kind: 'text',
          text: 'Ady szerelemlírája a **Léda-versekkel** kezdődik (*Léda asszony zsoltárai*, *Új versek*). A szerelem itt nem boldog harmónia, hanem **vágy és fájdalom**, küzdelem két ember között. A kapcsolat Brüll Adéllal (Léda) tartott évekig, a szakítás verse az *Elbocsátó, szép üzenet* (1912), amely a költő kegyetlenül gőgös, mégis fájdalmas elbocsátó gesztusa.',
        },
        {
          kind: 'text',
          text: '*Párisban járt az ősz* (1907, *Vér és arany*): egy párizsi nyári pillanatba beleszövődik az ősz, azaz az elmúlás. A szerelem és a halál közel kerül egymáshoz: a szerelem is mulandó, és a kapcsolat végét előlegezi.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A második nagy szerelem **Boncza Berta** (Csinszka). A **Csinszka-versek** hangja csendesebb, védelmezőbb, megnyugvást keres (például *Őrizem a szemed*). A két szerelem összehasonlítása érettségin is előfordulhat: a Léda-versekben a harc és a kín, a Csinszka-versekben a gyengédség és a menedék a meghatározó.',
        },
        { kind: 'heading', text: 'Isten' },
        {
          kind: 'text',
          text: 'Ady **Isten-versei** (például *Az Úr érkezése*, *A Sion-hegy alatt*, *Hiszek hitetlenül Istenben*) a hit és a kétely feszültségéből születnek. Az Isten gyakran távoli, nehezen megközelíthető, a költő vitatkozik vele, keresi őt. A református örökség és a bibliai nyelv erősen jelen van, de a hit nem megnyugtató bizonyosság, hanem **kereső, vívódó**.',
        },
        { kind: 'heading', text: 'Halál és mulandóság' },
        {
          kind: 'text',
          text: 'A halál Ady költészetében a **létezés alapélménye**: nem a végső nyugalom, hanem a rettenetes közelség, az elmúlás sejtelme. Ide tartozik *Párisban járt az ősz* és a *Kocsi-út az éjszakában* is, amelyben a világ és az én széthullása jelenik meg.',
        },
        { kind: 'heading', text: 'Pénz, arany' },
        {
          kind: 'text',
          text: 'A *Vér és arany* (1907) kötetcím a **vér** (élet, érzelem, szenvedély) és az **arany** (pénz, hatalom, romlás) szembeállítását használja. Ady a modern világ pénzközpontú értékrendjét bírálja, ami az emberi kapcsolatokat és a művészt is fenyegeti. *Az ős Kaján* ebből a kötetből való: egy mitikus, mámort és pusztulást hozó alak jelképezi a költő ellentmondásos sorsát.',
        },
        {
          kind: 'compare',
          title: 'Téma és jellegzetes vers',
          columns: ['Téma', 'Vers (példa)'],
          rows: [
            { label: 'Magyarság', cells: ['sors, kritika', 'Góg és Magóg fia vagyok én…'] },
            {
              label: 'Szerelem',
              cells: ['vágy, kín, szakítás', 'Léda-versek, Elbocsátó, szép üzenet'],
            },
            { label: 'Elmúlás', cells: ['halál, mulandóság', 'Párisban járt az ősz'] },
            { label: 'Pénz, hatalom', cells: ['vér és arany', 'Az ős Kaján'] },
            { label: 'Széthullás', cells: ['töredezett világ', 'Kocsi-út az éjszakában'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Témakifejtő feladat vagy szóbeli tétel: „Ady költészetének főbb témái”. Három-négy témát válassz, és mindegyikhez nevezz meg egy konkrét verset.',
            'Összehasonlítás: Ady-vers és egy másik költő szerelmes verse, vagy Isten-verse (például József Attila, Babits).',
            'Az irodalmi feladatlap: vers és téma párosítása, kötet megnevezése, motívum felismerése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne soroljuk fel a témákat példák nélkül. Az értékelésben a **szövegismeret** számít: minden témához tartozzon vers, és mondd el, mi történik benne. Ha nem vagy biztos egy vers kötetében vagy évszámában, ne találgass; elég a vers címe és a téma.',
        },
        {
          kind: 'tip',
          text: 'Összefüggést keress a témák között: a szerelem, a hit és a halál mind a **magány** és a **teljesség hiányának** élményét mutatja. Ez ad egységet a kifejtésnek, és ez az, amit a „kapcsolatok a művek között” szempont kér.',
        },
      ],
      topicMatch: ['ady endre'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik vers a Léda-szerelem lezárása?',
          options: [
            'Párisban járt az ősz',
            'Az ős Kaján',
            'Elbocsátó, szép üzenet',
            'A Hortobágy poétája',
          ],
          answer: 2,
          explanation:
            'Az *Elbocsátó, szép üzenet* (1912) a szakítás verse, a költő gőgös és fájdalmas elbocsátása.',
        },
        {
          question: 'Mit fejez ki a *Vér és arany* kötetcím?',
          options: [
            'Az élet és a pusztító pénzhatalom szembenállását',
            'A hadsereg és a gazdagság dicsőségét',
            'A vallási áhítatot',
            'A tájak szépségét',
          ],
          answer: 0,
          explanation:
            'A vér az élet és az érzelem, az arany a pénz és hatalom; a cím ezek feszültségét jelzi.',
        },
        {
          question: 'Milyen Ady Isten-képe?',
          options: [
            'Megnyugtató, biztos hit',
            'Teljes istentagadás',
            'Kereső, vívódó, a hit és a kétely feszültsége',
            'Kizárólag a katolikus hagyomány',
          ],
          answer: 2,
          explanation:
            'Ady Istene távoli, titokzatos, a költő keresi és vitatkozik vele; a hit nem nyugodt bizonyosság.',
        },
        {
          question: 'Melyik vers fejezi ki a szerelem és az elmúlás összekapcsolódását?',
          options: [
            'Góg és Magóg fia vagyok én…',
            'Párisban járt az ősz',
            'Ember az embertelenségben',
            'Emlékezés egy nyár-éjszakára',
          ],
          answer: 1,
          explanation:
            'A *Párisban járt az ősz*: egy nyári párizsi pillanatba az elmúlás, az ősz sejtelme szövődik bele.',
        },
        {
          question: 'Milyen a Csinszka-versek hangja a Léda-versekhez képest?',
          options: [
            'Küzdelmesebb, fájdalmasabb',
            'Csendesebb, védelmezőbb, gyengédebb',
            'Gúnyosabb',
            'Ugyanolyan',
          ],
          answer: 1,
          explanation:
            'A Csinszka-versek nyugalmat és menedéket keresnek, szemben a Léda-versek harcos hangjával.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Léda asszony zsoltárai', url: wiki('Léda asszony zsoltárai') },
        { label: 'Wikipédia: Boncza Berta (Csinszka)', url: wiki('Boncza Berta') },
        { label: 'Wikipédia: Vér és arany', url: wiki('Vér és arany Ady Endre') },
      ],
    },
    {
      id: 'ady-szimbolizmus-kifejezesmod',
      subject: 'magyar',
      unitId: 'ady',
      title: 'Szimbolizmus és kifejezésmód: Kocsi-út az éjszakában',
      level: 'kozep',
      requirement: {
        kozep:
          'Korstílus, téma, műfaj, kompozíció, jellemző motívumok, jelentésrétegek, világlátás; alapvető versformák és poétikai fogalmak alkalmazása; műrészletek értelmezése; memoriterek.',
        emelt:
          'Azonos műfajú alkotások poétikai szempontú összevetése; a pályaképre ható irányzatok, világirodalmi párhuzamok.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szimbolizmus** a látható világ mögötti, nehezen megfogalmazható jelentést sejtetés által fejezi ki.',
            '**Szimbólum**: olyan kép, amely a konkrét jelentésén túl általános, elvont tartalmat is hordoz (például a Hold vagy az ős Kaján).',
            'Ady jellemzői: **nagybetűs szavak**, ismétlések és refrén, ellentétek, töredezett képek, zenei nyelv.',
            '*Kocsi-út az éjszakában* (1909): az éjszaka, a Hold és a kocsi képei a világ és az én széthullását fejezik ki.',
            'Ady a hagyományos formát és a modern képalkotást ötvözi.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a szimbolizmus?' },
        {
          kind: 'text',
          text: 'A **szimbolizmus** a 19. század végi francia költészetben (Baudelaire, Verlaine) alakult ki. A költő nem leírja, hanem **sejteti** a dolgokat: a kép nem egyetlen jelentésű, hanem többrétegű. A vers hangulatot, zenét és asszociációt közvetít. Ady Párizsban ismerte meg ezt a költészetet, és a magyar nyelvbe ültette át.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Szimbólum',
              text: 'Képi jelentésén túl elvont tartalmat hordozó kép (Hold, ugar, ős Kaján).',
            },
            {
              term: 'Refrén',
              text: 'Ismétlődő sor vagy sorcsoport, amely zenei hatást kelt és hangsúlyoz.',
            },
            {
              term: 'Szinesztézia',
              text: 'Különböző érzékleteket (látás, hallás) összekapcsoló kép.',
            },
            {
              term: 'Nagybetűs szó',
              text: 'Ady szívesen ír nagybetűvel elvont fogalmat (Egész, Isten, Halál), így azok jelképes nyomatékot kapnak.',
            },
          ],
        },
        { kind: 'heading', text: 'Kocsi-út az éjszakában' },
        {
          kind: 'text',
          text: 'A vers három négysoros szakaszból áll, és **a sorok ismétlődnek**: a szakasz első sora a negyedik sorként visszatér. A refrén zenei hatású, közben a vers monoton, ringató és nyugtalanító is.',
        },
        {
          kind: 'text',
          text: 'A kiindulás a **töredékesség** képe: *„Milyen csonka ma a Hold”*. Az éjszaka sivatagos, néma, a beszélő szomorú. A második szakasz általánosít: *„Minden Egész eltörött”*, vagyis a világ teljességének hiánya (a szerelem is csak darabokban él). A harmadik szakasz a mozgás képe: *„Fut velem egy rossz szekér”*. A kocsi az élet útját jelképezi, amelyen a költő akaratán kívül száguld.',
        },
        {
          kind: 'compare',
          title: 'A vers szerkezete',
          columns: ['Szakasz', 'Tartalom'],
          rows: [
            { label: '1.', cells: ['táj, hangulat', 'a csonka Hold, a néma éj, a szomorú én'] },
            { label: '2.', cells: ['általánosítás', 'a világ és a szerelem töredékessége'] },
            { label: '3.', cells: ['mozgás', 'a rossz szekér, a bizonytalan út'] },
          ],
        },
        {
          kind: 'text',
          text: 'A vers jelentése: a **világ és az én egységének elvesztése**. A kocsi-út az élet bizonytalan útja, az éj a magány, a csonka Hold a hiányos világ szimbóluma. A hangulat sejtelmes, rezignált.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A pályaképre ható irányzatok közül Ady a **francia szimbolizmus** hatását ötvözi a magyar nyelvi és bibliai hagyománnyal. A szimbolizmus mellett az **impresszionista** hangulatképek és a **szecessziós** kép- és formavilág is megfigyelhető. Világirodalmi párhuzam például Baudelaire és Verlaine költészete.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Korstílus felismerése (szimbolizmus) idézet vagy vers alapján, indoklással.',
            'Poétikai fogalmak: refrén, ismétlés, szimbólum, ellentét. Az irodalmi feladatlap ezeket felismerés szintjén kéri.',
            'Szövegalkotás: a *Kocsi-út az éjszakában* értelmezése, vagy más Ady-vers elemzése hasonló szempontok szerint.',
          ],
        },
        {
          kind: 'example',
          title: 'Szimbólum felismerése és értelmezése',
          problem: 'Mit jelképez a „csonka Hold” a *Kocsi-út az éjszakában* című versben?',
          solution:
            '1. A Hold általában a teljesség, a rend jelképe; itt azonban **csonka**.\n2. A csonka Hold a **hiányos, széttört világ** képe, a második szakasz „Minden Egész eltörött” sorához kapcsolódik.\n3. A beszélő hangulata (szomorú) ezt tükrözi: a külső táj és a belső lélekállapot egymást magyarázza.\n4. A vers tehát nem pusztán tájleírás: a szimbólum a világ és az én széthullását fejezi ki.',
        },
        {
          kind: 'warning',
          text: 'Ne csak felsorold a költői eszközöket; mindig mondd meg a **szerepüket**. „Refrén van a versben” kevés; jobb: „A visszatérő első sor a monoton, nyugtalanító hangulatot erősíti, és a világ töredékességét hangsúlyozza.”',
        },
        {
          kind: 'tip',
          text: 'A memoriter szövegét a **Memoriterek** részben találod. A szöveghű tudás mellett érdemes a három szakasz tartalmát is összefoglalni: táj, általánosítás, mozgás.',
        },
      ],
      topicMatch: ['ady endre'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik korstílus jellemzi Ady Új versek-korszakának költészetét?',
          options: ['Klasszicizmus', 'Romantika', 'Szimbolizmus', 'Barokk'],
          answer: 2,
          explanation:
            'Ady a francia szimbolizmus hatására alakította ki sejtelmes, többértelmű képekre épülő költészetét.',
        },
        {
          question: 'Mit jelent a *Kocsi-út az éjszakában* sorában: „Minden Egész eltörött”?',
          options: [
            'A költő eltörte a kocsit.',
            'A világ és a szerelem teljessége helyett csak töredékek maradtak.',
            'A holdfogyatkozás kezdődik.',
            'A hazafias lelkesedés elmúlt.',
          ],
          answer: 1,
          explanation:
            'Az Egész a teljesség jelképe; a mondat a világ és a szerelem széthullását fejezi ki.',
        },
        {
          question: 'Mi a refrén szerepe a *Kocsi-út az éjszakában* című versben?',
          options: [
            'Ellentétet teremt a szakaszok között.',
            'Zenei, ringató hatást kelt, és hangsúlyozza a töredékesség hangulatát.',
            'A vers időrendjét mutatja.',
            'Humoros hangot ad.',
          ],
          answer: 1,
          explanation:
            'Az ismétlődő sor zenei hatású és erősíti a monoton, nyugtalanító hangulatot.',
        },
        {
          question: 'Mit jelképez a „rossz szekér” a versben?',
          options: [
            'A hadsereget',
            'A vidéki életet',
            'A bizonytalan, fékezhetetlen életutat',
            'A szerelmes találkozót',
          ],
          answer: 2,
          explanation:
            'A szekér az élet útját jelképezi, amelyen a beszélő akaratán kívül, rossz járművön száguld.',
        },
        {
          question: 'Melyik költő hatott Adyra a francia szimbolisták közül?',
          options: ['Baudelaire', 'Goethe', 'Shakespeare', 'Dante'],
          answer: 0,
          explanation:
            'Baudelaire és Verlaine a szimbolizmus nagy alakjai; Ady párizsi élményei során ezekkel a költőkkel ismerkedett meg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kocsi-út az éjszakában', url: wiki('Kocsi-út az éjszakában') },
        { label: 'Wikipédia: Szimbolizmus', url: wiki('Szimbolizmus irodalom') },
        { label: 'Wikipédia: Ady Endre', url: wiki('Ady Endre') },
      ],
    },
    {
      id: 'ady-haborus-versek',
      subject: 'magyar',
      unitId: 'ady',
      title: 'Háborús versek: Ember az embertelenségben, Emlékezés egy nyár-éjszakára',
      level: 'kozep',
      requirement: {
        kozep:
          'A főbb művek szövegismereten alapuló értelmezése; kapcsolatok a művek között; a háború élménye mint motívum; a művekben felvetett etikai, történeti, lélektani vonatkozások.',
        emelt:
          'A pályaszakaszokat jellemző témák, kérdésfeltevések; a művek hatása, fogadtatása; gondolati, filozófiai vonatkozások.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az első világháború (1914–1918) alatt Ady a **háború ellen** szólal meg; költészetében a rettenet és az emberi felelősség áll a középpontban.',
            '*Ember az embertelenségben*: az ember embernek marad a világ őrületében. A vers az **emberség** vállalásáról szól.',
            '*Emlékezés egy nyár-éjszakára*: a háború kitörésének éjszakáját idézi, a világrend felbomlásának látomásaként (*A halottak élén*, 1918).',
            'A háborús versek hangja komor, látomásos, apokaliptikus; a költő kívülálló bírálója és áldozata is az eseményeknek.',
            'A háborús líra a **magyarság** és a **halál** témáját új kontextusban folytatja.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ady és az első világháború' },
        {
          kind: 'text',
          text: 'Az 1914-ben kitört háborút Ady nem lelkesen fogadta: a költészete **a háború elítélése**. A versek az emberi értékek pusztulását, a világ rendjének felbomlását, a halál hatalmát állítják a középpontba. A háborús versek zöme *A halottak élén* (1918) című kötetben jelent meg.',
        },
        { kind: 'heading', text: 'Ember az embertelenségben' },
        {
          kind: 'text',
          text: 'A vers a háború éveiben született, és a háború **embertelen világában** kérdezi, mit jelent embernek maradni. A cím is ellentétre épül (**ember – embertelenség**), ami a vers gondolati magja. A beszélő nem hősként, hanem emberként, felelősséggel és fájdalommal áll a világ előtt: az emberség vállalása a legfőbb érték.',
        },
        {
          kind: 'text',
          text: 'Az etikai kérdés: mit tehet az egyén, ha a világ elveszti emberségét? Ady válasza: **megőrizni az emberséget**, még ha ez magányos és reménytelen helyzet is.',
        },
        { kind: 'heading', text: 'Emlékezés egy nyár-éjszakára' },
        {
          kind: 'text',
          text: 'A vers a háború kitörésének éjszakájára emlékezik. A **nyár-éjszaka** békés időpontja ellentétben áll a rettenetes eseménnyel. A beszélő látomásszerűen idézi fel a világ megrendülését: a békés külső mögött megjelenik a pusztulás. A vers a háborút **a világrend felbomlásaként** értelmezi, nem egyszerű eseményként.',
        },
        {
          kind: 'compare',
          title: 'A két háborús vers összevetése',
          columns: ['Ember az embertelenségben', 'Emlékezés egy nyár-éjszakára'],
          rows: [
            {
              label: 'Fő téma',
              cells: ['az emberség megőrzése', 'a háború kitörésének megrendítő emléke'],
            },
            { label: 'Hangnem', cells: ['komor, elszánt', 'látomásos, rettenettel teli'] },
            { label: 'Kötet', cells: ['háborús évek lírája', 'A halottak élén (1918)'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A háborús versek a korábbi **témák folytatásai**: a magyarság-versek kritikája, a halál sejtelme és a magány a háborúban új, tragikus jelentést kap. Az **apokaliptikus**, bibliai hangvétel a prófétai költőszerephez kapcsolódik. Összehasonlító feladatban gyakori párosítás: Ady háborús verse és Babits *Fortissimo* vagy Radnóti háborús lírája, ahol a beszélő viszonya az emberséghez, a háború ábrázolása és a hangnem a szempont.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés vagy szóbeli tétel: Ady háborús versei – téma, hangulat, a költő viszonya a háborúhoz.',
            'Összehasonlítás: Ady és Babits (*Fortissimo*, *Húsvét előtt*), József Attila vagy Radnóti háborús verse.',
            'Etikai kérdés: az emberség megőrzése, az egyén felelőssége, a költő háborúellenessége.',
          ],
        },
        {
          kind: 'example',
          title: 'Érvelés a bevezetésben',
          problem: 'Hogyan kezdhetnéd a szóbeli feleletet Ady háborús költészetéről?',
          solution:
            '„Ady Endre az első világháború idején a háború ellen szólalt meg. Háborús versei – például az *Ember az embertelenségben* és az *Emlékezés egy nyár-éjszakára* – az emberség vállalását és a világrend felbomlását állítják a középpontba. Ezek a versek *A halottak élén* kötetben jelentek meg 1918-ban, és a korábbi témáit (a magyar sors, a halál) tragikus, látomásos hangon folytatják.”',
        },
        {
          kind: 'warning',
          text: 'A háborús versekben ne keverd össze a két verset: az *Ember az embertelenségben* az **emberség** gondolatáról szól, az *Emlékezés egy nyár-éjszakára* a **háború kitörésének** emlékéről. Ha a vers részleteiben nem vagy biztos, ne idézz hibásan; elég a tartalom pontos összefoglalása.',
        },
      ],
      topicMatch: ['ady endre'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Milyen volt Ady viszonya az első világháborúhoz?',
          options: [
            'Lelkesen támogatta.',
            'Elítélte a háborút, versei az embertelenségről szólnak.',
            'Nem írt róla.',
            'A háború dicsőségét énekelte meg.',
          ],
          answer: 1,
          explanation:
            'Ady a háborút elítélte; háborús versei az emberség pusztulását és a világrend felbomlását jelenítik meg.',
        },
        {
          question: 'Mi az *Ember az embertelenségben* gondolati magja?',
          options: [
            'A természet szépsége',
            'Az emberség megőrzése a háború embertelen világában',
            'A hazai táj dicsérete',
            'Egy szerelmi történet',
          ],
          answer: 1,
          explanation:
            'A cím ellentétre épül (ember–embertelenség), a vers az emberség vállalásáról szól.',
        },
        {
          question: 'Melyik kötetben jelent meg az *Emlékezés egy nyár-éjszakára*?',
          options: ['Új versek', 'Vér és arany', 'A halottak élén', 'Az Illés szekerén'],
          answer: 2,
          explanation: 'A háborús versek zöme *A halottak élén* (1918) kötetben jelent meg.',
        },
        {
          question: 'Milyen ellentét adja az *Emlékezés egy nyár-éjszakára* alapfeszültségét?',
          options: [
            'Nappal és éjszaka',
            'A békés nyár-éjszaka és a háború rettenete',
            'Város és vidék',
            'Szerelem és gyűlölet',
          ],
          answer: 1,
          explanation:
            'A békés nyári éjszaka ellentétben áll a háború kitörésének rettenetes eseményével.',
        },
        {
          question: 'Melyik költő háborús verse kapcsolódhat összehasonlításban Adyéhoz?',
          options: ['Janus Pannonius', 'Babits Mihály', 'Csokonai Vitéz Mihály', 'Balassi Bálint'],
          answer: 1,
          explanation:
            'Babits (például *Fortissimo*) a világháború idején szintén a háború ellen szólalt meg; az összehasonlítás szempontja az emberség és a háború ábrázolása.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A halottak élén', url: wiki('A halottak élén Ady Endre') },
        { label: 'Wikipédia: Ember az embertelenségben', url: wiki('Ember az embertelenségben') },
        { label: 'Wikipédia: Ady Endre', url: wiki('Ady Endre') },
      ],
    },
    {
      id: 'ady-kotetek-hatasok-fogadtatas',
      subject: 'magyar',
      unitId: 'ady',
      title: 'Kötetek, ciklusok, hatások és fogadtatás',
      level: 'emelt',
      requirement: {
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a pályaképre ható irányzatok és szellemi kötődések, világirodalmi párhuzamok; a művek hatása, fogadtatása egy-két példa alapján; a szerző utóélete, helye és hatása; különféle kritikák, interpretációk.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Főbb kötetek: *Versek* (1899), *Még egyszer* (1903), **Új versek** (1906), **Vér és arany** (1907), *Az Illés szekerén* (1908), *Szeretném, ha szeretnének* (1909), *A Minden-Titkok versei* (1910), *A menekülő Élet* (1912), **A halottak élén** (1918).',
            'Az *Új versek* két ciklusa: **A magyar Ugaron** és **Léda asszony zsoltárai**.',
            'Hatások: a **francia szimbolizmus** (Baudelaire, Verlaine, Rimbaud), a **bibliai** és református hagyomány, a magyar költői előzmények.',
            '**Fogadtatás**: az Új versek heves vitát váltott ki; a Nyugat köre védte és ünnepelte Adyt.',
            '**Utóélet**: Ady a 20. századi magyar költészet meghatározó alakja, hatása a következő nemzedékekre is kiterjed.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Kötetek és pályaszakaszok' },
        {
          kind: 'timeline',
          items: [
            { date: '1899', text: '*Versek*: a pálya kezdete, még hagyományos hangon.' },
            { date: '1903', text: '*Még egyszer*.' },
            {
              date: '1906',
              text: '*Új versek*: a fordulat; ciklusai *A magyar Ugaron*, *Léda asszony zsoltárai*.',
            },
            {
              date: '1907',
              text: '*Vér és arany*: a pénz, az élet és a pusztulás szembeállítása.',
            },
            { date: '1908', text: '*Az Illés szekerén*.' },
            { date: '1909', text: '*Szeretném, ha szeretnének*.' },
            { date: '1910', text: '*A Minden-Titkok versei*.' },
            {
              date: '1912',
              text: '*A menekülő Élet*: a Léda-kapcsolat lezárásának idején jelent meg.',
            },
            { date: '1918', text: '*A halottak élén*: a háborús versek kötete.' },
          ],
        },
        {
          kind: 'text',
          text: 'A **kötet-szerkesztés** Adynál tudatos: a verseket ciklusokba rendezte, így a versek egymás kontextusában értelmezhetők. Az *Új versek* ciklusai (Ugar és Léda) a társadalmi és a magánéleti oldalt állítják egymás mellé.',
        },
        { kind: 'heading', text: 'Hatások és kötődések' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Francia szimbolizmus',
              text: 'Baudelaire, Verlaine, Rimbaud: a sejtető kép, a zenei hatás, a nagyvárosi élmény.',
            },
            {
              term: 'Bibliai és református hagyomány',
              text: 'A zsoltárok, a prófétai hang, az Isten-kérdés; Ady költői nyelve ebből is táplálkozik.',
            },
            {
              term: 'Magyar előzmények',
              text: 'A nemzeti sors kérdése Kölcseytől, Vörösmartytól, a kuruc-hagyomány és a romantikus vátesz-szerep.',
            },
          ],
        },
        { kind: 'heading', text: 'Fogadtatás és utóélet' },
        {
          kind: 'text',
          text: 'Az *Új versek* megjelenése után heves **vita** bontakozott ki. A támadók az érthetetlenséget, a „nem magyaros” hangot és a hagyomány elhagyását kifogásolták; a Nyugat köre viszont a magyar költészet megújítóját látta Adyban. A hagyományos hazafias költészettel szemben Ady költészete **új mércét** teremtett, és meghatározta a 20. századi modern lírát.',
        },
        {
          kind: 'text',
          text: 'Az **utóélet**: Ady hatása a Nyugat nemzedékére (Babits, Kosztolányi, Tóth Árpád és mások), majd az utána következő költőkre is kiterjed; a magyar irodalmi hagyományban a modernség egyik alapító alakja. A halála után kultusza is kialakult, és az interpretációk sokfélék: a magyarságköltő, a szimbolista, a prófétai-látnok költő, vagy a magányos modern ember alakja.',
        },
        {
          kind: 'compare',
          title: 'Különböző olvasatok',
          columns: ['Olvasat', 'Mire figyel'],
          rows: [
            { label: 'Nemzeti', cells: ['magyarság, sors', 'Góg és Magóg, az Ugar'] },
            { label: 'Esztétikai', cells: ['szimbolizmus, forma', 'Kocsi-út az éjszakában'] },
            { label: 'Etikai', cells: ['emberség, felelősség', 'Ember az embertelenségben'] },
            {
              label: 'Filozófiai',
              cells: ['Isten, halál, magány', 'Isten-versek, Párisban járt az ősz'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szóbeli: pályaszakaszok, kötetek és ciklusok, hatások; kapcsolat a Nyugat nemzedékével.',
            'Különféle olvasatok és kritikák ismerete: hogyan értelmezhető ugyanaz a vers többféleképpen.',
            'Összefüggések: Ady és Babits, Kosztolányi, József Attila: hatás, párhuzam, eltérés.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne tanulj kötetcímeket és évszámokat értelem nélkül. Mindig kapcsold őket a **témához**: *Új versek* – fordulat, Ugar és Léda; *Vér és arany* – pénz, élet és pusztulás; *A halottak élén* – háború.',
        },
        {
          kind: 'tip',
          text: 'Emelt szintű kifejtés vázlata: **1.** pályakép három szakaszban (kezdet, fordulat, érett és háborús líra); **2.** kötetek és ciklusok példái; **3.** hatások (szimbolizmus, Biblia, magyar hagyomány); **4.** két-három vers értelmezése; **5.** fogadtatás és utóélet; **6.** saját állásfoglalás.',
        },
      ],
      topicMatch: ['ady endre'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik kötet jelent meg 1907-ben?',
          options: ['Új versek', 'Vér és arany', 'A halottak élén', 'Még egyszer'],
          answer: 1,
          explanation: 'A *Vér és arany* 1907-ben jelent meg; az *Új versek* 1906-ban.',
          emelt: true,
        },
        {
          question: 'Melyik két ciklus szerepel az *Új versek* című kötetben?',
          options: [
            'A magyar Ugaron és Léda asszony zsoltárai',
            'Istenes versek és háborús versek',
            'Csinszka-versek és háborús versek',
            'Vér és arany, Az Illés szekerén',
          ],
          answer: 0,
          explanation:
            'Az Új versek két ismert ciklusa A magyar Ugaron és a Léda asszony zsoltárai.',
          emelt: true,
        },
        {
          question: 'Melyik irányzat hatott a legerősebben Adyra Párizsban?',
          options: ['Klasszicizmus', 'Szimbolizmus', 'Realizmus', 'Szentimentalizmus'],
          answer: 1,
          explanation:
            'A francia szimbolizmus (Baudelaire, Verlaine, Rimbaud) határozta meg az Új versek hangját.',
          emelt: true,
        },
        {
          question: 'Hogyan fogadták az *Új versek*et?',
          options: [
            'Egyöntetű lelkesedéssel',
            'Heves vitával: a támadók érthetetlennek találták, a Nyugat köre ünnepelte',
            'Senki nem foglalkozott vele',
            'Betiltották',
          ],
          answer: 1,
          explanation:
            'A kötet vitát váltott ki: a hagyományőrzők bírálták, a Nyugat köre a költészet megújítását látta benne.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Ady Endre', url: wiki('Ady Endre') },
        { label: 'Wikipédia: Vér és arany', url: wiki('Vér és arany Ady Endre') },
        { label: 'Wikipédia: Nyugat (folyóirat)', url: wiki('Nyugat folyóirat') },
      ],
    },
  ],
};

export default unit;
