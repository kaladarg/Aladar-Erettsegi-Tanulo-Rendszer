import { X } from 'lucide-react';
import { Toast } from 'radix-ui';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useToasts } from '@/state/toastStore';
import { buttonVariants } from './buttonVariants';

/** Renders queued toasts. Announced politely to screen readers by Radix. */
export function Toaster() {
  const toasts = useToasts((state) => state.toasts);
  const dismiss = useToasts((state) => state.dismiss);

  return (
    <Toast.Provider swipeDirection="down" label={t('common.notifications')}>
      {toasts.map((item) => (
        <Toast.Root
          key={item.id}
          duration={item.duration}
          onOpenChange={(open) => !open && dismiss(item.id)}
          className={cn(
            'flex items-center gap-3 rounded-md border bg-surface p-3 pl-4 shadow-3 motion-safe:animate-[toast-in_var(--motion-base)_var(--ease-out)]',
            item.tone === 'danger' && 'border-danger',
            item.tone === 'success' && 'border-success',
            item.tone === 'neutral' && 'border-border',
          )}
        >
          <Toast.Description className="flex-1 text-sm">{item.message}</Toast.Description>
          {item.action && (
            <Toast.Action
              altText={item.action.label}
              className={buttonVariants({ variant: 'secondary', size: 'sm' })}
              onClick={item.action.onAction}
            >
              {item.action.label}
            </Toast.Action>
          )}
          <Toast.Close
            aria-label={t('common.close')}
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          >
            <X aria-hidden="true" />
          </Toast.Close>
        </Toast.Root>
      ))}
      <Toast.Viewport className="fixed right-0 bottom-20 left-0 z-50 mx-auto flex w-full max-w-md flex-col gap-2 p-4 outline-none md:right-4 md:bottom-4 md:left-auto" />
    </Toast.Provider>
  );
}
