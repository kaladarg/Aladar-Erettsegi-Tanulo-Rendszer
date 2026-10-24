import { APP_VERSION, REPORT_EMAIL } from '@/app/config';

/** A pre-filled email about a mistake in an exam or one of its tasks. */
export function reportMistakeUrl(
  reportEmail: string | undefined,
  examId: string,
  task?: { id: string; number: string },
): string {
  const subject = task
    ? `Hiba a feladatsorban: ${examId}, ${task.number} feladat`
    : `Hiba a feladatsorban: ${examId}`;
  const body = [
    `Feladatsor: ${examId}`,
    ...(task ? [`Feladat: ${task.number} (${task.id})`] : []),
    '',
    'Mi a hiba?',
    '',
    '',
    'Mi lenne a helyes? (Ha tudod, írd meg a javítási-értékelési útmutató oldalszámát is.)',
    '',
    '',
    `Alkalmazás verziója: ${APP_VERSION}`,
  ].join('\n');
  return `mailto:${reportEmail ?? REPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** A pre-filled email about a problem with the app itself. */
export function reportBugUrl(details?: string): string {
  const body = [
    'Mi történt?',
    '',
    '',
    ...(details ? ['Hibaüzenet:', details, ''] : []),
    'Mit vártál helyette?',
    '',
    '',
    `Alkalmazás verziója: ${APP_VERSION}`,
    `Böngésző: ${typeof navigator === 'undefined' ? '' : navigator.userAgent}`,
  ].join('\n');
  return `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent('Hiba az Érettségi Gyakorlóban')}&body=${encodeURIComponent(body)}`;
}
