import { create } from 'zustand';
import { loadAnswers, saveAnswers, type AnswerValue, type Answers } from '@/storage/attempts';

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

interface AnswerState {
  attemptId: string | null;
  answers: Answers;
  status: SaveStatus;
  /** Loads an attempt's answers; any pending changes of the previous attempt are saved first. */
  open: (attemptId: string) => Promise<void>;
  setAnswer: (fieldId: string, value: AnswerValue) => void;
  /** Writes pending changes now (e.g. before leaving the page). */
  flush: () => Promise<void>;
  close: () => Promise<void>;
}

const SAVE_DELAY_MS = 400;
let pending: Answers = {};
let timer: ReturnType<typeof setTimeout> | undefined;

/**
 * The single source of truth for the answers of the open attempt. PDF mode
 * and form mode both read and write here, so switching never loses input.
 * Changes are written to IndexedDB shortly after typing stops.
 */
export const useAnswers = create<AnswerState>((set, get) => ({
  attemptId: null,
  answers: {},
  status: 'idle',

  async open(attemptId) {
    if (get().attemptId === attemptId) return;
    await get().flush();
    set({ attemptId, answers: {}, status: 'idle' });
    const answers = await loadAnswers(attemptId);
    if (get().attemptId === attemptId) set({ answers });
  },

  setAnswer(fieldId, value) {
    const { attemptId } = get();
    if (!attemptId) return;
    set((state) => ({ answers: { ...state.answers, [fieldId]: value }, status: 'saving' }));
    pending[fieldId] = value;
    clearTimeout(timer);
    timer = setTimeout(() => void get().flush(), SAVE_DELAY_MS);
  },

  async flush() {
    clearTimeout(timer);
    const { attemptId } = get();
    const changes = pending;
    pending = {};
    if (!attemptId || Object.keys(changes).length === 0) return;
    try {
      await saveAnswers(attemptId, changes);
      if (get().attemptId === attemptId && Object.keys(pending).length === 0)
        set({ status: 'saved' });
    } catch (error) {
      console.error('Could not save answers', error);
      pending = { ...changes, ...pending };
      set({ status: 'error' });
    }
  },

  async close() {
    await get().flush();
    set({ attemptId: null, answers: {}, status: 'idle' });
  },
}));

/** Value of one field, re-rendering only when that field changes. */
export function useAnswer(fieldId: string): AnswerValue | undefined {
  return useAnswers((state) => state.answers[fieldId]);
}

if (typeof document !== 'undefined') {
  // Save before the tab is hidden or closed; mobile browsers may not fire unload.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') void useAnswers.getState().flush();
  });
  window.addEventListener('pagehide', () => void useAnswers.getState().flush());
}
