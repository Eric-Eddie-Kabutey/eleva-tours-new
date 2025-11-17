"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import TagLines from "../shared/tag-line";

export function ExperienceCta() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
          <div className="text-center max-w-4xl mx-auto pt-20 md:pt-28">
              <TagLines title="Watch Our Story" hasLeftLine={true} hasRightLine={true} />
        <h2 className="font-title text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
          Unforgettable Travel Experiences <br/> Get Your Guide
        </h2>
        <div className="flex justify-center gap-4 mt-8">
          <Button asChild size="lg" className="bg-green-opaque hover:bg-yellow-opaque text-yellow-opaque hover:text-green-opaque font-bold">
            <Link href="/contact">CONTACT US</Link>
          </Button>
          <Button asChild size="lg" className="bg-green-opaque hover:bg-yellow-opaque text-yellow-opaque hover:text-green-opaque font-bold ">
            <Link href="/tours">BOOK NOW</Link>
          </Button>
        </div>
      </div>

      <div className="relative mt-12 max-w-5xl mx-auto">
        <button onClick={() => setIsVideoOpen(true)} className="block w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group">
          <Image 
            src="/assets/images/home/video-thumbnail.jpg" 
            alt="Traveler watching a sunset"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-green-opaque flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-yellow-opaque ">
            <Play className="h-10 w-10 text-white fill-white hover:text-green-opaque hover:fill-green-opaque" />
          </div>
        </button>
      </div>

      <Lightbox
        open={isVideoOpen}
        close={() => setIsVideoOpen(false)}
        plugins={[Video]}
        slides={[
          {
            type: "video",
            sources: [{ src: "/assets/videos/experience-video.mp4", type: "video/mp4" }],
          },
        ]}
      />
    </>
  );
}