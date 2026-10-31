/**
 * Generated földrajz calculation tasks of the kinds the written paper asks: map scale,
 * local and zone time, noon sun height, population density, natural increase and
 * temperature change with height. Each task carries its answer and a worked solution.
 */
export type CalcKind =
  'meretarany' | 'helyiIdo' | 'zonaIdo' | 'delelesi' | 'nepsuruseg' | 'szaporodas' | 'homerseklet';

export const CALC_KINDS: CalcKind[] = [
  'meretarany',
  'helyiIdo',
  'zonaIdo',
  'delelesi',
  'nepsuruseg',
  'szaporodas',
  'homerseklet',
];

export interface CalcTask {
  kind: CalcKind;
  /** Rich text. */
  problem: string;
  /** A number, or minutes since midnight for times. */
  answer: number;
  answerType: 'number' | 'time';
  unit: string;
  /** Allowed difference for numbers. */
  tolerance: number;
  /** Worked solution steps, rich text. */
  steps: string[];
}

type Random = () => number;
const pick = <T>(rnd: Random, items: readonly T[]): T => items[Math.floor(rnd() * items.length)]!;
const int = (rnd: Random, min: number, max: number) => min + Math.floor(rnd() * (max - min + 1));
/** Hungarian number format with a decimal comma. */
export const hu = (n: number, digits = 2) => Number(n.toFixed(digits)).toString().replace('.', ',');
export const clock = (minutes: number) => {
  const m = ((Math.round(minutes) % 1440) + 1440) % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};
const dir = (lon: number) => (lon >= 0 ? `${lon}° k. h.` : `${-lon}° ny. h.`);

function meretarany(rnd: Random): CalcTask {
  const scale = pick(rnd, [25_000, 50_000, 100_000, 200_000, 250_000, 500_000, 1_000_000]);
  if (rnd() < 0.5) {
    const cm = int(rnd, 12, 140) / 10;
    const km = (cm * scale) / 100_000;
    return {
      kind: 'meretarany',
      problem: `Egy **1 : ${scale.toLocaleString('hu')}** méretarányú térképen két pont távolsága **${hu(cm)} cm**. Mekkora a valódi távolságuk kilométerben?`,
      answer: km,
      answerType: 'number',
      unit: 'km',
      tolerance: 0.005,
      steps: [
        `1 cm a térképen ${scale.toLocaleString('hu')} cm = ${hu(scale / 100_000, 3)} km a valóságban.`,
        `${hu(cm)} cm · ${hu(scale / 100_000, 3)} km/cm = **${hu(km, 3)} km**.`,
      ],
    };
  }
  const km = (int(rnd, 2, 60) * (scale >= 500_000 ? 5 : 1)) / (scale <= 50_000 ? 4 : 1);
  const cm = (km * 100_000) / scale;
  return {
    kind: 'meretarany',
    problem: `Két település valódi távolsága **${hu(km)} km**. Hány centiméter ez egy **1 : ${scale.toLocaleString('hu')}** méretarányú térképen?`,
    answer: cm,
    answerType: 'number',
    unit: 'cm',
    tolerance: 0.005,
    steps: [
      `${hu(km)} km = ${(km * 100_000).toLocaleString('hu')} cm.`,
      `${(km * 100_000).toLocaleString('hu')} cm : ${scale.toLocaleString('hu')} = **${hu(cm, 3)} cm**.`,
    ],
  };
}

function helyiIdo(rnd: Random): CalcTask {
  const a = int(rnd, -120, 150);
  let b = int(rnd, -120, 150);
  if (a === b) b += 15;
  const time = int(rnd, 6 * 4, 18 * 4) * 15;
  const diff = (b - a) * 4;
  const answer = time + diff;
  return {
    kind: 'helyiIdo',
    problem: `Az **${dir(a)}** hosszúsági körön a helyi idő **${clock(time)}**. Hány óra van ugyanekkor helyi idő szerint a **${dir(b)}** hosszúsági körön?`,
    answer: ((answer % 1440) + 1440) % 1440,
    answerType: 'time',
    unit: '',
    tolerance: 0,
    steps: [
      `A két hely hosszúságkülönbsége ${Math.abs(b - a)}°. 1° különbség 4 perc időkülönbség, tehát ${Math.abs(diff)} perc = ${Math.floor(Math.abs(diff) / 60)} óra ${Math.abs(diff) % 60} perc.`,
      `A második hely ${b > a ? 'keletebbre van, ott később van' : 'nyugatabbra van, ott korábban van'}: ${clock(time)} ${b > a ? '+' : '−'} ${Math.floor(Math.abs(diff) / 60)} óra ${Math.abs(diff) % 60} perc = **${clock(answer)}**.`,
    ],
  };
}

