import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RichText } from './RichText';
import { parseBlocks, parseInline } from './richTextParse';

describe('rich text', () => {
  it('parses inline markup and maths', () => {
    expect(parseInline('Oldja meg: $x^2=4$, **fontos** és *dőlt*.')).toEqual([
      { kind: 'text', value: 'Oldja meg: ' },
      { kind: 'math', value: 'x^2=4' },
      { kind: 'text', value: ', ' },
      { kind: 'bold', value: 'fontos' },
      { kind: 'text', value: ' és ' },
      { kind: 'italic', value: 'dőlt' },
      { kind: 'text', value: '.' },
    ]);
  });

  it('parses underlined source passages', () => {
    expect(parseInline('Az __aláhúzott rész__ fontos.')).toEqual([
      { kind: 'text', value: 'Az ' },
      { kind: 'underline', value: 'aláhúzott rész' },
      { kind: 'text', value: ' fontos.' },
    ]);
  });

  it('splits paragraphs and lists', () => {
    expect(parseBlocks('Első\nsor\n\n- egy\n- kettő\n\n\nVége')).toEqual([
      { kind: 'paragraph', lines: ['Első', 'sor'] },
      { kind: 'list', items: ['egy', 'kettő'] },
      { kind: 'paragraph', lines: ['Vége'] },
    ]);
  });

  it('never renders content as HTML', () => {
    render(<RichText text={'<img src=x onerror=alert(1)> **ok**'} />);
    expect(screen.getByText(/<img src=x/)).toBeInTheDocument();
    expect(document.querySelector('img')).toBeNull();
    expect(screen.getByText('ok').tagName).toBe('STRONG');
  });

  it('renders maths with KaTeX', async () => {
    render(<RichText text="Képlet: $\\frac{a}{b}$" />);
    expect(
      await screen.findByText((_, el) => el?.classList.contains('katex') ?? false),
    ).toBeInTheDocument();
  });
});
