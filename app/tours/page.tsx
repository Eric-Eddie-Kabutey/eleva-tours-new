import { destinationsData, Tour } from '@/data/destinations-data';
import { PageHero } from '@/components/shared/page-hero';
import { TourGridWithFilters } from '@/components/tours/tour-widget-filter';

// This function runs once on the server when the page is requested.
function getAllTours(): Tour[] {
  return destinationsData.flatMap(dest => 
    dest.activityCategories.flatMap(cat => cat.tours)
  );
}

export default async function AllToursPage() {
  // Fetch and flatten the data on the server.
  const allTours = getAllTours();

  return (
    <main>
      <PageHero
              title="All Tours"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Tours", href: "/tours" },
              ]}
              imageUrl="/assets/images/page-banner-img.jpg"
          />
          
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-4">
        {/* Pass the server-prepared data to the interactive client component */}
        <TourGridWithFilters allTours={allTours} />
      </div>
    </main>
  );
}