"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { UseSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = UseSectionInView("Projects", 0.1);
  
  
  return (
    <section ref = {ref} id= "projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}