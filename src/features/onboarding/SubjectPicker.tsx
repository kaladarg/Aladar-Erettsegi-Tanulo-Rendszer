import { Check } from 'lucide-react';
import { DEFAULT_SUBJECTS, subjectAccent } from '@/content/catalog';
import { SubjectIcon } from '@/content/SubjectIcon';
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
                'flex min-h-16 cursor-pointer items-center gap-4 rounded-md border-2 bg-surface px-4 py-3 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus',
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
              <SubjectIcon
                subject={subject}
                className={cn('size-7 shrink-0', subjectAccent(subject.id))}
              />
              <span className="flex-1 font-medium">{subject.name}</span>
              <span
                aria-hidden="true"
                className={cn(
                  'flex size-6 items-center justify-center rounded-sm border-2',
                  checked ? 'border-primary bg-primary text-primary-fg' : 'border-border-strong',
                )}
              >
                {checked && <Check className="size-4" />}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
