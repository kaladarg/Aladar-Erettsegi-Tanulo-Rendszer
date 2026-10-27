import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 9 (Az Európán kívüli kontinensek földrajza). */
const unit: GuideUnit = {
  id: 'kontinensek',
  subject: 'foldrajz',
  order: 90,
  title: 'Az Európán kívüli kontinensek földrajza',
  requirementRef: '9.1–9.5 Az Európán kívüli kontinensek',
  intro:
    'Ázsia, Amerika, Afrika, Ausztrália és a sarkvidékek legfontosabb természeti és társadalmi-gazdasági jellemzői, a vizsgán leggyakrabban kérdezett országokkal.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (9. témakör). A topográfiai nevek teljes listáját a követelmény 1–5. része tartalmazza. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'azsia-foldrajza',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Ázsia: Kína, India, Japán, Délnyugat- és Délkelet-Ázsia',
      level: 'kozep',
      requirement: {
        kozep:
          'Ázsia nagytájai és éghajlata (monszun); Kína, India, Japán, Délnyugat- és Délkelet-Ázsia társadalmi-gazdasági jellemzői.',
        emelt:
          'A fejlődési utak összehasonlítása, a gyors gazdasági növekedés okai és következményei.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Ázsia a legnagyobb és a legnépesebb földrész; itt van a Föld legmagasabb hegye, a **Mount Everest** (kb. 8850 m, Himalája).',
            'Dél- és Kelet-Ázsia éghajlatát a **monszun** határozza meg: nyáron a tenger felől csapadékos, télen a szárazföld felől száraz szél fúj.',
            '**Kína** és **India** népessége egyenként kb. 1,4 milliárd fő; India 2023 körül megelőzte Kínát.',
            '**Kína** az 1978 utáni gazdasági nyitás óta a világ egyik vezető ipari hatalma.',
            '**Japán** szigetország, gyakori a földrengés; fejlett ipara nyersanyag-behozatalra épül.',
            '**Délnyugat-Ázsia** (Perzsa-öböl) a világ legnagyobb kőolajkészletének térsége.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A **monszun** oka a szárazföld és a tenger eltérő felmelegedése: nyáron a felmelegedő szárazföld fölött alacsony a légnyomás, ezért a tenger felől nedves levegő áramlik be. A monszunvidékeken a **rizstermesztés** jellemző, és itt él a Föld népességének nagy része.',
        },
        {
          kind: 'compare',
          title: 'Kína és India',
          columns: ['Kína', 'India'],
          rows: [
            { label: 'Népesség', cells: ['kb. 1,4 milliárd, öregedő', 'kb. 1,4 milliárd, fiatal'] },
            {
              label: 'Gazdaság',
              cells: [
                'ipari termelés, export ("a világ gyára")',
                'szolgáltatások, informatika, mezőgazdaság',
              ],
            },
            {
              label: 'Nyitás',
              cells: ['1978-tól piaci reformok', 'az 1990-es évektől liberalizáció'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Délkelet-Ázsia országai (például Vietnam, Thaiföld, Malajzia, Indonézia) olcsó munkaerejükkel sok külföldi befektetést vonzanak; regionális szervezetük az **ASEAN**. Az **újonnan iparosodott országok** közé tartozik Dél-Korea, Tajvan, Szingapúr és Hongkong.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'A monszunt mindig a légnyomáskülönbséggel magyarázd: nyáron a szárazföld felé, télen a tenger felé fúj a szél.',
        },
      ],
      topicMatch: ['ázsia', 'kína', 'india'],
      quiz: [
        {
          question: 'Mi okozza a monszunt?',
          options: [
            'a Föld tengely körüli forgása egyedül',
            'a szárazföld és a tenger eltérő felmelegedése',
            'a vulkánkitörések',
            'a tengeráramlások hiánya',
          ],
          answer: 1,
          explanation:
            'A szárazföld és a tenger eltérően melegszik, ez évszakosan változó légnyomáskülönbséget és szelet okoz.',
        },
        {
          question: 'Melyik a Föld legmagasabb hegye?',
          options: ['Kilimandzsáró', 'Mount Everest', 'Aconcagua', 'Mont Blanc'],
          answer: 1,
          explanation: 'A Mount Everest a Himalájában van.',
        },
        {
          question: 'Melyik térségben van a Föld legnagyobb kőolajkészlete?',
          options: ['Perzsa-öböl térsége', 'Japán', 'Délkelet-Ázsia', 'Szibéria déli része'],
          answer: 0,
          explanation:
            'A Perzsa-öböl környéki országok rendelkeznek a legnagyobb ismert kőolajkészlettel.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Ázsia', url: wiki('Ázsia') },
        { label: 'Wikipédia: Monszun', url: wiki('Monszun') },
      ],
    },
    {
      id: 'amerika-foldrajza',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Amerika: az Egyesült Államok, Kanada és Latin-Amerika',
      level: 'kozep',
      requirement: {
        kozep:
          'Amerika felszíne és éghajlata; az Egyesült Államok gazdasága és térségei, Kanada, Latin-Amerika (Brazília, Mexikó) jellemzői.',
        emelt: 'A gazdasági erőterek és a fejlettségi különbségek okai Amerikában.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A nyugati partok mentén húzódnak a fiatal gyűrthegységek (**Kordillerák**, **Andok**), keleten régebbi hegységek és nagy síkságok vannak.',
            'Az **Amazonas** a Föld legbővizűbb folyója, vidéke a legnagyobb trópusi esőerdő.',
            'Az **Egyesült Államok** a világ legnagyobb gazdaságainak egyike: fejlett szolgáltatások, csúcstechnológia (Szilícium-völgy), nagy üzemű mezőgazdaság.',
            '**Latin-Amerika** országai (például Brazília, Mexikó) fejlődő vagy feltörekvő gazdaságok, nagy belső különbségekkel.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Az Egyesült Államok gazdasági súlypontja a 20. század második felétől az északkeleti ipari térségből a déli és nyugati "Napfény-övezet" felé tolódott, ahol a csúcstechnológia, a repülőgépgyártás és a szolgáltatások fejlődtek. A mezőgazdaság övezetes: északon búza, középen kukorica és szója, délen gyapot és citrusfélék.',
        },
        {
          kind: 'text',
          text: '**Brazília** Latin-Amerika legnagyobb országa: vasérc, cukornád, kávé, szója; az Amazonas-medence erdőirtása világméretű környezeti kérdés. **Mexikó** az USMCA-egyezmény tagja, sok összeszerelő üzem működik az amerikai határ mentén.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Amerikánál gyakori a kérdés a hegységek koráról: nyugaton fiatal (Andok, Kordillerák), keleten idős (Appalache, Brazil-felföld).',
        },
      ],
      topicMatch: ['amerika', 'egyesült államok'],
      quiz: [
        {
          question: 'Melyik a Föld legbővizűbb folyója?',
          options: ['Nílus', 'Mississippi', 'Amazonas', 'Jangce'],
          answer: 2,
          explanation: 'Az Amazonas viszi a legtöbb vizet a világtengerbe.',
        },
        {
          question: 'Hol húzódnak Amerika fiatal gyűrthegységei?',
          options: [
            'a keleti partok mentén',
            'a nyugati partok mentén',
            'a kontinens közepén',
            'csak a szigeteken',
          ],
          answer: 1,
          explanation:
            'A Kordillerák és az Andok a nyugati partok mentén, a lemezszegély közelében húzódnak.',
        },
        {
          question: 'Mi a Szilícium-völgy?',
          options: [
            'bányavidék',
            'a csúcstechnológia központja Kaliforniában',
            'gabonatermő vidék',
            'nemzeti park',
          ],
          answer: 1,
          explanation:
            'A kaliforniai Szilícium-völgy az informatikai és csúcstechnológiai vállalatok központja.',
        },
      ],
      sources: [
        {
          label: 'Wikipédia: Amerikai Egyesült Államok földrajza',
          url: wiki('Amerikai Egyesült Államok földrajza'),
        },
        { label: 'Wikipédia: Amazonas', url: wiki('Amazonas folyó') },
      ],
    },
    {
      id: 'afrika-ausztralia-sarkvidekek',
      subject: 'foldrajz',
      unitId: 'kontinensek',
      title: 'Afrika, Ausztrália és a sarkvidékek',
      level: 'kozep',
      requirement: {
        kozep:
          'Afrika természeti adottságai és társadalmi-gazdasági problémái; Ausztrália sajátos adottságai; a két sarkvidék összehasonlítása.',
        emelt:
          'A fejlődési problémák okai Afrikában; a sarkvidékek szerepe a globális környezeti folyamatokban.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Afrikát az Egyenlítő kettészeli, ezért övezetessége szimmetrikus: középen esőerdő, kifelé szavanna, sivatag (északon a **Szahara**), a szélein mediterrán terület.',
            'A **Száhel** övezetben súlyos az **elsivatagosodás**.',
            'Sok afrikai ország gazdasága **nyersanyag-exportra** épül, a népesség gyorsan nő.',
            '**Ausztrália** belseje száraz; gazdasága a bányászatra (vasérc, kőszén) és a mezőgazdaságra (juh, búza) épül.',
            'Az **Antarktisz** jéggel borított kontinens, az **Arktisz** jéggel fedett tenger; az Antarktisz-egyezmény (1959) békés kutatási célokra tartja fenn a déli kontinenst.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Az **elsivatagosodás** okai: a csapadék ingadozása és a túllegeltetés, a fakivágás és a túl sok művelés. A növénytakaró pusztulása után a talajt elhordja a szél, és a terület sivataggá válik.',
        },
        {
          kind: 'compare',
          title: 'A két sarkvidék',
          columns: ['Arktisz (északi)', 'Antarktisz (déli)'],
          rows: [
            {
              label: 'Alapja',
              cells: ['jéggel fedett tenger (Jeges-tenger)', 'jégtakaróval borított kontinens'],
            },
            { label: 'Hőmérséklet', cells: ['hideg', 'még hidegebb (magasabb és szárazföldi)'] },
            {
              label: 'Lakosság',
              cells: ['őslakos népek a peremeken', 'állandó lakossága nincs, csak kutatóállomások'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A gyors népességnövekedés, a gyarmati múltból örökölt egyoldalú gazdasági szerkezet és a fegyveres konfliktusok együtt nehezítik sok afrikai ország felzárkózását. A Dél-afrikai Köztársaság a kontinens legfejlettebb gazdaságai közé tartozik.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Az elsivatagosodásnál írd le a láncot: túllegeltetés és aszály → növénytakaró pusztul → talajpusztulás → sivatag.',
        },
      ],
      topicMatch: ['afrika', 'elsivatagosodás'],
      quiz: [
        {
          question: 'Melyik övezetben súlyos az elsivatagosodás Afrikában?',
          options: ['Kongó-medence', 'Száhel', 'Fokföld', 'Madagaszkár keleti partja'],
          answer: 1,
          explanation: 'A Szahara déli peremén húzódó Száhel övezetben gyors az elsivatagosodás.',
        },
        {
          question: 'Miben különbözik az Antarktisz az Arktisztól?',
          options: [
            'az Antarktisz jéggel borított kontinens, az Arktisz jéggel fedett tenger',
            'az Antarktisz melegebb',
            'az Arktiszon nincs jég',
            'az Antarktiszon őslakosok élnek',
          ],
          answer: 0,
          explanation: 'Az Antarktisz szárazföld, az Arktisz a Jeges-tenger és környéke.',
        },
        {
          question: 'Mire épül Ausztrália gazdasága?',
          options: [
            'bányászatra és mezőgazdaságra',
            'csak halászatra',
            'rizstermesztésre',
            'kőolaj-finomításra egyedül',
          ],
          answer: 0,
          explanation: 'Ausztrália jelentős vasérc- és kőszénexportőr, és nagy a juhtenyésztése.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Afrika', url: wiki('Afrika') },
        { label: 'Wikipédia: Antarktisz-egyezmény', url: wiki('Antarktisz-egyezmény') },
      ],
    },
  ],
};

export default unit;
