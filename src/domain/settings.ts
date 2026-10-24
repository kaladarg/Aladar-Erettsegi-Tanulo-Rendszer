import { sanitizeAdmission, type AdmissionInputs } from './admission';

export type ThemePreference = 'system' | 'light' | 'dark';

export interface Settings {
  theme: ThemePreference;
  /** Root font-size multiplier, see TEXT_SCALE_STEPS. */
  textScale: number;
  dyslexicFont: boolean;
  /** Forces reduced motion on top of the system preference. */
  reducedMotion: boolean;
  /** Subject ids the student picked during onboarding or in settings. */
  subjects: string[];
  onboardingDone: boolean;
  /** Custom content pack URL (forks, teachers); empty means the built-in default. */
  contentSource: string;
  /** Claude model used by the optional AI features (the student's own API key pays). */
  aiModel: AiModel;
  /** Written exam date per subject id (YYYY-MM-DD), entered by the student. */
  examDates: Record<string, string>;
  /** Newest feature announcement the student has seen (see CURRENT_FEATURES). */
  featuresSeen: number;
  /** When the student last saved a backup file (0 = never). */
  lastBackupAt: number;
  /** No backup reminder before this time. */
  backupSnoozedUntil: number;
  /** The student closed the "add to home screen" hint for iPhone. */
  installHintDismissed: boolean;
  /**
   * Study cards: "none" shows every card once per round (the ones not known
   * can be practised after); "end" brings each card not known back once at
   * the end of the same round.
   */
  cardRepeat: CardRepeat;
  /** What the student typed into the admission points calculator. */
  admission: AdmissionInputs | null;
  /** The last Mai adag choice, offered again next time. */
  daily: DailyChoice | null;
  /** Exam level per subject id; subjects not listed are középszint. */
  levels: Record<string, ExamLevelId>;
}

export type ExamLevelId = 'kozep' | 'emelt';

function sanitizeLevels(value: unknown): Record<string, ExamLevelId> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      (entry): entry is [string, ExamLevelId] => entry[1] === 'kozep' || entry[1] === 'emelt',
    ),
  );
}

export interface DailyChoice {
  subject: string;
  /** Area ids of the subject; empty means "Lepj meg". */
  areas: string[];
  length: 5 | 10 | 15;
}

function sanitizeDaily(value: unknown): DailyChoice | null {
  if (typeof value !== 'object' || value === null) return null;
  const raw = value as Partial<Record<keyof DailyChoice, unknown>>;
  if (typeof raw.subject !== 'string' || !raw.subject) return null;
  return {
    subject: raw.subject,
    areas: Array.isArray(raw.areas)
      ? raw.areas.filter((a): a is string => typeof a === 'string').slice(0, 3)
      : [],
    length: raw.length === 5 || raw.length === 10 ? raw.length : 15,
  };
}

/** Bump when new features deserve a "what's new" note on the home page. */
export const CURRENT_FEATURES = 5;

export type CardRepeat = 'none' | 'end';

export const AI_MODELS = ['claude-sonnet-5-5', 'claude-opus-5-5', 'claude-haiku-5-5'] as const;
export type AiModel = (typeof AI_MODELS)[number];

export const TEXT_SCALE_STEPS = [0.875, 1, 1.125, 1.25, 1.375, 1.5] as const;

export const DEFAULT_SETTINGS: Settings = {
  theme: 'system',
  textScale: 1,
  dyslexicFont: false,
  reducedMotion: false,
  subjects: [],
  onboardingDone: false,
  contentSource: '',
  aiModel: 'claude-sonnet-5-5',
  examDates: {},
  featuresSeen: 0,
  lastBackupAt: 0,
  backupSnoozedUntil: 0,
  installHintDismissed: false,
  cardRepeat: 'none',
  admission: null,
  daily: null,
  levels: {},
};

const DAY = /^\d{4}-\d{2}-\d{2}$/;

const timestamp = (value: unknown) =>
  typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : 0;

function sanitizeExamDates(value: unknown): Record<string, string> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      (entry): entry is [string, string] => typeof entry[1] === 'string' && DAY.test(entry[1]),
    ),
  );
}

/** Accepts absolute http(s) URLs and same-site paths; returns '' for anything else. */
export function sanitizeContentSource(value: unknown): string {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return trimmed;
  try {
    const url = new URL(trimmed);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
  } catch {
    return '';
  }
}

export function stepTextScale(current: number, direction: 1 | -1): number {
  const steps = TEXT_SCALE_STEPS as readonly number[];
  const index = steps.findIndex((step) => step >= current - 1e-9);
  const from = index === -1 ? steps.length - 1 : index;
  const next = Math.min(steps.length - 1, Math.max(0, from + direction));
  return steps[next] ?? 1;
}

/** Coerces untrusted input (old exports, corrupted storage) into valid settings. */
export function sanitizeSettings(input: unknown): Settings {
  const raw = (typeof input === 'object' && input !== null ? input : {}) as Partial<
    Record<keyof Settings, unknown>
  >;
  const steps = TEXT_SCALE_STEPS as readonly number[];
  return {
    theme: raw.theme === 'light' || raw.theme === 'dark' ? raw.theme : 'system',
    textScale:
      typeof raw.textScale === 'number' && steps.includes(raw.textScale) ? raw.textScale : 1,
    dyslexicFont: raw.dyslexicFont === true,
    reducedMotion: raw.reducedMotion === true,
    subjects: Array.isArray(raw.subjects)
      ? raw.subjects.filter((s): s is string => typeof s === 'string')
      : [],
    onboardingDone: raw.onboardingDone === true,
    contentSource: sanitizeContentSource(raw.contentSource),
    aiModel: (AI_MODELS as readonly unknown[]).includes(raw.aiModel)
      ? (raw.aiModel as AiModel)
      : DEFAULT_SETTINGS.aiModel,
    examDates: sanitizeExamDates(raw.examDates),
    featuresSeen:
      typeof raw.featuresSeen === 'number' && Number.isInteger(raw.featuresSeen)
        ? Math.max(0, raw.featuresSeen)
        : 0,
    lastBackupAt: timestamp(raw.lastBackupAt),
    backupSnoozedUntil: timestamp(raw.backupSnoozedUntil),
    installHintDismissed: raw.installHintDismissed === true,
    cardRepeat: raw.cardRepeat === 'end' ? 'end' : 'none',
    admission: sanitizeAdmission(raw.admission),
    daily: sanitizeDaily(raw.daily),
    levels: sanitizeLevels(raw.levels),
  };
}
