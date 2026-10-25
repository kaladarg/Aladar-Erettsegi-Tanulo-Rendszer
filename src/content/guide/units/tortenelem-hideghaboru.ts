import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 6.1 (A hidegháború kora) and 6.2 (A kétpólusú világ felbomlása). */
const unit: GuideUnit = {
  id: 'tortenelem-hideghaboru',
  subject: 'tortenelem',
  order: 58,
  title: 'A hidegháború kora és a kétpólusú világ felbomlása',
  requirementRef: '6.1 A hidegháború kora, 6.2 A kétpólusú világ felbomlása',
  intro:
    'Hogyan lett két szuperhatalom szembenállásából világrend, és hogyan omlott össze 1989–1991 között? A két tömb kialakulása, a dekolonizáció, Kína és Izrael, a hidegháború válságai, az enyhülés, a szovjet tömb bukása, Németország egyesítése és Jugoszlávia felbomlása.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (6. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'Egyesült Nemzetek Szervezete (ENSZ)',
        'hidegháború',
        'vasfüggöny',
        'szuperhatalom',
        'kétpólusú világ',
        'Kölcsönös Gazdasági Segítség Tanácsa (KGST)',
        'Észak-atlanti Szerződés Szervezete (NATO)',
        'Varsói Szerződés',
        'berlini fal',
        'jóléti állam',
        'piacgazdaság',
        'prágai tavasz',
        'Szolidaritás',
      ],
      emelt: [
        'Truman-doktrína',
        'Marshall-segély',
        'harmadik világ',
        '„Nagy Ugrás” programja (Kínában)',
        'kulturális forradalom',
        'II. vatikáni zsinat',
        'Brezsnyev-doktrína',
        'csillagháborús terv',
        'peresztrojka',
        'glasznoszty',
      ],
    },
    people: {
      kozep: [
        'Truman',
        'Hruscsov',
        'Kennedy',
        'Gandhi',
        'Mao Ce-tung',
        'Reagan',
        'Gorbacsov',
        'II. János Pál',
        'Ceauşescu',
        'Wałęsa',
        'Kohl',
      ],
      emelt: ['Adenauer', 'Willy Brandt', 'Tito'],
    },
    dates: {
      kozep: [
        '1945 az ENSZ létrejötte',
        '1947 a párizsi béke, a hidegháború kezdete, India függetlenné válása',
        '1948 Izrael létrejötte',
        '1949 az NSZK, az NDK, a Kínai Népköztársaság létrejötte',
        '1975 a helsinki értekezlet',
        '1989 a kelet-közép-európai rendszerváltások, a berlini fal lebontása',
        '1991 a Szovjetunió felbomlása',
        '1991 a délszláv válság és az Öböl-háború kirobbanása',
        '1991–95 a délszláv háború',
      ],
      emelt: [
        '1950–1953 koreai háború',
        '1953 Sztálin halála',
        '1956 az SZKP XX. kongresszusa',
        '1956 szuezi válság',
        '1962 kubai válság',
        '1955–1975 vietnámi háború',
        '1968 prágai tavasz',
        '1979 Szovjetunió bevonul Afganisztánba',
        '1989 máltai csúcstalálkozó',
        '1990 Németország egyesítése',
        '1992 Csehszlovákia felbomlása',
      ],
    },
    places: {
      kozep: [
        'NSZK',
        'NDK',
        'Berlin',
        'Izrael',
        'Közel-Kelet',
        'Korea',
        'Kuba',
        'Vietnam',
        'Afganisztán',
        'Szlovákia',
        'Ukrajna',
      ],
      emelt: ['Pakisztán', 'Ciszjordánia', 'Tajvan', 'Koszovó'],
    },
  },
  pages: [
    {
      id: 'hideghaboru-kialakulasa-ket-tomb',
      subject: 'tortenelem',
      unitId: 'tortenelem-hideghaboru',
      title: 'A hidegháború kialakulása és a két tömb',
      level: 'kozep',
      requirement: {
        kozep:
          'A szovjet–amerikai szembenállás, a két Németország létrejötte, a két világrend jellemzői',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A második világháború után az **Egyesült Államok** és a **Szovjetunió** lett a két **szuperhatalom**; a győztesek szövetsége **1947-re** felbomlott, és kezdődött a **hidegháború**.',
            'A hidegháború nem közvetlen fegyveres háború volt, hanem **szembenállás**: fegyverkezési verseny, propaganda, kémkedés és a nagyhatalmak által támogatott helyi háborúk.',
            'Kialakult a **kétpólusú világ**: nyugaton a piacgazdaságú, többpártrendszerű **USA-tömb** (NATO), keleten a pártállami, tervgazdaságú **szovjet tömb** (KGST, Varsói Szerződés).',
            'Európát a **vasfüggöny** két részre osztotta; Németország is kettészakadt: **1949-ben** létrejött az **NSZK** és az **NDK**. Berlin jelképe a **berlini fal** (1961) lett.',
            'A két tömb közvetlen háborúját a **kölcsönös elrettentés** (az atomfegyverek miatti félelem) akadályozta meg.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1945', text: 'Az ENSZ létrejötte; véget ér a második világháború.' },
            { date: '1946', text: 'Churchill fultoni beszéde: a „vasfüggönyről”.' },
            {
              date: '1947',
              text: 'A párizsi béke; a hidegháború kezdete.',
            },
            { date: '1947. március', text: 'A Truman-doktrína meghirdetése.', emelt: true },
            { date: '1947. június', text: 'A Marshall-terv bejelentése.', emelt: true },
            { date: '1948–1949', text: 'Berlini blokád és légihíd.' },
            { date: '1949', text: 'A NATO és a KGST megalakulása; az NSZK és az NDK létrejötte.' },
            { date: '1955', text: 'A Varsói Szerződés megalakulása.' },
            { date: '1961', text: 'A berlini fal felépítése.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Honnan indult? A győztesek szövetségéből ellenfelek lettek' },
        {
          kind: 'text',
          text: 'A második világháborúban az **Egyesült Államok**, a **Szovjetunió** és Nagy-Britannia közös ellenség, a tengelyhatalmak ellen harcolt. A háború végére Európa gyenge és lerombolt volt, a világpolitikában két ország maradt, amely gazdasági, katonai és diplomáciai erejével az egész világon érvényesíteni tudta az érdekeit: ők a **szuperhatalmak**. A kettejük közötti ellentét mélyebb volt, mint a háborús szövetség: más volt a gazdasági rendszer (piacgazdaság, illetve tervgazdaság), más a politikai rendszer (többpártrendszer, illetve a kommunista párt egyeduralma), és kölcsönös volt a gyanakvás is. A Vörös Hadsereg jelenléte Európa közepén fenyegetésnek tűnt a Nyugat számára, az amerikai atombomba pedig a szovjeteknek.',
        },
        {
          kind: 'text',
          text: 'Az első nagy konfliktus Kelet-Közép-Európa miatt tört ki. A Szovjetunió a megszállt országokban (Lengyelország, Magyarország, Csehszlovákia, Románia, Bulgária, Kelet-Németország) a kommunisták hatalomra segítésével **szovjetizált**. **1946-ban** Churchill az USA-ban mondott fultoni beszédében azt mondta, hogy Európát egy **vasfüggöny** vágja ketté. **1947-re** a világ a hidegháború korszakába lépett.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **Truman-doktrína** (1947 márciusa) szerint az Egyesült Államok támogatja a kommunista nyomásnak kitett országokat: Görögországnak és Törökországnak katonai és gazdasági segítséget adott. Ez a „feltartóztatás” politikájának első nagy lépése volt. A **Marshall-segély** (Marshall-terv, 1947 júniusától) az amerikai gazdasági támogatás volt a háború után összeomlott Európának. A szovjet vezetés a segélyt visszautasította, és a befolyási övezetébe tartozó országokat is lemondatta róla; az amerikai segítséget a Nyugat gazdasági talpra állását és a kommunizmus visszaszorítását szolgáló eszköznek tekintette.',
        },
        { kind: 'heading', text: 'A német kérdés: két Németország' },
        {
          kind: 'text',
          text: 'Németországot a győztesek négy megszállási övezetre osztották (USA, Nagy-Britannia, Franciaország, Szovjetunió), a fővárost, **Berlint** is. A nyugati zónákban **1948-ban** új pénzt vezettek be, ezt a szovjetek nem fogadták el, és **1948 nyarán** lezárták a nyugat-berlini szárazföldi útvonalakat (**berlini blokád**). A nyugati hatalmak **légihíddal** látták el a várost, a blokádot **1949 tavaszán** feloldották.',
        },
        {
          kind: 'text',
          text: '**1949-ben** megalakult a **Német Szövetségi Köztársaság (NSZK)**, a nyugati zónákból (fővárosa Bonn), és a szovjet övezetben a **Német Demokratikus Köztársaság (NDK)**, kommunista pártállami berendezkedéssel. Berlin is kettészakadt. A kelet-németek tömegesen menekültek Nyugat-Berlinen át Nyugatra, ezért az NDK vezetése **1961 augusztusában** körülzárta Nyugat-Berlint, és felépítette a **berlini falat**. A fal számos szökési kísérlet miatt áldozatot követelt, és Európa megosztottságának jelképévé vált.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Adenauer',
              text: 'Konrad Adenauer, az NSZK első kancellárja (1949–1963). Nyugatra kötődő politikát folytatott, és az országot a NATO-ba és az európai integrációba vezette.',
              emelt: true,
            },
            {
              name: 'Truman',
              text: 'Harry S. Truman, az Egyesült Államok elnöke 1945–1953 között. Az ő elnöksége alatt alakult ki az USA hidegháborús politikája.',
            },
            {
              name: 'Hruscsov',
              text: 'Nyikita Hruscsov, az SZKP első titkára Sztálin halála után; a Szovjetunió vezetője 1953 és 1964 között.',
            },
            {
              name: 'Kennedy',
              text: 'John F. Kennedy, az Egyesült Államok elnöke 1961–1963 között; a berlini fal építésekor és a kubai válság idején volt hivatalban.',
            },
          ],
        },
        { kind: 'heading', text: 'A két tömb szervezetei' },
        {
          kind: 'terms',
          items: [
            {
              term: 'ENSZ',
              text: 'Egyesült Nemzetek Szervezete, **1945**. A béke fenntartására jött létre. A Biztonsági Tanács öt állandó tagja (USA, Szovjetunió, Nagy-Britannia, Franciaország, Kína) vétójoggal rendelkezik, ezért a hidegháborúban sokszor bénult volt.',
            },
            {
              term: 'NATO',
              text: 'Észak-atlanti Szerződés Szervezete, **1949**. Az USA vezette nyugati katonai szövetség.',
            },
            {
              term: 'KGST',
              text: 'Kölcsönös Gazdasági Segítség Tanácsa, **1949**. A szovjet vezetésű gazdasági együttműködés; a tagok jórészt egymással kereskedtek, a Szovjetunió látta el őket energiahordozóval és nyersanyaggal.',
            },
            {
              term: 'Varsói Szerződés',
              text: 'A szovjet tömb katonai szövetsége, **1955**. Közvetlen előzménye az volt, hogy az NSZK belépett a NATO-ba.',
            },
            {
              term: 'vasfüggöny',
              text: 'A Nyugatot és a szovjet befolyási övezetet elválasztó határ; a határőrizet, a lezárt határok és az információ korlátozása is a jelképhez tartozott.',
            },
          ],
        },
        { kind: 'heading', text: 'Két világrend összehasonlítása' },
        {
          kind: 'compare',
          title: 'A nyugati és a keleti tömb',
          columns: ['Nyugati tömb (USA)', 'Keleti tömb (Szovjetunió)'],
          rows: [
            {
              label: 'Politika',
              cells: [
                'parlamentáris demokrácia, többpártrendszer, szabad választások',
                'pártállam, a kommunista párt egyeduralma, korlátozott szabadságjogok',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'piacgazdaság, magántulajdon; a nyugat-európai országokban jóléti állam',
                'tervgazdaság, állami tulajdon, hiánygazdaság',
              ],
            },
            {
              label: 'Katonai szervezet',
              cells: ['NATO (1949)', 'Varsói Szerződés (1955)'],
            },
            {
              label: 'Gazdasági szervezet',
              cells: ['nyugat-európai gazdasági együttműködés', 'KGST (1949)'],
            },
            {
              label: 'Vezető',
              cells: ['Egyesült Államok', 'Szovjetunió'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **jóléti állam** a nyugat-európai országokban az állam által nyújtott szociális biztonságot jelentette (egészségügy, nyugdíj, oktatás). A szovjet blokk is hirdette a szociális biztonságot, de politikai szabadság nélkül. A hidegháború legfontosabb jellemzője az volt, hogy a két szuperhatalom közvetlenül nem harcolt egymással, de a világ szinte minden pontján **versengtek**: a fegyverkezésben (a Szovjetunió **1949-ben** felrobbantotta az első atombombáját), az űrkutatásban (az első ember a világűrben **Gagarin** volt 1961-ben, az első holdraszállás amerikai siker volt 1969-ben) és a befolyási övezetekért.',
        },
        {
          kind: 'text',
          text: 'Mivel mindkét fél atomfegyverrel rendelkezett, a közvetlen háború mindkettőre pusztító lett volna. Ezért a szembenállás sokszor **helyi háborúkban** csapódott le (Korea, Vietnam, Afganisztán), ahol a szuperhatalmak a felek támogatásával háborúztak, saját csapataik közvetlen egymás elleni harca nélkül.',
        },
        {
          kind: 'keypoints',
          title: 'A helyszínek, amelyeket térképen is tudnod kell',
          items: [
            '**Európa**: NSZK, NDK, Berlin (kettéosztva).',
            '**Ázsia**: Korea, Vietnam, Afganisztán.',
            '**Amerika**: Kuba.',
            '**Közel-Kelet**: Izrael (lásd a következő leckét).',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet: Churchill fultoni beszéde, a berlini fal felépítése vagy Truman-beszéd (emelt); milyen szembenállásról szól?',
            'Fogalmak: hidegháború, vasfüggöny, szuperhatalom, kétpólusú világ, NATO, KGST, Varsói Szerződés, berlini fal.',
            'Térkép: NSZK, NDK és Berlin elhelyezése.',
            'Összehasonlítás: a két tömb gazdasági és politikai rendszere.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a NATO (1949) és a Varsói Szerződés (1955) évszámának felcserélése, vagy az, hogy a berlini fal 1945-ben épült. A fal 1961-ben épült, 1989-ben nyitották meg. Az NSZK nyugati, az NDK keleti államot jelent.',
        },
        {
          kind: 'tip',
          text: 'Esszé vagy rövid válasz vázlata: (1) ellentét a győztesek között (rendszer, érdek, kölcsönös gyanakvás), (2) a szembenállás lépései (Kelet-Közép-Európa szovjetizálása, a vasfüggöny, német kérdés), (3) a két tömb intézményei (NATO, KGST, Varsói Szerződés), (4) jellemzők (fegyverkezés, befolyási övezetek, helyi háborúk).',
        },
      ],
      topicMatch: [
        'hidegháború',
        'kétpólusú világ',
        'berlini fal',
        'keleti tömb',
        'második világháború után',
        '=ensz',
      ],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik két ország lett a második világháború után a két szuperhatalom?',
          options: [
            'Nagy-Britannia és Franciaország',
            'Az Egyesült Államok és a Szovjetunió',
            'Kína és Japán',
            'Németország és Olaszország',
          ],
          answer: 1,
          explanation:
            'A háború után az USA és a Szovjetunió volt az a két ország, amely gazdasági és katonai erejével az egész világon érvényesíteni tudta az érdekeit.',
        },
        {
          question: 'Melyik évben jött létre az NSZK és az NDK?',
          options: ['1945', '1948', '1949', '1961'],
          answer: 2,
          explanation:
            '1949-ben alakult meg előbb az NSZK (nyugat), majd az NDK (kelet). 1961-ben épült a berlini fal, 1948-ban a blokád kezdődött.',
        },
        {
          question: 'Mi volt a Varsói Szerződés?',
          options: [
            'Az USA vezette nyugati katonai szövetség',
            'A szovjet tömb gazdasági szervezete',
            'A szovjet tömb katonai szövetsége',
            'Az ENSZ biztonsági szerve',
          ],
          answer: 2,
          explanation:
            'A Varsói Szerződés (1955) a szovjet tömb katonai szövetsége volt. A nyugatit NATO-nak hívták, a gazdasági szervezet a KGST volt.',
        },
        {
          question: 'Miért építették fel a berlini falat 1961-ben?',
          options: [
            'Hogy megakadályozzák a kelet-németek tömeges nyugatra menekülését.',
            'Hogy megvédjék Nyugat-Berlint a szovjet támadástól.',
            'Hogy elválasszák egymástól a megszállási övezeteket 1945 után.',
            'Mert Németországot a győztesek kettéosztották.',
          ],
          answer: 0,
          explanation:
            'Az NDK vezetése azért zárta körül Nyugat-Berlint, hogy megállítsa az állampolgárok elvándorlását Nyugatra.',
        },
        {
          question: 'Mit mondott ki a Truman-doktrína 1947-ben?',
          options: [
            'Az USA gazdasági segélyt ad Nyugat-Európának a háború után.',
            'Az USA a kommunista nyomásnak kitett országokat támogatja.',
            'Az USA kilép az ENSZ-ből.',
            'Az USA katonai szövetséget köt a Szovjetunióval.',
          ],
          answer: 1,
          explanation:
            'A Truman-doktrína a kommunizmus feltartóztatására az USA támogatását ígérte a fenyegetett országoknak (Görögország, Törökország). A gazdasági segély a Marshall-terv volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hidegháború', url: wiki('Hidegháború') },
        { label: 'Wikipédia: Berlini fal', url: wiki('Berlini fal') },
        { label: 'Wikipédia: Kétpólusú világ', url: wiki('Kétpólusú világ') },
      ],
    },
    {
      id: 'dekolonizacio-india-kina-izrael',
      subject: 'tortenelem',
      unitId: 'tortenelem-hideghaboru',
      title: 'Dekolonizáció, India, Kína és Izrael',
      level: 'kozep',
      requirement: {
        kozep: 'India függetlenné válása, kommunista fordulat Kínában, Izrael megalapítása',
        emelt: 'Arab–izraeli háborúk',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A világháború után a gyarmatbirodalmak felbomlottak (**dekolonizáció**): Ázsiában és Afrikában sok új állam jött létre.',
            '**India** **1947-ben** vált függetlenné Nagy-Britanniától; a függetlenségi mozgalom vezére **Gandhi** volt, az erőszakmentes ellenállás híve.',
            '**Kínában** a polgárháborút a **kommunisták** nyerték meg **Mao Ce-tung** vezetésével: **1949-ben** kikiáltották a **Kínai Népköztársaságot**.',
            '**1948-ban** megalakult **Izrael** állama; az arab államok megtámadták, ez volt az első arab–izraeli háború.',
            'A dekolonizált államok közül sok nem csatlakozott egyik tömbhöz sem, és a hidegháborús versengés színterévé vált.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1947', text: 'India függetlenné válása; a Brit India felosztása.' },
            {
              date: '1948',
              text: 'Gandhi meggyilkolása (január); Izrael függetlenségi nyilatkozata (május).',
            },
            {
              date: '1948–1949',
              text: 'Az első arab–izraeli háború.',
              emelt: true,
            },
            { date: '1949', text: 'A Kínai Népköztársaság kikiáltása (október 1.).' },
            { date: '1955', text: 'A bandungi konferencia.', emelt: true },
            { date: '1960', text: 'Az „afrikai évben” tizenhét afrikai gyarmat vált függetlenné.' },
            { date: '1958–1961', text: 'A „Nagy Ugrás” Kínában.', emelt: true },
            { date: '1966–1976', text: 'A kulturális forradalom Kínában.', emelt: true },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A gyarmati rendszer felbomlása' },
        {
          kind: 'text',
          text: 'A világháború meggyengítette a gyarmattartó nagyhatalmakat (Nagy-Britannia, Franciaország, Hollandia), a gyarmati népek pedig megerősödött függetlenségi mozgalmakat indítottak. Az új államok létrejötte két módon történhetett: **békés** úton, tárgyalásokkal (India, a legtöbb brit gyarmat), vagy **fegyveres harcban** (például Algéria Franciaországgal szemben, Indokína). **1960-ban**, az „afrikai évben” tizenhét afrikai gyarmat vált függetlenné. A dekolonizáció az ENSZ tagjainak számát is megsokszorozta.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az új államok jelentős része a hidegháborúban sem az USA, sem a Szovjetunió oldalához nem akart tartozni. Ezeket az országokat nevezzük a **harmadik világnak**: gazdaságilag elmaradott, gyakran szegény, korábbi gyarmati országokat. A semlegességet hirdető **el nem kötelezettek mozgalma** a bandungi konferencián (1955) gyökerezik, formálisan a belgrádi csúcstalálkozón (1961) alakult meg, és olyan vezetők álltak mögötte, mint Nehru (India), Nasszer (Egyiptom) és **Tito** (Jugoszlávia). A szuperhatalmak a harmadik világban is versengtek a befolyásért, katonai és gazdasági segítséggel.',
        },
        { kind: 'heading', text: 'India' },
        {
          kind: 'text',
          text: 'India az 1800-as évek közepétől brit gyarmat volt. A 20. században az **Indiai Nemzeti Kongresszus** harcolt a függetlenségért. A mozgalom lelke **Mohandász Karamcsand Gandhi** volt: az **erőszakmentes ellenállás** és a polgári engedetlenség (például az angol sóadó elleni sómenet, 1930) elvét hirdette. A második világháború után London tudomásul vette a függetlenséget: **1947-ben** India független lett. Az első miniszterelnök Dzsaváharlál Nehru volt. Gandhit **1948 januárjában** egy radikális hindu nacionalista meggyilkolta.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A brit gyarmat nem egységes államként lett független: a muszlim többségű területekből **Pakisztán** jött létre, a hindu többségűekből India. A felosztás idején tömeges népességmozgás és vallási erőszak zajlott, milliók menekültek. A két állam között a **Kasmír** hovatartozása máig vitatott. Pakisztán keleti része 1971-ben Banglades néven önálló állam lett.',
        },
        { kind: 'heading', text: 'Kína: a kommunista fordulat' },
        {
          kind: 'text',
          text: 'Kínában a második világháború után a nacionalista **Kuomintang** (vezetője Csang Kaj-sek) és a **kommunisták** (vezetőjük **Mao Ce-tung**) között polgárháború folyt. A kommunisták a parasztság támogatására építettek, és **1949-re** elfoglalták a szárazföldi Kínát. **1949. október 1-jén** Mao kikiáltotta a **Kínai Népköztársaságot**. A kommunista hatalomátvétellel az ázsiai kontinens legnépesebb országa a szovjet tömb szövetségese lett, a hidegháború erőviszonyai megváltoztak. Egy ideig a Szovjetunió volt Kína fő támogatója, később (az 1960-as évektől) a két kommunista hatalom viszonya megromlott.',
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Kína Mao Ce-tung alatt (emelt)',
          items: [
            '**Tajvan**: a vesztes Kuomintang a Tajvan szigetére menekült, és ott külön államot hozott létre. A Kínai Népköztársaság a szigetet a saját területének tekinti, a kérdés máig megoldatlan.',
            '**A „Nagy Ugrás” programja (1958–1961)**: Mao a mezőgazdaság és az ipar gyors fejlesztését akarta elérni „népi kommunák” létrehozásával. A program súlyos gazdasági kudarc és éhínség lett; az áldozatok száma több tízmillió is lehet, a pontos számról a becslések eltérnek.',
            '**A kulturális forradalom (1966–1976)**: Mao a pártvezetésen belüli ellenfelei ellen és a „burzsoá” kultúra ellen mozgósította a fiatalokat (vörös gárdák). Értelmiségieket üldöztek, a gazdaság és az oktatás súlyos károkat szenvedett. A mozgalom Mao 1976-os haláláig tartott.',
          ],
        },
        { kind: 'heading', text: 'Izrael megalapítása' },
        {
          kind: 'text',
          text: 'A zsidóság nemzeti mozgalma, a **cionizmus** a 19. század végén indult (megteremtője a pesti születésű Herzl Tivadar), célja a palesztinai zsidó állam létrehozása volt. Palesztina a világháborúk között brit igazgatás (mandátum) alatt állt, ahol a zsidó bevándorlás és az ott élő arab lakosság között feszültségek keletkeztek. A **holokauszt** után a túlélők tömegesen igyekeztek Palesztinába. Az ENSZ **1947-ben** javaslatot fogadott el Palesztina egy zsidó és egy arab államra osztására; a zsidó vezetés ezt elfogadta, az arab vezetés elutasította. A britek kivonulása után **1948. május 14-én** David Ben-Gurion kikiáltotta **Izrael** államot.',
        },
        {
          kind: 'text',
          text: 'Az arab szomszédos államok másnap megtámadták az új államot. Az első arab–izraeli háború (1948–1949) Izrael győzelmével zárult, és Izrael területe nagyobb lett, mint az ENSZ-tervben. Több százezer palesztin arab menekült el vagy kényszerült elhagyni otthonát. A **Közel-Kelet** azóta a világ egyik legfeszültebb térsége maradt.',
        },
        {
          kind: 'timeline',
          emelt: true,
          items: [
            {
              date: '1948–1949',
              text: 'Az első háború: Izrael függetlenségi háborúja; Ciszjordániát Jordánia, a Gázai övezetet Egyiptom kapta meg.',
            },
            {
              date: '1956',
              text: 'A szuezi válság: Izrael Nagy-Britanniával és Franciaországgal együtt támadja Egyiptomot.',
            },
            {
              date: '1967',
              text: 'A hatnapos háború: Izrael elfoglalja a Sínai-félszigetet, a Gázai övezetet, **Ciszjordániát**, Kelet-Jeruzsálemet és a Golán-fennsíkot.',
            },
            {
              date: '1973',
              text: 'A Jom Kippur-háború: Egyiptom és Szíria támad; az ENSZ közvetítésével tűzszünet.',
            },
            {
              date: '1979',
              text: 'Izrael és Egyiptom békét köt, az Egyesült Államok közvetítésével (Camp David).',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: Gandhi szövege, az izraeli függetlenségi nyilatkozat vagy Mao beszéde; ki írta, mit akar?',
            'Rövid válasz: hogyan lett India független? Mi a különbség India és Kína útja között?',
            'Térkép: India, Kína, Izrael, Közel-Kelet elhelyezése (emelt: Pakisztán, Ciszjordánia, Tajvan).',
            'Időrend: 1947 India, 1948 Izrael, 1949 Kína. Egyszerre három ázsiai–közel-keleti fordulat.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Gandhit és Mao Ce-tungot, vagy a három eseményt (1947 India, 1948 Izrael, 1949 Kína) összekeverni. Másik hiba: azt írni, hogy India erőszakos háborúban lett független; az indiai függetlenséget főként békés mozgalom és tárgyalások hozták el, a felosztáskor azonban sok erőszak történt.',
        },
        {
          kind: 'tip',
          text: 'Mondatban tudd összefoglalni: India 1947 (Gandhi, erőszakmentesség, felosztás), Kína 1949 (Mao, kommunista fordulat, polgárháború), Izrael 1948 (cionizmus, ENSZ-határozat, arab támadás). Emelten ehhez jön a háborúk időrendje és a Nagy Ugrás meg a kulturális forradalom fogalma.',
        },
      ],
      topicMatch: ['hidegháború', 'kétpólusú világ', 'hidegháború vége'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question:
            'Ki volt India függetlenségi mozgalmának az erőszakmentességet hirdető vezetője?',
          options: ['Mao Ce-tung', 'Ben-Gurion', 'Tito', 'Gandhi'],
          answer: 3,
          explanation:
            'Gandhi az erőszakmentes ellenállás és a polgári engedetlenség híve volt. Mao Kína, Ben-Gurion Izrael vezetője volt.',
        },
        {
          question: 'Melyik évben alakult meg a Kínai Népköztársaság?',
          options: ['1947', '1949', '1953', '1966'],
          answer: 1,
          explanation:
            '1949. október 1-jén Mao Ce-tung kikiáltotta a Kínai Népköztársaságot. A kulturális forradalom 1966-ban kezdődött.',
        },
        {
          question: 'Melyik eseményhez kapcsolódik az ENSZ 1947-es felosztási terve?',
          options: [
            'India függetlensége',
            'A kínai polgárháború',
            'Palesztina zsidó és arab államra osztása, Izrael létrejötte',
            'A koreai háború',
          ],
          answer: 2,
          explanation:
            'Az ENSZ Palesztinát egy zsidó és egy arab államra akarta osztani; 1948-ban kiáltották ki Izraelt.',
        },
        {
          question: 'Mi volt a „Nagy Ugrás” programja?',
          options: [
            'A kínai iparosítás és a mezőgazdaság gyors fejlesztésére indított, kudarcba fulladt program.',
            'Az indiai függetlenségi mozgalom egyik akciója.',
            'A szovjet űrprogram első szakasza.',
            'Izrael első ötéves terve.',
          ],
          answer: 0,
          explanation:
            'A Nagy Ugrás (1958–1961) Mao gyors iparosítási és népi kommunás programja volt, éhínséggel és hatalmas veszteséggel járt.',
          emelt: true,
        },
        {
          question: 'Melyik terület került Izrael ellenőrzése alá az 1967-es hatnapos háborúban?',
          options: ['Pakisztán', 'Tajvan', 'Ciszjordánia', 'Kuba'],
          answer: 2,
          explanation:
            'Izrael 1967-ben elfoglalta többek között Ciszjordániát (és Kelet-Jeruzsálemet). Pakisztán, Tajvan és Kuba nem az arab–izraeli háborúk területe.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Dekolonizáció', url: wiki('Dekolonizáció') },
        {
          label: 'Wikipédia: Izrael állam megalapítása',
          url: wiki('Izrael függetlenségi nyilatkozata'),
        },
        { label: 'Wikipédia: Kínai polgárháború', url: wiki('Kínai polgárháború') },
      ],
    },
    {
      id: 'hideghaboru-forro-pontjai',
      subject: 'tortenelem',
      unitId: 'tortenelem-hideghaboru',
      title: 'Korea, Szuez, Kuba, Vietnam: a hidegháború forró pontjai',
      level: 'emelt',
      requirement: {
        emelt:
          'A szembenállás és enyhülés hullámai, hidegháborús konfliktusok: Korea, Szuez, Kuba, Vietnam, Afganisztán',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Korea (1950–1953)**: az észak-koreai támadás után ENSZ-erők (amerikai vezetéssel) és kínai csapatok harcoltak; a front a 38. szélességi kör mentén állt meg, **1953-ban** fegyverszünet lett.',
            '**1953**: meghalt Sztálin; **1956-ban** Hruscsov az SZKP XX. kongresszusán leleplezte a személyi kultuszt.',
            '**Szuez (1956)**: Nasszer államosította a csatornát; Nagy-Britannia, Franciaország és Izrael támadt, de az USA és a Szovjetunió nyomására visszavonultak.',
            '**Kuba (1959–1962)**: a kubai forradalom a Szovjetunió oldalára sodorta Kubát; **1962-ben** a szovjet rakéták miatt kitört a **kubai rakétaválság**, a hidegháború legveszélyesebb pillanata.',
            '**Vietnam (1955–1975)**: az USA a kommunista Észak-Vietnam ellen támogatta Dél-Vietnamot, de nem tudott nyerni, **1973-ban** kivonult, **1975-ben** Észak-Vietnam győzött.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1950. június', text: 'Az észak-koreai támadás Dél-Korea ellen.' },
            { date: '1953. március', text: 'Sztálin halála.' },
            { date: '1953. július', text: 'A koreai fegyverszünet.' },
            { date: '1956. február', text: 'Az SZKP XX. kongresszusa, Hruscsov titkos beszéde.' },
            { date: '1956. ősz', text: 'A szuezi válság.' },
            { date: '1959', text: 'A kubai forradalom győzelme.' },
            { date: '1962. október', text: 'A kubai rakétaválság.' },
            { date: '1955–1975', text: 'A vietnámi háború.' },
            { date: '1973', text: 'A párizsi békemegállapodás; az amerikai csapatok kivonása.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Korea (1950–1953)' },
        {
          kind: 'text',
          text: 'A Koreai-félszigetet a második világháború után a **38. szélességi kör** mentén két megszállási övezetre osztották: északon a szovjetek, délen az amerikaiak vezették a megszállást. **1948-ban** két állam jött létre: a kommunista **Észak-Korea** (Kim Ir Szen) és a Nyugat-barát **Dél-Korea**. **1950. június 25-én** Észak-Korea megtámadta Dél-Koreát. Az ENSZ Biztonsági Tanácsa (mivel a Szovjetunió bojkottálta az üléseket, nem élt a vétójogával) az agresszor elleni fellépésre szólított fel, így **amerikai vezetésű ENSZ-erők** avatkoztak be. Amikor ezek északra nyomultak, **Kína** csapatokat küldött Észak-Korea segítségére. A front végül a 38. szélességi kör közelében merevedett meg, és **1953. július** fegyverszünetet kötöttek. Békeszerződés azóta sincs, a két Korea ma is kettéosztott.',
        },
        { kind: 'heading', text: 'Sztálin halála és az SZKP XX. kongresszusa' },
        {
          kind: 'text',
          text: '**1953 márciusában** meghalt **Sztálin**. A halálával a szovjet vezetésben hatalmi harc kezdődött, amelyből végül **Hruscsov** került ki győztesen. Hruscsov **1956 februárjában**, az **SZKP XX. kongresszusán** zárt ülésen elmondott titkos beszédében leleplezte Sztálin bűneit és a **személyi kultuszt**. Megfogalmazta a „békés egymás mellett élés” elvét is a nyugati országokkal. A beszéd bizonytalanságot és reformreményeket váltott ki a szovjet tömb országaiban.',
        },
        { kind: 'heading', text: 'A szuezi válság (1956)' },
        {
          kind: 'text',
          text: '**Nasszer** egyiptomi elnök **1956 nyarán** államosította a Szuezi-csatornát, amelyet addig többségében brit és francia tőke ellenőrzött. **1956 októberének végén** Izrael lerohanta a Sínai-félszigetet, Nagy-Britannia és Franciaország pedig „békefenntartás” ürügyén beavatkozott. Az **Egyesült Államok** és a **Szovjetunió** egyaránt elítélte a támadást, az ENSZ is fellépett, így a három támadó fél visszavonult. A válság megmutatta, hogy a régi gyarmattartó nagyhatalmak helyét a két szuperhatalom vette át, és hogy a Közel-Keleten a szuperhatalmak versengtek a befolyásért. A szuezi válság idején zajlott a magyar forradalom is.',
        },
        { kind: 'heading', text: 'Kuba és a kubai rakétaválság' },
        {
          kind: 'text',
          text: 'A kubai forradalom **1959-ben** megdöntötte Batista diktatúráját, a hatalmat **Fidel Castro** vette át. Amikor Castro államosított és szovjet segítséget fogadott el, az USA megszakította a kapcsolatot. **1961-ben** az USA által támogatott kubai emigránsok partraszállása a Disznó-öbölben kudarcot vallott. Kuba a szovjet tömb szövetségese, az USA közvetlen szomszédságában működő kommunista állam lett.',
        },
        {
          kind: 'text',
          text: '**1962 októberében** az amerikai felderítés szovjet atomrakéta-támaszpontokat fedezett fel Kubában. **Kennedy** elnök tengeri blokáddal („karanténnal”) válaszolt, és követelte a rakéták kivonását. A világ néhány napig az atomháború szélén állt. A válság tárgyalásokkal ért véget: **Hruscsov** elrendelte a rakéták kivonását, az Egyesült Államok vállalta, hogy nem támadja meg Kubát, és titokban a törökországi amerikai rakéták kivonását is elfogadta. A válság után közvetlen telefonkapcsolatot („forródrót”) létesítettek Washington és Moszkva között, és kezdetét vette az **enyhülés**.',
        },
        { kind: 'heading', text: 'Vietnam (1955–1975)' },
        {
          kind: 'text',
          text: 'Vietnam francia gyarmat volt, a függetlenségért küzdő mozgalom vezetője a kommunista **Ho Si Minh**. A franciák **1954-ben** vereséget szenvedtek (Dien Bien Phu), a genfi egyezmény az országot a 17. szélességi kör mentén kettéosztotta: északon a kommunista **Észak-Vietnam**, délen a Nyugat-barát **Dél-Vietnam** jött létre. A dél-vietnami kommunista gerillák (vietkong) fegyveres harcot indítottak, amelyet Észak-Vietnam támogatott. Az **Egyesült Államok** egyre nagyobb erővel avatkozott be, **1965-től** már amerikai szárazföldi csapatokkal harcolt. Az USA modern fegyverzete ellenére sem tudott gyors győzelmet aratni a gerillataktika ellen, a háború a polgári lakosságnak is óriási veszteséget okozott, és amerikai tiltakozó mozgalmat váltott ki. A háborúban mintegy 58 ezer amerikai katona halt meg.',
        },
        {
          kind: 'text',
          text: '**1973-ban** a párizsi megállapodás nyomán az amerikai csapatok kivonultak. **1975 tavaszán** Észak-Vietnam elfoglalta Saigont, **1976-ban** a két országrészt egyesítették. A vietnámi háború a hidegháborús szuperhatalom, az USA egyik legnagyobb hadi és erkölcsi vereségének számított.',
        },
        {
          kind: 'compare',
          title: 'A négy konfliktus összevetése',
          columns: ['Hol és mikor', 'Kimenetel'],
          rows: [
            {
              label: 'Korea',
              cells: ['1950–1953, a 38. szélességi kör', 'fegyverszünet, kettéosztott félsziget'],
            },
            {
              label: 'Szuez',
              cells: [
                '1956, Egyiptom és a csatorna',
                'a támadók visszavonulnak az USA és a Szovjetunió nyomására',
              ],
            },
            {
              label: 'Kuba',
              cells: ['1962, szovjet rakéták Kubában', 'a rakéták kivonása, enyhülés'],
            },
            {
              label: 'Vietnam',
              cells: [
                '1955–1975, Észak- és Dél-Vietnam',
                'amerikai kivonulás, a kommunisták győznek',
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
            'Térkép és időrend: melyik konfliktus melyik évben, melyik kontinensen zajlott?',
            'Forrás: Kennedy vagy Hruscsov levele/beszéde a kubai válság idején; Hruscsov XX. kongresszusi beszéde.',
            'Esszé: a hidegháborús konfliktusok jellemzői; miért kerülték el a szuperhatalmak a közvetlen összecsapást?',
            'Összehasonlítás: Korea és Vietnam (kettéosztott ország, szuperhatalmi beavatkozás).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a koreai és a vietnámi háború összekeverése. Korea: 1950–1953, ENSZ-erők, 38. szélességi kör, fegyverszünet. Vietnam: 1955–1975, amerikai vereség, 17. szélességi kör. Másik hiba: a szuezi válságot és a kubai válságot felcserélni (1956, illetve 1962).',
        },
        {
          kind: 'tip',
          text: 'A hidegháborús konfliktusok közös vonása: a szuperhatalmak sosem harcoltak egymással közvetlenül, hanem helyi szövetségeseiken keresztül. Ezt a gondolatot érdemes megírnod minden esszéhez. A kubai válság az egyetlen, ahol az atomháború reális veszélye merült fel.',
        },
      ],
      topicMatch: ['korea', 'kubai rakétaválság', 'hidegháború', 'kétpólusú világ'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik szélességi kör mentén osztották ketté Koreát?',
          options: ['A 17.', 'Az 50.', 'A 45.', 'A 38.'],
          answer: 3,
          explanation:
            'Koreát a 38. szélességi kör mentén osztották fel. A 17. szélességi kör Vietnam kettéosztásának határa.',
        },
        {
          question: 'Mi volt a kubai rakétaválság kiváltó oka?',
          options: [
            'A Szovjetunió atomrakétákat telepített Kubába.',
            'Az USA amerikai atomrakétákat telepített Kubába.',
            'Kuba megtámadta az Egyesült Államokat.',
            'Castro államosította a Szuezi-csatornát.',
          ],
          answer: 0,
          explanation:
            '1962-ben szovjet atomrakéták megjelenése Kubában váltotta ki a válságot; az amerikai blokád és tárgyalások végül a rakéták kivonásához vezettek.',
        },
        {
          question: 'Mi történt a szuezi válságban 1956 őszén?',
          options: [
            'A Szovjetunió megtámadta Egyiptomot.',
            'Egyiptom és Izrael békét kötött.',
            'Az USA megszállta a csatornát.',
            'Izrael, Nagy-Britannia és Franciaország támadta Egyiptomot, de visszavonult.',
          ],
          answer: 3,
          explanation:
            'A támadók az USA és a Szovjetunió nyomására visszavonultak, ami a két szuperhatalom túlsúlyát mutatta.',
        },
        {
          question: 'Mi volt az SZKP XX. kongresszusának (1956) legfontosabb eseménye?',
          options: [
            'A Varsói Szerződés megalakítása.',
            'Hruscsov titkos beszéde Sztálin személyi kultuszáról és bűneiről.',
            'Sztálin halálának bejelentése.',
            'A szovjet csapatok kivonásának bejelentése Afganisztánból.',
          ],
          answer: 1,
          explanation:
            'Hruscsov a kongresszuson zárt ülésen leleplezte Sztálin bűneit és a személyi kultuszt. Sztálin 1953-ban halt meg.',
        },
        {
          question: 'Hogyan ért véget a vietnámi háború?',
          options: [
            'Dél-Vietnam győzött az USA segítségével.',
            'Fegyverszünet lett a 17. szélességi körnél, Vietnam kettéosztva maradt.',
            'Az USA kivonult, és 1975-ben Észak-Vietnam elfoglalta Saigont.',
            'A Szovjetunió beavatkozott.',
          ],
          answer: 2,
          explanation:
            'Az amerikai csapatok 1973-ban kivonultak, 1975-ben Észak-Vietnam elfoglalta Saigont, és 1976-ban egyesítették az országot.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Koreai háború', url: wiki('Koreai háború') },
        { label: 'Wikipédia: Kubai rakétaválság', url: wiki('Kubai rakétaválság') },
        { label: 'Wikipédia: Vietnámi háború', url: wiki('Vietnámi háború') },
      ],
    },
    {
      id: 'enyhules-pragai-tavasz-afganisztan',
      subject: 'tortenelem',
      unitId: 'tortenelem-hideghaboru',
      title: 'Enyhülés és újabb szembenállás: Prága, Helsinki, Afganisztán',
      level: 'emelt',
      requirement: {
        emelt:
          'A szembenállás és enyhülés hullámai, hidegháborús konfliktusok: Korea, Szuez, Kuba, Vietnam, Afganisztán',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A hidegháború hullámzott: **enyhülés** (1950-es évek közepe, az 1960-as évek vége és a 70-es évek) és **kiéleződés** (1956–62, majd az 1980-as évek eleje) váltotta egymást.',
            'Az enyhülés jelei: **forródrót**, atomcsend-egyezmény, atomsorompó-egyezmény, a SALT-megállapodás (1972), **Willy Brandt** keleti politikája és az **1975-ös helsinki értekezlet**.',
            'A szovjet tömbben a **prágai tavasz** (**1968**) reformkísérletét a Szovjetunió vezette Varsói Szerződés-csapatok fojtották el. A **Brezsnyev-doktrína** szerint a szocialista országok ügye közös.',
            '**1979-ben** a Szovjetunió bevonult **Afganisztánba**; az „új hidegháborút” Reagan **csillagháborús terve** (SDI) tetézte.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1963', text: 'A forródrót; részleges atomcsend-egyezmény.' },
            { date: '1968', text: 'A prágai tavasz leverése (augusztus); atomsorompó-egyezmény.' },
            {
              date: '1970',
              text: 'Willy Brandt keleti politikájának első szerződései (Moszkva, Varsó).',
            },
            { date: '1972', text: 'SALT I. egyezmény.' },
            { date: '1975', text: 'A helsinki értekezlet záróokmánya.' },
            { date: '1979', text: 'A Szovjetunió bevonul Afganisztánba.' },
            { date: '1983', text: 'Reagan bejelenti a csillagháborús tervet.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az enyhülés hullámai' },
        {
          kind: 'text',
          text: 'A hidegháború három nagy szakaszra bontható. (1) **1945–1953**: a kiépülő szembenállás, a legélesebb időszak. (2) **1953–1962**: Sztálin halála után részleges olvadás (osztrák államszerződés 1955, genfi csúcstalálkozó), majd újabb kiélezett válságok (szuezi válság, a berlini fal, a kubai válság). (3) **1960-as évek vége – 1979**: az **enyhülés** korszaka, amikor a két szuperhatalom a fegyverkezés korlátozásáról tárgyalt. Utána az **1980-as évek eleje** az „új hidegháború”.',
        },
        {
          kind: 'keypoints',
          title: 'Az enyhülés lépései',
          items: [
            '**1963**: közvetlen telefonvonal (forródrót) Washington és Moszkva között, és részleges atomcsend-egyezmény (a légköri kísérleti robbantások tilalma).',
            '**1968**: az **atomsorompó-egyezmény** megtiltotta az atomfegyverek terjesztését az atomhatalmakon kívül.',
            '**1972**: SALT I., az első amerikai–szovjet megállapodás a stratégiai nukleáris fegyverek korlátozásáról.',
            '**Willy Brandt keleti politikája**: az NSZK kancellárja (1969–1974) az 1970-es években szerződésekkel rendezte a viszonyt a Szovjetunióval, Lengyelországgal és az NDK-val, elismerve a háború utáni határokat. Brandt tevékenységét Nobel-békedíjjal ismerték el.',
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Willy Brandt',
              text: 'Az NSZK szociáldemokrata kancellárja 1969–1974 között. Az **Ostpolitik** (keleti politika) szerzője: a kapcsolatok normalizálásával, a határok elismerésével és a párbeszéddel akarta enyhíteni az európai megosztottságot.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A prágai tavasz (1968)' },
        {
          kind: 'text',
          text: 'Csehszlovákiában **1968 elején** Alexander Dubček került a kommunista párt élére, és reformokat vezetett be: enyhítette a cenzúrát, szabadabb sajtót és nyilvános vitát engedett, a gazdaságban reformokat tervezett, mindezt az „**emberarcú szocializmus**” jelszavával. Moszkva attól tartott, hogy az országban a kommunista hatalom meggyengül. **1968. augusztus 20–21-én** a Szovjetunió és néhány szövetségese (köztük Magyarország) a Varsói Szerződés nevében megszállta Csehszlovákiát. A reformereket leváltották, a következő években a „normalizáció” a reformok előtti állapotot állította vissza.',
        },
        {
          kind: 'text',
          text: 'A beavatkozás elvi hátterét a **Brezsnyev-doktrína** adta (Leonyid Brezsnyev, az SZKP főtitkára): eszerint a szocialista tábor országainak ügye az egész tábor közös ügye, így a szocializmust fenyegető veszély esetén a többi szocialista ország beavatkozhat. A doktrína a tagországok korlátozott szuverenitását jelentette.',
        },
        { kind: 'heading', text: 'A helsinki értekezlet (1975)' },
        {
          kind: 'text',
          text: '**1975-ben** Helsinkiben az **Európai Biztonsági és Együttműködési Értekezlet** 35 résztvevője (Európa országainak többsége, az Egyesült Államok és Kanada) aláírta a záróokmányt. Elismerték a határok sérthetetlenségét (ez a Szovjetuniónak fontos volt), vállalták a gazdasági és kulturális együttműködést, és kötelezték magukat az **emberi jogok** tiszteletben tartására (a Nyugatnak ez volt fontos). Utóbbi hivatkozási alap lett a keleti tömb ellenzéki mozgalmainak (például a csehszlovák Charta ’77).',
        },
        { kind: 'heading', text: 'Újabb kiéleződés: Afganisztán és a csillagháborús terv' },
        {
          kind: 'text',
          text: '**1979 decemberében** a Szovjetunió csapatokat küldött **Afganisztánba**, hogy a kommunista kormányt védje a felkelők (mudzsahedek) ellen. A háború hosszan elhúzódott: az USA, Pakisztán és más országok fegyverekkel támogatták a mudzsahedeket, a Nyugat tiltakozott, az USA vezetésével sok ország bojkottálta az 1980-as moszkvai olimpiát. A háború a Szovjetuniónak sok emberéletébe és pénzébe került, a csapatok kivonása **1988–1989** között történt meg. Sok elemző a „szovjet Vietnamnak” nevezi.',
        },
        {
          kind: 'text',
          text: 'Az amerikai elnök, **Ronald Reagan** az 1980-as évek elején keményebb hidegháborús politikát folytatott. **1983-ban** meghirdette a **Stratégiai Védelmi Kezdeményezést** (SDI), a sajtó szavával a „**csillagháborús tervet**”: az űrből működő rakétavédelmi rendszer ötletét. A Szovjetunió nem tudta volna követni a költséges technológiai versenyt. A fegyverkezési verseny terhe hozzájárult a szovjet gazdaság kimerüléséhez.',
        },
        {
          kind: 'text',
          text: 'Az egyházak is szerepet játszottak: a **II. vatikáni zsinat** (1962–1965) megújította a katolikus egyházat (az istentisztelet nemzeti nyelven folyhatott, párbeszédet kezdett más vallásokkal és a modern világgal). Az egyház a hidegháborúban sok esetben a vallásszabadságot és az emberi jogokat képviselte a kommunista országokban.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: Brezsnyev vagy Dubček szövege, a helsinki záróokmány részlete; mit mutat a tábor országainak helyzetéről?',
            'Fogalmak: enyhülés, Brezsnyev-doktrína, csillagháborús terv, Ostpolitik.',
            'Időrend: 1968, 1975, 1979, 1983.',
            'Esszé: az enyhülés eredményei és korlátai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a prágai tavaszt a magyar forradalommal összekeverni (1968, illetve 1956), vagy azt állítani, hogy a beavatkozás szovjet egyoldalú lépés volt: több szövetséges ország is részt vett benne. Másik hiba: az enyhülést a hidegháború végével azonosítani; az 1980-as évek elején újra feszültté vált a helyzet.',
        },
        {
          kind: 'tip',
          text: 'Az enyhülés eredménye és korlátja egy mondatban: a szuperhatalmak korlátozták a nukleáris fegyverkezést és elismerték a háború utáni határokat, de a tömbök rendszerei és versengésük megmaradt (Prága 1968, Afganisztán 1979).',
        },
      ],
      topicMatch: ['helsinki-folyamat', 'hidegháború', 'kétpólusú világ'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mit mond ki a Brezsnyev-doktrína?',
          options: [
            'Az USA nem avatkozhat be a szocialista országok ügyeibe.',
            'Minden szocialista ország teljesen szuverén.',
            'A Szovjetunió kilép a Varsói Szerződésből.',
            'A szocialista országok ügye közös, a szocializmus védelmében beavatkozhatnak.',
          ],
          answer: 3,
          explanation:
            'A doktrína szerint a szocialista tábor ügye közös, ezért a szocializmust veszélyeztető fejlemények esetén beavatkozhatnak (korlátozott szuverenitás).',
        },
        {
          question: 'Mikor verték le a prágai tavaszt?',
          options: ['1956-ban', '1961-ben', '1968-ban', '1979-ben'],
          answer: 2,
          explanation:
            '1968 augusztusában a Varsói Szerződés csapatai megszállták Csehszlovákiát. 1956 a magyar forradalom, 1979 Afganisztán.',
        },
        {
          question: 'Mi volt a helsinki záróokmány (1975) jelentősége?',
          options: [
            'Az NSZK és az NDK egyesítéséről döntött.',
            'Elismerte a határok sérthetetlenségét és az emberi jogok tiszteletét is rögzítette.',
            'Megszüntette a NATO-t.',
            'Betiltotta az atomfegyvereket.',
          ],
          answer: 1,
          explanation:
            'A záróokmány egyszerre erősítette meg a határok sérthetetlenségét és az emberi jogok tiszteletét, ez utóbbira az ellenzék hivatkozni tudott.',
        },
        {
          question: 'Mi volt az SDI, a „csillagháborús terv”?',
          options: [
            'Reagan elnök űrbeli rakétavédelmi rendszere.',
            'A szovjet űrprogram.',
            'Az ENSZ űrkutatási egyezménye.',
            'A NATO katonai terve Kuba ellen.',
          ],
          answer: 0,
          explanation:
            'Az 1983-ban meghirdetett amerikai Stratégiai Védelmi Kezdeményezést nevezte a sajtó csillagháborús tervnek.',
        },
        {
          question: 'Mikor vonult be a Szovjetunió Afganisztánba?',
          options: ['1968-ban', '1973-ban', '1979-ben', '1989-ben'],
          answer: 2,
          explanation:
            '1979 decemberében. 1989 a kivonulás befejezésének éve, 1968 pedig a prágai tavasz leverése.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Prágai tavasz', url: wiki('Prágai tavasz') },
        { label: 'Wikipédia: Helsinki Záróokmány', url: wiki('Helsinki Záróokmány') },
        { label: 'Wikipédia: Szovjet–afgán háború', url: wiki('Szovjet–afgán háború') },
      ],
    },
    {
      id: 'szovjet-tomb-osszeomlasa-nemet-egyesites',
      subject: 'tortenelem',
      unitId: 'tortenelem-hideghaboru',
      title: 'A szovjet tömb összeomlása és Németország egyesítése',
      level: 'kozep',
      requirement: {
        kozep:
          'Németország újraegyesítése, a Szovjetunió felbomlása, a kommunista diktatúrák bukása Közép-Európában',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szovjet rendszer a **tervgazdaság** kudarca, a fegyverkezés terhe és az ellenzéki mozgalmak miatt válságba került.',
            '**Gorbacsov** (1985-től) reformokat hirdetett, és nem avatkozott be katonai erővel a szövetséges országok belügyeibe.',
            'Lengyelországban a **Szolidaritás** (Wałęsa) szabad választásokat ért el; **1989-ben** Közép-Európa kommunista rendszerei sorra megbuktak, **november 9-én** megnyílt a **berlini fal**.',
            'A fal leomlása után alig egy évvel **Németország egyesült** (Kohl kancellár alatt, az NDK belépett az NSZK-ba).',
            '**1991-ben** feloszlott a **KGST** és a **Varsói Szerződés**, majd **a Szovjetunió felbomlott**; a hidegháború véget ért.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1980', text: 'A Szolidaritás megalakulása Lengyelországban.' },
            { date: '1985', text: 'Gorbacsov lesz az SZKP főtitkára.' },
            {
              date: '1989. június',
              text: 'Lengyelország: részben szabad választások, a Szolidaritás győz.',
            },
            { date: '1989. november 9.', text: 'A berlini fal megnyílik.' },
            {
              date: '1989. december',
              text: 'Máltai csúcstalálkozó (Bush–Gorbacsov).',
              emelt: true,
            },
            { date: '1989. december', text: 'Románia: Ceauşescu megbuktatása és kivégzése.' },
            { date: '1990', text: 'Németország egyesítése (október 3.).', emelt: true },
            { date: '1991', text: 'A KGST és a Varsói Szerződés megszűnése.' },
            { date: '1991. december', text: 'A Szovjetunió megszűnése.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért omlott össze a szovjet rendszer?' },
        {
          kind: 'keypoints',
          items: [
            '**Gazdaság**: a központi tervutasítások miatt a gazdaság lassan fejlődött, hiány volt a fogyasztási cikkekből, a technológiai lemaradás nőtt (hiánygazdaság).',
            '**Fegyverkezés**: az USA-val folytatott verseny a szovjet költségvetés nagy részét felemésztette. Reagan keményebb politikája tovább növelte a terhet.',
            '**Afganisztán**: a háború drága és népszerűtlen volt.',
            '**Ellenzéki mozgalmak** a tömb országaiban (lengyel Szolidaritás, csehszlovák Charta ’77, magyar ellenzék). A helsinki záróokmány emberi jogi rendelkezései erősítették őket.',
            '**Társadalmi elégedetlenség**: korlátozott szabadság, életszínvonal-különbség a Nyugathoz képest.',
          ],
        },
        { kind: 'heading', text: 'Gorbacsov reformjai' },
        {
          kind: 'text',
          text: '**1985-ben** Mihail **Gorbacsov** került az SZKP élére, és reformokat indított: a külpolitikában megegyezést kereső leszerelési politikát folytatott az amerikai elnökkel, **Reagannel**. A legfontosabb változás az volt, hogy Gorbacsov nem avatkozott be katonai erővel a szövetséges országok belügyeibe, így a kelet-közép-európai rendszerek elveszítették a szovjet katonai védelmet.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Gorbacsov két kulcsfogalma a **peresztrojka** (átalakítás: a gazdaság és a politikai rendszer reformja) és a **glasznoszty** (nyilvánosság: nyíltabb vita, szabadabb sajtó). A **Brezsnyev-doktrínát** gyakorlatilag feladta: a szocialista országok belügyeibe nem avatkozott be fegyverrel. **1987-ben** Reagannel megállapodott a közepes hatótávolságú rakéták felszámolásáról.',
        },
        { kind: 'heading', text: 'Lengyelország és a Szolidaritás' },
        {
          kind: 'text',
          text: '**1980 nyarán** a gdański hajógyárban sztrájk tört ki, amelynek vezetője **Lech Wałęsa** volt. Kényszerítették a hatóságokat, hogy engedélyezzenek egy független szakszervezetet, a **Szolidaritást**. A szervezet tízmilliós tömegmozgalommá nőtt. **1981 decemberében** a lengyel vezetés (Jaruzelski tábornok) hadiállapotot hirdetett, betiltotta a Szolidaritást. A szervezet a föld alatt tovább működött. **II. János Pál**, a lengyel származású pápa (1978-tól) és az egyház morális támogatása is fontos volt. **1989-ben** kerekasztal-tárgyalások után részben szabad választást tartottak (június), amelyet a Szolidaritás elsöprően megnyert; Közép-Európa első nem kommunista kormánya jött létre.',
        },
        { kind: 'heading', text: '1989: a kommunista diktatúrák bukása' },
        {
          kind: 'text',
          text: 'Magyarországon a rendszerváltoztatás tárgyalásos úton zajlott (lásd a magyar egységek leckéit). **1989 nyarán–őszén** a magyar–osztrák határ megnyitása után az NDK-ból tízezrek menekültek Nyugatra, az NDK-ban nagy tüntetések kezdődtek (Lipcse). **1989. november 9-én** megnyílt a berlini fal.',
        },
        {
          kind: 'keypoints',
          title: 'A kommunista rendszerek bukása 1989-ben',
          items: [
            '**Lengyelország**: június, a Szolidaritás választási győzelme, az első nem kommunista kormány.',
            '**Magyarország**: tárgyalásos átmenet (1989–1990).',
            '**NDK**: tömegtüntetések, november 9-én a fal megnyitása, a pártvezetés lemondása.',
            '**Csehszlovákia**: november 17-től tömegtüntetések, a „**bársonyos forradalom**”; Václav Havel lett az államfő (december).',
            '**Románia**: december, a temesvári felkelés után a tömegtüntetésekben megdőlt **Ceauşescu** diktatúrája; a diktátort elfogták és 1989. december 25-én kivégezték. Itt zajlott a legvéresebb átmenet.',
            '**Bulgária**: Zsivkov lemondatása (november).',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **máltai csúcstalálkozón** (1989. december) George Bush amerikai elnök és Gorbacsov találkozója a hidegháború végének jelképe lett.',
        },
        { kind: 'heading', text: 'Németország újraegyesítése' },
        {
          kind: 'text',
          text: 'A fal megnyitása után gyorsan felmerült az egyesítés kérdése. Az NDK-ban **1990 márciusában** szabad választást tartottak, és az egyesítést támogató erők győztek. **Helmut Kohl** nyugatnémet kancellár gyors egyesítést szorgalmazott. **1990 nyarán** gazdasági és pénzügyi unió jött létre (a nyugatnémet márka az NDK-ban is fizetőeszköz lett). A „kettő plusz négy” tárgyalásokon a két német állam és a négy egykori megszálló hatalom (USA, Szovjetunió, Nagy-Britannia, Franciaország) megállapodott: a Szovjetunió beleegyezett, hogy az egyesült Németország a NATO tagja lehessen, és a szovjet csapatok kivonulnak. Az NDK formálisan **belépett az NSZK-ba**, Berlin lett az ország fővárosa.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az egyesítés dátuma **1990. október 3.** Az egyesítés költségei, a keleti országrész gazdasági átalakítása évtizedes feladatot jelentett.',
        },
        { kind: 'heading', text: 'A Szovjetunió felbomlása' },
        {
          kind: 'text',
          text: 'A reformok megindították a szovjet tagköztársaságok önállósodását. A balti köztársaságok (Észtország, Lettország, Litvánia) függetlenséget követeltek. **1991 augusztusában** a keményvonalas kommunisták puccsot kíséreltek meg Moszkvában Gorbacsov ellen; a puccs néhány nap alatt megbukott (**Jelcin**, az orosz elnök ellenállásának is köszönhetően), a központi hatalom viszont végleg meggyengült. A tagköztársaságok sorra kikiáltották függetlenségüket, köztük **Ukrajna** is. **1991 decemberében** Oroszország, Ukrajna és Fehéroroszország vezetői megállapodtak a Szovjetunió megszüntetéséről, és megalapították a Független Államok Közösségét (FÁK). **Gorbacsov lemondott, a Szovjetunió megszűnt** (1991. december 25–26.). Jogutódja Oroszország lett, tizenöt független állam jött létre.',
        },
        {
          kind: 'text',
          text: '**1991-ben** a KGST és a Varsói Szerződés is feloszlott. A kétpólusú világ megszűnt: az USA maradt az egyetlen szuperhatalom. A volt szocialista országok a piacgazdaságra és a demokráciára való áttérést kezdték el, és NATO-hoz (Magyarország **1999-ben** csatlakozott) és az Európai Unióhoz igyekeztek csatlakozni.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Szolidaritás',
              text: 'A lengyel független szakszervezet (1980), amely tömegmozgalommá nőtt és hozzájárult a lengyel rendszerváltáshoz; vezetője Lech Wałęsa.',
            },
            {
              term: 'prágai tavasz',
              text: 'A csehszlovák kommunista vezetés reformkísérlete („emberarcú szocializmus”), amelyet a Szovjetunió és szövetségesei katonai beavatkozással állítottak le.',
            },
            {
              term: 'peresztrojka',
              text: 'Gorbacsov „átalakítás” programja: a gazdaság és a politikai rendszer korlátozott reformja.',
              emelt: true,
            },
            {
              term: 'glasznoszty',
              text: 'A „nyilvánosság” politikája: szabadabb vita, kevesebb cenzúra.',
              emelt: true,
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: Gorbacsov beszéde, Kohl nyilatkozata, a berlini fal megnyitása; mit mutat a szovjet tömb helyzetéről?',
            'Időrend: 1985, 1989, 1990, 1991; mi mikor történt?',
            'Rövid válasz: miért omlott össze a szovjet tömb? Hogyan egyesült Németország?',
            'Összehasonlítás: a közép-európai rendszerváltások különbségei (tárgyalásos Lengyelország és Magyarország, forradalmi Románia).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a fal ledöntése és Németország egyesítése egy időben volt: a fal megnyitása 1989 novemberében, az egyesítés 1990 októberében történt. Másik hiba: a Varsói Szerződést a Szovjetunió összeomlása utánra tenni; mindkettő 1991-ben szűnt meg. A Szovjetunió nem háborúban, hanem belső válságban és megegyezéssel oszlott fel.',
        },
        {
          kind: 'tip',
          text: 'A bukás okai három csoportba oszthatók: gazdasági (tervgazdaság kudarca, fegyverkezés), politikai (Gorbacsov reformjai, a szövetséges országok feletti szovjet felügyelet feladása) és társadalmi (ellenzéki mozgalmak, szabadságvágy). Ezt a hármast használd az esszé vázlatában.',
        },
      ],
      topicMatch: [
        'hidegháború vége',
        'gorbacsov',
        'német egység',
        'német kérdés',
        'ceauşescu',
        'keleti tömb',
      ],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Ki volt a lengyel Szolidaritás vezetője?',
          options: ['Jaruzelski', 'Lech Wałęsa', 'Václav Havel', 'Gorbacsov'],
          answer: 1,
          explanation:
            'A Szolidaritás vezetője Lech Wałęsa volt. Jaruzelski a lengyel pártvezető, aki hadiállapotot hirdetett, Havel a csehszlovák ellenzék vezetője.',
        },
        {
          question: 'Melyik évben nyílt meg a berlini fal?',
          options: ['1985', '1991', '1989', '1990'],
          answer: 2,
          explanation:
            '1989. november 9-én nyílt meg a fal. 1990-ben egyesült Németország, 1991-ben szűnt meg a Szovjetunió.',
        },
        {
          question: 'Melyik kommunista vezetőt végezték ki 1989 decemberében?',
          options: ['Honecker', 'Zsivkov', 'Ceauşescu', 'Jaruzelski'],
          answer: 2,
          explanation:
            'Romániában a Ceauşescu-diktatúrát erőszakos fordulat döntötte meg, a diktátort 1989. december 25-én kivégezték.',
        },
        {
          question: 'Hogyan egyesült Németország?',
          options: [
            'Az NSZK megtámadta az NDK-t.',
            'A két állam háborúban egyesült.',
            'Az ENSZ döntött az egyesítésről.',
            'Az NDK csatlakozott az NSZK-hoz, a négy megszálló hatalom egyetértésével.',
          ],
          answer: 3,
          explanation:
            'Az NDK az NSZK-hoz csatlakozott, a „kettő plusz négy” tárgyalásokon a volt megszálló hatalmak beleegyezésével.',
        },
        {
          question: 'Mit jelent a glasznoszty?',
          options: [
            'Gorbacsov nyilvánosságra és szabadabb vitára épülő politikáját.',
            'A szovjet gazdaság átalakítását.',
            'A szovjet csapatok kivonását Afganisztánból.',
            'A lengyel szakszervezet nevét.',
          ],
          answer: 0,
          explanation:
            'A glasznoszty a nyilvánosság politikája. A gazdaság és a rendszer átalakítása a peresztrojka volt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A Szovjetunió felbomlása', url: wiki('A Szovjetunió felbomlása') },
        { label: 'Wikipédia: Németország újraegyesítése', url: wiki('Németország újraegyesítése') },
        {
          label: 'Wikipédia: Szolidaritás (szakszervezet)',
          url: wiki('Szolidaritás szakszervezet'),
        },
      ],
    },
    {
      id: 'jugoszlavia-csehszlovakia-felbomlasa',
      subject: 'tortenelem',
      unitId: 'tortenelem-hideghaboru',
      title: 'Jugoszlávia felbomlása és Csehszlovákia szétválása',
      level: 'kozep',
      requirement: {
        kozep: 'Jugoszlávia felbomlása, a délszláv háború',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Jugoszlávia hat köztársaságból álló szocialista **szövetségi állam** volt, amelyet a kommunista vezető egy erős kézzel tartott egyben. **1980-ban** meghalt a vezetője, a gazdasági válság és a nacionalizmus megerősödött.',
            '**1991. június 25-én** Szlovénia és Horvátország kikiáltotta függetlenségét: ez a **délszláv válság** kezdete. Rövid szlovén háború után Horvátországban és (1992–1995) Bosznia-Hercegovinában véres háború folyt.',
            'A **daytoni megállapodás** (1995) zárta le a boszniai háborút.',
            'Csehszlovákia ezzel szemben **békésen** szétvált: **1993. január 1-jétől** Csehország és Szlovákia önálló állam.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1980', text: 'A jugoszláv vezető halála.' },
            {
              date: '1991. június',
              text: 'Szlovénia és Horvátország függetlenséget kiált ki; kitör a délszláv háború.',
            },
            {
              date: '1992',
              text: 'Bosznia-Hercegovina függetlenségi népszavazása, a boszniai háború kezdete.',
            },
            { date: '1992', text: 'Csehszlovákia felbomlásáról szóló döntés.', emelt: true },
            { date: '1993. január 1.', text: 'Csehország és Szlovákia önálló állam.' },
            { date: '1995', text: 'A daytoni békemegállapodás.' },
            {
              date: '1998–1999',
              text: 'A koszovói háború; a NATO bombázza Szerbiát (1999).',
              emelt: true,
            },
            { date: '2008', text: 'Koszovó kikiáltja függetlenségét.', emelt: true },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Jugoszlávia: egy sokféle ország' },
        {
          kind: 'text',
          text: 'Jugoszlávia az első világháború után jött létre (a Szerb–Horvát–Szlovén Királyság, 1929-től Jugoszlávia). A második világháború után a partizánvezér kommunista szövetségi államot hozott létre hat köztársasággal: **Szlovénia, Horvátország, Bosznia-Hercegovina, Szerbia, Montenegró, Macedónia**. Szerbián belül két tartomány volt, a **Vajdaság** és az albánok lakta **Koszovó**. Az ország népei különböző nyelven beszéltek és más-más vallásúak voltak (katolikusok, ortodoxok, muszlimok), és a második világháborúban véres belső konfliktusok zajlottak közöttük.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Tito',
              text: 'Josip Broz Tito, Jugoszlávia vezetője 1945-től haláláig, 1980-ig. **1948-ban** szembefordult Sztálinnal (Jugoszláviát kizárták a szovjet vezette Kominformból), és saját utat követett: munkásönigazgatás, nyitás Nyugat felé, az **el nem kötelezettek mozgalmának** egyik vezetője. Tekintélye egyben tartotta a föderációt.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A felbomlás okai' },
        {
          kind: 'keypoints',
          items: [
            '**A vezető halála (1980)** után nem volt olyan vezető, akit az egész ország elfogadott.',
            '**Gazdasági válság** az 1980-as években: adósság, infláció; a gazdagabb észak (Szlovénia, Horvátország) nem akart a szegényebb déli területeket támogatni.',
            '**Nacionalizmus**: a kommunizmus jelentőségének csökkenésével a nemzeti ellentétek előtérbe kerültek. Szerbiában **Slobodan Milošević** a szerb nemzeti érdekeket hangsúlyozta, és 1989-ben csökkentette Koszovó autonómiáját.',
            '**A kelet-európai rendszerváltások hatása**: 1990-ben a köztársaságokban többpárti választásokat tartottak, amelyeket sok helyen nacionalista pártok nyertek.',
          ],
        },
        { kind: 'heading', text: 'A háborúk' },
        {
          kind: 'text',
          text: '**1991. június 25-én** Szlovénia és Horvátország kikiáltotta függetlenségét. **Szlovéniában** csak rövid fegyveres összecsapás volt, a Jugoszláv Néphadsereg kivonult. **Horvátországban** viszont a szerb kisebbség és a horvát kormány között háború tört ki (1991–1995; például Vukovár ostroma 1991-ben). **Macedónia** 1991-ben békésen függetlenné vált.',
        },
        {
          kind: 'text',
          text: '**Bosznia-Hercegovinában** három nagy népcsoport élt: bosnyákok (muszlimok), szerbek és horvátok. Az **1992-es** függetlenségi népszavazás után kitört a háború (1992–1995). Jellemzője az **etnikai tisztogatás** (a lakosság erőszakos elűzése), Szarajevó több évig tartó ostroma és a tömeges menekülés. A háború legsúlyosabb eseménye a **srebrenicai** mészárlás volt (1995 júliusa): mintegy nyolcezer boszniai muszlim férfit és fiút gyilkoltak meg. A háború végén a NATO légi csapásokat mért a boszniai szerb pozíciókra. **1995 novemberében** a daytoni (Wright-Patterson) légibázison paraffálták, **decemberében** Párizsban írták alá a **daytoni békemegállapodást**: Bosznia-Hercegovina egységes állam maradt, két részre (entitásra) osztva: a bosnyák–horvát Föderációra és a Boszniai Szerb Köztársaságra. A háborúban sok százezer ember vált menekültté; a halálos áldozatok számáról a becslések eltérnek (általában több tízezer és százezer közötti nagyságrendet adnak).',
        },
        {
          kind: 'text',
          text: 'Szerbia és Montenegró egy ideig még fennállt közös államként (Jugoszláv Szövetségi Köztársaság), majd Montenegró 2006-ban önálló lett.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Koszovóban** az albán többség és a szerb vezetés konfliktusa **1998–1999-ben** fegyveres harccá fajult. **1999 tavaszán** a **NATO** légi csapásokat mért Szerbiára (ENSZ-felhatalmazás nélkül), a szerb erők kivonultak. Koszovót ENSZ-igazgatás alá helyezték, **2008-ban** kikiáltotta függetlenségét; ezt több ország elismerte, Szerbia és több más állam nem.',
        },
        {
          kind: 'compare',
          title: 'Két szétesés összevetése',
          columns: ['Csehszlovákia', 'Jugoszlávia'],
          rows: [
            {
              label: 'Módja',
              cells: [
                'békés, tárgyalásos szétválás („bársonyos válás”)',
                'háborúk sorozata (1991–1995, 1998–1999)',
              ],
            },
            {
              label: 'Időpont',
              cells: ['1992 döntés, 1993. január 1.', '1991-től több lépésben'],
            },
            {
              label: 'Utódállamok',
              cells: [
                'Csehország, Szlovákia',
                'Szlovénia, Horvátország, Bosznia-Hercegovina, Macedónia, Szerbia, Montenegró',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Csehszlovákia szétválása' },
        {
          kind: 'text',
          text: 'Csehszlovákia **1918-ban** jött létre. **1989-ben** a „bársonyos forradalom” (Václav Havel) lezárta a kommunista uralmat, de a cseh és a szlovák politikai vezetők között egyre nagyobb lett a nézetkülönbség az állam szerkezetéről és a gazdasági reformról. Az **1992-es** választások után a cseh és a szlovák vezetés megállapodott a szétválásról. **1993. január 1-jétől** Csehország és **Szlovákia** önálló állam lett; a szétválás békés volt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az 1992-es dátum az emelt szintű követelményben **Csehszlovákia felbomlása**. Az utódállamok később csatlakoztak a NATO-hoz és az Európai Unióhoz.',
        },
        {
          kind: 'text',
          text: 'A Szovjetunió felbomlása után **Ukrajna** is független állam lett (1991), amely az egykori Szovjetunió második legnépesebb tagköztársasága volt.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet vagy térkép: mely utódállamok jöttek létre Jugoszláviából? Hol van Szlovákia, Ukrajna, Koszovó?',
            'Rövid válasz: mi vezetett Jugoszlávia felbomlásához? Miért különbözött Csehszlovákia szétválása?',
            'Időrend: 1991, 1993, 1995.',
            'Fogalmak: etnikai tisztogatás, daytoni megállapodás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Csehszlovákia is háborúval esett szét, vagy hogy a vezető halála egyedül okozta a felbomlást. Jugoszlávia felbomlásának több oka volt (gazdasági válság, nacionalizmus, a rendszerváltások hatása). Ne keverd a daytoni egyezményt (1995, Bosznia) a későbbi koszovói háborúval (1998–1999).',
        },
        {
          kind: 'tip',
          text: 'Egyszerű vázlat: ok (a vezető halála, válság, nacionalizmus), folyamat (1991 Szlovénia és Horvátország, 1992–95 Bosznia, 1998–99 Koszovó), következmény (hét utódállam, menekültek, a nemzetközi közösség beavatkozása: NATO, ENSZ, Dayton).',
        },
      ],
      topicMatch: ['rendszerváltozás utáni európa', 'hidegháború vége', 'keleti tömb'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question:
            'Melyik évben tört ki a délszláv háború, miután Szlovénia és Horvátország kimondta függetlenségét?',
          options: ['1989', '1990', '1991', '1995'],
          answer: 2,
          explanation:
            '1991. június 25-én mondta ki függetlenségét Szlovénia és Horvátország, ekkor kezdődött a délszláv háború.',
        },
        {
          question: 'Melyik megállapodás zárta le a boszniai háborút?',
          options: [
            'A párizsi béke',
            'A helsinki záróokmány',
            'A daytoni megállapodás',
            'A trianoni békeszerződés',
          ],
          answer: 2,
          explanation:
            'A daytoni megállapodás (1995) vetett véget a boszniai háborúnak, és két részre osztott, egységes államot hozott létre.',
        },
        {
          question: 'Miben különbözött Csehszlovákia felbomlása Jugoszláviáétól?',
          options: [
            'A szétválás békés, tárgyalásos úton történt.',
            'Szintén háború kísérte.',
            'Az ENSZ osztotta fel.',
            'A Szovjetunió erőszakkal szétverte.',
          ],
          answer: 0,
          explanation: 'Csehszlovákia 1993. január 1-jén békésen vált Csehországra és Szlovákiára.',
        },
        {
          question: 'Mi volt a Jugoszlávia felbomlásának egyik fő oka?',
          options: [
            'A vezető 1980-as halála után a nacionalizmus és a gazdasági válság elmélyítette az ellentéteket.',
            'Az ország megtámadta Olaszországot.',
            'A Szovjetunió megszállta Jugoszláviát.',
            'Az ENSZ feloszlatta az országot.',
          ],
          answer: 0,
          explanation:
            'A vezető 1980-ban meghalt, és a gazdasági válság, valamint a nacionalizmus erősödése szétfeszítette a föderációt.',
        },
        {
          question: 'Melyik évben szűnt meg Csehszlovákia önálló államként?',
          options: ['1989', '1990', '1991', '1993'],
          answer: 3,
          explanation:
            'A szétválás 1993. január 1-jén lépett életbe; a döntést 1992-ben hozták meg.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Jugoszlávia felbomlása', url: wiki('Jugoszlávia felbomlása') },
        { label: 'Wikipédia: Délszláv háborúk', url: wiki('Délszláv háborúk') },
        { label: 'Wikipédia: Csehszlovákia szétválása', url: wiki('Csehszlovákia szétválása') },
      ],
    },
  ],
};

export default unit;
