// Lighthouse CI on the production build (served by `vite preview`).
// Budget: every category at least 0.9 with the desktop profile, median of 3 runs.
// The mobile profile (4x CPU slowdown, slow 4G) is tracked in docs/performance.md;
// run it with `LHCI_MOBILE=1 npm run lighthouse`.
const mobile = process.env.LHCI_MOBILE === '1';
const base = 'http://localhost:4174';

module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx vite preview --port 4174 --strictPort',
      startServerReadyPattern: 'Local',
      url: [
        `${base}/`,
        `${base}/feladatsorok`,
        `${base}/feladatsorok/matematika-kozep-2026-majus-minta`,
        `${base}/statisztika`,
        `${base}/nevjegy`,
      ],
      numberOfRuns: 3,
      settings: {
        ...(mobile ? {} : { preset: 'desktop' }),
        chromeFlags: '--no-sandbox --headless=new',
      },
    },
    assert: {
      assertions: Object.fromEntries(
        ['performance', 'accessibility', 'best-practices', 'seo'].map((category) => [
          `categories:${category}`,
          [
            mobile && category === 'performance' ? 'warn' : 'error',
            { minScore: 0.9, aggregationMethod: 'median-run' },
          ],
        ]),
      ),
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/reports' },
  },
};
