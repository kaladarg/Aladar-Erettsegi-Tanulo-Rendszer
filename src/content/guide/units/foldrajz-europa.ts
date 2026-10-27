import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 8 (Európa földrajza). */
const unit: GuideUnit = {
  id: 'europa',
  subject: 'foldrajz',
  order: 80,
  title: 'Európa földrajza',
  requirementRef: '8.1–8.4 Európa földrajza',
  intro:
    'Európa felszíne, éghajlata és vizei, az Európai Unió működése, valamint Európa nagy térségeinek gazdasága. A topográfiai feladatban is sok európai név szerepel.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (8. témakör). A topográfiai nevek teljes listáját a követelmény 6. Európa része tartalmazza. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'europa-termeszeti-kepe',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Európa természeti képe',
      level: 'kozep',
      requirement: {
        kozep:
          'Európa nagytájai, felszínformái, éghajlata, vizei és természetes növényzete; az adottságok szerepe a gazdálkodásban.',
        emelt:
          'A nagyszerkezeti egységek és a felszín kialakulásának összefüggései, az éghajlat és a tengeráramlások kapcsolata.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Európa tagolt partvonalú földrész, sok félszigettel (Skandináv-, Ibériai-, Appennini-, Balkán-félsziget) és szigettel.',
            'Nagyszerkezeti egységek: **ősföld** (Kelet-európai-tábla, Balti-pajzs), **kaledóniai** (Skandináv-hegység, Skót-felföld), **variszkuszi** röghegységek (például Urál, Cseh-medence peremhegységei), **alpi** gyűrthegységek (Alpok, Kárpátok, Pireneusok, Appenninek).',
            'Az Alpok legmagasabb csúcsa a **Mont Blanc** (kb. 4800 m).',
            'Éghajlat nyugatról kelet felé: óceáni, majd egyre szárazföldibb; délen mediterrán.',
            'Leghosszabb folyója a **Volga**; a Duna a második leghosszabb.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'Nyugat-Európa éghajlata azért enyhe és csapadékos, mert a **nyugati szelek** az Atlanti-óceán felől érkeznek, és az **Észak-atlanti-áramlás** (a Golf-áramlás folytatása) melegíti a partokat. Kelet felé haladva csökken a csapadék, nő a hőingás. A Földközi-tenger mellett **mediterrán** éghajlat van: forró, száraz nyár, enyhe, csapadékos tél.',
        },
        {
          kind: 'compare',
          title: 'Éghajlatok Európában',
          columns: ['Óceáni', 'Mediterrán'],
          rows: [
            { label: 'Nyár', cells: ['hűvös, csapadékos', 'forró, száraz'] },
            { label: 'Tél', cells: ['enyhe, csapadékos', 'enyhe, csapadékos'] },
            { label: 'Növényzet', cells: ['lomberdő', 'keménylombú erdő és bozót (macchia)'] },
            { label: 'Példa', cells: ['Írország, Nagy-Britannia', 'Olaszország, Görögország'] },
          ],
        },
        {
          kind: 'text',
          text: 'A felszín kora és a nyersanyagok összefüggnek: az ősföldeken ércek, a fiatal gyűrthegységek előterében és a süllyedékekben kőolaj és földgáz (például az Északi-tenger alatt), a variszkuszi hegységek mentén kőszén fordul elő.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Éghajlati diagramnál nézd meg, mikor esik a csapadék: ha télen sok és nyáron kevés, az mediterrán éghajlat.',
        },
      ],
      topicMatch: ['=európa', 'germán-alföld'],
      quiz: [
        {
          question: 'Miért enyhe Nyugat-Európa tele?',
          options: [
            'mert közel van az Egyenlítőhöz',
            'mert az Észak-atlanti-áramlás és a nyugati szelek melegítik',
            'mert magasan fekszik',
            'mert kevés a felhő',
          ],
          answer: 1,
          explanation:
            'A meleg tengeráramlás és az óceán felől fújó nyugati szelek enyhítik a telet.',
        },
        {
          question: 'Melyik fiatal (alpi) gyűrthegység?',
          options: ['Skandináv-hegység', 'Urál', 'Kárpátok', 'Skót-felföld'],
          answer: 2,
          explanation: 'A Kárpátok az Alpokkal együtt az alpi hegységrendszer része.',
        },
        {
          question: 'Melyik Európa leghosszabb folyója?',
          options: ['Duna', 'Rajna', 'Volga', 'Loire'],
          answer: 2,
          explanation: 'A Volga Európa leghosszabb folyója, a Duna a második.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Európa földrajza', url: wiki('Európa földrajza') },
        { label: 'Wikipédia: Észak-atlanti-áramlás', url: wiki('Észak-atlanti-áramlás') },
      ],
    },
    {
      id: 'europai-unio-mukodese',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Az Európai Unió',
      level: 'kozep',
      requirement: {
        kozep:
          'Az Európai Unió tagállamai, főbb intézményei, az egységes piac és a közös politikák; Magyarország helye az EU-ban.',
        emelt:
          'Az integráció szakaszai, a regionális politika és a tagállamok közötti különbségek.',
      },
      minutes: 8,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az EU-nak **27 tagállama** van (az Egyesült Királyság 2020-ban kilépett). Magyarország **2004** óta tag.',
            'Az **egységes belső piac** négy szabadsága: áruk, szolgáltatások, tőke és személyek szabad mozgása.',
            'A közös pénz az **euró**; nem minden tagállam vezette be (Magyarország sem).',
            'A **schengeni térségen** belül nincs rendszeres határellenőrzés.',
            'Fő intézmények: Európai Parlament, Európai Bizottság, Európai Unió Tanácsa, Európai Tanács, Európai Unió Bírósága, Európai Központi Bank.',
          ],
        },
      ],
      details: [
        {
          kind: 'text',
          text: 'A **regionális (kohéziós) politika** a kevésbé fejlett térségek felzárkózását támogatja: utak, vasutak, vízművek, oktatás fejlesztésére ad pénzt. A támogatás aránya a térség fejlettségétől (az egy főre jutó GDP-től) függ.',
        },
        {
          kind: 'text',
          text: 'Az integráció szintjei egymásra épülnek: szabadkereskedelmi övezet, vámunió, közös piac, gazdasági és pénzügyi unió. Az EU a közös piacon túl a gazdasági és (az euróövezetben) a pénzügyi unió szintjét is elérte.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Tanuld meg a négy szabadságot és az intézmények szerepét: ezek visszatérő tesztkérdések.',
        },
      ],
      topicMatch: ['európai unió'],
      quiz: [
        {
          question: 'Mióta tagja Magyarország az Európai Uniónak?',
          options: ['1995', '2004', '2007', '2013'],
          answer: 1,
          explanation: 'Magyarország 2004. május 1-jén csatlakozott.',
        },
        {
          question: 'Melyik NEM tartozik az egységes piac négy szabadsága közé?',
          options: [
            'áruk szabad mozgása',
            'tőke szabad mozgása',
            'közös hadsereg',
            'személyek szabad mozgása',
          ],
          answer: 2,
          explanation: 'A négy szabadság: áruk, szolgáltatások, tőke és személyek szabad mozgása.',
        },
        {
          question: 'Mit támogat a regionális politika?',
          options: [
            'a fejlett térségek további gyarapodását',
            'a kevésbé fejlett térségek felzárkózását',
            'a vámok emelését',
            'a határellenőrzést',
          ],
          answer: 1,
          explanation: 'A kohéziós politika célja a térségek közötti különbségek csökkentése.',
        },
      ],
      sources: [
        {
          label: 'Az Európai Unió hivatalos oldala',
          url: 'https://european-union.europa.eu/index_hu',
        },
        { label: 'Wikipédia: Európai Unió', url: wiki('Európai Unió') },
      ],
    },
    {
      id: 'europa-tersegei',
      subject: 'foldrajz',
      unitId: 'europa',
      title: 'Európa térségei és országai',
      level: 'kozep',
      requirement: {
        kozep:
          'Nyugat-, Észak-, Dél-, Közép- és Kelet-Európa jellemzői, fontosabb országai, gazdasági központjai; szomszédaink.',
        emelt: 'A térségek fejlettségi különbségei és gazdasági átalakulásuk okai.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            '**Nyugat-Európa**: Németország, Franciaország, a Benelux-államok: fejlett ipar és szolgáltatások, nagy kikötők (Rotterdam).',
            '**Észak-Európa**: Norvégia (kőolaj, földgáz, vízenergia), Svédország (vasérc, faipar): magas életszínvonal.',
            '**Dél-Európa**: Olaszország (fejlett észak, elmaradottabb dél), Spanyolország: idegenforgalom, mediterrán mezőgazdaság.',
            '**Közép-Európa**: Ausztria, Csehország, Szlovákia, Lengyelország: autóipar, átalakult ipar.',
            '**Kelet-Európa**: Oroszország és Ukrajna: nagy kiterjedés, nyersanyagok, gabona.',
          ],
        },
      ],
      details: [
        {
          kind: 'map',
          title: 'Szomszédos fővárosok és nagyvárosok',
          places: [
            { name: 'Bécs', lat: 48.21, lon: 16.37, note: 'Ausztria' },
            { name: 'Pozsony', lat: 48.15, lon: 17.11, note: 'Szlovákia' },
            { name: 'Zágráb', lat: 45.81, lon: 15.98, note: 'Horvátország' },
            { name: 'Belgrád', lat: 44.79, lon: 20.45, note: 'Szerbia' },
            { name: 'Kolozsvár', lat: 46.77, lon: 23.6, note: 'Románia' },
            { name: 'Ungvár', lat: 48.62, lon: 22.3, note: 'Ukrajna' },
          ],
        },
        {
          kind: 'text',
          text: 'Az egykori ipari körzetek (például a németországi **Ruhr-vidék**) a szén és az acél hanyatlása után szerkezetváltáson mentek át: a nehézipar helyét szolgáltatások, kutatás és új iparágak vették át.',
          emelt: true,
        },
      ],
      exam: [
        {
          kind: 'tip',
          text: 'Országjellemzésnél haladj sorban: fekvés, természeti adottságok, népesség, gazdaság, egy-két nevezetes város.',
        },
      ],
      topicMatch: ['=ausztria', '=európa'],
      quiz: [
        {
          question:
            'Melyik ország gazdaságának fontos ága a kőolaj- és földgázkitermelés az Északi-tengeren?',
          options: ['Olaszország', 'Norvégia', 'Ausztria', 'Csehország'],
          answer: 1,
          explanation:
            'Norvégia az északi-tengeri kőolaj- és földgázmezőkből jelentős bevételt szerez.',
        },
        {
          question: 'Mi jellemző Olaszország gazdaságára?',
          options: [
            'egyenletesen fejlett az egész ország',
            'fejlett észak, elmaradottabb dél',
            'csak mezőgazdasága van',
            'fejlett dél, elmaradott észak',
          ],
          answer: 1,
          explanation: 'Az ipar és a jólét az északi területeken (Pó-síkság) koncentrálódik.',
        },
        {
          question: 'Melyik város Szlovákia fővárosa?',
          options: ['Kassa', 'Pozsony', 'Prága', 'Bécs'],
          answer: 1,
          explanation: 'Szlovákia fővárosa Pozsony (Bratislava).',
        },
      ],
      sources: [
        { label: 'Wikipédia: Európa országai', url: wiki('Európa országai') },
        { label: 'Wikipédia: Ruhr-vidék', url: wiki('Ruhr-vidék') },
      ],
    },
  ],
};

export default unit;
