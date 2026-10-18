import Dexie, { type EntityTable } from 'dexie';
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
  }
}

export const db = new AppDatabase();

/** Tables included in a user's backup file. */
export const BACKUP_TABLES = ['settings', 'attempts', 'answers', 'selfAssessments'] as const;
export type BackupTable = (typeof BACKUP_TABLES)[number];

export const ALL_TABLES = [...BACKUP_TABLES, 'importedPdfs', 'secrets'] as const;
