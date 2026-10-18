import { createContext, useContext } from 'react';
import type { Exam, Field, SourceMaterial, Task } from '@/content/schema.types';
import type { PdfSource } from './pdf/pdfjs';
import { t } from '@/i18n';

export interface WorkspaceValue {
  exam: Exam;
  sources: Map<string, SourceMaterial>;
  /** The exam paper, when available; form mode crops figures from it. */
  pdf: PdfSource | null;
  /** Exam mode: the parts being written now; others are hidden. Null: all parts. */
  activePartIds: Set<string> | null;
}

export const WorkspaceContext = createContext<WorkspaceValue | null>(null);

export function useWorkspace(): WorkspaceValue {
  const value = useContext(WorkspaceContext);
  if (!value) throw new Error('useWorkspace must be used inside WorkspaceContext');
  return value;
}

export function createWorkspace(
  exam: Exam,
  pdf: PdfSource | null = null,
  activePartIds: Set<string> | null = null,
): WorkspaceValue {
  return {
    exam,
    pdf,
    activePartIds,
    sources: new Map((exam.sources ?? []).map((source) => [source.id, source])),
  };
}

/** Accessible name of a field: task number plus the field's own label. */
export function fieldName(task: Task, field: Field): string {
  const heading = t('workspace.taskHeading', { number: task.number });
  return field.label ? `${heading}, ${field.label}` : heading;
}

export const isTrueFalse = (field: Field) =>
  field.options?.length === 2 && field.options.every((option) => option.value === option.label);

/** "A) 5" for lettered options, the plain label otherwise. */
export const optionText = (option: { value: string; label: string }) =>
  option.value === option.label ? option.label : `${option.value}) ${option.label}`;
