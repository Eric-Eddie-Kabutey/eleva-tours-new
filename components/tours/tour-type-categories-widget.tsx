import { ChevronRight } from 'lucide-react';
import { tourCategories } from '@/data/destinations-data'; 

type TourCategoriesWidgetProps = {
    onCategorySelect: (category: string) => void;    
}

export function TourCategoriesWidget({ onCategorySelect }: TourCategoriesWidgetProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-brand-dark mb-4">Tour Categories</h3>
      <div className="space-y-3">
        {tourCategories.map(category => (
          <button 
            key={category.name} 
            onClick={() => onCategorySelect(category.name)}
            className="w-full flex justify-between items-center p-3 bg-white rounded-md shadow-sm hover:bg-brand-green/10 transition-colors text-left"
          >
            <span>{category.name}({category.count})</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}