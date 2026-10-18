import { create } from 'zustand';

export type HelpTab = 'task' | 'lookup' | 'ai';

interface HelpState {
  open: boolean;
  taskId: string | null;
  tab: HelpTab;
  /** Text to look up, e.g. from a selection on the page. */
  query: string;
  show: (options?: { taskId?: string; tab?: HelpTab; query?: string }) => void;
  setTab: (tab: HelpTab) => void;
  setTask: (taskId: string) => void;
  close: () => void;
}

/** State of the help panel, shared by its triggers (header, task cards, text selection). */
export const useHelp = create<HelpState>((set) => ({
  open: false,
  taskId: null,
  tab: 'task',
  query: '',
  show: (options = {}) =>
    set((state) => ({
      open: true,
      taskId: options.taskId ?? state.taskId,
      tab: options.tab ?? (options.query ? 'lookup' : 'task'),
      query: options.query ?? state.query,
    })),
  setTab: (tab) => set({ tab }),
  setTask: (taskId) => set({ taskId }),
  close: () => set({ open: false }),
}));
