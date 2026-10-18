import type { CSSProperties } from 'react';
import type { Choice, Exam, Field, Part, Rect, Task } from '@/content/schema.types';
import { choiceKey } from '@/storage/attempts';

/** The choice unit a task belongs to (e.g. task 16. b) belongs to unit "16"). */
export interface UnitRef {
  key: string;
  choice: Choice;
  unit: string;
}

interface Base {
  key: string;
  /** Position used for reading order. */
  rect: Rect;
}

export type OverlayItem =
  | (Base & { kind: 'field'; task: Task; field: Field; unit?: UnitRef; cluster?: string })
  | (Base & { kind: 'continuation'; task: Task; field: Field; unit?: UnitRef; cluster?: string })
  | (Base & { kind: 'options'; task: Task; field: Field; unit?: UnitRef; cluster?: string })
  | (Base & {
      kind: 'choiceMark';
      part: Part;
      choice: Choice;
      choiceIndex: number;
      unitIndex: number;
    })
  | (Base & { kind: 'gate'; part: Part; choice: Choice; choiceIndex: number });

const intersects = (a: Rect, b: Rect) =>
  a.page === b.page && a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

const union = (rects: Rect[]): Rect => {
  const x0 = Math.min(...rects.map((r) => r.x));
  const y0 = Math.min(...rects.map((r) => r.y));
  const x1 = Math.max(...rects.map((r) => r.x + r.w));
  const y1 = Math.max(...rects.map((r) => r.y + r.h));
  return { page: rects[0]!.page, x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
};

function unitOf(part: Part, task: Task): UnitRef | undefined {
  for (const [index, choice] of (part.choices ?? []).entries()) {
    const unit = choice.taskIds.find((u) => u === task.id || u === task.group);
    if (unit) return { key: choiceKey(part.id, index), choice, unit };
  }
  return undefined;
}

/**
 * Everything drawn over the paper, per page, in reading order: answer fields,
 * continuation areas, option circles, choice marks, and a choice prompt where
 * alternative tasks share one answer area (e.g. history essays 13 and 14).
 */
export function buildOverlayItems(exam: Exam): Map<number, OverlayItem[]> {
  const items: OverlayItem[] = [];
  for (const part of exam.parts) {
    for (const task of part.tasks) {
      const unit = unitOf(part, task);
      for (const field of task.fields) {
        const optionRects =
          field.options?.map((o) => o.pdfRect).filter((r): r is Rect => !!r) ?? [];
        if (optionRects.length && optionRects.length === field.options?.length) {
          items.push({ kind: 'options', key: field.id, rect: optionRects[0]!, task, field, unit });
        } else if (field.pdfRect) {
          items.push({ kind: 'field', key: field.id, rect: field.pdfRect, task, field, unit });
        }
        field.continuationRects?.forEach((rect, i) =>
          items.push({ kind: 'continuation', key: `${field.id}#${i}`, rect, task, field, unit }),
        );
      }
    }
    part.choices?.forEach((choice, choiceIndex) =>
      choice.unitRects?.forEach((rect, unitIndex) =>
        items.push({
          kind: 'choiceMark',
          key: `choice-${part.id}-${choiceIndex}-${unitIndex}`,
          rect,
          part,
          choice,
          choiceIndex,
          unitIndex,
        }),
      ),
    );
  }

  // Answer areas shared by alternative units: until the student chooses, show the choice instead.
  const answerItems = items.filter(
    (item): item is Extract<OverlayItem, { unit?: UnitRef }> => 'unit' in item && !!item.unit,
  );
  const clusters: { members: typeof answerItems; part: Part; choiceIndex: number }[] = [];
  for (const item of answerItems) {
    const rivals = answerItems.filter(
      (other) =>
        other.unit!.key === item.unit!.key &&
        other.unit!.unit !== item.unit!.unit &&
        intersects(other.rect, item.rect),
    );
    if (rivals.length === 0) continue;
    const existing = clusters.find((c) => c.members.some((m) => m === item || rivals.includes(m)));
    const cluster = existing ?? {
      members: [],
      part: exam.parts.find((p) => p.choices?.includes(item.unit!.choice))!,
      choiceIndex: 0,
    };
    for (const member of [item, ...rivals])
      if (!cluster.members.includes(member)) cluster.members.push(member);
    cluster.choiceIndex = cluster.part.choices!.indexOf(item.unit!.choice);
    if (!existing) clusters.push(cluster);
  }
  clusters.forEach((cluster, index) => {
    const key = `gate-${index}`;
    for (const member of cluster.members) member.cluster = key;
    items.push({
      kind: 'gate',
      key,
      rect: union(cluster.members.map((m) => m.rect)),
      part: cluster.part,
      choice: cluster.part.choices![cluster.choiceIndex]!,
      choiceIndex: cluster.choiceIndex,
    });
  });

  const byPage = new Map<number, OverlayItem[]>();
  for (const item of items) {
    const list = byPage.get(item.rect.page) ?? [];
    list.push(item);
    byPage.set(item.rect.page, list);
  }
  // DOM order = reading order, so Tab moves through the paper naturally.
  for (const list of byPage.values())
    list.sort((a, b) => a.rect.y - b.rect.y || a.rect.x - b.rect.x);
  return byPage;
}

/** Which items to draw, given the student's choices: hides alternatives that lost. */
export function visibleItems(
  items: OverlayItem[],
  picked: (key: string) => string[] | undefined,
): OverlayItem[] {
  return items.filter((item) => {
    if (item.kind === 'gate') {
      const value = picked(choiceKey(item.part.id, item.choiceIndex));
      return !value || value.length < item.choice.pick;
    }
    if (item.kind === 'choiceMark' || !item.unit || !item.cluster) return true;
    const value = picked(item.unit.key);
    if (!value || value.length < item.unit.choice.pick) return false;
    return value.includes(item.unit.unit);
  });
}

/** Absolute position of a page-relative rect inside its page container. */
export const rectStyle = (rect: Rect): CSSProperties => ({
  left: `${rect.x * 100}%`,
  top: `${rect.y * 100}%`,
  width: `${rect.w * 100}%`,
  height: `${rect.h * 100}%`,
});
