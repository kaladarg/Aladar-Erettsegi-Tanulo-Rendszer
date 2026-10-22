/**
 * Subjects and levels are data, not code. This built-in catalog is the
 * fallback until a content pack manifest provides its own list, so adding a
 * subject or level never requires touching UI components.
 */
export interface SubjectInfo {
  id: string;
  name: string;
  /** Lucide icon key, resolved in SubjectIcon. */
  icon: 'sigma' | 'landmark' | 'book-open' | 'book' | 'languages' | 'globe';
}

export interface LevelInfo {
  id: string;
  name: string;
}

export const DEFAULT_SUBJECTS: SubjectInfo[] = [
  { id: 'matematika', name: 'Matematika', icon: 'sigma' },
  { id: 'tortenelem', name: 'Történelem', icon: 'landmark' },
  { id: 'magyar', name: 'Magyar nyelv és irodalom', icon: 'book-open' },
  { id: 'angol', name: 'Angol nyelv', icon: 'languages' },
  { id: 'nemet', name: 'Német nyelv', icon: 'languages' },
  { id: 'foldrajz', name: 'Földrajz', icon: 'globe' },
];

export const DEFAULT_LEVELS: LevelInfo[] = [{ id: 'kozep', name: 'Középszint' }];

export function findSubject(id: string, subjects = DEFAULT_SUBJECTS): SubjectInfo | undefined {
  return subjects.find((subject) => subject.id === id);
}

const SHORT_NAMES: Record<string, string> = {
  magyar: 'Magyar',
  angol: 'Angol',
  nemet: 'Német',
};

/** Compact name for subject switchers ("Magyar" for "Magyar nyelv és irodalom"). */
export const subjectShortName = (subject: { id: string; name: string }) =>
  SHORT_NAMES[subject.id] ?? subject.name;

/** Accent color utility per subject; unknown subjects fall back to the brand color. */
export function subjectAccent(id: string): string {
  switch (id) {
    case 'matematika':
      return 'text-subject-matematika';
    case 'tortenelem':
      return 'text-subject-tortenelem';
    case 'magyar':
      return 'text-subject-magyar';
    case 'angol':
      return 'text-subject-angol';
    case 'nemet':
      return 'text-subject-nemet';
    case 'foldrajz':
      return 'text-subject-foldrajz';
    default:
      return 'text-primary';
  }
}
