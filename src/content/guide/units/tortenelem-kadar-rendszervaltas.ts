import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 6.5 (A kádári diktatúra) and 6.6 (A rendszerváltoztatás Magyarországon). */
const unit: GuideUnit = {
  id: 'tortenelem-kadar-rendszervaltas',
  subject: 'tortenelem',
  order: 65,
  title: 'A kádári diktatúra és a rendszerváltoztatás',
  requirementRef: '6.5 A kádári diktatúra, 6.6 A rendszerváltoztatás',
  intro:
    'Hogyan épült újra a hatalom 1956 után, mi volt a kádári alku, hogyan működött a tervgazdaság és a pártállam, miért omlott össze a rendszer, és hogyan zajlott le a békés átmenet 1989–1991 között?',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (6. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'pártállam',
        'Magyar Szocialista Munkáspárt (MSZMP)',
        'munkásőrség',
        'Kommunista Ifjúsági Szövetség (KISZ)',
        'úttörő',
        'III/III. ügyosztály',
        'konszolidáció',
        'amnesztia',
        'termelőszövetkezet',
        'háztáji',
        'tervgazdaság',
        'hiánygazdaság',
        'új gazdasági mechanizmus',
        '„három T”',
        'gulyáskommunizmus',
        'maszek',
        'adósságspirál',
        'privatizáció',
        'rendszerváltoztatás',
        'MDF',
        'SZDSZ',
        'FIDESZ',
        'FKgP',
        'KDNP',
        'MSZP',
        'többpártrendszer',
        'jogállam',
        'nemzeti kerekasztal',
        'sarkalatos törvények',
        'Alkotmánybíróság',
        'kárpótlás',
        'népszavazás',
      ],
      emelt: [
        'peresztrojka',
        'glasznoszty',
        'második gazdaság',
        'szamizdat',
        'Ellenzéki Kerekasztal',
        '„négy igenes” népszavazás',
        'spontán privatizáció',
      ],
    },
    people: {
      kozep: [
        'Kádár János',
        'Nagy Imre',
        'Pozsgay Imre',
        'Antall József',
        'Göncz Árpád',
        'Horn Gyula',
        'Orbán Viktor',
        'Németh Miklós',
      ],
      emelt: ['Aczél György', 'Szűrös Mátyás'],
    },
    dates: {
      kozep: [
        '1956–1989 a Kádár-rendszer',
        '1958 Nagy Imre és társainak kivégzése',
        '1968 az új gazdasági mechanizmus bevezetése',
        '1987 a lakiteleki találkozó',
        '1989–1990 a rendszerváltoztatás',
        '1989 Nagy Imre és mártírtársainak újratemetése, a harmadik köztársaság kikiáltása',
        '1990 szabad országgyűlési és önkormányzati választások',
        '1991 a szovjet csapatok kivonása Magyarországról',
      ],
      emelt: [
        '1968 prágai tavasz',
        '1985 monori találkozó',
        '1989. június 16. Nagy Imre újratemetése',
        '1989. augusztus páneurópai piknik',
        '1989. október 23. a köztársaság kikiáltása',
      ],
    },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'kadar-hatalomra-jutasa-megtorlas',
      subject: 'tortenelem',
      unitId: 'tortenelem-kadar-rendszervaltas',
      title: 'Kádár hatalomra jutása, a megtorlás és a konszolidáció',
      level: 'kozep',
      requirement: {
        kozep:
          'A pártállam, a téeszesítés, a tervgazdaság, a kultúrpolitika, az elnyomás változó formái – a kádári alku',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1956. november 4.** után a szovjet fegyveres erő támogatásával **Kádár János** kormánya vette át a hatalmat; a pártot **Magyar Szocialista Munkáspárt (MSZMP)** néven szervezték újjá.',
            '**1956 végétől 1960 körülig megtorlás** következett: statárium, letartóztatások, börtön, internálás, kivégzések. **1958-ban kivégezték Nagy Imrét és társait.**',
            'Az 1960-as évek elejétől **konszolidáció**: a rendszer lazított, és **1963-ban részleges amnesztiával** a legtöbb politikai fogoly szabadult.',
            'A rendszer jelszava ez lett: **„aki nincs ellenünk, az velünk van”**. Ebből nőtt ki a **kádári alku**.',
            'Az 1956–1989 közötti időszak neve **Kádár-rendszer** vagy **Kádár-korszak**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'MSZMP',
              text: 'Magyar Szocialista Munkáspárt: 1956 novemberében alakult a Magyar Dolgozók Pártja helyett, a Kádár-rendszer egyetlen kormányzó pártja.',
            },
            {
              term: 'konszolidáció',
              text: 'A megtorlás utáni megszilárdulás, rendeződés: a rendszer megnyugtatta a társadalmat, és részben szabadabbá vált.',
            },
            {
              term: 'amnesztia',
              text: 'Közkegyelem: a hatalom (részben) elengedi az elítéltek büntetését. 1963-ban a legtöbb 1956-os politikai fogoly kiszabadult.',
            },
            {
              term: 'pártállam',
              text: 'A párt irányítja az államot: nincs valódi hatalmi ágak szerinti elválasztás és nincs szabad választás.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hatalom újraépítése 1956 után' },
        {
          kind: 'text',
          text: 'Kádár János Nagy Imre kormányának tagja volt, de 1956. november 1-jén elhagyta Budapestet. **Szolnokon** alakította meg a „Magyar Forradalmi Munkás-Paraszt Kormányt”, ezt november 4-én jelentették be. A hatalom a szovjet csapatok erejére támaszkodott. A kormány eleinte a forradalom egyes követeléseit elismerte, de a hatalmat a megszállók és a szervezett pártapparátus tartotta.',
        },
        {
          kind: 'text',
          text: '1956 végén és 1957-ben a kormány felszámolta a **munkástanácsokat** és a forradalmi szervezeteket, **statáriumot** rendelt el, és újjászervezte az erőszakszervezeteket. Létrejött a **munkásőrség** (1957), az MSZMP fegyveres pártmilíciája, amelyet 1989-ben oszlattak fel. A fiatalok szervezete a **KISZ** (Kommunista Ifjúsági Szövetség) lett, a gyermekeké az **úttörőmozgalom**.',
        },
        { kind: 'heading', text: 'A megtorlás' },
        {
          kind: 'text',
          text: 'A megtorlás a forradalom résztvevőit és a vezetőit sújtotta: letartóztatások, bírósági perek, **internálás**, börtönbüntetés és kivégzések. **Nagy Imrét, Maléter Pált és Gimes Miklóst 1958. június 16-án végezték ki**, a nevezetes per többi vádlottja is súlyos büntetést kapott. A kivégzettek számáról a források eltérő adatokat közölnek, a legtöbbet idézett adat 229 körül van. A források szerint mintegy 175–195 ezren hagyták el az országot 1956 végén és 1957-ben.',
        },
        {
          kind: 'keypoints',
          title: 'A megtorlás szakaszai',
          items: [
            '**1956 vége, 1957**: statárium, tömeges letartóztatás, a munkástanácsok felszámolása.',
            '**1958**: Nagy Imre és társai pere és kivégzése, ez a megtorlás jelképe.',
            '**1960-as évek eleje**: a megtorlás lezárul, politikai enyhülés kezdődik.',
            '**1963**: részleges amnesztia, a legtöbb politikai fogoly kiszabadul.',
          ],
        },
        { kind: 'heading', text: 'A konszolidáció' },
        {
          kind: 'text',
          text: 'Az 1960-as évek elejére a rendszer megszilárdult, és a hatalom módszert váltott. Kádár egyik jelszava szerint **„aki nincs ellenünk, az velünk van”**, vagyis nem kellett a rendszert lelkesen támogatni, elég volt nem szembeszegülni vele. Ez a Rákosi-korszak szemléletének („aki nincs velünk, az ellenünk van”) a megfordítása volt. Az elnyomás nem szűnt meg, de **változott a formája**: a nyílt terror helyett az állambiztonság megfigyelése, a karrier- és utazási lehetőségek korlátozása, a cenzúra és a megfélemlítés lett a fő eszköz.',
        },
        {
          kind: 'text',
          text: 'A nemzetközi helyzet is kedvezett: a szovjet csapatok ideiglenes ott-tartózkodását 1957-ben megállapodás rögzítette, Magyarország tagja maradt a **Varsói Szerződésnek** és a **KGST-nek**, de a nyugati kapcsolatok lassan nyíltak. 1978-ban az Egyesült Államok visszaadta a **Szent Koronát**, ez a nyitás egyik jelképe lett.',
        },
        {
          kind: 'compare',
          title: 'Rákosi-korszak és Kádár-rendszer',
          columns: ['Rákosi-diktatúra (1948–1956)', 'Kádár-rendszer (1956–1989)'],
          rows: [
            {
              label: 'A hatalom eszköze',
              cells: [
                'tömeges terror, koncepciós perek, ÁVH',
                'megtorlás után: megfigyelés, megfélemlítés, kisebb terror',
              ],
            },
            {
              label: 'A társadalomhoz való viszony',
              cells: ['„aki nincs velünk, az ellenünk van”', '„aki nincs ellenünk, az velünk van”'],
            },
            {
              label: 'Életszínvonal',
              cells: ['alacsony, erőltetett iparosítás', 'lassan emelkedő, kielégítőbb fogyasztás'],
            },
            {
              label: 'Nyugathoz való kapcsolat',
              cells: ['szinte teljes elzárás', 'fokozatos nyitás'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet (Kádár beszéde, korabeli plakát, hivatalos jelentés): mi jellemezte a rendszert a megtorlás és a konszolidáció idején?',
            'Rövid kifejtés: hogyan változott az elnyomás formája 1956 után?',
            'Összehasonlítás: Rákosi-korszak és Kádár-korszak hasonlóságai és különbségei.',
            'Fogalmak: MSZMP, munkásőrség, amnesztia, konszolidáció.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a Kádár-rendszer „nem volt diktatúra”, mert enyhébb volt a Rákosi-rendszernél. A diktatúra lényege (az egyetlen párt hatalma, a szabad választás és szabad sajtó hiánya, a szovjet függés) megmaradt, csak az elnyomás módszere változott. Ne keverd össze a két mondatot: „aki nincs velünk, az ellenünk van” (Rákosi-korszak), „aki nincs ellenünk, az velünk van” (Kádár).',
        },
        {
          kind: 'tip',
          text: 'Esszében három szakaszra bontsd: 1. a hatalom megszilárdítása és a megtorlás (1956–1960 körül), 2. a konszolidáció és a lazítás (1960-as évek), 3. a stabilitás évei (1970-es évek). Mindig említs konkrét évszámot (1958 kivégzés, 1963 amnesztia).',
        },
      ],
      topicMatch: ['kádár-korszak'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik évben végezték ki Nagy Imrét és társait?',
          options: ['1956', '1958', '1957', '1963'],
          answer: 1,
          explanation:
            '1958. június 16-án. 1956-ban zajlott a forradalom, 1963-ban pedig már amnesztiát hirdettek.',
        },
        {
          question: 'Mi volt a munkásőrség?',
          options: [
            'A munkások érdekvédelmi szervezete.',
            'A kisgazdák önvédelmi alakulata.',
            'A rendőrség elnevezése.',
            'Az MSZMP fegyveres pártmilíciája.',
          ],
          answer: 3,
          explanation:
            'A munkásőrséget 1957-ben hozták létre a párt hatalmának védelmére; 1989-ben feloszlatták.',
        },
        {
          question: 'Melyik mondat jellemzi a kádári konszolidációt?',
          options: [
            'Aki nincs velünk, az ellenünk van.',
            'Aki nincs ellenünk, az velünk van.',
            'Minden hatalmat a tanácsoknak!',
            'Szabad választást akarunk!',
          ],
          answer: 1,
          explanation:
            'Kádár jelszava szerint nem kellett lelkesen támogatni a rendszert, elég volt nem szembeszegülni vele. Az első mondat a Rákosi-korszak szemléletét jellemzi.',
        },
        {
          question: 'Mit jelentett az 1963-as amnesztia?',
          options: [
            'Az 1956-os politikai foglyok többségének szabadon bocsátását.',
            'A párt feloszlatását.',
            'A szovjet csapatok kivonását.',
            'A téeszek megszüntetését.',
          ],
          answer: 0,
          explanation:
            'Az amnesztia részleges volt, de az 1956 miatt elítéltek nagy része kiszabadult.',
        },
        {
          question: 'Mi a „pártállam”?',
          options: [
            'Olyan állam, amelyben sok párt versenyez.',
            'A kormányzó helyettese.',
            'Olyan állam, amelyben a párt irányítja az államot, és nincs szabad választás.',
            'Az államfő választása.',
          ],
          answer: 2,
          explanation:
            'A pártállamban az egyetlen kormányzó párt (itt az MSZMP) uralja az állami intézményeket.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Kádár-rendszer', url: wiki('Kádár-rendszer') },
        { label: 'Wikipédia: Kádár János', url: wiki('Kádár János') },
        { label: 'Wikipédia: 1956-os megtorlás', url: wiki('1956-os megtorlás') },
      ],
    },
    {
      id: 'kadari-partallam-kulturpolitika',
      subject: 'tortenelem',
      unitId: 'tortenelem-kadar-rendszervaltas',
      title: 'A pártállam, az elnyomás változó formái és a kultúrpolitika',
      level: 'kozep',
      requirement: {
        kozep:
          'A pártállam, a téeszesítés, a tervgazdaság, a kultúrpolitika, az elnyomás változó formái – a kádári alku',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **pártállam** lényege: az **MSZMP vezető szerepe**, a hatalom egy kézben, a szabad választás és a független sajtó hiánya.',
            'Az elnyomás eszköze az **állambiztonság** (a **III/III. ügyosztály**), a **besúgók**, a cenzúra és a **munkásőrség** lett.',
            'A **kultúrpolitika** hármas elve a **„három T”**: **támogatott, tűrt, tiltott**.',
            'A **kádári alku**: a társadalom politikai passzivitást és a rendszer elfogadását adta, a hatalom cserébe lassan emelkedő életszínvonalat és viszonylagos nyugalmat.',
            'A szovjet függés megmaradt: Magyarország a **Varsói Szerződés** és a **KGST** tagja volt.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: '„három T”',
              text: 'A kádári kultúrpolitika jelszava: támogatott (a rendszert szolgáló művek), tűrt (ami nem veszélyes, de nem is támogatott) és tiltott (ami a rendszert bírálja).',
            },
            {
              term: 'kádári alku',
              text: 'Hallgatólagos megegyezés: politikai csendért és hallgatásért cserébe viszonylagos jólét és a magánélet szabadsága.',
            },
            {
              term: 'III/III. ügyosztály',
              text: 'Az állambiztonság belső elhárítással foglalkozó szerve (a szervezet neve időnként változott). A besúgók („ügynökök”) hálózatán keresztül figyelte meg az ellenzéket, az egyházakat és az értelmiséget.',
            },
            {
              term: 'KISZ',
              text: 'Kommunista Ifjúsági Szövetség: a fiatalok ideológiai nevelését és mozgósítását végző párt-ifjúsági szervezet. A gyerekeké az úttörőmozgalom volt.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A pártállam működése' },
        {
          kind: 'text',
          text: 'Az alkotmány rögzítette a párt vezető szerepét. A **döntések a pártvezetésben** (Politikai Bizottság, Központi Bizottság) születtek, a parlament és a kormány jórészt végrehajtotta ezeket. A választásokon egyetlen, a párt által jóváhagyott lista szerepelt; a lakosság nagy része elment szavazni, de a választás tétje nem a hatalom megszerzése volt. Az 1980-as évek elején kötelezővé tették, hogy egy körzetben **több jelölt** induljon, ez a reformok kezdetének apró jele volt.',
        },
        {
          kind: 'text',
          text: 'A párt kezében volt a **gazdaság irányítása** (központi tervezés), a **sajtó**, az **oktatás**, a **fegyveres erők** és az **állambiztonság**. A párttagság előny volt a karrierben: a vezető állásokhoz általában kellett a pártkönyv.',
        },
        { kind: 'heading', text: 'Az elnyomás változó formái' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1956–1960 körül',
              text: 'Nyílt terror: statárium, perek, kivégzések, internálás.',
            },
            {
              date: '1960-as évek',
              text: 'Az amnesztia (1963) és a „puhulás”: kevesebb nyílt erőszak.',
            },
            {
              date: '1970-es, 1980-as évek',
              text: 'Rejtett, „puha” módszerek: megfigyelés, besúgók, pályaelhagyásra kényszerítés, útlevél megtagadása, cenzúra.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **állambiztonság** a lakosság megfigyelésére hálózatot épített ki. A **cenzúra** korlátozta a sajtót, a könyvkiadást és a filmeket. Az egyházak működését hivatalok ellenőrizték. Az elnyomás tehát eltűnt a köztudatból, mégis jelen volt a mindennapokban, és ez a bizonytalanság is a rendszert szolgálta.',
        },
        { kind: 'heading', text: 'A kultúrpolitika: támogatott, tűrt, tiltott' },
        {
          kind: 'text',
          text: 'A kultúrpolitika a pártállam eszköze volt: a hatalom az alkotókat három csoportba sorolta. **Támogatott** volt, ami a rendszert szolgálta vagy legalább nem bírálta; **tűrt** az, ami nem volt veszélyes, de nem is volt példa; **tiltott**, ami a rendszert kritizálta. A kiadók, a színházak, a filmgyártás és a sajtó állami ellenőrzés alatt álltak. Az 1960–70-es években a kultúra sokkal szabadabb volt, mint a Rákosi-korszakban: megjelent a **beat-zene**, a modern irodalom és film, de a határokat a hatalom szabta meg.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A kultúrpolitika irányítója hosszú ideig **Aczél György** volt, a párt kultúráért felelős vezető politikusa. Az ő nevéhez fűződik a „három T” gyakorlata. Az ellenzéki kiadványok az illegális **szamizdat** (magánkiadás, másolt és terjesztett írások) útján jelentek meg, erről lásd az ellenzékről szóló emelt oldalt.',
        },
        { kind: 'heading', text: 'A kádári alku' },
        {
          kind: 'text',
          text: 'A rendszer stabilitásának alapja a **kádári alku** volt: a társadalom nem lázadt, és nem lépett fel nyíltan a hatalom ellen; cserébe a vezetés biztosította a **viszonylagos jólétet, a munkahelyi biztonságot** és a magánélet viszonylagos szabadságát. Az 1960–70-es évek életszínvonal-emelkedése ezen alapult. Az 1980-as évek gazdasági nehézségei megingatták az alkut, erről lásd a következő oldalt.',
        },
        {
          kind: 'compare',
          title: 'Mit adott a hatalom, mit kért a társadalomtól?',
          columns: ['A hatalom ajánlata', 'A társadalom vállalása'],
          rows: [
            {
              label: 'Gazdaság',
              cells: [
                'biztos munka, lassan emelkedő bérek',
                'nem követeli a politikai szabadságot',
              ],
            },
            {
              label: 'Magánélet',
              cells: [
                'kisebb ellenőrzés, kényelmesebb mindennapok',
                'nem szervez nyilvános ellenzéket',
              ],
            },
            {
              label: 'Kultúra',
              cells: [
                'relatív szabadság a „tűrt” sávban',
                'tiszteletben tartja a tiltott határokat',
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
            'Forrás (plakát, beszéd, hivatalos rendelet): mit mutat a pártállam működéséről?',
            'Fogalom-magyarázat: „három T”, kádári alku, munkásőrség, KISZ.',
            'Kifejtés: hogyan változott az elnyomás formája a Rákosi-korszakhoz képest?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a „három T” sorrendjét vagy jelentését felcserélni. A helyes: támogatott, tűrt, tiltott. A „kádári alku” nem írásos szerződés volt, hanem hallgatólagos megegyezés.',
        },
        {
          kind: 'tip',
          text: 'A kádári alku értékelésekor két szempontot adj: mit nyert a társadalom (biztonság, életszínvonal) és mit adott fel (politikai szabadság, a nyílt vita lehetősége). Sem a „csak jó volt”, sem a „csak rossz volt” nem pontos válasz.',
        },
      ],
      topicMatch: ['kádár-korszak'],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mit jelent a „három T” a kádári kultúrpolitikában?',
          options: [
            'Támogatott, tűrt, tiltott',
            'Tanítani, tanulni, tapasztalni',
            'Tervezni, termelni, tartalékolni',
            'Törvény, tisztelet, tudomány',
          ],
          answer: 0,
          explanation: 'A hatalom az alkotásokat támogatott, tűrt és tiltott kategóriákba sorolta.',
        },
        {
          question: 'Mit jelentett a kádári alku?',
          options: [
            'Szerződést a Szovjetunióval a csapatok kivonásáról.',
            'A hatalom életszínvonalat és nyugalmat adott, a társadalom politikai csendet.',
            'Megállapodást az ellenzékkel a szabad választásokról.',
            'A tőkések és a munkások szerződését.',
          ],
          answer: 1,
          explanation:
            'Hallgatólagos megegyezés volt: politikai passzivitás a viszonylagos jólétért.',
        },
        {
          question: 'Mi volt a III/III. ügyosztály feladata?',
          options: [
            'A termelőszövetkezetek ellenőrzése.',
            'A fiatalok sporttevékenységének szervezése.',
            'A belső elhárítás: a lakosság és az ellenzék megfigyelése.',
            'A külkereskedelem irányítása.',
          ],
          answer: 2,
          explanation:
            'Az állambiztonság belső elhárítási szerve volt, besúgói révén figyelt meg embereket.',
        },
        {
          question: 'Melyik szervezet tartozott a fiatalok párt által irányított szervezetei közé?',
          options: ['MEFESZ', 'KISZ', 'ÁVH', 'KGST'],
          answer: 1,
          explanation:
            'A KISZ (Kommunista Ifjúsági Szövetség) volt a párt ifjúsági szervezete. A MEFESZ 1956-ban alakult, az ÁVH Rákosi-kori szerv, a KGST gazdasági szervezet.',
        },
        {
          question: 'Ki irányította hosszú ideig a kádári kultúrpolitikát?',
          options: ['Aczél György', 'Rákosi Mátyás', 'Nagy Imre', 'Gerő Ernő'],
          answer: 0,
          explanation: 'A „három T” gyakorlata Aczél György nevéhez fűződik.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kádár-rendszer', url: wiki('Kádár-rendszer') },
        { label: 'Wikipédia: Munkásőrség', url: wiki('Munkásőrség') },
        { label: 'Wikipédia: Aczél György', url: wiki('Aczél György') },
      ],
    },
    {
      id: 'teeszesites-tervgazdasag-eletmod',
      subject: 'tortenelem',
      unitId: 'tortenelem-kadar-rendszervaltas',
      title: 'Téeszesítés, tervgazdaság, életmód és az eladósodás',
      level: 'kozep',
      requirement: {
        kozep:
          'A pártállam, a téeszesítés, a tervgazdaság, a kultúrpolitika, az elnyomás változó formái – a kádári alku',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **téeszesítés** (mezőgazdasági kollektivizálás) **1959–1961** között fejeződött be; a parasztok többségét termelőszövetkezetekbe kényszerítették. Megmaradt a **háztáji gazdaság**.',
            'A gazdaságot **tervgazdaság** irányította, ötéves tervekkel. Jellemzője a **hiánygazdaság**: az áruk mindig hiányoztak valahonnan.',
            '**1968. január 1.**: bevezették az **új gazdasági mechanizmust**, ami csökkentette a központi tervutasításokat, és piaci elemeket vitt a gazdaságba.',
            'A **gulyáskommunizmus** a viszonylagos jólét kora: nőtt az életszínvonal, de **külföldi hitelből**. Az **adósságspirál** a rendszer végét siettette.',
            'A **maszek** (magánkisiparos) és a **háztáji** kiegészítő jövedelmet adott a családoknak.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'termelőszövetkezet (téesz)',
              text: 'A parasztok kényszerített közös gazdasága: a földet közösen művelték, a föld állami irányítás alá került.',
            },
            {
              term: 'háztáji',
              text: 'A téesztagnak engedélyezett kis földterület és kisállattartás a saját fogyasztásra és eladásra. Kiegészítette a jövedelmet és az élelmiszer-ellátást.',
            },
            {
              term: 'hiánygazdaság',
              text: 'A tervgazdasággal járó jelenség: a központi tervezés és az árak miatt rendszeresen hiányoztak bizonyos áruk, miközben másokból felesleg volt.',
            },
            {
              term: 'gulyáskommunizmus',
              text: 'A Kádár-rendszer jóléti jellegének gúnyos-népszerű neve: a magyar fogyasztás magasabb volt, mint a keleti tömb többi országában.',
            },
            {
              term: 'második gazdaság',
              text: 'A hivatalos gazdaságon kívüli, magánjellegű munka: kisvállalkozás, háztáji, maszek, mellékes munka.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A téeszesítés' },
        {
          kind: 'text',
          text: 'A Rákosi-korszak kollektivizálási kísérlete 1956-ban részben szétesett: sok paraszt kilépett a téeszből. A Kádár-rendszer **1958–1959-ben újra elindította** a téeszesítést, amely **1961-re lényegében lezárult**. A parasztok nagy részét **kényszerítették**: agitáció, nyomás, fenyegetés, adóterhek és más eszközök kényszerítették rá őket a belépésre. A hagyományos paraszti életforma összeomlott, sokan elköltöztek a városba, és ipari munkások lettek.',
        },
        {
          kind: 'text',
          text: 'A hatalom ezúttal **engedményeket** is tett: a téesztagok kis **háztáji** földet és állatot tarthattak, és a termelés jelentős részét a gyakorlatban a háztáji adta (főleg zöldség, gyümölcs, baromfi, sertés). Az 1960–70-es évek során a magyar mezőgazdaság sikeresebb lett, mint a térség több országában.',
        },
        { kind: 'heading', text: 'A tervgazdaság és az új gazdasági mechanizmus' },
        {
          kind: 'text',
          text: 'A Kádár-rendszer gazdaságát az **állami tulajdon** és a **központi tervezés** (ötéves tervek) irányította. A tervek termelési feladatokat írtak elő, nem a kereslethez igazodtak. Ez vezetett a **hiánygazdasághoz**: az üzletekben bizonyos áruk (például tartós fogyasztási cikkek, import termékek) folyamatosan hiányoztak, másokat feleslegben termeltek.',
        },
        {
          kind: 'text',
          text: '**1968. január 1-jén** bevezették az **új gazdasági mechanizmust**. Lényege: a központi **tervutasítások** csökkentek, a vállalatok nagyobb önállóságot kaptak, és a **piaci elemek** (ár, nyereség) szerepe nőtt, de a gazdaság alapvetően állami maradt. A reform eredményt hozott, de az 1970-es évek elején a pártvezetés egy része visszafogta, mert a piaci elemeket veszélyesnek tartotta a párt hatalmára.',
        },
        {
          kind: 'compare',
          title: 'Tervgazdaság és új gazdasági mechanizmus',
          columns: ['Hagyományos tervgazdaság', 'Új gazdasági mechanizmus (1968)'],
          rows: [
            {
              label: 'A vállalatok irányítása',
              cells: [
                'részletes központi tervutasítások',
                'kevesebb utasítás, nagyobb vállalati önállóság',
              ],
            },
            {
              label: 'Az ár szerepe',
              cells: ['hivatalosan megállapított', 'részben piaci jellegű'],
            },
            { label: 'Tulajdon', cells: ['állami', 'állami (a rendszer alapja nem változott)'] },
          ],
        },
        { kind: 'heading', text: 'Életmód: a „legvidámabb barakk”' },
        {
          kind: 'text',
          text: 'Az 1960–70-es években javult az életszínvonal. Terjedt a **televízió**, a hűtőszekrény és a mosógép, a városokban sorra épültek a panelházakból álló **lakótelepek**, egyre többen vásároltak autót (Trabant, Wartburg, Lada, Skoda, de gyakran évekig kellett várni rá). A családok **hétvégi telket**, nyaralót építettek, és a **belföldi turizmus** (Balaton) mellett megnyílt az út a szocialista országok felé, majd 1988-tól a „világútlevéllel” nyugatra is. Magyarországot ezért gyakran „a legvidámabb barakknak” hívták a keleti tömbben.',
        },
        {
          kind: 'text',
          text: 'Az egyéni boldogulás útja gyakran a **kiegészítő jövedelem** volt: a **maszek** kisiparosok és kiskereskedők, a háztáji gazdálkodás, a mellékes munka. A vállalati gazdasági munkaközösségek (vgmk) szintén ezt a rugalmasabb gazdálkodást szolgálták.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **második gazdaság** emelt szinten külön követelmény. Lényege, hogy a hivatalos munkahely mellett a családok a hivatalos gazdaságon kívül is teremtettek jövedelmet. Ez egyszerre csökkentette a feszültséget (többet lehetett keresni), és torzította a munkamorált: sokan a mellékes munkára tartogatták az erejüket.',
        },
        { kind: 'heading', text: 'Az eladósodás: az alku fenntarthatatlansága' },
        {
          kind: 'text',
          text: 'Az 1970-es évek közepén a világgazdaság átalakult: az **olajárrobbanás** (1973) megdrágította az energiát és a nyersanyagot, amit Magyarország a Szovjetuniótól és a világpiacról vásárolt. A vezetés a **jólétet külföldi hitelből** tartotta fenn, hogy ne kelljen az életszínvonalat csökkenteni. Így nőtt az **adósság**: kamatot kellett fizetni, amihez újabb hitelt kellett felvenni, ez az **adósságspirál**. Az 1980-as évek végére az ország adóssága nagyon magas, mintegy húszmilliárd dollár körüli lett. 1982-ben Magyarország belépett a Nemzetközi Valutaalapba (IMF) és a Világbankba is. Az életszínvonal stagnálása, majd csökkenése megrendítette a kádári alkut.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1959–1961', text: 'A téeszesítés befejeződik.' },
            { date: '1968', text: 'Az új gazdasági mechanizmus bevezetése.' },
            { date: '1973', text: 'Olajárrobbanás, a nyugati hitelfelvétel erősödik.' },
            { date: '1982', text: 'Csatlakozás az IMF-hez és a Világbankhoz.' },
            {
              date: '1980-as évek vége',
              text: 'Az adósság és az infláció a rendszer válságát jelzi.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás vagy statisztika (adósság-grafikon, fogyasztási adatok): mit mutat a Kádár-korszak gazdaságáról?',
            'Fogalmak: téeszesítés, háztáji, hiánygazdaság, adósságspirál, gulyáskommunizmus.',
            'Rövid kifejtés: miért kezdett válságba süllyedni a rendszer az 1980-as években?',
            'Összehasonlítás: a Rákosi-korszak és a Kádár-korszak gazdaságpolitikája.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy az új gazdasági mechanizmus magántulajdont vezetett be vagy megszüntette a tervgazdaságot. A gazdaság állami maradt, csak a vállalatok kaptak nagyobb önállóságot és a piaci elemek szerepe nőtt.',
        },
        {
          kind: 'tip',
          text: 'Válaszd szét a jelenségeket: a téeszesítés mezőgazdasági kényszer volt, a tervgazdaság az ipar és a teljes gazdaság irányítása, az életmód a következmény. A „gulyáskommunizmus” sikere (fogyasztás) és ára (adósság) együtt adja a teljes képet.',
        },
      ],
      topicMatch: [
        'téeszesítés',
        'tervgazdaság',
        'új gazdasági mechanizmus',
        'háztáji gazdaság',
        'népessége 1945 és 1980',
        '=szocializmus',
      ],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor fejeződött be lényegében a téeszesítés?',
          options: ['1948', '1956', '1961', '1968'],
          answer: 2,
          explanation:
            'A Kádár-rendszer 1958–1959-ben újraindította, 1961-re lényegében befejezte. 1948 a Rákosi-korszak kezdete, 1968 az új gazdasági mechanizmus éve.',
        },
        {
          question: 'Mi volt az új gazdasági mechanizmus lényege?',
          options: [
            'A magántulajdon bevezetése.',
            'A központi tervutasítások csökkentése, nagyobb vállalati önállóság.',
            'A téeszek megszüntetése.',
            'A KGST-ből való kilépés.',
          ],
          answer: 1,
          explanation:
            'A reform a tervutasításokat csökkentette és piaci elemeket vitt a gazdaságba, de az állami tulajdon megmaradt.',
        },
        {
          question: 'Mit jelent a hiánygazdaság?',
          options: [
            'Hogy mindenből túl sok volt.',
            'A tervgazdaság jelensége: bizonyos áruk rendszeresen hiányoztak.',
            'A háztáji gazdaság másik neve.',
            'A nyugati import tiltását.',
          ],
          answer: 1,
          explanation:
            'A központi tervezés miatt a kereslet és a kínálat nem találkozott, ezért egyes cikkekből folyamatosan hiány volt.',
        },
        {
          question: 'Mi okozta főként az adósságspirált az 1970–80-as években?',
          options: [
            'A jólét külföldi hitelből való fenntartása, az olajárrobbanás után.',
            'Az 1956-os forradalom kárainak megfizetése.',
            'A téeszek megszüntetése.',
            'A szovjet hadsereg fenntartása.',
          ],
          answer: 0,
          explanation:
            'A vezetés a hitelekkel akarta elkerülni az életszínvonal csökkenését, de a kamatok miatt az adósság egyre nőtt.',
        },
        {
          question: 'Mit jelent a „második gazdaság”?',
          options: [
            'A hivatalos gazdaságon kívüli magán jellegű munka és jövedelemszerzés.',
            'A nyugati államokkal folytatott kereskedelmet.',
            'A tervgazdaság másik neve.',
            'A szovjet segélyekből élő gazdaságot.',
          ],
          answer: 0,
          explanation:
            'A háztáji, a maszek munka és a mellékes tevékenységek alkották a hivatalos szektor mellett működő második gazdaságot.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Új gazdasági mechanizmus', url: wiki('Új gazdasági mechanizmus') },
        { label: 'Wikipédia: Téeszesítés', url: wiki('Téeszesítés') },
        { label: 'Wikipédia: Gulyáskommunizmus', url: wiki('Gulyáskommunizmus') },
      ],
    },
    {
      id: 'partallam-valsaga-ellenzek-1988',
      subject: 'tortenelem',
      unitId: 'tortenelem-kadar-rendszervaltas',
      title: 'A pártállam válsága és az ellenzék megszerveződése 1988-ig',
      level: 'emelt',
      requirement: {
        emelt: 'A pártállam válsága, az ellenzék megszerveződése és irányzatai 1988-ig',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az 1980-as évek gazdasági nehézségei (**eladósodás**, infláció, az életszínvonal romlása) megingatták a **kádári alkut**.',
            'A **Gorbacsov**-féle szovjet reformok (**peresztrojka**, **glasznoszty**) csökkentették a külső nyomást.',
            'Az ellenzék két fő irányzata: a **demokratikus ellenzék** (városi, liberális-baloldali értelmiség) és a **népi-nemzeti ellenzék** (írók, a nemzeti sorskérdések képviselői).',
            'Fontos fordulópontok: **1985 monori találkozó**, **1987 lakiteleki találkozó** (az MDF előzménye), **1988 márciusában Fidesz**, **novemberében SZDSZ**.',
            '**1988 májusában** a pártvezetés leváltotta Kádár Jánost; ezzel a reformerek kerültek előtérbe.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'peresztrojka',
              text: 'Átalakítás: Gorbacsov szovjet reformprogramja a gazdaság és a politika megújítására.',
            },
            {
              term: 'glasznoszty',
              text: 'Nyíltság: a szovjet rendszer nyilvánosságának, a szabad vitának a bővítése.',
            },
            {
              term: 'szamizdat',
              text: 'A cenzúrát kikerülő, magánúton sokszorosított és terjesztett kiadvány.',
            },
            {
              term: 'demokratikus ellenzék',
              text: 'Az 1970-es években alakult értelmiségi kör (például Kis János, Bence György, Haraszti Miklós), amely az emberi jogokat és a jogállamot követelte.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A válság okai' },
        {
          kind: 'text',
          text: 'Az 1980-as években a magyar gazdaság egyre nehezebben tartotta fenn a kádári alkut. Nőtt az **adósság**, nőtt az **infláció**, és a vásárlóerő stagnált vagy csökkent. A kormány 1988-ban **új adórendszert** (általános forgalmi adó, személyi jövedelemadó) vezetett be, ami sok embert érzékenyen érintett. Közben a keleti tömb is változott: a Szovjetunióban **Gorbacsov** hatalomra jutásával (1985) a **peresztrojka** és a **glasznoszty** új légkört teremtett, és a szovjet vezetés már nem akarta mindenáron fenntartani a szövetségesek diktatúráit. Ez felgyorsította a magyarországi folyamatokat.',
        },
        { kind: 'heading', text: 'Az ellenzék két irányzata' },
        {
          kind: 'compare',
          title: 'Demokratikus ellenzék és népi-nemzeti ellenzék',
          columns: ['Demokratikus ellenzék', 'Népi-nemzeti ellenzék'],
          rows: [
            {
              label: 'Társadalmi bázis',
              cells: ['városi értelmiség', 'írók, a népi hagyomány követői'],
            },
            {
              label: 'Fő témák',
              cells: [
                'emberi jogok, jogállam, szabad sajtó',
                'a magyarság sorskérdései, határon túli magyarok, népességfogyás',
              ],
            },
            {
              label: 'Kiadványok, szervezetek',
              cells: ['szamizdat (Beszélő, 1981 körül), SZETA', 'irodalmi folyóiratok, találkozók'],
            },
            { label: 'Későbbi pártok', cells: ['SZDSZ', 'MDF'] },
          ],
        },
        {
          kind: 'text',
          text: 'A **demokratikus ellenzék** az 1970-es évek végén szerveződött. Tagjai (például Kis János, Bence György, Haraszti Miklós) a hatalom elleni nyílt fellépés helyett a jogok betartását követelték. Segélyezték az üldözötteket (**SZETA**, a Szegényeket Támogató Alap, 1979), szamizdat-kiadványokat készítettek (**Beszélő**, 1981 körül). A hatalom rendőri eszközökkel zaklatta őket, de nem tudta teljesen elhallgattatni őket.',
        },
        {
          kind: 'text',
          text: 'A **népi-nemzeti ellenzék** írók és értelmiségiek köre volt (Csoóri Sándor és mások), akik a nemzeti kérdésekben követeltek változást. **1985-ben Monoron** a két irányzat képviselői először ültek egy asztalhoz. **1987. szeptember 27-én Lakiteleken** találkoztak az ellenzékiek, itt kezdődött a **Magyar Demokrata Fórum (MDF)** szervezése.',
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1979 körül',
              text: 'A demokratikus ellenzék első szervezett kezdeményezése: a SZETA.',
            },
            { date: '1981 körül', text: 'Megjelenik a Beszélő szamizdat folyóirat.' },
            {
              date: '1984',
              text: 'A Duna Kör megalakulása: a bős–nagymarosi vízlépcső elleni környezetvédelmi mozgalom indul.',
            },
            {
              date: '1985',
              text: 'Monori találkozó: a népi és a demokratikus ellenzék képviselői.',
            },
            { date: '1987', text: 'Lakiteleki találkozó, az MDF létrejötte.' },
            { date: '1988. március', text: 'Megalakul a Fidesz (Fiatal Demokraták Szövetsége).' },
            { date: '1988. május', text: 'Kádár Jánost leváltják a párt éléről.' },
            {
              date: '1988. november',
              text: 'Megalakul az SZDSZ. Németh Miklós lesz a miniszterelnök.',
            },
          ],
        },
        { kind: 'heading', text: 'A pártvezetés megosztottsága' },
        {
          kind: 'text',
          text: '**1988 májusában** az MSZMP országos pártértekezlete leváltotta Kádár Jánost a főtitkári posztról (**Grósz Károly** követte). A párton belül megerősödtek a **reformerek**, köztük **Pozsgay Imre** és **Nyers Rezső**, akik a rendszer megújítását, részleges piacgazdaságot és a többpártrendszer felé nyitást is elképzelhetőnek tartották. 1988 végére a hatalom legitimitása megrendült, szabaddá vált az út a politikai átalakulás felé.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (ellenzéki nyilatkozat, lakiteleki felhívás, szamizdat részlet): melyik irányzathoz tartozik, milyen követeléseket fogalmaz meg?',
            'Emelt esszé: mi vezetett a pártállam válságához, és hogyan szerveződött meg az ellenzék 1988-ig?',
            'Kronológiai sor: Monor (1985), Lakitelek (1987), a Fidesz és az SZDSZ alapítása (1988).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni a két ellenzéki irányzatot, vagy azt írni, hogy 1988-ig szabadon működő pártok léteztek. 1988 előtt csak a kormányzó párt működhetett legálisan, az ellenzék szervezetei, körei félig vagy teljesen illegálisan működtek. A pártok alakulása 1988 végén indult.',
        },
        {
          kind: 'tip',
          text: 'Esszéhez használj három okcsoportot: gazdasági (adósság, infláció), külpolitikai (Gorbacsov, szovjet reformok) és belpolitikai (ellenzék, pártvezetés megosztottsága). Mindegyikhez adj egy konkrét tényt vagy évszámot.',
        },
      ],
      topicMatch: ['kádár-korszak'],
      cards: { subject: 'tortenelem', deck: 'evszamok', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik két irányzat alkotta a Kádár-rendszer ellenzékét az 1980-as években?',
          options: [
            'A kisgazda és a szociáldemokrata ellenzék.',
            'A demokratikus és a népi-nemzeti ellenzék.',
            'A munkásőrség és a KISZ.',
            'A legitimisták és a szabad királyválasztók.',
          ],
          answer: 1,
          explanation:
            'A városi értelmiségi demokratikus ellenzék és az írók köré szerveződő népi-nemzeti ellenzék.',
        },
        {
          question: 'Mi történt Lakiteleken 1987-ben?',
          options: [
            'Kimondták a Varsói Szerződésből való kilépést.',
            'Az ellenzékiek találkozója, ahol az MDF szervezése megindult.',
            'Kikiáltották a harmadik köztársaságot.',
            'Aláírták a kerekasztal-megállapodást.',
          ],
          answer: 1,
          explanation:
            '1987. szeptember 27-én a népi-nemzeti ellenzék Lakiteleken találkozott, ez az MDF előzménye lett.',
        },
        {
          question: 'Mit jelent a szamizdat?',
          options: [
            'A hivatalos állami kiadványt.',
            'A cenzúrát kikerülő, magánúton terjesztett kiadványt.',
            'A párt titkos határozatát.',
            'Egy szovjet gazdasági tervet.',
          ],
          answer: 1,
          explanation:
            'A szamizdat a hatalom engedélye nélkül, saját szervezésben sokszorosított írás.',
        },
        {
          question: 'Melyik évben váltották le Kádár Jánost a párt éléről?',
          options: ['1985', '1987', '1988', '1989'],
          answer: 2,
          explanation: '1988 májusában, az országos pártértekezleten; Grósz Károly követte.',
        },
        {
          question: 'Melyik szovjet vezetőhöz kötődik a peresztrojka és a glasznoszty?',
          options: ['Brezsnyev', 'Hruscsov', 'Gorbacsov', 'Sztálin'],
          answer: 2,
          explanation:
            'Gorbacsov 1985-ben lett a szovjet vezető, és az átalakítás (peresztrojka) és a nyíltság (glasznoszty) programját hirdette meg.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Demokratikus ellenzék', url: wiki('Demokratikus ellenzék') },
        { label: 'Wikipédia: Lakiteleki találkozó', url: wiki('Lakiteleki találkozó') },
        { label: 'Wikipédia: Monori találkozó', url: wiki('Monori találkozó') },
      ],
    },
    {
      id: 'rendszervaltoztatas-1989-1991',
      subject: 'tortenelem',
      unitId: 'tortenelem-kadar-rendszervaltas',
      title: 'A rendszerváltoztatás 1989–1991',
      level: 'kozep',
      requirement: { kozep: 'A rendszerváltoztatás (1989–1991)' },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A rendszerváltoztatás **békés, tárgyalásos átmenet** volt a pártállamból a **többpártrendszerű parlamentáris demokráciába**.',
            '**1989**: az ellenzéki pártok megalakulása, a **nemzeti kerekasztal** tárgyalásai, **Nagy Imre és mártírtársainak újratemetése**, az alkotmány módosítása és a **harmadik köztársaság kikiáltása** (október).',
            '**1990**: az első szabad **országgyűlési választások** (március–április); **Antall József** kormánya, **Göncz Árpád** köztársasági elnök; **önkormányzati választások**.',
            '**1991**: a **szovjet csapatok kivonása**; a Varsói Szerződés és a KGST megszűnése.',
            'Az új rendszer alapjai: **jogállam**, **többpártrendszer**, **Alkotmánybíróság**, **sarkalatos törvények**, **kárpótlás**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nemzeti kerekasztal',
              text: 'A kormányzó párt, az ellenzék és a társadalmi szervezetek 1989 nyarán folytatott tárgyalásai az átmenet szabályairól.',
            },
            {
              term: 'sarkalatos törvények',
              text: 'Különösen fontos törvények, amelyeknek elfogadásához és módosításához az országgyűlési képviselők kétharmadának szavazata kell.',
            },
            {
              term: 'Alkotmánybíróság',
              text: 'A törvények alkotmányosságát vizsgáló független testület: a jogállam egyik alapintézménye.',
            },
            {
              term: 'kárpótlás',
              text: 'A kommunista korszak jogsértései (például az államosítás) miatt okozott károk részleges anyagi jóvátétele.',
            },
            {
              term: 'Ellenzéki Kerekasztal',
              text: 'Az ellenzéki pártok és szervezetek közös fóruma 1989 márciusától; ez tárgyalt a kormányzó párttal.',
              emelt: true,
            },
            {
              term: '„négy igenes” népszavazás',
              text: '1989. november 26-án tartott népszavazás négy kérdésben (az elnökválasztás időpontja, a pártok kitiltása a munkahelyekről, az MSZMP vagyonáról való elszámolás, a munkásőrség feloszlatása); a kérdéseket az SZDSZ és a Fidesz kezdeményezte.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az átmenet 1989-ben' },
        {
          kind: 'text',
          text: '1989 elején a pártvezetésen belül a reformerek (**Pozsgay Imre**, **Nyers Rezső**, **Németh Miklós** kormánya) engedményeket tettek. Elfogadták a **társasági és egyesülési törvényt**, ami lehetővé tette a pártok megalakulását. Megalakultak vagy újjáéledtek az **új pártok**: **MDF**, **SZDSZ**, **FIDESZ**, **FKgP** (Független Kisgazdapárt), **KDNP** (Kereszténydemokrata Néppárt). Az MSZMP 1989 októberében feloszlott, és **MSZP** (Magyar Szocialista Párt) néven újjászerveződött.',
        },
        {
          kind: 'text',
          text: '1989 tavaszán megkezdődött a határzár (a „vasfüggöny”) lebontása az osztrák határon. **1989 nyarán** a magyar kormány tárgyalt az NDK-s menekültekkel, szeptemberben megnyitotta a határt számukra Ausztria felé. Ez a lépés is szerepet játszott a kelet-európai rendszerek bukásában.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A határnyitás előzménye a **páneurópai piknik** volt 1989. augusztus 19-én Sopron mellett: a rendezvény idején rövid időre megnyílt a határ, és több száz keletnémet állampolgár nyugatra távozott. **Pozsgay Imre** 1989 januárjában az 1956-os eseményeket „népfelkelésnek” nevezte, ami addig tabuszerű kérdés volt.',
        },
        { kind: 'heading', text: 'A nemzeti kerekasztal' },
        {
          kind: 'text',
          text: '**1989 nyarán** (június 13-tól) a kormányzó MSZMP, az ellenzéki pártok és a társadalmi szervezetek **nemzeti kerekasztal** néven tárgyaltak az átmenet szabályairól: a választási törvényről, a pártokról, az alkotmány módosításáról. A tárgyalások 1989. szeptember 18-án zárultak megállapodással, de az **SZDSZ és a Fidesz** nem írta alá.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az ellenzék közös fóruma az **Ellenzéki Kerekasztal** volt (1989 márciusától). Az SZDSZ és a Fidesz kezdeményezésére **1989. november 26-án** népszavazást tartottak négy kérdésben: az elnökválasztás időpontja, a pártok kitiltása a munkahelyekről, az MSZMP vagyonáról való elszámolás és a munkásőrség feloszlatása. Az első kérdésben (az elnököt a parlamenti választás után válasszák) az igen szavazatok aránya nagyon szoros volt, mintegy 6000 szavazat döntött. Ez határozta meg a következő menetrendet: előbb a parlamenti választás, utána az elnök megválasztása.',
        },
        { kind: 'heading', text: 'Szimbolikus események 1989-ben' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1989. január',
              text: 'Az egyesülési és gyülekezési jogot kimondó törvény; szabadabb politikai élet.',
            },
            {
              date: '1989. tavasz',
              text: 'Megkezdődik a határzár bontása az osztrák határon; az ellenzék közös fórumot hoz létre.',
            },
            {
              date: '1989. nyár',
              text: 'Nagy Imre és mártírtársainak újratemetése (június); tárgyalások a nemzeti kerekasztalnál.',
            },
            {
              date: '1989. ősz',
              text: 'Szeptemberben a határnyitás az NDK-sok előtt; októberben az MSZMP megszűnik, MSZP alakul; október végén a harmadik köztársaság kikiáltása.',
            },
            { date: '1989. november', text: 'Népszavazás a „négy kérdésről”.', emelt: true },
          ],
        },
        {
          kind: 'text',
          text: '**1989 júniusában** Budapesten, a Hősök terén ravatalozták fel és temették újra **Nagy Imrét és mártírtársait**. Ez az esemény a rendszer morális összeomlását jelezte, és százezrek vettek rajta részt. **1989 októberében** az országgyűlés alapvetően módosította az alkotmányt: kimondta a **jogállamot**, a **többpártrendszert** és a hatalommegosztást, létrehozta az **Alkotmánybíróságot**, és a **Magyar Népköztársaság** helyett **Magyar Köztársaság** lett az ország neve. A köztársaságot október 23-án, az 1956-os forradalom évfordulóján hirdették ki, ez a **harmadik köztársaság**. A munkásőrséget feloszlatták.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A köztársaságot **1989. október 23-án** **Szűrös Mátyás**, az országgyűlés elnöke és ideiglenes köztársasági elnök hirdette ki a Kossuth téren. A nap pontos dátuma az emelt szintű követelménylistán szerepel; középszinten elég az, hogy 1989 októberében, az 1956-os forradalom évfordulóján történt.',
        },
        { kind: 'heading', text: 'A választások és az új rendszer 1990–1991-ben' },
        {
          kind: 'text',
          text: '**1990 márciusában és áprilisában** tartották az első szabad **országgyűlési választást** (két fordulóban). Az **MDF** nyerte, második az **SZDSZ** lett, a parlamentbe került az FKgP, az MSZP, a Fidesz és a KDNP is. **Antall József** (MDF) alakított koalíciós kormányt (MDF, FKgP, KDNP). Az MDF és az SZDSZ megállapodása után a parlament **Göncz Árpádot** (SZDSZ) választotta köztársasági elnökké (1990. augusztus). 1990 őszén **önkormányzati választásokat** is tartottak. Az alkotmány módosított változata erős miniszterelnöki rendszert hozott létre, és a **sarkalatos törvényekről** kétharmados szavazás döntött.',
        },
        {
          kind: 'text',
          text: '**1991-ben** a **szovjet csapatok elhagyták Magyarországot** (az utolsó szovjet katona 1991 nyarán távozott), a **Varsói Szerződés** és a **KGST** felbomlott. Elfogadták az első **kárpótlási törvényeket**. Magyarország a Nyugat felé fordult: 1991-ben társulási szerződést kötött az Európai Közösségekkel, és megkezdődött a közép-európai együttműködés (visegrádi együttműködés).',
        },
        {
          kind: 'keypoints',
          title: 'Mi tette a magyar átmenetet különlegessé?',
          items: [
            '**Tárgyalásos, békés** volt: nem volt forradalmi erőszak.',
            'A kormányzó párt és az ellenzék **egyezkedett**, a szovjet vezetés nem avatkozott be.',
            'Az új rendszer **jogállami keretei** (alkotmánybíróság, sarkalatos törvények) gyorsan kiépültek.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás (a kerekasztal megállapodása, a köztársaság kikiáltása, választási plakát): melyik szakaszhoz tartozik, mit mutat az átmenet jellegéről?',
            'Kronológia: Nagy Imre újratemetése, a köztársaság kikiáltása, az első szabad választás, a szovjet csapatok kivonása.',
            'Kifejtés: hogyan zajlott a rendszerváltoztatás Magyarországon, és mi volt a jellege?',
            'Fogalmak: jogállam, többpártrendszer, Alkotmánybíróság, kárpótlás, sarkalatos törvény.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni az évszámokat. Nagy Imre újratemetése 1989 (nyár), a köztársaság kikiáltása 1989 (október), az első szabad választás 1990, a szovjet csapatok kivonása 1991. A harmadik köztársaság 1989-ben jött létre, nem 1990-ben.',
        },
        {
          kind: 'tip',
          text: 'A rendszerváltoztatás leírásához használj három szálat: 1. politikai (pártok, kerekasztal, választás), 2. jogi (alkotmánymódosítás, jogállam), 3. külpolitikai (szovjet kivonulás, nyugati orientáció). Mindhez mondj legalább egy évszámot.',
        },
      ],
      topicMatch: ['magyarország 1989–1990', '=rendszerváltoztatás'],
      cards: { subject: 'tortenelem', deck: 'evszamok', era: 'jelenkor20' },
      quiz: [
        {
          question:
            'Melyik évben tartották az első szabad országgyűlési választást a rendszerváltoztatás után?',
          options: ['1988', '1989', '1990', '1991'],
          answer: 2,
          explanation:
            '1990 márciusában és áprilisában. 1989-ben a nemzeti kerekasztal tárgyalt és kikiáltották a köztársaságot, 1991-ben a szovjet csapatok távoztak.',
        },
        {
          question: 'Ki lett az első szabadon választott miniszterelnök 1990-ben?',
          options: ['Antall József', 'Horn Gyula', 'Németh Miklós', 'Göncz Árpád'],
          answer: 0,
          explanation:
            'Antall József (MDF) alakított koalíciós kormányt. Göncz Árpád köztársasági elnök lett, Németh Miklós az utolsó kommunista kormány vezetője volt, Horn Gyula 1994-ben lett miniszterelnök.',
        },
        {
          question: 'Mit jelentett a nemzeti kerekasztal?',
          options: [
            'A kormány és a szovjet vezetés tárgyalását.',
            'A kormányzó párt, az ellenzék és a társadalmi szervezetek tárgyalását az átmenetről.',
            'Az ellenzék titkos gyűlését.',
            'A parlament első ülését.',
          ],
          answer: 1,
          explanation:
            '1989 nyarán a kormányzó MSZMP, az ellenzéki pártok és a társadalmi szervezetek tárgyaltak az átmenet szabályairól.',
        },
        {
          question: 'Mikor jött létre a harmadik köztársaság?',
          options: ['1989 januárjában', '1990 tavaszán', '1991 nyarán', '1989 októberében'],
          answer: 3,
          explanation:
            '1989 októberében, az alkotmány módosításával. A parlamenti választás csak 1990-ben volt.',
        },
        {
          question: 'Mi volt a „négy igenes” népszavazás egyik kérdése?',
          options: [
            'A munkásőrség feloszlatása',
            'A Varsói Szerződésből való kilépés',
            'A kisgazdák visszatérése',
            'A forint bevezetése',
          ],
          answer: 0,
          explanation:
            'A négy kérdés: az elnökválasztás időpontja, a pártok kitiltása a munkahelyekről, az MSZMP vagyonáról való elszámolás, a munkásőrség feloszlatása.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Rendszerváltoztatás Magyarországon',
          url: wiki('Rendszerváltoztatás Magyarországon'),
        },
        { label: 'Wikipédia: Nemzeti Kerekasztal', url: wiki('Nemzeti Kerekasztal') },
        { label: 'Wikipédia: Nagy Imre újratemetése', url: wiki('Nagy Imre újratemetése') },
      ],
    },
    {
      id: 'piacgazdasagra-valtas-privatizacio',
      subject: 'tortenelem',
      unitId: 'tortenelem-kadar-rendszervaltas',
      title: 'Az áttérés a piacgazdaságra: privatizáció, külföldi tőke, külkereskedelem',
      level: 'emelt',
      requirement: {
        emelt:
          'A piacgazdaságra való áttérés, gazdasági szerkezetváltás, privatizáció, a külföldi tőke szerepe, a külkereskedelem átalakulása',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A rendszerváltoztatás gazdasági oldala: **tervgazdaságból piacgazdaság**, állami tulajdonból **vegyes, magántulajdonú** gazdaság.',
            'Az **átalakulási válság**: az ipar és a mezőgazdaság összeomlása, a keleti piacok elvesztése, **munkanélküliség**, infláció.',
            'A **privatizáció** állami vállalatok átadása magánkézbe; **spontán privatizáció** (1988–90 között) és a tervezett, állami irányítású privatizáció.',
            'A **külföldi tőke** szerepe meghatározó lett: tőkebefektetések, új üzemek, a nagy állami cégek eladása.',
            'A **külkereskedelem** iránya a keleti (KGST) piacokról a nyugati országok felé fordult.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'privatizáció',
              text: 'Állami tulajdon átadása magánszemélyeknek vagy vállalatoknak (eladás, részvényvásárlás, kárpótlás).',
            },
            {
              term: 'spontán privatizáció',
              text: 'A rendszerváltoztatás körüli években, állami ellenőrzés nélkül lezajlott vagyonátalakítás: a vállalati vezetők saját cégeikkel szerződtek, vagy társaságokká alakították az állami vállalatokat.',
            },
            {
              term: 'szerkezetváltás',
              text: 'A gazdaság szerkezetének átalakulása: a nehézipar és a bányászat visszaszorul, a szolgáltatások és az új iparágak erősödnek.',
            },
            {
              term: 'működő tőke',
              text: 'Külföldi befektetés, amely új üzemet, vállalatot vagy a már meglévő vállalat tulajdonjogát jelenti.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért volt szükség átalakulásra?' },
        {
          kind: 'text',
          text: 'A tervgazdaságot a rendszerváltoztatás után nem lehetett megőrizni: az állami vállalatok nagy része nem volt versenyképes, az adósság magas volt, és a keleti tömb piacai összeomlottak. **1991-től** a KGST-országok között megszűnt a korábbi elszámolási rendszer, az addigi legfontosabb piac szinte egyik napról a másikra elveszett. Az új kormányok a **piacgazdaság** kiépítésére törekedtek: szabad árak, a külkereskedelem liberalizálása, versenyjog, bankrendszer-átalakítás, tőzsde.',
        },
        { kind: 'heading', text: 'Az átalakulási válság' },
        {
          kind: 'text',
          text: 'A gazdasági szerkezetváltás **súlyos költségekkel** járt. Az 1990-es évek elején a gazdaság teljesítménye jelentősen visszaesett, a nehézipar és a bányászat sok üzeme bezárt, a mezőgazdasági termelés is visszaesett. Megjelent a **munkanélküliség**, amelyet addig hivatalosan nem ismertek: a mértéke 1993 elejére tíz százalék fölé emelkedett. Magas volt az infláció, sokan elvesztették a megszokott biztonságot. A kárpótlás és a téeszek átalakítása (a termelőszövetkezeti vagyon felosztása) átalakította a földtulajdont és a falusi életet.',
        },
        { kind: 'heading', text: 'Privatizáció' },
        {
          kind: 'text',
          text: 'A privatizáció két fő útja volt. A **spontán privatizáció** az 1980-as évek végén indult, miután az **1988-as társasági törvény** lehetővé tette gazdasági társaságok alapítását. Az állami vállalatok vezetői gyakran részvénytársaságokká alakították cégeiket, vagy a vagyon jobb részét saját érdekeltségeikbe vitték át. Ez a folyamat sok vitát váltott ki, mert az állami ellenőrzés gyenge volt, és a vagyon értékének felmérése bizonytalan.',
        },
        {
          kind: 'text',
          text: 'Ezért 1990-től **állami irányítású privatizáció** indult: az **Állami Vagyonügynökség (ÁVÜ)**, később az **Állami Privatizációs és Vagyonkezelő Rt. (ÁPV Rt.)** értékesítette az állami cégeket pályázaton, aukción vagy részvényeladással. A legnagyobb vállalatok jelentős részét (bankok, energiaszolgáltatók, távközlés) külföldi befektetőknek adták el. Mellette a **kárpótlás** és a **kisprivatizáció** (üzletek, kisebb vállalkozások) a hazai tulajdonosi réteg kialakítását segítette.',
        },
        {
          kind: 'compare',
          title: 'A privatizáció két útja',
          columns: ['Spontán privatizáció', 'Állami irányítású privatizáció'],
          rows: [
            { label: 'Időszak', cells: ['1988–1990 körül', '1990-től, ÁVÜ, később ÁPV Rt.'] },
            {
              label: 'Ki irányította?',
              cells: ['a vállalati vezetők', 'az állam (pályázat, aukció)'],
            },
            {
              label: 'Kritika',
              cells: [
                'átláthatatlan, a vagyon alulértékelése',
                'lassú, a nagy cégek külföldi kézbe kerültek',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A külföldi tőke szerepe' },
        {
          kind: 'text',
          text: 'Magyarország az 1990-es években a térség egyik fő **külföldi működőtőke-fogadója** volt. A külföldi befektetők új gyárakat építettek (például a **Suzuki** esztergomi üzeme 1992-től, az **Audi** győri gyára 1993-ban alakult), és megvették a magyar vállalatokat. Ez **új technológiát, piacot és munkahelyeket** hozott, de gazdasági függést és a jövedelmek (profit) egy részének kiáramlását is jelentette. Az autóipar, az elektronika és a szolgáltató ágazatok jelentősen kötődtek a külföldi tőkéhez.',
        },
        { kind: 'heading', text: 'A külkereskedelem átalakulása' },
        {
          kind: 'text',
          text: 'A KGST felbomlása után a külkereskedelem iránya megváltozott: a **keleti** (szovjet, KGST) piacok szerepe csökkent, a **nyugati** (Németország, Ausztria, az Európai Közösség) országoké nőtt. A külkereskedelmet liberalizálták (az importot és exportot állami monopólium helyett vállalatok bonyolították). **1991-ben** Magyarország társulási megállapodást kötött az Európai Közösségekkel, ami az uniós csatlakozás felé vezető út első lépése volt.',
        },
        {
          kind: 'keypoints',
          title: 'A gazdasági átmenet összegzése',
          items: [
            '**Eszközök**: árliberalizáció, privatizáció, külkereskedelmi nyitás, bankrendszer átalakítása.',
            '**Költségek**: termelésesés, munkanélküliség, infláció, társadalmi különbségek.',
            '**Eredmények**: piacgazdaság, külföldi tőke, nyugati orientáció, az EU-csatlakozás előkészítése.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Statisztikai táblázat vagy grafikon (GDP, munkanélküliség, külkereskedelmi irányok): mit mutat az átmenet gazdasági hatásairól?',
            'Emelt esszé: milyen eszközökkel és milyen következményekkel váltott Magyarország tervgazdaságról piacgazdaságra?',
            'Fogalmak: privatizáció, spontán privatizáció, szerkezetváltás, külföldi működőtőke.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy az áttérés kizárólag előnyökkel járt, vagy hogy mindenki vesztes lett. A helyes válasz mérlegel: új lehetőségek (külföldi tőke, nyugati piacok) és súlyos költségek (munkanélküliség, ipari összeomlás). A spontán és az állami privatizációt se keverd össze.',
        },
        {
          kind: 'tip',
          text: 'Esszéhez használd az „ok, folyamat, következmény” szerkezetet: ok (KGST-összeomlás, adósság, alacsony hatékonyság), folyamat (liberalizáció, privatizáció, külföldi tőke), következmény (átalakulási válság, nyugati orientáció). Adj legalább két konkrét példát vagy adatot.',
        },
      ],
      topicMatch: ['gazdasági rendszerváltoztatás'],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mit jelent a spontán privatizáció?',
          options: [
            'Az állam által irányított, pályázatos vállalateladást.',
            'Az állami kontroll nélküli vagyonátalakítás az átmenet idején, főleg a vállalati vezetők révén.',
            'A téeszek felosztását.',
            'A külföldi tőke kitiltását.',
          ],
          answer: 1,
          explanation:
            'A spontán privatizáció az 1980-as évek végén indult, állami ellenőrzés nélkül, a vállalati vezetők kezdeményezésére.',
        },
        {
          question:
            'Melyik szervezet irányította a tervezett állami privatizációt az 1990-es évek elején?',
          options: ['MSZMP', 'KISZ', 'Állami Vagyonügynökség (ÁVÜ)', 'KGST'],
          answer: 2,
          explanation:
            'Az Állami Vagyonügynökség (1990) irányította az állami vagyon értékesítését, később az ÁPV Rt.',
        },
        {
          question: 'Melyik irányba fordult a magyar külkereskedelem a KGST felbomlása után?',
          options: [
            'Keletre, a Szovjetunió felé.',
            'Nyugatra, Németország, Ausztria és az Európai Közösség felé.',
            'Csak Afrika felé.',
            'Teljesen megszűnt.',
          ],
          answer: 1,
          explanation:
            'A keleti piacok összeomlottak, a kereskedelem fő iránya a nyugat-európai országok lett.',
        },
        {
          question: 'Melyik a rendszerváltoztatás gazdasági hátrányos következménye?',
          options: [
            'Munkanélküliség megjelenése',
            'A külföldi tőke kitiltása',
            'A tervgazdaság erősödése',
            'A KGST-piacok bővülése',
          ],
          answer: 0,
          explanation:
            'A szerkezetváltás üzemek bezárásával járt, és megjelent a korábban hivatalosan nem ismert munkanélküliség.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Privatizáció Magyarországon',
          url: wiki('Privatizáció Magyarországon'),
        },
        { label: 'Wikipédia: Állami Vagyonügynökség', url: wiki('Állami Vagyonügynökség') },
        {
          label: 'Wikipédia: Magyarország gazdaságtörténete',
          url: wiki('Magyarország gazdaságtörténete'),
        },
      ],
    },
  ],
};

export default unit;
