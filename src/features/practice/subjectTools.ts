/** Practice tools that belong to some subjects only, to put them first for those students. */
export const SUBJECT_TOOLS = {
  essay: ['tortenelem', 'magyar'],
  probability: ['matematika'],
  oral: ['tortenelem', 'magyar', 'angol', 'nemet', 'foldrajz'],
} as const;

export type SubjectTool = keyof typeof SUBJECT_TOOLS;

/** Is the tool meant for one of the student's subjects? Everything is, before they choose. */
export function fitsSubjects(tool: SubjectTool, subjects: string[]): boolean {
  return (
    subjects.length === 0 ||
    SUBJECT_TOOLS[tool].some((subject) => (subjects as string[]).includes(subject))
  );
}
