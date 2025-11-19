"use client";

import { useState, useEffect } from "react";
import { DestinationCard } from "./destination-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Tour } from "@/data/destinations-data";

const ITEMS_PER_PAGE = 8;

interface DestinationGridPrp {
  tours: Tour[];
}

export function DestinationsGrid({ tours }: DestinationGridPrp) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");
  const [displayedTours, setDisplayedTours] = useState<Tour[]>([]);

  const totalDestinations = tours.length;
  const totalPages = Math.ceil(totalDestinations / ITEMS_PER_PAGE);

  useEffect(() => {
    const sortedData = [...tours];

    switch (sortOrder) {
      case "popularity":
        sortedData.sort((a, b) => b.popularity - a.popularity);
        break;
      case "rating":
        sortedData.sort((a, b) => b.rating - a.rating);
        break;
      case "latest":
        sortedData.sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
        break;
      case "price-low-high":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting for 'default'
        break;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setDisplayedTours(sortedData.slice(startIndex, endIndex));
    

  }, [currentPage, sortOrder, tours]);

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page on sort change
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-6 md:px-2">
      {/* Header with info and sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <p className="text-gray-600">
          Showing {displayedTours.length} out of {totalDestinations} destination
        </p>
        <Select onValueChange={handleSortChange} defaultValue="default">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Default Sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default Sorting</SelectItem>
            <SelectItem value="popularity">Sort by popularity</SelectItem>
            <SelectItem value="rating">Sort by average rating</SelectItem>
            <SelectItem value="latest">Sort by latest</SelectItem>
            <SelectItem value="price-low-high">Sort by price: low to high</SelectItem>
            <SelectItem value="price-high-low">Sort by price: high to low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Responsive Grid */}    
      {displayedTours.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedTours.map((tour) => (
            <DestinationCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : ( <p className="text-green-opaque text-lg">No tours found</p> )}

      {/* Pagination */}
     {totalPages > 1 && ( <div className="mt-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} />
            </PaginationItem>
            {[...Array(totalPages).keys()].map((page) => (
              <PaginationItem key={page + 1}>
                <PaginationLink href="#" isActive={currentPage === page + 1} onClick={(e) => { e.preventDefault(); handlePageChange(page + 1); }}>
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>)}
    </div>
  );
}