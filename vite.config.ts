/// <reference types="vitest/config" />
import {
  copyFileSync,
  cpSync,
  createReadStream,
  existsSync,
  readFileSync,
  statSync,
} from 'node:fs';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const root = fileURLToPath(new URL('.', import.meta.url));
const base = process.env.BASE_PATH ?? '/';
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8')) as { version: string };

/** GitHub Pages serves 404.html for unknown paths; make it the SPA entry. */
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle() {
      copyFileSync(resolve(root, 'dist/index.html'), resolve(root, 'dist/404.html'));
    },
  };
}

const PDFJS_ROUTE = 'pdfjs/';
const PDFJS_DIRS = ['standard_fonts', 'wasm', 'iccs'];
const pdfjsRoot = resolve(root, 'node_modules/pdfjs-dist');

/**
 * pdf.js loads fonts, image decoders and colour profiles at runtime. Serve
 * them from node_modules in dev and copy them into dist/pdfjs/ on build.
 * The JavaScript sandbox (quickjs) is left out: exam papers need no scripting.
 */
function pdfjsAssets(): Plugin {
  return {
    name: 'pdfjs-assets',
    configureServer(server) {
      server.middlewares.use(`${base}${PDFJS_ROUTE}`, (req, res, next) => {
        const path = decodeURIComponent((req.url ?? '/').split('?')[0]!);
        const file = resolve(pdfjsRoot, `.${path}`);
        const allowed = PDFJS_DIRS.some((dir) => file.startsWith(resolve(pdfjsRoot, dir) + sep));
        if (!allowed || !existsSync(file) || !statSync(file).isFile()) return next();
        if (file.endsWith('.wasm')) res.setHeader('content-type', 'application/wasm');
        createReadStream(file).pipe(res);
      });
    },
    writeBundle() {
      for (const dir of PDFJS_DIRS) {
        cpSync(resolve(pdfjsRoot, dir), resolve(root, 'dist', PDFJS_ROUTE, dir), {
          recursive: true,
          filter: (src) => !/quickjs/.test(src),
        });
      }
    },
  };
}

const CONTENT_ROUTE = '/content-local/';
const MIME: Record<string, string> = {
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.md': 'text/markdown; charset=utf-8',
};

/**
 * Serves a local content repository checkout (CONTENT_DIR) at /content-local/
 * in `vite dev` and `vite preview`. It is never copied into the build, so
 * private content cannot end up on the public site.
 */
function localContent(dir: string | undefined): Plugin {
  const serve: Plugin['configureServer'] = (server) => {
    if (!dir) return;
    const root = resolve(dir);
    if (!existsSync(resolve(root, 'manifest.json'))) {
      server.config.logger.warn(
        `CONTENT_DIR ${root} has no manifest.json; run "npm run content:pack".`,
      );
    }
    server.middlewares.use(CONTENT_ROUTE, (req, res, next) => {
      const path = decodeURIComponent((req.url ?? '/').split('?')[0]!);
      const file = resolve(root, `.${path}`);
      if (!file.startsWith(root + sep) || !existsSync(file) || !statSync(file).isFile())
        return next();
      res.setHeader('content-type', MIME[extname(file)] ?? 'application/octet-stream');
      res.setHeader('cache-control', 'no-cache');
      createReadStream(file).pipe(res);
    });
  };
  return {
    name: 'local-content',
    configureServer: serve,
    configurePreviewServer: serve as Plugin['configurePreviewServer'],
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '');
  const contentDir = env.CONTENT_DIR || undefined;
  if (contentDir && !env.VITE_CONTENT_BASE_URL) {
    process.env.VITE_CONTENT_BASE_URL = `${base.replace(/\/$/, '')}${CONTENT_ROUTE}`;
  }
  return {
    base,
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
    },
    resolve: {
      alias: { '@': resolve(root, 'src') },
    },
    build: {
      // react-dom alone is ~200 kB; the initial chunk is expected to exceed the 500 kB default.
      chunkSizeWarningLimit: 600,
    },
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'prompt',
        injectRegister: false,
        includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
        manifest: {
          id: base,
          name: 'Érettségi Gyakorló',
          short_name: 'Érettségi',
          description:
            'Ingyenes, reklámmentes érettségi gyakorló. Minden adat a te eszközödön marad.',
          lang: 'hu',
          dir: 'ltr',
          start_url: base,
          scope: base,
          display: 'standalone',
          orientation: 'any',
          theme_color: '#0f766e',
          background_color: '#faf9f7',
          categories: ['education'],
          icons: [
            { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
            { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
            {
              src: 'pwa-maskable-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,mjs,css,html,svg,png,woff2,webmanifest}'],
          // The pdf.js worker is ~1.3 MB; allow it in the offline precache.
          maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
          // Hungarian needs only the latin and latin-ext font subsets offline.
          navigateFallback: 'index.html',
          cleanupOutdatedCaches: true,
          // Never precache content packs: they are cached on demand below.
          globIgnores: [
            '**/*-{cyrillic,cyrillic-ext,greek,greek-ext,vietnamese}-*.woff2',
            'demo-pack/**',
            'pdfjs/**',
            'assets/pdf*',
            'assets/katex*',
            'assets/KaTeX_*',
          ],
          runtimeCaching: [
            {
              // Hashed build assets left out of the precache (pdf.js, KaTeX): cached on first use.
              urlPattern: ({ url }) => url.pathname.includes('/assets/'),
              handler: 'CacheFirst',
              options: { cacheName: 'eg-assets', expiration: { maxEntries: 120 } },
            },
            {
              // pdf.js fonts and decoders, fetched only when a PDF needs them.
              // Matchers are serialized into the service worker: use literals, not variables.
              urlPattern: ({ url }) => url.pathname.includes('/pdfjs/'),
              handler: 'CacheFirst',
              options: { cacheName: 'eg-pdfjs', cacheableResponse: { statuses: [0, 200] } },
            },
            {
              // Manifests change when exams are added: show cached, refresh in the background.
              urlPattern: ({ url }) => url.pathname.endsWith('/manifest.json'),
              handler: 'StaleWhileRevalidate',
              options: { cacheName: 'eg-content-manifest' },
            },
            {
              // exam.json URLs carry a content hash and PDFs never change: cache first.
              urlPattern: ({ url }) => /\/exam\.json$|\.pdf$/.test(url.pathname),
              handler: 'CacheFirst',
              options: {
                cacheName: 'eg-content',
                matchOptions: { ignoreSearch: false },
                expiration: { maxEntries: 400 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
      }),
      spaFallback(),
      localContent(contentDir),
      pdfjsAssets(),
    ],
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      include: ['src/**/*.test.{ts,tsx}', 'tools/**/*.test.ts'],
      css: false,
    },
  };
});
