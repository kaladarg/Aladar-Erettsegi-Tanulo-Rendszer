import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo } from 'react';
import { ALL_CARDS } from '@/content/cards';
import { DEFAULT_SUBJECTS } from '@/content/catalog';
import { useManifest } from '@/content/useContent';
import { fitsLevel, useExams } from '@/content/useExams';
import { cardStates } from '@/domain/cards/schedule';
import {
  dailyPlan,
  estimateMinutes,
  refKey,
  topicRatios,
  type DailyLength,
  type DailyPlan,
} from '@/domain/practice/daily';
import { buildCards, examEvents, isDrillable } from '@/domain/practice/review';
import { groupByArea, type AreaGroup } from '@/domain/practice/topicAreas';
import { topicIndex, topicKey } from '@/domain/practice/topics';
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

/** Subjects to choose from: the student's own first, then the rest of the pack. */
export function useDailySubjects(): string[] {
  const chosen = useSettings((s) => s.settings.subjects);
  const { state } = useManifest();
  return useMemo(() => {
    const available =
      state.status === 'ready'
        ? state.data.manifest.subjects.map((s) => s.id)
        : DEFAULT_SUBJECTS.map((s) => s.id);
    return [
      ...chosen.filter((s) => available.includes(s)),
      ...available.filter((s) => !chosen.includes(s)),
    ];
  }, [chosen, state]);
}

export interface DailyChoiceInput {
  subject: string;
  areas: string[];
  length: DailyLength;
}

export interface DailyData {
  plan: DailyPlan;
  /** The subject's areas with their topics, for the picker. */
  areas: AreaGroup[];
  /** Areas with a weak topic (below 60%), once the student has results. */
  weakAreas: Set<string>;
  hasResults: boolean;
}

/**
 * Builds the plan for the choice once the subject's papers have loaded. The
 * seed is the day, so the plan stays the same when the page is opened again
 * (`round` counts extra rounds on the same day).
 */
export function useDailyPlan(choice: DailyChoiceInput, round = 0): DailyData | undefined {
  const subjects = useMemo(() => [choice.subject], [choice.subject]);
  const { exams: loaded, loading } = useExams(subjects);
  const ownLevel = useSettings((s) => s.settings.levels[choice.subject]);
  const exams = useMemo(
    () => new Map([...loaded].filter(([, exam]) => fitsLevel(exam.level, ownLevel))),
    [loaded, ownLevel],
  );
  const data = useLiveQuery(async () => {
    const [attempts, drillEvents, cardEvents, marks] = await Promise.all([
      db.attempts.toArray(),
      db.drillEvents.toArray(),
      db.cardEvents.toArray(),
      db.reviewMarks.toArray(),
    ]);
    return { attempts, drillEvents, cardEvents, marks, today: dayKey(Date.now()) };
  }, []);

  const base = useMemo(() => {
    if (loading || !data) return undefined;
    const minutes = new Map<string, number>();
    for (const exam of exams.values())
      for (const part of exam.parts) {
        // A listening task needs its recording; without one in the pack it is left out.
        if (part.audio && !part.audio.file) continue;
        for (const task of part.tasks)
          if (isDrillable(task.type))
            minutes.set(refKey({ examId: exam.id, taskId: task.id }), estimateMinutes(exam, task));
      }
    const topics = topicIndex([...exams.values()]);
    const all = topicRatios(topicStats(scoredAttempts(data.attempts)), data.drillEvents);
    const ratios = new Map<string, number>();
    for (const topic of topics) {
      const ratio = all.get(`${choice.subject}|${topicKey(topic.name)}`);
      if (ratio !== undefined) ratios.set(topic.key, ratio);
    }
    const areas = groupByArea(choice.subject, topics);
    const weakAreas = new Set(
      areas
        .filter((group) => group.topics.some((t) => (ratios.get(t.key) ?? 1) < 0.6))
        .map((group) => group.area.id),
    );
    return {
      topics,
      ratios,
      minutes,
      areas,
      weakAreas,
      reviewCards: buildCards([...examEvents(data.attempts), ...data.drillEvents], data.marks),
      states: cardStates(data.cardEvents),
      today: data.today,
    };
  }, [loading, data, exams, choice.subject]);

  return useMemo(() => {
    if (!base) return undefined;
    const known = new Set(base.areas.map((g) => g.area.id));
    const plan = dailyPlan({
      subject: choice.subject,
      areas: choice.areas.filter((a) => known.has(a)),
      length: choice.length,
      reviewCards: base.reviewCards,
      topics: base.topics,
      ratios: base.ratios,
      minutes: base.minutes,
      cardIds: ALL_CARDS.filter((card) => card.subject === choice.subject).map((card) => card.id),
      cardStates: base.states,
      today: base.today,
      // Another round on the same day draws other tasks.
      seed: Number(base.today.replaceAll('-', '')) + round * 7919,
    });
    return {
      plan,
      areas: base.areas,
      weakAreas: base.weakAreas,
      hasResults: base.ratios.size > 0,
    };
  }, [base, choice.subject, choice.areas, choice.length, round]);
}
