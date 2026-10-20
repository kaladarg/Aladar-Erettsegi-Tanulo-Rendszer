import { CheckCircle2, ExternalLink, Info, ListChecks, Quote } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { OFFICIAL_ARCHIVE_URL } from '@/app/config';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject, subjectShortName } from '@/content/catalog';
import { EXAM_AIDS, EXAM_DAY_CHECKLIST } from '@/content/examAids';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { BackLink } from './BackLink';

const OH_ERETTSEGI_URL = new URL('.', OFFICIAL_ARCHIVE_URL).href;
const LAW_URL = 'https://net.jogtar.hu/jogszabaly?docid=99700100.kor';

export function AidsPage() {
  usePageTitle(t('aids.title'));
  const chosen = useSettings((s) => s.settings.subjects);
  const [params, setParams] = useSearchParams();
  const requested = params.get('targy');
  const subject =
    EXAM_AIDS.find((a) => a.subject === requested)?.subject ??
    EXAM_AIDS.find((a) => chosen.includes(a.subject))?.subject ??
    EXAM_AIDS[0]!.subject;
  const aids = EXAM_AIDS.find((a) => a.subject === subject)!;

  return (
    <>
      <BackLink />
      <PageHeader title={t('aids.title')} description={t('aids.intro')} />
      <div className="grid gap-6">
        <Card aria-labelledby="aids-checklist">
          <CardTitle id="aids-checklist" className="flex items-center gap-2">
            <ListChecks aria-hidden="true" className="size-5 text-primary" />
            {t('aids.checklistTitle')}
          </CardTitle>
          <ul className="mt-3 grid gap-2">
            {EXAM_DAY_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <SegmentedControl
          label={t('practice.oral.subject')}
          value={subject}
          onValueChange={(value) => setParams({ targy: value }, { replace: true })}
          options={EXAM_AIDS.map((a) => ({
            value: a.subject,
            label: subjectShortName(findSubject(a.subject) ?? { id: a.subject, name: a.subject }),
          }))}
        />

        <Card aria-labelledby="aids-subject">
          <CardTitle id="aids-subject">{findSubject(subject)?.name ?? subject}</CardTitle>
          <h3 className="mt-4 text-sm font-semibold tracking-wide text-muted uppercase">
            {t('aids.allowedTitle')}
          </h3>
          <ul className="mt-2 grid gap-2">
            {aids.allowed.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mt-5 text-sm font-semibold tracking-wide text-muted uppercase">
            {t('aids.notesTitle')}
          </h3>
          <ul className="mt-2 grid list-disc gap-1 pl-5">
            {aids.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
            <li>{t('aids.oral')}</li>
          </ul>
          <figure className="mt-5 rounded-md bg-surface-muted p-3">
            <figcaption className="mb-1 flex items-center gap-2 text-sm font-semibold">
              <Quote aria-hidden="true" className="size-4" />
              {t('aids.quoteTitle')}
            </figcaption>
            <blockquote className="text-sm italic">{aids.quote}</blockquote>
          </figure>
        </Card>

        <Card aria-labelledby="aids-official">
          <CardTitle id="aids-official" className="flex items-center gap-2">
            <Info aria-hidden="true" className="size-5 text-primary" />
            {t('aids.officialTitle')}
          </CardTitle>
          <CardDescription>{t('aids.officialBody')}</CardDescription>
          <ul className="mt-3 grid gap-2">
            {[
              [OH_ERETTSEGI_URL, t('aids.officialLink')],
              [LAW_URL, t('aids.lawLink')],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4"
                >
                  {label}
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
