/**
 * Built-in oral exam topic areas, drafted from the published exam requirements
 * (2024 detailed requirements, szóbeli vizsga and témakörök). They are a
 * starting point only: each school issues its own tétel list, which students
 * add as their own topics. Review status: draft.
 *
 * A topic without a `level` belongs to both levels. Where the emelt oral is
 * built differently from the középszint one (történelem, matematika, földrajz,
 * the languages), the középszint topics carry `level: 'kozep'` and the emelt
 * ones `level: 'emelt'` with ids containing "-emelt-".
 */
export type OralLevel = 'kozep' | 'emelt';

export interface BuiltinOralTopic {
  id: string;
  subject: string;
  /** Section heading, e.g. "Irodalom" or "Nyelvtan". */
  group: string;
  title: string;
  /** Missing = both levels. */
  level?: OralLevel;
}

/** Whether a topic is practised at the given level. */
export const topicInLevel = (topic: BuiltinOralTopic, level: OralLevel): boolean =>
  !topic.level || topic.level === level;

/** Subjects whose emelt oral has its own topic list (the rest share one list). */
const SEPARATE_EMELT = ['tortenelem', 'matematika', 'angol', 'nemet', 'foldrajz'];

const topic = (subject: string, group: string, slug: string, title: string) => ({
  id: `${subject}-${slug}`,
  subject,
  group,
  title,
});

