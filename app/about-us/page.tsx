import { About } from '@/components/home/about/about'
import { OurTeam } from '@/components/home/about/our-team'
import { StatsBanner } from '@/components/home/about/stats'
import { TourPackage } from '@/components/home/about/tour-package'
import { ExperienceCta } from '@/components/home/experience-cta'
import { PageHero } from '@/components/shared/page-hero'
import { TestimonialsSlider } from '@/components/testimonials/testimonials-slider'
import Image from 'next/image'

export default function AboutUsPage() {
	return (
		<>
			{/* Hero section */}
			<PageHero
				title='About Us'
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'About Uus', href: '/about-us' },
				]}
				imageUrl='/assets/images/page-banner-img.jpg'
			/>

			{/* About section */}
			<About />

			{/* Tour packages */}
			<TourPackage />

			{/* stats */}
			<StatsBanner />

			{/* team */}
			<OurTeam />

			{/* New Wrapper Section */}
			<section className='bg-[#F5F5F5] relative pb-20 md:pb-28 overflow-hidden'>
				{/* Faint background world map */}
				<div className='absolute inset-0 z-0 opacity-5'>
					<Image
						src='/assets/images/home/world-map-bg-img.png'
						alt='Globe Map'
						layout='fill'
						objectFit='cover'
					/>
				</div>

				<div className='container mx-auto px-4 relative z-10'>
					<ExperienceCta />
					<TestimonialsSlider />
				</div>
			</section>
		</>
	)
}
