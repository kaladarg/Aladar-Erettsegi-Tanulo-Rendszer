import { create } from 'zustand';
import { DEFAULT_SETTINGS, sanitizeSettings, type Settings } from '@/domain/settings';
import { applyAppearance } from '@/app/appearance';

// IndexedDB code is loaded after first paint to keep the initial bundle small.
const loadDb = () => import('@/storage/db').then((module) => module.db);

interface SettingsState {
  settings: Settings;
  loaded: boolean;
  /** False when IndexedDB is unavailable; the app then runs in memory only. */
  persistent: boolean;
  load: () => Promise<void>;
  update: (patch: Partial<Settings>) => Promise<void>;
}

export const useSettings = create<SettingsState>((set, get) => ({
  settings: DEFAULT_SETTINGS,
  loaded: false,
  persistent: true,

  async load() {
    try {
      const db = await loadDb();
      const row = await db.settings.get('app');
      const settings = sanitizeSettings(row ?? DEFAULT_SETTINGS);
      applyAppearance(settings);
      set({ settings, loaded: true, persistent: true });
    } catch (error) {
      console.error('Could not open local storage', error);
      applyAppearance(DEFAULT_SETTINGS);
      set({ settings: DEFAULT_SETTINGS, loaded: true, persistent: false });
    }
  },

  async update(patch) {
    const settings = { ...get().settings, ...patch };
    set({ settings });
    applyAppearance(settings);
    if (!get().persistent) return;
    try {
      const db = await loadDb();
      await db.settings.put({ ...settings, key: 'app' });
    } catch (error) {
      console.error('Could not save settings', error);
      set({ persistent: false });
    }
  },
}));
