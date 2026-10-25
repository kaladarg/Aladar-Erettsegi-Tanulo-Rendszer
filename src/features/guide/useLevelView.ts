import { useSearchParams } from 'react-router';
import type { GuideSubject, LevelView } from '@/content/guide';
import { useSettings } from '@/state/settingsStore';

/** The level a student reads at: their own level in the subject unless they switch. */
export function useLevelView(subject: GuideSubject): [LevelView, (view: LevelView) => void] {
  const [params, setParams] = useSearchParams();
  const own = useSettings((s) => s.settings.levels[subject]);
  const param = params.get('szint');
  const view: LevelView =
    param === 'emelt' || param === 'kozep' ? param : own === 'emelt' ? 'emelt' : 'kozep';
  const setView = (next: LevelView) =>
    setParams(
      (current) => {
        const copy = new URLSearchParams(current);
        copy.set('szint', next);
        return copy;
      },
      { replace: true },
    );
  return [view, setView];
}
