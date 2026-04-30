export const NAV_ITEMS = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

export type SectionId = Lowercase<NavItem> | "hero";