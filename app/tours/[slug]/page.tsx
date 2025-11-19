'use client'

import { useParams } from 'next/navigation'
import { destinationsData } from '@/data/destinations-data'
import { motion } from 'framer-motion'

// Import all your tab components
import { InformationTab } from '@/components/tours/information-tab'
import { TourPlanTab } from '@/components/tours/tour-plan-tab'
import { PhotosTab } from '@/components/tours/photos-tab'
import { LocationTab } from '@/components/tours/location-tabs'
import { LastMinuteDealsWidget } from '@/components/tours/last-minute-deals'
import { AdventureAdWidget } from '@/components/tours/adventure-ad-widget'
import { useState } from 'react'
import { BookingForm } from '@/components/tours/booking-form'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Clock, DollarSign, MapPin, Users } from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import LeaveAReplyForm from '@/components/form/leave-a-reply-form'

const TABS = ['Information', 'Tour Plan', 'Tour Photos', 'Location']

export default function TourDetailPage() {
	const params = useParams()
	const [activeTab, setActiveTab] = useState('Information')

	// Find the specific tour from the entire dataset
	let tour = null
	for (const dest of destinationsData) {
		for (const cat of dest.activityCategories) {
			const foundTour = cat.tours.find((t) => t.slug === params.slug)
			if (foundTour) {
				tour = foundTour
				break
			}
		}
		if (tour) break
	}

	if (!tour) {
		return <div>Tour not found</div>
	}

	// Now you have the `tour` object with all its data
	const renderTabContent = () => {
		switch (activeTab) {
			case 'Tour Plan':
				return <TourPlanTab plan={tour.tourPlan} />
			case 'Tour Photos':
				return <PhotosTab gallery={tour.gallery} />
			case 'Location':
				return <LocationTab mapUrl={tour.mapEmbedUrl} />
			default:
				return <InformationTab tour={tour} />
		}
	}
	return (
		<>
			<PageHero
				title={tour.title}
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Tours', href: '/tours' }, // You might want this to go to a general list page
					{ label: tour.location, href: `/tours/${tour.slug}` }, // Add current page to breadcrumb
				]}
				imageUrl='/assets/images/page-banner-img.jpg'
			/>
			<div className='container max-w-6xl 2xl:max-w-7xl mx-auto py-12 px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
					{/* Main Content (Left Column) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='lg:col-span-2'>
						<div className='bg-[#f5f5f5f5] p-6 rounded-lg mb-8'>
							<h1 className='font-title text-3xl font-bold text-brand-dark mb-4'>
								{tour.title}
							</h1>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700'>
								<div className='flex items-center gap-2'>
									<DollarSign className='h-5 w-5 text-green-opaque' />{' '}
									<div>
										<span className='block text-xs'>From</span>
										<span className='font-semibold'>${tour.price}</span>
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<Clock className='h-5 w-5 text-green-opaque' />{' '}
									<div>
										<span className='block text-xs'>Duration</span>
										<span className='font-semibold'>{tour.duration}</span>
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<MapPin className='h-5 w-5 text-green-opaque' />{' '}
									<div>
										<span className='block text-xs'>Location</span>
										<span className='font-semibold'>{tour.location}</span>
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<Users className='h-5 w-5 text-green-opaque' />{' '}
									<div>
										<span className='block text-xs'>Group Size</span>
										<span className='font-semibold'>
											{tour.groupSize}+ People
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className='relative aspect-[16/9] rounded-2xl overflow-hidden mb-8'>
							<Image
								src={tour.mainImageUrl}
								alt={tour.title}
								fill
								className='object-cover'
							/>
						</div>

						<div className='flex flex-wrap gap-2 mb-8'>
							{TABS.map((tab) => (
								<Button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={cn(
										'rounded-lg font-semibold',
										activeTab === tab
											? 'bg-green-opaque text-yellow-opaque'
											: 'bg-gray-200 text-gray-700 hover:bg-yellow-opaque hover:text-green-opaque'
									)}>
									{tab}
								</Button>
							))}
						</div>

						{/* Render Active Tab Content */}
                        <div className='mt-8 mb-12'>{renderTabContent()}</div>
                        
                        {/* render form */}
                        <LeaveAReplyForm />
					</motion.div>

					{/* Sidebar (Right Column) */}
					<motion.aside
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='space-y-8'>
						<BookingForm price={tour.price} />
						<LastMinuteDealsWidget />
						<AdventureAdWidget />
					</motion.aside>
				</div>
			</div>
		</>
	)
}
