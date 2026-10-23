/**
 * Essay outline trainer: a plan for a history essay or a Hungarian
 * literature essay, built from the task's own marking criteria. The slots
 * follow what the javítási útmutató rewards (time and place, concepts,
 * "tény + megállapítás" pairs from the sources and from own knowledge,
 * a structured text), so a student who fills them has planned for every
 * point. After planning, the student compares the outline with the key
 * and rates each criterion to get a rough estimate.
 */
import type { Criterion, Exam, Task } from '@/content/schema.types';

export type EssayKind = 'history-short' | 'history-long' | 'literature';

/** What a marking criterion rewards, read from its label. */
export type CriterionRole =
  | 'understanding'
  | 'time-place'
  | 'time'
  | 'place'
  | 'concepts'
  | 'text'
  | 'source'
  | 'knowledge'
  | 'content'
  | 'structure'
  | 'language'
  | 'other';

export type SlotGroup =
  | 'time'
  | 'place'
  | 'concepts'
  | 'source'
  | 'knowledge'
  | 'thesis'
  | 'intro'
  | 'point'
  | 'conclusion';

export interface OutlineSlot {
  id: string;
  group: SlotGroup;
  /** 'line': one short text; 'list': a list of terms; 'pair': fact + statement. */
  shape: 'line' | 'list' | 'pair';
  /** For lists: how many items the key asks for. For pairs: their number in the group. */
  target?: number;
  index?: number;
  /** Concepts: general or concrete (long history essays score them apart). */
  variant?: 'general' | 'concrete';
  criterionIds: string[];
}

/** The student's outline: slot id (or `<id>.fact` / `<id>.point`) → text. */
export type OutlineValues = Record<string, string>;
export type Rating = 'full' | 'partial' | 'none';

/** Recommended planning time in minutes. */
export const PLAN_MINUTES: Record<EssayKind, number> = {
  'history-short': 5,
  'history-long': 8,
  literature: 10,
};
export const MIN_CONCEPTS = 3;
export const LITERATURE_POINTS = 3;

export function isEssayTask(exam: Exam, task: Task): boolean {
  if (exam.subject === 'tortenelem') return task.type === 'essay';
  if (exam.subject === 'magyar') return task.type === 'long_writing' || task.type === 'essay';
  return false;
}

export function essayKind(exam: Exam, task: Task): EssayKind {
  if (exam.subject === 'magyar') return 'literature';
  const long =
    /\(hosszú\)/i.test(task.text) ||
    (task.scoring.criteria?.length ?? 0) >= 10 ||
    task.maxPoints >= 25;
  return long ? 'history-long' : 'history-short';
}

export function criterionRole(criterion: Criterion, kind: EssayKind): CriterionRole {
  const label = criterion.label.toLowerCase();
  if (label.startsWith('feladatmegértés')) return 'understanding';
  if (kind === 'literature') {
    if (/tartalm|érvel/.test(label)) return 'content';
    if (/szerkezet|kompozíció/.test(label)) return 'structure';
    if (/nyelv|stílus|helyesírás/.test(label)) return 'language';
    return 'other';
  }
  const code = /^([tkfe])(\d)?\s*:/.exec(label);
  if (code) {
    if (code[1] === 't') return code[2] === '1' ? 'time' : code[2] === '2' ? 'place' : 'time-place';
    if (code[1] === 'k') return /fogalm/.test(label) ? 'concepts' : 'text';
    return code[1] === 'f' ? 'source' : 'knowledge';
  }
  if (/tájékozódás/.test(label)) return 'time-place';
  if (/fogalm|szaknyelv/.test(label)) return 'concepts';
  if (/forrás/.test(label)) return 'source';
  if (/szerkeszt|szövegalkotás|nyelvhelyesség/.test(label)) return 'text';
  if (/esemény|összefüggés|ismeret|gondolkodás/.test(label)) return 'knowledge';
  return 'other';
}

