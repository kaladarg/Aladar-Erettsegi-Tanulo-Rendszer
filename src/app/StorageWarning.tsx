import { TriangleAlert } from 'lucide-react';
import { t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';

export function StorageWarning() {
  const persistent = useSettings((state) => state.persistent);
  if (persistent) return null;
  return (
    <div
      role="alert"
      className="mb-6 flex gap-3 rounded-md border border-warning bg-warning-soft p-4"
    >
      <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-warning" />
      <div>
        <p className="font-semibold">{t('errors.storageTitle')}</p>
        <p className="text-sm">{t('errors.storageBody')}</p>
      </div>
    </div>
  );
}
