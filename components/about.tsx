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
        I am a <span className="font-medium">Software Engineer</span> and{" "}
        <span className="font-medium">Data Scientist</span> specializing in{" "}
        <span className="font-medium">artificial intelligence</span>,{" "}
        <span className="font-medium">machine learning</span>, and{" "}
        <span className="font-medium">scalable software solutions</span>. I have
        developed{" "}
        <span className="font-medium">
          AI-powered document classification systems
        </span>{" "}
        for <span className="font-medium">DHL</span>, achieving over 90%
        accuracy by moving from{" "}
        <span className="font-medium">rule-based heuristics</span> to{" "}
        <span className="font-medium">LLaMA-based semantic pipelines</span>, and
        designed <span className="font-medium">Elasticsearch analytics</span>{" "}
        for data-driven quality control. At{" "}
        <span className="font-medium">Inteliweave</span> and{" "}
        <span className="font-medium">AIDocbuilder Inc.</span>, I built{" "}
        <span className="font-medium">full-stack applications</span> like{" "}
        <span className="font-medium">Study AI App</span> and{" "}
        <span className="font-medium">Socrates LLM</span> using{" "}
        <span className="font-medium">FastAPI</span>,{" "}
        <span className="font-medium">LangChain</span>,{" "}
        <span className="font-medium">React</span>, and{" "}
        <span className="font-medium">MongoDB</span>. My research in{" "}
        <span className="font-medium">sign language recognition</span>,{" "}
        <span className="font-medium">NLP</span>, and{" "}
        <span className="font-medium">healthcare analytics</span> has been
        published in <span className="font-medium">ACM</span> and{" "}
        <span className="font-medium">IEEE</span>.
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
