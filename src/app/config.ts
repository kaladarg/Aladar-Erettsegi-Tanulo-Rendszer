export const REPO_URL = 'https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer';
export const APP_AUTHOR = 'Králik Aladár';
/** Where mistakes in tasks, answers and the app itself are reported. */
export const REPORT_EMAIL = 'kralik.aladar.gergely@gmail.com';
export const OFFICIAL_ARCHIVE_URL = 'https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok';
export const APP_VERSION = __APP_VERSION__;
/** The public app, linked from files that leave the app (calendar, teacher links). */
export const PUBLIC_APP_URL = 'https://kaladarg.github.io/Aladar-Erettsegi-Tanulo-Rendszer/';

/** This app's own address when it runs on a normal web page; the public one otherwise. */
export function appBaseUrl(): string {
  if (import.meta.env.VITE_PORTABLE === '1' || typeof location === 'undefined')
    return PUBLIC_APP_URL;
  return new URL(import.meta.env.BASE_URL, location.origin).href;
}
