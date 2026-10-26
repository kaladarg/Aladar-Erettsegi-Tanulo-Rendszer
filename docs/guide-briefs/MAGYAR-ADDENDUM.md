# Magyar units: extra rules (read after BRIEF.md; these override its "Maths and Hungarian" section)

Scratchpad: /tmp/claude-0/-home-user/cfa31f39-3430-5056-ac1b-3f75ca5a324c/scratchpad
Model unit: `src/content/guide/units/magyar-petofi.ts` (approved, checked). Match structure, depth and tone.
For language units, also look at `matematika-halmazok-logika.ts` for how worked examples (`example` blocks) are used.

## Official requirements
`scratchpad/vk2024/magyar.txt` (2024 detailed requirements, published 2021. július 16.):
- lines 65–389: 1. MAGYAR NYELV, topics 1–8, two-column tables (Középszint | Emelt szint; right column = emelt only).
- lines 390–597: 2.1 Szerzők, művek (literature topics 1–8 with author lists).
- lines 598–660: 2.2 Értelmezési szintek, megközelítések (themes, genres and poetics, literary history).
- lines 660–1092: exam description (written paper parts, oral exam, tételsor). Read the parts on the written
  paper (szövegértési-nyelvi feladatsor, irodalmi feladatlap, műértelmező szövegalkotás) and on the oral exam,
  and use them in the "A vizsgán" sections.
Read your topic rows in full before writing (a row's text wraps over several lines in both columns).

## Levels
- Anything only in the right column is emelt (page `level: 'emelt'`, or block/item/quiz `emelt: true`).
  Do not mark középszint material as emelt. Do not teach things the document does not ask for at any level.
- `requirement.kozep` / `requirement.emelt` on each page: short, faithful summary of the official cells.
- `requirementRef`: official topic numbers and names, e.g. 'Nyelv 4. A nyelvi rendszer' or
  'Irodalom 1. Életművek: Arany János'.
- `requirementSource`: 'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók
  (<topic>). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.'
- No `requirements` list (that field is for history).

## Literature units
- Quote poems only where you are sure of the exact wording (check against hu.wikisource.org or MEK with WebFetch if
  available); otherwise paraphrase and name the work. Short quotes only (a few lines).
- Dates of works and life events: only ones you are sure of; list doubtful ones in your reply.
- Cover what the oral exam and the irodalmi feladatlap ask: the main works with interpretation (theme, genre,
  composition, motifs, style period), connections between works, and at emelt the career phases, influences, reception.
- Memoriterek: if the author has texts in `src/content/memoriter/poems.ts`, mention in a tip that they are in the
  Memoriterek section of the app.
- cards: `{ subject: 'magyar', era: '<era>' }` with an era that exists in `src/content/cards` (check the magyar eras
  there; grep the ERAS list), or a deck filter; leave out if none fits.

## Language units
- Teach with many short examples in Hungarian sentences; `example` blocks with problem and solution for analysis
  tasks (e.g. mondatelemzés, szóelemzés, stílusréteg felismerése).
- The written paper tests language knowledge in the szövegértési-nyelvi feladatsor; the oral exam has a language
  tételsor (8 topics). Show both in "A vizsgán".
- Spelling (helyesírás) follows the current rules: A magyar helyesírás szabályai, 12. kiadás (2015). Give the rule
  number only if you are sure of it.

## topicMatch
Patterns from `guide-brief/topics-magyar.txt` that hit this unit's tasks and not others; check with a quick script
that each pattern hits ≥1 topic and nothing unrelated. Existing magyar-petofi.ts uses Petőfi patterns; do not reuse.
If no topic fits, use a precise pattern for the author or concept anyway (it may match future papers).

## Reply
List every fact or quote you were not fully sure of, with the exact sentence (these are checked later).
