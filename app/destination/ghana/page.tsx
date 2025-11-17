import { DestinationsGrid } from "@/components/destination/destination-grid";
import { PageHero } from "@/components/shared/page-hero";

// Data for the page hero
const pageTitle = "Ghana";
const breadcrumbData = [
  { label: "destination", href: "/destinations" },
  { label: "Ghana", href: "/destinations/ghana" },
];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title={pageTitle}
        breadcrumbs={breadcrumbData}
        imageUrl="/assets/images/destinations/ghana/banner-img.jpg"
      />
    
    <DestinationsGrid />
    </>
  );
}