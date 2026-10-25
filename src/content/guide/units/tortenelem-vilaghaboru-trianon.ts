import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topics 5.1 (Az első világháború), 5.2 (Politikai változások a háború után) and 5.3 (A Párizs környéki békék). */
const unit: GuideUnit = {
  id: 'vilaghaboru-trianon',
  subject: 'tortenelem',
  order: 50,
  title: 'Az első világháború, a forradalmak és a trianoni béke',
  requirementRef: '5.1–5.3',
  intro:
    'A nagy háború és következményei: az első világháború menete, az 1918–1919-es magyarországi forradalmak és az ellenforradalom, az oroszországi bolsevik hatalomátvétel, végül a Párizs környéki békék és Trianon.',
  requirementSource:
    'A témák, fogalmak, személyek, évszámok és helyszínek az érettségi részletes vizsgakövetelményeinek 5. témaköréből (A két világháború kora) valók, az 5.1–5.3 pontokhoz tartozó részek. Ami emelt szintű, azt külön jelöljük.',
  requirements: {
    terms: {
      kozep: [
        'villámháború',
        'front',
        'állóháború',
        'hátország',
        'hadigazdaság',
        'hadifogság',
        'antant',
        'központi hatalmak',
        'Függetlenségi Párt',
        'Magyarországi Szociáldemokrata Párt',
        'Kommunisták Magyarországi Pártja (KMP)',
        'tanácsköztársaság',
        'vörösterror',
        'Lenin-fiúk',
        'ellenforradalom',
        'fehér különítményes megtorlások',
        '„vörös térkép”',
        'kisantant',
        'jóvátétel',
        'Népszövetség',
        'kisebbségvédelem',
        'revízió',
        'bolsevik',
        'szovjet',
      ],
      emelt: [
        'Schlieffen-terv',
        'örmény népirtás',
        'jegyrendszer',
        'Magyar Nemzeti Tanács',
        'pacifizmus',
        'demarkációs vonal',
        'népbiztosok',
        'mensevik',
      ],
    },
    people: {
      kozep: [
        'II. Vilmos',
        'II. Miklós',
        'IV. Károly',
        'Wilson',
        'Clemenceau',
        'Károlyi Mihály',
        'Kun Béla',
        'Horthy Miklós',
        'Apponyi Albert',
        'Lenin',
      ],
      emelt: ['Hindenburg', 'Szamuely Tibor', 'Prónay Pál', 'Trockij', 'Beneš'],
    },
    dates: {
      kozep: [
        '1914–1918 az első világháború',
        '1917 a bolsevik hatalomátvétel',
        '1918. október 31. forradalom Magyarországon',
        '1919. március–augusztus a tanácsköztársaság',
        '1920. június 4. a trianoni békediktátum',
      ],
      emelt: [
        '1914. június 28. a szarajevói merénylet',
        '1914. július 28. az első világháború kirobbanása',
        '1915 gorlicei áttörés',
        '1915–1917 az isonzói csaták',
        '1916 Románia belépése az antant oldalán',
        'verduni „vérszivattyú”',
        '1917 az Amerikai Egyesült Államok belépése a világháborúba',
        '1918. november 3. padovai fegyverszünet',
        '1919 a versailles-i béke',
      ],
    },
    places: {
      kozep: [
        'Szarajevó',
        'Doberdó',
        'Románia',
        'Szerbia',
        'Olaszország',
        'Kárpátalja',
        'Felvidék',
        'Délvidék',
        'Burgenland',
        'Csehszlovákia',
        'Jugoszlávia',
        'Ausztria',
        'trianoni Magyarország',
      ],
      emelt: ['Przemyśl', 'Otranto', 'Balassagyarmat'],
    },
  },
  pages: [
    {
      id: 'elso-vilaghaboru',
      subject: 'tortenelem',
      unitId: 'vilaghaboru-trianon',
      title: 'Az első világháború menete és jellemzői',
      level: 'kozep',
      requirement: {
        kozep: 'A háború jellemzői, hadviselő felek, Magyarország részvétele a háborúban',
        emelt: 'A világháború kirobbanása, a nyugati front, tengeri hadviselés',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az első világháború **1914-től 1918-ig** tartott; az első olyan háború volt, amely a gazdaságot és a társadalmat is teljesen mozgósította.',
            'Két tömb állt szemben: az **antant** (Franciaország, Nagy-Britannia, Oroszország; később Olaszország, Románia, az USA) és a **központi hatalmak** (Németország, az Osztrák–Magyar Monarchia; később az Oszmán Birodalom és Bulgária).',
            'A háború a **szarajevói merénylettel** (1914. június 28.) kezdődött, a Monarchia **július 28-án** üzent hadat Szerbiának.',
            'A tervezett gyors győzelem helyett a nyugati fronton **állóháború** alakult ki: lövészárkok, gépfegyverek, tüzérség, óriási veszteségek.',
            'A hadigazdaság és a **hátország** mozgósítása döntött: aki jobban bírta az erőforrásokat, nyert. **1917-ben** az USA belépése és az orosz összeomlás fordította meg a helyzetet.',
            'Magyarország a Monarchia részeként vett részt a háborúban; a magyar katonák a keleti, a szerb és az olasz fronton harcoltak.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'antant',
              text: 'Az Anglia, Franciaország és Oroszország által alkotott szövetség, amelyhez később mások is csatlakoztak.',
            },
            {
              term: 'központi hatalmak',
              text: 'Németország és az Osztrák–Magyar Monarchia szövetsége, amelyhez az Oszmán Birodalom és Bulgária is csatlakozott.',
            },
            {
              term: 'villámháború',
              text: 'A gyors, néhány hét alatti győzelemre épülő hadviselési terv: lerohanni az ellenséget, mielőtt mozgósítani tudna.',
            },
            {
              term: 'állóháború',
              text: 'A frontvonal hosszú időre megmerevedik, a felek lövészárkokban szemben állnak egymással, és csak nagy veszteségek árán nyernek kevés területet.',
            },
            {
              term: 'front, hátország',
              text: 'A front a harcoló katonák vonala; a hátország a polgári lakosság, amely a háborút termeléssel és nélkülözéssel is viseli.',
            },
            {
              term: 'hadigazdaság',
              text: 'Az állam által irányított gazdaság: a termelést, a fogyasztást és a munkaerőt a hadsereg ellátásának rendelik alá.',
            },
            {
              term: 'hadifogság',
              text: 'A katona fogságba esése; az első világháborúban katonák milliói kerültek fogságba.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Okok és kitörés' },
        {
          kind: 'text',
          text: 'A 20. század elejére a nagyhatalmak között éles ellentétek halmozódtak fel: gyarmati és gazdasági vetélkedés, fegyverkezési verseny, a francia–német ellentét (Elzász–Lotaringia), a Balkán feletti orosz–osztrák–magyar rivalizálás és a nemzeti mozgalmak. Európa két katonai szövetségre szakadt: az **antantra** és a **központi hatalmakra**.',
        },
        {
          kind: 'text',
          text: '**1914. június 28-án Szarajevóban** a szerb nacionalista Gavrilo Princip lelőtte Ferenc Ferdinánd trónörököst és feleségét. A Monarchia Németország támogatásával ultimátumot küldött Szerbiának, majd **július 28-án** hadat üzent neki. A szövetségi rendszer láncreakciót indított el: Oroszország Szerbia mellé állt, Németország hadat üzent Oroszországnak és Franciaországnak, Nagy-Britannia pedig a belga semlegesség német megsértése miatt lépett be.',
        },
        { kind: 'heading', text: 'A hadviselő felek' },
        {
          kind: 'compare',
          title: 'A két tábor',
          columns: ['Antant', 'Központi hatalmak'],
          rows: [
            {
              label: 'Alapító nagyhatalmak',
              cells: [
                'Franciaország, Nagy-Britannia, Oroszország',
                'Németország, Osztrák–Magyar Monarchia',
              ],
            },
            {
              label: 'Később csatlakozott',
              cells: [
                'Olaszország (1915), Románia (1916), az USA (1917)',
                'Oszmán Birodalom (1914), Bulgária (1915)',
              ],
            },
            {
              label: 'Államfők (példa)',
              cells: [
                'II. Miklós cár, Wilson amerikai elnök',
                'II. Vilmos német császár, Ferenc József, majd IV. Károly',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A háború jellemzői' },
        {
          kind: 'text',
          text: 'A háború **totális** jellegű volt: a gazdaság egésze a frontot szolgálta. A hadiüzemek hadianyagot gyártottak, a férfiak helyére nők léptek a gyárakba és a földekre, az állam rekvirált (kényszerrel begyűjtött), **hadikölcsönt** íratott, és élelmiszer-, ruházati jegyeket vezetett be. A **hátországban** éhezés, drágulás és egyre nagyobb elégedetlenség lett. A háborút propaganda és cenzúra kísérte.',
        },
        {
          kind: 'keypoints',
          title: 'Új fegyverek',
          items: [
            'gépfegyver, nehéztüzérség, mérges gáz',
            'harckocsi (tank) és repülőgép',
            'tengeralattjáró (a tengeri hadviselésben)',
          ],
        },
        { kind: 'heading', text: 'Magyarország a háborúban' },
        {
          kind: 'text',
          text: 'Magyarország az Osztrák–Magyar Monarchia részeként lépett be a háborúba, a magyar katonák a Monarchia közös hadseregében és a honvédségben szolgáltak. Harcoltak a **szerb**, az orosz (**keleti**), 1915-től az **olasz** (isonzói), 1916-tól a **román** fronton is. A veszteség óriási volt: a magyar halottak számát a becslések kb. 530 ezer és 660 ezer közé teszik, és sok százezer magyar katona került **hadifogságba**, főleg Oroszországban és Olaszországban. A hátország ellátása romlott, nőtt az infláció, a háború végére a lakosság a békét követelte.',
        },
        {
          kind: 'timeline',
          items: [
            { date: '1914. június 28.', text: 'A szarajevói merénylet.' },
            { date: '1914. július 28.', text: 'A Monarchia hadat üzen Szerbiának.' },
            {
              date: '1915',
              text: 'Olaszország az antant oldalán belép; megkezdődnek az isonzói csaták.',
            },
            {
              date: '1916. november',
              text: 'Meghal Ferenc József; IV. Károly lép a trónra.',
            },
            { date: '1917', text: 'Az USA belép a háborúba, Oroszországban forradalom tör ki.' },
            {
              date: '1918. november 3.',
              text: 'Padovai fegyverszünet: a Monarchia fegyverletétele az olasz fronton.',
              emelt: true,
            },
          ],
        },
        { kind: 'heading', text: 'A nyugati front és a tengeri hadviselés', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'A német **Schlieffen-terv** villámháborút tervezett: előbb Belgiumon át gyors győzelem Franciaország felett, aztán fordulat Oroszország ellen. A terv **1914 őszén a Marne-nál** elakadt, a nyugati front megmerevedett és hosszú **állóháborúvá** vált. A nagy emberáldozattal járó csaták közül a legismertebb az **1916-os verduni** csata: a németek a francia erődváros ellen rohamoztak, de a harc ezreket őrölt fel, ezért nevezik **„vérszivattyúnak”**. A **Somme-nál** (1916) a britek próbáltak áttörni, hasonlóan nagy veszteséggel és csekély eredménnyel.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **tengeri hadviselésben** a brit flotta blokád alá vette Németországot, ami a hátország éhezéséhez vezetett. A németek **korlátlan tengeralattjáró-háborúval** válaszoltak, amely semleges hajókat is érintett; ez, és az amerikai hajókat is érő támadások hozzájárultak ahhoz, hogy az **USA 1917-ben** belépett a háborúba az antant oldalán. Az antant az Adria déli kijáratát, az **Otrantói-szorost** zárta le a Monarchia flottája előtt.',
        },
        { kind: 'heading', text: 'Keleti, olasz és balkáni front', emelt: true },
        {
          kind: 'text',
          emelt: true,
          text: 'A keleti fronton **Hindenburg** tábornok vezette német csapatok az orosz sereget már 1914 augusztusában megverték Tannenbergnél. **Przemyśl** erődjét az oroszok 1914–15 telén körülzárták, 1915 márciusában kapitulált. 1915 tavaszán a központi hatalmak a **gorlicei áttöréssel** visszavonulásra kényszerítették az oroszokat. 1915 végére a Monarchia és szövetségesei megszállták Szerbiát. **Olaszország** 1915 májusában az antant oldalán lépett be, a **Doberdó**-fennsík körül zajló **isonzói csatákban** (1915–1917) sok magyar katona is harcolt. **Románia 1916 augusztusában** belépett az antant oldalán és betört Erdélybe, de a központi hatalmak ellentámadása megállította őket.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **örmény népirtás** (1915–1916): az Oszmán Birodalom a háború leple alatt az örmény lakosság tömeges kitelepítését és legyilkolását hajtotta végre; ez a 20. század első nagy népirtása.',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Schlieffen-terv',
              text: 'A német vezérkar villámháborús terve: gyors támadás nyugaton Franciaország ellen, majd az erők átcsoportosítása Oroszország ellen.',
              emelt: true,
            },
            {
              term: 'jegyrendszer',
              text: 'A hadigazdaságban az élelmiszer és más cikkek korlátozott, jegyek ellenében történő kiosztása.',
              emelt: true,
            },
            {
              term: 'pacifizmus',
              text: 'A háborút elutasító eszme és mozgalom; a háború elhúzódása erősítette.',
              emelt: true,
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: a hadviselő felek besorolása (antant vagy központi hatalmak), frontok és fontos helyszínek (Szarajevó, Doberdó).',
            'Fogalom azonosítása leírásból: állóháború, hátország, hadigazdaság, villámháború.',
            'Forrás: háborús plakát, hadikölcsön-hirdetés, jegy; mit mutat a hátország helyzetéről?',
            'Emelt: a nyugati front jellemzői, a tengeri hadviselés és az USA belépésének okai.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az antantot és a központi hatalmakat összekeverni, vagy Olaszországot a központi hatalmak mellé tenni. Olaszország a Németországgal és a Monarchiával kötött szövetség ellenére 1915-ben az antant oldalán lépett be.',
        },
        {
          kind: 'tip',
          text: 'Esszében a háború új vonásait mindig tedd mellé: totális jelleg (hadigazdaság, hátország), új fegyverek, állóháború. Ezek egyszerre magyarázzák a hatalmas veszteségeket és azt, hogy miért lett a háború átfogó társadalmi válság.',
        },
      ],
      topicMatch: ['első világháború', 'hadigazdaság'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Melyik ország tartozott az antant alapító nagyhatalmai közé?',
          options: ['Németország', 'Franciaország', 'Bulgária', 'Oszmán Birodalom'],
          answer: 1,
          explanation:
            'Az antant alapító tagjai Franciaország, Nagy-Britannia és Oroszország voltak; a többi felsorolt ország a központi hatalmak oldalán harcolt.',
        },
        {
          question: 'Mikor üzent hadat a Monarchia Szerbiának?',
          options: [
            '1914. június 28.',
            '1914. augusztus 1.',
            '1914. július 28.',
            '1915. május 23.',
          ],
          answer: 2,
          explanation:
            'A szarajevói merénylet június 28-án volt, a hadüzenet 1914. július 28-án követte; ezt tekintjük a háború kirobbanásának.',
        },
        {
          question: 'Mit jelent az állóháború?',
          options: [
            'Gyors előrenyomulás páncélos egységekkel.',
            'A frontvonal megmerevedik, a felek lövészárkokban állnak egymással szemben.',
            'A hadviselő felek fegyverszünetet kötnek.',
            'A háború csak tengeren folyik.',
          ],
          answer: 1,
          explanation:
            'Állóháborúban a frontvonal hosszú időre megmerevedik, mint 1914 őszétől a nyugati fronton.',
        },
        {
          question: 'Mi jellemezte a hátországot az első világháborúban?',
          options: [
            'A háború nem érintette a polgári lakosságot.',
            'A termelés a hadsereg igényeit szolgálta, nőtt a nélkülözés és a drágulás.',
            'A nők kikerültek a munkából.',
            'A gazdaság a békeidőszak szabályai szerint működött.',
          ],
          answer: 1,
          explanation:
            'A hadigazdaságban a termelést és a fogyasztást az állam irányította; a lakosság nélkülözött, a nők a férfiak helyére léptek.',
        },
        {
          question: 'Mi volt a verduni csata beceneve?',
          options: ['villámháború', 'a gőzgép csatája', 'vérszivattyú', 'a három császár csatája'],
          answer: 2,
          explanation:
            '1916-ban Verdunnél a hatalmas veszteségek miatt „vérszivattyúnak” nevezték a csatát.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Az első világháború', url: wiki('Az első világháború') },
        { label: 'Wikipédia: Szarajevói merénylet', url: wiki('Szarajevói merénylet') },
        { label: 'Wikipédia: Schlieffen-terv', url: wiki('Schlieffen-terv') },
      ],
    },
    {
      id: 'forradalmak-ellenforradalom-1918-1920',
      subject: 'tortenelem',
      unitId: 'vilaghaboru-trianon',
      title: 'Forradalmak és ellenforradalom Magyarországon 1918–1920',
      level: 'kozep',
      requirement: {
        kozep:
          'A forradalmi átalakulás kísérletei (tanácsköztársaság), ellenforradalom Magyarországon 1918–1920-ban',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**1918. október 31.**: az **őszirózsás forradalom** győzött Budapesten, **Károlyi Mihály** lett a miniszterelnök. Ez a polgári demokratikus átalakulás kísérlete.',
            'A **belgrádi fegyverszünet** (1918. november) után az antant megszálló csapatai, majd a szomszéd államok hadseregei elfoglaltak magyar területeket, a kormány nem tudta megvédeni az országot.',
            '**1919. március 21.**: a **Vix-jegyzék** miatt lemondott Károlyi, a szociáldemokraták és a kommunisták egyesültek, kikiáltották a **tanácsköztársaságot** (**Kun Béla**).',
            'A tanácsköztársaság **1919. augusztus 1-jéig** állt fenn: diktatúra, államosítás, **vörösterror**, majd a román hadsereg előtt összeomlott.',
            'Az **ellenforradalom** Szegeden és Bécsben szerveződött, a **Nemzeti Hadsereg** (**Horthy Miklós**) 1919 novemberében bevonult Budapestre. A **fehér különítményesek** terrorja és 1920. március 1. Horthy kormányzóvá választása zárta a korszakot.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            {
              date: '1918. október 23.',
              text: 'Megalakul a Magyar Nemzeti Tanács (Károlyi Mihály).',
              emelt: true,
            },
            {
              date: '1918. október 31.',
              text: 'Győz a forradalom, Károlyi Mihály miniszterelnök.',
            },
            {
              date: '1918. november 13.',
              text: 'Belgrádi fegyverszüneti egyezmény (demarkációs vonal).',
              emelt: true,
            },
            { date: '1918. november 16.', text: 'Kikiáltják a köztársaságot.' },
            { date: '1918. november 24.', text: 'Megalakul a Kommunisták Magyarországi Pártja.' },
            { date: '1919. március 21.', text: 'A Tanácsköztársaság kikiáltása.' },
            { date: '1919. augusztus 1.', text: 'A Tanácsköztársaság bukása.' },
            { date: '1919. november 16.', text: 'A Nemzeti Hadsereg bevonul Budapestre.' },
            { date: '1920. március 1.', text: 'Horthy Miklóst kormányzóvá választják.' },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Az őszirózsás forradalom (1918)' },
        {
          kind: 'text',
          text: 'A háború végére a hátország kimerült, a front felbomlott, a Monarchia szétesett: a nemzetiségek önálló államokat hirdettek ki (Csehszlovákia 1918. október 28-án). **Károlyi Mihály Függetlenségi Pártja**, a **Magyarországi Szociáldemokrata Párt** és a polgári radikálisok **1918. október 23-án** megalakították a **Magyar Nemzeti Tanácsot**, amelynek programja a háború befejezése, a teljes függetlenség és demokratikus reformok volt. Október 28-án a pesti tüntetők és a rendőrök összecsaptak a Lánchídnál. **1918. október 31-én** a katonák és a munkások átvették a hatalmat; a király megbízottja Károlyit nevezte ki miniszterelnökké, és a forradalom estéjén meggyilkolták **Tisza Istvánt**. A forradalmárok az **őszirózsát** viselték, ezért vértelen fordulatot **őszirózsás forradalomnak** hívjuk.',
        },
        {
          kind: 'text',
          text: '1918. november 16-án kikiáltották a **köztársaságot**. A kormány terve volt a földreform, a választójog kiszélesítése és a szabadságjogok biztosítása, ezek zömmel nem valósultak meg. A hadsereget leszerelték, így az ország védtelenné vált.',
        },
        { kind: 'heading', text: 'A megszállások és a belgrádi fegyverszünet' },
        {
          kind: 'text',
          text: 'A **belgrádi fegyverszüneti egyezmény** (1918. november 13.) a francia Franchet d’Espèrey tábornokkal született. Az egyezményben **demarkációs vonalat** húztak, amelyen túlra a magyar csapatoknak ki kellett vonulniuk. A román, a szerb és a csehszlovák hadsereg ezt a vonalat nem tekintette véglegesnek, és tovább nyomult. **1918. december 1-jén** a gyulafehérvári román nemzetgyűlés Erdély egyesítését mondta ki Romániával. Károlyi nem kapott az antanttól segítséget, mert a vesztes oldal képviselőjeként kezelték.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **Vix-jegyzék** (1919. március 20.) Vyx alezredes jegyzéke volt: újabb demarkációs vonalat és a magyar csapatok kivonását követelte a Tiszántúl egy részéről. A kormány ezt elfogadhatatlannak tartotta. A demarkációs vonalak csak ideiglenes határt jelentettek, a végleges határokról a békekonferencia döntött.',
        },
        { kind: 'heading', text: 'A tanácsköztársaság (1919. március 21. – augusztus 1.)' },
        {
          kind: 'text',
          text: '**Kun Béla** a világháború alatt orosz hadifogságba esett, ott csatlakozott a bolsevikokhoz, hazatérve megszervezte a **Kommunisták Magyarországi Pártját (KMP)** (1918. november 24.). A kormány 1919 februárjában letartóztatta a vezetőket. A Vix-jegyzék miatt **Károlyi lemondott**, a szociáldemokraták a bebörtönzött kommunistákkal megegyeztek, és **1919. március 21-én** kikiáltották a **tanácsköztársaságot**. A Forradalmi Kormányzótanács névleges elnöke Garbai Sándor volt, a valódi vezető a külügyi népbiztos **Kun Béla**.',
        },
        {
          kind: 'keypoints',
          title: 'A tanácsköztársaság intézkedései',
          items: [
            '**Államosítás**: ipari üzemek, bankok, nagybirtokok, lakások. A nagybirtokot nem osztották fel, hanem állami irányítású termelőszövetkezeteket szerveztek, ezért a parasztság csalódott.',
            '**Diktatúra**: az ellenzéki lapokat betiltották, a gyűlölt réteg (nagybirtokosok, papság, polgárság) jogait korlátozták; a tanácsok (munkástanácsok) kerültek a helyi hatalom élére.',
            '**Vörösterror**: forradalmi törvényszékek és a **Lenin-fiúk** nevű karhatalmi különítmény lépett fel az ellenforradalmárok ellen; a terror során több száz ember halt meg.',
            '**Vörös Hadsereg**: sorozás útján szervezték meg, hogy megvédje az országot.',
          ],
        },
        {
          kind: 'text',
          text: 'A **Vörös Hadsereg** 1919 tavaszán sikeres északi hadjáratot vívott a csehszlovákok ellen: visszafoglalta a Felvidék egy részét. Az antant (Clemenceau) a Felvidék kiürítését követelte, ígérve, hogy a románok is kivonulnak. A vörös csapatok kivonultak, a románok azonban nem. **1919 júliusában** a román hadsereg a Tiszánál támadott, a Vörös Hadsereg szétesett, **Kun Béla** a vezetőkkel elmenekült Ausztriába. A románok **augusztus 4-én** Budapestre vonultak.',
        },
        {
          kind: 'compare',
          title: 'Károlyi-kormány és tanácsköztársaság',
          columns: [
            'Károlyi-kormány (1918. okt.–1919. márc.)',
            'Tanácsköztársaság (1919. márc.–aug.)',
          ],
          rows: [
            {
              label: 'Rendszer',
              cells: ['polgári demokrácia, köztársaság', 'proletárdiktatúra, tanácsrendszer'],
            },
            { label: 'Vezető', cells: ['Károlyi Mihály', 'Kun Béla (a Kormányzótanács)'] },
            {
              label: 'Gazdaság',
              cells: [
                'magántulajdon, földreform terve',
                'államosítás, nagybirtokok állami kezelése',
              ],
            },
            {
              label: 'Fő törekvés',
              cells: [
                'béke, az antanthoz való közeledés',
                'a bolsevik Oroszországra támaszkodva védekezés, világforradalom',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A Kormányzótanács tagjait **népbiztosoknak** nevezték (a minisztereknek megfelelően). A terror irányítói közül a legismertebb **Szamuely Tibor** volt, aki a Lenin-fiúk vezetői közé tartozott. A népbiztosok egy része szociáldemokrata, más része kommunista volt.',
        },
        { kind: 'heading', text: 'Az ellenforradalom' },
        {
          kind: 'text',
          text: 'A tanácsköztársaság ellenfelei két központban szerveződtek: **Bécsben** (Antibolsevista Comité) és a francia megszállás alatt álló **Szegeden**, ahol ellenkormány alakult. Itt szervezte meg **Horthy Miklós**, az Osztrák–Magyar Monarchia haditengerészetének utolsó parancsnoka a **Nemzeti Hadsereget**. A Tanácsköztársaság bukása után rövid ideig szociáldemokrata kormány vezette az országot (Peidl Gyula), majd a román csapatok kivonulása után Horthy hadserege **1919. november 16-án** bevonult Budapestre.',
        },
        {
          kind: 'text',
          text: 'A hatalomátvétellel együtt járt a **fehérterror**: a **fehér különítményesek** (**Prónay Pál**, Ostenburg-Moravek Gyula, Héjjas Iván csapatai) a tanácsköztársaság támogatóit, kommunistákat, zsidókat és baloldaliakat fosztogattak, bántalmaztak, gyilkoltak. A tetteseket sokáig nem vonták felelősségre.',
        },
        {
          kind: 'text',
          text: '1920 elején megtartották a választásokat, az új Országgyűlés **1920. március 1-jén Horthy Miklóst kormányzóvá** választotta. Magyarország **királyság maradt király nélkül**; ezzel megkezdődött a Horthy-korszak (ezt a következő témakörben tanulod).',
        },
        {
          kind: 'people',
          items: [
            {
              name: 'Károlyi Mihály',
              text: 'Függetlenségi politikus, az őszirózsás forradalom miniszterelnöke, 1919 januárjától a köztársaság ideiglenes elnöke.',
            },
            {
              name: 'Kun Béla',
              text: 'A KMP vezetője, a tanácsköztársaság valódi irányítója.',
            },
            {
              name: 'Horthy Miklós',
              text: 'Az ellenforradalom katonai vezetője (Nemzeti Hadsereg), 1920-tól kormányzó.',
            },
            {
              name: 'Prónay Pál',
              text: 'Fehér különítményes vezér, a fehérterror egyik fő alakja.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'Magyar Nemzeti Tanács',
              text: 'A forradalom testülete: 1918. október 23-án alakult Károlyi Mihály vezetésével (Függetlenségi Párt, szociáldemokraták, polgári radikálisok).',
              emelt: true,
            },
            {
              term: 'demarkációs vonal',
              text: 'A fegyverszünet alatt kijelölt ideiglenes határ a felek csapatai között; nem a végleges államhatár.',
              emelt: true,
            },
            {
              term: 'népbiztosok',
              text: 'A tanácsköztársaság Forradalmi Kormányzótanácsának tagjai, a minisztereknek megfelelő tisztségviselők.',
              emelt: true,
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Évszámok sorba rendezése: október 31., Vix-jegyzék, tanácsköztársaság kikiáltása és bukása, Nemzeti Hadsereg bevonulása.',
            'Forrás: forradalmi plakát, tanácsköztársasági rendelet, Horthy nyilatkozata; melyik korszakról szól, ki bocsátotta ki?',
            'Összehasonlítás: Károlyi-kormány és tanácsköztársaság (rendszer, gazdaság, külpolitika).',
            'Esszé: a polgári és a kommunista átalakulás kísérlete és az ellenforradalom 1918–1920-ban.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni az **őszirózsás forradalmat** (1918. október 31., Károlyi) a **tanácsköztársasággal** (1919. március 21., Kun Béla). Az első polgári demokratikus, a második kommunista diktatúra. A fehérterrort sem szabad kifelejteni: a vörösterror mellett ez is erőszakkal járt.',
        },
        {
          kind: 'tip',
          text: 'A korszak ellentétes mozgásait érdemes oksági láncban leírni: háborús kimerülés, forradalom, a területvesztés, Vix-jegyzék, kommunista hatalomátvétel, antant és román támadás, ellenforradalom. Így látszik, hogy miért ez vezetett a Horthy-korszak berendezkedéséhez.',
        },
      ],
      topicMatch: ['tanácsköztársaság'],
      cards: { subject: 'tortenelem', era: 'jelenkor20' },
      quiz: [
        {
          question:
            'Ki lett a miniszterelnök az őszirózsás forradalom győzelme után 1918. október 31-én?',
          options: ['Kun Béla', 'Horthy Miklós', 'Károlyi Mihály', 'Apponyi Albert'],
          answer: 2,
          explanation:
            'A forradalom után Károlyi Mihály lett a miniszterelnök, aki a Magyar Nemzeti Tanács elnöke volt.',
        },
        {
          question: 'Mi váltotta ki közvetlenül a Károlyi-kormány bukását 1919 márciusában?',
          options: [
            'Az őszirózsás forradalom kitörése.',
            'A Vix-jegyzék, amely újabb területek kiürítését követelte.',
            'A román hadsereg Budapestre vonulása.',
            'Horthy Miklós puccsa.',
          ],
          answer: 1,
          explanation:
            'A Vix-jegyzék (1919. március 20.) elfogadhatatlan követelései után Károlyi lemondott, és a kommunisták vették át a hatalmat.',
        },
        {
          question: 'Melyik tartozott a tanácsköztársaság intézkedései közé?',
          options: [
            'A nagybirtok felosztása kisparasztok között.',
            'A bankok és az ipari üzemek államosítása.',
            'Többpártrendszer bevezetése.',
            'A monarchia visszaállítása.',
          ],
          answer: 1,
          explanation:
            'A tanácsköztársaság államosította az ipart és a bankokat; a nagybirtokot nem osztotta fel, hanem termelőszövetkezeteket szervezett.',
        },
        {
          question: 'Mikor ért véget a tanácsköztársaság?',
          options: [
            '1919. március 21.',
            '1919. augusztus 1.',
            '1919. november 16.',
            '1920. március 1.',
          ],
          answer: 1,
          explanation:
            'A tanácsköztársaság 1919. augusztus 1-jén bukott meg a román támadás után; november 16-án a Nemzeti Hadsereg vonult be Budapestre.',
        },
        {
          question: 'Ki vezette a fehér különítményesek egyik legismertebb csapatát?',
          options: ['Szamuely Tibor', 'Prónay Pál', 'Kun Béla', 'Clemenceau'],
          answer: 1,
          explanation:
            'Prónay Pál fehér különítményes vezér volt; Szamuely Tibor a vörösterror oldalán állt.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Őszirózsás forradalom', url: wiki('Őszirózsás forradalom') },
        { label: 'Wikipédia: Tanácsköztársaság', url: wiki('Magyarországi Tanácsköztársaság') },
        { label: 'Wikipédia: Fehérterror', url: wiki('Fehérterror Magyarországon 1919') },
      ],
    },
    {
      id: 'bolsevik-hatalomatvetel',
      subject: 'tortenelem',
      unitId: 'vilaghaboru-trianon',
      title: 'A bolsevik hatalomátvétel Oroszországban',
      level: 'emelt',
      requirement: { emelt: 'Bolsevik hatalomátvétel Oroszországban' },
      minutes: 9,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az orosz társadalom a háborús vereségek, az éhség és a cári rendszer elmaradottsága miatt **1917 márciusában** (a régi orosz naptár szerint februárban) megdöntötte a cárt, **II. Miklóst**.',
            'A hatalom megoszlott: az **Ideiglenes Kormány** és a munkás- és katonatanácsok, a **szovjetek** között (kettős hatalom).',
            '**Lenin** vezette **bolsevikok** a „béke, föld, kenyér” jelszóval **1917 novemberében** (a régi naptár szerint októberben) fegyveres felkeléssel megdöntötték az Ideiglenes Kormányt Petrográdban.',
            'A hatalomátvétel után 1918–1921 között polgárháború dúlt a **vörösök** és a **fehérek** között; a bolsevikok győztek.',
            'Ez lett a világ első kommunista állama; Kun Béla magyarországi tanácsköztársasága is erre a mintára épült.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'bolsevik',
              text: 'Lenin vezette orosz szociáldemokrata irányzat, amely forradalmi úton, a munkásság pártja vezette diktatúrát akart.',
            },
            {
              term: 'mensevik',
              text: 'Az orosz szociáldemokrácia mérsékeltebb szárnya, amely parlamentáris és fokozatos átalakulást akart.',
              emelt: true,
            },
            {
              term: 'szovjet',
              text: 'Orosz szó, „tanács”. A forradalom alatt a munkások, katonák és parasztok választott tanácsai.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A cári rendszer válsága' },
        {
          kind: 'text',
          text: 'Oroszország a 20. század elején hatalmas, de elmaradott birodalom volt: autokratikus cári hatalom, parasztságának többsége szegény, a gyors iparosítás a városokban nyomorgó munkásságot teremtett. Az **1905-ös forradalom** után a cár (II. Miklós) korlátozott parlamentet (duma) engedélyezett, de a rendszer lényege nem változott. Az első világháború vereségei, az éhezés és a gazdasági káosz végül **1917 elején** általános elégedetlenséget váltottak ki.',
        },
        { kind: 'heading', text: '1917: két forradalom' },
        {
          kind: 'timeline',
          items: [
            {
              date: '1917. március',
              text: 'Éhséglázadások és sztrájkok Petrográdban, a katonák átállnak a felkelők oldalára, **II. Miklós lemond**. Ideiglenes Kormány alakul.',
            },
            {
              date: '1917. április',
              text: 'Lenin hazatér a száműzetésből, és kimondja az **áprilisi téziseket**: nincs támogatás az Ideiglenes Kormánynak, minden hatalmat a szovjeteknek.',
            },
            {
              date: '1917. nyár',
              text: 'A bolsevikok népszerűsége nő, mert az Ideiglenes Kormány folytatja a háborút és nem osztja fel a földet.',
            },
            {
              date: '1917. november 7. (okt. 25.)',
              text: 'A **bolsevik hatalomátvétel**: a Petrográdi Szovjet mellett működő Katonai Forradalmi Bizottság fegyveresei (a felkelést **Trockij** irányításával készítették elő) elfoglalják a Téli Palotát, a minisztereket letartóztatják.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Ez a **bolsevik hatalomátvétel** puccsszerű fegyveres felkelés volt, kevés áldozattal. Másnap a szovjetek kongresszusa megalakította az első szovjet kormányt, a **Népbiztosok Tanácsát** (elnöke Lenin).',
        },
        { kind: 'heading', text: 'A bolsevik hatalom első lépései' },
        {
          kind: 'keypoints',
          items: [
            '**Békerendelet**: azonnali békét ajánlottak minden hadviselő félnek. Oroszország **1918 márciusában Breszt-Litovszkban** különbékét kötött a központi hatalmakkal, amelynek ára nagy területek elvesztése volt.',
            '**Földrendelet**: a földbirtokosok földjeit a parasztoknak adták használatba.',
            'Az ipar és a bankok **államosítása**; a termelés és a munka állami irányítása.',
            '**Az Alkotmányozó Nemzetgyűlés** (1918 januárja) szétverése: a bolsevikok nem nyertek többséget, ezért feloszlatták, és egypárti diktatúrát építettek ki.',
          ],
        },
        { kind: 'heading', text: 'Polgárháború (1918–1921)' },
        {
          kind: 'text',
          text: 'A bolsevik hatalom ellen a cári rendszer volt tisztjei és hívei szerveztek „fehér” seregeket, az antant támogatásával; a bolsevikok ellenfelei között a mérsékeltebb szocialisták (mensevikek) is voltak. A bolsevik **Vörös Hadsereg**, amelyet **Trockij** szervezett, a kemény **hadikommunizmus** (a termények rekvirálása, az ipar teljes állami irányítása, kényszermunka) és a terror segítségével győzött. A fehér vezetők nem tudtak közös programot adni, és nem szerezték meg a parasztság támogatását. 1918 nyarán a bolsevikok Jekatyerinburgban kivégezték II. Miklóst és családját.',
        },
        {
          kind: 'text',
          text: 'A győztes bolsevik rendszerből alakult ki 1922-ben a Szovjetunió (ezt a kommunista Szovjetunió című témakörben tanulod).',
        },
        { kind: 'heading', text: 'Hatás Magyarországra és Európára' },
        {
          kind: 'text',
          text: 'A forradalom nemzetközi hatása hatalmas volt: a polgárság félt a kommunista terjeszkedéstől, a munkásmozgalom pedig megosztott lett a mérsékelt szociáldemokraták és a **Lenin** nyomán szerveződött kommunisták között. Magyarországon **Kun Béla** orosz hadifogolyként ismerkedett meg a bolsevik módszerekkel, és 1918 végén a KMP-t szervezte. 1919-ben a magyarországi **tanácsköztársaság** is szovjet mintára épült.',
        },
        {
          kind: 'compare',
          title: 'Az orosz és a magyar kísérlet',
          columns: ['Oroszország 1917–1918', 'Magyarország 1919'],
          rows: [
            {
              label: 'Vezető',
              cells: ['Lenin (bolsevikok)', 'Kun Béla (KMP + szociáldemokraták)'],
            },
            {
              label: 'Hatalomgyakorlás',
              cells: ['szovjetek, Népbiztosok Tanácsa', 'tanácsok, Forradalmi Kormányzótanács'],
            },
            {
              label: 'Sorsa',
              cells: [
                'győzött a polgárháborúban (1921)',
                'összeomlott 133 nap után (1919. augusztus 1.)',
              ],
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Forrás: Lenin áprilisi tézisei, békerendelet, földrendelet. Melyik jelszót tükrözi, mit akart elérni a bolsevik vezetés?',
            'Kronológia: 1917 márciusa és novembere, Breszt-Litovszk (1918), polgárháború.',
            'Esszé: a bolsevik hatalomátvétel okai és következményei (a világháború szerepe, a polgárháború, hatása Európára és Magyarországra).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: egy forradalomnak tekinteni az 1917-es eseményeket. Két külön forradalom volt: márciusban a cárt döntötték meg (polgári-demokratikus), novemberben a bolsevikok az Ideiglenes Kormányt (szocialista jellegű hatalomátvétel).',
        },
        {
          kind: 'tip',
          text: 'Emelt szinten mutasd meg, miért bukott el az Ideiglenes Kormány: folytatta a háborút, nem osztotta fel a földet, nem tudta megoldani az ellátást. A bolsevikok jelszavai („béke, föld, kenyér”) ezekre a problémákra adtak választ.',
        },
      ],
      topicMatch: ['bolsevik'],
      quiz: [
        {
          question: 'Melyik évhez köthető a bolsevik hatalomátvétel?',
          options: ['1905', '1914', '1917', '1922'],
          answer: 2,
          explanation:
            'A bolsevik hatalomátvétel 1917 novemberében (a régi orosz naptár szerint októberben) történt.',
        },
        {
          question: 'Mit jelentett a bolsevik jelszó: „béke, föld, kenyér”?',
          options: [
            'A háború folytatását és a nagybirtok védelmét.',
            'A háború befejezését, a földbirtokosok földjének szétosztását és az ellátás megoldását.',
            'A cár helyreállítását.',
            'A parlamentáris köztársaság bevezetését.',
          ],
          answer: 1,
          explanation:
            'A bolsevikok békét, földet a parasztoknak és élelmet ígértek, ezért kaptak támogatást.',
        },
        {
          question:
            'Melyik bolsevik vezető irányította a Petrográdi Szovjet elnökeként a felkelés előkészítését?',
          options: ['Lenin', 'Hindenburg', 'Trockij', 'Wilson'],
          answer: 2,
          explanation:
            'A Katonai Forradalmi Bizottságot Trockij vezette; Lenin a bolsevik párt vezetője volt.',
          emelt: true,
        },
        {
          question: 'Mit kötött Oroszország 1918 márciusában a központi hatalmakkal?',
          options: [
            'Szövetségi szerződést Németországgal.',
            'Különbékét Breszt-Litovszkban.',
            'A polgárháború lezáró egyezményét.',
            'Az antant elleni katonai szövetséget.',
          ],
          answer: 1,
          explanation:
            'A breszt-litovszki különbéke kivonta Oroszországot a háborúból, de nagy területekbe került.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Oroszországi forradalmak', url: wiki('Oroszországi forradalom 1917') },
        { label: 'Wikipédia: Lenin', url: wiki('Vlagyimir Iljics Lenin') },
        { label: 'Wikipédia: Breszt-litovszki béke', url: wiki('Breszt-litovszki béke') },
      ],
    },
    {
      id: 'trianoni-bekediktatum',
      subject: 'tortenelem',
      unitId: 'vilaghaboru-trianon',
      title: 'A trianoni békediktátum',
      level: 'kozep',
      requirement: {
        kozep: 'A trianoni békediktátum születése, tartalma és következményei',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az első világháborút lezáró **trianoni békét** Magyarországgal **1920. június 4-én** írták alá a versailles-i Nagy-Trianon-palotában. A magyar fél nem tárgyalhatott: **békediktátum** volt.',
            '**Területvesztés**: a Magyar Királyság területe kb. 282 ezer km²-ről **kb. 93 ezer km²-re** csökkent, a lakosság 18 millióról kb. 8 millióra; mintegy **3 millió magyar** került az új határokon túlra.',
            'Az elcsatolt területek: **Felvidék** és **Kárpátalja** (Csehszlovákia), **Erdély** (Románia), **Délvidék** (Jugoszlávia), **Burgenland** (Ausztria).',
            'Katonai korlátozás (35 ezer fős zsoldos hadsereg), **jóvátétel**, kisebbségvédelem az utódállamokban.',
            'A magyar társadalom és politika számára a **revízió** (a határok módosítása) lett a legfőbb cél; az utódállamok **kisantantot** hoztak létre a magyar revízió ellen.',
          ],
        },
        {
          kind: 'map',
          title: 'A békeszerződés által elcsatolt területek néhány városa',
          places: [
            { name: 'Pozsony', lat: 48.15, lon: 17.11, note: 'Felvidék, Csehszlovákia' },
            { name: 'Kassa', lat: 48.72, lon: 21.26, note: 'Felvidék, Csehszlovákia' },
            { name: 'Ungvár', lat: 48.62, lon: 22.3, note: 'Kárpátalja, Csehszlovákia' },
            { name: 'Kolozsvár', lat: 46.77, lon: 23.6, note: 'Erdély, Románia' },
            { name: 'Nagyvárad', lat: 47.05, lon: 21.93, note: 'Partium, Románia' },
            { name: 'Újvidék', lat: 45.25, lon: 19.84, note: 'Délvidék, Jugoszlávia' },
            { name: 'Szabadka', lat: 46.1, lon: 19.67, note: 'Délvidék, Jugoszlávia' },
            { name: 'Kismarton', lat: 47.85, lon: 16.52, note: 'Burgenland, Ausztria' },
            {
              name: 'Sopron',
              lat: 47.68,
              lon: 16.59,
              note: 'népszavazással Magyarországon maradt',
              emelt: true,
            },
            { name: 'Balassagyarmat', lat: 48.07, lon: 19.29, note: 'határváros', emelt: true },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Előzmények: az őszirózsás forradalomtól a békekonferenciáig' },
        {
          kind: 'text',
          text: 'Wilson amerikai elnök **14 pontja** (1918 januárjában) a nemzeti önrendelkezést hirdette meg, a vesztesek ezért igazságosabb békében bíztak. A **párizsi békekonferencia** 1919 januárjában kezdődött; a győztes hatalmak szerepét a francia miniszterelnök, **Clemenceau** dominálta. A békekonferencián a szomszéd országok (Csehszlovákia, Románia, Szerb–Horvát–Szlovén Királyság) vezetői nagy területi igényeket nyújtottak be, és Franciaország velük szövetkezett. A csehszlovák küldöttség egyik vezetője **Beneš** volt.',
        },
        {
          kind: 'text',
          text: 'A magyar delegációt csak **1920 januárjában** hívták meg, amikor a határokról már döntöttek. Vezetője **Apponyi Albert** volt, aki nagy hatású beszédben a **történelmi Magyarország egységét** és a **népszavazás** lehetőségét védelmezte. A magyar küldöttség mellékelte a **„vörös térképet”**: **Teleki Pál** etnikai térképét, amelyen a magyarlakta vidékeket vörössel jelölték, hogy a határok az etnikai arányokat kövessék. A békefeltételeken a nagyhatalmak lényegében nem változtattak.',
        },
        {
          kind: 'text',
          text: '**1920. június 4-én** a magyar megbízottak (**Benárd Ágoston** és **Drasche-Lázár Alfréd**) aláírták a szerződést a Nagy-Trianon-palotában. A magyar társadalom igazságtalan **békediktátumnak** tekintette, mert a magyar fél nem tárgyalhatott, a népszavazást elutasították.',
        },
        { kind: 'heading', text: 'A békeszerződés tartalma' },
        {
          kind: 'keypoints',
          title: 'Új határok',
          items: [
            '**Csehszlovákia** kapta a **Felvidéket** és **Kárpátalját**.',
            '**Románia** kapta **Erdélyt**, a **Partiumot** és a Bánság keleti részét.',
            'A **Szerb–Horvát–Szlovén Királyság** (1929-től **Jugoszlávia**) kapta a **Délvidéket** (Bácska és a Bánság nyugati része), valamint Horvátországot és Szlavóniát.',
            '**Ausztria** kapta **Burgenlandot** (Nyugat-Magyarország egy részét).',
          ],
        },
        {
          kind: 'keypoints',
          title: 'Egyéb rendelkezések',
          items: [
            '**Hadsereg**: legfeljebb 35 ezer fős, önkéntes (zsoldos) hadsereg; sorkatonaság, nehézfegyverzet, harckocsi és légierő nélkül.',
            '**Jóvátétel**: a háborús károkért fizetnie kellett (összegét később határozták meg).',
            '**Kisebbségvédelem**: az új államok vállalták, hogy a területükön élő kisebbségek jogait tiszteletben tartják, ennek ellenőrzése a **Népszövetség** feladata volt.',
          ],
        },
        {
          kind: 'compare',
          title: 'A történelmi Magyarország és a trianoni Magyarország',
          columns: ['1914 előtt', 'Trianon után'],
          rows: [
            {
              label: 'Terület',
              cells: ['kb. 282 ezer km² (Horvátországgal együtt)', 'kb. 93 ezer km²'],
            },
            { label: 'Népesség', cells: ['kb. 18 millió', 'kb. 8 millió'] },
            {
              label: 'Tengerpart',
              cells: [
                'volt (Fiume és a horvát tengerpart)',
                'nincs, az ország tengerparttal nem rendelkezik',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A magyar–osztrák határ kijelölésekor **Sopron** és környéke vitás volt. Az antant 1921-ben népszavazást engedélyezett, amelyet **1921 decemberében** tartottak, és a szavazók többsége Magyarország mellett döntött, ezért **Sopron** magyar maradt (később a „hűség városa” címet kapta). Ez volt az egyetlen népszavazás, amelyet a magyar határok kijelölésekor tartottak.',
        },
        { kind: 'heading', text: 'Következmények' },
        {
          kind: 'text',
          text: '**Gazdasági**: az ország ipari központja (Budapest) megmaradt, de elvesztette a nyersanyagforrások (fa, vasérc, só) nagy részét és a piacok jelentős hányadát. A vasúthálózat szétszakadt. **Társadalmi**: a határon túl rekedt magyarok kisebbségi sorba kerültek; több százezer menekült érkezett az országba, sokan évekig vagonlakásban. **Politikai**: a revízió az egész Horthy-kori külpolitika és belpolitika fő vezérelve lett, a politikai elit a békeszerződés felülvizsgálatát várta. A szomszédos államok **kisantantot** hoztak létre (Csehszlovákia, Románia, Jugoszlávia, 1920–21), hogy megakadályozzák a magyar revíziót és a Habsburg-restaurációt; Magyarország külpolitikailag elszigetelődött.',
        },
        {
          kind: 'text',
          text: '**Lélektani**: a trianoni trauma a magyar nemzeti gondolkodás középpontjává vált. A nemzeti emlékezet ma június 4-én a **Nemzeti Összetartozás Napján** emlékezik meg.',
        },
        {
          kind: 'people',
          items: [
            { name: 'Wilson', text: 'amerikai elnök, a nemzeti önrendelkezés elvének hirdetője.' },
            {
              name: 'Clemenceau',
              text: 'francia miniszterelnök, a békekonferencia vezető alakja.',
            },
            { name: 'Apponyi Albert', text: 'a magyar békedelegáció vezetője.' },
            {
              name: 'Beneš',
              text: 'csehszlovák külügyminiszter, a kisantant egyik szervezője.',
              emelt: true,
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: az utódállamok és az elcsatolt tájegységek (Felvidék, Kárpátalja, Erdély, Délvidék, Burgenland) azonosítása.',
            'Statisztika: terület- és népességadatok; mekkora hányad maradt Magyarországon?',
            'Forrás: Apponyi beszéde, a békeszerződés cikkelyei, plakát; mit kifogásol a magyar fél, mi volt a nagyhatalmak érve?',
            'Esszé: a trianoni békediktátum születése, tartalma és következményei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a trianoni békét **Versailles-szal** keverni. A versailles-i béke Németországgal készült (1919), a trianoni Magyarországgal (1920). Mindkettő a párizsi békerendszer része, de más ország sorsát dönti el. Az aláírás helye is csalóka: a Nagy-Trianon-palota ugyan Versailles-ban áll, mégis a trianoni békét írták alá benne.',
        },
        {
          kind: 'tip',
          text: 'A tartalom–következmény szerkezetet gazdasági, társadalmi, politikai és lélektani szempontok szerint rendezd. Ne feledd a magyar érveket sem: történelmi egység, népszavazás, a magyarlakta tömbök a határon túl; és azt, hogy az antant a szomszédos szövetségeseit támogatta.',
        },
      ],
      topicMatch: ['trianon'],
      cards: { subject: 'tortenelem', deck: 'fogalmak', era: 'jelenkor20' },
      quiz: [
        {
          question: 'Mikor írták alá a trianoni békeszerződést?',
          options: [
            '1919. június 28.',
            '1920. június 4.',
            '1920. március 1.',
            '1921. december 14.',
          ],
          answer: 1,
          explanation:
            '1920. június 4-én; a június 28-i (1919) a versailles-i békéhez, Németországhoz kötődik.',
        },
        {
          question: 'Melyik országhoz került Erdély Trianonban?',
          options: ['Csehszlovákia', 'Jugoszlávia', 'Ausztria', 'Románia'],
          answer: 3,
          explanation:
            'Erdély és a Partium Romániához került; a Felvidék Csehszlovákiához, a Délvidék Jugoszláviához.',
        },
        {
          question: 'Mekkora lett a békeszerződés után a magyar hadsereg létszáma?',
          options: ['35 ezer fő', '100 ezer fő', 'Nem lehetett hadsereg.', '200 ezer fő'],
          answer: 0,
          explanation:
            'A hadsereg legfeljebb 35 ezer fős, önkéntes lehetett, sorkatonaság és nehézfegyverek nélkül.',
        },
        {
          question: 'Mi volt a kisantant?',
          options: [
            'A Szovjetunió és Magyarország szövetsége.',
            'Csehszlovákia, Románia és Jugoszlávia szövetsége a magyar revízió ellen.',
            'A nyugati hatalmak szövetsége Németország ellen.',
            'A Népszövetség magyar tagozata.',
          ],
          answer: 1,
          explanation:
            'A kisantantot 1920–21-ben hozták létre a magyar revízió és a Habsburg-restauráció megakadályozására.',
        },
        {
          question: 'Melyik város maradt népszavazás után Magyarországon?',
          options: ['Kassa', 'Pozsony', 'Sopron', 'Kolozsvár'],
          answer: 2,
          explanation:
            '1921 decemberében Sopronban és környékén a szavazók Magyarország mellett döntöttek.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Trianoni békeszerződés', url: wiki('Trianoni békeszerződés') },
        { label: 'Wikipédia: Kisantant', url: wiki('Kisantant') },
        { label: 'Wikipédia: Apponyi Albert', url: wiki('Apponyi Albert') },
      ],
    },
    {
      id: 'parizs-kornyeki-bekek',
      subject: 'tortenelem',
      unitId: 'vilaghaboru-trianon',
      title: 'A Párizs környéki békék és Közép-Európa átalakítása',
      level: 'emelt',
      requirement: { emelt: 'A Párizs környéki békék, Közép-Európa átalakítása' },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az első világháborút a **párizsi békekonferencián** (1919–1920) rendezték: **öt békeszerződést** kötöttek, mindegyiket Párizs egy külvárosáról nevezték el.',
            'Az elvek (Wilson **14 pontja**: nemzeti önrendelkezés, **Népszövetség**) és a győztesek érdekei (**Clemenceau**: Németország gyengítése) ütköztek.',
            '**Közép-Európa átalakult**: a Monarchia megszűnt, új államok alakultak, Románia és Szerbia nőtt, a vesztesek területet és jóvátételt kaptak.',
            'Az új rendszer **nem volt tartós**: sok elégedetlen kisebbség maradt, a vesztesek revíziót akartak, az USA nem lépett be a Népszövetségbe.',
          ],
        },
        {
          kind: 'timeline',
          items: [
            { date: '1919. január', text: 'Megnyílik a párizsi békekonferencia.' },
            { date: '1919. június 28.', text: 'Versailles-i béke Németországgal.' },
            { date: '1919. szeptember 10.', text: 'Saint-Germain-i béke Ausztriával.' },
            { date: '1919. november 27.', text: 'Neuilly-i béke Bulgáriával.' },
            { date: '1920. június 4.', text: 'Trianoni béke Magyarországgal.' },
            {
              date: '1920. augusztus 10.',
              text: 'Sèvres-i béke az Oszmán Birodalommal (később a lausanne-i béke váltotta fel).',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A békekonferencia, az alapelvek és az ellentmondások' },
        {
          kind: 'text',
          text: 'A konferencián a legnagyobb szerepet a „nagy hármak” játszották: **Wilson** (USA), **Clemenceau** (Franciaország) és a brit miniszterelnök, Lloyd George. A vesztes országokat nem hívták meg tárgyalni; feltételeket kaptak. **Wilson** célja a **nemzeti önrendelkezés** és a jövőbeli háborúkat megelőző **Népszövetség** volt. **Franciaország** a német veszély tartós megszüntetését akarta, **Nagy-Britannia** egyensúlyra törekedett. A kompromisszum sok ellentmondást hagyott: az új határokat nem lehetett teljesen a nemzetiségi határokhoz igazítani, és sok kisebbség maradt másik ország területén.',
        },
        { kind: 'heading', text: 'A békeszerződések' },
        {
          kind: 'compare',
          title: 'A legfontosabb szerződések',
          columns: ['Érintett ország', 'Főbb rendelkezések'],
          rows: [
            {
              label: 'Versailles (Németország, 1919)',
              cells: [
                'Németország',
                'Elzász–Lotaringia Franciaországnak; lengyel korridor, Danzig szabad város; a hadsereg létszáma 100 ezer főre korlátozott; háborús bűnösség elismerése és jóvátétel; a Rajna-vidék demilitarizálása',
              ],
            },
            {
              label: 'Saint-Germain (Ausztria, 1919)',
              cells: [
                'Ausztria',
                'A Monarchia osztrák része kisállam lett; területeket veszített (például Dél-Tirol Olaszországnak); a Németországgal való egyesülés tilalma',
              ],
            },
            {
              label: 'Neuilly (Bulgária, 1919)',
              cells: [
                'Bulgária',
                'Területvesztés (Égei-tengeri kijárat), jóvátétel, létszámkorlát',
              ],
            },
            {
              label: 'Trianon (Magyarország, 1920)',
              cells: [
                'Magyarország',
                'Területvesztés, 35 ezer fős hadsereg, jóvátétel (lásd a trianoni oldalt)',
              ],
            },
            {
              label: 'Sèvres (Oszmán Birodalom, 1920)',
              cells: [
                'Oszmán Birodalom',
                'Az Oszmán Birodalom szétdarabolása; a török ellenállás miatt később a lausanne-i béke (1923) váltotta fel',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Közép-Európa átalakulása' },
        {
          kind: 'text',
          text: 'Az **Osztrák–Magyar Monarchia megszűnt**, helyén új államok jöttek létre vagy nőttek meg. **Csehszlovákia** (1918. október 28.) a cseh és szlovák területekből alakult, **Lengyelország** újjáéledt a három hatalom (Oroszország, Németország, Ausztria) lengyel lakta részeiből, a **Szerb–Horvát–Szlovén Királyság** (1918. december 1.) a délszlávokat egyesítette, **Románia** jelentősen megnőtt (Erdély, Bukovina, Besszarábia), **Ausztria** és **Magyarország** önálló, kicsi államok lettek. Az orosz birodalom nyugati részén a **balti államok** (Észtország, Lettország, Litvánia) és **Finnország** is függetlenné váltak.',
        },
        {
          kind: 'keypoints',
          title: 'Az új rendszer gyengeségei',
          items: [
            'Az **utódállamok** is soknemzetiségűek maradtak (Csehszlovákiában a németek, magyarok; Romániában a magyarok, németek), sok kisebbség elégedetlen volt.',
            'A **vesztesek** (Németország, Magyarország, Bulgária) revízióra törekedtek.',
            'A **Népszövetség** hatástalan maradt: az **USA** a Szenátus elutasítása miatt nem lépett be, a vesztesek és Szovjet-Oroszország eleinte kimaradtak.',
            'Az utódállamok közötti ellentétek (például a **kisantant** és Magyarország között) gyengítették a térséget.',
          ],
        },
        {
          kind: 'text',
          text: 'Az **új hatalmi rendszer** (versailles-i rendszer) a háború utáni európai rend megszilárdítására jött létre, de a vesztesek igazságtalannak és megalázónak érezték, a győztesek viszont nem voltak elég erősek ahhoz, hogy fenntartsák. Ezért a békerendszer **nem teremtett tartós békét**: a revíziós törekvések (Németország, Magyarország) és az új diktatúrák felbukkanása a második világháborúhoz vezettek.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'Népszövetség',
              text: 'A béke fenntartására 1920-ban létrehozott nemzetközi szervezet; hatékonyságát az USA távolmaradása és a nagyhatalmak érdekellentétei gyengítették.',
            },
            {
              term: 'jóvátétel',
              text: 'A vesztes államok által a háborús károkért a győzteseknek fizetendő kártérítés.',
            },
            {
              term: 'revízió',
              text: 'A békeszerződés (és a határok) felülvizsgálatára, módosítására irányuló törekvés.',
            },
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térkép: az új államok és határok (Csehszlovákia, Lengyelország, Jugoszlávia, Ausztria, Magyarország) Közép-Európában 1914 és 1920 között.',
            'Táblázat: szerződés és ország összepárosítása (Versailles–Németország, Saint-Germain–Ausztria, Neuilly–Bulgária, Trianon–Magyarország, Sèvres–Törökország).',
            'Forrás: Wilson 14 pontja, a versailles-i békeszerződés cikkelye; mit tartalmaz, kinek kedvezett?',
            'Emelt esszé: a békerendszer elvei, ellentmondásai és következményei.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt írni, hogy a békerendszer csak a vesztesek ellen irányult. Az új államok is soknemzetiségűek maradtak, és a kisebbségi kérdés az ő területükön is komoly feszültségeket szült. A Népszövetségről se írd, hogy az USA tagja volt: nem lépett be.',
        },
        {
          kind: 'tip',
          text: 'Mindig említs ellentmondást: a nemzeti önrendelkezés elve az új államok javára érvényesült, a vesztesek hátrányára; a győztes hatalmak (főleg Franciaország) érdekei felülírták az etnikai határokat. Ez a „tényeken alapuló megállapítás” az emelt esszé fontos része.',
        },
      ],
      topicMatch: ['párizs környéki', 'békerendszer'],
      quiz: [
        {
          question: 'Melyik békeszerződés vonatkozott Németországra?',
          options: ['Trianon', 'Saint-Germain', 'Versailles', 'Neuilly'],
          answer: 2,
          explanation:
            'Versailles (1919. június 28.) Németországot illette; Saint-Germain Ausztriát, Neuilly Bulgáriát, Trianon Magyarországot.',
        },
        {
          question: 'Melyik állítás igaz a Népszövetségre?',
          options: [
            'Az USA alapító tag volt.',
            'A béke megőrzésére hozták létre, de az USA nem lépett be.',
            'Csak a győztes hatalmak voltak tagjai.',
            'Szovjet-Oroszország vezette.',
          ],
          answer: 1,
          explanation:
            'A Népszövetség Wilson ötlete volt, de az amerikai Szenátus elutasította a csatlakozást, ami meggyengítette a szervezetet.',
        },
        {
          question: 'Melyik új állam jött létre 1918. október 28-án?',
          options: ['Lengyelország', 'Szerb–Horvát–Szlovén Királyság', 'Csehszlovákia', 'Ausztria'],
          answer: 2,
          explanation:
            'Csehszlovákia 1918. október 28-án alakult; a Szerb–Horvát–Szlovén Királyság december 1-jén.',
        },
        {
          question: 'Miért nem teremtett tartós békét a versailles-i rendszer?',
          options: [
            'Mert minden ország elégedett volt, nem volt szükség fegyverkezésre.',
            'Mert sok kisebbség és vesztes állam elégedetlen volt, a Népszövetség pedig gyenge maradt.',
            'Mert Németországot nem büntették meg.',
            'Mert Közép-Európában nem alakultak új államok.',
          ],
          answer: 1,
          explanation:
            'A revíziós igények, az elégedetlen kisebbségek és a gyenge Népszövetség aláásták a békerendszert.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Párizs környéki békék', url: wiki('Párizs környéki békeszerződések') },
        { label: 'Wikipédia: Versailles-i békeszerződés', url: wiki('Versailles-i békeszerződés') },
        { label: 'Wikipédia: Népszövetség', url: wiki('Népszövetség') },
      ],
    },
  ],
};

export default unit;
