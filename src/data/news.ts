import type { NewsItem } from "./types";

// Add new updates at the top. Use content segments when only some words need a link.
export const news: NewsItem[] = [
  {
    day: "1",
    month: "July",
    year: 2026,
    content: [
      { text: "DiffTilT ", italic: true},
      {text: "paper accepted in " },
      {text: "International Conference on Embedded Software (EMSOFT).", bold: true, italic: true}
    ],
  },
  {
    day: "1",
    month: "June",
    year: 2026,
    content: [
      { text: "Presented Paper " },
      { text: "Causality by Abstraction ", italic: true },
      { text: "in " },
      {text: "International Conference on Neuro-Symbolic Systems (NeuS) ", bold: true, italic: true},
      {text: "at the University of South California (USC)."}
    
    ],
  },
  {
    day: "30",
    month: "April",
    year: 2026,
    content: [
      { text: "Accepted CSE Ph.D Admission offer from the " },
      { text: "University of Michigan.", bold: true}
    ],
  },
  {
    day: "1",
    month: "May",
    year: 2026,
    content: [
      { text: "Successfully Defended my Master's Thesis and graduated from" },
      { text: " Arizona State University.", bold: true}
    ],
  },
  {
    day: "1",
    month: "April",
    year: 2026,
    content: [
      { text: "Paper " },
      { text: "VITAB-A ", italic: true},
      { text: "accepted in the " },
      { text: "ES-Reasoning Workshop @ ICLR.", bold: true, italic: true}
    ],
  },
  {
    day: "15",
    month: "April",
    year: 2026,
    content: [
      { text: "Paper " },
      { text: "Causality by Abstraction ", italic: true},
      { text: "accepted in the " },
      { text: "International Conference on Neuro-Symbolic Systems (NeuS).", bold: true, italic: true}
    ],
  },
  {
    day: "1",
    month: "January",
    year: 2025,
    content: [
      { text: "Started as " },
      { text: "Graduate RA ", bold: true },
      { text: "in Cyber Physical Systems (CPS) Lab under Prof. Giulia Pedrielli." },
    
    ],
  },
  {
    day: "1",
    month: "December",
    year: 2025,
    content: [
      { text: "Presented Paper " },
      { text: "PySIRTEM ", italic: true },
      { text: "in " },
      {text: "Winter Simulation Conference ", bold: true, italic: true},
      {text: "in Seattle, WA."}
    
    ],
  },
  {
    day: "1",
    month: "August",
    year: 2025,
    content: [
      { text: "Started my Accelerated Master's as " },
      { text: "Graduate TA ", bold: true },
      { text: "for FSE100: Introduction to Engineering at Arizona State University." },
    
    ],
  },
  {
    day: "1",
    month: "May",
    year: 2025,
    content: [
      { text: "Graduated " },
      { text: "Bachelor's in Computer Science with 4.0 GPA", bold: true },
      { text: " from Arizona State University." },
    ],
  },
];
