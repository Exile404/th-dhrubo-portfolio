"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/data/profile";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPING = 2200;
const PAUSE_BETWEEN_WORDS = 200;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.05);
  const titles = PROFILE.rotatingTitles;
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = titles[wordIdx];

    if (!deleting && charIdx === word.length) {
      const t = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPING);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setWordIdx((prev) => (prev + 1) % titles.length);
      }, PAUSE_BETWEEN_WORDS);
      return () => clearTimeout(t);
    }
    const delay = deleting ? DELETE_SPEED : TYPE_SPEED;
    const t = setTimeout(() => setCharIdx((c) => c + (deleting ? -1 : 1)), delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, titles]);

  const socials = [
    { label: "LinkedIn", href: PROFILE.links.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: PROFILE.links.github, Icon: GitHubIcon },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="orb orb-violet absolute -right-[12%] -top-[8%] h-[55vw] max-h-[550px] w-[55vw] max-w-[550px] rounded-full opacity-15 blur-3xl" />
      <div className="orb orb-cyan absolute -bottom-[5%] -left-[8%] h-[45vw] max-h-[450px] w-[45vw] max-w-[450px] rounded-full opacity-15 blur-3xl" />
      <div className="orb orb-pink absolute left-[55%] top-[40%] h-[30vw] max-h-[300px] w-[30vw] max-w-[300px] rounded-full opacity-10 blur-3xl" />

      <div
        className={cn(
          "relative z-10 max-w-4xl text-center transition-all duration-1000 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <div className="badge-glow mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400">
          <Sparkles className="h-3 w-3" />
          Available for Opportunities
        </div>

        <h1 className="font-syne text-5xl font-extrabold leading-[1.05] tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-[4.75rem]">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-br from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            {PROFILE.shortName}
          </span>
        </h1>

        <div className="mb-7 mt-4 min-h-[44px] font-syne text-xl font-semibold text-foreground/40 sm:text-2xl md:text-3xl">
          <span className="text-violet-400">{titles[wordIdx].substring(0, charIdx)}</span>
          <span className="ml-0.5 animate-blink text-cyan-400">|</span>
        </div>

        <p className="mx-auto mb-11 max-w-xl font-dm text-base leading-relaxed text-foreground/45 sm:text-lg">
          {PROFILE.tagline}. Currently pursuing M.Sc. Data Science at Deakin University with focus on LLM operations and reliable AI systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            onClick={() => scrollTo("contact")}
            className="bg-gradient-to-br from-indigo-500 to-violet-500 px-8 font-dm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/45"
          >
            Get in Touch
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-foreground/15 bg-foreground/5 px-8 font-dm font-semibold transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/30 hover:bg-foreground/10"
          >
            <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
          </Button>
        </div>

        <div className="mt-9 flex justify-center gap-3.5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/5 bg-foreground/[0.03] text-foreground/45 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/15"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}