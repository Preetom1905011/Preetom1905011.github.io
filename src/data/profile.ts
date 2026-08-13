import type { Profile } from "./types";

export const profile: Profile = {
  name: "Preetom Biswas",
  nameVariants: ["Preetom Biswas", "Preetom Kumar Biswas"],
  title: "Ph.D. student in Computer Science & Engineering",
  affiliation: "University of Michigan",
  location: "Ann Arbor, MI",
  email: "pkbiswas at umich.edu",
  // Add your photo to public/profile.jpg, then set photoUrl to "/profile.jpg".
  photoUrl: "./mugshot.jpg",
  bio: [
    {
      text: "I am a Ph.D. student in Computer Science at the University of Michigan. My research interests include machine learning, systems, and building reliable tools for real-world use.",
    },
  ],
  about: [
    "I am interested in research questions that combine strong technical foundations with practical impact. I enjoy building systems, writing clearly about ideas, and collaborating across disciplines.",
    "Outside of research, I like exploring new places, reading, and working on small projects that make everyday workflows better.",
  ],
  socials: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=yTXdQ28AAAAJ&hl=en&oi=ao",
      kind: "scholar",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/preetombiswasasu/",
      kind: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/Preetom1905011",
      kind: "github",
    },
  ],
};
