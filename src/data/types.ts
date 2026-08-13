export type RichTextSegment = {
  text: string;
  href?: string;
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
  about: string[];
  socials: SocialLink[];
};

export type NewsItem = {
  month: string;
  year: number;
  content: RichTextSegment[];
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
