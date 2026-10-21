/** Playful icon backgrounds for tiles and cards, readable in both themes. */
export const TINTS = {
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
  amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300',
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
} as const;

export type Tint = keyof typeof TINTS;
