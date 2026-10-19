import { describe, expect, it } from 'vitest';
import { parseInk, serializeInk, simplify, strokeHit, strokePath, type Stroke } from './ink';

const line: Stroke = { tool: 'pen', color: '#000', width: 0.004, points: [0.1, 0.1, 0.5, 0.1] };

describe('ink storage', () => {
  it('round-trips strokes and rounds coordinates', () => {
    const value = serializeInk([{ ...line, points: [0.123456, 0.5, 0.2, 0.3] }]);
    expect(parseInk(value)).toEqual([{ ...line, points: [0.1235, 0.5, 0.2, 0.3] }]);
  });

  it('stores an empty drawing as a blank answer', () => {
    expect(serializeInk([])).toBe('');
    expect(parseInk('')).toEqual([]);
  });

  it('ignores malformed data', () => {
    expect(parseInk('nope')).toEqual([]);
    expect(parseInk(['a'])).toEqual([]);
    expect(parseInk(JSON.stringify([{ tool: 'laser', points: [] }, line]))).toEqual([line]);
  });
});

describe('simplify', () => {
  it('drops points that barely move but keeps the last one', () => {
    expect(simplify([0, 0, 0.0001, 0, 0.0002, 0, 0.1, 0, 0.1001, 0])).toEqual([
      0, 0, 0.1, 0, 0.1001, 0,
    ]);
  });
});

describe('strokeHit', () => {
  it('finds strokes near the eraser', () => {
    expect(strokeHit(line, 0.3, 0.105, 0.01)).toBe(true);
    expect(strokeHit(line, 0.3, 0.2, 0.01)).toBe(false);
    expect(strokeHit(line, 0.6, 0.1, 0.01)).toBe(false);
  });

  it('handles single dots', () => {
    expect(strokeHit({ ...line, points: [0.5, 0.5] }, 0.505, 0.5, 0.01)).toBe(true);
  });
});

describe('strokePath', () => {
  it('scales points to pixels', () => {
    expect(strokePath(line, 200, 100)).toBe('M20.0 10.0L100.0 10.0');
  });
});
