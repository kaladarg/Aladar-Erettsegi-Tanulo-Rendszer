import { t } from '@/i18n';
import type { ExamEntry } from './schema.types';

type Titled = Pick<ExamEntry, 'year' | 'session' | 'title' | 'sample'>;

/** "2024. május" for official papers, the paper's own title for samples. */
export function examDisplayTitle(exam: Titled): string {
  if (exam.sample) return exam.title;
  return t('exams.officialTitle', {
    year: String(exam.year),
    session: t(`session.${exam.session}`),
  });
}
