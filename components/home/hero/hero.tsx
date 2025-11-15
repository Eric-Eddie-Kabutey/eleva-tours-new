'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Bed } from 'lucide-react'

import { heroSlides } from '@/lib/hero-slides-data'
import { Button } from '@/components/ui/button'
import { HotelSearchForm } from './hotel-search-form'
import { FlightSearchForm } from './flight-search-form'
import { cn } from '@/lib/utils'

export function Hero() {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ loop: true, axis: 'y' }, [
        Autoplay({ delay: 5000, stopOnInteraction: false }), // Slides every 5 seconds
    ])
	const [activeIndex, setActiveIndex] = useState(0)
	const [activeTab, setActiveTab] = useState('hotels')

	useEffect(() => {
		if (!emblaApi) return
		const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        // Initial sync
        onSelect();
		return () => {
			emblaApi.off('select', onSelect)
		}
	}, [emblaApi])
	

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

	const currentSlide = heroSlides[activeIndex]

	return (
		<section className='relative h-screen min-h-[700px] overflow-hidden text-white'>
			{/* Background Image Carousel */}
			<div className='absolute inset-0 z-0 overflow-hidden' ref={emblaRef}>
				<div className='flex flex-col h-full'>
					{heroSlides.map((slide) => (
						<div
							key={slide.id}
							className='relative flex-shrink-0 flex-grow-0 basis-full'>
							<Image
								src={slide.imageUrl}
								alt={slide.titleLine1}
								fill
								className='object-cover'
								priority={slide.id === 1}
							/>
							<div className='absolute inset-0 bg-black/40' />
						</div>
					))}
				</div>
			</div>

			{/* Content Overlay */}
			<div className='relative z-10 h-full flex flex-col justify-center container mx-auto px-4'>
				<div className='max-w-2xl'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeIndex}
							initial='hidden'
							animate='visible'
							exit='hidden'
							variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
							<motion.p
								variants={textVariants}
								className='text-lg italic text-brand-green-light'>
								{currentSlide.preTitle}
							</motion.p>
							<motion.h1
								variants={textVariants}
								className='text-5xl md:text-7xl font-semibold font-title leading-tight mt-2'>
								{currentSlide.titleLine1} <br /> {currentSlide.titleLine2}
							</motion.h1>
							<motion.p variants={textVariants} className='mt-4 max-w-lg'>
								{currentSlide.description}
							</motion.p>
							<motion.div variants={textVariants} className='mt-8'>
								<Button
									asChild
									size='lg'
									className='bg-yellow-opaque hover:bg-green-opaque text-green-opaque hover:text-yellow-opaque font-bold'>
									<Link href='/learn-more'>LEARN MORE</Link>
								</Button>
							</motion.div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* Search Form Section */}
			<div className='absolute bottom-0 left-0 right-0 z-20'>
				<div className='container mx-auto px-4'>
					<div className='bg-brand-green p-6 rounded-t-lg'>
						<div className='flex gap-2 mb-4'>
							<Button
								onClick={() => setActiveTab('flights')}
								variant={activeTab === 'flights' ? 'secondary' : 'ghost'}
								className={cn(activeTab === 'flights' ? 'bg-green-opaque text-yellow-opaque' : 'bg-white/60 text-gray-700 hover:bg-yellow-opaque hover:text-green-opaque','gap-2')}>
								<Plane size={16} /> Flights
							</Button>
							<Button
								onClick={() => setActiveTab('hotels')}
								variant={activeTab === 'hotels' ? 'secondary' : 'ghost'}
								className={cn(activeTab === 'hotels' ? 'bg-green-opaque text-yellow-opaque' : 'bg-white/60 text-gray-700 hover:bg-yellow-opaque hover:text-green-opaque','gap-2')}>
								<Bed size={16} /> Hotels
							</Button>
						</div>
						{activeTab === 'hotels' ? (
							<HotelSearchForm />
						) : (
							<FlightSearchForm />
						)}
					</div>
				</div>
			</div>
			
		</section>
	)
}
