import type { ExampleAnswer } from '../../src/content/schema.types';

/**
 * Sample answers for the demo essays, written for the app (not by students),
 * scored with the demo criteria. Students score them first, then compare.
 */
export const HISTORY_ESSAY_EXAMPLES: ExampleAnswer[] = [
  {
    id: 'minta-eros',
    label: 'Erős megoldás',
    text: `1848 márciusában a pozsonyi országgyűlés gyors ütemben fogadta el a reformkor legfontosabb követeléseit. A törvényeket V. Ferdinánd 1848. április 11-én szentesítette, ezért nevezzük őket áprilisi törvényeknek. A pesti forradalom 12 pontja, amelyet a forrás részben idéz, nagyrészt ugyanezeket a célokat fogalmazta meg.

A törvények Magyarországot alkotmányos monarchiává alakították. Létrejött a független, felelős magyar kormány, amely az országgyűlésnek tartozott felelősséggel; első miniszterelnöke Batthyány Lajos lett. A rendi országgyűlés helyére népképviseleti országgyűlés lépett, amelyet vagyoni vagy műveltségi cenzushoz kötött választójog alapján választottak. Az országgyűlés évente ülésezett Pesten.

A társadalmi átalakulás legfontosabb lépése az úrbéri viszonyok megszüntetése, azaz a jobbágyfelszabadítás volt: a volt jobbágyok saját tulajdonukba kapták úrbéres földjüket, a földesurakat az állam kártalanította. Ez megfelel a 12 pont 7. követelésének. Eltörölték az ősiséget, és kimondták a közteherviselést (6. pont), vagyis a nemesség is adót fizetett. A sajtószabadság (1. pont) és a törvény előtti egyenlőség (4. pont) is megvalósult, és kimondták az unió Erdéllyel (12. pont), amelyet az erdélyi országgyűlés is megerősített.

Az áprilisi törvények jelentősége, hogy békés úton, törvényes keretek között valósították meg a polgári átalakulást. A jogegyenlőség és a jobbágyfelszabadítás megteremtette a modern, polgári Magyarország alapjait. Ugyanakkor a Habsburg-kormány és Magyarország viszonya (például a hadügy és a pénzügy kérdése) nem volt egyértelműen rendezve, ami később a fegyveres konfliktushoz vezetett.`,
    scores: { c1: 2, c2: 2, c3: 2, c4: 4, c5: 3, c6: 2 },
    notes: {
      c4: 'A forrás négy pontját is pontosan összekapcsolja a törvényekkel.',
      c5: 'A rendelkezések és a jelentőség rendben vannak, a következmények közül a nemzetiségi kérdés kimaradt, ezért nem kap teljes pontot.',
    },
    comment:
      'Pontos, jól szerkesztett válasz. Időt és helyet (Pozsony, Pest, április 11.) is megad, a szakkifejezéseket helyesen használja.',
  },
  {
    id: 'minta-kozepes',
    label: 'Közepes megoldás',
    text: `1848-ban forradalom volt Pesten március 15-én, Petőfi felolvasta a Nemzeti dalt és a 12 pontot. A 12 pontban a magyarok sajtószabadságot és közös teherviselést kértek, meg hogy legyen unió Erdéllyel.

Ezután jöttek az áprilisi törvények. Ezek nagyon fontosak voltak mert megszüntették a jobbágyságot, és mindenki egyenlő lett a törvény előtt. Lett magyar kormány is, Batthyány Lajos vezetésével, és Kossuth is miniszter lett.

A törvények jelentősége az, hogy Magyarország modern ország lett. A nemesek is fizettek adót. Később viszont kitört a szabadságharc, mert Bécs nem fogadta el ezeket.`,
    scores: { c1: 1, c2: 1, c3: 1, c4: 2, c5: 2, c6: 1 },
    notes: {
      c1: 'A válasz nagy része a márciusi eseményekről szól, nem a törvények rendelkezéseiről.',
      c2: 'A március 15. pontos, de a törvények helye és időpontja (Pozsony, április) hiányzik.',
      c3: 'Hiányzik a felelős kormány, a népképviselet és a jobbágyfelszabadítás mint szakkifejezés pontos használata.',
      c4: 'Felsorolja a forrás néhány pontját, de nem kapcsolja őket egyenként a törvényekhez.',
      c5: 'A jelentőség csak általánosan jelenik meg; a népképviselet és az ősiség eltörlése kimaradt.',
      c6: 'Rövid, a bekezdések nem építenek egymásra; vesszőhiba is van („fontosak voltak, mert”).',
    },
    comment:
      'A válasz ismeri a korszakot, de a feladat kérdésére (a törvények rendelkezései és jelentősége) csak részben felel.',
  },
];

