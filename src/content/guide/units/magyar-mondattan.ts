import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv: A nyelvi rendszer (4. témakör), második fele: szintagmatikus szerkezet és mondattan. */
const unit: GuideUnit = {
  id: 'mondattan',
  subject: 'magyar',
  order: 14,
  title: 'Szószerkezetek és mondattan',
  requirementRef: 'Nyelv 4. A nyelvi rendszer: A mondat szintagmatikus szerkezete; Mondattan',
  intro:
    'A szószerkezetek (szintagmák) és a mondatrészek, majd a mondat: fajtái a beszélő szándéka és a szerkezet szerint, az egyszerű és az összetett mondat, a szerkezeti vázlat és a vesszőhasználat. Sok kidolgozott mondatelemzéssel.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Nyelv 4. témakör: A mondat szintagmatikus szerkezete, Mondattan). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan. A hangtan és az alaktan külön tananyag.',
  pages: [
    {
      id: 'szoszerkezet-szintagma-tipusai',
      subject: 'magyar',
      unitId: 'mondattan',
      title: 'A szószerkezet és a szintagmák típusai',
      level: 'kozep',
      requirement: {
        kozep:
          'A szószerkezet fogalma, a szintagmák típusai, szerepük a mondat felépítésében, mondatbeli viszonyaik.',
        emelt: 'A vonzat.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szószerkezet** (szintagma) két vagy több, jelentésben és nyelvtanilag összetartozó szó kapcsolata: *kék ég*, *levelet ír*, *kenyér és tej*.',
            'Két fő típusa az **alárendelő** (van **alaptag** és **bővítmény**) és a **mellérendelő** (a tagok egyenrangúak) szintagma.',
            'Az **alany és az állítmány** kapcsolata a mondat alapja (a tankönyvek **alanyos-állítmányos**, újabban **hozzárendelő** szintagmának nevezik). Az alárendelő szintagma lehet **tárgyas**, **határozós** és **jelzős**, aszerint, hogy a bővítmény milyen mondatrész.',
            'A szintagmák a mondat építőkövei: a mondatrészek többnyire szintagmákká bővülnek.',
            'Emelt szinten ide tartozik a **vonzat**: az az esetrag vagy névutó, amelyet a szó megkíván (*bízik valakiben*).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'szintagma',
              text: 'Szószerkezet: két vagy több szó, amely a mondatban egy egységet alkot.',
            },
            {
              term: 'alaptag',
              text: 'Az alárendelő szintagma meghatározott, bővített tagja (*kék ég*: az *ég*).',
            },
            {
              term: 'bővítmény',
              text: 'Az alaptagot kiegészítő, jellemző tag (*kék ég*: a *kék*).',
            },
            {
              term: 'mellérendelő szintagma',
              text: 'A tagok egyenrangúak, nincs alaptag és bővítmény: *kenyér és tej*.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a szószerkezet?' },
        {
          kind: 'text',
          text: 'A mondat nem külön szavak sorozata: a szavak **szerkezeteket** alkotnak, és ezek a szerkezetek épülnek össze mondattá. A nyelvtudomány a szószerkezetet **szintagmának** nevezi. Szintagma például az *esti séta*, a *fut a kertben* vagy a *tea vagy kávé*. Két szó csak akkor alkot szintagmát, ha a kapcsolatuk **nyelvtani**: az egyik a másikhoz tartozik, vagy a kettő egyenrangúan kapcsolódik. A puszta egymás mellé írás még nem szerkezet.',
        },
        { kind: 'heading', text: 'Alárendelő szintagmák' },
        {
          kind: 'text',
          text: 'Az alárendelő szintagmában az egyik tag, az **alaptag** a fontosabb, a másik, a **bővítmény** pedig kiegészíti, pontosítja. A szintagma típusát az adja, hogy a bővítmény milyen mondatrész.',
        },
        {
          kind: 'compare',
          title: 'Az alárendelő szintagmák fajtái',
          columns: ['Hogyan épül fel', 'Példa'],
          rows: [
            {
              label: 'jelzős',
              cells: [
                'alaptag: a jelzett szó; bővítmény: a jelző',
                '*kék ég* (alaptag: ég), *Anna könyve*',
              ],
            },
            {
              label: 'tárgyas',
              cells: ['alaptag: az ige; bővítmény: a tárgy', '*levelet ír*, *látja a barátját*'],
            },
            {
              label: 'határozós',
              cells: [
                'alaptag: az ige vagy más szó; bővítmény: a határozó',
                '*gyorsan fut*, *a kertben játszik*, *nagyon szép*',
              ],
            },
            {
              label: 'alanyos-állítmányos (hozzárendelő)',
              cells: [
                'az alany és az állítmány kölcsönösen feltételezi egymást, egyik sem bővítménye a másiknak',
                '*a gyerek játszik*, *Anna énekel*',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **alany és az állítmány** viszonya különleges: egyik sem létezhet a másik nélkül, kölcsönösen feltételezik egymást. A tankönyvek ezt **alanyos-állítmányos**, újabban **hozzárendelő** (predikatív) szintagmának nevezik, és külön tárgyalják a többi alárendelő szintagmától. Nézd meg, a te tankönyved melyik elnevezést használja.',
        },
        { kind: 'heading', text: 'Mellérendelő szintagmák' },
        {
          kind: 'text',
          text: 'A mellérendelő szintagmában a tagok **egyenrangúak**: felcserélhetők, nincs alaptag és bővítmény. A kapcsolat fajtája a kötőszótól vagy a jelentéstől függ.\n\n- **kapcsolatos**: *kenyér és tej*, *szép, nagy ház*\n- **ellentétes**: *olcsó, de rossz*\n- **választó**: *tea vagy kávé*\n- **magyarázó**: *Péter, azaz a bátyám*',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: szintagmák felismerése',
          problem:
            'Határozd meg a szintagmák típusát! a) *piros alma*, b) *almát eszik*, c) *csendesen beszél*, d) *kávé vagy tea*, e) *a madár énekel*',
          solution:
            'a) **jelzős** szintagma: alaptag az *alma*, bővítmény a *piros* (minőségjelző).\n\nb) **tárgyas** szintagma: alaptag az *eszik*, bővítmény az *almát* (tárgy: mit eszik?).\n\nc) **határozós** szintagma: alaptag a *beszél*, bővítmény a *csendesen* (módhatározó).\n\nd) **mellérendelő** (választó) szintagma: a *kávé* és a *tea* egyenrangú.\n\ne) **alany és állítmány** kapcsolata (alanyos-állítmányos vagy hozzárendelő szintagma): *a madár* az alany, *énekel* az állítmány.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: szintagmák egy mondatban',
          problem:
            'Keresd meg az alárendelő szintagmákat a mondatban: *A kis fiú gyorsan megette a meleg levest.*',
          solution:
            '- *kis fiú*: jelzős (bővítmény: *kis*, minőségjelző)\n- *a fiú megette*: alany és állítmány kapcsolata\n- *gyorsan megette*: határozós (módhatározó)\n- *megette a levest*: tárgyas\n- *meleg levest*: jelzős (bővítmény: *meleg*)\n\nA szintagmák egymásba is kapcsolódnak: a *meleg levest* maga is egy tárgy, amely a *megette* szóhoz tartozik.',
        },
        { kind: 'heading', text: 'A vonzat', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **igék és egyes névszók** megkívánnak bizonyos viszonyragos vagy névutós bővítményt: ez a **vonzat**. Például a *bízik* ige *-ban/-ben* ragos bővítményt vár (*bízik valakiben*), a *fél* *-tól/-től* ragosat (*fél valakitől*), a *gondol* *-ra/-re* ragosat (*gondol valamire*), a *ragaszkodik* *-hoz/-hez/-höz* ragosat (*ragaszkodik valamihez*). A vonzat nem szabadon választott bővítmény, a szó jelentésével jár együtt.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Vonzat és szabad bővítmény',
          columns: ['Vonzat', 'Szabad bővítmény'],
          rows: [
            {
              label: 'Mi dönti el?',
              cells: [
                'a szó (az ige vagy a névszó) megköveteli',
                'bármilyen, a jelentés szerint illő mondat mellé állhat',
              ],
            },
            {
              label: 'Példa',
              cells: [
                '*bízik a barátjában*, *fél a sötétségtől*',
                '*tegnap*, *a kertben*, *gyorsan* (sok igével használható)',
              ],
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa 3.: vonzatok pótlása',
          problem:
            'Egészítsd ki a mondatokat a megfelelő raggal: *Ragaszkodom a véleményem… . Bízom a siker… . Gondolok a holnapi dolgozat… .*',
          solution:
            '*Ragaszkodom* valamihez: *ragaszkodom a véleményemhez* (-hoz/-hez/-höz).\n\n*Bízom* valamiben: *bízom a sikerben* (-ban/-ben).\n\n*Gondolok* valamire: *gondolok a holnapi dolgozatra* (-ra/-re).\n\nA vonzatot az ige határozza meg, nem a mondat többi része.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A szövegértési-nyelvi feladatsorban a szövegből kiemelt szószerkezet típusát kell megadni (jelzős, tárgyas, határozós…).',
            'Szóbeli nyelvi tételben a szintagmák típusait és a mondatrészekkel való kapcsolatukat kell bemutatni egy rövid szöveg vagy mondat példáin.',
            'Emelt szinten a vonzatos szerkezetek felismerése és helyes használata (hibás vonzat javítása).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a **mellérendelő szintagmát** is alaptaggal és bővítménnyel elemzik. Ott a tagok egyenrangúak, ezért nincs alaptag. Másik gyakori hiba, hogy a tárgyas szintagmát a **szórend** alapján ítélik meg: nem az számít, melyik szó áll elöl, hanem hogy a bővítmény milyen kérdésre felel.',
        },
        {
          kind: 'tip',
          text: 'Módszer: **1.** írd ki a szintagmát; **2.** keresd meg az alaptagot (amihez kérdezel); **3.** tedd fel a kérdést a bővítményre (milyen? kit/mit? hol? hogyan?); **4.** a kérdés megmondja a típust. Ha nincs alaptag és bővítmény, mellérendelő szintagmával van dolgod.',
        },
      ],
      topicMatch: ['szószerkezet', 'szintagma'],
      quiz: [
        {
          question: 'Melyik szintagma jelzős?',
          options: ['levelet ír', 'gyorsan fut', 'magas fa', 'tea vagy kávé'],
          answer: 2,
          explanation:
            'A *magas fa* jelzős: az alaptag a *fa*, a bővítmény a *magas* (minőségjelző). A *levelet ír* tárgyas, a *gyorsan fut* határozós, a *tea vagy kávé* mellérendelő.',
        },
        {
          question: 'Melyik állítás igaz a mellérendelő szintagmára?',
          options: [
            'Az első tag mindig az alaptag.',
            'A tagok egyenrangúak, nincs alaptag és bővítmény.',
            'Mindig határozót tartalmaz.',
            'Csak igékből állhat.',
          ],
          answer: 1,
          explanation:
            'A mellérendelő szintagma tagjai egyenrangúak (*kenyér és tej*), ezért nincs alaptag és bővítmény.',
        },
        {
          question: 'Milyen típusú szintagma a *könyvet olvas*?',
          options: ['jelzős', 'tárgyas', 'határozós', 'mellérendelő'],
          answer: 1,
          explanation:
            'A bővítmény (*könyvet*) a tárgy: mit olvas? Az alaptag az ige, ezért a szintagma tárgyas.',
        },
        {
          question: 'Melyik a mellérendelő szintagma az alábbiak közül?',
          options: ['szép idő', 'a kertben játszik', 'olcsó, de rossz', 'Anna könyve'],
          answer: 2,
          explanation:
            'Az *olcsó, de rossz* ellentétes mellérendelés: a két melléknév egyenrangú. A többi alárendelő szintagma.',
        },
        {
          question: 'Melyik példa mutat vonzatot?',
          options: [
            'Tegnap sétált.',
            'Gyorsan beszél.',
            'Fél a sötétségtől.',
            'Hosszú levelet írt.',
          ],
          answer: 2,
          emelt: true,
          explanation:
            'A *fél* ige megkívánja a *-tól/-től* ragos bővítményt (*fél valakitől/valamitől*): ez a vonzat. A *tegnap* és a *gyorsan* szabad bővítmény.',
        },
      ],
      sources: [
        { label: 'Szintagma (Wikipedia)', url: wiki('szintagma nyelvtan') },
        { label: 'Szószerkezet (Wikipedia)', url: wiki('szószerkezet magyar nyelvtan') },
        { label: 'Vonzat (Wikipedia)', url: wiki('vonzat nyelvtan') },
      ],
    },
    {
      id: 'mondatreszek-felismerese',
      subject: 'magyar',
      unitId: 'mondattan',
      title: 'A mondatrészek felismerése',
      level: 'kozep',
      requirement: {
        kozep:
          'A mondatrészek fogalma, fajtái, felismerésük mondatban, helyes használatuk a mondatok felépítésében (állítmány, alany, tárgy, határozó, jelző).',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A mondatrészek a mondat szerkezeti elemei: **állítmány**, **alany**, **tárgy**, **határozó**, **jelző**.',
            'A mondat magja az **állítmány**; az alany arra felel, ki vagy mi végzi az állítmány cselekvését.',
            'A **tárgy** kérdése *kit? mit?*, a **határozó** kérdései: hol? mikor? hogyan? miért? stb., a **jelzőé**: milyen? melyik? hány? kinek a?',
            'Az elemzés menete: állítmány, alany, majd a bővítmények kérdésekkel.',
          ],
        },
        {
          kind: 'compare',
          title: 'A mondatrészek kérdései',
          columns: ['Kérdés', 'Példa'],
          rows: [
            { label: 'állítmány', cells: ['mit csinál? milyen? mi?', '*olvas*, *fáradt volt*'] },
            { label: 'alany', cells: ['ki? mi?', '*A gyerek* olvas.'] },
            { label: 'tárgy', cells: ['kit? mit?', 'Olvassa *a levelet*.'] },
            { label: 'határozó', cells: ['hol? mikor? hogyan? miért?', 'Olvas *a kertben*.'] },
            { label: 'jelző', cells: ['milyen? melyik? hány? kinek a?', '*Régi* könyvet olvas.'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az állítmány' },
        {
          kind: 'text',
          text: 'Az **állítmány** a mondat központi eleme, azt fejezi ki, mit tudunk meg az alanyról (mit csinál, milyen, ki vagy mi). Három fajtája van:\n\n- **igei állítmány**: igével fejezzük ki: *A gyerek fut.*\n- **névszói állítmány**: névszó (főnév, melléknév), ige nélkül, csak jelen idejű, kijelentő módú, egyes szám harmadik személyben: *A víz hideg.*\n- **névszói-igei állítmány**: névszó és a *van* ige valamelyik alakja: *A víz hideg volt. A gyerek tanár lesz.*',
        },
        { kind: 'heading', text: 'Az alany és a tárgy' },
        {
          kind: 'text',
          text: 'Az **alany** a *ki? mi?* kérdésre felel, az állítmány cselekvőjét vagy jellemzettjét jelöli. Nem mindig van kimondva: a **kihagyott alany** a személyragból derül ki (*Megyek.* = én megyek), a **határozatlan alany** nem nevezi meg a cselekvőt (*Kopogtak.*).\n\nA **tárgy** a *kit? mit?* kérdésre felel, rendszerint **-t** raggal áll (*levelet*, *a fiút*). Az igék **tárgyas** (határozott) és **tárgyatlan/határozatlan** ragozása is a tárgy meglétére utal: *Látom a házat.* – *Látok egy házat.*',
        },
        { kind: 'heading', text: 'A határozók' },
        {
          kind: 'text',
          text: 'A határozó az állítmányt (vagy más szót) jellemzi. A leggyakoribb fajták:\n\n- **helyhatározó**: hol? honnan? hová? (*a kertben*, *az iskolából*)\n- **időhatározó**: mikor? meddig? (*tegnap*, *estig*)\n- **módhatározó**: hogyan? (*gyorsan*, *nagy örömmel*)\n- **állapothatározó**: milyen állapotban? (*fáradtan érkezett*)\n- **eszközhatározó**: mivel? (*tollal ír*)\n- **társhatározó**: kivel? (*a barátjával*)\n- **okhatározó**: miért? mi okból? (*a hideg miatt*)\n- **célhatározó**: mi célból? (*a vizsgára tanul*)\n- **mennyiséghatározó**: mennyit? mennyire? (*sokat alszik*)\n- **részeshatározó**: kinek? minek? (*a barátjának*)',
        },
        { kind: 'heading', text: 'A jelzők' },
        {
          kind: 'text',
          text: 'A jelző a főnevet (vagy főnévi értékű szót) jellemzi:\n\n- **minőségjelző**: milyen? (*szép kert*)\n- **mennyiségjelző**: hány? mennyi? (*három alma*, *sok ember*)\n- **birtokos jelző**: kinek a? minek a? (*Anna könyve*, *a ház teteje*)\n- **értelmező jelző**: a főnevet azonosítja, pontosítja (*Budapest, a főváros*)',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: mondatrészek meghatározása',
          problem: 'Határozd meg a mondatrészeket! *Tegnap a gyerekek vidáman fociztak a kertben.*',
          solution:
            '**Állítmány**: *fociztak* (igei; mit csináltak?).\n\n**Alany**: *a gyerekek* (kik?).\n\n**Időhatározó**: *tegnap* (mikor?).\n\n**Módhatározó**: *vidáman* (hogyan?).\n\n**Helyhatározó**: *a kertben* (hol?).\n\nTárgy nincs, mert az ige tárgyatlan.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: tárgy, részeshatározó, jelző',
          problem: 'Elemezd a mondatot! *Anna a barátnőjének szép virágot vitt.*',
          solution:
            '**Alany**: *Anna* (ki?).\n\n**Állítmány**: *vitt* (igei).\n\n**Részeshatározó**: *a barátnőjének* (kinek?).\n\n**Tárgy**: *virágot* (mit?).\n\n**Minőségjelző**: *szép* (milyen virágot?), a *virágot* szóhoz tartozik.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: névszói-igei állítmány',
          problem:
            'Mondd meg az állítmány fajtáját! a) *A víz hideg.* b) *A tanár nagyon türelmes volt.* c) *Anna orvos lesz.*',
          solution:
            'a) **névszói** állítmány: *hideg* (nincs kimondott ige, jelen idő, kijelentő mód, egyes szám harmadik személy).\n\nb) **névszói-igei** állítmány: *türelmes volt* (névszó és a *van* múlt idejű alakja). A *nagyon* a *türelmes* szó határozója, az alany *a tanár*.\n\nc) **névszói-igei** állítmány: *orvos lesz*.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Kiemelt mondatrész fajtájának megadása (a szövegértési-nyelvi feladatsorban, a szövegből vett mondat alapján).',
            'Mondat elemzése: az összes mondatrész megnevezése, kérdésekkel.',
            'Szóbeli tételben: a mondatrészek bemutatása saját vagy kapott példamondatokon.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: **1.** a birtokos jelzőt (*Anna könyve*) összekeverik a részeshatározóval (*Annának adta*); **2.** a névszói állítmányt jelzőnek veszik (*A víz hideg*: ott a *hideg* az állítmány); **3.** a tárgyat határozónak minősítik, mert ragos; a megkülönböztetés kérdései: *kit? mit?* (tárgy) – *hol? kivel? mivel?* (határozó).',
        },
        {
          kind: 'tip',
          text: 'Elemzéskor mindig az **állítmánnyal** kezdj, aztán keresd meg az alanyt (*ki? mi?*), és csak utána a bővítményeket. Ha a kérdés nem vezet célhoz, nézd meg, melyik szóhoz tartozik a szó.',
        },
      ],
      topicMatch: ['mondatrész'],
      quiz: [
        {
          question: 'Mi az állítmány a következő mondatban: *A kutya hangosan ugat.*?',
          options: ['kutya', 'hangosan', 'ugat', 'A kutya'],
          answer: 2,
          explanation:
            'Az *ugat* az állítmány, mert ez fejezi ki, mit csinál az alany. A *kutya* az alany, a *hangosan* módhatározó.',
        },
        {
          question: 'Melyik mondatrész a *szép* a következőben: *Szép virágot kaptam.*?',
          options: ['tárgy', 'minőségjelző', 'módhatározó', 'állítmány'],
          answer: 1,
          explanation: 'A *szép* a *virágot* szót jellemzi (milyen virágot?), ezért minőségjelző.',
        },
        {
          question: 'Melyik mondatban névszói-igei az állítmány?',
          options: ['A fiú fut.', 'A víz hideg.', 'A fiú sportoló lett.', 'Anna olvas.'],
          answer: 2,
          explanation:
            'A *sportoló lett* névszó és a *van* ige (*lett*) kapcsolata. A *A víz hideg* névszói, a többi igei állítmányú.',
        },
        {
          question: 'Melyik a részeshatározó?',
          options: [
            'Anna könyve.',
            'Anna a testvérének írt levelet.',
            'Anna gyorsan fut.',
            'Anna levelet írt.',
          ],
          answer: 1,
          explanation:
            'A *a testvérének* a *kinek?* kérdésre felel, ez a részeshatározó. Az *Anna könyve* birtokos jelzős szerkezet.',
        },
        {
          question: 'Mi az *Éva* a mondatban: *Megérkezett Éva, a barátnőm.*?',
          options: ['Alany', 'Tárgy', 'Értelmező jelző', 'Részeshatározó'],
          answer: 0,
          explanation:
            'Az *Éva* az alany (ki érkezett meg?). A *a barátnőm* az alanyt azonosító értelmező jelző.',
        },
      ],
      sources: [
        { label: 'Mondatrész (Wikipedia)', url: wiki('mondatrész magyar nyelvtan') },
        { label: 'Állítmány (Wikipedia)', url: wiki('állítmány nyelvtan') },
        { label: 'Határozó (Wikipedia)', url: wiki('határozó nyelvtan') },
      ],
    },
    {
      id: 'mondat-fogalma-mondatfajtak',
      subject: 'magyar',
      unitId: 'mondattan',
      title: 'A mondat fogalma és fajtái',
      level: 'kozep',
      requirement: {
        kozep:
          'A mondat fogalma, a mondat szerkesztettség és mondatfajta szerinti típusai; a helyes mondatszerkesztés a gyakorlatban.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **mondat** viszonylag befejezett gondolatot kifejező, hanglejtéssel lezárt nyelvi egység; írásban nagybetűvel kezdődik és írásjellel zárul.',
            '**A beszélő szándéka szerint**: kijelentő, kérdő, felkiáltó, felszólító, óhajtó.',
            '**Szerkesztettség szerint**: tagolt vagy tagolatlan, teljes vagy hiányos, egyszerű vagy összetett.',
            'A **tagolatlan mondat** (mondatszó) nem bontható mondatrészekre: *Igen. Jaj!*',
          ],
        },
        {
          kind: 'compare',
          title: 'A mondatfajták a beszélő szándéka szerint',
          columns: ['Mit fejez ki', 'Példa'],
          rows: [
            { label: 'kijelentő', cells: ['közöl, állít', '*Esik az eső.*'] },
            { label: 'kérdő', cells: ['kérdez, információt kér', '*Mikor jössz?*'] },
            {
              label: 'felkiáltó',
              cells: ['érzelmet, csodálkozást fejez ki', '*Milyen szép ez a kert!*'],
            },
            {
              label: 'felszólító',
              cells: ['kér, parancsol, tilt, tanácsol', '*Gyere ide! Ne menj el!*'],
            },
            { label: 'óhajtó', cells: ['kívánságot fejez ki', '*Bárcsak itt lennél!*'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a mondat?' },
        {
          kind: 'text',
          text: 'A mondat a beszéd és az írás **alapvető egysége**: viszonylag önálló és lezárt tartalmú közlés. Jellemzői:\n\n- a tartalom **befejezett** gondolat,\n- a beszédben a **hanglejtés** (intonáció) és a szünet zárja le,\n- az írásban **nagybetűvel** kezdődik, és **záró írásjel** (pont, kérdőjel, felkiáltójel) követi.\n\nA mondat többnyire az **állítmány** köré szerveződik, de a mondat nem mindig tartalmaz állítmányt (mondatszó).',
        },
        { kind: 'heading', text: 'Mondatfajták a beszélő szándéka szerint' },
        {
          kind: 'text',
          text: 'A mondat fajtáját az dönti el, hogy a beszélő **mit akar** vele: közölni, kérdezni, felszólítani, érzelmet kifejezni vagy kívánni.\n\n- A **kijelentő** mondat tényt közöl; záró írásjele általában a pont.\n- A **kérdő** mondat lehet **eldöntendő** (*Itt lakik?* – igen/nem a válasz) és **kiegészítendő** (*Hol lakik?* – kérdőszóval); írásjele a kérdőjel. Létezik **költői kérdés** is (*Ki ne szeretné a békét?*), amelyre nem várunk választ.\n- A **felkiáltó** mondat érzelmet, csodálkozást fejez ki; írásjele a felkiáltójel.\n- A **felszólító** mondat kérést, parancsot, tiltást, tanácsot fejez ki; írásjele pont vagy felkiáltójel.\n- Az **óhajtó** mondat kívánságot fejez ki, gyakran a *bárcsak*, *bár* szóval; írásjele általában felkiáltójel.',
        },
        {
          kind: 'warning',
          text: 'A mondat **alakja** és **szándéka** eltérhet egymástól. A *Nem tudnál segíteni?* alakja kérdő, de valójában udvarias kérés (felszólítás). A *Hát nem csodálatos ez a nap?* költői kérdés, tehát valójában kijelentés vagy felkiáltás. A vizsgán ilyenkor a **szándékot** kell megnevezni.',
        },
        { kind: 'heading', text: 'Mondatfajták szerkesztettség szerint' },
        {
          kind: 'text',
          text: '- **Tagolt mondat**: mondatrészekre bontható (*A gyerek fut.*).\n- **Tagolatlan mondat**: nem bontható mondatrészekre, egy **mondatszó** alkotja (*Igen. Nem. Jaj! Szervusz!*).\n- **Teljes mondat**: minden szükséges mondatrésze kimondott (*Anna levelet ír.*).\n- **Hiányos mondat**: valamelyik mondatrész kimaradt, de a helyzetből vagy a szövegkörnyezetből kiegészíthető (*– Mit olvasol? – Regényt.*).\n- **Egyszerű mondat**: egy állítmányi szerkezet (egy tagmondat); **összetett mondat**: két vagy több tagmondatból áll (részletesen a következő leckében).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: mondatfajta a beszélő szándéka szerint',
          problem:
            'Add meg a mondatok fajtáját a beszélő szándéka szerint! a) *Kérlek, csukd be az ajtót.* b) *Hány órakor kezdődik a film?* c) *Bárcsak megnyerném a pályázatot!* d) *A Duna Magyarország legnagyobb folyója.* e) *Milyen csodálatos ez a kilátás!*',
          solution:
            'a) **felszólító** (kérés).\n\nb) **kérdő** (kiegészítendő, mert kérdőszóval kérdez).\n\nc) **óhajtó** (*bárcsak*).\n\nd) **kijelentő** (tényt közöl).\n\ne) **felkiáltó** (érzelmet fejez ki).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: szerkesztettség szerinti besorolás',
          problem:
            'Jellemezd a mondatokat szerkesztettség szerint! a) *Igen.* b) *– Kit láttál? – Annát.* (a válasz) c) *A madarak délre költöznek.*',
          solution:
            'a) **tagolatlan** mondat: mondatszó, nem bontható mondatrészekre.\n\nb) A válasz (*Annát*) **hiányos** mondat: a kimaradt részek (*Annát láttam.*) a kérdésből kiegészíthetők. A tárgy a kimondott mondatrész.\n\nc) **tagolt, teljes, egyszerű** mondat: alany (*a madarak*), állítmány (*költöznek*) és helyhatározó (*délre*).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegben szereplő mondatok fajtáját kell megadni (a szándék és a szerkezet szerint).',
            'Mondatalkotás megadott szempont szerint: írj kérdő mondatot, óhajtó mondatot stb.',
            'Szóbeli tételben a mondat fogalma és típusai, példákkal.',
          ],
        },
        {
          kind: 'tip',
          text: '**Helyes mondatszerkesztés** a gyakorlatban: a mondat legyen világos, a mondatrészek kapcsolata egyértelmű. Kerüld a hosszú, áttekinthetetlen szerkezeteket, a kötőszavak hibás használatát és az igeneves szerkezetek túlzott halmozását. A szórend is jelentést hordoz, ezért gondold meg, mit szeretnél kiemelni.',
        },
        {
          kind: 'warning',
          text: 'Egy mondat egyszerre több szempont szerint is besorolható (*Esik az eső.* kijelentő, egyszerű, tagolt, teljes). A feladat mindig megmondja, **melyik szempontot** kéri. Ne keverd a kettőt: a *kijelentő* nem szerkezeti fajta, az *egyszerű* nem a beszélő szándéka.',
        },
      ],
      topicMatch: ['mondattan', 'mondatalkotás'],
      quiz: [
        {
          question: 'Melyik mondatfajta a *Bárcsak hazajönne!*?',
          options: ['kijelentő', 'óhajtó', 'felszólító', 'kérdő'],
          answer: 1,
          explanation:
            'A beszélő kívánságot fejez ki, a *bárcsak* az óhajtó mondat jellemző szava.',
        },
        {
          question: 'Melyik mondat tagolatlan?',
          options: ['A fiú nevet.', 'Esik az eső.', 'Jaj!', 'Anna levelet ír.'],
          answer: 2,
          explanation:
            'A *Jaj!* egyetlen mondatszóból áll, nem bontható mondatrészekre. A többi tagolt mondat.',
        },
        {
          question: 'Melyik kérdő mondat eldöntendő kérdés?',
          options: ['Hol laksz?', 'Mikor érkezel?', 'Itt laksz?', 'Miért késtél?'],
          answer: 2,
          explanation:
            'Az eldöntendő kérdésre igen vagy nem a válasz, és nincs kérdőszó. A többi kérdőszavas (kiegészítendő).',
        },
        {
          question: 'Mi a *Nem tudnál segíteni?* valódi szándéka?',
          options: ['kijelentés', 'kérés (felszólítás)', 'óhaj', 'felkiáltás'],
          answer: 1,
          explanation:
            'Az alakja kérdő, de a beszélő udvariasan kér, ezért a szándék szerint felszólító.',
        },
      ],
      sources: [
        { label: 'Mondat (Wikipedia)', url: wiki('mondat nyelvtan') },
        { label: 'Mondatfajták (Wikipedia)', url: wiki('mondatfajták magyar nyelvtan') },
        { label: 'Mondatszó (Wikipedia)', url: wiki('mondatszó') },
      ],
    },
    {
      id: 'osszetett-mondat-fajtai',
      subject: 'magyar',
      unitId: 'mondattan',
      title: 'Egyszerű és összetett mondat, a mellérendelés és az alárendelés',
      level: 'kozep',
      requirement: {
        kozep: 'Az egyszerű és összetett mondatok felismerése.',
        emelt: 'Az egyszerű és összetett mondatok típusainak felismerése.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **egyszerű mondatban** egy állítmányi szerkezet van, az **összetett mondatban** kettő vagy több **tagmondat**.',
            'A tagmondatok száma az **állítmányok** számával egyezik: ahány állítmány, annyi tagmondat.',
            'A tagmondatok kapcsolata lehet **mellérendelő** (egyenrangúak) vagy **alárendelő** (főmondat és mellékmondat).',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Emelt szinten',
          items: [
            'A **fajtákat** is meg kell tudni nevezni: a mellérendelésnél kapcsolatos, ellentétes, választó, következtető, magyarázó; az alárendelésnél alanyi, állítmányi, tárgyi, határozói, jelzői mellékmondat.',
          ],
        },
        {
          kind: 'compare',
          title: 'Mellérendelés és alárendelés',
          columns: ['Mellérendelés', 'Alárendelés'],
          rows: [
            {
              label: 'A tagmondatok viszonya',
              cells: ['egyenrangúak', 'főmondat és mellékmondat'],
            },
            {
              label: 'Példa',
              cells: ['*Esik az eső, de elmegyünk.*', '*Tudom, hogy igazad van.*'],
            },
            {
              label: 'Jellemző kötőszók',
              cells: [
                'és, meg, de, hanem, vagy, tehát, ugyanis',
                'hogy, ha, mert, amikor, amely, aki, ahol, bár',
              ],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az egyszerű és az összetett mondat' },
        {
          kind: 'text',
          text: 'Az **egyszerű mondatban** egyetlen állítmányi szerkezet van: *A gyerekek tegnap a kertben játszottak.* Az **összetett mondat** több, egymással kapcsolatban álló **tagmondatból** áll. Egy tagmondat általában egy ige (állítmány) köré szerveződik. Az összetett mondat megállapításának első lépése tehát az **állítmányok megszámolása**.',
        },
        {
          kind: 'warning',
          text: 'Ne tévessz össze két dolgot: az összetett **mondat** tagmondatokból áll, az **összetett szó** viszont egy szó (*asztalláb*), a **bővített** mondat pedig egyszerű mondat több bővítménnyel. Az egyszerű mondat lehet hosszú, és az összetett mondat lehet rövid.',
        },
        { kind: 'heading', text: 'Mellérendelő összetett mondat' },
        {
          kind: 'text',
          text: 'A tagmondatok **egyenrangúak**, bármelyik tagmondat önmagában is mondat volna. Kapcsolódhatnak kötőszóval vagy anélkül (vesszővel). A mellérendelő összetett mondatban a tagmondatok kapcsolata közös szerkezet nélkül is megérthető, ha mindegyik önállóan értelmes.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'kapcsolatos',
              text: 'A tagmondatok egymás mellett állnak, összeadódnak. Kötőszók: *és, meg, s, is, sem, se*. Példa: *Elmentünk a boltba és vettünk kenyeret.*',
            },
            {
              term: 'ellentétes',
              text: 'A tagmondatok tartalma szembenáll. Kötőszók: *de, hanem, azonban, viszont, pedig*. Példa: *Fáradt volt, de tovább dolgozott.*',
            },
            {
              term: 'választó',
              text: 'A tagmondatok közül az egyik valósul meg, vagy váltakoznak. Kötőszók: *vagy, avagy*. Példa: *Vagy te jössz hozzám, vagy én megyek hozzád.*',
            },
            {
              term: 'következtető',
              text: 'Az egyik tagmondat következménye a másiknak. Kötőszók: *tehát, ezért, így, hát*. Példa: *Esik az eső, tehát itthon maradunk.*',
            },
            {
              term: 'magyarázó',
              text: 'A második tagmondat az elsőt magyarázza. Kötőszók: *ugyanis, tudniillik, azaz*. Példa: *Nem ment el, ugyanis beteg volt.*',
            },
          ],
        },
        { kind: 'heading', text: 'Alárendelő összetett mondat' },
        {
          kind: 'text',
          text: 'Az alárendelő összetett mondatban a tagmondatok **nem egyenrangúak**: a **főmondatnak** alárendelt a **mellékmondat**, amely a főmondat valamelyik mondatrészét helyettesíti vagy bővíti. A mellékmondat fajtáját az dönti el, hogy a főmondat melyik mondatrészét helyettesíti, ezért ugyanúgy kérdezünk hozzá, mint a mondatrészhez. A főmondatban gyakran **utalószó** áll (*az, azért, ott, akkor, úgy*), a mellékmondat pedig kötőszóval (*hogy, ha, amikor, mivel*) vagy vonatkozó névmással (*aki, amely, ahol*) kezdődik.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'alanyi mellékmondat',
              text: 'A főmondat alanya: ki? mi? *Aki mer, az nyer.* *Jó, hogy itt vagy.*',
            },
            {
              term: 'állítmányi mellékmondat',
              text: 'A főmondat állítmányát fejezi ki. *A terve az volt, hogy elutazik.*',
            },
            {
              term: 'tárgyi mellékmondat',
              text: 'A főmondat tárgya: kit? mit? *Tudom, hogy igazad van.*',
            },
            {
              term: 'jelzői mellékmondat',
              text: 'A főmondat egy főnevét jellemzi: milyen? melyik? *A ház, amelyben lakom, régi.*',
            },
            {
              term: 'határozói mellékmondat',
              text: 'A főmondat határozója. Fajtái: helyhatározói (*Ott maradok, ahol vagy.*), időhatározói (*Amikor hazaértem, már sötét volt.*), módhatározói (*Úgy beszél, ahogy szokott.*), okhatározói (*Mivel esett, bent maradtunk.*), célhatározói (*Azért tanul, hogy sikerüljön a vizsga.*), feltételes (*Ha esik, bent maradunk.*), engedményes (*Bár fáradt volt, tovább dolgozott.*), következményes (*Úgy fáj a fejem, hogy alig látok.*), hasonlító (*Olyan magas, mint az apja.*).',
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: egyszerű vagy összetett?',
          problem:
            'Döntsd el, egyszerű vagy összetett mondat! a) *A gyerekek vidáman játszottak a kertben.* b) *Amikor megérkeztünk, már sötét volt.* c) *Szép, nagy, zöld kertben játszottak.* d) *Elmentem, de nem találtam otthon senkit.*',
          solution:
            'a) **egyszerű**: egy állítmány (*játszottak*).\n\nb) **összetett**: két állítmány (*megérkeztünk*, *volt*), alárendelő (az *amikor* időhatározói mellékmondatot vezet be).\n\nc) **egyszerű**: egy állítmány (*játszottak*); a hosszú jelzős szerkezet ettől még nem összetett mondat.\n\nd) **összetett**: két állítmány (*elmentem*, *találtam*), mellérendelő (a *de* ellentétet fejez ki).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: a mellékmondat fajtája',
          problem:
            'Határozd meg, milyen alárendelő mondatok! a) *Látom, hogy fáradt vagy.* b) *A könyv, amelyet tegnap kaptam, nagyon érdekes.* c) *Azért tanulok, hogy jól sikerüljön az érettségi.* d) *Aki korán kel, aranyat lel.*',
          solution:
            'a) **tárgyi** mellékmondat (mit látom? hogy fáradt vagy).\n\nb) **jelzői** mellékmondat (milyen könyv? amelyet tegnap kaptam); a mellékmondat beékelődik a főmondatba.\n\nc) **célhatározói** mellékmondat (mi célból tanulok? hogy jól sikerüljön az érettségi); a főmondatban utalószó: *azért*.\n\nd) **alanyi** mellékmondat (ki lel aranyat? aki korán kel).',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: a mellérendelés fajtája',
          problem:
            'Határozd meg a mellérendelés fajtáját! a) *Esik az eső, tehát itthon maradunk.* b) *Nemcsak kedves, hanem okos is.* c) *Nem ment el, ugyanis beteg volt.* d) *Vagy tanulsz, vagy megbuksz.*',
          solution:
            'a) **következtető** (a *tehát* következményt jelöl).\n\nb) **kapcsolatos** (a *nemcsak… hanem… is* összekapcsol, hozzáad).\n\nc) **magyarázó** (az *ugyanis* magyaráz).\n\nd) **választó** (a *vagy… vagy…* alternatívát ad).',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A szöveg egy mondatáról kell megállapítani, hogy egyszerű vagy összetett, és ha összetett, hogy mellérendelő vagy alárendelő.',
            'Szerkezeti vázlat készítése összetett mondathoz (lásd a következő lecke).',
            'Emelt szinten: a mellérendelés és az alárendelés fajtájának megnevezése, kötőszó vagy mondat alapján.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: **1.** a *hogy* mindig tárgyi mellékmondatot jelöl (nem; lehet alanyi, célhatározói vagy más); **2.** a *mert*-et minden esetben ugyanabba a fajtába sorolják: a tankönyvek általában magyarázó mellérendelésnek veszik (*Elkéstem, mert eltévedtem.*), de ha a főmondatban *azért* áll, okhatározói alárendelésről beszélnek; **3.** az igeneves szerkezeteket (*olvasva*, *látni*) tagmondatnak tekintik, pedig nem külön állítmányi szerkezetek.',
        },
        {
          kind: 'tip',
          text: 'Az összetett mondat elemzése: **1.** számold meg az állítmányokat; **2.** húzd alá a kötőszavakat és az utalószavakat; **3.** döntsd el, egyenrangúak-e a tagmondatok (mellérendelés) vagy az egyik a másik valamelyik mondatrészét helyettesíti (alárendelés); **4.** emelt szinten nevezd meg a fajtát a kérdéssel (ki? mit? hol? miért?).',
        },
      ],
      topicMatch: ['összetett mondat', 'mondattan'],
      quiz: [
        {
          question: 'Hány tagmondatból áll: *Amikor hazaértem, vacsoráztam.*?',
          options: ['egy', 'három', 'két', 'négy'],
          answer: 2,
          explanation:
            'Két állítmány (*hazaértem*, *vacsoráztam*) van, tehát két tagmondatból álló összetett mondat.',
        },
        {
          question: 'Melyik mondat mellérendelő összetett mondat?',
          options: [
            'Tudom, hogy igazad van.',
            'Amikor esik, bent maradunk.',
            'Fáradt voltam, de elmentem.',
            'A ház, amelyben lakom, régi.',
          ],
          answer: 2,
          explanation:
            'A *de* ellentétes mellérendelést jelez: a két tagmondat egyenrangú. A többi alárendelő összetett mondat.',
        },
        {
          question: 'Melyik az egyszerű mondat?',
          options: [
            'Szép, magas, ősz hajú férfi állt a kapuban.',
            'Aki dolgozik, az eszik.',
            'Esik, tehát maradunk.',
            'Ha hazaérek, felhívlak.',
          ],
          answer: 0,
          explanation:
            'Egyetlen állítmány (*állt*) van, a jelzők ettől még nem tesznek összetetté. A többi mondatban legalább két állítmány van.',
        },
        {
          question: 'Milyen mellékmondat a *Látom, hogy fáradt vagy.* második tagmondata?',
          options: ['alanyi', 'tárgyi', 'jelzői', 'időhatározói'],
          answer: 1,
          emelt: true,
          explanation:
            'A mellékmondat a tárgyat helyettesíti: mit látok? hogy fáradt vagy. Tehát tárgyi mellékmondat.',
        },
        {
          question: 'Melyik a magyarázó mellérendelés kötőszava?',
          options: ['de', 'vagy', 'ugyanis', 'tehát'],
          answer: 2,
          emelt: true,
          explanation:
            'Az *ugyanis* magyarázatot fűz az előző tagmondathoz. A *de* ellentétes, a *vagy* választó, a *tehát* következtető.',
        },
      ],
      sources: [
        { label: 'Összetett mondat (Wikipedia)', url: wiki('összetett mondat magyar nyelvtan') },
        { label: 'Mellérendelés (Wikipedia)', url: wiki('mellérendelő összetett mondat') },
        { label: 'Alárendelés (Wikipedia)', url: wiki('alárendelő összetett mondat') },
      ],
    },
    {
      id: 'mondatelemzes-szerkezeti-vazlat-vesszo',
      subject: 'magyar',
      unitId: 'mondattan',
      title: 'Mondatelemzés szerkezeti vázlattal, vesszőhasználat',
      level: 'kozep',
      requirement: {
        kozep: 'Mondatok elemzése szerkezeti vázlattal; a helyes mondatszerkesztés a gyakorlatban.',
        emelt: 'Mondatok elemzése szerkezeti vázlattal.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szerkezeti vázlat** (ágrajz) megmutatja, hogyan kapcsolódnak egymáshoz egy összetett mondat tagmondatai.',
            'Lépések: tagmondatok keresése, a kapcsolat megállapítása, a vázlat megrajzolása (jelölések, nyilak).',
            'A **vessző** az alárendelő összetett mondatban mindig a főmondat és a mellékmondat között áll.',
            'Mellérendelésnél a kötőszótól függ: **és, meg, s** előtt általában nincs vessző, **de, hanem, vagy, tehát, ugyanis** előtt van.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A szerkezeti vázlat készítése' },
        {
          kind: 'text',
          text: 'A vázlat jelölései iskolánként eltérhetnek, a lényeg, hogy a kapcsolatok követhetők legyenek. Egy jól használható rend:\n\n- a tagmondatokat római számokkal jelöljük (**I., II., III.**), a **főmondat** az **I.**,\n- az **alárendelést** nyíl vagy egymás alá húzott vonal jelzi: a **mellékmondat** a főmondat alatt, beljebb áll (**I. ← II.**),\n- a **mellérendelést** egymás melletti vagy egyvonalú jelölés mutatja (**I. = II.**), mellé írjuk a kapcsolat fajtáját,\n- a mellékmondat mellé kerül a **fajtája** (tárgyi, jelzői…).\n\nSzövegben leírva az **ágrajz** így néz ki: a főmondatból lefelé ágazik a mellékmondat, a mellékmondatból pedig egy másik, ha azt tovább bővíti.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: alárendelés',
          problem: 'Készíts szerkezeti vázlatot! *Tudom, hogy igazad van.*',
          solution:
            '**I.** Tudom, (főmondat)\n**II.** hogy igazad van. (mellékmondat)\n\nVázlat: **I. ← II.** (alárendelő összetett mondat).\n\nÁgrajz szavakkal: a főmondatból egy ág indul lefelé a mellékmondathoz. Emelt szinten: a II. **tárgyi mellékmondat** (mit tudok?).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: mellérendelés',
          problem: 'Készíts szerkezeti vázlatot! *Esik az eső, de elmegyünk sétálni.*',
          solution:
            '**I.** Esik az eső,\n**II.** de elmegyünk sétálni.\n\nVázlat: **I. = II.** (mellérendelő összetett mondat). A két tagmondat egyenrangú, kapcsolatuk a *de* miatt **ellentétes** (emelt szinten megnevezendő).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: beékelődő mellékmondat',
          problem: 'Készíts szerkezeti vázlatot! *A könyv, amelyet tegnap kaptam, nagyon érdekes.*',
          solution:
            'A mellékmondat a főmondat közepébe ékelődik:\n\n**I.** A könyv ... nagyon érdekes. (főmondat, két részre szakadva)\n**II.** amelyet tegnap kaptam (mellékmondat)\n\nVázlat: **I. ← II.**. A *II.* a *könyv* szót jellemzi (milyen könyv?), ezért **jelzői** mellékmondat (emelt szinten).\n\nA mellékmondatot **mindkét oldalon** vessző választja el.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 4.: többszörösen összetett mondat',
          problem: 'Elemezd! *Felhívlak, ha hazaérek, és mesélek az útról.*',
          solution:
            'Három tagmondat (három állítmány: *felhívlak*, *hazaérek*, *mesélek*):\n\n**I.** Felhívlak,\n**II.** ha hazaérek,\n**III.** és mesélek az útról.\n\nVázlat: **I. ← II.** (a *ha* feltételes határozói mellékmondatot vezet be), és **I. = III.** (a *és* kapcsolatos mellérendelés). Ez tehát **többszörösen összetett** mondat: alárendelés és mellérendelés vegyesen.\n\nAz ilyen mondatoknál a jelentés dönt a kapcsolatokról; a feladat általában egyértelmű szerkezetet ad.',
        },
        { kind: 'heading', text: 'A vesszőhasználat' },
        {
          kind: 'text',
          text: 'A vessző az összetett mondatban a tagmondatokat választja el. A főbb szabályok:\n\n- **Alárendelő** összetett mondatban a főmondat és a mellékmondat közé **mindig** vessző kerül: *Tudom, hogy jössz. Ha esik, otthon maradunk.*\n- Ha a mellékmondat a főmondat **közepébe** ékelődik, **mindkét oldalon** vessző áll: *A ház, amelyben lakom, régi.*\n- **Ellentétes, választó, következtető és magyarázó** mellérendelésnél a kötőszó (*de, hanem, vagy, tehát, ugyanis*) előtt vessző áll.\n- **Kapcsolatos** mellérendelésnél az **és, meg, s** kötőszó előtt általában nincs vessző (*Elmentünk a boltba és vettünk kenyeret.*).\n- Kötőszó nélküli mellérendelésnél vessző választja el a tagmondatokat: *Jöttem, láttam, győztem.*\n- Ismétlődő kötőszó között (*is… is, sem… sem, vagy… vagy*) vessző áll.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 5.: vesszők kitétele',
          problem:
            'Tedd ki a hiányzó vesszőket! a) *Azt mondta hogy későn érkezik.* b) *A kutya amelyik ott ugat a szomszédé.* c) *Fáradt volt de dolgozott tovább.* d) *Vagy jössz vagy maradsz.*',
          solution:
            'a) *Azt mondta, hogy későn érkezik.* (alárendelés: vessző a *hogy* előtt)\n\nb) *A kutya, amelyik ott ugat, a szomszédé.* (beékelődő mellékmondat: két vessző)\n\nc) *Fáradt volt, de dolgozott tovább.* (ellentétes mellérendelés)\n\nd) *Vagy jössz, vagy maradsz.* (az ismétlődő *vagy* között vessző áll)',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa 6.: elemzés fajtákkal (emelt)',
          problem:
            'Határozd meg a tagmondatok viszonyát és a mellékmondat fajtáját! *Bár fáradt voltam, elmentem, és jól éreztem magam.*',
          solution:
            '**I.** elmentem,\n**II.** Bár fáradt voltam, (mellékmondat)\n**III.** és jól éreztem magam.\n\nVázlat: **I. ← II.** (a *bár* engedményes határozói mellékmondatot vezet be), és **I. = III.** (a *és* kapcsolatos mellérendelés). A mondatban a II. tagmondat az I. elé kerül, a vessző ezt is elválasztja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Összetett mondat szerkezeti vázlatának elkészítése (ágrajz) a megadott jelölésekkel.',
            'Adott mondat tagmondatainak száma, a kapcsolat fajtája.',
            'Vesszők kitétele vagy javítása összetett mondatban (helyesírási és mondattani feladat egyben).',
          ],
        },
        {
          kind: 'tip',
          text: 'Mielőtt vázlatot rajzolsz, **tagold a mondatot**: húzd meg a határokat a vesszők és az állítmányok mentén. Ha a feladat megad jelölési rendszert, azt használd. Az önellenőrzés: minden állítmányhoz tartozik egy tagmondat, és minden tagmondat bekerült a vázlatba.',
        },
        {
          kind: 'warning',
          text: 'A vessző nem mindig a mondatot elemzi, hanem **a helyesírás szabályait követi**. A *hogy* előtt akkor is vessző áll, ha a főmondatban utalószó van (*Azért tanul, hogy…*). A kapcsolatos *és* előtt viszont általában nem teszünk vesszőt, kivéve, ha egy mellékmondat végét zárja le a vessző (*Felhívlak, ha hazaérek, és mesélek.*). A helyesírási szabályokat *A magyar helyesírás szabályai* (12. kiadás, 2015) tartalmazza.',
        },
      ],
      topicMatch: ['mondattan', 'mondatalkotás'],
      quiz: [
        {
          question: 'Hová kell vessző: *Tudom hogy igazad van.*?',
          options: ['a *Tudom* elé', 'a *hogy* elé', 'az *igazad* elé', 'sehova'],
          answer: 1,
          explanation:
            'Alárendelő összetett mondatban a főmondat és a mellékmondat közé vessző kerül, vagyis a *hogy* elé: *Tudom, hogy igazad van.*',
        },
        {
          question: 'Melyik mondat vesszőhasználata helyes?',
          options: [
            'Elmentem a boltba, és vettem kenyeret.',
            'Elmentem a boltba és vettem kenyeret.',
            'Elmentem a boltba, és, vettem kenyeret.',
            'Elmentem, a boltba és vettem kenyeret.',
          ],
          answer: 1,
          explanation:
            'A kapcsolatos *és* kötőszó előtt általában nem teszünk vesszőt, így a második a hagyományos, helyes alak.',
        },
        {
          question: 'Hány vessző kell: *A fiú aki ott áll az öcsém.*?',
          options: ['nulla', 'egy', 'kettő', 'három'],
          answer: 2,
          explanation:
            'A jelzői mellékmondat (*aki ott áll*) beékelődik a főmondatba, ezért mindkét oldalán vessző áll: *A fiú, aki ott áll, az öcsém.*',
        },
        {
          question: 'Mit jelöl a szerkezeti vázlatban az **I. = II.** jelölés?',
          options: ['alárendelést', 'mellérendelést', 'egyszerű mondatot', 'mondatszót'],
          answer: 1,
          explanation:
            'Az egyenlőségjel (vagy egyenrangú jelölés) mellérendelést mutat: a két tagmondat egyenrangú.',
        },
      ],
      sources: [
        { label: 'Vessző (Wikipedia)', url: wiki('vessző helyesírás magyar') },
        { label: 'Összetett mondat (Wikipedia)', url: wiki('összetett mondat szerkezeti vázlat') },
        {
          label: 'A magyar helyesírás szabályai (Wikipedia)',
          url: wiki('A magyar helyesírás szabályai'),
        },
      ],
    },
    {
      id: 'mondattan-emelt-rendszermondat-szovegmondat',
      subject: 'magyar',
      unitId: 'mondattan',
      title: 'Emelt: rendszermondat, szövegmondat, szinteződés, mondatvariánsok',
      level: 'emelt',
      requirement: {
        emelt:
          'Rendszermondat, szövegmondat. A szinteződés, tömbösödés a mondatban. Mondatvariánsok közötti különbségek értelmezése (pl. a stílusérték szempontjából).',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **rendszermondat** a nyelvi rendszer elvont mintája, a szabályok szerint megalkotott mondat, amelyet nem köt konkrét beszédhelyzet.',
            'A **szövegmondat** konkrét szövegben, beszédhelyzetben megvalósult mondat; jelentését a szövegkörnyezet is meghatározza.',
            'A mondat **szinteződése**: a szavak szintagmákká, a szintagmák nagyobb egységekké épülnek, több szinten.',
            'A **tömbösödés**: a szerkezet összetartozó egységekbe, „tömbökbe” szerveződik.',
            'Ugyanazt a tartalmat többféle **mondatvariánssal** mondhatjuk el; a változatok stílusértéke eltér.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Rendszermondat és szövegmondat' },
        {
          kind: 'text',
          text: 'A **rendszermondat** a nyelvtani szabályok szerint megszerkesztett mondatminta, amely a nyelvi rendszer szintjén létezik (például *A fiú könyvet olvas.*). Jelentése a szavak jelentéséből és a szerkezetből adódik, nem függ attól, hogy ki mondja, kinek és mikor.\n\nA **szövegmondat** viszont **konkrét szövegben, beszédhelyzetben** hangzik el vagy íródik le. Jelentését a helyzet, a szövegkörnyezet és a beszélő szándéka is meghatározza. Ugyanaz a rendszermondat különböző szövegmondatként más-más jelentést kaphat.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Rendszermondat és szövegmondat',
          columns: ['Rendszermondat', 'Szövegmondat'],
          rows: [
            {
              label: 'Létezése',
              cells: [
                'a nyelvi rendszer szintjén, elvont minta',
                'a beszédben, szövegben, konkrét helyzetben',
              ],
            },
            {
              label: 'Szerkezete',
              cells: ['a nyelvtani szabályok szerint teljes', 'lehet hiányos, mondatszó is'],
            },
            {
              label: 'Jelentése',
              cells: [
                'a szavakból és a szerkezetből adódik',
                'a helyzet, a szöveg, a szándék is alakítja',
              ],
            },
            {
              label: 'Példa',
              cells: ['*A fiú könyvet olvas.*', '– *Mit csinál Peti?* – *Olvas.*'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: szövegmondat és rendszermondat',
          problem:
            'Egy tanár belép az osztályba, és azt mondja: *Hideg van itt.* Mi lehet ennek a szövegmondatnak a jelentése, és miben különbözik a rendszermondattól?',
          solution:
            'A rendszermondat szintjén ez kijelentő mondat: a levegő hideg. A **szövegmondat** viszont a helyzettől függően jelenthet **kérést** is (*csukd be az ablakot*, *kapcsold fel a fűtést*), vagy rosszallást. A hasonló jelentésbeli többlet a **beszédhelyzet és a szándék** hatása. A rendszermondat a nyelvtani jelentést adja, a szövegmondat a használatban kapott jelentést.',
        },
        { kind: 'heading', text: 'Szinteződés és tömbösödés' },
        {
          kind: 'text',
          text: 'A mondat szerkezete **nem lapos sorozat**, hanem **szintekből** épül fel. A szavak szintagmákká kapcsolódnak, a szintagmák nagyobb szintagmákba ágyazódnak, végül kialakul a mondat. Ezt hívjuk **szinteződésnek**. Például az *Az ablak mellett álló kisfiú nevet* mondatban a *kisfiú* jelzője az *ablak mellett álló*, amely maga is bővített (*az ablak mellett*).\n\nA **tömbösödés** azt jelenti, hogy a mondat egyes részei összetartozó **tömbökbe** szerveződnek: egy bővített mondatrész (például egy hosszú jelzős szerkezet) a mondatban egyetlen egységként viselkedik. Az elemzéskor ezt a tömböt egy mondatrészként kezeljük, és csak utána bontjuk szét belső szerkezetére.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: egy tömb szintjei',
          problem: 'Mutasd be a szerkezet szintjeit! *A kerti padon ülő kisfiú mosolygott.*',
          solution:
            '**Első szint**: a mondat két fő tömbje az alany (*a kerti padon ülő kisfiú*) és az állítmány (*mosolygott*).\n\n**Második szint**: az alany tömbön belül a *kisfiú* főnév jelzője a *a kerti padon ülő* (igeneves jelzői szerkezet).\n\n**Harmadik szint**: ennek belsejében az *ülő* igenév helyhatározója a *a kerti padon*.\n\nTehát a szerkezet szintekből épül fel, és az alany egész tömbje egyetlen mondatrész.',
        },
        { kind: 'heading', text: 'Mondatvariánsok és stílusértékük' },
        {
          kind: 'text',
          text: 'Ugyanazt a tartalmat többféle mondatszerkezettel is kifejezhetjük. A változatok **jelentésükben** hasonlók, **stílusértékükben** különbözhetnek. Néhány tipikus eltérés:\n\n- **szórend**: *Anna megírta a levelet.* (semleges) – *A levelet Anna írta meg.* (az *Anna* kiemelt)\n- **mellékmondat vagy igeneves szerkezet**: *Amikor megérkezett, köszönt.* – *Megérkezve köszönt.* (az igeneves forma tömörebb, könyvszerűbb)\n- **egyszerű mondat vagy összetett mondat**: a tömör egyszerű forma gyakran szakszerűbb, a mellékmondatos természetesebb, beszélt nyelvibb.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: mondatvariánsok összehasonlítása',
          problem:
            'Hasonlítsd össze a két mondatot! a) *Amikor hazaértem, azonnal lefeküdtem.* b) *Hazaérve azonnal lefeküdtem.*',
          solution:
            'Mindkettő ugyanazt közli: a hazaérés és a lefekvés egymás után történt.\n\na) összetett mondat (időhatározói mellékmondat), **természetesebb, beszélt nyelvi** hatású.\n\nb) egyszerű mondat, a *hazaérve* **határozói igenévvel** kifejezett időviszony. Tömörebb, **választékosabb, írott nyelvi** stílusú.\n\nA választás a szövegtípustól és a hangnemtől függ.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szöveg alapján rendszermondat és szövegmondat megkülönböztetése, magyarázata.',
            'Két mondatváltozat összehasonlítása: mi a különbség a szerkezetben, a jelentésben és a stílusértékben?',
            'Hosszú, bővített mondat szintjeinek, tömbjeinek bemutatása.',
          ],
        },
        {
          kind: 'tip',
          text: 'Mondatvariánsok összehasonlításakor mindig három szempontot nevezz meg: **1.** mi marad ugyanaz (a közlés lényege); **2.** mi változik (szórend, szerkezet, szóválasztás); **3.** mi a hatása (hivatalos, köznyelvi, nyomatékos, tömör stb.).',
        },
        {
          kind: 'warning',
          text: 'A *rendszermondat* nem „rossz” mondat, a *szövegmondat* pedig nem „jobb”: mindkettő a nyelvi vizsgálat másik szintjét jelöli. Ne azt írd, hogy az egyik helyes, a másik helytelen.',
        },
      ],
      topicMatch: ['mondattan'],
      quiz: [
        {
          question: 'Melyik állítás igaz a szövegmondatra?',
          options: [
            'Mindig a nyelvtani szabályok szerint teljes.',
            'Konkrét beszédhelyzetben, szövegben valósul meg.',
            'Nem lehet hiányos.',
            'Csak írásban létezik.',
          ],
          answer: 1,
          explanation:
            'A szövegmondat konkrét szövegben, beszédhelyzetben jön létre, jelentését a helyzet is alakítja. Lehet hiányos, és a beszédben is megjelenik.',
        },
        {
          question: 'Melyik példa mutat jó mondatvariáns-párt, amelynek tartalma azonos?',
          options: [
            '*Amikor megérkezett, köszönt.* és *Megérkezve köszönt.*',
            '*Esik az eső.* és *Süt a nap.*',
            '*Tudom, hogy jössz.* és *Nem jössz.*',
            '*Anna olvas.* és *Éva ír.*',
          ],
          answer: 0,
          explanation:
            'A két mondat ugyanazt közli, csak az egyik mellékmondatos, a másik határozói igenévvel kifejezett. A többi pár tartalma eltér.',
        },
        {
          question: 'Mit jelent a mondat szinteződése?',
          options: [
            'A mondat hangsúlyos és hangsúlytalan szavakból áll.',
            'A szavak szintagmákba, a szintagmák nagyobb egységekbe épülnek.',
            'A mondat csak egyszerű lehet.',
            'A mondatok különböző hangszínen hangzanak el.',
          ],
          answer: 1,
          explanation:
            'A szinteződés a szerkezet többszintű felépítését jelenti: a szavakból szintagmák, azokból nagyobb szerkezetek lesznek.',
        },
        {
          question: 'Melyik mondat szórendje emeli ki az *Anna* szót?',
          options: [
            'Anna megírta a levelet.',
            'A levelet Anna írta meg.',
            'Megírta Anna a levelet, mindenki tudja.',
            'A levelet megírták.',
          ],
          answer: 1,
          explanation:
            'A *A levelet Anna írta meg* szórendben az *Anna* a hangsúlyos helyen áll, ezzel kiemeljük, hogy éppen ő írta meg.',
        },
      ],
      sources: [
        { label: 'Szövegmondat (Wikipedia)', url: wiki('rendszermondat szövegmondat') },
        { label: 'Mondattan (Wikipedia)', url: wiki('mondattan magyar nyelv') },
        { label: 'Stílusérték (Wikipedia)', url: wiki('stílusérték magyar nyelv') },
      ],
    },
  ],
};

export default unit;
