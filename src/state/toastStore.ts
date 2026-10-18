import { create } from 'zustand';

export interface ToastAction {
  label: string;
  onAction: () => void;
}

export interface Toast {
  id: number;
  message: string;
  tone: 'neutral' | 'success' | 'danger';
  action?: ToastAction;
  /** Milliseconds; toasts with an undo action stay longer by default. */
  duration: number;
}

interface ToastState {
  toasts: Toast[];
  push: (
    toast: Omit<Toast, 'id' | 'duration' | 'tone'> & Partial<Pick<Toast, 'duration' | 'tone'>>,
  ) => number;
  dismiss: (id: number) => void;
}

let nextId = 1;

export const useToasts = create<ToastState>((set) => ({
  toasts: [],
  push(toast) {
    const id = nextId++;
    const duration = toast.duration ?? (toast.action ? 10_000 : 5_000);
    set((state) => ({
      toasts: [...state.toasts, { tone: 'neutral', ...toast, id, duration }],
    }));
    return id;
  },
  dismiss(id) {
    set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }));
  },
}));

export const toast = (...args: Parameters<ToastState['push']>) =>
  useToasts.getState().push(...args);
