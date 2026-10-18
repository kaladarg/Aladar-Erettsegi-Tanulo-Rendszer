import { t } from '@/i18n';
import type { ExamEntry, Part } from './schema.types';

type Titled = Pick<ExamEntry, 'year' | 'session' | 'title' | 'sample'>;

/** "2024. május" for official papers, the paper's own title for samples. */
export function examDisplayTitle(exam: Titled): string {
  if (exam.sample) return exam.title;
  return t('exams.officialTitle', {
    year: String(exam.year),
    session: t(`session.${exam.session}`),
  });
}

/** "45 perc · 30 pont · 12 feladat"; the time is left out when the exam shares one time limit. */
export function partMeta(part: Part): string {
  const values = { points: part.maxPoints, count: part.tasks.length };
  return part.timeLimitMinutes === undefined
    ? t('exam.partMetaNoTime', values)
    : t('exam.partMeta', { ...values, minutes: part.timeLimitMinutes });
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
