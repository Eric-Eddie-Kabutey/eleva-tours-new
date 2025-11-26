import { newsPostsData, NewsPost } from '@/lib/news-posts-data'
import { tourCategories } from '@/data/taxonomy-data'
import { PageHero } from '@/components/shared/page-hero'
import { BlogPostCard } from '@/components/news/new-post-card'
import { BlogSidebar } from '@/components/news/news-slider'
import { ServerPagination } from '@/components/server-pagination';

const ITEMS_PER_PAGE = 3; // show 3 posts per page

// --- Server-Side Data Functions ---
function getFilteredPosts(
    posts: NewsPost[],
    filters: { category?: string; tag?: string; search?: string }
): NewsPost[] {
    let filtered = [ ...posts ];

    if (filters.category) {
        const categoryName = tourCategories.find(c => c.slug === filters.category)?.name;
        if (categoryName) {
            filtered = filtered.filter(post => post.category === categoryName);
        } else {
            return [];
        }
    }
    if (filters.tag) {
        filtered = filtered.filter(post => post.tags.some(t => t.toLowerCase() === filters.tag?.toLowerCase()));
    }
    if (filters.search) {
        filtered = filtered.filter(post => post.title.toLowerCase().includes(filters.search?.toLowerCase() || ''));
    }
    return filtered.sort((a, b) => b.date.getTime() - a.date.getTime());
}

// Get the 3 most recent posts for the sidebar
function getRecentPosts(): NewsPost[] {
    return [ ...newsPostsData ].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 3);
}

// The main Server Component for the blog page
export default async function NewsPage({
	searchParams,
}: {
        searchParams: Promise<{ category?: string; tag?: string; search?: string, page?: string; }>
    }) {
    const resolvedSearchParams = await searchParams || {};

    const filteredPosts = getFilteredPosts(newsPostsData, resolvedSearchParams);
    const recentPosts = getRecentPosts();

    // --- PAGINATION LOGIC ON THE SERVER ---
    const currentPage = Number(resolvedSearchParams.page) || 1;
    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);	

	
	const currentPosts = filteredPosts.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	)

	return (
		<main>
			<PageHero
				title='News & Stories'
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'News & Stories', href: '/news' },
				]}
				imageUrl='/assets/images/page-banner-img.jpg'
			/>

			<div className='container max-w-6xl 2xl:max-w-7xl mx-auto py-16 px-4 md:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
					{/* Main Content (Post List) */}
					<div className='lg:col-span-2 space-y-8'>
						{currentPosts.length > 0 ? (
							currentPosts.map((post) => (
								<BlogPostCard key={post.id} post={post} />
							))
						) : (
							<div className='text-center py-20 bg-gray-50 rounded-lg'>
								<h3 className='text-2xl font-semibold text-brand-dark'>
									No Posts Found
								</h3>
								<p className='text-gray-600 mt-2'>
									Try a different filter or search term.
								</p>
							</div>
						)}

                        {/* RENDER THE PAGINATION COMPONENT */}
                        {totalPages > 1 && (
                            <div className="mt-12">
                                <ServerPagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    baseUrl="/news"                                    
                                    searchParams={resolvedSearchParams}
                                />
                            </div>
                        )}
					</div>

					{/* Sidebar */}
					<BlogSidebar recentPosts={recentPosts} />
				</div>
			</div>
		</main>
	)
}
