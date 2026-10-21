import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo } from 'react';
import { ALL_CARDS, CARD_SUBJECTS } from '@/content/cards';
import { DEFAULT_SUBJECTS } from '@/content/catalog';
import type { Exam } from '@/content/schema.types';
import { useManifest } from '@/content/useContent';
import { useExams } from '@/content/useExams';
import { cardStates } from '@/domain/cards/schedule';
import {
  dailyPlan,
  estimateMinutes,
  refKey,
  topicRatios,
  type DailyPlan,
} from '@/domain/practice/daily';
import { buildCards, examEvents, isDrillable } from '@/domain/practice/review';
import { topicIndex } from '@/domain/practice/topics';
import { scoredAttempts, topicStats } from '@/domain/stats/stats';
import { useSettings } from '@/state/settingsStore';
import { dayKey, db, type DrillSessionRow } from '@/storage/db';

/** Today's daily round, if one was started today (the newest one). */
export function useTodaysDaily(): DrillSessionRow | null | undefined {
  return useLiveQuery(async () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const today = await db.drillSessions.where('updatedAt').aboveOrEqual(start.getTime()).toArray();
    const daily = today
      .filter((s) => s.kind === 'daily' && s.startedAt >= start.getTime())
      .sort((a, b) => b.startedAt - a.startedAt);
    return daily[0] ?? null;
  }, []);
}

/**
 * Subjects of the daily round: the ones the student picked, or every subject
 * of the content pack when none is picked yet.
 */
export function useDailySubjects(): string[] {
  const chosen = useSettings((s) => s.settings.subjects);
  const { state } = useManifest();
  return useMemo(() => {
    const available =
      state.status === 'ready'
        ? state.data.manifest.subjects.map((s) => s.id)
        : DEFAULT_SUBJECTS.map((s) => s.id);
    const picked = chosen.filter((s) => available.includes(s));
    return picked.length > 0 ? picked : available;
  }, [chosen, state]);
}

/** Deck order per subject, mixed so new cards alternate between subjects. */
function cardIdsFor(subjects: string[]): string[] {
  const lists = CARD_SUBJECTS.filter((s) => subjects.includes(s)).map((s) =>
    ALL_CARDS.filter((card) => card.subject === s).map((card) => card.id),
  );
  const ids: string[] = [];
  for (let i = 0; lists.some((list) => i < list.length); i++)
    for (const list of lists) if (i < list.length) ids.push(list[i]!);
  return ids;
}

/**
 * Builds today's plan once everything it needs has loaded. The seed is the
 * day, so the plan stays the same when the page is opened again (`round`
 * counts extra rounds on the same day).
 */
export function useDailyPlan(subjects: string[], round = 0): DailyPlan | undefined {
  const { exams, loading } = useExams(subjects);
  const data = useLiveQuery(async () => {
    const [attempts, drillEvents, cardEvents] = await Promise.all([
      db.attempts.toArray(),
      db.drillEvents.toArray(),
      db.cardEvents.toArray(),
    ]);
    return { attempts, drillEvents, cardEvents, today: dayKey(Date.now()) };
  }, []);

  return useMemo(() => {
    if (loading || !data) return undefined;
    const { today } = data;
    const minutes = new Map<string, number>();
    const bySubject = new Map<string, Exam[]>();
    for (const exam of exams.values()) {
      bySubject.set(exam.subject, [...(bySubject.get(exam.subject) ?? []), exam]);
      for (const part of exam.parts) {
        // A listening task needs its recording; without one in the pack it is left out.
        if (part.audio && !part.audio.file) continue;
        for (const task of part.tasks)
          if (isDrillable(task.type))
            minutes.set(refKey({ examId: exam.id, taskId: task.id }), estimateMinutes(exam, task));
      }
    }
    const topics = new Map(subjects.map((s) => [s, topicIndex(bySubject.get(s) ?? [])]));
    return dailyPlan({
      subjects,
      reviewCards: buildCards([...examEvents(data.attempts), ...data.drillEvents]),
      topics,
      ratios: topicRatios(topicStats(scoredAttempts(data.attempts)), data.drillEvents),
      minutes,
      cardIds: cardIdsFor(subjects),
      cardStates: cardStates(data.cardEvents),
      today,
      // Another round on the same day draws other tasks.
      seed: Number(today.replaceAll('-', '')) + round * 7919,
    });
  }, [loading, data, exams, subjects, round]);
}
