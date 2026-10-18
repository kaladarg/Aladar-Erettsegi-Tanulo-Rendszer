import { REPO_URL } from '@/app/config';

/**
 * Link to a pre-filled "data correction" issue (see
 * .github/ISSUE_TEMPLATE/data_correction.yml; query keys are its field ids).
 */
export function reportMistakeUrl(
  repositoryUrl: string | undefined,
  examId: string,
  task?: { id: string; number: string },
): string {
  const url = new URL(`${(repositoryUrl ?? REPO_URL).replace(/\/$/, '')}/issues/new`);
  url.searchParams.set('template', 'data_correction.yml');
  url.searchParams.set(
    'title',
    task ? `Hiba: ${examId}, ${task.number} feladat` : `Hiba: ${examId}`,
  );
  url.searchParams.set('labels', 'data-correction');
  url.searchParams.set('exam', examId);
  if (task) url.searchParams.set('task', task.id);
  return url.href;
}
