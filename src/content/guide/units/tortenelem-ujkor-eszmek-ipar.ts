import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 4.1, 4.2, 4.5, 4.6 and 4.7 (eszmék, ipari forradalom, munkásmozgalom, polgári állam, gyarmatosítás). */
const unit: GuideUnit = {
  id: 'ujkor-eszmek-ipar',
  subject: 'tortenelem',
  order: 42,
  title: 'Eszmék és ipari forradalom: liberalizmus, gyárak, szocializmus, nemzetállam, gyarmatok',
  requirementRef: '4.1, 4.2, 4.5, 4.6, 4.7',
  intro:
    'Hogyan változtatta meg a 19. századot a gőzgép, a villanyáram, a gyár és néhány nagy eszme? A politikai irányzatok, az ipari forradalom két hulláma, a munkásmozgalom, a polgári nemzetállam és a gyarmatosítás egy láncolatban.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (4. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'liberalizmus',
        'nacionalizmus',
        'konzervativizmus',
        'szocializmus',
        'keresztényszocializmus',
        'kommunizmus',
        'ipari forradalom',
        'tőkés',
        'bérmunkás',
        'kapitalizmus',
        'szabad verseny',
        'gyár',
        'tömegtermelés',
        'munkanélküliség',
        'urbanizáció',
        'népességrobbanás',
        'nemzetállam',
        'jogegyenlőség',
        'alkotmány',
        'alkotmányos monarchia',
        'népfelség',
        'polgárháború',
        'szegregáció',
        'gyarmat',
      ],
      emelt: [
        'T-modell',
        'kartell',
        'Kommunista kiáltvány',
        'Internacionálé',
        'anarchizmus',
        'Rerum Novarum enciklika',
        'kultúrharc',
        'Republikánus és Demokrata Párt',
        'hármas szövetség',
      ],
    },
    people: {
      kozep: ['Watt', 'Adam Smith', 'Metternich', 'Marx', 'Edison', 'Ford', 'Bismarck', 'Lincoln'],
      emelt: ['Burke', 'Mill', 'Puskás Tivadar', 'Kandó Kálmán', 'Prohászka Ottokár'],
    },
    dates: {
      kozep: ['1776', '1789', '1815', '1871'],
      emelt: [
        '1863 a rabszolgaság megszüntetése az USA-ban',
        '1866 a königgrätzi csata',
        '1878 a berlini kongresszus',
      ],
    },
    places: {
      kozep: [
        'Nagy-Britannia',
        'Manchester',
        'Németország',
        'Olaszország',
        'Amerikai Egyesült Államok',
        'New York',
        'Brit Birodalom',
        'Osztrák–Magyar Monarchia',
      ],
      emelt: ['Elzász-Lotaringia', 'Szuezi-csatorna', 'Balkán', 'Fashoda'],
    },
  },
  pages: [
    {
      id: 'politikai-eszmek-19-szazad',
      subject: 'tortenelem',
      unitId: 'ujkor-eszmek-ipar',
      title: 'Új politikai eszmék: liberalizmus, nacionalizmus, konzervativizmus',
      level: 'kozep',
      requirement: {
        kozep: 'Új eszmék: liberalizmus, nacionalizmus, konzervativizmus',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A felvilágosodás, az amerikai függetlenség (**1776**) és a francia forradalom (**1789**) után három nagy politikai eszme alakította a 19. századot.',
            'A **liberalizmus** az egyén szabadságát, a jogegyenlőséget, az alkotmányt és a szabad piacot követelte.',
            'A **nacionalizmus** a nemzetet tekintette a politikai közösség alapjának: nemzetállamot akart (Németország, Olaszország), vagy a birodalmakból való kiválást.',
            'A **konzervativizmus** a hagyományt, a rendet és a fokozatos változást védte a forradalmakkal szemben. Képviselője a bécsi kongresszus után **Metternich** volt.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'liberalizmus',
              text: 'A szabadságot tartja a legfőbb értéknek: szabadságjogok, törvény előtti egyenlőség, hatalmi ágak megosztása, alkotmány, szabad verseny.',
            },
            {
              term: 'nacionalizmus',
              text: 'Az az eszme, amely szerint a nyelvi, kulturális és történelmi közösségre épülő nemzet joga az önrendelkezés és a saját állam.',
            },
            {
              term: 'konzervativizmus',
              text: 'A hagyományokra, a vallásra és a fennálló társadalmi rendre épít, a változást óvatosan, lépésenként tartja elfogadhatónak.',
            },
            {
              term: 'népfelség',
              text: 'A hatalom forrása a nép (a nemzet), nem az uralkodó. A felvilágosodás és a forradalmak öröksége.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Honnan jönnek az eszmék?' },
        {
          kind: 'text',
          text: 'A 18. századi **felvilágosodás** az észre és az egyén jogaira épített: a hatalmi ágak megosztása, a társadalmi szerződés, az emberi jogok gondolata mind innen ered. Ezt a gyakorlatba az **amerikai függetlenségi háború** (a Függetlenségi nyilatkozat **1776**-ban) és a **francia forradalom** (**1789**, az Emberi és polgári jogok nyilatkozata) vitte át. A 19. század politikai irányzatai e két esemény megítélése körül szerveződtek: elfogadták-e a forradalmak elveit, vagy védekeztek ellenük?',
        },
        { kind: 'heading', text: 'Liberalizmus' },
        {
          kind: 'text',
          text: 'A liberálisok szerint az államnak az egyén jogait kell védenie, nem korlátoznia. Követeléseik:\n- **alkotmány** és törvény előtti egyenlőség (**jogegyenlőség**), a rendi kiváltságok megszüntetése;\n- **szabadságjogok**: szólás-, sajtó-, vallás- és gyülekezési szabadság;\n- a hatalmi ágak megosztása, **képviseleti rendszer** (parlament), alkotmányos monarchia vagy köztársaság;\n- gazdaságban a **szabad verseny**, a magántulajdon védelme. A szabad piac gondolatát **Adam Smith** fogalmazta meg: szerinte az egyéni érdekek követése a piac „láthatatlan keze” révén a közjót is szolgálja.',
        },
        {
          kind: 'text',
          text: 'A korai liberálisok jórészt a **vagyonos polgárok** és a felvilágosult nemesség közül kerültek ki, ezért a választójogot sokáig vagyoni feltételhez (cenzushoz) kötötték. A teljesen **általános választójog** követelése később már a demokratákhoz és a szocialistákhoz kötődött.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A brit gondolkodó **John Stuart Mill** *A szabadságról* című művében (1859) azt fejtette ki, hogy az egyén szabadságát csak akkor szabad korlátozni, ha mások kárt szenvednének; ez a modern liberalizmus egyik alapgondolata.',
        },
        { kind: 'heading', text: 'Nacionalizmus' },
        {
          kind: 'text',
          text: 'A francia forradalom a **nemzetet** tette meg a szuverenitás hordozójának (népfelség). A napóleoni háborúk ezt az eszmét egész Európában elterjesztették, és a megszállt népek között ellenállást is kiváltottak. A nacionalisták szerint a nemzetet a **közös nyelv, kultúra, történelem és származástudat** köti össze, és joga van saját államhoz.',
        },
        {
          kind: 'keypoints',
          title: 'A nacionalizmus két iránya',
          items: [
            '**Egyesítő** nacionalizmus: egy szétszabdalt nemzet egyesítése. **Olaszország** egységes királysága 1861-ben jött létre, **Németország** egyesítése **1871**-ben fejeződött be.',
            '**Önállóságot követelő** nacionalizmus: a többnemzetiségű birodalmakban (Habsburg Birodalom, Oszmán Birodalom) élő népek kulturális és politikai jogokat, később önálló államot akartak.',
            'A nemzeti eszme a magyar reformkorban is megjelent (a nyelv ügye); a magyar és a nemzetiségi nacionalizmus összeütközése 1848–49-ben súlyos konfliktushoz vezetett.',
          ],
        },
        { kind: 'heading', text: 'Konzervativizmus' },
        {
          kind: 'text',
          text: 'A konzervatívok a forradalmi terrorból és a háborúkból azt a tanulságot vonták le, hogy a társadalmi rendet a **hagyomány, a vallás, a tekintély és a tulajdon** tartja össze, ezért a változásokat csak lassan, a meglévő intézmények megőrzésével szabad végrehajtani. **Metternich** osztrák kancellár a **bécsi kongresszus** (1814–1815) után a **Szent Szövetség** rendszerében arra törekedett, hogy a forradalmi eszméket (liberalizmus, nacionalizmus) visszaszorítsa és az uralkodói legitimitást megvédje; ezért a bécsi rendszerben **cenzúra** és rendőri ellenőrzés működött. A sorozatos forradalmak (1830, 1848) azonban megtörték a rendszer erejét.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A konzervativizmus klasszikus elméleti megfogalmazója az angol **Edmund Burke**, aki a francia forradalom ellen írta *Töprengések a francia forradalomról* című művét (1790). Szerinte a társadalom a nemzedékek közötti szerződés, a hagyományos intézményekhez nem szabad erőszakosan hozzányúlni, a változtatás legyen fokozatos reform.',
        },
        {
          kind: 'compare',
          title: 'A három irányzat összevetése',
          columns: ['Fő érték', 'A változáshoz való viszony'],
          rows: [
            {
              label: 'Liberalizmus',
              cells: ['szabadság, jogegyenlőség, alkotmány', 'reform, szükség esetén forradalom'],
            },
            {
              label: 'Nacionalizmus',
              cells: ['a nemzet, az önrendelkezés', 'nemzetállam létrehozása, új határok'],
            },
            {
              label: 'Konzervativizmus',
              cells: ['hagyomány, rend, tekintély', 'lassú, fokozatos változás'],
            },
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1776', text: 'Az Egyesült Államok függetlenségi nyilatkozata.' },
            {
              date: '1789',
              text: 'A francia forradalom kitörése, az Emberi és polgári jogok nyilatkozata.',
            },
            {
              date: '1815',
              text: 'A bécsi kongresszus lezárása, a Szent Szövetség: a konzervatív rend időszaka.',
            },
            { date: '1871', text: 'A német egység megteremtése.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet egy politikai programból vagy beszédből: melyik eszme szól belőle, mivel indokolható?',
            'Fogalmak párosítása: liberalizmus, nacionalizmus, konzervativizmus, népfelség, jogegyenlőség.',
            'Rövid kifejtés: miért lehetett a nacionalizmus egyszerre egyesítő és szétziláló erő?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a liberalizmust a demokráciával azonosítani. A korai liberálisok többsége a **cenzusos** választójogot támogatta, nem az általánosat. Másik hiba: a konzervativizmust „a változás tagadásának” mondani; a konzervatív is elfogadja a reformot, csak lassúnak és óvatosnak akarja.',
        },
        {
          kind: 'tip',
          text: 'Ha egy forrás szerzőjét vagy szándékát kell megállapítani, keress kulcsszavakat: „szabadság, alkotmány, egyenlőség” (liberális), „nemzet, nyelv, haza” (nacionalista), „rend, hagyomány, tekintély” (konzervatív).',
        },
      ],
      topicMatch: ['liberalizmus', 'nacionalizmus', 'eszmetörténet'],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question:
            'Melyik eszme követelte elsősorban az alkotmányt, a szabadságjogokat és a jogegyenlőséget?',
          options: ['Konzervativizmus', 'Liberalizmus', 'Abszolutizmus', 'Kommunizmus'],
          answer: 1,
          explanation:
            'A liberalizmus az egyén szabadságából indult ki, ezért alkotmányt, szabadságjogokat és törvény előtti egyenlőséget követelt.',
        },
        {
          question: 'Melyik állítás igaz a nacionalizmusra a 19. században?',
          options: [
            'Mindig a többnemzetiségű birodalmak megőrzésére törekedett.',
            'Csak a gazdasági szabadságot követelte.',
            'A nemzetet tekintette a politikai közösség alapjának, és nemzetállamot akart.',
            'A hagyományos rendi kiváltságokat védte.',
          ],
          answer: 2,
          explanation:
            'A nacionalisták szerint a közös nyelven, kultúrán és történelmen alapuló nemzetnek joga van saját államra, ezért az egyesítő (német, olasz) és az elszakadó törekvések is ide tartoznak.',
        },
        {
          question: 'Ki kapcsolódik a bécsi kongresszus utáni konzervatív rendszerhez?',
          options: ['Adam Smith', 'Lincoln', 'Edison', 'Metternich'],
          answer: 3,
          explanation:
            'Metternich osztrák kancellár a Szent Szövetség segítségével próbálta a forradalmi eszméket visszaszorítani.',
        },
        {
          question: 'Mikor fejeződött be a német egyesítés?',
          options: ['1815', '1871', '1848', '1789'],
          answer: 1,
          explanation:
            '1871-ben kiáltották ki a Német Birodalmat, ez zárta le a német nemzeti egyesítést.',
        },
        {
          question:
            'Melyik gondolkodó írt a francia forradalom ellen, a hagyomány védelmében 1790-ben?',
          options: ['John Stuart Mill', 'Edmund Burke', 'Adam Smith', 'Karl Marx'],
          answer: 1,
          explanation:
            'Edmund Burke a Töprengések a francia forradalomról című művében védte a hagyományos intézményeket és a fokozatos reformot; Mill a 19. századi liberális szerző.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Liberalizmus', url: wiki('Liberalizmus') },
        { label: 'Wikipédia: Nacionalizmus', url: wiki('Nacionalizmus') },
        { label: 'Wikipédia: Konzervativizmus', url: wiki('Konzervativizmus') },
      ],
    },
    {
      id: 'ipari-forradalom-elso-hullama',
      subject: 'tortenelem',
      unitId: 'ujkor-eszmek-ipar',
      title: 'Az ipari forradalom első hulláma',
      level: 'kozep',
      requirement: {
        kozep: 'Az ipari forradalom első hulláma: textilipar, közlekedés, gyáripar',
        emelt: 'Az ipari forradalom társadalmi hatásai, urbanizáció',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az ipari forradalom **Angliában** indult a 18. század második felében, a **textiliparban**.',
            'A gépesítést a **gőzgép** (James **Watt** tökéletesítette) tette lehetővé; a gőzhajó és a **vasút** forradalmasította a közlekedést.',
            'A kézműves műhelyeket és manufaktúrákat felváltotta a **gyáripar** és a **tömegtermelés**.',
            'Új osztályok jöttek létre: a **tőkések** és a **bérmunkások**.',
            'A termelés és a népesség koncentrálódott, a gyárvárosok gyorsan nőttek (**urbanizáció**).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ipari forradalom',
              text: 'A gépi termelésre való áttérés és a gyáripar kialakulása, ami tartós gazdasági növekedést hozott.',
            },
            {
              term: 'gyár',
              text: 'Gépekkel dolgozó, központilag szervezett nagyüzem; a munkások a munkaadó tulajdonában lévő gépeken, megszabott rendben dolgoznak.',
            },
            {
              term: 'tőkés',
              text: 'A termelőeszközök (gyár, gép, pénz) tulajdonosa, aki a bérmunkásokat alkalmazza.',
            },
            {
              term: 'bérmunkás',
              text: 'Olyan munkavállaló, akinek nincs termelőeszköze, ezért munkaerejét bérért adja el.',
            },
            {
              term: 'tömegtermelés',
              text: 'Nagy mennyiségű, egyforma áru gépi előállítása, ami olcsóbbá teszi a terméket.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért Angliában indult?' },
        {
          kind: 'text',
          text: 'Nagy-Britanniában egyszerre voltak jelen a feltételek:\n- bőséges **szén és vasérc**, vízi utak és kikötők;\n- a **mezőgazdasági átalakulás** (bekerítések, jobb termelési módszerek) felszabadította a munkaerőt, és növelte az élelmiszerkínálatot;\n- felhalmozott **tőke** a gyarmati kereskedelemből és a bankokból; a **gyarmatok** nyersanyagot (pamut) és piacot adtak;\n- viszonylag stabil politikai rend, jogbiztonság, a vállalkozást támogató hozzáállás.',
        },
        { kind: 'heading', text: 'Textilipar: a gépesítés kezdete' },
        {
          kind: 'text',
          text: 'Az ipari forradalom az angol **pamutiparban** kezdődött. A szövés és fonás gépesítése (repülő vetélő, fonógépek, **gőzzel hajtott szövőgép**) a kézi termelést nagyságrendekkel felülmúlta. A gépeket eleinte vízi energia hajtotta, majd **Watt** tökéletesített **gőzgépe** (1760–70-es évek) lehetővé tette, hogy a gyár bárhol, szén közelében megépüljön.',
        },
        { kind: 'heading', text: 'Közlekedés: a gőz hatalma' },
        {
          kind: 'text',
          text: 'A termelés növekedése új szállítási módokat követelt. A gőzgépet a **gőzhajó** és a **gőzmozdony** hasznosította. A világ első gőzvasúti személyforgalmát az 1820-as évek közepén indították Angliában, a **Liverpool–Manchester vasútvonal** 1830-ban nyílt meg. A vasút gyorsan terjedt: gyorsabb és olcsóbb szállítást adott, összekötötte a piacokat, és hatalmas keresletet teremtett a vas, a szén és a gépipar számára.',
        },
        { kind: 'heading', text: 'Gyáripar és új társadalom' },
        {
          kind: 'text',
          text: 'A **manufaktúra** még kézi munkán alapult; a **gyár** gépeket használt, és a termelés ütemét a gép szabta meg. A **tömegtermelés** olcsó árukat adott, a **szabad verseny** viszont kíméletlenül kiszorította a kisebb műhelyeket. A társadalomban két új osztály formálódott:',
        },
        {
          kind: 'compare',
          title: 'Az ipari társadalom két fő osztálya',
          columns: ['Tőkések (burzsoázia)', 'Bérmunkások (proletariátus)'],
          rows: [
            { label: 'Vagyon', cells: ['gyár, gép, pénz tulajdonosai', 'csak a munkaerejük van'] },
            { label: 'Jövedelem', cells: ['profit (nyereség)', 'bér'] },
            {
              label: 'Helyzet',
              cells: [
                'gazdasági és politikai befolyás',
                'kiszolgáltatottság, munkanélküliség veszélye',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A gyári munka **kemény** volt: napi 12–16 órás műszakok, alacsony bér, balesetveszély, és gyakori volt a **nők és gyermekek** foglalkoztatása is, mert olcsóbbak voltak a férfiaknál. A gép miatt munkájukat vesztő kézművesek egy része a gépeket okolta: a **luddizmus** gépromboló mozgalom volt az 1810-es években. Idővel megszülettek az első **gyári törvények** és a **szakszervezetek**, az 1830-as évek végétől pedig a **chartista** mozgalom az általános férfiválasztójogot követelte.',
        },
        { kind: 'heading', text: 'Urbanizáció' },
        {
          kind: 'text',
          emelt: true,
          text: 'A gyárak köré tömegek költöztek vidékről a városokba. **Manchester** a „pamutváros” jelképévé vált. A gyors növekedés nyomornegyedeket, zsúfolt lakásokat, rossz higiéniát és járványokat (például kolera) hozott. A városok így hatalmas **szociális problémákat** is kaptak, amelyekre később a közegészségügyi, lakhatási és szociális reformok próbáltak választ adni.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A folyamat nemcsak Angliában zajlott: a 19. század elejétől **Belgiumban**, **Franciaországban**, a **német** területeken és az **Egyesült Államokban** is kibontakozott. A **kelet-európai** országokban, így Magyarországon is később, a 19. század második felében indult be.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1760–70-es évek', text: 'Watt gőzgépe, a textilipar gépesítése Angliában.' },
            { date: '1830', text: 'A Liverpool–Manchester vasútvonal megnyitása.' },
            {
              date: '1830–1860/70',
              text: 'Az ipari forradalom első hulláma Nyugat-Európában és az USA-ban.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fogalmak: ipari forradalom, gyár, tőkés, bérmunkás, tömegtermelés.',
            'Ábra vagy forrás (gyári munkások leírása, statisztika a vasúthálózat hosszáról): milyen változást mutat?',
            'Rövid kifejtés: miért éppen Angliában kezdődött az ipari forradalom?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni a manufaktúrát és a gyárat. A manufaktúrában kézi munka folyt (csak a munkamegosztás nagyobb), a gyárban gép dolgozik. Ne keverd az első hullámot (szén, gőz, vas, textil) a másodikkal (villany, olaj, vegyipar, acél).',
        },
        {
          kind: 'tip',
          text: 'Emelt szinten a társadalmi hatásoknál mindig említsd az előnyöket (olcsóbb áru, növekvő életszínvonal hosszú távon) és a hátrányokat (kizsákmányolás, nyomornegyedek) is, és köss hozzá egy konkrét példát (Manchester).',
        },
      ],
      topicMatch: ['=ipari forradalom', 'korai kapitalizmus', '=kapitalizmus', 'találmányok'],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik iparágban kezdődött az ipari forradalom Angliában?',
          options: ['textilipar', 'vegyipar', 'autógyártás', 'elektronika'],
          answer: 0,
          explanation:
            'Az ipari forradalom a pamutszövés és a fonás gépesítésével kezdődött az angol textiliparban.',
        },
        {
          question: 'Ki tökéletesítette a gőzgépet úgy, hogy az széles körben használható lett?',
          options: ['Edison', 'Ford', 'Watt', 'Marx'],
          answer: 2,
          explanation:
            'James Watt gőzgépe tette lehetővé a gyárak szén közelébe telepítését, és a gőzhajó, a gőzmozdony alapja lett.',
        },
        {
          question: 'Mit nevezünk bérmunkásnak?',
          options: [
            'Aki a gyár tulajdonosa.',
            'Aki saját műhelyében dolgozik.',
            'Aki földet bérel a földesúrtól.',
            'Aki termelőeszköz nélkül, munkaereje eladásából él.',
          ],
          answer: 3,
          explanation:
            'A bérmunkásnak nincs gépe vagy gyára, ezért a munkaerejét bérért adja a tőkésnek.',
        },
        {
          question: 'Melyik vasútvonal megnyitása (1830) jelképezi a gőzvasút elterjedését?',
          options: ['Pest–Vác', 'Liverpool–Manchester', 'Párizs–Bécs', 'London–Edinburgh'],
          answer: 1,
          explanation:
            'A Liverpool–Manchester vonal 1830-ban nyílt meg, és mintát adott a további vasútépítéseknek.',
        },
        {
          question: 'Mi volt a luddizmus?',
          options: [
            'Gépromboló mozgalom az ipari forradalom idején.',
            'Szocialista párt Angliában.',
            'A tőkések szövetsége.',
            'A gyári törvények gyűjteménye.',
          ],
          answer: 0,
          explanation:
            'A luddisták a munkájukat veszélyeztető gépeket tették tönkre az 1810-es években Angliában.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Ipari forradalom', url: wiki('Ipari forradalom') },
        { label: 'Wikipédia: James Watt', url: wiki('James Watt') },
        { label: 'Wikipédia: Urbanizáció', url: wiki('Urbanizáció') },
      ],
    },
    {
      id: 'ipari-forradalom-masodik-hullama',
      subject: 'tortenelem',
      unitId: 'ujkor-eszmek-ipar',
      title: 'Az ipari forradalom második hulláma',
      level: 'kozep',
      requirement: {
        kozep:
          'Az ipari forradalom második hulláma: kutatás és fejlesztés, közlekedés, vegyipar, gépipar, elektronika – a világban és Magyarországon',
        emelt:
          'A második ipari forradalom gazdasági és társadalmi háttere: tőkekoncentráció, népességrobbanás, urbanizáció, környezeti hatások – a világban és Magyarországon',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A második hullám a 19. század utolsó harmadában (kb. **1870-től**) bontakozott ki; ekkor az **Egyesült Államok** és **Németország** a vezető ipari hatalmak közé emelkedett.',
            'Új energiahordozók és ágazatok: **villamosság**, kőolaj, **vegyipar**, acél, belső égésű motor, később az autó.',
            'A tudomány és az ipar összekapcsolódott: **kutatás és fejlesztés** (laboratóriumok), tömeges találmányok (Edison, Ford).',
            'A termelés szervezete is megváltozott: **futószalag**, óriásvállalatok, monopóliumok.',
            'Magyarországon a kiegyezés után indult el, főleg az **1880–90-es években** gyorsult fel.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kutatás és fejlesztés',
              text: 'Az ipari cégek saját laboratóriumai és tudósai, amelyek új termékeket és eljárásokat dolgoznak ki. Az ipar innovációja így tudományos alapra került.',
            },
            {
              term: 'tömegtermelés',
              text: 'Nagy mennyiségű, szabványos termék gyártása, amit a futószalag tett igazán olcsóvá.',
            },
            {
              term: 'kartell',
              text: 'Független vállalatok megállapodása árakról, termelési mennyiségekről vagy piacokról, a verseny korlátozására.',
              emelt: true,
            },
            {
              term: 'T-modell',
              text: 'Henry Ford 1908-tól gyártott autója, amely a futószalagos tömegtermelésnek köszönhetően olcsó, így sokak számára elérhető lett.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi volt új a második hullámban?' },
        {
          kind: 'text',
          text: 'Az első hullám a gőz és a szén, a második a **villamosság, a vegyipar és a kőolaj** korszaka. A fordulatot a **tudomány és az ipar kapcsolata** hozta: a találmányok már nem magányos barkácsolók, hanem kutatólaboratóriumok és vállalatok eredményei lettek.',
        },
        {
          kind: 'compare',
          title: 'A két hullám összehasonlítása',
          columns: ['Első hullám (kb. 1760–1860/70)', 'Második hullám (kb. 1870–1914)'],
          rows: [
            { label: 'Energia', cells: ['szén, gőz', 'villamos áram, kőolaj, belső égésű motor'] },
            {
              label: 'Vezető ágazat',
              cells: ['textilipar, vas, gőzvasút', 'acél, vegyipar, villamos- és gépipar, autó'],
            },
            {
              label: 'Központ',
              cells: ['Nagy-Britannia', 'USA, Németország (Nagy-Britannia mellett)'],
            },
            {
              label: 'Találmányok',
              cells: ['egyéni feltalálók', 'laboratóriumok, kutatás és fejlesztés'],
            },
          ],
        },
        { kind: 'heading', text: 'Új ágazatok' },
        {
          kind: 'keypoints',
          items: [
            '**Villamosság**: Edison az izzólámpát (1879) gyakorlati használatra alkalmassá tette, kiépültek az erőművek és az elektromos hálózatok. A villamos áram a gyárakban a gőzt váltotta, a városokban a világítást, a villamost és a telefont.',
            '**Vegyipar**: műtrágya, mesterséges színezékek, gyógyszerek; ebben Németország vezetett. A műtrágya növelte a mezőgazdasági termést.',
            '**Gépipar és acél**: új acélgyártási eljárások (például a Bessemer-féle, 1856) olcsó acélt adtak, ami a hidak, vasutak, gépek és hajók alapja lett.',
            '**Közlekedés**: belső égésű motor, **autó**, repülés kezdetei; gőzhajók, vasúti és telefonhálózat, távíró.',
          ],
        },
        {
          kind: 'text',
          text: 'A termelés szervezésében is változás következett: az Egyesült Államokban **Henry Ford** 1913-tól mozgó **futószalagon** gyártotta autóit. A munkamegosztás miatt a gyártás gyorsabb és olcsóbb lett, a **tömegtermelés** pedig lehetővé tette, hogy az autó ne csak a gazdagoké legyen.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Thomas Edison',
              text: 'Amerikai feltaláló, az izzólámpa gyakorlati használatra alkalmas változatának és a kutatólaboratórium típusú innovációnak az egyik úttörője.',
            },
            {
              name: 'Henry Ford',
              text: 'Amerikai autógyáros, aki a futószalagos tömegtermeléssel az autót széles körben elérhetővé tette (T-modell).',
            },
            {
              name: 'Puskás Tivadar',
              text: 'Magyar mérnök és feltaláló, Edison munkatársa, a budapesti Telefonhírmondó (1893) alapítója.',
              emelt: true,
            },
            {
              name: 'Kandó Kálmán',
              text: 'Magyar gépészmérnök, a villamos vasúti vontatás egyik úttörője.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'Magyarország a második hullámban' },
        {
          kind: 'text',
          text: 'Magyarországon az ipari fejlődés a **kiegyezés után** gyorsult fel. A vasút és a **malomipar** mellett a **gépipar** és a **villamosipar** (például a Ganz-gyár) is jelentőssé vált. A fellendülés mögött az állami gazdaságpolitika és a külföldi tőke is ott állt, részleteit a *dualizmus* témakör gazdasági oldalán találod. A fejlődés ellenére az ország **agrárjellege** megmaradt, az ipar a lakosság nagyobb részét nem foglalkoztatta.',
        },
        { kind: 'heading', text: 'Gazdasági és társadalmi háttér' },
        {
          kind: 'text',
          emelt: true,
          text: '**Tőkekoncentráció**: a nagy beruházások (acélművek, vegyi üzemek, vasút) hatalmas tőkét igényeltek, ezért a vállalkozások egyesültek vagy összeolvadtak. Részvénytársaságok és bankok finanszírozták őket. A versenyt **kartellek** (árak, kvóták megállapodása) és **trösztök** korlátozták: az Egyesült Államokban például a Rockefeller-féle Standard Oil uralta a kőolajipart. A nagyvállalatok kiszorították a kisebbeket, így a gazdaság egyre erősebben **monopóliumok** kezében összpontosult.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Népességrobbanás**: a fejlődő orvostudomány, a higiénia és a bőségesebb élelmiszerellátás miatt a halálozás csökkent, így Európa lakossága a 19. században nagyjából megduplázódott. A fölös népesség egy része a gyárakba, más része **kivándorlással** az amerikai kontinensre ment (például New Yorkon át).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Urbanizáció**: a nagyvárosok rohamosan nőttek (London, Párizs, Berlin, Bécs, New York). **Budapest** a reformkortól az első világháborúig a Duna-menti ország fővárosából világvárossá fejlődött, ennek menetét a dualizmus témakör külön tárgyalja. A városokban kiépült a vízvezeték, a csatorna, a közvilágítás, a tömegközlekedés (villamos, földalatti).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Környezeti hatások**: a szén égetése füstöt és szmogot okozott, a gyárak szennyezték a folyókat, az erdők kitermelése és a bányászat átalakította a tájat. A természetet a korszak még kimeríthetetlen erőforrásnak tekintette.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1856', text: 'A Bessemer-féle acélgyártási eljárás.' },
            { date: '1879', text: 'Edison izzólámpája.' },
            { date: '1908', text: 'A Ford T-modell megjelenése.' },
            { date: '1913', text: 'Ford bevezeti a mozgó futószalagot.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A két ipari forradalom összehasonlítása (energia, ágazatok, központok).',
            'Fogalmak: tömegtermelés, kutatás és fejlesztés, kartell, T-modell.',
            'Emelt szinten: tőkekoncentráció, népességrobbanás, környezeti hatások, és ezek magyarországi megjelenése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a második ipari forradalom jellemzőjének a gőzgépet vagy a textilipart mondani. Az a korszak a villamosság, az olaj, a vegyipar és az acél ideje. Ne keverd össze Edisont (villamosság) és Fordot (autógyártás, futószalag).',
        },
        {
          kind: 'tip',
          text: 'Magyarországi példához mindig legyen három konkrét elem kéznél: malomipar (Budapest), Ganz-gyár (gépipar, villamosság), vasút (MÁV). Így a kifejtésed konkrét és pontos lesz.',
        },
      ],
      topicMatch: [
        'második ipari forradalom',
        'az ipari forradalom második hulláma',
        'villamos energia',
        'magyar ipar',
      ],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik energiahordozó és ágazat jellemző a második ipari forradalomra?',
          options: [
            'faszén és kovácsolás',
            'szél- és vízienergia a malmokban',
            'villamosság és kőolaj, vegyipar',
            'gőzhajtású textilgyár',
          ],
          answer: 2,
          explanation:
            'A második hullámban a villamos áram, a kőolaj, az acél és a vegyipar lett meghatározó; a gőz és a textilipar az első hullámra jellemző.',
        },
        {
          question: 'Ki vezette be a mozgó futószalagot az autógyártásban?',
          options: ['Ford', 'Edison', 'Watt', 'Bismarck'],
          answer: 0,
          explanation:
            'Henry Ford 1913-tól használt mozgó futószalagot, amivel az autó előállítása olcsóbb és gyorsabb lett.',
        },
        {
          question: 'Melyik ország számított a vegyipar vezető hatalmának a 19. század végén?',
          options: ['Spanyolország', 'Oroszország', 'Portugália', 'Németország'],
          answer: 3,
          explanation:
            'Németországban a tudomány és az ipar kapcsolata különösen erős volt, ezért a vegyipar (színezékek, gyógyszerek, műtrágya) terén ő járt az élen.',
        },
        {
          question: 'Mikor bontakozott ki leginkább az ipari fejlődés Magyarországon?',
          options: [
            'az 1700-as évek közepén',
            'a kiegyezés után, főleg az 1880–90-es években',
            'a reformkor elején',
            'csak az első világháború után',
          ],
          answer: 1,
          explanation:
            'Magyarországon a kiegyezés után indult be a gyáripar, és az 1880–90-es években gyorsult fel különösen.',
        },
        {
          question: 'Mit jelent a kartell?',
          options: [
            'Állami tulajdonú vasúttársaság.',
            'Munkások érdekvédelmi szervezete.',
            'Független vállalatok megállapodása a verseny korlátozására.',
            'A Ford-gyár futószalagja.',
          ],
          answer: 2,
          explanation:
            'A kartell árakat vagy termelési mennyiségeket rögzítő megállapodás a vállalatok között, ami a tőkekoncentráció egyik formája.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Második ipari forradalom', url: wiki('Második ipari forradalom') },
        { label: 'Wikipédia: Henry Ford', url: wiki('Henry Ford') },
        { label: 'Wikipédia: Thomas Alva Edison', url: wiki('Thomas Alva Edison') },
      ],
    },
    {
      id: 'szocializmus-munkasmozgalom',
      subject: 'tortenelem',
      unitId: 'ujkor-eszmek-ipar',
      title: 'A szocializmus eszméje és a munkásmozgalom',
      level: 'kozep',
      requirement: {
        kozep: 'A szocializmus eszméje (marxizmus)',
        emelt:
          'A munkásmozgalom irányzatai: szociáldemokrácia, kommunizmus, keresztényszocializmus',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szocializmus** az ipari kapitalizmus igazságtalanságaira adott válasz: a magántulajdon helyett **közösségi tulajdont** és egyenlőbb társadalmat akart.',
            '**Karl Marx** (és Engels) szerint a történelem osztályharcok sora; a kapitalizmust a **proletariátus** forradalma váltja fel, és a végén **osztály nélküli társadalom** jön létre.',
            'A munkások **szakszervezetekbe** és **pártokba** szerveződtek, hogy jogaikat kivívják.',
            'Három fő irányzat: **szociáldemokrácia** (reform, parlamentarizmus), **kommunizmus** (forradalom), **keresztényszocializmus** (egyházi, szociális tanítás).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'szocializmus',
              text: 'Az az eszme, amely a termelőeszközök közösségi tulajdonát és a társadalmi egyenlőséget követeli, a kapitalizmus bírálata alapján.',
            },
            {
              term: 'kommunizmus',
              text: 'Marx szerint a szocializmus után következő, osztály nélküli társadalom; politikai mozgalomként a forradalmi úton hatalmat szerezni akaró irányzat neve.',
            },
            {
              term: 'keresztényszocializmus',
              text: 'A keresztény tanításra építő szociális reformirányzat, amely a munkások helyzetének javítását kéri, de elutasítja az osztályharcot és a vallásellenességet.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A szocializmus kialakulása' },
        {
          kind: 'text',
          text: 'Az ipari forradalom nyomán a munkások tömegei éltek nyomorúságos körülmények között, miközben a tőkések gazdagodtak. Erre a helyzetre több gondolkodó **jobb társadalmat** képzelt el. A korai „utópista” szocialisták (például **Robert Owen**, **Saint-Simon**, **Fourier**) közösségi tulajdonú mintatelepeket, egyenlőbb társadalmat javasoltak, de elképzeléseik megvalósítására nem volt reális eszközük.',
        },
        { kind: 'heading', text: 'A marxizmus' },
        {
          kind: 'text',
          text: '**Karl Marx** német gondolkodó és barátja, **Friedrich Engels** dolgozta ki a „tudományos szocializmust”, vagyis a **marxizmust**. Fő tételei:\n- **Történelmi materializmus**: a társadalmat a gazdasági viszonyok (ki birtokolja a termelőeszközöket) határozzák meg.\n- **Osztályharc**: a történelem a kizsákmányolók és kizsákmányoltak harca. A kapitalizmusban a **tőkések** és a **bérmunkások** (proletárok) állnak szemben.\n- **Értéktöbblet**: a tőkés a munkás által termelt érték egy részét (profit) eltulajdonítja.\n- **Forradalom**: a kapitalizmus válságai után a proletariátus megdönti a tőkések uralmát, és bevezeti a **közösségi tulajdont**. A végcél az **osztály nélküli**, állam nélküli társadalom (kommunizmus).',
        },
        {
          kind: 'text',
          text: 'Marx fő műve *A tőke* (első kötete 1867). A szocializmus tehát kritikát és programot is adott: a kapitalizmus bírálatát és a jövő társadalmának tervét.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A *Kommunista kiáltvány* (1848) Marx és Engels közös röpirata, amely a munkásmozgalom első nagy programirata lett. Híres zárómondata a „Világ proletárjai, egyesüljetek!” felhívás.',
        },
        { kind: 'heading', text: 'A munkásmozgalom megszerveződése' },
        {
          kind: 'text',
          text: 'A munkások érdekeik védelmére először **szakszervezeteket** (az Egyesült Királyságban a 19. század első felében) és **munkásegyleteket** hoztak létre, később **pártokat** is. Követeléseik: magasabb bér, rövidebb munkaidő, a gyermekmunka korlátozása, **általános választójog**. A munkások nemzetközi összefogását szolgálták az **Internacionálék**. A mozgalmak legfontosabb ünnepe május 1. lett.',
        },
        { kind: 'heading', text: 'A munkásmozgalom irányzatai' },
        {
          kind: 'compare',
          emelt: true,
          title: 'Három irányzat',
          columns: ['Cél és eszköz', 'Jellemző'],
          rows: [
            {
              label: 'Szociáldemokrácia',
              cells: [
                'szociális jogok, jobb élet reformokkal, a parlamentben',
                'tömegpártok (például a német SPD), szakszervezetekre épül',
              ],
            },
            {
              label: 'Kommunizmus',
              cells: [
                'a kapitalizmus forradalmi megdöntése, a termelőeszközök közössé tétele',
                'a marxista tanításra épül; 1917 után a bolsevik (Lenin) irány',
              ],
            },
            {
              label: 'Keresztényszocializmus',
              cells: [
                'szociális igazságosság a keresztény tanítás alapján, osztályharc nélkül',
                'XIII. Leó pápa Rerum Novarum enciklikája (1891)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Szociáldemokrácia**: a mozgalom többsége a forradalom helyett reformokat akart a parlamentáris keretek között (általános választójog, munkaidő-szabályozás, szociális biztonság). Németországban Bismarck az 1870-es évek végén betiltotta a szocialistákat (szocialistaellenes törvények, 1878), ugyanakkor az 1880-as években bevezette a **társadalombiztosítás** első elemeit (betegség, baleset, öregkor), hogy a munkásokat leválassza a szocialista mozgalomról. Magyarországon a **Magyarországi Szociáldemokrata Párt** 1890-ben alakult.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kommunizmus**: a forradalmi vonal hívei szerint a kapitalizmust csak erőszakos forradalommal lehet megdönteni. Az 1917-es oroszországi bolsevik hatalomátvétel után a világ munkásmozgalma a szociáldemokrata és a kommunista irányra szakadt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Keresztényszocializmus**: XIII. Leó pápa **Rerum Novarum** kezdetű enciklikája (1891) védte a magántulajdont, de követelte a tisztességes bért, elismerte a munkások szervezkedési jogát, és elítélte az osztályharcot is. Magyarországi képviselője **Prohászka Ottokár** püspök volt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **Internacionálék** a munkásmozgalom nemzetközi szervezetei voltak. Az I. Internacionálét 1864-ben alapították Londonban, a II. Internacionálé 1889-ben jött létre Párizsban. A munkásmozgalmon belül az **anarchizmus** (a szabad társulásokra épülő, állam nélküli társadalom hirdetője, például Bakunyin) szintén jelen volt, és gyakran összeütközött a marxistákkal.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1848', text: 'Marx és Engels: Kommunista kiáltvány.', emelt: true },
            { date: '1864', text: 'Az I. Internacionálé megalakulása.', emelt: true },
            { date: '1867', text: 'Marx: A tőke, első kötet.' },
            { date: '1889', text: 'A II. Internacionálé megalakulása.', emelt: true },
            { date: '1891', text: 'A Rerum Novarum enciklika.', emelt: true },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet a Kommunista kiáltványból vagy egy munkáspárti programból: melyik irányzat szól belőle?',
            'Fogalmak: szocializmus, kommunizmus, osztályharc, keresztényszocializmus.',
            'Emelt szinten: a három irányzat összehasonlítása, a Rerum Novarum tartalma.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a szocializmust és a kommunizmust teljesen azonosnak venni, vagy a szociáldemokráciát forradalmi irányzatnak tartani. A szociáldemokraták a parlamentben és reformokkal akartak változtatni, a kommunisták forradalommal. A keresztényszocializmus pedig nem marxista: az osztályharcot elutasítja.',
        },
        {
          kind: 'tip',
          text: 'A marxizmusnál három kulcsszó elég egy válaszba: osztályharc, kizsákmányolás, forradalom. A végén add meg a célt is: osztály nélküli társadalom.',
        },
      ],
      topicMatch: ['=szocializmus', 'munkásmozgalom', 'munkáskérdés', 'keresztényszocializmus'],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question: 'Ki dolgozta ki Engelsszel a marxizmust?',
          options: ['Lenin', 'Bismarck', 'Karl Marx', 'Owen'],
          answer: 2,
          explanation:
            'A marxizmus megalapítója Karl Marx, aki Friedrich Engelsszel együtt fogalmazta meg az osztályharc és a proletárforradalom tanát.',
        },
        {
          question: 'Mi Marx szerint a történelem mozgatóereje?',
          options: ['a vallás', 'az osztályharc', 'a hősök tettei', 'az uralkodók akarata'],
          answer: 1,
          explanation:
            'A marxizmus szerint a társadalmat az osztályok (kizsákmányolók és kizsákmányoltak) harca viszi előre.',
        },
        {
          question: 'Melyik állítás igaz a szociáldemokráciára?',
          options: [
            'Fegyveres forradalommal akart hatalomra jutni.',
            'A magántulajdont és a pártokat is megszüntetné.',
            'Reformokat és szociális jogokat akart a parlamenti rendszeren belül.',
            'Elutasította a szakszervezeteket.',
          ],
          answer: 2,
          explanation:
            'A szociáldemokraták a választójog, a munkavédelem és a szociális biztonság terén akartak változtatni, parlamenti úton.',
          emelt: true,
        },
        {
          question: 'Mi a Rerum Novarum?',
          options: [
            'XIII. Leó pápa munkáskérdésről szóló enciklikája 1891-ben.',
            'Marx fő műve.',
            'A II. Internacionálé alapokmánya.',
            'A német szociális törvények gyűjteménye.',
          ],
          answer: 0,
          explanation:
            'A Rerum Novarum a katolikus egyház szociális tanítását fogalmazta meg: tisztességes bér, munkásszervezkedés, de magántulajdon és az osztályharc elutasítása.',
          emelt: true,
        },
        {
          question: 'Mi a marxizmus végső célja, a kommunizmus?',
          options: [
            'az uralkodó hatalmának erősítése',
            'osztály nélküli társadalom közösségi tulajdonnal',
            'a szabad verseny védelme',
            'a hagyományos rendi társadalom helyreállítása',
          ],
          answer: 1,
          explanation:
            'Marx szerint a forradalom és a szocializmus nyomán osztály nélküli, közösségi tulajdonra épülő társadalom jön létre.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Karl Marx', url: wiki('Karl Marx') },
        { label: 'Wikipédia: Marxizmus', url: wiki('Marxizmus') },
        { label: 'Wikipédia: Rerum novarum', url: wiki('Rerum novarum') },
      ],
    },
    {
      id: 'polgari-nemzetallam',
      subject: 'tortenelem',
      unitId: 'ujkor-eszmek-ipar',
      title: 'A polgári nemzetállam: Németország, az USA és Magyarország',
      level: 'kozep',
      requirement: {
        kozep:
          'A polgári nemzetállam jellemzői, alkotmányosság és jogegyenlőség Németország, az Amerikai Egyesült Államok és Magyarország példáján',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **polgári nemzetállam** jellemzői: a nemzet a politikai közösség alapja, **alkotmány**, hatalmi ágak megosztása, **jogegyenlőség**, polgári szabadságjogok, képviseleti rendszer.',
            '**Németország** egyesítése **1871**-ben, Bismarck vezetésével történt, felülről, háborúk árán; az alkotmány korlátozott volt.',
            'Az **Egyesült Államok** az 1776-ban kimondott függetlenséggel, az 1787-es alkotmánnyal és a hatalmi ágak megosztásával lett köztársaság; a rabszolgaság kérdése polgárháborúhoz vezetett.',
            '**Magyarországon** az 1848-as áprilisi törvények és az 1867-es kiegyezés teremtette meg az alkotmányos, polgári államot, de a választójog szűk maradt.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nemzetállam',
              text: 'Olyan állam, amelynek határai a nemzet (a nyelvi-kulturális közösség) kereteivel nagyjából egybeesnek, vagy amely magát a nemzet államának tekinti.',
            },
            {
              term: 'alkotmány',
              text: 'Az állam alaptörvénye: rögzíti a hatalmi ágakat, az állampolgárok jogait és kötelességeit.',
            },
            {
              term: 'jogegyenlőség',
              text: 'A törvény előtt mindenki egyenlő, a rendi kiváltságok megszűnnek.',
            },
            {
              term: 'alkotmányos monarchia',
              text: 'Az uralkodó hatalmát az alkotmány és a parlament korlátozza.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A polgári állam jellemzői' },
        {
          kind: 'keypoints',
          items: [
            '**Alkotmány**: írott vagy kialakult szabályrendszer, amely korlátozza a hatalmat.',
            '**Hatalmi ágak megosztása**: törvényhozás, végrehajtás, bíráskodás elkülönül.',
            '**Jogegyenlőség és polgári szabadságjogok**: a rendi különbségek megszűnnek, a szólás-, vallás-, sajtószabadság és a tulajdon védelme biztosított.',
            '**Képviseleti rendszer**: parlament, amelyet az állampolgárok (kezdetben csak egy részük, cenzus alapján) választanak.',
            '**Nemzeti jelleg**: az állam a nemzet érdekeit fejezi ki, közös nyelv, oktatás, hadsereg.',
          ],
        },
        {
          kind: 'text',
          text: 'A gyakorlatban ezek az elvek **korlátozottan** valósultak meg: a választójogból sokáig kizárták a nőket és a szegényeket, a kisebbségek jogai pedig gyakran sérültek. A polgári átalakulás tehát fokozatosan, vitákon és harcokon át haladt előre.',
        },
        { kind: 'heading', text: 'Németország: egyesítés felülről' },
        {
          kind: 'text',
          text: 'A németek a bécsi kongresszus után sok kis államban éltek (Német Szövetség). A nemzeti egység gondolata erősödött, de az egyesítést végül **Poroszország** valósította meg, **Bismarck** kancellár vezetésével, „vas és vér” politikával: háborúk (Dánia, Ausztria, Franciaország ellen) útján. A porosz király **I. Vilmos** 1871-ben a versailles-i kastélyban **német császárrá** lett kikiáltva, Bismarck pedig birodalmi kancellár.',
        },
        {
          kind: 'keypoints',
          title: 'A Német Birodalom (1871) alkotmányos berendezkedése',
          items: [
            'Szövetségi állam: a tagállamok (köztük Poroszország, Bajorország) megtartották önállóságuk egy részét.',
            'A császár nevezte ki a kancellárt, aki a császárnak, nem a parlamentnek felelt: az alkotmányosság **korlátozott** volt.',
            'A **Reichstagot** általános férfi választójog alapján választották, de a hatalma korlátozott maradt. (Poroszországban háromosztályos választójog volt érvényben.)',
            'Bismarck a katolikus egyházzal szemben **kultúrharcot** folytatott, a szocialistákat betiltotta, ugyanakkor társadalombiztosítási rendszert vezetett be.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az egyesítés útján a **königgrätzi csata** (1866) volt a döntő pillanat: Poroszország legyőzte Ausztriát, ezzel kiszorította a Habsburgokat a német ügyekből. 1871-ben a franciák vereségével **Elzász-Lotaringia** a Német Birodalomhoz került, és ez a terület sokáig a francia–német viszony sebe maradt. A *kultúrharc* (Kulturkampf) célja a katolikus egyház befolyásának visszaszorítása volt, főleg az oktatásban.',
        },
        { kind: 'heading', text: 'Az Egyesült Államok: alkotmány és föderáció' },
        {
          kind: 'text',
          text: 'A 13 brit gyarmat **1776**-ban kiáltotta ki függetlenségét. Az **1787-es alkotmány** szövetségi köztársaságot hozott létre: az elnök vezeti a végrehajtást, a **Kongresszus** (Szenátus és Képviselőház) a törvényhozást, a **Legfelsőbb Bíróság** az igazságszolgáltatást. A hatalmi ágak kölcsönösen ellenőrzik egymást. Az alkotmány kiegészítése, a **Bill of Rights** (1791) a szabadságjogokat rögzítette.',
        },
        {
          kind: 'text',
          text: 'A rabszolgaság kérdése megosztotta az országot: az iparosodó **Észak** és az ültetvényes, rabszolgatartó **Dél** között feszültség nőtt. **Abraham Lincoln** 1860-as elnökké választása után a déli államok kiváltak, és kitört a **polgárháború** (1861–1865). Az északi győzelem után a rabszolgaság megszűnt: a **13. alkotmánykiegészítés** (1865) felszámolta, a későbbi kiegészítések állampolgári jogokat biztosítottak a feketéknek. A gyakorlatban azonban a déli államokban hosszú ideig **szegregáció** (faji elkülönítés) maradt érvényben.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A rabszolgaság megszüntetése a hivatalos kronológia szerint **1863** (Lincoln felszabadítási nyilatkozata). A két nagy politikai erő a **Republikánus** és a **Demokrata Párt** lett; Lincoln a Republikánus Párt elnöke volt.',
        },
        {
          kind: 'text',
          text: 'Az USA a bevándorlók országa is volt: Európából milliók érkeztek, **New York** kikötőjén át. A tömeges bevándorlás és az iparosodás tette a 19. század végére az országot a világ vezető gazdasági hatalmává.',
        },
        { kind: 'heading', text: 'Magyarország: a polgári állam kiépítése' },
        {
          kind: 'text',
          text: 'Magyarországon a polgári átalakulás az **1848-as áprilisi törvényekkel** kezdődött (jogegyenlőség, népképviselet, felelős kormány), majd a szabadságharc bukása után az **1867-es kiegyezés** állította vissza az alkotmányosságot. A magyar állam az **Osztrák–Magyar Monarchia** része volt, a közös ügyeken kívül önálló államszervezettel. A jogegyenlőség jegyében 1867-ben megszületett a zsidók egyenjogúságát kimondó törvény, 1868-ban a nemzetiségi törvény. A korlátozás: a **cenzusos választójog** miatt csak a lakosság kis hányada szavazhatott, és a magyar nemzetállami törekvés konfliktusban állt a nemzetiségek igényeivel. A részletekért lásd a *reformkor és 1848* és a *dualizmus* egységet.',
        },
        {
          kind: 'compare',
          title: 'Három állam összevetése (a 19. század második fele)',
          columns: ['Államforma és hatalom', 'Választójog és jogegyenlőség'],
          rows: [
            {
              label: 'Német Birodalom (1871)',
              cells: [
                'császárság, szövetségi állam, a kancellár a császárnak felelős',
                'Reichstag: általános férfi választójog; korlátozott parlamenti hatalom',
              ],
            },
            {
              label: 'Egyesült Államok',
              cells: [
                'köztársaság, elnök, Kongresszus, Legfelsőbb Bíróság',
                'jogegyenlőség a törvényben, de a feketék jogait sokáig korlátozták (szegregáció)',
              ],
            },
            {
              label: 'Magyarország (1867 után)',
              cells: [
                'alkotmányos monarchia, felelős kormány, közös ügyek a Monarchiával',
                'cenzusos választójog, a lakosság kis része szavazhat; jogegyenlőség a törvényben',
              ],
            },
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1776', text: 'Az USA függetlenségének kimondása.' },
            { date: '1787', text: 'Az amerikai alkotmány.' },
            { date: '1861–1865', text: 'Az amerikai polgárháború.' },
            { date: '1866', text: 'A königgrätzi csata.', emelt: true },
            { date: '1867', text: 'A kiegyezés.' },
            { date: '1871', text: 'A Német Birodalom kikiáltása.' },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Jellemezd a polgári nemzetállamot egy konkrét ország példáján (alkotmány, hatalmi ágak, jogegyenlőség).',
            'Összehasonlítás: Németország és az USA, vagy Magyarország és Németország politikai berendezkedése.',
            'Forrás (alkotmányszöveg, törvényrészlet): milyen jogokat biztosít, kiket zár ki?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt gondolni, hogy a polgári állam már eleve demokratikus volt minden állampolgárra. A választójog és a jogegyenlőség kezdetben szűk volt (vagyon, nem, faj szerint). Ne keverd az 1867-es kiegyezést az 1871-es német egyesítéssel, és az USA polgárháborúját (1861–65) a magyar szabadsággal.',
        },
        {
          kind: 'tip',
          text: 'Az összehasonlító válaszhoz használj mindig azonos szempontokat országonként: államforma, ki gyakorolja a hatalmat, ki szavazhat, mi korlátozza a jogegyenlőséget. Így a válaszod áttekinthető és pontozható.',
        },
      ],
      topicMatch: ['polgári állam', 'alkotmányos berendezkedés', '=amerikai egyesült államok'],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question: 'Ki vezette Poroszország oldalán a német egyesítést?',
          options: ['Lincoln', 'Bismarck', 'Metternich', 'Edison'],
          answer: 1,
          explanation:
            'Otto von Bismarck porosz miniszterelnök, majd birodalmi kancellár háborúk útján egyesítette a német államokat 1871-ben.',
        },
        {
          question: 'Mi jellemezte az 1871-es Német Birodalom alkotmányát?',
          options: [
            'A kancellár a parlamentnek volt felelős.',
            'A császár nevezte ki a kancellárt, a parlament hatalma korlátozott volt.',
            'Köztársasági államforma volt.',
            'Nem volt képviseleti testület.',
          ],
          answer: 1,
          explanation:
            'A kancellár a császárnak felelt; a Reichstagot ugyan általános férfi választójog alapján választották, de a hatalma korlátozott volt.',
        },
        {
          question: 'Melyik állítás igaz az amerikai államszervezetre?',
          options: [
            'Királyság, ahol az uralkodó nevezi ki a kongresszust.',
            'Egyházi vezetésű állam.',
            'Egyszemélyi uralom, hatalmi ágak nélkül.',
            'Szövetségi köztársaság, ahol a hatalmi ágak megosztottak.',
          ],
          answer: 3,
          explanation:
            'Az 1787-es alkotmány elnöki köztársaságot hozott létre, ahol az elnök, a Kongresszus és a Legfelsőbb Bíróság egymást ellenőrzi.',
        },
        {
          question: 'Mi okozta az amerikai polgárháborút (1861–1865)?',
          options: [
            'A vallási reformáció.',
            'A rabszolgaság kérdése és az Észak–Dél ellentét.',
            'A függetlenség kikiáltása Angliától.',
            'Mexikó megtámadása.',
          ],
          answer: 1,
          explanation:
            'Az iparosodó Észak és a rabszolgatartó Dél között kialakult ellentét, különösen a rabszolgaság terjedésének kérdése vezetett a déli államok kiválásához és a háborúhoz.',
        },
        {
          question: 'Mit jelentett a kultúrharc Bismarck Németországában?',
          options: [
            'A katolikus egyház befolyásának visszaszorítására irányuló politikát.',
            'A zsidóság üldözését.',
            'A nyelvújítást.',
            'Az iskolák megszüntetését.',
          ],
          answer: 0,
          explanation:
            'A Kulturkampf az 1870-es években Bismarck harca volt a katolikus egyház és a Centrum Párt politikai befolyása ellen.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Német egység', url: wiki('Német egység 1871 Bismarck') },
        { label: 'Wikipédia: Amerikai polgárháború', url: wiki('Amerikai polgárháború') },
        { label: 'Wikipédia: Nemzetállam', url: wiki('Nemzetállam') },
      ],
    },
    {
      id: 'gyarmatositas-imperializmus',
      subject: 'tortenelem',
      unitId: 'ujkor-eszmek-ipar',
      title: 'A gyarmatosítás és az imperializmus kora',
      level: 'emelt',
      requirement: {
        emelt:
          'A gyarmatosítás okai és céljai, nagyhatalmi érdekek és konfliktusok az imperializmus korában',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **imperializmus** korában (kb. 1870–1914) a nagyhatalmak szinte az egész Afrikát és Ázsia nagy részét **gyarmatokká** tették.',
            'Okok: **nyersanyag**, **piac** és tőkebefektetés, nagyhatalmi **presztízs** és stratégiai pontok, az európai ideológia (a „civilizáló küldetés”).',
            'A legnagyobb gyarmatbirodalom a **Brit Birodalom** volt; élen járt még Franciaország, és későn jött Németország is.',
            'A gyarmati érdekek ütközése (Fashoda, Szuezi-csatorna, Balkán) a nagyhatalmak szövetségi rendszereihez és az első világháborúhoz vezetett.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'gyarmat',
              text: 'Más állam politikai és gazdasági uralma alatt álló terület, amelynek erőforrásait a gyarmattartó hasznosítja.',
            },
            {
              term: 'imperializmus',
              text: 'A nagyhatalmak gyarmatszerző, világuralmi törekvése a 19. század végén, a 20. század elején.',
            },
            {
              term: 'hármas szövetség',
              text: 'Németország, az Osztrák–Magyar Monarchia és Olaszország katonai szövetsége (1882).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért gyarmatosítottak?' },
        {
          kind: 'keypoints',
          items: [
            '**Gazdasági okok**: az ipar nyersanyagot kért (pamut, gumi, rézérc, olaj), a gyarmatok viszont új **piacot** adtak a gyártott áruknak, és a tőke is itt talált befektetési lehetőséget.',
            '**Politikai okok**: a nagyhatalmak **presztízse** és erőversenye, a stratégiai támaszpontok (kikötők, csatornák) megszerzése.',
            '**Eszmei okok**: a fehér ember „civilizációs küldetése”, a térítés, a fajelméletekre épülő felsőbbrendűségi érzés.',
            '**Demográfiai ok**: a túlnépesedett Európából sokan kivándoroltak a gyarmatokra.',
          ],
        },
        {
          kind: 'text',
          text: 'A korábbi, kora újkori gyarmatosítás főleg kereskedelmi támaszpontokra és Amerikára épült. A 19. század végi volt az igazi **felosztási verseny**: az 1884–85-ös berlini kongresszus (Kongo-konferencia) kijelölte az afrikai területek megszerzésének szabályait, s ezután fél évszázad alatt az európai hatalmak egymás között felosztották a kontinenst.',
        },
        { kind: 'heading', text: 'A főbb gyarmatbirodalmak' },
        {
          kind: 'compare',
          title: 'Nagyhatalmi törekvések',
          columns: ['Gyarmati terület', 'Érdek'],
          rows: [
            {
              label: 'Brit Birodalom',
              cells: [
                'India (a „korona legfényesebb ékköve”), Egyiptom, dél- és kelet-afrikai területek, Kanada, Ausztrália',
                'a világkereskedelem és tengeri utak uralma',
              ],
            },
            {
              label: 'Franciaország',
              cells: [
                'Algéria, Nyugat-Afrika, Indokína',
                'a presztízs helyreállítása, nyersanyagok',
              ],
            },
            {
              label: 'Németország',
              cells: [
                'Afrika egyes részei, csendes-óceáni szigetek (későn jött)',
                'a „világhatalmi” rang megszerzése',
              ],
            },
            {
              label: 'Belgium (II. Lipót)',
              cells: ['Kongó', 'nyersanyag (gumi, elefántcsont)'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az Osztrák–Magyar Monarchiának nem voltak tengerentúli gyarmatai, de a **Balkánon** terjeszkedett: 1878-ban megszállta Bosznia-Hercegovinát, amelyet 1908-ban annektált.',
        },
        { kind: 'heading', text: 'Nagyhatalmi konfliktusok' },
        {
          kind: 'text',
          emelt: true,
          text: 'A **Szuezi-csatorna** (1869-ben nyílt meg) lerövidítette az utat Európa és Ázsia között, ezért stratégiai jelentőségű volt: Nagy-Britannia 1875-ben részvényeket vásárolt, majd 1882-ben megszállta Egyiptomot, hogy az Indiába vezető útvonalat biztosítsa.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Fashoda** (1898) a Nílus felső folyásánál fekvő település, ahol a francia és a brit gyarmatosító csapatok összeütközés közelébe kerültek, mert Franciaország kelet–nyugati, Nagy-Britannia észak–déli irányú afrikai birodalmat akart. Franciaország végül engedett. A válság után a két ország közeledett egymáshoz (1904: antant megállapodás).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **Balkán** az oszmán hatalom hanyatlása miatt a nagyhatalmak (Oroszország, az Osztrák–Magyar Monarchia) ütközőzónája lett. Az 1877–78-as orosz–török háború után a **berlini kongresszus (1878)** átrajzolta a térség határait: Szerbia, Montenegró és Románia függetlenné vált, Bosznia-Hercegovina megszállását pedig az Osztrák–Magyar Monarchia kapta meg. Ez a feszültség vezetett a Balkán „puskaporos hordóvá” válásához.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A szövetségi rendszerek is a hatalmi versengés szülöttei: Bismarck diplomáciájának eredménye volt a **hármas szövetség** (1882: Németország, az Osztrák–Magyar Monarchia, Olaszország). Vele szemben alakult ki az antant (Franciaország, Oroszország, Nagy-Britannia). A gyarmati ütközések (például a marokkói válságok, 1905 és 1911) tovább élezték az ellentéteket, és hozzájárultak az első világháború kitöréséhez.',
        },
        { kind: 'heading', text: 'A gyarmatosítás következményei' },
        {
          kind: 'text',
          text: 'A gyarmattartó országok gazdagodtak, de a gyarmatokon a helyi gazdaság egyoldalú (egy terményre épülő) lett, a határokat gyakran a gyarmatosítók húzták meg a helyi népek figyelmen kívül hagyásával. A hagyományos kultúrák és társadalmak megrendültek, az őslakosságot kizsákmányolták, és sokszor erőszakkal kényszerítették engedelmességre. Az ellenállás és a nemzeti mozgalmak a 20. században vezettek a gyarmati rendszer felbomlásához.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1869', text: 'A Szuezi-csatorna megnyitása.' },
            { date: '1878', text: 'A berlini kongresszus.', emelt: true },
            { date: '1882', text: 'A hármas szövetség megkötése.', emelt: true },
            {
              date: '1884–1885',
              text: 'A berlini (Kongo-) konferencia: az afrikai felosztás szabályai.',
            },
            { date: '1898', text: 'A fashodai válság.', emelt: true },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Gyarmatosítás okainak és céljainak felsorolása források vagy térkép alapján.',
            'Rövid kifejtés: hogyan vezetett a gyarmati verseny a nagyhatalmi szembenálláshoz?',
            'Fogalmak és helyszínek: imperializmus, hármas szövetség, Szuezi-csatorna, Fashoda, Balkán.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: gyarmatnak tekinteni az Osztrák–Magyar Monarchiát vagy a Habsburg-országokat, vagy a kora újkori (spanyol, portugál) és a 19. század végi gyarmatosítás okait összekeverni. Az imperializmus kora a nyersanyag-, piac- és tőkeigény, valamint a nagyhatalmi presztízs jegyében zajlott.',
        },
        {
          kind: 'tip',
          text: 'Egy erős válaszban négy szempontot adj meg: gazdasági, politikai/stratégiai, eszmei ok, majd egy konkrét ütközési példa (Fashoda, Szuez, Balkán). Ezek után kösd az eseményt a világháború előzményeihez.',
        },
      ],
      topicMatch: ['gyarmatosítás', 'imperializmus'],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik NEM tartozott a gyarmatosítás okai közé a 19. század végén?',
          options: [
            'nyersanyagszerzés',
            'új piacok keresése',
            'nagyhatalmi presztízs',
            'a gyarmatok önállóságának támogatása',
          ],
          answer: 3,
          explanation:
            'A nagyhatalmak a gyarmatokat nyersanyagért, piacért és presztízsért szerezték meg, nem a függetlenségük előmozdítására.',
          emelt: true,
        },
        {
          question: 'Melyik két állam között alakult ki válság Fashodánál 1898-ban?',
          options: [
            'Németország és Olaszország',
            'Franciaország és Nagy-Britannia',
            'Oroszország és Japán',
            'Spanyolország és Portugália',
          ],
          answer: 1,
          explanation:
            'Fashodánál a francia és a brit gyarmatosító érdekek ütköztek; Franciaország engedett, és később közeledett Nagy-Britanniához.',
          emelt: true,
        },
        {
          question: 'Miért volt stratégiai jelentősége a Szuezi-csatornának?',
          options: [
            'Összekötötte az Atlanti- és a Csendes-óceánt.',
            'Lerövidítette az Európa és Ázsia közötti tengeri utat.',
            'Az ország egyetlen édesvízforrása volt.',
            'Ez volt Németország legfontosabb kikötője.',
          ],
          answer: 1,
          explanation:
            'A csatorna a Földközi-tengert és a Vörös-tengert kötötte össze, ezért az Indiába vezető út kulcspontja volt.',
          emelt: true,
        },
        {
          question: 'Mely országok alkották az 1882-es hármas szövetséget?',
          options: [
            'Franciaország, Oroszország, Nagy-Britannia',
            'Németország, Oroszország, Japán',
            'Németország, az Osztrák–Magyar Monarchia, Olaszország',
            'Spanyolország, Portugália, Olaszország',
          ],
          answer: 2,
          explanation:
            'A hármas szövetség tagja Németország, az Osztrák–Magyar Monarchia és Olaszország volt; velük szemben az antant állt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Imperializmus', url: wiki('Imperializmus') },
        { label: 'Wikipédia: Gyarmatosítás', url: wiki('Gyarmatosítás') },
        { label: 'Wikipédia: Fashodai incidens', url: wiki('Fashodai incidens') },
      ],
    },
  ],
};

export default unit;
