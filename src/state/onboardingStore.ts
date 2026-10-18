import { create } from 'zustand';

interface OnboardingState {
  /** Reopened manually from the home screen after it was completed. */
  open: boolean;
  /** Set after "delete all data" so the undo toast stays usable this session. */
  suppressed: boolean;
  show: () => void;
  close: () => void;
  suppress: () => void;
}

export const useOnboarding = create<OnboardingState>((set) => ({
  open: false,
  suppressed: false,
  show: () => set({ open: true }),
  close: () => set({ open: false }),
  suppress: () => set({ suppressed: true }),
}));
