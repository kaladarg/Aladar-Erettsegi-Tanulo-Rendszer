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
}

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
};

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
  };
}
