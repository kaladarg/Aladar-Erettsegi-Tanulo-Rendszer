# Földrajz units: extra rules (read after BRIEF.md; these override its "Maths and Hungarian" section)

Scratchpad: /tmp/claude-0/-home-user/cfa31f39-3430-5056-ac1b-3f75ca5a324c/scratchpad
`subject: 'foldrajz'` (new guide subject, supported). Model units: `tortenelem-horthy-korszak.ts` (structure, lists)
and `matematika-statisztika-valoszinuseg.ts` (worked calculation examples). Match their depth and tone.

## Official requirements: `scratchpad/vk2024/foldrajz.txt` (2024 detailed requirements, földrajz)
- lines 26–1000: B) Témakörök, topics 1–10, two-column tables (Középszint | Emelt szint; right column = emelt only).
  A row's text wraps over many lines in both columns; read your rows in full.
- lines 1000–1320: the official concept list (fogalmak) per topic, two columns (középszint | emelt only).
- lines 1320–1553: the official topográfia (place-name) lists per region (1. Föld, 2. Afrika, 3. Amerika,
  4. Ausztrália és Óceánia, 5. Ázsia, 6. Európa, 7. Magyarország), two columns.
- lines 1554–2000: C) Vizsgaleírás (written paper: topográfiai feladat, tesztek, számítási feladatok, ábraelemzés;
  oral exam). Use it in the "A vizsgán" sections.

## Levels and lists
- Anything only in the right column is emelt (page `level: 'emelt'`, or block/item/quiz `emelt: true`).
  Do not mark középszint material as emelt. Do not teach things the document does not ask for at any level.
- `requirement.kozep` / `requirement.emelt` on each page: short, faithful summary of the official cells.
- `unit.requirements`: use it. `terms` = the official fogalmak of your topics (kozep / emelt column, verbatim);
  `places` = the official topográfia items of your region (only for regional units: Magyarország, Európa, the other
  continents; verbatim, kozep / emelt); `people` and `dates` = empty arrays.
- `requirementRef`: official topic numbers and names, e.g. '3.1 A kőzetburok'.
- `requirementSource`: 'A követelmények, a fogalmak és a topográfiai nevek az érettségi 2024-től érvényes részletes
  vizsgakövetelményeiből valók (<topic numbers>). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.'

## Content
- Explain processes (causes and effects), with `compare` tables, `terms` blocks, and `example` blocks for the
  calculation tasks the exam uses (méretarány, távolság, időszámítás, delelési magasság, hőmérséklet-változás a
  magassággal, népsűrűség, GDP-arányok etc., only those your topics ask). Recompute every number with a small script.
- Statistics change: give data as approximate and dated ("2023-ban kb.") only if you are sure; prefer stable facts.
- `map` blocks only for places inside lat 44–50, lon 15–28 (the app's map shows the Carpathian Basin only).
  Outside that, list places in `terms`/`keypoints`.
- cards: leave `cards` out (there is no földrajz deck yet).

## topicMatch
Patterns from `guide-brief/topics-foldrajz.txt` that hit this unit's tasks and not other units' topics. Check with a
quick script that each pattern hits ≥1 topic, and list what it hits. Other földrajz units are written in parallel,
by topic number: keep to your own topics.

## Reply
List every fact or number you were not fully sure of, with the exact sentence (these are checked later).
