import type { Settings } from '@/domain/settings';

/**
 * Appearance settings are mirrored into localStorage so the inline boot script
 * in index.html can apply them before first paint (IndexedDB is async).
 * IndexedDB stays the source of truth.
 */
export const APPEARANCE_STORAGE_KEY = 'eg-appearance';

type Appearance = Pick<Settings, 'theme' | 'textScale' | 'dyslexicFont' | 'reducedMotion'>;

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)');

export function resolveTheme(theme: Settings['theme']): 'light' | 'dark' {
  if (theme !== 'system') return theme;
  return darkQuery().matches ? 'dark' : 'light';
}

export function applyAppearance(appearance: Appearance): void {
  const root = document.documentElement;
  const theme = resolveTheme(appearance.theme);
  root.dataset.theme = theme;
  root.dataset.font = appearance.dyslexicFont ? 'dyslexic' : 'default';
  root.dataset.motion = appearance.reducedMotion ? 'reduced' : 'default';
  root.style.setProperty('--text-scale', String(appearance.textScale));
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#12110f' : '#faf9f7');
  try {
    const { theme: t, textScale, dyslexicFont, reducedMotion } = appearance;
    localStorage.setItem(
      APPEARANCE_STORAGE_KEY,
      JSON.stringify({ theme: t, textScale, dyslexicFont, reducedMotion }),
    );
  } catch {
    // Storage can be blocked (private mode); appearance still applies for this session.
  }
}

/** Re-applies the theme when the OS switches between light and dark. */
export function watchSystemTheme(onChange: () => void): () => void {
  const query = darkQuery();
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}
