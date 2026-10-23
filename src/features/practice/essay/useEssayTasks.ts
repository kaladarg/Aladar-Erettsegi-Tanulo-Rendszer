import type { Exam, ExamEntry, Task } from '@/content/schema.types';
import { useManifest } from '@/content/useContent';
import { useExams } from '@/content/useExams';
import { essayKind, isEssayTask, type EssayKind } from '@/domain/practice/essayOutline';

export const ESSAY_SUBJECTS = ['tortenelem', 'magyar'] as const;
export type EssaySubject = (typeof ESSAY_SUBJECTS)[number];

export interface EssayTask {
  exam: Exam;
  entry: ExamEntry;
  task: Task;
  kind: EssayKind;
}

/** Every essay task of the history and Hungarian papers, newest paper first. */
export function useEssayTasks(): { tasks: EssayTask[]; loading: boolean } {
  const { state } = useManifest();
  const { exams, loading } = useExams([...ESSAY_SUBJECTS]);
  const entries = state.status === 'ready' ? state.data.manifest.exams : [];
  const tasks: EssayTask[] = [];
  for (const entry of entries) {
    const exam = exams.get(entry.id);
    if (!exam) continue;
    for (const part of exam.parts)
      for (const task of part.tasks)
        if (isEssayTask(exam, task)) tasks.push({ exam, entry, task, kind: essayKind(exam, task) });
  }
  tasks.sort(
    (a, b) =>
      b.entry.year - a.entry.year ||
      (b.entry.session === 'oktober' ? 1 : 0) - (a.entry.session === 'oktober' ? 1 : 0),
  );
  return { tasks, loading: loading || state.status === 'loading' };
}

export const essayPath = (examId: string, taskId: string) =>
  `/gyakorlas/esszevazlat/${encodeURIComponent(examId)}/${encodeURIComponent(taskId)}`;
