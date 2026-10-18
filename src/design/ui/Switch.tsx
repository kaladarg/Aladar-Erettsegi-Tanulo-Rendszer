import { Switch as RadixSwitch } from 'radix-ui';
import { useId } from 'react';

interface SwitchFieldProps {
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

/** A labelled toggle row. The whole row is clickable through the label. */
export function SwitchField({ label, description, checked, onCheckedChange }: SwitchFieldProps) {
  const id = useId();
  const descriptionId = `${id}-description`;
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="min-w-0">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        {description && (
          <p id={descriptionId} className="text-sm text-muted">
            {description}
          </p>
        )}
      </div>
      <RadixSwitch.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-describedby={description ? descriptionId : undefined}
        className="relative mt-0.5 inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-border-strong bg-surface-muted transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary"
      >
        <RadixSwitch.Thumb className="block size-5 translate-x-0.5 rounded-full bg-text shadow-1 transition-transform data-[state=checked]:translate-x-[1.375rem] data-[state=checked]:bg-primary-fg" />
      </RadixSwitch.Root>
    </div>
  );
}
