"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { dealsData, Deal } from "@/lib/deals-data";

// Helper to format currency
const formatCurrency = (amount: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(amount);

// --- Individual Deal Card Component ---
const DealCard = ({ deal }: { deal: Deal }) => (
  // This is the slide. The basis-* classes control how many are visible.
  <div className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-3">
    <Link href={deal.href} className="block group">
      <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
        <Image 
          src={deal.imageUrl} 
          alt={deal.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
        <div className="absolute top-4 left-4 bg-white text-brand-dark font-bold text-sm px-3 py-1 rounded-md">
          {deal.discount}% Off
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-title text-2xl font-bold">{deal.title}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-brand-green font-semibold">{deal.subTitle}</p>
            <p className="text-xl font-bold">{formatCurrency(deal.price)}</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);


// --- Main Section Component ---
export function Deals() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [autoplay.current]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  
  // Ref for scroll-triggered animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    // Start/stop autoplay based on viewport visibility
    if (isInView) {
        autoplay.current.play();
    } else {
        autoplay.current.stop();
    }
  }, [emblaApi, onSelect, isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-brand-dark text-white py-20 md:py-28"
    >
      {/* Faint background image */}
      <Image 
        src="/assets/images/home/deals/deals-bg-img.jpg" 
        alt="Mountain silhouette"
        fill
        className="object-cover opacity-10"
      />

      <div className="container max-w-6xl 2xl-max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section with Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <p className="font-style text-brand-green text-2xl mb-2">Deals & Offers</p>
            <h2 className="font-title text-4xl md:text-5xl font-bold">
              Last Minute Amazing Deals
            </h2>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button onClick={scrollPrev} disabled={!canScrollPrev} aria-label="Previous slide" className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 transition-colors">
              <ArrowLeft className="mx-auto" />
            </button>
            <button onClick={scrollNext} disabled={!canScrollNext} aria-label="Next slide" className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 transition-colors">
              <ArrowRight className="mx-auto" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-3" ref={emblaRef}>
          <div className="flex">
            {dealsData.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}