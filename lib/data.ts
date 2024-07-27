import React from "react";

import { CiMedicalCross } from "react-icons/ci";
import { FaRobot } from "react-icons/fa";
import { RiCodeView } from "react-icons/ri";
import chakri_khujo from "@/public/chakri_khujo.png";
import bdslp from "@/public/BDSLP.png";
import solonest from "@/public/solonest.png";
import routine from "@/public/routine.png";
import tasklist from "@/public/tasklist.png";
import ez from "@/public/ez.png";
import mt from "@/public/bracu_mongol_tori.jpg";
import dapp from "@/public/dapp.png";
import benchat from "@/public/bengali-chatbot.png";

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
    title: "Full Stack Developer",
    location: "TNC Global Ltd",
    description:
      "Worldwide business developement company. I have worked there to develop websites for clients",
    icon: React.createElement(RiCodeView),
    date: "2023 - 2024",
  },
  {
    title: "Senior Member of Control and Sofware",
    location: "Mongol Tori",
    description:
      "Mongol-Tori is a next-generation mars rover that will one day work alongside human explorers on the red planet. Here I developed my own control software using Python",
    icon: React.createElement(FaRobot),
    date: "2020 - 2022",
  },
  {
    title: "Director of Communications",
    location: "BRAC University ResponseTeam",
    description:
      "BracU Response Team is dedicated to the aid of students in crisis including any but not limited to epidemics, pandemics, or in general social welfare of the BracU community.",
    icon: React.createElement(CiMedicalCross),
    date: "2020 - 2022",
  },
  
] as const;

export const projectsData = [

  {
    title: "TaskList",
    description:
      "A website for managing our regular tasks",
    tags: ["Go", "NextJS", "Shadcn UI", "Postgresql"],
    imageUrl: tasklist,
    github_url: "https://github.com/Exile404/TaskList",
  },
  {
    title: "Bengali AI Chatbot",
    description:
      "A chatbot created so user can chat with it and get answer. Our model achieved 90% accuracy",
    tags: ["Pytorch","NLP","Deep Learning","Python","Tkinter"],
    imageUrl: benchat,
    github_url: 'https://github.com/Exile404/Bangla-chatbot',
  },
  {
    title: "Pharmaceutical Supply Chain",
    description:
      "A Dapp to track the medicine supply chain to avoid the mismanagement and keep the orginality",
    tags: ["NextJS", "Solidity", "MetaMask", "Ethereum", "Blockchain"],
    imageUrl: dapp,
    github_url: 'https://github.com/Exile404/pharma-supply-chain-dapp',
  },
  {
    title: "Chakri Khujo - Job Posting Website",
    description:
      "I have made this project by following MVC pattern. In this website one can find and search their job. They can apply for jobs",
    tags: ["React", "NodeJS","ExpressJS", "MongoDB", "SCSS", "Stripe"],
    imageUrl: chakri_khujo,
    github_url: 'https://github.com/Exile404/Chakri_Khujo',
  },
  {
    title: "Sign Language Detection BDSLP",
    description:
      "I have done research on this meachine learning project over 1 year. Using this model, We can transform Bengali Sign Language to word so that deaf people communicate with everyone",
    tags: ["Python","LSTM", "MediaPipe", "Tensorflow", "Machine Learning","Image Processing"],
    imageUrl: bdslp,
    github_url: 'https://github.com/Exile404/Sign-Language-Detection-BDSLP',
  },
  {
    title: "SoloNest",
    description:
      "A website for the student. It will help students find their desired super hostel",
    tags: ["Django", "PostgreSQL", "Tailwind CSS","SSL Commerezz" ],
    imageUrl: solonest,
    github_url: "https://github.com/Exile404/SoloNest",
  },
  {
    title: "Routine Maker",
    description:
      "A website for the BracU student where they can generate multiple routine by giving their course code in real-time.",
    tags: ["Selenium", "FastAPI", "CSS","Web Scraping"],
    imageUrl: routine,
    github_url: "https://github.com/Exile404/Routine-Maker",
  },
  
  {
    title: "Rover Controller ",
    description:
      "Control System for a rover with socket programming",
    tags: ["Python", "Socket Programming","Tkinter"],
    imageUrl: mt,
    github_url: "https://github.com/Exile404/Socket-Control",
  },
  {
    title: "E-Ticketing",
    description:
      "A website to book Bus, Train and Air ticket. It was my first web project",
    tags: ["HTML", "JavaScript", "CSS","PHP","MySQL"],
    imageUrl: ez,
    github_url: "https://github.com/Exile404/E-Ticketing",
  },
] as const;

export const skillsData = [
  "Python",
  "Machine Learning",
  "Artificial Intelligence",
  "Flask",
  "Go",
  "JavaScript",
  "NodeJS",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Selenium",
  "FastAPI",
  "ReactJS",
  "Django",
  "NextJS",
  "TypeScript",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Git",
  "Solidity",
  "Blockchain",
  "Docker",
  "Ruby on Rails"

] as const;