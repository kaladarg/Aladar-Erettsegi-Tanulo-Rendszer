/** Parser for content-pack rich text (see docs/content-packs.md). */
export type Inline = { kind: 'text' | 'bold' | 'italic' | 'underline' | 'math'; value: string };

export function parseInline(text: string): Inline[] {
  const tokens: Inline[] = [];
  const pattern = /\$([^$\n]+)\$|\*\*([^*]+)\*\*|\*([^*\n]+)\*|__([^_\n]+)__/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index > last) tokens.push({ kind: 'text', value: text.slice(last, match.index) });
    if (match[1] !== undefined) tokens.push({ kind: 'math', value: match[1] });
    else if (match[2] !== undefined) tokens.push({ kind: 'bold', value: match[2] });
    else if (match[3] !== undefined) tokens.push({ kind: 'italic', value: match[3] });
    else tokens.push({ kind: 'underline', value: match[4]! });
    last = match.index + match[0].length;
  }
  if (last < text.length) tokens.push({ kind: 'text', value: text.slice(last) });
  return tokens;
}

export type Block = { kind: 'paragraph'; lines: string[] } | { kind: 'list'; items: string[] };

export function parseBlocks(text: string): Block[] {
  return text
    .split(/\n\s*\n/)
    .map((chunk) => chunk.split('\n').filter((line) => line.trim() !== ''))
    .filter((lines) => lines.length > 0)
    .map((lines) =>
      lines.every((line) => /^\s*- /.test(line))
        ? { kind: 'list' as const, items: lines.map((line) => line.replace(/^\s*- /, '')) }
        : { kind: 'paragraph' as const, lines },
    );
}
