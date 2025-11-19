import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Define the shape of the props for type safety
type Breadcrumb = {
  label: string;
  href: string;
};

type PageHeroProps = {
  title: string;
  breadcrumbs: Breadcrumb[];
  imageUrl: string;
};

export function PageHero({ title, breadcrumbs, imageUrl }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[350px] w-full flex items-center justify-center text-white mt-[48px]">
      {/* 1. Background Image */}
      <Image
        src={imageUrl}
        alt={`Background for ${title} page`}
        fill
        className="object-cover"
        priority // This image is likely to be Above The Fold, so load it eagerly
      />
      
      {/* 2. Dark Overlay */}
      <div className="absolute inset-0  z-5" />     

      {/* 4. Main Content */}
      <div className="relative z-10 text-center pt-8">
        <h2 className="font-title text-5xl md:text-6xl font-bold">{title}</h2>
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mt-4 flex justify-center">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={crumb.href}>
                  <li>
                    <Link
                      href={crumb.href}
                      className={
                        isLast
                          ? "font-semibold text-white" 
                          : "hover:underline"
                      }
                      // The last item in a breadcrumb shouldn't be a link
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.label}
                    </Link>
                  </li>
                  {!isLast && (
                    <li aria-hidden="true">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}