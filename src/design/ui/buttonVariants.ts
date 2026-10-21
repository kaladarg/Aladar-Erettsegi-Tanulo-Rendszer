import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-(--motion-fast) ease-(--ease-out) select-none active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-fg shadow-1 hover:bg-primary-hover hover:shadow-primary',
        secondary:
          'border border-border bg-surface text-text shadow-1 hover:border-border-strong hover:bg-surface-muted',
        ghost: 'text-text hover:bg-surface-muted',
        danger: 'bg-danger text-danger-fg shadow-1 hover:opacity-90',
        link: 'min-h-0 px-0 text-primary underline underline-offset-4 hover:text-primary-hover',
      },
      size: {
        sm: 'min-h-9 px-3 text-sm',
        md: 'px-4 text-base',
        lg: 'min-h-12 px-6 text-lg',
        icon: 'size-11 p-0',
      },
    },
    compoundVariants: [{ variant: 'link', className: 'px-0' }],
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);
