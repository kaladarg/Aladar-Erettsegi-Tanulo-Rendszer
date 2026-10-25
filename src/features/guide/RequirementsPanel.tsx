import { ListChecks } from 'lucide-react';
import type { LevelView, RequirementList } from '@/content/guide';
import { t } from '@/i18n';

const GROUPS = ['terms', 'people', 'dates', 'places'] as const;

/** The official lists of a topic: terms, people, dates and places, emelt items marked. */
export function RequirementsPanel({
  requirements,
  view,
  source,
}: {
  requirements: RequirementList;
  view: LevelView;
  source: string;
}) {
  return (
    <details className="group mt-4 rounded-lg border border-border">
      <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 p-3 font-semibold [&::-webkit-details-marker]:hidden">
        <ListChecks aria-hidden="true" className="size-5 text-primary" />
        {t('guide.requirements.title')}
      </summary>
      <div className="grid gap-4 border-t border-border p-3">
        <p className="text-sm text-muted">{source}</p>
        {GROUPS.map((group) => {
          const { kozep, emelt } = requirements[group];
          if (kozep.length === 0 && (view === 'kozep' || emelt.length === 0)) return null;
          return (
            <div key={group}>
              <h3 className="mb-2 text-sm font-bold tracking-wide text-muted uppercase">
                {t(`guide.requirements.${group}`)}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {kozep.map((item) => (
                  <li key={item} className="rounded-full bg-surface-muted px-2.5 py-1 text-sm">
                    {item}
                  </li>
                ))}
                {view === 'emelt' &&
                  emelt.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-primary-soft px-2.5 py-1 text-sm text-primary-soft-fg italic"
                    >
                      {item}
                      <span className="sr-only"> ({t('guide.emelt')})</span>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
        {view === 'kozep' && (
          <p className="text-sm text-muted">{t('guide.requirements.emeltHidden')}</p>
        )}
        {view === 'emelt' && (
          <p className="text-sm text-muted">{t('guide.requirements.emeltLegend')}</p>
        )}
      </div>
    </details>
  );
}
