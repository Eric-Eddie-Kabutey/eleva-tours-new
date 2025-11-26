import { notFound } from 'next/navigation'
import Image from 'next/image'
import { blogPostsData } from '@/data/media-posts-data'
import {
	User,
	Calendar,
	Tag,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
} from 'lucide-react'
import { format } from 'date-fns'

// Import your sidebar components
import { MediaSidebar } from '@/components/media/media-sidebar'

type ContentBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'heading'; text: string }
	| { type: 'quote'; data: { text: string; author: string } }
	| { type: 'images'; images: Array<{ src: string; alt: string }> }

interface BlogPageProps {
	params: Promise<{ slug: string }>
}

// This is now a Server Component
export default async function BlogPostPage({ params }: BlogPageProps) {
	const { slug } = await params
	const post = blogPostsData.find((p) => p.slug === slug)

	if (!post) {
		notFound()
	}

	// Helper to render content blocks
	const renderContent = (block: ContentBlock, index: number) => {
		switch (block.type) {
			case 'paragraph':
				return (
					<p key={index} className='text-gray-700 leading-relaxed'>
						{block.text}
					</p>
				)
			case 'heading':
				return (
					<h2
						key={index}
						className='text-2xl font-bold text-brand-dark mt-8 mb-4'>
						{block.text}
					</h2>
				)
			case 'quote':
				return (
					<blockquote
						key={index}
						className='my-8 p-6 bg-gray-50 border-l-4 border-brand-green rounded-r-lg'>
						<p className='text-xl italic text-gray-800'>
							&quot;{block.data.text}&quot;
						</p>
						<cite className='block text-right mt-4 not-italic font-semibold text-brand-dark'>
							— {block.data.author}
						</cite>
					</blockquote>
				)
			case 'images':
				return (
					<div
						key={index}
						className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-8'>
						{block.images.map((img: { src: string; alt: string }) => (
							<div
								key={img.src}
								className='relative aspect-video rounded-lg overflow-hidden'>
								<Image
									src={img.src}
									alt={img.alt}
									fill
									className='object-cover'
								/>
							</div>
						))}
					</div>
				)
			default:
				return null
		}
	}

	return (
		// We don't need a PageHero for the blog detail page as it has its own hero image
		<div className='bg-white'>
			<div className='container max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-4 mt-32'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
					{/* Main Content (Blog Post) */}
					<article className='lg:col-span-2'>
						<div className='relative aspect-video rounded-lg overflow-hidden mb-6'>
							<Image
								src={post.heroImage}
								alt={post.title}
								fill
								className='object-cover'
							/>
						</div>

						<div className='flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-2'>
							<span className='flex items-center gap-1.5'>
								<User size={14} /> {post.author}
							</span>
							<span className='flex items-center gap-1.5'>
								<Calendar size={14} /> {format(post.date, 'dd MMMM, yyyy')}
							</span>
							<span className='flex items-center gap-1.5'>
								<Tag size={14} /> {post.category}
							</span>
						</div>

						<h1 className='font-title text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-6'>
							{post.title}
						</h1>

						<div className='prose prose-lg max-w-none space-y-6'>
							{post.content.map(renderContent)}
						</div>

						<div className='mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
							<div className='flex items-center gap-2'>
								<span className='font-semibold'>Tags:</span>
								<div className='flex flex-wrap gap-2'>
									{post.tags.map((tag) => (
										<span
											key={tag}
											className='px-3 py-1 bg-gray-100 rounded-full text-xs font-medium'>
											{tag.toUpperCase()}
										</span>
									))}
								</div>
							</div>
							<div className='flex items-center gap-2'>
								<span className='font-semibold'>Share:</span>
								<div className='flex gap-2 text-gray-600'>
									<a href='#' className='hover:text-brand-green'>
										<Facebook size={20} />
									</a>
									<a href='#' className='hover:text-brand-green'>
										<Twitter size={20} />
									</a>
									<a href='#' className='hover:text-brand-green'>
										<Linkedin size={20} />
									</a>
									<a href='#' className='hover:text-brand-green'>
										<Instagram size={20} />
									</a>
								</div>
							</div>
						</div>
					</article>

					{/* Sidebar */}
					{/* You can now pass props to your MediaSidebar if needed */}
					<MediaSidebar recentPosts={blogPostsData.slice(0, 3)} />
				</div>
			</div>
		</div>
	)
}
