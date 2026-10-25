import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 5.4 (Állam, ideológia és gazdaság a két világháború között) and 5.7 (A második világháború). */
const unit: GuideUnit = {
  id: 'diktaturak-masodik-vilaghaboru',
  subject: 'tortenelem',
  order: 54,
  title: 'Diktatúrák és a második világháború',
  requirementRef:
    '5.4 Állam, ideológia és gazdaság a két világháború között, 5.7 A második világháború',
  intro:
    'Hogyan lett Hitlerből és Sztálinból korlátlan úr, mi volt a fasizmus, és hogyan vezetett az agresszió és a megbékítés politikája a második világháborúhoz? A nemzetiszocialista Németország, a sztálini Szovjetunió, a fasiszta Olaszország, a háború kitörése, menete, jellege és vége.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (5. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'totális állam',
        'egypártrendszer',
        'személyi kultusz',
        'koncepciós per',
        'GULAG',
        'államosítás',
        'kollektivizálás',
        'kulák',
        'tervgazdaság',
        'holodomor',
        'New Deal',
        'fasizmus',
        'nemzetiszocializmus',
        'fajelmélet',
        'antiszemitizmus',
        'Führer',
        'SS',
        'Anschluss',
        'tengelyhatalmak',
        'szövetségesek',
        'totális háború',
        'hadigazdaság',
        'koncentrációs tábor',
        'partizán',
        'Vörös Hadsereg',
        'hadifogság',
        'háborús bűn',
        'Molotov–Ribbentrop-paktum',
        'jaltai konferencia',
      ],
      emelt: [
        'Harmadik Birodalom',
        'CSEKA/NKVD',
        'duce',
        'korporáció',
        'kolhoz',
        'sztahanovizmus',
        'protekcionizmus',
        'minimálbér',
        'izolacionizmus',
        'Atlanti Charta',
        'a katyńi vérengzés',
        'kollaboráns',
        'jegyrendszer',
        'nürnbergi törvények',
      ],
    },
    people: {
      kozep: ['Lenin', 'Sztálin', 'Hitler', 'Mussolini', 'Roosevelt', 'Churchill', 'de Gaulle'],
      emelt: [
        'Hindenburg',
        'Trockij',
        'Beneš',
        'Goebbels',
        'Berija',
        'Keynes',
        'Rommel',
        'Zsukov',
        'Eisenhower',
      ],
    },
    dates: {
      kozep: [
        '1922',
        '1929',
        '1933',
        '1938',
        '1939',
        '1939. augusztus 23.',
        '1939. szeptember 1.',
        '1940',
        '1941. április',
        '1941. június 22.',
        '1941. december 7.',
        '1943. február',
        '1944. június 6.',
        '1945. április',
        '1945. május 9.',
        '1945. augusztus 6.',
        '1939–45',
      ],
      emelt: [
        '1936 Berlin–Róma tengely',
        '1939–40 szovjet–finn téli háború',
        '1940 angliai csata',
        '1942 El-Alamein, Midway',
        '1943 teheráni csúcstalálkozó',
        '1944. augusztus Románia átállása a szövetségesekhez',
        '1945 jaltai és potsdami konferenciák',
        '1945. szeptember 2. Japán kapitulál',
      ],
    },
    places: {
      kozep: [
        'Szovjetunió',
        'Moszkva',
        'Leningrád',
        'Berlin',
        'Szibéria (munkatáborok)',
        'Kolima-vidék',
        'New York',
        'Lengyelország',
        'Csehszlovákia',
        'Jugoszlávia',
        'Románia',
        'Sztálingrád',
        'Normandia',
        'Pearl Harbor',
        'Hirosima',
        'Jalta',
        'Drezda',
      ],
      emelt: ['Danzig', 'Szudéta-vidék', 'Vichy', 'Kurszk', 'Varsó'],
    },
  },
  pages: [
    {
      id: 'nemzetiszocialista-nemetorszag',
      subject: 'tortenelem',
      unitId: 'diktaturak-masodik-vilaghaboru',
      title: 'A nemzetiszocialista Németország',
      level: 'kozep',
      requirement: { kozep: 'A nemzetiszocialista Németország' },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A világgazdasági válság után a **nemzetiszocialista párt (NSDAP)** a legnagyobb párt lett; **1933. január 30-án** Hitlert nevezték ki kancellárrá.',
            '1933–34 alatt gyorsan **egypártrendszer** és **vezéri diktatúra** épült ki: Hitler lett a **Führer**.',
            'Az ideológia magja a **fajelmélet**, az **antiszemitizmus**, az **antikommunizmus** és az **élettér** (terjeszkedés keleten) követelése.',
            'A rendszer **propagandára, terrorra** (SS, Gestapo, koncentrációs táborok) és **fegyverkezésre** épült; a munkanélküliség csökkent, de a szabadság megszűnt.',
            'Hitler külpolitikája a versailles-i rend lebontása volt: **1938-ban Ausztria bekebelezése (Anschluss)**, majd a csehszlovák területek megszerzése.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nemzetiszocializmus',
              text: 'A német fasiszta jellegű totalitárius ideológia és mozgalom: rasszista, antiszemita, antiliberális, antikommunista; a „nemzeti közösség” nevében az egyén teljes alárendelését követeli.',
            },
            {
              term: 'Führer',
              text: 'Vezér. Hitler címe 1934-től: a párt és az állam korlátlan ura (vezérelv).',
            },
            {
              term: 'SS',
              text: 'A nemzetiszocialista párt elit, fekete egyenruhás fegyveres szervezete (Himmler vezette), amely a terror, a koncentrációs táborok és később a népirtás fő végrehajtója lett.',
            },
            {
              term: 'Anschluss',
              text: 'Ausztria csatlakoztatása (bekebelezése) a Német Birodalomhoz 1938 márciusában.',
            },
            {
              term: 'Harmadik Birodalom',
              text: 'A nemzetiszocialista Németország önmeghatározása (1933–1945), a Német-római Birodalom és a Hohenzollern-császárság folytatójaként.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az útja a hatalomig' },
        {
          kind: 'text',
          text: 'Az első világháborúban vesztes Németország demokratikus köztársaság lett (weimari köztársaság), de a versailles-i béke terhei (jóvátétel, területvesztés, hadsereg korlátozása) megalázónak tűntek sokaknak. A **világgazdasági válság** (1929) munkanélküliek millióit hozta: 1932-ben hatmillió körüli volt a számuk. A kiábrándult tömegek a radikális pártok felé fordultak.',
        },
        {
          kind: 'text',
          text: 'A **Hitler** vezette **NSDAP** (Nemzetiszocialista Német Munkáspárt) a „munka és kenyér”, a Versailles elleni harc és a zsidók, valamint a kommunisták elleni gyűlölet jelszavaival 1932 nyarán a legerősebb párt lett (kb. 37 százalék). Hitler korábban, **1923-ban** puccsot kísérelt meg Münchenben, ezért börtönbe került, ott írta a *Harcom* (Mein Kampf) című könyvét. Ezután a törvényes úton való hatalomszerzésre váltott. **1933. január 30-án** a köztársasági elnök kancellárrá nevezte ki, mert a konzervatív politikusok úgy hitték, hogy „megfékezhetik” őt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kinevezéskor Hitler kormányában még csak három nemzetiszocialista miniszter ült. A kancellárt kinevező köztársasági elnök, **Paul von Hindenburg** tábornagy, az első világháború hőse 1925 óta töltötte be tisztét.',
        },
        { kind: 'heading', text: 'A diktatúra kiépítése (1933–1934)' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1933. február',
              text: 'A Reichstag felgyújtása: Hitler a kommunistákat vádolta, és rendkívüli rendelettel felfüggesztette az alapvető szabadságjogokat.',
            },
            {
              date: '1933. március',
              text: 'A felhatalmazási törvény: a kormány a parlament nélkül is hozhat törvényt. Ezzel a Reichstag lényegében lemondott a hatalmáról.',
            },
            {
              date: '1933 tavasza–nyara',
              text: 'A szakszervezetek feloszlatása, a pártok betiltása vagy önfeloszlatása. Létrejött az **egypártrendszer**. Megnyíltak az első koncentrációs táborok (Dachau).',
            },
            {
              date: '1934. június 30.',
              text: '„A hosszú kések éjszakája”: az SA vezetőit (köztük Röhmöt) és más ellenfeleket a Hitler és az SS meggyilkoltatta.',
            },
            {
              date: '1934. augusztus',
              text: 'Az idős köztársasági elnök halála után Hitler egyesítette a kancellári és az elnöki tisztet: **Führer**, a katonák személyes esküt tettek rá.',
            },
          ],
        },
        { kind: 'heading', text: 'Ideológia és mindennapok' },
        {
          kind: 'text',
          text: 'A **fajelmélet** szerint az emberiség „fajokra” oszlik, a legfelsőbb az „árja” (germán) faj, a zsidók és a romák „alsóbbrendűek”. Az **antiszemitizmus** a rendszer központi eleme volt: 1933-tól boikott, jogfosztás, 1935-ben törvényekkel megfosztották a zsidókat az állampolgárságtól, és megtiltották a „vegyes” házasságokat. A folyamat végül a holokauszthoz vezetett (lásd külön tananyag).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **nürnbergi törvények** (1935) a „birodalmi állampolgárságot” a „német vérhez” kötötték, és bűncselekménnyé tették a zsidók és „árjak” közti házasságot.',
        },
        {
          kind: 'text',
          text: 'A **totális állam** mindent átfogott. A **propaganda** (a rádió, a film, a tömeggyűlések; a propagandaminisztérium) a Führer-kultuszt építette. 1933 májusában máglyán égették az „ellenséges” könyveket. A gyerekeket a *Hitlerjugend* nevelte, az egyházakat és a sajtót ellenőrizték. A rendszer ellenfeleit a **Gestapo** (titkosrendőrség) és az **SS** üldözte, és **koncentrációs táborba** hurcolta.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Goebbels',
              text: 'A propagandaminiszter (1933-tól); a sajtót, a rádiót és a filmet a rendszer szolgálatába állította.',
              emelt: true,
            },
            {
              name: 'Hindenburg',
              text: 'Az első világháborús tábornagy, 1925–1934 között köztársasági elnök. Ő nevezte ki Hitlert kancellárrá.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'Gazdaság és külpolitika' },
        {
          kind: 'text',
          text: 'A nemzetiszocialista gazdaságpolitika a **munkanélküliség leszorítására** épült: közmunkák (például az autópálya-építés) és főleg a **fegyverkezés** révén 1930-as évek közepére a munkanélküliség jelentősen csökkent. A gazdaságot az állam irányította, a magántulajdon megmaradt, de a vállalatokat a hadigazdasági célokhoz kötötték. 1936-tól a **négyéves terv** a háborúra való felkészülést szolgálta. A lakosság egy része ezért a rendszer sikerének tekintette a javulást.',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1935',
              text: 'Bevezették az általános hadkötelezettséget, megszegve a versailles-i békét.',
            },
            {
              date: '1936',
              text: 'A német csapatok bevonultak a demilitarizált Rajna-vidékre. A nyugati hatalmak nem léptek fel.',
            },
            {
              date: '1938. március',
              text: '**Anschluss**: Ausztria beolvasztása a Német Birodalomba.',
            },
            {
              date: '1938. szeptember',
              text: 'A müncheni egyezmény: Csehszlovákia német lakosú határvidékét Németországhoz csatolták (lásd a háború kitöréséről szóló leckét).',
            },
            {
              date: '1939. március',
              text: 'A német csapatok megszállták Csehország maradékát; Szlovákia német bábállam lett.',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'A weimari köztársaság és a nemzetiszocialista Németország',
          columns: [
            'Weimari köztársaság (1919–1933)',
            'Nemzetiszocialista Németország (1933–1945)',
          ],
          rows: [
            {
              label: 'Államforma',
              cells: [
                'demokratikus köztársaság, többpártrendszer',
                'vezéri diktatúra, egypártrendszer',
              ],
            },
            {
              label: 'Alapjogok',
              cells: ['alkotmány védi őket', 'felfüggesztették, a terror vette át a helyüket'],
            },
            {
              label: 'Versailles',
              cells: ['teljesítési politika, tárgyalások', 'egyoldalú felrúgás, terjeszkedés'],
            },
            { label: 'Zsidók', cells: ['egyenjogúak', 'jogfosztás, üldözés'] },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (Hitler beszéde, a felhatalmazási törvény szövege, plakát): milyen eszközökkel szerezte meg és tartotta meg a hatalmat?',
            'Fogalmak: Führer, SS, fajelmélet, Anschluss, totális állam.',
            'Kifejtés: hogyan épült ki a diktatúra 1933–34-ben, és mi volt a rendszer tömegbázisa?',
            'Összehasonlítás a sztálini Szovjetunióval: közös vonások és különbségek (lásd a következő leckéket).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy Hitler puccsal vagy választási csalással került hatalomra. 1933. január 30-án törvényesen, kinevezéssel lett kancellár, a diktatúrát utána építette ki (Reichstag-tűz, felhatalmazási törvény). Ne keverd a „nemzetiszocializmus” és a „kommunizmus” fogalmát, bár mindkettő totalitárius volt.',
        },
        {
          kind: 'tip',
          text: 'Kifejtésnél a diktatúra eszközeit három csoportban sorold: **jogi** (rendkívüli rendelet, felhatalmazási törvény, pártok betiltása), **erőszak** (SS, Gestapo, koncentrációs tábor), **befolyásolás** (propaganda, ifjúsági szervezetek, Führer-kultusz), és hozz mellé gazdasági magyarázatot (munkahelyteremtés, fegyverkezés).',
        },
      ],
      topicMatch: [
        'nemzetiszocializmus',
        'nemzetiszocialista fajelmélet',
        '=németország',
        'németország terjeszkedése',
      ],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor nevezték ki Hitlert német kancellárrá?',
          options: [
            '1923. november 9.',
            '1932. július 31.',
            '1933. január 30.',
            '1934. augusztus 2.',
          ],
          answer: 2,
          explanation:
            '1933. január 30-án. 1923-ban volt a müncheni puccskísérlet, 1934 augusztusában az idős köztársasági elnök meghalt, és Hitler a Führer lett.',
        },
        {
          question: 'Mit jelentett az Anschluss?',
          options: [
            'Csehszlovákia feldarabolását.',
            'A Rajna-vidék megszállását.',
            'A felhatalmazási törvény elfogadását.',
            'Ausztria csatlakoztatását Németországhoz 1938-ban.',
          ],
          answer: 3,
          explanation:
            'Az Anschluss Ausztria beolvasztása volt 1938 márciusában. A Rajna-vidék megszállása 1936-ban történt.',
        },
        {
          question: 'Melyik állítás igaz a nemzetiszocialista gazdaságpolitikára?',
          options: [
            'Megszüntették a magántulajdont.',
            'A fegyverkezés és a közmunkák csökkentették a munkanélküliséget.',
            'Szabad piacgazdaság volt állami beavatkozás nélkül.',
            'Tervgazdaságot vezettek be, a termelőeszközöket államosítva.',
          ],
          answer: 1,
          explanation:
            'A magántulajdon megmaradt, de az állam irányította a gazdaságot, és a fegyverkezés, valamint a közmunkák révén csökkent a munkanélküliség. A tervgazdaság és az államosítás a szovjet rendszerre jellemző.',
        },
        {
          question: 'Mit tett lehetővé a felhatalmazási törvény (1933)?',
          options: [
            'Hogy a kormány a parlament jóváhagyása nélkül is törvényeket hozzon.',
            'A pártok szabad működését.',
            'Hitler lemondását.',
            'A birodalmi gyűlés kibővítését.',
          ],
          answer: 0,
          explanation:
            'A törvény a kormányt, vagyis a gyakorlatban Hitlert a parlamentet megkerülő törvényhozó hatalommal ruházta fel.',
        },
        {
          question: 'Ki volt a nemzetiszocialista Németország propagandaminisztere?',
          options: ['Himmler', 'Goebbels', 'Göring', 'Hindenburg'],
          answer: 1,
          explanation:
            'Joseph Goebbels. Himmler az SS vezetője volt, Hindenburg a köztársasági elnök.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nemzetiszocializmus', url: wiki('Nemzetiszocializmus') },
        { label: 'Wikipédia: Adolf Hitler', url: wiki('Adolf Hitler') },
        { label: 'Wikipédia: Harmadik Birodalom', url: wiki('Harmadik Birodalom') },
      ],
    },
    {
      id: 'sztalini-szovjetunio',
      subject: 'tortenelem',
      unitId: 'diktaturak-masodik-vilaghaboru',
      title: 'A kommunista Szovjetunió: a sztálini diktatúra',
      level: 'kozep',
      requirement: { kozep: 'A kommunista Szovjetunió' },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1922**: megalakult a **Szovjetunió**. Lenin halála (1924) után a hatalmi harcot **Sztálin** nyerte meg.',
            'Sztálin „forradalmat felülről” hajtott végre: **tervgazdaság**, kényszeres iparosítás (ötéves tervek), a mezőgazdaság erőszakos **kollektivizálása**.',
            'A kollektivizálás és a beszolgáltatás okozta az **1932–33-as éhínséget** (Ukrajnában *holodomor*).',
            'A rendszer fenntartója a **terror** volt: koncepciós perek, a **GULAG**-munkatáborok, a „nagy tisztogatás” (1936–38).',
            'A **személyi kultusz** Sztálint a nép „atyjává” emelte.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'tervgazdaság',
              text: 'A termelést nem a piac, hanem az állam központi (ötéves) terve irányítja; a legtöbb termelőeszköz állami tulajdonú (államosítás).',
            },
            {
              term: 'kollektivizálás',
              text: 'A parasztgazdaságok erőszakos egyesítése nagy közös gazdaságokba. A gazdagabb parasztokat (**kulák**) megbélyegezték, elüldözték vagy elítélték.',
            },
            {
              term: 'koncepciós per',
              text: 'Előre eldöntött ítéletű, kitalált vádakra épülő politikai per, kínzással kicsikart vallomásokkal.',
            },
            {
              term: 'GULAG',
              text: 'A szovjet kényszermunka-táborok rendszere (Szibéria, Kolima-vidék); a foglyok millióin keresztül fontos gazdasági szerepet is játszott.',
            },
            {
              term: 'személyi kultusz',
              text: 'A vezér személyének istenítése: szobrok, plakátok, jelszavak, a történelem átírása.',
            },
            {
              term: 'CSEKA/NKVD',
              text: 'A szovjet politikai titkosrendőrség elődje és utódja (1917-től, majd 1934-től a belügyi népbiztosság); a terror eszköze.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan jött létre a Szovjetunió?' },
        {
          kind: 'text',
          text: 'Az 1917-es bolsevik hatalomátvétel és az 1918–1921 közötti polgárháború után **Lenin** vezetésével új állam jött létre. **1922-ben** alakult meg a **Szovjetunió** (Oroszország, Ukrajna, Belorusszia és a transzkaukázusi köztársaságok). A háborús kommunizmus után **1921-ben** az Új Gazdaságpolitika (NEP) engedélyezte a kisvállalkozást és a szabad parasztkereskedést, így a gazdaság magához tért. A pártot, az állam egyetlen, mindent ellenőrző erejét azonban nem adták fel: **egypártrendszer** épült ki.',
        },
        {
          kind: 'text',
          text: 'Lenin 1924-es halála után a pártfőtitkári posztot betöltő **Sztálin** kiszorította a vetélytársait, egymás után félreállítva a párton belüli rivális csoportokat.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A legveszélyesebb rivális, **Trockij** a forradalom és a Vörös Hadsereg szervezője volt; 1929-ben kiutasították az országból, 1940-ben Mexikóban Sztálin ügynöke megölte.',
        },
        { kind: 'heading', text: 'Forradalom felülről: tervgazdaság' },
        {
          kind: 'text',
          text: 'Az **1928**-ban induló **ötéves tervek** célja a gyors, nehézipar-központú iparosítás volt. Az államosított iparban erőltetett ütemű termelést írtak elő (új ipari városok, erőművek, gyárak). A munkásokat a „hőstettek” propagandája hajtotta.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A bányász **Sztahanov** nevéhez kötött **sztahanovizmus** a normák többszörös túlteljesítésének propagandamozgalma volt (1935-től).',
        },
        {
          kind: 'text',
          text: 'A **kollektivizálás** (1929–30-tól) a parasztság kemény megrendszabályozása volt: a földet és a jószágot közös gazdaságokba terelték, a gazdagabb paraszt, a **kulák** osztályellenség lett, sok százezer embert kitelepítettek Szibériába vagy más távoli vidékekre. A kötelező beszolgáltatás miatt a gabona jó része a városokba és exportra ment.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A közös gazdaságok neve a **kolhoz** volt (kollektív gazdaság); az állami gazdaság neve a szovhoz.',
        },
        {
          kind: 'keypoints',
          title: 'Az éhínség',
          items: [
            '**1932–33**: éhínség a Szovjetunió nagy részén (Ukrajna, Észak-Kaukázus, Kazahsztán, Volga-vidék). Ukrajnában **holodomor** (éhhalál) a neve.',
            'A fő ok nem természeti csapás, hanem a kollektivizálás és a gabona-elrekvirálás politikája volt.',
            'Az áldozatok számát milliós nagyságrendűre becsülik, a pontos szám vitatott. Abban is vita van, hogy a népirtás fogalmába tartozik-e.',
          ],
        },
        { kind: 'heading', text: 'A terror' },
        {
          kind: 'text',
          text: 'Az 1930-as években Sztálin a párton belüli ellenfeleit és a lehetséges ellenzéket félresöpörte. **1936–1938** között volt a **nagy tisztogatás** (nagy terror): a bolsevik vezetők (az „öreg bolsevikok”) koncepciós pereiben kínzással kicsikart vallomásokra hivatkozva halálos ítéleteket hoztak, a hadsereg tisztikarát megtizedelték, százezreket végeztek ki, még többet **GULAG**-táborba hurcoltak (Szibéria, Kolima-vidék). Az áldozatok pontos száma vitatott, de a kutatók szerint milliós nagyságrendű lehetett az üldözöttek száma.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A terror irányítója a belügyi népbiztosság, az **NKVD** volt (előd: **CSEKA**). **Berija** 1938-tól állt az élén, és később is Sztálin egyik legbizalmasabb embere maradt. Az 1937-es „tisztogatás” a Vörös Hadsereg vezetését is érintette.',
        },
        {
          kind: 'text',
          text: 'A rendszert a **személyi kultusz** egészítette ki: Sztálint „a népek atyjának”, tévedhetetlen vezetőnek mutatták be, a történelmet átírták, a képeket „retusálták”.',
        },
        {
          kind: 'compare',
          title: 'Két totalitárius rendszer: Hitler és Sztálin',
          columns: ['Nemzetiszocialista Németország', 'Sztálini Szovjetunió'],
          rows: [
            {
              label: 'Ideológia',
              cells: [
                'faji alapú (fajelmélet, antiszemitizmus, élettér)',
                'osztályalapú (kommunizmus, osztályharc)',
              ],
            },
            {
              label: 'Gazdaság',
              cells: [
                'magántulajdon marad, állami irányítás, fegyverkezés',
                'államosítás, tervgazdaság, kollektív gazdaságok',
              ],
            },
            { label: 'Vezér', cells: ['Hitler, Führer-kultusz', 'Sztálin, személyi kultusz'] },
            {
              label: 'Terror',
              cells: [
                'SS, Gestapo, koncentrációs táborok',
                'titkosrendőrség, GULAG, koncepciós perek',
              ],
            },
            {
              label: 'Közös vonás',
              cells: [
                'egypártrendszer, propaganda, ellenfelek erőszakos kiiktatása',
                'egypártrendszer, propaganda, ellenfelek erőszakos kiiktatása',
              ],
            },
          ],
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Lenin',
              text: 'A bolsevik párt vezére, az 1917-es hatalomátvétel irányítója, a Szovjetunió megalapítója.',
            },
            {
              name: 'Sztálin',
              text: 'A párt főtitkára, Lenin halála után a Szovjetunió korlátlan ura (1953-ig).',
            },
            {
              name: 'Trockij',
              text: 'A vörös hadsereg megszervezője, Sztálin fő riválisa, emigrációba kényszerítették.',
              emelt: true,
            },
            { name: 'Berija', text: 'Az NKVD vezetője 1938-tól.', emelt: true },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: plakát vagy sztálini beszéd, statisztika a termelésről vagy az éhínségről: mit mutat a kollektivizálásról?',
            'Fogalmak: GULAG, kulák, személyi kultusz, tervgazdaság, koncepciós per.',
            'Kifejtés vagy összehasonlítás: hogyan épült ki a sztálini diktatúra, és miben hasonlít/különbözik a nemzetiszocialista diktatúrától.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni a Lenin-féle NEP-et (piacbarát időszak, 1921-től) a sztálini tervgazdasággal (1928-tól), vagy a kollektív gazdaságot a GULAG-gal (kényszermunkatábor). A holodomor áldozatainak számát és a népirtás-minősítést mindig „becslések szerint” és „vitatott” szavakkal fogalmazd meg.',
        },
        {
          kind: 'tip',
          text: 'Az összehasonlító feladatban három szempontot használj: ideológia, gazdaság, hatalomgyakorlás (terror és propaganda). A közös pont: a totalitárius diktatúra jegyei (egypártrendszer, vezérkultusz, terror, propaganda, az egyén alárendelése).',
        },
      ],
      topicMatch: ['=szovjetunió', 'szovjetunió kialakulása'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor alakult meg a Szovjetunió?',
          options: ['1917', '1922', '1929', '1936'],
          answer: 1,
          explanation:
            '1922-ben. 1917 a bolsevik hatalomátvétel éve, 1928–29-től indult a kényszeres iparosítás és a kollektivizálás.',
        },
        {
          question: 'Mi volt a kollektivizálás?',
          options: [
            'A kisvállalkozások szabaddá tétele.',
            'A parasztgazdaságok erőszakos egyesítése nagy közös gazdaságokba.',
            'A hadsereg újjászervezése.',
            'A szakszervezetek betiltása.',
          ],
          answer: 1,
          explanation:
            'A kollektivizálás a parasztgazdaságok közös gazdaságokba terelése volt, a kulákokat pedig megbélyegezték és kitelepítették.',
        },
        {
          question: 'Mit neveztek GULAG-nak?',
          options: [
            'A szovjet titkosrendőrséget.',
            'A kommunista pártot.',
            'Az ötéves terveket.',
            'A kényszermunka-táborok rendszerét.',
          ],
          answer: 3,
          explanation:
            'A GULAG a kényszermunka-táborok rendszere volt Szibériában és a Szovjetunió más térségeiben.',
        },
        {
          question: 'Melyik időszakot nevezik a „nagy tisztogatásnak”?',
          options: ['1921–1924', '1936–1938', '1941–1945', '1953–1956'],
          answer: 1,
          explanation:
            'Az 1936–1938 közötti időszakot, amikor a koncepciós perek és a tömeges kivégzések a párt, a hadsereg és a társadalom széles körét érintették.',
        },
        {
          question: 'Ki volt Trockij?',
          options: [
            'A GULAG parancsnoka.',
            'Sztálin utódja a pártfőtitkári székben.',
            'A szovjet hadügyi népbiztos a második világháborúban.',
            'A vörös hadsereg szervezője, Sztálin fő riválisa, akit száműztek, majd meggyilkoltak.',
          ],
          answer: 3,
          explanation:
            'Trockij Lenin társa volt, Sztálin 1929-ben kiutasította, 1940-ben Mexikóban megölték.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szovjetunió', url: wiki('Szovjetunió története') },
        { label: 'Wikipédia: Joszif Visszarionovics Sztálin', url: wiki('Sztálin') },
        { label: 'Wikipédia: Holodomor', url: wiki('Holodomor') },
      ],
    },
    {
      id: 'fasiszta-allam-new-deal',
      subject: 'tortenelem',
      unitId: 'diktaturak-masodik-vilaghaboru',
      title: 'A fasiszta állam és a válságkezelés az USA-ban',
      level: 'emelt',
      requirement: {
        emelt: 'A fasiszta állam és ideológia; A világgazdasági válság, kezelése az USA-ban',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Olaszországban **Mussolini** fasiszta pártja **1922-ben** jutott hatalomra („Marcia su Roma”), és 1925–26 körül diktatúrát épített ki; titulusa **duce** (vezér).',
            'A fasizmus **nacionalista, antiliberális, antikommunista**, az államot és a vezért istenítő ideológia; a **korporatív állam** a munkaadókat és a munkásokat állami keretben fogta össze.',
            'A **világgazdasági válság** (**1929**, New York) az USA-ból indult. **Roosevelt** (1933-tól) a **New Deal** politikájával az állami beavatkozás útját választotta.',
            'A New Deal a **demokrácia keretei közt** kezelte a válságot, ezzel szemben a diktatúrák erőszakkal és fegyverkezéssel.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'fasizmus',
              text: 'Olasz eredetű, vezérelvű, nacionalista, antiliberális és antikommunista ideológia és mozgalom. Neve a *fasces* (vesszőnyaláb) római jelképből ered.',
            },
            { term: 'duce', text: 'Vezér (olaszul). Mussolini titulusa.' },
            {
              term: 'korporáció',
              text: 'A fasiszta állam „érdekképviseleti” szervezete: a munkaadókat és munkavállalókat ágazatonként állami irányítás alatt egyesítette, a sztrájkot pedig betiltotta.',
            },
            {
              term: 'New Deal',
              text: 'Roosevelt amerikai elnök válságkezelő programja az 1930-as években: állami beavatkozás, közmunkák, szociális intézkedések.',
            },
            {
              term: 'izolacionizmus',
              text: 'Az USA külpolitikai elve: tartsa magát távol az európai ügyektől.',
            },
            {
              term: 'protekcionizmus',
              text: 'Védővámokkal a hazai gazdaság védelme a külföldi versenytől.',
            },
            {
              term: 'minimálbér',
              text: 'A törvény által megállapított legkisebb bér, a New Deal egyik intézkedése lett.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az olasz fasizmus' },
        {
          kind: 'text',
          text: 'Olaszország az első világháborúban a győztesek oldalán harcolt, de a békék sokak szerint nem teljesítették a várakozásait („megcsonkított győzelem”). Gazdasági válság, sztrájkok, a kommunista veszélytől való félelem jellemezte a háború utáni éveket. **Mussolini** 1919-ben megalapította a fasiszta mozgalmat (fekete inges fegyveres osztagok), amely az erőszakot is bevetette a szocialisták ellen.',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1922. október',
              text: 'A **„Marcia su Roma”** (római menet): a fasiszták fenyegető felvonulása, a király (III. Viktor Emánuel) miniszterelnökké nevezte ki Mussolinit.',
            },
            {
              date: '1925–1926',
              text: 'A diktatúra kiépítése: az ellenzéki pártokat betiltották, a sajtót ellenőrizték, rendkívüli bíróság és politikai rendőrség jött létre.',
            },
            { date: '1929', text: 'A lateráni egyezmények: kiegyezés a pápasággal (Vatikán).' },
            {
              date: '1935–36',
              text: 'Olaszország megtámadta és meghódította Etiópiát: a nemzetközi szankciók nem hatottak, és Mussolini közeledett Hitlerhez.',
            },
            { date: '1936', text: 'A **Berlin–Róma tengely** létrejötte.' },
          ],
        },
        {
          kind: 'text',
          text: 'A fasiszta ideológia lényege: a **nemzet és az állam mindenek felett** áll, az egyén csak az állam részeként értelmezhető. Elutasítja a liberális demokráciát és a kommunizmust is, dicsőíti az erőszakot, a háborút és a vezért (**duce**). Az olasz fasizmus eredetileg nem alapult faji elméletre, antiszemita faji törvényeket csak 1938-tól hoztak.',
        },
        {
          kind: 'text',
          text: 'A gazdaság a **korporatív** modell szerint szerveződött: a törvény a sztrájkot tiltotta, a szakszervezetek helyett állami irányítású korporációk képviselték a munkaadókat és a munkavállalókat, a magántulajdon megmaradt. A hatalom tömegmozgalmakat (ifjúsági szervezetek, szabadidő-szervezetek) és a vezérkultuszt is felhasználta.',
        },
        {
          kind: 'compare',
          title: 'Fasizmus és nemzetiszocializmus',
          columns: ['Olasz fasizmus', 'Német nemzetiszocializmus'],
          rows: [
            { label: 'Vezér', cells: ['Mussolini (duce)', 'Hitler (Führer)'] },
            {
              label: 'Fő eszme',
              cells: ['az állam és a nemzet kultusza', 'a „fajtiszta” nép és az élettér kultusza'],
            },
            {
              label: 'Rasszizmus',
              cells: [
                'kezdetben nem alapeszme, 1938-tól faji törvények',
                'központi elem, a holokauszthoz vezetett',
              ],
            },
            {
              label: 'Közös vonás',
              cells: [
                'antiliberális, antikommunista, vezérelvű, egypárti, terror',
                'antiliberális, antikommunista, vezérelvű, egypárti, terror',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A világgazdasági válság és az USA' },
        {
          kind: 'text',
          text: 'Az 1920-as években az USA volt a világ legerősebb gazdasága, a részvénypiac a túlértékelésen alapult. **1929 októberében** a **New York**-i tőzsdén (Wall Street) összeomlottak az árfolyamok („fekete csütörtök”, majd „fekete kedd”). A bankok bedőltek, a termelés visszaesett, a munkanélküliség az amerikai munkaerő negyedéig emelkedett (kb. 25%), a válság Európára is átterjedt, mert a hitelek visszavonásával az USA az európai gazdaságot is magával rántotta.',
        },
        {
          kind: 'text',
          text: 'Az első reakció, **Hoover** elnök szabadelvű politikája (a piac magától rendbe jön, védővámok, azaz protekcionizmus) kevésnek bizonyult. **Franklin D. Roosevelt** demokrata elnök (1932 végén választották meg, 1933 márciusában lépett hivatalba) az **állami beavatkozás** útjára lépett:',
        },
        {
          kind: 'keypoints',
          title: 'A New Deal fő elemei',
          items: [
            '**Bankreform**: a bankok ideiglenes zárása, ellenőrzése, a betétek biztosítása.',
            '**Közmunkák**: utak, gátak, erőművek építése munkanélküliek foglalkoztatásával (pl. a Tennessee-völgyi program).',
            '**Mezőgazdasági támogatások**: a termelés szabályozása, az árak emelése.',
            '**Szociális intézkedések**: a **társadalombiztosítás** (1935), a szakszervezeti jogok erősítése, **minimálbér** és munkaidő-szabályozás.',
          ],
        },
        {
          kind: 'text',
          text: 'A programot elméletileg **Keynes** angol közgazdász gondolatai támogatták: a válságban az állam költekezéssel élénkítheti a keresletet. A New Deal enyhítette a nyomort és a munkanélküliséget, de a válságot teljesen nem szüntette meg: a gazdaság teljes talpra állását sokan a háborús fegyvergyártással kötik össze. Az USA a társadalmi béke megőrzésével **demokratikus keretek között** kezelte a válságot, szemben a német és az olasz úttal. Külpolitikában a háború előtt **izolacionista** maradt, azaz a semlegességi törvényekkel igyekezett kimaradni az európai konfliktusokból.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Mussolini',
              text: 'A fasiszta párt vezére, 1922-től miniszterelnök, 1925–26-tól diktátor, a „duce”.',
            },
            {
              name: 'Roosevelt',
              text: 'Az USA 32. elnöke 1933-tól 1945-ben bekövetkezett haláláig; a New Deal és a második világháborús szövetség vezetője.',
            },
            {
              name: 'Keynes',
              text: 'Brit közgazdász; szerinte az államnak a válságban növelnie kell a kiadásait a kereslet élénkítésére.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (Mussolini-beszéd, plakát, Roosevelt-rádióbeszéd): melyik rendszerről szól, milyen értékeket hirdet?',
            'Összehasonlítás: fasizmus és nemzetiszocializmus; diktatúrák és New Deal mint válságkezelés.',
            'Fogalmak: duce, korporáció, New Deal, izolacionizmus.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a fasizmust és a nemzetiszocializmust egyformának venni. A közös gyökerek mellett fontos a különbség: az olasz fasizmus eszménye az állam, a német nemzetiszocializmusé a faj. Másik hiba: azt állítani, hogy a New Deal azonnal megoldotta a válságot.',
        },
        {
          kind: 'tip',
          text: 'Ha a válságkezelések összehasonlítását kérik, használj három oszlopot: **USA** (állami beavatkozás, demokrácia), **Németország** (fegyverkezés, diktatúra), **Szovjetunió** (a tervgazdaság, amelyet a világpiaci válság kevésbé érintett).',
        },
      ],
      topicMatch: ['=fasizmus'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mi volt a „római menet” (1922)?',
          options: [
            'Mussolini fasisztái fenyegető felvonulása, amely után a király miniszterelnökké nevezte ki.',
            'Az olasz hadsereg bevonulása Etiópiába.',
            'A lateráni egyezmény aláírása.',
            'Hitler első látogatása Rómában.',
          ],
          answer: 0,
          explanation:
            'A római menet után 1922 októberében III. Viktor Emánuel király Mussolinit nevezte ki kormányfővé.',
        },
        {
          question: 'Mit jelent a „duce” szó?',
          options: ['Király', 'Birodalom', 'Vezér', 'Nemzet'],
          answer: 2,
          explanation: 'A duce olaszul vezért jelent, Mussolini titulusa.',
        },
        {
          question: 'Melyik állítás igaz a New Dealre?',
          options: [
            'Az állami beavatkozást szüntette meg.',
            'Fegyverkezésre épült, a demokráciát felfüggesztve.',
            'Roosevelt programja, közmunkákkal és szociális intézkedésekkel.',
            'Hoover elnök válságkezelő programja volt.',
          ],
          answer: 2,
          explanation:
            'A New Deal Roosevelt programja volt, közmunkákkal, bankreformmal és szociális intézkedésekkel, demokratikus keretek között.',
        },
        {
          question: 'Mi jellemezte az USA külpolitikáját a két világháború között?',
          options: [
            'Folyamatos európai katonai jelenlét.',
            'Izolacionizmus.',
            'Szövetség a fasiszta államokkal.',
            'A Népszövetség vezetése.',
          ],
          answer: 1,
          explanation:
            'Az USA nem lett a Népszövetség tagja, és a háború előtt távol akart maradni az európai ügyektől (izolacionizmus).',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Fasizmus', url: wiki('Fasizmus') },
        { label: 'Wikipédia: Benito Mussolini', url: wiki('Benito Mussolini') },
        { label: 'Wikipédia: New Deal', url: wiki('New Deal') },
      ],
    },
    {
      id: 'masodik-vilaghaboru-kitorese-menete',
      subject: 'tortenelem',
      unitId: 'diktaturak-masodik-vilaghaboru',
      title: 'A második világháború kitörése és menete',
      level: 'kozep',
      requirement: {
        kozep:
          'A második világháború kitörése, hadviselő felek, a világháború jellemzői (háborús bűnök, polgári célpontok és lakosság elleni erőszak, hátország, ellenállás)',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az okok: a versailles-i rend megsértése, a **világgazdasági válság**, az agresszív **tengelyhatalmak** (Németország, Olaszország, Japán) és a nyugati hatalmak **megbékítő politikája**.',
            '**1938**: Anschluss és a müncheni egyezmény. **1939. augusztus 23.**: **Molotov–Ribbentrop-paktum**.',
            '**1939. szeptember 1.**: Németország megtámadta Lengyelországot, **Nagy-Britannia és Franciaország** hadat üzent. Kitört a második világháború.',
            '**1940** tavaszán–nyarán a németek villámháborúban legyőzték Franciaországot; **1941. június 22.**: Németország megtámadta a Szovjetuniót; **1941. december 7.**: Pearl Harbor, az USA belépett a háborúba.',
            'A fordulat: **Sztálingrád** (1943. február), **Normandia** (1944. június 6.). **1945. május 9.** Németország kapitulált, **augusztusban** az atombombák után Japán is.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'tengelyhatalmak',
              text: 'A háborúban Németország, Olaszország és Japán szövetsége (később csatlósaik: Magyarország, Románia, Bulgária, Szlovákia), amely az új világrend megteremtését hirdette.',
            },
            {
              term: 'szövetségesek',
              text: 'A tengelyhatalmak ellen harcolók koalíciója: Nagy-Britannia, a Szovjetunió, az USA, a szabad Franciaország, Kína és mások.',
            },
            {
              term: 'villámháború',
              text: 'Gyors, a páncélosok és a repülők összehangolt támadásán alapuló hadviselés a háború gyors eldöntésére.',
            },
            {
              term: 'Molotov–Ribbentrop-paktum',
              text: 'A német–szovjet megnemtámadási szerződés (1939. augusztus 23.). Titkos záradéka Kelet-Közép-Európa befolyási övezetekre osztásáról szólt.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az út a háborúig' },
        {
          kind: 'text',
          text: 'A versailles-i rend (lásd az első világháborút lezáró békéket) több állam szerint igazságtalan volt. A **világgazdasági válság** radikalizálta a közvéleményt, és hatalomra segítette a revíziót hirdető diktatúrákat. A Népszövetség nem tudott hatékonyan fellépni az agresszorokkal szemben.',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1931',
              text: 'Japán megszállta Mandzsúriát (Kína északkeleti része); 1937-ben teljes háborút indított Kína ellen.',
            },
            { date: '1935–36', text: 'Olaszország meghódította Etiópiát.' },
            {
              date: '1936',
              text: 'Németország megszállta a Rajna-vidéket. Létrejött a **Berlin–Róma tengely**.',
              emelt: true,
            },
            {
              date: '1936–1939',
              text: 'Spanyol polgárháború: Franco győzött, Hitler és Mussolini fegyverrel támogatta.',
            },
            {
              date: '1938. március',
              text: '**Anschluss**: Ausztria Németországhoz csatlakoztatása. A nyugati hatalmak nem léptek fel.',
            },
            {
              date: '1938. szeptember',
              text: '**Müncheni egyezmény**: Nagy-Britannia, Franciaország, Olaszország és Németország Csehszlovákia megkérdezése nélkül döntött arról, hogy a német lakosú határvidéket átadják Németországnak.',
            },
            {
              date: '1939. március',
              text: 'Hitler megszállta Csehország többi részét; Szlovákia bábállam lett.',
            },
            {
              date: '1939. augusztus 23.',
              text: '**Molotov–Ribbentrop-paktum**. Titkos záradéka szerint Lengyelország felosztására és a balti államok Szovjetunióhoz sorolására számítottak.',
            },
            { date: '1939. szeptember 1.', text: 'Németország megtámadta Lengyelországot.' },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A müncheni egyezmény a **megbékítés (appeasement)** politikájának csúcsa volt: Chamberlain brit miniszterelnök és Daladier francia miniszterelnök a háború elkerülése végett engedett Hitlernek. Az átadott terület a **Szudéta-vidék** volt; a csehszlovák elnök, **Beneš** kénytelen volt elfogadni. Hitler következő célpontja a németek által is igényelt **Danzig** (szabad város) és a lengyel korridor volt.',
        },
        { kind: 'heading', text: 'A hadviselő felek' },
        {
          kind: 'compare',
          title: 'A két tábor a háború során',
          columns: ['Tengelyhatalmak', 'Szövetségesek'],
          rows: [
            {
              label: 'Fő hatalmak',
              cells: [
                'Németország, Olaszország, Japán',
                'Nagy-Britannia, Szovjetunió (1941-től), USA (1941-től)',
              ],
            },
            {
              label: 'Csatlósok, további országok',
              cells: [
                'Magyarország, Románia, Bulgária, Szlovákia; Finnország együtt hadviselő fél volt',
                'Franciaország (a szabad franciák), Lengyelország, Jugoszlávia, Kína és mások',
              ],
            },
            {
              label: 'Vezetők',
              cells: [
                'Hitler, Mussolini, Hirohito császár',
                'Churchill, Roosevelt, Sztálin, de Gaulle',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A háború menete röviden' },
        {
          kind: 'keypoints',
          title: 'Szakaszok',
          items: [
            '**1939–1941 (német sikerek)**: Lengyelország lerohanása (a Szovjetunió keletről csatlakozott), 1939–40 telén a „furcsa háború” a nyugati fronton, majd 1940 áprilisától Dánia és Norvégia, **májusban–júniusban** Hollandia, Belgium és Franciaország legyőzése (villámháború). Nagy-Britannia **Churchill** vezetésével kitartott. 1941 tavaszán a Balkán (Jugoszlávia, Görögország) is német befolyás alá került.',
            '**1941. június 22.**: a német támadás a Szovjetunió ellen (Barbarossa-terv). A szovjet és a német hadsereg között a háború legnagyobb pusztításai zajlottak le.',
            '**1941. december 7.**: Japán megtámadta az amerikai flotta **Pearl Harbor** nevű csendes-óceáni támaszpontját. Az USA belépett a háborúba, Németország és Olaszország hadat üzent az USA-nak. A háború világháborúvá vált.',
            '**1942–1943 (fordulat)**: **Sztálingrád** (a németek hadserege **1943. február** elején kapitulált); az észak-afrikai és csendes-óceáni szövetséges győzelmek.',
            '**1944–1945 (a győzelem)**: **1944. június 6.** a szövetségesek partra szálltak **Normandiában**; a szovjetek nyugat felé nyomultak. **1945 áprilisában** Berlin ostroma és Hitler öngyilkossága, **1945. május 9.** a német kapituláció. Japán az **1945. augusztus 6-i hirosimai** atombomba után kapitulált.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kerettantervi tananyagnál mélyebben is kérik a következőket: az **1939–40-es szovjet–finn téli háborút** (Finnország ellenállt, de területeket veszített), a **1940-es angliai csatát** (a német légierő nem tudta megtörni a brit légvédelmet), a **vichyi** francia kormányt (Franciaország déli részén kollaboráns rendszer) és **1942** két fordulópontját, **El-Alameint** és **Midwayt**. A részleteket az emelt szintű frontokról szóló lecke tárgyalja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Idővonal vagy térkép: tegyél sorrendbe eseményeket (Anschluss, München, paktum, Lengyelország megtámadása, Pearl Harbor, Normandia).',
            'Kifejtés: miért tört ki a háború, és milyen szerepe volt a megbékítésnek?',
            'Fogalmak: tengelyhatalmak, szövetségesek, villámháború, Molotov–Ribbentrop-paktum.',
            'Forrás: a paktum titkos záradéka, Chamberlain vagy Churchill beszéde.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a háború kezdetének 1941-et vagy 1938-at megadni. A hivatalos dátum **1939. szeptember 1.** Másik hiba, hogy a Szovjetuniót a kezdetektől a szövetségesek között említik: 1941. június 22-ig a Szovjetunió a német–szovjet paktum miatt nem harcolt Hitler ellen (sőt 1939. szeptember 17-től keletről lépett be Lengyelországba).',
        },
        {
          kind: 'tip',
          text: 'Az okok kifejtésében három szint kell: **hosszú távú** (versailles-i rend), **közvetlen** (agresszió + megbékítés), **kiváltó** (paktum és a lengyel támadás). Mondd ki, hogy a háború az 1941-es belépésekkel vált valódi világháborúvá.',
        },
      ],
      topicMatch: ['=a második világháború kirobbanása', '=második világháború'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor kezdődött a második világháború hivatalosan?',
          options: [
            '1938. szeptember 29.',
            '1939. szeptember 1.',
            '1939. augusztus 23.',
            '1940. június 22.',
          ],
          answer: 1,
          explanation:
            '1939. szeptember 1-jén, Lengyelország megtámadásával. Szeptember 29-én kötötték München egyezményét (1938), augusztus 23-án a paktumot.',
        },
        {
          question: 'Mit rögzített a Molotov–Ribbentrop-paktum titkos záradéka?',
          options: [
            'Nagy-Britannia és Franciaország közös fellépését.',
            'A német–szovjet katonai szövetséget az USA ellen.',
            'Kelet-Közép-Európa német és szovjet befolyási övezetre osztását.',
            'Ausztria Németországhoz csatolását.',
          ],
          answer: 2,
          explanation:
            'A titkos záradék Lengyelország és más kelet-európai területek sorsáról döntött a két hatalom javára.',
        },
        {
          question: 'Melyik esemény tette világháborúvá a konfliktust 1941 decemberében?',
          options: [
            'A normandiai partraszállás.',
            'Japán támadása Pearl Harbor ellen és az USA belépése.',
            'Franciaország kapitulációja.',
            'A sztálingrádi csata.',
          ],
          answer: 1,
          explanation:
            'Pearl Harbor (1941. december 7.) után az USA belépett a háborúba, így Európa és a Csendes-óceán háborúja összekapcsolódott.',
        },
        {
          question: 'Mikor szálltak partra a szövetségesek Normandiában?',
          options: ['1943. február 2.', '1944. június 6.', '1945. május 9.', '1941. december 7.'],
          answer: 1,
          explanation:
            '1944. június 6-án (D-nap), ezzel megnyílt a nyugati front Nyugat-Európában.',
        },
        {
          question: 'Mi történt a müncheni egyezmény (1938) értelmében?',
          options: [
            'Csehszlovákia német lakosú határvidékét átadták Németországnak.',
            'Lengyelországot felosztották.',
            'Ausztriát Németországhoz csatolták.',
            'Franciaország kapitulált.',
          ],
          answer: 0,
          explanation:
            'A müncheni egyezmény a megbékítés példája volt: Csehszlovákia megkérdezése nélkül döntöttek a határvidék átadásáról.',
        },
      ],
      sources: [
        { label: 'Wikipédia: A második világháború', url: wiki('A második világháború') },
        { label: 'Wikipédia: Müncheni egyezmény', url: wiki('Müncheni egyezmény 1938') },
        { label: 'Wikipédia: Molotov–Ribbentrop-paktum', url: wiki('Molotov–Ribbentrop-paktum') },
      ],
    },
    {
      id: 'masodik-vilaghaboru-jellege',
      subject: 'tortenelem',
      unitId: 'diktaturak-masodik-vilaghaboru',
      title: 'A második világháború jellege: totális háború, bűnök, ellenállás',
      level: 'kozep',
      requirement: {
        kozep:
          'A második világháború kitörése, hadviselő felek, a világháború jellemzői (háborús bűnök, polgári célpontok és lakosság elleni erőszak, hátország, ellenállás)',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A második világháború **totális háború** volt: az egész gazdaságot, társadalmat és a civil lakosságot a hadviselés szolgálatába állították (**hadigazdaság**, **hátország**).',
            'A harcokban a **polgári lakosság** vált a legnagyobb áldozattá: bombázások, megszállások, kitelepítések, tömeges kivégzések, éhezés. Az áldozatok becsült száma 60 és 85 millió között van.',
            '**Háborús bűnök** minden hadviselő oldalán történtek, de a legsúlyosabbak a nemzetiszocialista Németország megszállási politikájához és a **népirtáshoz** kötődtek (a holokausztról külön tananyag szól).',
            'Szinte minden megszállt országban működött **ellenállás** (partizánok, földalatti szervezetek), de a megszállókkal való együttműködés is előfordult.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'totális háború',
              text: 'A háború az egész társadalmat érinti: a gazdaság, a lakosság, a propaganda is a háború céljait szolgálja, a katonai és polgári célpontok közötti határ elmosódik.',
            },
            {
              term: 'hadigazdaság',
              text: 'A gazdaság átállítása a hadsereg ellátására: fegyvergyártás, jegyre adás, kötelező munka.',
            },
            {
              term: 'hátország',
              text: 'Az a terület, amelynek lakossága a hadműveletekben nem vesz részt, de termeli a hadi anyagot, és katonákat állít ki. A második világháborúban a bombázások miatt a határ gyakran elmosódott.',
            },
            {
              term: 'háborús bűn',
              text: 'A háború törvényeit és szokásait súlyosan sértő cselekmény: a polgári lakosság és a hadifoglyok megölése, kínzása, fosztogatás, kényszermunka.',
            },
            {
              term: 'partizán',
              text: 'Az ellenséges megszállás alatt rendszertelen fegyveres csoportokban harcoló ellenálló.',
            },
            { term: 'kollaboráns', text: 'Aki a megszállókkal együttműködik.', emelt: true },
            {
              term: 'jegyrendszer',
              text: 'Az élelmiszerek és fogyasztási cikkek jegyre (szelvényre) adása a hiány miatt.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Totális háború és hátország' },
        {
          kind: 'text',
          text: 'A hadviselő államok a **hadigazdaság** feltételeit teremtették meg: az ipar fegyvert, repülőt, harckocsit gyártott, a háború előtti fogyasztási cikkek termelése visszaesett, az élelmiszert és a ruhát jegyre adták. A férfiakat behívták, a nők tömegesen álltak a gyári gépekhez és a mezőgazdasági munkába. A propaganda (plakátok, rádió, mozihíradók) a háborús szellemet erősítette, a cenzúra pedig korlátozta a hírek szabad áramlását.',
        },
        {
          kind: 'text',
          text: 'A második világháborúban a **hátország** és a front közötti különbség elmosódott. A **légi háború** a városokat célozta: a németek bombázták Rotterdamot, Londont és más brit városokat; a szövetségesek a német és japán városokat (például 1945 februárjában **Drezdát**). A bombázások egyik célja a civil lakosság lélektani megtörése volt. 1945-ben az USA atombombát dobott **Hirosimára** (augusztus 6.) és Nagaszakira.',
        },
        { kind: 'heading', text: 'Háborús bűnök és erőszak a lakosság ellen' },
        {
          kind: 'text',
          text: 'A **háborús bűnök** a kor háborúinak minden színterén előfordultak. A leggyakoribbak: a polgári lakosság tömeges kivégzése megtorlásként, a kényszermunka, a hadifoglyok éheztetése és megölése, nők elleni erőszak. A Szovjetunió megtámadásakor a német vezetés a háborút „megsemmisítő háborúnak” szánta: a szovjet hadifoglyok milliói haltak meg a német fogságban. A megszállt Lengyelországban és a Szovjetunióban a lakosságot kényszermunkára hurcolták, falvakat égettek fel.',
        },
        {
          kind: 'keypoints',
          title: 'Néhány példa',
          items: [
            'A nemzetiszocialista **koncentrációs táborok** rendszere és a zsidók, romák meggyilkolása (**népirtás**; részletesen a holokauszt tananyagában).',
            'Megtorló mészárlások a megszállt területeken (például a cseh Lidice falu 1942-es megsemmisítése).',
            'A japán csapatok mészárlásai Kínában (például **Nanking**, 1937 vége; az áldozatok száma vitatott, a becslések eltérnek).',
            'A szovjet titkosrendőrség **1940-ben** lengyel hadifogoly tiszteket és értelmiségieket végeztetett ki.',
            'Hadifoglyok sorsa, **kényszermunka**, hadifogság a szovjet **GULAG**-ban is.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **katyńi vérengzés** 1940 tavaszán történt: az NKVD több mint húszezer lengyel tisztet és értelmiségit végzett ki. A németek 1943-ban fedezték fel a tömegsírokat; a szovjet vezetés évtizedekig a németeket vádolta, a szovjet felelősséget csak 1990-ben ismerte el.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A háború végén a **nürnbergi per** (1945–46) a legfőbb német háborús bűnösök felett ítélkezett. A vádak között háborús bűnök és emberiesség elleni bűnök szerepeltek.',
        },
        { kind: 'heading', text: 'Megszállás és ellenállás' },
        {
          kind: 'text',
          text: 'Németország „új rendet” kívánt Európában. Az országokat különbözően kezelte: Lengyelországot felosztották és kíméletlenül kizsákmányolták, Franciaország északi felét közvetlenül megszállta, délen Pétain marsall kollaboráns kormánya működött, Dániát és Norvégiát megszállta. Egyes államokban a megszállókkal együttműködő bábkormányok és csatlós rendszerek is létrejöttek.',
        },
        {
          kind: 'text',
          text: 'Az **ellenállás** sokféle formát öltött: földalatti sajtó, szabotázs, hírszerzés, menekültek bújtatása, fegyveres **partizánharc**. Híres példák: a francia ellenállás (**de Gaulle** Londonban megszervezett szabad francia mozgalma és a hazai ellenállók), a jugoszláviai partizánok (Tito), a lengyel földalatti állam és az 1944-es lengyel felkelés, a szovjet partizánok, de német ellenállók is voltak (1944. júliusi összeesküvés Hitler ellen). A megtorlások súlyosak voltak: túszok kivégzése, falvak felégetése.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **kollaboránsok** (például a norvég Quisling vagy a vichyi kormány) a megszállókkal együttműködtek. A háború után sokukat népbíróságok elé állították. A kollaboráció motívuma lehetett meggyőződés, kényszer vagy haszonszerzés is.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Churchill',
              text: 'Nagy-Britannia miniszterelnöke 1940-től, a szövetséges koalíció egyik vezetője; tántoríthatatlan a nácizmussal szemben.',
            },
            {
              name: 'de Gaulle',
              text: 'Francia tábornok, a szabad franciák vezetője (Londonból), a háború után a francia állam vezetője.',
            },
            { name: 'Roosevelt', text: 'Az USA elnöke, 1941-től a szövetségesek egyik vezetője.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (fénykép bombázott városról, plakát a hátországról, ellenállók kiáltványa): milyen jellegzetességet mutat a háborúból?',
            'Fogalmak: totális háború, hadigazdaság, hátország, partizán, háborús bűn.',
            'Kifejtés: miben különbözött a második világháború az elsőtől? (Totális háború, polgári áldozatok, légi háború, népirtás, ellenállás.)',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az áldozatok számánál egyetlen pontos számot mondani. Írd úgy, hogy „a becslések szerint 60–85 millió ember”. Ne állítsd, hogy háborús bűnöket csak a tengelyhatalmak követtek el: mindkét oldalon történtek, de nagyságrendjük és jellegük eltért (a népirtás a nemzetiszocialista rendszer sajátja).',
        },
        {
          kind: 'tip',
          text: 'Az összehasonlítás első–második világháború: **front és hátország** (állásháború vs. mozgó háború és légi háború), **áldozatok** (inkább katonák vs. inkább civilek), **célok** (hódítás vs. népirtó rasszista politika), **új fegyverek** (harckocsi, repülő, atombomba).',
        },
      ],
      topicMatch: ['=második világháború', '=világháborúk'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mit jelent a „hátország”?',
          options: [
            'Az ellenség által megszállt terület.',
            'A fronttól távoli, de a háborút gazdaságilag és emberileg támogató terület.',
            'A semleges országok összessége.',
            'A katonai tartalék.',
          ],
          answer: 1,
          explanation:
            'A hátország lakossága nem vesz részt közvetlenül a harcokban, de termeli a hadi anyagot, és katonákat állít ki.',
        },
        {
          question: 'Melyik jellemző illik a második világháborúra?',
          options: [
            'Elsősorban katonák haltak meg, a lakosság kevésbé szenvedett.',
            'A polgári lakosság a háború legnagyobb áldozatai közé tartozott.',
            'Nem volt légi háború.',
            'Nem volt ellenállás a megszállt országokban.',
          ],
          answer: 1,
          explanation:
            'A bombázások, megszállások, kitelepítések és népirtás miatt a polgári áldozatok száma rendkívül nagy volt.',
        },
        {
          question: 'Ki szervezte Londonból a szabad francia mozgalmat?',
          options: ['Pétain', 'Churchill', 'Laval', 'de Gaulle'],
          answer: 3,
          explanation:
            'De Gaulle tábornok. Pétain a megszállt ország kollaboráns kormányának feje volt, Churchill brit miniszterelnök.',
        },
        {
          question: 'Mi volt a partizánok szerepe?',
          options: [
            'A megszállók mögött vívott rendszertelen fegyveres harc.',
            'A reguláris hadsereg frontharca.',
            'A hadigazdaság irányítása.',
            'A hadifoglyok őrzése.',
          ],
          answer: 0,
          explanation:
            'A partizánok a megszállt területen, a hátországban vívtak rendszertelen harcot (például Jugoszláviában).',
        },
        {
          question: 'Mi volt a katyńi vérengzés?',
          options: [
            'A németek mészárlása egy cseh faluban.',
            'Japán katonák mészárlása Nankingban.',
            'Lengyel foglyok szovjet kivégzése 1940-ben.',
            'A varsói gettó felszámolása.',
          ],
          answer: 2,
          explanation:
            'Az NKVD 1940-ben lengyel hadifogoly tiszteket és más foglyokat végzett ki Katyńban és más helyszíneken.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Totális háború', url: wiki('Totális háború') },
        {
          label: 'Wikipédia: Ellenállási mozgalmak a második világháborúban',
          url: wiki('Ellenállási mozgalmak a második világháborúban'),
        },
        { label: 'Wikipédia: Katyńi mészárlás', url: wiki('Katyńi mészárlás') },
      ],
    },
    {
      id: 'masodik-vilaghaboru-frontok-fordulopontok',
      subject: 'tortenelem',
      unitId: 'diktaturak-masodik-vilaghaboru',
      title: 'Frontok, fordulópontok és a háború lezárása',
      level: 'emelt',
      requirement: { emelt: 'A második világháború: frontok, fordulópontok, a háború lezárása' },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Keleti front**: Barbarossa (1941), Moszkva előtt megállítják a németeket; **Sztálingrád** (1942–43) és **Kurszk** (1943) után a Vörös Hadsereg előretört.',
            '**Észak-Afrika és Olaszország**: **El-Alamein** (1942), olasz partraszállás (1943), Mussolini bukása.',
            '**Nyugati front**: **normandiai partraszállás** (1944. június 6.), Eisenhower vezetésével.',
            '**Csendes-óceáni front**: **Pearl Harbor** (1941), **Midway** (1942) a fordulópont, **Hirosima** (1945. augusztus 6.), **Japán kapitulációja 1945. szeptember 2.**',
            'A háború végét a **teheráni**, **jaltai** és **potsdami** konferencia rendezte; kezdődött a hidegháború.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Atlanti Charta',
              text: 'Roosevelt és Churchill 1941. augusztusi közös nyilatkozata a háború utáni világ elveiről (önrendelkezés, területszerzés tilalma, szabad kereskedelem, békés együttélés).',
            },
            {
              term: 'jaltai konferencia',
              text: '1945. februári találkozó: Roosevelt, Churchill, Sztálin. Döntöttek Németország megszállási övezeteiről, az ENSZ létrehozásáról és a szabad választások ígéretéről a felszabadult Európában.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Keleti front' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1941. június 22.',
              text: 'Barbarossa-hadművelet: a német támadás a Szovjetunió ellen. A Wehrmacht mélyen benyomult, Leningrádot ostrom alá fogták (1944-ig tartott).',
            },
            {
              date: '1941. december',
              text: 'A német előrenyomulás **Moszkva** előtt elakadt; a szovjet ellentámadás megállította a villámháború tervét. A téli hadjárat nem sikerült.',
            },
            {
              date: '1942. nyár–1943. február',
              text: '**Sztálingrád**: a német 6. hadsereg bekerítése és kapitulációja (1943. február eleje). Ez az egyik legnagyobb fordulópont: a németek elvesztették a kezdeményezést.',
            },
            {
              date: '1943. nyár',
              text: '**Kurszk**: a német támadás (Citadella-hadművelet) kudarca, a háború egyik legnagyobb páncéloscsatája (a prohorovkai ütközet); utána a Vörös Hadsereg folyamatosan előre nyomult.',
            },
            {
              date: '1944. nyár',
              text: 'A szovjet nyári offenzíva (Fehéroroszország); **1944. augusztus**: **Románia átállt** a szövetségesek oldalára.',
            },
            {
              date: '1944. augusztus–október',
              text: '**Varsói felkelés**: a lengyel Honi Hadsereg felkelt a németek ellen, de leverték; a szovjet csapatok a Visztula keleti partján álltak.',
            },
            {
              date: '1945. április–május',
              text: 'A berlini csata; Hitler április 30-án öngyilkos lett. A német fegyverletétel 1945. május 8–9-én lépett életbe (a Szovjetunióban a győzelem napja május 9.).',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A Vörös Hadsereg a háború legnagyobb szárazföldi terhét viselte. **Zsukov** marsall irányította a moszkvai ellentámadást, és később a berlini támadást is. A keleti front halálos áldozatainak száma a legmagasabb a háború minden frontja közül.',
        },
        { kind: 'heading', text: 'Mediterrán térség és Nyugat-Európa' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1940. nyár',
              text: '**Angliai csata**: a német légierő (Luftwaffe) nem tudta megtörni a brit légvédelmet, Hitler lemondott a partraszállásról.',
            },
            {
              date: '1942. október–november',
              text: '**El-Alamein** (Egyiptom): a brit erők (Montgomery) legyőzték **Rommel** Afrika-hadtestét. Az észak-afrikai front fordulópontja.',
            },
            {
              date: '1943. nyár',
              text: 'A szövetségesek Szicíliára, majd Dél-Itáliába szálltak; Mussolinit eltávolították, Olaszország kiugrott. A németek az ország északi részén tovább harcoltak.',
            },
            {
              date: '1944. június 6.',
              text: '**Normandia**: a szövetségesek (az amerikai **Eisenhower** főparancsnoksága alatt) partra szálltak, megnyílt a második front. Augusztusban felszabadult Párizs.',
            },
            { date: '1945. február', text: 'Drezda bombázása.' },
          ],
        },
        {
          kind: 'text',
          text: 'A szövetségesek jelentős haditechnikai és ipari fölénye az **USA ipari termelésének** (és a kölcsönbérleti rendszernek, amelyből a Szovjetunió és Nagy-Britannia is kapott) köszönhető. A nyugati hatalmak sokáig húzták a második front megnyitását, ami a Szovjetunióval való viszonyukat is terhelte.',
        },
        { kind: 'heading', text: 'Csendes-óceáni front' },
        {
          kind: 'timeline',
          items: [
            { date: '1937', text: 'Japán teljes háborút indított Kína ellen.' },
            {
              date: '1941. december 7.',
              text: '**Pearl Harbor**: a japán légierő megtámadta az amerikai csendes-óceáni flotta támaszpontját. Az USA belépett a háborúba. Japán hónapok alatt Délkelet-Ázsiát is elfoglalta.',
            },
            {
              date: '1942. június',
              text: '**Midway**: az amerikai flotta a japán repülőgép-hordozók többségét elsüllyesztette, ezzel megfordult a csendes-óceáni háború menete.',
            },
            { date: '1943–1945', text: 'A szigetek „szigetről szigetre” haladó visszafoglalása.' },
            {
              date: '1945. augusztus 6. és 9.',
              text: 'Az amerikai atombombák ledobása Hirosimára és Nagaszakira; a Szovjetunió augusztus 8-án hadat üzent Japánnak.',
            },
            {
              date: '1945. szeptember 2.',
              text: '**Japán kapitulált**; a második világháború véget ért.',
            },
          ],
        },
        { kind: 'heading', text: 'A háború lezárása: konferenciák' },
        {
          kind: 'compare',
          title: 'A három nagy konferencia',
          columns: ['Hely, idő, résztvevők', 'Fő döntések'],
          rows: [
            {
              label: 'Teherán, 1943',
              cells: [
                'Roosevelt, Churchill, Sztálin',
                'Megállapodás a második front megnyitásáról; előkészítették a háború utáni kérdéseket.',
              ],
            },
            {
              label: 'Jalta, 1945. február',
              cells: [
                'Roosevelt, Churchill, Sztálin',
                'Németország megszállási övezetekre osztása; az ENSZ megalapításának terve; deklaráció a felszabadult országok szabad választásairól; Lengyelország határai; a Szovjetunió hadba lépése Japán ellen.',
              ],
            },
            {
              label: 'Potsdam, 1945. július–augusztus',
              cells: [
                'Truman, Churchill (később Attlee), Sztálin',
                'Németország demilitarizálása és megszállása; a háborús bűnösök megbüntetése; jóvátétel; Lengyelország nyugati határa a békeszerződésig az Odera–Neisse vonal mentén.',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A háború a legtöbb áldozatot követelő fegyveres konfliktus volt: a becslések szerint 60–85 millió ember halt meg. A háború nyomán megszűnt Európa nagyhatalmi vezető szerepe; a világ két szuperhatalma, az **USA** és a **Szovjetunió** vált meghatározóvá. Megalakult az ENSZ, és a győztesek közti ellentétek a hidegháborúhoz vezettek.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Zsukov',
              text: 'Szovjet marsall, Moszkva védelmének és a berlini hadművelet irányítója.',
            },
            {
              name: 'Eisenhower',
              text: 'Az amerikai tábornok, a szövetséges erők főparancsnoka a nyugati fronton, a normandiai partraszállás vezetője.',
            },
            { name: 'Rommel', text: 'A német Afrika-hadtest parancsnoka („sivatagi róka”).' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép és idővonal: frontok, csaták időrendbe és helyre illesztése.',
            'Kifejtés: miért volt fordulópont Sztálingrád, El-Alamein, Midway, Normandia?',
            'Források: Atlanti Charta részlete, jaltai döntések, tábornokok emlékiratai.',
            'Összehasonlítás: Teherán, Jalta és Potsdam döntései.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a fordulópontokat egy dátumra szűkíteni, vagy összekeverni az évszámokat (Sztálingrád 1942–43, El-Alamein és Midway 1942, Kurszk 1943, Normandia 1944). Másik: azt állítani, hogy a háború a németek kapitulációjával az egész világon véget ért: Japán 1945. szeptember 2-án kapitulált.',
        },
        {
          kind: 'tip',
          text: 'A fordulat magyarázatánál ezt a hármat mondd: **erőforrások** (az USA és a Szovjetunió termelése), **kezdeményezés elvesztése** (Sztálingrád, Midway), **második front** (1944). A háború lezárásánál mondd ki, hogy már Jaltában megjelent a későbbi hidegháborús szembenállás.',
        },
      ],
      topicMatch: ['=második világháború'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik csata hozta meg a fordulatot a csendes-óceáni háborúban 1942-ben?',
          options: ['Pearl Harbor', 'El-Alamein', 'Midway', 'Kurszk'],
          answer: 2,
          explanation:
            'Midwaynél az amerikai flotta több japán repülőgép-hordozót elsüllyesztett, ezután Japán már nem tudott támadó hadműveleteket folytatni.',
        },
        {
          question: 'Mi történt Sztálingrádnál?',
          options: [
            'A szövetségesek partra szálltak.',
            'A német 6. hadsereg bekerítették és kapitulált (1943. február).',
            'A németek elfoglalták a várost.',
            'Atombombát dobtak a városra.',
          ],
          answer: 1,
          explanation:
            'A sztálingrádi csata a keleti front fordulópontja volt: a német 6. hadsereg 1943 elején kapitulált.',
        },
        {
          question: 'Ki volt a szövetséges erők főparancsnoka a normandiai partraszállásnál?',
          options: ['Zsukov', 'Montgomery', 'Rommel', 'Eisenhower'],
          answer: 3,
          explanation:
            'Dwight D. Eisenhower amerikai tábornok. Zsukov szovjet, Rommel német parancsnok volt.',
        },
        {
          question:
            'Melyik konferencián döntöttek Németország megszállási övezetekre osztásáról és az ENSZ létrehozásáról?',
          options: ['Teheránban', 'Jaltában', 'Potsdamban', 'Münchenben'],
          answer: 1,
          explanation:
            'Jaltában (1945. február). Teheránban a második front volt a téma, Potsdamban a megszállás és a jóvátétel részletei, Münchenben pedig 1938-ban Csehszlovákia területéről döntöttek.',
        },
        {
          question: 'Mikor kapitulált Japán?',
          options: [
            '1945. május 9.',
            '1945. augusztus 6.',
            '1945. szeptember 2.',
            '1944. június 6.',
          ],
          answer: 2,
          explanation:
            '1945. szeptember 2-án írták alá a kapitulációt. Május 9. a német kapitulációé, augusztus 6. a hirosimai bombáé.',
        },
      ],
      sources: [
        { label: 'Wikipédia: A sztálingrádi csata', url: wiki('Sztálingrádi csata') },
        { label: 'Wikipédia: A normandiai partraszállás', url: wiki('Normandiai partraszállás') },
        { label: 'Wikipédia: Jaltai konferencia', url: wiki('Jaltai konferencia') },
      ],
    },
  ],
};

export default unit;
