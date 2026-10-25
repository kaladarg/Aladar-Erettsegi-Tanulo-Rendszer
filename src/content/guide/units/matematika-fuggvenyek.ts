import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic: Függvények, az analízis elemei. */
const unit: GuideUnit = {
  id: 'fuggvenyek',
  subject: 'matematika',
  order: 30,
  title: 'Függvények és az analízis elemei',
  requirementRef:
    '2.5 Hatvány, gyök, logaritmus; 2.8.2.2–2.8.2.3 Exponenciális és logaritmusos egyenletek; 3.1 A függvény; 3.2 Egyváltozós valós függvények; 3.2.1 A függvények grafikonja, függvénytranszformációk; 3.2.2 A függvények jellemzése; 3.4.2 Differenciálszámítás',
  intro:
    'A függvény fogalmától az alapfüggvényeken és a transzformációkon át az exponenciális és logaritmusfüggvényig, emelt szinten a deriválással végzett függvényvizsgálatig.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2.5, 2.8.2.2–2.8.2.3, 3.1, 3.2, 3.2.1, 3.2.2, 3.4.2). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'fuggveny-fogalma',
      subject: 'matematika',
      unitId: 'fuggvenyek',
      title: 'A függvény fogalma és tulajdonságai',
      level: 'both',
      requirement: {
        kozep:
          'A függvény fogalma és alapvető fogalmai (értelmezési tartomány, hozzárendelés, képhalmaz, helyettesítési érték, értékkészlet); függvény megadása képlettel; zérushely, növekedés, fogyás és szélsőérték grafikonról',
        emelt:
          'Az alapvető függvénytani fogalmak pontos definíciója; páros, páratlan, periodikus és korlátos függvények; inverzfüggvény és összetett függvény',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **függvény** olyan hozzárendelés, amely az értelmezési tartomány **minden** eleméhez **pontosan egy** elemet rendel.',
            'Jelölés: $f: A \\to B$, $x \\mapsto f(x)$. Az $A$ az **értelmezési tartomány** ($D_f$), a felvett értékek halmaza az **értékkészlet** ($R_f$).',
            '**Zérushely**: ahol $f(x) = 0$, vagyis ahol a grafikon metszi az $x$ tengelyt.',
            '**Monotonitás**: egy intervallumon a függvény nő (nagyobb $x$-hez nagyobb érték) vagy csökken.',
            '**Szélsőérték**: a legkisebb (minimum) vagy legnagyobb (maximum) függvényérték, és a hely, ahol felveszi.',
          ],
        },
        {
          kind: 'plot',
          title: 'Példa: f(x) = (x − 1)² − 4',
          x: [-3, 5],
          y: [-5, 6],
          functions: [{ label: 'f(x) = (x − 1)² − 4', fn: (x) => (x - 1) ** 2 - 4 }],
          points: [
            { x: -1, y: 0, label: 'zérushely: −1' },
            { x: 3, y: 0, label: 'zérushely: 3' },
            { x: 1, y: -4, label: 'minimum: (1; −4)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan adhatunk meg egy függvényt?' },
        {
          kind: 'keypoints',
          items: [
            '**képlettel**: $f(x) = 2x + 3$',
            '**táblázattal**: néhány $x$ és a hozzá tartozó $f(x)$',
            '**grafikonnal**: a $(x; f(x))$ pontok halmaza a koordináta-rendszerben',
            '**szöveggel** vagy **nyíldiagrammal** (véges halmazoknál)',
          ],
        },
        {
          kind: 'tip',
          text: 'Függőleges egyenes teszt: egy görbe akkor grafikonja egy függvénynek, ha minden függőleges egyenes legfeljebb egy pontban metszi. (A kör például nem függvény grafikonja.)',
        },
        { kind: 'heading', text: 'A tulajdonságok leolvasása' },
        {
          kind: 'text',
          text: 'A példa függvénynél, $f(x) = (x - 1)^2 - 4$, $x \\in \\mathbb{R}$:',
        },
        {
          kind: 'keypoints',
          items: [
            'értelmezési tartomány: $\\mathbb{R}$; értékkészlet: $[-4; \\infty[$',
            'zérushelyek: $(x-1)^2 = 4$, ezért $x - 1 = \\pm 2$, vagyis $x = -1$ vagy $x = 3$',
            'monotonitás: $]-\\infty; 1]$ intervallumon szigorúan csökken, $[1; \\infty[$ intervallumon szigorúan nő',
            'szélsőérték: minimuma van az $x = 1$ helyen, értéke $-4$; maximuma nincs',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Az $f$ függvény értelmezési tartománya a $[-2; 4]$ intervallum, $f(x) = |x - 1| - 2$. Adja meg az értékkészletét és a zérushelyeit!',
          solution:
            'Az $|x - 1|$ legkisebb értéke 0 (az $x = 1$ helyen), ezért a minimum $-2$. A legnagyobb érték az intervallum végpontjainál lehet: $f(-2) = 3 - 2 = 1$, $f(4) = 3 - 2 = 1$. Értékkészlet: $[-2; 1]$.\n\nZérushelyek: $|x - 1| = 2$, ebből $x = 3$ vagy $x = -1$. Mindkettő benne van az értelmezési tartományban.',
        },
        { kind: 'heading', text: 'További tulajdonságok', emelt: true },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'páros függvény',
              text: '$f(-x) = f(x)$ minden $x$-re; grafikonja tükrös az $y$ tengelyre (például $x^2$, $\\cos x$).',
            },
            {
              term: 'páratlan függvény',
              text: '$f(-x) = -f(x)$; grafikonja középpontosan szimmetrikus az origóra (például $x^3$, $\\sin x$).',
            },
            {
              term: 'periodikus',
              text: 'van olyan $p > 0$, hogy $f(x + p) = f(x)$; például $\\sin x$ periódusa $2\\pi$.',
            },
            {
              term: 'korlátos',
              text: 'az értékei egy alsó és egy felső korlát közé esnek (például $\\sin x$ értékei $-1$ és $1$ között).',
            },
            {
              term: 'inverz függvény',
              text: 'kölcsönösen egyértelmű függvénynél a hozzárendelés megfordítása; grafikonja az eredeti tükörképe az $y = x$ egyenesre.',
            },
            {
              term: 'összetett függvény',
              text: '$f(g(x))$: előbb a $g$, aztán az $f$ hozzárendelést alkalmazzuk.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: rövid kérdés grafikonról (értékkészlet, zérushely, hol nő a függvény).',
            'Igaz–hamis állítások a függvény tulajdonságairól.',
            'II. rész: egy feladat része a függvény ábrázolása és jellemzése adott intervallumon.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori pontvesztés: az intervallum végpontjainak elhagyása vagy rossz zárójele. A $[-4; \\infty[$ azt jelenti, hogy a $-4$ még benne van, a végtelen sosem. Mindig figyelj az adott értelmezési tartományra is.',
        },
        {
          kind: 'tip',
          text: 'Szélsőértéknél két dolgot kell megadni: a szélsőérték **helyét** ($x$) és **értékét** ($f(x)$). Ha csak az egyiket írod, az pontlevonással jár.',
        },
      ],
      topicMatch: ['függvénytulajdonság', '=függvények', 'zérushely', 'monotonitás', 'szélsőérték'],
      quiz: [
        {
          question: 'Mi az $f(x) = (x + 2)^2 - 1$ függvény értékkészlete ($x \\in \\mathbb{R}$)?',
          options: ['$[-1; \\infty[$', '$[2; \\infty[$', '$\\mathbb{R}$', '$]-\\infty; -1]$'],
          answer: 0,
          explanation:
            'A négyzet nem negatív, ezért a legkisebb érték $-1$ (az $x = -2$ helyen), felülről nem korlátos.',
        },
        {
          question: 'Hol van az $f(x) = (x - 3)(x + 1)$ függvénynek zérushelye?',
          options: ['$x = 3$ és $x = -1$', '$x = -3$ és $x = 1$', '$x = 3$', 'nincs zérushelye'],
          answer: 0,
          explanation:
            'Egy szorzat akkor nulla, ha valamelyik tényezője nulla: $x = 3$ vagy $x = -1$.',
        },
        {
          question: 'Melyik NEM függvény grafikonja?',
          options: [
            'egy parabola',
            'egy kör',
            'egy egyenes, amely nem függőleges',
            'egy félparabola',
          ],
          answer: 1,
          explanation: 'A kört a függőleges egyenesek két pontban is metszhetik.',
        },
        {
          question: 'Melyik függvény páratlan?',
          options: ['$x^2$', '$|x|$', '$x^3$', '$\\cos x$'],
          answer: 2,
          explanation: '$(-x)^3 = -x^3$, tehát $x^3$ páratlan; a többi páros.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Függvény', url: wiki('Függvény (matematika)') },
        { label: 'Wikipédia: Monotonitás', url: wiki('Monoton függvény') },
      ],
    },
    {
      id: 'alapfuggvenyek-transzformaciok',
      subject: 'matematika',
      unitId: 'fuggvenyek',
      title: 'Alapfüggvények és transzformációk',
      level: 'both',
      requirement: {
        kozep:
          'Lineáris (ax + b), másodfokú (ax² + bx + c), négyzetgyök- és fordított arányosság (1/x) függvény; egyszerű transzformációk: f(x) + c, f(x + c), c·f(x), |f(x)|',
        emelt:
          'Az abszolútérték-függvény (x ↦ |x|); az alapfüggvények transzformáltjainak ábrázolása c·f(x + b) + d és c·f(ax) + d alakban',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Lineáris**: $f(x) = mx + b$; $m$ a meredekség, $b$ az $y$ tengellyel vett metszéspont.',
            '**Másodfokú**: $x^2$, parabola; $a(x - u)^2 + v$ alakban a csúcs $(u; v)$.',
            '**Négyzetgyök**: $\\sqrt{x}$, csak $x \\ge 0$-ra értelmezett.',
            '**Fordított arányosság**: $\\frac{1}{x}$, hiperbola, $x \\ne 0$.',
            'Eltolás: $f(x) + c$ felfelé ($c > 0$); $f(x - c)$ jobbra ($c > 0$). Tükrözés: $-f(x)$ az $x$ tengelyre.',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: ['**Abszolútérték**: $|x|$, V alakú grafikon, csúcsa az origó.'],
        },
        {
          kind: 'plot',
          title: 'Az alapfüggvények',
          x: [-4, 4],
          y: [-3, 5],
          functions: [
            { label: 'x²', fn: (x) => x * x },
            { label: '√x', fn: (x) => (x >= 0 ? Math.sqrt(x) : NaN) },
            { label: '1/x', fn: (x) => (Math.abs(x) < 0.05 ? NaN : 1 / x) },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A lineáris függvény' },
        {
          kind: 'text',
          text: '$f(x) = mx + b$. Ha $m > 0$, a függvény nő, ha $m < 0$, csökken, ha $m = 0$, konstans. A meredekség megmutatja, mennyit változik az $y$, ha az $x$ eggyel nő. Két pontból: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
        },
        { kind: 'heading', text: 'Transzformációk' },
        {
          kind: 'plot',
          title: 'A parabola eltolása és tükrözése',
          x: [-3, 5],
          y: [-4, 6],
          functions: [
            { label: 'x²', fn: (x) => x * x },
            { label: '(x − 2)² + 1', fn: (x) => (x - 2) ** 2 + 1 },
            { label: '−x²', fn: (x) => -x * x },
          ],
          points: [{ x: 2, y: 1, label: 'csúcs: (2; 1)' }],
        },
        {
          kind: 'compare',
          columns: ['Képlet', 'Mit csinál a grafikonnal?'],
          rows: [
            {
              label: '$f(x) + c$',
              cells: ['függőleges eltolás', '$c > 0$: felfelé, $c < 0$: lefelé'],
            },
            {
              label: '$f(x - c)$',
              cells: ['vízszintes eltolás', '$c > 0$: jobbra (!), $c < 0$: balra'],
            },
            { label: '$-f(x)$', cells: ['tükrözés', 'az $x$ tengelyre'] },
            {
              label: '$k \\cdot f(x)$',
              cells: ['függőleges nyújtás', '$k > 1$: nyújtás, $0 < k < 1$: zsugorítás'],
            },
          ],
        },
        {
          kind: 'warning',
          text: 'A vízszintes eltolás iránya „fordított”: $(x - 2)^2$ grafikonja **jobbra** tolódik 2-vel, mert ugyanazt az értéket 2-vel nagyobb $x$-nél veszi fel.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem:
            'Ábrázolja a $g(x) = |x + 1| - 2$ függvényt, és adja meg a zérushelyeit és a minimumát!',
          solution:
            'Az $|x|$ grafikonját 1-gyel balra, majd 2-vel lefelé toljuk: a csúcs $(-1; -2)$, ez a minimum (helye $x = -1$, értéke $-2$).\n\nZérushelyek: $|x + 1| = 2$, ebből $x + 1 = 2$ vagy $x + 1 = -2$, vagyis $x = 1$ vagy $x = -3$.',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Vízszintes nyújtás**: $f(a x)$ grafikonja az $f$ grafikonjából az $x$ tengely irányú $\\frac{1}{a}$-szoros zsugorítással (ha $a > 1$) kapható. Például $\\sin(2x)$ periódusa $\\pi$, a $\\sin x$ periódusának fele. Emelt szinten gyakori, hogy több transzformációt kell egymás után, helyes sorrendben elvégezni.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Másodfokú függvénynél a **teljes négyzetté alakítás** adja a csúcsot: $x^2 - 6x + 5 = (x - 3)^2 - 4$, tehát a csúcs $(3; -4)$.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Melyik képlet tartozik a grafikonhoz? (párosítás)',
            'Adja meg a parabola csúcspontját, ábrázolja a függvényt adott intervallumon.',
            'Szöveges feladat lineáris modellel (költség, sebesség), másodfokúval (terület maximuma).',
          ],
        },
        {
          kind: 'tip',
          text: 'Ábrázolásnál a vizsgán értékelik a jellegzetes pontokat: csúcs, tengelymetszetek, az intervallum végpontjai. Írd is fel őket, ne csak rajzold.',
        },
      ],
      topicMatch: [
        'lineáris függvény',
        'másodfokú függvény',
        'abszolútérték',
        'függvényábrázolás',
        'grafikon',
        'parabola',
      ],
      quiz: [
        {
          question: 'Hol van az $f(x) = (x + 3)^2 - 5$ parabola csúcsa?',
          options: ['$(3; -5)$', '$(-3; -5)$', '$(-3; 5)$', '$(5; -3)$'],
          answer: 1,
          explanation: '$(x - u)^2 + v$ alakban a csúcs $(u; v)$; itt $u = -3$, $v = -5$.',
        },
        {
          question: 'Hogyan kapjuk $x^2$ grafikonjából $(x - 4)^2$ grafikonját?',
          options: [
            '4-gyel balra toljuk',
            '4-gyel jobbra toljuk',
            '4-gyel felfelé toljuk',
            '4-gyel lefelé toljuk',
          ],
          answer: 1,
          explanation: 'A vízszintes eltolás iránya fordított: $(x - 4)$ jobbra tol.',
        },
        {
          question: 'Mennyi az $(1; 2)$ és $(3; 8)$ pontokon átmenő egyenes meredeksége?',
          options: ['2', '3', '4', '6'],
          answer: 1,
          explanation: '$m = \\frac{8 - 2}{3 - 1} = 3$.',
        },
        {
          question: 'Mi a $\\sqrt{x - 2}$ függvény legbővebb értelmezési tartománya?',
          options: ['$x \\ge 0$', '$x \\ge 2$', '$x > 2$', '$x \\in \\mathbb{R}$'],
          answer: 1,
          explanation: 'A gyök alatt nem lehet negatív szám: $x - 2 \\ge 0$.',
        },
        {
          question: 'Mi a $x^2 - 4x + 1$ csúcspontja?',
          options: ['$(2; -3)$', '$(-2; -3)$', '$(2; 1)$', '$(4; 1)$'],
          answer: 0,
          explanation: '$x^2 - 4x + 1 = (x - 2)^2 - 3$, a csúcs $(2; -3)$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Másodfokú függvény', url: wiki('Másodfokú függvény') },
        { label: 'Wikipédia: Lineáris függvény', url: wiki('Lineáris függvény') },
      ],
    },
    {
      id: 'exponencialis-logaritmus',
      subject: 'matematika',
      unitId: 'fuggvenyek',
      title: 'Exponenciális és logaritmusfüggvény',
      level: 'both',
      requirement: {
        kozep:
          'Az exponenciális függvény (a^x) és tulajdonságai; a hatványozás azonosságai; a logaritmus fogalma, tetszőleges alapú logaritmus kiszámítása 10-es alapú logaritmussal; egyszerű exponenciális egyenletek',
        emelt:
          'A logaritmusfüggvény mint az exponenciális függvény inverze; a szorzat, hányados és hatvány logaritmusának azonosságai; logaritmusos egyenletek; exponenciális folyamatok modellezése',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Exponenciális függvény**: $f(x) = a^x$, ahol $a > 0$ és $a \\ne 1$.',
            'Ha $a > 1$, szigorúan **nő**; ha $0 < a < 1$, szigorúan **csökken**. Mindig átmegy a $(0; 1)$ ponton, értékkészlete $]0; \\infty[$.',
            '**Logaritmus**: $\\log_a b$ az a kitevő, amelyre $a$-t emelve $b$-t kapunk: $a^{\\log_a b} = b$.',
            'Exponenciális folyamat: $N(t) = N_0 \\cdot q^t$ (kamatos kamat, szaporodás, radioaktív bomlás).',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Emelt szinten',
          emelt: true,
          items: [
            'Azonosságok: $\\log_a(xy) = \\log_a x + \\log_a y$; $\\log_a \\frac{x}{y} = \\log_a x - \\log_a y$; $\\log_a x^k = k \\log_a x$.',
          ],
        },
        {
          kind: 'plot',
          title: 'Exponenciális függvények',
          x: [-3, 5],
          y: [-3, 6],
          functions: [
            { label: '2ˣ', fn: (x) => 2 ** x },
            { label: '(1/2)ˣ', fn: (x) => 0.5 ** x },
          ],
          points: [{ x: 0, y: 1, label: '(0; 1)' }],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hatványozás azonosságai (emlékeztető)' },
        {
          kind: 'formula',
          tex: 'a^n \\cdot a^k = a^{n+k} \\qquad \\frac{a^n}{a^k} = a^{n-k} \\qquad (a^n)^k = a^{nk}',
        },
        {
          kind: 'formula',
          tex: 'a^0 = 1 \\qquad a^{-n} = \\frac{1}{a^n} \\qquad a^{\\frac{1}{n}} = \\sqrt[n]{a}',
        },
        { kind: 'heading', text: 'A logaritmus' },
        {
          kind: 'text',
          text: '$\\log_2 8 = 3$, mert $2^3 = 8$. $\\lg$ a 10-es alapú logaritmus. Csak **pozitív** számnak van logaritmusa, és az alap is pozitív, 1-től különböző.',
        },
        {
          kind: 'formula',
          tex: '\\log_a b = \\frac{\\lg b}{\\lg a}',
          caption: 'áttérés más alapra (számológéphez)',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: kamatos kamat',
          problem:
            'Egy 200 000 Ft-os betét évi 5%-os kamattal kamatozik. Mennyi lesz 6 év múlva, és hány év alatt nő 300 000 Ft fölé?',
          solution:
            '6 év múlva: $200\\,000 \\cdot 1{,}05^6 \\approx 268\\,019$ Ft.\n\nA második kérdés: $200\\,000 \\cdot 1{,}05^n > 300\\,000$, vagyis $1{,}05^n > 1{,}5$. Logaritmussal: $n > \\frac{\\lg 1{,}5}{\\lg 1{,}05} \\approx 8{,}31$. Tehát a **9. év** végére nő 300 000 Ft fölé.',
        },
        {
          kind: 'warning',
          text: 'A „hány év alatt” kérdésre egész évet kell válaszolni, és a felfelé kerekítés a helyes: 8,31 év után a 9. év végén haladja meg az összeget.',
        },
        { kind: 'heading', text: 'Logaritmusfüggvény', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'Az $x \\mapsto \\log_a x$ függvény az $x \\mapsto a^x$ **inverze**: a grafikonja az exponenciális függvény grafikonjának tükörképe az $y = x$ egyenesre. Értelmezési tartománya $]0; \\infty[$, értékkészlete $\\mathbb{R}$, zérushelye $x = 1$. Ha $a > 1$, nő; ha $0 < a < 1$, csökken.',
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: logaritmusos egyenlet',
          problem: 'Oldja meg a valós számok halmazán: $\\log_2(x + 1) + \\log_2(x - 1) = 3$.',
          solution:
            'Kikötés: $x + 1 > 0$ és $x - 1 > 0$, tehát $x > 1$.\n\nAz azonosság szerint $\\log_2\\big((x+1)(x-1)\\big) = 3$, vagyis $x^2 - 1 = 8$, $x^2 = 9$, $x = \\pm 3$. A kikötés miatt csak $x = 3$ megoldás.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: $\\log_3 81$ értéke, egyszerű exponenciális egyenlet ($2^x = 32$).',
            'II. rész: szöveges feladat exponenciális modellel (kamatos kamat, népesség, bomlás).',
            'Emelt: logaritmusos egyenlet kikötéssel, paraméteres egyenlőtlenség.',
          ],
        },
        {
          kind: 'warning',
          text: 'Logaritmusos egyenletnél a **kikötés** (a logaritmus argumentuma pozitív) külön pontot ér, és a hamis gyök kizárása is. Ne hagyd ki!',
        },
        {
          kind: 'tip',
          text: 'A számológépes eredményt értelmesen kerekítsd, és írd le a kiinduló egyenletet is: a javítókulcs a felírásért is ad pontot, nem csak a végeredményért.',
        },
      ],
      topicMatch: ['exponenciális', 'logaritm', 'inverzfüggvény'],
      quiz: [
        {
          question: 'Mennyi $\\log_3 81$?',
          options: ['3', '4', '9', '27'],
          answer: 1,
          explanation: '$3^4 = 81$.',
        },
        {
          question: 'Melyik pont van rajta minden $a^x$ függvény grafikonján?',
          options: ['$(1; 0)$', '$(0; 1)$', '$(1; 1)$', '$(0; 0)$'],
          answer: 1,
          explanation: '$a^0 = 1$ minden megengedett $a$-ra.',
        },
        {
          question: 'Mennyi $\\log_2 12 - \\log_2 3$?',
          options: ['1', '2', '3', '4'],
          answer: 1,
          explanation: '$\\log_2 \\frac{12}{3} = \\log_2 4 = 2$.',
          emelt: true,
        },
        {
          question: 'Melyik függvény szigorúan csökkenő?',
          options: ['$2^x$', '$\\left(\\frac{1}{3}\\right)^x$', '$\\log_2 x$', '$10^x$'],
          answer: 1,
          explanation: 'Ha az alap 0 és 1 közé esik, az exponenciális függvény csökken.',
        },
        {
          question: 'Mi a $\\lg(x - 3)$ függvény értelmezési tartománya?',
          options: ['$x > 0$', '$x \\ge 3$', '$x > 3$', '$x \\in \\mathbb{R}$'],
          answer: 2,
          explanation: 'Csak pozitív számnak van logaritmusa: $x - 3 > 0$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Exponenciális függvény', url: wiki('Exponenciális függvény') },
        { label: 'Wikipédia: Logaritmus', url: wiki('Logaritmus') },
      ],
    },
    {
      id: 'fuggvenyvizsgalat-derivalt',
      subject: 'matematika',
      unitId: 'fuggvenyek',
      title: 'Függvényvizsgálat differenciálszámítással',
      level: 'emelt',
      requirement: {
        emelt:
          'A differencia- és differenciálhányados definíciója; az összeg-, különbség-, konstansszoros-, szorzat-, hányados- és összetett függvény deriválási szabálya; érintő egyenlete; monotonitás, szélsőérték és szélsőérték-feladatok a derivált segítségével; polinomfüggvények vizsgálata (konvexitás)',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            "A **derivált** $f'(x_0)$ a függvény változási sebessége az $x_0$ helyen: az érintő **meredeksége**.",
            "Ha $f'(x) > 0$ egy intervallumon, ott $f$ **nő**; ha $f'(x) < 0$, **csökken**.",
            "Szélsőérték ott lehet, ahol $f'(x) = 0$, és a derivált **előjelet vált** (+ → −: maximum, − → +: minimum).",
            "Érintő egyenlete az $x_0$ helyen: $y - f(x_0) = f'(x_0)(x - x_0)$.",
            "Alapderiváltak: $(x^n)' = n x^{n-1}$, $(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$.",
          ],
        },
        {
          kind: 'plot',
          title: 'f(x) = x³ − 3x² és deriváltja',
          x: [-2, 4],
          y: [-6, 5],
          functions: [
            { label: 'f(x) = x³ − 3x²', fn: (x) => x ** 3 - 3 * x ** 2 },
            { label: "f'(x) = 3x² − 6x", fn: (x) => 3 * x * x - 6 * x },
          ],
          points: [
            { x: 0, y: 0, label: 'helyi maximum (0; 0)' },
            { x: 2, y: -4, label: 'helyi minimum (2; −4)' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A derivált fogalma' },
        {
          kind: 'formula',
          tex: "f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}",
          caption: 'a differenciahányados határértéke',
        },
        {
          kind: 'text',
          text: 'A differenciahányados a grafikon két pontján átmenő szelő meredeksége; ha a két pont egymáshoz közelít, a szelőből érintő lesz.',
        },
        { kind: 'heading', text: 'Deriválási szabályok' },
        { kind: 'formula', tex: "(f + g)' = f' + g' \\qquad (c \\cdot f)' = c \\cdot f'" },
        {
          kind: 'formula',
          tex: "(f \\cdot g)' = f'g + fg' \\qquad \\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}",
        },
        {
          kind: 'formula',
          tex: "\\big(f(g(x))\\big)' = f'(g(x)) \\cdot g'(x)",
          caption: 'láncszabály',
        },
        { kind: 'heading', text: 'A teljes függvényvizsgálat menete' },
        {
          kind: 'keypoints',
          items: [
            '1. értelmezési tartomány',
            '2. zérushelyek ($f(x) = 0$)',
            "3. derivált, és ahol $f'(x) = 0$",
            '4. előjeltáblázat: hol nő, hol csökken, hol van szélsőérték',
            "5. (ha kérik) második derivált: $f''(x) > 0$ konvex, $f''(x) < 0$ konkáv, előjelváltásnál inflexiós pont",
            '6. határértékek a tartomány szélein, majd ábrázolás',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa',
          problem: 'Vizsgálja meg az $f(x) = x^3 - 3x^2$ függvény monotonitását és szélsőértékeit!',
          solution:
            "$f'(x) = 3x^2 - 6x = 3x(x - 2)$. Zérushelyei: $x = 0$ és $x = 2$.\n\n- $x < 0$: $f'(x) > 0$, a függvény nő;\n- $0 < x < 2$: $f'(x) < 0$, csökken;\n- $x > 2$: $f'(x) > 0$, nő.\n\nAz $x = 0$ helyen helyi maximum van, $f(0) = 0$; az $x = 2$ helyen helyi minimum, $f(2) = 8 - 12 = -4$.",
        },
        {
          kind: 'example',
          title: 'Szélsőérték-feladat',
          problem:
            'Egy 40 cm hosszú drótból téglalapot hajlítunk. Milyen oldalak mellett lesz a területe a legnagyobb?',
          solution:
            "Ha az egyik oldal $x$, a másik $20 - x$ (a félkerület 20 cm). A terület $T(x) = x(20 - x) = 20x - x^2$, ahol $0 < x < 20$.\n\n$T'(x) = 20 - 2x = 0$, ebből $x = 10$. Itt a derivált pozitívból negatívba vált, tehát maximum: a négyzet (10 cm × 10 cm) területe a legnagyobb, $100\\ \\text{cm}^2$.",
        },
        {
          kind: 'tip',
          text: 'Szélsőérték-feladatnál mindig írd fel a változó **megengedett tartományát** is ($0 < x < 20$), és indokold, hogy a talált hely tényleg maximum vagy minimum (előjelváltás vagy második derivált).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. rész (16 pontos feladat egy része): függvényvizsgálat deriválttal, érintő egyenlete.',
            'Szélsőérték-feladat geometriai vagy gazdasági szövegből (doboz térfogata, költség minimuma).',
            'Integrálással kombinálva: terület két görbe között.',
          ],
        },
        {
          kind: 'warning',
          text: "Gyakori hiba: a szélsőértéket csak az $f'(x) = 0$ feltételből megállapítani. A derivált nullhelye nem mindig szélsőérték (például $x^3$ az $x = 0$ helyen); az előjelváltást is igazolni kell.",
        },
      ],
      topicMatch: ['derivál', 'derivált', 'szélsőérték', 'érintő', 'függvényvizsgálat'],
      quiz: [
        {
          question: 'Mi az $f(x) = 4x^3 - 2x$ deriváltja?',
          options: ['$12x^2 - 2$', '$4x^2 - 2$', '$12x^2 - 2x$', '$x^4 - x^2$'],
          answer: 0,
          explanation: "$(4x^3)' = 12x^2$, $(-2x)' = -2$.",
          emelt: true,
        },
        {
          question: "Mit jelent, ha $f'(x) < 0$ egy intervallumon?",
          options: ['a függvény ott nő', 'a függvény ott csökken', 'ott maximum van', 'ott konvex'],
          answer: 1,
          explanation: 'Negatív derivált: a függvény szigorúan csökken.',
          emelt: true,
        },
        {
          question: 'Mennyi az $f(x) = x^2$ érintőjének meredeksége az $x = 3$ helyen?',
          options: ['3', '6', '9', '2'],
          answer: 1,
          explanation: "$f'(x) = 2x$, ezért $f'(3) = 6$.",
          emelt: true,
        },
        {
          question: 'Az $f(x) = x^3$ függvénynek van-e szélsőértéke az $x = 0$ helyen?',
          options: [
            'igen, maximuma',
            'igen, minimuma',
            'nincs, mert a derivált nem vált előjelet',
            'nincs, mert a derivált nem nulla',
          ],
          answer: 2,
          explanation:
            "$f'(x) = 3x^2 \\ge 0$: nulla az origóban, de nem vált előjelet, ezért nincs szélsőérték.",
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Derivált', url: wiki('Derivált') },
        { label: 'Wikipédia: Szélsőérték', url: wiki('Szélsőérték (matematika)') },
      ],
    },
  ],
};

export default unit;
