import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SETTINGS,
  sanitizeContentSource,
  sanitizeSettings,
  stepTextScale,
  TEXT_SCALE_STEPS,
} from './settings';

describe('stepTextScale', () => {
  it('moves one step up and down', () => {
    expect(stepTextScale(1, 1)).toBe(1.125);
    expect(stepTextScale(1, -1)).toBe(0.875);
  });

  it('clamps at both ends', () => {
    expect(stepTextScale(TEXT_SCALE_STEPS[0], -1)).toBe(TEXT_SCALE_STEPS[0]);
    const last = TEXT_SCALE_STEPS.at(-1)!;
    expect(stepTextScale(last, 1)).toBe(last);
  });

  it('snaps an off-scale value to the nearest step at or above it', () => {
    expect(stepTextScale(1.1, 1)).toBe(1.25);
    expect(stepTextScale(9, -1)).toBe(1.375);
  });
});

describe('sanitizeSettings', () => {
  it('returns defaults for garbage input', () => {
    expect(sanitizeSettings(null)).toEqual(DEFAULT_SETTINGS);
    expect(sanitizeSettings('nope')).toEqual(DEFAULT_SETTINGS);
    expect(sanitizeSettings([1, 2])).toEqual(DEFAULT_SETTINGS);
  });

  it('keeps valid values', () => {
    const valid = {
      theme: 'dark',
      textScale: 1.25,
      dyslexicFont: true,
      reducedMotion: true,
      subjects: ['matematika'],
      onboardingDone: true,
      contentSource: 'https://example.org/pack/',
      aiModel: 'claude-haiku-5-5',
      examDates: { matematika: '2027-05-04' },
      featuresSeen: 1,
    } as const;
    expect(sanitizeSettings(valid)).toEqual(valid);
    expect(sanitizeSettings({ examDates: { magyar: 'holnap', tortenelem: 5 } }).examDates).toEqual(
      {},
    );
  });

  it('drops invalid fields individually', () => {
    expect(
      sanitizeSettings({
        theme: 'neon',
        textScale: 7,
        subjects: ['magyar', 3, null],
        dyslexicFont: 'yes',
      }),
    ).toEqual({ ...DEFAULT_SETTINGS, subjects: ['magyar'] });
  });
});

describe('sanitizeContentSource', () => {
  it('accepts http(s) URLs and site paths only', () => {
    expect(sanitizeContentSource('https://example.org/pack/')).toBe('https://example.org/pack/');
    expect(sanitizeContentSource(' /content-local/ ')).toBe('/content-local/');
    expect(sanitizeContentSource('javascript:alert(1)')).toBe('');
    expect(sanitizeContentSource('//evil.example')).toBe('');
    expect(sanitizeContentSource('not a url')).toBe('');
    expect(sanitizeContentSource(42)).toBe('');
  });
});
