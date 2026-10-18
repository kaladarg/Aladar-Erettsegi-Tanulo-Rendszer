/**
 * LLM-assisted extraction of exam.json from the official PDFs of one exam.
 * Runs at build time only, with the maintainer's own Anthropic credentials
 * (ANTHROPIC_API_KEY or an `ant auth login` profile). The output is always a
 * draft: a person must check it against the marking scheme before it is
 * marked "reviewed".
 *
 *   npm run content:extract -- --dir ../erettsegi-gyakorlo-content --exam matematika-kozep-2024-majus
 *
 * Options: --model <id> (default claude-opus-5-5), --force (overwrite an existing exam.json).
 */
import { access, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import type { Exam } from '../src/content/schema.types';
import { parseArgs, stringArg } from './lib/args';
import { inspectExamJson } from './lib/content';
import { isMain } from './lib/isMain';
import type { SourcesFile } from './crawl';

const DEFAULT_MODEL = 'claude-opus-5-5';
const MAX_REPAIRS = 2;

const CONVENTIONS = `
You convert an official Hungarian érettségi exam paper (feladatlap) and its marking scheme
(javítási-értékelési útmutató) into one JSON object that follows the JSON Schema below.

Rules:
- Copy all task wording, options and source texts verbatim in Hungarian. Do not translate or summarise.
- Rich text fields (text, explanation, source text): paragraphs separated by a blank line,
  **bold**, *italic*, lines starting with "- " for lists, LaTeX between single dollar signs for maths ($x^2+1$).
- Ids: parts "I", "II", "II-A", "II-B"; tasks use the printed number without punctuation, with a lowercase
  letter for sub-tasks ("1", "13a", "13b"); fields "<taskId>-f1", "<taskId>-f2"…; rules "r1"…, steps "s1"…,
  criteria "c1"…; sources "src-1"….
- One task per separately scored item in the marking scheme. maxPoints must match the marking scheme exactly.
- Scoring:
  - Answers that can be checked mechanically become "rules" with every accepted variant the marking scheme
    allows (synonyms, spellings, equivalent numeric forms). Use "partial" when the scheme gives partial credit
    (e.g. "2 helyes válasz 1 pont" becomes a table row {"correct": 2, "points": 1}).
  - For calculations, the final result is a rule worth the points the scheme gives for it; every other
    scheme item (method, intermediate results) becomes a "step" with the scheme's own wording.
  - Essays and long writing get "criteria" (and "levels" when the scheme describes score bands).
  - The rules, steps and criteria of a task must add up exactly to its maxPoints.
- "explanation": 1–4 sentences in Hungarian based on the marking scheme (why the answer is correct).
- "topics": 1–3 short Hungarian topic tags per task (e.g. "másodfokú egyenlet", "reformkor").
- "fields": one per answer box. kind "work" for a maths working area, "essay" for long writing.
  "pdfRect" is your best estimate of the answer box on the exam paper: page (1-based, in the exam paper PDF)
  and x, y, w, h as fractions of the page width/height measured from the top-left corner.
- Parts list their official time limit and points. Use "choices" when students choose (e.g. 2 of 3 tasks).
- Leave out "schemaVersion", "id", "source" and "review"; they are filled in automatically.
Respond with the JSON object only, no commentary and no code fences.
`;

function parseJsonObject(text: string): unknown {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end <= start) throw new Error('The response contains no JSON object.');
  return JSON.parse(text.slice(start, end + 1));
}

