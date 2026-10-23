import type { StudyCard } from '@/content/cards/types';
import { keywordText } from '../scoring/normalize';
import { shuffle } from '../practice/topics';

/**
 * Games with study cards: a quiz with four options, matching pairs against
 * the clock, and typing the answer. Each card is asked from its longer side
 * and answered with its shorter side, decided per deck: a definition asks for
 * the concept, an event for its year, a map for the place. Recalling or
 * recognising the answer in varied ways is retrieval practice (Roediger &
 * Karpicke, 2006); the games do not change the cards' review schedule.
 */
export interface GameItem {
  id: string;
  prompt: string;
  answer: string;
  /** Place cards: the map is the question, `prompt` is the hint. */
  place?: StudyCard['place'];
  /** Language of the answer (English or German cards). */
  lang?: string;
}

const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)] ?? 0;
};

/** Cards as game items, asking each deck from its longer side. */
export function gameItems(cards: StudyCard[], lang?: string): GameItem[] {
  const byDeck = new Map<string, StudyCard[]>();
  for (const card of cards) byDeck.set(card.deck, [...(byDeck.get(card.deck) ?? []), card]);
  const reversed = new Set(
    [...byDeck]
      .filter(
        ([, deck]) =>
          median(deck.map((c) => c.back.length)) > median(deck.map((c) => c.front.length)),
      )
      .map(([deck]) => deck),
  );
  return cards.map((card) =>
    card.place || !reversed.has(card.deck)
      ? { id: card.id, prompt: card.front, answer: card.back, place: card.place, lang }
      : { id: card.id, prompt: card.back, answer: card.front },
  );
}

export interface QuizQuestion {
  item: GameItem;
  options: string[];
}

/** Up to `count` questions with four different options from the same set. */
export function quizQuestions(items: GameItem[], count: number, seed: number): QuizQuestion[] {
  const answers = [...new Set(items.map((i) => i.answer))];
  if (answers.length < 4) return [];
  return shuffle(items, seed)
    .slice(0, count)
    .map((item, index) => {
      const wrong = shuffle(
        answers.filter((a) => a !== item.answer),
        seed + index + 1,
      ).slice(0, 3);
      return { item, options: shuffle([item.answer, ...wrong], seed * 7 + index) };
    });
}

/** Both sides fit a tile. */
const SHORT = 60;
export const MATCH_PAIRS = { short: 6, long: 4 } as const;

/**
 * Pairs for one matching round: six when both sides are short, otherwise
 * four, so long definitions stay readable. Map cards are matched by their hint.
 */
export function matchRound(items: GameItem[], seed: number): GameItem[] {
  const usable = items.filter(
    (i, index, all) => all.findIndex((other) => other.answer === i.answer) === index,
  );
  const short = usable.filter((i) => i.prompt.length <= SHORT && i.answer.length <= SHORT);
  const pool = short.length >= MATCH_PAIRS.short ? short : usable;
  const size = pool === short ? MATCH_PAIRS.short : MATCH_PAIRS.long;
  return pool.length >= size ? shuffle(pool, seed).slice(0, size) : [];
}

/** Answers short enough to type. */
export const TYPEABLE = 40;
export const typeable = (items: GameItem[]) => items.filter((i) => i.answer.length <= TYPEABLE);

export type TypedResult = 'right' | 'typo' | 'wrong';

/** Accepted forms of an answer: the whole, each "/" alternative, and the part before "(". */
function variants(answer: string): string[] {
  const parts = answer.split('/').map((p) => p.trim());
  const forms = [answer, ...parts, ...parts.map((p) => p.replace(/\s*\(.*\)\s*$/, ''))];
  return [...new Set(forms.map(compact).filter(Boolean))];
}

/** Letters and digits only, lower case, no accents: "i. e. 776" → "ie776". */
const compact = (text: string) => keywordText(text).replace(/ /g, '');

function distance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0]!;
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const current = row[j]!;
      row[j] = Math.min(row[j]! + 1, row[j - 1]! + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = current;
    }
  }
  return row[b.length]!;
}

/**
 * Checks a typed answer leniently: case, accents, spaces and punctuation do
 * not count; one wrong letter in a longer word counts as a typo.
 */
export function checkTyped(typed: string, answer: string): TypedResult {
  const given = compact(typed);
  if (!given) return 'wrong';
  const forms = variants(answer);
  if (forms.includes(given)) return 'right';
  // Numbers (years) must be exact.
  if (/\d/.test(given)) return 'wrong';
  return forms.some((form) => form.length >= 5 && distance(given, form) <= 1) ? 'typo' : 'wrong';
}
