/**
 * Answers every exam with the marking scheme's own accepted answers and checks
 * that the automatic scoring gives full marks: each rule's first accepted
 * answer, and for automatic steps the first keyword of every group. A failure
 * means a rule or a check cannot recognise the answer it was written for.
 *   npm run content:check-key -- --dir ../erettsegi-gyakorlo-content [--exam <id>]
 */
import { resolve } from 'node:path';
import type { Exam, Field, Rule, Task } from '../src/content/schema.types';
import { scoreTask } from '../src/domain/scoring/exam';
import type { Answers } from '../src/storage/attempts';
import { parseArgs, stringArg } from './lib/args';
import { listExamDirs, loadExam } from './lib/content';
import { isMain } from './lib/isMain';

function ruleAnswers(rule: Rule, fields: Map<string, Field>): Answers {
  const answer = rule.answer;
  const first = rule.fieldIds[0]!;
  switch (answer.kind) {
    case 'text':
      return { [first]: answer.accepted[0]! };
    case 'number':
      return { [first]: String(answer.accepted[0]).replace('.', ',') };
    case 'choice':
      return {
        [first]: fields.get(first)?.kind === 'multi' ? answer.correct : answer.correct[0]!,
      };
    case 'matching':
      return Object.fromEntries(Object.entries(answer.pairs));
    case 'set':
      return Object.fromEntries(rule.fieldIds.map((id, i) => [id, answer.items[i]?.[0] ?? '']));
    case 'elements':
      return { [first]: answer.elements.join(', ') };
  }
}

/** The key's answers for one task, including text that meets its automatic checks. */
export function keyAnswers(task: Task): Answers {
  const fields = new Map(task.fields.map((f) => [f.id, f]));
  const answers: Answers = {};
  for (const rule of task.scoring.rules ?? []) Object.assign(answers, ruleAnswers(rule, fields));
  const texts = new Map<string, string[]>();
  const quoted = new Set<string>();
  // Steps sharing a "distinct" key must each find a different alternative.
  const nextAlternative = new Map<string, number>();
  for (const step of task.scoring.steps ?? []) {
    const check = step.auto;
    if (!check) continue;
    const key = check.distinct ?? `#${step.id}`;
    const targets = check.allFields ? check.fieldIds : [check.fieldIds[0]!];
    let index = nextAlternative.get(key) ?? 0;
    for (const id of targets) {
      const groups = check.alternatives[index % check.alternatives.length] ?? [];
      // One keyword per group, separated so numbers are not read as one grouped number.
      const text = groups.map((group) => group[0] ?? '').join('; ');
      const list = texts.get(id) ?? [];
      if (!list.includes(text)) list.push(text);
      texts.set(id, list);
      if (check.requireQuotes) quoted.add(id);
      index++;
    }
    nextAlternative.set(key, index);
  }
  for (const [id, list] of texts) {
    const before = answers[id];
    const text = [typeof before === 'string' ? before : '', ...list].filter(Boolean).join('\n');
    answers[id] = quoted.has(id) ? `„${text}”` : text;
  }
  return answers;
}

export interface KeyProblem {
  task: string;
  item: string;
  points: number;
  max: number;
}

export function checkKey(exam: Exam): { problems: KeyProblem[]; autoPoints: number } {
  const problems: KeyProblem[] = [];
  let autoPoints = 0;
  for (const task of exam.parts.flatMap((part) => part.tasks)) {
    const result = scoreTask(task, keyAnswers(task));
    autoPoints += result.autoPoints;
    for (const rule of result.rules) {
      if (rule.points < rule.maxPoints)
        problems.push({
          task: task.number,
          item: rule.ruleId,
          points: rule.points,
          max: rule.maxPoints,
        });
    }
    for (const item of result.items) {
      if (item.source === 'auto' && (item.points ?? 0) < item.maxPoints)
        problems.push({
          task: task.number,
          item: item.id,
          points: item.points ?? 0,
          max: item.maxPoints,
        });
    }
  }
  return { problems, autoPoints };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const dir = resolve(stringArg(args, 'dir', '../erettsegi-gyakorlo-content'));
  const only = stringArg(args, 'exam', '');
  let failed = false;
  for (const id of await listExamDirs(dir)) {
    if (only && id !== only) continue;
    const loaded = await loadExam(dir, id);
    if (!loaded?.exam) continue;
    const { problems, autoPoints } = checkKey(loaded.exam);
    console.log(
      `${id}: ${autoPoints} automatic points from the key, ${problems.length} problem(s)`,
    );
    for (const p of problems) console.log(`  ${p.task} ${p.item}: ${p.points} / ${p.max}`);
    failed ||= problems.length > 0;
  }
  if (failed) process.exitCode = 1;
}

if (isMain(import.meta.url)) void main();
