/** Counts words the way a reader would: runs of letters/digits, keeping hyphenated words together. */
export function countWords(text: string): number {
  return text.match(/[\p{L}\p{N}]+(?:[-'’][\p{L}\p{N}]+)*/gu)?.length ?? 0;
}
