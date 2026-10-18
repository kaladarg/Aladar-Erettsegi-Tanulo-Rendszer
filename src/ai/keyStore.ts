import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/storage/db';

const AI_KEY = 'anthropicApiKey';

/** Anthropic keys start with "sk-ant-"; this only catches obvious paste mistakes. */
export function looksLikeAnthropicKey(value: string): boolean {
  return /^sk-ant-[A-Za-z0-9_-]{20,}$/.test(value.trim());
}

export async function saveAiKey(value: string): Promise<void> {
  await db.secrets.put({ key: AI_KEY, value: value.trim() });
}

export async function removeAiKey(): Promise<void> {
  await db.secrets.delete(AI_KEY);
}

/** Returns the stored key, `null` when none is set, or `undefined` while loading. */
export function useAiKey(): string | null | undefined {
  return useLiveQuery(async () => (await db.secrets.get(AI_KEY))?.value ?? null, []);
}
