import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { t } from '@/i18n';

/** Link back to the practice hub, above a practice sub-page. */
export function BackLink() {
  return (
    <Link
      to="/gyakorlas"
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
    >
      <ArrowLeft aria-hidden="true" className="size-4" />
      {t('practice.backToHub')}
    </Link>
  );
}
