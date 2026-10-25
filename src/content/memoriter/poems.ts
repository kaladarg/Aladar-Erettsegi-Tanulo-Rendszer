import type { Memoriter } from './types';

/**
 * The memoriter texts the written exam's literature test can ask for (full texts and the marked
 * excerpts), as given by the list the student received. Text is kept exactly as there.
 */
export const MEMORITEREK: Memoriter[] = [
  {
    id: 'anakreon-gyulolom-azt',
    author: 'Anakreón',
    title: 'Gyűlölöm azt…',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'Gyűlölöm azt, aki telt kupa mellett, bort iszogatván,',
          'háborut emleget és lélekölő viadalt.',
        ],
      },
      {
        lines: [
          'S kedvelem azt, aki bölcs és Aphrodité meg a Múzsák',
          'szép adományairól zengve szeretni tanít.',
        ],
      },
    ],
  },
  {
    id: 'catullus-gyulolok-es-szeretek',
    author: 'Catullus',
    title: 'Gyűlölök és szeretek',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'Gyűlölök és szeretek. Miért? Nem tudom én se, de érzem:',
          'így van ez, és a szívem élve keresztre feszít.',
        ],
      },
    ],
  },
  {
    id: 'janus-pannonia-dicserete',
    author: 'Janus Pannonius',
    title: 'Pannónia dicsérete',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'Eddig Itália földjén termettek csak a könyvek,',
          'S most Pannónia is ontja a szép dalokat.',
        ],
      },
      {
        lines: [
          'Sokra becsülnek már, a hazám is büszke lehet rám,',
          'Szellemem egyre dicsőbb, s általa híres e föld!',
        ],
      },
    ],
  },
  {
    id: 'csokonai-tartozkodo-kerelem',
    author: 'Csokonai Vitéz Mihály',
    title: 'Tartózkodó kérelem',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'A hatalmas szerelemnek',
          'Megemésztő tüze bánt.',
          'Te lehetsz írja sebemnek,',
          'Gyönyörű kis tulipánt!',
        ],
      },
      {
        lines: [
          'Szemeid szép ragyogása',
          'Eleven hajnali tűz,',
          'Ajakid harmatozása',
          'Sok ezer gondot elűz.',
        ],
      },
      {
        lines: [
          'Teljesítsd angyali szókkal,',
          'Szeretőd amire kért:',
          'Ezer ambrózia csókkal',
          'Fizetek válaszodért.',
        ],
      },
    ],
  },
  {
    id: 'csokonai-a-remenyhez',
    author: 'Csokonai Vitéz Mihály',
    title: 'A Reményhez',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'Főldiekkel játszó',
          'Égi tűnemény,',
          'Istenségnek látszó',
          'Csalfa, vak Remény!',
          'Kit teremt magának',
          'A boldogtalan,',
          'S mint Védangyalának,',
          'Bókol úntalan.',
          'Síma száddal mit kecsegtetsz?',
          'Mért nevetsz felém?',
          'Kétes kedvet mért csepegtetsz',
          'Még most is belém?',
          'Csak maradj magadnak!',
          'Biztatóm valál',
          'Hittem szép szavadnak:',
          'Mégis megcsalál.',
        ],
      },
      {
        lines: [
          'Kertem nárcisokkal',
          'Végig űltetéd;',
          'Csörgő patakokkal',
          'Fáim éltetéd;',
          'Rám ezer virággal',
          'Szórtad a tavaszt',
          'S égi boldogsággal',
          'Fűszerezted azt.',
          'Gondolatim minden reggel,',
          'Mint a fürge Méh,',
          'Repkedtek a friss meleggel',
          'Rózsáim felé.',
          'Egy híjját esmértem',
          'Örömimnek még:',
          'Lilla szívét kértem;',
          'S megadá az ég.',
        ],
      },
      {
        lines: [
          'Jaj, de friss rózsáim',
          'Elhervadtanak;',
          'Forrásim, zőld fáim',
          'Kiszáradtanak;',
          'Tavaszom, vígságom',
          'Téli búra vált;',
          'Régi jó világom',
          'Méltatlanra szállt.',
          'Óh! csak Lillát hagytad volna',
          'Csak magát nekem:',
          'Most panaszra nem hajolna',
          'Gyászos énekem.',
          'Karja közt a búkat',
          'Elfelejteném,',
          'S a gyöngykoszorúkat',
          'Nem irígyleném.',
        ],
      },
      {
        lines: [
          'Hagyj el, óh Reménység!',
          'Hagyj el engemet;',
          'Mert ez a keménység',
          'Úgyis eltemet.',
          'Érzem: e kétségbe',
          'Volt erőm elhágy,',
          'Fáradt lelkem égbe,',
          'Testem főldbe vágy.',
          'Nékem már a rét hímetlen',
          'A mező kisűlt,',
          'A zengő liget kietlen,',
          'A nap éjre dűlt.',
          'Bájoló lágy trillák!',
          'Tarka képzetek!',
          'Kedv! Remények! Lillák!',
          'Isten véletek!',
        ],
      },
    ],
  },
  {
    id: 'berzsenyi-osztalyreszem',
    author: 'Berzsenyi Dániel',
    title: 'Osztályrészem',
    grade: '9-10',
    part: '1. versszak',
    stanzas: [
      {
        lines: [
          'Partra szállottam. Levonom vitorlám.',
          'A szelek mérgét nemesen kiálltam.',
          'Sok Charybdis közt, sok ezer veszélyben',
          'Izzada orcám.',
        ],
      },
    ],
  },
  {
    id: 'berzsenyi-a-kozelito-tel',
    author: 'Berzsenyi Dániel',
    title: 'A közelítő tél',
    grade: '9-10',
    part: '1. versszak',
    stanzas: [
      {
        lines: [
          'Hervad már ligetünk, s díszei hullanak.',
          'Tarlott bokrai közt sárga levél zörög.',
          'Nincs rózsás labyrinth, s balzsamos illatok',
          'Közt nem lengedez a Zephyr.',
        ],
      },
    ],
  },
  {
    id: 'berzsenyi-a-magyarokhoz',
    author: 'Berzsenyi Dániel',
    title: 'A magyarokhoz (I.)',
    grade: '9-10',
    part: '1. versszak',
    stanzas: [
      {
        lines: [
          'Romlásnak indult hajdan erős magyar!',
          'Nem látod, Árpád vére miként fajul?',
          'Nem látod a bosszús egeknek',
          'Ostorait nyomorult hazádon?',
        ],
      },
    ],
  },
  {
    id: 'kolcsey-himnusz',
    author: 'Kölcsey Ferenc',
    title: 'Himnusz',
    grade: '9-10',
    note: 'A magyar nép zivataros századaiból (Cseke, 1823. január 22.)',
    stanzas: [
      {
        lines: [
          'Isten, áldd meg a magyart',
          'Jó kedvvel, bőséggel,',
          'Nyújts feléje védő kart,',
          'Ha küzd ellenséggel;',
          'Bal sors akit régen tép,',
          'Hozz rá víg esztendőt,',
          'Megbünhödte már e nép',
          'A multat s jövendőt!',
        ],
      },
      {
        lines: [
          'Őseinket felhozád',
          'Kárpát szent bércére,',
          'Általad nyert szép hazát',
          'Bendegúznak vére.',
          'S merre zúgnak habjai',
          'Tiszának, Dunának,',
          'Árpád hős magzatjai',
          'Felvirágozának.',
        ],
      },
      {
        lines: [
          'Értünk Kunság mezein',
          'Ért kalászt lengettél,',
          'Tokaj szőlővesszein',
          'Nektárt csepegtettél.',
          'Zászlónk gyakran plántálád',
          'Vad török sáncára,',
          'S nyögte Mátyás bús hadát',
          'Bécsnek büszke vára.',
        ],
      },
      {
        lines: [
          'Hajh, de bűneink miatt',
          'Gyúlt harag kebledben,',
          'S elsújtád villámidat',
          'Dörgő fellegedben,',
          'Most rabló mongol nyilát',
          'Zúgattad felettünk,',
          'Majd töröktől rabigát',
          'Vállainkra vettünk.',
        ],
      },
      {
        lines: [
          'Hányszor zengett ajkain',
          'Ozmán vad népének',
          'Vert hadunk csonthalmain',
          'Győzedelmi ének!',
          'Hányszor támadt tenfiad',
          'Szép hazám kebledre,',
          'S lettél magzatod miatt',
          'Magzatod hamvvedre!',
        ],
      },
      {
        lines: [
          'Bújt az üldözött s felé',
          'Kard nyúl barlangjában,',
          'Szerte nézett s nem lelé',
          'Honját a hazában,',
          'Bércre hág és völgybe száll,',
          'Bú s kétség mellette,',
          'Vérözön lábainál,',
          'S lángtenger fölette.',
        ],
      },
      {
        lines: [
          'Vár állott, most kőhalom,',
          'Kedv s öröm röpkedtek,',
          'Halálhörgés, siralom',
          'Zajlik már helyettek.',
          'S ah, szabadság nem virúl',
          'A holtnak véréből,',
          'Kínzó rabság könnye hull',
          'Árvánk hő szeméből!',
        ],
      },
      {
        lines: [
          'Szánd meg isten a magyart',
          'Kit vészek hányának,',
          'Nyújts feléje védő kart',
          'Tengerén kínjának.',
          'Bal sors akit régen tép,',
          'Hozz rá víg esztendőt,',
          'Megbünhödte már e nép',
          'A múltat s jövendőt!',
        ],
      },
    ],
  },
  {
    id: 'vorosmarty-szozat',
    author: 'Vörösmarty Mihály',
    title: 'Szózat',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'Hazádnak rendületlenűl',
          'Légy híve, oh magyar;',
          'Bölcsőd az s majdan sírod is,',
          'Mely ápol s eltakar.',
        ],
      },
      {
        lines: [
          'A nagy világon e kivűl',
          'Nincsen számodra hely;',
          'Áldjon vagy verjen sors keze:',
          'Itt élned, halnod kell.',
        ],
      },
      {
        lines: [
          'Ez a föld, melyen annyiszor',
          'Apáid vére folyt;',
          'Ez, melyhez minden szent nevet',
          'Egy ezredév csatolt.',
        ],
      },
      {
        lines: [
          'Itt küzdtenek honért a hős',
          'Árpádnak hadai;',
          'Itt törtek össze rabigát',
          'Hunyadnak karjai.',
        ],
      },
      {
        lines: [
          'Szabadság! itten hordozák',
          'Véres zászlóidat,',
          'S elhulltanak legjobbjaink',
          'A hosszu harc alatt.',
        ],
      },
      {
        lines: [
          'És annyi balszerencse közt,',
          'Oly sok viszály után,',
          'Megfogyva bár, de törve nem,',
          'Él nemzet e hazán.',
        ],
      },
      {
        lines: [
          'S népek hazája, nagy világ!',
          'Hozzád bátran kiált:',
          '„Egy ezredévi szenvedés',
          'Kér éltet vagy halált!”',
        ],
      },
      {
        lines: [
          'Az nem lehet hogy annyi szív',
          'Hiába onta vért,',
          'S keservben annyi hű kebel',
          'Szakadt meg a honért.',
        ],
      },
      {
        lines: [
          'Az nem lehet, hogy ész, erő',
          'És oly szent akarat',
          'Hiába sorvadozzanak',
          'Egy átoksúly alatt.',
        ],
      },
      {
        lines: [
          'Még jőni kell, még jőni fog',
          'Egy jobb kor, mely után',
          'Buzgó imádság epedez',
          'Százezrek ajakán.',
        ],
      },
      {
        lines: [
          'Vagy jőni fog, ha jőni kell,',
          'A nagyszerű halál,',
          'Hol a temetkezés fölött',
          'Egy ország vérben áll.',
        ],
      },
      {
        lines: [
          'S a sírt, hol nemzet sűlyed el,',
          'Népek veszik körűl,',
          'S az ember millióinak',
          'Szemében gyászköny űl.',
        ],
      },
      {
        lines: [
          'Légy híve rendületlenűl',
          'Hazádnak, oh magyar:',
          'Ez éltetőd, s ha elbukál,',
          'Hantjával ez takar.',
        ],
      },
      {
        lines: [
          'A nagy világon e kivűl',
          'Nincsen számodra hely;',
          'Áldjon vagy verjen sors keze:',
          'Itt élned, halnod kell.',
        ],
      },
    ],
  },
  {
    id: 'petofi-a-banat',
    author: 'Petőfi Sándor',
    title: 'A bánat? egy nagy oceán…',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'A bánat? egy nagy oceán.',
          'S az öröm?',
          'Az oceán kis gyöngye. Talán,',
          'Mire fölhozom, össze is töröm.',
        ],
      },
    ],
  },
  {
    id: 'petofi-fa-leszek',
    author: 'Petőfi Sándor',
    title: 'Fa leszek, ha…',
    grade: '9-10',
    stanzas: [
      {
        lines: [
          'Fa leszek, ha fának vagy virága.',
          'Ha harmat vagy: én virág leszek.',
          'Harmat leszek, ha te napsugár vagy…',
          'Csak, hogy lényink egyesüljenek.',
        ],
      },
      {
        lines: [
          'Ha, leányka, te vagy a mennyország:',
          'Akkor én csillaggá változom.',
          'Ha, leányka, te vagy a pokol: (hogy',
          'Egyesüljünk) én elkárhozom.',
        ],
      },
    ],
  },
  {
    id: 'arany-toldi-esteje',
    author: 'Arany János',
    title: 'Toldi estéje',
    grade: '11-12',
    part: 'I. 1. és VI. 28. versszak',
    stanzas: [
      {
        label: 'I. ének, 1. versszak',
        lines: [
          'Őszbe csavarodott a természet feje,',
          'Dérré vált a harmat, hull a fák levele,',
          'Rövidebb, rövidebb lesz a napnak útja,',
          'És hosszúkat alszik rá, midőn megfutja.',
          'Megpihen legszélén az égi határnak',
          'S int az öregeknek: „benneteket várlak!”',
          'Megrezdűl a feje sok öregnek erre:',
          'Egymásután mégis mennek a nyughelyre.',
        ],
      },
      {
        label: 'VI. ének, 28. versszak',
        lines: [
          '„Végső rendelkezést tennék: de hát minek?',
          'Nem igen van: miről. S ha volna sincs: kinek.',
          'Nem hagyok örököst... csak egy hű cselédet:',
          'Azt kötöm szivedre - - meg a magyar népet.”',
          '„Szeresd a magyart, de ne faragd le” - szóla,',
          '„Erejét, formáját, durva kérgét róla:',
          'Mert mi haszna símább, ha jól megfaragják?',
          'Nehezebb eltörni a faragatlan fát.”',
        ],
      },
    ],
  },
  {
    id: 'ady-gog-es-magog',
    author: 'Ady Endre',
    title: 'Góg és Magóg fia vagyok én…',
    grade: '11-12',
    stanzas: [
      {
        lines: [
          'Góg és Magóg fia vagyok én',
          'Hiába döngetek kaput, falat',
          'S mégis megkérdem tőletek:',
          'Szabad-e sírni a Kárpátok alatt?',
        ],
      },
      {
        lines: [
          'Verecke híres útján jöttem én,',
          'Fülembe még ősmagyar dal rivall,',
          'Szabad-e Dévénynél betörnöm',
          'Új időknek új dalaival?',
        ],
      },
      {
        lines: [
          'Fülembe forró ólmot öntsetek,',
          'Legyek az új, az énekes Vazul,',
          'Ne halljam az élet új dalait,',
          'Tiporjatok reám durván, gazul.',
        ],
      },
      {
        lines: [
          'De addig sírva, kínban, mit se várva',
          'Mégiscsak száll új szárnyakon a dal',
          'S ha elátkozza százszor Pusztaszer,',
          'Mégis győztes, mégis új és magyar.',
        ],
      },
    ],
  },
  {
    id: 'ady-kocsi-ut-az-ejszakaban',
    author: 'Ady Endre',
    title: 'Kocsi-út az éjszakában',
    grade: '11-12',
    stanzas: [
      {
        lines: [
          'Milyen csonka ma a Hold,',
          'Az éj milyen sivatag, néma,',
          'Milyen szomoru vagyok én ma,',
          'Milyen csonka ma a Hold.',
        ],
      },
      {
        lines: [
          'Minden Egész eltörött,',
          'Minden láng csak részekben lobban,',
          'Minden szerelem darabokban,',
          'Minden Egész eltörött.',
        ],
      },
      {
        lines: [
          'Fut velem egy rossz szekér,',
          'Utána mintha jajszó szállna,',
          'Félig mély csönd és félig lárma,',
          'Fut velem egy rossz szekér.',
        ],
      },
    ],
  },
  {
    id: 'babits-jonas-imaja',
    author: 'Babits Mihály',
    title: 'Jónás imája',
    grade: '11-12',
    stanzas: [
      {
        lines: [
          'Hozzám már hűtlen lettek a szavak,',
          'vagy én lettem mint túláradt patak',
          'oly tétova céltalan parttalan',
          's ugy hordom régi sok hiú szavam',
          'mint a tévelygő ár az elszakadt',
          'sövényt jelzőkarókat gátakat.',
          'Óh bár adna a Gazda patakom',
          'sodrának medret, biztos útakon',
          'vinni tenger felé, bár verseim',
          'csücskére Tőle volna szabva rim',
          'előre kész, s mely itt áll polcomon,',
          'szent Bibliája lenne verstanom,',
          'hogy ki mint Jónás, rest szolgája, hajdan',
          'bujkálva, később mint Jónás a Halban',
          'leszálltam a kinoknak eleven',
          'süket és forró sötétjébe, nem',
          'három napra, de három hóra, három',
          'évre vagy évszázadra, megtaláljam,',
          'mielőtt egy mégvakabb és örök',
          'Cethal szájában végkép eltünök,',
          'a régi hangot s, szavaim hibátlan',
          'hadsorba állván, mint Ő sugja, bátran',
          'szólhassak s mint rossz gégémből telik',
          'és ne fáradjak bele estelig',
          'vagy míg az égi és ninivei hatalmak',
          'engedik hogy beszéljek s meg ne haljak.',
        ],
      },
    ],
  },
  {
    id: 'kanyadi-valaki-jar-a-fak-hegyen',
    author: 'Kányádi Sándor',
    title: 'Valaki jár a fák hegyén',
    grade: '11-12',
    stanzas: [
      {
        lines: [
          'valaki jár a fák hegyén',
          'ki gyújtja s oltja csillagod',
          'csak az nem fél kit a remény',
          'már végképp magára hagyott',
        ],
      },
      {
        lines: [
          'én félek még reménykedem',
          'ez a megtartó irgalom',
          'a gondviselő félelem',
          'kísért eddigi utamon',
        ],
      },
      {
        lines: [
          'valaki jár a fák hegyén',
          'vajon amikor zuhanok',
          'meggyújt-e akkor még az én',
          'tüzemnél egy új csillagot',
        ],
      },
      {
        lines: [
          'vagy engem is egyetlenegy',
          'sötétlő maggá összenyom',
          's nem villantja föl lelkemet',
          'egy megszülető csillagon',
        ],
      },
      {
        lines: [
          'valaki jár a fák hegyén',
          'mondják úr minden porszemen',
          'mondják hogy maga a remény',
          'mondják maga a félelem',
        ],
      },
    ],
  },
  {
    id: 'nagy-laszlo-ki-viszi-at-a-szerelmet',
    author: 'Nagy László',
    title: 'Ki viszi át a Szerelmet',
    grade: '11-12',
    stanzas: [
      {
        lines: [
          'Létem ha végleg lemerűlt,',
          'ki imád tücsök-hegedűt?',
          'Lángot ki lehel deres ágra?',
          'Ki feszül föl a szivárványra?',
          'Lágy hantú mezővé a szikla-',
          'csípőket ki öleli sírva?',
          'Ki becéz falban megeredt',
          'hajakat, verőereket?',
          'S dúlt hiteknek kicsoda állít',
          'káromkodásból katedrálist?',
          'Létem ha végleg lemerűlt,',
          'ki rettenti a keselyűt!',
          'S ki viszi át fogában tartva',
          'a Szerelmet a túlsó partra!',
        ],
      },
    ],
  },
];
