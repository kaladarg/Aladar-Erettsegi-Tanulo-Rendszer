import { CalendarClock, Flame, Layers, Play } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { findSubject } from '@/content/catalog';
import { Button } from '@/design/ui/Button';
import { ProgressRing } from '@/design/ui/ProgressRing';
import { streak } from '@/domain/stats/stats';
import { formatNumber, t, type MessageKey } from '@/i18n';
import { usePlan } from '../practice/usePlan';
import type { StatsData } from '../stats/useStatsData';
import { DAILY_GOAL, useToday } from './useToday';

function greetingKey(hour: number): MessageKey {
  if (hour >= 5 && hour < 10) return 'home.hero.morning';
  if (hour >= 18 || hour < 5) return 'home.hero.evening';
  return 'home.hero.day';
}

/**
 * The top of the home page: a greeting, today's goal as a ring, the streak and
 * the nearest exam. Bright and encouraging, but every number is real.
 */
export function HeroBanner({ data }: { data: StatsData | undefined }) {
  const [hour] = useState(() => new Date().getHours());
  const today = useToday();
  const plans = usePlan();
  const days = data ? streak(data.days) : null;
  const next = plans
    ?.filter((plan) => plan.daysLeft >= 0)
    .sort((a, b) => a.daysLeft - b.daysLeft)[0];
  const done = today?.tasks ?? 0;
  const goalMet = done >= DAILY_GOAL;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate mb-8 overflow-hidden rounded-xl bg-linear-135 from-hero-from to-hero-to p-6 text-hero-fg shadow-primary sm:p-8"
    >
      {/* Decorative shapes drifting slowly in the background. */}
      <span
        aria-hidden="true"
        className="absolute -top-16 -right-10 -z-10 size-56 rounded-full bg-white/10 motion-safe:animate-[float_9s_ease-in-out_infinite]"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 -z-10 size-56 rounded-full bg-white/8 motion-safe:animate-[float_12s_ease-in-out_infinite_reverse]"
      />
      <span
        aria-hidden="true"
        className="absolute top-6 right-1/3 -z-10 size-3 rounded-full bg-accent motion-safe:animate-[float_6s_ease-in-out_infinite]"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 id="hero-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t(greetingKey(hour))}
          </h1>
          <p className="mt-2 max-w-md text-base text-white/90 sm:text-lg">
            {goalMet ? t('home.hero.goalMet') : t('home.hero.intro')}
          </p>
        </div>
        <ProgressRing
          value={done}
          max={DAILY_GOAL}
          size={96}
          stroke={9}
          label={t('home.hero.goalLabel', { done, goal: DAILY_GOAL })}
          trackClassName="stroke-white/25"
          barClassName={goalMet ? 'stroke-accent' : 'stroke-white'}
          className="shrink-0 max-sm:scale-90"
        >
          <span className="grid justify-items-center leading-none">
            <span className="text-2xl font-bold tabular-nums">{formatNumber(done)}</span>
            <span className="mt-1 text-[0.6875rem] font-medium text-white/85">
              {t('home.hero.goalOf', { goal: DAILY_GOAL })}
            </span>
          </span>
        </ProgressRing>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button asChild className="bg-white text-hero-to shadow-2 hover:bg-white hover:shadow-3">
          <Link to="/gyakorlas">
            <Play aria-hidden="true" />
            {t('home.hero.start')}
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-hero-fg ring-1 ring-white/40 hover:bg-white/15"
        >
          <Link to="/gyakorlas/kartyak">
            <Layers aria-hidden="true" />
            {t('home.hero.cards')}
          </Link>
        </Button>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
        <li className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm">
          <Flame
            aria-hidden="true"
            className={`size-4 ${days && days.current > 0 ? 'text-accent motion-safe:animate-pulse' : ''}`}
          />
          {days && days.current > 0
            ? t('home.hero.streak', { count: days.current })
            : t('home.hero.streakNone')}
        </li>
        {today && today.cards > 0 && (
          <li className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm">
            <Layers aria-hidden="true" className="size-4" />
            {t('home.hero.cardsToday', { count: today.cards })}
          </li>
        )}
        {next && (
          <li className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm">
            <CalendarClock aria-hidden="true" className="size-4" />
            {t('home.hero.examIn', {
              subject: findSubject(next.subject)?.name ?? next.subject,
              count: next.daysLeft,
            })}
          </li>
        )}
      </ul>
    </section>
  );
}
