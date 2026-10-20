import { RadioGroup } from 'radix-ui';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Option<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
}

interface SegmentedControlProps<T extends string> {
  label: string;
  value: T;
  options: Option<T>[];
  onValueChange: (value: T) => void;
  className?: string;
  /** Show only the icons on narrow screens (labels stay available to screen readers). */
  compact?: boolean;
}

/** Single choice among a few options, keyboard navigable with the arrow keys. */
export function SegmentedControl<T extends string>({
  label,
  value,
  options,
  onValueChange,
  className,
  compact = false,
}: SegmentedControlProps<T>) {
  return (
    <RadioGroup.Root
      aria-label={label}
      value={value}
      onValueChange={(next) => onValueChange(next as T)}
      orientation="horizontal"
      className={cn(
        'inline-flex w-full flex-wrap gap-y-1 rounded-md border border-border bg-surface-muted p-1 sm:w-auto',
        className,
      )}
    >
      {options.map((option) => (
        <RadioGroup.Item
          key={option.value}
          value={option.value}
          className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-sm px-3 text-sm font-medium text-muted transition-colors hover:text-text data-[state=checked]:bg-surface data-[state=checked]:text-text data-[state=checked]:shadow-1 sm:flex-none [&_svg]:size-4"
        >
          {option.icon}
          <span className={compact && option.icon ? 'max-md:sr-only' : undefined}>
            {option.label}
          </span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
