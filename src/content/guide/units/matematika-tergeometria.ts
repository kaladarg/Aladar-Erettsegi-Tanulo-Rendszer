import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic: Térgeometria. */
const unit: GuideUnit = {
  id: 'tergeometria',
  subject: 'matematika',
  order: 46,
  title: 'Térgeometria',
  requirementRef:
    '4.1.1 Térelemek; 4.2.2 Hasonlósági transzformációk (hasonló testek); 4.3.2 Térbeli alakzatok; 4.8 Felszín, térfogat',
  intro:
    'Térelemek távolsága és hajlásszöge, a hasáb, henger, gúla, kúp, gömb, csonkagúla és csonkakúp felszíne és térfogata, a hasonló testek aránya; emelten a kitérő egyenesek és a csonka testek térfogatképletének bizonyítása.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (4.1.1, 4.2.2, 4.3.2, 4.8). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'terelemek-tavolsag-szog',
      subject: 'matematika',
      unitId: 'tergeometria',
      title: 'Térelemek, távolságok és szögek a térben',
      level: 'both',
      requirement: {
        kozep:
          'A térelemek (pont, egyenes, sík) és a szög fogalma; a térelemek távolságára és szögére vonatkozó meghatározások: pont és egyenes, pont és sík, párhuzamos egyenesek, párhuzamos síkok távolsága; két egyenes, egyenes és sík, két sík hajlásszöge; testek csoportosítása',
        emelt: 'Kitérő egyenesek távolságának és hajlásszögének meghatározása',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Térelemek**: pont, egyenes, sík. Két egyenes lehet **metsző**, **párhuzamos** vagy **kitérő** (nincs közös síkjuk).',
            '**Távolság**: a legrövidebb összekötő szakasz hossza. Pont és sík távolsága a pontból a síkra húzott **merőleges** szakasz hossza.',
            '**Egyenes és sík hajlásszöge**: az egyenes és a síkra vett merőleges vetülete által bezárt szög.',
            '**Két sík hajlásszöge**: a metszésvonalukra merőleges egyenesek szöge (a két síkban, a metszésvonal ugyanazon pontjában).',
            'Téglatest testátlója: $\\sqrt{a^2 + b^2 + c^2}$, kocka testátlója: $a\\sqrt{3}$.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Testek csoportosítása' },
        {
          kind: 'terms',
          items: [
            {
              term: 'hasáb',
              text: 'két párhuzamos, egybevágó sokszög (alap- és fedőlap) és a csúcsaikat összekötő paralelogrammák (oldallapok). **Egyenes** hasábnál az oldalélek merőlegesek az alapra. Hasáb a téglatest és a kocka is.',
            },
            {
              term: 'gúla',
              text: 'egy sokszög alaplap és egy csúcs, amelyet az alap csúcsaival háromszög oldallapok kötnek össze. **Szabályos** gúla alapja szabályos sokszög, és a csúcs az alap középpontja fölött van.',
            },
            {
              term: 'forgástestek',
              text: 'egy síkidom tengely körüli forgatásával keletkeznek: a forgáshenger (téglalapból), a forgáskúp (derékszögű háromszögből) és a gömb (félkörből).',
            },
            {
              term: 'csonka testek',
              text: 'a gúla vagy a kúp alaplappal párhuzamos síkkal levágott kisebb része után megmaradó rész: csonkagúla, csonkakúp.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A testeket sokféle szempont szerint csoportosíthatod: van-e görbe felületük (henger, kúp, gömb) vagy csak síklapokból állnak (hasáb, gúla), egyenesek-e vagy szabályosak-e. A vizsgán ezt általában egy konkrét feladat részeként kérik.',
        },
        { kind: 'heading', text: 'Távolság és szög a térben' },
        {
          kind: 'compare',
          columns: ['Térelemek', 'Hogyan mérjük?'],
          rows: [
            {
              label: 'pont és egyenes',
              cells: ['távolság', 'a pontból az egyenesre állított merőleges szakasz'],
            },
            {
              label: 'pont és sík',
              cells: ['távolság', 'a pontból a síkra állított merőleges szakasz'],
            },
            {
              label: 'párhuzamos egyenesek, párhuzamos síkok',
              cells: ['távolság', 'bármely közös merőleges szakasz hossza'],
            },
            {
              label: 'két metsző egyenes',
              cells: ['hajlásszög', 'a két egyenes által bezárt szög (legfeljebb 90°)'],
            },
            {
              label: 'egyenes és sík',
              cells: ['hajlásszög', 'az egyenes és a síkra vett merőleges vetülete szöge'],
            },
            {
              label: 'két sík',
              cells: [
                'hajlásszög',
                'a metszésvonalra merőleges, egy pontból induló félegyenesek szöge',
              ],
            },
          ],
        },
        {
          kind: 'tip',
          text: 'Térgeometriai feladatban szinte mindig **síkbeli derékszögű háromszöget** keresel: a szükséges szakaszt és szöget úgy veszed fel, hogy az egy olyan háromszögben legyen, amelyben Pitagorasz-tétellel vagy szögfüggvénnyel számolhatsz.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: téglatest testátlója és hajlásszöge',
          problem:
            'Egy téglatest élei 3, 4 és 12 cm. Mekkora a testátlója, és mekkora szöget zár be az alaplappal (a 3 és 4 cm élű lappal)?',
          solution:
            'Az alaplap átlója: $\\sqrt{3^2 + 4^2} = 5$ cm. A testátló: $\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ cm.\n\nA testátló vetülete az alaplap átlója, ezért a keresett szög $\\alpha$ egy 5 és 12 befogójú derékszögű háromszögben van: $\\tan\\alpha = \\frac{12}{5}$, ebből $\\alpha \\approx 67{,}4^\\circ$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: oldallap hajlásszöge',
          problem:
            'Egy szabályos négyoldalú gúla alapéle 8 cm, magassága 6 cm. Mekkora szöget zár be az oldallapja az alaplappal?',
          solution:
            'Az oldallap és az alaplap metszésvonala az alapél. Ennek felezőpontjából az alaplapban az élre merőlegesen az alap középpontja felé, az oldallapban pedig a csúcs felé húzunk egyenest. A két egyenes szöge a keresett hajlásszög.\n\nA derékszögű háromszög befogói: az alap középpontjától az él felezőpontjáig $4$ cm, és a gúla magassága $6$ cm. Így $\\tan\\varphi = \\frac{6}{4} = 1{,}5$, ebből $\\varphi \\approx 56{,}3^\\circ$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: kocka vagy téglatest testátlója, lapátlója; egy egyszerű távolság vagy szög.',
            'II. rész: egy test (gúla, hasáb, kúp) adataiból oldalél, magasság, hajlásszög kiszámítása, ez a felszín vagy a térfogat előfeltétele.',
            'Szóbeli: a hajlásszög definíciója (egyenes és sík, két sík), egy példa rá a téglatesten.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba, hogy az egyenes és a sík szögét az egyenes és a sík *bármely* egyenesének szögeként számolják. Mindig a **merőleges vetülettel** bezárt szög a hajlásszög, az a legkisebb szög.',
        },
        {
          kind: 'tip',
          text: 'Készíts mindig térbeli ábrát, jelöld a derékszögeket, és a kiszámolt háromszöget rajzold ki külön síkban is. Az ábra a feladat pontozott része.',
        },
      ],
      topicMatch: ['térgeometria', 'testátló', 'tetőtér', 'téglatest'],
      quiz: [
        {
          question: 'Mekkora a 2, 3 és 6 cm élű téglatest testátlója?',
          options: ['5 cm', '7 cm', '11 cm', '$\\sqrt{11}$ cm'],
          answer: 1,
          explanation: '$\\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{49} = 7$ cm.',
        },
        {
          question: 'Mekkora a 6 cm élű kocka testátlója?',
          options: ['$6\\sqrt{2}$ cm', '$6\\sqrt{3}$ cm', '$12$ cm', '$18$ cm'],
          answer: 1,
          explanation: 'A kocka testátlója $a\\sqrt{3}$, itt $6\\sqrt{3} \\approx 10{,}39$ cm.',
        },
        {
          question: 'Mi az egyenes és a sík hajlásszöge?',
          options: [
            'az egyenes és a sík egy tetszőleges egyenesének szöge',
            'az egyenes és a síkra vett merőleges vetületének szöge',
            'az egyenes és a sík normálvektorának szöge',
            'mindig 90°',
          ],
          answer: 1,
          explanation:
            'A hajlásszöget az egyenes és a merőleges vetülete adja; ez a síkbeli egyenesekkel bezárt szögek közül a legkisebb.',
        },
        {
          question: 'Mi a pont és a sík távolsága?',
          options: [
            'a pontból a sík egy tetszőleges pontjába húzott szakasz hossza',
            'a pontból a síkra állított merőleges szakasz hossza',
            'a pont és a sík egy élének távolsága',
            'a pont és a sík középpontjának távolsága',
          ],
          answer: 1,
          explanation:
            'A távolság mindig a legrövidebb összekötő szakasz hossza, ez a merőleges szakasz.',
        },
        {
          question:
            'Egy 4 cm alapélű, szabályos négyoldalú gúla magassága 2 cm. Mi az oldallap és az alaplap hajlásszögének tangense?',
          options: ['$\\frac{1}{2}$', '$1$', '$2$', '$\\sqrt{2}$'],
          answer: 1,
          explanation:
            'Az alap középpontjától az él felezőpontjáig 2 cm van, a magasság is 2 cm, így a tangens $\\frac{2}{2} = 1$ (a szög 45°).',
        },
      ],
      sources: [
        { label: 'Wikipédia: Térgeometria', url: wiki('Térgeometria') },
        { label: 'Wikipédia: Kitérő egyenesek', url: wiki('Kitérő egyenesek') },
        { label: 'Wikipédia: Téglatest', url: wiki('Téglatest') },
      ],
    },
    {
      id: 'hasab-henger-felszin-terfogat',
      subject: 'matematika',
      unitId: 'tergeometria',
      title: 'Hasáb és henger felszíne, térfogata',
      level: 'both',
      requirement: {
        kozep:
          'A hasáb és a forgáshenger részei, alkotóelemei; a felszín és a térfogat szemléletes fogalma; hasáb és forgáshenger felszínének és térfogatának kiszámítása egyszerű esetekben',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **felszín** a test határoló felületének területe, a **térfogat** a test által kitöltött tér mérőszáma.',
            '**Hasáb**: $V = T_{\\text{alap}} \\cdot m$, $A = 2T_{\\text{alap}} + P$, ahol $P$ a palást (az oldallapok területének összege).',
            '**Henger**: $V = r^2\\pi m$, $A = 2r^2\\pi + 2r\\pi m = 2r\\pi(r + m)$.',
            'Téglatest: $V = abc$, $A = 2(ab + bc + ac)$. Kocka: $V = a^3$, $A = 6a^2$.',
            'Mértékegységek: $1\\ \\text{dm}^3 = 1$ liter, $1\\ \\text{m}^3 = 1000$ liter.',
          ],
        },
        {
          kind: 'formula',
          tex: 'V_{\\text{henger}} = r^2\\pi \\cdot m, \\qquad A_{\\text{henger}} = 2r\\pi(r + m)',
          caption: 'Henger térfogata és felszíne',
        },
      ],
      details: [
        { kind: 'heading', text: 'Hasáb' },
        {
          kind: 'text',
          text: 'A hasáb térfogata az alapterület és a magasság szorzata, akkor is, ha a hasáb ferde. A felszínhez az alap- és a fedőlapot (két egybevágó sokszög) és a palástot kell összeadni. Egyenes hasábnál a palást téglalapokból áll, a területe az **alap kerülete szorozva a magassággal**: $P = K_{\\text{alap}} \\cdot m$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: szabályos háromszög alapú hasáb',
          problem:
            'Egy egyenes hasáb alapja 6 cm oldalú szabályos háromszög, magassága 10 cm. Számítsa ki a térfogatát és a felszínét!',
          solution:
            'Az alap területe: $T = \\frac{6^2\\sqrt{3}}{4} = 9\\sqrt{3} \\approx 15{,}59\\ \\text{cm}^2$.\n\nTérfogat: $V = T \\cdot m = 90\\sqrt{3} \\approx 155{,}9\\ \\text{cm}^3$.\n\nPalást: $P = 3 \\cdot 6 \\cdot 10 = 180\\ \\text{cm}^2$. Felszín: $A = 2 \\cdot 9\\sqrt{3} + 180 \\approx 211{,}2\\ \\text{cm}^2$.',
        },
        { kind: 'heading', text: 'Forgáshenger' },
        {
          kind: 'text',
          text: 'A henger alapja és fedőlapja két $r$ sugarú kör, a palástja kiterítve egy $2r\\pi$ és $m$ oldalú téglalap. Ezért $A = 2r^2\\pi + 2r\\pi m$ és $V = r^2\\pi m$. Hengernek **tengelymetszete** az a téglalap, amelyet a tengelyen átmenő sík kimetsz: oldalai $2r$ és $m$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: henger alakú doboz',
          problem:
            'Egy henger alakú konzervdoboz belső sugara 4 cm, magassága 15 cm. Hány liter fér bele, és mekkora a doboz teljes felszíne?',
          solution:
            '$V = 4^2\\pi \\cdot 15 = 240\\pi \\approx 754\\ \\text{cm}^3 \\approx 0{,}754\\ \\text{dm}^3$, tehát körülbelül $0{,}75$ liter.\n\nFelszín: $A = 2\\pi \\cdot 4 \\cdot (4 + 15) = 152\\pi \\approx 477{,}5\\ \\text{cm}^2$.',
        },
        {
          kind: 'warning',
          text: 'Mértékegységeknél a térfogat köbös ($\\text{cm}^3$), a felszín négyzetes ($\\text{cm}^2$). Ha literben kérdezik az eredményt, először váltsd át a hosszúságokat dm-re vagy a $\\text{cm}^3$-t literre ($1000\\ \\text{cm}^3 = 1$ liter).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: téglatest vagy henger térfogata, felszíne adatokból; ismeretlen él kiszámítása a térfogatból.',
            'II. rész: szöveges feladat (tartály, doboz, csomagolás, víz térfogata), gyakran mértékegység-átváltással és kerekítéssel.',
            'Optimalizálás: adott felszínű vagy térfogatú dobozok közül a legnagyobb térfogatú, ez másodfokú függvény szélsőértékére vezet.',
          ],
        },
        {
          kind: 'tip',
          text: 'Szöveges feladatban először írd le, mit kérdeznek (térfogat vagy felszín, és milyen egységben). Kerekíts csak a végén; a közbülső értékeket tartsd meg pontosan vagy sok tizedessel.',
        },
        {
          kind: 'warning',
          text: 'A „felszín” lehet teljes felszín vagy csak a palást, attól függ, nyitott-e a test (például fedő nélküli edény festése). Olvasd el figyelmesen!',
        },
      ],
      topicMatch: ['felszín', 'térfogat', 'henger', 'hasáb', 'forgástest'],
      quiz: [
        {
          question: 'Mekkora a 4, 5 és 6 cm élű téglatest felszíne?',
          options: [
            '$74\\ \\text{cm}^2$',
            '$120\\ \\text{cm}^2$',
            '$148\\ \\text{cm}^2$',
            '$15\\ \\text{cm}^2$',
          ],
          answer: 2,
          explanation: '$2(4 \\cdot 5 + 5 \\cdot 6 + 4 \\cdot 6) = 2 \\cdot 74 = 148$.',
        },
        {
          question: 'Mekkora a 3 cm sugarú és 7 cm magas henger térfogata?',
          options: [
            '$21\\pi\\ \\text{cm}^3$',
            '$42\\pi\\ \\text{cm}^3$',
            '$63\\pi\\ \\text{cm}^3$',
            '$147\\pi\\ \\text{cm}^3$',
          ],
          answer: 2,
          explanation: '$V = r^2\\pi m = 9 \\cdot 7 \\cdot \\pi = 63\\pi$.',
        },
        {
          question:
            'Egy hasáb alapterülete $12\\ \\text{m}^2$, magassága 5 m. Mekkora a térfogata?',
          options: [
            '$17\\ \\text{m}^3$',
            '$30\\ \\text{m}^3$',
            '$60\\ \\text{m}^3$',
            '$120\\ \\text{m}^3$',
          ],
          answer: 2,
          explanation: '$V = T \\cdot m = 12 \\cdot 5 = 60$.',
        },
        {
          question: 'Egy henger sugara 2 cm, magassága 10 cm. Mekkora a palástjának területe?',
          options: [
            '$20\\pi\\ \\text{cm}^2$',
            '$40\\pi\\ \\text{cm}^2$',
            '$80\\pi\\ \\text{cm}^2$',
            '$24\\pi\\ \\text{cm}^2$',
          ],
          answer: 1,
          explanation: '$P = 2r\\pi m = 2 \\cdot 2 \\cdot 10 \\cdot \\pi = 40\\pi$.',
        },
        {
          question: 'Hány liter víz fér egy 4 dm sugarú, 5 dm magas hengerbe, egészre kerekítve?',
          options: ['251', '80', '503', '63'],
          answer: 0,
          explanation:
            '$V = 16\\pi \\cdot 5 = 80\\pi \\approx 251{,}3\\ \\text{dm}^3 \\approx 251$ liter.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Hasáb', url: wiki('Hasáb (geometria)') },
        { label: 'Wikipédia: Henger', url: wiki('Henger (geometria)') },
        { label: 'Wikipédia: Térfogat', url: wiki('Térfogat') },
      ],
    },
    {
      id: 'gula-kup-felszin-terfogat',
      subject: 'matematika',
      unitId: 'tergeometria',
      title: 'Gúla és kúp felszíne, térfogata',
      level: 'both',
      requirement: {
        kozep:
          'A gúla és a forgáskúp részei, alkotóelemei; gúla és forgáskúp felszínének és térfogatának kiszámítása egyszerű esetekben',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Gúla**: $V = \\frac{T_{\\text{alap}} \\cdot m}{3}$, $A = T_{\\text{alap}} + P$ (a palást az oldallapok területe).',
            '**Kúp**: $V = \\frac{r^2\\pi m}{3}$, $A = r^2\\pi + r\\pi a = r\\pi(r + a)$, ahol $a$ az **alkotó**.',
            'Kúpban: $a^2 = r^2 + m^2$. Kiterített palástja olyan körcikk, amelynek sugara $a$, ívhossza $2r\\pi$.',
            'A gúla és a kúp térfogata a vele azonos alapú és magasságú hasáb, illetve henger térfogatának **harmada**.',
          ],
        },
        {
          kind: 'formula',
          tex: 'V_{\\text{kúp}} = \\frac{r^2\\pi m}{3}, \\qquad A_{\\text{kúp}} = r\\pi(r + a)',
          caption: 'Kúp térfogata és felszíne',
        },
      ],
      details: [
        { kind: 'heading', text: 'Gúla' },
        {
          kind: 'text',
          text: 'A gúla magassága a csúcsból az alaplapra bocsátott merőleges szakasz. **Szabályos négyzet alapú gúlánál** a magasság talppontja az alap középpontja, az oldallapok egybevágó egyenlő szárú háromszögek. A palást kiszámításához az oldallap magasságára (az *apotémára*) van szükség: $P = 4 \\cdot \\frac{a \\cdot m_o}{2}$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: szabályos négyoldalú gúla',
          problem:
            'Egy szabályos négyoldalú gúla alapéle 8 cm, oldaléle 9 cm. Számítsa ki a magasságát, a térfogatát és a felszínét!',
          solution:
            'Az alap átlója $8\\sqrt{2}$, fele $4\\sqrt{2}$. A magasság: $m = \\sqrt{9^2 - (4\\sqrt{2})^2} = \\sqrt{81 - 32} = 7$ cm.\n\nTérfogat: $V = \\frac{8^2 \\cdot 7}{3} = \\frac{448}{3} \\approx 149{,}3\\ \\text{cm}^3$.\n\nAz oldallap magassága: $m_o = \\sqrt{9^2 - 4^2} = \\sqrt{65} \\approx 8{,}06$ cm. Felszín: $A = 64 + 4 \\cdot \\frac{8\\sqrt{65}}{2} = 64 + 16\\sqrt{65} \\approx 193{,}0\\ \\text{cm}^2$.',
        },
        { kind: 'heading', text: 'Forgáskúp' },
        {
          kind: 'text',
          text: 'A kúp tengelymetszete egyenlő szárú háromszög (alapja $2r$, szára az alkotó $a$). A palást kiterítve körcikk, melynek sugara $a$, ívhossza $2r\\pi$. A palást területe: $r\\pi a$. A körcikk középponti szöge: $\\alpha = 360^\\circ \\cdot \\frac{r}{a}$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: kúp',
          problem:
            'Egy forgáskúp alapkörének sugara 3 cm, alkotója 5 cm. Mekkora a magassága, a felszíne és a térfogata?',
          solution:
            '$m = \\sqrt{5^2 - 3^2} = 4$ cm.\n\n$V = \\frac{3^2\\pi \\cdot 4}{3} = 12\\pi \\approx 37{,}7\\ \\text{cm}^3$.\n\n$A = 3\\pi(3 + 5) = 24\\pi \\approx 75{,}4\\ \\text{cm}^2$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: a palást kiterítése',
          problem:
            'Egy forgáskúp alapkörének sugara 6 cm, alkotója 10 cm. Mekkora a kiterített palást középponti szöge?',
          solution:
            'A körcikk ívhossza az alapkör kerülete: $12\\pi$, a sugara 10 cm. A teljes kör kerülete $20\\pi$, ezért a körcikk a teljes kör $\\frac{12}{20} = \\frac{3}{5}$ része: $\\alpha = 360^\\circ \\cdot 0{,}6 = 216^\\circ$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: kúp vagy gúla térfogata, felszíne adatokból; hiányzó adat (magasság, alkotó) kiszámítása Pitagorasz-tétellel.',
            'II. rész: tetőtér, sátor, tölcsér, szobor, homokkúp (összetett szöveges feladat); gúla vagy kúp és más test együtt (például henger és kúp).',
            'Szóbeli: a gúla és a kúp térfogatképlete, a felszín levezetése.',
          ],
        },
        {
          kind: 'warning',
          text: 'A kúp esetében ne cseréld össze a **magasságot** és az **alkotót**! A térfogatban a magasság szerepel, a palástban az alkotó. Pitagorasz-tétellel mindig egyikből a másik kiszámolható.',
        },
        {
          kind: 'tip',
          text: 'Gúlánál a magasságot, az oldallap magasságát és az alap fél oldalát vagy félátlóját összekötő derékszögű háromszögek adják a hiányzó adatokat. Rajzold meg őket külön.',
        },
      ],
      topicMatch: ['gúla', 'kúp', 'forgáskúp'],
      quiz: [
        {
          question:
            'Egy gúla alapterülete $24\\ \\text{cm}^2$, magassága 5 cm. Mekkora a térfogata?',
          options: [
            '$120\\ \\text{cm}^3$',
            '$60\\ \\text{cm}^3$',
            '$40\\ \\text{cm}^3$',
            '$29\\ \\text{cm}^3$',
          ],
          answer: 2,
          explanation: '$V = \\frac{24 \\cdot 5}{3} = 40$.',
        },
        {
          question: 'Egy forgáskúp sugara 3 cm, alkotója 5 cm. Mekkora a térfogata?',
          options: [
            '$12\\pi\\ \\text{cm}^3$',
            '$15\\pi\\ \\text{cm}^3$',
            '$36\\pi\\ \\text{cm}^3$',
            '$24\\pi\\ \\text{cm}^3$',
          ],
          answer: 0,
          explanation:
            'A magasság $\\sqrt{25 - 9} = 4$, így $V = \\frac{9\\pi \\cdot 4}{3} = 12\\pi$.',
        },
        {
          question:
            'Mekkora annak a kúpnak a teljes felszíne, amelynek sugara 3 cm, alkotója 5 cm?',
          options: [
            '$15\\pi\\ \\text{cm}^2$',
            '$24\\pi\\ \\text{cm}^2$',
            '$30\\pi\\ \\text{cm}^2$',
            '$9\\pi\\ \\text{cm}^2$',
          ],
          answer: 1,
          explanation: '$A = r\\pi(r + a) = 3\\pi \\cdot 8 = 24\\pi$.',
        },
        {
          question:
            'Egy forgáskúp sugara 6 cm, alkotója 10 cm. Mekkora a kiterített palást körcikkének középponti szöge?',
          options: ['$180^\\circ$', '$198^\\circ$', '$216^\\circ$', '$240^\\circ$'],
          answer: 2,
          explanation: '$\\alpha = 360^\\circ \\cdot \\frac{6}{10} = 216^\\circ$.',
        },
        {
          question:
            'Egy szabályos négyoldalú gúla alapéle 8 cm, oldaléle 9 cm. Mekkora a magassága?',
          options: ['5 cm', '$\\sqrt{65}$ cm', '7 cm', '8 cm'],
          answer: 2,
          explanation: '$m = \\sqrt{81 - (4\\sqrt{2})^2} = \\sqrt{81 - 32} = 7$.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gúla', url: wiki('Gúla (geometria)') },
        { label: 'Wikipédia: Kúp', url: wiki('Kúp (geometria)') },
        { label: 'Wikipédia: Térfogat', url: wiki('Térfogat') },
      ],
    },
    {
      id: 'csonka-testek-gomb-hasonlosag',
      subject: 'matematika',
      unitId: 'tergeometria',
      title: 'Csonkagúla, csonkakúp, gömb és hasonló testek',
      level: 'both',
      requirement: {
        kozep:
          'A csonkagúla, a csonkakúp és a gömb részei; felszínének és térfogatának kiszámítása egyszerű esetekben; a hasonló testek felszínének és térfogatának arányáról szóló tételek ismerete és alkalmazása',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Gömb**: $V = \\frac{4}{3}r^3\\pi$, $A = 4r^2\\pi$.',
            '**Csonkagúla**: $V = \\frac{m}{3}\\left(T + \\sqrt{Tt} + t\\right)$, ahol $T$ és $t$ az alap- és a fedőlap területe.',
            '**Csonkakúp**: $V = \\frac{\\pi m}{3}\\left(R^2 + Rr + r^2\\right)$, $A = \\pi\\left(R^2 + r^2 + (R + r)a\\right)$.',
            '**Hasonló testek**: ha a hosszak aránya $\\lambda$, akkor a felszínek aránya $\\lambda^2$, a térfogatoké $\\lambda^3$.',
          ],
        },
        {
          kind: 'formula',
          tex: 'V_{\\text{csonkakúp}} = \\frac{\\pi m}{3}\\left(R^2 + Rr + r^2\\right)',
          caption: 'A csonkakúp térfogata ($R$ az alap-, $r$ a fedőkör sugara)',
        },
      ],
      details: [
        { kind: 'heading', text: 'Gömb' },
        {
          kind: 'text',
          text: 'A gömb a tér azon pontjainak halmaza, amelyek egy adott ponttól (a középponttól) adott $r$ távolságra vannak. Térfogata $V = \\frac{4}{3}r^3\\pi$, felszíne $A = 4r^2\\pi$. A gömböt sík mindig körben metszi; a legnagyobb ilyen kör a **főkör** (sugara $r$).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: gömb',
          problem: 'Mekkora a 6 cm sugarú gömb térfogata és felszíne?',
          solution:
            '$V = \\frac{4}{3} \\cdot 6^3 \\cdot \\pi = 288\\pi \\approx 904{,}8\\ \\text{cm}^3$.\n\n$A = 4 \\cdot 6^2 \\cdot \\pi = 144\\pi \\approx 452{,}4\\ \\text{cm}^2$.',
        },
        { kind: 'heading', text: 'Csonkagúla és csonkakúp' },
        {
          kind: 'text',
          text: 'Ha egy gúlát vagy kúpot az alappal párhuzamos síkkal elmetszünk, a sík és az alap között **csonka test** marad. A két párhuzamos lap az alaplap (nagy) és a fedőlap (kicsi). A palást csonkakúpnál egy körgyűrű-részlet, területe $\\pi(R + r)a$, ahol $a$ az alkotó. Az oldallapok csonkagúlánál trapézok.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: csonkakúp',
          problem:
            'Egy csonkakúp alapkörének sugara 5 cm, fedőkörének sugara 2 cm, magassága 4 cm. Számítsa ki a térfogatát és a felszínét!',
          solution:
            'Az alkotó: $a = \\sqrt{(5 - 2)^2 + 4^2} = 5$ cm.\n\nTérfogat: $V = \\frac{4\\pi}{3}(25 + 10 + 4) = 52\\pi \\approx 163{,}4\\ \\text{cm}^3$.\n\nFelszín: $A = \\pi(25 + 4 + 7 \\cdot 5) = 64\\pi \\approx 201{,}1\\ \\text{cm}^2$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: csonkagúla',
          problem:
            'Egy csonkagúla alaplapja 6 cm oldalú, fedőlapja 4 cm oldalú négyzet, magassága 5 cm. Mekkora a térfogata?',
          solution:
            '$T = 36$, $t = 16$, $\\sqrt{Tt} = 24$. $V = \\frac{5}{3}(36 + 24 + 16) = \\frac{380}{3} \\approx 126{,}7\\ \\text{cm}^3$.',
        },
        { kind: 'heading', text: 'Hasonló testek' },
        {
          kind: 'text',
          text: 'Két test hasonló, ha az egyik a másiknak nagyított vagy kicsinyített másolata. Ha az **arány** (a megfelelő hosszúságok hányadosa) $\\lambda$, akkor:',
        },
        {
          kind: 'keypoints',
          items: ['a felszínek aránya $\\lambda^2$,', 'a térfogatok aránya $\\lambda^3$.'],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: nagyítás',
          problem:
            'Egy gömb sugarát 10%-kal megnöveljük. Hány százalékkal nő a felszíne és a térfogata?',
          solution:
            'Az arány $\\lambda = 1{,}1$. A felszín $1{,}1^2 = 1{,}21$-szeresére, vagyis 21%-kal nő. A térfogat $1{,}1^3 = 1{,}331$-szeresére, vagyis 33,1%-kal nő.',
        },
        {
          kind: 'tip',
          text: 'A hasonlósági tétel gyorsabb, mint kiszámolni mindkét testet. Ha például egy gúlát az alapjával párhuzamos síkkal a magasság felénél elvágunk, a kis gúla térfogata az eredetinek $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ része.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: gömb térfogata vagy felszíne; a sugár megváltozásának hatása; csonkakúp vagy csonkagúla adatokból.',
            'II. rész: összetett test (félgömb és henger, kúp és gömb, vödör mint csonkakúp), amelynek térfogatát vagy felszínét több rész összegéből kell kiszámolni.',
            'Hasonlóságos feladat: két hasonló test térfogatából a felszínek aránya (vagy fordítva).',
          ],
        },
        {
          kind: 'warning',
          text: 'Az arányt ne keverd: ha a térfogatok aránya $8 : 27$, akkor a **hosszak** aránya $2 : 3$ (köbgyök), a **felszíneké** pedig $4 : 9$. A felszín arányához előbb a hosszak arányát kell kiszámolni.',
        },
        {
          kind: 'tip',
          text: 'Összetett testnél bontsd részekre a testet, és mindegyikre külön írd fel, mi tartozik a felszínhez: a közös lapok eltűnnek, a félgömb felszíne $2r^2\\pi$ (ha a lapját is számoljuk, $3r^2\\pi$).',
        },
      ],
      topicMatch: ['gömb', 'csonkakúp', 'hasonló', 'hasonlóság', 'térgeometria'],
      quiz: [
        {
          question: 'Mekkora a 3 dm sugarú gömb térfogata?',
          options: [
            '$12\\pi\\ \\text{dm}^3$',
            '$36\\pi\\ \\text{dm}^3$',
            '$108\\pi\\ \\text{dm}^3$',
            '$27\\pi\\ \\text{dm}^3$',
          ],
          answer: 1,
          explanation: '$V = \\frac{4}{3} \\cdot 27 \\cdot \\pi = 36\\pi$.',
        },
        {
          question: 'Mennyi a 6 cm sugarú gömb felszíne?',
          options: [
            '$36\\pi\\ \\text{cm}^2$',
            '$72\\pi\\ \\text{cm}^2$',
            '$144\\pi\\ \\text{cm}^2$',
            '$288\\pi\\ \\text{cm}^2$',
          ],
          answer: 2,
          explanation: '$A = 4r^2\\pi = 4 \\cdot 36 \\cdot \\pi = 144\\pi$.',
        },
        {
          question:
            'Egy csonkakúp alapkörének sugara 5 cm, fedőkörének sugara 2 cm, magassága 4 cm. Mekkora a térfogata?',
          options: [
            '$39\\pi\\ \\text{cm}^3$',
            '$52\\pi\\ \\text{cm}^3$',
            '$100\\pi\\ \\text{cm}^3$',
            '$156\\pi\\ \\text{cm}^3$',
          ],
          answer: 1,
          explanation: '$V = \\frac{4\\pi}{3}(25 + 10 + 4) = \\frac{4\\pi \\cdot 39}{3} = 52\\pi$.',
        },
        {
          question: 'Két hasonló test hosszainak aránya 2 : 3. Mi a térfogataik aránya?',
          options: ['2 : 3', '4 : 9', '8 : 27', '6 : 9'],
          answer: 2,
          explanation: 'A térfogatok aránya a hosszak arányának köbe: $2^3 : 3^3 = 8 : 27$.',
        },
        {
          question: 'Hányszorosára nő a kocka felszíne, ha az élét megkétszerezzük?',
          options: ['2-szeresére', '4-szeresére', '6-szorosára', '8-szorosára'],
          answer: 1,
          explanation: 'Az arány 2, a felszín az arány négyzetével nő: $2^2 = 4$.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gömb', url: wiki('Gömb') },
        { label: 'Wikipédia: Csonkakúp', url: wiki('Csonkakúp') },
        { label: 'Wikipédia: Hasonlóság', url: wiki('Hasonlóság (geometria)') },
      ],
    },
    {
      id: 'kitero-egyenesek-csonka-bizonyitas',
      subject: 'matematika',
      unitId: 'tergeometria',
      title: 'Kitérő egyenesek és a csonka testek térfogata (emelt)',
      level: 'emelt',
      requirement: {
        emelt:
          'Kitérő egyenesek távolságának és hajlásszögének meghatározása; a csonkagúla és a csonkakúp térfogatképletének bizonyítása',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Kitérő egyenesek**: nem párhuzamosak és nincs közös pontjuk. A **hajlásszögük**: az egyiket párhuzamosan eltolva a másikat metsző helyzetbe, a keletkező szög.',
            'A **távolságuk** a közös merőleges szakasz hossza. Kiszámítható úgy is, hogy az egyik egyenesen átfektetünk egy, a másikkal párhuzamos síkot: a távolság az egyenes és e sík távolsága.',
            'A **csonkagúla** térfogatképletét úgy bizonyítjuk, hogy kiegészítjük gúlává, és a nagy gúla térfogatából kivonjuk a levágott kis gúlát. A hasonlóság adja a kapcsolatot.',
          ],
          emelt: true,
        },
      ],
      details: [
        { kind: 'heading', text: 'Kitérő egyenesek a kockán' },
        {
          kind: 'text',
          text: 'Legyen az $ABCDEFGH$ kocka éle $a$ ($ABCD$ az alaplap, $EFGH$ a fedőlap, $E$ az $A$ fölött van). Kitérő egyenespárok például $AB$ és $CG$, $AC$ és $DH$, $AC$ és $BG$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: kitérő élek',
          problem:
            'Mekkora az $AB$ és a $CG$ egyenes távolsága és hajlásszöge a 6 cm élű kockában?',
          solution:
            'A $CG$ párhuzamos a $BF$ éllel, így eltolással $B$-be kerül: az $AB$ és $BF$ hajlásszöge $90^\\circ$.\n\nA két egyenesre merőleges közös szakasz a $BC$ él, ezért a távolságuk $BC = 6$ cm.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: lapátló és élvonal',
          problem: 'Mekkora az $AC$ és a $DH$ egyenes távolsága, ha a kocka éle 6 cm?',
          solution:
            'A $DH$ merőleges az alaplapra, amely tartalmazza az $AC$-t. A közös merőleges ezért a $D$ pontból az $AC$-re állított merőleges: a $D$ pont távolsága az $AC$ átlótól az alaplap átlójának fele, vagyis $\\frac{6\\sqrt{2}}{2} = 3\\sqrt{2} \\approx 4{,}24$ cm.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: két lapátló szöge',
          problem: 'Mekkora szöget zár be az $AC$ és a $BG$ kitérő egyenes?',
          solution:
            'A $BG$ párhuzamos az $AH$ lapátlóval. Eltoljuk tehát az $AC$-t és az $AH$-t: az $ACH$ háromszög mindhárom oldala a kocka egy lapátlója, így szabályos. Szöge $60^\\circ$.',
          emelt: true,
        },
        { kind: 'heading', text: 'A csonkagúla térfogatának bizonyítása', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Legyen a csonkagúla alapterülete $T$, fedőlapjáé $t$, magassága $m$. Egészítsük ki gúlává: a teljes gúla magassága $M$, a levágott kis gúláé $M - m$. A két gúla hasonló, a hasonlóság aránya $k = \\frac{M - m}{M}$, és mivel a területek aránya az arány négyzete, $t = Tk^2$, azaz $k = \\sqrt{\\frac{t}{T}}$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A csonkagúla térfogata a két gúla térfogatának különbsége:\n\n$V = \\frac{TM}{3} - \\frac{t(M - m)}{3} = \\frac{TM}{3} - \\frac{Tk^2 \\cdot kM}{3} = \\frac{TM}{3}\\left(1 - k^3\\right)$.\n\nA $k = \\frac{M - m}{M}$ összefüggésből $M(1 - k) = m$, így $M = \\frac{m}{1 - k}$. Ezt beírva és $1 - k^3 = (1 - k)(1 + k + k^2)$ felhasználásával:\n\n$V = \\frac{T m (1 + k + k^2)}{3} = \\frac{m}{3}\\left(T + Tk + Tk^2\\right) = \\frac{m}{3}\\left(T + \\sqrt{Tt} + t\\right)$,\n\nmert $Tk = T\\sqrt{\\frac{t}{T}} = \\sqrt{Tt}$ és $Tk^2 = t$.',
        },
        {
          kind: 'formula',
          emelt: true,
          tex: 'V_{\\text{csonkagúla}} = \\frac{m}{3}\\left(T + \\sqrt{Tt} + t\\right)',
          caption: 'A bizonyítás eredménye',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Csonkakúp**: ugyanez a gondolatmenet, ha $T = R^2\\pi$ és $t = r^2\\pi$. Ekkor $\\sqrt{Tt} = Rr\\pi$, és így $V = \\frac{m\\pi}{3}\\left(R^2 + Rr + r^2\\right)$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt szint II. rész: kocka, téglatest vagy gúla éleinek, átlóinak távolsága és hajlásszöge, gyakran egy további kérdéssel (térfogat, szögfüggvény) együtt.',
            'Szóbeli tétel: a csonkagúla vagy csonkakúp térfogatképletének levezetése. Fel kell tudnod írni a hasonlóságot és az algebrai lépéseket.',
          ],
          emelt: true,
        },
        {
          kind: 'warning',
          text: 'Kitérő egyenesek szögénél a párhuzamos eltolás után a keletkező két szög (hegyes és tompa) közül a **hegyesszöget** adjuk meg. Ellenőrizd, hogy valóban kitérők-e, mielőtt a távolságot keresed.',
          emelt: true,
        },
        {
          kind: 'tip',
          text: 'A bizonyításban a három lépés: (1) kiegészítés gúlává, (2) hasonlóság $k$ aránnyal, (3) $1 - k^3$ szorzattá bontása. Ha ezt a három lépést leírod, a bizonyítás teljes.',
          emelt: true,
        },
      ],
      topicMatch: ['térgeometria', 'csonkakúp'],
      quiz: [
        {
          question: 'Mekkora szöget zár be a kocka két kitérő éle, például az $AB$ és a $CG$?',
          options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$0^\\circ$'],
          answer: 2,
          explanation:
            'A $CG$ párhuzamos a $BF$ éllel, ami merőleges az $AB$-re, ezért a szög $90^\\circ$.',
        },
        {
          question: 'Mekkora az $AC$ és a $DH$ távolsága a 6 cm élű kockában?',
          options: ['6 cm', '$3\\sqrt{2}$ cm', '$6\\sqrt{2}$ cm', '$3\\sqrt{3}$ cm'],
          answer: 1,
          explanation:
            'A közös merőleges az alaplap átlójának fele: $\\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$.',
        },
        {
          question:
            'Csonkagúla alaplapja 36, fedőlapja 16 területű. Mennyi a levágott kis gúla és a teljes gúla hasonlóságának aránya?',
          options: ['$\\frac{4}{9}$', '$\\frac{2}{3}$', '$\\frac{16}{36}$', '$\\frac{3}{2}$'],
          answer: 1,
          explanation:
            'A területek aránya $\\frac{16}{36}$, ez az arány négyzete, így $k = \\sqrt{\\frac{16}{36}} = \\frac{2}{3}$.',
        },
        {
          question:
            'Mi a csonkagúla térfogatképletében a $\\sqrt{Tt}$ jelentése a bizonyítás alapján?',
          options: [
            'a magasság és az alapterület szorzata',
            '$Tk$, ahol $k$ a hasonlóság aránya',
            'a palást területe',
            'az alkotó hossza',
          ],
          answer: 1,
          explanation: 'Mivel $k = \\sqrt{t/T}$, ezért $Tk = \\sqrt{Tt}$.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Kitérő egyenesek', url: wiki('Kitérő egyenesek') },
        { label: 'Wikipédia: Csonkagúla', url: wiki('Csonkagúla') },
      ],
    },
  ],
};

export default unit;
