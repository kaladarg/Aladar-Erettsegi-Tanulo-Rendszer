import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 2.1 (Az iszlám világ), 2.2 (Gazdaság, társadalom, állam) and 2.3 (Egyház és kultúra Európában). */
const unit: GuideUnit = {
  id: 'kozepkor-europa',
  subject: 'tortenelem',
  order: 15,
  title: 'A középkori Európa és az iszlám világ',
  requirementRef: '2.1 Az iszlám világ, 2.2 Gazdaság, társadalom, állam, 2.3 Egyház és kultúra',
  intro:
    'Hogyan működött a középkori társadalom? Mohamed és az arab hódítás, az uradalom és a jobbágyok, a hűbériség és a rendi monarchia, a város és a céhek, az egyház, a szerzetesek, a lovagok, az egyetemek, a román és gótikus templomok. A magyar vonatkozású témák (Árpád-kor, vegyesházi királyok) külön leckékben vannak.',
  requirementSource:
    'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (2. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'iszlám',
        'Korán',
        'kalifa',
        'uradalom',
        'majorság',
        'jobbágy',
        'robot',
        'földesúr',
        'kiváltság',
        'feudalizmus',
        'hűbériség',
        'rendi monarchia',
        'nemes',
        'király',
        'lovag',
        'céh',
        'polgár',
        'levantei kereskedelem',
        'Hanza',
        'katolikus',
        'ortodox',
        'pápa',
        'érsek',
        'cölibátus',
        'szerzetes',
        'kolostor',
        'bencés rend',
        'ferences rend',
        'eretnek',
        'inkvizíció',
        'keresztes hadjáratok',
        'szent',
        'kódex',
        'román stílus',
        'gótikus stílus',
        'reneszánsz',
      ],
      emelt: [
        'dzsihád',
        'despotizmus',
        'hűbérúr',
        'vazallus',
        'Magna Charta Libertatum',
        'primogenitúra',
        'káptalan',
        'kolduló rend',
        'skolasztika',
        'legenda',
        'pátriárka',
      ],
    },
    people: {
      kozep: [
        'Mohamed',
        'Nagy Károly',
        'Szent Benedek',
        'Assisi Szent Ferenc',
        'VII. Gergely',
        'Aquinói Szent Tamás',
        'Leonardo da Vinci',
        'Gutenberg',
      ],
      emelt: ['II. Mehmed', 'III. Ince', 'Michelangelo', 'Mediciek'],
    },
    dates: {
      kozep: ['622', '732', '800'],
      emelt: [],
    },
    places: {
      kozep: [
        'Mekka',
        'Poitiers',
        'Bizánci Birodalom',
        'Konstantinápoly',
        'Jeruzsálem',
        'Szentföld',
        'Német-római Birodalom',
        'Egyházi (Pápai) Állam',
        'Velence',
        'Firenze',
        'Anglia',
        'Franciaország',
        'levantei kereskedelmi hálózat',
        'Hanza kereskedelmi hálózat',
      ],
      emelt: ['Arab Birodalom', 'Konstantinápoly/Isztambul', 'Bologna', 'Oxford', 'Pécs', 'Óbuda'],
    },
  },
  pages: [
    {
      id: 'iszlam-mohamed-arab-hoditas',
      subject: 'tortenelem',
      unitId: 'kozepkor-europa',
      title: 'Az iszlám világ: Mohamed, a Korán és az arab hódítás',
      level: 'kozep',
      requirement: {
        kozep: 'Mohamed tanításai és a Korán; az arab hódítás és feltartóztatása Európában',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Mohamed** a 7. század elején az Arab-félszigeten, **Mekkában** lépett fel az **egy Isten (Allah)** hitével. Az iszlám jelentése: **önátadás, megadás** Istennek.',
            '**622**: Mohamed Mekkából Medinába költözött (**hidzsra**). Az iszlám időszámítás ettől az évtől számít.',
            'A muszlimok szent könyve a **Korán**, amely a hit szerint Allah Mohamednek kinyilatkoztatott szava.',
            'Mohamed halála (632) után az utódai, a **kalifák** vezették a közösséget, és gyors **hódításba** kezdtek: egy évszázad alatt Közép-Ázsiától **Spanyolországig** terjedt az **Arab Birodalom**.',
            '**732**: a **poitiers-i csatában** a frankok megállították az arab előrenyomulást Nyugat-Európában. Keleten **Bizánc** tartotta fel őket.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'iszlám',
              text: 'A 7. században született egyistenhitű vallás; hívei a muszlimok.',
            },
            {
              term: 'Korán',
              text: 'Az iszlám szent könyve; a hit szerint Allah szavait tartalmazza.',
            },
            {
              term: 'kalifa',
              text: 'Mohamed utódja, a muszlim közösség világi és vallási vezetője.',
            },
            {
              term: 'dzsihád',
              text: 'Arab szó: törekvés, erőfeszítés a hitért. Jelentheti a hit védelmét és terjesztését fegyverrel is.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az Arab-félsziget és Mohamed fellépése' },
        {
          kind: 'text',
          text: 'A 6–7. századi Arab-félszigeten **beduin** nomád törzsek éltek a sivatagban, a városokban (például Mekkában) kereskedők. A törzsek sok istent és szellemet tiszteltek. Mekka egyik szentélye a **Kába** volt, ide zarándokoltak a törzsek, ezért a város fontos kereskedelmi és vallási központ lett.',
        },
        {
          kind: 'text',
          text: '**Mohamed** (kb. 570–632) mekkai kereskedő volt. Hite szerint Allah angyala nyilatkoztatta ki neki az igazságot, és ő az utolsó **próféta**. Az egyistenhitet hirdette, ezért a mekkai kereskedő elit ellenezte (részben azért, mert a zarándokforgalom hozta bevételt féltették). **622-ben** Mohamed követőivel **Medinába** költözött. Ezt hívják **hidzsrának**, és az iszlám időszámítás kezdete. Medinában vallási és politikai vezetővé vált, később Mekkát is meghódította.',
        },
        { kind: 'heading', text: 'Mohamed tanításai és a Korán' },
        {
          kind: 'text',
          text: 'A **Korán** Mohamed kinyilatkoztatásait tartalmazza, amelyeket a halála után gyűjtöttek írásba. A hívő a Koránt Isten szavának tartja. Az iszlám tanítás szerint csak egy Isten van, **Allah**, Mohamed pedig a prófétája. Az iszlám tiszteli a korábbi prófétákat is (például Ábrahámot, Mózest és Jézust), de Mohamedet tekinti az utolsónak. A hívők kötelességeit az **iszlám öt pillére** foglalja össze:',
        },
        {
          kind: 'keypoints',
          items: [
            '**hitvallás**: „Nincs isten Allahon kívül, és Mohamed Allah prófétája.”',
            '**ima** naponta ötször, Mekka felé fordulva;',
            '**alamizsna** adása a szegényeknek;',
            '**böjt** a ramadán hónapban, napkeltétől napnyugtáig;',
            '**zarándoklat Mekkába**, ha a hívő megteheti, élete során legalább egyszer.',
          ],
        },
        {
          kind: 'text',
          text: 'A Korán és a hagyomány a muszlim közösség jogát és mindennapi életét is szabályozta (például az étkezést, a házasságot, az öröklést). Ezért az iszlám egyszerre vallás és társadalmi rend. Az iszlám tiltja a **bálványimádást**, ezért a mecsetekben nincsenek szobrok és emberábrázolások, a díszítés szokásos formája a **geometrikus minta és a kalligráfia** (szépírás).',
        },
        { kind: 'heading', text: 'Az arab hódítás' },
        {
          kind: 'text',
          text: 'Mohamed halála (632) után a közösséget a **kalifák** vezették. A törzseket az új hit egyesítette, és szinte egyszerre indultak hódításra. A hódításhoz hozzájárult a zsákmány reménye, a hit terjesztésének vágya, valamint a szomszédos két nagyhatalom, a **Bizánci Birodalom** és a perzsa **Szászánida Birodalom** kimerültsége.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '622', text: 'A hidzsra: Mohamed Mekkából Medinába költözik.' },
            { date: '632', text: 'Mohamed halála; az első kalifák korszaka.' },
            {
              date: '630-as–640-es évek',
              text: 'Szíria, Palesztina (Jeruzsálem), Perzsia, Egyiptom meghódítása.',
            },
            { date: '711', text: 'Az arabok átkelnek Észak-Afrikából a Pireneusi-félszigetre.' },
            { date: '717–718', text: 'Konstantinápoly sikertelen arab ostroma.' },
            {
              date: '732',
              text: 'A poitiers-i csata: a frankok megállítják az arab előrenyomulást.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'A hódítók a legyőzött lakosságtól általában csak **adót** követeltek, és a keresztények és zsidók megtarthatták a vallásukat (cserébe külön adót fizettek). Ezért sok helyen a lakosság nem ellenállt, és idővel egyre többen áttértek az iszlámra. Egy évszázad alatt kialakult az **Arab Birodalom**, amely **Spanyolországtól India határáig** húzódott. A kalifa székhelye először **Damaszkusz** volt, később **Bagdad**.',
        },
        { kind: 'heading', text: 'A feltartóztatás Európában' },
        {
          kind: 'keypoints',
          items: [
            '**717–718**: az arabok megostromolták **Konstantinápolyt**, a Bizánci Birodalom fővárosát, de a bizánciak visszaverték őket. A város fekvése és a falai miatt a kelet-európai terjeszkedés megakadt.',
            '**732**: a **poitiers-i csatában** a frank mayordomus, **Martell Károly** (a későbbi Nagy Károly nagyapja) megállította az Ibériai-félszigetről északra törő arab sereget. Ez a csata a nyugat-európai előrenyomulás végét jelentette.',
            'Az **Ibériai-félszigeten** az arabok hosszú évszázadokon át, a 15. század végéig megmaradtak, a keresztény államok csak lassan, az ún. **reconquista** (visszahódítás) során szorították vissza őket.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **II. Mehmed** oszmán szultán 1453-ban elfoglalta Konstantinápolyt, és ezzel megszűnt a Bizánci Birodalom. A város neve idővel **Isztambul** lett. Az oszmánok már nem arabok voltak, hanem török nép, de a muszlim hit és a dzsihád gondolata az ő hódításaikat is erősítette.',
        },
        { kind: 'heading', text: 'Az iszlám kultúra' },
        {
          kind: 'text',
          text: 'Az arab birodalomban az arab nyelv és az iszlám egyesítette a különböző népeket. A kalifák udvara a **tudományok** központja lett: ókori görög műveket fordítottak arabra, fejlődött a **matematika**, a **csillagászat**, az **orvostudomány** és a földrajz. Az indiai eredetű számjegyeket az arabok terjesztették Európában (ezért hívjuk őket arab számoknak). A 8–9. századtól a muszlim világ műveltsége sok szempontból felülmúlta az akkori nyugat-európait.',
        },
        {
          kind: 'compare',
          title: 'Iszlám és kereszténység',
          columns: ['Iszlám', 'Kereszténység'],
          rows: [
            { label: 'Szent könyv', cells: ['Korán', 'Biblia'] },
            { label: 'Alapító', cells: ['Mohamed (próféta)', 'Jézus (Isten fia a hit szerint)'] },
            { label: 'Isten', cells: ['egy Isten, Allah', 'egy Isten, a Szentháromságban'] },
            {
              label: 'Közösség vezetője',
              cells: ['kalifa (világi és vallási)', 'pápa (vallási vezető)'],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet a Koránból vagy az iszlám öt pillérét bemutató szövegből: melyik vallás, mit követel a hívőtől?',
            'Térkép az Arab Birodalom terjeszkedéséről: hova jutottak az arabok, hol állították meg őket, mikor?',
            'Fogalmak: iszlám, Korán, kalifa, hidzsra.',
            'Rövid kifejtés: miért tudtak az arabok rövid idő alatt hatalmas birodalmat létrehozni?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az arab és a muszlim fogalmának összekeverése (az arabok népcsoport, a muszlimok vallás), vagy a poitiers-i csata (732) és a reconquista összekeverése. Az arab hódítás **feltartóztatása** két helyen történt: Bizánc (717–718) és a frankok Poitiers-nál (732). Ne hidd azt sem, hogy az iszlám kényszerítette a lakosságot áttérésre: a hódítók a keresztényeknek és zsidóknak általában engedélyezték a vallásuk gyakorlását.',
        },
        {
          kind: 'tip',
          text: 'Évszám-kapaszkodó: **622** a hidzsra (az iszlám időszámítás kezdete), **732** Poitiers. A kettő között 110 év telt el, és ez alatt épült fel az Arab Birodalom.',
        },
      ],
      topicMatch: ['iszlám', 'arab hódítás', '=korán'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mi történt 622-ben?',
          options: [
            'A poitiers-i csata.',
            'Mohamed Mekkából Medinába költözött (hidzsra).',
            'Mohamed meghalt.',
            'Az arabok elfoglalták Konstantinápolyt.',
          ],
          answer: 1,
          explanation:
            '622 a hidzsra éve, az iszlám időszámítás kezdete. A poitiers-i csata 732-ben volt, Mohamed 632-ben halt meg.',
        },
        {
          question: 'Mi az iszlám szent könyve?',
          options: ['A Biblia', 'A Tóra', 'A Korán', 'A Talmud'],
          answer: 2,
          explanation:
            'A Korán Mohamed kinyilatkoztatásait tartalmazza, a hívők szerint Allah szavait.',
        },
        {
          question: 'Mit jelentett a kalifa tisztsége?',
          options: [
            'Mohamed utódját, a muszlim közösség világi és vallási vezetőjét.',
            'A beduin törzsek vezetőjét.',
            'Mekka kereskedőinek elöljáróját.',
            'A Korán fordítóját.',
          ],
          answer: 0,
          explanation:
            'A kalifa Mohamed halála után a közösség vezetője lett, vallási és világi hatalommal.',
        },
        {
          question: 'Hol és mikor állították meg a frankok az arab előrenyomulást?',
          options: [
            'Konstantinápolynál, 717-ben',
            'Mekkában, 622-ben',
            'Jeruzsálemnél, 638-ban',
            'Poitiers-nál, 732-ben',
          ],
          answer: 3,
          explanation:
            'A frank Martell Károly 732-ben, Poitiers-nál győzte le az arab sereget. Konstantinápolyt 717–718-ban a bizánciak védték meg.',
        },
        {
          question:
            'Melyik fogalom jelent az iszlámban a hitért való törekvést, adott esetben fegyveres harcot is?',
          options: ['Hidzsra', 'Kalifa', 'Dzsihád', 'Ramadán'],
          answer: 2,
          explanation:
            'A dzsihád arab szó, jelentése: erőfeszítés, törekvés a hitért; harcot is jelenthet a hit védelmében.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Mohamed', url: wiki('Mohamed próféta') },
        { label: 'Wikipédia: Az iszlám', url: wiki('Iszlám') },
        { label: 'Wikipédia: Poitiers-i csata (732)', url: wiki('Poitiers-i csata 732') },
      ],
    },
    {
      id: 'uradalom-jobbagyok',
      subject: 'tortenelem',
      unitId: 'kozepkor-europa',
      title: 'Az uradalom, a földesurak és a jobbágyok',
      level: 'kozep',
      requirement: {
        kozep: 'Az uradalom, a földbirtokosok és jobbágyok kötelességei és jogai',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A középkori gazdaság alapja a **mezőgazdaság** volt, a társadalom nagy része **jobbágy**, vagyis a földesúr földjén élő, földhöz kötött paraszt.',
            'A termelés egysége az **uradalom** (a **földesúr** birtoka): a földesúr saját földje (**majorság**) és a jobbágyok telkei.',
            'A jobbágy **kötelességei**: **robot** (ingyenmunka a majorságon), természetbeni adó, pénz, valamint az egyháznak a **tized**.',
            'A jobbágy **jogai**: használhatta a **telket**, és a földesúr védelmére számíthatott; a telket általában örökölhette.',
            'A földbirtokosok két nagy csoportja a **világi nemesség** és az **egyház** volt; a földbirtok adta a hatalmuk alapját.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'uradalom',
              text: 'A földesúr birtoka; a falvakat és az azokat művelő jobbágyokat foglalta magában.',
            },
            {
              term: 'majorság',
              text: 'Az uradalom földesúr által közvetlenül művelt része; itt dolgoztak a jobbágyok robotban.',
            },
            {
              term: 'jobbágy',
              text: 'A földesúr földjét használó, földhöz kötött, a földesúr bíráskodása alatt álló paraszt.',
            },
            {
              term: 'robot',
              text: 'A jobbágy ingyenes munkája a földesúr javára (például szántás, aratás, fuvar).',
            },
            {
              term: 'földesúr',
              text: 'Földbirtokos, akinek a jobbágyai szolgáltatásokkal tartoztak.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A földbirtokosok' },
        {
          kind: 'text',
          text: 'A középkorban a **föld** jelentette a gazdagságot és a hatalmat. A földesurak két fő csoportja: a **világi nemesség** (hercegek, grófok, lovagok, a földesúrként élő nemesek) és az **egyház** (püspökségek, kolostorok). Az uralkodó földadományokkal jutalmazta híveit, és ezzel biztosította a katonai szolgálatot (lásd a hűbériségről szóló leckét). A nemesek nem a saját kezük munkájából éltek: harcoltak, és a birtokuk, a jobbágyok szolgáltatásai tartották el őket.',
        },
        { kind: 'heading', text: 'Az uradalom szerkezete' },
        {
          kind: 'text',
          text: 'A nyugat-európai uradalom nagyrészt **önellátó** volt: a lakói maguk termeltek meg szinte mindent, amire szükségük volt (élelmet, ruhát, szerszámot), a pénz és a kereskedelem szerepe kicsi volt. A földek három részre oszlottak:',
        },
        {
          kind: 'keypoints',
          items: [
            '**majorság**: a földesúr saját földje, amit a jobbágyok robotban műveltek;',
            '**jobbágytelkek**: a jobbágyok saját használatú földje, ebből éltek és szolgáltak;',
            '**közös földek**: legelő, erdő, rét, amelyet a falu lakói használtak. A földesúr tulajdonában levő erdőt, malmot viszont csak díj ellenében lehetett használni.',
          ],
        },
        {
          kind: 'text',
          text: 'A földesúr és a jobbágyok kapcsolata kölcsönös volt: a földesúr **védelmet** és **igazságszolgáltatást** nyújtott a birtokán, a jobbágy cserébe szolgáltatott. A jobbágy személyében általában nem volt rabszolga: a családja, a vagyona (állata, eszköze) az övé volt, és a földesúr nem adhatta-vehette őt, mint a rabszolgát. Ugyanakkor a jobbágy a földhöz kötött volt, vagyis nem hagyhatta el szabadon a telkét.',
        },
        {
          kind: 'compare',
          title: 'A jobbágy kötelességei és jogai',
          columns: ['Kötelességei', 'Jogai'],
          rows: [
            { label: 'Föld', cells: ['a telek után szolgáltatás', 'a telek használata, öröklése'] },
            { label: 'Munka', cells: ['robot a majorságon', 'a saját gazdaság termése az övé'] },
            {
              label: 'Adó',
              cells: ['természetbeni adó (termény, állat) vagy pénz', 'a földesúr védelme'],
            },
            { label: 'Egyház', cells: ['tized (a termés tizede)', 'az egyház lelki szolgálata'] },
            {
              label: 'Bíráskodás',
              cells: ['a földesúr bírósága alá tartozik', 'a szokásjog védi a jogait'],
            },
          ],
        },
        { kind: 'heading', text: 'A gazdasági fellendülés a 11–13. században' },
        {
          kind: 'text',
          text: 'A korai középkor végétől a mezőgazdaság fejlődött. Elterjedt a **nehéz kerekes eke**, a **vízimalom**, az igavonó lovak használata, és a **háromnyomásos gazdálkodás**: a szántóföldet három részre osztották, az egyiken őszi vetés, a másikon tavaszi vetés termett, a harmadik pihent (ugar). Így nagyobb termés lett, nőtt a népesség, új falvak keletkeztek, erdőket irtottak. A többlet termény eladható volt a piacokon, ezért a pénz szerepe is nőtt, és a városok is fejlődni kezdtek (lásd a városról szóló leckét).',
        },
        { kind: 'heading', text: 'Válság: a 14. század' },
        {
          kind: 'text',
          text: 'A 14. század elején éhínségek jöttek, majd **1347–1351** között a **pestis** (a „fekete halál”) végigsöpört Európán. A becslések szerint a lakosság nagyjából harmadát pusztította el. Nyugat-Európában a munkaerőhiány miatt a túlélő jobbágyok helyzete sok helyen javult (a földesúrnak kevesebb jobbágya maradt, ezért kedvezményeket adtak), ugyanakkor a robot és az adók terhei miatt **parasztfelkelések** törtek ki (például Franciaországban a **jacquerie**, 1358, Angliában a **Wat Tyler-féle felkelés**, 1381). A felkeléseket leverték.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrásrészlet egy uradalom jegyzékéből vagy földesúri oklevélből: milyen szolgáltatásokkal tartozott a jobbágy?',
            'Ábra az uradalom szerkezetéről (majorság, jobbágytelkek, közös föld): nevezd meg a részeket.',
            'Fogalmak: uradalom, jobbágy, robot, földesúr, majorság.',
            'Rövid kifejtés: mik voltak a jobbágy és a földesúr jogai és kötelességei?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a jobbágyot rabszolgának nevezni. A rabszolgának nem volt személyes joga, és adásvétel tárgya volt; a jobbágynak volt háza, vagyona, jogai (használta a telket, örökíthette), de földhöz kötött volt, és a földesúrnak szolgáltatott. A robotot se keverd a tizeddel: a robot a földesúrnak végzett munka, a tized az egyháznak járó termény.',
        },
        {
          kind: 'tip',
          text: 'Mindig mondd ki, hogy a viszony **kölcsönös** volt: a földesúr védelmet és igazságszolgáltatást adott, a jobbágy munkát és adót. Ezt a szempontot a javítási útmutatók rendszeresen várják.',
        },
      ],
      topicMatch: ['=a középkori jobbágyság', '=középkor'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mi volt a majorság?',
          options: [
            'A jobbágyok saját telke.',
            'A földesúr közvetlenül művelt földje az uradalomban.',
            'A falu közös legelője.',
            'Az egyház tulajdonában levő kolostor.',
          ],
          answer: 1,
          explanation: 'A majorságot a jobbágyok robotban művelték, a termés a földesúré volt.',
        },
        {
          question: 'Mit jelentett a robot?',
          options: [
            'A termés tizedét az egyháznak.',
            'Pénzadót a királynak.',
            'A jobbágy ingyenmunkáját a földesúr földjén.',
            'Katonai szolgálatot a hűbérúrnak.',
          ],
          answer: 1,
          explanation: 'A robot a földesúrnak végzett ingyenes munka. A tized az egyháznak járt.',
        },
        {
          question: 'Melyik állítás igaz a középkori jobbágyra?',
          options: [
            'Személyesen a földesúr rabszolgája volt, és semmije nem lehetett.',
            'Földhöz kötött volt, de használta a telket, és a földesúrtól védelmet kapott.',
            'Szabadon elköltözhetett, ahová akart.',
            'Nem kellett semmilyen szolgáltatást teljesítenie.',
          ],
          answer: 1,
          explanation:
            'A jobbágy földhöz kötött volt, szolgáltatással tartozott, de a telket használhatta, és védelmet kapott. Nem volt rabszolga.',
        },
        {
          question:
            'Miért javult a nyugat-európai jobbágyok helyzete sok helyen a fekete halál (1347–1351) után?',
          options: [
            'Mert megszűnt a földesurak hatalma.',
            'Mert a járvány miatt kevés lett a munkaerő, ezért a földesurak engedményeket adtak.',
            'Mert a pápa eltörölte a jobbágyságot.',
            'Mert a városok átvették az uradalmakat.',
          ],
          answer: 1,
          explanation:
            'A lakosság nagy része elpusztult, a megmaradt munkaerő értékesebb lett. (Ugyanakkor a terhek miatt parasztfelkelések is kitörtek.)',
        },
      ],
      sources: [
        { label: 'Wikipédia: Uradalom', url: wiki('Uradalom középkor') },
        { label: 'Wikipédia: Jobbágyság', url: wiki('Jobbágy középkor') },
        { label: 'Wikipédia: Fekete halál', url: wiki('Fekete halál pestis') },
      ],
    },
    {
      id: 'kozepkori-varos-ceh-kereskedelem',
      subject: 'tortenelem',
      unitId: 'kozepkor-europa',
      title: 'A középkori város, a céhek és a kereskedelem',
      level: 'kozep',
      requirement: {
        kozep:
          'A középkori város és lakói, a város kiváltságai, a céhek, a helyi és távolsági kereskedelem',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A 11–13. századi gazdasági fellendülés nyomán **városok** keletkeztek: kereskedők és kézművesek (**polgárok**) települései.',
            'A város **kiváltságokat** szerzett: önkormányzat (választott tanács és bíró), saját bíráskodás, vásártartás, szabad költözés, városfal.',
            'A kézművesek **céhekbe** tömörültek: a céh szabályozta a termelés mennyiségét, minőségét és az árakat.',
            'A **helyi kereskedelem** piacokon zajlott, a **távolsági kereskedelem** két nagy hálózata a **levantei** (Velence) és a **Hanza** (Északi- és Balti-tenger).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'polgár',
              text: 'A város teljes jogú lakója (kereskedő, kézműves), aki részt vehetett a város ügyeinek irányításában.',
            },
            {
              term: 'kiváltság',
              text: 'Különleges jog, amit az uralkodó vagy a földesúr adott a városnak vagy egy csoportnak.',
            },
            {
              term: 'céh',
              text: 'Egy szakma kézműveseinek érdekvédelmi és szabályozó szervezete a városban.',
            },
            {
              term: 'levantei kereskedelem',
              text: 'A Földközi-tenger keleti partvidékével (Levante) folytatott kereskedelem; fűszerek, selyem, luxuscikkek Európába.',
            },
            {
              term: 'Hanza',
              text: 'Észak-európai kereskedővárosok szövetsége (például Lübeck, Hamburg, Bréma), amely az Északi- és Balti-tenger kereskedelmét uralta.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan keletkeztek a városok?' },
        {
          kind: 'text',
          text: 'A mezőgazdasági fellendülés után a falvak termelési többletet adtak, és egyre többen foglalkoztak **kézművességgel** és **kereskedelemmel**. Ők gyakran a római kori városok romjai, püspöki székhelyek, várak vagy forgalmas útvonalak mellett telepedtek le. A város jellegzetes helye a **piactér**, a templom és a **városfal**. A város lakói a földesúrtól, a püspöktől vagy a királytól kiváltságokat szereztek (pénzért vagy kiharcolva).',
        },
        { kind: 'heading', text: 'A város kiváltságai és lakói' },
        {
          kind: 'keypoints',
          items: [
            '**Önkormányzat**: a polgárok választott **tanácsot** és **bírót (polgármestert)** választottak, aki a város ügyeit irányította.',
            '**Saját bíráskodás**: a város bírósága ítélkezett a polgárok ügyeiben.',
            '**Vásártartási jog**: évente többször nagy vásárt tarthattak, ide jöttek messzi kereskedők is.',
            '**Szabad költözés**: a városba költöző jobbágy bizonyos idő után (a közmondás szerint egy év és egy nap) felszabadult a földesúr hatalma alól („a városi levegő szabaddá tesz”).',
            '**Városfal és adóprivilégiumok**: saját védelem, kedvezmények az adózásban.',
          ],
        },
        {
          kind: 'text',
          text: 'A város lakói nem voltak egyformák. A **teljes jogú polgárok** a gazdag kereskedők és a céhmesterek voltak, ők alkották a tanácsot. Alattuk álltak a kisebb iparosok, majd a **legények**, az **inasok**, a napszámosok és a szegények. A városok nagyságrendje a mai szemmel kicsi volt: a legnagyobb nyugat-európai városoknak is csak néhány tízezer lakója volt.',
        },
        { kind: 'heading', text: 'A céhek' },
        {
          kind: 'text',
          text: 'Az azonos szakmát űző kézművesek a városban **céhbe** tömörültek (például szabók, kovácsok, pékek céhe). A céh a tagjainak védelmet adott a versenytől, ezért szigorú szabályai (**céhszabályzat**) voltak:',
        },
        {
          kind: 'keypoints',
          items: [
            'korlátozta a **termelés mennyiségét**, és előírta a **minőséget és az árat**, hogy ne legyen verseny a mesterek között;',
            'szabályozta a tanulást: **inas** (tanonc), majd **legény**, végül **mester** lehetett valaki, a mesterré válást vizsgához (**mestermű**) kötötték;',
            'szociális és vallási szerepe is volt: segítette a beteg, elaggott tagokat és özvegyeiket, közös ünnepeket tartott, saját oltára volt a templomban;',
            'katonai szerep: a városfalak egy szakaszát a céh védte.',
          ],
        },
        {
          kind: 'text',
          text: 'A céhrendszer biztosította a jó minőséget és a megélhetést, ugyanakkor megakadályozta az újítást és a verseny kialakulását, ezért később fékezte a fejlődést.',
        },
        { kind: 'heading', text: 'Helyi és távolsági kereskedelem' },
        {
          kind: 'text',
          text: 'A **helyi kereskedelem** a heti piacokon folyt: a környék parasztjai élelmiszert hoztak, a városi kézművesek iparcikkeket árultak. A **távolsági kereskedelem** az áruk nagy távolságú szállításával foglalkozott. A vásárok (például Champagne vásárai Franciaországban) a kereskedők találkozóhelyei voltak. Két nagy kereskedelmi hálózat alakult ki:',
        },
        {
          kind: 'compare',
          title: 'A két nagy kereskedelmi hálózat',
          columns: ['Levantei kereskedelem', 'Hanza'],
          rows: [
            { label: 'Térség', cells: ['Földközi-tenger, Közel-Kelet', 'Északi- és Balti-tenger'] },
            { label: 'Központok', cells: ['Velence, Genova, Firenze', 'Lübeck, Hamburg, Bréma'] },
            {
              label: 'Áruk',
              cells: ['fűszer, selyem, luxuscikkek', 'gabona, só, hal, szőrme, fa'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Itáliai kereskedővárosok, például **Velence** és **Firenze** kereskedelemből és **bankügyletekből** meggazdagodtak, ez a gazdagság később a reneszánsz kultúra alapja lett (lásd a kultúráról szóló leckét). A kereskedők szállítási és hitelműveletei miatt fejlődött a pénzforgalom: a kereskedelem szerepe a gazdaságban egyre nőtt, és a nemesség mellett új társadalmi csoport, a **polgárság** jelent meg.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: városi kiváltságlevél, céhszabályzat részlete. Mit szabályoz, miért volt hasznos a mestereknek?',
            'Térkép a középkori kereskedelmi útvonalakról: nevezd meg a Hanza és a levantei kereskedelem központjait.',
            'Fogalmak: polgár, céh, kiváltság, Hanza.',
            'Rövid kifejtés: miért alakult ki a céh, és mi volt az előnye, hátránya?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a polgárt a „városi lakos” szinonimájának venni. A polgár a teljes jogú városlakó volt, nem tartozott hozzá a városban élő minden szegény vagy napszámos. A Hanza és a levantei kereskedelem összekeverése: a Hanza északon, a levantei kereskedelem délen (Velence) működött.',
        },
        {
          kind: 'tip',
          text: 'A céhszabályzatnál mindig két szempontot mondj: védte a mesterek megélhetését és a minőséget (előny), de korlátozta a versenyt és az újítást (hátrány). Ez a "mit mutat a forrás?" típusú kérdésekre jó válasz.',
        },
      ],
      topicMatch: ['a céhek', 'késő középkor'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mi volt a céh?',
          options: [
            'A kereskedők hajóflottája.',
            'A földesurak szövetsége.',
            'Egy szakma kézműveseinek szabályozó és érdekvédelmi szervezete a városban.',
            'A város bírósága.',
          ],
          answer: 2,
          explanation:
            'A céh az azonos szakmát űző mesterek szervezete volt, amely szabályozta a termelést, az árakat és a tanulást.',
        },
        {
          question: 'Melyik NEM tartozott a középkori város jellegzetes kiváltságai közé?',
          options: [
            'Önkormányzat, választott tanács',
            'Vásártartási jog',
            'A jobbágyok szabad költözése a városba',
            'A király kinevezte a város minden lakóját',
          ],
          answer: 3,
          explanation:
            'A városok önkormányzattal, bíráskodással, vásártartással rendelkeztek; a polgárokat nem a király jelölte ki.',
        },
        {
          question: 'Mi volt a Hanza?',
          options: [
            'A velencei kereskedők útvonala a Közel-Keletre.',
            'Észak-európai kereskedővárosok szövetsége az Északi- és Balti-tengeren.',
            'Német lovagrend.',
            'Francia vásárok sorozata.',
          ],
          answer: 1,
          explanation:
            'A Hanza északi kereskedővárosok (Lübeck, Hamburg, Bréma) szövetsége volt. A levantei kereskedelem a Földközi-tengeren folyt, Velence vezetésével.',
        },
        {
          question: 'Mi a helyes sorrend a céhbeli szakmai ranglétrán?',
          options: [
            'Mester, legény, inas',
            'Legény, mester, inas',
            'Inas, mester, legény',
            'Inas, legény, mester',
          ],
          answer: 3,
          explanation:
            'A tanuló inas lett, majd legény, a mesterséget a mestermű bemutatásával nyerte el.',
        },
        {
          question: 'Melyik város vezette a levantei kereskedelmet?',
          options: ['Lübeck', 'Hamburg', 'Velence', 'Párizs'],
          answer: 2,
          explanation:
            'Velence volt a levantei kereskedelem legnagyobb központja. Lübeck és Hamburg a Hanza városai.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Város (középkor)', url: wiki('Középkori város') },
        { label: 'Wikipédia: Céh', url: wiki('Céh') },
        { label: 'Wikipédia: Hanza', url: wiki('Hanza kereskedelmi szövetség') },
      ],
    },
    {
      id: 'huberiseg-rendi-monarchia',
      subject: 'tortenelem',
      unitId: 'kozepkor-europa',
      title: 'Az uralkodói hatalom és korlátai: hűbériség és rendi monarchia',
      level: 'emelt',
      requirement: {
        emelt: 'Az uralkodói hatalom és korlátai (hűbériség, rendiség, rendi monarchia)',
      },
      minutes: 11,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **hűbériség** (feudalizmus) a földbirtokon alapuló személyes függések láncolata: a **hűbérúr** földet adott, a **vazallus** (hűbéres) katonai szolgálattal és hűséggel tartozott.',
            'A korai középkorban (a **Frank Birodalom** felbomlása után) a királyi hatalom gyenge volt, a hatalom a földesurak kezében volt.',
            'A 12–13. századtól a király mellett a **rendek** (nemesség, papság, városok) is részt kértek az ország vezetéséből: kialakult a **rendi monarchia**.',
            'A rendek kiváltságokat és az uralkodó hatalmának korlátait kényszerítették ki: Angliában **1215**, a **Magna Charta Libertatum**.',
            'A rendi monarchia **korlátozott** uralkodói hatalmat jelent, ellentétben a korlátlan egyeduralommal (**despotizmus**).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'feudalizmus',
              text: 'A hűbériségre és a földbirtokra épülő középkori társadalmi-politikai rend.',
            },
            {
              term: 'hűbériség',
              text: 'A földadományon alapuló kölcsönös szolgálat és védelem rendszere az uralkodó, a nagybirtokosok és a lovagok között.',
            },
            {
              term: 'rendi monarchia',
              text: 'Az uralkodó hatalmát a rendek (nemesség, papság, városok) gyűlése korlátozza, és a rendek részt vesznek a törvényhozásban és az adómegajánlásban.',
            },
            {
              term: 'hűbérúr',
              text: 'Az, aki földet (hűbérbirtokot) adott a vazallusnak, és cserébe hűséget, szolgálatot kapott.',
              emelt: true,
            },
            {
              term: 'vazallus',
              text: 'A hűbéres: a hűbérúrtól földet kapott, és katonai szolgálattal, tanáccsal tartozott neki.',
              emelt: true,
            },
            {
              term: 'despotizmus',
              text: 'Az uralkodó korlátlan, törvények vagy rendek által nem korlátozott hatalma.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hűbériség kialakulása' },
        {
          kind: 'text',
          text: 'A Nyugat-Római Birodalom bukása (476) után Nyugaton a **frankok** lettek a legerősebbek. **Nagy Károly** frank királyt **800-ban** a pápa császárrá koronázta. Az ő birodalma a halála után felbomlott, a későbbi támadások (normannok, magyarok, arabok) miatt a király egyedül nem tudta megvédeni az országot. A védelmet a **helyi földesurak** szervezték, ezért a hatalom egyre inkább a birtokosok kezébe került. Ebből alakult ki a **hűbériség**.',
        },
        {
          kind: 'text',
          text: 'A hűbéri rendszerben a király (vagy egy nagyúr) a birtokának egy részét **hűbérbirtokként** (hűbér, fief) adta a katonai szolgálatot vállaló követőjének. A hűbéri szerződést **eskü** és szertartás pecsételte meg. A kapcsolat **kölcsönös** volt:',
        },
        {
          kind: 'compare',
          title: 'A hűbéri viszony',
          columns: ['Hűbérúr (adó)', 'Vazallus (kapó)'],
          rows: [
            { label: 'Ad', cells: ['hűbérbirtokot, védelmet', 'hűséget, katonai szolgálatot'] },
            {
              label: 'Kap',
              cells: ['katonát, tanácsot, támogatást', 'földet, megélhetést, védelmet'],
            },
            {
              label: 'Hűtlenség',
              cells: ['elvehette a hűbérbirtokot', 'elveszíthette a birtokot'],
            },
          ],
          emelt: true,
        },
        {
          kind: 'text',
          text: 'A hűbéri rendszer **piramisszerűen** épült fel: a csúcson a király állt, alatta a hercegek, grófok (a király vazallusai), majd a lovagok és a kisebb földesurak. A hűbéres saját hűbéreseinek maga volt a hűbérura. Elterjedt elv volt, hogy „a vazallusom vazallusa nem az én vazallusom”: az uralkodó közvetlenül csak a saját hűbéreseire számíthatott. Ezért a király hatalma gyenge volt, a nagy hűbérurak gyakran önállóan, saját érdekeik szerint cselekedtek.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A hűbérbirtok eleinte az adott vazallusnak szólt, később **örökölhetővé** vált. Sok helyen az **elsőszülött fiú** örökölte az egész birtokot (**primogenitúra**), hogy a birtok ne aprózódjon szét, és a hűbérúr katonai szolgálata továbbra is biztosítva legyen. A fiatalabb fiak gyakran a papi pályán vagy a lovagi szolgálatban keresték a boldogulást.',
        },
        { kind: 'heading', text: 'A rendi monarchia' },
        {
          kind: 'text',
          text: 'A 12–13. századtól a gazdaság fellendülése, a városok megerősödése és a központosítás újabb helyzetet teremtett. A királyoknak pénzre és katonára volt szükségük, és ehhez a társadalom csoportjainak, a **rendeknek** a támogatását kellett megszerezniük. A **rend** a társadalom azonos jogokkal és kötelességekkel rendelkező csoportja (nemesség, papság, városok polgársága). A rendek **gyűléseken** (rendi gyűlés, parlament) jöttek össze, ahol az uralkodóval megvitatták a törvényeket és az adókat. Ez a **rendi monarchia**.',
        },
        {
          kind: 'keypoints',
          title: 'A rendi monarchia jellemzői',
          items: [
            'a király és a rendek **megosztják** a hatalmat;',
            'a rendek **kiváltságokat** élveznek (adómentesség, törvény előtti védettség, tisztségek);',
            'az **adót** a rendek gyűlése hagyja jóvá (adómegajánlás);',
            'az uralkodó csak a **törvények** keretei között kormányozhat.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '800', text: 'Nagy Károly császárrá koronázása.' },
            {
              date: '1215',
              text: 'Magna Charta Libertatum Angliában: a bárók kikényszerítik a király jogainak korlátozását.',
              emelt: true,
            },
            { date: '13. század', text: 'Az angol parlament kialakulása.', emelt: true },
            {
              date: '1302',
              text: 'Franciaországban összehívják az első rendi gyűlést (Rendi Nagygyűlés).',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **Magna Charta Libertatum** (Szabadságlevél) **1215-ben** Földnélküli János angol királytól a bárók kikényszerítették. Megerősítette, hogy a király sem állhat a törvény felett: pl. adót csak a nagytanács beleegyezésével szedhet, és senkit nem lehet törvényes ítélet nélkül elfogni. Hasonló jogokat rögzített a magyar Aranybulla is 1222-ben (ezt a magyar leckékben találod). Angliában ezt követően a rendek gyűlése, a **parlament** kialakult, a franciaországi rendi gyűlést **1302-ben** hívta össze IV. (Szép) Fülöp.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A rendi monarchiát meg kell különböztetni a **despotizmustól** (korlátlan egyeduralom) és a későbbi **abszolutizmustól** (kora újkor), amelyben az uralkodó a rendek gyűlése nélkül kormányzott. Az egyház és a pápa ugyancsak korlátozta a világi uralkodókat (lásd az egyházról szóló leckét).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábra a hűbéri piramisról: kit hogyan nevezünk, ki mit ad és kap?',
            'Forrás a Magna Chartából vagy hűbéri esküről: milyen kötelezettségeket állapít meg, kinek a hatalmát korlátozza?',
            'Összehasonlítás: hűbériség és rendi monarchia; rendi monarchia és despotizmus.',
            'Emelt szintű kifejtés: az uralkodói hatalom és korlátai a középkorban.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a hűbériséget és a rendi monarchiát egy időben, azonosnak tartani. A hűbériség a **korai és kora-érett** középkor jellemzője (gyenge király, személyes függések), a rendi monarchia a **későbbi**, a rendek gyűlésére építő rendszer. A másik hiba: a jobbágyot (földesúr–jobbágy viszony) összekeverni a vazallussal (hűbérúr–vazallus viszony). A vazallus szabad harcos, aki földet kapott a szolgálatáért; a jobbágy a földet művelő paraszt.',
        },
        {
          kind: 'tip',
          text: 'Emelt esszé váza: 1) honnan a gyenge központi hatalom (Frank Birodalom bomlása, külső támadások), 2) a hűbéri rendszer (kölcsönös szolgálat, piramis), 3) a rendek megerősödése (gazdaság, városok), 4) a rendi monarchia jellemzői (adómegajánlás, kiváltságok), 5) példa (Magna Charta 1215), 6) a korlát: törvények, rendi gyűlés, egyház.',
        },
      ],
      topicMatch: ['a hűbér', '=rendi monarchia', '=rendiség', '=rendi társadalom'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Mi jellemezte a hűbéri viszonyt?',
          options: [
            'A hűbérúr földet adott, a vazallus hűséggel és katonai szolgálattal tartozott.',
            'A vazallus adót fizetett a királynak és semmivel nem tartozott a hűbérúrnak.',
            'A hűbérúr a vazallus rabszolgája volt.',
            'A vazallus a hűbérúr földjét művelte robotban.',
          ],
          answer: 0,
          explanation:
            'A hűbéri viszony kölcsönös: földet és védelmet kapott a vazallus, cserébe hűséget és katonai szolgálatot adott.',
        },
        {
          question: 'Mikor koronázták császárrá Nagy Károlyt?',
          options: ['476', '622', '732', '800'],
          answer: 3,
          explanation:
            '800-ban, Rómában. 476 a Nyugatrómai Birodalom bukása, 622 a hidzsra, 732 Poitiers.',
        },
        {
          question: 'Mi a rendi monarchia lényege?',
          options: [
            'A király korlátlan hatalma.',
            'A király hatalmát a rendek gyűlése korlátozza, a rendek részt vesznek a törvényhozásban és az adómegajánlásban.',
            'A földesurak független hercegségekre osztják az országot.',
            'A város polgárai választják a királyt.',
          ],
          answer: 1,
          explanation:
            'A rendi monarchiában az uralkodó és a rendek megosztják a hatalmat, az adót a rendek gyűlése hagyja jóvá.',
        },
        {
          question: 'Melyik évhez kapcsolódik a Magna Charta Libertatum?',
          options: ['1215', '1222', '1066', '1302'],
          answer: 0,
          explanation:
            '1215-ben, Földnélküli János angol király idején. 1222 a magyar Aranybulla, 1302 az első francia rendi gyűlés.',
          emelt: true,
        },
        {
          question: 'Mit jelent a primogenitúra?',
          options: [
            'A birtok egyenlő felosztását a fiúk között.',
            'A hűbérbirtok öröklését az elsőszülött fiú által.',
            'A király megválasztását a rendek által.',
            'A jobbágy földhöz kötését.',
          ],
          answer: 1,
          explanation:
            'A primogenitúra az elsőszülött öröklési joga; így a birtok nem aprózódott szét.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hűbériség', url: wiki('Hűbériség feudalizmus') },
        { label: 'Wikipédia: Magna Charta', url: wiki('Magna Charta Libertatum 1215') },
        { label: 'Wikipédia: Rendi monarchia', url: wiki('Rendi monarchia') },
      ],
    },
    {
      id: 'egyhaz-szerzetesseg-egyhazszakadas',
      subject: 'tortenelem',
      unitId: 'kozepkor-europa',
      title: 'Az egyház, a szerzetesség és az egyházszakadás',
      level: 'kozep',
      requirement: {
        kozep: 'Az egyházi hierarchia, az egyházi intézményrendszer, a szerzetesség Európában',
        emelt: 'Az egyházszakadás, a nyugati és a keleti kereszténység fő jellemzői',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A középkori ember életét az **egyház** határozta meg: a katolikus egyház **hierarchikusan** épült fel (pápa, érsek, püspök, plébános).',
            'Az egyház saját **intézményrendszerrel** rendelkezett: egyházmegyék, plébániák, kolostorok, iskolák, bíróságok, és **tizedet** szedett.',
            'A **szerzetesek** (bencések, később a koldulórendek) imádkoztak, dolgoztak, tanítottak, könyveket másoltak.',
            'A pápák és a császárok vitája (**invesztitúraharc**) az egyház és az állam viszonyát rendezte. **VII. Gergely** pápa bevezette a **cölibátust**.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: [
            'Az **egyházszakadás** (1054) szétválasztotta a nyugati (**katolikus**) és keleti (**ortodox**) kereszténységet.',
          ],
        },
        {
          kind: 'terms',
          items: [
            { term: 'pápa', text: 'A katolikus egyház feje, Róma püspöke.' },
            {
              term: 'érsek',
              text: 'Egy érsekség (több egyházmegye) vezetője; rangban a püspök fölött áll.',
            },
            { term: 'cölibátus', text: 'A papok nőtlenségének előírása a katolikus egyházban.' },
            { term: 'szerzetes', text: 'Kolostorban, szabály szerint élő hívő; fogadalmat tesz.' },
            {
              term: 'eretnek',
              text: 'Az egyház hivatalos tanításától eltérő nézetet valló ember.',
            },
            {
              term: 'kolduló rend',
              text: 'A 13. századi szerzetesrend (például ferencesek, domonkosok), amely a városokban prédikált, a tagok koldulásból éltek.',
              emelt: true,
            },
            {
              term: 'pátriárka',
              text: 'A keleti egyházak legfőbb elöljárója (például a konstantinápolyi pátriárka).',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az egyházi hierarchia és intézményrendszer' },
        {
          kind: 'text',
          text: 'A nyugati (**katolikus**) egyház Rómában székelő feje a **pápa**. Alatta állnak a **bíborosok** (a pápát ők választják), majd az **érsekek** és a **püspökök**. A püspök egy **egyházmegyét** vezet, ennek székhelye a székesegyház. A legalsó szintet a falvakban, városokban a **plébánosok** jelentik, a **plébániák** élén. A pápa állama, az **Egyházi (Pápai) Állam**, Közép-Itáliában terült el.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A püspök mellett a székesegyházban a **káptalan** működött: a székesegyházi papok (kanonokok) testülete, amely tanácsot adott a püspöknek és részt vett az egyházmegye vezetésében.',
        },
        {
          kind: 'compare',
          title: 'Az egyházi hierarchia',
          columns: ['Tisztség', 'Terület'],
          rows: [
            { label: 'Pápa', cells: ['az egyház feje', 'az egész katolikus egyház'] },
            { label: 'Érsek', cells: ['főpap', 'érsekség (több egyházmegye)'] },
            { label: 'Püspök', cells: ['főpap', 'egyházmegye'] },
            { label: 'Plébános', cells: ['pap', 'plébánia (egy falu, város)'] },
          ],
        },
        {
          kind: 'text',
          text: 'Az egyház a hívők **lelki életét** irányította (szentségek: keresztség, házasság, szentmise, bűnbánat). Ezen túl **iskolákat** működtetett, saját **bíróságot** tartott, **kórházakat** és szegényházakat fenntartott. Hatalmas földbirtokai voltak, és a hívőktől **tizedet** (a termés tizedét) szedett. A papságot kiemelte a tágabb társadalomból a műveltség (a latin nyelv ismerete), a papok írták a leveleket, okleveleket az uralkodóknak. A pápák hatalma a 11–13. században nőtt a legnagyobbra.',
        },
        { kind: 'heading', text: 'Egyház és állam: az invesztitúraharc' },
        {
          kind: 'text',
          text: 'Az **invesztitúra** a püspökök hivatalba iktatása. A császárok és királyok maguk nevezték ki a főpapokat, mert azok sok földet birtokoltak és fontos tanácsadók voltak. **VII. Gergely** pápa (1073–1085) ezt megtiltotta, és harcba szállt **IV. Henrik** német-római uralkodóval. Henriket kiközösítették, ezért **1077-ben**, **Canossában** bűnbánatot tartott a pápa előtt. A vita végül az **1122-es wormsi egyezménnyel** zárult, ez megosztotta a jogot: a püspököt az egyház választotta, de a világi hűbérbirtokot az uralkodó adta. VII. Gergely vezette be a papi **cölibátust** is: a papok ne házasodjanak, hogy a birtokaik ne öröklődjenek, és az egyház a hivatalokra a saját szabályai szerint nevezzen embert.',
        },
        {
          kind: 'warning',
          text: 'Az 1077-es canossai út nem azonos Szent László uralkodásának kezdetével (az is 1077). Az évszám egyezés véletlen: a kérdésben mindig nézd meg, melyik eseményről van szó.',
        },
        { kind: 'heading', text: 'A szerzetesség' },
        {
          kind: 'text',
          text: 'A **szerzetesek** a világtól elvonulva, **kolostorban** éltek, és a világi élet helyett Isten szolgálatára szánták az életüket. A szerzetesség alapító szabályát **Szent Benedek** a 529-ben alapított Monte Cassinó-i kolostorban alkotta meg; lényegét a **„Ora et labora”** (imádkozz és dolgozz) mondat foglalja össze. A szerzetesek **három fogadalmat** tettek: szegénységet, tisztaságot (nőtlenséget) és engedelmességet vállaltak.',
        },
        {
          kind: 'keypoints',
          items: [
            '**Bencések**: a nyugati szerzetesség első nagy rendje. A kolostoraikban könyveket (**kódexeket**) másoltak, iskolákat tartottak, földet műveltek, ápolták a betegeket. A műveltség átmentői voltak.',
            '**Ferencesek** (Assisi Szent Ferenc alapította, 1210 körül): a 13. században a városokban prédikáltak, szegénységben éltek, a hívők adományaiból.',
            '**Inkvizíció**: egyházi bíróság az **eretnekek** (az egyház tanításától eltérők) kivizsgálására és megbüntetésére. A 13. századtól működött; a domonkosok jelentős szerepet vittek benne.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A ferencesek és a domonkosok a **kolduló rendek** (13. század): nem a kolostor magányába vonultak, hanem a városokban, a hívők között éltek, prédikáltak. A ferences rendet **III. Ince** pápa engedélyezte (a pápa ekkor a nyugati egyház uralkodó erejű vezetője volt). A koldulórendek a **legenda** műfaját is gazdagították: a szentek életéről szóló elbeszéléseket, amelyek a hívők tanítására szolgáltak.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Szent Benedek',
              text: 'A nyugati szerzetesség atyja, a bencés rend szabályának megalkotója (Monte Cassino, 529).',
            },
            {
              name: 'Assisi Szent Ferenc',
              text: 'A ferences rend alapítója, szegénységben élő prédikátor (13. század eleje).',
            },
            {
              name: 'VII. Gergely',
              text: 'Pápa (1073–1085), a pápai hatalom megerősítője, a cölibátus bevezetője.',
            },
            {
              name: 'III. Ince',
              text: 'Pápa (1198–1216), a középkori pápai hatalom egyik csúcsa; engedélyezte a ferences rendet.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A keresztes hadjáratok' },
        {
          kind: 'text',
          text: 'A pápák és a nyugati lovagok a **Szentföld** (Jeruzsálem és környéke) visszahódítására indítottak **keresztes hadjáratokat** (1095-től). Az első hadjárat **1099-ben** elfoglalta **Jeruzsálemet**, és keresztény államokat alapítottak a Szentföldön. A későbbi hadjáratok már kevésbé voltak sikeresek, a 13. század végére (1291) a keresztény államok megszűntek. A hadjáratok kiváltó okai között a vallási lelkesedés, a pápa hatalmának növelése, valamint a kereskedelmi és hódítási érdekek együtt szerepeltek. Következménye: erősödött az olasz kereskedővárosok szerepe, és nőtt a nyugati érintkezés a keleti műveltséggel. Közben a negyedik hadjárat (1204) során a keresztesek elfoglalták és kifosztották a keresztény Konstantinápolyt, ami a katolikus és az ortodox egyház közötti ellentétet tovább mélyítette.',
        },
        { kind: 'heading', text: 'Az egyházszakadás és a két kereszténység' },
        {
          kind: 'text',
          emelt: true,
          text: 'A Római Birodalom kettéosztása (395) után a **nyugati** és a **keleti** egyház más-más irányba fejlődött. Nyugaton a pápa központi szerepe és a latin nyelv, keleten a görög nyelv, a **Bizánci Birodalom** császárának egyházat is védő szerepe és a pátriárkák jelentősége kapott hangsúlyt. **1054-ben** a pápa követe és a **konstantinápolyi pátriárka** kölcsönösen kiátkozták egymást: ez az **egyházszakadás** (a nagy skizma). A nyugati egyházból a **katolikus**, a keletiből az **ortodox** egyház lett.',
        },
        {
          kind: 'compare',
          title: 'Katolikus és ortodox kereszténység',
          emelt: true,
          columns: ['Nyugati (katolikus)', 'Keleti (ortodox)'],
          rows: [
            {
              label: 'Vezető',
              cells: [
                'a pápa, Róma püspöke, az egész egyház feje',
                'a pátriárkák, köztük a konstantinápolyi pátriárka tiszteletbeli elsőbbségével',
              ],
            },
            { label: 'Nyelv', cells: ['latin', 'görög (később szláv nyelvek is)'] },
            {
              label: 'Papság',
              cells: ['cölibátus (nőtlen papok)', 'a világi papok megházasodhatnak'],
            },
            {
              label: 'Állam és egyház',
              cells: [
                'az egyház a világi hatalomtól függetlenségre törekszik, pápák és császárok vitája',
                'a bizánci császár hatalma az egyház felett is érvényesült',
              ],
            },
            { label: 'Központ', cells: ['Róma', 'Konstantinápoly'] },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Egy további eltérés, hogy a hitvallásba a nyugati egyház beillesztette a **filioque** („és a Fiútól”) kifejezést, amit a keleti egyház elutasított. A szakadás nem egy nap alatt jött létre, és a két egyház kapcsolata a keresztes háborúk idején is romlott. A nyugati kereszténységhez csatlakozott a későbbi Magyar Királyság is; keleten az ortodox hit a szláv népek (például a kijevi Rusz, Bulgária, Szerbia) vallása lett.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábra az egyházi hierarchiáról: nevezd meg a rangokat és a területeket.',
            'Forrás: VII. Gergely vagy IV. Henrik levele, a canossai jelenet: miről szól a vita, kinek volt igaza a pápa/császár szerint?',
            'Fogalmak: cölibátus, szerzetes, eretnek, inkvizíció, kolostor.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: [
            'Hasonlítsd össze a nyugati és keleti kereszténységet; mikor és miért következett be az egyházszakadás?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a bencés és a ferences rend összekeverése. A bencések kolostorban, elzártan éltek, dolgoztak, könyveket másoltak; a ferencesek a városokban prédikáltak, és adományokból éltek. A cölibátus (a pápa VII. Gergely) a katolikus papokra vonatkozik, nem minden egyházra.',
        },
        {
          kind: 'warning',
          emelt: true,
          text: 'Gyakori hiba: az egyházszakadás (1054, katolikus és ortodox) összekeverése a reformációval (16. század, katolikus és protestáns). A cölibátust se hidd a keleti egyházra is érvényesnek: ott a világi papok megházasodhatnak.',
        },
        {
          kind: 'tip',
          text: 'Az egyházi intézményrendszert mindig kösd össze a hétköznapokkal: a plébánia a hívők lelki élete, a kolostor az oktatás és másolás, a püspökség a földbirtok és a közigazgatás, a tized az egyház bevétele. Így a válaszod nem csak felsorolás lesz.',
        },
      ],
      topicMatch: [
        'egyházszervezet',
        'egyházi méltóságok',
        'szerzet',
        'egyházszakadás',
        'keresztes hadjáratok',
        'a nyugati keresztény egyház kialakulása',
        '=egyház',
        'egyháztörténet',
        '=középkor',
      ],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Ki volt a katolikus egyház feje?',
          options: ['A püspök', 'A pápa', 'A pátriárka', 'Az érsek'],
          answer: 1,
          explanation:
            'A pápa, Róma püspöke a katolikus egyház feje. A pátriárka a keleti egyházak vezetője.',
        },
        {
          question: 'Melyik szerzetesrend jelmondata az „Ora et labora” (imádkozz és dolgozz)?',
          options: ['Ferencesek', 'Domonkosok', 'Templomosok', 'Bencések'],
          answer: 3,
          explanation:
            'A bencés rend szabályát Szent Benedek alkotta meg (Monte Cassino, 529); lényege az imádság és a munka.',
        },
        {
          question: 'Mit jelent a cölibátus?',
          options: [
            'A szerzetesek szegénységi fogadalmát.',
            'Az egyház tizedszedési jogát.',
            'A papok nőtlenségét.',
            'A püspökök kinevezésének jogát.',
          ],
          answer: 2,
          explanation:
            'A cölibátus a papi nőtlenség előírása; VII. Gergely vitte keresztül a katolikus egyházban.',
        },
        {
          question: 'Mi volt az invesztitúraharc tárgya?',
          options: [
            'Ki nevezhet ki püspököket: a pápa vagy a császár.',
            'Ki lehet pápa.',
            'Ki szedhet tizedet.',
            'Melyik nyelv legyen a liturgia nyelve.',
          ],
          answer: 0,
          explanation:
            'Az invesztitúra a főpapok hivatalba iktatása volt; a pápa és a német-római császár vitatta, ki illeti meg ez a jog.',
        },
        {
          question: 'Mikor következett be a nyugati és a keleti egyház szakadása?',
          options: ['1054', '1077', '1215', '800'],
          answer: 0,
          explanation:
            '1054-ben a pápa követe és a konstantinápolyi pátriárka kölcsönösen kiátkozta egymást. 1077 Canossa, 1215 Magna Charta, 800 Nagy Károly császárrá koronázása.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Invesztitúraharc', url: wiki('Invesztitúraharc') },
        { label: 'Wikipédia: Szerzetesrendek', url: wiki('Szerzetesrend') },
        { label: 'Wikipédia: Egyházszakadás (1054)', url: wiki('Nagy egyházszakadás 1054') },
      ],
    },
    {
      id: 'lovagi-egyhazi-kultura-epiteszet',
      subject: 'tortenelem',
      unitId: 'kozepkor-europa',
      title: 'Kultúra: román, gótikus és reneszánsz építészet, lovagok, egyetemek',
      level: 'kozep',
      requirement: {
        kozep: 'Román, gótikus és reneszánsz építészet – európai és magyar példák',
        emelt: 'Egyházi és lovagi kultúra, a középkori egyetemek Európában és Magyarországon',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **román stílus** (10–12. század): vastag falak, kis ablakok, **félköríves** ívek és boltozatok; erődszerű, tömör templomok.',
            'A **gótikus stílus** (12. századtól): **csúcsív**, támpillérek, **bordás boltozat**, nagy színes üvegablakok, magas tornyok; jellegzetes épülete a katedrális.',
            'A **reneszánsz** (14–16. század, Itália, **Firenze**) az ókori minták újjáélesztése, az ember és az arányok hangsúlyozása; **humanizmus**.',
            'Kolostorokban **kódexeket** másoltak; **Gutenberg** a könyvnyomtatással (15. század közepe) gyorsabbá tette a tudás terjedését.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: [
            'Lovagi kultúra: apród, fegyvernök, lovag; hűség, bátorság, védelem. Egyetemek: Bologna, Párizs, Oxford; Magyarországon Pécs (1367) és Óbuda (1395).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'román stílus',
              text: 'Kora középkori építészeti stílus: vastag falak, félköríves ablakok és boltozat.',
            },
            {
              term: 'gótikus stílus',
              text: 'A 12. századtól kialakult stílus: csúcsíves boltozat, támpillérrendszer, nagy ablakok.',
            },
            {
              term: 'reneszánsz',
              text: 'Újjászületés: az ókori kultúra felelevenítése, az ember, a természet és az arányok középpontba állítása.',
            },
            {
              term: 'kódex',
              text: 'Kézzel írt és díszített középkori könyv, főleg a kolostorokban készítették.',
            },
            {
              term: 'skolasztika',
              text: 'Az egyetemeken kialakult tudomány: a hit és az ész összeegyeztetése, logikai érvelés.',
              emelt: true,
            },
            {
              term: 'legenda',
              text: 'A szentek életét elbeszélő, tanító szándékú középkori irodalmi műfaj.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Román stílus (10–12. század)' },
        {
          kind: 'text',
          text: 'A román stílusú építészetet a **tömörség** jellemzi: **vastag kőfalak**, kis, félköríves ablakok, **félköríves ívek**, dongaboltozat és keresztboltozat, a templom alaprajza a **bazilika** vagy kereszt alakú. Az épületek erődszerűek, mert sok helyen védelmi szerepet is betöltöttek. A díszítés visszafogott, faragott fejezetek, kapuzatok.',
        },
        {
          kind: 'text',
          text: 'Magyar példák: a **jáki** apátsági templom (bencés, a román stílus egyik legszebb hazai emléke), a **pécsi** székesegyház román alapjai.',
        },
        { kind: 'heading', text: 'Gótikus stílus (12–15. század)' },
        {
          kind: 'text',
          text: 'A gótika a 12. században Franciaországban jelent meg, majd egész Európára elterjedt. Fő jegyei: **csúcsív** (hegyes ív), a súlyt a **támpillérek** és támívek vezetik le, ezért a falak vékonyak lehetnek, és nagy **ablakok** nyílhatnak, amelyeket **színes üvegablakok** (rózsaablak) díszítenek. A boltozat **bordás keresztboltozat**. A katedrálisok **felfelé törekednek**, magas tornyokkal, szobrokkal. A gótikus székesegyház a város büszkesége és gazdagságának jele volt, építéséhez a város közössége is adakozott.',
        },
        {
          kind: 'compare',
          title: 'Román és gótikus építészet',
          columns: ['Román', 'Gótikus'],
          rows: [
            { label: 'Ív', cells: ['félköríves', 'csúcsíves'] },
            {
              label: 'Fal, ablak',
              cells: ['vastag fal, kis ablakok', 'vékonyabb fal, nagy ablakok, színes üveg'],
            },
            { label: 'Hatás', cells: ['tömör, erődszerű', 'magasba törő, könnyed'] },
            {
              label: 'Példa',
              cells: [
                'jáki templom',
                'Notre-Dame (Párizs), kassai Szent Erzsébet-dóm, budai Mátyás-templom',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Reneszánsz (14–16. század)' },
        {
          kind: 'text',
          text: 'A **reneszánsz** (újjászületés) **Itáliában** született a 14–15. században, olyan gazdag kereskedővárosokban, mint **Firenze** vagy **Velence**. A művészek az **ókori** görög-római példákhoz fordultak, a középpontba az **ember** (**humanizmus**), a természet és az arányok kerültek. A reneszánsz építészet jegyei: kupola, oszlopsorok, szimmetria, arányosság, **perspektíva** a képzőművészetben.',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Leonardo da Vinci',
              text: 'Itáliai festő, tudós és feltaláló (Mona Lisa); a reneszánsz „sokoldalú zsenije”.',
            },
            {
              name: 'Gutenberg',
              text: 'Mainzi nyomdász, a 15. század közepén feltalálta a mozgatható betűs könyvnyomtatást, ami meggyorsította a tudás terjedését.',
            },
            {
              name: 'Michelangelo',
              text: 'Itáliai szobrász, festő, építész (Dávid-szobor, a Sixtus-kápolna mennyezetfreskója).',
              emelt: true,
            },
            {
              name: 'Mediciek',
              text: 'Firenzei bankárcsalád, a reneszánsz művészek és tudósok nagy támogatói.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          text: 'Magyarországon a reneszánsz **Mátyás király** udvarában terjedt el: olasz művészek dolgoztak a budai és visegrádi palotában, híres könyvtára, a **Corvina** kódexeket gyűjtött.',
        },
        { kind: 'heading', text: 'Az egyházi műveltség: kolostor, kódex' },
        {
          kind: 'text',
          text: 'A középkor elején az írás-olvasás tudása elsősorban a papságnál és a szerzeteseknél volt. A kolostorok **másolóműhelyeiben** (scriptorium) kézzel másolták a **kódexeket**: a Bibliát, imádságos könyveket, ókori műveket, szentek legendáit, gyakran díszes iniciálékkal és kis képekkel (miniatúrákkal). A nyelv a **latin** volt. Az egyház a templom képeivel, szobraival és üvegablakaival a nem tudó hívőket is tanította. A **15. század közepén** **Gutenberg** nyomtatása a kódexmásolást fokozatosan kiszorította.',
        },
        { kind: 'heading', text: 'Lovagi kultúra' },
        {
          kind: 'text',
          text: 'A **lovag** a hűbéres harcos réteg tagja volt: páncélban, lóháton harcolt, és a hűbérurától kapott birtokból vagy várban élt.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **lovag** a hűbéres harcos réteg tagja volt. A gyermekkorban a fiú **apródként** egy nagyúr udvarában nevelkedett, majd **fegyverhordozóként** (fegyvernök) szolgált, végül **lovaggá ütötték**. A lovag eszménye: **hűség** az urához, **bátorság**, a gyengék és az egyház **védelme**, a nők tisztelete (**lovagi erények**). A lovagok szórakozása a **torna** (lovagi viadal) és a vadászat volt. A lovagok **címerrel** jelezték a családjukat. A lovagi műveltség emlékei a hősénekek (például a francia **Roland-ének**) és a **trubadúrok** szerelmi költészete. A keresztes hadjáratok idején **lovagrendek** (templomos, johannita, német) alakultak, amelyek a lovagi eszményt a szerzetesi fogadalommal ötvözték.',
        },
        { kind: 'heading', text: 'A középkori egyetemek' },
        {
          kind: 'text',
          emelt: true,
          text: 'A 12–13. századtól a városokban **egyetemek** (universitas = tanárok és tanulók közössége) jöttek létre. A híres egyetemek: **Bologna** (jogtudomány), **Párizs** (teológia), **Oxford**, később még sok más. Az oktatás nyelve a **latin** volt. Az egyetem alapfokú ismeretei a **hét szabad művészet** voltak (nyelvtan, retorika, dialektika, számtan, mértan, csillagászat, zene); ezt követően lehetett a **teológiai, jogi vagy orvosi** karon tanulni. A tudományos módszer a **skolasztika**, a hit és az ész összeegyeztetése. A legnagyobb skolasztikus gondolkodó **Aquinói Szent Tamás** volt, a *Summa Theologiae* szerzője.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az Árpád-korban a magyar diákok külföldi egyetemekre (például Párizsba, Bolognába) jártak. Az első magyarországi egyetem **Pécsett** (1367, Nagy Lajos), egy másik **Óbudán** (1395, Zsigmond) alapult, de ezek tartósan nem maradtak fenn.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Képfelismerés: egy templom fényképe, melyik stílus (román, gótikus)? Indokold a jegyek alapján.',
            'Kép- vagy szövegforrás a reneszánszról: miben különbözik a középkori szemlélettől?',
            'Fogalmak: román stílus, gótikus stílus, reneszánsz, kódex, humanizmus.',
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: [
            'Lovagi eszmény bemutatása, az egyetemek kialakulása és szerepe; magyarországi egyetemek.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a stílusjegyek összekeverése. Az egyszerű megkülönböztetés: **félköríves = román**, **csúcsíves = gótikus**. A reneszánsz nem a középkor része, hanem a kora újkor felé vezető átmenet; a reneszánsz idején újra a félköríves ív és a szimmetria jelent meg. A másik hiba: a lovagot a hűbérúrral azonosítani: a lovag a hűbéres harcos, nem szükségképpen nagybirtokos.',
        },
        {
          kind: 'tip',
          text: 'Az építészeti kérdésnél az **ív**, a **fal** és az **ablak** három szempontot nézd. Magyar példát is mondj: Ják (román), kassai dóm vagy budai Mátyás-templom (gótika), Visegrád és Buda Mátyás idején (reneszánsz).',
        },
      ],
      topicMatch: ['lovagi erkölcs', 'lovagkor', 'késő középkor'],
      cards: { subject: 'tortenelem', era: 'kozepkor' },
      quiz: [
        {
          question: 'Melyik stílus jellemzője a csúcsív és a támpillér?',
          options: ['Román', 'Reneszánsz', 'Barokk', 'Gótikus'],
          answer: 3,
          explanation:
            'A csúcsív, a támpillér és a bordás boltozat a gótika jellemzői. A román stílus félköríves ívű.',
        },
        {
          question: 'Melyik város volt a reneszánsz egyik legfontosabb itáliai központja?',
          options: ['Firenze', 'Konstantinápoly', 'Lübeck', 'Poitiers'],
          answer: 0,
          explanation:
            'A reneszánsz Itáliában, gazdag kereskedővárosokban, elsősorban Firenzében bontakozott ki.',
        },
        {
          question: 'Mi volt a kódex?',
          options: [
            'Nyomtatott könyv.',
            'Kézzel írt, díszített középkori könyv.',
            'A városi tanács jegyzőkönyve.',
            'A lovagok erkölcsi szabályzata.',
          ],
          answer: 1,
          explanation:
            'A kódexeket a kolostorok műhelyeiben másolták kézzel. A nyomtatást Gutenberg a 15. század közepén találta fel.',
        },
        {
          question: 'Ki találta fel a mozgatható betűs könyvnyomtatást Európában?',
          options: ['Leonardo da Vinci', 'Gutenberg', 'Szent Benedek', 'Michelangelo'],
          answer: 1,
          explanation: 'Gutenberg mainzi nyomdász a 15. század közepén.',
        },
        {
          question: 'Mi volt a skolasztika?',
          options: [
            'A lovagi tornák szabályzata.',
            'A hit és az ész összeegyeztetésére törekvő egyetemi tudomány.',
            'A gótikus templomok építési módszere.',
            'A kolostorok napirendje.',
          ],
          answer: 1,
          explanation:
            'A skolasztika az egyetemeken kialakult tudományos módszer, jelentős képviselője Aquinói Szent Tamás.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Román stílus', url: wiki('Román stílus építészet') },
        { label: 'Wikipédia: Gótika', url: wiki('Gótikus építészet') },
        { label: 'Wikipédia: Reneszánsz', url: wiki('Reneszánsz') },
      ],
    },
  ],
};

export default unit;
