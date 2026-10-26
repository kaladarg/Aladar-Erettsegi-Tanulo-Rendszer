# Maths units: extra rules (read after BRIEF.md; these override its "Maths and Hungarian" section)

Official requirements: /tmp/claude-0/-home-user/cfa31f39-3430-5056-ac1b-3f75ca5a324c/scratchpad/vk2024/matematika.txt
(the 2024 detailed requirements, published 2021. július 16.). It is a two-column table:
left = Középszint, right = Emelt szint (emelt-only). Read your topic numbers in full before writing.

- Every page's `requirement.kozep` / `requirement.emelt` = a short, faithful summary of the official cells you cover.
- Levels must follow the document exactly: anything only in the right column is emelt (page `level: 'emelt'` or
  block/item/quiz `emelt: true`). Do not mark középszint material as emelt.
- Do not teach things the document does not ask for at any level (if in doubt, leave it out).
- `requirementRef`: the official topic numbers and names, e.g. '1.1 Halmazok, 1.2 Matematikai logika'.
- `requirementSource`: 'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók
  (<topic numbers>). A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.'
- No `requirements` list (that field is for history).
- Recompute every number in examples and quizzes with a small script (node or python) before you finish.
- In the exam section, show how the topic appears in the paper: I. rész short tasks, II. A and II. B longer tasks,
  and, where relevant, the oral exam (definition or theorem to state, its use, a problem).
- `topicMatch`: patterns from topics-matematika.txt that hit this unit's tasks and not others. Existing units already use
  patterns for functions, sequences, trigonometry and coordinate geometry; do not reuse those.
- After finishing, if `npx vitest run src/content/guide` shows an old test count, run `rm -rf node_modules/.vitest-cache` first.
