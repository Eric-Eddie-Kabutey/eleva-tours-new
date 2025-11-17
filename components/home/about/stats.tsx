"use client";

import { Users, Globe, Route, Building } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

// 1. DATA: Define the stats data in one place
const statsData = [
  { Icon: Users, value: 100000, label: "Our Explorers" },
  { Icon: Globe, value: 5000, label: "Destinations" },
  { Icon: Route, value: 10000, label: "More Trips" },
  { Icon: Building, value: 2000, label: "Luxury Hotel" },
];

export function StatsBanner() {
  return (
    <section className="bg-green-opaque text-white py-20 md:py-24">
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Vertical Dashed Divider */}
              {index < statsData.length - 1 && (
                <div className="absolute top-0 right-0 h-full w-px bg-[repeating-linear-gradient(to_bottom,transparent,transparent_4px,theme(colors.white)_4px,theme(colors.white)_8px)] opacity-20 hidden lg:block" />
              )}
              
              {/* Icon */}
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <stat.Icon className="h-10 w-10 text-white" />
              </div>

              {/* Animated Value */}
              <h3 className="font-title text-5xl font-bold">
                <AnimatedCounter value={stat.value} />+
              </h3>

              {/* Label */}
              <p className="mt-1 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}