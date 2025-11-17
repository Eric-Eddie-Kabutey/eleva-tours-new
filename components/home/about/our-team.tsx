"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { teamsData } from "@/lib/teams-data";
import { TeamCard } from "./team-card";

export function OurTeam() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      // Show 4 slides on desktop, 2 on tablet, 1 on mobile
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-style text-brand-green text-2xl mb-2">Travel Experts</p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-brand-dark">
            Meet Our Expert Guide
          </h2>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {teamsData.map((team) => (
              <div 
                key={team.id} 
                className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/4 pl-4"
              >
                <TeamCard team={team} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}