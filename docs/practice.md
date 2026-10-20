# Practice features

Everything below runs in the browser and stores data only in IndexedDB. All of it is included in the backup file (Settings → Adatmentés).

## Practice rounds (`/gyakorlas/kor/:id`)

A round is a list of task references (`examId`, `taskId`) in `drillSessions`. Each task gets its own pseudo attempt id `drill-<round>-<index>`, so the shared answer store, autosave, help panel and scoring work unchanged and field ids of different papers never collide. "Ellenőrzés" scores the task with `scoreTask`; steps that need the student's own marking are marked in place with the results-page controls. The first check of each task is logged in `drillEvents` for the mistakes review. Only the 20 newest finished rounds are kept; their history stays in `drillEvents`.

Essays and long writing are never drilled: they need a reader and cannot be checked at once.

## Practice by topic (`/gyakorlas/temakorok`)

`topicIndex` (in `src/domain/practice/topics.ts`) collects every topic tag of a subject's papers, merging spellings that differ only in case or spacing. A round takes up to 10 random tasks of the topic from all papers. Weak and strong labels come from the statistics (`topicStats`).

### Mixed rounds

Students can tick several topics (or none, meaning all) for a mixed round. `mixedRound` gives weak topics (below 60%) up to half of the round, spreads it over many topics (at most two tasks per topic while others are available) and orders it so neighbouring tasks come from different topics. Interleaving helps students learn to choose the method, not only apply it: in a maths study, mixed practice beat blocked practice on a delayed test ([Rohrer & Taylor, 2007](https://doi.org/10.1007/s11251-007-9015-8)).

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

### Calendar export

The plan page downloads an iCalendar file (`erettsegi.ics`, RFC 5545): all-day events for each future exam with reminders a week and half a day before, a weekly planning reminder (day and time chosen by the student) and, optionally, a daily 15-minute review reminder, both repeating until the last exam. Event UIDs are stable, so importing a new file updates the old events in most calendar apps. Nothing is sent anywhere.

## Study cards (`/gyakorlas/kartyak`)

- History: four decks from the középszint history requirements: dates, concepts, people and places (`src/content/cards/historyCards.ts`, 292 cards).
- Literature (`?targy=magyar`): authors, works, periods and movements, and literary terms (`src/content/cards/literatureCards.ts`), filtered by Hungarian or world literature and by literary period.
- Both sets are drafts until a teacher checks them. They are drafts until a history teacher checks them; card ids are stable because progress is stored by id.
- Filters: Hungarian or world history, and period. Progress per deck: new, learning, learnt, due today.
- A session takes the due cards first, then up to 15 new ones. The student thinks of the answer, turns the card (space), and marks "Tudtam" (2) or "Nem tudtam" (1). A forgotten card comes back once at the end of the round.
- Schedule (`src/domain/cards/schedule.ts`): known cards move up a box and return after 1, 3, 7, then 21 days; a forgotten card goes back to the first box. Answers are stored in `cardEvents` and included in backups. Retrieval practice beats rereading for long-term retention ([Roediger & Karpicke, 2006](https://doi.org/10.1111/j.1467-9280.2006.01693.x)).
- Place cards show a marker on a map of Europe and the Near East, or of the Carpathian Basin. The map is generated by `npm run map:build` from [Natural Earth](https://www.naturalearthdata.com/) 1:50m data (public domain: land, borders, rivers, lakes) in a Mercator projection, and loaded only when a place card is shown.

## Teacher links (`/tanaroknak`, `/feladat?d=…`)

- A teacher picks up to 40 tasks from one subject's papers, adds a title and an optional note, and gets a link and a QR code. The whole assignment is encoded in the link (`src/domain/assignment/link.ts`, URL-safe base64 of a compact JSON), so there is no server and no account.
- The student's link opens a landing page listing the tasks (tasks missing from the student's content pack are skipped) and starts a practice round. An unfinished round of the same link is continued.
- At the end the student types their name and copies a result code (`EGY1.<assignment fingerprint>.<data>`): points, maximum and still-pending points per task. Answers are not included.
- The teacher pastes any number of codes (even inside other text) into the results box and gets a table per assignment, downloadable as CSV (semicolon separated, UTF-8 with BOM for Hungarian Excel). The codes are self-reported and not a proof of the result; the page says so.
- Links only work with papers the students' app has: on the public site, the demo papers.

## Example essays

Essay tasks can include sample answers with scores per criterion. On the results page (and after checking an essay in a practice round) students open "Gyakorold a pontozást mintamegoldásokon", score the sample with the official criteria, then compare: per-criterion differences, the reasons for the given points, and whether they tend to be too strict or too lenient. The demo essays have a strong and a middling sample each; the official papers in the private content repository have one middling sample per essay task. All samples are written for the app and are drafts until a teacher checks them.

## Exam aids (`/gyakorlas/segedeszkozok`)

A checklist for the exam day and, per subject, the aids permitted at the written exam, taken from the instructions printed on the official papers (2024–2026) with a short quote, plus links to the Oktatási Hivatal and the exam regulation. The aids themselves (formula tables, atlases, dictionaries) are publishers' books, so the app only lists them. Each exam overview links to its subject's list.

## Data safety

Progress lives only in the browser, which may clear it: Safari removes site data after 7 days without use unless the app is on the home screen ([WebKit](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)), and any browser may clear "best effort" storage when space runs low ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)).

- After two active days the app asks the browser for persistent storage (`navigator.storage.persist()`). Chrome and Edge answer silently, Firefox asks the user, Safari grants it to home-screen apps. Settings shows the status and a button to ask again.
- After three active days without a backup, and at most weekly, the home page asks for a backup: a file download, or on phones the share sheet (Google Drive, iCloud, mail). "Később" snoozes it for a week (`src/domain/backupReminder.ts`).
- On iPhone and iPad Safari outside the home screen, the same card explains how to add the app to the home screen.

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
