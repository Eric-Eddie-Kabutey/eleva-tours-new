import { destinationsData, Tour } from '@/data/destinations-data'
import { notFound } from 'next/navigation'

import { PageHero } from '@/components/shared/page-hero'
import TourDetailContent from '@/components/tours/tour-detial-content'

// This function tells Next.js which tour pages to pre-build
export async function generateStaticParams() {
	const allTours = destinationsData.flatMap((dest) =>
		dest.activityCategories.flatMap((cat) => cat.tours)
	)
	return allTours.map((tour) => ({
		slug: tour.slug,
	}))
}

// Helper function to find a single tour by its slug
function getTourBySlug(slug: string): Tour | undefined {
	for (const dest of destinationsData) {
		for (const cat of dest.activityCategories) {
			const foundTour = cat.tours.find((t) => t.slug === slug)
			if (foundTour) return foundTour
		}
	}
	return undefined
}

interface TourDetailPageProps {
	params: Promise<{ slug: string }>
}

// This is the main Server Component for the tour detail page
export default async function TourDetailPage({ params }: TourDetailPageProps) {
	const { slug } = await params
	const tour = getTourBySlug(slug)

	if (!tour) {
		notFound() // If no tour matches the slug, show a 404 page
	}

	// Now you have the `tour` object with all its rich details
	return (
		<main className='bg-white'>
			<PageHero
				title='All Tours'
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Tour', href: '/tour' },
				]}
				imageUrl='/assets/images/page-banner-img.jpg'
			/>


			<div className='container max-w-6xl 2xl:max-w-7xl mx-auto py-12 px-4'>
				<TourDetailContent tour={tour} />
			</div>			
		</main>
	)
}
