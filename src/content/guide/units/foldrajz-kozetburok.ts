import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

/** Exam requirement topic 3.1 (A kőzetburok földrajza). */
const unit: GuideUnit = {
  id: 'kozetburok',
  subject: 'foldrajz',
  order: 20,
  title: 'A kőzetburok földrajza',
  requirementRef: '3.1 A kőzetburok földrajza',
  intro:
    'Mi van a Föld belsejében, miért mozognak a kőzetlemezek, honnan jönnek a vulkánok, a földrengések és a hegységek? Ebben az egységben a belső erők világát, a kőzeteket és az ásványkincseket tanulod meg az érettségi követelményei szerint.',
  requirementSource:
    'A követelmények, a fogalmak és a topográfiai nevek az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (3.1.1–3.1.5). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  requirements: {
    terms: {
      kozep: [
        'gömbhéj (geoszféra)',
        'óceáni kéreg',
        'kontinentális kéreg',
        'kőzetburok (litoszféra)',
        'vízburok (hidroszféra)',
        'levegőburok (atmoszféra)',
        'bioszféra',
        'talajburok (pedoszféra)',
        'geotermikus gradiens',
        'földmágnesség',
        'földkéreg',
        'földköpeny',
        'földmag',
        'külső és belső mag',
        'asztenoszféra',
        'magma',
        'magmaáramlás',
        'kőzetlemez',
        'hasadékvölgy',
        'óceánközépi hátság',
        'mélytengeri árok',
        'vulkáni szigetív',
        'távolodó, közeledő és elcsúszó lemezmozgás',
        'alábukás',
        'beolvadás',
        'érc',
        'mélységi magmatizmus',
        'felszíni vulkánosság',
        'láva',
        'vulkáni hamu',
        'rétegvulkán',
        'magmakamra',
        'kürtő',
        'kráter',
        'csatornás (kürtős) vulkán',
        'hasadékvulkán',
        'földrengés',
        'rengésfészek (hipocentrum)',
        'rengésközpont (epicentrum)',
        'utórengés',
        'a hegységképződés típusai (két kontinentális, két óceáni, illetve egy óceáni és egy kontinentális lemezszegély közeledése)',
        'hegységrendszer',
        'szerkezeti mozgások',
        'gyűrődés',
        'redő',
        'álló, ferde és fekvő redő',
        'vetődés',
        'vetősík',
        'törésvonal',
        'rög',
        'sasbérc',
        'árok',
        'lépcsővidék',
        'tektonikus medence',
        'ásvány',
        'kőzet',
        'magmás kőzet',
        'mélységi magmás kőzet',
        'vulkáni kiömlési kőzet',
        'vulkáni törmelékes kőzet (tufa)',
        'üledékes kőzet',
        'törmelékes, vegyi, szerves eredetű üledékes kőzet',
        'átalakult kőzet',
        'kvarc',
        'kalcit',
        'kősó',
        'kálisó',
        'gipsz',
        'mészkő',
        'homok',
        'homokkő',
        'lösz',
        'dolomit',
        'szénfajták (tőzeg, lignit, barnakőszén, feketekőszén, antracit)',
        'kőolaj',
        'földgáz',
        'agyag',
        'bauxit',
        'vasérc',
        'gránit',
        'andezit',
        'bazalt',
        'riolit',
        'andezit-, bazalt- és riolittufa',
        'márvány',
        'palás kőzetek',
        'ásványi nyersanyag',
        'ősföld (ősmasszívum)',
        'fedett és fedetlen ősmasszívum',
        'táblás vidék',
        'rögös szerkezetű hegység',
        'gyűrthegység',
        'süllyedékterület',
        'mélytengeri síkság',
        'óceáni medence',
        'feltöltött és lepusztult (letarolt) síkság',
      ],
      emelt: [
        'gyarapodó és fölemésztődő lemezszegélyek',
        'telér',
        'párnaláva',
        'bazaltfennsík',
        'pajzsvulkán',
        'kaldera',
        'forrópontos vulkán',
        'vulkáni utóműködés',
        'gejzír',
        'fumarola',
        'szolfatára',
        'mofetta',
        'savanyúvíz',
        'fészekmélység',
        'földrengéshullámok',
        'szeizmográf',
        'tengerrengés',
        'cunami',
        'Richter-skála',
        'Mercalli-skála',
        'hegységképződési szakaszok (üledékfelhalmozódás, tektogenezis, orogenezis)',
        'redőboltozat',
        'redőteknő',
        'áttolt redő',
        'izosztázia',
        'kőzetanyag-körforgás',
        'magmás ércképződés',
        'üledékes ércképződés',
        'nehéz-, színes- és nemesfémek ércásványai',
        'bázisos, savanyú és semleges magmás kőzet',
        'laterit- és karsztbauxit',
        'megfiatalított rögös szerkezetű hegység',
      ],
    },
    people: { kozep: [], emelt: [] },
    dates: { kozep: [], emelt: [] },
    places: { kozep: [], emelt: [] },
  },
  pages: [
    {
      id: 'fold-szerkezete-lemezmozgasok',
      subject: 'foldrajz',
      unitId: 'kozetburok',
      title: 'A Föld szerkezete és a kőzetlemezek mozgása',
      level: 'both',
      requirement: {
        kozep:
          'A Föld gömbhéjas szerkezete és belsejének fizikai jellemzői; az asztenoszféra áramlásai és a lemezmozgások kapcsolata; a geotermikus gradiens gazdasági jelentősége; a földkéreg és a kőzetburok; a kőzetlemezek csoportosítása; a lemezmozgások okai, típusai és következményei; topográfiai példák lemezhatárokra',
        emelt:
          'A gömbhéjak összehasonlítása adatok alapján (ásványtani összetétel, hőmérséklet, nyomás, sűrűség); földmágnesség és tájékozódás; ábra a kőzetburok felépítéséről; lemezmozgásos folyamatábrák',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A Föld **gömbhéjas** felépítésű: **földkéreg**, **földköpeny**, **földmag** (külső és belső mag). Befelé nő a hőmérséklet, a nyomás és a sűrűség.',
            'A **kőzetburok** (litoszféra) a földkéregből és a felső köpeny merev részéből áll. Alatta a képlékeny **asztenoszféra** áramlik.',
            'A kőzetburok **kőzetlemezekre** tagolódik, amelyek az asztenoszféra áramlásain úszva évente néhány centimétert mozdulnak.',
            'Három lemezmozgás van: **távolodó**, **közeledő** és **elcsúszó**. A lemezszegélyeken zajlik a vulkánosság, a földrengések és a hegységképződés.',
            'A **geotermikus gradiens** megmutatja, milyen gyorsan nő a hőmérséklet a mélységgel. Átlagosan **33 m**-enként nő 1 °C-ot.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'földkéreg',
              text: 'A Föld legkülső, vékony szilárd héja. Két típusa van: a vékonyabb, nehezebb **óceáni kéreg** és a vastagabb, könnyebb **kontinentális kéreg**.',
            },
            {
              term: 'asztenoszféra',
              text: 'A kőzetburok alatti képlékeny (képlékenyen alakítható) köpenyréteg. Áramlásai viszik a rajta úszó kőzetlemezeket.',
            },
            {
              term: 'geotermikus gradiens',
              text: 'Az a mélységkülönbség, amelyen a hőmérséklet 1 °C-ot nő (átlag kb. 33 m/°C). Minél kisebb az érték, annál gyorsabban melegszik a mélység.',
            },
            {
              term: 'magmaáramlás',
              text: 'A köpenyben felfelé és lefelé áramló, részben olvadt kőzetanyag. Ez mozgatja a lemezeket.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A geoszférák és a Föld gömbhéjai' },
        {
          kind: 'text',
          text: 'A Földet **geoszférák** (gömbhéjak) veszik körül és építik fel: a **kőzetburok** (litoszféra), a **vízburok** (hidroszféra), a **levegőburok** (atmoszféra), az élőlények **bioszférája** és a **talajburok** (pedoszféra). Ezek kölcsönhatásban vannak egymással. Ebben az egységben a kőzetburok és a Föld belseje a téma.',
        },
        {
          kind: 'text',
          text: 'A Föld belseje három fő gömbhéjra osztható. A **földkéreg** vékony kéreg, a **földköpeny** az egész Föld térfogatának legnagyobb részét adja, a **földmag** vas- és nikkeltartalmú. A földmag két részből áll: a **külső mag** folyékony, a **belső mag** a hatalmas nyomás miatt szilárd.',
        },
        {
          kind: 'compare',
          title: 'Óceáni és kontinentális kéreg',
          columns: ['Óceáni kéreg', 'Kontinentális kéreg'],
          rows: [
            {
              label: 'Vastagság',
              cells: ['kb. 5–10 km', 'átlag kb. 35 km, hegységek alatt vastagabb'],
            },
            { label: 'Sűrűség', cells: ['nagyobb (bazaltos)', 'kisebb (gránitos)'] },
            {
              label: 'Kor',
              cells: ['fiatal, folyamatosan megújul', 'sokkal idősebb, ősi részekkel'],
            },
            { label: 'Hol van?', cells: ['óceánok feneke', 'kontinensek és selfterületek'] },
          ],
        },
        { kind: 'heading', text: 'A Föld belsejének fizikai jellemzői' },
        {
          kind: 'keypoints',
          items: [
            '**Hőmérséklet**: a mélységgel nő. A kéregben a geotermikus gradiens szerint, a magban több ezer °C.',
            '**Nyomás**: a fölötte lévő kőzetek súlya miatt befelé erősen nő.',
            '**Sűrűség**: befelé nő, a kéreg a legkönnyebb, a vas-nikkel mag a legsűrűbb.',
            '**Halmazállapot**: kéreg szilárd; a köpeny túlnyomórészt szilárd, de képlékeny rétege van; a külső mag folyékony, a belső mag szilárd.',
          ],
        },
        {
          kind: 'example',
          title: 'Hőmérséklet számítása a mélységből',
          problem:
            'A felszíni évi középhőmérséklet 10 °C, a geotermikus gradiens 33 m/°C. Mekkora a hőmérséklet 3000 m mélyen? Mekkora lenne ott, ha a gradiens 20 m/°C (mint Magyarországon kb.)?',
          solution:
            '1) Az emelkedés: $3000 \\text{ m} : 33 \\text{ m/°C} \\approx 91 \\text{ °C}$. A hőmérséklet: $10 + 91 \\approx 101 \\text{ °C}$.\n2) 20 m/°C esetén: $3000 : 20 = 150 \\text{ °C}$ az emelkedés, így $10 + 150 = 160 \\text{ °C}$.\nTanulság: a kisebb gradiens (gyorsabb melegedés) forróbb mélységet jelent, ezért hasznosítható itt jól a geotermikus energia.',
        },
        {
          kind: 'example',
          title: 'A gradiens kiszámítása kútadatból',
          problem:
            'Egy 1500 m mély kút vizének hőmérséklete 70 °C, a felszíni középhőmérséklet 10 °C. Mekkora a geotermikus gradiens?',
          solution:
            'A hőmérséklet-emelkedés $70 - 10 = 60 \\text{ °C}$. A gradiens $1500 \\text{ m} : 60 \\text{ °C} = 25 \\text{ m/°C}$. Ez 100 m-enként $100 : 25 = 4 \\text{ °C}$ emelkedést jelent.',
        },
        {
          kind: 'text',
          text: '**A geotermikus gradiens gazdasági jelentősége**: ahol kicsi az értéke (vékony a kéreg, fiatal vulkáni vagy süllyedő terület), ott a termálvíz és a föld hője olcsón hasznosítható fűtésre, villamosenergia-termelésre, fürdőkben és mezőgazdaságban (üvegházak). Ilyen Izland, és ilyen a Pannon-medence is: Magyarország geotermikus adottságai jók, például Hódmezővásárhelyen és Szentesen a termálvíz hőjét távfűtésre használják.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'A gömbhéjak összehasonlítása (közelítő adatok)',
          columns: ['Kéreg és köpeny', 'Mag'],
          rows: [
            {
              label: 'Anyag',
              cells: [
                'szilikátos kőzetek: a kéreg gránitos és bazaltos, a köpeny olivinben és piroxénben gazdag',
                'vas és nikkel',
              ],
            },
            {
              label: 'Sűrűség',
              cells: ['kb. 2,7–3,0 g/cm³ (kéreg), 3,3–5,5 g/cm³ (köpeny)', 'kb. 10–13 g/cm³'],
            },
            {
              label: 'Hőmérséklet',
              cells: [
                'felszíntől ezer °C körülig, a köpenyben tovább nő',
                'több ezer °C (5000 °C felett)',
              ],
            },
            {
              label: 'Halmazállapot',
              cells: [
                'szilárd, az asztenoszféra képlékeny',
                'külső mag folyékony, belső mag szilárd',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **földmágnesség** forrása a folyékony külső mag áramlása. Ez hozza létre a Föld mágneses terét, amelyet az **iránytű** is követ, így a tájékozódás eszköze. A mágneses északi pólus nem esik egybe a földrajzi északi sarkkal, az eltérés a **mágneses elhajlás** (deklináció). A mágneses tér védi a Földet a Napból érkező töltött részecskéktől.',
        },
        { kind: 'heading', text: 'A kőzetburok és a kőzetlemezek' },
        {
          kind: 'text',
          text: 'A **kőzetburok** (litoszféra) a földkéregből és a felső köpeny merev részéből áll, vastagsága átlag kb. 100 km. Alatta az **asztenoszféra** képlékeny rétege található, amelyben lassú **áramlások** vannak: a felmelegedett anyag felszáll, lehűl, majd lesüllyed. Az áramlás viszi magával a kőzetburok darabjait, a **kőzetlemezeket**.',
        },
        {
          kind: 'text',
          text: 'A lemezek a **felépítésük szerint** csoportosíthatók: vannak túlnyomórészt **óceáni kéregből** álló lemezek (Csendes-óceáni-, Nazca-, Fülöp-lemez) és olyan lemezek, amelyek **óceáni és kontinentális kérget is** tartalmaznak (például Eurázsiai-, Afrikai-, Észak-amerikai-, Dél-amerikai-, Antarktiszi-, Ausztrál–Indiai-, Arab-lemez).',
        },
        {
          kind: 'keypoints',
          title: 'A tíz lemez, amelyet névre kell tudnod',
          items: [
            'Afrikai-lemez, Antarktiszi-lemez, Arab-lemez, Ausztrál–Indiai-lemez, Csendes-óceáni-lemez',
            'Dél-amerikai-lemez, Észak-amerikai-lemez, Eurázsiai-lemez, Fülöp-lemez (Filippínó-lemez), Nazca-lemez',
          ],
        },
        { kind: 'heading', text: 'A lemezmozgások típusai és következményei' },
        {
          kind: 'compare',
          title: 'Lemezszegély-típusok',
          columns: ['Távolodó lemezszegély', 'Közeledő lemezszegély'],
          rows: [
            {
              label: 'Mi történik?',
              cells: ['a lemezek szétmozdulnak, a magma felnyomul', 'a lemezek egymásnak ütköznek'],
            },
            {
              label: 'Felszíni forma',
              cells: [
                'óceánközépi hátság (óceánon), hasadékvölgy (kontinensen)',
                'mélytengeri árok, vulkáni szigetív, vulkáni hegylánc vagy gyűrthegység',
              ],
            },
            {
              label: 'Kísérő jelenségek',
              cells: [
                'bazaltos vulkánosság, sekély földrengések',
                'vulkánosság (alábukásnál), erős földrengések',
              ],
            },
            {
              label: 'Példa',
              cells: [
                'Közép-atlanti-hátság, Kelet-afrikai-árokrendszer',
                'Andok, Japán-árok, Mariana-árok, Himalája, Alpok',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Elcsúszó lemezszegélynél** a lemezek egymás mellett, ellentétes irányban mozdulnak el. Nem keletkezik új kőzetburok, és nem is pusztul el, de a feszültség erős **földrengésekben** szabadul fel. Híres példa a kaliforniai **San Andreas-törésvonal**, ahol a Csendes-óceáni-lemez és az Észak-amerikai-lemez csúszik el egymás mellett.',
        },
        {
          kind: 'compare',
          title: 'A közeledő lemezszegélyek három esete',
          columns: ['Ütköző lemezek', 'Következmény és példa'],
          rows: [
            {
              label: 'Óceáni és kontinentális',
              cells: [
                'a nehezebb óceáni lemez a kontinentális alá **bukik**',
                'mélytengeri árok és vulkáni hegylánc, például a Nazca-lemez alábukása az Andok alatt',
              ],
            },
            {
              label: 'Óceáni és óceáni',
              cells: [
                'az idősebb, nehezebb lemez bukik alá',
                'mélytengeri árok és **vulkáni szigetív**, például Japán-szigetek, Mariana-árok',
              ],
            },
            {
              label: 'Kontinentális és kontinentális',
              cells: [
                'egyik sem bukik alá, mert mindkettő könnyű',
                'összegyűrődnek, gyűrthegység jön létre, például Himalája, Alpok',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az alábukó lemez a mélyben **beolvad**, a keletkező magma felfelé nyomul, ezért kapcsolódik a **magmás tevékenység** a lemezmozgásokhoz. A távolodó szegélyeknél új kőzetburok keletkezik, a közeledőknél elpusztul: ezért a Föld mérete nem változik.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Emelt szinten a szegélyeket így is csoportosítják: **gyarapodó** lemezszegély, ahol új kőzetburok jön létre (távolodó), és **fölemésztődő** lemezszegély, ahol kőzetburok pusztul el (alábukás, beolvadás). Az elcsúszó szegély nem gyarapodó és nem fölemésztődő.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Ábraelemzés: a Föld belsejének metszete, a lemezszegélyek ábrája (mi bukik alá, hol keletkezik vulkán).',
            'Kontúrtérképen vagy atlaszban: a tíz kőzetlemez, a Közép-atlanti-hátság, a Mariana-árok, a Japán-árok, az Andok, a Himalája.',
            'Számítás: hőmérséklet adott mélységben vagy a geotermikus gradiens kútadatokból (lásd a példákat).',
            'Rövid válasz: milyen lemezmozgás okozza a megadott jelenséget, mi a példa rá?',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: összekeverni a **kőzetburok** (litoszféra: kéreg és a felső köpeny merev része) és a **földkéreg** fogalmát, vagy az alábukást a távolodással. Óceáni és kontinentális lemez ütközésekor mindig az óceáni (nehezebb) bukik alá.',
        },
        {
          kind: 'tip',
          text: 'A geotermikus gradiens számításnál először mindig a hőmérséklet-különbséget írd fel (mélyebb hőmérséklet mínusz felszíni), és a méterben adott mélységet ossza el a gradienssel. Mértékegységet (m/°C, °C) mindig írj mellé.',
        },
      ],
      topicMatch: ['=kőzetburok', 'föld belső szerkezete', 'lemeztektonika'],
      quiz: [
        {
          question: 'Melyik réteg a Föld legvastagabb gömbhéja (térfogatra)?',
          options: ['Földkéreg', 'Földköpeny', 'Külső mag', 'Belső mag'],
          answer: 1,
          explanation:
            'A földköpeny adja a Föld térfogatának legnagyobb részét; a kéreg csak vékony külső héj.',
        },
        {
          question: 'Mit nevezünk kőzetburoknak (litoszférának)?',
          options: [
            'A földkérget és a felső köpeny merev részét.',
            'Csak a földkérget.',
            'Az egész földköpenyt.',
            'A külső magot és a belső magot.',
          ],
          answer: 0,
          explanation:
            'A litoszféra a kéreg és a felső köpeny merev része együtt; alatta az asztenoszféra képlékeny rétege van.',
        },
        {
          question:
            'Mekkora a hőmérséklet 2000 m mélyen, ha a felszíni hőmérséklet 10 °C és a geotermikus gradiens 25 m/°C?',
          options: ['60 °C', '70 °C', '80 °C', '90 °C'],
          answer: 3,
          explanation:
            'A hőmérséklet-emelkedés $2000 : 25 = 80$ °C, ehhez hozzá kell adni a felszíni 10 °C-ot, így 90 °C.',
        },
        {
          question: 'Melyik lemezek ütközésekor jön létre gyűrthegység?',
          options: [
            'Óceáni és kontinentális lemez',
            'Két óceáni lemez',
            'Két elcsúszó lemez',
            'Két kontinentális lemez',
          ],
          answer: 3,
          explanation:
            'Két kontinentális lemez közeledésekor egyik sem bukik alá (mindkettő könnyű), ezért összegyűrődnek: így keletkezett a Himalája és az Alpok.',
        },
        {
          question: 'Mi okozza a Föld mágneses terét?',
          options: [
            'A kéreg gránitos kőzetei.',
            'A folyékony külső mag áramlása.',
            'A szilárd belső mag forgása.',
            'Az asztenoszféra.',
          ],
          answer: 1,
          explanation:
            'A külső mag folyékony vas-nikkel olvadékának áramlása hozza létre a földmágnességet.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: A Föld szerkezete', url: wiki('A Föld belső szerkezete') },
        { label: 'Wikipédia: Lemeztektonika', url: wiki('Lemeztektonika') },
        { label: 'Wikipédia: Geotermikus gradiens', url: wiki('Geotermikus gradiens') },
      ],
    },
    {
      id: 'vulkanizmus-utomukodes',
      subject: 'foldrajz',
      unitId: 'kozetburok',
      title: 'Vulkánosság és vulkáni utóműködés',
      level: 'both',
      requirement: {
        kozep:
          'A magmás tevékenység és a lemezmozgások kapcsolata; a vulkánok csoportosítása alakjuk és működésük szerint; vulkáni övezetek és vulkánok térképen; a kőzetburok folyamataihoz kapcsolódó földtani veszélyek',
        emelt:
          'Forró pontok feletti vulkánosság ábrával és példával; vulkáni utóműködés és gazdasági jelentősége',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **magma** a kéreg alatti olvadt, gázokat tartalmazó kőzetanyag. A felszínre ért magmát **lávának** hívjuk.',
            '**Mélységi magmatizmus**: a magma a kéregben hűl ki. **Felszíni vulkánosság**: a magma kitör.',
            'A vulkánok többsége **lemezszegélyeken** van: távolodó szegélyeken (Izland) és az alábukások fölött (Andok, Japán). A Csendes-óceánt **tűzgyűrű** övezi.',
            'Alak szerint a legfontosabb a **rétegvulkán**, működés szerint a **csatornás (kürtős)** és a **hasadékvulkán**.',
            '**Emelt szinten**: a **forrópontos vulkán**, a pajzsvulkán, a kaldera és a vulkáni **utóműködés** (gejzír, fumarola, szolfatára, mofetta, savanyúvíz).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'magmakamra',
              text: 'A kéregben lévő, olvadt magmával teli tér a vulkán alatt.',
            },
            {
              term: 'kürtő',
              text: 'A vulkán csatornája, amelyen a magma a magmakamrából a felszínre jut.',
            },
            { term: 'kráter', text: 'A kürtő tölcsér alakú felszíni nyílása a vulkán tetején.' },
            { term: 'vulkáni hamu', text: 'A kitöréskor kirepülő apró szilárd törmelék.' },
            {
              term: 'forrópontos vulkán',
              text: 'A köpenyből felszálló forró anyag fölött, lemezszegélytől távol kialakuló vulkán (például Hawaii).',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Hogyan keletkezik a magma és a vulkán?' },
        {
          kind: 'text',
          text: 'A **magma** a köpeny felső részének és a kéreg alsó részének helyenként megolvadt anyaga, amely gázokat és gőzt is tartalmaz. Három helyen olvad meg: ahol a lemezek **távolodnak** (a nyomáscsökkenés miatt), ahol a lemez **alábukik** és **beolvad** (a víz és a hő miatt), valamint a **forró pontok** fölött. A magma könnyebb, mint a környező kőzet, ezért felfelé nyomul.',
        },
        {
          kind: 'compare',
          title: 'Mélységi magmatizmus és felszíni vulkánosság',
          columns: ['Mélységi magmatizmus', 'Felszíni vulkánosság'],
          rows: [
            {
              label: 'Hol dermed meg a magma?',
              cells: ['a földkéregben, a felszín alatt', 'a felszínen, láva és hamu formájában'],
            },
            {
              label: 'Lehűlés',
              cells: ['lassú, nagy kristályok', 'gyors, apró kristályok vagy üveges'],
            },
            {
              label: 'Keletkező kőzet',
              cells: [
                'mélységi magmás kőzet, például gránit',
                'kiömlési és törmelékes kőzet, például bazalt, tufa',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'A vulkánok felépítése' },
        {
          kind: 'text',
          text: 'A vulkán alatt **magmakamra** van. Ebből a **kürtő** vezet a felszínre, ahol a **kráter** nyílik. Kitöréskor **láva**, gázok, **vulkáni hamu** és kőzettörmelék távozik. A szilárd törmelék összecementálódva **vulkáni törmelékes kőzetet** (**tufa**) alkot.',
        },
        { kind: 'heading', text: 'A vulkánok csoportosítása' },
        {
          kind: 'compare',
          title: 'Vulkántípusok alak és működés szerint',
          columns: ['Rétegvulkán', 'Hasadékvulkán'],
          rows: [
            {
              label: 'Működés',
              cells: [
                'csatornás (kürtős): egy kürtőn át tör ki a magma',
                'a láva hosszú repedésen át ömlik, nincs kúp',
              ],
            },
            {
              label: 'Alak',
              cells: [
                'meredek kúp, láva- és hamurétegekből épül fel',
                'hosszú repedés mentén lapos láva-fennsík',
              ],
            },
            {
              label: 'Kitörés',
              cells: ['gyakran robbanásos, hamufelhővel', 'csendes lávaömlés'],
            },
            {
              label: 'Példa',
              cells: [
                'Vezúv, Fuji, Mount St. Helens, Popocatépetl, Kilimandzsáró',
                'Izland hasadékvulkánjai',
              ],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Pajzsvulkán**: híg, bazaltos láva ömlik ki, ezért a vulkán nagyon lapos, széles pajzs alakú (Hawaii-szigetek vulkánjai). A sok egymás fölé ömlő híg láva **bazaltfennsíkot** épít (például a Dekkán-fennsík). A **kaldera** a vulkán nagy kitörése után a magmakamra beomlásával keletkező nagy, kerek bemélyedés (például a Yellowstone Nemzeti Parkban, vagy a vízzel telt Kráter-tó). A repedésekben megdermedt magma lemezszerű teste a **telér**, a víz alatti kitörések **párnalávát** hoznak létre.',
        },
        {
          kind: 'heading',
          text: 'Vulkáni övezetek',
        },
        {
          kind: 'keypoints',
          items: [
            '**A Csendes-óceán „tűzgyűrűje”**: alábukások fölött, az Andok, a Kordillerák (Mount St. Helens), Kamcsatka, a Japán- és a Fülöp-szigetek.',
            '**Földközi-tengeri övezet**: Itália (Vezúv, Etna), Égei-tenger.',
            '**Óceánközépi hátságok**: Izland, a Közép-atlanti-hátság mentén.',
            '**Kelet-afrikai-árokrendszer**: Kilimandzsáró, Etióp-magasföld, Teleki-vulkán.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **forrópontos vulkánosság** nem a lemezszegélyhez kötődik. A köpenyben fix helyen felszálló forró anyag átégeti a fölötte lassan mozgó lemezt. A lemez mozgása miatt sorban új vulkánok keletkeznek, a régebbiek kialszanak: így jött létre a **Hawaii-szigetsor** a Csendes-óceáni-lemezen. Forró pont található még a **Yellowstone** alatt (Észak-amerikai-lemez) és a **Kanári-szigeteken**.',
        },
        { kind: 'heading', text: 'A Kárpát-medence vulkáni hegyei' },
        {
          kind: 'text',
          text: 'Magyarország ma nem vulkáni terület, de a múltban itt is volt vulkánosság. A mai **Északi-középhegység** (Mátra, Börzsöny, Visegrádi-hegység, Zempléni-hegység) és a **Tokaji-hegy** a miocén idején, kb. 20–10 millió éve keletkezett **andezit-, riolit- és tufaanyagból**. A **Balaton-felvidék** tanúhegyei (Badacsony, Somló, Ság-hegy) a pliocénben (a miocénnél fiatalabb időszakban) kitört **bazaltvulkánok** maradványai.',
        },
        {
          kind: 'map',
          title: 'Vulkáni eredetű hegyek Magyarországon',
          places: [
            { name: 'Badacsony', lat: 46.8, lon: 17.5, note: 'bazalt, Balaton-felvidék' },
            { name: 'Somló', lat: 47.15, lon: 17.35, note: 'bazalt, tanúhegy' },
            { name: 'Ság-hegy', lat: 47.23, lon: 16.97, note: 'bazalt, Celldömölk mellett' },
            {
              name: 'Mátra (Kékes)',
              lat: 47.87,
              lon: 20.01,
              note: 'andezit, Magyarország legmagasabb hegye',
            },
            { name: 'Börzsöny', lat: 47.93, lon: 18.97, note: 'andezit és tufa' },
            { name: 'Visegrádi-hegység', lat: 47.72, lon: 18.9, note: 'andezit és tufa' },
            { name: 'Tokaji-hegy', lat: 48.12, lon: 21.41, note: 'riolit és riolittufa, borvidék' },
          ],
        },
        {
          kind: 'heading',
          emelt: true,
          text: 'Vulkáni utóműködés',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **vulkáni utóműködés** a vulkáni kitörések lecsengése után a kihűlő magma még hosszan tartó gáz- és vízgőzkiáramlása. Formái:',
        },
        {
          kind: 'terms',
          emelt: true,
          items: [
            {
              term: 'gejzír',
              text: 'Időszakosan, szökőkútként kilövellő forró víz és gőz (Izland, Yellowstone).',
              emelt: true,
            },
            { term: 'fumarola', text: 'Forró vízgőz és gázok kiáramlása a talajból.', emelt: true },
            {
              term: 'szolfatára',
              text: 'Kéntartalmú gázok (kén-hidrogén) kiáramlása, kénkiválással.',
              emelt: true,
            },
            {
              term: 'mofetta',
              text: 'Hideg, szén-dioxid-kiáramlás; fulladásveszélyes lehet.',
              emelt: true,
            },
            {
              term: 'savanyúvíz',
              text: 'Szén-dioxid-tartalmú természetes ásványvíz, például a Balaton-felvidéken.',
              emelt: true,
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Gazdasági jelentőség**: a gejzírek és a forró források hőjét fűtésre és villamosenergia-termelésre használják (geotermikus energia), a termálvíz és a savanyúvíz a gyógyturizmust és az ásványvíz-ipart szolgálja, a szolfatárák kénje és a mofetták szén-dioxidja ipari nyersanyag.',
        },
        {
          kind: 'heading',
          text: 'Veszélyek és alkalmazkodás',
        },
        {
          kind: 'text',
          text: 'A vulkánkitörés veszélyei: **lávafolyás**, hamueső, izzó gázfelhők, iszapár, és a levegőbe jutó hamu nyomán az éghajlat időleges lehűlése, a légi közlekedés zavara. Védekezés: a vulkán megfigyelése (műszerek, kitörés-előrejelzés), kiürítési tervek, kitörés-térképek, a lakott övezetek tervezése. Mégis sokan laknak vulkánok közelében, mert a vulkáni talaj termékeny.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térképvázlaton vulkáni övezet vagy vulkán (Vezúv, Etna, Hawaii, Izland, Mount St. Helens, Popocatépetl, Teleki-vulkán).',
            'Vulkán metszeti ábrája: magmakamra, kürtő, kráter, lávaréteg, hamu megnevezése.',
            'Párosítás: vulkántípus – jellemző (rétegvulkán, pajzsvulkán, hasadékvulkán).',
            'Emelt szinten: forrópontos vulkánosság ábrája, vulkáni utóműködés formái és hasznosításuk.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a magma és a láva felcserélése (a láva a **felszínre ért** magma), vagy a Hawaii-szigetek vulkánjait lemezszegélyhez kötni. Hawaii forrópontos vulkánosság, a Csendes-óceáni-lemez közepén van.',
        },
        {
          kind: 'tip',
          text: 'Ha a kérdés a vulkánok és a lemezszegélyek kapcsolatát kéri, mondd ki mindkét esetet: távolodó szegélynél a nyomáscsökkenéssel megolvadó anyag tör fel, közeledőnél az alábukó lemez beolvad, és a keletkező magma kitör.',
        },
      ],
      topicMatch: ['=kőzetburok', 'vulkán', 'vulkanizmus', 'magmás tevékenység', 'lemeztektonika'],
      quiz: [
        {
          question: 'Mit nevezünk lávának?',
          options: [
            'A magmakamrában lévő olvadt kőzetet.',
            'A felszínre ért magmát.',
            'A kitörés után hulló szilárd törmeléket.',
            'A kráterben lévő vizet.',
          ],
          answer: 1,
          explanation:
            'A magma a kéreg alatt vagy a kéregben van; a felszínre jutott magma a láva.',
        },
        {
          question:
            'Melyik vulkántípust jellemzi a meredek kúp és a váltakozó láva- és hamurétegek?',
          options: ['Pajzsvulkán', 'Hasadékvulkán', 'Rétegvulkán', 'Kaldera'],
          answer: 2,
          explanation:
            'A rétegvulkán felépítésében váltakoznak a lávarétegek és a hamu-, tufarétegek; ilyen a Vezúv és a Fuji.',
        },
        {
          question: 'Melyik hegy vulkáni eredetű andezitből áll Magyarországon?',
          options: ['Mecsek', 'Bakony', 'Mátra', 'Bükk'],
          answer: 2,
          explanation:
            'A Mátra a miocén vulkáni működés terméke, andezitből és tufából épült fel; a Mecsek, a Bakony és a Bükk üledékes és átalakult kőzetekből áll.',
        },
        {
          question: 'Hol találhatók a vulkánok legnagyobb számban a Földön?',
          options: [
            'A kontinensek belsejében, a lemezek közepén.',
            'Az Északi-sark körül.',
            'A Csendes-óceán peremén, az alábukási övezetek fölött.',
            'A Szaharában.',
          ],
          answer: 2,
          explanation:
            'A Csendes-óceán tűzgyűrűjében, ahol a lemezek alábukása miatt a magma felnyomul.',
        },
        {
          question: 'Mi a kaldera?',
          options: [
            'A hasadékvulkán lávamezője.',
            'A vulkán csatornája.',
            'A kitörés után a magmakamra beomlásával keletkező nagy kerek bemélyedés.',
            'A savanyúvíz forrása.',
          ],
          answer: 2,
          explanation:
            'A kaldera a nagy kitöréssel kiürült magmakamra tetejének beomlásával jön létre.',
          emelt: true,
        },
        {
          question: 'Melyik vulkáni utóműködési forma a szén-dioxid hideg kiáramlása?',
          options: ['Gejzír', 'Szolfatára', 'Fumarola', 'Mofetta'],
          answer: 3,
          explanation:
            'A mofetta hideg szén-dioxid-kiáramlás; a gejzír forró víz, a szolfatára kéntartalmú gáz, a fumarola forró gőz kiáramlása.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Vulkán', url: wiki('Vulkán') },
        { label: 'Wikipédia: Forró pont (geológia)', url: wiki('Forró pont geológia') },
        {
          label: 'Wikipédia: Magyarország vulkánosság',
          url: wiki('Magyarország vulkáni hegységei'),
        },
      ],
    },
    {
      id: 'foldrengesek-foldtani-veszelyek',
      subject: 'foldrajz',
      unitId: 'kozetburok',
      title: 'Földrengések és földtani veszélyek',
      level: 'both',
      requirement: {
        kozep:
          'A földrengések kialakulásának oka és kapcsolata a lemezszegélyekkel; a rengésfészek és a rengésközpont; a kőzetburok folyamataihoz kapcsolódó földtani veszélyek, alkalmazkodás, védekezés, kármegelőzés példákkal',
        emelt: 'A földrengéserősség mérésének elve, a rengések kísérőjelenségei',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **földrengés** a kőzetburokban felhalmozódott feszültség hirtelen felszabadulása, a kőzetek elmozdulása.',
            'Leggyakrabban **lemezszegélyeken** keletkezik, főleg közeledő és elcsúszó szegélyeken.',
            'A **rengésfészek** (hipocentrum) a mélybeli kiindulópont, a **rengésközpont** (epicentrum) a fölötte lévő felszíni pont. Itt a legnagyobb a rázkódás.',
            'A fő rengést **utórengések** követhetik.',
            '**Emelt szinten**: földrengéshullámok, szeizmográf, **Richter-skála** (magnitúdó) és **Mercalli-skála** (intenzitás), tengerrengés és **cunami**.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'rengésfészek (hipocentrum)',
              text: 'Az a mélybeli pont, ahol a kőzetek elmozdulása elkezdődik.',
            },
            {
              term: 'rengésközpont (epicentrum)',
              text: 'A fészek fölötti felszíni pont; a legerősebb rázkódás itt tapasztalható.',
            },
            {
              term: 'utórengés',
              text: 'A fő földrengést követő, gyengébb rengések, amelyek napokig, hetekig tarthatnak.',
            },
            {
              term: 'fészekmélység',
              text: 'A rengésfészek mélysége a felszín alatt.',
              emelt: true,
            },
            {
              term: 'Richter-skála',
              text: 'A rengés magnitúdóját (energiáját) kifejező, műszeres mérésen alapuló logaritmikus skála.',
              emelt: true,
            },
            {
              term: 'Mercalli-skála',
              text: 'A rengés hatásait (intenzitását) 12 fokozatban leíró skála.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Miért keletkezik földrengés?' },
        {
          kind: 'text',
          text: 'A lemezek mozgása közben a kőzetekben feszültség halmozódik fel. Amikor ez meghaladja a kőzet szilárdságát, a kőzet **hirtelen elmozdul** (törés, vetődés), és rugalmas hullámok indulnak el: ez a **földrengés**. A legtöbb rengés a **lemezszegélyeken** van, ezért a rengésövezetek a lemezhatárokat rajzolják ki: a Csendes-óceán pereme, a Földközi-tengertől a Himalájáig húzódó öv, az óceánközépi hátságok és az elcsúszó szegélyek (San Andreas-törésvonal).',
        },
        {
          kind: 'text',
          text: 'Kisebb jelentőségű rengéseket **vulkánkitörések** vagy **barlangok beomlása** is okozhat. A rengések mélysége is mutatja a lemezszegély típusát: az alábukó lemezeknél a rengések fészke a lemez mentén egyre mélyebben van.',
        },
        {
          kind: 'compare',
          title: 'Rengésfészek és rengésközpont',
          columns: ['Rengésfészek (hipocentrum)', 'Rengésközpont (epicentrum)'],
          rows: [
            {
              label: 'Hol van?',
              cells: ['a felszín alatt, a kőzetekben', 'a felszínen, a fészek fölött'],
            },
            {
              label: 'Jellemző',
              cells: ['innen indul a kőzetek elmozdulása', 'itt a legerősebb a rázkódás'],
            },
            {
              label: 'Mélysége',
              cells: ['fészekmélység: sekély is, mély is lehet', 'felszíni pont, mélysége nincs'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Földrengéshullámok**: a fészekből kétféle hullám indul. A **P-hullám** (longitudinális) gyorsabb, szilárd és folyékony anyagban is terjed. Az **S-hullám** (transzverzális) lassabb, folyékony közegben nem terjed. A rengést a **szeizmográf** érzékeli, amely a **szeizmogramot** rajzolja. A hullámok viselkedéséből tudjuk, hogy a külső mag folyékony.',
        },
        {
          kind: 'heading',
          emelt: true,
          text: 'A földrengés erősségének mérése',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Richter-skála és Mercalli-skála',
          columns: ['Richter-skála (magnitúdó)', 'Mercalli-skála (intenzitás)'],
          rows: [
            {
              label: 'Mit mér?',
              cells: [
                'a rengés erősségét, a felszabaduló energiával kapcsolatban',
                'a rengés hatását az emberekre, épületekre, tájra',
              ],
            },
            { label: 'Alapja', cells: ['szeizmográf műszeres mérése', 'megfigyelés, kárfelmérés'] },
            {
              label: 'Beosztás',
              cells: ['logaritmikus, nyílt végű számskála', '12 fokozat (I–XII)'],
            },
            {
              label: 'Függ-e a helytől?',
              cells: [
                'nem, egy rengésnek egy magnitúdója van',
                'igen, helyenként más (az epicentrumtól távolodva csökken)',
              ],
            },
          ],
        },
        {
          kind: 'example',
          emelt: true,
          title: 'Magnitúdó és energia',
          problem:
            'Hányszor nagyobb a rezgés amplitúdója és hányszor több a felszabaduló energia egy 6,0 magnitúdójú rengésnél, mint egy 4,0 magnitúdójúnál?',
          solution:
            'A skála logaritmikus. A magnitúdó 1 egységnyi emelkedése kb. 10-szeres amplitúdót és kb. $10^{1{,}5} \\approx 32$-szeres energiát jelent. A különbség 2 egység:\n- amplitúdó: $10^2 = 100$-szoros,\n- energia: $10^{1{,}5 \\cdot 2} = 10^3 = 1000$-szeres.\nTehát a 6,0-s rengés amplitúdója 100-szor nagyobb, energiája kb. 1000-szer nagyobb.',
        },
        {
          kind: 'text',
          emelt: true,
          text: '**Kísérőjelenségek**: a földrengés nyomán felszíni repedések, földcsuszamlások, folyóvízi és talajvíz-változások, a talaj elfolyósodása és tűzesetek keletkezhetnek. A **tengerrengés** a tengerfenéken keletkező rengés, amely **cunamit** (szökőárat) válthat ki: a tengerfenék hirtelen elmozdulása hullámot indít, amely a nyílt tengeren alig látszik, a partok közelében viszont többméteres, pusztító hullámmá nő. Ilyen volt a 2004-es indiai-óceáni és a 2011-es japán cunami.',
        },
        { kind: 'heading', text: 'Földtani veszélyek, alkalmazkodás, védekezés' },
        {
          kind: 'text',
          text: 'A kőzetburok folyamataihoz kapcsolódó **földtani veszélyek**: a földrengés, a vulkánkitörés, a cunami, a földcsuszamlás. Következményeik: emberáldozatok, épületek és infrastruktúra pusztulása, gazdasági károk.',
        },
        {
          kind: 'compare',
          title: 'Megelőzés és védekezés',
          columns: ['Földrengés', 'Vulkánkitörés'],
          rows: [
            {
              label: 'Alkalmazkodás',
              cells: [
                'földrengésálló építés (rugalmas, acélvázas szerkezetek)',
                'a veszélyzónák beépítésének korlátozása',
              ],
            },
            {
              label: 'Előrejelzés',
              cells: [
                'pontosan nem jósolható; a rengésveszélyes területek ismertek',
                'műszeres megfigyelés (gázösszetétel, felszíni emelkedés) segít',
              ],
            },
            {
              label: 'Felkészülés',
              cells: [
                'gyakorlatok, riasztás, mentőszervezet, biztonságos épületek',
                'kiürítési tervek, riasztás, menedékhelyek',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: '**Magyarország** nem tartozik a legveszélyeztetettebb területek közé, de itt is előfordultak komolyabb rengések (például Komárom 1763, Mór 1810, Kecskemét 1911, Dunaharaszti 1956). Ezért az építésnél is figyelembe kell venni a szeizmikus terheket.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térképvázlaton rengésövezet és lemezszegély kapcsolata (Japán, Andok, San Andreas).',
            'Ábra: hipocentrum és epicentrum felismerése a metszeten.',
            'Rövid kifejtés: a földrengés oka, következményei és a védekezés lehetőségei.',
            'Emelt szinten: a Richter-skála és a Mercalli-skála megkülönböztetése, magnitúdószámítás, a cunami kialakulása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: az epicentrumot a földrengés mélyén keresni (az a hipocentrum), vagy a magnitúdót és az intenzitást egynek venni. A magnitúdó a rengés erőssége (egy érték), az intenzitás a hatása (helyenként más).',
        },
        {
          kind: 'tip',
          text: 'Védekezési kérdésnél három csoportban gondolkozz: építési előírások, riasztás és felkészülés, területhasználat. Ez a „kármegelőzés” válasz vázlata.',
        },
      ],
      topicMatch: ['=kőzetburok', 'lemeztektonika'],
      quiz: [
        {
          question: 'Hol érezhető a legerősebb rázkódás egy földrengés során általában?',
          options: [
            'A rengésközpontban (epicentrumban).',
            'A rengésfészekben, de csak a felszínen.',
            'A rengésfészektől távol.',
            'Mindenhol egyformán.',
          ],
          answer: 0,
          explanation:
            'Az epicentrum a fészek fölötti felszíni pont, ide érkezik legközelebb a rengés, ezért itt a legnagyobb a rázkódás.',
        },
        {
          question: 'Mi okozza a legtöbb földrengést?',
          options: [
            'Barlangok beomlása.',
            'A kőzetlemezek mozgása miatt felhalmozódott feszültség felszabadulása.',
            'A vulkáni hamu hullása.',
            'A tengerjárás.',
          ],
          answer: 1,
          explanation:
            'A rengések túlnyomó többsége a lemezek mozgásából származó feszültség hirtelen felszabadulása a lemezszegélyek mentén.',
        },
        {
          question: 'Melyik lemezszegély mentén van a híres San Andreas-törésvonal?',
          options: [
            'Közeledő szegély az Andok alatt',
            'Elcsúszó szegély Kaliforniában',
            'Távolodó szegély Izlandon',
            'Kontinentális ütközés a Himalájában',
          ],
          answer: 1,
          explanation:
            'A San Andreas-törésvonalnál a Csendes-óceáni- és az Észak-amerikai-lemez csúszik el egymás mellett.',
        },
        {
          question:
            'Hogyan változik a felszabaduló energia, ha a magnitúdó 1 egységgel nő (Richter-skála)?',
          options: [
            'Kétszeresére nő.',
            'Tízszeresére nő.',
            'Kb. 32-szeresére nő.',
            'Nem változik.',
          ],
          answer: 2,
          explanation:
            'A skála logaritmikus: egy egység kb. 10-szeres amplitúdót és $10^{1{,}5} \\approx 32$-szeres energiát jelent.',
          emelt: true,
        },
        {
          question: 'Mit mér a Mercalli-skála?',
          options: [
            'A felszabaduló energiát joule-ban.',
            'A rengés hatását (intenzitását) 12 fokozatban.',
            'A fészek mélységét.',
            'A cunami magasságát.',
          ],
          answer: 1,
          explanation:
            'A Mercalli-skála megfigyelésen alapuló, 12 fokozatú intenzitásskála; a magnitúdót a Richter-skála adja.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Földrengés', url: wiki('Földrengés') },
        { label: 'Wikipédia: Richter-skála', url: wiki('Richter-skála') },
        { label: 'Wikipédia: Cunami', url: wiki('Cunami') },
      ],
    },
    {
      id: 'hegysegkepzodes-nagyszerkezeti-egysegek',
      subject: 'foldrajz',
      unitId: 'kozetburok',
      title: 'Hegységképződés és a Föld nagyszerkezeti egységei',
      level: 'both',
      requirement: {
        kozep:
          'A hegységképződés típusai és kapcsolatuk a lemezmozgásokkal; gyűrődés és vetődés, gyűrthegységek és rögös szerkezetű hegységek; a hegységek csoportosítása; a Föld nagyszerkezeti egységei, kapcsolatuk az ásványkincsekkel; az ősmasszívumok típusai',
        emelt:
          'Hegységképződési szakaszok, izosztázia; folyamatábrák; nagyszerkezeti egységek formakincsének kialakulása; a kaledóniai, variszkuszi, eurázsiai és pacifikus hegységrendszer; síkságok csoportosítása; a kontinensek területét gyarapító és fogyasztó folyamatok',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Hegységek akkor jönnek létre, ha a **lemezek közeledése** a kőzeteket összenyomja vagy a kéreg feltöredezik. Három típus van: két kontinentális, két óceáni, óceáni és kontinentális lemez közeledése.',
            '**Gyűrődés**: az oldalirányú nyomás redőket hoz létre, ebből **gyűrthegység** lesz (Alpok, Himalája, Andok).',
            '**Vetődés**: a kőzetek eltörnek és elmozdulnak, így lesz **rögös szerkezetű hegység**, **árok**, **tektonikus medence**.',
            'A Föld nagyszerkezeti egységei: **ősföldek** (ősmasszívumok), **gyűrthegységek**, **rögös hegységek**, **süllyedékterületek**, óceáni formák.',
            'A **síkságok** lehetnek feltöltöttek vagy lepusztultak (letarolt).',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'redő',
              text: 'A kőzetrétegek gyűrődés során kialakult hullámszerű meghajlása.',
            },
            {
              term: 'vetősík',
              text: 'A felület, amely mentén a kőzettömegek elmozdulnak egymáshoz képest.',
            },
            { term: 'sasbérc', text: 'Két vető között megmaradt, kiemelt rög.' },
            {
              term: 'ősmasszívum (ősföld)',
              text: 'Nagyon idős, szilárd, megmerevedett kéregrész.',
            },
            {
              term: 'izosztázia',
              text: 'A kéreg és a köpeny egyensúlyi helyzete, amelyben a kéreg „úszik” a képlékeny köpenyen.',
              emelt: true,
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hegységképződés típusai' },
        {
          kind: 'compare',
          title: 'A hegységképződés három esete',
          columns: ['Mi ütközik?', 'Eredmény és példa'],
          rows: [
            {
              label: 'Két kontinentális lemez',
              cells: [
                'kontinentális és kontinentális',
                'összegyűrt, magas gyűrthegység: Himalája, Alpok',
              ],
            },
            {
              label: 'Két óceáni lemez',
              cells: [
                'óceáni és óceáni',
                'mélytengeri árok mellett vulkáni szigetív: Japán-szigetek, Fülöp-szigetek',
              ],
            },
            {
              label: 'Óceáni és kontinentális',
              cells: [
                'óceáni és kontinentális',
                'a kontinens pereme felgyűrődik, vulkánok keletkeznek: Andok, Kordillerák',
              ],
            },
          ],
        },
        { kind: 'heading', text: 'Gyűrődés és vetődés' },
        {
          kind: 'text',
          text: 'A **szerkezeti mozgások** a kéreg alakját megváltoztató mozgások. Két fő formájuk a **gyűrődés** és a **vetődés**.',
        },
        {
          kind: 'compare',
          title: 'Gyűrődés és vetődés',
          columns: ['Gyűrődés', 'Vetődés'],
          rows: [
            {
              label: 'Mi történik?',
              cells: [
                'oldalirányú nyomásra a rétegek meghajlanak, **redők** keletkeznek',
                'a kőzet eltörik, a **vetősík** mentén elmozdul',
              ],
            },
            {
              label: 'Kőzetek',
              cells: ['képlékenyebb (üledékes) kőzetek', 'merev, rideg kőzetek'],
            },
            {
              label: 'Formák',
              cells: [
                'álló, ferde és fekvő redő',
                'rög, sasbérc, árok, lépcsővidék, tektonikus medence',
              ],
            },
            {
              label: 'Hegység',
              cells: [
                'gyűrthegység: Alpok, Himalája, Andok',
                'rögös szerkezetű hegység: Bakony, Mecsek, Fekete-erdő, Vogézek',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A redők lehetnek **állók** (a két szárnyuk közel egyformán dől), **ferdék** vagy **fekvők** (egyik szárnyuk a másikra borul). Vetődés során a kiemelkedő rög a **sasbérc**, a lesüllyedt rész az **árok**, a több lépcsőben süllyedő terület a **lépcsővidék**. A nagy kiterjedésű, besüllyedt terület **tektonikus medence**: ilyen a Pannon-medence. Az **árokrendszerek** (hasadékvölgyek) például a Rajna-árok és a Kelet-afrikai-árokrendszer.',
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A redők részei: a felboltozódó rész a **redőboltozat**, a lehajló rész a **redőteknő**. Erősebb nyomásnál az egész redő átbukik és egy másik rétegre tolódik: ez az **áttolt redő**.',
        },
        {
          kind: 'compare',
          title: 'Gyűrthegységek és rögös hegységek',
          columns: ['Gyűrthegység', 'Rögös szerkezetű hegység'],
          rows: [
            {
              label: 'Alak',
              cells: [
                'hosszú, magas, gyakran csúcsos',
                'tömbös, lapos tetejű, mérsékelt magasságú',
              ],
            },
            {
              label: 'Kor',
              cells: ['fiatal vagy középidős', 'gyakran régi, lepusztult és újra feltört'],
            },
            {
              label: 'Példa',
              cells: ['Alpok, Himalája, Andok, Kárpátok', 'Mecsek, Bakony, Fekete-erdő, Vogézek'],
            },
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **megfiatalított rögös szerkezetű hegység** egy régi, már lepusztult gyűrthegység, amelyet fiatalabb mozgások rögökre törtek és újra felemeltek (például az Altaj és a Tien-san).',
        },
        {
          kind: 'heading',
          emelt: true,
          text: 'A hegységképződés szakaszai és az izosztázia',
        },
        {
          kind: 'keypoints',
          emelt: true,
          items: [
            '**Üledékfelhalmozódás**: a lemezek között süllyedő tengeri medencében vastag üledék rakódik le.',
            '**Tektogenezis**: a lemezek közeledése összegyűri, áttolja és részben átalakítja az üledéket; magma is felnyomulhat.',
            '**Orogenezis**: a gyűrt tömeg kiemelkedik, hegységgé válik; közben megindul a lepusztulás.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'Az **izosztázia** szerint a vékonyabb kéreg a köpenyen úgy úszik, mint a jéghegy a vízen. Ha egy hegység lepusztul (kisebb lesz a súlya), a kéreg lassan **kiemelkedik**, ha pedig nagy teher nehezedik rá (például jégtakaró), **lesüllyed**. A jégkorszak utáni felemelkedés Skandináviában ma is tart.',
        },
        { kind: 'heading', text: 'A Föld nagyszerkezeti egységei' },
        {
          kind: 'compare',
          title: 'A szárazföldek és az óceánok nagyszerkezeti egységei',
          columns: ['Szárazföldi egységek', 'Óceáni egységek'],
          rows: [
            {
              label: 'Régi, szilárd',
              cells: [
                'ősföldek (ősmasszívumok), táblás vidékek',
                'óceáni medence, mélytengeri síkság',
              ],
            },
            {
              label: 'Fiatal, mozgékony',
              cells: ['gyűrthegységek', 'óceánközépi hátság, mélytengeri árok'],
            },
            {
              label: 'Szerkezeti jellemző',
              cells: ['rögös hegységek, süllyedékterületek', 'ív alakú árok és szigetív'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **ősföld (ősmasszívum)** a Föld legrégebbi, megmerevedett kéregrésze, amelyet sokáig nem érintett hegységképződés. **Fedetlen** ősmasszívum, ahol a kristályos kőzetek a felszínen vannak (pajzs: például Balti-pajzs, Kanadai-ősföld). **Fedett** ősmasszívum fölött fiatalabb, vízszintes üledékek vannak, ez a **táblás vidék** (például a Kelet-európai-tábla). A kontinensek belseje a **süllyedékterület** is lehet, amelyet üledék tölt fel.',
        },
        {
          kind: 'keypoints',
          title: 'Az ősföldek (topográfia)',
          items: [
            'Afrikai-ősföld, Angara-ősföld, Antarktiszi-ősföld, Arab-ősföld',
            'Balti-ősföld, Brazil-ősföld, Dekkán-ősföld, Guyanai-ősföld',
            'Kanadai-ősföld, Kínai-ősföld, Nyugat-ausztráliai-ősföld',
          ],
        },
        {
          kind: 'text',
          text: 'Az ősföldeken és a hozzájuk kapcsolódó nagyszerkezeti egységeken jellegzetes **ásványkincsek** találhatók: az ősföldeken **vas-, réz-, arany-, uránérc**, a gyűrthegységekben **színes- és nemesfémek**, a süllyedékterületeken (medencékben) **szénhidrogének és kőszén**.',
        },
        {
          kind: 'compare',
          emelt: true,
          title: 'Eurázsiai- és Pacifikus-hegységrendszer',
          columns: ['Eurázsiai-hegységrendszer', 'Pacifikus-hegységrendszer'],
          rows: [
            {
              label: 'Hol?',
              cells: [
                'Atlasztól a Himalájáig, kelet–nyugati irányban',
                'a Csendes-óceán peremén, észak–déli irányban',
              ],
            },
            {
              label: 'Tagjai',
              cells: [
                'Pireneusok, Alpok, Kárpátok, Kaukázus, Himalája',
                'Andok, Kordillerák (Sziklás-hegység), Japán-szigetek',
              ],
            },
            {
              label: 'Kialakulás',
              cells: [
                'kontinentális lemezek ütközése',
                'óceáni lemezek alábukása kontinens vagy szigetív alatt',
              ],
            },
            { label: 'Vulkánosság', cells: ['kevés aktív vulkán', 'sok aktív vulkán (tűzgyűrű)'] },
          ],
        },
        {
          kind: 'keypoints',
          emelt: true,
          title: 'Kaledóniai- és Variszkuszi-hegységrendszer',
          items: [
            '**Kaledóniai**: régi, erősen lepusztult hegységek, például a Skandináv-hegység és a Skót-felföld.',
            '**Variszkuszi**: középidős, rögökre tört és megfiatalított hegységek, például az Urál, a Fekete-erdő, a Vogézek, a Francia-középhegység.',
          ],
        },
        {
          kind: 'text',
          emelt: true,
          text: 'A **síkságok** csoportosítása tengerszint feletti magasságuk szerint: **mélyföld** (200 m alatt), **hátság** (200–500 m között) és **magasföld** (500 m felett). Keletkezésük szerint **feltöltött** síkság (hordalék tölti fel a süllyedő területet: Nagy-Alföld, Mississippi-alföld, Amazonas-medence) és **lepusztult (letarolt)** síkság (a hegységek lepusztulásával jön létre, például a Balti-pajzs és a Kanadai-pajzs területe). A síkságok gazdasági jelentősége: mezőgazdaság, települések, közlekedés. A kontinensek területét **gyarapítja** az üledék feltöltése (deltaképződés) és a vulkánosság, **fogyasztja** a lepusztulás, a lemezek alábukása és a tenger előrenyomulása.',
        },
        {
          kind: 'text',
          text: 'Az óceánok feneke is tagolt. Az **óceánközépi hátság** a távolodó lemezek mentén emelkedik, a **mélytengeri árok** az alábukás helyén mélyül (Mariana-árok, Japán-árok), a **mélytengeri síkság** a mély óceáni medence sík feneke, az **óceáni medence** az óceánközépi hátságok közötti nagy mélyedés.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Térképvázlaton: a nagyszerkezeti egységek (ősföldek, Eurázsiai- és Pacifikus-hegységrendszer, Japán- és Mariana-árok).',
            'Ábra vagy kép alapján: gyűrthegység, rögös hegység, redő, sasbérc, tektonikus medence felismerése.',
            'Párosítás: hegységképződési típus – példa (Himalája, Andok, Japán-szigetek).',
            'Emelt szinten: hegységképződési szakaszok, izosztázia, a hegységrendszerek összehasonlítása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a Mecsekre és a Bakonyra azt mondani, hogy gyűrthegység. A Kárpát-medence belső hegységei rögös szerkezetűek (vetődéssel alakultak). A Kárpátok és az Alpok a gyűrthegységek.',
        },
        {
          kind: 'tip',
          text: 'Ha a hegységképződés típusát kell megadnod, először azt írd le, melyik két lemez közeledik (kontinentális vagy óceáni), és csak utána a következményt (gyűrődés, vulkánosság). Ez adja a pontot az indoklásra.',
        },
      ],
      topicMatch: [
        '=kőzetburok',
        'hegységképződés',
        'izosztázia',
        'nagyszerkezeti egységek',
        'ősföldek',
        'síkságok',
        '=hegységek',
        'gyűrt és töréses szerkezeti formák',
        'kőzetek és szerkezeti formák',
      ],
      quiz: [
        {
          question: 'Melyik hegységképződési típusra példa a Himalája?',
          options: [
            'Két óceáni lemez közeledése',
            'Óceáni és kontinentális lemez közeledése',
            'Két lemez elcsúszása',
            'Két kontinentális lemez közeledése',
          ],
          answer: 3,
          explanation:
            'A Himalája az Ausztrál–Indiai- és az Eurázsiai-lemez, két kontinentális lemez ütközésével keletkezett.',
        },
        {
          question: 'Melyik rögös szerkezetű hegység?',
          options: ['Alpok', 'Mecsek', 'Himalája', 'Andok'],
          answer: 1,
          explanation:
            'A Mecsek vetődéssel alakult, rögös szerkezetű; az Alpok, a Himalája és az Andok gyűrthegység.',
        },
        {
          question: 'Mi a sasbérc?',
          options: [
            'Két vető közé szorult, kiemelt rög.',
            'Lesüllyedt árok.',
            'Egy fekvő redő.',
            'Egy vulkáni kúp.',
          ],
          answer: 0,
          explanation: 'A sasbérc a vetődés során két vető között megmaradt, magasabban lévő rög.',
        },
        {
          question: 'Melyik az ősföld (ősmasszívum)?',
          options: ['Kanadai-ősföld', 'Alpok', 'Pannon-medence', 'Mariana-árok'],
          answer: 0,
          explanation:
            'A Kanadai-ősföld a Föld egyik legrégibb, megmerevedett kéregrésze; a többi fiatal gyűrthegység, süllyedékterület vagy óceáni árok.',
        },
        {
          question: 'Mi az izosztázia lényege?',
          options: [
            'A kéreg egyensúlyban úszik a képlékeny köpenyen, ezért a súlyváltozásra emelkedéssel vagy süllyedéssel reagál.',
            'A hegységek gyűrődése.',
            'A kőzetek átalakulása hő hatására.',
            'A vulkáni kitörések sorozata.',
          ],
          answer: 0,
          explanation:
            'Az izosztatikus egyensúly miatt a lepusztuló hegység emelkedik, a jégteher alatti terület süllyed.',
          emelt: true,
        },
      ],
      sources: [
        { label: 'Wikipédia: Hegységképződés', url: wiki('Hegységképződés') },
        { label: 'Wikipédia: Gyűrthegység', url: wiki('Gyűrthegység') },
        { label: 'Wikipédia: Izosztázia', url: wiki('Izosztázia') },
      ],
    },
    {
      id: 'asvanyok-kozetek-asvanykincsek',
      subject: 'foldrajz',
      unitId: 'kozetburok',
      title: 'Ásványok, kőzetek és ásványkincsek',
      level: 'both',
      requirement: {
        kozep:
          'A szénféleségek, a sófélék és a szénhidrogének keletkezése; a legfontosabb kőzetek besorolása keletkezés szerint, előfordulásuk és felhasználásuk; a hazánkban leggyakoribb kőzetek felismerése; az ércek gazdasági hasznosítása; a bányászat környezeti következményei',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az **ásvány** természetes, kémiailag és fizikailag egységes anyag (kvarc, kalcit). A **kőzet** ásványok keveréke (például gránit).',
            'Keletkezés szerint három csoport: **magmás**, **üledékes** és **átalakult** kőzetek.',
            'Az üledékes kőzetek lehetnek **törmelékesek**, **vegyi** és **szerves eredetűek**.',
            'A szén a növényi maradványokból keletkezik: **tőzeg, lignit, barnakőszén, feketekőszén, antracit** (növekvő széntartalom).',
            'A **kőolaj** és a **földgáz** tengeri élőlények maradványaiból, a **sók** (kősó, kálisó, gipsz) a tengervíz elpárolgásából keletkeznek.',
          ],
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'ásvány',
              text: 'Természetes eredetű, többnyire szilárd, egységes szerkezetű és összetételű anyag.',
            },
            {
              term: 'kőzet',
              text: 'Egy vagy több ásványból álló természetes képződmény, a kőzetburok építőköve.',
            },
            { term: 'ásványi nyersanyag', text: 'A gazdaság által felhasznált ásvány vagy kőzet.' },
            {
              term: 'érc',
              text: 'Fémet gazdaságosan kinyerhető mennyiségben tartalmazó ásvány vagy kőzet.',
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Ásványok és kőzetek' },
        {
          kind: 'text',
          text: 'Az **ásvány** egyetlen vegyület vagy elem, saját kristályformával: **kvarc** (üveg, homok alapanyaga), **kalcit** (a mészkő fő ásványa), **kősó**, **kálisó**, **gipsz**. A **kőzet** ásványok keveréke, például a gránit kvarcból, földpátból és csillámból áll.',
        },
        { kind: 'heading', text: 'A kőzetek három csoportja' },
        {
          kind: 'compare',
          title: 'Kőzettípusok keletkezés szerint',
          columns: ['Magmás kőzetek', 'Üledékes kőzetek'],
          rows: [
            {
              label: 'Keletkezés',
              cells: ['a magma megszilárdulásával', 'lerakódott anyag összecementálódásával'],
            },
            {
              label: 'Csoportok',
              cells: [
                'mélységi (gránit), vulkáni kiömlési (andezit, bazalt, riolit), vulkáni törmelékes (tufa)',
                'törmelékes, vegyi, szerves eredetű',
              ],
            },
            {
              label: 'Jellemző',
              cells: [
                'kristályos, nem rétegzett, nincs ősmaradvány',
                'rétegzett, ősmaradványt tartalmazhat',
              ],
            },
            {
              label: 'Hazai előfordulás',
              cells: [
                'Mátra, Börzsöny, Tokaj, Balaton-felvidék, Velencei-hegység',
                'Dunántúli-középhegység, Alföld, Dunántúli-dombság',
              ],
            },
          ],
        },
        {
          kind: 'compare',
          title: 'Átalakult kőzetek és az üledékes kőzetek csoportjai',
          columns: ['Átalakult kőzetek', 'Az üledékes kőzetek csoportjai'],
          rows: [
            {
              label: 'Keletkezés',
              cells: [
                'hő és nyomás hatására, olvadás nélkül alakulnak át más kőzetekből',
                'törmelékes: összecementálódott kőzettörmelék; vegyi: oldatból kicsapódás; szerves: élőlények maradványai',
              ],
            },
            {
              label: 'Példák',
              cells: [
                'márvány (mészkőből), palás kőzetek (például agyagpala, csillámpala)',
                'homok, homokkő, lösz, agyag (törmelékes); kősó, kálisó, gipsz, dolomit (vegyi); mészkő, szén (szerves)',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'A **mészkő** lehet vegyi (kicsapódás) és szerves eredetű is (kagylók, korallok vázából). A **tufa** (andezit-, bazalt-, riolittufa) a vulkáni hamu és törmelék összecementálódásával keletkezett magmás törmelékes kőzet.',
        },
        {
          kind: 'terms',
          items: [
            {
              term: 'gránit',
              text: 'Mélységi magmás kőzet; építőkő, burkolat, zúzottkő. Hazánkban a Velencei-hegységben.',
            },
            {
              term: 'andezit',
              text: 'Vulkáni kiömlési kőzet; zúzottkő, útépítés. A Mátrában, Börzsönyben, Visegrádi-hegységben.',
            },
            {
              term: 'bazalt',
              text: 'Vulkáni kiömlési kőzet; zúzottkő, útépítés. A Balaton-felvidéken.',
            },
            {
              term: 'riolit',
              text: 'Vulkáni kiömlési kőzet; építőkő. Tokaj-hegyalján, a Mátrában.',
            },
            {
              term: 'mészkő, dolomit',
              text: 'Üledékes kőzetek; cement- és mészgyártás, építőkő. A Dunántúli-középhegységben, a Bükkben.',
            },
            {
              term: 'homok, homokkő',
              text: 'Törmelékes üledékes kőzetek; építőipar, üveggyártás (kvarchomok).',
            },
            {
              term: 'lösz',
              text: 'Szél által lerakott, porszerű törmelék; termékeny talajok alapanyaga.',
            },
            { term: 'agyag', text: 'Finom szemcsés törmelékes kőzet; téglagyártás, kerámia.' },
            { term: 'márvány', text: 'Mészkőből átalakult kőzet; szobrászat, burkolat.' },
          ],
        },
        { kind: 'heading', text: 'Energiahordozók: a szén és a szénhidrogének' },
        {
          kind: 'text',
          text: 'A **szén** lápokban felhalmozódott növényi maradványokból keletkezett: a vízzel elzárt növényi anyag oxigénhiányban elszenesedett, majd a fölé rakódott üledék nyomása és hője tovább alakította. Minél idősebb és mélyebben fekvő a szén, annál nagyobb a széntartalma és a fűtőértéke.',
        },
        {
          kind: 'keypoints',
          title: 'A szénféleségek sora',
          items: [
            '**Tőzeg**: legfiatalabb, legalacsonyabb széntartalom, még lápokban keletkezik.',
            '**Lignit** és **barnakőszén**: fiatalabb szenek; hazánkban a Mátra alján (lignit), Tatabánya, Ajka környékén (barnakőszén).',
            '**Feketekőszén**: idősebb, nagyobb fűtőértékű; Magyarországon a Mecsekben (Pécs környéke).',
            '**Antracit**: a legidősebb, legnagyobb széntartalmú.',
          ],
        },
        {
          kind: 'text',
          text: 'A **kőolaj** és a **földgáz** tengerekben és tavakban élt apró élőlények (plankton, alga) iszapba temetett, oxigénmentes közegben átalakult maradványaiból keletkezett. A kőolaj és a gáz a porózus kőzetekben felfelé vándorol, és a szilárd, át nem eresztő fedőrétegek alatt **csapdában** gyűlik össze. Hazánkban a Zala megyei (Nagylengyel) és az Alföldi (Algyő) mezők a legjelentősebbek.',
        },
        {
          kind: 'text',
          text: 'A **sók** (**kősó**, **kálisó**, **gipsz**) száraz, meleg éghajlaton a lefűződött tengeröblök vizének elpárolgásával, kicsapódás útján keletkeznek (vegyi üledékek). A kősó élelmiszer- és vegyipari alapanyag, a kálisó műtrágya, a gipsz építőipari alapanyag.',
        },
        { kind: 'heading', text: 'Ércek és bányászat' },
        {
          kind: 'text',
          text: 'Az **érc** fémet tartalmazó ásvány vagy kőzet. A **vasérc** az acélgyártás alapja, a **bauxit** az alumínium nyersanyaga. Hazánkban a bauxit a Dunántúli-középhegységben (Gánt, Nyirád, Halimba) található, a vasérc és a színesfémek (réz) hazai bányái lényegében kimerültek.',
        },
        {
          kind: 'map',
          title: 'Hazai ásványkincs-lelőhelyek',
          places: [
            { name: 'Gánt', lat: 47.39, lon: 18.39, note: 'bauxit' },
            { name: 'Tatabánya', lat: 47.58, lon: 18.4, note: 'barnakőszén' },
            { name: 'Ajka', lat: 47.1, lon: 17.56, note: 'barnakőszén' },
            { name: 'Pécs', lat: 46.07, lon: 18.23, note: 'feketekőszén (Mecsek)' },
            { name: 'Visonta', lat: 47.77, lon: 20.0, note: 'lignit (Mátra alja)' },
            { name: 'Algyő', lat: 46.33, lon: 20.2, note: 'kőolaj és földgáz' },
            { name: 'Nagylengyel', lat: 46.5, lon: 16.9, note: 'kőolaj (Zala)' },
          ],
        },
        {
          kind: 'keypoints',
          title: 'A bányászat környezeti következményei',
          items: [
            'Tájsebek, a felszín átalakulása, meddőhányók.',
            'A felszín süllyedése, a talajvízszint megváltozása, a bányavizek szivattyúzása.',
            'Por-, zaj- és vízszennyezés, a savas bányavíz.',
            'Élőhelyek pusztulása. A helyreállítás (rekultiváció) költséges.',
          ],
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Képfelismerés: gránit, bazalt, mészkő, homokkő, márvány, lösz, szénfajták.',
            'Csoportosítás táblázatban: a megadott kőzetek besorolása magmás, üledékes, átalakult csoportba.',
            'Rövid válasz: hogyan keletkezett a kőolaj, a barnakőszén vagy a kősó?',
            'Kifejtés: egy ásványkincs gazdasági hasznosítása és a bányászat környezeti hatása.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: a márványt üledékes kőzetnek tekinteni (átalakult kőzet), vagy a tufát vulkáni kiömlési kőzetnek (törmelékes). A mészkő nem magmás, de lehet szerves vagy vegyi eredetű is.',
        },
        {
          kind: 'tip',
          text: 'Kőzetfelismerésnél két kérdést tégy fel: kristályos-e (magmás), rétegzett-e és ősmaradványos (üledékes), vagy palás-csillámos (átalakult)? Ez a kulcs a legtöbb képes feladathoz.',
        },
      ],
      topicMatch: [
        '=kőzetburok',
        '=kőzetek',
        'magmás kőzetek',
        'ásványkincsek',
        'kőzetek és szerkezeti formák',
      ],
      quiz: [
        {
          question: 'Melyik kőzet vulkáni kiömlési magmás kőzet?',
          options: ['Gránit', 'Márvány', 'Homokkő', 'Bazalt'],
          answer: 3,
          explanation:
            'A bazalt a felszínre ömlött láva megszilárdulásával keletkezik. A gránit mélységi magmás, a márvány átalakult, a homokkő üledékes kőzet.',
        },
        {
          question: 'Melyik szenet jellemzi a legnagyobb széntartalom?',
          options: ['Antracit', 'Tőzeg', 'Lignit', 'Barnakőszén'],
          answer: 0,
          explanation:
            'A sorrend növekvő széntartalom szerint: tőzeg, lignit, barnakőszén, feketekőszén, antracit.',
        },
        {
          question: 'Melyik üledékes kőzet vegyi eredetű?',
          options: ['Homok', 'Kősó', 'Agyag', 'Lösz'],
          answer: 1,
          explanation:
            'A kősó az oldatból való kicsapódással (a tengervíz elpárolgásával) keletkezik, vegyi üledékes kőzet. A homok, az agyag és a lösz törmelékes.',
        },
        {
          question: 'Melyik kőzet alakul át márvánnyá?',
          options: ['Gránit', 'Mészkő', 'Homokkő', 'Bazalt'],
          answer: 1,
          explanation: 'A mészkő hő és nyomás hatására átalakulva márvánnyá lesz.',
        },
        {
          question: 'Melyik ásványi nyersanyag a bauxit?',
          options: ['Vasérc', 'Az alumínium nyersanyaga', 'Szénhidrogén', 'Építőkő'],
          answer: 1,
          explanation:
            'A bauxitból timföldön át alumíniumot állítanak elő. Hazánkban a Dunántúli-középhegységben található.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Kőzet', url: wiki('Kőzetek csoportosítása') },
        { label: 'Wikipédia: Szén', url: wiki('Kőszén') },
        { label: 'Wikipédia: Kőolaj', url: wiki('Kőolaj keletkezése') },
      ],
    },
    {
      id: 'kozetanyag-korforgas-erckepzodes',
      subject: 'foldrajz',
      unitId: 'kozetburok',
      title: 'Kőzetanyag-körforgás és ércképződés',
      level: 'emelt',
      requirement: {
        emelt:
          'A kőzetek anyagainak körforgása; a magmás ércképződés folyamata; a nehéz-, a színes- és a nemesfémércek képződése; a magmás kőzetek csoportosítása összetételük alapján; a nagy tömegű kőzetátalakítás és a fenntarthatóság kapcsolata',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **kőzetanyag-körforgás**: a magmából magmás kőzet, lepusztulásból üledék és üledékes kőzet, hő és nyomás hatására átalakult kőzet lesz, ez beolvadva újra magma.',
            'A magmás kőzetek **összetétel szerint** bázisosak, semlegesek vagy savanyúak (a kovasav-tartalom alapján).',
            '**Magmás ércképződés**: a magma lehűlésekor a fémes ásványok kiválnak és feldúsulnak.',
            '**Üledékes ércképződés**: a bauxit lehet **laterit-** vagy **karsztbauxit**.',
            'Az ércek **nehézfémek** (vas), **színesfémek** (réz, ólom, cink), **nemesfémek** (arany, ezüst) ércásványai.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A kőzetanyag-körforgás' },
        {
          kind: 'text',
          text: 'A kőzetek anyaga nem végleges: egy kőzet idővel más kőzetté alakulhat. A folyamat **körforgás**:',
        },
        {
          kind: 'keypoints',
          items: [
            '**Magma** → kihűl, megszilárdul → **magmás kőzet**.',
            'Felszínre kerül, **lepusztul** (mállás, szállítás) → **üledék** → összecementálódik → **üledékes kőzet**.',
            'A mélybe kerülő kőzet **hő és nyomás** hatására átalakul → **átalakult kőzet**.',
            'Nagy mélységben **beolvad** → újra **magma**.',
          ],
        },
        {
          kind: 'text',
          text: 'A körforgást két erőcsoport hajtja: a **belső erők** (lemezmozgások, magmás tevékenység) és a **külső erők** (lepusztítás, szállítás, lerakás). Ez magyarázza, hogy a felszíni kőzetek többsége miért fiatalabb a Földnél.',
        },
        { kind: 'heading', text: 'A magmás kőzetek csoportosítása összetétel szerint' },
        {
          kind: 'compare',
          title: 'Bázisos, semleges és savanyú magmás kőzetek',
          columns: ['Bázisos', 'Savanyú'],
          rows: [
            { label: 'Kovasav (SiO₂) tartalom', cells: ['kb. 52% alatti', 'kb. 65% feletti'] },
            { label: 'Szín és sűrűség', cells: ['sötét, nehéz', 'világos, könnyebb'] },
            { label: 'Példa', cells: ['bazalt', 'gránit, riolit'] },
          ],
        },
        {
          kind: 'text',
          text: 'A **semleges** magmás kőzetek (például az **andezit**) kovasavtartalma kb. 52 és 65% közötti, tehát a bázisos és a savanyú között áll.',
        },
        { kind: 'heading', text: 'Ércképződés' },
        {
          kind: 'text',
          text: '**Magmás ércképződés**: a lehűlő magmából először a nehéz, fémtartalmú ásványok kristályosodnak ki és a magmakamra aljára süllyednek, feldúsulnak. Később a maradék magmából forró, fémekben gazdag oldatok és gázok nyomulnak a repedésekbe, ahol lehűlve **erekben** kiválnak: így keletkezik a legtöbb **színes- és nemesfémérc**.',
        },
        {
          kind: 'terms',
          items: [
            { term: 'nehézfémek', text: 'Vas: ércásványai a magnetit és a hematit.' },
            {
              term: 'színesfémek',
              text: 'Réz (kalkopirit), ólom (galenit), cink (szfalerit); nagy részük hidrotermális oldatokból válik ki.',
            },
            {
              term: 'nemesfémek',
              text: 'Arany és ezüst; gyakran termés (tiszta) állapotban, kvarcerekben fordulnak elő.',
            },
          ],
        },
        {
          kind: 'text',
          text: '**Üledékes ércképződés**: a **bauxit** (alumíniumérc) két módon keletkezik. A **laterit-bauxit** trópusi, esős klímán a kőzetek kilúgozódásával, az alumínium feldúsulásával jön létre. A **karsztbauxit** a mészkőfelszín karsztos mélyedéseibe összemosódott bauxitanyagból áll; ilyen a Dunántúli-középhegység bauxitja.',
        },
        { kind: 'heading', text: 'Nagy tömegű kőzetátalakítás és fenntarthatóság' },
        {
          kind: 'text',
          text: 'Az ember a bányászattal, kőfejtéssel és építkezéssel évente hatalmas kőzetmennyiséget alakít át és mozgat meg. A nem megújuló ásványkincsek **elfogynak**, a bányászat tájat alakít át, szennyez, nagy az energiaigénye. A **fenntarthatóság** eszközei: takarékos felhasználás, újrahasznosítás (fémek, építési törmelék), a bányák **rekultivációja**, a környezetkímélő technológiák, a megújuló energiák használata, a körforgásos gazdaság.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Folyamatábra a kőzetek körforgásáról: nyilak mentén meg kell nevezni a folyamatokat és a kőzetcsoportokat.',
            'Ábra: a magmás ércképződés szakaszai a magmakamrában és a repedésekben.',
            'Csoportosítás: bázisos, semleges, savanyú magmás kőzetek (bazalt, andezit, gránit, riolit).',
            'Rövid kifejtés: a bauxit két típusa, a fémek hasznosítása, a bányászat és a fenntarthatóság.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hiba: azt gondolni, hogy a körforgás egyirányú, vagy hogy az átalakult kőzet keletkezéséhez olvadás kell. Az átalakulás szilárd állapotban, hő és nyomás hatására történik; ha a kőzet megolvad, már magmát kapunk.',
        },
        {
          kind: 'tip',
          text: 'A bázisos–savanyú sort tanuld sötét–világos, nehéz–könnyű párokkal: bazalt (bázisos, sötét), andezit (semleges), riolit és gránit (savanyú, világos).',
        },
      ],
      topicMatch: ['=kőzetburok', 'magmás kőzetek', 'ásványkincsek', '=kőzetek'],
      quiz: [
        {
          question: 'Melyik kőzet bázisos magmás kőzet?',
          options: ['Gránit', 'Riolit', 'Bazalt', 'Mészkő'],
          answer: 2,
          explanation:
            'A bazalt kovasavban szegény, sötét, nehéz, bázisos kőzet; a gránit és a riolit savanyú, a mészkő üledékes.',
        },
        {
          question:
            'Mi történik a kőzetanyag-körforgásban az átalakult kőzettel, ha nagy mélységben megolvad?',
          options: [
            'Üledékes kőzetté lesz.',
            'Magmává válik, ebből újra magmás kőzet keletkezhet.',
            'Törmelékké esik szét.',
            'Márvánnyá alakul.',
          ],
          answer: 1,
          explanation: 'A beolvadás után a magma újra megszilárdulhat, ezzel a körforgás bezárul.',
        },
        {
          question: 'Melyik bauxittípus jellemzi a Dunántúli-középhegységet?',
          options: ['Karsztbauxit', 'Lateritbauxit', 'Vulkáni bauxit', 'Tengeri bauxit'],
          answer: 0,
          explanation:
            'A hazai bauxit a mészkőfelszín karsztos mélyedéseibe települt, ezért karsztbauxit.',
        },
        {
          question: 'Melyik fém nemesfém?',
          options: ['Réz', 'Ólom', 'Vas', 'Arany'],
          answer: 3,
          explanation: 'Az arany és az ezüst nemesfém; a réz és az ólom színesfém, a vas nehézfém.',
        },
      ],
      sources: [
        { label: 'Wikipédia: Kőzetek körforgása', url: wiki('Kőzetciklus') },
        { label: 'Wikipédia: Bauxit', url: wiki('Bauxit') },
        { label: 'Wikipédia: Magmás kőzetek', url: wiki('Magmás kőzetek') },
      ],
    },
  ],
};

export default unit;
