"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MapPin } from "lucide-react";

import { PopularDestination, popularDestinationsData } from "@/lib/destinations-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MAX_DESTINATIONS = 4; // showing four card

type ThumbProps = {
  selected: boolean;
  onClick: () => void;
  item: PopularDestination;
};

const ThumbCard = ({ selected, onClick, item }: ThumbProps) => (
  // The basis-* classes control the width. The active slide is wider.
  <div
    className={cn(
      "relative flex-shrink-0 flex-grow-0 p-2 transition-all duration-500 ease-in-out",
      "basis-3/4 sm:basis-1/2", // Mobile/Tablet: Show more of the active slide
      selected ? "lg:basis-1/2" : "lg:basis-1/4" // Desktop: Active is 50%, inactive are 25%
    )}
  >
    <button onClick={onClick} className="relative h-full w-full aspect-[3/4] rounded-3xl overflow-hidden group block">
      <Image
        src={item.imageUrl}
        alt={item.location}
        fill
        className={cn(
            "object-cover transition-transform duration-500",
            selected ? "scale-100" : "scale-110 group-hover:scale-105"
        )}
      />
      <div className={cn(
          "absolute inset-0 flex flex-col items-center justify-end text-white p-6 text-center transition-all duration-500",
          selected ? "bg-black/40" : "bg-black/60"
      )}>
        <AnimatePresence>
        {selected && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex flex-col items-center"
            >
                <MapPin />
                <h4 className="text-xl font-bold mt-2">{item.location}</h4>
                <p className="text-sm">{item.tripCount}+ Trips</p>
                <Button asChild variant="outline" className="mt-4 bg-transparent border-white text-white">
                    <Link href={item.href}>Explore All</Link>
                </Button>
            </motion.div>
        )}
        </AnimatePresence>
      </div>
    </button>
  </div>
);

// Helper component for the "Coming Soon" placeholder
const ComingSoonCard = () => (
    <div className="relative flex-shrink-0 flex-grow-0 basis-3/4 sm:basis-1/2 lg:basis-1/4 p-2">
      <div className="h-full w-full bg-gray-200/50 rounded-3xl flex items-center justify-center aspect-[3/4]">
        <p className="text-gray-500 font-semibold">Coming Soon</p>
      </div>
    </div>
);

export function PopularDestinations() {   
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ mainRef, emblaApiMain ] = useEmblaCarousel({ loop: true }, [ Autoplay({ delay: 5000, stopOnInteraction: true }) ]);
    
     const [thumbRef, emblaApiThumb] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
     });
    
    const onThumbClick = useCallback((index: number) => {
    if (!emblaApiMain) return;
    emblaApiMain.scrollTo(index);
    }, [ emblaApiMain ]);
    
    useEffect(() => {
    if (!emblaApiMain || !emblaApiThumb) return;

    const onSelect = (mainApi: EmblaCarouselType) => {
      setActiveIndex(mainApi.selectedScrollSnap());
      emblaApiThumb.scrollTo(mainApi.selectedScrollSnap());
    };
    
    emblaApiMain.on("select", onSelect);
    emblaApiMain.on("reInit", onSelect);

    // Set initial state
    onSelect(emblaApiMain);

    return () => {
      emblaApiMain.off("select", onSelect);
      emblaApiMain.off("reInit", onSelect);
    };
    }, [ emblaApiMain, emblaApiThumb ]);
    
     const displayData = [
    ...popularDestinationsData,
    ...Array(MAX_DESTINATIONS - popularDestinationsData.length).fill(null),
    ];
    

  

  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden relative">
      {/* Decorative SVGs with floating animation */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] -left-40 w-[54%] h-[34%] opacity-70 hidden lg:block">
        <Image src="/assets/icons/airplane-1.svg" alt="" layout="fill" />
      </motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] -right-40 w-[54%] h-[34%] opacity-70 hidden lg:block">
        <Image src="/assets/icons/airplane-2.svg" alt="" layout="fill" />
      </motion.div>
    

       <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="font-dancing-script text-green-opaque text-2xl mb-2">Top Destinations</p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-black">Popular Destinations</h2>
        </div>

        {/* This container now handles the mobile (flex-col) and desktop (grid) layouts */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          
          {/* ====== TEXT CONTENT CAROUSEL ====== */}
          <div className="lg:col-span-1 text-center lg:text-left overflow-hidden order-2 lg:order-1 mt-8 lg:mt-0" ref={mainRef}>
            <div className="flex">
              {popularDestinationsData.map((dest) => (
                <div key={dest.id} className="flex-shrink-0 flex-grow-0 basis-full min-w-0">
                  <p className="text-green-opaque font-semibold tracking-widest uppercase">Locations</p>
                  <h3 className="font-title text-4xl font-bold text-black mt-2 mb-4">{dest.location}</h3>
                  <p className="text-gray-600 mb-6">{dest.description}</p>
                   {/* Arrow buttons are removed as per your request */}
                </div>
              ))}
            </div>
          </div>

          {/* ====== IMAGE THUMBNAIL CAROUSEL ====== */}
          <div className="lg:col-span-2 overflow-hidden order-1 lg:order-2" ref={thumbRef}>
            <div className="flex -ml-2 h-[450px]">
              {displayData.map((item, index) =>
                item ? (
                  <ThumbCard
                    key={item.id}
                    onClick={() => onThumbClick(index)}
                    selected={index === activeIndex}
                    item={item}
                  />
                ) : (
                  <ComingSoonCard key={`placeholder-${index}`} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}