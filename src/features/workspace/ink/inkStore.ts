import { create } from 'zustand';
import { INK_COLORS, serializeInk, type Stroke } from '@/domain/ink/ink';
import { useAnswers } from '@/state/answerStore';

export type InkMode = 'off' | 'pen' | 'marker' | 'eraser';

interface Change {
  key: string;
  before: string;
}

interface InkState {
  mode: InkMode;
  color: string;
  /** Once a stylus is used, fingers scroll instead of drawing (palm rejection). */
  penSeen: boolean;
  /** Undo steps of the open attempt; each step may touch several drawings. */
  history: { attemptId: string; changes: Change[] }[];
  setMode: (mode: InkMode) => void;
  setColor: (color: string) => void;
  notePen: () => void;
  /** Replaces the strokes of one drawing, keeping an undo step. */
  commit: (key: string, strokes: Stroke[]) => void;
  /** Clears the given drawings in one undo step. */
  clear: (keys: string[]) => void;
  undo: () => void;
}

const MAX_HISTORY = 100;

const current = (key: string) => {
  const value = useAnswers.getState().answers[key];
  return typeof value === 'string' ? value : '';
};

export const useInk = create<InkState>((set, get) => ({
  mode: 'off',
  color: INK_COLORS[0],
  penSeen: false,
  history: [],
  setMode: (mode) => set({ mode }),
  setColor: (color) => set({ color }),
  notePen: () => {
    if (!get().penSeen) set({ penSeen: true });
  },

  commit(key, strokes) {
    const attemptId = useAnswers.getState().attemptId;
    if (!attemptId) return;
    const next = serializeInk(strokes);
    const before = current(key);
    if (next === before) return;
    useAnswers.getState().setAnswer(key, next);
    set((state) => ({
      history: [...state.history, { attemptId, changes: [{ key, before }] }].slice(-MAX_HISTORY),
    }));
  },

  clear(keys) {
    const attemptId = useAnswers.getState().attemptId;
    if (!attemptId) return;
    const changes = keys.map((key) => ({ key, before: current(key) })).filter((c) => c.before);
    if (changes.length === 0) return;
    for (const { key } of changes) useAnswers.getState().setAnswer(key, '');
    set((state) => ({ history: [...state.history, { attemptId, changes }].slice(-MAX_HISTORY) }));
  },

  undo() {
    const attemptId = useAnswers.getState().attemptId;
    const history = get().history.filter((step) => step.attemptId === attemptId);
    const last = history.at(-1);
    if (!last) return;
    for (const { key, before } of last.changes) useAnswers.getState().setAnswer(key, before);
    set({ history: history.slice(0, -1) });
  },
}));

/** Whether the open attempt has something to undo. */
export function useCanUndo(): boolean {
  const attemptId = useAnswers((state) => state.attemptId);
  return useInk((state) => state.history.some((step) => step.attemptId === attemptId));
}

/** Answer keys of all drawings in the open attempt. */
export function inkKeys(): string[] {
  return Object.entries(useAnswers.getState().answers)
    .filter(([key, value]) => key.startsWith('__ink:') && value)
    .map(([key]) => key);
}