export const HUNGARIAN_ESSAY_EXAMPLES: ExampleAnswer[] = [
  {
    id: 'minta-eros',
    label: 'Erős megoldás',
    text: `Sokan úgy gondolják, hogy a nyári szünet igazi kalandja egy külföldi út. Szerintem azonban legalább annyira érdemes belföldön utazni, sőt, egy diák számára gyakran ez a jobb választás. Két okból gondolom így.

Első érvem a költség és a szervezés egyszerűsége. Egy belföldi utazáshoz nem kell repülőjegy, a vonat- és buszjegyek a diákkedvezménnyel olcsók, így a zsebpénzből is kijön egy hosszabb kirándulás. Tavaly a barátaimmal vonattal mentünk a Balaton-felvidékre: a szállás egy kis kemping volt, mégis egy hétig túráztunk, fürödtünk és bicikliztünk, mindezt kevesebből, mint amennyibe egy külföldi hétvége került volna.

Második érvem, hogy a saját országunkat sokszor kevésbé ismerjük, mint a külföldi nevezetességeket. Aki járt már a pécsi ókeresztény sírkamráknál, a tokaji borvidéken vagy a Bükk barlangjaiban, tudja, hogy ezek a helyek semmivel sem unalmasabbak egy idegen város múzeumainál. Ráadásul az itt látottak kapcsolódnak ahhoz, amit történelemből vagy irodalomból tanulunk, így az utazás a tanulást is segíti. Amikor a szigligeti várban álltam, egészen másképp értettem meg, mit jelentett a török elleni végvári harc, mint az órán. Az ilyen élmény sokkal tovább megmarad, mint egy tankönyvi oldal.

Természetesen a külföldi út is értékes: új nyelvet és kultúrát ismerhetünk meg. Aki ilyen lehetőséget kap, ne hagyja ki. Ezt nem vitatom, de úgy gondolom, hogy a kettő nem zárja ki egymást, és a belföldi utazás könnyebben elérhető mindenki számára.

Összegezve: a belföldi utazás olcsóbb, egyszerűbben megszervezhető, és közelebb visz a saját hazánk megismeréséhez. Nem kell hozzá nagy költségvetés, csak kíváncsiság és egy kis tervezés. Ezért a nyári szünidőben érdemes először a közelben keresni a kalandot.`,
    scores: { c1: 8, c2: 4, c3: 3, c4: 4 },
    notes: {
      c1: 'Világos álláspont, két kifejtett érv saját példával, és az ellenérvet is kezeli.',
      c3: 'Igényes, de helyenként ismétlődő szófordulatok („érvem”, „utazás”); ezért nem kap teljes pontot.',
    },
    comment:
      'Jól tagolt érvelés: bevezetés az állásponttal, két érv egy-egy bekezdésben, cáfolat, összegzés.',
  },
  {
    id: 'minta-kozepes',
    label: 'Közepes megoldás',
    text: `Szerintem érdemes belföldön utazni nyáron. Én is sokszor utazok belföldön a családommal és mindig jól érezzük magunkat.

Belföldön sok szép hely van. Például a Balaton, ahol lehet fürdeni és sok program van. Meg ott van Budapest is, ahol sok múzeum van, és a Parlamentet is meg lehet nézni. A Balatonnál nyáron nagyon jó az idő, és sok fiatal megy oda, ezért jó a hangulat. Mi minden évben elmegyünk egy hétre Siófokra. Ott mindig sok koncert és fesztivál van, és este a parton sétálunk. Tavaly elmentünk Tihanyba is hajóval, ami nagyon tetszett nekem, mert onnan szép a kilátás.

Azért is jó belföldön utazni, mert olcsóbb. Külföldre drága elmenni, kell repülőjegy és a szállás is drágább sokszor. Ha belföldön utazunk akkor nem kell annyit fizetni, és a pénzt másra lehet költeni, például ételre vagy programokra. Szerintem ez nagyon fontos szempont egy család számára.

Van aki szerint külföldön érdekesebb mert ott más nyelvet beszélnek és más ételek vannak. Ez igaz de szerintem belföldön is lehet érdekes dolgokat csinálni, csak tudni kell hova menjünk. Ha az ember jól tervez, akkor belföldön is lehet nagy élményeket szerezni, és nem kell olyan messzire menni. Az utazás is rövidebb, így nem fárad el az ember. Például ha valaki szereti a természetet, akkor elmehet a Bükkbe vagy az Őrségbe túrázni, ahol szép erdők vannak és kevés ember. Ez is olyan élmény, mint egy külföldi út.

Összefoglalva szerintem érdemes belföldön utazni mert sok szép hely van és olcsóbb is. Mindenkinek ajánlom, hogy próbálja ki ezen a nyáron is, mert biztos, hogy nem fog csalódni.`,
    scores: { c1: 5, c2: 3, c3: 2, c4: 2 },
    notes: {
      c1: 'Van álláspont és két érv, de az első érv („sok szép hely van”) inkább felsorolás, mint kifejtés.',
      c2: 'Felismerhető a bevezetés, a tárgyalás és a befejezés, de a bekezdéseken belül csapong.',
      c3: 'Egyszerű, ismétlődő mondatszerkezetek („sok … van”), szűk szókincs.',
      c4: 'Több vesszőhiba a kötőszavak előtt („családommal, és”, „utazunk, akkor”, „érdekesebb, mert”).',
    },
    comment:
      'Teljesíti a terjedelmet és a szerkezeti elvárásokat, de az érvek kidolgozatlanok, a nyelvhasználat egyszerű.',
  },
];
