import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { scoreTask } from '@/domain/scoring/exam';
import type { Answers } from '@/storage/attempts';
import { checkExam, partExamMax, scalePoints } from './checks';
import type { Exam, Rule, Task } from './schema.types';
import { validateExam } from './schema.validators.js';

const IDS = ['angol-kozep-2026-majus-minta', 'nemet-kozep-2026-majus-minta'];
const dir = (id: string) => resolve(process.cwd(), `public/demo-pack/exams/${id}`);
const load = (id: string): Exam => JSON.parse(readFileSync(`${dir(id)}/exam.json`, 'utf8')) as Exam;

/** The key's own answers, derived like tools/check-key.ts does. */
function ruleAnswers(rule: Rule): Answers {
  const answer = rule.answer;
  const first = rule.fieldIds[0]!;
  switch (answer.kind) {
    case 'text':
      return { [first]: answer.accepted[0]! };
    case 'choice':
      return { [first]: answer.correct[0]! };
    case 'matching':
      return { ...answer.pairs };
    default:
      throw new Error(`Unexpected answer kind ${answer.kind} in the demo language papers`);
  }
}

function keyAnswers(task: Task): Answers {
  const answers: Answers = {};
  for (const rule of task.scoring.rules ?? []) Object.assign(answers, ruleAnswers(rule));
  for (const step of task.scoring.steps ?? []) {
    const check = step.auto!;
    answers[check.fieldIds[0]!] = check.alternatives[0]!.map((group) => group[0]).join('; ');
  }
  return answers;
}

describe.each(IDS)('%s', (id) => {
  const exam = load(id);

  it('is schema-valid and has no issues', () => {
    expect(validateExam(exam), JSON.stringify(validateExam.errors)).toBe(true);
    expect(checkExam(exam)).toEqual([]);
  });

  it('follows the four-part structure of the language papers', () => {
    expect(exam.language).toMatch(/^(en|de)$/);
    expect(exam.parts.map((part) => part.id)).toEqual(['I', 'II', 'III', 'IV']);
    expect(exam.parts.map((part) => part.timeLimitMinutes)).toEqual([60, 30, 30, 60]);
    expect(exam.parts.map(partExamMax)).toEqual([11, 6, 11, 11]);
    for (const task of exam.parts.flatMap((part) => part.tasks)) {
      expect(task.topics, task.id).toHaveLength(2);
      expect(task.explanation, task.id).toBeTruthy();
      expect(task.hints?.length, task.id).toBeGreaterThan(0);
    }
  });

  it('gives full marks for the key answers', () => {
    for (const task of exam.parts.slice(0, 3).flatMap((part) => part.tasks)) {
      const result = scoreTask(task, keyAnswers(task));
      expect(result.autoPoints, task.id).toBe(task.maxPoints);
    }
  });

  it('converts a full score to the scale maximum', () => {
    for (const part of exam.parts.filter((p) => p.scale))
      expect(scalePoints(part.scale!, part.maxPoints)).toBe(part.scale!.maxPoints);
  });

  it('ships the listening recording with segments and transcripts', () => {
    const listening = exam.parts.find((part) => part.audio)!;
    const audio = listening.audio!;
    expect(existsSync(resolve(dir(id), audio.file!))).toBe(true);
    expect(audio.durationSeconds).toBeGreaterThan(0);
    expect(audio.segments?.map((s) => s.taskIds)).toEqual(listening.tasks.map((task) => [task.id]));
    for (const segment of audio.segments ?? [])
      expect(segment.startSeconds).toBeLessThan(audio.durationSeconds!);
    for (const task of listening.tasks) expect(task.transcript, task.id).toBeTruthy();
  });

  it('has a scored example answer for the writing task', () => {
    const writing = exam.parts[3]!.tasks[0]!;
    expect(writing.wordLimit).toEqual({ min: 80, max: 100 });
    expect(writing.examples?.[0]?.label).toBe('Közepes megoldás');
  });
});
