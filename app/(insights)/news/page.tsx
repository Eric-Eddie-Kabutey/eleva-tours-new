import { PageHero } from "@/components/shared/page-hero";

export default function NewsPage() {
    return (<>
        {/* Hero */}
        <PageHero
            title="News & Stories"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Stories", href: "/news" }]}
            imageUrl="/assets/images/page-banner-img.jpg"
        />
    </>)
}