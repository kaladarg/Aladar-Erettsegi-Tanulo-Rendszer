# Érettségi Gyakorló

A free, open-source, ad-free web app for practicing the Hungarian _érettségi_ (school-leaving exam) on real past papers. It runs entirely in the browser: no signup, no backend, no tracking. Works offline once loaded and can be installed as an app (PWA).

**Version 1 scope:** középszint (intermediate level) in Mathematics, History, and Hungarian Language & Literature. Subjects and levels are data, so more can be added without code changes.

> Status: phase 1 of 7 (app shell, design system, onboarding, settings). See [docs/roadmap.md](docs/roadmap.md).

| Mobile (light)                                                   | Desktop (dark)                                                    |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| ![Home screen on mobile](docs/screenshots/home-mobile-light.png) | ![Home screen on desktop](docs/screenshots/home-desktop-dark.png) |

## Diákoknak (for students, in Hungarian)

Nyisd meg az oldalt: **https://kaladarg.github.io/Aladar-Erettsegi-Tanulo-Rendszer/**

- Nem kell regisztrálni, és teljesen ingyenes. Nincs reklám, nincs követés.
- Telefonon a böngésző menüjében a „Hozzáadás a kezdőképernyőhöz” paranccsal alkalmazásként is telepítheted.
- Első betöltés után internet nélkül is működik.
- A haladásod csak a te eszközödön tárolódik. A Beállításokban fájlba mentheted, és másik eszközön visszatöltheted.

## Quick start (developers)

Requirements: Node.js 20.19+ (22 recommended, see `.nvmrc`). Works on Windows, macOS and Linux.

```bash
git clone https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer.git
cd Aladar-Erettsegi-Tanulo-Rendszer
npm install
npm run dev
```

| Command             | What it does                                                                 |
| ------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`       | Dev server with hot reload at http://localhost:5173                          |
| `npm run build`     | Type-checks and builds the static site into `dist/`                          |
| `npm run preview`   | Serves the production build locally                                          |
| `npm test`          | Unit tests (Vitest)                                                          |
| `npm run test:e2e`  | Browser tests (Playwright); run `npx playwright install chromium` once first |
| `npm run lint`      | ESLint and Prettier check                                                    |
| `npm run typecheck` | TypeScript only                                                              |
| `npm run format`    | Formats all files with Prettier                                              |

Serve the built app with Docker (optional):

```bash
docker build -t erettsegi-gyakorlo . && docker run --rm -p 8080:80 erettsegi-gyakorlo
```

## Exam content

Code and content are separate. The app loads exams from a _content pack_ (a manifest plus per-exam JSON and PDF references). Official exam papers are **never** committed to this repository; see [CONTENT_LICENSE.md](CONTENT_LICENSE.md). The import pipeline (`tools/`) and the content pack format arrive in phase 2 and will be documented in `docs/content-packs.md`.

## Privacy

No ads, no analytics, no third-party trackers, no cookies. All data stays in the browser (IndexedDB). Optional AI features use the student's own API key, stored only on their device and never included in exports.

## Contributing

Contributions from students, teachers and developers are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md) and the architecture notes in [docs/](docs/).

## License

Code: [MIT](LICENSE). Exam materials belong to the Oktatási Hivatal and are not covered by the MIT license; see [CONTENT_LICENSE.md](CONTENT_LICENSE.md).
