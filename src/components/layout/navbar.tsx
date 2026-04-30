"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data/navigation";
import { PROFILE } from "@/lib/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.toLowerCase());

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS, "about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-all duration-500 ease-out",
        scrolled
          ? "border-b border-border/40 bg-background/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="flex h-full items-center justify-between px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="bg-gradient-to-br from-cyan-400 to-violet-400 bg-clip-text font-syne text-2xl font-extrabold tracking-tight text-transparent"
        >
          {PROFILE.initials}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(id)}
                className={cn(
                  "relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-300",
                  "after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full",
                  "after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400 after:transition-all after:duration-300",
                  "hover:after:w-1/2",
                  isActive
                    ? "bg-cyan-400/10 text-cyan-400 after:w-1/2"
                    : "text-foreground/55 hover:bg-cyan-400/5 hover:text-cyan-400"
                )}
              >
                {item}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10 md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-16 flex flex-col gap-1 border-b border-border/40 bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(id)}
                className={cn(
                  "rounded-md px-4 py-3 text-left text-base font-medium transition-colors",
                  isActive
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-foreground/55 hover:bg-cyan-400/5 hover:text-cyan-400"
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}