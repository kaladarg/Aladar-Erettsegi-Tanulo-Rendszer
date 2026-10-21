import { Book, BookOpen, Landmark, Languages, Sigma } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { SubjectInfo } from './catalog';

const icons = {
  sigma: Sigma,
  landmark: Landmark,
  'book-open': BookOpen,
  book: Book,
  languages: Languages,
};

export function SubjectIcon({ subject, className }: { subject: SubjectInfo; className?: string }) {
  const Icon = icons[subject.icon] ?? Book;
  return <Icon aria-hidden="true" className={className} />;
}

/** Tinted backgrounds per subject: soft in light mode, deep in dark mode. */
const BADGE: Record<string, string> = {
  matematika: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  tortenelem: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  magyar: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
  angol: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
  nemet: 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300',
};

/** The subject's icon on a rounded, tinted square that tilts playfully on hover. */
export function SubjectBadge({
  subject,
  size = 'md',
}: {
  subject: SubjectInfo;
  size?: 'sm' | 'md';
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex shrink-0 items-center justify-center rounded-lg transition-transform duration-(--motion-base) ease-(--ease-spring) group-hover:scale-110 group-hover:-rotate-6',
        size === 'md' ? 'size-12 [&_svg]:size-6' : 'size-9 [&_svg]:size-5',
        BADGE[subject.id] ?? 'bg-primary-soft text-primary-soft-fg',
      )}
    >
      <SubjectIcon subject={subject} />
    </span>
  );
}
