# Writing one study guide ("Tananyag") unit

You write ONE new unit file for the Érettségi Gyakorló app (a free Hungarian exam-prep PWA for 17-18 year olds).
Repository: /home/user/Aladar-Erettsegi-Tanulo-Rendszer. Work only in that checkout.

## Only touch your own file
Create exactly one file: `src/content/guide/units/<your-file>.ts` (name given in your task).
Do NOT edit any other file, do not run git, do not run prettier on other files. Other writers work in parallel.

## Read first
1. `src/content/guide/types.ts` (the data model; read every comment).
2. `src/content/guide/units/tortenelem-reformkor-1848.ts` (the approved model unit for history) and
   `src/content/guide/units/matematika-fuggvenyek.ts` (the approved model unit for maths, plots and formulas).
   Match their structure, depth, length and tone exactly. The user approved this format.
3. `src/content/guide/guide.test.ts` (the checks your unit must pass).

## Format rules
- `const unit: GuideUnit = {...}; export default unit;` with `order` as given in your task.
- 4 to 6 pages. Each page: `summary` ("Gyorsan", about 5 minutes), `details` ("Részletesen", the real lesson:
  causes, process, consequences, connections, worked examples in maths), `exam` ("A vizsgán": how the exam asks it,
  typical mistakes, a model answer outline or worked exam-style example). 3 to 5 quiz questions per page.
- Levels: pages are `level: 'kozep'` (középszint topic, also needed at emelt), `'emelt'` (emelt-only topic) or
  `'both'`. Put emelt-only extra material inside középszint pages as blocks/items/quiz with `emelt: true`.
  At least one emelt-only page per unit where the requirements have an emelt column. Every non-emelt page needs
  at least one non-emelt quiz question.
- Quiz: options unique, `answer` is the 0-based index; vary the position of the right answer (not always 1).
  Each explanation says why the answer is right.
- Language: Hungarian, addressed to the student informally (te), clear, accurate, exam-focused. Sentence case.
  Never use the em dash (—). Use the en dash (–) only in ranges like 1867–1918. Text markup: **bold**, *italic*,
  $LaTeX$ for maths, "- " lists inside text blocks are fine.
- Facts must be correct. When unsure of a detail, leave it out rather than guess. Dates as the official lists give them.
- `map` blocks: only places inside the Carpathian Basin (lat 44–50, lon 15–28), real coordinates. Optional.
- `plot` blocks: x/y ranges small and readable, functions return NaN where undefined.
- `topicMatch`: lowercase substrings of the task topic names used in the papers (lists below in topics-<subject>.txt,
  "count<TAB>topic"). Pick patterns that hit the right tasks and do NOT hit other eras/topics; use "=name" for an exact
  whole-topic match when a substring would be too broad (see the comment in types.ts).
- `cards` (optional): a flashcard filter, e.g. `{ subject: 'tortenelem', era: 'kozepkor' }` or with `deck`
  ('evszamok'|'fogalmak'|'szemelyek'|'topografia'); for magyar `{ subject: 'magyar', era: 'romantika' }` or deck
  'szerzok'|'muvek'|'korszakok'|'irodalmi-fogalmak'. History eras: okor, kozepkor, koraujkor, ujkor, jelenkor20.
- `sources`: 2 to 3 per page, Hungarian Wikipedia search links via the same `wiki()` helper as the model unit.
- Page ids: lowercase-hyphenated, globally unique, specific (e.g. 'tatarjaras-iv-bela', not 'esemenyek').

## History: official requirements
The official detailed requirements are page images `p-01.png` … `p-17.png` in this folder (Read them).
Each era has a table (Témák | Középszint | Emelt szint) and lists: FOGALMAK, SZEMÉLYEK, KRONOLÓGIA, TOPOGRÁFIA.
**Bold upright text = középszint, italic text = emelt only.**
- `requirement.kozep` / `requirement.emelt` on each page: copy the wording of the matching table cell.
- `unit.requirements`: copy from the era's lists ONLY the items that belong to your unit's topics, verbatim,
  split kozep (upright) / emelt (italic). Dates keep the official wording ("1222 az Aranybulla").
- `requirementSource`: say which era of the detailed requirements the lists come from (like the model).
Page map: 1–2 ókor (1.), 3–5 középkor (2.), 6–8 kora újkor (3.), 9–10 hosszú 19. század (4.),
11–13 két világháború kora (5.), 14–15 hidegháború/1945–1990 (6.), 16–17 jelenkor (7.).

## Maths and Hungarian
No official list is available here. Leave `requirements` out and write a `requirementSource` saying the topic follows
the középszint and emelt szint érettségi requirements and has to be checked against the official document.
Fill `requirement.kozep`/`emelt` with your best short summary of what each level requires.

## When done
Run, from the repo root, and fix everything until clean:
- `npx tsc -b --noEmit`
- `npx vitest run src/content/guide`
- `npx prettier --write src/content/guide/units/<your-file>.ts && npx eslint src/content/guide/units/<your-file>.ts`
Then reply with: file name, page ids and titles with levels, the requirement topics covered, and any fact you were
unsure about. Keep the reply short.
