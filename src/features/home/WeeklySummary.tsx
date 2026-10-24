import { useLiveQuery } from 'dexie-react-hooks';
import { ArrowRight, CalendarRange, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { findSubject } from '@/content/catalog';
import { Button } from '@/design/ui/Button';
import { examEvents } from '@/domain/practice/review';
import { weeklySummary } from '@/domain/stats/weekly';
import { formatNumber, t } from '@/i18n';
import { db } from '@/storage/db';
import type { StatsData } from '../stats/useStatsData';

const SEEN_KEY = 'eg-weekly-seen';

function seenWeek(): string | null {
  try {
    return localStorage.getItem(SEEN_KEY);
  } catch {
    return null;
  }
}

/** Sundays and Mondays: the last seven days at a glance, and one thing to focus on. */
export function WeeklySummary({ data }: { data: StatsData }) {
  const [now] = useState(() => new Date());
  const [seen, setSeen] = useState(seenWeek);
  const show = now.getDay() === 0 || now.getDay() === 1;
  const extra = useLiveQuery(
    async () =>
      show
        ? {
            drills: await db.drillEvents.toArray(),
            cards: (await db.cardEvents.toArray()).map((c) => c.time),
          }
        : null,
    [show],
  );
  if (!show || !extra) return null;
  const summary = weeklySummary({
    events: [...examEvents(data.attempts), ...extra.drills],
    days: data.days,
    cardTimes: extra.cards,
    attempts: data.attempts,
    now,
  });
  if (!summary || seen === summary.from) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(SEEN_KEY, summary.from);
    } catch {
      // Without storage the card simply shows again next time.
    }
    setSeen(summary.from);
  };
  const subject = (id: string) => findSubject(id)?.name ?? id;
  const percent = (ratio: number) => formatNumber(Math.round(ratio * 100));

  return (
    <section
      aria-labelledby="weekly-title"
      className="animate-rise-in rounded-xl border border-border bg-linear-135 from-primary-soft to-surface p-4 shadow-1 sm:p-5"
    >
      <div className="flex items-start justify-between gap-2">
        <h2 id="weekly-title" className="flex items-center gap-2 text-lg font-semibold">
          <CalendarRange aria-hidden="true" className="size-5 text-primary" />
          {t('home.weekly.title')}
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="-m-2"
          aria-label={t('home.weekly.dismiss')}
          onClick={dismiss}
        >
          <X aria-hidden="true" />
        </Button>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {(
          [
            ['days', summary.activeDays],
            ['tasks', summary.tasks],
            ['cards', summary.cards],
            ['papers', summary.papers],
          ] as const
        ).map(([key, value]) => (
          <div key={key} className="rounded-lg bg-surface p-3 shadow-1">
            <dt className="text-xs font-medium text-muted">{t(`home.weekly.${key}`)}</dt>
            <dd className="text-2xl font-bold tabular-nums">
              {key === 'days' ? t('home.weekly.daysValue', { count: value }) : formatNumber(value)}
            </dd>
          </div>
        ))}
      </dl>
      {summary.improved.length > 0 && (
        <div className="mt-3">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <TrendingUp aria-hidden="true" className="size-4 text-success" />
            {t('home.weekly.improved')}
          </p>
          <ul className="mt-1 grid gap-0.5 text-sm">
            {summary.improved.map((topic) => (
              <li key={`${topic.subject}|${topic.topic}`}>
                {t('home.weekly.improvedItem', {
                  topic: topic.topic,
                  subject: subject(topic.subject),
                  before: percent(topic.before),
                  after: percent(topic.after),
                })}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
        <p className="text-sm">
          <span className="font-semibold">{t('home.weekly.nextWeek')} </span>
          {summary.focus
            ? t('home.weekly.focus', {
                topic: summary.focus.topic,
                subject: subject(summary.focus.subject),
              })
            : t('home.weekly.keepGoing')}
        </p>
        <Button asChild size="sm" variant="secondary">
          <Link
            to={
              summary.focus
                ? `/gyakorlas/temakorok?targy=${summary.focus.subject}&tema=${encodeURIComponent(summary.focus.topic)}`
                : '/gyakorlas/mai-adag'
            }
          >
            {summary.focus ? t('home.weekly.focusAction') : t('home.weekly.keepAction')}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
