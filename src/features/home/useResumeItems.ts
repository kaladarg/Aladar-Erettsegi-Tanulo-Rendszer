import { useLiveQuery } from 'dexie-react-hooks';
import { findSubject } from '@/content/catalog';
import { examFullTitle } from '@/content/labels';
import { useManifest } from '@/content/useContent';
import { formatNumber, t } from '@/i18n';
import { db, type DrillSessionRow } from '@/storage/db';

/** Unfinished work older than this is not offered any more. */
const STALE_DAYS = 30;

export interface ResumeItem {
  key: string;
  title: string;
  detail: string;
  to: string;
  updatedAt: number;
}

function roundTitle(session: DrillSessionRow): string {
  const subject = findSubject(session.subject)?.name ?? session.subject;
  switch (session.kind) {
    case 'topic':
    case 'worked':
      return t('practice.topicTitle', { topic: session.topic ?? subject });
    case 'mixed':
      return t('practice.mixedTitle', { subject });
    case 'daily':
      return t('practice.daily.title');
    case 'review':
      return t('practice.reviewTitle');
    case 'assignment':
      return session.title || t('practice.assignmentTitle');
  }
}

/**
 * The student's unfinished work, newest first: papers in progress, practice
 * rounds left halfway, and essay outlines not yet compared with the key.
 */
export function useResumeItems(): ResumeItem[] | undefined {
  const { state } = useManifest();
  const exams = state.status === 'ready' ? state.data.manifest.exams : null;
  return useLiveQuery(async () => {
    if (!exams) return undefined;
    const since = Date.now() - STALE_DAYS * 86_400_000;
    const [attempts, rounds, outlines] = await Promise.all([
      db.attempts
        .where('startedAt')
        .above(since - 365 * 86_400_000)
        .toArray(),
      db.drillSessions.where('updatedAt').above(since).toArray(),
      db.essayOutlines.where('updatedAt').above(since).toArray(),
    ]);
    const title = (examId: string) => {
      const entry = exams.find((e) => e.id === examId);
      return entry ? examFullTitle(entry) : examId;
    };
    const items: ResumeItem[] = [
      ...attempts
        .filter((a) => !a.submittedAt && a.updatedAt > since)
        .map((a) => ({
          key: `attempt-${a.id}`,
          title: title(a.examId),
          detail: a.mode === 'exam' ? t('results.modeExam') : t('results.modePractice'),
          to: `/feladatsorok/${a.examId}/${a.mode === 'exam' ? 'vizsga' : 'gyakorlas'}`,
          updatedAt: a.updatedAt,
        })),
      ...rounds
        .filter((r) => !r.finishedAt && r.items.length > 0)
        .map((r) => ({
          key: `round-${r.id}`,
          title: roundTitle(r),
          detail: t('home.resume.roundProgress', {
            done: formatNumber(Object.keys(r.checked).length),
            total: formatNumber(r.items.length),
          }),
          to: `/gyakorlas/kor/${r.id}`,
          updatedAt: r.updatedAt,
        })),
      ...outlines
        .filter((o) => !o.compared && o.updatedAt > 0)
        .map((o) => ({
          key: `outline-${o.key}`,
          title: t('home.resume.outline'),
          detail: title(o.examId),
          to: `/gyakorlas/esszevazlat/${encodeURIComponent(o.examId)}/${encodeURIComponent(o.taskId)}`,
          updatedAt: o.updatedAt,
        })),
    ];
    return items.sort((a, b) => b.updatedAt - a.updatedAt);
  }, [exams]);
}
