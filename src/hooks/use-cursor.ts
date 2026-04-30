"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const HOVERABLE_SELECTOR =
  'a, button, input, textarea, [role="button"], [data-cursor-hover]';

const RING_LERP = 0.18;

function subscribeHoverMedia(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(hover: none)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getHoverSnapshot() {
  return !window.matchMedia("(hover: none)").matches;
}

function getHoverServerSnapshot() {
  return false;
}

export function useCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const isEnabled = useSyncExternalStore(
    subscribeHoverMedia,
    getHoverSnapshot,
    getHoverServerSnapshot
  );

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (!isEnabled) return;

    const target = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let frameId = 0;

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      setIsHovering(!!el?.closest(HOVERABLE_SELECTOR));
    };

    const handleLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    const handleEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * RING_LERP;
      ring.y += (target.y - ring.y) * RING_LERP;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    frameId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      cancelAnimationFrame(frameId);
    };
  }, [isEnabled]);

  return { dotRef, ringRef, isEnabled, isHovering, isVisible };
}