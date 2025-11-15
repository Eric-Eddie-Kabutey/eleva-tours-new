"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock, Users, ArrowRight } from "lucide-react";
import { PopularTour } from "@/lib/popular-tours-data";
import { Button } from "@/components/ui/button";

type TourCardProps = {
  tour: PopularTour;
};

// Helper to format currency
const formatCurrency = (amount: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(amount);

export function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col">
      <div className="relative">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={tour.imageUrl}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <Button size="icon" className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </Button>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-green" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(tour.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-orange-400 fill-orange-400" />
            ))}
          </div>
        </div>
        
        <h3 className="font-title text-xl font-bold text-brand-dark mt-3 group-hover:text-brand-green transition-colors">
          <Link href={tour.href}>{tour.title}</Link>
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {tour.durationDays} Days</div>
          <div className="flex items-center gap-2"><Users className="h-4 w-4" /> {tour.capacity}+ People</div>
        </div>

        <div className="border-t my-4" />

        <div className="flex justify-between items-center mt-auto">
          <p className="text-gray-600 text-sm">From <span className="text-brand-green font-bold text-lg">{formatCurrency(tour.price)}</span></p>
          <Link href={tour.href} className="text-brand-dark font-semibold text-sm flex items-center gap-1 group-hover:text-brand-green transition-colors">
            See Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}