/** The outline's slots, in the order a student plans them. */
export function outlineSlots(kind: EssayKind, criteria: Criterion[]): OutlineSlot[] {
  if (kind === 'literature') {
    const ids = (role: CriterionRole) =>
      criteria.filter((c) => criterionRole(c, kind) === role).map((c) => c.id);
    const content = ids('content');
    const structure = ids('structure');
    return [
      { id: 'thesis', group: 'thesis', shape: 'line', criterionIds: content },
      { id: 'intro', group: 'intro', shape: 'line', criterionIds: structure },
      ...Array.from({ length: LITERATURE_POINTS }, (_, i) => ({
        id: `point-${i + 1}`,
        group: 'point' as const,
        shape: 'pair' as const,
        index: i + 1,
        criterionIds: [...content, ...structure],
      })),
      { id: 'conclusion', group: 'conclusion', shape: 'line', criterionIds: structure },
    ];
  }

  const slots: OutlineSlot[] = [];
  const add = (slot: OutlineSlot) => {
    const existing = slots.find((s) => s.id === slot.id);
    if (existing) existing.criterionIds.push(...slot.criterionIds);
    else slots.push(slot);
  };
  const concepts = criteria.filter((c) => criterionRole(c, kind) === 'concepts');
  let sources = 0;
  let knowledge = 0;
  for (const c of criteria) {
    switch (criterionRole(c, kind)) {
      case 'time-place':
        add({ id: 'time', group: 'time', shape: 'line', criterionIds: [c.id] });
        add({ id: 'place', group: 'place', shape: 'line', criterionIds: [c.id] });
        break;
      case 'time':
        add({ id: 'time', group: 'time', shape: 'line', criterionIds: [c.id] });
        break;
      case 'place':
        add({ id: 'place', group: 'place', shape: 'line', criterionIds: [c.id] });
        break;
      case 'concepts': {
        // Two concept criteria: the first scores general, the second concrete concepts.
        const variant =
          concepts.length > 1
            ? concepts.indexOf(c) === 0
              ? ('general' as const)
              : ('concrete' as const)
            : undefined;
        add({
          id: variant ? `concepts-${variant}` : 'concepts',
          group: 'concepts',
          shape: 'list',
          target: MIN_CONCEPTS,
          variant,
          criterionIds: [c.id],
        });
        break;
      }
      case 'source':
        add({ id: c.id, group: 'source', shape: 'pair', index: ++sources, criterionIds: [c.id] });
        break;
      case 'knowledge':
        add({
          id: c.id,
          group: 'knowledge',
          shape: 'pair',
          index: ++knowledge,
          criterionIds: [c.id],
        });
        break;
      case 'text':
        add({ id: 'intro', group: 'intro', shape: 'line', criterionIds: [c.id] });
        add({ id: 'conclusion', group: 'conclusion', shape: 'line', criterionIds: [c.id] });
        break;
      default:
        break;
    }
  }
  const order: SlotGroup[] = [
    'intro',
    'time',
    'place',
    'concepts',
    'source',
    'knowledge',
    'conclusion',
  ];
  return slots.sort((a, b) => order.indexOf(a.group) - order.indexOf(b.group));
}

/** Terms typed into a list slot, one per line (or separated by commas). */
export function listItems(text: string | undefined): string[] {
  return (text ?? '')
    .split(/[\n,;]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

const filled = (text: string | undefined) => (text ?? '').trim().length > 0;

export function slotDone(slot: OutlineSlot, values: OutlineValues): boolean {
  if (slot.shape === 'list') return listItems(values[slot.id]).length >= (slot.target ?? 1);
  if (slot.shape === 'pair')
    return filled(values[`${slot.id}.fact`]) && filled(values[`${slot.id}.point`]);
  return filled(values[slot.id]);
}

/** Has the student written anything in this slot? */
export function slotStarted(slot: OutlineSlot, values: OutlineValues): boolean {
  if (slot.shape === 'pair')
    return filled(values[`${slot.id}.fact`]) || filled(values[`${slot.id}.point`]);
  return filled(values[slot.id]);
}

/**
 * The questions a task asks, one per imperative sentence ("Mutassa be …!").
 * Students lose points by leaving one out, so they tick each off.
 */
export function directives(text: string): string[] {
  return text
    .replace(/\*\*|__|(?<!\*)\*(?!\*)/g, '')
    .split(/(?<=!)\s+|\n+/)
    .map((s) => s.trim())
    .filter((s) => s.endsWith('!'));
}

/** Points for a self-rating: all, about half, or none. */
export function ratedPoints(criterion: Criterion, rating: Rating | undefined): number {
  if (rating === 'full') return criterion.maxPoints;
  if (rating === 'partial') return Math.ceil(criterion.maxPoints / 2);
  return 0;
}

export interface Estimate {
  points: number;
  maxPoints: number;
  /** Every criterion the student has to rate is rated. */
  complete: boolean;
  /** Criteria derived from the others (history: Feladatmegértés), with their points. */
  derived: Record<string, number>;
}

/**
 * A rough score from the student's own ratings. For history, Feladatmegértés
 * follows the key's rule: full points with at least half of the F and E
 * points, 1 point with fewer, and with none the whole task is worth 0.
 */
export function estimate(
  kind: EssayKind,
  criteria: Criterion[],
  ratings: Record<string, Rating>,
): Estimate {
  const maxPoints = criteria.reduce((sum, c) => sum + c.maxPoints, 0);
  const rated = criteria.filter((c) => criterionRole(c, kind) !== 'understanding');
  const complete = rated.every((c) => ratings[c.id] !== undefined);
  let points = rated.reduce((sum, c) => sum + ratedPoints(c, ratings[c.id]), 0);
  const derived: Record<string, number> = {};
  if (kind !== 'literature') {
    const fe = rated.filter((c) => ['source', 'knowledge'].includes(criterionRole(c, kind)));
    const feMax = fe.reduce((sum, c) => sum + c.maxPoints, 0);
    const fePoints = fe.reduce((sum, c) => sum + ratedPoints(c, ratings[c.id]), 0);
    for (const c of criteria.filter((x) => criterionRole(x, kind) === 'understanding')) {
      const value = fePoints === 0 ? 0 : fePoints * 2 >= feMax ? c.maxPoints : 1;
      derived[c.id] = value;
      points += value;
    }
    if (feMax > 0 && fePoints === 0) points = 0;
  }
  return { points, maxPoints, complete, derived };
}
