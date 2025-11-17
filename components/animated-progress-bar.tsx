"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type AnimatedProgressBarProps = {
  label: string;
  percentage: number;
};

export function AnimatedProgressBar({ label, percentage }: AnimatedProgressBarProps) {
  const ref = useRef(null);
  // Animate when the component is in view
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const barVariants: Variants = {
    hidden: { width: "0%" },
    visible: { width: `${percentage}%`, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-1 text-sm font-semibold">
        <span className="text-brand-dark">{label}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <motion.div
          className="h-2 bg-brand-green rounded-full"
          variants={barVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </div>
  );
}