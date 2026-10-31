import { useId, useMemo, useState } from 'react';
import { usePageTitle } from '@/app/usePageTitle';
import {
  LANGUAGE_DRILLS,
  type LanguageDrill,
  type LanguageDrillTopic,
} from '@/content/languageDrills/items';
import { PageHeader } from '@/design/ui/PageHeader';
import { formatNumber, t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { BackLink } from './BackLink';
import { sample } from '@/lib/sample';
import { ChoiceQuiz, type ChoiceItem } from './ChoiceQuiz';

const TOPICS = [...new Set(LANGUAGE_DRILLS.map((d) => d.topic))];
const ROUND = 10;

const toItem = (drill: LanguageDrill): ChoiceItem => ({
  id: drill.id,
  question: drill.question,
  options: drill.options,
  answer: drill.answer,
  explanation: drill.explanation,
  link: drill.guidePage
    ? { to: `/tananyag/${drill.guidePage}`, label: t('languageDrills.lesson') }
    : undefined,
});

/** Grammar and spelling exercises for the szövegértési-nyelvi feladatsor, ten at a time. */
export function LanguageDrillPage() {
  usePageTitle(t('languageDrills.title'));
  const emelt = useSettings((s) => s.settings.levels.magyar) === 'emelt';
  const [topic, setTopic] = useState<LanguageDrillTopic | 'all'>('all');
  const [round, setRound] = useState(0);
  const selectId = useId();
  const pool = useMemo(
    () =>
      LANGUAGE_DRILLS.filter((d) => (emelt || !d.emelt) && (topic === 'all' || d.topic === topic)),
    [emelt, topic],
  );
  // A new sample for every round and every change of topic.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = useMemo(() => sample(pool, ROUND).map(toItem), [pool, round]);

  return (
    <>
      <BackLink />
      <PageHeader title={t('languageDrills.title')} description={t('languageDrills.intro')} />
      <div className="mb-4 grid gap-1">
        <label htmlFor={selectId} className="font-medium">
          {t('languageDrills.topic')}
        </label>
        <select
          id={selectId}
          value={topic}
          onChange={(event) => setTopic(event.target.value as LanguageDrillTopic | 'all')}
          className="min-h-11 rounded-md border border-border-strong bg-surface px-3"
        >
          <option value="all">
            {t('languageDrills.allTopics', { count: formatNumber(pool.length) })}
          </option>
          {TOPICS.map((id) => (
            <option key={id} value={id}>
              {t(`languageDrills.topics.${id}`)}
            </option>
          ))}
        </select>
        <p className="text-sm text-muted">
          {emelt ? t('languageDrills.levelEmelt') : t('languageDrills.levelKozep')}
        </p>
      </div>
      <ChoiceQuiz
        key={`${topic}-${round}`}
        items={items}
        onNewRound={() => setRound((r) => r + 1)}
      />
    </>
  );
}
