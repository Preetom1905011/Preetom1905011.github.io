import type { AwardItem, ExperienceItem, HobbyPhoto, RichTextSegment } from "./types";

// Add experience entries here. They are displayed as position, institution, then period.
export const experiences: ExperienceItem[] = [
  {
    position: "Graduate Research Assistant",
    institution: "Arizona State University",
    period: "Dec. 2025 – May 2026",
  },
  {
    position: "Graduate Teaching Assistant",
    institution: "Arizona State University",
    period: "Aug. 2025 – Dec. 2025",
  },
  {
    position: "Undergraduate Research Assistant",
    institution: "Arizona State University",
    period: "Aug. 2023 – Aug. 2025",
  },
  {
    position: "SURI Summer Research Intern",
    institution: "Arizona State University",
    period: "May 2024 – Jul. 2024",
  },
];

// Add award entries here.
export const awards: AwardItem[] = [
  { title: "Outstanding UGTA & Legacy UGTA Awards, Fulton Schools of Engineering (2025)" },
  { title: "New American University Award, Arizona State University" },
  { title: "4th place, SoDA Code Challenge IX (2023)" },
  { title: "Best Use of Git Award, SunHacks (2023)" },
  { title: "3rd place, WiCS 17th Annual Programming Competition (2022)" },
];

export const hobbiesDescription: RichTextSegment[] = [
  { text: "Outside of research, I love " },
  { text: "Drawing, Cooking & Baking, Reading", bold: true },
  { text: ", and " },
  { text: "going to concerts", bold: true },
  { text: "." },
];

// Add photos stored in public/ here, for example:
// { src: "./hobbies/hiking.jpg", alt: "Hiking in the mountains", caption: "Hiking" },
export const hobbyPhotos: HobbyPhoto[] = [
  {src: "./books.jpeg", alt: "books", caption: ""},
  {src: "./croissant.jpeg", alt: "croissant", caption: ""},
  {src: "./drawing1.jpeg", alt: "drawing 1", caption: ""},
  {src: "./concert.jpeg", alt: "concert", caption: ""},
  {src: "./drawing2.jpeg", alt: "drawing 2", caption: ""},
];
