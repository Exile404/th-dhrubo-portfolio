"use client";

import { BookOpen, GraduationCap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { EDUCATION } from "@/lib/data/education";
import { ACHIEVEMENTS } from "@/lib/data/achievements";
import type { Education, EducationIcon } from "@/types/education";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<EducationIcon, LucideIcon> = {
  graduation: GraduationCap,
  book: BookOpen,
};

interface EducationCardProps {
  education: Education;
  index: number;
}

function EducationCard({ education, index }: EducationCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = ICON_MAP[education.icon];

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border/40 bg-foreground/[0.025] p-7 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-cyan-400/15 hover:bg-foreground/[0.04] hover:shadow-2xl hover:shadow-black/30",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-400/15 text-cyan-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1.5 font-syne text-lg font-bold text-foreground">
        {education.degree}
      </h3>
      <p className="mb-1 font-dm text-sm text-foreground/45">{education.school}</p>
      <p className="font-dm text-xs text-foreground/30">
        {education.location} · {education.period}
      </p>
    </div>
  );
}

interface AchievementRowProps {
  text: string;
  index: number;
}

function AchievementRow({ text, index }: AchievementRowProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3.5 rounded-xl border border-border/30 bg-foreground/[0.015] px-5 py-3.5 transition-all duration-600 ease-out hover:translate-x-2 hover:border-amber-400/20 hover:bg-amber-400/[0.04]",
        visible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
      )}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400/15 to-orange-400/15 text-amber-400">
        <Trophy className="h-4 w-4" />
      </span>
      <span className="font-dm text-sm text-foreground/60">{text}</span>
    </div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionTitle>Education & Achievements</SectionTitle>

      <div className="mb-11 grid gap-6 sm:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <EducationCard key={edu.school} education={edu} index={i} />
        ))}
      </div>

      <div className="space-y-2.5">
        {ACHIEVEMENTS.map((text, i) => (
          <AchievementRow key={text} text={text} index={i} />
        ))}
      </div>
    </section>
  );
}