# Roadmap

| Phase | Scope                                                                                          | Status |
| ----- | ---------------------------------------------------------------------------------------------- | ------ |
| 0     | Plan, architecture, design system, schema                                                      | done   |
| 1     | Scaffold, CI, design system, app shell, onboarding, settings                                   | done   |
| 2     | Import pipeline and content packs for one paper per subject; exam browser                      | done   |
| 3     | Editable PDF mode and form mode                                                                | done   |
| 4     | Scoring, timed exam mode, mistake review                                                       | done   |
| 5     | Help mode (lookup, task explanations, learning sites, free AI chat hand-off, optional AI)      | done   |
| 6     | Statistics, sharing, home dashboard                                                            | done   |
| 7     | Full középszint archive (2024 onward first), accessibility and performance pass, docs, release | active |

## Phase 7 progress

- Done: tips for the three May 2024 papers, abandon button for timed exams, Sonnet as the default AI model.
- Done: axe checks on every screen; Lighthouse CI budget (desktop ≥ 0.9 in all categories), mobile measured in [performance.md](performance.md).
- Waiting: the 2024 October, 2025 and 2026 papers. oktatas.hu cannot be reached from the build container; the maintainer runs `npm run content:crawl -- --out ../erettsegi-gyakorlo-content --subjects matematika,tortenelem,magyar --level kozep --from 2024` locally and pushes the content repository, then each paper is extracted and checked like the May 2024 ones.
- Next: mobile performance (prerendering), a manual screen-reader pass, then the v1.0.0 release.

## Open items

- The three May 2024 papers in the private content repository are drafts until a person checks them against the marking schemes.
