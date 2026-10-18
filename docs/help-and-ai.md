# Help mode and optional AI

Help is offered only in practice mode; the timed exam simulation has none, as at the real exam.

## Help panel

Opened from the header (lifebuoy icon) or the "Segítség" button on a task in form mode. Three tabs:

- **Feladat**: what the task asks, built from the task data, not from the answer key:
  - the task type explained;
  - the instruction words in the text ("Nevezze meg", "Indokolja", "Idézzen"…), matched by `src/domain/help/instructions.ts` and explained in `src/i18n/hu.ts` under `help.instructions`;
  - the answers expected (fields, units), the points, the number of scored steps or the rubric criteria, word limits and topics.

  Further steps reveal more, one at a time: the task's `hints`, then the marking-scheme steps, then the solution and explanation. The last two need a confirmation; the furthest level reached is saved with the attempt (`__help:<taskId>`), and the results page marks tasks whose steps or solution were seen ("Segítséggel").

- **Szótár**: word lookup (below).
- **Kérdezz**: the AI tutor, shown only when an API key is set.

## Word lookup

Selecting a word or short phrase (up to 60 characters) in the task texts shows a "Keresés" button; the panel also has a search box, which works in PDF mode too. A lookup sends only the searched text, and only on request:

1. MediaWiki opensearch on `hu.wiktionary.org` and `hu.wikipedia.org` finds the best page title (handles inflected forms).
2. The REST summary endpoint returns a short extract and the page URL. No match means no summary request.

A "Keresés a weben" link opens a DuckDuckGo search in a new tab; nothing is sent until the student opens it. Code: `src/help/lookup.ts`, `src/features/workspace/help/`.

## Optional AI

Off unless the student saves their own Anthropic API key in Settings. The key stays in that browser's IndexedDB (`secrets` table), is never exported, and is sent only to `api.anthropic.com`. Requests go straight from the browser with the official SDK (`@anthropic-ai/sdk`, loaded on first use, `dangerouslyAllowBrowser`), since the app has no backend. The model is chosen in Settings: Claude Opus 5.5 (default), Sonnet 5.5 or Haiku 5.5. Opus and Sonnet requests opt into server-side refusal fallback (`fallbacks: "default"`).

- **Tutor** (`src/ai/prompts.ts` `tutorSystem`): the task, its sources and its marking scheme go in the system prompt so the help is accurate; the tutor is told to explain and guide, and to give the solution only when the student asks. The student's current answer is sent only when they tick "A válaszomat is küldd el". Streamed, low effort.
- **Essay feedback** (results page, tasks with rubric criteria): the essay, task, sources and rubric are sent; the answer is constrained to a JSON schema with one score and reason per criterion plus improvement tips. The suggestion is shown first; the student accepts it, which fills the rubric, and can still change any score.

Errors are shown in plain Hungarian (invalid key, rate limit, network, refusal).
