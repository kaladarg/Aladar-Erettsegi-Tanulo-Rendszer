import { describe, expect, it } from 'vitest';
import { hu } from './hu';
import { formatNumber, t } from '.';

describe('t', () => {
  it('returns the Hungarian string for a key', () => {
    expect(t('nav.settings')).toBe('Beállítások');
  });

  it('interpolates params and formats numbers for hu-HU', () => {
    expect(t('common.stepOf', { current: 1, total: 3 })).toBe('1. lépés a(z) 3 közül');
    expect(t('about.version', { version: '1.2.3' })).toBe('Verzió: 1.2.3');
  });

  it('leaves unknown placeholders untouched', () => {
    expect(t('about.version')).toBe('Verzió: {version}');
  });

  it('formats numbers with Hungarian separators', () => {
    // hu-HU groups only from five digits up.
    expect(formatNumber(12345.5)).toMatch(/^12\s345,5$/);
  });
});

describe('hu catalog', () => {
  it('has no empty strings', () => {
    const walk = (node: unknown, path: string): string[] =>
      typeof node === 'string'
        ? node.trim() === ''
          ? [path]
          : []
        : Object.entries(node as Record<string, unknown>).flatMap(([key, value]) =>
            walk(value, path ? `${path}.${key}` : key),
          );
    expect(walk(hu, '')).toEqual([]);
  });
});
