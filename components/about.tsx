"use client";

import React from "react";
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
        <span className="font-medium">Computer Science</span> from BRAC
        University, I decided to pursue my passion for programming. In my
        undergraduate life, I worked on{" "}
        <span className="font-medium">Python</span>, focusing on{" "}
        <span className="font-medium">Machine Learning</span> and{" "}
        <span className="font-medium">AI</span>. I am familiar with{" "}
        <span className="font-medium">
          NextJS, React, TypeScript, C++, Django, Flask, FastAPI
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect, particularly in the{" "}
        <span className="font-medium">Backend</span>. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          Python, NextJS, React, Machine Learning and AI
        </span>
        . I am also familiar with <span className="font-medium">Prisma</span>{" "}
        and
        <span className="font-medium"> MongoDB</span>. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a backend
        developer.
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
