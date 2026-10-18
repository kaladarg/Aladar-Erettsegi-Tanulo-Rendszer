# Performance and accessibility

## Budgets

`npm run lighthouse` runs Lighthouse CI on the production build (five main screens, median of 3 runs). CI fails when any category scores below 0.9 with the desktop profile. Accessibility is also checked by axe in Playwright (`e2e/a11y.spec.ts`, WCAG 2.2 AA, light and dark theme) on every screen, including results, sharing, statistics with data, every help tab and timed exam mode.

## Latest measurements (2026-10-18, demo pack)

| Screen                        | Desktop performance | Mobile performance | Mobile LCP | Mobile TBT |
| ----------------------------- | ------------------- | ------------------ | ---------- | ---------- |
| Kezdőlap                      | 99                  | 76–84              | 3.2 s      | 350 ms     |
| Feladatsorok                  | 97–100              | 87–88              | 3.4 s      | 70 ms      |
| Feladatsor (matematika minta) | 98–99               | 78–86              | 3.6 s      | 160 ms     |
| Statisztika                   | 96–100              | 74–89              | 3.1 s      | 90 ms      |
| Névjegy                       | 98–100              | 89–92              | 3.0 s      | 60 ms      |

Accessibility, best practices and SEO score 100 on every screen in both profiles. Mobile means Lighthouse's default: a mid-range phone (4× CPU slowdown) on slow 4G. Run it with `LHCI_MOBILE=1 npm run lighthouse`; mobile performance is reported as a warning, not a failure, until it reaches 0.9.

## What was done

- The generated content validators (about 120 kB) load with the first content request instead of with the app shell.
- Inter: the 85 kB Latin Extended file is replaced by a 15 kB subset with only U+0100–017F (ő, ű and letters in foreign names), built by `tools/subset-fonts.sh`.
- The home page shows settings, unfinished papers and subjects in one pass, and reserves space for the recommendations, so the page does not jump while loading.

## Next steps for mobile

- Prerender the static parts of each route into HTML, so text appears before JavaScript runs (largest gain for FCP and LCP).
- Split the main bundle further: React Router and Radix currently load on every page.
