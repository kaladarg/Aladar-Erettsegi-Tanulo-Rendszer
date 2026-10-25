import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 7.1 (Nemzetközi együttműködés, globális világ), 7.2 (Politikai intézmények) and 7.3 (Nemzet). */
const unit: GuideUnit = {
  id: 'jelenkor',
  subject: 'tortenelem',
  order: 70,
  title: 'A jelenkor: az Európai Unió, a politikai intézmények és a nemzet',
  requirementRef:
    '7.1 Nemzetközi együttműködés, globális világ, 7.2 Politikai intézmények, 7.3 Nemzet',
  intro:
    'Hogyan működik az Európai Unió, mit mond az Alaptörvény a hatalmi ágakról, hogyan választunk, és milyen helyzetben élnek a határon túli magyarok és a hazai nemzetiségek? A mai világ és a mai Magyarország intézményei, tényszerűen és vitamentesen.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (7. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan. Az intézmények leírása a hatályos jogot (Magyarország Alaptörvénye, 2011) követi; a jogszabályok változhatnak, a vizsgán a követelményben szereplő alapismeretek számítanak.',
  requirements: {
    terms: {
      kozep: [
        'Európai Unió',
        'integráció',
        'euró',
        'Európai Tanács',
        'Európai Unió Tanácsa',
        'Európai Parlament',
        'Európai Bizottság',
        'schengeni egyezmény',
        'közvetett és közvetlen (demokrácia)',
        'demográfia',
        'népességrobbanás',
        'migráció',
        'modern kori (migráció)',
        'multikulturalizmus',
        'párhuzamos társadalom',
        'iszlamizmus',
        'terrorizmus',
        'globalizáció',
        'diszkrimináció',
        'szegregáció',
        'alaptörvény',
        'hatalmi ágak',
        'jogállam',
        'sarkalatos törvények',
        'Alkotmánybíróság',
        'önkormányzat',
        'népszavazás',
        'nemzet',
        'etnikum',
        'identitás',
        'autonómia',
        'kettős állampolgárság',
      ],
      emelt: [
        'Alapjogi Charta',
        'a négy szabadság',
        'lisszaboni szerződés',
        'Európai Unió Bírósága',
        'Európai Központi Bank',
        'transznacionális vállalat',
        'regionalizmus',
        'politikai korrektség',
        'kohéziós alap',
        'parlamenti küszöb',
        'alapvető jogok biztosa (ombudsman)',
        'többségi és arányos választás',
        'Állami Számvevőszék',
        'Kúria',
        'köztársasági elnök',
        'mentelmi jog',
        'parlamenti frakció',
        'interpelláció',
        'ügyészség',
        'polgármester',
        'képviselőtestület',
      ],
    },
    people: {
      kozep: ['Esterházy János', 'Márton Áron', 'Tőkés László', 'Gyurcsány Ferenc'],
      emelt: ['Robert Schuman', 'Sütő András'],
    },
    dates: {
      kozep: [
        '1992 a maastrichti szerződés aláírása',
        '1999 Magyarország belép a NATO-ba',
        '2004 Magyarország csatlakozása az Európai Unióhoz',
        '2012 az Alaptörvény bevezetése',
        '1944–1945 magyarellenes atrocitások',
        '1990 fekete március',
      ],
      emelt: ['1991 visegrádi megállapodás', '2010 törvény a nemzeti összetartozásról'],
    },
    places: {
      kozep: ['Brüsszel', 'Marosvásárhely', 'Székelyföld', 'Csúrog', 'Jarek'],
      emelt: ['Strasbourg', 'Hongkong', 'Brazília', 'Dél-Afrika'],
    },
  },
  pages: [
    {
      id: 'eu-szervei-es-mukodese',
      subject: 'tortenelem',
      unitId: 'jelenkor',
      title: 'Az Európai Unió főbb szervei és működése',
      level: 'kozep',
      requirement: {
        kozep: 'Az Európai Unió főbb szervei és működésük',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **Európai Unió** (EU) európai államok gazdasági és politikai közössége; a **maastrichti szerződés** (aláírva **1992**, hatályba lépett 1993) hozta létre. Magyarország **2004. május 1-je** óta tagja.',
            '**Európai Tanács**: a tagállamok állam- és kormányfői; kijelöli az Unió általános politikai irányát, de nem alkot jogszabályt.',
            '**Európai Unió Tanácsa**: a tagállamok miniszterei; a Parlamenttel együtt **törvényhozó**.',
            '**Európai Parlament**: a polgárok által **közvetlenül választott** képviselők testülete (ötévente), a Tanáccsal együtt dönt a jogszabályokról.',
            '**Európai Bizottság**: az Unió „kormányzati” szerve; **jogszabályt javasol**, végrehajt, őrzi a szerződések betartását. Székhelye **Brüsszel**.',
            'A **schengeni egyezmény** a belső határellenőrzés megszüntetése; az **euró** a közös pénz (Magyarország még nem vezette be).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'integráció',
              text: 'Önálló államok szorosabb gazdasági és politikai együttműködése, egyes hatáskörök közös gyakorlása.',
            },
            {
              term: 'Európai Tanács',
              text: 'Az állam- és kormányfők csúcstalálkozója (az Európai Bizottság elnöke és a Tanács elnöke is részt vesz). Nem azonos az Európai Unió Tanácsával!',
            },
            {
              term: 'Európai Unió Tanácsa',
              text: 'A tagállami miniszterek tanácsa, mindig az adott szakterület minisztereivel ülésezik (például a mezőgazdasági miniszterekkel). Az elnökséget fél évenként más tagállam látja el.',
            },
            {
              term: 'Európai Unió Bírósága',
              text: 'Luxembourgban működik; azt biztosítja, hogy az uniós jogot minden tagállamban egységesen értelmezzék és alkalmazzák.',
              emelt: true,
            },
            {
              term: 'Európai Központi Bank',
              text: 'Frankfurtban székel; az eurót használó országok pénzügyi politikáját irányítja, elsődleges célja az árstabilitás.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi az Európai Unió?' },
        {
          kind: 'text',
          text: 'Az EU **sajátos képződmény**: nem szövetségi állam, de több annál, mint egy hagyományos nemzetközi szervezet. A tagállamok önként **hatásköröket ruháznak át** a közös intézményekre (például a vámpolitika, a versenypolitika, a kereskedelempolitika területén), más területeken (például az oktatás vagy az egészségügy) a tagállamok döntenek, az Unió csak kiegészíti őket. Az Unió jogszabályai a tagállamokban közvetlenül vagy a nemzeti jogba átültetve érvényesülnek, és az uniós jog **elsőbbséget élvez** az ellentétes nemzeti szabályokkal szemben.',
        },
        {
          kind: 'text',
          text: '2020 óta az EU-nak **27 tagállama** van: ebben az évben lépett ki az Egyesült Királyság (**Brexit**). A tagság feltétele a koppenhágai kritériumok teljesítése (stabil demokrácia és jogállam, működő piacgazdaság, az uniós jogszabályok átvétele).',
        },
        { kind: 'heading', text: 'A főbb szervek és feladatuk' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Európai Tanács',
              text: '**Összetétel**: a tagállamok állam- vagy kormányfői. **Feladat**: politikai iránymutatás és a nagy kérdések (például a bővítés, az új szerződések) eldöntése; törvényhozói szerepe nincs. Egy állandó **elnököt** választanak, megbízatása két és fél év, egyszer újraválasztható.',
            },
            {
              term: 'Európai Unió Tanácsa (Miniszterek Tanácsa)',
              text: '**Összetétel**: a tagállamok szakminiszterei. **Feladat**: a Parlamenttel közösen **elfogadja a jogszabályokat** és a költségvetést. Sok kérdésben **minősített többséggel** dönt (a tagállamok legalább 55 százaléka, amelyek az uniós lakosság legalább 65 százalékát adják), néhány érzékeny területen **egyhangúság** kell.',
            },
            {
              term: 'Európai Parlament',
              text: '**Összetétel**: az uniós polgárok által **közvetlenül választott** képviselők, ötéves ciklusra (az utóbbi választás 2024-ben volt). Az országok képviselői létszáma a lakosságukhoz igazodik, Magyarországnak 21 képviselője van. **Feladat**: a Tanáccsal közösen jogalkotás, költségvetés elfogadása, a Bizottság ellenőrzése és jóváhagyása. A képviselők nem országonként, hanem **politikai csoportokban** ülnek. Üléseit fő szabály szerint Strasbourgban és Brüsszelben tartja.',
            },
            {
              term: 'Európai Bizottság',
              text: '**Összetétel**: tagállamonként egy biztos, a testület elnökét a Parlament választja meg. **Feladat**: a jogszabálytervezetek **kidolgozása** (a jogalkotási javaslat joga lényegében az övé), az uniós döntések végrehajtása, a költségvetés végrehajtása és a szerződések „őrzése”. Székhelye Brüsszel.',
            },
            {
              term: 'Európai Unió Bírósága',
              text: 'Luxembourg; az uniós jog egységes értelmezése. A tagállami bíróságok előzetes döntéshozatalra fordulhatnak hozzá.',
              emelt: true,
            },
            {
              term: 'Európai Központi Bank (EKB)',
              text: 'Frankfurt; az euróövezet monetáris politikája. Független a tagállami kormányoktól.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'heading',
          text: 'Hogyan születik egy uniós jogszabály?',
        },
        {
          kind: 'keypoints',
          items: [
            'Az **Európai Bizottság** kidolgozza és benyújtja a javaslatot.',
            'Az **Európai Parlament** és az **Európai Unió Tanácsa** megtárgyalja, módosíthatja, és közösen elfogadja (rendes jogalkotási eljárás).',
            'A **tagállamok** végrehajtják: az irányelveket (direktívákat) a nemzeti jogba kell átültetni, a rendeletek közvetlenül hatályosak.',
          ],
        },
        { kind: 'heading', text: 'Közös pénz és szabad átjárás' },
        {
          kind: 'keypoints',
          items: [
            '**Euró**: a közös pénz készpénzként **2002**-ben jelent meg. Nem minden tagállam használja; Magyarország a forintot használja, és még nem vezette be az eurót.',
            '**Schengeni egyezmény**: 1985-ben jött létre, **1995**-ben lépett életbe, és megszünteti a belső határokon az ellenőrzést. Magyarország **2007. december 21-én** csatlakozott a schengeni térséghez (a légi határokon 2008 márciusától).',
            '**Közös piac**: a tagállamok között nincs vám, az áruk, szolgáltatások, a tőke és a személyek szabadon mozoghatnak.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A közös piac alapja a **négy szabadság**: az **áruk**, a **szolgáltatások**, a **tőke** és a **személyek** szabad áramlása. Ezt egészítette ki az **Alapjogi Charta**, amely az uniós polgárok alapvető jogait foglalja össze (emberi méltóság, szabadságjogok, egyenlőség, szolidaritás, polgári jogok, igazságszolgáltatás). A Chartát 2000-ben hirdették ki, kötelező erőt a lisszaboni szerződés adott neki.',
        },
        { kind: 'heading', text: 'Magyarország és az Unió' },
        {
          kind: 'text',
          text: 'Magyarország 2004. május 1-jén csatlakozott az EU-hoz, a **tíz új tagállam** egyikeként. A csatlakozásról 2003. április 12-én **népszavazást** tartottak: a szavazók több mint 80 százaléka igennel szavazott, a részvétel 46 százalék körül volt. Magyarország két alkalommal látta el a Tanács soros elnökségét: 2011 első felében és 2024 második felében.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szervek párosítása: melyik testület mit csinál (Tanács, Bizottság, Parlament, Európai Tanács).',
            'Forrásrészlet vagy ábra az uniós döntéshozatalról: ki javasol, ki dönt?',
            'Fogalmak: integráció, euró, schengeni egyezmény; rövid magyarázat.',
            'Időrend: 1992 maastrichti szerződés, 1999 NATO, 2004 EU-csatlakozás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az **Európai Tanács** (állam- és kormányfők) és az **Európai Unió Tanácsa** (szakminiszterek) felcserélése, vagy az EU Tanácsának és az Európa Tanácsnak (más szervezet, Strasbourg, emberi jogi egyezmény) összekeverése. A másik tipikus hiba: azt írni, hogy a Parlament „javasolja” a jogszabályokat; a javaslat a Bizottságtól jön.',
        },
        {
          kind: 'tip',
          text: 'Jegyezd meg három mondatban: **Bizottság javasol, Parlament és Tanács dönt**; az **Európai Tanács** pedig csak irányt szab. A Parlament az egyetlen közvetlenül választott szerv.',
        },
      ],
      topicMatch: ['európai integráció'],
      cards: { subject: 'tortenelem', era: 'jelenkor21' },
      quiz: [
        {
          question: 'Melyik uniós szerv tagjai a tagállamok állam- és kormányfői?',
          options: [
            'Európai Bizottság',
            'Európai Tanács',
            'Európai Parlament',
            'Európai Unió Tanácsa',
          ],
          answer: 1,
          explanation:
            'Az Európai Tanács az állam- és kormányfők testülete. Az Európai Unió Tanácsában a szakminiszterek ülnek.',
        },
        {
          question: 'Melyik szerv fogalmazza meg és nyújtja be az uniós jogszabályok tervezetét?',
          options: [
            'Európai Parlament',
            'Európai Központi Bank',
            'Európai Bizottság',
            'Európai Tanács',
          ],
          answer: 2,
          explanation:
            'A jogalkotási javaslat joga lényegében az Európai Bizottságé; a Parlament és a Tanács ezután közösen fogadja el.',
        },
        {
          question: 'Melyik uniós szerv tagjait választják közvetlenül a polgárok?',
          options: [
            'Európai Bizottság',
            'Európai Unió Tanácsa',
            'Európai Tanács',
            'Európai Parlament',
          ],
          answer: 3,
          explanation:
            'Az Európai Parlament képviselőit ötévente közvetlenül választják az uniós polgárok.',
        },
        {
          question: 'Mikor csatlakozott Magyarország az Európai Unióhoz?',
          options: ['2004. május 1.', '1999. március 12.', '2007. december 21.', '2002. január 1.'],
          answer: 0,
          explanation:
            '2004. május 1-jén, tíz új tagállam egyikeként. 1999 a NATO-csatlakozás, 2007 decembere a schengeni csatlakozás, 2002 az euró megjelenésének éve.',
        },
        {
          question: 'Melyik uniós szerv biztosítja az uniós jog egységes értelmezését?',
          options: [
            'Európai Központi Bank',
            'Európai Unió Bírósága',
            'Európai Bizottság',
            'Európai Unió Tanácsa',
          ],
          answer: 1,
          explanation:
            'Az Európai Unió Bírósága (Luxembourg) feladata, hogy az uniós jogot minden tagállamban egységesen értelmezzék.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Európai Unió', url: wiki('Európai Unió') },
        {
          label: 'Wikipédia: Az Európai Unió intézményei',
          url: wiki('Az Európai Unió intézményei'),
        },
        {
          label: 'Wikipédia: Magyarország csatlakozása az Európai Unióhoz',
          url: wiki('Magyarország csatlakozása az Európai Unióhoz'),
        },
      ],
    },
    {
      id: 'europai-integracio-allomasai',
      subject: 'tortenelem',
      unitId: 'jelenkor',
      title: 'Az európai integráció állomásai, Magyarország a nyugati integrációban',
      level: 'emelt',
      requirement: {
        emelt:
          'Az európai integráció főbb állomásai és kérdései: mélyítés és bővítés, nemzetek Európája vagy föderatív Európa; Magyarország a nyugati integrációban (NATO, EU) és a közép-európai együttműködés',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az integráció gondolata a második világháború után született: a háborúk megelőzése és a gazdasági újjáépítés. **Robert Schuman** francia külügyminiszter 1950-es terve nyomán jött létre az **Európai Szén- és Acélközösség** (1951).',
            '**1957**: a **római szerződések** létrehozták az Európai Gazdasági Közösséget (EGK), a „közös piacot”. **1992**: a **maastrichti szerződés** megalapozta az Európai Uniót és az eurót.',
            '**Mélyítés** = új területekre terjed ki az együttműködés (közös pénz, közös határ, közös politikák); **bővítés** = új tagok csatlakoznak.',
            'A vita lényege: **nemzetek Európája** (szuverén államok együttműködése) vagy **föderatív Európa** (az Unió egyre inkább szövetségi állam).',
            'Magyarország útja: **1991** visegrádi megállapodás, **1999** NATO-tagság, **2004** EU-csatlakozás.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'mélyítés',
              text: 'Az integráció elmélyítése: egyre több közös hatáskör, szorosabb együttműködés.',
              emelt: true,
            },
            {
              term: 'bővítés',
              text: 'Új tagállamok felvétele az Unióba.',
              emelt: true,
            },
            {
              term: 'lisszaboni szerződés',
              text: '2007-ben írták alá, 2009. december 1-jén lépett hatályba. Az Európai Tanácsot önálló intézménnyé tette állandó elnökkel, növelte a Parlament jogait, kötelezővé tette az Alapjogi Chartát, és lehetővé tette a tagállami kilépést.',
              emelt: true,
            },
            {
              term: 'kohéziós alap',
              text: 'Az Unió támogatási alapja: az uniós átlagnál szegényebb országok környezetvédelmi és közlekedési beruházásait segíti. A fejlettségi különbségek csökkentését szolgálja.',
              emelt: true,
            },
            {
              term: 'regionalizmus',
              text: 'A régiók, tartományok szerepének erősítése, illetve államok közötti regionális gazdasági és politikai együttműködés kialakítása.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A kezdetektől Maastrichtig' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1950',
              text: 'Robert Schuman bejelenti a francia–német szén- és acéltermelés közös irányítását (Schuman-terv; május 9. az Európa-nap).',
            },
            { date: '1951', text: 'Párizsi szerződés: Európai Szén- és Acélközösség hat taggal.' },
            {
              date: '1957',
              text: 'Római szerződések: Európai Gazdasági Közösség (EGK) és Euratom.',
            },
            {
              date: '1973',
              text: 'Az első bővítés: az Egyesült Királyság, Írország és Dánia csatlakozik.',
            },
            { date: '1979', text: 'Az Európai Parlament első közvetlen választása.' },
            {
              date: '1981–1986',
              text: 'Görögország, majd Spanyolország és Portugália csatlakozik.',
            },
            {
              date: '1992',
              text: 'Maastrichti szerződés aláírása (hatályba lépett 1993): megszületik az Európai Unió, kijelölik az euró bevezetésének útját.',
            },
            {
              date: '1995',
              text: 'Ausztria, Finnország és Svédország csatlakozik; életbe lép a schengeni egyezmény.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az első hat tag (Franciaország, Nyugat-Németország, Olaszország, Belgium, Hollandia, Luxemburg) a háború utáni nyugat-európai újjáépítés és a francia–német kiengesztelődés jegyében kezdte az együttműködést. A keleti blokk országai ebben nem vehettek részt; ők a **KGST** tagjai voltak.',
        },
        { kind: 'heading', text: 'Mélyítés és bővítés' },
        {
          kind: 'compare',
          title: 'Mélyítés és bővítés',
          columns: ['Mélyítés', 'Bővítés'],
          rows: [
            {
              label: 'Mit jelent?',
              cells: ['több közös terület és szorosabb szabályok', 'több tagállam, nagyobb Unió'],
            },
            {
              label: 'Példák',
              cells: [
                'közös pénz (euró), schengeni térség, lisszaboni szerződés',
                '1973, 1981–86, 1995, 2004 (tíz új tag), 2007, 2013',
              ],
            },
            {
              label: 'Kérdés',
              cells: [
                'mennyi hatáskört adjanak át az államok?',
                'mennyire készült fel az új tag, és működőképes marad-e az Unió?',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**2004. május 1-jén** tíz állam csatlakozott egyszerre: Ciprus, Csehország, Észtország, Lengyelország, Lettország, Litvánia, Magyarország, Málta, Szlovákia és Szlovénia. **2007-ben** Bulgária és Románia, **2013-ban** Horvátország következett. A bővítés kelet-közép-európai tagjai jelentős uniós fejlesztési támogatást kaptak (például a kohéziós alapból). 2016-ban az Egyesült Királyság népszavazáson döntött a kilépésről, az ország 2020. január 31-én lépett ki.',
        },
        { kind: 'heading', text: 'Nemzetek Európája vagy föderatív Európa?' },
        {
          kind: 'compare',
          columns: ['Nemzetek Európája', 'Föderatív Európa'],
          rows: [
            {
              label: 'Alapgondolat',
              cells: [
                'szuverén nemzetállamok együttműködése, a döntések fő helye a tagállam',
                'szövetségi jellegű Unió, erős közös intézmények („Európai Egyesült Államok”)',
              ],
            },
            {
              label: 'Döntéshozatal',
              cells: [
                'egyhangúság, a kormányok szerepe (Európai Tanács, Tanács)',
                'több többségi döntés, a Parlament és a Bizottság szerepének erősítése',
              ],
            },
            {
              label: 'Ismert képviselő',
              cells: [
                'Charles de Gaulle francia elnök a „hazák Európáját” hirdette',
                'a föderalisták (például Altiero Spinelli) szerint a közös szuverenitás a megoldás',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A kérdés ma is vitatott: a tagállamok eltérően ítélik meg, hol van a helyes egyensúly a közös döntések és a nemzeti szuverenitás között. Az Unió gyakorlata e kettő között keres kompromisszumot, ezért egyszerre vannak benne kormányközi (Tanács) és szupranacionális (Bizottság, Parlament, Bíróság) elemek.',
        },
        { kind: 'heading', text: 'Magyarország útja a nyugati integrációba' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1990',
              text: 'Magyarország belép az Európa Tanácsba (az egykori keleti blokk első tagjaként).',
            },
            {
              date: '1991',
              text: 'Visegrádi megállapodás (február): Magyarország, Lengyelország és Csehszlovákia együttműködése az integrációért (Csehszlovákia felbomlása után négy ország: Visegrádi Négyek).',
            },
            { date: '1994', text: 'Magyarország beadja az EU-tagsági kérelmét.' },
            {
              date: '1999. március 12.',
              text: 'Magyarország, Csehország és Lengyelország belép a NATO-ba (a csatlakozásról 1997 novemberében népszavazás volt).',
            },
            { date: '2003. április 12.', text: 'Népszavazás az EU-csatlakozásról.' },
            { date: '2004. május 1.', text: 'Magyarország az Európai Unió tagja.' },
          ],
        },
        {
          kind: 'text',
          text: 'A **NATO**-tagság a biztonságpolitikai, az **EU**-tagság a gazdasági és politikai integrációt jelentette. A **Visegrádi Négyek** (V4) a közép-európai együttműködés kerete maradt: a négy ország 2004-ben együtt csatlakozott az EU-hoz. Az együttműködés célja egyeztetés a közös érdekekről, kulturális és gazdasági kapcsolatok (például a Nemzetközi Visegrádi Alap).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt esszé: az európai integráció főbb állomásai a második világháború után.',
            'Forrás: Schuman-nyilatkozat vagy egy uniós szerződés részlete; mit célzott az integráció?',
            'Elemzés: érvek a mélyítés és a bővítés mellett és ellen; nemzetek Európája és föderatív Európa összevetése.',
            'Magyarország útja: időrendi sor, a NATO- és az EU-csatlakozás indokai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a NATO (katonai szövetség, 1999) és az EU (gazdasági-politikai közösség, 2004) felcserélése, vagy az, hogy az EU-t egy „nemzetek feletti államnak” írod le. A vita lényege éppen az, hogy az Unió hova helyezkedik a két végpont között. Ne keverd a **mélyítést** és a **bővítést** sem.',
        },
        {
          kind: 'tip',
          text: 'Esszévázlat: 1) a háború utáni kiindulópont (Schuman-terv, ESZAK), 2) az EGK és a bővítések, 3) Maastricht, az euró és Schengen, 4) a nagy keleti bővítés (2004), 5) Lisszabon, Brexit és az Unió jövőjéről szóló vita, 6) Magyarország helye (V4, NATO, EU). Semleges stílusban érvelj, mindkét álláspontot mutasd be.',
        },
      ],
      topicMatch: ['európai integráció'],
      cards: { subject: 'tortenelem', era: 'jelenkor21' },
      quiz: [
        {
          question:
            'Ki javasolta 1950-ben a francia–német szén- és acéltermelés közös irányítását?',
          options: ['Charles de Gaulle', 'Konrad Adenauer', 'Altiero Spinelli', 'Robert Schuman'],
          answer: 3,
          explanation:
            'Robert Schuman francia külügyminiszter terve nyomán jött létre 1951-ben az Európai Szén- és Acélközösség. Adenauer nyugatnémet kancellárként a tervet támogatta.',
        },
        {
          question: 'Mi a „mélyítés” az európai integráció szóhasználatában?',
          options: [
            'Új tagállamok felvétele.',
            'Az együttműködés kiterjesztése új területekre, a közös hatáskörök növelése.',
            'Az Unió kisebb tagállamainak segítése.',
            'Kilépés az Unióból.',
          ],
          answer: 1,
          explanation:
            'A mélyítés az integráció szorosabbá tétele (például közös pénz), a bővítés pedig új tagok felvétele.',
        },
        {
          question: 'Melyik évszámhoz kapcsolódik a tíz új tagállam egyidejű csatlakozása?',
          options: ['1995', '2007', '2004', '1999'],
          answer: 2,
          explanation:
            '2004. május 1-jén tíz ország csatlakozott, köztük Magyarország. 2007-ben Bulgária és Románia következett.',
        },
        {
          question: 'Mit jelentett a „nemzetek Európája” elképzelés?',
          options: [
            'Szuverén nemzetállamok együttműködését, erős tagállami döntési joggal.',
            'Az államok teljes megszűnését és egyetlen európai állam létrehozását.',
            'A keleti blokk országainak közös szervezetét.',
            'Az euró kötelező bevezetését minden tagállamban.',
          ],
          answer: 0,
          explanation:
            'Ennek szemben áll a föderatív Európa gondolata, ahol a közös intézmények szövetségi jellegűek, és a tagállami szuverenitás egy része átkerül hozzájuk.',
        },
        {
          question: 'Mi a lisszaboni szerződés egyik fontos újítása?',
          options: [
            'Létrehozta az Európai Szén- és Acélközösséget.',
            'Bevezette az eurót készpénzként.',
            'Megszüntette a Parlament jogkörét.',
            'Az Európai Tanácsot állandó elnökkel rendelkező intézménnyé tette.',
          ],
          answer: 3,
          explanation:
            'A lisszaboni szerződés (hatályba lépés: 2009) az Európai Tanácsnak állandó elnököt adott, növelte a Parlament jogait, és kötelezővé tette az Alapjogi Chartát.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Európai integráció', url: wiki('Európai integráció története') },
        { label: 'Wikipédia: Lisszaboni szerződés', url: wiki('Lisszaboni szerződés') },
        { label: 'Wikipédia: Visegrádi Együttműködés', url: wiki('Visegrádi Együttműködés') },
      ],
    },
    {
      id: 'demografia-es-globalis-vilag',
      subject: 'tortenelem',
      unitId: 'jelenkor',
      title: 'Demográfiai változások és a globális világ',
      level: 'kozep',
      requirement: {
        kozep:
          'Demográfiai változások, a népmozgások irányai a világban és Magyarországon 1945-től napjainkig',
        emelt:
          'A világgazdaság átalakulása az ezredfordulón: hagyományos és új centrumok, a globális gazdaság; a globalizáció kulturális hatásai az ezredfordulón',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A világ népessége 1945 óta gyorsan nőtt (**népességrobbanás**): 2022-re elérte a nyolcmilliárdot. A növekedés mára a fejlődő világra koncentrálódik, a fejlett országokban a népesség **öregszik**.',
            '**Népmozgások**: vándorlás a szegényebb térségekből (Afrika, Dél- és Közép-Ázsia, Közel-Kelet) a gazdagabb országok felé; városiasodás.',
            '**Magyarország** népessége az 1980-as évek elején érte el a csúcsát (kb. 10,7 millió), azóta **fogy**: alacsony a gyermekvállalás, nő az átlagéletkor.',
            'Magyarországon 1945 után tömeges népmozgások: **kitelepítések**, **lakosságcsere**, az **1956-os** menekültek, később munkavállalói kivándorlás.',
            '**Globalizáció**: a világ gazdaságának, kultúrájának és politikájának összefonódása; előnyei (kereskedelem, technológia) és társadalmi kihívásai (egyenlőtlenség, párhuzamos társadalmak).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'demográfia',
              text: 'A népesség számával, összetételével és mozgásával foglalkozó tudomány; a népesedési folyamatok leírása.',
            },
            {
              term: 'népességrobbanás',
              text: 'A világ (főként a fejlődő országok) népességének gyors növekedése a 20. század második felében, a halandóság csökkenése miatt.',
            },
            {
              term: 'migráció',
              text: 'Népességmozgás: az emberek lakóhelyének változtatása országon belül vagy országok között. A modern kori migráció fő okai a gazdasági különbségek, a háborúk és a politikai okok.',
            },
            {
              term: 'multikulturalizmus',
              text: 'Egy társadalomban több kultúra egymás mellett élésére építő gondolat és gyakorlat.',
            },
            {
              term: 'párhuzamos társadalom',
              text: 'Amikor egy közösség a befogadó társadalom mellett, attól elkülönülten él, kevés kapcsolattal (nyelv, intézmények, lakóhely tekintetében).',
            },
            {
              term: 'globalizáció',
              text: 'A világ országai és társadalmai közötti gazdasági, politikai és kulturális kapcsolatok összefonódása, kölcsönös függése.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A világ népessége 1945 óta' },
        {
          kind: 'text',
          text: 'A 20. század közepén a világ népessége nagyjából két és fél milliárd volt, 2022-ben érte el a nyolcmilliárdot. A gyors növekedés oka főleg az, hogy az **orvostudomány, a higiénia és a mezőgazdasági termelés** fejlődése csökkentette a halandóságot, a születésszám viszont ott, ahol a társadalom még hagyományos volt, magas maradt (**demográfiai átmenet**). A fejlett országokban a gyermekvállalás csökkent, így a népesség **elöregedik**: egyre több a nyugdíjas, egyre kevesebb az aktív korú. Afrika szubszaharai részén a születésszám még ma is jóval magasabb, mint Európában.',
        },
        { kind: 'heading', text: 'Népmozgások a világban' },
        {
          kind: 'keypoints',
          items: [
            '**Városiasodás**: a világban egyre többen élnek városokban; megjelentek a milliós „megavárosok”.',
            '**Munkaerő-vándorlás**: a második világháború után Nyugat-Európa vendégmunkásokat fogadott (például Törökországból, Dél-Európából); a volt gyarmatokról is sokan érkeztek az anyaországokba.',
            '**Menekültek**: háborúk és politikai válságok miatt (a hidegháború idején, a délszláv háborúkban, a Közel-Keleten) tömegek hagyták el otthonukat.',
            '**Hatás a befogadó társadalmakra**: munkaerő-pótlás és kulturális sokszínűség, de integrációs nehézségek, **diszkrimináció** és ellentétek is, vitatottak a bevándorlási politikák. Egyes helyeken **párhuzamos társadalmak** alakultak ki.',
          ],
        },
        { kind: 'heading', text: 'Magyarország népessége 1945-től' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1946–1948',
              text: 'A magyarországi németek kitelepítése és a magyar–szlovák lakosságcsere.',
            },
            {
              date: '1956',
              text: 'A forradalom leverése után mintegy kétszázezren hagyták el az országot.',
            },
            { date: 'kb. 1980', text: 'A népesség csúcsa: nagyjából 10,7 millió.' },
            {
              date: '1981-től',
              text: 'A halálozás meghaladja a születéseket (természetes fogyás).',
            },
            { date: '1988–1990', text: 'Erdélyi magyar menekültek érkeznek Magyarországra.' },
            { date: '2022', text: 'A népszámlálás szerint a lakosság kb. 9,6 millió.' },
          ],
        },
        {
          kind: 'text',
          text: '**Okok**: az 1950-es években a Rákosi-rendszer gyermekvállalást ösztönző és abortuszt tiltó intézkedései rövid ideig növelték a születésszámot, ám tartósan a **városiasodás**, a nők munkába állása és a családmodell változása csökkentette a gyermekvállalást. Az 1990-es évek óta a termékenységi arányszám nagyjából 1,2 és 1,6 között ingadozik, ami jóval alatta marad a népesség szinten tartásához szükséges 2,1-nek. A várható élettartam emelkedik, de elmarad az uniós átlagtól. Ezért az ország népessége **fogy és öregszik** (**fiatalodó és öregedő társadalom** kettősségéből nálunk az utóbbi jellemző).',
        },
        {
          kind: 'text',
          text: '**Vándorlás**: a rendszerváltozás óta a bevándorlók többsége a szomszédos országokból, főleg magyar nemzetiségűek közül érkezett. A 2004-es EU-csatlakozás után sokan vállaltak munkát nyugat-európai országokban (például Németországban, Ausztriában, az Egyesült Királyságban). A 2010-es évek közepén Magyarország a nyugat-balkáni útvonalon érkező menekültek tranzitországa volt, ami hosszú vitát hozott az uniós menekültpolitikáról.',
        },
        { kind: 'heading', text: 'Globalizáció' },
        {
          kind: 'keypoints',
          items: [
            '**Mozgatórugók**: a tőke és az áruk szabad áramlása, a közlekedés és a távközlés fejlődése, az **internet**, a nemzetközi szervezetek (WTO, EU).',
            '**Következmények**: olcsóbb áruk, új munkahelyek és piacok, de a gazdaságok sebezhetősége (a pénzügyi válságok gyorsan terjednek), a termelés áthelyezése, egyenlőtlenségek.',
            '**Terrorizmus és biztonság**: a 2001. szeptember 11-ei terrortámadás az Egyesült Államok ellen a globális biztonságpolitikát átalakította; a radikális **iszlamizmus** és a terrorizmus elleni küzdelem a 2000-es évek világpolitikájának egyik fő témája lett.',
          ],
        },
        {
          kind: 'heading',
          emelt: true,
          text: 'A világgazdaság átalakulása az ezredfordulón',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Hagyományos centrumok**: az Egyesült Államok, Nyugat-Európa és Japán. **Új centrumok**: a gyorsan fejlődő ázsiai gazdaságok (az „ázsiai kistigrisek”: Dél-Korea, Tajvan, Szingapúr, Hongkong; később **Kína**, majd India), valamint **Brazília** és **Dél-Afrika**, amelyek a feltörekvő gazdaságok csoportjában (BRICS: Brazília, Oroszország, India, Kína, Dél-Afrika) szerepelnek. **Hongkong** nemzetközi pénzügyi központ, 1997 óta Kína különleges közigazgatási térsége. Kína 2001-ben csatlakozott a Kereskedelmi Világszervezethez (WTO), és a világ egyik legnagyobb gazdasága lett.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'transznacionális vállalat',
              text: 'Több országban termelő és értékesítő, nemzeti határokon átnyúló (multinacionális) vállalat; a globális gazdaság fő szereplője. Termelését oda telepíti, ahol az olcsóbb, ezért befolyása nagy az országok gazdaságára.',
              emelt: true,
            },
            {
              term: 'regionalizmus',
              text: 'Régiókon belüli gazdasági-politikai szerveződés (például EU, ASEAN, NAFTA/USMCA); a globalizáció mellett a világgazdaság másik jellemző iránya.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'heading',
          emelt: true,
          text: 'A globalizáció kulturális hatásai',
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: [
            '**Egységesülés**: az angol nyelv világnyelvvé vált; globális márkák, ételek, filmek, zene és a közösségi média átjárják az egész világot.',
            '**Ellentendencia**: a helyi és nemzeti identitás megőrzésének igénye; a vallási és kulturális hagyományokhoz való visszatérés.',
            '**Politikai korrektség**: olyan nyelvi és magatartási normák, amelyek célja, hogy a hátrányos helyzetű vagy kisebbségi csoportokat ne sértsék. Hívei szerint a megkülönböztetés ellen véd, bírálói szerint a szabad véleménynyilvánítást korlátozhatja; a vita ma is zajlik.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Diagram vagy táblázat: a világ és Magyarország népességszámának alakulása; olvass ki trendet, indokold.',
            'Fogalmak: népességrobbanás, migráció, globalizáció, párhuzamos társadalom.',
            'Térkép: a népmozgások fő irányai (dél–észak, kelet–nyugat).',
            'Emelt: a világgazdaság új centrumai, a globalizáció előnyei és hátrányai, kulturális hatásai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a „népességrobbanást” Európára vonatkoztatni (ott éppen a fogyás és öregedés a jellemző), vagy a magyar népességfogyást az 1945 utáni kitelepítésekkel magyarázni. A fogyás fő oka a kevés születés, a kitelepítések csak egy rövid időszak jelenségei. A **migráció** nem azonos a **menekültüggyel**: a menekültek kényszerből indulnak.',
        },
        {
          kind: 'tip',
          text: 'Kérdésnél, hogy mi változott Magyarországon, használd ezt a vázat: **népesség** (csúcs a 1980-as években, azóta fogy), **okok** (kevés születés, öregedés), **vándorlás** (kitelepítés, 1956, kivándorlás, bevándorlás). Globalizációnál mindig mondj egy előnyt és egy hátrányt.',
        },
      ],
      topicMatch: ['demográfia', 'globalizáció'],
      cards: { subject: 'tortenelem', era: 'jelenkor21' },
      quiz: [
        {
          question: 'Mi a „népességrobbanás”?',
          options: [
            'A népesség gyors csökkenése a háborúk miatt.',
            'A világ, főleg a fejlődő országok népességének gyors növekedése a 20. század második felében.',
            'Egy ország népességének öregedése.',
            'A városok népességének csökkenése.',
          ],
          answer: 1,
          explanation:
            'A népességrobbanás a gyors népességnövekedés, amely a halandóság csökkenése miatt a fejlődő világban volt a legerősebb.',
        },
        {
          question: 'Mi jellemzi Magyarország népességét az 1980-as évek eleje óta?',
          options: [
            'Gyors növekedés a bevándorlás miatt.',
            'Változatlan lélekszám.',
            'Fogyás és öregedés.',
            'A népesség megkétszereződése.',
          ],
          answer: 2,
          explanation:
            'A népesség 1980 körül érte el a csúcsát, azóta természetes fogyás jellemző, mert kevesebb gyerek születik, mint ahányan meghalnak.',
        },
        {
          question:
            'Melyik esemény következtében hagyott el Magyarországot mintegy kétszázezer ember?',
          options: [
            'A trianoni békeszerződés',
            'Az 1946–48-as lakosságcsere',
            'Az 1956-os forradalom leverése',
            'Az EU-csatlakozás',
          ],
          answer: 2,
          explanation:
            '1956 végén és 1957 elején mintegy kétszázezren menekültek nyugatra. A lakosságcsere és a kitelepítés más jellegű népmozgás volt.',
        },
        {
          question: 'Mit jelent a „párhuzamos társadalom” fogalma?',
          options: [
            'Két kormány egyidejű működését.',
            'Egy befogadó társadalom mellett attól elkülönülten élő közösséget.',
            'A kétpártrendszert.',
            'A kettős állampolgárságot.',
          ],
          answer: 1,
          explanation:
            'Párhuzamos társadalom: a közösség kevés kapcsolattal él a többségi társadalom mellett, külön intézményekkel és lakóhelyekkel.',
        },
        {
          question: 'Melyik ország tartozik a hagyományos világgazdasági centrumokhoz?',
          options: ['Brazília', 'Dél-Afrika', 'Japán', 'India'],
          answer: 2,
          explanation:
            'A hagyományos centrumok az Egyesült Államok, Nyugat-Európa és Japán; Brazília, Dél-Afrika, India és Kína a feltörekvő gazdaságok közé tartozik.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Demográfia', url: wiki('Magyarország demográfiája') },
        { label: 'Wikipédia: Globalizáció', url: wiki('Globalizáció') },
        { label: 'Wikipédia: Népességrobbanás', url: wiki('Népességrobbanás') },
      ],
    },
    {
      id: 'alaptorveny-es-hatalmi-agak',
      subject: 'tortenelem',
      unitId: 'jelenkor',
      title: 'Az Alaptörvény és a hatalmi ágak intézményei',
      level: 'kozep',
      requirement: {
        kozep: 'Az Alaptörvény, a hatalmi ágak és intézményeik',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Magyarország **Alaptörvényét** az Országgyűlés **2011. április 18-án** fogadta el, **2012. január 1-jén** lépett hatályba; az 1949-es alkotmány (1989-ben átalakítva) helyébe lépett.',
            'Az Alaptörvény szerint az ország **független, demokratikus jogállam**, államformája **köztársaság**, a közhatalom forrása a **nép**.',
            'A **hatalmi ágak megosztásán** alapul: **törvényhozás** (Országgyűlés), **végrehajtás** (Kormány), **bíráskodás** (bíróságok), ezeket ellenőrzi az **Alkotmánybíróság**.',
            'Az **Országgyűlés** 199 tagú, négyéves ciklusra választott; elfogadja a törvényeket, megválasztja a miniszterelnököt.',
            'A **Kormány** a végrehajtó hatalom csúcsa; a miniszterelnököt az Országgyűlés választja.',
            'Az **Alkotmánybíróság** azt vizsgálja, hogy a jogszabályok megfelelnek-e az Alaptörvénynek.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Alaptörvény',
              text: 'Az ország legmagasabb szintű jogszabálya, amelyhez az összes többi jogszabálynak igazodnia kell. A módosításához az összes képviselő kétharmadának szavazata kell.',
            },
            {
              term: 'hatalmi ágak',
              text: 'A hatalom három fő ága: törvényhozó, végrehajtó és bírói. Megosztásuk célja a hatalmi visszaélések megelőzése és a kölcsönös ellenőrzés.',
            },
            {
              term: 'jogállam',
              text: 'Olyan állam, ahol az állami szervek is a jog szabályai szerint működnek, a jogokat bíróság védi, és a törvény mindenkire egyaránt vonatkozik.',
            },
            {
              term: 'sarkalatos törvény',
              text: 'Az Alaptörvény által meghatározott témákban a „sarkalatos” törvényekhez a jelen lévő képviselők kétharmadának szavazata szükséges (például a választási törvény, a nemzetiségek jogai, a bíróságok szervezete).',
            },
            {
              term: 'Alkotmánybíróság',
              text: 'A jogszabályok Alaptörvénnyel való összhangját ellenőrző szerv; tizenöt tagját az Országgyűlés választja kétharmados többséggel tizenkét évre.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az Alaptörvény' },
        {
          kind: 'text',
          text: 'A rendszerváltoztatás után az **1949-es kommunista alkotmányt** nem új szöveg váltotta, hanem 1989-ben alapvetően módosították: kikiáltották a **Magyar Köztársaságot** (1989. október 23.), a többpártrendszer, az alapjogok és a hatalommegosztás elve került bele. Ezt az alkotmányt váltotta fel **Magyarország Alaptörvénye**. Az Országgyűlés 2011. április 18-án fogadta el, április 25-én kihirdették, hatályba **2012. január 1-jén** lépett. Az ország hivatalos neve ettől kezdve **Magyarország**.',
        },
        {
          kind: 'keypoints',
          title: 'Az Alaptörvény szerkezete',
          items: [
            '**Nemzeti hitvallás**: bevezető rész (a nemzeti összetartozás, a történelmi alkotmány vívmányai, a keresztény gyökerek, a Szent Korona).',
            '**Alapvetés**: az állam jellege, a hatalom forrása, a hatalommegosztás, a családdal, a nemzettel, a határon túli magyarokkal kapcsolatos alapelvek.',
            '**Szabadság és felelősség**: az alapvető jogok és kötelezettségek (élethez, emberi méltósághoz, szólásszabadsághoz, gyülekezéshez való jog és mások).',
            '**Az állam**: az Országgyűlés, a Kormány, az Alkotmánybíróság, a bíróságok, az önkormányzatok és más intézmények.',
            '**Különleges jogrend** és **záró rendelkezések**.',
          ],
        },
        {
          kind: 'text',
          text: 'Az Alaptörvény **C. cikke** kimondja, hogy a magyar állam működése a **hatalom megosztásának elvén** alapul. Az Alaptörvényt az elfogadása óta többször módosították. A módosítást az **összes képviselő kétharmada** fogadhatja el, ezért a szövegét nem lehet egyszerű többséggel megváltoztatni.',
        },
        { kind: 'heading', text: 'A hatalmi ágak és intézményeik' },
        {
          kind: 'compare',
          title: 'A három hatalmi ág',
          columns: ['Szerv', 'Fő feladat'],
          rows: [
            {
              label: 'Törvényhozás',
              cells: [
                'Országgyűlés',
                'törvényeket alkot, megválasztja a miniszterelnököt, elfogadja a költségvetést, ellenőrzi a Kormányt',
              ],
            },
            {
              label: 'Végrehajtás',
              cells: [
                'Kormány (miniszterelnök és miniszterek)',
                'irányítja az államigazgatást, végrehajtja a törvényeket, előterjeszti a költségvetést',
              ],
            },
            {
              label: 'Bíráskodás',
              cells: [
                'bíróságok',
                'jogvitákat döntenek el, büntetőügyekben ítélkeznek; függetlenek',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Az Országgyűlés' },
        {
          kind: 'keypoints',
          items: [
            '**199 képviselő**, **négyéves** ciklusra választják őket (a választási rendszerről a következő lecke szól).',
            '**Feladatai**: az Alaptörvény elfogadása és módosítása, **törvényalkotás**, a költségvetés megállapítása, a miniszterelnök megválasztása, a Kormány ellenőrzése, a legfőbb tisztségviselők megválasztása.',
            '**Egykamarás** parlament: egyetlen testület (a Horthy-korszak felsőházához képest).',
            'A törvényjavaslatot benyújthatja a Kormány, egy képviselő vagy egy bizottság. A törvényt a **jelen lévő képviselők többsége** fogadja el, az Alaptörvény által meghatározott témákban kétharmad kell (sarkalatos törvények).',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Parlamenti frakció**: azonos párthoz tartozó képviselők csoportja; megalakításához legalább öt képviselő kell. **Interpelláció**: a képviselő kérdést intéz a Kormány tagjához, az köteles válaszolni, és az Országgyűlés dönt a válasz elfogadásáról. **Mentelmi jog**: a képviselőt védi a politikai üldözéstől; szavazataiért és a parlamentben mondott véleményéért nem vonható felelősségre, büntetőeljárást csak az Országgyűlés hozzájárulásával lehet ellene indítani (tettenérés esetén kivétel). Az Országgyűlést az **Állami Számvevőszék** segíti: a közpénzek felhasználását ellenőrzi.',
        },
        { kind: 'heading', text: 'A Kormány' },
        {
          kind: 'text',
          text: 'A **miniszterelnököt** az Országgyűlés választja az összes képviselő több mint felének szavazatával. A **minisztereket** a miniszterelnök javaslatára nevezik ki. A Kormány felelős az Országgyűlésnek; a parlament **konstruktív bizalmatlansági indítvánnyal** csak úgy tudja megbuktatni, hogy egyúttal új miniszterelnököt jelöl.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **köztársasági elnök** az **államfő**, aki a nemzet egységét fejezi ki, és őrködik az államszervezet demokratikus működése felett. Az Országgyűlés választja öt évre, egyszer újraválasztható, a Magyar Honvédség főparancsnoka. Aláírja és kihirdeti a törvényeket; ha alkotmányossági aggálya van, az **Alkotmánybírósághoz** fordulhat, vagy megfontolásra visszaküldheti a törvényt az Országgyűlésnek (politikai vétó). Politikai szerepe a parlamentáris rendszerben jóval kisebb, mint a miniszterelnöké.',
        },
        { kind: 'heading', text: 'Bíróságok, Alkotmánybíróság, ügyészség' },
        {
          kind: 'keypoints',
          items: [
            '**Bíróságok**: járásbíróságok, törvényszékek, ítélőtáblák és a legfelsőbb szint. A bírák függetlenek, csak a törvénynek vannak alárendelve.',
            '**Alkotmánybíróság**: 15 tagú; megvizsgálhatja, hogy a törvény megfelel-e az Alaptörvénynek; alkotmányjogi panasszal bárki hozzá fordulhat, ha alapvető jogait sérti egy jogszabály alkalmazása.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A bíróságok csúcsa a **Kúria**: a bíróságok jogalkalmazásának egységét biztosítja (2012 előtt Legfelsőbb Bíróság volt a neve). Az **ügyészség** (élén a legfőbb ügyésszel) az állam büntetőigényének érvényesítője: vádat képvisel a bíróság előtt, felügyeli a nyomozást, és védi a közérdeket. Az **alapvető jogok biztosa (ombudsman)** a polgárok alapjogainak védelmét segíti, vizsgálja a hatóságok eljárását; az Országgyűlés választja.',
        },
        {
          kind: 'example',
          title: 'Kinek a feladata?',
          problem:
            'A parlament elfogad egy törvényt, amelyről egy állampolgár úgy gondolja, hogy az Alaptörvényt sérti. Melyik szervhez fordulhat?',
          solution:
            'Az **Alkotmánybírósághoz**. Ha az Alkotmánybíróság a jogszabályt alaptörvény-ellenesnek találja, megsemmisítheti. Ez a hatalmi ágak közötti ellenőrzés egyik példája.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: az Alaptörvény részlete (B., C. cikk vagy a nemzeti hitvallás); mit állapít meg az államformáról, a hatalom forrásáról?',
            'Szervek és feladatok párosítása: Országgyűlés, Kormány, Alkotmánybíróság, bíróság.',
            'Fogalmak: hatalmi ágak, jogállam, sarkalatos törvény.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten még',
          items: [
            'A köztársasági elnök jogköre, a mentelmi jog, az interpelláció, a Kúria, az ügyészség és az ombudsman.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az Alkotmánybíróság és a rendes bíróságok összekeverése. Az **Alkotmánybíróság** jogszabályokat vet össze az Alaptörvénnyel, a bíróságok jogvitákban ítélkeznek. A másik tipikus hiba: azt írni, hogy a miniszterelnököt a köztársasági elnök vagy a nép választja. A miniszterelnököt az **Országgyűlés** választja.',
        },
        {
          kind: 'tip',
          text: 'Egy jó válasz három lépésben mondja el az államszervezetet: ki alkot törvényt (Országgyűlés), ki hajtja végre (Kormány), ki dönt jogvitákban és ki ellenőriz (bíróság, Alkotmánybíróság). Tegyél hozzá egy hivatkozást az Alaptörvényre (a hatalmi ágak megosztása, C. cikk).',
        },
      ],
      topicMatch: ['alaptörvény'],
      quiz: [
        {
          question: 'Mikor lépett hatályba Magyarország Alaptörvénye?',
          options: ['1989. október 23.', '2011. április 18.', '2012. január 1.', '2004. május 1.'],
          answer: 2,
          explanation:
            'Az Alaptörvényt 2011. április 18-án fogadták el, de 2012. január 1-jén lépett hatályba. 1989. október 23-án a Magyar Köztársaságot kiáltották ki.',
        },
        {
          question: 'Melyik szerv választja meg a miniszterelnököt?',
          options: ['A köztársasági elnök', 'Az Országgyűlés', 'A Kormány', 'Az Alkotmánybíróság'],
          answer: 1,
          explanation:
            'A miniszterelnököt az Országgyűlés választja az összes képviselő több mint felének szavazatával.',
        },
        {
          question: 'Melyik a három hatalmi ág?',
          options: [
            'Törvényhozás, végrehajtás, bíráskodás',
            'Kormány, pártok, sajtó',
            'Parlament, önkormányzat, hadsereg',
            'Törvényhozás, ügyészség, adóhatóság',
          ],
          answer: 0,
          explanation:
            'A hatalommegosztás klasszikus három ága a törvényhozó, a végrehajtó és a bírói hatalom.',
        },
        {
          question: 'Mi az Alkotmánybíróság fő feladata?',
          options: [
            'Törvényeket alkot.',
            'Büntetőügyekben ítélkezik.',
            'A Kormányt irányítja.',
            'Azt ellenőrzi, hogy a jogszabályok megfelelnek-e az Alaptörvénynek.',
          ],
          answer: 3,
          explanation:
            'Az Alkotmánybíróság az Alaptörvény védelmét látja el: a jogszabályok alkotmányosságát vizsgálja.',
        },
        {
          question: 'Mi a Kúria?',
          options: [
            'A Kormány tanácsadó testülete.',
            'A bíróságok legfelsőbb szintje.',
            'Az Országgyűlés bizottsága.',
            'A köztársasági elnök hivatala.',
          ],
          answer: 1,
          explanation:
            'A Kúria a bírósági szervezet csúcsa, amely a jogalkalmazás egységét biztosítja (korábban Legfelsőbb Bíróság).',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyarország Alaptörvénye', url: wiki('Magyarország Alaptörvénye') },
        { label: 'Wikipédia: Országgyűlés', url: wiki('Magyar Országgyűlés') },
        { label: 'Wikipédia: Alkotmánybíróság', url: wiki('Alkotmánybíróság Magyarország') },
      ],
    },
    {
      id: 'valasztasi-rendszer-es-onkormanyzatok',
      subject: 'tortenelem',
      unitId: 'jelenkor',
      title: 'A választási rendszer és az önkormányzatok',
      level: 'kozep',
      requirement: {
        kozep: 'Az önkormányzatok és a választási rendszer',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **országgyűlési választás** négyévente van; **18 éves** kortól szavazhat és választható minden magyar állampolgár (a törvényi kizárásoktól eltekintve).',
            'A 199 képviselő egy része **egyéni választókerületben** (106), más része **országos pártlistán** (93) jut mandátumhoz. A választás **egyfordulós**.',
            'Az **önkormányzatok** a helyi közügyek intézői: **települési** és **megyei** önkormányzatok. A helyi választás ötévente van (2014 óta).',
            'A **népszavazás** a közvetlen demokrácia eszköze; a **választás** a közvetett demokráciáé.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'közvetett és közvetlen demokrácia',
              text: 'Közvetett: a polgárok képviselőket választanak, és azok döntenek (országgyűlési választás). Közvetlen: a polgárok maguk döntenek egy kérdésben (népszavazás).',
            },
            {
              term: 'önkormányzat',
              text: 'A helyi közügyek önálló intézése, a lakosság által választott testület és vezető révén. A helyi önkormányzatiság a rendszerváltoztatás egyik vívmánya (1990).',
            },
            {
              term: 'népszavazás',
              text: 'A választópolgárok közvetlen döntése egy kérdésről. Érvényes, ha a választópolgárok több mint fele érvényesen szavazott; eredményes, ha az érvényes szavazatok több mint fele azonos választ adott.',
            },
            {
              term: 'parlamenti küszöb',
              text: 'A listás szavazatok minimális aránya, amely alatt egy párt nem kap listás mandátumot. Célja, hogy a parlament ne aprózódjon szét.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az országgyűlési választás' },
        {
          kind: 'text',
          text: 'Az első szabad, többpárti választást **1990**-ben tartották. A mai választási rendszer a **2011-es választási törvényen** alapul (az Alaptörvény szerint ez **sarkalatos törvény**), és a 2014-es választástól érvényes. Az Országgyűlésnek 199 tagja van (korábban, 1990 és 2010 között 386 volt).',
        },
        {
          kind: 'keypoints',
          title: 'Így választunk',
          items: [
            '**Aktív és passzív választójog**: 18. életévétől mindenki szavazhat és indulhat is. A **magyarországi nemzetiségek** külön listát állíthatnak.',
            '**106 egyéni választókerület**: egy fordulóban az nyer, aki a legtöbb szavazatot kapja (relatív többség).',
            '**93 listás mandátum**: a pártok **országos listára** kapott szavazataik arányában kapnak helyet (az elosztás módja a d’Hondt-módszer).',
            '**Két szavazat**: a választó egy egyéni jelöltre és egy pártlistára szavaz. A **töredékszavazatok** (a vesztes egyéni jelöltekre leadott és a győztes többletszavazatai) a listához hozzáadódnak.',
            '**Határon túli magyarok**: ha magyar állampolgárok, de nincs magyarországi lakcímük, levélben vagy a külképviseleteken a pártlistára szavazhatnak.',
          ],
        },
        {
          kind: 'compare',
          title: 'Két választási elv',
          columns: ['Többségi (egyéni) választás', 'Arányos (listás) választás'],
          rows: [
            {
              label: 'Ki nyer?',
              cells: [
                'a választókerületben a legtöbb szavazatot kapó jelölt',
                'a pártok a szavazatarányuknak megfelelő számú mandátumot kapnak',
              ],
            },
            {
              label: 'Előny',
              cells: [
                'személyes kapcsolat a képviselővel, stabil többség',
                'a szavazatok jobban tükröződnek a parlamentben',
              ],
            },
            {
              label: 'Hátrány',
              cells: [
                'a vesztesekre leadott szavazatok „elvesznek”, kisebb pártok hátrányba kerülnek',
                'több pártra tagolódó parlament, nehezebb koalíció',
              ],
            },
          ],
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A mi rendszerünk **vegyes**: az egyéni mandátumok a **többségi**, a listás mandátumok az **arányos** elvet követik. Az országos listán a **parlamenti küszöb** egy párt esetén 5 százalék; két párt közös listájánál 10, három vagy több párt közös listájánál 15 százalék. A nemzetiségi listák kedvezményes mandátumot kaphatnak; ha nem jutnak be, a nemzetiséget egy **szószóló** képviseli az Országgyűlésben (szavazati joga nincs).',
        },
        { kind: 'heading', text: 'A közvetlen demokrácia: népszavazás' },
        {
          kind: 'text',
          text: 'A választópolgárok **kétszázezer** aláírásával kezdeményezett népszavazást az Országgyűlés köteles kiírni. Magyarországon a rendszerváltoztatás óta több népszavazás volt, például **1997**-ben a NATO-tagságról, **2003**-ban az EU-csatlakozásról (mindkettő igent hozott), **2004**-ben a kettős állampolgárság kérdésében, ami eredménytelen maradt.',
        },
        { kind: 'heading', text: 'Az önkormányzatok' },
        {
          kind: 'text',
          text: 'A **tanácsrendszert** (1950–1990) a rendszerváltoztatás után felváltotta az önkormányzati rendszer: **1990** őszén tartották az első szabad önkormányzati választásokat. Az önkormányzatok a **helyi közügyeket** intézik (a helyi közszolgáltatások, településfejlesztés, intézmények üzemeltetése), saját költségvetéssel gazdálkodnak, de az állam törvényességi felügyelete alatt állnak.',
        },
        {
          kind: 'keypoints',
          items: [
            '**Települési önkormányzatok**: községek, városok, valamint Budapest kerületei. A **fővárosban** a kerületi és a Fővárosi Önkormányzat is működik (23 kerület).',
            '**Megyei önkormányzatok**: területfejlesztési és koordinációs feladatokat látnak el.',
            '**Helyi választás**: a lakosság közvetlenül választja a település vezetőjét és a helyi testületet. A ciklus öt év (2014, 2019, 2024).',
            'Az önkormányzatok mellett működnek a **nemzetiségi önkormányzatok** is (lásd a nemzetiségekről szóló leckét).',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **képviselőtestület** a döntéshozó testület (rendeletet alkot, elfogadja a költségvetést), a **polgármester** a települési önkormányzat vezetője, a testület ülését vezeti, és végrehajtja a döntéseket; a lakosság közvetlenül választja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szöveges vagy ábrás forrás a választási rendszerről (egyéni és listás mandátum, küszöb): mit lehet kiolvasni?',
            'Fogalmak: népszavazás, közvetlen és közvetett demokrácia, önkormányzat.',
            'Rövid válasz: milyen intézményekben vehet részt a polgár a helyi közéletben?',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten még',
          items: ['Többségi és arányos választás összehasonlítása, a parlamenti küszöb szerepe.'],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy minden mandátum listáról kerül ki, vagy hogy a rendszer „tisztán arányos”. Magyarországon **vegyes** a rendszer. Ne keverd az **1990 előtti tanácsokat** a mai önkormányzatokkal sem: a tanácsok az egypárti rendszer helyi szervei voltak.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Ha a vizsgán kérdezik, miért van parlamenti küszöb, két érvet mondj: a parlament ne aprózódjon szét (stabil kormányzás), és hatékonyabb legyen a döntéshozatal. Hozz egy ellenérvet is: a küszöb alatt maradó pártokra szavazók véleménye nem jelenik meg a parlamentben.',
        },
      ],
      topicMatch: ['választási rendszer'],
      quiz: [
        {
          question: 'Hány képviselője van az Országgyűlésnek?',
          options: ['386', '199', '152', '106'],
          answer: 1,
          explanation:
            '199 képviselő (106 egyéni, 93 listás). A 386 a 2010-ig érvényes létszám volt, a 106 az egyéni választókerületek száma.',
        },
        {
          question: 'Milyen a magyar országgyűlési választási rendszer?',
          options: [
            'Kizárólag egyéni (többségi).',
            'Kizárólag listás (arányos).',
            'Vegyes: egyéni és listás elemek együtt.',
            'Az elnök nevezi ki a képviselőket.',
          ],
          answer: 2,
          explanation:
            'A képviselők egy részét egyéni választókerületben, más részét pártlistáról választják.',
        },
        {
          question: 'Mi a népszavazás?',
          options: [
            'A képviselők szavazása az Országgyűlésben.',
            'Az önkormányzati képviselőtestület döntése.',
            'A választópolgárok közvetlen döntése egy kérdésben.',
            'A Kormány tagjainak megválasztása.',
          ],
          answer: 2,
          explanation:
            'A népszavazás a közvetlen demokrácia eszköze: a választópolgárok maguk döntenek egy kérdésről.',
        },
        {
          question:
            'Mikor tartották az első szabad önkormányzati választásokat a rendszerváltoztatás után?',
          options: ['1990', '1985', '1994', '2004'],
          answer: 0,
          explanation:
            '1990 őszén, ekkor váltotta fel az önkormányzati rendszer a tanácsrendszert.',
        },
        {
          question: 'Mi a parlamenti küszöb?',
          options: [
            'A képviselők minimális életkora.',
            'A listás szavazatok minimális aránya, amelyet a pártnak el kell érnie a listás mandátumhoz.',
            'A törvényjavaslatok minimális száma egy ülésen.',
            'A polgármester-jelöltek ajánlóíveinek száma.',
          ],
          answer: 1,
          explanation:
            'Ha egy párt listája nem éri el a küszöböt (egyedül induló pártnál 5 százalék), nem kap listás mandátumot.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Magyarországi országgyűlési választások',
          url: wiki('Magyarországi országgyűlési választások választási rendszer'),
        },
        { label: 'Wikipédia: Önkormányzat', url: wiki('Magyarországi települési önkormányzat') },
        { label: 'Wikipédia: Népszavazás Magyarországon', url: wiki('Népszavazás Magyarországon') },
      ],
    },
    {
      id: 'hataron-tuli-magyarok-es-nemzetisegek',
      subject: 'tortenelem',
      unitId: 'jelenkor',
      title: 'Nemzet és kisebbségek: a határon túli magyarok és a magyarországi nemzetiségek',
      level: 'kozep',
      requirement: {
        kozep:
          'A határon túli magyarok helyzete napjainkban (demográfia, asszimiláció, autonómia, oktatás); a magyarországi nemzetiségek és a cigányság helyzete napjainkban (demográfia, kisebbségi jogok, oktatás)',
        emelt:
          'A politikai rendszerek változásai és hatásaik a magyar kisebbségekre és a magyarországi nemzetiségekre a 20. században',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Trianon után a magyarság egy része a szomszédos országokban (**Románia, Szlovákia, Szerbia, Ukrajna**, kisebb számban Horvátország, Szlovénia, Ausztria) maradt. Számuk a legutóbbi népszámlálások szerint összesen mintegy másfél-két millió.',
            '**Demográfiai trend**: a határon túli magyarok száma csökken (alacsony gyermekvállalás, kivándorlás, **asszimiláció**).',
            '**Jogi helyzet** országonként eltér: autonómia, nyelvhasználat, oktatás és képviselet kérdései. Magyarország **kettős állampolgárságot** (egyszerűsített honosítás, 2011-től) és támogatásokat nyújt.',
            'Magyarországon a törvény **13 nemzetiséget** ismer el: a legnagyobb a **roma (cigány)**, majd a **német** és a **román** és mások. Jogaikat a **nemzetiségi törvény** biztosítja.',
            'A **cigányság** helyzetét a hátrányos helyzet, a szegregáció és az oktatási lemaradás jellemzi; az integráció kiemelt társadalmi kérdés.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'asszimiláció',
              text: 'Beolvadás: egy kisebbség fokozatosan átveszi a többség nyelvét és kultúráját, s elveszíti saját identitását.',
            },
            {
              term: 'autonómia',
              text: 'Önrendelkezés: valamely közösség saját ügyeiben önállóan dönthet. Lehet kulturális (nyelv, oktatás, intézmények) vagy területi (meghatározott terület önkormányzata).',
            },
            {
              term: 'kettős állampolgárság',
              text: 'Valaki egyszerre két állam állampolgára. A határon túli magyarok kérhetik a magyar állampolgárságot is; az erről szóló 2004-es népszavazás eredménytelen volt, a szabályt 2010-ben törvény teremtette meg.',
            },
            {
              term: 'szegregáció',
              text: 'Elkülönítés: egy csoport (például az iskolában, a lakóhelyen) elkülönül a többségtől, kevesebb lehetőséggel.',
            },
            {
              term: 'diszkrimináció',
              text: 'Hátrányos megkülönböztetés származás, nem, vallás vagy más tulajdonság miatt.',
            },
          ],
        },
        {
          kind: 'map',
          title: 'Magyarok a Kárpát-medencében, a mai határon túl',
          places: [
            { name: 'Kolozsvár', lat: 46.77, lon: 23.6, note: 'Erdély, Románia' },
            {
              name: 'Marosvásárhely',
              lat: 46.54,
              lon: 24.56,
              note: 'itt volt a „fekete március” 1990-ben',
            },
            { name: 'Csíkszereda', lat: 46.36, lon: 25.8, note: 'Székelyföld' },
            { name: 'Nagyvárad', lat: 47.05, lon: 21.93, note: 'Partium, Románia' },
            {
              name: 'Temesvár',
              lat: 45.75,
              lon: 21.23,
              note: '1989: a romániai forradalom kezdete',
            },
            { name: 'Komárom (Komárno)', lat: 47.76, lon: 18.13, note: 'Felvidék, Szlovákia' },
            { name: 'Dunaszerdahely', lat: 47.99, lon: 17.62, note: 'Szlovákia, Csallóköz' },
            { name: 'Szabadka', lat: 46.1, lon: 19.67, note: 'Vajdaság, Szerbia' },
            { name: 'Újvidék', lat: 45.25, lon: 19.84, note: 'Vajdaság, Szerbia' },
            { name: 'Beregszász', lat: 48.2, lon: 22.65, note: 'Kárpátalja, Ukrajna' },
            { name: 'Lendva', lat: 46.56, lon: 16.46, note: 'Muravidék, Szlovénia' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A határon túli magyarok helyzete napjainkban' },
        {
          kind: 'text',
          text: '**Demográfia**: Trianon után a történelmi Magyarország területén élő magyarok közül több mint hárommillió került az utódállamokba. Ma a legnagyobb közösség **Romániában** él (a legutóbbi népszámlálás szerint kb. egymillió fő, a lakosság hat százaléka, főleg Erdélyben, a Székelyföldön és a Partiumban). **Szlovákiában** (Felvidék) a magyarok száma 400 ezer fölött van (a lakosság kb. nyolc százaléka), **Szerbiában** (Vajdaság) kb. 180–250 ezer, **Ukrajnában** (Kárpátalja) mintegy 150 ezer, Horvátországban, Szlovéniában (Muravidék) és Ausztriában (Burgenland) pedig néhány ezer-néhány tízezer. A számok a népszámlálásoktól függően eltérnek, és a trend mindenhol **csökkenő**.',
        },
        {
          kind: 'keypoints',
          title: 'Miért csökken a számuk?',
          items: [
            '**Alacsony gyermekvállalás** és a népesség öregedése.',
            '**Kivándorlás** (Magyarországra, Nyugat-Európába), főleg a fiatalok körében.',
            '**Asszimiláció**: a vegyes házasságok, a többségi nyelvű oktatás és a munkahelyi, hivatali nyelvhasználat miatt sokan a többségi nemzethez kötődnek.',
            'A népszámlálásokban sokan nem vallják magukat magyarnak, ezért a valós szám a hivatalosnál valamivel nagyobb lehet.',
          ],
        },
        {
          kind: 'heading',
          text: 'Jogi helyzet, autonómia és oktatás',
        },
        {
          kind: 'compare',
          title: 'Országonként eltérő keretek',
          columns: ['Ország', 'Jellemzők'],
          rows: [
            {
              label: 'Románia',
              cells: [
                'Erdély, Partium',
                'magyar nyelvű oktatás az óvodától az egyetemig (például Babeș–Bolyai Tudományegyetem magyar tagozata, Sapientia); a nyelv hivatali használata ott, ahol a magyarok aránya eléri a 20 százalékot; a területi autonómia (Székelyföld) régóta vitatott',
              ],
            },
            {
              label: 'Szlovákia',
              cells: [
                'Felvidék',
                'magyar tanítási nyelvű iskolák, Selye János Egyetem Komáromban; saját magyar párt a parlamentben, nyelvhasználati törvények körüli viták',
              ],
            },
            {
              label: 'Szerbia',
              cells: [
                'Vajdaság',
                'a tartomány autonómiát élvez; a magyarok nemzeti tanáccsal (kulturális önkormányzat) rendelkeznek; magyar nyelvű oktatás',
              ],
            },
            {
              label: 'Ukrajna',
              cells: [
                'Kárpátalja',
                'magyar iskolák és a II. Rákóczi Ferenc Kárpátaljai Magyar Főiskola Beregszászon; az oktatási nyelvtörvény (2017) körül viták; a háború nehéz helyzetet teremtett',
              ],
            },
            {
              label: 'Szlovénia',
              cells: [
                'Muravidék',
                'a magyar közösség a parlamentben garantált képviselettel rendelkezik; kétnyelvű oktatás és hivatalok',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Magyarország támogatása**: az Alaptörvény **D. cikke** szerint Magyarország felelősséget visel a határain kívül élő magyarok sorsáért, és segíti közösségeik fennmaradását. Ennek eszközei: **kulturális és oktatási támogatások**, ösztöndíjak, és a **kedvezményes (egyszerűsített) honosítás** 2011-től, amellyel magyar származású, magyarul tudó személyek állampolgárságot kaphatnak lakóhely nélkül is. Az első évtizedben a becslések szerint közel egymillió ember kapott magyar állampolgárságot (a pontos szám forrásonként eltér). A **2004-es népszavazás** a kettős állampolgárságról azért maradt eredménytelen, mert az igen szavazatok aránya nem érte el a választójogosultak 25 százalékát.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Márton Áron',
              text: 'Gyulafehérvári római katolikus püspök (1938-ban nevezték ki), az erdélyi magyarság szellemi vezetője; a kommunista rendszer 1949-ben letartóztatta, hosszú évekig fogva tartották. Az identitás és a hit megőrzésének jelképe.',
            },
            {
              name: 'Tőkés László',
              text: 'Erdélyi református lelkész, a temesvári tiltakozás kirobbantója (1989 decembere), amely a romániai diktatúra megdöntéséhez vezetett; később püspök és európai parlamenti képviselő.',
            },
            {
              name: 'Esterházy János',
              text: 'A felvidéki magyarság politikusa; a források szerint a második világháború alatt a szlovák parlamentben egyedüliként nem szavazta meg a zsidók deportálását lehetővé tévő törvényt. A kommunista rendszer elítélte, 1957-ben fogságban halt meg.',
            },
          ],
        },
        { kind: 'heading', text: 'A magyarországi nemzetiségek és a cigányság' },
        {
          kind: 'text',
          text: 'Magyarországon a nemzetiségekről szóló törvény (2011) **13 nemzetiséget** ismer el: bolgár, görög, horvát, lengyel, német, örmény, roma, román, ruszin, szerb, szlovák, szlovén és ukrán. Lélekszámuk a népszámlálások szerint együtt a lakosság néhány százaléka. A legnagyobb a **roma (cigány)** közösség (a népszámlálásokban sokan nem vallják magukat romának, ezért a valós szám jóval nagyobb, a becslések eltérnek), utána a **német** és a **román** következik.',
        },
        {
          kind: 'keypoints',
          title: 'Kisebbségi jogok és oktatás',
          items: [
            '**Jogok**: anyanyelv-használat, kultúra ápolása, saját szervezetek. A nemzetiségek **önkormányzatokat** hozhatnak létre (helyi, területi és országos szinten), amelyek a kultúra és az oktatás ügyeiben dönthetnek.',
            '**Parlamenti képviselet**: a nemzetiségek listát állíthatnak, vagy ha nem jutnak mandátumhoz, szószólót küldhetnek az Országgyűlésbe.',
            '**Oktatás**: nemzetiségi nyelvet oktató és kétnyelvű iskolák, nemzetiségi óvodák; a nemzetiségi tanítási nyelvű oktatás kevés intézményben van.',
            '**Asszimiláció**: a nemzetiségek nyelvhasználata erősen visszaszorult, sokan csak a nyelvoktatásban találkoznak anyanyelvükkel.',
          ],
        },
        {
          kind: 'text',
          text: 'A **roma közösség** helyzetét a **hátrányos helyzet** jellemzi: magasabb munkanélküliség, alacsonyabb iskolai végzettség, rosszabb lakhatási és egészségügyi mutatók, az elmaradott térségekben koncentráltan. Gyakran jelenik meg **szegregáció** (elkülönült iskolai osztályok, lakóterületek) és **diszkrimináció**. Az állam, az Unió és civil szervezetek integrációs programokat működtetnek (iskolai felzárkóztatás, ösztöndíjak, foglalkoztatás). A kérdésben ma is vita folyik arról, mi a leghatékonyabb eszköz.',
        },
        {
          kind: 'heading',
          emelt: true,
          text: 'Emelt: a politikai rendszerek hatása a 20. században',
        },
        {
          kind: 'timeline',
          emelt: true,
          items: [
            {
              date: '1920',
              text: 'Trianon: több millió magyar kerül az utódállamokba, kisebbségi sorba.',
              emelt: true,
            },
            {
              date: '1938–1941',
              text: 'A bécsi döntések és a katonai előrenyomulás miatt átmenetileg visszatér a Felvidék déli sávja, Kárpátalja, Észak-Erdély és a Délvidék.',
              emelt: true,
            },
            {
              date: '1944–1945',
              text: 'Magyarellenes atrocitások, bosszúhadjáratok (például a Délvidéken, Csúrogon és Zsablyán); a becslések az áldozatok számát illetően jelentősen eltérnek.',
              emelt: true,
            },
            {
              date: '1945–1948',
              text: 'Kitelepítések, lakosságcsere; Csehszlovákiában a Beneš-dekrétumok kollektív bűnösséget mondtak ki a magyarokra és németekre.',
              emelt: true,
            },
            {
              date: '1952–1968',
              text: 'Romániában Magyar Autonóm Tartomány létezik Székelyföldön (a név később változott).',
              emelt: true,
            },
            {
              date: '1959',
              text: 'A kolozsvári magyar Bolyai Egyetemet egyesítik a román Babeș Egyetemmel.',
              emelt: true,
            },
            {
              date: '1980-as évek',
              text: 'A Ceaușescu-rendszer asszimilációs politikája, a falurombolási terv; erdélyi menekültek érkeznek Magyarországra.',
              emelt: true,
            },
            {
              date: '1989–1990',
              text: 'A rendszerváltozások új jogi lehetőségeket nyitnak; 1990 márciusában Marosvásárhelyen magyarok és románok összecsapnak („fekete március”).',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **Horthy-korszakban** a Trianon utáni **revíziós politika** a határon túli magyarokat is a magyar nemzet részeként kezelte. A **kommunista rendszerekben** az állam kisebbségpolitikája a **proletár internacionalizmus** jegyében a nemzeti kérdést „megoldottnak” tekintette, a gyakorlatban a többségi nemzeti államot erősítette, a kisebbségi intézményeket korlátozta (iskolák, egyetemek, sajtó), és asszimilációs nyomást gyakorolt. Magyarország a határon túli magyarok ügyét 1989-ig csak korlátozottan, a szomszédos szocialista országok viszonyára tekintettel vethette fel. **Magyarországon** a nemzetiségek a Horthy-korszakban és a második világháború alatt is kisebbségi helyzetben éltek; a **németek** kitelepítése (1946–1948) és a **szlovákok** lakosságcseréje a nemzetiségi közösségeket súlyosan érintette. A **roma** közösséget a háború idején üldözték, a szocialista rendszer pedig társadalmi, nem etnikai csoportként kezelve **asszimilációra** törekedett (az MSZMP 1961-es határozata is így fogalmazott).',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Sütő András** (1927–2006) erdélyi magyar író, az erdélyi magyar irodalom és közélet meghatározó alakja; az 1990. márciusi marosvásárhelyi események során súlyosan megsérült, és ez a határon túli magyarok sorsának jelképévé tette. A **2010-es törvény a nemzeti összetartozásról** kimondta, hogy a magyar nemzet egysége határokon átível, és június 4-ét, a trianoni békeszerződés aláírásának napját a **Nemzeti Összetartozás Napjává** nyilvánította.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Statisztika vagy térkép: magyarok száma és aránya a szomszédos országokban; milyen trendet mutat?',
            'Fogalmak: asszimiláció, autonómia, kettős állampolgárság, szegregáció.',
            'Rövid válasz: milyen eszközökkel segíti Magyarország a határon túli magyarokat, vagy milyen jogok illetik meg a nemzetiségeket?',
            'Emelt: hogyan hatott a politikai rendszer (Horthy-korszak, kommunizmus) a kisebbségekre.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a „nemzetiség” (a magyarországi kisebbség) és a „határon túli magyar” (a szomszéd országokban élő magyar) összekeverése. Ne írj pontos létszámokat, ha nem vagy biztos; a népszámlálások és a becslések eltérnek. Tartsd meg a semleges, tényszerű stílust, és ne értékelj politikai szereplőket.',
        },
        {
          kind: 'tip',
          text: 'A „helyzet napjainkban” típusú kérdésnél három szempontot nézz meg: **népességszám és trend**, **jogok és képviselet**, **oktatás és nyelvhasználat**. Ha két csoportot kell összevetni (például a romániai magyarokat és a hazai nemzetiségeket), mondj közös és eltérő vonásokat is.',
        },
      ],
      topicMatch: ['határon túli magyarok', '=nemzetiségek'],
      quiz: [
        {
          question: 'Melyik országban él a legtöbb határon túli magyar?',
          options: ['Szlovákia', 'Ukrajna', 'Szerbia', 'Románia'],
          answer: 3,
          explanation:
            'Romániában, főleg Erdélyben él a legnagyobb határon túli magyar közösség (kb. egymillió fő).',
        },
        {
          question: 'Mit jelent az asszimiláció?',
          options: [
            'A kisebbség külön államot alapít.',
            'A kisebbség fokozatosan beolvad a többségi társadalomba.',
            'A kisebbség autonómiát kap.',
            'A kisebbség kivándorol.',
          ],
          answer: 1,
          explanation:
            'Az asszimiláció beolvadást jelent: a közösség átveszi a többség nyelvét és kultúráját.',
        },
        {
          question: 'Hány nemzetiséget ismer el a magyar törvény?',
          options: ['3', '7', '13', '22'],
          answer: 2,
          explanation:
            'A nemzetiségekről szóló törvény 13 hazai nemzetiséget ismer el; közülük a roma a legnagyobb.',
        },
        {
          question: 'Mi történt 1990 márciusában Marosvásárhelyen?',
          options: [
            'Magyarok és románok összecsapása, a „fekete március”.',
            'Aláírták a trianoni békét.',
            'Magyarország csatlakozott a NATO-hoz.',
            'Népszavazás volt a kettős állampolgárságról.',
          ],
          answer: 0,
          explanation:
            'A „fekete március” az 1990. márciusi marosvásárhelyi etnikai összecsapás; halálos áldozatai és sebesültjei is voltak.',
        },
        {
          question: 'Mit mond ki a 2010-es törvény a nemzeti összetartozásról?',
          options: [
            'Június 4-ét a Nemzeti Összetartozás Napjává nyilvánítja.',
            'Eltörli a kettős állampolgárságot.',
            'Új nemzetiséget ismer el.',
            'Megszünteti a nemzetiségi önkormányzatokat.',
          ],
          answer: 0,
          explanation:
            'A törvény a trianoni békeszerződés aláírásának napját (június 4.) a Nemzeti Összetartozás Napjává tette, és a nemzet egységét hangsúlyozza.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Határon túli magyarok', url: wiki('Határon túli magyarok') },
        { label: 'Wikipédia: Magyarországi nemzetiségek', url: wiki('Magyarország nemzetiségei') },
        { label: 'Wikipédia: Magyarországi romák', url: wiki('Magyarországi romák') },
      ],
    },
  ],
};

export default unit;
