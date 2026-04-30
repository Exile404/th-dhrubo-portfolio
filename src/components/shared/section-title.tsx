"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      <h2 className="bg-gradient-to-br from-cyan-400 via-violet-400 to-pink-400 bg-clip-text font-syne text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-[2.75rem]">
        {children}
      </h2>
      <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
    </div>
  );
}