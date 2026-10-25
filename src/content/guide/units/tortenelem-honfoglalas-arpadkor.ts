import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 2.4 (Magyar őstörténet és honfoglalás) and 2.5 (A keresztény államalapítás és az Árpád-kor). */
const unit: GuideUnit = {
  id: 'honfoglalas-arpadkor',
  subject: 'tortenelem',
  order: 20,
  title: 'A honfoglalás és az Árpád-kor',
  requirementRef: '2.4–2.5',
  intro:
    'A magyarok útja a honfoglalástól az államalapításon át a tatárjárásig: a kalandozások, István államszervezése, az Aranybulla és IV. Béla újjáépítése.',
  requirementSource:
    'A témák, fogalmak, személyek, évszámok és helyszínek az érettségi részletes vizsgakövetelményeinek 2. témaköréből (középkor) valók, a 2.4 és 2.5 sorához tartozó tételek. Ami emelt szintű, azt külön jelöljük.',
  requirements: {
    terms: {
      kozep: [
        'honfoglalás',
        'kettős honfoglalás elmélete',
        'avarok',
        'kabarok',
        'vérszerződés',
        'rovásírás',
        'kalandozások',
        'székelyek',
        'király',
        'vármegye',
        'nádor',
        'ispán',
        'szerviens',
        'ellenállási záradék',
        'sarkalatos nemesi jogok',
        'regálé',
        'kunok',
        'tatárok/mongolok',
        'szászok',
        'egyházmegye',
        'érsekség',
        'tized',
        'szent',
        'kolostor',
      ],
      emelt: [
        'finnugor',
        'Magyar Nagyfejedelemség',
        'királyi és nemesi vármegye',
        'bán',
        'kettős kereszt',
        'legenda',
        'Képes Krónika',
      ],
    },
    people: {
      kozep: [
        'Álmos',
        'Árpád',
        'az Árpád-ház',
        'Géza',
        'I. (Szent) István',
        'Koppány',
        'Szent Gellért',
        'Szent Imre',
        'II. András',
        'IV. Béla',
        'Szent Erzsébet',
        'Szent Margit',
      ],
      emelt: ['Anonymus', 'II. Szilveszter', 'I. (Szent) László', 'Könyves Kálmán', 'III. Béla'],
    },
    dates: {
      kozep: [
        '895 a honfoglalás',
        '907 a pozsonyi csata',
        '997/1000–1038 I. (Szent) István uralkodása',
        '1222 az Aranybulla',
        '1241–1242 a tatárjárás',
      ],
      emelt: [
        '955 az augsburgi csata',
        '972–997 Géza fejedelemsége',
        '1077–1095 Szent László uralkodása',
        '1172–1196 III. Béla uralkodása',
        '1235–1270 IV. Béla uralkodása',
      ],
    },
    places: {
      kozep: [
        'Kárpát-medence',
        'Etelköz',
        'Vereckei-hágó',
        'Pannonhalma',
        'Esztergom',
        'Székesfehérvár',
        'Buda',
        'Muhi',
        'Erdély',
        'Horvátország',
      ],
      emelt: ['Magna Hungaria', 'Halics/Galícia', 'Kalocsa', 'Pécs', 'Szászföld'],
    },
  },
  pages: [
    {
      id: 'honfoglalas-kalandozasok',
      subject: 'tortenelem',
      unitId: 'honfoglalas-arpadkor',
      title: 'A honfoglalás és a kalandozások',
      level: 'kozep',
      requirement: {
        kozep: 'A honfoglalás okai és menete, a kalandozások/támadó hadjáratok',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyarok a **finnugor** nyelvű népek leszármazottai, a honfoglalás előtt az **Etelközben** éltek, félnomád, állattartó életmódot folytatva.',
            'A törzsszövetség vezetője **Álmos**, majd fia, **Árpád** volt. A hét magyar törzshöz csatlakoztak a **kabarok** is.',
            'A **honfoglalás (895)** okai: a besenyők nyomása, a bizánci–bolgár háborúba keveredés, valamint a Kárpát-medence gyenge védelme és gazdag legelői.',
            'A magyarok a **Vereckei-hágón** át érkeztek a **Kárpát-medencébe**; a megszerzett területet **907-ben a pozsonyi csatában** védték meg a bajorokkal szemben.',
            'A **kalandozások** (a 10. század közepéig) zsákmányszerző, adóztató hadjáratok voltak nyugatra és Bizánc felé. Az **955-ös augsburgi vereség** és a Bizánc elleni kudarcok után véget értek.',
          ],
        },
        {
          kind: 'map',
          title: 'A honfoglalás helyszínei',
          places: [
            {
              name: 'Vereckei-hágó',
              lat: 48.77,
              lon: 23.0,
              note: 'a magyarok belépése a Kárpát-medencébe',
            },
            { name: 'Pozsony', lat: 48.15, lon: 17.11, note: '907: a pozsonyi csata' },
            { name: 'Esztergom', lat: 47.79, lon: 18.74, note: 'a későbbi királyi székhely' },
            { name: 'Székesfehérvár', lat: 47.19, lon: 18.41, note: 'a későbbi koronázóváros' },
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'honfoglalás',
              text: 'A magyar törzsek megtelepedése a Kárpát-medencében (895 körül).',
            },
            {
              term: 'kabarok',
              text: 'A kazár birodalomból kivált törzsek, amelyek csatlakoztak a magyarokhoz.',
            },
            {
              term: 'avarok',
              text: 'A Kárpát-medence korábbi, 568-tól itt élő uralkodó népe; a honfoglalás idején már csak maradványaik éltek itt.',
            },
            {
              term: 'kalandozások',
              text: 'A 9. század végétől a 10. század közepéig tartó zsákmányszerző és adószedő támadó hadjáratok Nyugat-Európában és a Balkánon.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az Etelköz és a törzsszövetség' },
        {
          kind: 'text',
          text: 'A magyarok a Kárpátoktól keletre, a Dnyeszter és a Dnyeper vidékén, az **Etelközben** éltek. Félnomád állattartók voltak (lovak, juhok, szarvasmarhák), emellett földműveléssel, vadászattal és halászattal is foglalkoztak. A **hét magyar törzs** szövetsége mellé csatlakoztak a **kabarok**. A szövetség élén az **Álmos** nemzetségéből származó fejedelem állt, akit később fia, **Árpád** követett. Az Árpád-ház ettől az Árpádtól kapta a nevét.',
        },
        {
          kind: 'text',
          text: 'A hagyomány szerint a törzsek **vérszerződéssel** erősítették meg az egységet, és Árpádot választották meg vezetőjüknek. Ezt **Anonymus** (a *Gesta Hungarorum* szerzője) írja le, aki csak a 12–13. század fordulóján alkotott, ezért az ő leírásait forráskritikával kell kezelni.',
        },
        { kind: 'heading', text: 'Miért indultak el?' },
        {
          kind: 'keypoints',
          items: [
            '**Besenyő nyomás**: a keletről érkező, a magyarokkal ellenséges besenyők megtámadták az Etelközt.',
            '**Külső háborúk**: a magyarok Bizánc oldalán harcoltak a bolgárok ellen (894–895); a bolgárok a besenyőkkel szövetkezve fordultak ellenük.',
            '**A Kárpát-medence adottságai**: nagy legelők, az Avar Kaganátus összeomlása és a területen élő szláv népek politikai széttagoltsága miatt nem volt komoly ellenállás.',
          ],
        },
        { kind: 'heading', text: 'A honfoglalás menete' },
        {
          kind: 'text',
          text: 'A magyar törzsek **895 körül** a **Vereckei-hágón** át özönlöttek a Kárpát-medencébe, és néhány év alatt megszerezték annak nagy részét. A korábbi lakosság (szlávok, avar maradványok) részben beolvadt. A fejedelmi központ a Duna vonalában volt. **907-ben a pozsonyi csatában** a magyarok legyőzték a bajor sereget, ezzel biztosították a megszerzett területet nyugaton. A határvidéket **gyepűvel** védték (erdők, akadályok, őrök).',
        },
        {
          kind: 'text',
          text: 'A **székelyek** a magyarok határvédő csoportjai lettek; később Erdély keleti részén telepedtek le. A **rovásírást** a magyarok az Árpád-korban használták, mielőtt a latin betűs írás elterjedt.',
        },
        { kind: 'heading', text: 'A kalandozások' },
        {
          kind: 'text',
          text: 'A kalandozó hadjáratok a 10. század első felében, a honfoglalás után kezdődtek. Célja zsákmányszerzés, adó beszedése és a törzsi vezetők hatalmának növelése volt. A magyarok könnyűlovas íjász hadseregei gyors, nehezen követhető csapatokban mozogtak. Hadjáratokat vezettek **nyugatra** (Itália, a német területek, Bajorország, Franciaország), illetve **a Balkán és Bizánc** felé is.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '895 körül', text: 'A honfoglalás.' },
            { date: '907', text: 'A pozsonyi csata: a magyarok legyőzik a bajor sereget.' },
            {
              date: '955',
              text: 'Az augsburgi (Lech-mezei) csatában I. Ottó német király legyőzi a magyarokat.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **augsburgi csata** után a nyugati kalandozások véget értek; a magyar vezetők megértették, hogy az állandó háborúzás helyett a letelepedett államszervezet felé kell fordulniuk. A bizánci hadjáratok is a 10. század végére lezárultak. A katonai kudarcok és a belső átalakulás vezetett a keresztény államalapításhoz.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A magyar honfoglalás időpontját a szakirodalom 895–896-ra teszi. A **kettős honfoglalás elmélete** (László Gyula) szerint már a 670 körül érkező késő avarok magyar nyelvűek voltak, így két hullámban érkeztek magyarok a Kárpát-medencébe. A kutatók többsége ezt nem fogadja el, de a követelményben szereplő fogalom.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: a magyarok vándorlása az Etelközből a Kárpát-medencébe, a Vereckei-hágó helye.',
            'Forrásrészlet (Anonymus, Bölcs Leó, a Képes Krónika): mi a forrás, mit állít, mennyire megbízható?',
            'Évszámok: 895, 907, 955. Mi történt, mi lett a következménye?',
            'Esszé vagy rövid válasz: a honfoglalás okai és a kalandozások célja, kudarcának okai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a honfoglalás okai közül csak a besenyő nyomást említik. A válaszban a külső (besenyő, bizánci–bolgár háború) és a belső (az új haza adottságai) tényezőket is írd le.',
        },
        {
          kind: 'tip',
          text: 'Az 907-es pozsonyi csata a honfoglalás megszilárdítása, a 955-ös augsburgi csata a nyugati kalandozások vége. A kettő nem keverhető össze: az egyik győzelem, a másik vereség.',
        },
      ],
      topicMatch: ['honfoglalás', 'kalandozások'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Melyik területen éltek a magyarok a honfoglalás előtt?',
          options: ['Magna Hungaria', 'Etelköz', 'Kárpát-medence', 'Pannónia'],
          answer: 1,
          explanation:
            'A honfoglalás előtt az Etelközben éltek. Magna Hungaria a korábbi, távolabbi őshaza volt.',
        },
        {
          question: 'Melyik hágón át érkeztek a magyarok a Kárpát-medencébe?',
          options: ['Vereckei-hágó', 'Brassói-hágó', 'Tihuta-hágó', 'Ojtozi-szoros'],
          answer: 0,
          explanation:
            'A követelményben megnevezett útvonal a Vereckei-hágó, innen vonultak le a törzsek.',
        },
        {
          question: 'Mi történt 907-ben?',
          options: [
            'A magyarok legyőzték a bajor sereget Pozsonynál.',
            'I. Ottó legyőzte a magyarokat Augsburgnál.',
            'Megkezdődött a honfoglalás.',
            'A magyarok felvették a kereszténységet.',
          ],
          answer: 0,
          explanation:
            'A pozsonyi csata magyar győzelem volt, ezzel megszilárdult a magyarok uralma a Kárpát-medencében.',
        },
        {
          question: 'Melyik esemény zárta le a nyugati kalandozásokat?',
          options: [
            'a pozsonyi csata 907-ben',
            'az augsburgi csata 955-ben',
            'a mohácsi csata 1526-ban',
            'a nikápolyi csata 1396-ban',
          ],
          answer: 1,
          explanation: 'Az augsburgi vereség (955) után a nyugati hadjáratok megszűntek.',
        },
        {
          question: 'Mit állít a kettős honfoglalás elmélete?',
          options: [
            'A magyarok már a 670 körül érkező késő avarokkal megjelentek a Kárpát-medencében.',
            'A magyarok kétszer vonultak be a Kárpát-medencébe a besenyők elől.',
            'Két törzsszövetség osztozott a Kárpát-medencén.',
            'A honfoglalás kétszer, 895-ben és 907-ben történt.',
          ],
          answer: 0,
          explanation:
            'László Gyula szerint a késő avarok egy része magyar nyelvű volt, ezért két hullámban érkeztek magyarok.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Honfoglalás', url: wiki('Magyar honfoglalás') },
        { label: 'Wikipédia: Kalandozások', url: wiki('Magyar kalandozások') },
        { label: 'Wikipédia: Pozsonyi csata', url: wiki('pozsonyi csata 907') },
      ],
    },
    {
      id: 'oseredet-etelkoz-torzsszovetseg',
      subject: 'tortenelem',
      unitId: 'honfoglalas-arpadkor',
      title: 'Az eredet kérdései és a törzsszövetség az Etelközben',
      level: 'emelt',
      requirement: {
        emelt:
          'Az eredet kérdései (nyelvészet, régészet, néprajz, genetika), a magyar törzsszövetség az Etelközben',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyar nyelv a **finnugor** nyelvcsaládba tartozik: ezt a **nyelvészet** mutatta ki a legbiztosabban.',
            'A **régészet**, a **néprajz** és a **genetika** más oldalról közelít: sírleletekből, hagyományokból, DNS-ből próbál következtetni.',
            'A magyarok a vándorlás során az **Urál** vidékéről a **Magna Hungaria** területén át jutottak a Fekete-tenger melletti **Etelközbe**.',
            'Az Etelköz idején a hét törzs szövetsége, a **Magyar Nagyfejedelemség** már kialakult.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'finnugor',
              text: 'Az uráli nyelvcsalád egyik ága, ide tartozik a magyar, a finn és az észt nyelv is.',
            },
            {
              term: 'Magyar Nagyfejedelemség',
              text: 'A magyar törzsek az Etelközben kialakult szövetsége, amelynek élén a nagyfejedelem állt.',
            },
            {
              term: 'Magna Hungaria',
              text: 'A magyarok egy része által a Volga és az Urál környékén hátrahagyott, korábbi lakóhely; Julianus barát a 13. században még magyar nyelvű népet talált itt.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mit mond a nyelvészet?' },
        {
          kind: 'text',
          text: 'A magyar nyelv alapszókincse (testrészek, rokonságnevek, alapvető igék) és nyelvtani szerkezete **finnugor** eredetű. Ebből arra következtetnek, hogy a magyar nyelv őse a finnugor alapnyelv egyik ága, amelyet az Urál nyugati oldalán beszéltek. A nyelv később **török** jövevényszavakat is felvett (például a mezőgazdaság és az állattartás szavait), ez a törökös népekkel való együttélésre utal.',
        },
        { kind: 'heading', text: 'További tudományok' },
        {
          kind: 'keypoints',
          items: [
            '**Régészet**: a sírok, fegyverek, ékszerek és hagyományok a vándorlás útvonalának nyomait őrzik; a honfoglalás kori sírleletek leírják a hadviselés és a viselet jellemzőit.',
            '**Néprajz**: a hagyományok, népköltészet, hiedelmek (például a táltosok szerepe) rokon vonásokat mutatnak a finnugor népek kultúrájával.',
            '**Genetika**: a DNS-vizsgálatok a Kárpát-medencei populációk és a rokon népek közötti kapcsolatokat vizsgálják. Az eredmények óvatosan értelmezendők, a nyelvi és a genetikai rokonság nem azonos.',
          ],
        },
        {
          kind: 'tip',
          text: 'A lényeg: a nyelvi rokonság nem jelenti automatikusan a genetikai vagy a kulturális azonosságot. A tudományok eredményei együtt adnak megbízható képet.',
        },
        { kind: 'heading', text: 'A törzsszövetség az Etelközben' },
        {
          kind: 'text',
          text: 'A magyarok a vándorlásuk során a 9. században jutottak az Etelközbe. A **hét törzs** szövetségéhez a **kabarok** csatlakoztak. A társadalom nemzetségekre, törzsekre tagolódott; a törzsek vezetői az **előkelők**, a nép szabad harcosai pedig a lovas íjász haderő gerincét adták. A nagyfejedelem közös vezető volt, de a törzsek önállósága is erős maradt.',
        },
        {
          kind: 'text',
          text: 'Az Etelköz idején a magyar uralkodói rendszerben sokan kettős fejedelemséget feltételeznek: a **kende** a szent (rituális) vezető, a **gyula** a katonai (hadvezéri) vezető volt. Ezt az arab és bizánci források alapján szokták feltételezni.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás vagy ábra: mely tudomány milyen bizonyítékot ad az eredetről?',
            'Fogalmak: finnugor, Magyar Nagyfejedelemség.',
            'Emelt esszé: a magyar őstörténet kutatása és az eredet kérdései.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd a nyelvi és a genetikai rokonságot. A magyar nyelv finnugor, de ebből nem következik, hogy a népesség genetikailag is csak finnugor lenne.',
        },
        {
          kind: 'tip',
          text: 'Esszében tudományáganként csoportosíts: mit vizsgál, milyen eredményt ér el, mi a korlátja. A „több tudomány együtt” gondolat külön pontot érhet.',
        },
      ],
      topicMatch: ['törzsszövetség', 'őstörténet'],
      quiz: [
        {
          question: 'Melyik nyelvcsaládba tartozik a magyar nyelv?',
          options: ['szláv', 'finnugor', 'germán', 'török'],
          answer: 1,
          explanation:
            'A nyelvészeti vizsgálatok szerint a magyar a finnugor nyelvcsalád tagja; a török csak jövevényszavakat adott.',
        },
        {
          question: 'Melyik tudomány a magyar eredet legbiztosabb bizonyítéka?',
          options: ['genetika', 'régészet', 'nyelvészet', 'néprajz'],
          answer: 2,
          explanation:
            'A nyelvi rokonságot a nyelvészet mutatja ki biztosan; a többi tudomány kiegészítő.',
        },
        {
          question: 'Mit jelent a Magna Hungaria elnevezés?',
          options: [
            'A Kárpát-medencei magyar királyságot.',
            'A magyarok egy részének kelet-európai (Volga–Urál környéki) lakóhelyét.',
            'Az Árpád-kori Magyarországot a legnagyobb kiterjedésében.',
            'A honfoglalás utáni határvédelmi rendszert.',
          ],
          answer: 1,
          explanation:
            'A Magna Hungaria a keleten maradt magyarok földje, a Volga–Urál vidékén; Julianus barát kereste fel.',
        },
        {
          question: 'Mi volt a kende és a gyula szerepe a kettős fejedelemség feltevése szerint?',
          options: [
            'A kende volt a szent, a gyula a katonai vezető.',
            'A kende volt a katonai, a gyula a szent vezető.',
            'Mindkettő katonai vezető volt.',
            'A kende a király, a gyula a nádor.',
          ],
          answer: 0,
          explanation: 'A kende a szakrális, a gyula a hadvezéri tisztség volt.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyarok eredete', url: wiki('A magyarok eredete') },
        { label: 'Wikipédia: Finnugor nyelvek', url: wiki('Finnugor nyelvek') },
        { label: 'Wikipédia: Etelköz', url: wiki('Etelköz') },
      ],
    },
    {
      id: 'geza-istvan-allamalapitas',
      subject: 'tortenelem',
      unitId: 'honfoglalas-arpadkor',
      title: 'Géza és Szent István államszervezése',
      level: 'kozep',
      requirement: {
        kozep:
          'Géza és I. (Szent) István államszervező tevékenysége, a földbirtokrendszer és a vármegyeszervezet',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Géza fejedelem** (972–997) a kalandozások kudarca után a **nyugati kereszténység** felé fordult, és megkezdte a központosítást.',
            'Fia, **István** (uralkodása 997/1000–1038) legyőzte a lázadó **Koppányt**, és **az ezredforduló körül királlyá koronázták** (Esztergom).',
            'Az **egyházszervezet**: 10 egyházmegye, két érsekség (**Esztergom**, **Kalocsa**), a **pannonhalmi** bencés apátság, a **tized**.',
            'A világi igazgatás alapja a **vármegye** (királyi vár és a hozzá tartozó terület), vezetője az **ispán**.',
            'A **földbirtokrendszer**: a királyi birtok volt a legnagyobb; mellette egyházi birtokok és az előkelők birtokai álltak.',
          ],
        },
        {
          kind: 'map',
          title: 'Az államalapítás helyszínei',
          places: [
            {
              name: 'Esztergom',
              lat: 47.79,
              lon: 18.74,
              note: 'érsekség, István koronázása (1000/1001)',
            },
            {
              name: 'Székesfehérvár',
              lat: 47.19,
              lon: 18.41,
              note: 'királyi székhely, a királyok temetkezőhelye',
            },
            {
              name: 'Pannonhalma',
              lat: 47.55,
              lon: 17.76,
              note: 'a bencés apátság (Géza alapította, 996)',
            },
            { name: 'Kalocsa', lat: 46.53, lon: 18.98, note: 'az érsekség székhelye' },
            { name: 'Pécs', lat: 46.07, lon: 18.23, note: 'püspökség' },
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'ispán', text: 'A király által kinevezett vármegyei vezető.' },
            {
              term: 'vármegye',
              text: 'A királyi várra épülő igazgatási egység, ahol az ispán vezette a katonai és bírói ügyeket.',
            },
            {
              term: 'egyházmegye',
              text: 'A püspök vezette egyházi terület; István idején 10 volt.',
            },
            {
              term: 'érsekség',
              text: 'Több egyházmegye fölé rendelt egyházi központ, vezetője az érsek.',
            },
            { term: 'tized', text: 'A termés tizedének befizetése az egyház javára.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Géza és az új irány' },
        {
          kind: 'text',
          text: 'A kalandozások kudarca után a magyar vezetők rájöttek, hogy a pogány életforma hosszú távon nem tartható fenn. **Géza fejedelem** (972–997) a német császársággal és a nyugati egyházzal építette ki a kapcsolatokat: német és cseh térítők érkeztek az országba, ő pedig fiát bajor hercegnővel házasította össze. Géza erőszakos eszközökkel központosította a hatalmat: a törzsi vezetőket leigázta, és a hatalmat az Árpád-ház kezében összpontosította. Megalapította a **pannonhalmi** apátságot is (996). Maga is megkeresztelkedett, de a régi hitet sem hagyta el teljesen.',
        },
        { kind: 'heading', text: 'István és a koronázás' },
        {
          kind: 'text',
          text: 'Géza fia, **István** (Vajk) nyugati keresztény nevelést kapott, felesége a bajor hercegnő, **Gizella** lett. Atyja halála (997) után a rokonságban legidősebbként **Koppány** is igényt tartott a hatalomra a régi öröklési rend alapján (a legidősebb családtag örököl), és a hagyomány szerint Géza özvegyét is el akarta venni. István **német lovagok** segítségével legyőzte, és felnégyeltette. Ezzel győzött az apáról fiúra szálló, nyugati típusú öröklés.',
        },
        {
          kind: 'text',
          text: 'István **az ezredforduló körül** királlyá koronázták (**997/1000–1038** a követelmény szerinti uralkodása; a koronázás 1000. karácsonyán vagy 1001. január 1-jén történt). A hagyomány szerint **II. Szilveszter pápa** küldött koronát és apostoli keresztet István számára; a koronázás a független, nyugati típusú királyság elismerése volt.',
        },
        {
          kind: 'compare',
          title: 'Törzsi hatalom és királyság',
          columns: ['Fejedelmi kor', 'Szent István királysága'],
          rows: [
            { label: 'Hit', cells: ['pogány', 'keresztény (nyugati)'] },
            {
              label: 'Öröklés',
              cells: ['a nemzetség legidősebb tagja', 'apáról fiúra, a király jelöli ki'],
            },
            {
              label: 'Igazgatás',
              cells: ['törzsi vezetők', 'király által kinevezett ispánok (vármegye)'],
            },
            { label: 'Írásbeliség', cells: ['rovásírás', 'latin nyelvű írásbeliség'] },
          ],
        },
        { kind: 'heading', text: 'Az egyházszervezet' },
        {
          kind: 'text',
          text: 'István **10 egyházmegyét** (püspökséget) hozott létre, és két érsekséget: **Esztergomot** és **Kalocsát**. Az egyház anyagi alapja a **tized** és a királyi adományok voltak. Az apátságok közül kiemelkedő a **pannonhalmi** bencés kolostor. Törvényei előírták a vasárnapi ünneplést és azt, hogy tíz falu közösen templomot építsen. **Szent Gellért** Csanád püspöke és **Szent Imre** nevelője lett; Imre hercegről István *Intelmeket* írt (a hagyomány szerint). Imre 1031-ben meghalt.',
        },
        { kind: 'heading', text: 'A vármegyeszervezet' },
        {
          kind: 'text',
          text: 'A **vármegye** a királyi vár és a hozzá tartozó terület volt. Élén a király által kinevezett **ispán** állt, aki az adószedést, a bíráskodást és a katonai szervezést intézte. A vár védelmét a **várjobbágyok** (katonáskodó szabadok) és a **várnépek** (szolgálattévők) látták el. A vármegyék száma István korában is több tucat volt, ezek összessége adta az ország területi közigazgatását. A központban a **nádor** a király helyettese és első bírája volt, az **udvarispán** az udvartartást vezette.',
        },
        { kind: 'heading', text: 'A földbirtokrendszer' },
        {
          kind: 'text',
          text: 'Az ország földjének legnagyobb része **királyi birtok** volt (a vármegyék földjei). A király egyes területeket híveinek adományozott, így nőtt az **egyházi birtok**, és kialakult az előkelők (nemzetségfők, harcosok) magánbirtoka. A **szolgálattevők (szerviensek)** a királyi szolgálatért kaptak földet. A birtokok mellett a királyi hatalom a vármegyék jövedelmeire (adók, vámok, bírságok) is támaszkodott.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az Árpád-kori vármegyéknek két típusa volt: a **királyi vármegye** (a király tulajdonában álló várak köré szerveződött) és a későbbi **nemesi vármegye** (a 13. századtól a nemesek önkormányzata). A **bán** a hadiszervezet és a dél-nyugati végek egyik vezetője volt. A *Képes Krónika* István királyról szóló *legendáját* is megőrizte.',
        },
        {
          kind: 'text',
          text: 'István halála (1038) után a trónutódlás zűrzavarba fordult (idegen uralkodók, **1046-os Vata-lázadás**, pogánylázadás), de a keresztény királyság rendszere megmaradt. 1083-ban I. László idején szentté avatták Istvánt, Imrét és Gellértet.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: István törvényei vagy az *Intelmek* részlete; mire vonatkozik?',
            'Térkép: egyházmegyék, érsekségek, Pannonhalma, Esztergom, Székesfehérvár helye.',
            'Fogalmak azonosítása: ispán, vármegye, tized, érsekség.',
            'Esszé: hogyan hozta létre István a keresztény államot? (egyház, vármegye, birtokrendszer, öröklés)',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Istvánt tekinteni az első keresztény magyar vezetőnek. Már Géza is nyitott volt a kereszténység felé és megalapozta az államot; István ezt fejezte be, és ő lett király. Koppány a pogány hagyományt képviselte, de nem „népi lázadó”, hanem trónkövetelő.',
        },
        {
          kind: 'tip',
          text: 'Esszében három pillért érdemes mutatni: **egyház** (püspökségek, tized), **vármegye** (ispán), **királyi birtok** (a hatalom gazdasági alapja). Ezek együtt tették a királyt hatalmassá.',
        },
      ],
      topicMatch: [
        'szent) istván',
        'magyar államszervezet',
        'középkori magyar egyház',
        'egyházi méltóságok',
      ],
      cards: { subject: 'tortenelem', deck: 'szemelyek', era: 'kozepkor' },
      quiz: [
        {
          question: 'Ki volt Géza fia, az első magyar király?',
          options: ['Szent László', 'Szent István', 'IV. Béla', 'Koppány'],
          answer: 1,
          explanation:
            'Géza fia Vajk, azaz István volt; Koppány a trónkövetelő rokon, akit István legyőzött.',
        },
        {
          question: 'Melyik város volt az egyik érsekségi központ István idején?',
          options: ['Esztergom', 'Székesfehérvár', 'Muhi', 'Visegrád'],
          answer: 0,
          explanation: 'Az érsekségek Esztergom és Kalocsa voltak.',
        },
        {
          question: 'Ki vezette a vármegyét?',
          options: ['a nádor', 'az ispán', 'a bán', 'a püspök'],
          answer: 1,
          explanation:
            'A vármegye élén a király által kinevezett ispán állt; a nádor a király helyettese volt.',
        },
        {
          question: 'Mi volt a tized?',
          options: [
            'A termés tizedének befizetése az egyháznak.',
            'A király adója a nemességtől.',
            'A földesúri szolgáltatás a jobbágytól.',
            'A kunok adója a királynak.',
          ],
          answer: 0,
          explanation:
            'A tized az egyházat illető jövedelem volt, az egyház fenntartásának alapja.',
        },
        {
          question: 'Mi volt a királyi vármegye és a nemesi vármegye különbsége?',
          options: [
            'A királyi vármegyét a király ispánja irányította, a nemesit a nemesség önkormányzata.',
            'A királyi vármegye Erdélyben, a nemesi a Dunántúlon volt.',
            'A királyi vármegye egyházi, a nemesi világi volt.',
            'Nem volt különbség, két név ugyanarra.',
          ],
          answer: 0,
          explanation:
            'Az Árpád-korban a király által kinevezett ispán vezette a vármegyét; a 13. századtól a nemesség önkormányzata lett belőle.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: I. István király', url: wiki('I. István magyar király') },
        { label: 'Wikipédia: Géza fejedelem', url: wiki('Géza fejedelem') },
        { label: 'Wikipédia: Vármegye', url: wiki('Vármegye') },
      ],
    },
    {
      id: 'laszlo-kalman-iii-bela',
      subject: 'tortenelem',
      unitId: 'honfoglalas-arpadkor',
      title: 'Szent László, Könyves Kálmán és III. Béla',
      level: 'emelt',
      requirement: {
        emelt:
          'A magyar állam megszilárdulása: I. (Szent) László és Könyves Kálmán törvényei; kül- és belpolitika új irányai: III. Béla uralkodása',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**I. (Szent) László** (1077–1095) rendbe tette a belső viszonyokat: szigorú törvényekkel védte a tulajdont, és bővítette az országot (Horvátország).',
            '**Könyves Kálmán** (1095–1116) a törvényekben és a külpolitikában is szilárdította az államot; törvényei józanságukról ismertek.',
            '**III. Béla** (1172–1196) bizánci neveltetésű, erős királyi hatalmat építő uralkodó volt, aki a külpolitikában Bizánc és Nyugat között manőverezett.',
            'Az Árpád-ház nagy kiterjedésű országot irányított: **Horvátország**, a Szászföld betelepítése, a nyugati kapcsolatok.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1077–1095', text: 'I. (Szent) László uralkodása.' },
            { date: '1092', text: 'Szabolcsi zsinat: egyházi és világi törvények.' },
            { date: '1095–1116', text: 'Könyves Kálmán uralkodása.' },
            { date: '1172–1196', text: 'III. Béla uralkodása.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szent László' },
        {
          kind: 'text',
          text: 'László a belső viszályok után szilárdította meg a királyi hatalmat. **Törvényei** rendkívül szigorúan büntették a tulajdon elleni bűncselekményeket (lopás), ezzel védték a rendet és a vagyont. A **szabolcsi zsinaton (1092)** az egyházi élet szabályait is rögzítették. Uralkodása alatt kapcsolódott Magyarországhoz **Horvátország** (1091-től), és ő hozta létre a zágrábi püspökséget; Nagyváradot is püspöki székhellyé tette.',
        },
        {
          kind: 'text',
          text: 'László lovagkirály-hírnévre tett szert; szentté avatása 1192-ben történt (III. Béla idején). A **legendák** (pl. a kun vitézzel vívott küzdelem, a Képes Krónika megörökítésében) a keresztény lovagi ideált mutatták be.',
        },
        { kind: 'heading', text: 'Könyves Kálmán' },
        {
          kind: 'text',
          text: 'Kálmán, akit tudós voltáról **Könyvesnek** hívtak, a belpolitikában az államhatalom megerősítésére törekedett. **Törvényei** enyhítették a László-korabeli szigort, és szabályozták a bíráskodást, az egyház és az állam viszonyát. Híres, hogy a **boszorkányok** elleni vádakat is elutasította, mivel szerinte ilyenek nincsenek. Kálmán **Horvátországgal** perszonálunióba lépett (1102), ezzel a magyar királyok a horvát királyi címet is viselték; később Dalmácia is a korona alá került.',
        },
        { kind: 'heading', text: 'III. Béla' },
        {
          kind: 'text',
          text: 'Béla fiatalon **Bizáncban** nevelkedett (a császár udvarában), majd a magyar trónra lépett. Uralkodása alatt a királyi hatalom megerősödött: bevezette a **kancelláriát** (az írásbeliség hivatalos központja), és az **Árpád-ház jövedelmeit** összeíratta. Külpolitikailag visszaszerezte a **Dalmáciát**, és Halics (Galícia) ügyeiben is beavatkozott. Béla uralkodása a középkori magyar állam egyik csúcsa volt.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'I. (Szent) László',
              text: 'lovagkirály, szigorú törvényalkotó, Horvátország megszerzője.',
            },
            { name: 'Könyves Kálmán', text: 'tudós király, Horvátországgal perszonálunió.' },
            {
              name: 'III. Béla',
              text: 'bizánci nevelésű, a kancellária bevezetője, a királyi hatalom erősítője.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Törvényrészlet alapján: melyik királyé? (László szigorú, Kálmán enyhébb, józan.)',
            'Évszámok: 1077–1095, 1172–1196.',
            'Emelt esszé: az Árpád-kori állam megszilárdulása és a külpolitika irányai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a két IV. és III. Bélát: III. Béla 1172–1196, IV. Béla 1235–1270 (a tatárjárás királya).',
        },
        {
          kind: 'tip',
          text: 'Mindegyik uralkodóhoz tanulj egy jellemző tettet: László (tulajdonvédő törvények, Horvátország), Kálmán (Horvátországgal perszonálunió, józan törvények), Béla (kancellária, bizánci kapcsolat).',
        },
      ],
      topicMatch: ['szent) lászl', 'kálmán', 'iii. béla', 'külpolitikája a középkorban'],
      quiz: [
        {
          question: 'Melyik uralkodó törvényei büntették szigorúan a tulajdon elleni bűnöket?',
          options: ['Könyves Kálmán', 'I. (Szent) László', 'III. Béla', 'II. András'],
          answer: 1,
          explanation:
            'Szent László törvényei szigorúak voltak; Kálmán törvényei enyhébbek és józanabbak.',
        },
        {
          question: 'Ki nevelkedett Bizáncban és vezette be a királyi kancelláriát?',
          options: ['III. Béla', 'IV. Béla', 'Könyves Kálmán', 'Szent István'],
          answer: 0,
          explanation: 'III. Béla (1172–1196), bizánci neveltetésű volt.',
        },
        {
          question: 'Mikor uralkodott Szent László?',
          options: ['1000–1038', '1077–1095', '1172–1196', '1235–1270'],
          answer: 1,
          explanation:
            'I. (Szent) László uralma 1077–1095; a többi uralkodókhoz más dátum tartozik.',
        },
        {
          question: 'Melyik országgal lépett Kálmán perszonálunióba?',
          options: ['Horvátország', 'Lengyelország', 'Csehország', 'Bosznia'],
          answer: 0,
          explanation: 'Horvátországgal, 1102-ben.',
        },
      ],
      sources: [
        { label: 'Wikipédia: I. László magyar király', url: wiki('I. László magyar király') },
        { label: 'Wikipédia: Könyves Kálmán', url: wiki('Könyves Kálmán') },
        { label: 'Wikipédia: III. Béla magyar király', url: wiki('III. Béla magyar király') },
      ],
    },
    {
      id: 'aranybulla-ii-andras',
      subject: 'tortenelem',
      unitId: 'honfoglalas-arpadkor',
      title: 'II. András és az Aranybulla',
      level: 'kozep',
      requirement: { kozep: 'Az Aranybulla legfontosabb elemei' },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**II. András** (1205–1235) túl sok birtokot adományozott el híveinek, így gyengült a királyi hatalom és romlott a pénzügyi helyzet.',
            'A **szerviensek** (a király szolgálatában álló kisebb birtokosok) és a nagybirtokosok elégedetlenek voltak.',
            '**1222-ben** a király kiadta az **Aranybullát**: a nemesek jogait rögzítő, aranypecséttel ellátott oklevelet.',
            'Legfontosabb elemei: **törvényes ítélet nélkül nem fogható el** nemes, a nemes adómentes, hadba csak országon belül köteles menni, évente **Székesfehérváron** gyűlést tartanak; az **ellenállási záradék**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'szerviens',
              text: 'A király szolgálatában álló kisebb birtokos, később a köznemesség egyik őse.',
            },
            {
              term: 'ellenállási záradék',
              text: 'Az Aranybulla záradéka: ha a király megszegi az oklevelet, a nemesek jogosan szembeszállhatnak vele.',
            },
            {
              term: 'sarkalatos nemesi jogok',
              text: 'A nemesség alapvető, a magyar alkotmány részét képező jogai: adómentesség, személyes szabadság, az ellenállási jog stb.',
            },
            {
              term: 'regálé',
              text: 'A királyi jövedelemforrások (pénzverés, sóbányászat, vámok): az uralkodó kizárólagos joga.',
            },
          ],
        },
        {
          kind: 'map',
          title: 'Az Aranybulla helyszíne',
          places: [
            {
              name: 'Székesfehérvár',
              lat: 47.19,
              lon: 18.41,
              note: 'az Aranybulla kiadása, az évi gyűlés helye',
            },
            { name: 'Esztergom', lat: 47.79, lon: 18.74, note: 'királyi székhely' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az előzmények' },
        {
          kind: 'text',
          text: '**II. András** (1205–1235) korábbi királyokhoz képest sokat adományozott el a királyi birtokból, hogy támogatóit megnyerje (ez az **„új berendezkedés”**). A vármegyéket és királyi jövedelmeket kiürítette, ezért a király nem tudott megfelelően fizetni, a pénzverést és a regálékat idegenek (például zsidó és izmaelita kamaraispánok) kezére adta bérbe. Az elégedetlenség felerősödött: 1213-ban a nemesek meggyilkolták a király feleségét, **Gertrúd** királynét. András részt vett az V. keresztes hadjáratban (1217–1218), de eredménytelenül tért haza.',
        },
        {
          kind: 'text',
          text: 'A **szerviensek** (a király szolgálatában álló kisebb birtokosok) azt kifogásolták, hogy a király a nagy adományokkal a főurakat favorizálja, őket pedig mellőzi. A király 1222-ben, a **székesfehérvári országgyűlésen** engedett, és kiadta az **Aranybullát** (arany pecsétről, a *bullá*ról kapta a nevét).',
        },
        { kind: 'heading', text: 'Az Aranybulla legfontosabb elemei' },
        {
          kind: 'keypoints',
          items: [
            '**Személyi szabadság**: a nemest nem lehet törvényes ítélet nélkül elfogni vagy birtokától megfosztani.',
            '**Adómentesség**: a nemesek birtokai után nem kell adót fizetni.',
            '**Katonáskodás**: a nemes az országon belül köteles hadba vonulni; külföldi hadjáratban csak a király költségén (fizetésért).',
            '**Évi gyűlés**: minden évben Szent István napján (augusztus 20-án) a nemesek **Székesfehérváron** összegyűlhetnek, hogy panaszaikat előterjesszék.',
            '**Tisztségek**: a főbb állami tisztségeket nem adhatják külföldieknek, és nem halmozhatók.',
            '**Pénzügy**: a pénzverést és sóbányákat (regálékat) nem bérbe adhatják zsidókra, izmaelitákra.',
            '**Ellenállási záradék**: ha a király megszegi a bullát, a nemesek jogosan ellenállhatnak neki.',
          ],
        },
        {
          kind: 'text',
          text: 'Az Aranybulla első látásra csak a nemességet védte, de hosszú távon az alkotmányos gondolkodás alapja lett, mert kimondta, hogy a király is köteles betartani a törvényt. A záradék sorsáról a bulla későbbi megújításai után a források eltérően írnak.',
        },
        {
          kind: 'text',
          text: 'II. András **1224-ben** kiadta az **Andreanumot**, amely az erdélyi **szászok** (**Szászföld**) kiváltságait biztosította: önálló bíráskodás, szabad bíróválasztás, adófizetés. Lánya, **Szent Erzsébet** (Thüringiai Lajos felesége) a szegények és betegek gondozójaként lett szent.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az Aranybullát gyakran az angol **Magna Charta Libertatummal** (1215) hasonlítják össze: mindkettő az uralkodó hatalmát korlátozta, és az uralkodó is a törvény alatt áll. Az Aranybulla ellenállási záradéka (*ius resistendi*) sarkalatos nemesi jog lett; a rendek 1687-ben a soproni országgyűlésen lemondtak róla, a magyar közfelfogás szerint azonban a jog ezután is élt.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet az Aranybullából: melyik jogot rögzíti (adómentesség, személyes szabadság, ellenállási záradék)?',
            'Fogalmak: szerviens, ellenállási záradék, regálé.',
            'Esszé: az Aranybulla okai és jelentősége a rendi fejlődésben.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy az Aranybulla a jobbágyok jogait védte. Az **elsősorban a nemesek** (szerviensek) jogait szabályozta; a jobbágyság nem tartozott a bulla védettjei közé.',
        },
        {
          kind: 'tip',
          text: 'Az Aranybulla okai közül mindig említs belső (adományozások, a szerviensek elégedetlensége) és pénzügyi (regálék bérbeadása) tényezőt. A jelentősége: a király hatalma törvényekhez kötött, a nemesség jogai írásban rögzültek.',
        },
      ],
      topicMatch: ['aranybulla', 'ii. andr'],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mikor adta ki II. András az Aranybullát?',
          options: ['1000', '1241', '1222', '1301'],
          answer: 2,
          explanation: 'Az Aranybullát 1222-ben adták ki; 1241–1242 a tatárjárás ideje.',
        },
        {
          question: 'Melyik állítás igaz az Aranybullára?',
          options: [
            'A jobbágyok adómentességét rögzítette.',
            'A nemest nem lehetett törvényes ítélet nélkül elfogni.',
            'Eltörölte az egyházi tizedet.',
            'Szent István napján a jobbágyok gyűlést tarthattak.',
          ],
          answer: 1,
          explanation:
            'A nemesek személyes szabadságát védte. Az adómentesség és az évi gyűlés is a nemességre vonatkozott.',
        },
        {
          question: 'Mit mond ki az ellenállási záradék?',
          options: [
            'A nemesek jogosan szembeszállhatnak a királlyal, ha az megszegi a bullát.',
            'A király köteles adót fizetni.',
            'A jobbágyok ellenállhatnak a földesúrnak.',
            'Az egyház ellenállhat a pápának.',
          ],
          answer: 0,
          explanation:
            'A záradék szerint a bulla megszegése esetén a nemesek ellenállása nem hűtlenség.',
        },
        {
          question: 'Hol tartották az Aranybulla szerinti éves gyűlést?',
          options: ['Esztergomban', 'Székesfehérváron', 'Budán', 'Pozsonyban'],
          answer: 1,
          explanation: 'Székesfehérváron, Szent István napján; ott adták ki az Aranybullát is.',
        },
        {
          question: 'Melyik külföldi okmánnyal rokonítják az Aranybullát?',
          options: ['Magna Charta Libertatum', 'Code Napoléon', 'Domesday Book', 'Édesanyanyelv'],
          answer: 0,
          explanation:
            'Az angol Magna Charta Libertatum (1215) hasonló: az uralkodó hatalmát korlátozta.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Aranybulla', url: wiki('Aranybulla') },
        { label: 'Wikipédia: II. András', url: wiki('II. András magyar király') },
        { label: 'Wikipédia: Andreanum', url: wiki('Andreanum') },
      ],
    },
    {
      id: 'tatarjaras-iv-bela',
      subject: 'tortenelem',
      unitId: 'honfoglalas-arpadkor',
      title: 'IV. Béla, a tatárjárás és az újjáépítés',
      level: 'kozep',
      requirement: { kozep: 'IV. Béla uralkodása: tatárjárás és újjáépítés' },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**IV. Béla** (1235–1270) a királyi hatalom megerősítésére törekedett: visszavette az adományokat, és ezzel szembekerült a nemességgel.',
            'A **tatárok (mongolok)** Batu kán vezetésével **1241-ben** a **Vereckei-hágón** át törtek be az országba.',
            '**1241. április 11-én** a **muhi csatában** legyőzték a magyar sereget; Béla elmenekült.',
            'A tatárok 1242-ben kivonultak, de az ország nagy része elpusztult.',
            'Béla az országot **újjáépítette**: kővárak, városi kiváltságok és betelepítés (**németek**, **kunok**). Ezért **második honalapítónak** nevezik.',
          ],
        },
        {
          kind: 'map',
          title: 'A tatárjárás helyszínei',
          places: [
            {
              name: 'Vereckei-hágó',
              lat: 48.77,
              lon: 23.0,
              note: '1241: a tatárok betörése',
            },
            { name: 'Muhi', lat: 47.98, lon: 20.97, note: '1241. április 11.: a csata a Sajónál' },
            { name: 'Buda', lat: 47.5, lon: 19.04, note: 'az újjáépítés egyik központja' },
            { name: 'Esztergom', lat: 47.79, lon: 18.74, note: 'a tatárok ostromolták' },
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1235', text: 'IV. Béla trónra lép.' },
            { date: '1241', text: 'A tatárok betörnek, a muhi csata.' },
            { date: '1242', text: 'A tatárok kivonulnak az országból.' },
            { date: '1270', text: 'IV. Béla halála.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'IV. Béla és a nemesség' },
        {
          kind: 'text',
          text: 'Béla trónra lépve visszavette a II. András által elajándékozott birtokok egy részét, és az udvarban sokakat elmozdított. A nagybirtokosok ezért ellene fordultak. Ráadásul befogadta a tatárok elől menekülő **kunokat**, akikkel a magyar nemesség viszonya feszült volt. **Kötöny** kun fejedelem megölése (1241) után a kunok kivonultak, ami tovább gyengítette a védelmet.',
        },
        { kind: 'heading', text: 'A tatárjárás' },
        {
          kind: 'text',
          text: 'A **tatárok (mongolok)** Batu kán vezetésével meghódították a keleti sztyeppét és Oroszországot, majd **1241 tavaszán** a **Vereckei-hágónál** betörtek az országba. A hadjárat több irányból érkezett. **1241. április 11-én** a **muhi csatában** a Sajó mellett a tatárok szétverték a magyar sereget. Béla nyugatra, majd a Dalmát partvidékre menekült. A tatárok feldúlták az Alföldet, elfoglalták és felégették a településeket, a lakosság jelentős részét megölték vagy elhurcolták. A kővárak közül sok ellenállt.',
        },
        {
          kind: 'text',
          text: '**1242-ben** a tatárok kivonultak az országból (a hagyomány szerint a nagykán halálhírére). A pusztítás a lakosság nagy részét érintette, az Alföld különösen kiürült.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A tatárjárás fő forrása **Rogerius mester** *Siralmas éneke* (*Carmen miserabile*), aki szemtanúként számol be a pusztításról. Forrásként használhatod a pusztítás és a menekülés bemutatására.',
        },
        { kind: 'heading', text: 'Az újjáépítés' },
        {
          kind: 'keypoints',
          items: [
            '**Kővárak építése**: a nemesek és a király is erődöket emeltek (a nomád támadások ellen a kővár biztonságot adott); **Buda** és más városok megerősített központok lettek.',
            '**Városi kiváltságok**: Béla szabad királyi városi jogokat adott (például Budának, Pestnek) hogy a lakosság biztonságban építkezhessen.',
            '**Betelepítés**: elnéptelenedett vidékekre **németeket** és **kunokat** telepített; a kunok katonai szolgálatra is kötelesek voltak.',
          ],
        },
        {
          kind: 'text',
          text: 'Béla tevékenysége miatt **második honalapítónak** nevezik. Lánya, **Szent Margit** (a Nyulak szigetén, a mai Margit-szigeten élt) a hagyomány szerint a tatárjárás idején tett fogadalom alapján lett apáca, az ország megmentéséért cserébe.',
        },
        {
          kind: 'text',
          text: 'Béla uralkodása végén fia, **István** ifjabb királyként saját területet kapott; a családi viszály (a Béla–István háború) az 1260-as években gyengítette az országot.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: a tatárok útja (Vereckei-hágó, Muhi, Esztergom, Buda).',
            'Forrás: Rogerius vagy IV. Béla levele a pápához; mit mutat a pusztításról?',
            'Évszámok: 1241–1242, 1235–1270.',
            'Esszé: a tatárjárás okai, következményei és az újjáépítés intézkedései.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt gondolni, hogy a tatárok véglegesen meghódították az országot. 1242-ben kivonultak, az ország önálló maradt, de súlyosan elpusztult.',
        },
        {
          kind: 'tip',
          text: 'Az újjáépítést csoportosítsd: **védelem** (kővárak), **gazdaság** (városi kiváltságok, betelepítés), **társadalom** (kunok, németek). Így látszik, miért „második honalapító” Béla.',
        },
      ],
      topicMatch: ['tatárjárás', 'iv. béla'],
      cards: { subject: 'tortenelem', deck: 'evszamok', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mikor volt a muhi csata?',
          options: ['1222', '1241', '1301', '1526'],
          answer: 1,
          explanation: 'A muhi csata 1241. április 11-én volt.',
        },
        {
          question: 'Mi történt a muhi csatában?',
          options: [
            'A tatárok legyőzték a magyar sereget.',
            'A magyarok legyőzték a tatárokat.',
            'IV. Béla kiadta az Aranybullát.',
            'A magyarok visszafoglalták Budát.',
          ],
          answer: 0,
          explanation: 'A magyar sereg vereséget szenvedett, a király elmenekült.',
        },
        {
          question: 'Miért nevezik IV. Bélát második honalapítónak?',
          options: [
            'Mert a tatárokat legyőzte.',
            'Mert kővárakat épített, városokat támogatott és betelepítéssel építette újjá az országot.',
            'Mert az Aranybullát kiadta.',
            'Mert a honfoglalást végrehajtotta.',
          ],
          answer: 1,
          explanation:
            'A tatárjárás pusztításai után az újjáépítés (várak, városok, betelepítés) miatt.',
        },
        {
          question: 'Melyik népet telepítette be IV. Béla az elnéptelenedett vidékekre?',
          options: ['a besenyőket', 'a kunokat', 'az avarokat', 'a kabarokat'],
          answer: 1,
          explanation:
            'A kunok és a németek betelepítése volt az újjáépítés része; a kunok katonai szolgálatot is vállaltak.',
        },
        {
          question: 'Melyik krónikás írta meg szemtanúként a tatárjárás pusztítását?',
          options: ['Anonymus', 'Rogerius mester', 'Kézai Simon', 'Thuróczy János'],
          answer: 1,
          explanation: 'Rogerius mester a *Siralmas ének* szerzője.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Tatárjárás Magyarországon', url: wiki('Tatárjárás Magyarországon') },
        { label: 'Wikipédia: IV. Béla', url: wiki('IV. Béla magyar király') },
        { label: 'Wikipédia: Muhi csata', url: wiki('muhi csata') },
      ],
    },
  ],
};

export default unit;
