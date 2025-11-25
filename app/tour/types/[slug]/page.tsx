import { destinationsData, Tour } from '@/data/destinations-data'
import { PageHero } from '@/components/shared/page-hero'
import { TourGridClient } from '@/components/tours/tour-grid-client'
import { notFound } from 'next/navigation'

const TOUR_TYPES = ['group', 'family', 'solo']

// This tells Next.js to pre-build a static page for each tour type.
export async function generateStaticParams() {
    return TOUR_TYPES.map((type) => ({
        slug: type,
    }))
}

// SERVER-SIDE DATA FETCHING AND FILTERING
async function getToursByType(type: string): Promise<Tour[]> {
    // Flatten the data to get a single array of all tours
    const allTours: Tour[] = destinationsData.flatMap((destination) =>
        destination.activityCategories.flatMap((category) => category.tours)
    )

    // Filter the tours based on the provided type
    if (TOUR_TYPES.includes(type)) {
        return allTours.filter((tour) => tour.type === type)
    }

    // Return all tours if the type is not recognized (or handle as an error)
    return allTours
}

type ToursProps = {
    params: Promise<{
        slug: string
    }>
}

// THIS IS NOW A SERVER COMPONENT
export default async function Tours({ params }: ToursProps) {
    const { slug } = await params

    // Validate the slug
    if (!TOUR_TYPES.includes(slug)) {
        notFound() // Redirect to 404 page for invalid slugs
    }

    // Fetch the pre-filtered data on the server
    const filteredTours = await getToursByType(slug)

    // Create a dynamic, user-friendly title
    const pageTitle = slug.charAt(0).toUpperCase() + slug.slice(1) + ' Tours'

    return (
        <main>
            <PageHero
                title={pageTitle}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Tours', href: '/tour' },
                    { label: pageTitle, href: `/tour/${slug}` },
                ]}
                imageUrl='/assets/images/page-banner-img.jpg'
            />

            {/* You could add a server-rendered description here */}
            <div className='container max-w-6xl 2xl:max-w-7xl mx-auto pt-16 text-center'>
                <h2 className='text-3xl font-bold'>{`Discover Our ${pageTitle}`}</h2>
                <p className='mt-2 text-lg text-gray-600 max-w-2xl mx-auto'>
                    {`Explore our curated collection of ${slug} travel experiences, designed for unforgettable memories.`}
                </p>
            </div>

            {/* 
        Pass the server-filtered data to the interactive client component.
        The client component will handle its own sorting and pagination.
      */}
            <div className='container max-w-6xl 2xl:max-w-7xl mx-auto px-4'>
                <TourGridClient tours={filteredTours} />
            </div>
        </main>
    )
}
