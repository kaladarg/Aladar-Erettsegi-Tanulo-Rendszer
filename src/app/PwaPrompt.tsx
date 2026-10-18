import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { t } from '@/i18n';
import { toast } from '@/state/toastStore';

/** Registers the service worker and tells the student about offline/update state. */
export function PwaPrompt() {
  const {
    offlineReady: [offlineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  useEffect(() => {
    if (offlineReady) toast({ message: t('pwa.offlineReady'), tone: 'success' });
  }, [offlineReady]);

  useEffect(() => {
    if (!needRefresh) return;
    toast({
      message: t('pwa.updateAvailable'),
      duration: Infinity,
      action: { label: t('pwa.reload'), onAction: () => void updateServiceWorker(true) },
    });
  }, [needRefresh, updateServiceWorker]);

  return null;
}
