"use client";

import { useRipple } from "@/hooks/use-ripple";

export function ClickRipple() {
  const ripples = useRipple();

  return (
    <>
      {ripples.map((r) => (
        <div
          key={r.id}
          className="click-ripple"
          style={{ left: r.x - 27, top: r.y - 27 }}
        />
      ))}
    </>
  );
}