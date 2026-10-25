import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics: 1.3 Kombinatorika, 1.4 Gráfok. */
const unit: GuideUnit = {
  id: 'kombinatorika-grafok',
  subject: 'matematika',
  order: 12,
  title: 'Kombinatorika és gráfok',
  requirementRef: '1.3 Kombinatorika, 1.4 Gráfok',
  intro:
    'Megszámlálási feladatok a szorzási szabállyal, a faktoriálissal és a binomiális együtthatókkal, majd a gráfok alapfogalmai és a fokszámösszeg. Emelt szinten a permutáció, variáció, kombináció képletei, a binomiális tétel, a Pascal-háromszög és a gráfelméleti bizonyítások.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (1.3 Kombinatorika, 1.4 Gráfok). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'kombinatorika-megszamlalas',
      subject: 'matematika',
      unitId: 'kombinatorika-grafok',
      title: 'Sorbarendezés, kiválasztás, komplementer módszer',
      level: 'kozep',
      requirement: {
        kozep:
          'Egyszerű sorbarendezési, kiválasztási és egyéb kombinatorikai feladatok megoldása; a kedvező esetek számának meghatározása a komplementer esetek segítségével is; a binomiális együtthatók kiszámolása',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Szorzási szabály**: ha egy dolgot egymás után több lépésben döntünk el, és az egyes lépésekben $k_1, k_2, \\dots$ lehetőség van, akkor az összes eset száma $k_1 \\cdot k_2 \\cdot \\ldots$',
            '**Összeadási szabály**: ha az esetek külön csoportokra bomlanak, a csoportok eseteit összeadjuk.',
            '**Sorbarendezés**: $n$ különböző elemet $n!$ módon lehet sorba rakni, ahol $n! = n \\cdot (n-1) \\cdot \\ldots \\cdot 2 \\cdot 1$ és $0! = 1$.',
            '**Kiválasztás**, ha a sorrend nem számít: $n$ elemből $k$-t $\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$ módon lehet kiválasztani.',
            'A binomiális együtthatók tulajdonságai: $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{1} = n$, $\\binom{n}{k} = \\binom{n}{n-k}$.',
            '**Komplementer módszer**: kedvező esetek száma = összes eset – a nem kedvező esetek száma. „Legalább egy” típusú feladatnál szinte mindig ez a rövidebb út.',
          ],
        },
        {
          kind: 'tip',
          text: 'Mielőtt számolsz, kérdezd meg: számít-e a sorrend? Ha igen, szorzási szabályt vagy faktoriálist használsz. Ha nem, binomiális együtthatót.',
        },
      ],
      details: [
        { kind: 'heading', text: 'A szorzási szabály' },
        {
          kind: 'text',
          text: 'Minden kombinatorikai feladat alapja az, hogy a döntést lépésekre bontjuk. Ha az étlapon 4 leves, 5 főétel és 3 desszert van, akkor egy háromfogásos menüt $4 \\cdot 5 \\cdot 3 = 60$ módon lehet összeállítani, mert minden levesválasztáshoz mind az 5 főétel, azokhoz pedig mind a 3 desszert társítható.',
        },
        {
          kind: 'text',
          text: 'Ha a lépések során az elemek elfogynak, a lehetőségek száma csökken. Öt különböző számjegyből (1, 2, 3, 4, 5) a három különböző számjegyű háromjegyű számok száma $5 \\cdot 4 \\cdot 3 = 60$, mert az első helyre 5, a másodikra már csak 4, a harmadikra 3 számjegy közül lehet választani.',
        },
        { kind: 'heading', text: 'Sorbarendezés és faktoriális' },
        {
          kind: 'text',
          text: 'Ha $n$ különböző elemet kell sorba rendezni, az első helyre $n$, a másodikra $n-1$, … az utolsóra 1 elem kerülhet, tehát $n \\cdot (n-1) \\cdot \\ldots \\cdot 1 = n!$ sorrend van. Hat ember sorba állítása $6! = 720$ módon lehetséges.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Faktoriális',
              text: '$n! = 1 \\cdot 2 \\cdot \\ldots \\cdot n$. Gyorsan nő: $5! = 120$, $6! = 720$, $10! = 3\\,628\\,800$. Megállapodás szerint $0! = 1$.',
            },
            {
              term: 'Binomiális együttható',
              text: '$\\binom{n}{k}$ („n alatt a k”): az $n$ elemű halmaz $k$ elemű részhalmazainak száma, azaz a kiválasztások száma, ha a sorrend nem számít. A számológép nCr gombja is ezt számolja.',
            },
          ],
        },
        { kind: 'heading', text: 'Kiválasztás sorrend nélkül' },
        {
          kind: 'text',
          text: 'Ha egy 30 fős osztályból 3 fős küldöttséget választunk, a sorrend nem számít: ugyanaz a küldöttség, akárhogyan soroljuk fel a tagjait. Ezért $\\binom{30}{3} = \\frac{30 \\cdot 29 \\cdot 28}{3 \\cdot 2 \\cdot 1} = 4060$. Ha viszont elnököt, titkárt és pénztárost jelölünk ki, a szerepek különbözők, tehát a sorrend számít: $30 \\cdot 29 \\cdot 28 = 24\\,360$. A két szám aránya $3! = 6$, mert minden háromfős csoportot hatféleképpen lehet szerepekhez rendelni.',
        },
        {
          kind: 'compare',
          title: 'Számít-e a sorrend?',
          columns: ['Számít', 'Nem számít'],
          rows: [
            {
              label: 'Tipikus szöveg',
              cells: [
                'sorba állítás, helyezések, jelszó, szám jegyei',
                'csapat, küldöttség, lottószelvény, részhalmaz',
              ],
            },
            {
              label: 'Módszer',
              cells: ['szorzási szabály, $n!$', 'binomiális együttható $\\binom{n}{k}$'],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: lottó',
          problem:
            'Az ötöslottón 90 számból 5-öt húznak ki. Hányféle lehetséges húzás van, és hány olyan szelvény van, amelyen pontosan 2 találat lesz?',
          solution:
            'A húzott számok sorrendje nem számít, ezért az összes eset $\\binom{90}{5} = 43\\,949\\,268$.\n\nPontosan 2 találatnál a szelvényen levő 5 szám közül 2 a húzott 5-ből való ($\\binom{5}{2} = 10$ mód), a másik 3 pedig a nem húzott 85 számból ($\\binom{85}{3} = 98\\,770$ mód). A szorzási szabály szerint a pontosan 2 találatos szelvények száma $10 \\cdot 98\\,770 = 987\\,700$.',
        },
        { kind: 'heading', text: 'Egyéb feladatok: együtt maradó elemek' },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: egymás mellett',
          problem:
            'Egy 6 fős társaságból 4 lány egymás mellett akar ülni egy padon, a többiek a két fiú. Hányféle ülésrend lehetséges?',
          solution:
            'Fogd a 4 lányt egyetlen „blokknak”. A blokk és a 2 fiú együtt 3 elem, ezeket $3! = 6$ módon lehet sorba rakni.\n\nA blokkon belül a lányok $4! = 24$ sorrendben ülhetnek. Összesen $6 \\cdot 24 = 144$ ülésrend van.',
        },
        { kind: 'heading', text: 'A komplementer módszer' },
        {
          kind: 'text',
          text: 'Néha könnyebb megszámolni azt, ami **nem** kedvező. Mivel minden eset vagy kedvező, vagy nem, a kedvező esetek száma az összes eset és a nem kedvező esetek különbsége.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: legalább egy lány',
          problem:
            'Egy 10 fős csoportban 6 fiú és 4 lány van. Hányféleképpen lehet kiválasztani 4 főt úgy, hogy legyen közöttük legalább egy lány?',
          solution:
            'Az összes kiválasztás: $\\binom{10}{4} = 210$.\n\nA nem kedvező eset az, hogy egyetlen lány sincs a négy kiválasztott között, vagyis mind a 4 fiú: $\\binom{6}{4} = 15$.\n\nKedvező esetek: $210 - 15 = 195$.\n\nEllenőrzés összeadási szabállyal (1, 2, 3 vagy 4 lány): $4 \\cdot 20 + 6 \\cdot 15 + 4 \\cdot 6 + 1 \\cdot 1 = 80 + 90 + 24 + 1 = 195$.',
        },
        {
          kind: 'warning',
          text: 'A „legalább egy” komplementere „egy sem”, nem pedig „pontosan egy”. Ugyanígy a „legfeljebb kettő” komplementere „legalább három”.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: egy-két lépéses megszámlálás (hányféleképpen lehet sorba állni, kiválasztani, hány szám készíthető), vagy egy $\\binom{n}{k}$ érték kiszámítása.',
            'II. rész: szöveges feladat, amelyben a megszámlálás egy hosszabb feladat része, gyakran valószínűségszámítással együtt: a kedvező és az összes esetet kombinatorikával kell megszámolni.',
            'A „legalább egy” szövegű feladatoknál a komplementer módszer várt megoldás, de az esetszétválasztás is elfogadott, ha hibátlan.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: a sorrend számítása ott, ahol nem számít (vagy fordítva), valamint az esetek kétszeri megszámolása. Ha bizonytalan vagy, próbáld ki kis számokkal: 3 elemből 2-t kiválasztva $\\binom{3}{2} = 3$ eset van (AB, AC, BC), a sorrenddel pedig 6.',
        },
        {
          kind: 'tip',
          text: 'Írd le, mit jelentenek a szorzatban az egyes tényezők („az első helyre 5 számjegy közül…”). A javítókulcs a gondolatmenetért is ad pontot, nem csak a számért.',
        },
      ],
      topicMatch: [
        'kombinatorika',
        'szorzási szabály',
        'sorrendek',
        'komplementer módszer',
        'színezés',
        'utak',
      ],
      quiz: [
        {
          question: 'Hányféleképpen lehet 6 különböző könyvet sorba rakni egy polcon?',
          options: ['36', '120', '720', '5040'],
          answer: 2,
          explanation: '$6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720$.',
        },
        {
          question:
            'Egy menüt 4 leves, 5 főétel és 3 desszert közül választhatunk (mindegyikből egyet). Hány menü állítható össze?',
          options: ['12', '60', '47', '20'],
          answer: 1,
          explanation: 'Szorzási szabály: $4 \\cdot 5 \\cdot 3 = 60$.',
        },
        {
          question: 'Mennyi $\\binom{8}{3}$?',
          options: ['24', '336', '56', '40'],
          answer: 2,
          explanation: '$\\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = 56$.',
        },
        {
          question:
            'Egy 10 fős csoportban 6 fiú és 4 lány van. Hányféleképpen választható ki 4 fő úgy, hogy legyen köztük lány?',
          options: ['195', '210', '15', '80'],
          answer: 0,
          explanation:
            'Komplementer módszer: az összes kiválasztás $\\binom{10}{4} = 210$, ebből a csupa fiú eset $\\binom{6}{4} = 15$. Tehát $210 - 15 = 195$.',
        },
        {
          question: 'Mennyi $\\binom{20}{18}$?',
          options: ['380', '2', '20', '190'],
          answer: 3,
          explanation: '$\\binom{20}{18} = \\binom{20}{2} = \\frac{20 \\cdot 19}{2} = 190$.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Kombinatorika', url: wiki('Kombinatorika') },
        { label: 'Wikipédia: Faktoriális', url: wiki('Faktoriális') },
        { label: 'Wikipédia: Binomiális együttható', url: wiki('Binomiális együttható') },
      ],
    },
    {
      id: 'permutacio-variacio-kombinacio',
      subject: 'matematika',
      unitId: 'kombinatorika-grafok',
      title: 'Permutáció, variáció, kombináció',
      level: 'emelt',
      requirement: {
        emelt:
          'A permutációk (ismétlés nélkül és ismétléssel), variációk (ismétlés nélkül és ismétléssel), kombinációk (ismétlés nélkül) kiszámítására vonatkozó képletek ismerete, bizonyítása és alkalmazása',
      },
      minutes: 14,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Permutáció** ($n$ elem sorrendje): ismétlés nélkül $P_n = n!$. Ha az elemek között azonosak is vannak ($k_1, k_2, \\dots, k_r$ darab egyforma), akkor $\\frac{n!}{k_1!\\,k_2!\\cdots k_r!}$.',
            '**Variáció** ($n$ elemből $k$-t kiválasztunk és sorba rakunk): ismétlés nélkül $\\frac{n!}{(n-k)!}$, ismétléssel $n^k$.',
            '**Kombináció** ($n$ elemből $k$-t kiválasztunk, a sorrend nem számít): ismétlés nélkül $\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$.',
            'Az alapgondolat mindhárom képletnél a szorzási szabály, majd osztás azzal, ahányszor ugyanazt az esetet megszámoltuk.',
          ],
          emelt: true,
        },
      ],
      details: [
        { kind: 'heading', text: 'Az öt képlet egy táblázatban' },
        {
          kind: 'compare',
          title: 'Összefoglaló',
          columns: ['Ismétlés nélkül', 'Ismétléssel'],
          rows: [
            { label: 'Permutáció', cells: ['$n!$', '$\\frac{n!}{k_1!\\,k_2!\\cdots k_r!}$'] },
            { label: 'Variáció ($k$ elem)', cells: ['$\\frac{n!}{(n-k)!}$', '$n^k$'] },
            { label: 'Kombináció ($k$ elem)', cells: ['$\\binom{n}{k}$', 'nem követelmény'] },
          ],
        },
        { kind: 'heading', text: 'A képletek bizonyítása' },
        {
          kind: 'text',
          text: '**Permutáció.** Az első helyre $n$, a másodikra $n-1$, … az utolsóra 1 elem kerülhet, így a szorzási szabály szerint $n!$ sorrend van.\n\n**Variáció ismétlés nélkül.** Az első helyre $n$, a másodikra $n-1$, a $k$-adikra $n-k+1$ elem közül lehet választani: $n(n-1)\\cdots(n-k+1) = \\frac{n!}{(n-k)!}$.\n\n**Variáció ismétléssel.** Minden helyre $n$ elem közül választhatunk, ismét tehetjük, ezért $n \\cdot n \\cdots n = n^k$.\n\n**Kombináció.** Ha a kiválasztott $k$ elemet sorba is rakjuk, éppen a variációk jönnek ki. Minden $k$ elemű részhalmazból $k!$ variáció keletkezik, ezért a kombinációk száma $\\frac{n!}{(n-k)!} : k! = \\frac{n!}{k!\\,(n-k)!}$.\n\n**Ismétléses permutáció.** Képzeld úgy, hogy az egyforma elemeket megkülönböztetjük (például színezéssel): ekkor $n!$ sorrend van. Ha a megkülönböztetést megszüntetjük, az $k_1$ egyforma elem $k_1!$ különböző sorrendje ugyanazt a sort adja, és így tovább minden csoportra. Ezért az $n!$-t osztani kell $k_1! \\cdot k_2! \\cdots k_r!$-sal.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: ismétléses permutáció',
          problem: 'Hányféleképpen lehet sorba rakni a MATEMATIKA szó betűit?',
          solution:
            'A szó 10 betűs: M kétszer, A háromszor, T kétszer szerepel, az E, I, K egyszer-egyszer.\n\nA különböző sorrendek száma $\\frac{10!}{2!\\cdot 3!\\cdot 2!} = \\frac{3\\,628\\,800}{24} = 151\\,200$.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: variáció',
          problem:
            'Egy 10 fős versenyen az 1., 2. és 3. helyezett kerül dobogóra. Hányféle dobogó alakulhat ki? Hány 0–1 sorozat van 10 hosszan, és ezek közül hánynak van pontosan 3 egyese?',
          solution:
            'A dobogó sorrendje számít, ismétlés nincs: $\\frac{10!}{7!} = 10 \\cdot 9 \\cdot 8 = 720$.\n\nA 0–1 sorozatoknál minden helyre 2 jel kerülhet, ismétléssel: $2^{10} = 1024$ sorozat.\n\nA pontosan 3 egyest tartalmazók számát úgy kapod, hogy kiválasztod a 3 helyet az egyesek számára: $\\binom{10}{3} = 120$.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: rendszám',
          problem:
            'Hány különböző rendszám készíthető, ha 3 betű (az angol ábécé 26 betűjéből, ismétlődhetnek) után 3 számjegy következik?',
          solution:
            'Minden betűhelyre 26, minden számjegyhelyre 10 lehetőség van: $26^3 \\cdot 10^3 = 17\\,576 \\cdot 1000 = 17\\,576\\,000$.',
          emelt: true,
        },
        {
          kind: 'tip',
          text: 'A képlet nem a megoldás kulcsa, hanem a döntés: számít-e a sorrend, és ismétlődhet-e egy elem. Ez a két kérdés kiválasztja a megfelelő sort és oszlopot a táblázatban.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. rész: összetett megszámlálás, amelyben több képlet is szerepel (például betűk sorrendje, de bizonyos betűk egymás mellett maradnak).',
            'Emelt szintű szóbeli: a permutáció, variáció, kombináció definíciója, a képletek levezetése, majd egy alkalmazási feladat.',
            'Gyakori kérés: „Indokolja a megoldását!”, ilyenkor a szorzási szabályra vagy a „ennyiszer számoltuk többször” érvre hivatkozz.',
          ],
          emelt: true,
        },
        {
          kind: 'warning',
          text: 'Ismétléses permutációnál ne felejtsd el minden ismétlődő betűcsoportra osztani. A MATEMATIKA szónál $\\frac{10!}{2!\\cdot 3!\\cdot 2!}$ a helyes, nem $\\frac{10!}{7!}$.',
          emelt: true,
        },
      ],
      topicMatch: ['permutáció', 'faktoriális', 'ismétléses permutáció'],
      quiz: [
        {
          question: 'Hányféleképpen lehet sorba rakni a BANÁN szó betűit?',
          options: ['120', '60', '30', '24'],
          answer: 2,
          explanation:
            'Öt betű, az A kétszer és az N kétszer fordul elő: $\\frac{5!}{2!\\cdot 2!} = \\frac{120}{4} = 30$.',
        },
        {
          question:
            'Egy 10 fős versenyen hányféle lehet az első három helyezett (név szerint, sorrendben)?',
          options: ['120', '720', '1000', '30'],
          answer: 1,
          explanation: 'A sorrend számít, ismétlés nincs: $10 \\cdot 9 \\cdot 8 = 720$.',
        },
        {
          question: 'Hány 10 hosszú 0–1 sorozat van?',
          options: ['100', '512', '1024', '20'],
          answer: 2,
          explanation: 'Mind a 10 helyre 2 jel kerülhet, ismétlődhetnek: $2^{10} = 1024$.',
        },
        {
          question:
            'Egy 12 csapatos bajnokságban mindenki mindenkivel egyszer játszik. Hány mérkőzés lesz?',
          options: ['66', '132', '144', '12'],
          answer: 0,
          explanation:
            'Egy mérkőzés két csapatot jelent, a sorrend nem számít: $\\binom{12}{2} = 66$. A 132 a sorrendes (oda-vissza) eset.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Permutáció', url: wiki('Permutáció') },
        { label: 'Wikipédia: Variáció (kombinatorika)', url: wiki('Variáció kombinatorika') },
        { label: 'Wikipédia: Kombináció', url: wiki('Kombináció') },
      ],
    },
    {
      id: 'binomialis-tetel-pascal',
      subject: 'matematika',
      unitId: 'kombinatorika-grafok',
      title: 'Binomiális tétel és Pascal-háromszög',
      level: 'emelt',
      requirement: {
        emelt:
          'A binomiális tétel ismerete és alkalmazása; a Pascal-háromszög és alapvető tulajdonságainak ismerete',
      },
      minutes: 13,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Binomiális tétel**: $(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$.',
            'A kifejtésben $n+1$ tag van, az $a^{n-k}b^k$ tag együtthatója $\\binom{n}{k}$.',
            '**Pascal-háromszög**: az $n$-edik sor (0-tól számolva) a $\\binom{n}{0}, \\binom{n}{1}, \\dots, \\binom{n}{n}$ számokból áll.',
            'Tulajdonságai: a sor szimmetrikus ($\\binom{n}{k} = \\binom{n}{n-k}$), a szélén 1-esek állnak, minden belső szám a fölötte levő kettő összege: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$.',
            'Az $n$-edik sor összege $2^n$.',
          ],
          emelt: true,
        },
      ],
      details: [
        { kind: 'heading', text: 'A Pascal-háromszög' },
        {
          kind: 'text',
          text: 'Soronként felírva (a sorok számozása 0-tól indul):\n\n- $n=0$: 1\n- $n=1$: 1 1\n- $n=2$: 1 2 1\n- $n=3$: 1 3 3 1\n- $n=4$: 1 4 6 4 1\n- $n=5$: 1 5 10 10 5 1\n- $n=6$: 1 6 15 20 15 6 1\n\nA belső számok a fölöttük levő két szám összegei: például $15 = 5 + 10$ és $20 = 10 + 10$.',
          emelt: true,
        },
        {
          kind: 'text',
          text: '**Miért igaz az összegzési szabály?** Számoljuk meg az $n$ elemű halmaz $k$ elemű részhalmazait úgy, hogy kiemelünk egy elemet. Azok a részhalmazok, amelyek tartalmazzák, a maradék $n-1$ elemből még $k-1$ elemet kapnak: $\\binom{n-1}{k-1}$ ilyen van. Azok, amelyek nem tartalmazzák, $k$ elemet kapnak a maradék $n-1$ közül: $\\binom{n-1}{k}$. Összegük az összes $k$ elemű részhalmaz: $\\binom{n}{k}$.\n\n**A sor összege.** Az $n$ elemű halmaz összes részhalmaza: minden elemről eldöntjük, benne van-e (2 lehetőség), így $2^n$ részhalmaz van. A $k$ elemű részhalmazok száma $\\binom{n}{k}$, ezért $\\binom{n}{0} + \\binom{n}{1} + \\dots + \\binom{n}{n} = 2^n$.',
          emelt: true,
        },
        { kind: 'heading', text: 'A binomiális tétel' },
        {
          kind: 'formula',
          tex: '(a+b)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\dots + \\binom{n}{n-1}ab^{n-1} + \\binom{n}{n}b^n',
          caption: 'A binomiális tétel',
          emelt: true,
        },
        {
          kind: 'text',
          text: 'Az indoklás a zárójelek kiszorzásán alapul: az $n$ tényezős $(a+b)(a+b)\\cdots(a+b)$ szorzatból az $a^{n-k}b^k$ tagot úgy kapjuk, hogy $k$ tényezőből $b$-t, a többiből $a$-t választunk. A $k$ tényező kiválasztása $\\binom{n}{k}$ módon lehetséges. Az $a = b = 1$ helyettesítés a sor összegét adja: $2^n$, az $a = 1$, $b = -1$ helyettesítés pedig azt, hogy a váltakozó előjelű összeg 0.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: kifejtés',
          problem: 'Fejtse ki a $(2x - 3)^4$ hatványt!',
          solution:
            'Az $a = 2x$, $b = -3$, $n = 4$ helyettesítéssel és az 1 4 6 4 1 együtthatókkal:\n\n$(2x-3)^4 = (2x)^4 + 4(2x)^3(-3) + 6(2x)^2(-3)^2 + 4(2x)(-3)^3 + (-3)^4$\n\n$= 16x^4 - 96x^3 + 216x^2 - 216x + 81$.\n\nEllenőrzés $x = 1$-gyel: $16 - 96 + 216 - 216 + 81 = 1 = (2-3)^4$.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: adott tag',
          problem: 'Mekkora az $\\left(x^2 + \\frac{1}{x}\\right)^6$ kifejtésében a konstans tag?',
          solution:
            'Az általános tag: $\\binom{6}{k}(x^2)^{6-k}\\left(\\frac{1}{x}\\right)^k = \\binom{6}{k}x^{12-2k-k} = \\binom{6}{k}x^{12-3k}$.\n\nA konstans tagnál a kitevő 0: $12 - 3k = 0$, tehát $k = 4$. Az együttható $\\binom{6}{4} = 15$.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: fejben számolás',
          problem: 'Számolja ki fejben a $11^4$ értékét a binomiális tétel segítségével!',
          solution:
            '$11^4 = (10+1)^4 = 10^4 + 4\\cdot 10^3 + 6\\cdot 10^2 + 4 \\cdot 10 + 1 = 10\\,000 + 4000 + 600 + 40 + 1 = 14\\,641$.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. rész: egy hatvány kifejtése, adott tag együtthatója, konstans tag, vagy egy összeg (például $\\binom{n}{0} + \\dots + \\binom{n}{n}$) értékének megállapítása.',
            'Emelt szintű szóbeli: a Pascal-háromszög tulajdonságai és bizonyításuk, a binomiális tétel kimondása és alkalmazása.',
            'Kombinatorikai bizonyítás: két oldalt ugyanannak a halmaznak két különböző megszámlálásaként is lehet igazolni.',
          ],
          emelt: true,
        },
        {
          kind: 'warning',
          text: 'Kifejtésnél a negatív tag vagy a szorzó előjelét és kitevőjét is a zárójelbe írd: $(2x-3)^4$ második tagja $4 \\cdot (2x)^3 \\cdot (-3)$, nem $4 \\cdot 2x^3 \\cdot (-3)$.',
          emelt: true,
        },
      ],
      topicMatch: ['binomiális együttható', 'pascal', 'binomiális tétel'],
      quiz: [
        {
          question: 'Mennyi $\\binom{6}{2} + \\binom{6}{3}$?',
          options: ['20', '35', '36', '30'],
          answer: 1,
          explanation:
            'A Pascal-háromszög szabálya szerint $\\binom{6}{2} + \\binom{6}{3} = \\binom{7}{3} = 35$. Közvetlenül: $15 + 20 = 35$.',
        },
        {
          question: 'Mennyi a Pascal-háromszög 10. sorában (0-tól számolva) álló számok összege?',
          options: ['100', '512', '2048', '1024'],
          answer: 3,
          explanation: 'Az $n$-edik sor összege $2^n$, tehát $2^{10} = 1024$.',
        },
        {
          question: 'Mi az $x^2$ együtthatója az $(1+x)^7$ kifejtésében?',
          options: ['7', '35', '21', '14'],
          answer: 2,
          explanation: 'Az $x^2$ tag együtthatója $\\binom{7}{2} = 21$.',
        },
        {
          question: 'Mi az $x^3$ együtthatója az $(x-2)^5$ kifejtésében?',
          options: ['40', '-40', '80', '10'],
          answer: 0,
          explanation:
            'A tag $\\binom{5}{3}x^3(-2)^2 = 10 \\cdot 4 \\cdot x^3 = 40x^3$, mert a $b = -2$ kitevője páros.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Binomiális tétel', url: wiki('Binomiális tétel') },
        { label: 'Wikipédia: Pascal-háromszög', url: wiki('Pascal-háromszög') },
      ],
    },
    {
      id: 'grafok-fokszam-elszam',
      subject: 'matematika',
      unitId: 'kombinatorika-grafok',
      title: 'Gráfok: pont, él, fokszám',
      level: 'kozep',
      requirement: {
        kozep:
          'Konkrét szituációk szemléltetése és egyszerű feladatok megoldása gráfok segítségével; a pont, él, fokszám fogalma; a gráf pontjainak fokszámösszege és éleinek száma közötti összefüggés alkalmazása',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **gráf** pontokból (csúcsokból) és az őket összekötő élekből áll. Szemléltet kapcsolatokat: ismeretségeket, mérkőzéseket, utakat, hálózatokat.',
            'Egy pont **fokszáma** a belőle kiinduló élek száma.',
            '**Fokszámösszeg**: a gráf pontjai fokszámának összege az élek számának kétszerese, mert minden él két végpontjánál számít.',
            'Következmény: a fokszámösszeg páros, ezért a **páratlan fokszámú pontok száma páros**.',
            'Feladatmegoldás: rajzold le a helyzetet (pont = szereplő, él = kapcsolat), majd a fokszámokból számolj.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mit szemléltet a gráf?' },
        {
          kind: 'text',
          text: 'A gráf egy rajz, amelyben a lényeg nem a pontok elhelyezése vagy az élek hossza, hanem az, hogy **mely pontok vannak összekötve**. Egy társaságban a pontok az emberek, az élek az ismeretségek (ha az ismeretség kölcsönös). Egy bajnokságban a pontok a csapatok, az élek a lejátszott mérkőzések. Térképen a pontok a városok, az élek az útszakaszok.',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Pont (csúcs)', text: 'A gráf egy szereplője vagy helye.' },
            {
              term: 'Él',
              text: 'Két pontot köt össze, a két pont között fennálló kapcsolatot jelöli.',
            },
            {
              term: 'Fokszám',
              text: 'Egy pontból induló élek száma. A pont fokszámát $d(P)$-vel jelölhetjük.',
            },
          ],
        },
        { kind: 'heading', text: 'A fokszámösszeg tétele' },
        {
          kind: 'formula',
          tex: '\\text{pontok fokszámainak összege} = 2 \\cdot (\\text{élek száma})',
          caption: 'Minden él két pontnál számít bele a fokszámba.',
        },
        {
          kind: 'text',
          text: 'Képzeld el, hogy minden pont megszámolja a belőle induló éleket. Egy él két pontot köt össze, ezért két pont is megszámolja: kétszer kerül bele az összegbe. A kézfogási feladat ennek tipikus esete: ha mindenki kezet fog, a kézfogások száma a fokszámösszeg fele.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: lehetséges-e?',
          problem:
            'Egy 7 fős társaságban mindenki pontosan 3 másik embert ismer. Lehetséges ez? Egy 8 fős társaságban mindenki pontosan 3 másikat ismer: hány ismeretség van?',
          solution:
            'Hét pontú gráfban, ha minden fokszám 3, a fokszámösszeg $7 \\cdot 3 = 21$, ami páratlan. A fokszámösszeg az élek számának kétszerese, tehát páros kell legyen, ezért ez **nem lehetséges**.\n\nNyolc fő esetén a fokszámösszeg $8 \\cdot 3 = 24$, az ismeretségek (élek) száma $24 : 2 = 12$.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: körmérkőzés',
          problem:
            'Hat csapat körmérkőzést játszik, mindenki mindenkivel egyszer. Rajzolja fel a gráfot, és számolja ki a mérkőzések számát a fokszámokból!',
          solution:
            'A gráf pontjai a csapatok, az élek a mérkőzések. Mindegyik csapat az öt másikkal játszik, így minden pont fokszáma 5.\n\nA fokszámösszeg $6 \\cdot 5 = 30$, ezért az élek (mérkőzések) száma $30 : 2 = 15$.\n\nEllenőrzés kombinatorikával: két csapatot $\\binom{6}{2} = 15$ módon lehet kiválasztani.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 3.: hiányzó fokszám',
          problem:
            'Egy 5 pontú gráfban négy pont fokszáma 3, 3, 2, 1. Mennyi lehet az ötödik pont fokszáma, ha a gráfnak 6 éle van?',
          solution:
            'A fokszámösszeg $2 \\cdot 6 = 12$. A négy ismert fokszám összege $3 + 3 + 2 + 1 = 9$, ezért az ötödik fokszáma $12 - 9 = 3$.',
        },
        {
          kind: 'tip',
          text: 'A hurokél (olyan él, amely egy pontot önmagával köt össze) a pont fokszámához 2-vel járul hozzá, így a fokszámösszeg tétele ilyenkor is igaz. Az egyszerű feladatok gráfjában általában nincs hurokél.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'I. rész: szöveges helyzet gráfra fordítása, egy fokszám vagy az élszám kiszámítása a fokszámösszegből, „lehetséges-e” kérdés.',
            'II. rész: bajnokság, ismeretségek vagy úthálózat szövege, amelyből a gráfot kell elkészíteni, és a megszámlálás kombinatorikával vagy a fokszámösszeggel megy.',
            'A gráfos megoldásnál a rajz önmagában is pontot ér, ha helyesen szemlélteti a szöveget.',
          ],
        },
        {
          kind: 'warning',
          text: 'A leggyakoribb hiba, hogy a fokszámösszeget nem osztják el 2-vel az élek számához. Másik tipikus hiba: azt hiszik, hogy ha a fokszámok összege páros, akkor a gráf biztosan létezik. A páros összeg szükséges, de nem mindig elégséges feltétel.',
        },
        {
          kind: 'tip',
          text: 'Egy gyors próba a rajzra: nézd meg, hogy minden él két végpontját be tudod-e jelölni, és hogy a szöveg minden adata szerepel-e a rajzon.',
        },
      ],
      topicMatch: ['=gráfok', 'fokszám', 'kézfogási lemma'],
      quiz: [
        {
          question: 'Egy gráf pontjainak fokszáma 4, 3, 3, 2, 2, 2. Hány éle van?',
          options: ['16', '8', '32', '6'],
          answer: 1,
          explanation: 'A fokszámösszeg $4+3+3+2+2+2 = 16$, az élek száma ennek fele: $8$.',
        },
        {
          question: 'Lehet-e olyan gráf, amelynek 5 pontja van, és minden pont fokszáma 3?',
          options: [
            'Igen, 7 éllel',
            'Nem, mert a fokszámösszeg páratlan',
            'Igen, 15 éllel',
            'Nem, mert 3 nem osztja az 5-öt',
          ],
          answer: 1,
          explanation:
            'A fokszámösszeg $5 \\cdot 3 = 15$ páratlan, de az élek számának kétszerese páros, ezért ilyen gráf nincs.',
        },
        {
          question: 'Egy 10 fős társaságban mindenki pontosan 4 embert ismer. Hány ismeretség van?',
          options: ['40', '10', '20', '45'],
          answer: 2,
          explanation: 'A fokszámösszeg $10 \\cdot 4 = 40$, az ismeretségek száma $40 : 2 = 20$.',
        },
        {
          question:
            'Egy gráfban 5 pont van, a fokszámok 4, 3, 2, 2 és még egy pont. A gráfnak 7 éle van. Mennyi az utolsó pont fokszáma?',
          options: ['3', '2', '4', '5'],
          answer: 0,
          explanation:
            'A fokszámösszeg $2 \\cdot 7 = 14$. Az ismert négy fokszám összege $4+3+2+2 = 11$, a hiányzó fokszám $14 - 11 = 3$.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gráfelmélet', url: wiki('Gráfelmélet') },
        { label: 'Wikipédia: Fokszám (gráfelmélet)', url: wiki('Fokszám gráfelmélet') },
        { label: 'Wikipédia: Kézfogási lemma', url: wiki('Kézfogási lemma') },
      ],
    },
    {
      id: 'grafok-fogalmak-bizonyitasok',
      subject: 'matematika',
      unitId: 'kombinatorika-grafok',
      title: 'Gráfelméleti fogalmak és bizonyítások',
      level: 'emelt',
      requirement: {
        emelt:
          'Többszörös él, hurokél, séta, körséta, út, kör, összefüggő gráf, egyszerű gráf, teljes gráf, fa, komplementer gráf, izomorf gráfok definiálása és alkalmazása; az n pontú teljes gráf éleinek száma; a fa pontjai és élei száma közötti összefüggés; annak bizonyítása, hogy bármely legalább kétpontú egyszerű gráfban van két azonos fokszámú pont',
      },
      minutes: 15,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Egyszerű gráf**: nincs benne hurokél és többszörös él. **Teljes gráf** ($K_n$): bármely két pontja között van él, élei száma $\\frac{n(n-1)}{2}$.',
            '**Séta**: egymás után következő élekkel bejárt pontsorozat. **Út**: olyan séta, amelyben nincs ismétlődő pont. **Körséta**: kezdő- és végpontja azonos. **Kör**: zárt út (csak a kezdő- és végpont egyezik).',
            '**Összefüggő** a gráf, ha bármely két pontja között van út. **Fa**: összefüggő, körmentes gráf; $n$ pontú fának $n-1$ éle van.',
            '**Komplementer gráf**: ugyanazok a pontok, és pontosan azok az élek, amelyek az eredetiben hiányoznak. **Izomorf** gráfok: a pontok kölcsönösen egyértelmű megfeleltetése, amely megőrzi az éleket.',
            'Bizonyítandó tétel: legalább kétpontú egyszerű gráfban van két azonos fokszámú pont.',
          ],
          emelt: true,
        },
      ],
      details: [
        { kind: 'heading', text: 'A fogalmak' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Hurokél, többszörös él',
              text: 'A hurokél egy pontot önmagával köt össze; többszörös él az, amikor két pont között egynél több él fut. A hurokél a pont fokszámához 2-vel járul hozzá.',
              emelt: true,
            },
            {
              term: 'Egyszerű gráf',
              text: 'Olyan gráf, amelyben nincs hurokél és nincs többszörös él.',
              emelt: true,
            },
            {
              term: 'Séta, út',
              text: 'A séta a gráf éleit egymáshoz csatlakozva végigjáró pontsorozat. Az út olyan séta, amelyben minden pont különböző.',
              emelt: true,
            },
            {
              term: 'Körséta, kör',
              text: 'A körséta olyan séta, amely ugyanott végződik, ahol elindult. A kör olyan körséta, amelyben a kezdő- és végpont kivételével nincs ismétlődő pont.',
              emelt: true,
            },
            {
              term: 'Összefüggő gráf',
              text: 'Bármely két pontja között vezet út. Máskülönben a gráf több különálló részre esik szét.',
              emelt: true,
            },
            {
              term: 'Teljes gráf',
              text: 'Egyszerű gráf, amelyben bármely két pont között van él. Az $n$ pontú teljes gráfot $K_n$-nel jelölik.',
              emelt: true,
            },
            {
              term: 'Fa',
              text: 'Összefüggő gráf, amelyben nincs kör. A fának legalább kétpontú esetben van elsőfokú pontja (levele).',
              emelt: true,
            },
            {
              term: 'Komplementer gráf',
              text: 'Egy egyszerű gráf komplementere ugyanazokon a pontokon azokat a pontpárokat köti össze, amelyek az eredetiben nem voltak összekötve.',
              emelt: true,
            },
            {
              term: 'Izomorf gráfok',
              text: 'Két gráf izomorf, ha pontjaik között van olyan kölcsönösen egyértelmű megfeleltetés, amely az éleket élekre viszi. Izomorf gráfokban az élek száma és a fokszámok (sokasága) megegyezik.',
              emelt: true,
            },
          ],
          emelt: true,
        },
        { kind: 'heading', text: 'Tételek és bizonyításuk', emelt: true },
        {
          kind: 'text',
          text: '**A teljes gráf éleinek száma.** Az $n$ pontú teljes gráf minden pontja a többi $n-1$ ponttal össze van kötve, így mindegyik fokszáma $n-1$. A fokszámösszeg $n(n-1)$, az élek száma ennek fele: $\\frac{n(n-1)}{2} = \\binom{n}{2}$.\n\n**A fa éleinek száma.** Az $n$ pontú fának $n-1$ éle van. Indoklás: $n = 1$ esetén 0 él van. Ha $n \\ge 2$, a fának van elsőfokú pontja; ha ezt az egyetlen élével együtt elhagyjuk, $n-1$ pontú fa marad, amelynek az indukciós feltevés szerint $n-2$ éle van. Ezért az eredeti fában $n-2+1 = n-1$ él van.\n\n**Két azonos fokszámú pont.** Legyen az egyszerű gráfnak $n \\ge 2$ pontja. Minden pont fokszáma 0 és $n-1$ közötti egész szám, ez $n$ lehetséges érték. Ha lenne 0 fokszámú pont, akkor nem lehet $n-1$ fokszámú pont, mert az mindegyik másik ponttal össze lenne kötve. Fordítva is igaz: ha van $n-1$ fokszámú pont, nincs 0 fokszámú. A két szélső érték tehát nem fordulhat elő egyszerre, így az $n$ pont fokszáma legfeljebb $n-1$ különböző érték közül kerül ki. Skatulyaelv: $n$ pont, $n-1$ lehetséges fokszám, ezért két pont fokszáma megegyezik.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: lehet-e ennyi éle?',
          problem:
            'Létezik-e olyan egyszerű gráf, amelynek 6 pontja és 16 éle van? És olyan, amelynek 7 pontja és 8 éle van, és a komplementere hány élű?',
          solution:
            'Hat pont esetén a lehetséges élek száma legfeljebb a teljes gráfé: $\\frac{6 \\cdot 5}{2} = 15$, így 16 él nem lehet egyszerű gráfban.\n\nHét pontú teljes gráfnak $\\frac{7 \\cdot 6}{2} = 21$ éle van. Ha az eredeti gráfnak 8 éle van, a komplementere $21 - 8 = 13$ élű.',
          emelt: true,
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: fa fokszámösszege',
          problem:
            'Egy fának 12 pontja van. Hány éle van, és mennyi a pontjai fokszámának összege?',
          solution:
            'A fa $12 - 1 = 11$ élű. A fokszámösszeg az élek számának kétszerese: $2 \\cdot 11 = 22$.',
          emelt: true,
        },
        {
          kind: 'tip',
          text: 'Egyes tankönyvek a séta, út és kör fogalmát kissé eltérően adják meg (például az élek ismétlődését is tiltják). A vizsgán a feladat szövege általában megadja, mit kell érteni rajta; a fenti megfogalmazás a pontok ismétlődéséről szól.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'II. rész: egy gráf tulajdonságainak vizsgálata (összefüggő-e, fa-e, hány éle van), komplementer gráf élszáma, a lehetséges fokszámsorozat eldöntése.',
            'Emelt szintű szóbeli: a fogalmak pontos definíciója, az $n$ pontú teljes gráf éleinek száma, a fa élszáma és a két azonos fokszámú pont tétele bizonyítással.',
            'Gyakori kérdés: „Igazolja, hogy…”, ilyenkor a fokszámösszeget vagy a skatulyaelvet kell használni.',
          ],
          emelt: true,
        },
        {
          kind: 'warning',
          text: 'Ne keverd az utat és a sétát: az útban nem ismétlődhet pont. Ne keverd a kört sem a fával: a fa éppen az összefüggő gráf, amelyben nincs kör.',
          emelt: true,
        },
      ],
      topicMatch: ['teljes gráf', 'fagráf', 'izomorf'],
      quiz: [
        {
          question: 'Hány éle van a 9 pontú teljes gráfnak?',
          options: ['72', '81', '45', '36'],
          answer: 3,
          explanation: '$\\frac{9 \\cdot 8}{2} = 36$.',
        },
        {
          question: 'Hány éle van egy 15 pontú fának?',
          options: ['14', '15', '16', '105'],
          answer: 0,
          explanation: 'Az $n$ pontú fának $n-1$ éle van, itt $15-1 = 14$.',
        },
        {
          question: 'Egy 7 pontú egyszerű gráfnak 8 éle van. Hány éle van a komplementerének?',
          options: ['8', '14', '13', '21'],
          answer: 2,
          explanation:
            'A 7 pontú teljes gráfnak $\\binom{7}{2} = 21$ éle van, a komplementer éleinek száma $21 - 8 = 13$.',
        },
        {
          question: 'Melyik állítás igaz két izomorf gráfra?',
          options: [
            'Ugyanannyi élük van.',
            'Mindkettő fa.',
            'Ugyanúgy kell rajzolni őket.',
            'Mindkettő teljes gráf.',
          ],
          answer: 0,
          explanation:
            'Az izomorfia megőrzi az éleket, ezért az élek száma és a fokszámok megegyeznek. A rajz alakja vagy a fa és a teljes gráf tulajdonság nem következik belőle önmagában.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Gráf (matematika)', url: wiki('Gráf matematika') },
        { label: 'Wikipédia: Fa (gráfelmélet)', url: wiki('Fa gráfelmélet') },
        { label: 'Wikipédia: Teljes gráf', url: wiki('Teljes gráf') },
      ],
    },
  ],
};

export default unit;
