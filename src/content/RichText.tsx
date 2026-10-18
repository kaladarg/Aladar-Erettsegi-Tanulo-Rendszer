import { useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { parseBlocks, parseInline } from './richTextParse';

/**
 * Renders content-pack rich text: paragraphs (blank line), "- " lists,
 * **bold**, *italic* and $LaTeX$. Content is always rendered as React text;
 * only KaTeX's own escaped output is injected as HTML.
 */
type Katex = typeof import('katex');
let katexPromise: Promise<Katex> | null = null;
const loadKatex = () =>
  (katexPromise ??= Promise.all([import('katex'), import('katex/dist/katex.min.css')]).then(
    ([module]) => module,
  ));

function MathSpan({ tex }: { tex: string }) {
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    void loadKatex().then((katex) => {
      if (!active) return;
      setHtml(
        katex.default.renderToString(tex, {
          throwOnError: false,
          output: 'htmlAndMathml',
          trust: false,
        }),
      );
    });
    return () => {
      active = false;
    };
  }, [tex]);
  if (html === null) return <span className="font-mono">{tex}</span>;
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderInline(text: string): ReactNode[] {
  return parseInline(text).map((token, index) => {
    switch (token.kind) {
      case 'bold':
        return <strong key={index}>{token.value}</strong>;
      case 'italic':
        return <em key={index}>{token.value}</em>;
      case 'math':
        return <MathSpan key={index} tex={token.value} />;
      default:
        return token.value;
    }
  });
}

export function RichText({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn('grid gap-3', className)}>
      {parseBlocks(text).map((block, index) =>
        block.kind === 'list' ? (
          <ul key={index} className="list-disc space-y-1 pl-6">
            {block.items.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </ul>
        ) : (
          <p key={index}>
            {block.lines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {renderInline(line)}
              </span>
            ))}
          </p>
        ),
      )}
    </div>
  );
}
