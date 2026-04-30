"use client";

import { SectionTitle } from "@/components/shared/section-title";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/data/skills";
import type { SkillCategory } from "@/types/skill";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border/40 bg-foreground/[0.025] p-7 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-cyan-400/15 hover:bg-foreground/[0.04] hover:shadow-2xl hover:shadow-black/30",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="mb-4 font-syne text-xs font-bold uppercase tracking-widest text-cyan-400">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="cursor-default border border-border/40 bg-foreground/[0.04] font-dm text-[13px] font-medium text-foreground/65 transition-all duration-300 hover:-translate-y-[3px] hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-400/10"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS.map((category, i) => (
          <SkillCard key={category.category} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}