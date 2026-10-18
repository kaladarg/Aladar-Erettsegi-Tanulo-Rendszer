# Contributing

Thank you for helping students prepare for the érettségi. All kinds of help are welcome: bug reports, fixes to exam data, translations of UI wording, code, design and accessibility feedback.

## Ground rules

- Be kind. This project follows the [Code of Conduct](CODE_OF_CONDUCT.md).
- **Language:** code, identifiers, comments, commit messages and docs are in English. Everything students see is in Hungarian and goes through the i18n layer (`src/i18n/hu.ts`). Never hard-code UI text in components.
- **No official exam files in this repository.** Do not commit PDFs or extracted text from oktatas.hu here; see [CONTENT_LICENSE.md](CONTENT_LICENSE.md).
- **Privacy is a feature.** No analytics, trackers, third-party fonts/CDNs or network calls that send student data anywhere, except opt-in AI features using the student's own key.

## Development setup

```bash
npm install
npm run dev
```

Before opening a pull request, run:

```bash
npm run lint && npm run typecheck && npm test && npm run test:e2e
```

`npm run format` fixes formatting. CI runs the same checks on every pull request.

## Project layout

See [docs/architecture.md](docs/architecture.md). In short:

- `src/domain/`: pure TypeScript logic (no React), fully unit-tested.
- `src/storage/`: IndexedDB (Dexie), backup and restore.
- `src/design/`: design tokens and UI primitives. Reuse them; see [docs/design-system.md](docs/design-system.md).
- `src/features/<screen>/`: one folder per screen.
- `e2e/`: Playwright tests for user flows.

## Adding UI text

1. Add a key to `src/i18n/hu.ts` (English key, Hungarian value).
2. Use it with `t('section.key')`. TypeScript rejects unknown keys.

## Reporting a mistake in an exam

Use the "Data correction" issue template, or the "report a mistake" link inside the app (coming in phase 2), which pre-fills the exam and task.

## Commit messages

Short imperative summary (e.g. `Add text size control to settings`), with a body explaining _why_ if it is not obvious.
