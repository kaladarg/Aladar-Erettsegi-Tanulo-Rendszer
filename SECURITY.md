# Security policy

## Supported versions

Only the latest version deployed from the `main` branch is supported.

## Reporting a vulnerability

Please **do not** open a public issue. Report it privately through [GitHub private vulnerability reporting](https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer/security/advisories/new). You can expect a first response within 7 days.

## Scope notes

- The app has no server and stores all data in the browser (IndexedDB).
- An optional AI API key entered by the user is stored only in that browser's IndexedDB and is excluded from backup files. Issues that could leak this key (e.g. XSS, injection through content packs) are in scope and high priority.
- Content packs are treated as untrusted input and must never be rendered as raw HTML.
