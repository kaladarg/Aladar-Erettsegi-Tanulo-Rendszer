import { APP_AUTHOR, AUTHOR_FACEBOOK_URL, AUTHOR_INSTAGRAM, AUTHOR_INSTAGRAM_URL } from './config';
import { t } from '@/i18n';

/** The author's name and social links at the very bottom of every page. */
export function SiteFooter() {
  return (
    <footer className="mt-16 flex flex-col items-center gap-3 border-t border-border pt-6 text-center text-sm text-muted">
      <p>{t('footer.madeBy', { author: APP_AUTHOR })}</p>
      <ul aria-label={t('footer.social')} className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        <li>
          <SocialLink href={AUTHOR_FACEBOOK_URL} icon={<FacebookIcon />}>
            {t('footer.facebook', { name: APP_AUTHOR })}
          </SocialLink>
        </li>
        <li>
          <SocialLink href={AUTHOR_INSTAGRAM_URL} icon={<InstagramIcon />}>
            {t('footer.instagram', { name: AUTHOR_INSTAGRAM })}
          </SocialLink>
        </li>
      </ul>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-2 rounded-md font-medium text-text underline-offset-4 hover:text-primary hover:underline"
    >
      {icon}
      {children}
      <span className="sr-only"> {t('common.newTab')}</span>
    </a>
  );
}

// Plain outline marks drawn like the other (lucide) icons; lucide has no brand icons.
const iconProps = {
  'aria-hidden': true,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'size-5 shrink-0',
} as const;

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}
