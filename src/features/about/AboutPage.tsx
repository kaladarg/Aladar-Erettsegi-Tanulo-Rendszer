import { Bug, Code, ExternalLink, Heart, Scale, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';
import { APP_VERSION, ISSUES_URL, OFFICIAL_ARCHIVE_URL, REPO_URL } from '@/app/config';
import { usePageTitle } from '@/app/usePageTitle';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import { t } from '@/i18n';

export function AboutPage() {
  usePageTitle(t('about.title'));
  return (
    <>
      <PageHeader title={t('about.title')} description={t('about.intro')} />
      <div className="grid gap-6 sm:grid-cols-2">
        <Section
          icon={<Code />}
          title={t('about.openSourceTitle')}
          body={t('about.openSourceBody')}
        >
          <ExternalAnchor href={REPO_URL}>{t('about.sourceLink')}</ExternalAnchor>
        </Section>
        <Section icon={<Scale />} title={t('about.contentTitle')} body={t('about.contentBody')}>
          <ExternalAnchor href={OFFICIAL_ARCHIVE_URL}>{t('about.officialLink')}</ExternalAnchor>
        </Section>
        <Section
          icon={<ShieldCheck />}
          title={t('about.privacyTitle')}
          body={t('about.privacyBody')}
        />
        <Section icon={<Heart />} title={t('about.creditsTitle')} body={t('about.creditsBody')} />
      </div>
      <div className="mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{t('about.version', { version: APP_VERSION })}</p>
        <ExternalAnchor href={ISSUES_URL} icon={<Bug aria-hidden="true" className="size-4" />}>
          {t('about.reportBug')}
        </ExternalAnchor>
      </div>
    </>
  );
}

function Section({
  icon,
  title,
  body,
  children,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <Card>
      <span
        aria-hidden="true"
        className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary-soft text-primary-soft-fg [&_svg]:size-5"
      >
        {icon}
      </span>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{body}</CardDescription>
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}

function ExternalAnchor({
  href,
  children,
  icon,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 hover:text-primary-hover"
    >
      {icon}
      {children}
      <ExternalLink aria-hidden="true" className="size-4" />
      <span className="sr-only"> {t('common.newTab')}</span>
    </a>
  );
}
