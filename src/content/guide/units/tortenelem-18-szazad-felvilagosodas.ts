import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 3.5 (Magyarország a Habsburg Birodalomban) and 3.6 (A felvilágosodás). */
const unit: GuideUnit = {
  id: 'tortenelem-18-szazad-felvilagosodas',
  subject: 'tortenelem',
  order: 35,
  title: 'A 18. század: Rákóczi, újranépesülés, felvilágosult abszolutizmus és a felvilágosodás',
  requirementRef: '3.5 Magyarország a Habsburg Birodalomban, 3.6 A felvilágosodás kora',
  intro:
    'Hogyan került a török kiűzése után Magyarország a Habsburg Birodalomba? A Rákóczi-szabadságharc és a szatmári béke, az ország újranépesülése, Mária Terézia és II. József reformjai, majd a felvilágosodás, az amerikai függetlenség és a francia forradalom.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (3. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'kuruc',
        'labanc',
        'szabadságharc',
        'amnesztia',
        'felvilágosodás',
        'alkotmány',
        'alkotmányos monarchia',
        'hatalmi ágak megosztása',
        'társadalmi szerződés',
        'Emberi és polgári jogok nyilatkozata',
        'jogegyenlőség',
        'népfelség',
        'elnök',
        'forradalom',
        'diktatúra',
        'jakobinus',
        'felvilágosult abszolutizmus',
        'türelmi rendelet',
        'úrbéri rendelet',
        'vámrendelet (kettős vámhatár)',
        'Ratio Educationis',
        'betelepítés',
        'betelepülés',
        'Szent Szövetség',
      ],
      emelt: [
        'Szent Liga',
        'svábok',
        'görög katolikus',
        'Udvari Haditanács',
        'Magyar Kancellária',
        'Helytartótanács',
        'elektori rendszer',
        'kontinentális zárlat',
        'újszerzeményi jog',
      ],
    },
    people: {
      kozep: [
        'II. Rákóczi Ferenc',
        'I. Lipót',
        'Savoyai Jenő',
        'Mária Terézia',
        'II. József',
        'Washington',
        'Montesquieu',
        'Rousseau',
        'Robespierre',
        'Napóleon',
      ],
      emelt: ['Lotharingiai Károly', 'Károlyi Sándor', 'III. Károly'],
    },
    dates: {
      kozep: [
        '1686 Buda visszavétele',
        '1699 a karlócai béke',
        '1703–1711 a Rákóczi-szabadságharc',
        '1711 a szatmári béke',
        '1740–1780 Mária Terézia uralkodása',
        '1780–1790 II. József uralkodása',
        '1776 az amerikai Függetlenségi nyilatkozat',
        '1789 a francia forradalom kitörése',
        '1804–1814/1815 a napóleoni háborúk',
        '1815 a bécsi kongresszus, Waterloo',
      ],
      emelt: [
        '1687 a pozsonyi országgyűlés',
        '1697 a zentai csata',
        '1705 a szécsényi országgyűlés',
        '1707 az ónodi országgyűlés',
        '1723 a Pragmatica Sanctio elfogadása',
        '1793–1794 jakobinus diktatúra',
        '1805 az austerlitzi csata',
        '1813 a lipcsei csata',
      ],
    },
    places: {
      kozep: [
        'Pozsony',
        'Bécs',
        'Temesvár',
        'Határőrvidék',
        'Habsburg Birodalom',
        'Magyar Királyság',
        'Nagy-Britannia',
        'Amerikai Egyesült Államok',
        'Párizs',
        'Waterloo',
      ],
      emelt: ['Bánság/Temesköz', 'Borogyino'],
    },
  },
  pages: [
    {
      id: 'rakoczi-szabadsagharc-okai-celjai-szatmari-beke',
      subject: 'tortenelem',
      unitId: 'tortenelem-18-szazad-felvilagosodas',
      title: 'A Rákóczi-szabadságharc (1703–1711) és a szatmári béke',
      level: 'kozep',
      requirement: {
        kozep: 'A Rákóczi-szabadságharc okai, céljai, fordulópontjai és a szatmári béke',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A török kiűzése (1686 Buda visszavétele, **1699 karlócai béke**) után a Habsburg-uralom **abszolutista** jellegű lett: adóterhek, katonai beszállásolás, vallási sérelmek, a rendek jogainak megsértése.',
            '**II. Rákóczi Ferenc** vezetésével **1703**-ban tört ki a **kuruc** szabadságharc a Habsburgok ellen. A kurucok ellenfelei a **labancok** (Habsburg-hűek).',
            'A háború a **spanyol örökösödési háború** idején zajlott: a Habsburgok erői nyugaton voltak lekötve, ez adott esélyt a felkelésnek.',
            'Célja a **rendi jogok és a függetlenség** védelme volt, vallásszabadsággal.',
            '**1711. április 30.**: a **szatmári béke** lezárta a harcot. Amnesztiát és a rendi alkotmány megtartását ígérte, de Rákóczi nem fogadta el, és külföldre ment.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'kuruc',
              text: 'A Habsburg-ellenes felkelők neve a 17. század végén és a 18. század elején (Thököly és Rákóczi harcosai).',
            },
            {
              term: 'labanc',
              text: 'A Habsburg-párti katona vagy a Habsburg-uralom híve (a kurucok gúnyneve rájuk).',
            },
            {
              term: 'amnesztia',
              text: 'Közkegyelem: a felkelésben részt vevők büntetlenséget kapnak. A szatmári béke politikai és vallási amnesztiát biztosított a kurucoknak.',
            },
            {
              term: 'szabadságharc',
              text: 'Egy nép vagy ország önállóságáért, szabadságjogaiért folytatott háború az uralkodó vagy egy idegen hatalom ellen.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az okok: miért lázadtak fel?' },
        {
          kind: 'text',
          text: 'A török alóli felszabadítás után a Habsburgok az újra megszerzett területeket nem a magyar rendi törvények szerint kormányozták, hanem úgy, mintha hadizsákmány lenne. A magyar rendek ezt sérelmezték, és a társadalom minden rétegét elérte a terhek növekedése.',
        },
        {
          kind: 'keypoints',
          title: 'A felkelés okai',
          items: [
            '**Abszolutista törekvések**: a bécsi udvar az országgyűlést kerülte, a magyar rendek jogait semmibe vette. A birtokokat sokszor csak váltságdíj fejében kapták vissza a tulajdonosaik.',
            '**Adóterhek és beszállásolás**: a császári hadsereg ellátását a lakosságra terhelték; a jobbágyok és a mezővárosok is nyögték a hadiadót és a katonai beszállásolást.',
            '**Vallási sérelmek**: a protestánsokat a katolikus udvar és a rekatolizáció fenyegette.',
            '**Külpolitikai lehetőség**: a **spanyol örökösödési háború** (1701–1714) Franciaország ellen a Habsburgokat nyugaton lekötötte.',
            '**Vezető**: **II. Rákóczi Ferenc** Európa-szerte ismert, nagyon gazdag nagybirtokos volt, Zrínyi Ilona fia. 1701-ben összeesküvéssel vádolták, bebörtönözték, de megszökött Lengyelországba.',
          ],
        },
        {
          kind: 'map',
          title: 'A Rákóczi-szabadságharc fontos helyszínei',
          places: [
            { name: 'Munkács', lat: 48.44, lon: 22.72, note: 'Rákóczi birtoka, a fejedelem egyik fontos vára' },
            { name: 'Tarpa', lat: 48.11, lon: 22.55, note: '1703, a tiszaháti jobbágyok csatlakozása' },
            { name: 'Szécsény', lat: 48.08, lon: 19.52, note: '1705, országgyűlés' },
            { name: 'Ónod', lat: 48.0, lon: 20.93, note: '1707, országgyűlés' },
            { name: 'Trencsén', lat: 48.89, lon: 18.04, note: '1708, kuruc vereség' },
            { name: 'Szatmár', lat: 47.79, lon: 22.88, note: '1711, a béke helyszíne' },
          ],
        },
        { kind: 'heading', text: 'A kitörés és a célok' },
        {
          kind: 'text',
          text: '1703 tavaszán Rákóczi felhívást adott ki a nemzethez (a **brezáni kiáltvány**), amelyben a fegyveres ellenállásra szólított. A kiáltvány jelszava a Habsburg-uralom alóli szabadulás volt. Tiszaháton a jobbágyok ( **Esze Tamás** tarpai kurucai) csatlakoztak először. Rákóczi a hozzá csatlakozó jobbágyoknak **szabadságot ígért**, ezért a felkelés gyorsan terjedt: a sereg zömét a jobbágyok és a kisnemesek adták. 1703 végére a kurucok az ország nagy részét ellenőrizték, kivéve a nyugati országrészt és a nagyobb császári várakat.',
        },
        {
          kind: 'keypoints',
          title: 'A szabadságharc céljai',
          items: [
            'a **rendi jogok** és az alkotmány helyreállítása, a Habsburg-abszolutizmus megszüntetése;',
            'az ország **függetlensége** a Habsburg-uralom alól;',
            '**vallásszabadság** a protestánsoknak;',
            'a nemzeti egység megteremtése: nemesek és jobbágyok közös harca (a kuruc zászlókon a jelmondat: „Cum Deo pro Patria et Libertate”, vagyis Istennel a hazáért és a szabadságért).',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A szécsényi országgyűlésen (**1705**) a rendek **konföderációba** tömörültek (a nemesség és a vármegyék szövetsége), Rákóczit **vezérlő fejedelemmé** választották, mellé tanácsadó **szenátus** került. Az ónodi országgyűlés (**1707**) kimondta a **Habsburg-ház trónfosztását**; ezzel a függetlenség végleg kimondott cél lett.',
        },
        { kind: 'heading', text: 'A fordulópontok' },
        {
          kind: 'timeline',
          items: [
            { date: '1703', text: 'A brezáni kiáltvány, kitör a felkelés Tiszaháton.' },
            {
              date: '1704',
              text: 'A höchstädti (blenheimi) csatában a Habsburg-szövetségesek legyőzik a francia–bajor sereget: a Habsburgok szabadabb kezet kapnak. Rákóczit Erdély fejedelmévé választják.',
            },
            {
              date: '1705',
              text: 'Szécsényi országgyűlés: konföderáció, vezérlő fejedelem.',
              emelt: true,
            },
            {
              date: '1707',
              text: 'Ónodi országgyűlés: a Habsburg-ház trónfosztása.',
              emelt: true,
            },
            {
              date: '1708',
              text: 'A trencséni csatában a kuruc sereg vereséget szenved: a katonai fordulat.',
            },
            { date: '1709–1710', text: 'Pestisjárvány, éhség, a kuruc sereg elfogyása.' },
            {
              date: '1711',
              text: 'Rákóczi külföldi segítséget keres, a kurucok szatmári béke keretében lerakják a fegyvert.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A felkelés fő problémái: gazdasági kimerülés (a kuruc állam rézpénzt, ún. libertást bocsátott ki), a franciák segítségének szerénysége, a jobbágyok és a nemesség érdekeinek ellentéte, valamint a háborús terhek miatti elégedetlenség. Az 1708-as vereség és a járvány után a kuruc ellenállás fokozatosan gyengült.',
        },
        { kind: 'heading', text: 'A szatmári béke (1711)' },
        {
          kind: 'text',
          text: 'Rákóczi 1711 elején Lengyelországba ment, hogy orosz vagy más külföldi támogatást szerezzen. Távollétében **Károlyi Sándor**, a kuruc sereg egyik vezére tárgyalt a Habsburg-oldal főparancsnokával, **Pálffy Jánossal**. A békét **1711. április 30-án Szatmáron** kötötték meg.',
        },
        {
          kind: 'keypoints',
          title: 'A szatmári béke tartalma',
          items: [
            '**Amnesztia**: aki rövid határidőn belül hűséget esküdött a királynak, büntetlen maradt, és megtarthatta birtokát.',
            '**Vallásszabadság**: a protestánsok korábbi jogait megerősítették.',
            'A **rendi alkotmány** megmaradt; a király ígéretet tett országgyűlés összehívására.',
            'Rákóczi nem írta alá és nem tért haza: **emigrált** (Franciaország, majd Törökország, Rodostó); itt halt meg 1735-ben. Hamvait 1906-ban hozták haza (Kassa).',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Károlyi Sándor** tehát a Habsburgokkal kötött megállapodás kulcsfigurája lett: a kuruc hadsereg zöme az ő vezetésével tette le a fegyvert Majténynél. Ez a szerepe a történetírásban vitatott: egyesek a felkelés végének realista lezárójaként, mások árulóként értékelik.',
        },
        { kind: 'heading', text: 'Eredmények' },
        {
          kind: 'text',
          text: 'A szabadságharc nem érte el a függetlenséget. Mégis fontos eredménye, hogy a Habsburgok **kénytelenek voltak elismerni a magyar rendi alkotmányt**, és nem tudták az országot a többi tartományhoz hasonlóan, teljes mértékben központosítva kormányozni. A szatmári béke kompromisszumot hozott, így a 18. század a viszonylagos béke, az újjáépítés és a népesség szaporodásának kora lehetett.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet (brezáni kiáltvány, ónodi határozat, szatmári béke): milyen célt, jogot vagy sérelmet fogalmaz meg a szöveg?',
            'Időrend: a szabadságharc és a békekötés évszáma (1703–1711, 1711).',
            'Rövid kifejtés: miért tört ki, mi volt a célja és mi lett az eredménye a Rákóczi-szabadságharcnak?',
            'Emelt szint: szécsényi (1705) és ónodi (1707) országgyűlés, Károlyi Sándor szerepe.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni a Rákóczi-szabadságharcot (1703–1711) a Thököly-felkeléssel vagy az 1848–49-es szabadságharccal, illetve azt írni, hogy Rákóczi aláírta a szatmári békét. A békét Károlyi Sándor kötötte, Rákóczi emigrált. A szatmári béke nem a kurucok győzelme volt, hanem kompromisszum.',
        },
        {
          kind: 'tip',
          text: 'Okok, célok, eredmény: három szempontot mindig mondj. Ok: abszolutizmus és terhek, a spanyol örökösödési háború; cél: rendi jogok, függetlenség, vallásszabadság; eredmény: nincs függetlenség, de a rendi alkotmány és az amnesztia megmarad.',
        },
      ],
      topicMatch: ['rákóczi-szabadságharc'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Melyik évben ért véget a Rákóczi-szabadságharc a szatmári békével?',
          options: ['1699', '1703', '1707', '1711'],
          answer: 3,
          explanation:
            '1711-ben kötötték a szatmári békét. 1699 a karlócai béke, 1703 a szabadságharc kezdete, 1707 az ónodi országgyűlés éve.',
        },
        {
          question: 'Mi segítette elő a felkelés kirobbanását 1703-ban?',
          options: [
            'A Habsburgok a spanyol örökösödési háborúban nyugaton le voltak kötve.',
            'A török hódoltság újbóli kiterjesztése.',
            'A reformáció megjelenése Magyarországon.',
            'A magyar rendek országgyűlési győzelme.',
          ],
          answer: 0,
          explanation:
            'A Habsburg-erők nagy részét a Franciaország elleni háború lekötötte, ez adott lehetőséget a felkelésnek.',
        },
        {
          question: 'Mit biztosított a szatmári béke a kurucoknak?',
          options: [
            'A Habsburg-ház trónfosztását.',
            'Amnesztiát és a rendi alkotmány megtartását.',
            'Az ország teljes függetlenségét.',
            'Rákóczi fejedelmi címének megtartását.',
          ],
          answer: 1,
          explanation:
            'A béke közkegyelmet, vallásszabadságot és a rendi alkotmány tiszteletben tartását ígérte, de nem hozott függetlenséget.',
        },
        {
          question: 'Mit mondott ki az ónodi országgyűlés 1707-ben?',
          options: [
            'A vezérlő fejedelem megválasztását.',
            'A rendi konföderáció megalakítását.',
            'A Habsburg-ház trónfosztását.',
            'A jobbágyok felszabadítását.',
          ],
          answer: 2,
          explanation:
            'Az ónodi országgyűlés trónfosztotta a Habsburg-házat. A vezérlő fejedelmet és a konföderációt 1705-ben, Szécsényben hozták létre.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: II. Rákóczi Ferenc', url: wiki('II. Rákóczi Ferenc') },
        { label: 'Wikipédia: Rákóczi-szabadságharc', url: wiki('Rákóczi-szabadságharc') },
        { label: 'Wikipédia: szatmári béke', url: wiki('szatmári béke 1711') },
      ],
    },
    {
      id: 'torok-kiuzese-habsburg-kormanyzat',
      subject: 'tortenelem',
      unitId: 'tortenelem-18-szazad-felvilagosodas',
      title: 'A török kiűzése és Magyarország a Habsburg Birodalomban',
      level: 'emelt',
      requirement: {
        emelt:
          'A török kiűzése; Magyarország a Habsburg Birodalomban (Pragmatica Sanctio, kormányzat)',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1683**: a törökök a második bécsi ostromot elveszítik; **1684**-ben megalakul a **Szent Liga** (Habsburgok, Lengyelország, Velence, pápai támogatással).',
            '**1686**: **Buda visszavétele** (Lotharingiai Károly). **1687**: a második mohácsi (nagyharsányi) csata. **1697**: **Savoyai Jenő** zentai győzelme.',
            '**1699**: a **karlócai béke**: a törökök lemondanak Magyarországról és Erdélyről (a Temesköz kivételével).',
            '**1687** pozsonyi országgyűlés: elismerték a Habsburgok **férfiági örökösödését**, eltörölték az Aranybulla ellenállási záradékát.',
            '**1723**: **Pragmatica Sanctio**: a Habsburg-ház női ágon is örökölhet; az ország kormányzata Bécsből irányított, magyar és birodalmi szervekkel.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Szent Liga',
              text: 'A török ellen 1684-ben létrejött szövetség a Habsburgok, Lengyelország és Velence között.',
              emelt: true,
            },
            {
              term: 'újszerzeményi jog',
              text: 'A Habsburg-udvar álláspontja szerint a töröktől visszafoglalt területek (a „újonnan szerzett” országrészek) a király hadizsákmánya, nem a rendi törvények szerint kezelendő terület.',
              emelt: true,
            },
            {
              term: 'Udvari Haditanács',
              text: 'A bécsi birodalmi katonai főhatóság (hadügy, a határvédelem és a Határőrvidék irányítása).',
              emelt: true,
            },
            {
              term: 'Magyar Kancellária',
              text: 'A Bécsben székelő magyar központi hivatal, amely az uralkodó és a magyar rendek között tartotta a kapcsolatot.',
              emelt: true,
            },
            {
              term: 'Helytartótanács',
              text: 'A király távollétében az ország ügyeit intéző kormányszerv, 1723-tól Pozsonyban.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A török kiűzése (1683–1699)' },
        {
          kind: 'text',
          text: '1683-ban a török sereg Kara Musztafa vezetésével ostrom alá vette Bécset. Az ostromot a lengyel királlyal, **III. János (Sobieski)** vezette felmentő sereg törte meg. Ezután a Habsburg Birodalom támadásba lendült: az 1684-ben alakult **Szent Liga** (pápai közvetítéssel, később Oroszország is csatlakozott) összefogta az európai hatalmakat. A hadsereg főparancsnoka **Lotharingiai Károly** volt.',
        },
        {
          kind: 'map',
          title: 'A török kiűzésének fontos helyszínei',
          places: [
            { name: 'Bécs', lat: 48.21, lon: 16.37, note: '1683, a török ostrom megtörése' },
            { name: 'Pozsony', lat: 48.15, lon: 17.11, note: '1687, országgyűlés' },
            { name: 'Buda', lat: 47.5, lon: 19.04, note: '1686, visszafoglalás' },
            { name: 'Nagyharsány', lat: 45.84, lon: 18.4, note: '1687, a második mohácsi csata' },
            { name: 'Zenta', lat: 45.93, lon: 20.08, note: '1697, Savoyai Jenő győzelme' },
            { name: 'Karlóca', lat: 45.2, lon: 19.93, note: '1699, a béke helyszíne' },
            { name: 'Temesvár', lat: 45.75, lon: 21.23, note: '1716, Habsburg kézre kerül' },
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1683', text: 'A török második bécsi ostroma, a felmentő sereg győzelme.' },
            { date: '1684', text: 'A Szent Liga megalakulása. Buda ostroma még sikertelen.' },
            { date: '1686', text: 'Buda visszavétele, 145 évi török uralom után.' },
            {
              date: '1687',
              text: 'A nagyharsányi (második mohácsi) csata: a Lotharingiai Károly vezette sereg győz.',
            },
            { date: '1697', text: 'A zentai csata: Savoyai Jenő szétveri a török főerőt.' },
            { date: '1699', text: 'A karlócai béke: a török kiürítette Magyarországot és Erdélyt.' },
            { date: '1716', text: 'Savoyai Jenő győz Pétervárad alatt, majd visszafoglalja Temesvárt.' },
          ],
        },
        {
          kind: 'text',
          text: 'A karlócai béke (1699) a Temesközt (a Bánságot) még a török kezén hagyta; ezt Savoyai Jenő csak **1716**-ban, Temesvár bevételével szerezte meg, amit az 1718-as pozsareváci béke is megerősített. Az ország területe ekkor már teljes egészében Habsburg-uralom alá került.',
        },
        {
          kind: 'heading',
          text: 'A pozsonyi országgyűlés (1687) és az új Habsburg-berendezkedés',
        },
        {
          kind: 'text',
          text: 'Az **1687-es pozsonyi országgyűlés** elfogadta a **Habsburg-ház férfiágú örökösödését**: ezzel a magyar trón örökös lett, a rendek elvesztették a szabad királyválasztás jogát. Eltörölték az **Aranybulla ellenállási záradékát** (31. cikk) is, amely a királlyal szembeni fegyveres ellenállást a nemesek jogának mondta ki. I. Lipót fiát, Józsefet még ebben az évben megkoronázták. Erdély is Habsburg-fennhatóság alá került (Leopold-diploma, 1691), de külön kormányzatot kapott.',
        },
        {
          kind: 'text',
          text: 'A felszabadított területeken a Habsburgok az **újszerzeményi jogra** hivatkoztak: a birtokokat csak a tulajdonjog igazolása és **váltságdíj** fizetése fejében adták vissza. A terület jelentős részét idegen földesurak, kamarai birtokok vagy az udvarhoz közelálló családok kapták. Mindez nagy elégedetlenséget keltett a magyar nemesek között, és hozzájárult a Rákóczi-szabadságharc kitöréséhez.',
        },
        { kind: 'heading', text: 'A Pragmatica Sanctio (1723)' },
        {
          kind: 'text',
          text: '**III. Károly** (német-római császárként VI. Károly) fiúutód nélkül maradt. Birodalma egységének megőrzésére a **Pragmatica Sanctio** kimondta, hogy a Habsburg-ház tartományai **osztatlanul és elválaszthatatlanul** öröklődnek, és ha nincs fiú örökös, akkor lánya is örökölhet (így lett utóda **Mária Terézia**). Magyarországon az **1722–1723-as országgyűlés** fogadta el (**1723**). A magyar rendek ezért cserébe kérték az ország **alkotmányának és rendi jogainak** (például az adómentességnek) megerősítését. A Pragmatica Sanctio a Habsburg Birodalom és a Magyar Királyság közös uralkodóját is megerősítette.',
        },
        { kind: 'heading', text: 'A kormányzat' },
        {
          kind: 'compare',
          title: 'A magyar és a birodalmi kormányzat szervei',
          columns: ['Szerv', 'Feladata'],
          rows: [
            { label: 'Magyar Kancellária (Bécs)', cells: ['magyar ügyek a király mellett', 'az uralkodó és a magyar rendek kapcsolata'] },
            { label: 'Udvari Haditanács (Bécs)', cells: ['hadügyek', 'a hadsereg és a Határőrvidék irányítása'] },
            { label: 'Helytartótanács (Pozsony)', cells: ['kormányszerv Magyarországon', 'a király távollétében intézte az ország ügyeit'] },
            { label: 'Országgyűlés', cells: ['a rendek képviselete', 'törvényhozás, adómegajánlás (ritkán ülésezett)'] },
            { label: 'Vármegyék', cells: ['rendi önkormányzat', 'az adó és a katonaállítás helyi irányítása'] },
          ],
        },
        {
          kind: 'text',
          text: 'A Habsburgok **központosítani** akartak, de a magyar rendi önkormányzat (vármegyék, országgyűlés) fennmaradt. Magyarország nem vált a birodalom egyszerű tartományává, hanem **önálló jogrendű, rendi alkotmányos állam maradt** a Habsburg Birodalomban. Az **1715-ös országgyűlés** elfogadta az állandó hadsereg fenntartását, és ettől kezdve a nemesség adómentességének és a jobbágyok adóztatásának rendje is szilárdult.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Évszám–esemény párosítás: 1686 Buda, 1687 pozsonyi országgyűlés, 1697 Zenta, 1699 karlócai béke, 1723 Pragmatica Sanctio.',
            'Forrásrészlet a Pragmatica Sanctióról: mit mond az öröklésről, mit ígér a rendeknek?',
            'Fogalmak: Szent Liga, újszerzeményi jog, Helytartótanács, Magyar Kancellária, Udvari Haditanács.',
            'Esszé: hogyan alakult Magyarország helyzete a Habsburg Birodalomban a török kiűzése után?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy 1687-ben a rendek lemondtak a nemzeti szuverenitásról vagy hogy Magyarország elvesztette az alkotmányát. A trón örökössé vált (férfiágon), az ellenállási jogot eltörölték, de a rendi alkotmány és a vármegyék fennmaradtak. A Helytartótanács nem a bécsi, hanem az országban (Pozsonyban) működő szerv.',
        },
        {
          kind: 'tip',
          text: 'Összefüggést mutass: az újszerzeményi jog és az abszolutista berendezkedés sérelmei vezettek a Rákóczi-szabadságharchoz, a szatmári béke után pedig az 1723-as Pragmatica Sanctióval a rendek és az udvar kompromisszumot kötöttek: örökösödés a rendi jogok elismeréséért.',
        },
      ],
      topicMatch: ['török kiűzése'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Melyik évben szabadult fel Buda a török uralom alól?',
          options: ['1541', '1683', '1686', '1699'],
          answer: 2,
          explanation:
            'Budát 1686-ban vették vissza. 1541-ben esett török kézre, 1683 a bécsi ostrom, 1699 a karlócai béke éve.',
          emelt: true,
        },
        {
          question: 'Mit mondott ki az 1687-es pozsonyi országgyűlés?',
          options: [
            'A Habsburg-ház trónfosztását.',
            'A szabad királyválasztás jogának megerősítését.',
            'A Habsburg-ház női ágon való örökösödését.',
            'A Habsburgok férfiági örökösödését és az ellenállási záradék eltörlését.',
          ],
          answer: 3,
          explanation:
            'A rendek a Habsburg-házat férfiágon örökös királynak ismerték el, és eltörölték az Aranybulla ellenállási záradékát. A női ágú örökösödés 1723-ban (Pragmatica Sanctio) jött.',
          emelt: true,
        },
        {
          question: 'Mit rögzített a Pragmatica Sanctio (1723)?',
          options: [
            'A Habsburg-ház tartományai osztatlanul és elválaszthatatlanul öröklődnek, női ágon is.',
            'Magyarország önálló királysággá válik.',
            'A magyar rendek elvesztik adómentességüket.',
            'Erdélyt Magyarországhoz csatolják.',
          ],
          answer: 0,
          explanation:
            'A Pragmatica Sanctio a birodalom egységét és a női ági örökösödést mondta ki; így örökölhette Mária Terézia az apját.',
          emelt: true,
        },
        {
          question: 'Melyik szerv székelt Pozsonyban, és a király távollétében irányította az ország ügyeit?',
          options: ['Udvari Haditanács', 'Helytartótanács', 'Magyar Kancellária', 'Szenátus'],
          answer: 1,
          explanation:
            'A Helytartótanács 1723-tól működött Pozsonyban. Az Udvari Haditanács és a Magyar Kancellária Bécsben székelt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Buda visszafoglalása', url: wiki('Buda visszafoglalása 1686') },
        { label: 'Wikipédia: Pragmatica Sanctio', url: wiki('Pragmatica Sanctio') },
        { label: 'Wikipédia: karlócai béke', url: wiki('karlócai béke') },
      ],
    },
    {
      id: 'ujranepesules-nemzetisegek-18-szazad',
      subject: 'tortenelem',
      unitId: 'tortenelem-18-szazad-felvilagosodas',
      title: 'Magyarország újranépesülése és újranépesítése',
      level: 'kozep',
      requirement: {
        kozep: 'Magyarország újranépesülése és újranépesítése',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A másfél évszázados török uralom és a háborúk után az Alföld és a Dunántúl déli része **elnéptelenedett**.',
            'A 18. században a lakosság **több mint megkétszereződött**: természetes szaporodás, **belső vándorlás**, **betelepülés** (spontán) és **betelepítés** (szervezett).',
            'A betelepülők: **szerbek**, **románok**, **szlovákok**, **ruszinok**, **németek (svábok)**. Ennek eredményeként a magyarság aránya csökkent, az ország **soknemzetiségűvé** vált.',
            'A Dél-Magyarországon fekvő **Temesköz** (Bánság) a bécsi udvar közvetlen irányítása alá került; a **Határőrvidék** katonai igazgatású terület volt.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'betelepülés',
              text: 'Spontán, önkéntes vándorlás: az emberek maguk keresnek új lakóhelyet (például a románok és a szlovákok).',
            },
            {
              term: 'betelepítés',
              text: 'Szervezett, a földesúr vagy az állam által irányított letelepítés (például a németek a Bánságban).',
            },
            {
              term: 'svábok',
              text: 'A Magyarországra települő német ajkú lakosság összefoglaló neve (Dunántúl, Bánság, Szatmár).',
              emelt: true,
            },
            {
              term: 'görög katolikus',
              text: 'A keleti szertartást követő, de a pápát elismerő egyház; a románok és ruszinok egy része csatlakozott hozzá (Erdélyben 1700 körül).',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért volt szükség újranépesítésre?' },
        {
          kind: 'text',
          text: 'A mohácsi csata (1526) óta tartó háborúk, a tizenöt éves háború (1591–1606), a hadjáratok és a járványok különösen a Duna–Tisza közét, a Tiszántúlt és a Dél-Dunántúlt sújtották. A **török kiűzése** (1686–1699) után sok vidék gyéren lakott volt, a felhagyott földek parlagon hevertek, ezért a nagybirtokosok és az udvar is a munkaerő pótlására törekedett.',
        },
        { kind: 'heading', text: 'Az újranépesülés útjai' },
        {
          kind: 'keypoints',
          items: [
            '**Természetes szaporodás**: a 18. század viszonylagos békéje (a Rákóczi-szabadságharc után) lehetővé tette a népesség gyors növekedését.',
            '**Belső vándorlás**: a Felföld és az északi megyék lakói, főként **magyarok** és **szlovákok** vándoroltak délre, az Alföldre és a Dunántúl déli részére.',
            '**Betelepülés**: a Balkán és a Kárpátok felől **szerbek** és **románok** érkeztek spontán.',
            '**Betelepítés**: a földesurak és az udvar szervezetten hoztak **németeket** (és más népességet), akiknek kedvezményeket ígértek.',
          ],
        },
        {
          kind: 'map',
          title: 'Az újranépesülés fontos területei',
          places: [
            { name: 'Temesvár', lat: 45.75, lon: 21.23, note: 'a Bánság központja, német betelepítés' },
            { name: 'Karlóca', lat: 45.2, lon: 19.93, note: 'a szerbek egyházi központja' },
            { name: 'Újvidék', lat: 45.25, lon: 19.84, note: 'a Délvidék szerb és német lakosságú városa' },
            { name: 'Békéscsaba', lat: 46.68, lon: 21.09, note: 'szlovák betelepülők' },
            { name: 'Szatmár', lat: 47.79, lon: 22.88, note: 'Károlyi-birtok, német telepesek' },
            { name: 'Bonyhád', lat: 46.3, lon: 18.53, note: 'Tolna, német falvak' },
          ],
        },
        { kind: 'heading', text: 'A betelepülő népek' },
        {
          kind: 'compare',
          title: 'Betelepülők és betelepítettek',
          columns: ['Népcsoport', 'Honnan és hová?'],
          rows: [
            {
              label: 'Szerbek',
              cells: ['a török elől menekülők', '1690 körül Csernojevics Arzén pátriárka vezetésével a Délvidékre; külön kiváltságokat kaptak, sokan a Határőrvidéken szolgáltak'],
            },
            {
              label: 'Románok',
              cells: ['Erdély és a Havasalföld felől', 'az erdélyi Partium, a Bánság és a keleti országrész; többségük ortodox, egy részük görög katolikus lett'],
            },
            {
              label: 'Szlovákok',
              cells: ['a felvidéki megyékből', 'az Alföld északi és középső tájaira (például Békéscsaba)'],
            },
            {
              label: 'Ruszinok',
              cells: ['Kárpátalja felől', 'a Felső-Tisza vidékére és Északkelet-Magyarországra'],
            },
            {
              label: 'Németek (svábok)',
              cells: ['a Német-római Birodalom déli és nyugati tartományai', 'a Bánság, Baranya, Tolna, Bácska, a Dunántúl és Szatmár'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A németek betelepítése három nagy hullámban zajlott. A **Bánságot** a Habsburg-udvar 1716 után közvetlen katonai-kamarai igazgatás alá vonta (**Mercy** gróf kormányzása alatt), és a területre szervezetten német telepeseket hozott. A hullámok Mária Terézia és II. József uralkodása idején is folytatódtak. Az 1778-as megyésítés után a Bánságot Magyarországhoz csatolták. A nagybirtokosok (például **Károlyi Sándor** Szatmárban) szintén német telepeseket fogadtak, mert azok jobb művelési módszereket hoztak.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A románok egy része Erdélyben **1700 körül** a Rómával való unió révén **görög katolikus** lett: ez az egyház a keleti szertartást megtartotta, de a pápa főségét elfogadta. A svábokat a Bánság mellett Tolnában, Baranyában és a Duna mentén is megtaláljuk; ezt a területet gyakran „Sváb-Törökországnak” is nevezik.',
        },
        { kind: 'heading', text: 'Következmények' },
        {
          kind: 'keypoints',
          items: [
            'A népesség a 18. században több mint megkétszereződött.',
            'A magyarság aránya csökkent: a század végén a történelmi Magyarország lakosságának **kevesebb mint a felét**, nagyjából 40%-át tették ki a magyarok.',
            'Az ország **soknemzetiségű** és **sokvallású** (katolikus, református, evangélikus, ortodox, görög katolikus) lett.',
            'Az **Alföld** benépesült (mezővárosok, később tanyák), a mezőgazdaság újra fellendült, főként gabona- és állattenyésztés.',
            'Hosszabb távon ez vezetett a 19. századi **nemzetiségi kérdéshez**.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép és táblázat: melyik nép hová települt, milyen úton (betelepülés vagy betelepítés)?',
            'Rövid kifejtés: miért csökkent a magyarság aránya a 18. században?',
            'Fogalmak: betelepítés, betelepülés, Határőrvidék, svábok (emelt).',
            'Forrásrészlet telepesek kedvezményeiről vagy a bánsági németek helyzetéről.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a törökök hozták az új lakosságot, vagy hogy a nemzetiségek már a honfoglalás óta ilyen arányban éltek az országban. A mai nemzetiségi térkép nagy része a 18. századi betelepülés és betelepítés eredménye. A magyarság aránya nem azért csökkent, mert a magyarok száma fogyott, hanem mert a többi nép szaporodása és beáramlása gyorsabb volt.',
        },
        {
          kind: 'tip',
          text: 'Három okot és három következményt tanulj meg. Okok: a török kori pusztulás, a békés évtizedek (szaporodás), az udvar és a földesurak munkaerő-igénye. Következmények: népességnövekedés, soknemzetiségű ország, nemzetiségi kérdés a 19. században.',
        },
      ],
      topicMatch: ['magyarország újranépesülése', '=18. század'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Mi a különbség a betelepülés és a betelepítés között?',
          options: [
            'Nincs különbség, a két szó ugyanazt jelenti.',
            'A betelepülés önkéntes, spontán; a betelepítés szervezett, földesúri vagy állami irányítású.',
            'A betelepülés csak a németekre vonatkozik.',
            'A betelepítés spontán, a betelepülés kényszer.',
          ],
          answer: 1,
          explanation:
            'A betelepülést maguk a telepesek kezdeményezik, a betelepítést a földesúr vagy az udvar szervezi.',
        },
        {
          question: 'Melyik népcsoport érkezett 1690 körül Csernojevics Arzén vezetésével?',
          options: ['Románok', 'Szlovákok', 'Szerbek', 'Németek'],
          answer: 2,
          explanation:
            'A szerbek tömegesen a török elől menekültek a Délvidékre, és kiváltságokat kaptak a Habsburg-uralkodótól.',
        },
        {
          question: 'Mi következett a 18. századi újranépesülésből?',
          options: [
            'A magyarság aránya nőtt az országban.',
            'Az ország egységesen magyar nyelvű maradt.',
            'A lakosság létszáma több mint megkétszereződött, és soknemzetiségű lett.',
            'Csökkent a lakosság száma, mert a nemzetiségek elhagyták az országot.',
          ],
          answer: 2,
          explanation:
            'A természetes szaporodás és a vándorlás megnövelte a népességet; a magyarság aránya viszont csökkent, az ország soknemzetiségű lett.',
        },
        {
          question: 'Melyik területre került külön, közvetlen bécsi igazgatás a 18. században?',
          options: ['A Dunántúl', 'A Felvidék', 'Az Alföld', 'A Temesköz (Bánság)'],
          answer: 3,
          explanation:
            'A Bánságot 1716 után a bécsi udvar közvetlen katonai-kamarai igazgatás alá vonta, és ide német telepeseket hozott.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: a Bánság betelepítése', url: wiki('Bánság betelepítése 18. század') },
        { label: 'Wikipédia: dunai svábok', url: wiki('dunai svábok') },
        { label: 'Wikipédia: Magyarország népessége', url: wiki('Magyarország népessége a 18. században') },
      ],
    },
    {
      id: 'maria-terezia-ii-jozsef-reformjai',
      subject: 'tortenelem',
      unitId: 'tortenelem-18-szazad-felvilagosodas',
      title: 'Mária Terézia és II. József reformjai',
      level: 'kozep',
      requirement: {
        kozep: 'Mária Terézia és II. József reformjai',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Mária Terézia** (1740–1780) és fia, **II. József** (1780–1790) **felvilágosult abszolutizmust** valósítottak meg: felülről, rendeletekkel, a rendek bevonása nélkül modernizálták az államot.',
            'Mária Terézia: **vámrendelet** (1754), **úrbéri rendelet** (1767), **Ratio Educationis** (1777).',
            'II. József: **türelmi rendelet** (1781), **jobbágyrendelet** (1785), **nyelvrendelet** (1784), szerzetesrendek feloszlatása, a Szent Korona Bécsbe vitele. Nem koronáztatta meg magát: „kalapos király”.',
            'József halálos ágyán (1790) a reformok nagy részét visszavonta, a türelmi rendeletet és a jobbágyrendeletet megtartotta.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'felvilágosult abszolutizmus',
              text: 'Az uralkodó a felvilágosodás eszméit felülről, rendeletekkel valósítja meg, a rendek részvétele nélkül: „mindent a népért, semmit a nép által”.',
            },
            {
              term: 'türelmi rendelet',
              text: 'II. József 1781-es rendelete, amely a protestánsoknak és az ortodoxoknak engedélyezte a szabad vallásgyakorlatot, és hivatalt is viselhettek.',
            },
            {
              term: 'úrbéri rendelet',
              text: 'Mária Terézia 1767-es rendelete: meghatározta a jobbágytelek nagyságát és a földesúri terhek felső határát.',
            },
            {
              term: 'Ratio Educationis',
              text: 'Mária Terézia 1777-es oktatási rendelete: egységes, állami felügyelet alatt álló iskolarendszert hozott létre.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mária Terézia (1740–1780)' },
        {
          kind: 'text',
          text: 'Mária Terézia a Pragmatica Sanctio alapján örökölte a trónt. Uralkodását az **osztrák örökösödési háború** (1740–1748) kezdte, amelyben Poroszország megtámadta Sziléziát. 1741-ben a pozsonyi országgyűlésen a magyar rendek katonai támogatást ajánlottak („életünket és vérünket”). Cserébe a királynő nem nyúlt a nemesi adómentességhez és a megyei önkormányzathoz. Az 1760-as években utoljára hívott össze országgyűlést (1764–1765), ezután **rendeletekkel** kormányzott.',
        },
        {
          kind: 'keypoints',
          title: 'Mária Terézia fő reformjai',
          items: [
            '**1754 vámrendelet**: kettős vámhatár: a birodalom osztrák és magyar területe között is vámvonal húzódott. Magyarországot ez főként nyersanyag-termelő és az osztrák ipar felvevőpiaca szerepébe szorította.',
            '**1767 úrbéri rendelet**: egységesen szabályozta a jobbágytelek nagyságát (talajminőség szerint) és a földesúri szolgáltatásokat. Egy egész telek után legfeljebb heti egy nap igás vagy két nap kézi robot, kilenced, pénzbeli adó járt. Védte a jobbágyot a földesúri önkénytől, de a földesúri jogok nagy része megmaradt.',
            '**1777 Ratio Educationis**: népiskolától az egyetemig épített állami iskolarendszer; az állam átvette az oktatás ellenőrzését (a felekezeti iskolákét is).',
            '**Katonai és igazgatási központosítás**: a Határőrvidék erősítése, a Bánság és a vármegyék feletti felügyelet.',
            '**1760**: létrejött a magyar nemesi testőrség Bécsben; a testőríró nemzedék (Bessenyei György) a magyar felvilágosodás első vezéralakjai közé tartozott.',
          ],
        },
        { kind: 'heading', text: 'II. József (1780–1790)' },
        {
          kind: 'text',
          text: 'II. József anyja halála után egyedül uralkodott. A felvilágosodás híve és **centralizáló** uralkodó volt: az egységes, hatékony birodalmat akarta megteremteni. Nem koronáztatta meg magát, a **Szent Koronát Bécsbe vitette** (1784), ezért nevezték **„kalapos királynak”**. Országgyűlést sem hívott össze, a vármegyei önkormányzatot felszámolta, és az országot királyi biztosok által irányított kerületekre osztotta.',
        },
        {
          kind: 'keypoints',
          title: 'II. József fő reformjai',
          items: [
            '**1781 türelmi rendelet**: az evangélikusok, reformátusok és ortodoxok szabadabban gyakorolhatták vallásukat, és hivatalt is viselhettek (de a katolikus egyház maradt az államvallás).',
            '**1785 jobbágyrendelet**: eltörölte a röghöz kötöttséget (a jobbágy szabadon költözhetett, házasodhatott, taníttathatta gyermekét, szabad mesterséget választhatott), de a földesúri kötelezettségek megmaradtak.',
            '**1784 nyelvrendelet**: a birodalom egységes hivatali nyelve a német lett (a latin helyett). Ez a magyar nemességet felháborította, és mozgalmat indított a magyar nyelv védelmére.',
            '**Egyházpolitika**: sok szerzetesrendet feloszlatott, a vagyonukat az állam vette át, plébániákat szervezett. A papnevelés állami felügyelet alá került.',
            '**Népszámlálás** (1784–1787) és földmérés, az adózás igazságosabb kivetésére. A nemességet is adóztatni akarta (1789-es adórendelet).',
            '**Helytartótanács Budára** költözött (1784).',
          ],
        },
        {
          kind: 'compare',
          title: 'Mária Terézia és II. József',
          columns: ['Mária Terézia', 'II. József'],
          rows: [
            { label: 'Uralkodás', cells: ['1740–1780', '1780–1790'] },
            {
              label: 'Stílus',
              cells: ['óvatos, a rendekkel egyezkedett', 'radikális, erőből reformált'],
            },
            {
              label: 'Országgyűlés',
              cells: ['1765-ig összehívta', 'egyet sem hívott össze'],
            },
            {
              label: 'Főbb rendeletek',
              cells: [
                'vámrendelet, úrbéri rendelet, Ratio Educationis',
                'türelmi rendelet, jobbágyrendelet, nyelvrendelet',
              ],
            },
            {
              label: 'Vallás',
              cells: ['katolikus politika, a protestánsok korlátozva', 'türelmi rendelet, a szerzetesrendek megszüntetése'],
            },
          ],
        },
        { kind: 'heading', text: 'A reformok kudarca és hatása' },
        {
          kind: 'text',
          text: 'A nemesség II. József reformjait a rendi alkotmány, a nemesi adómentesség és a vármegyék elleni támadásnak érezte. Az **ellenállás** (és egy sikertelen török háború 1788–1791) súlyos belpolitikai válságot okozott. József **1790 elején**, halála előtt visszavonta rendeletei nagy részét (kivéve például a türelmi rendeletet és a jobbágyrendeletet). Utódja, **II. Lipót** már összehívta az országgyűlést. A reformok mégis lehetővé tették az ország modernizálását, és a magyar nemzeti ébredés (nyelvújítás, irodalom, Kazinczy) részben a német nyelvrendelet elleni reakcióból is eredt.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet (úrbéri rendelet, türelmi rendelet, jobbágyrendelet): melyik uralkodó adta ki, mit szabályoz?',
            'Évszám–uralkodó–rendelet párosítás (1767, 1777, 1781, 1785).',
            'Összehasonlítás: Mária Terézia és II. József módszerei, céljai, eredménye.',
            'Rövid kifejtés: mit jelent a felvilágosult abszolutizmus, és hogyan valósult meg Magyarországon?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni az úrbéri rendeletet (1767, Mária Terézia, a földesúri terhek szabályozása) a jobbágyrendelettel (1785, II. József, a személyes szabadság). A jobbágyfelszabadítás nem történt meg: a jobbágyság megszüntetése 1848-ig váratott magára. A türelmi rendelet sem hozott teljes vallásszabadságot.',
        },
        {
          kind: 'example',
          title: 'Mintaválasz vázlata',
          problem: 'Mutasd be II. József politikáját és annak fogadtatását Magyarországon!',
          solution:
            'Jelleg: felvilágosult abszolutizmus, a központosítás célja az egységes birodalom. Intézkedések: türelmi rendelet (1781), jobbágyrendelet (1785), nyelvrendelet (1784), a Szent Korona Bécsbe vitele, a szerzetesrendek feloszlatása, népszámlálás. Fogadtatás: a nemesség ellenállt a rendi jogok sérelme miatt, a nyelvrendelet nemzeti mozgalmat indított. Eredmény: 1790-ben a rendeletek nagy részét visszavonták, a türelmi és a jobbágyrendelet maradt.',
        },
      ],
      topicMatch: ['mária terézia', 'ii. józsef', 'felvilágosult abszolutizmus'],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Melyik rendelet határozta meg a jobbágytelek nagyságát és a földesúri terheket?',
          options: [
            'A türelmi rendelet (1781)',
            'Az úrbéri rendelet (1767)',
            'A nyelvrendelet (1784)',
            'A jobbágyrendelet (1785)',
          ],
          answer: 1,
          explanation:
            'Mária Terézia 1767-es úrbéri rendelete szabályozta a telek nagyságát és a szolgáltatásokat. Az 1785-ös jobbágyrendelet a személyes szabadságot tágította.',
        },
        {
          question: 'Miért nevezték II. Józsefet „kalapos királynak”?',
          options: [
            'Mert mindig kalapot viselt a koronázáson.',
            'Mert nem koronáztatta meg magát a Szent Koronával.',
            'Mert a nemesek kalapját megadóztatta.',
            'Mert katonai egyenruhát hordott.',
          ],
          answer: 1,
          explanation:
            'József nem koronáztatta meg magát, a Szent Koronát Bécsbe vitette, ezért csúfolták a „kalapos királynak”.',
        },
        {
          question: 'Melyik rendeletet adta ki II. József 1781-ben?',
          options: [
            'Nyelvrendelet',
            'Ratio Educationis',
            'Vámrendelet',
            'Türelmi rendelet',
          ],
          answer: 3,
          explanation:
            'A türelmi rendelet (1781) a protestánsok és az ortodoxok vallásgyakorlását és hivatalviselését engedélyezte.',
        },
        {
          question: 'Mi volt a felvilágosult abszolutizmus lényege?',
          options: [
            'Az uralkodó a rendek közreműködésével hozta a reformokat.',
            'A parlament korlátozta az uralkodó hatalmát.',
            'A nép választotta az uralkodót.',
            'Az uralkodó a felvilágosodás eszméit felülről, rendeletekkel valósította meg.',
          ],
          answer: 3,
          explanation:
            'A felvilágosult abszolutista uralkodó a reformokat saját hatalmából, a rendek és a nép megkérdezése nélkül hajtotta végre.',
        },
        {
          question: 'Melyik rendelet vezette be a német hivatali nyelvet?',
          options: [
            'Az 1767-es úrbéri rendelet',
            'Az 1777-es Ratio Educationis',
            'Az 1784-es nyelvrendelet',
            'Az 1781-es türelmi rendelet',
          ],
          answer: 2,
          explanation:
            'II. József 1784-es nyelvrendelete tette a németet a birodalom hivatalos nyelvévé; ez a magyar nemesség ellenállását váltotta ki.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Mária Terézia', url: wiki('Mária Terézia magyar királynő') },
        { label: 'Wikipédia: II. József', url: wiki('II. József magyar király') },
        { label: 'Wikipédia: úrbéri rendelet', url: wiki('Mária Terézia úrbéri rendelete 1767') },
      ],
    },
    {
      id: 'felvilagosodas-brit-amerikai-allamberendezkedes',
      subject: 'tortenelem',
      unitId: 'tortenelem-18-szazad-felvilagosodas',
      title: 'A felvilágosodás eszméi, a brit monarchia és az amerikai köztársaság',
      level: 'kozep',
      requirement: {
        kozep:
          'A brit alkotmányos monarchia és az amerikai köztársaság működése; A felvilágosodás államelméletei',
        emelt: 'Az európai világkép változása (alapvető kérdések, tudományos gondolkodás, társadalomkép, vallás)',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Felvilágosodás**: a 18. századi szellemi mozgalom, amely az **ész** erejében bízott, és bírálta a hagyományos tekintélyeket (egyház, abszolút uralkodó, rendi kiváltság).',
            'Államelméletek: **Locke** (természetjog, a hatalom a nép beleegyezésén alapul), **Montesquieu** (**hatalmi ágak megosztása**), **Rousseau** (**társadalmi szerződés**, **népszuverenitás**).',
            '**Anglia**: az 1689-es **Jognyilatkozat** után **alkotmányos monarchia**: a parlament korlátozza a király hatalmát.',
            '**USA**: 1776. július 4. **Függetlenségi nyilatkozat**; 1787 **alkotmány**: **köztársaság**, elnök, kétkamarás Kongresszus, Legfelsőbb Bíróság, szövetségi állam.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'alkotmány',
              text: 'Az állam működésének alapvető szabályait és az állampolgárok jogait rögzítő törvény.',
            },
            {
              term: 'alkotmányos monarchia',
              text: 'Olyan királyság, ahol az uralkodó hatalmát az alkotmány és a parlament korlátozza.',
            },
            {
              term: 'hatalmi ágak megosztása',
              text: 'Törvényhozás, végrehajtás és igazságszolgáltatás különválasztása, hogy egy szerv se kaparinthassa meg az egész hatalmat (Montesquieu).',
            },
            {
              term: 'társadalmi szerződés',
              text: 'Az elmélet szerint az állam az emberek megegyezéséből jön létre; ha az uralkodó megsérti a szerződést, a nép visszavonhatja a hatalmat.',
            },
            {
              term: 'elektori rendszer',
              text: 'Az amerikai elnököt a polgárok nem közvetlenül, hanem az államonként választott elektorok választják meg.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A felvilágosodás eszméi' },
        {
          kind: 'text',
          text: 'A felvilágosodás a 17. század tudományos eredményeire épült: ha a természet törvényei az ésszel megismerhetők, a társadalom is „észszerűen” berendezhető. A felvilágosodás gondolkodói szerint az embert **természetes jogok** illetik meg (élet, szabadság, tulajdon), és a hatalom forrása a **nép**.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'John Locke (angol)',
              text: 'A hatalom a nép beleegyezésén alapul; ha a kormány a természetes jogokat sérti, a nép ellenállhat.',
            },
            {
              name: 'Montesquieu (francia)',
              text: 'A törvények szelleméről (1748): a **hatalmi ágak megosztását** javasolta (törvényhozó, végrehajtó, bírói), hogy a hatalom ne csaphasson át önkényuralomba.',
            },
            {
              name: 'Jean-Jacques Rousseau (francia)',
              text: 'A társadalmi szerződés (1762): a szuverenitás a népé (**népszuverenitás**), a törvény az általános akarat kifejezése.',
            },
            {
              name: 'Voltaire (francia)',
              text: 'Az egyházi türelmetlenség és a babona elleni kritikus, a vallási türelem és a szólásszabadság védelmezője.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A gondolatokat az **Enciklopédia** (Diderot és d\'Alembert) népszerűsítette a művelt polgárság körében. A felvilágosult nézetek két úton hatottak: **forradalmakban** (amerikai, francia) és **felvilágosult abszolutizmusban** (II. József, Nagy Frigyes).',
        },
        { kind: 'heading', text: 'A brit alkotmányos monarchia' },
        {
          kind: 'text',
          text: 'Angliában a 17. századi polgárháború (1642–1649) és I. Károly kivégzése után Cromwell köztársasága következett, majd visszatért a monarchia. Az 1688–1689-es **dicsőséges forradalom** elkergette II. Jakabot; az új király, **III. Vilmos** elfogadta az **1689-es Jognyilatkozatot (Bill of Rights)**. E szerint a király nem függeszthet fel törvényt és nem vethet ki adót a parlament jóváhagyása nélkül; a parlament rendszeresen ülésezik, szabadon választják, a képviselők szólásszabadsága biztosított.',
        },
        {
          kind: 'keypoints',
          title: 'Hogyan működött?',
          items: [
            '**Parlament**: Alsóház (Commons, választott képviselők) és Felsőház (Lordok háza, örökletes főnemesség és püspökök). A választójog még szűk, vagyoni cenzushoz kötött volt.',
            '**Király**: a végrehajtó hatalom elvileg az övé, de a gyakorlatban a **parlamentnek felelős kormány** vette át. A 18. században kialakult a kabinet és a miniszterelnök tisztsége (Walpole).',
            '**Jogállam**: a törvény előtti egyenlőség és a bíróságok függetlensége alapelv volt, a személyes szabadság védett.',
            'Ez a modell mintául szolgált a kontinens liberálisainak.',
          ],
        },
        { kind: 'heading', text: 'Az amerikai függetlenség és köztársaság' },
        {
          kind: 'text',
          text: 'Az észak-amerikai **13 brit gyarmat** a hétéves háború (1756–1763) után a költségek miatt új adókat kapott, anélkül, hogy a gyarmatosok képviselői beleszólhattak volna. „Nincs adózás képviselet nélkül”, hangzott a jelszó. A bostoni teadélután (1773) után 1775-ben kitört a háború. **1776. július 4-én** a Philadelphiában ülésező Kongresszus kimondta a **Függetlenségi nyilatkozatot** (Thomas Jefferson fogalmazta), amely a természetes jogokra (élet, szabadság, a boldogság keresése) és a népszuverenitásra hivatkozott. A függetlenségi háború vezetője **George Washington** volt; Franciaország segítségével 1781-ben Yorktownnál győztek, és az 1783-as **párizsi béke** elismerte az Egyesült Államok függetlenségét.',
        },
        {
          kind: 'text',
          text: 'Az **1787-es philadelphiai alkotmány** a világ első írott, ma is érvényes alkotmánya. A hatalmi ágak megosztására épült, ellensúlyok rendszerével.',
        },
        {
          kind: 'compare',
          title: 'Az 1787-es amerikai alkotmány',
          columns: ['Hatalmi ág', 'Szerv'],
          rows: [
            { label: 'Törvényhozás', cells: ['Kongresszus', 'Szenátus (az államokat képviseli) és Képviselőház (a népet)'] },
            { label: 'Végrehajtás', cells: ['Elnök', 'államfő és kormányfő egy személyben, négyévente választják'] },
            { label: 'Igazságszolgáltatás', cells: ['Legfelsőbb Bíróság', 'az alkotmányosságot is védi'] },
          ],
        },
        {
          kind: 'text',
          text: 'Az Egyesült Államok **szövetségi állam (föderáció)**: a tagállamoknak saját kormányuk és törvényeik vannak, a szövetségi kormány csak az alkotmányban megadott ügyekben dönt. Az első elnök **Washington** (1789). Az alkotmányt 1791-ben kiegészítették az első tíz módosítással (**Bill of Rights**), amely a szólás-, vallás- és sajtószabadságot védi. A „nép” azonban korlátozott volt: a rabszolgaság fennmaradt, a nők és az őslakosok nem rendelkeztek választójoggal.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az elnököt nem közvetlenül választják: minden állam annyi **elektort** küld, ahány képviselő és szenátor illeti meg a Kongresszusban, és az elektorok szavaznak az elnökre (**elektori rendszer**). Ez az államok súlyát is érvényesíti a kisebb és nagyobb államok között.',
        },
        {
          kind: 'compare',
          title: 'Brit és amerikai rendszer',
          columns: ['Nagy-Britannia', 'Amerikai Egyesült Államok'],
          rows: [
            { label: 'Államforma', cells: ['alkotmányos monarchia', 'köztársaság'] },
            { label: 'Államfő', cells: ['király (örökletes)', 'elnök (választott)'] },
            { label: 'Alkotmány', cells: ['történelmi törvények és szokások', 'egyetlen írott alkotmány (1787)'] },
            { label: 'Kormány', cells: ['a parlamentnek felelős', 'az elnök vezeti, a Kongresszustól független'] },
          ],
        },
        {
          kind: 'heading',
          text: 'Az európai világkép változása',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A 16–17. századi **tudományos forradalom** átalakította a világképet: **Kopernikusz** a Napot tette a világ középpontjába, **Galilei** távcsővel igazolta, **Newton** a gravitáció törvényével egységes természettudományi magyarázatot adott (a világ mint „gépezet”). A természet megismeréséhez a **kísérlet** és az **ész** lett az eszköz, nem a hagyomány. A **vallás**: a felvilágosodás sok gondolkodója a deizmust (Isten megteremtette a világot, de nem avatkozik be) vagy a vallási türelmet hirdette, és bírálta az egyházi hatalmat. A **társadalomkép** is megváltozott: a rendi kiváltságok helyett a természetes emberi jogokból, a társadalmi szerződésből és a polgárok egyenlőségéből indultak ki.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet (Jognyilatkozat, Függetlenségi nyilatkozat, Montesquieu, Rousseau): melyik gondolkodóhoz vagy dokumentumhoz tartozik, mit állít?',
            'Összehasonlítás: brit alkotmányos monarchia és amerikai köztársaság.',
            'Fogalmak: hatalmi ágak megosztása, népszuverenitás, alkotmány, alkotmányos monarchia, társadalmi szerződés.',
            'Emelt szint: elektori rendszer; a világkép változása (Kopernikusz–Newton–felvilágosodás).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: Montesquieu-t és Rousseau-t felcserélni. Montesquieu a hatalmi ágak megosztását, Rousseau a népszuverenitást és a társadalmi szerződést képviseli. Az amerikai elnök nem „király”, és az 1776-os Függetlenségi nyilatkozat nem azonos az 1787-es alkotmánnyal.',
        },
        {
          kind: 'tip',
          text: 'Az amerikai alkotmány működését mindig a hatalmi ágakkal magyarázd: törvényhozás (Kongresszus), végrehajtás (elnök), bíráskodás (Legfelsőbb Bíróság). A brit rendszernél a parlament fölényét és a király korlátait (1689) emeld ki.',
        },
      ],
      topicMatch: [
        'felvilágosodás',
        'brit és az amerikai',
        'angol alkotmányos monarchia',
      ],
      cards: { subject: 'tortenelem', era: 'koraujkor' },
      quiz: [
        {
          question: 'Ki képviselte a hatalmi ágak megosztásának elvét?',
          options: ['Rousseau', 'Montesquieu', 'Voltaire', 'Locke'],
          answer: 1,
          explanation:
            'Montesquieu A törvények szelleméről című művében javasolta a törvényhozás, a végrehajtás és az igazságszolgáltatás szétválasztását. Rousseau a népszuverenitást hirdette.',
        },
        {
          question: 'Melyik dokumentum korlátozta a király hatalmát Angliában 1689-ben?',
          options: [
            'A Függetlenségi nyilatkozat',
            'Az Emberi és polgári jogok nyilatkozata',
            'A Jognyilatkozat (Bill of Rights)',
            'A Pragmatica Sanctio',
          ],
          answer: 2,
          explanation:
            'Az 1689-es Jognyilatkozat a parlament jogait rögzítette: a király nem vethetett ki adót és nem függeszthetett fel törvényt a parlament nélkül.',
        },
        {
          question: 'Mikor mondták ki az amerikai függetlenséget?',
          options: ['1689', '1776', '1787', '1789'],
          answer: 1,
          explanation:
            '1776. július 4-én fogadták el a Függetlenségi nyilatkozatot. 1787 az alkotmány, 1789 Washington elnöksége és a francia forradalom kezdete.',
        },
        {
          question: 'Melyik az amerikai alkotmány egyik fő jellemzője?',
          options: [
            'A király örökletes hatalma.',
            'A hatalmi ágak megosztása és a szövetségi állam.',
            'Az egykamarás parlament abszolút uralma.',
            'A rendi gyűlések működése.',
          ],
          answer: 1,
          explanation:
            'Az 1787-es alkotmány szétválasztotta a törvényhozást (Kongresszus), a végrehajtást (elnök) és az igazságszolgáltatást, és szövetségi államot hozott létre.',
        },
        {
          question: 'Hogyan választották az amerikai elnököt az alkotmány szerint?',
          options: [
            'A Kongresszus nevezte ki.',
            'Elektorok útján, közvetetten.',
            'A király jelölte ki.',
            'A Legfelsőbb Bíróság választotta.',
          ],
          answer: 1,
          explanation:
            'Az elnököt az államokban választott elektorok szavazata dönti el (elektori rendszer).',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: felvilágosodás', url: wiki('felvilágosodás') },
        { label: 'Wikipédia: Bill of Rights 1689', url: wiki('Bill of Rights 1689') },
        {
          label: 'Wikipédia: Amerikai Függetlenségi nyilatkozat',
          url: wiki('Amerikai Függetlenségi nyilatkozat'),
        },
      ],
    },
    {
      id: 'francia-forradalom-jakobinus-napoleon',
      subject: 'tortenelem',
      unitId: 'tortenelem-18-szazad-felvilagosodas',
      title: 'A francia forradalom, a jakobinus diktatúra és Napóleon',
      level: 'kozep',
      requirement: {
        kozep:
          'A felvilágosodás államelméletei; az Emberi és polgári jogok nyilatkozata (a francia forradalom)',
        emelt: 'A jakobinus diktatúra; Napóleoni háborúk és a bécsi kongresszus',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1789**: a rendi gyűlés összehívása után a harmadik rend nemzetgyűlésnek nyilvánította magát; **július 14.**: a **Bastille** ostroma; **augusztus 26.**: az **Emberi és polgári jogok nyilatkozata**.',
            '**1791**: alkotmányos monarchia, cenzusos választójog. **1792**: köztársaság. **1793. január**: XVI. Lajos kivégzése.',
            '**1793–1794**: a **jakobinus diktatúra** (Robespierre): terror, forradalmi törvényszék, ármaximálás. **1794. júliusban** Robespierre bukása.',
            '**1799**: Napóleon hatalomátvétele; **1804**: császár. Európa-szerte háborúk, **1815**: Waterloo, a bécsi kongresszus.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'népfelség (népszuverenitás)',
              text: 'Az állam hatalmának forrása a nép; a törvény a nép akaratából származik.',
            },
            {
              term: 'jogegyenlőség',
              text: 'A törvény előtt mindenki egyenlő, nincs rendi kiváltság.',
            },
            {
              term: 'jakobinus',
              text: 'A legradikálisabb forradalmi klub tagja (Robespierre, Danton); a jakobinusok irányították a diktatúrát (1793–94).',
            },
            {
              term: 'diktatúra',
              text: 'Korlátlan, a törvényektől független uralom; a jakobinus diktatúra a terrorra épült.',
            },
            {
              term: 'kontinentális zárlat',
              text: 'Napóleon 1806-os intézkedése: az európai kontinens kikötőit lezárta a brit áruk előtt, hogy gazdaságilag megroppantsa Nagy-Britanniát.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az okok' },
        {
          kind: 'keypoints',
          items: [
            '**Társadalmi igazságtalanság**: a francia társadalom három rendje (papság, nemesség, harmadik rend). A privilegizált rendek nem fizettek adót, a harmadik rend (polgárság, parasztság) viselte a terheket.',
            '**Pénzügyi csőd**: a háborúk (köztük az amerikai függetlenségi háború támogatása) és az udvari pazarlás miatt az állam eladósodott.',
            '**Rossz termések** (1788–1789): élelmiszer-drágulás, éhínség.',
            '**Felvilágosodás eszméi**: egyenlőség, szabadság, népfelség.',
            '**Gyenge uralkodó**: XVI. Lajos nem tudta megoldani a válságot.',
          ],
        },
        { kind: 'heading', text: '1789: a forradalom kitörése' },
        {
          kind: 'timeline',
          items: [
            { date: '1789. május', text: 'Összeül a rendi gyűlés (Versailles).' },
            {
              date: '1789. június',
              text: 'A harmadik rend nemzetgyűlésnek nyilvánítja magát; a labdaházi eskü: alkotmányt követelnek.',
            },
            { date: '1789. július 14.', text: 'A párizsiak elfoglalják a Bastille börtönt: a forradalom jelképe.' },
            {
              date: '1789. augusztus 4.',
              text: 'A feudális kiváltságok és a jobbágyi terhek eltörlése.',
            },
            {
              date: '1789. augusztus 26.',
              text: 'Az Emberi és polgári jogok nyilatkozata.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **Emberi és polgári jogok nyilatkozata** kimondta, hogy az emberek szabadon és jogaikban egyenlőnek születnek. Természetes jogok: szabadság, tulajdon, biztonság, az elnyomással szembeni ellenállás. Kimondta a **népfelséget** (a szuverenitás a nemzetben rejlik), a **törvény előtti egyenlőséget** és a hatalmi ágak szétválasztását, vagyis a felvilágosodás eszméit törvénnyé tette.',
        },
        { kind: 'heading', text: 'Az alkotmányos monarchiától a köztársaságig' },
        {
          kind: 'text',
          text: 'Az **1791-es alkotmány** alkotmányos monarchiát hozott létre: a király hatalmát a törvényhozó nemzetgyűlés korlátozta, a választójog azonban **cenzusos** volt (vagyonhoz kötött). XVI. Lajos külföldre próbált szökni (Varennes), ezzel bizalmát vesztette. 1792-ben a háború Ausztria és Poroszország ellen kitört, a forradalom radikalizálódott. A **köztársaságot** 1792 őszén kiáltották ki, és XVI. Lajost 1793 januárjában kivégezték.',
        },
        {
          kind: 'heading',
          text: 'A jakobinus diktatúra (1793–1794)',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A külső (európai koalíció) és belső (vendée-i felkelés) veszély miatt a hatalmat a **jakobinusok**, **Robespierre** vezetésével vették át. A **Közjóléti Bizottság** gyakorlatilag diktatórikus hatalommal irányította az országot; a **Forradalmi Törvényszék** ítélkezett az ellenforradalmárok felett (**terror**: guillotine). Az árak felső határát törvény szabta meg (maximum), új forradalmi naptárat vezettek be, és tömeges hadseregszervezéssel védték a forradalmat. 1794 nyarán a diktatúra ellen fellépők megbuktatták Robespierre-t (**termidor 9., 1794. július 27.**), a terror véget ért. Ezt követte a **direktórium** (1795–1799).',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A magyar jakobinusok (Martinovics Ignác és társai) szervezkedését 1794-ben leleplezték, a vezetőket 1795-ben Budán kivégezték (a Vérmező); ez a magyar jakobinus mozgalom sorsa.',
        },
        { kind: 'heading', text: 'Napóleon' },
        {
          kind: 'text',
          text: '**Napóleon Bonaparte** katonai pályafutása a forradalmi háborúkban indult. **1799-ben** (brumaire 18.) államcsínnyel átvette a hatalmat (konzulátus), 1804-ben császárrá koronáztatta magát. A **Code civil** (Napóleoni törvénykönyv, 1804) a törvény előtti egyenlőséget, a tulajdon szentségét és a polgári házasságot rögzítette, és sok európai ország jogát befolyásolta. Napóleon a forradalom vívmányait terjesztette, de egyben saját hatalmát is megszilárdította.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1799', text: 'Napóleon hatalomra jut (konzulátus).' },
            { date: '1804', text: 'Császárrá koronázás, Code civil.' },
            {
              date: '1805',
              text: 'Az austerlitzi csata (három császár csatája): Napóleon legyőzi az osztrák–orosz sereget.',
              emelt: true,
            },
            {
              date: '1806',
              text: 'Kontinentális zárlat Nagy-Britannia ellen.',
              emelt: true,
            },
            {
              date: '1812',
              text: 'Oroszországi hadjárat: a borogyinói csata, majd a nagy hadsereg pusztulása.',
              emelt: true,
            },
            {
              date: '1813',
              text: 'A lipcsei csata (a népek csatája): Napóleon vereséget szenved.',
              emelt: true,
            },
            { date: '1814–1815', text: 'Lemondás, Elba; a száz nap; Waterloo (1815. június 18.), Szent Ilona.' },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A napóleoni háborúkban Franciaország Európa nagy részét uralma alá vonta, és megszűnt a Német-római Császárság (1806). A kontinentális zárlat kudarca (az oroszok nem tartották be) és az 1812-es oroszországi hadjárat (borogyinói csata, moszkvai tűzvész, a visszavonulás pusztulása) fordította meg a hadiszerencsét. A **lipcsei csatában (1813)** az orosz, porosz, osztrák és svéd sereg győzött; 1814-ben Napóleon lemondott. 1815-ben visszatért (száz nap), de **Waterloonál** véglegesen megverték, és Szent Ilona szigetére száműzték.',
        },
        {
          kind: 'heading',
          text: 'A bécsi kongresszus (1814–1815)',
          emelt: true,
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A győztes hatalmak (Ausztria, Oroszország, Poroszország, Nagy-Britannia) **Metternich** osztrák kancellár vezetésével a bécsi kongresszuson újrarajzolták Európa térképét. Elvei: **legitimitás** (a régi uralkodóházak visszaállítása), **egyensúly** (egyetlen hatalom se válhasson túlsúlyossá) és **restauráció**. A Szent Szövetség (1815) a forradalmak elfojtására és a régi rend védelmére jött létre. Az eszmék (népfelség, jogegyenlőség, nemzeti érzés) azonban nem tűntek el, a 19. századi liberális és nemzeti mozgalmak ezekre építettek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet az Emberi és polgári jogok nyilatkozatából: milyen elveket fogalmaz meg (népfelség, jogegyenlőség, tulajdon)?',
            'Okok, események és következmények a francia forradalomról.',
            'Évszám–esemény párosítás: 1789 Bastille, 1793 Lajos kivégzése, 1799 Napóleon, 1815 Waterloo.',
            'Emelt szint: a jakobinus diktatúra jellemzése, a napóleoni háborúk fordulópontjai, a bécsi kongresszus elvei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a jakobinus diktatúrát a Napóleoni Császársággal vagy az Emberi jogok nyilatkozatának 1789-es elfogadásával összekeverni. A nyilatkozat 1789 (szabadságeszmék), a jakobinus diktatúra 1793–1794 (terror), Napóleon 1799-től. A forradalom nem egy esemény volt, hanem több szakasz: alkotmányos monarchia, köztársaság, terror, direktórium, Napóleon.',
        },
        {
          kind: 'tip',
          text: 'A forradalom hatását két szinten mondd: eszmék (jogegyenlőség, népfelség, a kiváltságok eltörlése) és következmények (Európa-szerte háborúk, nemzeti és liberális mozgalmak). Emelt szinten emeld ki a terror ellentmondását: a szabadság nevében diktatúra.',
        },
      ],
      topicMatch: ['francia forradalom', 'emberi és polgári jogok', 'jakobinus diktatúra'],
      cards: { subject: 'tortenelem', era: 'ujkor' },
      quiz: [
        {
          question: 'Melyik esemény jelképezi a francia forradalom kitörését?',
          options: [
            'XVI. Lajos kivégzése',
            'Napóleon császárrá koronázása',
            'A Bastille ostroma 1789. július 14-én',
            'A Közjóléti Bizottság felállítása',
          ],
          answer: 2,
          explanation:
            'A párizsiak 1789. július 14-én elfoglalták a Bastille-t; ez a forradalom jelképe (a francia nemzeti ünnep napja).',
        },
        {
          question: 'Mit mondott ki az Emberi és polgári jogok nyilatkozata (1789)?',
          options: [
            'A rendi kiváltságok örökkévalóságát.',
            'A király korlátlan hatalmát.',
            'Az emberek szabadnak és jogaikban egyenlőnek születnek; a szuverenitás a nemzeté.',
            'A rabszolgaság és a jobbágyság fenntartását.',
          ],
          answer: 2,
          explanation:
            'A nyilatkozat a jogegyenlőséget, a természetes jogokat (szabadság, tulajdon, biztonság) és a népfelséget rögzítette.',
        },
        {
          question: 'Ki volt a jakobinus diktatúra vezetője?',
          options: ['Napóleon', 'Robespierre', 'XVI. Lajos', 'Washington'],
          answer: 1,
          explanation:
            'A jakobinus diktatúra (1793–1794) vezető egyénisége Robespierre volt; Napóleon csak 1799-ben jutott hatalomra.',
          emelt: true,
        },
        {
          question: 'Mi volt a kontinentális zárlat lényege?',
          options: [
            'Az európai kikötők lezárása a brit áruk előtt.',
            'A francia határok lezárása a menekültek elől.',
            'Az osztrák császárság elszigetelése.',
            'Az Atlanti-óceán lezárása az amerikaiak elől.',
          ],
          answer: 0,
          explanation:
            'Napóleon 1806-ban megtiltotta a brit áruk behozatalát a kontinensre, hogy gazdaságilag legyőzze Nagy-Britanniát.',
          emelt: true,
        },
        {
          question: 'Melyik évben szenvedett végleges vereséget Napóleon Waterloonál?',
          options: ['1789', '1799', '1804', '1815'],
          answer: 3,
          explanation:
            'Waterloonál 1815. június 18-án győzték le véglegesen; ezután Szent Ilona szigetére száműzték.',
        },
      ],
      sources: [
        { label: 'Wikipédia: francia forradalom', url: wiki('francia forradalom') },
        { label: 'Wikipédia: Napóleon', url: wiki('I. Napóleon francia császár') },
        { label: 'Wikipédia: bécsi kongresszus', url: wiki('bécsi kongresszus 1815') },
      ],
    },
  ],
};

export default unit;
