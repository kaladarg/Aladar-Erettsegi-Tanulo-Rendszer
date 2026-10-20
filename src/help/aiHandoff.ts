import type { Exam, SourceMaterial, Task } from '@/content/schema.types';

/**
 * Hand-off to free AI chat services: the app prepares a prompt, the student
 * pastes it into the service of their choice. No API key is needed and the app
 * sends nothing itself; each service's own terms (including age limits) apply.
 */
export const AI_CHATS = [
  { id: 'gemini', name: 'Google Gemini', url: 'https://gemini.google.com/app' },
  { id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com/' },
  { id: 'copilot', name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/' },
  { id: 'claude', name: 'Claude', url: 'https://claude.ai/new' },
] as const;

const SUBJECT_NAMES: Record<string, string> = {
  matematika: 'matematika',
  tortenelem: 'történelem',
  magyar: 'magyar nyelv és irodalom',
  angol: 'angol nyelv',
  nemet: 'német nyelv',
};

/** For English or German papers: the student writes in that language, help comes in Hungarian. */
const languageNote = (exam: Exam) =>
  exam.language && exam.language !== 'hu'
    ? ` A feladat ${exam.language === 'de' ? 'német' : 'angol'} nyelvű, B1 szintű; a hibáimat az eredeti nyelven idézd, a magyarázatot magyarul írd.`
    : '';

function sources(exam: Exam, task: Task): string {
  const byId = new Map<string, SourceMaterial>((exam.sources ?? []).map((s) => [s.id, s]));
  return (task.sourceRefs ?? [])
    .map((id) => byId.get(id))
    .filter((s): s is SourceMaterial => !!s && !!s.text)
    .map((s) => `${s.title ? `${s.title}:\n` : ''}${s.text}`)
    .join('\n\n');
}

/** The prompt a student pastes into a free AI chat to get tutoring on a task. */
export function tutorHandoffPrompt(
  exam: Exam,
  task: Task,
  options: { question?: string; answer?: string } = {},
): string {
  const parts = [
    `Középszintű érettségire készülök ${SUBJECT_NAMES[exam.subject] ?? exam.subject} tárgyból, egy korábbi feladatsorból (${exam.title}) gyakorolok.${languageNote(exam)}`,
    'Segíts megérteni az alábbi feladatot: magyarázd el, mit kér, milyen ismeretek kellenek hozzá, és hogyan fogjak hozzá. A megoldást ne mondd meg, csak ha külön kérem. Válaszolj magyarul, röviden és érthetően.',
    `A feladat (${task.number}, ${task.maxPoints} pont):\n${task.text}`,
  ];
  const src = sources(exam, task);
  if (src) parts.push(`A feladathoz tartozó források:\n${src}`);
  if (options.answer) parts.push(`Az eddigi válaszom:\n${options.answer}`);
  parts.push(
    `Kérdésem: ${options.question?.trim() || 'Mit kér ez a feladat, és hogyan kezdjek hozzá?'}`,
  );
  return parts.join('\n\n');
}

/** The prompt for rubric-based feedback on an essay, for a free AI chat. */
export function essayHandoffPrompt(exam: Exam, task: Task, essay: string): string {
  const criteria = (task.scoring.criteria ?? [])
    .map((c) => {
      const levels = (c.levels ?? [])
        .map((l) => `   - ${l.points} pont: ${l.description}`)
        .join('\n');
      return `- ${c.label} (legfeljebb ${c.maxPoints} pont)${c.description ? `: ${c.description}` : ''}${levels ? `\n${levels}` : ''}`;
    })
    .join('\n');
  return [
    `Középszintű érettségire készülök ${SUBJECT_NAMES[exam.subject] ?? exam.subject} tárgyból. Az alábbi esszémet a hivatalos javítási-értékelési útmutató szempontjai szerint értékeld: minden szempontnál adj pontszámot és rövid indoklást, a végén pedig két-három konkrét tanácsot, hogyan javíthatnék rajta. Válaszolj magyarul.${languageNote(exam)}`,
    `A feladat:\n${task.text}`,
    sources(exam, task) ? `Források:\n${sources(exam, task)}` : '',
    `Értékelési szempontok:\n${criteria}`,
    `Az esszém:\n${essay}`,
  ]
    .filter(Boolean)
    .join('\n\n');
}
