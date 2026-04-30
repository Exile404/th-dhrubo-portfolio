"use client";

import { SectionTitle } from "@/components/shared/section-title";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE } from "@/lib/data/experience";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  exp: (typeof EXPERIENCE)[number];
}

function ExperienceCard({ exp }: ExperienceCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border/40 bg-foreground/[0.025] p-8 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-cyan-400/15 hover:bg-foreground/[0.04] hover:shadow-2xl hover:shadow-black/30",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-syne text-2xl font-bold text-foreground">{exp.role}</h3>
        <Badge
          variant="secondary"
          className="border-cyan-400/15 bg-cyan-400/10 font-dm text-xs font-semibold text-cyan-400 hover:bg-cyan-400/15"
        >
          {exp.period}
        </Badge>
      </div>

      <p className="mb-6 font-dm text-sm text-foreground/40">
        {exp.company} · {exp.location}
      </p>

      <ul className="space-y-3.5">
        {exp.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-3.5">
            <span className="mt-2.5 h-[7px] w-[7px] flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400" />
            <p className="font-dm text-sm leading-[1.75] text-foreground/55">
              {highlight}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}