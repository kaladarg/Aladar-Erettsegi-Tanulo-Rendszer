import { CalendarDays, Check, ChevronRight, Circle, X } from 'lucide-react';
import { useId } from 'react';
import { Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_SUBJECTS, findSubject } from '@/content/catalog';
import { examFullTitle } from '@/content/labels';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import { Skeleton } from '@/design/ui/Skeleton';
import type { PlanItem, SubjectPlan } from '@/domain/practice/plan';
import { formatDate, formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { BackLink } from './BackLink';
import { usePlan } from './usePlan';

const parseDay = (day: string) => {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y!, m! - 1, d!);
};

export function PlanPage() {
  usePageTitle(t('practice.plan.title'));
  const plans = usePlan();
  return (
    <>
      <BackLink />
      <PageHeader title={t('practice.plan.title')} description={t('practice.plan.intro')} />
      <div className="grid gap-6">
        <ExamDates />
        {plans === undefined ? (
          <Skeleton className="h-48" />
        ) : (
          plans.map((plan) => <SubjectPlanCard key={plan.subject} plan={plan} />)
        )}
      </div>
    </>
  );
}

/** Date inputs for the written exams of the student's subjects. */
function ExamDates() {
  const chosen = useSettings((s) => s.settings.subjects);
  const examDates = useSettings((s) => s.settings.examDates);
  const update = useSettings((s) => s.update);
  const subjects = DEFAULT_SUBJECTS.filter(
    (s) => chosen.length === 0 || chosen.includes(s.id) || examDates[s.id],
  );
  const set = (subject: string, value: string) => {
    const next = { ...examDates };
    if (value) next[subject] = value;
    else delete next[subject];
    void update({ examDates: next });
  };
  return (
    <Card aria-labelledby="plan-dates">
      <CardTitle id="plan-dates" className="flex items-center gap-2">
        <CalendarDays aria-hidden="true" className="size-5 text-primary" />
        {t('practice.plan.datesTitle')}
      </CardTitle>
      <CardDescription>{t('practice.plan.datesBody')}</CardDescription>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <DateField
            key={subject.id}
            label={t('practice.plan.dateLabel', { subject: subject.name })}
            value={examDates[subject.id] ?? ''}
            onChange={(value) => set(subject.id, value)}
          />
        ))}
      </div>
    </Card>
  );
}

function DateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          type="date"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-11 min-w-0 flex-1 rounded-md border border-border-strong bg-surface px-3"
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            aria-label={`${t('practice.plan.clear')}: ${label}`}
            onClick={() => onChange('')}
          >
            <X aria-hidden="true" />
          </Button>
        )}
      </div>
    </div>
  );
}

function itemText(item: PlanItem): string {
  switch (item.kind) {
    case 'review':
      return item.count > 0
        ? t('practice.plan.item.review', { count: item.count })
        : t('practice.plan.item.reviewNone');
    case 'topic':
      return t('practice.plan.item.topic', {
        topic: item.topic,
        percent: formatNumber(item.percent),
      });
    case 'topicExplore':
      return t('practice.plan.item.topicExplore');
    case 'paper':
      return item.entry
        ? t('practice.plan.item.paperNamed', { exam: examFullTitle(item.entry) })
        : t('practice.plan.item.paper');
    case 'exam':
      return item.entry
        ? t('practice.plan.item.examNamed', { exam: examFullTitle(item.entry) })
        : t('practice.plan.item.exam');
    case 'oral':
      return t('practice.plan.item.oral');
  }
}

function itemLink(item: PlanItem, subject: string): string | null {
  switch (item.kind) {
    case 'review':
      return item.count > 0 ? '/gyakorlas/hibaim' : null;
    case 'topic':
      return `/gyakorlas/temakorok?targy=${subject}&tema=${encodeURIComponent(item.topic)}`;
    case 'topicExplore':
      return `/gyakorlas/temakorok?targy=${subject}`;
    case 'paper':
    case 'exam':
      return item.entry ? `/feladatsorok/${item.entry.id}` : '/feladatsorok';
    case 'oral':
      return `/gyakorlas/szobeli?targy=${subject}`;
  }
}

function SubjectPlanCard({ plan }: { plan: SubjectPlan }) {
  const subject = findSubject(plan.subject);
  const headingId = `plan-${plan.subject}`;
  return (
    <Card aria-labelledby={headingId}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <CardTitle id={headingId}>{subject?.name ?? plan.subject}</CardTitle>
        <p className="font-semibold tabular-nums">
          {plan.phase === 'day'
            ? t('practice.plan.today')
            : t('practice.plan.daysLeftLong', { days: formatNumber(plan.daysLeft) })}
        </p>
      </div>
      <CardDescription>
        {formatDate(parseDay(plan.date), { dateStyle: 'full' })} ·{' '}
        {t(`practice.plan.phase.${plan.phase}`)}
      </CardDescription>
      {plan.items.length > 0 && (
        <>
          <h3 className="mt-5 mb-2 text-sm font-semibold tracking-wide text-muted uppercase">
            {t('practice.plan.thisWeek')}
          </h3>
          <ul className="grid gap-2">
            {plan.items.map((item, index) => {
              const link = itemLink(item, plan.subject);
              return (
                <li
                  key={index}
                  className={cn(
                    'flex items-center gap-3 rounded-md border border-border p-3',
                    item.done && 'bg-success-soft/40',
                  )}
                >
                  {item.done ? (
                    <Check aria-hidden="true" className="size-5 shrink-0 text-success" />
                  ) : (
                    <Circle aria-hidden="true" className="size-5 shrink-0 text-muted" />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="sr-only">
                      {item.done ? t('practice.plan.done') : t('practice.plan.todo')}:{' '}
                    </span>
                    {itemText(item)}
                  </span>
                  {link && !item.done && (
                    <Button asChild size="sm" variant="secondary" className="shrink-0">
                      <Link to={link}>
                        {t('practice.plan.go')}
                        <ChevronRight aria-hidden="true" />
                      </Link>
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Card>
  );
}