const ZONES = [
  { place: 'Budapest', inPlace: 'Budapesten', utc: 1 },
  { place: 'London', inPlace: 'Londonban', utc: 0 },
  { place: 'Moszkva', inPlace: 'Moszkvában', utc: 3 },
  { place: 'Újdelhi', inPlace: 'Újdelhiben', utc: 5.5 },
  { place: 'Peking', inPlace: 'Pekingben', utc: 8 },
  { place: 'Tokió', inPlace: 'Tokióban', utc: 9 },
  { place: 'Sydney', inPlace: 'Sydney-ben', utc: 10 },
  { place: 'New York', inPlace: 'New Yorkban', utc: -5 },
  { place: 'Chicago', inPlace: 'Chicagóban', utc: -6 },
  { place: 'Los Angeles', inPlace: 'Los Angelesben', utc: -8 },
  { place: 'Rio de Janeiro', inPlace: 'Rio de Janeiróban', utc: -3 },
] as const;
const utc = (z: number) => `UTC${z >= 0 ? '+' : '−'}${hu(Math.abs(z), 1)}`;

function zonaIdo(rnd: Random): CalcTask {
  const from = pick(rnd, ZONES);
  let to = pick(rnd, ZONES);
  if (to.place === from.place) to = ZONES[(ZONES.indexOf(from) + 3) % ZONES.length]!;
  const time = int(rnd, 0, 47) * 30;
  const diff = (to.utc - from.utc) * 60;
  const answer = time + diff;
  const dayNote =
    answer >= 1440 ? ' (már a következő napon)' : answer < 0 ? ' (még az előző napon)' : '';
  return {
    kind: 'zonaIdo',
    problem: `${from.place} zónaideje ${utc(from.utc)}, ${to.place} zónaideje ${utc(to.utc)} (téli időszámítás). Ha ${from.inPlace} **${clock(time)}** van, hány óra van ${to.inPlace}?`,
    answer: ((answer % 1440) + 1440) % 1440,
    answerType: 'time',
    unit: '',
    tolerance: 0,
    steps: [
      `A két zónaidő különbsége ${hu(to.utc - from.utc, 1)} óra (${to.utc > from.utc ? 'keletebbre később van' : 'nyugatabbra korábban van'}).`,
      `${clock(time)} ${diff >= 0 ? '+' : '−'} ${hu(Math.abs(diff) / 60, 1)} óra = **${clock(answer)}**${dayNote}.`,
    ],
  };
}

const DAYS = [
  { name: 'március 21-én', decl: 0 },
  { name: 'június 22-én', decl: 23.5 },
  { name: 'szeptember 23-án', decl: 0 },
  { name: 'december 22-én', decl: -23.5 },
] as const;

function delelesi(rnd: Random): CalcTask {
  const lat = pick(rnd, [-1, 1]) * int(rnd, 0, 66);
  const day = pick(rnd, DAYS);
  const height = 90 - Math.abs(lat - day.decl);
  const latText = lat >= 0 ? `${lat}° északi` : `${-lat}° déli`;
  return {
    kind: 'delelesi',
    problem: `Milyen magasan delel a Nap a **${latText}** szélességen **${day.name}**?`,
    answer: height,
    answerType: 'number',
    unit: '°',
    tolerance: 0.05,
    steps: [
      `Ezen a napon a Nap merőlegesen ${day.decl === 0 ? 'az Egyenlítő' : day.decl > 0 ? 'a Ráktérítő (23,5° É)' : 'a Baktérítő (23,5° D)'} fölött delel.`,
      `A delelési magasság: 90° − (a hely és a merőleges delelés helyének szélességkülönbsége) = 90° − ${hu(Math.abs(lat - day.decl), 1)}° = **${hu(height, 1)}°**.`,
    ],
  };
}

