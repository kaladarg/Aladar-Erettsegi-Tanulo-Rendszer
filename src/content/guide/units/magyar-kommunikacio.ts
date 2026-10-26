import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv, 1. témakör (Kommunikáció) és 8. témakör (Digitális kommunikáció). */
const unit: GuideUnit = {
  id: 'kommunikacio',
  subject: 'magyar',
  order: 2,
  title: 'Kommunikáció és digitális kommunikáció',
  requirementRef: 'Nyelv 1. Kommunikáció; Nyelv 8. Digitális kommunikáció',
  intro:
    'A kommunikációs folyamat tényezői és funkciói, a pragmatika (beszédaktusok, együttműködési elv, udvariasság), a nyelvi és nem nyelvi jelek, a személyközi és a tömegkommunikáció, végül a digitális kommunikáció és az internetes források kezelése. A nyelvi tételsorban az 1. témakörből 2–4, a 8.-ból 1 tétel van, az írásbeli szövegértési-nyelvi feladatsor pedig gyakran kérdez rá a szöveg kommunikációs jellemzőire.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Magyar nyelv, 1. témakör: Kommunikáció; 8. témakör: Digitális kommunikáció). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'kommunikacios-folyamat-tenyezok-funkciok',
      subject: 'magyar',
      unitId: 'kommunikacio',
      title: 'A kommunikációs folyamat tényezői és funkciói',
      level: 'kozep',
      requirement: {
        kozep:
          'A kommunikációs folyamat tényezőinek, céljának, funkcióinak és összefüggésüknek megértése, bizonyítása beszédhelyzetek elemzésével, szövegértelmezéssel, szövegalkotással; a nyelv szerepe a kommunikációban.',
        emelt:
          'A kommunikáció folyamata, tényezői, célja és funkciója; a kommunikáció univerzális jellege; a kommunikáció fogalmának interdiszciplináris jellege.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **kommunikáció** információcsere jelek segítségével: valaki **közöl** valamit valakivel, és a közlés célja hatást elérni vagy megértetni valamit.',
            'A folyamat **tényezői**: **adó** (feladó), **vevő** (címzett), **üzenet**, **csatorna**, **kód**, **kontextus** (szituáció, tárgy), és a **visszacsatolás**.',
            'Az adó **kódolja** az üzenetet, a vevő **dekódolja**. Ha a két kód nem azonos, vagy zaj van a csatornán, **kommunikációs zavar** keletkezik.',
            'A közlés **funkciója** (célja) hatszoros lehet: **tájékoztató**, **kifejező**, **felhívó**, **kapcsolatteremtő**, **metanyelvi**, **költői**. Egy közlésben több funkció is lehet, de általában egy a **domináns**.',
            'A vizsgán a legtöbbször egy rövid szituációban kell megnevezni a tényezőket és a funkciót, és meg is kell indokolni.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'adó (feladó)', text: 'Az, aki az üzenetet létrehozza és elküldi.' },
            { term: 'vevő (címzett)', text: 'Az, akinek az üzenet szól, és aki értelmezi azt.' },
            { term: 'üzenet', text: 'A közlés tartalma, amelyet jelekből építünk fel.' },
            {
              term: 'csatorna',
              text: 'A közvetítő közeg: hang (levegő), papír, telefon, képernyő, internet.',
            },
            {
              term: 'kód',
              text: 'A jelek és a használatukat szabályozó megegyezés (például a magyar nyelv, a KRESZ, a gesztusok rendszere).',
            },
            {
              term: 'kontextus',
              text: 'A közlés helyzete és a közlés tárgya: az, amire az üzenet vonatkozik, és ami a megértését segíti.',
            },
            {
              term: 'visszacsatolás',
              text: 'A vevő reakciója, amely jelzi az adónak, hogyan értette meg az üzenetet.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a kommunikáció?' },
        {
          kind: 'text',
          text: 'A kommunikáció **tudatos vagy akaratlan információközvetítés**, amelyben az adó és a vevő jelek útján kapcsolatba kerül. Nemcsak az emberekre jellemző (az állatoknak is van jelrendszerük), de az **emberi kommunikáció** legfejlettebb eszköze a **nyelv**: bármiről beszélhetünk vele, múltról és jövőről is, és a nyelvről magáról is.',
        },
        { kind: 'heading', text: 'A tényezők és a folyamat' },
        {
          kind: 'text',
          text: 'A folyamat lépései: az adó **elhatározza**, mit akar közölni (a közlés célja), az üzenetet **kódolja** (szavakká, mondatokká formálja), a **csatornán** elküldi, a vevő **észleli** és **dekódolja** (jelentést rendel hozzá), majd reagál: ez a **visszacsatolás**. A beszélgetésben az adó és a vevő szerepe **folyamatosan cserélődik**.',
        },
        {
          kind: 'compare',
          title: 'A tényezők egy beszélgetésben',
          columns: ['Tényező', 'Példa: „Hány óra van?” – kérdezi a lány a buszmegállóban'],
          rows: [
            { label: 'Adó', cells: ['aki küldi', 'a lány'] },
            { label: 'Vevő', cells: ['akinek szól', 'a mellette álló fiú'] },
            { label: 'Üzenet', cells: ['a közlés tartalma', 'a pontos idő iránti kérdés'] },
            { label: 'Csatorna', cells: ['a közeg', 'a hangzó beszéd (levegő)'] },
            { label: 'Kód', cells: ['a jelrendszer', 'a magyar nyelv'] },
            {
              label: 'Kontextus',
              cells: ['a helyzet', 'buszmegálló, a lány siet, a busz késik'],
            },
          ],
        },
        { kind: 'heading', text: 'A kommunikáció funkciói' },
        {
          kind: 'text',
          text: 'A funkció azt mutatja meg, **mi a közlés célja**, és a kommunikációs folyamat melyik tényezőjére irányul a hangsúly. A hat funkciót az iskolai nyelvtan **Roman Jakobson** modellje alapján tanítja.',
        },
        {
          kind: 'compare',
          title: 'A hat funkció',
          columns: ['Funkció és hangsúly', 'Példa'],
          rows: [
            {
              label: 'Tájékoztató (a kontextusra irányul)',
              cells: ['tényt közöl', '„A vonat 9.40-kor indul.”'],
            },
            {
              label: 'Kifejező (az adóra irányul)',
              cells: ['az adó érzelmét, viszonyát mutatja', '„Jaj, de örülök!”'],
            },
            {
              label: 'Felhívó (a vevőre irányul)',
              cells: ['cselekvésre, válaszra késztet', '„Csukd be az ablakot!”, kérdés, parancs'],
            },
            {
              label: 'Kapcsolatteremtő (a csatornára irányul)',
              cells: [
                'a kapcsolat felvétele, fenntartása, ellenőrzése',
                '„Halló, hallasz?”, köszönés, „Jó napot!”',
              ],
            },
            {
              label: 'Metanyelvi (a kódra irányul)',
              cells: ['a nyelvről szól', '„A *kommunikáció* szó latin eredetű.”'],
            },
            {
              label: 'Költői (az üzenet formájára irányul)',
              cells: ['a megformálás maga is fontos', 'rím, ritmus, szójáték, szlogen'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Tényezők és funkció egy szituációban',
          problem:
            'Az anya a konyhából odaszól a szobában ülő fiának: „Nyitva van az ablak, és kint tíz fok van.” Nevezd meg a kommunikáció tényezőit és a közlés funkcióit!',
          solution:
            '**Adó:** az anya. **Vevő:** a fia. **Üzenet:** az ablak nyitva van, hűvös az idő. **Csatorna:** a hangzó beszéd. **Kód:** a magyar nyelv. **Kontextus:** a lakás, a fiú a szobában ül, hűvös a levegő. **Funkció:** a mondat szó szerint **tájékoztató** (tényt közöl), de a helyzetben a valódi cél az, hogy a fiú **csukja be az ablakot**, tehát a **domináns funkció felhívó**. Ez **közvetett (indirekt) felhívás**: a mondatforma tájékoztat, a szándék kér.',
        },
        {
          kind: 'text',
          text: '**Visszacsatolás:** ha a fiú felkel és becsukja az ablakot, vagy visszakérdez („Miért, fázol?”), az anya megtudja, hogy az üzenet célba ért.',
        },
        { kind: 'heading', text: 'A kommunikációs zavar' },
        {
          kind: 'text',
          text: 'Zavar keletkezik, ha az üzenet nem úgy ér célba, ahogy az adó akarta. Okai: **zaj** a csatornán (hangos környezet, rossz térerő), **eltérő kód** (idegen nyelv, szakszó, szleng), eltérő **háttérismeret** vagy értelmezés, az adó **pontatlan** megfogalmazása, vagy a vevő **figyelmetlensége**.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** a kommunikáció folyamatát és tényezőit tágabb összefüggésben is értelmezned kell. A kommunikáció **univerzális**: minden emberi közösségben van, a gyerek a kommunikációban szocializálódik. A fogalom **interdiszciplináris**: más tudományágak is használják (a nyelvészet mellett a pszichológia, a szociológia, a médiaelmélet, az informatika és a biológia is, például az állatok jelzőrendszereinek vizsgálatánál). Fontos, hogy a közlési folyamatot ne csak egyirányú üzenetküldésnek, hanem **kölcsönös, folyamatos** alakításnak lásd, ahol az adó és a vevő hatnak egymásra.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Egy rövid párbeszéd, hirdetés vagy internetes üzenet alapján nevezd meg az adót, a vevőt, a csatornát, a kódot, a kontextust és a funkciót.',
            'Szóbeli tétel: „A kommunikációs folyamat tényezői és funkciói”, egy kapott szöveggel vagy képpel.',
            'A szövegértési-nyelvi feladatsorban gyakori a „melyik funkció a domináns?” és az „állítsd párba a mondatokat a funkciókkal” típus.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: **1.** a csatornát és a kódot összekevered (a csatorna a közeg, például hang vagy képernyő, a kód a jelrendszer, például a magyar nyelv); **2.** a funkciót a mondatformából találod ki, nem a szándékból (a „Nem hallod, hogy zene szól?” kérdő mondat, de felhívó); **3.** a visszacsatolást kihagyod; **4.** a költői funkciót csak versnél keresed, pedig a szlogen és a nyelvi játék is az.',
        },
        {
          kind: 'example',
          title: 'Vizsgapélda: a funkciók felismerése',
          problem:
            'Állítsd párba a mondatokat a domináns funkcióval! 1. „Halló, jól hallasz engem?” 2. „Hűha, ez fantasztikus!” 3. „A *szerkeszt* ige.” 4. „Kávé, mint a régi: ízre jó, ára se rossz.” (szlogen) 5. „Gyere ide!”',
          solution:
            '1. **kapcsolatteremtő** (a csatornát ellenőrzi). 2. **kifejező** (az adó érzelme). 3. **metanyelvi** (a nyelvről, a szó nyelvtani besorolásáról szól). 4. **költői** (rím, ritmus, a forma a fontos; a szlogen közben persze felhívó is). 5. **felhívó** (a vevőt cselekvésre készteti).',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz-váz egy szóbeli tételhez: **1.** a kommunikáció fogalma; **2.** a folyamat tényezői egy saját példán; **3.** a hat funkció egy-egy példával; **4.** a kapott szöveg elemzése (adó, vevő, cél, domináns funkció); **5.** a zavar lehetséges oka a szövegben; **6.** zárás: a nyelv szerepe a kommunikációban.',
        },
      ],
      topicMatch: ['=kommunikáció'],
      quiz: [
        {
          question: 'Mi a kommunikációs folyamatban a csatorna?',
          options: [
            'A használt jelrendszer, például a magyar nyelv.',
            'A közvetítő közeg, például a hang vagy a képernyő.',
            'Az üzenet tartalma.',
            'A vevő válasza.',
          ],
          answer: 1,
          explanation:
            'A csatorna a közvetítő közeg. A jelrendszer a kód, a vevő válasza pedig a visszacsatolás.',
        },
        {
          question: 'Melyik funkció dominál a „Halló, hallasz engem?” mondatban?',
          options: ['tájékoztató', 'költői', 'metanyelvi', 'kapcsolatteremtő'],
          answer: 3,
          explanation:
            'A beszélő a csatorna működését és a kapcsolatot ellenőrzi, ez a kapcsolatteremtő funkció.',
        },
        {
          question:
            'A „Hideg van itt!” mondatot a tanár azért mondja, hogy a diák csukja be az ablakot. Mi a domináns funkció?',
          options: ['felhívó', 'tájékoztató', 'kifejező', 'metanyelvi'],
          answer: 0,
          explanation:
            'A mondat alakja tájékoztató, de a szándék cselekvésre késztet: közvetett felhívás.',
        },
        {
          question: 'Melyik állítás igaz a metanyelvi funkcióra?',
          options: [
            'Az adó érzelmeit fejezi ki.',
            'A rímek és a ritmus miatt fontos.',
            'A nyelvről, a kódról szól a közlés.',
            'A kapcsolatot tartja fenn.',
          ],
          answer: 2,
          explanation:
            'A metanyelvi funkció a kódra irányul: a nyelvről szólunk a nyelv segítségével (például szó jelentésének magyarázata).',
        },
        {
          question: 'Miért tekintjük a kommunikáció fogalmát interdiszciplinárisnak?',
          options: [
            'Mert csak a nyelvészet vizsgálja.',
            'Mert több tudományág (például pszichológia, szociológia, informatika) is használja és vizsgálja.',
            'Mert csak az írásbeliségre vonatkozik.',
            'Mert minden közlés költői funkciójú.',
          ],
          answer: 1,
          explanation:
            'Az interdiszciplináris azt jelenti, hogy több tudományág közös tárgya a kommunikáció.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kommunikáció', url: wiki('Kommunikáció') },
        { label: 'Wikipédia: Roman Jakobson', url: wiki('Roman Jakobson') },
        { label: 'Wikipédia: Kommunikációs modell', url: wiki('Kommunikációs modell') },
      ],
    },
    {
      id: 'pragmatika-beszedaktusok-egyuttmukodes',
      subject: 'magyar',
      unitId: 'kommunikacio',
      title: 'Pragmatika: beszédaktusok, együttműködés, udvariasság',
      level: 'kozep',
      requirement: {
        kozep:
          'A sikeres nyelvhasználat gyakorlata: a nyelvhasználat, a társalgás összetevői; beszédaktusok; az együttműködés elve; udvariassági formák.',
        emelt:
          'A nyelv működése, a nyelvhasználat különböző kontextusokban, különböző célok elérésére; együttműködési elvek.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **pragmatika** azt vizsgálja, hogyan használjuk a nyelvet **helyzetben**, és mit értünk meg a szó szerinti jelentésen túl.',
            '**Beszédaktus**: a kimondott mondat egyben **cselekvés** is (kér, ígér, megköszön, megbocsát, figyelmeztet). Van **szó szerinti** és **közvetett (indirekt)** beszédaktus.',
            'Az **együttműködési elv** (Grice): úgy járulj hozzá a beszélgetéshez, ahogy a célja megkívánja. Négy maximája: **mennyiség**, **minőség**, **viszony** (relevancia), **mód**.',
            'Az **udvariasság** a kapcsolat védelmét szolgálja: megszólítás, tegezés és magázás, köszönés, kérés finomítása, bocsánatkérés.',
            'A **társalgás** összetevői: a beszélők, a témák, a **megszólalás-sorrend** (szerepcsere), a nyitás és a zárás, a nem nyelvi jelek.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'pragmatika',
              text: 'A nyelvhasználat vizsgálata a beszédhelyzet, a beszélők szándéka és a körülmények szempontjából.',
            },
            {
              term: 'beszédaktus',
              text: 'A beszéddel végrehajtott cselekvés (például kérés, ígéret, köszönés).',
            },
            {
              term: 'indirekt (közvetett) aktus',
              text: 'A mondat alakja és a valódi szándék eltér egymástól („Át tudnád adni a sót?” valójában kérés).',
            },
            {
              term: 'együttműködési elv',
              text: 'A beszélgetés sikerének alapja: a felek igyekeznek érthetően, igazat, a témához illőt mondani.',
            },
            {
              term: 'implikatúra',
              text: 'Az, amit a beszélő nem mond ki, de a hallgató a helyzetből és az elvek megsértéséből kikövetkeztet.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A beszédaktusok' },
        {
          kind: 'text',
          text: 'A beszédaktus-elméletet **J. L. Austin** és **J. R. Searle** dolgozta ki. Alapgondolata: a beszéddel **cselekszünk**. Amikor azt mondod, „Megígérem”, akkor a kimondással hajtod végre az ígéretet. Egy beszédaktusnak három oldala különböztethető meg:',
        },
        {
          kind: 'compare',
          title: 'A beszédaktus három szintje',
          columns: ['Szint', 'Példa: „Zárd be az ajtót!”'],
          rows: [
            {
              label: 'Lokúciós (a mondat kimondása)',
              cells: ['a hangsor, a szavak és a mondat', 'maga a kimondott mondat'],
            },
            {
              label: 'Illokúciós (a szándék)',
              cells: ['mit akar a beszélő tenni a kimondással', 'felszólítás, kérés'],
            },
            {
              label: 'Perlokúciós (a hatás)',
              cells: ['mit vált ki a hallgatóból', 'a hallgató becsukja az ajtót, vagy sem'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A beszédaktusok jellegzetes fajtái: **közlés** (állítás), **felszólítás** (kérés, parancs, tanács), **kötelezés** (ígéret, fogadalom), **kifejezés** (köszönet, bocsánatkérés, gratuláció), **kinyilatkoztatás** (keresztelés, házasságkötés, ítélet, kinevezés: a kimondás maga teremti meg a tényt). A csoportosítás tankönyvenként kissé eltérhet, a lényeg a szándék felismerése.',
        },
        {
          kind: 'text',
          text: 'Az aktus lehet **közvetlen** (a mondat formája és a szándék egyezik: „Kérlek, nyisd ki az ablakot.”) vagy **közvetett** (nem egyezik: „Nem fázol?”, amikor valójában azt akarod, hogy valaki csukja be az ablakot). A közvetett kérés **udvariasabb**, mert nem kényszerít.',
        },
        { kind: 'heading', text: 'Az együttműködési elv és a maximák' },
        {
          kind: 'text',
          text: '**H. P. Grice** szerint a beszélgetők hallgatólagosan **együttműködnek**. Ennek négy szabálya (maximája) van:',
        },
        {
          kind: 'compare',
          title: 'Grice maximái',
          columns: ['Maxima', 'Mit jelent, és hogyan sérül'],
          rows: [
            {
              label: 'Mennyiség',
              cells: [
                'annyit mondj, amennyi kell',
                'túl kevés vagy túl sok információ (hosszas körülírás)',
              ],
            },
            {
              label: 'Minőség',
              cells: ['igazat mondj', 'hazugság, megalapozatlan állítás'],
            },
            {
              label: 'Viszony (relevancia)',
              cells: ['a témához illőt mondj', 'témaváltás, mellébeszélés'],
            },
            {
              label: 'Mód',
              cells: ['érthetően, rendezetten fejezd ki magad', 'homályos, kétértelmű közlés'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Mi a közlés mögötti szándék?',
          problem:
            'Anna megkérdezi Bencét: „Elmegyünk moziba, vagy tanulunk?” Bence így felel: „Holnap dolgozatot írok.” Melyik maximát tartja be, melyiket sérti látszólag, és mit ért ebből Anna?',
          solution:
            'Bence válasza látszólag **nem felel** a kérdésre (kérdés: mozi vagy tanulás; válasz: dolgozat), ezért a **viszony** (relevancia) maximáját látszólag megsérti. Anna mégis **kikövetkezteti** (implikatúra), hogy Bence tanulni szeretne, mert dolgozata lesz. Az elvet tehát nem hagyták figyelmen kívül, a beszélgetők **feltételezik az együttműködést**, ezért értik meg a ki nem mondott üzenetet.',
        },
        { kind: 'heading', text: 'Udvariassági formák' },
        {
          kind: 'text',
          text: 'Az udvariasság a **kapcsolat megóvását** szolgálja, és kultúránként más. A magyarban udvariassági eszköz a **köszönés** (*Szia!*, *Jó napot kívánok!*), a **megszólítás** (név, titulus, *Kedves…!*, *Tisztelt…!*), a **tegezés és a magázás** (az életkor, a távolság és a helyzet szerint), a **feltételes mód** a kérésben (*Segítenél?*), a **kérlek**, **szeretnék**, **bocsánat** típusú szavak, a **tompítás** (*kicsit*, *talán*), valamint a **köszönet és bocsánatkérés**. A **hivatalos** helyzet (levél, hivatal) magasabb udvariassági szintet kíván, mint a baráti beszélgetés.',
        },
        { kind: 'heading', text: 'A társalgás összetevői' },
        {
          kind: 'text',
          text: 'A társalgás **felváltva** történő megszólalásokból áll. Összetevői: a **beszédhelyzet** (hol, mikor, kik), a **téma** és annak váltása, a **megszólalás-sorrend** (ki mikor kerül sorra, hogyan adják át a szót), a **nyitás** és **zárás** (köszönés, elköszönés), a **visszajelzések** (*aha*, *igen*, bólintás) és a **nem nyelvi jelek**. A jó társalgó a másik szavába nem vág, és követi a témát.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** azt is bizonyítanod kell, hogy a nyelv **különböző kontextusokban, különböző célokra** másképp működik: ugyanaz a mondat (*Szép idő van.*) lehet tájékoztatás, kapcsolatfelvétel vagy ironikus megjegyzés a helyzettől függően. Az együttműködési elvek **tudatos megsértése** is lehet eszköz: az **irónia** (a minőségi maxima megsértése: „Nagyszerű, megint elkéstél!”), a **udvarias kitérés**, a **célzás** vagy a **félrevezetés** és a manipuláció.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Egy kis párbeszédben azonosítani kell a beszédaktust (kérés, ígéret, felszólítás, kifejezés), és azt, hogy közvetlen vagy közvetett.',
            'Melyik Grice-maximát sérti az adott válasz, és mi a beszélő valószínű szándéka?',
            'Udvariassági formák felismerése és átírása hivatalosabb vagy bizalmasabb stílusra (tegezés–magázás, megszólítás, kérés).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a **mondatfajtából** (kijelentő, kérdő, felszólító) következtetsz a beszédaktusra. A kérdő mondat lehet kérés („Be tudnád csukni az ajtót?”), a kijelentő felszólítás („Hideg van.”). Mindig a **szándékot** nézd.',
        },
        {
          kind: 'example',
          title: 'Vizsgapélda: írd át udvariasabban',
          problem:
            'Egy diák e-mailt ír a tanárának: „Küldd el nekem a jegyeimet, mert nem tudom őket.” Írd át a megszólítást és a kérést hivatalosan, udvariasan!',
          solution:
            '„**Tisztelt Tanárnő!** Kérem, szíveskedjen elküldeni a jegyeimet, mert nem látom őket a rendszerben. Köszönöm szépen a segítségét! **Üdvözlettel:** Kovács Péter.” Az átírásban a **magázás**, a **titulus**, a **feltételes/udvarias kérésforma** (*Kérem, szíveskedjen…*), az **indoklás** és a **köszönet** fejezi ki az udvariasságot.',
        },
        {
          kind: 'tip',
          text: 'Beszélgetésrészletnél a kérdéssor: **ki** beszél, **mit tesz** a mondatával (aktus), **betartja-e** az együttműködési elvet (melyik maximát sérti), és **mi a hatása**.',
        },
      ],
      topicMatch: ['pragmatika', 'beszédaktus'],
      quiz: [
        {
          question: 'Mit jelent a beszédaktus fogalma?',
          options: [
            'A beszéd hangerejének mérését.',
            'A beszéddel végrehajtott cselekvést, például kérést vagy ígéretet.',
            'A hosszabb szóbeli felelet műfaját.',
            'A beszélő nyelvi hibáit.',
          ],
          answer: 1,
          explanation:
            'A beszédaktus lényege, hogy a kimondással cselekszünk: kérünk, ígérünk, köszönünk, figyelmeztetünk.',
        },
        {
          question: 'Melyik példa közvetett (indirekt) kérés?',
          options: [
            'Kérlek, nyisd ki az ablakot!',
            'Nyisd ki az ablakot!',
            'Nem fojtogató itt a levegő?',
            'Az ablak három nap óta zárva van, ezért nyitom ki.',
          ],
          answer: 2,
          explanation:
            'A mondat kérdő alakú, de a beszélő azt akarja, hogy valaki szellőztessen. A szándék és a forma eltér, ezért közvetett.',
        },
        {
          question: 'Melyik Grice-maximát sérti, aki a kérdésre témán kívüli választ ad?',
          options: ['mennyiségi', 'minőségi', 'viszony (relevancia)', 'mód'],
          answer: 2,
          explanation:
            'A viszony maximája szerint a hozzászólásnak a témához kell kapcsolódnia. A témába nem vágó válasz ezt sérti.',
        },
        {
          question: 'Melyik NEM udvariassági eszköz?',
          options: [
            'a magázás hivatalos helyzetben',
            'a feltételes mód a kérésben',
            'a szavába vágás a gyors haladás miatt',
            'a „kérem” és a „köszönöm”',
          ],
          answer: 2,
          explanation:
            'A szavába vágás a társalgás szabályait sérti, nem az udvariasságot szolgálja. A többi udvariassági eszköz.',
        },
        {
          question: 'Mi az irónia az együttműködési elv szempontjából?',
          options: [
            'A minőségi maxima látszólagos megsértése: az ellenkezőjét mondjuk, mint amit gondolunk.',
            'A mennyiségi maxima betartása.',
            'A módbeli maxima legjobb betartása.',
            'Nem kapcsolódik az együttműködési elvhez.',
          ],
          answer: 0,
          explanation:
            'Az irónia esetén a beszélő nem igazat mond szó szerint, de a hallgató a helyzetből kikövetkezteti az igazi szándékot.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Pragmatika', url: wiki('Pragmatika') },
        { label: 'Wikipédia: Beszédaktus', url: wiki('Beszédaktus') },
        { label: 'Wikipédia: Paul Grice', url: wiki('Paul Grice együttműködési elv') },
      ],
    },
    {
      id: 'nem-nyelvi-jelek-szobeliseg-irasbeliseg',
      subject: 'magyar',
      unitId: 'kommunikacio',
      title: 'Nyelvi és nem nyelvi jelek, szóbeliség és írásbeliség',
      level: 'kozep',
      requirement: {
        kozep:
          'Az emberi kommunikáció nem nyelvi jelei és kifejezőeszközei (gesztus, mimika, térközszabályozás, tekintet, külső megjelenés, testtartás, fejtartás, csend); a szóbeliség és az írásbeliség; a szövegfajták jellemzői és a kommunikációs folyamat kapcsolata; közlésmódok funkciói (párbeszéd, történetmondás, levél, üzenet, feljegyzés, köszönés, megszólítás).',
        emelt: 'A vizuális és a nyelvi jel; a vizuális és a nyelvi kommunikáció.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A kommunikációban a **nyelvi jelek** (szavak) mellett **nem nyelvi jelek** is részt vesznek: **gesztus**, **mimika**, **tekintet**, **testtartás**, **fejtartás**, **térköz**, **külső megjelenés**, **csend**.',
            'A nem nyelvi jelek **kiegészíthetik**, **helyettesíthetik**, **ellentmondhatnak** a szavaknak, és sokat elárulnak az **érzelmekről** és a **viszonyról**.',
            'A **térközszabályozás** (proxemika) az, hogy mekkora távolságra állunk egymástól: intim, személyes, társas, nyilvános zóna.',
            'A kommunikáció formája lehet **szóbeli** (spontán, a helyzetre támaszkodik, azonnali visszacsatolás) vagy **írásbeli** (tervezett, rögzített, a helyzettől független, késleltetett visszacsatolás).',
            'A **közlésmódoknak** (párbeszéd, történetmondás, levél, üzenet, feljegyzés, köszönés, megszólítás) különböző funkciójuk van.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'gesztus',
              text: 'Kéz-, karmozdulat vagy fejmozdulat (integetés, bólintás, mutatás).',
            },
            {
              term: 'mimika',
              text: 'Az arc mozgása, arckifejezés (mosoly, összehúzott szemöldök).',
            },
            { term: 'proxemika', text: 'A térköz, a beszélők közötti távolság szabályozása.' },
            {
              term: 'paralingvisztikai jel',
              text: 'A beszédet kísérő hangzási jelenség: hangerő, hanglejtés, beszédtempó, szünet, sóhaj.',
            },
            {
              term: 'csend',
              text: 'Kommunikációs jel is lehet: egyetértés, nemtetszés, elgondolkodás vagy tisztelet kifejezése.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A nem nyelvi kommunikáció' },
        {
          kind: 'text',
          text: 'A beszéd mellett **testünk, megjelenésünk és viselkedésünk** is közöl. A nem nyelvi jelek sokszor **tudattalanul** működnek, ezért hitelesebbnek érezzük őket. Fontos: a jelek jelentése **kultúránként** eltérhet, és csak a **helyzettel együtt** értelmezhető.',
        },
        {
          kind: 'compare',
          title: 'A legfontosabb nem nyelvi jelek',
          columns: ['Jel', 'Mit közölhet (példa)'],
          rows: [
            {
              label: 'Gesztus',
              cells: [
                'kéz- és karmozdulat',
                'köszönés (integetés), hívás, tiltás, egyetértés (bólintás)',
              ],
            },
            { label: 'Mimika', cells: ['arckifejezés', 'öröm, harag, csodálkozás, undor'] },
            {
              label: 'Tekintet',
              cells: [
                'szemkontaktus',
                'figyelem, érdeklődés, a szó átadása; kerülése: bizonytalanság vagy tiszteletlenség',
              ],
            },
            {
              label: 'Testtartás, fejtartás',
              cells: [
                'a test és a fej helyzete',
                'nyitott, egyenes tartás: magabiztosság; összehúzott test: zárkózottság',
              ],
            },
            {
              label: 'Térközszabályozás',
              cells: ['a távolság', 'bizalmas helyzetben közelebb állunk, hivatalosban távolabb'],
            },
            {
              label: 'Külső megjelenés',
              cells: [
                'ruha, haj, ápoltság',
                'szerep, rang, alkalom (egyenruha, öltöny, sportruha)',
              ],
            },
            { label: 'Csend', cells: ['a beszéd hiánya', 'elgondolkodás, tiltakozás, tisztelet'] },
          ],
        },
        {
          kind: 'example',
          title: 'Jelek ellentmondása',
          problem:
            'Egy diák azt mondja a tanárnak: „Persze, értem a feladatot.” Közben lesütött szemmel, hátradőlve ül, a keze a pad alatt van, és halkan, hezitálva beszél. Mit közölnek a szavai, és mit a testbeszéde?',
          solution:
            'A **szavak** azt közlik, hogy a diák érti a feladatot. A **nem nyelvi jelek** (lesütött szem, bizonytalan, halk hang, hezitálás) bizonytalanságot vagy tanácstalanságot mutatnak. A két csatorna **ellentmond** egymásnak, ezért a tanár joggal gyanítja, hogy a diák nem értette meg. Ilyenkor általában a nem nyelvi jelekre hagyatkozunk, mert kevésbé irányíthatóak tudatosan.',
        },
        { kind: 'heading', text: 'Szóbeliség és írásbeliség' },
        {
          kind: 'compare',
          title: 'A kommunikáció két formája',
          columns: ['Szóbeli', 'Írásbeli'],
          rows: [
            {
              label: 'Tervezettség',
              cells: [
                'gyakran spontán, javítás menet közben',
                'tervezett, szerkesztett, javítható',
              ],
            },
            {
              label: 'Helyzet',
              cells: [
                'a közös szituációra támaszkodik, a nem nyelvi jelek segítenek',
                'a helyzettől független, a szövegnek kell mindent megadnia',
              ],
            },
            {
              label: 'Visszacsatolás',
              cells: ['azonnali (kérdés, közbeszólás)', 'késleltetett vagy hiányzik'],
            },
            {
              label: 'Nyelvhasználat',
              cells: [
                'rövidebb mondatok, töltelékszavak, ismétlések',
                'bonyolultabb mondatszerkezet, pontosabb szóhasználat',
              ],
            },
            {
              label: 'Tartósság',
              cells: ['múlékony, hangrögzítés nélkül nem maradandó', 'tartós, megőrződik'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **szövegfajták** (például levél, hír, jegyzet, jegyzőkönyv, meghívó) **tartalmi és formai jellemzői** összefüggnek a kommunikációs folyamattal: a **címzett** személye, a **cél** és a **helyzet** meghatározza a stílust, a terjedelmet, a szerkezetet és a nyelvi udvariasságot. Más a hivatalos levél a megszólítása, tagolása és hangneme szerint, mint egy baráti üzenet.',
        },
        { kind: 'heading', text: 'Közlésmódok és funkcióik' },
        {
          kind: 'compare',
          title: 'Példák közlésmódokra',
          columns: ['Közlésmód', 'Fő funkciója'],
          rows: [
            {
              label: 'Párbeszéd',
              cells: ['kétoldalú, szerepcserés', 'információcsere, kapcsolattartás, egyeztetés'],
            },
            {
              label: 'Történetmondás',
              cells: ['események elmondása', 'tapasztalat átadása, szórakoztatás, közösségépítés'],
            },
            {
              label: 'Levél',
              cells: [
                'távoli címzettnek írott szöveg',
                'tájékoztatás, kapcsolattartás, hivatalos ügyintézés',
              ],
            },
            { label: 'Üzenet', cells: ['rövid, gyors közlés', 'sürgős tájékoztatás, felhívás'] },
            {
              label: 'Feljegyzés',
              cells: ['saját vagy belső használatú rövid szöveg', 'emlékeztető, adatrögzítés'],
            },
            {
              label: 'Köszönés, megszólítás',
              cells: [
                'kapcsolatot nyitó és záró formula',
                'kapcsolatteremtés, viszony kifejezése, udvariasság',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** a **vizuális jel** és a **nyelvi jel** különbségét is ismerned kell. A nyelvi jel (szó) **önkényes, megegyezéses** és **lineáris** (egymás után következő elemekből áll), a vizuális jel (kép, ikon, ábra, szimbólum) gyakran **hasonlóság** alapján utal a jelöltre, és **egyszerre, egészében** fogjuk fel. A kép **gyorsabban hat** és a nyelvi akadályokat is áthidalhatja, de **többértelmű** lehet, ezért gyakran **szöveg magyarázza**. A tipikus vizuális jelek: piktogramok, jelzések, ábrák, térképek, fényképek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Képről vagy leírásról kell kiolvasni a nem nyelvi jeleket (testtartás, mimika, távolság), és meg kell nevezni a jelentésüket.',
            'Szóbeli és írásbeli szövegek összehasonlítása (például egy hivatalos levél és egy hangüzenet).',
            'Közlésmód vagy szövegfajta megnevezése és funkciójának megadása (üzenet, feljegyzés, levél, megszólítás).',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne feledd: a nem nyelvi jelek jelentése **nem univerzális és nem egyértelmű**. Az „egyetlen jelből" levont messzemenő következtetés (pl. „lesütött szem = hazudik") hibás. Mindig a **szituációval és a szavakkal együtt** értelmezd.',
        },
        {
          kind: 'tip',
          text: 'A „Hasonlítsd össze a szóbeli és az írásbeli közlést!" feladatnál a szempontjaid legyenek: **tervezettség, helyzetfüggés, visszacsatolás, nyelvi megformálás, tartósság**. Mindegyikhez írj egy példát.',
        },
      ],
      topicMatch: ['nem nyelvi', 'szóbeliség', 'írásbeliség'],
      quiz: [
        {
          question: 'Melyik NEM nem nyelvi jel?',
          options: [
            'a mimika',
            'a térköz',
            'a levélben használt megszólítás („Kedves Anna!”)',
            'a testtartás',
          ],
          answer: 2,
          explanation:
            'A megszólítás nyelvi jel, szavakból áll. A mimika, a térköz és a testtartás nem nyelvi jel.',
        },
        {
          question: 'Mit jelent a proxemika?',
          options: [
            'A hanglejtés vizsgálatát.',
            'A beszélők közötti távolság, térköz szabályozását.',
            'Az arc mozgását.',
            'A csend értelmezését.',
          ],
          answer: 1,
          explanation:
            'A proxemika a térközszabályozás: bizalmasan közelebb, hivatalosan távolabb állunk.',
        },
        {
          question: 'Melyik jellemző a szóbeli kommunikációra?',
          options: [
            'késleltetett visszacsatolás',
            'azonnali visszacsatolás és a helyzetre való támaszkodás',
            'mindig szerkesztett és tervezett szöveg',
            'tartós rögzítettség',
          ],
          answer: 1,
          explanation:
            'A szóbeli közlés a közös helyzetre épül, és azonnal jön a visszajelzés (kérdés, bólintás). Az írásbeli közlés tartós és tervezett.',
        },
        {
          question: 'Mi történik, ha a szavak és a nem nyelvi jelek ellentmondanak egymásnak?',
          options: [
            'Mindig a szavak az igazak.',
            'A közlés zavaros lesz, a vevő gyakran a nem nyelvi jelekre hagyatkozik.',
            'Biztos, hogy hazudik a beszélő.',
            'A kommunikáció megszűnik.',
          ],
          answer: 1,
          explanation:
            'A nem nyelvi jelek gyakran spontánabbak, ezért hitelesebbnek érezzük őket, de nem bizonyítják a hazugságot, csak bizonytalanságra utalhatnak.',
        },
        {
          question: 'Miben különbözik a vizuális jel a nyelvi jeltől?',
          options: [
            'A vizuális jel mindig pontosan ugyanazt jelenti mindenkinek.',
            'A vizuális jel gyakran hasonlóságon alapul, és egyszerre fogjuk fel, a nyelvi jel megegyezéses és lineáris.',
            'A vizuális jelnek nincs jelentése.',
            'Csak a nyelvi jel szimbolikus.',
          ],
          answer: 1,
          explanation:
            'A kép gyakran hasonlóság alapján utal a jelöltre, és egészében fogjuk fel; a szó önkényes jel és egymás után olvassuk.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nonverbális kommunikáció', url: wiki('Nonverbális kommunikáció') },
        { label: 'Wikipédia: Proxemika', url: wiki('Proxemika') },
        { label: 'Wikipédia: Testbeszéd', url: wiki('Testbeszéd') },
      ],
    },
    {
      id: 'szemelykozi-es-tomegkommunikacio',
      subject: 'magyar',
      unitId: 'kommunikacio',
      title: 'Személyközi kommunikáció és tömegkommunikáció',
      level: 'kozep',
      requirement: {
        kozep:
          'Kommunikációs zavar, manipuláció, elvárás, megfelelés; az üzenetek céljának, szándékának dekódolása; tény és vélemény, tájékoztatás és véleményközlés megkülönböztetése; a kommunikáció típusai (személyes, csoportos, nyilvános, tömegkommunikáció); a főbb médiaműfajok; a tömegkommunikáció jellemzői, funkciói, megjelenési formái; az internetes felületek mint csatornák; a reklámok funkciója, működése, hatása.',
        emelt:
          'A közvetlen személyközi kommunikáció; az írott és az elektronikus tömegkommunikáció különbségei; tájékoztató és véleményközlő műfajok.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A kommunikáció típusai: **személyes** (két ember, közvetlen), **csoportos** (kis közösség), **nyilvános** (egy beszélő, jelenlévő közönség) és **tömegkommunikáció** (technikai eszközzel, nagy, szétszórt közönségnek).',
            '**Kommunikációs zavar**: az üzenet nem jut el vagy másként jut el, mint ahogy szántuk. **Manipuláció**: az adó a vevő tudta nélkül, rejtett eszközökkel befolyásolja.',
            'A tömegkommunikáció **jellemzői**: közvetett, többnyire egyirányú, nagy közönség, intézményes adó, késleltetett vagy korlátozott visszacsatolás.',
            '**Tény** (ellenőrizhető, igaz vagy hamis) és **vélemény** (értékelő, nézőpontfüggő): megkülönböztetésük alapvető médiaértési készség.',
            'A **reklám** felhívó és meggyőző funkciójú: célja a vásárlás vagy az érdeklődés felkeltése, eszköze a kép, a szlogen, az érzelem és az ismétlés.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kommunikációs zavar',
              text: 'Az üzenet torzulása vagy félreértése a folyamat valamelyik pontján.',
            },
            {
              term: 'manipuláció',
              text: 'A másik fél leplezett befolyásolása a saját érdekünkben.',
            },
            { term: 'tény', text: 'Ellenőrizhető állítás, amely igaz vagy hamis.' },
            {
              term: 'vélemény',
              text: 'Értékelő, szubjektív megállapítás, nem ellenőrizhető ugyanúgy, mint a tény.',
            },
            {
              term: 'médiaműfaj',
              text: 'A médiaszövegek tartalmilag és formailag elkülönülő fajtája (hír, riport, interjú, kommentár, reklám).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A kommunikáció típusai' },
        {
          kind: 'compare',
          title: 'Személyes, csoportos, nyilvános, tömegkommunikáció',
          columns: ['Típus', 'Jellemzői és példa'],
          rows: [
            {
              label: 'Személyes (személyközi)',
              cells: [
                'két ember, közvetlen kapcsolat, szerepcsere',
                'baráti beszélgetés, telefonhívás',
              ],
            },
            {
              label: 'Csoportos',
              cells: ['kis közösség, közös cél', 'osztályfőnöki óra, csapatmegbeszélés'],
            },
            {
              label: 'Nyilvános',
              cells: [
                'egy beszélő, jelenlévő közönség, előre készült, hivatalos',
                'tanári előadás, ünnepi beszéd, konferencia',
              ],
            },
            {
              label: 'Tömeg',
              cells: [
                'technikai eszköz, nagy és szétszórt közönség, intézményes adó',
                'hírműsor, újság, közösségi média',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Személyközi helyzetek: zavar, manipuláció, elvárás' },
        {
          kind: 'text',
          text: 'A **kommunikációs zavar** oka lehet **külső zaj** (hangos környezet, rossz térerő), **belső zaj** (fáradtság, figyelmetlenség, előítélet), **eltérő kód** (szakszó, szleng, idegen nyelv), **eltérő háttérismeret**, vagy a csatorna hibája. A zavar megoldása a **visszakérdezés**, az **összefoglalás** és a világosabb megfogalmazás.',
        },
        {
          kind: 'text',
          text: 'A **manipuláció** eszközei: **hízelgés**, érzelmi **zsarolás**, **hamis dilemma** („vagy velem vagy ellenem”), **elhallgatás**, szándékos **túlzás**, **félrevezető kérdés**, megfélemlítés. A manipuláció felismerésének kulcsa: **kinek az érdekét szolgálja az üzenet**, és mit hallgat el.',
        },
        {
          kind: 'text',
          text: 'Az **elvárások** a társadalmi szerepekhez kapcsolódnak: a tanártól, a diáktól, az ügyintézőtől, a baráttól mást várunk. A **megfelelés** azt jelenti, hogy a beszélő a helyzet és a szerep elvárásainak megfelelően alakítja a nyelvhasználatát (hangnem, szóhasználat, udvariasság). A nem megfelelő nyelvi viselkedés zavarhoz vagy konfliktushoz vezethet.',
        },
        { kind: 'heading', text: 'A tömegkommunikáció' },
        {
          kind: 'text',
          text: 'A tömegkommunikáció **jellemzői**: közvetett (technikai eszköz kell hozzá), a közönség **nagy és ismeretlen**, az adó többnyire **intézmény** (szerkesztőség, műsorszolgáltató), a kommunikáció **egyirányú vagy csak lassan, korlátozottan kétirányú** (olvasói levél, kommentek), a közlés gyorsan **terjed**. **Funkciói**: tájékoztatás, véleményformálás, szórakoztatás, ismeretterjesztés, közösségformálás, a hatalom ellenőrzése (nyilvánosság).',
        },
        {
          kind: 'text',
          text: '**Megjelenési formák**: **nyomtatott sajtó** (napilap, hetilap, folyóirat), **rádió**, **televízió**, **internetes média** (hírportál, blog, vlog, podcast, közösségi felületek). Az **internetes felületek mint csatornák** gyorsan, olcsón és visszajelzéssel működnek: bárki közölhet, ezért a hitelesség ellenőrzése fontosabb.',
        },
        { kind: 'heading', text: 'Tény és vélemény, tájékoztatás és véleményközlés' },
        {
          kind: 'compare',
          title: 'Tény és vélemény',
          columns: ['Tény', 'Vélemény'],
          rows: [
            {
              label: 'Példa',
              cells: ['„A rendezvényen 300 ember vett részt.”', '„A rendezvény színvonalas volt.”'],
            },
            {
              label: 'Jellemző',
              cells: ['ellenőrizhető, igaz vagy hamis', 'értékelő, szubjektív, nézőpontfüggő'],
            },
            {
              label: 'Nyelvi jelzés',
              cells: [
                'számadatok, nevek, időpontok, tárgyilagos kifejezések',
                'értékelő jelzők (szörnyű, csodálatos), módosítószavak (szerintem, talán)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **tájékoztató** műfajok (például hír, tudósítás, riport, interjú) tényeket közölnek, tárgyilagos hangon. A **véleményközlő** műfajok (például kommentár, glossza, jegyzet, publicisztikai írás) értékelnek és állást foglalnak. A valóságban a két csoport **keveredhet**: a tájékoztatás is sugallhat véleményt a szóválasztással, a képválasztással vagy a sorrenddel. A műfajok besorolása tankönyvenként kissé eltérhet.',
        },
        {
          kind: 'example',
          title: 'Tény vagy vélemény?',
          problem:
            'Döntsd el, tény vagy vélemény: a) „A városi könyvtár 2024-ben új olvasótermet adott át.” b) „A könyvtár új olvasóterme felesleges luxus.” c) „A felújítás gyönyörű lett.”',
          solution:
            'a) **tény** (időpont és esemény, ellenőrizhető). b) **vélemény** (az értékelő kifejezés, „felesleges luxus", nem ellenőrizhető tényként). c) **vélemény** (a „gyönyörű" szubjektív ítélet). A véleményt gyakran a **minősítő szavakról** ismered fel.',
        },
        { kind: 'heading', text: 'A reklám' },
        {
          kind: 'text',
          text: 'A reklám **felhívó** és **meggyőző** (befolyásoló) funkciójú szöveg, de gyakran **kifejező** és **költői** elemeket is használ. Működése: felkelti a **figyelmet**, érdeklődést és **vágyat** ébreszt, majd **cselekvésre** (vásárlásra) ösztönöz. Eszközei: **szlogen**, rím, szójáték, **ismétlés**, vonzó **képek**, híres emberek szerepeltetése, **érzelmi hatás** (humor, szeretet, siker ígérete), a **szépítő** kifejezések. A hatása nagy: formálja az **értékrendet** és a **fogyasztási szokásokat**. Kritikus olvasónak fel kell ismernie az **elhallgatást**, a túlzást és a **rejtett reklámot** (amikor a hirdetés nem tűnik hirdetésnek).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** a **közvetlen személyközi kommunikáció** jellemzőit is ismerned kell: azonnali visszacsatolás, a nem nyelvi jelek fontossága, a szerepek gyors cserélődése, a közös helyzetre való támaszkodás. Összehasonlítva az **írott és az elektronikus tömegkommunikációval**: az írott sajtó **tartós**, tagolt, lassabb, a nyelv a fő jelrendszer, az olvasó maga választja az olvasás ritmusát; az elektronikus média (rádió, televízió, internet) **gyorsabb, hang, mozgókép és hang segíti a hatást**, de a befogadó sokszor nem szabályozhatja a tempót (élő adás), és a kép érzelmi hatása erősebb. Az **internetes média** a legrugalmasabb: interaktív, multimédiás, azonnal frissíthető.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Újságcikk, hír vagy hirdetés alapján: tény vagy vélemény? Tájékoztató vagy véleményközlő a szöveg? Mi a szerző szándéka?',
            'Reklám elemzése: célközönség, funkció, nyelvi és képi eszközök, hatás.',
            'A kommunikációs típus (személyes, csoportos, nyilvános, tömeg) felismerése egy leírt helyzetben.',
            'Szóbeli tétel: „A tömegkommunikáció jellemzői, funkciói és műfajai".',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hiba: azt hiszed, hogy egy **hír** teljesen tárgyilagos. A szövegben mindig vizsgáld a **szóválasztást**, a **címet**, a **kiemelést** és az **elhallgatott** információt is. A tény és vélemény elkülönítésénél figyelj a **mondat egészére**: egy mondat tartalmazhat ténybeli és értékelő részt is.',
        },
        {
          kind: 'example',
          title: 'Vizsgapélda: reklám elemzése',
          problem:
            'Egy csokoládéreklám szlogenje: „Édes pillanat, ami csak a tiéd." A képen mosolygó fiatal ül a kanapén, kezében a csokoládé. Elemezd a reklám működését!',
          solution:
            '**Célközönség:** fiatal fogyasztók. **Domináns funkció:** felhívó, meggyőző; a **költői** funkció a szlogen hangzásában és a **kifejező** funkció az érzelmi hatásban is megjelenik. **Eszközök:** rövid, könnyen megjegyezhető szlogen; a *csak a tiéd* kifejezés személyesre fordítja a közlést; a kép pozitív érzést (öröm, kikapcsolódás) társít a termékhez. **Hatás:** érzelmi alapon vásárlásra ösztönöz, nem tényeket közöl. **Kritikai megjegyzés:** nem derül ki az összetétel, az ár, a minőség.',
        },
        {
          kind: 'tip',
          text: 'Médiaszövegeknél a gyors kérdéssor: **ki** az adó, **kinek** szól, **mi a célja**, **tény vagy vélemény**, **milyen nyelvi/képi eszközökkel** hat, **mit hallgat el**.',
        },
      ],
      topicMatch: ['tömegkommunikáció', 'reklám', 'médiaműfaj'],
      quiz: [
        {
          question: 'Melyik a tömegkommunikáció jellemzője?',
          options: [
            'A beszélők közvetlenül, egymás mellett állnak.',
            'Technikai eszközzel, nagy és szétszórt közönséghez jut el.',
            'Mindig kétoldalú, azonnali visszacsatolás van.',
            'Csak írásban történhet.',
          ],
          answer: 1,
          explanation:
            'A tömegkommunikáció közvetett, technikai eszközt használ, és nagy, szétszórt közönségnek szól.',
        },
        {
          question: 'Melyik mondat vélemény?',
          options: [
            'A koncert este 8 órakor kezdődött.',
            'A jegy 4500 forintba került.',
            'A koncert unalmas volt.',
            'A teremben 400 néző volt.',
          ],
          answer: 2,
          explanation: 'Az „unalmas" értékelő, szubjektív minősítés, a többi ellenőrizhető tény.',
        },
        {
          question: 'Melyik NEM tipikus manipulációs eszköz?',
          options: [
            'a hízelgés',
            'az érzelmi zsarolás',
            'a hamis dilemma',
            'az ellenőrizhető adatok pontos megadása',
          ],
          answer: 3,
          explanation:
            'A pontos, ellenőrizhető adatok közlése nem manipuláció. A többi a vevő befolyásolására szolgáló eszköz.',
        },
        {
          question: 'Melyik a reklám domináns funkciója?',
          options: ['metanyelvi', 'felhívó, meggyőző', 'csak tájékoztató', 'kapcsolatteremtő'],
          answer: 1,
          explanation:
            'A reklám célja a befogadó cselekvésre (vásárlásra) ösztönzése, ezért a felhívó, meggyőző funkció dominál.',
        },
        {
          question:
            'Melyik állítás igaz az írott és az elektronikus tömegkommunikáció különbségére?',
          options: [
            'Az írott sajtó mozgóképpel hat.',
            'Az írott szöveget az olvasó a saját tempójában olvashatja, az élő elektronikus adás tempóját nem ő szabja meg.',
            'Az elektronikus média nem használ nyelvet.',
            'Az írott sajtó mindig gyorsabb.',
          ],
          answer: 1,
          explanation:
            'Az írott sajtó tartós, az olvasó szabályozhatja az olvasás ritmusát. Az élő adásnál a tempót az adás adja meg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Tömegkommunikáció', url: wiki('Tömegkommunikáció') },
        { label: 'Wikipédia: Manipuláció', url: wiki('Manipuláció pszichológia') },
        { label: 'Wikipédia: Reklám', url: wiki('Reklám') },
      ],
    },
    {
      id: 'digitalis-kommunikacio-jellemzoi',
      subject: 'magyar',
      unitId: 'kommunikacio',
      title: 'Digitális kommunikáció: szövegek, chat, információkeresés',
      level: 'kozep',
      requirement: {
        kozep:
          'A digitális kommunikáció jellemzői, szövegtípusai, az új digitális nyelv; az információs társadalom hatása a nyelvhasználatra; az új „szóbeliség" (chat); digitális és hagyományos, folyamatos és nem folyamatos szövegek; az előadás szemléltetése (bemutató, prezentáció); az internetes szövegek jellemzői; internetes adatkeresés, a források megbízhatósága és összehasonlítása, pontos és etikus hivatkozás; az elektronikus média hagyományos és új közlésmódjai.',
        emelt:
          'Digitális eszközök, grafikus szerkesztők használata retorikai szövegekben; digitális formájú szövegek alkotása, multimédiás kiegészítések; az írott és az elektronikus tömegkommunikáció szövegtípusait elkülönítő tényezők; médiaközlések elemzése.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **digitális kommunikáció** számítógéppel, telefonnal, hálózaton keresztül zajlik: gyors, nagy tömegekhez eljut, kétirányú, **multimédiás**, és a szöveg gyakran **nem lineáris** (hivatkozások).',
            'Az **új digitális nyelv** jellemzői: rövidítések, **emotikonok** (hangulatjelek, emojik), szándékos helyesírási lazaság, szleng, angol szavak, **hashtag**.',
            'A **chat** az **új „szóbeliség"**: írásban rögzített, de szóbeli jegyeket mutat (spontán, rövid, párbeszédes, azonnali válasz, nem nyelvi jelek pótlása).',
            '**Folyamatos szöveg**: mondatokból és bekezdésekből épül (cikk, elbeszélés). **Nem folyamatos szöveg**: táblázat, diagram, térkép, űrlap, lista, hirdetmény.',
            'Az internetes forrásokat **ellenőrizni** kell: szerző, kiadó, dátum, hivatkozások, más források. A forrást **pontosan és etikusan** meg kell adni.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'hiperszöveg',
              text: 'Hivatkozásokkal (linkekkel) összekapcsolt szöveg, amelyet nem csak lineárisan lehet olvasni.',
            },
            {
              term: 'multimédia',
              text: 'Több jelrendszert (szöveg, kép, hang, videó) együtt használó közlés.',
            },
            {
              term: 'emotikon',
              text: 'Írásjelekből vagy kis ábrákból álló hangulatjel, amely az érzelmet jelzi (például :), emoji).',
            },
            {
              term: 'új szóbeliség',
              text: 'Írott, de a szóbeli jegyeit mutató digitális beszélgetés, például a chat.',
            },
            {
              term: 'hivatkozás',
              text: 'A felhasznált forrás pontos megadása a szövegben vagy a szöveg végén.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A digitális kommunikáció jellemzői' },
        {
          kind: 'text',
          text: 'Az **információs társadalom** a nyelvhasználatot és a nyelvi érintkezést is átalakította. A digitális kommunikáció: **gyors** (azonnali), **szinte határtalan** (bárkihez eljuthat), **interaktív** (a befogadó reagálhat, maga is közölhet), **multimédiás** (szöveg, kép, hang, mozgókép), **tárolható és kereshető**. A hátrányai: az információ **bősége és megbízhatatlansága**, a névtelenség miatti **udvariatlanság**, az adatok **védelmének** kérdése.',
        },
        { kind: 'heading', text: 'Digitális szövegtípusok' },
        {
          kind: 'text',
          text: 'Digitális szöveg például az **e-mail** (elektronikus levelezés), a **chat**, a **hozzászólás** (komment), a **blog** és a **vlog**, a **közösségi oldalak** bejegyzései, a **honlap**, a **wiki**, az **elektronikus dokumentum** és a **prezentáció**. A szövegszerkesztő használata is a digitális kommunikáció része: az írás menet közben **javítható**, formázható (**tipográfia**: betűtípus, kiemelés, tagolás), és más elemekkel (kép, táblázat) gazdagítható.',
        },
        { kind: 'heading', text: 'Az új digitális nyelv és az új „szóbeliség"' },
        {
          kind: 'compare',
          title: 'A chat és a hagyományos szöveg',
          columns: ['Chat / üzenet', 'Hagyományos írott szöveg'],
          rows: [
            { label: 'Tervezettség', cells: ['spontán, gyors', 'átgondolt, szerkesztett'] },
            {
              label: 'Mondatszerkezet',
              cells: ['rövid, hiányos mondatok, felkiáltás', 'teljes, összetettebb mondatok'],
            },
            {
              label: 'Helyesírás',
              cells: [
                'gyakori rövidítés, ékezet nélküli írás, szándékos elírás',
                'a helyesírási normát követi',
              ],
            },
            {
              label: 'Érzelemkifejezés',
              cells: [
                'emotikon, emoji, betűismétlés (*sziiiaaa*), nagybetű',
                'szavakkal, jelzőkkel, írásjelekkel',
              ],
            },
            { label: 'Visszacsatolás', cells: ['azonnali, gyors válasz', 'késleltetett'] },
            { label: 'Hangnem', cells: ['bizalmas, szleng', 'a helyzethez igazodó'] },
          ],
        },
        {
          kind: 'text',
          text: 'A chat tehát **írásban megvalósított szóbeliség**: a beszélgetés szabályai (rövid megszólalások, szerepcsere, kapcsolatteremtő elemek) megmaradnak, de a hangsúlyt, hanglejtést, mimikát az **emotikonok** és a **tipográfiai eszközök** (nagybetű, ismétlés) pótolják. Fontos a **helyzethez illő** nyelvhasználat: a baráti üzenet nyelve nem lehet a hivatalos e-mail nyelve.',
        },
        {
          kind: 'example',
          title: 'Nyelvi rétegek átírása',
          problem:
            'Írd át hivatalos e-mail stílusba: „sziaa, nem tudok jönni holnap, beteg vagyok :( majd írok :)" (a tanárnak szól).',
          solution:
            '„**Tisztelt Tanárnő!** Sajnálattal jelzem, hogy betegség miatt holnap nem tudok részt venni az órán. Pótlásról további egyeztetést kérek. **Köszönettel:** Kovács Anna." Az átírás megszünteti az **emotikonokat** és az ékezet nélküli, laza írásmódot, és hozzáadja a **megszólítást**, az **indoklást**, az udvarias **kérést** és az **aláírást**.',
        },
        {
          kind: 'heading',
          text: 'Folyamatos és nem folyamatos szövegek, digitális és hagyományos szövegek',
        },
        {
          kind: 'text',
          text: 'A **folyamatos szöveg** mondatokból, bekezdésekből áll (hírcikk, elbeszélés, esszé, levél). A **nem folyamatos szöveg** adatokat rendez más formában: **táblázat, diagram, grafikon, térkép, űrlap, menetrend, lista, hirdetmény, infografika**. A digitális szövegben mindkettő előfordul, és gyakran **vegyes**. A **hagyományos** szöveg lineáris (elejétől végéig olvassuk), a **digitális** szöveg lehet **hiperszöveg**: a linkek mentén saját utat járhatunk be, ezért fontos az **eligazodás**, a lényeg kiemelése.',
        },
        { kind: 'heading', text: 'Az előadás szemléltetése' },
        {
          kind: 'text',
          text: 'A **prezentáció** (bemutató) az előadó mondandóját szemlélteti, nem helyettesíti. Jó, ha **kevés szöveget** tartalmaz (kulcsszavak, nem hosszú mondatok), **olvasható** a betűmérete, a képek, ábrák **a tartalmat segítik**, következetes a stílusa, és a **szerkezet** követi az előadás gondolatmenetét. Rossz, ha az előadó a diáról **felolvas**, vagy ha a dísz (animáció) eltereli a figyelmet.',
        },
        { kind: 'heading', text: 'Internetes adatkeresés és források' },
        {
          kind: 'text',
          text: 'A keresés lépései: **kulcsszavak** kiválasztása, találatok **szűrése**, több **forrás** megnyitása. A **megbízhatóság** szempontjai: ki a **szerző** és a **kiadó** (hivatalos intézmény, szakmai szervezet, egyéni blog), mikor jelent meg (**dátum**, naprakészség), vannak-e **hivatkozások** és **adatok**, más források is megerősítik-e, tényszerű vagy elfogult-e a hangnem. A **hivatkozás** pontos és etikus: szerző, cím, megjelenési hely, év, internetes forrás esetén az elérési cím (URL) és az elérés ideje. A **szó szerinti idézetet** idézőjelbe tesszük és megadjuk a forrást, az átfogalmazott gondolat forrását is jelezzük.',
        },
        {
          kind: 'text',
          text: 'A források összehasonlításánál megadott szempontok szerint (például mit állít, milyen adatokkal, milyen nézőpontból) **táblázatba** rendezheted az állításokat, megállapíthatod az azonosságokat és eltéréseket, majd **következtetést** vonhatsz le.',
        },
        { kind: 'heading', text: 'Az elektronikus média hagyományos és új közlésmódjai' },
        {
          kind: 'text',
          text: '**Hagyományos** elektronikus média: **rádió** és **televízió** (egyirányú, műsorszerkezethez kötött). **Új közlésmódok**: **honlap**, **blog**, **vlog**, **podcast**, **közösségi platformok** (bárki közölhet, interaktív, bármikor elérhető). Társadalmi hatásuk: gyors tájékozódás, demokratikus megszólalás lehetősége, ugyanakkor a **dezinformáció** (félrevezető információ), a **véleménybuborék** és az **információtúlterhelés**.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Emelt szinten** a digitális eszközöket **retorikai szövegek alkotásában** is alkalmazod: grafikus szerkesztővel készített ábra, diagram, **infografika**, **multimédiás** (kép, hang, videó) kiegészítés. Digitális formájú szöveget **magad is megalkothatsz** (például blogbejegyzés, bemutató, honlap). Az írott és az elektronikus tömegkommunikáció szövegtípusait **nyelvi és nem nyelvi tényezők** különítik el: terjedelem, szerkesztés, címadás, kép- és hanghasználat, tempó, interaktivitás. Médiaközlések (hír, kommentár, tudósítás, interjú, cikk, glossza, ismeretterjesztő szöveg) elemzésénél a **tartalmi, szerkezeti és szövegformálási** kritériumokat, a nyelvhasználati és hatásbeli sajátosságokat vizsgálod. A hagyományos és az új elektronikus média **publicisztikai és tájékoztató műfajait** is ismerned kell.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel (a 8. témakörből mindig van egy): „A digitális kommunikáció jellemzői", kapott internetes oldallal, chat-részlettel vagy e-mail-lel.',
            'Szövegértési-nyelvi feladat: internetes oldal, űrlap vagy chat-részlet nyelvi jelenségeinek felismerése (rövidítés, emotikon, szleng, hiperszöveg).',
            'Két forrás összehasonlítása, megbízhatóságuk megítélése, hivatkozás megadása.',
            'Átírás: bizalmas üzenetből hivatalos levél, vagy fordítva.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondd azt, hogy „a digitális nyelv rossz vagy romló nyelv". A **nyelvhasználat a helyzethez igazodik**: a chat-nyelv a chatben természetes, hibás akkor, ha oda nem illő helyzetben (például hivatalos levélben) használod. Az **új szóbeliség** nem a nyelv pusztulása, hanem új funkció.',
        },
        {
          kind: 'example',
          title: 'Vizsgapélda: forrásértékelés',
          problem:
            'Egy diák a „vitaminok hatása a vizsgateljesítményre" témához két forrást talál: egy egyetem kutatási jelentését (szerzők, dátum, hivatkozások) és egy névtelen fórumbejegyzést, ahol valaki azt írja: „én megettem 10 narancsot, és ötös lettem". Melyik a megbízhatóbb, és hogyan hivatkoznál rá?',
          solution:
            'Az **egyetemi jelentés** megbízhatóbb: ismert **szerzők és intézmény**, **dátum**, **adatok és hivatkozások**, módszertani leírás. A fórumbejegyzés **egyedi tapasztalat**, nem ellenőrizhető, a szerző névtelen. Hivatkozás: *Szerző(k): A jelentés címe. Intézmény, év. URL. Letöltés ideje: ÉÉÉÉ. hónap nap.* A szó szerinti idézetet **idézőjelbe** teszem, a saját összefoglalómnál is megadom a forrást.',
        },
        {
          kind: 'tip',
          text: 'A 8. témakör szóbeli tételénél készülj **saját példával**: egy chat-részlet, egy e-mail, egy prezentációdia és egy hírportál-cikk jellemzőit tudd kapcsolni a tételhez. Mondd el, melyik **helyzetben** melyik nyelvi forma helyénvaló.',
        },
      ],
      topicMatch: ['digitális kommunikáció'],
      quiz: [
        {
          question: 'Mit jelent az „új szóbeliség" a chat esetében?',
          options: [
            'A chat csak hangüzenetből áll.',
            'Írásban rögzített, de szóbeli jegyeket (spontaneitás, rövidség, gyors váltás) mutató beszélgetés.',
            'Hivatalos, szerkesztett írásbeli forma.',
            'Egyirányú tömegkommunikáció.',
          ],
          answer: 1,
          explanation:
            'A chat írott, de spontán, rövid megszólalásokból álló párbeszéd, tehát a szóbeliség jegyeit mutatja.',
        },
        {
          question: 'Melyik példa nem folyamatos szöveg?',
          options: ['a hírcikk', 'az elbeszélés', 'a menetrend táblázata', 'a hosszú e-mail'],
          answer: 2,
          explanation:
            'A táblázat adatokat rendez, nem mondatokból és bekezdésekből épül. A hírcikk, az elbeszélés és az e-mail folyamatos szöveg.',
        },
        {
          question: 'Mi jellemzi a hiperszöveget?',
          options: [
            'Mindig szigorúan lineáris olvasást kíván.',
            'Hivatkozásokkal kapcsolódik más szövegekhez, így többféleképpen lehet bejárni.',
            'Csak képekből áll.',
            'Nem lehet digitálisan megjeleníteni.',
          ],
          answer: 1,
          explanation:
            'A hiperszöveg linkek mentén szerveződik, az olvasó maga választja az útját.',
        },
        {
          question: 'Melyik a megbízható internetes forrás egyik jele?',
          options: [
            'Névtelen, dátum nélküli szöveg.',
            'Ismert szerző vagy intézmény, dátum, hivatkozások és adatok.',
            'Sok felkiáltójel és erős érzelmi hangnem.',
            'Csak egyetlen oldalon szerepel az állítás.',
          ],
          answer: 1,
          explanation:
            'A megbízhatóságot a szerző, a kiadó, a naprakészség, a hivatkozások és más források megerősítése mutatja.',
        },
        {
          question: 'Mi a plágium?',
          options: [
            'Egy szöveg helyes idézése forrásmegadással.',
            'Más szellemi alkotásának saját munkaként való feltüntetése.',
            'Az adatok titkosítása.',
            'A prezentáció dizájnja.',
          ],
          answer: 1,
          explanation:
            'A plágium mások szövegének vagy gondolatainak jogosulatlan, forrás nélküli átvétele és sajátként való közlése.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hiperszöveg', url: wiki('Hiperszöveg') },
        { label: 'Wikipédia: Emotikon', url: wiki('Emotikon') },
        { label: 'Wikipédia: Blog', url: wiki('Blog') },
      ],
    },
    {
      id: 'kommunikacio-kulturak-vizualis-jel-hitelesseg',
      subject: 'magyar',
      unitId: 'kommunikacio',
      title: 'Emelt szint: kultúrák, vizuális jel, hitelesség és médiaelemzés',
      level: 'emelt',
      requirement: {
        emelt:
          'A kommunikáció univerzális és interdiszciplináris jellege; különféle társadalmak és kultúrák jelrendszereinek eltérései (folklór, utca, elektronikus kommunikáció); nyelvi és nem nyelvi normák kultúránkénti eltérései; vizuális és nyelvi jel; az internetes információ megbízhatósága, hitelessége: plágium, adatvédelem; digitális eszközök a retorikai szövegekben; médiaközlések elemzése.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A kommunikáció **univerzális** (minden emberi közösségben létezik), de a **jelrendszerek és normák kultúránként eltérnek**.',
            'A **folklór**, az **utca** és az **elektronikus kommunikáció** saját jelrendszerrel, szabályokkal és szókinccsel rendelkezik.',
            'A **vizuális jel** (kép, ikon, ábra) és a **nyelvi jel** (szó) más módon működik: a kép gyorsabban hat, de többértelmű, a szó pontosabb, de nyelvhez kötött.',
            'Az internetes információ **hitelességét** vizsgálni kell. A **plágium** szellemi lopás, az **adatvédelem** pedig a személyes adatok védelme.',
            '**Médiaközlések** elemzésénél a tartalmi, szerkezeti, szövegformálási, nyelvhasználati és hatásbeli szempontokat együtt kell vizsgálni.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'univerzális jelleg',
              text: 'Minden emberi közösségben jelen van, ugyanakkor formái változóak.',
            },
            {
              term: 'kulturális norma',
              text: 'Egy közösség elfogadott szabálya arról, mi helyénvaló (nyelvi és nem nyelvi viselkedés).',
            },
            {
              term: 'plágium',
              text: 'Más szellemi alkotásának a szerző megnevezése nélküli átvétele és saját munkaként való bemutatása.',
            },
            {
              term: 'adatvédelem',
              text: 'A személyes adatok védelme; azé, hogy ki, mire és meddig használhatja az adatainkat.',
            },
            {
              term: 'infografika',
              text: 'Adatok vagy folyamatok képi és szöveges együttes megjelenítése.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Különféle jelrendszerek és kultúrák' },
        {
          kind: 'text',
          text: 'Minden közösségnek megvan a saját **jelrendszere**: nyelve, gesztusai, szokásai, viselkedési normái. Ami az egyik kultúrában udvarias, a másikban sértő lehet. Példák (általánosan ismert különbségek): a **szemkontaktus** tartása egyes kultúrákban tiszteletet, másokban tiszteletlenséget fejez ki; a **térköz** nagysága eltér; a **bólintás** és a fejrázás jelentése nem mindenhol azonos; a köszönés és a megszólítás szabályai (tegezés–magázás) nyelvenként mások. Ezért a **kultúraközi kommunikáció** során nem szabad a saját normáinkat általánosnak tekinteni.',
        },
        {
          kind: 'compare',
          title: 'Három eltérő jelrendszer',
          columns: ['Terület', 'Jellemzői'],
          rows: [
            {
              label: 'Folklór',
              cells: [
                'hagyományos közösségi kommunikáció',
                'szájhagyomány, rögzített formulák (mese-kezdés: „Egyszer volt, hol nem volt…"), mondókák, közmondások, énekek, szokások',
              ],
            },
            {
              label: 'Utca',
              cells: [
                'városi, csoportnyelvi',
                'szleng, becenevek, jelek (graffiti, feliratok), gyors, tömör, csoportidentitást kifejező nyelv',
              ],
            },
            {
              label: 'Elektronikus kommunikáció',
              cells: [
                'digitális térben',
                'emotikon, rövidítés, hashtag, mém, hiperszöveg, saját etikett (netikett)',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Normák összevetése példával',
          problem:
            'Hasonlítsd össze, hogyan köszönünk egy hivatalos és egy bizalmas helyzetben magyar nyelven, és hogyan egy chatben!',
          solution:
            '**Hivatalos:** „Jó napot kívánok!" vagy „Tisztelt…!", kézfogás, magázás. **Bizalmas:** „Szia!", „Sziasztok!", tegezés, esetleg ölelés. **Chat:** „Szia!", „Hali!", gyakran rövid, emojival kísért. A normák **helyzetfüggők** és **közösségfüggők**, ezért a nyelvhasználónak **alkalmazkodnia** kell.',
        },
        { kind: 'heading', text: 'Vizuális és nyelvi jel, vizuális és nyelvi kommunikáció' },
        {
          kind: 'compare',
          title: 'Nyelvi jel és vizuális jel',
          columns: ['Nyelvi jel (szó)', 'Vizuális jel (kép, ikon, ábra)'],
          rows: [
            {
              label: 'Kapcsolat a jelölttel',
              cells: [
                'önkényes, megegyezéses',
                'sokszor hasonlóság alapján (kép, ikon) vagy megegyezéses (szimbólum)',
              ],
            },
            {
              label: 'Felfogás',
              cells: ['lineáris, egymás után olvassuk', 'egyszerre, egészében látjuk'],
            },
            {
              label: 'Pontosság',
              cells: [
                'pontosabb, elvont fogalmakat is kifejez',
                'többértelmű lehet, kontextus kell',
              ],
            },
            { label: 'Hatás', cells: ['gondolati', 'gyorsabb, érzelmi'] },
            {
              label: 'Nyelvi akadály',
              cells: ['van (nyelvhez kötött)', 'kevésbé van (piktogram)'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **vizuális kommunikáció** (képek, ábrák, térképek, grafikonok, filmek, reklámok) és a nyelvi kommunikáció gyakran **együtt** működik: a **kép és a szöveg** kiegészíti vagy ellenpontozza egymást (képaláírás, plakát, infografika, mém). A tipográfia (betűtípus, méret, elrendezés) a szöveg **vizuális oldala** is.',
        },
        { kind: 'heading', text: 'Hitelesség, plágium, adatvédelem' },
        {
          kind: 'text',
          text: 'Az internetes információ **hitelességét** a szerző, a kiadó, a forrásmegjelölés, a naprakészség, az érvek és az adatok, valamint a **több forrással való egyezés** alapján ítéljük meg. **Plágiumnak** számít, ha mások szövegét, gondolatát, képét forrásmegjelölés nélkül saját munkának tüntetjük fel (akkor is, ha átfogalmazzuk, de a forrást nem adjuk meg). Elkerülése: idézőjel és hivatkozás a szó szerinti átvételnél, forrásmegjelölés az átfogalmazásnál, a szerzői jog tiszteletben tartása. Az **adatvédelem** azt jelenti, hogy óvatosan bánunk a **személyes adatokkal** (név, lakcím, fénykép, jelszó): a megosztás előtt mérlegelünk, a nyilvánosan közölt információ nehezen vonható vissza, és Európában jogszabály (az uniós adatvédelmi rendelet, GDPR) is védi az adatainkat.',
        },
        { kind: 'heading', text: 'Digitális szövegalkotás és médiaközlések elemzése' },
        {
          kind: 'text',
          text: 'A retorikai szöveg (például előadás, felszólalás) **szemléltetésére** digitális eszközöket, grafikus szerkesztőket használhatsz (diagram, ábra, infografika, kép). A saját **digitális szövegedhez** (blogbejegyzés, bemutató, honlap) multimédiás kiegészítéseket (kép, hang, videó, hivatkozás) is csatolhatsz. A kiegészítésnek mindig **funkciója** legyen: egyértelműbbé, meggyőzőbbé tegye a mondandót.',
        },
        {
          kind: 'compare',
          title: 'Médiaműfajok röviden',
          columns: ['Műfaj', 'Fő jellemző'],
          rows: [
            {
              label: 'Hír',
              cells: [
                'rövid, tárgyilagos tájékoztató',
                'a legfontosabb információ elöl; ki, mit, hol, mikor',
              ],
            },
            {
              label: 'Tudósítás',
              cells: [
                'egy eseményről helyszíni beszámoló',
                'tényszerű, de a tudósító jelenléte is érezhető',
              ],
            },
            {
              label: 'Interjú',
              cells: [
                'kérdés–felelet formájú beszélgetés',
                'egy személy véleményét, tudását mutatja',
              ],
            },
            {
              label: 'Kommentár',
              cells: ['véleményközlő, elemző írás', 'a szerző állást foglal, érvel'],
            },
            {
              label: 'Glossza',
              cells: ['rövid, szellemes, gyakran ironikus vélemény', 'tömör, csattanós'],
            },
            {
              label: 'Ismeretterjesztő szöveg',
              cells: ['szakmai tudás közérthető átadása', 'magyarázó, példákkal, tagolt'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű szóbeli tétel: kultúrák közötti különbségek bemutatása példákkal, vagy a vizuális és nyelvi kommunikáció összevetése.',
            'Médiaszöveg elemzése: műfaj, szerkezet, nyelvi eszközök, tény és vélemény, hatás.',
            'Forrásértékelés, plágium és adatvédelem: mit tehet a felhasználó?',
            'A reflektáló szöveg írásakor is hivatkozhatsz médiaszövegre, kommunikációs jelenségre, ezért a fogalmak pontos használata előny.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne általánosíts egy kultúrára. Ha kultúrák közti különbséget hozol példának, legyen **konkrét, pontosan megnevezett** példád (mimika, gesztus, megszólítás), és ne állítsd azt, amit nem tudsz biztosan.',
        },
        {
          kind: 'example',
          title: 'Vizsgapélda: médiaközlés elemzése',
          problem:
            'Egy hírportál kommentárja így kezdődik: „Ismét elbukott a város közlekedési terve. Nem csoda: a döntéshozók évek óta csak ígérgetnek." Elemezd a műfajt és a nyelvi eszközöket!',
          solution:
            '**Műfaj:** kommentár (véleményközlő). **Jelei:** a szerző állást foglal („nem csoda"), értékel („elbukott", „csak ígérgetnek"), érvel. **Nyelvi eszközök:** értékelő szavak, általánosítás („évek óta"), a tényközlés (a terv sorsa) és a vélemény együtt jelenik meg. **Hatás:** véleményformálás. **Kritikai észrevétel:** a szöveg egy része nem bizonyított állítás, ezért ellenőrizni kellene az állításokat.',
        },
        {
          kind: 'tip',
          text: 'Emelt szinten az elemzésnél törekedj **rendszerezett** feleletre: **1.** a közlés típusa és funkciója; **2.** szerkezet; **3.** nyelvi és képi eszközök; **4.** hitelesség és szándék; **5.** a hatás és a saját értékelés.',
        },
      ],
      topicMatch: ['plágium', 'adatvédelem', 'vizuális kommunikáció'],
      quiz: [
        {
          question: 'Mit jelent az, hogy a kommunikáció univerzális?',
          options: [
            'Mindenhol pontosan ugyanaz a jelrendszer van.',
            'Minden emberi közösségben létezik, de formái kultúránként eltérnek.',
            'Csak a nyelv a jele.',
            'Csak a technikai eszközökhöz kötött.',
          ],
          answer: 1,
          explanation:
            'A kommunikáció minden emberi közösségre jellemző, a jelrendszerek és normák azonban eltérőek.',
          emelt: true,
        },
        {
          question: 'Melyik a plágium?',
          options: [
            'Egy szöveg szó szerinti idézése idézőjellel és forrással.',
            'Más szövegének átvétele a forrás megnevezése nélkül, saját munkaként.',
            'Saját gondolatok leírása.',
            'Két forrás összehasonlítása.',
          ],
          answer: 1,
          explanation:
            'A plágium lényege, hogy a szerző nevét és forrását elhallgatjuk, és az átvett részt sajátként mutatjuk be.',
          emelt: true,
        },
        {
          question: 'Mi a vizuális jel egyik előnye a nyelvi jellel szemben?',
          options: [
            'Mindig egyértelmű.',
            'Gyorsabban, egészében fogható fel, és kevésbé nyelvhez kötött.',
            'Elvont fogalmakat pontosabban fejez ki.',
            'Nincs szüksége kontextusra.',
          ],
          answer: 1,
          explanation:
            'A kép egyszerre látható, és (például piktogram) a nyelvi akadályt is áthidalhatja, de többértelmű lehet.',
          emelt: true,
        },
        {
          question: 'Melyik műfaj véleményközlő?',
          options: ['hír', 'tudósítás', 'kommentár', 'időjárás-jelentés'],
          answer: 2,
          explanation: 'A kommentár értékel és állást foglal, a többi elsősorban tájékoztat.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kultúraközi kommunikáció', url: wiki('Kultúraközi kommunikáció') },
        { label: 'Wikipédia: Plágium', url: wiki('Plágium') },
        {
          label: 'Wikipédia: Általános adatvédelmi rendelet',
          url: wiki('Általános adatvédelmi rendelet'),
        },
      ],
    },
  ],
};

export default unit;
