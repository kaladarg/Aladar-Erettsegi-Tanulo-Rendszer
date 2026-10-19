import { useLiveQuery } from 'dexie-react-hooks';
import { ChevronRight, Info, Plus } from 'lucide-react';
import { useId, useState, type FormEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject } from '@/content/catalog';
import {
  BUILTIN_ORAL_TOPICS,
  ORAL_TOPIC_SUBJECTS,
  type BuiltinOralTopic,
} from '@/content/oralTopics';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { toast } from '@/state/toastStore';
import { db, type OralTopicRow } from '@/storage/db';
import { addOwnTopics, ensureBuiltinTopic } from '@/storage/oral';
import { BackLink } from './BackLink';

export function OralPage() {
  usePageTitle(t('practice.oral.title'));
  const chosen = useSettings((s) => s.settings.subjects);
  const [params, setParams] = useSearchParams();
  const requested = params.get('targy');
  const subject =
    requested && ORAL_TOPIC_SUBJECTS.includes(requested)
      ? requested
      : (chosen.find((s) => ORAL_TOPIC_SUBJECTS.includes(s)) ?? ORAL_TOPIC_SUBJECTS[0]!);
  const rows = useLiveQuery(
    () => db.oralTopics.where('subject').equals(subject).toArray(),
    [subject],
  );
  const navigate = useNavigate();

  const stored = new Map((rows ?? []).filter((r) => r.builtinId).map((r) => [r.builtinId!, r]));
  const own = (rows ?? []).filter((r) => !r.builtinId).sort((a, b) => a.createdAt - b.createdAt);
  const builtins = BUILTIN_ORAL_TOPICS.filter((b) => b.subject === subject);
  const groups = [...new Set(builtins.map((b) => b.group))];

  const openBuiltin = async (builtin: BuiltinOralTopic) => {
    const id = await ensureBuiltinTopic(builtin);
    navigate(`/gyakorlas/szobeli/${encodeURIComponent(id)}`);
  };

  return (
    <>
      <BackLink />
      <PageHeader title={t('practice.oral.title')} description={t('practice.oral.intro')} />
      <div className="grid gap-6">
        <SegmentedControl
          label={t('practice.oral.subject')}
          value={subject}
          onValueChange={(value) => setParams({ targy: value }, { replace: true })}
          options={ORAL_TOPIC_SUBJECTS.map((id) => ({
            value: id,
            label: findSubject(id)?.name ?? id,
          }))}
        />

        <Card aria-labelledby="oral-own">
          <CardTitle id="oral-own">{t('practice.oral.ownTitle')}</CardTitle>
          {own.length === 0 ? (
            <CardDescription>{t('practice.oral.ownEmpty')}</CardDescription>
          ) : (
            <ul className="mt-3 grid gap-2">
              {own.map((row) => (
                <TopicRow
                  key={row.id}
                  title={row.title}
                  row={row}
                  to={`/gyakorlas/szobeli/${encodeURIComponent(row.id)}`}
                />
              ))}
            </ul>
          )}
          <AddTopics subject={subject} />
        </Card>

        <Card aria-labelledby="oral-builtin">
          <CardTitle id="oral-builtin">{t('practice.oral.builtinTitle')}</CardTitle>
          <p className="mt-2 flex gap-2 rounded-md bg-info-soft p-3 text-sm">
            <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            {t('practice.oral.draftNote')}
          </p>
          {groups.map((group) => (
            <section key={group} className="mt-5">
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-muted uppercase">
                {group}
              </h3>
              <ul className="grid gap-2">
                {builtins
                  .filter((b) => b.group === group)
                  .map((builtin) => (
                    <TopicRow
                      key={builtin.id}
                      title={builtin.title}
                      row={stored.get(builtin.id)}
                      onOpen={() => void openBuiltin(builtin)}
                    />
                  ))}
              </ul>
            </section>
          ))}
        </Card>
      </div>
    </>
  );
}

function TopicRow({
  title,
  row,
  to,
  onOpen,
}: {
  title: string;
  row?: OralTopicRow;
  to?: string;
  onOpen?: () => void;
}) {
  const practised = row?.practised ?? 0;
  const label = `${t('practice.oral.open')}: ${title}`;
  return (
    <li className="flex items-center gap-3 rounded-md border border-border p-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted">
          {practised > 0
            ? t('practice.oral.practised', { count: practised })
            : t('practice.oral.notPractised')}
        </p>
      </div>
      {to ? (
        <Button asChild size="sm" variant="secondary" className="shrink-0">
          <Link to={to} aria-label={label}>
            {t('practice.oral.open')}
            <ChevronRight aria-hidden="true" />
          </Link>
        </Button>
      ) : (
        <Button
          size="sm"
          variant="secondary"
          className="shrink-0"
          aria-label={label}
          onClick={onOpen}
        >
          {t('practice.oral.open')}
          <ChevronRight aria-hidden="true" />
        </Button>
      )}
    </li>
  );
}

function AddTopics({ subject }: { subject: string }) {
  const [text, setText] = useState('');
  const id = useId();
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const count = await addOwnTopics(subject, text.split('\n'));
    if (count > 0) {
      setText('');
      toast({ message: t('practice.oral.added', { count }), tone: 'success' });
    }
  };
  return (
    <form onSubmit={(event) => void submit(event)} className="mt-5 grid gap-2">
      <h3 className="font-semibold">{t('practice.oral.addTitle')}</h3>
      <label htmlFor={id} className="text-sm font-medium">
        {t('practice.oral.addLabel')}
      </label>
      <textarea
        id={id}
        rows={4}
        value={text}
        placeholder={t('practice.oral.addPlaceholder')}
        onChange={(event) => setText(event.target.value)}
        className="rounded-md border border-border-strong bg-surface p-3"
      />
      <div>
        <Button type="submit" disabled={!text.trim()}>
          <Plus aria-hidden="true" />
          {t('practice.oral.add')}
        </Button>
      </div>
    </form>
  );
}
