import React from "react";
import { SiAlwaysdata } from "react-icons/si";
import chakri_khujo from "@/public/chakri_khujo.png";
import solonest from "@/public/solonest.png";
import mt from "@/public/bracu_mongol_tori.jpg";
import studyai from "@/public/studyai.png"
import socrates from "@/public/socrates.png"; 

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
{
    title: "Jr. Data Scientist",
    location: "Inteliweave Ltd.",
    description:
      "Led development of an automated system for detecting logistics-related documents for partners like DHL, transitioning from rule-based methods with spaCy and regex to scalable LLaMA-based semantic classification pipelines.",
    icon: React.createElement(SiAlwaysdata),
    date: "Jan 2025 - Jul 2025",
  },
  
  {
    title: "Jr. Data Scientist",
    location: "AIDocBuilder Inc.",
    description:
      "Built initial rule-based heuristics using spaCy and regex with OCR cleanup and preprocessing pipelines to classify logistics documents. Integrated predictions into a review interface and generated annotated corpora to seed ML migration.",
    icon: React.createElement(SiAlwaysdata),
    date: "Sep 2024 - Jan 2025",
  },
] as const;


export const projectsData = [

  {
  title: "Study AI App",
  description:
    "A full-stack AI tutoring platform with a FastAPI and LangChain backend using Google Gemini API for LLM, YouTube transcript integration, and MongoDB-backed chat memory. Generates summaries, quizzes, resources, and performance reports through a NextJS Shadcn UI frontend.",
  tags: ["FastAPI", "LangChain", "Google Gemini API", "MongoDB", "NextJS", "Shadcn UI"],
  imageUrl: studyai,
  github_url: "https://github.com/Exile404/Study-AI-App",
},
{
  title: "Socrates LLM",
  description:
    "A custom large language model fine-tuned for contextual reasoning and document understanding, optimized for lightweight deployment and fast inference.",
  tags: ["Python", "Machine Learning", "NLP", "LLM"],
  imageUrl: socrates,
  github_url: "https://github.com/Exile404/Socrates-LLM",
},
{
  title: "Chakri Khujo - Job Posting Website",
  description:
    "A full-stack job board for students to post and search internships, featuring authentication, resume uploads, and advanced filtering.",
  tags: ["React", "Tailwind CSS", "NodeJS", "MongoDB"],
  imageUrl: chakri_khujo,
  github_url: "https://github.com/Exile404/Chakri_Khujo",
},
{
  title: "SoloNest - Hostel Management System",
  description:
    "An off-campus housing management platform with room allocation, tenant check-in/out workflows, and role-based access control.",
  tags: ["Django", "PostgreSQL", "Tailwind CSS"],
  imageUrl: solonest,
  github_url: "https://github.com/Exile404/SoloNest",
},
{
  title: "Mongol Tori Rover Controller",
  description:
    "A real-time teleoperation and telemetry dashboard for a rover, streaming control commands and sensor data over Python sockets with a custom GUI.",
  tags: ["Python", "Socket Programming", "Tkinter"],
  imageUrl: mt,
  github_url: "https://github.com/Exile404/Socket-Control",
},

] as const;

export const skillsData = [
  "Python",
  "Go",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "Machine Learning",
  "Artificial Intelligence",
  "NLP",
  "Deep Learning",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "SpaCy",
  "Hugging Face Transformers",
  "LSTM",
  "OpenCV",
  "YOLOv5",
  "Pandas",
  "NumPy",
  "Docker",
  "Git",
  "CI/CD",
  "Kubernetes",
  "Elasticsearch",
  "Kibana",
  "Neo4j",
  "PostgreSQL",
  "MongoDB",
  "FastAPI",
  "Django",
  "Flask",
  "Node.js",
  "REST API",
  "GraphQL",
  "WebSockets",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS"
] as const;