/**
 * Main areas that group a subject's many topics on the Témakörök page.
 * The papers tag tasks with free-form topics (over a hundred per subject),
 * so each topic is placed by keywords. Areas follow the exam requirements:
 * maths by its chapters, history by period, languages by skill. The first
 * matching area wins, so the more specific areas come first.
 */
import type { TopicEntry } from './topics';

export interface TopicArea {
  id: string;
  name: string;
  match?: RegExp;
}

const AREAS: Record<string, TopicArea[]> = {
  matematika: [
    {
      id: 'fuggvenyek',
      name: 'Függvények, sorozatok',
      match: /függvény|zérushely|értékkészlet|sorozat/,
    },
    {
      id: 'gondolkodas',
      name: 'Halmazok, logika, kombinatorika, gráfok',
      match: /halmaz|logik|kombinatorik|gráf|venn|szita|permutáció|binomiális|bizonyítás/,
    },
    {
      id: 'valstat',
      name: 'Valószínűség, statisztika',
      match: /valószínűség|statisztik|diagram|átlag|medián|kvartilis|táblázat|módusz|szórás/,
    },
    {
      id: 'geometria',
      name: 'Geometria, trigonometria',
      match:
        /geometri|trigonometr|tétel|háromszög|négyszög|sokszög|kör|terület|kerület|felszín|térfogat|gömb|henger|kúp|hasáb|téglatest|forgástest|vektor|egyenes|távolság|szimmetria|szög|ív/,
    },
    { id: 'algebra', name: 'Számok, algebra, egyenletek' },
  ],
  tortenelem: [
    {
      id: 'kozelmult',
      name: '1945 után',
      match:
        /1945|1956|1989|1990|hidegháború|rákosi|kádár|keleti tömb|kétpólusú|rendszerváltás|rendszerváltoztatás|téesz|kollektiviz|jelenkor|nagy imre|német kérdés|határon túli|kultúrpolitika|20\. század második/,
    },
    {
      id: 'vilaghaboruk',
      name: 'A világháborúk kora (1914–1945)',
      match:
        /világháború|horthy|trianon|tanácsköztársaság|nemzetiszocializmus|nemzetiszocialista|holokauszt|bethlen|sztálin|szovjetunió|partizán|németország|propaganda/,
    },
    {
      id: 'tizenkilencedik',
      name: 'A forradalmak és a polgári átalakulás kora',
      match:
        /francia forradalom|ipari forradalom|reformkor|1848|áprilisi|dualizmus|kiegyezés|liberalizmus|nemzetiség|(?<!állam)polgári|kossuth|német egység|emancipáció|19\. század|villamos|kapitalizmus/,
    },
    {
      id: 'koraujkor',
      name: 'Kora újkor',
      match:
        /kora újkor|mohács|török|reformáció|katolikus megújulás|barokk|rákóczi|erdélyi fejedelemség|alkotmányos monarchia|újranépesülés|várháború|felvilágosodás|államelmélet/,
    },
    {
      id: 'kozepkor',
      name: 'Középkor',
      match:
        /középkor|iszlám|arab|honfoglalás|kalandozás|árpád|tatárjárás|béla|anjou|károly|hunyadi|mátyás|céh|jobbágy/,
    },
    { id: 'okor', name: 'Ókor', match: /ókor|athén|görög|róma|kereszténység/ },
    { id: 'temak', name: 'Témák a korszakokon át' },
  ],
  magyar: [
    {
      id: 'szovegalkotas',
      name: 'Szövegalkotás, elemzés',
      match: /témakifejtés|érvelés|elemzés|értelmezés|mondatalkotás|idézés/,
    },
    {
      id: 'elmelet',
      name: 'Műfajok, stílusok, verstan',
      match:
        /műfaj|műnem|stílus|verstan|verselés|toposz|motívum|ars poetica|eposz|ballada|líra|epika|dráma|szókép|esztétikai|irodalmi fogalm|reneszánsz|barokk|romantika|modernség|nyugat|tízek|irodalomtörténet/,
    },
    {
      id: 'szovegertes',
      name: 'Szövegértés',
      match:
        /szövegértés|információ|olvasás|táblázat|következtetés|ok-okozat|logikai viszony|címadás|szövegösszefüggés|szövegszerkezet|forrásmegjelölés|interjú|kommunikáció|szövegtípus|időrend/,
    },
    {
      id: 'nyelvtan',
      name: 'Nyelvtan, helyesírás',
      match:
        /nyelvtan|névtan|szó|mondat|hangtan|helyesírás|kezdőbetű|névmás|írásjel|mássalhangzó|szav|szinonim|rokon értelmű|fogalmak/,
    },
    { id: 'irodalom', name: 'Szerzők, művek, szereplők' },
  ],
  foldrajz: [
    {
      id: 'csillagaszat',
      name: 'Kozmikus környezet, időszámítás',
      match: /kozmikus|naprendszer|bolygó|hold|időszámítás|koordinát|fokhálózat|tengerjárás/,
    },
    {
      id: 'kornyezet',
      name: 'Környezeti és globális problémák',
      match: /környezet|globális|éghajlatváltozás|hulladék|fenntartható|túlfogyasztás/,
    },
    {
      id: 'terkep',
      name: 'Térkép, topográfia',
      match: /térkép|topográf|méretarány|szintvonal/,
    },
    {
      id: 'tarsadalom',
      name: 'Népesség, település, gazdaság',
      match:
        /népesség|népsűrűség|település|város|urbaniz|gazdaság|gazdasági|ipar|foglalkoztat|turizmus|kereskedelem|energia|globaliz|nemzetközi|elmaradott|korfa|öregedő|pénz|hitel|infláció|árfolyam/,
    },
    {
      id: 'termeszet',
      name: 'Kőzetburok, vízburok, légkör',
      match:
        /kőzet|lemeztekt|földtörténet|karszt|víz|tavak|folyó|tisza|tenger|légk|éghajlat|felhő|talaj|övezetes|síkság|geotermikus/,
    },
    { id: 'regiok', name: 'Térségek és országok' },
  ],
  angol: languageAreas(),
  nemet: languageAreas(),
};

