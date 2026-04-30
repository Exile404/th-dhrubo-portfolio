export type EducationIcon = "graduation" | "book";

export interface Education {
  school: string;
  location: string;
  degree: string;
  period: string;
  icon: EducationIcon;
}