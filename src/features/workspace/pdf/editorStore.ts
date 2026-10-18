import { create } from 'zustand';
import type { Exam, Rect } from '@/content/schema.types';

/** Field positions changed in the position editor (maintainer tool), keyed by field id. */
export const useRectEdits = create<{
  edits: Record<string, Rect>;
  set: (fieldId: string, rect: Rect) => void;
  reset: () => void;
}>((set) => ({
  edits: {},
  set: (fieldId, rect) => set((state) => ({ edits: { ...state.edits, [fieldId]: rect } })),
  reset: () => set({ edits: {} }),
}));

const round = (n: number) => Math.round(n * 10_000) / 10_000;

export function clampRect(rect: Rect): Rect {
  const w = Math.min(1, Math.max(0.005, rect.w));
  const h = Math.min(1, Math.max(0.005, rect.h));
  return {
    page: rect.page,
    x: round(Math.min(1 - w, Math.max(0, rect.x))),
    y: round(Math.min(1 - h, Math.max(0, rect.y))),
    w: round(w),
    h: round(h),
  };
}

/** A copy of the exam with edited field positions applied. */
export function applyRectEdits(exam: Exam, edits: Record<string, Rect>): Exam {
  const copy = structuredClone(exam);
  for (const part of copy.parts) {
    for (const task of part.tasks) {
      for (const field of task.fields) {
        const edit = edits[field.id];
        if (edit) field.pdfRect = edit;
      }
    }
  }
  return copy;
}