const SHARED_AND_KOZEP_TOPICS: BuiltinOralTopic[] = [
  // Magyar nyelv és irodalom: irodalom
  topic('magyar', 'Irodalom', 'eletmu-petofi', 'Életmű: Petőfi Sándor'),
  topic('magyar', 'Irodalom', 'eletmu-arany', 'Életmű: Arany János'),
  topic('magyar', 'Irodalom', 'eletmu-ady', 'Életmű: Ady Endre'),
  topic('magyar', 'Irodalom', 'eletmu-babits', 'Életmű: Babits Mihály'),
  topic('magyar', 'Irodalom', 'eletmu-kosztolanyi', 'Életmű: Kosztolányi Dezső'),
  topic('magyar', 'Irodalom', 'eletmu-jozsef-attila', 'Életmű: József Attila'),
  topic('magyar', 'Irodalom', 'eletmu-jokai', 'Életmű: Jókai Mór'),
  topic('magyar', 'Irodalom', 'eletmu-mikszath', 'Életmű: Mikszáth Kálmán'),
  topic('magyar', 'Irodalom', 'eletmu-vorosmarty', 'Életmű: Vörösmarty Mihály'),
  topic('magyar', 'Irodalom', 'eletmu-herczeg', 'Életmű: Herczeg Ferenc'),
  topic(
    'magyar',
    'Irodalom',
    'regi-irodalom',
    'Szerzők, művek, korszakok a régi magyar irodalomból (16–18. század)',
  ),
  topic(
    'magyar',
    'Irodalom',
    'hataron-tuli',
    'Metszetek a 20. századi délvidéki, erdélyi, felvidéki és kárpátaljai irodalomból',
  ),
  topic('magyar', 'Irodalom', 'portre', 'Portré egy szabadon választott szerzőről'),
  topic('magyar', 'Irodalom', 'latasmodok', 'Látásmódok: egy téma különböző korok irodalmában'),
  topic('magyar', 'Irodalom', 'kortars', 'Kortárs irodalom'),
  topic('magyar', 'Irodalom', 'vilagirodalom', 'Világirodalom'),
  topic('magyar', 'Irodalom', 'szinhaz', 'Színház és dráma'),
  topic('magyar', 'Irodalom', 'hatarteruletek', 'Az irodalom határterületei'),
  topic('magyar', 'Irodalom', 'regionalis', 'Regionális kultúra'),
  // Magyar nyelv és irodalom: nyelvtan
  topic('magyar', 'Nyelvtan', 'nyelvhasznalat', 'Ember és nyelvhasználat'),
  topic('magyar', 'Nyelvtan', 'kommunikacio', 'Kommunikáció'),
  topic('magyar', 'Nyelvtan', 'nyelvtortenet', 'A magyar nyelv története'),
  topic('magyar', 'Nyelvtan', 'nyelv-tarsadalom', 'Nyelv és társadalom'),
  topic('magyar', 'Nyelvtan', 'nyelvi-szintek', 'A nyelvi szintek'),
  topic('magyar', 'Nyelvtan', 'szoveg', 'A szöveg'),
  topic('magyar', 'Nyelvtan', 'retorika', 'A retorika alapjai'),
  topic('magyar', 'Nyelvtan', 'stilus', 'Stílus és jelentés'),
  topic('magyar', 'Nyelvtan', 'digitalis', 'Digitális kommunikáció'),
  // Történelem
  topic('tortenelem', 'Egyetemes történelem', 'okor', 'Az ókori civilizációk'),
  topic('tortenelem', 'Egyetemes történelem', 'kozepkor', 'A középkori Európa'),
  topic(
    'tortenelem',
    'Egyetemes történelem',
    'kora-ujkor',
    'A kora újkor: felfedezések, reformáció, abszolutizmus',
  ),
  topic(
    'tortenelem',
    'Egyetemes történelem',
    'forradalmak',
    'A polgári forradalmak és az ipari forradalom',
  ),
  topic(
    'tortenelem',
    'Egyetemes történelem',
    'nemzetallamok',
    'Nemzetállamok és birodalmak a 19. században',
  ),
  topic(
    'tortenelem',
    'Egyetemes történelem',
    'elso-vilaghaboru',
    'Az első világháború és következményei',
  ),
  topic(
    'tortenelem',
    'Egyetemes történelem',
    'ket-haboru-kozott',
    'A két világháború között: demokráciák és diktatúrák',
  ),
  topic('tortenelem', 'Egyetemes történelem', 'masodik-vilaghaboru', 'A második világháború'),
  topic('tortenelem', 'Egyetemes történelem', 'hideghaboru', 'A kétpólusú világ és a hidegháború'),
  topic(
    'tortenelem',
    'Magyar történelem',
    'allamalapitas',
    'A magyar nép eredete és az államalapítás',
  ),
  topic('tortenelem', 'Magyar történelem', 'arpad-kor', 'Az Árpád-kor'),
  topic('tortenelem', 'Magyar történelem', 'kesokozepkor', 'Magyarország a késő középkorban'),
  topic('tortenelem', 'Magyar történelem', 'harom-reszre', 'A három részre szakadt ország'),
  topic('tortenelem', 'Magyar történelem', 'habsburg', 'Magyarország a Habsburg Birodalomban'),
  topic(
    'tortenelem',
    'Magyar történelem',
    'reformkor',
    'A reformkor, a forradalom és szabadságharc',
  ),
  topic('tortenelem', 'Magyar történelem', 'dualizmus', 'A dualizmus kora'),
  topic('tortenelem', 'Magyar történelem', 'horthy', 'Magyarország a két világháború között'),
  topic(
    'tortenelem',
    'Magyar történelem',
    'haboru-magyar',
    'Magyarország a második világháborúban',
  ),
  topic('tortenelem', 'Magyar történelem', 'rakosi-kadar', 'A Rákosi- és a Kádár-korszak, 1956'),
  topic('tortenelem', 'Magyar történelem', 'rendszervaltas', 'A rendszerváltoztatás és a jelenkor'),
  // Angol nyelv: témakörök (a szóbeli három része: bemutatkozás és beszélgetés, szituáció, önálló témakifejtés)
  topic('angol', 'Témakörök', 'szemelyes', 'Személyes vonatkozások, család'),
  topic('angol', 'Témakörök', 'tarsadalom', 'Ember és társadalom'),
  topic('angol', 'Témakörök', 'kornyezet', 'Környezetünk'),
  topic('angol', 'Témakörök', 'iskola', 'Az iskola'),
  topic('angol', 'Témakörök', 'munka', 'A munka világa'),
  topic('angol', 'Témakörök', 'eletmod', 'Életmód'),
  topic('angol', 'Témakörök', 'szabadido', 'Szabadidő, művelődés, szórakozás'),
  topic('angol', 'Témakörök', 'utazas', 'Utazás, turizmus'),
  topic('angol', 'Témakörök', 'tudomany', 'Tudomány és technika'),
  topic('angol', 'Témakörök', 'gazdasag', 'Gazdaság és pénzügyek'),
  // Német nyelv: témakörök (a szóbeli három része: bemutatkozás és beszélgetés, szituáció, önálló témakifejtés)
  topic('nemet', 'Témakörök', 'szemelyes', 'Személyes vonatkozások, család'),
  topic('nemet', 'Témakörök', 'tarsadalom', 'Ember és társadalom'),
  topic('nemet', 'Témakörök', 'kornyezet', 'Környezetünk'),
  topic('nemet', 'Témakörök', 'iskola', 'Az iskola'),
  topic('nemet', 'Témakörök', 'munka', 'A munka világa'),
  topic('nemet', 'Témakörök', 'eletmod', 'Életmód'),
  topic('nemet', 'Témakörök', 'szabadido', 'Szabadidő, művelődés, szórakozás'),
  topic('nemet', 'Témakörök', 'utazas', 'Utazás, turizmus'),
  topic('nemet', 'Témakörök', 'tudomany', 'Tudomány és technika'),
  topic('nemet', 'Témakörök', 'gazdasag', 'Gazdaság és pénzügyek'),
  // Matematika: tipikus tételcímek (iskolánként eltérnek), az öt témakör szerint
  topic('matematika', 'Gondolkodási módszerek', 'halmazok', 'Halmazok, halmazműveletek'),
  topic(
    'matematika',
    'Gondolkodási módszerek',
    'logika',
    'Logika: kijelentések, tagadás, „ha…akkor”, „akkor és csak akkor”',
  ),
  topic(
    'matematika',
    'Gondolkodási módszerek',
    'kombinatorika',
    'Kombinatorika: sorbarendezések és kiválasztások',
  ),
  topic('matematika', 'Gondolkodási módszerek', 'grafok', 'Gráfok'),
  topic(
    'matematika',
    'Számelmélet, algebra',
    'oszthatosag',
    'Oszthatóság, prímszámok, számrendszerek',
  ),
  topic(
    'matematika',
    'Számelmélet, algebra',
    'szamhalmazok',
    'Számhalmazok, abszolútérték, intervallumok',
  ),
  topic('matematika', 'Számelmélet, algebra', 'hatvany-logaritmus', 'Hatvány, gyök, logaritmus'),
  topic('matematika', 'Számelmélet, algebra', 'masodfoku', 'Másodfokú egyenletek'),
  topic(
    'matematika',
    'Számelmélet, algebra',
    'egyenlotlensegek',
    'Egyenletek, egyenlőtlenségek megoldási módszerei',
  ),
  topic(
    'matematika',
    'Függvények, analízis',
    'fuggvenyek',
    'A függvény fogalma, elemi függvények és jellemzésük',
  ),
  topic('matematika', 'Függvények, analízis', 'transzformaciok', 'Függvénytranszformációk'),
  topic('matematika', 'Függvények, analízis', 'sorozatok', 'Számtani és mértani sorozatok'),
  topic(
    'matematika',
    'Függvények, analízis',
    'kamatos-kamat',
    'Kamatos kamat, törlesztés, megtakarítás',
  ),
  topic('matematika', 'Geometria', 'pitagorasz', 'A Pitagorasz-tétel és alkalmazásai'),
  topic(
    'matematika',
    'Geometria',
    'haromszogek',
    'Háromszögek nevezetes vonalai, pontjai és körei',
  ),
  topic('matematika', 'Geometria', 'kor', 'A kör és részei, a Thalész-tétel'),
  topic('matematika', 'Geometria', 'trigonometria', 'Szögfüggvények, szinusz- és koszinusztétel'),
  topic(
    'matematika',
    'Geometria',
    'vektorok-koordinatageometria',
    'Vektorok és koordinátageometria',
  ),
  topic('matematika', 'Geometria', 'testek', 'Felszín és térfogat: testek'),
  topic(
    'matematika',
    'Valószínűség, statisztika',
    'statisztika',
    'Leíró statisztika: átlag, medián, szórás',
  ),
  topic(
    'matematika',
    'Valószínűség, statisztika',
    'valoszinuseg',
    'Valószínűség-számítás: klasszikus és geometriai modell',
  ),
  // Földrajz: a vizsgakövetelmények fő témakörei
  topic('foldrajz', 'Természetföldrajz', 'terkep', 'Térképi ismeretek és tájékozódás'),
  topic('foldrajz', 'Természetföldrajz', 'kozmikus', 'A Föld mint égitest, időszámítás'),
  topic(
    'foldrajz',
    'Természetföldrajz',
    'kozetburok',
    'A kőzetburok: lemeztektonika, vulkánosság, földrengések',
  ),
  topic('foldrajz', 'Természetföldrajz', 'legkor', 'A légkör: időjárás és éghajlat'),
  topic(
    'foldrajz',
    'Természetföldrajz',
    'vizburok',
    'A vízburok: tengerek, folyók, felszín alatti vizek',
  ),
  topic('foldrajz', 'Természetföldrajz', 'ovezetesseg', 'Talajok és földrajzi övezetesség'),
  topic('foldrajz', 'Társadalomföldrajz', 'nepesseg', 'Népesség és települések'),
  topic('foldrajz', 'Társadalomföldrajz', 'vilaggazdasag', 'A világgazdaság és a globalizáció'),
  topic('foldrajz', 'Társadalomföldrajz', 'penzugy', 'Pénzügyi ismeretek a mindennapokban'),
  topic('foldrajz', 'Regionális földrajz', 'magyarorszag', 'Magyarország földrajza'),
  topic('foldrajz', 'Regionális földrajz', 'europa', 'Európa és az Európai Unió'),
  topic('foldrajz', 'Regionális földrajz', 'kontinensek', 'Az Európán kívüli kontinensek'),
  topic('foldrajz', 'Regionális földrajz', 'globalis', 'Környezeti és globális problémák'),
];

