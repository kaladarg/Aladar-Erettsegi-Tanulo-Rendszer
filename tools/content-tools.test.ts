// @vitest-environment node
import { cp, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import type Anthropic from '@anthropic-ai/sdk';
import { describe, expect, it } from 'vitest';
import type { Exam, Manifest } from '../src/content/schema.types';
import { buildPack } from './build-pack';
import { initContentRepo } from './content-init';
import { extract } from './extract';
import { sha256 } from './lib/hash';
import { review } from './review';

const DEMO = resolve(process.cwd(), 'public/demo-pack');

async function copyDemo() {
  const dir = await mkdtemp(join(tmpdir(), 'pack-'));
  await cp(DEMO, dir, { recursive: true });
  return dir;
}

describe('content:init', () => {
  it('creates the repository skeleton once', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'init-'));
    expect(await initContentRepo(dir)).toEqual(
      expect.arrayContaining(['pack.json', 'README.md', 'CONTENT_NOTICE.md', '.gitattributes']),
    );
    expect(await initContentRepo(dir)).toEqual([]);
  });
});

describe('demo pack', () => {
  it('manifest hashes match the committed files (run "npm run demo:build" after edits)', async () => {
    const manifest = JSON.parse(await readFile(join(DEMO, 'manifest.json'), 'utf8')) as Manifest;
    for (const entry of manifest.exams) {
      const raw = await readFile(join(DEMO, entry.path), 'utf8');
      expect(sha256(raw), entry.id).toBe(entry.sha256);
      const exam = JSON.parse(raw) as Exam;
      const pdf = await readFile(join(DEMO, 'exams', entry.id, exam.source.examPdf.file!));
      expect(sha256(pdf), `${entry.id} PDF`).toBe(entry.pdfSha256);
    }
  });
});

describe('content:pack and content:review', () => {
  it('builds a manifest for valid exams', async () => {
    const dir = await copyDemo();
    const { manifest, problems } = await buildPack(dir, '2026-10-18');
    expect(problems).toEqual([]);
    expect(manifest.exams).toHaveLength(3);
    expect(
      manifest.exams.every((exam) => exam.hasPdf && exam.sample && exam.status === 'reviewed'),
    ).toBe(true);
    const written = JSON.parse(await readFile(join(dir, 'manifest.json'), 'utf8')) as Manifest;
    expect(written).toEqual(manifest);
  });

  it('leaves out broken exams and reports why', async () => {
    const dir = await copyDemo();
    const file = join(dir, 'exams/matematika-kozep-2026-majus-minta/exam.json');
    const exam = JSON.parse(await readFile(file, 'utf8')) as Exam;
    exam.maxPoints = 50;
    await writeFile(file, JSON.stringify(exam));

    const { manifest, problems } = await buildPack(dir);
    expect(manifest.exams.map((e) => e.id)).not.toContain(exam.id);
    expect(problems[0]).toMatch(/matematika-kozep-2026-majus-minta: \d+ error/);

    const result = await review(dir);
    expect(result.failed).toBe(1);
    const report = await readFile(join(dir, 'reports', `${exam.id}.md`), 'utf8');
    expect(report).toContain("Parts add up to 34, but the exam's maxPoints is 50.");
    expect(report).toContain('| Every task has an answer key or criteria | yes |');
    const overview = await readFile(join(dir, 'reports', 'README.md'), 'utf8');
    expect(overview).toContain(
      '[magyar-kozep-2026-majus-minta](magyar-kozep-2026-majus-minta.md) | reviewed | 0 | 0',
    );
  });
});

