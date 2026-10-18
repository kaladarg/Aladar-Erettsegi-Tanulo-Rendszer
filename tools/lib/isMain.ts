import { realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

/** True when the module is the script being run (works on Windows paths too). */
export function isMain(moduleUrl: string): boolean {
  const script = process.argv[1];
  if (!script) return false;
  try {
    return pathToFileURL(realpathSync(script)).href === moduleUrl;
  } catch {
    return false;
  }
}
