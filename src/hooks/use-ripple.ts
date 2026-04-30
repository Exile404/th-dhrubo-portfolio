"use client";

import { useEffect, useRef, useState } from "react";

export interface Ripple {
  id: number;
  x: number;
  y: number;
}

const RIPPLE_LIFETIME_MS = 700;

export function useRipple(): Ripple[] {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const id = ++idCounter.current;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, RIPPLE_LIFETIME_MS);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return ripples;
}