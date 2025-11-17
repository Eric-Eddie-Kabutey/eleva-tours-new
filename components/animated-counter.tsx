"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  className?: string;
};

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  
  // Create a spring animation for a smoother, more natural count-up
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        if (ref.current) {
          // Convert to number and round, then format with commas and update the text content directly
          const rounded = Math.round(Number(latest));
          ref.current.textContent = new Intl.NumberFormat("en-US").format(rounded);
        }
      });

      return () => {
        unsubscribe();
      };
  }, [springValue]);

  return <span ref={ref} className={className} />;
}