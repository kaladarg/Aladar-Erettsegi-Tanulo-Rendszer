/**
 * When to remind the student to save a backup. Progress lives only in this
 * browser, which may clear it (Safari removes site data after 7 days without
 * use unless the app is on the home screen), so a file copy is the safety net.
 */
const DAY = 86_400_000;
/** Days with activity since the last backup before we ask. */
export const ACTIVE_DAYS_BEFORE_REMINDER = 3;
/** Minimum time between a backup and the next reminder. */
export const REMIND_AFTER_MS = 7 * DAY;
export const SNOOZE_MS = 7 * DAY;

export interface ReminderInput {
  now: number;
  /** Time of the last backup file, 0 if never. */
  lastBackupAt: number;
  /** No reminder before this time (the student chose "later"). */
  snoozedUntil: number;
  /** Activity days (YYYY-MM-DD) with the time each was last updated. */
  activity: { day: string; updatedAt: number }[];
}

export function backupReminderDue({ now, lastBackupAt, snoozedUntil, activity }: ReminderInput) {
  if (now < snoozedUntil) return false;
  if (lastBackupAt > 0 && now - lastBackupAt < REMIND_AFTER_MS) return false;
  const activeSince = activity.filter((a) => a.updatedAt > lastBackupAt).length;
  return activeSince >= ACTIVE_DAYS_BEFORE_REMINDER;
}

/** iPhone or iPad Safari not running as an installed home-screen app. */
export function needsIosInstall(
  nav: {
    userAgent: string;
    maxTouchPoints?: number;
    standalone?: boolean;
  },
  standaloneDisplay: boolean,
): boolean {
  const ios =
    /iPhone|iPad|iPod/.test(nav.userAgent) ||
    // iPadOS reports itself as a Mac with touch.
    (/Macintosh/.test(nav.userAgent) && (nav.maxTouchPoints ?? 0) > 1);
  return ios && !nav.standalone && !standaloneDisplay;
}
