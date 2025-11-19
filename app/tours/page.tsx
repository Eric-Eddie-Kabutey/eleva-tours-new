"use client";

import { useState, useMemo } from 'react';
import { Tour,destinationsData } from '@/data/destinations-data';
import { PageHero } from '@/components/shared/page-hero';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { TourCard } from '@/components/tours/tour-card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 8; // Number of tours to show per page
const TOUR_TYPES = ['All', 'group', 'family', 'solo'];

// FLATTEN THE DATA: Get all tours from all destinations into one single array.
const allTours: Tour[] = destinationsData.flatMap(destination => 
  destination.activityCategories.flatMap(category => category.tours)
);

export default function AllToursPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter the tours based on the active tour type
  const filteredTours = useMemo(() => {
    if (activeFilter === 'All') {
      return allTours;
    }
    // Filter the allTours array
    return allTours.filter(tour => tour.type === activeFilter);
  }, [activeFilter]);

  // Paginate the filtered results
  const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);
  const currentTours = filteredTours.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  return (
    <main>
      <PageHero
        title="All Tours"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tours", href: "/tours" },
        ]}
        imageUrl="/assets/images/page-banner-img.jpg"
      />
      
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-4">
        {/* Filtering UI */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TOUR_TYPES.map(type => (
            <Button
              key={type}
              onClick={() => handleFilterChange(type)}
              variant="outline"
              className={cn(
                "font-semibold capitalize",
                activeFilter === type 
                    ? 'bg-green-opaque text-yellow-opaque hover:bg-green-opaque' 
                    : 'border-gray-300 hover:bg-yellow-opaque hover:text-green-opaque'
              )}
            >
              {type === 'group' ? 'Group Tours' : type === 'family' ? 'Family Holidays' : type === 'solo' ? 'Solo Trips' : 'All Tours'}
            </Button>
          ))}
        </div>
        
        {/* Tour Grid */}
        {currentTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {currentTours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        ) : (
            <div className="text-center py-16 text-gray-600">
                <h3 className="text-2xl font-semibold">No Tours Found</h3>
                <p>There are no tours available for the selected type.</p>
            </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
            <div className="mt-12">
                <Pagination>
                <PaginationContent>
                    <PaginationItem><PaginationPrevious href="#" onClick={(e) => {e.preventDefault(); handlePageChange(currentPage - 1)}} /></PaginationItem>
                    {[...Array(totalPages).keys()].map(page => (
                        <PaginationItem key={page + 1}>
                            <PaginationLink href="#" isActive={currentPage === page + 1} onClick={(e) => {e.preventDefault(); handlePageChange(page + 1)}}>{page + 1}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem><PaginationNext href="#" onClick={(e) => {e.preventDefault(); handlePageChange(currentPage + 1)}} /></PaginationItem>
                </PaginationContent>
                </Pagination>
            </div>
        )}
      </div>
    </main>
  );
}