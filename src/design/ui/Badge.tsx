import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium [&_svg]:size-3.5',
  {
    variants: {
      tone: {
        neutral: 'bg-surface-muted text-text',
        primary: 'bg-primary-soft text-primary-soft-fg',
        success: 'bg-success-soft text-text',
        warning: 'bg-warning-soft text-text',
        danger: 'bg-danger-soft text-text',
        info: 'bg-info-soft text-text',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
