import type { ReactNode } from "react";
import type { RichTextSegment } from "../data/types";

type RichTextProps = {
  segments: RichTextSegment[];
};

export function RichText({ segments }: RichTextProps) {
  return (
    <>
      {segments.map((segment, index) => {
        let content: ReactNode = segment.text;

        if (segment.bold) {
          content = <strong>{content}</strong>;
        }

        if (segment.italic) {
          content = <em>{content}</em>;
        }

        return segment.href ? (
          <a key={`${segment.href}-${index}`} href={segment.href} target="_blank" rel="noreferrer">
            {content}
          </a>
        ) : (
          <span key={`${segment.text}-${index}`}>{content}</span>
        );
      })}
    </>
  );
}
