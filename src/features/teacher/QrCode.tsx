import qrcode from 'qrcode-generator';
import { useMemo } from 'react';

/** A QR code as inline SVG; null when the text does not fit in one. */
export function QrCode({ text, label }: { text: string; label: string }) {
  const svg = useMemo(() => {
    try {
      const qr = qrcode(0, 'M');
      qr.addData(text, 'Byte');
      qr.make();
      return qr.createSvgTag({ cellSize: 4, margin: 4, scalable: true });
    } catch {
      return null;
    }
  }, [text]);
  if (!svg) return null;
  return (
    <div
      role="img"
      aria-label={label}
      className="w-56 max-w-full rounded-md bg-white p-2 [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
      // The SVG comes from the QR library and contains only rectangles and paths.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
