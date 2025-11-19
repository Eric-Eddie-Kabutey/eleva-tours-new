import { destinationsData } from '@/data/destinations-data';
import { PageHero } from '@/components/shared/page-hero';
import { TourCard } from '@/components/tours/tour-card';
import { notFound } from 'next/navigation';

// THIS FUNCTION FOR STATIC SITE GENERATION
// This tells Next.js which pages to pre-build at build time.
export async function generateStaticParams() {
  return destinationsData.map((destination) => ({
    slug: destination.slug,
  }));
}
type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinationDetailPage({
  params,
}: DestinationPageProps) {
    // Find the destination from your single source of truth
    const { slug } = await params;
  const destination = destinationsData.find((d) => d.slug === slug);

  // 2. USE NEXT.JS'S notFound() FOR A PROPER 404
  if (!destination) {
    notFound(); // This will render your not-found.tsx page
  }

  return (
    <main>
      <PageHero
        title={destination.name}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destination', href: '/destination' }, // You might want this to go to a general list page
          { label: destination.name, href: `/destination/${destination.slug}` }, // Add current page to breadcrumb
        ]}
        imageUrl='/assets/images/page-banner-img.jpg'
      />
            
      <div className='container max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-0 py-16 space-y-12'>
        {/* Main Destination Description */}
        <div className='max-w-3xl'>
          <h1 className='font-title text-4xl font-bold text-brand-dark'>{destination.name}</h1>
          {destination.description.map((p, i) => (
            <p key={i} className='mt-4 text-lg text-gray-700 leading-relaxed'>
              {p}
            </p>
          ))}
        </div>

        {/* Map over the Activity Categories */}
        {destination.activityCategories.map((category) => (
          <div key={category.id}>
            <div className="mb-8">
                <h2 className='font-title text-3xl font-bold text-brand-dark'>{category.name}</h2>
                {category.description.map((p, i) => (
                <p key={i} className='mt-2 text-gray-600 max-w-2xl'>
                    {p}
                </p>
                ))}
            </div>

            {/* Map over the Tours within this category to show the cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {category.tours.map((tour) => (
                // Assuming you have a TourCard component that accepts a 'tour' prop
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}