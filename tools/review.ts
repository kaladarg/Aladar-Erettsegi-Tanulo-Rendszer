/**
 * Writes a review report per exam (reports/<exam-id>.md) plus an overview
 * (reports/README.md). Exits with code 1 when any exam has errors.
 *   npm run content:review -- --dir ../erettsegi-gyakorlo-content [--exam <id>]
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { partPoints, scoringPoints } from '../src/content/checks';
import type { Exam } from '../src/content/schema.types';
import { parseArgs, stringArg } from './lib/args';
import { listExamDirs, loadExam, type LoadedExam } from './lib/content';
import { isMain } from './lib/isMain';

const escape = (text: string) => text.replace(/\|/g, '\\|').replace(/\n/g, ' ');

function summary(exam: Exam) {
  const tasks = exam.parts.flatMap((part) => part.tasks);
  const fields = tasks.flatMap((task) => task.fields);
  return {
    tasks: tasks.length,
    fields: fields.length,
    fieldsWithRect: fields.filter((field) => field.pdfRect).length,
    withKey: tasks.filter((task) => scoringPoints(task) > 0).length,
    autoPoints: tasks.reduce(
      (sum, t) =>
        sum +
        (t.scoring.rules ?? []).reduce((s, r) => s + r.points, 0) +
        (t.scoring.steps ?? []).filter((x) => x.auto).reduce((s, x) => s + x.points, 0),
      0,
    ),
    selfPoints: tasks.reduce(
      (sum, t) =>
        sum +
        (t.scoring.steps ?? []).filter((x) => !x.auto).reduce((s, x) => s + x.points, 0) +
        (t.scoring.criteria ?? []).reduce((s, c) => s + c.maxPoints, 0),
      0,
    ),
  };
}

export function renderReport(id: string, loaded: LoadedExam): string {
  const lines = [`# Review report: ${id}`, ''];
  const errors = loaded.issues.filter((issue) => issue.level === 'error');
  const warnings = loaded.issues.filter((issue) => issue.level === 'warning');
  lines.push(
    errors.length === 0 ? '**Result: no errors.**' : `**Result: ${errors.length} error(s).**`,
    `Warnings: ${warnings.length}`,
    '',
  );
  const exam = loaded.exam;
  if (exam) {
    const s = summary(exam);
    const partTotal = exam.parts.reduce((sum, part) => sum + partPoints(part), 0);
    lines.push(
      '## Checks',
      '',
      '| Check | Result |',
      '| --- | --- |',
      `| Status | ${exam.review.status} |`,
      `| Points: tasks add up to the marking-scheme total (${exam.maxPoints}) | ${partTotal === exam.maxPoints ? 'yes' : `**no (${partTotal})**`} |`,
      `| Every task has an answer key or criteria | ${s.withKey === s.tasks ? 'yes' : `**no (${s.tasks - s.withKey} missing)**`} |`,
      `| Every field has PDF coordinates | ${s.fieldsWithRect === s.fields ? 'yes' : `**no (${s.fields - s.fieldsWithRect} of ${s.fields} missing)**`} |`,
      `| Automatic / needs-review points | ${s.autoPoints} / ${s.selfPoints} |`,
      '',
      '## Parts',
      '',
      '| Part | Time | Points | Tasks |',
      '| --- | --- | --- | --- |',
      ...exam.parts.map(
        (part) =>
          `| ${escape(part.title)} | ${part.timeLimitMinutes} min | ${part.maxPoints} | ${part.tasks.length} |`,
      ),
      '',
      '## Tasks',
      '',
      '| Task | Type | Points | Key | Fields (with rect) |',
      '| --- | --- | --- | --- | --- |',
      ...exam.parts.flatMap((part) =>
        part.tasks.map((task) => {
          const rules = task.scoring.rules?.length ?? 0;
          const steps = task.scoring.steps?.length ?? 0;
          const criteria = task.scoring.criteria?.length ?? 0;
          const key = [
            rules && `${rules} rule(s)`,
            steps && `${steps} step(s)`,
            criteria && `${criteria} criteria`,
          ]
            .filter(Boolean)
            .join(', ');
          const rects = task.fields.filter((field) => field.pdfRect).length;
          return `| ${escape(task.number)} \`${task.id}\` | ${task.type} | ${task.maxPoints} | ${key || '**none**'} | ${task.fields.length} (${rects}) |`;
        }),
      ),
      '',
    );
  }
  if (loaded.issues.length > 0) {
    lines.push(
      '## Issues',
      '',
      ...loaded.issues.map((i) => `- **${i.level}** \`${i.path}\`: ${escape(i.message)}`),
      '',
    );
  }
  return lines.join('\n');
}

export async function review(contentDir: string, only?: string) {
  const ids = (await listExamDirs(contentDir)).filter((id) => !only || id === only);
  const rows: string[] = [];
  let failed = 0;
  await mkdir(join(contentDir, 'reports'), { recursive: true });
  for (const id of ids) {
    const loaded = await loadExam(contentDir, id);
    if (!loaded) {
      rows.push(`| ${id} | not extracted yet | | |`);
      continue;
    }
    const errors = loaded.issues.filter((issue) => issue.level === 'error').length;
    const warnings = loaded.issues.length - errors;
    if (errors) failed++;
    await writeFile(join(contentDir, 'reports', `${id}.md`), renderReport(id, loaded));
    rows.push(
      `| [${id}](${id}.md) | ${loaded.exam?.review.status ?? 'invalid'} | ${errors} | ${warnings} |`,
    );
  }
  await writeFile(
    join(contentDir, 'reports', 'README.md'),
    [
      '# Review overview',
      '',
      '| Exam | Status | Errors | Warnings |',
      '| --- | --- | --- | --- |',
      ...rows,
      '',
    ].join('\n'),
  );
  return { total: ids.length, failed, rows };
}

if (isMain(import.meta.url)) {
  const args = parseArgs(process.argv.slice(2));
  const dir = resolve(stringArg(args, 'dir', '../erettsegi-gyakorlo-content'));
  const result = await review(dir, typeof args.exam === 'string' ? args.exam : undefined);
  console.log(result.rows.join('\n'));
  console.log(
    `\nReports written to ${join(dir, 'reports')}. ${result.failed} exam(s) with errors.`,
  );
  if (result.failed) process.exit(1);
}
