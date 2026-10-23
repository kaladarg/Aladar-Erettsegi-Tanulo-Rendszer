import { describe, expect, it } from 'vitest';
import type { StudyCard } from '@/content/cards/types';
import { checkTyped, gameItems, matchRound, quizQuestions, typeable } from './games';

const card = (id: string, deck: string, front: string, back: string, extra = {}): StudyCard =>
  ({
    id,
    subject: 'tortenelem',
    deck,
    era: 'okor',
    hungarian: true,
    front,
    back,
    ...extra,
  }) as StudyCard;

const years = Array.from({ length: 8 }, (_, i) =>
  card(`y${i}`, 'evszamok', `Esemény ${i}`, `${1000 + i}`),
);
const concepts = Array.from({ length: 5 }, (_, i) =>
  card(
    `c${i}`,
    'fogalmak',
    `Fogalom${i}`,
    `Egy hosszú meghatározás, amely sokkal hosszabb a fogalomnál, sorszáma ${i}, és még tovább tart.`,
  ),
);

describe('gameItems', () => {
  it('asks each deck from its longer side', () => {
    const items = gameItems([...years, ...concepts]);
    expect(items[0]).toMatchObject({ prompt: 'Esemény 0', answer: '1000' });
    expect(items[8]).toMatchObject({
      prompt: expect.stringContaining('meghatározás'),
      answer: 'Fogalom0',
    });
  });

  it('keeps the map as the question of place cards', () => {
    const place = card('p', 'topografia', 'Város a Duna mentén', 'Buda', {
      place: { lat: 47.5, lon: 19, view: 'hungary' },
    });
    expect(gameItems([place])[0]).toMatchObject({ prompt: 'Város a Duna mentén', answer: 'Buda' });
  });
});

describe('quizQuestions', () => {
  it('gives four different options including the answer', () => {
    const questions = quizQuestions(gameItems(years), 5, 3);
    expect(questions).toHaveLength(5);
    for (const q of questions) {
      expect(new Set(q.options).size).toBe(4);
      expect(q.options).toContain(q.item.answer);
    }
  });

  it('needs at least four different answers', () => {
    expect(quizQuestions(gameItems(years.slice(0, 3)), 5, 1)).toEqual([]);
  });
});

describe('matchRound', () => {
  it('takes six short pairs, or four when the texts are long', () => {
    expect(matchRound(gameItems(years), 1)).toHaveLength(6);
    expect(matchRound(gameItems(concepts), 1)).toHaveLength(4);
    expect(matchRound(gameItems(concepts.slice(0, 3)), 1)).toEqual([]);
  });
});

describe('checkTyped', () => {
  it('ignores case, accents, spaces and punctuation', () => {
    expect(checkTyped('i.e. 776', 'i. e. 776')).toBe('right');
    expect(checkTyped('mohacs', 'Mohács')).toBe('right');
    expect(checkTyped('Iliasz', 'Iliász (Homérosz)')).toBe('right');
    expect(checkTyped('verseny', 'verseny / küzdelem')).toBe('right');
  });

  it('accepts one wrong letter as a typo, but not in numbers', () => {
    expect(checkTyped('Mohásc', 'Mohács')).toBe('wrong');
    expect(checkTyped('Mohacz', 'Mohács')).toBe('typo');
    expect(checkTyped('1527', '1526')).toBe('wrong');
    expect(checkTyped('', '1526')).toBe('wrong');
  });

  it('only offers short answers for typing', () => {
    expect(typeable(gameItems(concepts))).toHaveLength(5);
    expect(typeable([{ id: 'x', prompt: 'p', answer: 'a'.repeat(41) }])).toHaveLength(0);
  });
});
