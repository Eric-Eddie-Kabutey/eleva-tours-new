import { PageHero } from "@/components/shared/page-hero";

export default function FeedbacksPage() {
    return (<>
        {/* Hero */}
        <PageHero
            title="Feedbacks"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Feedbacks", href: "/news" }]}
            imageUrl="/assets/images/page-banner-img.jpg"
        />
    </>)
}