function languageAreas(): TopicArea[] {
  return [
    { id: 'olvasas', name: 'Olvasott szöveg értése', match: /olvasott/ },
    { id: 'hallas', name: 'Hallott szöveg értése', match: /hallott/ },
    { id: 'nyelvhelyesseg', name: 'Nyelvhelyesség', match: /nyelvhelyesség|szóképzés|igealak/ },
    { id: 'iras', name: 'Íráskészség', match: /írás|levél|blog/ },
    { id: 'feladattipusok', name: 'Feladattípusok' },
  ];
}

const FALLBACK: TopicArea = { id: 'egyeb', name: 'Egyéb témák' };

export function topicAreas(subject: string): TopicArea[] {
  return AREAS[subject] ?? [FALLBACK];
}

/** The area a topic belongs to: the first that matches, else the subject's last area. */
export function topicArea(subject: string, topic: string): TopicArea {
  const areas = topicAreas(subject);
  const name = topic.toLocaleLowerCase('hu');
  return areas.find((area) => area.match?.test(name)) ?? areas.at(-1) ?? FALLBACK;
}

export interface AreaGroup {
  area: TopicArea;
  topics: TopicEntry[];
  tasks: number;
}

/** Topics grouped by area, in the subject's area order, empty areas left out. */
export function groupByArea(subject: string, topics: TopicEntry[]): AreaGroup[] {
  return topicAreas(subject)
    .map((area) => {
      const inArea = topics.filter((topic) => topicArea(subject, topic.name).id === area.id);
      const tasks = new Set(inArea.flatMap((t) => t.tasks.map((r) => `${r.examId}|${r.taskId}`)));
      return { area, topics: inArea, tasks: tasks.size };
    })
    .filter((group) => group.topics.length > 0);
}
