# Help mode and optional AI

Help is offered only in practice mode; the timed exam simulation has none, as at the real exam.

## Help panel

Opened from the header (lifebuoy icon) or the "Segítség" button on a task in form mode. Four tabs:

- **Feladat**: what the task asks, built from the task data, not from the answer key:
  - the task type explained;
  - the instruction words in the text ("Nevezze meg", "Indokolja", "Idézzen"…), matched by `src/domain/help/instructions.ts` and explained in `src/i18n/hu.ts` under `help.instructions`;
  - the answers expected (fields, units), the points, the number of scored steps or the rubric criteria, word limits and topics.

  Further steps reveal more, one at a time: the task's `hints`, then the marking-scheme steps, then the solution and explanation. The last two need a confirmation; the furthest level reached is saved with the attempt (`__help:<taskId>`), and the results page marks tasks whose steps or solution were seen ("Segítséggel").

- **Szótár**: word lookup (below).
- **Oldalak**: free Hungarian learning sites for the exam's subject, then the general ones (`src/help/resources.ts`, texts under `help.resources`).
- **Kérdezz**: always shown. Without a key it prepares a prompt for a free AI chat (below); with a key it also offers the in-app AI tutor.

## Word lookup

Selecting a word or short phrase (up to 60 characters) in the task texts shows a "Keresés" button; the panel also has a search box, which works in PDF mode too. A lookup sends only the searched text, and only on request:

1. MediaWiki opensearch on `hu.wiktionary.org` and `hu.wikipedia.org` finds the best page title (handles inflected forms).
2. The REST summary endpoint returns a short extract and the page URL. No match means no summary request.

A "Keresés a weben" link opens a DuckDuckGo search in a new tab, and "Keresés ingyenes tanulóoldalakon" offers the same search limited to one learning site (`site:` search, `siteSearchUrl`); nothing is sent until the student opens a link. Code: `src/help/lookup.ts`, `src/features/workspace/help/`.

## Learning sites

Only sites that are free for everyone, with no paid tier, account wall or ads, run by public or non-profit bodies or free for non-commercial use:

| Site                                                                                | Subjects           | Run by                                |
| ----------------------------------------------------------------------------------- | ------------------ | ------------------------------------- |
| [oktatas.hu feladatsorok](https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok) | all                | Oktatási Hivatal                      |
| [Nemzeti Köznevelési Portál](https://www.nkp.hu)                                    | all                | Oktatási Hivatal                      |
| [Zanza.tv](https://zanza.tv)                                                        | all                | free video lessons, no account needed |
| [Felvi.hu](https://www.felvi.hu)                                                    | all                | Oktatási Hivatal                      |
| [Magyar Wikipédia](https://hu.wikipedia.org)                                        | all                | Wikimedia                             |
| [Khan Academy magyarul](https://hu.khanacademy.org)                                 | matematika         | Khan Academy (non-profit)             |
| [GeoGebra](https://www.geogebra.org/calculator)                                     | matematika         | free for non-commercial use           |
| [Magyar Elektronikus Könyvtár](https://mek.oszk.hu)                                 | magyar, történelem | Országos Széchényi Könyvtár           |
| [Digitális Irodalmi Akadémia](https://dia.hu)                                       | magyar             | Petőfi Irodalmi Múzeum                |
| [Helyesírási tanácsadó](https://helyesiras.mta.hu)                                  | magyar             | HUN-REN Nyelvtudományi Kutatóközpont  |
| [A magyar nyelv nagyszótára](https://nagyszotar.nytud.hu)                           | magyar             | HUN-REN Nyelvtudományi Kutatóközpont  |
| [Wikiszótár](https://hu.wiktionary.org)                                             | magyar             | Wikimedia                             |

Left out on purpose: freemium apps (Photomath, Quizlet, Brainly) and ad-funded sites. Re-check the list once a year; a site that adds paywalls or ads is removed.

## Free AI chats (no key)

The "Kérdezz" tab and the results page (essays) build a Hungarian prompt (`src/help/aiHandoff.ts`) and offer links to Google Gemini, ChatGPT, Microsoft Copilot and Claude. A click copies the prompt to the clipboard and opens the chat in a new tab, where the student pastes it. The app sends nothing itself.

- The tutor prompt holds the task text, its text sources and the student's question, plus the current answer only when the box is ticked. It does not include the marking scheme or the solution, and asks the chat not to give the solution unless the student asks.
- The essay prompt holds the task, sources, rubric criteria with levels, and the essay.
- If the clipboard is blocked, the prompt is shown in a text box for manual copying. The copy status is shown inline (`role="status"`), since the modal help panel hides toasts from screen readers.
- Each chat service has its own terms and age limits; the panel says so.

Why not a Google AI Studio (Gemini API) key: the [Gemini API terms](https://ai.google.dev/gemini-api/terms) require users to be 18 or older, forbid API clients directed at or likely used by under-18s, and allow only paid services for API clients offered to users in the EEA, Switzerland or the UK. A free key would not be allowed for this app's users in Hungary.

## Optional AI

Off unless the student saves their own Anthropic API key in Settings and confirms they are 18 or older and accept Anthropic's terms (required checkbox; see Anthropic's [guidance for products used by minors](https://support.claude.com/en/articles/9307344-responsible-use-of-anthropic-s-models-guidelines-for-organizations-serving-minors)). The key stays in that browser's IndexedDB (`secrets` table), is never exported, and is sent only to `api.anthropic.com`. Requests go straight from the browser with the official SDK (`@anthropic-ai/sdk`, loaded on first use, `dangerouslyAllowBrowser`), since the app has no backend. The model is chosen in Settings: Claude Opus 5.5 (default), Sonnet 5.5 or Haiku 5.5. Opus and Sonnet requests opt into server-side refusal fallback (`fallbacks: "default"`).

- **Tutor** (`src/ai/prompts.ts` `tutorSystem`): the task, its sources and its marking scheme go in the system prompt so the help is accurate; the tutor is told to explain and guide, and to give the solution only when the student asks. The student's current answer is sent only when they tick "A válaszomat is küldd el". Streamed, low effort.
- **Essay feedback** (results page, tasks with rubric criteria): the essay, task, sources and rubric are sent; the answer is constrained to a JSON schema with one score and reason per criterion plus improvement tips. The suggestion is shown first; the student accepts it, which fills the rubric, and can still change any score.

Errors are shown in plain Hungarian (invalid key, rate limit, network, refusal).
