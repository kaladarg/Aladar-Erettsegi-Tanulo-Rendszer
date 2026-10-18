import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { ErrorObject } from 'ajv';
import { checkExam, type ContentIssue } from '../../src/content/checks';
import type { Exam, Manifest } from '../../src/content/schema.types';
import { validateExam } from '../../src/content/schema.validators.js';

export interface PackMeta {
  packId: string;
  title: string;
  notice?: string;
  repositoryUrl?: string;
  subjects: Manifest['subjects'];
  levels: Manifest['levels'];
}

export async function readPackMeta(dir: string): Promise<PackMeta> {
  return JSON.parse(await readFile(join(dir, 'pack.json'), 'utf8')) as PackMeta;
}

export async function listExamDirs(dir: string): Promise<string[]> {
  const entries = await readdir(join(dir, 'exams'), { withFileTypes: true }).catch(() => []);
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export function schemaIssues(errors: ErrorObject[] | null | undefined): ContentIssue[] {
  return (errors ?? []).map((error) => ({
    level: 'error' as const,
    path: error.instancePath || '(root)',
    message: `${error.message ?? 'invalid'}${error.params ? ` ${JSON.stringify(error.params)}` : ''}`,
  }));
}

export interface LoadedExam {
  dir: string;
  raw: string;
  exam?: Exam;
  issues: ContentIssue[];
}

/** Parses, schema-validates and checks one exam.json. */
export function inspectExamJson(raw: string, dir = ''): LoadedExam {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch (error) {
    return {
      dir,
      raw,
      issues: [
        { level: 'error', path: '(file)', message: `Invalid JSON: ${(error as Error).message}` },
      ],
    };
  }
  if (!validateExam(data)) return { dir, raw, issues: schemaIssues(validateExam.errors) };
  return { dir, raw, exam: data, issues: checkExam(data) };
}

export async function loadExam(contentDir: string, examDir: string): Promise<LoadedExam | null> {
  const dir = join(contentDir, 'exams', examDir);
  const raw = await readFile(join(dir, 'exam.json'), 'utf8').catch(() => null);
  return raw === null ? null : inspectExamJson(raw, dir);
}
