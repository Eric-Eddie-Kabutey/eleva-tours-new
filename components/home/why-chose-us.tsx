"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
    Map,          // For Set Travel Plan
    Compass,      // For Explore Around
    Users,        // For Best Guide
    Headset,      // For Support 24/7
    Hotel,        // For Luxury Hotel
    Ticket,       // For Easy Booking
} from "lucide-react";

// 1. DATA: Define the features data array for clean mapping
const featuresData = [
  { Icon: Map, title: "Set Travel Plan", description: "Distinctively impact client-centered ideas via future-proof paradigms." },
  { Icon: Compass, title: "Explore Around", description: "Distinctively impact client-centered ideas via future-proof paradigms." },
  { Icon: Users, title: "Best Guide", description: "Distinctively impact client-centered ideas via future-proof paradigms." },
  { Icon: Headset, title: "Support 24/7", description: "Distinctively impact client-centered ideas via future-proof paradigms." },
  { Icon: Hotel, title: "Luxury Hotel", description: "Distinctively impact client-centered ideas via future-proof paradigms." },
  { Icon: Ticket, title: "Easy Booking", description: "Distinctively impact client-centered ideas via future-proof paradigms." },
];

// 2. ANIMATION VARIANTS
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-x-hidden">
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* ====== LEFT COLUMN: TEXT CONTENT ====== */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-style text-green-opaque text-2xl">Why Choose Us</p>
              <div className="w-10 h-[2px] bg-green-opaque" />
              <div className="w-4 h-[2px] bg-green-opaque" />
              <div className="w-4 h-[2px] bg-green-opaque" />
            </div>
            
            <h2 className="font-title text-3xl md:text-4xl font-semibold text-black leading-tight mb-4">
              Get The Best Travel Experience
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              Professionally engineer world-class leadership skills after end-to-end growth strategies. Assertively create innovative schemas through installed base potentialities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {featuresData.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-yellow-opaque">
                    {/* Replace this with your custom <Image /> component if you have SVG files */}
                    <feature.Icon className="h-6 w-6 text-green-opaque" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">{feature.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ====== RIGHT COLUMN: DECORATIVE IMAGE ====== */}
          <div className="flex items-center justify-center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-[500px] h-[500px]"
            >
              <Image 
                src="/assets/images/home/why-choose-us-traveler.png"
                alt="Happy traveler sitting on luggage with world landmarks" 
                layout="fill" 
                objectFit="contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}