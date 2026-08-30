"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  priority?: boolean;
  imagePosition?: string;
  className?: string;
}

/**
 * Drop-in replacement for a full-bleed `<Image fill>` background that adds a
 * subtle scroll-linked depth effect: the image drifts a few pixels vertically
 * as the section scrolls through the viewport, at a slower rate than the
 * page (classic parallax). rAF-throttled scroll listener; no-ops under
 * prefers-reduced-motion.
 */
export function ParallaxImage({
  src,
  alt = "",
  priority,
  imagePosition = "center",
  className,
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const imgWrap = imgWrapRef.current;
    if (!wrapper || !imgWrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height + viewportHeight;
      const traveled = viewportHeight - rect.top;
      const progress = total > 0 ? Math.min(1, Math.max(0, traveled / total)) : 0;
      const offset = (progress - 0.5) * 56;
      imgWrap.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.12)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
          className={className}
        />
      </div>
    </div>
  );
}
