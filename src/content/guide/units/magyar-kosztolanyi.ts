import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Magyar nyelv és irodalom: Kosztolányi Dezső életműve (kötelező életmű-szerző). */
const unit: GuideUnit = {
  id: 'kosztolanyi',
  subject: 'magyar',
  order: 64,
  title: 'Kosztolányi Dezső életműve',
  requirementRef: 'Irodalom 1. Életművek: Kosztolányi Dezső',
  intro:
    'A Nyugat első nemzedékének költője, regényírója, novellistája és esszéistája. Egy életmű, amelyben a gyermekkor, a halál és a hétköznapi élet apró csodái ugyanúgy otthon vannak, mint az emberi kapcsolatok kegyetlen lélektana. Életút, főbb művek, értelmezési szempontok és a műelemzés menete.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Irodalom 1. témakör: Életművek a magyar irodalomból. Kötelező szerzők). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'kosztolanyi-palya-nyugat',
      subject: 'magyar',
      unitId: 'kosztolanyi',
      title: 'Kosztolányi pályája és a Nyugat',
      level: 'kozep',
      requirement: {
        kozep:
          'A művek elhelyezése az életműben és az adott korszakban; az életmű néhány jellemzője keretében néhány lírai és egy-három epikai alkotás bemutatása, értelmezése.',
        emelt:
          'Az életút, az életmű legjelentősebb tényei; kronológiai és topográfiai tájékozottság, regionális kötődések; a pályaszakaszokat jellemző főbb témák; a pályaképre ható irányzatok és szellemi kötődések; kötetek, ciklusok, motívumok.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Kosztolányi Dezső** (1885–1936) a **Nyugat** első nemzedékének tagja: költő, regényíró, novellista, műfordító, újságíró és nyelvművelő esszéista.',
            'Szülővárosa **Szabadka** (ma Szerbia, a Délvidék); a pályája nagy részét **Budapesten** töltötte.',
            'Lírájában az **impresszionizmus** és a **szimbolizmus** hatása érződik; kedvelt témái a gyermekkor, a mulandóság, a halál és az élet csodája.',
            'Fő költői kötetei: *A szegény kisgyermek panaszai* (1910) és a késői *Számadás* (1935), benne a *Hajnali részegség* és a *Halotti beszéd*.',
            'Fő epikai művei: *Édes Anna* (1926), *Esti Kornél* (1933), *Pacsirta* (1924).',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1885', text: 'Szabadkán született.' },
            { date: '1907', text: 'Első verseskötete: *Négy fal között*.' },
            { date: '1908', text: 'Megindul a Nyugat; Kosztolányi az első nemzedék tagja.' },
            { date: '1910', text: '*A szegény kisgyermek panaszai*.' },
            {
              date: '1922–1926',
              text: 'A nagy regények ideje: *Nero, a véres költő*, *Pacsirta*, *Aranysárkány*, *Édes Anna*.',
            },
            { date: '1933', text: '*Esti Kornél*.' },
            { date: '1935', text: '*Számadás*, a késői költészet összefoglalása.' },
            { date: '1936', text: 'Budapesten halt meg.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Szabadka és Budapest' },
        {
          kind: 'text',
          text: 'Kosztolányi **Szabadkán** született, egy tanárcsalád gyermekeként. A vidéki kisváros, a polgári otthon és a gyermekkor emlékei egész életművén végigvonulnak: ebből nőtt ki az első nagy ciklusa, *A szegény kisgyermek panaszai*. Egyetemi tanulmányait Budapesten kezdte, de hamar az újságírásba és az irodalomba sodródott; a fővárosi irodalmi élet szereplőjeként a **Nyugat** köréhez tartozott.',
        },
        { kind: 'heading', text: 'A Nyugat és a nemzedék' },
        {
          kind: 'text',
          text: 'A **Nyugat** 1908-ban indult, és a modern magyar irodalom fóruma lett. Az **első nemzedék** legfontosabb alkotói: **Ady Endre**, **Babits Mihály**, **Móricz Zsigmond**, **Kosztolányi Dezső**, **Tóth Árpád**, **Juhász Gyula** és **Karinthy Frigyes**. Kosztolányi a lap egyik legtermékenyebb szerzője volt. A nemzedék közös programja: európai szintű, modern magyar irodalom, a művészet önállósága és a világirodalmi tájékozottság.',
        },
        { kind: 'heading', text: 'Három nagy korszak' },
        {
          kind: 'compare',
          title: 'Kosztolányi pályájának szakaszai',
          columns: ['Szakasz', 'Jellemző művek és témák'],
          rows: [
            {
              label: 'Kezdetek (1900-as évek)',
              cells: [
                'hangulatlíra, formai tökéletesség',
                '*Négy fal között* (1907); a fiatal költő a szimbolista-impresszionista hangot keresi',
              ],
            },
            {
              label: 'Gyermekkor és érett líra (1910-es évek)',
              cells: [
                'a gyermek nézőpontja',
                '*A szegény kisgyermek panaszai* (1910): félelem, magány, a halál első élménye',
              ],
            },
            {
              label: 'A nagy próza (1920-as évek)',
              cells: [
                'regény és novella',
                '*Pacsirta*, *Aranysárkány*, *Édes Anna*; a hétköznapi emberi kapcsolatok lélektana',
              ],
            },
            {
              label: 'Késői szakasz (1930-as évek)',
              cells: [
                'létösszegzés',
                '*Esti Kornél* (1933), *Számadás* (1935): *Hajnali részegség*, *Halotti beszéd*',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **kötetek** emelt szinten is segítenek eligazodni: *Négy fal között* (1907), *A szegény kisgyermek panaszai* (1910), *Kenyér és bor* (1920), *A bús férfi panaszai* (1924), *Meztelenül* (1928), *Számadás* (1935). A költői életmű íve a **gyermeki nézőponttól** a **kései létösszegzésig** halad. Kosztolányi a prózában és a költészetben egyaránt visszatér ugyanazokhoz a motívumokhoz: **halál**, **mulandóság**, **gyermekkor**, **hétköznapi élet**, az **én és a világ** viszonya.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **szellemi kötődések**: az impresszionizmus (a pillanatnyi hangulat és benyomás rögzítése), a szimbolizmus, az európai modern irodalom (a francia és az angol költészet fordítóként is ismerte). Fontos a **regionális kötődés** is: a délvidéki Szabadka a gyermekkor és az emlékezés tere, Budapest a pálya és a Nyugat világa. Ez a vajdasági kötődés a határon túli (délvidéki) magyar irodalomnak is fontos hivatkozási pont.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: az életmű egy-két művének bemutatása (például egy vers és egy prózai mű), a kiemelt szempont szerint (téma, műfaj, motívum, stílus).',
            'Irodalmi feladatlap: korstílus, műfaj, műismeret, a szerzőhöz kapcsolódó művek párosítása.',
            'Műértelmező szövegalkotás (500–800 szó): Kosztolányi-vers vagy prózarészlet értelmezése adott szempontból. A szerző ismerete nem feltétlenül elvárás, de a műelemzést segíti.',
            'Emelt szinten: a pályaszakaszok, a Nyugat-nemzedék és a szellemi kötődések.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a költői és a prózai művek időrendjét: *A szegény kisgyermek panaszai* (1910) a korai, a *Számadás* (1935) a késői líra; az *Édes Anna* (1926) a nagy regényszakaszé, az *Esti Kornél* (1933) a késői prózáé.',
        },
        {
          kind: 'tip',
          text: 'A műelemzés menete Kosztolányi-verseknél: **1.** cím, kötet, keletkezés, téma; **2.** a beszélő és a helyzet; **3.** szerkezet és gondolatmenet; **4.** költői eszközök, hangulat; **5.** hely az életműben; **6.** saját megállapítás. Prózánál: téma, cselekmény, szereplők, nézőpont, a mű üzenete.',
        },
      ],
      topicMatch: ['kosztolányi', 'nyugat'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik városban született Kosztolányi Dezső?',
          options: ['Szeged', 'Szabadka', 'Kiskőrös', 'Debrecen'],
          answer: 1,
          explanation:
            'Kosztolányi Szabadkán született (ma Szerbia). A délvidéki kisváros a gyermekkor-versek és a későbbi emlékezés tere.',
        },
        {
          question: 'Melyik folyóirat körül alakult ki a modern magyar irodalom első nemzedéke?',
          options: ['Pesti Divatlap', 'Athenaeum', 'Nyugat', 'Kisfaludy Társaság Évlapjai'],
          answer: 2,
          explanation:
            'A Nyugat 1908-ban indult; Ady, Babits, Móricz, Kosztolányi és mások köréje szerveződtek.',
        },
        {
          question: 'Melyik kötet Kosztolányi gyermekkori élményeit idézi?',
          options: ['Számadás', 'A szegény kisgyermek panaszai', 'Esti Kornél', 'Édes Anna'],
          answer: 1,
          explanation:
            '*A szegény kisgyermek panaszai* (1910) a gyermek nézőpontját szólaltatja meg. Az *Esti Kornél* és az *Édes Anna* prózai mű, a *Számadás* késői verseskötet.',
        },
        {
          question: 'Melyik két műve született a késői, 1930-as években?',
          options: [
            'Négy fal között és Pacsirta',
            'Esti Kornél és Számadás',
            'Édes Anna és Aranysárkány',
            'Nero, a véres költő és Kenyér és bor',
          ],
          answer: 1,
          explanation:
            'Az *Esti Kornél* 1933-ban, a *Számadás* 1935-ben jelent meg; a többi mű a korai vagy a húszas évek szakaszához tartozik.',
        },
        {
          question:
            'Milyen irányzat hatása érződik Kosztolányi költészetén a pillanatnyi hangulatok rögzítésében?',
          options: ['Klasszicizmus', 'Realizmus', 'Impresszionizmus', 'Barokk'],
          answer: 2,
          explanation:
            'Az impresszionizmus a pillanatnyi benyomást és hangulatot rögzíti. Kosztolányinál ez a gyermek- és hangulatversekben, a késői költészetben is felismerhető.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Kosztolányi Dezső', url: wiki('Kosztolányi Dezső') },
        { label: 'Wikipédia: Nyugat (folyóirat)', url: wiki('Nyugat folyóirat') },
        { label: 'Wikipédia: Szabadka', url: wiki('Szabadka') },
      ],
    },
    {
      id: 'kosztolanyi-szegeny-kisgyermek-panaszai',
      subject: 'magyar',
      unitId: 'kosztolanyi',
      title: 'A szegény kisgyermek panaszai',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai alkotás bemutatása, értelmezése (téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); műrészletek értelmezése; kapcsolatok a művek között.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; a pályaszakasz jellemző kérdésfeltevései; a mű helye az életműben.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '*A szegény kisgyermek panaszai* (1910) **versciklus** (kötet): a **felnőtt költő** a **gyermek nézőpontjából** idézi fel gyermekkorát.',
            'Témái: a **félelem**, a **magány**, a **kiszolgáltatottság**, a **halál első élménye**, a vidéki kisváros és a család világa.',
            'A hang **kettős**: a gyermek szemével látunk, de a felnőtt költő tudatos nyelvén. Ez adja a költemények feszültségét és mélységét.',
            'Stílus: **impresszionista** képek, hangulatok; egyszerű, dalszerű forma.',
            'A ciklus a magyar **gyermekkor-líra** egyik csúcsa és Kosztolányi korai költészetének fő műve.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mi a ciklus témája?' },
        {
          kind: 'text',
          text: 'A kötet verseit a **gyermek** látásmódja szervezi egységbe. Nem idillt kapunk: a gyermek világa tele van **félelemmel**, sötétséggel, a felnőttek értetlenségével és a **halál** előérzetével. A kisgyermek nem érti, hogy miért kell szenvednie, a világban elveszettnek érzi magát. Ez a **kiszolgáltatottság** a kötet alapélménye.',
        },
        {
          kind: 'text',
          text: 'A beszélő tehát gyermeknek mutatkozik, de a költő felnőtt: **emlékezik**. A gyermekkor nem egyszerűen megidézett múlt, hanem olyan élmény, amelyet a felnőtt költő költői eszközökkel újraalkot. A **gyermeki naivitás** és a **felnőtt tudatosság** kettőssége a ciklus értelmezésének kulcsa.',
        },
        { kind: 'heading', text: 'Motívumok és eszközök' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Gyermek-nézőpont',
              text: 'A világ kicsi, ismerős tárgyakon, szobákon, hangokon keresztül jelenik meg; a nagy kérdések (halál, magány) a gyermek léptékén szólalnak meg.',
            },
            {
              term: 'Félelem és halál',
              text: 'A gyermek életében a halál első élményei: a halál még titok, de már félelmetes, és az élet törékenységére utal.',
            },
            {
              term: 'Család, otthon',
              text: 'A szülők, a lakás, a kisváros a biztonság terei, de a gyermek mégis egyedül marad bennük.',
            },
            {
              term: 'Impresszionizmus',
              text: 'Pillanatnyi benyomások, színek, fények, hangulatok: a vers hangulatot rögzít, és nem történetet mesél.',
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Gyermeki és felnőtt szólam a ciklusban',
          columns: ['Gyermeki szólam', 'Felnőtt, költői tudatosság'],
          rows: [
            {
              label: 'Látásmód',
              cells: ['közvetlen, naiv, érzelmes', 'visszatekintő, tudatos, szerkesztett'],
            },
            {
              label: 'Nyelv',
              cells: ['egyszerű szavak, dalszerűség', 'pontos képek, gondosan megformált vers'],
            },
            {
              label: 'Hangulat',
              cells: ['félelem, magány, panasz', 'szomorú szépség, az elmúlás tudata'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a ciklust a **pályaszakaszba** is be kell tudni helyezned: Kosztolányi korai költészetének csúcsa, amely a gyermek-motívumot a magyar líra egyik fontos témájává emelte. A **gyermek** és a **halál** együtt szerepelnek: a gyermeki félelem már a későbbi halálélmény előképe, és ez a motívum a késői *Halotti beszéd* és *Hajnali részegség* felé mutat. Ezt a **motivikus összefüggést** a vizsgán érdemes megnevezned.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: a gyermekkor mint téma Kosztolányi költészetében, esetleg összekötve más szerző gyermekkor-verseivel.',
            'Műértelmezés: a beszélő helyzete (gyermek és felnőtt), hangulat, képek.',
            'Kapcsolat a későbbi művekkel: gyermek és halál a késői versekben.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne mondd a beszélőt egyszerűen „gyereknek”: a mű felnőtt költő alkotása, aki **gyermeki hangot** vesz fel. Ez a kettősség a lényeg.',
        },
        {
          kind: 'example',
          title: 'Tételvázlat: a gyermek-nézőpont jelentősége',
          problem:
            'Mutasd be, hogyan jelenik meg a gyermekkor Kosztolányi *A szegény kisgyermek panaszai* című ciklusában!',
          solution:
            '**1.** Bevezetés: a ciklus (1910) a korai költészet fő műve, a gyermek hangján szól. **2.** Témák: félelem, magány, halál, otthon. **3.** A hang kettőssége: gyermeki szemlélet, felnőtt költői tudatosság. **4.** Eszközök: impresszionista képek, dalszerűség. **5.** Hely az életműben: a gyermek-motívum a későbbi halál- és létversek előképe. **6.** Zárás: miért maradandó a gyermekkor élménye.',
        },
      ],
      topicMatch: ['kosztolányi'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Kinek a nézőpontjából szólal meg *A szegény kisgyermek panaszai*?',
          options: ['Egy idős bölcs', 'Egy katona', 'Egy gyermek', 'Egy tanár'],
          answer: 2,
          explanation:
            'A ciklus a gyermek nézőpontját veszi fel, de a költő felnőtt, aki emlékezve alkotja újra gyermekkorát.',
        },
        {
          question: 'Melyik NEM jellemző témája a kötetnek?',
          options: [
            'Félelem',
            'Magány',
            'A halál első élménye',
            'A forradalmi hősiesség dicsőítése',
          ],
          answer: 3,
          explanation:
            'A forradalmi hősiesség nem a kötet témája. A ciklus a gyermeki lélek félelmeiről, magányáról és a halálélményről szól.',
        },
        {
          question: 'Mi a ciklus értelmezésének egyik kulcsa?',
          options: [
            'A gyermeki és a felnőtt szólam kettőssége',
            'A tájleírás',
            'A történelmi események felidézése',
            'A hazafias pátosz',
          ],
          answer: 0,
          explanation:
            'A gyermek szemével látunk, de a felnőtt költő tudatos nyelvén; ez a kettősség adja a feszültséget.',
        },
        {
          question:
            'Melyik késői vers motívumai mutatnak vissza a gyermekkor-ciklus halálélményére?',
          options: ['Nemzeti dal', 'Halotti beszéd', 'Szeptember végén', 'Himnusz'],
          answer: 1,
          explanation:
            'A *Halotti beszéd* (a *Számadás* verse) a halállal néz szembe, ahogy a gyermek-ciklus is; az emelt szint ezt motivikus összefüggésként várja.',
          emelt: true,
        },
      ],
      sources: [
        {
          label: 'Wikipédia: A szegény kisgyermek panaszai',
          url: wiki('A szegény kisgyermek panaszai'),
        },
        { label: 'Wikipédia: Kosztolányi Dezső', url: wiki('Kosztolányi Dezső') },
      ],
    },
    {
      id: 'kosztolanyi-keso-lirika',
      subject: 'magyar',
      unitId: 'kosztolanyi',
      title: 'A késői líra: Hajnali részegség, Halotti beszéd',
      level: 'kozep',
      requirement: {
        kozep:
          'Lírai alkotás bemutatása, értelmezése (téma, műfaj, kompozíció, motívumok, jelentésrétegek, világlátás); memoriterek; műrészletek értelmezése.',
        emelt:
          'A pályaszakaszokat jellemző témák, kérdésfeltevések; a művekben felvetett gondolati, filozófiai, esztétikai kérdések; motivikus összefüggések a művek között.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A *Hajnali részegség* és a *Halotti beszéd* a késői kötet, a *Számadás* (1935) verse: **létösszegző**, filozofikus költemények az 1930-as évekből.',
            '*Hajnali részegség*: egy álmatlan hajnal részegsége; a költő a csillagos ég és az ébredő világ látványában a **létezés csodáját** ünnepli.',
            '*Halotti beszéd*: a középkori nyelvemlék (*Halotti beszéd és könyörgés*) műfaját idézve **egy hétköznapi ember halálát** siratja, és az **egyén megismételhetetlenségét** hirdeti.',
            'Közös bennük: a **halál tudata**, a **mulandóság**, és mégis az **élet iránti rajongás**.',
            'Formájuk szabadabb, a hangnemük köznapi, mégis méltóságteljes.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Számadás: miért késői?' },
        {
          kind: 'text',
          text: 'A *Számadás* címe maga is összegzést jelent: a költő **számot vet** az élettel. A halál közelségének tudata a késői költészet alapélménye. Kosztolányi azonban nem tragikusan, hanem **az élet szeretetével** néz szembe a mulandósággal: a lét értéke a halál tudatában válik igazán láthatóvá.',
        },
        { kind: 'heading', text: 'Hajnali részegség' },
        {
          kind: 'text',
          text: 'A vers helyzete: egy **hajnal**, amikor a beszélő mámoros, ébren, a világ még nem ébredt fel. Ebben a különleges, éjszaka és nappal közötti állapotban a költő számára a világ **ünnepi** színben jelenik meg. A részegség nemcsak alkoholos mámor, hanem **létrészegség**: a lét, az élet csodájának felismerése. A vers a létezés örömét hirdeti, de a mulandóság tudatával.',
        },
        {
          kind: 'text',
          text: '**Kompozíció**: a vers egy gondolatmenetet követ, a mámoros szemlélődéstől az élet ünnepéig. **Motívumok**: hajnal, ég, csillagok, részegség, ébredés, élet és halál. **Hangnem**: lelkes, költői, de mégis köznapi nyelvű.',
        },
        { kind: 'heading', text: 'Halotti beszéd' },
        {
          kind: 'text',
          text: 'A cím a **magyar nyelv első összefüggő emlékére** utal, a *Halotti beszéd és könyörgés*re (a 12. század végéről). A vers ennek **szónoki hangját** idézi (megszólítás a hallgatósághoz), de a tartalom modern: nem az egyetemes „por és hamu” gondolata áll a középpontban, hanem az, hogy **ez az ember** meghalt, és **soha többé nem lesz ilyen**. A vers ezt **az egyén egyszeri, megismételhetetlen voltával** támasztja alá.',
        },
        {
          kind: 'text',
          text: 'Ez a vers **filozófiai ars poetica** is lehet: a költő az emberi élet **értékét** az egyediségben látja, nem valamilyen magasabb rendben. A hétköznapi ember elsiratása ezért nem kisszerű, hanem a költő humanizmusának tanúsága.',
        },
        {
          kind: 'compare',
          title: 'A két vers összevetése',
          columns: ['Hajnali részegség', 'Halotti beszéd'],
          rows: [
            {
              label: 'Helyzet',
              cells: ['hajnali szemlélődés', 'halotti beszéd, a temetés szónoka'],
            },
            { label: 'Alaphang', cells: ['a lét ünnepe, mámor', 'gyász és az egyén méltósága'] },
            {
              label: 'Közös',
              cells: ['a halál tudatában az élet értéke', 'a halál tudatában az élet értéke'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a verseket a **gondolati-filozófiai** kérdések felől is vizsgáld: mi az élet értelme, mit jelent az egyén egyszerisége, hogyan viszonyul a költő a halálhoz. A késői Kosztolányi **világlátása**: a lét megismerhetetlen, de szeretni lehet; az élet értéke a pillanatban és az egyénben van. A *Halotti beszéd* **műfaji játéka** (nyelvemlék idézése) az **intertextualitás** egyik példája.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Műértelmezés bázisszöveggel: a *Halotti beszéd* vagy a *Hajnali részegség* értelmezése adott szempontból (téma, hangnem, kompozíció, motívumok).',
            'Összehasonlítás: élet és halál Kosztolányinál és más költőnél (például Babitsnál, József Attilánál).',
            'Szóbeli tétel: a késői líra jellemzői, a *Számadás* helye az életműben.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne keverd össze a költeményt (*Halotti beszéd*, Kosztolányi, 20. század) a nyelvemlékkel (*Halotti beszéd és könyörgés*, 12. század végi latin–magyar szöveg). A cím az intertextualitás eszköze, de két külön mű.',
        },
        {
          kind: 'example',
          title: 'Értelmezési szempontok: Hajnali részegség',
          problem: 'Milyen szempontok szerint elemzed a *Hajnali részegség* című verset?',
          solution:
            '**1.** Cím és helyzet: hajnal, részegség (mámor és létmámor). **2.** Téma: az élet csodája a mulandóság tudatával. **3.** Szerkezet: a szemlélődéstől az ünnepig. **4.** Motívumok: hajnal, ég, csillagok, ébredés. **5.** Hangnem: lelkes, mégis köznapi. **6.** Hely az életműben: a késői összegzés, a *Halotti beszéd* párja.',
        },
        {
          kind: 'tip',
          text: 'Ha idézel, csak rövid részletet, pontosan idézz; ha nem vagy biztos a szövegben, inkább utalj a képre és a gondolatra. A vizsgán a szöveg előtted lesz, ha bázisszövegű a feladat.',
        },
      ],
      topicMatch: ['kosztolányi'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik kötetben szerepel a *Hajnali részegség* és a *Halotti beszéd*?',
          options: ['A szegény kisgyermek panaszai', 'Négy fal között', 'Számadás', 'Esti Kornél'],
          answer: 2,
          explanation:
            'A két késői vers a *Számadás* (1935) darabja. Ez Kosztolányi összegző verseskötete.',
        },
        {
          question: 'Melyik középkori szövegre utal a *Halotti beszéd* címe?',
          options: [
            'Ómagyar Mária-siralom',
            'Halotti beszéd és könyörgés',
            'Gesta Hungarorum',
            'Szent István intelmei',
          ],
          answer: 1,
          explanation:
            'A *Halotti beszéd és könyörgés* a legrégebbi összefüggő magyar nyelvemlék. Kosztolányi a szónoki hangot idézi.',
        },
        {
          question: 'Mit hirdet a *Halotti beszéd*?',
          options: [
            'A hazáért vállalt halál dicsőségét',
            'Az egyén megismételhetetlenségét',
            'A halál utáni üdvösséget',
            'A tudomány győzelmét a halál fölött',
          ],
          answer: 1,
          explanation:
            'A vers a hétköznapi ember halálát siratja, és azt hangsúlyozza, hogy az egyén egyszeri és megismételhetetlen.',
        },
        {
          question: 'Mit jelent a *Hajnali részegség* „részegsége”?',
          options: [
            'Csupán az alkoholos mámort',
            'A lét, az élet csodája fölötti mámort',
            'A politikai lelkesedést',
            'A szerelmi vágyat',
          ],
          answer: 1,
          explanation: 'A részegség jelképes: a költő az élet, a létezés csodájától részeg.',
        },
        {
          question: 'Mi a *Halotti beszéd* címének irodalmi funkciója?',
          options: [
            'Az intertextualitás eszköze',
            'Csak díszítés, nincs jelentése',
            'A költő önéletrajzi utalása',
            'A vers műfaji besorolása: dal',
          ],
          answer: 0,
          explanation:
            'A cím egy régi szöveg műfaját idézi fel, és ez a szövegközi kapcsolat (intertextualitás) gazdagítja az értelmezést.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hajnali részegség', url: wiki('Hajnali részegség Kosztolányi') },
        {
          label: 'Wikipédia: Halotti beszéd (Kosztolányi)',
          url: wiki('Halotti beszéd Kosztolányi Dezső'),
        },
        { label: 'Wikipédia: Számadás (Kosztolányi)', url: wiki('Számadás Kosztolányi Dezső') },
      ],
    },
    {
      id: 'kosztolanyi-edes-anna',
      subject: 'magyar',
      unitId: 'kosztolanyi',
      title: 'Édes Anna',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása, értelmezése (téma, műfaj, kompozíció, szereplők, jelentésrétegek, világlátás); műrészletek értelmezése; a művekben felvetett etikai, történeti, lélektani, társadalmi kérdések.',
        emelt:
          'A művekben felvetett gondolati, filozófiai, esztétikai kérdések; hatás, fogadtatás; különféle kritikák, interpretációk.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az *Édes Anna* (1926) **lélektani-társadalmi regény**; a háttere az **1919-es Tanácsköztársaság bukása** utáni, ellenforradalmi hangulatú Budapest.',
            'Főszereplő **Édes Anna**, a szorgalmas, szinte hibátlan **cseléd**, aki a **Vizy család** házába kerül, és végül megöli gazdáit.',
            'Fontos szereplők: **Vizy Kornél** (miniszteri tanácsos), **Vizyné**, **Moviszter doktor** (erkölcsi hang), **Jancsi** (Anna szeretője), **Ficsor** (házmester).',
            'A regény kérdése: **mi vezet az emberből a gyilkosságig?** A válasz lélektani, társadalmi és erkölcsi: a **megalázás**, az **emberi kapcsolat hiánya**.',
            'Nem krimi, hanem **lélektani regény**: a cselekmény végét ismerjük, a lényeg az **okok** feltárása.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Történelmi háttér' },
        {
          kind: 'text',
          text: 'A regény a **Tanácsköztársaság (1919)** bukása utáni hónapokban játszódik. A társadalom a közelmúlt félelmeitől, a **bosszú** és a „rend” vágyától feszült. Vizy Kornél, a miniszteri tanácsos és felesége a **régi rend** visszatérését éli meg győzelemként. Ebben a közegben kerül hozzájuk a cselédlány.',
        },
        { kind: 'heading', text: 'Anna és a Vizy család' },
        {
          kind: 'text',
          text: 'Anna **tökéletes cseléd**: szorgalmas, csendes, mindenre kész, kívánság nélküli. A család azonban nem látja meg az embert benne. **Vizyné**, aki a cselédeivel szemben nagyon követelő és hiú, a saját prestízsének tárgyát látja Annában; **Vizy** inkább közömbös. Anna életében a **szerelem** (Jancsi) rövid, csalódással végződő epizód. A lélektani fordulat: Anna **belső fájdalma** felhalmozódik, és végül kitör.',
        },
        {
          kind: 'text',
          text: 'A tett után a regény nem a nyomozásra, hanem a **megértésre** figyel: a környezet nem érti meg igazán, miért tette, és a gyilkosság **értelmezése** maga a regény fő feladata.',
        },
        { kind: 'heading', text: 'Szereplők és kompozíció' },
        {
          kind: 'people',
          items: [
            {
              name: 'Édes Anna',
              text: 'A cseléd; a regény főszereplője és áldozat-tettese. A kívülről tökéletesnek látszó viselkedés mögött elfojtott érzések.',
            },
            {
              name: 'Vizy Kornél',
              text: 'Miniszteri tanácsos, a „rend” embere; a cselédjét nem látja meg emberként.',
            },
            {
              name: 'Vizyné',
              text: 'A feleség; a státusz és a követelés embere, Anna hierarchikus „gazdája”.',
            },
            {
              name: 'Moviszter doktor',
              text: 'Az orvos; a regény erkölcsi hangja, aki az emberi felelősséget és a szenvedést érti meg.',
            },
            { name: 'Jancsi', text: 'Anna szeretője; a rövid szerelem és a csalódás alakja.' },
            { name: 'Ficsor', text: 'A házmester; ő közvetíti Annát a Vizy-házhoz.' },
          ],
        },
        {
          kind: 'text',
          text: '**Kompozíció**: a regény a cselekmény egyes szakaszait követi (érkezés, beilleszkedés, a szerelmi epizód, a tett, a következmények), és közben a **környezet** (a Vizy-házaspár és a társadalom) rajzát is megadja. **Nézőpont**: a mindentudó elbeszélő pontosan látja a szereplők belső világát, mégis tartózkodó, tárgyilagos marad. Ez a **távolságtartás** a regény erejének egyik forrása.',
        },
        { kind: 'heading', text: 'Értelmezési rétegek' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Lélektani',
              text: 'Az elfojtott érzések, a kapcsolat hiánya és a felhalmozódó feszültség robbanása.',
            },
            {
              term: 'Társadalmi',
              text: 'A gazdák és cselédek viszonya, a hierarchia, a megalázás; az „úri” társadalom vakfoltja.',
            },
            {
              term: 'Történeti',
              text: 'A Tanácsköztársaság utáni ellenforradalmi légkör, a rend- és bosszúvágy.',
            },
            {
              term: 'Erkölcsi',
              text: 'Ki a felelős? Ez a kérdés Moviszter figurájában testesül meg.',
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten az *Édes Anna* **fogadtatásához** és interpretációihoz is tájékozottnak kell lenned: a regényt olvasták társadalmi-politikai kritikaként, lélektani tanulmányként és egzisztenciális-erkölcsi parabolaként is. A művészi hatás azzal függ össze, hogy az író **nem ítélkezik**, hanem a **megértésre** törekszik. A regényből készült filmadaptáció is ismert (Fábri Zoltán, 1958), ez a mű **utóéletének** egyik példája.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: az *Édes Anna* bemutatása (téma, szereplők, szerkezet, értelmezés) vagy összevetés más regénnyel (például a cselédsors, a társadalmi igazságtalanság témájában).',
            'Irodalmi feladatlap: szereplők azonosítása, műfaj (lélektani regény), a történelmi háttér.',
            'Műrészlet értelmezése: a regény egy részlete bázisszövegként, adott szempontból.',
            'Emelt szinten: különböző olvasatok (társadalmi, lélektani, erkölcsi), fogadtatás.',
          ],
        },
        {
          kind: 'warning',
          text: 'Ne csak a cselekményt mondd el. Az értékelés a **problémaközpontú** értelmezést várja: miért ölt Anna, milyen szerepe van a társadalmi és lélektani oknak, mit mond a regény az emberi kapcsolatról. A „bűnös-e Anna?” kérdésre a regény nem ad egyszerű választ.',
        },
        {
          kind: 'example',
          title: 'Tételvázlat: miért öl Anna?',
          problem: 'Mutasd be az *Édes Anna* központi kérdését és a lehetséges magyarázatokat!',
          solution:
            '**1.** Bevezetés: a regény (1926), lélektani regény, 1919 utáni háttér. **2.** Szereplők: Anna, Vizyék, Moviszter, Jancsi. **3.** Anna „tökéletessége” mint álarc. **4.** Okok: megalázás, a kapcsolat hiánya, az elfojtott érzések. **5.** Társadalmi és erkölcsi réteg: kinek a felelőssége? **6.** Az elbeszélő tárgyilagossága. **7.** Zárás: a regény súlya, hogy megértésre törekszik.',
        },
      ],
      topicMatch: ['kosztolányi'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik évben jelent meg az *Édes Anna*?',
          options: ['1910', '1920', '1933', '1926'],
          answer: 3,
          explanation: 'Az *Édes Anna* 1926-os regény, Kosztolányi nagy prózai korszakának csúcsa.',
        },
        {
          question: 'Melyik műfajba sorolható leginkább az *Édes Anna*?',
          options: ['Történelmi regény', 'Lélektani regény', 'Ifjúsági regény', 'Tézisregény'],
          answer: 1,
          explanation:
            'A regény lélektani-társadalmi regény: a gyilkosság okait, Anna belső világát és a környezet szerepét tárja fel.',
        },
        {
          question: 'Melyik szereplő a regény erkölcsi hangja?',
          options: ['Vizy Kornél', 'Ficsor', 'Moviszter doktor', 'Jancsi'],
          answer: 2,
          explanation:
            'Moviszter doktor az az alak, aki az emberi felelősség kérdését érti és fogalmazza meg.',
        },
        {
          question: 'Milyen történelmi események utáni időszakban játszódik a regény?',
          options: [
            'A kiegyezés után',
            'A Tanácsköztársaság bukása után',
            'A második világháború után',
            'Az 1848–49-es szabadságharc után',
          ],
          answer: 1,
          explanation:
            'A regény az 1919-es Tanácsköztársaság bukása utáni ellenforradalmi légkörben játszódik.',
        },
        {
          question: 'Melyik filmadaptáció készült az *Édes Anna* regényből?',
          options: [
            'Fábri Zoltán rendezésében',
            'Jancsó Miklós rendezésében',
            'Szabó István rendezésében',
            'Makk Károly rendezésében',
          ],
          answer: 0,
          explanation: 'Az *Édes Anna* filmváltozata Fábri Zoltán rendezésében 1958-ban készült.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Édes Anna', url: wiki('Édes Anna regény Kosztolányi') },
        { label: 'Wikipédia: Kosztolányi Dezső', url: wiki('Kosztolányi Dezső') },
      ],
    },
    {
      id: 'kosztolanyi-proza-esti-kornel-pacsirta',
      subject: 'magyar',
      unitId: 'kosztolanyi',
      title: 'A próza: Esti Kornél és Pacsirta',
      level: 'kozep',
      requirement: {
        kozep:
          'Egy-három epikai alkotás bemutatása, értelmezése (téma, műfaj, kompozíció, jellemző motívumok, jelentésrétegek, világlátás); műrészletek; kapcsolatok a művek között.',
        emelt:
          'Kötetek, ciklusok, témák, motívumok; világirodalmi párhuzamok; a művekben felvetett gondolati, filozófiai, esztétikai vonatkozások.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '*Esti Kornél* (1933): **novellaciklus**, amelynek főhőse **Esti Kornél**, Kosztolányi **alteregója**. A kalandozó, szabad szellem szemével nézi a világot.',
            '*Pacsirta* (1924): **kisregény/regény** egy vidéki kisváros (Sárszeg) családjáról: az idősödő házaspár és a **csúnya lányuk**, **Pacsirta** története.',
            'Közös a két műben: a **hétköznapi élet** mélyén rejlő **lélektani igazságok**, finom irónia és humor.',
            'Kosztolányi **novellái** (például *A kulcs*, *Fürdés*) szintén a hétköznapi helyzet mögötti lélektani mélységet tárják fel.',
            'A próza fő jellemzői: **tárgyilagos elbeszélő**, finom **ironikus** hang, a **kisember** sorsa és lelke.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Esti Kornél' },
        {
          kind: 'text',
          text: 'Az *Esti Kornél* **novellafüzér**: önálló történetek fűződnek össze egy visszatérő főhős köré. **Esti Kornél** Kosztolányi **alteregója**: a „rendes” polgári élet mellett egy szabad, kalandozó, mindenre nyitott másik én. A novellák a világot sokféle nézőpontból mutatják be, és gyakran játszanak az **én kettősségével**.',
        },
        {
          kind: 'text',
          text: 'A mű lényege a **világlátás**: a hétköznapi helyzetek mögött mély igazságok rejlenek; a világ sokszínű, megismerhetetlen, de szeretni lehet. A **humor** és az **irónia** szerepe nagy: a komoly kérdéseket könnyed hangon veti fel.',
        },
        { kind: 'heading', text: 'Pacsirta' },
        {
          kind: 'text',
          text: 'A *Pacsirta* története egyetlen hét eseménye: a szülők (**Vajkay Ákos** és felesége) egy hétre elküldik csúnya lányukat, Pacsirtát, rokonokhoz. A lány távollétében a szülők hosszú idő után **szabadnak** érzik magukat: kimozdulnak, élnek. A lány hazatérésekor kiderül, mennyire egymásra vannak utalva. A történet a **szülő–gyermek viszony** finom lélektani rajza, tragikus-ironikus hangon.',
        },
        {
          kind: 'compare',
          title: 'Két prózai mű összevetése',
          columns: ['Esti Kornél', 'Pacsirta'],
          rows: [
            { label: 'Műfaj', cells: ['novellaciklus', 'lélektani regény'] },
            { label: 'Hős', cells: ['alteregó, kalandozó', 'idős szülők és a lányuk'] },
            {
              label: 'Alaphang',
              cells: ['játékos, ironikus, filozofikus', 'finoman ironikus, melankolikus'],
            },
            {
              label: 'Közös',
              cells: ['a hétköznapi élet lélektana', 'a hétköznapi élet lélektana'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az *Esti Kornél* **alteregó**-szerkezete a szerzői én és a kitalált figura játéka; a prózában modern hangot hozott, mert az elbeszélő és a hős határai elmosódnak. A *Pacsirta* és az *Édes Anna* közös vonása, hogy a **kisember** lélektanán át a társadalom egészéről szól. A két próza **motívumai** (kapcsolat és magány, szabadság és kötöttség) a költészet témáival is összecsengenek.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Szóbeli tétel: Kosztolányi prózája (például *Esti Kornél*, *Pacsirta*, novella) és a lírája közti kapcsolat.',
            'Irodalmi feladatlap: alteregó, novellaciklus, lélektani regény fogalmai.',
            'Műértelmezés: novellarészlet elemzése (téma, nézőpont, szerkezet).',
          ],
        },
        {
          kind: 'warning',
          text: 'Esti Kornél **nem azonos** Kosztolányival: alteregó, a szerző játékos vetülete. A kitalált figura véleményét ne tekintsd az író közvetlen állításának.',
        },
        {
          kind: 'tip',
          text: 'Prózai mű bemutatásánál rendezd a gondolataidat: **téma**, **cselekmény**, **szereplők**, **nézőpont**, **hangnem**, **üzenet**. Kapcsold a verseihez: a halál, a mulandóság és a hétköznapi élet értéke Kosztolányi lírájában és prózájában is visszatér.',
        },
      ],
      topicMatch: ['kosztolányi'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Ki Esti Kornél?',
          options: [
            'Kosztolányi barátja',
            'Egy történelmi alak',
            'Kosztolányi alteregója',
            'Az *Édes Anna* orvosa',
          ],
          answer: 2,
          explanation: 'Esti Kornél a szerző alteregója, a novellaciklus visszatérő hőse.',
        },
        {
          question: 'Mi a *Pacsirta* főszereplőinek családi helyzete?',
          options: ['Árva gyermekek', 'Idős szülők és a lányuk', 'Fiatal házaspár', 'Testvérpár'],
          answer: 1,
          explanation: 'A *Pacsirta* az idős szülők és a csúnya lányuk történetét meséli el.',
        },
        {
          question: 'Melyik műfaj jellemzi az *Esti Kornél*t?',
          options: ['Verses epika', 'Novellaciklus', 'Dráma', 'Levélregény'],
          answer: 1,
          explanation: 'Az *Esti Kornél* önálló novellákból fűződő ciklus, közös főhőssel.',
        },
        {
          question: 'Melyik NEM Kosztolányi prózai műve?',
          options: ['Pacsirta', 'Aranysárkány', 'Édes Anna', 'Halotti beszéd'],
          answer: 3,
          explanation: 'A *Halotti beszéd* vers, a többi regény.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Esti Kornél', url: wiki('Esti Kornél Kosztolányi') },
        { label: 'Wikipédia: Pacsirta (regény)', url: wiki('Pacsirta regény Kosztolányi') },
      ],
    },
    {
      id: 'kosztolanyi-vilaglatas-nyelv-fogadtatas',
      subject: 'magyar',
      unitId: 'kosztolanyi',
      title: 'Világlátás, nyelvszemlélet, utóélet',
      level: 'emelt',
      requirement: {
        emelt:
          'A pályaképre ható irányzatok és szellemi kötődések, világirodalmi párhuzamok; a művek hatása, fogadtatása; a szerző utóélete, helye és hatása az irodalmi-kulturális hagyományban; gondolati, filozófiai, esztétikai vonatkozások; különféle kritikák, interpretációk.',
      },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Kosztolányi világlátása: a lét **megismerhetetlen**, az ember **egyedi** és halandó; mégis érdemes élni, és a pillanat, a hétköznap **értéket** hordoz.',
            'Szemléletére az **esztétikai** magatartás jellemző; az értelmezők ezt gyakran *homo aestheticus* néven emlegetik.',
            '**Nyelvszemlélet**: a nyelv az ember lelkének kifejezője; nyelvművelő esszéi (például *Édes anyanyelvünk*, 1929) és fordításai is fontosak.',
            '**Műfordítóként** a világirodalmat közvetítette (pl. *Modern költők*, 1913).',
            '**Utóélet**: a magyar prózai és lírai hagyomány egyik alapszerzője; művei színpadi és filmes adaptációkban is élnek.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Világlátás és filozófiai kérdések' },
        {
          kind: 'text',
          text: 'Kosztolányi műveiben visszatérő gondolat az **egyén egyszerisége** és a **halál** elkerülhetetlensége. Világlátása nem hirdet magasabb rendet; az élet értékét a **létezés tényében**, a pillanat szépségében és az egyes ember megismételhetetlenségében látja. A világ sokszínű és **megismerhetetlen**, ezért az irodalmi szemlélet inkább **megérteni** és **elfogadni** akar, mintsem ítélkezni.',
        },
        {
          kind: 'text',
          text: 'Ez az **esztétikai** szemlélet azt jelenti, hogy a költő a világot elsősorban szemlélőként, a szépség és a pillanat felől közelíti. A szakirodalom ezt gyakran a *homo aestheticus* fogalmával írja le, de a későbbi művekben (*Halotti beszéd*, *Édes Anna*) a **morális és emberi felelősség** kérdése is megjelenik.',
        },
        { kind: 'heading', text: 'Nyelv és műfordítás' },
        {
          kind: 'text',
          text: 'Kosztolányi a **nyelvet** az ember lelkének tükrének tekintette. Nyelvi tárgyú esszéi (például az *Édes anyanyelvünk*, 1929) a nyelvhasználat szépségét és helyességét vizsgálták. Fontos tevékenysége a **műfordítás**: a világirodalom költőit tolmácsolta magyarul, és ez a munka a költői nyelv csiszolásához is hozzájárult.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Homo aestheticus',
              text: 'Az „esztétikai ember” kifejezés: aki a világot elsősorban szépség és szemlélet felől éli meg. Kosztolányi szemléletének jellemzésére használják.',
            },
            { term: 'Alteregó', text: 'A szerző másik énje; az *Esti Kornél* központi eszköze.' },
            {
              term: 'Intertextualitás',
              text: 'Szövegek közötti kapcsolat; például a *Halotti beszéd* címe a nyelvemlékre utal.',
            },
          ],
        },
        { kind: 'heading', text: 'Fogadtatás és utóélet' },
        {
          kind: 'text',
          text: 'A kortársak Kosztolányit a **Nyugat** központi alakjai közé sorolták, bár a hozzá kötődő értelmezések változtak: volt, aki a **társadalmi érzékenység** oldaláról olvasta (*Édes Anna*), mások a **lélektani** vagy az **esztétikai** oldalt hangsúlyozták. Az *Édes Anna* filmes feldolgozása (Fábri Zoltán, 1958) is hozzájárult népszerűségéhez.',
        },
        {
          kind: 'compare',
          title: 'Három olvasat az életműről',
          columns: ['Olvasat', 'Mire figyel'],
          rows: [
            {
              label: 'Társadalmi',
              cells: ['osztály, hierarchia', 'az *Édes Anna* cseléd–úr viszonya'],
            },
            {
              label: 'Lélektani',
              cells: ['elfojtás, kapcsolat hiánya', 'Anna tette, a *Pacsirta* szülei'],
            },
            {
              label: 'Esztétikai-egzisztenciális',
              cells: ['szemlélet, halál, pillanat', 'a késői líra, *Esti Kornél*'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik emelt szinten',
          items: [
            'Az életmű összefoglaló jellemzése pályaszakaszokkal, szellemi kötődésekkel (impresszionizmus, szimbolizmus, a Nyugat-nemzedék).',
            'Gondolati, filozófiai kérdések: halál, egyén, a lét értelme a versekben és a prózában.',
            'Olvasatok összevetése, kritikák és interpretációk (társadalmi, lélektani, esztétikai).',
            'Motivikus összefüggések: gyermek, halál, hétköznapi élet a líra és a próza között.',
          ],
        },
        {
          kind: 'tip',
          text: 'Emelt szinten kapcsolj össze: egy kora (gyermekkor-vers), egy késői (*Halotti beszéd*) és egy prózai mű (*Édes Anna*) között a **halál**, az **egyén** és a **hétköznapi élet** motívuma mentén. Ez a motivikus összefüggés kimondott követelmény.',
        },
        {
          kind: 'warning',
          text: 'A fogalmakat (homo aestheticus, alteregó, intertextualitás) mindig **példával** támaszd alá. A puszta fogalomfelsorolás nem ér pontot.',
        },
      ],
      topicMatch: ['kosztolányi'],
      cards: { subject: 'magyar', era: 'modern' },
      quiz: [
        {
          question: 'Melyik Kosztolányi nyelvi tárgyú esszégyűjteményének a címe?',
          options: ['Számadás', 'Édes anyanyelvünk', 'Meztelenül', 'Négy fal között'],
          answer: 1,
          explanation: 'Az *Édes anyanyelvünk* (1929) nyelvművelő esszék gyűjteménye.',
        },
        {
          question: 'Mit jelent a *homo aestheticus* kifejezés az értelmezésekben?',
          options: [
            'A politikai ember',
            'A világot elsősorban esztétikai szemlélettel megközelítő ember',
            'A gazdasági ember',
            'A hívő ember',
          ],
          answer: 1,
          explanation:
            'A kifejezés „esztétikai embert” jelent: aki a világot a szépség és a szemlélet felől éli meg.',
        },
        {
          question: 'Melyik fogalom kapcsolódik az *Esti Kornél* központi alakjához?',
          options: ['Allegória', 'Alteregó', 'Himnusz', 'Eposz'],
          answer: 1,
          explanation: 'Esti Kornél a szerző alteregója; az én kettősségének játéka a mű alapja.',
        },
        {
          question:
            'Melyik motívum köti össze a *Halotti beszéd*et és *A szegény kisgyermek panaszai*t?',
          options: ['A hazaszeretet', 'A halál', 'A természet tavasza', 'A szerelem'],
          answer: 1,
          explanation:
            'Mindkettő a halál tudatával néz szembe: a gyermeki félelem a későbbi halálélmény előképe.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Kosztolányi Dezső', url: wiki('Kosztolányi Dezső') },
        { label: 'Wikipédia: Édes anyanyelvünk', url: wiki('Édes anyanyelvünk Kosztolányi') },
        { label: 'Wikipédia: Nyugat (folyóirat)', url: wiki('Nyugat folyóirat') },
      ],
    },
  ],
};

export default unit;
