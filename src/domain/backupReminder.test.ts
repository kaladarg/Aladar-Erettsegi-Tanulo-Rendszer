import { describe, expect, it } from 'vitest';
import { backupReminderDue, needsIosInstall } from './backupReminder';

const DAY = 86_400_000;
const now = 100 * DAY;
const days = (...ago: number[]) => ago.map((d) => ({ day: `d${d}`, updatedAt: now - d * DAY }));

describe('backupReminderDue', () => {
  it('waits for three active days before the first reminder', () => {
    const base = { now, lastBackupAt: 0, snoozedUntil: 0 };
    expect(backupReminderDue({ ...base, activity: days(1, 2) })).toBe(false);
    expect(backupReminderDue({ ...base, activity: days(1, 2, 3) })).toBe(true);
  });

  it('counts only activity after the last backup, and not within a week of it', () => {
    const activity = days(1, 2, 3, 10, 11);
    expect(backupReminderDue({ now, lastBackupAt: now - 5 * DAY, snoozedUntil: 0, activity })).toBe(
      false,
    );
    expect(backupReminderDue({ now, lastBackupAt: now - 9 * DAY, snoozedUntil: 0, activity })).toBe(
      true,
    );
    expect(
      backupReminderDue({
        now,
        lastBackupAt: now - 9 * DAY,
        snoozedUntil: 0,
        activity: days(1, 10),
      }),
    ).toBe(false);
  });

  it('respects "later"', () => {
    expect(
      backupReminderDue({ now, lastBackupAt: 0, snoozedUntil: now + DAY, activity: days(1, 2, 3) }),
    ).toBe(false);
  });
});

describe('needsIosInstall', () => {
  const iphone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15';
  it('detects iPhone and iPad Safari outside the home screen', () => {
    expect(needsIosInstall({ userAgent: iphone }, false)).toBe(true);
    expect(needsIosInstall({ userAgent: iphone, standalone: true }, false)).toBe(false);
    expect(needsIosInstall({ userAgent: iphone }, true)).toBe(false);
    expect(
      needsIosInstall({ userAgent: 'Mozilla/5.0 (Macintosh)', maxTouchPoints: 5 }, false),
    ).toBe(true);
    expect(
      needsIosInstall({ userAgent: 'Mozilla/5.0 (Macintosh)', maxTouchPoints: 0 }, false),
    ).toBe(false);
    expect(needsIosInstall({ userAgent: 'Mozilla/5.0 (Linux; Android 15)' }, false)).toBe(false);
  });
});
