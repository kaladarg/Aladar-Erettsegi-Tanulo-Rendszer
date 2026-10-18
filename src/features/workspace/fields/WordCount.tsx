import { countWords } from '@/domain/text';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import type { Task } from '@/content/schema.types';

export function WordCount({
  text,
  limit,
  className,
  id,
}: {
  text: string;
  limit?: Task['wordLimit'];
  className?: string;
  id?: string;
}) {
  const count = countWords(text);
  const { min, max } = limit ?? {};
  const label =
    min && max
      ? t('workspace.wordsRange', { count, min, max })
      : min
        ? t('workspace.wordsMin', { count, min })
        : max
          ? t('workspace.wordsMax', { count, max })
          : t('workspace.words', { count });
  const ok = (!min || count >= min) && (!max || count <= max);
  return (
    <p
      id={id}
      aria-live="polite"
      className={cn(
        'text-sm font-medium tabular-nums',
        ok && (min || max) ? 'text-success' : 'text-muted',
        className,
      )}
    >
      {label}
    </p>
  );
}
