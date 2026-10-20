import { t } from '@/i18n';
import {
  backupFileName,
  BackupError,
  clearAllData,
  createBackup,
  parseBackup,
  restoreBackup,
  restoreSnapshot,
  takeSnapshot,
  type BackupErrorCode,
  type BackupFile,
  type Snapshot,
} from '@/storage/backup';
import { useOnboarding } from '@/state/onboardingStore';
import { useSettings } from '@/state/settingsStore';
import { toast } from '@/state/toastStore';

const ERROR_KEYS = {
  invalidJson: 'errors.importInvalidJson',
  wrongApp: 'errors.importWrongApp',
  newerVersion: 'errors.importNewerVersion',
  corrupt: 'errors.importCorrupt',
} as const satisfies Record<BackupErrorCode, string>;

async function backupBlob(): Promise<Blob> {
  const backup = await createBackup();
  return new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
}

const markSaved = () => void useSettings.getState().update({ lastBackupAt: Date.now() });

export async function exportToFile(): Promise<void> {
  const blob = await backupBlob();
  const url = URL.createObjectURL(blob);
  const name = backupFileName();
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1_000);
  markSaved();
  toast({ message: t('settings.data.exportDone', { file: name }), tone: 'success' });
}

/** Whether this browser can hand a file to other apps (Drive, iCloud, mail) via the share sheet. */
export function canShareFiles(): boolean {
  try {
    return (
      typeof navigator !== 'undefined' &&
      typeof navigator.canShare === 'function' &&
      navigator.canShare({ files: [new File(['{}'], 'x.json', { type: 'application/json' })] })
    );
  } catch {
    return false;
  }
}

/** Sends the backup through the system share sheet, e.g. to Google Drive or iCloud. */
export async function shareBackup(): Promise<void> {
  const name = backupFileName();
  const file = new File([await backupBlob()], name, { type: 'application/json' });
  try {
    await navigator.share({ files: [file], title: name });
    markSaved();
    toast({ message: t('safety.shared'), tone: 'success' });
  } catch (error) {
    // Closing the share sheet is not an error worth reporting.
    if ((error as Error)?.name !== 'AbortError') {
      toast({ message: t('safety.shareFailed'), tone: 'danger' });
    }
  }
}

/** Reads and validates a file; shows a friendly error toast and returns null on failure. */
export async function readBackupFile(file: File): Promise<BackupFile | null> {
  try {
    return parseBackup(await file.text());
  } catch (error) {
    const code: BackupErrorCode = error instanceof BackupError ? error.code : 'corrupt';
    toast({
      message: t('settings.data.importError', { reason: t(ERROR_KEYS[code]) }),
      tone: 'danger',
    });
    return null;
  }
}

function offerUndo(snapshot: Snapshot, message: string): void {
  toast({
    message,
    tone: 'success',
    action: {
      label: t('common.undo'),
      onAction: () => {
        void restoreSnapshot(snapshot)
          .then(() => useSettings.getState().load())
          .then(() => toast({ message: t('settings.data.restored') }));
      },
    },
  });
}

export async function applyBackup(backup: BackupFile): Promise<void> {
  const snapshot = await takeSnapshot();
  await restoreBackup(backup);
  await useSettings.getState().load();
  offerUndo(snapshot, t('settings.data.importDone'));
}

export async function resetAllData(): Promise<void> {
  const snapshot = await takeSnapshot();
  useOnboarding.getState().suppress();
  await clearAllData();
  await useSettings.getState().load();
  offerUndo(snapshot, t('settings.data.resetDone'));
}
