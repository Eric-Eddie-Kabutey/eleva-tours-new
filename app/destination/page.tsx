"use client";

import { useState, useMemo } from 'react';
import { destinationsData } from '@/data/destinations-data';
import { PageHero } from '@/components/shared/page-hero';
import { DestinationsGrid } from '@/components/destination/destination-grid';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// FLATTEN THE DATA: Get all tours from all destinations and categories into one array
const allTours = destinationsData.flatMap(destination => 
  destination.activityCategories.flatMap(category => 
    // Add the destination name to each tour for filtering
    category.tours.map(tour => ({
      ...tour,
      destinationName: destination.name, 
    }))
  )
);

// Get a unique list of destination names for filter buttons
const destinationFilters = ['All', ...new Set(allTours.map(tour => tour.destinationName))];

export default function AllDestinationsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter the flattened array of tours based on the active destination filter
  const filteredTours = useMemo(() => {
    if (activeFilter === 'All') {
      return allTours;
    }
    return allTours.filter(
      (tour) => tour.destinationName === activeFilter
    );
  }, [activeFilter]);

  return (
    <main>
      <PageHero
        title="All Destinations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
        ]}
        imageUrl="/assets/images/page-banner-img.jpg"
      />
      
      {/* Filtering UI */}
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto pt-12 px-6 md:px-2">
        <div className="flex flex-wrap justify-center gap-2">
          {destinationFilters.map(filter => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant="outline"
              className={cn(
                "font-semibold",
                activeFilter === filter ? 'bg-green-opaque text-white border-yellow-opaque' : 'border-gray-300'
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Pass the final, filtered list of tours to the grid */}
      <DestinationsGrid tours={filteredTours} />
    </main>
  );
}