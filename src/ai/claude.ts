import type Anthropic from '@anthropic-ai/sdk';
import type { AiModel } from '@/domain/settings';

/**
 * Optional AI features, called straight from the browser with the student's
 * own API key (there is no backend). The SDK is loaded only when used.
 */
export type AiMessage = Anthropic.Beta.BetaMessageParam;

export type AiErrorCode = 'auth' | 'rateLimit' | 'refused' | 'network' | 'other';

export class AiError extends Error {
  constructor(public readonly code: AiErrorCode) {
    super(code);
    this.name = 'AiError';
  }
}

async function createClient(apiKey: string) {
  const { default: AnthropicClient } = await import('@anthropic-ai/sdk');
  // The key belongs to the student and never leaves their browser except to Anthropic.
  return new AnthropicClient({ apiKey, dangerouslyAllowBrowser: true, maxRetries: 1 });
}

/** Server-side refusal fallback where the model supports it (not on Haiku). */
const fallback = (model: AiModel) =>
  model === 'claude-haiku-5-5'
    ? {}
    : {
        betas: ['server-side-fallback-2026-07-01'] as Anthropic.Beta.AnthropicBeta[],
        fallbacks: 'default' as const,
      };

async function mapError(error: unknown): Promise<AiError> {
  const { default: AnthropicClient } = await import('@anthropic-ai/sdk');
  if (error instanceof AnthropicClient.AuthenticationError) return new AiError('auth');
  if (error instanceof AnthropicClient.PermissionDeniedError) return new AiError('auth');
  if (error instanceof AnthropicClient.RateLimitError) return new AiError('rateLimit');
  if (error instanceof AnthropicClient.APIConnectionError) return new AiError('network');
  return new AiError('other');
}

const textOf = (message: Anthropic.Beta.BetaMessage) =>
  message.content
    .filter((block): block is Anthropic.Beta.BetaTextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('');

/** Streams a tutor answer; `onText` receives the text as it arrives. */
export async function streamAnswer(options: {
  apiKey: string;
  model: AiModel;
  system: string;
  messages: AiMessage[];
  onText: (delta: string) => void;
  signal?: AbortSignal;
}): Promise<string> {
  const client = await createClient(options.apiKey);
  try {
    const stream = client.beta.messages.stream(
      {
        model: options.model,
        max_tokens: 16000,
        system: options.system,
        messages: options.messages,
        output_config: { effort: 'low' },
        ...fallback(options.model),
      },
      { signal: options.signal },
    );
    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        options.onText(event.delta.text);
      }
    }
    const final = await stream.finalMessage();
    if (final.stop_reason === 'refusal') throw new AiError('refused');
    return textOf(final);
  } catch (error) {
    if (error instanceof AiError || options.signal?.aborted) throw error;
    throw await mapError(error);
  }
}

/** One request whose answer must match a JSON schema (e.g. rubric suggestions). */
export async function askJson<T>(options: {
  apiKey: string;
  model: AiModel;
  system: string;
  prompt: string;
  schema: Record<string, unknown>;
  signal?: AbortSignal;
}): Promise<T> {
  const client = await createClient(options.apiKey);
  try {
    const stream = client.beta.messages.stream(
      {
        model: options.model,
        max_tokens: 16000,
        system: options.system,
        messages: [{ role: 'user', content: options.prompt }],
        output_config: {
          effort: 'medium',
          format: { type: 'json_schema', schema: options.schema },
        },
        ...fallback(options.model),
      },
      { signal: options.signal },
    );
    const final = await stream.finalMessage();
    if (final.stop_reason === 'refusal') throw new AiError('refused');
    return JSON.parse(textOf(final)) as T;
  } catch (error) {
    if (error instanceof AiError || options.signal?.aborted) throw error;
    throw await mapError(error);
  }
}
