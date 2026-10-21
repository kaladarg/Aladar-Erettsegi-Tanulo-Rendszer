# Performance and accessibility

## Budgets

`npm run lighthouse` runs Lighthouse CI on the production build (five main screens, median of 3 runs). CI fails when any category scores below 0.9 with the desktop profile. Accessibility is also checked by axe in Playwright (`e2e/a11y.spec.ts`, WCAG 2.2 AA, light and dark theme) on every screen, including results, sharing, statistics with data, every help tab and timed exam mode.

## Latest measurements (2026-10-21, demo pack, after the motion redesign)

| Screen                        | Desktop performance | Mobile performance | Mobile LCP | Mobile TBT |
| ----------------------------- | ------------------- | ------------------ | ---------- | ---------- |
| Kezdőlap                      | 100                 | 85                 | 3.3 s      | 32 ms      |
| Feladatsorok                  | 99                  | 87                 | 3.2 s      | 24 ms      |
| Feladatsor (matematika minta) | 99                  | 82                 | 4.0 s      | 25 ms      |
| Statisztika                   | 99–100              | 87                 | 3.2 s      | 25 ms      |
| Névjegy                       | 99–100              | 87                 | 3.3 s      | 20 ms      |

Accessibility, best practices and SEO score 100 on every screen in both profiles. Mobile means Lighthouse's default: a mid-range phone (4× CPU slowdown) on slow 4G. Run it with `LHCI_MOBILE=1 npm run lighthouse`; mobile performance is reported as a warning, not a failure, until it reaches 0.9.

## What was done

- The generated content validators (about 120 kB) load with the first content request instead of with the app shell.
- Inter: the 85 kB Latin Extended file is replaced by a 15 kB subset with only U+0100–017F (ő, ű and letters in foreign names), built by `tools/subset-fonts.sh`.
- The home page shows settings, unfinished papers and subjects in one pass, and reserves space for the recommendations, so the page does not jump while loading.

## Next steps for mobile

- Prerender the static parts of each route into HTML, so text appears before JavaScript runs (largest gain for FCP and LCP).
- Split the main bundle further: React Router and Radix currently load on every page.

## Motion

Animations make the app feel responsive without costing speed on cheap phones:

- Only `transform` and `opacity` are animated (compositor-only), plus a ring's stroke on the home and results pages. Nothing animates layout.
- Decorative shapes do not move behind translucent or blurred elements: that combination repaints on every frame on devices without a GPU.
- Page changes fade in with the Web Animations API on the existing element (no remount, see `src/app/motion.ts`). There is no global smooth scrolling: it made route changes scroll slowly and late.
- One delegated `pointerdown` listener draws the press ripple on elements marked `data-ripple`.
- Every duration comes from the motion tokens in `src/design/tokens.css`. They drop to 0 when the system asks for reduced motion or the student turns on "Animációk csökkentése" in Settings; confetti and count-ups are skipped then.
- Playwright runs with animations on; `settle()` in `e2e/fixtures.ts` waits for them to end before axe measures colours. `e2e/motion.spec.ts` checks the ripple, the reduced-motion switch and the daily goal.
