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

Each task has `id`, `number` (as printed), `type` (`short_answer`, `multiple_choice`, `matching`, `true_false`, `calculation`, `essay`, `long_writing`), Hungarian `text`, `maxPoints`, optional `sourceRefs`, `topics`, `hints`, `explanation` and `wordLimit`. `hints` appear in the help panel (practice mode only) before the marking-scheme steps and the solution; write them as nudges, not answers (see [help-and-ai.md](help-and-ai.md)).

`fields` are the inputs: `text`, `number`, `textarea`, `choice` (one option), `multi` (several options), `work` (maths working area) and `essay`. Field ids are unique within the exam (`<taskId>-f1`).

`pdfRect` places a field on the paper: `page` is 1-based; `x`, `y`, `w`, `h` are **fractions of the page width/height, measured from the top-left corner**, so they work at any zoom level.

More layout options for official papers:

- `group` on a task joins the sub-tasks of one numbered task (`"16"` for 16. a)–c)). Choices can name groups instead of task ids.
- `options[].pdfRect` marks where an option is printed (the number to circle). When every option has one, PDF mode lets the student circle the printed option instead of showing a dropdown.
- `continuationRects` on a field lists further areas of the same answer on later pages (an essay that continues on the next page).
- `choices[].unitLabels` names each choosable unit ("13. és 16. feladat"); `choices[].unitRects` marks where the choice is recorded on the paper (the X cells). When alternative units share one answer area, PDF mode shows the choice there until the student picks.
- `timeLimitMinutes` can sit on the exam instead of the parts when all parts share one time limit (history: 180 minutes).

### Rich text

`text`, `explanation` and source `text` use a small subset of Markdown: paragraphs separated by a blank line, `**bold**`, `*italic*`, `__underline__` (passages the paper underlines), lines starting with `- ` for lists, and LaTeX between single dollar signs for maths (`$x^2 + 1$`). Content is always rendered as text, never as raw HTML.

### Scoring

`scoring` combines three kinds of points; together they must add up to the task's `maxPoints`:

| Kind       | Scored by                               | Use for                                                               |
| ---------- | --------------------------------------- | --------------------------------------------------------------------- |
| `rules`    | the app, automatically                  | answers that can be checked mechanically                              |
| `steps`    | the app when `auto` is set, else review | marking-scheme steps such as "correct method" or intermediate results |
| `criteria` | review (rubric, optional `levels`)      | essays and long writing                                               |

Essay and long-writing tasks can carry `examples`: sample answers written for the app (never real student work or the marking scheme's text), each with `scores` for every criterion id, optional `notes` per criterion and a `comment`. Students score a sample themselves and then compare (see [practice.md](practice.md)). `npm run content:review` checks that every criterion is scored and no score exceeds its maximum.

The scoring engine (`src/domain/scoring`) applies these rules when the student hands in. Mark everything the app can decide on its own; only what needs a reader (essays, a drawn graph) should be left for review. Students see review items on the results page and rate them against the marking scheme.

Rule answer kinds:

- `text`: any of `accepted` matches after normalization. By default comparison ignores case and collapses whitespace; `normalize` can also ignore diacritics, punctuation or all spaces.
- `number`: any of `accepted` within `tolerance` (absolute). Hungarian decimal commas, fractions (`5/9`) and percentages are accepted, and a typographic minus (`−`) counts as a minus sign.
- `choice`: the selected option values must equal `correct` (one value for single choice).
- `set`: the rule's fields must each match a **different** item; every item lists its accepted variants. With `order: "any"` there may be more items than fields ("name two reformers" with six acceptable names). With `order: "fixed"`, field _n_ must match item _n_.
- `matching`: each field id must hold the given option value (also used for true/false lists). Without `partial`, all pairs must be right (e.g. a whole chronological order for 1 point).
- `elements`: one field holds a list (`1; 2; 3`, `1, 2, 3` or with braces) that must contain exactly these elements in any order (sets, common divisors).

Automatic steps (`steps[].auto`) cover open answers that the marking scheme accepts "in other wording" and maths working:

```jsonc
{
  "id": "s1",
  "points": 1,
  "description": "A török elleni harcok (elhanyagolása).",
  "auto": { "fieldIds": ["3-a"], "alternatives": [[["török", "oszmán"]]] },
}
```

- `alternatives` lists acceptable answers; each is a list of keyword groups, and an alternative matches when every group has a keyword in the answer. Keywords match word beginnings, ignoring case, accents and punctuation (`török` matches `törökök`). Number keywords match by value at the precision written (`15,4` accepts 15,39).
- The fields in `fieldIds` are read together (a name in one cell and its role in the next). With `allFields`, each field must match on its own with a different alternative ("two examples").
- Steps sharing a `distinct` key must be met by different alternatives ("two different reasons").
- `requireQuotes` asks for the answer in quotation marks ("idézzen").
- When a non-empty answer matches nothing, the results page says so and lets the student accept it, since the wording may still be right.

`deductions` on the exam lists paper-wide deductions rated after hand-in (Hungarian spelling, up to −8, and handwriting, up to −2). Grades use the exam's `gradeBands`, or the középszint thresholds (25, 40, 60, 80%) by default.

`partial` gives partial credit for multi-part rules: `perItem` points per correct item, or a `table` of thresholds (`{ "correct": 2, "points": 1 }` = 2 correct answers earn 1 point). `penalizeWrong` subtracts one item's credit for each wrong extra choice in multi-select answers. `errorsTable` scores by the number of errors (missing plus wrong items); each row gives the points for up to that many errors: `[{ "errors": 0, "points": 3 }, { "errors": 1, "points": 2 }, { "errors": 3, "points": 1 }]`. Points never go below zero.

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

- In the app, each task has a flag button (exam page and results page) and each exam a "Hibát találtál?" link. They open a pre-filled email to the manifest's `reportEmail`, or to the maintainer (kralik.aladar.gergely@gmail.com) when the pack names none.
- Anyone can fix the demo pack with a pull request against `tools/demo/demoExams.ts` (then run `npm run demo:build`).
- Fixes to official exams go to the content repository: edit `exam.json`, run `content:review`, and open a pull request that cites the page of the marking scheme. While that repository is private, only invited reviewers can do this.

## Adding a subject or level

1. Add it to `pack.json` in the content repository (`subjects` or `levels`). Use an icon from `sigma`, `landmark`, `book-open`, `book`.
2. For the crawler, add its Oktatási Hivatal file code to `SUBJECT_CODES` or `LEVEL_CODES` in [`tools/content.config.ts`](../tools/content.config.ts).
3. Optionally add an accent color token (`--c-subject-<id>`) in `src/design/tokens.css`, with a contrast test.

No UI code changes are needed: subjects, levels and exams come from the manifest.
