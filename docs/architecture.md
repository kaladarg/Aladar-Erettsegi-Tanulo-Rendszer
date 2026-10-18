# Architecture

Érettségi Gyakorló is a static single-page app. There is no server: everything, including scoring, runs in the browser, and user data lives in IndexedDB.

```
src/
  app/        router, layout shell, error screens, appearance boot, PWA prompt
  design/     tokens.css (design tokens) and ui/ primitives built on Radix UI
  i18n/       typed t() helper and the Hungarian catalog (hu.ts)
  domain/     pure TypeScript logic, no React (settings now; scoring, stats later)
  content/    subject/level catalog and, from phase 2, the content-pack loader
  storage/    Dexie database, backup export/import, snapshots for undo
  state/      small Zustand stores (settings, toasts, onboarding)
  features/   one folder per screen (home, onboarding, settings, about, ...)
  ai/         optional AI integration; only the key store exists so far
e2e/          Playwright tests (desktop and mobile projects)
tools/        build-time content pipeline (phase 2)
```

## Key decisions

| Concern    | Choice                                                    | Why                                                                   |
| ---------- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| UI         | React 19, Vite 8, TypeScript (strict)                     | Standard, fast builds, wide contributor familiarity                   |
| Styling    | Tailwind CSS 4 mapped onto CSS-variable tokens            | One source of truth for colors/sizes, dark mode by swapping variables |
| Primitives | Radix UI (shadcn-style wrappers in `src/design/ui`)       | Accessible dialogs, switches, radio groups, toasts                    |
| Routing    | React Router 7, secondary screens lazy-loaded             | Small first load; `404.html` fallback for GitHub Pages                |
| Storage    | Dexie over IndexedDB                                      | Works offline, large quota, structured queries                        |
| State      | Zustand for app state; Dexie live queries for stored data | Minimal boilerplate                                                   |
| Offline    | vite-plugin-pwa (Workbox)                                 | Precached app shell, installable                                      |
| Tests      | Vitest (+ fake-indexeddb), Playwright (+ axe)             | Unit, flow and accessibility checks in CI                             |

## Data on the device

Dexie database `erettsegi-gyakorlo`, version 1 (`src/storage/db.ts`):

| Table             | Key                   | Contents                                                  | In backup file |
| ----------------- | --------------------- | --------------------------------------------------------- | -------------- |
| `settings`        | `key` (`'app'`)       | theme, text size, font, motion, subjects, onboarding flag | yes            |
| `attempts`        | `id`                  | one run through an exam (practice or timed)               | yes            |
| `answers`         | `[attemptId+fieldId]` | the student's answers                                     | yes            |
| `selfAssessments` | `[attemptId+taskId]`  | self-awarded points for essays                            | yes            |
| `importedPdfs`    | `sha256`              | PDFs the student added themselves                         | no (too large) |
| `secrets`         | `key`                 | optional AI API key                                       | **never**      |

Backups are JSON files (`{ app, exportVersion, exportedAt, data }`) validated on import (`src/storage/backup.ts`). Destructive actions (import, reset) take an in-memory snapshot first and offer undo.

Schema changes add a new `this.version(n)` block in `db.ts` with an upgrade function; never edit an existing version.

## Appearance boot

Theme, text size, font and motion are mirrored into `localStorage` so an inline script in `index.html` applies them before first paint (IndexedDB is asynchronous). IndexedDB stays the source of truth.

## Content (phase 2)

Exam data is loaded through a content pack: `manifest.json` plus per-exam `exam.json` files and PDF references, from a configurable base URL. The full schema is specified in the approved plan and will be documented in `docs/content-packs.md` together with the JSON Schemas in `schemas/`.
