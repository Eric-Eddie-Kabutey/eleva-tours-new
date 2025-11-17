"use client";

import { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/lib/testimonials-data";
import { TestimonialCard } from "./testimonials-card";

import { cn } from "@/lib/utils";

export function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true })
  ]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = (emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    const onInit = (emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
    onInit(emblaApi);
  }, [emblaApi]);

  return (
    <div className="container max-w-6xl 2xl:max-w-7xl mx-auto pt-24 md:pt-32">
      <div className="text-center max-w-4xl mx-auto">
        <p className="font-style text-green-opaque text-2xl mb-2">Testimonials</p>
        <h2 className="font-title text-4xl md:text-5xl font-bold text-brand-dark">
          What Customer Say About Us
        </h2>
      </div>

      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden mt-12" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 flex-grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all",
              index === selectedIndex ? "bg-brand-green w-6" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}