function textOf(message: Anthropic.Beta.BetaMessage): string {
  return message.content
    .filter((block): block is Anthropic.Beta.BetaTextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('');
}

export interface ExtractOptions {
  contentDir: string;
  examId: string;
  model?: string;
  client?: Anthropic;
  log?: (message: string) => void;
}

export async function extract({
  contentDir,
  examId,
  model = DEFAULT_MODEL,
  client = new Anthropic(),
  log = console.log,
}: ExtractOptions): Promise<{ exam: Exam | null; issues: string[] }> {
  const examDir = join(contentDir, 'exams', examId);
  const sources = JSON.parse(
    await readFile(join(examDir, 'source', 'sources.json'), 'utf8'),
  ) as SourcesFile;
  const pdfs = sources.files.filter((file) => file.file.endsWith('.pdf'));
  const examFile = pdfs.find((file) => file.kind === 'exam');
  const keyFile = pdfs.find((file) => file.kind === 'key');
  if (!examFile || !keyFile)
    throw new Error(`${examId}: sources.json needs an exam paper and a marking scheme.`);

  const [subject, level, year, session] = (() => {
    const match = /^(.+)-([a-z]+)-(\d{4})-(majus|oktober)$/.exec(examId);
    if (!match) throw new Error(`Unexpected exam id ${examId}`);
    return [match[1]!, match[2]!, Number(match[3]), match[4] as Exam['session']] as const;
  })();

  const ordered = [examFile, keyFile, ...pdfs.filter((f) => f !== examFile && f !== keyFile)];
  const documents: Anthropic.Beta.BetaContentBlockParam[] = [];
  for (const file of ordered) {
    const data = (await readFile(join(examDir, 'source', file.file))).toString('base64');
    const title =
      file === examFile
        ? 'Feladatlap (exam paper)'
        : file === keyFile
          ? 'Javítási-értékelési útmutató (marking scheme)'
          : `Melléklet: ${file.file}`;
    documents.push({
      type: 'document',
      title,
      source: { type: 'base64', media_type: 'application/pdf', data },
    });
  }

  const schema = await readFile(
    resolve(import.meta.dirname, '../schemas/exam.schema.json'),
    'utf8',
  );
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    {
      role: 'user',
      content: [
        ...documents,
        {
          type: 'text',
          text: `Exam: subject=${subject}, level=${level}, year=${year}, session=${session}.\nExtract the exam JSON now.`,
        },
      ],
    },
  ];

  const complete = (data: Record<string, unknown>): Exam =>
    ({
      schemaVersion: 1,
      ...data,
      id: examId,
      subject,
      level,
      year,
      session,
      source: {
        publisher: 'Oktatási Hivatal',
        examPdf: {
          file: `source/${examFile.file}`,
          officialUrl: examFile.officialUrl,
          sha256: examFile.sha256,
        },
        keyPdf: {
          file: `source/${keyFile.file}`,
          officialUrl: keyFile.officialUrl,
          sha256: keyFile.sha256,
        },
        attachments: ordered.slice(2).map((f) => ({
          file: `source/${f.file}`,
          officialUrl: f.officialUrl,
          sha256: f.sha256,
          label: f.suffix,
        })),
      },
      review: { status: 'draft', extractedBy: model },
    }) as Exam;

  let lastIssues: string[] = [];
  for (let round = 0; round <= MAX_REPAIRS; round++) {
    log(round === 0 ? `Extracting ${examId} with ${model}…` : `Repair round ${round}…`);
    const stream = client.beta.messages.stream({
      model,
      max_tokens: 128_000,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'high' },
      // Re-run on a recommended substitute model if a safety classifier declines.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: [
        {
          type: 'text',
          text: `${CONVENTIONS}\nJSON Schema:\n${schema}`,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages,
    });
    const message = await stream.finalMessage();
    if (message.stop_reason === 'refusal')
      throw new Error(`The model declined: ${message.stop_details?.explanation ?? 'no details'}`);
    if (message.stop_reason === 'max_tokens')
      throw new Error('The response hit max_tokens; split the exam or raise the limit.');
    log(
      `  tokens: ${message.usage.input_tokens} in (+${message.usage.cache_read_input_tokens ?? 0} cached), ${message.usage.output_tokens} out`,
    );

    const text = textOf(message);
    let candidate: Exam | null = null;
    try {
      candidate = complete(parseJsonObject(text) as Record<string, unknown>);
      const inspected = inspectExamJson(JSON.stringify(candidate));
      lastIssues = inspected.issues
        .filter((i) => i.level === 'error')
        .map((i) => `${i.path}: ${i.message}`);
    } catch (error) {
      lastIssues = [(error as Error).message];
    }
    if (candidate && lastIssues.length === 0) return { exam: candidate, issues: [] };
    if (round === MAX_REPAIRS) return { exam: candidate, issues: lastIssues };

    messages.push({ role: 'assistant', content: message.content });
    messages.push({
      role: 'user',
      content: `The JSON has these errors:\n${lastIssues
        .slice(0, 80)
        .map((i) => `- ${i}`)
        .join('\n')}\n\nReturn the complete corrected JSON object.`,
    });
  }
  return { exam: null, issues: lastIssues };
}

if (isMain(import.meta.url)) {
  const args = parseArgs(process.argv.slice(2));
  const contentDir = resolve(stringArg(args, 'dir', '../erettsegi-gyakorlo-content'));
  const examId = stringArg(args, 'exam');
  const target = join(contentDir, 'exams', examId, 'exam.json');
  if (
    !args.force &&
    (await access(target).then(
      () => true,
      () => false,
    ))
  ) {
    console.error(`${target} exists. Use --force to overwrite (reviewed data would be lost).`);
    process.exit(1);
  }
  try {
    const { exam, issues } = await extract({
      contentDir,
      examId,
      model: typeof args.model === 'string' ? args.model : undefined,
    });
    if (exam) {
      await writeFile(target, `${JSON.stringify(exam, null, 2)}\n`);
      console.log(`Wrote ${target} (draft).`);
    }
    if (issues.length) {
      console.error(
        `Remaining issues (fix by hand, then run content:review):\n  ${issues.join('\n  ')}`,
      );
      process.exit(1);
    }
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError)
      console.error(
        'No valid Anthropic credentials. Set ANTHROPIC_API_KEY or run "ant auth login".',
      );
    else if (error instanceof Anthropic.RateLimitError)
      console.error('Rate limited by the API; try again later.');
    else if (error instanceof Anthropic.APIError)
      console.error(`API error ${error.status}: ${error.message}`);
    else console.error((error as Error).message);
    process.exit(1);
  }
}
