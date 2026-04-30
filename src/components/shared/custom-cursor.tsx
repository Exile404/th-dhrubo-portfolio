"use client";

import { useCursor } from "@/hooks/use-cursor";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const { dotRef, ringRef, isEnabled, isHovering, isVisible } = useCursor();

  if (!isEnabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[width,height,opacity] duration-200 ease-out",
          "bg-gradient-to-br from-cyan-400 to-violet-500",
          isHovering ? "h-1 w-1 opacity-50" : "h-2 w-2 opacity-100",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border transition-[width,height,border-color,background-color] duration-300 ease-out",
          isHovering
            ? "h-14 w-14 border-violet-400/60 bg-violet-400/10"
            : "h-9 w-9 border-cyan-400/50 bg-transparent",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
    </>
  );
}