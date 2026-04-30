/**
 * Profile — personal info shape consumed by NavBar, Hero, About, Contact, Footer.
 *
 * MVC: this is the MODEL layer (interface only).
 * Actual data lives in `src/lib/data/profile.ts`.
 */

export interface ProfileLinks {
  linkedin: string;
  github: string;
}

export interface ProfileContact {
  phone: string;
  email: string;
  location: string;
}

export interface ProfileBio {
  paragraph1: string;
  paragraph2: string;
}

export interface ProfileStat {
  /** Display value, e.g. "1+", "7", "1" */
  value: string;
  /** Label below the value, e.g. "Years Exp." */
  label: string;
}

export interface Profile {
  /** Full legal name */
  name: string;
  /** Short name used in casual contexts (e.g. Hero greeting) */
  shortName: string;
  /** Logo / avatar initials (e.g. "THD") */
  initials: string;
  /** Primary professional title shown in metadata + Hero subtitle */
  title: string;
  /** One-line tagline shown in Hero */
  tagline: string;
  /** Two-paragraph About-section bio */
  bio: ProfileBio;
  contact: ProfileContact;
  links: ProfileLinks;
  /** Titles cycled through by the Hero typewriter effect */
  rotatingTitles: string[];
  /** Quick stats displayed in About section */
  stats: ProfileStat[];
}