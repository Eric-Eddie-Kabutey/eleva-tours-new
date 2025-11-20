"use client";

import { useState, useMemo, useEffect } from 'react';
import { Tour } from '@/data/destinations-data';
import { TourCard } from '@/components/tours/tour-card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const ITEMS_PER_PAGE = 8;

// This component now receives the initial list of tours as a prop
export function TourGridClient({ tours }: { tours: Tour[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");

  // Filter and sort the tours on the client side
  const sortedTours = useMemo(() => {
    const sortedData = [...tours];
    switch (sortOrder) {
        case "rating":
            sortedData.sort((a, b) => b.rating - a.rating);
            break;
        case "price-low-high":
            sortedData.sort((a, b) => a.price - b.price);
            break;
        case "price-high-low":
            sortedData.sort((a, b) => b.price - a.price);
            break;
        // Add other sorting cases as needed
    }
    return sortedData;
  }, [tours, sortOrder]);

  // Paginate the sorted results
  const totalPages = Math.ceil(sortedTours.length / ITEMS_PER_PAGE);
  const currentTours = sortedTours.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page on sort change
  };
  
  // Reset pagination when the initial tour list changes (e.g., from search params)
  useEffect(() => {
    setCurrentPage(1);
  }, [tours]);

  return (
    <div className="container max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-4">
        {/* Sorting Dropdown */}
        <div className="flex justify-end mb-8">
            <Select onValueChange={handleSortChange} defaultValue="default">
                <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Default Sorting" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="default">Default Sorting</SelectItem>
                    <SelectItem value="rating">Sort by average rating</SelectItem>
                    <SelectItem value="price-low-high">Sort by price: low to high</SelectItem>
                    <SelectItem value="price-high-low">Sort by price: high to low</SelectItem>
                </SelectContent>
            </Select>
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
                <p>There are currently no tours available for this type.</p>
            </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
            <div className="mt-12">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem><PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} /></PaginationItem>
                        {[...Array(totalPages).keys()].map(page => (
                            <PaginationItem key={page + 1}>
                                <PaginationLink href="#" isActive={currentPage === page + 1} onClick={(e) => { e.preventDefault(); handlePageChange(page + 1); }}>{page + 1}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem><PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} /></PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        )}
    </div>
  );
}