import { useEffect } from 'react';
import { t } from '@/i18n';

export function usePageTitle(page: string): void {
  useEffect(() => {
    document.title = t('pageTitle', { page });
  }, [page]);
}
