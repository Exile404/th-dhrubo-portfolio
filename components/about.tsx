"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { UseSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = UseSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]  text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from BRAC University, 
        I pursued my passion for Data Science and AI. During my academic journey, I worked extensively with{" "}
        <span className="font-medium">Python</span>, focusing on{" "}
        <span className="font-medium">Machine Learning</span>,{" "}
        <span className="font-medium">AI</span>, and software development. I have hands-on experience with{" "}
        <span className="font-medium">TensorFlow, PyTorch, Keras, React, NextJS, FastAPI, Flask</span>, 
        and more. <span className="italic">My favorite part of programming</span> is solving complex problems, 
        particularly in <span className="font-medium">data-driven solutions</span>. I{" "}
        <span className="underline">love</span> seeing a project come to life after refining algorithms and models. 
        My core stack includes{" "}
        <span className="font-medium">Python, Machine Learning, AI, React, and FastAPI</span>. 
        I am also proficient with <span className="font-medium">PostgreSQL</span> and{" "}
        <span className="font-medium">MongoDB</span>. I am always eager to explore new technologies and am 
        currently working as a <span className="font-medium">full-time Data Scientist</span>.
      </p>


      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing
        <span className="font-medium"> Valorant</span> and gossiping with my
        friends. I love to make coffee. Fun fact, I always forget everything
        while coding.
      </p>
    </motion.section>
  );
}
