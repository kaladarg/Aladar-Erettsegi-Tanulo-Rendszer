import { ExternalLink } from 'lucide-react';
import { resourcesFor, type Resource } from '@/help/resources';
import { t } from '@/i18n';

function SiteList({ title, sites }: { title: string; sites: Resource[] }) {
  if (sites.length === 0) return null;
  return (
    <section className="grid gap-2">
      <h3 className="text-sm font-semibold text-muted">{title}</h3>
      <ul className="grid gap-2">
        {sites.map((site) => (
          <li key={site.id} className="rounded-md border border-border p-3">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4"
            >
              {t(`help.resources.${site.id}.name`)}
              <ExternalLink aria-hidden="true" className="size-3.5" />
              <span className="sr-only"> {t('common.newTab')}</span>
            </a>
            <p className="mt-1 text-sm">{t(`help.resources.${site.id}.description`)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Free Hungarian learning sites for the exam's subject. */
export function SitesPanel({ subject }: { subject: string }) {
  const sites = resourcesFor(subject);
  return (
    <div className="grid gap-4">
      <p className="text-sm">{t('help.sitesIntro')}</p>
      <SiteList
        title={t('help.sitesSubject')}
        sites={sites.filter((s) => !s.subjects.includes('all'))}
      />
      <SiteList
        title={t('help.sitesGeneral')}
        sites={sites.filter((s) => s.subjects.includes('all'))}
      />
    </div>
  );
}
