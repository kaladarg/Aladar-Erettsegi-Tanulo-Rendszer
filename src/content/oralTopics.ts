/**
 * Built-in oral exam topic areas (középszint), drafted from the published exam
 * requirements. They are a starting point only: each school issues its own
 * tétel list, which students add as their own topics. Review status: draft.
 */
export interface BuiltinOralTopic {
  id: string;
  subject: string;
  /** Section heading, e.g. "Irodalom" or "Nyelvtan". */
  group: string;
  title: string;
}

const topic = (subject: string, group: string, slug: string, title: string) => ({
  id: `${subject}-${slug}`,
  subject,
  group,
  title,
});

export const BUILTIN_ORAL_TOPICS: BuiltinOralTopic[] = [
  // Magyar nyelv és irodalom: irodalom
  topic('magyar', 'Irodalom', 'eletmu-petofi', 'Életmű: Petőfi Sándor'),
  topic('magyar', 'Irodalom', 'eletmu-arany', 'Életmű: Arany János'),
  topic('magyar', 'Irodalom', 'eletmu-ady', 'Életmű: Ady Endre'),
  topic('magyar', 'Irodalom', 'eletmu-babits', 'Életmű: Babits Mihály'),
  topic('magyar', 'Irodalom', 'eletmu-kosztolanyi', 'Életmű: Kosztolányi Dezső'),
  topic('magyar', 'Irodalom', 'eletmu-jozsef-attila', 'Életmű: József Attila'),
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

/** Subjects that have built-in oral topics. */
export const ORAL_TOPIC_SUBJECTS = ['magyar', 'tortenelem', 'angol', 'nemet', 'foldrajz'];

/** Foreign languages: no preparation time, a different outline. */
export const LANGUAGE_SUBJECTS = ['angol', 'nemet'];
