"use client";

import { ChevronRight } from 'lucide-react';
import { tourCategories } from '@/data/taxonomy-data';
import { cn } from '@/lib/utils';

type TourCategoriesWidgetProps = {
    onCategorySelect: (category: string) => void;
    activeCategory?: string;
}

export function TourCategoriesWidget({ onCategorySelect, activeCategory }: TourCategoriesWidgetProps) {
  return (
    <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-brand-dark mb-4">Tour Categories</h3>
      <div className="space-y-3">
        {tourCategories.map(category => (                
          <button             
            key={category.slug} 
            onClick={() => onCategorySelect(category.name)}
            className={cn("w-full flex justify-between items-center p-3 bg-white rounded-md shadow-sm hover:bg-brand-green/10 transition-colors text-left", activeCategory === category.name ? "border border-green-opaque" : "")}
          >
            <span>{category.name} ({category.count})</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}




          