import { describe, expect, it } from 'vitest';
import { buildCalendar, type CalendarInput } from './ics';

const input: CalendarInput = {
  examDates: { matematika: '2027-05-05', magyar: '2027-05-03', tortenelem: '2026-01-01' },
  subjectName: (id) => ({ matematika: 'Matematika', magyar: 'Magyar nyelv és irodalom' })[id] ?? id,
  // A Wednesday.
  today: '2026-10-21',
  weekly: { weekday: 1, time: '17:30' },
  daily: '19:00',
  appUrl: 'https://example.org/app/',
  now: new Date(Date.UTC(2026, 9, 21, 10, 0, 0)),
};

const unfold = (ics: string) => ics.replace(/\r\n /g, '');

describe('buildCalendar', () => {
  const ics = buildCalendar(input);

  it('is a valid calendar with CRLF lines of at most 75 octets', () => {
    expect(ics.startsWith('BEGIN:VCALENDAR\r\nVERSION:2.0\r\n')).toBe(true);
    expect(ics.endsWith('END:VCALENDAR\r\n')).toBe(true);
    for (const line of ics.split('\r\n'))
      expect(new TextEncoder().encode(line).length).toBeLessThanOrEqual(75);
  });

  it('adds future exams as all-day events with reminders', () => {
    const text = unfold(ics);
    expect(text).toContain('UID:exam-magyar-20270503@erettsegi-gyakorlo');
    expect(text).toContain('DTSTART;VALUE=DATE:20270505');
    expect(text).toContain('DTEND;VALUE=DATE:20270506');
    expect(text).toContain('SUMMARY:Érettségi: Magyar nyelv és irodalom írásbeli');
    expect(text).toContain('TRIGGER:-P7D');
    expect(text).not.toContain('tortenelem');
  });

  it('repeats the reminders until the last exam', () => {
    const text = unfold(ics);
    expect(text).toContain('DTSTART:20261026T173000');
    expect(text).toContain('RRULE:FREQ=WEEKLY;BYDAY=MO;UNTIL=20270505T235959');
    expect(text).toContain('RRULE:FREQ=DAILY;UNTIL=20270505T235959');
    expect(text).toContain('URL:https://example.org/app/gyakorlas/terv');
  });

  it('escapes text and leaves out reminders when there is no exam', () => {
    const empty = buildCalendar({ ...input, examDates: {} });
    expect(empty).not.toContain('VEVENT');
    const named = buildCalendar({ ...input, subjectName: () => 'A, B; C' });
    expect(unfold(named)).toContain('SUMMARY:Érettségi: A\\, B\\; C írásbeli');
  });
});
