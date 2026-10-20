import { useLiveQuery } from 'dexie-react-hooks';
import { Download, HardDriveDownload, Send, Share, ShieldAlert, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/design/ui/Button';
import { Card, CardTitle } from '@/design/ui/Card';
import { backupReminderDue, needsIosInstall, SNOOZE_MS } from '@/domain/backupReminder';
import { formatDate, t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { toast } from '@/state/toastStore';
import { db } from '@/storage/db';
import { persistState, requestPersist, type PersistState } from '@/storage/persist';
import { canShareFiles, exportToFile, shareBackup } from './dataActions';

function isIosBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  const standalone =
    typeof matchMedia === 'function' && matchMedia('(display-mode: standalone)').matches;
  return needsIosInstall(navigator as Navigator & { standalone?: boolean }, standalone);
}

function BackupButtons() {
  const [share] = useState(canShareFiles);
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => void exportToFile()}>
        <Download aria-hidden="true" />
        {t('safety.save')}
      </Button>
      {share && (
        <Button variant="secondary" onClick={() => void shareBackup()}>
          <Send aria-hidden="true" />
          {t('safety.share')}
        </Button>
      )}
    </div>
  );
}

function IosSteps() {
  return (
    <div className="grid gap-1 rounded-md bg-info-soft p-3 text-sm">
      <p className="font-semibold">{t('safety.iosTitle')}</p>
      <p>{t('safety.iosBody')}</p>
      <p className="flex items-start gap-2">
        <Share aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {t('safety.iosSteps')}
      </p>
    </div>
  );
}

/**
 * Home page card: asks for a backup after a few active days, and on iPhone
 * explains why the app should be on the home screen.
 */
export function DataSafetyReminder() {
  const settings = useSettings((s) => s.settings);
  const update = useSettings((s) => s.update);
  const activity = useLiveQuery(() => db.activity.toArray(), []);
  const [now] = useState(() => Date.now());
  const [ios] = useState(isIosBrowser);
  if (!activity) return null;
  const due = backupReminderDue({
    now,
    lastBackupAt: settings.lastBackupAt,
    snoozedUntil: settings.backupSnoozedUntil,
    activity,
  });
  const showIos = ios && !settings.installHintDismissed && activity.length > 0;
  if (!due && !showIos) return null;
  return (
    <Card aria-labelledby="home-safety" className="mb-10 border-warning">
      <CardTitle id="home-safety" className="flex items-center gap-2">
        <HardDriveDownload aria-hidden="true" className="size-5 text-warning" />
        {t('safety.reminderTitle')}
      </CardTitle>
      {due && (
        <div className="mt-2 grid gap-3">
          <p>{t('safety.reminderBody')}</p>
          <p className="text-sm text-muted">
            {settings.lastBackupAt
              ? t('safety.reminderLast', {
                  date: formatDate(settings.lastBackupAt, { dateStyle: 'medium' }),
                })
              : t('safety.reminderNever')}
          </p>
          <div className="flex flex-wrap gap-2">
            <BackupButtons />
            <Button
              variant="ghost"
              onClick={() => void update({ backupSnoozedUntil: Date.now() + SNOOZE_MS })}
            >
              {t('safety.later')}
            </Button>
          </div>
        </div>
      )}
      {showIos && (
        <div className="mt-3 grid gap-2">
          <IosSteps />
          <div>
            <Button variant="ghost" onClick={() => void update({ installHintDismissed: true })}>
              {t('safety.iosDismiss')}
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}

/** Settings: whether the browser keeps the data, the last backup, and how to stay safe. */
export function DataSafetyStatus() {
  const lastBackupAt = useSettings((s) => s.settings.lastBackupAt);
  const [state, setState] = useState<PersistState | null>(null);
  const [ios] = useState(isIosBrowser);
  useEffect(() => {
    let active = true;
    void persistState().then((value) => active && setState(value));
    return () => {
      active = false;
    };
  }, []);
  const ask = async () => {
    const result = await requestPersist();
    setState(result);
    toast(
      result === 'persisted'
        ? { message: t('safety.persistGranted'), tone: 'success' }
        : { message: t('safety.persistDenied'), tone: 'neutral' },
    );
  };
  if (!state) return null;
  const Icon = state === 'persisted' ? ShieldCheck : ShieldAlert;
  return (
    <div className="grid gap-3 rounded-md border border-border p-3">
      <p className="flex items-start gap-2 font-semibold">
        <Icon
          aria-hidden="true"
          className={`mt-0.5 size-5 shrink-0 ${state === 'persisted' ? 'text-success' : 'text-warning'}`}
        />
        {t('safety.statusTitle')}
      </p>
      <p className="text-sm">
        {state === 'persisted'
          ? t('safety.statusPersisted')
          : state === 'best-effort'
            ? t('safety.statusBestEffort')
            : t('safety.statusUnsupported')}{' '}
        {lastBackupAt
          ? t('safety.reminderLast', { date: formatDate(lastBackupAt, { dateStyle: 'medium' }) })
          : t('safety.reminderNever')}
      </p>
      {state === 'best-effort' && (
        <div>
          <Button size="sm" variant="secondary" onClick={() => void ask()}>
            <ShieldCheck aria-hidden="true" />
            {t('safety.requestPersist')}
          </Button>
        </div>
      )}
      {ios && <IosSteps />}
    </div>
  );
}
