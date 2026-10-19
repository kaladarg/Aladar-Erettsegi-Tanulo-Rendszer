import { describe, expect, it } from 'vitest';
import {
  assignmentId,
  decodeAssignment,
  decodeResult,
  encodeAssignment,
  encodeResult,
  findResults,
  type Assignment,
} from './link';

const assignment: Assignment = {
  title: 'Függvények – 11.B, hétfőig',
  subject: 'matematika',
  note: 'Írd le a számolást is!',
  items: [
    { examId: 'matematika-kozep-2024-majus', taskId: '3' },
    { examId: 'matematika-kozep-2024-majus', taskId: '15a' },
    { examId: 'matematika-kozep-2025-majus', taskId: '2' },
  ],
};

describe('assignment links', () => {
  it('round-trips through a URL-safe code', () => {
    const code = encodeAssignment(assignment);
    expect(code).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(decodeAssignment(code)).toEqual(assignment);
  });

  it('rejects damaged or unknown codes', () => {
    expect(decodeAssignment('nonsense')).toBeNull();
    expect(decodeAssignment(encodeAssignment({ ...assignment, items: [] }))).toBeNull();
    const code = encodeAssignment(assignment);
    expect(decodeAssignment(code.slice(0, -6))).toBeNull();
  });

  it('gives a stable fingerprint', () => {
    const code = encodeAssignment(assignment);
    expect(assignmentId(code)).toBe(assignmentId(code));
    expect(assignmentId(code)).not.toBe(
      assignmentId(encodeAssignment({ ...assignment, title: 'x' })),
    );
  });
});

describe('result codes', () => {
  const result = {
    assignment: 'abc123',
    name: 'Kiss Anna',
    points: [2, null, 1],
    maxPoints: [2, 3, 4],
    pending: [0, 0, 2],
    finishedAt: 1_790_000_000_000,
  };

  it('round-trips and is found in pasted text', () => {
    const code = encodeResult(result);
    expect(decodeResult(code)).toEqual(result);
    const pasted = `Anna: ${code}\nhello\n${encodeResult({ ...result, name: 'Nagy Béla' })}`;
    expect(findResults(pasted).map((r) => r.name)).toEqual(['Kiss Anna', 'Nagy Béla']);
  });

  it('rejects malformed codes', () => {
    expect(decodeResult('EGY1.abc.e30')).toBeNull();
    expect(decodeResult('hello')).toBeNull();
  });
});
