import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv: Stílus és jelentés (7. témakör). */
const unit: GuideUnit = {
  id: 'stilus-jelentes',
  subject: 'magyar',
  order: 10,
  title: 'Stílus és jelentés',
  requirementRef: 'Nyelv 7. Stílus és jelentés',
  intro:
    'A szóhasználat és a stílusárnyalatok, a szójelentés (egy- és többjelentésű szavak, homonimák, szinonimák, ellentétek), a szóképek és az alakzatok, végül a stílusrétegek felismerése. Sok rövid példával, azonosítós feladattal és kidolgozott megoldással.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Nyelv 7. témakör: Stílus és jelentés). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'szohasznalat-stilusarnyalat-stilusertek',
      subject: 'magyar',
      unitId: 'stilus-jelentes',
      title: 'Szóhasználat, stílusárnyalat, stílusérték',
      level: 'kozep',
      requirement: {
        kozep:
          'Stílus és jelentés a mindennapi nyelvhasználatban, a szaknyelvben és a szépirodalomban; a jellegzetes stílusárnyalatok (pl. neutrális, gúnyos, patetikus, népies, familiáris, archaikus, bizalmas, választékos) felismerése, hatásának elemzése; egyszerű stílusjelenségek; stílusérték (alkalmi és állandó); stílushatás.',
        emelt: 'A szóhasználat nyelvtani, jelentésbeli és stiláris kötöttségei; stílusparódia.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **stílus** az, *hogyan* mondunk valamit: ugyanazt a tartalmat többféle szóval és szerkezettel is ki lehet fejezni, és a választás hatást kelt.',
            'Ugyanazt a dolgot **stílusárnyalat** szerint különböző szavakkal nevezhetjük meg: *arc* (neutrális), *ábrázat* (választékos, régies), *pofa* (bizalmas, durva).',
            'A **stílusérték** a szó, forma vagy szerkezet stílusbeli értéke. **Állandó**, ha a szó önmagában hordozza (*pofa*), és **alkalmi**, ha a szövegkörnyezet adja.',
            'A **stílushatás** az, amit a befogadó érez vagy megért (humor, gúny, ünnepélyesség, közvetlenség).',
            'Emelt szinten: a szóhasználat kötöttségei (nyelvtani, jelentésbeli, stiláris) és a **stílusparódia**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'neutrális', text: 'Stílusérték nélküli, semleges szó: *ház*, *megy*, *arc*.' },
            {
              term: 'választékos',
              text: 'Ünnepélyesebb, szebb hangzású, tudatosan kiválasztott: *megtisztel*, *távozik*.',
            },
            {
              term: 'familiáris, bizalmas',
              text: 'Közvetlen, barátságos, szűk körben használt: *suli*, *papa*, *lelép*.',
            },
            {
              term: 'népies',
              text: 'A népnyelvre, a paraszti beszédre emlékeztető: *kend*, *gyöngyöm*, *Isten hozta*.',
            },
            {
              term: 'archaikus',
              text: 'Régies, ma már ritkán használt szó: *vala*, *avagy*, *hajdan*.',
            },
            {
              term: 'patetikus',
              text: 'Fennkölt, lelkes, nagy érzelmi töltésű: *Szent haza, hozzád esküszünk!* (saját példa).',
            },
            {
              term: 'gúnyos',
              text: 'Kifigurázó, lekicsinylő; gyakran irónia: *Hát ez aztán nagyon ügyes volt!* (ha rossz volt).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a stílus, és mitől függ?' },
        {
          kind: 'text',
          text: 'A nyelv minden szintjén van választási lehetőségünk: hangok, szavak, mondatszerkezetek között. Ha ugyanazt a tartalmat többféleképp lehet kifejezni, a különbség a **stílus**. A választást a **helyzet** (kivel, hol, miről beszélünk), a **kommunikációs cél** (tájékoztatni, meggyőzni, szórakoztatni, kérni) és a **beszélő egyénisége** együtt határozza meg. A jó stílus *helyénvaló*, nem feltétlenül díszes: egy hivatalos kérvényben a *szevasz* hiba, egy baráti üzenetben a *Tisztelettel kérem* nevetséges.',
        },
        { kind: 'heading', text: 'Stílusárnyalatok szócsoportokon' },
        {
          kind: 'text',
          text: 'Egy fogalomnak gyakran több neve van, amelyek jelentése közel azonos, de a **stílusárnyalatuk** más. A szinonimasor tagjait ezért nem lehet mindig felcserélni.',
        },
        {
          kind: 'compare',
          title: 'Ugyanaz a fogalom, más stílusárnyalat',
          columns: ['Szavak', 'Stílusárnyalat'],
          rows: [
            {
              label: 'ló',
              cells: ['*ló*', 'neutrális'],
            },
            { label: 'ló', cells: ['*paripa*', 'költői, választékos'] },
            { label: 'ló', cells: ['*gebe*', 'pejoratív (lekicsinylő), bizalmas'] },
            { label: 'apa', cells: ['*apa*, *édesapa*', 'neutrális, illetve választékos'] },
            { label: 'apa', cells: ['*papa*, *apu*', 'familiáris, bizalmas'] },
            {
              label: 'meghal',
              cells: ['*meghal* / *elhunyt*', 'neutrális / hivatalos, választékos'],
            },
            { label: 'meghal', cells: ['*elpatkol*', 'durva, bizalmas, gúnyos'] },
          ],
        },
        { kind: 'heading', text: 'Állandó és alkalmi stílusérték' },
        {
          kind: 'text',
          text: 'Az **állandó stílusérték** a szóhoz vagy formához tartozik, minden szövegben ott van: a *pofa* mindig bizalmas-durva, az *ábrázat* mindig választékos-régies. Az **alkalmi stílusérték** csak az adott szövegben jön létre. Egy semleges szó is hordozhat alkalmi értéket, ha szokatlan helyen vagy váratlan jelentésben szerepel: *Ma is egy remek példánya jelent meg a kényelmes munkatársnak.* Az *egy remek példánya* itt ironikus, bár a szavak külön-külön semlegesek.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: stílusárnyalat megnevezése',
          problem:
            'Milyen stílusárnyalatot hordoznak a dőlt szavak? a) *Hajdan erős vala a magyar.* b) *Ez a papucsos pasi tök jó fej.* c) *Kegyes Uram, kérlek, hallgass meg!* (saját mondatok)',
          solution:
            'a) **archaikus**: a *hajdan* és a *vala* régies, ma nem használjuk őket a mindennapi beszédben.\n\nb) **bizalmas, szlenges**: a *pasi*, *tök*, *jó fej* a fiatalok közvetlen, kötetlen beszédére jellemző.\n\nc) **patetikus, ünnepélyes** (a *kegyes Uram* megszólítás miatt): a hangnem emelkedett, imádságszerű.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: ugyanaz a közlés három hangnemben',
          problem:
            'Fogalmazd meg ugyanazt (valaki késik) neutrális, bizalmas és hivatalos stílusban!',
          solution:
            '- neutrális: *Anna késik.*\n- bizalmas: *Anna megint lemaradt, szokás szerint.*\n- hivatalos: *Anna a megadott időpontra nem érkezett meg.*\n\nA tartalom ugyanaz; a szóválasztás (*lemaradt*, *megadott időpontra*), a szerkezet és a személytelenség különbözteti meg a három szöveget.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A szóhasználatnak **kötöttségei** vannak. *Nyelvtani* kötöttség a vonzat és az egyeztetés (*fél valamitől*, nem *valamit*). *Jelentésbeli* kötöttség, hogy a szavak csak bizonyos szavakkal fordulnak elő együtt (*erős kávé*, de *nagy hó*, nem *erős hó*), a **kollokációk** megszokott párosítások. *Stiláris* kötöttség, hogy a szó a stílusrétegéhez illő környezetben használható (*elhunyt* a gyászjelentésben, nem a haverok közt). A **stílusparódia** egy stílus túlzó, kifigurázó utánzása: a szerző szándékosan a kelleténél több jellegzetes elemet halmoz fel, hogy komikus hatást érjen el (például egy kérvény hivatalos fordulatainak túlzsúfolása egy banális ügyben).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A szövegértési-nyelvi feladatsorban egy rövid szövegrészben kell megnevezni a szó stílusárnyalatát vagy a nyelvi eszköz hatását (pl. mitől gúnyos a mondat).',
            'Az érvelő vagy a szövegalkotási feladatban a helyzethez illő stílust kell választanod: ezt javítják.',
            'Szóbeli tétel: a stílusérték (alkalmi és állandó) és a stílushatás bemutatása saját példával.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a **stílusértéket** a szó jelentésével keverik. A *paripa* és a *ló* jelentése ugyanaz, a stílusértékük különbözik. A másik hiba a „stílusa jó” típusú válasz: mindig nevezd meg az árnyalatot (pl. bizalmas), és indokold a szavakkal.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz egy „Milyen stílusárnyalatú a szó, és mi a hatása?” kérdésre: *1.* megnevezed az árnyalatot, *2.* idézed a szót, *3.* leírod, mi a semleges megfelelője, *4.* megmondod a hatást. Pl.: „A *pofa* bizalmas, durva árnyalatú; a semleges *arc* helyett használva közvetlen, lekezelő hatású.”',
        },
      ],
      topicMatch: ['stilisztika', 'nyelvi-stilisztikai elemzés', 'íráskép'],
      cards: { subject: 'magyar', deck: 'irodalmi-fogalmak' },
      quiz: [
        {
          question: 'Melyik szó stílusárnyalata archaikus?',
          options: ['suli', 'telefon', 'pasi', 'vala'],
          answer: 3,
          explanation:
            'A *vala* a *volt* régies alakja, ma csak költői vagy ünnepélyes szövegben fordul elő. A *suli* és a *pasi* bizalmas, a *telefon* semleges.',
        },
        {
          question: 'Melyik szó neutrális az *apa* szinonimái közül?',
          options: ['apu', 'papa', 'apa', 'atyuska'],
          answer: 2,
          explanation:
            'Az *apa* stílusérték nélküli alap szó. Az *apu* és a *papa* családi, bizalmas; az *atyuska* szintén érzelmes, népies-bizalmas.',
        },
        {
          question: 'Mi az alkalmi stílusérték?',
          options: [
            'A szó önmagában hordozza a stílusértéket.',
            'Csak régi szavaknak van ilyen.',
            'A szövegkörnyezet hozza létre a stílushatást.',
            'Csak a nyelvtani alakokra vonatkozik.',
          ],
          answer: 2,
          explanation:
            'Az alkalmi stílusérték az adott szövegben jön létre (pl. irónia, szokatlan szóhasználat), az állandót pedig maga a szó hordozza.',
        },
        {
          question: 'Melyik mondat gúnyos?',
          options: [
            'Köszönöm, hogy eljöttél.',
            'A vonat 8 órakor indul.',
            'Hát ez remekül sikerült, gratulálok a pocsék munkához!',
            'Kérem, töltse ki az űrlapot.',
          ],
          answer: 2,
          explanation:
            'A dicsérő szavak (*remekül*, *gratulálok*) ellentétes tartalommal állnak (*pocsék*), ez az irónia, amely gúnyos hatást kelt.',
        },
        {
          question: 'Mi a stílusparódia?',
          options: [
            'Egy stílus túlzó, kifigurázó utánzása.',
            'Egy szó jelentésének megváltozása.',
            'A tudományos stílus alapvető formája.',
            'A rímek hiánya a versben.',
          ],
          answer: 0,
          emelt: true,
          explanation:
            'A stílusparódia a stílusjegyek szándékos felnagyítása komikus hatásért, nem pedig valódi használatuk.',
        },
      ],
      sources: [
        { label: 'Stílus (Wikipedia)', url: wiki('stílus nyelvészet stilisztika') },
        { label: 'Stilisztika (Wikipedia)', url: wiki('stilisztika') },
        { label: 'Stílusérték (Wikipedia)', url: wiki('stílusérték magyar nyelv') },
      ],
    },
    {
      id: 'szojelentes-szotipusok-jelentesszerkezet',
      subject: 'magyar',
      unitId: 'stilus-jelentes',
      title: 'A szójelentés: egy- és többjelentésű szavak, homonimák, szinonimák',
      level: 'kozep',
      requirement: {
        kozep:
          'A nyelvi szintek alkalmi és állandó stílusértékének megfigyelése; a szavak jelentésének szerkezete, jelentéselemek; egyjelentésű, többjelentésű szó, homonima, szinonima, hasonló alakú szópár, ellentétes jelentés; egynyelvű (pl. Magyar szinonimaszótár, Magyar értelmező kéziszótár) és kétnyelvű szótárak ismerete.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szó jelentése** a hangalakhoz kapcsolódó tartalom. **Jelentéselemekre** bontható: a *fiú* elemei például *ember*, *férfi*, *fiatal*.',
            '**Egyjelentésű** a szó, ha egyetlen jelentése van (*szemüveg*, *kémia*). **Többjelentésű**, ha jelentései összefüggenek (*láb*: emberé, asztalé, hegyé).',
            '**Azonos alakú (homonima)**: a hangalak egyezik, de a jelentések nem függenek össze (*vár*: erőd, illetve vár valakire).',
            '**Szinonima**: azonos vagy közel azonos jelentés, más hangalak (*szép, csinos, gyönyörű*). **Antonima**: ellentétes jelentés (*meleg / hideg*).',
            '**Hasonló alakú szópár**: hasonlóan hangzó, de különböző jelentésű szavak, amelyeket könnyű összekeverni (*adaptál* és *adoptál*).',
          ],
        },
        {
          kind: 'compare',
          title: 'Egy pillantásra',
          columns: ['Fogalom', 'Példa'],
          rows: [
            { label: 'egyjelentésű', cells: ['egy jelentés', '*szemüveg*, *kémia*'] },
            {
              label: 'többjelentésű',
              cells: ['összefüggő jelentések', '*kulcs*: ajtóé, zenéé, megoldásé'],
            },
            {
              label: 'homonima',
              cells: ['azonos alak, nincs kapcsolat', '*ég* (égbolt), *ég* (lángol)'],
            },
            {
              label: 'szinonima',
              cells: ['több alak, azonos jelentés', '*gyors / sebes / fürge*'],
            },
            { label: 'antonima', cells: ['ellentét', '*könnyű / nehéz*'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A szó jelentése és jelentéselemei' },
        {
          kind: 'text',
          text: 'A szó **hangalakból** és **jelentésből** áll. A jelentés nem oszthatatlan: kisebb **jelentéselemek** (szemek) építik fel. A *fiú* jelentéséhez hozzátartozik, hogy *ember*, *férfi*, *fiatal*; a *lány* ugyanezek közül a *nő* elemet hordozza a *férfi* helyett. A szinonimák és az ellentétek is jelentéselemek alapján válnak világossá: az ellentétes szavaknak legtöbb jelentéselemük közös, egyetlen elemben térnek el (*fiú / lány*).',
        },
        {
          kind: 'text',
          text: 'Fontos különbség az **alapjelentés** (szótárban az első, leggyakoribb) és az **átvitt jelentés** (amely hasonlóság vagy érintkezés alapján alakult ki, lásd a szóképek leckét). A *rák* alapjelentése állat, átvitt jelentése betegség; a *hideg* lehet hőmérséklet (*hideg víz*) és emberi viselkedés (*hideg tekintet*).',
        },
        { kind: 'heading', text: 'Egyjelentésű és többjelentésű szavak' },
        {
          kind: 'text',
          text: 'Az **egyjelentésű** szavak főleg a szakszavak és a legtöbb tulajdonnév környezetében gyakoriak: a *szemüveg*, a *tüdő* és a *molekula* egyetlen dolgot jelöl. A **többjelentésű** szó jelentései között kapcsolat van, általában azért, mert az egyik jelentésből a másik **jelentésátvitellel** keletkezett. A *láb* az emberé (alapjelentés), az asztalé, a hegyé (hasonló helyzet vagy forma). A *toll* lehet madártoll vagy írószer, mert az írószer korábban madártollból készült. A *kulcs* ajtót zár, hangnemet jelöl a zenében, és a *megoldás kulcsa* is lehet. A szövegben mindig a **szövegkörnyezet** dönti el, melyik jelentés aktuális.',
        },
        { kind: 'heading', text: 'Azonos alakú szavak (homonimák)' },
        {
          kind: 'text',
          text: 'A **homonima** két (vagy több) olyan szó, amelynek a hangalakja megegyezik, de a jelentései **nem függenek össze**, mert a szavak eredete is különböző. Példák: *vár* (erődítmény) és *vár* (valakit), *ég* (égbolt) és *ég* (lángol), *szív* (testrész) és *szív* (cigarettát), *nyúl* (állat) és *nyúl* (a kezével), *dob* (hangszer) és *dob* (elhajít), *ír* (valamit) és *ír* (nép tagja). A szótár a homonimákat külön szócikkben tárgyalja, a többjelentésű szót egy szócikkben, számozott jelentésekkel. A homonimák **szójátékok** és viccek forrásai is: *Ég a nap, ég a ház.* (saját példa)',
        },
        {
          kind: 'warning',
          text: 'A homonima és a többjelentésű szó elkülönítése: kérdezd meg, hogy a jelentések **kapcsolódnak-e**. A *láb* három jelentése kapcsolódik (egy „alsó, tartó rész” gondolata), ezért többjelentésű. A *vár* (erőd) és *vár* (valakit) között semmi kapcsolat nincs, ezért homonimák.',
        },
        { kind: 'heading', text: 'Szinonimák, antonimák, hasonló alakú szópárok' },
        {
          kind: 'text',
          text: 'A **szinonimák** jelentése azonos vagy nagyon hasonló, de a szavak **stílusértékben**, **fokozatban** vagy **használati körben** eltérhetnek: *sétál / baktat / lófrál*, *fél / retteg / tart valamitől*. Azonos stílusértékű, tökéletesen felcserélhető szinonima ritka. Az **antonimák** (ellentétes jelentésű szavak) lehetnek fokozatiak (*meleg / langyos / hideg*) vagy kizáróak (*igaz / hamis*). A többjelentésű szónak jelentésenként más lehet az ellentéte: a *könnyű zsák* ellentéte *nehéz zsák*, de a *könnyű zene* ellentéte *komoly zene*.',
        },
        {
          kind: 'text',
          text: 'A **hasonló alakú szópár** (paronima) tagjai hasonlóan hangzanak vagy hasonlóan íródnak, de a jelentésük eltér. Ezeket gyakran összekeverik: *adaptál* (hozzáigazít, átdolgoz) és *adoptál* (örökbe fogad), *emigrál* (kivándorol) és *immigrál* (bevándorol), *áltat* (hiú reményt kelt) és *altat* (alvásba vezet).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: homonima vagy többjelentésű?',
          problem:
            'Döntsd el, hogy a két mondatban szereplő szó homonima vagy többjelentésű szó! a) *Eltört az asztal lába. / Fáj a lábam.* b) *Sokáig vártam a buszra. / A vár a hegyen áll.* c) *Hat ember érkezett. / A gyógyszer hat.*',
          solution:
            'a) **többjelentésű**: az asztal lába az ember lábához hasonló szerepű (tartó rész), a két jelentés összefügg.\n\nb) **homonima**: *vár* (ige) és *vár* (főnév) nem függnek össze.\n\nc) **homonima**: a *hat* (számnév) és a *hat* (ige: hatást fejt ki) azonos alakú, de a jelentések között nincs kapcsolat.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: a megfelelő szinonima',
          problem:
            'Melyik szinonima illik a mondatba, és miért? *A mérnök ... a hibát a rajzon.* (észrevette / kiszúrta / felfedezte)',
          solution:
            'Az **észrevette** a legsemlegesebb, nincs külön stílusértéke, tehát minden stílusban működik. A *kiszúrta* bizalmas, a *felfedezte* inkább váratlan, új dologra mondjuk. A mérnök hivatalos-szakmai közegében az *észrevette* a legalkalmasabb.',
        },
        { kind: 'heading', text: 'Szótárak használata' },
        {
          kind: 'text',
          text: 'Az **egynyelvű szótár** a nyelv szavait ugyanazon a nyelven magyarázza: ilyen a *Magyar értelmező kéziszótár* (jelentések, példamondatok, stílusminősítés), a *Magyar szinonimaszótár* (rokon értelmű szavak sora), a helyesírási szótár vagy az idegen szavak szótára. A **kétnyelvű szótár** fordít egyik nyelvről a másikra. Az értelmező szótárban a többjelentésű szó **egy szócikkben, számozott jelentésekkel** szerepel, a homonimák pedig **külön szócikkben**, gyakran számozott indexszel. Keress rá a szócikk stílusminősítésére (pl. *bizalmas*, *régies*, *népies*), mert ez adja a stílusértéket.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegértési-nyelvi feladatsor: egy szó jelentésének megadása a szövegkörnyezetből, szinonima keresése, homonimák felismerése.',
            'Szótárszócikk-részlet alapján kell kiválasztani, hogy többjelentésű szóról vagy homonimákról van-e szó, illetve melyik jelentés szerepel a szövegben.',
            'Szóbeli tétel (Stílus és jelentés): a szótípusok bemutatása saját példákkal, szótárak ismerete.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hiba: a **szinonimát** teljesen azonos jelentésűnek tekinteni. A *megy* és a *halad* hasonló, de nem mindig felcserélhető (*Megy a bolt?*). Írd oda mindig, hogy a szinonimák között **árnyalatnyi** különbség van (stílus, fokozat, kapcsolódó szavak).',
        },
        {
          kind: 'tip',
          text: 'Modellválasz: „Mit jelent a *fej* a mondatban: *A főnök a cég feje*?” Nevezd meg a szó jelentését (vezető), indokold a szövegkörnyezettel (a cég feje: az irányító személy), és add meg az alapjelentést (testrész). Így a **jelentésátvitelt** is megmutatod.',
        },
      ],
      topicMatch: ['szójelentés', 'szinonimák'],
      cards: { subject: 'magyar', deck: 'irodalmi-fogalmak' },
      quiz: [
        {
          question: 'Melyik szópár homonima?',
          options: ['láb / láb', 'kulcs / kulcs', 'fej / fej (testrész, káposzta)', 'ég / ég'],
          answer: 3,
          explanation:
            'Az *ég* (égbolt) és az *ég* (lángol) azonos alakú, de jelentésük nem függ össze. A többinél a jelentések kapcsolódnak, tehát többjelentésű szavak.',
        },
        {
          question: 'Melyik állítás igaz a szinonimákra?',
          options: [
            'Mindig tökéletesen felcserélhetők.',
            'Mindig ellentétes jelentésűek.',
            'Jelentésük közel azonos, de stílusértékük vagy fokozatuk eltérhet.',
            'Csak igék lehetnek szinonimák.',
          ],
          answer: 2,
          explanation:
            'A szinonimák jelentése azonos vagy közel azonos, de gyakran más a stílusértékük (*pofa / arc*) vagy a fokozatuk (*fél / retteg*).',
        },
        {
          question: 'Melyik szó többjelentésű?',
          options: ['szemüveg', 'kémia', 'toll', 'tüdő'],
          answer: 2,
          explanation:
            'A *toll* madártoll és írószer is; a két jelentés összefügg. A többi szó egyjelentésű.',
        },
        {
          question: 'Melyik szópár hasonló alakú szópár (paronima)?',
          options: ['adaptál / adoptál', 'nagy / kicsi', 'szép / csinos', 'vár / vár'],
          answer: 0,
          explanation:
            'Az *adaptál* (hozzáigazít) és az *adoptál* (örökbe fogad) hasonlóan hangzik, mégis más jelentésű. A *nagy / kicsi* ellentét, a *szép / csinos* szinonima, a *vár / vár* homonima.',
        },
        {
          question: 'Hol találod az értelmező szótárban a homonimákat?',
          options: [
            'Külön szócikkben, mert a jelentések nem függnek össze.',
            'Mind egyetlen szócikkben, számozott jelentésekkel.',
            'Csak a szinonimaszótárban.',
            'A helyesírási szótárban egy címszó alatt.',
          ],
          answer: 0,
          explanation:
            'A szótár a homonimákat külön szócikkben közli, a többjelentésű szó jelentéseit viszont egy szócikkben számozva adja meg.',
        },
      ],
      sources: [
        { label: 'Szójelentés (Wikipedia)', url: wiki('szójelentés jelentéstan') },
        { label: 'Homonima (Wikipedia)', url: wiki('homonima nyelvészet') },
        { label: 'Szinonima (Wikipedia)', url: wiki('szinonima') },
      ],
    },
    {
      id: 'szokepek-metafora-metonimia-allegoria',
      subject: 'magyar',
      unitId: 'stilus-jelentes',
      title: 'Szóképek: hasonlat, metafora, metonímia, allegória, szimbólum',
      level: 'kozep',
      requirement: {
        kozep:
          'Szóképek: hasonlat, metafora, megszemélyesítés, szinesztézia, metonímia, szinekdoché; összetett szóképek: allegória, szimbólum felismerése, elemzése és értelmezése szépirodalmi és egyéb szövegekben; metaforikus jelentés.',
        emelt: 'Összetett képrendszerek, képi hálózatok, jelképrendszerek.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szókép** olyan szó vagy kifejezés, amely **átvitt jelentésben** szerepel: a szó alapjelentéséről egy másik dologra utal.',
            '**Hasonlat**: két dolog összevetése („olyan, mint”, „-szerű”), mindkét tag és a hasonlító szó kimondott. **Metafora**: a hasonlítás kimondatlan, az egyik dolog helyett a másik nevét mondjuk.',
            '**Megszemélyesítés**: élettelen dolgot élőként ábrázolunk. **Szinesztézia**: más érzékterületek összekapcsolása (*selymes hang*).',
            '**Metonímia**: érintkezés alapján (*Petőfit olvasok*). **Szinekdoché**: rész és egész felcserélése (*két kéz kell hozzá*).',
            '**Allegória**: kiterjesztett metafora, egész mű vagy szakasz. **Szimbólum**: általánosabb jelentésű jelkép (*a galamb: béke*).',
          ],
        },
        {
          kind: 'compare',
          title: 'Szóképek összehasonlítva',
          columns: ['Mi a lényege', 'Példa (saját)'],
          rows: [
            { label: 'hasonlat', cells: ['kimondott összevetés', '*Olyan gyors, mint a szél.*'] },
            { label: 'metafora', cells: ['kimondatlan hasonlítás', '*Az idő rabló.*'] },
            { label: 'megszemélyesítés', cells: ['élettelen = élő', '*Nevetett a nap.*'] },
            {
              label: 'szinesztézia',
              cells: ['érzékterületek keveredése', '*lágy fény, hideg hang*'],
            },
            { label: 'metonímia', cells: ['érintkezés, kapcsolat', '*Megivott egy pohárral.*'] },
            { label: 'szinekdoché', cells: ['rész és egész', '*Négy szájat kell etetni.*'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Metaforikus jelentés és szókép' },
        {
          kind: 'text',
          text: 'A szavaknak van **alapjelentésük** (szó szerinti) és **átvitt jelentésük**. A szókép akkor keletkezik, amikor a szót nem az alapjelentésében használjuk, hanem egy másik dologra vonatkoztatjuk. Az átvitel alapja lehet **hasonlóság** (metafora), **érintkezés, kapcsolat** (metonímia) vagy **rész-egész viszony** (szinekdoché). Sok szókép a köznyelvbe is bekerült, és már nem érezzük képnek: *az asztal lába*, *a hegy gerince*, *az idő telik*. Az ilyen „kopott” metaforák szinte szó szerintiek. Az irodalomban az **újszerű**, váratlan kép hat.',
        },
        { kind: 'heading', text: 'Hasonlat és metafora' },
        {
          kind: 'text',
          text: 'A **hasonlatban** két dolog szerepel (a hasonlított és a mihez hasonlítjuk), és a hasonlító szó (*mint*, *olyan*, *-szerű*, *-forma*) is ott van: *A tó olyan nyugodt, mint a tükör.* A **metaforában** nincs hasonlító szó, a két dolog azonosul: *A tó tükör.* Vagy rövidebben a jelző szerepel: *tükörsima tó*. A metafora lehet **tagolt** (mindkét tag kimondott: *az élet tenger*), vagy **leíró/jelzős** (*az élet tengere*), vagy **igei** (*a hó befedi a tájat*). A metaforát úgy elemezd, hogy megnevezed a **két dolgot** (mit mihez hasonlít) és a **közös vonást**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: hasonlat vagy metafora?',
          problem:
            'Döntsd el, hogy hasonlat vagy metafora! a) *Anya keze olyan puha, mint a selyem.* b) *A szavai tőrök.* c) *Az éjszaka fekete vitorlás.* d) *A gyerek szeme gyémánt.* (saját mondatok)',
          solution:
            'a) **hasonlat**: az *olyan puha, mint a selyem* kimondott hasonlító szavakkal.\n\nb) **metafora**: a szavak és a tőrök azonosulnak, hasonlító szó nincs; a közös vonás: bántó, szúró.\n\nc) **metafora**: az éjszaka azonosul egy vitorlással; közös: sötét, csendesen csúszik.\n\nd) **metafora**: a szem és a gyémánt azonosul; közös: csillogó, értékes.',
        },
        { kind: 'heading', text: 'Megszemélyesítés és szinesztézia' },
        {
          kind: 'text',
          text: 'A **megszemélyesítés** olyan metafora, amelyben élettelen vagy elvont dolgot **emberi tulajdonsággal** látunk el: *A szél dúdolt a kéményben.* *Az est ráhajolt a városra.* Az irodalomban gyakori: például a Himnuszban a sors *tép* (*Bal sors akit régen tép*), azaz a sors cselekvő lényként jelenik meg. A **szinesztézia** két különböző érzékterület összekapcsolása: *puha hang* (hallás + tapintás), *fényes zaj* (látás + hallás), *csípős szín* (látás + ízlelés). A szinesztézia a hangulatfestés fontos eszköze.',
        },
        { kind: 'heading', text: 'Metonímia és szinekdoché' },
        {
          kind: 'text',
          text: 'A **metonímia** a dolog nevét egy vele szoros kapcsolatban álló másik dolog nevére cseréli. Gyakori típusai: *szerző / mű* (*Petőfit olvasok*), *tartalom / tartalmazó* (*megivott egy pohárral*), *hely / ott lévők* (*a város felháborodott*), *eszköz / tevékenység* (*a toll hatalmasabb a kardnál*). A **szinekdoché** a metonímia különleges esete, a rész az egész helyett áll (vagy fordítva): *Négy szájat kell etetni.* (a „személy” helyett). A szinekdochét a *rész / egész*, a metonímiát az *egyéb érintkezés* különbözteti meg; a vizsgán a kettőt sokszor együtt kérdezik.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: metonímia vagy szinekdoché?',
          problem:
            'Nevezd meg a szóképet! a) *Egész nap Aranyt olvasott.* b) *Az osztály felállt.* c) *Szüksége van egy erős kézre.* d) *Egy tető alatt él a család.* (saját mondatok)',
          solution:
            'a) **metonímia**: a szerző neve a művei helyett.\n\nb) **metonímia**: a hely (osztály, azaz a teremben lévő diákok) áll az emberek helyett; az „osztály” itt a tagjait jelöli.\n\nc) **szinekdoché**: a *kéz* (rész) az egész ember (segítő) helyett.\n\nd) **szinekdoché**: a *tető* (rész) a ház, az otthon (egész) helyett áll.',
        },
        { kind: 'heading', text: 'Allegória és szimbólum' },
        {
          kind: 'text',
          text: 'Az **allegória** kiterjesztett, következetesen végigvitt metafora: egy egész történet, jelenet vagy mű mögött egy másik, elvont jelentés áll. Az állatmese tipikus allegória: a *róka* ravaszságot, a *bárány* ártatlanságot jelent. A **szimbólum** (jelkép) olyan kép, amely túlmutat önmagán, és általános, sokféleképp értelmezhető jelentést hordoz: *a fehér galamb* béke, *a kereszt* kereszténység, *a mérleg* igazság. Az allegória jelentése **egyértelműen megfejthető** (egy-egy elemnek egy jelentése van), a szimbólum jelentése **nyitottabb**, több értelmezést enged. Az emelt szinten a verset felépítő **képrendszerek** és **jelképrendszerek** elemzése is feladat: több kép összekapcsolódik és együtt ad jelentést.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **képi hálózat** (képrendszer) azt jelenti, hogy a költemény képei nem külön állnak, hanem összefüggenek: ugyanabból a szemantikai mezőből valók (pl. évszakok, tűz, út), vagy egymásra utalnak. Elemzéskor azt kell kimutatni, **hogyan épül fel**, és hogyan kapcsolódik a vers témájához, hangulatához. A **jelképrendszer** a szimbólumok kapcsolata egy műben vagy életműben (pl. a víz, a fény, az út motívumai).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegértési-nyelvi feladatsor: egy idézetben vagy szövegrészben kell megnevezni a szóképet (hasonlat, metafora, megszemélyesítés, metonímia stb.), és indokolni.',
            'Műértelmezésben: a képek szerepe a vers hangulatában és jelentésében; allegória és szimbólum megkülönböztetése.',
            'Szóbeli tétel: a szóképek bemutatása saját példákkal, valamint egy vers vagy szöveg képeinek elemzése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Hibák: a **hasonlatot** és a **metaforát** felcserélni (hasonlító szó van-e?); a **megszemélyesítést** nem metaforaként is kezelni; a **metonímiát** hasonlóságnak magyarázni (érintkezés a kulcs). A szimbólum megnevezésénél csak annyit mondj, ami a szövegből következik.',
        },
        {
          kind: 'example',
          title: 'Modellválasz: szóképek azonosítása sorokban',
          problem:
            'Nevezd meg a szóképet! 1. *Bal sors akit régen tép* (Kölcsey, Himnusz). 2. *A hold ezüst tál.* 3. *Hallgatom a kék csendet.* 4. *A korona nem engedett.* 5. *Olyan sápadt, mint a fal.*',
          solution:
            '1. **megszemélyesítés** (a sors cselekvő, tépő lényként jelenik meg), egyben metafora.\n\n2. **metafora** (a hold azonosul egy ezüst tállal; közös: kerek, fényes).\n\n3. **szinesztézia** (a *kék* látás, a *csend* hallás).\n\n4. **metonímia** (a korona az uralkodóra, illetve hatalmára utal).\n\n5. **hasonlat** (kimondott hasonlító szó: *olyan, mint*).',
        },
        {
          kind: 'tip',
          text: 'Mintaszerkezet a szóképek azonosításához: **1.** idézd a szövegrészt, **2.** nevezd meg a szóképet, **3.** magyarázd meg a két dolog kapcsolatát (hasonlóság, érintkezés vagy rész-egész), **4.** írd le a hatást (pl. szemléletesség, hangulat, érzelem).',
        },
      ],
      topicMatch: ['szóképek', 'költői kép', 'stíluseszközök'],
      cards: { subject: 'magyar', deck: 'irodalmi-fogalmak' },
      quiz: [
        {
          question: 'Melyik mondat metafora?',
          options: [
            'Olyan magas, mint egy torony.',
            'Az élet tenger.',
            'Petőfit olvasok.',
            'Hangosan nevetett.',
          ],
          answer: 1,
          explanation:
            'A metaforában a hasonlító szó hiányzik, az élet és a tenger azonosul. Az *Olyan magas, mint egy torony* hasonlat, a *Petőfit olvasok* metonímia.',
        },
        {
          question: 'Milyen szókép a *Nevetett a nap* kifejezés?',
          options: ['hasonlat', 'szinesztézia', 'megszemélyesítés', 'szinekdoché'],
          answer: 2,
          explanation:
            'A nap élettelen, mégis emberi tevékenységet (nevetés) tulajdonítunk neki: ez a megszemélyesítés.',
        },
        {
          question: 'Melyik példa szinesztézia?',
          options: ['kék ég', 'forró nyár', 'ropogós kenyér', 'selymes hang'],
          answer: 3,
          explanation:
            'A *selymes* tapintási érzet, a *hang* hallási: két érzékterület keveredik. A többi egy érzékterületen belül marad.',
        },
        {
          question: 'Milyen szókép a *Négy szájat kell etetni* mondat?',
          options: ['szinekdoché', 'hasonlat', 'allegória', 'szimbólum'],
          answer: 0,
          explanation:
            'A *száj* (rész) áll az egész ember helyett, ez rész-egész viszony, tehát szinekdoché.',
        },
        {
          question: 'Mi az allegória?',
          options: [
            'Két érzékterület összekapcsolása.',
            'A szerző nevének használata a műve helyett.',
            'Egy szó ismétlése.',
            'Kiterjesztett, egész művön vagy szakaszon végigvitt metafora.',
          ],
          answer: 3,
          explanation:
            'Az allegória egy egész történetet vagy jelenetet átfogó metafora, amelyben minden elemnek elvont jelentése van (pl. állatmese).',
        },
        {
          question: 'Mit kell kimutatni a képrendszerek elemzésénél?',
          options: [
            'Csak a rímképletet.',
            'Csak az írásjeleket.',
            'Hogyan függnek össze a képek, és hogyan építik fel a vers jelentését.',
            'A szerző életrajzát.',
          ],
          answer: 2,
          emelt: true,
          explanation:
            'A képi hálózat elemzése a képek összefüggéseire és a vers jelentésére irányul, nem csak az egyes képekre.',
        },
      ],
      sources: [
        { label: 'Szókép (Wikipedia)', url: wiki('szókép stilisztika') },
        { label: 'Metafora (Wikipedia)', url: wiki('metafora') },
        { label: 'Metonímia (Wikipedia)', url: wiki('metonímia') },
      ],
    },
    {
      id: 'alakzatok-mondatstilisztika-hangszimbolika',
      subject: 'magyar',
      unitId: 'stilus-jelentes',
      title: 'Alakzatok, mondatstilisztika és hangszimbolika',
      level: 'kozep',
      requirement: {
        kozep:
          'A helyzetnek, kommunikációs célnak megfelelő stíluseszközök tudatos használata; mondatstilisztikai eszközök (verbális, nominális stílus, körmondat); hangszimbolika, hangutánzás, hangulatfestés; az egyszerűbb alakzatok köznyelvi és irodalmi szövegekben.',
        emelt:
          'Az alakzatok különböző típusainak ismerete; a szókészlet stilisztikája (pl. archaizálás, evokáció); az íráskép stilisztikai hatásai; egyéni szóalkotások stilisztikai hatásai.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **alakzat** a szavak, mondatok **elrendezésével** hoz létre hatást; a szókép a szavak átvitt jelentésével.',
            'Az egyszerűbb alakzatok: **ismétlés**, **felsorolás**, **fokozás**, **ellentét**, **kihagyás**, **inverzió** (szórendcsere), **költői kérdés**, **felkiáltás**.',
            '**Verbális stílus**: igékben gazdag, mozgalmas. **Nominális stílus**: névszókban gazdag, tárgyilagos, hivatalos-tudományos. **Körmondat**: sok tagmondatból álló, gondosan szerkesztett összetett mondat.',
            '**Hangszimbolika**: a hangok hangulati hatása; **hangutánzás** (*kakukk*, *dörög*) és **hangulatfestés** (*susog*, *zúg*).',
            'Emelt szinten: az alakzatok típusai, az archaizálás, az evokáció, az íráskép és az egyéni szóalkotások hatása.',
          ],
        },
        {
          kind: 'compare',
          title: 'Az egyszerűbb alakzatok',
          columns: ['Lényege', 'Példa (saját)'],
          rows: [
            { label: 'ismétlés', cells: ['szó, szerkezet újra', '*Várok, várok, várok.*'] },
            { label: 'felsorolás', cells: ['egyenrangú elemek sora', '*Alma, körte, szilva.*'] },
            { label: 'fokozás', cells: ['egyre erősebb sor', '*Ment, futott, repült.*'] },
            { label: 'ellentét', cells: ['szembeállítás', '*Nem alszik, hanem virraszt.*'] },
            { label: 'kihagyás', cells: ['szó elmarad', '*Ő a kertbe, én a konyhába.*'] },
            { label: 'inverzió', cells: ['szokatlan szórend', '*Szép vagy te.*'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az alakzatok' },
        {
          kind: 'text',
          text: 'Az **alakzat** (figura) a mondatok és szavak **elrendezésén** alapuló stíluseszköz: nem a szó jelentése változik meg (mint a szóképnél), hanem a szavak ismétlése, sorrendje, hiánya vagy szembeállítása ad plusz hatást. Az alakzatok a költészetben és a szónoklatban, de a köznyelvben és a reklámban is gyakoriak.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ismétlés',
              text: 'Ugyanaz a szó, kifejezés vagy szerkezet többször szerepel: nyomatékot, ritmust ad. Pl. *Fáradt vagyok, nagyon fáradt.* Speciális típusa az **anafora** (a sorok vagy mondatok elején ismétlődik a szó).',
            },
            {
              term: 'felsorolás',
              text: 'Azonos szerepű elemek sora: a bőséget, sokféleséget érzékelteti. Pl. *Ott voltak a barátok, a rokonok, a szomszédok.*',
            },
            {
              term: 'fokozás (gradáció)',
              text: 'Az elemek egyre erősebbek vagy fontosabbak: *Szeret, imád, rajong érte.* Ha csökken, **lefelé fokozás**.',
            },
            {
              term: 'ellentét (antitézis)',
              text: 'Két szembenálló fogalmat állítunk egymás mellé: *Rabok legyünk vagy szabadok?* (Petőfi: Nemzeti dal).',
            },
            {
              term: 'kihagyás (ellipszis)',
              text: 'A mondatból kimarad valamilyen elem, amely a szövegkörnyezetből pótolható: *Te a boltba, én a postára.* Gyors, feszült hatású.',
            },
            {
              term: 'inverzió',
              text: 'A szokásostól eltérő szórend, amely a hangsúlyt vagy hangulatot változtatja: *Hazádnak rendületlenűl / Légy híve* (Vörösmarty: Szózat).',
            },
            {
              term: 'költői kérdés',
              text: 'Olyan kérdés, amelyre nem várunk választ: *Ki tudja, mit hoz a holnap?*',
            },
            {
              term: 'felkiáltás, megszólítás',
              text: 'Közvetlen, érzelmes hatású: *Talpra magyar, hí a haza!* (Petőfi: Nemzeti dal)',
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: alakzat felismerése',
          problem:
            'Nevezd meg az alakzatot! a) *Nem vagyok gazdag, de nem is vagyok szegény.* b) *Jött, látott, győzött.* c) *Aki szegény, az nem lehet szabad, aki szabad, az nem lehet szegény.* d) *Hol volt, hol nem volt, élt egyszer egy király.* (saját mondatok)',
          solution:
            'a) **ellentét** (gazdag / szegény szembeállítása).\n\nb) **felsorolás**, egyben **fokozás**: három rövid, egyre nagyobb eredményű cselekvés.\n\nc) **ismétlés** (párhuzamos szerkezet) és **ellentét**: a két tagmondat szerkezete megismétlődik, a *szegény* és a *szabad* szembenáll.\n\nd) **ellentét** (volt / nem volt) és **ismétlés**: a mesék hagyományos nyitóformulája.',
        },
        { kind: 'heading', text: 'Mondatstilisztikai eszközök' },
        {
          kind: 'text',
          text: 'A mondat felépítése is stílushatást hordoz. A **verbális stílus** igékre épül, dinamikus, cselekvést és mozgást mutat: *Beszaladt, felkapta a táskáját, és kirohant az ajtón.* Az irodalmi elbeszélésre, a beszédre jellemző. A **nominális stílus** névszókra épül (főnevek, melléknevek, főnévi igenévből, ragos főnévből álló kifejezések), statikus, tárgyilagos: *A beszállítás megtörténtét követően a számla kiegyenlítése esedékessé válik.* A hivatalos és tudományos stílusra jellemző. Ugyanazt a tartalmat átírhatjuk: *Miután beszállították az árut, ki kell fizetni a számlát.* (verbális).',
        },
        {
          kind: 'text',
          text: 'A **körmondat** (periódus) összetett mondat, sok tagmondattal, gondos szerkezettel, kiegyensúlyozott részekkel; tagjai gyakran kétrészesek: **előtag** (felvezetés, a feszültség fokozása) és **utótag** (a gondolat összegzése). Az ünnepélyes, szónoki és irodalmi stílus kedveli. A **rövid mondatok** gyors tempót, feszültséget adnak.',
        },
        { kind: 'heading', text: 'Hangszimbolika, hangutánzás, hangulatfestés' },
        {
          kind: 'text',
          text: 'A hangok önmagukban is hordozhatnak hangulati hatást. A **hangutánzó szavak** valódi hangot utánoznak: *kakukk*, *cirpel*, *dörög*, *csobban*. A **hangulatfestő szavak** nem hangot, hanem mozgást, látványt, érzetet fejeznek ki a hangok hangulatával: *libeg*, *zúg*, *susog*, *csillog*. A **hangszimbolika** szerint a *magas hangrendű* hangok (e, é, i, í) gyakran kicsi, finom, éles benyomást keltenek (*csilingel*, *pici*), a *mély hangrendűek* (a, o, u) nagyobb, súlyosabb benyomást (*dübörög*, *bumm*). Ez nem szabály, csak tendencia, de a költők használják. A **szóismétlés**, **alliteráció** (szókezdő hang ismétlése) is hangulatfestő eszköz: *szél szalad szanaszét* (saját példa).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: mondatstílus megállapítása',
          problem:
            'Milyen stílusú a mondat (verbális vagy nominális)? a) *A vizsgák lebonyolítása a bizottság feladata.* b) *Ahogy lejött a lépcsőn, megállt, körbenézett, és elmosolyodott.*',
          solution:
            'a) **nominális stílus**: *lebonyolítása*, *feladata* névszók, egyetlen ige sincs, tárgyilagos, hivatalos hatás.\n\nb) **verbális stílus**: négy ige (*lejött, megállt, körbenézett, elmosolyodott*) egymást követő cselekvésekkel, mozgalmas hatás.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten az alakzatok **típusait** is ismerned kell: a *szóalakzat* az egyes szavak elrendezése (ismétlés, anafora, halmozás), a *gondolatalakzat* a gondolatok viszonyáról szól (ellentét, fokozás, költői kérdés, szónoki kérdés). A **szókészlet stilisztikája**: az **archaizálás** régies szavakkal, formákkal teremt múltidéző hangulatot, az **evokáció** pedig korhoz, helyhez vagy műfajhoz tartozó szavakkal idéz meg egy világot. Az **íráskép** hatása: a sor- és versszaktördelés, a nagybetűk, a kiemelés, az írásjelek (pl. kipontozás, gondolatjel) értelmet és ritmust adnak. Az **egyéni szóalkotás** (alkalmi szó) új szó a szerző alkotásában (pl. összetett szavak, tréfás képzések); stilisztikai hatása újszerűség, humor vagy pontos kifejezés.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Nyelvi feladatsor: rövid részletben kell megnevezni az alakzatot (ismétlés, felsorolás, fokozás, ellentét, kihagyás, inverzió).',
            'Stílus megállapítása: verbális vagy nominális, van-e körmondat, miért.',
            'Szépirodalmi szövegnél a hangutánzás, hangulatfestés és a hangszimbolika szerepének kiemelése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd a **szóképet** (átvitt jelentés) az **alakzattal** (elrendezés). Az *ismétlés* alakzat, a *metafora* szókép. Ha egy mondatban mindkettő szerepel, mindkettőt nevezd meg külön.',
        },
        {
          kind: 'tip',
          text: 'Modellválasz „Milyen stílushatást kelt az alakzat?”: nevezd meg (pl. fokozás), idézd a szavakat, és írd le a hatást: *a fokozás az érzelem erősödését mutatja, a mondat feszültsége nő.* Egy szó elég a hatásra: nyomaték, ritmus, feszültség, gyorsaság, ünnepélyesség.',
        },
      ],
      topicMatch: ['alakzatok', 'stíluseszközök', 'stilisztika'],
      cards: { subject: 'magyar', deck: 'irodalmi-fogalmak' },
      quiz: [
        {
          question: 'Melyik alakzat áll a *Rabok legyünk vagy szabadok?* sorban?',
          options: ['ellentét', 'hasonlat', 'kihagyás', 'szinesztézia'],
          answer: 0,
          explanation:
            'A *rabok* és a *szabadok* szembenálló fogalmak: ez az ellentét (antitézis).',
        },
        {
          question: 'Melyik mondat nominális stílusú?',
          options: [
            'Felugrott, és elrohant.',
            'Hazamegyek, és alszom.',
            'Szaladt, nevetett, kiabált.',
            'A beadvány elbírálása a hatóság hatáskörébe tartozik.',
          ],
          answer: 3,
          explanation:
            'A *beadvány elbírálása* mondat névszókból áll (*elbírálása*, *hatáskörébe*), kevés ige van benne, tárgyilagos. A többi verbális.',
        },
        {
          question: 'Melyik szó hangutánzó?',
          options: ['kakukk', 'szép', 'folyó', 'ablak'],
          answer: 0,
          explanation:
            'A *kakukk* a madár hangját utánozza. A többi szónak nincs hangutánzó eredete.',
        },
        {
          question: 'Mi a körmondat?',
          options: [
            'Egy szóból álló mondat.',
            'Kérdő mondat.',
            'Sok tagmondatból, gondosan szerkesztett összetett mondat.',
            'Olyan mondat, amelyből kihagytak szavakat.',
          ],
          answer: 2,
          explanation:
            'A körmondat összetett mondat, sok tagmondattal és kiegyensúlyozott szerkezettel, ünnepélyes hatással.',
        },
        {
          question: 'Mit jelent az archaizálás?',
          options: [
            'Régies szavakkal, formákkal múltat idéző hangulat teremtése.',
            'Új szavak alkotása.',
            'Idegen szavak használata.',
            'Hangutánzó szavak használata.',
          ],
          answer: 0,
          emelt: true,
          explanation:
            'Az archaizálás régies szókészlettel idéz múltat, ezzel stilisztikai hatást ér el.',
        },
      ],
      sources: [
        { label: 'Alakzat (Wikipedia)', url: wiki('alakzat stilisztika retorika') },
        { label: 'Körmondat (Wikipedia)', url: wiki('körmondat') },
        { label: 'Hangszimbolika (Wikipedia)', url: wiki('hangszimbolika') },
      ],
    },
    {
      id: 'stilusreteg-stilusvaltozat-felismerese',
      subject: 'magyar',
      unitId: 'stilus-jelentes',
      title: 'Stílusrétegek és stílusváltozatok felismerése',
      level: 'kozep',
      requirement: {
        kozep:
          'A leggyakoribb stílusrétegek jellemzőinek megismerése, felismerése, elemzése a szövegtani jellemzőkkel összefüggésben; a társalgási stílus ismérvei; a tudományos és szakmai stílus sajátosságai; a közélet színterei, a közéleti és a hivatalos stílus kritériumai, stiláris kötöttségei; a publicisztikai stílus főbb jellemzői, tipikus szóhasználat, a megjelenítés közlésértéke (tipográfia, képi világ).',
        emelt:
          'Nem irodalmi és szépirodalmi szövegek stílusának összehasonlítása; stílushatásuk komplex értékelése; a stílus és norma koronkénti változatai.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **stílusréteg** a közlés helyzetéhez, céljához kötődő nyelvhasználati módok csoportja. A fő rétegek: **társalgási**, **tudományos**, **publicisztikai**, **hivatalos** és **szépirodalmi**.',
            '**Társalgási**: spontán, többnyire szóbeli, bizalmas, hiányos mondatok, nem nyelvi jelek. **Tudományos**: pontos, tárgyilagos, szakszavak, nominális szerkezetek.',
            '**Publicisztikai**: a közélet tájékoztatása és véleményformálása; figyelemfelkeltő cím, tipográfia, képek. **Hivatalos**: szabályozott, személytelen, formulák.',
            '**Szépirodalmi**: esztétikai hatásra törekszik, egyéni, képekben gazdag, nincs kötött forma.',
            'A stílusréteget a **szóhasználat**, a **mondatszerkezet**, a **szövegszerkesztés** és a **kommunikációs helyzet** együtt árulja el.',
          ],
        },
        {
          kind: 'compare',
          title: 'A stílusrétegek összevetése',
          columns: ['Fő jellemző', 'Tipikus példa'],
          rows: [
            { label: 'társalgási', cells: ['spontán, bizalmas', 'baráti beszélgetés, üzenet'] },
            { label: 'tudományos', cells: ['pontos, tárgyilagos', 'tanulmány, szakkönyv'] },
            { label: 'publicisztikai', cells: ['hatásos, aktuális', 'cikk, riport, glossza'] },
            {
              label: 'hivatalos',
              cells: ['kötött, személytelen', 'kérvény, határozat, szerződés'],
            },
            { label: 'szépirodalmi', cells: ['esztétikai hatás, egyéni', 'vers, regény, novella'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Stílusréteg és stílusváltozat' },
        {
          kind: 'text',
          text: 'A **stílusréteg** a nyelvhasználat egy típusa, amelyet a *kommunikációs helyzet* (hol, kinek, miről) alakít ki. A tankönyvek ötféle fő réteget különítenek el: **társalgási, tudományos, publicisztikai, hivatalos, szépirodalmi**. A rétegeken belül **stílusváltozatok** vannak (pl. a publicisztikán belül a hír, a riport, a vezércikk; a hivatalos stíluson belül a kérvény, a határozat). Egy szöveg gyakran vegyes: a stílusréteget a **domináns** jegyek alapján állapítjuk meg.',
        },
        { kind: 'heading', text: 'Társalgási stílus' },
        {
          kind: 'text',
          text: 'Ez a **mindennapi beszélgetés** stílusa. Jegyei: spontán, kevéssé tervezett; többnyire **szóbeli** (de lehet SMS, chat is); **bizalmas**, közvetlen hangnem; **rövid, hiányos mondatok**, megakadások, félbehagyások, töltelékszavak (*hát, nos, izé*); **nem nyelvi eszközök** (hanglejtés, gesztus, mimika) segítik a megértést; a helyzet sokat pótol, ezért sok a *mutató szó* (*ez*, *az*, *ott*); gyakoriak a szleng, a rövidítések, a becézés. *Tegnap azt a... na, tudod, azt a nagy filmet láttuk.*',
        },
        { kind: 'heading', text: 'Tudományos és szakmai stílus' },
        {
          kind: 'text',
          text: 'Célja az ismeretek **pontos, hiteles közlése**. Jegyei: **szakszavak** (terminusok), egyértelmű jelentés; **tárgyilagos, személytelen** hangnem (*megállapítható*, *látható*); **nominális** szerkezetek, **hosszabb, bonyolultabb összetett mondatok**; a mondatok logikusan kapcsolódnak (*tehát, ezért, ugyanis*); **hivatkozások**, idézetek, ábrák, jegyzetek; érzelmi vagy képes kifejezések kerülése; a szöveg gondosan **tagolt** (fejezetek, számozás). Szakmai szövegek (pl. orvosi, jogi, műszaki) hasonló jegyeket mutatnak, a szókészlet viszont az adott szakterület szakszavaira épül.',
        },
        { kind: 'heading', text: 'Publicisztikai stílus' },
        {
          kind: 'text',
          text: 'A **publicisztika** a sajtóban, a médiában megjelenő, közéleti témákkal foglalkozó szövegek stílusa. Célja a *tájékoztatás* és a *véleményformálás*. Jegyei: **aktualitás**, figyelemfelkeltő **cím** (gyakran szójáték), **tipográfia** (kiemelés, betűméret, alcímek, keretes írás), **képek** és ábrák, a **tömör**, érthető mondatok, a **közérthető** szóhasználat, sok **szólás**, **kép** és **szóképek**, **hangulatos kifejezések**, gyakran idézetek. Típusai: **hír** (tényközlő), **tudósítás**, **riport**, **interjú**, **vezércikk** (állásfoglalás), **glossza** (rövid, csattanós véleményírás), **kritika**. A közlésértékben a *megjelenítés* is szerepel: a cím betűmérete és a fotó üzenetet hordoz.',
        },
        { kind: 'heading', text: 'Hivatalos és közéleti stílus' },
        {
          kind: 'text',
          text: 'A **hivatalos stílus** az intézményi, jogi, közigazgatási szövegek stílusa (pl. törvény, rendelet, határozat, kérvény, meghatalmazás, szerződés, hivatalos levél, önéletrajz). Jegyei: **pontos, egyértelmű**, **személytelen**, **tömör**; **szabályozott forma** (fejléc, dátum, megszólítás, aláírás); rögzített **formulák** (*Tisztelettel kérem…*, *alulírott*, *kérem szíves intézkedését*); a **nominális stílus** és a körülíró szerkezetek; udvarias hangnem. A **közélet színterei** (politika, oktatás, média, jog, egyházi élet) is szabnak stiláris kötöttségeket: a **felszólalás**, hozzászólás hivatalos hangnemet, a hallgatóság megszólítását és az udvariassági formák betartását igényli.',
        },
        { kind: 'heading', text: 'Szépirodalmi stílus' },
        {
          kind: 'text',
          text: 'A szépirodalmi stílus az **esztétikai hatásra** törekszik. Jegyei: **egyéni** hangvétel, **képszerűség** (szóképek, alakzatok), a **nyelvi eszközök** tudatos és változatos használata, nincs kötött forma és szókészlet, a nyelv minden rétegéből meríthet (népies, archaikus, szleng), és a **költői nyelv** akár a nyelvi normát is megsértheti. A szépirodalmi szöveg jelentése gyakran **többértelmű**.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: stílusréteg felismerése',
          problem:
            'Nevezd meg a stílusréteget, és két jegyet! a) *Alulírott kérem, hogy a fenti ügyben szíves intézkedését megtenni szíveskedjék.* b) *Képzeld, tegnap beültünk a sulibüfébe, és hát, izé, megjött a Peti is.* c) *A kísérlet eredményei alapján megállapítható, hogy a fehérje mennyisége a hőmérséklet függvényében csökken.* d) *Ősz van, és a tó vizén lomha árnyak ülnek.* (saját szövegek)',
          solution:
            'a) **hivatalos**: formula (*alulírott*, *szíves intézkedését*), személytelen, udvarias hangnem.\n\nb) **társalgási**: bizalmas szavak (*suli*), töltelékszó (*izé*, *hát*), spontán, félbehagyott szerkezetek.\n\nc) **tudományos**: tárgyilagos, szakszó (*fehérje*), logikus következtetés (*megállapítható*), nominális fordulatok.\n\nd) **szépirodalmi**: szókép (*árnyak ülnek*: megszemélyesítés), hangulatfestés, esztétikai törekvés.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: publicisztikai szöveg',
          problem:
            'Mitől publicisztikai ez a szöveg? Cím nagybetűvel: *„ÖRÖK ŐSZ A VÁROSBAN”.* Lead: *Három hete nem sütött ki a nap, a járókelők már a kabátjukat sem veszik le.* (saját szöveg)',
          solution:
            'A szöveg **publicisztikai**, mert: **1.** a cím figyelemfelkeltő, szójátékos, nagybetűvel kiemelt (tipográfia); **2.** a bevezető (lead) tömören adja a legfontosabb információt; **3.** aktuális, közérthető, hangulatos kifejezések; **4.** a szöveg egyszerre tájékoztat, és hangulatot is kelt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten nem irodalmi és szépirodalmi szövegek **stílusát hasonlítod össze**: például egy természettudományos leírás és egy ugyanerről szóló költemény. A **tudományos** szöveg pontos, tényszerű, szakszavas; a **szépirodalmi** képekkel, érzelmekkel hat. A **stílus és norma koronkénti változatai**: a nyelvi norma változik, ezért régi szövegekben ma szokatlan formák állnak (pl. *vala*, *avagy*, tegezés-magázás szabályai, régi helyesírás). Egy-két korabeli példa bemutatása elegendő (pl. a *vala* alak vagy a *hajdan* szó), és mutasd meg, mi ma már régies.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegértési-nyelvi feladatsor: rövid szöveg stílusrétegét kell megnevezni, és jegyekkel indokolni.',
            'A szövegalkotási feladatban a megadott helyzethez illő stílust kell használnod (pl. hivatalos levél, olvasói levél, szónoki beszéd).',
            'Szóbeli tétel: a stílusrétegek jellemzése példákkal.',
            'Emelt szinten: két különböző stílusú szöveg összehasonlítása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Hibák: egyetlen jegy alapján döntesz (pl. „van benne kép, tehát szépirodalmi”); a publicisztikai szöveg is használ szóképet. Mindig **több jegyet** nézz: szókészlet, mondatszerkezet, hangnem, cél, forma. Ne a témát nevezd stílusnak (az *orvosi* téma nem egyenlő a *tudományos* stílussal).',
        },
        {
          kind: 'tip',
          text: 'Mintaválasz: „A szöveg *hivatalos* stílusú, mert: **1.** formulát tartalmaz (*alulírott*), **2.** személytelen, udvarias hangnemű, **3.** nominális szerkezeteket használ.” Mindig három jegyet adj meg: szókészlet, mondatok, cél/hangnem.',
        },
      ],
      topicMatch: ['stílusrétegek', 'tudományos stílus', 'társalgási stílus', 'tudományos szöveg'],
      cards: { subject: 'magyar', deck: 'irodalmi-fogalmak' },
      quiz: [
        {
          question: 'Melyik stílusrétegre jellemző a *Tisztelettel kérem…* formula?',
          options: ['társalgási', 'szépirodalmi', 'hivatalos', 'tudományos'],
          answer: 2,
          explanation:
            'A rögzített, udvarias formulák a hivatalos stílus kötöttségeinek részei (kérvény, levél).',
        },
        {
          question: 'Mi jellemző a társalgási stílusra?',
          options: [
            'Szakszavak és pontos hivatkozások.',
            'Hiányos mondatok, töltelékszavak, nem nyelvi eszközök.',
            'Kötött formulák.',
            'Szigorúan szerkesztett körmondatok.',
          ],
          answer: 1,
          explanation:
            'A spontán társalgásban gyakoriak a félbehagyott, hiányos mondatok és a gesztusok, hanglejtés.',
        },
        {
          question: 'Melyik a publicisztikai stílus jellemző eleme?',
          options: [
            'Figyelemfelkeltő cím és tipográfia.',
            'Szigorú hivatkozási rendszer.',
            'Rögzített hivatalos formulák.',
            'Szleng és becézés.',
          ],
          answer: 0,
          explanation:
            'A publicisztika a figyelem felkeltésére törekszik, ezért fontos a cím, a kiemelés, a képi megjelenítés.',
        },
        {
          question:
            'Melyik stílusrétegbe tartozik a *A mérés alapján megállapítható, hogy a nyomás növekszik.* mondat?',
          options: ['társalgási', 'hivatalos', 'szépirodalmi', 'tudományos'],
          answer: 3,
          explanation:
            'A tárgyilagos, személytelen hang (*megállapítható*), a mérésre hivatkozás és a pontos állítás a tudományos stílusra vall.',
        },
        {
          question: 'Mit jelent a stílus és norma koronkénti változata?',
          options: [
            'Hogy minden korban ugyanazt a nyelvet használták.',
            'Hogy a hivatalos nyelv nem változik.',
            'Hogy csak a költők használnak régi szavakat.',
            'Hogy a nyelvi norma változik, ezért régi szövegekben ma szokatlan formák vannak.',
          ],
          answer: 3,
          emelt: true,
          explanation:
            'A nyelvi norma korszakonként változik, így a régi szövegek stílusa eltér a maitól (pl. *vala*, *avagy*).',
        },
      ],
      sources: [
        { label: 'Stílusréteg (Wikipedia)', url: wiki('stílusréteg magyar nyelv') },
        { label: 'Publicisztika (Wikipedia)', url: wiki('publicisztika') },
        { label: 'Hivatalos levél (Wikipedia)', url: wiki('hivatalos stílus magyar') },
      ],
    },
    {
      id: 'jelentestan-szohasznalat-emelt-bovites',
      subject: 'magyar',
      unitId: 'stilus-jelentes',
      title: 'Jelentéstan emelt szinten: hangalak, jelentésmező, jelentésváltozás',
      level: 'emelt',
      requirement: {
        emelt:
          'A hangalak és jelentés viszonya, jelentésmező; motivált és motiválatlan szavak; a szójelentés változásai; a jelentés szerepe a nyelvi szerkezetek kialakításában; a szórend jelentésváltozatainak megfigyelése, hatásértelmezés.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A hangalak és a jelentés kapcsolata **önkényes** (nincs természetes összefüggés): ugyanaz a dolog más nyelven más szó. Kivétel a **hangutánzó** és részben a hangulatfestő szavak.',
            '**Motivált** a szó, ha a jelentése a szerkezetéből vagy hangalakjából megérthető (*íróasztal*, *kakukk*); **motiválatlan**, ha nem (*ház*, *víz*).',
            '**Jelentésmező**: egy fogalomkör szavainak összetartozó csoportja (pl. rokonság: *apa, anya, testvér, nagybácsi*).',
            'A szójelentés **változik**: szűkülhet, bővülhet, átvihető (*egér*: állat, illetve számítógépes eszköz).',
            'A **szórend** hangsúlyt és jelentésárnyalatot hoz létre: *Péter ment Pestre.* és *Pestre Péter ment.*',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hangalak és a jelentés viszonya' },
        {
          kind: 'text',
          emelt: true,
          text: 'A nyelvi jel (a szó) **hangalakból** és **jelentésből** áll. A kettő viszonya **önkényes** (arbitrárius): nem következik semmilyen természeti törvényből, hogy a *kutya* a magyarban *kutya*, az angolban *dog*. Azért tudunk mégis kommunikálni, mert a beszélőközösség **megegyezés** (konvenció) szerint használja a szavakat. Kivétel a **hangutánzó szavak** (*cirpel*, *kakukk*), amelyeknél a hangalak utánoz valamit, de a nyelvek itt is eltérnek (a kakas hangja magyarul *kukurikú*, angolul *cock-a-doodle-doo*).',
        },
        { kind: 'heading', text: 'Motivált és motiválatlan szavak' },
        {
          kind: 'text',
          emelt: true,
          text: 'A **motivált szó** jelentése a hangalakból vagy a szerkezetéből kikövetkeztethető. Ilyenek a hangutánzó és hangulatfestő szavak, és az **összetett, képzett szavak**: az *íróasztal* jelentése az *író* és az *asztal* ismeretében érthető, az *olvasó* az *olvas* + *-ó* képzőből. A **motiválatlan szó** jelentése nem következik semmiből; ilyenek az alapszavak, például *ház*, *kő*, *víz*, *fa*. A nyelvtörténet szerint a motiválatlannak látszó szavak is lehettek valaha motiváltak, de ez az idők során elhomályosult.',
        },
        { kind: 'heading', text: 'Jelentésmező' },
        {
          kind: 'text',
          emelt: true,
          text: 'A **jelentésmező** egy fogalomkör szavainak rendezett csoportja, ahol a szavak jelentése egymással összefügg, és kölcsönösen meghatározza egymást. Ilyen a *rokonság* (apa, anya, testvér, nagybácsi, unoka), a *színek* (piros, kék, zöld), a *napszakok* (reggel, dél, este, éjszaka). A mezőn belül minden szó egy részt fed le, ezért hiányzik-e egy szó, megváltozik a többi jelentése is. A mező nyelvenként eltérhet: a magyarban a *bátyám* és az *öcsém* külön szó, az angolban egy közös (*brother*) szó fedi.',
        },
        { kind: 'heading', text: 'A szójelentés változásai' },
        {
          kind: 'text',
          emelt: true,
          text: 'A jelentés idővel változik. **Jelentésszűkülés**: a szó jelentése szűkebb lesz, például a *mobil* melléknévből főnév lett (*mobiltelefon*). **Jelentésbővülés**: egy szó több dologra is vonatkozik, mint korábban. **Jelentésátvitel**: egy dolog neve hasonlóság vagy kapcsolat alapján másik dolgot jelöl: az *egér* állat, de a számítógépes *egér* is, mert hasonlít rá; az *ablak* épületrész, de a számítógépes ablak is. A jelentésváltozás gyakori forrása a **metafora** és a **metonímia**. Ezért számos szó többjelentésű, ahogy a *levél* is: növényi, illetve postai.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa 1.: motivált vagy motiválatlan?',
          problem: 'Döntsd el, motivált vagy motiválatlan! a) *csörög* b) *víz* c) *vasút* d) *kő*',
          solution:
            'a) **motivált**: hangutánzó/hangulatfestő, a hangalak a hangot utánozza.\n\nb) **motiválatlan**: alapszó, a hangalak nem utal a jelentésre.\n\nc) **motivált**: összetett szó (*vas* + *út*), a jelentés kikövetkeztethető.\n\nd) **motiválatlan**: alapszó.',
        },
        { kind: 'heading', text: 'A jelentés szerepe a szerkezetekben és a szórend' },
        {
          kind: 'text',
          emelt: true,
          text: 'A jelentés meghatározza, mely szavak kapcsolódhatnak egymáshoz (**szójelentés és szerkezet**). A *szépen énekel* szerkezetes, a *szépen kő* értelmetlen, mert a jelentések nem illeszkednek. A **szórend** a magyarban szabad, de nem közömbös: a hangsúlyos (fókuszos) tag az ige előtti helyre kerül, így *Péter ment Pestre* (Péter és nem más) mást hangsúlyoz, mint *Pestre ment Péter* (Pestre és nem máshova), illetve *Péter Pestre ment*. A jelentésváltozatot a szórend jelzi, az **inverzió** pedig ezt stílusként használja.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű szóbeli tétel: a hangalak és jelentés viszonya, a jelentésmező, a motivált szavak és a jelentésváltozás bemutatása példákkal.',
            'Nyelvi feladatban: szócsoport (jelentésmező) felismerése, jelentésváltozás megnevezése, szórend hatásának értelmezése.',
          ],
        },
        {
          kind: 'warning',
          text: 'A **motivált szó** nem azt jelenti, hogy „az ember érzelmileg motivált”: a kérdés a szó jelentésének megérthetősége a szerkezetből vagy hangalakból. Ne keverd a jelentésszűkülést a bővüléssel: nézd, hány dologra vonatkozik a szó a változás előtt és után.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Modellválasz a szórendhatás-kérdésre: nevezd meg, melyik szó kapott hangsúlyt (az ige előtti helyen álló), és mit változtat ez a jelentésen. *Anna olvasta a könyvet* (Anna, nem más); *A könyvet Anna olvasta* (a könyv, nem más); mindkettő ugyanazt állítja, de más tag a kiemelt.',
        },
      ],
      topicMatch: ['szójelentés'],
      cards: { subject: 'magyar', deck: 'irodalmi-fogalmak' },
      quiz: [
        {
          question: 'Melyik szó motivált?',
          options: ['víz', 'kő', 'íróasztal', 'ház'],
          answer: 2,
          explanation:
            'Az *íróasztal* az *író* és az *asztal* ismeretében érthető, tehát összetett, motivált szó. A többi alapszó, motiválatlan.',
        },
        {
          question: 'Mi a jelentésmező?',
          options: [
            'Azonos alakú szavak csoportja.',
            'A szótár szócikke.',
            'Egy fogalomkör összetartozó szavai (pl. rokonsági nevek).',
            'Hasonlóan hangzó szavak csoportja.',
          ],
          answer: 2,
          explanation:
            'A jelentésmező egy fogalomkörhöz tartozó szavak rendszere, jelentéseik egymással összefüggnek.',
        },
        {
          question: 'Mi okozta a *számítógépes egér* szó jelentésének kialakulását?',
          options: [
            'jelentésátvitel hasonlóság alapján',
            'hangutánzás',
            'szóösszetétel',
            'szóképzés',
          ],
          answer: 0,
          emelt: true,
          explanation:
            'Az eszköz hasonlít az állatra, ezért a nevét átvitt jelentésben kapta: ez metaforikus jelentésátvitel.',
        },
        {
          question: 'Mit jelent az, hogy a hangalak és a jelentés viszonya önkényes?',
          options: [
            'Nincs természetes ok arra, hogy egy dologhoz éppen az a hangalak tartozik.',
            'A szavak jelentése senkit nem érint.',
            'A szavakat bárki bármikor megváltoztathatja.',
            'Csak hangutánzó szavak vannak.',
          ],
          answer: 0,
          emelt: true,
          explanation:
            'Az önkényesség azt jelenti, hogy a hangalak és a jelentés kapcsolata megegyezésen alapul, és nyelvenként más.',
        },
      ],
      sources: [
        { label: 'Jelentéstan (Wikipedia)', url: wiki('jelentéstan szemantika') },
        { label: 'Jelentésváltozás (Wikipedia)', url: wiki('jelentésváltozás') },
        { label: 'Szórend (Wikipedia)', url: wiki('magyar szórend') },
      ],
    },
  ],
};

export default unit;
