# Statistics, dashboard and sharing

Everything is computed in the browser from IndexedDB; nothing is sent anywhere.

## Stored data

- When an attempt is handed in (and again whenever review marks change on the results page), `summarizeResult` (`src/domain/stats/summary.ts`) stores on `attempts.result`: the totals, the subject, the grade once marking is complete, and one `TaskSummary` per counted task (number, type, topics, points, pending points, status, whether the steps or solution were opened in the help panel). Statistics therefore need no paper to be loaded.
- Attempts handed in before this existed are scored again once when the statistics page or the home page opens (`useBackfillSummaries`); papers that no longer load keep their totals only.
- Database version 2 adds `activity` (one row per local day with practice: an answer saved or a paper handed in). On upgrade it is filled from existing attempt and answer timestamps. It is part of the backup file; older backups without it still import.

## Calculations (`src/domain/stats/stats.ts`)

- **Progress**: every submission as a percentage, oldest first. Partial results (marking unfinished) are drawn as hollow points and marked in the table.
- **Topics, mistake types, task types** use the newest attempt of each paper, so a retake replaces the old result. Tasks still waiting for review are left out.
  - Weak topics: below 60%, weakest first, then by points at stake. Strong topics: 80% or above.
  - Mistake types: correct, partial, wrong, left blank, solved with help. A tip appears when blank, partial or wrong answers make up at least 20% of tasks (and at least 2).
- **Streak**: consecutive practice days up to today; if today has no practice yet, the streak up to yesterday still counts. Best streak and the last 7 days are shown.
- **Recommendations** (home page): finish marking, the two weakest topics, then one paper not yet attempted per chosen subject (newest official paper before samples). Without chosen subjects, all subjects count.

## Screens

- **Home** (`src/features/home/Dashboard.tsx`): unfinished papers with a continue button, recommendations, streak.
- **Statisztika** (`/statisztika`, `src/features/stats/`): subject filter, summary figures, papers waiting for marking, progress chart (SVG, with the same data as a table), weak topics with links to practise the paper again and to search the topic on free learning sites, strong topics, mistake types and results per task type.

## Sharing (results page)

`src/features/results/share/` draws a 1080×1080 PNG card on a canvas: paper, percentage, points, estimated grade (or "részeredmény" while marking is unfinished), mode and date. No name or other personal data. The student can:

- share it with the Web Share API (shown only where the browser can share files, mostly phones);
- download the image;
- copy a short text with a link to the paper's page (no attempt data in the link).
