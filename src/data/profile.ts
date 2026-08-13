import type { Profile } from "./types";

export const profile: Profile = {
  name: "Preetom Biswas",
  nameVariants: ["Preetom Biswas", "Preetom Kumar Biswas"],
  title: "Ph.D. student in Computer Science & Engineering",
  affiliation: "University of Michigan",
  location: "Ann Arbor, MI",
  email: "pkbiswas@umich.edu",
  // Add your photo to public/profile.jpg, then set photoUrl to "/profile.jpg".
  photoUrl: "./mugshot2.jpeg",
  bio: [
    {
      text: "I am an incoming Ph.D. student in Computer Science & Engineering at the "
    },
    {
      text: "University of Michigan",
      bold: true,
    },
    {
      text: ", advised by "
    },
    {
      text: "Prof. Alexander Rodríguez",
      href: "https://alrodri.engin.umich.edu/"
    },
    {
      text: ". I completed my Master's (Thesis) and Bachelor's in Computer Science at Arizona State University, advised by "
    },
    {
      text: "Prof. Giulia Pedrielli",
      href: "https://julsped85.github.io/"
    },
    {
      text: ". My research focuses on "
    },
    {
      text: "causal inference, scenario generation, ",
      bold: true,
    },
    {
      text: "and " 
    },
    {
      text: "AI for Science",
      bold: true,
    },
    {
      text: ", with applications in epidemiology, healthcare, and autonomous systems."
    }
  ],
  researchFocus: [
    {
      title: "Causal Inference",
      description: "Formal logic, counterfactual reasoning, and causal discovery in complex dynamic systems.",
    },
    {
      title: "Scenario Generation",
      description: "Rare-event generation and falsification using Gaussian-process surrogates, Bayesian optimization, and diffusion models.",
    },
    {
      title: "AI for Science",
      description: "Multi-agent systems, time-series forecasting, AI-driven scientific modeling for epidemiology and public health.",
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
