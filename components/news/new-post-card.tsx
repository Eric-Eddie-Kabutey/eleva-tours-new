import Image from 'next/image'
import Link from 'next/link'
import { User, Calendar, Tag, ArrowRight } from 'lucide-react'
import { NewsPost } from '@/lib/news-posts-data'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'

export function BlogPostCard({ post }: { post: NewsPost }) {
	const shortDescription =
		post.content.find((block) => block.type === 'paragraph')?.text || ''

	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl'>
			<Link
				href={`/news/${post.slug}`}
				className='block relative aspect-[16/9]'>
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
					<Link href={`/news/${post.slug}`}>{post.title}</Link>
				</h3>
				<p className='mt-3 text-gray-600 leading-relaxed line-clamp-3'>
					{shortDescription}
				</p>
				<Button
					asChild
					variant='link'
					className='px-4 py-6 mt-4 bg-green-opaque text-white font-bold'>
					<Link href={`/news/${post.slug}`}>
						READ MORE <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</Button>
			</div>
		</div>
	)
}
