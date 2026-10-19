import Dexie, { type EntityTable } from 'dexie';
import type { Task } from '@/content/schema.types';
import type { Settings } from '@/domain/settings';

export interface SettingsRow extends Settings {
  key: 'app';
}

/** One run through an exam paper, in practice or timed exam mode. */
export interface AttemptRow {
  id: string;
  examId: string;
  mode: 'practice' | 'exam';
  startedAt: number;
  updatedAt: number;
  submittedAt?: number;
  /** Time spent per timed segment (a part, or the whole paper), in seconds. */
  partSeconds: Record<string, number>;
  /** Exam mode: index of the segment being written; earlier ones are handed in. */
  segment?: number;
  /** Set when the attempt is submitted; updated as review items are marked. */
  result?: AttemptResult;
}

export interface AttemptResult {
  points: number;
  maxPoints: number;
  /** Points still waiting for review (essays, working). */
  pendingPoints?: number;
  subject?: string;
  /** Grade once nothing is waiting for review. */
  grade?: number;
  /** Counted tasks, for statistics. Missing on attempts from before version 0.6. */
  tasks?: TaskSummary[];
}

export interface TaskSummary {
  id: string;
  number: string;
  type: Task['type'];
  topics?: string[];
  points: number;
  maxPoints: number;
  pendingPoints: number;
  status: 'correct' | 'partial' | 'wrong' | 'empty' | 'pending';
  /** The marking-scheme steps or the solution were opened in the help panel. */
  helped?: boolean;
}

/** A day (local date, YYYY-MM-DD) on which the student practised. */
export interface ActivityRow {
  day: string;
  updatedAt: number;
}

export interface AnswerRow {
  attemptId: string;
  fieldId: string;
  value: string | string[] | boolean;
  updatedAt: number;
}

export interface SelfAssessmentRow {
  attemptId: string;
  taskId: string;
  /**
   * Points given per criterion or marking-scheme step id. For automatically
   * checked steps an entry overrides the automatic result.
   */
  points: Record<string, number>;
  updatedAt: number;
}

/** A PDF the student imported themselves, keyed by its SHA-256 hash. */
export interface ImportedPdfRow {
  sha256: string;
  name: string;
  size: number;
  importedAt: number;
  blob: Blob;
}

/** One task practised on its own (topic practice or mistakes review). */
export interface DrillItemResult {
  points: number;
  maxPoints: number;
  /** Points still waiting for the student's own marking. */
  pendingPoints: number;
}

/** A practice round of single tasks, possibly from several papers. */
export interface DrillSessionRow {
  id: string;
  kind: 'topic' | 'review' | 'mixed' | 'assignment';
  subject: string;
  /** Topic name for topic practice. */
  topic?: string;
  /** Title of a teacher's assignment. */
  title?: string;
  /** The assignment link's code, to build the result code at the end. */
  assignment?: string;
  items: { examId: string; taskId: string }[];
  /** Task being worked on. */
  index: number;
  /** Results of checked tasks, by position. */
  checked: Record<number, DrillItemResult>;
  startedAt: number;
  updatedAt: number;
  finishedAt?: number;
}

/** A task answered on its own; feeds the mistakes review schedule. */
export interface DrillEventRow {
  id?: number;
  examId: string;
  taskId: string;
  time: number;
  ratio: number;
  type: Task['type'];
  subject: string;
  topics?: string[];
  number: string;
}

/** A topic (tétel) for the oral exam: built-in ones are copied here when first edited. */
export interface OralTopicRow {
  id: string;
  subject: string;
  title: string;
  /** Built-in topic it was copied from. */
  builtinId?: string;
  /** The student's outline, plain text with one point per line. */
  outline: string;
  createdAt: number;
  updatedAt: number;
  /** Rehearsals done, for the progress mark. */
  practised: number;
}

/** A voice recording of an oral rehearsal; stays on the device unless backed up. */
export interface RecordingRow {
  id: string;
  topicId: string;
  createdAt: number;
  seconds: number;
  mimeType: string;
  blob: Blob;
}

/** Values that never leave the device, not even in exports (e.g. the AI key). */
export interface SecretRow {
  key: string;
  value: string;
}

export class AppDatabase extends Dexie {
  settings!: EntityTable<SettingsRow, 'key'>;
  attempts!: EntityTable<AttemptRow, 'id'>;
  answers!: Dexie.Table<AnswerRow, [string, string]>;
  selfAssessments!: Dexie.Table<SelfAssessmentRow, [string, string]>;
  importedPdfs!: EntityTable<ImportedPdfRow, 'sha256'>;
  secrets!: EntityTable<SecretRow, 'key'>;
  activity!: EntityTable<ActivityRow, 'day'>;
  drillSessions!: EntityTable<DrillSessionRow, 'id'>;
  drillEvents!: EntityTable<DrillEventRow, 'id'>;
  oralTopics!: EntityTable<OralTopicRow, 'id'>;
  recordings!: EntityTable<RecordingRow, 'id'>;

  constructor(name = 'erettsegi-gyakorlo') {
    super(name);
    this.version(1).stores({
      settings: 'key',
      attempts: 'id, examId, startedAt, submittedAt',
      answers: '[attemptId+fieldId], attemptId',
      selfAssessments: '[attemptId+taskId], attemptId',
      importedPdfs: 'sha256',
      secrets: 'key',
    });
    // Version 2: practice days for the streak, filled from existing attempts.
    this.version(2)
      .stores({ activity: 'day' })
      .upgrade(async (tx) => {
        const times: number[] = [];
        await tx
          .table<AttemptRow>('attempts')
          .each((a) =>
            times.push(a.startedAt, a.updatedAt, ...(a.submittedAt ? [a.submittedAt] : [])),
          );
        await tx.table<AnswerRow>('answers').each((a) => times.push(a.updatedAt));
        const rows = new Map<string, ActivityRow>();
        for (const time of times) {
          const day = dayKey(time);
          rows.set(day, { day, updatedAt: Math.max(time, rows.get(day)?.updatedAt ?? 0) });
        }
        await tx.table('activity').bulkPut([...rows.values()]);
      });
    // Version 3: single-task practice, mistakes review, oral exam topics and recordings.
    this.version(3).stores({
      drillSessions: 'id, updatedAt',
      drillEvents: '++id, [examId+taskId], time',
      oralTopics: 'id, subject',
      recordings: 'id, topicId, createdAt',
    });
  }
}

/** Local calendar day of a timestamp, as YYYY-MM-DD. */
export function dayKey(time: number | Date): string {
  const date = new Date(time);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export const db = new AppDatabase();

/** Tables included in a user's backup file. */
export const BACKUP_TABLES = [
  'settings',
  'attempts',
  'answers',
  'selfAssessments',
  'activity',
  'drillSessions',
  'drillEvents',
  'oralTopics',
  'recordings',
] as const;
export type BackupTable = (typeof BACKUP_TABLES)[number];

export const ALL_TABLES = [...BACKUP_TABLES, 'importedPdfs', 'secrets'] as const;
