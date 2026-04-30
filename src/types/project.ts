export interface ProjectGradient {
  from: string;
  to: string;
}

export interface Project {
  name: string;
  period: string;
  tech: string[];
  description: string;
  github: string;
  gradient: ProjectGradient;
}