# Light check of study guide units

Edit only the unit files named in your task, in /home/user/Aladar-Erettsegi-Tanulo-Rendszer/src/content/guide/units/.
Never edit `unit.requirements` (official lists, copied verbatim) or `requirementRef`/`requirementSource`; fix facts only in lesson text, timelines and quiz.
No git. Do NOT replace source links, do NOT re-check things not listed. Keep edits small and in the existing style
(Hungarian, te-form, no em dash —).

## A. Listed facts (history, Petőfi)
For each listed item: find it in the file (grep), check it with ONE or TWO quick WebSearch queries (Hungarian Wikipedia or
another reliable Hungarian source). If correct, leave it. If wrong, correct it. If no reliable source confirms it, soften
it ("a források szerint", give a range) or remove the sentence. Contested numbers: give the range or "a becslések eltérnek".
Check every occurrence (text, timeline, quiz options/explanations).

## B. Official requirements (maths, Petőfi only)
The official 2024 detailed requirements are in the given .txt file (two columns: Középszint | Emelt szint; right column =
emelt only). For each page: set `requirement.kozep` / `requirement.emelt` to a short faithful summary of the matching
official text (no invention). If a page or block teaches something that is emelt-only in the document, mark it emelt
(page `level: 'emelt'`, or `emelt: true` on block/item/quiz); if something marked emelt is középszint in the document,
unmark it. Every non-emelt page must keep ≥1 non-emelt quiz question. Set `requirementRef` to the official topic numbers
and names (e.g. '3.3 Sorozatok'). Set `requirementSource` to: 'A követelmények az érettségi 2024-től érvényes részletes
vizsgakövetelményeiből valók (<topic numbers>). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.'

## Finish
From the repo root: `npx tsc -b --noEmit` and `npx vitest run src/content/guide` (if it shows an old test count, run
`rm -rf node_modules/.vitest-cache` first), then `npx prettier --write <files>`. Reply in at most 15 lines: what you
changed (with source URL for each fact change) and what you could not confirm.
