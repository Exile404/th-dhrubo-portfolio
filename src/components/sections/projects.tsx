"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data/projects";
import type { Project } from "@/types/project";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-cursor-hover
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/40 bg-foreground/[0.025] p-7 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-cyan-400/15 hover:shadow-2xl hover:shadow-black/40",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, ${project.gradient.from}, ${project.gradient.to})`,
        }}
      />

      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-syne text-lg font-bold leading-tight text-foreground">
          {project.name}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} on GitHub`}
          className="flex-shrink-0 text-foreground/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>

      <span className="font-dm text-xs text-foreground/30">{project.period}</span>

      <p className="my-4 font-dm text-sm leading-[1.75] text-foreground/50">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="bg-violet-400/10 font-dm text-[11px] font-semibold text-violet-400 hover:bg-violet-400/15"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}