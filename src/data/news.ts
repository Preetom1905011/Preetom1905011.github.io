import type { NewsItem } from "./types";

// Add new updates at the top. Use content segments when only some words need a link.
export const news: NewsItem[] = [
  {
    month: "July",
    year: 2026,
    content: [
      { text: "DiffTilT ", italic: true},
      {text: "paper accepted in " },
      {text: "International Conference on Embedded Software (EMSOFT).", bold: true, italic: true}
    ],
  },
  {
    month: "June",
    year: 2026,
    content: [
      { text: "Presented " },
      { text: "Causality by Abstraction ", italic: true },
      { text: "paper in " },
      {text: "International Conference on Neuro-Symbolic Systems (NeuS) ", bold: true, italic: true},
      {text: "at the University of South California (USC)."}
    
    ],
  },
  {
    month: "April",
    year: 2026,
    content: [
      { text: "Accepted CSE Ph.D Admission offer from the " },
      { text: "University of Michigan.", bold: true}
    ],
  },
];
