"use client";

import { useCallback, useRef, type MouseEvent } from "react";

const MAX_TILT_DEG = 8;

/**
 * Pointer-tracking hook for a subtle 3D hover tilt. Sets CSS custom
 * properties (--tilt-x / --tilt-y) directly on the element via the DOM,
 * avoiding React re-renders on every mousemove. Pair with the `.tilt`
 * utility class in globals.css. No-ops under prefers-reduced-motion.
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reducedMotionRef = useRef<boolean | null>(null);

  const prefersReducedMotion = () => {
    if (reducedMotionRef.current === null) {
      reducedMotionRef.current =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return reducedMotionRef.current;
  };

  const onMouseMove = useCallback((event: MouseEvent<T>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-y", `${(x * MAX_TILT_DEG * 2).toFixed(2)}deg`);
    el.style.setProperty("--tilt-x", `${(-y * MAX_TILT_DEG * 2).toFixed(2)}deg`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
