import { t } from '@/i18n';
import { findSubject } from './catalog';
import type { ExamEntry, Part, Task } from './schema.types';

type Titled = Pick<ExamEntry, 'year' | 'session' | 'title' | 'sample'> & { level?: string };

/** "2024. május" for official papers ("2024. május, emelt" at emelt level), the paper's own title for samples. */
export function examDisplayTitle(exam: Titled): string {
  if (exam.sample) return exam.title;
  const title = t('exams.officialTitle', {
    year: String(exam.year),
    session: t(`session.${exam.session}`),
  });
  return exam.level === 'emelt' ? t('exams.emeltTitle', { title }) : title;
}

/** "Matematika, 2024. május"; samples carry the subject in their own title. */
export function examFullTitle(exam: Titled & Pick<ExamEntry, 'subject'>): string {
  if (exam.sample) return exam.title;
  return `${findSubject(exam.subject)?.name ?? exam.subject}, ${examDisplayTitle(exam)}`;
}

/** "45 perc · 30 pont · 12 feladat"; the time is left out when the exam shares one time limit. */
export function partMeta(part: Part): string {
  const values = { points: part.maxPoints, count: part.tasks.length };
  const meta =
    part.timeLimitMinutes === undefined
      ? t('exam.partMetaNoTime', values)
      : t('exam.partMeta', { ...values, minutes: part.timeLimitMinutes });
  const extra = [
    part.scale && t('exam.partScale', { points: part.scale.maxPoints }),
    part.audio && t('exam.partAudio'),
  ].filter(Boolean);
  return [meta, ...extra].join(' · ');
}

export function partInfo(part: Part): string {
  return part.timeLimitMinutes === undefined
    ? t('workspace.partInfoNoTime', { title: part.title, points: part.maxPoints })
    : t('workspace.partInfo', {
        title: part.title,
        minutes: part.timeLimitMinutes,
        points: part.maxPoints,
      });
}

/**
 * The number a task is counted under: sub-tasks (16. a, b) share their group,
 * but a group that only links tasks for a choice ("13-16") keeps each number.
 */
export function taskUnitNumber(task: Pick<Task, 'number' | 'group'>): string {
  return task.group && task.number.startsWith(task.group) ? task.group : task.number;
}
