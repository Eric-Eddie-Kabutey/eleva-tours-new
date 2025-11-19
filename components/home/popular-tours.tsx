/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { popularToursData } from '@/lib/popular-tours-data'
import { TourCard } from '../tours/tour-card'
import { Button } from '@/components/ui/button'

export function PopularTours() {
	return (
		// Main section with the background image/texture
		<section
			className='py-20 md:py-28 bg-gray-50'
			style={{ backgroundImage: "url('/assets/images/bg-pattern.png')" }}>
			<div className='container max-w-6xl 2xl:max-w-7xl mx-auto px-4'>
				{/* ====== Ad Banners Section ====== */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
					{/* Banner 1 */}
					<div className='relative p-8 rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-300 to-blue-500 text-white'>
						<Image
							src='/assets/images/home/offer-bg-1.jpg'
							alt='Travel items'
							fill
							className='object-cover object-right opacity-80'
						/>
						<div className='relative z-10'>
							<h3 className='text-4xl font-bold'>45% OFF</h3>
							<p className='mt-2 text-lg'>
								Explore The World Tour. <br /> Hotel Booking.
							</p>
							<Button
								asChild
								variant='secondary'
								className='mt-6 bg-white/90 text-blue-600 hover:bg-white'>
								<Link href='/deals/hotel-booking'>Book Now</Link>
							</Button>
						</div>
					</div>
					{/* Banner 2 */}
					<div className='relative p-8 rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-400 to-purple-600 text-white'>
						<Image
							src='/assets/images/home/offer-bg-2.jpg'
							alt='Airplane with map'
							fill
							className='object-cover object-right opacity-70'
						/>
						<div className='relative z-10'>
							<h3 className='text-4xl font-bold'>35% OFF</h3>
							<p className='mt-2 text-lg'>
								On Flight Ticket Grab <br /> This Now.
							</p>
							<Button
								asChild
								variant='secondary'
								className='mt-6 bg-white/90 text-purple-600 hover:bg-white'>
								<Link href='/deals/flight-ticket'>Buy Now</Link>
							</Button>
						</div>
					</div>
				</div>

				{/* ====== Most Popular Tours Section ====== */}
				<div className='text-center mb-12'>
					<div className='flex items-center justify-center gap-4'>
						<div className='flex -items-center gap-2'>
							<div className='w-4 h-[2px] bg-green-opaque' />
							<div className='w-4 h-[2px] bg-green-opaque' />
							<div className='w-10 h-[2px] bg-green-opaque' />
						</div>
						<p className='font-style text-green-opaque mb-2'>Featured Tour</p>
						<div className='flex -items-center gap-2'>
							<div className='w-10 h-[2px] bg-green-opaque' />
							<div className='w-4 h-[2px] bg-green-opaque' />
							<div className='w-4 h-[2px] bg-green-opaque' />
						</div>
					</div>

					<h2 className='font-title text-3xl md:text-4xl font-bold text-black'>
						Most Popular Tours
					</h2>
				</div>

				{/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{popularToursData.map((tour) => (
						<TourCard key={tour.id} tour={tour} />
					))}
				</div> */}
			</div>
		</section>
	)
}
