import { useRef, type ChangeEvent } from 'react';
import { readPdf, type PdfReadResult } from '@/content/pdfImport';

/** A hidden file input for PDFs, opened with `open()`. */
export function usePdfPicker(onPicked: (result: PdfReadResult) => void | Promise<void>) {
  const input = useRef<HTMLInputElement>(null);
  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (file) await onPicked(await readPdf(file));
  };
  return {
    open: () => input.current?.click(),
    inputProps: {
      ref: input,
      type: 'file',
      accept: 'application/pdf,.pdf',
      className: 'sr-only',
      tabIndex: -1,
      'aria-hidden': true,
      onChange: (event: ChangeEvent<HTMLInputElement>) => void onChange(event),
    } as const,
  };
}
