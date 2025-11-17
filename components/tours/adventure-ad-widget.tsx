import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function AdventureAdWidget() {
  return (
    <div className="relative p-8 rounded-lg overflow-hidden text-white bg-brand-dark">
      {/* Decorative shapes */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/80 rounded-full filter blur-2xl" />
      <div className="absolute -bottom-16 -left-10 w-48 h-48 bg-brand-green/60 rounded-full filter blur-2xl" />
      
      <div className="relative z-10 text-center">
        <Image src="/travon-logo-white.png" alt="Travon Logo" width={100} height={40} className="mx-auto" />
        <p className="mt-4 text-sm font-semibold">HAPPY HOLIDAY</p>
        <h3 className="mt-2 text-2xl font-bold">Adventure Ture</h3>
        <div className="mt-4 bg-white/20 p-3 rounded-lg">
          <p className="text-sm font-semibold">TRAVON SPECIAL</p>
          <p className="text-lg font-bold">30% OFF On All Booking</p>
        </div>
        <Button asChild className="mt-6 bg-white text-brand-dark hover:bg-gray-200 font-bold w-full">
          <Link href="/get-a-quote">GET A QUOTE</Link>
        </Button>
      </div>
    </div>
  );
}