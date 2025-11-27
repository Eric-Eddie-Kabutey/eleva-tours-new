import { PageHero } from "@/components/shared/page-hero";
import { ImageGallery } from "@/components/gallery/image-gallery";
import { VideoGallery } from "@/components/gallery/video-gallery";

export default function GalleryPage() {
    return (
        <main>
            <PageHero
                title="Tours Media"
                breadcrumbs={[ { label: "Home", href: "/" }, { label: "Tours Media", href: "/news" } ]}
                imageUrl="/assets/images/page-banner-img.jpg"
            />

            {/* Render both gallery components */}
            <ImageGallery />
            <VideoGallery />
        </main>
    );
}