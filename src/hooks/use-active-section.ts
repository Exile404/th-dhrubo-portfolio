"use client";

import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: readonly string[],
  defaultId: string = sectionIds[0] ?? ""
): string {
  const [activeId, setActiveId] = useState<string>(defaultId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -40% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}