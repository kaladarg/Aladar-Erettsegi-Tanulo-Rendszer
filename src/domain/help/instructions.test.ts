import { describe, expect, it } from 'vitest';
import { hu } from '@/i18n/hu';
import { INSTRUCTION_PATTERNS, instructionsIn } from './instructions';

describe('instructionsIn', () => {
  it('finds the instruction words of a task in order', () => {
    expect(
      instructionsIn('Karikázza be a helyes válasz sorszámát, majd indokolja a választását!'),
    ).toEqual(['circle', 'justify']);
    expect(instructionsIn('Nevezze meg azt a nagyhatalmat, amelyikről a forrás szól!')).toEqual([
      'name',
    ]);
    expect(instructionsIn('Számítsa ki a tízszög területét! Megoldását részletezze!')).toEqual([
      'calculate',
      'detail',
    ]);
  });

  it('matches whole words only', () => {
    expect(instructionsIn('A megnevezett személy')).toEqual([]);
  });

  it('has a label and meaning for every instruction', () => {
    for (const id of Object.keys(INSTRUCTION_PATTERNS)) {
      const entry = hu.help.instructions[id as keyof typeof hu.help.instructions];
      expect(entry.label.length, id).toBeGreaterThan(0);
      expect(entry.meaning.length, id).toBeGreaterThan(20);
    }
  });
});
