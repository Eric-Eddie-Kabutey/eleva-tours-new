'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Lightbox from 'yet-another-react-lightbox'
import Video from 'yet-another-react-lightbox/plugins/video'
import 'yet-another-react-lightbox/styles.css'

import { AnimatedProgressBar } from '@/components/animated-progress-bar'

// Data for the progress bars
const skillsData = [
	{ label: 'Countryside', value: 85 },
	{ label: 'Vineyard', value: 95 },
	{ label: 'Wine Tasting', value: 60 },
]

export function TourPackage() {
	const [isVideoOpen, setIsVideoOpen] = useState(false)

	return (
		<section className='bg-gray-50/70 py-20 md:py-32 overflow-hidden relative'>
			{/* Decorative background elements */}

			<div className='container max-w-6xl 2xl:max-w-7xl mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center'>
					{/* ====== LEFT COLUMN: TEXT CONTENT ====== */}
					<div className='text-left'>
						<div className='flex items-center gap-4 mb-4'>
							<p className='font-style text-brand-green text-2xl'>
								Tour Percentage
							</p>
							<div className='w-16 h-px bg-brand-green' />
						</div>

						<h2 className='font-title text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6'>
							The Perfect Travel Place For You & Your Family
						</h2>

						<p className='text-gray-600 leading-relaxed mb-10'>
							Progressively impact multidisciplinary leadership skills via
							e-business leadership skills. Holistically repurpose
							multifunctional data before turnkey information. Globally restore
							client-focused potentialities before scalable core competencies.
						</p>

						<div className='space-y-6'>
							{skillsData.map((skill) => (
								<AnimatedProgressBar
									key={skill.label}
									label={skill.label}
									percentage={skill.value}
								/>
							))}
						</div>
					</div>

					{/* ====== RIGHT COLUMN: IMAGE COLLAGE ====== */}
					<div className='relative h-[450px] md:h-[550px] flex items-center justify-center'>
						<div className='absolute -top-[120px] inset-x-10 w-[640px] h-[918px] opacity-60 hidden lg:block -z-0'>
							<Image
								src='/assets/images/about/tour-package-shape.svg'
								alt=''
								layout='fill'
							/>
						</div>

						{/* Main Image */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className='absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden'>
							<Image
								src='/assets/images/about/tour-package-img-large.jpg'
								alt='Group of friends taking a selfie'
								fill
								className='object-cover'
							/>
						</motion.div>

						{/* Video Thumbnail Button */}
						<motion.button
							initial={{ scale: 0.5, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							onClick={() => setIsVideoOpen(true)}
							className='absolute top-[20%] left-[5%] md:left-0 h-40 w-40 rounded-full overflow-hidden shadow-2xl border-4 border-white group'>
							<Image
								src='/assets/images/about/tour-package-img-small.jpg'
								alt='Friends by the sea'
								fill
								className='object-cover transition-transform duration-500 group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-black/30' />
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-brand-green/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
								<Play className='h-6 w-6 text-white fill-white' />
							</div>
						</motion.button>
					</div>
				</div>
			</div>

			{/* Video Lightbox */}
			<Lightbox
				open={isVideoOpen}
				close={() => setIsVideoOpen(false)}
				plugins={[Video]}
				slides={[
					{
						type: 'video',
						sources: [{ src: '/path/to/your-video.mp4', type: 'video/mp4' }],
					},
				]}
			/>
		</section>
	)
}
