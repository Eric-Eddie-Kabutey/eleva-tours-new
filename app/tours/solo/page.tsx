/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; 

import { useState } from 'react';
import { Search } from 'lucide-react';
import { toursData } from '@/lib/tours-data';
import { PageHero } from '@/components/shared/page-hero';
import { TourCard } from '@/components/tours/tour-card';
import { TourCategoriesWidget } from '@/components/tours/tour-categories-widget';
import { LastMinuteDealsWidget } from '@/components/tours/last-minute-deals';
import { AdventureAdWidget } from '@/components/tours/adventure-ad-widget';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 8; // Or however many you want per page

export default function AllToursPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter and paginate data
  const filteredTours = toursData.filter(tour => 
    tour.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);
  const currentTours = filteredTours.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  return (
    <main>
      <PageHero
        title="Solo Tour"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tours", href: "/tours" }]}
        imageUrl="/assets/images/page-banner-img.jpg"
      />
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left Column) */}
          {/* <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div> */}
            
            {/* Pagination */}
            {/* <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem><PaginationPrevious href="#" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} /></PaginationItem>
                    {[...Array(totalPages).keys()].map(page => (
                        <PaginationItem key={page + 1}>
                            <PaginationLink href="#" isActive={currentPage === page + 1} onClick={() => setCurrentPage(page + 1)}>{page + 1}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem><PaginationNext href="#" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} /></PaginationItem>
                  </PaginationContent>
                </Pagination>
            </div>
          </div> */}
          
          {/* Sidebar (Right Column) */}
          {/* <aside className="space-y-8">
            <div className="relative">
              <Input 
                placeholder="Enter Keyword" 
                className="h-12 pl-4 pr-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 h-9 w-9 bg-brand-green hover:bg-brand-green/90">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <TourCategoriesWidget />
            <LastMinuteDealsWidget />
            <AdventureAdWidget />
          </aside> */}
        </div>
      </div>
    </main>
  );
}