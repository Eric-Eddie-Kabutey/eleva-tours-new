import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function About() {
	return (
		<section className='bg-white py-20 md:py-32'>
			<div className='container max-w-6xl 2xl:7xl mx-auto px-4 relative'>
							

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10'>
					{/* ====== LEFT COLUMN: IMAGE COLLAGE ====== */}
                    <div className='relative h-[400px] md:h-[550px]'>
                        {/* Decorative background elements (SVGs) */}
				{/* These are positioned absolutely relative to the container */}
				<div className='absolute top-0 left-0 w-full h-full opacity-50 hidden md:block'>
					<Image
						src='/assets/icons/travel-agents-icon.svg'
						alt=''
						layout='fill'
						objectFit='contain'
						className='object-center'
					/>
				</div>	
						{/* Main Image */}
						<div className='absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl'>
							<Image
								src='/assets/images/home/city-image.jpg'
								alt='European city by a river'
								layout='fill'
								objectFit='cover'
							/>
						</div>
						{/* Smaller Overlapping Image */}
						<div className='absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white'>
							<Image
								src='/assets/images/home/traveler-image.jpg'
								alt='Traveler looking at a map'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</div>

					{/* ====== RIGHT COLUMN: TEXT CONTENT ====== */}
					<div className='text-left'>
						<div className='flex items-center gap-4 mb-4'>
							<p className='text-green-opaque italic font-playfair'>
								Get About Us
							</p>
							<div className='w-16 h-px bg-brand-green' />
						</div>

						<h2 className='text-4xl md:text-5xl font-serif font-bold text-brand-dark leading-tight mb-6'>
							We Create Journeys Worth Taking For The Traveler
						</h2>

						<p className='text-gray-600 leading-relaxed mb-8'>
							Progressively impact multidisciplinary leadership skills via
							e-business leadership skills. Holistically repurpose
							multifunctional data before turnkey information. Globally restore
							client-focused potentialities before scalable core competencies.
						</p>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10'>
							<div className='flex items-start gap-4'>
								<Image
									src='/assets/icons/about-media-1.svg'
									alt=''
									width={40}
									height={40}
								/>
								<div>
									<h3 className='font-bold text-lg text-green-opaque'>
										24 Years Experience
									</h3>
									<p className='text-gray-500 text-sm'>
										Holisticly procrastinate real-time solutions for services.
									</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<Image
									src='/assets/icons/about-media-2.svg'
									alt=''
									width={40}
									height={40}
								/>
								<div>
									<h3 className='font-bold text-lg text-green-opaque'>
										Best Travel Agents
									</h3>
									<p className='text-gray-500 text-sm'>
										Holisticly procrastinate real-time solutions for services.
									</p>
								</div>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row items-center gap-6'>
							<Button
								asChild
								size='lg'
								className='bg-green-opaque hover:bg-yellow-opaque text-yellow-opaque hover:text-green-opaque font-bold px-6'>
								<Link href='/about-us'>DISCOVER MORE</Link>
							</Button>
							<div className='flex items-center'>
								<div className='flex -space-x-4'>
									<Image
										src='/assets/icons/avatars/avatar-1.jpg'
										alt='Customer 1'
										width={48}
										height={48}
										className='rounded-full border-2 border-white'
									/>
									<Image
										src='/assets/icons/avatars/avatar-2.jpg'
										alt='Customer 2'
										width={48}
										height={48}
										className='rounded-full border-2 border-white'
									/>
									<Image
										src='/assets/icons/avatars/avatar-3.jpg'
										alt='Customer 3'
										width={48}
										height={48}
										className='rounded-full border-2 border-white'
									/>
									<div className='w-12 h-12 rounded-full bg-green-opaque flex items-center justify-center text-white font-bold text-lg border-2 border-white'>
										+
									</div>
								</div>
                                <p className='ml-4 font-medium text-sm text-gray-700 flex items-center gap-2'>
                                    <span className='text-green-opaque text-base font-bold'>500k+</span>
									 Happy Customer
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
