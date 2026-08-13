export type RichTextSegment = {
  text: string;
  href?: string;
  bold?: boolean;
  italic?: boolean;
};

export type ResearchFocus = {
  title: string;
  description: string;
};

export type SocialKind = "email" | "github" | "linkedin" | "scholar" | "website";

export type SocialLink = {
  label: string;
  href: string;
  kind: SocialKind;
};

export type Profile = {
  name: string;
  nameVariants: string[];
  title: string;
  affiliation: string;
  location: string;
  email: string;
  photoUrl?: string;
  bio: RichTextSegment[];
  researchFocus: ResearchFocus[];
  about: string[];
  socials: SocialLink[];
};

export type NewsItem = {
  day: string;
  month: string;
  year: number;
  content: RichTextSegment[];
};

export type ExperienceItem = {
  position: string;
  institution: string;
  period: string;
};

export type AwardItem = {
  title: string;
};

export type HobbyPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type Publication = {
  key: string;
  type: string;
  title: string;
  authors: string[];
  venue: string;
  venueUrl?: string;
  year: number;
  note?: string;
  selected?: boolean;
};
