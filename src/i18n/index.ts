import { hu, type Messages } from './hu';

type Leaves<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends string ? `${P}${K}` : Leaves<T[K], `${P}${K}.`>;
}[keyof T & string];

/** Every valid translation key, e.g. `settings.theme.title`. */
export type MessageKey = Leaves<Messages>;
export type MessageParams = Record<string, string | number>;

export const locale = 'hu-HU';

// Only Hungarian ships today; another locale would add a catalog and a switch here.
const active: Messages = hu;

function lookup(key: string): string | undefined {
  let node: unknown = active;
  for (const part of key.split('.')) {
    if (typeof node !== 'object' || node === null) return undefined;
    node = (node as Record<string, unknown>)[part];
  }
  return typeof node === 'string' ? node : undefined;
}

/**
 * Translate a key. `{name}` placeholders are replaced from `params`;
 * numbers are formatted for the active locale.
 */
export function t(key: MessageKey, params?: MessageParams): string {
  const template = lookup(key);
  if (template === undefined) {
    if (import.meta.env.DEV) console.warn(`Missing translation: ${key}`);
    return key;
  }
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => {
    const value = params[name];
    if (value === undefined) return match;
    return typeof value === 'number' ? formatNumber(value) : value;
  });
}

export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatDate(value: Date | number, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(locale, options ?? { dateStyle: 'long' }).format(value);
}
