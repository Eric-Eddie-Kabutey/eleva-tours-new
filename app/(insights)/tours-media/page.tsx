import { PageHero } from "@/components/shared/page-hero";

export default function TourMediaPage() {
    return (<>
        {/* Hero */}
        <PageHero
            title="Tours Media"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tours Media", href: "/news" }]}
            imageUrl="/assets/images/page-banner-img.jpg"
        />
    </>)
}