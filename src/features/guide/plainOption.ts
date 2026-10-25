/**
 * A spoken name for an option written in TeX: the rendered formula's MathML
 * does not give the button an accessible name, so the source is read out.
 */
export function plainOption(text: string): string | undefined {
  if (!text.includes('$')) return undefined;
  return text
    .replace(/\$([^$]+)\$/g, (_, tex: string) =>
      tex
        .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)')
        .replace(/\\sqrt\{([^}]*)\}/g, 'gyök($1)')
        .replace(/\\(cdot|times)/g, '·')
        .replace(/\\[a-zA-Z]+/g, (cmd) => cmd.slice(1))
        .replace(/[{}]/g, ''),
    )
    .replace(/\*\*|__|\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
