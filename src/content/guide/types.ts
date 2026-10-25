/**
 * Study guide ("Tananyag"): self-written pages that teach a topic of the exam
 * requirements at three depths. Text uses the content-pack rich text markup
 * (**bold**, *italic*, $LaTeX$, "- " lists). Review status: draft, until a
 * teacher checks the pages.
 */
import type { CardFilter } from '@/content/cards';

export type GuideSubject = 'tortenelem' | 'matematika';
/** Where a page or a block belongs: középszint material, emelt only, or both levels. */
export type GuideLevel = 'kozep' | 'emelt' | 'both';

/** Blocks marked `emelt` are emelt-only material inside a page. */
interface Leveled {
  emelt?: boolean;
}

export type GuideBlock =
  | ({ kind: 'text'; text: string } & Leveled)
  | ({ kind: 'heading'; text: string } & Leveled)
  | ({ kind: 'keypoints'; title?: string; items: string[] } & Leveled)
  | ({ kind: 'timeline'; items: ({ date: string; text: string } & Leveled)[] } & Leveled)
  | ({ kind: 'terms'; items: ({ term: string; text: string } & Leveled)[] } & Leveled)
  | ({ kind: 'people'; items: ({ name: string; text: string } & Leveled)[] } & Leveled)
  | ({
      kind: 'map';
      title: string;
      places: ({ name: string; lat: number; lon: number; note?: string } & Leveled)[];
    } & Leveled)
  | ({
      kind: 'compare';
      title?: string;
      columns: [string, string];
      rows: { label: string; cells: [string, string] }[];
    } & Leveled)
  | ({ kind: 'formula'; tex: string; caption?: string } & Leveled)
  | ({
      kind: 'plot';
      title: string;
      x: [number, number];
      y: [number, number];
      functions: { label: string; fn: (x: number) => number }[];
      points?: { x: number; y: number; label: string }[];
    } & Leveled)
  | ({ kind: 'example'; title: string; problem: string; solution: string } & Leveled)
  | ({ kind: 'tip'; text: string } & Leveled)
  | ({ kind: 'warning'; text: string } & Leveled);

export interface QuizQuestion extends Leveled {
  question: string;
  options: string[];
  /** Index of the correct option. */
  answer: number;
  explanation: string;
}

/** The exam requirements of a topic, as the official list gives them. */
export interface RequirementList {
  terms: { kozep: string[]; emelt: string[] };
  people: { kozep: string[]; emelt: string[] };
  dates: { kozep: string[]; emelt: string[] };
  places: { kozep: string[]; emelt: string[] };
}

export interface GuidePage {
  /** Stable id: never reuse one for a different page. */
  id: string;
  subject: GuideSubject;
  unitId: string;
  title: string;
  level: GuideLevel;
  /** The topic as worded in the exam requirements, per level. */
  requirement: { kozep?: string; emelt?: string };
  minutes: number;
  /** "Gyorsan": what to know in five minutes. */
  summary: GuideBlock[];
  /** "Részletesen": causes, events, connections. */
  details: GuideBlock[];
  /** "A vizsgán": how the topic is asked, typical mistakes. */
  exam: GuideBlock[];
  /**
   * Topic names of the papers' tasks that belong to this page: case-insensitive
   * substrings, or a whole topic name after "=" (so "=szabadságharc" leaves out
   * the Rákóczi-szabadságharc).
   */
  topicMatch: string[];
  cards?: CardFilter;
  quiz: QuizQuestion[];
  sources: { label: string; url: string }[];
}

export interface GuideUnit {
  id: string;
  subject: GuideSubject;
  title: string;
  /** The requirement topics the unit covers, e.g. "4.3–4.4". */
  requirementRef: string;
  intro: string;
  requirements?: RequirementList;
  /** Where the unit's requirements come from, shown to the student. */
  requirementSource: string;
  pages: GuidePage[];
}
