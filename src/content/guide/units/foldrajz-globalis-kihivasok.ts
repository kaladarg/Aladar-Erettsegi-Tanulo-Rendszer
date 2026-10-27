import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 10 (Helyi problémák, globális kihívások, a fenntartható jövő dilemmái). */
const unit: GuideUnit = {
  id: 'globalis-kihivasok',
  subject: 'foldrajz',
  order: 100,
  title: 'Helyi problémák, globális kihívások, a fenntartható jövő',
  requirementRef: '10.1–10.5 Globális kihívások',
  intro:
    'A környezetszennyezés, az éghajlatváltozás, a népesség és az erőforrások gondjai, a hulladék és a fenntarthatóság: okok, következmények és megoldások, ahogy a vizsga kéri.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (10. témakör). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'globalis-kornyezeti-problemak',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Globális környezeti problémák és az éghajlatváltozás',
      level: 'kozep',
      requirement: {
        kozep:
          'A helyi szennyezés globálissá válása; az üvegházhatás erősödése és a globális éghajlatváltozás, a savas eső, a vizek és a talaj szennyeződése, az erdőirtás; nemzetközi egyezmények.',
        emelt:
          'A környezeti problémák összefüggéseinek elemzése, a megoldások lehetőségei és korlátai.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A szennyezés nem áll meg a határoknál: a levegő és a vizek továbbszállítják.',
            'Az **üvegházhatás** természetes jelenség, de a fosszilis tüzelőanyagok égetése és az erdőirtás miatt nő a szén-dioxid mennyisége, ezért **erősödik**, és a Föld átlaghőmérséklete emelkedik.',
            'Következmények: hőhullámok, aszály, szélsőséges csapadék, a gleccserek és a sarki jég olvadása, a tengerszint emelkedése.',
            'A **savas eső** a kén- és nitrogén-oxidokból keletkezik; erdőket, tavakat, épületeket károsít.',
            'Egyezmények: **Montreali Jegyzőkönyv** (1987, ózonréteg), **Kiotói Jegyzőkönyv** (1997), **Párizsi Megállapodás** (2015).',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Az ENSZ éghajlati testülete (IPCC) szerint a Föld átlaghőmérséklete az ipari forradalom előtti szinthez képest kb. 1,1 °C-kal emelkedett, és ennek fő oka az emberi tevékenység. A **Párizsi Megállapodás** célja, hogy a melegedés jóval 2 °C alatt maradjon, és lehetőleg ne haladja meg az 1,5 °C-ot.',
        },
        {
          kind: 'compare',
          title: 'Két légköri probléma',
          columns: ['Az üvegházhatás erősödése', 'Az ózonréteg elvékonyodása'],
          rows: [
            { label: 'Oka', cells: ['szén-dioxid, metán kibocsátása', 'freonok (CFC-gázok)'] },
            {
              label: 'Következménye',
              cells: ['globális felmelegedés', 'több UV-sugárzás jut a felszínre'],
            },
            { label: 'Egyezmény', cells: ['Kiotó (1997), Párizs (2015)', 'Montreal (1987)'] },
          ],
        },
        {
          kind: 'text',
          text: 'Az ózonréteg és az üvegházhatás két külön probléma; a vizsgán gyakori hiba összekeverni őket. A Montreali Jegyzőkönyv a sikeres nemzetközi együttműködés példája: a freonok gyártásának tilalma után az ózonréteg lassan regenerálódik.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'warning',
          text: 'Ne keverd össze az üvegházhatás erősödését az ózonlyukkal: más az okuk és a következményük is.',
        },
      ],
      topicMatch: ['globális', 'környezeti problémák', 'környezeti és globális'],
      quiz: [
        {
          question: 'Mi az üvegházhatás erősödésének fő oka?',
          options: [
            'a freonok kibocsátása',
            'a fosszilis tüzelőanyagok égetése és az erdőirtás',
            'a vulkánkitörések egyedül',
            'a Föld pályájának változása',
          ],
          answer: 1,
          explanation:
            'A szén-dioxid-kibocsátás és az erdők pusztulása növeli a légkör szén-dioxid-tartalmát.',
        },
        {
          question: 'Melyik egyezmény védi az ózonréteget?',
          options: [
            'Párizsi Megállapodás',
            'Kiotói Jegyzőkönyv',
            'Montreali Jegyzőkönyv',
            'Antarktisz-egyezmény',
          ],
          answer: 2,
          explanation: 'A Montreali Jegyzőkönyv (1987) tiltotta be az ózonkárosító anyagokat.',
        },
        {
          question: 'Miből keletkezik a savas eső?',
          options: ['kén- és nitrogén-oxidokból', 'oxigénből', 'vízgőzből egyedül', 'ózonból'],
          answer: 0,
          explanation:
            'A kén- és nitrogén-oxidok a légkörben savvá alakulnak, és a csapadékkal hullanak le.',
        },
      ],
      sources: [
        { label: 'IPCC', url: 'https://www.ipcc.ch/' },
        { label: 'Wikipédia: Globális felmelegedés', url: wiki('Globális felmelegedés') },
      ],
    },
    {
      id: 'nepesseg-elelmezes-eroforrasok',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Népesség, élelmezés és erőforrások',
      level: 'kozep',
      requirement: {
        kozep:
          'A népességnövekedés és az élelmezés, a vízhiány, a megújuló és a nem megújuló erőforrások; a fejlett és a fejlődő világ eltérő problémái.',
        emelt:
          'Az erőforrás-felhasználás és a fejlettség összefüggése, az energiaátmenet lehetőségei.',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Föld népessége 2022-ben elérte a **8 milliárdot**; a növekedés a fejlődő országokban gyors, a fejlett országokban a népesség öregszik.',
            'Az **éhezés** fő oka nem az élelem teljes hiánya, hanem az egyenlőtlen elosztás és a szegénység.',
            '**Nem megújuló** erőforrás: kőolaj, földgáz, kőszén, ércek. **Megújuló**: nap, szél, víz, biomassza, geotermikus energia.',
            'A **vízhiány** a száraz területeken és a gyorsan növő városokban a legsúlyosabb.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A fejlett és a fejlődő világ problémái eltérnek: a fejlett országokban a **túlfogyasztás**, az öregedés és a nagy fajlagos energiafelhasználás, a fejlődő országokban a gyors népességnövekedés, a szegénység, az éhezés és a tiszta ivóvíz hiánya a fő gond.',
        },
        {
          kind: 'text',
          text: 'Az **energiaátmenet** a fosszilis energiahordozók helyettesítését jelenti megújulókkal. Korlátai: a nap- és szélenergia időjárásfüggő, ezért tárolás és rugalmas hálózat kell hozzá.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Esszében hasonlítsd össze a fejlett és a fejlődő világot: ugyanaz a probléma (például a víz) máshogy jelenik meg.',
        },
      ],
      topicMatch: ['fenntartható gazdálkodás', 'fenntartható fogyasztás'],
      quiz: [
        {
          question: 'Melyik megújuló energiaforrás?',
          options: ['földgáz', 'szélenergia', 'kőszén', 'uránérc'],
          answer: 1,
          explanation: 'A szélenergia folyamatosan újratermelődik, nem fogy el.',
        },
        {
          question: 'Mi az éhezés fő oka a világban?',
          options: [
            'a Föld nem termel elég élelmet',
            'az egyenlőtlen elosztás és a szegénység',
            'a túl sok eső',
            'a hideg éghajlat',
          ],
          answer: 1,
          explanation: 'Elég élelmiszer terem, de a szegények nem jutnak hozzá.',
        },
        {
          question: 'Mikor érte el a Föld népessége a 8 milliárdot?',
          options: ['2000', '2011', '2022', '2030'],
          answer: 2,
          explanation: 'Az ENSZ becslése szerint 2022 novemberében.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Megújuló energia', url: wiki('Megújuló energia') },
        { label: 'Wikipédia: Világnépesség', url: wiki('Világnépesség') },
      ],
    },
    {
      id: 'hulladek-fenntarthatosag',
      subject: 'foldrajz',
      unitId: 'globalis-kihivasok',
      title: 'Hulladékgazdálkodás és fenntarthatóság',
      level: 'kozep',
      requirement: {
        kozep:
          'A hulladékgazdálkodás jelentősége és módjai, a körforgásos gazdaság; a fenntartható fejlődés fogalma, a környezet- és természetvédelem feladatai, az egyén szerepe.',
        emelt:
          'Az ökológiai lábnyom értelmezése, a fenntarthatósági célok és a nemzetközi együttműködés.',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A hulladékgazdálkodás sorrendje: **megelőzés**, újrahasználat, **újrahasznosítás**, energetikai hasznosítás, és csak végül a **lerakás**.',
            'A **körforgásos gazdaság** célja, hogy a termékek és anyagok minél tovább használatban maradjanak.',
            'A **fenntartható fejlődés** úgy elégíti ki a jelen szükségleteit, hogy nem veszélyezteti a jövő nemzedékek esélyeit (Brundtland-jelentés, 1987).',
            'Az ENSZ 2015-ben **17 fenntartható fejlődési célt** fogadott el.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Az **ökológiai lábnyom** azt mutatja, mekkora termékeny terület kell egy ember vagy egy ország fogyasztásához és hulladékának elnyeléséhez. Ha nagyobb, mint a rendelkezésre álló terület, a fogyasztás hosszú távon nem fenntartható.',
          emelt: true,
        },
        {
          kind: 'text',
          text: 'Az egyén is sokat tehet: kevesebb egyszer használatos termék, szelektív gyűjtés, takarékos víz- és energiahasználat, közösségi közlekedés, helyi termékek vásárlása.',
        },
      ],
      exam: [
        {
          kind: 'example',
          title: 'Számolás: újrahasznosítási arány',
          problem:
            'Egy városban egy évben 120 ezer tonna települési hulladék keletkezett, ebből 42 ezer tonnát hasznosítottak újra. Mekkora az újrahasznosítási arány?',
          solution: '$42\\,000 / 120\\,000 = 0{,}35$, vagyis **35%**.',
        },
      ],
      topicMatch: ['hulladékkezelés', 'fenntarthatóság', 'fenntartható divat'],
      quiz: [
        {
          question: 'Mi áll a hulladékgazdálkodás sorrendjének élén?',
          options: ['lerakás', 'égetés', 'megelőzés', 'újrahasznosítás'],
          answer: 2,
          explanation: 'A legjobb hulladék az, amely nem keletkezik: a megelőzés az első.',
        },
        {
          question: 'Mi a fenntartható fejlődés lényege?',
          options: [
            'a gazdaság bármi áron való növelése',
            'a jelen szükségleteinek kielégítése a jövő nemzedékek esélyeinek veszélyeztetése nélkül',
            'a fogyasztás teljes megszüntetése',
            'csak a természetvédelem',
          ],
          answer: 1,
          explanation: 'Ez a Brundtland-jelentés (1987) meghatározása.',
        },
        {
          question: 'Mit mutat az ökológiai lábnyom?',
          options: [
            'egy ország területét',
            'a fogyasztáshoz és a hulladék elnyeléséhez szükséges termékeny területet',
            'a népsűrűséget',
            'a GDP-t',
          ],
          answer: 1,
          explanation: 'Az ökológiai lábnyom a fogyasztás környezeti igényét fejezi ki területben.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Fenntartható fejlődés', url: wiki('Fenntartható fejlődés') },
        { label: 'Wikipédia: Körforgásos gazdaság', url: wiki('Körforgásos gazdaság') },
      ],
    },
  ],
};

export default unit;
