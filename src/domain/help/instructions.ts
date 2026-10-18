/**
 * Instruction words of érettségi tasks ("Nevezze meg", "Indokolja"). Students
 * lose many points by answering a different question than the one the verb
 * sets, so the help panel explains the verbs a task uses. Labels and meanings
 * live in i18n under `help.instructions.<id>`.
 */
export const INSTRUCTION_PATTERNS = {
  name: 'nevezze meg|nevezzen meg',
  circle: 'karikázza be',
  explain: 'magyarázza meg|magyarázza',
  justify: 'indokolja|indokolja meg|indoklás',
  formulate: 'fogalmazza meg|fogalmazzon meg',
  order: 'állítsa időrendbe|tegye időrendbe|állítsa sorrendbe|időrendbe',
  present: 'mutassa be',
  calculate: 'számítsa ki|számolja ki',
  detail: 'részletezze',
  prove: 'igazolja|bizonyítsa',
  determine: 'határozza meg',
  give: 'adja meg',
  decide: 'döntse el|állapítsa meg',
  quote: 'idézzen|idézze',
  interpret: 'értelmezze',
  compare: 'vesse össze|hasonlítsa össze',
  characterize: 'jellemezze',
  complete: 'egészítse ki|töltse ki',
  mark: 'tegyen x-et|jelölje x-szel|jelölje',
  write: 'írja a|írja be|írjon',
  draw: 'ábrázolja|rajzoljon|rajzolja',
  choose: 'válassza ki|válasszon',
} as const;

export type InstructionId = keyof typeof INSTRUCTION_PATTERNS;

const compiled = (Object.keys(INSTRUCTION_PATTERNS) as InstructionId[]).map((id) => ({
  id,
  pattern: new RegExp(`(^|[^\\p{L}])(${INSTRUCTION_PATTERNS[id]})`, 'iu'),
}));

/** The instruction words a task text uses, in order of first appearance. */
export function instructionsIn(text: string): InstructionId[] {
  return compiled
    .map(({ id, pattern }) => ({ id, index: text.search(pattern) }))
    .filter((match) => match.index >= 0)
    .sort((a, b) => a.index - b.index)
    .map((match) => match.id);
}
