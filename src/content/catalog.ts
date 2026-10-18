/**
 * Subjects and levels are data, not code. This built-in catalog is the
 * fallback until a content pack manifest provides its own list, so adding a
 * subject or level never requires touching UI components.
 */
export interface SubjectInfo {
  id: string;
  name: string;
  /** Lucide icon key, resolved in SubjectIcon. */
  icon: 'sigma' | 'landmark' | 'book-open' | 'book';
}

export interface LevelInfo {
  id: string;
  name: string;
}

export const DEFAULT_SUBJECTS: SubjectInfo[] = [
  { id: 'matematika', name: 'Matematika', icon: 'sigma' },
  { id: 'tortenelem', name: 'Történelem', icon: 'landmark' },
  { id: 'magyar', name: 'Magyar nyelv és irodalom', icon: 'book-open' },
];

export const DEFAULT_LEVELS: LevelInfo[] = [{ id: 'kozep', name: 'Középszint' }];

export function findSubject(id: string, subjects = DEFAULT_SUBJECTS): SubjectInfo | undefined {
  return subjects.find((subject) => subject.id === id);
}

/** Accent color utility per subject; unknown subjects fall back to the brand color. */
export function subjectAccent(id: string): string {
  switch (id) {
    case 'matematika':
      return 'text-subject-matematika';
    case 'tortenelem':
      return 'text-subject-tortenelem';
    case 'magyar':
      return 'text-subject-magyar';
    default:
      return 'text-primary';
  }
}
