import { DestinationsGrid } from "@/components/destination/destination-grid";
import { PageHero } from "@/components/shared/page-hero";

// Data for the page hero
const pageTitle = "South Africa";
const breadcrumbData = [
  { label: "destination", href: "/destinations" },
  { label: "South Africa", href: "/destinations/south-africa" },
];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title={pageTitle}
        breadcrumbs={breadcrumbData}
        imageUrl="/assets/images/destinations/south-africa/banner-img.jpg"
      />
    
    <DestinationsGrid />
    </>
  );
}