import type { RichTextSegment } from "../data/types";

type RichTextProps = {
  segments: RichTextSegment[];
};

export function RichText({ segments }: RichTextProps) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.href ? (
          <a key={`${segment.href}-${index}`} href={segment.href} target="_blank" rel="noreferrer">
            {segment.text}
          </a>
        ) : (
          <span key={`${segment.text}-${index}`}>{segment.text}</span>
        ),
      )}
    </>
  );
}
