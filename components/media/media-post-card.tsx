import Image from 'next/image'
import Link from 'next/link'
import { User, Calendar, Tag, ArrowRight } from 'lucide-react'
import { BlogPost } from '@/data/media-posts-data'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'

export function MediaPostCard({ post }: { post: BlogPost }) {
	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden'>
			<Link href={`/blog/${post.slug}`} className='block relative aspect-video'>
				<Image
					src={post.heroImage}
					alt={post.title}
					fill
					className='object-cover'
				/>
			</Link>
			<div className='p-6'>
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
				<h3 className='font-title text-2xl font-bold text-brand-dark hover:text-brand-green transition-colors'>
					<Link href={`/blog/${post.slug}`}>{post.title}</Link>
				</h3>
				<p className='mt-3 text-gray-600 leading-relaxed line-clamp-3'>
					{/* {post} */}
				</p>
				<Button
					asChild
					variant='link'
					className='px-0 mt-4 text-brand-green font-bold'>
					<Link href={`/blog/${post.slug}`}>
						READ MORE <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</Button>
			</div>
		</div>
	)
}
