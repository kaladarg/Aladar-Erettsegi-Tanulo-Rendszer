# Practice features

Everything below runs in the browser and stores data only in IndexedDB. All of it is included in the backup file (Settings → Adatmentés).

## Practice rounds (`/gyakorlas/kor/:id`)

A round is a list of task references (`examId`, `taskId`) in `drillSessions`. Each task gets its own pseudo attempt id `drill-<round>-<index>`, so the shared answer store, autosave, help panel and scoring work unchanged and field ids of different papers never collide. "Ellenőrzés" scores the task with `scoreTask`; steps that need the student's own marking are marked in place with the results-page controls. The first check of each task is logged in `drillEvents` for the mistakes review. Only the 20 newest finished rounds are kept; their history stays in `drillEvents`.

Essays and long writing are never drilled: they need a reader and cannot be checked at once.

## Practice by topic (`/gyakorlas/temakorok`)

`topicIndex` (in `src/domain/practice/topics.ts`) collects every topic tag of a subject's papers, merging spellings that differ only in case or spacing. A round takes up to 10 random tasks of the topic from all papers. Weak and strong labels come from the statistics (`topicStats`).

## Hibáim: spaced review (`/gyakorlas/hibaim`)

`buildCards` replays all events (handed-in papers and practice checks) in time order:

- a task with lost points enters the queue (box 0) and is due the next day;
- each correct review moves it on: due again after 3, then 7 days;
- after the third correct review in a row it leaves the queue;
- any new mistake sends it back to 1 day.

Empty and still-pending tasks are skipped, so a half-finished paper does not flood the queue. Because the schedule is derived from events, there is no state to migrate or repair, and older attempts are picked up automatically.

Why 1, 3, 7 days: spaced practice and practice testing are the two learning techniques rated most useful in the review by [Dunlosky et al. (2013)](https://doi.org/10.1177/1529100612453266); expanding gaps follow [Cepeda et al. (2006)](https://doi.org/10.1037/0033-2909.132.3.354). The short gaps suit the weeks before the exam.

## Study plan and countdown (`/gyakorlas/terv`)

Students enter their written exam dates (`settings.examDates`; dates change every year, so the app does not ship a calendar). Phases by days left: build (> 56), practise (15–56), final (≤ 14), exam day, done. Each week (from Monday) lists:

- due reviews;
- one full paper in practice mode (final phase: one timed exam), the newest paper not yet tried;
- up to two weak topics (below 60%), or "explore a topic" when there is no data yet;
- oral rehearsal for Hungarian and history outside the build phase.

Items tick themselves off from the week's activity. The home page shows the countdown and the number of due reviews.

## Oral exam preparation (`/gyakorlas/szobeli`)

- Built-in topic areas for Hungarian and history (`src/content/oralTopics.ts`) are drafts based on the published középszint requirements. Schools issue their own tétel lists; students paste them as their own topics (one per line).
- Each topic has an outline (autosaved, prefilled with a template), a preparation timer and an answer timer (defaults 30 and 15 minutes, editable, accurate in background tabs), and a voice recorder (MediaRecorder).
- Recordings stay on the device and are exported in the backup as base64 data URLs; restoring turns them back into blobs. The microphone is requested only when the student presses record.
- "Felmondtam" counts a rehearsal and marks the day as active.

## Drawing on the paper

- PDF mode has a drawing toolbar: Kitöltés (drawing off, fields clickable), pen with four colours, marker, eraser (removes whole strokes), undo and clear all.
- Form mode has a squared drawing pad under each task (except essays).
- Strokes are stored as answers under `__ink:p<page>` and `__ink:t<taskId>` with coordinates as fractions of the surface, so they fit any zoom and screen. Keys starting with `__` are ignored by scoring.
- Once a stylus is used, fingers scroll and only the stylus draws (simple palm rejection).
- The results page shows the pad drawing with each task and the drawn PDF pages at the end.
