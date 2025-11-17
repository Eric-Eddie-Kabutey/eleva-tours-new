import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/lib/testimonials-data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg relative h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-brand-green fill-brand-green" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-600 italic flex-grow">&quot;{testimonial.quote}&quot;</p>
      
      {/* Author */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t">
        <Image 
          src={testimonial.avatarUrl} 
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>

      {/* Decorative Quote SVG */}
      <div className="absolute bottom-6 right-6 text-brand-green/10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.983 3v7.391c0 2.908-2.353 5.261-5.261 5.261h-.722v-3.467c1.002 0 1.818-.816 1.818-1.818h-1.096v-7.367h5.261zm10.722 0v7.391c0 2.908-2.353 5.261-5.261 5.261h-.722v-3.467c1.002 0 1.818-.816 1.818-1.818h-1.096v-7.367h5.261z"/>
        </svg>
      </div>
    </div>
  );
}