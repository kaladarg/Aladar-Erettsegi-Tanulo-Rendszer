import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic: Trigonometria. */
const unit: GuideUnit = {
  id: 'trigonometria',
  subject: 'matematika',
  order: 42,
  title: 'Trigonometria',
  requirementRef: 'Trigonometria',
  intro:
    'A szögfüggvényektől a derékszögű háromszögben a szinusz- és koszinusztételen át a szöveges mérési feladatokig; emelt szinten trigonometrikus egyenletek, azonosságok és addíciós tételek.',
  requirementSource:
    'A matematika témakör az érettségi vizsgakövetelmények „Trigonometria” fejezetét követi (középszint és emelt szint). Ezt a részt még össze kell vetni a hivatalos dokumentummal; ami emelt szintű, azt külön jelöljük.',
  pages: [
    {
      id: 'szogfuggvenyek-derekszogu-haromszog',
      subject: 'matematika',
      unitId: 'trigonometria',
      title: 'Szögfüggvények a derékszögű háromszögben',
      level: 'kozep',
      requirement: {
        kozep:
          'A hegyesszög szinusza, koszinusza, tangense, kotangense a derékszögű háromszögben; nevezetes szögek értékei; derékszögű háromszög oldalainak és szögeinek kiszámítása',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Derékszögű háromszögben az $\\alpha$ hegyesszögre: $\\sin\\alpha = \\frac{\\text{szemközti befogó}}{\\text{átfogó}}$, $\\cos\\alpha = \\frac{\\text{melletti befogó}}{\\text{átfogó}}$.',
            '$\\operatorname{tg}\\alpha = \\frac{\\text{szemközti}}{\\text{melletti}}$, $\\operatorname{ctg}\\alpha = \\frac{\\text{melletti}}{\\text{szemközti}}$.',
            'Alapösszefüggések: $\\sin^2\\alpha + \\cos^2\\alpha = 1$, $\\operatorname{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$, $\\sin(90^\\circ - \\alpha) = \\cos\\alpha$.',
            'A szögfüggvények csak a szögtől függnek, a háromszög méretétől nem (hasonló háromszögek).',
            'Számológép: **fokban** (DEG) számolj, és a szög kiszámításához a $\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ gombot használd.',
          ],
        },
        {
          kind: 'plot',
          title: 'Hegyesszögek szögfüggvényei (fokban, 0° és 90° között)',
          x: [0, 90],
          y: [0, 2],
          functions: [
            { label: 'sin α', fn: (x) => Math.sin((x * Math.PI) / 180) },
            { label: 'cos α', fn: (x) => Math.cos((x * Math.PI) / 180) },
            {
              label: 'tg α',
              fn: (x) => {
                const t = Math.tan((x * Math.PI) / 180);
                return t > 2 ? NaN : t;
              },
            },
          ],
          points: [{ x: 45, y: 1, label: 'tg 45° = 1' }],
        },
      ],
      details: [
        { kind: 'heading', text: 'A definíciók' },
        {
          kind: 'text',
          text: 'Legyen a derékszögű háromszög átfogója $c$, az $\\alpha$ szöggel szemközti befogó $a$, a melletti befogó $b$. Ekkor:',
        },
        {
          kind: 'formula',
          tex: '\\sin\\alpha = \\frac{a}{c} \\qquad \\cos\\alpha = \\frac{b}{c} \\qquad \\operatorname{tg}\\alpha = \\frac{a}{b} \\qquad \\operatorname{ctg}\\alpha = \\frac{b}{a}',
        },
        {
          kind: 'tip',
          text: 'A „szemközti” és a „melletti” mindig az éppen vizsgált szögre vonatkozik. A másik hegyesszögnél (a $\\beta = 90^\\circ - \\alpha$ szögnél) a két befogó szerepe felcserélődik, ezért $\\sin\\beta = \\cos\\alpha$.',
        },
        { kind: 'heading', text: 'Nevezetes szögek értékei' },
        {
          kind: 'keypoints',
          items: [
            '$30^\\circ$: $\\sin = \\frac{1}{2}$, $\\cos = \\frac{\\sqrt{3}}{2}$, $\\operatorname{tg} = \\frac{\\sqrt{3}}{3}$',
            '$45^\\circ$: $\\sin = \\cos = \\frac{\\sqrt{2}}{2}$, $\\operatorname{tg} = 1$',
            '$60^\\circ$: $\\sin = \\frac{\\sqrt{3}}{2}$, $\\cos = \\frac{1}{2}$, $\\operatorname{tg} = \\sqrt{3}$',
          ],
        },
        {
          kind: 'text',
          text: 'Ezeket a szabályos háromszög fele (oldala 2, magassága $\\sqrt{3}$) és a négyzet fele (befogói 1, átfogója $\\sqrt{2}$) adja. Érdemes megtanulni, de a képletgyűjteményben is benne vannak, és a levezetésük gyors.',
        },
        { kind: 'heading', text: 'Kidolgozott példák' },
        {
          kind: 'example',
          title: 'Oldal kiszámítása szögből',
          problem:
            'Egy derékszögű háromszög átfogója 12 cm, az egyik hegyesszöge $35^\\circ$. Számítsa ki a befogóit!',
          solution:
            'A $35^\\circ$-kal szemközti befogó: $a = 12 \\cdot \\sin 35^\\circ \\approx 12 \\cdot 0{,}5736 \\approx 6{,}88$ cm.\n\nA melletti befogó: $b = 12 \\cdot \\cos 35^\\circ \\approx 12 \\cdot 0{,}8192 \\approx 9{,}83$ cm.\n\nEllenőrzés: $6{,}88^2 + 9{,}83^2 \\approx 47{,}3 + 96{,}6 = 143{,}9 \\approx 144 = 12^2$.',
        },
        {
          kind: 'example',
          title: 'Szög kiszámítása oldalakból',
          problem:
            'Egy derékszögű háromszög befogói 5 cm és 12 cm. Számítsa ki az átfogóját és a hegyesszögeit!',
          solution:
            'Pitagorasz-tétellel: $c = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ cm.\n\nAz 5 cm-es befogóval szemközti szög: $\\operatorname{tg}\\alpha = \\frac{5}{12}$, ebből $\\alpha \\approx 22{,}6^\\circ$. A másik szög: $\\beta = 90^\\circ - 22{,}6^\\circ = 67{,}4^\\circ$.',
        },
        {
          kind: 'example',
          title: 'Az alapösszefüggések használata',
          problem:
            'Egy hegyesszögre $\\sin\\alpha = 0{,}6$. Számítsa ki a $\\cos\\alpha$ és a $\\operatorname{tg}\\alpha$ pontos értékét!',
          solution:
            '$\\cos^2\\alpha = 1 - 0{,}6^2 = 0{,}64$. Hegyesszögnél a koszinusz pozitív, ezért $\\cos\\alpha = 0{,}8$.\n\n$\\operatorname{tg}\\alpha = \\frac{0{,}6}{0{,}8} = 0{,}75$.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a nevezetes szögek értékeit gyakran **pontos alakban** kell használni (gyökös kifejezéssel, számológép nélkül), és az azonosságok bizonyítása is szerepelhet; erről az utolsó oldal szól.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: derékszögű háromszög egy oldalának vagy szögének kiszámítása, nevezetes szög értéke.',
            'Az I. rész gyakori feladata: „Mekkora a szöge, ha ...?” és a szög megadása fokban, egy tizedesjegyre kerekítve.',
            'Egyenlő szárú háromszög vagy téglalap felbontása derékszögű háromszögekre (magasság, átló behúzása).',
          ],
        },
        {
          kind: 'warning',
          text: 'A leggyakoribb hiba a rossz számológép-üzemmód: ha a gép radiánban van, $\\sin 30^\\circ$ helyett egész más szám jön ki. Mindig ellenőrizd: $\\sin 30^\\circ$ legyen $0{,}5$.',
        },
        {
          kind: 'tip',
          text: 'A számolást a pontos adatokkal végezd, és csak a végeredményt kerekítsd. Ha közbülső eredményt kerekítesz, a végén elcsúszhat a második tizedesjegy.',
        },
      ],
      topicMatch: ['derékszögű háromszög', 'szögfüggvény', 'szögszámítás'],
      quiz: [
        {
          question:
            'Egy derékszögű háromszög átfogója 13, az $\\alpha$-val szemközti befogó 5. Mennyi $\\sin\\alpha$?',
          options: ['$\\frac{12}{13}$', '$\\frac{5}{12}$', '$\\frac{5}{13}$', '$\\frac{13}{5}$'],
          answer: 2,
          explanation: 'A szinusz a szemközti befogó és az átfogó hányadosa: $\\frac{5}{13}$.',
        },
        {
          question: 'Mennyi $\\cos 60^\\circ$?',
          options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '1'],
          answer: 0,
          explanation: '$\\cos 60^\\circ = \\sin 30^\\circ = \\frac{1}{2}$.',
        },
        {
          question: 'Egy derékszögű háromszög befogói 3 és 3. Mekkora a hegyesszöge?',
          options: ['$30^\\circ$', '$60^\\circ$', '$22{,}5^\\circ$', '$45^\\circ$'],
          answer: 3,
          explanation:
            'A tangens $\\frac{3}{3} = 1$, és $\\operatorname{tg} 45^\\circ = 1$. (Egyenlő szárú derékszögű háromszög.)',
        },
        {
          question: 'Hegyesszögre $\\cos\\alpha = 0{,}8$. Mennyi $\\sin\\alpha$?',
          options: ['0,2', '0,6', '0,64', '0,8'],
          answer: 1,
          explanation:
            '$\\sin^2\\alpha = 1 - 0{,}64 = 0{,}36$, és hegyesszögnél a szinusz pozitív, ezért $0{,}6$.',
        },
        {
          question:
            'Mennyi $\\sin 30^\\circ \\cdot \\cos 60^\\circ + \\operatorname{tg} 45^\\circ$ pontos értéke?',
          options: ['$\\frac{5}{4}$', '$\\frac{3}{2}$', '$\\frac{1}{4}$', '2'],
          answer: 0,
          explanation: '$\\frac{1}{2} \\cdot \\frac{1}{2} + 1 = \\frac{1}{4} + 1 = \\frac{5}{4}$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szögfüggvények', url: wiki('Szögfüggvények') },
        { label: 'Wikipédia: Derékszögű háromszög', url: wiki('Derékszögű háromszög') },
      ],
    },
    {
      id: 'szogfuggvenyek-altalanositas-grafikon',
      subject: 'matematika',
      unitId: 'trigonometria',
      title: 'A szögfüggvények általánosítása és grafikonjai',
      level: 'both',
      requirement: {
        kozep:
          'Szögfüggvények értelmezése tetszőleges szögre (egységkör), fok és radián; a szinusz-, koszinusz- és tangensfüggvény grafikonja, tulajdonságai',
        emelt:
          'Szögfüggvények transzformációi ($a\\sin(bx + c) + d$), periódus, értékkészlet; redukciós összefüggések',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Egységkör**: az $\\alpha$ szöghöz tartozó pont koordinátái $(\\cos\\alpha;\\ \\sin\\alpha)$; $\\operatorname{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$ ($\\cos\\alpha \\ne 0$).',
            '**Radián**: $180^\\circ = \\pi$ rad, vagyis $1\\ \\text{rad} \\approx 57{,}3^\\circ$. Például $90^\\circ = \\frac{\\pi}{2}$, $60^\\circ = \\frac{\\pi}{3}$.',
            '$\\sin x$ és $\\cos x$: periódus $2\\pi$, értékkészlet $[-1; 1]$. $\\sin$ páratlan, $\\cos$ páros.',
            '$\\operatorname{tg} x$: periódus $\\pi$, értékkészlet $\\mathbb{R}$, nincs értelmezve ott, ahol $\\cos x = 0$ ($x = \\frac{\\pi}{2} + k\\pi$).',
            'Előjelek: I. síknegyedben mind pozitív; II.: csak $\\sin$; III.: csak $\\operatorname{tg}$; IV.: csak $\\cos$.',
          ],
        },
        {
          kind: 'plot',
          title: 'A szinusz- és koszinuszfüggvény',
          x: [-7, 7],
          y: [-1.5, 1.5],
          functions: [
            { label: 'sin x', fn: (x) => Math.sin(x) },
            { label: 'cos x', fn: (x) => Math.cos(x) },
          ],
          points: [
            { x: 0, y: 0, label: 'sin 0 = 0' },
            { x: Math.PI / 2, y: 1, label: 'maximum: (π/2; 1)' },
            { x: Math.PI, y: -1, label: 'cos π = −1' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szög mérése: fok és radián' },
        {
          kind: 'formula',
          tex: '\\alpha_{\\text{rad}} = \\alpha_{\\text{fok}} \\cdot \\frac{\\pi}{180^\\circ} \\qquad \\alpha_{\\text{fok}} = \\alpha_{\\text{rad}} \\cdot \\frac{180^\\circ}{\\pi}',
        },
        {
          kind: 'text',
          text: 'A radián a szöghöz tartozó körív hossza az egységkörben. Teljes kör: $360^\\circ = 2\\pi$. A számológépen figyelj az üzemmódra (DEG vagy RAD).',
        },
        { kind: 'heading', text: 'Egységkör és előjelek' },
        {
          kind: 'text',
          text: 'Az $\\alpha$ forgásszöghöz tartozó pont az egységkörön $P(\\cos\\alpha;\\ \\sin\\alpha)$. Így a szögfüggvények bármely szögre értelmezettek, és az előjelüket a pont síknegyede adja. A periódus miatt $\\sin(\\alpha + 360^\\circ) = \\sin\\alpha$, $\\cos(\\alpha + 360^\\circ) = \\cos\\alpha$, $\\operatorname{tg}(\\alpha + 180^\\circ) = \\operatorname{tg}\\alpha$.',
        },
        {
          kind: 'formula',
          tex: '\\sin(180^\\circ - \\alpha) = \\sin\\alpha \\qquad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha \\qquad \\sin(-\\alpha) = -\\sin\\alpha \\qquad \\cos(-\\alpha) = \\cos\\alpha',
          caption: 'a tompaszögek számításához és az egyenletekhez is kell',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa: értékek tetszőleges szögre',
          problem:
            'Határozza meg a pontos értékét: $\\sin 150^\\circ$, $\\cos 210^\\circ$, $\\operatorname{tg} 135^\\circ$!',
          solution:
            '$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$.\n\n$\\cos 210^\\circ = \\cos(180^\\circ + 30^\\circ) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$ (a III. síknegyedben a koszinusz negatív).\n\n$\\operatorname{tg} 135^\\circ = \\frac{\\sin 135^\\circ}{\\cos 135^\\circ} = \\frac{\\sqrt{2}/2}{-\\sqrt{2}/2} = -1$.',
        },
        { kind: 'heading', text: 'A tangensfüggvény grafikonja' },
        {
          kind: 'plot',
          title: 'tg x (két periódus)',
          x: [-4.5, 4.5],
          y: [-5, 5],
          functions: [
            { label: 'tg x', fn: (x) => (Math.abs(Math.tan(x)) > 8 ? NaN : Math.tan(x)) },
          ],
          points: [
            { x: 0, y: 0, label: 'zérushely: 0' },
            { x: Math.PI, y: 0, label: 'zérushely: π' },
            { x: Math.PI / 4, y: 1, label: 'tg π/4 = 1' },
          ],
        },
        {
          kind: 'text',
          text: 'A tangens az $x = \\frac{\\pi}{2} + k\\pi$ helyeken nincs értelmezve (függőleges aszimptoták), egy periódusán belül szigorúan nő, és páratlan függvény.',
        },
        {
          kind: 'compare',
          title: 'A három függvény összehasonlítása',
          columns: ['$\\sin x$ / $\\cos x$', '$\\operatorname{tg} x$'],
          rows: [
            {
              label: 'Értelmezési tartomány',
              cells: ['$\\mathbb{R}$', '$x \\ne \\frac{\\pi}{2} + k\\pi$'],
            },
            { label: 'Értékkészlet', cells: ['$[-1; 1]$', '$\\mathbb{R}$'] },
            { label: 'Periódus', cells: ['$2\\pi$', '$\\pi$'] },
            {
              label: 'Zérushelyek',
              cells: ['$\\sin$: $k\\pi$; $\\cos$: $\\frac{\\pi}{2} + k\\pi$', '$k\\pi$'],
            },
          ],
        },
        { kind: 'heading', text: 'Transzformációk', emelt: true },
        {
          kind: 'formula',
          emelt: true,
          tex: 'f(x) = a \\sin(bx + c) + d: \\quad \\text{amplitúdó } |a|,\\quad \\text{periódus } \\frac{2\\pi}{|b|},\\quad \\text{értékkészlet } [d - |a|;\\ d + |a|]',
        },
        {
          kind: 'plot',
          emelt: true,
          title: 'sin x és 2 sin(3x) + 1',
          x: [-3.5, 3.5],
          y: [-2, 4],
          functions: [
            { label: 'sin x', fn: (x) => Math.sin(x) },
            { label: '2 sin(3x) + 1', fn: (x) => 2 * Math.sin(3 * x) + 1 },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A $2\\sin(3x) + 1$ függvény periódusa $\\frac{2\\pi}{3}$, értékkészlete $[-1; 3]$. A $c$ paraméter vízszintes eltolást okoz: $\\sin(bx + c) = \\sin\\big(b(x + \\frac{c}{b})\\big)$, tehát $\\frac{c}{b}$-vel **balra** tolódik (ha $\\frac{c}{b} > 0$).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Fokok átváltása radiánba és vissza; a $\\cos$ vagy $\\sin$ függvény egy adott pontban felvett értéke.',
            'Adott grafikon alapján: értékkészlet, zérushelyek, hol nő a függvény, melyik képlethez tartozik.',
            'Emelt: $a\\sin(bx + c) + d$ alakú függvény periódusa, értékkészlete, ábrázolása.',
          ],
        },
        {
          kind: 'warning',
          text: 'A $\\sin(2x)$ periódusa nem $2\\pi \\cdot 2$, hanem $\\frac{2\\pi}{2} = \\pi$: a nagyobb $b$ **rövidebb** periódust jelent. A $\\sin x + 2$ (eltolás) és a $\\sin(x + 2)$ (vízszintes eltolás) sem ugyanaz.',
        },
        {
          kind: 'tip',
          text: 'Jegyezd meg a szinusz-grafikon öt pontját egy periódusban: $0,\\ 1,\\ 0,\\ -1,\\ 0$ az $x = 0,\\ \\frac{\\pi}{2},\\ \\pi,\\ \\frac{3\\pi}{2},\\ 2\\pi$ helyeken. Ebből minden transzformált alak gyorsan felrajzolható.',
        },
      ],
      topicMatch: ['szögfüggvények', 'trigonometrikus függvény', 'radián'],
      quiz: [
        {
          question: 'Hány radián a $60^\\circ$?',
          options: [
            '$\\frac{\\pi}{6}$',
            '$\\frac{\\pi}{4}$',
            '$\\frac{2\\pi}{3}$',
            '$\\frac{\\pi}{3}$',
          ],
          answer: 3,
          explanation: '$60^\\circ = \\frac{60}{180}\\pi = \\frac{\\pi}{3}$.',
        },
        {
          question: 'Mennyi $\\cos 120^\\circ$?',
          options: [
            '$-\\frac{1}{2}$',
            '$\\frac{1}{2}$',
            '$-\\frac{\\sqrt{3}}{2}$',
            '$\\frac{\\sqrt{3}}{2}$',
          ],
          answer: 0,
          explanation:
            '$\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.',
        },
        {
          question: 'Mi a $\\cos x$ függvény értékkészlete?',
          options: ['$\\mathbb{R}$', '$[0; 1]$', '$[-1; 1]$', '$[-\\pi; \\pi]$'],
          answer: 2,
          explanation: 'A pont koordinátái az egységkörön $-1$ és $1$ közé esnek.',
        },
        {
          question: 'Melyik helyen NINCS értelmezve a $\\operatorname{tg} x$?',
          options: ['$x = 0$', '$x = \\pi$', '$x = \\frac{\\pi}{4}$', '$x = \\frac{\\pi}{2}$'],
          answer: 3,
          explanation:
            '$\\operatorname{tg} x = \\frac{\\sin x}{\\cos x}$, és $\\cos\\frac{\\pi}{2} = 0$.',
        },
        {
          question: 'Mi az $f(x) = 3\\sin(2x) - 1$ függvény periódusa és értékkészlete?',
          options: [
            '$\\pi$; $[-4; 2]$',
            '$2\\pi$; $[-4; 2]$',
            '$\\pi$; $[-3; 3]$',
            '$4\\pi$; $[-1; 3]$',
          ],
          answer: 0,
          explanation:
            'Periódus: $\\frac{2\\pi}{2} = \\pi$. Értékkészlet: $[-1 - 3;\\ -1 + 3] = [-4; 2]$.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szinusz', url: wiki('Szinusz és koszinusz') },
        { label: 'Wikipédia: Radián', url: wiki('Radián') },
        { label: 'Wikipédia: Egységkör', url: wiki('Egységkör') },
      ],
    },
    {
      id: 'szinusztetel-koszinusztetel-terulet',
      subject: 'matematika',
      unitId: 'trigonometria',
      title: 'Szinusztétel, koszinusztétel, háromszög területe',
      level: 'both',
      requirement: {
        kozep:
          'A szinusztétel és a koszinusztétel alkalmazása háromszögek oldalainak, szögeinek kiszámítására; a háromszög területe két oldalból és a közbezárt szögből',
        emelt:
          'A körülírt kör sugara a szinusztételben; az egyértelműség vizsgálata (két oldal és a nagyobbikkal szemközti szög hiánya, két megoldás); összetett, több háromszöget érintő feladatok',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Szinusztétel**: $\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma} = 2R$ ($R$ a körülírt kör sugara).',
            '**Koszinusztétel**: $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$ (a Pitagorasz-tétel általánosítása).',
            '**Terület**: $T = \\frac{ab\\sin\\gamma}{2}$, két oldalból és a közbezárt szögből.',
            'Melyiket mikor? **Szinusztétel**: van egy szög–szemközti oldal pár. **Koszinusztétel**: két oldal és a közbezárt szög, vagy mindhárom oldal.',
            'A szögek összege $180^\\circ$; a nagyobb oldallal szemben nagyobb szög van.',
          ],
        },
        {
          kind: 'formula',
          tex: 'T = \\frac{ab\\sin\\gamma}{2} = \\frac{bc\\sin\\alpha}{2} = \\frac{ac\\sin\\beta}{2}',
          caption: 'a háromszög területe szinusszal',
        },
      ],
      details: [
        { kind: 'heading', text: 'A két tétel' },
        {
          kind: 'formula',
          tex: '\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma}',
          caption: 'szinusztétel',
        },
        {
          kind: 'formula',
          tex: 'a^2 = b^2 + c^2 - 2bc\\cos\\alpha \\qquad b^2 = a^2 + c^2 - 2ac\\cos\\beta \\qquad c^2 = a^2 + b^2 - 2ab\\cos\\gamma',
          caption: 'koszinusztétel',
        },
        {
          kind: 'text',
          text: 'Szöget a koszinusztételből így kapunk: $\\cos\\gamma = \\frac{a^2 + b^2 - c^2}{2ab}$. Ha az eredmény negatív, a szög tompaszög; $\\gamma = 90^\\circ$ esetén a tétel a Pitagorasz-tételt adja.',
        },
        {
          kind: 'compare',
          title: 'Melyik tételt használd?',
          columns: ['Adott', 'Eszköz'],
          rows: [
            {
              label: 'két szög és egy oldal',
              cells: ['a harmadik szög: $180^\\circ$-ból', 'szinusztétel'],
            },
            {
              label: 'két oldal és a közbezárt szög',
              cells: ['a harmadik oldal', 'koszinusztétel'],
            },
            { label: 'három oldal', cells: ['a szögek', 'koszinusztétel'] },
            {
              label: 'két oldal és az egyikkel szemközti szög',
              cells: ['a másik szög', 'szinusztétel (két megoldás is lehet!)'],
            },
          ],
        },
        { kind: 'heading', text: 'Kidolgozott példák' },
        {
          kind: 'example',
          title: 'Szinusztétel: két szög és egy oldal',
          problem:
            'Egy háromszögben $a = 8$ cm, $\\alpha = 40^\\circ$, $\\beta = 65^\\circ$. Számítsa ki a hiányzó oldalakat és szöget!',
          solution:
            '$\\gamma = 180^\\circ - 40^\\circ - 65^\\circ = 75^\\circ$.\n\nSzinusztétellel: $b = \\frac{a\\sin\\beta}{\\sin\\alpha} = \\frac{8 \\cdot \\sin 65^\\circ}{\\sin 40^\\circ} \\approx \\frac{8 \\cdot 0{,}9063}{0{,}6428} \\approx 11{,}28$ cm.\n\n$c = \\frac{a\\sin\\gamma}{\\sin\\alpha} = \\frac{8 \\cdot \\sin 75^\\circ}{\\sin 40^\\circ} \\approx \\frac{8 \\cdot 0{,}9659}{0{,}6428} \\approx 12{,}02$ cm.',
        },
        {
          kind: 'example',
          title: 'Koszinusztétel: három oldal',
          problem:
            'Egy háromszög oldalai $a = 7$, $b = 9$, $c = 11$. Számítsa ki a legnagyobb szögét, és a háromszög területét!',
          solution:
            'A legnagyobb szög a legnagyobb oldallal ($c$) szemben van:\n\n$\\cos\\gamma = \\frac{7^2 + 9^2 - 11^2}{2 \\cdot 7 \\cdot 9} = \\frac{49 + 81 - 121}{126} = \\frac{9}{126} \\approx 0{,}0714$, ebből $\\gamma \\approx 85{,}9^\\circ$ (hegyesszög, mert a koszinusz pozitív).\n\nTerület: $T = \\frac{7 \\cdot 9 \\cdot \\sin 85{,}9^\\circ}{2} \\approx \\frac{63 \\cdot 0{,}9974}{2} \\approx 31{,}4$ területegység.',
        },
        {
          kind: 'example',
          title: 'Terület két oldalból és a szögből',
          problem:
            'Egy háromszög két oldala 10 cm és 14 cm, a közbezárt szög $50^\\circ$. Mekkora a területe?',
          solution:
            '$T = \\frac{10 \\cdot 14 \\cdot \\sin 50^\\circ}{2} = 70 \\cdot 0{,}7660 \\approx 53{,}6\\ \\text{cm}^2$.',
        },
        { kind: 'heading', text: 'Két megoldás is lehet', emelt: true },
        {
          kind: 'example',
          emelt: true,
          title: 'Kidolgozott példa: két oldal és az egyikkel szemközti szög',
          problem:
            'Egy háromszögben $a = 6$ cm, $b = 10$ cm, $\\alpha = 30^\\circ$. Számítsa ki a $c$ oldalt!',
          solution:
            'Szinusztétellel: $\\sin\\beta = \\frac{b\\sin\\alpha}{a} = \\frac{10 \\cdot 0{,}5}{6} \\approx 0{,}8333$.\n\nEnnek **két** megoldása van a $0^\\circ$ és $180^\\circ$ között: $\\beta_1 \\approx 56{,}4^\\circ$ és $\\beta_2 \\approx 123{,}6^\\circ$. Mindkettő jó, mert $30^\\circ + 123{,}6^\\circ < 180^\\circ$.\n\n1. eset: $\\gamma_1 = 180^\\circ - 30^\\circ - 56{,}4^\\circ = 93{,}6^\\circ$, $c_1 = \\frac{6\\sin 93{,}6^\\circ}{\\sin 30^\\circ} \\approx 11{,}98$ cm.\n\n2. eset: $\\gamma_2 = 180^\\circ - 30^\\circ - 123{,}6^\\circ = 26{,}4^\\circ$, $c_2 = \\frac{6\\sin 26{,}4^\\circ}{\\sin 30^\\circ} \\approx 5{,}34$ cm.\n\nTehát két háromszög felel meg a feltételeknek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Ha az adott szög a **nagyobb** oldallal szemben van, csak egy megoldás lehet (a nagyobb oldallal szemben nagyobb szög áll, így a másik szög biztosan hegyesszög). Ha a $\\sin$ értéke 1-nél nagyobb lenne, nincs megoldás.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A körülírt kör sugara: $R = \\frac{a}{2\\sin\\alpha}$. A fenti első példában $R = \\frac{8}{2 \\cdot 0{,}6428} \\approx 6{,}22$ cm.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. rész: egy háromszög hiányzó adatainak kiszámítása, majd a terület; gyakran szöveges kerettel (telek, mérés).',
            'Sokszög vagy négyszög felbontása háromszögekre az átlóval, majd koszinusztétel és terület.',
            'Emelt: két megoldás vizsgálata, körülírt kör sugara, trigonometrikus bizonyítás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: a szinusztételnél **nem** a megfelelő oldal–szög párt használod (az $a$ oldal mindig az $\\alpha$ szöggel szemben van); a koszinusztételnél a $-2ab\\cos\\gamma$ előjelét elrontod; a szöget a $\\sin$ alapján keresed, és elfelejted, hogy tompaszög is lehet.',
        },
        {
          kind: 'tip',
          text: 'Ha tompaszög is szóba jöhet, a szöget érdemes **koszinusztétellel** kiszámolni: a koszinusz előjele egyértelműen megmondja, hogy hegyes- vagy tompaszögről van-e szó. Mindig rajzolj ábrát és jelöld rajta az adatokat.',
        },
      ],
      topicMatch: [
        'szinusztétel',
        'koszinusztétel',
        'szinuszos területképlet',
        'háromszög területe',
      ],
      quiz: [
        {
          question:
            'Egy háromszögben $a = 5$, $b = 8$, $\\gamma = 60^\\circ$. Mekkora a $c$ oldal?',
          options: ['7', '$\\sqrt{89}$', '$\\sqrt{129}$', '13'],
          answer: 0,
          explanation:
            '$c^2 = 25 + 64 - 2 \\cdot 5 \\cdot 8 \\cdot \\frac{1}{2} = 89 - 40 = 49$, tehát $c = 7$.',
        },
        {
          question:
            'Mekkora annak a háromszögnek a területe, amelynek két oldala 6 és 8, a közbezárt szög $30^\\circ$?',
          options: ['24', '48', '12', '$12\\sqrt{3}$'],
          answer: 2,
          explanation:
            '$T = \\frac{6 \\cdot 8 \\cdot \\sin 30^\\circ}{2} = \\frac{48 \\cdot 0{,}5}{2} = 12$.',
        },
        {
          question:
            'Egy háromszögben $\\alpha = 30^\\circ$, $\\beta = 45^\\circ$, $a = 4$. Mekkora $b$?',
          options: ['$2\\sqrt{2}$', '$4\\sqrt{2}$', '8', '$4\\sqrt{3}$'],
          answer: 1,
          explanation:
            '$b = \\frac{a\\sin\\beta}{\\sin\\alpha} = \\frac{4 \\cdot \\frac{\\sqrt{2}}{2}}{\\frac{1}{2}} = 4\\sqrt{2}$.',
        },
        {
          question: 'Egy háromszög oldalai 5, 6, 10. Milyen szögű a legnagyobb szöge?',
          options: ['hegyesszög', 'derékszög', 'tompaszög', 'nem dönthető el'],
          answer: 2,
          explanation:
            '$\\cos\\gamma = \\frac{25 + 36 - 100}{60} = -\\frac{39}{60} < 0$, ezért tompaszög.',
        },
        {
          question:
            'Egy háromszögben $a = 6$, $b = 10$, $\\alpha = 30^\\circ$. Hány háromszög felel meg ezeknek az adatoknak?',
          options: ['egy sem', 'pontosan egy', 'pontosan kettő', 'végtelen sok'],
          answer: 2,
          explanation:
            '$\\sin\\beta = \\frac{10 \\cdot 0{,}5}{6} \\approx 0{,}83 < 1$, és $\\beta$ lehet $56{,}4^\\circ$ és $123{,}6^\\circ$ is; mindkettővel kijön háromszög.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Szinusztétel', url: wiki('Szinusztétel') },
        { label: 'Wikipédia: Koszinusztétel', url: wiki('Koszinusztétel') },
        { label: 'Wikipédia: Háromszög területe', url: wiki('Háromszög területe') },
      ],
    },
    {
      id: 'trigonometria-alkalmazasok-szoveges',
      subject: 'matematika',
      unitId: 'trigonometria',
      title: 'Trigonometria alkalmazásai: szöveges feladatok',
      level: 'kozep',
      requirement: {
        kozep:
          'Szögfüggvények és háromszögtételek alkalmazása gyakorlati feladatokban: magasság- és távolságmérés, emelkedési szög, navigáció, síkidomok és testek adatai',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Emelkedési szög**: a vízszintes és a célpontra mutató egyenes szöge fölfelé; **depressziószög**: lefelé.',
            'Mérés két pontból: a két pont távolsága az alap, a két szöget a háromszögben a szinusztétellel használod.',
            'Lépések: 1. ábra, 2. a derékszögű vagy általános háromszög felismerése, 3. a megfelelő tétel, 4. számolás, 5. válasz mértékegységgel.',
            'Az **emelkedő** meredekségét százalékban adják: $p\\%$ azt jelenti, hogy 100 m vízszintesen $p$ m emelkedés van, ezért $\\operatorname{tg}\\alpha = \\frac{p}{100}$.',
          ],
        },
        {
          kind: 'tip',
          text: 'A szöveges feladatok nagy része egy vagy két háromszögre vezethető vissza. A nehéz rész az ábra elkészítése, nem a számolás.',
        },
      ],
      details: [
        { kind: 'heading', text: 'Kidolgozott példák' },
        {
          kind: 'example',
          title: 'Torony magassága (emelkedési szög)',
          problem:
            'Egy torony lábától 40 m-re a torony csúcsát $32^\\circ$-os emelkedési szögben látjuk. Milyen magas a torony? (A szemmagasságot hanyagolja el.)',
          solution:
            'A derékszögű háromszögben a szöggel szemközti befogó a magasság, a melletti 40 m:\n\n$m = 40 \\cdot \\operatorname{tg} 32^\\circ \\approx 40 \\cdot 0{,}6249 \\approx 25{,}0$ m.\n\nA torony kb. 25 m magas.',
        },
        {
          kind: 'example',
          title: 'Megközelíthetetlen pont távolsága',
          problem:
            'Egy folyó partján az $A$ és $B$ pontok 50 m-re vannak egymástól. A túlparti $C$ fát az $A$ pontból $62^\\circ$, a $B$ pontból $71^\\circ$ szög alatt látjuk az $AB$ szakaszhoz képest. A fa csúcsa az $A$ pontból $28^\\circ$-os emelkedési szögben látszik. Milyen messze van a fa az $A$ ponttól, és milyen magas?',
          solution:
            'Az $ABC$ háromszögben $\\gamma = 180^\\circ - 62^\\circ - 71^\\circ = 47^\\circ$.\n\nSzinusztétellel $AC$ (a $B$-nél lévő szöggel szemben): $AC = \\frac{50 \\cdot \\sin 71^\\circ}{\\sin 47^\\circ} \\approx \\frac{50 \\cdot 0{,}9455}{0{,}7314} \\approx 64{,}6$ m.\n\nA fa magassága: $m = AC \\cdot \\operatorname{tg} 28^\\circ \\approx 64{,}6 \\cdot 0{,}5317 \\approx 34{,}4$ m.',
        },
        {
          kind: 'example',
          title: 'Hajók távolsága (koszinusztétel)',
          problem:
            'Két hajó egyszerre indul ugyanabból a kikötőből, egymással $70^\\circ$-os szöget bezáró irányban. Az egyik 20 km/h, a másik 30 km/h sebességgel halad. Milyen messze lesznek egymástól 2 óra múlva?',
          solution:
            '2 óra alatt 40 km-t, illetve 60 km-t tesznek meg. A kikötő és a két hajó háromszöget alkot, amelyben két oldal 40 és 60, a közbezárt szög $70^\\circ$:\n\n$d^2 = 40^2 + 60^2 - 2 \\cdot 40 \\cdot 60 \\cdot \\cos 70^\\circ = 5200 - 4800 \\cdot 0{,}3420 \\approx 3558$,\n\nebből $d \\approx 59{,}7$ km.',
        },
        {
          kind: 'example',
          title: 'Emelkedő hajlásszöge',
          problem: 'Egy útszakasz emelkedése 12%. Hány fokos szöget zár be a vízszintessel?',
          solution:
            '$\\operatorname{tg}\\alpha = \\frac{12}{100} = 0{,}12$, ebből $\\alpha \\approx 6{,}8^\\circ$.',
        },
        {
          kind: 'warning',
          text: 'A „12%-os emelkedő” **nem** $12^\\circ$! A százalék a tangenssel arányos, a szög ennél jóval kisebb.',
        },
        { kind: 'heading', text: 'Egy minta a síkidomokra', emelt: true },
        {
          kind: 'example',
          emelt: true,
          title: 'Paralelogramma területe és átlói',
          problem:
            'Egy paralelogramma oldalai 8 cm és 11 cm, az általuk bezárt szög $60^\\circ$. Számítsa ki a területét és a rövidebb átlóját!',
          solution:
            'Terület: $T = 8 \\cdot 11 \\cdot \\sin 60^\\circ = 88 \\cdot \\frac{\\sqrt{3}}{2} \\approx 76{,}2\\ \\text{cm}^2$.\n\nA rövidebb átló a $60^\\circ$-os szöggel szemben van (a szomszédos szög $120^\\circ$ a hosszabb átlót adja): $e^2 = 8^2 + 11^2 - 2 \\cdot 8 \\cdot 11 \\cdot \\cos 60^\\circ = 185 - 88 = 97$, tehát $e = \\sqrt{97} \\approx 9{,}85$ cm.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. rész: geometriai szöveges feladat, amelyben egy mérési vagy tereptárgy-helyzet vezet háromszögre (kilátó, folyó, repülő, hajó).',
            'Térgeometriával keverve: gúla, kúp vagy hasáb oldaléle és alaplapja közötti szög kiszámítása.',
            'A feladat többlépéses: előbb egy oldal vagy szög, utána terület, térfogat vagy távolság.',
          ],
        },
        {
          kind: 'warning',
          text: 'A pontvesztés fő oka a hiányzó ábra és a hiányzó válaszmondat. Írd le azt is, mit számoltál ki (például „a fa magassága”), és tedd mellé a mértékegységet.',
        },
        {
          kind: 'tip',
          text: 'Térbeli testnél (például négyzet alapú gúla) a keresett szöget keresd egy **derékszögű háromszögben**: az alapélre merőleges magasság és az alap félátlója vagy az oldallap magassága adja.',
        },
      ],
      topicMatch: ['=trigonometria'],
      quiz: [
        {
          question:
            'Egy 15 m magas fa árnyéka 20 m hosszú. Mekkora szög alatt látszik a fa csúcsa az árnyék végéről?',
          options: ['$41{,}4^\\circ$', '$48{,}6^\\circ$', '$36{,}9^\\circ$', '$53{,}1^\\circ$'],
          answer: 2,
          explanation:
            '$\\operatorname{tg}\\alpha = \\frac{15}{20} = 0{,}75$, ebből $\\alpha \\approx 36{,}9^\\circ$.',
        },
        {
          question: 'Egy lejtő 8%-os emelkedésű. Hány métert emelkedik 250 m vízszintes úton?',
          options: ['8 m', '20 m', '25 m', '80 m'],
          answer: 1,
          explanation:
            'A 8% azt jelenti, hogy 100 m vízszintesen 8 m emelkedés; 250 m-en $2{,}5 \\cdot 8 = 20$ m.',
        },
        {
          question:
            'Melyik tétellel számolnád ki a két hajó távolságát, ha ismered az útjukat és az irányaik szögét?',
          options: ['Pitagorasz-tétel', 'szinusztétel', 'koszinusztétel', 'Thalész-tétel'],
          answer: 2,
          explanation:
            'Két oldal és a közbezárt szög ismert, a harmadik oldalt keressük: koszinusztétel.',
        },
        {
          question:
            'Egy négyszög egyik átlója 10 cm, a belőle induló két oldal 6 és 8 cm. Milyen szöget zár be a két oldal?',
          options: ['$60^\\circ$', '$45^\\circ$', '$120^\\circ$', '$90^\\circ$'],
          answer: 3,
          explanation:
            '$6^2 + 8^2 = 100 = 10^2$, tehát a Pitagorasz-tétel megfordítása szerint a szög derékszög.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Trigonometria', url: wiki('Trigonometria') },
        { label: 'Wikipédia: Emelkedési szög', url: wiki('Emelkedési szög') },
      ],
    },
    {
      id: 'trigonometrikus-egyenletek-addicios-tetelek',
      subject: 'matematika',
      unitId: 'trigonometria',
      title: 'Trigonometrikus egyenletek, azonosságok, addíciós tételek',
      level: 'emelt',
      requirement: {
        emelt:
          'Trigonometrikus egyenletek és egyenlőtlenségek megoldása; azonosságok bizonyítása; az addíciós tételek és a kétszeres szög függvényei',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Alapegyenletek**: $\\sin x = a$: $x = \\alpha + 2k\\pi$ vagy $x = \\pi - \\alpha + 2k\\pi$; $\\cos x = a$: $x = \\pm\\alpha + 2k\\pi$; $\\operatorname{tg} x = a$: $x = \\alpha + k\\pi$ ($k \\in \\mathbb{Z}$).',
            '**Addíciós tételek**: $\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta$, $\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta$.',
            '**Kétszeres szög**: $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, $\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1$.',
            'Az egyenleteket általában **egyetlen függvényre** vezetjük vissza ($\\sin^2 x + \\cos^2 x = 1$ segítségével), vagy szorzattá alakítjuk.',
            'Mindig adj meg **kikötést** (például $\\cos x \\ne 0$), és ellenőrizd a megoldásokat.',
          ],
        },
        {
          kind: 'plot',
          title: 'sin x = 0,5 megoldásai',
          x: [-1, 7],
          y: [-1.5, 1.5],
          functions: [
            { label: 'sin x', fn: (x) => Math.sin(x) },
            { label: '0,5', fn: () => 0.5 },
          ],
          points: [
            { x: Math.PI / 6, y: 0.5, label: 'π/6' },
            { x: (5 * Math.PI) / 6, y: 0.5, label: '5π/6' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Azonosságok' },
        {
          kind: 'formula',
          tex: '\\sin^2 x + \\cos^2 x = 1 \\qquad \\operatorname{tg} x = \\frac{\\sin x}{\\cos x} \\qquad \\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x',
        },
        {
          kind: 'formula',
          tex: '\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta \\qquad \\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta',
          caption: 'addíciós tételek',
        },
        {
          kind: 'formula',
          tex: '\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha \\qquad \\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha',
          caption: 'kétszeres szög (az addíciós tételből, $\\beta = \\alpha$ esetén)',
        },
        {
          kind: 'example',
          title: 'Pontos érték az addíciós tétellel',
          problem: 'Számítsa ki a $\\sin 75^\\circ$ pontos értékét!',
          solution:
            '$\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4} \\approx 0{,}9659$.',
        },
        {
          kind: 'example',
          title: 'Azonosság bizonyítása',
          problem:
            'Igazolja, hogy $\\frac{1 - \\cos 2x}{\\sin 2x} = \\operatorname{tg} x$, ahol $\\sin 2x \\ne 0$!',
          solution:
            'Az $1 - \\cos 2x = 1 - (1 - 2\\sin^2 x) = 2\\sin^2 x$ és $\\sin 2x = 2\\sin x\\cos x$ felhasználásával:\n\n$\\frac{2\\sin^2 x}{2\\sin x\\cos x} = \\frac{\\sin x}{\\cos x} = \\operatorname{tg} x$.\n\nA kikötés ($\\sin 2x \\ne 0$) miatt $\\sin x \\ne 0$ és $\\cos x \\ne 0$, így az egyszerűsítés megengedett.',
        },
        { kind: 'heading', text: 'Egyenletek megoldása' },
        {
          kind: 'example',
          title: 'Másodfokúra visszavezethető egyenlet',
          problem: 'Oldja meg a $[0;\\ 2\\pi]$ intervallumon: $2\\cos^2 x + \\sin x - 1 = 0$.',
          solution:
            'A $\\cos^2 x = 1 - \\sin^2 x$ helyettesítéssel: $2 - 2\\sin^2 x + \\sin x - 1 = 0$, azaz $2\\sin^2 x - \\sin x - 1 = 0$.\n\nA $s = \\sin x$ jelöléssel $2s^2 - s - 1 = 0$, ebből $s = 1$ vagy $s = -\\frac{1}{2}$.\n\n- $\\sin x = 1$: $x = \\frac{\\pi}{2}$.\n- $\\sin x = -\\frac{1}{2}$: $x = \\frac{7\\pi}{6}$ vagy $x = \\frac{11\\pi}{6}$.\n\nEllenőrzés: $x = \\frac{7\\pi}{6}$-nál $2 \\cdot \\frac{3}{4} - \\frac{1}{2} - 1 = 0$. Három megoldás van: $\\frac{\\pi}{2},\\ \\frac{7\\pi}{6},\\ \\frac{11\\pi}{6}$.',
        },
        {
          kind: 'example',
          title: 'Szorzattá alakítás',
          problem: 'Oldja meg a $[0;\\ 2\\pi]$ intervallumon: $\\sin 2x = \\cos x$.',
          solution:
            '$2\\sin x\\cos x - \\cos x = 0$, azaz $\\cos x\\,(2\\sin x - 1) = 0$.\n\n- $\\cos x = 0$: $x = \\frac{\\pi}{2}$ vagy $x = \\frac{3\\pi}{2}$.\n- $\\sin x = \\frac{1}{2}$: $x = \\frac{\\pi}{6}$ vagy $x = \\frac{5\\pi}{6}$.\n\nÖsszesen négy megoldás van.',
        },
        {
          kind: 'warning',
          text: 'Ne oszd el az egyenletet $\\cos x$-szel! Így elveszted azokat a megoldásokat, ahol $\\cos x = 0$ (a fenti példában két megoldást). Vidd inkább egy oldalra, és emelj ki.',
        },
        {
          kind: 'tip',
          text: 'Ha az intervallum nincs megadva, a megoldást $k \\in \\mathbb{Z}$ paraméterrel kell felírni: $x = \\frac{\\pi}{6} + 2k\\pi$ vagy $x = \\frac{5\\pi}{6} + 2k\\pi$. Ha fokban dolgozol, $360^\\circ \\cdot k$ szerepel.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Emelt II. rész: trigonometrikus egyenlet adott intervallumon vagy $\\mathbb{R}$-en, gyakran másodfokúra vezethető vissza.',
            'Azonosság bizonyítása, vagy pontos érték számítása (például $\\sin 15^\\circ$, $\\cos 75^\\circ$) addíciós tétellel.',
            'Geometriai feladathoz kapcsolódó egyenlet (háromszög, paralelogramma szöge, területe adott érték).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: egy megoldást vesz fel a $\\sin x = a$ egyenletből a kettő helyett; elfelejti a periódust (a $2k\\pi$-t); a kapott szögeket nem ellenőrzi az intervallummal; az $\\operatorname{tg}$-nál nem ír kikötést.',
        },
        {
          kind: 'tip',
          text: 'Egyenletnél a pontszám nagy része a megoldás menetére jár: a helyettesítés, a másodfokú megoldása, **mindkét** ágból a szögek, és az ellenőrzés. Ezek egyenként is pontot érnek, ezért akkor is írd le, ha a számolást rontod.',
        },
      ],
      topicMatch: ['trigonometrikus egyenlet'],
      quiz: [
        {
          question: 'Mennyi $\\sin 2\\alpha$, ha $\\sin\\alpha = 0{,}6$ és $\\alpha$ hegyesszög?',
          options: ['1,2', '0,36', '0,6', '0,96'],
          answer: 3,
          explanation:
            '$\\cos\\alpha = 0{,}8$, ezért $\\sin 2\\alpha = 2 \\cdot 0{,}6 \\cdot 0{,}8 = 0{,}96$.',
          emelt: true,
        },
        {
          question:
            'Hány megoldása van a $\\sin x = \\frac{1}{2}$ egyenletnek a $[0;\\ 2\\pi]$ intervallumon?',
          options: ['1', '2', '3', '4'],
          answer: 1,
          explanation:
            'A megoldások $\\frac{\\pi}{6}$ és $\\frac{5\\pi}{6}$; több ilyen szög nincs a kört egyszer megkerülve.',
          emelt: true,
        },
        {
          question: 'Melyik a $\\cos(\\alpha + \\beta)$ helyes alakja?',
          options: [
            '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
            '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$',
            '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
            '$\\cos\\alpha + \\cos\\beta$',
          ],
          answer: 1,
          explanation:
            'Az összeg koszinuszánál a szorzatok különbsége áll: $\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$.',
          emelt: true,
        },
        {
          question: 'Mi a $\\cos 2x = 1 - 2\\sin^2 x$ azonosság forrása?',
          options: [
            'a Pitagorasz-tétel',
            '$\\cos^2 x - \\sin^2 x$ és $\\cos^2 x = 1 - \\sin^2 x$',
            'a koszinusztétel',
            'a szinusztétel',
          ],
          answer: 1,
          explanation:
            '$\\cos 2x = \\cos^2 x - \\sin^2 x$, és $\\cos^2 x$ helyére $1 - \\sin^2 x$ írva $1 - 2\\sin^2 x$ adódik.',
          emelt: true,
        },
        {
          question: 'Mi a $\\operatorname{tg} x = 1$ egyenlet általános megoldása?',
          options: [
            '$x = \\frac{\\pi}{4} + 2k\\pi$',
            '$x = \\frac{\\pi}{4} + k\\pi$',
            '$x = \\pm\\frac{\\pi}{4} + k\\pi$',
            '$x = \\frac{3\\pi}{4} + k\\pi$',
          ],
          answer: 1,
          explanation:
            'A tangens periódusa $\\pi$, és $\\operatorname{tg}\\frac{\\pi}{4} = 1$, ezért $x = \\frac{\\pi}{4} + k\\pi$.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Trigonometrikus azonosságok',
          url: wiki('Trigonometrikus azonosságok'),
        },
        { label: 'Wikipédia: Addíciós tételek', url: wiki('Addíciós tétel szinusz koszinusz') },
      ],
    },
  ],
};

export default unit;