function nepsuruseg(rnd: Random): CalcTask {
  const area = int(rnd, 20, 900) * 100;
  const people = Math.round((area * int(rnd, 5, 400) * (0.8 + rnd() * 0.4)) / 1000) * 1000;
  const density = people / area;
  return {
    kind: 'nepsuruseg',
    problem: `Egy ország területe **${area.toLocaleString('hu')} km²**, népessége **${people.toLocaleString('hu')} fő**. Mekkora a népsűrűsége (egy tizedesjegyre kerekítve)?`,
    answer: Number(density.toFixed(1)),
    answerType: 'number',
    unit: 'fő/km²',
    tolerance: 0.051,
    steps: [
      'Népsűrűség = népesség : terület.',
      `${people.toLocaleString('hu')} fő : ${area.toLocaleString('hu')} km² ≈ **${hu(density, 1)} fő/km²**.`,
    ],
  };
}

function szaporodas(rnd: Random): CalcTask {
  const population = int(rnd, 20, 400) * 100_000;
  const births = Math.round((population * int(rnd, 70, 400)) / 10_000 / 100) * 100;
  const deaths = Math.round((population * int(rnd, 60, 160)) / 10_000 / 100) * 100;
  const rate = ((births - deaths) / population) * 1000;
  return {
    kind: 'szaporodas',
    problem: `Egy ország népessége **${population.toLocaleString('hu')} fő**. Egy év alatt **${births.toLocaleString('hu')}** gyermek született, és **${deaths.toLocaleString('hu')}** ember halt meg. Mekkora a természetes szaporodás (vagy fogyás) ezrelékben, egy tizedesjegyre?`,
    answer: Number(rate.toFixed(1)),
    answerType: 'number',
    unit: '‰',
    tolerance: 0.051,
    steps: [
      'Természetes szaporodás = (élveszületések − halálozások) : népesség · 1000.',
      `(${births.toLocaleString('hu')} − ${deaths.toLocaleString('hu')}) : ${population.toLocaleString('hu')} · 1000 ≈ **${hu(rate, 1)} ‰**${rate < 0 ? ', vagyis természetes fogyás' : ''}.`,
    ],
  };
}

function homerseklet(rnd: Random): CalcTask {
  const low = int(rnd, 0, 12) * 100;
  const high = low + int(rnd, 6, 30) * 100;
  const t0 = int(rnd, 8, 30);
  const t1 = t0 - ((high - low) / 100) * 0.5;
  return {
    kind: 'homerseklet',
    problem: `A hegy lábánál, **${low} m** magasan **${t0} °C** a hőmérséklet. Mennyi a hőmérséklet a **${high} m** magas csúcson, ha 100 méterenként 0,5 °C-kal csökken?`,
    answer: t1,
    answerType: 'number',
    unit: '°C',
    tolerance: 0.05,
    steps: [
      `A szintkülönbség ${high - low} m, ez ${hu((high - low) / 100, 1)} · 100 m.`,
      `${t0} °C − ${hu((high - low) / 100, 1)} · 0,5 °C = **${hu(t1, 1)} °C**.`,
    ],
  };
}

const MAKERS: Record<CalcKind, (rnd: Random) => CalcTask> = {
  meretarany,
  helyiIdo,
  zonaIdo,
  delelesi,
  nepsuruseg,
  szaporodas,
  homerseklet,
};

export function makeCalcTask(kind: CalcKind, rnd: Random = Math.random): CalcTask {
  return MAKERS[kind](rnd);
}

/** Reads the student's answer: a number with a decimal comma or point, or a time as óó:pp. */
export function checkCalcAnswer(task: CalcTask, input: string): boolean | null {
  const text = input.trim();
  if (!text) return null;
  if (task.answerType === 'time') {
    const match = /^(\d{1,2})[:.](\d{2})$/.exec(text);
    if (!match) return null;
    return Number(match[1]) * 60 + Number(match[2]) === task.answer;
  }
  const value = Number(text.replace(/\s/g, '').replace(',', '.'));
  if (!Number.isFinite(value)) return null;
  return Math.abs(value - task.answer) <= task.tolerance;
}
