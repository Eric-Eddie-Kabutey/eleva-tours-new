import Link from 'next/link';
import Image from 'next/image';
import { lastMinuteDeals } from '@/lib/tours-data';

export function LastMinuteDealsWidget() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-brand-dark mb-4">Last Minute Deals</h3>
      <div className="space-y-4">
        {lastMinuteDeals.map(deal => (
          <Link key={deal.id} href={deal.href} className="flex items-center gap-4 group">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={deal.imageUrl} alt={deal.title} fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-brand-dark group-hover:text-brand-green transition-colors">{deal.title}</p>
              <p className="text-sm text-gray-500">From ${deal.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}