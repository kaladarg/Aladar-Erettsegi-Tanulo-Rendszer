import { describe, expect, it } from 'vitest';
import { BUILTIN_ORAL_TOPICS, ORAL_TOPIC_SUBJECTS, topicInLevel } from './oralTopics';

describe('built-in oral topics', () => {
  it('have unique ids', () => {
    const ids = BUILTIN_ORAL_TOPICS.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('offer topics at both levels for every subject', () => {
    for (const subject of ORAL_TOPIC_SUBJECTS) {
      for (const level of ['kozep', 'emelt'] as const) {
        const list = BUILTIN_ORAL_TOPICS.filter(
          (b) => b.subject === subject && topicInLevel(b, level),
        );
        expect(list.length, `${subject} ${level}`).toBeGreaterThan(5);
      }
    }
  });

  it('keeps emelt-only topics out of középszint and the other way round', () => {
    const emeltOnly = BUILTIN_ORAL_TOPICS.filter((b) => b.level === 'emelt');
    expect(emeltOnly.every((b) => b.id.includes('-emelt-'))).toBe(true);
    expect(emeltOnly.some((b) => topicInLevel(b, 'kozep'))).toBe(false);
    const dualizmus = BUILTIN_ORAL_TOPICS.find((b) => b.id === 'tortenelem-dualizmus')!;
    expect(topicInLevel(dualizmus, 'kozep')).toBe(true);
    expect(topicInLevel(dualizmus, 'emelt')).toBe(false);
  });

  it('shares the magyar topics between levels', () => {
    const petofi = BUILTIN_ORAL_TOPICS.find((b) => b.id === 'magyar-eletmu-petofi')!;
    expect(topicInLevel(petofi, 'kozep') && topicInLevel(petofi, 'emelt')).toBe(true);
  });
});
