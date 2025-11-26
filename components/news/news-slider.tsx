import Link from 'next/link'
import Image from 'next/image'
import { Search, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { tourCategories, popularTags } from '@/lib/taxonomy-data'
import { NewsPost } from '@/lib/news-posts-data'
import { format } from 'date-fns'
import { AdventureAdWidget } from '../tours/adventure-ad-widget'

export function BlogSidebar({ recentPosts }: { recentPosts: NewsPost[] }) {
	return (
		<aside className='space-y-8'>
			{/* Search Widget */}
			<div className='relative bg-[#f5f5f5] py-8 px-6'>
				{/* For server-side search, we'd wrap this in a <form> */}
				<Input
					placeholder='Enter Keyword'
					className='h-12 pl-4 pr-12 bg-white'
				/>
				<Button
					size='icon'
					className='absolute top-1/2 right-6 -translate-y-1/2 h-[45px] w-10 bg-green-opaque hover:bg-green-opaque'>
					<Search className='h-5 w-5' />
				</Button>
			</div>

			{/* Categories Widget */}
			<div className='bg-[#f5f5f5] p-6 rounded-lg shadow-md'>
				<h3 className='text-xl font-bold text-brand-dark mb-4'>Categories</h3>
				<div className='space-y-3'>
					{tourCategories.map((cat) => (
						<Link
							key={cat.slug}
							href={`/blog?category=${cat.slug}`}
							className='w-full flex justify-between items-center p-3 bg-white rounded-md shadow-sm hover:bg-brand-green/10 transition-colors text-left'>
							<span>{cat.name}</span>
							<ChevronRight className='h-5 w-5 text-gray-400' />
						</Link>
					))}
				</div>
			</div>

			{/* Recent Posts Widget */}
			<div className='bg-[#f5f5f5] p-6 rounded-lg shadow-md'>
				<h3 className='text-xl font-bold text-brand-dark mb-4'>Recent Posts</h3>
				<div className='space-y-4'>
					{recentPosts.map((post) => (
						<Link
							key={post.id}
							href={`/blog/${post.slug}`}
							className='flex items-center gap-4 group'>
							<div className='relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0'>
								<Image
									src={post.heroImage}
									alt={post.title}
									fill
									className='object-cover'
								/>
							</div>
							<div>
								<p className='font-semibold text-brand-dark group-hover:text-brand-green transition-colors line-clamp-2'>
									{post.title}
								</p>
								<p className='text-xs text-gray-500 mt-1'>
									{format(post.date, 'dd MMMM, yyyy')}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* Popular Tags Widget */}
			<div className='bg-[#f5f5f5] p-6 rounded-lg shadow-md'>
				<h3 className='text-xl font-bold text-brand-dark mb-4'>Popular Tags</h3>
				<div className='flex flex-wrap gap-2'>
					{popularTags.map((tag) => (
						<Link key={tag} href={`/blog?tag=${tag.toLowerCase()}`}>
							<Button variant='outline' className='rounded-full bg-white'>
								{tag}
							</Button>
						</Link>
					))}
				</div>
			</div>

			{/* Ad Widget */}
			<AdventureAdWidget />
		</aside>
	)
}
