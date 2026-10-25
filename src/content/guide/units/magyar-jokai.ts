import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Jókai Mór életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'jokai',
  subject: 'magyar',
  order: 54,
  title: 'Jókai Mór életműve',
  requirementRef:
    '2.1 Szerzők, művek, 1. témakör: Életművek a magyar irodalomból. Kötelező szerzők',
  intro:
    'A magyar romantikus regény mestere: az 1848-as ifjú író, a „nemzet meseírója”, a regényei nagy jelképei (Timár Mihály, a Baradlay-fiúk, Kárpáthy János) és a Senki szigete. Életút, a romantikus regény jellemzői, a főbb regények értelmezése, emelt szinten a pálya, a kor és a fogadtatás.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.1 Szerzők, művek, 1. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'jokai-eletut-1848',
      subject: 'magyar',
      unitId: 'jokai',
      title: 'Jókai életútja: 1848 és a nemzet írója',
      level: 'kozep',
      requirement: {
        kozep:
          'Az életmű néhány jellemzője keretében a művek elhelyezése az életműben és az adott korszakban.',
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság; a szerző regionális, kulturális kötődései.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Jókai Mór** (1825–1904) a 19. századi magyar regényirodalom legnépszerűbb írója; hatalmas életműve több száz kötetet tesz ki.',
            'Szülővárosa **Komárom**; jogot tanult, de már fiatalon író lett. Első regénye a *Hétköznapok* (1846).',
            '**1848. március 15.** a pesti forradalom ifjú vezéralakja: a Tízek Társaságának tagja, Petőfi barátja.',
            'A szabadságharc bukása után bujkált, majd az 1850-es években sorra írta nagy regényeit (*Egy magyar nábob*, *Kárpáthy Zoltán*); az 1860–70-es évek a csúcs (*A kőszívű ember fiai*, *Az arany ember*).',
            'Politikus és újságíró is volt, a dualizmus korában a nemzet ünnepelt írója lett.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1825', text: 'Komáromban született.' },
            {
              date: '1846',
              text: 'Megjelenik első regénye, a *Hétköznapok*; Petőfi barátja és a Tízek Társaságának tagja.',
            },
            { date: '1848. március 15.', text: 'Részt vesz a forradalomban a pesti ifjak között.' },
            {
              date: '1849 után',
              text: 'A szabadságharc bukása: bujkálás, majd az irodalmi pálya folytatása.',
            },
            { date: '1853–1854', text: '*Egy magyar nábob* és *Kárpáthy Zoltán*.' },
            { date: '1869', text: '*A kőszívű ember fiai*.' },
            { date: '1872', text: '*Az arany ember*.' },
            { date: '1904', text: 'Budapesten halt meg.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Komárom, tanulóévek, az első művek' },
        {
          kind: 'text',
          text: 'Jókai **Komáromban** született 1825-ben, a nemesi-polgári világ szélén. Gyerekként Pozsonyban és Pápán is tanult, Pápán ismerkedett meg **Petőfi Sándorral**, akivel egész életére szóló barátságot kötött. Jogi tanulmányai mellett már a húszas évei elején írt: a *Hétköznapok* (1846) hozta az első sikert. Pesten belépett abba a fiatal írókörbe, amelyet **Tízek Társaságának** neveznek (ebben Petőfivel együtt dolgozott).',
        },
        { kind: 'heading', text: '1848–49: forradalom és szabadságharc' },
        {
          kind: 'text',
          text: '**1848. március 15-én** Jókai a pesti forradalom ifjúságának tagja volt. A **12 pont** megfogalmazásában a márciusi ifjak közt vett részt. A szabadságharc idején újságíróként és íróként szolgálta az ügyet, Petőfivel együtt szerkesztett lapot is. A szabadságharc bukása után bujkálnia kellett; ebben az időszakban a felesége, **Laborfalvi Róza** színésznő támogatta.',
        },
        { kind: 'heading', text: 'A kiegyezés előtt és után' },
        {
          kind: 'text',
          text: 'Az 1850-es években fokozatosan visszatért az irodalmi életbe. Regényeit sorozatban közölték a lapok, és hatalmas olvasótábort szerzett. A kiegyezés (1867) után **országgyűlési képviselő** is lett, és az irodalmi élet egyik legfontosabb alakjaként a nemzet ünnepelt írója maradt. A regényei a kor magyar társadalmának ábrándos és hősies önképét fogalmazták meg.',
        },
        {
          kind: 'compare',
          title: 'Három korszak az életműben',
          columns: ['Időszak', 'Jellemző művek és témák'],
          rows: [
            {
              label: '1840-es évek',
              cells: ['első művek, forradalom', '*Hétköznapok*, a Tízek Társasága, 1848'],
            },
            {
              label: '1850-es évek',
              cells: [
                'a bukás után',
                'múltidéző és társadalmi regények: *Egy magyar nábob*, *Kárpáthy Zoltán*',
              ],
            },
            {
              label: '1860–1870-es évek',
              cells: [
                'a nagy regények kora',
                '*A kőszívű ember fiai* (1869), *Az arany ember* (1872)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a **kronológiai és topográfiai tájékozottság** része, hogy Jókait a szülővárosához, **Komáromhoz** (Felvidék), a reformkori Pest-Budához és a későbbi budapesti irodalmi élethez tudod kötni. A regényei világa gyakran a Duna-vidék és a határ menti terek (lásd *Az arany ember*).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Jókai egy-két regénye életműbeli elhelyezéssel (mikor és milyen helyzetben született).',
            'Irodalmi feladatlap: műfaj, korstílus (romantika), szerző–mű párosítás.',
            'Emelt szinten: életút, pályaszakaszok, Jókai és kora.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba a dátumok összekeverése: *Egy magyar nábob* 1853–54, *A kőszívű ember fiai* 1869, *Az arany ember* 1872. A három regény három különböző korszakot ír le (reformkor, 1848–49, 1830-as évek), és ne cseréld össze a keletkezés és a cselekmény idejét.',
        },
        {
          kind: 'tip',
          text: 'Az életrajzi adatot mindig kösd a műhöz: a *Kőszívű ember fiai* szabadságharcos hangja például a szerző 1848-as élményéhez kapcsolódik. A puszta életrajz-felsorolás kevés a vizsgán.',
        },
      ],
      topicMatch: ['jókai'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik városban született Jókai Mór?',
          options: ['Pozsony', 'Komárom', 'Pápa', 'Kecskemét'],
          answer: 1,
          explanation:
            'Jókai Komáromban született 1825-ben; Pápán és Pozsonyban tanult, de a szülővárosa Komárom.',
        },
        {
          question: 'Melyik költővel kötött Jókai életre szóló barátságot a diákévek alatt?',
          options: ['Arany János', 'Vörösmarty Mihály', 'Petőfi Sándor', 'Kölcsey Ferenc'],
          answer: 2,
          explanation:
            'Jókai Petőfi barátja volt, együtt vettek részt 1848 márciusában a forradalmi ifjak között.',
        },
        {
          question: 'Melyik az író első regénye?',
          options: ['Az arany ember', 'Hétköznapok', 'Egy magyar nábob', 'Fekete gyémántok'],
          answer: 1,
          explanation: 'A *Hétköznapok* 1846-ban jelent meg; a többi mű későbbi.',
        },
        {
          question: 'Mikor jelent meg *A kőszívű ember fiai*?',
          options: ['1846', '1853', '1869', '1894'],
          answer: 2,
          explanation: 'A regény 1869-ben jelent meg, a kiegyezés után néhány évvel.',
        },
        {
          question: 'Melyik fogalom jellemzi Jókai szerepét az irodalomban a legjobban?',
          options: [
            'A magyar romantikus regény nagy mestere.',
            'A magyar szimbolista líra úttörője.',
            'A magyar naturalizmus alapítója.',
            'A reformkori nyelvújítás vezére.',
          ],
          answer: 0,
          explanation:
            'Jókai regényei a romantikus prózát képviselik, a „nemzet meseírója” szerep ehhez kötődik.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Jókai Mór', url: wiki('Jókai Mór') },
        { label: 'Wikipédia: Tízek Társasága', url: wiki('Tízek Társasága') },
        { label: 'Wikipédia: A 12 pont', url: wiki('12 pont 1848') },
      ],
    },
    {
      id: 'jokai-romantikus-regeny',
      subject: 'magyar',
      unitId: 'jokai',
      title: 'A jókai-regény: a romantikus regény jellemzői',
      level: 'kozep',
      requirement: {
        kozep:
          'A művek értelmezése a korstílus, a téma, a műfaj, a kompozíció, a jellemző motívumok, jelentésrétegek, világlátás alapján; műnemek és műfajok felismerése.',
        emelt: 'Regényformák, regénytípusok; a hőstípusok és kifejezésmódok változása.',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **romantikus regény** a kivételes hősöket, nagy érzelmeket, kalandot és erkölcsi küzdelmet állítja a középpontba.',
            'Jókai világa **fekete-fehér is, színes is**: a jó és a rossz világosan elkülönül, a jó végül győz vagy erkölcsi győzelmet arat.',
            'Jellemző motívumok: **a sziget**, az **álarc és a kettős élet**, az **aranyvagyon**, a **szerelem és a kötelesség**, a **haza szolgálata**.',
            'A narrátor **szereplő-mesélő**, aki kommentál, humorizál, az olvasóhoz fordul; a történet gyakran kalandos és szerkezetileg lazább.',
            'A nyelv **képekben gazdag**, színes, költői, a leírások hosszúak és festőiek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a romantika a regényben?' },
        {
          kind: 'text',
          text: 'A **romantika** a 19. század első felének irányzata: az egyén szabadsága, a nemzet, a képzelet, a kivételes élethelyzetek és a nagy érzelmek áll a középpontban. A regényben ez azt jelenti, hogy a hős **kivételes ember**, a cselekmény **fordulatos**, a konfliktus pedig **erkölcsi próba**. Jókai sajátossága, hogy a romantikus eszményeket a **magyar történelem és társadalom** anyagába ültette.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'romantikus regény',
              text: 'Kivételes hősökre, nagy érzelmekre, kalandra és erkölcsi küzdelemre épülő regénytípus.',
            },
            {
              term: 'kettős élet, álarc',
              text: 'A hős két világban él, ezek közt feszül az erkölcsi dilemma (például Timár Mihály).',
            },
            {
              term: 'sziget',
              text: 'A társadalomtól elszigetelt, ideális hely: a boldogság és az ártatlanság jelképe (*Az arany ember*: a Senki szigete).',
            },
            {
              term: 'mindentudó, kommentáló elbeszélő',
              text: 'A narrátor az eseményeket nemcsak elmondja, hanem értékeli, humorral, szenvedéllyel kíséri.',
            },
          ],
        },
        { kind: 'heading', text: 'Hősök, szerkezet, nyelv' },
        {
          kind: 'text',
          text: 'Jókai hősei gyakran **eszménnyé nőnek**: önfeláldozók, bátrak, a haza vagy a család érdekében cselekszenek. A mellékalakok színesek, olykor komikusak. A szerkezet **epizodikus és fordulatos**, a történet több szálon fut, kitérők, leírások szakítják meg. A nyelve **képekben gazdag**: a természetleírás, a hasonlat és a túlzás (hiperbola) sajátos jókais hangot ad.',
        },
        {
          kind: 'compare',
          title: 'Jókai két regénytípusa',
          columns: ['Történelmi-hősi regény', 'Társadalmi-kalandregény'],
          rows: [
            { label: 'Példa', cells: ['*A kőszívű ember fiai*', '*Az arany ember*'] },
            {
              label: 'Téma',
              cells: ['a nemzeti sors, 1848–49, hazafiság', 'pénz, erkölcs, boldogság, kettős élet'],
            },
            {
              label: 'Hős',
              cells: ['egy család fiai, közös eszme', 'egy kivételes egyén, belső küzdelem'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a regény **történeti változása** is téma: a romantikus regény eszményítő, mesélő hangját a **realizmus** (Mikszáth, majd a 20. század regényei) ironikusabb, életszerűbb ábrázolása váltja. Jókai regényeiben a két irányzat határai néha összemosódnak: a társadalomrajz és a pénzvilág ábrázolása már a realizmus felé mutat.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műfaj- és korstílus-azonosítás egy regényrészletben (romantika, tipikus jókai-motívum).',
            'Műértelmező szövegalkotás Jókai-regényrészletről: téma, szereplők, narrátor, nyelvi eszközök.',
            'Szóbeli tétel: a romantikus regény jellemzői két mű példáján.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a romantikát a „szerelmes” szóval azonosítod. A romantika sokkal több: egyén és közösség, szabadság, nemzet, képzelet, kivételes hős. A jókai-regény nem „csak” szerelmi történet.',
        },
        {
          kind: 'tip',
          text: 'Részletértelmezésnél keress három dolgot: **1.** milyen a hős és a helyzet; **2.** mit tesz az elbeszélő (kommentál, lírai hangot használ); **3.** milyen képek, jelzők, hasonlatok adják a hangulatot. A jellemző motívumok felismerése (sziget, kettős élet, arany) segít az elhelyezésben.',
        },
      ],
      topicMatch: ['jókai'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik irányzathoz sorolható Jókai regényírása?',
          options: ['Klasszicizmus', 'Romantika', 'Szimbolizmus', 'Naturalizmus'],
          answer: 1,
          explanation:
            'Jókai a magyar romantikus próza legnagyobb alakja: kivételes hősök, nagy érzelmek, kalandos cselekmény.',
        },
        {
          question: 'Melyik jellemző a jókai-regények elbeszélőjére?',
          options: [
            'Személytelen, semleges, megfigyelő.',
            'Kommentál, humorizál, az olvasóhoz fordul.',
            'Csak egyes szám első személyben beszél.',
            'Kizárólag a szereplők gondolatait idézi.',
          ],
          answer: 1,
          explanation:
            'Jókai narrátora mindentudó és kommentáló, jelen van a történetben, érzelmeket, humort visz bele.',
        },
        {
          question: 'Mit jelképez a sziget a romantikus regényben?',
          options: [
            'A veszélyt és a bűnt.',
            'Az elszigetelt, ideális boldogság helyét.',
            'A hatalmat.',
            'A történelmi múltat.',
          ],
          answer: 1,
          explanation:
            'A sziget az ideális, civilizációtól távoli világ jelképe, a *Senki szigete* ennek a legismertebb példája.',
        },
        {
          question: 'Melyik állítás igaz a jókai-hősökre?',
          options: [
            'Hétköznapi, jellegtelen emberek.',
            'Gyakran kivételes, eszményített alakok.',
            'Mindig negatív figurák.',
            'Elvont, név nélküli típusok.',
          ],
          answer: 1,
          explanation:
            'A romantika kivételes hőst teremt, Jókainál ez önfeláldozó, bátor vagy erkölcsi próbát álló figura.',
        },
        {
          question: 'Melyik irányzat hozott ironikusabb, életszerűbb regényábrázolást Jókai után?',
          options: ['Romantika', 'Realizmus', 'Barokk', 'Reneszánsz'],
          answer: 1,
          explanation:
            'A realizmus (például Mikszáth prózája) a romantikus eszményítést életszerűbb, ironikus ábrázolással váltotta fel.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Romantika', url: wiki('Romantika irodalom') },
        { label: 'Wikipédia: Jókai Mór', url: wiki('Jókai Mór') },
        { label: 'Wikipédia: Regény', url: wiki('Regény műfaj') },
      ],
    },
    {
      id: 'jokai-az-arany-ember',
      subject: 'magyar',
      unitId: 'jokai',
      title: 'Az arany ember',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása, értelmezése: korstílus, téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás; etikai, társadalmi vonatkozások.',
        emelt:
          'Motívumok, szerkezet és kérdésfeltevések; az etikai, lélektani, társadalmi, filozófiai vonatkozások; a mű hatása és fogadtatása.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '*Az arany ember* (1872) Jókai egyik legismertebb regénye: társadalmi és kalandregény, romantikus alapokon.',
            'A főhős **Timár Mihály**, aki kettős életet él: a komáromi gazdag kereskedő és a **Senki szigetén** élő egyszerű ember.',
            'Fő kérdés: **mit ér a vagyon, és mi a boldogság?** A mű az anyagi gazdagság és a lelki béke ellentétét állítja szembe.',
            'Központi női alakok: **Timéa** (a törvényes feleség), **Noémi** (a szigeten élő szerelem) és **Athalie**.',
            'Főbb motívumok: **sziget**, **arany**, **kettős élet**, **természet és civilizáció**.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A cselekmény vázlata' },
        {
          kind: 'text',
          text: '**Timár Mihály** hajóskapitány, akit a környezete tisztel, mert becsületes, ügyes. A **Szent Borbála** nevű hajó útján rábízták **Ali Csorbadzsi** vagyonát. A főhős úgy dönt, hogy megtartja a vagyont, és ebből gazdag kereskedő lesz **Komáromban**. Elveszi **Timéát**, a tönkrement Brazovics Athanáz lányát, de a szíve a **Senki szigetén** élő **Noémihez** húzza. Timár tehát két világban él: Komáromban a tekintélyes, gazdag férj, a szigeten a szabad, boldog ember.',
        },
        {
          kind: 'text',
          text: 'A bonyodalmakat a titok, a lelkiismeret és az emberek fenyegetése hozza: **Krisztyán Tódor** (aki a háttérben zsarolja) és a kor rideg, pénzsóvár környezete. A végén Timár számot vet az életével, lemond a vagyonról és a társadalmi szerepéről, de a sziget idilli világát nem tudja visszaállítani.',
        },
        {
          kind: 'people',
          items: [
            { name: 'Timár Mihály', text: 'a főhős, a kettős életű, „arany ember”: energikus, tehetséges, de a bűntudata és a vágyai szétfeszítik.' },
            { name: 'Timéa', text: 'Brazovics lánya, Timár felesége; a kötelesség és a társadalmi világ alakja.' },
            { name: 'Noémi', text: 'a Senki szigetének lakója, természetközeli, ideális, a boldogság és a szabadság jelképe.' },
            { name: 'Krisztyán Tódor', text: 'a zsaroló, a kor önző, erkölcstelen típusa.' },
            { name: 'Athalie', text: 'Krisztyán Tódor társa; a számító, pénzközpontú világ alakja.' },
          ],
        },
        { kind: 'heading', text: 'Értelmezés: témák, motívumok, kompozíció' },
        {
          kind: 'text',
          text: 'A mű **két teret** állít szembe. A **Duna menti város** (Komárom) a pénz, a hatalom, a társadalmi elvárások világa. A **Senki szigete** a Duna alsó folyásánál, a török határvidéken fekszik: elzárt, természetközeli hely, ahol a hős igazán önmaga lehet. A **sziget** az emberi boldogság és az ártatlanság romantikus jelképe, de Jókai azt is megmutatja, hogy az ideális világ **törékeny**: hosszú távon nem menthető a külvilág elől.',
        },
        {
          kind: 'compare',
          title: 'A két világ a regényben',
          columns: ['Komárom (a társadalom)', 'Senki szigete (a természet)'],
          rows: [
            { label: 'Érték', cells: ['pénz, rang, tekintély', 'szabadság, szerelem, egyszerűség'] },
            { label: 'Nő', cells: ['Timéa', 'Noémi'] },
            { label: 'Hős szerepe', cells: ['gazdag kereskedő, a „megtartott” titkokkal', 'őszinte, boldog ember'] },
          ],
        },
        {
          kind: 'text',
          text: 'A regény **kompozíciója** a kettősségre épül: kettős élet, két női alak, két tér. Az elbeszélő időnként elidőzik a természetleírásoknál, majd gyorsan fordulatos jeleneteket mesél. A **címadó** „arany ember” kifejezés kétértelmű: arany a vagyon, de arany a jellem is. A mű erkölcsi kérdése: **megőrizheti-e az ember az önazonosságát, ha a boldogságát bűnre építi?**',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten kérdés a **hatás és a fogadtatás**: a regény az egyik legtöbbet olvasott és adaptált magyar mű. Érdemes a szigetmotívumot más művekkel összekötni (a sziget mint ideális hely a világirodalomban és a magyar irodalomban), valamint a **társadalombírálatot** és a **lélektani** vonatkozásokat (a bűntudat, a kettős lét kényszere) kifejteni.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: a mű témája, szerkezete, szereplői, jellemző motívumai és a világlátása.',
            'Összekapcsolás más művekkel: sziget- és kertmotívum, kettős élet, pénz és boldogság.',
            'Részletértelmezés: a Senki szigete leírása vagy egy Timár-jelenet elemzése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a cselekményt meséled el az értelmezés helyett. A vizsgán a **kérdésre** válaszolj: téma, szerkezet, motívumok, jelentés. A cselekmény csak annyit kapjon, amennyi az érveléshez kell.',
        },
        {
          kind: 'example',
          title: 'Válaszvázlat: „Mit jelent a Senki szigete a regényben?”',
          problem:
            'Fejtsd ki röviden, mit jelképez a Senki szigete *Az arany ember* világában!',
          solution:
            '**1.** Bevezetés: Jókai romantikus regénye, két tér szembeállítása. **2.** A sziget jellemzői: elzárt, természetközeli, a civilizáción kívüli. **3.** Jelentése: a szabadság, az ártatlan szerelem és a boldogság jelképe, Noémi és Timár belső békéjének helye. **4.** Ellentét: Komárom, a pénz és a társadalmi elvárások világa. **5.** Kicsengés: az ideális világ törékeny, a mű a vagyon és a boldogság viszonyát kérdezi.',
        },
        {
          kind: 'tip',
          text: 'A „kettős” szó kulcsszó: kettős élet, két tér, két nő, két érték. Ha ezt a szerkezeti gondolatot végigviszed az értelmezésen, az válasz összefogott és meggyőző lesz.',
        },
      ],
      topicMatch: ['jókai'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Ki a főhőse *Az arany ember* című regénynek?',
          options: ['Kárpáthy János', 'Baradlay Ödön', 'Timár Mihály', 'Szentirmay Rudolf'],
          answer: 2,
          explanation: 'A főhős Timár Mihály, a kettős életű hajóskapitányból lett kereskedő.',
        },
        {
          question: 'Hol él a regényben Noémi?',
          options: ['Komáromban', 'A Senki szigetén', 'Bécsben', 'Pesten'],
          answer: 1,
          explanation: 'Noémi a Senki szigetén él, a természet és a boldogság világában.',
        },
        {
          question: 'Mit jelképez a regényben a Senki szigete?',
          options: [
            'A hatalmat és a vagyont.',
            'Az ártatlan boldogság és szabadság helyét.',
            'A háború színterét.',
            'A bűnös város jelképét.',
          ],
          answer: 1,
          explanation:
            'A sziget a romantikus ideális hely: elzárt, természetközeli, ahol a hős valóban önmaga lehet.',
        },
        {
          question: 'Mi a regény egyik központi kérdése?',
          options: [
            'Mit ér a vagyon, és miből lesz az igazi boldogság?',
            'Hogyan lehet megnyerni a szabadságharcot?',
            'Miért bukik meg a reformkor?',
            'Hogyan működik a vármegyei közigazgatás?',
          ],
          answer: 0,
          explanation:
            'A mű a pénz és a lelki béke, a társadalmi szerep és az önazonosság kérdését állítja szembe.',
        },
        {
          question: 'Melyik szerkezeti elv jellemzi leginkább a regényt?',
          options: [
            'A kettősség: két tér, két világ, két női alak.',
            'A levélregény formája.',
            'A kronológiai napló.',
            'A verses szerkezet.',
          ],
          answer: 0,
          explanation:
            'A regény kettős életre, két térre (Komárom és sziget) és két női sorsra épül.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Az arany ember', url: wiki('Az arany ember Jókai regény') },
        { label: 'Wikipédia: Ada Kaleh', url: wiki('Ada Kaleh') },
        { label: 'Wikipédia: Jókai Mór', url: wiki('Jókai Mór') },
      ],
    },
    {
      id: 'jokai-koszivu-ember-nabob',
      subject: 'magyar',
      unitId: 'jokai',
      title: 'A kőszívű ember fiai és Egy magyar nábob',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása és értelmezése (korstílus, téma, műfaj, kompozíció, motívumok, világlátás); kapcsolatok a művek között.',
        emelt:
          'A művekben felvetett kérdések történeti, társadalmi, etikai vonatkozásai; a művek hatása és fogadtatása.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '*Egy magyar nábob* (1853–54) a **reformkor** világát mutatja be: a gazdag arisztokrata (nábob), a hazafiság és az elherdált vagyon.',
            '*A kőszívű ember fiai* (1869) az **1848–49-es szabadságharc** regénye: a Baradlay család három fia más-más úton jár.',
            'Mindkét regény a **nemzeti történelem** és a **családi sors** összefonódását mutatja.',
            'A fő motívumok: a **haza szolgálata**, az **áldozat**, a **család**, a **generációk** (apák és fiúk).',
            'A hang romantikus, hősies, a nemzeti önkép szolgálatában áll.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Egy magyar nábob és a folytatása' },
        {
          kind: 'text',
          text: 'Az *Egy magyar nábob* a reformkori nemesi világot ábrázolja. **Kárpáthy János** a hatalmas vagyonú, különc nábob, akinek igazi erénye a hazafias gondolkodás. Mellette a reformeszmék, az **ősi nemesi életforma** és az újítók közötti feszültség jelenik meg. A történet a *Kárpáthy Zoltán* című folytatással egészül ki. A regény a reformkor szellemét **ünnepli, de ironikusan is látja**: a pazarlás, a hiúság és a hazafiság együtt szerepel benne.',
        },
        { kind: 'heading', text: 'A kőszívű ember fiai' },
        {
          kind: 'text',
          text: 'A regény a **Baradlay család** története. A hívó cím az apára, **Baradlay Kázmérra** utal, akit a kortársai „kőszívű embernek” tartottak, de fiai és özvegye a legnagyobb áldozatot vállalják a hazáért. A három fiú, **Ödön, Richárd és Jenő** más-más életutat jár be, de mindegyikük a haza ügyét szolgálja a szabadságharcban. Az **anya**, **Baradlayné** az erkölcsi erő és a hűség jelképe.',
        },
        {
          kind: 'text',
          text: 'A regény a szabadságharcot **családi történetként** mutatja meg: a közös ügy mellett a személyes sorsok, szerelmek, kapcsolatok, áldozatok is megjelennek. A hős mindig a közösség és a hűség értékét képviseli. A **romantikus pátosz** és a **mozgalmas, kalandos jelenetek** jellemzőek.',
        },
        {
          kind: 'compare',
          title: 'A két regény összevetése',
          columns: ['Egy magyar nábob', 'A kőszívű ember fiai'],
          rows: [
            { label: 'Kor', cells: ['reformkor', '1848–49, szabadságharc'] },
            { label: 'Központ', cells: ['a nábob és a nemesi világ', 'a Baradlay család'] },
            { label: 'Fő téma', cells: ['hazafiság, vagyon, megújulás', 'áldozat, hűség, haza'] },
            { label: 'Hang', cells: ['humor és pátosz', 'hősi pátosz'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a **fogadtatás és hatás** is kérdés: *A kőszívű ember fiai* a szabadságharc nemzeti emlékezetének egyik fő irodalmi forrása lett, a nemzeti önkép formálója. A **társadalmi és etikai** kérdések (áldozat, kötelesség, a család és a haza viszonya) több nézőpontból elemezhetők.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel Jókai két művéről: témák, szerkezet, hősök, kapcsolat a romantikával.',
            'Összehasonlítás: *Az arany ember* és *A kőszívű ember fiai* (magánélet és közélet, egyéni és közösségi hős).',
            'Motívumok: család, haza, áldozat, generációk.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd a regények korszakát: a *Nábob* a reformkorban, a *Kőszívű ember fiai* 1848–49-ben játszódik, *Az arany ember* pedig az 1830-as években. Ne tulajdoníts egy regény szereplőt a másiknak.',
        },
        {
          kind: 'example',
          title: 'Összehasonlítás vázlata',
          problem:
            'Hasonlítsd össze röviden *A kőszívű ember fiai* és *Az arany ember* hősét!',
          solution:
            '**Hasonlóság:** mindkét regény romantikus, kivételes hősökkel, erkölcsi próbával. **Különbség:** a Baradlay-fiúk **közösségi hősök**, a haza és a család szolgálatában állnak; Timár **egyéni hős**, a belső, erkölcsi küzdelem áll a középpontban. Az egyik a **nemzeti sors**, a másik a **pénz és boldogság** kérdését vizsgálja.',
        },
        {
          kind: 'tip',
          text: 'Egy rövid, két regényre épülő válaszhoz használd a szerkezetet: **téma – hős – tér/idő – motívum – hang**. Így mindkét műről ugyanazokat a szempontokat érinted.',
        },
      ],
      topicMatch: ['jókai'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik korszakot ábrázolja *A kőszívű ember fiai*?',
          options: ['A reformkort', 'Az 1848–49-es szabadságharcot', 'A török kort', 'A kiegyezést'],
          answer: 1,
          explanation: 'A regény a Baradlay család sorsát a szabadságharc eseményei között mutatja.',
        },
        {
          question: 'Hány fia van a Baradlay családnak a regényben?',
          options: ['Kettő', 'Négy', 'Három', 'Öt'],
          answer: 2,
          explanation: 'A három fiú: Ödön, Richárd és Jenő.',
        },
        {
          question: 'Melyik regény főhőse Kárpáthy János?',
          options: [
            'Egy magyar nábob',
            'Az arany ember',
            'A kőszívű ember fiai',
            'Fekete gyémántok',
          ],
          answer: 0,
          explanation: 'Kárpáthy János az *Egy magyar nábob* címszereplője, a reformkori nábob.',
        },
        {
          question: 'Melyik motívum kapcsolja össze a *Kőszívű ember fiai* alakjait?',
          options: [
            'A haza szolgálata és a családi összetartozás.',
            'A vagyonszerzés.',
            'A magányos sziget.',
            'A tudományos felfedezés.',
          ],
          answer: 0,
          explanation: 'A regény a haza ügye és a család áldozatvállalása köré épül.',
        },
        {
          question: 'Miért fontos a *Kőszívű ember fiai* a nemzeti emlékezetben?',
          options: [
            'A szabadságharc hőseszményét közvetítette sok olvasónak.',
            'Ez az első magyar regény.',
            'A kiegyezés ellen szól.',
            'Verses formában íródott.',
          ],
          answer: 0,
          explanation:
            'A regény a nemzeti önkép és a szabadságharc emlékezetének egyik fő irodalmi forrása lett.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A kőszívű ember fiai', url: wiki('A kőszívű ember fiai') },
        { label: 'Wikipédia: Egy magyar nábob', url: wiki('Egy magyar nábob') },
        { label: 'Wikipédia: Jókai Mór', url: wiki('Jókai Mór') },
      ],
    },
    {
      id: 'jokai-palya-kora-fogadtatas',
      subject: 'magyar',
      unitId: 'jokai',
      title: 'Jókai pályája, kora és fogadtatása',
      level: 'emelt',
      requirement: {
        emelt:
          'A pályaszakaszokat jellemző témák; a pályaképre ható irányzatok, világirodalmi párhuzamok; tájékozottság a korszakban, a kortársak között (pl. Jókai és kora); a művek hatása, fogadtatása; a szerző utóélete; különféle kritikák, interpretációk.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Jókai az **irodalmi közvélemény** és az olvasók kedvence volt: a regényeit sorozatban közölték, hatalmas közönséget ért el.',
            'A **kortársak** közt Arany, Petőfi és Mikszáth áll a legközelebb: az utóbbi Jókai tanítványa és méltatója volt.',
            'A **világirodalmi párhuzamok** a romantikus regényíróhoz kötik (például Victor Hugo, Walter Scott, Dumas).',
            'A **fogadtatás** nem egyszerű: a nagy népszerűség mellett a kritika ellenvetései is megjelentek (a kalandos cselekmény, az eszményítés).',
            'Az **utóélet**: a mű ma is kötelező olvasmány, filmek, tévéadaptációk, a nemzeti emlékezet része.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Pályaszakaszok' },
        {
          kind: 'text',
          text: 'Jókai pályája három nagy szakaszra bontható. **1.** Az **1840-es évek**: induló író, az ifjú író Petőfi barátja, a forradalom résztvevője. **2.** Az **1850–60-as évek**: a bukás után a romantikus eszmények és a társadalombírálat; a múltidéző és társadalmi regények. **3.** A **kiegyezés utáni évtizedek**: a nagy regények, a nemzet ünnepelt írója, a politikai és irodalmi közélet meghatározó alakja.',
        },
        { kind: 'heading', text: 'Hatások, párhuzamok' },
        {
          kind: 'text',
          text: 'A pályájára a **romantika** európai irodalma hatott. A világirodalmi párhuzamok közé tartozik **Walter Scott** történelmi regénye, **Victor Hugo** pátoszos, kivételes hősöket felvonultató prózája és **Alexandre Dumas** kalandregénye. Jókai ezeket a hatásokat **magyar anyagra** alkalmazta: a nemzeti történelem, a hazafias szellem és a magyar táj lett a keret.',
        },
        { kind: 'heading', text: 'Jókai és kora, Mikszáth' },
        {
          kind: 'text',
          text: '**Mikszáth Kálmán** (1847–1910) Jókai fiatalabb kortársa, tanítványa és méltatója volt. Mikszáth az anekdotikus, ironikus elbeszélő hagyományt Jókaitól tanulta, de az ábrázolásban a **realizmus** felé lépett: a hősök kisszerűbbek, a hang ironikusabb. Mikszáth írt Jókai életéről is (*Jókai Mór élete és kora*). A két író viszonya jól mutatja a romantikus és a realista próza **azonosságát és változását**.',
        },
        {
          kind: 'compare',
          title: 'Jókai és Mikszáth prózája',
          columns: ['Jókai', 'Mikszáth'],
          rows: [
            { label: 'Hős', cells: ['eszményített, kivételes', 'hétköznapibb, esendőbb'] },
            { label: 'Hang', cells: ['pátosz és humor', 'irónia és anekdota'] },
            { label: 'Irányzat', cells: ['romantika', 'realizmus (romantikus hagyománnyal)'] },
          ],
        },
        { kind: 'heading', text: 'Fogadtatás és utóélet' },
        {
          kind: 'text',
          text: 'Jókai már életében **a legnépszerűbb magyar író** volt, ünnepelték. A kritika viszont gyakran bírálta az **eszményítést**, a kalandos cselekményvezetést, a hősök fekete-fehér megrajzolását. Az utóélet ellentmondásos: egyszerre **olvasmányélmény** és az **irodalmi kánon** része, adaptációk és újraolvasások tárgya. A modern olvasatok a **pénzvilág, a kettős identitás, a természet és a civilizáció** kérdéseit emelik ki, ezért sokféle interpretáció létezik.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szóbeli tétel: pályakép, kortársak, hatások, fogadtatás egy-két példával.',
            'Kérdés a romantikus és a realista próza viszonyáról (Jókai és Mikszáth).',
            'Esszé: Jókai szerepe a nemzeti irodalom és a közös emlékezet alakításában.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondj olyan világirodalmi hatást, amelyben nem vagy biztos. A vizsgán egy-két jól ismert párhuzam (például Scott, Hugo, Dumas) és konkrét magyar példa többet ér, mint hosszú, bizonytalan felsorolás.',
        },
        {
          kind: 'tip',
          text: 'Emelt szinten az értékelés része a **saját álláspont**: mondd meg, mit tartasz Jókai legfontosabb hatásának, és indokold egy-két regénnyel. Ez többet ér a puszta felsorolásnál.',
        },
      ],
      topicMatch: ['jókai'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Melyik író Jókai tanítványa és méltatója volt?',
          options: ['Mikszáth Kálmán', 'Móricz Zsigmond', 'Ady Endre', 'Kosztolányi Dezső'],
          answer: 0,
          explanation: 'Mikszáth Kálmán Jókai hagyományát folytatta, és írt is róla.',
          emelt: true,
        },
        {
          question: 'Melyik irányzat hatott Jókai regényeire?',
          options: ['Romantika', 'Naturalizmus', 'Szimbolizmus', 'Avantgárd'],
          answer: 0,
          explanation: 'Jókai a romantikus világirodalom hatása alatt írta a regényeit.',
          emelt: true,
        },
        {
          question: 'Melyik állítás igaz Jókai és Mikszáth viszonyára?',
          options: [
            'Mikszáth ironikusabb, realistább hangot használ.',
            'Mikszáth romantikusabb, mint Jókai.',
            'Nincs közöttük kapcsolat.',
            'Mindketten klasszicista költők.',
          ],
          answer: 0,
          explanation:
            'Mikszáth a romantikus hagyományt ironikus, realista szemlélettel folytatja.',
          emelt: true,
        },
        {
          question: 'Mi a kritika egyik gyakori ellenvetése Jókaival szemben?',
          options: [
            'A hősök eszményítése, a fekete-fehér ábrázolás.',
            'A nyelv szegényessége.',
            'A cselekmény hiánya.',
            'A magyar téma elhanyagolása.',
          ],
          answer: 0,
          explanation:
            'A kritika gyakran az eszményítő, kalandos és fekete-fehér ábrázolást bírálta.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Jókai Mór', url: wiki('Jókai Mór') },
        { label: 'Wikipédia: Mikszáth Kálmán', url: wiki('Mikszáth Kálmán') },
        { label: 'Wikipédia: Romantika', url: wiki('Romantika irodalom') },
      ],
    },
  ],
};

export default unit;
