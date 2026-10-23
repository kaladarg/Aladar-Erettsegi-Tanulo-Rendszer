import { useLiveQuery } from 'dexie-react-hooks';
import { useManifest } from '@/content/useContent';
import { studyPlan, type SubjectPlan } from '@/domain/practice/plan';
import { buildCards, examEvents } from '@/domain/practice/review';
import { useSettings } from '@/state/settingsStore';
import { dayKey, db } from '@/storage/db';

/** The study plan for every subject with an exam date (undefined while loading). */
export function usePlan(): SubjectPlan[] | undefined {
  const examDates = useSettings((s) => s.settings.examDates);
  const { state } = useManifest();
  const exams = state.status === 'ready' ? state.data.manifest.exams : null;
  return useLiveQuery(async () => {
    if (!exams) return undefined;
    const [attempts, drills, drillEvents, oralTopics, marks] = await Promise.all([
      db.attempts.toArray(),
      db.drillSessions.toArray(),
      db.drillEvents.toArray(),
      db.oralTopics.toArray(),
      db.reviewMarks.toArray(),
    ]);
    return studyPlan({
      today: dayKey(Date.now()),
      examDates,
      attempts,
      drills,
      oralTopics,
      cards: buildCards([...examEvents(attempts), ...drillEvents], marks),
      exams,
    });
  }, [examDates, exams]);
}
