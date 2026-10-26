import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv: A szöveg (5. témakör) és A retorika alapjai (6. témakör). */
const unit: GuideUnit = {
  id: 'szoveg-retorika',
  subject: 'magyar',
  order: 8,
  title: 'A szöveg és a retorika alapjai',
  requirementRef: 'Nyelv 5. A szöveg; Nyelv 6. A retorika alapjai',
  intro:
    'Mitől szöveg egy szöveg, miben más a szóbeli és az írásbeli, hogyan épül fel egy bekezdés, és hogyan kell értelmezni, majd magad megalkotni egy szöveget. A második fele a meggyőzésről szól: a beszéd felépítése, az érvelés, az érvtípusok és a cáfolat. Sok kidolgozott példával.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Nyelv 5. témakör: A szöveg; Nyelv 6. témakör: A retorika alapjai). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan. A tankönyvek az érvtípusokat és az érvelési hibákat kissé eltérően csoportosítják; a leckében a leggyakoribb rendszerezés szerepel.',
  pages: [
    {
      id: 'szoveg-fogalma-szobeliseg-irasbeliseg',
      subject: 'magyar',
      unitId: 'szoveg-retorika',
      title: 'A szöveg fogalma, a szóbeliség és az írásbeliség',
      level: 'kozep',
      requirement: {
        kozep:
          'A szöveg fogalma, jellemzői; szöveg, szövegösszefüggés, beszédhelyzet; a címzett szerepe; a szóbeliség és az írásbeliség hatása a szövegformálásra, a szóbeli és írott szövegek eltérő jegyei; a szövegfonetikai eszközök (hangsúly, hanglejtés, hangerő, szünet, beszédtempó) és az írásjelek helyes, kifejező alkalmazása; szövegalkotás tájékoztató, érvelő, meggyőző, vitázó közlésformák egyszerűbb műfajaiban.',
        emelt:
          'A szövegek jellemzőinek rendszerezése; szövegalkotás a tájékoztató, érvelő, meggyőző, vitázó közlésformák összetettebb műfajaiban; érvelő esszék írása.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **szöveg** összefüggő, lezárt, valamilyen közlési célt szolgáló nyelvi egység. Nem a hossza dönt: egy *Tilos a dohányzás!* felirat is szöveg, ha egy helyzetben közöl valamit.',
            'A szöveg mindig **beszédhelyzetben** születik: van beszélője (szerzője), **címzettje**, témája, célja, ideje, helye és csatornája. A címzett befolyásolja, hogyan fogalmazol.',
            'A **szóbeli** szöveg gyakran spontán, kontextusra támaszkodik, és a hangzás eszközeivel (hangsúly, hanglejtés, szünet) tagol. Az **írott** szöveg tervezett, javítható, kontextus nélkül is érthetőnek kell lennie, és írásjelekkel tagol.',
            'A **szövegfonetikai eszközök**: hangsúly, hanglejtés, hangerő, szünet, beszédtempó. Az írásban ezeket részben az **írásjelek** pótolják.',
            'Négy fő közlésforma, amelyben szöveget kell alkotnod: **tájékoztató, érvelő, meggyőző, vitázó**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'szöveg',
              text: 'Tartalmilag és szerkezetileg összefüggő, valamilyen kommunikációs szándékot kifejező nyelvi egység.',
            },
            {
              term: 'beszédhelyzet',
              text: 'A közlés körülményei: ki, kinek, mikor, hol, miről, milyen céllal és milyen csatornán (szóban, írásban, képernyőn) szól.',
            },
            {
              term: 'címzett',
              text: 'Akinek a szöveg szól. A szó- és mondatválasztás, a stílus és a részletesség is hozzá igazodik.',
            },
            {
              term: 'szövegfonetikai eszközök',
              text: 'A szóbeli szöveget tagoló és jelentést árnyaló hangzási eszközök: hangsúly, hanglejtés, hangerő, szünet, beszédtempó.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a szöveg?' },
        {
          kind: 'text',
          text: 'A szöveg nem csupán mondatok sora. Akkor lesz szöveg, ha a részei **összetartoznak** (közös téma, logikus kapcsolat), **lezártak** (van eleje és vége), és **közlési szándékot** hordoznak. Ugyanaz a mondat más szövegben mást jelent: a *Hideg van.* lehet időjárás-jelentés, kérés (csukd be az ablakot!) vagy panasz.',
        },
        {
          kind: 'text',
          text: 'A szöveg jellemzői, amelyeket megfigyelhetsz: **téma** (miről szól), **cél** (mit akar elérni: tájékoztat, meggyőz, szórakoztat), **címzett**, **műfaj** és **stílus**, **szerkezet** és **megjelenés** (hossz, tagolás, kép, kiemelés).',
        },
        { kind: 'heading', text: 'Beszédhelyzet és szövegösszefüggés' },
        {
          kind: 'text',
          text: 'A **szövegösszefüggés** (kontextus) mindaz, ami egy közlés értelmezéséhez kell: a megelőző és következő mondatok, a beszédhelyzet, a közös tudás. Szóban a helyzet sokat pótol (*Add ide azt!* – rámutatunk), írásban a szövegnek magának kell mindent kifejeznie.',
        },
        { kind: 'heading', text: 'Szóbeliség és írásbeliség' },
        {
          kind: 'compare',
          title: 'Szóbeli és írott szöveg',
          columns: ['Szóbeli', 'Írott'],
          rows: [
            {
              label: 'Készülés',
              cells: [
                'gyakran spontán, javítani csak utólag lehet',
                'tervezett, szerkesztett, javítható',
              ],
            },
            {
              label: 'Helyzetfüggés',
              cells: [
                'a közös helyzetre, mimikára, gesztusra támaszkodik',
                'önmagában is érthetőnek kell lennie',
              ],
            },
            {
              label: 'Mondatok',
              cells: [
                'rövidebb, töredékes, ismétlő, kihagyásos mondatok',
                'összetettebb, kerekebb mondatok, pontosabb szóhasználat',
              ],
            },
            {
              label: 'Tagolás',
              cells: [
                'szövegfonetikai eszközök: hangsúly, hanglejtés, szünet',
                'írásjelek, bekezdés, kiemelés',
              ],
            },
            {
              label: 'Visszacsatolás',
              cells: [
                'a címzett azonnal reagál, kérdezhet',
                'a reakció késik, a szerzőnek előre kell gondolkodnia',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A határ nem éles: a levél írott, de lehet beszélgető hangú; a felolvasott előadás szóbeli, de írott szöveg alapján hangzik el. A chat és az üzenetküldés a kettő között áll.',
        },
        { kind: 'heading', text: 'Szövegfonetikai eszközök és írásjelek' },
        {
          kind: 'text',
          text: 'A **hangsúly** kiemeli a mondat fontos szavát, a **hanglejtés** jelzi a mondat fajtáját (a kérdés gyakran emelkedő vagy ereszkedő, a közlés ereszkedő, a félbehagyott mondat lebegő). A **szünet** tagol és feszültséget kelt, a **hangerő** és a **beszédtempó** a hangulatot és a fontosságot jelzi.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: a hangsúly és a jelentés',
          problem:
            'Hogyan változik a jelentés, ha a hangsúly máshol van? *Te vitted el a könyvet?*',
          solution:
            '- ***Te** vitted el a könyvet?* – nem más, hanem éppen te.\n- *Te **vitted el** a könyvet?* – elvitted, nem csak megnézted.\n- *Te vitted el a **könyvet**?* – a könyvet, nem a füzetet.\n\nÍrásban ugyanezt dőlt betűvel, kiemeléssel vagy körülírással jelezzük.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: az írásjel jelentésmegkülönböztető szerepe',
          problem: 'Mi a különbség? a) *Együnk, gyerekek!* b) *Együnk gyerekeket!*',
          solution:
            'A vessző és a ragozás miatt az a) megszólítás (a gyerekeket hívjuk enni), a b) kannibál felszólítás lenne. Az írásjel és a szóalak együtt dönti el az értelmet. Ugyanez szóban hanglejtéssel és szünettel történik: *Nem, kérem.* és *Nem kérem.* más-más hangzású.',
        },
        { kind: 'heading', text: 'Szövegalkotás a négy közlésformában' },
        {
          kind: 'text',
          text: '**Tájékoztató**: tényeket közöl (hír, beszámoló). **Érvelő**: álláspontot bizonyít érvekkel (hozzászólás, esszé). **Meggyőző**: a címzett véleményét vagy cselekvését akarja befolyásolni (felhívás, reklám, beszéd). **Vitázó**: más álláspontra reagál, ellenérvekkel és cáfolattal (vitaindító, válaszcikk). Középszinten egyszerűbb műfajokat (rövid hozzászólás, levél, kiselőadás), emelten összetettebbeket, többek közt **érvelő esszét** kell tudni írni.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a **szövegek jellemzőinek rendszerezése** is feladat: egy szöveget több szempontból kell jellemezned (téma, cél, címzett, szerkezet, nyelvi eszközök, műfaj), és meg kell indokolnod a megállapításaidat a szövegből vett példákkal.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli nyelvi tétel (15 pont a szóbeli vizsgán): egy szöveg vagy dokumentum adott szempontú elemzése, például a címzett, a beszédhelyzet vagy a szóbeli és írott jegyek szerint.',
            'Szövegértési-nyelvi feladatsor: a szöveg kommunikációs jellemzői (címzett, cél, műfaj), a szövegbeli utalások és hivatkozások szerepe.',
            'Szövegalkotás: a megadott címzettnek és célnak megfelelő hang (például levél a tanárnak és üzenet a barátnak).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a szóbeliséget és az írásbeliséget "jobb–rosszabb" párként írod le. A kettő más-más helyzetre alkalmas, nem értékrend. Másik hiba: a szóbeli jegyeket (töredékes mondat, ismétlés) hibának nevezni, pedig a helyzetben természetesek.',
        },
        {
          kind: 'tip',
          text: 'Egy szöveg jellemzésének kerete: **ki–kinek–miről–miért–hogyan** (beszélő, címzett, téma, cél, nyelvi megformálás). Ha mindegyikre mondasz egy mondatot példával, kész a vázlatod.',
        },
        {
          kind: 'example',
          title: 'Mintafeladat: a címzett és a szöveg',
          problem:
            'Írj két rövid szöveget ugyanarról az eseményről (elmarad az iskolai kirándulás): egyet az osztálytársaidnak, egyet a szülőknek. Miben különbözik a kettő?',
          solution:
            '*Osztálytársaknak (üzenet):* „Sziasztok! Hír van: a pénteki kirándulás elmarad, mert esőt mondanak. Pótolják, amint lehet.” – közvetlen megszólítás, rövid mondatok, beszélt nyelvi hang.\n\n*Szülőknek (hivatalos tájékoztató):* „Tisztelt Szülők! Tájékoztatjuk Önöket, hogy a pénteki osztálykirándulást időjárási okok miatt elhalasztjuk. A pótlás időpontjáról hamarosan értesítjük Önöket.” – tegezés helyett magázás, hivatalos fordulatok, teljes mondatok.\n\nA tartalom ugyanaz; a **címzett** miatt változik a hangnem, a szókincs és a mondatok szerkesztése.',
        },
      ],
      topicMatch: ['szövegösszefüggés'],
      quiz: [
        {
          question: 'Melyik NEM szövegfonetikai eszköz?',
          options: ['hangsúly', 'hanglejtés', 'szünet', 'bekezdés'],
          answer: 3,
          explanation:
            'A bekezdés írásban tagol. A szövegfonetikai eszközök: hangsúly, hanglejtés, hangerő, szünet, beszédtempó.',
        },
        {
          question: 'Melyik jellemző az írott szövegre a szóbelivel szemben?',
          options: [
            'Mindig a közös helyzetre támaszkodik.',
            'Önmagában is érthetőnek kell lennie, és javítható.',
            'A címzett azonnal kérdezhet.',
            'Mindig spontán.',
          ],
          answer: 1,
          explanation:
            'Az írott szöveg tervezett és szerkeszthető, olvasója pedig nincs ott a megszületésénél, ezért a szövegnek magának kell érthetőnek lennie.',
        },
        {
          question: 'Mit jelent a beszédhelyzet fogalma?',
          options: [
            'A beszélő hangszíne.',
            'A közlés körülményei: ki, kinek, mikor, hol, miről és milyen céllal beszél.',
            'A mondatok száma a szövegben.',
            'A szöveg helyesírása.',
          ],
          answer: 1,
          explanation:
            'A beszédhelyzet a közlés valamennyi körülménye. Ettől függ a szóhasználat, a hangnem és a részletesség.',
        },
        {
          question:
            'Melyik közlésforma célja, hogy a címzett véleményét vagy cselekvését befolyásolja?',
          options: ['tájékoztató', 'meggyőző', 'leíró', 'elbeszélő'],
          answer: 1,
          explanation:
            'A meggyőző szöveg (felhívás, reklám, beszéd) a címzett meggyőzésére készül; a tájékoztató tényeket közöl, a leíró és az elbeszélő közlésmód.',
        },
        {
          question: 'Mit kell emelt szinten a szövegekkel kapcsolatban különösen tudnod?',
          options: [
            'Csak a szóbeli szövegeket kell ismerni.',
            'A szövegek jellemzőinek rendszerezését és az érvelő esszék írását.',
            'Csak a hivatalos leveleket.',
            'Semmi többet, mint középszinten.',
          ],
          answer: 1,
          explanation:
            'A követelmény emelt szinten a szövegek jellemzőinek rendszerezése és az összetettebb műfajú, például érvelő esszé írása.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szöveg', url: wiki('Szöveg nyelvészet') },
        { label: 'Wikipédia: Beszédhelyzet', url: wiki('Beszédhelyzet') },
        { label: 'Wikipédia: Szóbeliség és írásbeliség', url: wiki('Szóbeliség és írásbeliség') },
      ],
    },
    {
      id: 'szoveg-szerkezete-kohezio-tetelmondat',
      subject: 'magyar',
      unitId: 'szoveg-retorika',
      title: 'A szöveg szerkezete: kohézió, koherencia, bekezdés',
      level: 'kozep',
      requirement: {
        kozep:
          'A szöveg és a mondat viszonya; a különféle típusú és műfajú szövegek felépítése, egységei; szövegméret, megjelenés; a szövegkohézió, a témaháló és a cím; bekezdés, tömb, szakasz.',
        emelt:
          'A szövegértelem összetevői (pragmatikai, jelentésbeli, nyelvtani szintek); elsődleges és másodlagos, mögöttes jelentés; szövegkohézió: téma-réma, topik, fókusz, kulcsszó; a szövegmondat; nyelvtani tényezők a jelentés megteremtésében: kötőszó, névmás, névelő, határozószó, előre- és visszautalás, egyeztetés.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szöveg a mondatnál nagyobb egység: a mondatok **kapcsolódásából** és a közös témából lesz szöveg.',
            'A **kohézió** a szöveg nyelvi összetartása (névmás, kötőszó, ismétlés, szinonima, névelő). A **koherencia** a tartalmi, gondolati összefüggés. A kettő együtt adja a jó szöveget.',
            'A **témaháló** a szöveg témáit és azok kapcsolatait mutatja; a **cím** a témát jelzi vagy felkelti a figyelmet; a **kulcsszavak** visszatérnek a szövegben.',
            'A **bekezdés** egy gondolati egység. A **tételmondat** a bekezdés fő gondolatát fogalmazza meg, a többi mondat kifejti, példával igazolja vagy lezárja.',
            'Hosszabb szövegben a bekezdéseknél nagyobb egységek is vannak: **tömb** és **szakasz** (fejezet, alfejezet); a tagolás látványos is lehet (cím, kiemelés, felsorolás).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kohézió',
              text: 'A szöveg nyelvi eszközökkel megteremtett összetartása: ismétlés, névmás, kötőszó, szinonima, névelő, utalás.',
            },
            {
              term: 'koherencia',
              text: 'A szöveg tartalmi-logikai összefüggése: a mondatok értelmesen kapcsolódnak, a gondolatmenet követhető.',
            },
            {
              term: 'témaháló',
              text: 'A szöveg fő témái és alárendelt témái, valamint kapcsolataik; a kulcsszavak ezt jelzik.',
            },
            {
              term: 'tételmondat',
              text: 'A bekezdés fő gondolatát megfogalmazó mondat, amelyet a bekezdés többi része kifejt vagy igazol.',
            },
            {
              term: 'bekezdés',
              text: 'A szöveg gondolati, tartalmi egysége, amelyet az írásban új sor és behúzás vagy üres sor jelöl.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A mondat és a szöveg viszonya' },
        {
          kind: 'text',
          text: 'A mondat a nyelvtan egysége, a szöveg a közlésé. Egy mondat is lehet szöveg (*Vigyázat, mély a víz!*), de a szokásos szöveg **mondatok** sorából áll, és a mondatok között a nyelv **kapcsolóelemeket** használ. Egy mondat jelentését gyakran csak a szövegkörnyezet adja meg: *Ő ezt tegnap megkapta.* – ki, mit, mikor? Ezt a megelőző mondatok mondják meg.',
        },
        { kind: 'heading', text: 'Kohézió: a szöveg nyelvi összetartása' },
        {
          kind: 'text',
          text: 'A kohézió eszközei:\n\n- **ismétlés** (kulcsszó): *A könyv… A könyv…*\n- **szinonima, rokon értelmű szó**: *a könyv… a kötet… az olvasmány*\n- **névmás**: *Anna… ő… őt*\n- **kötőszó**: *mert, ezért, de, tehát, ugyanakkor*\n- **névelő**: a határozott névelő az ismertre mutat (*a bolt*), a határozatlan az újat vezeti be (*egy bolt*)\n- **időviszonyok, hiányos mondat**',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: kohéziós eszközök',
          problem:
            'Keresd meg a kohéziós eszközöket! *Anna elment a boltba. Ő tejet vett, mert reggel kávét akart inni. Ez fontos volt neki.*',
          solution:
            '- **ő**: személyes névmás, visszautal az *Anna* szóra.\n- **mert**: kötőszó, az ok-okozati viszonyt jelzi.\n- **ez**: mutató névmás, az előző mondat tartalmára utal vissza.\n- **neki**: személyes névmás ragos alakja, szintén *Annára* utal.\n\nA mondatok nyelvileg összetartoznak (**kohézió**), és tartalmilag is értelmesek (**koherencia**).',
        },
        { kind: 'heading', text: 'Koherencia: a tartalmi összefüggés' },
        {
          kind: 'text',
          text: 'A szöveg lehet kohéziós eszközökkel összekötve, de **koherencia** nélkül nem értelmes: *Anna elment a boltba. Ő ezért a zongorán játszik. Ez pedig piros.* Itt vannak ugyan névmások és kötőszó, de a mondatok tartalmilag nem kapcsolódnak. Fordítva is előfordul: a koherens szöveg kapcsolóelemek nélkül is követhető lehet (*Nem megyek. Fáj a fejem.* – az ok-okozati viszony kimondatlanul is érthető).',
        },
        { kind: 'heading', text: 'Témaháló, kulcsszó, cím' },
        {
          kind: 'text',
          text: 'A **témaháló** a szöveg egyes részeinek témáit mutatja: van egy **főtéma**, és ahhoz kapcsolódó **altémák**. A főtémát a **kulcsszavak** (visszatérő, lényeges szavak) jelzik. A **cím** a szöveg témáját összefoglalja vagy sejteti; lehet tárgyszerű (*A telefonhasználat hatása a tanulásra*) vagy figyelemfelkeltő (*Zsebben a világ?*). A szövegértési feladatokban gyakran kell a cím és a szöveg viszonyát megítélned.',
        },
        { kind: 'heading', text: 'Bekezdés, tömb, szakasz és a tételmondat' },
        {
          kind: 'text',
          text: 'A **bekezdés** egy gondolati egységet fog össze, és a gondolatmenetet is átláthatóvá teszi. Jó bekezdésben van egy **tételmondat**: ez a fő gondolat, a többi mondat kifejti, igazolja, példával szemlélteti vagy lezárja. A tételmondat helye lehet a bekezdés **eleje** (a gondolatmenet az általánostól a részlet felé halad), **vége** (a részletekből jut el a megállapításig), ritkábban a közepe. A **szakasz** és a **tömb** a bekezdéseknél nagyobb vagy a szövegben látványosan elkülönülő egységet jelent: például fejezet, fejléces rész, keretes szövegblokk.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: keresd meg a tételmondatot',
          problem:
            'Melyik a tételmondat, és mi a bekezdés felépítése? *A telefonhasználat egyre több időt vesz el a tanulástól. Sokan óránként tucatszor ránéznek a kijelzőre. Minden megszakítás után percekig tart, amíg újra elmélyülnek a feladatban. A vizsgára készülők közül ezért sokan a telefont másik szobában hagyják.*',
          solution:
            '**Tételmondat:** az első mondat (*A telefonhasználat egyre több időt vesz el a tanulástól.*), mert a bekezdés összes többi mondata ezt fejti ki.\n\n**Felépítés (az elején álló tételmondat):**\n- 2. mondat: tényszerű példa (gyakoriság).\n- 3. mondat: következmény (az elmélyülés megszakad).\n- 4. mondat: gyakorlati tanulság; a *ezért* kötőszó jelzi a következtetést.\n\nA tételmondat helyét a szerző döntése adja: ha a bekezdés ugyanezt a mondatot a végére teszi, a gondolatmenet a példáktól halad az általános megállapítás felé.',
        },
        {
          kind: 'heading',
          text: 'Emelt szint: szövegértelem, téma-réma, szövegmondat',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **szövegértelem** összetevői: a **pragmatikai** (a beszédhelyzetre, a közlő szándékára vonatkozó), a **jelentésbeli** (a szavak és mondatok jelentése) és a **nyelvtani** szint (alaktan, mondattan). A közlés **elsődleges** jelentése a szó szerinti, a **másodlagos, mögöttes** jelentés a kimondatlan: *Milyen hideg van itt!* – elsődleges: hőmérséklet, mögöttes: csukd be az ablakot.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A mondat **téma–réma** tagolása: a **téma** az, amiről a mondat szól (amit ismertnek veszünk), a **réma** az, amit róla állítunk (az új információ). *Anna tegnap kapta meg a levelet.* Téma: *Anna*, réma: *tegnap kapta meg a levelet*. A **topik** és a **fókusz** a mondat szórendi tagolásának helye: a topik a mondat tárgya, amiről beszélünk, a fókusz a kiemelt, hangsúlyos eleme (*ANNA kapta meg a levelet*, nem Péter). A **szövegmondat** az a mondat, amelyet a szövegben, adott helyzetben értelmezünk, és nem csupán nyelvtani szerkezetként.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A jelentés megteremtésében részt vevő nyelvtani tényezők: **kötőszó** (logikai viszony), **névmás** (visszautalás, előreutalás), **névelő** (ismert/új), **határozószó** (*itt, akkor, így*), **egyeztetés** (az alany és az állítmány számban, személyben egyezik, ez is kapcsol). Az **előreutalás** a később jövőre mutat (*Ezt kell tudnod: …*), a **visszautalás** a már elhangzottra.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegértési feladat: a cím és a szöveg viszonya, a bekezdések fő gondolata, a szöveg szerkezete (vázlat, kivonat, fürtábra készítése a szövegből).',
            'Nyelvi feladat: kohéziós eszközök felismerése (névmás, kötőszó, ismétlés), azok szerepe, visszautalás és előreutalás.',
            'Szóbeli nyelvi tétel: egy szövegrészlet szerkezetének és összetartó eszközeinek bemutatása; emelten a téma–réma és a szövegértelem szintjei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd a kohéziót és a koherenciát! A **kohézió** a szó- és mondatszintű, nyelvi kapcsolat (névmás, kötőszó); a **koherencia** a tartalmi, gondolati kapcsolat. Másik gyakori hiba: a tételmondatot mindig az első mondatnak tekinteni. Ellenőrizd, melyik mondatot fejti ki a bekezdés többi része.',
        },
        {
          kind: 'tip',
          text: 'Tételmondat keresése: kérdezd meg magadtól, **mit mondana el a bekezdés egyetlen mondatban**. Az a mondat, amely ezt a legpontosabban megfogalmazza, a tételmondat. Ha egyik mondat sem, akkor a bekezdésnek nincs kimondott tételmondata, és te foglalod össze.',
        },
        {
          kind: 'example',
          title: 'Mintafeladat: szöveg visszaépítése vázlattá',
          problem:
            'Készíts háromsoros vázlatot erről a gondolatmenetről: *Az olvasás fejleszti a szókincset. Aki sokat olvas, több szót ismer meg. A szövegértése is javul, mert gyakorolja a gondolatmenet követését. Végül a kreativitása is nő, hiszen a képzeletével dolgozik.*',
          solution:
            '**Fő gondolat:** Az olvasás sokféleképpen fejleszti az embert.\n1. szókincs bővülése\n2. szövegértés javulása (a gondolatmenet követésének gyakorlása)\n3. kreativitás növekedése (a képzelet munkája)\n\nA vázlat a kulcsszavakat és az ok–következmény kapcsolatokat őrzi meg, a példákat elhagyja.',
        },
      ],
      topicMatch: ['szövegszerkezet'],
      quiz: [
        {
          question: 'Melyik a kohézió példája?',
          options: [
            'A szöveg gondolatmenete logikus.',
            'A névmás visszautal az előző mondat alanyára.',
            'A szöveg lezárt.',
            'A cím felkelti az érdeklődést.',
          ],
          answer: 1,
          explanation:
            'A kohézió a nyelvi eszközökkel (névmás, kötőszó, ismétlés) megteremtett összetartás. A logikus gondolatmenet a koherencia.',
        },
        {
          question: 'Mit nevezünk tételmondatnak?',
          options: [
            'A bekezdés első mondatát mindig.',
            'A bekezdés fő gondolatát megfogalmazó mondatot.',
            'A szöveg címét.',
            'A bekezdés utolsó, kérdő mondatát.',
          ],
          answer: 1,
          explanation:
            'A tételmondat a fő gondolatot mondja ki. Gyakran az elején van, de lehet a végén is.',
        },
        {
          question: 'Mi jellemzi a koherens szöveget?',
          options: [
            'Sok névmást tartalmaz.',
            'Tartalmilag és logikailag összefüggő, érthető.',
            'Rövid mondatokból áll.',
            'Nincs benne kötőszó.',
          ],
          answer: 1,
          explanation:
            'A koherencia a tartalmi és gondolati összefüggés. A kapcsolóelemek segítik, de önmagukban nem teremtik meg.',
        },
        {
          question: '*Anna elment a boltba. Ő tejet vett.* Mi az *ő* szerepe?',
          options: [
            'Kötőszó.',
            'Névmás, amely visszautal az *Anna* szóra.',
            'Határozószó.',
            'Névelő.',
          ],
          answer: 1,
          explanation:
            'Az *ő* személyes névmás, visszautal az előző mondat alanyára, így kohéziós eszköz.',
        },
        {
          question: 'Mi a téma és a réma emelt szinten, a mondat tagolásában?',
          options: [
            'A téma az új információ, a réma az ismert.',
            'A téma az, amiről a mondat szól, a réma az, amit róla állít.',
            'Mindkettő a cím része.',
            'A téma az ige, a réma az alany.',
          ],
          answer: 1,
          explanation: 'A téma a kiindulópont, az ismert, a réma a róla közölt új információ.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szövegkohézió', url: wiki('Kohézió nyelvészet szöveg') },
        { label: 'Wikipédia: Bekezdés', url: wiki('Bekezdés') },
        { label: 'Wikipédia: Téma és réma', url: wiki('Téma és réma') },
      ],
    },
    {
      id: 'szovegertelmezes-intertextualitas-szovegtipusok',
      subject: 'magyar',
      unitId: 'szoveg-retorika',
      title: 'Szövegértelmezés, intertextualitás, szövegtípusok',
      level: 'kozep',
      requirement: {
        kozep:
          'A szövegértés, szövegfeldolgozás technikája, olvasási típusok és stratégiák; a téma értelmezése mindennapi, ismeretterjesztő és szépirodalmi szövegekben; a szövegfonetikai eszközök és az írásjelek szerepe az értelmezésben; szövegköziség, vendégszöveg; szövegtípusok megjelenés, műfajok és nyelvhasználati színterek szerint; digitális és hagyományos, folyamatos és nem folyamatos szövegek; beszélt nyelvi társalgási és írott monologikus szövegek; mindennapi, közéleti és hivatalos, tudományos, publicisztikai, szépirodalmi szövegek; önéletrajz, motivációs levél, hivatalos levelek (panaszos levél, kérvény), rövid alkalmi beszéd; az esszé műfaji jellemzői.',
        emelt:
          'A téma értelmezése tudományos szövegekben; a szöveg és a nem szövegszerű elemek (kép, ábra, táblázat, tipográfia) kapcsolata; a szövegek transzformációi (mém); monologikus, dialogikus, polilogikus; beszélt, írott, elektronikus; spontán, tervezett szövegek; közlésmódok: elbeszélő, leíró, érvelő; ismeretterjesztő, szépirodalmi és egyszerűbb tudományos szövegek elemzése.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szövegértés **technikái**: átfutó és kereső olvasás (tájékozódás), alapos, értő olvasás (részletek), kritikai olvasás (megítélés). A feldolgozás eszközei: aláhúzás, jegyzet, **vázlat, kivonat, fürtábra**.',
            'Az **intertextualitás** (szövegköziség) azt jelenti, hogy egy szöveg más szövegekre utal vagy azokat beépíti: **idézet, utalás, átirat, paródia**. A beépített szöveg a **vendégszöveg**.',
            'Szövegtípusok **nyelvhasználati színterek** szerint: mindennapi, közéleti és hivatalos, tudományos, publicisztikai, szépirodalmi. **Folyamatos** (összefüggő szöveg) és **nem folyamatos** (táblázat, diagram, menetrend) szöveget is értened kell.',
            'Gyakorlati szövegek: **önéletrajz, motivációs levél, kérvény, panaszos levél, rövid alkalmi beszéd**. Az **esszé** személyes hangú, szabadabb szerkezetű gondolatmenet.',
            'Emelten: monologikus, dialogikus, polilogikus; beszélt, írott, elektronikus; spontán, tervezett szöveg; közlésmódok: elbeszélő, leíró, érvelő; a mém mint szövegtranszformáció.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'intertextualitás',
              text: 'Szövegköziség: a szövegek közötti kapcsolat, amikor egy szöveg másikra utal, idéz, átír vagy átformál.',
            },
            {
              term: 'vendégszöveg',
              text: 'A szövegbe beépített, más szövegből származó rész (idézet, utalás, átvett fordulat).',
            },
            {
              term: 'folyamatos szöveg',
              text: 'Mondatokból épülő, összefüggő szöveg (cikk, elbeszélés).',
            },
            {
              term: 'nem folyamatos szöveg',
              text: 'Nem hagyományos mondatsor: táblázat, diagram, térkép, menetrend, űrlap, infografika.',
            },
            {
              term: 'esszé',
              text: 'Egy kérdést személyes hangon, szabadabb szerkezetben körüljáró, gondolatgazdag szöveg.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szövegértés: olvasási típusok és stratégiák' },
        {
          kind: 'text',
          text: 'Más-más módon olvasol, ha **tájékozódsz** (átfutó olvasás: cím, alcímek, kiemelések), ha **adatot keresel** (kereső olvasás: kulcsszóra figyelsz), vagy ha **értened kell** (alapos, értő olvasás: minden bekezdés fő gondolata). A **kritikai olvasás** már a megítélésre irányul: igaz-e, jól érvel-e a szerző, kinek áll érdekében. A vizsgán a 800–1000 szavas szöveget célszerű először egyszer átfutni, majd a feladatok után kereső és értő olvasással dolgozni.',
        },
        {
          kind: 'text',
          text: 'A feldolgozás technikái: **aláhúzás** (kulcsszavak), **margójegyzet**, **vázlat** (a fő gondolatok sorrendben), **kivonat** (a lényeg összefüggő, rövid szövegként), **fürtábra** (a központi téma és a hozzá tartozó altémák ábrája), **adott szempontú tömörítés**.',
        },
        {
          kind: 'text',
          text: 'A téma értelmezése szövegtípusonként más. **Mindennapi** szövegben (üzenet, hirdetés) a helyzetből is kiolvasod. **Ismeretterjesztő** szövegben a szerző állításait és a példákat követed. **Szépirodalmi** szövegben a téma gyakran nem mondatban jelenik meg: motívumokból, képekből következtetsz rá. Az írásjelek és a szövegfonetikai eszközök (például a kérdőjel, az idézőjel, a gondolatjel, olvasáskor a hangsúly) is az értelmezés részei.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: szövegértési kérdéstípusok',
          problem:
            'Egy szövegben ez áll: „A közösségi média nem rossz vagy jó, hanem eszköz.” Milyen kérdést kaphatsz, és hogyan válaszolsz?',
          solution:
            '- **Azonosítás:** „Mi a szerző álláspontja a közösségi médiáról?” – Válasz: szerinte nem eleve rossz vagy jó, hanem eszköz, használata számít.\n- **Összefüggés:** „Miért írja a szerző azt, hogy eszköz?” – Mert a hatását a használó dönti el, ez a gondolat a szöveg többi részében is visszatér.\n- **Megítélés:** „Egyetértesz-e?” – Állásfoglalás érvvel, például: igen, mert ugyanaz az alkalmazás tanulásra és időpazarlásra is használható.\n\nA válaszban mindig a szövegre hivatkozz, ne csak a saját véleményedre.',
        },
        { kind: 'heading', text: 'Intertextualitás és vendégszöveg' },
        {
          kind: 'text',
          text: 'A szövegek nem légüres térben születnek: egymásra reagálnak. Az intertextualitás formái: **idézet** (szó szerinti átvétel, jelölve), **utalás** (a másik szöveg felidézése, név vagy fordulat), **átirat, parafrázis** (újrafogalmazás), **paródia** (komikus, gúnyos utánzás). Irodalmi példa: Karinthy Frigyes *Így írtok ti* című kötete a kortárs írók stílusát parodizálja. Nem irodalmi példa: egy hírcím, amely a *Szózat* kezdősorára (*Hazádnak rendületlenül…*) utal, hogy a hűséget hangsúlyozza. A beépített rész a **vendégszöveg**; az olvasó csak akkor érti a célzást, ha ismeri az eredetit.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a **szövegek transzformációi** is téma: egy szöveget átalakítanak más műfajba vagy médiumba. Tipikus mai példa a **mém**: egy ismert kép vagy mondat új szöveggel új jelentést kap, és a közösség tovább alakítja. A mém azért működik, mert a címzett ismeri az eredetit (intertextualitás).',
        },
        { kind: 'heading', text: 'Szövegtípusok' },
        {
          kind: 'compare',
          title: 'Szövegtípusok nyelvhasználati színterek szerint',
          columns: ['Példák', 'Jellemző'],
          rows: [
            {
              label: 'Mindennapi',
              cells: ['üzenet, beszélgetés, levél', 'közvetlen, gyakran spontán, köznyelvi'],
            },
            {
              label: 'Közéleti és hivatalos',
              cells: ['hirdetmény, kérvény, felszólalás', 'udvarias, szabályos szerkezetű, pontos'],
            },
            {
              label: 'Tudományos',
              cells: ['tanulmány, szakkönyv', 'szakszavak, pontosság, bizonyítás'],
            },
            {
              label: 'Publicisztikai',
              cells: ['cikk, kommentár, glossza', 'véleményt fejt ki, hatni akar'],
            },
            {
              label: 'Szépirodalmi',
              cells: ['vers, regény, dráma', 'képszerű, többértelmű, stilizált'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **folyamatos** szöveget (cikk) a **nem folyamatos** szöveggel (táblázat, diagram, térkép) együtt is értened kell. Táblázatból adatot olvasol ki, diagramon trendet látsz, és a kettő a szöveggel együtt ad képet. A **digitális** szövegek (weboldal, e-mail, poszt) hivatkozásokat, képet, kommentet is tartalmaznak, a hagyományos szöveg ehhez képest egyenesebb olvasási útvonalú.',
        },
        {
          kind: 'text',
          text: 'Beszélt nyelvi szövegtípus a **társalgás** (több szereplős, spontán), írott monologikus a **cikk, levél, esszé**. Emelten a szövegek szereplőik szerint is csoportosíthatók: **monologikus** (egy beszélő, például előadás), **dialogikus** (két fél, például interjú), **polilogikus** (több fél, például vita). Csatorna szerint **beszélt, írott, elektronikus**, előkészítettség szerint **spontán** vagy **tervezett**. Közlésmód szerint **elbeszélő, leíró, érvelő**.',
          emelt: true,
        },
        { kind: 'heading', text: 'Gyakorlati szövegek és az esszé' },
        {
          kind: 'text',
          text: 'A továbbtanuláshoz és a munkához szükséges szövegek:\n\n- **önéletrajz** (személyes adatok, tanulmányok, tapasztalatok, készségek, tömör és áttekinthető);\n- **motivációs levél** (miért jelentkezel, miért alkalmas vagy rá, miért épp oda; egyedi és őszinte);\n- **kérvény** és **panaszos levél** (hivatalos: megszólítás, a tárgy, kérés vagy panasz indoklással, udvarias zárás, dátum, aláírás);\n- **rövid alkalmi beszéd** (köszöntő, búcsúbeszéd: megszólítás, személyes hang, tömör és méltó szerkezet).\n\nAz **esszé** jellemzői: személyes hang, egy kérdés vagy téma körüljárása, szabadabb szerkezet, gondolatgazdagság, nem kimerítő, hanem sokoldalú.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: kérvény szerkezete',
          problem: 'Vázold fel a kérvény részeit, ha a tanévzáró kirándulás alól kérsz felmentést!',
          solution:
            '1. **Címzett és tárgy:** *Tisztelt Igazgató Úr! Tárgy: felmentés kérése.*\n2. **A kérés:** *Tisztelettel kérem, hogy a 2025. június 12-i kiránduláson való részvétel alól mentsen fel.*\n3. **Indoklás:** *Ezen a napon középfokú nyelvvizsgát teszek.*\n4. **Udvarias zárás:** *Megértését előre is köszönöm.*\n5. **Dátum, aláírás:** *Budapest, 2025. június 2. – Kovács Anna, 11. B*\n\nA hivatalos szövegben magázás, teljes mondatok és semleges hangnem szükséges.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Középszint, I. feladatlap (90 perc): a **szövegértési-nyelvi feladatsor** egy 800–1000 szavas ismeretterjesztő vagy publicisztikai szöveghez kapcsolódik (40 pont; mellette az irodalmi feladatlap 20 pont, a kettő együtt 90 perc). A kérdések a szöveg tematikus, szerkezeti, nyelvi, kommunikációs jellemzőire irányulnak.',
            'Gyakori feladatok: tény vagy szerzői álláspont azonosítása, érvek és álláspontok megkülönböztetése, a cím és a szöveg kapcsolata, utalások szerepe, szerkezet (vázlat, kivonat, fürtábra, adott szempontú tömörítés).',
            'Szóbeli nyelvi tétel (középszinten 15 perc, emelten 20 perc): a szövegrészlet, űrlap, újságoldal, ábra vagy internetes oldal adott szempontú elemzése.',
          ],
        },
        {
          kind: 'warning',
          text: 'A gyakori hiba az, hogy a szerzői álláspontot a saját véleményeddel keverd össze. A kérdés eldönti, mit várnak: "mi a szerző véleménye" a szövegből kiolvasható, a "mi a te véleményed" pedig indokolt saját állásfoglalás. Másik hiba: a nem folyamatos szöveg (táblázat, diagram) adatait pontatlanul olvasod le; mindig nézd a tengelyfeliratot és az egységeket.',
        },
        {
          kind: 'tip',
          text: 'A szövegértési feladatsoron a **kérdésekkel kezdj**: ha tudod, mit keresel, a szöveget célzottan olvasod. A kérdés igéi (*sorold fel, indokold, azonosítsd, értékeld*) megmondják a válasz formáját. Mindig a szöveg szavaival támaszd alá a válaszod.',
        },
        {
          kind: 'example',
          title: 'Mintafeladat: vendégszöveg felismerése',
          problem:
            'Egy sportcikk címe: *Hazádnak rendületlenül!* Mi a vendégszöveg, és mi a hatása?',
          solution:
            'A cím a *Szózat* kezdősorára (*Hazádnak rendületlenűl / Légy híve, oh magyar*) utal. **Vendégszöveg:** a Vörösmarty-vers sora. **Hatás:** a sportoló kiállását a hazaszeretet ünnepélyes hangján mutatja be, ezért pátoszos vagy ironikus lehet. A felismerés feltétele az olvasó előismerete. A vizsgán mindig azt kell megnevezned, **mit** idéz fel a szöveg és **mi a funkciója**.',
        },
      ],
      topicMatch: ['=szövegértés', 'intertextualitás', 'szövegtípusok'],
      quiz: [
        {
          question: 'Melyik szöveg folyamatos?',
          options: ['táblázat', 'diagram', 'novella', 'menetrend'],
          answer: 2,
          explanation:
            'A novella folyamatos, mondatokból építkező szöveg. A táblázat, a diagram és a menetrend nem folyamatos.',
        },
        {
          question: 'Mi az intertextualitás?',
          options: [
            'A szöveg hosszúsága.',
            'A szövegek közötti kapcsolat, utalás vagy idézés.',
            'A szöveg helyesírása.',
            'A szóbeli szöveg hangzása.',
          ],
          answer: 1,
          explanation:
            'Az intertextualitás vagy szövegköziség az, hogy egy szöveg más szövegekre utal, idéz, átír vagy parodizál.',
        },
        {
          question: 'Mi a fürtábra?',
          options: [
            'Egy hivatalos levél.',
            'A központi téma és az altémák ábrája, a szövegfeldolgozás eszköze.',
            'Írásjel.',
            'Egyfajta költői kép.',
          ],
          answer: 1,
          explanation:
            'A fürtábrában a központi téma köré rendezzük az altémákat és részleteket; a szövegértési feladatsor is kérheti.',
        },
        {
          question:
            'Melyik hivatalos szövegre jellemző az udvarias zárás, a tárgy megjelölése és az aláírás?',
          options: ['sms', 'kérvény', 'vers', 'blogbejegyzés'],
          answer: 1,
          explanation:
            'A kérvény hivatalos levél: címzett, tárgy, kérés, indoklás, udvarias zárás, dátum és aláírás tartozik hozzá.',
        },
        {
          question: 'Melyik beszélő-szerkezet jellemző a vitára emelt szinten?',
          options: ['monologikus', 'dialogikus', 'polilogikus', 'egyik sem'],
          answer: 2,
          explanation:
            'A polilogikus szövegben több fél szólal meg (vita, csoportos beszélgetés). A dialogikus két félé, a monologikus egyé.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Intertextualitás', url: wiki('Intertextualitás') },
        { label: 'Wikipédia: Esszé', url: wiki('Esszé') },
        { label: 'Wikipédia: Önéletrajz', url: wiki('Önéletrajz') },
      ],
    },
    {
      id: 'retorika-nyilvanos-beszed-felepites',
      subject: 'magyar',
      unitId: 'szoveg-retorika',
      title: 'A retorika és a nyilvános beszéd felépítése',
      level: 'kozep',
      requirement: {
        kozep:
          'A retorika mint a meggyőzés művelete a gondolatközlésben; a beszéd felépítése, a beszéd megszerkesztésének menete az anyaggyűjtéstől a megszólalásig; a tanulók életével összefüggő nyilvános megszólalások (kiselőadás, vizsgafelelet); az állásinterjú; a szónoki beszéd fajtái (tanácsadó, törvényszéki, alkalmi) és jellemzői; a hatásos előadásmód eszközei.',
        emelt:
          'A retorika jelentősége és alkalmazása, a retorika mint a szónoklás tudománya; néhány történeti értékű és jelenkori szónoki beszéd retorikai eszközei és esztétikai hatása; a szójáték és a retorika; a szónok tulajdonságai, feladatai; az előadás szemléltetésének módjai (bemutatás, prezentáció).',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **retorika** a szónoklás, a hatásos beszéd és **meggyőzés** tudománya és művészete. Célja, hogy a hallgatót tájékoztassa, meggyőzze, megindítsa.',
            'A beszéd megszerkesztésének menete (a klasszikus retorika szerint): **anyaggyűjtés** (inventio), **elrendezés** (dispositio), **kidolgozás, stílus** (elocutio), **megtanulás** (memoria), **előadás** (actio).',
            'A beszéd részei: **bevezetés**, **tárgyalás** (tétel, érvelés), **befejezés**. A bevezetés felkelti a figyelmet, a befejezés összegez és cselekvésre buzdít.',
            'A szónoki beszéd **fajtái**: **tanácsadó** (jövőről dönt), **törvényszéki** (múltbeli tettet vizsgál), **alkalmi** (jelen eseményhez: ünnep, búcsú).',
            'A mindennapi nyilvános megszólalások: **kiselőadás, vizsgafelelet, állásinterjú**. Ezekben is érvényes a bevezetés–tárgyalás–befejezés szerkezet.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'retorika',
              text: 'A hatásos beszéd, a szónoklás és a meggyőzés tudománya, művészete.',
            },
            {
              term: 'tanácsadó beszéd',
              text: 'Közösségi döntést készít elő: javasol vagy lebeszél (például országgyűlési felszólalás). Időpontja: a jövő.',
            },
            {
              term: 'törvényszéki beszéd',
              text: 'Egy tett jogosságát, igazságosságát vizsgálja: vád és védelem. Időpontja: a múlt.',
            },
            {
              term: 'alkalmi beszéd',
              text: 'Egy eseményhez kötődik: köszöntő, ünnepi, gyászbeszéd. Dicsér vagy emlékezik. Időpontja: a jelen.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A retorika mint a meggyőzés művelete' },
        {
          kind: 'text',
          text: 'A retorika az ókori Görögországban, a népgyűléseken és a bíróságokon született, ott kellett a polgárnak szóban meggyőznie a többieket. Rómában **Cicero** lett a legismertebb szónok és elméletíró. A retorika ma is él: a tárgyalásban, a tanári felelet és a prezentáció során, a reklámban, a politikában. Tartalma a gondolatok megtalálása, rendezése és hatásos előadása.',
        },
        { kind: 'heading', text: 'A beszéd megszerkesztésének menete' },
        {
          kind: 'compare',
          title: 'Az anyaggyűjtéstől a megszólalásig',
          columns: ['Mi történik?', 'Gyakorlatban'],
          rows: [
            {
              label: 'Anyaggyűjtés (inventio)',
              cells: [
                'téma és cél tisztázása, ismeretek, érvek, példák gyűjtése',
                'Ki a hallgató? Mit akarok elérni?',
              ],
            },
            {
              label: 'Elrendezés (dispositio)',
              cells: ['a beszéd részeinek sorrendje, vázlat', 'bevezetés, tárgyalás, befejezés'],
            },
            {
              label: 'Kidolgozás (elocutio)',
              cells: [
                'szavak, mondatok, stíluseszközök kiválasztása',
                'világos, hatásos megfogalmazás',
              ],
            },
            {
              label: 'Megtanulás (memoria)',
              cells: ['vázlat vagy szöveg elsajátítása', 'kulcsszavak, nem szó szerinti bemagolás'],
            },
            {
              label: 'Előadás (actio)',
              cells: ['hang, tekintet, testtartás, gesztus', 'szemkontaktus, szünetek, tempó'],
            },
          ],
        },
        { kind: 'heading', text: 'A beszéd szerkezete' },
        {
          kind: 'text',
          text: 'A klasszikus beszéd részei: **bevezetés** (exordium: a figyelem és a jóindulat megnyerése, a téma megjelölése), **előadás, tárgyalás** (a tényállás ismertetése, a **tétel**, az **érvelés**, benne a bizonyítás és a cáfolat), **befejezés** (peroratio: összegzés, felhívás, az érzelmekre hatás). Az érvelő rész a leghosszabb; a beszéd akkor jó, ha a hallgató követni tudja, hol tart a gondolatmenet.',
        },
        { kind: 'heading', text: 'A szónoki beszéd fajtái' },
        {
          kind: 'text',
          text: 'A hagyományos felosztás Arisztotelész óta háromféle. A **tanácsadó** beszéd a jövőt érinti, és azt mérlegeli, mi a hasznos vagy káros (*Építsünk-e új sportcsarnokot az iskolának?*). A **törvényszéki** beszéd a múltra irányul, és azt vizsgálja, mi igazságos vagy igazságtalan (védőbeszéd, vádbeszéd). Az **alkalmi** beszéd a jelenhez kötődik, dicsér vagy emlékezik (ballagási beszéd, gyászbeszéd).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: határozd meg a beszédfajtát',
          problem:
            'Mely beszédfajta? a) A tanuló védi magát a fegyelmi tárgyaláson. b) Az osztályfőnök a ballagáson elbúcsúztatja a végzősöket. c) A diákönkormányzat tagja azt javasolja, hogy vezessék be a tanulószobát.',
          solution:
            'a) **törvényszéki** (védőbeszéd): egy múltbeli tett igazságosságáról szól.\n\nb) **alkalmi** (búcsúbeszéd): egy eseményhez kötődik, a jelenre irányul.\n\nc) **tanácsadó**: a jövőbeli döntésről szól, a hasznosság az érv.',
        },
        { kind: 'heading', text: 'Nyilvános megszólalások a mindennapokban' },
        {
          kind: 'text',
          text: 'A **kiselőadás** felépítése: figyelemfelkeltő bevezetés (kérdés, példa), a téma megjelölése, 2–4 fő pont, rövid összegzés, kérdések. A **vizsgafelelet** (szóbeli érettségi tétel) hasonló: bevezetés a tételcímből, logikus kifejtés, példák, zárás saját megállapítással. Az **állásinterjún** a szerkezet: bemutatkozás, motiváció, tapasztalat, kérdések; hasznos a felkészülés a céggel kapcsolatban, a pontos, nem túl hosszú válaszok és a tisztelettudó, magabiztos viselkedés.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: kiselőadás vázlata',
          problem: 'Készíts 5 perces kiselőadás-vázlatot: „Miért érdemes olvasni?”',
          solution:
            '**Bevezetés:** kérdés a hallgatóknak (*Mikor olvastál utoljára könyvet?*), a téma kimondása.\n\n**Tárgyalás:**\n1. szókincs és szövegértés fejlődése;\n2. kikapcsolódás, stresszoldás;\n3. más nézőpontok megismerése (empátia).\n\n**Befejezés:** összefoglalás egy mondatban, felhívás (*Vegyetek ki egy könyvet a könyvtárból még ezen a héten!*).\n\nEgy-egy ponthoz tartozzon egy konkrét példa vagy adat, így hitelesebb.',
        },
        { kind: 'heading', text: 'A hatásos előadásmód' },
        {
          kind: 'text',
          text: 'A hang, a hanglejtés, a **szünet**, a szemkontaktus, a testtartás és a gesztusok együtt hatnak. Ne olvasd fel a szöveget, hanem **vázlatból** beszélj. Lassabban és tagoltabban beszélj, mint hinnéd; a hangsúly kiemeli a lényeget; a rövid szünet figyelmet kelt. A **szóbeli szöveg** minden eszköze (lásd a szóbeliségről szóló leckét) a retorika eszköze is.',
        },
        {
          kind: 'heading',
          text: 'Emelt szint: a szónok, a retorikai eszközök, a szójáték',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **szónok** tulajdonságai: szakértelem, hitelesség, erkölcsi tartás, a hallgatók ismerete, önuralom, előadói készség. Arisztotelész három meggyőzési eszközt különböztetett meg: **ethosz** (a szónok jelleme, hitele), **pathosz** (a hallgatók érzelmeire hatás), **logosz** (az érvek logikája). A jó szónok mindhármat használja.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **szónoki beszédek elemzésénél** a retorikai eszközöket és hatásukat keresed: **ismétlés** (anafora: mondatok azonos kezdése), **ellentét**, **fokozás**, **felsorolás**, **költői kérdés**, **megszólítás**, **metafora**, **tagolás**. Példák: Martin Luther King 1963-as washingtoni beszéde (*I have a dream*) az **ismétlésre** épül: az álom mondata újra és újra visszatér, ez ritmust, érzelmi emelkedést ad. John F. Kennedy 1961-es elnöki beszédének híres mondata az **ellentétes (kereszt) szerkezetű** kiazmust használja: ne azt kérdezd, mit tehet érted az országod, hanem azt, mit tehetsz te az országodért.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **szójáték** (hasonló hangzású vagy kettős értelmű szavakkal játszó fordulat) a retorikában figyelemfelkeltő, emlékezetessé teszi a mondatot, humort vagy meglepetést kelt. Példa (kitalált): *Nem az a baj, hogy sok a baj, hanem hogy kevés a bajnok.* – a *baj* és a *bajnok* hangalaki hasonlósága figyelmet kelt. Az **előadás szemléltetése** (bemutató, prezentáció) kiegészíti a beszédet: kevés szöveg, lényegre törő kép, a diákon kulcsszavak, nem a teljes beszéd.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli nyelvi tétel (2–4 tétel a retorika témakörből): egy idézet vagy beszédrészlet alapján a beszédfajta, a szerkezet, a hatásos előadásmód vagy az érvelés bemutatása.',
            'Szövegértési-nyelvi feladatsor: egy szöveg retorikai jellemzői (a szerző hogyan akarja meggyőzni az olvasót, milyen szerkezetben).',
            'Szövegalkotás: alkalmi beszéd vagy kiselőadás szerkezete; emelten történeti vagy jelenkori beszéd retorikai elemzése.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy a beszédfajtákat a téma vagy a hangnem szerint keveri össze. A felosztás alapja az **idő és a cél**: tanácsadó (jövő, hasznos), törvényszéki (múlt, igazságos), alkalmi (jelen, szép/dicsérendő). Másik hiba, hogy a beszéd részeit felsorolod, de nem mondod meg a funkciójukat.',
        },
        {
          kind: 'tip',
          text: 'Ha beszédet kell elemezned, a menet: **1.** kinek szól és mi a célja; **2.** szerkezet (bevezetés–tárgyalás–befejezés); **3.** érvek és érvtípusok; **4.** nyelvi-retorikai eszközök és hatásuk; **5.** összegzés. Mindig nevezz meg konkrét helyet a szövegből.',
        },
        {
          kind: 'example',
          title: 'Mintafeladat: ballagási beszéd megszerkesztése',
          problem:
            'Vázold fel az alkalmi beszéd szerkezetét az 5 lépés (anyaggyűjtés–elrendezés–kidolgozás–megtanulás–előadás) szerint!',
          solution:
            '1. **Anyaggyűjtés:** közös élmények, humoros és meghatóbb történetek, a búcsúzó tanárok és diákok szempontjai.\n2. **Elrendezés:** megszólítás, felidézés (múlt), köszönet, jövőkép, zárás.\n3. **Kidolgozás:** személyes, de tiszteletteljes hang, 1–2 szép kép vagy ismétlés, humor mértékkel.\n4. **Megtanulás:** a vázlat kulcsmondatai, nem a teljes szöveg.\n5. **Előadás:** lassú tempó, szemkontaktus, szünet a hatásos mondatok előtt.\n\nA beszédfajta: **alkalmi** (a jelenhez, eseményhez kötődik).',
        },
      ],
      topicMatch: ['retorik'],
      quiz: [
        {
          question: 'Melyik beszédfajta szól a múltbeli tett igazságosságáról?',
          options: ['tanácsadó', 'alkalmi', 'törvényszéki', 'reklám'],
          answer: 2,
          explanation:
            'A törvényszéki beszéd (vád, védelem) egy múltbeli tettet vizsgál: igazságos vagy igazságtalan. A tanácsadó a jövőről, az alkalmi a jelenről szól.',
        },
        {
          question: 'Mi a helyes sorrend a beszéd megszerkesztésében?',
          options: [
            'előadás, anyaggyűjtés, elrendezés',
            'anyaggyűjtés, elrendezés, kidolgozás, megtanulás, előadás',
            'kidolgozás, anyaggyűjtés, előadás',
            'megtanulás, anyaggyűjtés, elrendezés',
          ],
          answer: 1,
          explanation:
            'A klasszikus retorika menete: anyaggyűjtés, elrendezés, kidolgozás, megtanulás, előadás.',
        },
        {
          question: 'Mi a befejezés feladata a beszédben?',
          options: [
            'Új érvek bemutatása.',
            'Összegzés és hatás, gyakran felhívás.',
            'A téma megjelölése.',
            'Az ellenfél személyes támadása.',
          ],
          answer: 1,
          explanation:
            'A befejezés összefoglalja a beszédet, és érzelmi hatással vagy felhívással zár. Új érvet nem szokás bevezetni.',
        },
        {
          question: 'Melyik a tanácsadó beszéd példája?',
          options: [
            'A védőügyvéd perbeszéde.',
            'Búcsúbeszéd a ballagáson.',
            'Felszólalás arról, bevezessék-e az új szabályzatot.',
            'Gyászbeszéd.',
          ],
          answer: 2,
          explanation:
            'A tanácsadó beszéd döntést készít elő a jövőre vonatkozóan: javasol vagy elvet.',
        },
        {
          question: 'Melyik NEM Arisztotelész meggyőzési eszköze (emelt szint)?',
          options: ['ethosz', 'pathosz', 'logosz', 'szinonima'],
          answer: 3,
          explanation:
            'Az ethosz a szónok hitele, a pathosz az érzelmekre hatás, a logosz az érvek logikája. A szinonima nyelvi fogalom.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Retorika', url: wiki('Retorika') },
        { label: 'Wikipédia: Szónoklat', url: wiki('Szónoklat') },
        { label: 'Wikipédia: Cicero', url: wiki('Marcus Tullius Cicero') },
      ],
    },
    {
      id: 'ervelés-ervtipusok-cafolat',
      subject: 'magyar',
      unitId: 'szoveg-retorika',
      title: 'Az érvelés: érv, ellenérv, érvtípusok, cáfolat',
      level: 'kozep',
      requirement: {
        kozep:
          'A kulturált véleménynyilvánítás és vita szabályai, gyakorlata, a befolyásolás módszerei; az érvelés műfajai: a tétel, a bizonyítás, a cáfolat, az érv és az ellenérv; az érvelő beszéd felépítése, az érvtípusok; az érvelés logikája, technikája, az érvek elrendezése; a legfőbb érvelési hibák.',
        emelt:
          'A cáfolat módszerei; a hatásos meggyőzés és véleménynyilvánítás nyelvi (mondat- és szövegfonetikai) és nem nyelvi eszközei a különféle szövegműfajokban; a hivatalos felszólalás, hozzászólás különböző helyzetekben.',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **érvelés** egy álláspont (**tétel**) igazolása vagy cáfolata **érvekkel**. Részei: tétel, érvek (bizonyítás), ellenérvek és **cáfolat**, következtetés.',
            'Az **érv** a tétel mellett szóló indok; az **ellenérv** ellene szól. A **cáfolat** az ellenérv (vagy a másik álláspont) megdöntése.',
            'Gyakori **érvtípusok**: tényérv, példa, analógia (hasonlat), tekintélyérv, logikai (ok-okozati) érv, érzelmi érv, erkölcsi (értékalapú) érv.',
            'Az érvek **elrendezése**: az erős érv elöl vagy hátul (nyomatékos kezdés vagy zárás), a gyengébbet a közepére tesszük.',
            'Az **érvelési hibák**: elhamarkodott általánosítás, körkörös érvelés, személyeskedés, hamis dilemma, szalmabáb, tömegre hivatkozás.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'tétel',
              text: 'Az az állítás vagy álláspont, amelyet igazolni vagy cáfolni akarunk.',
            },
            { term: 'érv', text: 'A tétel mellett szóló, igazolására használt indok.' },
            { term: 'ellenérv', text: 'A tétel ellen szóló indok, a másik oldal érve.' },
            {
              term: 'cáfolat',
              text: 'Az ellenérv vagy a másik tétel megdöntése: megmutatjuk, hogy téves, nem igaz vagy nem következik.',
            },
            { term: 'bizonyítás', text: 'A tétel igazolása érvek sorával, logikus levezetéssel.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az érvelés felépítése' },
        {
          kind: 'text',
          text: 'Az érvelés gondolatmenete: **1.** a probléma, a kérdés felvetése; **2.** a **tétel** (álláspont) kimondása; **3.** az **érvek** (bizonyítás); **4.** az **ellenérvek** bemutatása és **cáfolata**; **5.** a **következtetés**, összegzés. Egy érvelő szöveg akkor meggyőző, ha az érvek relevánsak (valóban a tételhez tartoznak), igazak (ellenőrizhetők) és elégségesek (több szempontot is lefednek).',
        },
        { kind: 'heading', text: 'Érvtípusok' },
        {
          kind: 'compare',
          title: 'Gyakori érvtípusok',
          columns: ['Lényege', 'Példa'],
          rows: [
            {
              label: 'Tényérv, adat',
              cells: [
                'ellenőrizhető tény, statisztika, kutatás',
                '*A felmérés szerint a diákok 70%-a alszik kevesebbet a javasoltnál.* (kitalált adat)',
              ],
            },
            {
              label: 'Példa',
              cells: [
                'egy konkrét eset igazolja az állítást',
                '*A finn iskolákban rövidebb a tanóra, mégis jók az eredmények.*',
              ],
            },
            {
              label: 'Analógia',
              cells: [
                'hasonlóság alapján következtet',
                '*Ahogy az izom, az agy is fejlődik, ha edzed: olvass naponta!*',
              ],
            },
            {
              label: 'Tekintélyérv',
              cells: [
                'szakértő vagy elismert személy véleménye',
                '*Az orvosok szerint a napi 8 óra alvás javasolt.*',
              ],
            },
            {
              label: 'Logikai, ok-okozati érv',
              cells: [
                'okot és következményt kapcsol',
                '*Ha rendszeresen gyakorolsz, nő a jártasságod, ezért jobb jegyet kapsz.*',
              ],
            },
            {
              label: 'Érzelmi érv',
              cells: ['az érzelmekre hat', '*Képzeld el, milyen rossz egyedül maradni…*'],
            },
            {
              label: 'Erkölcsi, értékérv',
              cells: ['kötelességre, értékre hivatkozik', '*Segíteni kell annak, aki bajban van.*'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: nevezd meg az érvtípust',
          problem:
            'Milyen érvtípus? a) *Az Egészségügyi Világszervezet szerint a mozgáshiány nő a betegségkockázat.* b) *Ahogy a növénynek víz kell, úgy a tanulónak pihenés.* c) *Ha nem tanulsz, nem lesz meg a vizsga.* d) *Aki nem segít, az méltatlan az emberi névre.* e) *Tavaly az iskolai büfében 40%-kal kevesebb üdítőt vettek, miután áremelés volt.* (kitalált adat)',
          solution:
            'a) **Tekintélyérv** (szervezet véleménye).\n\nb) **Analógia** (hasonlat: növény–tanuló).\n\nc) **Logikai (ok-okozati) érv** (ok: nem tanulás, következmény: nem sikerül).\n\nd) **Erkölcsi érv** (értékre, kötelességre hivatkozik; ráadásul érzelmi hatású).\n\ne) **Tényérv, adat** (mérhető számadat, tapasztalat).',
        },
        { kind: 'heading', text: 'Az érvek elrendezése' },
        {
          kind: 'text',
          text: 'Az érveket sorba kell rendezni. Három gyakori elv: **fokozás** (gyengétől az erősebb felé, a végén a legerősebb érv), **nesztori sorrend** (az erős érv elöl, a gyengébb középen, a legerősebb a végén) és **hatás szerint** (az elöl álló érv a figyelmet köti le). Fontos: ne ugorj össze-vissza, kapcsold a gondolatokat kötőszavakkal (*először, továbbá, ráadásul, végül*). Az ellenérvet érdemes **előre vállalni és cáfolni**, mert így erősebb a pozíciód.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: érvelés építése',
          problem:
            'Építs érvelést a tételhez: *Az iskolákban ne legyen kötelező az egyenruha.* Adj két érvet, egy ellenérvet és a cáfolatot!',
          solution:
            '**Tétel:** Az iskolai egyenruha ne legyen kötelező.\n\n**1. érv (érték):** Az öltözködés az önkifejezés része, ezt a szabadságot meg kell őrizni. (erkölcsi/értékérv)\n\n**2. érv (tény, kitalált adat):** Egy felmérés szerint a diákok 65%-a költséges egyenruhának tartja. (tényérv)\n\n**Ellenérv:** Az egyenruha csökkenti a társadalmi különbségeket.\n\n**Cáfolat:** A különbségek akkor sem tűnnek el, hanem más formában (cipő, táska) jelennek meg; ráadásul az egyenruha költsége is terhet jelent a családoknak. (a cáfolat tényekre támaszkodik, nem támad személyt)\n\n**Következtetés:** Az iskola legyen ajánlott öltözetkódot, kötelező egyenruha nélkül.',
        },
        { kind: 'heading', text: 'Érvelési hibák' },
        {
          kind: 'compare',
          title: 'Legfőbb érvelési hibák',
          columns: ['Mi a gond?', 'Példa'],
          rows: [
            {
              label: 'Elhamarkodott általánosítás',
              cells: [
                'egy-két esetből mindenre következtet',
                '*Két diák ment csalni, tehát minden diák csal.*',
              ],
            },
            {
              label: 'Körkörös érvelés',
              cells: [
                'a bizonyítandót érvként használja',
                '*A törvény jó, mert helyes, hogy van ilyen törvény.*',
              ],
            },
            {
              label: 'Személyeskedés (ad hominem)',
              cells: ['nem az érvet, hanem a személyt támadja', '*Ő nem hiteles, mert fiatal.*'],
            },
            {
              label: 'Hamis dilemma',
              cells: ['két lehetőséget mutat, pedig több van', '*Vagy velünk vagy ellenünk.*'],
            },
            {
              label: 'Szalmabáb',
              cells: [
                'eltorzítja az ellenfél álláspontját, és azt cáfolja',
                '*Aki a házi feladat ellen van, szerinte nem kell tanulni.*',
              ],
            },
            {
              label: 'Tömegre hivatkozás',
              cells: ['mert sokan hiszik, igaznak veszi', '*Mindenki ezt csinálja, tehát jó.*'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Ebbe tartozik a **post hoc** hiba is (utána, tehát miatta): *Felvettem a szerencsepólómat, és meg lett az ötös* – az időbeli sorrend nem bizonyítja az okozatot.',
        },
        { kind: 'heading', text: 'Vita és kulturált véleménynyilvánítás' },
        {
          kind: 'text',
          text: 'A kulturált vita szabályai: **meghallgatod** a másikat, nem szakítod félbe; **az érvekre** reagálsz, nem a személyre; **tényekre** hivatkozol; elismered, ha a másiknak igaza van; **nem kiabálsz**, nem gúnyolódsz. A befolyásolás tisztességes módszerei az érv és a példa; a **manipuláció** (félrevezetés, nyomásgyakorlás) nem az.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **cáfolat módszerei** (emelt szint): **1.** a **tétel cáfolata**: bebizonyítod, hogy a tétel hamis (ellenpélda, ellentmondás); **2.** az **érvek cáfolata**: kimutatod, hogy az érvek nem igazak vagy nem relevánsak; **3.** a **bizonyítás (következtetés) cáfolata**: megmutatod, hogy az érvekből nem következik a tétel (logikai hiba). Egy **ellenpélda** egyetlen esettel megdönti az általánosítást: *„Minden madár tud repülni.” – A pingvin nem.*',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A hatásos meggyőzésben **nyelvi eszköz** a mondat- és szövegfonetikai tagolás (hangsúly, szünet, ritmus), az ismétlés, a fokozás, a költői kérdés; **nem nyelvi eszköz** a testtartás, a mimika, a gesztus, a kép és a zene (például videóban). A **hivatalos felszólalás, hozzászólás** (gyűlésen, fórumon) szabályos felépítésű: megszólítás, a téma megjelölése, álláspont és indoklás, rövid zárás; a hangnem udvarias és tárgyszerű.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szövegértési feladat: a szövegben szereplő **érvek és álláspontok** azonosítása, a szerző álláspontjának megkülönböztetése az idézett vagy cáfolt véleményektől; az érv típusának megnevezése.',
            'Szóbeli nyelvi tétel: egy rövid idézet vagy cikk érvelésének elemzése (tétel, érvek, ellenérv, cáfolat, érvelési hibák).',
            'Írásbeli szövegalkotás középszinten rövidebb érvelő szöveg a hozzászólás vagy levél műfajában; emelten **reflektáló szöveg**.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Reflektáló szöveg** (emelt szintű írásbeli, 20 pont): érvelő vagy véleménykifejtő szöveg egy adott irodalmi, kulturális, esztétikai, bölcseleti vagy etikai kérdésre, jelenségre reflektálva. Terjedelme 250–450 szó. Értékelése: tárgyi tudás és általános tájékozottság (5 pont), problémaérzékenység és gondolatgazdagság (5 pont), gondolatmenet és szövegfelépítés (5 pont), nyelvi igényesség (5 pont).',
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy valaki **állítást érvnek** nevez (*mert szerintem így van*), vagy az **ellenérvet kihagyja**, és csak az egyik oldalt mutatja be. A jó érvelés több nézőpontot is figyelembe vesz. Másik hiba az érzelmi túlzás (üres pátosz) a tényalapú érv helyett, és a személyeskedés.',
        },
        {
          kind: 'tip',
          text: 'Egy érvelő vagy reflektáló szöveg vázlata: **1.** bevezetés: a kérdés és a tételed; **2.** két-három érv (különböző típusúak: tény, példa, érték); **3.** egy ellenérv és a cáfolata; **4.** zárás: következtetés, tágabb kitekintés. Használj kapcsolóelemeket (*először, ezzel szemben, ebből következik*), és tartsd a témát.',
        },
        {
          kind: 'example',
          title: 'Mintafeladat: érvelő hozzászólás szerkezete',
          problem:
            'Írj rövid, 5–6 mondatos hozzászólást: *Legyen-e kötelező a diákközösségi szolgálat?*',
          solution:
            '*(Bevezetés, tétel)* Szerintem a diákközösségi szolgálat legyen kötelező, mert a tanulóknak ismerniük kell a közösségért vállalt felelősséget.\n\n*(1. érv, erkölcsi)* Aki segít másoknak, megtanulja, hogy a társadalom működéséhez mindenkinek hozzá kell járulnia.\n\n*(2. érv, példa)* Sok diák éppen a szolgálat során találta meg a későbbi pályáját.\n\n*(Ellenérv és cáfolat)* Van, aki szerint a kényszer elveszi a lelkesedést, de a szolgálat során kialakult élmény többnyire túlmutat a kezdeti ellenérzésen.\n\n*(Zárás)* Ezért a kötelező, jól szervezett szolgálat többet ad, mint amennyit elvesz.',
        },
      ],
      topicMatch: ['érvelés', 'reflektáló szöveg'],
      quiz: [
        {
          question: '*Az orvosok szerint a napi 8 óra alvás javasolt.* Milyen érvtípus?',
          options: ['tekintélyérv', 'analógia', 'érzelmi érv', 'személyeskedés'],
          answer: 0,
          explanation:
            'A tekintélyérv szakértő vagy elismert forrás véleményére hivatkozik. Az orvosok szakértők.',
        },
        {
          question: 'Mit nevezünk cáfolatnak?',
          options: [
            'A tétel kimondását.',
            'Az ellenérv vagy az ellenkező álláspont megdöntését.',
            'Az összegző zárást.',
            'A bevezetést.',
          ],
          answer: 1,
          explanation:
            'A cáfolat megmutatja, hogy az ellenérv vagy a másik álláspont téves, nem igaz vagy nem következik.',
        },
        {
          question: 'Melyik érvelési hiba az, ha az érv helyett a vitapartner személyét támadjuk?',
          options: ['hamis dilemma', 'körkörös érvelés', 'személyeskedés (ad hominem)', 'analógia'],
          answer: 2,
          explanation:
            'Személyeskedés: nem az érvet, hanem a személyt bírálja, ezért nem szól a tételről.',
        },
        {
          question: '*Két diák csalt, tehát minden diák csal.* Mi a hiba?',
          options: [
            'Körkörös érvelés.',
            'Elhamarkodott általánosítás.',
            'Tekintélyérv.',
            'Szalmabáb.',
          ],
          answer: 1,
          explanation: 'Két esetből az egészre következtet: elhamarkodott általánosítás.',
        },
        {
          question: 'Melyik NEM tartozik az emelt szintű cáfolati módszerek közé?',
          options: [
            'A tétel cáfolata.',
            'Az érvek cáfolata.',
            'A bizonyítás (következtetés) cáfolata.',
            'A vitapartner külsejének bírálata.',
          ],
          answer: 3,
          explanation:
            'A cáfolat a tételt, az érveket vagy a levezetést támadja, a személy külsejét nem. Az utóbbi személyeskedés lenne.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Érvelés', url: wiki('Érvelés') },
        { label: 'Wikipédia: Érvelési hiba', url: wiki('Logikai hiba érvelési hiba') },
        { label: 'Wikipédia: Vita', url: wiki('Vita (beszélgetés)') },
      ],
    },
    {
      id: 'szoveg-retorika-emelt-tudomanyos-szoveg-elemzes',
      subject: 'magyar',
      unitId: 'szoveg-retorika',
      title: 'Emelt szint: szövegelemzés és reflektáló szöveg',
      level: 'emelt',
      requirement: {
        emelt:
          'A téma értelmezése tudományos szövegekben; a szöveg és a nem szövegszerű elemek (kép, ábra, táblázat, tipográfia) kapcsolata; ismeretterjesztő, szépirodalmi és egyszerűbb tudományos szövegek elemzése (címzettek, téma, szóhasználat, megszerkesztettség); szövegek alkotása összetettebb műfajokban, érvelő esszék írása; a szövegek transzformációi.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Emelten **tudományos és ismeretterjesztő szövegeket** is elemezned kell: a **címzett**, a **téma**, a **szóhasználat** (szakszavak, tárgyilagosság) és a **megszerkesztettség** szempontjából.',
            'A tudományos szöveg jellemzői: tárgyilagos, pontos szakszókincs, bizonyítás, hivatkozások, idézés, felépített gondolatmenet (bevezetés, kifejtés, összegzés).',
            'A **nem szövegszerű elemek** (kép, ábra, táblázat, tipográfia) a szöveggel együtt hordozzák a jelentést; a kapcsolatukat is értelmezni kell.',
            'Az emelt írásbeli része a **reflektáló szöveg** (250–450 szó, 20 pont): érvelő vagy véleménykifejtő szöveg egy irodalmi, kulturális, esztétikai, bölcseleti vagy etikai kérdésről.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Tudományos és ismeretterjesztő szöveg elemzése', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'A **tudományos szöveg** címzettje a szakmabeli (vagy érdeklődő) olvasó, célja az új tudás közlése és bizonyítása. Jellemzői: **tárgyilagos** hang, **szakszavak**, pontos definíciók, **hivatkozások**, logikus felépítés (probléma, módszer, eredmény, következtetés), kevés érzelmi elem. Az **ismeretterjesztő szöveg** a laikus közönségnek szól: egyszerűbb szókincs, példák, hasonlatok, érdekes bevezetés; megőrzi a pontosságot, de hozzáférhetőbb. A **szépirodalmi szöveg** ezzel szemben képes, többértelmű, stilizált.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Három szövegtípus összehasonlítása',
          columns: ['Tudományos', 'Ismeretterjesztő'],
          rows: [
            {
              label: 'Címzett',
              cells: ['szakember vagy tájékozott olvasó', 'laikus, érdeklődő olvasó'],
            },
            {
              label: 'Szóhasználat',
              cells: ['szakszavak, pontos definíciók', 'köznyelvi, magyarázó, hasonlatos'],
            },
            { label: 'Hang', cells: ['tárgyilagos, személytelen', 'közvetlenebb, élénkebb'] },
            {
              label: 'Szerkezet',
              cells: ['szigorú, bizonyításra épül', 'szabadabb, figyelemfelkeltő'],
            },
          ],
        },
        { kind: 'heading', text: 'Szöveg és nem szövegszerű elemek', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Egy cikkben a **kép, ábra, táblázat, diagram** és a **tipográfia** (betűméret, félkövér, dőlt, színek, oszlopok) is jelentést hordoz. Az ábra kiegészíti, szemlélteti vagy ellentmond a szövegnek; a fontos fogalmat félkövér kiemeli; a címsor-hierarchia a gondolatmenet vázát mutatja. Értelmezéskor mindig kérdezd meg: **mit mutat az ábra, mit tesz hozzá a szöveghez, és miért éppen így jelent meg?**',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: ábra és szöveg viszonya',
          problem:
            'Egy cikk szövege azt állítja, hogy az olvasás népszerűsége csökken. A mellette lévő oszlopdiagram a negyedéves könyvkölcsönzések számát mutatja évente. Hogyan viszonyul egymáshoz a kettő?',
          solution:
            'A diagram **szemlélteti és igazolja** a szöveg állítását, ha az oszlopok csökkenő trendet mutatnak. Ha nem, a szöveg és az ábra **ellentmond**, és a szerző álláspontját kritikával kell olvasni. A válaszban nevezd meg az adatot (melyik évek, mennyi) és azt, hogy a diagram **kiegészíti** (új információt ad) vagy csak **ismétli** a szöveget.',
        },
        { kind: 'heading', text: 'Érvelő esszé és reflektáló szöveg', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **érvelő esszé** személyes hangú, de felépített: a probléma felvetése, tétel, több szempontú érvelés (érvek–ellenérvek–cáfolat), tágabb tanulság. A **reflektáló szöveg** az írásbeli vizsgán nem műelemzés, hanem **állásfoglalás egy kérdésben**, amelyhez irodalmi, kulturális példákat és saját gondolatokat használhatsz. A javítási szempontok: tárgyi tudás, problémaérzékenység (több nézőpont meglátása), gondolatmenet (logikus felépítés), nyelvi igényesség. Az eltérő vélemény nem hátrány: a vizsgázó véleménye eltérhet az általánosan elfogadottól.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: reflektáló szöveg vázlata',
          problem:
            'Adj vázlatot egy reflektáló szöveghez: *Szükség van-e ma még az irodalomra?* (250–450 szó)',
          solution:
            '**Bevezetés (tétel):** Az irodalom ma is szükséges, mert olyan kérdéseket tesz fel, amelyekre a mindennapok nem adnak teret.\n\n**1. érv (érték):** az irodalom az emberi tapasztalatot sűríti, ezért empátiát tanít.\n\n**2. érv (példa):** a klasszikus művek (például a Biblia vagy a mítoszok motívumai) ma is felbukkannak a filmekben, dalokban, mémekben (intertextualitás).\n\n**Ellenérv és cáfolat:** *Az irodalom elavult, mert a képernyő erősebb.* – A képernyő is történeteket mesél, a történetmondás igénye maradt; az irodalom ennek mélyebb formája.\n\n**Zárás:** Az irodalom nem a múlt gyűjteménye, hanem a jelen értelmezésének eszköze.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **transzformáció** emelt témája is ide kapcsolódik: egy szöveg átalakul (a mém, az adaptáció, az átirat). Elemzéskor azt vizsgálod, **mi marad meg** az eredetiből, **mi változik**, és **miért**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt írásbeli (240 perc, 100 pont): szövegértési és nyelvi-irodalmi műveltségi feladatsor (40 pont), műértelmező szöveg (40 pont, 600–800 szó), reflektáló szöveg (20 pont, 250–450 szó). A helyesírás –8, az íráskép –2 pontot ronthat.',
            'Emelt szóbeli (20 perc): egy magyar nyelvi (15 pont) és egy irodalmi tétel (25 pont) kifejtése, a nyelvi tételsor 20 tételből áll, a szöveg és a retorika témaköréből is 2–4 tétel van.',
            'A szóbeli nyelvi feladat: egy szövegből vagy dokumentumból (idézet, űrlap, újságoldal, ábra, internetes oldal) kiinduló, adott szempontú elemzés.',
          ],
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'A reflektáló szövegben ne műelemzést írj, hanem **a kérdésre válaszolj**, érvekkel. Gyakori hiba az egynézőpontúság és a kifejtetlen állítás. A terjedelmet is figyeld: 250 szó alatt kevés a kifejtés, 450 felett elveszik a gondolatmenet.',
        },
        {
          kind: 'tip',
          emelt: true,
          text: 'Gyakorolj időre: a reflektáló szövegre kb. 30–35 perc elég, ha előbb 5 perc vázlatot írsz. A vázlat: tétel, két érv, egy ellenérv és cáfolat, zárás. Ha van időd, olvasd át az érvek típusait, és ellenőrizd, hogy nem csak egyfajta érvet használsz-e.',
        },
      ],
      topicMatch: ['tudományos szöveg'],
      quiz: [
        {
          question: 'Melyik jellemző a tudományos szövegre?',
          options: [
            'Képes, többértelmű nyelv.',
            'Tárgyilagos hang, szakszavak, bizonyítás.',
            'Spontán, szóbeli stílus.',
            'Hirdetés jellegű rövidség.',
          ],
          answer: 1,
          explanation:
            'A tudományos szöveg tárgyilagos, pontos szakszókincset használ, és bizonyítás, hivatkozások vezetik a gondolatmenetet.',
          emelt: true,
        },
        {
          question: 'Mi a nem szövegszerű elem?',
          options: ['bekezdés', 'ábra', 'mondat', 'cím'],
          answer: 1,
          explanation:
            'A nem szövegszerű elemek a képek, ábrák, táblázatok és a tipográfia; ezek a szöveggel együtt hordoznak jelentést.',
          emelt: true,
        },
        {
          question: 'Mekkora a reflektáló szöveg elvárt terjedelme?',
          options: ['100–150 szó', '250–450 szó', '600–800 szó', '1000 szó felett'],
          answer: 1,
          explanation:
            'A reflektáló szöveg terjedelme 250–450 szó, a műértelmező szöveg 600–800 szó.',
          emelt: true,
        },
        {
          question: 'Mi a reflektáló szöveg lényege?',
          options: [
            'Egy vers sor-sor elemzése.',
            'Érvelő vagy véleménykifejtő állásfoglalás egy irodalmi, kulturális, bölcseleti vagy etikai kérdésről.',
            'Hivatalos levél írása.',
            'Egy cikk szó szerinti másolata.',
          ],
          answer: 1,
          explanation:
            'A reflektáló szöveg érvelő vagy véleménykifejtő szöveg, amely egy adott kérdésre reflektál, saját állásponttal és érvekkel.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Tudományos publikáció', url: wiki('Tudományos publikáció') },
        { label: 'Wikipédia: Ismeretterjesztés', url: wiki('Ismeretterjesztés') },
        { label: 'Wikipédia: Mém', url: wiki('Mém') },
      ],
    },
  ],
};

export default unit;
