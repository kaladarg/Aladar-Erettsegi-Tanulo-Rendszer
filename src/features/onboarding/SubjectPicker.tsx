import { Check } from 'lucide-react';
import { DEFAULT_SUBJECTS } from '@/content/catalog';
import { SubjectBadge } from '@/content/SubjectIcon';
import { cn } from '@/lib/cn';

interface SubjectPickerProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  legend: string;
  hideLegend?: boolean;
}

/** Multi-select of subjects as large, tappable checkbox cards. */
export function SubjectPicker({ selected, onChange, legend, hideLegend }: SubjectPickerProps) {
  const toggle = (id: string) =>
    onChange(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]);

  return (
    <fieldset>
      <legend className={cn('mb-3 font-medium', hideLegend && 'sr-only')}>{legend}</legend>
      <div className="grid gap-3">
        {DEFAULT_SUBJECTS.map((subject) => {
          const checked = selected.includes(subject.id);
          return (
            <label
              key={subject.id}
              className={cn(
                'group flex min-h-16 cursor-pointer items-center gap-4 rounded-lg border-2 bg-surface px-4 py-3 transition-colors active:scale-[0.99] has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus',
                checked
                  ? 'border-primary bg-primary-soft/40'
                  : 'border-border hover:border-border-strong',
              )}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => toggle(subject.id)}
              />
              <SubjectBadge subject={subject} size="sm" />
              <span className="flex-1 font-medium">{subject.name}</span>
              <span
                aria-hidden="true"
                className={cn(
                  'flex size-6 items-center justify-center rounded-sm border-2',
                  'transition-colors duration-(--motion-fast)',
                  checked ? 'border-primary bg-primary text-primary-fg' : 'border-border-strong',
                )}
              >
                {checked && <Check className="size-4 animate-pop-in" />}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
