import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv: Ember és nyelvhasználat (3. témakör). */
const unit: GuideUnit = {
  id: 'ember-es-nyelvhasznalat',
  subject: 'magyar',
  order: 6,
  title: 'Ember és nyelvhasználat',
  requirementRef: 'Nyelv 3. Ember és nyelvhasználat',
  intro:
    'Hogyan függ össze a nyelv a gondolkodással és a jelekkel? Milyen változatai vannak a nyelvnek (köznyelv, nyelvjárások, szleng, szaknyelv), hogyan élnek együtt a nyelvek a Kárpát-medencében, és mit akar a nyelvpolitika, a nyelvi tervezés és a nyelvművelés? Sok felismerési példával, mert a vizsga is szövegrészletet ad, és azt kell elemezned.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Nyelv 3. témakör: Ember és nyelvhasználat). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan. Egyes fogalmak elnevezése és beosztása tankönyvenként eltér, ezért a saját tankönyvedet is nézd meg.',
  pages: [
    {
      id: 'nyelv-gondolkodas-jelek-jelrendszerek',
      subject: 'magyar',
      unitId: 'ember-es-nyelvhasznalat',
      title: 'Nyelv, gondolkodás és jelek',
      level: 'both',
      requirement: {
        kozep:
          'A nyelv és gondolkodás, a nyelv és megismerés; a nyelv mint jelrendszer; a jel, jelek, jelrendszerek a nyelvi és nem nyelvi közlésben.',
        emelt:
          'A nyelv szerepe a világról formált tudásunkban; az emberiség információs forradalmai; a nyelv és a kultúra viszonya; a nyelvi jel sajátosságai; a jeltípusok.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **nyelv és a gondolkodás** szorosan összefügg: a nyelv a gondolatok kifejezésének és közlésének eszköze, a szavak **fogalmakat** rögzítenek, ezért a nyelv a **megismerés** és a tudás tárolásának is az eszköze.',
            'A kettő **nem azonos**: gondolkodni szavak nélkül is lehet (képekben, mozdulatokban, zenében), de a bonyolult, elvont gondolkodás nyelv nélkül aligha működik.',
            '**Jel**: valami, ami valami másra utal. A **nyelvi jel** hangalakból (jelölő) és jelentésből (jelölt) áll, és a nyelv **jelrendszer**: jelekből és kapcsolási szabályokból épül fel.',
            '**Nem nyelvi jel** is sok van: gesztus, arckifejezés, piktogram, közlekedési tábla, zászló, Morse-jelek. A nyelv ezek közül a legösszetettebb, mert vele **bármiről** lehet beszélni.',
            'Emelt szinten kell a **nyelvi jel sajátosságait** (önkényesség, lineáris, tagolt), a **jeltípusokat** (ikon, index, szimbólum), az **információs forradalmakat** és a nyelv–kultúra kapcsolatot is ismerni.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'jel',
              text: 'Érzékelhető valami (hang, kép, mozdulat), amely a megegyezés vagy a hasonlóság alapján valami másra utal.',
            },
            {
              term: 'jelrendszer',
              text: 'Jelek és a használatukat szabályozó törvényszerűségek összessége (nyelv, Morse-ábécé, KRESZ-táblák).',
            },
            {
              term: 'nyelvi jel',
              text: 'Hangalak (jelölő) és jelentés (jelölt) összekapcsolódása: például a *ház* hangsora és a „lakóépület” fogalma.',
            },
            {
              term: 'megismerés',
              text: 'A világ tapasztalatainak feldolgozása, fogalmakba rendezése; a nyelv ebben nélkülözhetetlen eszköz.',
            },
            {
              term: 'nyelvi világkép',
              text: 'Az, ahogyan egy nyelv a valóságot felosztja és megnevezi.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A nyelv és a gondolkodás' },
        {
          kind: 'text',
          text: 'A nyelv egyik legfontosabb szerepe, hogy **gondolkodunk vele**. A szó egy **fogalmat** rögzít: a *kutya* szóval nem egy konkrét állatra, hanem egy egész csoportra utalunk. Így a nyelv segít **kategorizálni** (csoportokba rendezni) a tapasztalatainkat, **elvonatkoztatni** (absztrahálni) és **általánosítani**. Amit megneveztünk, azt könnyebben megjegyezzük, megvitatjuk és továbbadjuk.',
        },
        {
          kind: 'text',
          text: 'A gyerek a nyelv elsajátításával párhuzamosan tanulja meg rendezni a világot. A felnőtt **belső beszédben** is gondolkodik, vagyis magában „mondja” a gondolatait. Ugyanakkor a nyelv és a gondolkodás nem ugyanaz: képekben, zenében, térbeli elrendezésben is lehet gondolkodni, és gyakran **előbb van meg a gondolat**, és csak utána keressük hozzá a szavakat („tudom, mit akarok mondani, de nem találom a szót”).',
        },
        {
          kind: 'keypoints',
          title: 'Nyelv és megismerés: mit ad a nyelv?',
          items: [
            'a tapasztalatot **fogalmakba rendezi**, így gondolkodni és tervezni lehet vele',
            'a tudást **tárolja és továbbadja** (szóban, írásban, ma már digitálisan is)',
            'a megismerést **közössé teszi**: a tanulás nagy része nyelven keresztül történik',
            'a **jelentés** megegyezésen alapul, ezért a közösség azonos módon érti a szavakat',
          ],
        },
        { kind: 'heading', text: 'A jel és a jelrendszer' },
        {
          kind: 'text',
          text: 'A **jel** olyan érzékelhető dolog, amely valami másra utal. A jelnek két oldala van: a **forma** (amit érzékelünk: hang, kép, mozdulat) és az, amire **utal** (jelentés). A jelek **rendszert** alkotnak, ha van közös készletük és szabályuk. A **nyelv** a legkifejlettebb jelrendszer: kevés alapelemből (hangokból) végtelen sok közlést lehet alkotni, és bármiről lehet vele beszélni, a nem nyelvi jelrendszerek viszont szűkebb körűek.',
        },
        {
          kind: 'compare',
          title: 'Nyelvi és nem nyelvi jelek a közlésben',
          columns: ['Nyelvi jel', 'Nem nyelvi jel'],
          rows: [
            {
              label: 'Példa',
              cells: [
                '*asztal*, *fut*, egy mondat',
                'bólintás, piktogram, zászló, KRESZ-tábla, Morse',
              ],
            },
            {
              label: 'Működés',
              cells: [
                'hangalak + jelentés, nyelvtani szabályokkal',
                'a forma és a jelentés megegyezésen vagy hasonlóságon alapul',
              ],
            },
            {
              label: 'Használati kör',
              cells: [
                'bármiről lehet vele beszélni',
                'szűkebb: egy helyzetre, tevékenységre szolgál',
              ],
            },
            {
              label: 'Közlésben',
              cells: [
                'szóban és írásban',
                'a beszédet kíséri vagy helyettesíti (testbeszéd, jelzések)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A mindennapi közlésben a kettő **együtt** jelenik meg: szavak mellett arckifejezés, hanghordozás, gesztusok, a testtartás is közvetít jelentést. Ha a kettő ellentmond (például valaki azt mondja, „nem haragszom”, miközben összeszorítja a száját), a hallgató gyakran a **nem nyelvi jelekre** hallgat.',
        },
        { kind: 'heading', text: 'A nyelv szerepe a világról formált tudásunkban', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a **nyelvi világkép** a kulcs: a nyelv nem csak lemásolja a valóságot, hanem **felosztja** is. Példa: a magyar négy szóval különbözteti meg a testvéreket (*báty*, *öcs*, *nővér*, *húg*), az angol csak kettővel (*brother*, *sister*). A magyarban a harmadik személyű névmás (*ő*) **nem jelöl nyelvtani nemet**, más nyelvekben (például németben, franciában) a nem a névmásban és a főnevek nyelvtani nemében is kötelezően megjelenik. Az elmélet szerint (**nyelvi relativitás**, Sapir–Whorf-hipotézis) a nyelv befolyásolja, hogyan látjuk a világot. Az **erős** változat (a nyelv meghatározza a gondolkodást) túlzó és a kutatók többsége elveti, a **gyenge** (a nyelv hat a gondolkodásra, a figyelemre) vitatott, de elfogadottabb.',
        },
        { kind: 'heading', text: 'Az emberiség információs forradalmai', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Információs forradalomnak nevezzük azt, amikor az információ **rögzítésének és terjesztésének** módja alapvetően megváltozik. A tankönyvek általában ezeket tárgyalják (a felsorolás és a számozás tankönyvenként eltérhet):',
        },
        {
          kind: 'timeline',
          emelt: true,
          items: [
            { date: 'beszéd', text: 'a nyelv kialakulása: a tudás szóban, emlékezetben terjed.' },
            { date: 'írás', text: 'a tudás rögzíthető és időben, térben távolra juttatható.' },
            {
              date: 'könyvnyomtatás',
              text: 'Gutenberg találmánya (a 15. század közepe): a szöveg tömegesen sokszorosítható.',
            },
            {
              date: 'elektronikus tömegkommunikáció',
              text: 'távíró, telefon, rádió, televízió: az információ szinte azonnal eljut a címzetthez.',
            },
            {
              date: 'digitális kor',
              text: 'számítógép és internet: bárki közzétehet és kereshet információt; új szövegtípusok (chat, poszt) alakulnak ki.',
            },
          ],
        },
        { kind: 'heading', text: 'A nyelv és a kultúra', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'A nyelv a kultúra **része** és **hordozója** is. A szókincs azt tükrözi, ami a közösségnek fontos volt (a magyarban sok szó utal a pásztorkodásra és a földművelésre). A kultúra sajátos tárgyait és fogalmait sokszor nehéz lefordítani, ezért idegen nyelvekbe gyakran változatlanul kerülnek át (például *puszta*, *gulyás*, *csárda*). A **szólások, közmondások** a közösség tapasztalatát, értékrendjét őrzik. A nyelv ezért a **nemzeti identitás** egyik legfontosabb eleme.',
        },
        { kind: 'heading', text: 'A nyelvi jel sajátosságai', emelt: true },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'A nyelvi jel jellemzői',
          items: [
            '**kétoldalú**: hangalak (jelölő) és jelentés (jelölt) együtt (F. de Saussure)',
            '**önkényes** (arbitrárius): a hangalak és a jelentés között nincs természetes kapcsolat, a magyar *ház*, a német *Haus* és az angol *house* ugyanazt jelenti; kivétel a hangutánzó szavak (*kakukk*, *durr*), de ezek is nyelvenként eltérnek',
            '**megegyezésen (konvención) alapul**: a közösség elfogadja, az egyén nem változtathatja meg',
            '**lineáris**: a nyelvi jelek időben (írásban térben) egymás után következnek',
            '**tagolt** (diszkrét): elemekre bontható; a hangokból morfémák és szavak, azokból mondat épül (kettős tagoltság)',
          ],
        },
        { kind: 'heading', text: 'Jeltípusok', emelt: true },
        {
          kind: 'compare',
          emelt: true,
          title: 'Az ikon, az index és a szimbólum',
          columns: ['Mi köti össze a jelet és a jelentést?', 'Példa'],
          rows: [
            {
              label: 'ikon',
              cells: [
                'hasonlóság',
                'piktogram (férfi, női mosdó), fénykép, térkép, hangutánzó szó',
              ],
            },
            {
              label: 'index',
              cells: [
                'ok-okozati vagy térbeli kapcsolat, rámutatás',
                'füst (tűzre utal), láz (betegségre), mutatóujj, nyíl, lábnyom',
              ],
            },
            {
              label: 'szimbólum',
              cells: [
                'megegyezés (konvenció)',
                'a szavak többsége, a Morse-ábécé, a piros lámpa „állj”, a nemzeti zászló',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A nyelvi jelek döntően **szimbólumok**, mert a kapcsolat megegyezésen alapul. Egy jel gyakran többféle is lehet: a közlekedési tábla ikonszerű rajza (például a gyalogos alakja) szimbolikus jelentést is kap (itt járhatsz).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A szövegértési-nyelvi feladatsorban rövid szövegrész vagy ábra: nyelvi és nem nyelvi jelek felismerése, besorolása.',
            'Szóbeli tétel (Ember és nyelvhasználat): „A nyelv és a gondolkodás összefüggései” vagy „A nyelv mint jelrendszer”; mellé szöveg, kép (például közlekedési táblák, piktogramok), idézet.',
            'Emelt szinten: jeltípus megállapítása indoklással, a nyelvi jel sajátosságainak bemutatása példákkal, a nyelv és a kultúra kapcsolata.',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: jelek besorolása',
          problem:
            'Döntsd el az alábbi jelekről, hogy nyelvi vagy nem nyelvi jelek-e, és emelt szinten add meg a típusukat is: a) a *csésze* szó, b) a mutatóujj, c) egy piktogram a bejáratnál, d) a piros lámpa.',
          solution:
            'a) **nyelvi jel**; **szimbólum**: a hangsor és a jelentés kapcsolata megegyezésen alapul.\n\nb) **nem nyelvi jel** (gesztus); **index**: rámutat arra, amire utal.\n\nc) **nem nyelvi jel**; **ikon**: a rajz hasonlít arra, amit ábrázol (például a mosdó férfi vagy női alakja).\n\nd) **nem nyelvi jel**; **szimbólum**: a piros jelentése („állj”) pusztán megegyezés.\n\nA magyarázat lényege: a jel típusát az dönti el, **mi köti össze a formát és a jelentést**.',
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a nyelvet és a gondolkodást azonosnak tekintik. A helyes megfogalmazás: **szorosan összefügg**, de nem azonos. A másik tipikus hiba, hogy az „önkényes” szót „ötletszerűnek” értik: a nyelvi jel azért önkényes, mert nincs természetes kapcsolat a hangalak és a jelentés között, de a használata a közösség számára **kötelező** (megegyezésen alapul).',
        },
        {
          kind: 'tip',
          text: 'Szóbeli válaszvázlat: **1.** a jel fogalma és két oldala; **2.** a nyelv mint jelrendszer és a nem nyelvi jelrendszerek összevetése példával; **3.** a nyelv és a gondolkodás kapcsolata (fogalom, kategorizálás, belső beszéd); **4.** egy konkrét példa a szövegből vagy a mellékelt ábráról; emelt szinten **5.** a jel sajátosságai és típusai, a nyelvi világkép.',
        },
      ],
      topicMatch: ['ember és nyelv', 'nyelv és gondolkodás', 'jelrendszer', 'nyelvi jel'],
      quiz: [
        {
          question: 'Melyik állítás igaz a nyelv és a gondolkodás viszonyáról?',
          options: [
            'A kettő teljesen azonos, nyelv nélkül nincs gondolat.',
            'A kettő szorosan összefügg, de nem azonos.',
            'A nyelvnek semmi köze a gondolkodáshoz.',
            'A gondolkodás csak írásban lehetséges.',
          ],
          answer: 1,
          explanation:
            'A nyelv a gondolkodás fontos eszköze, de lehet képekben, zenében is gondolkodni, és előfordul, hogy megvan a gondolat, csak a szót keressük hozzá.',
        },
        {
          question: 'Melyik NEM nyelvi jel?',
          options: ['a *kenyér* szó', 'a kérdőjel', 'egy közlekedési tábla rajza', 'egy mondat'],
          answer: 2,
          explanation:
            'A közlekedési tábla nem nyelvi jel, mert nem a nyelv szabályai szerint működik. A szó és a mondat nyelvi jel, a kérdőjel pedig az írás jele.',
        },
        {
          question: 'Miből áll a nyelvi jel?',
          options: [
            'csak hangalakból',
            'hangalakból (jelölő) és jelentésből (jelölt)',
            'csak jelentésből',
            'a betűkből és az írásjelekből',
          ],
          answer: 1,
          explanation:
            'A nyelvi jelnek két oldala van: az érzékelhető hangalak (jelölő) és a hozzá kapcsolódó jelentés (jelölt).',
        },
        {
          question: 'Miért jobb a nyelv más jelrendszereknél?',
          options: [
            'Mert csak nyelvvel lehet írni.',
            'Mert bármiről lehet vele beszélni, és kevés elemből végtelen sok közlés alkotható.',
            'Mert nincs szabálya.',
            'Mert minden nyelven ugyanúgy hangzik.',
          ],
          answer: 1,
          explanation:
            'A nyelv a legkifejlettebb jelrendszer: bármiről lehet vele beszélni, szemben a szűkebb körű jelrendszerekkel (Morse, KRESZ).',
        },
        {
          question: 'Melyik jeltípus a füst, amely tűzre utal?',
          options: ['ikon', 'szimbólum', 'index', 'hangutánzó szó'],
          answer: 2,
          explanation:
            'A füst és a tűz között ok-okozati kapcsolat van, ezért a füst a tűz indexe. Az ikon hasonlóságon, a szimbólum megegyezésen alapul.',
          emelt: true,
        },
        {
          question: 'Mit jelent az, hogy a nyelvi jel önkényes?',
          options: [
            'Bárki bármikor megváltoztathatja a jelentését.',
            'Nincs természetes kapcsolat a hangalak és a jelentés között.',
            'Csak a költők használhatják.',
            'Minden nyelvben ugyanúgy hangzik.',
          ],
          answer: 1,
          explanation:
            'Az önkényesség miatt hívják ugyanazt a dolgot házként, Hausnak és housenak. A használata ettől még kötelező, megegyezésen alapul.',
          emelt: true,
        },
        {
          question: 'Mi mutatja a nyelvi világkép különbségeit?',
          options: [
            'A magyarban négy szó (báty, öcs, nővér, húg) különbözteti meg a testvéreket, az angolban kettő.',
            'Minden nyelvben pontosan ugyanannyi szó van.',
            'A magyar nyelvnek nincs szókincse.',
            'Csak a hangok száma különbözik.',
          ],
          answer: 0,
          explanation:
            'A nyelvek máshogy osztják fel a valóságot: ami az egyikben külön szó, az a másikban egy közös szó lehet.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nyelvi relativitás', url: wiki('Nyelvi relativitás Sapir–Whorf') },
        { label: 'Wikipédia: Jel (szemiotika)', url: wiki('Jel szemiotika') },
        { label: 'Wikipédia: Információs forradalom', url: wiki('Információs forradalom') },
      ],
    },
    {
      id: 'nyelvvaltozatok-retegnyelv-csoportnyelv-szleng',
      subject: 'magyar',
      unitId: 'ember-es-nyelvhasznalat',
      title: 'Nyelvváltozatok: köznyelv, csoportnyelvek, szleng',
      level: 'kozep',
      requirement: {
        kozep:
          'Anyanyelvünk rétegződése I.: a köznyelvi változatok, a csoportnyelvek és a rétegnyelvek; egynyelvű szótárak.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A nyelv **nem egységes**: az emberek helyzettől, lakóhelytől, kortól és foglalkozástól függően különböző **nyelvváltozatokat** használnak.',
            '**Köznyelv**: a nyelvközösség egésze által használt, a norma szerinti változat (beszédben köznyelv, írásban az **irodalmi nyelv**). Ezt tanuljuk az iskolában, ezen szólnak a hírek és a hivatalok.',
            '**Csoportnyelv**: egy csoport (foglalkozás, hobbi) saját szókincse, például az orvosi vagy a jogi **szaknyelv**.',
            '**Rétegnyelv**: egy társadalmi réteg vagy korosztály beszédmódja, például az **ifjúsági nyelv**, a **szleng**, az **argó**.',
            'Az **egynyelvű szótár** (értelmező szótár) egy nyelv szavait ugyanazon a nyelven magyarázza; a címszó mellett szófajt, jelentéseket, példát és **stílusminősítést** is közöl.',
          ],
        },
        {
          kind: 'compare',
          title: 'A nyelvváltozatok áttekintése',
          columns: ['Mihez kötődik?', 'Példa'],
          rows: [
            {
              label: 'köznyelv',
              cells: ['az egész nyelvközösség, a norma', 'hírek, iskolai órák, hivatalos levél'],
            },
            { label: 'nyelvjárás', cells: ['földrajzi terület', 'ö-zés, í-zés, tájszavak'] },
            {
              label: 'csoportnyelv',
              cells: ['foglalkozás, hobbi, érdeklődés', 'orvosi, jogi, informatikai szaknyelv'],
            },
            {
              label: 'rétegnyelv',
              cells: ['társadalmi réteg, korosztály', 'szleng, ifjúsági nyelv, argó'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért rétegződik a nyelv?' },
        {
          kind: 'text',
          text: 'Az anyanyelvünk **egyszerre egységes és sokféle**. Egységes, mert a magyarul beszélők megértik egymást, sokféle, mert a nyelvet más-más helyzetben, más-más közösségben használjuk. A nyelvváltozatok három szempont szerint rendeződnek: **földrajzi** (nyelvjárások), **társadalmi** (csoport- és rétegnyelvek) és a **használat helyzete** szerint (milyen hivatalos, szóbeli vagy írásbeli a közlés). A rétegződés **természetes**, nem hiba, és a nyelvváltozatok nem „jobbak” vagy „rosszabbak” egymásnál, csak más helyzetbe valók.',
        },
        { kind: 'heading', text: 'Köznyelvi változatok' },
        {
          kind: 'text',
          text: 'A **köznyelv** a nyelvközösség egészének közös változata, amely a **nyelvi normához** igazodik. Ezt használjuk a sajtóban, az oktatásban, a hivatalokban, a művelt társalgásban. Két alakban él: a **beszélt köznyelv** kötetlenebb, mondatai rövidebbek, a **köznyelv írott formája, az irodalmi nyelv** pedig a leginkább szabályozott és gondosan szerkesztett (tudományos szöveg, jogszabály, szépirodalom). Egyes tankönyvek az irodalmi nyelvet és a köznyelvet külön tárgyalják, mások együtt: ez nem befolyásolja a lényeget, vagyis hogy ez a **közös, normához kötött** változat.',
        },
        { kind: 'heading', text: 'Csoportnyelvek' },
        {
          kind: 'text',
          text: 'A **csoportnyelv** azonos foglalkozású vagy érdeklődésű emberek közös szókincse és beszédmódja. Fő típusa a **szaknyelv**, amelynek szavai (**szakszavak**, terminus technicus) pontosan meghatározott fogalmakat jelölnek, gyakran nemzetközi szavak: *akut* (orvosi), *fellebbezés* (jogi), *debuggolás* (informatikai). A szaknyelv célja a **pontos, egyértelmű** közlés a szakemberek között. Hasonló a hobbicsoportok szóhasználata is (például a horgászoké vagy a játékosoké).',
        },
        { kind: 'heading', text: 'Rétegnyelvek: szleng és argó' },
        {
          kind: 'text',
          text: 'A **rétegnyelv** egy társadalmi réteg vagy korosztály nyelvhasználata. A **szleng** bizalmas, érzelmes, játékos, gyorsan változó szókincs, amely a **kifejezésmód frissességét** szolgálja, és a csoport összetartozását is jelzi. Tipikusan a fiatalok használják: *suli* (iskola), *buli* (összejövetel), *király* (nagyszerű), *kajál* (eszik). A szleng szavai gyorsan elavulnak, mások beépülnek a köznyelvbe. Az **argó** a közösségen kívülieket kizáró titkosabb nyelv volt, eredetileg például az alvilági csoportoké; ma a *zsaru* (rendőr) típusú szavak már a szlengbe is átkerültek.',
        },
        {
          kind: 'warning',
          text: 'A csoportnyelv és a rétegnyelv elhatárolása tankönyvenként kicsit eltér. A vizsgán a fontos: fel tudd ismerni, hogy egy szó vagy szöveg **melyik közösség** és **milyen helyzet** nyelvhasználatára jellemző, és ezt indokold is.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: nyelvváltozat felismerése',
          problem:
            'Állapítsd meg, melyik nyelvváltozatra jellemzők a mondatok! a) *A vádlott fellebbezést nyújtott be az ítélet ellen.* b) *Tegnap bulizni voltunk, királyság volt a zene.* c) *Tisztelt Hölgyem! Értesítem, hogy kérelmét elfogadtuk.* d) *A pácienst akut hasi panaszokkal vették fel.*',
          solution:
            'a) **jogi szaknyelv** (csoportnyelv): *vádlott*, *fellebbezés*.\n\nb) **szleng, ifjúsági nyelv** (rétegnyelv): *bulizni*, *királyság*, kötetlen hangnem.\n\nc) **hivatalos írott köznyelv** (irodalmi nyelv): udvarias megszólítás, kimért szóhasználat.\n\nd) **orvosi szaknyelv** (csoportnyelv): *páciens*, *akut*.\n\nAz indoklás mindig a **szókincsre és a hangnemre** támaszkodjon.',
        },
        { kind: 'heading', text: 'Egynyelvű szótárak' },
        {
          kind: 'text',
          text: 'Az **egynyelvű szótár** a nyelv szavait ugyanazon a nyelven magyarázza (a **kétnyelvű** szótár fordít). A magyar nyelv fontos egynyelvű szótára az **értelmező szótár** (például a hétkötetes *A magyar nyelv értelmező szótára* és az egykötetes *Magyar értelmező kéziszótár*). Az értelmező szótár szócikke általában tartalmazza a **címszót**, a **szófaját**, a **jelentéseit** (számozva), a **példamondatot**, a **szólásokat** és a **stílusminősítést** (például *bizalmas*, *durva*, *nyelvjárási*, *régies*). Más egynyelvű szótárak: helyesírási szótár, szinonimaszótár, idegen szavak szótára, etimológiai szótár, tájszótár.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: szótárcikk olvasása',
          problem:
            'Egyszerűsített, saját szerkesztésű szócikk: **suli** fn, bizalmas. Iskola. *Megyek a suliba.* Mit tudhatsz meg belőle, és milyen helyzetben használnád a szót?',
          solution:
            'A szócikk szerint a *suli* főnév (**szófaj**), jelentése *iskola*, és **bizalmas** stílusú (**stílusminősítés**), amit a *Megyek a suliba* példa is mutat. A szót ezért barátok közt, kötetlen beszédben használod, hivatalos levélben vagy a feleletben az *iskola* a megfelelő. A stílusminősítés tehát azt mondja meg, **hol helyes** használni a szót, nem azt, hogy rossz-e.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A szövegértési-nyelvi feladatsorban szövegrészlet: melyik nyelvváltozathoz tartoznak a kiemelt szavak, kifejezések? (köznyelvi, szaknyelvi, szleng, nyelvjárási)',
            'Szóbeli tétel: „Anyanyelvünk rétegződése”; a szövegrész lehet idézet, internetes oldal, vagy **egynyelvű szótár részlete**: a stílusminősítés és a jelentések értelmezése.',
            'Gyakori feladat: szleng vagy szaknyelvi szó cseréje köznyelvi szóra, az eltérés indoklása.',
          ],
        },
        {
          kind: 'warning',
          text: 'A szleng **nem helytelen** nyelv, csak helyzethez kötött. Ne azt írd, hogy „rossz” vagy „hibás”, hanem azt, hogy **bizalmas, kötetlen** helyzetbe való. Ne keverd össze a szlenget a nyelvjárással: a szleng társadalmi (kor, csoport), a nyelvjárás földrajzi változat.',
        },
        {
          kind: 'tip',
          text: 'Egy szó besorolásához három kérdés: **1.** Ki használja? (foglalkozás, korosztály, lakóhely) **2.** Milyen helyzetben? (hivatalos, kötetlen) **3.** Mi a hatása? (pontos, érzelmes, szűk körű). A válasz ebből következik.',
        },
      ],
      topicMatch: ['nyelvváltozat', 'csoportnyelv', 'rétegnyelv', 'szleng', 'szaknyelv'],
      quiz: [
        {
          question: 'Melyik szó tartozik a szlenghez?',
          options: ['fellebbezés', 'akut', 'páciens', 'király (nagyszerű)'],
          answer: 3,
          explanation:
            'A *király* (nagyszerű) jelentésben bizalmas, ifjúsági szleng. A többi szó szaknyelvi (jogi, orvosi).',
        },
        {
          question: 'Mire használják a szaknyelvet?',
          options: [
            'A szomszédok közötti szójátékra.',
            'A szakemberek közötti pontos, egyértelmű közlésre.',
            'Titkos üzenetek küldésére.',
            'A nyelvjárások megőrzésére.',
          ],
          answer: 1,
          explanation:
            'A szaknyelv szakszavai egyértelműen meghatározott fogalmakat jelölnek, ezért pontos a szakmai kommunikáció.',
        },
        {
          question: 'Melyik állítás igaz az értelmező szótárra?',
          options: [
            'A szavakat idegen nyelvre fordítja.',
            'Csak a helyesírást adja meg.',
            'Csak tájszavakat tartalmaz.',
            'A szavakat azonos nyelven magyarázza, és stílusminősítést is közölhet.',
          ],
          answer: 3,
          explanation:
            'Az egynyelvű (értelmező) szótár ugyanazon a nyelven magyaráz, és jelöli a stílusrétegét is (például bizalmas, régies).',
        },
        {
          question: 'Mi a köznyelv?',
          options: [
            'Egy földrajzi terület különleges beszéde.',
            'A teljes nyelvközösség közös, a normához igazodó változata.',
            'Csak a fiatalok nyelve.',
            'Az alvilági titkos nyelv.',
          ],
          answer: 1,
          explanation:
            'A köznyelv az egész közösség által használt, normához kötött változat; nem területhez vagy szűk csoporthoz kötődik.',
        },
        {
          question: 'Mi a különbség a szleng és a nyelvjárás között?',
          options: [
            'Semmi, ugyanaz.',
            'A szleng társadalmi (kor, csoport), a nyelvjárás földrajzi változat.',
            'A szleng földrajzi, a nyelvjárás kor szerinti.',
            'A szleng írott, a nyelvjárás beszélt nyelv.',
          ],
          answer: 1,
          explanation:
            'A szlenget a közösség (főleg fiatalok) használja, a nyelvjárást egy földrajzi terület lakói.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Szleng', url: wiki('Szleng') },
        { label: 'Wikipédia: Szaknyelv', url: wiki('Szaknyelv') },
        { label: 'Wikipédia: Értelmező szótár', url: wiki('Értelmező szótár') },
      ],
    },
    {
      id: 'nyelvjarasok-nyelvi-norma',
      subject: 'magyar',
      unitId: 'ember-es-nyelvhasznalat',
      title: 'Nyelvjárások és a nyelvi norma',
      level: 'both',
      requirement: {
        kozep: 'Anyanyelvünk rétegződése II.: a nyelvjárások és a nyelvi norma.',
        emelt: 'Egy adott nyelvjárási terület és a nyelvi norma eltérései.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **nyelvjárás** egy földrajzi területhez kötött nyelvváltozat, amelynek sajátos **hangtani**, **alaktani**, **szókészleti** (és mondattani) jegyei vannak.',
            'Híres hangtani jelenség az **ö-zés** (*köll*, *mönni*, a *kell* és a *menni* helyett) és az **í-zés** (*kenyír*, *szíp*, a *kenyér* és a *szép* helyett); mindkettő főleg a Dunántúlon él.',
            'A nyelvjárásban élő sajátos szó a **tájszó** (például *pityóka* a *krumpli* helyett).',
            'A **nyelvi norma** a közösségnek a nyelvhasználatra vonatkozó, általánosan elfogadott szabályai (kiejtés, helyesírás, szóhasználat). A nyelvjárás **nem hibás**, csak eltér a normától, és más helyzetbe való.',
            'Ma a nyelvjárások visszaszorulnak; a beszélők a köznyelv és a **regionális köznyelv** felé közelednek.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'nyelvjárás', text: 'Egy földrajzi területen élők sajátos nyelvváltozata.' },
            {
              term: 'ö-zés',
              text: 'Az *e* helyett *ö* hang kiejtése bizonyos szavakban (*köll* = kell, *mönni* = menni).',
            },
            {
              term: 'í-zés',
              text: 'Az *é* helyett *í* ejtése bizonyos szavakban (*kenyír* = kenyér, *szíp* = szép).',
            },
            { term: 'tájszó', text: 'Csak egy nyelvjárási területen élő szó.' },
            {
              term: 'nyelvi norma',
              text: 'A közösség által elfogadott, követendő nyelvhasználati szabályok.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a nyelvjárás?' },
        {
          kind: 'text',
          text: 'A **nyelvjárás** (tájnyelv, dialektus) egy nyelv **földrajzilag** elkülönülő változata. Ott alakulhat ki, ahol a közösségek egymástól elszigetelten éltek, a hegyek, a folyók vagy a határok miatt kevesebb volt a kapcsolat. A magyar nyelv nyelvjárásai **nem külön nyelvek**: a beszélők megértik egymást, a különbségek főleg a kiejtésben és a szókincsben mutatkoznak.',
        },
        {
          kind: 'compare',
          title: 'Mit érint a nyelvjárási eltérés?',
          columns: ['Szint', 'Példa'],
          rows: [
            {
              label: 'Hangtan',
              cells: ['kiejtés, hangok', 'ö-zés: *köll*, *mönni*; í-zés: *kenyír*, *szíp*'],
            },
            {
              label: 'Szókészlet',
              cells: ['tájszavak', '*pityóka* (krumpli, főleg keleten és Erdélyben)'],
            },
            {
              label: 'Alaktan',
              cells: [
                'toldalékok, ragozás',
                'az ikes igék ragozásának eltérései (például *eszek* a köznyelvi *eszem* helyett)',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Híres nyelvjárási jelenségek' },
        {
          kind: 'text',
          text: 'Az **ö-zés** az *e*, illetve a nyelvjárástól függően más magánhangzók helyett *ö* ejtése: *köll*, *löhet*, *mönni*. Az **í-zés** az *é* helyett *í*: *kenyír*, *szíp*, *kíz*. Az ö-zés például a Szeged környéki (dél-alföldi) nyelvjárásokra jellemző, az í-zés főleg az északkeleti és a tiszántúli nyelvjárásokra.',
        },
        {
          kind: 'text',
          text: 'A magyar nyelvjárási területek tagolását a kutatók nem egyformán adják meg; ismerd fel a főbb tájakat és jellemzőiket: a **Dunántúl** (ö-zés, í-zés), a **palóc** terület (északon), a **székelység** (Székelyföld, Erdély), a **csángók** (Moldva). A szóbeli tételben elég két-három tájat megnevezni jellemzőkkel.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: nyelvjárási jelenség felismerése',
          problem:
            'Elemezd a mondatot! *Köll nekëm a kenyír, mer mönni löhet.* (A mondat szerkesztett, a jelenségek típuspéldák.)',
          solution:
            '- *köll* (kell), *löhet* (lehet), *mönni* (menni): **ö-zés**, hangtani nyelvjárási jegy\n- *kenyír* (kenyér): **í-zés**, hangtani jegy\n- A mondat többi része köznyelvi.\n\nAz elemzés lépései: **1.** kiemeled a normától eltérő alakokat, **2.** mellé írod a köznyelvi alakot, **3.** megnevezed a jelenséget és a szintet (hangtan), **4.** megállapítod, hogy a nyelvjárási jegyek a kiejtésben mutatkoznak, a mondat jelentése változatlanul érthető.',
        },
        { kind: 'heading', text: 'A nyelvi norma' },
        {
          kind: 'text',
          text: 'A **nyelvi norma** a nyelvhasználat szabályainak összessége, amelyet a közösség **elfogad és követ**. Lehet **kodifikált** (leírt), például a helyesírás szabályai, a szótárak és a nyelvtanok, és lehet íratlan szokás is. A norma **helyzetfüggő**: ami otthon, barátok közt természetes, az hivatalos levélben vagy a vizsgán nem elfogadható. A nyelvi normát **a köznyelv és az irodalmi nyelv** testesíti meg, ezért az iskolai és hivatalos helyzetekben ehhez igazodunk.',
        },
        {
          kind: 'tip',
          text: 'Ha nyelvjárási szövegről kérdeznek, ne azt írd, hogy „helytelen”. Mondd azt, hogy **nyelvjárási** jegy, és hogy **eltér a normától**, amely hivatalos helyzetben a köznyelvi alakot kívánja.',
        },
        { kind: 'heading', text: 'Egy nyelvjárási terület és a norma eltérései', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten egy adott terület nyelvhasználatát **rendszerezve** kell összevetned a normával: milyen **hangtani** (pl. ö-zés, í-zés, magánhangzó-ejtés), **alaktani** (ragok, igeragozás), **szókészleti** (tájszavak) és esetleg **mondattani** jegyei vannak. Érdemes mindig három lépésben haladni: **1.** a jelenség leírása példával, **2.** a normabeli megfelelő megadása, **3.** annak megállapítása, hogy a közlés mennyire érthető, és milyen helyzetben fogadható el. Hozzátartozik az is, hogy a nyelvjárások egy részében a **nyelvi változás** más ütemű, ezért régi nyelvi formák maradhattak meg bennük.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegértési-nyelvi feladat: nyelvjárási elemek (ö-zés, í-zés, tájszó) kiválogatása a szövegből, köznyelvi alakjuk megadása.',
            'Szóbeli tétel: a nyelvváltozatok, a nyelvjárás és a norma viszonyának bemutatása, a szemléltető szöveg elemzése.',
            'Emelt szinten: egy tájegység nyelvhasználatának összevetése a normával, hangtani és szókészleti szinten.',
          ],
        },
        {
          kind: 'warning',
          text: 'A nyelvjárás **nem azonos** a szlenggel és **nem hibás beszéd**. Ne keverd az ö-zést és az í-zést: az ö-zésnél *e* helyett jelenik meg *ö*, az í-zésnél *é* helyett *í*. A tájszó szókészleti, az ö-zés hangtani jelenség.',
        },
        {
          kind: 'tip',
          text: 'Írj táblázatot a feladat mellé: **nyelvjárási alak – köznyelvi alak – jelenség neve**. Így pontosan mutatod, hogy megértetted a különbséget.',
        },
      ],
      topicMatch: ['nyelvjárás', 'nyelvi norma'],
      quiz: [
        {
          question: 'Melyik jelenség az ö-zés?',
          options: [
            'kenyír a kenyér helyett',
            'köll a kell helyett',
            'pityóka a krumpli helyett',
            'suli az iskola helyett',
          ],
          answer: 1,
          explanation:
            'Az ö-zés *e* helyett *ö* ejtése (*köll*). A *kenyír* í-zés, a *pityóka* tájszó, a *suli* szleng.',
        },
        {
          question: 'Mi a nyelvjárás?',
          options: [
            'Egy foglalkozási csoport nyelve.',
            'Egy földrajzi területhez kötött nyelvváltozat.',
            'Egy külön nyelv.',
            'A hivatalos levelek nyelve.',
          ],
          answer: 1,
          explanation:
            'A nyelvjárás területi nyelvváltozat. A foglalkozáshoz kötött változat a csoportnyelv.',
        },
        {
          question: 'Mit jelent a nyelvi norma?',
          options: [
            'Csak a helyesírási szabályokat.',
            'A közösség által elfogadott és követett nyelvhasználati szabályokat.',
            'Egy nyelvjárási szótárat.',
            'A szlengszavak jegyzékét.',
          ],
          answer: 1,
          explanation:
            'A norma a nyelvhasználat elfogadott szabályainak összessége; a helyesírás ennek csak az egyik része.',
        },
        {
          question: 'Melyik állítás igaz a nyelvjárásokra?',
          options: [
            'Hibás beszédet jelentenek.',
            'A beszélők nem értik meg egymást.',
            'Eltérnek a normától, de nem hibásak, és más helyzetbe valók.',
            'Csak írásban léteznek.',
          ],
          answer: 2,
          explanation:
            'A nyelvjárás természetes változat; a normától való eltérés nem hiba, hanem helyzetfüggő használat.',
        },
        {
          question: 'Milyen szinten mutatkozik meg a tájszó?',
          options: ['hangtanban', 'szókészletben', 'helyesírásban', 'írásjelhasználatban'],
          answer: 1,
          explanation: 'A tájszó egy nyelvjárási területen élő szó, ezért szókészleti jelenség.',
        },
        {
          question: 'Melyik három szinten kell összevetned egy nyelvjárást a normával?',
          options: [
            'hangtan, alaktan, szókészlet',
            'betű, szám, rajz',
            'cím, tartalom, kép',
            'ritmus, rím, strófa',
          ],
          answer: 0,
          explanation:
            'A nyelvjárási eltérések hangtani, alaktani és szókészleti szinten rendszerezhetők.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Magyar nyelvjárások', url: wiki('Magyar nyelvjárások') },
        { label: 'Wikipédia: Ö-zés', url: wiki('ö-zés nyelvjárás') },
        { label: 'Wikipédia: Nyelvi norma', url: wiki('Nyelvi norma') },
      ],
    },
    {
      id: 'nyelv-tarsadalom-nyelvpolitika-nyelvmuveles',
      subject: 'magyar',
      unitId: 'ember-es-nyelvhasznalat',
      title: 'Nyelv és társadalom, nyelvpolitika, nyelvművelés',
      level: 'both',
      requirement: {
        kozep:
          'A hazánkban élő nemzetiségek nyelvhasználata; nyelvünk helyzete a Kárpát-medencében; nyelvi identitás, nyelvi sokszínűség; nyelvi tervezés, nyelvpolitika, nyelvművelés, a nyelvi norma; a mai magyar nyelvművelés.',
        emelt: 'A nyelvművelés szerepe az új nyelvi fejlemények, jelenségek értelmezésében.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Magyarországon **13 törvényben elismert nemzetiség** él, és jogaik közé tartozik az anyanyelv használata, az anyanyelvű oktatás.',
            'A magyar nyelvterület a **Kárpát-medencében** túlnyúlik Magyarország határain: a határon túli magyarok **kisebbségben** élnek (például Erdélyben, a Felvidéken, a Vajdaságban, Kárpátalján), és nyelvhasználatukat a többségi nyelv is formálja.',
            '**Nyelvi identitás**: az, hogy valaki a nyelvét a közösségéhez tartozás jelének tekinti. A **nyelvi sokszínűség** érték.',
            '**Nyelvpolitika**: az állam, a közösség tudatos döntései a nyelvek használatáról (hivatalos nyelv, oktatás nyelve, kisebbségi jogok).',
            '**Nyelvi tervezés**: a nyelv helyzetének (státusz) és szabályainak (korpusz: helyesírás, szókincs) tudatos alakítása. **Nyelvművelés**: a jó nyelvhasználat segítése. A mai magyar nyelvművelés **tanácsot ad**, és nem tilt.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'nemzetiség',
              text: 'Az országban honos, a lakosságnak a magyartól eltérő nyelvű és kultúrájú, hagyományos közössége.',
            },
            {
              term: 'nyelvi identitás',
              text: 'A nyelvhez fűződő hovatartozás-érzés: a beszélő a nyelvét a közösségéhez tartozás jelének érzi.',
            },
            {
              term: 'nyelvpolitika',
              text: 'A nyelvek használatát és helyzetét érintő politikai döntések összessége.',
            },
            {
              term: 'nyelvi tervezés',
              text: 'A nyelv helyzetét (státusz) és formáját (korpusz) alakító tudatos beavatkozás.',
            },
            {
              term: 'nyelvművelés',
              text: 'A nyelvhasználat gondozása, a nyelvi norma megismertetése és a hibák javítása tanácsadással.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hazánkban élő nemzetiségek nyelvhasználata' },
        {
          kind: 'text',
          text: 'Magyarországon a törvény **13 nemzetiséget** ismer el: bolgár, görög, horvát, lengyel, német, örmény, roma, román, ruszin, szerb, szlovák, szlovén és ukrán. A nemzetiségek tagjai jellemzően **kétnyelvűek**: otthon és a közösségben a nemzetiségi nyelvet, a hivatalos és a szélesebb körű életben a magyart használják. A fő veszély a **nyelvcsere**, vagyis az, hogy a következő generáció már nem tanulja meg a nemzetiségi nyelvet. Védik az **anyanyelvi oktatás**, a **nemzetiségi önkormányzatok**, a kultúra és a média támogatása. A roma közösségben két fő nyelv él (lovári és beás), a nemzetiségek többségének nyelve pedig a környező országok nyelvéhez kötődik.',
        },
        { kind: 'heading', text: 'Nyelvünk helyzete a Kárpát-medencében' },
        {
          kind: 'text',
          text: 'A magyar nyelvet nemcsak Magyarországon beszélik. Az **első világháború utáni békekötés (Trianon, 1920)** nyomán nagy magyar közösségek maradtak a szomszédos országokban: **Romániában** (Erdély), **Szlovákiában** (Felvidék), **Szerbiában** (Vajdaság), **Ukrajnában** (Kárpátalja), **Ausztriában** (Burgenland), **Horvátországban** és **Szlovéniában**. Ezekben az országokban a magyar **kisebbségi nyelv**, a többségi nyelv a hivatalos nyelv. A magyar nyelvhasználat így több színtéren megoszlik: a család, a templom, az iskola gyakran magyar, a hivatali ügyintézés államnyelvű. A többségi nyelv hatása a szavak átvételében, a kódváltásban, a kétnyelvűségben is megmutatkozik.',
        },
        {
          kind: 'map',
          title: 'Magyar közösségek a Kárpát-medencében (néhány jellemző táj)',
          places: [
            {
              name: 'Kolozsvár (Erdély)',
              lat: 46.77,
              lon: 23.59,
              note: 'Romániai magyar kisebbség központja.',
            },
            {
              name: 'Pozsony (Szlovákia)',
              lat: 48.15,
              lon: 17.11,
              note: 'A Felvidék nyugati kapuja.',
            },
            {
              name: 'Újvidék (Vajdaság)',
              lat: 45.25,
              lon: 19.84,
              note: 'Szerbiai magyarok központja.',
            },
            {
              name: 'Ungvár (Kárpátalja)',
              lat: 48.62,
              lon: 22.3,
              note: 'Ukrajnai magyar kisebbség.',
            },
          ],
        },
        { kind: 'heading', text: 'Nyelvi identitás és nyelvi sokszínűség' },
        {
          kind: 'text',
          text: 'A **nyelvi identitás** azt jelenti, hogy a nyelv a közösséghez tartozásunk jele. A kisebbségben élő magyarok számára az anyanyelv használata a **nemzeti hovatartozás** megélésének fő módja. A **nyelvi sokszínűség** (többnyelvűség) érték, mert minden nyelv sajátos módon rendezi a világot. Az Európai Unióban is alapelv a nyelvek egyenrangúsága; a magyar is hivatalos uniós nyelv. A sokszínűség nem zárja ki az **egységes magyar köznyelv** fenntartását, amely az összmagyarság összekötő kapcsa.',
        },
        {
          kind: 'warning',
          text: 'A nemzetiségek nyelvhasználatánál és a határon túli magyarok helyzeténél figyelj arra, hogy kétféle helyzetről van szó: **nálunk** élő nemzetiségek (a magyarok többségben) és a **máshol** élő magyarok (kisebbségben). A vizsgán ezt gyakran külön kérik.',
        },
        { kind: 'heading', text: 'Nyelv és politika, nyelvi tervezés' },
        {
          kind: 'text',
          text: 'A **nyelvpolitika** a nyelvek **használatát és helyzetét** érintő közösségi döntések összessége. Ide tartozik a **hivatalos nyelv** kijelölése (az Alaptörvény szerint Magyarország hivatalos nyelve a magyar), az oktatás nyelve, a kisebbségi nyelvek jogai. Régi példa: **II. József 1784-es nyelvrendelete** a németet tette hivatalos nyelvvé, a magyar nyelv jogait pedig az **1844. évi II. törvénycikk** erősítette meg (a magyar nyelv lett a közigazgatás és az oktatás nyelve).',
        },
        {
          kind: 'compare',
          title: 'A nyelvi tervezés két oldala',
          columns: ['Mit tervez?', 'Példa'],
          rows: [
            {
              label: 'státusztervezés',
              cells: [
                'a nyelv szerepe, helyzete a társadalomban',
                'hivatalos nyelv kijelölése, az oktatás nyelve',
              ],
            },
            {
              label: 'korpusztervezés',
              cells: ['a nyelv formája, szabályai', 'helyesírás szabályozása, szótárak, új szavak'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A korpusztervezés fontos eleme a **kodifikáció**: a norma leírása és rögzítése. Ilyen *A magyar helyesírás szabályai* (12. kiadás, 2015), az értelmező szótárak és a nyelvtanok. A magyar nyelvtervezés és -művelés legfontosabb intézménye a **Magyar Tudományos Akadémia** (alapítása: 1825, Magyar Tudós Társaság néven), amelynek egyik eredeti feladata a magyar nyelv gondozása volt.',
        },
        { kind: 'heading', text: 'Nyelvművelés' },
        {
          kind: 'text',
          text: 'A **nyelvművelés** a nyelvhasználat gondozása: a nyelvi norma megismertetése, a hibák javítása, a nyelvi kifejezőkészség fejlesztése. A régi nyelvművelés sokszor **tiltó, ítélkező** volt („ezt nem szabad mondani”). A **mai magyar nyelvművelés** másképp működik: **leíró** szemléletű, figyeli a változásokat, helyzetfüggőn értékel (az a jó, ami a helyzethez illő), és **tanácsot ad**, nem büntet. Fontos formái: iskolai oktatás, nyelvi tanácsadó szolgálatok, folyóiratok, médiabeli nyelvi műsorok, ismeretterjesztés.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: nyelvművelői szemlélet',
          problem:
            'Egy fiatal így ír a barátjának: *Fú, ez durva cringe volt, de legalább lájkoltad!* Hogyan értékelné ezt a mai nyelvművelés?',
          solution:
            'A mai nyelvművelés **nem a hibát keresi**, hanem a **helyzethez illő** nyelvhasználatot vizsgálja. A mondat egy kötetlen, baráti üzenetben **elfogadható szleng**, amely angol eredetű szavakat (*cringe*, *lájkol*) is tartalmaz. Egy hivatalos levélben vagy dolgozatban viszont **nem megfelelő**, ott köznyelvi vagy irodalmi nyelvi változatot kell használni. A tanács tehát: **ismerd a normát, és válaszd meg a helyzetnek megfelelő stílust**.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten kérdés, hogyan segíti a nyelvművelés az **új nyelvi jelenségek** értelmezését. Ilyen az internetes és chatnyelv (rövidítések, emojik, kisbetűs írás), az **angol jövevényszavak** (*sorry*, *like*) vagy a divatos kifejezések terjedése. A nyelvművelő itt nem megállítani akarja a változást, hanem **leírja, magyarázza** (honnan, miért terjed, kiknél, milyen helyzetben), **értékeli** (mennyire illik a helyzethez, mennyire gazdagítja vagy szegényíti a nyelvet) és **tanácsot ad** (mikor célszerű köznyelvi vagy magyaros megfelelőt használni).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegértési-nyelvi feladat: újságcikk vagy interjúrészlet a határon túli magyarok nyelvhasználatáról, a nemzetiségek helyzetéről, nyelvi sokszínűségről; információk kigyűjtése, álláspont értelmezése.',
            'Szóbeli tétel: „Nyelvünk helyzete a Kárpát-medencében”, „A mai magyar nyelvművelés”, „Nyelvpolitika és nyelvi tervezés”; mellé idézet, törvényrészlet, újságoldal.',
            'Emelt szinten: egy új nyelvi jelenség (például chatnyelv, anglicizmus) értelmezése nyelvművelői szempontból.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne azt írd, hogy a nyelvművelés „tiltja” a szlenget, az idegen szavakat vagy a nyelvjárást. A mai szemlélet: nincs rossz nyelvváltozat, **rossz helyzet** van. Ne keverd a nyelvpolitikát (társadalmi, politikai döntés) a nyelvművelés eszközeivel (tanács, ismeretterjesztés).',
        },
        {
          kind: 'tip',
          text: 'Szóbeli vázlat a Kárpát-medencei tételhez: **1.** a magyar nyelvterület, a trianoni változások; **2.** a kisebbségi helyzet nyelvi következményei (kétnyelvűség, kódváltás, átvett szavak); **3.** a nyelvhasználati színterek (család, iskola, hivatal); **4.** a nyelvi identitás és a köznyelv összekötő szerepe; **5.** egy példa a mellékelt szövegből.',
        },
      ],
      topicMatch: [
        'nyelv és társadalom',
        'nemzetiség',
        'nyelvpolitika',
        'nyelvművelés',
        'nyelvi tervezés',
      ],
      quiz: [
        {
          question: 'Hány nemzetiséget ismer el Magyarország törvénye?',
          options: ['3', '8', '13', '24'],
          answer: 2,
          explanation:
            'A törvény 13 nemzetiséget ismer el, köztük a németet, a szlovákot, a románt és a romát.',
        },
        {
          question: 'Melyik állítás jellemzi a mai magyar nyelvművelést?',
          options: [
            'Mindent megtilt, ami nem irodalmi nyelv.',
            'Tanácsot ad, és helyzetfüggően értékel.',
            'A nyelvjárásokat felszámolja.',
            'Csak a helyesírással foglalkozik.',
          ],
          answer: 1,
          explanation:
            'A mai nyelvművelés leíró, tanácsadó jellegű, és azt vizsgálja, mi illik a helyzethez; nem tilt.',
        },
        {
          question: 'Mit jelent a nyelvi identitás?',
          options: [
            'A beszélő nyelve a közösségéhez tartozás jele.',
            'A nyelvtani szabályok összessége.',
            'Egy szótár címe.',
            'Idegen nyelvű oktatás.',
          ],
          answer: 0,
          explanation:
            'A nyelvi identitás a nyelvhez kötődő hovatartozás-érzés, különösen fontos a kisebbségben élők számára.',
        },
        {
          question: 'Melyik példa a korpusztervezésre?',
          options: [
            'A magyar nyelv hivatalos nyelvvé nyilvánítása.',
            'Az oktatás nyelvének kijelölése.',
            'A helyesírás szabályozása.',
            'A kisebbségi nyelvhasználati jog megadása.',
          ],
          answer: 2,
          explanation:
            'A korpusztervezés a nyelv formájára (helyesírás, szókincs) vonatkozik. A többi a státusztervezés példája.',
        },
        {
          question: 'Melyik országban van a Vajdaság?',
          options: ['Szlovákia', 'Szerbia', 'Románia', 'Horvátország'],
          answer: 1,
          explanation: 'A Vajdaság Szerbia tartománya, itt él a szerbiai magyarok nagy része.',
        },
        {
          question:
            'Hogyan közelít a mai nyelvművelés az új nyelvi jelenségekhez (például a chatnyelvhez)?',
          options: [
            'Tiltja őket, mert rontják a nyelvet.',
            'Leírja, magyarázza, helyzetfüggően értékeli és tanácsot ad.',
            'Figyelmen kívül hagyja őket.',
            'Törvénnyel szabályozza őket.',
          ],
          answer: 1,
          explanation:
            'A nyelvművelés szerepe az új jelenségek értelmezése: honnan jönnek, kik használják, milyen helyzetben megfelelőek.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Nyelvpolitika', url: wiki('Nyelvpolitika') },
        { label: 'Wikipédia: Nyelvművelés', url: wiki('Nyelvművelés') },
        { label: 'Wikipédia: Magyarországi nemzetiségek', url: wiki('Magyarországi nemzetiségek') },
      ],
    },
    {
      id: 'nyelvtipologia-jelnyelv-ketnyelvuseg',
      subject: 'magyar',
      unitId: 'ember-es-nyelvhasznalat',
      title: 'Nyelvtipológia, jelnyelvek, kétnyelvűség',
      level: 'emelt',
      requirement: {
        emelt:
          'Korlátozott kódú nyelvek: gesztusnyelvek, jelnyelvek; a nyelvek egyező és eltérő tulajdonságai, nyelvtipológia, főbb nyelvtípusok és jellemzőik (agglutináló, izoláló, flektáló); a kétnyelvűség, kettősnyelvűség, kevert nyelvűség fogalma és kérdései.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Nyelvtipológia**: a nyelveket szerkezeti hasonlóságuk szerint csoportosítja, a rokonságtól függetlenül. Fő típusai: **agglutináló**, **izoláló**, **flektáló**.',
            'A **magyar** elsősorban **agglutináló** (toldalékoló): a szavakhoz sok, egyértelmű jelentésű toldalék kapcsolódik (*házaimban*).',
            '**Korlátozott kódú** nyelvek: a gesztusnyelvek (szűkebb jelkészlet, szűk használati kör) és a **jelnyelvek**. A siketek jelnyelve a nyelvészet szerint **teljes értékű nyelv**, saját nyelvtannal.',
            '**Kétnyelvűség** (bilingvizmus): az egyén vagy közösség két nyelvet használ. **Kettősnyelvűség** (diglosszia): a két nyelv vagy változat munkamegosztásban él.',
            '**Kevert nyelvűség**: a két nyelv elemei keverednek a beszédben (kódváltás, átvétel, tükörszó).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Nyelvtipológia: főbb nyelvtípusok' },
        {
          kind: 'text',
          emelt: true,
          text: 'A nyelvek rokonsága (nyelvcsalád) és típusa két különböző szempont. A **magyar** *nyelvrokonság* szerint a finnugor nyelvcsaládba tartozik, *típus* szerint pedig agglutináló. A **nyelvtipológia** a nyelveket szerkezeti sajátosságaik szerint osztályozza.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A három fő nyelvtípus',
          columns: ['Jellemzője', 'Példa'],
          rows: [
            {
              label: 'agglutináló (toldalékoló)',
              cells: [
                'a szótőhöz sorban, jól elkülöníthető toldalékok kapcsolódnak, mindegyik egy jelentést fejez ki',
                'magyar (*ház-a-i-m-ban*), török, finn',
              ],
            },
            {
              label: 'izoláló (elszigetelő)',
              cells: [
                'a szavak nem változnak, a nyelvtani viszonyt a szórend és kisebb segédszók jelzik',
                'kínai: *wǒ ài nǐ* (én szeretlek téged), *nǐ ài wǒ* (te szeretsz engem)',
              ],
            },
            {
              label: 'flektáló (hajlító)',
              cells: [
                'a toldalék több nyelvtani jelentést von össze, a szótő is változhat',
                'latin: *amo* (az -o egyszerre jelöli a személyt, számot és időt), indoeurópai nyelvek',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A nyelvek legtöbbször **vegyesek**: a magyarban is vannak flektáló vonások (például a szótő változása: *víz – vizet*), a latin vagy a német pedig nem tisztán flektáló. A besorolás tehát a **jellemző** tulajdonságot mutatja.',
        },
        { kind: 'heading', text: 'Korlátozott kódú nyelvek: gesztusnyelvek és jelnyelvek' },
        {
          kind: 'text',
          emelt: true,
          text: 'A **gesztusnyelvek** olyan jelrendszerek, amelyek mozdulatokból állnak, és szűkebb jelkészlettel, szűk használati körben működnek: például a búvárok kézjelei, a sportbírók vagy a tőzsdések jelzései, a szerzetesek hallgatási fogadalma mellett használt jelek. A **jelnyelvek** a siketek közösségeinek nyelvei. Nem a beszélt nyelv „lemásolásai”, hanem **önálló, természetes nyelvek**: kézmozdulatokból, arcjátékból és testtartásból építkeznek, **térben** fejezik ki a nyelvtani viszonyokat, és saját nyelvtanuk van. Külön jelnyelve van az egyes országoknak (például **magyar jelnyelv**), amelyet Magyarországon törvény is elismer. A követelmény mindkét típust a **korlátozott kódú** nyelvek közé sorolja; fontos, hogy a gesztusnyelvek és a siketek jelnyelve nem azonos fejlettségű: a jelnyelv hétköznapi életben is teljes közlésre alkalmas.',
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'Gyakori tévedés, hogy a jelnyelv „a magyar nyelv jelekkel”. Valójában önálló nyelv: más a szerkezete, és a magyar beszélt nyelvtől függetlenül működik. A jelnyelv nem is nemzetközi: országonként eltérő.',
        },
        { kind: 'heading', text: 'Kétnyelvűség, kettősnyelvűség, kevert nyelvűség' },
        {
          kind: 'compare',
          emelt: true,
          title: 'A három fogalom',
          columns: ['Jelentése', 'Példa'],
          rows: [
            {
              label: 'kétnyelvűség (bilingvizmus)',
              cells: [
                'az egyén vagy a közösség két nyelvet ismer és használ',
                'a vajdasági magyar, aki magyarul és szerbül is beszél',
              ],
            },
            {
              label: 'kettősnyelvűség (diglosszia)',
              cells: [
                'a két nyelv (vagy nyelvváltozat) szerepe elkülönül: az egyiket otthon, a másikat hivatalosan használják',
                'családban a kisebbségi nyelv, a hivatalban az államnyelv',
              ],
            },
            {
              label: 'kevert nyelvűség',
              cells: [
                'a két nyelv elemei egy beszédben keverednek',
                'kódváltás: *Holnap lesz a skúška, még nem tanultam.* (szlovák *skúška* = vizsga; szerkesztett példa)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az elnevezések használata a szakirodalomban és a tankönyvekben **eltérhet**: egyes szerzők a kétnyelvűséget az egyénre, a kettősnyelvűséget a közösségre vonatkoztatják. A **kevert nyelvűség** formái: **kódváltás** (az egyik nyelvről a másikra váltás mondaton belül vagy két mondat között), **kölcsönszó átvétele** és **tükörszó** (idegen szó szó szerinti lefordítása, például a *felhőkarcoló* az angol *skyscraper* mintájára). A kétnyelvűség **előnyei** (a nyelvtudás, a rugalmas gondolkodás, két kultúra ismerete) mellett **kérdései** is vannak: a nyelvcsere veszélye, a nyelvi bizonytalanság, a kisebbségi nyelv visszaszorulása.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: nyelvtípus meghatározása',
          problem:
            'Állapítsd meg a nyelvtípust! a) magyar: *ház-a-i-nk-ban*, b) kínai: *tā ài wǒ* (ő szeret engem), c) latin: *lupus* (farkas alanyesetben), *lupum* (tárgyesetben).',
          solution:
            'a) **agglutináló**: egymás után jól elkülöníthető toldalékok (a példa szerkesztett, az elv a lényeg).\n\nb) **izoláló**: a szavak nem változnak, a viszonyt a szórend adja (*tā ài wǒ* és *wǒ ài tā* jelentése más).\n\nc) **flektáló**: a végződés változása (-us, -um) az esetet és a számot egyszerre jelöli.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű szóbeli tétel: a nyelvek típusai, a magyar nyelv helye (agglutináló), példa szerkezetek elemzése.',
            'Szövegrész (újságcikk, interjú) kétnyelvű környezetből: a kódváltás, a nyelvcsere, a kisebbségi nyelvhasználat felismerése, értelmezése.',
            'Jelnyelvről szóló szöveg vagy kép: a jelnyelv helyzete, a korlátozott kódú nyelv fogalma.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd a nyelvrokonságot a nyelvtípussal: a magyar finnugor (rokonság), de agglutináló (típus). A török is agglutináló, mégsem finnugor. A kétnyelvűséget és a kettősnyelvűséget se keverd: az elsőnél a nyelvek ismerete, a másodiknál a **szerepek elkülönülése** a kulcs.',
        },
        {
          kind: 'tip',
          text: 'A nyelvtípusoknál mindig adj **példát** is: *házaimban* (agglutináló), a kínai szórendes példa (izoláló), a latin *amo* (flektáló). A példa mutatja meg, hogy értetted a fogalmat.',
        },
      ],
      topicMatch: ['nyelvtipológia', 'jelnyelv', 'kétnyelvűség', 'kettősnyelvűség'],
      quiz: [
        {
          question: 'Melyik nyelvtípusba tartozik elsősorban a magyar?',
          options: ['izoláló', 'agglutináló', 'flektáló', 'jelnyelv'],
          answer: 1,
          explanation:
            'A magyar elsősorban agglutináló: a szótőhöz egymás után, jól elkülöníthető toldalékok kapcsolódnak (*házaimban*).',
        },
        {
          question: 'Mi jellemző az izoláló nyelvekre?',
          options: [
            'Sok toldalékot használnak egymás után.',
            'A nyelvtani viszonyt főleg a szórend és a segédszavak jelzik.',
            'A toldalék több jelentést von össze.',
            'Nincs szórendjük.',
          ],
          answer: 1,
          explanation:
            'Az izoláló nyelvben (például kínai) a szavak alakja nem változik, a viszonyokat a szórend adja.',
        },
        {
          question: 'Mit jelent a kettősnyelvűség (diglosszia)?',
          options: [
            'Valaki csak a nyelvtant ismeri.',
            'Két nyelv vagy változat munkamegosztásban él a közösségben.',
            'Két magyar nyelvjárás keveredése.',
            'Az idegen nyelvek tanulása az iskolában.',
          ],
          answer: 1,
          explanation:
            'A kettősnyelvűségben a két nyelv (változat) elkülönülő szerepet kap, például otthon az egyik, hivatalban a másik.',
        },
        {
          question: 'Melyik állítás igaz a jelnyelvekre?',
          options: [
            'Egyetlen közös nemzetközi jelnyelv van.',
            'A beszélt nyelv jelekkel kísért változata.',
            'Önálló, természetes nyelvek saját nyelvtannal.',
            'Csak gesztusokból állnak, nyelvtanuk nincs.',
          ],
          answer: 2,
          explanation:
            'A siketek jelnyelve önálló nyelv, térben fejezi ki a nyelvtani viszonyokat, és országonként eltér.',
        },
        {
          question: 'Melyik példa a kódváltásra?',
          options: [
            'A felhőkarcoló szó az angol skyscraper mintájára.',
            'Mondaton belül átváltani a másik nyelvre: *Holnap lesz a skúška.*',
            'Az ö-zés használata.',
            'A hivatalos levél irodalmi nyelven.',
          ],
          answer: 1,
          explanation:
            'A kódváltás az egyik nyelvről a másikra váltás a beszédben. A felhőkarcoló tükörszó, az ö-zés nyelvjárási jelenség.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Nyelvtipológia', url: wiki('Nyelvtipológia') },
        { label: 'Wikipédia: Jelnyelv', url: wiki('Jelnyelv') },
        { label: 'Wikipédia: Kétnyelvűség', url: wiki('Kétnyelvűség') },
      ],
    },
  ],
};

export default unit;
