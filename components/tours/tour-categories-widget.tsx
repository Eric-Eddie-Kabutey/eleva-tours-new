import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { tourCategories } from '@/lib/tours-data';

export function TourCategoriesWidget() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-brand-dark mb-4">Tour Categories</h3>
      <div className="space-y-3">
        {tourCategories.map(category => (
          <Link key={category.name} href={category.href} className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm hover:bg-brand-green/10 transition-colors">
            <span>{category.name}({category.count})</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}