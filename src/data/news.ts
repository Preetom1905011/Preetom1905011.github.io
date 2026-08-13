import type { NewsItem } from "./types";

// Add new updates at the top. Use content segments when only some words need a link.
export const news: NewsItem[] = [
  {
    month: "May",
    year: 2026,
    content: [
      { text: "I launched a new personal website with easily editable news and publication data." },
    ],
  },
  {
    month: "April",
    year: 2026,
    content: [
      { text: "I presented recent research at " },
      { text: "the University of Michigan", href: "https://umich.edu/" },
      { text: "." },
    ],
  },
  {
    month: "January",
    year: 2026,
    content: [
      { text: "Started a new research project on robust and practical machine learning systems." },
    ],
  },
];
