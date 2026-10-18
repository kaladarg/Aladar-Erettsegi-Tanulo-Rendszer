import { Book, BookOpen, Landmark, Sigma } from 'lucide-react';
import type { SubjectInfo } from './catalog';

const icons = { sigma: Sigma, landmark: Landmark, 'book-open': BookOpen, book: Book };

export function SubjectIcon({ subject, className }: { subject: SubjectInfo; className?: string }) {
  const Icon = icons[subject.icon] ?? Book;
  return <Icon aria-hidden="true" className={className} />;
}
