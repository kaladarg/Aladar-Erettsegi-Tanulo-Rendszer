import { checkExam, hasErrors } from './checks';
import type { Exam, ExamEntry, Manifest } from './schema.types';

// The generated validators are large; load them with the first content request,
// not with the app shell.
const validators = () => import('./schema.validators.js');

export type ContentErrorCode = 'offline' | 'notFound' | 'invalid';

export class ContentError extends Error {
  constructor(
    public readonly code: ContentErrorCode,
    message: string,
  ) {
    super(message);
    this.name = 'ContentError';
  }
}

async function fetchJson(url: string, init?: RequestInit): Promise<unknown> {
  let response: Response;
  try {
    response = await fetch(url, init);
  } catch {
    throw new ContentError('offline', `Network error while loading ${url}`);
  }
  if (response.status === 404) throw new ContentError('notFound', `${url} not found`);
  if (!response.ok) throw new ContentError('offline', `${url}: HTTP ${response.status}`);
  try {
    return await response.json();
  } catch {
    throw new ContentError('invalid', `${url} is not valid JSON`);
  }
}

export interface LoadedManifest {
  baseUrl: string;
  manifest: Manifest;
}

export async function loadManifest(baseUrl: string): Promise<LoadedManifest> {
  const [data, { validateManifest }] = await Promise.all([
    fetchJson(new URL('manifest.json', baseUrl).href, { cache: 'no-cache' }),
    validators(),
  ]);
  if (!validateManifest(data)) {
    console.error('Invalid content manifest', validateManifest.errors);
    throw new ContentError('invalid', 'The content manifest does not match the schema.');
  }
  return { baseUrl, manifest: data };
}

/** URL of an exam.json, versioned by its hash so caches never serve stale data. */
export function examUrl(baseUrl: string, entry: ExamEntry): string {
  const url = new URL(entry.path, baseUrl);
  url.searchParams.set('v', entry.sha256.slice(0, 12));
  return url.href;
}

/** Resolves a file referenced from exam.json (e.g. the PDF) relative to it. */
export function examFileUrl(baseUrl: string, entry: ExamEntry, file: string): string {
  return new URL(file, new URL(entry.path, baseUrl)).href;
}

export async function loadExam(baseUrl: string, entry: ExamEntry): Promise<Exam> {
  const [data, { validateExam }] = await Promise.all([
    fetchJson(examUrl(baseUrl, entry)),
    validators(),
  ]);
  if (!validateExam(data)) {
    console.error(`Invalid exam ${entry.id}`, validateExam.errors);
    throw new ContentError('invalid', `Exam ${entry.id} does not match the schema.`);
  }
  const issues = checkExam(data);
  if (hasErrors(issues)) {
    console.error(`Exam ${entry.id} failed consistency checks`, issues);
    throw new ContentError('invalid', `Exam ${entry.id} failed consistency checks.`);
  }
  return data;
}
