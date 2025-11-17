import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Destination } from '@/lib/destinations-data';

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={destination.href} className="group block">
      <div className="flex flex-col h-full">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-brand-green" />
            <span className="font-semibold text-gray-800">{destination.name}</span>
          </div>
          <span className="text-sm text-gray-600">{destination.tripCount}+ Trips</span>
        </div>
      </div>
    </Link>
  );
}