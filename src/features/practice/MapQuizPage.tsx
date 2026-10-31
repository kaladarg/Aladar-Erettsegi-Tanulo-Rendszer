import { useId, useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { usePageTitle } from '@/app/usePageTitle';
import { GEOGRAPHY_CARDS } from '@/content/cards/geographyCards';
import type { GeographyEra } from '@/content/cards/types';
import {
  EXTERNAL_QUIZ_AUTHOR_URL,
  EXTERNAL_QUIZ_PLAYLIST_URL,
  EXTERNAL_QUIZZES,
  type ExternalQuiz,
} from '@/content/topography/externalQuizzes';
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
      <MoreQuizzes region={region} />
    </>
  );
}

function QuizLink({ quiz }: { quiz: ExternalQuiz }) {
  return (
    <li>
      <a
        href={quiz.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center gap-1.5 text-primary underline underline-offset-2"
      >
        {quiz.title}
        <ExternalLink aria-hidden="true" className="size-3.5 shrink-0" />
      </a>
    </li>
  );
}

/** Links to free blank-map quizzes on PurposeGames for further practice. */
function MoreQuizzes({ region }: { region: GeographyEra }) {
  const quizzes = EXTERNAL_QUIZZES[region] ?? [];
  return (
    <section aria-labelledby="map-quiz-more" className="mt-8 rounded-lg border border-border p-4">
      <h2 id="map-quiz-more" className="text-lg font-semibold">
        {t('mapQuiz.moreTitle')}
      </h2>
      <p className="mt-1 text-sm text-muted">{t('mapQuiz.moreIntro')}</p>
      <h3 className="mt-4 font-medium">
        {t('mapQuiz.moreRegion')}: {t(`practice.cards.eras.${region}`)}
      </h3>
      {quizzes.length ? (
        <ul className="mt-1 grid gap-0 sm:grid-cols-2">
          {quizzes.map((quiz) => (
            <QuizLink key={quiz.url} quiz={quiz} />
          ))}
        </ul>
      ) : (
        <p className="mt-1 text-sm">{t('mapQuiz.moreNone')}</p>
      )}
      <ul className="mt-3 grid gap-0 border-t border-border pt-3">
        <QuizLink quiz={{ title: t('mapQuiz.moreAll'), url: EXTERNAL_QUIZ_AUTHOR_URL }} />
        <QuizLink quiz={{ title: t('mapQuiz.morePlaylist'), url: EXTERNAL_QUIZ_PLAYLIST_URL }} />
      </ul>
    </section>
  );
}
