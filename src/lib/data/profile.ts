import type { Profile } from "@/types/profile";

export const PROFILE: Profile = {
  name: "Tahsinul Haque Dhrubo",
  shortName: "Dhrubo",
  initials: "THD",
  title: "Data Scientist & ML Engineer",
  tagline:
    "Building intelligent systems with LLMs, NLP, and production ML pipelines",
  bio: {
    paragraph1:
      "I'm a Data Scientist and ML Engineer with hands-on experience deploying LLMs in production at enterprise scale — including document classification systems serving DHL. My work spans the full ML lifecycle: from dataset curation and model fine-tuning to building FastAPI backends with Elasticsearch analytics.",
    paragraph2:
      "Currently pursuing my Master's at Deakin University, with research interests in Active Inference, multi-agent LLM systems, and reliable LLM operations. Published in Nature Scientific Reports for Bangla sign language recognition.",
  },
  contact: {
    phone: "+610422138819",
    email: "tahsinul.haque.dhrubo@gmail.com",
    location: "Melbourne, Australia",
  },
  links: {
    linkedin: "https://linkedin.com/in/thdhrubo",
    github: "https://github.com/Exile404",
  },
  rotatingTitles: [
    "Data Scientist",
    "ML Engineer",
    "LLM Specialist",
    "NLP Researcher",
  ],
  stats: [
    { value: "1+", label: "Years Exp." },
    { value: "7+", label: "Projects" },
    { value: "4", label: "Publication" },
    { value: "5+", label: "Awards" },
  ],
};