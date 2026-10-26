# History units: extra rules (read after BRIEF.md; these override its "History: official requirements" section)

Scratchpad: /tmp/claude-0/-home-user/cfa31f39-3430-5056-ac1b-3f75ca5a324c/scratchpad
Model unit: use `src/content/guide/units/tortenelem-horthy-korszak.ts` (the latest, corrected one) together with
`tortenelem-reformkor-1848.ts`. Match structure, depth and tone.

## Official requirements (text, 2024 detailed requirements)
- Topic table and emelt-only lexika of your era: `scratchpad/vk2024/history-era<N>.txt`. Read your topic rows in full
  (two columns: Középszint | Emelt szint; text of one row can wrap over several lines).
  The emelt-only lexika list follows the line "A kerettantervben szereplőkön felül számon kérhető lexika emelt szinten:".
- Középszint lexika = the 2020 history kerettanterv: `scratchpad/vk2024/seg1.txt` (grades 5–6, 9–10) and
  `seg2.txt` (7–8, 11–12). 3 columns: "CSAK A 2012-ES" | "MINDKÉT TANTERVBEN" | "CSAK A 2020-AS"; only the last two
  count. Use grep to check an item.
- Page images p-*.png are an older layout; do not use them for lists.

## Levels and lists (the official rule)
- Page level: a topic in the "Középszint" column = 'kozep'; a topic only in the "Emelt szint" column = 'emelt'.
  Emelt-column details of a középszint topic go in that page as `emelt: true` blocks/items/quiz.
- `unit.requirements.*.kozep`: items of the kerettanterv lexika that belong to your topics (terms, people, dates, places).
- `unit.requirements.*.emelt`: ONLY items from the era's official emelt list that belong to your topics, verbatim.
- Content about an emelt-list item or emelt-only topic must be `emelt: true` (or on an emelt page). Content about
  a középszint item must NOT be marked emelt.
- `requirementRef`: official topic numbers and names, e.g. '6.5 A kádári diktatúra, 6.6 A rendszerváltoztatás'.
- `requirementSource`: 'A témák és az emelt szintű lexika az érettségi 2024-től érvényes részletes vizsgakövetelményeiből
  valók (<N>. témakör); a középszintű fogalmak, személyek, évszámok és helyszínek a 2020-as történelem kerettantervből.
  A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.'

## Accuracy
Write only what you are sure of. Contested numbers (victims, casualties): give the range or say the estimates differ.
Avoid politically loaded judgements; describe, name the sources' view neutrally. In your reply list every fact you
were not fully sure of (these are checked later), with the exact sentence.

## topicMatch
Patterns from `guide-brief/topics-tortenelem.txt`. Do not reuse the patterns other units already use
(`grep -h -A3 topicMatch src/content/guide/units/tortenelem-*.ts`), and make sure yours do not hit topics of
existing units. Check with a quick script that every pattern hits ≥1 topic and list what it hits.

## Maps
`map` blocks only for places inside lat 44–50, lon 15–28 (the app's map shows the Carpathian Basin only). For places
outside, use a `terms` or `keypoints` block instead.
