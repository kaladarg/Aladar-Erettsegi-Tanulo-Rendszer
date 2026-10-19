import type { TaskRef } from '../practice/topics';

/**
 * Teacher links: a teacher picks tasks, and the whole assignment travels in
 * the link itself (no server, no accounts). Students send back a result code
 * that the teacher pastes into the app to see a summary table. Codes are
 * self-reported: they are a convenience, not a proof.
 */
export interface Assignment {
  title: string;
  subject: string;
  /** Short instructions from the teacher. */
  note?: string;
  items: TaskRef[];
}

export interface AssignmentResult {
  /** Fingerprint of the assignment the result belongs to. */
  assignment: string;
  name: string;
  /** Points per task, in assignment order; null for a skipped task. */
  points: (number | null)[];
  maxPoints: number[];
  /** Points still waiting for the student's own marking, per task. */
  pending: number[];
  finishedAt: number;
}

const VERSION = 1;
const RESULT_PREFIX = 'EGY1';
export const MAX_ITEMS = 40;
export const MAX_TITLE = 120;
export const MAX_NOTE = 500;
export const MAX_NAME = 60;

function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(code: string): string {
  const base64 = code.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(base64 + '='.repeat((4 - (base64.length % 4)) % 4));
  return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)));
}

/** Tasks are grouped by paper: [[examId, [taskId, ...]], ...]. */
type Packed = [number, string, string, string, [string, string[]][]];

export function encodeAssignment(assignment: Assignment): string {
  const groups: [string, string[]][] = [];
  for (const { examId, taskId } of assignment.items) {
    const last = groups.at(-1);
    if (last && last[0] === examId) last[1].push(taskId);
    else groups.push([examId, [taskId]]);
  }
  const packed: Packed = [
    VERSION,
    assignment.title.slice(0, MAX_TITLE),
    assignment.subject,
    (assignment.note ?? '').slice(0, MAX_NOTE),
    groups,
  ];
  return toBase64Url(JSON.stringify(packed));
}

const isString = (value: unknown): value is string => typeof value === 'string';

/** Reads an assignment from a link code; null when it is damaged or from a newer app. */
export function decodeAssignment(code: string): Assignment | null {
  try {
    const packed: unknown = JSON.parse(fromBase64Url(code));
    if (!Array.isArray(packed) || packed[0] !== VERSION) return null;
    const [, title, subject, note, groups] = packed as Packed;
    if (!isString(title) || !isString(subject) || !isString(note) || !Array.isArray(groups))
      return null;
    const items: TaskRef[] = [];
    for (const group of groups) {
      if (!Array.isArray(group) || !isString(group[0]) || !Array.isArray(group[1])) return null;
      for (const taskId of group[1]) {
        if (!isString(taskId)) return null;
        items.push({ examId: group[0], taskId });
      }
    }
    if (items.length === 0 || items.length > MAX_ITEMS) return null;
    return {
      title: title.slice(0, MAX_TITLE),
      subject,
      note: note ? note.slice(0, MAX_NOTE) : undefined,
      items,
    };
  } catch {
    return null;
  }
}

/** Short, stable fingerprint of an assignment (FNV-1a), to match results to it. */
export function assignmentId(code: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < code.length; i++) {
    hash ^= code.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

export function encodeResult(result: AssignmentResult): string {
  const body = [
    result.name.trim().slice(0, MAX_NAME),
    result.points,
    result.maxPoints,
    result.pending,
    Math.round(result.finishedAt / 1000),
  ];
  return `${RESULT_PREFIX}.${result.assignment}.${toBase64Url(JSON.stringify(body))}`;
}

const isPoints = (list: unknown): list is (number | null)[] =>
  Array.isArray(list) && list.every((n) => n === null || (typeof n === 'number' && n >= 0));
const isNumbers = (list: unknown): list is number[] =>
  Array.isArray(list) && list.every((n) => typeof n === 'number' && n >= 0);

/** Reads one result code; null when it is not one. */
export function decodeResult(code: string): AssignmentResult | null {
  const match = /^EGY1\.([0-9a-z]+)\.([A-Za-z0-9_-]+)$/.exec(code.trim());
  if (!match) return null;
  try {
    const body: unknown = JSON.parse(fromBase64Url(match[2]!));
    if (!Array.isArray(body)) return null;
    const [name, points, maxPoints, pending, seconds] = body as unknown[];
    if (!isString(name) || !isPoints(points) || !isNumbers(maxPoints) || !isNumbers(pending))
      return null;
    if (points.length !== maxPoints.length || pending.length !== maxPoints.length) return null;
    if (typeof seconds !== 'number') return null;
    return {
      assignment: match[1]!,
      name: name.slice(0, MAX_NAME),
      points,
      maxPoints,
      pending,
      finishedAt: seconds * 1000,
    };
  } catch {
    return null;
  }
}

/** All result codes found in pasted text (one per line, or mixed with other text). */
export function findResults(text: string): AssignmentResult[] {
  return (text.match(/EGY1\.[0-9a-z]+\.[A-Za-z0-9_-]+/g) ?? [])
    .map(decodeResult)
    .filter((r): r is AssignmentResult => r !== null);
}
