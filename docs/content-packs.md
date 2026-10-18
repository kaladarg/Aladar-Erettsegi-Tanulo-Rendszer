# Content packs

The app never hard-codes exams. It loads a **content pack** from a base URL:

```
<base>/manifest.json                  subjects, levels, list of exams
<base>/exams/<exam-id>/exam.json      one paper: parts, tasks, answer key, field positions
<base>/exams/<exam-id>/<file>.pdf     optional: the paper itself
```

The base URL is, in order of priority: the student's setting (Settings → Tartalomforrás), `VITE_CONTENT_BASE_URL` at build time, or the bundled demo pack (`public/demo-pack`).

The JSON Schemas in [`schemas/`](../schemas) are the source of truth. `npm run schemas` regenerates the TypeScript types (`src/content/schema.types.ts`) and the validators the app and tools use (`src/content/schema.validators.js`); CI fails if they are out of date. Beyond the schema, [`src/content/checks.ts`](../src/content/checks.ts) checks consistency (point sums, references, unique ids). The app refuses exams that fail either check.

## Packs that exist

| Pack                | Where                                                                                                                             | Contents                                                        | Public                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Demo                | `public/demo-pack` in this repository, built by `npm run demo:build` from [`tools/demo/demoExams.ts`](../tools/demo/demoExams.ts) | Three self-written sample papers with generated PDFs            | yes                                                                              |
| Official középszint | private repository `erettsegi-gyakorlo-content`                                                                                   | Oktatási Hivatal papers, marking schemes, extracted `exam.json` | **no**, until reuse is cleared (see [CONTENT_LICENSE.md](../CONTENT_LICENSE.md)) |

## `exam.json` in short

```jsonc
{
  "schemaVersion": 1,
  "id": "matematika-kozep-2024-majus",          // <subject>-<level>-<year>-<session>
  "subject": "matematika", "level": "kozep", "year": 2024, "session": "majus",
  "format": "2024",                              // exam requirements the paper follows
  "title": "Matematika középszint, 2024. május",
  "maxPoints": 100,
  "source": { "examPdf": { "file": "source/mat_24maj_fl.pdf", "officialUrl": "https://…", "sha256": "…" }, "keyPdf": { … } },
  "sources": [ { "id": "src-1", "kind": "text", "title": "…", "text": "…", "pdfRects": [ … ] } ],
  "parts": [ { "id": "I", "title": "I. rész", "timeLimitMinutes": 45, "maxPoints": 30,
               "choices": [ { "pick": 2, "taskIds": ["16", "17", "18"] } ],
               "tasks": [ … ] } ],
  "review": { "status": "draft" | "reviewed", "extractedBy": "…", "reviewedBy": ["…"] }
}
```

### Tasks, fields and coordinates

Each task has `id`, `number` (as printed), `type` (`short_answer`, `multiple_choice`, `matching`, `true_false`, `calculation`, `essay`, `long_writing`), Hungarian `text`, `maxPoints`, optional `sourceRefs`, `topics`, `hints`, `explanation` and `wordLimit`.

`fields` are the inputs: `text`, `number`, `textarea`, `choice` (one option), `multi` (several options), `work` (maths working area) and `essay`. Field ids are unique within the exam (`<taskId>-f1`).

`pdfRect` places a field on the paper: `page` is 1-based; `x`, `y`, `w`, `h` are **fractions of the page width/height, measured from the top-left corner**, so they work at any zoom level.

### Rich text

`text`, `explanation` and source `text` use a small subset of Markdown: paragraphs separated by a blank line, `**bold**`, `*italic*`, lines starting with `- ` for lists, and LaTeX between single dollar signs for maths (`$x^2 + 1$`). Content is always rendered as text, never as raw HTML.

### Scoring

`scoring` combines three kinds of points; together they must add up to the task's `maxPoints`:

| Kind       | Scored by                               | Use for                                                               |
| ---------- | --------------------------------------- | --------------------------------------------------------------------- |
| `rules`    | the app, automatically                  | answers that can be checked mechanically                              |
| `steps`    | the student (checklist)                 | marking-scheme steps such as "correct method" or intermediate results |
| `criteria` | the student (rubric, optional `levels`) | essays and long writing                                               |

The scoring engine that applies these rules ships in phase 4; the semantics below are its specification.

Rule answer kinds:

