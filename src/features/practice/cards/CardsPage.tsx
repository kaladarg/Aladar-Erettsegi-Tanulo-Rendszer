import { useLiveQuery } from 'dexie-react-hooks';
import { Info, Play, RotateCcw } from 'lucide-react';
import { useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import {
  DECKS,
  ERAS,
  filterCards,
  filterFromParams,
  filterToParams,
  type CardFilter,
  type DeckId,
  type Scope,
} from '@/content/cards';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { cardStates, deckCounts } from '@/domain/cards/schedule';
import { formatNumber, t } from '@/i18n';
import { toast } from '@/state/toastStore';
import { resetCards } from '@/storage/cards';
import { db } from '@/storage/db';
import { BackLink } from '../BackLink';

export function CardsPage() {
  usePageTitle(t('practice.cards.title'));
  const [params, setParams] = useSearchParams();
  const filter = filterFromParams(params);
  const events = useLiveQuery(() => db.cardEvents.toArray(), []);
  const states = useMemo(() => cardStates(events ?? []), [events]);
  const eraId = useId();
  const [confirm, setConfirm] = useState(false);

  const setFilter = (next: CardFilter) => setParams(filterToParams(next), { replace: true });
  const filtered = filterCards({ ...filter, deck: undefined });
  const all = deckCounts(
    filtered.map((c) => c.id),
    states,
  );
  const studyLink = (deck?: DeckId) =>
    `/gyakorlas/kartyak/tanulas?${filterToParams({ ...filter, deck })}`;

  return (
    <>
      <BackLink />
      <PageHeader title={t('practice.cards.title')} description={t('practice.cards.intro')} />
      <p className="mb-6 flex gap-2 rounded-md bg-info-soft p-3 text-sm">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {t('practice.cards.draftNote')}
      </p>

      <section aria-label={t('practice.cards.filters')} className="mb-6 grid gap-4 sm:grid-cols-2">
        <SegmentedControl<Scope>
          label={t('practice.cards.scope')}
          value={filter.scope ?? 'all'}
          onValueChange={(scope) => setFilter({ ...filter, scope })}
          options={[
            { value: 'all', label: t('practice.cards.scopeAll') },
            { value: 'hungarian', label: t('practice.cards.scopeHungarian') },
            { value: 'world', label: t('practice.cards.scopeWorld') },
          ]}
        />
        <div className="grid gap-1">
          <label htmlFor={eraId} className="text-sm font-medium">
            {t('practice.cards.era')}
          </label>
          <select
            id={eraId}
            value={filter.era ?? ''}
            onChange={(event) =>
              setFilter({
                ...filter,
                era: (event.target.value || undefined) as CardFilter['era'],
              })
            }
            className="min-h-11 rounded-md border border-border-strong bg-surface px-3"
          >
            <option value="">{t('practice.cards.allEras')}</option>
            {ERAS.map((era) => (
              <option key={era} value={era}>
                {t(`practice.cards.eras.${era}`)}
              </option>
            ))}
          </select>
        </div>
      </section>

      {filtered.length === 0 ? (
        <p className="text-muted">{t('practice.cards.none')}</p>
      ) : (
        <>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link to={studyLink()}>
                <Play aria-hidden="true" />
                {t('practice.cards.studyAll')}
              </Link>
            </Button>
            {all.due > 0 && (
              <span className="font-semibold text-primary">
                {t('practice.cards.due', { count: all.due })}
              </span>
            )}
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {DECKS.map((deck) => {
              const ids = filterCards({ ...filter, deck }).map((c) => c.id);
              if (ids.length === 0) return null;
              const counts = deckCounts(ids, states);
              const name = t(`practice.cards.deck.${deck}`);
              return (
                <li key={deck}>
                  <Card aria-labelledby={`deck-${deck}`} className="flex h-full flex-col">
                    <CardTitle id={`deck-${deck}`}>{name}</CardTitle>
                    <CardDescription>{t(`practice.cards.deckHint.${deck}`)}</CardDescription>
                    <Progress counts={counts} />
                    <p className="mt-2 text-sm text-muted">
                      {t('practice.cards.counts', {
                        total: formatNumber(counts.total),
                        new: formatNumber(counts.new),
                        learning: formatNumber(counts.learning),
                        mastered: formatNumber(counts.mastered),
                      })}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
                      <Button asChild size="sm">
                        <Link
                          to={studyLink(deck)}
                          aria-label={t('practice.cards.studyLabel', { deck: name })}
                        >
                          <Play aria-hidden="true" />
                          {t('practice.cards.study')}
                        </Link>
                      </Button>
                      {counts.due > 0 && (
                        <span className="text-sm font-semibold text-primary">
                          {t('practice.cards.due', { count: counts.due })}
                        </span>
                      )}
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
          {all.total > all.new && (
            <Button variant="ghost" className="mt-6" onClick={() => setConfirm(true)}>
              <RotateCcw aria-hidden="true" />
              {t('practice.cards.reset')}
            </Button>
          )}
        </>
      )}
      <ConfirmDialog
        open={confirm}
        onOpenChange={setConfirm}
        title={t('practice.cards.resetTitle')}
        description={t('practice.cards.resetBody', { count: filtered.length })}
        confirmLabel={t('practice.cards.reset')}
        tone="danger"
        onConfirm={() =>
          void resetCards(filtered.map((c) => c.id)).then(() =>
            toast({ message: t('practice.cards.resetDone'), tone: 'neutral' }),
          )
        }
      />
    </>
  );
}

/** Stacked bar: learnt, learning, new. */
function Progress({ counts }: { counts: ReturnType<typeof deckCounts> }) {
  const part = (n: number) => `${(n / Math.max(1, counts.total)) * 100}%`;
  return (
    <div aria-hidden="true" className="mt-4 flex h-2 overflow-hidden rounded-full bg-surface-muted">
      <span className="bg-success" style={{ width: part(counts.mastered) }} />
      <span className="bg-primary" style={{ width: part(counts.learning) }} />
    </div>
  );
}