describe('content:extract', () => {
  /** A stand-in for the Anthropic client that replays canned responses. */
  function fakeClient(responses: string[]) {
    const calls: Anthropic.Beta.MessageCreateParams[] = [];
    const client = {
      beta: {
        messages: {
          stream(params: Anthropic.Beta.MessageCreateParams) {
            calls.push(structuredClone(params));
            const text = responses.shift() ?? '';
            return {
              finalMessage: async () => ({
                content: [{ type: 'text', text }],
                stop_reason: 'end_turn',
                usage: { input_tokens: 1, output_tokens: 1, cache_read_input_tokens: 0 },
              }),
            };
          },
        },
      },
    } as unknown as Anthropic;
    return { client, calls };
  }

  async function setup() {
    const dir = await copyDemo();
    const id = 'matematika-kozep-2024-majus';
    const sourceDir = join(dir, 'exams', id, 'source');
    await cp(
      join(DEMO, 'exams/matematika-kozep-2026-majus-minta/feladatlap.pdf'),
      join(sourceDir, 'fl.pdf'),
    );
    await cp(
      join(DEMO, 'exams/matematika-kozep-2026-majus-minta/feladatlap.pdf'),
      join(sourceDir, 'ut.pdf'),
    );
    await writeFile(
      join(sourceDir, 'sources.json'),
      JSON.stringify({
        examId: id,
        files: [
          {
            kind: 'exam',
            suffix: 'fl',
            file: 'fl.pdf',
            officialUrl: 'https://example.org/fl.pdf',
            sha256: 'a'.repeat(64),
            bytes: 1,
            downloadedAt: '',
          },
          {
            kind: 'key',
            suffix: 'ut',
            file: 'ut.pdf',
            officialUrl: 'https://example.org/ut.pdf',
            sha256: 'b'.repeat(64),
            bytes: 1,
            downloadedAt: '',
          },
        ],
      }),
    );
    const demo = JSON.parse(
      await readFile(join(DEMO, 'exams/matematika-kozep-2026-majus-minta/exam.json'), 'utf8'),
    ) as Partial<Exam>;
    const { schemaVersion: _v, id: _i, source: _s, review: _r, sample: _sample, ...body } = demo;
    return { dir, id, body };
  }

  it('fills in identity and sources and returns a draft', async () => {
    const { dir, id, body } = await setup();
    const { client, calls } = fakeClient([`Here you go:\n${JSON.stringify(body)}`]);
    const { exam, issues } = await extract({ contentDir: dir, examId: id, client, log: () => {} });
    expect(issues).toEqual([]);
    expect(exam).toMatchObject({
      id,
      year: 2024,
      session: 'majus',
      review: { status: 'draft', extractedBy: 'claude-opus-5-5' },
      source: { examPdf: { file: 'source/fl.pdf', sha256: 'a'.repeat(64) } },
    });
    expect(calls).toHaveLength(1);
    const content = calls[0]!.messages[0]!.content as Anthropic.Beta.BetaContentBlockParam[];
    expect(content.filter((block) => block.type === 'document')).toHaveLength(2);
    expect(calls[0]).toMatchObject({
      model: 'claude-opus-5-5',
      thinking: { type: 'adaptive' },
      fallbacks: 'default',
    });
  });

  it('feeds validation errors back and accepts the repaired JSON', async () => {
    const { dir, id, body } = await setup();
    const broken = { ...body, maxPoints: 99 };
    const { client, calls } = fakeClient([JSON.stringify(broken), JSON.stringify(body)]);
    const { exam, issues } = await extract({ contentDir: dir, examId: id, client, log: () => {} });
    expect(issues).toEqual([]);
    expect(exam?.maxPoints).toBe(34);
    expect(calls).toHaveLength(2);
    const feedback = calls[1]!.messages.at(-1)!.content as string;
    expect(feedback).toContain("Parts add up to 34, but the exam's maxPoints is 99.");
  });

  it('gives up after the repair budget and returns the remaining issues', async () => {
    const { dir, id } = await setup();
    const { client, calls } = fakeClient(['not json', 'still not json', '{"broken": true}']);
    const { issues } = await extract({ contentDir: dir, examId: id, client, log: () => {} });
    expect(calls).toHaveLength(3);
    expect(issues.length).toBeGreaterThan(0);
  });
});
