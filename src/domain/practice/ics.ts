/**
 * Builds an iCalendar file (RFC 5545) with the written exams and study
 * reminders. The student imports it into their own calendar app, so the
 * reminders work without a server, an account or notifications from us.
 */
export interface CalendarInput {
  /** Subject id → exam day (YYYY-MM-DD). */
  examDates: Record<string, string>;
  subjectName: (id: string) => string;
  /** Today, YYYY-MM-DD. */
  today: string;
  /** Weekly planning reminder: ISO weekday (1 = Monday) and time (HH:MM), or null. */
  weekly: { weekday: number; time: string } | null;
  /** Daily review reminder time (HH:MM), or null. */
  daily: string | null;
  appUrl: string;
  /** Creation time, for DTSTAMP. */
  now: Date;
}

const ICS_DAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

/** Escapes text values (RFC 5545, 3.3.11). */
const text = (value: string) =>
  value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');

/** Folds lines longer than 75 octets (RFC 5545, 3.1). */
function fold(line: string): string {
  const bytes = new TextEncoder();
  if (bytes.encode(line).length <= 75) return line;
  const parts: string[] = [];
  let current = '';
  for (const char of line) {
    const limit = parts.length === 0 ? 75 : 74;
    if (bytes.encode(current + char).length > limit) {
      parts.push(current);
      current = char;
    } else current += char;
  }
  parts.push(current);
  return parts.join('\r\n ');
}

const compact = (day: string) => day.replace(/-/g, '');
const pad = (n: number) => String(n).padStart(2, '0');
const utcStamp = (date: Date) =>
  `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
    date.getUTCHours(),
  )}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;

function addDays(day: string, days: number): string {
  const [y, m, d] = day.split('-').map(Number);
  const date = new Date(Date.UTC(y!, m! - 1, d! + days));
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

/** First day on or after `day` that falls on the ISO weekday. */
function nextWeekday(day: string, weekday: number): string {
  const [y, m, d] = day.split('-').map(Number);
  const current = ((new Date(Date.UTC(y!, m! - 1, d!)).getUTCDay() + 6) % 7) + 1;
  return addDays(day, (weekday - current + 7) % 7);
}

const alarm = (trigger: string, description: string) => [
  'BEGIN:VALARM',
  'ACTION:DISPLAY',
  `DESCRIPTION:${text(description)}`,
  `TRIGGER:${trigger}`,
  'END:VALARM',
];

export function buildCalendar(input: CalendarInput): string {
  const stamp = utcStamp(input.now);
  const exams = Object.entries(input.examDates)
    .filter(([, day]) => day >= input.today)
    .sort((a, b) => a[1].localeCompare(b[1]));
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Erettsegi Gyakorlo//HU',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${text('Érettségi')}`,
  ];
  const planUrl = new URL('gyakorlas/terv', input.appUrl).href;

  for (const [subject, day] of exams) {
    const name = input.subjectName(subject);
    lines.push(
      'BEGIN:VEVENT',
      `UID:exam-${subject}-${compact(day)}@erettsegi-gyakorlo`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${compact(day)}`,
      `DTEND;VALUE=DATE:${compact(addDays(day, 1))}`,
      `SUMMARY:${text(`Érettségi: ${name} írásbeli`)}`,
      `DESCRIPTION:${text(`Sok sikert! Vidd magaddal a személyi igazolványodat és a megengedett segédeszközöket.\n${input.appUrl}`)}`,
      'TRANSP:TRANSPARENT',
      ...alarm('-P7D', `Egy hét múlva: ${name} írásbeli érettségi`),
      ...alarm('-PT12H', `Holnap: ${name} írásbeli érettségi`),
      'END:VEVENT',
    );
  }

  const last = exams.at(-1)?.[1];
  if (last) {
    const until = `UNTIL=${compact(last)}T235959`;
    if (input.weekly) {
      const first = nextWeekday(input.today, input.weekly.weekday);
      lines.push(
        'BEGIN:VEVENT',
        'UID:weekly-plan@erettsegi-gyakorlo',
        `DTSTAMP:${stamp}`,
        `DTSTART:${compact(first)}T${input.weekly.time.replace(':', '')}00`,
        'DURATION:PT30M',
        `RRULE:FREQ=WEEKLY;BYDAY=${ICS_DAYS[input.weekly.weekday - 1]};${until}`,
        `SUMMARY:${text('Érettségi: heti terv')}`,
        `DESCRIPTION:${text(`Nézd meg az e heti teendőidet a Tervem oldalon:\n${planUrl}`)}`,
        `URL:${planUrl}`,
        ...alarm('PT0M', 'Érettségi: nézd meg a heti teendőidet'),
        'END:VEVENT',
      );
    }
    if (input.daily) {
      const reviewUrl = new URL('gyakorlas/mai-adag', input.appUrl).href;
      lines.push(
        'BEGIN:VEVENT',
        'UID:daily-review@erettsegi-gyakorlo',
        `DTSTAMP:${stamp}`,
        `DTSTART:${compact(input.today)}T${input.daily.replace(':', '')}00`,
        'DURATION:PT15M',
        `RRULE:FREQ=DAILY;${until}`,
        `SUMMARY:${text('Érettségi: Mai adag')}`,
        `DESCRIPTION:${text(`Mai adag: rövid gyakorlás a választott témádból:\n${reviewUrl}`)}`,
        `URL:${reviewUrl}`,
        ...alarm('PT0M', 'Érettségi: jöhet a Mai adag'),
        'END:VEVENT',
      );
    }
  }
  lines.push('END:VCALENDAR');
  return `${lines.map(fold).join('\r\n')}\r\n`;
}
