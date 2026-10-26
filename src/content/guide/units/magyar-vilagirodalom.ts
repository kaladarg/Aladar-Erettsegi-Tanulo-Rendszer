import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar irodalom 6. témakör: Művek a világirodalomból. */
const unit: GuideUnit = {
  id: 'vilagirodalom',
  subject: 'magyar',
  order: 80,
  title: 'Művek a világirodalomból',
  requirementRef: 'Irodalom 6. Művek a világirodalomból',
  intro:
    'Az európai irodalom alapjai (az antikvitás és a Biblia), majd a romantika, a realizmus, a századfordulós modernség és a 20. század nagy művei. Emelten a középkor, a reneszánsz és a felvilágosodás is jön. Korszakjellemzők, kulcsművek, hőstípusok, motívumok és a vizsgán várt műértelmezés.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Irodalom 6. témakör: Művek a világirodalomból). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'vilagirodalom-antikvitas',
      subject: 'magyar',
      unitId: 'vilagirodalom',
      title: 'Az antikvitás: eposz, líra, műfajok és hőstípusok',
      level: 'kozep',
      requirement: {
        kozep:
          'Az európai irodalom alapvető hagyományai: az antikvitás és a Biblia (pl. műfajok, témák, motívumok, hőstípusok); a korszak jellemzőinek és egy-két kiemelkedő alkotásának bemutatása; műrészletek értelmezése.',
        emelt:
          'Művek értelmezése a korszak szellemi irányzataival, a korstílussal való összefüggésben is (műfaji sajátosságok, téma, kompozíció); műfajok és motívumok történeti változása.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **antik** (görög és római) irodalom adja az európai műfajok, témák és hőstípusok alapját: eposz, óda, elégia, epigramma, dráma, ekloga.',
            '**Homérosz** két eposza, az *Iliász* és az *Odüsszeia* (egyenként 24 ének) a hagyomány szerint a Kr. e. 8. századhoz kötődik; versformájuk a **hexameter**.',
            'A görög líra: **Szapphó** (szerelmi líra, szapphói strófa), **Anakreón** (bor, szerelem, vidám életöröm).',
            'A római költők: **Vergilius** (*Aeneis*, *Eclogák*), **Horatius** (*Ódák*, *Ars poetica*), **Ovidius** (*Átváltozások*, *Szerelmek*, *Tristia*).',
            'Hőstípusok: **Akhilleusz** (a dicsőségért rövid életet vállaló harcos), **Odüsszeusz** (az értelmes, kitartó hazatérő), **Aeneas** (a küldetését teljesítő, kötelességtudó alapító).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'eposz',
              text: 'Hosszú, verses elbeszélés egy közösség sorsdöntő eseményeiről, hősökről; az antik eposz kellékei: invokáció, propozíció, enumeráció, in medias res kezdés, állandó jelzők, kibontott (homéroszi) hasonlatok.',
            },
            {
              term: 'hexameter',
              text: 'Hat verslábas időmértékes sor; az antik eposz versformája.',
            },
            {
              term: 'óda',
              text: 'Magasztos hangú, ünnepélyes líra műfaj; Horatius ódái a római líra csúcsa.',
            },
            {
              term: 'elégia',
              text: 'Szomorkás, elmélkedő hangú költemény (a római szerelmi elégia és Ovidius).',
            },
            {
              term: 'epigramma',
              text: 'Rövid, csattanós, eredetileg síriratként szolgáló költemény.',
            },
            {
              term: 'ekloga',
              text: 'Pásztorköltemény; Vergilius *Eclogái* teremtették meg az idillikus Arkádia képét.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Homérosz: az eposz' },
        {
          kind: 'text',
          text: 'A hagyomány Homéroszt a **görög eposzköltészet** megteremtőjének tartja (a személye és a művek szerzősége vitatott, ez az úgynevezett homéroszi kérdés). Az **Iliász** a trójai háború utolsó, tizedik évének néhány hetét beszéli el: központi témája **Akhilleusz haragja** (mánisz), a sértett hős visszavonulása, majd Patroklosz halála után a visszatérése és **Hektór** legyőzése. Az **Odüsszeia** Odüsszeusz tíz évig tartó **hazatérését** (nosztosz) mutatja be: Ithaka, Pénelopé és Télemakhosz várakozása, a kalandok (küklopsz, Szirének, Kalüpszó), végül a kérők megbüntetése.',
        },
        {
          kind: 'compare',
          title: 'Iliász és Odüsszeia',
          columns: ['Iliász', 'Odüsszeia'],
          rows: [
            {
              label: 'Téma',
              cells: ['a harag és a háború, a hősi halál', 'a hazatérés, a bolyongás, a család'],
            },
            {
              label: 'Hős',
              cells: [
                'Akhilleusz: erő, becsvágy, dicsőség',
                'Odüsszeusz: ész, ravaszság, kitartás',
              ],
            },
            {
              label: 'Világ',
              cells: [
                'a csatatér, a hadsereg, az istenek beavatkozása',
                'tenger, szigetek, mesés lények, az otthon',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az eposz **kellékei** jól felismerhetők: a költő a múzsához fordul (**invokáció**), megnevezi a témát (**propozíció**), a cselekmény a közepén indul (**in medias res**), a hősöket **állandó jelzők** kísérik (pl. „gyorslábú Akhilleusz”), a hosszú **seregszemle** (enumeráció) felsorolja a harcosokat, a **hasonlatok** kibontottak, és az istenek folyamatosan beleszólnak az emberek dolgaiba.',
        },
        { kind: 'heading', text: 'Görög líra: Szapphó és Anakreón' },
        {
          kind: 'text',
          text: '**Szapphó** (Leszbosz szigetén élt, a Kr. e. 7–6. század fordulóján) szerelmi lírája személyes, a vágyat és a féltést **az érzelem testi tünetein** keresztül mutatja meg. A nevét viseli a **szapphói strófa**, amelyet később Horatius és a magyar költők is használtak. **Anakreón** (Kr. e. 6. század) dalaiban a bor, a szerelem és a mulandó élet élvezete a téma. A hangneme játékos, könnyed; ebből alakult ki az **anakreóni dal** hagyománya, amelyet például Csokonai is követ.',
        },
        { kind: 'heading', text: 'Római költők' },
        {
          kind: 'people',
          items: [
            {
              name: 'Vergilius (Kr. e. 70–19)',
              text: 'Az **Aeneis** 12 énekes nemzeti eposz: Aeneas a leégett Trójából menekül, Karthágóban Didóval találkozik, majd Itáliában megalapozza Róma jövőjét. Első szavai: *„Arma virumque cano”* (fegyvert és férfit énekelek). Hőse a **pius** (kötelességtudó) Aeneas, aki a személyes boldogságnál többre tartja a küldetést. A *Georgica* a földművelés költeménye, az *Eclogák* pásztorversek.',
            },
            {
              name: 'Horatius (Kr. e. 65–8)',
              text: 'Az **Ódák** (Carmina) mestere. Jellemző gondolatai: **aurea mediocritas** (arany középszer, a mértéktartás), **carpe diem** (ragadd meg a napot), a költői halhatatlanság (*„Exegi monumentum aere perennius”*, „ércnél maradandóbb emléket állítottam”). Az **Ars poetica** (Pisókhoz írt levél) a költészet szabályait foglalja össze. Berzsenyi és Kazinczy kora is nagy hatással követi.',
            },
            {
              name: 'Ovidius (Kr. e. 43 – Kr. u. 17 körül)',
              text: 'Az **Átváltozások** (Metamorphoses) 15 könyvben dolgozza fel a görög–római mítoszokat a világ keletkezésétől a költő koráig, a közös motívum az **átváltozás**. Szerelmi költészete (*Amores*, *Ars amatoria*) és a száműzetésben írt *Tristia* (Szomorú énekek) is híres; Augusztusz császár Kr. u. 8-ban a Fekete-tenger melléki Tomiba száműzte.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az antik hagyomány az európai irodalom **közös tárháza**: a mitológiai történetek, az eposzi kellékek, az óda és az elégia a középkoron, a reneszánszon és a klasszicizmuson át a magyar költészetig (pl. Janus Pannonius epigrammái, Zrínyi eposza, Berzsenyi ódái) továbbélnek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelten a műfajok **történeti változását** is várják: a vergiliusi eposz már tudatos, „irodalmi” eposz (nem szóbeli hagyomány), a nemzeti eszme szolgálatában áll; az eposz utóélete a *Szigeti veszedelemben*, majd a komikus eposzban (pl. *A helység kalapácsa*) mutatható be. Érdemes ismerni a **toposzokat** is: a halhatatlanság-toposz (Horatius), az idillikus Arkádia (Vergilius), az *ubi sunt* a későbbi korokban.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: „Az antikvitás és a Biblia” vagy egy korszak jellemzői és egy-két alkotás értelmezése (a tételsorban a világirodalmi témakörhöz **2 tétel** tartozik).',
            'Irodalmi feladatlap: kérdések, táblázat, igaz-hamis egy ismert eposzi részlethez vagy ódához; a megalkotottság (szerkezet, versforma, kellékek) felismerése.',
            'Összehasonlítás hőstípusok, műfajok vagy motívumok (pl. hazatérés, halhatatlanság) mentén, antik és magyar művek között.',
          ],
        },
        {
          kind: 'example',
          title: 'Mintavázlat: két eposzhős összehasonlítása',
          problem: 'Hasonlítsd össze Akhilleuszt és Odüsszeuszt hőstípus szerint.',
          solution:
            '**Bevezetés**: mindketten homéroszi hősök, de más eszményt képviselnek.\n**Akhilleusz** (Iliász): a harci erő, a becsület és a dicsőség embere; tudja, hogy a hírnévért rövid életet választ. Haragja és fájdalma (Patroklosz halála) mélyen emberivé teszi.\n**Odüsszeusz** (Odüsszeia): az ész, a ravaszság és a kitartás hőse; a cél nem a halhatatlan hírnév, hanem az otthon és a család.\n**Közös**: istenek segítik/akadályozzák őket, a sorsuk a közösség mércéje.\n**Zárás**: a két hős az európai irodalom két alaptípusa: a harcos hős és a bolyongó, gondolkodó hős.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd a római és a görög szerzőket: Homérosz, Szapphó, Anakreón **görög**; Vergilius, Horatius, Ovidius **római**. Az *Aeneis* nem Homérosz műve, hanem Vergilius „római Iliász–Odüsszeiája”.',
        },
        {
          kind: 'tip',
          text: 'Egy antik szöveg elemzésénél mindig nevezd meg a **műfajt** és a hozzá tartozó kellékeket (eposz: invokáció, in medias res; óda: megszólítás, emelkedett hang), és mondd el, mit jelent a mű **a mai olvasónak**.',
        },
      ],
      topicMatch: ['világirodalom', 'vergilius', 'görög mitológia'],
      cards: { subject: 'magyar', era: 'antik' },
      quiz: [
        {
          question: 'Melyik eposz főhőse Odüsszeusz?',
          options: ['Iliász', 'Aeneis', 'Odüsszeia', 'Átváltozások'],
          answer: 2,
          explanation:
            'Az Odüsszeia a hős hazatérését meséli el; az Iliász Akhilleuszé, az Aeneis Aeneasé.',
        },
        {
          question: 'Ki írta az *Aeneist*?',
          options: ['Horatius', 'Homérosz', 'Ovidius', 'Vergilius'],
          answer: 3,
          explanation:
            'Az *Aeneis* a római nemzeti eposz, szerzője Vergilius; Horatius ódaköltő, Ovidius az Átváltozásokat írta.',
        },
        {
          question: 'Melyik gondolat kötődik Horatiushoz?',
          options: [
            'az arany középszer és a carpe diem',
            'a hazatérés vágya',
            'a száműzött költő panasza',
            'a pásztorköltészet Arkádiája',
          ],
          answer: 0,
          explanation:
            'Az *aurea mediocritas* és a *carpe diem* Horatius ódáinak jellegzetes tanításai. A száműzetés Ovidius, az Arkádia Vergilius témája.',
        },
        {
          question: 'Mi a közös témája Ovidius *Átváltozások* című művének?',
          options: [
            'a trójai háború',
            'Róma alapítása',
            'az átváltozás mint mitológiai motívum',
            'a földművelés',
          ],
          answer: 2,
          explanation:
            'Az Átváltozások mítoszai mind az alakváltozás motívuma köré épülnek, a világ keletkezésétől Ovidius koráig.',
        },
        {
          question: 'Mi a *toposz*?',
          options: [
            'egy versforma',
            'egy műfaj neve',
            'a hagyományban újra és újra felbukkanó gondolati–képi közhely',
            'egy költői eszköz a hangzás számára',
          ],
          answer: 2,
          explanation:
            'A toposz állandósult témakör vagy képsor (pl. az idilli Arkádia, a költői halhatatlanság), amely korszakról korszakra új változatokban jelenik meg.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Homérosz', url: wiki('Homérosz') },
        { label: 'Wikipédia: Horatius', url: wiki('Horatius költő') },
        { label: 'Wikipédia: Ovidius Átváltozások', url: wiki('Átváltozások Ovidius') },
      ],
    },
    {
      id: 'vilagirodalom-biblia',
      subject: 'magyar',
      unitId: 'vilagirodalom',
      title: 'A Biblia: Ószövetség, Újszövetség és motívumai',
      level: 'kozep',
      requirement: {
        kozep:
          'Az európai irodalom alapvető hagyományai: az antikvitás és a Biblia (pl. műfajok, témák, motívumok, hőstípusok); műrészletek értelmezése.',
        emelt:
          'Műveket összekötő motivikus összefüggések, archetípusok; a motívumok továbbélése; az intertextualitás példái.',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **Biblia** (görögül „könyvek”) a zsidó–keresztény hagyomány szent könyvgyűjteménye: **Ószövetség** és **Újszövetség**.',
            'Az Ószövetség három nagy egysége: a **Törvény** (Tóra, az első öt könyv), a **Próféták** és az **Iratok** (pl. Zsoltárok, Jób, Példabeszédek, Prédikátor, Énekek éneke).',
            'Az Újszövetség 27 könyve: **négy evangélium** (Máté, Márk, Lukács, János), az Apostolok cselekedetei, levelek, a **Jelenések könyve**.',
            'Műfajok: teremtésmítosz, törzsi történetek, törvény, **zsoltár**, **példabeszéd**, **prófétai** beszéd, **példázat**, evangélium, levél, apokalipszis.',
            'Alapmotívumok: **teremtés, bűnbeesés, vízözön, Bábel, kivonulás, megváltás, passió, apokalipszis**; archetípusok: Ádám, Éva, Káin és Ábel, Noé, Ábrahám, Mózes, Jób, Jónás, Jézus.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'zsoltár',
              text: 'Isten dicsőítésére, panaszra vagy könyörgésre szolgáló vallásos énekek; a Zsoltárok könyve (hagyományosan Dávid királyhoz kötik).',
            },
            {
              term: 'példázat',
              text: 'Rövid, hasonlatszerű történet, amelynek erkölcsi vagy vallási tanulsága van (pl. a tékozló fiú, a jó szamaritánus).',
            },
            {
              term: 'evangélium',
              text: 'Jelentése „örömhír”; Jézus életét és tanítását elbeszélő újszövetségi szöveg.',
            },
            {
              term: 'apokalipszis',
              text: 'A világ végének látomásos ábrázolása (Jelenések könyve).',
            },
            {
              term: 'bibliai motívum',
              text: 'Az irodalomban újra és újra felbukkanó, a Bibliából származó téma vagy kép, pl. paradicsom, bűnbeesés, kivonulás.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ószövetség' },
        {
          kind: 'text',
          text: 'Az Ószövetség a zsidó nép és Isten **szövetségének** története. A **Teremtés könyve** (Genezis) a világ teremtésével kezdődik: *„Kezdetben teremté Isten az eget és a földet.”* (Károli-fordítás.) Ide tartozik Ádám és Éva **bűnbeesése** és a **kiűzetés a paradicsomból**, Káin és Ábel története (az első testvérgyilkosság), a **vízözön** és Noé bárkája, a **bábeli** toronyépítés, majd Ábrahám elhívása. A **Kivonulás könyve** (Exodus) Mózes vezetésével az egyiptomi szolgaságból való szabadulást, a Sínai-hegyi törvényadást (a tízparancsolat) beszéli el.',
        },
        {
          kind: 'text',
          text: 'Az **Iratok** a líra és a bölcsességirodalom tárháza. A **Zsoltárok** a vallásos líra mintái, a **Példabeszédek** és a **Prédikátor könyve** a tapasztalati bölcsességet gyűjti össze (a Prédikátor a világ hiábavalóságáról, „minden hiábavalóság” szemléletéről szól). Az **Énekek éneke** szerelmi költemény-gyűjtemény. A **Jób könyve** az igaz ember értelmetlennek tűnő szenvedését járja körül: miért bünteti Isten az ártatlant? A **Jónás könyve** a próféta engedetlenségéről és Isten irgalmáról szól (a cet gyomrában töltött napok).',
        },
        { kind: 'heading', text: 'Újszövetség' },
        {
          kind: 'text',
          text: 'Az Újszövetség Jézus Krisztus születésétől, tanításától, **szenvedésétől (passió), halálától és feltámadásától** szól, amit a négy **evangélium** eltérő hangsúllyal beszél el. Jézus tanítása legtöbbször **példázatokban** és a **Hegyi beszédben** (boldogmondások, szeretetparancs) jelenik meg. Az **Apostolok cselekedetei** és Pál apostol **levelei** az első keresztény közösségek életét és hitét mutatják be, a **Jelenések könyve** (apokalipszis) az utolsó ítéletről és az új világról szól. János evangéliuma így kezdődik: *„Kezdetben vala az Ige…”* (Károli), a **Logosz** a teremtés és a megváltás szava.',
        },
        {
          kind: 'compare',
          title: 'Ószövetség és Újszövetség',
          columns: ['Ószövetség', 'Újszövetség'],
          rows: [
            {
              label: 'Alapgondolat',
              cells: [
                'Isten és a választott nép szövetsége, a törvény',
                'Krisztus megváltása, a szeretet parancsa',
              ],
            },
            {
              label: 'Jellegzetes műfajok',
              cells: [
                'teremtésmítosz, törzsi történetek, törvény, zsoltár, prófétai beszéd',
                'evangélium, példázat, levél, apokalipszis',
              ],
            },
            {
              label: 'Hőstípus',
              cells: [
                'patriarcha (Ábrahám), törvényhozó vezér (Mózes), próféta, szenvedő igaz (Jób)',
                'a tanító és megváltó Krisztus, az apostol, a vértanú',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Bibliai motívumok az irodalomban' },
        {
          kind: 'text',
          text: 'A bibliai történetek az európai és a magyar irodalom **motívumkincsét** adják: a paradicsom és a bűnbeesés (Madách Imre: *Az ember tragédiája*, első színe a paradicsomban játszódik), a **vízözön**, a **Bábel**, a **tékozló fiú**, az **utolsó vacsora**, a **Golgota**. A magyar irodalomban Babits Mihály *Jónás könyve* (1938) a bibliai próféta történetét a **költői küldetés**, a felelősség és az engedetlenség kérdéseire fordítja; a Biblia nyelve hat a *Szózat*ra és a *Himnuszra* is. A Bibliát magyarul Károli Gáspár fordításában, a **Vizsolyi Bibliában** (1590) olvasta a magyar kultúra évszázadokon át.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelten a **motívumok továbbélését** és az **intertextualitást** (szövegek közötti utalást) is elemezni kell: pl. hogyan alakul át a bűn és bűnhődés bibliai gondolata Dosztojevszkijnál, a feltámadás és az újjászületés motívuma a Bűn és bűnhődés zárlatában, a Jónás-történet Babitsnál. Fontos az **archetípus** fogalma is (olyan ősminta, mint Káin, Ádám, a megváltó, a bűnbak), amely a mítoszokban és a Bibliában is felismerhető.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Bibliai részlet (pl. teremtés, Jób, példázat) műfajának és gondolatának felismerése az irodalmi feladatlapon.',
            'Szóbeli tétel: a Biblia mint az európai irodalom alapja: műfajok, motívumok, hőstípusok; kapcsolat egy magyar műhöz.',
            'Motívumvizsgálat: ugyanaz a bibliai motívum két műben (pl. bűn és bűnhődés, kiűzetés, út, vándorlás).',
          ],
        },
        {
          kind: 'example',
          title: 'Mintavázlat: a Jób-történet értelmezése',
          problem: 'Foglald össze, mi a Jób könyve kérdése, és mi az emberi tanulság.',
          solution:
            '**Helyzet**: Jób igaz, vallásos ember, mégis elveszíti vagyonát, családját, egészségét.\n**Kérdés**: miért szenved az igaz? A barátok szerint a szenvedés a bűn büntetése, Jób ezt tagadja.\n**Megoldás**: Isten nem magyarázza meg, hanem a Teremtő hatalmára mutat; az ember nem érti Isten terveit, de bízhat benne.\n**Műfaj, jelentés**: bölcsességirodalom, párbeszédes költemény; a **théodiceia** (Isten igazságossága) kérdése.\n**Továbbélés**: a szenvedő igaz archetípusa az irodalomban sokszor visszatér.',
        },
        {
          kind: 'warning',
          text: 'A „Biblia” nem csak vallási szöveg a vizsgán: **irodalomként** kell kezelni, a műfajokat, a képeket és a motívumokat elemezve. Ne hitvallást mondj, hanem értelmezést.',
        },
      ],
      topicMatch: ['világirodalom'],
      cards: { subject: 'magyar', era: 'antik' },
      quiz: [
        {
          question: 'Melyik az Újszövetség négy evangélistája közül nem?',
          options: ['Máté', 'Márk', 'Pál', 'János'],
          answer: 2,
          explanation:
            'Az evangélisták Máté, Márk, Lukács és János. Pál apostol az Újszövetség leveleinek szerzője.',
        },
        {
          question: 'Melyik bibliai könyv foglalkozik a szenvedő igaz ember kérdésével?',
          options: ['Jób könyve', 'Énekek éneke', 'Kivonulás könyve', 'Jelenések könyve'],
          answer: 0,
          explanation:
            'Jób könyve azt kérdezi, miért szenved az igaz. Az Énekek éneke szerelmi költészet, a Jelenések könyve apokalipszis.',
        },
        {
          question: 'Mit jelent az *evangélium* szó?',
          options: ['törvény', 'örömhír', 'látomás', 'bölcs mondás'],
          answer: 1,
          explanation: 'Az evangélium görög eredetű szó, jelentése „örömhír”.',
        },
        {
          question: 'Melyik nem bibliai alapmotívum?',
          options: ['vízözön', 'bűnbeesés', 'a trójai faló', 'kivonulás'],
          answer: 2,
          explanation: 'A trójai faló az antik (trójai) mondakör része, nem a Bibliáé.',
        },
        {
          question: 'Melyik magyar művet ihlette a bibliai Jónás története?',
          options: [
            'Madách: *Az ember tragédiája*',
            'Babits: *Jónás könyve*',
            'Petőfi: *Az apostol*',
            'Arany: *Toldi*',
          ],
          answer: 1,
          explanation:
            'Babits Mihály *Jónás könyve* (1938) a bibliai próféta történetét újraírja, a költői küldetés kérdéseivel.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Biblia', url: wiki('Biblia') },
        { label: 'Wikipédia: Vizsolyi Biblia', url: wiki('Vizsolyi Biblia') },
        { label: 'Wikipédia: Jób könyve', url: wiki('Jób könyve') },
      ],
    },
    {
      id: 'vilagirodalom-romantika',
      subject: 'magyar',
      unitId: 'vilagirodalom',
      title: 'Romantika: Goethe, Byron, Puskin, Hugo, Poe',
      level: 'kozep',
      requirement: {
        kozep:
          'További választható korszak: a romantika; a korszak jellemzőinek és egy-két kiemelkedő alkotásának bemutatása; a világlátás és a kifejezésmód sajátosságainak bemutatása; műrészletek értelmezése.',
        emelt:
          'Művek értelmezése a korszak szellemi irányzataival, a korstílussal való összefüggésben (műfaji sajátosságok, téma, kompozíció, stílustörténeti vonatkozások).',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **romantika** a 18–19. század fordulóján alakult ki, a felvilágosodás racionalizmusára adott válaszként: az **érzelem, a képzelet, az egyéniség és a szabadság** kerül előtérbe.',
            'Jellegzetes témák: a nemzet és a **népköltészet**, a múlt (középkor), a távoli és a fenséges táj, a **démonikus**, az éjszaka, a halál, a lázadás.',
            '**Goethe** *Faust* (I. rész 1808, II. rész 1832): drámai költemény az emberi törekvésről és a megismerésről.',
            '**Byron** a **byroni hős** (magányos, lázadó, kiábrándult) megteremtője (*Childe Harold*, *Don Juan*); **Puskin** *Jevgenyij Anyegin* című verses regénye az orosz irodalom alapműve.',
            '**Victor Hugo** a francia romantika vezére (*A Notre-Dame-i toronyőr*, *A nyomorultak*); **Poe** a fantasztikus és a hátborzongató novella és a vers mestere (*A holló*).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'byroni hős',
              text: 'Magányos, lázadó, sorsával dacoló, kiábrándult hős, aki szembeszáll a társadalommal.',
            },
            {
              term: 'felesleges ember',
              text: 'Orosz irodalmi típus (pl. Anyegin): tehetséges, de a társadalomban helyét és célját nem találó, tétlen férfi.',
            },
            {
              term: 'verses regény',
              text: 'Regényes cselekményű, de versben írt elbeszélés (Puskin: *Jevgenyij Anyegin*).',
            },
            {
              term: 'drámai költemény',
              text: 'Elsősorban olvasásra szánt, filozofikus, nagy ívű drámai szöveg (Goethe: *Faust*).',
            },
            {
              term: 'groteszk',
              text: 'A fenséges és a rút, a tragikus és a komikus együtt (Victor Hugo felfogásában a romantikus művészet jellemzője).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A romantika világlátása' },
        {
          kind: 'text',
          text: 'A romantika szerint a világ nem csak ésszel fogható fel: a művészt a **képzelet, a titok és az érzelem** vezeti. Az individuum, a zseni kultusza, a **természet** mint lélekkel teli jelenség, a **nemzet** és a népköltészet felfedezése, a **történelmi múlt** (különösen a középkor) iránti vonzalom jellemző. A műfajok keverednek, a stílus változatos, gyakori a **kettősség** (jó–rossz, fenséges–groteszk, álom–valóság) és az irónia.',
        },
        { kind: 'heading', text: 'Goethe: Faust' },
        {
          kind: 'text',
          text: '**Johann Wolfgang von Goethe** (1749–1832) élete főművét hosszú évtizedeken át írta. A **Faust** ihletője a XVI. századi Faust-monda. Cselekménye: a **mennyei prológusban** Isten és **Mefisztó** fogadást köt Faust lelkére: az ember „tévelyeg, amíg törekszik”, de vajon el lehet-e téríteni a jóról? A kiábrándult tudós, Faust, szerződést köt Mefisztóval: ha valaha megállítaná a pillanatot, a lelke az ördögé lesz. Az I. részben megtapasztalja az ifjúságot és a szerelmet, **Margitot (Gretchent)** elcsábítja, a lány tragikus sorsa (gyermekgyilkosság, a börtön) lesz a rész súlypontja. A II. részben Faust a szépség (Heléna), a hatalom és a nagy alkotás (földterület visszahódítása a tengertől) világán halad át; a végén meghal, de lelke **megmenekül**, mert az örök törekvés megváltja.',
        },
        {
          kind: 'keypoints',
          title: 'A Faust üzenete',
          items: [
            'Az ember lényege a **törekvés**: a tévelygés a keresés része.',
            'A **faust-i hős** soha nem elégszik meg a megismerés korlátaival.',
            'A tudás, a szerelem és az alkotás nem hoz végső boldogságot, de az embert előbbre viszi.',
            'A mű műfaja **drámai költemény**, több versformát és hangnemet vegyít.',
          ],
        },
        { kind: 'heading', text: 'Byron' },
        {
          kind: 'text',
          text: '**George Gordon Byron** (1788–1824) angol költő, a görög szabadságharc támogatójaként halt meg Missolonghiban. A *Childe Harold zarándokútja* és a *Don Juan* hőse a **világfájdalommal** küzdő, lázadó, magányos alak; az ő nevét viseli a **byroni hős** típusa. Sok magyar költőre hatott (pl. Petőfire és Vörösmartyra).',
        },
        { kind: 'heading', text: 'Puskin: Jevgenyij Anyegin' },
        {
          kind: 'text',
          text: '**Alekszandr Szergejevics Puskin** (1799–1837) *Jevgenyij Anyegin* című **verses regénye** (1823–1831 között írta, a teljes kiadás 1833-ban jelent meg) az orosz irodalom alapműve. A szerkezet az **Anyegin-strófa**: 14 soros, jambikus tetraméteres versszak, rímképlete ababccddeffegg. Anyegin a világot megúnt **felesleges ember**; elutasítja **Tatjána** szerelmét, majd párbajban megöli barátját, **Lenszkijt**, évekkel később viszont ő szeret bele a megházasodott Tatjánába, aki hűséges marad férjéhez. A narrátor ironikus, és gyakran kilép a történetből.',
        },
        { kind: 'heading', text: 'Hugo és Poe' },
        {
          kind: 'people',
          items: [
            {
              name: 'Victor Hugo (1802–1885)',
              text: 'A francia romantika vezéralakja. A *Cromwell* előszava (1827) a romantikus dráma programja (a fenséges és a groteszk keveredése). Regényei: *A Notre-Dame-i toronyőr* (1831), *A nyomorultak* (1862): a társadalmi igazságtalanság és az emberi jóság nagy regénye; hőse Jean Valjean.',
            },
            {
              name: 'Edgar Allan Poe (1809–1849)',
              text: 'Amerikai költő és novellista. *A holló* (1845) refrénje a „nevermore” (soha többé); novellái (*Az Usher-ház vége*, 1839) a hátborzongató és a lélek mélységeit tárják fel. A *Morgue utcai kettős gyilkosság* (1841) a **detektívtörténet** őse. Elméleti írásai szerint a műnek egységes hatást kell kelteni.',
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelten a **korstílussal való összefüggést** is kérik: a *Faust* a felvilágosodás és a romantika határán áll (Sturm und Drang → weimari klasszika → romantika), ezért tudás és érzelem, ész és szenvedély feszültsége jellemzi. Az *Anyegin* a romantikus hős **ironikus megkérdőjelezése**, a realizmus felé vezető út. A magyar romantikával (Petőfi, Vörösmarty, Madách) való kapcsolat is vizsgálható: pl. a Faust és *Az ember tragédiája* (Ádám–Lucifer kettőssége, az emberi törekvés kérdése).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műrészlet elemzése: pl. Faust és Mefisztó szerződése, Anyegin és Tatjána levele/találkozása, A holló egy részlete.',
            'Hőstípus-vizsgálat: faust-i hős, byroni hős, felesleges ember.',
            'Korszakjellemzők megnevezése és példával való igazolása („Mutasd be, mi romantikus a műben!”).',
          ],
        },
        {
          kind: 'example',
          title: 'Mintavázlat: mi romantikus a Faustban?',
          problem:
            'Indokold, hogy a Faust miért tartozik a romantikához (vagy annak előzményeihez).',
          solution:
            '**Egyéniség**: Faust a határokat feszegető, elégedetlen, zseniális alkotó.\n**Kettősség**: Isten–ördög, jó–rossz, tudás–érzelem, a lélek két oldala.\n**Középkori–mondai anyag**: a Faust-monda, szellemvilág, ördögszerződés.\n**Formai szabadság**: drámai költemény, változó versforma.\n**Gondolati ív**: az embert a törekvés viszi előre; a világ végső értelme nem a nyugalom, hanem a tevékeny élet.\n**Zárás**: a Faust a romantika és a világirodalom egyik kulcsműve.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd a *Faustot* a magyar *Az ember tragédiájá*val: bár rokonok, Madách műve **magyar** dráma (1861); a Goethe-mű **német** drámai költemény. Hasonlóan: Puskin *Anyegin*je **verses regény**, nem dráma.',
        },
      ],
      topicMatch: ['=romantika', 'világirodalom'],
      cards: { subject: 'magyar', era: 'romantika' },
      quiz: [
        {
          question: 'Ki a *Faust* szerzője?',
          options: ['Schiller', 'Heine', 'Hugo', 'Goethe'],
          answer: 3,
          explanation: 'A *Faust* Johann Wolfgang von Goethe főműve (I. rész 1808, II. rész 1832).',
        },
        {
          question: 'Milyen műfajú Puskin *Jevgenyij Anyeginje*?',
          options: ['verses regény', 'tragédia', 'novella', 'ballada'],
          answer: 0,
          explanation:
            'A mű versben írt regény, 14 soros Anyegin-strófákból áll (jambikus tetraméter).',
        },
        {
          question: 'Melyik a byroni hős jellemzője?',
          options: [
            'beilleszkedő polgár',
            'magányos, lázadó, kiábrándult',
            'derűs gazdálkodó',
            'hűséges alattvaló',
          ],
          answer: 1,
          explanation:
            'A byroni hős világfájdalmas, dacos magányos alak, aki szembeszáll a társadalommal.',
        },
        {
          question: 'Melyik Poe-vers refrénje a „nevermore”?',
          options: ['Az Usher-ház vége', 'A holló', 'Morgue utca', 'Don Juan'],
          answer: 1,
          explanation:
            '*A holló* (1845) kísérteties refrénje a „nevermore” (soha többé); a többi cím nem vers.',
        },
        {
          question: 'Mit jelent a „felesleges ember” az orosz irodalomban?',
          options: [
            'A szegény parasztot.',
            'A tehetséges, de céltalan, tétlen főhőst.',
            'A cárt szolgáló katonát.',
            'A mesebeli bolondot.',
          ],
          answer: 1,
          explanation:
            'Anyegin tipikus „felesleges ember”: művelt, tehetséges, de a társadalomban nem talál célt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Faust (Goethe)', url: wiki('Faust Goethe') },
        { label: 'Wikipédia: Jevgenyij Anyegin', url: wiki('Jevgenyij Anyegin') },
        { label: 'Wikipédia: Romantika', url: wiki('Romantika irodalom') },
      ],
    },
    {
      id: 'vilagirodalom-realizmus',
      subject: 'magyar',
      unitId: 'vilagirodalom',
      title: 'Realizmus: Balzac, Stendhal, Flaubert, Dosztojevszkij, Tolsztoj',
      level: 'kozep',
      requirement: {
        kozep:
          'További választható korszak: a realizmus; a korszak jellemzőinek és egy-két kiemelkedő alkotásának bemutatása; a világlátás és a kifejezésmód sajátosságainak bemutatása egy-két mű értelmezésével; műrészletek értelmezése.',
        emelt:
          'Művek értelmezése a korszak szellemi irányzataival, a korstílussal való összefüggésben; műfajtörténeti, regényformák szempontjai.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **realizmus** a 19. század közepén a romantikával szemben a **valóság hű, tárgyilagos** ábrázolására törekszik; főműfaja a **nagyregény**.',
            'Jellemzői: **társadalmi környezet** részletes rajza, **típusok**, ok–okozati összefüggések, a szereplők lélektani hitelessége, mindentudó vagy tárgyilagos elbeszélő.',
            '**Stendhal** (*Vörös és fekete*, 1830) és **Balzac** (*Emberi színjáték*, benne a *Goriot apó*) a francia realizmus elindítói.',
            '**Flaubert** *Bovaryné* (1857) a lélektani regény és a tárgyilagos elbeszélés mintája; **Dosztojevszkij** *Bűn és bűnhődés* (1866) és **Tolsztoj** *Háború és béke*, *Anna Karenina* az orosz realizmus csúcsa.',
            'Alapkérdések: pénz, karrier, társadalmi helyzet, **bűn és bűnhődés**, erkölcsi felelősség.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'típus',
              text: 'Egy társadalmi csoportra vagy lelki alkatra jellemző, általánosított szereplő (pl. Rastignac, a karrierista fiatalember).',
            },
            {
              term: 'nagyregény',
              text: 'Terjedelmes, a társadalom egészét átfogó, sok szereplős regény.',
            },
            {
              term: 'mindentudó elbeszélő',
              text: 'Olyan narrátor, aki a szereplők gondolatait és a háttérüket is ismeri.',
            },
            {
              term: 'lélektani regény',
              text: 'A cselekmény mellett a szereplő belső világát, motivációit részletesen ábrázoló regény.',
            },
            {
              term: 'polifónia',
              text: 'Több, egyenrangú tudat és világnézet megszólaltatása a regényben (a Dosztojevszkij-regények jellemzője, Bahtyin fogalma).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A realizmus jellemzői' },
        {
          kind: 'text',
          text: 'A realista író a **kortárs társadalmat** vizsgálja: a környezet (város, család, pénz, hivatal) meghatározza a szereplők sorsát. A szereplők **típusok**, de egyszerre hiteles egyéniségek is. A romantikus hős helyét a hétköznapi, a társadalomban boldogulni vagy bukni készülő ember veszi át. A mű szerkezete általában **ok-okozati**, a cselekmény a környezetből következik. Az elbeszélő a mindentudó (Balzac, Tolsztoj), vagy a tárgyilagosságra törekszik (Flaubert).',
        },
        { kind: 'heading', text: 'A francia realizmus' },
        {
          kind: 'people',
          items: [
            {
              name: 'Honoré de Balzac (1799–1850)',
              text: 'Az **Emberi színjáték** (La Comédie humaine) több tucat regényből és novellából álló műsorozata a francia társadalom egészét akarja bemutatni. A *Goriot apó* (1835) főhőse a lányaiért mindent feláldozó idős, egykori tésztakereskedő, akit a lányai elhagynak; a fiatal **Rastignac** a temetés után Párizsra tekintve párbajra hívja a várost („Most már mi ketten!”): ezzel indul a karrierista típus. A pénz hatalma az egyik központi téma.',
            },
            {
              name: 'Stendhal (1783–1842)',
              text: 'A *Vörös és fekete* (1830) hőse **Julien Sorel**, egy vidéki fűrésztelep-tulajdonos fia, aki a papi pálya és a katonai életpálya (a vörös és a fekete) között választva ambícióval küzd fel a társadalmi ranglétrán, de a becsvágya miatt bukik el; lélektani pontosság jellemzi.',
            },
            {
              name: 'Gustave Flaubert (1821–1880)',
              text: 'A *Bovaryné* (1857) Emma Bovary története, aki a romantikus regények által táplált vágyak és a vidéki házasság szürkesége között tönkremegy (adósságok, házasságtörés, öngyilkosság). Flaubert a **tárgyilagos, személytelen** elbeszélés híve, a **szabad függő beszéd** mestere. A regény miatt a szerzőt erkölcsbíróság elé állították.',
            },
          ],
        },
        { kind: 'heading', text: 'Az orosz realizmus' },
        {
          kind: 'people',
          items: [
            {
              name: 'Fjodor Mihajlovics Dosztojevszkij (1821–1881)',
              text: 'A **Bűn és bűnhődés** (1866) hőse **Raszkolnyikov**, szegény joghallgató Szentpéterváron. Elméletet gyárt a „rendkívüli emberről”, akinek joga van átlépni az erkölcsi törvényeken, és megöl egy uzsorás öregasszonyt (Aljona Ivanovna), majd annak húgát is. A bűntett után a lelkiismeret-furdalás, a **Porfirij** nyomozó lélektani párbajai és **Szonya** önfeláldozó, hitből élő szerelme vezetik a **vallomáshoz** és a szibériai bűnhődéshez, ahol a feltámadás, a megtisztulás reménye nyílik meg. Dosztojevszkij másik főműve *A Karamazov testvérek* (1880).',
            },
            {
              name: 'Lev Nyikolajevics Tolsztoj (1828–1910)',
              text: 'A **Háború és béke** (1865–1869) a napóleoni háborúk korának orosz társadalmát mutatja be családok és történelmi események szövedékében; az **Anna Karenina** (1870-es évek) a házasságtörés és a társadalmi képmutatás regénye: Anna szenvedélye és a társadalmi ítélet összeütközik, a mű tragikusan végződik, Levin története pedig az emberi lét értelmét keresi.',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Dosztojevszkij és Tolsztoj',
          columns: ['Dosztojevszkij', 'Tolsztoj'],
          rows: [
            {
              label: 'Középpont',
              cells: [
                'a lélek, a bűn és az erkölcsi tépelődés',
                'a társadalom, a család és a történelem',
              ],
            },
            {
              label: 'Szerkezet',
              cells: [
                'eszmék, párbeszédek, polifónia',
                'széles epikai ábrázolás, részletgazdag kép',
              ],
            },
            {
              label: 'Alapkérdés',
              cells: ['van-e jogom a bűnhöz?', 'hogyan éljek helyesen, mi az élet értelme?'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelten a **regényformákat és regénytípusokat** is vizsgálni lehet: nevelődési regény, lélektani regény, társadalmi nagyregény, eszmeregény. Érdemes elhelyezni a realizmust a **romantika és a naturalizmus** között (a naturalizmus: Zola, a determinizmus és a biológiai–társadalmi meghatározottság hangsúlya), valamint a magyar realizmussal (Jókai–Mikszáth–Móricz) való összefüggéseit.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A *Bűn és bűnhődés* mint a „bűn és bűnhődés” motívum fő világirodalmi példája: összehasonlítható magyar művekkel.',
            'Realista hőstípusok (Rastignac, Julien Sorel, Emma Bovary, Raszkolnyikov) bemutatása.',
            'Műrészlet elemzése: az elbeszélő, a nézőpont, a környezetrajz, a lélektani ábrázolás.',
          ],
        },
        {
          kind: 'example',
          title: 'Mintavázlat: a Bűn és bűnhődés bűn-felfogása',
          problem: 'Mutasd be, hogyan értelmezi a regény a bűn és a bűnhődés kérdését.',
          solution:
            '**Kiindulás**: Raszkolnyikov elmélete („rendkívüli ember”) szerint a nagy célért szabad ölni.\n**Bűn**: a gyilkosság nem tisztán racionális tett, hanem lelki katasztrófa.\n**Bűnhődés**: nem elsősorban a törvény, hanem a lelkiismeret kínja és az elszigetelődés; Porfirij nyomozása, Szonya hite.\n**Út a megtisztuláshoz**: a vallomás és a szibériai száműzetés után kezdődik a feltámadás reménye.\n**Zárás**: a regény az embert erkölcsi lényként ábrázolja, aki nem élhet a lelkiismeretén kívül.',
        },
        {
          kind: 'warning',
          text: 'Ne a cselekményt mesélj el! A vizsga a **jelentést** kéri: miért követi el a hős a tettet, mit fejez ki a bűntudat, hogyan jelenik meg Szonya mint ellenpólus. A realizmus jellemzőit mindig bizonyítsd konkrét szövegrésszel.',
        },
        {
          kind: 'tip',
          text: 'Ha egy realista regényről kérdeznek, használd a hármast: **társadalmi háttér** – **hős (típus)** – **elbeszélői eljárás**. Ez a váz majdnem minden realista műre ráillik.',
        },
      ],
      topicMatch: ['=realizmus', 'világirodalom'],
      cards: { subject: 'magyar', era: 'realizmus' },
      quiz: [
        {
          question: 'Ki Raszkolnyikov alkotója?',
          options: ['Tolsztoj', 'Dosztojevszkij', 'Puskin', 'Csehov'],
          answer: 1,
          explanation:
            'Raszkolnyikov a *Bűn és bűnhődés* főhőse, a regény szerzője Dosztojevszkij.',
        },
        {
          question: 'Melyik Balzac nagy műsorozatának címe?',
          options: ['Emberi színjáték', 'Isteni színjáték', 'Rougon-Macquart', 'Nyomorultak'],
          answer: 0,
          explanation:
            'Az *Emberi színjáték* (La Comédie humaine) Balzac regényciklusa; az *Isteni színjáték* Danténak, *A nyomorultak* Hugónak a műve.',
        },
        {
          question: 'Mi jellemzi a realista regényt?',
          options: [
            'a valóság hű, társadalmi hátterű ábrázolása',
            'mesei, fantasztikus hősök',
            'versben írt elbeszélés',
            'az érzelmek elkerülése a művekben',
          ],
          answer: 0,
          explanation:
            'A realizmus a kortárs társadalom hiteles ábrázolására törekszik, típusokkal és ok-okozati cselekménnyel.',
        },
        {
          question: 'Melyik regény főszereplője Emma Bovary?',
          options: ['Anna Karenina', 'A Notre-Dame-i toronyőr', 'Bovaryné', 'Vörös és fekete'],
          answer: 2,
          explanation:
            'Emma Bovary Flaubert regényének, a *Bovarynénak* hősnője; Anna Karenina Tolsztoj regényének főszereplője.',
        },
        {
          question: 'Melyik fogalom kapcsolódik Dosztojevszkij regényeihez?',
          options: [
            'időmértékes verselés',
            'polifónia (több egyenrangú nézőpont)',
            'komikus eposz',
            'verses regény',
          ],
          answer: 1,
          explanation:
            'Bahtyin Dosztojevszkij prózáját polifonikusnak nevezte: több egyenrangú tudat és eszme szól benne.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Bűn és bűnhődés', url: wiki('Bűn és bűnhődés') },
        { label: 'Wikipédia: Bovaryné', url: wiki('Bovaryné') },
        { label: 'Wikipédia: Realizmus (irodalom)', url: wiki('Realizmus irodalom') },
      ],
    },
    {
      id: 'vilagirodalom-modernseg-20-szazad',
      subject: 'magyar',
      unitId: 'vilagirodalom',
      title: 'Századfordulós modernség és a 20. század: Baudelaire–Kafka–Orwell',
      level: 'kozep',
      requirement: {
        kozep:
          'További választható korszakok: a századfordulós modernség a szimbolizmustól az avantgárdig, a 20. század; a korszak jellemzőinek és egy-két kiemelkedő alkotásának bemutatása; a világlátás és a kifejezésmód sajátosságainak bemutatása; műrészletek értelmezése.',
        emelt:
          'További választható korszakok: avantgárd és a 20. század első fele, a 20. század második fele és kortárs világirodalom; művek értelmezése a korstílussal való összefüggésben.',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **modernség** a 19. század közepétől a világ és az ember válságát, az elidegenedést, a nyelv és a forma megújítását hozza.',
            'A **szimbolizmus**: **Baudelaire** (*A rossz virágai*, 1857), **Verlaine**, **Rimbaud**. A költészet a hangulatot, a zeneiséget, a szimbólumot és az „összhangot” (correspondances) keresi.',
            'Az **avantgárd** (futurizmus, dadaizmus, expresszionizmus, szürrealizmus) szakít a hagyománnyal, kísérletezik a nyelvvel és a formával.',
            'A 20. század prózája: **Kafka** (*Az átváltozás*, 1915) az elidegenedett, értelmetlen világot, **Thomas Mann** a polgári világ válságát, **Orwell** a totalitárius diktatúrát ábrázolja (*Állatfarm*, 1945; *1984*, 1949).',
            'Fontos témák: **elidegenedés, magány, bűntudat, a hatalom és az egyén, a háború és a diktatúra tapasztalata**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'szimbolizmus',
              text: 'A látható világ mögötti, sejtetett jelentést kifejező irányzat; a kép jelképpé válik, a vers hangulatot és zenét közvetít.',
            },
            {
              term: 'szinesztézia',
              text: 'Különböző érzékterületek összekapcsolása (pl. színek és hangok), a szimbolizmus kedvelt eszköze.',
            },
            {
              term: 'elidegenedés',
              text: 'Az egyén kapcsolatának megszakadása a világgal, a másik emberrel, önmagával.',
            },
            {
              term: 'antiutópia',
              text: 'Olyan jövőkép, amely a tökéletesnek mutatott társadalom borzalmait ábrázolja (Orwell: *1984*).',
            },
            {
              term: 'parabola',
              text: 'Példázatszerű mű, amelynek története egy általánosabb igazságra utal (Kafka, Orwell: *Állatfarm*).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szimbolizmus: Baudelaire, Verlaine, Rimbaud' },
        {
          kind: 'people',
          items: [
            {
              name: 'Charles Baudelaire (1821–1867)',
              text: 'Az **A rossz virágai** (Les Fleurs du mal, 1857) a modern költészet nyitánya: a nagyváros, a **spleen** (lelki sivárság), az ideál utáni vágy, a szépség és a rút kettőssége. Az *Összhang* (Correspondances) kezdete: *„La Nature est un temple où de vivants piliers…”*: a természet templom, a világ jelei megfelelnek egymásnak, a hangok, színek és illatok összhangban vannak (**szinesztézia**). Az *Albatrosz* a költő kiszolgáltatott, kigúnyolt helyzetét fejezi ki. A kötet miatt a szerzőt és a kiadót perbe fogták erkölcsi okokból.',
            },
            {
              name: 'Paul Verlaine (1844–1896)',
              text: 'A zeneiség költője. Az *Art poétique* (Költészettan) híres elve: *„De la musique avant toute chose”* (zenét mindenekelőtt). Versei (pl. *Őszi chanson*) hangulatot, elmosódott képeket, ismétlődő hangzásokat használnak.',
            },
            {
              name: 'Arthur Rimbaud (1854–1891)',
              text: 'A látnok-költő (*„Je est un autre”*, „Én egy másik vagyok”) a költészetet a tudatos „dezorientáció” útján kívánja megújítani. Híres művei: a *Magánhangzók* (színek és hangok megfelelése), a *Részeg hajó* (a szabadság, a kalandvágy és a kiábrándulás képe), az *Egy évad a pokolban*. Rendkívül fiatalon abbahagyta az írást.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A szimbolista hatás Magyarországon a **Nyugat** költőit (Ady, Babits, Kosztolányi) alakította: Ady a szimbolista képalkotást és a kötetekbe szervezett kompozíciót vette át, Babits és Kosztolányi műfordítóként is közvetítette a francia költőket.',
        },
        { kind: 'heading', text: 'A 20. század prózája' },
        {
          kind: 'people',
          items: [
            {
              name: 'Franz Kafka (1883–1924)',
              text: 'Prágai német nyelvű zsidó író. **Az átváltozás** (Die Verwandlung, 1915) hőse **Gregor Samsa**, az utazó ügynök, aki egy reggel óriási féreggé (bogárrá) változva ébred. A család először gondoskodik róla, majd megundorodik, elszigeteli, végül a halála után megkönnyebbül. A mű tárgya az **elidegenedés**, a családi és a társadalmi elfogadás feltételessége, a bűntudat; a **realisztikus részletezés** és a fantasztikus helyzet kettőssége. A novella **parabola**: sokféleképpen értelmezhető. Híres regényei, *A per* és *A kastély*, a halála után jelentek meg.',
            },
            {
              name: 'Thomas Mann (1875–1955)',
              text: 'Német író, 1929-ben irodalmi Nobel-díjas. A **Buddenbrook-ház** (1901) egy észak-német kereskedőcsalád négy nemzedékének hanyatlása; a *Halál Velencében* (1912) a művész és a szépség kérdését vizsgálja; a *Varázshegy* (1924) nevelődési regény egy tüdőszanatóriumban, az európai polgári világ válságának jelképe; a *Doktor Faustus* (1947) a zeneszerző Leverkühn sorsán át a német történelem tragédiáját is értelmezi. A *Mario és a varázsló* (1930) a fasizmus lélektanát mutatja.',
            },
            {
              name: 'George Orwell (1903–1950)',
              text: 'Brit író. Az **Állatfarm** (1945) allegorikus meseregény: a farm állatai fellázadnak az emberi gazda ellen, de a hatalmat átvevő disznók új zsarnoksággá torzítják a forradalmat; a mű a sztálini diktatúra bírálata. Az **1984** (1949) **antiutópia**: Winston Smith a Nagy Testvér uralmának világában, Óceániában él, az Igazság Minisztériumában a múltat meghamisítja. Jellegzetes elemei: a **gondolatrendőrség**, az **újbeszél** (a nyelv szűkítése a gondolkodás korlátozására), a kettős gondolkodás, a kényszerű szerelem és az árulás. Jelmondat: *„War is peace. Freedom is slavery. Ignorance is strength.”*',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Két 20. századi látásmód',
          columns: ['Kafka: Az átváltozás', 'Orwell: 1984'],
          rows: [
            {
              label: 'Fenyegetés',
              cells: [
                'az ismeretlen, a családi–társadalmi kirekesztés',
                'a diktatúra és az ellenőrzés',
              ],
            },
            {
              label: 'Műfaj',
              cells: ['parabola, novella', 'antiutópia, regény'],
            },
            {
              label: 'Hős',
              cells: [
                'Gregor Samsa, a tehetetlen áldozat',
                'Winston Smith, a lázadó, aki végül megtörik',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Avantgárd** (emelt): a **futurizmus** (Marinetti manifesztuma, 1909), a **dadaizmus** (Zürich, 1916 körül), az **expresszionizmus**, a **szürrealizmus** (Breton kiáltványa, 1924) és **Apollinaire** kalligrammái a hagyományos költői forma lebontását jelzik. Fontos a **kiáltvány** műfaja és a formabontás (vizuális költészet, szabadvers, automatikus írás). A **20. század második fele és a kortárs** irodalom emelten választható korszak: pl. a diktatúra- és a lágertapasztalat (Szolzsenyicin: *Gulág szigetcsoport*), a posztmodern, az abszurd dráma (Beckett: *Godot-ra várva*), a latin-amerikai mágikus realizmus (García Márquez: *Száz év magány*, 1967).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Elidegenedés vagy kirekesztés motívuma: Az átváltozás + egy magyar mű (pl. novella vagy vers).',
            'Diktatúra, hatalom és nyelv: Orwell 1984 és Állatfarm bemutatása, esetleg összekötve magyar művekkel.',
            'Szimbolista vers (pl. Baudelaire) szimbólumainak, zeneiségének, szinesztéziájának felismerése.',
            'Emelten: avantgárd és kortárs világirodalmi művek korstílusba helyezése.',
          ],
        },
        {
          kind: 'example',
          title: 'Mintavázlat: Az átváltozás értelmezése',
          problem: 'Röviden értelmezd Kafka novelláját.',
          solution:
            '**Kiinduló helyzet**: Gregor Samsa egy reggel bogárrá változva ébred; a hős nyugodtan azon aggódik, hogyan jut el a munkahelyére.\n**Szerkezet**: három részre tagolódik; az átváltozás után Gregor egyre elszigeteltebb, a család egyre inkább kegyetlen, a halálát követően a család megkönnyebbül.\n**Jelentés**: az ember értéke a munkájától függ (a család a pénzkereső Gregort szerette); elidegenedés, kirekesztés, bűntudat. Több magyarázat (társadalmi, lélektani, egzisztenciális) lehetséges.\n**Elbeszélés**: hétköznapi, szenvedélymentes hang a fantasztikus eseményről: ettől lesz nyugtalanító.\n**Zárás**: a mű a 20. századi ember magányának és kiszolgáltatottságának jelképe.',
        },
        {
          kind: 'warning',
          text: 'Kafka művét ne minősítsd csak „furcsának”: írd le, **mit fejez ki** a bogárrá változás (kirekesztés, elidegenedés, az ember hasznosságra szűkítése). Ne keverd össze Orwell két művét: az *Állatfarm* allegória (mese), az *1984* antiutópia (regény).',
        },
        {
          kind: 'tip',
          text: 'A 20. századi művek mindegyikénél kérdezd meg: **mi történik az egyénnel, és mi a hatalom (család, állam, társadalom)?** Így kapcsolható össze Kafka, Orwell és több magyar mű is.',
        },
      ],
      topicMatch: ['kafka', 'orwell', 'világirodalom'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik Baudelaire főműve?',
          options: ['A rossz virágai', 'Bovaryné', 'Egy évad a pokolban', 'A holló'],
          answer: 0,
          explanation:
            'A rossz virágai (1857) Baudelaire kötete. Az Egy évad a pokolban Rimbaud műve.',
        },
        {
          question: 'Ki Gregor Samsa megalkotója?',
          options: ['Thomas Mann', 'Franz Kafka', 'George Orwell', 'Victor Hugo'],
          answer: 1,
          explanation: 'Gregor Samsa Kafka *Az átváltozás* című novellájának hőse.',
        },
        {
          question: 'Milyen műfajú Orwell *1984* című műve?',
          options: ['verses regény', 'komikus eposz', 'vígjáték', 'antiutópia'],
          answer: 3,
          explanation:
            'Az *1984* a totalitárius társadalom borzalmait ábrázoló antiutópia (negatív jövőkép).',
        },
        {
          question: 'Melyik fogalom kapcsolódik a szimbolizmus költészetéhez?',
          options: ['szinesztézia', 'invokáció', 'hexameter', 'szabad függő beszéd'],
          answer: 0,
          explanation:
            'A szimbolisták (Baudelaire, Rimbaud) az érzékterületek összekapcsolásával, a szinesztéziával fejezték ki a világ „összhangját”.',
        },
        {
          question: 'Melyik irányzat kiáltványát írta Breton 1924-ben?',
          options: ['futurizmus', 'dadaizmus', 'szürrealizmus', 'szimbolizmus'],
          answer: 2,
          explanation: 'André Breton 1924-es Szürrealista kiáltványa az irányzat alapszövege.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Az átváltozás', url: wiki('Az átváltozás Kafka') },
        { label: 'Wikipédia: 1984 (regény)', url: wiki('1984 Orwell regény') },
        { label: 'Wikipédia: A rossz virágai', url: wiki('A rossz virágai') },
      ],
    },
    {
      id: 'vilagirodalom-kozepkor-reneszansz-felvilagosodas',
      subject: 'magyar',
      unitId: 'vilagirodalom',
      title: 'Középkor, reneszánsz, felvilágosodás: Dante, Petrarca, Boccaccio, Villon, Voltaire',
      level: 'emelt',
      requirement: {
        emelt:
          'További választható korszakok: a középkor, a reneszánsz, a felvilágosodás; a korszak jellemzőinek és egy-két kiemelkedő képviselőjének vagy alkotásának bemutatása; művek értelmezése a korszak szellemi irányzataival, a korstílussal való összefüggésben.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **középkor** világképe teocentrikus (Isten-központú): a lovagi eposz, a vallásos költészet és az allegória kora. **Dante** *Isteni színjátéka* a középkori világkép szintézise.',
            'A **reneszánsz** (13–16. század) az **ember** és a világ felfedezése, az antikvitás újjáélesztése (**humanizmus**): **Petrarca** *Daloskönyve*, **Boccaccio** *Dekameronja*, Shakespeare, Cervantes.',
            '**François Villon** (15. század) a késő középkor és a reneszánsz határán álló, személyes hangú vagabundus-költő.',
            'A **felvilágosodás** (18. század) az ész, a tudomány és a haladás kora; **Voltaire** *Candide* című filozófiai meséje a vak optimizmust gúnyolja.',
            'Fontos fogalmak: terza rima, szonett, keretes novella, filozófiai regény, *carpe diem*, *memento mori*, *ubi sunt*.',
          ],
        },
        {
          kind: 'compare',
          title: 'Három korszak világlátása',
          columns: ['Középkor', 'Reneszánsz'],
          rows: [
            {
              label: 'Középpont',
              cells: ['Isten, a túlvilág, az üdvözülés', 'az ember, a földi élet, a szépség'],
            },
            {
              label: 'Ismeret',
              cells: ['a hit és az egyházi tekintély', 'az antik minták és a kutatás'],
            },
            {
              label: 'Minta',
              cells: ['Dante, Villon, a lovagi eposzok', 'Petrarca, Boccaccio, Shakespeare'],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Középkor: Dante' },
        {
          kind: 'text',
          text: '**Dante Alighieri** (1265–1321) firenzei költő; élete végét száműzetésben töltötte. Főműve az **Isteni színjáték** (La Divina Commedia, 1308 és 1320 között írta). A három nagy rész: **Pokol, Purgatórium (Tisztítótűz), Paradicsom**, mindegyik 33 énekből áll, az előhanggal együtt 100 ének; a versforma a **terza rima** (hármas rímű, tercina). A költő az „életünk útjának felén” egy sötét erdőben eltéved; a Poklon és a Tisztítótűzön **Vergilius** (az ész, az antik bölcsesség) vezeti, a Paradicsomban **Beatrice** (a szerelem, a hit kegyelme). A pokol kapuján a felirat szerint aki belép, hagyjon fel minden reménnyel. A mű szerkezete szigorúan szimmetrikus, a bűnök és a büntetések **contrapasso** elve szerint illeszkednek egymáshoz. A mű többértelmű: **allegória**, utazás a túlvilágon, és egyben a kor politikai–erkölcsi ítélete is.',
        },
        {
          kind: 'text',
          text: 'A középkori irodalom további fontos műfajai: a lovagi hősepika (*Roland-ének*, 11–12. század), az *Artúr-regék*, a **trubadúrlíra**, a vallásos legendák, a misztériumjáték. A világlátás **teocentrikus**, az ember a Teremtő rendjébe illeszkedik.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'François Villon (15. század)',
              text: 'Francia vagabundus-költő, a *Kis* és a *Nagy Testamentum* szerzője (a *Nagy Testamentum* 1461 körül). Versei (balladái) személyes, kíméletlenül őszinték: a mulandóság (*ubi sunt*: „hová lettek?”), a halál közelsége, a bűn és a bűnbánat, a szegénység. A *Hol vannak a régi idők nagyasszonyai?* című balladájában a szépség mulandóságát idézi. Mind a középkori **memento mori** hagyomány, mind a reneszánsz világi életszeretete megtalálható nála. Magyarul Faludy György átköltései tették ismertté.',
            },
          ],
        },
        { kind: 'heading', text: 'Reneszánsz: Petrarca és Boccaccio' },
        {
          kind: 'text',
          text: 'A **reneszánsz** (újjászületés) Itáliában indult. A **humanizmus** az antik kultúra újrafelfedezése, az ember értékének és a földi élet örömeinek elismerése. Az irodalomban a nemzeti nyelvek (itt: olasz) irodalmi rangot kapnak.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Francesco Petrarca (1304–1374)',
              text: 'A **Daloskönyv** (Canzoniere) 366 versből álló gyűjtemény, jórészt **szonettekből**; a központi téma a Laura iránti beteljesületlen szerelem, majd Laura halála után az elmúlás fájdalma. A **petrarcai szonett** (4+4+3+3 sor) a későbbi európai szerelmi költészet mintája; ő teremtette meg a szerelmi líra „petrarkizmusát”. A humanizmus egyik úttörője is.',
            },
            {
              name: 'Giovanni Boccaccio (1313–1375)',
              text: 'A **Dekameron** (1349–1353 között) **keretes novellagyűjtemény**: 1348-ban, a pestis elől Firenzéből egy villába menekülő tíz fiatal (hét nő, három férfi) tíz napon át mesél, napi egy-egy novellát; összesen 100 novella. Témák: szerelem, szellemesség, az emberi ravaszság, a szerencse (fortuna) és a hatalmaskodó papság kigúnyolása. A mű az élet örömét és az **emberi természet** hitelességét helyezi előtérbe.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A reneszánsz másik két csúcsa: **Shakespeare** (1564–1616; *Hamlet*, *Rómeó és Júlia*, mindkettő a dráma témakörben is előfordul) és **Cervantes** (*Don Quijote*, 1605/1615), a modern regény előfutára.',
        },
        { kind: 'heading', text: 'Felvilágosodás: Voltaire' },
        {
          kind: 'text',
          text: 'A **felvilágosodás** az **ész** hatalmába vetett hit, a babona és az egyházi tekintély bírálata, a tolerancia, a szabadság és a haladás eszméje. **Voltaire** (1694–1778) a kor vezető gondolkodója. A **Candide, avagy az optimizmus** (1759) **filozófiai regény** (filozófiai mese): a naiv Candide a kastélyból kiűzve bejárja a világot (háború, földrengés, inkvizíció, rabszolgaság), miközben tanítója, **Pangloss** hirdeti Leibniz nyomán, hogy „ebben a létező világok legjobbikában minden a legjobb”. A tapasztalat cáfolja a vak optimizmust. A mű végén Candide kertjében a tanulság: *„művelnünk kell a kertünket”*, azaz a felelős, hasznos munka az emberi lét értelme. A mű műfaja: **szatíra, utazásregény, filozófiai tanmese**, a stílusa gyors, ironikus.',
        },
        {
          kind: 'text',
          text: 'A felvilágosodás további műve: Jonathan Swift *Gulliver utazásai* (1726), amely szintén a társadalom bírálatát adja utazástörténet formájában; Goethe *Werther*-je (1774) már az érzékenység és az új korszak felé mutat.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szintű szóbeli tétel: egy korszak (középkor, reneszánsz, felvilágosodás) jellemzői és egy-két alkotás értelmezése a korstílus összefüggésében.',
            'Összehasonlító kérdések: középkori és reneszánsz szerelemfelfogás (Dante–Petrarca), a mulandóság motívuma (Villon–Janus Pannonius–Balassi), a szatíra (Boccaccio–Voltaire).',
            'Műfajtörténet: elbeszélés, novella és regény változása (Dekameron → Candide).',
          ],
        },
        {
          kind: 'example',
          title: 'Mintavázlat: szerelem Danténál és Petrarcánál',
          problem: 'Hasonlítsd össze a szerelem szerepét Dante és Petrarca művében.',
          solution:
            '**Dante**: Beatrice a költő szent vezetője, a szerelem az üdvözüléshez, Istenhez vezet; a világkép **teocentrikus**.\n**Petrarca**: Laura földi nő, a szerelem beteljesületlen, a lélek vívódása, a vágy és a bűntudat feszültsége áll a középpontban; a világkép **emberközpontú**.\n**Forma**: Dante terza rima, nagy szintézis; Petrarca szonett, személyes líra.\n**Következtetés**: a szerelem középkori idealizálásától a reneszánsz egyéni érzelem-lélektanáig vezet az út.',
        },
        {
          kind: 'warning',
          text: 'Ne keverd a reneszánsz és a felvilágosodás szerzőit: **Boccaccio, Petrarca** reneszánsz (14. század, az olasz „előreneszánsz”), **Dante** a középkor záró alakja, **Voltaire** a felvilágosodás (18. század). A *Candide* nem eposz, hanem filozófiai regény.',
        },
      ],
      topicMatch: ['dante', 'petrarca', '=reneszánsz', '=középkor', 'világirodalom'],
      cards: { subject: 'magyar', era: 'reneszansz' },
      quiz: [
        {
          question: 'Ki vezeti Dantét a Pokolban és a Tisztítótűzben?',
          options: ['Beatrice', 'Vergilius', 'Homérosz', 'Petrarca'],
          answer: 1,
          explanation:
            'Dante kalauza a Pokolban és a Tisztítótűzben Vergilius (az ész jelképe); a Paradicsomban Beatrice vezeti.',
        },
        {
          question: 'Melyik Petrarca verskötete?',
          options: ['Dekameron', 'Isteni színjáték', 'Candide', 'Daloskönyv'],
          answer: 3,
          explanation:
            'A *Daloskönyv* (Canzoniere) a Laura-költemények gyűjteménye; a Dekameron Boccaccio, a Candide Voltaire műve.',
        },
        {
          question: 'Mi a *Dekameron* kerete?',
          options: [
            'Tíz fiatal mesél a pestis elől menekülve.',
            'Egy hős hazatérése.',
            'Egy tudós szerződése az ördöggel.',
            'Egy utazás a túlvilágon.',
          ],
          answer: 0,
          explanation:
            'A Dekameron tíz fiatalja a pestis elől egy villába menekül, és tíz napon át tíz-tíz novellát mesél (összesen 100).',
        },
        {
          question: 'Mit gúnyol ki Voltaire a *Candide*-ban?',
          options: [
            'a vak optimizmust, az „ebben a világban minden a legjobb” tételt',
            'a hősi halált',
            'a népköltészetet',
            'a szerelmi költészet hagyományát',
          ],
          answer: 0,
          explanation:
            'Pangloss tanítása (a „legjobb világ”) és Candide tapasztalatai ellentétben állnak: ez adja a szatíra lényegét.',
        },
        {
          question: 'Milyen versformát használ Dante az *Isteni színjátékban*?',
          options: ['szonett', 'hexameter', 'terza rima', 'felező tizenkettes'],
          answer: 2,
          explanation:
            'A terza rima (tercina) hármas soros versszak, láncszerű rímképlettel (aba bcb cdc…).',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Isteni színjáték', url: wiki('Isteni színjáték') },
        { label: 'Wikipédia: Dekameron', url: wiki('Dekameron') },
        { label: 'Wikipédia: Candide', url: wiki('Candide Voltaire') },
      ],
    },
  ],
};

export default unit;
