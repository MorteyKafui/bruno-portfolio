export interface Image {
  /** Path relative to `/public`, e.g. `/assets/imgs/portrait.jpg`. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export type NavItem = Link;

export interface Professor {
  /** First name, used for the wordmark. */
  name: string;
  /** Full display name. Placeholder until the real surname is supplied. */
  fullName: string;
  title: string;
  roles: string[];
  university?: string;
  department?: string;
  location?: string;
  shortBio: string;
  portrait: Image;
  email?: string;
  cvUrl?: string;
  links: Link[];
}

export interface ResearchArea {
  title: string;
  /** Unique lowercase kebab-case identifier, also used for future routes. */
  slug: string;
  description: string;
  tags: string[];
  longDescription?: string;
  image?: Image;
}
