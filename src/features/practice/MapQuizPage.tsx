import { useId, useMemo, useState } from 'react';
import { usePageTitle } from '@/app/usePageTitle';
import { GEOGRAPHY_CARDS } from '@/content/cards/geographyCards';
import type { GeographyEra } from '@/content/cards/types';
import { PageHeader } from '@/design/ui/PageHeader';
import { t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { BackLink } from './BackLink';
import { CardMap } from './cards/CardMap';
import { sample } from '@/lib/sample';
import { ChoiceQuiz, type ChoiceItem } from './ChoiceQuiz';

const REGIONS: GeographyEra[] = [
  'magyarorszag',
  'europa',
  'azsia',
  'afrika',
  'amerika',
  'ausztralia',
  'fold',
];
const ROUND = 10;
const MAPPED = GEOGRAPHY_CARDS.filter((card) => card.place);

/**
 * The blank-map task of the written paper as a quiz: a place is marked on the map,
 * the student picks its name from four places of the same kind.
 */
export function MapQuizPage() {
  usePageTitle(t('mapQuiz.title'));
  const emelt = useSettings((s) => s.settings.levels.foldrajz) === 'emelt';
  const [region, setRegion] = useState<GeographyEra>('magyarorszag');
  const [round, setRound] = useState(0);
  const selectId = useId();

  const items = useMemo((): ChoiceItem[] => {
    const pool = MAPPED.filter((c) => c.era === region && (emelt || !c.emelt));
    return sample(pool, ROUND).map((card) => {
      const sameKind = pool.filter((c) => c.front === card.front && c.back !== card.back);
      const others = (sameKind.length >= 3 ? sameKind : pool.filter((c) => c.back !== card.back))
        .map((c) => c.back)
        .filter((name, i, all) => all.indexOf(name) === i);
      const options = sample([card.back, ...sample(others, 3)], 4);
      const place = card.place!;
      return {
        id: card.id,
        question: t('mapQuiz.question', { kind: card.front }),
        options,
        answer: options.indexOf(card.back),
        explanation: `**${card.back}**: ${card.note ?? ''}`,
        figure: (
          <CardMap
            lat={place.lat}
            lon={place.lon}
            view={place.view}
            label={t('mapQuiz.mapLabel')}
            className="block h-auto max-h-[60vh] w-full rounded-md border border-border"
          />
        ),
      };
    });
    // A new sample for every round.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, emelt, round]);

  return (
    <>
      <BackLink />
      <PageHeader title={t('mapQuiz.title')} description={t('mapQuiz.intro')} />
      <div className="mb-4 grid gap-1">
        <label htmlFor={selectId} className="font-medium">
          {t('mapQuiz.region')}
        </label>
        <select
          id={selectId}
          value={region}
          onChange={(event) => setRegion(event.target.value as GeographyEra)}
          className="min-h-11 rounded-md border border-border-strong bg-surface px-3"
        >
          {REGIONS.map((id) => (
            <option key={id} value={id}>
              {t(`practice.cards.eras.${id}`)}
            </option>
          ))}
        </select>
      </div>
      <ChoiceQuiz
        key={`${region}-${round}`}
        items={items}
        onNewRound={() => setRound((r) => r + 1)}
      />
    </>
  );
}
