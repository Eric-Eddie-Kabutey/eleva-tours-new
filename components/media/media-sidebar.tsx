/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

import { tourCategories, popularTags } from '@/data/taxonomy-data'
import { BlogPost } from '@/data/media-posts-data' 
import { AdventureAdWidget } from '../tours/adventure-ad-widget'

// PROPS
type MediaSidebarProps = {
	recentPosts: BlogPost[]
	onSearch?: (term: string) => void
	onCategorySelect?: (slug: string) => void
	onTagSelect?: (tag: string) => void
}

export function MediaSidebar({
	recentPosts,
	onSearch,
	onCategorySelect,
	onTagSelect,
}: MediaSidebarProps) {
	return (
		<aside className='space-y-8'>			
            {/* Search Widget */}
			<div className="relative bg-[#f5f5f5]">
                <Input 
                    placeholder="Enter Keyword" 
					className="h-12 pl-4 pr-12"
                    // Use onChange to provide instant search feedback
                    // onChange={e => onSearch(e.target.value)}
                />
				<Button size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 h-9 w-9 bg-green-opaque hover:bg-green-opaque text=white">
                    <Search className="h-5 w-5" />
                </Button>
            </div>

			{/* Categories Widget */}
			<div className='bg-[#f5f5f5] p-6 rounded-lg shadow-md'>
				<h3 className='text-xl font-bold text-brand-dark mb-4'>Categories</h3>
				<div className='space-y-3'>
                    {/* MAP OVER THE CENTRALIZED `tourCategories` */}
					{tourCategories.map(cat => (
						<button 
                            key={cat.slug} 
                            // Pass the category's SLUG to the handler
                            // onClick={() => onCategorySelect(cat.slug)}
                            className="w-full flex justify-between items-center p-3 bg-white rounded-md shadow-sm hover:bg-brand-green/10 transition-colors text-left"
                        >
							{/* Display the human-readable NAME */}
							<span>{cat.name} ({cat.count})</span>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
						</button>
					))}
				</div>
			</div>

			{/* Recent Posts Widget */}
			<div className='bg-[#f5f5f5] p-6 rounded-lg shadow-md'>
				<h3 className='text-xl font-bold text-brand-dark mb-4'>Recent Posts</h3>
				<div className='space-y-4'>
                    {/* The image src should now be `heroImage` based on our new BlogPost type */}
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
						<Button
							key={tag}
							// onClick={() => onTagSelect(tag)}
							variant='outline'
							className='rounded-full bg-white'>
							{tag}
						</Button>
					))}
				</div>
			</div>

			{/* Ad Widget */}
			<AdventureAdWidget />
		</aside>
	)
}