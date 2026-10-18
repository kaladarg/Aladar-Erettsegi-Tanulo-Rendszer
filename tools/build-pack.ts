/**
 * Builds manifest.json for a content pack from its exams/<id>/exam.json files.
 * Exams with errors are left out (and the command fails).
 *   npm run content:pack -- --dir ../erettsegi-gyakorlo-content
 */
import { access, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import type { Manifest } from '../src/content/schema.types';
import { validateManifest } from '../src/content/schema.validators.js';
import { parseArgs, stringArg } from './lib/args';
import { listExamDirs, loadExam, readPackMeta, schemaIssues } from './lib/content';
import { sha256 } from './lib/hash';
import { isMain } from './lib/isMain';

export async function buildPack(dir: string, today = new Date().toISOString().slice(0, 10)) {
  const meta = await readPackMeta(dir);
  const exams: Manifest['exams'] = [];
  const problems: string[] = [];

  for (const id of await listExamDirs(dir)) {
    const loaded = await loadExam(dir, id);
    if (!loaded) continue;
    const errors = loaded.issues.filter((issue) => issue.level === 'error');
    if (!loaded.exam || errors.length > 0) {
      problems.push(`${id}: ${errors.length} error(s), see "npm run content:review"`);
      continue;
    }
    const exam = loaded.exam;
    if (exam.id !== id) problems.push(`${id}: folder name does not match exam id "${exam.id}"`);
    if (!meta.subjects.some((s) => s.id === exam.subject))
      problems.push(`${id}: unknown subject ${exam.subject}`);
    if (!meta.levels.some((l) => l.id === exam.level))
      problems.push(`${id}: unknown level ${exam.level}`);
    const pdf = exam.source.examPdf.file;
    const hasPdf = pdf
      ? await access(join(loaded.dir, pdf)).then(
          () => true,
          () => false,
        )
      : false;
    if (pdf && !hasPdf) problems.push(`${id}: exam PDF ${pdf} is missing`);
    exams.push({
      id: exam.id,
      subject: exam.subject,
      level: exam.level,
      year: exam.year,
      session: exam.session,
      format: exam.format,
      title: exam.title,
      ...(exam.sample ? { sample: true } : {}),
      maxPoints: exam.maxPoints,
      path: `exams/${id}/exam.json`,
      sha256: sha256(loaded.raw),
      hasPdf,
      pdfSha256: exam.source.examPdf.sha256,
      status: exam.review.status,
    });
  }

  exams.sort(
    (a, b) =>
      b.year - a.year || a.subject.localeCompare(b.subject) || a.session.localeCompare(b.session),
  );
  const manifest: Manifest = {
    schemaVersion: 1,
    packId: meta.packId,
    title: meta.title,
    updatedAt: today,
    ...(meta.notice ? { notice: meta.notice } : {}),
    ...(meta.repositoryUrl ? { repositoryUrl: meta.repositoryUrl } : {}),
    subjects: meta.subjects,
    levels: meta.levels,
    exams,
  };
  if (!validateManifest(manifest)) {
    problems.push(
      ...schemaIssues(validateManifest.errors).map((i) => `manifest ${i.path}: ${i.message}`),
    );
  }
  await writeFile(join(dir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  return { manifest, problems };
}

if (isMain(import.meta.url)) {
  const dir = resolve(
    stringArg(parseArgs(process.argv.slice(2)), 'dir', '../erettsegi-gyakorlo-content'),
  );
  const { manifest, problems } = await buildPack(dir);
  console.log(`manifest.json: ${manifest.exams.length} exam(s).`);
  for (const problem of problems) console.error(`  ${problem}`);
  if (problems.length) process.exit(1);
}
