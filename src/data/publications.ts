import publicationsBib from "./publications.bib?raw";
import type { Publication } from "./types";

type BibEntry = {
  type: string;
  key: string;
  fields: Record<string, string>;
};

const FIELD_ALIASES = ["booktitle", "journal", "venue", "publisher", "school", "institution", "howpublished"];

function parseBibEntries(source: string): BibEntry[] {
  const entries: BibEntry[] = [];
  let index = 0;

  while (index < source.length) {
    const atIndex = source.indexOf("@", index);

    if (atIndex === -1) {
      break;
    }

    const openIndex = source.indexOf("{", atIndex);

    if (openIndex === -1) {
      break;
    }

    const type = source.slice(atIndex + 1, openIndex).trim().toLowerCase();
    let depth = 1;
    let cursor = openIndex + 1;

    while (cursor < source.length && depth > 0) {
      if (source[cursor] === "{") {
        depth += 1;
      } else if (source[cursor] === "}") {
        depth -= 1;
      }

      cursor += 1;
    }

    const body = source.slice(openIndex + 1, cursor - 1);
    const commaIndex = body.indexOf(",");

    if (commaIndex !== -1) {
      entries.push({
        type,
        key: body.slice(0, commaIndex).trim(),
        fields: parseFields(body.slice(commaIndex + 1)),
      });
    }

    index = cursor;
  }

  return entries;
}

function parseFields(source: string): Record<string, string> {
  const fields: Record<string, string> = {};
  let index = 0;

  while (index < source.length) {
    while (/[\s,]/.test(source[index] ?? "")) {
      index += 1;
    }

    const nameStart = index;

    while (/[\w-]/.test(source[index] ?? "")) {
      index += 1;
    }

    const name = source.slice(nameStart, index).trim().toLowerCase();

    while (/\s/.test(source[index] ?? "")) {
      index += 1;
    }

    if (!name || source[index] !== "=") {
      index += 1;
      continue;
    }

    index += 1;

    while (/\s/.test(source[index] ?? "")) {
      index += 1;
    }

    const { value, nextIndex } = readValue(source, index);
    fields[name] = cleanBibValue(value);
    index = nextIndex;
  }

  return fields;
}

function readValue(source: string, startIndex: number): { value: string; nextIndex: number } {
  const delimiter = source[startIndex];

  if (delimiter === "{") {
    let depth = 1;
    let index = startIndex + 1;

    while (index < source.length && depth > 0) {
      if (source[index] === "{") {
        depth += 1;
      } else if (source[index] === "}") {
        depth -= 1;
      }

      index += 1;
    }

    return {
      value: source.slice(startIndex + 1, index - 1),
      nextIndex: index,
    };
  }

  if (delimiter === "\"") {
    let index = startIndex + 1;

    while (index < source.length && source[index] !== "\"") {
      index += 1;
    }

    return {
      value: source.slice(startIndex + 1, index),
      nextIndex: index + 1,
    };
  }

  let index = startIndex;

  while (index < source.length && source[index] !== ",") {
    index += 1;
  }

  return {
    value: source.slice(startIndex, index),
    nextIndex: index,
  };
}

function cleanBibValue(value: string): string {
  return value
    .replace(/[{}]/g, "")
    .replace(/\\&/g, "&")
    .replace(/--/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function formatAuthor(author: string): string {
  const parts = author.split(",").map((part) => part.trim());

  if (parts.length >= 2) {
    return `${parts.slice(1).join(" ")} ${parts[0]}`.replace(/\s+/g, " ").trim();
  }

  return author.replace(/\s+/g, " ").trim();
}

function isArxivEntry(fields: Record<string, string>): boolean {
  return fields.archiveprefix?.toLowerCase() === "arxiv" || fields.url?.includes("arxiv.org");
}

function resolveVenue(fields: Record<string, string>, type: string): string {
  if (isArxivEntry(fields)) {
    return fields.eprint ? `arXiv preprint arXiv:${fields.eprint}` : "arXiv";
  }

  return FIELD_ALIASES.map((fieldName) => fields[fieldName]).find(Boolean) ?? type;
}

function resolveVenueUrl(fields: Record<string, string>): string | undefined {
  if (isArxivEntry(fields) && fields.eprint) {
    return fields.url ?? `https://arxiv.org/abs/${fields.eprint}`;
  }

  if (fields.url) {
    return fields.url;
  }

  if (fields.doi) {
    return `https://doi.org/${fields.doi.replace(/^https?:\/\/doi.org\//, "")}`;
  }

  return undefined;
}

function toPublication(entry: BibEntry): Publication {
  const fields = entry.fields;
  const year = Number.parseInt(fields.year ?? "0", 10);

  return {
    key: entry.key,
    type: entry.type,
    title: fields.title ?? "Untitled publication",
    authors: (fields.author ?? "")
      .split(/\s+and\s+/i)
      .map(formatAuthor)
      .filter(Boolean),
    venue: resolveVenue(fields, entry.type),
    venueUrl: resolveVenueUrl(fields),
    year: Number.isNaN(year) ? 0 : year,
    note: fields.note,
    selected: /^(true|yes|1)$/i.test(fields.selected ?? ""),
  };
}

export const publications: Publication[] = parseBibEntries(publicationsBib)
  .map(toPublication)
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
