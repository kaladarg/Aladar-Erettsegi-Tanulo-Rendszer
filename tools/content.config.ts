/**
 * Where official materials come from and how their file names map to our ids.
 * The Oktatási Hivatal publishes papers under URLs like
 *   https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2024tavasz_kozep/k_mat_24maj_fl.pdf
 * (fl = feladatlap, ut = javítási-értékelési útmutató). Verify these when the
 * archive changes; the crawler reports anything it cannot classify.
 */
export const CONTENT_SOURCE = {
  startUrls: ['https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok'],
  allowedHosts: ['www.oktatas.hu', 'oktatas.hu', 'dload-oktatas.educatio.hu'],
  /** Direct download host used when the archive pages cannot be parsed. */
  downloadBase: 'https://www.oktatas.hu/bin/content/dload/erettsegi',
  userAgent:
    'ErettsegiGyakorloBot/0.1 (+https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer; open-source study app)',
  minDelayMs: 2_000,
  maxPages: 200,
};

/** OH file-name subject codes for the subjects we support. */
export const SUBJECT_CODES: Record<string, string> = {
  matematika: 'mat',
  tortenelem: 'tort',
  magyar: 'magyir',
};

export const LEVEL_CODES: Record<string, { dir: string; prefix: string }> = {
  kozep: { dir: 'kozep', prefix: 'k' },
  emelt: { dir: 'emelt', prefix: 'e' },
};

export const SESSIONS = {
  majus: { dir: 'tavasz', file: 'maj' },
  oktober: { dir: 'osz', file: 'okt' },
} as const;

export type Session = keyof typeof SESSIONS;
