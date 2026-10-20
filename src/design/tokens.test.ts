import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const css = readFileSync(resolve(process.cwd(), 'src/design/tokens.css'), 'utf8');

function block(selector: string): Record<string, string> {
  const start = css.indexOf(`${selector} {`);
  const body = css.slice(start, css.indexOf('}', start));
  return Object.fromEntries(
    [...body.matchAll(/(--c-[\w-]+):\s*(#[0-9a-f]{6})/gi)].map((m) => [m[1]!, m[2]!.toLowerCase()]),
  );
}

const light = block(':root');
const dark = { ...light, ...block("[data-theme='dark']") };

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi! + 0.05) / (lo! + 0.05);
}

// [foreground, background, minimum ratio] — 4.5 for text, 3 for UI components (WCAG 2.2 AA).
const PAIRS: [string, string, number][] = [
  ['--c-text', '--c-bg', 4.5],
  ['--c-text', '--c-surface', 4.5],
  ['--c-text', '--c-surface-muted', 4.5],
  ['--c-text-muted', '--c-bg', 4.5],
  ['--c-text-muted', '--c-surface', 4.5],
  ['--c-text-muted', '--c-surface-muted', 4.5],
  ['--c-primary', '--c-surface', 4.5],
  ['--c-primary', '--c-bg', 4.5],
  ['--c-primary-fg', '--c-primary', 4.5],
  ['--c-primary-soft-fg', '--c-primary-soft', 4.5],
  ['--c-danger', '--c-surface', 4.5],
  ['--c-danger-fg', '--c-danger', 4.5],
  ['--c-success', '--c-surface', 4.5],
  ['--c-warning', '--c-surface', 4.5],
  ['--c-info', '--c-surface', 4.5],
  ['--c-text', '--c-success-soft', 4.5],
  ['--c-text', '--c-warning-soft', 4.5],
  ['--c-text', '--c-danger-soft', 4.5],
  ['--c-text', '--c-info-soft', 4.5],
  ['--c-subject-matematika', '--c-surface', 4.5],
  ['--c-subject-tortenelem', '--c-surface', 4.5],
  ['--c-subject-magyar', '--c-surface', 4.5],
  ['--c-subject-angol', '--c-surface', 4.5],
  ['--c-subject-nemet', '--c-surface', 4.5],
  ['--c-subject-matematika', '--c-surface-muted', 3],
  ['--c-subject-tortenelem', '--c-surface-muted', 3],
  ['--c-subject-magyar', '--c-surface-muted', 3],
  ['--c-subject-angol', '--c-surface-muted', 3],
  ['--c-subject-nemet', '--c-surface-muted', 3],
  ['--c-border-strong', '--c-surface', 3],
  ['--c-focus', '--c-bg', 3],
  ['--c-focus', '--c-surface', 3],
];

describe.each([
  ['light', light],
  ['dark', dark],
])('%s theme contrast', (_name, tokens) => {
  it.each(PAIRS)('%s on %s ≥ %s:1', (fg, bg, min) => {
    expect(tokens[fg], fg).toBeDefined();
    expect(tokens[bg], bg).toBeDefined();
    expect(contrast(tokens[fg]!, tokens[bg]!)).toBeGreaterThanOrEqual(min);
  });
});