- `text`: any of `accepted` matches after normalization. By default comparison ignores case and collapses whitespace; `normalize` can also ignore diacritics, punctuation or all spaces.
- `number`: any of `accepted` within `tolerance` (absolute). Hungarian decimal commas are accepted.
- `choice`: the selected option values must equal `correct` (one value for single choice).
- `set`: the rule's fields must each match a **different** item; every item lists its accepted variants. With `order: "any"` there may be more items than fields ("name two reformers" with six acceptable names). With `order: "fixed"`, field _n_ must match item _n_.
- `matching`: each field id must hold the given option value (also used for true/false lists).

`partial` gives partial credit for multi-part rules: `perItem` points per correct item, or a `table` of thresholds (`{ "correct": 2, "points": 1 }` = 2 correct answers earn 1 point). `penalizeWrong` subtracts one item's credit for each wrong extra choice in multi-select answers. Points never go below zero.

## Working with the private official pack

You need access to the private content repository. Clone it next to this repository:

```
parent/
  Aladar-Erettsegi-Tanulo-Rendszer/   (this repository)
  erettsegi-gyakorlo-content/         (private)
```

Then, from this repository:

```bash
npm run content:init                 # first time only: scaffold an empty content repository
npm run content:crawl -- --out ../erettsegi-gyakorlo-content --from 2024
npm run content:extract -- --dir ../erettsegi-gyakorlo-content --exam matematika-kozep-2024-majus
npm run content:review -- --dir ../erettsegi-gyakorlo-content
npm run content:pack -- --dir ../erettsegi-gyakorlo-content
npm run dev:content                  # the app loads ../erettsegi-gyakorlo-content
```

- **Crawl** downloads papers (`fl`), marking schemes (`ut`) and attachments from the Oktatási Hivatal archive. It reads robots.txt, waits two seconds between requests, retries politely and caches downloads in `tools/.cache`. It writes `exams/<id>/source/` plus `sources.json` with the official URL and SHA-256 hash of every file. The oktatas.hu servers may refuse connections from cloud machines; run it from a normal home or school connection.
- **Extract** sends the PDFs to Claude (`claude-opus-5-5`) with the schema and conventions in [`tools/extract.ts`](../tools/extract.ts), validates the answer, and sends any errors back for up to two repair rounds. It needs your own Anthropic credentials (`ANTHROPIC_API_KEY` or `ant auth login`) and costs API credits. The result is always `review.status: "draft"`; it never overwrites an existing `exam.json` without `--force`.
- **Review** writes `reports/<id>.md`: point totals against the marking scheme, tasks without an answer key, fields without coordinates, and every schema or consistency error.
- **Pack** writes `manifest.json`, leaving out exams with errors.
- `dev:content` serves the content repository at `/content-local/` in the dev server only. It is never copied into a build, so private content cannot reach the public site.

### Reviewing an extracted exam

1. Open `reports/<id>.md` and fix every error in `exam.json`.
2. Compare each task with the marking scheme: points, accepted answers, partial credit, steps and criteria.
3. Check field positions on the PDF (an on-screen position editor arrives with the PDF mode in phase 3).
4. Set `review.status` to `"reviewed"`, add your name to `reviewedBy`, run `content:review` and `content:pack`, and commit.

## Reporting and correcting mistakes

- In the app, each task has a flag button and each exam a "Hibát találtál?" link. They open a pre-filled [data correction issue](../.github/ISSUE_TEMPLATE/data_correction.yml) in the repository named by the manifest's `repositoryUrl` (the code repository for the demo pack).
- Anyone can fix the demo pack with a pull request against `tools/demo/demoExams.ts` (then run `npm run demo:build`).
- Fixes to official exams go to the content repository: edit `exam.json`, run `content:review`, and open a pull request that cites the page of the marking scheme. While that repository is private, only invited reviewers can do this.

## Adding a subject or level

1. Add it to `pack.json` in the content repository (`subjects` or `levels`). Use an icon from `sigma`, `landmark`, `book-open`, `book`.
2. For the crawler, add its Oktatási Hivatal file code to `SUBJECT_CODES` or `LEVEL_CODES` in [`tools/content.config.ts`](../tools/content.config.ts).
3. Optionally add an accent color token (`--c-subject-<id>`) in `src/design/tokens.css`, with a contrast test.

No UI code changes are needed: subjects, levels and exams come from the manifest.