const emelt = (subject: string, group: string, slug: string, title: string): BuiltinOralTopic => ({
  id: `${subject}-emelt-${slug}`,
  subject,
  group,
  title,
  level: 'emelt',
});

/**
 * Emelt szint. Magyar: same eight témakör as középszint, with the deeper emelt
 * focus. Történelem: the hat kötelező tématerület plus the szabad témakör.
 * Matematika: the five témakör, each tétel with definition, theorem and proof,
 * a task and an application. Földrajz: the two-task tétel structure. Languages:
 * the emelt wording of the ten témakör (general viewpoint, B2).
 */
const EMELT_TOPICS: BuiltinOralTopic[] = [
  // Magyar nyelv és irodalom: irodalom, emelt fókusszal
  emelt(
    'magyar',
    'Irodalom',
    'eletmu',
    'Életmű: pályaszakaszok, kötetek, ciklusok, utóélet és kritikák egy kötelező szerzőnél',
  ),
  emelt(
    'magyar',
    'Irodalom',
    'motivumok',
    'Motívumok, toposzok, archetípusok és az intertextualitás művek között',
  ),
  emelt(
    'magyar',
    'Irodalom',
    'mufaj-valtozas',
    'Műfajok és poétikai sajátosságok történeti változása (pl. elégia, epigramma, regénytípusok)',
  ),
  emelt(
    'magyar',
    'Irodalom',
    'irodalmisag',
    'Az irodalom és az irodalmiság történetileg változó fogalma',
  ),
  emelt(
    'magyar',
    'Irodalom',
    'vilagirodalom',
    'Világirodalom: középkor, reneszánsz, felvilágosodás, avantgárd, a 20. század második fele',
  ),
  emelt(
    'magyar',
    'Irodalom',
    'drama',
    'Epikus dráma, abszurd dráma és egy 20–21. századi magyar dráma',
  ),
  emelt(
    'magyar',
    'Irodalom',
    'szinpadi-elo',
    'A színpadi előadás mint interpretáció: megjelenítések összehasonlítása',
  ),
  emelt('magyar', 'Irodalom', 'kortars', 'Tájékozódás a kortárs irodalmi nyilvánosságban'),
  emelt(
    'magyar',
    'Irodalom',
    'tomegkultura',
    'Magas művészet és tömegkultúra: olvasási igény és művészi színvonal',
  ),
  // Magyar nyelv és irodalom: nyelv, emelt fókusszal
  emelt(
    'magyar',
    'Nyelvtan',
    'kommunikacio',
    'Kommunikációelméletek és a kommunikáció interdiszciplináris megközelítése',
  ),
  emelt(
    'magyar',
    'Nyelvtan',
    'nyelvtortenet',
    'A magyar nyelv története: az ómagyar és a középmagyar kor, etimológiai szótár',
  ),
  emelt(
    'magyar',
    'Nyelvtan',
    'nyelvtipus-norma',
    'Nyelvtípusok, kétnyelvűség, nyelvváltozatok és a nyelvi norma változása',
  ),
  emelt(
    'magyar',
    'Nyelvtan',
    'rendszer',
    'A nyelvi rendszer: szófaji rendszer, összetett mondatok szerkezete',
  ),
  emelt(
    'magyar',
    'Nyelvtan',
    'szovegtan',
    'A szöveg: jelentésrétegek, téma–réma, kohézió, tudományos szövegek',
  ),
  emelt('magyar', 'Nyelvtan', 'retorika', 'Történeti és jelenkori szónoki beszéd elemzése'),
  emelt(
    'magyar',
    'Nyelvtan',
    'stilisztika',
    'Stílus és jelentés: szépirodalmi és nem szépirodalmi szövegek komplex stíluselemzése',
  ),
  emelt(
    'magyar',
    'Nyelvtan',
    'digitalis',
    'Digitális kommunikáció: az információ hitelessége, adatvédelem',
  ),
  // Történelem: a szóbeli vizsga tématerületei
  emelt(
    'tortenelem',
    'Gazdaság, gazdaságpolitika, anyagi kultúra',
    'ipari-forradalom',
    'Az ipari forradalom és a gazdasági modernizáció',
  ),
  emelt(
    'tortenelem',
    'Gazdaság, gazdaságpolitika, anyagi kultúra',
    'dualizmus-gazdasag',
    'A magyar gazdaság a dualizmus korában',
  ),
  emelt(
    'tortenelem',
    'Gazdaság, gazdaságpolitika, anyagi kultúra',
    'valsag-tervgazdasag',
    'A világgazdasági válság és a szocialista tervgazdaság',
  ),
  emelt(
    'tortenelem',
    'Népesség, település, életmód',
    'nepesseg',
    'Népesség, városfejlődés és életmód Magyarországon a 18–20. században',
  ),
  emelt(
    'tortenelem',
    'Népesség, település, életmód',
    'migracio',
    'Migráció, kivándorlás és nemzetiségi viszonyok',
  ),
  emelt(
    'tortenelem',
    'Egyén, közösség, társadalom',
    'tarsadalom',
    'A rendi társadalomtól a polgári társadalomig',
  ),
  emelt(
    'tortenelem',
    'Egyén, közösség, társadalom',
    'kisebbsegek',
    'Kisebbségek, a zsidóság sorsa, Trianon és következményei',
  ),
  emelt(
    'tortenelem',
    'Politikai berendezkedések a modern korban',
    'demokracia-diktatura',
    'Parlamentáris demokrácia és diktatúrák a 20. században',
  ),
  emelt(
    'tortenelem',
    'Politikai berendezkedések a modern korban',
    'magyar-rendszerek',
    'A magyar politikai rendszerek: a Horthy-korszak, a Rákosi- és a Kádár-rendszer',
  ),
  emelt(
    'tortenelem',
    'Politikai intézmények, eszmék, ideológiák',
    'eszmek',
    'A 19. század uralkodó eszméi (liberalizmus, nacionalizmus, konzervativizmus, szocializmus)',
  ),
  emelt(
    'tortenelem',
    'Politikai intézmények, eszmék, ideológiák',
    'intezmenyek',
    'Politikai intézmények: az Európai Unió és a magyar rendszerváltoztatás',
  ),
  emelt(
    'tortenelem',
    'Nemzetközi konfliktusok és együttműködés',
    'elso-vh',
    'Az első világháború (hadviselők, frontok, a háború jellege)',
  ),
  emelt(
    'tortenelem',
    'Nemzetközi konfliktusok és együttműködés',
    'masodik-vh',
    'A második világháború és Magyarország szerepe',
  ),
  emelt(
    'tortenelem',
    'Nemzetközi konfliktusok és együttműködés',
    'hideghaboru',
    'A hidegháború és az európai együttműködés',
  ),
  emelt(
    'tortenelem',
    'Szabad témakör',
    'szabad',
    'Szabad témakör (pl. helytörténet; forradalom – reform – kompromisszum; etnikum – nemzet – nemzetiség)',
  ),
  // Matematika: az öt témakör, emelt szintű tartalommal
  emelt(
    'matematika',
    'Gondolkodási módszerek',
    'bizonyitas',
    'Bizonyítási módszerek: skatulyaelv, teljes indukció, indirekt bizonyítás',
  ),
  emelt(
    'matematika',
    'Gondolkodási módszerek',
    'binomialis',
    'Kombinatorika és a binomiális tétel',
  ),
  emelt(
    'matematika',
    'Gondolkodási módszerek',
    'grafok',
    'Gráfok: fokszám, fa, teljes gráf, izomorf gráfok',
  ),
  emelt(
    'matematika',
    'Számelmélet, algebra',
    'szamelmelet',
    'Oszthatóság, kongruencia jellegű feladatok, számrendszerek',
  ),
  emelt(
    'matematika',
    'Számelmélet, algebra',
    'parameteres',
    'Paraméteres egyenletek és egyenlőtlenségek',
  ),
  emelt(
    'matematika',
    'Számelmélet, algebra',
    'exp-log-trig',
    'Exponenciális, logaritmusos és trigonometrikus egyenletek, egyenlőtlenségek',
  ),
  emelt(
    'matematika',
    'Számelmélet, algebra',
    'kozepek',
    'Nevezetes közepek és a közöttük fennálló egyenlőtlenségek',
  ),
  emelt(
    'matematika',
    'Függvények, analízis',
    'sorozat-hatarertek',
    'Sorozatok: korlátosság, monotonitás, konvergencia, határérték',
  ),
  emelt(
    'matematika',
    'Függvények, analízis',
    'derivalas',
    'Differenciálszámítás: deriválási szabályok, érintő, szélsőérték, konvexitás',
  ),
  emelt(
    'matematika',
    'Függvények, analízis',
    'integral',
    'Határozott integrál, területszámítás és térfogatszámítás',
  ),
  emelt(
    'matematika',
    'Geometria',
    'transzformaciok',
    'Geometriai transzformációk, hasonlóság és bizonyítások',
  ),
  emelt(
    'matematika',
    'Geometria',
    'kor-kuleti',
    'A kör: középponti és kerületi szögek tétele, körérintő',
  ),
  emelt(
    'matematika',
    'Geometria',
    'parabola',
    'Koordinátageometria: a kör és a parabola egyenlete, vektorok skaláris szorzata',
  ),
  emelt(
    'matematika',
    'Geometria',
    'testek',
    'Testek felszíne és térfogata, a csonkagúla és a csonkakúp térfogata',
  ),
  emelt(
    'matematika',
    'Valószínűség, statisztika',
    'feltetel-valoszinuseg',
    'Feltételes valószínűség, események függetlensége, teljes valószínűség',
  ),
  emelt(
    'matematika',
    'Valószínűség, statisztika',
    'statisztika',
    'Statisztikai mutatók: súlyozott átlag, átlagos abszolút eltérés, szórás',
  ),
  // Földrajz: a tétel két feladatból áll
  emelt('foldrajz', 'Természetföldrajzi feladat', 'terkep', 'Tájékozódás a földrajzi térben'),
  emelt(
    'foldrajz',
    'Természetföldrajzi feladat',
    'kozmikus',
    'Tájékozódás a kozmikus térben és az időben',
  ),
  emelt('foldrajz', 'Természetföldrajzi feladat', 'kozetburok', 'A kőzetburok földrajza'),
  emelt('foldrajz', 'Természetföldrajzi feladat', 'levegoburok', 'A levegőburok földrajza'),
  emelt('foldrajz', 'Természetföldrajzi feladat', 'vizburok', 'A vízburok földrajza'),
  emelt(
    'foldrajz',
    'Természetföldrajzi feladat',
    'ovezetesseg',
    'A geoszférák kölcsönhatásai, a földrajzi övezetesség',
  ),
  emelt(
    'foldrajz',
    'Természetföldrajzi feladat',
    'termfold-regio',
    'Magyarország, Európa és az Európán kívüli kontinensek természetföldrajza',
  ),
  emelt(
    'foldrajz',
    'Társadalomföldrajzi feladat',
    'telepules-nepesseg',
    'Átalakuló települések, eltérő demográfiai problémák a 21. században',
  ),
  emelt(
    'foldrajz',
    'Társadalomföldrajzi feladat',
    'vilaggazdasag',
    'A nemzetgazdaságtól a globális világgazdaságig',
  ),
  emelt(
    'foldrajz',
    'Társadalomföldrajzi feladat',
    'regionalis',
    'Magyarország, Európa és az Európán kívüli kontinensek társadalmi-gazdasági földrajza',
  ),
  emelt(
    'foldrajz',
    'Társadalomföldrajzi feladat',
    'fenntarthato',
    'Helyi problémák, globális kihívások, a fenntartható jövő dilemmái',
  ),
  ...['angol', 'nemet'].flatMap((subject) => [
    emelt(subject, 'Témakörök', 'szemelyes', 'A család szerepe az egyén és a társadalom életében'),
    emelt(
      subject,
      'Témakörök',
      'tarsadalom',
      'Az emberi kapcsolatok minősége, fontossága; társadalmi viselkedésformák',
    ),
    emelt(
      subject,
      'Témakörök',
      'kornyezet',
      'A lakóhely fejlődésének problémái; a környezetvédelem lehetőségei és problémái',
    ),
    emelt(
      subject,
      'Témakörök',
      'iskola',
      'Iskolatípusok és iskolarendszer Magyarországon és más országokban',
    ),
    emelt(
      subject,
      'Témakörök',
      'munka',
      'A munkavállalás körülményei, lehetőségei itthon és más országokban',
    ),
    emelt(
      subject,
      'Témakörök',
      'eletmod',
      'A kulturált étkezés, a szenvedélybetegségek, a gyógyítás egyéb módjai',
    ),
    emelt(
      subject,
      'Témakörök',
      'szabadido',
      'A szabadidő jelentősége; a művészet, a könyvek, a média és az internet szerepe',
    ),
    emelt(
      subject,
      'Témakörök',
      'utazas',
      'A motorizáció hatása; az idegenforgalom jelentősége; a célnyelvi ország látnivalói',
    ),
    emelt(
      subject,
      'Témakörök',
      'tudomany',
      'A tudományos és technikai fejlődés pozitív és negatív hatása a társadalomra',
    ),
    emelt(
      subject,
      'Témakörök',
      'gazdasag',
      'Üzleti világ, fogyasztás, reklámok; pénzkezelés a célnyelvi országokban',
    ),
  ]),
];

/** All built-in oral topics: shared and középszint ones first, then emelt. */
export const BUILTIN_ORAL_TOPICS: BuiltinOralTopic[] = [
  ...SHARED_AND_KOZEP_TOPICS.map((entry) =>
    SEPARATE_EMELT.includes(entry.subject) ? { ...entry, level: 'kozep' as const } : entry,
  ),
  ...EMELT_TOPICS,
];

/** Subjects that have built-in oral topics. */
export const ORAL_TOPIC_SUBJECTS = [
  'magyar',
  'tortenelem',
  'matematika',
  'angol',
  'nemet',
  'foldrajz',
];

/** Foreign languages: no preparation time, a different outline. */
export const LANGUAGE_SUBJECTS = ['angol', 'nemet'];
