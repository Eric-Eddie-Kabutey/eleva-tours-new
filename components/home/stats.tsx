"use client";

import { motion, Variants } from "framer-motion";
import { Users, Globe, Route, Building } from "lucide-react";


const statsData = [
  {
    Icon: Users, 
    value: "100,000+",
    label: "Our Explorers",
  },
  {
    Icon: Globe,
    value: "5,000+",
    label: "Destinations",
  },
  {
    Icon: Route,
    value: "10,000+",
    label: "More Trips",
  },
  {
    Icon: Building,
    value: "2,000+",
    label: "Luxury Hotel",
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Stats() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container max-6xl 2xl:max-w-7xl mx-auto px-4">
        {/* 3. FRAMER MOTION CONTAINER */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when it enters the viewport
          viewport={{ once: true, amount: 0.5 }} // Animate once, when 50% is visible
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Vertical Dashed Divider (hidden on the last item) */}
              {index < statsData.length - 1 && (
                <div className="absolute top-0 right-0 h-full w-px bg-[repeating-linear-gradient(to_bottom,transparent,transparent_4px,theme(colors.gray.300)_4px,theme(colors.gray.300)_8px)] hidden lg:block" />
              )}
              
              {/* Icon */}
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-light/30">
                <stat.Icon className="h-10 w-10 text-brand-green" />
              </div>

              {/* Value */}
              <h3 className="font-title text-4xl font-bold text-brand-dark">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="mt-1 text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}