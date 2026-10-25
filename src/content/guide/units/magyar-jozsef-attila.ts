import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: József Attila életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'jozsef-attila',
  subject: 'magyar',
  order: 66,
  title: 'József Attila életműve',
  requirementRef:
    '2.1 Szerzők, művek, 1. témakör: Életművek a magyar irodalomból. Kötelező szerzők',
  intro:
    'A 20. század egyik legnagyobb magyar költője: árvaság és szegénység, a Tiszta szívvel dacos hangja, a külvárosi és társadalmi versek, az Óda, az Eszmélet és A Dunánál gondolati lírája, végül a kései versek önvizsgálata. Életút, főművek, motívumok és a műelemzés menete.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 1. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'jozsef-attila-eletut-palyakep',
      subject: 'magyar',
      unitId: 'jozsef-attila',
      title: 'József Attila életútja és pályaképe',
      level: 'both',
      requirement: {
        kozep:
          'A főbb művek elhelyezése az életműben és a korszakban; kapcsolatok a művek között (témák, műfajok, kifejezésmód, jellemző motívumok).',
        emelt:
          'Az életút és az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság; a pályaszakaszokat jellemző főbb témák, kérdésfeltevések; kötetek, ciklusok, motívumok.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**József Attila** (1905–1937) a 20. századi magyar líra egyik legnagyobb alakja; a **Nyugat** harmadik nemzedékéhez szokás sorolni.',
            'Szegény, **széteső családban** nőtt fel: az apja elhagyta a családot, az anyja 1919-ben meghalt. Az **árvaság, a hontalanság és az anyahiány** egész költészetén végigvonul.',
            'Pályája nagy szakaszai: **1.** kezdetek és szegedi évek (1920-as évek), **2.** a társadalmi és szociális líra (1930 körül, a *Külvárosi éj* kötet), **3.** a gondolati líra csúcsa (1933–1936), **4.** a kései versek (1935–1937).',
            'Kötetei: *A szépség koldusa* (1922), *Nem én kiáltok* (1925), *Döntsd a tőkét, ne siránkozz* (1931), *Külvárosi éj* (1932), *Medvetánc* (1934), *Nagyon fáj* (1936).',
            '**1937. december 3-án**, Balatonszárszón vonat alatt halt meg. Születésnapja, **április 11.** a költészet napja.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1905', text: 'Budapesten született (április 11.), szegény családban.' },
            { date: '1919', text: 'Meghal az édesanyja.' },
            { date: '1922', text: 'Megjelenik az első kötete, *A szépség koldusa*.' },
            { date: '1925', text: '*Tiszta szívvel*, *Nem én kiáltok*; Bécs, majd Párizs.' },
            { date: '1931', text: '*Döntsd a tőkét, ne siránkozz*.' },
            { date: '1932', text: '*Külvárosi éj*.' },
            { date: '1933', text: '*Óda*, *Eszmélet*.' },
            { date: '1934', text: '*Medvetánc*, *Mama*.' },
            { date: '1936', text: '*A Dunánál*, *Nagyon fáj*.' },
            { date: '1937. december 3.', text: 'Balatonszárszó, a költő halála.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Gyerekkor: árvaság és szegénység' },
        {
          kind: 'text',
          text: 'József Attila 1905-ben született Budapesten. Az apja szappanfőző munkás volt, aki elhagyta a családot; az anyja mosónőként nevelte a gyerekeket (két nővére volt, Etelka és Jolán). A kisfiút egy időre **nevelőszülőkhöz** adták vidékre, és gyerekkorában már dolgoznia kellett. Az anyja **1919-ben meghalt**. Ez a veszteség költészetének egyik legmélyebb forrása: az **anya alakja** a *Mama*, a *Kései sirató* és sok más vers központi képe.',
        },
        { kind: 'heading', text: 'Szeged, Bécs, Párizs' },
        {
          kind: 'text',
          text: 'Gimnáziumi tanulmányai után a szegedi egyetemre iratkozott be. Az 1925-ös *Tiszta szívvel* című vers miatt konfliktusba került az egyetem egyik tanárával, és el kellett hagynia Szegedet. Ezután Bécsben, majd Párizsban tanult és élt, nagy szegénységben. Hazatérése után Budapesten élt, folyóiratokban publikált, és a baloldali mozgalmak közelébe került.',
        },
        { kind: 'heading', text: 'A harmincas évek: társadalom, tudat, lélektan' },
        {
          kind: 'text',
          text: 'A *Döntsd a tőkét, ne siránkozz* (1931) és a *Külvárosi éj* (1932) kötetek a **proletársors** és a **szociális elkötelezettség** költészetét hozzák. A harmincas évek elején József Attila a marxizmus mellett a **pszichoanalízis** (Freud) felé is fordult, és idegbetegsége miatt gyógykezelésre járt. Ebből a kettős érdeklődésből nő ki az érett gondolati líra: az *Eszmélet*, az *Óda* és *A Dunánál*, amelyekben a személyes lét, a társadalom és a világ rendje együtt jelenik meg.',
        },
        { kind: 'heading', text: 'Az utolsó évek' },
        {
          kind: 'text',
          text: 'A *Medvetánc* (1934) és a *Nagyon fáj* (1936) kötetekben az **önvizsgálat**, a **bűntudat**, a magány és a szeretetvágy kerül előtérbe; erősödő lelki betegsége egyre nehezebbé tette az életét. A halála előtti hónapokban születtek a legszemélyesebb versei (például *Tudod, hogy nincs bocsánat*). 1937 decemberében Balatonszárszón vonat alatt halt meg; a halál körülményeit sokan öngyilkosságként értelmezik.',
        },
        {
          kind: 'compare',
          title: 'József Attila pályaszakaszai',
          columns: ['Időszak', 'Jellemző művek és témák'],
          rows: [
            {
              label: '1920-as évek',
              cells: ['kezdetek, szegedi évek', '*Tiszta szívvel*, árvaság, dac, az első kötetek'],
            },
            {
              label: '1930–1932',
              cells: ['szociális líra', '*Külvárosi éj*, *A város peremén*, *Munkások*'],
            },
            {
              label: '1933–1936',
              cells: ['gondolati líra', '*Óda*, *Eszmélet*, *A Dunánál*'],
            },
            {
              label: '1935–1937',
              cells: [
                'kései líra',
                '*Mama*, *Kései sirató*, *Íme, hát megleltem hazámat*, *Tudod, hogy nincs bocsánat*',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a **kötetek és ciklusok** ismerete is elvárás: az *Ars poetica* és a *Thomas Mann üdvözlése* 1937-es versek, a *Flóra*-ciklus (1936–1937) a késő szerelmi líra; a *Medvetánc* és a *Nagyon fáj* a kései pálya két fő kötete. A pályaszakaszokat nem merev határok választják el: a gyermekkori motívumok (anya, apa, otthon) minden korszakban visszatérnek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            '**Irodalmi feladatlap**: kötet, vers, évszám párosítása; motívum vagy fogalom felismerése; a vers helye az életműben.',
            '**Szóbeli tétel**: életmű-bemutatás (életút, pályaszakaszok, két-három kiemelt vers elemzése, kapcsolatok a művek között).',
            '**Műértelmező szövegalkotás** (500–800 szó, illetve emelten 600–800 szó): egy József Attila-vers értelmezése vagy összehasonlítása egy másik költő művével.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a szakaszokat: a *Külvárosi éj* a szociális, az *Eszmélet* és az *Óda* a gondolati, a *Kései sirató* és a *Tudod, hogy nincs bocsánat* a kései líra része. Az életrajzi adat soha nem helyettesítheti az értelmezést.',
        },
        {
          kind: 'tip',
          text: 'Szóbeli tételnél tarts egyensúlyt: **kb. 1/3 életút és pálya**, **2/3 a kiválasztott művek értelmezése**, a végén a művek közötti kapcsolat (például a *Tiszta szívvel* „nincsen apám, se anyám” hontalansága és a kései haza-versek).',
        },
      ],
      topicMatch: ['józsef attila'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik évben halt meg József Attila?',
          options: ['1919', '1925', '1937', '1944'],
          answer: 2,
          explanation:
            '1937. december 3-án halt meg Balatonszárszón. 1919-ben az édesanyja halt meg.',
        },
        {
          question: 'Melyik kötete jelent meg 1932-ben?',
          options: ['A szépség koldusa', 'Külvárosi éj', 'Medvetánc', 'Nagyon fáj'],
          answer: 1,
          explanation:
            'A *Külvárosi éj* 1932-es. A *Medvetánc* 1934-es, a *Nagyon fáj* 1936-os, *A szépség koldusa* 1922-es.',
        },
        {
          question: 'Mi áll József Attila költészetének gyerekkori alapélményei között?',
          options: [
            'A gazdag főúri nevelés.',
            'Az árvaság, a szegénység és az anyahiány.',
            'A tengeri utazások.',
            'A katonai pálya.',
          ],
          answer: 1,
          explanation:
            'Az apa elhagyta a családot, az anya korán meghalt: ez a hiányélmény minden korszakban visszatér.',
        },
        {
          question: 'Melyik két szellemi hatás keveredik a harmincas évek gondolati lírájában?',
          options: [
            'Klasszicizmus és szentimentalizmus.',
            'Marxizmus és pszichoanalízis.',
            'Pozitivizmus és naturalizmus.',
            'Humanizmus és barokk.',
          ],
          answer: 1,
          explanation:
            'József Attila a társadalom (Marx) és a tudattalan, a gyerekkor (Freud) kérdéseit együtt gondolta végig.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: József Attila', url: wiki('József Attila költő') },
        { label: 'Wikipédia: Költészet napja', url: wiki('Költészet napja') },
        { label: 'Wikipédia: Balatonszárszó', url: wiki('Balatonszárszó József Attila') },
      ],
    },
    {
      id: 'jozsef-attila-tiszta-szivvel-korai-versek',
      subject: 'magyar',
      unitId: 'jozsef-attila',
      title: 'A korai költészet és a Tiszta szívvel',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai művek értelmezése: téma, műfaj, kompozíció, motívumok, világlátás; a művek elhelyezése az életműben és a korszakban.',
        emelt:
          'A pályaszakaszokat jellemző témák és kérdésfeltevések; a művek hatása, fogadtatása egy-két példa alapján.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A korai versek (1920-as évek) **népdalos, dacos, avantgárd** hatásokat mutatnak; témájuk a szegénység, a magány, az elhagyatottság.',
            'A *Tiszta szívvel* (1925) a költő első **híressé vált, botrányt kiváltó** verse: kihívó hangú, hontalan és kitaszított lírai én szól benne.',
            'A nyitány a **tagadó felsorolás**: nincs apa, anya, isten, haza, bölcső, szemfedő, csók, szerető.',
            'A vers a **dac** és a **kiszolgáltatottság** szembesítése: az „erkölcsi tisztaság” és a világ elfogadott normái ütköznek.',
            'A *Tiszta szívvel* az életmű **kulcsmotívumait** (árvaság, hazátlanság, igazságkeresés) már megjeleníti.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'hontalanság',
              text: 'A költő a világban egyedül van: nincs családja, védelme, otthona (*Nincsen apám, se anyám*).',
            },
            {
              term: 'tagadó felsorolás',
              text: 'A vers nyitányának szerkezete: azt sorolja fel, ami nincs. A hiány maga a mondanivaló.',
            },
            {
              term: 'dac',
              text: 'A kiszolgáltatottság felvállalása és a világ elítélésére válaszoló kihívó hang.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A korai versek hangja' },
        {
          kind: 'text',
          text: 'József Attila első kötetei (*A szépség koldusa*, *Nem én kiáltok*) a **népdal**, a magyar **szimbolista és avantgárd** líra hatását mutatják. A versek fiatalos, mégis érett hangon szólnak a szegénységről és a vágyról. A „szépség koldusa” cím a **kiszolgáltatottságot** és az ideál iránti éhséget fejezi ki.',
        },
        { kind: 'heading', text: 'Tiszta szívvel (1925)' },
        {
          kind: 'text',
          text: 'A vers kezdete a legismertebb József Attila-idézetek közé tartozik: *„Nincsen apám, se anyám, / se istenem, se hazám, / se bölcsőm, se szemfedőm, / se csókom, se szeretőm.”* A **tagadó felsorolás** az élet legfontosabb támaszait vonja meg: a családot, a hitet, a hazát, a szeretetet. A lírai én nem panaszkodik, hanem **dacosan tudomásul veszi** a helyzetét.',
        },
        {
          kind: 'text',
          text: 'A vers folytatásában a beszélő az éhezésről és a világ elleni kihívásról szól: arról, hogy a **tiszta szív** nem fér össze a világ törvényeivel. A költemény egyszerre **vádirat** és **vallomás**. Ez a lázadó hang ütközött a korabeli közvélemény erkölcsi elvárásaival, és a költő számára tragikus következményei lettek (a szegedi egyetemi konfliktus).',
        },
        {
          kind: 'text',
          text: 'A vers rövid, **dalszerű** sorokból épül, ami népköltészeti hangot ad neki. A formai egyszerűség és a sötét tartalom feszültsége adja az erejét.',
        },
        {
          kind: 'compare',
          title: 'A Tiszta szívvel és a későbbi haza-versek',
          columns: ['Tiszta szívvel (1925)', 'Kései haza-versek (1937)'],
          rows: [
            {
              label: 'Haza',
              cells: [
                '„se hazám”: a haza hiánya',
                'a haza keresése, a „hazám” megtalálása (*Íme, hát megleltem hazámat*)',
              ],
            },
            {
              label: 'Hang',
              cells: ['dacos, kihívó', 'önvizsgáló, csendesebb'],
            },
            {
              label: 'Motívum',
              cells: ['árvaság, hontalanság', 'a bűn és az elszámolás kérdése'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten érdemes a **pályaív** szempontjából is nézni a verset: a korai dac a későbbi, filozofikusabb és önvizsgálóbb lírának a kiinduló pontja. A fogadtatás is tanulságos: a *Tiszta szívvel* a költő körüli botrány miatt vált híressé, az irodalomtörténet viszont az életmű korai, ígéretes dokumentumának tartja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: a *Tiszta szívvel* szerkezete, motívumai, hangneme.',
            'Összehasonlítás: például egy másik költő hontalanság- vagy árvaság-verse, vagy József Attila két korszakának verse.',
            'Irodalmi feladatlap: a nyitány felismerése, a motívumok azonosítása.',
          ],
        },
        {
          kind: 'example',
          title: 'Elemzési vázlat: Tiszta szívvel',
          problem:
            'Milyen világképet fejez ki a *Tiszta szívvel* című vers? Vázold az elemzés menetét.',
          solution:
            '**Bevezetés**: 1925-ös vers, a korai József Attila dacos hangján; a cím a „tiszta szív” erkölcsi állítása.\n**Szerkezet**: a tagadó felsorolás (apa, anya, isten, haza, bölcső, szemfedő, csók, szerető), majd az éhezés és a világ elleni dac.\n**Motívumok**: árvaság, hontalanság, éhezés, tisztaság.\n**Hangnem**: dacos, kihívó, vádoló, mégis fájdalmasan őszinte.\n**Forma**: rövid, dalszerű sorok, népköltészeti hatás.\n**Zárás**: a vers az életmű kulcsmotívumait (hiány, kitaszítottság) már megmutatja; később ezek mélyülnek el.',
        },
        {
          kind: 'warning',
          text: 'Ne élettörténetként olvasd a verset: a lírai én ugyan a költő élményeire épül, de a vers **általános emberi** helyzetet is kifejez. A szövegből érvelj, ne csak az életrajzból.',
        },
      ],
      topicMatch: ['józsef attila'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik vers nyitánya: „Nincsen apám, se anyám, / se istenem, se hazám”?',
          options: ['Mama', 'Eszmélet', 'Tiszta szívvel', 'Óda'],
          answer: 2,
          explanation:
            'Ez a *Tiszta szívvel* kezdete: a tagadó felsorolás a hontalanságot fejezi ki.',
        },
        {
          question: 'Mi a *Tiszta szívvel* nyitányának fő szerkezeti sajátossága?',
          options: [
            'Párbeszéd két szereplő között.',
            'Tagadó felsorolás.',
            'Hosszú tájleírás.',
            'Mitológiai utalások sora.',
          ],
          answer: 1,
          explanation: 'A vers azt sorolja fel, ami nincs: apa, anya, isten, haza és így tovább.',
        },
        {
          question: 'Melyik motívum jellemzi a korai verseket?',
          options: [
            'Gazdagság és nagyúri élet.',
            'Árvaság, hontalanság, dac.',
            'Mesebeli kalandok.',
            'Hősi csaták.',
          ],
          answer: 1,
          explanation: 'A korai versek kiindulópontja az elhagyatottság és az ebből fakadó dac.',
        },
        {
          question: 'Mi a *Tiszta szívvel* helye az életműben?',
          options: [
            'A kései pálya lezárása.',
            'Az életmű kulcsmotívumait korán megjelenítő vers.',
            'Egy egyszeri, a többi mű szempontjából jelentéktelen kísérlet.',
            'A szociális líra programja.',
          ],
          answer: 1,
          explanation:
            'Az árvaság, a hiány és az igazságkeresés motívumai a későbbi pálya minden szakaszában visszatérnek.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Tiszta szívvel', url: wiki('Tiszta szívvel József Attila') },
        { label: 'Wikipédia: Nem én kiáltok', url: wiki('Nem én kiáltok József Attila') },
        { label: 'Wikipédia: A szépség koldusa', url: wiki('A szépség koldusa József Attila') },
      ],
    },
    {
      id: 'jozsef-attila-varosperem-tarsadalmi-versek',
      subject: 'magyar',
      unitId: 'jozsef-attila',
      title: 'Városperem és társadalmi líra',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai művek értelmezése témák, motívumok, kompozíció és világlátás alapján; a művek etikai, történeti, társadalmi vonatkozásai; kapcsolatok a művek között.',
        emelt:
          'A pályaképre ható irányzatok és szellemi kötődések; a művekben felvetett kérdések gondolati, filozófiai, esztétikai vonatkozásai.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A harmincas évek elején József Attila költészete **társadalmi** irányt vesz: a **munkásosztály**, a **külváros** és a szegénység kerül a középpontba.',
            'Kötetei: *Döntsd a tőkét, ne siránkozz* (1931) és *Külvárosi éj* (1932).',
            'Fő versei: *Külvárosi éj*, *A város peremén*, *Munkások*.',
            'A **városperem** a modern ember és a proletár **elidegenedésének** színtere: gyárak, kémények, éjszakai csend.',
            'Ezek a versek a **szociális elkötelezettséget** és a **személyes sorsot** kapcsolják össze: a költő vállal sorsközösséget a kisemmizettekkel.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'városperem',
              text: 'A város külső, ipari és szegény kerülete: a proletárlét tere, ahol a gyár és a lakónegyed összeér.',
            },
            {
              term: 'proletár',
              text: 'A tulajdon nélküli, bérből élő munkás; József Attila verseiben a kiszolgáltatottság és az emberi méltóság szimbóluma.',
            },
            {
              term: 'szociális líra',
              text: 'A társadalmi igazságtalanságot, a szegénységet és a munka világát megjelenítő költészet.',
            },
            {
              term: 'elidegenedés',
              text: 'Az ember elszakad a munkájától, a közösségtől és önmagától.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A társadalmi költészet kialakulása' },
        {
          kind: 'text',
          text: 'A gazdasági világválság (1929 után) magyarországi következményei, a tömeges munkanélküliség és a nyomor József Attilát is a **baloldali eszmék** felé fordították. Ebben az időszakban verseiben a szegénység már nem csak személyes élmény, hanem **osztálysors**. A *Döntsd a tőkét, ne siránkozz* kötetét a hatóságok elkobozták; a harmincas évek elején a költő a baloldali mozgalmak közelében mozgott, de a pártfegyelemmel később összeütközésbe került.',
        },
        { kind: 'heading', text: 'Külvárosi éj (1932)' },
        {
          kind: 'text',
          text: 'A vers a **külváros éjszakai képét** rajzolja meg: a gyárak, a pihenő munkások, a lélegző város. A tájszerű leírás mögött **társadalomkép** áll: a munka világa és az éjszaka csöndje, a fáradt emberek és az őket elnyelő gépezet. A költő nem kívülről nézi a külvárost, hanem **belülről**, a sorsközösség hangján szól.',
        },
        { kind: 'heading', text: 'A város peremén' },
        {
          kind: 'text',
          text: 'A vers a **városperem tájának** képeiből építkezik, és a modern élet **elidegenítő** világát mutatja meg. A költő mint megfigyelő és mint résztvevő van jelen. A versben a külső tér a belső lelkiállapot kifejezője is.',
        },
        { kind: 'heading', text: 'Munkások' },
        {
          kind: 'text',
          text: 'A *Munkások* a **munka világának** és a munkásosztály méltóságának ábrázolása. A vers a szociális líra programos darabja: a munkás nem pusztán szenvedő alany, hanem a jövő alakítója is lehet.',
        },
        {
          kind: 'compare',
          title: 'A társadalmi versek közös vonásai',
          columns: ['Tartalom', 'Forma és hang'],
          rows: [
            {
              label: 'Tér',
              cells: ['városperem, gyár, külváros', 'konkrét, tárgyszerű képek'],
            },
            {
              label: 'Szereplő',
              cells: ['a proletár, a munkás', 'sorsközösséget vállaló én'],
            },
            {
              label: 'Üzenet',
              cells: [
                'szociális igazságtalanság és remény',
                'komoly, személyes hangú, időnként vádló',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten fontos a **marxista** világlátás és a személyes lélektani élmény kapcsolata. A költő a társadalmi kérdést nem egyszerű pártköltészetként, hanem **egzisztenciális** problémaként is kezeli. Az irodalomtörténet gyakran hangsúlyozza, hogy József Attila nem csupán „proletárköltő”: a társadalmi versek mellett a gondolati és lélektani líra is egyenrangú része az életműnek. A kor szellemi áramlatai közül az avantgárd (Kassák Lajos köre) és a baloldali mozgalmak hatása érdemel említést.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: *Külvárosi éj*, *A város peremén* vagy *Munkások* képeinek és világlátásának bemutatása.',
            'Témakifejtés: a **város** vagy a **munka** ábrázolása a 20. századi magyar költészetben.',
            'Összehasonlítás: József Attila városképe és más költők (például Ady, Babits) nagyvárosi versei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne csak „politikai versekként” olvasd ezeket! A vizsgán a **képek**, a **hangnem** és a lírai én szerepe számít, nem a politikai állásfoglalás önmagában.',
        },
        {
          kind: 'tip',
          text: 'Szóbelin a társadalmi versekből és a gondolati versekből is válassz egyet-egyet, és mutass rá a **közös motívumokra** (rend, munka, közösség, sorsvállalás).',
        },
      ],
      topicMatch: ['józsef attila'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik kötetében szerepel a *Külvárosi éj*?',
          options: ['Medvetánc', 'Külvárosi éj (1932)', 'Nagyon fáj', 'Nem én kiáltok'],
          answer: 1,
          explanation:
            'A *Külvárosi éj* 1932-es kötet, címadó verse is a külváros éjszakai világát idézi.',
        },
        {
          question: 'Mit jelent a „városperem” József Attila verseiben?',
          options: [
            'A főúri negyedet.',
            'A proletárok, a gyárak és a szegénység terét.',
            'A természetes tájat.',
            'A városháza környékét.',
          ],
          answer: 1,
          explanation:
            'A városperem a munkások világa, az elidegenedés és a társadalmi kiszolgáltatottság színtere.',
        },
        {
          question: 'Melyik vers a szociális líra programos darabja?',
          options: ['Munkások', 'Mama', 'Eszmélet', 'Tiszta szívvel'],
          answer: 0,
          explanation: 'A *Munkások* a munkásosztály méltóságát és szerepét fogalmazza meg.',
        },
        {
          question: 'Miért nem elég József Attilát „proletárköltőnek” nevezni?',
          options: [
            'Mert sosem írt a munkásokról.',
            'Mert a társadalmi versek mellett gondolati és lélektani líra is jellemzi.',
            'Mert csak szerelmes verseket írt.',
            'Mert kizárólag tájverseket írt.',
          ],
          answer: 1,
          explanation:
            'Az életmű gondolati csúcsai (*Eszmélet*, *A Dunánál*) és a kései lélektani versek túlmutatnak a szociális lírán.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Külvárosi éj', url: wiki('Külvárosi éj József Attila') },
        { label: 'Wikipédia: A város peremén', url: wiki('A város peremén József Attila') },
        { label: 'Wikipédia: Munkások (vers)', url: wiki('Munkások József Attila') },
      ],
    },
    {
      id: 'jozsef-attila-gondolati-lira',
      subject: 'magyar',
      unitId: 'jozsef-attila',
      title: 'Gondolati líra: Óda, Eszmélet, A Dunánál',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai művek értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); műrészletek értelmezése; memoriterek szöveghű és kifejező előadása.',
        emelt:
          'A művekben felvetett kérdések gondolati, filozófiai, esztétikai vonatkozásai; világirodalmi párhuzamok; különféle kritikák, interpretációk.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **Óda** (1933), az **Eszmélet** (1933) és *A Dunánál* (1936) a **gondolati líra** csúcsai: a személyes élmény egyetemes kérdésekké tágul.',
            'Az *Óda* a **szerelem** himnusza, amelyben a kedves a világ rendjének része; a vers a természeti, kozmikus és az emberi viszonyokat egyetlen egységbe fogja.',
            'Az *Eszmélet* az **eszmélés**, a tudatra ébredés verse: a lét rendjét, a tér és idő, ember és világ viszonyát vizsgálja.',
            '*A Dunánál* a folyó partján a **múlt, jelen és jövő** szembesítése; a költő a közös sors és a közös felelősség kérdését veti fel.',
            'A három vers **kulcsszava** a **rend**: az egyéni lét és a társadalom rendje.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'gondolati líra',
              text: 'Olyan költészet, amelyben az érzelem mellett a gondolatmenet, az érvelés és a világról való elmélkedés a fő szerkesztő erő.',
            },
            {
              term: 'óda',
              text: 'Emelkedett hangú, magasztaló költemény; József Attila Ódája a szerelmet a világ rendjével együtt magasztalja.',
            },
            {
              term: 'eszmélet',
              text: 'A tudatra ébredés, a világ és önmagunk megértésének pillanata; a vers címe is erre utal.',
            },
            {
              term: 'rend',
              text: 'A gondolati versek kulcsszava: a világ, a társadalom és a lélek egyensúlya, amelyet meg kell teremteni.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Óda (1933)' },
        {
          kind: 'text',
          text: 'Az *Óda* a **szerelmi költészet** és a világszemlélet találkozása. A műfaj neve a magasztos hangot jelzi, de a vers hangja emberi és közvetlen. A szerelem itt nem elzárt magánügy: a szeretett nő a **természet és az emberi világ** összefüggéseinek része, a két ember kapcsolata a világ rendjében ölt értelmet. A vers hatalmas képei a **természeti és kozmikus** erőket egy személyes vallomásba fogják össze.',
        },
        { kind: 'heading', text: 'Eszmélet (1933)' },
        {
          kind: 'text',
          text: 'Az *Eszmélet* **tudatra ébredés**-vers: a költő a világ rendjét, a lét törvényeit és az ember helyét kutatja. A vers **ellentétekből és párhuzamokból** épül fel: a végtelen és a véges, a természet és az ember, a külső világ és a belső tudat. Az *Eszmélet* a világot **anyagi, összefüggő rendszerként** látja, amelyben az ember a dolgozó és gondolkodó lény. A vers hangja mértéktartó, a gondolatmenet szigorú.',
        },
        {
          kind: 'text',
          text: 'Az *Eszmélet* **szerkesztése** tudatos: a szakaszok egy-egy gondolati egységet építenek, az egyes részek egymásra felelnek. A költő a gondolatot nem absztraktan közli, hanem **konkrét képekben** mutatja meg. A mű a magyar filozófiai költészet egyik csúcsa.',
        },
        { kind: 'heading', text: 'A Dunánál (1936)' },
        {
          kind: 'text',
          text: 'A vers nyitánya: *„A rakodópart alsó kövén ültem, / néztem, hogy folyik, habzik tova a Duna.”* A **folyó** a **múlt és jelen** egybefolyásának jelképe. A költő a Duna partján ülve a személyes emlékeken át jut el a **nép és a nemzet sorsáig**. A vers három nagy gondolati egységre tagolódik: a folyó és a lírai én szemlélődése, a múlt és az ősök, a közös történelem; végül a **jövő**, a közös tennivaló kérdése.',
        },
        {
          kind: 'text',
          text: 'A záró gondolat a **közös ügyek rendezése**: a költő a békét és a megértést azzal köti össze, hogy a Duna menti népeknek közösen kell megoldaniuk a gondjaikat. A vers így a személyes lírát **közösségi felelősséggel** köti össze.',
        },
        {
          kind: 'compare',
          title: 'A három gondolati vers összevetése',
          columns: ['Óda és Eszmélet (1933)', 'A Dunánál (1936)'],
          rows: [
            {
              label: 'Középpont',
              cells: ['szerelem és világrend; tudatra ébredés', 'a folyó, a múlt és a jövő'],
            },
            {
              label: 'Gondolat',
              cells: ['az egyén helye a rendben', 'a nép, a nemzet és a Duna-népek közös sorsa'],
            },
            {
              label: 'Hang',
              cells: [
                'ódai magasztalás, illetve szigorú gondolatmenet',
                'szemlélődő, majd felelősségvállaló',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten az *Eszmélet*ben érdemes a **filozófiai alapokat** (anyag és tudat viszonya, a marxista és a pszichoanalitikus látásmód) és a **világirodalmi párhuzamokat** (a gondolati költészet hagyománya) megemlíteni. *A Dunánál* értelmezésénél a **kritikai olvasatok** különbözhetnek: lehet nemzeti, történelmi és személyes (a költő apa- és anyaélménye) olvasatot is adni, de a vers gondolati magja az egyéni és közösségi felelősség összekapcsolása.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            '**Memoriter**: József Attila-versek szöveghű és kifejező előadása a szóbelin; az irodalmi feladatlapon szövegkiegészítés, felismerés.',
            '**Műértelmezés**: az *Óda*, az *Eszmélet* vagy *A Dunánál* témájának, szerkezetének és világlátásának bemutatása.',
            '**Összehasonlítás**: a gondolati vers más költők hasonló műveivel (például Babits vagy Vörösmarty gondolati versei).',
          ],
        },
        {
          kind: 'example',
          title: 'Elemzési vázlat: A Dunánál',
          problem: 'Hogyan épül fel *A Dunánál* című vers, és mi a központi gondolata?',
          solution:
            '**Bevezetés**: 1936-os, a kései gondolati líra egyik legfontosabb darabja; a költő a Duna partján szemlélődik.\n**Szerkezet**: három nagy rész: a folyó szemlélése és a személyes én; a múlt, az ősök, a történelem; a jövő és a közös tennivaló.\n**Motívumok**: a folyó mint idő és történelem, a part, az emlékezés, az anya- és apa-alak.\n**Hangnem**: szemlélődő, elégikus, majd felelősségvállaló.\n**Központi gondolat**: a múlt terhével szembenézve a közös gondokat közösen kell rendezni.\n**Zárás**: a vers a személyes líra és a közösségi felelősség ritka egységét teremti meg.',
        },
        {
          kind: 'tip',
          text: 'A versek memorizálásához a „gondolatmenet” szerint tanulj: nem szavanként, hanem szakaszonként, a gondolat folyamát követve. Így a vizsgán a hangsúlyok is természetesebbek lesznek.',
        },
        {
          kind: 'warning',
          text: 'Az *Óda* nem „sima” szerelmes vers, az *Eszmélet* nem puszta filozofálás. Mindkettőnél azt kell megmutatnod, hogyan **válik a személyes élmény egyetemes gondolattá**.',
        },
      ],
      topicMatch: ['józsef attila'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik vers kezdődik így: „A rakodópart alsó kövén ültem”?',
          options: ['Óda', 'Eszmélet', 'A Dunánál', 'Mama'],
          answer: 2,
          explanation:
            'Ez *A Dunánál* nyitánya: a folyó partján ülő költő szemlélődése indítja a verset.',
        },
        {
          question: 'Mi az *Eszmélet* című vers fő témája?',
          options: [
            'Egy nyári tájkép leírása.',
            'A tudatra ébredés, a lét rendjének megértése.',
            'Gyerekkori emlékek mesélése.',
            'Egy történelmi csata.',
          ],
          answer: 1,
          explanation:
            'Az *Eszmélet* az ember és a világ viszonyát, a lét rendjét vizsgáló gondolati vers.',
        },
        {
          question: 'Melyik fogalom a gondolati versek kulcsszava?',
          options: ['kaland', 'rend', 'mese', 'tréfa'],
          answer: 1,
          explanation:
            'Az *Óda*, az *Eszmélet* és *A Dunánál* a világ, a lélek és a társadalom rendjét keresi.',
        },
        {
          question: 'Mit jelképez a Duna *A Dunánál* című versben?',
          options: [
            'Csupán a vízi közlekedést.',
            'A múlt és a jelen egybefolyását, a történelmi idő folyamát.',
            'Egy szerelmes találkozást.',
            'A költő gyermekkori játszóterét.',
          ],
          answer: 1,
          explanation:
            'A folyó az idő és a történelem képe: a költő a személyes emlékektől a közös sorsig jut.',
        },
        {
          question: 'Melyik szempont fontos emelt szinten az *Eszmélet* értelmezésénél?',
          options: [
            'Csak a vers hossza.',
            'A filozófiai alapok és a gondolati költészet hagyománya.',
            'A kötet nyomdai kiadása.',
            'A költő lakhelye.',
          ],
          answer: 1,
          explanation:
            'Emelt szinten elvárás a gondolati, filozófiai vonatkozások és a világirodalmi párhuzamok ismerete.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A Dunánál', url: wiki('A Dunánál József Attila') },
        { label: 'Wikipédia: Eszmélet', url: wiki('Eszmélet József Attila') },
        { label: 'Wikipédia: Óda (József Attila)', url: wiki('Óda József Attila') },
      ],
    },
    {
      id: 'jozsef-attila-kesei-versek',
      subject: 'magyar',
      unitId: 'jozsef-attila',
      title: 'A kései költészet: Mama, Kései sirató, Tudod, hogy nincs bocsánat',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai művek értelmezése; kapcsolatok a művek között (témák, műfajok, kifejezésmód, motívumok); a művekben felvetett lélektani, etikai vonatkozások.',
        emelt:
          'A pályaszakaszokat jellemző témák, kérdésfeltevések; kötetek, ciklusok, motívumok; a művekben felvetett lélektani, filozófiai kérdések.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A kései versek (1934–1937) **személyes, önvizsgáló** hangon szólnak: az anya, a gyerekkor és a bűntudat a központi téma.',
            'A *Mama* (1934) egy **gyermekkori emlék** (az anya a mosott ruhával) és az egész életet átfogó hiány megidézése.',
            'A *Kései sirató* az anya halála utáni gyász és a számadás verse.',
            'A *Tudod, hogy nincs bocsánat* (1937) a **bűntudat** és a megbocsátás lehetetlenségének verse; magához az emberhez vagy önmagához szól.',
            'Az *Íme, hát megleltem hazámat* (1937) a **haza** és az otthon utolsó, összegző gondolata.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'sirató',
              text: 'A halott fölötti gyász népköltészeti, majd irodalmi műfaja; a *Kései sirató* ezt a hagyományt idézi.',
            },
            {
              term: 'önmegszólítás',
              text: 'A költő önmagához szól (második személy), így tárgyilagosan szembenéz saját helyzetével.',
            },
            {
              term: 'bűntudat',
              text: 'A kései líra központi lélektani motívuma: a számonkérés és az önvád.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mama (1934)' },
        {
          kind: 'text',
          text: 'A vers kezdete: *„Már egy hete csak a mamára gondolok”*. A költő a gyermekkori emléket idézi meg: az anya, aki a mosott ruhát viszi a padlásra. A konkrét, hétköznapi **kép** mögött az anya **szeretetének** és a hiányának egyetemes élménye áll. A versben a **felnőtt költő** és a **gyermek** hangja találkozik. A hétköznapi mozdulat válik a szeretet jelképévé.',
        },
        { kind: 'heading', text: 'Kései sirató' },
        {
          kind: 'text',
          text: 'A *Kései sirató* a költő édesanyja halála évekkel utáni gyászának verse. A műfaj a **népi siratót** idézi, de a hangja modern: önmaga és az anya viszonyát vizsgálja, az **elmulasztott** szeretet és a hiány fájdalmával. A „kései” jelző arra utal, hogy a gyász nem zárult le a halállal, évekkel később is él.',
        },
        { kind: 'heading', text: 'Íme, hát megleltem hazámat' },
        {
          kind: 'text',
          text: 'A vers 1937-es, a költő utolsó hónapjainak lírájához tartozik. A *Tiszta szívvel* „se hazám” nyitányával összevetve a **haza** kérdése itt új értelmet kap: nem pusztán politikai vagy földrajzi fogalom, hanem **hovatartozás**, az emberi kötődés kérdése. A cím a megérkezés és a számadás hangulatát idézi.',
        },
        { kind: 'heading', text: 'Tudod, hogy nincs bocsánat' },
        {
          kind: 'text',
          text: 'A vers kezdete: *„Tudod, hogy nincs bocsánat, / hiába hát a bánat.”* A **második személyű** megszólítás önmagához szóló számvetés. A vers az **ítéletet** és a **bűntudatot** állítja középpontba: nincs külső felmentés, a költő saját lelkiismeretével szembesül. A rövid sorok, a tömör mondatok a **sűrített** fájdalom formai megfelelői.',
        },
        {
          kind: 'compare',
          title: 'A kései versek közös vonásai',
          columns: ['Tartalom', 'Forma és hang'],
          rows: [
            {
              label: 'Téma',
              cells: ['anya, gyerekkor, bűntudat, haza', 'személyes, önvizsgáló, csendes'],
            },
            {
              label: 'Képek',
              cells: ['konkrét hétköznapi tárgyak, mozdulatok', 'egyszerű, mégis jelképes'],
            },
            {
              label: 'Világlátás',
              cells: ['az egyén magányos számvetése', 'a megbékélés nehézsége, az ítélet'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a kései versek **lélektani** (Freud-hatás: a gyerekkor és az anyakép szerepe) és **filozófiai** (bűn, felelősség, számvetés) vonatkozásai kerülnek előtérbe. A *Flóra*-ciklus és az *Ars poetica* a kései pálya további csomópontjai: a szerelem és a költői hivatás kérdésével egészítik ki a képet. A kritikai olvasatok sokféleek: az életrajzi, a pszichoanalitikus és az etikai értelmezés mind lehetséges, de a szövegből kell kiindulni.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műelemzés: *Mama*, *Kései sirató* vagy *Tudod, hogy nincs bocsánat* témájának, hangnemének, képeinek bemutatása.',
            'Összehasonlítás: az anya-versek vagy a bűntudat-versek más költők hasonló műveivel; vagy József Attila korai és kései verseinek összevetése.',
            'Témakifejtés: az **anya**, a **gyerekkor** vagy a **bűntudat** motívuma a magyar lírában.',
          ],
        },
        {
          kind: 'example',
          title: 'Kapcsolat a művek között',
          problem: 'Mutasd be az **anya-motívum** változását József Attila költészetében.',
          solution:
            '**Korai líra**: az anya hiánya az árvaság, a hontalanság (*Tiszta szívvel*) kifejezője.\n**Kései líra**: a *Mama* konkrét emléke, a *Kései sirató* gyásza; az anya alakja a szeretet és a hiány tárgya.\n**Fejlődés**: a dacos tagadás helyett csendes, önvizsgáló szembenézés.\n**Következtetés**: az anya-motívum az életmű egyik összekötő szála, amely a lélektani mélységet adja.',
        },
        {
          kind: 'warning',
          text: 'A kései verseknél ne fogadj el egyszerű „öngyilkosság-magyarázatot”. Az érvelés alapja a vers szövege: hangnem, szerkezet, képek, motívumok.',
        },
      ],
      topicMatch: ['józsef attila'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik vers kezdete: „Már egy hete csak a mamára gondolok”?',
          options: ['Mama', 'Óda', 'Külvárosi éj', 'Munkások'],
          answer: 0,
          explanation: 'Ez a *Mama* nyitánya, az anyaemlék legismertebb József Attila-verse.',
        },
        {
          question: 'Melyik vers központi motívuma a megbocsátás lehetetlensége?',
          options: ['Tiszta szívvel', 'Tudod, hogy nincs bocsánat', 'A Dunánál', 'Munkások'],
          answer: 1,
          explanation:
            'A *Tudod, hogy nincs bocsánat* a bűntudat és az ítélet verse, önmegszólítással.',
        },
        {
          question: 'Milyen műfajt idéz a *Kései sirató* címe?',
          options: ['himnuszt', 'siratót', 'ódát', 'balladát'],
          answer: 1,
          explanation:
            'A sirató a halott fölötti gyász műfaja; a vers ezt a hagyományt modernizálja.',
        },
        {
          question: 'Melyik motívum köti össze a korai és a kései költészetet?',
          options: [
            'A tenger.',
            'Az anya és a gyerekkori hiány.',
            'A katonaélet.',
            'A nagyúri élet.',
          ],
          answer: 1,
          explanation:
            'Az anya hiánya a *Tiszta szívvel*-től a *Mamá*-ig és a *Kései sirató*-ig az életmű kapcsolódási pontja.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Mama (József Attila)', url: wiki('Mama József Attila vers') },
        { label: 'Wikipédia: Kései sirató', url: wiki('Kései sirató József Attila') },
        {
          label: 'Wikipédia: Tudod, hogy nincs bocsánat',
          url: wiki('Tudod, hogy nincs bocsánat József Attila'),
        },
      ],
    },
    {
      id: 'jozsef-attila-hatasok-utoelet',
      subject: 'magyar',
      unitId: 'jozsef-attila',
      title: 'Hatások, szellemi kötődések és utóélet',
      level: 'emelt',
      requirement: {
        emelt:
          'A pályaképre ható irányzatok és szellemi kötődések, világirodalmi párhuzamok; a művek hatása, fogadtatása; a szerző utóélete, helye és hatása az irodalmi-kulturális hagyományban; különféle kritikák, interpretációk.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'József Attila **egyéni hangú**, több hatást ötvöző költő: a népköltészet, az avantgárd, a Nyugat nagyjai (Ady, Babits), valamint a **marxizmus** és a **pszichoanalízis** formálta.',
            'A **freudo-marxizmus** kifejezés a két irányzat összekapcsolására utal: a társadalmi és a lélektani szemlélet együtt jelenik meg.',
            'A kortársak közül a **Nyugat** köre részben elismerte, de a költő pályája sokáig marginális maradt.',
            'Halála után fokozatosan **a 20. század egyik legnagyobb magyar költője** lett; a díj (József Attila-díj, 1950) és a **költészet napja** (április 11.) is az ő nevéhez kötődik.',
            'A recepció változott: a **szocialista** olvasat, majd a **lélektani, egzisztenciális** és **posztmodern** értelmezések váltották egymást.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'freudo-marxizmus',
              text: 'A pszichoanalízis (Freud) és a marxizmus összekapcsolására törekvő szemlélet; József Attila költészetének értelmezésében a társadalmi és a lélektani szempont együtt van jelen.',
              emelt: true,
            },
            {
              term: 'recepció',
              text: 'Egy mű vagy életmű fogadtatása és értelmezéstörténete.',
              emelt: true,
            },
            {
              term: 'utóélet',
              text: 'A szerző hatása a halála után: kiadások, díjak, kánon, költői hagyomány.',
              emelt: true,
            },
          ],
          emelt: true,
        },
      ],
      details: [
        { kind: 'heading', text: 'Hatások és kötődések' },
        {
          kind: 'text',
          text: 'A korai versekben a **népdal** és a **magyar szimbolista** hagyomány (Ady, Babits) érződik, a húszas években az **avantgárd** (Kassák Lajos köre) is hatott rá. Fordított is francia költőt (François Villon verseit), és Párizsban a francia kultúra közelébe került. A harmincas években a **marxizmus** és a **Freud**-féle pszichoanalízis nyomán alakult ki az az összetett látásmód, amely az érett gondolati lírát jellemzi.',
          emelt: true,
        },
        { kind: 'heading', text: 'Műfaji és poétikai újítások' },
        {
          kind: 'text',
          text: 'József Attila a magyar költészetben a **gondolati vers** új típusát alkotta meg: a személyes élményből kiinduló, de egyetemes igényű, gondolatmenetes költeményt. A szabad és kötött forma egyaránt megvan nála: a **dalszerű** rövid sorok és a **hosszú, gondolatmenetes** költemények is. Verseire jellemző a **tömörség**, a konkrét és az elvont összekapcsolása.',
          emelt: true,
        },
        { kind: 'heading', text: 'Fogadtatás és utóélet' },
        {
          kind: 'text',
          text: 'Életében a költő pályáját a szegénység, a betegség és a félreértés kísérte; a kortársak értékelése megosztott volt. Halála után költészete egyre nagyobb hatású lett. A **szocialista időszakban** a „proletárköltő” szerep dominált, később a **lélektani** és **filozófiai** olvasatok kerültek előtérbe. Költők több nemzedéke hivatkozik rá mestereként. A költészet napját (április 11.) születésnapjának tiszteletére tartják, és az állami irodalmi díj is az ő nevét viseli.',
          emelt: true,
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Az értelmezések változása',
          columns: ['Szempont', 'Hangsúly'],
          rows: [
            {
              label: 'Szocialista olvasat',
              cells: ['proletárköltő', 'a szociális versek és a társadalmi szerep'],
            },
            {
              label: 'Lélektani olvasat',
              cells: ['gyerekkor, anyakép, bűntudat', 'a kései versek és a *Mama*'],
            },
            {
              label: 'Gondolati-filozófiai olvasat',
              cells: ['lét, tudat, rend', 'az *Eszmélet*, az *Óda*, *A Dunánál*'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tételben: a pályakép főbb jellemzői, szellemi kötődések, hatás és fogadtatás egy-két példával.',
            'Témakifejtő dolgozat: József Attila helye a 20. századi magyar költészetben (például Ady, Babits, Kosztolányi, Radnóti mellett).',
            'Értelmezéstörténeti kérdés: miben különbözik a szocialista és a lélektani olvasat?',
          ],
        },
        {
          kind: 'tip',
          text: 'Emelt szinten **mindig adj példát**: egy-egy konkrét vers kapcsán mutasd meg, melyik hatás vagy olvasat érvényesül. Az általános kijelentés önmagában kevés.',
        },
        {
          kind: 'warning',
          text: 'Ne mondd, hogy a „freudo-marxizmus” egy hivatalos iskola volt, amelyhez József Attila tartozott. Ez egy utólagos fogalom a két hatás együttes jelenlétére.',
        },
      ],
      topicMatch: ['józsef attila'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Mit jelent a freudo-marxizmus József Attila költészetének értelmezésében?',
          options: [
            'Csak a marxista politikai hovatartozást.',
            'A pszichoanalitikus és a marxista szemlélet együttes jelenlétét.',
            'A barokk vallásos költészetet.',
            'Az avantgárd kísérletezést.',
          ],
          answer: 1,
          explanation:
            'A kifejezés a lélektani (Freud) és a társadalmi (Marx) szempont összekapcsolására utal.',
          emelt: true,
        },
        {
          question: 'Melyik nap a költészet napja?',
          options: ['március 15.', 'április 11.', 'december 3.', 'október 23.'],
          answer: 1,
          explanation:
            'Április 11. József Attila születésnapja, ezen a napon tartják a költészet napját.',
          emelt: true,
        },
        {
          question: 'Melyik francia költőt fordította József Attila?',
          options: ['François Villon', 'Victor Hugo', 'Charles Baudelaire', 'Paul Valéry'],
          answer: 0,
          explanation:
            'Villon verseit magyarra átültette; ez a francia kötődés a pályaképhez tartozik.',
          emelt: true,
        },
        {
          question: 'Mi jellemzi a költő pályájának fogadtatását?',
          options: [
            'Életében egységesen ünnepelték.',
            'Életében megosztott volt, halála után fokozatosan kanonizálódott.',
            'Soha nem lett ismert.',
            'Csak külföldön vált híressé.',
          ],
          answer: 1,
          explanation:
            'Életében a költő nehezen talált megértésre, halála után vált a magyar líra egyik legnagyobb alakjává.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: József Attila', url: wiki('József Attila költő') },
        { label: 'Wikipédia: Freudo-marxizmus', url: wiki('Freudo-marxizmus') },
        { label: 'Wikipédia: József Attila-díj', url: wiki('József Attila-díj') },
      ],
    },
  ],
};

export default unit;
