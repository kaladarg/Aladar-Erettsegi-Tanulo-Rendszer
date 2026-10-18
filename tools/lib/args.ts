/** Minimal `--key value` / `--flag` parser so tools need no CLI dependency. */
export function parseArgs(argv: string[]): Record<string, string | true> {
  const args: Record<string, string | true> = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]!;
    if (!arg.startsWith('--')) continue;
    const [key, inline] = arg.slice(2).split('=', 2) as [string, string | undefined];
    const next = argv[i + 1];
    if (inline !== undefined) args[key] = inline;
    else if (next !== undefined && !next.startsWith('--')) {
      args[key] = next;
      i++;
    } else args[key] = true;
  }
  return args;
}

export function stringArg(
  args: Record<string, string | true>,
  key: string,
  fallback?: string,
): string {
  const value = args[key];
  if (typeof value === 'string') return value;
  if (fallback !== undefined) return fallback;
  throw new Error(`Missing required option --${key}`);
}

export function listArg(
  args: Record<string, string | true>,
  key: string,
  fallback: string[],
): string[] {
  const value = args[key];
  return typeof value === 'string'
    ? value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    : fallback;
}
