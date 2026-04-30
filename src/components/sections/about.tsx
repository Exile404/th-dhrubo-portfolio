"use client";

import { SectionTitle } from "@/components/shared/section-title";
import { PROFILE } from "@/lib/data/profile";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionTitle>About Me</SectionTitle>

      <div
        ref={ref}
        className={cn(
          "grid gap-10 transition-all duration-900 ease-out md:grid-cols-2",
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <div className="space-y-5">
          <p className="font-dm text-base leading-[1.85] text-foreground/60 sm:text-base">
            {PROFILE.bio.paragraph1}
          </p>
          <p className="font-dm text-base leading-[1.85] text-foreground/60">
            {PROFILE.bio.paragraph2}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {PROFILE.stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-border/40 bg-foreground/[0.025] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="bg-gradient-to-br from-cyan-400 to-violet-400 bg-clip-text font-syne text-3xl font-extrabold text-transparent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 font-dm text-sm text-foreground/35">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}